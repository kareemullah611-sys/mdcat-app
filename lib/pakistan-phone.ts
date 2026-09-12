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
