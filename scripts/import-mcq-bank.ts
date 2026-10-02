import { PrismaClient } from "@prisma/client";
import { BANK_BATCHES, BATCH_DIFFICULTY_TARGETS, BATCH_TARGET_SIZE, batchesForSubject, type BankBatch } from "../lib/data/mcq-bank/banks";
import { type BankSubject } from "../lib/data/mcq-bank/coverage";
import { OUTCOME_COVERAGE_ALL } from "../lib/data/mcq-bank/coverage-index";
import { BANK_PROMPT_VERSIONS, validateDifficultyBalance, validateGroundedPilot } from "../lib/mcq-pipeline";
import { BOARD_LABEL } from "../lib/data/mcq-bank/coverage";

/**
 * Imports the authored Grade XI MCQ banks (§20, §25, §56).
 *
 * Validation runs before any write: structural + duplicate checks against the
 * existing bank, the configured difficulty mix, the answer-position spread, and
 * a database check that every PMDC MDCAT 2025 outcome and every board chapter
 * referenced by a source really exists with the matching page range. Questions
 * land as VALIDATED; `--publish` promotes them to PUBLISHED. Upserts on
 * `generationKey`, so re-running is idempotent.
 *
 * Usage:
 *   tsx scripts/import-mcq-bank.ts --dry-run
 *   tsx scripts/import-mcq-bank.ts --subject=BIOLOGY
 *   tsx scripts/import-mcq-bank.ts --batch=chem-xi-b2 --publish
 */

const prisma = new PrismaClient();
const SYLLABUS_CODE = "PMDC_MDCAT_2025_FINAL";
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const publish = args.includes("--publish");
const requestedSubject = args.find((a) => a.startsWith("--subject="))?.split("=")[1]?.toUpperCase() as BankSubject | undefined;
const requestedBatch = args.find((a) => a.startsWith("--batch="))?.split("=")[1];
const MAX_ANSWER_POSITION_SHARE = 0.4;

type ChapterRef = { id: string; pageStart?: number; pageEnd?: number };
const chapterByKey = new Map<string, ChapterRef>();
const subjectIds = new Map<string, string>();
const boardIds = new Map<string, string>();
const classIds = new Map<number | undefined, string>();
let syllabusId = "";

const chapterKey = (subject: string, boardCode: string, grade: number | undefined, number: number | undefined) =>
  `${subject}:${boardCode}:${grade}:${number}`;

function selectedBatches(): BankBatch[] {
  const requestedGrade = args.find((a) => a.startsWith("--grade="))?.split("=")[1];
  const batches = BANK_BATCHES.filter((batch) => {
    if (requestedBatch) return batch.code === requestedBatch;
    if (requestedSubject && batch.subject !== requestedSubject) return false;
    if (requestedGrade && batch.grade !== Number(requestedGrade)) return false;
    return true;
  });
  if (batches.length === 0) throw new Error("Use --subject=BIOLOGY|CHEMISTRY|PHYSICS or --batch=<batch code>.");
  return batches;
}

function validateBatch(batch: BankBatch, existingTexts: string[]) {
  const questions = batch.questions;
  const issues = [
    ...validateGroundedPilot(questions, existingTexts),
    ...validateDifficultyBalance(questions, BATCH_DIFFICULTY_TARGETS),
  ];
  if (questions.length !== BATCH_TARGET_SIZE) {
    issues.push({ key: batch.code, code: "BATCH_SIZE", message: `Expected ${BATCH_TARGET_SIZE} questions; received ${questions.length}.` });
  }
  const positions = [0, 1, 2, 3].map((index) => questions.filter((question) => question.correctIndex === index).length);
  if (Math.max(...positions) / questions.length > MAX_ANSWER_POSITION_SHARE) {
    issues.push({ key: batch.code, code: "ANSWER_POSITION", message: `Answer positions are unbalanced: ${positions.join("/")}.` });
  }
  for (const item of questions) {
    const coverage = OUTCOME_COVERAGE_ALL[item.outcomeCode];
    if (!coverage) {
      issues.push({ key: item.generationKey, code: "UNKNOWN_OUTCOME", message: `${item.outcomeCode} is outside the Grade XI/XII coverage map.` });
      continue;
    }
    for (const source of item.sources) {
      if (source.grade !== 11 && source.grade !== 12) {
        issues.push({ key: item.generationKey, code: "BAD_GRADE", message: `Sources must come from Grade 11 or 12; found Grade ${source.grade}.` });
        continue;
      }
      const chapter = chapterByKey.get(chapterKey(batch.subject, source.boardCode, source.grade, source.chapterNumber));
      if (!chapter) {
        issues.push({ key: item.generationKey, code: "UNKNOWN_CHAPTER", message: `Missing ${source.boardCode} Grade ${source.grade} ${batch.subject} chapter ${source.chapterNumber}.` });
        continue;
      }
      if ((chapter.pageStart ?? undefined) !== source.pageStart || (chapter.pageEnd ?? undefined) !== source.pageEnd) {
        issues.push({ key: item.generationKey, code: "PAGE_MISMATCH", message: `Page range mismatch for ${source.boardCode} chapter ${source.chapterNumber}.` });
      }
    }
  }
  return issues;
}

