import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { createQuestionSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { guardMutation } from "@/lib/request-guard";
import { securityLogAdminMutation } from "@/lib/security-log";

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
  const parsed = createQuestionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const { options, chapterId, topicId, ...rest } = parsed.data;

  const question = await prisma.question.create({
    data: {
      ...rest,
      chapterId: chapterId || null,
      topicId: topicId || null,
      status: "PUBLISHED",
      createdById: admin.userId,
      options: { create: options.map((o, i) => ({ text: o.text, isCorrect: o.isCorrect, order: i })) },
    },
  });
  securityLogAdminMutation({ action: "create", actorId: admin.userId, resourceType: "question", resourceId: question.id });

  return NextResponse.json({ id: question.id }, { status: 201 });
}
