import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { twoFactor } from "better-auth/plugins";
import { prisma } from "@/lib/prisma";
import { ROLES } from "@/lib/constants";
import { trustedOrigins } from "@/lib/origin";
import { queueAuthEmail } from "@/lib/auth-email";
import { securityLogCredentialEvent } from "@/lib/security-log";
import { isPakistanMobile, normalizePakistanMobile } from "@/lib/pakistan-phone";
import { z } from "zod";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  // Pinned to the canonical origin configured for the environment; removes
  // the auto-derived base URL warning and makes trusted origins explicit.
  baseURL: process.env.BETTER_AUTH_URL,
  user: {
    additionalFields: {
      // Declared so the adapter persists roleId set by the databaseHooks below;
      // otherwise better-auth's input transform silently drops undeclared fields.
      roleId: { type: "string", required: false, input: false },
      phoneNumber: {
        type: "string",
        required: true,
        unique: true,
        validator: { input: z.string().refine(isPakistanMobile, "Enter a valid Pakistan mobile number.") },
        transform: { input: (value) => normalizePakistanMobile(String(value)) ?? value },
      },
      phoneNumberVerified: { type: "boolean", required: false, defaultValue: false, input: false },
    },
    changeEmail: {
      enabled: true,
      updateEmailWithoutVerification: false,
      sendChangeEmailConfirmation: async ({ user, newEmail, url }) => {
        queueAuthEmail({
          to: user.email,
          subject: "Approve your MDCAT Pakistan email change",
          heading: "Approve email change",
          message: `A request was made to change your sign-in email to ${newEmail}. Approve it below. The new address must then be verified.`,
          actionLabel: "Approve email change",
          actionUrl: url,
        }, "account.email_change_confirmation_failed");
      },
    },
  },
  emailVerification: {
    expiresIn: 30 * 60,
    sendVerificationEmail: async ({ user, url }) => {
      queueAuthEmail({
        to: user.email,
        subject: "Verify your MDCAT Pakistan email",
        heading: "Verify your email address",
        message: "Confirm that this email address belongs to you. This link expires in 30 minutes.",
        actionLabel: "Verify email",
        actionUrl: url,
      }, "account.email_verification_failed");
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 10,
    maxPasswordLength: 128,
    resetPasswordTokenExpiresIn: 30 * 60,
    revokeSessionsOnPasswordReset: true,
    sendResetPassword: async ({ user, url }) => {
      queueAuthEmail({
        to: user.email,
        subject: "Reset your MDCAT Pakistan password",
        heading: "Reset your password",
        message: "Use the secure link below to choose a new password. It expires in 30 minutes and can only be used once.",
        actionLabel: "Reset password",
        actionUrl: url,
      }, "account.password_reset_email_failed");
    },
    onPasswordReset: async ({ user }) => {
      securityLogCredentialEvent("password_reset", user.id);
      queueAuthEmail({
        to: user.email,
        subject: "Your MDCAT Pakistan password was changed",
        heading: "Password changed",
        message: "Your password was reset and other signed-in sessions were revoked. If this was not you, contact support immediately.",
      }, "account.password_reset_notice_failed");
    },
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
    customRules: {
      "/request-password-reset": { window: 15 * 60, max: 5 },
      "/reset-password": { window: 15 * 60, max: 10 },
      "/change-password": { window: 15 * 60, max: 10 },
      "/change-email": { window: 15 * 60, max: 5 },
    },
  },
  advanced: {
    // Railway terminates TLS at its edge and supplies the connecting client in
    // this single-value header. Keep X-Forwarded-For as a fallback for local or
    // alternate deployments where it contains one unambiguous address.
    ipAddress: { ipAddressHeaders: ["x-real-ip", "x-forwarded-for"] },
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
