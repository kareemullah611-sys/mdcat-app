import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { createTopicSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { guardMutation } from "@/lib/request-guard";
import { securityLogAdminMutation } from "@/lib/security-log";

export async function GET(request: Request) {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const chapterId = searchParams.get("chapterId");
  if (!chapterId) return NextResponse.json({ topics: [] });

  const topics = await prisma.topic.findMany({
    where: { chapterId },
    include: { _count: { select: { questions: { where: { status: "PUBLISHED" } } } } },
    orderBy: [{ number: "asc" }, { order: "asc" }],
  });
  return NextResponse.json({ topics });
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
  const parsed = createTopicSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const topic = await prisma.topic.create({ data: parsed.data });
  securityLogAdminMutation({ action: "create", actorId: admin.userId, resourceType: "topic", resourceId: topic.id });
  return NextResponse.json({ id: topic.id }, { status: 201 });
}
