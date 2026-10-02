import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-alcohol-iol-suffix-and-locant",
    text: "Which pair of alcohol names follows IUPAC practice, in which the alkane parent name is numbered from the end nearest the hydroxyl group?",
    options: [
      "methanol and propane-1-ol",
      "methanol and propan-2-ol",
      "methan-1-ol and propan-2-ol",
      "methane-1-ol and propan-1-ol",
    ],
    correctIndex: 1,
    explanation:
      "The final e of the alkane parent name is elided before the -ol suffix, so propane-1-ol becomes propan-1-ol, and a locant is written only where it is needed, which is why the single-carbon alcohol is simply methanol.",
    evidence:
      "Alcohols are named by adding the suffix -ol to the alkane parent name, numbering the chain from the end nearest the hydroxyl group.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-16.1",
    concept: "iol suffix naming",
  },
  {
    key: "xii-alcohol-classification-by-oh-carbon",
    text: "Classification of an alcohol as primary, secondary or tertiary depends on",
    options: [
      "the number of carbon atoms bonded to the carbon that carries the hydroxyl group",
      "the total number of carbon atoms in the parent chain",
      "the number of hydroxyl groups present on the parent chain",
      "the degree of branching in the carbon chain attached to the hydroxyl group",
    ],
    correctIndex: 0,
    explanation:
      "The prefix describes the carbinol carbon itself: bonded to one other carbon it is primary, to two carbons secondary and to three carbons tertiary, whatever the rest of the chain looks like.",
    evidence:
      "Alcohols are classified as primary, secondary or tertiary according to the number of carbon atoms attached to the carbon bearing the hydroxyl group.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-16.1",
    concept: "alcohol classification",
  },
  {
    key: "xii-alcohol-name-and-class-pair",
    text: "Four alcohol names are listed with a class and a reason. Which name and class pair is correct?",
    options: [
      "2-methylpropan-2-ol, tertiary, because the hydroxyl-bearing carbon is bonded to three carbons",
      "propan-2-ol, primary, because the hydroxyl-bearing carbon is bonded to a single carbon on one side",
      "butan-1-ol, secondary, because its parent chain contains four carbon atoms",
      "pentan-3-ol, tertiary, because the hydroxyl-bearing carbon is bonded to three carbons",
    ],
    correctIndex: 0,
    explanation:
      "In 2-methylpropan-2-ol the hydroxyl-bearing carbon carries three methyl carbons, which makes it tertiary; propan-2-ol and pentan-3-ol each have two carbons there and are secondary, while butan-1-ol has one and is primary.",
    evidence:
      "The class of an alcohol depends only on the number of carbons bonded to the carbon that carries the hydroxyl group.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "CHEM-16.1",
    concept: "name and class pairing",
  },
  {
    key: "xii-alcohol-lowest-locant-for-hydroxyl",
    text: "The structure CH3CH(OH)CH2CH2CH3 may be numbered from either end of the chain. The correct IUPAC name follows because numbering begins",
    options: [
      "at the end nearer the first branch, so the name is pentan-1-ol",
      "at the end farther from the hydroxyl group, so the name is pentan-4-ol",
      "at the end nearer the hydroxyl group, so the name is pentan-2-ol",
      "at the end nearer the hydroxyl group, so the name is pentane-2-ol",
    ],
    correctIndex: 2,
    explanation:
      "The suffix must receive the lowest locant, and counting from the hydroxyl end gives position 2 rather than 4; the final e of pentane is also elided, so the accepted name is pentan-2-ol and not pentane-2-ol.",
    evidence:
      "In naming an alcohol the parent chain is numbered from the end that gives the hydroxyl group the lowest locant.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-16.1",
    concept: "lowest locant rule",
  },
  {
    key: "xii-alcohol-parent-chain-holds-oh-carbon",
    text: "In 2-ethylbutan-1-ol a five-carbon chain exists in the molecule, yet the name is built on a four-carbon parent carrying an ethyl substituent. This happens because",
    options: [
      "the parent chain of an alcohol must contain the carbon that bears the hydroxyl group",
      "a substituent may not be placed on the first carbon of a parent chain",
      "a five-carbon parent name is reserved for hydrocarbons and never used for alcohols",
      "the hydroxyl group can be indicated only at the first carbon of the parent chain",
    ],
    correctIndex: 0,
    explanation:
      "The five-carbon chain does not carry the -OH, so the four-carbon butane chain that does carry it becomes the parent hydride and the two remaining carbons are named as an ethyl substituent at C2.",
    evidence:
      "The parent hydride of an alcohol is the longest chain that includes the carbon bearing the hydroxyl group.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-16.1",
    concept: "parent chain selection",
  },
  {
    key: "xii-alcohol-oh-polarity-and-hydrogen-bonding",
    text: "Two statements about the structure of alcohols are given. Statement I: the O-H bond is polar covalent because oxygen attracts the shared pair more strongly than hydrogen does. Statement II: the hydroxyl group prevents alcohol molecules from forming hydrogen bonds with one another. Which judgement is correct?",
    options: [
      "Statement I is correct and Statement II is incorrect",
      "Statement I is incorrect and Statement II is correct",
      "Both statements are correct",
      "Both statements are incorrect",
    ],
    correctIndex: 0,
    explanation:
      "Oxygen is more electronegative than hydrogen, so the O-H bond is polar with the electron pair drawn towards oxygen; that polar hydrogen is precisely what lets one molecule hydrogen-bond to the oxygen of another molecule, so Statement II is wrong.",
    evidence:
      "The polar O-H group allows alcohol molecules to be associated with one another by hydrogen bonding.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.1",
    concept: "oh bond polarity",
  },
  {
    key: "xii-alcohol-boiling-point-above-hydrocarbon",
    text: "Ethanol boils at about 78 degrees C while ethane, of almost the same relative molecular mass, boils at about -89 degrees C. The main reason for the difference is that",
    options: [
      "ethanol molecules are physically larger than ethane molecules",
      "ethanol molecules are linked by hydrogen bonds, whereas ethane has only weak van der Waals forces",
      "the extra oxygen atom in ethanol absorbs heat from the surroundings",
      "ethane is a gas at room temperature whereas ethanol is a solid",
    ],
    correctIndex: 1,
    explanation:
      "Boiling separates molecules, not atoms, so the extra energy needed for ethanol comes from breaking the weak intermolecular hydrogen bonds; ethane has no such attraction and escapes at a far lower temperature.",
    evidence:
      "Hydrogen bonding raises the boiling points of alcohols well above those of comparable hydrocarbons.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-16.1",
    concept: "hydrogen bonding in alcohols",
  },
  {
    key: "xii-alcohol-solubility-falls-with-chain-length",
    text: "Methanol, ethanol and octan-1-ol are all monohydric alcohols, yet they differ sharply in their miscibility with water. The reason is that",
    options: [
      "octan-1-ol carries three hydroxyl groups while the other two carry only one",
      "the O-H bond of octan-1-ol is much longer than that of the shorter alcohols",
      "the non-polar hydrocarbon part lengthens along the series and increasingly outweighs the polar -OH group",
      "the density of the alcohol falls as the chain grows, which lowers its miscibility",
    ],
    correctIndex: 2,
    explanation:
      "All three hydrogen-bond with water through their single -OH group, but as the hydrocarbon chain lengthens the non-polar portion comes to dominate and water can no longer solvate the whole molecule, so solubility falls.",
    evidence:
      "Solubility in water decreases along the alcohol homologous series as the hydrocarbon chain becomes longer.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.1",
    concept: "solubility in water",
  },
  {
    key: "xii-alcohol-primary-oxidation-two-stages",
    text: "A primary alcohol passes through two oxidation stages. For ethanol the correct order of the organic products formed is",
    options: ["ethanoic acid, then methanal", "ethanal, then ethanoic acid", "propanal, then propanone", "ethene, then ethanal"],
    correctIndex: 1,
    explanation:
      "Mild oxidation of the primary -CH2OH group gives the aldehyde ethanal, and further oxidation of that aldehyde gives the carboxylic acid ethanoic acid; the carbon skeleton is unchanged in both steps.",
    evidence:
      "Primary alcohols are oxidised first to aldehydes and then, on further oxidation, to carboxylic acids.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-16.2",
    concept: "primary alcohol oxidation",
  },
  {
    key: "xii-alcohol-secondary-oxidation-gives-ketone",
    text: "Oxidation of propan-2-ol under mild conditions gives",
    options: ["propanal", "propanoic acid", "propanone", "prop-1-ene"],
    correctIndex: 2,
    explanation:
      "The hydroxyl-bearing carbon of propan-2-ol is bonded to two carbons, so the alcohol is secondary and yields the ketone propanone; going beyond a ketone would require breaking a carbon-carbon bond, which mild conditions do not do.",
    evidence:
      "Secondary alcohols are oxidised to ketones.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.2",
    concept: "secondary alcohol oxidation",
  },
  {
    key: "xii-alcohol-tertiary-resists-oxidation",
    text: "2-Methylpropan-2-ol is not attacked by mild oxidising agents because",
    options: [
      "its hydroxyl group is bonded to an oxygen that cannot give up a hydrogen atom",
      "the carbon carrying the hydroxyl group has no hydrogen atom attached to it",
      "its molecular mass is too large for it to react with an oxidising agent",
      "tertiary alcohols are already saturated with hydrogen atoms on every carbon",
    ],
    correctIndex: 1,
    explanation:
      "Forming a carbonyl at that carbon requires removing a hydrogen from it, and in 2-methylpropan-2-ol the carbon is already bonded to three methyl groups and the -OH, so no such hydrogen is available.",
    evidence:
      "Tertiary alcohols resist oxidation under mild conditions because the hydroxyl-bearing carbon carries no hydrogen atom.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.2",
    concept: "resistance to oxidation",
  },
  {
    key: "xii-alcohol-oh-hydrogen-more-acidic-than-alkane",
    text: "Compare ethanol with ethane. The hydroxyl hydrogen of ethanol is far more acidic than a hydrogen of the alkane because",
    options: [
      "oxygen has only two electrons in its second shell and so holds the hydrogen tightly",
      "the alkane hydrogen is bonded to a carbon that is already saturated with hydrogens",
      "the O-H bond is strongly polar and the attached oxygen stabilises the negative charge left on it",
      "the alkane hydrogen is attached to a carbon that carries a greater electron density than oxygen",
    ],
    correctIndex: 3,
    explanation:
      "Losing the O-H proton puts the negative charge on electronegative oxygen, where it is accommodated, whereas ionising a C-H bond of an alkane would leave the charge on carbon, which is why alcohols are the more acidic family.",
    evidence:
      "The hydrogen of the hydroxyl group is ionisable, so alcohols are more acidic than the corresponding alkanes.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-16.2",
    concept: "hydroxyl group acidity",
  },
  {
    key: "xii-alcohol-dehydration-products-by-temperature",
    text: "An alcohol heated with concentrated sulphuric acid gives a different organic product at each of two temperatures. As the temperature is raised from about 140 degrees C to about 170 degrees C, the product changes from",
    options: ["an alkene to an ether", "a ketone to an alkene", "an ester to an aldehyde", "an ether to an alkene"],
    correctIndex: 3,
    explanation:
      "At about 140 degrees C two alcohol molecules lose one molecule of water between them to give an ether, whereas near 170 degrees C a single molecule loses water and forms a carbon-carbon double bond, giving an alkene.",
    evidence:
      "Alcohols give an ether at about 140 degrees C and an alkene at about 170 degrees C when heated with concentrated sulphuric acid.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-16.2",
    concept: "temperature of dehydration",
  },
  {
    key: "xii-alcohol-secondary-dehydration-alkene",
    text: "Dehydration of propan-2-ol at about 170 degrees C with concentrated sulphuric acid gives",
    options: ["ethene", "but-1-ene", "propanone", "propene"],
    correctIndex: 3,
    explanation:
      "Water is lost from the hydroxyl-bearing carbon and a neighbouring carbon, and the new double bond forms between those two carbons, giving CH3CH=CH2, which is propene.",
    evidence:
      "Dehydration of an alcohol at about 170 degrees C places the double bond between the hydroxyl-bearing carbon and an adjacent carbon.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-16.2",
    concept: "secondary alcohol dehydration",
  },
  {
    key: "xii-alcohol-methanol-oxidation-products",
    text: "Oxidation of an alcohol passes first to methanal and then to methanoic acid. The alcohol that undergoes this sequence is",
    options: ["ethanal", "ethanol", "methanol", "2-methylpropan-2-ol"],
    correctIndex: 2,
    explanation:
      "Methanal and methanoic acid are both one-carbon compounds, so they can only come from methanol; ethanol would instead give ethanal and ethanoic acid, and the tertiary alcohol would not be oxidised at all.",
    evidence:
      "Methanol is oxidised first to methanal and then to methanoic acid.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-16.2",
    concept: "oxidation of methanol",
  },
  {
    key: "xii-alcohol-oxidation-class-statements",
    text: "On the oxidation of alcohols, the following statements are made. Statement I: a secondary alcohol gives a ketone on mild oxidation. Statement II: a tertiary alcohol is readily oxidised to a carboxylic acid. Statement III: a primary alcohol passes through an aldehyde before reaching a carboxylic acid. Which judgement is correct?",
    options: [
      "Statements I and III are correct and Statement II is incorrect",
      "Statements I and II are correct and Statement III is incorrect",
      "Statements II and III are correct and Statement I is incorrect",
      "All three statements are correct",
    ],
    correctIndex: 0,
    explanation:
      "Secondary alcohols do give ketones and primary alcohols do go through an aldehyde, so I and III hold; a tertiary alcohol has no hydrogen on the hydroxyl-bearing carbon and resists oxidation, which makes Statement II false.",
    evidence:
      "Primary alcohols give aldehydes and then carboxylic acids, secondary alcohols give ketones, and tertiary alcohols resist mild oxidation.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-16.2",
    concept: "alcohol oxidation classes",
  },
  {
    key: "xii-alcohol-hydroxyl-substituted-by-halogen",
    text: "When ethanol reacts with hydrogen chloride, the hydroxyl group of the ethanol is replaced by",
    options: [
      "another hydroxyl group, so the structure is unchanged",
      "an ethyl group, giving diethyl ether",
      "a hydrogen atom, giving ethane",
      "a chlorine atom, giving chloroethane and water",
    ],
    correctIndex: 3,
    explanation:
      "The hydroxyl group leaves as part of water and the chlorine takes its place on the same carbon, so C2H5OH becomes C2H5Cl, which is substitution of the -OH and not a change to the carbon skeleton.",
    evidence:
      "The hydroxyl group of an alcohol may be substituted by other atoms such as halogen, giving halogen derivatives.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-16.2",
    concept: "substitution of the hydroxyl",
  },
  {
    key: "xii-alcohol-ether-from-two-alcohols",
    text: "Heating ethanol at about 140 degrees C with concentrated sulphuric acid gives",
    options: ["ethene and water", "diethyl ether and water", "ethanal and water", "ethane and hydrogen"],
    correctIndex: 1,
    explanation:
      "At about 140 degrees C two ethanol molecules lose one molecule of water and their ethyl groups are joined through the oxygen of the surviving hydroxyl group, giving diethyl ether; nearer 170 degrees C the product would be ethene instead.",
    evidence:
      "Two molecules of an alcohol dehydrate at about 140 degrees C in the presence of concentrated sulphuric acid to give an ether and water.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-16.3",
    concept: "ether formation conditions",
  },
  {
    key: "xii-alcohol-methanol-dehydration-ether",
    text: "Dehydration of two molecules of methanol at about 140 degrees C with concentrated sulphuric acid gives",
    options: ["methanal and water", "methanol and ethene", "dimethyl ether and ethene", "dimethyl ether and water"],
    correctIndex: 3,
    explanation:
      "The two methyl groups are linked by an oxygen to give CH3OCH3 and one molecule of water is eliminated; an alkene cannot arise from a single carbon, so ethene is impossible here.",
    evidence:
      "Dehydration of methanol at about 140 degrees C gives dimethyl ether and water.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-16.3",
    concept: "dehydration of methanol",
  },
  {
    key: "xii-alcohol-esterification-products",
    text: "Esterification of ethanol with ethanoic acid in the presence of concentrated sulphuric acid produces",
    options: [
      "ethyl ethanoate and water",
      "diethyl ether and ethanoic acid",
      "ethanal and ethanol",
      "ethene and ethanoic acid",
    ],
    correctIndex: 0,
    explanation:
      "The alcohol and the carboxylic acid condense across the carbonyl carbon with the loss of one molecule of water, giving the ester ethyl ethanoate, CH3COOC2H5, which is the defining reaction of an alcohol with an acid.",
    evidence:
      "An alcohol and a carboxylic acid condense in the presence of concentrated sulphuric acid to give an ester and water.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "CHEM-16.3",
    concept: "esterification products",
  },
  {
    key: "xii-alcohol-esterification-condition-statements",
    text: "Three statements about esterification are given. Statement I: concentrated sulphuric acid acts both as catalyst and as a dehydrating agent. Statement II: the reaction is reversible and eventually reaches equilibrium. Statement III: removing the ester and the water drives the equilibrium towards more ester. Which judgement is correct?",
    options: [
      "Only Statement I is correct",
      "Only Statement II is correct",
      "Only Statement III is correct",
      "All three statements are correct",
    ],
    correctIndex: 3,
    explanation:
      "All three hold: the acid speeds the condensation and takes up water, the reaction is reversible, and taking the products out of the mixture shifts the equilibrium towards the ester.",
    evidence:
      "Esterification is a reversible condensation catalysed by concentrated sulphuric acid, and removing the water and the ester shifts the equilibrium forward.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-16.3",
    concept: "esterification conditions",
  },
  {
    key: "xii-alcohol-equilibrium-shift-to-ester",
    text: "Esterification of an alcohol with a carboxylic acid is reversible. Which single change increases the equilibrium yield of the ester?",
    options: [
      "Adding water to the mixture",
      "Hydrolysing the ester that has already formed",
      "Removing the ester as it is formed",
      "Replacing the carboxylic acid with an aldehyde of similar mass",
    ],
    correctIndex: 2,
    explanation:
      "Taking a product out of the system shifts the equilibrium towards the products, whereas adding water or hydrolysing the ester drives it back towards the acid and the alcohol, and an aldehyde has no carboxyl group to esterify with.",
    evidence:
      "Esterification is an equilibrium reaction, and removal of the ester or of the water increases the yield of ester.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-16.3",
    concept: "esterification equilibrium",
  },
  {
    key: "xii-alcohol-ether-versus-ester-linkage",
    text: "Ethers and esters both join two carbon groups through an oxygen atom. The structural difference between the two classes is that",
    options: [
      "an ether contains an R-O-R linkage, whereas an ester contains an R-CO-O-R linkage with a carbonyl carbon",
      "an ether contains a carbonyl group, whereas an ester contains no bond to oxygen at all",
      "an ether always contains two oxygen atoms, whereas an ester contains only one",
      "an ester can hydrogen-bond to itself, whereas an ether can form no hydrogen bonds whatsoever",
    ],
    correctIndex: 0,
    explanation:
      "An ether is defined by the R-O-R linkage with single-bonded oxygen only, while an ester is defined by the -COO- group in which a carbonyl carbon is bonded to the bridging oxygen; both classes accept hydrogen bonds, but only alcohols and acids can donate them.",
    evidence:
      "Ethers have the R-O-R linkage, while esters contain the -COO- group with a carbonyl carbon bonded to the bridging oxygen.",
    questionType: "CONCEPTUAL",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-16.3",
    concept: "ether and ester structures",
  },
  {
    key: "xii-alcohol-conditions-and-products-sequence",
    text: "Ethanol gives three different products depending on the conditions used. Which option lists, in order, the organic product from (i) about 140 degrees C with concentrated sulphuric acid, (ii) about 170 degrees C with concentrated sulphuric acid, and (iii) heating with ethanoic acid and concentrated sulphuric acid?",
    options: [
      "ethene, diethyl ether, ethyl ethanoate",
      "diethyl ether, ethene, ethyl ethanoate",
      "diethyl ether, ethyl ethanoate, ethene",
      "ethyl ethanoate, ethene, diethyl ether",
    ],
    correctIndex: 1,
    explanation:
      "At about 140 degrees C two ethanol molecules condense to diethyl ether, at about 170 degrees C a single molecule loses water to give ethene, and in the presence of ethanoic acid the condensation gives the ester ethyl ethanoate.",
    evidence:
      "Alcohols form ethers at about 140 degrees C, alkenes at about 170 degrees C, and esters when heated with a carboxylic acid and concentrated sulphuric acid.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-16.3",
    concept: "ethanol reaction conditions",
  },
  {
    key: "xii-alcohol-origin-of-water-in-esterification",
    text: "Ethyl ethanoate forms when ethanol and ethanoic acid esterify. The water produced in this condensation comes from",
    options: [
      "the hydrogen of the carboxylic acid group and a hydrogen from the ethyl group of the alcohol",
      "the carbonyl oxygen of the acid and the hydrogen of the ethyl group",
      "the hydroxyl group of the acid and the hydrogen of the hydroxyl group of the alcohol",
      "the oxygen of the alcohol and the whole hydroxyl group of the acid",
    ],
    correctIndex: 2,
    explanation:
      "The alcohol's oxygen stays behind in the ester as the bridging -O-, so the acid's hydroxyl group and the alcohol's hydroxyl hydrogen are eliminated together as the water molecule.",
    evidence:
      "In esterification the alcohol oxygen remains in the ester while the acid hydroxyl and the alcohol hydrogen form water.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-16.3",
    concept: "origin of the water",
  },
];