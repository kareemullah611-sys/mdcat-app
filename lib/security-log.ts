const SENSITIVE_KEY = /(secret|token|password|authorization|cookie|backupCode|totp|key)/i;

function redact(value: unknown, key?: string): unknown {
  if (key && SENSITIVE_KEY.test(key)) return "[REDACTED]";
  if (value && typeof value === "object") {
    if (value instanceof Error) {
      return { name: value.name, message: value.message };
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