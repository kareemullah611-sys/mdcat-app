# PMDC MDCAT 2025 — Official Curriculum Outcomes (extraction + draft)

> **Status:** Biology **APPROVED and SEEDED** (2026-09-14). Chemistry and
> Physics sections below are still **DRAFT — not yet transcribed.**
> **Machine-readable source of truth:** `lib/data/mdcat-2025-curriculum.ts`
> (seeded into `PMDC_MDCAT_2025_FINAL` by
> `scripts/seed-mdcat-syllabus-2025.ts`). This file is the human review copy.
> **Source:** PM&DC, *Medical and Dental Colleges Admission Test (MDCAT) Curriculum 2025*
> (Biology, Chemistry, Physics, English, Logical Reasoning), 24 pp.
> `https://www.pmdc.pk/Documents/Syllabus/Uniform%20Curriculum%20MDCAT-2025%20%20Final%20%2826-05-2025%29.pdf`
> — the same `SOURCE_URL` already recorded on `PMDC_MDCAT_2025_FINAL`.
> **Extracted:** 2026-09-14. Wording below is the official text, with line-break
> artefacts removed and a small number of obvious typos corrected (listed at the
> end). Nothing is paraphrased.

---

## Why this file exists

`scripts/seed-mdcat-syllabus-2025.ts` currently seeds **71 of the 289** learning
outcomes in the three science subjects. Because every question must map to an
outcome (spec §22 syllabus validation, enforced by `validateGroundedPilot` and
`scripts/import-mcq-bank.ts`), a missing outcome means that content cannot be
authored at all.

| Subject | Units in the official curriculum | Outcomes | Seeded | Missing |
| --- | --- | --- | --- | --- |
| Biology | 16 | 69 | 21 | **48** |
| Chemistry | 20 | 120 | 25 | **95** |
| Physics | 16 | 100 | 25 | **75** |
| **Total** | 52 | **289** | 71 | **218** |

English (22 outcomes) and Logical Reasoning are also in the document but are
deliberately excluded — spec §81 says not to implement them yet.

## Other facts confirmed from the document

- **Paper:** 180 MCQs, 3 hours, paper-based, **no negative marking**.
- **Weightage:** Biology 45 % (81), Chemistry 25 % (45), Physics 20 % (36),
  English 5 % (9), Logical Reasoning 5 % (9).
- **Difficulty:** **15 % easy / 70 % moderate / 15 % difficult** — identical to the
  `BATCH_DIFFICULTY_TARGETS = { EASY: 15, MEDIUM: 70, HARD: 15 }` used for the
  1,500-question bank. The bank mix now provably mirrors the real paper.
- Biology units are numbered 1–16 with no subject-prefixed gaps, and the seeded
  codes (1.x, 2.1, 3.x, 4.x, 6.x) already match the official numbering — so
  adding the missing units is a pure append; no renumbering is required.

---

## Biology — complete official outcome list (69)

`NEW` = not yet seeded. `SEEDED` = present in `scripts/seed-mdcat-syllabus-2025.ts`.

### 1 — ACELLULAR LIFE

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-1.1 SEEDED | Viruses | Classify viruses on basis of their structure/ number of strands/ diseases/ hosts etc. |
| BIO-1.2 SEEDED | AIDS and HIV Infection | Identify symptoms, mode of transmission and cause of viral disease (AIDS) |

### 2 — BIOENERGETICS

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-2.1 SEEDED | Respiration | Outline the cellular respiration of proteins and fats and correlate these with that of glucose. |

### 3 — BIOLOGICAL MOLECULES

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-3.1 SEEDED | Biological molecules | Define and classify biological molecules. |
| BIO-3.2 SEEDED | Biological molecules | Discuss the importance of biological molecules |
| BIO-3.3 SEEDED | Biological Importance of Water | Describe biologically important properties of water (polarity, hydrolysis, specific heat, water as solvent and reagent, density, cohesion/ionization) |
| BIO-3.4 SEEDED | Carbohydrates | Discuss carbohydrates: monosaccharaides (glucose), oligosaccharides (cane sugar, sucrose, lactose), polysaccharides (starches, cellulose, glycogen) |
| BIO-3.5 SEEDED | Proteins | Describe proteins: amino acids, structure of proteins |
| BIO-3.6 SEEDED | Lipids | Describe lipids: phospholipids, triglycerides, alcohol and esters (acylglycerol) |
| BIO-3.7 SEEDED | Ribonucleic acid (RNA) | Give an account of structure and function RNA |
| BIO-3.8 SEEDED | Conjugated molecules | Discuss conjugated molecules (col lipids, glycol proteins) |
| BIO-3.9 SEEDED | Structure of DNA | Explain the double helical structure of DNA as proposed by Watson and Crick. |
| BIO-3.10 SEEDED | Gene | Define gene is a sequence of nucleotides as part of DNA, which codes for the formation of a polypeptide. |

