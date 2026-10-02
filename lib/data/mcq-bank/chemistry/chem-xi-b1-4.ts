import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "stoich2-heating-fixed-number-of-molecules",
    text: "How does the volume occupied by a fixed number of gas molecules change when the gas is heated in a container that can expand while its pressure stays constant?",
    options: [
      "The volume decreases, because the gas becomes denser as its temperature rises at constant pressure",
      "The volume stays the same, because the number of molecules in the sample has not changed",
      "The volume increases, because the average kinetic energy of the molecules rises and they move further apart on average",
      "The volume increases only if the gas is monoatomic, since diatomic molecules resist expansion",
    ],
    correctIndex: 2,
    explanation:
      "At constant pressure, volume is proportional to absolute temperature, so one mole of gas grows from 22.4 L at 0 C to about 24.4 L at 25 C. The number of molecules is fixed, but their average kinetic energy and the average separation between them both rise with temperature.",
    evidence:
      "At 0 C and 760 mmHg one mole of any gas occupies 22.4 L, and the volume of a fixed amount of gas increases in direct proportion to absolute temperature when pressure is held constant.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-1.1",
    concept: "molar volume variation",
  },
  {
    key: "stoich2-definition-of-the-mole",
    text: "Avogadro's constant, 6.022 x 10^23 mol^-1, is defined so that one mole of any substance contains the same number of particles as the number of atoms present in",
    options: [
      "exactly 1 g of hydrogen-1",
      "exactly 12 g of carbon-12",
      "exactly 100 g of any pure element",
      "exactly 6.022 x 10^23 g of any substance",
    ],
    correctIndex: 1,
    explanation:
      "The mole is the amount of a substance that contains as many elementary entities as there are atoms in exactly 12 g of carbon-12, and that number is 6.022 x 10^23. This is what allows a mass in grams to be converted into a count of particles.",
    evidence:
      "A mole is the amount of a substance that contains 6.022 x 10^23 of its constituent particles, equal to the number of atoms in 12 g of carbon-12.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "CHEM-1.1",
    concept: "definition of the mole",
  },
  {
    key: "stoich2-no2-molecules-to-mass",
    text: "The mass of a sample of nitrogen dioxide, NO2, that contains 1.204 x 10^23 molecules is about",
    options: ["4.6 g", "18.4 g", "92.0 g", "9.2 g"],
    correctIndex: 3,
    explanation:
      "The number of moles is 1.204 x 10^23 / 6.022 x 10^23 = 0.2 mol, and the molar mass of NO2 is 14 + 2(16) = 46 g mol^-1, so the mass is 0.2 x 46 = 9.2 g.",
    evidence:
      "The number of moles in a sample is obtained by dividing the number of particles present by Avogadro's constant of 6.022 x 10^23 mol^-1.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-1.1",
    concept: "particles to mass",
  },
  {
    key: "stoich2-methane-volume-at-stp",
    text: "At STP, 3.2 g of methane, CH4, occupies a volume of about",
    options: ["0.448 L", "4.48 L", "2.24 L", "44.8 L"],
    correctIndex: 1,
    explanation:
      "The molar mass of CH4 is 12 + 4 = 16 g mol^-1, so 3.2 g is 3.2 / 16 = 0.2 mol. At STP one mole of gas occupies 22.4 L, giving 0.2 x 22.4 = 4.48 L.",
    evidence:
      "The volume of a gas at STP is found by converting the mass to moles and multiplying by the molar volume of 22.4 L per mole.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-1.1",
    concept: "gas volume from mass",
  },
  {
    key: "stoich2-water-decomposition-steps",
    text: "Which sequence correctly converts 18 g of water into the mass of oxygen released when water is decomposed by the equation 2H2O -> 2H2 + O2?",
    options: [
      "Convert grams of water directly into moles of oxygen using the molar mass of O2, then multiply by 18",
      "Multiply the grams of water by the ratio 16/18 to get the mass of oxygen, then convert that mass to litres at STP",
      "Convert grams of water to moles, apply the 2:1 mole ratio to obtain moles of O2, then convert those moles to grams",
      "Add the molar masses of 18 g of water and 32 g of oxygen, then divide the total by 44",
    ],
    correctIndex: 2,
    explanation:
      "18 g of H2O is 18 / 18 = 1 mol, and the equation shows 2 mol of water producing 1 mol of O2, so 0.5 mol of oxygen forms, with a mass of 0.5 x 32 = 16 g. Each stage must use moles, because only moles are shared between the coefficients and the masses.",
    evidence:
      "A balanced equation relates the number of moles of reactants and products, so a stoichiometric calculation is completed in three steps: mass to moles, mole ratio, moles to mass.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-1.1",
    concept: "stoichiometric procedure",
  },
  {
    key: "stoich2-why-coefficients-give-mole-ratios",
    text: "Why may the coefficients of a balanced equation be used directly as mole ratios in a calculation?",
    options: [
      "Because the coefficients were chosen to give the smallest possible whole-number ratio of moles of each reactant",
      "Because a balanced equation conserves the atoms of each element, so its coefficients count the same number of particles on both sides",
      "Because the coefficients give the ratio of the volumes the gases would occupy at 25 C and 1 atm",
      "Because the mass of each reactant always equals the mass of each product in a balanced equation",
    ],
    correctIndex: 1,
    explanation:
      "Atom conservation forces the coefficients to represent fixed numbers of particles, so they can be read as mole ratios. The other claims fail: coefficients are ratios of moles rather than volumes or masses, and in a balanced equation the total mass of reactants equals the total mass of products, not each mass separately.",
    evidence:
      "A balanced chemical equation obeys the law of conservation of mass, and the coefficients give the relative number of moles of each reactant and product.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "CHEM-1.1",
    concept: "meaning of coefficients",
  },
  {
    key: "stoich2-hydrogen-sulfide-oxygen-demand",
    text: "For the reaction 2H2S + 3O2 -> 2SO2 + 2H2O, how many moles of O2 are required to burn 5.0 mol of H2S completely?",
    options: ["7.5 mol", "2.5 mol", "3.3 mol", "10.0 mol"],
    correctIndex: 0,
    explanation:
      "The equation gives a ratio of 3 mol O2 for every 2 mol H2S, so 5.0 mol of H2S needs 5.0 x 3/2 = 7.5 mol of O2.",
    evidence:
      "Mole ratios obtained from a balanced equation are used directly to find the amount of a reactant required by a given amount of another reactant.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-1.1",
    concept: "mole ratio application",
  },
  {
    key: "stoich2-two-flasks-equal-moles",
    text: "Two flasks of equal volume are held at the same temperature and the same pressure. Flask A holds 0.5 mol of N2 and flask B holds 0.5 mol of O2. Which description of the two flasks is correct?",
    options: [
      "Both flasks hold the same number of molecules and the same total mass",
      "Both flasks hold the same number of molecules, but flask A has the smaller total mass",
      "Flask A holds fewer molecules, because nitrogen molecules are lighter than oxygen molecules",
      "Flask A holds twice as many molecules, because nitrogen is the smaller element",
    ],
    correctIndex: 1,
    explanation:
      "Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules, so both flasks hold 0.5 x 6.022 x 10^23 molecules. Their masses differ: 0.5 mol of N2 is 0.5 x 28 = 14 g while 0.5 mol of O2 is 0.5 x 32 = 16 g.",
    evidence:
      "Avogadro's law states that equal volumes of all gases, at the same temperature and pressure, contain the same number of molecules.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-1.1",
    concept: "avogadro law",
  },
  {
    key: "stoich2-hydrocarbon-molecular-formula",
    text: "A hydrocarbon contains 24.0 g of carbon and 6.0 g of hydrogen, and its molecular mass is 30. What is its molecular formula?",
    options: ["C2H6", "C2H3", "CH3", "C6H2"],
    correctIndex: 0,
    explanation:
      "The amounts are 24.0 / 12 = 2.0 mol C and 6.0 / 1 = 6.0 mol H, so the simplest ratio is C:H = 1:3 and the empirical formula is CH3 with a mass of 15. Since 30 / 15 = 2, the molecular formula is C2H6.",
    evidence:
      "The molecular formula is obtained by multiplying the empirical formula by the factor that raises its formula mass to the measured molecular mass.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 89,
    outcome: "CHEM-1.1",
    concept: "molecular formula from composition",
  },
  {
    key: "stoich2-aluminium-oxygen-limiting-test",
    text: "A mixture of 8.0 g of aluminium and 6.0 g of oxygen is heated according to 4Al + 3O2 -> 2Al2O3. Comparing moles divided by coefficients, which reactant is limiting?",
    options: [
      "Aluminium, because 0.0741 is smaller than the value of 0.0625 obtained for oxygen",
      "Aluminium, because 0.296 mol of aluminium is smaller than 0.188 mol of oxygen",
      "Oxygen, because 6.0 / 32 = 0.1875 mol gives 0.1875 / 3 = 0.0625, which is smaller than 8.0 / 27 / 4 = 0.0741 for aluminium",
      "Neither is limiting, because 8.0 g and 6.0 g are amounts of comparable size",
    ],
    correctIndex: 2,
    explanation:
      "For aluminium, 8.0 / 27 = 0.296 mol and 0.296 / 4 = 0.0741. For oxygen, 6.0 / 32 = 0.1875 mol and 0.1875 / 3 = 0.0625. The smaller value, 0.0625, belongs to oxygen, so oxygen is used up first and fixes the amount of Al2O3 formed.",
    evidence:
      "The limiting reactant is identified by dividing the number of moles of each reactant by its coefficient in the balanced equation and comparing the results.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-1.3",
    concept: "limiting reactant test",
  },
  {
    key: "stoich2-stoichiometric-water-mixture",
    text: "Which statement correctly describes the outcome when 4.0 g of hydrogen is mixed with 32 g of oxygen in the reaction 2H2 + O2 -> 2H2O?",
    options: [
      "36 g of water forms and the two reactants are present in the exact stoichiometric ratio",
      "36 g of water forms and hydrogen is present in excess",
      "18 g of water forms and oxygen is present in excess",
      "72 g of water forms and the two reactants are present in the exact stoichiometric ratio",
    ],
    correctIndex: 0,
    explanation:
      "4.0 g of H2 is 2.0 mol, giving 2.0 / 2 = 1.0, while 32 g of O2 is 1.0 mol, giving 1.0 / 1 = 1.0. The two ratios are equal, so neither reactant is in excess and both are fully consumed to give 2.0 mol of water, a mass of 2.0 x 18 = 36 g.",
    evidence:
      "When the values of moles divided by coefficients are equal for all reactants, the mixture is stoichiometric and no reactant is left over.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-1.3",
    concept: "stoichiometric reactant ratio",
  },
  {
    key: "stoich2-limiting-reactant-statements",
    text: "Four statements are made about the reaction P4 + 5O2 -> P4O10. I. Oxygen is the limiting reactant whenever it is present in the smaller number of moles. II. The limiting reactant is the one with the smaller value of moles divided by its coefficient. III. The limiting reactant is the one with the larger value of moles divided by its coefficient. IV. When the reaction stops, the excess reactant is still present in the container.",
    options: [
      "Only I, II and IV are correct",
      "Only I and III are correct",
      "Only III and IV are correct",
      "Only II and IV are correct",
    ],
    correctIndex: 3,
    explanation:
      "A small number of moles alone does not make a reactant limiting, because the coefficients differ, so I is wrong; the correct test is the smaller moles-to-coefficient ratio, which makes II right and III wrong. The reactant that is in surplus survives once the limiting one is gone, so IV is right.",
    evidence:
      "The limiting reactant is the one with the smaller moles-to-coefficient ratio, and the excess reactant remains after the reaction has ceased.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-1.3",
    concept: "limiting reactant statements",
  },
  {
    key: "stoich2-doubling-hydrogen-in-haber",
    text: "For the reaction N2 + 3H2 -> 2NH3, nitrogen was already the limiting reactant. If the amount of hydrogen supplied is then doubled while the nitrogen is left unchanged, what happens to the mass of ammonia obtained?",
    options: [
      "It stays the same, because nitrogen is still the limiting reactant",
      "It doubles, because extra hydrogen always increases the amount of product",
      "No ammonia forms, because the reactants are no longer in the balanced ratio",
      "It increases, because hydrogen now becomes the reactant present in excess",
    ],
    correctIndex: 0,
    explanation:
      "The amount of product is fixed by the limiting reactant, and adding more of a reactant that is already in excess changes nothing, because nitrogen is still consumed first and the extra hydrogen simply remains unreacted.",
    evidence:
      "Increasing the amount of the excess reactant beyond the stoichiometric amount does not increase the amount of product, which is limited by the reactant that is used up first.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-1.3",
    concept: "effect of excess reactant",
  },
  {
    key: "stoich2-hydrogen-remaining-in-container",
    text: "Mixing 5.0 g of hydrogen with 24 g of oxygen and reacting them by 2H2 + O2 -> 2H2O leaves hydrogen in the container. What mass of hydrogen is left unreacted?",
    options: ["0 g", "3.0 g", "2.0 g", "5.0 g"],
    correctIndex: 2,
    explanation:
      "5.0 g of H2 is 2.5 mol, giving 2.5 / 2 = 1.25, and 24 g of O2 is 0.75 mol, giving 0.75 / 1 = 0.75, so oxygen is limiting. That oxygen consumes 2 x 0.75 = 1.5 mol of hydrogen, a mass of 3.0 g, leaving 5.0 - 3.0 = 2.0 g of hydrogen.",
    evidence:
      "The mass of excess reactant remaining is found by subtracting the mass consumed through the mole ratio from the mass originally supplied.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-1.3",
    concept: "excess reactant remaining",
  },
  {
    key: "stoich2-material-left-after-reaction",
    text: "A reaction in a closed container ends with one reactant completely used up while the other is still detectable. The material that remains is best described as",
    options: [
      "the excess reactant, present in the amount originally supplied minus the amount that reacted",
      "the limiting reactant, which is left over because it reacted too slowly to be used up",
      "a by-product that forms alongside the main product of the reaction",
      "an impurity that was present in the limiting reactant from the start",
    ],
    correctIndex: 0,
    explanation:
      "The reactant in surplus is only partly consumed, so what remains equals the amount originally supplied minus the amount that took part. The limiting reactant, by definition, is completely converted and cannot be left over.",
    evidence:
      "The excess reactant is consumed only partially, so the quantity remaining at the end of a reaction is the original amount minus the amount that reacted.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 86,
    outcome: "CHEM-1.3",
    concept: "excess reactant identity",
  },
  {
    key: "stoich2-why-mass-ratios-vary",
    text: "In 2H2 + O2 -> 2H2O the reactants combine in a mass ratio of 4 g to 32 g. Why can this 1:8 mass ratio not be transferred unchanged to a different reaction?",
    options: [
      "Because a mass ratio of 1:8 is used only for reactions in which water is the product",
      "Because hydrogen is the lightest of the common elements, so it must always supply the smaller mass share",
      "Because the mass ratio of reactants follows from each reaction's own balanced equation together with the molar masses involved",
      "Because a mass ratio between reactants is fixed only when both reactants are solids at room temperature",
    ],
    correctIndex: 2,
    explanation:
      "An equation fixes the ratio of moles, and each mole has its own molar mass, so the corresponding mass ratio is unique to that reaction and those molar masses. A different equation with different coefficients gives a different mass ratio, and changing the state of a reactant does not determine it either.",
    evidence:
      "Stoichiometric mass relationships are obtained from the mole ratio of a balanced equation combined with the molar masses of the substances involved.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-1.3",
    concept: "mole versus mass ratio",
  },
  {
    key: "stoich2-ammonia-from-two-mixtures",
    text: "Two mixtures are used with N2 + 3H2 -> 2NH3. Mixture P contains 28 g of N2 with 6 g of H2, and mixture Q contains 28 g of N2 with 12 g of H2. Which comparison of the masses of ammonia obtained is correct?",
    options: [
      "Mixture P gives 34 g and mixture Q gives 68 g, because the hydrogen in Q is doubled",
      "Both mixtures give 34 g of ammonia, because nitrogen is the amount that fixes the product in each case",
      "Mixture P gives 17 g and mixture Q gives 34 g, because P is a stoichiometric mixture",
      "Both mixtures give 17 g of ammonia, because each mole of nitrogen gives one mole of ammonia",
    ],
    correctIndex: 1,
    explanation:
      "In P, 28 g of N2 is 1 mol giving a ratio of 1.0 and 6 g of H2 is 3 mol giving 1.0, so the mixture is stoichiometric and yields 2 mol of NH3. In Q, 12 g of H2 is 6 mol giving 2.0, so nitrogen at 1.0 is limiting and again yields 2 mol of NH3. Both masses are 2 x 17 = 34 g.",
    evidence:
      "The amount of product formed depends on the limiting reactant alone, so adding excess reactant to a stoichiometric mixture does not increase the product.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-1.3",
    concept: "limiting reactant comparison",
  },
  {
    key: "stoich2-why-yield-falls-short",
    text: "The theoretical yield is the mass of product that the balanced equation predicts from the amount of limiting reactant available. Which factor normally accounts for the actual yield being lower?",
    options: [
      "The balanced equation expresses the smallest whole-number ratio, so it systematically understates the product",
      "The molar mass of the product is smaller at the temperature of the reaction than at room temperature",
      "Some product is lost during transfer and separation, and side reactions may consume part of the reactants",
      "The theoretical yield is calculated from the excess reactant, which is by definition the larger of the two amounts",
    ],
    correctIndex: 2,
    explanation:
      "Theoretical yield is the maximum possible mass, so real handling and incomplete selectivity both reduce the amount actually recovered. A balanced equation understates nothing, and a theoretical yield is always calculated from the limiting reactant, not the excess one.",
    evidence:
      "Actual yield is generally lower than theoretical yield because some product is lost and because side reactions consume reactants.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-1.5",
    concept: "actual versus theoretical yield",
  },
  {
    key: "stoich2-percentage-yield-definition",
    text: "The percentage yield of a reaction is obtained by dividing the actual yield by one quantity and multiplying the result by 100. That quantity is",
    options: [
      "the theoretical yield",
      "the number of moles of limiting reactant supplied",
      "the mass of the excess reactant remaining",
      "the total mass of all the reactants added",
    ],
    correctIndex: 0,
    explanation:
      "Percentage yield expresses the actual yield as a percentage of the theoretical yield, so the theoretical yield is the reference quantity. Any other reference gives a number that has no meaning as an efficiency.",
    evidence:
      "Percentage yield is the ratio of actual yield to theoretical yield, multiplied by 100.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 91,
    outcome: "CHEM-1.5",
    concept: "percentage yield definition",
  },
  {
    key: "stoich2-yield-ratio-implication",
    text: "A reaction reports a percentage yield of 55%. Which relationship between the two yields must hold?",
    options: [
      "The theoretical yield is 55% of the actual yield",
      "The actual yield and the theoretical yield are equal to 55% of complete conversion",
      "The actual yield is 55% of the theoretical yield",
      "The mass of excess reactant accounts for the remaining 45% of the theoretical yield",
    ],
    correctIndex: 2,
    explanation:
      "Because percentage yield is actual yield divided by theoretical yield, a figure of 55% means the mass recovered is 55 hundredths of the mass predicted. The remaining 45% is lost product, not leftover reactant, and the theoretical yield is the larger of the two values.",
    evidence:
      "Since percentage yield is the actual yield expressed as a percentage of the theoretical yield, a low percentage indicates product lost rather than unused reactant.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-1.5",
    concept: "percentage yield meaning",
  },
  {
    key: "stoich2-yield-relationship-statements",
    text: "Four statements concern the yield of a reaction that forms a solid product which must be separated from solution. I. A percentage yield greater than 100% is not expected. II. A percentage yield of exactly 100% is consistent with a reaction free of side reactions. III. The measured yield depends on how completely the product is recovered. IV. A percentage yield can exceed 100% because the mass of a product is not conserved in an open system.",
    options: [
      "Only I and III are correct",
      "Only II and III are correct",
      "Only I, II and IV are correct",
      "Only I, II and III are correct",
    ],
    correctIndex: 3,
    explanation:
      "Theoretical yield is the maximum mass allowed by the balanced equation, so the true percentage yield cannot exceed 100%, making I correct; 100% therefore indicates complete selectivity, so II is correct. Incomplete recovery of the solid lowers the measured yield, so III is correct, while mass conservation rules out IV.",
    evidence:
      "Because theoretical yield is the maximum obtainable mass, a genuine percentage yield never exceeds 100%, and measured yield falls short when the product is incompletely recovered.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-1.5",
    concept: "yield statements",
  },
  {
    key: "stoich2-water-yield-statement-set",
    text: "Four statements describe a run in which 4.0 g of H2 and 40 g of O2 are converted according to 2H2 + O2 -> 2H2O, giving a theoretical yield of 36 g of water but an actual yield of 30 g. I. The percentage yield is 30 divided by 36 multiplied by 100, that is 83.3%. II. Part of the water is retained on the container surface. III. Hydrogen is the limiting reactant. IV. Raising the hydrogen to 8.0 g would raise the percentage yield to 166%.",
    options: [
      "Only I, II and III are correct",
      "Only I and II are correct",
      "Only I, III and IV are correct",
      "Only I and IV are correct",
    ],
    correctIndex: 0,
    explanation:
      "The percentage yield is 30 / 36 x 100 = 83.3%, and a shortfall of this kind is attributed to product left behind during recovery. For 2.0 mol of H2, the ratio is 1.0, while 40 g of O2 is 1.25 mol giving 1.25, so hydrogen is limiting. Doubling the hydrogen would also double the theoretical yield to 72 g, so the percentage would fall to 30 / 72 x 100 = 41.7%, not rise to 166%.",
    evidence:
      "Percentage yield is calculated from the actual and theoretical yields of the same reaction, and the theoretical yield follows from the limiting reactant.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-1.5",
    concept: "yield statement evaluation",
  },
  {
    key: "stoich2-magnesium-oxide-yield-steps",
    text: "A student weighs 12 g of magnesium, calculates a theoretical yield of 20 g of magnesium oxide from 2Mg + O2 -> 2MgO, and afterwards measures 18 g of the product. Which sequence gives the correct percentage yield?",
    options: [
      "Multiply the mass predicted, 20 g, by the mass measured, 18 g, and then divide the product by 100",
      "Subtract the mass measured, 18 g, from the mass predicted, 20 g, and divide that difference by the mass measured",
      "Divide the mass of the limiting reactant by the mass of the excess reactant and multiply the quotient by 100",
      "Divide the mass measured, 18 g, by the mass predicted, 20 g, and multiply the quotient by 100",
    ],
    correctIndex: 3,
    explanation:
      "The measured mass of 12 g of magnesium is 12 / 24 = 0.5 mol, which gives 0.5 mol of MgO, a theoretical mass of 0.5 x 40 = 20 g as stated. The percentage yield is therefore 18 / 20 x 100 = 90%.",
    evidence:
      "The percentage yield of a reaction is the mass of product actually obtained divided by the mass predicted from the limiting reactant, multiplied by 100.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-1.5",
    concept: "percentage yield procedure",
  },
  {
    key: "stoich2-two-reaction-yield-comparison",
    text: "Reaction P has a theoretical yield of 40 g and an actual yield of 36 g, while reaction Q has a theoretical yield of 8 g and an actual yield of 7.2 g. Which comparison is correct?",
    options: [
      "Both have a percentage yield of 90%, although P loses the larger absolute mass of product",
      "P has the higher percentage yield, because its absolute mass loss is larger",
      "Q has the higher percentage yield, because a small theoretical yield magnifies any loss",
      "Both have the same percentage yield, because their actual yields are numerically close",
    ],
    correctIndex: 0,
    explanation:
      "For P, 36 / 40 x 100 = 90%, and for Q, 7.2 / 8 x 100 = 90%, so the efficiencies are identical even though P loses 4 g and Q loses 0.8 g. Percentage yield depends on the ratio of the two yields, not on the absolute masses involved.",
    evidence:
      "Two reactions may have very different absolute yields and still share the same percentage yield, which compares actual yield with theoretical yield as a ratio.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-1.5",
    concept: "percentage yield comparison",
  },
  {
    key: "stoich2-haber-process-percentage-yield",
    text: "28 g of nitrogen and 9 g of hydrogen are converted to ammonia by N2 + 3H2 -> 2NH3, and 27.2 g of ammonia is actually obtained. The percentage yield is",
    options: ["45%", "65%", "120%", "80%"],
    correctIndex: 3,
    explanation:
      "The ratios are 28 / 28 = 1.0 / 1 = 1.0 for nitrogen and 9 / 2 = 4.5 mol of hydrogen giving 4.5 / 3 = 1.5, so nitrogen is limiting and the theoretical yield is 2 mol of NH3, a mass of 2 x 17 = 34 g. The percentage yield is 27.2 / 34 x 100 = 80%.",
    evidence:
      "A percentage yield is obtained by dividing the mass of product actually isolated by the theoretical mass predicted from the limiting reactant.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 95,
    outcome: "CHEM-1.5",
    concept: "yield from limiting reactant",
  },
];
