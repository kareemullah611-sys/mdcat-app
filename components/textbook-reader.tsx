"use client";

import { useEffect, useRef, useState } from "react";

type ReaderMode = "data" | "original";
type Quality = "low" | "standard" | "high";

export function TextbookReader({
  bookId,
  title,
  pageCount,
}: {
  bookId: string;
  title: string;
  pageCount: number | null;
}) {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState("page-width");
  const [mode, setMode] = useState<ReaderMode>("data");
  const [quality, setQuality] = useState<Quality>("low");
  const [loading, setLoading] = useState(true);
  const frame = useRef<HTMLIFrameElement>(null);
  const storageKey = `textbook:${bookId}:page`;

  useEffect(() => {
    const saved = Number(localStorage.getItem(storageKey));
    // Restoring browser-only state necessarily happens after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (Number.isInteger(saved) && saved > 0 && (!pageCount || saved <= pageCount)) setPage(saved);
  }, [pageCount, storageKey]);

  useEffect(() => {
    if (mode !== "data" || (pageCount && page >= pageCount)) return;
    const nextPage = new Image();
    nextPage.src = `/api/books/${bookId}/page/${page + 1}?quality=${quality}`;
  }, [bookId, mode, page, pageCount, quality]);

  function go(next: number) {
    const safe = Math.min(pageCount || Number.MAX_SAFE_INTEGER, Math.max(1, Math.floor(next || 1)));
    setLoading(true);
    setPage(safe);
    localStorage.setItem(storageKey, String(safe));
  }

  const originalSrc = `/api/books/${bookId}/file#page=${page}&zoom=${zoom}&toolbar=1&navpanes=1`;
  const pageSrc = `/api/books/${bookId}/page/${page}?quality=${quality}`;

  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 p-3">
        <div className="flex rounded-lg bg-slate-100 p-1 text-sm">
          <button
            className={`rounded-md px-3 py-1.5 ${mode === "data" ? "bg-white font-medium shadow-sm" : "text-slate-600"}`}
            onClick={() => { setMode("data"); setLoading(true); }}
          >
            Data saver
          </button>
          <button
            className={`rounded-md px-3 py-1.5 ${mode === "original" ? "bg-white font-medium shadow-sm" : "text-slate-600"}`}
            onClick={() => setMode("original")}
          >
            Original PDF
          </button>
        </div>
        <button className="rounded-lg border px-3 py-2 text-sm disabled:opacity-40" disabled={page <= 1} onClick={() => go(page - 1)}>Previous</button>
        <label className="flex items-center gap-2 text-sm">
          Page
          <input
            className="w-20 rounded-lg border px-2 py-2"
            type="number"
            min="1"
            max={pageCount || undefined}
            value={page}
            onChange={(event) => go(Number(event.target.value))}
          />
          {pageCount ? <span className="text-slate-500">of {pageCount}</span> : null}
        </label>
        <button className="rounded-lg border px-3 py-2 text-sm disabled:opacity-40" disabled={Boolean(pageCount && page >= pageCount)} onClick={() => go(page + 1)}>Next</button>
        {mode === "data" ? (
          <select
            className="rounded-lg border px-2 py-2 text-sm"
            value={quality}
            onChange={(event) => { setQuality(event.target.value as Quality); setLoading(true); }}
            aria-label="Image quality"
          >
            <option value="low">Low data</option>
            <option value="standard">Standard</option>
            <option value="high">High quality</option>
          </select>
        ) : (
          <select className="rounded-lg border px-2 py-2 text-sm" value={zoom} onChange={(event) => setZoom(event.target.value)} aria-label="Zoom">
            <option value="page-width">Fit width</option>
            <option value="page-fit">Fit page</option>
            <option value="100">100%</option>
            <option value="150">150%</option>
            <option value="200">200%</option>
          </select>
        )}
        <a
          href={`/api/books/${bookId}/file?download=1`}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Download PDF
        </a>
        {mode === "original" ? (
          <button className="ml-auto rounded-lg bg-slate-900 px-3 py-2 text-sm text-white" onClick={() => frame.current?.requestFullscreen()}>Full screen</button>
        ) : null}
      </div>

      {mode === "data" ? (
        <div className="relative flex min-h-[520px] justify-center bg-slate-100 p-2 sm:p-4">
          {loading ? <div className="absolute inset-0 flex items-center justify-center bg-slate-100/80 text-sm text-slate-500">Loading page…</div> : null}
          {/* The page endpoint returns a compact, cached JPEG suited to slow connections. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={pageSrc}
            src={pageSrc}
            alt={`${title}, page ${page}`}
            className="h-auto max-h-[78vh] max-w-full object-contain shadow-sm"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </div>
      ) : (
        <iframe ref={frame} key={originalSrc} src={originalSrc} title={`Read ${title}`} className="h-[72vh] min-h-[520px] w-full bg-slate-100" />
      )}

      <p className="border-t px-3 py-2 text-xs text-slate-500">
        Data saver loads one compressed page at a time and prepares the next page in advance. Your last page is remembered on this device. Use Original PDF for search, thumbnails, and printing.
      </p>
    </section>
  );
}
