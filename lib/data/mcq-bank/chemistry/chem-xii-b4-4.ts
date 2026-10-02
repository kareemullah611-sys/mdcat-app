import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-phenol-hydroxyl-on-sp2-carbon",
    text: "In phenol, C6H5OH, the hydroxyl group is attached to a ring carbon whose bonding is best described as",
    options: [
      "sp3, with four single sigma bonds to two ring carbons, one hydrogen and the oxygen",
      "sp2, with the ring carbon joined to two neighbouring carbons and the oxygen in a trigonal planar arrangement",
      "sp, with a triple bond to the neighbouring ring carbon and a single bond to the oxygen",
      "sp3d, with the oxygen held in a d orbital of the ring carbon",
    ],
    correctIndex: 1,
    explanation:
      "The hydroxyl-bearing carbon of phenol is a member of the aromatic ring, so it is sp2 hybridised and trigonal planar. It shares its remaining p orbital with the rest of the ring and with the oxygen lone pairs.",
    evidence:
      "The -OH group of phenol is attached to an sp2 hybridised carbon of the aromatic ring, not to a saturated carbon.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "CHEM-16.4",
    concept: "phenol structure",
  },
  {
    key: "xii-phenol-class-not-alcohol",
    text: "A hydroxyl group bonded directly to a carbon of an aromatic ring defines a phenol rather than an alcohol. The structural reason for this classification is that",
    options: [
      "the aromatic ring is always reduced to a saturated ring when the compound is named",
      "the hydroxyl-bearing carbon is sp3, so it cannot be counted as a ring member",
      "the hydroxyl-bearing carbon is sp2 and belongs to the delocalised ring system",
      "the molecule always carries a second hydroxyl group at a fixed position",
    ],
    correctIndex: 2,
    explanation:
      "Because the hydroxyl group is fixed to a ring carbon that is part of the delocalised aromatic system, the compound belongs to the phenol class. The same group on a saturated carbon would define an alcohol.",
    evidence:
      "Compounds with an -OH group directly attached to an aromatic ring are named as phenols and not as alcohols.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-16.4",
    concept: "phenol classification",
  },
  {
    key: "xii-phenol-name-ortho-methyl-cresol",
    text: "A benzene ring carries a hydroxyl group and, on the ring carbon next to it, a single methyl group. The correct name of this compound is",
    options: ["2-methylphenol", "1-methylphenol", "2-methylbenzenemethanol", "3-methylphenol"],
    correctIndex: 0,
    explanation:
      "The ring carbon holding the hydroxyl group is numbered 1, so the adjacent methyl group receives the lowest possible locant, 2. Since the hydroxyl group is on the ring the compound is named as a substituted phenol and takes no -ol or methanol suffix.",
    evidence:
      "Phenols are numbered from the ring carbon bearing the -OH group, so the ortho methyl derivative is 2-methylphenol.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-16.4",
    concept: "phenol nomenclature",
  },
  {
    key: "xii-phenol-name-trinitrophenol",
    text: "The compound C6H2(NO2)3OH, in which the three nitro groups occupy the two positions ortho and the one position para to the hydroxyl group, is named",
    options: [
      "2,4,6-trinitrobenzyl alcohol",
      "3,5-trinitrophenol",
      "2,4,5-trinitrocyclohexanol",
      "2,4,6-trinitrophenol",
    ],
    correctIndex: 3,
    explanation:
      "Numbering from the hydroxyl-bearing carbon as 1 places the nitro groups at 2, 4 and 6, and the retained parent name phenol is used. No -ol suffix appears because the hydroxyl group lies on the aromatic ring.",
    evidence:
      "Nitration of phenol at the ortho and para positions gives 2,4,6-trinitrophenol, which is also called picric acid.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-16.4",
    concept: "phenol nomenclature",
  },
  {
    key: "xii-phenol-ring-more-reactive-than-benzene",
    text: "The lone pairs on the oxygen of a phenolic -OH group are partly shared with the aromatic ring. As a direct consequence phenol is",
    options: [
      "more reactive than benzene towards electrophiles",
      "less reactive than benzene towards electrophiles",
      "unreactive towards electrophiles because the lone pairs are tied up inside the ring",
      "more reactive than benzene towards nucleophiles, since the ring now carries extra electron density",
    ],
    correctIndex: 0,
    explanation:
      "Donation of the oxygen lone pairs into the ring raises the electron density of the ring, so phenol attracts and stabilises the incoming electrophile more readily than benzene does. The same extra density makes the ring a poorer target for nucleophiles.",
    evidence:
      "The -OH group activates the benzene ring of phenol, so phenol is more reactive than benzene in electrophilic aromatic substitution.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.4",
    concept: "ring activation",
  },
  {
    key: "xii-phenol-statement-only-p-holds",
    text: "Three claims about phenol are made. P: the hydroxyl group is attached to an sp2 carbon of an aromatic ring. Q: phenol belongs to the alcohol class because it carries a hydroxyl group. R: phenol may be named with the -ol suffix. Which of these claims is correct?",
    options: ["P and R only", "Q and R only", "P only", "P and Q only"],
    correctIndex: 2,
    explanation:
      "Only P is right. The presence of a hydroxyl group alone does not place a compound in the alcohol class, because the group must sit on a saturated carbon, and phenols are never given the -ol suffix.",
    evidence:
      "Phenols are named using the parent name phenol with substituents listed as prefixes, and the -ol suffix is reserved for alcohols.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 95,
    outcome: "CHEM-16.4",
    concept: "phenol classification",
  },
  {
    key: "xii-phenol-co-bond-vs-cyclohexanol",
    text: "Phenol and cyclohexanol are both hydroxyl compounds, but the carbon that carries the hydroxyl group behaves differently in the two. The C-O bond in phenol is",
    options: [
      "shorter than in cyclohexanol and has partial double-bond character, because the oxygen lone pairs are delocalised into the ring",
      "longer than in cyclohexanol, because the ring pulls electron density away from the oxygen",
      "absent, because the oxygen bridges two ring carbons in phenol",
      "the same length as in cyclohexanol, because the two compounds are isomeric",
    ],
    correctIndex: 0,
    explanation:
      "Resonance between the oxygen lone pairs and the ring gives the phenolic C-O bond a share of double-bond character and shortens it relative to an ordinary alcohol. That is why a phenol is less prone to the reactions that break a simple C-O single bond.",
    evidence:
      "Delocalisation of the oxygen lone pairs into the ring gives phenol resonance structures in which the C-O bond is a double bond.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-16.4",
    concept: "phenolic carbon bond",
  },
  {
    key: "xii-phenol-which-compound-is-a-phenol",
    text: "Identify the compound that belongs to the phenol class rather than the alcohol class.",
    options: ["CH3CH2CH2OH", "C6H5CH2OH", "(CH3)3COH", "C6H5OH"],
    correctIndex: 3,
    explanation:
      "Only in C6H5OH is the hydroxyl group bonded directly to a ring carbon. In C6H5CH2OH the same group sits on a saturated carbon outside the ring, so that compound is an alcohol, not a phenol.",
    evidence:
      "Phenol has the -OH group attached to the aromatic ring itself, whereas benzyl alcohol carries it on an sp3 carbon of a side chain.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.4",
    concept: "phenol identification",
  },
  {
    key: "xii-phenol-electrophile-ortho-para-positions",
    text: "When phenol undergoes electrophilic substitution, the incoming electrophile is directed mainly to the",
    options: [
      "two ortho positions and the para position",
      "the meta position",
      "the ring carbon that already carries the hydroxyl group",
      "the two meta positions",
    ],
    correctIndex: 0,
    explanation:
      "The -OH group is an ortho and para director because attack at those positions gives a sigma complex in which the positive charge reaches the carbon bearing the hydroxyl group, where the oxygen can supply a lone pair.",
    evidence:
      "The hydroxyl group directs incoming electrophiles to the ortho and para positions of the phenol ring.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-16.5",
    concept: "ortho para direction",
  },
  {
    key: "xii-phenol-bromination-gives-ortho-bromophenol",
    text: "Bromination of phenol substitutes a ring hydrogen rather than the oxygen, and under mild conditions the product formed is",
    options: [
      "bromobenzene, in which the hydroxyl group has been lost",
      "3-bromophenol, by substitution at a meta position",
      "2-bromophenol, by substitution at a position ortho to the -OH group",
      "phenyl hypobromite, with the bromine bonded to the oxygen",
    ],
    correctIndex: 2,
    explanation:
      "The activated ring attacks the electrophile at an ortho or para position, so the hydrogen on a neighbouring carbon is replaced and 2-bromophenol is obtained. The hydroxyl group stays in place on the ring.",
    evidence:
      "Bromination of phenol gives 2-bromophenol, and with an excess of bromine the 2,4,6 positions are all substituted.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-16.5",
    concept: "ring bromination",
  },
  {
    key: "xii-phenol-nitration-statement-combination",
    text: "Three claims about the nitration of phenol are made. P: substitution takes place at the two ortho positions and the para position. Q: the -OH group deactivates the ring, so nitration is harder than for benzene. R: the product carrying nitro groups at 2, 4 and 6 is 2,4,6-trinitrophenol. Which claims are correct?",
    options: ["Q only", "P only", "P, Q and R", "P and R only"],
    correctIndex: 3,
    explanation:
      "P and R are correct. The hydroxyl group activates rather than deactivates the ring, so Q is wrong, while the ortho and para substitution pattern and the resulting trinitrophenol name are both textbook outcomes.",
    evidence:
      "Phenol reacts with concentrated nitric acid to give 2,4,6-trinitrophenol because the -OH group activates the ring.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-16.5",
    concept: "ring nitration",
  },
  {
    key: "xii-phenol-why-ortho-para-attack",
    text: "Electrophilic attack on phenol occurs at the ortho and para positions rather than at the meta position. The reason lies in the stability of the sigma complex, because",
    options: [
      "meta attack places the positive charge on a carbon next to the -OH group, where the oxygen cannot reach it",
      "the hydroxyl group is a meta director, since oxygen pulls electron density out of the ring",
      "ortho and para attack gives a sigma complex in which a positive charge can be delocalised onto the carbon bearing the -OH group, which then donates a lone pair",
      "the ortho and para positions are held by the ring in a geometry that meta attack cannot reach",
    ],
    correctIndex: 2,
    explanation:
      "The intermediate from ortho or para attack can place a positive charge on the carbon carrying the hydroxyl group, and the oxygen then stabilises it by donating a lone pair. The intermediate from meta attack has no such stabilised form, so that route is disfavoured.",
    evidence:
      "The sigma complex of ortho and para attack in phenol is stabilised because the positive charge can be delocalised onto the carbon bearing the -OH group.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.5",
    concept: "sigma complex stability",
  },
  {
    key: "xii-phenol-strong-nitration-picric-acid",
    text: "Strong nitration of phenol places three nitro groups at the positions ortho and para to the hydroxyl group, giving a yellow crystalline solid whose common name is",
    options: ["picric acid", "carbolic acid", "catechol", "hydroquinone"],
    correctIndex: 0,
    explanation:
      "The yellow solid 2,4,6-trinitrophenol is traditionally called picric acid. Carbolic acid is simply another name for phenol itself, while catechol and hydroquinone each carry two hydroxyl groups on the ring.",
    evidence:
      "The product of strong nitration of phenol, 2,4,6-trinitrophenol, is a yellow solid known as picric acid.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-16.5",
    concept: "picric acid formation",
  },
  {
    key: "xii-phenol-electrophilic-substitution-sequence",
    text: "The steps that carry out electrophilic substitution on the phenol ring follow a definite order. The correct sequence is",
    options: [
      "the ring loses H+ first, then the electrophile attacks the ring carbon, then aromaticity is restored",
      "the electrophile attacks a ring carbon to give a delocalised sigma complex, then the complex loses H+ and the aromatic ring is restored",
      "the C-O bond breaks first, then the electrophile is released, then the ring is rebuilt",
      "the electrophile is released first, then the oxygen donates a lone pair into the ring, then H+ leaves the ring",
    ],
    correctIndex: 1,
    explanation:
      "Ring attack by the electrophile forms the delocalised sigma complex first; loss of the ring proton then restores aromaticity. Losing the proton before attack is impossible, since aromaticity has not yet been disturbed.",
    evidence:
      "Electrophilic aromatic substitution proceeds through a delocalised sigma complex, after which loss of a proton restores the aromatic ring.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-16.5",
    concept: "substitution mechanism",
  },
  {
    key: "xii-phenol-more-reactive-than-benzene-electrophile",
    text: "Phenol and benzene both contain an aromatic ring, yet towards an incoming electrophile phenol is",
    options: [
      "far less reactive, because the -OH group removes electron density from the ring",
      "equally reactive, because the -OH group has no effect on the ring",
      "far more reactive, because the -OH group raises the electron density of the ring",
      "unreactive, because the -OH group destroys the aromatic character of the ring",
    ],
    correctIndex: 2,
    explanation:
      "The oxygen of the hydroxyl group donates electron density into the ring, so phenol attracts the electrophile and stabilises the resulting sigma complex far more effectively than benzene can.",
    evidence:
      "The -OH group is an activating group that makes the phenol ring more reactive than benzene towards electrophilic attack.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-16.5",
    concept: "ring activation",
  },
  {
    key: "xii-phenol-tribromination-statement-set",
    text: "Four claims about bromination of phenol are made. P: the -OH group raises the electron density of the ring. Q: bromination at low temperature can replace all three hydrogens that lie ortho and para to the -OH group. R: each substitution leaves the -OH group in place, so the ring stays activated and the later substitutions are still directed ortho and para. S: a methyl group is a stronger activator of a ring than a hydroxyl group. Which claims are correct?",
    options: [
      "P and R only",
      "P, Q and S only",
      "Q and S only",
      "P, Q and R only",
    ],
    correctIndex: 3,
    explanation:
      "P, Q and R are correct, because the hydroxyl group both activates the ring and remains attached throughout, so 2,4,6-tribromophenol is formed. S is false: a hydroxyl group is a far stronger activator than a methyl group.",
    evidence:
      "An excess of bromine converts phenol to 2,4,6-tribromophenol because the -OH group keeps directing substitution to the ortho and para positions.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-16.5",
    concept: "ring activation",
  },
  {
    key: "xii-phenol-more-acidic-than-ethanol",
    text: "Between ethanol and phenol, the stronger acid is",
    options: [
      "ethanol, because an sp3 carbon pushes electron density onto the oxygen",
      "the two are equally acidic, because both carry a single hydroxyl group",
      "phenol, because the phenoxide ion is stabilised by delocalisation of the negative charge into the ring",
      "ethanol, because the hydroxyl group on a saturated carbon is released more easily",
    ],
    correctIndex: 2,
    explanation:
      "Loss of the phenolic proton gives the phenoxide ion, whose negative charge is shared over the ortho and para ring carbons. The alkoxide ion from ethanol has no such delocalisation, so phenol is the far stronger acid.",
    evidence:
      "Phenol is more acidic than ethanol because the phenoxide ion is stabilised by resonance while the ethoxide ion is not.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-16.6",
    concept: "acid strength comparison",
  },
  {
    key: "xii-phenol-only-one-forms-salt-with-naoh",
    text: "Treated separately with sodium hydroxide solution, ethanol and phenol behave differently because",
    options: [
      "only phenol gives a soluble sodium salt, sodium phenoxide, while ethanol is left unchanged",
      "only ethanol gives a soluble sodium salt, sodium ethoxide, while phenol is left unchanged",
      "both give sodium salts, since both carry a hydroxyl group",
      "neither gives a sodium salt, since the O-H group of each is not ionisable",
    ],
    correctIndex: 0,
    explanation:
      "Phenol is acidic enough to be neutralised by a weak base, so it forms sodium phenoxide in sodium hydroxide solution. Ethanol is far too weakly acidic to be neutralised by sodium hydroxide and does not react appreciably with it.",
    evidence:
      "Phenol reacts with sodium hydroxide to form a salt, while ethanol does not react appreciably with sodium hydroxide.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-16.6",
    concept: "salt formation",
  },
  {
    key: "xii-phenol-alkali-versus-ethanol-sodium-metal",
    text: "Ethanol and phenol both liberate hydrogen when they react with sodium metal, since the O-H hydrogen is replaced by sodium. The difference between the two lies in the fact that phenol",
    options: [
      "forms its salt only with a strong acid",
      "forms phenoxide that is neutralised even by a weak alkali such as sodium hydroxide",
      "is unable to donate its O-H hydrogen to a metal",
      "gives hydrogen only after strong heating with an alkali",
    ],
    correctIndex: 1,
    explanation:
      "Both compounds release hydrogen with sodium, but the resulting phenoxide is stabilised enough by resonance that a weak base can also form it. The ethoxide ion has no comparable stabilisation.",
    evidence:
      "Phenol liberates hydrogen with sodium metal and is also converted to a salt by sodium hydroxide, unlike ethanol.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.6",
    concept: "phenol versus alcohol",
  },
  {
    key: "xii-phenol-ferric-chloride-property",
    text: "A violet colour with neutral ferric chloride is a property of phenol, while ethanol shows no such colour. The difference arises because",
    options: [
      "the carbon chain of ethanol is too short for any coloured compound to form",
      "the hydroxyl group of ethanol is not acidic enough to lose a proton to Fe3+",
      "the hydroxyl group of ethanol is bonded to a carbon that carries two hydrogens",
      "the hydroxyl group of phenol is attached directly to an aromatic ring and can form a coloured complex with Fe3+",
    ],
    correctIndex: 3,
    explanation:
      "The violet colour is a property of the phenolic group, whose oxygen can coordinate to Fe3+ to give a coloured complex. An ordinary alcohol such as ethanol has no such aromatic hydroxyl group and forms no such complex.",
    evidence:
      "Phenol gives a violet colouration with neutral ferric chloride, a property that phenols share and simple alcohols do not.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-16.6",
    concept: "ferric chloride property",
  },
  {
    key: "xii-phenol-acidity-reasoning-sequence",
    text: "Listed in the correct order, the reasoning that accounts for the greater acidity of phenol over ethanol is",
    options: [
      "the ring loses a ring hydrogen, the -OH group becomes an aldehyde, and the charge is then delocalised",
      "the O-H proton moves to the ring, the ring becomes negatively charged, and the C-O bond then breaks",
      "the O-H proton leaves to give phenoxide, the negative charge is delocalised over the ring, and the sp2 carbon that carries part of it is more electronegative than an sp3 carbon",
      "phenoxide forms, its charge stays localised on the oxygen, and the ring carbons take no part in carrying it",
    ],
    correctIndex: 2,
    explanation:
      "The proton leaves first to give phenoxide, the resulting negative charge is then spread over the ortho and para ring carbons, and the sp2 carbons that share it are more electronegative than the sp3 carbon of an alkoxide. All three steps favour phenol.",
    evidence:
      "The phenoxide ion is stabilised both by resonance delocalisation and by the greater electronegativity of sp2 carbon compared with sp3 carbon.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-16.6",
    concept: "phenoxide stabilisation",
  },
  {
    key: "xii-phenol-water-solubility-vs-ethanol",
    text: "Phenol and ethanol are both hydroxyl compounds, yet phenol dissolves in water only to a limited extent while ethanol mixes with it in all proportions. The property that explains the difference is",
    options: [
      "the number of carbon atoms in each molecule",
      "the ratio of the large non-polar aromatic ring to the single polar hydroxyl group in phenol",
      "the presence of an aromatic ring in ethanol",
      "the weaker hydrogen bonding in phenol compared with ethanol",
    ],
    correctIndex: 1,
    explanation:
      "Phenol has only one polar hydroxyl group to counterbalance a large non-polar ring, so its hydrogen bonding with water is not enough to overcome the hydrophobic ring. Ethanol is dominated by its small polar hydroxyl group and is fully miscible with water.",
    evidence:
      "Phenol is sparingly soluble in water whereas lower alcohols such as ethanol are completely miscible with it.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-16.6",
    concept: "water solubility",
  },
  {
    key: "xii-phenol-alcohol-statement-set",
    text: "Four statements comparing alcohols and phenols are listed. P: both classes contain a hydroxyl group. Q: only phenol has an aromatic ring that can undergo electrophilic substitution. R: both classes release hydrogen on reaction with sodium metal. S: phenol is more freely soluble in water than ethanol. Which statements are correct?",
    options: [
      "P, Q and R only",
      "P and R only",
      "P, Q, R and S only",
      "P only",
    ],
    correctIndex: 0,
    explanation:
      "P, Q and R are correct: a hydroxyl group, an activated aromatic ring and hydrogen release with sodium are all established features of these classes. S is false because phenol's large non-polar ring makes it less soluble in water than ethanol.",
    evidence:
      "Alcohols and phenols both contain -OH groups and react with sodium, but only phenol contains an aromatic ring that is activated towards electrophilic substitution.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-16.6",
    concept: "phenol versus alcohol",
  },
  {
    key: "xii-phenol-picric-acid-nitro-position-effect",
    text: "The three nitro groups of 2,4,6-trinitrophenol stand at the positions ortho and para to the hydroxyl group. Compared with phenol, picric acid is far more acidic because",
    options: [
      "the nitro groups push electron density towards the ring and so stabilise the phenoxide ion",
      "the nitro groups replace the ring hydrogens, so the O-H proton is held less tightly",
      "the nitro groups withdraw electron density from the ring, so the negative charge of the phenoxide ion is no longer shared and losing H+ becomes more favourable",
      "the three nitro groups make the oxygen of the hydroxyl group more electronegative",
    ],
    correctIndex: 2,
    explanation:
      "The nitro groups at the ortho and para positions withdraw electron density, and this both destabilises the phenoxide ion and makes the loss of the proton more favourable. Phenol itself, without these groups, keeps the negative charge delocalised in the ring.",
    evidence:
      "Electron withdrawing groups such as nitro increase the acidity of phenol because they destabilise the phenoxide ion.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-16.6",
    concept: "substituent position effect",
  },
  {
    key: "xii-phenol-ester-versus-ring-substitution",
    text: "Ethanol forms an ester with a carboxylic acid, a substitution carried out at the saturated carbon that carries the -OH group. Phenol instead reacts by electrophilic substitution on the ring. The difference arises because",
    options: [
      "the phenolic oxygen has no lone pairs left to donate",
      "the phenolic -OH donates electron density into the aromatic ring and so activates ring carbons towards an electrophile, while ethanol has no aromatic ring to substitute",
      "ethanol has no hydroxyl group with which it could react at all",
      "the aromatic ring of phenol is already so full that it cannot carry out substitution",
    ],
    correctIndex: 1,
    explanation:
      "Delocalisation of the phenolic oxygen lone pairs into the ring activates ring carbons, so an electrophile attacks the ring. Ethanol has no aromatic ring, and its saturated carbon undergoes substitution only in the manner of an ordinary alcohol.",
    evidence:
      "The -OH group of phenol activates the aromatic ring towards electrophilic substitution, a pathway that is not available to alcohols such as ethanol.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-16.6",
    concept: "reaction pathway comparison",
  },
];
