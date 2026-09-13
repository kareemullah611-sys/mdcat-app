export const USERNAME_MIN_LENGTH = 4;
export const USERNAME_MAX_LENGTH = 20;

export const RESERVED_USERNAMES = new Set([
  "admin", "administrator", "root", "system", "support", "moderator", "staff",
  "api", "login", "register", "signup", "account", "me", "profile", "null",
  "undefined",
]);

export function normalizeUsername(value: string): string {
  return value.toLowerCase();
}

export function usernameValidationError(value: unknown): string | null {
  if (typeof value !== "string" || value.length === 0) return "Username is required.";
  if (value.length < USERNAME_MIN_LENGTH) return `Username must be at least ${USERNAME_MIN_LENGTH} characters.`;
  if (value.length > USERNAME_MAX_LENGTH) return `Username must be no more than ${USERNAME_MAX_LENGTH} characters.`;
  if (!/^[A-Za-z0-9_.]+$/.test(value)) return "Username may contain only English letters, numbers, underscores, and periods.";
  if (!/^[A-Za-z0-9]/.test(value)) return "Username must start with a letter or number.";
  if (!/[A-Za-z0-9]$/.test(value)) return "Username must end with a letter or number.";
  if (value.includes("..")) return "Username cannot contain consecutive periods.";
  if (RESERVED_USERNAMES.has(normalizeUsername(value))) return "This username is reserved. Please choose another.";
  return null;
}

export function isValidUsername(value: string): boolean {
  return usernameValidationError(value) === null;
}
