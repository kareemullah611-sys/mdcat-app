import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { testFilterSchema } from "@/lib/schemas";
import { buildTest } from "@/lib/test-service";
import { guardMutation } from "@/lib/request-guard";
import { securityLogTestMutation } from "@/lib/security-log";

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const guarded = guardMutation(request, "TEST_CREATE", session.user.id);
  if (!guarded.ok) {
    return NextResponse.json(
      { error: guarded.status === 403 ? "Forbidden" : "Too many requests" },
      { status: guarded.status, headers: { "Retry-After": String(guarded.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = testFilterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid filters", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const test = await buildTest(session.user.id, parsed.data);
    securityLogTestMutation("create", session.user.id, test.id);
    return NextResponse.json({ testId: test.id }, { status: 201 });
  } catch (err) {
    if (err instanceof Error && err.name === "EmptyPoolError") {
      return NextResponse.json(
        { error: err.message },
        { status: 422 },
      );
    }
    console.error("buildTest failed", err);
    return NextResponse.json({ error: "Could not create test" }, { status: 500 });
  }
}
