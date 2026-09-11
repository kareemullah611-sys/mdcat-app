import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { createBookSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { guardMutation } from "@/lib/request-guard";

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
  const parsed = createBookSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const { sourceUrl, ...rest } = parsed.data;
  const book = await prisma.book.create({
    data: { ...rest, sourceUrl: sourceUrl || null },
  });
  return NextResponse.json({ id: book.id }, { status: 201 });
}