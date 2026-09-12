import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { createChapterSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { guardMutation } from "@/lib/request-guard";
import { securityLogAdminMutation } from "@/lib/security-log";

export async function GET(request: Request) {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get("bookId");
  const subjectId = searchParams.get("subjectId");

  const where = bookId
    ? { bookId }
    : subjectId
      ? { book: { subjectId } }
      : undefined;

  const chapters = await prisma.chapter.findMany({
    where,
    include: {
      book: { include: { subject: true } },
      _count: { select: { questions: { where: { status: "PUBLISHED" } } } },
    },
    orderBy: [{ bookId: "asc" }, { number: "asc" }],
  });

  return NextResponse.json({ chapters });
}

export async function POST(request: Request) {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const guarded = guardMutation(request, "ADMIN", admin.userId);
  if (!guarded.ok) {
    return NextResponse.json(
      { error: guarded.status === 403 ? "Forbidden" : "Too many requests" },
      { status: guarded.status, headers: { "Retry-After": String(guarded.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = createChapterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const chapter = await prisma.chapter.create({ data: parsed.data });
  securityLogAdminMutation({ action: "create", actorId: admin.userId, resourceType: "chapter", resourceId: chapter.id });
  return NextResponse.json({ id: chapter.id }, { status: 201 });
}
