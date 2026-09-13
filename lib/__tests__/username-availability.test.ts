import { beforeEach, describe, expect, it, vi } from "vitest";
import { __resetRateLimiterForTests } from "@/lib/rate-limit";

const mocks = vi.hoisted(() => ({ findFirst: vi.fn() }));
vi.mock("@/lib/prisma", () => ({ prisma: { user: { findFirst: mocks.findFirst } } }));

import { GET } from "@/app/api/auth/username-availability/route";

function request(username: string, ip = "203.0.113.10") {
  return new Request(`http://localhost/api/auth/username-availability?username=${encodeURIComponent(username)}`, {
    headers: { "x-real-ip": ip },
  });
}

beforeEach(() => {
  __resetRateLimiterForTests();
  mocks.findFirst.mockReset();
});

describe("username availability endpoint", () => {
  it("returns available using a normalized, minimal indexed lookup", async () => {
    mocks.findFirst.mockResolvedValue(null);
    const response = await GET(request("Kareem24"));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ available: true });
    expect(mocks.findFirst).toHaveBeenCalledWith({ where: { username: "kareem24" }, select: { id: true } });
  });

  it("reports a case-insensitive duplicate without exposing account data", async () => {
    mocks.findFirst.mockResolvedValue({ id: "private-id" });
    const response = await GET(request("KAREEM24"));
    expect(await response.json()).toEqual({ available: false, reason: "taken" });
    expect(await GET(request("kareem24", "203.0.113.11")).then((item) => item.json())).toEqual({ available: false, reason: "taken" });
  });

  it.each([["admin","reserved"],["abc","invalid"],["bad name","invalid"],["bad..name","invalid"]])(
    "rejects %s locally as %s without querying users",
    async (username, reason) => {
      const response = await GET(request(username));
      expect(response.status).toBe(400);
      expect(await response.json()).toEqual({ available: false, reason });
      expect(mocks.findFirst).not.toHaveBeenCalled();
    },
  );

  it("rate limits public enumeration attempts", async () => {
    mocks.findFirst.mockResolvedValue(null);
    for (let index = 0; index < 30; index += 1) expect((await GET(request(`student${index}`))).status).toBe(200);
    const response = await GET(request("student30"));
    expect(response.status).toBe(429);
    expect(await response.json()).toEqual({ available: false, reason: "rate_limited" });
    expect(response.headers.get("Retry-After")).toBeTruthy();
  });
});
