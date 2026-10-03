import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ImportBatchResult } from "@/lib/data/mcq-bank/import";

// The guards under test are the job's, not the importer's: the importer is
// mocked so no database is touched and the run can be held open on demand.
const runBankImport = vi.fn();
const seedMdcatSyllabus2025 = vi.fn();
vi.mock("@/lib/data/mcq-bank/import", () => ({ runBankImport: (...args: unknown[]) => runBankImport(...args) }));
vi.mock("@/lib/data/mdcat-syllabus-seed", () => ({
  seedMdcatSyllabus2025: (...args: unknown[]) => seedMdcatSyllabus2025(...args),
}));
vi.mock("@/lib/prisma", () => ({ prisma: {} }));
vi.mock("@/lib/security-log", () => ({
  securityLog: vi.fn(),
  securityLogAdminMutation: vi.fn(),
  securityLogError: vi.fn(),
}));

const { getBankImportStatus, startBankImportJob } = await import("@/lib/mcq-bank-job");

const batchResult: ImportBatchResult = {
  code: "bio-xi-b1",
  subject: "BIOLOGY",
  grade: 11,
  questions: 100,
  outcomes: 4,
  status: "PUBLISHED",
};

/** A controllable promise so a job can be observed mid-flight. */
let release: (() => void) | undefined;
const syllabusResult = { syllabusId: "s1", code: "PMDC_MDCAT_2025_FINAL", total: 289, created: 183 };

beforeEach(() => {
  release = undefined;
  seedMdcatSyllabus2025.mockReset();
  seedMdcatSyllabus2025.mockResolvedValue(syllabusResult);
  runBankImport.mockReset();
  runBankImport.mockImplementation(
    (_db: unknown, _scope: unknown, hooks?: { onBatchComplete?: (r: ImportBatchResult, done: number, total: number) => void }) =>
      new Promise((resolve) => {
        hooks?.onBatchComplete?.(batchResult, 1, 2);
        release = () =>
          resolve({ scope: { publish: true }, batches: [batchResult], totalQuestions: 100, totalOutcomes: 4, skippedOutcomes: [] });
      }),
  );
});

afterEach(async () => {
  release?.();
  await new Promise((resolve) => setTimeout(resolve, 0));
});

describe("MCQ bank import job", () => {
  it("starts idle with nothing written", () => {
    const status = getBankImportStatus();
    expect(status.state).toBe("IDLE");
    expect(status.batches).toEqual([]);
    expect(status.writtenQuestions).toBe(0);
    expect(status.error).toBeNull();
  });

  it("returns a defensive copy so callers cannot mutate job state", () => {
    const first = getBankImportStatus();
    first.batches.push(batchResult);
    expect(getBankImportStatus().batches).toEqual([]);
  });

  it("records progress while running and refuses a concurrent run", async () => {
    expect(startBankImportJob({ publish: true }, "admin-1")).toEqual({ started: true });
    expect(startBankImportJob({ publish: false }, "admin-2")).toEqual({ started: false, reason: "ALREADY_RUNNING" });

    expect(getBankImportStatus().startedById).toBe("admin-1");

    // The run is gated behind the syllabus seed, so the first batch lands a tick later.
    await new Promise((resolve) => setTimeout(resolve, 0));
    const running = getBankImportStatus();
    expect(running.state).toBe("RUNNING");
    expect(running.batches).toEqual([batchResult]);
    expect(running.writtenQuestions).toBe(100);
    expect(running.completedBatches).toBe(1);
  });

  it("finishes as COMPLETED and accepts a new run afterwards", async () => {
    startBankImportJob({ publish: true }, "admin-1");
    await new Promise((resolve) => setTimeout(resolve, 0));
    release?.();
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(getBankImportStatus().state).toBe("COMPLETED");
    expect(getBankImportStatus().finishedAt).not.toBeNull();
    expect(runBankImport).toHaveBeenCalledWith(expect.anything(), { publish: true }, expect.anything());
    expect(startBankImportJob({ publish: true }, "admin-3")).toEqual({ started: true });
  });

  it("seeds the syllabus before a real load, so missing outcomes cannot block it", async () => {
    startBankImportJob({ publish: true }, "admin-1");
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(seedMdcatSyllabus2025).toHaveBeenCalledTimes(1);
    // The seed must complete before any batch is written.
    expect(seedMdcatSyllabus2025.mock.invocationCallOrder[0]).toBeLessThan(
      runBankImport.mock.invocationCallOrder[0],
    );
    expect(getBankImportStatus().syllabus).toEqual(syllabusResult);
  });

  it("writes nothing during a dry run, so it only reports the gap", async () => {
    startBankImportJob({ publish: true, dryRun: true }, "admin-1");
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(seedMdcatSyllabus2025).not.toHaveBeenCalled();
    expect(runBankImport).toHaveBeenCalledTimes(1);
    expect(getBankImportStatus().syllabus).toBeNull();
  });

  it("fails the run when the syllabus cannot be seeded", async () => {
    seedMdcatSyllabus2025.mockRejectedValue(new Error("Subject BIOLOGY is missing"));
    startBankImportJob({ publish: true }, "admin-1");
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(runBankImport).not.toHaveBeenCalled();
    expect(getBankImportStatus().state).toBe("FAILED");
    expect(getBankImportStatus().error).toContain("Subject BIOLOGY is missing");
  });

  it("captures a validation failure instead of throwing", async () => {
    runBankImport.mockImplementation(() =>
      Promise.reject(Object.assign(new Error("bio-xi-b1 rejected with 2 issue(s)."), { issues: ["a: BAD — x", "b: BAD — y"] })),
    );
    startBankImportJob({ publish: true }, "admin-1");
    await new Promise((resolve) => setTimeout(resolve, 0));

    const failed = getBankImportStatus();
    expect(failed.state).toBe("FAILED");
    expect(failed.error).toContain("rejected with 2 issue(s)");
    expect(failed.issues).toEqual(["a: BAD — x", "b: BAD — y"]);
  });
});
