import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { guardMutation } from "@/lib/request-guard";
import { authEmailConfigured } from "@/lib/auth-email";
import { securityLogCredentialEvent } from "@/lib/security-log";
import { INPUT_LIMITS } from "@/lib/input-limits";

const schema = z.object({
  currentPassword: z.string().min(1).max(128),
  newEmail: z.email().max(INPUT_LIMITS.email),
}).strict();

export async function POST(request: Request) {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({ headers: requestHeaders });
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const guarded = guardMutation(request, "ACCOUNT", session.user.id);
  if (!guarded.ok) return NextResponse.json({ error: "Request rejected" }, { status: guarded.status });
  if (!authEmailConfigured()) return NextResponse.json({ error: "Account email delivery is not configured yet." }, { status: 503 });
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success || parsed.data.newEmail.toLowerCase() === session.user.email.toLowerCase()) {
    return NextResponse.json({ error: "Enter a different valid email address." }, { status: 400 });
  }
  try {
    await auth.api.verifyPassword({ headers: requestHeaders, body: { password: parsed.data.currentPassword } });
    await auth.api.changeEmail({
      headers: requestHeaders,
      body: { newEmail: parsed.data.newEmail, callbackURL: "/profile/security?email=verification-sent" },
    });
    securityLogCredentialEvent("email_change_requested", session.user.id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "The current password is incorrect or the request expired." }, { status: 400 });
  }
}
