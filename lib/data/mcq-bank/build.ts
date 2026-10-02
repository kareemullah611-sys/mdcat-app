import type { GroundedMcq } from "../../mcq-pipeline";
import { OUTCOME_COVERAGE_ALL } from "./coverage-index";

/**
 * Authoring format for the scaled Grade XI banks (spec §16, §20-§25, §51).
 *
 * Authors write compact items; the builder expands each item into a full
 * `GroundedMcq` by resolving the outcome's textbook sources from
 * `coverage.ts`. That keeps board/chapter/page provenance consistent and
 * impossible to mis-key across 1,500 questions, while leaving the academic
 * content (stem, options, answer, explanation, evidence) fully authored.
 */

export const BANK_QUESTION_TYPES = [
  "CONCEPTUAL",
  "FACTUAL",
  "APPLICATION",
  "STATEMENT_BASED",
  "COMPARISON",
  "REASONING",
  "SEQUENCE",
  "MDCAT_STYLE",
] as const;

export type BankQuestionType = (typeof BANK_QUESTION_TYPES)[number];

export type BankItem = {
  /** Unique, stable slug inside the batch; forms the generation key. */
  key: string;
  text: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  /** One textbook-grounded sentence (>= 12 chars) reused for every source. */
  evidence: string;
  questionType: BankQuestionType;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  relevance: number;
  /** PMDC MDCAT 2025 outcome code; must exist in `OUTCOME_COVERAGE`. */
  outcome: string;
  concept: string;
};

export type BatchOptions = {
  /**
   * Textbook year the batch belongs to. An outcome can be taught by more than
   * one book (`CHEM-13.3` exists in the Balochistan Grade XI book and the FBISE
   * and Balochistan Grade XII books), so provenance is resolved per year rather
   * than taken from every chapter that mentions the outcome.
   *
   * When the outcome has no chapter in the requested year, the chapters that
   * actually teach it are used instead — for example MDCAT Biology unit 11
   * (Circulation) is only in the FBISE Grade XI book.
   */
  sourceGrade?: 11 | 12;
};

export function buildBatch(prefix: string, items: BankItem[], options: BatchOptions = {}): GroundedMcq[] {
  return items.map((item) => {
    const coverage = OUTCOME_COVERAGE_ALL[item.outcome];
    if (!coverage) throw new Error(`Outcome ${item.outcome} is outside the Grade XI/XII coverage map.`);
    const inGrade = options.sourceGrade ? coverage.sources.filter((source) => source.grade === options.sourceGrade) : coverage.sources;
    const sources = inGrade.length > 0 ? inGrade : coverage.sources;
    return {
      generationKey: `${prefix}-${item.key}`,
      questionText: item.text,
      options: item.options,
      correctIndex: item.correctIndex,
      explanation: item.explanation,
      questionType: item.questionType,
      difficulty: item.difficulty,
      mdcatRelevanceScore: item.relevance,
      outcomeCode: item.outcome,
      concept: item.concept,
      sources: sources.map((source) => ({ ...source, evidence: item.evidence })),
    };
  });
}