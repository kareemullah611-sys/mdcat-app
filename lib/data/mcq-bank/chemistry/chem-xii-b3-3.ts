import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-benreact-nitration-product-identity",
    text: "Benzene treated with a mixture of concentrated nitric acid and concentrated sulphuric acid gives mainly",
    options: [
      "nitrobenzene and water",
      "nitrobenzene and hydrogen",
      "nitric acid and benzenesulphonic acid",
      "nitrobenzene and carbon dioxide",
    ],
    correctIndex: 0,
    explanation:
      "A ring hydrogen is replaced by a nitro group, and the displaced proton is taken up by the sulphate ion so that water is formed; the aromatic ring is left intact.",
    evidence:
      "Nitration of benzene with nitric acid and sulphuric acid replaces a ring hydrogen by a nitro group and gives nitrobenzene.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-14.13",
    concept: "nitration of benzene",
  },
  {
    key: "xii-benreact-sulphonation-product-identity",
    text: "Treating benzene with fuming sulphuric acid at ordinary temperature gives the product",
    options: [
      "benzene hexasulphonic acid",
      "benzenecarboxylic acid",
      "benzenesulphonic acid",
      "cyclohexanesulphonic acid",
    ],
    correctIndex: 2,
    explanation:
      "Sulphonation replaces one ring hydrogen by a sulphonyl group, giving benzenesulphonic acid, in which every carbon of the ring still carries one hydrogen.",
    evidence:
      "Sulphonation of benzene replaces a ring hydrogen by a sulphonyl group and forms benzenesulphonic acid.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-14.13",
    concept: "sulphonation of benzene",
  },
  {
    key: "xii-benreact-halogenation-net-result",
    text: "The net result of treating benzene with chlorine in the presence of anhydrous iron(III) chloride is",
    options: [
      "one ring hydrogen is replaced by a chlorine atom and hydrogen is evolved",
      "chlorine adds across two adjacent ring bonds and the ring becomes saturated",
      "one ring hydrogen is replaced by a chlorine atom and water is formed",
      "one ring hydrogen is replaced by a chlorine atom and hydrogen bromide is formed",
    ],
    correctIndex: 3,
    explanation:
      "Halogenation of benzene is a substitution: the chlorine takes the place of a ring hydrogen, which leaves as a proton and forms hydrogen bromide with the bromide of the catalyst complex.",
    evidence:
      "Halogenation of benzene in the presence of a halogen carrier gives a halogen substituted benzene and hydrogen bromide.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.13",
    concept: "halogenation of benzene",
  },
  {
    key: "xii-benreact-fc-alkylation-group-introduced",
    text: "In a Friedel-Crafts alkylation of benzene the group that replaces a ring hydrogen belongs to the class called",
    options: [
      "alkyl groups, such as methyl or ethyl",
      "acyl groups, such as acetyl or benzoyl",
      "halogens, such as chlorine or bromine",
      "sulphonyl groups, such as sulphonic acid",
    ],
    correctIndex: 0,
    explanation:
      "An alkyl halide supplies the electrophile in Friedel-Crafts alkylation, so the ring acquires an alkyl group; benzene and chloromethane, for example, give methylbenzene.",
    evidence:
      "Friedel-Crafts alkylation introduces an alkyl group on the benzene ring in place of a ring hydrogen.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.13",
    concept: "friedel crafts alkylation",
  },
  {
    key: "xii-benreact-fc-acylation-product-from-acetylchloride",
    text: "Benzene treated with acetyl chloride in the presence of anhydrous aluminium chloride gives",
    options: [
      "methyl substituted and acetyl substituted benzene at two ring positions",
      "acetophenone, a ring carrying an acetyl group",
      "benzoic acid, a ring carrying a carboxyl group",
      "cyclohexyl chloride with no aromatic ring",
    ],
    correctIndex: 1,
    explanation:
      "Acylation places an acyl group, -COR, on the ring in place of a hydrogen, so acetyl chloride gives a ring carrying -COCH3, which is acetophenone.",
    evidence:
      "Friedel-Crafts acylation of benzene with an acyl chloride gives a ring carrying an acyl group.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.13",
    concept: "friedel crafts acylation",
  },
  {
    key: "xii-benreact-sulphonation-water-by-product",
    text: "In the sulphonation of benzene, one mole of benzene consumes one mole of sulphuric acid and forms one mole of benzenesulphonic acid together with",
    options: ["hydrogen bromide", "sulphur dioxide", "carbon dioxide", "water"],
    correctIndex: 3,
    explanation:
      "The sulphonyl group takes the place of a ring hydrogen, so the displaced proton and an -OH group of the acid leave together as a molecule of water.",
    evidence:
      "Sulphonation of benzene consumes sulphuric acid and liberates water as the second product.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-14.13",
    concept: "sulphonation stoichiometry",
  },
  {
    key: "xii-benreact-acylation-preferred-over-alkylation",
    text: "A straight chain alkyl group is more easily attached to the benzene ring by Friedel-Crafts acylation followed by reduction than by direct alkylation, because during alkylation",
    options: [
      "the catalyst removes the alkyl group as soon as it reaches the ring",
      "the ring carbon carrying the alkyl group becomes fully bonded and cannot react again",
      "the attacking carbocation can rearrange to a more stable cation before it reaches the ring",
      "the aromatic ring cannot carry any group larger than one carbon",
    ],
    correctIndex: 2,
    explanation:
      "A carbocation formed from an alkyl halide can gain stability by shifting a hydride or an alkyl group before it attacks the ring, so branched or rearranged products appear; an acyl group does not rearrange.",
    evidence:
      "Friedel-Crafts acylation is preferred to alkylation for straight chain alkyl groups because the acylium ion does not rearrange.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 88,
    outcome: "CHEM-14.13",
    concept: "acylation over alkylation",
  },
  {
    key: "xii-benreact-substitution-not-addition-in-five-reactions",
    text: "Statements about the five characteristic reactions of benzene follow. Statement I: nitration replaces a ring hydrogen by a nitro group. Statement II: sulphonation adds a sulphonyl group across two ring carbons so that both are fully substituted. Statement III: halogenation and Friedel-Crafts reactions each replace one ring hydrogen. Statement IV: the aromatic character of the ring is fully lost in every one of these five reactions.",
    options: [
      "Only statements I and III are correct",
      "Only statements I, II and III are correct",
      "Only statements II and IV are correct",
      "Only statements III and IV are correct",
    ],
    correctIndex: 0,
    explanation:
      "Each of the five reactions is a substitution in which one hydrogen is displaced, so statement II is wrong, and the delocalised pi system is rebuilt afterwards, so statement IV is also wrong.",
    evidence:
      "Nitration, sulphonation, halogenation and the Friedel-Crafts reactions of benzene are all electrophilic substitutions.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.13",
    concept: "substitution in ring reactions",
  },
  {
    key: "xii-benreact-reagent-to-product-match",
    text: "Three reagent to product pairings for benzene are given below. Pair I: nitric acid with sulphuric acid gives nitrobenzene. Pair II: fuming sulphuric acid gives benzenesulphonic acid. Pair III: acetyl chloride with aluminium chloride gives a ring carrying an acetyl group.",
    options: [
      "Pairs I and II only are correct",
      "Pairs II and III only are correct",
      "All three pairings are correct",
      "Only pair I is correct",
    ],
    correctIndex: 2,
    explanation:
      "Nitration, sulphonation and acylation of benzene each put the expected group in place of one ring hydrogen, so all three pairings hold.",
    evidence:
      "Nitration, sulphonation and Friedel-Crafts acylation of benzene give nitro, sulphonic acid and acyl substituted benzenes respectively.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-14.13",
    concept: "reaction product matching",
  },
  {
    key: "xii-benreact-sulphonation-versus-nitration-reversibility",
    text: "Compared with the nitration of benzene, the sulphonation of benzene is",
options: [
      "practically irreversible, so the product is unaffected by later treatment",
      "unreversible only at low temperature",
      "reversible, because heating the sulphonic acid with dilute acid or steam regenerates benzene",
      "irreversible because the sulphonyl group cannot be removed by any reagent",
    ],
    correctIndex: 2,
    explanation:
      "The sulphonation equilibrium can be driven back towards benzene by removing the sulphonic acid with dilute acid or steam at heat, whereas the nitro group is not displaced under such treatment.",
    evidence:
      "Sulphonation is a reversible reaction and benzenesulphonic acid is hydrolysed back to benzene by dilute acid or steam.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-14.13",
    concept: "sulphonation reversibility",
  },
  {
    key: "xii-benreact-methylbenzene-nitrates-faster",
    text: "Methylbenzene is nitrated more readily than benzene. The reason is that the methyl group",
    options: [
      "withdraws electron density from the ring and so raises the ring electron density",
      "releases electron density into the ring, so the aromatic ring is attacked more easily",
      "makes the ring so crowded that the electrophile must attack a single position",
      "removes the delocalised pi cloud and leaves the ring more reactive",
    ],
    correctIndex: 1,
    explanation:
      "A methyl group releases electron density into the ring and stabilises the arenium ion, so the barrier to attack by the electrophile is lower than for benzene itself.",
    evidence:
      "A methyl group activates the benzene ring by releasing electron density, so methylbenzene is nitrated faster than benzene.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.13",
    concept: "methyl group activation",
  },
  {
    key: "xii-benreact-polyalkylation-with-excess-halide",
    text: "When benzene is treated with a large excess of chloromethane and aluminium chloride, the main difficulty in obtaining methylbenzene alone is that",
    options: [
      "the methyl group deactivates the ring, so no further alkylation is possible",
      "chloromethane cannot react with benzene in the presence of aluminium chloride",
      "every methyl group attached to the ring is replaced by chlorine",
      "the methyl group activates the ring, so further alkylation keeps occurring",
    ],
    correctIndex: 3,
    explanation:
      "Because alkyl groups activate the ring, each substitution leaves the ring more reactive than before, and with excess alkyl halide the ring is alkylated again and again.",
    evidence:
      "Friedel-Crafts alkylation with an excess of alkyl halide gives a polyalkylated product because alkyl groups activate the ring.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-14.13",
    concept: "polyalkylation tendency",
  },
  {
    key: "xii-benreact-by-product-sequence-across-reactions",
    text: "When nitration, sulphonation and halogenation of benzene are each written with a full equation, the second product of the three equations is",
    options: [
      "hydrogen bromide in every case",
      "water for nitration, water for sulphonation, and hydrogen bromide for halogenation",
      "water for all three reactions",
      "hydrogen for nitration and sulphonation, and hydrogen bromide for halogenation",
    ],
    correctIndex: 1,
    explanation:
      "In nitration and sulphonation the displaced proton is removed as water by the anion of the acid, while in halogenation it forms hydrogen bromide with the bromide of the catalyst complex.",
    evidence:
      "Nitration and sulphonation of benzene give water as the second product, whereas halogenation gives hydrogen bromide.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "CHEM-14.13",
    concept: "by-products of ring substitution",
  },
  {
    key: "xii-benreact-fc-acylation-step-order",
    text: "In the Friedel-Crafts acylation of benzene the events occur in the order",
    options: [
      "the ring loses a hydrogen first, then the catalyst is added, and only afterwards does the acyl group arrive",
      "the acylium ion is formed first, and the catalyst is added after the ring has been attacked",
      "the acyl chloride combines with the catalyst and loses a chloride ion, the acylium ion attacks the ring, the arenium ion then loses its proton and the catalyst is regenerated",
      "the acylium ion loses its carbonyl oxygen first, and only then is the ring activated",
    ],
    correctIndex: 2,
    explanation:
      "The acyl halide must give the acylium electrophile before the ring can attack it, the ring loses a proton afterwards, and the catalyst is only restored when that proton is taken up.",
    evidence:
      "Friedel-Crafts acylation proceeds by formation of the acylium ion, attack of the ring, loss of the proton and regeneration of the catalyst.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-14.13",
    concept: "acylation step order",
  },
  {
    key: "xii-benreact-fc-reaction-with-nitrated-ring",
    text: "Benzene is first nitrated and the nitrobenzene so obtained is then treated with an alkyl halide in the presence of aluminium chloride. The second step gives",
    options: [
      "a ring bearing both a methyl group and a nitro group",
      "no reaction, because a nitro group deactivates the ring completely",
      "a ring in which the nitro group has been replaced by an alkyl group",
      "an addition product in which the alkyl halide adds across the ring",
    ],
    correctIndex: 1,
    explanation:
      "The nitro group withdraws electron density so strongly that the Friedel-Crafts reaction is blocked and the ring does not undergo alkylation or acylation.",
    evidence:
      "A nitro group deactivates the ring so much that Friedel-Crafts alkylation and acylation do not take place.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-14.13",
    concept: "deactivated ring f_c reaction",
  },
  {
    key: "xii-benreact-locants-for-substitution-positions",
    text: "For substituents on a benzene ring, the pairs of positions ortho, meta and para are numbered respectively as",
    options: [
      "1,3- / 1,4- / 1,2-",
      "1,2- / 1,4- / 1,3-",
      "1,4- / 1,2- / 1,3-",
      "1,2- / 1,3- / 1,4-",
    ],
    correctIndex: 3,
    explanation:
      "Ortho means the two substituted carbons are next to each other, meta means one carbon lies between them, and para means they are on opposite sides of the ring.",
    evidence:
      "Ortho, meta and para positions on a benzene ring are described by the locants 1,2-, 1,3- and 1,4- respectively.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "CHEM-14.14",
    concept: "ortho meta para locants",
  },
  {
    key: "xii-benreact-carboxyl-group-meta-director",
    text: "A carboxyl group already present on a benzene ring directs a second substituent to the",
    options: [
      "ortho position, so that the two groups lie on adjacent carbons",
      "meta position, so that one ring carbon separates the two groups",
      "para position, so that the two groups lie on opposite carbons",
      "same position, so that both groups attach to one carbon",
    ],
    correctIndex: 1,
    explanation:
      "A carboxyl group withdraws electron density from the ring, so the next substitution avoids the destabilised intermediates of ortho and para attack and occurs mainly meta.",
    evidence:
      "A carboxyl group is a deactivating meta directing group for further electrophilic substitution of the ring.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.14",
    concept: "carboxyl meta direction",
  },
  {
    key: "xii-benreact-meta-directing-group-set",
    text: "A substituent that is deactivating and meta directing must belong to the following set",
    options: [
      "methyl, amino and carboxyl",
      "amino, hydroxyl and methyl",
      "nitro, methyl and hydroxyl",
      "nitro, carboxyl and sulphonic acid",
    ],
    correctIndex: 3,
    explanation:
      "All three groups pull electron density away from the ring and destabilise the arenium ions formed by ortho and para attack, so each sends the next group to the meta position.",
    evidence:
      "Nitro, carboxyl and sulphonic acid groups are deactivating and meta directing substituents on the benzene ring.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.14",
    concept: "meta directing groups",
  },
  {
    key: "xii-benreact-strongly-activating-set",
    text: "Strongly activating ortho and para directing substituents on the benzene ring include",
    options: [
      "nitro and carboxyl",
      "methyl and sulphonic acid",
      "chlorine and carboxyl",
      "amino and hydroxyl",
    ],
    correctIndex: 3,
    explanation:
      "The nitrogen and oxygen atoms of the amino and hydroxyl groups release a lone pair into the ring, which raises its electron density and directs substitution to the ortho and para positions.",
    evidence:
      "Amino and hydroxyl groups are strongly activating and direct further substitution to the ortho and para positions.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.14",
    concept: "activating ortho para directors",
  },
  {
    key: "xii-benreact-methyl-position-in-methylbenzene",
    text: "In a ring numbered so that the carbon carrying the methyl group is carbon 1, the carbon most reactive towards further substitution is",
    options: [
      "carbon 4, which lies para to the methyl group",
      "carbon 3, which lies meta to the methyl group",
      "carbon 2, which lies ortho to the methyl group",
      "carbon 1, which already carries the methyl group",
    ],
    correctIndex: 0,
    explanation:
      "The methyl group releases electron density and directs further substitution to the ortho and para positions, that is carbons 2 and 6 and carbon 4, of which carbon 4 is the least hindered.",
    evidence:
      "A methyl group is an activating ortho and para director, so substitution of methylbenzene occurs at carbon 2 and carbon 4 mainly.",
    questionType: "MDCAT_STYLE",
    difficulty: "EASY",
    relevance: 91,
    outcome: "CHEM-14.14",
    concept: "ortho para directing methyl",
  },
  {
    key: "xii-benreact-ring-with-methyl-and-nitro-groups",
    text: "Consider a benzene ring in which methyl occupies carbon 1 and nitro occupies carbon 4. Bromination of this ring places the new bromine atom mainly at",
    options: [
      "carbon 2, which is ortho to the methyl group and meta to the nitro group",
      "carbon 3, which is meta to the methyl group and ortho to the nitro group",
      "carbon 5, which is meta to both existing groups",
      "carbon 6, which is ortho to the nitro group and meta to the methyl group",
    ],
    correctIndex: 0,
    explanation:
      "The position must satisfy both existing groups at once, and carbon 2 is ortho to the activating methyl group and meta to the deactivating nitro group; carbon 3 is ortho to a nitro group, which is the position to avoid.",
    evidence:
      "Where two substituents are present, further substitution occurs at a position that is ortho or para to one group and meta to the other.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-14.14",
    concept: "two substituent directions",
  },
  {
    key: "xii-benreact-lowest-set-of-locants",
    text: "Three different numberings of the same tetrasubstituted ring are possible, and two give the sets 1,2,4,5 and 1,3,4,6 while a third gives 1,2,3,4. The name of the compound must use the set",
    options: [
      "1,3,4,6, because the numbering that gives the larger numbers is preferred",
      "1,2,4,5, because the locants need not form a consecutive series",
      "1,2,3,4, because the lowest set of locants is chosen",
      "1,2,4,5, because consecutive locants are always rejected by the rules",
    ],
    correctIndex: 2,
    explanation:
      "Numbering of a substituted benzene starts from a substituted carbon and proceeds to give the lowest set of locants at the first point of difference, which here is the set 1,2,3,4.",
    evidence:
      "In naming substituted benzenes, the lowest set of locants is assigned to the ring and the numbering is then fixed.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 89,
    outcome: "CHEM-14.14",
    concept: "lowest set of locants",
  },
  {
    key: "xii-benreact-reactivity-order-of-rings",
    text: "Ranking the rings below from the most to the least reactive towards electrophilic substitution gives",
    options: [
      "benzene > methylbenzene > nitrobenzene > chlorobenzene",
      "nitrobenzene > chlorobenzene > benzene > methylbenzene",
      "chlorobenzene > methylbenzene > nitrobenzene > benzene",
      "methylbenzene > benzene > chlorobenzene > nitrobenzene",
    ],
    correctIndex: 3,
    explanation:
      "Methylbenzene is activated by its methyl group, benzene carries no substituent, the chlorine of chlorobenzene withdraws electron density overall, and the nitro group of nitrobenzene withdraws it most strongly of all.",
    evidence:
      "Reactivity towards electrophilic substitution decreases along the order methylbenzene, benzene, chlorobenzene, nitrobenzene.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-14.14",
    concept: "ring reactivity order",
  },
  {
    key: "xii-benreact-successive-nitration-positions",
    text: "During the conversion of methylbenzene into 2,4,6-trinitrotoluene the position attacked at each further nitration stage is fixed by the requirement that",
    options: [
      "every new nitro group enters the position meta to the methyl group already on the ring",
      "every new nitro group enters a position ortho or para to the methyl group and meta to a nitro group already present",
      "each new nitro group enters the position para to the nitro group already on the ring",
      "the three nitro groups occupy the three positions that carry hydrogen atoms next to the methyl group",
    ],
    correctIndex: 1,
    explanation:
      "The methyl group keeps sending substitution to ortho and para while each nitro group already present blocks its own ortho and para positions, so the only positions open to all of them are 2, 4 and 6.",
    evidence:
      "Successive nitration of methylbenzene gives 2,4,6-trinitrotoluene because each nitro group enters ortho or para to methyl and meta to the existing nitro groups.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-14.14",
    concept: "successive nitration positions",
  },
  {
    key: "xii-benreact-directing-effects-of-four-groups",
    text: "Four statements about substituents on a benzene ring are given. Statement I: methyl activates the ring and directs to ortho and para. Statement II: nitro deactivates the ring and directs to meta. Statement III: chlorine deactivates the ring but still directs to ortho and para. Statement IV: a halogen directs meta because the halogens withdraw electron density.",
    options: [
      "Only statements I, II and III are correct",
      "Only statements I and III are correct",
      "Only statements II and IV are correct",
      "Only statements I, II and IV are correct",
    ],
    correctIndex: 0,
    explanation:
      "A halogen is the exception: its dominant effect withdraws electron density and slows the ring, yet donation of a lone pair still favours ortho and para attack, so statement IV is wrong.",
    evidence:
      "Halogens deactivate the benzene ring but direct further substitution to the ortho and para positions.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-14.14",
    concept: "halogen directing exception",
  },
];