import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { parseImportCsv, validateImportRow, importTemplateCsv, HEADER_LABELS } from "@/lib/import";
import { computeQualityScore } from "@/lib/validation";

const REQUIRED_HEADERS = ["Subject Code", "Board Code", "Grade", "Book Title", "Chapter", "Topic", "Question", "Option A", "Option B", "Option C", "Option D", "Correct"];

export async function POST(request: Request) {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  let csvText: string | null = null;
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    const file = form.get("file");
    if (file && typeof (file as File).text === "function") {
      csvText = await (file as File).text();
    }
  } else {
    const body = await request.json().catch(() => null);
    csvText = body?.text ?? null;
  }

  if (!csvText || csvText.trim().length === 0) {
    return NextResponse.json({ error: "No CSV content received." }, { status: 400 });
  }

  const [subjects, boards, classes] = await Promise.all([
    prisma.subject.findMany({ select: { id: true, code: true } }),
    prisma.board.findMany({ select: { id: true, code: true } }),
    prisma.schoolClass.findMany({ select: { id: true, grade: true } }),
  ]);
  const subjectByCode = new Map(subjects.map((s) => [s.code.toUpperCase(), s.id]));
  const boardByCode = new Map(boards.map((b) => [b.code.toUpperCase(), b.id]));
  const classByGrade = new Map(classes.map((c) => [c.grade, c.id]));

  const lines = parseImportCsv(csvText);
  if (lines.length < 2) {
    return NextResponse.json({ error: "CSV must have a header row and at least one data row." }, { status: 400 });
  }

  const header = lines[0].map((h) => h.trim());
  const missingCols = REQUIRED_HEADERS.filter((label) => !header.some((h) => h.toLowerCase() === label.toLowerCase()));
  if (missingCols.length > 0) {
    return NextResponse.json({ error: "Missing required columns", missing: missingCols, expected: importTemplateCsv().split("\n")[0] }, { status: 400 });
  }

  // Map header label -> column index.
  const colIndex = new Map<string, number>();
  HEADER_LABELS.forEach((label) => {
    const found = header.findIndex((h) => h.toLowerCase() === label.toLowerCase());
    colIndex.set(label, found);
  });
  const cell = (labels: string[], row: string[]): string => {
    const label = labels.find((l) => (colIndex.get(l) ?? -1) >= 0);
    if (!label) return "";
    const idx = colIndex.get(label) ?? -1;
    return idx >= 0 ? (row[idx] ?? "").trim() : "";
  };

  const results = [];
  let imported = 0;
  const publishableRows = [];

  for (let i = 0; i < lines.length - 1; i++) {
    const raw = lines[i + 1];
    const record: Record<string, string> = {
      subjectCode: cell(["Subject Code"], raw),
      boardCode: cell(["Board Code"], raw),
      grade: cell(["Grade"], raw),
      bookTitle: cell(["Book Title"], raw),
      chapter: cell(["Chapter"], raw),
      topic: cell(["Topic"], raw),
      question: cell(["Question", "Question Text"], raw),
      optionA: cell(["Option A"], raw),
      optionB: cell(["Option B"], raw),
      optionC: cell(["Option C"], raw),
      optionD: cell(["Option D"], raw),
      correct: cell(["Correct", "Correct Option"], raw),
      difficulty: cell(["Difficulty"], raw),
      questionType: cell(["Question Type"], raw),
      sourceReference: cell(["Source Reference"], raw),
      explanation: cell(["Explanation"], raw),
      mdcatRelevanceScore: cell(["MDCAT Relevance (0-100)", "MDCAT Relevance"], raw),
    };

    const rowResult = validateImportRow(record, i + 2);
    results.push(rowResult);
    if (!rowResult.publishable) continue;

    // Resolve subject/board/class by code/grade (row stays failed if unresolved).
    const subjectId = subjectByCode.get(record.subjectCode.toUpperCase());
    const boardId = boardByCode.get(record.boardCode.toUpperCase());
    const classId = classByGrade.get(Number(record.grade));
    if (!subjectId || !boardId || !classId) {
      rowResult.errors.push(
        [!subjectId && "Unknown subject", !boardId && "Unknown board", !classId && "Unknown grade"].filter(Boolean).join(", ") || "Unresolvable references",
      );
      rowResult.publishable = false;
      continue;
    }

    const options = (
      [
        { letter: "A", text: record.optionA },
        { letter: "B", text: record.optionB },
        { letter: "C", text: record.optionC },
        { letter: "D", text: record.optionD },
      ] as const
    ).map((opt) => ({ text: opt.text, isCorrect: opt.letter === record.correct.toUpperCase() }));

    publishableRows.push({
      subjectId, boardId, classId,
      bookTitle: record.bookTitle,
      chapterTitle: record.chapter,
      topicTitle: record.topic,
      question: record.question,
      options,
      correctLetter: record.correct.toUpperCase(),
      difficulty: record.difficulty || "MEDIUM",
      questionType: record.questionType || "CONCEPTUAL",
      explanation: record.explanation,
      sourceReference: record.sourceReference,
      mdcatRelevanceScore: record.mdcatRelevanceScore ? Number(record.mdcatRelevanceScore) : 50,
    });
  }

  // Persist reference objects + questions.
  for (const row of publishableRows) {
    const book = await findOrCreateBook(row);
    const chapter = await findOrCreateChapter(book.id, row);
    const topic = await findOrCreateTopic(chapter.id, row.topicTitle);

    await prisma.question.create({
      data: {
        questionText: row.question,
        subjectId: row.subjectId,
        boardId: row.boardId,
        classId: row.classId,
        chapterId: chapter.id,
        topicId: topic.id,
        questionType: row.questionType,
        difficulty: row.difficulty,
        explanation: row.explanation,
        sourceType: "ADMIN_CREATED",
        sourceReference: row.sourceReference,
        mdcatRelevanceScore: row.mdcatRelevanceScore,
        qualityScore: computeQualityScore({ questionText: row.question, options: row.options, explanation: row.explanation }),
        status: "PUBLISHED",
        createdById: admin.userId,
        options: { create: row.options.map((o, idx) => ({ text: o.text, isCorrect: o.isCorrect, order: idx })) },
      },
    });
    imported++;
  }

  const failedCount = results.filter((r) => r.errors.length > 0).length;

  return NextResponse.json({
    total: lines.length - 1,
    imported,
    failed: failedCount,
    skipped: Math.max(0, lines.length - 1 - imported - failedCount),
    rows: results,
  });
}

