import type { PrismaClient } from "@prisma/client";
import { BANK_BATCHES, BATCH_DIFFICULTY_TARGETS, BATCH_TARGET_SIZE, type BankBatch } from "./banks";
import { OUTCOME_COVERAGE_ALL } from "./coverage-index";
import { BANK_PROMPT_VERSIONS, validateDifficultyBalance, validateGroundedPilot, type GroundedMcq } from "../../mcq-pipeline";
import type { BankSubject } from "./coverage";

/**
 * Grounded bank import (spec §20, §25, §56, §98).
 *
 * One implementation, used by both the CLI (`scripts/import-mcq-bank.ts`) and
 * the admin "Load question bank" action (`/api/admin/mcq-bank`), so the web
 * action can never diverge from the command-line behaviour.
 *
 * Validation runs per batch *before* any write: structural + duplicate checks
 * against the existing bank, the configured difficulty mix, the answer-position
 * spread, and a database check that every PMDC MDCAT 2025 outcome and every
 * board chapter referenced by a source really exists with the matching page
 * range. Questions are written with `VALIDATED` status unless `publish` is set.
 * Upserts on `generationKey`, so a re-run is idempotent.
 */

const SYLLABUS_CODE = "PMDC_MDCAT_2025_FINAL";
/** No single answer option may hold more than this share of a batch (§51). */
export const MAX_ANSWER_POSITION_SHARE = 0.4;

export type ImportScope = {
  subject?: BankSubject;
  grade?: 11 | 12;
  batch?: string;
  /** Import as PUBLISHED (student-visible) instead of VALIDATED. */
  publish: boolean;
};

export type ImportBatchResult = {
  code: string;
  subject: BankSubject;
  grade: 11 | 12;
  questions: number;
  outcomes: number;
  status: "PUBLISHED" | "VALIDATED";
};

export type ImportReport = {
  scope: ImportScope;
  batches: ImportBatchResult[];
  totalQuestions: number;
  totalOutcomes: number;
  /** Outcome codes that no question in the run referenced. */
  skippedOutcomes: string[];
};

export type ImportHooks = {
  onBatchComplete?: (result: ImportBatchResult, completed: number, total: number) => void;
};

export type ImportError = Error & { issues?: string[] };

const chapterKey = (subject: string, boardCode: string, grade: number | undefined, chapter: number | undefined | null) =>
  `${subject}:${boardCode}:${grade}:${chapter ?? "null"}`;

type ChapterRef = { id: string; pageStart?: number; pageEnd?: number };

function selectBatches(scope: ImportScope): BankBatch[] {
  const selected = BANK_BATCHES.filter((batch) => {
    if (scope.batch && batch.code !== scope.batch) return false;
    if (scope.subject && batch.subject !== scope.subject) return false;
    if (scope.grade && batch.grade !== scope.grade) return false;
    return true;
  });
  if (selected.length === 0) {
    throw Object.assign(new Error("No batches match that selection."), { issues: ["EMPTY_SELECTION"] });
  }
  return selected;
}

/** Throws before writing anything if the batch cannot be trusted. */
function validateBatch(
  batch: BankBatch,
  existingTexts: string[],
  chapters: Map<string, ChapterRef>,
): string[] {
  const issues = [
    ...validateGroundedPilot(batch.questions, existingTexts),
    ...validateDifficultyBalance(batch.questions, BATCH_DIFFICULTY_TARGETS),
  ].map((issue) => `${issue.key}: ${issue.code} — ${issue.message}`);

  if (batch.questions.length !== BATCH_TARGET_SIZE) {
    issues.push(`${batch.code}: BATCH_SIZE — expected ${BATCH_TARGET_SIZE} questions; received ${batch.questions.length}.`);
  }
  const positions = [0, 1, 2, 3].map((index) => batch.questions.filter((question) => question.correctIndex === index).length);
  if (Math.max(...positions) / batch.questions.length > MAX_ANSWER_POSITION_SHARE) {
    issues.push(`${batch.code}: ANSWER_POSITION — answer positions are unbalanced: ${positions.join("/")}.`);
  }
  for (const item of batch.questions) {
    if (!OUTCOME_COVERAGE_ALL[item.outcomeCode]) {
      issues.push(`${item.generationKey}: UNKNOWN_OUTCOME — ${item.outcomeCode} is outside the Grade XI/XII coverage map.`);
      continue;
    }
    for (const source of item.sources) {
      if (source.grade !== 11 && source.grade !== 12) {
        issues.push(`${item.generationKey}: BAD_GRADE — sources must be Grade 11 or 12; found Grade ${source.grade}.`);
        continue;
      }
      const chapter = chapters.get(chapterKey(batch.subject, source.boardCode, source.grade, source.chapterNumber));
      if (!chapter) {
        issues.push(`${item.generationKey}: UNKNOWN_CHAPTER — missing ${source.boardCode} Grade ${source.grade} ${batch.subject} chapter ${source.chapterNumber}.`);
        continue;
      }
      if (chapter.pageStart !== source.pageStart || chapter.pageEnd !== source.pageEnd) {
        issues.push(`${item.generationKey}: PAGE_MISMATCH — page range mismatch for ${source.boardCode} chapter ${source.chapterNumber}.`);
      }
    }
  }
  return issues;
}

