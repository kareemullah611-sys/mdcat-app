import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "mole-amount-particles-in-one-mole",
    text: "The mole is the amount of a substance that contains the same number of particles as there are atoms in 12 g of carbon-12. How many particles does one mole of any substance contain?",
    options: [
      "6.022 x 10^22 particles",
      "3.011 x 10^23 particles",
      "1.2044 x 10^24 particles",
      "6.022 x 10^23 particles",
    ],
    correctIndex: 3,
    explanation:
      "One mole of every substance contains 6.022 x 10^23 particles, so the number of molecules, atoms or ions in a sample is the number of moles multiplied by 6.022 x 10^23.",
    evidence:
      "One mole is the amount of a substance that contains 6.022 x 10^23 of its constituent particles.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "CHEM-1.1",
    concept: "avogadro number",
  },
  {
    key: "mole-molar-mass-of-carbon-dioxide",
    text: "Using C = 12 and O = 16, what is the molar mass of carbon dioxide?",
    options: ["28 g/mol", "44 g/mol", "32 g/mol", "28.5 g/mol"],
    correctIndex: 1,
    explanation:
      "The molar mass of CO2 is the sum of the relative atomic masses in the formula, 12 + (2 x 16) = 44 g/mol.",
    evidence:
      "Molar mass is obtained by adding the relative atomic masses of all the atoms shown in a formula.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-1.1",
    concept: "molar mass",
  },
  {
    key: "mole-purpose-of-mole-unit",
    text: "A chemist needs a fixed, known number of molecules for a calculation. Why is the mole described as a counting unit rather than simply a mass unit?",
    options: [
      "It fixes the number of particles at 6.022 x 10^23 for every substance, whatever its mass",
      "It allows any desired mass of a substance to be weighed without knowing its formula",
      "It converts the mass of a substance directly into the volume it occupies",
      "It is defined in grams as the mass of a single particle of the substance",
    ],
    correctIndex: 0,
    explanation:
      "The mole ties a mass to a fixed particle count, so 1 mol of any substance contains 6.022 x 10^23 particles and the mole ratio of a reaction is simply a ratio of particle numbers.",
    evidence:
      "The mole is defined as the amount of a substance containing 6.022 x 10^23 particles, so it connects mass with number of particles.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-1.1",
    concept: "mole definition",
  },
  {
    key: "mole-gas-volume-stp-versus-25c",
    text: "For one mole of any gas, how does the volume at 0 degrees C and 1 atm compare with the volume at 25 degrees C and 1 atm?",
    options: [
      "About 24.4 L at 0 degrees C and about 22.4 L at 25 degrees C",
      "About 22.4 L at 0 degrees C and about 24.4 L at 25 degrees C",
      "About 22.4 L at both temperatures, because one mole has one fixed volume",
      "About 22.4 L at 0 degrees C and about 44.8 L at 25 degrees C",
    ],
    correctIndex: 1,
    explanation:
      "A gas expands on heating, so one mole occupies about 22.4 L at STP and the larger volume of about 24.4 L at 25 degrees C and 1 atm.",
    evidence:
      "One mole of a gas occupies 22.4 dm^3 at STP and about 24.4 dm^3 at 25 degrees C and 1 atm.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "molar volume of gas",
  },
  {
    key: "mole-moles-in-132-g-co2",
    text: "How many moles of carbon dioxide are present in 132 g of CO2?",
    options: ["2.0 mol", "6.0 mol", "3.0 mol", "1.5 mol"],
    correctIndex: 2,
    explanation:
      "The molar mass of CO2 is 44 g/mol, so n = m/M = 132/44 = 3.0 mol.",
    evidence:
      "The number of moles of a substance is obtained by dividing its mass in grams by its molar mass.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-1.1",
    concept: "moles from mass",
  },
  {
    key: "mole-molecules-in-half-mole-so2",
    text: "How many molecules are present in 0.500 mol of sulfur dioxide?",
    options: [
      "1.2044 x 10^23 molecules",
      "6.022 x 10^23 molecules",
      "3.011 x 10^22 molecules",
      "3.011 x 10^23 molecules",
    ],
    correctIndex: 3,
    explanation:
      "Multiplying the amount in moles by Avogadro's number gives 0.500 x 6.022 x 10^23 = 3.011 x 10^23 molecules.",
    evidence:
      "The number of particles in a sample equals the number of moles multiplied by 6.022 x 10^23.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "particles from moles",
  },
  {
    key: "mole-moles-in-11-2-l-stp",
    text: "A gas occupies 11.2 L when measured at STP, that is at 0 degrees C and 1 atm. How many moles of gas does this volume represent?",
    options: ["0.25 mol", "1.00 mol", "0.50 mol", "2.00 mol"],
    correctIndex: 2,
    explanation:
      "At STP one mole of any gas occupies 22.4 L, so n = V/22.4 = 11.2/22.4 = 0.50 mol.",
    evidence:
      "At STP the volume of one mole of any gas is 22.4 dm^3, so the number of moles equals the volume divided by 22.4.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-1.1",
    concept: "moles from volume at stp",
  },
  {
    key: "mole-volume-of-2-5-mol-at-25c",
    text: "What volume, measured at 25 degrees C and 1 atm, is occupied by 2.50 mol of a gas?",
    options: ["61.0 L", "56.0 L", "48.8 L", "122 L"],
    correctIndex: 0,
    explanation:
      "At 25 degrees C and 1 atm one mole of any gas occupies about 24.4 L, so V = 2.50 x 24.4 = 61.0 L.",
    evidence:
      "One mole of a gas occupies about 24.4 dm^3 at 25 degrees C and 1 atm.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-1.1",
    concept: "gas volume at 25 c",
  },
  {
    key: "mole-water-mass-from-hydrogen",
    text: "When 4 g of hydrogen reacts with excess oxygen to form water according to 2 H2 + O2 -> 2 H2O, what mass of water is produced?",
    options: ["18 g", "72 g", "32 g", "36 g"],
    correctIndex: 3,
    explanation:
      "4 g of H2 is 2 mol, and the equation shows 2 mol H2 giving 2 mol H2O, so 2 mol x 18 g/mol = 36 g of water.",
    evidence:
      "A balanced equation converts masses of reactants to masses of products through the mole ratio of its coefficients.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "CHEM-1.1",
    concept: "mass to mass conversion",
  },
  {
    key: "mole-carbon-dioxide-mass-from-methane",
    text: "Using CH4 + 2 O2 -> CO2 + 2 H2O, what mass of carbon dioxide is produced when 32 g of methane burns completely?",
    options: ["44 g", "176 g", "88 g", "16 g"],
    correctIndex: 2,
    explanation:
      "32 g of CH4 is 2 mol, and the equation pairs 1 mol CH4 with 1 mol CO2, so 2 mol x 44 g/mol = 88 g of CO2.",
    evidence:
      "Mole ratios taken from a balanced equation relate the amount of product to the amount of reactant consumed.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "CHEM-1.1",
    concept: "mole to mass conversion",
  },
  {
    key: "mole-carbonate-mass-for-given-cao",
    text: "In the equation CaCO3 -> CaO + CO2, what mass of calcium carbonate must be heated to obtain 28 g of calcium oxide?",
    options: ["28 g", "100 g", "56 g", "50 g"],
    correctIndex: 3,
    explanation:
      "28 g of CaO is 0.5 mol, the equation requires 0.5 mol of CaCO3, and 0.5 mol x 100 g/mol = 50 g.",
    evidence:
      "The mass of starting material required is calculated from the mole ratio of the balanced equation.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "reactant mass required",
  },
  {
    key: "mole-stp-oxygen-volume-from-peroxide",
    text: "For the equation 2 H2O2 -> 2 H2O + O2, what volume of oxygen measured at STP is obtained from 34 g of hydrogen peroxide?",
    options: ["11.2 L", "5.6 L", "22.4 L", "33.6 L"],
    correctIndex: 0,
    explanation:
      "34 g of H2O2 is 1 mol, the equation shows 2 mol H2O2 giving 1 mol O2, so 0.5 mol x 22.4 L/mol = 11.2 L at STP.",
    evidence:
      "The mass of a reactant is converted to a gas volume by first changing it to moles and then applying the molar volume of 22.4 dm^3 at STP.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "gas volume from mass",
  },
  {
    key: "mole-co2-mass-along-with-water",
    text: "For the combustion CH4 + 2 O2 -> CO2 + 2 H2O, what mass of carbon dioxide forms at the same time as 9 g of water?",
    options: ["22 g", "8 g", "4.5 g", "11 g"],
    correctIndex: 3,
    explanation:
      "9 g of H2O is 0.5 mol, the equation shows 2 mol H2O forming with 1 mol CO2, so the CO2 is 0.25 mol x 44 g/mol = 11 g.",
    evidence:
      "A coefficient ratio from a balanced equation links the amount of one product to the amount of another product formed at the same time.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 98,
    outcome: "CHEM-1.1",
    concept: "product mass from product",
  },
  {
    key: "mole-empirical-formula-hydrocarbon",
    text: "A hydrocarbon contains 92.3% carbon and 7.7% hydrogen by mass. What is its empirical formula?",
    options: ["C2H2", "C2H4", "CH", "CH2"],
    correctIndex: 2,
    explanation:
      "In a 100 g sample, carbon gives 92.3/12 = 7.69 mol and hydrogen gives 7.7/1 = 7.7 mol, and the simplest ratio of 1:1 gives CH.",
    evidence:
      "An empirical formula is found from the simplest whole-number mole ratio of the elements present in a compound.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "empirical formula",
  },
  {
    key: "mole-molecular-formula-from-empirical",
    text: "The empirical formula of a compound is CH2O and its molecular mass is 180. What is the molecular formula?",
    options: ["C3H6O3", "C6H12O6", "C2H4O2", "C12H24O12"],
    correctIndex: 1,
    explanation:
      "The formula mass of CH2O is 12 + 2 + 16 = 30, and 180/30 = 6, so the molecular formula is (CH2O)6 = C6H12O6.",
    evidence:
      "The molecular formula is the empirical formula multiplied by the whole number that matches the measured molecular mass.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-1.1",
    concept: "molecular formula",
  },
  {
    key: "mole-number-of-molecules-not-conserved",
    text: "Statement: 'In a balanced equation the number of molecules of the reactants is always equal to the number of molecules of the products.' How should this statement be judged?",
    options: [
      "Correct, because a balanced equation must show the same number of molecules on each side",
      "Incorrect, because molecules are lost whenever a chemical change occurs",
      "Incorrect, because 2 H2 + O2 -> 2 H2O has 3 reactant molecules but only 2 product molecules, even though mass is conserved",
      "Correct, because the coefficients of a balanced equation give the number of molecules",
    ],
    correctIndex: 2,
    explanation:
      "In 2 H2 + O2 -> 2 H2O the total mass is unchanged, 4 g + 32 g = 36 g of H2O, but three molecules of reactants are converted into only two molecules of product, so molecule number is not conserved.",
    evidence:
      "A balanced equation conserves mass because the same atoms appear on both sides, but the count of molecules may differ.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-1.1",
    concept: "conservation of mass",
  },
  {
    key: "mole-why-equations-are-balanced",
    text: "The skeleton equation P4 + O2 -> P2O5 cannot yet be used to calculate a mass of product. What is required, and for what reason?",
    options: [
      "It must be balanced, because the subscripts in a chemical formula change during a reaction",
      "It must be balanced, because an unbalanced equation shows that mass is destroyed during the reaction",
      "It must be balanced, because fractional coefficients are not permitted in a chemical equation",
      "It must be balanced, because the balanced coefficients then give the fixed mole ratio in which the substances react",
    ],
    correctIndex: 3,
    explanation:
      "Only when the equation is balanced as P4 + 5 O2 -> 2 P2O5 do the coefficients represent the true mole ratio, and every stoichiometric calculation depends on that ratio.",
    evidence:
      "A chemical equation must be balanced before its coefficients can serve as mole ratios in a calculation.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "balanced equation",
  },
  {
    key: "mole-avogadro-law-equal-bulbs",
    text: "Two glass bulbs of equal volume are kept at the same temperature and pressure. Bulb A holds 0.50 mol of nitrogen and bulb B holds 0.50 mol of oxygen. What does Avogadro's law predict about their contents?",
    options: [
      "Bulb A contains more molecules, because nitrogen molecules are smaller than oxygen molecules",
      "Both bulbs contain the same number of molecules, 3.011 x 10^23, because equal volumes of gases at the same temperature and pressure hold equal numbers of molecules",
      "The two bulbs must contain the same mass of gas, since their volumes, temperatures and pressures are equal",
      "Equal volumes of different gases at the same temperature and pressure contain equal masses of gas",
    ],
    correctIndex: 1,
    explanation:
      "Each bulb holds 0.50 x 6.022 x 10^23 = 3.011 x 10^23 molecules, and the two masses differ because the molar masses of N2 and O2 are different.",
    evidence:
      "Avogadro's law states that equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "avogadro law",
  },
  {
    key: "mole-pure-sample-versus-mixture-water",
    text: "One 36 g sample is pure water and another 36 g sample is sea water, which is a mixture. How much water does each contain?",
    options: [
      "Both samples contain 2 mol of H2O, because their masses are the same",
      "The pure sample contains less than 2 mol of H2O, because pure substances have smaller molar masses",
      "The pure sample contains 2 mol of H2O, while the sea water sample contains less than 2 mol because dissolved salts take up part of its mass",
      "The sea water sample contains more than 2 mol of H2O, because mixtures are denser than their components",
    ],
    correctIndex: 2,
    explanation:
      "36 g of pure H2O is 36/18 = 2 mol, but in sea water part of the 36 g is dissolved salt, so the mass of water, and therefore the number of moles of water, is lower than in the pure sample.",
    evidence:
      "A pure substance has a fixed composition, whereas the composition of a mixture can vary from sample to sample.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-1.1",
    concept: "pure substance and mixture",
  },
  {
    key: "mole-moles-from-particle-count",
    text: "A sample contains 1.2044 x 10^23 molecules of ammonia. How many moles of ammonia are present?",
    options: ["0.500 mol", "2.000 mol", "0.020 mol", "0.200 mol"],
    correctIndex: 3,
    explanation:
      "Dividing the number of particles by Avogadro's number gives 1.2044 x 10^23 / 6.022 x 10^23 = 0.200 mol.",
    evidence:
      "The amount in moles of a sample is obtained by dividing the number of particles by 6.022 x 10^23.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "moles from particles",
  },
  {
    key: "mole-steps-for-moles-from-mass",
    text: "A student has 40 g of calcium carbonate, CaCO3, and wants the number of moles present. Which sequence of steps is correct?",
    options: [
      "Add the atomic masses in the formula to get the molar mass, then divide the given mass by that molar mass",
      "Multiply the given mass by the molar mass, then divide the result by 6.022 x 10^23",
      "Divide the given mass by 22.4, then multiply the result by the molar mass",
      "Multiply the molar mass by 6.022 x 10^23, then divide the given mass by that result",
    ],
    correctIndex: 0,
    explanation:
      "M(CaCO3) = 40 + 12 + 3(16) = 100 g/mol, and n = m/M = 40/100 = 0.4 mol, which is the given mass divided by the molar mass.",
    evidence:
      "Moles are calculated as the mass of a sample divided by the molar mass of the substance.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-1.1",
    concept: "moles calculation steps",
  },
  {
    key: "mole-steps-for-mass-to-mass",
    text: "Given the equation 2 H2 + O2 -> 2 H2O, a mass of water is to be calculated from a given mass of hydrogen. Which sequence of operations gives the correct result?",
    options: [
      "Multiply the mass of hydrogen by the coefficient ratio, then convert the result to moles",
      "Convert the mass of hydrogen to moles, apply the coefficient ratio to obtain moles of water, then convert those moles to mass",
      "Convert the mass of hydrogen to a volume at STP, read the ratio from the volumes, and convert the volume back to mass",
      "Add the molar masses of the reactants, subtract the molar mass of the product and multiply by the given mass",
    ],
    correctIndex: 1,
    explanation:
      "Mass must first be changed to moles, the balanced coefficients then supply the mole ratio between reactant and product, and the moles of water are finally changed back into grams.",
    evidence:
      "Mass to mass calculations in stoichiometry pass through moles, using the coefficient ratio of the balanced equation.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-1.1",
    concept: "stoichiometric procedure",
  },
  {
    key: "mole-aluminium-chloride-mass-from-aluminium",
    text: "In the equation 2 Al + 3 Cl2 -> 2 AlCl3, what mass of aluminium chloride is formed when 54 g of aluminium reacts completely with chlorine?",
    options: ["133.5 g", "106.8 g", "81 g", "267 g"],
    correctIndex: 3,
    explanation:
      "54 g of Al is 2 mol, the equation shows 2 mol Al giving 2 mol AlCl3, and M(AlCl3) = 27 + 3(35.5) = 133.5, so the mass formed is 2 x 133.5 = 267 g.",
    evidence:
      "A mole ratio from a balanced equation converts the moles of a reactant into the moles of the product obtained.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 97,
    outcome: "CHEM-1.1",
    concept: "mass to mass conversion",
  },
  {
    key: "mole-role-of-equation-coefficients",
    text: "What do the coefficients written in front of the formulas in a balanced equation tell us?",
    options: [
      "The fixed ratio of moles in which the substances combine and produce each other",
      "The percentage by mass of each element present in the products",
      "The number of atoms that must be rearranged to form the products",
      "The order in which the substances react when they are brought together",
    ],
    correctIndex: 0,
    explanation:
      "Coefficients give the mole ratio, so 2 H2 + O2 -> 2 H2O means 2 mol H2 reacts with 1 mol O2 to give 2 mol H2O, whatever masses are weighed.",
    evidence:
      "The coefficients of a balanced equation state the relative amounts of the substances in terms of moles.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-1.1",
    concept: "equation coefficients",
  },
  {
    key: "mole-pure-substance-versus-mixture",
    text: "How does a mixture differ from a pure substance?",
    options: [
      "Both have a fixed composition, but a mixture has two separate melting points",
      "A pure substance can be split into its components by simple filtration, while a mixture cannot",
      "A pure substance has a fixed composition and a sharp melting or boiling point, while a mixture has a variable composition and no sharp transition point",
      "A mixture always has a lower molar mass than a pure substance of the same mass",
    ],
    correctIndex: 2,
    explanation:
      "A pure substance contains only one kind of particle and melts or boils at a sharp temperature, whereas the composition of a mixture is variable and it melts and boils over a range of temperatures.",
    evidence:
      "A pure substance has a constant composition and sharp melting and boiling points, while a mixture shows a range of these values.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-1.1",
    concept: "mixtures and pure substances",
  },
];
