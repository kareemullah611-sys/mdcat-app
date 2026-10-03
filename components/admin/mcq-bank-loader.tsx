"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Admin: load the authored MCQ bank into this database (spec §26, §56).
 *
 * The questions ship as TypeScript data inside the deploy image, so an
 * environment needs no file transfer — this runs the same validated importer as
 * `npm run mcq:bank:import`. Long loads run in the background; this component
 * polls the status endpoint while one is running. Initial state comes from the
 * server-rendered page.
 */

type BatchResult = { code: string; subject: string; grade: number; questions: number; outcomes: number; status: string };
export type McqBankJob = {
  state: "IDLE" | "RUNNING" | "COMPLETED" | "FAILED";
  scope: { subject?: string; grade?: number; batch?: string; publish?: boolean; dryRun?: boolean } | null;
  startedAt: string | null;
  finishedAt: string | null;
  totalBatches: number;
  completedBatches: number;
  writtenQuestions: number;
  batches: BatchResult[];
  issues: string[];
  error: string | null;
};

const SUBJECTS = ["", "BIOLOGY", "CHEMISTRY", "PHYSICS"];
const GRADES = ["", "11", "12"];

export function McqBankLoader({ initialJob }: { initialJob: McqBankJob }) {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [publish, setPublish] = useState(false);
  const [job, setJob] = useState<McqBankJob | null>(initialJob);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const load = useCallback(async () => {
    const response = await fetch("/api/admin/mcq-bank", { cache: "no-store" });
    if (response.ok) setJob(((await response.json()) as { job: McqBankJob }).job);
  }, []);

  useEffect(() => {
    if (job?.state !== "RUNNING") return;
    const timer = setInterval(() => void load(), 2000);
    return () => clearInterval(timer);
  }, [job?.state, load]);

  async function start(dryRun: boolean) {
    setBusy(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/mcq-bank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(subject ? { subject } : {}),
          ...(grade ? { grade: Number(grade) } : {}),
          publish: publish && !dryRun,
          dryRun,
        }),
      });
      const payload = (await response.json()) as { error?: string; job?: McqBankJob };
      if (!response.ok) {
        setMessage(payload.error ?? `Failed to start (HTTP ${response.status})`);
        if (payload.job) setJob(payload.job);
        return;
      }
      setMessage(dryRun ? "Dry run finished — nothing was written." : "Import started. This page updates as batches complete.");
      await load();
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  const running = job?.state === "RUNNING";
  const percent = job && job.totalBatches > 0 ? Math.round((job.completedBatches / job.totalBatches) * 100) : 0;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-slate-900">Question bank</h1>
        <p className="mt-1 text-sm text-slate-600">
          Load the authored MDCAT bank into this database. Every batch is validated before it is written: outcomes must
          exist in the PMDC MDCAT 2025 syllabus, source chapters must exist for the board and class, and each batch must
          be exactly 100 questions at 15 easy / 70 medium / 15 hard with no duplicate stems.
        </p>
      </header>

      <section className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex flex-wrap items-end gap-3">
          <label className="text-sm">
            <span className="mb-1 block font-medium text-slate-700">Subject</span>
            <select className="rounded border border-slate-300 px-2 py-1" value={subject} onChange={(e) => setSubject(e.target.value)} disabled={running}>
              {SUBJECTS.map((value) => (
                <option key={value} value={value}>
                  {value === "" ? "All subjects" : value}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium text-slate-700">Class</span>
            <select className="rounded border border-slate-300 px-2 py-1" value={grade} onChange={(e) => setGrade(e.target.value)} disabled={running}>
              {GRADES.map((value) => (
                <option key={value} value={value}>
                  {value === "" ? "All classes" : `Grade ${value}`}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 pb-1 text-sm">
            <input type="checkbox" checked={publish} onChange={(e) => setPublish(e.target.checked)} disabled={running} />
            <span>
              Publish immediately
              <span className="block text-xs text-slate-500">Otherwise questions are saved as VALIDATED (admin-only).</span>
            </span>
          </label>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void start(true)}
            disabled={busy || running}
            className="rounded bg-slate-700 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
          >
            Dry run (validate only)
          </button>
          <button
            type="button"
            onClick={() => void start(false)}
            disabled={busy || running}
            className="rounded bg-blue-700 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
          >
            {publish ? "Load and publish" : "Load as validated"}
          </button>
          {running ? <span className="self-center text-sm text-slate-600">Import running…</span> : null}
        </div>

        {message ? <p className="text-sm text-slate-700">{message}</p> : null}
      </section>

      {job && job.state !== "IDLE" ? (
        <section className="space-y-2 rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span
              className={`rounded px-2 py-0.5 text-xs font-semibold ${
                job.state === "COMPLETED"
                  ? "bg-green-100 text-green-800"
                  : job.state === "FAILED"
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
              }`}
            >
              {job.state}
            </span>
            {job.scope ? (
              <span className="text-slate-600">
                {job.scope.subject ?? "All subjects"} · {job.scope.grade ? `Grade ${job.scope.grade}` : "All classes"} ·{" "}
                {job.scope.dryRun ? "dry run" : job.scope.publish ? "published" : "validated"}
              </span>
            ) : null}
            {job.totalBatches > 0 ? (
              <span className="text-slate-600">
                {job.completedBatches}/{job.totalBatches} batches · {job.writtenQuestions} questions
              </span>
            ) : null}
            {job.startedAt ? <span className="text-slate-500">started {new Date(job.startedAt).toLocaleTimeString()}</span> : null}
          </div>
          {running ? (
            <div className="h-2 w-full rounded bg-slate-200">
              <div className="h-2 rounded bg-blue-600 transition-all" style={{ width: `${percent}%` }} />
            </div>
          ) : null}
          {job.error ? <p className="text-sm text-red-700">{job.error}</p> : null}
          {job.issues.length > 0 ? (
            <details className="text-sm">
              <summary className="cursor-pointer text-slate-700">{job.issues.length} validation issue(s)</summary>
              <ul className="mt-1 max-h-64 list-disc space-y-0.5 overflow-auto pl-5 text-xs text-slate-600">
                {job.issues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            </details>
          ) : null}
          {job.batches.length > 0 ? (
            <details className="text-sm" open={!running && job.state !== "COMPLETED"}>
              <summary className="cursor-pointer text-slate-700">{job.batches.length} batch result(s)</summary>
              <table className="mt-2 w-full text-left text-xs">
                <thead className="text-slate-500">
                  <tr>
                    <th className="py-1 pr-3">Batch</th>
                    <th className="py-1 pr-3">Subject</th>
                    <th className="py-1 pr-3">Class</th>
                    <th className="py-1 pr-3">Questions</th>
                    <th className="py-1 pr-3">Outcomes</th>
                    <th className="py-1">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {job.batches.map((batch) => (
                    <tr key={batch.code} className="border-t border-slate-100">
                      <td className="py-1 pr-3 font-mono">{batch.code}</td>
                      <td className="py-1 pr-3">{batch.subject}</td>
                      <td className="py-1 pr-3">{batch.grade}</td>
                      <td className="py-1 pr-3">{batch.questions}</td>
                      <td className="py-1 pr-3">{batch.outcomes}</td>
                      <td className="py-1">{batch.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

