"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { onboardingSchema } from "@/lib/schemas";
import { postJson } from "@/lib/client-fetch";
import { Button, ChipToggle, Field, Select } from "@/components/ui";
import type { Board, SchoolClass, Subject } from "@prisma/client";

type Props = {
  boards: Board[];
  classes: SchoolClass[];
  subjects: Subject[];
  /**
   * Current settings, when the form is opened to edit an existing profile
   * ("Edit settings" on /profile). Without these the form rendered blank and
   * saving it replaced the student's class, board and subjects with the blanks.
   */
  defaults?: { classId?: string; boardId?: string; goal?: string; subjectIds?: string[] };
  submitLabel?: string;
};

export function OnboardingForm({ boards, classes, subjects, defaults, submitLabel }: Props) {
  const router = useRouter();
  const [classId, setClassId] = useState(defaults?.classId ?? "");
  const [boardId, setBoardId] = useState(defaults?.boardId ?? "");
  const [goal, setGoal] = useState(defaults?.goal ?? "MDCAT");
  const [subjectIds, setSubjectIds] = useState<string[]>(defaults?.subjectIds ?? []);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = onboardingSchema.safeParse({ classId, boardId, goal, subjectIds });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please complete the form.");
      return;
    }
    setError(null);
    setLoading(true);
    const result = await postJson("/api/onboarding", parsed.data);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="space-y-4">
        <Field label="Your class">
          <Select value={classId} onChange={(e) => setClassId(e.target.value)}>
            <option value="">Select class…</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Your board" hint="You can prepare for multiple boards later from Exams.">
          <Select value={boardId} onChange={(e) => setBoardId(e.target.value)}>
            <option value="">Select board…</option>
            {boards.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Your goal">
          <Select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="MDCAT">MDCAT</option>
            <option value="BOARD_EXAM">Board exam</option>
            <option value="BOTH">Both</option>
          </Select>
        </Field>

        <Field label="Subjects" hint="Pick the subjects you want to prepare.">
          <ChipToggle
            options={subjects.map((s) => ({ value: s.id, label: s.name }))}
            selected={subjectIds}
            onChange={setSubjectIds}
          />
        </Field>
      </div>

      {error ? (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <div className="flex items-center justify-between">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving…" : (submitLabel ?? "Continue to dashboard")}
        </Button>
      </div>
    </form>
  );
}