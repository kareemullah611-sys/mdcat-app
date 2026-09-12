import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { authEmailConfigured } from "@/lib/auth-email";
import { guardMutation, rateLimitHeaders } from "@/lib/request-guard";
import { INPUT_LIMITS } from "@/lib/input-limits";

const schema = z.object({ email: z.email().max(INPUT_LIMITS.email) }).strict();
const GENERIC_MESSAGE = "If an account exists for that address, a reset email has been sent.";

export async function POST(request: Request) {
  const guarded = guardMutation(request, "AUTH");
  if (!guarded.ok) return NextResponse.json({ error: "Request rejected" }, { status: guarded.status, headers: rateLimitHeaders(guarded.retryAfterSeconds) });
  if (!authEmailConfigured()) return NextResponse.json({ error: "Email recovery is being configured. Please try again later." }, { status: 503 });
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ message: GENERIC_MESSAGE });
  try {
    await auth.api.requestPasswordReset({
      headers: await headers(),
      body: { email: parsed.data.email, redirectTo: "/reset-password" },
    });
  } catch {
    // Do not reveal account existence or provider details.
  }
  return NextResponse.json({ message: GENERIC_MESSAGE });
}
