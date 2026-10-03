import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { buildTextbookScopeWhere } from "@/lib/test-service";
import { requireProfile } from "@/lib/session";
import { Card } from "@/components/ui";

type RouteProps = { params: Promise<{ chapterId: string }> };

export default async function ChapterPage({ params }: RouteProps) {
  await requireProfile();
  const { chapterId } = await params;

  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    include: {
      book: { include: { board: true, subject: true, class: true } },
      topics: { orderBy: [{ number: "asc" }, { order: "asc" }] },
    },
  });
  if (!chapter) notFound();
  // A chapter of an unpublished book has no reader and no reachable practice,
  // so it should not be viewable by direct link.
  if (chapter.book.status !== "PUBLISHED") notFound();

  // Counted with the same predicate the practice link applies (board + class on
  // top of the chapter), so the advertised number is exactly what can be drawn.
  const questionCount = await prisma.question.count({
    where: buildTextbookScopeWhere({
      subjectId: chapter.book.subjectId,
      boardId: chapter.book.boardId,
      classId: chapter.book.classId,
      chapterIds: [chapterId],
    }),
  });

  const startMultipleChoice = `/practice?chapter=${encodeURIComponent(chapterId)}&subject=${encodeURIComponent(chapter.book.subjectId)}&board=${encodeURIComponent(chapter.book.boardId)}&class=${encodeURIComponent(chapter.book.classId)}&count=10`;

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">
          {chapter.number ? `${chapter.number}. ` : ""}
          {chapter.title}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {chapter.book.subject.name} · {chapter.book.class.name} · {chapter.book.board.name} ·{" "}
          {questionCount} MCQs
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {chapter.topics.length === 0 ? (
          <p className="text-sm text-slate-500">No topics yet.</p>
        ) : (
          chapter.topics.map((topic) => (
            <Card key={topic.id}>
              <h2 className="font-semibold text-slate-900">
                {topic.number ? `${topic.number}. ` : ""}
                {topic.title}
              </h2>
              {topic.content ? (
                <div className="prose-sm mt-2 whitespace-pre-line text-sm leading-6 text-slate-700">
                  {topic.content}
                </div>
              ) : (
                <p className="mt-2 text-sm text-slate-400">
                  Structured content coming soon (Phase 3 ingestion).
                </p>
              )}
            </Card>
          ))
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={startMultipleChoice}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Practice this chapter ({questionCount} MCQs)
        </Link>
      </div>
    </div>
  );
}