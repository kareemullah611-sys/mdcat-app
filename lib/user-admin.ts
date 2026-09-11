import type { Prisma } from "@prisma/client";

// Pure helpers for the admin users page (read-only).
// Kept framework-free so the filtering/derivation logic is unit-testable.

export type ActivityRecord = { userId: string; at: Date | null };

export function buildUsersWhere({
  q,
  role,
  profile,
}: {
  q?: string;
  role?: string;
  profile?: string;
}): Prisma.UserWhereInput {
  const where: Prisma.UserWhereInput = {};
  const needle = q?.trim();
  if (needle) {
    where.OR = [
      { name: { contains: needle, mode: "insensitive" } },
      { email: { contains: needle, mode: "insensitive" } },
    ];
  }
  if (role) where.role = { code: role };
  if (profile === "COMPLETED") where.profile = { isNot: null };
  if (profile === "PENDING") where.profile = { is: null };
  return where;
}

/** Reduce per-user activity timestamps to a single "last seen" map. */
export function latestActivity(records: ActivityRecord[]): Map<string, Date> {
  const byUser = new Map<string, Date>();
  for (const { userId, at } of records) {
    if (!at) continue;
    const current = byUser.get(userId);
    if (!current || at > current) byUser.set(userId, at);
  }
  return byUser;
}

export function maxOf(...dates: Array<Date | null | undefined>): Date | null {
  let result: Date | null = null;
  for (const date of dates) {
    if (date && (!result || date > result)) result = date;
  }
  return result;
}

export function formatDateTime(value: Date): string {
  return value.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

export function formatDate(value: Date): string {
  return value.toLocaleDateString(undefined, { dateStyle: "medium" });
}

export function formatRelative(value: Date, now: Date = new Date()): string {
  const seconds = Math.max(0, Math.floor((now.getTime() - value.getTime()) / 1000));
  if (seconds <= 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return value.toLocaleDateString(undefined, { dateStyle: "medium" });
}

/** Combine goal + preparationMode into one display string, or null if unset. */
export function focusLabel(goal?: string | null, preparationMode?: string | null): string | null {
  const parts = [goal, preparationMode].filter(Boolean);
  return parts.length > 0 ? parts.join(" · ") : null;
}