async function writeBatch(batch: BankBatch) {
  const subjectId = subjectIds.get(batch.subject)!;
  const statements = new Map(
    (await prisma.syllabusOutcome.findMany({ where: { syllabusVersionId: syllabusId, code: { in: batch.questions.map((q) => q.outcomeCode) } } })).map((outcome) => [outcome.code, outcome]),
  );

  return prisma.$transaction(async (tx) => {
    for (const item of batch.questions) {
      const primary = item.sources[0];
      const outcome = statements.get(item.outcomeCode)!;
      const payload = {
        questionText: item.questionText,
        subjectId,
        boardId: boardIds.get(primary.boardCode)!,
        classId: classIds.get(primary.grade)!,
        chapterId: chapterByKey.get(chapterKey(batch.subject, primary.boardCode, primary.grade, primary.chapterNumber))!.id,
        questionType: item.questionType,
        difficulty: item.difficulty,
        explanation: item.explanation,
        sourceType: "AI_GENERATED",
        sourceReference: `PMDC MDCAT 2025 ${item.outcomeCode} + ${item.sources.map((source) => `${source.boardCode} Grade ${source.grade} ${BOARD_LABEL[batch.subject]} ch.${source.chapterNumber}`).join(" + ")}`,
        mdcatRelevanceScore: item.mdcatRelevanceScore,
        qualityScore: 90,
        status: publish ? "PUBLISHED" : "VALIDATED",
        generationPromptVersion: BANK_PROMPT_VERSIONS.generation,
        validationPromptVersion: BANK_PROMPT_VERSIONS.validation,
      };
      const question = await tx.question.upsert({
        where: { generationKey: item.generationKey },
        create: { generationKey: item.generationKey, ...payload },
        update: payload,
      });
      await tx.questionOption.deleteMany({ where: { questionId: question.id } });
      await tx.questionMapping.deleteMany({ where: { questionId: question.id } });
      await tx.questionOption.createMany({
        data: item.options.map((text, order) => ({ questionId: question.id, text, order, isCorrect: order === item.correctIndex })),
      });
      await tx.questionMapping.createMany({
        data: item.sources.map((source) => ({
          questionId: question.id,
          subjectId,
          boardId: boardIds.get(source.boardCode)!,
          chapterId: chapterByKey.get(chapterKey(batch.subject, source.boardCode, source.grade, source.chapterNumber))!.id,
          concept: item.concept,
          learningOutcome: outcome.statement,
          syllabusOutcomeId: outcome.id,
          sourcePageStart: source.pageStart,
          sourcePageEnd: source.pageEnd,
          schoolClassId: classIds.get(source.grade)!,
        })),
      });
    }
    return batch.questions.length;
  }, { timeout: 600_000 });
}

async function main() {
  const syllabus = await prisma.syllabusVersion.findUnique({ where: { code: SYLLABUS_CODE } });
  if (!syllabus) throw new Error(`Seed ${SYLLABUS_CODE} first (npm run syllabus:seed:pmdc-2025).`);
  syllabusId = syllabus.id;

  for (const subject of await prisma.subject.findMany()) subjectIds.set(subject.code, subject.id);
  for (const board of await prisma.board.findMany()) boardIds.set(board.code, board.id);
  for (const schoolClass of await prisma.schoolClass.findMany()) classIds.set(schoolClass.grade, schoolClass.id);
  for (const chapter of await prisma.chapter.findMany({ include: { book: { include: { board: true, class: true, subject: true } } } })) {
    chapterByKey.set(
      chapterKey(chapter.book.subject.code, chapter.book.board.code, chapter.book.class.grade, chapter.number ?? undefined),
      { id: chapter.id, pageStart: chapter.pageStart ?? undefined, pageEnd: chapter.pageEnd ?? undefined },
    );
  }

  const existingTexts = (await prisma.question.findMany({ where: { generationKey: null }, select: { questionText: true } })).map((question) => question.questionText);

  for (const batch of selectedBatches()) {
    const issues = validateBatch(batch, existingTexts);
    if (issues.length > 0) {
      for (const issue of issues.slice(0, 25)) console.error(`${issue.key}: ${issue.code} — ${issue.message}`);
      throw new Error(`${batch.code} rejected with ${issues.length} issue(s).`);
    }
    const written = dryRun ? batch.questions.length : await writeBatch(batch);
    const outcomes = new Set(batch.questions.map((question) => question.outcomeCode));
    console.log(`${batch.code}: ${written} ${batch.subject} questions over ${outcomes.size} MDCAT outcomes — ${publish ? "PUBLISHED" : "VALIDATED"}${dryRun ? " (dry run)" : ""}.`);
    for (const question of batch.questions) existingTexts.push(question.questionText);
  }

  for (const subject of ["BIOLOGY", "CHEMISTRY", "PHYSICS"] as const) {
    for (const grade of [11, 12] as const) {
      const total = batchesForSubject(subject, grade).reduce((sum, batch) => sum + batch.questions.length, 0);
      console.log(`${subject} Grade ${grade} bank: ${total} authored questions.`);
    }
  }
}

main().finally(() => prisma.$disconnect());