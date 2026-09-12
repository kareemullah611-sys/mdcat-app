import { afterEach, describe, expect, it, vi } from "vitest";
import { authEmailConfigured, sendAuthEmail } from "@/lib/auth-email";

const originalKey = process.env.RESEND_API_KEY;
const originalFrom = process.env.AUTH_EMAIL_FROM;

afterEach(() => {
  vi.restoreAllMocks();
  if (originalKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = originalKey;
  if (originalFrom === undefined) delete process.env.AUTH_EMAIL_FROM; else process.env.AUTH_EMAIL_FROM = originalFrom;
});

describe("authentication email", () => {
  it("fails closed when credentials are absent", async () => {
    delete process.env.RESEND_API_KEY;
    delete process.env.AUTH_EMAIL_FROM;
    expect(authEmailConfigured()).toBe(false);
    await expect(sendAuthEmail({ to: "student@example.com", subject: "Reset", heading: "Reset", message: "Message" })).rejects.toThrow("not configured");
  });

  it("sends escaped HTML through Resend without logging credentials", async () => {
    process.env.RESEND_API_KEY = "test-api-key";
    process.env.AUTH_EMAIL_FROM = "MDCAT Pakistan <account@example.com>";
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}", { status: 200 }));
    await sendAuthEmail({
      to: "student@example.com",
      subject: "Reset",
      heading: "Reset <password>",
      message: "Secure & private",
      actionLabel: "Reset",
      actionUrl: "https://example.com/reset?token=a&next=b",
    });
    const init = fetchMock.mock.calls[0]?.[1] as RequestInit;
    const body = JSON.parse(init.body as string);
    expect(fetchMock).toHaveBeenCalledWith("https://api.resend.com/emails", expect.any(Object));
    expect(body.html).toContain("Reset &lt;password&gt;");
    expect(body.html).toContain("token=a&amp;next=b");
    expect(JSON.stringify(body)).not.toContain("test-api-key");
  });

  it("rejects provider failures with a generic error", async () => {
    process.env.RESEND_API_KEY = "test-api-key";
    process.env.AUTH_EMAIL_FROM = "account@example.com";
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("provider detail", { status: 400 }));
    await expect(sendAuthEmail({ to: "student@example.com", subject: "Reset", heading: "Reset", message: "Message" })).rejects.toThrow("delivery failed");
  });
});
