import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "fgroup-functional-group-definition",
    text: "The atom or group of atoms in an organic compound that determines the characteristic chemical reactions of that compound is called the",
    options: ["functional group", "homologous series", "molecular formula", "carbon skeleton"],
    correctIndex: 0,
    explanation:
      "The functional group is the reactive part of the molecule, so compounds that carry the same group behave alike and are classified together.",
    evidence:
      "A functional group is an atom or a group of atoms that determines the characteristic chemical reactions of an organic compound.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-13.3",
    concept: "functional group definition",
  },
  {
    key: "fgroup-classification-by-shared-reactions",
    text: "Organic compounds are placed in the same class mainly because",
    options: [
      "they all contain the same number of carbon atoms",
      "they carry the same functional group and so show similar chemical reactions",
      "they are all obtained from the same raw material",
      "they have identical molecular masses",
    ],
    correctIndex: 1,
    explanation:
      "It is the functional group, not the size of the carbon skeleton or the source, that decides the characteristic reactions, so a shared group is the basis of classification.",
    evidence:
      "Compounds that contain the same functional group show similar chemical properties and are placed in the same class.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-13.3",
    concept: "basis of classification",
  },
  {
    key: "fgroup-alkene-characteristic-bond",
    text: "A hydrocarbon that contains one or more carbon-carbon double bonds belongs to the",
    options: ["alkane class", "alkene class", "alkyne class", "arene class"],
    correctIndex: 2,
    explanation:
      "Alkenes are the hydrocarbons whose defining group is a carbon-carbon double bond, C=C.",
    evidence: "Alkenes are hydrocarbons that contain one or more carbon-carbon double bonds.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-13.3",
    concept: "alkene double bond",
  },
  {
    key: "fgroup-haloalkane-halogen-replacement",
    text: "A halogen derivative of an alkane in which one or more hydrogen atoms are replaced by a halogen atom is a",
    options: ["haloarene", "haloalkane", "alkanol", "alkanamine"],
    correctIndex: 3,
    explanation:
      "Replacing hydrogen of an alkane skeleton with fluorine, chlorine, bromine or iodine gives a haloalkane, in which the halogen is bonded to a saturated carbon.",
    evidence:
      "Haloalkanes are alkanes in which one or more hydrogen atoms are replaced by halogen atoms such as fluorine, chlorine, bromine or iodine.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-13.3",
    concept: "haloalkane halogen substitution",
  },
  {
    key: "fgroup-ether-oxygen-bridged",
    text: "Which structural fragment identifies a compound as an ether?",
    options: [
      "an oxygen atom bonded to two carbon atoms and to no hydrogen",
      "an oxygen atom bonded to one hydrogen and one carbon",
      "a carbon atom double bonded to oxygen at the end of a chain",
      "two oxygen atoms joined together by a carbon chain",
    ],
    correctIndex: 0,
    explanation:
      "An ether has the arrangement C-O-C, with the oxygen between two carbon atoms and carrying no O-H bond.",
    evidence:
      "Ethers have the general formula R-O-R, in which the oxygen atom is bonded to two carbon atoms.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.3",
    concept: "ether C-O-C linkage",
  },
  {
    key: "fgroup-alcohol-versus-ether-formula",
    text: "How does the structural formula CH3CH2-O-CH2CH3 differ from that of an alcohol with the same number of carbon atoms?",
    options: [
      "It carries a hydroxyl group on the first carbon of the chain",
      "It has an oxygen bridging two carbon atoms and no O-H bond",
      "It has a carboxyl group at the end of the chain",
      "It has a carbonyl group between two carbon atoms",
    ],
    correctIndex: 1,
    explanation:
      "In this ether the oxygen joins an ethyl group to another ethyl group and bears no hydrogen, whereas the alcohol of the same size would show -OH on a saturated carbon.",
    evidence:
      "An alcohol contains a hydroxyl group, -OH, whereas an ether contains an oxygen atom joined to two carbon atoms and no O-H group.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.3",
    concept: "alcohol ether distinction",
  },
  {
    key: "fgroup-aldehyde-terminal-carbonyl",
    text: "A carbonyl group whose double-bonded carbon carries a hydrogen and stands at the end of the chain identifies the compound as a",
    options: ["ketone", "carboxylic acid", "aldehyde", "ester"],
    correctIndex: 2,
    explanation:
      "The -CHO group with a hydrogen on the carbonyl carbon at a chain end is the aldehyde group.",
    evidence:
      "An aldehyde contains a -CHO group in which the carbonyl carbon is bonded to a hydrogen atom.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-13.3",
    concept: "aldehyde group",
  },
  {
    key: "fgroup-ketone-carbonyl-between-carbons",
    text: "In which of these compounds does the carbonyl group lie between two carbon atoms?",
    options: ["propanoic acid", "propanal", "propene", "propanone"],
    correctIndex: 3,
    explanation:
      "Propanone is CH3COCH3, so its carbonyl carbon is attached to two carbons, which makes it a ketone; propanal ends in -CHO and propanoic acid ends in -COOH.",
    evidence:
      "A ketone contains a carbonyl group, C=O, that is bonded to two carbon atoms.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-13.3",
    concept: "ketone carbonyl position",
  },
  {
    key: "fgroup-ester-formation-origin",
    text: "The -COOR group of an ester arises from the condensation of",
    options: [
      "a carboxylic acid and an alcohol",
      "an alcohol and an aldehyde",
      "an amine and a ketone",
      "an alkane and a halogen",
    ],
    correctIndex: 0,
    explanation:
      "The acid supplies the -CO- part and the alcohol supplies the -OR part, so an ester is the condensation product of a carboxylic acid with an alcohol.",
    evidence:
      "An ester is formed when a carboxylic acid combines with an alcohol, giving the -COOR group.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-13.3",
    concept: "ester formation origin",
  },
  {
    key: "fgroup-oic-acid-suffix-class",
    text: "A saturated compound whose name ends in '-oic acid' belongs to which class?",
    options: ["alcohols", "carboxylic acids", "aldehydes", "alkanes"],
    correctIndex: 1,
    explanation:
      "The -oic acid suffix marks the carboxyl group, while -ol marks an alcohol and -al marks an aldehyde.",
    evidence: "Carboxylic acids are named using the suffix -oic acid.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.3",
    concept: "carboxylic acid suffix",
  },
  {
    key: "fgroup-identifying-alcohol-formula",
    text: "The condensed formula CH3CH2CH2OH represents a member of which class?",
    options: [
      "a carboxylic acid, because the formula ends in OH",
      "an aldehyde, because the last carbon carries an oxygen",
      "an alcohol, because an -OH group is attached to a saturated carbon",
      "an ether, because the oxygen is bonded to two carbon atoms",
    ],
    correctIndex: 2,
    explanation:
      "Here the oxygen is part of a hydroxyl group on a saturated carbon, so the compound is an alcohol; an acid would require -COOH and an ether would require C-O-C.",
    evidence:
      "Alcohols are compounds in which a hydroxyl group, -OH, is attached to a saturated carbon atom.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-13.3",
    concept: "identifying an alcohol",
  },
  {
    key: "fgroup-acid-more-acidic-than-alcohol",
    text: "Why is a carboxylic acid more acidic than an alcohol?",
    options: [
      "Because the electronegative -OH group of an alcohol releases its proton more readily",
      "Because an alcohol contains no oxygen atom in its molecule",
      "Because the alkyl groups attached to -COOH push the incoming hydrogen ion away",
      "Because the electron-withdrawing carbonyl group of -COOH makes loss of H+ easier than loss of H+ from -OH",
    ],
    correctIndex: 3,
    explanation:
      "In -COOH the carbonyl carbon pulls electron density away from the O-H bond and the carboxylate ion that forms is stabilised, so the proton leaves far more readily than from an alcohol.",
    evidence:
      "A carboxylic acid is more acidic than an alcohol because of the electron-withdrawing carbonyl group attached to its hydroxyl group.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-13.3",
    concept: "carboxylic acid acidity",
  },
  {
    key: "fgroup-acid-general-formula-test",
    text: "The carboxylic acid CH3(CH2)6COOH belongs to a homologous series with the general formula",
    options: ["CnH2nO2", "CnH2n+1OH", "CnH2n", "CnH2n+2"],
    correctIndex: 0,
    explanation:
      "The molecule has 8 carbon, 16 hydrogen and 2 oxygen atoms, so it is C8H16O2, which fits CnH2nO2, the general formula of saturated monocarboxylic acids.",
    evidence:
      "Saturated monocarboxylic acids have the general formula CnH2nO2, which may also be written as CnH2n+1COOH.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-13.3",
    concept: "carboxylic acid general formula",
  },
  {
    key: "fgroup-priority-order-multiple-groups",
    text: "When a compound carries more than one functional group, the correct order of decreasing priority for naming the principal group is",
    options: [
      "amine, alcohol, ketone, aldehyde, nitrile, amide, ester, carboxylic acid",
      "carboxylic acid, ester, amide, nitrile, aldehyde, ketone, alcohol, amine",
      "ketone, aldehyde, ester, carboxylic acid, alcohol, amine, amide, nitrile",
      "alcohol, carboxylic acid, ester, amine, aldehyde, ketone, nitrile, amide",
    ],
    correctIndex: 1,
    explanation:
      "At this level the carboxyl group outranks all the groups listed, then come ester, amide and nitrile, followed by aldehyde, ketone, alcohol and amine in that order.",
    evidence:
      "When several functional groups are present, the group of higher priority is used to name the compound.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 88,
    outcome: "CHEM-13.3",
    concept: "group priority order",
  },
  {
    key: "fgroup-position-isomerism-butene",
    text: "But-1-ene and but-2-ene are two different compounds with the same molecular formula. The relationship between them is",
    options: ["functional group isomerism", "chain (skeletal) isomerism", "position isomerism", "aromatic isomerism"],
    correctIndex: 2,
    explanation:
      "Both carry a C=C double bond in a straight four-carbon chain; the double bond lies at carbon 1 in one and at carbon 2 in the other, so only its position differs.",
    evidence:
      "Position isomers differ in the position of the functional group on an otherwise identical carbon skeleton.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.3",
    concept: "position isomerism",
  },
  {
    key: "fgroup-branched-carbon-skeleton",
    text: "The carbon skeleton of 2-methylbutane is best described as",
    options: [
      "a straight chain with no side branches",
      "a branched chain, because a methyl group is attached to an internal carbon",
      "a ring of five carbon atoms",
      "a chain in which two carbons are joined by a double bond",
    ],
    correctIndex: 3,
    explanation:
      "2-Methylbutane, CH3CH(CH3)CH2CH3, has a methyl branch on the second carbon of the main chain, so its skeleton is branched and not cyclic or unsaturated.",
    evidence:
      "Carbon skeletons in organic compounds may be straight chained or branched.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "CHEM-13.3",
    concept: "branched carbon skeleton",
  },
  {
    key: "fgroup-haloarene-versus-haloalkane",
    text: "How does a haloarene differ from a haloalkane?",
    options: [
      "In a haloarene the halogen is attached to a carbon of a benzene ring, not to an alkane chain",
      "In a haloarene the halogen is attached only to saturated carbons",
      "A haloarene contains no halogen atom at all",
      "A haloalkane must contain a benzene ring bearing the halogen",
    ],
    correctIndex: 0,
    explanation:
      "Both carry a carbon-halogen bond, but in a haloarene that halogen sits on an aromatic ring while in a haloalkane it sits on a saturated carbon.",
    evidence:
      "A haloarene is an aromatic compound in which a halogen atom is bonded to a carbon of an aromatic ring.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-13.3",
    concept: "haloarene and haloalkane",
  },
  {
    key: "fgroup-ketone-not-aldehyde-reasoning",
    text: "The compound CH3COCH2CH3 contains a carbonyl group. A student claims that it is an aldehyde. Why is this claim wrong?",
    options: [
      "Because the compound contains no carbonyl group at all",
      "Because the carbonyl carbon in this molecule is attached to two carbon atoms instead of to a hydrogen",
      "Because aldehydes must always be aromatic compounds",
      "Because a carbonyl group can occur only in acids and esters",
    ],
    correctIndex: 1,
    explanation:
      "In CH3COCH2CH3 the doubly bonded carbon is flanked by a methyl and an ethyl group, so it is a ketone; an aldehyde would have that carbon bonded to a hydrogen.",
    evidence:
      "In an aldehyde the carbonyl carbon is bonded to a hydrogen atom, while in a ketone it is bonded to two carbon atoms.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-13.3",
    concept: "ketone versus aldehyde",
  },
  {
    key: "fgroup-amine-nh2-statement-pair",
    text: "For the structure CH3CH2NH2, which pair of statements is correct?",
    options: [
      "It is an alcohol, and its characteristic group is the -OH group",
      "It is an amide, because the nitrogen is bonded to two carbonyl carbons",
      "It is an amine, and its characteristic group is the -NH2 group attached to a carbon",
      "It is an ether, because the nitrogen is bonded to two carbon atoms",
    ],
    correctIndex: 2,
    explanation:
      "A nitrogen carrying two hydrogens and bonded to a saturated carbon gives the -NH2 group, which places the compound in the amine class.",
    evidence:
      "Amines are organic compounds in which an -NH2 group is attached to a carbon atom.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-13.3",
    concept: "amine group identification",
  },
  {
    key: "fgroup-alkane-general-formula-mcq",
    text: "A straight-chain alkane contains four carbon atoms. Its general formula and the molecular formula of the compound are",
    options: ["CnH2n, giving C4H8", "CnH2n+2, giving C4H8", "CnH2n, giving C4H10", "CnH2n+2, giving C4H10"],
    correctIndex: 3,
    explanation:
      "A saturated hydrocarbon follows CnH2n+2, so four carbon atoms give n = 4 and the formula C4H10.",
    evidence: "Alkanes are saturated hydrocarbons with the general formula CnH2n+2.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-13.3",
    concept: "alkane general formula",
  },
  {
    key: "fgroup-alkyne-homologous-order",
    text: "Ethyne, propyne and but-1-yne are consecutive members of one homologous series. Arranged from the first member onwards, their molecular formulas are",
    options: ["C2H2, C3H4, C4H6", "C3H4, C2H2, C4H6", "C4H6, C3H4, C2H2", "C2H2, C4H6, C3H4"],
    correctIndex: 0,
    explanation:
      "Alkynes follow CnH2n-2, so ethyne is C2H2, propyne is C3H4 and but-1-yne is C4H6, each member differing from the next by CH2.",
    evidence:
      "Alkynes are hydrocarbons that contain a carbon-carbon triple bond and have the general formula CnH2n-2.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-13.3",
    concept: "homologous series order",
  },
  {
    key: "fgroup-ether-not-homologue-of-alcohol",
    text: "CH3OCH3 and CH3OH each contain one oxygen atom bonded to carbon. Why is CH3OCH3 not a member of the homologous series of CH3OH?",
    options: [
      "Because CH3OCH3 differs from CH3OH by a whole CH2 group",
      "Because CH3OCH3 has an ether linkage and no O-H group, while the series of CH3OH consists of -OH compounds",
      "Because the homologous series of CH3OH contains only one-carbon compounds",
      "Because CH3OCH3 carries a carbonyl group in place of a hydroxyl group",
    ],
    correctIndex: 1,
    explanation:
      "A homologous series needs a common functional group, and the series of methanol is the -OH series, whereas in CH3OCH3 the oxygen bridges two carbons with no O-H bond.",
    evidence:
      "Members of a homologous series share the same functional group and differ successively by a CH2 group.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-13.3",
    concept: "homologous series membership",
  },
  {
    key: "fgroup-benzoic-acid-statement-pair",
    text: "For the compound C6H5COOH, which pair of statements is correct?",
    options: [
      "It is an aliphatic compound, and its highest priority group is a hydroxyl group",
      "It is an ester, and its highest priority group is the -COOH group",
      "It is a carboxylic acid, and its highest priority group is the -COOH group",
      "It is an aromatic amine, and its highest priority group is the -NH2 group",
    ],
    correctIndex: 2,
    explanation:
      "The -COOH attached to a benzene ring makes the compound an aromatic carboxylic acid, and the carboxyl group outranks every other group in the naming priority.",
    evidence:
      "Aromatic compounds contain a benzene ring, and a -COOH group places the compound in the carboxylic acid class.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 87,
    outcome: "CHEM-13.3",
    concept: "priority in aromatic acids",
  },
  {
    key: "fgroup-shared-group-similar-reactions",
    text: "Which pair of compounds would be expected to undergo similar chemical reactions because they carry the same functional group?",
    options: [
      "CH3CH3 and CH3OH, because both are saturated compounds",
      "C6H6 and C2H6, because both contain only carbon and hydrogen",
      "CH3COCH3 and CH3CH2CH2CH3, because both form unbranched chains",
      "CH3CH2OH and CH3CH2CH2OH, because both carry the -OH group of alcohols",
    ],
    correctIndex: 3,
    explanation:
      "These two alcohols differ only by CH2 and both contain -OH, so each shows the characteristic reactions of the alcohol class.",
    evidence:
      "Compounds containing the same functional group undergo similar chemical reactions.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-13.3",
    concept: "shared functional group reactions",
  },
  {
    key: "fgroup-aromatic-acid-principal-class",
    text: "A compound has a benzene ring that carries both a -CH3 group and a -COOH group. Its principal class is",
    options: ["aromatic carboxylic acid", "aromatic ketone", "aromatic ether", "aliphatic carboxylic acid"],
    correctIndex: 0,
    explanation:
      "The benzene ring makes the compound aromatic and the -COOH is the senior group, so it is classified as an aromatic carboxylic acid.",
    evidence:
      "A compound containing a carboxyl group is a carboxylic acid, and one containing a benzene ring is described as aromatic.",
    questionType: "CONCEPTUAL",
    difficulty: "HARD",
    relevance: 86,
    outcome: "CHEM-13.3",
    concept: "aromatic carboxylic acid",
  },
];