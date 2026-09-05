"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Field, Select, Input, Textarea } from "@/components/ui";
import { DIFFICULTIES, QUESTION_TYPES, QUESTION_STATUS, SOURCE_TYPES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { computeQualityScore } from "@/lib/validation";

type Option = { optionId: number; text: string; isCorrect: boolean };

type Props = {
  question: {
    id: string;
    questionText: string;
    subjectId: string;
    boardId: string | null;
    classId: string | null;
    chapterId: string | null;
    topicId: string | null;
    questionType: string;
    difficulty: string;
    explanation: string | null;
    sourceType: string;
    sourceReference: string | null;
    mdcatRelevanceScore: number;
    qualityScore: number;
    status: string;
    duplicateOfId: string | null;
    issueReason: string | null;
    options: { text: string; isCorrect: boolean }[];
    duplicateLabel?: string | null;
  };
  boards: { id: string; name: string }[];
  classes: { id: string; name: string }[];
  subjects: { id: string; name: string }[];
  chapters: { id: string; title: string }[];
  topics: { id: string; title: string }[];
};

const LETTER = ["A", "B", "C", "D", "E", "F"];

export function QuestionEditForm({ question, boards, classes, subjects, chapters, topics }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const [text, setText] = useState(question.questionText);
  const [subjectId, setSubjectId] = useState(question.subjectId);
  const [boardId, setBoardId] = useState(question.boardId ?? "");
  const [classId, setClassId] = useState(question.classId ?? "");
  const [chapterId, setChapterId] = useState(question.chapterId ?? "");
  const [topicId, setTopicId] = useState(question.topicId ?? "");
  const [questionType, setQuestionType] = useState(question.questionType);
  const [difficulty, setDifficulty] = useState(question.difficulty);
  const [explanation, setExplanation] = useState(question.explanation ?? "");
  const [sourceType, setSourceType] = useState(question.sourceType);
  const [sourceReference, setSourceReference] = useState(question.sourceReference ?? "");
  const [relevance, setRelevance] = useState(question.mdcatRelevanceScore);
  const [issueReason, setIssueReason] = useState(question.issueReason ?? "");
  const [status, setStatus] = useState(question.status);
  const [options, setOptions] = useState<Option[]>(
    question.options.map((o, i) => ({ optionId: i, text: o.text, isCorrect: o.isCorrect })),
  );
  const [error, setError] = useState<string | null>(null);
  const [deleted, setDeleted] = useState(false);

  const isDraft = question.status === "DRAFT";

  const liveQuality = computeQualityScore({ questionText: text, options, explanation });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const correctCount = options.filter((o) => o.isCorrect).length;
    if (correctCount !== 1) {
      setError("Exactly one option must be marked correct.");
      return;
    }
    if (options.some((o) => o.text.trim() === "")) {
      setError("All options must have text.");
      return;
    }

    setBusy(true);
    const res = await fetch(`/api/admin/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionText: text,
        subjectId,
        boardId,
        classId,
        chapterId: chapterId || null,
        topicId: topicId || null,
        questionType,
        difficulty,
        explanation: explanation || null,
        sourceType,
        sourceReference: sourceReference || null,
        mdcatRelevanceScore: relevance,
        issueReason: issueReason || null,
        status,
        options: options.map((o) => ({ text: o.text, isCorrect: o.isCorrect })),
      }),
    });
    setBusy(false);
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Could not save question.");
      return;
    }
    router.refresh();
  }

  async function deleteQuestion() {
    if (!window.confirm("Permanently delete this DRAFT question? This cannot be undone.")) return;
    const res = await fetch(`/api/admin/questions/${question.id}`, { method: "DELETE" });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Could not delete question.");
      return;
    }
    setDeleted(true);
    router.push("/admin/questions");
    router.refresh();
  }

  if (deleted) return null;

  return (
    <form onSubmit={save} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-4">
        <Field label="Subject">
          <Select value={subjectId} onChange={(e) => setSubjectId(e.target.value)} required>
            {subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </Select>
        </Field>
        <Field label="Board">
          <Select value={boardId} onChange={(e) => setBoardId(e.target.value)} required>
            <option value="">Select…</option>
            {boards.map((b) => <option key={b.id} value={b.id}>{b.name.split(" / ")[0]}</option>)}
          </Select>
        </Field>
        <Field label="Class">
          <Select value={classId} onChange={(e) => setClassId(e.target.value)} required>
            <option value="">Select…</option>
            {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </Select>
        </Field>
        <Field label="Status">
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            {QUESTION_STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <Field label="Chapter">
          <Select value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
            <option value="">None</option>
            {chapters.filter((c) => c.title).map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
          </Select>
        </Field>
        <Field label="Topic">
          <Select value={topicId} onChange={(e) => setTopicId(e.target.value)}>
            <option value="">None</option>
            {topics.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
          </Select>
        </Field>
        <Field label="Type">
          <Select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
            {QUESTION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </Field>
        <Field label="Difficulty">
          <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
          </Select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <Field label="Source type">
          <Select value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
            {SOURCE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
        </Field>
        <Field label="Source reference" hint="e.g. Chapter 5, page 34">
          <Input value={sourceReference} onChange={(e) => setSourceReference(e.target.value)} />
        </Field>
        <Field label="Relevance (0-100)">
          <Input type="number" min={0} max={100} value={relevance} onChange={(e) => setRelevance(Number(e.target.value))} />
        </Field>
        <Field label="Quality score">
          <div className="flex h-10 items-center gap-2 px-3">
            <span className={cn("text-sm font-semibold", liveQuality >= 60 ? "text-emerald-700" : "text-amber-700")}>
              {liveQuality}/100
            </span>
            {question.duplicateLabel ? (
              <span className="text-xs text-slate-500">Duplicate of: {question.duplicateLabel}</span>
            ) : null}
          </div>
        </Field>
      </div>

      <Field label="Question text">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} required />
      </Field>

      <Field label="Options" hint="Select the correct option. Saving publishes the fix immediately.">
        <div className="space-y-2">
          {options.map((opt) => (
            <div key={opt.optionId} className="flex items-center gap-2">
              <input
                type="radio"
                name="correctOption"
                checked={opt.isCorrect}
                onChange={() => setOptions((opts) => opts.map((o) => ({ ...o, isCorrect: o.optionId === opt.optionId })))}
                className="h-4 w-4 shrink-0 accent-slate-900"
                aria-label={`Mark option ${LETTER[opt.optionId]} correct`}
              />
              <span className="w-4 shrink-0 text-sm font-semibold text-slate-500">{LETTER[opt.optionId]}</span>
              <Input
                value={opt.text}
                onChange={(e) => setOptions((opts) => opts.map((o) => (o.optionId === opt.optionId ? { ...o, text: e.target.value } : o)))}
                className={cn(opt.isCorrect && "border-emerald-400 bg-emerald-50")}
              />
            </div>
          ))}
        </div>
      </Field>

      <Field label="Explanation (shown after answering)">
        <Textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />
      </Field>

      <Field label="Problem note (seen by admins)" hint="Only fill when the question has an issue, e.g. scoring impact, ambiguity, citation needed.">
        <Input value={issueReason} onChange={(e) => setIssueReason(e.target.value)} placeholder="e.g. Ambiguous wording; needs citation…" />
      </Field>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={busy}>{busy ? "Saving…" : "Save changes"}</Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
        {isDraft ? (
          <button
            type="button"
            onClick={deleteQuestion}
            className="text-sm font-medium text-red-700 hover:text-red-900"
          >
            Delete draft
          </button>
        ) : null}
      </div>

      <p className="text-xs text-slate-500">
        Saving a published question re-publishes it immediately (admin override §26). It will not reappear in student
        tests that already include it.
      </p>
    </form>
  );
}