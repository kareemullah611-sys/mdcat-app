import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { guardMutation } from "@/lib/request-guard";
import { getBankImportStatus, seedSyllabusForAdmin, startBankImportJob } from "@/lib/mcq-bank-job";
import { BANK_BATCHES } from "@/lib/data/mcq-bank/banks";
import type { BankSubject } from "@/lib/data/mcq-bank/coverage";

/**
 * Admin-only question bank loader (spec §26, §56).
 *
 * The authored questions ship as TypeScript data in the deploy image, so a
 * production database needs no file transfer to get the bank — this endpoint
 * runs the same validated importer as `npm run mcq:bank:import`.
 *
 *   GET  → current job status (+ the batch catalogue, for the UI)
 *   POST → start a background load. Body: { subject?, grade?, batch?, publish?, dryRun? }
 */

const SUBJECTS = new Set(["BIOLOGY", "CHEMISTRY", "PHYSICS"]);
const BATCH_CODES = new Set(BANK_BATCHES.map((batch) => batch.code));

export async function GET() {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  return NextResponse.json({
    job: getBankImportStatus(),
    batches: BANK_BATCHES.map((batch) => ({ code: batch.code, subject: batch.subject, grade: batch.grade })),
  });
}

export async function POST(request: Request) {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const guarded = guardMutation(request, "ADMIN", admin.userId);
  if (!guarded.ok) {
    return NextResponse.json(
      { error: guarded.status === 403 ? "Forbidden" : "Too many requests" },
      { status: guarded.status, headers: { "Retry-After": String(guarded.retryAfterSeconds) } },
    );
  }

  const body = (await request.json().catch(() => null)) as {
    action?: "seedSyllabus";
    subject?: string;
    grade?: number;
    batch?: string;
    publish?: boolean;
    dryRun?: boolean;
  } | null;

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Expected a JSON body" }, { status: 400 });
  }

  // Prerequisite for the bank: the versioned PMDC MDCAT 2025 syllabus. A real
  // load seeds it automatically, but this lets an operator fix a failing dry
  // run first. Idempotent.
  if (body.action === "seedSyllabus") {
    const syllabus = await seedSyllabusForAdmin(admin.userId);
    return NextResponse.json({ syllabus, job: getBankImportStatus() });
  }

  const scope = {
    ...(body.subject && SUBJECTS.has(body.subject) ? { subject: body.subject as BankSubject } : {}),
    ...(body.grade === 11 || body.grade === 12 ? { grade: body.grade as 11 | 12 } : {}),
    ...(body.batch && BATCH_CODES.has(body.batch) ? { batch: body.batch } : {}),
    publish: body.publish === true,
    dryRun: body.dryRun === true,
  };

  // Reject an unknown filter rather than silently widening to the whole bank.
  if (body.subject && !SUBJECTS.has(body.subject)) {
    return NextResponse.json({ error: `Unknown subject "${body.subject}"` }, { status: 400 });
  }
  if (body.batch && !BATCH_CODES.has(body.batch)) {
    return NextResponse.json({ error: `Unknown batch "${body.batch}"` }, { status: 400 });
  }
  if (body.grade !== undefined && body.grade !== 11 && body.grade !== 12) {
    return NextResponse.json({ error: "grade must be 11 or 12" }, { status: 400 });
  }

  const result = startBankImportJob(scope, admin.userId);
  if (!result.started) {
    return NextResponse.json({ error: "An import is already running", job: getBankImportStatus() }, { status: 409 });
  }
  return NextResponse.json({ started: true, job: getBankImportStatus() }, { status: 202 });
}
