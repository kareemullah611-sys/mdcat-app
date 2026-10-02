# MCQ bank authoring guide (Grade XI banks)

Internal guide for authoring grounded MCQ parts for the MDCAT platform.
It encodes the academic and quality rules from `requirements/product-spec.md`
(§4, §16, §18-§20, §21, §23-§25, §51, §52).

## Files

```
lib/data/mcq-bank/
  build.ts        # buildBatch(prefix, items) -> GroundedMcq[]
  coverage.ts     # OUTCOME_COVERAGE: outcome -> board chapters + pages
  banks.ts        # registry of every batch (built from parts)
  <subject>/<batch>-<n>.ts        # barrel: buildBatch over the parts
  <subject>/<batch>-<n>-<p>.ts    # part: exports `items` (BankItem[])
```

A part file contains only authored content:

```ts
import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "mitochondrion-atp-yield",
    text: "Which organelle produces most of the ATP generated during aerobic respiration?",
    options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Lysosome"],
    correctIndex: 1,
    explanation: "The inner mitochondrial membrane carries the electron transport chain that drives oxidative phosphorylation, so mitochondria supply most cellular ATP.",
    evidence: "Mitochondria are the sites of aerobic respiration and ATP production.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "BIO-4.3",
    concept: "mitochondrial function",
  },
];
```

The barrel supplies board/chapter/page provenance from `coverage.ts`, so parts
must never invent page numbers, chapter numbers or board codes.

## Fields

| field | rule |
| --- | --- |
| `key` | lowercase kebab-case, unique inside the part; prefix it with the assigned `keyPrefix` so keys stay unique across the whole bank |
| `text` | one self-contained MDCAT-style stem |
| `options` | exactly four textually distinct strings |
| `correctIndex` | 0-3, points at the single correct option |
| `explanation` | 1-3 sentences, accurate, explains why the correct option is right (never explain all wrong options) |
| `evidence` | one textbook-grounded sentence, minimum 12 characters, literally true of the mapped chapter, never generic filler |
| `questionType` | one of the eight allowed values listed below |
| `difficulty` | `EASY` / `MEDIUM` / `HARD`, counted against the assigned quota |
| `relevance` | honest 0-100 MDCAT relevance |
| `outcome` | must come from the assigned outcome list |
| `concept` | lowercase noun phrase, 2-4 words |

Allowed `questionType` values (anything else is rejected by the validator):
`CONCEPTUAL`, `FACTUAL`, `APPLICATION`, `STATEMENT_BASED`, `COMPARISON`,
`REASONING`, `SEQUENCE`, `MDCAT_STYLE`.

Never use `NUMERICAL`, `DIAGRAM`, `FORMULA`, `PRACTICAL` or `EXPERIMENTAL`.
Calculation questions are typed `APPLICATION` or `MDCAT_STYLE`.

## Difficulty definitions

- **EASY** — direct recall or one-step identification a Grade XI student
  answers immediately.
- **MEDIUM** — application, comparison, interpretation, "what happens if...",
  or a short 1-2 step deduction.
- **HARD** — integrates two concepts, needs careful statement evaluation,
  relies on an exception/limitation, or requires a 2-3 step calculation.

Assign difficulty honestly, then confirm the part matches its quota exactly.

## Hard rules (all machine-checked or human-reviewed)

1. **No practical content** (§4). No laboratory procedures, apparatus,
   reagent/tube choices, specimen collection, staining, or observed colour
   changes from an experiment. Also no "during an experiment the student
   observed ..." framing. Theory, paper calculation and application only.
2. **Exactly one correct option**; distractors plausible for a weak candidate
   but unambiguously wrong (§25.1, §25.7).
2a. **Spread the answer position.** `correctIndex` must be roughly even across
   0-3 — no index may hold more than 40 % of the items in a part. A part where
   every answer is option A is rejected.
3. Never use "All of the above", "None of the above", "Both A and B", or
   double negatives — these are ambiguous (§25.2).
4. Every question must be answerable from the mapped chapters (§21, §25.4).
   Do not invent facts, numbers or terms.
5. Every numeric answer must be recomputed and be correct (§25.6).
6. Stems must be unique: no two items in the bank may share the same opening
   four words or test the same fact with different wording (§51).
7. Avoid the four templated stems already used by the shipped pilots:
   "Which term is best described as ...", "What is the most direct ... role
   of ...", "Which ... is most likely affected if ...", "Which statement
   about ... is correct?" Keep these out of the new bank.
8. Spread the eight question types; each should appear several times per part.
9. Plain text only. No markdown, no HTML. Use plain ASCII for exponents and
   subscripts where possible (`m s^-2`, `H2O`, `CO2`).
10. Relevance is a score only — never claim a question "will appear in MDCAT"
    (§23, §24).

## Grade XII batches (additions to the rules above)

- `outcome` must be one of the **Grade XII** outcomes listed in your
  assignment. They come from the PMDC 2025 curriculum units listed below; never
  reuse a Grade XI outcome code in a Grade XII batch.
- The Grade XII bank must not repeat the Grade XI bank. Another 1,500
  Grade XI questions already cover Grade XI topics, so every Grade XII item must
  test content that is **new** for a Class XII student. Where an outcome overlaps
  with Grade XI (for example `CHEM-14.12` benzene, `BIO-12.1` immunity), go
  deeper into the Grade XII treatment rather than re-asking the recall question.
- Every `key` must start with the `keyPrefix` you are given, and keys must be
  globally unique across the whole bank (Grade XI + Grade XII).
- Question text must not exceed 600 characters.