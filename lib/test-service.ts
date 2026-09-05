import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import type { TestFilterInput } from "@/lib/schemas";
import { balancedSample, randomOptionOrder, scoreSubmission, type SubmittedAnswer } from "@/lib/exam-core";

export class EmptyPoolError extends Error {
  code = "EMPTY" as const;
  constructor() {
    super("No questions match these filters. Try widening the filters.");
    this.name = "EmptyPoolError";
  }
}

/**
 * Spec §74: resolve filters → apply history → fetch candidates → balance
 * topics → randomize → create immutable Test snapshot (with presented option
 * order). One `Test` row reused across all future modes (practice/exam/past/mock).
 */
export async function buildTest(userId: string, input: TestFilterInput) {
  const where: Prisma.QuestionWhereInput = { status: "PUBLISHED" };

  // Cross-board: a question matches if its own board OR a mapping row says so (§72).
  where.OR = [
    { boardId: { in: input.boardIds } },
    { mappings: { some: { boardId: { in: input.boardIds } } } },
  ];

  if (input.subjectIds.length > 0) where.subjectId = { in: input.subjectIds };
  if (input.classIds.length > 0) where.classId = { in: input.classIds };
  if (input.chapterIds.length > 0) where.OR.push({ chapterId: { in: input.chapterIds } });
  if (input.topicIds.length > 0) where.OR.push({ topicId: { in: input.topicIds } });
  if (input.difficulties.length > 0) where.difficulty = { in: input.difficulties };
  if (input.questionTypes.length > 0) where.questionType = { in: input.questionTypes };
  if (input.sourceTypes.length > 0) where.sourceType = { in: input.sourceTypes };
  if (input.minRelevance > 0) where.mdcatRelevanceScore = { gte: input.minRelevance };

  // History preference (§28): derive attempt sets from the durable log.
  const history = await prisma.answerHistory.findMany({
    where: { userId },
    select: { questionId: true, isCorrect: true },
  });
  const everAnswered = new Set(history.map((h) => h.questionId));
  const incorrectIds = new Set(history.filter((h) => !h.isCorrect).map((h) => h.questionId));

  if (input.historyFilter === "NEVER_ATTEMPTED" && everAnswered.size > 0) {
    where.NOT = { id: { in: [...everAnswered] } };
  } else if (input.historyFilter === "INCORRECT") {
    where.id = { in: [...incorrectIds] };
  } else if (input.historyFilter === "BOOKMARKED") {
    const bookmarks = await prisma.bookmark.findMany({
      where: { userId, targetType: "QUESTION" },
      select: { targetId: true },
    });
    where.id = { in: bookmarks.map((b) => b.targetId) };
  }

  const candidates = await prisma.question.findMany({
    where,
    select: { id: true, subjectId: true, topicId: true },
  });

  if (candidates.length === 0) {
    throw new EmptyPoolError();
  }

  const selected = balancedSample(
    candidates,
    input.count,
    (q) => `${q.subjectId}:${q.topicId ?? "none"}`,
  );

  const ordered = await prisma.question.findMany({
    where: { id: { in: selected.map((s) => s.id) } },
    include: { options: { orderBy: { order: "asc" } } },
  });
  const orderedById = new Map(ordered.map((q) => [q.id, q]));
  const sequence = selected.map((s) => orderedById.get(s.id)!).filter(Boolean);

  const test = await prisma.$transaction(async (tx) => {
    const created = await tx.test.create({
      data: {
        userId,
        mode: input.mode,
        boardIds: input.boardIds,
        classIds: input.classIds,
        subjectIds: input.subjectIds,
        chapterIds: input.chapterIds,
        difficulty: input.difficulties.join(",") || null,
        questionType: input.questionTypes.join(",") || null,
        mdcatRelevance: input.minRelevance > 0 ? String(input.minRelevance) : null,
        historyFilter: input.historyFilter,
        totalQuestions: sequence.length,
        timeLimitSeconds: input.timeLimitSeconds && input.timeLimitSeconds > 0 ? input.timeLimitSeconds : null,
      },
    });

    await tx.testQuestion.createMany({
      data: sequence.map((q, i) => ({
        testId: created.id,
        questionId: q.id,
        orderIndex: i,
        optionOrder: randomOptionOrder(q.options.map((o) => o.id)),
      })),
    });

    return created;
  });

  return test;
}

