"use client";

import { useEffect, useRef, useState } from "react";

export function TextbookReader({ bookId, title }: { bookId: string; title: string }) {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState("page-width");
  const frame = useRef<HTMLIFrameElement>(null);
  const storageKey = `textbook:${bookId}:page`;

  useEffect(() => {
    const saved = Number(localStorage.getItem(storageKey));
    // Restoring browser-only state necessarily happens after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (Number.isInteger(saved) && saved > 0) setPage(saved);
  }, [storageKey]);

  function go(next: number) {
    const safe = Math.max(1, Math.floor(next || 1));
    setPage(safe);
    localStorage.setItem(storageKey, String(safe));
  }

  const src = `/api/books/${bookId}/file#page=${page}&zoom=${zoom}&toolbar=1&navpanes=1`;
  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 p-3">
        <button className="rounded-lg border px-3 py-2 text-sm" onClick={() => go(page - 1)}>Previous</button>
        <label className="flex items-center gap-2 text-sm">Page
          <input className="w-20 rounded-lg border px-2 py-2" type="number" min="1" value={page} onChange={(e) => go(Number(e.target.value))} />
        </label>
        <button className="rounded-lg border px-3 py-2 text-sm" onClick={() => go(page + 1)}>Next</button>
        <select className="rounded-lg border px-2 py-2 text-sm" value={zoom} onChange={(e) => setZoom(e.target.value)} aria-label="Zoom">
          <option value="page-width">Fit width</option><option value="page-fit">Fit page</option><option value="100">100%</option><option value="150">150%</option><option value="200">200%</option>
        </select>
        <button className="ml-auto rounded-lg bg-slate-900 px-3 py-2 text-sm text-white" onClick={() => frame.current?.requestFullscreen()}>Full screen</button>
      </div>
      <iframe ref={frame} key={src} src={src} title={`Read ${title}`} className="h-[72vh] min-h-[520px] w-full bg-slate-100" />
      <p className="border-t px-3 py-2 text-xs text-slate-500">Your last page is remembered on this device. Use the PDF toolbar for search, thumbnails, download, and print.</p>
    </section>
  );
}
