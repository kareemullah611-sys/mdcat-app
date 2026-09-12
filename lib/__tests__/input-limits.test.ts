import { describe, it, expect } from "vitest";
import {
  validateLength,
  validateLengths,
  validateArrayLength,
  validateArrayItems,
  lengthError,
  INPUT_LIMITS,
} from "@/lib/input-limits";
import {
  createBookSchema,
  createQuestionSchema,
  createTopicSchema,
  testFilterSchema,
  updateQuestionSchema,
} from "@/lib/schemas";

const validQuestion = {
  questionText: "Which option is correct?",
  subjectId: "subject-1",
  boardId: "board-1",
  classId: "class-1",
  options: [
    { text: "Correct", isCorrect: true },
    { text: "Incorrect", isCorrect: false },
  ],
};

describe("INPUT_LIMITS", () => {
  it("has all expected limit fields", () => {
    const fields = ["name", "email", "bookTitle", "bookAuthor", "bookPublisher",
      "chapterTitle", "topicTitle", "chapterSummary", "sourceUrl", "sourceLabel",
      "searchString", "questionText", "explanation", "sourceReference", "optionText",
      "freeTextAnswer", "markingNote", "goal", "preparationMode",
      "adminNote", "reviewNote", "identifier"] as (keyof typeof INPUT_LIMITS)[];

    for (const field of fields) {
      expect(INPUT_LIMITS[field]).toBeDefined();
    }
  });
});

describe("validateLength", () => {
  describe("string within limit", () => {
    it("accepts string at max length", () => {
      const result = validateLength("questionText", "A".repeat(8 * 1024));
      expect(result.ok).toBe(true);
    });

    it("accepts string under max length", () => {
      const result = validateLength("questionText", "short");
      expect(result.ok).toBe(true);
    });

    it("accepts empty string", () => {
      const result = validateLength("questionText", "");
      expect(result.ok).toBe(true);
    });
  });

  describe("string over limit", () => {
    it("rejects string over max (max-1 should pass, max+1 should fail)", () => {
      const under = "A".repeat(8 * 1024 - 1);
      const atMax = "A".repeat(8 * 1024);
      const over = "A".repeat(8 * 1024 + 1);

      expect(validateLength("questionText", under).ok).toBe(true);
      expect(validateLength("questionText", atMax).ok).toBe(true);
      expect(validateLength("questionText", over).ok).toBe(false);
    });

    it("returns error with field, max, and actual", () => {
      const result = validateLength("questionText", "A".repeat(8 * 1024 + 1));
      expect(result.ok).toBe(false);
      // Type-safe access: field and max only exist when ok is false
      if (!result.ok) {
        expect(result.field).toBe("questionText");
        expect(result.max).toBe(8 * 1024);
        expect(result.actual).toBe(8 * 1024 + 1);
      }
    });
  });

  describe("Unicode support", () => {
    it("counts code points correctly for simple Unicode", () => {
      // 🍎 is a single code point (U+1F34E)
      const result = validateLength("questionText", "🍎");
      expect(result.actual).toBe(1);
      expect(result.ok).toBe(true);
    });

    it("rejects string that exceeds max code points", () => {
      // 8193 code points - one over the 8192 limit
      const overMax = "A".repeat(8 * 1024 + 1);
      const result = validateLength("questionText", overMax);
      expect(result.ok).toBe(false);
      expect(result.actual).toBe(8 * 1024 + 1);
    });
  });

  describe("non-string values", () => {
    it("accepts non-string values (returns ok: true)", () => {
      expect(validateLength("questionText", undefined as undefined).ok).toBe(true);
      expect(validateLength("questionText", null as null).ok).toBe(true);
      expect(validateLength("questionText", 42 as number).ok).toBe(true);
      expect(validateLength("questionText", [] as Array<string>).ok).toBe(true);
    });
  });
});