### 4 — CELL STRUCTURE & FUNCTION

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-4.1 SEEDED | Cell structure | Compare the structure of typical animal and plant cell |
| BIO-4.2 SEEDED | Prokaryotic and Eukaryotic cell | Compare and contrast the structure of prokaryotic cells with eukaryotic cells |
| BIO-4.3 SEEDED | Cytoplasmic Organelles | Outline the structure and function of the following organelles: nucleus, Endoplasmic reticulum, Golgi apparatus and Mitochondria |
| BIO-4.4 SEEDED | Chromosomes | Describe the structure, chemical composition and function of chromosomes. |

### 5 — COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-5.1 | Receptors | Recognize receptors as transducers sensitive to various stimuli. |
| BIO-5.2 | Neurons | Explain the structure of a typical neuron (cell body, dendrites, axon and myelin sheath). |
| BIO-5.3 | Neurons | Define nerve impulse. |
| BIO-5.4 | Neurons | Classify reflexes. |
| BIO-5.5 | Neurons | Briefly explain the functions of components of a reflex arc. |
| BIO-5.6 | Brain | Discuss the main parts of the brain (e.g., components of brain stem, mid brain, cerebellum, cerebrum). |
| BIO-5.7 | Brain | Describe the functions of each part. |

### 6 — ENZYMES

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-6.1 SEEDED | Enzymes | Describe the distinguishing characteristics of enzymes |
| BIO-6.2 SEEDED | Mode of Enzyme Action | Explain mechanism of action of enzymes |
| BIO-6.3 SEEDED | Factors that Affect the Rate of Enzyme Reactions | Describe effects of factor on enzyme action (temperature, pH and concentration) |
| BIO-6.4 SEEDED | Inhibitors | Describe enzyme inhibitors |

### 7 — EVOLUTION `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-7.1 | Concept of Evolution | Explain origin of life according to concept of evolution. |
| BIO-7.2 | Lamarckism | Describe the theory of inheritance of acquired characters, as proposed by Lamarck. |
| BIO-7.3 | Darwinism | Explain the theory of natural selection as proposed by Darwin. |

### 8 — REPRODUCTION `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-8.1 | Human Reproductive system | Describe the functions of various parts of the male & female reproductive systems and the hormones that regulate those functions. |
| BIO-8.2 | Menstrual cycle | Describe the menstrual cycle (female reproductive cycle) emphasizing the role of hormones. |
| BIO-8.3 | Sexually transmitted diseases | List the common sexually transmitted diseases along with their causative agents and main symptoms. |

### 9 — SUPPORT & MOVEMENT `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-9.1 | Human skeleton | Describe cartilage, muscle and bone. |
| BIO-9.2 | Human skeleton | Explain the main characteristics of cartilage and bone along with functions. |
| BIO-9.3 | Muscles | Compare characteristics of smooth muscles, cardiac muscles and skeletal muscles. |
| BIO-9.4 | Skeletal muscles | Explain the ultra-structure of skeletal muscles. |
| BIO-9.5 | Muscle contraction | Describe in brief the process of skeletal muscle contraction. |
| BIO-9.6 | Joints | Classify joints. |
| BIO-9.7 | Arthritis | Define arthritis. |

### 10 — INHERITANCE `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-10.1 | Mendel's laws of Inheritance | Associate inheritance with the laws of Mendel. |
| BIO-10.2 | Mendel's laws of Inheritance | Explain the law of independent assortment, using a suitable example. |
| BIO-10.3 | Gene linkage and crossing over | Describe the terms gene linkage and crossing over. |
| BIO-10.4 | Gene linkage and crossing over | Explain how gene linkage counters independent assortment and crossing-over modifies the progeny. |
| BIO-10.5 | X-linked Recessive inheritance | Describe the concept of sex-linkage. |
| BIO-10.6 | X-linked Recessive inheritance | Briefly describe inheritance of sex-linked traits. |
| BIO-10.7 | X-linked Recessive inheritance | Analyze the inheritance of hemophilia. |

### 11 — CIRCULATION `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-11.1 | Human Heart | Discuss general structure of human heart. |
| BIO-11.2 | Cardiac cycle and phases of Heartbeat | Describe the phases of heartbeat. |
| BIO-11.3 | Blood Vessels | List the differences and functions of arteries, veins and capillaries. |
| BIO-11.4 | Lymphatic system | Describe lymphatic system (nodes, vessels and organs). |

### 12 — IMMUNITY `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-12.1 | Specific Defense Mechanism | Define and discuss the functions and importance of specific defense mechanisms. |

### 13 — RESPIRATION `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-13.1 | Human Respiratory System | Discuss the functions of main part of respiratory system. |
| BIO-13.2 | Human Respiratory System | Discuss the process of gas exchange in human lungs. |
| BIO-13.3 | Human Respiratory System | Discuss the effect of smoking on respiratory system. |

### 14 — DIGESTION `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-14.1 | Human digestive system | Describe the parts of human digestive system. |
| BIO-14.2 | Human digestive system | Explain the functions of the main parts of the digestive system including associated structures and glands. |

