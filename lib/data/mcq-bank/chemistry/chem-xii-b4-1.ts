import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-rx-chloromethane-iupac-name",
    text: "The IUPAC name of the compound CH3Cl is",
    options: ["chloromethane", "methyl chloride", "methane chloride", "monochloromethane"],
    correctIndex: 0,
    explanation:
      "In IUPAC nomenclature a halogen is cited as a prefix on the name of the parent alkane, so CH3Cl is chloromethane; methyl chloride and methane chloride are common names only.",
    evidence:
      "A halogen is named as a prefix - fluoro, chloro, bromo or iodo - on the name of the parent alkane.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-15.1",
    concept: "haloalkane naming",
  },
  {
    key: "xii-rx-halogen-prefix-names",
    text: "In IUPAC names of alkyl halides the four halogens are cited as prefixes on the parent alkane. The correct set of prefixes is",
    options: [
      "fluor, chlor, brom, iod",
      "fluoro, chloride, bromide, iodide",
      "fluoro, chloro, bromo, iodo",
      "fluorine, chlorine, bromine, iodine",
    ],
    correctIndex: 2,
    explanation:
      "Each element name is shortened and given the -o ending when cited as a prefix, so fluorine, chlorine, bromine and iodine become fluoro, chloro, bromo and iodo.",
    evidence:
      "The halogens are cited as the prefixes fluoro, chloro, bromo and iodo in naming alkyl halides.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "CHEM-15.1",
    concept: "halogen prefixes",
  },
  {
    key: "xii-rx-one-chloropropane-parent-chain",
    text: "The compound CH3CH2CH2Cl is named 1-chloropropane rather than 3-chloropropane because its parent alkane chain is",
    options: [
      "butane, since a four-carbon chain must include the carbon carrying chlorine twice",
      "propane, and numbering starts from the end that gives the halogen the lower number",
      "propane, and numbering starts from the end nearest the branching point of the chain",
      "pentane, since a halogen atom is counted as part of the parent chain",
    ],
    correctIndex: 1,
    explanation:
      "The longest continuous carbon chain is propane and a halogen is never counted in it; numbering then runs from the end nearer the halogen so that it receives the lowest locant, which is 1.",
    evidence:
      "The longest chain of carbon atoms is chosen as the parent alkane and the halogen is given the lowest possible number.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.1",
    concept: "lowest locant rule",
  },
  {
    key: "xii-rx-one-two-dibromoethane-name",
    text: "An ethane molecule in which one hydrogen on each of the two carbon atoms is replaced by bromine, BrCH2CH2Br, is named",
    options: ["dibromoethane", "1,1-dibromoethane", "dibromoethene", "1,2-dibromoethane"],
    correctIndex: 3,
    explanation:
      "Two bromine atoms on separate carbons of the ethane chain need both the multiplying prefix di- and a locant for each of them, which gives 1,2-dibromoethane.",
    evidence:
      "When more than one atom of the same halogen is present, di-, tri- and tetra- are used with the prefix.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-15.1",
    concept: "multiplying prefixes",
  },
  {
    key: "xii-rx-two-bromobutane-numbering",
    text: "Consider CH3CHBrCH2CH3. Numbering this chain from the end nearer the bromine gives, in place of 3-bromobutane,",
    options: [
      "2-bromobutane, because the numbering direction is chosen to give the halogen the lower number",
      "3-bromobutane, because the numbering direction is chosen to give the halogen the higher number",
      "1-bromobutane, because numbering must always begin at the end that carries a halogen",
      "2-bromobutane, but only if the prefix bromo is written before the parent name",
    ],
    correctIndex: 0,
    explanation:
      "Both directions give the same four-carbon parent, so the chain is numbered to give the halogen the lower locant, making 2-bromobutane the correct name.",
    evidence:
      "Numbering begins at the end of the parent chain that gives the first point of difference the lowest number.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-15.1",
    concept: "numbering direction",
  },
  {
    key: "xii-rx-mixed-halogen-alphabetical-order",
    text: "ClCH2CH2Br carries one chlorine and one bromine on an ethane chain. The correct IUPAC name, with the rule that produced it, is",
    options: [
      "1-chloro-2-bromoethane, because the halogen of lower atomic number is cited first",
      "1-bromo-2-chloroethane, because the halogens are cited in alphabetical order",
      "1-bromo-1-chloroethane, because all halogens on a chain are given the same locant",
      "2-bromo-1-chloroethane, because each halogen keeps the locant counted from its own end",
    ],
    correctIndex: 1,
    explanation:
      "Several halogens are cited in alphabetical order of their prefixes and not by atomic number, so bromo receives the lower locant and the name is 1-bromo-2-chloroethane.",
    evidence:
      "When several halogens are present they are cited in alphabetical order with their locants.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-15.1",
    concept: "alphabetical citation",
  },
  {
    key: "xii-rx-two-bromo-two-methylpropane",
    text: "The structure (CH3)3CBr is named",
    options: [
      "2-bromo-2-methylpropane",
      "1-bromo-1,1-dimethylpropane",
      "1-bromo-2,2-dimethylpropane",
      "2-bromo-2-methylbutane",
    ],
    correctIndex: 0,
    explanation:
      "The longest continuous chain contains only three carbons, so the parent is propane; that chain is numbered from either end, placing both the bromine and the methyl group on C2.",
    evidence:
      "Alkyl halides are named on the longest carbon chain, with the remaining carbons cited as alkyl prefixes.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.1",
    concept: "tert-butyl bromide name",
  },
  {
    key: "xii-rx-one-chloro-two-methylpropane-formula",
    text: "A four-carbon halide is named 1-chloro-2-methylpropane. Which condensed formula corresponds to this name?",
    options: ["CH3CH(Cl)CH2CH3", "(CH3)2CHCH2Cl", "(CH3)3CCl", "CH3CH(CH3)CHClCH3"],
    correctIndex: 1,
    explanation:
      "The parent chain is propane with chlorine on C1 and a methyl group on C2, that is ClCH2CH(CH3)CH3, which is written as (CH3)2CHCH2Cl.",
    evidence:
      "Locants in an alkyl halide name refer only to positions on the parent alkane chain.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-15.1",
    concept: "name to formula",
  },
  {
    key: "xii-rx-dichloroethane-position-names",
    text: "CH3CHCl2 and CH2ClCH2Cl have the same molecular formula C2H4Cl2 but must be given different IUPAC names. The reason is that the two chlorine atoms",
    options: [
      "lie on the terminal carbons of the chain in both compounds",
      "lie on adjacent carbons in the first compound but on the same carbon in the second",
      "lie on the same carbon in the first compound but on separate carbons in the second",
      "are described by a single name because a di- prefix is used whenever two halogen atoms are present",
    ],
    correctIndex: 2,
    explanation:
      "CH3CHCl2 has both chlorines on C1 and is 1,1-dichloroethane, whereas CH2ClCH2Cl has one chlorine on each carbon and is 1,2-dichloroethane, so the position of the halogens is fixed by the locants.",
    evidence:
      "The name of a dihalogen alkane carries a locant for every carbon that bears a halogen atom.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-15.1",
    concept: "locant positions",
  },
  {
    key: "xii-rx-naming-rule-statements",
    text: "Three statements about IUPAC naming of alkyl halides: I. numbering begins at the end of the parent chain that gives the halogen the lowest number; II. when several different halogens are present they are cited in alphabetical order; III. di- and tri- are used when more than one atom of the same halogen is attached to the parent chain. The correct assessment is",
    options: [
      "only I and III are correct",
      "I, II and III are correct",
      "only II is correct",
      "only I is correct",
    ],
    correctIndex: 1,
    explanation:
      "All three statements describe accepted naming rules: lowest locant for the halogen, alphabetical citation of different halogens, and multiplying prefixes for several atoms of the same halogen.",
    evidence:
      "Alkyl halide names follow the lowest-locant rule, alphabetical citation and the di- and tri- prefixes.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-15.1",
    concept: "naming rules",
  },
  {
    key: "xii-rx-naming-steps-bromo-methylbutane",
    text: "Which ordered set of steps correctly names CH3CH(CH3)CH(Br)CH3?",
    options: [
      "Choose the four-carbon chain, number it so bromine is on C3, and write 3-bromo-2-methylbutane",
      "Choose the four-carbon chain, number it so bromine is on C1, and write 1-bromo-2,3-dimethylbutane",
      "Choose the four-carbon chain, cite the alkyl substituent first, and write 3-methyl-2-bromobutane",
      "Choose the four-carbon chain, number it for the lowest locant set {2,3} and then give the lower number to the substituent cited first alphabetically, writing 2-bromo-3-methylbutane",
    ],
    correctIndex: 3,
    explanation:
      "The locant set {2,3} is the same from either end, so the tie is broken alphabetically and the prefix cited first, bromo, takes the lower number, giving 2-bromo-3-methylbutane.",
    evidence:
      "When two numberings give the same set of locants, the lower number is given to the substituent cited first alphabetically.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 91,
    outcome: "CHEM-15.1",
    concept: "naming sequence",
  },
  {
    key: "xii-rx-one-bromo-three-methylbutane-structure",
    text: "Which condensed formula is correctly named 1-bromo-3-methylbutane?",
    options: [
      "CH3CH(CH3)CH2CH2Br",
      "BrCH2CH2CH(CH3)CH3",
      "CH3CHBrCH(CH3)CH3",
      "BrCH(CH3)CH2CH2CH3",
    ],
    correctIndex: 1,
    explanation:
      "The longest chain has four carbons, so the parent is butane, and going from the bromine end gives bromine on C1 and the methyl group on C3, which is BrCH2CH2CH(CH3)CH3.",
    evidence:
      "The halogen prefix and the alkyl prefixes are both assigned locants on the longest carbon chain.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-15.1",
    concept: "name to structure",
  },
  {
    key: "xii-rx-carbon-halogen-bond-polarity",
    text: "In an alkyl halide such as CH3CH2Cl the carbon-chlorine bond is polar because chlorine is more electronegative than carbon. This means that",
    options: [
      "the chlorine atom carries a partial positive charge and the carbon a partial negative charge",
      "the carbon atom carries a partial positive charge and the chlorine a partial negative charge",
      "the bond is non-polar because the shared pair is held equally by both atoms",
      "the bond is fully ionic, so the compound exists only as separate CH3CH2 and chloride ions",
    ],
    correctIndex: 1,
    explanation:
      "Chlorine draws the shared electron pair towards itself, leaving the carbon end electron-deficient with a partial positive charge, and that is the carbon a nucleophile attacks.",
    evidence:
      "Chlorine, bromine and iodine are more electronegative than carbon, so the carbon-halogen bond is polar.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-15.2",
    concept: "bond polarity",
  },
  {
    key: "xii-rx-carbon-halogen-bond-strength-order",
    text: "The four carbon-halogen bonds differ markedly in strength. Arranged from the strongest bond to the weakest, they are",
    options: [
      "C-Cl > C-Br > C-F > C-I",
      "C-Br > C-Cl > C-I > C-F",
      "C-F > C-Cl > C-Br > C-I",
      "C-I > C-Br > C-Cl > C-F",
    ],
    correctIndex: 2,
    explanation:
      "The bond weakens down the halogen group as the halogen atom grows larger, so C-F is the strongest and hardest to break and C-I the weakest and easiest to break.",
    evidence:
      "Carbon-halogen bond strength decreases in the order C-F, C-Cl, C-Br, C-I.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-15.2",
    concept: "bond strength",
  },
  {
    key: "xii-rx-most-reactive-halide-by-bond-weakness",
    text: "Reactivity in substitution follows the reverse of the bond-strength order. Of CH3CH2F, CH3CH2Cl, CH3CH2Br and CH3CH2I, the halide that reacts most readily is",
    options: ["CH3CH2F", "CH3CH2Cl", "CH3CH2Br", "CH3CH2I"],
    correctIndex: 3,
    explanation:
      "The weakest C-X bond breaks most easily, so the iodide, whose C-I bond is the weakest of the four, is displaced most readily while the fluoride is displaced least readily.",
    evidence:
      "Alkyl iodides are the most reactive and alkyl fluorides the least reactive of the alkyl halides.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-15.2",
    concept: "leaving group reactivity",
  },
  {
    key: "xii-rx-nucleophile-attack-site",
    text: "When a nucleophile attacks bromoethane, CH3CH2Br, the electron pair it brings towards the molecule is directed at",
    options: [
      "the bromine atom, so that the C-Br bond is broken from the halogen end",
      "the terminal CH3 carbon, which is the least electronegative site of the molecule",
      "the carbon that carries the bromine, because that carbon carries a partial positive charge",
      "the centre of the C-Br bond, so that the bond is broken equally from both ends",
    ],
    correctIndex: 2,
    explanation:
      "The polarized C-Br bond leaves the carbon atom partially positive, so it is the electrophilic site towards which the electron-rich nucleophile is directed.",
    evidence:
      "The partial positive charge on carbon is the site at which a nucleophile attacks an alkyl halide.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-15.2",
    concept: "electrophilic carbon",
  },
  {
    key: "xii-rx-halide-class-criterion",
    text: "An alkyl halide is described as primary, secondary or tertiary according to",
    options: [
      "the number of carbon atoms bonded to the carbon that carries the halogen",
      "the number of hydrogen atoms bonded to the carbon that carries the halogen",
      "the length of the parent alkane chain on which the halogen sits",
      "the size of the halogen atom attached to the parent chain",
    ],
    correctIndex: 0,
    explanation:
      "The class is fixed by the carbon bearing the halogen: one carbon attached to it makes a primary halide, two a secondary halide and three a tertiary halide.",
    evidence:
      "Primary, secondary and tertiary alkyl halides are distinguished by the number of carbons attached to the halogen-bearing carbon.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.2",
    concept: "halide classification",
  },
  {
    key: "xii-rx-tert-butyl-chloride-class",
    text: "(CH3)3CCl belongs to which class of alkyl halide?",
    options: [
      "primary, because only one hydrogen of the parent alkane has been replaced",
      "secondary, because the halogen-bearing carbon is bonded to two other carbons",
      "tertiary, because the halogen-bearing carbon is bonded to three other carbons",
      "primary, because the halogen is bonded to a single carbon chain",
    ],
    correctIndex: 2,
    explanation:
      "The carbon carrying the chlorine in (CH3)3CCl is attached to three further carbon atoms, so the compound is a tertiary alkyl halide.",
    evidence:
      "In a tertiary alkyl halide the halogen-bearing carbon is bonded to three other carbon atoms.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-15.2",
    concept: "tertiary halide",
  },
  {
    key: "xii-rx-general-reactivity-order",
    text: "Taking the polarity of the carbon-halogen bond and the weakness of the C-X bond together, alkyl halides generally show the reactivity order",
    options: [
      "tertiary > secondary > primary",
      "primary > secondary > tertiary",
      "secondary > primary > tertiary",
      "tertiary > primary > secondary",
    ],
    correctIndex: 0,
    explanation:
      "Greater substitution at the halogen-bearing carbon stabilises the developing charge when the halide leaves, so tertiary halides are generally the most reactive and primary halides the least.",
    evidence:
      "The reactivity of alkyl halides generally decreases in the order tertiary, secondary, primary.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.2",
    concept: "reactivity order",
  },
  {
    key: "xii-rx-substitution-versus-elimination-order",
    text: "The reactivity order of alkyl halides in nucleophilic substitution is the reverse of the order that applies to elimination. Which sequence ranks the four classes correctly for nucleophilic substitution?",
    options: [
      "tertiary > secondary > primary > methyl",
      "methyl > tertiary > secondary > primary",
      "methyl > primary > secondary > tertiary",
      "primary > methyl > secondary > tertiary",
    ],
    correctIndex: 2,
    explanation:
      "In nucleophilic substitution the order is methyl > primary > secondary > tertiary, the reverse of the elimination order, so tertiary halides, which are the most ready to form a double bond, substitute most slowly.",
    evidence:
      "Reactivity towards nucleophilic substitution falls from methyl halides to tertiary alkyl halides.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-15.2",
    concept: "substitution reactivity",
  },
  {
    key: "xii-rx-alpha-carbon-class",
    text: "In CH3CH2CH(Cl)CH3 the carbon that carries the chlorine is the alpha carbon. This carbon is",
    options: [
      "a tertiary carbon, because it is bonded to three other carbons",
      "a primary carbon, because it is bonded to only one other carbon",
      "a methyl carbon, because it carries no hydrogen atom at all",
      "a secondary carbon, because it is bonded to two other carbons",
    ],
    correctIndex: 3,
    explanation:
      "The chlorine-bearing carbon of 2-chlorobutane is joined to the two neighbouring carbons and to one hydrogen, so it is a secondary carbon and the alpha carbon of the halide.",
    evidence:
      "The alpha carbon of an alkyl halide is the carbon bearing the halogen atom.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-15.2",
    concept: "alpha carbon",
  },
  {
    key: "xii-rx-adjacent-halogen-increases-polarity",
    text: "Compare CH3CH2CH2Cl with ClCH2CH2Cl, in which a second chlorine is attached to the carbon next to the carbon bearing chlorine. Relative to CH3CH2CH2Cl, that second chlorine",
    options: [
      "pushes electron density onto the halogen-bearing carbon, so that carbon becomes a better electron donor",
      "makes the carbon-chlorine bond non-polar, so the halogen can leave only in the presence of a catalyst",
      "lengthens the carbon-chlorine bond and converts the compound into a primary alkyl halide",
      "withdraws electron density, increasing the partial positive charge on the halogen-bearing carbon so that it is attacked more readily",
    ],
    correctIndex: 3,
    explanation:
      "A halogen on the neighbouring carbon pulls electron density away through the sigma framework, leaving the carbon bearing the leaving halogen more electron-deficient and more open to nucleophilic attack.",
    evidence:
      "An electron-withdrawing group on the carbon next to the halogen-bearing carbon increases the positive character of that carbon.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-15.2",
    concept: "inductive withdrawal",
  },
  {
    key: "xii-rx-structure-reactivity-statements",
    text: "Three statements about alkyl halides: I. the carbon-halogen bond is polar with a partial positive charge on carbon; II. the C-F bond is the strongest of the four and alkyl fluorides are the least reactive; III. alkyl halides do not readily undergo the addition reactions shown by alkenes. The correct assessment is",
    options: [
      "only I and II are correct",
      "I, II and III are correct",
      "only II and III are correct",
      "only III is correct",
    ],
    correctIndex: 1,
    explanation:
      "Each statement matches the structure of alkyl halides: the polar C-X bond with delta positive on carbon, the strength and reactivity ranking from C-F to C-I, and the absence of a carbon-carbon double bond that would allow addition.",
    evidence:
      "The polar carbon-halogen bond and the absence of a pi bond decide both the reactivity and the type of reaction of alkyl halides.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-15.2",
    concept: "structure and reactivity",
  },
  {
    key: "xii-rx-substitution-event-order",
    text: "When a nucleophile displaces the halogen from CH3CH2Cl, the order of events is best described as",
    options: [
      "the carbon-chlorine bond breaks first to release a free chlorine atom, which then captures the nucleophile",
      "the nucleophile bonds to the chlorine atom until the bond breaks and a carbon ion is released",
      "the nucleophile approaches the carbon bearing chlorine, the bonding electrons move onto chlorine, and the halide ion leaves",
      "chlorine pushes its bonding electrons onto the carbon, forming a new carbon-carbon bond to the nucleophile",
    ],
    correctIndex: 2,
    explanation:
      "Because the bond is polarized with delta positive on carbon, the electron-rich nucleophile attacks that carbon and the bonding pair passes to the halogen, which departs as halide ion.",
    evidence:
      "Substitution occurs because the carbon-halogen bond is polar, with the halogen leaving as halide ion.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-15.2",
    concept: "substitution events",
  },
  {
    key: "xii-rx-alkyl-halide-versus-alkene-addition",
    text: "An alkyl halide such as CH3CH2Br and an alkene such as CH2=CH2 both react with nucleophiles, yet only the alkene readily undergoes addition. The structural reason is that",
    options: [
      "the alkene is ionic whereas the alkyl halide is covalent",
      "the carbon-halogen bond is non-polar, so the alkyl halide cannot react at all",
      "the alkene carries more hydrogen atoms on its carbon atoms",
      "the alkene has a carbon-carbon double bond with a pi bond that can be attacked, whereas the alkyl halide has only sigma bonds and reacts by substitution",
    ],
    correctIndex: 3,
    explanation:
      "Addition requires the pi bond of a double bond, which alkyl halides do not possess; they instead offer a polar carbon-halogen bond that a nucleophile attacks so that the halide leaves.",
    evidence:
      "Alkyl halides contain no carbon-carbon double bond and therefore react by substitution rather than addition.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-15.2",
    concept: "substitution versus addition",
  },
];