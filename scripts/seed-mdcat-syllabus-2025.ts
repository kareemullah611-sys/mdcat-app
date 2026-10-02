import { PrismaClient } from "@prisma/client";
import { MDCAT_2025_OUTCOMES, type CurriculumSubjectCode } from "../lib/data/mdcat-2025-curriculum";

/**
 * Seeds the versioned PMDC MDCAT 2025 syllabus (§13).
 *
 * The outcome text lives in `lib/data/mdcat-2025-curriculum.ts`, extracted from
 * the published PM&DC curriculum (see the header comment there and
 * `requirements/mdcat-2025-outcomes.md`). Upserts are keyed on
 * (syllabusVersion, code), so re-running is idempotent and existing
 * `QuestionMapping` rows keep pointing at the same outcome ids (§106.7).
 */

const SOURCE_URL = "https://www.pmdc.pk/Documents/Syllabus/Uniform%20Curriculum%20MDCAT-2025%20%20Final%20%2826-05-2025%29.pdf";

const prisma = new PrismaClient();

async function main() {
  const syllabus = await prisma.syllabusVersion.upsert({
    where: { code: "PMDC_MDCAT_2025_FINAL" },
    update: { name: "Final MDCAT Curriculum 2025", authority: "Pakistan Medical & Dental Council", year: 2025, status: "ACTIVE", sourceUrl: SOURCE_URL, publishedAt: new Date("2025-06-01T00:00:00.000Z") },
    create: { code: "PMDC_MDCAT_2025_FINAL", name: "Final MDCAT Curriculum 2025", authority: "Pakistan Medical & Dental Council", year: 2025, status: "ACTIVE", sourceUrl: SOURCE_URL, publishedAt: new Date("2025-06-01T00:00:00.000Z") },
  });

  let total = 0;
  for (const subjectCode of Object.keys(MDCAT_2025_OUTCOMES) as CurriculumSubjectCode[]) {
    const subject = await prisma.subject.findUniqueOrThrow({ where: { code: subjectCode } });
    for (const outcome of MDCAT_2025_OUTCOMES[subjectCode]) {
      await prisma.syllabusOutcome.upsert({
        where: { syllabusVersionId_code: { syllabusVersionId: syllabus.id, code: outcome.code } },
        update: { subjectId: subject.id, unit: outcome.unit, topic: outcome.topic, statement: outcome.statement },
        create: { syllabusVersionId: syllabus.id, subjectId: subject.id, code: outcome.code, unit: outcome.unit, topic: outcome.topic, statement: outcome.statement },
      });
      total += 1;
    }
  }

  console.log(`Seeded ${total} outcomes for ${syllabus.code}.`);
}

main().finally(() => prisma.$disconnect());