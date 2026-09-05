"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { testFilterSchema, type TestFilterInput } from "@/lib/schemas";
import { Button, ChipToggle, Field, Input, Select, Card } from "@/components/ui";
import { DIFFICULTIES, QUESTION_TYPES, SOURCE_TYPES } from "@/lib/constants";
import type { Board, SchoolClass, Subject } from "@prisma/client";

export type BuilderContext = {
  boards: Board[];
  classes: SchoolClass[];
  subjects: Subject[];
  chapters: { id: string; label: string; subjectId: string }[];
};

type Props = {
  context: BuilderContext;
  defaultMode?: "PRACTICE" | "EXAM";
  defaults?: Partial<TestFilterInput>;
  compact?: boolean;
};

export function TestBuilder({ context, defaultMode = "PRACTICE", defaults, compact = false }: Props) {
  const router = useRouter();
  const [mode, setMode] = useState<"PRACTICE" | "EXAM">(defaultMode);
  const [boardIds, setBoardIds] = useState<string[]>(defaults?.boardIds ?? [context.boards[0]?.id ?? ""].filter(Boolean));
  const [classIds, setClassIds] = useState<string[]>(defaults?.classIds ?? [context.classes[0]?.id ?? ""].filter(Boolean));
  const [subjectIds, setSubjectIds] = useState<string[]>(defaults?.subjectIds ?? []);
  const [chapterIds, setChapterIds] = useState<string[]>(defaults?.chapterIds ?? []);
  const [difficulties, setDifficulties] = useState<string[]>(defaults?.difficulties ?? []);
  const [questionTypes, setQuestionTypes] = useState<string[]>(defaults?.questionTypes ?? []);
  const [sourceTypes, setSourceTypes] = useState<string[]>(defaults?.sourceTypes ?? []);
  const [minRelevance, setMinRelevance] = useState(0);
  const [historyFilter, setHistoryFilter] = useState("MIXED");
  const [count, setCount] = useState(defaults?.count ?? (defaultMode === "EXAM" ? 25 : 8));
  const [timeLimit, setTimeLimit] = useState<number | null>(defaultMode === "EXAM" ? 30 : null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const chapterOptions = useMemo(
    () =>
      context.chapters
        .filter((c) => subjectIds.length === 0 || subjectIds.includes(c.subjectId))
        .map((c) => ({ value: c.id, label: c.label })),
    [context.chapters, subjectIds],
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const payload: TestFilterInput = {
      mode,
      boardIds,
      classIds,
      subjectIds,
chapterIds,
      topicIds: [],
      difficulties: difficulties as TestFilterInput["difficulties"],
      questionTypes: questionTypes as TestFilterInput["questionTypes"],
      sourceTypes: sourceTypes as TestFilterInput["sourceTypes"],
      minRelevance,
      historyFilter: historyFilter as TestFilterInput["historyFilter"],
      count,
      timeLimitSeconds: timeLimit && timeLimit > 0 ? timeLimit * 60 : null,
    };
    const parsed = testFilterSchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your filters.");
      return;
    }
    setError(null);
    setLoading(true);
    const res = await fetch("/api/tests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Could not create test.");
      setLoading(false);
      return;
    }
    const data = await res.json();
    router.push(`/tests/${data.testId}`);
  }

  return (
    <form onSubmit={submit}>
      {!compact && (
        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <Field label="Mode">
            <Select value={mode} onChange={(e) => setMode(e.target.value as "PRACTICE" | "EXAM")}>
              <option value="PRACTICE">
                Practice — instant feedback & explanations
              </option>
              <option value="EXAM">Examination — no feedback until submit</option>
            </Select>
          </Field>
          {mode === "EXAM" ? (
            <Field label="Time limit (minutes)" hint="Leave empty for untimed.">
              <Input
                type="number"
                min={1}
                placeholder="e.g. 30"
                value={timeLimit ?? ""}
                onChange={(e) => setTimeLimit(e.target.value ? Number(e.target.value) : null)}
              />
            </Field>
          ) : null}
        </div>
      )}

      <Card className="space-y-6">
        <Field label="Boards" hint="Select one or more boards — cross-board tests combine them.">
          <ChipToggle
            options={context.boards.map((b) => ({ value: b.id, label: b.name.split(" / ")[0] }))}
            selected={boardIds}
            onChange={setBoardIds}
          />
        </Field>

        <Field label="Classes">
          <ChipToggle
            options={context.classes.map((c) => ({ value: c.id, label: c.name }))}
            selected={classIds}
            onChange={setClassIds}
          />
        </Field>

        <Field label="Subjects">
          <ChipToggle
            options={context.subjects.map((s) => ({ value: s.id, label: s.name }))}
            selected={subjectIds}
            onChange={setSubjectIds}
          />
        </Field>

        <Field label="Specific chapters" hint="Optional — pick chapters or leave empty for all chapters.">
          <div className="max-h-40 overflow-auto rounded-lg border border-slate-200 p-2">
            {chapterOptions.length === 0 ? (
              <p className="px-1 py-2 text-sm text-slate-400">Select subjects to see chapters.</p>
            ) : (
              <ChipToggle options={chapterOptions.slice(0, 60)} selected={chapterIds} onChange={setChapterIds} />
            )}
          </div>
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Difficulty" hint="Empty = all levels.">
            <ChipToggle
              options={DIFFICULTIES.map((d) => ({ value: d, label: d }))}
              selected={difficulties}
              onChange={setDifficulties}
            />
          </Field>
          <Field label="Question type" hint="Empty = all types.">
            <div className="max-h-40 overflow-auto rounded-lg border border-slate-200 p-2">
              <ChipToggle
                options={QUESTION_TYPES.map((t) => ({ value: t, label: t }))}
                selected={questionTypes}
                onChange={setQuestionTypes}
              />
            </div>
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Source" hint="Empty = all sources.">
            <ChipToggle
              options={SOURCE_TYPES.map((s) => ({ value: s, label: s }))}
              selected={sourceTypes}
              onChange={setSourceTypes}
            />
          </Field>
          <Field label="MDCAT relevance">
            <Select value={minRelevance} onChange={(e) => setMinRelevance(Number(e.target.value))}>
              <option value={0}>All relevance</option>
              <option value={40}>Medium+ (≥40)</option>
              <option value={65}>High+ (≥65)</option>
              <option value={80}>Very high (≥80)</option>
            </Select>
          </Field>
        </div>

        <Field label="Question history">
          <Select value={historyFilter} onChange={(e) => setHistoryFilter(e.target.value)}>
            <option value="MIXED">Mixed (no restriction)</option>
            <option value="NEVER_ATTEMPTED">Never attempted</option>
            <option value="INCORRECT">Previously incorrect (mistakes)</option>
          </Select>
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Number of questions">
            <Input
              type="number"
              min={1}
              max={300}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </Field>
        </div>
      </Card>

      {error ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {mode === "EXAM" ? "Answers are locked until you submit." : "You'll get instant feedback."}
        </p>
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Creating…" : mode === "EXAM" ? "Start exam" : "Start practicing"}
        </Button>
      </div>
    </form>
  );
}