import { validateQuestion, computeQualityScore } from "@/lib/validation";
import { importRowSchema, type ImportRow } from "@/lib/schemas";

/**
 * Phase 2 CSV import (admin / bulk ingest).
 * Pure parsing + per-row validation + quality scoring — no DB I/O here.
 * The route resolves refs (topic/chapter/book) and persists, using these
 * outputs to publish only rows that are valid AND meet the quality bar (§25).
 */

export type ImportRowResult = {
  rowIndex: number; // 1-based (matches spreadsheet rows)
  title: string; // short label for the UI
  errors: string[];
  qualityScore: number;
  publishable: boolean;
};

const HEADERS: { key: keyof ImportRow; label: string }[] = [
  { key: "subjectCode", label: "Subject Code" },
  { key: "boardCode", label: "Board Code" },
  { key: "grade", label: "Grade" },
  { key: "bookTitle", label: "Book Title" },
  { key: "chapter", label: "Chapter" },
  { key: "topic", label: "Topic" },
  { key: "question", label: "Question" },
  { key: "optionA", label: "Option A" },
  { key: "optionB", label: "Option B" },
  { key: "optionC", label: "Option C" },
  { key: "optionD", label: "Option D" },
  { key: "correct", label: "Correct" },
  { key: "difficulty", label: "Difficulty" },
  { key: "questionType", label: "Question Type" },
  { key: "sourceReference", label: "Source Reference" },
  { key: "explanation", label: "Explanation" },
  { key: "mdcatRelevanceScore", label: "MDCAT Relevance (0-100)" },
];

/** Canonical column order/labels for the admin CSV template + header parsing. */
export const HEADER_LABELS = HEADERS.map((h) => h.label);

export function importTemplateCsv(): string {
  const header = HEADERS.map((h) => h.label).join(",");
  const example =
    "BIOLOGY,PUNJAB,12,Biology Grade 12,10,Electrophile,Which of the following is an electrophile?,H+,H-,NH3,Na+,A,MEDIUM,CONCEPTUAL,Chapter 10 page 12,A species that accepts an electron pair,85";
  return `${header}\n${example}`;
}

export function parseImportCsv(text: string): string[][] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => splitCsvLine(line));
}

/**
 * Minimal RFC-4180-ish splitter (handles quoted fields with commas/escaped quotes).
 */
export function splitCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      result.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

/**
 * Validate a single import row (sans DB). Returns row results including
 * errors if any, otherwise quality score + publishable flag.
 */
export function validateImportRow(row: Record<string, string>, rowNumber: number): ImportRowResult {
  const result: ImportRowResult = {
    rowIndex: rowNumber,
    title: row.question?.slice(0, 60) ?? "",
    errors: [],
    qualityScore: 0,
    publishable: false,
  };

  // Map raw → typed via schema
  const parsedValue = importRowSchema.safeParse({
    subjectCode: row.subjectCode,
    boardCode: row.boardCode,
    grade: row.grade,
    bookTitle: row.bookTitle,
    chapter: row.chapter,
    topic: row.topic,
    question: row.question,
    optionA: row.optionA,
    optionB: row.optionB,
    optionC: row.optionC,
    optionD: row.optionD,
    correct: row.correct,
    difficulty: row.difficulty,
    questionType: row.questionType,
    sourceReference: row.sourceReference,
    explanation: row.explanation,
    mdcatRelevanceScore: row.mdcatRelevanceScore,
  });

  if (!parsedValue.success) {
    result.errors = parsedValue.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
    return result;
  }

  const data = parsedValue.data;

  const options = [
    { text: row.optionA ?? "", isCorrect: /^A$/i.test(data.correct) },
    { text: row.optionB ?? "", isCorrect: /^B$/i.test(data.correct) },
    { text: row.optionC ?? "", isCorrect: /^C$/i.test(data.correct) },
    { text: row.optionD ?? "", isCorrect: /^D$/i.test(data.correct) },
  ];

  const validationIssues = validateQuestion({ questionText: data.question, options, explanation: data.explanation });
  if (validationIssues.length > 0) {
    result.errors = validationIssues.map((v) => v.message);
    return result;
  }

  const quality = computeQualityScore({ questionText: data.question, options, explanation: data.explanation });
  result.qualityScore = quality;
  if (!data.explanation || data.explanation.trim().length < 15) {
    result.errors.push("An explanation (min. 15 characters) is required to auto-publish.");
    return result;
  }
  result.publishable = true;
  return result;
}