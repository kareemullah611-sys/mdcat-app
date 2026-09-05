"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Field, Input, Select } from "@/components/ui";

type Props = {
  boards: { id: string; name: string }[];
  classes: { id: string; name: string }[];
  subjects: { id: string; name: string }[];
};

export function BookCreateForm({ boards, classes, subjects }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    boardId: "",
    classId: "",
    subjectId: "",
    title: "",
    edition: "",
    publicationYear: "",
    publisher: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const res = await fetch("/api/admin/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        publicationYear: form.publicationYear ? Number(form.publicationYear) : undefined,
      }),
    });
    setBusy(false);
    if (!res.ok) {
      setError("Could not save book.");
      return;
    }
    setForm({ boardId: "", classId: "", subjectId: "", title: "", edition: "", publicationYear: "", publisher: "" });
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Board">
          <Select value={form.boardId} onChange={(e) => set("boardId", e.target.value)} required>
            <option value="">Select…</option>
            {boards.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
          </Select>
        </Field>
        <Field label="Class">
          <Select value={form.classId} onChange={(e) => set("classId", e.target.value)} required>
            <option value="">Select…</option>
            {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </Select>
        </Field>
        <Field label="Subject">
          <Select value={form.subjectId} onChange={(e) => set("subjectId", e.target.value)} required>
            <option value="">Select…</option>
            {subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </Select>
        </Field>
      </div>

      <Field label="Book title">
        <Input value={form.title} onChange={(e) => set("title", e.target.value)} required placeholder="e.g. Chemistry Grade XII" />
      </Field>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Edition">
          <Input value={form.edition} onChange={(e) => set("edition", e.target.value)} placeholder="e.g. 2023" />
        </Field>
        <Field label="Publication year">
          <Input type="number" value={form.publicationYear} onChange={(e) => set("publicationYear", e.target.value)} />
        </Field>
        <Field label="Publisher">
          <Input value={form.publisher} onChange={(e) => set("publisher", e.target.value)} />
        </Field>
      </div>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <Button type="submit" disabled={busy}>{busy ? "Saving…" : "Add book"}</Button>
    </form>
  );
}