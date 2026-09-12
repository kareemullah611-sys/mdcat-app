import { afterEach, describe, expect, it, vi } from "vitest";
import { adminMfaRequired } from "@/lib/mfa";

afterEach(() => vi.unstubAllEnvs());

describe("adminMfaRequired", () => {
  it("is fail-closed in production by default", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("ADMIN_MFA_REQUIRED", undefined);
    expect(adminMfaRequired()).toBe(true);
  });

  it("supports a deliberate production migration window", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("ADMIN_MFA_REQUIRED", "false");
    expect(adminMfaRequired()).toBe(false);
  });

  it("can be explicitly exercised outside production", () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("ADMIN_MFA_REQUIRED", "true");
    expect(adminMfaRequired()).toBe(true);
  });
});
