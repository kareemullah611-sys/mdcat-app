import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "lattice-definition-formation",
    text: "Lattice energy of an ionic solid is the enthalpy change when",
    options: [
      "one mole of gaseous ions combine to form one mole of the ionic crystal",
      "one mole of the ionic crystal breaks down into one mole of gaseous atoms",
      "one mole of the ionic crystal vaporises completely in air",
      "gaseous ions of the solid lose their electrons to form cations",
    ],
    correctIndex: 0,
    explanation:
      "Lattice energy is defined for the formation of one mole of an ionic crystal from one mole of its gaseous ions, so energy is released and the enthalpy change is negative.",
    evidence:
      "The lattice energy of an ionic solid is the energy released when one mole of gaseous positive and negative ions combine to form one mole of the solid.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-5.5",
    concept: "lattice energy definition",
  },
  {
    key: "lattice-separation-equivalence",
    text: "Separating one mole of a crystalline ionic solid completely into one mole of separate gaseous ions requires energy that is",
    options: [
      "less than the energy released when the gaseous ions form the crystal",
      "equal in magnitude but opposite in sign to the energy released when the gaseous ions form the crystal",
      "identical to the heat of formation of the solid from its elements",
      "always zero, because energy is stored only inside the atoms",
    ],
    correctIndex: 1,
    explanation:
      "Lattice energy may be expressed either as the energy released when gaseous ions form the crystal or as the energy needed to break the crystal into gaseous ions. These two processes are reverses of each other, so the values are equal in magnitude and opposite in sign.",
    evidence:
      "The energy required to separate one mole of a crystalline solid into its gaseous ions equals the energy released when the gaseous ions combine to form the solid.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-5.5",
    concept: "lattice energy reversal",
  },
  {
    key: "lattice-enthalpy-sign",
    text: "With the usual sign convention, the lattice enthalpy of formation of magnesium oxide is",
    options: [
      "positive, because energy is absorbed as the gaseous ions come together",
      "positive, because the crystal lattice has to be broken apart",
      "negative, because the gaseous ions combine to form the crystal",
      "zero, because the lattice energy is fixed for every ionic solid",
    ],
    correctIndex: 2,
    explanation:
      "Lattice enthalpy of formation describes gaseous ions turning into the crystal, and this combination releases energy, so the value carries a negative sign. A positive value would belong to the separation of the crystal into gaseous ions.",
    evidence:
      "The lattice enthalpy of formation of an ionic solid is negative because energy is released when gaseous ions combine to form the crystal lattice.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-5.5",
    concept: "lattice enthalpy sign",
  },
  {
    key: "lattice-mgo-versus-nacl",
    text: "Magnesium oxide has a much larger lattice energy than sodium chloride. The dominant reason is that",
    options: [
      "MgO contains twice as many oxide ions per formula unit as NaCl contains chloride ions",
      "the Mg2+ and O2- ions carry charges of greater magnitude than Na+ and Cl-",
      "magnesium is the only element in MgO that forms a complete outer shell",
      "oxygen is a non-metal and therefore forms stronger bonds than chlorine",
    ],
    correctIndex: 3,
    explanation:
      "Lattice energy grows with the product of the ionic charges. Mg2+ and O2- are doubly charged, while Na+ and Cl- are singly charged, so the charge product in MgO is much larger and its lattice energy is correspondingly greater.",
    evidence:
      "The lattice energy increases with the product of the charges on the cation and the anion, so doubly charged ions give a larger value than singly charged ions.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-5.5",
    concept: "charge and lattice energy",
  },
  {
    key: "lattice-charge-size-ranking",
    text: "Considering both the charge on the ions and their sizes, which of the following compounds is expected to have the highest lattice energy?",
    options: ["Na2O", "K2O", "NaCl", "KCl"],
    correctIndex: 0,
    explanation:
      "Na2O contains a doubly charged oxide ion and the smaller sodium cation, so it combines a large charge product with a short interionic distance. K2O has the same anion but a larger cation, while NaCl and KCl have only singly charged ions.",
    evidence:
      "Lattice energy increases with ionic charge and decreases as ionic radius increases, so compounds with doubly charged ions and small cations have the largest values.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-5.5",
    concept: "lattice energy ranking",
  },
  {
    key: "lattice-lif-versus-naf",
    text: "Between lithium fluoride and sodium fluoride, the larger lattice energy belongs to LiF because",
    options: [
      "fluoride is a more electronegative ion in LiF than it is in NaF",
      "the Li+ ion is the smaller cation, so the interionic distance is shorter",
      "LiF has the higher molar mass and therefore holds stronger attractions",
      "lithium fluoride is the only one of the two that is a white solid",
    ],
    correctIndex: 1,
    explanation:
      "The ions in both compounds carry the same charges, so only size matters. Lithium is above sodium in Group 1 and its cation is smaller, so the Li+ to F- distance is shorter and the electrostatic attraction, and hence the lattice energy, is greater.",
    evidence:
      "For ions of the same charge, lattice energy decreases as the size of the cation increases, so LiF has a larger lattice energy than NaF.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-5.5",
    concept: "cation size effect",
  },
  {
    key: "lattice-mgo-versus-cao",
    text: "Magnesium oxide is harder and melts at a higher temperature than calcium oxide. The better explanation is that",
    options: [
      "Ca2+ is a more electronegative cation than Mg2+",
      "calcium oxide contains a larger number of oxide ions per formula unit",
      "Mg2+ is the smaller cation, so MgO has a shorter interionic distance and a larger lattice energy",
      "magnesium oxide is mainly covalent whereas calcium oxide is ionic",
    ],
    correctIndex: 2,
    explanation:
      "Both oxides contain O2- ions, so the comparison rests on the cation. Mg2+ is smaller than Ca2+, so the charge separation distance in MgO is shorter, its lattice energy is larger, and more thermal energy is needed to break the lattice apart.",
    evidence:
      "Lattice energy falls as ionic radius rises, which is why MgO is harder and has a higher melting point than CaO.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-5.5",
    concept: "hardness and lattice energy",
  },
  {
    key: "lattice-coulomb-relation",
    text: "Two ionic crystals have the same lattice structure but differ in their ion charges and separations. Applying Coulomb's law, the larger lattice energy belongs to the crystal in which",
    options: [
      "the product of the ionic charges is larger and the interionic distance is shorter",
      "the product of the ionic charges is larger and the interionic distance is longer",
      "the product of the ionic charges is smaller and the interionic distance is shorter",
      "the product of the ionic charges is smaller and the interionic distance is longer",
    ],
    correctIndex: 0,
    explanation:
      "The electrostatic attraction between a cation and an anion is proportional to the product of their charges and inversely proportional to the square of the distance between them, so a larger charge product and a shorter separation both raise the lattice energy.",
    evidence:
      "The magnitude of the lattice energy increases with the product of the ionic charges and decreases with increasing interionic distance, in line with Coulomb's law.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-5.5",
    concept: "electrostatic attraction",
  },
  {
    key: "lattice-born-haber-why",
    text: "The lattice energy of an ionic solid cannot be measured directly, so it is obtained from",
    options: [
      "a Born-Haber cycle assembled from measurable enthalpies such as heats of formation, ionisation and electron affinity",
      "the density of the solid multiplied by its molar mass",
      "the colour and the hardness of the solid at room temperature",
      "the rate at which the solid dissolves in water",
    ],
    correctIndex: 0,
    explanation:
      "Directly separating a crystal into gaseous ions is not possible, so lattice energy is found indirectly. In a Born-Haber cycle the measured enthalpies of sublimation, ionisation, electron affinity and formation are combined by Hess's law to leave the lattice enthalpy as the unknown quantity.",
    evidence:
      "Lattice energy cannot be measured directly and is calculated from a Born-Haber cycle that combines heats of sublimation, ionisation, electron affinity and formation.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-5.5",
    concept: "born haber cycle",
  },
  {
    key: "lattice-born-haber-steps",
    text: "In a Born-Haber cycle for an ionic solid the steps are set up in which order?",
    options: [
      "Sublimation of the solid, then formation of gaseous anions, then combination into the crystal",
      "Sublimation of the solid, then ionisation to form gaseous cations, then electron affinity of the non-metal, then combination into the crystal",
      "Formation of the crystal, then atomisation, then ionisation of the gaseous atoms",
      "Ionisation of the solid, then sublimation of the ions, then addition of electrons to the cations",
    ],
    correctIndex: 1,
    explanation:
      "The cycle starts from the solid, which is first converted to gaseous atoms by sublimation. These atoms are then ionised to form cations, the non-metal atoms gain electrons to form anions, and finally the gaseous ions combine to give the crystal.",
    evidence:
      "A Born-Haber cycle proceeds from the solid to gaseous atoms through sublimation, then to gaseous ions through ionisation and electron affinity, and finally to the crystalline solid.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-5.5",
    concept: "born haber sequence",
  },
  {
    key: "lattice-born-haber-quantities",
    text: "The measured quantities that are combined in a Born-Haber cycle to reach the lattice enthalpy of an ionic solid are",
    options: [
      "bond dissociation energies of the elements alone",
      "heats of fusion and vaporisation alone",
      "the heat of formation together with heats of sublimation, ionisation and electron affinity",
      "heats of solution and hydration alone",
    ],
    correctIndex: 2,
    explanation:
      "A Born-Haber cycle is set up entirely from experimentally measurable enthalpies: the heat of formation of the compound together with the heats of sublimation, ionisation and electron affinity of the elements. Their combination by Hess's law isolates the lattice enthalpy.",
    evidence:
      "The heat of formation, heat of sublimation, ionisation energies and electron affinities are the enthalpies combined in a Born-Haber cycle to obtain the lattice enthalpy.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-5.5",
    concept: "born haber data",
  },
  {
    key: "lattice-ion-arrangement",
    text: "In the crystal lattice of an ionic solid, each cation is surrounded by",
    options: [
      "cations of the same charge so that the total charge is balanced",
      "gaseous molecules of the element from which it was formed",
      "anions, and each anion is in turn surrounded by cations",
      "anions only, because anions are not attracted to any other ion",
    ],
    correctIndex: 3,
    explanation:
      "Opposite charges attract each other, so the arrangement that gives the most stable lattice places anions around every cation and cations around every anion. This mutual surround maximises the number of opposite-charge contacts in the crystal.",
    evidence:
      "In an ionic crystal every positive ion is surrounded by negative ions and every negative ion is surrounded by positive ions, which gives the lattice its stability.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-5.5",
    concept: "ionic lattice arrangement",
  },
  {
    key: "lattice-crystal-hardness",
    text: "Ionic crystals such as sodium chloride are hard because",
    options: [
      "strong electrostatic attractions act between oppositely charged ions in several directions at once",
      "the neighbouring atoms share electron pairs in covalent bonds",
      "the crystal contains a large number of free electrons",
      "the anions slide over the cations without meeting any repulsion",
    ],
    correctIndex: 0,
    explanation:
      "In an ionic lattice each ion is held by several oppositely charged neighbours at the same time, and displacing one row of ions would bring like charges together. The resulting network of strong attractions resists scratching and indentation.",
    evidence:
      "Hardness in ionic solids is a consequence of the strong electrostatic attraction of each ion to many oppositely charged neighbours in the lattice.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "CHEM-5.5",
    concept: "ionic crystal hardness",
  },
  {
    key: "lattice-melting-point",
    text: "An ionic solid that has a larger lattice energy than another ionic solid of similar type is expected to",
    options: [
      "melt at a lower temperature, because less energy is stored in its lattice",
      "need more energy to break its ionic attractions and therefore melt at a higher temperature",
      "melt at the same temperature, because all ionic solids melt together",
      "melt at a higher temperature and also conduct electricity while still solid",
    ],
    correctIndex: 1,
    explanation:
      "Melting an ionic solid means overcoming the electrostatic attractions that hold the ions in fixed lattice positions, so the thermal energy required is related directly to the lattice energy. A larger lattice energy therefore corresponds to a higher melting point.",
    evidence:
      "Ionic compounds with high lattice energies, such as oxides, have high melting points because more energy is needed to separate their ions.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-5.5",
    concept: "melting point relation",
  },
  {
    key: "lattice-crystal-brittleness",
    text: "An ionic crystal shatters rather than bends when a sharp force is applied, because shifting one row of ions brings",
    options: [
      "opposite charges together, so the rows bond more strongly",
      "no charged particles near each other, so the lattice falls apart",
      "like charges next to each other, and the repulsion splits the crystal along a cleavage plane",
      "electrons from the anions to the cations, leaving free metal",
    ],
    correctIndex: 2,
    explanation:
      "A displaced row places cations next to cations and anions next to anions. The repulsion between these like charges is strong enough to overcome the attractions that normally hold the layers together, so the crystal cleaves.",
    evidence:
      "Ionic solids are brittle because a shift in the lattice brings like charges together, and the resulting repulsion breaks the crystal.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-5.5",
    concept: "ionic crystal brittleness",
  },
  {
    key: "lattice-conductivity-states",
    text: "A portion of an ionic salt is examined as a solid, as a molten liquid and as an aqueous solution. In which states does it carry an electric current?",
    options: [
      "In the solid state only, because its ions are already free to move",
      "In the molten and aqueous states only, because the ions are mobile in them",
      "In all three states, because the charges on the ions never change",
      "In neither the molten nor the dissolved state, because the ions stay fixed",
    ],
    correctIndex: 1,
    explanation:
      "Current flows only when charged particles can move. In a solid the ions occupy fixed lattice sites, but melting or dissolving frees them to move, and the mobile cations and anions then carry the current.",
    evidence:
      "Ionic solids do not conduct electricity in the solid state but conduct when molten or dissolved in water, because their ions are then free to move.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-5.5",
    concept: "conduction in ionic solids",
  },
  {
    key: "lattice-conductivity-solid",
    text: "An ionic solid fails to carry an electric current through its crystal because",
    options: [
      "its ions are locked at fixed lattice positions and cannot move through the solid",
      "all the electrons have been removed from its anions",
      "the crystal contains too few ions to carry any charge",
      "its cations are converted into neutral atoms in the solid state",
    ],
    correctIndex: 0,
    explanation:
      "The crystal contains plenty of charge carriers, but in the solid state each ion is held in its lattice site by strong attractions from neighbouring oppositely charged ions. Melting or dissolving removes this restraint and lets the ions move and conduct.",
    evidence:
      "Because the ions of an ionic solid are fixed at their lattice positions, the solid state is a poor conductor of electricity.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-5.5",
    concept: "ionic conduction",
  },
  {
    key: "lattice-alkali-halide-trend",
    text: "Moving down Group 1 from LiF to NaF and then to KF, the lattice energy of these halides",
    options: [
      "decreases, because the cation grows and the interionic distance increases",
      "increases, because the cation grows and pulls the anion closer",
      "stays constant, because the anion is the same in all three compounds",
      "increases from LiF to NaF and then remains unchanged",
    ],
    correctIndex: 1,
    explanation:
      "The anion is unchanged along this series, so only the cation size varies. Li+ is the smallest and KF has the largest cation, so the separation between the ions grows from LiF to KF and the lattice energy falls in that order.",
    evidence:
      "The lattice energy of the alkali halides decreases down the group as the cation radius increases and the interionic distance becomes larger.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-5.5",
    concept: "alkali halide trend",
  },
  {
    key: "lattice-alkali-oxide-halide",
    text: "Compared with the alkali halides, the alkali oxides such as Na2O",
    options: [
      "have lower lattice energies, because the oxide ion is larger than the halide ions",
      "are covalent compounds and possess no lattice energy",
      "have higher lattice energies, because the oxide ion carries a charge of 2-",
      "have the same lattice energies, because both are sodium salts",
    ],
    correctIndex: 2,
    explanation:
      "The oxide ion carries a double negative charge, so the product of the ionic charges in an alkali oxide is twice as large as in the corresponding halide. Since lattice energy rises with this product, Na2O has a much larger lattice energy than NaCl.",
    evidence:
      "Alkali oxides such as Na2O have higher lattice energies than the alkali halides because the oxide ion is doubly charged.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-5.5",
    concept: "alkali oxide lattice energy",
  },
  {
    key: "lattice-series-ordering",
    text: "The lattice energies of KCl, LiF, Na2O and CaO are to be compared. Arranged in order of increasing lattice energy, the correct sequence is",
    options: ["LiF < KCl < Na2O < CaO", "KCl < LiF < Na2O < CaO", "Na2O < KCl < LiF < CaO", "CaO < Na2O < KCl < LiF"],
    correctIndex: 1,
    explanation:
      "Each step of this sequence raises either the charge product or reduces the ionic separation. KCl has the lowest value, LiF is larger because Li+ is very small, Na2O is larger again because of the doubly charged oxide ion, and CaO has both a small doubly charged cation and the doubly charged anion.",
    evidence:
      "Lattice energy is greatest when the ionic charges are large and the ionic radii are small, as in CaO and MgO among the alkali and alkaline earth compounds.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-5.5",
    concept: "lattice energy ordering",
  },
  {
    key: "lattice-cation-substitution",
    text: "If the Mg2+ ion of magnesium oxide were replaced by the much larger Ba2+ ion while the oxide ion stayed the same, the lattice energy of the resulting solid would",
    options: [
      "increase, because Ba2+ carries a larger nuclear charge",
      "stay unchanged, because the anion is still the oxide ion",
      "decrease, because the larger Ba2+ increases the interionic distance and weakens the attraction",
      "become zero, because the resulting solid would no longer be ionic",
    ],
    correctIndex: 2,
    explanation:
      "The charges of both ions are unchanged in this substitution, so only the separation changes. Ba2+ is considerably larger than Mg2+, so the cation-anion distance grows, the electrostatic attraction weakens, and the lattice energy falls.",
    evidence:
      "At equal charges the lattice energy decreases as ionic radius increases, so a larger cation such as Ba2+ gives a lower lattice energy than Mg2+.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 91,
    outcome: "CHEM-5.5",
    concept: "cation size substitution",
  },
  {
    key: "lattice-born-haber-statements",
    text: "Consider the statements about lattice energy. (I) It is an enthalpy change, so it obeys Hess's law. (II) It can be read straight from a thermometer placed in the solid. (III) It is obtained in a Born-Haber cycle from measured enthalpies. Which conclusion follows?",
    options: [
      "Statements I and III are correct while statement II is incorrect",
      "Statements I and II are correct while statement III is incorrect",
      "All three statements are correct",
      "Only statement III is correct",
    ],
    correctIndex: 0,
    explanation:
      "Lattice energy is an enthalpy change and therefore a state function that can be combined by Hess's law, and it is obtained indirectly from a Born-Haber cycle of measured enthalpies. It cannot be read directly from a thermometer because no arrangement allows a crystal to be separated into gaseous ions on demand.",
    evidence:
      "Lattice energy is an enthalpy change obtained indirectly through Hess's law applied to a Born-Haber cycle of measured quantities.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-5.5",
    concept: "lattice energy statements",
  },
  {
    key: "lattice-cao-versus-nacl",
    text: "Calcium oxide has a much larger lattice energy than sodium chloride even though both are held together by electrostatic forces. The chief contributing factor is that",
    options: [
      "the oxide ion is far more polarisable than the chloride ion",
      "the CaO formula unit contains a greater total number of ions",
      "calcium oxide has a greater covalent character than sodium chloride",
      "both the Ca2+ and the O2- ion carry larger charges than Na+ and Cl-",
    ],
    correctIndex: 3,
    explanation:
      "The lattice energy depends on the product of the ionic charges, and in calcium oxide both the cation and the anion are doubly charged, giving a charge product four times that of sodium chloride.",
    evidence:
      "Doubly charged cations and doubly charged anions give a much larger product of ionic charges, and therefore a much larger lattice energy, than singly charged ions.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-5.5",
    concept: "charge product effect",
  },
  {
    key: "lattice-interionic-distance",
    text: "Two ionic solids contain ions of identical charge. The solid whose ions lie further apart is expected to have",
    options: [
      "a larger lattice energy, because a longer separation always strengthens the attraction",
      "a smaller lattice energy, because electrostatic attraction weakens as separation increases",
      "no lattice energy, because attraction stops beyond a certain distance",
      "the same lattice energy, since the charges alone determine it",
    ],
    correctIndex: 1,
    explanation:
      "For ions of equal charge the lattice energy varies inversely with the interionic distance, so spreading the same charges over a larger separation lowers the attraction between them. This is why small ions such as Li+ and F- give large lattice energies.",
    evidence:
      "The lattice energy of an ionic solid decreases with increasing interionic distance when the charges on the ions remain the same.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-5.5",
    concept: "interionic distance",
  },
  {
    key: "lattice-stable-arrangement",
    text: "In an ionic crystal the ions are arranged so that each cation is surrounded by anions and each anion by cations. This arrangement gives the lattice",
    options: [
      "maximum electrostatic stabilisation, since every ion is attracted by several opposite charges",
      "the strongest possible covalent bonds between the ions",
      "the ability to conduct electricity while still in the solid state",
      "the lowest melting point among all solids of that compound",
    ],
    correctIndex: 0,
    explanation:
      "Surrounding each ion with ions of opposite charge multiplies the number of attractive interactions acting on it, which lowers the energy of the lattice. Any other arrangement would place like charges next to one another and be repelled.",
    evidence:
      "The most stable arrangement in an ionic crystal places every ion next to several ions of opposite charge, giving the lattice a large lattice energy.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-5.5",
    concept: "lattice stabilisation",
  },
];