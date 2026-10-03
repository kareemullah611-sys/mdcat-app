import { PrismaClient } from "@prisma/client";
import { runBankImport } from "../lib/data/mcq-bank/import";
import type { BankSubject } from "../lib/data/mcq-bank/coverage";

/**
 * CLI wrapper around the shared bank importer (spec §20, §25, §56).
 *
 * All validation and write logic lives in `lib/data/mcq-bank/import.ts`, which
 * the admin "Load question bank" action also uses, so the two can never diverge.
 *
 * Usage:
 *   tsx scripts/import-mcq-bank.ts --dry-run
 *   tsx scripts/import-mcq-bank.ts --subject=BIOLOGY --grade=12
 *   tsx scripts/import-mcq-bank.ts --batch=chem-xi-b2 --publish
 */

const prisma = new PrismaClient();
const args = process.argv.slice(2);
const flag = (name: string) => args.find((argument) => argument.startsWith(`--${name}=`))?.split("=")[1];

async function main() {
  const report = await runBankImport(
    prisma,
    {
      subject: flag("subject")?.toUpperCase() as BankSubject | undefined,
      grade: (flag("grade") ? Number(flag("grade")) : undefined) as 11 | 12 | undefined,
      batch: flag("batch"),
      publish: args.includes("--publish"),
      dryRun: args.includes("--dry-run"),
    },
    {
      onBatchComplete: (result, completed, total) => {
        console.log(
          `${result.code}: ${result.questions} ${result.subject} Grade ${result.grade} questions over ${result.outcomes} MDCAT outcomes — ${result.status} [${completed}/${total}]`,
        );
      },
    },
  );
  console.log(
    `\n${report.totalQuestions} questions across ${report.batches.length} batches, ${report.totalOutcomes} MDCAT outcomes.${
      args.includes("--dry-run") ? " Dry run — nothing was written." : ""
    }`,
  );
  if (report.skippedOutcomes.length > 0) {
    console.log(`Outcomes in the selected batches with no question: ${report.skippedOutcomes.join(", ")}`);
  }
}

main()
  .catch((error: unknown) => {
    const issues = (error as { issues?: string[] }).issues;
    if (issues) for (const issue of issues.slice(0, 25)) console.error(issue);
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
