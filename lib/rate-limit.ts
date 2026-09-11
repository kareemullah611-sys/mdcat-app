export const RATE_LIMITS = {
  AUTH: { windowMs: 60_000, max: 20 },
  ONBOARDING: { windowMs: 60_000, max: 10 },
  TEST_CREATE: { windowMs: 60_000, max: 10 },
  ANSWER: { windowMs: 60_000, max: 120 },
  SUBMIT: { windowMs: 60_000, max: 20 },
  PDF_PAGE: { windowMs: 60_000, max: 30 },
  PDF_FILE: { windowMs: 60_000, max: 6 },
  ADMIN: { windowMs: 60_000, max: 40 },
} as const;

export type RateLimitKey = keyof typeof RATE_LIMITS;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function __resetRateLimiterForTests(): void {
  buckets.clear();
}

export function clientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function rateLimit(
  key: string,
  limit: { windowMs: number; max: number },
): { ok: boolean; retryAfterSeconds: number } {
  const nowMs = Date.now();
  if (buckets.size % 1000 === 0 && buckets.size > 0) {
    for (const [k, b] of buckets) {
      if (b.resetAt <= nowMs) buckets.delete(k);
    }
  }
  let bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= nowMs) {
    bucket = { count: 0, resetAt: nowMs + limit.windowMs };
    buckets.set(key, bucket);
  }
  bucket.count += 1;
  if (bucket.count > limit.max) {
    return {
      ok: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - nowMs) / 1000)),
    };
  }
  return { ok: true, retryAfterSeconds: 0 };
}