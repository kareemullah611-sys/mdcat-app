import { execFile } from "node:child_process";
import { readFile, mkdir, rename, stat } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { requireApiUser } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { resolveTextbookFile, textbookStorageRoot } from "@/lib/textbook-storage";

export const runtime = "nodejs";
const run = promisify(execFile);
const qualities = {
  low: { dpi: "72", jpegQuality: "48" },
  standard: { dpi: "105", jpegQuality: "66" },
  high: { dpi: "150", jpegQuality: "78" },
} as const;

export async function GET(request: Request, { params }: { params: Promise<{ bookId: string; page: string }> }) {
  if (!(await requireApiUser())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { bookId, page: rawPage } = await params;
  const page = Number(rawPage);
  const qualityKey = new URL(request.url).searchParams.get("quality") || "standard";
  if (!Number.isInteger(page) || page < 1 || !(qualityKey in qualities)) {
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
  if (!source) return Response.json({ error: "Invalid textbook file" }, { status: 400 });
  try { await stat(source); } catch { return Response.json({ error: "Textbook file missing" }, { status: 404 }); }

  const cacheDir = path.join(textbookStorageRoot(), "reader-cache", bookId, qualityKey);
  const cached = path.join(cacheDir, `${page}.jpg`);
  try {
    return imageResponse(await readFile(cached));
  } catch {
    await mkdir(cacheDir, { recursive: true });
  }

  const prefix = path.join(cacheDir, `.${page}-${process.pid}-${crypto.randomUUID()}`);
  const generated = `${prefix}.jpg`;
  try {
    await run("pdftoppm", ["-f", String(page), "-l", String(page), "-singlefile", "-jpeg", "-r", quality.dpi, "-jpegopt", `quality=${quality.jpegQuality},progressive=y,optimize=y`, source, prefix], { timeout: 120_000 });
    await rename(generated, cached);
    return imageResponse(await readFile(cached));
  } catch (error) {
    console.error("Textbook page render failed", { bookId, page, qualityKey, error });
    return Response.json({ error: "Could not render textbook page" }, { status: 500 });
  }
}

function imageResponse(image: Buffer): Response {
  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": String(image.byteLength),
      "Cache-Control": "private, max-age=604800, stale-while-revalidate=86400",
    },
  });
}
