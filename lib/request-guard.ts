import { isAllowedOrigin } from "@/lib/origin";
import { clientIp, rateLimit, RATE_LIMITS, type RateLimitKey } from "@/lib/rate-limit";
import { securityLogOriginMismatch, securityLogRateLimited } from "@/lib/security-log";

export type GuardResult =
  | { ok: true }
  | { ok: false; status: number; retryAfterSeconds: number };

/**
 * Defense-in-depth guard for mutating routes: validates the Origin header
 * (when present) against the exact configured origins and applies a
 * per-scope sliding-window rate limit keyed by authenticated subject or IP.
 */
export function guardMutation(
  request: Request,
  scope: RateLimitKey,
  subjectKey?: string,
): GuardResult {
  const origin = request.headers.get("origin");
  if (origin !== null && !isAllowedOrigin(origin)) {
    securityLogOriginMismatch(origin, scope);
    return { ok: false, status: 403, retryAfterSeconds: 0 };
  }
  const key = subjectKey ?? `ip:${clientIp(request)}`;
  const result = rateLimit(`mutation:${scope}:${key}`, RATE_LIMITS[scope]);
  if (!result.ok) {
    securityLogRateLimited(scope, subjectKey ? "user" : "ip");
    return { ok: false, status: 429, retryAfterSeconds: result.retryAfterSeconds };
  }
  return { ok: true };
}

export function guardRead(request: Request, scope: RateLimitKey, subjectKey?: string): GuardResult {
  const key = subjectKey ?? `ip:${clientIp(request)}`;
  const result = rateLimit(`read:${scope}:${key}`, RATE_LIMITS[scope]);
  if (!result.ok) {
    securityLogRateLimited(scope, subjectKey ? "user" : "ip");
    return { ok: false, status: 429, retryAfterSeconds: result.retryAfterSeconds };
  }
  return { ok: true };
}

export function rateLimitHeaders(retryAfterSeconds: number): HeadersInit {
  return { "Retry-After": String(retryAfterSeconds) };
}
