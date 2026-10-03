import { describe, expect, it } from "vitest";
import { formatPakistanMobile, isPakistanMobile, normalizePakistanMobile } from "@/lib/pakistan-phone";

describe("Pakistan mobile normalization", () => {
  it.each([
    ["03001234567", "+923001234567"],
    ["+923001234567", "+923001234567"],
    ["00923001234567", "+923001234567"],
    ["92 300 1234567", "+923001234567"],
    ["0300-1234567", "+923001234567"],
  ])("normalizes %s", (input, expected) => expect(normalizePakistanMobile(input)).toBe(expected));

  it.each(["", "3001234567", "+921234567890", "0300123456", "030012345678", "+92300abcdefg"])("rejects %s", (input) => {
    expect(normalizePakistanMobile(input)).toBeNull();
    expect(isPakistanMobile(input)).toBe(false);
  });
});

describe("formatPakistanMobile", () => {
  it.each([
    ["+923001234567", "0300 1234567"],
    ["03001234567", "0300 1234567"],
    ["0300-1234567", "0300 1234567"],
    ["00923001234567", "0300 1234567"],
  ])("formats %s as %s", (input, expected) => expect(formatPakistanMobile(input)).toBe(expected));

  it("returns null for a missing number rather than an empty string", () => {
    expect(formatPakistanMobile(null)).toBeNull();
    expect(formatPakistanMobile(undefined)).toBeNull();
    expect(formatPakistanMobile("   ")).toBeNull();
  });

  it("passes an unrecognised value through untouched instead of guessing", () => {
    expect(formatPakistanMobile("+14155552671")).toBe("+14155552671");
  });
});
