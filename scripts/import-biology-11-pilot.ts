import { PrismaClient } from "@prisma/client";
import { biology11Pilot } from "../lib/data/biology-11-pilot";
import { MCQ_PROMPT_VERSIONS, validateGroundedPilot, validatePilotBalance } from "../lib/mcq-pipeline";

const prisma = new PrismaClient();
const shouldPublish = process.argv.includes("--publish");
const dryRun = process.argv.includes("--dry-run");

async function main() {
  const [existing, subject, schoolClass, syllabus, boards] = await Promise.all([
    prisma.question.findMany({
      where: { generationKey: null },
      select: { questionText: true },
    }),
    prisma.subject.findUnique({ where: { code: "BIOLOGY" } }),
    prisma.schoolClass.findUnique({ where: { grade: 11 } }),
    prisma.syllabusVersion.findUnique({ where: { code: "PMDC_MDCAT_2025_FINAL" } }),
    prisma.board.findMany({ where: { code: { in: ["FBISE", "BALOCHISTAN"] } } }),
  ]);

  if (!subject || !schoolClass || !syllabus || boards.length !== 2) {
    throw new Error("Seed reference data, the PMDC syllabus and both boards before importing the pilot.");
  }

  const issues = [
    ...validateGroundedPilot(biology11Pilot, existing.map((question) => question.questionText)),
    ...validatePilotBalance(biology11Pilot),
  ];
  if (biology11Pilot.length !== 100) issues.push({ key: "pilot", code: "COUNT", message: `Expected 100 questions; received ${biology11Pilot.length}.` });
  if (issues.length > 0) {
    for (const issue of issues) console.error(`${issue.key}: ${issue.code} — ${issue.message}`);
    throw new Error(`Pilot rejected with ${issues.length} validation issue(s).`);
  }

  const outcomes = await prisma.syllabusOutcome.findMany({ where: { syllabusVersionId: syllabus.id, subjectId: subject.id } });
  const outcomeByCode = new Map(outcomes.map((outcome) => [outcome.code, outcome]));
  const books = await prisma.book.findMany({
    where: { subjectId: subject.id, classId: schoolClass.id, boardId: { in: boards.map((board) => board.id) } },
    include: { board: true, chapters: true },
  });
  const chapterByKey = new Map(books.flatMap((book) => book.chapters.map((chapter) => [`${book.board.code}:${chapter.number}`, chapter])));

  for (const item of biology11Pilot) {
    if (!outcomeByCode.has(item.outcomeCode)) throw new Error(`Missing syllabus outcome ${item.outcomeCode}.`);
    for (const source of item.sources) {
      const chapter = chapterByKey.get(`${source.boardCode}:${source.chapterNumber}`);
      if (!chapter) throw new Error(`Missing ${source.boardCode} chapter ${source.chapterNumber}.`);
      if (chapter.pageStart !== source.pageStart || chapter.pageEnd !== source.pageEnd) {
        throw new Error(`Source range mismatch for ${source.boardCode} chapter ${source.chapterNumber}.`);
      }
    }
  }

  console.log(`Validated ${biology11Pilot.length} grounded questions (15 easy, 70 medium, 15 hard).`);
  if (dryRun) return;

  await prisma.$transaction(async (tx) => {
    for (const item of biology11Pilot) {
      const primary = item.sources[0];
      const primaryBoard = boards.find((board) => board.code === primary.boardCode)!;
      const primaryChapter = chapterByKey.get(`${primary.boardCode}:${primary.chapterNumber}`)!;
      const question = await tx.question.upsert({
        where: { generationKey: item.generationKey },
        create: {
          generationKey: item.generationKey,
          questionText: item.questionText,
          subjectId: subject.id,
          boardId: primaryBoard.id,
          classId: schoolClass.id,
          chapterId: primaryChapter.id,
          questionType: item.questionType,
          difficulty: item.difficulty,
          explanation: item.explanation,
          sourceType: "AI_GENERATED",
          sourceReference: "PMDC MDCAT 2025 syllabus + FBISE/Balochistan Grade XI Biology",
          mdcatRelevanceScore: item.mdcatRelevanceScore,
          qualityScore: 90,
          status: shouldPublish ? "PUBLISHED" : "VALIDATED",
          generationPromptVersion: MCQ_PROMPT_VERSIONS.generation,
          validationPromptVersion: MCQ_PROMPT_VERSIONS.validation,
        },
        update: {
          questionText: item.questionText,
          questionType: item.questionType,
          difficulty: item.difficulty,
          explanation: item.explanation,
          mdcatRelevanceScore: item.mdcatRelevanceScore,
          qualityScore: 90,
          status: shouldPublish ? "PUBLISHED" : "VALIDATED",
          generationPromptVersion: MCQ_PROMPT_VERSIONS.generation,
          validationPromptVersion: MCQ_PROMPT_VERSIONS.validation,
        },
      });
      await tx.questionOption.deleteMany({ where: { questionId: question.id } });
      await tx.questionMapping.deleteMany({ where: { questionId: question.id } });
      await tx.questionOption.createMany({ data: item.options.map((text, order) => ({ questionId: question.id, text, order, isCorrect: order === item.correctIndex })) });
      await tx.questionMapping.createMany({
        data: item.sources.map((source) => {
          const board = boards.find((candidate) => candidate.code === source.boardCode)!;
          const chapter = chapterByKey.get(`${source.boardCode}:${source.chapterNumber}`)!;
          return {
            questionId: question.id,
            subjectId: subject.id,
            boardId: board.id,
            chapterId: chapter.id,
            concept: item.concept,
            learningOutcome: outcomeByCode.get(item.outcomeCode)!.statement,
            syllabusOutcomeId: outcomeByCode.get(item.outcomeCode)!.id,
            sourcePageStart: source.pageStart,
            sourcePageEnd: source.pageEnd,
            schoolClassId: schoolClass.id,
          };
        }),
      });
    }
  }, { timeout: 120_000 });

  console.log(`${shouldPublish ? "Published" : "Validated"} 100 Biology Grade XI pilot questions.`);
}

main().finally(() => prisma.$disconnect());
