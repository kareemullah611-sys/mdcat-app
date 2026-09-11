import path from "node:path";

/**
 * Read-only shared volume holding the uploaded source PDFs. Defaults to
 * <repo>/textbook-storage (gitignored). Override with TEXTBOOK_STORAGE_DIR.
 */
export function textbookStorageRoot(): string {
  return path.resolve(
    process.env.TEXTBOOK_STORAGE_DIR ||
      path.join(process.cwd(), "storage", "textbooks"),
  );
}

/**
 * Render cache for the page-by-page (Data Saver) reader. Kept separate from
 * the shared volume so a non-root container can always write it (e.g. /tmp)
 * while the source PDFs stay read-only on the volume.
 * Override with TEXTBOOK_CACHE_DIR.
 */
export function readerCacheRoot(): string {
  return path.resolve(
    process.env.TEXTBOOK_CACHE_DIR ||
      path.join(textbookStorageRoot(), "reader-cache"),
  );
}

/**
 * Resolve a user-supplied file key to an absolute path inside the storage
 * root. Returns null and refuses anything that could escape the root
 * (path traversal) or isn't a plain <name>.pdf key.
 */
export function resolveTextbookFile(fileKey: string): string | null {
  if (!/^[a-z0-9][a-z0-9._-]*\.pdf$/i.test(fileKey)) return null;
  const root = textbookStorageRoot();
  const resolved = path.resolve(root, fileKey);
  return resolved.startsWith(`${root}${path.sep}`) ? resolved : null;
}
