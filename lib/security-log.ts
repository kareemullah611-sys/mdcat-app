const SENSITIVE_KEY = /(secret|token|password|authorization|cookie|backupCode|totp|key|database|dns|sql)/i;

const SAFE_ERROR_CODES = ["VALIDATION_ERROR", "AUTH_FAILURE", "RATE_LIMIT_EXCEEDED", "ORIGIN_MISMATCH", "CSV_IMPORT_ERROR", "TEXTBOOK_ERROR", "UNKNOWN_ERROR"] as const;

type SafeErrorCode = typeof SAFE_ERROR_CODES[number];

function safeErrorCode(message: string): SafeErrorCode {
  const lower = message.toLowerCase();
  if (lower.includes("validation")) return SAFE_ERROR_CODES[0];
  if (lower.includes("auth") || lower.includes("unauthorized")) return SAFE_ERROR_CODES[1];
  if (lower.includes("rate")) return SAFE_ERROR_CODES[2];
  if (lower.includes("origin")) return SAFE_ERROR_CODES[3];
  if (lower.includes("csv")) return SAFE_ERROR_CODES[4];
  if (lower.includes("textbook")) return SAFE_ERROR_CODES[5];
  return SAFE_ERROR_CODES[6];
}

function redact(value: unknown, key?: string): unknown {
  if (key && SENSITIVE_KEY.test(key)) return "[REDACTED]";
  if (value && typeof value === "object") {
    if (value instanceof Error) {
      return { code: safeErrorCode(value.message), message: "[REDACTED]" };
    }
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = redact(v, k);
    }
    return out;
  }
  return value;
}

type Level = "info" | "warn" | "error";

function redactMeta(meta?: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(meta ?? {})) {
    out[k] = redact(v, k);
  }
  return out;
}

export function securityLog(event: string, meta?: Record<string, unknown>, level: Level = "warn"): void {
  const entry = {
    ts: new Date().toISOString(),
    event,
    level,
    ...redactMeta(meta),
  };
  const line = JSON.stringify(entry);
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export function securityLogError(event: string, meta?: Record<string, unknown>): void {
  securityLog(event, meta, "error");
}

/** Authorization denial — always "auth.failure" with reason context. */
export function securityLogAuthFailure(reason: "missing_session" | "user_not_found" | "role_denied"): void {
  securityLog("auth.failure", { reason }, "warn");
}

/** Origin mismatches (CSRF defense). */
export function securityLogOriginMismatch(origin: string, scope?: string): void {
  securityLog("security.origin_mismatch", { origin, scope }, "warn");
}

/** Rate limit exceeded. */
export function securityLogRateLimited(scope: string, subjectType: "user" | "ip"): void {
  securityLog("security.rate_limited", { scope, subjectType }, "warn");
}

/** Admin mutations (create/update/delete). */
export function securityLogAdminMutation(meta: { action: string; actorId: string; resourceType: string; resourceId: string }): void {
  securityLog("admin.mutation_succeeded", meta, "info");
}

/** CSV import events. */
export function securityLogCsvImport(meta: { actorId: string; rowsProcessed: number; rowsImported: number; rowsFailed: number }): void {
  securityLog("admin.csv_import_completed", meta, "info");
}

export function securityLogCsvImportRejected(actorId: string, reason: "payload_too_large" | "row_limit_exceeded"): void {
  securityLog("admin.csv_import_rejected", { actorId, reason }, "warn");
}

/** Suspicious textbook requests (path traversal attempts, etc.). */
export function securityLogTextbookSuspicious(reason: "invalid_page" | "invalid_file_key" | "invalid_range", bookId: string): void {
  securityLog("textbook.suspicious_request", { reason, bookId }, "warn");
}

/** Test/profile mutations. */
export function securityLogTestMutation(action: string, actorId: string, resourceId: string): void {
  securityLog("test.mutation_succeeded", { action, actorId, resourceId }, "info");
}

export function securityLogProfileMutation(action: string, actorId: string, resourceId: string): void {
  securityLog("profile.mutation_succeeded", { action, actorId, resourceId }, "info");
}
