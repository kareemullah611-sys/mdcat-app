"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { formatDuration } from "@/lib/exam-core";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { RunnerQuestion } from "@/components/practice-runner";

const LETTERS = "ABCDEFGH";

export function ExamRunner({
  testId,
  questions,
  timeLimitSeconds,
}: {
  testId: string;
  questions: RunnerQuestion[];
  timeLimitSeconds: number | null;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [marked, setMarked] = useState<Set<string>>(new Set());
  const [idx, setIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(timeLimitSeconds);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const timeSpentRef = useRef<Record<string, number>>({});
  const lastTickRef = useRef<number>(0);
  const submitScheduledRef = useRef(false);

  const question = questions[idx];
  const total = questions.length;
  const answerCount = Object.keys(answers).length;
  const timed = timeLimitSeconds !== null;

  function tick(qid: string) {
    // eslint-disable-next-line react-hooks/purity -- wall-clock measurement is inherently impure
    const now = Date.now();
    const base = lastTickRef.current === 0 ? now : lastTickRef.current;
    const delta = Math.round((now - base) / 1000);
    lastTickRef.current = now;
    timeSpentRef.current[qid] = (timeSpentRef.current[qid] ?? 0) + Math.max(0, delta);
  }

  function selectOption(optionId: string) {
    tick(question.questionId);
    setAnswers((prev) => {
      const next = { ...prev };
      if (next[question.questionId] === optionId) delete next[question.questionId];
      else next[question.questionId] = optionId;
      return next;
    });
  }

  function toggleMark() {
    tick(question.questionId);
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(question.questionId)) next.delete(question.questionId);
      else next.add(question.questionId);
      return next;
    });
  }

  function goTo(i: number) {
    tick(question.questionId);
    setIdx(i);
  }

  async function submit() {
    if (submitting) return;
    setSubmitting(true);
    setSubmissionError(null);
    tick(question.questionId);
    const payload = questions.map((q) => ({
      questionId: q.questionId,
      selectedOptionId: answers[q.questionId] ?? null,
      timeSpentSeconds: Math.max(0, Math.round(timeSpentRef.current[q.questionId] ?? 0)),
    }));
    const request = () => fetch(`/api/tests/${testId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: payload }),
      keepalive: true,
    });

    try {
      let res: Response;
      try {
        res = await request();
      } catch {
        // The first request may already have committed. The endpoint treats an
        // already-completed exam as success, making this retry safe.
        res = await request();
      }
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSubmissionError(data?.error ?? "Could not submit exam. Please try again.");
        setSubmitting(false);
        return;
      }
      router.push(`/tests/${testId}/result`);
    } catch {
      setSubmissionError(
        navigator.onLine
          ? "The response was interrupted. Your answers are still here—tap Submit to safely try again."
          : "You are offline. Reconnect, then tap Submit; your answers are still here.",
      );
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (!timed) return;
    const id = setInterval(() => {
      setTimeLeft((prev) => (prev === null ? null : Math.max(0, prev - 1)));
    }, 1000);
    return () => clearInterval(id);
  }, [timed]);

  useEffect(() => {
    if (timeLeft !== 0 || submitting || submitScheduledRef.current) return;
    submitScheduledRef.current = true;
    const id = window.setTimeout(() => {
      submitScheduledRef.current = false;
      void submit();
    }, 0);
    return () => window.clearTimeout(id);
    // submit intentionally omitted: it is stable per render and guarded by `submitting`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, submitting]);

  const timeWarning = timeLeft !== null && timeLeft <= 300;

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium text-slate-600">
          Question {idx + 1} / {total}
        </p>
        <div className="flex items-center gap-2">
          {timeLimitSeconds !== null && timeLeft !== null ? (
            <span
              className={cn(
                "rounded-lg px-3 py-1.5 font-mono text-sm font-semibold",
                timeWarning
                  ? "animate-pulse bg-red-100 text-red-700"
                  : "bg-slate-100 text-slate-800",
              )}
            >
              {formatDuration(timeLeft)}
            </span>
          ) : null}
          <Button variant="primary" size="sm" onClick={() => void submit()} disabled={submitting}>
            Submit
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_16rem]">
        {/* Question */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
            {question.subjectName}
            {question.chapterTitle ? ` · ${question.chapterTitle}` : ""}
          </p>
          <h1 className="text-lg leading-relaxed font-medium text-slate-900">{question.text}</h1>

          <div className="mt-5 space-y-2.5">
            {question.options.map((opt, i) => {
              const isSelected = answers[question.questionId] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => selectOption(opt.id)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg border bg-white px-4 py-3 text-left text-sm transition-colors",
                    isSelected
                      ? "border-slate-900 bg-slate-50 ring-2 ring-slate-200"
                      : "border-slate-300 hover:border-slate-500",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                      isSelected
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-300 text-slate-600",
                    )}
                  >
                    {LETTERS[i]}
                  </span>
                  <span className="font-medium">{opt.text}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex justify-between">
            <Button variant="ghost" onClick={() => goTo(Math.max(0, idx - 1))} disabled={idx === 0}>
              ← Previous
            </Button>
            <Button variant="secondary" onClick={toggleMark}>
              {marked.has(question.questionId) ? "Unmark for review" : "Mark for review"}
            </Button>
            <Button variant="ghost" onClick={() => goTo(Math.min(total - 1, idx + 1))} disabled={idx === total - 1}>
              Next →
            </Button>
          </div>
        </div>

        {/* Palette */}
        <aside className="hidden md:block">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="mb-3 text-sm font-medium text-slate-700">
              {answerCount} answered · {marked.size} marked
            </p>
            <div className="grid grid-cols-6 gap-1.5">
              {questions.map((q, i) => {
                const answered = !!answers[q.questionId];
                const isMarked = marked.has(q.questionId);
                const current = i === idx;
                return (
                  <button
                    key={q.questionId}
                    onClick={() => goTo(i)}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold transition-colors",
                      answered
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-100 text-slate-600",
                      isMarked && "ring-2 ring-amber-400",
                      current && "bg-slate-900 text-white ring-2 ring-slate-900",
                      current && answered && "bg-emerald-600 text-white",
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-500">
              <div><span className="mr-1 inline-block h-2.5 w-2.5 rounded bg-emerald-200" />Answered</div>
              <div><span className="mr-1 inline-block h-2.5 w-2.5 rounded bg-slate-200" />Unanswered</div>
              <div><span className="mr-1 inline-block h-2.5 w-2.5 rounded-full ring-2 ring-amber-400" />Marked</div>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile palette */}
      <div className="mt-6 md:hidden">
        <div className="grid grid-cols-10 gap-1.5">
          {questions.map((q, i) => {
            const answered = !!answers[q.questionId];
            const isMarked = marked.has(q.questionId);
            const current = i === idx;
            return (
              <button
                key={q.questionId}
                onClick={() => goTo(i)}
                className={cn(
                  "flex h-8 items-center justify-center rounded-md text-xs font-semibold",
                  answered ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600",
                  isMarked && "ring-2 ring-amber-400",
                  current && "bg-slate-900 text-white",
                )}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {submissionError ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {submissionError}
        </p>
      ) : null}
    </div>
  );
}
