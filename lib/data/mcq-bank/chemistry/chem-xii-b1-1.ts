import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-per-atomic-radius-half-distance",
    text: "The atomic radius of an element is taken as one half of the distance between the nuclei of two identical atoms bonded together in the same molecule. This half distance is also called the",
    options: [
      "covalent radius of the element",
      "ionic radius of the element",
      "van der Waals radius of the element",
      "metallic radius of the element",
    ],
    correctIndex: 0,
    explanation:
      "Half the internuclear distance of two identical bonded atoms gives the covalent radius, and this is the usual basis for quoting the atomic radius of an element.",
    evidence:
      "The atomic radius of an element is defined as half the distance between the nuclei of two identical atoms in the same molecule.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-11.1",
    concept: "covalent radius",
  },
  {
    key: "xii-per-van-der-waals-versus-covalent-radius",
    text: "The size of a noble gas atom can be measured from the centre of a non-bonded atom to the centre of a neighbouring atom, or from the nucleus of an atom to the bonding region in a diatomic molecule. The first measurement is always the larger because",
    options: [
      "the bonded form loses its outermost shell and leaves only the inner shells",
      "in a non-bonded contact the atoms are kept apart by repulsion, whereas in a covalent bond the shared pair draws the two nuclei together",
      "the nucleus of a noble gas atom carries no charge, so the bonded form expands to fill the space",
      "electrons are added to the valence shell when two noble gas atoms combine into a molecule",
    ],
    correctIndex: 1,
    explanation:
      "The non-bonded measurement gives the van der Waals radius and the bonded measurement the covalent radius; repulsion alone keeps the non-bonded atoms apart, while a shared electron pair pulls bonded nuclei closer, so the van der Waals value is the larger one.",
    evidence:
      "The van der Waals radius of an element is larger than its covalent radius because the atoms are not bonded to each other.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-11.1",
    concept: "van der Waals radius",
  },
  {
    key: "xii-per-atomic-radius-across-period",
    text: "Across the third period from sodium to argon the atomic radius falls steadily, even though the number of occupied electron shells stays the same. The fall occurs because",
    options: [
      "each new atom adds another electron shell further from the nucleus",
      "the growing electron-electron repulsion pushes the valence shell outwards",
      "the rising nuclear charge is felt strongly by the valence electrons while shielding by the filled inner shells stays nearly constant",
      "the atoms of argon are larger because their full valence shell is held less tightly",
    ],
    correctIndex: 2,
    explanation:
      "Within one period the number of shells and the inner-shell shielding change very little, so the rising nuclear charge raises the effective nuclear charge on the same valence shell and pulls it inward.",
    evidence:
      "Atomic radius decreases from left to right across a period because the effective nuclear charge on the valence shell increases.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-11.1",
    concept: "periodic radius trend",
  },
  {
    key: "xii-per-radius-up-ionisation-down-group",
    text: "Descending group 1 from lithium to caesium the atomic radius increases while the first ionisation energy decreases. Both changes are explained by",
    options: [
      "the rising nuclear charge outpacing the added shielding, so the outer shell is pulled inward more strongly",
      "each new element adding an electron shell while the inner electrons shield the outer shell more strongly",
      "the number of protons staying constant while the electron count rises at each step",
      "the outer electrons of the heavier atoms being fewer in number and therefore more tightly bound",
    ],
    correctIndex: 3,
    explanation:
      "Going down a group an extra shell is added and the inner electrons shield the outer shell, so the valence electrons are further from the nucleus and less strongly held; the atom gets larger and its first electron is easier to remove.",
    evidence:
      "Atomic radius increases and ionisation energy decreases down a group because additional shells and greater shielding weaken the pull on the outer electrons.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-11.1",
    concept: "group trends",
  },
  {
    key: "xii-per-cation-smaller-than-parent-atom",
    text: "A sodium atom loses its single 3s electron to form Na+. Compared with the neutral atom, the cation is",
    options: [
      "smaller, because the outer 3s shell is removed and the remaining electrons are held by a nucleus of unchanged charge",
      "larger, because the remaining electrons spread out to fill the space left by the lost electron",
      "larger, because losing an electron reduces the pull of the nucleus on each remaining electron",
      "of unchanged size, because ion formation alters only the electron count and not the nuclear charge",
    ],
    correctIndex: 0,
    explanation:
      "A cation is always smaller than its parent atom: sodium loses its entire outer n = 3 shell, and the same nuclear charge now acts on only ten electrons, which are drawn closer.",
    evidence:
      "A cation is smaller than its parent atom because it loses its outermost shell, while an anion is larger because it gains electrons.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-11.1",
    concept: "cation radius",
  },
  {
    key: "xii-per-anion-larger-than-parent-atom",
    text: "A gaseous chlorine atom gains one electron to form the chloride ion. Compared with the neutral atom, the chloride ion is",
    options: [
      "smaller, because the added electron completes the 3p subshell and is pulled inward by the nucleus",
      "larger, because the nuclear charge is unchanged while the extra electron increases the repulsion within the electron cloud",
      "smaller, because the added electron raises the effective nuclear charge felt by the other electrons",
      "of unchanged size, because gaining an electron does not change the number of protons",
    ],
    correctIndex: 1,
    explanation:
      "An anion is always larger than its parent atom: the same seventeen protons now hold eighteen electrons, so the increased repulsion spreads the cloud and the added electron occupies a new shell.",
    evidence:
      "An anion is larger than its parent atom because the same nuclear charge acts on a greater number of electrons.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-11.1",
    concept: "anion radius",
  },
  {
    key: "xii-per-isoelectronic-series-radius-order",
    text: "The species O2-, F-, Na+ and Mg2+ all contain eighteen electrons. Arranged from the largest to the smallest, their ionic radii follow the order",
    options: [
      "Mg2+ > Na+ > F- > O2-",
      "Na+ > F- > O2- > Mg2+",
      "O2- > F- > Na+ > Mg2+",
      "F- > O2- > Mg2+ > Na+",
    ],
    correctIndex: 2,
    explanation:
      "In an isoelectronic series the species have the same number of electrons, so radius falls as nuclear charge rises; oxygen has 8 protons and magnesium 12, giving O2- > F- > Na+ > Mg2+.",
    evidence:
      "For isoelectronic species the ionic radius decreases with increasing nuclear charge, since the same number of electrons is held by more protons.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-11.1",
    concept: "isoelectronic series",
  },
  {
    key: "xii-per-successive-ionisation-energy-magnesium",
    text: "Successive ionisation energies of magnesium are measured by removing one electron at a time from gaseous magnesium atoms. Which sequence ranks its first four values correctly?",
    options: [
      "IE4 < IE3 < IE2 < IE1",
      "IE1 < IE4 < IE2 < IE3",
      "IE2 < IE1 < IE3 < IE4",
      "IE1 < IE2 < IE3 < IE4",
    ],
    correctIndex: 3,
    explanation:
      "Each removal leaves a magnesium ion that is more strongly positive, so the next electron is held more tightly and every successive ionisation energy is larger; IE1 < IE2 < IE3 < IE4.",
    evidence:
      "Successive ionisation energies increase steeply because after each electron is removed the resulting positive ion holds the remaining electrons more strongly.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-11.1",
    concept: "successive ionisation energies",
  },
  {
    key: "xii-per-first-ionisation-energy-value-meaning",
    text: "An element is reported to have a first ionisation energy of 496 kJ mol^-1, a value close to that of sodium. The quoted figure represents",
    options: [
      "the minimum energy required to remove the most loosely held electron from one mole of gaseous atoms to form one mole of gaseous singly charged cations",
      "the total energy needed to strip every electron from one mole of gaseous atoms",
      "the energy released when one mole of gaseous atoms gains one electron to form gaseous anions",
      "the energy needed to break every bond present in one mole of the gaseous diatomic element",
    ],
    correctIndex: 0,
    explanation:
      "The first ionisation energy is the minimum energy needed to remove the most loosely held electron from one mole of gaseous atoms, producing one mole of gaseous cations; total stripping, electron gain and bond breaking are different quantities.",
    evidence:
      "The first ionisation energy is the minimum energy required to remove the most loosely held electron from one mole of gaseous atoms.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-11.1",
    concept: "first ionisation energy",
  },
  {
    key: "xii-per-ionisation-energy-across-period",
    text: "The first ionisation energies of sodium, magnesium, chlorine and argon all lie below 1600 kJ mol^-1, yet the values rise steadily from sodium to argon. The steady rise is due to",
    options: [
      "the addition of inner shell electrons, which shield the valence electrons more strongly at each step",
      "an increase in nuclear charge at almost unchanged shell structure, so the valence electrons are held more tightly",
      "an increase in atomic size, since a larger atom always loses an electron more easily",
      "a reduction in the number of electrons occupying the second shell as the period is crossed",
    ],
    correctIndex: 1,
    explanation:
      "Across a period electrons enter the same outer shell, so added protons are felt directly; the effective nuclear charge rises and the valence electrons are held more tightly, raising the first ionisation energy.",
    evidence:
      "First ionisation energy generally increases across a period because the effective nuclear charge on the valence shell rises.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-11.1",
    concept: "ionisation energy trend",
  },
  {
    key: "xii-per-nitrogen-oxygen-ionisation-anomaly",
    text: "Three statements about nitrogen and oxygen are given. I: nitrogen has a slightly higher first ionisation energy than oxygen. II: the half-filled 2p^3 arrangement of nitrogen is unusually stable. III: in oxygen the fourth 2p electron has to share an orbital and is repelled by the electron already paired there. Which combination of statements is correct?",
    options: [
      "Only I is correct",
      "Only I and II are correct",
      "I, II and III are correct",
      "Only II and III are correct",
    ],
    correctIndex: 2,
    explanation:
      "Nitrogen has 2p^3, a half-filled and stable arrangement, while oxygen must place a fourth electron in an already occupied 2p orbital; the repulsion of this pair makes the oxygen electron easier to remove, so oxygen ionises more easily despite its greater nuclear charge.",
    evidence:
      "The first ionisation energy of nitrogen is slightly higher than that of oxygen because of the extra stability of the half-filled 2p subshell.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-11.1",
    concept: "ionisation energy anomaly",
  },
  {
    key: "xii-per-electron-affinity-halogens-noble-gases",
    text: "Electron affinity is the energy released when an electron is added to a gaseous atom. Among the elements of the second period, the correct statement is",
    options: [
      "the noble gases have the highest electron affinities because their complete shells attract an added electron strongly",
      "electron affinity rises steadily from carbon to fluorine and then rises again for neon",
      "fluorine has a very small electron affinity because it is the most electronegative element",
      "the halogens fluorine and chlorine release the most energy on gaining an electron, while the noble gases have values close to zero",
    ],
    correctIndex: 3,
    explanation:
      "A halogen needs only one electron to complete its octet, so fluorine and chlorine release a large amount of energy on gaining one; a noble gas already has a complete shell and gains an electron very reluctantly, giving a value near zero.",
    evidence:
      "Electron affinities are highest for the halogens and are close to zero for the noble gases, which have stable complete shells.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-11.1",
    concept: "electron affinity trend",
  },
  {
    key: "xii-per-pauling-electronegativity-scale",
    text: "On the Pauling scale electronegativity values run from about 0.7 at the low end to 4.0 at the high end. The pair of elements occupying the two extremes of the scale is",
    options: [
      "fluorine and caesium",
      "fluorine and sodium",
      "chlorine and caesium",
      "oxygen and hydrogen",
    ],
    correctIndex: 0,
    explanation:
      "Fluorine is assigned the maximum Pauling value of 4.0 as the most electronegative element, while caesium carries the lowest tabulated value of about 0.7.",
    evidence:
      "On the Pauling scale electronegativity ranges from about 0.7 to 4.0, with fluorine the most electronegative element.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-11.1",
    concept: "Pauling electronegativity",
  },
  {
    key: "xii-per-electronegativity-noble-gas-exception",
    text: "Three statements about electronegativity are given. I: fluorine is the most electronegative element with a Pauling value of 4.0. II: noble gases such as neon carry electronegativity values on the usual Pauling scale. III: electronegativity increases across a period and decreases down a group. Which combination of statements is correct?",
    options: [
      "Only I is correct",
      "Only I and III are correct",
      "Only III is correct",
      "I, II and III are correct",
    ],
    correctIndex: 1,
    explanation:
      "Fluorine tops the Pauling scale at 4.0 and the rise across a period with fall down a group follows the change in effective nuclear charge; noble gases are normally excluded because they do not form ordinary covalent bonds, so statement II is false.",
    evidence:
      "Electronegativity increases across a period and decreases down a group, and the noble gases are not assigned Pauling electronegativity values.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-11.1",
    concept: "electronegativity trends",
  },
  {
    key: "xii-per-bond-energy-definition",
    text: "The bond energy of a substance is defined as",
    options: [
      "the enthalpy change when one mole of a gaseous substance is formed from its separated gaseous atoms",
      "the energy required to separate one mole of a liquid substance into free gaseous atoms",
      "the energy required to break one mole of bonds in one mole of the gaseous substance",
      "the total energy needed to break every bond present in one mole of the gaseous substance",
    ],
    correctIndex: 2,
    explanation:
      "Bond energy refers to one mole of bonds broken in the gaseous state; the energy released on forming bonds is equal in size but opposite in sign, and breaking every bond in a molecule is a total atomisation, not a single bond energy.",
    evidence:
      "Bond energy is the energy required to break one mole of bonds in one mole of a gaseous substance.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-11.1",
    concept: "bond energy",
  },
  {
    key: "xii-per-bond-length-versus-bond-order",
    text: "Bond length is roughly inversely related to bond order, so the more bonding electrons shared between two nuclei the shorter the bond. For the carbon-carbon bond in ethane, ethene and ethyne, the correct order of bond length from shortest to longest is",
    options: [
      "single bond < double bond < triple bond",
      "double bond < single bond < triple bond",
      "single bond < triple bond < double bond",
      "triple bond < double bond < single bond",
    ],
    correctIndex: 3,
    explanation:
      "Higher bond order means a stronger pull of the bonding electrons towards both nuclei, which draws the carbon atoms closer together; bond length therefore falls as bond order rises from one to three.",
    evidence:
      "Bond length decreases as bond order increases and as the size of the bonded atoms decreases.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-11.1",
    concept: "bond length",
  },
  {
    key: "xii-per-s-block-groups-and-configuration",
    text: "The s-block of the periodic table consists of",
    options: [
      "groups 1 and 2, whose differentiating electron fills the outermost s subshell as ns^1 or ns^2",
      "groups 1 and 2 together with groups 13 and 14",
      "groups 3 to 12, whose differentiating electron enters the penultimate d subshell",
      "the two rows of lanthanides and actinides drawn below the main body of the table",
    ],
    correctIndex: 0,
    explanation:
      "The s-block forms the first two columns of the periodic table; the valence configuration of its elements is ns^1 (group 1) or ns^2 (group 2), so hydrogen, the alkali metals and the alkaline earth metals belong to it.",
    evidence:
      "The s-block contains groups 1 and 2, whose elements have the general valence configuration ns^1 to ns^2.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-11.2",
    concept: "s-block elements",
  },
  {
    key: "xii-per-p-block-groups-and-configuration",
    text: "Elements of the p-block occupy groups 13 to 18 of the periodic table. Their valence configuration is of the form",
    options: [
      "ns^2 with the penultimate d subshell empty or complete",
      "ns^2 np^1 to ns^2 np^6",
      "ns^1 to ns^2 with no electrons beyond the outermost s subshell",
      "an incomplete f subshell together with ns^2",
    ],
    correctIndex: 1,
    explanation:
      "Across groups 13 to 18 the differentiating electron enters the outermost p subshell while the s subshell stays filled with two electrons, so the block runs from ns^2 np^1 (boron family) to ns^2 np^6 (the noble gases).",
    evidence:
      "The p-block elements of groups 13 to 18 have the general valence configuration ns^2 np^1 to ns^2 np^6.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-11.2",
    concept: "p-block elements",
  },
  {
    key: "xii-per-d-block-incomplete-d-subshell",
    text: "The d-block spans groups 3 to 12 and is also called the transition elements because",
    options: [
      "the ground states of its atoms contain no electrons at all in the outermost s subshell",
      "these are the elements drawn in the two separate rows below the main body of the table",
      "a d subshell is being filled progressively in their ground states, so they possess an incompletely filled d level",
      "their valence electrons occupy only the outermost p subshell of the atom",
    ],
    correctIndex: 2,
    explanation:
      "In the d-block the differentiating electron enters the penultimate d subshell, which is filled only part way across groups 3 to 12; an incompletely filled d subshell is the origin of the name transition elements.",
    evidence:
      "The d-block elements of groups 3 to 12 are called transition elements because their atoms and common ions have an incompletely filled d subshell.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-11.2",
    concept: "d-block elements",
  },
  {
    key: "xii-per-f-block-separate-placement",
    text: "The lanthanides and actinides are usually drawn in two extra rows below the main body of the periodic table instead of being inserted between groups 2 and 3. This arrangement is adopted because",
    options: [
      "their chemical properties are unlike those of every other block, so they cannot be placed in the main body",
      "their outer f electrons are core electrons and take no part in bonding, so they have no fixed position",
      "the periodic table has only seven periods and the f-block would need three further periods to fit",
      "inserting fourteen elements between groups 2 and 3 would make the column widths irregular and break the pattern of groups",
    ],
    correctIndex: 3,
    explanation:
      "Fourteen members in each of the two series would stretch a single row of the table and destroy the uniform column widths, so the f-block is shown separately below the main body while the group pattern of the table stays intact.",
    evidence:
      "The lanthanides and actinides are placed separately below the main periodic table only for convenience of layout.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-11.2",
    concept: "f-block placement",
  },
  {
    key: "xii-per-p-block-element-set",
    text: "Select the set that contains only elements belonging to the p-block of the periodic table.",
    options: [
      "B, Si, Br, Kr",
      "Li, Be, B, C",
      "Fe, Co, Ni, Cu",
      "Ce, Nd, Sm, Eu",
    ],
    correctIndex: 0,
    explanation:
      "Boron, silicon, bromine and krypton all fall in groups 13 to 18 with an ns^2 np^1 to ns^2 np^6 valence configuration; lithium and beryllium are s-block, the Fe to Cu set is d-block and the Ce to Eu set is f-block.",
    evidence:
      "The p-block comprises the elements of groups 13 to 18, including the halogens and the noble gases.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-11.2",
    concept: "p-block membership",
  },
  {
    key: "xii-per-configuration-identifies-block",
    text: "An element of period 4 has the ground state configuration [Ar] 3d^5 4s^2. The element belongs to the",
    options: [
      "s-block, group 1",
      "d-block, group 7",
      "p-block, group 15",
      "f-block, lanthanide series",
    ],
    correctIndex: 1,
    explanation:
      "The differentiating electron enters the 3d subshell of the penultimate shell, which places the element in the d-block, and 5 + 2 = 7 gives group 7, the position of manganese.",
    evidence:
      "An element whose differentiating electron fills a d subshell belongs to the d-block, and its group number is the sum of the d and s electrons.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-11.2",
    concept: "block identification",
  },
  {
    key: "xii-per-chlorine-argon-p-block-distinction",
    text: "Chlorine and argon are neighbours in the same period and both lie in the p-block. What distinguishes the two of them within that block?",
    options: [
      "chlorine uses only its outermost s subshell, while argon fills a d subshell",
      "argon belongs to the s-block because its outer shell is completely filled",
      "chlorine has a partially filled p subshell of np^5, while argon has a completely filled p subshell of np^6",
      "chlorine is placed in the d-block because it can complete its octet by gaining electrons",
    ],
    correctIndex: 2,
    explanation:
      "Both elements have the ns^2 part of the p-block configuration, but chlorine stops at np^5 with one electron missing while argon reaches np^6 with a complete octet, which is why chlorine is reactive and argon is not.",
    evidence:
      "Within the p-block the halogen chlorine has the configuration ns^2 np^5 and the noble gas argon ns^2 np^6.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-11.2",
    concept: "halogen versus noble gas",
  },
  {
    key: "xii-per-block-order-across-period",
    text: "Along a period of the long form of the periodic table the groups always appear in the same sequence of blocks. Listing the groups of the main body of the table from left to right, this sequence is",
    options: [
      "s-block, p-block, d-block",
      "p-block, s-block, d-block",
      "d-block, s-block, p-block",
      "s-block for groups 1-2, d-block for groups 3-12, p-block for groups 13-18",
    ],
    correctIndex: 3,
    explanation:
      "The first two columns are the s-block, the ten central columns are the d-block and the last six columns are the p-block; the f-block is not part of the main body and is drawn separately below it.",
    evidence:
      "The periodic table is divided into an s-block of two groups, a d-block of ten groups and a p-block of six groups, with the f-block placed separately.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-11.2",
    concept: "block sequence",
  },
  {
    key: "xii-per-f-block-cation-configuration",
    text: "A period 6 element forms a 3+ cation with the configuration [Xe] 4f^5. The element belongs to the",
    options: [
      "f-block, the lanthanide series",
      "d-block, the first transition series",
      "p-block, group 15",
      "s-block, group 3",
    ],
    correctIndex: 0,
    explanation:
      "A 3+ cation with a partly filled 4f subshell means three electrons were lost from an atom whose ground state held a filled 4f level with an ns^2 pair; this is a lanthanide, so the element belongs to the f-block.",
    evidence:
      "The lanthanides and actinides are f-block elements, distinguished by progressive filling of the f subshell.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 88,
    outcome: "CHEM-11.2",
    concept: "f-block identification",
  },
];
