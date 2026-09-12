// Application-level input length caps (§P1-2 of security-audit.md).
//
// These live in the ROUTE layer (validators run before any DB write) rather
// than only as Prisma column caps, so a single code path rejects oversized
// payloads with a 400 instead of reaching a driver/runtime failure. Every
// mutation route MUST validate through these before persisting.
//
// Values are deliberate/open-coded here (not derived from Prisma) so the cap
// is explicit at the boundary independent of the schema's own VARCHAR lengths.

export const INPUT_LIMITS = {
  // Auth / profile
  name: 100,
  email: 254,

  // Academic content
  bookTitle: 200,
  bookAuthor: 200,
  bookPublisher: 200,
  chapterTitle: 200,
  topicTitle: 200,
  chapterSummary: 1024,
  topicContent: 65536,
  sourceUrl: 2048,
  sourceLabel: 300,
  language: 50,

  // Search
  searchString: 512,

  // Questions
  questionText: 8 * 1024,
  explanation: 8 * 1024,
  sourceReference: 512,
  optionText: 2 * 1024,

  // Answers / practice
  freeTextAnswer: 16 * 1024,
  markingNote: 512,

  // Profile fields
  goal: 50,
  preparationMode: 50,

  // Admin notes / import metadata
  adminNote: 4000,
  reviewNote: 4000,

  // Identifiers
  identifier: 255,
} as const;

export type InputField = keyof typeof INPUT_LIMITS;
export type InputLimitsResult =
  | { ok: true; actual: number }
  | { ok: false; field: InputField; max: number; actual: number };

/** Validate a single length-limited field. `max` is in characters (code points). */
export function validateLength(
  field: InputField,
  value: unknown,
): InputLimitsResult {
  if (typeof value !== "string") return { ok: true, actual: 0 };
  const max = INPUT_LIMITS[field];
  const actual = Array.from(value).length; // code points, not UTF-16 units
  return actual <= max
    ? { ok: true, actual }
    : { ok: false, field, max, actual };
}

/** Validate an array field has no more than `max` items. */
export function validateArrayLength(
  field: InputField,
  value: unknown,
  max: number,
): { ok: boolean; field: InputField; actual: number } {
  if (!Array.isArray(value)) return { ok: true, field, actual: 0 };
  const actual = value.length;
  return actual <= max
    ? { ok: true, field, actual }
    : { ok: false, field, actual };
}

/** Validate that no array item exceeds the per-item character limit. */
export function validateArrayItems(
  field: InputField,
  value: unknown,
  itemField: InputField,
): InputLimitsResult {
  if (!Array.isArray(value)) return { ok: true, actual: 0 };
  for (let i = 0; i < value.length; i++) {
    const r = validateLength(itemField, value[i]);
    if (!r.ok) return r;
  }
  return { ok: true, actual: 0 };
}

/** Validate a batch of fields; returns the FIRST failure (deterministic order). */
export function validateLengths(
  entries: ReadonlyArray<readonly [InputField, unknown]>,
): InputLimitsResult {
  for (const [field, value] of entries) {
    const r = validateLength(field, value);
    if (!r.ok) return r;
  }
  return { ok: true, actual: 0 };
}

/** Human-readable error message (no secrets, no payload echo). */
export function lengthError(r: Extract<InputLimitsResult, { ok: false }>): string {
  return `Field "${r.field}" exceeds the ${r.max}-character limit (received ${r.actual}).`;
}
