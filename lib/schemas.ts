import { z } from "zod";
import { INPUT_LIMITS } from "@/lib/input-limits";
import { DIFFICULTIES, HISTORY_FILTERS, QUESTION_TYPES, QUESTION_STATUS, SOURCE_TYPES, TEST_MODES } from "@/lib/constants";

export const letters = ["A", "B", "C", "D", "E", "F"] as const;
export const letterFor = (index: number): string =>
  letters[index] ?? String(index + 1);

const identifier = z.string().min(1).max(INPUT_LIMITS.identifier);
const option = z.object({
  text: z.string().min(1).max(INPUT_LIMITS.optionText),
  isCorrect: z.boolean(),
}).strict();

export const testFilterSchema = z.object({
  mode: z.enum(TEST_MODES).default("PRACTICE"),
  boardIds: z.array(identifier).min(1, "Select at least one board").max(5),
  classIds: z.array(identifier).min(1, "Select at least one class").max(2),
  subjectIds: z.array(identifier).min(1, "Select at least one subject").max(10),
  chapterIds: z.array(identifier).max(100).optional().default([]),
  topicIds: z.array(identifier).max(200).optional().default([]),
  difficulties: z.array(z.enum(DIFFICULTIES)).max(DIFFICULTIES.length).optional().default([]), // empty = all
  questionTypes: z.array(z.enum(QUESTION_TYPES)).max(QUESTION_TYPES.length).optional().default([]), // empty = all
  sourceTypes: z.array(z.enum(SOURCE_TYPES)).max(SOURCE_TYPES.length).optional().default([]), // empty = all
  minRelevance: z.number().min(0).max(100).optional().default(0),
  historyFilter: z.enum(HISTORY_FILTERS).optional().default("MIXED"),
  count: z.number().int().min(1).max(300).default(10),
  timeLimitSeconds: z.number().int().min(0).optional().nullable().default(null), // 0/null = untimed
}).strict();

export type TestFilterInput = z.infer<typeof testFilterSchema>;

export const createBookSchema = z.object({
  boardId: identifier,
  classId: identifier,
  subjectId: identifier,
  title: z.string().min(2).max(INPUT_LIMITS.bookTitle),
  edition: z.string().max(INPUT_LIMITS.bookPublisher).optional(),
  publicationYear: z.coerce.number().int().min(1950).max(2100).optional(),
  publisher: z.string().max(INPUT_LIMITS.bookPublisher).optional(),
  language: z.string().max(INPUT_LIMITS.language).default("ENGLISH"),
  sourceUrl: z.string().max(INPUT_LIMITS.sourceUrl).url().optional().or(z.literal("")),
  sourceLabel: z.string().max(INPUT_LIMITS.sourceLabel).optional(),
}).strict();

export const createChapterSchema = z.object({
  bookId: identifier,
  number: z.coerce.number().int().min(1).optional(),
  title: z.string().min(2).max(INPUT_LIMITS.chapterTitle),
  summary: z.string().max(INPUT_LIMITS.chapterSummary).optional(),
}).strict();

export const createTopicSchema = z.object({
  chapterId: identifier,
  title: z.string().min(2).max(INPUT_LIMITS.topicTitle),
  content: z.string().max(INPUT_LIMITS.topicContent).optional(),
}).strict();

export const createQuestionSchema = z.object({
  questionText: z.string().min(5).max(INPUT_LIMITS.questionText),
  subjectId: identifier,
  boardId: identifier,
  classId: identifier,
  chapterId: identifier.optional(),
  topicId: identifier.optional(),
  questionType: z.enum(QUESTION_TYPES).default("CONCEPTUAL"),
  difficulty: z.enum(DIFFICULTIES).default("MEDIUM"),
  explanation: z.string().max(INPUT_LIMITS.explanation).optional(),
  sourceType: z.enum(SOURCE_TYPES).default("ADMIN_CREATED"),
  sourceReference: z.string().max(INPUT_LIMITS.sourceReference).optional(),
  mdcatRelevanceScore: z.coerce.number().int().min(0).max(100).default(50),
  options: z
    .array(option)
    .min(2)
    .max(6),
}).strict().superRefine((data, ctx) => {
  const correctCount = data.options.filter((o) => o.isCorrect).length;
  if (correctCount !== 1) {
    ctx.addIssue({
      code: "custom",
      path: ["options"],
      message: "Exactly one option must be marked correct.",
    });
  }
});

