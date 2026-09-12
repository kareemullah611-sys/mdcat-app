import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { twoFactor } from "better-auth/plugins";
import { prisma } from "@/lib/prisma";
import { ROLES } from "@/lib/constants";
import { trustedOrigins } from "@/lib/origin";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  // Pinned to the canonical origin configured for the environment; removes
  // the auto-derived base URL warning and makes trusted origins explicit.
  baseURL: process.env.BETTER_AUTH_URL,
  user: {
    additionalFields: {
      // Declared so the adapter persists roleId set by the databaseHooks below;
      // otherwise better-auth's input transform silently drops undeclared fields.
      roleId: { type: "string", required: false },
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },
  // Exact origins only (no wildcards, no dead domains, localhost only in dev).
  trustedOrigins: trustedOrigins(),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // re-issue cookie once per day (session rotation)
    cookieCache: { enabled: true, maxAge: 5 * 60 },
  },
  rateLimit: {
    window: 60,
    max: 20,
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          // New accounts default to STUDENT unless the seed admin path set one.
          if (user.roleId) return { data: user };
          const studentRole = await prisma.role.findUnique({
            where: { code: ROLES.STUDENT },
          });
          return { data: { ...user, roleId: studentRole?.id ?? null } };
        },
      },
    },
  },
  plugins: [
    twoFactor({
      issuer: "MDCAT Pakistan",
      twoFactorCookieMaxAge: 10 * 60,
      trustDeviceMaxAge: 7 * 24 * 60 * 60,
      accountLockout: { enabled: true, maxFailedAttempts: 8, durationSeconds: 15 * 60 },
    }),
    nextCookies(),
  ],
});