### 15 — HOMEOSTASIS `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-15.1 | Homeostasis (kidney specifically) | Explain different organs of urinary system. Describe the structure of kidney and relate it with its function. |
| BIO-15.2 | Homeostasis (kidney specifically) | Explain the processes of glomerular filtration, selective re-absorption and tubular secretion as the events in kidney functioning. |
| BIO-15.3 | Homeostasis (kidney specifically) | Justify the functioning of kidneys as both excretion and osmoregulation. |
| BIO-15.4 | Homeostasis (kidney specifically) | Compare the function of two major capillary beds in kidney i.e. glomerular capillaries and peritubular capillaries. |
| BIO-15.5 | Homeostasis (kidney specifically) | Explain the causes and treatments of kidney stones. |
| BIO-15.6 | Homeostasis (kidney specifically) | Outline the causes of kidney failure. |
| BIO-15.7 | Thermoregulation | Describe thermoregulation and explain its needs. |
| BIO-15.8 | Excretion | List various nitrogenous compounds excreted during the process of excretion. |

### 16 — BIOTECHNOLOGY `NEW`

| Code | Topic | Learning outcome |
| --- | --- | --- |
| BIO-16.1 | Biotechnology and Health Care | Describe how biotechnologists can combat health problems by producing vaccines. |
| BIO-16.2 | Biotechnology and Health Care | State the role played by biotechnology in disease diagnosis (DNA/RNA probes, monoclonal antibodies). |
| BIO-16.3 | Biotechnology and Health Care | Describe what products biotechnologists obtain for use in disease treatment. |

**Grade XII total: 48 new Biology outcomes** (units 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16).

---

## Proposed Grade XII chapter mapping (to be confirmed before authoring)

| Outcome unit | FBISE Bio XII ch. | Balochistan Bio XII ch. |
| --- | --- | --- |
| 5 Coordination & Control | 3 Coordination and Control | 17 Nervous Coordination, 18 Chemical Coordination |
| 7 Evolution | 10 Evolution | 24 Evolution |
| 8 Reproduction | 4 Reproduction | 20 Reproduction, 21 Development and Aging |
| 9 Support & Movement | 2 Support and Movement | 16 Support and Movement |
| 10 Inheritance | 6 Chromosomes and DNA, 8 Variation and Genetics, 7 Cell Cycle | 22 Inheritance, 23 Chromosome and DNA |
| 11 Circulation | (ch.1 Homeostasis carries the circulatory content in Grade XI books) | — |
| 12 Immunity | (Grade XI ch.13 Immunity) | — |
| 13 Respiration | 1 Homeostasis / Balochistan ch.14 Respiration | 14 Respiration |
| 14 Digestion | (Grade XI FBISE ch.11 Digestion) | — |
| 15 Homeostasis | 1 Homeostasis | 15 Homeostasis |
| 16 Biotechnology | 9 Biotechnology | 26 Biotechnology |

**No MDCAT 2025 outcome exists for:** Ecosystem, Some Major Ecosystems, Man and
His Environment (FBISE XII ch.11–13), nor for Growth and Development. Those
chapters are legitimate *board* content (spec §3 Mode A) but out of MDCAT scope,
so §22 would reject an MDCAT-mapped question about them.

---

## Decisions taken (2026-09-14)

1. **Existing 21 Biology statements replaced with the official wording.**
   Approved. Safe because all 1,500 bank questions are `VALIDATED` with zero
   `TestQuestion` / `AnswerHistory` rows, so no student record changed. The
   Biology bank was re-imported afterwards to refresh the denormalized
   `QuestionMapping.learningOutcome` text.
2. **Biology seeded first**; Chemistry (95) and Physics (75) outcomes are to be
   extracted and reviewed the same way before seeding.
3. **Board-only content left out of the MDCAT bank** — Ecosystem, Some Major
   Ecosystems, Man and His Environment, Growth and Development. No pipeline
   change; these belong to MODE A board preparation (§3) when that is built.
4. **English / Logical Reasoning not seeded** (§81).
5. Official difficulty split (15/70/15) now matches `BATCH_DIFFICULTY_TARGETS`
   in the bank, and the outcome text is stored once in
   `lib/data/mdcat-2025-curriculum.ts` and unit-tested against the official
   per-unit inventory so a transcription slip cannot silently shrink the
   syllabus.

## Typographical corrections applied to the official text

Documented so the wording stays auditable — the published PDF contains:

- `3.8` "glycol lipids, glycol proteins" → "glycolipids, glycoproteins"
- `4.3` "Golgi apparatus a Mitochondria" → "and Mitochondria"
- `3.4` "monosaccharaides" → "monosaccharides"
- `2.2` Chemistry unit heading "Planck's Quantum Theory" → "Planck's"
- `8.1` Physics "Columb's Law" → "Coulomb's Law"
- `14.8` Chemistry topic "MOT of Benzene" → "MOT of Benzene (molecular orbital treatment)" — retained as printed because the intent is unclear; flagging for a human check.
- `20.2` Chemistry "types of dies" → "types of dyes"
- `5.2` Chemistry, Physics `11.1`: stray leading/trailing numbering artefacts removed.
- Unclosed parenthesis in `BIO-5.2` closed; full stops restored where the
  column layout swallowed them.