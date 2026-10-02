import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "limit-definition-limiting-reactant",
    text: "In a chemical reaction, the reactant that is consumed completely first and therefore fixes the maximum amount of product that can form is called the:",
    options: ["limiting reactant", "excess reactant", "catalyst", "product"],
    correctIndex: 0,
    explanation:
      "The limiting reactant is used up first, so no further product can be made once it is exhausted, and it alone sets the theoretical amount of product.",
    evidence:
      "A reaction cannot give more product than the amount of the limiting reactant allows.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-1.3",
    concept: "limiting reactant definition",
  },
  {
    key: "limit-substance-left-after-completion",
    text: "After a reaction between the available reactants has gone to completion, the reactant still present in the mixture is the:",
    options: [
      "limiting reactant",
      "reactant that reacted fastest",
      "excess reactant",
      "product of the reverse reaction",
    ],
    correctIndex: 2,
    explanation:
      "The limiting reactant is completely used up, while any reactant supplied above the required mole ratio is left over after the reaction stops.",
    evidence:
      "A reactant present in more than the stoichiometric mole ratio is left over when the reaction ends.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-1.3",
    concept: "excess reactant identity",
  },
  {
    key: "limit-compare-hydrogen-two-mol-oxygen-three-mol",
    text: "A gas mixture holds 2.0 mol of H2 with 3.0 mol of O2. In the reaction 2H2 + O2 -> 2H2O, which comparison of the two reactants is correct?",
    options: [
      "oxygen is limiting, because 3.0/1 is smaller than 2.0/2",
      "oxygen is limiting, because it carries the smaller coefficient",
      "neither reactant is limiting, because they are present in equal moles",
      "hydrogen is limiting, because 2.0/2 is smaller than 3.0/1",
    ],
    correctIndex: 3,
    explanation:
      "Dividing available moles by coefficients gives 2.0/2 = 1.0 for hydrogen and 3.0/1 = 3.0 for oxygen. The smaller value is 1.0, so hydrogen is limiting and at most 2.0 mol of water can form.",
    evidence:
      "The reactant with the smallest value of moles divided by its coefficient limits the amount of product.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-1.3",
    concept: "limiting reactant identification",
  },
  {
    key: "limit-adding-excess-makes-no-product",
    text: "A reaction has reached completion with one reactant in excess. If more of that excess reactant is added while the amount of the limiting reactant is unchanged, the statement that extra product will now be formed is:",
    options: [
      "true, because the excess reactant is converted into product",
      "true, because the reaction is still in progress",
      "false, because the limiting reactant is already exhausted",
      "false, because the excess reactant has become the limiting reactant",
    ],
    correctIndex: 2,
    explanation:
      "The limiting reactant is the only source of product, so once it is gone the added excess reactant has nothing to react with and the amount of product stays the same.",
    evidence:
      "Once the limiting reactant is used up, further product cannot form even if excess reactant remains.",
    questionType: "STATEMENT_BASED",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-1.3",
    concept: "product on adding excess",
  },
  {
    key: "limit-ammonia-from-28g-nitrogen-9g-hydrogen",
    text: "In a reaction N2 + 3H2 -> 2NH3, 28 g of nitrogen is mixed with 9.0 g of hydrogen. What is the maximum mass of ammonia that can be formed?",
    options: ["51 g", "25.5 g", "17 g", "34 g"],
    correctIndex: 3,
    explanation:
      "28 g of N2 is 1.0 mol, a ratio of 1.0/1 = 1.0, and 9.0 g of H2 is 4.5 mol, a ratio of 4.5/3 = 1.5. Nitrogen is limiting, so 1.0 mol of N2 gives 2.0 mol of NH3 = 34 g.",
    evidence:
      "Mass of product is obtained from the moles of the limiting reactant using the mole ratio of the balanced equation.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.3",
    concept: "product from limiting reactant",
  },
  {
    key: "limit-water-from-4g-hydrogen-16g-oxygen",
    text: "For 2H2 + O2 -> 2H2O, 4.0 g of hydrogen is mixed with 16.0 g of oxygen. What mass of water can be obtained at most?",
    options: ["9 g", "36 g", "18 g", "12 g"],
    correctIndex: 2,
    explanation:
      "4.0 g of H2 is 2.0 mol, a ratio of 2.0/2 = 1.0, and 16.0 g of O2 is 0.5 mol, a ratio of 0.5/1 = 0.5. Oxygen is limiting, so 0.5 mol of O2 gives 1.0 mol of H2O = 18 g.",
    evidence:
      "Stoichiometric calculations express the masses of reactants and products in moles first.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.3",
    concept: "product from limiting reactant",
  },
  {
    key: "limit-wrong-answer-18g-water",
    text: "A student mixed 1.0 g of hydrogen with 16.0 g of oxygen for 2H2 + O2 -> 2H2O and reported 18 g of water. The mistake in this calculation is that it:",
    options: [
      "left out the coefficient 2 in front of H2 when forming the ratio",
      "wrote the product as H2O2 instead of H2O",
      "took the molar mass of oxygen as 8 g mol^-1",
      "treated the 0.5 mol of oxygen as fully reactive although hydrogen was insufficient",
    ],
    correctIndex: 3,
    explanation:
      "1.0 g of H2 is 0.5 mol, a ratio of 0.5/2 = 0.25, and 16.0 g of O2 is 0.5 mol, a ratio of 0.5/1 = 0.50, so only 0.5 mol of water, 9 g, can form. The 18 g answer used the excess oxygen as though hydrogen were plentiful.",
    evidence:
      "A product mass calculated from the excess reactant ignores the shortage of the limiting reactant.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-1.3",
    concept: "excess reactant calculation error",
  },
  {
    key: "limit-compare-mixture-p-and-q",
    text: "Two samples are mixed for 2H2 + O2 -> 2H2O. P contains 4.0 g of H2 with 32 g of O2, and Q contains 3.0 g of H2 with 32 g of O2. The correct comparison of maximum water is:",
    options: [
      "P gives at most 27 g of water and Q gives at most 36 g",
      "P gives at most 36 g of water and Q gives at most 27 g",
      "P and Q both give at most 36 g of water",
      "P gives at most 18 g of water and Q gives at most 27 g",
    ],
    correctIndex: 1,
    explanation:
      "In P, 2.0 mol of H2 (ratio 1.0) and 1.0 mol of O2 (ratio 1.0) are in the stoichiometric ratio, giving 2.0 mol of water = 36 g. In Q only 1.5 mol of H2 is present, a ratio of 0.75, so hydrogen limits the water to 1.5 mol = 27 g.",
    evidence:
      "The maximum mass of product from a given mixture follows from its limiting reactant.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-1.3",
    concept: "product comparison",
  },
  {
    key: "limit-sodium-with-water-products",
    text: "When 9.2 g of sodium is allowed to react with 3.6 g of water, the reaction 2Na + 2H2O -> 2NaOH + H2 gives a maximum of:",
    options: [
      "8.0 g of NaOH together with 0.40 g of H2",
      "16.0 g of NaOH together with 0.20 g of H2",
      "8.0 g of NaOH and no hydrogen at all",
      "8.0 g of NaOH together with 0.20 g of H2",
    ],
    correctIndex: 3,
    explanation:
      "9.2 g of Na is 0.40 mol, a ratio of 0.40/2 = 0.20, and 3.6 g of H2O is 0.20 mol, a ratio of 0.20/2 = 0.10. Water is limiting, so 0.20 mol of it gives 0.20 mol of NaOH, 8.0 g, and 0.10 mol of H2, 0.20 g.",
    evidence:
      "A balanced equation fixes the mole ratio in which reactants combine and products appear.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-1.3",
    concept: "product from limiting reactant",
  },
  {
    key: "limit-calcium-carbonate-solid-residue",
    text: "In the reaction CaCO3 -> CaO + CO2 some calcium carbonate is present in excess of the amount that decomposes. The solid material remaining in the vessel when the reaction stops is:",
    options: [
      "only the unreacted calcium carbonate",
      "a mixture of calcium oxide formed and unreacted calcium carbonate",
      "only the calcium oxide produced",
      "a mixture of calcium oxide and calcium hydroxide",
    ],
    correctIndex: 1,
    explanation:
      "The reaction stops only when the calcium carbonate available is used up, so the excess calcium carbonate stays in the vessel mixed with the calcium oxide already formed.",
    evidence:
      "In a decomposition reaction the reactant present in excess remains mixed with the products.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-1.3",
    concept: "excess reactant in decomposition",
  },
  {
    key: "limit-iron-from-ferric-oxide",
    text: "For Fe2O3 + 3CO -> 2Fe + 3CO2, 16.0 g of ferric oxide is mixed with 26.0 g of carbon monoxide. What is the maximum mass of iron obtainable?",
    options: ["5.6 g", "16.8 g", "11.2 g", "3.2 g"],
    correctIndex: 2,
    explanation:
      "16.0 g of Fe2O3 is 0.10 mol, a ratio of 0.10/1 = 0.10, and 26.0 g of CO is 1.0 mol, a ratio of 1.0/3 = 0.33. Ferric oxide is limiting, so 0.10 mol gives 0.20 mol of Fe = 11.2 g.",
    evidence:
      "In Fe2O3 + 3CO -> 2Fe + 3CO2 the coefficients give the mole ratio of the reaction.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-1.3",
    concept: "product from limiting reactant",
  },
  {
    key: "limit-phosphorus-pentoxide-from-moles",
    text: "In the reaction P4 + 5O2 -> P4O10, a mixture holds 0.10 mol of P4 and 0.25 mol of O2. The maximum amount of P4O10 that can form is:",
    options: [
      "0.10 mol, because phosphorus is limiting",
      "0.05 mol, because oxygen is limiting",
      "0.20 mol, because the two coefficients are added",
      "0.25 mol, because the amount of oxygen sets it",
    ],
    correctIndex: 1,
    explanation:
      "0.10/1 = 0.10 for P4 and 0.25/5 = 0.05 for O2. Oxygen gives the smaller ratio and is limiting, so 0.05 mol of O2 forms 0.05 mol of P4O10.",
    evidence:
      "The ratio of available moles to coefficient identifies the limiting reactant in P4 + 5O2 -> P4O10.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-1.3",
    concept: "limiting reactant from moles",
  },
  {
    key: "limit-order-of-calculation-steps",
    text: "In which order should limiting-reagent analysis on a balanced equation be carried out?",
    options: [
      "convert each reactant mass to moles, divide by its coefficient, compare the results, then use the smallest value for the product",
      "compare the masses directly, take the heavier reactant, convert the product to grams",
      "balance the equation after calculating the product, then compare the coefficients",
      "divide each coefficient by its mass, choose the largest value, then convert to moles",
    ],
    correctIndex: 0,
    explanation:
      "Moles of each reactant are divided by its coefficient in the balanced equation, and the smallest result identifies the limiting reactant whose mole ratio then fixes the product.",
    evidence:
      "Limiting-reagent calculations begin by converting masses of reactants into moles.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-1.3",
    concept: "limiting reactant procedure",
  },
  {
    key: "limit-statement-oxygen-limiting-half-mole",
    text: "When 0.50 mol of hydrogen is mixed with 0.50 mol of oxygen in 2H2 + O2 -> 2H2O, the claim that oxygen is the limiting reactant is:",
    options: [
      "correct, because oxygen has the smaller coefficient in the equation",
      "incorrect, because 0.50/1 is larger than 0.50/2",
      "correct, because oxygen is the more reactive of the two gases",
      "incorrect, because reactants in equal amounts cannot react",
    ],
    correctIndex: 1,
    explanation:
      "Dividing by coefficients gives 0.50/2 = 0.25 for H2 and 0.50/1 = 0.50 for O2, so hydrogen is limiting and the water is capped at 0.50 mol, or 9 g. Oxygen is present in excess.",
    evidence:
      "Moles divided by the coefficients of the balanced equation decide which reactant is limiting.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-1.3",
    concept: "limiting reactant statement",
  },
  {
    key: "limit-hydrogen-raised-for-17g-ammonia",
    text: "Suppose 14 g of nitrogen is available together with 2.0 g of hydrogen in N2 + 3H2 -> 2NH3. To obtain 17 g of NH3, the reactant that must be supplied in greater amount is:",
    options: [
      "nitrogen, which must be raised to 28 g",
      "nitrogen, which must be raised to 3.0 g",
      "both reactants, which must be doubled in mass",
      "hydrogen, which must be raised to 3.0 g",
    ],
    correctIndex: 3,
    explanation:
      "17 g of NH3 is 1.0 mol, which needs 0.50 mol of N2 (14 g, already present) and 1.5 mol of H2 (3.0 g). Only 2.0 g of H2 is available, so hydrogen is the limiting reactant and must be increased to 3.0 g.",
    evidence:
      "To raise the product yield the limiting reactant must be supplied in greater amount.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-1.3",
    concept: "raising limiting reactant amount",
  },
  {
    key: "limit-unreacted-hydrogen-mass",
    text: "For N2 + 3H2 -> 2NH3, 28 g of nitrogen and 12 g of hydrogen react as far as they can. What mass of hydrogen is left unreacted?",
    options: ["3.0 g", "6.0 g", "9.0 g", "0.0 g"],
    correctIndex: 1,
    explanation:
      "28 g of N2 is 1.0 mol, a ratio of 1.0/1 = 1.0, and 12 g of H2 is 6.0 mol, a ratio of 6.0/3 = 2.0. Nitrogen is limiting and uses 3.0 mol of H2 = 6.0 g, so 12 - 6 = 6.0 g of hydrogen remains.",
    evidence:
      "The excess reactant left after a reaction is the available amount minus the amount the limiting reactant consumes.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-1.3",
    concept: "unreacted hydrogen mass",
  },
  {
    key: "limit-two-mixtures-four-mol-and-one-mol",
    text: "Two mixtures are prepared for 2H2 + O2 -> 2H2O: X holds 4.0 mol H2 with 1.0 mol O2, and Y holds 1.0 mol H2 with 3.0 mol O2. The limiting reactants are:",
    options: [
      "hydrogen in X and oxygen in Y",
      "oxygen in both X and Y",
      "hydrogen in both X and Y",
      "oxygen in X and hydrogen in Y",
    ],
    correctIndex: 3,
    explanation:
      "For X the ratios are 4.0/2 = 2.0 and 1.0/1 = 1.0, so oxygen is limiting. For Y they are 1.0/2 = 0.5 and 3.0/1 = 3.0, so hydrogen is limiting.",
    evidence:
      "Each reactant is judged by its own ratio of available moles to its coefficient.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-1.3",
    concept: "limiting reactant comparison",
  },
  {
    key: "limit-why-extra-excess-gives-nothing",
    text: "A reaction between A and B goes to completion and 5.0 g of reactant A is still present afterwards. More of A is then added and stirred. The amount of product does not increase because:",
    options: [
      "the limiting reactant B was already used up completely",
      "the extra A dissolves in the product already formed",
      "the temperature of the mixture falls when solid is added",
      "the reaction rate doubles but the yield also doubles",
    ],
    correctIndex: 0,
    explanation:
      "Product forms only as long as the limiting reactant is present, and it was fully consumed in the first step, so the added A has nothing left to convert.",
    evidence:
      "The theoretical yield of a reaction is fixed by the amount of the limiting reactant.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-1.3",
    concept: "reason for fixed yield",
  },
  {
    key: "limit-stoichiometric-nitrogen-hydrogen-mixture",
    text: "A mixture of 14 g of nitrogen and 3.0 g of hydrogen is used for the reaction N2 + 3H2 -> 2NH3. The correct description of this mixture is:",
    options: [
      "nitrogen is the limiting reactant and 3.0 g of hydrogen will be left over",
      "hydrogen is the limiting reactant and 14 g of nitrogen will be left over",
      "no reaction is possible unless a further amount of one reactant is added",
      "the reactants are in the stoichiometric ratio, so both are used up completely",
    ],
    correctIndex: 3,
    explanation:
      "14 g of N2 is 0.50 mol and 3.0 g of H2 is 1.5 mol, giving ratios of 0.50/1 = 0.50 and 1.5/3 = 0.50. Equal ratios mean neither reactant is in excess and both are completely consumed.",
    evidence:
      "A stoichiometric mixture holds reactants in exactly the mole ratio of the balanced equation.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-1.3",
    concept: "stoichiometric mixture",
  },
  {
    key: "limit-ferric-oxide-carbon-monoxide-one-mol-each",
    text: "In the reaction Fe2O3 + 3CO -> 2Fe + 3CO2, 1.0 mol of Fe2O3 is mixed with 1.0 mol of CO. The limiting reactant is:",
    options: [
      "carbon monoxide, because the equation needs three moles of CO for every mole of Fe2O3",
      "ferric oxide, because the equation needs only one mole of Fe2O3 for three moles of CO",
      "carbon monoxide, because it has the smaller molar mass",
      "ferric oxide, because it is the solid reactant",
    ],
    correctIndex: 0,
    explanation:
      "The equation requires three moles of CO for each mole of Fe2O3, so 1.0 mol of CO cannot consume 1.0 mol of Fe2O3. Carbon monoxide is used up first and ferric oxide is left over.",
    evidence:
      "Coefficients in a balanced equation state the relative moles in which substances react.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-1.3",
    concept: "coefficient and limiting reactant",
  },
  {
    key: "limit-ammonia-from-5-6-l-nitrogen",
    text: "At STP, 5.6 L of nitrogen is mixed with 6.0 g of hydrogen in the reaction N2 + 3H2 -> 2NH3. The maximum mass of ammonia obtainable is:",
    options: ["34 g", "8.5 g", "17 g", "3.4 g"],
    correctIndex: 1,
    explanation:
      "5.6 L at STP is 5.6/22.4 = 0.25 mol of N2, a ratio of 0.25/1 = 0.25, and 6.0 g of H2 is 3.0 mol, a ratio of 3.0/3 = 1.0. Nitrogen is limiting, so 0.25 mol gives 0.50 mol of NH3 = 8.5 g.",
    evidence:
      "At STP one mole of any gas occupies 22.4 L, so a gas volume is first converted to moles.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-1.3",
    concept: "product from gas volume",
  },
  {
    key: "limit-unreacted-carbon-monoxide-mass",
    text: "Thirty-two grams of ferric oxide is mixed with 42.0 g of carbon monoxide in the reaction Fe2O3 + 3CO -> 2Fe + 3CO2. After the reaction is complete, the mass of carbon monoxide left over is:",
    options: ["25.2 g", "8.4 g", "16.8 g", "42.0 g"],
    correctIndex: 0,
    explanation:
      "32.0 g of Fe2O3 is 0.20 mol, a ratio of 0.20/1 = 0.20, and 42.0 g of CO is 1.5 mol, a ratio of 1.5/3 = 0.50. Ferric oxide is limiting and uses 0.60 mol of CO = 16.8 g, so 42.0 - 16.8 = 25.2 g of CO remains.",
    evidence:
      "Carbon monoxide is used three moles at a time for each mole of ferric oxide that reacts.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-1.3",
    concept: "unreacted carbon monoxide",
  },
  {
    key: "limit-unreacted-phosphorus-amount",
    text: "For P4 + 5O2 -> P4O10, 0.20 mol of P4 and 0.625 mol of O2 are mixed and the reaction goes to completion. The amount of P4 left unreacted is:",
    options: ["0.125 mol", "0.20 mol", "0.150 mol", "0.075 mol"],
    correctIndex: 3,
    explanation:
      "0.20/1 = 0.20 for P4 and 0.625/5 = 0.125 for O2, so oxygen is limiting. Five moles of O2 consume one mole of P4, so 0.125 mol of O2 uses 0.125 mol of P4 and 0.20 - 0.125 = 0.075 mol of P4 remains.",
    evidence:
      "In P4 + 5O2 -> P4O10 five moles of oxygen are needed for each mole of P4.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-1.3",
    concept: "unreacted phosphorus amount",
  },
  {
    key: "limit-extra-oxygen-same-water",
    text: "Suppose that 3.0 g of hydrogen is mixed with 48.0 g of oxygen in the reaction 2H2 + O2 -> 2H2O and the reaction is complete. If a further 12.0 g of oxygen is then added, the maximum mass of water is:",
    options: [
      "27 g, the same as before, because hydrogen still limits the reaction",
      "36 g, because the added oxygen also reacts",
      "36 g before the addition and 27 g after it",
      "27 g before the addition and 36 g after it",
    ],
    correctIndex: 0,
    explanation:
      "3.0 g of H2 is 1.5 mol, a ratio of 1.5/2 = 0.75, and 48.0 g of O2 is 1.5 mol, a ratio of 1.5/1 = 1.5, so hydrogen limits the water to 1.5 mol = 27 g. The added oxygen finds no hydrogen left to react with.",
    evidence:
      "The amount of product is set by the reactant that is completely used up first.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-1.3",
    concept: "constant yield from excess",
  },
  {
    key: "limit-steps-for-unreacted-amount",
    text: "After the limiting reactant of a reaction has been identified, the correct order for finding how much excess reactant is left is:",
    options: [
      "moles of excess required, divide by the amount available, multiply by the product mass, then report",
      "moles of excess available, moles of excess required by the limiting reactant, subtract, then convert to mass",
      "mass of excess available, divide by the mass of the limiting reactant, then convert to moles",
      "total mass of reactants, subtract the product mass, then divide by the limiting coefficient",
    ],
    correctIndex: 1,
    explanation:
      "The required amount of the excess reactant comes from the mole ratio set by the limiting reactant, and the amount left is the available amount minus that requirement, converted to mass if needed.",
    evidence:
      "The unreacted excess is found by subtracting the required amount from the available amount.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-1.3",
    concept: "steps for excess amount",
  },
];
