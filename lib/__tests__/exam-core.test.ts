import { describe, it, expect } from "vitest";
import {
  balancedSample,
  formatDuration,
  randomOptionOrder,
  scoreSubmission,
  shuffle,
} from "@/lib/exam-core";

describe("shuffle", () => {
  it("keeps all items", () => {
    const input = [1, 2, 3, 4, 5];
    const out = shuffle(input);
    expect(out.sort()).toEqual(input);
  });

  it("does not mutate input", () => {
    const input = [1, 2, 3];
    shuffle(input);
    expect(input).toEqual([1, 2, 3]);
  });
});

describe("randomOptionOrder", () => {
  it("returns a permutation of the option ids", () => {
    const ids = ["a", "b", "c", "d"];
    const out = randomOptionOrder(ids);
    expect([...out].sort()).toEqual(ids);
  });
});

describe("scoreSubmission", () => {
  const correctById = new Map([
    ["q1", "a"],
    ["q2", "b"],
    ["q3", "c"],
  ]);

  it("scores correct, incorrect and unanswered (spec §33)", () => {
    const result = scoreSubmission(
      [
        { questionId: "q1", selectedOptionId: "a" }, // correct
        { questionId: "q2", selectedOptionId: "x" }, // incorrect
        { questionId: "q3", selectedOptionId: null }, // explicitly unanswered
      ],
      correctById,
    );
    expect(result.correct).toBe(1);
    expect(result.incorrect).toBe(1);
    expect(result.unanswered).toBe(1);
    expect(result.total).toBe(3);
    expect(result.percent).toBe(33);
  });

  it("counts missing answers as unanswered", () => {
    const result = scoreSubmission(
      [{ questionId: "q1", selectedOptionId: "a" }],
      correctById,
    );
    expect(result.unanswered).toBe(2);
  });

  it("ignores answers for unknown questions", () => {
    const result = scoreSubmission(
      [{ questionId: "ghost", selectedOptionId: "a" }],
      correctById,
    );
    expect(result.correct).toBe(0);
    expect(result.unanswered).toBe(2);
  });
});

describe("balancedSample", () => {
  const items = [
    { id: "a1", group: "A" },
    { id: "a2", group: "A" },
    { id: "a3", group: "A" },
    { id: "b1", group: "B" },
    { id: "b2", group: "B" },
    { id: "c1", group: "C" },
  ];

  it("returns requested count without duplicates", () => {
    const out = balancedSample(items, 4, (i) => i.group);
    expect(out).toHaveLength(4);
    expect(new Set(out.map((i) => i.id)).size).toBe(4);
  });

  it("spreads across groups (no concentration in one group) (§76)", () => {
    const out = balancedSample(items, 4, (i) => i.group);
    const counts = out.reduce<Record<string, number>>((acc, i) => {
      acc[i.group] = (acc[i.group] ?? 0) + 1;
      return acc;
    }, {});
    expect(Math.max(...Object.values(counts))).toBeLessThanOrEqual(2);
  });

  it("returns all items when count >= length", () => {
    const out = balancedSample(items, 99, (i) => i.group);
    expect(out).toHaveLength(6);
  });

  it("returns empty for count <= 0", () => {
    expect(balancedSample(items, 0, (i) => i.group)).toEqual([]);
  });
});

describe("formatDuration", () => {
  it("formats minutes and seconds (spec §30)", () => {
    expect(formatDuration(65)).toBe("01:05");
    expect(formatDuration(3600)).toBe("01:00:00");
    expect(formatDuration(0)).toBe("00:00");
  });
});