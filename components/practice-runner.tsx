"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

export type RunnerQuestion = {
  questionId: string;
  text: string;
  options: { id: string; text: string }[];
  subjectName: string;
  chapterTitle: string | null;
};

type Feedback = {
  isCorrect: boolean;
  correctOptionId: string | null;
  explanation: string | null;
  sourceType: string | null;
  sourceReference: string | null;
};

const LETTERS = "ABCDEFGH";

export function PracticeRunner({
  testId,
  questions,
}: {
  testId: string;
  questions: RunnerQuestion[];
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = Date.now();
  }, []);

  const question = questions[idx];
  const correctIndex = feedback?.correctOptionId
    ? question.options.findIndex((o) => o.id === feedback.correctOptionId)
    : -1;

  async function answerOption(optionId: string) {
    if (busy || feedback) return;
    setBusy(true);
    setSelected(optionId);
    setError(null);
    // eslint-disable-next-line react-hooks/purity -- wall-clock measurement is inherently impure
    const timeSpent = Math.max(1, Math.round((Date.now() - startRef.current) / 1000));
    const res = await fetch(`/api/tests/${testId}/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: question.questionId, optionId, timeSpentSeconds: timeSpent }),
    });
    if (!res.ok) {
      setError("Could not save your answer. Please try again.");
      setBusy(false);
      return;
    }
    const data = await res.json();
    if (data.isCorrect) setCorrectCount((c) => c + 1);
    setFeedback({
      isCorrect: data.isCorrect,
      correctOptionId: data.correctOptionId,
      explanation: data.explanation,
      sourceType: data.sourceType,
      sourceReference: data.sourceReference,
    });
    setBusy(false);
  }

  function next() {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
      setSelected(null);
      setFeedback(null);
      startRef.current = Date.now();
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    const percent = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
    return (
      <div className="mx-auto max-w-lg py-10 text-center">
        <h1 className="text-3xl font-bold">{percent}%</h1>
        <p className="mt-2 text-slate-600">
          {correctCount} / {questions.length} correct
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/practice" className="inline-flex h-11 items-center rounded-lg bg-slate-900 px-5 text-sm font-medium text-white transition-colors hover:bg-slate-700">
            Practice again
          </Link>
          <Link href="/dashboard" className="inline-flex h-11 items-center rounded-lg border border-slate-300 px-5 text-sm font-medium text-slate-800 hover:bg-slate-100">
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-600">
          {question.subjectName}
          {question.chapterTitle ? ` · ${question.chapterTitle}` : ""}
        </p>
        <p className="text-sm font-medium text-slate-600">
          Question {idx + 1} / {questions.length}
        </p>
      </div>

      <h1 className="text-lg leading-relaxed font-medium text-slate-900">{question.text}</h1>

      <div className="mt-5 space-y-2.5">
        {question.options.map((opt, i) => {
          const locked = !!feedback;
          const isSelected = opt.id === selected;
          const isCorrectOpt = feedback && opt.id === feedback.correctOptionId;
          return (
            <button
              key={opt.id}
              disabled={locked || busy}
              onClick={() => answerOption(opt.id)}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg border bg-white px-4 py-3 text-left text-sm transition-colors",
                locked
                  ? isCorrectOpt
                    ? "border-emerald-400 bg-emerald-50"
                    : isSelected
                      ? "border-red-400 bg-red-50"
                      : "border-slate-200"
                  : "border-slate-300 hover:border-slate-500 hover:bg-slate-50 disabled:opacity-90",
              )}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600">
                {LETTERS[i]}
              </span>
              <span className="font-medium">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {error ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      ) : null}

      {feedback ? (
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p
            className={cn(
              "text-sm font-semibold",
              feedback.isCorrect ? "text-emerald-700" : "text-red-700",
            )}
          >
            {feedback.isCorrect ? "Correct" : "Incorrect"} — correct answer is{" "}
            {correctIndex >= 0 ? LETTERS[correctIndex] : "—"}
          </p>
          {feedback.explanation ? (
            <p className="mt-2 text-sm leading-6 text-slate-700">{feedback.explanation}</p>
          ) : null}
          {feedback.sourceType && feedback.sourceType !== "ADMIN_CREATED" ? (
            <p className="mt-2 text-xs text-slate-500">
              <span className="font-semibold">Source:</span> {feedback.sourceType}
              {feedback.sourceReference ? ` · ${feedback.sourceReference}` : ""}
            </p>
          ) : null}
        </div>
      ) : (
        <p className="mt-4 text-xs text-slate-400">Select an option to get feedback.</p>
      )}

      <div className="mt-6 flex justify-end">
        <Button onClick={next} disabled={!feedback || busy} size="lg">
          {idx + 1 < questions.length ? "Next question" : "Finish"}
        </Button>
      </div>
    </div>
  );
}