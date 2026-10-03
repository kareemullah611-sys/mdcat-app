import { PrismaClient } from "@prisma/client";
import { seedMdcatSyllabus2025 } from "../lib/data/mdcat-syllabus-seed";

/**
 * CLI wrapper around the shared syllabus seed, which the admin loader
 * ("Admin -> Load bank") also calls so a deployed database can be brought up to
 * date without shell access.
 */

const prisma = new PrismaClient();

async function main() {
  const result = await seedMdcatSyllabus2025(prisma);
  console.log(
    `Seeded ${result.total} outcomes for ${result.code} (${result.created} newly added).`,
  );
}

main().finally(() => prisma.$disconnect());
