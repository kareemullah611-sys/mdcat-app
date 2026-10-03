import { describe, expect, it, vi } from "vitest";
import type { TestFilterInput } from "@/lib/schemas";

vi.mock("@/lib/prisma", () => ({ prisma: {} }));

const { buildQuestionWhere } = await import("@/lib/test-service");

const BASE: TestFilterInput = {
  mode: "EXAM",
  scope: "BOARD",
  boardIds: ["board-fbise"],
  classIds: ["class-11"],
  subjectIds: ["subject-bio"],
  chapterIds: [],
  topicIds: [],
  difficulties: [],
  questionTypes: [],
  sourceTypes: [],
  minRelevance: 0,
  historyFilter: "MIXED",
  count: 25,
  timeLimitSeconds: 1800,
};

const input = (overrides: Partial<TestFilterInput> = {}): TestFilterInput => ({ ...BASE, ...overrides });

describe("buildQuestionWhere — MDCAT scope (§3 MODE B)", () => {
  it("resolves the syllabus instead of the board", () => {
    const where = buildQuestionWhere(input({ scope: "MDCAT" }), { mdcatSyllabusVersionId: "v1" });
    expect(where.mappings).toEqual({ some: { syllabusOutcome: { syllabusVersionId: "v1" } } });
    // Board selection stays available in the UI but must not gate the pool.
    expect(where.OR).toBeUndefined();
  });

  it("gives a Punjab profile the whole syllabus pool even with no board selected", () => {
    // This is the reported failure: a PUNJAB profile has no chapters mapped to the
    // bank, so any board filter returns an empty paper.
    const where = buildQuestionWhere(
      input({ scope: "MDCAT", boardIds: [] }),
      { mdcatSyllabusVersionId: "v1" },
    );
    expect(where.OR).toBeUndefined();
    expect(JSON.stringify(where)).not.toContain("board-fbise");
    expect(where.mappings).toBeDefined();
  });

  it("ignores a board even when one is sent alongside MDCAT scope", () => {
    const where = buildQuestionWhere(
      input({ scope: "MDCAT", boardIds: ["board-punjab"] }),
      { mdcatSyllabusVersionId: "v1" },
    );
    expect(JSON.stringify(where)).not.toContain("board-punjab");
  });

  it("ignores board chapters, which belong to the other scope", () => {
    const where = buildQuestionWhere(
      input({ scope: "MDCAT", chapterIds: ["chapter-fbise-1"], topicIds: ["topic-1"] }),
      { mdcatSyllabusVersionId: "v1" },
    );
    expect(where.chapterId).toBeUndefined();
    expect(where.topicId).toBeUndefined();
  });

  it("leaves no syllabus filter when the syllabus is not seeded", () => {
    const where = buildQuestionWhere(input({ scope: "MDCAT" }), { mdcatSyllabusVersionId: null });
    expect(where.mappings).toBeUndefined();
  });
});

describe("buildQuestionWhere — board scope (§3 MODE A)", () => {
  it("matches the question's own board or a cross-board mapping", () => {
    const where = buildQuestionWhere(input({ scope: "BOARD", boardIds: ["b1", "b2"] }));
    expect(where.OR).toEqual([
      { boardId: { in: ["b1", "b2"] } },
      { mappings: { some: { boardId: { in: ["b1", "b2"] } } } },
    ]);
  });

  it("narrows by chapter instead of widening the board filter", () => {
    // Regression: chapter/topic used to be pushed into the same OR array as the
    // board, so picking a chapter also admitted questions from other boards and
    // questions from other chapters of the chosen board.
    const where = buildQuestionWhere(input({ scope: "BOARD", chapterIds: ["c1"] }));
    expect(where.chapterId).toEqual({ in: ["c1"] });
    expect(where.OR).toHaveLength(2);
    expect(JSON.stringify(where.OR)).not.toContain("c1");
  });

  it("narrows by topic", () => {
    const where = buildQuestionWhere(input({ scope: "BOARD", topicIds: ["t1"] }));
    expect(where.topicId).toEqual({ in: ["t1"] });
  });
});

describe("buildQuestionWhere — shared filters", () => {
  it("only ever draws published questions", () => {
    expect(buildQuestionWhere(input()).status).toBe("PUBLISHED");
    expect(buildQuestionWhere(input({ scope: "MDCAT" })).status).toBe("PUBLISHED");
  });

  it("accepts a class taught on a mapped year as well as the primary one", () => {
    const where = buildQuestionWhere(input({ classIds: ["class-12"] }));
    expect(where.AND).toEqual([
      {
        OR: [
          { classId: { in: ["class-12"] } },
          { mappings: { some: { schoolClassId: { in: ["class-12"] } } } },
        ],
      },
    ]);
  });

  it("scopes by subject when subjects are chosen", () => {
    expect(buildQuestionWhere(input({ subjectIds: ["s1", "s2"] })).subjectId).toEqual({ in: ["s1", "s2"] });
  });

  it("keeps difficulty, type, source and relevance filters", () => {
    const where = buildQuestionWhere(
      input({ difficulties: ["HARD"], questionTypes: ["NUMERICAL"], sourceTypes: ["TEXTBOOK"], minRelevance: 65 }),
    );
    expect(where.difficulty).toEqual({ in: ["HARD"] });
    expect(where.questionType).toEqual({ in: ["NUMERICAL"] });
    expect(where.sourceType).toEqual({ in: ["TEXTBOOK"] });
    expect(where.mdcatRelevanceScore).toEqual({ gte: 65 });
  });

  it("excludes attempted questions for the never-attempted filter", () => {
    const where = buildQuestionWhere(input(), { historyIds: { exclude: ["q1", "q2"] } });
    expect(where.id).toEqual({ notIn: ["q1", "q2"] });
  });

  it("restricts to incorrect or bookmarked questions when asked", () => {
    expect(buildQuestionWhere(input(), { historyIds: { include: ["q1"] } }).id).toEqual({ in: ["q1"] });
  });
});

describe("testFilterSchema — scope validation", () => {
  it("requires a board in board scope", async () => {
    const { testFilterSchema } = await import("@/lib/schemas");
    const result = testFilterSchema.safeParse({ ...BASE, scope: "BOARD", boardIds: [] });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.error.issues[0].path).toEqual(["boardIds"]);
  });

  it("accepts MDCAT scope with no board", async () => {
    const { testFilterSchema } = await import("@/lib/schemas");
    const result = testFilterSchema.safeParse({ ...BASE, scope: "MDCAT", boardIds: [] });
    expect(result.success).toBe(true);
  });

  it("defaults to board scope", async () => {
    const { testFilterSchema } = await import("@/lib/schemas");
    const result = testFilterSchema.parse({
      mode: BASE.mode,
      boardIds: BASE.boardIds,
      classIds: BASE.classIds,
      subjectIds: BASE.subjectIds,
      count: BASE.count,
    });
    expect(result.scope).toBe("BOARD");
  });

  it("rejects an unknown scope", async () => {
    const { testFilterSchema } = await import("@/lib/schemas");
    expect(testFilterSchema.safeParse({ ...BASE, scope: "PUNJAB_ONLY" }).success).toBe(false);
  });
});
