import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "isomer-definition-same-formula",
    text: "Two organic compounds have the same molecular formula but a different arrangement of their atoms. Such compounds are called",
    options: ["isomers", "homologues", "congeners", "polymers"],
    correctIndex: 0,
    explanation:
      "Isomerism is the existence of two or more compounds with an identical molecular formula but a different arrangement of their atoms, either in the way the atoms are connected or in their spatial positions.",
    evidence:
      "Isomers are compounds with the same molecular formula but a different arrangement of their atoms.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-13.4",
    concept: "isomer definition",
  },
  {
    key: "isomer-asymmetric-carbon-four-groups",
    text: "An asymmetric carbon atom in an organic molecule is one that is",
    options: [
      "bonded to only three other carbon atoms",
      "sp2 hybridised and part of a carbon-carbon double bond",
      "bonded to four different atoms or groups",
      "bonded to two hydrogen atoms and two carbon atoms",
    ],
    correctIndex: 2,
    explanation:
      "The defining condition is four different substituents, so that swapping any two of them gives a different arrangement. A carbon carrying two hydrogen atoms, or two identical groups, is not asymmetric.",
    evidence:
      "An asymmetric carbon atom is a carbon atom bonded to four different atoms or groups.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-13.4",
    concept: "asymmetric carbon atom",
  },
  {
    key: "isomer-enantiomer-mirror-image-pair",
    text: "Two compounds that are non-superimposable mirror images of each other, sharing the same molecular formula and the same sequence of bonded atoms, are",
    options: ["tautomers", "enantiomers", "diastereomers", "conformers"],
    correctIndex: 1,
    explanation:
      "The pair is defined by two conditions together: the structures are mirror images of one another, and no rotation can make one coincide with the other. Conformers, by contrast, interconvert freely by rotation about a single bond.",
    evidence:
      "Enantiomers are non-superimposable mirror images that share the same molecular formula and the same sequence of bonded atoms.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-13.4",
    concept: "enantiomer definition",
  },
  {
    key: "isomer-statements-conditions-for-cis-trans",
    text: "Consider these claims about geometric isomerism. I: it requires restricted rotation about a double bond or within a ring. II: each carbon of the double bond must carry two different groups. III: the presence of an asymmetric carbon atom is enough on its own to produce cis-trans isomers. Which combination of statements is correct?",
    options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
    correctIndex: 0,
    explanation:
      "Restricted rotation (I) keeps the groups in fixed positions, and two different groups on each double-bond carbon (II) make those positions distinguishable. Claim III is false, because an asymmetric carbon gives optical isomerism, not geometric isomerism.",
    evidence:
      "Geometric isomerism needs restricted rotation about a double bond or within a ring, with two different groups on each double-bond carbon.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-13.4",
    concept: "cis-trans requirements",
  },
  {
    key: "isomer-statements-four-pairs-classified",
    text: "These descriptions of four pairs are given. P: n-butane and 2-methylpropane are chain isomers of C4H10. Q: propan-1-ol and propan-2-ol are position isomers of C3H8O. R: propanal and propanone are functional group isomers of C3H6O. S: cis-but-2-ene and trans-but-2-ene are stereoisomers of C4H8. Which classification set is entirely correct?",
    options: [
      "P, Q and R only, with S wrongly described",
      "P, Q and S only, with R wrongly described",
      "P, Q, R and S",
      "Q, R and S only, with P wrongly described",
    ],
    correctIndex: 2,
    explanation:
      "Each pair is correctly named: the butane pair differs in carbon skeleton, the propanol pair differs only in the position of the -OH group, the propanal and propanone pair carries an aldehyde and a ketone, and the two butenes share the same sequence of bonded atoms and differ only in spatial arrangement.",
    evidence:
      "Isomers are grouped as chain, position and functional group isomers according to connectivity, and as stereoisomers when only the spatial arrangement differs.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-13.4",
    concept: "isomer type classification",
  },
  {
    key: "isomer-count-structural-c4h8",
    text: "How many structural isomers, ignoring cis and trans forms of the same skeleton, can be written for the molecular formula C4H8?",
    options: ["three", "four", "five", "six"],
    correctIndex: 2,
    explanation:
      "C4H8 allows one degree of unsaturation, which can be a double bond or a ring. The double-bond structures are but-1-ene, but-2-ene and 2-methylpropene, and the ring structures are cyclobutane and methylcyclopropane, giving five structural isomers in total.",
    evidence:
      "Structural isomers of a formula are enumerated by fixing the degree of unsaturation and listing every possible chain and ring skeleton.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-13.4",
    concept: "structural isomer count",
  },
  {
    key: "isomer-stereoisomer-same-connectivity",
    text: "Two compounds share the same molecular formula and the same sequence of bonded atoms but differ in the three-dimensional arrangement of their atoms. They are",
    options: ["stereoisomers", "constitutional isomers", "homologues", "polymers of one monomer"],
    correctIndex: 0,
    explanation:
      "When connectivity is identical and only the spatial arrangement of the groups differs, the pair is classified as stereoisomers. Constitutional isomers, by contrast, connect the atoms in a different order.",
    evidence:
      "Stereoisomers have the same molecular formula and the same sequence of bonded atoms but differ in the spatial arrangement of the groups.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-13.4",
    concept: "stereoisomer definition",
  },
  {
    key: "isomer-chain-butane-two-skeletons",
    text: "n-Butane, CH3CH2CH2CH3, and 2-methylpropane, (CH3)3CH, are both C4H10. The isomerism between them is",
    options: [
      "position isomerism, because a methyl group sits at a different position along the chain",
      "chain isomerism, because the two carbon skeletons are different",
      "functional group isomerism, because the branched skeleton acts as a different group",
      "metamerism, because the alkyl groups around the central carbon differ",
    ],
    correctIndex: 1,
    explanation:
      "The atoms are connected by different carbon skeletons, one straight and one branched, while the formula stays the same. No functional group is involved and no position along a chain changes, so this is chain isomerism.",
    evidence: "n-Butane and 2-methylpropane are the two chain isomers of the formula C4H10.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-13.4",
    concept: "chain isomerism",
  },
  {
    key: "isomer-position-propanol-oh-placement",
    text: "Propan-1-ol, CH3CH2CH2OH, and propan-2-ol, CH3CH(OH)CH3, are both C3H8O. The type of isomerism shown is",
    options: [
      "chain isomerism, because the carbon skeleton differs between the two",
      "functional group isomerism, because one of the two is an ether",
      "position isomerism, because the -OH group sits on a different carbon",
      "ring-chain isomerism, because one form is drawn in a closed ring",
    ],
    correctIndex: 2,
    explanation:
      "Both molecules carry the same alcohol group on the same straight three-carbon chain, and only the carbon bearing the -OH differs. A change of position of a group on an unchanged skeleton is position isomerism.",
    evidence: "Propan-1-ol and propan-2-ol are position isomers of the formula C3H8O.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-13.4",
    concept: "position isomerism",
  },
  {
    key: "isomer-mdcat-c4h8-cis-trans-count",
    text: "The compounds but-1-ene, but-2-ene, 2-methylpropene and cyclobutane all have the formula C4H8. How many of them can show cis-trans isomerism?",
    options: ["one", "two", "three", "four"],
    correctIndex: 0,
    explanation:
      "Only but-2-ene qualifies, since it is the only one of the four in which each double-bond carbon carries two different groups. But-1-ene and 2-methylpropene each have a double-bond carbon with two identical groups, and cyclobutane carries no substituent pair whose relative positions can differ.",
    evidence:
      "A double-bond carbon carrying two identical groups cannot give rise to cis-trans isomers.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.4",
    concept: "cis-trans eligibility",
  },
  {
    key: "isomer-functional-ethanol-versus-dimethyl-ether",
    text: "Ethanol, CH3CH2OH, and dimethyl ether, CH3OCH3, both have the formula C2H6O. They are functional group isomers because",
    options: [
      "their carbon atoms are joined in a different order, with no functional group present in either",
      "one carries a hydroxyl group and the other an ether oxygen link between two methyl groups",
      "the hydroxyl group is at position 1 in one molecule and at position 2 in the other",
      "the two methyl groups lie on opposite sides of a restricted single bond",
    ],
    correctIndex: 1,
    explanation:
      "The two compounds contain different functional groups, an alcohol and an ether, while the molecular formula stays the same. That difference in functional group is what makes them a pair of functional group isomers.",
    evidence:
      "Ethanol and dimethyl ether share the molecular formula C2H6O but contain different functional groups.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-13.4",
    concept: "functional group isomerism",
  },
  {
    key: "isomer-functional-pair-selection",
    text: "Which pair of compounds has the same molecular formula and different functional groups?",
    options: [
      "But-1-ene and but-2-ene",
      "Pentane and 2-methylbutane",
      "Butan-1-ol and butan-2-ol",
      "Propanal and propanone",
    ],
    correctIndex: 3,
    explanation:
      "Propanal, CH3CH2CHO, and propanone, CH3COCH3, both have the formula C3H6O, but one is an aldehyde and the other a ketone. The remaining pairs differ only in the position of the double bond, the carbon skeleton, or the position of the -OH group.",
    evidence:
      "Propanal and propanone share the molecular formula C3H6O but belong to different functional groups.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-13.4",
    concept: "functional group identification",
  },
  {
    key: "isomer-compare-formula-differs-not-isomers",
    text: "Compare butan-1-ol, C4H10O, with pentan-1-ol, C5H12O. The relationship between the two compounds is that they",
    options: [
      "are geometric isomers held apart by restricted rotation about the C-O bond",
      "are enantiomers related as non-superimposable mirror images",
      "are not isomers, because their molecular formulas are different",
      "are tautomers that interconvert with one another in solution",
    ],
    correctIndex: 2,
    explanation:
      "Isomers must have an identical molecular formula, and C4H10O differs from C5H12O. The two compounds belong to the same series and differ by one CH2 group, which makes them homologues rather than isomers.",
    evidence:
      "Isomers must have identical molecular formulas, so compounds of different formulas cannot be isomers of each other.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.4",
    concept: "isomer prerequisite",
  },
  {
    key: "isomer-geometric-why-alkanes-excluded",
    text: "Cis-trans isomerism is not observed in an acyclic alkane such as butane, because",
    options: [
      "the C-C bonds of an alkane are too strong to be rotated at all",
      "rotation about the single bonds is free, and no carbon carries a pair of distinguishable groups",
      "the molecule contains no double bond, so a ring must be present instead",
      "the two methyl groups of butane are chemically identical to each other",
    ],
    correctIndex: 1,
    explanation:
      "With free rotation about every single bond, groups continuously exchange positions, so no fixed cis or trans arrangement can exist. A ring or a double bond is needed to restrict that rotation.",
    evidence:
      "Restricted rotation about a double bond or within a ring is a necessary condition for geometric isomerism.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.4",
    concept: "restricted rotation",
  },
  {
    key: "isomer-sequence-confirm-but-2-ene-geometric",
    text: "Two structural drawings are made of CH3CH=CHCH3, one with the two methyl groups on the same side of the double bond and one with them on opposite sides. Which sequence of checks confirms that these are cis-trans isomers of a single compound?",
    options: [
      "Compare the molecular formulas, confirm that the sequence of bonded atoms is identical, then note that the double bond fixes the two groups in two separate arrangements",
      "Compare the molecular formulas and stop as soon as they match, since matching formulas always mean different compounds",
      "Rotate a single C-C bond in each drawing until the chains line up, and treat any leftover difference as a separate compound",
      "Reduce both drawings to empirical formulae and count the hydrogen atoms on each double-bond carbon",
    ],
    correctIndex: 0,
    explanation:
      "Matching formulas alone prove nothing, and free rotation about a single bond cannot interconvert the two fixed arrangements, so the deciding checks are the identical connectivity and the two locked-in spatial arrangements about the double bond.",
    evidence:
      "Cis and trans forms of the same compound are distinguished by the positions the identical groups occupy across the double bond.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-13.4",
    concept: "geometric isomer verification",
  },
  {
    key: "isomer-but-1-ene-no-cis-trans",
    text: "But-1-ene, CH2=CHCH2CH3, does not show cis-trans isomerism because",
    options: [
      "its first double-bond carbon carries two identical hydrogen atoms",
      "its carbon skeleton is branched rather than straight",
      "but-1-ene and but-2-ene have different molecular formulas",
      "the double bond of but-1-ene is longer than the double bond of but-2-ene",
    ],
    correctIndex: 0,
    explanation:
      "A CH2= group carries two identical substituents, so there is no second distinguishable position for them and only one arrangement exists. The same formula, C4H8, and an unbranched skeleton are both present here, so neither accounts for the absence of geometric isomers.",
    evidence:
      "A double-bond carbon of the form CH2= carries two identical hydrogen atoms, so geometric isomerism is impossible.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-13.4",
    concept: "terminal alkene geometry",
  },
  {
    key: "isomer-two-methylpropene-no-cis-trans",
    text: "2-Methylpropene, CH2=C(CH3)2, cannot exist as cis-trans isomers because",
    options: [
      "it contains a carbon-carbon double bond, so both carbons are sp2 hybridised",
      "its molecular formula C4H8 allows only one arrangement of the atoms",
      "one of the sp2 carbons carries two identical methyl groups",
      "the molecule has no carbon atom bonded to four different groups",
    ],
    correctIndex: 2,
    explanation:
      "The substituted double-bond carbon bears two methyl groups, which are identical, so a cis and a trans arrangement cannot be defined. The absence of an asymmetric carbon concerns optical isomerism and has no bearing on the geometric question.",
    evidence:
      "In 2-methylpropene the substituted double-bond carbon carries two identical methyl groups.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.4",
    concept: "identical alkene substituents",
  },
  {
    key: "isomer-mdcat-functional-group-pair-count",
    text: "Four pairs of compounds are examined. P: ethanol and dimethyl ether. Q: propanal and propanone. R: butane and 2-methylpropane. S: butan-1-ol and butan-2-ol. How many of these pairs are functional group isomers?",
    options: ["one", "two", "three", "four"],
    correctIndex: 1,
    explanation:
      "P and Q each hold the formula constant while changing the functional group, an alcohol against an ether and an aldehyde against a ketone. R changes the carbon skeleton and S changes only the position of the -OH group, so neither of those is a functional group pair.",
    evidence:
      "Functional group isomers share a molecular formula but contain different functional groups.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.4",
    concept: "functional group pair count",
  },
  {
    key: "isomer-cis-trans-dichloroethene-placement",
    text: "For 1,2-dichloroethene, ClHC=CHCl, the form called cis is the one in which",
    options: [
      "the two chlorine atoms lie on the same side of the double bond",
      "the two chlorine atoms lie on opposite sides of the double bond",
      "one chlorine atom takes the place of a hydrogen on each double-bond carbon",
      "the two hydrogen atoms lie on opposite sides of the double bond",
    ],
    correctIndex: 0,
    explanation:
      "In the cis form the identical chlorine atoms are on the same side of the double bond, which places the two hydrogens together on the other side. Putting the chlorines on opposite sides gives the trans form.",
    evidence:
      "1,2-Dichloroethene exists as a cis form with the chlorine atoms on the same side and a trans form with them on opposite sides.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-13.4",
    concept: "cis-trans dichloroethene",
  },
  {
    key: "isomer-cis-trans-pair-diastereomers",
    text: "Cis- and trans-1,2-dichloroethene are stereoisomers of the same compound, yet neither is the mirror image of the other. On that basis the two forms are",
    options: ["enantiomers", "homologues", "tautomers", "diastereomers"],
    correctIndex: 3,
    explanation:
      "The pair shares a molecular formula and a sequence of bonded atoms, so they are stereoisomers, and because they are not related as mirror images they are diastereomers. Enantiomers are precisely the stereoisomers that are non-superimposable mirror images.",
    evidence:
      "Stereoisomers that are not mirror images of one another are called diastereomers.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.4",
    concept: "diastereomer relationship",
  },
  {
    key: "isomer-maleic-fumaric-cis-trans-relationship",
    text: "Maleic acid and fumaric acid are both HOOC-CH=CH-COOH. The relationship between them is",
    options: [
      "constitutional isomers, because the carboxyl groups are joined to the double bond differently",
      "cis-trans isomers, with the two COOH groups on the same side in maleic acid and on opposite sides in fumaric acid",
      "enantiomers, related as non-superimposable mirror images",
      "homologues, separated from one another by one CH2 group",
    ],
    correctIndex: 1,
    explanation:
      "The two carboxyl groups occupy the same side of the double bond in maleic acid and opposite sides in fumaric acid, while the connectivity stays identical. Restricted rotation about the double bond keeps the two arrangements apart.",
    evidence:
      "Maleic acid is cis-but-2-enedioic acid and fumaric acid is the trans isomer of the same formula.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-13.4",
    concept: "maleic fumaric isomers",
  },
  {
    key: "isomer-optically-active-compound-choice",
    text: "Which one of the following compounds has an asymmetric carbon atom and can therefore show optical isomerism?",
    options: [
      "Propan-2-ol, CH3CH(OH)CH3",
      "Butane, CH3CH2CH2CH3",
      "2-Methylpropane, (CH3)3CH",
      "Butan-2-ol, CH3CH(OH)CH2CH3",
    ],
    correctIndex: 3,
    explanation:
      "The second carbon of butan-2-ol carries -H, -OH, -CH3 and -C2H5, four different groups. Propan-2-ol and 2-methylpropane each place two identical methyl groups on the central carbon, and butane has no carbon bearing four different groups.",
    evidence:
      "Butan-2-ol has an asymmetric carbon atom, while propan-2-ol and 2-methylpropane do not.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-13.4",
    concept: "asymmetric carbon identification",
  },
  {
    key: "isomer-sequence-identify-enantiomeric-pair",
    text: "Two structures are drawn for a compound that contains one asymmetric carbon atom. Which sequence of checks establishes that the structures are enantiomers rather than one and the same compound?",
    options: [
      "Count the hydrogen atoms on each carbon and compare the two totals",
      "Confirm the same molecular formula, confirm the same sequence of bonded atoms, then test whether one structure can be superimposed on the other",
      "Convert both structures to condensed formulae and compare the position of the double bond in each",
      "Compare the bond angles around the asymmetric carbon and select the structure with the wider angle",
    ],
    correctIndex: 1,
    explanation:
      "Enantiomers must first share the molecular formula and the same connectivity, and the deciding test is that the mirror-image structure cannot be superimposed on the original. If superposition succeeds, the two drawings represent a single compound.",
    evidence:
      "Two structures are enantiomers when they are mirror images that cannot be superimposed on one another.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.4",
    concept: "enantiomer identification",
  },
  {
    key: "isomer-enantiomers-equal-opposite-rotation",
    text: "A solution containing a single enantiomer of a compound rotates the plane of polarised light. Compared with a solution of the other enantiomer at the same concentration, it",
    options: [
      "rotates the plane by an unrelated amount in an unpredictable direction",
      "does not rotate the plane at all, because the two structures are mirror images",
      "rotates the plane by an equal amount but in the opposite direction",
      "rotates the plane strongly, but only towards the direction called dextro",
    ],
    correctIndex: 2,
    explanation:
      "The two forms are mirror images, so they rotate plane-polarised light by the same magnitude in opposite directions, one being the dextro and the other the laevo form. Only a racemic mixture fails to rotate the plane at all.",
    evidence:
      "The two enantiomers of a compound rotate plane-polarised light by equal amounts in opposite directions.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.4",
    concept: "optical rotation of enantiomers",
  },
  {
    key: "isomer-sequence-classify-structural-versus-stereo",
    text: "To classify the relationship between two organic compounds as chain, position, functional group or stereoisomerism, which sequence of checks should be followed?",
    options: [
      "Compare the molecular formulas first and stop if they differ, since such compounds cannot be related at all",
      "Compare the molecular formulas, then the sequence of bonded atoms, then the positions of the groups, and only after that the spatial arrangement",
      "Compare the spatial arrangement first, because a difference in geometry always takes priority over connectivity",
      "Compare the functional groups, then the molecular formulas, and ignore the way the carbon atoms are connected",
    ],
    correctIndex: 1,
    explanation:
      "The molecular formula has to be settled first because isomers must share it, connectivity then separates structural from stereoisomers, group positions separate chain from position isomerism, and the spatial arrangement is examined last to decide whether a pair are stereoisomers.",
    evidence:
      "Isomers are classified by comparing the molecular formula, the sequence of bonded atoms, the positions of the groups and the spatial arrangement.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-13.4",
    concept: "isomer classification sequence",
  },
];
