import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireProfile } from "@/lib/session";
import { PracticeRunner, type RunnerQuestion } from "@/components/practice-runner";
import { ExamRunner } from "@/components/exam-runner";

type RouteProps = { params: Promise<{ testId: string }> };

export default async function TestRunPage({ params }: RouteProps) {
  const { user } = await requireProfile();
  const { testId } = await params;

  const test = await prisma.test.findUnique({
    where: { id: testId },
    include: {
      questions: {
        orderBy: { orderIndex: "asc" },
        include: {
          question: {
            include: {
              options: { orderBy: { order: "asc" } },
              subject: true,
              chapter: true,
            },
          },
        },
      },
    },
  });

  if (!test || test.userId !== user.id) notFound();
  if (test.status === "COMPLETED") redirect(`/tests/${testId}/result`);

  // Reconstruct each question in the exact order presented when created (§32).
  const questions: RunnerQuestion[] = test.questions.map((tq) => {
    const optionById = new Map(tq.question.options.map((o) => [o.id, o]));
    return {
      questionId: tq.questionId,
      text: tq.question.questionText,
      options: tq.optionOrder
        .map((id) => optionById.get(id))
        .filter((o): o is NonNullable<typeof o> => Boolean(o))
        .map((o) => ({ id: o.id, text: o.text })),
      subjectName: tq.question.subject.name,
      chapterTitle: tq.question.chapter?.title ?? null,
    };
  });

  // Only the presented options are sent to the browser; correct keys stay server-side
  // and are evaluated at submit time (spec §92, §33).
  return (
    <div>
      {test.mode === "EXAM" ? (
        <ExamRunner testId={test.id} questions={questions} timeLimitSeconds={test.timeLimitSeconds} />
      ) : (
        <PracticeRunner testId={test.id} questions={questions} />
      )}
    </div>
  );
}