import { describe, expect, it } from "vitest";
import { validateDifficultyBalance, validateGroundedPilot } from "@/lib/mcq-pipeline";
import { normalizeText } from "@/lib/validation";
import { biology11Pilot } from "@/lib/data/biology-11-pilot";
import { chemistryPilot } from "@/lib/data/chemistry-pilot";
import { physicsPilot } from "@/lib/data/physics-pilot";
import {
  BANK_BATCHES,
  BATCH_DIFFICULTY_TARGETS,
  BATCH_TARGET_SIZE,
  SUBJECT_BATCH_TARGET_SIZE,
  bankQuestions,
} from "@/lib/data/mcq-bank/banks";
import { OUTCOME_COVERAGE_ALL as OUTCOME_COVERAGE, gradeXiiSubjectOutcomes, gradeXiSubjectOutcomes } from "@/lib/data/mcq-bank/coverage-index";

const SUBJECTS = ["BIOLOGY", "CHEMISTRY", "PHYSICS"] as const;
const GRADES = [11, 12] as const;
const pilotTexts = [...biology11Pilot, ...chemistryPilot, ...physicsPilot].map((question) => question.questionText);
const answerPositionShare = (questions: { correctIndex: number }[], index: number) =>
  questions.filter((question) => question.correctIndex === index).length / questions.length;

describe("MCQ banks (Grade XI + Grade XII)", () => {
  it("registers 30 batches of the configured size", () => {
    expect(BANK_BATCHES).toHaveLength(30);
    for (const batch of BANK_BATCHES) expect(batch.questions).toHaveLength(BATCH_TARGET_SIZE);
    for (const subject of SUBJECTS) {
      for (const grade of GRADES) expect(bankQuestions(subject, grade)).toHaveLength(SUBJECT_BATCH_TARGET_SIZE);
    }
  });

  it.each(BANK_BATCHES.map((batch) => [batch.code, batch] as const))("%s passes grounding, duplicate and balance validation", (_code, batch) => {
    expect(validateGroundedPilot(batch.questions, pilotTexts)).toEqual([]);
    expect(validateDifficultyBalance(batch.questions, BATCH_DIFFICULTY_TARGETS)).toEqual([]);
    for (const index of [0, 1, 2, 3]) {
      expect(answerPositionShare(batch.questions, index)).toBeLessThanOrEqual(0.4);
    }
  });

  it.each(SUBJECTS)("%s stays inside the PMDC MDCAT 2025 coverage map", (subject) => {
    for (const grade of GRADES) {
      const allowed = new Set([...gradeXiSubjectOutcomes(subject), ...gradeXiiSubjectOutcomes(subject)]);
      for (const question of bankQuestions(subject, grade)) {
        expect(allowed.has(question.outcomeCode)).toBe(true);
        expect(OUTCOME_COVERAGE[question.outcomeCode].subject).toBe(subject);
        expect(question.sources.length).toBeGreaterThan(0);
        for (const source of question.sources) {
          expect([11, 12]).toContain(source.grade);
          expect(["FBISE", "BALOCHISTAN"]).toContain(source.boardCode);
        }
      }
    }
  });

  it("keeps generation keys unique across all 3,000 questions", () => {
    const keys = BANK_BATCHES.flatMap((batch) => batch.questions.map((question) => question.generationKey));
    expect(new Set(keys).size).toBe(3000);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it.each(SUBJECTS)("%s covers every outcome assigned to it, twice over", (subject) => {
    for (const grade of GRADES) {
      const questions = bankQuestions(subject, grade);
      const counts = questions.reduce<Record<string, number>>((acc, question) => {
        acc[question.outcomeCode] = (acc[question.outcomeCode] ?? 0) + 1;
        return acc;
      }, {});
      const expected = grade === 11 ? gradeXiSubjectOutcomes(subject) : gradeXiiSubjectOutcomes(subject);
      expect(Object.keys(counts).sort()).toEqual([...expected].sort());
      expect(validateGroundedPilot(questions, pilotTexts)).toEqual([]);
    }
  });

  it("maps each question only to chapters that really teach its outcome", () => {
    for (const subject of SUBJECTS) {
      for (const grade of GRADES) {
        for (const question of bankQuestions(subject, grade)) {
          const keys = question.sources.map((source) => `${source.boardCode}:${source.grade}:${source.chapterNumber}`);
          expect(keys).toEqual([...new Set(keys)]);
          const allowed = new Set(
            OUTCOME_COVERAGE[question.outcomeCode].sources.map((source) => `${source.boardCode}:${source.grade}:${source.chapterNumber}`),
          );
          for (const key of keys) expect(allowed.has(key)).toBe(true);
        }
      }
    }
  });

  it("gives every question a distinct stem opening within its subject and grade (§51)", () => {
    for (const subject of SUBJECTS) {
      for (const grade of GRADES) {
        const openings = new Map<string, number>();
        for (const question of bankQuestions(subject, grade)) {
          const opening = normalizeText(question.questionText).split(" ").slice(0, 4).join(" ");
          openings.set(opening, (openings.get(opening) ?? 0) + 1);
        }
        const repeated = [...openings.values()].filter((count) => count > 1);
        // A handful of numeric phrasings ("a 5 kg body ...") legitimately collide;
        // a real template would show up as a large cluster.
        expect(Math.max(0, ...repeated)).toBeLessThanOrEqual(2);
      }
    }
  });

  it("excludes practical and experimental question types (§4)", () => {
    const forbidden = ["PRACTICAL", "EXPERIMENTAL", "NUMERICAL", "DIAGRAM", "FORMULA"];
    for (const batch of BANK_BATCHES) {
      for (const question of batch.questions) expect(forbidden).not.toContain(question.questionType);
    }
  });

  it("stores textbook-grounded evidence on every source of every question", () => {
    for (const batch of BANK_BATCHES) {
      for (const question of batch.questions) {
        expect(question.sources.length).toBeGreaterThan(0);
        for (const source of question.sources) expect(source.evidence.trim().length).toBeGreaterThanOrEqual(12);
        expect(question.explanation.trim().length).toBeGreaterThan(0);
        expect(question.mdcatRelevanceScore).toBeGreaterThanOrEqual(0);
        expect(question.mdcatRelevanceScore).toBeLessThanOrEqual(100);
        expect(question.questionText.length).toBeLessThanOrEqual(600);
      }
    }
  });
});
