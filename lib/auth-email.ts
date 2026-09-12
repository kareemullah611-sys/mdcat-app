import { securityLogError } from "@/lib/security-log";

type AuthEmail = {
  to: string;
  subject: string;
  heading: string;
  message: string;
  actionLabel?: string;
  actionUrl?: string;
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character]!);
}

export function authEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.AUTH_EMAIL_FROM);
}

export async function sendAuthEmail(email: AuthEmail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.AUTH_EMAIL_FROM;
  if (!apiKey || !from) throw new Error("Authentication email is not configured");

  const action = email.actionUrl && email.actionLabel
    ? `<p style="margin:28px 0"><a href="${escapeHtml(email.actionUrl)}" style="background:#0f172a;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:600">${escapeHtml(email.actionLabel)}</a></p><p style="font-size:12px;color:#64748b;overflow-wrap:anywhere">${escapeHtml(email.actionUrl)}</p>`
    : "";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [email.to],
      subject: email.subject,
      text: `${email.heading}\n\n${email.message}${email.actionUrl ? `\n\n${email.actionUrl}` : ""}\n\nIf you did not request this, you can ignore this email.`,
      html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#0f172a"><h1 style="font-size:22px">${escapeHtml(email.heading)}</h1><p style="line-height:1.6">${escapeHtml(email.message)}</p>${action}<p style="margin-top:32px;font-size:12px;color:#64748b">If you did not request this, you can ignore this email.</p></div>`,
    }),
  });
  if (!response.ok) throw new Error("Authentication email delivery failed");
}

export function queueAuthEmail(email: AuthEmail, event: string): void {
  void sendAuthEmail(email).catch((error) => securityLogError(event, { error }));
}
