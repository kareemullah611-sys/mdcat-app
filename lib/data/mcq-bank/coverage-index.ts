import { MDCAT_2025_OUTCOMES } from "../mdcat-2025-curriculum";
import { OUTCOME_COVERAGE, subjectOutcomes as gradeXiOutcomes, type BankSubject, type CoverageSource, type OutcomeCoverage } from "./coverage";
import { BIOLOGY_XII_SOURCES, CHEMISTRY_XII_SOURCES, PHYSICS_XII_SOURCES } from "./coverage-xii";

/**
 * Merged Grade XI + Grade XII coverage registry.
 *
 * `coverage.ts` (Grade XI) and `coverage-xii.ts` (Grade XII) only declare which
 * board chapters teach each outcome; the unit, topic and statement text always
 * comes from the official PMDC 2025 curriculum module, so the two can never
 * disagree.
 *
 * An outcome can legitimately be taught by more than one book — `CHEM-13.3`
 * (functional groups) exists in the Balochistan Grade XI book and the FBISE
 * Grade XII book — so sources are unioned per outcome rather than overwritten.
 */

const XII_SOURCES: Record<BankSubject, Record<string, CoverageSource[]>> = {
  BIOLOGY: BIOLOGY_XII_SOURCES,
  CHEMISTRY: CHEMISTRY_XII_SOURCES,
  PHYSICS: PHYSICS_XII_SOURCES,
};

const sourceKey = (source: CoverageSource) => `${source.boardCode}:${source.grade}:${source.chapterNumber}`;
const outcomeTopic = new Map(
  Object.values(MDCAT_2025_OUTCOMES)
    .flat()
    .map((outcome) => [outcome.code, outcome]),
);

function buildRegistry(): Record<string, OutcomeCoverage> {
  const merged: Record<string, OutcomeCoverage> = { ...OUTCOME_COVERAGE };
  for (const subject of Object.keys(XII_SOURCES) as BankSubject[]) {
    for (const [code, sources] of Object.entries(XII_SOURCES[subject])) {
      const official = outcomeTopic.get(code);
      if (!official) throw new Error(`${code} is not part of the PMDC 2025 ${subject} curriculum.`);
      const existing = merged[code];
      if (existing) {
        const seen = new Set(existing.sources.map(sourceKey));
        existing.sources = [...existing.sources, ...sources.filter((source) => !seen.has(sourceKey(source)))];
        continue;
      }
      merged[code] = {
        subject,
        outcome: code,
        unit: official.unit,
        topic: official.topic,
        statement: official.statement,
        sources,
      };
    }
  }
  for (const coverage of Object.values(merged)) {
    const official = outcomeTopic.get(coverage.outcome);
    if (!official) throw new Error(`${coverage.outcome} is not part of the PMDC 2025 curriculum.`);
    coverage.unit = official.unit;
    coverage.topic = official.topic;
    coverage.statement = official.statement;
  }
  return merged;
}

/** Every outcome the Grade XI and Grade XII banks may reference. */
export const OUTCOME_COVERAGE_ALL: Record<string, OutcomeCoverage> = buildRegistry();

export function outcomeCoverage(outcomeCode: string): OutcomeCoverage | undefined {
  return OUTCOME_COVERAGE_ALL[outcomeCode];
}

/** Outcomes whose provenance includes at least one Grade `grade` textbook. */
export function subjectOutcomesForGrade(subject: BankSubject, grade: 11 | 12): string[] {
  return Object.values(OUTCOME_COVERAGE_ALL)
    .filter((coverage) => coverage.subject === subject && coverage.sources.some((source) => source.grade === grade))
    .map((coverage) => coverage.outcome);
}

/** Outcomes authored into the Grade XII banks (a few are taught by Grade XI books). */
export function gradeXiiSubjectOutcomes(subject: BankSubject): string[] {
  return Object.keys(XII_SOURCES[subject]).sort((a, b) => {
    const [au, an] = a.split("-")[1].split(".").map(Number);
    const [bu, bn] = b.split("-")[1].split(".").map(Number);
    return au === bu ? an - bn : au - bu;
  });
}

export { gradeXiOutcomes as gradeXiSubjectOutcomes };
