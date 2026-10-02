import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "vsepr-minimum-repulsion-principle",
    text: "According to VSEPR theory, the electron pairs around a central atom take up positions that",
    options: [
      "keep the pairs as far apart as possible so that repulsion between them is minimum",
      "bring every pair into one plane at equal spacing",
      "let lone pairs take the closest available positions",
      "follow the sizes of the bonded atoms instead of the pair repulsions",
    ],
    correctIndex: 0,
    explanation:
      "VSEPR rests on a single assumption, that a molecule takes the shape in which the electron pairs on the central atom repel one another least, which is achieved by maximum separation.",
    evidence:
      "VSEPR theory states that electron pairs arrange themselves as far apart as possible around the central atom to minimise repulsion between them.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-10.1",
    concept: "minimum repulsion principle",
  },
  {
    key: "vsepr-repulsion-strength-order",
    text: "The correct decreasing order of repulsion between electron pairs close to a central atom is",
    options: [
      "lone pair-bond pair > bond pair-bond pair > lone pair-lone pair",
      "lone pair-lone pair > lone pair-bond pair > bond pair-bond pair",
      "bond pair-bond pair > lone pair-bond pair > lone pair-lone pair",
      "bond pair-bond pair = lone pair-bond pair = lone pair-lone pair",
    ],
    correctIndex: 1,
    explanation:
      "A lone pair is shared by only one nucleus and so occupies more space and repels more strongly than a shared pair, which places lone pair-lone pair repulsion above lone pair-bond pair and bond pair-bond pair.",
    evidence:
      "Repulsion between electron pairs decreases in the order lone pair-lone pair, lone pair-bond pair, then bond pair-bond pair.",
    questionType: "SEQUENCE",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-10.1",
    concept: "pair repulsion order",
  },
  {
    key: "vsepr-co2-domain-count",
    text: "The number of electron domains counted around the central carbon atom of carbon dioxide is",
    options: [
      "Four, because each double bond contains two shared pairs",
      "Three, because carbon also carries a lone pair",
      "One, because the two oxygen atoms act as a single domain",
      "Two, because each C=O double bond counts as a single domain",
    ],
    correctIndex: 3,
    explanation:
      "Each C=O double bond is treated as one domain when a shape is predicted, so the carbon atom carries two domains and the molecule is linear.",
    evidence:
      "The carbon atom in CO2 has two electron domains, one for each double bond, which gives the molecule a linear shape.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-10.1",
    concept: "carbon dioxide domains",
  },
  {
    key: "vsepr-bf3-shape-three-domains",
    text: "Boron trifluoride has three bonding domains and no lone pair on boron, so its molecular shape is",
    options: ["T-shaped", "Trigonal pyramidal", "Trigonal planar", "Tetrahedral"],
    correctIndex: 2,
    explanation:
      "With three domains and no lone pair all three B-F bonds are used, and they spread out in one plane 120 degrees apart, which is the trigonal planar shape.",
    evidence:
      "BF3 has three bonding domains and no lone pair on boron, giving a trigonal planar shape with 120 degree bond angles.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-10.1",
    concept: "trigonal planar shape",
  },
  {
    key: "vsepr-domain-geometry-order",
    text: "As the number of electron domains around a central atom rises from 2 to 6, the geometries in order are",
    options: [
      "linear, trigonal planar, tetrahedral, trigonal bipyramidal, octahedral",
      "linear, tetrahedral, trigonal planar, octahedral, trigonal bipyramidal",
      "trigonal planar, linear, octahedral, tetrahedral, trigonal bipyramidal",
      "linear, trigonal planar, tetrahedral, octahedral, trigonal bipyramidal",
    ],
    correctIndex: 0,
    explanation:
      "Two, three, four, five and six domains respectively give linear, trigonal planar, tetrahedral, trigonal bipyramidal and octahedral geometries, in that order.",
    evidence:
      "Two to six electron domains around a central atom give linear, trigonal planar, tetrahedral, trigonal bipyramidal and octahedral geometries.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-10.1",
    concept: "domain geometry order",
  },
  {
    key: "vsepr-tetrahedral-angle-value",
    text: "The H-C-H bond angle in methane, where carbon has four bonding domains and no lone pair, is",
    options: ["About 120 degrees", "About 109.5 degrees", "About 180 degrees", "About 90 degrees"],
    correctIndex: 1,
    explanation:
      "Four bonding domains spread as far apart as possible occupy the corners of a tetrahedron, where every H-C-H angle is 109.5 degrees.",
    evidence:
      "In methane the four bond pairs point to the corners of a tetrahedron, giving an H-C-H bond angle of 109.5 degrees.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-10.1",
    concept: "tetrahedral angle value",
  },
  {
    key: "vsepr-ammonia-angle-compression",
    text: "The H-N-H bond angle in ammonia is close to 107 degrees instead of 109.5 degrees because",
    options: [
      "the nitrogen nucleus repels the three N-H bonds and straightens them",
      "ammonia is really a mixture of nitrogen and hydrogen in a 1:3 ratio",
      "the lone pair on nitrogen occupies more space than a bond pair and squeezes the N-H bonds closer",
      "the three N-H bonds are longer than the corresponding bonds in methane",
    ],
    correctIndex: 2,
    explanation:
      "The single lone pair on nitrogen is held by one nucleus only and repels the bond pairs more strongly, so it pushes the three N-H bonds slightly closer together than the bonds in methane.",
    evidence:
      "The lone pair on nitrogen in ammonia compresses the H-N-H angle to about 107 degrees, below the ideal tetrahedral value.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-10.1",
    concept: "ammonia angle compression",
  },
  {
    key: "vsepr-water-two-lone-pairs-angle",
    text: "Two lone pairs on the central oxygen of water compress the H-O-H angle to about",
    options: ["109.5 degrees, the full tetrahedral value", "90 degrees", "120 degrees, the trigonal planar value", "104.5 degrees"],
    correctIndex: 3,
    explanation:
      "Oxygen has four domains, two bonds and two lone pairs, and the two lone pairs repel the bond pairs strongly enough to squeeze the H-O-H angle below the tetrahedral value to about 104.5 degrees.",
    evidence: "In water the two lone pairs on oxygen compress the H-O-H bond angle to about 104.5 degrees.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-10.1",
    concept: "water lone pair angle",
  },
  {
    key: "vsepr-ammonia-water-angle-compare",
    text: "Between NH3 and H2O, the molecule with the smaller bond angle is",
    options: [
      "NH3, because nitrogen has three bonding pairs while oxygen has two",
      "H2O, because its central atom carries two lone pairs instead of one",
      "NH3, because its bond angle is reduced by the single lone pair on nitrogen",
      "H2O, because hydrogen is held to oxygen by a partial double bond",
    ],
    correctIndex: 1,
    explanation:
      "The two lone pairs on oxygen in water repel the bond pairs more strongly than the single lone pair on nitrogen in ammonia, so the H-O-H angle comes out smaller than the H-N-H angle.",
    evidence:
      "Water has two lone pairs on oxygen while ammonia has only one on nitrogen, so water shows the smaller bond angle.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-10.1",
    concept: "ammonia water angle compare",
  },
  {
    key: "vsepr-so2-bent-shape",
    text: "In sulfur dioxide, three electron domains surround sulfur but one of them is a lone pair, so the molecular shape is",
    options: ["Linear", "Trigonal planar", "Bent", "Trigonal pyramidal"],
    correctIndex: 2,
    explanation:
      "The three domains give a trigonal planar electron-pair geometry, and the single lone pair takes one of the three positions, leaving the two S-O bonds in a bent arrangement.",
    evidence: "In SO2 the sulfur atom has two bonding domains and one lone pair, which gives a bent molecular shape.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-10.1",
    concept: "sulfur dioxide bent shape",
  },
  {
    key: "vsepr-pcl5-five-domains",
    text: "The geometry that phosphorus adopts in phosphorus pentachloride, with five bonding domains and no lone pair, is",
    options: ["Square pyramidal", "Tetrahedral", "Octahedral", "Trigonal bipyramidal"],
    correctIndex: 3,
    explanation:
      "Five bonding domains with no lone pair spread out as three equatorial and two axial positions, which is the trigonal bipyramidal geometry of PCl5.",
    evidence:
      "PCl5 has five bonding domains and no lone pair on phosphorus, giving a trigonal bipyramidal geometry.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-10.1",
    concept: "phosphorus pentachloride geometry",
  },
  {
    key: "vsepr-axial-equatorial-count",
    text: "In a trigonal bipyramidal arrangement the five positions divide into",
    options: [
      "three equatorial positions and two axial positions",
      "two equatorial positions and three axial positions",
      "one axial position and four equatorial positions",
      "five equatorial positions and no axial position",
    ],
    correctIndex: 0,
    explanation:
      "Three positions lie in one plane 120 degrees apart, while the remaining two lie above and below that plane on the same axis, giving three equatorial and two axial positions.",
    evidence:
      "In the trigonal bipyramidal geometry three positions are equatorial and two are axial, and the axial pair makes 180 degrees with each other.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-10.1",
    concept: "axial equatorial positions",
  },
  {
    key: "vsepr-axial-equatorial-angle",
    text: "In PCl5, the angle between an axial P-Cl bond and any equatorial P-Cl bond is",
    options: ["109.5 degrees", "90 degrees", "180 degrees", "120 degrees"],
    correctIndex: 1,
    explanation:
      "The axial positions lie above and below the equatorial plane, so each axial bond stands at a right angle to all three equatorial bonds.",
    evidence: "In the trigonal bipyramidal geometry the axial positions lie at 90 degrees to the equatorial plane.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-10.1",
    concept: "axial equatorial angle",
  },
  {
    key: "vsepr-sf6-octahedral-geometry",
    text: "Sulfur hexafluoride has six bonding domains and no lone pair on sulfur, so its geometry is",
    options: [
      "Trigonal bipyramidal, with three equatorial positions",
      "Pentagonal planar, with all six bonds in one plane",
      "Octahedral, with adjacent bonds at 90 degrees and opposite bonds at 180 degrees",
      "Square pyramidal, with one bond along the axis",
    ],
    correctIndex: 2,
    explanation:
      "Six bonding domains place the fluorine atoms at the corners of an octahedron, where each bond is 90 degrees from four others and 180 degrees from the bond directly opposite it.",
    evidence:
      "SF6 has six bonding domains around sulfur and no lone pair, giving an octahedral geometry with 90 degree angles between adjacent bonds.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-10.1",
    concept: "octahedral geometry angles",
  },
  {
    key: "vsepr-multiple-bond-single-domain",
    text: "When counting electron domains for VSEPR purposes, a double or triple bond is counted as",
    options: [
      "two domains, one for each shared pair",
      "zero domains, since shared pairs repel nothing",
      "three domains, because each extra bond adds a domain",
      "one domain, because all the shared pairs act together",
    ],
    correctIndex: 3,
    explanation:
      "All the shared pairs of a multiple bond are pulled into the same region of space around the central atom, so together they repel the neighbouring domains as a single unit.",
    evidence: "In VSEPR counting a double or triple bond is treated as one electron domain around the central atom.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-10.1",
    concept: "multiple bond domain counting",
  },
  {
    key: "vsepr-hybridisation-shape-matching",
    text: "A central atom surrounded by six bonding domains and no lone pair has the geometry and the hybridisation label",
    options: [
      "trigonal bipyramidal and sp3d",
      "octahedral and sp3d2",
      "octahedral and sp3",
      "trigonal planar and sp2",
    ],
    correctIndex: 1,
    explanation:
      "Six bonding domains arrange octahedrally with 90 degrees between adjacent bonds, and this geometry is described by six hybrid orbitals labelled sp3d2.",
    evidence:
      "Six electron domains give an octahedral geometry, which is described by sp3d2 hybridisation on the central atom.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-10.1",
    concept: "geometry hybridisation pairing",
  },
  {
    key: "vsepr-co2-dipole-cancellation",
    text: "Carbon dioxide has two polar C=O bonds, yet the whole molecule is non-polar because",
    options: [
      "the two equal bond dipoles point in opposite directions along the same line and cancel",
      "the C=O bonds are not polar at all",
      "carbon and oxygen have identical electronegativity",
      "the linear shape lets the two bonds rotate in any direction",
    ],
    correctIndex: 0,
    explanation:
      "In the linear shape the two identical C=O dipoles have equal magnitude and opposite direction along the same axis, so their resultant is zero.",
    evidence:
      "CO2 is a linear non-polar molecule because its two equal and opposite bond dipoles cancel each other.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-10.1",
    concept: "carbon dioxide polarity",
  },
  {
    key: "vsepr-bf3-dipole-cancellation",
    text: "Boron trifluoride is a non-polar molecule even though each B-F bond is strongly polar, because",
    options: [
      "the boron atom is larger than the fluorine atoms",
      "fluorine atoms carry no partial charge in BF3",
      "the three B-F bond dipoles lie in one plane 120 degrees apart and cancel",
      "BF3 contains only single bonds and so has no dipole at all",
    ],
    correctIndex: 2,
    explanation:
      "The three identical B-F dipoles are separated by 120 degrees in the trigonal planar shape, so their vector sum is zero and the molecule carries no net dipole moment.",
    evidence:
      "BF3 is trigonal planar and non-polar because its three equal bond dipoles cancel in the symmetrical planar arrangement.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-10.1",
    concept: "boron trifluoride polarity",
  },
  {
    key: "vsepr-ccl4-ch3cl-polarity",
    text: "Both CCl4 and CH3Cl are tetrahedral around carbon, yet their polarities differ. The correct pairing is",
    options: [
      "CCl4 polar, CH3Cl non-polar",
      "CCl4 non-polar, CH3Cl polar",
      "CCl4 non-polar, CH3Cl non-polar",
      "CCl4 polar, CH3Cl polar",
    ],
    correctIndex: 3,
    explanation:
      "In CCl4 the four identical C-Cl bond dipoles cancel in the symmetrical tetrahedron, but in CH3Cl the C-H dipoles do not match the C-Cl dipole, so the resultant is not zero.",
    evidence:
      "CCl4 is a non-polar tetrahedral molecule, while CH3Cl is polar because its bond dipoles do not cancel.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-10.1",
    concept: "carbon tetrachloride polarity",
  },
  {
    key: "vsepr-sf6-nonpolar-claims",
    text: "Claims about SF6: (I) each S-F bond is polar; (II) the molecule has a zero net dipole moment; (III) six bonding domains give an octahedral arrangement. Judging these claims,",
    options: ["only I is correct", "I and III are correct", "I, II and III are correct", "only III is correct"],
    correctIndex: 2,
    explanation:
      "All three claims hold, because six bonding domains give an octahedral geometry in which the six identical, strongly polar S-F dipoles cancel in opposite pairs and leave a zero net dipole.",
    evidence:
      "SF6 has an octahedral geometry and is a non-polar molecule because its six identical bond dipoles cancel each other.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-10.1",
    concept: "sulphur hexafluoride claims",
  },
  {
    key: "vsepr-linear-species-selection",
    text: "A candidate claims that BeCl2, SO2 and SF4 are all linear molecules. Applying VSEPR theory, the set of species that really are linear is",
    options: [
      "BeCl2 only, since SO2 and SF4 both carry lone pairs on the central atom",
      "BeCl2 and SO2 only, since SF4 has six electron domains",
      "BeCl2, SO2 and SF4, since double bonds are not counted at all",
      "SF4 only, since BeCl2 and SO2 are both bent",
    ],
    correctIndex: 0,
    explanation:
      "BeCl2 has two bonding domains and no lone pair, so it is linear, whereas the lone pair on sulfur in SO2 and on sulfur in SF4 removes positions that the bonds would otherwise fill symmetrically, bending them.",
    evidence:
      "A molecule with two bonding domains and no lone pair on the central atom, such as BeCl2, is linear with a bond angle of 180 degrees.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-10.1",
    concept: "linear species selection",
  },
  {
    key: "vsepr-xef4-square-planar",
    text: "In xenon tetrafluoride, xenon has six electron domains of which two are lone pairs. The molecular shape is",
    options: ["Square planar", "Octahedral", "Trigonal bipyramidal", "T-shaped"],
    correctIndex: 0,
    explanation:
      "Six domains give an octahedral electron-pair geometry, and the two lone pairs take positions directly opposite each other, leaving the four fluorine atoms in one plane at 90 degrees to each other.",
    evidence:
      "XeF4 has six electron domains around xenon with two lone pairs in opposite positions, which leaves a square planar shape.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-10.1",
    concept: "xenon tetrafluoride shape",
  },
  {
    key: "vsepr-lone-pair-prefers-equatorial",
    text: "A species with five electron domains on its central atom has two lone pairs and three bonding pairs. The lone pairs are expected to occupy",
    options: [
      "the two axial positions, where each lone pair is 90 degrees from every bond",
      "positions chosen to maximise the number of 180 degree bond angles",
      "whichever positions the more electronegative terminal atoms prefer",
      "two of the three equatorial positions, where lone pair repulsion is least",
    ],
    correctIndex: 3,
    explanation:
      "Since a lone pair repels more strongly than a bond pair, it takes an equatorial position where it is 120 degrees from the two remaining equatorial pairs but only 90 degrees from the two axial pairs, minimising the total repulsion.",
    evidence:
      "In a trigonal bipyramidal arrangement lone pairs occupy equatorial positions, where repulsion between them and the bond pairs is smaller.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-10.1",
    concept: "lone pair site preference",
  },
  {
    key: "vsepr-lone-pair-angle-claims",
    text: "Two statements are made about lone pairs on a central atom: (I) a lone pair occupies more space near the central atom than a bond pair; (II) this extra repulsion makes the observed bond angles larger than the value of the ideal geometry. Judging these statements,",
    options: [
      "Statement I is false and statement II is true",
      "Statement I is true and statement II is false",
      "Statement I is true and statement II is also true",
      "Statement I is false and statement II is also false",
    ],
    correctIndex: 2,
    explanation:
      "A lone pair is attracted by only one nucleus and so spreads out and repels more strongly than a shared pair, which pulls the observed bond angles below the ideal value, as with 107 degrees in NH3 against 109.5 degrees.",
    evidence:
      "Lone pairs repel more strongly than bond pairs and compress the bond angle below the ideal value predicted by the electron-pair geometry.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-10.1",
    concept: "lone pair angle claims",
  },
  {
    key: "vsepr-ax3e2-t-shaped",
    text: "A species written as AX3E2 has three bonding pairs and two lone pairs on its central atom A. Its electron-pair geometry and molecular shape are",
    options: [
      "Tetrahedral and trigonal pyramidal",
      "Trigonal bipyramidal and T-shaped",
      "Trigonal bipyramidal and trigonal planar",
      "Tetrahedral and bent",
    ],
    correctIndex: 1,
    explanation:
      "Five domains give a trigonal bipyramidal electron-pair geometry, and both lone pairs take equatorial positions, so the three bonds are left in one axial and two equatorial positions, which is the T shape.",
    evidence:
      "In a species of the type AX3E2 the electron-pair geometry is trigonal bipyramidal and the molecular shape is T-shaped.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-10.1",
    concept: "ax3e2 shape prediction",
  },
];