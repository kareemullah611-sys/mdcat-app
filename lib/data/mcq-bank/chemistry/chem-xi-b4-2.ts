import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "buffer-ph-resistance-definition",
    text: "A solution that holds its pH nearly constant when a small amount of acid or base is added to it is called a",
    options: ["Buffer solution", "Neutral solution", "Amphoteric solution", "Saturated solution"],
    correctIndex: 0,
    explanation:
      "A buffer is defined by this resistance of pH to the addition of small amounts of strong acid or strong base, which comes from the two components it contains.",
    evidence:
      "A buffer solution resists any change in pH when small amounts of acid or base are added to it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-6.6",
    concept: "buffer solution definition",
  },
  {
    key: "buffer-salt-supplies-conjugate-base",
    text: "For a buffer to be prepared from a weak acid, the salt that is added to it must be",
    options: [
      "the salt of a strong acid with a strong base",
      "the salt of that same weak acid, to supply its conjugate base",
      "the salt of a completely unrelated weak acid",
      "any soluble salt, whatever acid it was made from",
    ],
    correctIndex: 1,
    explanation:
      "The salt must dissociate to give the conjugate base of the weak acid itself, so that a weak acid and its conjugate base are both present in appreciable amounts.",
    evidence:
      "A buffer of a weak acid is made by dissolving that weak acid together with a salt that supplies its conjugate base.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-6.6",
    concept: "conjugate base salt",
  },
  {
    key: "buffer-weak-base-conjugate-acid-salt",
    text: "A basic buffer is prepared by dissolving a weak base together with",
    options: [
      "a salt formed from a strong base and a strong acid",
      "the strong acid that would neutralise the base completely",
      "a salt that supplies the conjugate acid of that weak base",
      "a large volume of pure water and nothing else",
    ],
    correctIndex: 2,
    explanation:
      "A weak base needs its conjugate acid as the second component, just as a weak acid needs its conjugate base, and the salt provides that conjugate acid.",
    evidence:
      "A basic buffer is prepared from a weak base and the salt of its conjugate acid.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "conjugate acid salt",
  },
  {
    key: "buffer-acetic-acid-sodium-acetate-pair",
    text: "Which pair of substances gives a buffer solution when both are dissolved in the same flask?",
    options: ["HCl and NaCl", "HNO3 and NH4NO3", "NaOH and CH3COONa", "CH3COOH and CH3COONa"],
    correctIndex: 3,
    explanation:
      "Acetic acid is a weak acid and sodium acetate dissociates to give the acetate ion, its conjugate base, so the two together form an acid buffer.",
    evidence:
      "A mixture of a weak acid such as acetic acid and a salt of that acid such as sodium acetate forms a buffer solution.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-6.6",
    concept: "acidic buffer mixture",
  },
  {
    key: "buffer-added-acid-consumed-by-anion",
    text: "When a small amount of strong acid is added to a buffer of a weak acid and its salt, the incoming hydrogen ions are",
    options: [
      "taken up by the conjugate base anion of the salt to form more of the weak acid",
      "neutralised by water to produce a large excess of hydroxide ions",
      "left free in solution, because a weak acid cannot react with them",
      "precipitated as an insoluble salt at the bottom of the solution",
    ],
    correctIndex: 0,
    explanation:
      "The conjugate base combines with the added hydrogen ions to regenerate the weak acid, so the ratio of salt to acid barely alters and the pH changes very little.",
    evidence:
      "When acid is added to a buffer, the anion of the salt combines with the hydrogen ions to form more of the weak acid.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-6.6",
    concept: "added acid consumption",
  },
  {
    key: "buffer-added-base-consumed-by-weak-acid",
    text: "Hydroxide ions added to a buffer of a weak acid and its salt are removed by the",
    options: [
      "conjugate base anion of the salt, forming a stronger base",
      "weak acid of the buffer, giving more of the conjugate base and water",
      "cation of the salt, which releases bubbles of hydrogen gas",
      "water alone, converting it into a fixed amount of strong base",
    ],
    correctIndex: 1,
    explanation:
      "The weak acid donates a proton to the added hydroxide ion, forming water and more conjugate base, which is why the buffer resists the added base.",
    evidence:
      "When base is added to a buffer, the weak acid neutralises the hydroxide ions and more of the salt is formed.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-6.6",
    concept: "added base consumption",
  },
  {
    key: "buffer-equal-ratios-give-ph-equal-pka",
    text: "When a buffer is made with equal concentrations of the weak acid and its salt, the Henderson-Hasselbalch equation gives a pH equal to the",
    options: ["pKb of the salt", "concentration of the salt", "pKa of the weak acid", "solubility of the weak acid"],
    correctIndex: 2,
    explanation:
      "Equal concentrations make the ratio of salt to acid equal to one, and the logarithm of one is zero, so the equation reduces to pH = pKa.",
    evidence:
      "The pH of a buffer is given by pH = pKa + log([salt]/[acid]), and equals pKa when the two concentrations are equal.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "pH equal to pKa",
  },
  {
    key: "buffer-strong-acid-solution-not-a-buffer",
    text: "Equal volumes of a 0.1 M hydrochloric acid solution and of a buffer at the same pH respond quite differently when equal amounts of strong base are added to each. The hydrochloric acid solution responds because the",
    options: [
      "solution is a gas at room temperature and so has no pH of its own",
      "buffer mixture has no dissolved salt available to react with the base",
      "strong acid solution is the only kind of solution whose pH can be measured at all",
      "hydrochloric acid solution holds no anion able to combine with the added hydroxide ions",
    ],
    correctIndex: 3,
    explanation:
      "Hydrochloric acid is fully ionised and offers only H+ and Cl- ions, with no weak acid and no conjugate base, so added hydroxide ions are not taken up and the pH rises sharply.",
    evidence:
      "A solution of a strong acid is not a buffer because it contains no weak acid together with its conjugate base.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "strong acid versus buffer",
  },
  {
    key: "buffer-common-ion-effect-principle",
    text: "Buffer action is a direct consequence of",
    options: [
      "the common-ion effect of the salt on the dissociation of the weak acid",
      "the complete ionisation of the dissolved salt in water",
      "the high electrical conductivity of every ionic solution",
      "the very low solubility of the weak acid in cold water",
    ],
    correctIndex: 0,
    explanation:
      "The salt supplies a common ion that suppresses dissociation of the weak acid, and any hydrogen ions added are taken up by this common ion as the equilibrium shifts back, which is exactly the common-ion effect.",
    evidence:
      "The buffer action of a weak acid and its salt rests on the common-ion effect, which suppresses the dissociation of the weak acid.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-6.6",
    concept: "common-ion effect",
  },
  {
    key: "buffer-ph-of-equal-acetate-mixture",
    text: "A buffer is prepared from 0.10 M acetic acid, pKa 4.74, and 0.10 M sodium acetate. Its pH is approximately",
    options: ["3.74", "4.74", "5.74", "7.00"],
    correctIndex: 1,
    explanation:
      "The ratio of salt to acid is 0.10/0.10 = 1, so the logarithmic term is zero and the pH equals the pKa of the acetic acid, 4.74.",
    evidence:
      "The pH of a buffer is given by pH = pKa + log([salt]/[acid]).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-6.6",
    concept: "buffer pH calculation",
  },
  {
    key: "buffer-ph-with-threefold-salt",
    text: "A buffer contains 0.30 M sodium acetate and 0.10 M acetic acid, pKa 4.74. The pH is about",
    options: ["4.26", "4.98", "5.22", "9.26"],
    correctIndex: 2,
    explanation:
      "The ratio of salt to acid is 3, and log 3 is about 0.48, so pH = 4.74 + 0.48 = 5.22, a little above the pKa as expected from the excess of salt.",
    evidence:
      "The pH of a buffer is given by pH = pKa + log([salt]/[acid]).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "buffer pH calculation",
  },
  {
    key: "buffer-ph-with-tenfold-salt",
    text: "For a buffer with pKa 4.74 in which the concentration of the salt is ten times that of the weak acid, the pH is",
    options: ["3.74", "4.74", "0.74", "5.74"],
    correctIndex: 3,
    explanation:
      "A tenfold excess of salt makes the logarithmic term equal to log 10 = 1, so the pH stands exactly one unit above the pKa, at 5.74.",
    evidence:
      "In pH = pKa + log([salt]/[acid]) a tenfold ratio of salt to acid raises the pH by one unit above pKa.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-6.6",
    concept: "salt to acid ratio",
  },
  {
    key: "buffer-ph-with-trace-conjugate-base",
    text: "A solution contains 0.10 M acetic acid, pKa 4.74, but only 0.0010 M sodium acetate. Applying the buffer equation, its pH is about",
    options: ["2.74", "1.74", "7.74", "8.74"],
    correctIndex: 0,
    explanation:
      "The ratio of salt to acid is 0.01, and log 0.01 is minus 2, so pH = 4.74 - 2 = 2.74, far below the pKa because too little conjugate base is present for the mixture to hold its pH.",
    evidence:
      "A buffer works best when the weak acid and its salt are present in comparable amounts, and its pH is pKa + log([salt]/[acid]).",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-6.6",
    concept: "unbalanced buffer pair",
  },
  {
    key: "buffer-blood-ph-from-carbonic-pair",
    text: "In the bicarbonate system of blood the pKa of the carbonic acid pair is 6.35. If the ratio of hydrogen carbonate ion to carbonic acid is 10 to 1, the pH is",
    options: ["5.35", "7.35", "6.45", "8.35"],
    correctIndex: 1,
    explanation:
      "A ratio of 10 to 1 gives a logarithmic term of 1, so pH = 6.35 + 1 = 7.35, which lies on the slightly alkaline side as blood normally is.",
    evidence:
      "The carbonic acid and hydrogen carbonate system buffers blood, holding its pH close to 7.4.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-6.6",
    concept: "blood buffer pH",
  },
  {
    key: "buffer-ph-fall-pattern-as-acid-added",
    text: "Increasing amounts of strong acid are added in turn to a weak acid buffer. The pattern of change in pH is that it",
    options: [
      "falls sharply at the first drop and then stays constant for all the rest of the addition",
      "rises steadily from the first drop and keeps rising at a constant rate",
      "stays almost constant at first and then falls sharply once the salt has been used up",
      "alternates up and down with each addition, returning to its first value after every four drops",
    ],
    correctIndex: 2,
    explanation:
      "While conjugate base remains, the added hydrogen ions are consumed and the pH hardly moves, but once that supply is exhausted no buffering is left and the pH drops sharply.",
    evidence:
      "A buffer resists change of pH only for limited amounts of added acid, and breaks down when a large amount is added.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "buffer breakdown pattern",
  },
  {
    key: "buffer-blood-carbon-dioxide-sequence",
    text: "In blood, an increase in carbon dioxide is followed by a chain of changes that protects the pH. The correct order is",
    options: [
      "hydrogen carbonate ions give up carbon dioxide, carbonic acid forms in the blood, and the hydrogen ions are released",
      "hydrogen carbonate ions are converted to glucose, carbon dioxide is exhaled by the lungs, and the pH is unchanged",
      "carbon dioxide is converted directly to carbonic acid by the red cells and the alkalinity of the blood rises",
      "carbon dioxide forms carbonic acid, carbonic acid releases hydrogen ions, and the hydrogen carbonate ions of the buffer take them up",
    ],
    correctIndex: 3,
    explanation:
      "Dissolved carbon dioxide gives carbonic acid, which releases hydrogen ions, and the hydrogen carbonate ions of the buffer combine with them, so the pH falls only slightly.",
    evidence:
      "The carbonic acid and hydrogen carbonate buffer of blood takes up the hydrogen ions formed when carbon dioxide dissolves in the plasma.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-6.6",
    concept: "blood buffer sequence",
  },
  {
    key: "buffer-composition-claim-check",
    text: "Four claims about buffer mixtures are given. A: a weak acid mixed with the salt of an unrelated strong acid is a buffer. B: a weak acid together with the salt of that same weak acid is a buffer. C: a weak base together with the salt of its conjugate acid is a buffer. D: a buffer holds its pH steady because added H+ and OH- ions are consumed by its two components. The one incorrect claim is",
    options: ["A", "B", "C", "D"],
    correctIndex: 0,
    explanation:
      "Buffer action requires the salt to supply the conjugate base of the weak acid actually present, and a salt of an unrelated acid provides no such ion to take up added hydrogen ions.",
    evidence:
      "A buffer contains a weak acid and the salt of that same weak acid, or a weak base and the salt of its conjugate acid.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "buffer composition claims",
  },
  {
    key: "buffer-working-claim-check",
    text: "Four statements about the working of a buffer are given. A: it resists a pH change only while both of its components remain in appreciable amounts. B: it goes on neutralising added acid and base without any limit. C: a large excess of strong acid added to it finally lowers the pH sharply. D: dilution with water leaves its pH nearly unchanged but reduces its capacity. The one incorrect statement is",
    options: ["A", "B", "C", "D"],
    correctIndex: 1,
    explanation:
      "Only a fixed amount of each component is available to react, so the buffer neutralises a limited quantity of acid or base and then loses its resistance.",
    evidence:
      "A buffer is not a neutraliser, since its action is limited and it breaks down when a large amount of acid or base is added.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "buffer limitation claims",
  },
  {
    key: "buffer-effect-of-dilution",
    text: "A buffer is diluted tenfold by adding pure water. What happens to it?",
    options: [
      "Its pH falls by one unit, since the weak acid has become ten times more dilute",
      "Its pH rises by one unit, since the salt has become ten times more dilute than the acid",
      "Its pH is almost unchanged, but the quantity of added acid or base it can absorb becomes much smaller",
      "Both components hydrolyse completely and the diluted solution turns neutral",
    ],
    correctIndex: 2,
    explanation:
      "Dilution reduces the salt and the weak acid by the same factor, so their ratio and therefore the pH are nearly unchanged, but the reserve of each component falls and so does the buffer capacity.",
    evidence:
      "Diluting a buffer has little effect on its pH but lowers its buffer capacity, because the amounts of both components are reduced.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-6.6",
    concept: "dilution and capacity",
  },
  {
    key: "buffer-ratio-of-greatest-capacity",
    text: "A given total amount of buffer solute is dissolved in water and the ratio of salt to weak acid is then varied. The buffer resists pH change best when that ratio is",
    options: [
      "one to a thousand, so that added base is used up before added acid",
      "as large as the solubility of the salt allows, so that the buffer lasts longest",
      "one to a hundred, so that the pH lies well above the pKa of the acid",
      "one to one, so that both components are present in the greatest possible amount",
    ],
    correctIndex: 3,
    explanation:
      "With the total amount of solute fixed, equal amounts of salt and weak acid leave the largest reserve of each component, so the capacity against both added acid and added base is greatest at a one to one ratio.",
    evidence:
      "The buffer capacity is greatest when the concentrations of the weak acid and its salt are equal, that is when the pH equals pKa.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-6.6",
    concept: "maximum buffer capacity",
  },
  {
    key: "buffer-main-blood-buffing-pair",
    text: "The main buffer system that holds the pH of human blood steady consists of",
    options: [
      "carbonic acid together with the hydrogen carbonate ion",
      "hydrochloric acid together with the chloride ion",
      "sulfuric acid together with the hydrogen sulfate ion",
      "nitric acid together with the nitrate ion",
    ],
    correctIndex: 0,
    explanation:
      "Blood carries carbonic acid with its conjugate base, so hydrogen ions released by metabolic activity are taken up by the hydrogen carbonate ion while added base is taken up by the carbonic acid.",
    evidence:
      "Blood is buffered chiefly by the carbonic acid and hydrogen carbonate system, which holds the pH near 7.4.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-6.6",
    concept: "blood buffer system",
  },
  {
    key: "buffer-acidic-and-basic-buffer-composition",
    text: "An acidic buffer and a basic buffer differ in that",
    options: [
      "the acidic one is built from a strong acid while the basic one is built from a weak base",
      "the acidic one is a weak acid with the salt of that acid, and the basic one a weak base with the salt of its conjugate acid",
      "only the basic one is able to resist the addition of an acid to it",
      "the acidic one has a pH above seven while the basic one has a pH below seven",
    ],
    correctIndex: 1,
    explanation:
      "The two kinds of buffer differ in their components: an acidic buffer pairs a weak acid with the salt of that acid, while a basic buffer pairs a weak base with the salt of its conjugate acid.",
    evidence:
      "An acidic buffer is a weak acid with the salt of that acid, and a basic buffer is a weak base with the salt of its conjugate acid.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-6.6",
    concept: "acidic versus basic buffer",
  },
  {
    key: "buffer-preferred-over-strong-neutraliser",
    text: "A process generates acid steadily and the pH must be held near a set value. A buffer is preferred to sodium hydroxide for this purpose because it",
    options: [
      "removes more acid per gram than any strong base can",
      "converts the acid completely into water, as a strong base does",
      "holds the pH near the required value as acid is generated, whereas sodium hydroxide must be dosed in a fixed ratio that overshoots easily",
      "can correct a pH that has already fallen as low as one",
    ],
    correctIndex: 2,
    explanation:
      "A buffer is not a neutraliser: it absorbs the added acid gradually and keeps the pH near its set value over a range of amounts, whereas a strong base must be matched to the acid by calculation and a slight excess moves the pH far.",
    evidence:
      "A buffer is not a neutraliser, because it can only absorb limited amounts of added acid or base before it breaks down.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-6.6",
    concept: "buffer versus neutraliser",
  },
  {
    key: "buffer-ratio-for-required-ph",
    text: "A solution must be held at pH 5.0 with a buffer made from acetic acid, pKa 4.74. The ratio of sodium acetate to acetic acid required is closest to",
    options: ["0.30", "0.60", "6.0", "1.8"],
    correctIndex: 3,
    explanation:
      "Rearranging the buffer equation gives log([salt]/[acid]) = 5.0 - 4.74 = 0.26, and 10 raised to 0.26 is about 1.8, so slightly more salt than acid is needed to reach that pH.",
    evidence:
      "The buffer equation pH = pKa + log([salt]/[acid]) shows that a pH above pKa requires the salt to exceed the weak acid.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-6.6",
    concept: "ratio for target pH",
  },
  {
    key: "buffer-ratio-after-base-addition",
    text: "A buffer is made from 0.20 mol of a weak acid and 0.20 mol of its salt. After 0.10 mol of strong base has been added, the ratio of salt to acid is about",
    options: ["3.0", "1.0", "0.33", "2.0"],
    correctIndex: 0,
    explanation:
      "The added base converts an equal amount of weak acid into salt, so the acid falls to 0.10 mol and the salt rises to 0.30 mol, a ratio of 3.0 that raises the pH by only log 3, about half a unit.",
    evidence:
      "Added hydroxide ions are neutralised by the weak acid of the buffer to form more of the salt, altering the salt to acid ratio only slightly.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-6.6",
    concept: "ratio after base addition",
  },
];
