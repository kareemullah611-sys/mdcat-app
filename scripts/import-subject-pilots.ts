import { PrismaClient } from "@prisma/client";
import { chemistryPilot } from "../lib/data/chemistry-pilot";
import { physicsPilot } from "../lib/data/physics-pilot";
import { MCQ_PROMPT_VERSIONS, validateGroundedPilot, validatePilotBalance, type GroundedMcq } from "../lib/mcq-pipeline";

const prisma = new PrismaClient();
const shouldPublish = process.argv.includes("--publish");
const dryRun = process.argv.includes("--dry-run");
const requested = process.argv.find((argument) => argument.startsWith("--subject="))?.split("=")[1]?.toUpperCase();
const banks = [{ code:"CHEMISTRY", label:"Chemistry", questions:chemistryPilot }, { code:"PHYSICS", label:"Physics", questions:physicsPilot }]
  .filter((bank) => !requested || bank.code === requested);

async function importBank(bank: { code: string; label: string; questions: GroundedMcq[] }) {
  const [existing, subject, syllabus, boards, classes] = await Promise.all([
    prisma.question.findMany({ where:{ generationKey:null }, select:{ questionText:true } }),
    prisma.subject.findUnique({ where:{ code:bank.code } }),
    prisma.syllabusVersion.findUnique({ where:{ code:"PMDC_MDCAT_2025_FINAL" } }),
    prisma.board.findMany({ where:{ code:{ in:["FBISE","BALOCHISTAN"] } } }),
    prisma.schoolClass.findMany({ where:{ grade:{ in:[11,12] } } }),
  ]);
  if (!subject || !syllabus || boards.length !== 2 || classes.length !== 2) throw new Error(`Missing reference data for ${bank.label}.`);
  const issues = [...validateGroundedPilot(bank.questions, existing.map((item) => item.questionText)), ...validatePilotBalance(bank.questions)];
  if (bank.questions.length !== 100) issues.push({ key:"pilot", code:"COUNT", message:`Expected 100 questions; received ${bank.questions.length}.` });
  if (issues.length) {
    for (const issue of issues) console.error(`${issue.key}: ${issue.code} — ${issue.message}`);
    throw new Error(`${bank.label} bank rejected with ${issues.length} issue(s).`);
  }
  const outcomes = await prisma.syllabusOutcome.findMany({ where:{ syllabusVersionId:syllabus.id, subjectId:subject.id } });
  const outcomeByCode = new Map(outcomes.map((outcome) => [outcome.code, outcome]));
  const books = await prisma.book.findMany({ where:{ subjectId:subject.id, boardId:{ in:boards.map((board) => board.id) }, classId:{ in:classes.map((item) => item.id) } }, include:{ board:true, class:true, chapters:true } });
  const chapterByKey = new Map(books.flatMap((book) => book.chapters.map((chapter) => [`${book.board.code}:${book.class.grade}:${chapter.number}`,chapter])));
  for (const item of bank.questions) {
    if (!outcomeByCode.has(item.outcomeCode)) throw new Error(`Missing syllabus outcome ${item.outcomeCode}.`);
    for (const source of item.sources) if (!chapterByKey.has(`${source.boardCode}:${source.grade ?? 11}:${source.chapterNumber}`)) throw new Error(`Missing ${source.boardCode} Grade ${source.grade ?? 11} chapter ${source.chapterNumber}.`);
  }
  console.log(`Validated ${bank.questions.length} ${bank.label} questions (15 easy, 70 medium, 15 hard).`);
  if (dryRun) return;
  await prisma.$transaction(async (tx) => {
    for (const item of bank.questions) {
      const primary = item.sources[0];
      const grade = primary.grade ?? 11;
      const schoolClass = classes.find((item) => item.grade === grade)!;
      const primaryBoard = boards.find((item) => item.code === primary.boardCode)!;
      const primaryChapter = chapterByKey.get(`${primary.boardCode}:${grade}:${primary.chapterNumber}`)!;
      const question = await tx.question.upsert({ where:{ generationKey:item.generationKey }, create:{ generationKey:item.generationKey,questionText:item.questionText,subjectId:subject.id,boardId:primaryBoard.id,classId:schoolClass.id,chapterId:primaryChapter.id,questionType:item.questionType,difficulty:item.difficulty,explanation:item.explanation,sourceType:"AI_GENERATED",sourceReference:`PMDC MDCAT 2025 syllabus + FBISE/Balochistan Grade ${grade} ${bank.label}`,mdcatRelevanceScore:item.mdcatRelevanceScore,qualityScore:90,status:shouldPublish?"PUBLISHED":"VALIDATED",generationPromptVersion:MCQ_PROMPT_VERSIONS.generation,validationPromptVersion:MCQ_PROMPT_VERSIONS.validation }, update:{ questionText:item.questionText,questionType:item.questionType,difficulty:item.difficulty,explanation:item.explanation,mdcatRelevanceScore:item.mdcatRelevanceScore,qualityScore:90,status:shouldPublish?"PUBLISHED":"VALIDATED",generationPromptVersion:MCQ_PROMPT_VERSIONS.generation,validationPromptVersion:MCQ_PROMPT_VERSIONS.validation } });
      await tx.questionOption.deleteMany({ where:{ questionId:question.id } });
      await tx.questionMapping.deleteMany({ where:{ questionId:question.id } });
      await tx.questionOption.createMany({ data:item.options.map((text,order) => ({ questionId:question.id,text,order,isCorrect:order===item.correctIndex })) });
      await tx.questionMapping.createMany({ data:item.sources.map((source) => { const grade=source.grade??11; const board=boards.find((item)=>item.code===source.boardCode)!; const chapter=chapterByKey.get(`${source.boardCode}:${grade}:${source.chapterNumber}`)!; const outcome=outcomeByCode.get(item.outcomeCode)!; return { questionId:question.id,subjectId:subject.id,boardId:board.id,chapterId:chapter.id,concept:item.concept,learningOutcome:outcome.statement,syllabusOutcomeId:outcome.id,sourcePageStart:source.pageStart,sourcePageEnd:source.pageEnd,schoolClassId:classes.find((item)=>item.grade===grade)!.id }; }) });
    }
  },{ timeout:120_000 });
  console.log(`${shouldPublish?"Published":"Validated"} 100 ${bank.label} questions.`);
}

async function main() { if (!banks.length) throw new Error("Use --subject=CHEMISTRY or --subject=PHYSICS."); for (const bank of banks) await importBank(bank); }
main().finally(() => prisma.$disconnect());