export const updateQuestionSchema = z.object({
  questionText: z.string().min(5).max(INPUT_LIMITS.questionText).optional(),
  subjectId: identifier.optional(),
  boardId: identifier.optional(),
  classId: identifier.optional(),
  chapterId: identifier.optional().nullable(),
  topicId: identifier.optional().nullable(),
  questionType: z.enum(QUESTION_TYPES).optional(),
  difficulty: z.enum(DIFFICULTIES).optional(),
  explanation: z.string().max(INPUT_LIMITS.explanation).optional().nullable(),
  sourceType: z.enum(SOURCE_TYPES).optional(),
  sourceReference: z.string().max(INPUT_LIMITS.sourceReference).optional().nullable(),
  mdcatRelevanceScore: z.coerce.number().int().min(0).max(100).optional(),
  status: z.enum(QUESTION_STATUS).optional(),
  duplicateOfId: identifier.optional().nullable(),
  issueReason: z.string().max(INPUT_LIMITS.adminNote).optional().nullable(),
  options: z.array(option)
    .min(2).max(6).optional(),
}).strict().superRefine((data, ctx) => {
  if (data.options) {
    const correctCount = data.options.filter((o) => o.isCorrect).length;
    if (correctCount !== 1) {
      ctx.addIssue({
        code: "custom",
        path: ["options"],
        message: "Exactly one option must be marked correct.",
      });
    }
  }
});

export const onboardingSchema = z.object({
  classId: identifier,
  boardId: identifier,
  goal: z.enum(["BOARD_EXAM", "MDCAT", "BOTH"]),
  subjectIds: z.array(identifier).min(1, "Select at least one subject").max(10),
}).strict();

export const importRowSchema = z.object({
  subjectCode: z.string().min(1, "Subject code is required").max(50),
  boardCode: z.string().min(1, "Board code is required").max(50),
  grade: z.coerce.number().int().min(11).max(12),
  bookTitle: z.string().min(1, "Book title is required").max(INPUT_LIMITS.bookTitle),
  chapter: z.string().min(1, "Chapter number is required").max(100),
  topic: z.string().min(1, "Topic title is required").max(INPUT_LIMITS.topicTitle),
  question: z.string().min(5, "Question text is required").max(INPUT_LIMITS.questionText),
  optionA: z.string().min(1, "Option A is required").max(INPUT_LIMITS.optionText),
  optionB: z.string().min(1, "Option B is required").max(INPUT_LIMITS.optionText),
  optionC: z.string().min(1, "Option C is required").max(INPUT_LIMITS.optionText),
  optionD: z.string().min(1, "Option D is required").max(INPUT_LIMITS.optionText),
  correct: z
    .string()
    .min(1, "Correct option is required")
    .max(1)
    .refine((v) => /^[A-D]$/.test(v.toUpperCase()), "Correct option must be A, B, C or D"),
  difficulty: z.enum(DIFFICULTIES).optional().default("MEDIUM"),
  questionType: z.enum(QUESTION_TYPES).optional().default("CONCEPTUAL"),
  sourceReference: z.string().max(INPUT_LIMITS.sourceReference).optional(),
  explanation: z.string().max(INPUT_LIMITS.explanation).optional(),
  mdcatRelevanceScore: z.coerce.number().int().min(0).max(100).optional(),
}).strict();

export type ImportRow = z.infer<typeof importRowSchema>;
