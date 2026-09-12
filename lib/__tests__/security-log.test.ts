import { afterEach, describe, expect, it, vi } from "vitest";
import {
  securityLog, securityLogAdminMutation, securityLogAuthFailure,
  securityLogCsvImport, securityLogCsvImportRejected, securityLogError, securityLogOriginMismatch,
  securityLogProfileMutation, securityLogRateLimited, securityLogTestMutation,
  securityLogCredentialEvent,
  securityLogTextbookSuspicious,
} from "@/lib/security-log";

afterEach(() => vi.restoreAllMocks());

function capture(method: "log" | "warn" | "error", run: () => void) {
  const spy = vi.spyOn(console, method).mockImplementation(() => undefined);
  run();
  expect(spy).toHaveBeenCalledTimes(1);
  const line = spy.mock.calls[0]?.[0];
  expect(typeof line).toBe("string");
  return { line: line as string, entry: JSON.parse(line as string) as Record<string, unknown> };
}

describe("securityLog", () => {
  it("emits parseable structured output at the requested level", () => {
    const { entry } = capture("log", () => securityLog("test.event", { result: "ok" }, "info"));
    expect(entry).toMatchObject({ event: "test.event", level: "info", result: "ok" });
    expect(new Date(entry.ts as string).toString()).not.toBe("Invalid Date");
  });

  it("redacts sensitive fields recursively", () => {
    const { line, entry } = capture("warn", () => securityLog("test.redaction", {
      password: "password-value",
      nested: { authorization: "Bearer token-value", harmless: "visible" },
      databaseUrl: "postgres://secret-value",
    }));
    expect(line).not.toContain("password-value");
    expect(line).not.toContain("token-value");
    expect(line).not.toContain("secret-value");
    expect(entry).toMatchObject({
      password: "[REDACTED]",
      nested: { authorization: "[REDACTED]", harmless: "visible" },
      databaseUrl: "[REDACTED]",
    });
  });

  it("never emits an Error message or stack", () => {
    const error = new Error("database connection contained a credential");
    const { line, entry } = capture("error", () => securityLogError("test.error", { error }));
    expect(line).not.toContain(error.message);
    expect(line).not.toContain("at ");
    expect(entry.error).toEqual({ code: "UNKNOWN_ERROR", message: "[REDACTED]" });
  });

  it("keeps control characters inside one JSON log call", () => {
    const { line, entry } = capture("warn", () => securityLogOriginMismatch("https://evil.test\r\nforged", "admin"));
    expect(line.split("\n")).toHaveLength(1);
    expect(entry.event).toBe("security.origin_mismatch");
  });
});

describe("fixed security event helpers", () => {
  it("logs authorization failures without user-controlled event names", () => {
    const { entry } = capture("warn", () => securityLogAuthFailure("role_denied"));
    expect(entry).toMatchObject({ event: "auth.failure", reason: "role_denied" });
  });

  it("logs rate limiting without the raw IP or user key", () => {
    const { entry } = capture("warn", () => securityLogRateLimited("admin.import", "ip"));
    expect(entry).toMatchObject({ event: "security.rate_limited", scope: "admin.import", subjectType: "ip" });
  });

  it("logs successful admin mutations with safe identifiers", () => {
    const { entry } = capture("log", () => securityLogAdminMutation({
      action: "book.create", actorId: "actor-1", resourceType: "book", resourceId: "book-1",
    }));
    expect(entry).toMatchObject({ event: "admin.mutation_succeeded", actorId: "actor-1", resourceId: "book-1" });
  });

  it("logs aggregate CSV outcomes", () => {
    const { entry } = capture("log", () => securityLogCsvImport({
      actorId: "actor-1", rowsProcessed: 10, rowsImported: 8, rowsFailed: 2,
    }));
    expect(entry).toMatchObject({ event: "admin.csv_import_completed", rowsProcessed: 10, rowsImported: 8, rowsFailed: 2 });
  });

  it("logs rejected CSV imports separately from completed imports", () => {
    const { entry } = capture("warn", () => securityLogCsvImportRejected("actor-1", "payload_too_large"));
    expect(entry).toMatchObject({ event: "admin.csv_import_rejected", reason: "payload_too_large" });
  });

  it("logs suspicious textbook requests without paths", () => {
    const { entry } = capture("warn", () => securityLogTextbookSuspicious("invalid_file_key", "book-1"));
    expect(entry).toMatchObject({ event: "textbook.suspicious_request", reason: "invalid_file_key", bookId: "book-1" });
  });

  it("logs test and profile mutation success", () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => undefined);
    securityLogTestMutation("answer.save", "actor-1", "test-1");
    securityLogProfileMutation("onboarding.complete", "actor-1", "profile-1");
    expect(log).toHaveBeenCalledTimes(2);
    expect(JSON.parse(log.mock.calls[0]?.[0] as string).event).toBe("test.mutation_succeeded");
    expect(JSON.parse(log.mock.calls[1]?.[0] as string).event).toBe("profile.mutation_succeeded");
  });

  it("logs credential events without an email or password", () => {
    const { entry } = capture("log", () => securityLogCredentialEvent("password_change", "actor-1"));
    expect(entry).toMatchObject({ event: "account.credential_event", action: "password_change", actorId: "actor-1" });
  });
});
