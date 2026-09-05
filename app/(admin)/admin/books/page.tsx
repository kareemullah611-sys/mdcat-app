import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { Card, PageHeader, Badge } from "@/components/ui";
import { BookCreateForm } from "@/components/admin/book-create-form";

export default async function AdminBooksPage() {
  await requireAdmin();
  const [books, boards, classes, subjects, chapterCount] = await Promise.all([
    prisma.book.findMany({
      orderBy: { createdAt: "desc" },
      include: { board: true, class: true, subject: true, _count: { select: { chapters: true } } },
    }),
    prisma.board.findMany({ orderBy: { name: "asc" } }),
    prisma.schoolClass.findMany({ orderBy: { grade: "asc" } }),
    prisma.subject.findMany({ orderBy: { name: "asc" } }),
    prisma.chapter.count(),
  ]);

  return (
    <div>
      <PageHeader title="Books" subtitle={`${books.length} books · ${chapterCount} chapters. PDF ingestion arrives in Phase 3.`} />

      <Card>
        <h2 className="mb-4 font-semibold">Add book</h2>
        <BookCreateForm boards={boards} classes={classes} subjects={subjects} />
      </Card>

      <div className="mt-6">
        {books.length === 0 ? (
          <p className="text-sm text-slate-500">No books yet.</p>
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {books.map((book) => (
              <li key={book.id}>
                <Link href={`/admin/books/${book.id}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-slate-50">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-800">{book.title}</p>
                    <p className="text-xs text-slate-500">
                      {book.board.name} · {book.class.name} · {book.edition ?? ""}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Badge>{book.subject.name}</Badge>
                    <Badge tone={book.status === "PUBLISHED" ? "green" : "amber"}>{book.status}</Badge>
                    <span className="text-xs text-slate-400">{book._count.chapters} ch</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}