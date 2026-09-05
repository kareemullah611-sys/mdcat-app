"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  id: string;
  status: string;
};

const NEXT_STATUS: Record<string, string> = {
  DRAFT: "PUBLISHED",
  VALIDATED: "PUBLISHED",
  PUBLISHED: "DISABLED",
  DISABLED: "ARCHIVED",
  ARCHIVED: "PUBLISHED",
};

const ACTION_LABEL: Record<string, string> = {
  PUBLISHED: "Disable",
  DRAFT: "Publish",
  VALIDATED: "Publish",
  DISABLED: "Archive",
  ARCHIVED: "Restore",
};

export function QuestionRowActions({ id, status }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function changeStatus(next: string, action: string) {
    setBusy(action);
    setError(null);
    const res = await fetch(`/api/admin/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    setBusy(null);
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Request failed");
      return;
    }
    router.refresh();
  }

  async function remove() {
    if (!window.confirm("Permanently delete this DRAFT question?")) return;
    setBusy("delete");
    const res = await fetch(`/api/admin/questions/${id}`, { method: "DELETE" });
    setBusy(null);
    if (!res.ok) return;
    router.refresh();
  }

  const action = ACTION_LABEL[status];
  const next = NEXT_STATUS[status];

  return (
    <div className="flex items-center gap-2">
      <Link href={`/admin/questions/${id}`} className="text-sm font-semibold text-slate-900 hover:text-slate-700">
        Edit
      </Link>
      {action ? (
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => changeStatus(next, action)}
          className="text-sm font-medium text-slate-600 hover:text-slate-900 disabled:opacity-50"
        >
          {busy === action ? "…" : action}
        </button>
      ) : null}
      {status === "DRAFT" ? (
        <button
          type="button"
          disabled={busy !== null}
          onClick={remove}
          className="text-sm font-medium text-red-700 hover:text-red-900 disabled:opacity-50"
        >
          {busy === "delete" ? "…" : "Delete"}
        </button>
      ) : null}
      {error ? <span className="text-xs text-red-700">{error}</span> : null}
    </div>
  );
}