async function loadReferenceData(db: PrismaClient, subject: BankSubject, outcomeCodes: string[]) {
  const syllabus = await db.syllabusVersion.findUnique({ where: { code: SYLLABUS_CODE } });
  if (!syllabus) {
    throw Object.assign(new Error(`Seed ${SYLLABUS_CODE} before importing the bank.`), {
      issues: ["SYLLABUS_MISSING"],
    });
  }
  const [subjectRow, boards, classes, chapters, outcomes] = await Promise.all([
    db.subject.findUnique({ where: { code: subject } }),
    db.board.findMany(),
    db.schoolClass.findMany(),
    db.chapter.findMany({ include: { book: { include: { board: true, class: true, subject: true } } } }),
    db.syllabusOutcome.findMany({ where: { syllabusVersionId: syllabus.id, code: { in: outcomeCodes } } }),
  ]);
  if (!subjectRow) throw new Error(`Missing subject ${subject}.`);

  const chapterByKey = new Map<string, ChapterRef>();
  for (const chapter of chapters) {
    if (chapter.book.subject.code !== subject) continue;
    chapterByKey.set(
      chapterKey(chapter.book.subject.code, chapter.book.board.code, chapter.book.class.grade, chapter.number),
      { id: chapter.id, pageStart: chapter.pageStart ?? undefined, pageEnd: chapter.pageEnd ?? undefined },
    );
  }
  return {
    syllabusId: syllabus.id,
    subjectId: subjectRow.id,
    outcomes: new Map(outcomes.map((outcome) => [outcome.code, outcome])),
    boardIds: new Map(boards.map((board) => [board.code, board.id])),
    // grade is optional on a source, so the map is keyed to tolerate undefined
    classIds: new Map<number | undefined, string>(classes.map((schoolClass) => [schoolClass.grade, schoolClass.id])),
    chapterByKey,
  };
}

async function writeBatch(
  db: PrismaClient,
  batch: BankBatch,
  reference: Awaited<ReturnType<typeof loadReferenceData>>,
  publish: boolean,
): Promise<number> {
  const { subjectId, outcomes } = reference;
  return db.$transaction(
    async (tx) => {
      for (const item of batch.questions as GroundedMcq[]) {
        const primary = item.sources[0];
        const outcome = outcomes.get(item.outcomeCode);
        if (!outcome) throw new Error(`Outcome ${item.outcomeCode} missing from the syllabus.`);
        const payload = {
          questionText: item.questionText,
          subjectId,
          boardId: reference.boardIds.get(primary.boardCode)!,
          classId: reference.classIds.get(primary.grade)!,
          chapterId: reference.chapterByKey.get(chapterKey(batch.subject, primary.boardCode, primary.grade, primary.chapterNumber))!.id,
          questionType: item.questionType,
          difficulty: item.difficulty,
          explanation: item.explanation,
          sourceType: "AI_GENERATED",
          sourceReference: `PMDC MDCAT 2025 ${item.outcomeCode} + ${item.sources
            .map((source) => `${source.boardCode} Grade ${source.grade} ch.${source.chapterNumber}`)
            .join(" + ")}`,
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
            boardId: reference.boardIds.get(source.boardCode)!,
            chapterId: reference.chapterByKey.get(chapterKey(batch.subject, source.boardCode, source.grade, source.chapterNumber))!.id,
            concept: item.concept,
            learningOutcome: outcome.statement,
            syllabusOutcomeId: outcome.id,
            sourcePageStart: source.pageStart,
            sourcePageEnd: source.pageEnd,
            schoolClassId: reference.classIds.get(source.grade)!,
          })),
        });
      }
      return batch.questions.length;
    },
    { timeout: 600_000 },
  );
}

