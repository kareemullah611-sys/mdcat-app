import { prisma } from "@/lib/prisma";
import { runBankImport, type ImportBatchResult, type ImportReport, type ImportScope } from "@/lib/data/mcq-bank/import";
import { seedMdcatSyllabus2025, type SyllabusSeedResult } from "@/lib/data/mdcat-syllabus-seed";
import { securityLog, securityLogAdminMutation, securityLogError } from "@/lib/security-log";

/**
 * Background runner for the admin "Load question bank" action (spec §56).
 *
 * A full bank load writes thousands of rows, so it must never run inside a
 * normal web request. The job is started by an admin-only endpoint, runs in the
 * background, and reports progress through a status endpoint. State is held in
 * process memory: this is a long-running single Node service (not serverless),
 * and a restart simply loses the progress view — the import itself is idempotent
 * and can be re-run.
 */

export type JobState = "IDLE" | "RUNNING" | "COMPLETED" | "FAILED";

export type BankImportJobStatus = {
  state: JobState;
  scope: ImportScope & { dryRun?: boolean } | null;
  startedById: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  totalBatches: number;
  completedBatches: number;
  totalQuestions: number;
  writtenQuestions: number;
  batches: ImportBatchResult[];
  issues: string[];
  error: string | null;
  report: ImportReport | null;
  /** Set when a run seeded the syllabus first, or via the explicit action. */
  syllabus: SyllabusSeedResult | null;
};

const job: BankImportJobStatus = {
  state: "IDLE",
  scope: null,
  startedById: null,
  startedAt: null,
  finishedAt: null,
  totalBatches: 0,
  completedBatches: 0,
  totalQuestions: 0,
  writtenQuestions: 0,
  batches: [],
  issues: [],
  error: null,
  report: null,
  syllabus: null,
};

export function getBankImportStatus(): BankImportJobStatus {
  return { ...job, batches: [...job.batches], issues: [...job.issues] };
}

export function startBankImportJob(
  scope: ImportScope & { dryRun?: boolean },
  adminId: string,
): { started: true } | { started: false; reason: "ALREADY_RUNNING" } {
  if (job.state === "RUNNING") return { started: false, reason: "ALREADY_RUNNING" };

  Object.assign(job, {
    state: "RUNNING" as JobState,
    scope,
    startedById: adminId,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    totalBatches: 0,
    completedBatches: 0,
    totalQuestions: 0,
    writtenQuestions: 0,
    batches: [],
    issues: [],
    error: null,
    report: null,
    syllabus: null,
  });
  securityLogAdminMutation({
    action: "mcq_bank_import_start",
    actorId: adminId,
    resourceType: "question_bank",
    resourceId: `${scope.subject ?? "ALL"}/${scope.grade ?? "ALL"}`,
  });

  // A real load first brings the syllabus up to date. A database seeded from an
  // older curriculum snapshot holds only the outcomes its questions happened to
  // cite, and the importer refuses any batch whose outcomes it cannot resolve —
  // so seeding first is what turns "183 unknown outcomes" into a clean load.
  // A dry run writes nothing at all and simply reports the gaps.
  const prepare = scope.dryRun === true ? Promise.resolve(null) : seedMdcatSyllabus2025(prisma);

  void prepare
    .then((seeded) => {
      job.syllabus = seeded;
      return runBankImport(prisma, scope, {
        onBatchComplete: (result, completed, total) => {
          job.batches.push(result);
          job.completedBatches = completed;
          job.totalBatches = total;
          job.writtenQuestions += result.questions;
        },
      });
    })
    .then((report) => {
      job.report = report;
      job.state = "COMPLETED";
      job.finishedAt = new Date().toISOString();
      securityLog("mcq_bank_import_complete", {
        adminId,
        scope,
        batches: report.batches.length,
        questions: report.totalQuestions,
        outcomes: report.totalOutcomes,
        dryRun: scope.dryRun === true,
      }, "info");
    })
    .catch((error: unknown) => {
      const issues = (error as { issues?: string[] }).issues ?? [];
      job.state = "FAILED";
      job.finishedAt = new Date().toISOString();
      job.error = error instanceof Error ? error.message : String(error);
      job.issues = issues.slice(0, 50);
      job.totalBatches = job.batches.length + 1;
      securityLogError("mcq_bank_import_failed", { adminId, scope, error: job.error, issues: job.issues.length });
    });

  return { started: true };
}

/**
 * Bring the syllabus up to date on its own, for an operator who wants the
 * prerequisite satisfied before running a dry run. Idempotent.
 */
export async function seedSyllabusForAdmin(adminId: string): Promise<SyllabusSeedResult> {
  const result = await seedMdcatSyllabus2025(prisma);
  job.syllabus = result;
  securityLog("mcq_bank_syllabus_seed", { adminId, total: result.total, created: result.created }, "info");
  return result;
}
