import { z } from "zod";
import { DIFFICULTIES, HISTORY_FILTERS, QUESTION_TYPES, SOURCE_TYPES, TEST_MODES } from "@/lib/constants";

export const letters = ["A", "B", "C", "D", "E", "F"] as const;
export const letterFor = (index: number): string =>
  letters[index] ?? String(index + 1);

export const testFilterSchema = z.object({
  mode: z.enum(TEST_MODES).default("PRACTICE"),
  boardIds: z.array(z.string()).min(1, "Select at least one board").max(5),
  classIds: z.array(z.string()).min(1, "Select at least one class").max(2),
  subjectIds: z.array(z.string()).min(1, "Select at least one subject").max(10),
  chapterIds: z.array(z.string()).optional().default([]),
  topicIds: z.array(z.string()).optional().default([]),
  difficulties: z.array(z.enum(DIFFICULTIES)).optional().default([]), // empty = all
  questionTypes: z.array(z.enum(QUESTION_TYPES)).optional().default([]), // empty = all
  sourceTypes: z.array(z.enum(SOURCE_TYPES)).optional().default([]), // empty = all
  minRelevance: z.number().min(0).max(100).optional().default(0),
  historyFilter: z.enum(HISTORY_FILTERS).optional().default("MIXED"),
  count: z.number().int().min(1).max(300).default(10),
  timeLimitSeconds: z.number().int().min(0).optional().nullable().default(null), // 0/null = untimed
});

export type TestFilterInput = z.infer<typeof testFilterSchema>;

export const createBookSchema = z.object({
  boardId: z.string().min(1),
  classId: z.string().min(1),
  subjectId: z.string().min(1),
  title: z.string().min(2),
  edition: z.string().optional(),
  publicationYear: z.coerce.number().int().min(1950).max(2100).optional(),
  publisher: z.string().optional(),
  language: z.string().default("ENGLISH"),
  sourceUrl: z.string().url().optional().or(z.literal("")),
  sourceLabel: z.string().optional(),
});

export const createChapterSchema = z.object({
  bookId: z.string().min(1),
  number: z.coerce.number().int().min(1).optional(),
  title: z.string().min(2),
  summary: z.string().optional(),
});

export const createTopicSchema = z.object({
  chapterId: z.string().min(1),
  title: z.string().min(2),
  content: z.string().optional(),
});

export const createQuestionSchema = z.object({
  questionText: z.string().min(5),
  subjectId: z.string().min(1),
  boardId: z.string().min(1),
  classId: z.string().min(1),
  chapterId: z.string().optional(),
  topicId: z.string().optional(),
  questionType: z.enum(QUESTION_TYPES).default("CONCEPTUAL"),
  difficulty: z.enum(DIFFICULTIES).default("MEDIUM"),
  explanation: z.string().optional(),
  sourceType: z.enum(SOURCE_TYPES).default("ADMIN_CREATED"),
  sourceReference: z.string().optional(),
  mdcatRelevanceScore: z.coerce.number().int().min(0).max(100).default(50),
  options: z
    .array(z.object({ text: z.string().min(1), isCorrect: z.boolean() }))
    .min(2)
    .max(6),
}).superRefine((data, ctx) => {
  const correctCount = data.options.filter((o) => o.isCorrect).length;
  if (correctCount !== 1) {
    ctx.addIssue({
      code: "custom",
      path: ["options"],
      message: "Exactly one option must be marked correct.",
    });
  }
});

export const onboardingSchema = z.object({
  classId: z.string().min(1, "Select your class"),
  boardId: z.string().min(1, "Select your board"),
  goal: z.enum(["BOARD_EXAM", "MDCAT", "BOTH"]),
  subjectIds: z.array(z.string()).min(1, "Select at least one subject").max(10),
});