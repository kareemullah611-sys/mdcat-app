"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Field, Input } from "@/components/ui";

export default function TwoFactorPage() {
  const [code, setCode] = useState("");
  const [backupMode, setBackupMode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function verify(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const result = backupMode
      ? await authClient.twoFactor.verifyBackupCode({ code: code.trim(), trustDevice: false })
      : await authClient.twoFactor.verifyTotp({ code: code.replace(/\s/g, ""), trustDevice: false });
    setLoading(false);
    if (result.error) {
      setError(result.error.message ?? "The verification code is invalid or expired.");
      return;
    }
    // Verification changes the authenticated session. Reload the document so
    // the server receives the final session instead of reusing the pre-2FA tree.
    window.location.replace(new URL("/dashboard", window.location.origin));
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <h1 className="text-2xl font-bold">Two-factor verification</h1>
      <p className="mt-1 text-sm text-slate-500">
        {backupMode ? "Enter one unused recovery code." : "Enter the 6-digit code from your authenticator app."}
      </p>
      <form onSubmit={verify} className="mt-6 space-y-4">
        <Field label={backupMode ? "Recovery code" : "Authentication code"}>
          <Input
            required
            autoComplete="one-time-code"
            inputMode={backupMode ? "text" : "numeric"}
            maxLength={backupMode ? 64 : 8}
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </Field>
        {error ? <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Verifying…" : "Verify"}
        </Button>
      </form>
      <button
        type="button"
        className="mt-5 w-full text-sm font-medium text-slate-700 underline"
        onClick={() => { setBackupMode((value) => !value); setCode(""); setError(null); }}
      >
        {backupMode ? "Use authenticator code" : "Use a recovery code"}
      </button>
    </div>
  );
}
