import { describe, expect, it } from "vitest";
import { isValidUsername, normalizeUsername, usernameValidationError } from "@/lib/username";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("username validation", () => {
  it.each(["user", "student_01", "kareem.ullah", "A123", "a".repeat(20)])("accepts %s", (value) => {
    expect(isValidUsername(value)).toBe(true);
    expect(usernameValidationError(value)).toBeNull();
  });

  it.each([
    [undefined, "required"],
    ["abc", "at least 4"],
    ["a".repeat(21), "no more than 20"],
    ["_kareem", "start"],
    [".kareem", "start"],
    ["kareem_", "end"],
    ["kareem.", "end"],
    ["kareem..ullah", "consecutive"],
    ["kareem ullah", "only English"],
    ["kareem-ullah", "only English"],
    ["کر یم", "only English"],
    ["ADMIN", "reserved"],
    ["support", "reserved"],
  ])("rejects %s", (value, message) => {
    expect(usernameValidationError(value)).toContain(message);
    expect(isValidUsername(String(value))).toBe(false);
  });

  it("normalizes case for storage and comparison", () => {
    expect(normalizeUsername("Kareem.Ullah")).toBe("kareem.ullah");
    expect(normalizeUsername("KAREEM")).toBe(normalizeUsername("kareem"));
  });

  it("has a nullable, database-enforced case-insensitive unique migration", () => {
    const migration = readFileSync(resolve("prisma/migrations/20260913124000_add_username/migration.sql"), "utf8");
    expect(migration).toContain('ADD COLUMN "username" TEXT');
    expect(migration).toContain('UNIQUE INDEX "User_username_ci_key"');
    expect(migration).toContain('LOWER("username")');
    expect(migration).toContain('INDEX "User_username_lookup_idx"');
    expect(migration).not.toContain('"username" TEXT NOT NULL');
  });
});
