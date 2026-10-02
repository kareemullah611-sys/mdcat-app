import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "hess-law-sum-of-steps",
    text: "According to Hess's law, the enthalpy change of a chemical reaction equals",
    options: [
      "the sum of the enthalpy changes of any sequence of steps that leads from the reactants to the same products",
      "the enthalpy change of the first step alone, since the later steps add nothing",
      "the difference between the total bond enthalpies of the reactants and of the products",
      "zero, because enthalpy is a state function and therefore can never change",
    ],
    correctIndex: 0,
    explanation:
      "Because enthalpy is a state function, only the initial and final states matter, so any series of steps that starts from the same reactants and reaches the same products must carry the same total enthalpy change.",
    evidence:
      "Hess's law states that the total enthalpy change of a reaction equals the sum of the enthalpy changes of the steps taken to reach the products.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-8.6",
    concept: "hess law statement",
  },
  {
    key: "hess-enthalpy-state-function",
    text: "A property of enthalpy that makes Hess's law possible is that it is",
    options: [
      "a property of the path taken, so that a longer route gives a larger change",
      "a state function, so that its change depends only on the initial and final states",
      "identical for every substance held at a fixed temperature",
      "an extensive property that changes only when the amount of substance changes",
    ],
    correctIndex: 1,
    explanation:
      "A state function has a value fixed by the state of the system, so the change between two given states is the same whichever path connects them, and that is exactly why enthalpy changes may be added.",
    evidence:
      "Enthalpy is a state function, so its change depends only on the initial and final states and not on the path taken.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-8.6",
    concept: "enthalpy as state function",
  },
  {
    key: "hess-element-standard-state-zero",
    text: "For an element existing in its standard state, the standard enthalpy of formation is",
    options: [
      "positive, since every substance stores energy within its bonds",
      "undefined, because formation enthalpies are quoted only for compounds",
      "zero, because the element is already in the state in which it is defined",
      "equal to the enthalpy of combustion of that element in oxygen",
    ],
    correctIndex: 2,
    explanation:
      "By definition the standard enthalpy of formation of an element in its standard state is zero, so such a term disappears from any Hess's law sum in which that element appears.",
    evidence: "The standard enthalpy of formation of an element in its standard state is taken as zero.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "formation enthalpy of element",
  },
  {
    key: "hess-why-law-holds",
    text: "A reaction can be carried out in one step or in three steps through intermediates. The total enthalpy change is the same for both routes because",
    options: [
      "each intermediate cancels out of the sum of the three steps",
      "the number of collisions in the direct step equals the number in the three steps",
      "the enthalpy change of a reaction is always independent of the pressure used",
      "enthalpy is a state function, so both routes share the same initial and final states",
    ],
    correctIndex: 3,
    explanation:
      "Both routes join the same initial state to the same final state, and a state function gives one fixed change for that pair of states whatever path is used to get there.",
    evidence:
      "Because enthalpy is a state function, the enthalpy change of a reaction does not depend on the path chosen for it.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "reason hess law holds",
  },
  {
    key: "hess-reverse-flips-sign",
    text: "Reversing the thermochemical equation 2H2(g) + O2(g) -> 2H2O(l), whose enthalpy change is -571.6 kJ, gives an enthalpy change of",
    options: ["+571.6 kJ", "-285.8 kJ", "-1143.2 kJ", "0 kJ"],
    correctIndex: 0,
    explanation:
      "Reversing a thermochemical equation reverses the sign of its enthalpy change while the magnitude is untouched, so the value becomes +571.6 kJ.",
    evidence:
      "When a thermochemical equation is reversed, the sign of its enthalpy change is also reversed.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-8.6",
    concept: "reversed equation sign",
  },
  {
    key: "hess-multiply-scales-value",
    text: "The formation of carbon dioxide from graphite and oxygen, C(s) + O2(g) -> CO2(g), releases 393.5 kJ. The enthalpy change for 2C(s) + 2O2(g) -> 2CO2(g) is",
    options: ["-196.8 kJ", "-787.0 kJ", "+787.0 kJ", "-393.5 kJ"],
    correctIndex: 1,
    explanation:
      "Multiplying every coefficient of a thermochemical equation by two multiplies the enthalpy change by two as well, so 2 x (-393.5 kJ) = -787.0 kJ.",
    evidence:
      "If all the coefficients of a thermochemical equation are multiplied by a number, its enthalpy change is multiplied by the same number.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-8.6",
    concept: "scaled equation enthalpy",
  },
  {
    key: "hess-halve-halves-value",
    text: "Half a mole of water forms from its elements in H2(g) + 1/2O2(g) -> H2O(l). Using the value -571.6 kJ for 2H2(g) + O2(g) -> 2H2O(l), the enthalpy change for the one mole equation is",
    options: ["-571.6 kJ", "-1143.2 kJ", "-285.8 kJ", "+285.8 kJ"],
    correctIndex: 2,
    explanation:
      "Dividing all the coefficients by two divides the enthalpy change by two as well, so -571.6 kJ divided by 2 gives -285.8 kJ for one mole of water.",
    evidence:
      "If all the coefficients of a thermochemical equation are divided by a number, its enthalpy change is divided by the same number.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "halved equation enthalpy",
  },
  {
    key: "hess-add-cancels-common",
    text: "When two thermochemical equations are added together to obtain a third equation, a substance written with the same coefficient on both sides of the added equations",
    options: [
      "appears twice among the products of the new equation",
      "is converted into the element from which it is formed",
      "adds its enthalpy change twice to the total",
      "cancels out, because equal amounts on opposite sides remove one another",
    ],
    correctIndex: 3,
    explanation:
      "Species occurring with equal amounts on opposite sides of the summed equations are subtracted from one another, and their enthalpy changes cancel along with them.",
    evidence:
      "When thermochemical equations are added, the species common to both sides cancel and their enthalpy changes are added algebraically.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-8.6",
    concept: "cancellation on addition",
  },
  {
    key: "hess-formation-definition",
    text: "A standard enthalpy of formation refers to the enthalpy change accompanying",
    options: [
      "the formation of one mole of the compound from its elements in their standard states",
      "the burning of one mole of the compound in oxygen",
      "the neutralisation of one mole of acid by one mole of base",
      "the decomposition of one mole of the compound into its elements",
    ],
    correctIndex: 0,
    explanation:
      "A standard enthalpy of formation always refers to making one mole of the compound from its constituent elements in their standard states, not to burning or decomposing it.",
    evidence:
      "The standard enthalpy of formation of a compound is the enthalpy change when one mole of it forms from its elements in their standard states.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-8.6",
    concept: "standard enthalpy of formation",
  },
  {
    key: "hess-exothermic-versus-endothermic",
    text: "An exothermic process and an endothermic process differ from one another in that",
    options: [
      "the exothermic one absorbs heat and has a positive enthalpy change while the endothermic one releases heat and has a negative one",
      "the exothermic one releases heat and has a negative enthalpy change while the endothermic one absorbs heat and has a positive one",
      "the exothermic one is always spontaneous while the endothermic one can never be spontaneous",
      "the exothermic one shows products above the reactants while the endothermic one shows products below them",
    ],
    correctIndex: 1,
    explanation:
      "Exothermic means heat leaves the system, which gives a negative enthalpy change, whereas endothermic means heat enters the system and gives a positive enthalpy change.",
    evidence:
      "An exothermic reaction releases heat and has a negative enthalpy change, while an endothermic reaction absorbs heat and has a positive one.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-8.6",
    concept: "exothermic versus endothermic",
  },
  {
    key: "hess-bond-enthalpy-definition",
    text: "A bond enthalpy is defined as the enthalpy change required to",
    options: [
      "form one mole of a specified bond inside a gaseous molecule",
      "break every bond present in one mole of a gaseous compound",
      "break one mole of a specified type of covalent bond in the gaseous state",
      "raise the temperature of one mole of a gas by one kelvin",
    ],
    correctIndex: 2,
    explanation:
      "A bond enthalpy refers to breaking one mole of one particular type of bond in the gaseous state, so the bonds broken of a reaction cost energy while the bonds formed return it.",
    evidence:
      "The bond enthalpy is the enthalpy change accompanying the breaking of one mole of a covalent bond in the gaseous state.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-8.6",
    concept: "bond enthalpy definition",
  },
  {
    key: "hess-bond-enthalpy-water-estimate",
    text: "With the bond enthalpy values H-H 436, O=O 498 and O-H 463 kJ per mol, the enthalpy change estimated for 2H2(g) + O2(g) -> 2H2O(g) is",
    options: ["-1370 kJ", "+482 kJ", "+1852 kJ", "-482 kJ"],
    correctIndex: 3,
    explanation:
      "The two H-H bonds and one O=O bond broken cost 2(436) + 498 = 1370 kJ, while the four O-H bonds formed return 4(463) = 1852 kJ, so the estimated change is 1370 - 1852 = -482 kJ.",
    evidence:
      "The enthalpy change of a reaction can be estimated from bond enthalpies by adding the energies of the bonds broken and subtracting those of the bonds formed.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "bond enthalpy estimate",
  },
  {
    key: "hess-combustion-versus-formation",
    text: "The standard enthalpy of combustion of a substance differs from its standard enthalpy of formation in that the combustion value",
    options: [
      "describes the burning of one mole of the substance in oxygen and is negative for a fuel",
      "describes the formation of one mole of the substance from its elements and is always positive",
      "describes only the bonds broken inside the substance and ignores the oxygen entirely",
      "is quoted per mole of oxygen consumed rather than per mole of substance",
    ],
    correctIndex: 0,
    explanation:
      "A standard enthalpy of combustion refers to the complete burning of one mole of the substance in oxygen, so for a fuel it is a large negative value, whereas a formation enthalpy refers to the elements from which the compound is built.",
    evidence:
      "The standard enthalpy of combustion of a substance is the enthalpy change when one mole of it burns completely in oxygen.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-8.6",
    concept: "combustion versus formation enthalpy",
  },
  {
    key: "hess-neutralisation-value",
    text: "When dilute solutions of a strong acid and a strong base are mixed in the exact proportions that form water, the enthalpy change per mole of water formed is about",
    options: [
      "+57 kJ, since the mixture takes in heat from the surroundings",
      "-57 kJ, since heat is released on forming the water",
      "-114 kJ, since two moles of water are formed per mole of acid",
      "zero, because the acid and the base cancel each other completely",
    ],
    correctIndex: 1,
    explanation:
      "Neutralisation of a strong acid by a strong base in dilute solution is exothermic and releases about 57 kJ for each mole of water formed, since the same ions are present in every such case.",
    evidence:
      "The enthalpy of neutralisation of a strong acid by a strong base in dilute solution is about -57 kJ per mole of water formed.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-8.6",
    concept: "enthalpy of neutralisation",
  },
  {
    key: "hess-weak-acid-neutralisation",
    text: "The enthalpy of neutralisation of a weak acid by a strong base is smaller in magnitude than that of a strong acid by the same base because",
    options: [
      "the strong base becomes a weak base after it is mixed with a weak acid",
      "a weak acid carries fewer hydrogen atoms than the strong acid it replaces",
      "the weak acid has to be ionised first, and that step absorbs part of the energy",
      "less water is formed when a weak acid is neutralised by a base",
    ],
    correctIndex: 2,
    explanation:
      "Part of the enthalpy change of neutralising a weak acid is the energy needed to separate it into its ions, so the net heat released is smaller than for a strong acid that is already fully ionised.",
    evidence:
      "The enthalpy of neutralisation of a weak acid is smaller than that of a strong acid because energy is absorbed in ionising the weak acid.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-8.6",
    concept: "weak acid neutralisation",
  },
  {
    key: "hess-diagram-products-above",
    text: "In an energy level diagram the products are drawn 55 kJ above the reactants. For the reaction shown",
    options: [
      "the enthalpy change is -55 kJ, so the reaction is exothermic",
      "the enthalpy change is zero, so the reaction is thermoneutral",
      "the enthalpy change is +55 kJ, so heat is absorbed and the reaction is endothermic",
      "the enthalpy change is +55 kJ, so heat is released and the reaction is exothermic",
    ],
    correctIndex: 3,
    explanation:
      "The enthalpy change is the enthalpy of the products minus that of the reactants, so a product level 55 kJ above the reactant level gives +55 kJ, a positive value that marks the reaction as endothermic.",
    evidence:
      "The enthalpy change of a reaction equals the enthalpy of the products minus the enthalpy of the reactants.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "energy diagram reading",
  },
  {
    key: "hess-target-equation-order",
    text: "Several thermochemical equations are supplied and one target equation is required. The correct order of operations is",
    options: [
      "reverse the equations that are needed the other way, scale them to the required coefficients, then add so that unwanted species cancel",
      "add all the equations together first and then correct the coefficients of the result",
      "divide every equation by two, add them together, and then reverse the sum",
      "convert every enthalpy change to a positive value before combining the equations",
    ],
    correctIndex: 0,
    explanation:
      "Each equation is first turned to the direction needed and multiplied by whatever factor makes its coefficients match the target, and only then are the equations added so that the unwanted species disappear.",
    evidence:
      "To apply Hess's law the given equations are reversed or multiplied as required and then added so that the unwanted species cancel.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "hess procedure steps",
  },
  {
    key: "hess-combustion-to-formation-cycle",
    text: "The enthalpies of combustion of hydrogen, of carbon and of methane are available. To find the enthalpy of formation of methane the correct Hess cycle is",
    options: [
      "burn the carbon and burn the hydrogen, then add the two combustion steps together",
      "burn the carbon to carbon dioxide, burn the hydrogen to water, burn the methane, then reverse the methane step and add it to the first two",
      "burn the hydrogen to water, then reverse the carbon combustion step, then add those two steps",
      "burn the methane, burn the carbon, and subtract the hydrogen combustion step from the result",
    ],
    correctIndex: 1,
    explanation:
      "Burning the elements produces the same oxides that burning methane produces, so reversing the methane step and adding it to the two element combustion steps leaves only the formation of methane behind.",
    evidence:
      "The enthalpy of formation of a compound is obtained by adding the combustion steps of its elements and subtracting the combustion step of the compound itself.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-8.6",
    concept: "formation from combustion data",
  },
  {
    key: "hess-manipulation-rules-claims",
    text: "Four statements about handling thermochemical equations are given. A: reversing an equation reverses the sign of its enthalpy change. B: dividing all the coefficients by two halves the enthalpy change. C: a thermochemical equation may be added to itself with its enthalpy change left unchanged. D: species written with equal coefficients on opposite sides cancel when equations are added. The one incorrect statement is",
    options: ["A", "B", "C", "D"],
    correctIndex: 2,
    explanation:
      "Adding an equation to itself is simply the same as multiplying it by two, which doubles its enthalpy change rather than leaving it unchanged.",
    evidence:
      "Multiplying a thermochemical equation by a factor multiplies its enthalpy change by the same factor.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "equation manipulation claims",
  },
  {
    key: "hess-path-and-sign-claims",
    text: "Four claims about enthalpy are made. A: the enthalpy change of a reaction is the same whether it is carried out in one step or in three. B: an endothermic reaction has a positive enthalpy change. C: the standard enthalpy of formation of graphite in its standard state is zero. D: an exothermic reaction has a positive enthalpy change because heat is released to the surroundings. The one incorrect claim is",
    options: ["A", "B", "C", "D"],
    correctIndex: 3,
    explanation:
      "Heat released to the surroundings means that the system loses enthalpy, so an exothermic reaction carries a negative enthalpy change rather than a positive one.",
    evidence:
      "In an exothermic reaction heat is released to the surroundings and the enthalpy change of the reaction is negative.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "path and sign claims",
  },
  {
    key: "hess-standard-conditions-meaning",
    text: "A tabulated standard enthalpy of formation is quoted for a compound prepared under standard conditions. Standard conditions mean",
    options: [
      "a temperature of 25 degrees Celsius and a pressure of one bar, with each substance in its standard state",
      "a temperature of 0 degrees Celsius and a pressure of one atmosphere, with every reactant in solution",
      "a temperature of 100 degrees Celsius, so that only the gaseous state can be used",
      "any temperature and any amount of substance, since no concentration is fixed",
    ],
    correctIndex: 0,
    explanation:
      "Standard enthalpies are quoted at 25 degrees Celsius and one bar with every substance in its specified standard state, which is also why an element in its standard state carries a formation enthalpy of zero.",
    evidence:
      "Standard enthalpies of formation are quoted at 25 degrees Celsius and one bar with all the substances in their standard states.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-8.6",
    concept: "standard state conditions",
  },
  {
    key: "hess-water-vapourisation-from-formation",
    text: "Data: H2(g) + 1/2O2(g) -> H2O(l) has an enthalpy change of -285.8 kJ and H2(g) + 1/2O2(g) -> H2O(g) has an enthalpy change of -241.8 kJ. The enthalpy change for 2H2O(l) -> 2H2O(g) is",
    options: ["+44.0 kJ", "+88.0 kJ", "-88.0 kJ", "+527.6 kJ"],
    correctIndex: 1,
    explanation:
      "Subtracting the second equation from the first leaves H2O(l) -> H2O(g) with -241.8 - (-285.8) = +44.0 kJ, and doubling every coefficient doubles this to +88.0 kJ.",
    evidence:
      "The enthalpy of a physical change can be obtained by subtracting one thermochemical equation from another that has the same reactants.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "vaporisation from formation data",
  },
  {
    key: "hess-formation-of-co",
    text: "Use the data C(s) + O2(g) -> CO2(g) with an enthalpy change of -393.5 kJ and 2CO(g) + O2(g) -> 2CO2(g) with an enthalpy change of -566.0 kJ. The enthalpy change for C(s) + 1/2O2(g) -> CO(g) is",
    options: ["+110.5 kJ", "-283.0 kJ", "-110.5 kJ", "-676.5 kJ"],
    correctIndex: 2,
    explanation:
      "Reverse the second equation and divide it by two to obtain CO2(g) -> CO(g) + 1/2O2(g) with an enthalpy change of +283.0 kJ; adding this to the first equation cancels the carbon dioxide and leaves -393.5 + 283.0 = -110.5 kJ.",
    evidence:
      "Hess's law is applied by reversing or multiplying the given equations until the unwanted species cancel and only the required equation is left.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "carbon monoxide formation",
  },
  {
    key: "hess-formation-of-methane",
    text: "Combustion enthalpies are supplied for hydrogen (-285.8 kJ for H2 + 1/2O2 -> H2O(l)), for carbon (-393.5 kJ for C + O2 -> CO2) and for methane (-890.3 kJ for CH4 + 2O2 -> CO2 + 2H2O(l)). The enthalpy change for C(s) + 2H2(g) -> CH4(g) is",
    options: ["-890.3 kJ", "+965.1 kJ", "+890.3 kJ", "-74.8 kJ"],
    correctIndex: 3,
    explanation:
      "The carbon and hydrogen combustion steps give -393.5 + 2(-285.8) = -965.1 kJ, and adding the reversed methane combustion step contributes +890.3 kJ; the carbon dioxide, water and oxygen then cancel, leaving -965.1 + 890.3 = -74.8 kJ.",
    evidence:
      "The enthalpy of formation of a compound is found by combining the combustion enthalpies of its elements and subtracting the combustion enthalpy of the compound itself.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-8.6",
    concept: "hess formation of methane",
  },
  {
    key: "hess-bond-enthalpy-ammonia",
    text: "Using the bond enthalpy data N triple 945, H-H 436 and N-H 391 kJ per mol, the enthalpy change estimated for N2(g) + 3H2(g) -> 2NH3(g) is",
    options: ["-93 kJ", "+93 kJ", "-2253 kJ", "+2346 kJ"],
    correctIndex: 0,
    explanation:
      "Breaking one nitrogen triple bond and three hydrogen-hydrogen bonds costs 945 + 3(436) = 2253 kJ, while forming six nitrogen-hydrogen bonds returns 6(391) = 2346 kJ, giving 2253 - 2346 = -93 kJ.",
    evidence:
      "The enthalpy change of a reaction can be estimated from bond enthalpies by summing the energies of the bonds broken and subtracting those of the bonds formed.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "CHEM-8.6",
    concept: "bond enthalpy ammonia estimate",
  },
];