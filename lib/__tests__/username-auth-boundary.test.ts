import { describe, expect, it } from "vitest";
import { auth } from "@/lib/auth";

const baseBody = {
  name: "Test Student",
  email: "student@example.com",
  password: "SecurePass123!",
  phoneNumber: "+923001234567",
};

describe("username authentication boundary", () => {
  it("rejects a direct registration request without a username before database access", async () => {
    await expect(auth.api.signUpEmail({ body: baseBody })).rejects.toMatchObject({
      statusCode: 400,
      body: expect.objectContaining({ message: "Username is required." }),
    });
  });

  it.each(["abc", "admin", "student name", ".student", "student_", "student..name"])(
    "rejects invalid direct registration username %s before database access",
    async (username) => {
      await expect(auth.api.signUpEmail({ body: { ...baseBody, username } })).rejects.toMatchObject({ statusCode: 400 });
    },
  );
});
