import { describe, expect, it } from "vitest";
import { isPakistanMobile, normalizePakistanMobile } from "@/lib/pakistan-phone";

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
