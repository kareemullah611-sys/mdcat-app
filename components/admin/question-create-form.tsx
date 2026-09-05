"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Field, Input, Select, Textarea } from "@/components/ui";
import { DIFFICULTIES, QUESTION_TYPES, SOURCE_TYPES } from "@/lib/constants";
import { cn } from "@/lib/cn";

type Option = { optionId: number; text: string };
const EMPTY_OPTIONS: Option[] = Array.from({ length: 4 }, (_, i) => ({ optionId: i, text: "" }));

type Props = {
  boards: { id: string; name: string }[];
  classes: { id: string; name: string }[];
  subjects: { id: string; name: string }[];
  defaultChapterId?: string;
};

export function QuestionCreateForm({ boards, classes, subjects, defaultChapterId }: Props) {
  const router = useRouter();
  const [subjectId, setSubjectId] = useState("");
  const [boardId, setBoardId] = useState("");
  const [classId, setClassId] = useState("");
  const [chapterId, setChapterId] = useState(defaultChapterId ?? "");
  const [topicId, setTopicId] = useState("");
  const [text, setText] = useState("");
  const [explanation, setExplanation] = useState("");
  const [sourceReference, setSourceReference] = useState("");
  const [questionType, setQuestionType] = useState("CONCEPTUAL");
  const [difficulty, setDifficulty] = useState("MEDIUM");
  const [sourceType, setSourceType] = useState("ADMIN_CREATED");
  const [relevance, setRelevance] = useState(50);
  const [options, setOptions] = useState<Option[]>(EMPTY_OPTIONS);
  const [correctOptionId, setCorrectOptionId] = useState<number | null>(null);
  const [chapters, setChapters] = useState<{ id: string; title: string }[]>([]);
  const [topics, setTopics] = useState<{ id: string; title: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function loadChapters(subjectIdToLoad: string) {
    if (!subjectIdToLoad) {
      setChapters([]);
      return;
    }
    const res = await fetch(`/api/admin/chapters?subjectId=${encodeURIComponent(subjectIdToLoad)}`);
    const data = await res.json();
    setChapters(data.chapters.map((c: { id: string; title: string }) => ({ id: c.id, title: c.title })));
    setChapterId("");
    setTopics([]);
    setTopicId("");
  }

  async function loadTopics(chapterIdToLoad: string) {
    if (!chapterIdToLoad) {
      setTopics([]);
      return;
    }
    const res = await fetch(`/api/admin/topics?chapterId=${encodeURIComponent(chapterIdToLoad)}`);
    const data = await res.json();
    setTopics(data.topics.map((t: { id: string; title: string }) => ({ id: t.id, title: t.title })));
    setTopicId("");
  }

  function setOptionText(index: number, value: string) {
    setOptions((opts) => opts.map((o) => (o.optionId === index ? { ...o, text: value } : o)));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (correctOptionId === null) {
      setError("Mark exactly one option as the correct answer.");
      return;
    }
    if (options.some((o) => o.text.trim() === "")) {
      setError("All options must have text.");
      return;
    }
    setBusy(true);
    const res = await fetch("/api/admin/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionText: text,
        subjectId,
        boardId,
        classId,
        chapterId: chapterId || undefined,
        topicId: topicId || undefined,
        questionType,
        difficulty,
        explanation: explanation || undefined,
        sourceType,
        sourceReference: sourceReference || undefined,
        mdcatRelevanceScore: relevance,
        options: options.map((o) => ({ text: o.text, isCorrect: o.optionId === correctOptionId })),
      }),
    });
    setBusy(false);
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Could not save question.");
      return;
    }
    setText("");
    setExplanation("");
    setSourceReference("");
    setOptions(EMPTY_OPTIONS);
    setCorrectOptionId(0);
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-4">
        <Field label="Subject">
          <Select value={subjectId} onChange={(e) => { setSubjectId(e.target.value); void loadChapters(e.target.value); }} required>
            <option value="">Select…</option>
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
        <Field label="Chapter">
          <Select value={chapterId} onChange={(e) => { setChapterId(e.target.value); void loadTopics(e.target.value); }}>
            <option value="">None</option>
            {chapters.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
          </Select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
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
        <Field label="Relevance (0-100)">
          <Input type="number" min={0} max={100} value={relevance} onChange={(e) => setRelevance(Number(e.target.value))} />
        </Field>
      </div>

      <Field label="Source type">
        <Select value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
          {SOURCE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
      </Field>
      <Field label="Source reference (optional)" hint="e.g. Chapter 5, page 34 — shown when the student opens ⓘ Source.">
        <Input value={sourceReference} onChange={(e) => setSourceReference(e.target.value)} />
      </Field>

      <Field label="Question text">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} required placeholder="Which of the following…" />
      </Field>

      <Field label="Options" hint="Select the correct option. Exactly one may be correct.">
        <div className="space-y-2">
          {options.map((opt) => (
            <div key={opt.optionId} className="flex items-center gap-2">
              <input
                type="radio"
                name="correctOption"
                checked={correctOptionId === opt.optionId}
                onChange={() => setCorrectOptionId(opt.optionId)}
                className="h-4 w-4 shrink-0 accent-slate-900"
                aria-label={`Mark option ${["A", "B", "C", "D", "E", "F"][opt.optionId]} correct`}
              />
              <span className="w-4 shrink-0 text-sm font-semibold text-slate-500">
                {["A", "B", "C", "D", "E", "F"][opt.optionId]}
              </span>
              <Input
                value={opt.text}
                onChange={(e) => setOptionText(opt.optionId, e.target.value)}
                placeholder={`Option ${["A", "B", "C", "D", "E", "F"][opt.optionId]}`}
                className={cn(correctOptionId === opt.optionId && "border-emerald-400 bg-emerald-50")}
              />
            </div>
          ))}
        </div>
      </Field>

      <Field label="Explanation (shown after answering)">
        <Textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} placeholder="Concise explanation of the correct answer…" />
      </Field>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <Button type="submit" disabled={busy}>{busy ? "Saving…" : "Add question"}</Button>
    </form>
  );
}