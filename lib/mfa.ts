export function adminMfaRequired(): boolean {
  return process.env.ADMIN_MFA_REQUIRED === "true" ||
    (process.env.NODE_ENV === "production" && process.env.ADMIN_MFA_REQUIRED !== "false");
}
