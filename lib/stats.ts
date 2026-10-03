import { prisma } from "@/lib/prisma";

// Phase-1 read-only analytics for the student dashboard/progress (spec §8, §33, §46).
// Phases 6+ (mastery, recency weighting, adaptive prioritisation) replace or build on this.

export type SubjectStat = {
  subjectId: string;
  subjectName: string;
  attempted: number;
  correct: number;
  accuracy: number; // 0-100, 0 when no attempts
};

/**
 * A grouped weakness. The authored bank is grounded in syllabus outcomes and
 * textbook chapters but carries no `topicId`, so a topic-only grouping silently
 * discarded all 3,000 of them and left "weak areas" permanently empty. Grouping
 * falls back to the chapter, which every bank question has.
 */
export type WeakArea = {
  /** `topic:<id>` or `chapter:<id>` — stable identity for React keys. */
  key: string;
  kind: "topic" | "chapter";
  label: string;
  subjectName: string;
  attempted: number;
  correct: number;
  accuracy: number;
};

/** Below this, a grouping is listed as a weak area; above it, it is not. */
export const WEAK_ACCURACY_BELOW = 70;
/** Fewer attempts than this is too small a sample to call weak. */
export const WEAK_MIN_ATTEMPTS = 2;

export type RecentTest = {
  id: string;
  mode: string;
  score: number | null;
  totalQuestions: number;
  percent: number;
  submittedAt: Date | null;
};

export type StudentStats = {
  overallAttempted: number;
  overallCorrect: number;
  overallAccuracy: number;
  bySubject: SubjectStat[];
  weakAreas: WeakArea[];
  recentTests: RecentTest[];
};

export async function getStudentStats(userId: string): Promise<StudentStats> {
  const attempts = await prisma.answerHistory.findMany({
    where: { userId },
    select: {
      isCorrect: true,
      question: {
        select: {
          subjectId: true,
          subject: { select: { name: true } },
          topicId: true,
          topic: { select: { title: true } },
          chapterId: true,
          chapter: { select: { title: true } },
        },
      },
    },
  });

  const overallAttempted = attempts.length;
  const overallCorrect = attempts.filter((a) => a.isCorrect).length;
  const overallAccuracy =
    overallAttempted === 0 ? 0 : Math.round((overallCorrect / overallAttempted) * 100);

  const bySubjectMap = new Map<string, { subjectId: string; subjectName: string; attempted: number; correct: number }>();
  const weakGroups = new Map<string, typeof attempts>();

  for (const a of attempts) {
    const subjectId = a.question.subjectId;
    const entry = bySubjectMap.get(subjectId) ?? {
      subjectId,
      subjectName: a.question.subject.name,
      attempted: 0,
      correct: 0,
    };
    entry.attempted++;
    if (a.isCorrect) entry.correct++;
    bySubjectMap.set(subjectId, entry);

    // Prefer the topic; fall back to the chapter for questions that have no
    // topic, and drop the attempt only if it has neither.
    const group = a.question.topicId
      ? { key: `topic:${a.question.topicId}`, kind: "topic" as const, label: a.question.topic?.title ?? "Untitled topic" }
      : a.question.chapterId
        ? { key: `chapter:${a.question.chapterId}`, kind: "chapter" as const, label: a.question.chapter?.title ?? "Untitled chapter" }
        : null;
    if (!group) continue;
    const list = weakGroups.get(group.key) ?? [];
    list.push(a);
    weakGroups.set(group.key, list);
  }

  const weakAreas: WeakArea[] = [...weakGroups.entries()]
    .map(([key, list]) => {
      const first = list[0];
      const attempted = list.length;
      const correct = list.filter((a) => a.isCorrect).length;
      return {
        key,
        kind: (key.startsWith("topic:") ? "topic" : "chapter") as "topic" | "chapter",
        label: first.question.topicId
          ? first.question.topic?.title ?? "Untitled topic"
          : first.question.chapter?.title ?? "Untitled chapter",
        subjectName: first.question.subject.name,
        attempted,
        correct,
        accuracy: Math.round((correct / attempted) * 100),
      };
    })
    // A group with too few attempts is not a reliable signal, and one the
    // student is already strong in is not a weakness — the previous filter had
    // only the lower bound, so 100% topics were listed as "weak areas".
    .filter((area) => area.attempted >= WEAK_MIN_ATTEMPTS && area.accuracy < WEAK_ACCURACY_BELOW)
    .sort((a, b) => a.accuracy - b.accuracy || b.attempted - a.attempted);

  const recentTests = await prisma.test.findMany({
    where: { userId, status: "COMPLETED" },
    orderBy: { submittedAt: "desc" },
    take: 5,
    select: {
      id: true,
      mode: true,
      score: true,
      totalQuestions: true,
      submittedAt: true,
    },
  });

  return {
    overallAttempted,
    overallCorrect,
    overallAccuracy,
    bySubject: [...bySubjectMap.values()].map((s) => ({
      ...s,
      accuracy: s.attempted === 0 ? 0 : Math.round((s.correct / s.attempted) * 100),
    })),
    weakAreas,
    recentTests: recentTests.map((t) => ({
      ...t,
      percent: t.totalQuestions === 0 ? 0 : Math.round(((t.score ?? 0) / t.totalQuestions) * 100),
    })),
  };
}
/** Human label for a test mode, so raw enum values never reach the UI. */
export function testModeLabel(mode: string): string {
  switch (mode) {
    case "PRACTICE":
      return "Practice session";
    case "EXAM":
      return "Timed exam";
    case "MOCK":
      return "Mock paper";
    case "PAST_PAPER":
      return "Past paper";
    default:
      return "Test";
  }
}
