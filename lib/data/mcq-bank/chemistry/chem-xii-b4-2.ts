import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-rxmech-site-of-nucleophilic-attack",
    text: "In an alkyl halide the nucleophile attacks the carbon that carries the halogen because this carbon is",
    options: [
      "bonded to a halogen that is larger than the neighbouring carbon atoms",
      "electrophilic, since the polar carbon-halogen bond gives it a partial positive charge",
      "the only carbon of the molecule that is able to form a bond with hydrogen",
      "sp3 hybridised while every other carbon of the chain is sp2 hybridised",
    ],
    correctIndex: 1,
    explanation:
      "The halogen is more electronegative than carbon, so the shared electron pair is drawn towards it and the carbon is left partially positive, ready to accept the electron pair of the nucleophile.",
    evidence:
      "The carbon-halogen bond is polar, which leaves the carbon atom partially positive and open to attack by a nucleophile.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-15.3",
    concept: "electrophilic carbon",
  },
  {
    key: "xii-rxmech-aqueous-koh-substitution-product",
    text: "Bromoethane is heated with aqueous potassium hydroxide. The organic product formed is",
    options: ["ethane", "ethyl methyl ether", "ethene", "ethanol"],
    correctIndex: 3,
    explanation:
      "In aqueous solution hydroxide behaves as a nucleophile and replaces the bromine atom, so the halogen is swapped for a hydroxyl group and ethanol is obtained.",
    evidence:
      "An alkyl halide heated with aqueous potassium hydroxide gives the corresponding alcohol.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-15.3",
    concept: "substitution product",
  },
  {
    key: "xii-rxmech-species-that-leaves",
    text: "In the nucleophilic substitution of 1-bromopropane by the hydroxide ion, the species that leaves the molecule is",
    options: [
      "the bromide ion",
      "a molecule of propane",
      "a hydroxide ion",
      "a hydrogen atom",
    ],
    correctIndex: 0,
    explanation:
      "The carbon-bromine bond breaks with its bonding electron pair going to the bromine, which departs as bromide ion and is then replaced by the incoming hydroxide.",
    evidence:
      "The halide ion is the leaving group in the nucleophilic substitution of an alkyl halide.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-15.3",
    concept: "leaving group",
  },
  {
    key: "xii-rxmech-cyanide-extends-carbon-chain",
    text: "1-Bromopropane is heated with an aqueous solution of potassium cyanide. The organic product is",
    options: ["propan-2-ol", "propene", "butanenitrile", "propanamide"],
    correctIndex: 2,
    explanation:
      "The cyanide ion replaces the bromine through its carbon end, so butanenitrile is formed and its chain carries one carbon atom more than the starting halide.",
    evidence:
      "Cyanide ion displaces the halide from an alkyl halide to give a nitrile with one extra carbon atom in the chain.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-15.3",
    concept: "cyanide substitution",
  },
  {
    key: "xii-rxmech-ammonia-gives-carbon-nitrogen-bond",
    text: "When chloroethane is heated with alcoholic ammonia in excess, the bond present in the organic product is",
    options: [
      "a carbon-nitrogen single bond",
      "a carbon-oxygen double bond",
      "a carbon-carbon double bond",
      "a nitrogen-oxygen single bond",
    ],
    correctIndex: 0,
    explanation:
      "Ammonia supplies a lone pair that attacks the partially positive carbon, the chloride leaves and the new carbon-nitrogen bond gives ethylamine, so one hydrogen halide molecule is lost overall.",
    evidence:
      "A haloalkane reacts with ammonia to give an amine in which a carbon-nitrogen bond replaces the carbon-halogen bond.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-15.3",
    concept: "amine formation",
  },
  {
    key: "xii-rxmech-sn1-intermediate",
    text: "The intermediate that characterises the SN1 mechanism of an alkyl halide is",
    options: [
      "an alkene formed by loss of a proton",
      "a halogen molecule formed by loss of the halide",
      "an alkoxide ion formed by loss of a hydrogen atom",
      "a carbocation formed by loss of the halide ion",
    ],
    correctIndex: 3,
    explanation:
      "The carbon-halogen bond ionises first, so a positively charged carbon with three bonds and an empty orbital is formed; the nucleophile then adds to this carbocation in a second step.",
    evidence:
      "The SN1 mechanism proceeds in two steps, the first of which gives a carbocation intermediate.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-15.3",
    concept: "carbocation intermediate",
  },
  {
    key: "xii-rxmech-sn2-order-of-events",
    text: "In the SN2 mechanism the order of events is",
    options: [
      "the nucleophile attacks the carbon from the back side and the halide ion leaves in the same step",
      "the halide ion leaves first to give a carbocation and the nucleophile attacks it afterwards",
      "the nucleophile attacks first, a carbocation forms next and the halide leaves last",
      "a proton is removed first and the nucleophile then attacks the alkene that results",
    ],
    correctIndex: 0,
    explanation:
      "One collision between nucleophile and substrate brings about both events at once, the new bond forming as the old one breaks, so no intermediate is formed and the rate depends on both partners.",
    evidence:
      "The SN2 reaction is a single step in which the nucleophile attacks as the halide ion departs, so the reaction is bimolecular.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.3",
    concept: "concerted substitution step",
  },
  {
    key: "xii-rxmech-sn1-and-sn2-compared",
    text: "Which comparison of the two nucleophilic substitution mechanisms is accurate?",
    options: [
      "SN1 is favoured by primary halides and needs no nucleophile, whereas SN2 is favoured by tertiary halides",
      "SN1 needs a strong nucleophile and a polar aprotic solvent, whereas SN2 needs heat alone",
      "SN1 is favoured by tertiary halides and passes through a carbocation, whereas SN2 is favoured by methyl and primary halides and needs a strong nucleophile",
      "SN1 and SN2 both pass through a carbocation and differ only in the rate of the second step",
    ],
    correctIndex: 2,
    explanation:
      "Alkyl groups stabilise a carbocation, so the two step SN1 route suits tertiary halides, while the crowded tertiary carbon blocks the back-side approach an SN2 reaction demands, leaving unhindered methyl and primary halides with a good nucleophile.",
    evidence:
      "Tertiary halides react chiefly by SN1 while methyl and primary halides react chiefly by SN2.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-15.3",
    concept: "mechanism selection",
  },
  {
    key: "xii-rxmech-racemisation-explanation",
    text: "2-Bromobutane is heated with a weak nucleophile in a polar protic solvent. The product shows no optical rotation although the halide that reacted was chiral. The most likely reason is that",
    options: [
      "the bromide has been replaced by a group that contains no stereocentre",
      "the reaction passed through a planar carbocation, which the nucleophile can attack from either face to give both enantiomers",
      "a carbon-carbon bond of the chain was broken during the reaction",
      "the product dissolved in the polar solvent and so its rotation could not be measured",
    ],
    correctIndex: 1,
    explanation:
      "A planar carbocation offers the same face of attack from above and from below, so the two enantiomers are formed in equal amounts and their rotations cancel, giving a racemic mixture.",
    evidence:
      "An SN1 reaction gives a racemic mixture because the planar carbocation can be attacked from either side.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-15.3",
    concept: "racemic product formation",
  },
  {
    key: "xii-rxmech-inversion-in-sn2",
    text: "When (R)-2-bromobutane undergoes SN2 substitution with hydroxide ion, the product is",
    options: [
      "(S)-butan-2-ol, formed by back-side attack with inversion at the reacting carbon",
      "(R)-butan-2-ol, because substitution leaves the configuration unchanged",
      "(R)-butan-2-ol, because the carbon-carbon bonds rotate freely during the reaction",
      "an equimolar mixture of the two enantiomeric alcohols",
    ],
    correctIndex: 0,
    explanation:
      "The nucleophile can only approach opposite the leaving group, so the three remaining groups swing through the plane and the stereocentre is inverted, and since the order of priority around the carbon is otherwise unaltered the descriptor changes from R to S.",
    evidence:
      "SN2 substitution gives complete inversion of configuration at the carbon that carries the leaving group.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.3",
    concept: "inversion of configuration",
  },
  {
    key: "xii-rxmech-branching-blocks-backside-attack",
    text: "Two isomeric haloalkanes, 1-bromobutane and 2-bromo-2-methylbutane, are treated with the same strong nucleophile at the same temperature. Compared with 1-bromobutane, 2-bromo-2-methylbutane",
    options: [
      "reacts more rapidly by SN2 because its bromine atom stands more exposed",
      "reacts more rapidly by SN2 because its carbon-bromine bond is shorter",
      "reacts at the same rate because both are bromoalkanes of equal molecular mass",
      "reacts far more slowly by SN2 because the methyl branches shield the reacting carbon",
    ],
    correctIndex: 3,
    explanation:
      "The SN2 nucleophile must reach the carbon from the side opposite the halogen, and the two methyl groups crowd that path, so branching at the reacting carbon slows the concerted attack sharply.",
    evidence:
      "Branching on the carbon bearing the halogen slows the SN2 reaction because back-side attack is sterically hindered.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.3",
    concept: "steric hindrance",
  },
  {
    key: "xii-rxmech-substitution-statement-check",
    text: "Statements about nucleophilic substitution. Statement I: the carbon bearing the halogen is the site of attack. Statement II: in SN2 the nucleophile attacks from the side opposite the leaving group. Statement III: SN1 is the mechanism followed by primary halides. Statement IV: a good leaving group departs carrying the bonding electron pair.",
    options: [
      "Only statements I and II are correct",
      "Only statements I, II and IV are correct",
      "All four statements are correct",
      "Only statements II and IV are correct",
    ],
    correctIndex: 1,
    explanation:
      "Statement III is wrong because primary halides have carbocations too unstable to form, so they react by the SN2 route instead, while the other three statements describe the mechanism correctly.",
    evidence:
      "In nucleophilic substitution the nucleophile attacks the carbon bearing the halogen, from the side opposite the leaving group in an SN2 reaction.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-15.3",
    concept: "mechanism statement check",
  },
  {
    key: "xii-rxmech-polar-protic-slows-sn2",
    text: "A primary alkyl halide is treated with cyanide ion in a polar protic solvent instead of a polar aprotic one. Compared with aprotic conditions, the protic solvent tends to",
    options: [
      "speed up the reaction by raising the energy of the nucleophile",
      "slow the reaction because its hydrogen bonding surrounds the cyanide ion and lowers its nucleophilicity",
      "leave the rate unchanged because the rate of SN2 depends only on the substrate",
      "convert the mechanism from SN2 into SN1 by stabilising a carbocation",
    ],
    correctIndex: 1,
    explanation:
      "A protic solvent hydrogen bonds to an anionic nucleophile and ties it up in a solvent shell, so less free nucleophile is available for attack, whereas an aprotic solvent leaves the anion exposed and the SN2 reaction faster.",
    evidence:
      "A polar protic solvent solvates an anionic nucleophile through hydrogen bonding and slows the SN2 reaction.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-15.3",
    concept: "solvent effect on rate",
  },
  {
    key: "xii-rxmech-conditions-for-alkene-formation",
    text: "Which set of conditions converts 2-bromobutane into but-2-ene?",
    options: [
      "dilute aqueous potassium hydroxide at room temperature",
      "silver nitrate dissolved in water",
      "alcoholic potassium hydroxide heated to about 340 K",
      "hydrogen with a nickel catalyst at high pressure",
    ],
    correctIndex: 2,
    explanation:
      "Dehydrohalogenation needs a strong base in a medium that discourages nucleophilic attack, and heating the halide with alcoholic potassium hydroxide removes hydrogen and bromine as one hydrogen bromide molecule to leave the double bond.",
    evidence:
      "Dehydrohalogenation of an alkyl halide is carried out with alcoholic potassium hydroxide at about 340 K.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-15.4",
    concept: "dehydrohalogenation conditions",
  },
  {
    key: "xii-rxmech-carbons-that-lose-group",
    text: "In dehydrohalogenation the hydrogen atom and the halogen atom are removed from",
    options: [
      "the same carbon atom",
      "carbon atoms that are not directly bonded to each other",
      "two adjacent carbon atoms, so that a carbon-carbon double bond forms between them",
      "two carbon atoms separated by three bonds along the chain",
    ],
    correctIndex: 2,
    explanation:
      "The new pi bond can form only between the carbon that lost the hydrogen and the neighbouring carbon that lost the halide, so both groups must start on adjacent carbons.",
    evidence:
      "Elimination removes a hydrogen and a halide from two adjacent carbon atoms and produces an alkene.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-15.4",
    concept: "beta elimination",
  },
  {
    key: "xii-rxmech-character-of-e1",
    text: "The E1 mechanism of dehydrohalogenation is characterised by",
    options: [
      "a single step in which hydroxide removes a proton as the halide leaves",
      "a two step sequence in which a halide ion is added first and a proton removed second",
      "attack of the nucleophile on the carbon bearing the halogen from the back side",
      "a two step sequence through a carbocation, which suits tertiary halides at high temperature",
    ],
    correctIndex: 3,
    explanation:
      "In E1 the halide ion leaves first to give a carbocation and a base then removes a proton from an adjacent carbon, and the higher temperature also makes this elimination route competitive with substitution.",
    evidence:
      "The E1 elimination proceeds through a carbocation in two steps and becomes important at higher temperature.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.4",
    concept: "carbocation elimination",
  },
  {
    key: "xii-rxmech-e2-concerted-events",
    text: "In the E2 mechanism the events occur",
    options: [
      "in two separate stages, the halide leaving first and the proton leaving afterwards",
      "in one concerted stage in which a base removes the beta hydrogen as the halide leaves and the double bond forms",
      "in three stages, the halide ionising, the base deprotonating and the alkene being captured",
      "only after a carbocation has been formed and rearranged to its most stable form",
    ],
    correctIndex: 1,
    explanation:
      "Breaking the carbon-hydrogen bond, breaking the carbon-halogen bond and forming the double bond all take place together in one step, so no carbocation intermediate exists and the reaction is bimolecular.",
    evidence:
      "The E2 elimination is a single concerted step with no carbocation intermediate.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.4",
    concept: "concerted elimination step",
  },
  {
    key: "xii-rxmech-aqueous-versus-alcoholic-alkali",
    text: "Potassium hydroxide promotes two different reactions of 2-bromobutane according to the medium used: aqueous potassium hydroxide gives butan-2-ol, while alcoholic potassium hydroxide gives but-2-ene. The difference arises because",
    options: [
      "in aqueous solution hydroxide acts chiefly as a nucleophile, whereas in ethanol it behaves as a strong base that removes a beta hydrogen",
      "aqueous potassium hydroxide supplies a stronger base than the alcoholic solution",
      "water dissolves the alkene and so pulls the reaction towards elimination",
      "the haloalkane dissolves in ethanol but is insoluble in water",
    ],
    correctIndex: 0,
    explanation:
      "The water in aqueous alkali solvates the hydroxide ion so that it acts mainly as a nucleophile and replaces the halide, while in ethanol the hydroxide removes a beta hydrogen and the heat needed for elimination is applied.",
    evidence:
      "Aqueous alkali favours nucleophilic substitution whereas alcoholic alkali favours elimination.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-15.4",
    concept: "nucleophile versus base",
  },
  {
    key: "xii-rxmech-major-alkene-from-2-bromobutane",
    text: "The major product obtained when 2-bromobutane is heated with alcoholic potassium hydroxide is",
    options: ["but-1-ene", "butane", "butan-2-ol", "but-2-ene"],
    correctIndex: 3,
    explanation:
      "The double bond forms at the more substituted carbon, so but-2-ene is produced in greater amount than but-1-ene, which is only a minor product of the same reaction.",
    evidence:
      "Zaitsev's rule states that the more substituted alkene is the major product of dehydrohalogenation.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-15.4",
    concept: "zaitsev product",
  },
  {
    key: "xii-rxmech-statement-of-zaitsev-rule",
    text: "Zaitsev's rule predicts that during dehydrohalogenation the double bond forms",
    options: [
      "at the carbon atom that originally carried the halogen",
      "between the two least substituted carbons of the chain",
      "so that the more substituted and more stable alkene becomes the major product",
      "only between carbons that bear equal numbers of hydrogen atoms",
    ],
    correctIndex: 2,
    explanation:
      "Alkenes with more alkyl groups on the doubly bonded carbons are held more firmly by hyperconjugation and electron release, so the lower energy alkene with the more substituted double bond predominates.",
    evidence:
      "According to Zaitsev's rule the major product of elimination carries the double bond at the more substituted carbon.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.4",
    concept: "zaitsev rule",
  },
  {
    key: "xii-rxmech-dihalide-gives-alkyne",
    text: "When a vicinal dihalide such as 1,2-dibromoethane is heated with excess alcoholic potassium hydroxide, the final organic product is",
    options: ["an epoxide ring", "ethene", "ethyne", "ethanol"],
    correctIndex: 2,
    explanation:
      "The first loss of hydrogen bromide gives a vinyl bromide and the second, made possible by the excess of base, removes the remaining hydrogen and bromine from adjacent carbons to leave a carbon-carbon triple bond.",
    evidence:
      "Vicinal and geminal dihalides give alkynes when heated with excess alcoholic potassium hydroxide.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-15.4",
    concept: "alkyne from dihalide",
  },
  {
    key: "xii-rxmech-tertiary-halide-pathways",
    text: "A tertiary alkyl halide is heated with a strong base. Compared with a primary halide under the same conditions, the tertiary halide is more likely to",
    options: [
      "react by SN2 because the tertiary carbon holds its halogen less firmly",
      "give SN1 and E1 products, because the carbocation it forms is stabilised by three alkyl groups",
      "give no product at all, because the base cannot reach the crowded carbon",
      "react only by E2, with the base removing a hydrogen from the same carbon that bears the halogen",
    ],
    correctIndex: 1,
    explanation:
      "Three alkyl groups stabilise the carbocation that ionisation produces, so the two step routes open up at elevated temperature, while the crowding at the tertiary carbon prevents the close approach needed for a concerted SN2 attack.",
    evidence:
      "Tertiary halides favour the carbocation pathways SN1 and E1 because the tertiary carbocation is the more stable one.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 95,
    outcome: "CHEM-15.4",
    concept: "branching effect on mechanism",
  },
  {
    key: "xii-rxmech-heat-shifts-towards-alkene",
    text: "Raising the temperature of a reaction between an alkyl halide and hydroxide tends to shift the product mixture towards",
    options: [
      "the substitution product, since heat speeds up every step equally",
      "the alkene, because elimination has to supply the extra energy needed to form the double bond",
      "the substitution product, because bond formation always needs more heat than bond breaking",
      "no product at all, since a high temperature decomposes the alkyl halide",
    ],
    correctIndex: 1,
    explanation:
      "Substitution has the smaller energy barrier and so wins at lower temperature, while the extra energy required to break a carbon-hydrogen bond and create a carbon-carbon double bond is only supplied when the mixture is heated.",
    evidence:
      "Substitution predominates at low temperature while the proportion of the elimination product rises with temperature.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-15.4",
    concept: "temperature effect on products",
  },
  {
    key: "xii-rxmech-reagent-for-major-alkene",
    text: "Choose the reagent that gives the alkene as the major product from 2-bromo-2-methylbutane.",
    options: [
      "aqueous potassium hydroxide at room temperature",
      "aqueous sodium hydroxide with silver nitrate",
      "potassium cyanide dissolved in ethanol",
      "a solution of potassium hydroxide in ethanol, heated",
    ],
    correctIndex: 3,
    explanation:
      "Potassium hydroxide dissolved in ethanol is a strong base that is a comparatively poor nucleophile in that medium, and heating supplies the energy for elimination, so the Zaitsev alkene is formed.",
    evidence:
      "Alcoholic potassium hydroxide heated with an alkyl halide gives the alkene as the major product.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-15.4",
    concept: "reagent choice for elimination",
  },
  {
    key: "xii-rxmech-elimination-statement-check",
    text: "Statements about elimination reactions. Statement I: dehydrohalogenation requires alcoholic potassium hydroxide and heat. Statement II: E2 involves a carbocation intermediate. Statement III: a secondary halide can give a mixture of alkenes in which the more substituted one predominates. Statement IV: loss of two hydrogen halide molecules from a dihalide gives an alkyne.",
    options: [
      "Only statements I, III and IV are correct",
      "Only statements I and III are correct",
      "All four statements are correct",
      "Only statements I and IV are correct",
    ],
    correctIndex: 0,
    explanation:
      "Statement II is wrong because E2 is concerted and creates no carbocation, whereas the other three statements correctly describe the conditions, the Zaitsev outcome of a secondary halide and the alkyne obtained from a dihalide.",
    evidence:
      "E2 elimination is concerted and passes through no carbocation, while a dihalide loses two hydrogen halide molecules to form an alkyne.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-15.4",
    concept: "elimination statement check",
  },
];