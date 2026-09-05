"use client";

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Field, Input, Select, Card } from "@/components/ui";

export function ChapterTopicManager({
  bookId,
  bookTitle,
  chapters,
}: {
  bookId: string;
  bookTitle: string;
  chapters: { id: string; number: number | null; title: string }[];
}) {
  const router = useRouter();
  const [chapterTitle, setChapterTitle] = useState("");
  const [chapterNumber, setChapterNumber] = useState("");
  const [topicTitle, setTopicTitle] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [chapterBusy, setChapterBusy] = useState(false);
  const [topicBusy, setTopicBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createChapter(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setChapterBusy(true);
    const res = await fetch("/api/admin/chapters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookId,
        title: chapterTitle,
        number: chapterNumber ? Number(chapterNumber) : undefined,
      }),
    });
    setChapterBusy(false);
    if (!res.ok) {
      setError("Could not create chapter.");
      return;
    }
    setChapterTitle("");
    setChapterNumber("");
    router.refresh();
  }

  async function createTopic(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedChapter) {
      setError("Select a chapter first.");
      return;
    }
    setError(null);
    setTopicBusy(true);
    const res = await fetch("/api/admin/topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chapterId: selectedChapter, title: topicTitle }),
    });
    setTopicBusy(false);
    if (!res.ok) {
      setError("Could not create topic.");
      return;
    }
    setTopicTitle("");
    router.refresh();
  }

  return (
    <Card>
      <h2 className="mb-4 font-semibold">Add content to {bookTitle}</h2>

      <form onSubmit={createChapter} className="space-y-3">
        <div className="grid grid-cols-[5rem_1fr] gap-3">
          <Field label="No.">
            <Input
              type="number"
              value={chapterNumber}
              onChange={(e) => setChapterNumber(e.target.value)}
              placeholder="1"
            />
          </Field>
          <Field label="Chapter title">
            <Input
              value={chapterTitle}
              onChange={(e) => setChapterTitle(e.target.value)}
              placeholder="e.g. Chemical Bonding"
              required
            />
          </Field>
        </div>
        <Button type="submit" disabled={chapterBusy}>
          {chapterBusy ? "Creating…" : "Add chapter"}
        </Button>
      </form>

      <hr className="my-5 border-slate-200" />

      <form onSubmit={createTopic} className="space-y-3">
        <Field label="Chapter">
          <Select value={selectedChapter} onChange={(e) => setSelectedChapter(e.target.value)}>
            <option value="">Select chapter…</option>
            {chapters.map((c) => (
              <option key={c.id} value={c.id}>
                {c.number ? `${c.number}. ` : ""}
                {c.title}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Topic title">
          <Input
            value={topicTitle}
            onChange={(e) => setTopicTitle(e.target.value)}
            placeholder="e.g. Types of Chemical Bonds"
          />
        </Field>
        <Button type="submit" disabled={topicBusy}>
          {topicBusy ? "Creating…" : "Add topic"}
        </Button>
      </form>

      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </Card>
  );
}