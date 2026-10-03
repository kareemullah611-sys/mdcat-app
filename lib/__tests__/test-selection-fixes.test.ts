import { describe, expect, it, vi } from "vitest";
import type { TestFilterInput } from "@/lib/schemas";

vi.mock("@/lib/prisma", () => ({ prisma: {} }));

const { buildQuestionWhere, buildTextbookScopeWhere } = await import("@/lib/test-service");
const { testFilterSchema, letterFor } = await import("@/lib/schemas");
const { WEAK_ACCURACY_BELOW, WEAK_MIN_ATTEMPTS } = await import("@/lib/stats");

const input = (overrides: Partial<TestFilterInput> = {}): TestFilterInput =>
  testFilterSchema.parse({
    mode: "EXAM",
    scope: "BOARD",
    boardIds: ["b1"],
    classIds: ["c11"],
    subjectIds: ["s1"],
    count: 10,
    ...overrides,
  });

describe("buildQuestionWhere — history filters", () => {
  it("restricts to previously correct questions", () => {
    // CORRECT had no branch and silently behaved like MIXED.
    const where = buildQuestionWhere(input({ historyFilter: "CORRECT" }), { historyIds: { include: ["q1"] } });
    expect(where.id).toEqual({ in: ["q1"] });
  });

  it("restricts to previous mistakes", () => {
    const where = buildQuestionWhere(input({ historyFilter: "INCORRECT" }), { historyIds: { include: ["q2"] } });
    expect(where.id).toEqual({ in: ["q2"] });
  });

  it("excludes attempted questions for never-attempted", () => {
    const where = buildQuestionWhere(input({ historyFilter: "NEVER_ATTEMPTED" }), { historyIds: { exclude: ["q3"] } });
    expect(where.id).toEqual({ notIn: ["q3"] });
  });
});

describe("buildTextbookScopeWhere", () => {
  const scope = { subjectId: "s1", boardId: "b1", classId: "c11", chapterIds: ["ch1"] };

  it("applies the same board and class narrowing that the practice link does", () => {
    // The study pages used to count on chapterId alone, advertising questions
    // that board/class practice could not actually draw.
    const where = buildTextbookScopeWhere(scope);
    expect(where.status).toBe("PUBLISHED");
    expect(where.subjectId).toEqual({ in: ["s1"] });
    expect(where.chapterId).toEqual({ in: ["ch1"] });
    expect(where.OR).toEqual([
      { boardId: { in: ["b1"] } },
      { mappings: { some: { boardId: { in: ["b1"] } } } },
    ]);
    expect(where.AND).toEqual([
      { OR: [{ classId: { in: ["c11"] } }, { mappings: { some: { schoolClassId: { in: ["c11"] } } } }] },
    ]);
  });

  it("omits the chapter filter when a whole book is counted", () => {
    const where = buildTextbookScopeWhere({ ...scope, chapterIds: [] });
    expect(where.chapterId).toBeUndefined();
  });

  it("never widens to the MDCAT syllabus", () => {
    expect(buildTextbookScopeWhere(scope).mappings).toBeUndefined();
  });
});

describe("letterFor", () => {
  it("labels options beyond D instead of returning a dash", () => {
    // The result page hardcoded ["A","B","C","D"], so a 5- or 6-option question
    // printed "—" for both the student's and the correct answer.
    expect(letterFor(0)).toBe("A");
    expect(letterFor(3)).toBe("D");
    expect(letterFor(4)).toBe("E");
    expect(letterFor(5)).toBe("F");
    expect(letterFor(6)).toBe("7");
  });
});

describe("weak-area thresholds", () => {
  it("excludes areas the student is already strong in", () => {
    // A group with no accuracy ceiling was listed as a weak area at 100%.
    expect(WEAK_ACCURACY_BELOW).toBe(70);
    expect(WEAK_MIN_ATTEMPTS).toBe(2);
    const isWeak = (attempted: number, accuracy: number) =>
      attempted >= WEAK_MIN_ATTEMPTS && accuracy < WEAK_ACCURACY_BELOW;
    expect(isWeak(2, 100)).toBe(false);
    expect(isWeak(2, 70)).toBe(false);
    expect(isWeak(2, 69)).toBe(true);
    expect(isWeak(1, 0)).toBe(false);
  });
});
