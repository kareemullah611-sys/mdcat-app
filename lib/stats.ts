import { prisma } from "@/lib/prisma";

// Phase-1 read-only analytics for the student dashboard/progress (spec §8, §33, §46).
// Phases 6+ (mastery, recency weighting, adaptive prioritisation) replace or build on this.

export type SubjectStat = {
  subjectId: string;
  subjectName: string;
  attempted: number;
  correct: number;
  accuracy: number; // 0-100, 0 when no attempts
};

export type TopicStat = {
  topicId: string;
  topicTitle: string;
  subjectName: string;
  attempted: number;
  correct: number;
  accuracy: number;
};

export type RecentTest = {
  id: string;
  mode: string;
  score: number | null;
  totalQuestions: number;
  percent: number;
  submittedAt: Date | null;
};

export type StudentStats = {
  overallAttempted: number;
  overallCorrect: number;
  overallAccuracy: number;
  bySubject: SubjectStat[];
  weakTopics: TopicStat[];
  recentTests: RecentTest[];
};

export async function getStudentStats(userId: string): Promise<StudentStats> {
  const attempts = await prisma.answerHistory.findMany({
    where: { userId },
    select: {
      isCorrect: true,
      question: {
        select: {
          subjectId: true,
          subject: { select: { name: true } },
          topicId: true,
          topic: { select: { title: true } },
        },
      },
    },
  });

  const overallAttempted = attempts.length;
  const overallCorrect = attempts.filter((a) => a.isCorrect).length;
  const overallAccuracy =
    overallAttempted === 0 ? 0 : Math.round((overallCorrect / overallAttempted) * 100);

  const bySubjectMap = new Map<string, { subjectId: string; subjectName: string; attempted: number; correct: number }>();
  const topicBySubject = new Map<string, typeof attempts>();

  for (const a of attempts) {
    const subjectId = a.question.subjectId;
    const entry = bySubjectMap.get(subjectId) ?? {
      subjectId,
      subjectName: a.question.subject.name,
      attempted: 0,
      correct: 0,
    };
    entry.attempted++;
    if (a.isCorrect) entry.correct++;
    bySubjectMap.set(subjectId, entry);

    if (a.question.topicId) {
      const key = `${subjectId}:${a.question.topicId}`;
      const list = topicBySubject.get(key) ?? [];
      list.push(a);
      topicBySubject.set(key, list);
    }
  }

  const topicStats: TopicStat[] = [...topicBySubject.entries()]
    .map(([key, list]) => {
      const [, topicId] = key.split(":");
      const first = list[0];
      const attempted = list.length;
      const correct = list.filter((a) => a.isCorrect).length;
      return {
        topicId,
        topicTitle: first.question.topic?.title ?? "Untitled topic",
        subjectName: first.question.subject.name,
        attempted,
        correct,
        accuracy: Math.round((correct / attempted) * 100),
      };
    })
    .filter((t) => t.attempted >= 2) // only "known enough" topics count as weak/strong
    .sort((a, b) => a.accuracy - b.accuracy);

  const recentTests = await prisma.test.findMany({
    where: { userId, status: "COMPLETED" },
    orderBy: { submittedAt: "desc" },
    take: 5,
    select: {
      id: true,
      mode: true,
      score: true,
      totalQuestions: true,
      submittedAt: true,
    },
  });

  return {
    overallAttempted,
    overallCorrect,
    overallAccuracy,
    bySubject: [...bySubjectMap.values()].map((s) => ({
      ...s,
      accuracy: s.attempted === 0 ? 0 : Math.round((s.correct / s.attempted) * 100),
    })),
    weakTopics: topicStats,
    recentTests: recentTests.map((t) => ({
      ...t,
      percent: t.totalQuestions === 0 ? 0 : Math.round(((t.score ?? 0) / t.totalQuestions) * 100),
    })),
  };
}