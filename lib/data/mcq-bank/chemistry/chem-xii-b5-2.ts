import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-carbonyl2-electrophilic-carbonyl-carbon",
    text: "In nucleophilic addition to an aldehyde or ketone the nucleophile attacks the carbonyl carbon because",
    options: [
      "oxygen is more electronegative than carbon, so the shared electrons of the double bond are drawn towards oxygen and that carbon is left with a partial positive charge",
      "the carbonyl carbon is the only carbon of the molecule that can still accept a fourth bond",
      "the lone pairs on oxygen push the pi electrons of the double bond towards the carbon",
      "the carbon-oxygen double bond of a carbonyl compound is weaker than any single bond in the molecule",
    ],
    correctIndex: 0,
    explanation:
      "Polarisation of the C=O bond leaves the carbon electron poor, so a nucleophile, which is electron rich, is attracted to that centre while the pi electrons shift at the same time onto oxygen.",
    evidence:
      "Nucleophilic addition occurs at the electrophilic carbonyl carbon, which carries a partial positive charge because of polarisation of the C=O bond.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-17.4",
    concept: "electrophilic carbonyl carbon",
  },
  {
    key: "xii-carbonyl2-base-catalysed-addition-sequence",
    text: "In base-catalysed nucleophilic addition the events occur in the order",
    options: [
      "the carbonyl oxygen is protonated, the nucleophile attacks, and the addition product is formed directly",
      "the pi bond of the carbonyl breaks first, the nucleophile is protonated, and the alcohol leaves",
      "the nucleophile is protonated first and only then does it lose its electron pair to the carbonyl carbon",
      "the nucleophile attacks the carbonyl carbon, the pi electrons shift onto oxygen to give an alkoxide, and the alkoxide is then protonated",
    ],
    correctIndex: 3,
    explanation:
      "As the nucleophile bonds to carbon the pi electrons are pushed onto oxygen, so an alkoxide is formed first and it is this intermediate that takes up a proton to give the alcohol.",
    evidence:
      "Under base catalysis the nucleophile adds first and the resulting alkoxide is then protonated to give the addition product.",
    questionType: "SEQUENCE",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-17.4",
    concept: "base-catalysed addition steps",
  },
  {
    key: "xii-carbonyl2-acid-catalysed-protonation-of-oxygen",
    text: "The essential difference between acid-catalysed and base-catalysed nucleophilic addition is that an acid",
    options: [
      "breaks the carbon-oxygen bond of the carbonyl group before the nucleophile arrives",
      "protonates the carbonyl oxygen first, which enlarges the partial positive charge on the carbonyl carbon and allows even a weak nucleophile to add",
      "converts the carbonyl group into a stable product that no longer reacts",
      "removes the hydrogen atom that an aldehyde carries on its carbonyl carbon",
    ],
    correctIndex: 1,
    explanation:
      "Protonating the oxygen makes the carbonyl carbon far more electrophilic, which is why acid catalysis lets weak nucleophiles add whereas base catalysis requires a strong one.",
    evidence:
      "In acid-catalysed addition the carbonyl oxygen is protonated first so that even a weak nucleophile can attack the more electrophilic carbon.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-17.4",
    concept: "acid catalysis",
  },
  {
    key: "xii-carbonyl2-cyanohydrin-from-ethanal",
    text: "Ethanal reacts with hydrogen cyanide to form",
    options: [
      "an oxime in which the carbonyl oxygen has been replaced by a nitrogen-oxygen group",
      "an ester of ethanoic acid",
      "2-hydroxypropanenitrile, a cyanohydrin carrying OH and CN on the same carbon",
      "a gem-diol in which the carbon bears two hydroxyl groups",
    ],
    correctIndex: 2,
    explanation:
      "HCN adds across the carbonyl group, the cyanide going to the carbonyl carbon and the hydrogen to the oxygen, so both OH and CN end up on that carbon; such products are called cyanohydrins.",
    evidence:
      "Aldehydes and ketones add hydrogen cyanide to give cyanohydrins that carry an OH and a CN group on the same carbon.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-17.4",
    concept: "cyanohydrin formation",
  },
  {
    key: "xii-carbonyl2-cyanide-catalyst-role",
    text: "Hydrogen cyanide reacts only slowly with aldehydes, so a small quantity of a cyanide salt such as KCN is added. The function of the salt is to",
    options: [
      "supply cyanide ions, which are the true nucleophile and react far faster than neutral HCN",
      "reduce the aldehyde to an alcohol before the cyanide can add",
      "remove the carbonyl oxygen as water so that only the carbon skeleton remains",
      "convert the cyanide into a stable compound that leaves the reaction mixture",
    ],
    correctIndex: 0,
    explanation:
      "HCN is a weak nucleophile whereas the ionised cyanide is a powerful one, so a trace of KCN generates the attacking species and makes the addition fast enough to be useful.",
    evidence:
      "A trace of KCN or NaCN is added to the reaction with hydrogen cyanide because it provides the cyanide ion that attacks the carbonyl group.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-17.4",
    concept: "cyanide catalysis",
  },
  {
    key: "xii-carbonyl2-bisulphite-addition-compound",
    text: "The bisulphite addition compound of ethanal has the structure",
    options: ["CH3CH2COONa", "CH3CH2OSO3Na", "CH3C(OH)(CN)SO3Na", "CH3CH(OH)SO3Na"],
    correctIndex: 3,
    explanation:
      "The hydrogen sulphite ion adds across the carbonyl group, so the hydroxyl group and the -SO3Na group both end up on the carbon that was formerly the carbonyl carbon.",
    evidence:
      "Aldehydes and methyl ketones form crystalline bisulphite addition compounds in which an OH group and an SO3Na group are attached to the same carbon.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-17.4",
    concept: "bisulphite addition compound",
  },
  {
    key: "xii-carbonyl2-bisulphite-forming-compounds",
    text: "Bisulphite addition compounds form readily with aldehydes and methyl ketones but not with most other ketones. The best explanation is that",
    options: [
      "only methyl ketones can react with aqueous sodium hydrogen sulphite at all",
      "methyl ketones and aldehydes are the least crowded carbonyl compounds, while bulky alkyl groups around the carbonyl carbon hinder the addition",
      "sodium hydrogen sulphite is a stronger acid than the other reagents of this chapter",
      "the larger ketones are already hydrated and so have no free carbonyl group left",
    ],
    correctIndex: 1,
    explanation:
      "The bulky groups of a ketone such as diphenyl ketone shield the carbonyl carbon from the incoming bisulphite ion, whereas the small groups of aldehydes and methyl ketones leave it accessible.",
    evidence:
      "Bisulphite addition compounds are readily formed by aldehydes and methyl ketones, while ketones with bulky groups do not form them.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-17.4",
    concept: "bisulphite addition selectivity",
  },
  {
    key: "xii-carbonyl2-ketone-slower-towards-nucleophile",
    text: "A nucleophile adds to a ketone more slowly than it adds to an aldehyde. Both of the following contribute to this",
    options: [
      "the carbonyl oxygen of a ketone carries a full negative charge, and a ketone has no hydrogen on its carbonyl carbon",
      "the ketone molecule is heavier, and its carbon-oxygen bond is longer than that of the aldehyde",
      "the two alkyl groups of a ketone crowd the carbonyl carbon and also release electron density towards it, so the carbon is less positively charged",
      "ketones dissolve only in organic solvents, which keeps the nucleophile away from the carbonyl",
    ],
    correctIndex: 2,
    explanation:
      "Steric hindrance from the two alkyl groups slows the approach of the nucleophile, and their electron-releasing effect reduces the partial positive charge that attracts the nucleophile in the first place.",
    evidence:
      "Ketones are less reactive than aldehydes towards nucleophiles because of steric hindrance and the electron-releasing effect of two alkyl groups.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-17.4",
    concept: "ketone nucleophilic reactivity",
  },
  {
    key: "xii-carbonyl2-grignard-addition-product",
    text: "Propanone is treated with methylmagnesium iodide and the product is then hydrolysed. The final organic product is",
    options: [
      "2-methylpropan-2-ol",
      "propan-2-ol, because hydrolysis removes the added methyl group",
      "2-methylpropan-2-one, because the magnesium is replaced by oxygen",
      "propan-1-ol, because the carbonyl carbon becomes a terminal carbon",
    ],
    correctIndex: 0,
    explanation:
      "The methyl group of the Grignard reagent adds to the carbonyl carbon so that this carbon bears three methyl groups, and hydrolysis of the alkoxide then replaces the magnesium by a hydrogen atom.",
    evidence:
      "Grignard reagents add to the carbonyl group of aldehydes and ketones, and hydrolysis of the alkoxide gives an alcohol with one more carbon than the starting carbonyl compound.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-17.4",
    concept: "grignard addition",
  },
  {
    key: "xii-carbonyl2-addition-mechanism-statements",
    text: "Three statements describe nucleophilic addition to a carbonyl group. Statement I: the nucleophile bonds to the carbonyl carbon while the pi electrons of the double bond move onto oxygen. Statement II: the species present immediately after this attack is an alkoxide, which must be protonated before the addition product is obtained. Statement III: under acid catalysis the carbonyl oxygen is protonated before the nucleophile attacks, which is what allows a weak nucleophile to react.",
    options: [
      "Only statements I and II are correct",
      "All three statements are correct",
      "Only statements II and III are correct",
      "Only statements I and III are correct",
    ],
    correctIndex: 1,
    explanation:
      "Both routes lead to the same alkoxide, whether a strong nucleophile attacks directly under base catalysis or attacks the protonated carbonyl under acid catalysis, so all three statements describe the accepted mechanism.",
    evidence:
      "Nucleophilic addition proceeds by attack at the carbonyl carbon to give an alkoxide, and under acid catalysis the carbonyl oxygen is protonated first.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-17.4",
    concept: "addition mechanism statements",
  },
  {
    key: "xii-carbonyl2-hydrogenation-gives-alcohol",
    text: "Propanone is reduced by hydrogen in the presence of a nickel catalyst. The product formed is",
    options: ["propanal", "propan-1-ol", "propan-2-ol", "propane"],
    correctIndex: 2,
    explanation:
      "Hydrogenation of the carbonyl group adds one hydrogen to the carbonyl carbon and one to the oxygen, so the ketone becomes propan-2-ol without any change to its carbon skeleton.",
    evidence: "Hydrogenation of a ketone with hydrogen over nickel gives a secondary alcohol.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-17.5",
    concept: "catalytic hydrogenation product",
  },
  {
    key: "xii-carbonyl2-hydrogenation-steps-on-metal",
    text: "The events occurring when a carbonyl compound is hydrogenated over a metal surface happen in the order",
    options: [
      "hydrogen adsorbs on the metal and splits into hydrogen atoms, the carbon-oxygen pi bond breaks, one hydrogen adds to carbon and another to oxygen, and the alcohol leaves the surface",
      "the carbonyl group is split into two fragments on the metal, each fragment is hydrogenated separately, and the fragments are then joined again",
      "the alcohol is formed first on the surface, the metal is then covered by the product, and hydrogen is adsorbed on the product",
      "the ketone is first reduced to an aldehyde, the aldehyde is then reduced to an alcohol, and only afterwards is hydrogen adsorbed",
    ],
    correctIndex: 0,
    explanation:
      "Hydrogenation takes place on the surface of nickel or platinum: the hydrogen molecule is adsorbed and split, the pi bond of the carbonyl is hydrogenated, and the alcohol is then released from the surface.",
    evidence:
      "In catalytic hydrogenation both hydrogen atoms bond to the surface of the metal, and the C=O group is converted into a hydroxyl group.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-17.5",
    concept: "hydrogenation surface steps",
  },
  {
    key: "xii-carbonyl2-aldehyde-versus-ketone-reduction",
    text: "Reduction of an aldehyde and reduction of a ketone differ in the position taken by the new hydroxyl group because",
    options: [
      "an aldehyde loses its whole CHO group during reduction, whereas a ketone keeps its carbonyl carbon",
      "an aldehyde can be reduced only by hydrogenation, whereas a ketone can be reduced only by sodium borohydride",
      "an aldehyde gains one carbon atom during reduction, whereas a ketone gains none",
      "in an aldehyde the carbonyl carbon becomes a CH2OH group at the end of the chain, whereas in a ketone the hydroxyl group forms on a carbon already bonded to two other carbons",
    ],
    correctIndex: 3,
    explanation:
      "In ethanal the CHO carbon becomes CH2OH, while in propanone the CO carbon becomes CH(OH) between two methyl groups, which is why reduction of a ketone gives a secondary alcohol.",
    evidence:
      "Reduction converts a CHO group into CH2OH and a CO group into CH-OH, so a ketone yields a secondary alcohol.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-17.5",
    concept: "aldehyde versus ketone reduction",
  },
  {
    key: "xii-carbonyl2-sodium-borohydride-product",
    text: "Butan-2-one is treated with sodium borohydride and the mixture is then worked up with water. The organic product is",
    options: ["butanoic acid", "butan-2-ol", "butanal", "butan-1-ol"],
    correctIndex: 1,
    explanation:
      "Sodium borohydride delivers hydride to the carbonyl carbon and water then protonates the alkoxide, so the ketone becomes butan-2-ol with its carbon skeleton unchanged.",
    evidence: "Sodium borohydride reduces the carbonyl group of aldehydes and ketones to give alcohols.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-17.5",
    concept: "sodium borohydride reduction",
  },
  {
    key: "xii-carbonyl2-reduction-reverses-oxidation",
    text: "Reduction of a carbonyl compound is the reverse of",
    options: [
      "addition of hydrogen cyanide across the carbonyl group",
      "formation of a bisulphite addition compound",
      "oxidation of the alcohol from which that carbonyl compound was obtained",
      "cleavage of the carbon-oxygen bond of the carbonyl group",
    ],
    correctIndex: 2,
    explanation:
      "Removing two hydrogen atoms from the carbinol carbon and its oxygen restores the carbonyl group, so an alcohol and its carbonyl compound are interconverted by oxidation and reduction; for a ketone the alcohol is a secondary one.",
    evidence:
      "Oxidation of a secondary alcohol regenerates the ketone from which the alcohol was obtained by reduction.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-17.5",
    concept: "reversibility of oxidation",
  },
  {
    key: "xii-carbonyl2-reduction-creates-stereocentre",
    text: "On reduction a molecule of butan-2-one becomes chiral. The reason is that",
    options: [
      "the carbonyl carbon becomes a new stereocentre bonded to H, OH, CH3 and C2H5, so a racemic mixture of the two enantiomers is formed",
      "the nickel catalyst delivers both hydrogen atoms to the same face of the carbonyl group",
      "the carbon-carbon bond of butan-2-one is broken during hydrogenation",
      "butan-2-one is itself optically active and the product keeps its rotation",
    ],
    correctIndex: 0,
    explanation:
      "The flat carbonyl carbon becomes a tetrahedral carbon carrying four different groups, and since both faces of the carbonyl can be attacked equally a racemic mixture results.",
    evidence:
      "Hydrogenation of a ketone creates a new chiral centre at the carbonyl carbon and gives a racemic mixture of the two enantiomers.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-17.5",
    concept: "stereocentre formation",
  },
  {
    key: "xii-carbonyl2-reduction-statements",
    text: "Four statements about the reduction of aldehydes and ketones are given. Statement I: hydrogen in the presence of nickel or platinum and sodium borohydride both convert a carbonyl group into an alcohol. Statement II: reduction converts the CHO group of an aldehyde into a CH2OH group. Statement III: the reduction of a ketone gives a secondary alcohol. Statement IV: reduction breaks a carbon-carbon bond.",
    options: [
      "Only statements I, II and IV are correct",
      "Only statements II and III are correct",
      "Only statements I, II and III are correct",
      "All four statements are correct",
    ],
    correctIndex: 2,
    explanation:
      "Reduction simply adds hydrogen across the carbonyl and leaves the carbon chain untouched, so statement IV is wrong while the other three describe the change correctly.",
    evidence:
      "Aldehydes and ketones are reduced by catalytic hydrogenation or by sodium borohydride to alcohols with no change to the carbon chain.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-17.5",
    concept: "reduction statement check",
  },
  {
    key: "xii-carbonyl2-aldehyde-oxidation-product",
    text: "Mild oxidation of an aldehyde gives",
    options: ["a primary alcohol", "a carboxylic acid", "a ketone", "a gem-diol"],
    correctIndex: 1,
    explanation:
      "The aldehyde is first hydrated to a gem-diol and then the remaining hydrogen on the carbinol carbon is removed, so the group becomes COOH.",
    evidence:
      "Aldehydes are readily oxidised to carboxylic acids, whereas ketones resist oxidation under mild conditions.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-17.6",
    concept: "aldehyde oxidation",
  },
  {
    key: "xii-carbonyl2-ketone-resistant-to-mild-oxidation",
    text: "Ketones are hardly affected by mild oxidising agents because",
    options: [
      "the two alkyl groups of a ketone donate electron density, so the carbonyl carbon is already fully oxidised",
      "a ketone carries no hydrogen atom anywhere in the molecule and so has nothing that can be removed",
      "further oxidation of a ketone would have to break a carbon-carbon bond, and that does not happen under mild conditions",
      "the carbon-oxygen bond of a ketone is weaker than that of an aldehyde",
    ],
    correctIndex: 2,
    explanation:
      "Oxidation of an aldehyde removes a hydrogen from the carbonyl carbon, but a ketone has only carbon groups there, so its oxidation would require carbon-carbon bond cleavage, which needs drastic conditions.",
    evidence:
      "Ketones are resistant to mild oxidation because such oxidation would involve the breaking of a carbon-carbon bond.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-17.6",
    concept: "ketone oxidation resistance",
  },
  {
    key: "xii-carbonyl2-aldehyde-reduces-tollens-and-fehling",
    text: "An aldehyde gives a positive result with Tollens' reagent and with Fehling's solution because",
    options: [
      "the aldehyde is oxidised to the carboxylate while it reduces the silver ion or the copper(II) ion of the reagent",
      "the aldehyde is hydrolysed by the alkaline reagent and the acid so formed dissolves the metal ion",
      "both reagents contain ammonia, which condenses with the aldehyde to give a coloured product",
      "the aldehyde decomposes the reagent so that a metal and nitrogen are released together",
    ],
    correctIndex: 0,
    explanation:
      "Tollens' reagent and Fehling's solution are oxidising agents, and since an aldehyde is easily oxidised it hands over electrons that convert the metal ion into the metal.",
    evidence:
      "Aldehydes reduce Tollens' reagent and Fehling's solution because they are readily oxidised to carboxylic acids.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-17.6",
    concept: "aldehyde reducing reagents",
  },
  {
    key: "xii-carbonyl2-aldehyde-ketone-oxidation-pairing",
    text: "Ethanal and propanone are each treated with a mild oxidising agent. Which pairing of compound and result is correct?",
    options: [
      "ethanal is reduced to ethane while propanone is reduced to propane",
      "ethanal is unchanged while propanone is oxidised to propanoic acid",
      "ethanal is oxidised to ethanol while propanone is oxidised to propan-2-ol",
      "ethanal is oxidised to ethanoic acid while propanone is unchanged",
    ],
    correctIndex: 3,
    explanation:
      "An aldehyde is oxidised straight to the carboxylic acid, whereas propanone has only carbon groups on its carbonyl carbon and so is untouched by a mild oxidising agent.",
    evidence:
      "An aldehyde is oxidised to a carboxylic acid by mild oxidising agents while a ketone is unaffected.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-17.6",
    concept: "comparative oxidation",
  },
  {
    key: "xii-carbonyl2-vigorous-oxidation-of-ketone",
    text: "On vigorous oxidation pentan-2-one gives",
    options: [
      "pentanoic acid with all five carbon atoms still present",
      "a mixture of carboxylic acids containing fewer carbon atoms than the original ketone",
      "a single di-carboxylic acid with five carbon atoms",
      "an aldehyde and a molecule of carbon dioxide",
    ],
    correctIndex: 1,
    explanation:
      "Under drastic conditions a carbon-carbon bond is cleaved on one side of the carbonyl carbon, so pentan-2-one yields shorter chain acids such as ethanoic and propanoic acids.",
    evidence:
      "Ketones on vigorous oxidation give a mixture of carboxylic acids having fewer carbon atoms than the original ketone.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-17.6",
    concept: "vigorous ketone oxidation",
  },
  {
    key: "xii-carbonyl2-oxidation-through-gem-diol",
    text: "In the conversion of an aldehyde into a carboxylic acid the steps occur in the order",
    options: [
      "the aldehyde is first oxidised and only then does water add across the carbonyl group",
      "the carbon-oxygen double bond is first broken and the two fragments are then joined by oxygen",
      "water adds across the carbonyl group to give a gem-diol, which is then oxidised to the acid",
      "the aldehyde is first reduced to an alcohol, which is then oxidised back by an acid catalyst",
    ],
    correctIndex: 2,
    explanation:
      "The extra oxygen of the new COOH group comes from water: the carbonyl is first hydrated to a gem-diol, and the remaining hydrogen on the carbinol carbon is then removed in the oxidation step.",
    evidence:
      "Oxidation of an aldehyde passes through a gem-diol, which loses hydrogen to give the carboxylic acid.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-17.6",
    concept: "gem-diol intermediate",
  },
  {
    key: "xii-carbonyl2-combustion-of-resistant-ketone",
    text: "A ketone resists mild oxidising agents yet is completely converted into carbon dioxide and water when burned in excess air. The difference is explained by",
    options: [
      "the very high temperature of combustion and the abundance of oxygen, which together allow carbon-carbon bonds to be broken",
      "combustion being a nucleophilic addition in which oxygen adds across the carbonyl group",
      "the ketone first being reduced to an alcohol, which then burns in the excess air",
      "excess air converting the ketone into an aldehyde, which is then oxidised further",
    ],
    correctIndex: 0,
    explanation:
      "Mild reagents cannot break a carbon-carbon bond, but combustion supplies both the energy and the oxidising power needed to break every bond and carry the compound to carbon dioxide and water.",
    evidence: "Aldehydes and ketones burn in air to give carbon dioxide and water.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-17.6",
    concept: "combustion of carbonyls",
  },
  {
    key: "xii-carbonyl2-oxidation-statements",
    text: "Three statements about oxidation are given. Statement I: an aldehyde is oxidised to the corresponding carboxylic acid without any loss of carbon atoms. Statement II: a ketone is not attacked by mild oxidising agents because such a step would require the breaking of a carbon-carbon bond. Statement III: vigorous oxidation of a ketone gives a mixture of carboxylic acids with fewer carbon atoms than the original ketone.",
    options: [
      "Only statements I and III are correct",
      "Only statement II is correct",
      "Only statements II and III are correct",
      "All three statements are correct",
    ],
    correctIndex: 3,
    explanation:
      "Oxidation of an aldehyde simply adds oxygen to the carbonyl carbon, mild oxidising agents cannot touch a ketone, and only under drastic conditions does a ketone split into shorter chain acids, so all three statements are correct.",
    evidence:
      "Aldehydes oxidise to carboxylic acids, ketones resist mild oxidation, and vigorous oxidation of a ketone gives shorter chain acids.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-17.6",
    concept: "oxidation statement check",
  },
];