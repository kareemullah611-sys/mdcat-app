import { normalizeText, validateQuestion } from "@/lib/validation";

export const MCQ_PROMPT_VERSIONS = {
  generation: "mdcat-grounded-generation-v1",
  validation: "mdcat-independent-validation-v1",
} as const;

export const PILOT_DIFFICULTY_TARGETS = { EASY: 15, MEDIUM: 70, HARD: 15 } as const;

export type GroundedMcq = {
  generationKey: string;
  questionText: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  questionType: string;
  difficulty: keyof typeof PILOT_DIFFICULTY_TARGETS;
  mdcatRelevanceScore: number;
  outcomeCode: string;
  concept: string;
  sources: Array<{
    boardCode: "FBISE" | "BALOCHISTAN";
    chapterNumber: number;
    pageStart: number;
    pageEnd?: number;
    evidence: string;
  }>;
};

export type PilotIssue = { key: string; code: string; message: string };

const ALLOWED_TYPES = new Set([
  "CONCEPTUAL", "FACTUAL", "APPLICATION", "STATEMENT_BASED", "COMPARISON",
  "REASONING", "SEQUENCE", "MDCAT_STYLE",
]);

function tokenSimilarity(a: string, b: string): number {
  const tokens = (value: string) => new Set(normalizeText(value).split(/[^a-z0-9]+/).filter((word) => word.length > 2));
  const left = tokens(a);
  const right = tokens(b);
  const intersection = [...left].filter((word) => right.has(word)).length;
  const union = new Set([...left, ...right]).size;
  return union === 0 ? 0 : intersection / union;
}

export function validateGroundedPilot(
  questions: GroundedMcq[],
  existingQuestionTexts: string[] = [],
): PilotIssue[] {
  const issues: PilotIssue[] = [];
  const seenKeys = new Set<string>();
  const seenTexts: string[] = [...existingQuestionTexts];

  for (const item of questions) {
    const add = (code: string, message: string) => issues.push({ key: item.generationKey, code, message });
    if (seenKeys.has(item.generationKey)) add("DUPLICATE_KEY", "Generation key is not unique.");
    seenKeys.add(item.generationKey);

    const options = item.options.map((text, index) => ({ text, isCorrect: index === item.correctIndex }));
    for (const issue of validateQuestion({ questionText: item.questionText, options, explanation: item.explanation })) {
      add(issue.code, issue.message);
    }
    if (item.correctIndex < 0 || item.correctIndex > 3) add("BAD_ANSWER", "Correct option index must be 0-3.");
    if (new Set(item.options.map(normalizeText)).size !== 4) add("DUPLICATE_OPTION", "Options must be distinct.");
    if (!item.explanation.trim()) add("NO_EXPLANATION", "Explanation is required.");
    if (!/^BIO-\d+\.\d+$/.test(item.outcomeCode)) add("BAD_OUTCOME", "A versioned Biology outcome is required.");
    if (!ALLOWED_TYPES.has(item.questionType)) add("BAD_TYPE", "Question type is not permitted.");
    if (item.mdcatRelevanceScore < 0 || item.mdcatRelevanceScore > 100) add("BAD_RELEVANCE", "Relevance must be 0-100.");
    if (item.sources.length === 0) add("NO_SOURCE", "At least one textbook source is required.");
    for (const source of item.sources) {
      if (source.pageStart < 1 || (source.pageEnd ?? source.pageStart) < source.pageStart) add("BAD_PAGE", "Invalid source page range.");
      if (source.evidence.trim().length < 12) add("WEAK_EVIDENCE", "Source evidence is too short.");
    }
    const normalized = normalizeText(item.questionText);
    if (seenTexts.some((text) => normalizeText(text) === normalized)) add("EXACT_DUPLICATE", "Question text duplicates the bank.");
    else if (seenTexts.some((text) => tokenSimilarity(item.questionText, text) >= 0.82)) add("APPROXIMATE_DUPLICATE", "Question is highly similar to another item.");
    seenTexts.push(item.questionText);
  }

  return issues;
}

export function validatePilotBalance(questions: GroundedMcq[]): PilotIssue[] {
  const counts = { EASY: 0, MEDIUM: 0, HARD: 0 };
  for (const question of questions) counts[question.difficulty] += 1;
  return (Object.keys(PILOT_DIFFICULTY_TARGETS) as Array<keyof typeof PILOT_DIFFICULTY_TARGETS>)
    .filter((level) => counts[level] !== PILOT_DIFFICULTY_TARGETS[level])
    .map((level) => ({
      key: "pilot",
      code: "DIFFICULTY_BALANCE",
      message: `${level}: expected ${PILOT_DIFFICULTY_TARGETS[level]}, received ${counts[level]}.`,
    }));
}
