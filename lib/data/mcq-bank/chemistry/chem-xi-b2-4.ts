import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "configb-magnesium-full-configuration",
    text: "The complete ground-state electron configuration of a magnesium atom (Z = 12) is",
    options: [
      "1s2 2s2 2p6 3s2",
      "1s2 2s2 2p6 3p2",
      "1s2 2s2 2p6 3s1 3p1",
      "1s2 2s2 2p6 3s2 3p1",
    ],
    correctIndex: 0,
    explanation:
      "Aufbau filling puts 12 electrons into 1s2 2s2 2p6 and the remaining two into the 3s orbital, so the 3p subshell is still empty and the total is 2 + 2 + 6 + 2 = 12.",
    evidence:
      "Magnesium (Z = 12) fills the lowest orbitals first and has the configuration 1s2 2s2 2p6 3s2.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "magnesium configuration",
  },
  {
    key: "configb-sulfide-ion-added-electrons",
    text: "A sulfide ion, S2-, forms when a sulfur atom with configuration 1s2 2s2 2p6 3s2 3p4 gains two electrons. Those added electrons occupy",
    options: [
      "the 3s orbital, which would then hold four electrons",
      "the filled 2p subshell, since electrons always enter the lowest shell",
      "the empty 3d subshell of the third shell",
      "the two empty 3p orbitals, completing 3p6",
    ],
    correctIndex: 3,
    explanation:
      "In 3p4 two of the three 2p-type 3p orbitals are singly occupied, so the two added electrons pair in those orbitals and the 18-electron ion takes the argon configuration 1s2 2s2 2p6 3s2 3p6.",
    evidence:
      "The sulfide ion has 18 electrons and the same configuration as argon, 1s2 2s2 2p6 3s2 3p6.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "sulfide ion configuration",
  },
  {
    key: "configb-chloride-ion-electron-count",
    text: "The total number of electrons present in a chloride ion, Cl-, is",
    options: ["17", "18", "19", "20"],
    correctIndex: 1,
    explanation:
      "Chlorine has atomic number 17, so taking up one electron gives 18 electrons arranged as 1s2 2s2 2p6 3s2 3p6, the same configuration as argon.",
    evidence:
      "Chlorine (Z = 17) gains one electron to form Cl-, which then has 18 electrons, the same number as argon.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-2.7",
    concept: "chloride ion electrons",
  },
  {
    key: "configb-phosphorus-three-p-electrons",
    text: "A neutral phosphorus atom has the configuration 1s2 2s2 2p6 3s2 3p3. By Hund's rule the three 3p electrons must",
    options: [
      "occupy the three 3p orbitals singly, all with spins in the same direction",
      "occupy the three 3p orbitals singly, but with spins in opposite directions",
      "pair two of them in one 3p orbital and place the third in the next 3p orbital",
      "all three pair together inside a single 3p orbital",
    ],
    correctIndex: 0,
    explanation:
      "Hund's rule requires degenerate orbitals of equal energy to be occupied singly with parallel spins before any pairing takes place, so the 3p3 subshell of phosphorus holds three unpaired electrons.",
    evidence:
      "Degenerate orbitals are occupied singly with parallel spins before electrons pair, so a 3p3 subshell has three unpaired electrons.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-2.7",
    concept: "hund rule filling",
  },
  {
    key: "configb-sulfur-unpaired-electron-count",
    text: "How many unpaired electrons are present in the valence shell of a ground-state sulfur atom?",
    options: ["0", "1", "2", "3"],
    correctIndex: 2,
    explanation:
      "Sulfur (Z = 16) has 1s2 2s2 2p6 3s2 3p4, and the four 3p electrons distribute as 2, 1, 1 across the three 3p orbitals, so two of them remain unpaired.",
    evidence:
      "A 3p4 subshell contains one paired orbital and two singly occupied orbitals, so a sulfur atom has two unpaired electrons.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-2.7",
    concept: "unpaired electron count",
  },
  {
    key: "configb-chlorine-atom-versus-ion-unpaired",
    text: "A neutral chlorine atom and a chloride ion differ in the number of unpaired electrons. Compared with the atom, the Cl- ion has",
    options: [
      "two more unpaired electrons",
      "one more unpaired electron",
      "the same single unpaired electron",
      "no unpaired electrons",
    ],
    correctIndex: 3,
    explanation:
      "The 3p5 subshell of the chlorine atom carries one unpaired electron, and the added electron completes 3p6, so the ion 1s2 2s2 2p6 3s2 3p6 has every electron paired.",
    evidence:
      "A completely filled p subshell such as 3p6 contains no unpaired electrons, so the chloride ion is diamagnetic.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "ion unpaired electrons",
  },
  {
    key: "configb-isoelectronic-smallest-cation",
    text: "Four species each contain 18 electrons: S2-, Cl-, Ca2+ and K+. The species with the smallest radius is",
    options: ["S2-", "Cl-", "Ca2+", "K+"],
    correctIndex: 2,
    explanation:
      "Because the electron cloud is identical in all four species, the ion with the most protons holds it most tightly, and Ca2+ has 20 protons against 19, 17 and 16 for the others.",
    evidence:
      "Among isoelectronic species the radius decreases as the number of protons increases, because the larger nuclear charge draws the same electrons closer.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "isoelectronic radius",
  },
  {
    key: "configb-isoelectronic-largest-anion",
    text: "Which of the four isoelectronic species Na+, O2-, F- and Mg2+ should have the largest radius?",
    options: ["O2-", "F-", "Na+", "Mg2+"],
    correctIndex: 0,
    explanation:
      "All four ions hold 10 electrons, but O2- has only 8 protons, so its nucleus attracts the shared cloud least strongly and the radius order runs O2- > F- > Na+ > Mg2+.",
    evidence:
      "Of a set of isoelectronic ions the one with the fewest protons is the largest, because the effective nuclear charge acting on the electrons is smallest.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "isoelectronic cation radius",
  },
  {
    key: "configb-four-s-electron-removed-first",
    text: "An iron atom has the configuration [Ar] 3d6 4s2. In forming Fe2+, which electrons are lost first and what configuration results?",
    options: [
      "the two 4s electrons, giving [Ar] 3d6",
      "the two 3d electrons, giving [Ar] 3d4 4s2",
      "one 4s and one 3d electron, giving [Ar] 3d5 4s1",
      "the two 3d electrons, giving [Ar] 3d6 4s2",
    ],
    correctIndex: 0,
    explanation:
      "Although the 4s subshell fills before 3d in the neutral atom, it becomes the highest occupied level in the cation, so both 4s electrons leave and Fe2+ retains the 3d6 arrangement.",
    evidence:
      "Cations of transition metals lose their 4s electrons before the 3d electrons, so Fe2+ is written [Ar] 3d6.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-2.7",
    concept: "four s ionisation",
  },
  {
    key: "configb-chromium-copper-aufbau-exception",
    text: "Chromium and copper depart from the simple Aufbau filling order for the 4s and 3d subshells. The reason is that",
    options: [
      "the 3d orbitals lie far above 4s in these atoms, so 4s must fill first",
      "the 3d and 4s levels are very close in energy, so a half-filled 3d5 and a completely filled 3d10 subshell gain extra stability",
      "the Pauli exclusion principle compels electrons of opposite spin to move from 4s into 3d",
      "the 4s orbital is already complete and can accept no further electron in either metal",
    ],
    correctIndex: 1,
    explanation:
      "Because the energy gap between 3d and 4s is so small, the extra stability of a half-filled or completely filled d subshell outweighs the small promotion cost, giving [Ar] 3d5 4s1 for chromium and [Ar] 3d10 4s1 for copper.",
    evidence:
      "Chromium and copper adopt [Ar] 3d5 4s1 and [Ar] 3d10 4s1 because half-filled and completely filled d subshells are unusually stable.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "aufbau exceptions",
  },
  {
    key: "configb-copper-two-plus-unpaired-count",
    text: "Copper has the configuration [Ar] 3d10 4s1. On that basis, how many unpaired electrons are present in Cu2+?",
    options: ["0", "1", "2", "3"],
    correctIndex: 1,
    explanation:
      "Copper loses its single 4s electron and then one 3d electron to give [Ar] 3d9, in which four d orbitals are paired and one is singly occupied, leaving exactly one unpaired electron.",
    evidence:
      "A d9 arrangement such as Cu2+ keeps four d orbitals filled with pairs and one d orbital singly occupied, so one electron remains unpaired.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "copper two cation",
  },
  {
    key: "configb-iron-two-versus-three-unpaired",
    text: "Iron forms Fe2+ with configuration [Ar] 3d6 and Fe3+ with configuration [Ar] 3d5. A correct comparison of the two ions is that",
    options: [
      "Fe2+ has five unpaired electrons while Fe3+ has none",
      "both ions are diamagnetic because the d subshell is only partly filled",
      "Fe2+ has four unpaired electrons and Fe3+ has five, so Fe3+ is the more strongly paramagnetic",
      "Fe2+ has six unpaired electrons and Fe3+ has four",
    ],
    correctIndex: 2,
    explanation:
      "In d6 four of the five d orbitals are singly occupied and one is paired, giving four unpaired electrons, while d5 fills all five d orbitals singly, so Fe3+ carries more unpaired electrons and is more strongly paramagnetic.",
    evidence:
      "The number of unpaired electrons rises as the d subshell fills toward half-filled d5, which is why Fe3+ is more strongly paramagnetic than Fe2+.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "iron ion magnetism",
  },
  {
    key: "configb-four-s-versus-three-d-energy-shift",
    text: "In a neutral transition-metal atom the 4s orbital lies below the 3d subshell, so 4s fills first, yet these metals lose their 4s electrons on ionisation. The best explanation is that",
    options: [
      "losing electrons cuts down shielding, so the 3d level is pulled below 4s and the 4s electrons then leave first as the highest-energy ones",
      "the Pauli exclusion principle forbids more than two electrons in a d orbital, so 4s electrons must move down into 3d",
      "the 4s orbital lies in the outermost shell and can therefore never hold more than two electrons",
      "the 3d electrons belong to an inner shell and are removed first as a matter of convention",
    ],
    correctIndex: 0,
    explanation:
      "After ionisation the 3d electrons feel the full nuclear attraction without the compensating 4s shielding, so the 3d level drops below 4s and the now highest-energy 4s electrons are the first to leave.",
    evidence:
      "The 4s subshell fills before 3d in the neutral atom but is emptied first on ionisation, because the 3d orbitals then lie lower in energy.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "orbital energy ordering",
  },
  {
    key: "configb-subshell-filling-order-potassium-bromine",
    text: "As the atomic number rises from 19 to 35, the subshells of the neutral atoms are occupied in which order?",
    options: [
      "3d, then 4s, then 4p",
      "4p, then 4s, then 3d",
      "4s, then 4p, then 3d",
      "4s, then 3d, then 4p",
    ],
    correctIndex: 3,
    explanation:
      "The n + l rule puts 4s (n + l = 4) below 3d (n + l = 5), and 4p shares n + l = 5 with 3d but has the larger n, so 4p follows and bromine ends at 4p5.",
    evidence:
      "Subshells fill in order of increasing n + l and, where n + l is equal, the smaller n fills first, which gives 4s before 3d and 4p after 3d.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "subshell filling order",
  },
  {
    key: "configb-bromine-period-and-group",
    text: "An element has the ground-state configuration [Ar] 3d10 4s2 4p5. Its position in the modern periodic table is",
    options: [
      "period 3, group 17",
      "period 4, group 15",
      "period 4, group 17",
      "period 5, group 17",
    ],
    correctIndex: 2,
    explanation:
      "The highest principal quantum number occupied is 4, so the element belongs to period 4, and the 4s2 4p5 valence arrangement gives seven valence electrons, which is the pattern of group 17.",
    evidence:
      "The period number equals the highest principal quantum number occupied, and for a main-group element the group number follows from the number of valence electrons.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "period and group deduction",
  },
  {
    key: "configb-valency-trend-third-period",
    text: "Across the third period the valencies of the elements from sodium to argon run 1, 2, 3, 4, 3, 2, 1, 0. This sequence arises from",
    options: [
      "the steady increase of atomic radius across the period, which weakens the pull on valence electrons",
      "the number of electrons in the outermost shell, since atoms gain, lose or share electrons until the octet is complete",
      "the number of occupied d orbitals, which changes at every step across the period",
      "the fall in the number of inner-shell electrons from left to right",
    ],
    correctIndex: 1,
    explanation:
      "Valency is fixed by how many electrons are needed to complete an octet: sodium with one 3s electron loses it, sulfur with 3s2 3p4 needs two more, and argon already holds eight valence electrons.",
    evidence:
      "Valency across a period is governed by the number of valence electrons, because elements combine so as to attain a stable octet.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "valency periodicity",
  },
  {
    key: "configb-group-two-ns2-cations",
    text: "Consider a group 2 element M with the configuration [Xe] 6s2. I: it has two valence electrons. II: it forms M2+ by losing both 6s electrons. III: the ion M2+ still carries an occupied n = 6 shell holding that pair. Which combination of statements is correct?",
    options: [
      "Only I and II are correct",
      "Only I and III are correct",
      "Only II and III are correct",
      "Only statement I is correct",
    ],
    correctIndex: 0,
    explanation:
      "The [Xe] 6s2 configuration gives two valence electrons and both are lost to form M2+, after which the outermost occupied shell is the n = 5 shell of the xenon core, so statement III fails.",
    evidence:
      "Group 2 elements have an ns2 valence configuration and form 2+ ions by losing both ns electrons, leaving a noble-gas core.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.7",
    concept: "group two valency",
  },
  {
    key: "configb-titanium-three-plus-statements",
    text: "Titanium (Z = 22) has the configuration [Ar] 3d2 4s2 and its common cation is Ti3+ with [Ar] 3d1. I: Ti3+ contains 19 electrons. II: both 4s electrons are removed before any 3d electron. III: Ti3+ has three unpaired electrons. Which combination of statements is correct?",
    options: [
      "Only I and II are correct",
      "Only I and III are correct",
      "Only II and III are correct",
      "Only statement III is correct",
    ],
    correctIndex: 0,
    explanation:
      "Losing three electrons from Z = 22 leaves 19, the two 4s electrons going first and one 3d electron second, so the ion [Ar] 3d1 has a single unpaired electron and statement III does not hold.",
    evidence:
      "Titanium's cation Ti3+ is written [Ar] 3d1 because the 4s electrons are removed first when a transition metal ionises.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 91,
    outcome: "CHEM-2.7",
    concept: "titanium three cation",
  },
  {
    key: "configb-legal-distribution-nitrogen",
    text: "Which valence arrangement of a nitrogen atom, with the subshell label 2s2 2p3, obeys both the Pauli exclusion principle and Hund's rule?",
    options: [
      "2s2, with one 2p orbital holding two electrons of opposite spin and the other two 2p orbitals empty",
      "2s2, with each of the three 2p orbitals holding one electron and all spins parallel",
      "2s2, with all three 2p electrons placed inside a single 2p orbital",
      "2s2, with two of the 2p orbitals each holding a complete pair",
    ],
    correctIndex: 1,
    explanation:
      "Pauli's principle allows at most two electrons of opposite spin in any one orbital and Hund's rule places one electron of parallel spin in each degenerate orbital, so the singly and parallel arrangement in the three 2p orbitals is the correct one.",
    evidence:
      "Pauli's principle permits a maximum of two electrons with opposite spins in an orbital, and Hund's rule fills degenerate orbitals singly with parallel spins.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-2.7",
    concept: "orbital filling rules",
  },
  {
    key: "configb-chromium-total-unpaired-count",
    text: "The ground-state configuration of chromium is [Ar] 3d5 4s1. The total number of unpaired electrons in one chromium atom is",
    options: ["5", "1", "6", "7"],
    correctIndex: 2,
    explanation:
      "The five 3d electrons occupy the five d orbitals singly with parallel spins and the single 4s electron is unpaired as well, so chromium has 5 + 1 = 6 unpaired electrons.",
    evidence:
      "Chromium is [Ar] 3d5 4s1, giving one unpaired 4s electron together with five unpaired 3d electrons.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "chromium unpaired count",
  },
  {
    key: "configb-copper-two-colour-and-magnetism",
    text: "Compounds of Cu2+ are blue and paramagnetic. The electron configuration accounts for both properties because Cu2+ has the configuration",
    options: [
      "[Ar] 3d10, which is completely filled",
      "[Ar] 3d9 4s1, with one unpaired 4s electron",
      "[Ar] 3d8 4s2, with two unpaired 4s electrons",
      "[Ar] 3d9, with one unpaired d electron",
    ],
    correctIndex: 3,
    explanation:
      "Copper loses its only 4s electron and then one 3d electron to form [Ar] 3d9, in which one d orbital is singly occupied; the unpaired d electron makes the ion paramagnetic and the partly filled d level absorbs visible light.",
    evidence:
      "Colour and paramagnetism in transition-metal compounds both arise from unpaired electrons in a partly filled d subshell.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.7",
    concept: "colour and magnetism",
  },
  {
    key: "configb-aluminium-versus-magnesium-ionisation",
    text: "The first ionisation energy of aluminium is slightly lower than that of magnesium even though aluminium carries the larger nuclear charge. Their configurations explain this because",
    options: [
      "aluminium has an empty 3s orbital, so its 3p electron is left completely unbound",
      "the 3s electrons of magnesium are shielded by a filled 3p subshell",
      "aluminium has one more proton, so its nucleus must hold the outermost electron more loosely",
      "magnesium ionises from the 3s subshell, whereas aluminium loses a higher-energy 3p electron that is better shielded by the filled 3s pair",
    ],
    correctIndex: 3,
    explanation:
      "Magnesium ends in 3s2 while aluminium ends in 3s2 3p1, and that lone 3p electron is higher in energy and more effectively screened by the filled 3s subshell, so it leaves more easily.",
    evidence:
      "Electrons in a 3p orbital lie above the 3s level and are shielded by it, which lowers the first ionisation energy of aluminium relative to magnesium.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.7",
    concept: "ionisation and configuration",
  },
  {
    key: "configb-isoelectronic-pair-selection",
    text: "Which pair of species contains the same number of electrons in each member?",
    options: ["Mg2+ and Na+", "Na+ and F-", "Ca2+ and K+", "S2- and Cl-"],
    correctIndex: 1,
    explanation:
      "Na+ holds 11 - 1 = 10 electrons and F- holds 9 + 1 = 10 electrons, so both share the configuration 1s2 2s2 2p6, whereas each remaining pair differs by one electron.",
    evidence:
      "Species with the same number of electrons, such as Na+ and F-, are isoelectronic and share an identical electron configuration.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.7",
    concept: "isoelectronic species",
  },
  {
    key: "configb-argon-family-radius-sequence",
    text: "Argon, K+ and Ca2+ each hold 18 electrons. Arranging them in order of increasing radius gives",
    options: [
      "Ar < K+ < Ca2+",
      "K+ < Ca2+ < Ar",
      "Ca2+ < K+ < Ar",
      "Ar < Ca2+ < K+",
    ],
    correctIndex: 2,
    explanation:
      "The electron cloud is identical in all three species, so the 20 protons of Ca2+ compress it most, the 19 protons of K+ compress it less and the 18 protons of argon least, giving Ca2+ < K+ < Ar.",
    evidence:
      "For a common number of electrons the radius grows as the proton count falls, because the smaller nuclear charge offers weaker attraction.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-2.7",
    concept: "radius ordering",
  },
  {
    key: "configb-noble-gas-octet-valency",
    text: "A neutral species with the configuration 1s2 2s2 2p6 3s2 3p6 belongs to which of the following descriptions?",
    options: [
      "a halogen of the third period that forms a 1- ion",
      "a noble gas of the third period with eight valence electrons and valency zero",
      "an alkaline earth metal of the third period with two valence electrons and valency two",
      "a chalcogen of the third period with valency two",
    ],
    correctIndex: 1,
    explanation:
      "The highest occupied shell is n = 3 and it holds 3s2 3p6, eight valence electrons, so the species is argon, a noble gas whose filled octet gives it valency zero and no tendency to gain or lose electrons.",
    evidence:
      "An atom with eight valence electrons has a filled octet and behaves as a noble gas with zero valency.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.7",
    concept: "noble gas octet",
  },
];
