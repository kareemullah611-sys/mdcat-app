import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-orgfund-carbon-catenation",
    text: "Carbon forms an exceptionally large number of compounds. The structural reason for this is that",
    options: [
      "carbon atoms form ionic crystals instead of covalent bonds with one another",
      "carbon has a completely filled outer shell and so reacts only with metals",
      "each carbon atom forms four strong covalent bonds and can bond to other carbon atoms in chains, rings and multiple bonds",
      "carbon is the most electronegative element and therefore can form only single bonds",
    ],
    correctIndex: 2,
    explanation:
      "With a valency of four, carbon shares electrons with four other atoms and also with itself, giving chains, branched chains, rings and double or triple bonds, so an enormous number of different skeletons and compounds become possible.",
    evidence:
      "Carbon forms four strong covalent bonds and can form chains and rings with multiple bonds, which accounts for the very large number of organic compounds.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-13.1",
    concept: "carbon tetravalency and catenation",
  },
  {
    key: "xii-orgfund-organic-chemistry-scope",
    text: "Organic chemistry covers",
    options: [
      "all carbon compounds, whether they occur naturally or are prepared synthetically",
      "only the substances produced inside living organisms",
      "only the hydrocarbon fractions obtained from petroleum",
      "only those compounds that dissolve in water and conduct electricity",
    ],
    correctIndex: 0,
    explanation:
      "Organic chemistry is the study of carbon compounds, and a very large number of them are made in the laboratory, so the subject is not limited to living matter or to petroleum products.",
    evidence:
      "Organic chemistry is the study of carbon compounds, which occur in nature and are also prepared synthetically.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-13.1",
    concept: "scope of organic chemistry",
  },
  {
    key: "xii-orgfund-organic-solubility-contrast",
    text: "An organic compound dissolves readily in organic solvents but hardly at all in water. Compared with an inorganic salt, this behaviour reflects",
    options: [
      "the presence of ionic bonds within the organic molecules",
      "a much lower molecular mass in the organic compound",
      "the complete absence of hydrogen bonding in the organic compound",
      "the largely covalent, weakly polar nature of organic molecules, which interacts poorly with water",
    ],
    correctIndex: 3,
    explanation:
      "Organic compounds are held together by covalent bonds and are mostly non-polar or only weakly polar, so like dissolves like leaves them poorly soluble in the polar solvent water while making them soluble in organic solvents.",
    evidence:
      "Organic compounds are largely covalent and are generally insoluble in water but soluble in organic solvents.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.1",
    concept: "organic solubility behaviour",
  },
  {
    key: "xii-orgfund-flammability-reason",
    text: "Most organic compounds burn when heated in air. Which account best explains this behaviour?",
    options: [
      "They are ionic in the solid state, so the lattice energy released lights the flame",
      "They are largely covalent, and oxidation of their carbon and hydrogen to CO2 and H2O releases heat",
      "They conduct electricity strongly in the pure state, so they heat up rapidly",
      "They have a high density, so compression of the vapour ignites it",
    ],
    correctIndex: 1,
    explanation:
      "Organic molecules consist mainly of C-H and C-C bonds held covalently, and burning them in oxygen converts carbon to CO2 and hydrogen to H2O in an exothermic change, which is why most are flammable.",
    evidence:
      "Organic compounds are largely covalent and most of them are flammable, burning to give carbon dioxide and water.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.1",
    concept: "flammability of organic compounds",
  },
  {
    key: "xii-orgfund-pure-state-conductivity",
    text: "In the pure state, organic compounds behave as",
    options: [
      "good conductors of electricity, because every bond supplies mobile ions",
      "poor conductors of electricity, because they consist of covalently bonded molecules with no free ions",
      "excellent conductors when molten, because covalent bonds break down into ions",
      "insulators that cannot dissolve in any solvent at all",
    ],
    correctIndex: 1,
    explanation:
      "No ions are present in the pure compound, so there are no mobile charge carriers and organic compounds are poor conductors of electricity in the pure state.",
    evidence:
      "In the pure state organic compounds are poor conductors of electricity because they contain no free ions.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "CHEM-13.1",
    concept: "conductivity in pure state",
  },
  {
    key: "xii-orgfund-general-property-statements",
    text: "Three statements about organic compounds are given: (i) all organic compounds are flammable; (ii) all organic compounds are insoluble in water; (iii) organic compounds are poor conductors of electricity in the pure state. Which combination of statements is correct?",
    options: [
      "(i), (ii) and (iii) are all correct",
      "(i) and (iii) are correct, but (ii) is false",
      "(ii) and (iii) are correct, but (i) is false",
      "Only (iii) is correct; (i) and (ii) are both too absolute",
    ],
    correctIndex: 3,
    explanation:
      "Poor conductivity in the pure state is general to organic compounds, but some halogenated compounds do not burn and some organic compounds such as sugars dissolve readily in water, so the absolute claims (i) and (ii) cannot stand.",
    evidence:
      "Organic compounds are largely covalent and poor conductors, although some are quite soluble in water and not all of them are flammable.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.1",
    concept: "limits of general properties",
  },
  {
    key: "xii-orgfund-acyclic-versus-cyclic",
    text: "A compound whose carbon atoms form a continuous open chain with no ring belongs to the",
    options: ["aromatic class", "acyclic (open chain) class", "cyclic class", "heterocyclic class"],
    correctIndex: 1,
    explanation:
      "A skeleton with no closed ring is acyclic, whereas a skeleton that closes into a ring is cyclic, and a cyclic skeleton containing a benzene ring is described as aromatic.",
    evidence:
      "Organic compounds are classified as acyclic (open chain) or cyclic according to their carbon skeleton.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-13.2",
    concept: "acyclic and cyclic skeletons",
  },
  {
    key: "xii-orgfund-hexane-versus-cyclohexane",
    text: "How does cyclohexane, C6H12, differ structurally from hexane, C6H14?",
    options: [
      "Both molecules are acyclic, but cyclohexane contains a carbon-carbon triple bond",
      "Cyclohexane is open chain and saturated, while hexane is cyclic and unsaturated",
      "Cyclohexane is a closed ring and counts as cyclic and unsaturated, while hexane is an open chain of only single bonds",
      "Hexane is cyclic and aromatic, while cyclohexane is acyclic and saturated",
    ],
    correctIndex: 2,
    explanation:
      "In cyclohexane the six carbons close into one ring, so the skeleton is cyclic and, with two fewer hydrogens than the open-chain alkane, it is unsaturated; hexane, C6H14, is an open-chain saturated alkane.",
    evidence:
      "Cyclic compounds are classified as unsaturated because they contain fewer hydrogen atoms than the corresponding open-chain alkane.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.2",
    concept: "cyclic versus open-chain alkane",
  },
  {
    key: "xii-orgfund-acyclic-formula-unsaturated",
    text: "A ring-free (acyclic) compound has the molecular formula C4H6. On the saturated/unsaturated basis it must be classed as",
    options: [
      "saturated, because every carbon carries the maximum number of hydrogens it can",
      "unsaturated, because an acyclic chain of four carbons cannot be built from single bonds alone",
      "cyclic, because it has four fewer hydrogens than the saturated formula",
      "aromatic, because its hydrogen count matches that of a benzene ring",
    ],
    correctIndex: 1,
    explanation:
      "Four single-bonded acyclic carbons would give C4H10, but C4H6 has four fewer hydrogens, so a ring-free chain of this formula must include at least one double or triple bond and is therefore unsaturated.",
    evidence:
      "An acyclic compound with fewer hydrogens than CnH2n+2 must contain double or triple bonds and is classified as unsaturated.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-13.2",
    concept: "unsaturation from formula",
  },
  {
    key: "xii-orgfund-aliphatic-versus-aromatic",
    text: "Organic compounds are split into aliphatic and aromatic classes because",
    options: [
      "aliphatic compounds have open-chain or non-benzenoid skeletons, while aromatic compounds contain a benzene ring",
      "aliphatic compounds always carry a hydroxyl group and aromatic compounds always carry an amino group",
      "aliphatic compounds are always saturated hydrocarbons and aromatic compounds are always unsaturated hydrocarbons",
      "aliphatic compounds dissolve in water, while aromatic compounds dissolve only in organic solvents",
    ],
    correctIndex: 0,
    explanation:
      "The distinction rests on the carbon skeleton: compounds without a benzene ring are grouped as aliphatic and those built around a benzene ring as aromatic, whatever other functional groups they carry.",
    evidence:
      "Compounds that do not contain a benzene ring are aliphatic, while those containing a benzene ring are aromatic.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.2",
    concept: "aliphatic and aromatic classes",
  },
  {
    key: "xii-orgfund-homologous-series-criterion",
    text: "Members of one homologous series share the same functional group and differ from one another by",
    options: ["a halogen atom", "one carbon atom and two hydrogen atoms", "one oxygen atom", "two hydrogen atoms"],
    correctIndex: 1,
    explanation:
      "A homologous series is a set of compounds with a common functional group in which each member differs from the next by a CH2 unit, so consecutive members have very similar chemical properties.",
    evidence:
      "Members of a homologous series have the same functional group and differ successively by a CH2 group.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-13.2",
    concept: "homologous series criterion",
  },
  {
    key: "xii-orgfund-saturated-structure-choice",
    text: "Which of these structures contains only carbon-carbon single bonds and is therefore saturated?",
    options: [
      "CH3CH=CHCH3, but-2-ene",
      "propyne, whose two carbons are joined by a carbon-carbon triple bond",
      "C6H6, the benzene ring",
      "CH3CH2CH2OH, propan-1-ol",
    ],
    correctIndex: 3,
    explanation:
      "Every carbon-carbon link in propan-1-ol is a single bond, whereas the others carry a C=C, a carbon-carbon triple bond or a benzene ring of alternating bonds, all of which make them unsaturated.",
    evidence:
      "A saturated compound contains only carbon-carbon single bonds, while a compound with a double or triple bond is unsaturated.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.2",
    concept: "saturated versus unsaturated structure",
  },
  {
    key: "xii-orgfund-classification-questions-order",
    text: "In classifying an unknown compound on a structural basis, which order of questions is the sensible one?",
    options: [
      "Is the carbon skeleton open chain or cyclic? Then are all the carbon-carbon bonds single? Then which functional group is present?",
      "Which functional group is present? Then how many hydrogen atoms are there? Then is the compound flammable?",
      "Is the compound soluble in water? Then is it aromatic? Then how many carbon atoms are present?",
      "Are all the bonds single? Then is the compound flammable? Then is the carbon skeleton open chain?",
    ],
    correctIndex: 0,
    explanation:
      "The structural classification works from the skeleton, through the degree of saturation, to the functional group, which is the most specific and most reactive part of the molecule.",
    evidence:
      "Organic compounds are classified on a structural basis by their carbon skeleton, degree of saturation and functional group.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.2",
    concept: "order of structural classification",
  },
  {
    key: "xii-orgfund-shared-class-pair",
    text: "Identify the pair of compounds that falls in the same class because both members carry the same functional group?",
    options: [
      "CH3COOH and CH3COOCH3, because both of them contain two oxygen atoms",
      "CH3CH2OH and CH3OCH3, because both of them contain an oxygen bonded to carbon",
      "CH3COCH3 and CH3CH2COCH3, because both have a carbonyl group between two carbon atoms",
      "C6H6 and CH3CH=CH2, because both of them contain carbon-carbon double bonds",
    ],
    correctIndex: 2,
    explanation:
      "Both of these compounds have the carbonyl carbon joined to two carbon atoms, the ketone arrangement, while the other pairs mix an acid with an ester, an alcohol with an ether, and a benzene ring with an alkene.",
    evidence:
      "A ketone contains a carbonyl group, C=O, that is bonded to two carbon atoms.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-13.2",
    concept: "shared functional group class",
  },
  {
    key: "xii-orgfund-multiple-criteria-statements",
    text: "A compound contains a ring of six carbon atoms with alternating double bonds, a C=C bond in a side chain and an -OH group. Consider the statements: (i) it is aromatic; (ii) it is saturated; (iii) it belongs to the alcohol class. Which combination is correct?",
    options: [
      "(i), (ii) and (iii) are all correct",
      "(ii) and (iii) are correct, but (i) is false",
      "(i) and (iii) are correct, but (ii) is false",
      "(i) and (ii) are correct, but (iii) is false",
    ],
    correctIndex: 2,
    explanation:
      "The benzene ring makes the compound aromatic and the side-chain C=C makes it unsaturated, so statement (ii) fails, while the hydroxyl group still places it in the alcohol class.",
    evidence:
      "A compound containing a benzene ring is aromatic, and a carbon-carbon double bond makes it unsaturated even when the molecule also carries an -OH group.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 89,
    outcome: "CHEM-13.2",
    concept: "combined structural criteria",
  },
  {
    key: "xii-orgfund-formula-alone-insufficient",
    text: "A compound has the molecular formula C4H8. What can be concluded with certainty from this formula alone?",
    options: [
      "It is saturated, because C4H8 is the formula of a straight-chain alkane",
      "Only that it may be an alkene or a cycloalkane; the structural formula must be examined to decide",
      "It is aromatic, because six hydrogen atoms are present",
      "It is cyclic, because an acyclic chain of four carbons cannot lose hydrogen atoms",
    ],
    correctIndex: 1,
    explanation:
      "C4H8 fits both an acyclic chain holding one C=C and a saturated ring of four carbons, so the molecular formula by itself cannot settle the classification and only the structure can.",
    evidence:
      "Compounds with the same molecular formula can have different structures, so the structural formula is needed to classify them.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.2",
    concept: "formula versus structure",
  },
  {
    key: "xii-orgfund-thiol-sh-group",
    text: "The compound CH3SH, in which a hydrogen of methane is replaced by an -SH group, belongs to the class of",
    options: ["alcohols", "ethers", "thiols (thiol alcohols)", "amines"],
    correctIndex: 2,
    explanation:
      "An -SH group bonded to carbon gives the thiol class, the sulphur counterpart of an alcohol, whereas an -OH group would make the compound an alcohol and an -NH2 group an amine.",
    evidence:
      "A thiol contains an -SH group, in which sulphur takes the place of the oxygen of the hydroxyl group of an alcohol.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 91,
    outcome: "CHEM-13.3",
    concept: "thiol sulphhydryl group",
  },
  {
    key: "xii-orgfund-nitrile-versus-alkyne",
    text: "How does the nitrile group of CH3CN, written -CN with a carbon-nitrogen triple bond, differ from the multiple bond of an alkyne?",
    options: [
      "In a nitrile the triple bond joins a carbon to a nitrogen atom, whereas an alkyne triple bond joins two carbon atoms",
      "A nitrile must always contain a benzene ring, whereas an alkyne is always open chain",
      "A nitrile contains a triple bond between two carbon atoms, whereas an alkyne joins carbon to nitrogen",
      "The two bonds are identical and differ only in the length of the carbon chain attached to them",
    ],
    correctIndex: 0,
    explanation:
      "A nitrile contains a carbon atom triple bonded to a nitrogen, while an alkyne contains a carbon-carbon triple bond, which is why nitriles are listed separately and rank above the hydrocarbons in the priority order.",
    evidence:
      "A nitrile contains a carbon atom triple bonded to a nitrogen atom, whereas an alkyne contains a carbon-carbon triple bond.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.3",
    concept: "nitrile and alkyne bonds",
  },
  {
    key: "xii-orgfund-amide-versus-amine",
    text: "For the structure CH3CONHCH3, which pair of statements is correct?",
    options: [
      "It is an amine, and its characteristic group is an -NH2 group attached to a carbon",
      "It is a ketone, and its characteristic group is a carbonyl between two carbon atoms",
      "It is an alcohol, and its characteristic group is an -OH group on a saturated carbon",
      "It is an amide, because the nitrogen of its -NH- group is attached directly to a carbonyl carbon",
    ],
    correctIndex: 3,
    explanation:
      "Here the carbonyl carbon is bonded to a nitrogen, which gives the -CONH- amide group, whereas in an amine the nitrogen is attached only to carbon atoms and no carbonyl lies next to it.",
    evidence:
      "An amide contains a -CONH- group in which a carbonyl carbon is bonded directly to a nitrogen atom.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.3",
    concept: "amide group identification",
  },
  {
    key: "xii-orgfund-hydroxyl-with-carboxyl-priority",
    text: "The structure HOCH2COOH carries what appear to be a hydroxyl group and a carboxyl group. On the basis of functional group priority the compound is classified as a",
    options: [
      "diol, since two hydroxyl groups can be counted in it",
      "carboxylic acid, since -COOH outranks -OH in the priority order",
      "alcohol, since -OH is the only group joined to carbon by a single bond",
      "ester, since its two oxygen-rich groups are joined through a carbon",
    ],
    correctIndex: 1,
    explanation:
      "The oxygen of the hydroxyl is part of the -COOH group rather than a separate -OH, and in any case the carboxyl group outranks the hydroxyl in the priority order, so the compound is an acid.",
    evidence:
      "When several functional groups are present the group of higher priority determines the class, and the carboxylic acid group outranks the alcohol group.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.3",
    concept: "priority of carboxyl group",
  },
  {
    key: "xii-orgfund-amine-below-acid-priority",
    text: "A compound carries both a -COOH group and an -NH2 group. In the order of priority used for classification, where does the -NH2 group stand and what follows from that?",
    options: [
      "It stands above -COOH, so the compound is classified as an amine",
      "It stands level with -COOH, so the compound may be treated as either an acid or an amine",
      "It stands below -COOH, so the senior group makes the compound a carboxylic acid",
      "It stands below the alkene group, so the compound is classified as an alkane",
    ],
    correctIndex: 2,
    explanation:
      "In the priority list the carboxyl group is senior to the amino group, so a molecule carrying both is classified as a carboxylic acid even though an amine group is also present.",
    evidence:
      "When more than one functional group is present the higher-priority group fixes the class, and the carboxylic acid group outranks the amine group.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-13.3",
    concept: "amine group priority",
  },
  {
    key: "xii-orgfund-ester-versus-acid-reasoning",
    text: "A student insists that CH3COOCH3 is a carboxylic acid because it contains the fragment COOH when written out. Why is the claim wrong?",
    options: [
      "Because in this molecule the carbonyl carbon is bonded to an -O-CH3 group instead of an -OH group, which is the -COOR ester arrangement",
      "Because the molecule contains no oxygen atom at all",
      "Because a carboxylic acid may never contain any oxygen beyond its -COOH group",
      "Because esters are always aromatic while carboxylic acids are always aliphatic",
    ],
    correctIndex: 0,
    explanation:
      "Written out as CH3-CO-O-CH3 the molecule shows the -COOR group, the ester arrangement, because the singly bonded oxygen carries a methyl group where a carboxylic acid requires the -O-H of the -COOH group.",
    evidence:
      "An ester contains the -COOR group, in which the carbonyl carbon is bonded to an -OR group rather than to an -OH group.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-13.3",
    concept: "ester group versus acid group",
  },
  {
    key: "xii-orgfund-haloalkane-halogen-bonds",
    text: "In the haloalkane CH3CH2Cl, what distinguishes its group from that of the alcohol CH3CH2OH?",
    options: [
      "In the haloalkane the halogen is joined to a saturated carbon through a C-Cl bond, where X stands for F, Cl, Br or I",
      "In the haloalkane the halogen is joined to a hydrogen, forming an H-Cl bond",
      "In the haloalkane the halogen forms a double bond with the end carbon of the chain",
      "In the haloalkane the halogen bridges two carbon atoms in a C-Cl-C link",
    ],
    correctIndex: 0,
    explanation:
      "A haloalkane is an alkane in which hydrogen is replaced by F, Cl, Br or I, giving a carbon-halogen bond to a saturated carbon, whereas the alcohol has an oxygen bonded to that carbon and carrying a hydrogen.",
    evidence:
      "A haloalkane is an alkane in which one or more hydrogen atoms are replaced by a halogen atom, F, Cl, Br or I.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-13.3",
    concept: "haloalkane carbon halogen bond",
  },
  {
    key: "xii-orgfund-class-assignment-pair",
    text: "Two compounds are examined: X is CH3CH2CHO and Y is C6H5CH=CH2. Which pair of class assignments is correct for them?",
    options: [
      "X is a ketone and Y is an aromatic hydrocarbon with no unsaturation outside the ring",
      "X is an aldehyde and Y is an aromatic alkene whose double bond lies in the side chain",
      "X is a carboxylic acid and Y is a haloalkane",
      "X is an amide and Y is a saturated ring hydrocarbon",
    ],
    correctIndex: 1,
    explanation:
      "In X the carbonyl carbon carries a hydrogen and closes the chain, giving the -CHO group of an aldehyde, while in Y the benzene ring makes it aromatic and the C=C in the side chain makes it an alkene as well.",
    evidence:
      "An aldehyde contains a -CHO group, and a compound with a benzene ring is aromatic while a carbon-carbon double bond in a side chain makes it an alkene.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-13.3",
    concept: "aldehyde and aromatic alkene",
  },
  {
    key: "xii-orgfund-multi-group-classification",
    text: "Compound Z has a benzene ring bearing a -CH2SH substituent and also a -COOH group on the ring. Which description of Z is fully correct?",
    options: [
      "Z is aromatic and unsaturated, and its senior class is the carboxylic acid",
      "Z is aliphatic and saturated, and its senior class is the thiol",
      "Z is aromatic and saturated, and its senior class is the alcohol",
      "Z is acyclic and unsaturated, and its senior class is the ester",
    ],
    correctIndex: 0,
    explanation:
      "The benzene ring makes Z aromatic and unsaturated, and although a thiol group is present the carboxyl group outranks it in the priority order, so the compound belongs to the carboxylic acid class.",
    evidence:
      "A compound containing a benzene ring is aromatic, and when several functional groups are present the highest-priority group, here the carboxyl group, fixes its class.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 87,
    outcome: "CHEM-13.3",
    concept: "combined structural classification",
  },
];
