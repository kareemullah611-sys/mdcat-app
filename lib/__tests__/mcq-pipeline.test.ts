import { describe, expect, it } from "vitest";
import { validateGroundedPilot, validatePilotBalance, type GroundedMcq } from "@/lib/mcq-pipeline";
import { biology11Pilot } from "@/lib/data/biology-11-pilot";
import { chemistryPilot } from "@/lib/data/chemistry-pilot";
import { physicsPilot } from "@/lib/data/physics-pilot";

const valid: GroundedMcq = {
  generationKey: "pilot-1",
  questionText: "Which structure is the principal site of aerobic ATP production in a eukaryotic cell?",
  options: ["Mitochondrion", "Golgi apparatus", "Lysosome", "Nucleolus"],
  correctIndex: 0,
  explanation: "Oxidative metabolism and most aerobic ATP production occur in mitochondria.",
  questionType: "CONCEPTUAL",
  difficulty: "MEDIUM",
  mdcatRelevanceScore: 90,
  outcomeCode: "BIO-4.3",
  concept: "mitochondrial function",
  sources: [{ boardCode: "BALOCHISTAN", chapterNumber: 1, pageStart: 26, evidence: "Most oxidative metabolism and ATP production occurs in mitochondria." }],
};

describe("grounded MCQ pipeline", () => {
  it("accepts a grounded, structurally valid item", () => expect(validateGroundedPilot([valid])).toEqual([]));
  it("rejects duplicate options and missing sources", () => {
    const bad = { ...valid, options: ["A", "A", "B", "C"] as [string, string, string, string], sources: [] };
    expect(validateGroundedPilot([bad]).map((issue) => issue.code)).toEqual(expect.arrayContaining(["DUPLICATE_OPTION", "NO_SOURCE"]));
  });
  it("rejects practical question types", () => {
    expect(validateGroundedPilot([{ ...valid, questionType: "PRACTICAL" }])[0]?.code).toBe("BAD_TYPE");
  });
  it("requires the configured 15/70/15 pilot balance", () => {
    expect(validatePilotBalance([valid])).toHaveLength(3);
  });
  it("accepts the complete 100-question Biology XI pilot", () => {
    expect(biology11Pilot).toHaveLength(100);
    expect(validateGroundedPilot(biology11Pilot)).toEqual([]);
    expect(validatePilotBalance(biology11Pilot)).toEqual([]);
  });
  it.each([["Chemistry", chemistryPilot], ["Physics", physicsPilot]])("accepts the complete 100-question %s bank", (_label, questions) => {
    expect(questions).toHaveLength(100);
    expect(validateGroundedPilot(questions)).toEqual([]);
    expect(validatePilotBalance(questions)).toEqual([]);
    expect(new Set(questions.flatMap((question) => question.sources.map((source) => source.boardCode)))).toEqual(new Set(["FBISE", "BALOCHISTAN"]));
    expect(questions.every((question) => question.sources.every((source) => source.grade === 11 || source.grade === 12))).toBe(true);
  });
});