/**
 * Validate and import the authored bank. `dryRun` performs every check and
 * reports what *would* be written without touching the database.
 */
export async function runBankImport(
  db: PrismaClient,
  scope: ImportScope & { dryRun?: boolean },
  hooks: ImportHooks = {},
): Promise<ImportReport> {
  const batches = selectBatches(scope);
  const subjectIds = new Map<BankSubject, string>();
  for (const batch of batches) {
    if (!subjectIds.has(batch.subject)) {
      const subject = await db.subject.findUnique({ where: { code: batch.subject } });
      if (!subject) throw new Error(`Missing subject ${batch.subject}.`);
      subjectIds.set(batch.subject, subject.id);
    }
  }

  const bySubject = new Map<BankSubject, Awaited<ReturnType<typeof loadReferenceData>>>();
  for (const subject of subjectIds.keys()) {
    const codes = [
      ...new Set(
        batches.filter((batch) => batch.subject === subject).flatMap((batch) => batch.questions.map((question) => question.outcomeCode)),
      ),
    ];
    bySubject.set(subject, await loadReferenceData(db, subject, codes));
  }

  // Every outcome a selected batch cites must already exist in the seeded
  // syllabus. Checked up front so a typo cannot leave a half-written run
  // behind: batches are written one transaction at a time, so a late
  // discovery would otherwise commit the earlier ones.
  const missingOutcomes = [
    ...new Set(
      batches.flatMap((batch) =>
        batch.questions
          .filter((question) => !bySubject.get(batch.subject)!.outcomes.has(question.outcomeCode))
          .map((question) => `${batch.code}: ${question.outcomeCode} is not in the PMDC MDCAT 2025 syllabus`),
      ),
    ),
  ];
  if (missingOutcomes.length > 0) {
    throw Object.assign(
      new Error(`Seed the PMDC MDCAT 2025 syllabus before loading the bank: ${missingOutcomes.length} outcome reference(s) are unknown.`),
      { issues: missingOutcomes },
    );
  }

  const existingTexts = (
    await db.question.findMany({ where: { generationKey: null }, select: { questionText: true } })
  ).map((question) => question.questionText);

  const results: ImportBatchResult[] = [];
  const referencedOutcomes = new Set<string>();
  for (const [index, batch] of batches.entries()) {
    const reference = bySubject.get(batch.subject)!;
    const issues = validateBatch(batch, existingTexts, reference.chapterByKey);
    if (issues.length > 0) {
      throw Object.assign(new Error(`${batch.code} rejected with ${issues.length} issue(s).`), { issues });
    }
    if (!scope.dryRun) await writeBatch(db, batch, reference, scope.publish);
    for (const question of batch.questions) {
      referencedOutcomes.add(question.outcomeCode);
      existingTexts.push(question.questionText);
    }
    const result: ImportBatchResult = {
      code: batch.code,
      subject: batch.subject,
      grade: batch.grade,
      questions: batch.questions.length,
      outcomes: new Set(batch.questions.map((question) => question.outcomeCode)).size,
      status: scope.publish ? "PUBLISHED" : "VALIDATED",
    };
    results.push(result);
    hooks.onBatchComplete?.(result, index + 1, batches.length);
  }

  const allOutcomes = [...bySubject.values()].flatMap((reference) => [...reference.outcomes.keys()]);
  return {
    scope: { ...scope },
    batches: results,
    totalQuestions: results.reduce((sum, result) => sum + result.questions, 0),
    totalOutcomes: referencedOutcomes.size,
    skippedOutcomes: allOutcomes.filter((code) => !referencedOutcomes.has(code)),
  };
}
