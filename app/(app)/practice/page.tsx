import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { getBuilderContext } from "@/lib/builder-context";
import { getStudentProfile, countBoardQuestions } from "@/lib/progress-helpers";
import { TestBuilder } from "@/components/test-builder";
import { PageHeader } from "@/components/ui";

// Below this, board practice is not worth starting: the pool is too thin to be a
// useful paper, and the student is better served by the MDCAT syllabus scope.
const THIN_BOARD_POOL = 50;

export default async function PracticePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { user } = await requireProfile();
  const [context, profile] = await Promise.all([getBuilderContext(), getStudentProfile(user.id)]);
  const params = await searchParams;

  // The builder prefilters from the URL before the profile — the chapter pages
  // link in with ?board= and ?class= of the *chapter's* book. The notice has to
  // describe the scope actually in effect, or it names the wrong board and the
  // wrong count.
  const boardId = params.board ?? profile?.boardId ?? undefined;
  const classId = params.class ?? profile?.classId ?? undefined;
  const boardName =
    context.boards.find((board) => board.id === boardId)?.name.split(" / ")[0] ?? "Your board";

  const defaults = {
    // Board practice stays board-scoped (§3 MODE A): it follows the profile's
    // board textbook. MDCAT papers are built from the syllabus on /exams.
    scope: "BOARD" as const,
    boardIds: boardId ? [boardId] : undefined,
    classIds: classId ? [classId] : undefined,
    subjectIds: params.subject ? [params.subject] : undefined,
    chapterIds: params.chapter ? [params.chapter] : undefined,
    count: params.count ? Number(params.count) : 8,
  };

  // Only meaningful for board scope, and only when a board and class are in play.
  const boardCount = boardId && classId ? await countBoardQuestions(boardId, classId) : null;

  return (
    <div>
      <PageHeader
        title="Practice"
        subtitle="Instant-feedback MCQs. Pick your filters and start."
      />

      {boardCount !== null && boardCount < THIN_BOARD_POOL ? (
        <p className="mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>
            {boardCount === 0
              ? `No ${boardName} questions mapped yet`
              : `Only ${boardCount} question${boardCount === 1 ? "" : "s"} mapped to ${boardName} and this class`}
          </strong>{" "}
          Questions for those textbooks have not been added to the bank. Your MDCAT syllabus paper uses every question
          written for the PMDC MDCAT 2025 syllabus, whichever board it came from —{" "}
          <Link href="/exams" className="font-medium underline">
            take an MDCAT paper
          </Link>
          .
        </p>
      ) : null}

      <TestBuilder context={context} defaultMode="PRACTICE" defaults={defaults} compact />
    </div>
  );
}
