// Pure, framework-free exam logic — unit tested with vitest (spec §83).

export type SubmittedAnswer = {
  questionId: string;
  selectedOptionId: string | null;
  timeSpentSeconds?: number;
};

export function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Present options in a random order (spec §32); store the order for reproducibility. */
export function randomOptionOrder(optionIds: readonly string[]): string[] {
  return shuffle(optionIds);
}

export type ScoreResult = {
  total: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  percent: number;
  correctById: Map<string, string>;
};

/**
 * Score a submission. `correctById` maps questionId -> correct option id, so
 * a question counts as correct only when the selected option matches it.
 */
export function scoreSubmission(
  answers: SubmittedAnswer[],
  correctById: Map<string, string>,
): ScoreResult {
  const total = correctById.size;
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  for (const answer of answers) {
    const correctOption = correctById.get(answer.questionId);
    if (correctOption === undefined) continue;
    if (answer.selectedOptionId === null) {
      unanswered++;
    } else if (answer.selectedOptionId === correctOption) {
      correct++;
    } else {
      incorrect++;
    }
  }

  // Questions submitted without an answer still count as unanswered.
  unanswered += Math.max(0, total - answers.length);

  return {
    total,
    correct,
    incorrect,
    unanswered,
    percent: total === 0 ? 0 : Math.round((correct / total) * 100),
    correctById,
  };
}

/**
 * Sample `count` items spread evenly across `groupBy` groups (round-robin),
 * then randomized. Prevents accidental concentration in one chapter (§76).
 */
export function balancedSample<T>(
  items: readonly T[],
  count: number,
  groupBy: (item: T) => string,
): T[] {
  if (count <= 0) return [];
  if (count >= items.length) return shuffle(items);

  const groups = new Map<string, T[]>();
  for (const item of shuffle(items)) {
    const key = groupBy(item);
    const arr = groups.get(key) ?? [];
    arr.push(item);
    groups.set(key, arr);
  }

  // Deduplicate groups that appear multiple times (Map keys are unique already).
  const keys = shuffle([...groups.keys()]);
  const result: T[] = [];
  let cursor = 0;
  while (result.length < count && keys.length > 0) {
    const key = keys[cursor % keys.length];
    const group = groups.get(key)!;
    const item = group.pop()!;
    if (item) result.push(item);
    if (group.length === 0) {
      groups.delete(key);
      keys.splice(cursor % keys.length, 1);
      if (cursor >= keys.length) cursor = 0;
      continue;
    }
    cursor++;
    if (cursor >= keys.length) cursor = 0;
  }
  return result;
}

/** Format seconds as HH:MM:SS or MM:SS for the timer UI (spec §30). */
export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");
  return h > 0 ? `${String(h).padStart(2, "0")}:${mm}:${ss}` : `${mm}:${ss}`;
}