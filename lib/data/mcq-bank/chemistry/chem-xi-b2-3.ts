import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "configa-sodium-shorthand-configuration",
    text: "The noble-gas shorthand configuration of a sodium atom (Z = 11) is",
    options: ["[Ne] 3s1", "[Ne] 3p1", "[Ar] 3s1", "[Ne] 2s2 2p1"],
    correctIndex: 0,
    explanation:
      "Sodium has 11 electrons, and the [Ne] core accounts for 10 of them, so the single remaining electron occupies the 3s orbital, which is the lowest one still vacant.",
    evidence:
      "Sodium (Z = 11) has the configuration 1s2 2s2 2p6 3s1, which is written in shorthand form as [Ne] 3s1.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-2.7",
    concept: "shorthand configuration",
  },
  {
    key: "configa-pauli-two-electrons-opposite-spins",
    text: "According to the Pauli exclusion principle, one atomic orbital can hold at most",
    options: [
      "one electron of either spin",
      "two electrons with identical spins",
      "two electrons with opposite spins",
      "three electrons with parallel spins",
    ],
    correctIndex: 2,
    explanation:
      "No two electrons in an atom can share the same set of four quantum numbers, so an orbital holds a maximum of two electrons and those two must be paired with opposite spins.",
    evidence:
      "The Pauli exclusion principle allows a maximum of two electrons in an orbital, and those two electrons have opposite spins.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-2.7",
    concept: "pauli exclusion principle",
  },
  {
    key: "configa-aufbau-lowest-orbital-first",
    text: "The Aufbau principle states that electrons are placed in atomic orbitals",
    options: [
      "of the lowest available energy first",
      "of the highest available energy first",
      "in random order, since all orbitals have the same energy",
      "in pairs, so that every occupied orbital is complete",
    ],
    correctIndex: 0,
    explanation:
      "Aufbau means building up in the manner of the least energy, so an electron occupies the lowest-energy orbital that is still vacant.",
    evidence:
      "According to the Aufbau principle, an electron occupies the orbital of lowest energy available to it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-2.7",
    concept: "aufbau principle",
  },
  {
    key: "configa-neon-full-configuration",
    text: "A neutral neon atom (Z = 10) contains ten electrons, and its full configuration is",
    options: ["1s2 2s2 2p5", "1s2 2s1 2p7", "1s2 2s2 2p6", "1s2 2s2 2p6 3s1"],
    correctIndex: 2,
    explanation:
      "Aufbau filling places two electrons in 1s, two in 2s and the remaining six in the three 2p orbitals, giving the closed-shell configuration 1s2 2s2 2p6.",
    evidence:
      "The 2p subshell is complete with six electrons in the ground states of the atoms up to argon, so neon is written 1s2 2s2 2p6.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-2.7",
    concept: "neon configuration",
  },
  {
    key: "configa-three-electrons-in-one-orbital",
    text: "A proposed configuration in which the 1s orbital is drawn holding three electrons must be rejected because it breaks",
    options: [
      "Hund's rule",
      "the Pauli exclusion principle",
      "the Aufbau principle",
      "the rule that a shell holds a maximum of 18 electrons",
    ],
    correctIndex: 1,
    explanation:
      "A third electron in one orbital would have to carry the same four quantum numbers as one already in it, which the Pauli exclusion principle forbids.",
    evidence:
      "No two electrons in an atom can have the same set of four quantum numbers, so an orbital can hold only two electrons with opposite spins.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "pauli exclusion violation",
  },
  {
    key: "configa-aufbau-violation-in-fifteen-electron-atom",
    text: "For a 15-electron atom the correct configuration is 1s2 2s2 2p6 3s2 3p3. A student instead writes 1s2 2s2 2p6 3s2 3p4 4s1, which still adds up to 15 electrons. The rule this breaks is",
    options: [
      "the Aufbau principle",
      "Hund's rule",
      "the Pauli exclusion principle",
      "the maximum capacity of the third shell",
    ],
    correctIndex: 0,
    explanation:
      "Aufbau filling requires the lowest-energy orbital to be filled first, so the 3p subshell must take its third electron before any electron can enter the higher 4s orbital.",
    evidence:
      "According to the Aufbau principle electrons fill the lowest available orbitals first, so 3p is occupied before the 4s subshell.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "aufbau violation",
  },
  {
    key: "configa-pauli-violation-in-oxygen-picture",
    text: "In a proposed orbital picture for the four 2p electrons of an oxygen atom, one 2p orbital holds two electrons with the same spin while each of the other two 2p orbitals holds one electron. This arrangement is not allowed because it breaks",
    options: [
      "the Pauli exclusion principle",
      "Hund's rule",
      "the Aufbau principle",
      "the rule that a p subshell can hold only six electrons",
    ],
    correctIndex: 0,
    explanation:
      "Two electrons in the same orbital with the same spin would have identical sets of four quantum numbers, which the Pauli exclusion principle forbids, while the rest of the arrangement already follows Hund's rule.",
    evidence:
      "The two electrons that share one orbital must be paired with opposite spins, since no two electrons in an atom can have identical four quantum numbers.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "orbital spin pairing",
  },
  {
    key: "configa-chromium-electron-count-and-half-filled-d",
    text: "A neutral chromium atom is written [Ar] 3d5 4s1 instead of [Ar] 3d4 4s2. The electron count together with the state of the d subshell that makes this the ground-state arrangement is",
    options: [
      "24 electrons with a completely filled 3d10 subshell",
      "23 electrons with a half-filled 3d5 subshell",
      "24 electrons with a half-filled 3d5 subshell",
      "24 electrons with a filled 4s subshell and an empty 3d subshell",
    ],
    correctIndex: 2,
    explanation:
      "Chromium has 24 electrons, and shifting one 4s electron into 3d leaves a half-filled 3d5 subshell whose extra stability outweighs the small promotion energy.",
    evidence:
      "Chromium adopts [Ar] 3d5 4s1 rather than [Ar] 3d4 4s2 because a half-filled d subshell is unusually stable.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "chromium configuration",
  },
  {
    key: "configa-hund-rule-degenerate-orbital-filling",
    text: "Hund's rule governs the distribution of electrons among orbitals of equal energy and requires that",
    options: [
      "electrons are added to the orbital of highest energy first",
      "each degenerate orbital holds one electron with parallel spins before any pairing occurs",
      "every orbital is filled with a pair before the next orbital is used",
      "the electrons of the subshell pair up at once with opposite spins",
    ],
    correctIndex: 1,
    explanation:
      "Hund's rule says that orbitals of the same energy are occupied singly, each with an electron of parallel spin, and further electrons pair only after every orbital is singly occupied.",
    evidence:
      "Degenerate orbitals are occupied by electrons with parallel spins, one electron in each orbital, before any pairing takes place.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-2.7",
    concept: "hund rule statement",
  },
  {
    key: "configa-chromium-three-cation-unpaired-count",
    text: "Chromium (Z = 24) has the configuration [Ar] 3d5 4s1 and its common cation is Cr3+. The number of unpaired electrons present in a Cr3+ ion is",
    options: ["1", "2", "5", "3"],
    correctIndex: 3,
    explanation:
      "The 4s electron leaves first and two 3d electrons follow, leaving [Ar] 3d3, in which three d orbitals are singly occupied with parallel spins, so three electrons are unpaired.",
    evidence:
      "A d3 arrangement occupies three d orbitals singly with parallel spins, so three electrons remain unpaired.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 91,
    outcome: "CHEM-2.7",
    concept: "chromium three cation",
  },
  {
    key: "configa-cobalt-and-nickel-two-plus-configurations",
    text: "Cobalt (Z = 27) has the configuration [Ar] 3d7 4s2 and nickel (Z = 28) has [Ar] 3d8 4s2. Both metals form 2+ ions by losing their 4s electrons first, and the resulting configurations are",
    options: [
      "Co2+ = [Ar] 3d5 and Ni2+ = [Ar] 3d6",
      "Co2+ = [Ar] 3d7 4s1 and Ni2+ = [Ar] 3d6 4s2",
      "Co2+ = [Ar] 3d7 and Ni2+ = [Ar] 3d8",
      "Co2+ = [Ar] 3d7 4s2 and Ni2+ = [Ar] 3d8 4s1",
    ],
    correctIndex: 2,
    explanation:
      "Cobalt loses two electrons to leave 25, which is [Ar] 3d7, and nickel loses two to leave 26, which is [Ar] 3d8, with both 4s subshells emptied before any 3d electron is removed.",
    evidence:
      "In forming transition-metal ions the 4s electrons are lost before the 3d electrons, so Co2+ is [Ar] 3d7 and Ni2+ is [Ar] 3d8.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "cobalt and nickel cations",
  },
  {
    key: "configa-cuprous-ion-configuration",
    text: "Copper (Z = 29) has the configuration [Ar] 3d10 4s1. The cuprous ion, Cu+, is formed by the loss of the single 4s electron only, and its configuration is",
    options: ["[Ar] 3d10", "[Ar] 3d9", "[Ar] 3d9 4s1", "[Ar] 3d8 4s1"],
    correctIndex: 0,
    explanation:
      "Losing only the 4s electron leaves 28 electrons, so the filled 3d10 subshell is untouched and Cu+ is [Ar] 3d10 with every electron paired.",
    evidence:
      "Because the 4s electron is lost before any 3d electron, Cu+ keeps the completely filled 3d10 subshell and has no unpaired electrons.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "cuprous ion configuration",
  },
  {
    key: "configa-isoelectronic-count-argon-series",
    text: "K+, Ca2+, Sc3+ and Cl- each contain the same number of electrons. That common electron count is",
    options: ["16", "17", "20", "18"],
    correctIndex: 3,
    explanation:
      "K+ has 19 - 1 = 18 electrons, Ca2+ has 20 - 2 = 18, Sc3+ has 21 - 3 = 18 and Cl- has 17 + 1 = 18, so all four are isoelectronic with argon and share the closed configuration 1s2 2s2 2p6 3s2 3p6.",
    evidence:
      "Species with equal electron counts, such as K+, Ca2+, Sc3+ and Cl- with 18 electrons, are isoelectronic and share the argon configuration.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.7",
    concept: "isoelectronic ion count",
  },
  {
    key: "configa-vanadium-three-cation-configuration",
    text: "Vanadium (Z = 23) has the configuration [Ar] 3d3 4s2. On losing one 4s electron and then two 3d electrons, the configuration of V3+ becomes",
    options: ["[Ar]", "[Ar] 3d3", "[Ar] 3d2", "[Ar] 3d1 4s1"],
    correctIndex: 2,
    explanation:
      "Vanadium loses three electrons from Z = 23, leaving 20, and because the 4s pair goes first the ion keeps two of its 3d electrons and is written [Ar] 3d2.",
    evidence:
      "Vanadium loses its 4s electrons before the 3d electrons, so V3+ has 20 electrons and the configuration [Ar] 3d2.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.7",
    concept: "vanadium three cation",
  },
  {
    key: "configa-sodium-versus-potassium-valence",
    text: "Sodium (Z = 11) is [Ne] 3s1 and potassium (Z = 19) is [Ar] 4s1. A correct comparison of the two atoms is that",
    options: [
      "sodium has two valence electrons while potassium has one",
      "both atoms have eight valence electrons in their outermost shells",
      "sodium has one valence electron in 3s and potassium has one valence electron in 4s",
      "the [Ne] core of sodium is larger than the [Ar] core of potassium",
    ],
    correctIndex: 2,
    explanation:
      "Only the outermost shell counts as valence, so each atom has a single ns electron, sodium's in 3s and potassium's in 4s, which is why both belong to group IA.",
    evidence:
      "For main-group elements the number of valence electrons equals the group A number, and sodium and potassium each have one ns valence electron.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "alkali metal valence shells",
  },
  {
    key: "configa-group-a-number-and-outermost-shell",
    text: "An element with the configuration [Ar] 3d10 4s2 4p1 has, in the older group A notation, a group number and an outermost-shell electron count of",
    options: ["3 and 1", "3 and 4", "2 and 3", "3 and 3"],
    correctIndex: 3,
    explanation:
      "The outermost shell of this element is 4s2 4p1, so it holds three electrons, and for main-group elements the group A number equals this number, placing the element in group IIIA.",
    evidence:
      "A valence shell of 4s2 4p1 gives three valence electrons, which is the group IIIA pattern of the main-group elements.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "valence electrons and group",
  },
  {
    key: "configa-group-number-equals-valence-electrons",
    text: "For the main-group elements of groups 1, 2 and 13 to 17, the group A number used in the older notation is always equal to",
    options: [
      "the number of electrons in the second shell",
      "the total number of electrons in the atom",
      "the number of electrons in the outermost shell",
      "the number of electrons in the outermost shell plus two",
    ],
    correctIndex: 2,
    explanation:
      "The group A number counts the electrons available for bonding, and for these main-group elements that number is exactly the population of the outermost shell.",
    evidence:
      "For main-group elements the group number corresponds to the number of electrons in the valence shell.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "group number and valence",
  },
  {
    key: "configa-fourth-period-configuration-sequence",
    text: "In the fourth period the configurations of potassium, calcium, scandium and titanium, in that order of increasing atomic number, are",
    options: [
      "[Ar] 4s1, [Ar] 4s2, [Ar] 3d1 4s2, [Ar] 3d2 4s2",
      "[Ar] 4s2, [Ar] 4s1, [Ar] 3d2 4s2, [Ar] 3d1 4s2",
      "[Ar] 3d1 4s1, [Ar] 3d2 4s2, [Ar] 4s2, [Ar] 4s1",
      "[Ar] 4s1, [Ar] 4s2, [Ar] 3d2 4s2, [Ar] 3d1 4s2",
    ],
    correctIndex: 0,
    explanation:
      "Potassium and calcium complete the 4s subshell, and only once 4s2 is filled do further electrons enter 3d, which gives scandium 3d1 and titanium 3d2.",
    evidence:
      "The 4s subshell is filled before 3d, so potassium is [Ar] 4s1, calcium [Ar] 4s2, scandium [Ar] 3d1 4s2 and titanium [Ar] 3d2 4s2.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "fourth period configurations",
  },
  {
    key: "configa-atomic-number-from-configuration",
    text: "An atom in its ground state has the configuration 1s2 2s2 2p6 3s2 3p4. The atomic number of this element is",
    options: ["15", "18", "14", "16"],
    correctIndex: 3,
    explanation:
      "The configuration holds 2 + 2 + 6 + 2 + 4 = 16 electrons, and a neutral atom has as many electrons as its atomic number, so the element is sulfur.",
    evidence:
      "For a neutral atom the total number of electrons written in its configuration equals its atomic number.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "atomic number from configuration",
  },
  {
    key: "configa-silicon-unpaired-and-valence-description",
    text: "The valence shell of silicon (Z = 14) is 3s2 3p2. A correct description of the silicon atom is that it has",
    options: [
      "no unpaired electrons and two valence electrons",
      "two unpaired electrons and two valence electrons",
      "four unpaired electrons and four valence electrons",
      "two unpaired electrons and four valence electrons",
    ],
    correctIndex: 3,
    explanation:
      "Hund's rule places the two 3p electrons in separate 3p orbitals with parallel spins, so two of them are unpaired, and the valence shell 3s2 3p2 holds four electrons, which is the group IVA pattern.",
    evidence:
      "A p2 subshell carries two unpaired electrons by Hund's rule, and the four valence electrons of silicon place it in group IVA.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "silicon valence and unpaired",
  },
  {
    key: "configa-iron-paired-electron-count",
    text: "In the configuration [Ar] 3d6 4s2 of an iron atom (Z = 26), the 3d6 subshell holds four unpaired electrons. The number of paired electrons in the atom is",
    options: ["18", "20", "24", "22"],
    correctIndex: 3,
    explanation:
      "Of the 26 electrons, 4 are unpaired in the 3d subshell, so the remaining 26 - 4 = 22 electrons are paired in closed inner orbitals and in the doubly occupied 3d orbital.",
    evidence:
      "Paired electrons share an orbital with opposite spins, so counting them means subtracting the unpaired electrons from the total electron count.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-2.7",
    concept: "paired electron count",
  },
  {
    key: "configa-three-filling-rules-assessment",
    text: "Three rules govern the filling of orbitals, and they are set out here. I: an orbital can hold at most two electrons and those two have opposite spins. II: electrons fill the lowest available orbital first. III: electrons occupy degenerate orbitals singly with parallel spins before pairing. The correct assessment is",
    options: [
      "only statements I and II are correct",
      "only statements I and III are correct",
      "only statement III is correct",
      "all three statements are correct",
    ],
    correctIndex: 3,
    explanation:
      "The three statements restate the Pauli exclusion principle, the Aufbau principle and Hund's rule respectively, and all three rules are applied whenever a configuration is written.",
    evidence:
      "The Pauli exclusion principle, the Aufbau principle and Hund's rule together govern the filling of atomic orbitals.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "three filling rules",
  },
  {
    key: "configa-bracketed-noble-gas-meaning",
    text: "In a shorthand configuration such as [Ar] 3d6 4s2, the bracketed part [Ar] stands for",
    options: [
      "the electrons of the outermost shell only",
      "the filled inner shells of the preceding noble gas",
      "the valence electrons of the atom",
      "the electrons that the atom will lose when it forms an ion",
    ],
    correctIndex: 1,
    explanation:
      "The bracketed symbol is shorthand for the whole configuration of the preceding noble gas, so [Ar] stands for the eighteen electrons of 1s2 2s2 2p6 3s2 3p6 and only the part written after the bracket is added.",
    evidence:
      "In shorthand notation a bracketed noble-gas symbol stands for the filled inner shells, so [Ar] accounts for eighteen electrons.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "shorthand notation meaning",
  },
  {
    key: "configa-third-period-configuration-sequence",
    text: "Listed in order of increasing atomic number, the ground-state configurations of sodium, magnesium and aluminium are",
    options: [
      "[Ne] 3s2, [Ne] 3s1, [Ne] 3s2 3p1",
      "[Ne] 3s1, [Ne] 3s2, [Ne] 3s2 3p1",
      "[Ne] 3s2, [Ne] 3s2, [Ne] 3p2",
      "[Ne] 3p1, [Ne] 3s2, [Ne] 3s2",
    ],
    correctIndex: 1,
    explanation:
      "Sodium (Z = 11) places its eleventh electron in 3s, magnesium (Z = 12) completes 3s2, and aluminium (Z = 13) adds the first electron to the 3p subshell.",
    evidence:
      "Across a period the s subshell is filled before the p subshell, so the first three elements of the third period run [Ne] 3s1, [Ne] 3s2 and [Ne] 3s2 3p1.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.7",
    concept: "third period configurations",
  },
  {
    key: "configa-ferric-ion-electron-count",
    text: "The ferric ion Fe3+ is formed from iron (Z = 26), whose configuration is [Ar] 3d6 4s2, by loss of the two 4s electrons and one 3d electron. The total number of electrons in a Fe3+ ion is",
    options: ["22", "23", "24", "25"],
    correctIndex: 1,
    explanation:
      "Losing three electrons from Z = 26 leaves 23, and the configuration [Ar] 3d5 confirms it since 18 + 5 = 23.",
    evidence:
      "The ferric ion Fe3+ has 23 electrons and the configuration [Ar] 3d5, because the 4s electrons are removed before the 3d electrons.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.7",
    concept: "ferric ion electrons",
  },
];
