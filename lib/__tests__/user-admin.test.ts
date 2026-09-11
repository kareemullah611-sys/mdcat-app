import { describe, it, expect } from "vitest";
import { buildUsersWhere, latestActivity, maxOf, formatRelative } from "@/lib/user-admin";

describe("buildUsersWhere", () => {
  it("returns an empty filter when nothing is given", () => {
    expect(buildUsersWhere({})).toEqual({});
  });

  it("matches name or email case-insensitively for a trimmed query", () => {
    const where = buildUsersWhere({ q: "  Ali  " });
    expect(Array.isArray(where.OR)).toBe(true);
    expect(where.OR).toHaveLength(2);
    expect(where.OR?.[0]).toEqual({ name: { contains: "Ali", mode: "insensitive" } });
    expect(where.OR?.[1]).toEqual({ email: { contains: "Ali", mode: "insensitive" } });
  });

  it("ignores blank queries", () => {
    expect(buildUsersWhere({ q: "   " })).toEqual({});
  });

  it("filters by role code", () => {
    expect(buildUsersWhere({ role: "SUPER_ADMIN" })).toEqual({ role: { code: "SUPER_ADMIN" } });
  });

  it("maps profile status to relation presence filters", () => {
    expect(buildUsersWhere({ profile: "COMPLETED" })).toEqual({ profile: { isNot: null } });
    expect(buildUsersWhere({ profile: "PENDING" })).toEqual({ profile: { is: null } });
  });
});

describe("latestActivity", () => {
  it("keeps the latest timestamp per user and drops null rows", () => {
    const map = latestActivity([
      { userId: "a", at: new Date("2026-01-01T00:00:00Z") },
      { userId: "b", at: null },
      { userId: "a", at: new Date("2026-02-01T00:00:00Z") },
    ]);
    expect(map.get("a")?.toISOString()).toBe("2026-02-01T00:00:00.000Z");
    expect(map.has("b")).toBe(false);
  });

  it("returns an empty map for no records", () => {
    expect(latestActivity([]).size).toBe(0);
  });
});

describe("maxOf", () => {
  it("picks the latest non-null date", () => {
    expect(maxOf(new Date("2026-05-01"), null, new Date("2026-06-01"))?.toISOString()).toBe("2026-06-01T00:00:00.000Z");
  });

  it("returns null when nothing is present", () => {
    expect(maxOf(null, undefined)).toBeNull();
  });
});

describe("formatRelative", () => {
  const now = new Date("2026-09-08T10:00:00Z");

  it("formats recent activity", () => {
    expect(formatRelative(new Date("2026-09-08T09:59:30Z"), now)).toBe("just now");
    expect(formatRelative(new Date("2026-09-08T09:58:30Z"), now)).toBe("1m ago");
    expect(formatRelative(new Date("2026-09-08T08:58:30Z"), now)).toBe("1h ago");
    expect(formatRelative(new Date("2026-09-07T10:00:00Z"), now)).toBe("1d ago");
    expect(formatRelative(new Date("2026-08-30T10:00:00Z"), now)).toBe("9d ago");
  });

  it("falls back to a calendar date for activity older than 30 days", () => {
    const out = formatRelative(new Date("2026-06-01T10:00:00Z"), now);
    expect(out).not.toMatch(/ago$/);
  });
});