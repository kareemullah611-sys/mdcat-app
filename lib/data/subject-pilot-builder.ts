import type { GroundedMcq } from "../mcq-pipeline";

export type SubjectCard = {
  slug: string;
  domain: string;
  outcomeCode: string;
  grade: 11 | 12;
  chapters: { FBISE: number; BALOCHISTAN: number };
  entity: string;
  description: string;
  function: string;
  scenario: string;
  evidence: string;
  relevance: number;
};

function rotate<T>(correct: T, distractors: T[], correctIndex: number): [T, T, T, T] {
  const values = distractors.slice(0, 3);
  values.splice(correctIndex, 0, correct);
  return values as [T, T, T, T];
}

function difficulty(index: number): GroundedMcq["difficulty"] {
  const position = index % 20;
  return position < 3 ? "EASY" : position >= 17 ? "HARD" : "MEDIUM";
}

export function buildSubjectPilot(prefix: string, cards: SubjectCard[]): GroundedMcq[] {
  return cards.flatMap((card, cardIndex) => {
    const peerPool = [
      ...cards.filter((candidate) => candidate.domain === card.domain && candidate.slug !== card.slug),
      ...cards.filter((candidate) => candidate.domain !== card.domain),
    ];
    const peers = peerPool.slice(0, 3);
    const sources: GroundedMcq["sources"] = (["FBISE", "BALOCHISTAN"] as const).map((boardCode) => ({
      boardCode,
      grade: card.grade,
      chapterNumber: card.chapters[boardCode],
      evidence: card.evidence,
    }));
    const specs = [
      { type: "FACTUAL", stem: `Which term or principle is best described as ${card.description}?`, field: "entity" as const },
      { type: "CONCEPTUAL", stem: `Which result or role is most directly associated with ${card.entity}?`, field: "function" as const },
      { type: "APPLICATION", stem: `Which concept best explains this observation: ${card.scenario}?`, field: "entity" as const },
      { type: "STATEMENT_BASED", stem: `Which statement about ${card.entity} is correct?`, field: "description" as const },
    ];
    return specs.map((spec, variant): GroundedMcq => {
      const correctIndex = (cardIndex + variant) % 4;
      return {
        generationKey: `${prefix}-pilot-v1-${card.slug}-${variant + 1}`,
        questionText: spec.stem,
        options: rotate(card[spec.field], peers.map((peer) => peer[spec.field]), correctIndex),
        correctIndex,
        explanation: `${card.entity}: ${card.function}. ${card.evidence}`,
        questionType: spec.type,
        difficulty: difficulty(cardIndex * 4 + variant),
        mdcatRelevanceScore: card.relevance,
        outcomeCode: card.outcomeCode,
        concept: card.entity,
        sources,
      };
    });
  });
}
