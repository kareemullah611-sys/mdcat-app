import { describe, it, expect } from "vitest";
import {
  validateQuestion,
  answerValidity,
  computeQualityScore,
  isPublishable,
  normalizeText,
  findApproximateDuplicate,
  validEnum,
} from "@/lib/validation";
import { parseImportCsv, splitCsvLine, validateImportRow, importTemplateCsv } from "@/lib/import";

describe("answerValidity (§25.1)", () => {
  it("accepts exactly one correct", () => {
    expect(answerValidity([{ isCorrect: false }, { isCorrect: true }])).toEqual([]);
  });

  it("rejects zero correct", () => {
    const issues = answerValidity([{ isCorrect: false }, { isCorrect: false }]);
    expect(issues.some((i) => i.code === "ZERO_CORRECT")).toBe(true);
  });

  it("rejects multiple correct", () => {
    const issues = answerValidity([{ isCorrect: true }, { isCorrect: true }]);
    expect(issues.some((i) => i.code === "MULTIPLE_CORRECT")).toBe(true);
  });

  it("rejects <2 options", () => {
    const issues = answerValidity([{ isCorrect: true }]);
    expect(issues.some((i) => i.code === "NOT_ENOUGH_OPTIONS")).toBe(true);
  });
});

describe("validateQuestion", () => {
  const valid = {
    questionText: "Which of the following is an acid?",
    options: [
      { text: "H+", isCorrect: true },
      { text: "OH-", isCorrect: false },
      { text: "Na+", isCorrect: false },
      { text: "Cl-", isCorrect: false },
    ],
    explanation: "H+ donates protons, making it a proton donor.",
  };

  it("returns no issues for a valid question", () => {
    expect(validateQuestion(valid)).toEqual([]);
  });

  it("flags blank options (BLANK_OPTION)", () => {
    const issues = validateQuestion({ ...valid, options: [...valid.options, { text: "   ", isCorrect: false }] });
    expect(issues.some((i) => i.code === "BLANK_OPTION")).toBe(true);
  });

  it("flags short question text on empty string", () => {
    const issues = validateQuestion({ ...valid, questionText: "" });
    expect(issues.some((i) => i.code === "SHORT_QUESTION")).toBe(true);
  });
});

describe("quality model (§23/§25)", () => {
  it("empty invalid question scores 0", () => {
    expect(computeQualityScore({ questionText: "", options: [] })).toBe(0);
  });

  it("a well-formed question with explanation reaches the publish threshold", () => {
    const q = {
      questionText: "Which of the following is an acid and acts as a proton donor in aqueous solution?",
      options: [
        { text: "H2SO4", isCorrect: true },
        { text: "NaOH", isCorrect: false },
        { text: "KOH", isCorrect: false },
        { text: "NH3", isCorrect: false },
      ],
      explanation: "Sulfuric acid dissociates in water to release H+ ions, which is why it is classified as an acid under Arrhenius theory.",
    };
    expect(computeQualityScore(q)).toBeGreaterThanOrEqual(60);
    expect(isPublishable(q)).toBe(true);
    expect(computeQualityScore(q)).toBeLessThanOrEqual(100);
  });

  it("an explanation-less but otherwise fine question is below the auto-publish bar", () => {
    const q = {
      questionText: "Which is an acid?",
      options: [
        { text: "H2SO4", isCorrect: true },
        { text: "NaOH", isCorrect: false },
        { text: "KOH", isCorrect: false },
        { text: "NH3", isCorrect: false },
      ],
    };
    expect(computeQualityScore(q)).toBeLessThan(60);
    expect(isPublishable(q)).toBe(false);
  });
});

describe("duplicate detection (§23.6)", () => {
  it("normalizes case + whitespace", () => {
    expect(normalizeText("  Which   of the  FOLLOWING ")).toBe("which of the following");
  });

  it("finds approximate duplicates from shared leading tokens", () => {
    expect(
      findApproximateDuplicate(
        "Which of the following is the correct formula for glucose?",
        ["Which of the following is the correct formula for sucrose?"],
      ),
    ).toBe(true);
    expect(
      findApproximateDuplicate(
        "Which of the following is the correct formula for glucose?",
        ["Plants convert light into chemical energy."],
      ),
    ).toBe(false);
  });
});

describe("validEnum", () => {
  it("checks membership", () => {
    expect(validEnum("MEDIUM", ["EASY", "MEDIUM", "HARD"])).toBe(true);
    expect(validEnum("EASY", ["EASY", "MEDIUM", "HARD"])).toBe(true);
    expect(validEnum("HARD", ["EASY", "MEDIUM", "HARD"])).toBe(true);
    expect(validEnum("EXTREME", ["EASY", "MEDIUM", "HARD"])).toBe(false);
  });
});

describe("CSV parsing", () => {
  it("splits simple lines", () => {
    expect(splitCsvLine("a,b,c")).toEqual(["a", "b", "c"]);
  });

  it("handles quoted fields with commas", () => {
    expect(splitCsvLine('"Question, with comma",b,c')).toEqual(["Question, with comma", "b", "c"]);
  });

  it("handles escaped quotes", () => {
    expect(splitCsvLine('"She said ""hi""",b')).toEqual(['She said "hi"', "b"]);
  });

  it("parses multi-line CSV and skips blanks", () => {
    const lines = parseImportCsv("a,b\n\n1,2\n1,3\n");
    expect(lines.length).toBe(3);
  });
});

describe("import row validation", () => {
  it("validates a well-formed row and marks it publishable", () => {
    const row = {
      subjectCode: "BIOLOGY",
      boardCode: "PUNJAB",
      grade: "12",
      bookTitle: "Bio 12",
      chapter: "10",
      topic: "Electrophile",
      question: "Which of the following is an electrophile?",
      optionA: "OH-",
      optionB: "H+",
      optionC: "NH3",
      optionD: "Na+",
      correct: "B",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      sourceReference: "",
      explanation: "H+ accepts an electron pair.",
      mdcatRelevanceScore: "85",
    };
    const result = validateImportRow(row, 2);
    expect(result.publishable).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it("flags an invalid correct letter", () => {
    const row = {
      subjectCode: "BIOLOGY",
      boardCode: "PUNJAB",
      grade: "12",
      bookTitle: "Bio 12",
      chapter: "10",
      topic: "X",
      question: "Which of the following is an electrophile?",
      optionA: "OH-",
      optionB: "H+",
      optionC: "NH3",
      optionD: "Na+",
      correct: "E",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      sourceReference: "",
      explanation: "H+ accepts an electron pair.",
      mdcatRelevanceScore: "85",
    };
    const result = validateImportRow(row, 2);
    expect(result.publishable).toBe(false);
    expect(result.errors.join()).toMatch(/[A-D]/);
  });

  it("flags low-quality rows (no explanation, short text)", () => {
    const row = {
      subjectCode: "BIOLOGY",
      boardCode: "PUNJAB",
      grade: "12",
      bookTitle: "Bio 12",
      chapter: "10",
      topic: "X",
      question: "H+?",
      optionA: "OH-",
      optionB: "H+",
      optionC: "NH3",
      optionD: "Na+",
      correct: "B",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      sourceReference: "",
      explanation: "",
      mdcatRelevanceScore: "85",
    };
    const result = validateImportRow(row, 2);
    expect(result.publishable).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it("builds a downloadable template", () => {
    const template = importTemplateCsv();
    expect(template.split("\n")[0]).toContain("Subject Code");
    expect(template.split("\n")[0]).toContain("Option D");
    expect(template.split("\n").length).toBeGreaterThanOrEqual(2);
  });
});