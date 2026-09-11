/** Exact-origin allowlist (§security: CSRF).
 *
 * Origins are derived exclusively from environment configuration so that
 * production never trusts debugging/localhost hosts or expired Railway
 * domains. There is deliberately no wildcard entry: a wildcard like
 * `https://*.up.railway.app` would accept any tenant of the platform.
 */

export function normalizeOrigin(url: string): string | null {
  try {
    const parsed = new URL(url);
    return parsed.origin;
  } catch {
    return null;
  }
}

export function baseOrigin(): string | null {
  const ok = normalizeOrigin(process.env.BETTER_AUTH_URL ?? "");
  return ok && ok.startsWith("https://") ? ok : null;
}

export function trustedOrigins(): string[] {
  const origins: string[] = [];

  const primary = baseOrigin();
  if (primary) origins.push(primary);

  // Explicit extras from env, comma-separated. Used for preview deployments.
  for (const extra of (process.env.BETTER_AUTH_TRUSTED_ORIGINS ?? "").split(",")) {
    const trimmed = normalizeOrigin(extra.trim());
    if (trimmed && trimmed.startsWith("https://")) origins.push(trimmed);
  }

  if (process.env.NODE_ENV !== "production") {
    origins.push("http://localhost:3000", "http://127.0.0.1:3000");
  }

  // Dedupe preserving order.
  return [...new Set(origins)];
}

/** True when the header `Origin` (if present) matches a trusted origin. */
export function isAllowedOrigin(origin: string | null | undefined): boolean {
  if (!origin) return true; // non-browser clients / same-site navigations
  const candidate = normalizeOrigin(origin);
  if (!candidate) return false;
  return trustedOrigins().includes(candidate);
}