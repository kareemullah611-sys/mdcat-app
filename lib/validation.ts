import { QUALITY_MIN_PUBLISH, type QuestionType, type Difficulty, type SourceType } from "@/lib/constants";

/**
 * Phase 2 validation core (§16, §23, §25, §98).
 * Pure functions — no I/O — so they are trivial to unit test and reusable by
 * the admin edit flow, CSV import, and (later) the AI generation pipeline.
 */

export type ValidationIssueCode =
  | "INVALID_OPTIONS"
  | "NOT_ENOUGH_OPTIONS"
  | "TOO_MANY_OPTIONS"
  | "EXACTLY_ONE_CORRECT"
  | "MULTIPLE_CORRECT"
  | "ZERO_CORRECT"
  | "BLANK_OPTION"
  | "SHORT_QUESTION"
  | "LOW_QUALITY";

export type ValidationIssue = {
  code: ValidationIssueCode;
  message: string;
  field?: string;
};

export type ValidationInput = {
  questionText: string;
  options: { text: string; isCorrect: boolean }[];
  explanation?: string | null;
};

/**
 * §25.1 Answer validity — exactly one option must be correct.
 */
export function answerValidity(options: { isCorrect: boolean }[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  if (options.length === 0) {
    issues.push({ code: "INVALID_OPTIONS", message: "Question has no options." });
    return issues;
  }
  if (options.length < 2) {
    issues.push({ code: "NOT_ENOUGH_OPTIONS", message: `Question needs at least 2 options (has ${options.length}).` });
  }
  if (options.length > 6) {
    issues.push({ code: "TOO_MANY_OPTIONS", message: `Question has more than 6 options.` });
  }
  const correct = options.filter((o) => o.isCorrect).length;
  if (correct > 1) {
    issues.push({ code: "MULTIPLE_CORRECT", message: `${correct} options are marked correct — exactly one is allowed.` });
  } else if (correct === 0) {
    issues.push({ code: "ZERO_CORRECT", message: "No option is marked correct — exactly one is required." });
  }
  return issues;
}

/**
 * §18-presentation: options must have readable text (no blanks).
 */
export function optionBlanks(options: { text: string }[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  options.forEach((opt, i) => {
    if (!opt.text.trim()) {
      issues.push({ code: "BLANK_OPTION", message: `Option ${i + 1} is empty.`, field: `options.${i}.text` });
    }
  });
  return issues;
}

/**
 * §16: question must not be trivially empty.
 */
export function questionTextCheck(questionText: string): ValidationIssue[] {
  if (!questionText || questionText.trim().length < 5) {
    return [{ code: "SHORT_QUESTION", message: "Question text is too short (min 5 characters)." }];
  }
  return [];
}

/**
 * Aggregate §25.1 checks (answer validity + non-blank options).
 */
export function validateQuestion(input: ValidationInput): ValidationIssue[] {
  return [
    ...questionTextCheck(input.questionText),
    ...answerValidity(input.options.map((o) => ({ isCorrect: o.isCorrect }))),
    ...optionBlanks(input.options),
  ];
}

/**
 * Effective quality model (§23/§25 &: qualityScore is stored on the row).
 * Streamlined Phase 2 model, kept configurable behind a single function:
 */
export function computeQualityScore(input: ValidationInput): number {
  const issues = validateQuestion(input);
  if (issues.length > 0) return 0;

  let score = 40;
  const text = input.questionText.trim();
  const hasExplanation = !!input.explanation && input.explanation.trim().length >= 15;

  if (hasExplanation) score += 20;
  if (text.length >= 40) score += 10;
  const optionCount = input.options.length;
  if (optionCount >= 4) score += 10;
  else if (optionCount === 3) score += 5;

  return Math.min(100, score);
}

/**
 * §25.9 auto-publish gate: structurally valid AND quality ≥ 60/100.
 * Without an explanation (or long text) the score stays below 60, so a
 * question needs a real explanation to auto-publish. Admins can always
 * override and force PUBLISH (§26).
 */
export function isPublishable(input: ValidationInput): boolean {
  return validateQuestion(input).length === 0 && computeQualityScore(input) >= QUALITY_MIN_PUBLISH;
}

// ---------------------------------------------------------------------------
// §23 Duplicate detection (exact + normalized). Full semantic duplicate
// detection is a Phase 4 concern; this guards the exact and whitespace/case
// normalized forms during admin edits and CSV import.
// ---------------------------------------------------------------------------

export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Exact (normalized) duplicate within a given set of existing texts. */
export function findExactDuplicate(normalized: string, existingNormalized: string[]): boolean {
  return existingNormalized.includes(normalized);
}

/** Approximate duplicate: shared leading tokens against existing bank (§23.8). */
export function findApproximateDuplicate(
  questionText: string,
  existingTexts: string[],
  windowWords = 6,
): boolean {
  const significant = (s: string) => normalizeText(s).split(" ").filter((w) => w.length > 2);
  const query = significant(questionText);
  if (query.length < windowWords) return false;
  const window = query.slice(0, windowWords);
  return existingTexts.some((t) => {
    const tokens = significant(t);
    if (tokens.length < windowWords) return false;
    return window.every((word, i) => tokens[i] === word);
  });
}

/** Question type enum validation. */
export function validEnum<V extends string>(value: string, allowed: readonly V[]): value is V {
  return (allowed as readonly string[]).includes(value);
}
export function invalidEnums<V extends string>(values: Partial<Record<keyof ValidationInput, string | undefined>>, allowed: readonly V[]) {
  const issues: ValidationIssue[] = [];
  for (const [field, value] of Object.entries(values)) {
    if (value !== undefined && value !== null && !validEnum(value, allowed)) {
      issues.push({ code: "INVALID_OPTIONS", message: `Invalid value "${value}" for ${field}. Allowed: ${allowed.join(", ")}`, field });
    }
  }
  return issues;
}

export type { QuestionType, Difficulty, SourceType };