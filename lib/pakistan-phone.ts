/** Normalize Pakistani mobile numbers to E.164: +923XXXXXXXXX. */
export function normalizePakistanMobile(value: string): string | null {
  const compact = value.trim().replace(/[\s()-]/g, "");
  let normalized = compact;
  if (/^00923\d{9}$/.test(compact)) normalized = `+${compact.slice(2)}`;
  else if (/^923\d{9}$/.test(compact)) normalized = `+${compact}`;
  else if (/^03\d{9}$/.test(compact)) normalized = `+92${compact.slice(1)}`;
  if (!/^\+923\d{9}$/.test(normalized)) return null;
  return normalized;
}

export function isPakistanMobile(value: string): boolean {
  return normalizePakistanMobile(value) !== null;
}

/**
 * Render a stored mobile number for a human reader.
 *
 * Registration stores E.164 (`+923001234567`), which is correct for storage and
 * unusable on screen. Staff looking a student up in the admin list read it far
 * more often than a script does, so display it the way it is written in
 * Pakistan: `0300 1234567`. Anything unrecognised is returned untouched rather
 * than guessed at, and a missing number stays missing.
 */
export function formatPakistanMobile(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  const normalized = normalizePakistanMobile(trimmed);
  if (!normalized) return trimmed;
  // "+923001234567" -> drop the three-character "+92", restore the local
  // leading zero, then group as 0300 1234567.
  const local = `0${normalized.slice(3)}`;
  return `${local.slice(0, 4)} ${local.slice(4)}`;
}
