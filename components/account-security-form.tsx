"use client";

import { useState } from "react";
import { Button, Card, Field, Input } from "@/components/ui";

async function post(url: string, body: unknown): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await response.json().catch(() => null);
    return response.ok ? { ok: true } : { ok: false, error: data?.error ?? "Request failed." };
  } catch {
    return { ok: false, error: "The connection was interrupted. Please try again." };
  }
}

export function AccountSecurityForm({ currentEmail }: { currentEmail: string }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState<"password" | "email" | null>(null);

  async function changePassword(event: React.FormEvent) {
    event.preventDefault();
    if (newPassword !== confirmPassword) return setPasswordStatus("Passwords do not match.");
    setBusy("password");
    const result = await post("/api/account/password", { currentPassword, newPassword });
    setBusy(null);
    setPasswordStatus(result.ok ? "Password changed. Other devices have been signed out." : result.error ?? "Request failed.");
    if (result.ok) { setCurrentPassword(""); setNewPassword(""); setConfirmPassword(""); }
  }

  async function changeEmail(event: React.FormEvent) {
    event.preventDefault();
    setBusy("email");
    const result = await post("/api/account/email", { currentPassword: emailPassword, newEmail });
    setBusy(null);
    setEmailStatus(result.ok ? "Check your current email to approve the change. You will then verify the new address." : result.error ?? "Request failed.");
    if (result.ok) { setNewEmail(""); setEmailPassword(""); }
  }

  return (
    <div className="grid max-w-3xl gap-6 md:grid-cols-2">
      <Card>
        <h2 className="text-lg font-semibold">Change password</h2>
        <p className="mt-1 text-sm text-slate-500">Other signed-in devices will be logged out.</p>
        <form onSubmit={changePassword} className="mt-5 space-y-4">
          <Field label="Current password"><Input type="password" required maxLength={128} autoComplete="current-password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} /></Field>
          <Field label="New password" hint="At least 10 characters."><Input type="password" required minLength={10} maxLength={128} autoComplete="new-password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} /></Field>
          <Field label="Confirm new password"><Input type="password" required minLength={10} maxLength={128} autoComplete="new-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} /></Field>
          {passwordStatus ? <p role="status" className="text-sm text-slate-700">{passwordStatus}</p> : null}
          <Button type="submit" disabled={busy !== null}>{busy === "password" ? "Changing…" : "Change password"}</Button>
        </form>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Change email</h2>
        <p className="mt-1 text-sm text-slate-500">Current email: {currentEmail}</p>
        <form onSubmit={changeEmail} className="mt-5 space-y-4">
          <Field label="New email"><Input type="email" required maxLength={254} autoComplete="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} /></Field>
          <Field label="Current password"><Input type="password" required maxLength={128} autoComplete="current-password" value={emailPassword} onChange={(event) => setEmailPassword(event.target.value)} /></Field>
          {emailStatus ? <p role="status" className="text-sm text-slate-700">{emailStatus}</p> : null}
          <Button type="submit" disabled={busy !== null}>{busy === "email" ? "Sending…" : "Request email change"}</Button>
        </form>
      </Card>
    </div>
  );
}
