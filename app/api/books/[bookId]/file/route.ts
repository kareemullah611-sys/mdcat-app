import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { Readable } from "node:stream";
import { requireApiUser } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { resolveTextbookFile } from "@/lib/textbook-storage";

export const runtime = "nodejs";

export async function GET(request: Request, { params }: { params: Promise<{ bookId: string }> }) {
  if (!(await requireApiUser())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { bookId } = await params;
  const book = await prisma.book.findFirst({ where: { id: bookId, status: "PUBLISHED" }, select: { fileUrl: true } });
  if (!book?.fileUrl) return Response.json({ error: "Textbook file unavailable" }, { status: 404 });
  const filePath = resolveTextbookFile(book.fileUrl);
  if (!filePath) return Response.json({ error: "Invalid textbook file" }, { status: 400 });

  let size: number;
  try { size = (await stat(filePath)).size; } catch { return Response.json({ error: "Textbook file missing" }, { status: 404 }); }
  const common = { "Accept-Ranges": "bytes", "Content-Type": "application/pdf", "Content-Disposition": "inline" };
  const range = request.headers.get("range");
  if (!range) {
    return new Response(Readable.toWeb(createReadStream(filePath)) as ReadableStream, { headers: { ...common, "Content-Length": String(size) } });
  }
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  const start = match[1] ? Number(match[1]) : 0;
  const end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (start > end || start >= size) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  const stream = createReadStream(filePath, { start, end });
  return new Response(Readable.toWeb(stream) as ReadableStream, {
    status: 206,
    headers: { ...common, "Content-Length": String(end - start + 1), "Content-Range": `bytes ${start}-${end}/${size}` },
  });
}