describe("validateLengths (batch)", () => {
  it("validates multiple fields returning first failure", () => {
    const result = validateLengths([
      ["name", "A".repeat(101)], // over 100 limit
      ["email", "test@example.com"],
    ]);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.field).toBe("name");
    }
  });

  it("returns ok when all fields are within limits", () => {
    const result = validateLengths([
      ["name", "Short"],
      ["email", "test@example.com"],
    ]);
    expect(result.ok).toBe(true);
  });
});

describe("lengthError helper", () => {
  it("produces human-readable error message", () => {
    const result = { ok: false, field: "questionText", max: 8 * 1024, actual: 9 * 1024 } as const;
    expect(lengthError(result)).toBe('Field "questionText" exceeds the 8192-character limit (received 9216).');
  });
});

describe("validateArrayLength", () => {
  it("accepts array under max items", () => {
    const result = validateArrayLength("optionText", ["short", "longer"], 10);
    expect(result.ok).toBe(true);
    expect(result.actual).toBe(2);
  });

  it("rejects array over max items", () => {
    const result = validateArrayLength("optionText", ["a", "b", "c", "d", "e", "f", "g"], 6);
    expect(result.ok).toBe(false);
    expect(result.actual).toBe(7);
  });

  it("accepts non-array values", () => {
    const result = validateArrayLength("optionText", "not an array" as unknown as string, 5);
    expect(result.ok).toBe(true);
    expect(result.actual).toBe(0);
  });
});

describe("validateArrayItems", () => {
  it("accepts all items under per-item limit", () => {
    const result = validateArrayItems("optionText", ["hi", "hello"], "optionText");
    expect(result.ok).toBe(true);
  });

  it("rejects array item over per-item limit", () => {
    const result = validateArrayItems("optionText", ["hi", "A".repeat(8 * 1024 + 1)] as [string, string], "optionText");
    expect(result.ok).toBe(false);
  });
});

describe("route schema boundaries", () => {
  it("accepts question text at the limit and rejects limit + 1", () => {
    expect(createQuestionSchema.safeParse({ ...validQuestion, questionText: "A".repeat(INPUT_LIMITS.questionText) }).success).toBe(true);
    expect(createQuestionSchema.safeParse({ ...validQuestion, questionText: "A".repeat(INPUT_LIMITS.questionText + 1) }).success).toBe(false);
  });

  it("enforces exactly one correct answer on create and update", () => {
    const invalidOptions = validQuestion.options.map((option) => ({ ...option, isCorrect: false }));
    expect(createQuestionSchema.safeParse({ ...validQuestion, options: invalidOptions }).success).toBe(false);
    expect(updateQuestionSchema.safeParse({ options: invalidOptions }).success).toBe(false);
  });

  it("rejects oversized options and identifiers", () => {
    const options = [{ text: "A".repeat(INPUT_LIMITS.optionText + 1), isCorrect: true }, validQuestion.options[1]];
    expect(createQuestionSchema.safeParse({ ...validQuestion, options }).success).toBe(false);
    expect(createQuestionSchema.safeParse({ ...validQuestion, boardId: "b".repeat(INPUT_LIMITS.identifier + 1) }).success).toBe(false);
  });

  it("rejects oversized content and unknown properties", () => {
    expect(createTopicSchema.safeParse({ chapterId: "chapter-1", title: "Topic", content: "A".repeat(INPUT_LIMITS.topicContent + 1) }).success).toBe(false);
    expect(createBookSchema.safeParse({ boardId: "b", classId: "c", subjectId: "s", title: "Book", unexpected: true }).success).toBe(false);
  });

  it("caps filter arrays", () => {
    const filters = { boardIds: ["b"], classIds: ["c"], subjectIds: Array.from({ length: 11 }, (_, index) => `s${index}`) };
    expect(testFilterSchema.safeParse(filters).success).toBe(false);
  });

  it("treats SQL and XSS strings as literal text", () => {
    expect(createQuestionSchema.safeParse({ ...validQuestion, questionText: "<script>alert(1)</script> OR 1=1 --" }).success).toBe(true);
  });
});
