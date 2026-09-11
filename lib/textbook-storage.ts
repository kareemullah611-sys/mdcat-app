import path from "node:path";

export function textbookStorageRoot(): string {
  return path.resolve(process.env.TEXTBOOK_STORAGE_DIR || path.join(process.cwd(), "storage", "textbooks"));
}

export function resolveTextbookFile(fileKey: string): string | null {
  if (!/^[a-z0-9][a-z0-9._-]*\.pdf$/i.test(fileKey)) return null;
  const root = textbookStorageRoot();
  const resolved = path.resolve(root, fileKey);
  return resolved.startsWith(`${root}${path.sep}`) ? resolved : null;
}