export async function GET() {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return new NextResponse(importTemplateCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=mdcat-questions-template.csv",
    },
  });
}

type ImportableRow = {
  subjectId: string; boardId: string; classId: string;
  bookTitle: string; chapterTitle: string; topicTitle: string;
  question: string;
  options: { text: string; isCorrect: boolean }[];
  correctLetter: string;
  difficulty: string; questionType: string;
  explanation?: string; sourceReference?: string;
  mdcatRelevanceScore: number;
};

async function findOrCreateBook(row: ImportableRow) {
  const existing = await prisma.book.findFirst({
    where: {
      boardId: row.boardId,
      classId: row.classId,
      subjectId: row.subjectId,
      title: row.bookTitle,
    },
    select: { id: true },
  });
  if (existing) return existing;
  return prisma.book.create({
    data: {
      title: row.bookTitle,
      boardId: row.boardId,
      classId: row.classId,
      subjectId: row.subjectId,
      status: "PUBLISHED",
    },
    select: { id: true },
  });
}

async function findOrCreateChapter(bookId: string, row: ImportableRow) {
  const num = parseInt(row.chapterTitle.replace(/\D/g, ""), 10) || undefined;
  const existing = await prisma.chapter.findFirst({
    where: {
      bookId,
      ...(num !== undefined ? { number: num } : { title: row.chapterTitle }),
    },
    select: { id: true },
  });
  if (existing) return existing;
  return prisma.chapter.create({
    data: { bookId, title: row.chapterTitle, number: num ?? null, status: "PUBLISHED" },
    select: { id: true },
  });
}

async function findOrCreateTopic(chapterId: string, title: string) {
  const existing = await prisma.topic.findFirst({
    where: { chapterId, title: { equals: title } },
    select: { id: true },
  });
  if (existing) return existing;
  return prisma.topic.create({ data: { chapterId, title }, select: { id: true } });
}