import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireProfile } from "@/lib/session";
import { Card, PageHeader, Badge } from "@/components/ui";

export default async function StudyPage() {
  await requireProfile();
  const boards = await prisma.board.findMany({
    orderBy: { name: "asc" },
    include: {
      books: {
        where: { status: "PUBLISHED" },
        include: { subject: true, class: true },
        orderBy: [{ subject: { name: "asc" } }, { class: { grade: "asc" } }],
      },
    },
  });

  return (
    <div>
      <PageHeader
        title="Study"
        subtitle="Browse board textbooks by chapter and read structured content."
      />

      <div className="space-y-8">
        {boards.map((board) => {
          if (board.books.length === 0) return null;
          return (
            <section key={board.id}>
              <h2 className="mb-3 text-lg font-semibold text-slate-900">{board.name}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {board.books.map((book) => (
                  <Link key={book.id} href={`/study/book/${book.id}`}>
                    <Card className="h-full transition-shadow hover:shadow-md">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-slate-900">{book.title}</h3>
                        <Badge>{book.subject.name}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {book.class.name} · {book.edition ?? book.publisher ?? "Board textbook"}
                      </p>
                      <p className="mt-3 text-sm font-medium text-slate-700">Open chapters →</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}