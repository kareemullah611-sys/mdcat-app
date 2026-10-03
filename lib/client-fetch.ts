"use client";

/**
 * A single guarded JSON POST for client components.
 *
 * Every mutation form needs the same three things, and getting any of them wrong
 * strands the user: the loading flag must always be cleared (a rejected promise
 * never reaches the caller's error branch), the response body must be parsed
 * defensively, and a dropped connection needs a message that says so rather than
 * a generic failure. Components call this and branch on `ok`.
 */

export type PostResult<T> = { ok: true; data: T } | { ok: false; error: string };

const OFFLINE_MESSAGE =
  "The connection was interrupted. Check your network and try again.";

export async function postJson<T = unknown>(
  url: string,
  body?: unknown,
  init?: { keepalive?: boolean },
): Promise<PostResult<T>> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body ?? {}),
      ...(init?.keepalive ? { keepalive: true } : {}),
    });
  } catch {
    return { ok: false, error: OFFLINE_MESSAGE };
  }

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      (data as { error?: string } | null)?.error ?? `Request failed (HTTP ${response.status}).`;
    return { ok: false, error: message };
  }
  return { ok: true, data: data as T };
}