/**
 * Exam submission: score the immutable snapshot against the stored correct
 * options, persist per-question results + AnswerHistory, mark the Test completed.
 */
export async function submitExam(testId: string, userId: string, answers: SubmittedAnswer[]) {
  const test = await prisma.test.findUnique({
    where: { id: testId },
    include: {
      questions: { include: { question: { include: { options: true } } } },
    },
  });

  if (!test) return { error: "NOT_FOUND" as const };
  if (test.userId !== userId) return { error: "FORBIDDEN" as const };
  if (test.status === "COMPLETED") return { error: "ALREADY_SUBMITTED" as const };

  const correctById = new Map<string, string>();
  for (const tq of test.questions) {
    const correct = tq.question.options.find((o) => o.isCorrect);
    if (correct) correctById.set(tq.questionId, correct.id);
  }

  const score = scoreSubmission(answers, correctById);
  const answeredAt = new Date();

  await prisma.$transaction(async (tx) => {
    for (const tq of test.questions) {
      const answer = answers.find((a) => a.questionId === tq.questionId);
      let isCorrect: boolean | null = null;
      if (answer && answer.selectedOptionId !== null) {
        isCorrect = answer.selectedOptionId === correctById.get(tq.questionId);
      }
      await tx.testQuestion.update({
        where: { testId_questionId: { testId, questionId: tq.questionId } },
        data: {
          selectedOptionId: answer?.selectedOptionId ?? null,
          isCorrect,
          status: answer && answer.selectedOptionId !== null ? "ANSWERED" : "UNANSWERED",
          timeSpentSeconds: answer?.timeSpentSeconds ?? null,
          answeredAt: answer && answer.selectedOptionId !== null ? answeredAt : null,
        },
      });

      if (answer && answer.selectedOptionId !== null) {
        await tx.answerHistory.create({
          data: {
            userId,
            questionId: tq.questionId,
            testId,
            selectedOptionId: answer.selectedOptionId,
            isCorrect: isCorrect === true,
            timeSpentSeconds: answer.timeSpentSeconds,
            mode: test.mode,
          },
        });
      }
    }

    await tx.test.update({
      where: { id: testId },
      data: {
        status: "COMPLETED",
        submittedAt: answeredAt,
        score: score.correct,
        correctCount: score.correct,
        incorrectCount: score.incorrect,
        unansweredCount: score.unanswered,
        timeUsedSeconds: answers.reduce((acc, a) => acc + (a.timeSpentSeconds ?? 0), 0),
      },
    });
  });

  return { ok: true as const, testId, result: { ...score, correctByIdIds: [...correctById.keys()] } };
}

/**
 * Practice mode: record a single answer with immediate machine feedback (§29).
 * Question remains in the same Test snapshot; history is logged durably.
 */
export async function recordPracticeAnswer(
  testId: string,
  userId: string,
  questionId: string,
  optionId: string | null,
  timeSpentSeconds?: number,
) {
  const test = await prisma.test.findUnique({ where: { id: testId } });
  if (!test || test.userId !== userId) return null;
  if (test.mode !== "PRACTICE") return null;

  const question = await prisma.question.findUnique({
    where: { id: questionId },
    include: { options: true },
  });
  if (!question) return null;

  const correctOption = question.options.find((o) => o.isCorrect);
  const isCorrect = optionId !== null && correctOption?.id === optionId;

  await prisma.$transaction([
    prisma.testQuestion.update({
      where: { testId_questionId: { testId, questionId } },
      data: {
        selectedOptionId: optionId,
        isCorrect,
        status: optionId !== null ? "ANSWERED" : "UNANSWERED",
        timeSpentSeconds,
        answeredAt: optionId !== null ? new Date() : null,
      },
    }),
    prisma.answerHistory.create({
      data: {
        userId,
        questionId,
        testId,
        selectedOptionId: optionId,
        isCorrect,
        timeSpentSeconds,
        mode: "PRACTICE",
      },
    }),
  ]);

  return {
    isCorrect,
    correctOptionId: correctOption?.id ?? null,
    explanation: question.explanation,
    sourceType: question.sourceType,
    sourceReference: question.sourceReference,
    questionText: question.questionText,
  };
}