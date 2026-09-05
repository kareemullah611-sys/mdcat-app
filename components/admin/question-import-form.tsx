"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Field } from "@/components/ui";

type RowResult = {
  rowIndex: number;
  title: string;
  errors: string[];
  qualityScore: number;
  publishable: boolean;
};

export function QuestionImportForm() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ total: number; imported: number; failed: number; skipped: number; rows: RowResult[] } | null>(null);

  async function run() {
    setError(null);
    setResult(null);
    if (!file) {
      setError("Choose a CSV file to upload.");
      return;
    }
    setBusy(true);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/admin/import", { method: "POST", body: form });
    const data = await res.json().catch(() => null);
    setBusy(false);
    if (!res.ok) {
      setError(data?.error ?? `Import failed (${res.status}).`);
      return;
    }
    setResult(data);
    router.refresh();
  }

  const sample = result?.imported ?? 0;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="CSV file" hint="Upload a CSV with the template columns. Rows that don't meet the quality bar (score ≥ 60) or have invalid answers are skipped.">
          <input
            type="file"
            accept=".csv,text/csv"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-700"
          />
        </Field>
        <div className="flex items-end">
          <a
            href="/api/admin/import"
            download
            className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2 hover:decoration-slate-700"
          >
            Download template (.csv)
          </a>
        </div>
      </div>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <Button type="button" onClick={run} disabled={busy}>{busy ? "Importing…" : "Import questions"}</Button>

      {result ? (
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-700">
            <strong className="text-slate-900">{sample}</strong> imported ·{" "}
            <strong className="text-red-700">{result.failed}</strong> failed ·{" "}
            {result.skipped} skipped · {result.total} rows total
          </p>
          {result.failed > 0 ? (
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Row errors</p>
              <ul className="max-h-64 space-y-2 overflow-y-auto text-sm">
                {result.rows.filter((r) => r.errors.length > 0).map((r) => (
                  <li key={r.rowIndex} className="rounded-lg bg-slate-50 px-3 py-2">
                    <span className="font-semibold text-slate-800">Row {r.rowIndex}</span>{" "}
                    <span className="text-slate-500">— {r.title || "…"}</span>
                    <ul className="mt-1 list-inside list-disc text-xs text-red-700">
                      {r.errors.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}