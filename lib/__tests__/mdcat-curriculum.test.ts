import { describe, expect, it } from "vitest";
import {
  MDCAT_2025_BIOLOGY,
  MDCAT_2025_OUTCOMES,
  MDCAT_2025_OFFICIAL_TOTALS,
  type CurriculumOutcome,
} from "@/lib/data/mdcat-2025-curriculum";
import { subjectOutcomes } from "@/lib/data/mcq-bank/coverage";

const SUBJECTS = ["BIOLOGY", "CHEMISTRY", "PHYSICS"] as const;

/** Per-unit outcome counts in the published PMDC 2025 curriculum. */
const OFFICIAL_UNIT_COUNTS: Record<(typeof SUBJECTS)[number], Record<number, number>> = {
  BIOLOGY: { 1: 2, 2: 1, 3: 10, 4: 4, 5: 7, 6: 4, 7: 3, 8: 3, 9: 7, 10: 7, 11: 4, 12: 1, 13: 3, 14: 2, 15: 8, 16: 3 },
  CHEMISTRY: { 1: 6, 2: 8, 3: 9, 4: 4, 5: 5, 6: 7, 7: 7, 8: 7, 9: 5, 10: 8, 11: 5, 12: 1, 13: 4, 14: 19, 15: 4, 16: 6, 17: 6, 18: 3, 19: 3, 20: 3 },
  PHYSICS: { 1: 3, 2: 17, 3: 8, 4: 4, 5: 10, 6: 18, 7: 7, 8: 9, 9: 5, 10: 4, 11: 4, 12: 3, 13: 2, 14: 1, 15: 1, 16: 4 },
};

const unitOf = (outcome: CurriculumOutcome) => Number(outcome.code.split("-")[1].split(".")[0]);
const outcomeNumberOf = (outcome: CurriculumOutcome) => Number(outcome.code.split(".").at(-1));
const countsByUnit = (outcomes: CurriculumOutcome[]) =>
  outcomes.reduce<Record<number, number>>((acc, outcome) => {
    acc[unitOf(outcome)] = (acc[unitOf(outcome)] ?? 0) + 1;
    return acc;
  }, {});

describe("PMDC MDCAT 2025 curriculum inventory", () => {
  it("has no duplicate outcome codes anywhere", () => {
    const codes = SUBJECTS.flatMap((subject) => MDCAT_2025_OUTCOMES[subject].map((outcome) => outcome.code));
    expect(new Set(codes).size).toBe(codes.length);
  });

  it.each(SUBJECTS)("%s uses only fully qualified outcome codes with complete metadata", (subject) => {
    for (const outcome of MDCAT_2025_OUTCOMES[subject]) {
      expect(outcome.code).toMatch(new RegExp(`^${subject === "BIOLOGY" ? "BIO" : subject === "CHEMISTRY" ? "CHEM" : "PHY"}-\\d+\\.\\d+$`));
      expect(outcome.unit.trim()).not.toHaveLength(0);
      expect(outcome.topic.trim()).not.toHaveLength(0);
      expect(outcome.statement.trim()).not.toHaveLength(0);
    }
  });

  it.each(SUBJECTS)("%s orders outcomes ascending and never repeats a number within a unit", (subject) => {
    const perUnit = new Map<number, number[]>();
    for (const outcome of MDCAT_2025_OUTCOMES[subject]) {
      const number = outcomeNumberOf(outcome);
      perUnit.set(unitOf(outcome), [...(perUnit.get(unitOf(outcome)) ?? []), number]);
    }
    for (const [unit, numbers] of perUnit) {
      expect(unit).toBeGreaterThan(0);
      expect(numbers).toEqual([...numbers].sort((a, b) => a - b));
      expect(new Set(numbers).size).toBe(numbers.length);
    }
  });

  it("has contiguous numbering in every Biology unit (the complete official set)", () => {
    const perUnit = new Map<number, number[]>();
    for (const outcome of MDCAT_2025_BIOLOGY) {
      perUnit.set(unitOf(outcome), [...(perUnit.get(unitOf(outcome)) ?? []), outcomeNumberOf(outcome)]);
    }
    for (const numbers of perUnit.values()) {
      expect(numbers.sort((a, b) => a - b)).toEqual(Array.from({ length: numbers.length }, (_, index) => index + 1));
    }
  });

  it.each(SUBJECTS)("%s matches the official PMDC 2025 inventory exactly", (subject) => {
    const outcomes = MDCAT_2025_OUTCOMES[subject];
    const official = MDCAT_2025_OFFICIAL_TOTALS[subject];
    expect(outcomes).toHaveLength(official.outcomes);
    expect(countsByUnit(outcomes)).toEqual(OFFICIAL_UNIT_COUNTS[subject]);
    // Units are contiguous 1..N with no gaps, and each has a single unit name.
    const units = [...new Set(outcomes.map((outcome) => unitOf(outcome)))].sort((a, b) => a - b);
    expect(units).toEqual(Array.from({ length: official.units }, (_, index) => index + 1));
    expect(new Set(outcomes.map((outcome) => outcome.unit)).size).toBe(official.units);
  });

  it("numbers every unit's outcomes contiguously from 1", () => {
    for (const subject of SUBJECTS) {
      const perUnit = new Map<number, number[]>();
      for (const outcome of MDCAT_2025_OUTCOMES[subject]) {
        perUnit.set(unitOf(outcome), [...(perUnit.get(unitOf(outcome)) ?? []), outcomeNumberOf(outcome)]);
      }
      for (const numbers of perUnit.values()) {
        expect(numbers.sort((a, b) => a - b)).toEqual(Array.from({ length: numbers.length }, (_, index) => index + 1));
      }
    }
  });

  it("only references outcomes that exist in the curriculum module (§22)", () => {
    for (const subject of SUBJECTS) {
      const known = new Set(MDCAT_2025_OUTCOMES[subject].map((outcome) => outcome.code));
      for (const code of subjectOutcomes(subject)) expect(known.has(code)).toBe(true);
    }
  });

  it("totals 289 official science outcomes across the three subjects", () => {
    const total = SUBJECTS.reduce((sum, subject) => sum + MDCAT_2025_OUTCOMES[subject].length, 0);
    expect(total).toBe(289);
    expect(MDCAT_2025_BIOLOGY).toHaveLength(69);
  });



});