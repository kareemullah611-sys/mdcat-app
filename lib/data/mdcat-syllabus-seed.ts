import type { PrismaClient } from "@prisma/client";
import { MDCAT_SYLLABUS_CODE } from "@/lib/constants";
import { MDCAT_2025_OUTCOMES, type CurriculumSubjectCode } from "./mdcat-2025-curriculum";

/**
 * Seeds the versioned PMDC MDCAT 2025 syllabus (§13).
 *
 * The outcome text lives in `mdcat-2025-curriculum.ts`, extracted from the
 * published PM&DC curriculum (see the header comment there and
 * `requirements/mdcat-2025-outcomes.md`). Upserts are keyed on
 * (syllabusVersion, code), so re-running is idempotent and existing
 * `QuestionMapping` rows keep pointing at the same outcome ids (§106.7).
 *
 * Shared by the CLI script and the admin loader: a deployed database that was
 * seeded from an older curriculum snapshot is only *partly* populated, and the
 * bank importer refuses to write a batch whose outcomes it cannot resolve. It
 * is far better to bring the syllabus up to date than to make an operator work
 * out which reference rows are missing.
 */

export const MDCAT_SYLLABUS_SOURCE_URL =
  "https://www.pmdc.pk/Documents/Syllabus/Uniform%20Curriculum%20MDCAT-2025%20%20Final%20%2826-05-2025%29.pdf";

export type SyllabusSeedResult = {
  syllabusId: string;
  code: string;
  /** Outcomes in the official curriculum. */
  total: number;
  /** Outcomes that were not already present. */
  created: number;
};

export async function seedMdcatSyllabus2025(db: PrismaClient): Promise<SyllabusSeedResult> {
  const attributes = {
    name: "Final MDCAT Curriculum 2025",
    authority: "Pakistan Medical & Dental Council",
    year: 2025,
    status: "ACTIVE",
    sourceUrl: MDCAT_SYLLABUS_SOURCE_URL,
    publishedAt: new Date("2025-06-01T00:00:00.000Z"),
  };
  const syllabus = await db.syllabusVersion.upsert({
    where: { code: MDCAT_SYLLABUS_CODE },
    update: attributes,
    create: { code: MDCAT_SYLLABUS_CODE, ...attributes },
  });

  let total = 0;
  let created = 0;
  for (const subjectCode of Object.keys(MDCAT_2025_OUTCOMES) as CurriculumSubjectCode[]) {
    const subject = await db.subject.findUnique({ where: { code: subjectCode } });
    if (!subject) {
      throw new Error(`Subject ${subjectCode} is missing; run the database seed before the syllabus seed.`);
    }
    const existing = await db.syllabusOutcome.findMany({
      where: { syllabusVersionId: syllabus.id, subjectId: subject.id },
      select: { code: true },
    });
    const known = new Set(existing.map((outcome) => outcome.code));

    for (const outcome of MDCAT_2025_OUTCOMES[subjectCode]) {
      await db.syllabusOutcome.upsert({
        where: { syllabusVersionId_code: { syllabusVersionId: syllabus.id, code: outcome.code } },
        update: { subjectId: subject.id, unit: outcome.unit, topic: outcome.topic, statement: outcome.statement },
        create: { syllabusVersionId: syllabus.id, subjectId: subject.id, code: outcome.code, unit: outcome.unit, topic: outcome.topic, statement: outcome.statement },
      });
      total += 1;
      if (!known.has(outcome.code)) created += 1;
    }
  }

  return { syllabusId: syllabus.id, code: syllabus.code, total, created };
}
