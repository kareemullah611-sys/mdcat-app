import { execFile } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { requireApiUser } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { readerCacheRoot, resolveTextbookFile } from "@/lib/textbook-storage";
import { guardRead } from "@/lib/request-guard";
import { securityLogError, securityLogTextbookSuspicious } from "@/lib/security-log";

export const runtime = "nodejs";

const run = promisify(execFile);

const qualities = {
  low: { dpi: "72", jpegQuality: "48" },
  standard: { dpi: "105", jpegQuality: "66" },
  high: { dpi: "150", jpegQuality: "78" },
} as const;

const QUALITY_KEYS = new Set(Object.keys(qualities));

// Render budget protections: pdftoppm is juicy CPU-bound work per page.
const MAX_CONCURRENT_RENDERS = 2;
const RENDER_TIMEOUT_MS = 120_000;
const RENDER_MAX_BUFFER = 10 * 1024 * 1024; // stderr/stdout cap (default 1 MB is too tight)

// Simple semaphore so N flaky clients cannot stack unbounded pdftoppm procs.
let activeCount = 0;
const waiters: (() => void)[] = [];

function acquire(): Promise<() => void> {
  return new Promise((resolve) => {
    const grant = () => {
      activeCount++;
      resolve(() => {
        activeCount--;
        const next = waiters.shift();
        if (next) next();
      });
    };
    if (activeCount < MAX_CONCURRENT_RENDERS) grant();
    else waiters.push(grant);
  });
}

// In-flight dedupe: concurrent requests for the same page share one render.
const inFlight = new Map<string, Promise<Buffer>>();

export async function GET(request: Request, { params }: { params: Promise<{ bookId: string; page: string }> }) {
  const user = await requireApiUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const guarded = guardRead(request, "PDF_PAGE", user.userId);
  if (!guarded.ok) {
    return Response.json(
      { error: "Too many requests" },
      { status: guarded.status, headers: { "Retry-After": String(guarded.retryAfterSeconds) } },
    );
  }

  const { bookId, page: rawPage } = await params;
  const page = Number(rawPage);
  const qualityKey = new URL(request.url).searchParams.get("quality") || "standard";
  if (!Number.isInteger(page) || page < 1 || !QUALITY_KEYS.has(qualityKey)) {
    securityLogTextbookSuspicious("invalid_page", bookId);
    return Response.json({ error: "Invalid page request" }, { status: 400 });
  }
  const quality = qualities[qualityKey as keyof typeof qualities];
  const book = await prisma.book.findFirst({
    where: { id: bookId, status: "PUBLISHED" },
    select: { fileUrl: true, pageCount: true },
  });
  if (!book?.fileUrl || (book.pageCount && page > book.pageCount)) {
    return Response.json({ error: "Page unavailable" }, { status: 404 });
  }
  const source = resolveTextbookFile(book.fileUrl);
  if (!source) {
    securityLogTextbookSuspicious("invalid_file_key", bookId);
    return Response.json({ error: "Invalid textbook file" }, { status: 400 });
  }
  try {
    await stat(source);
  } catch {
    return Response.json({ error: "Textbook file missing" }, { status: 404 });
  }

  const cacheDir = path.join(readerCacheRoot(), bookId, qualityKey);
  const cached = path.join(cacheDir, `${page}.jpg`);
  try {
    return imageResponse(await readFile(cached));
  } catch {
    // fall through to render
  }

  const key = cached;
  let pending = inFlight.get(key);
  if (!pending) {
    pending = renderPage(source, cached, cacheDir, page, quality.dpi, quality.jpegQuality, request.signal).finally(() => {
      inFlight.delete(key);
    });
    inFlight.set(key, pending);
  }

  try {
    return imageResponse(await pending);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") return Response.json({ error: "Aborted" }, { status: 499 });
    securityLogError("textbook.render_failed", { bookId, page, qualityKey, error });
    return Response.json({ error: "Could not render textbook page" }, { status: 500 });
  }
}

async function renderPage(
  source: string,
  cached: string,
  cacheDir: string,
  page: number,
  dpi: string,
  jpegQuality: string,
  signal?: AbortSignal,
): Promise<Buffer> {
  await mkdir(cacheDir, { recursive: true });
  const release = await acquire();
  const prefix = path.join(cacheDir, `.${page}-${process.pid}-${randomUUID()}`);
  const generated = `${prefix}.jpg`;
  try {
    await run(
      "pdftoppm",
      ["-f", String(page), "-l", String(page), "-singlefile", "-jpeg", "-r", dpi, "-jpegopt", `quality=${jpegQuality},progressive=y,optimize=y`, source, prefix],
      { timeout: RENDER_TIMEOUT_MS, maxBuffer: RENDER_MAX_BUFFER, signal },
    );
    try {
      await rename(generated, cached);
      return await readFile(cached);
    } catch (cacheWriteError) {
      // On-volume reader-cache unrdu WRITABLE by this non-root runtime
      // (read-only mount or legacy root-owned subtree). Fail-open: serve the
      // freshly rendered page for THIS request instead of 500ing. Sources are
      // never written; retried on the next request; already-cached pages are
      // still served from the cache.
      console.error("textbook.cache_write_degraded", {
        book: process.env.TEXTBOOK_BOOK_ID_SANITIZED || undefined,
        page,
        error: cacheWriteError instanceof Error ? cacheWriteError.message : String(cacheWriteError),
      });
      return await readFile(generated);
    }
  } catch (error) {
    await unlink(generated).catch(() => {});
    if (error instanceof Error && (error.name === "AbortError" || (signal?.aborted === true))) {
      const abort = new Error("render aborted");
      abort.name = "AbortError";
      throw abort;
    }
    throw error;
  } finally {
    release();
  }
}

function imageResponse(image: Buffer): Response {
  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": String(image.byteLength),
      "Cache-Control": "private, max-age=604800, stale-while-revalidate=86400, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
