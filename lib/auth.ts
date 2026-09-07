import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "@/lib/prisma";
import { ROLES } from "@/lib/constants";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
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
  trustedOrigins: [
    "https://*.up.railway.app",
    "https://mdcat-app-production.up.railway.app",
    "https://mdcat-app-production-9395.up.railway.app",
    "https://web-production-994bd.up.railway.app",
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    cookieCache: { enabled: true, maxAge: 5 * 60 },
  },
  rateLimit: {
    window: 60,
    max: 100,
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
  plugins: [nextCookies()],
});