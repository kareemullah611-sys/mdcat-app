// Single source of truth for academic/status codes (ADR-006).
// String columns in the DB use these exact values; expanding a domain
// (e.g. LOGICAL_REASONING) is a one-file change, no DB migration.

export const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  STUDENT: "STUDENT",
} as const;
export type RoleCode = (typeof ROLES)[keyof typeof ROLES];

export const GOALS = {
  BOARD_EXAM: "BOARD_EXAM",
  MDCAT: "MDCAT",
  BOTH: "BOTH",
} as const;
export type Goal = (typeof GOALS)[keyof typeof GOALS];

export const QUESTION_TYPES = [
  "CONCEPTUAL",
  "FACTUAL",
  "NUMERICAL",
  "APPLICATION",
  "STATEMENT_BASED",
  "COMPARISON",
  "DIAGRAM",
  "REASONING",
  "SEQUENCE",
  "FORMULA",
  "MDCAT_STYLE",
] as const;
export type QuestionType = (typeof QUESTION_TYPES)[number];

export const SOURCE_TYPES = [
  "TEXTBOOK",
  "PAST_MDCAT",
  "AI_GENERATED",
  "ADMIN_CREATED",
] as const;
export type SourceType = (typeof SOURCE_TYPES)[number];

export const DIFFICULTIES = ["EASY", "MEDIUM", "HARD"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export const QUESTION_STATUS = [
  "DRAFT",
  "VALIDATED",
  "PUBLISHED",
  "DISABLED",
  "ARCHIVED",
] as const;
export type QuestionStatus = (typeof QUESTION_STATUS)[number];

export const CONTENT_STATUS = [
  "DRAFT",
  "PROCESSING",
  "PUBLISHED",
  "DISABLED",
  "ARCHIVED",
] as const;
export type ContentStatus = (typeof CONTENT_STATUS)[number];

export const TEST_MODES = ["PRACTICE", "EXAM", "PAST_PAPER", "MOCK"] as const;
export type TestMode = (typeof TEST_MODES)[number];

// Which syllabus a test is drawn from (spec MODE A / MODE B).
// BOARD  - the student's board textbooks and their questions.
// MDCAT  - the current MDCAT syllabus and its learning outcomes, across every
//          board, so a profile whose board has no mapped chapters (Punjab,
//          Sindh, KPK) can still sit a full syllabus paper (§3 MODE B).
export const TEST_SCOPES = ["BOARD", "MDCAT"] as const;
export type TestScope = (typeof TEST_SCOPES)[number];

// The MDCAT syllabus a MODE B paper is resolved against. Seeded by
// scripts/seed-mdcat-syllabus-2025.ts, or "Admin -> Load bank".
export const MDCAT_SYLLABUS_CODE = "PMDC_MDCAT_2025_FINAL";
// 69 Biology + 120 Chemistry + 100 Physics, from the published PM&DC
// curriculum. Asserted against the curriculum data in the tests so a partially
// seeded database is detectable.
export const MDCAT_SYLLABUS_OFFICIAL_TOTAL = 289;

export const TEST_STATUS = ["IN_PROGRESS", "COMPLETED", "ABANDONED"] as const;
export type TestStatus = (typeof TEST_STATUS)[number];

export const TEST_QUESTION_STATUS = ["UNANSWERED", "ANSWERED", "MARKED"] as const;
export type TestQuestionStatus = (typeof TEST_QUESTION_STATUS)[number];

export const HISTORY_FILTERS = [
  "MIXED",
  "NEVER_ATTEMPTED",
  "INCORRECT",
  "CORRECT",
  "BOOKMARKED",
] as const;
export type HistoryFilter = (typeof HISTORY_FILTERS)[number];

// Relevance thresholds (0-100); configurable later per spec §23.
export const RELEVANCE = {
  VERY_HIGH: 80,
  HIGH: 65,
  MEDIUM: 40,
} as const;

export const QUALITY_MIN_PUBLISH = 60;