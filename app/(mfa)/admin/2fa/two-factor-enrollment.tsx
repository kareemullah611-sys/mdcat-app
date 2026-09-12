"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";
import { authClient } from "@/lib/auth-client";
import { Button, Field, Input } from "@/components/ui";

type Setup = { uri: string; qr: string; backupCodes: string[] };

export default function TwoFactorEnrollment({ enabled }: { enabled: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [setup, setSetup] = useState<Setup | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function begin(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const result = await authClient.twoFactor.enable({ password, method: "totp", issuer: "MDCAT Pakistan" });
    if (result.error || !result.data || !("totpURI" in result.data)) {
      setLoading(false);
      setError(result.error?.message ?? "Could not start two-factor setup.");
      return;
    }
    const uri = result.data.totpURI;
    const qr = await QRCode.toDataURL(uri, { width: 240, margin: 1, errorCorrectionLevel: "M" });
    setSetup({ uri, qr, backupCodes: result.data.backupCodes });
    setPassword("");
    setLoading(false);
  }

  async function finish(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const result = await authClient.twoFactor.verifyTotp({ code: code.replace(/\s/g, ""), trustDevice: false });
    setLoading(false);
    if (result.error) {
      setError(result.error.message ?? "The verification code is invalid.");
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  if (enabled) {
    return (
      <main className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-2xl font-bold">Admin account security</h1>
        <p className="mt-4 rounded-lg bg-emerald-50 p-4 text-emerald-800">Two-factor authentication is enabled.</p>
        <p className="mt-4 text-sm text-slate-600">Keep your recovery codes offline. Disabling or resetting MFA requires a controlled administrator recovery procedure.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-2xl font-bold">Secure your admin account</h1>
      <p className="mt-2 text-sm text-slate-600">Admin access requires an authenticator app. Your password confirms this enrollment.</p>
      {!setup ? (
        <form onSubmit={begin} className="mt-6 space-y-4">
          <Field label="Current password">
            <Input type="password" required autoComplete="current-password" maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} />
          </Field>
          {error ? <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <Button type="submit" disabled={loading}>{loading ? "Preparing…" : "Set up authenticator"}</Button>
        </form>
      ) : (
        <div className="mt-6 space-y-6">
          {/* The data URL is generated locally; the TOTP secret never leaves the browser. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={setup.qr} width={240} height={240} alt="Authenticator enrollment QR code" className="rounded-lg border bg-white p-2" />
          <details className="text-sm"><summary className="cursor-pointer font-medium">Cannot scan the code?</summary><code className="mt-2 block break-all rounded bg-slate-100 p-3">{setup.uri}</code></details>
          <div>
            <h2 className="font-semibold">Save these one-time recovery codes now</h2>
            <p className="mt-1 text-sm text-slate-600">They will not be shown again. Store them offline, not in a screenshot or chat.</p>
            <div className="mt-3 grid grid-cols-2 gap-2 rounded-lg border bg-white p-4 font-mono text-sm">
              {setup.backupCodes.map((backupCode) => <span key={backupCode}>{backupCode}</span>)}
            </div>
          </div>
          <form onSubmit={finish} className="space-y-4">
            <Field label="6-digit authentication code">
              <Input required inputMode="numeric" autoComplete="one-time-code" maxLength={8} value={code} onChange={(event) => setCode(event.target.value)} />
            </Field>
            {error ? <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
            <Button type="submit" disabled={loading}>{loading ? "Verifying…" : "Enable two-factor authentication"}</Button>
          </form>
        </div>
      )}
    </main>
  );
}
