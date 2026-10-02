import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "hbond-formation-requirements",
    text: "A hydrogen bond forms when a hydrogen atom that is covalently bonded to a small electronegative atom is attracted to a lone pair on a neighbouring molecule. The donor atom must be one of",
    options: [
      "nitrogen, oxygen and fluorine",
      "carbon, nitrogen and oxygen",
      "oxygen, sulfur and chlorine",
      "fluorine, chlorine and bromine",
    ],
    correctIndex: 0,
    explanation:
      "A hydrogen bond requires a hydrogen atom covalently attached to a small, highly electronegative atom, so N, O and F qualify and the lone-pair acceptor must also be N, O or F.",
    evidence:
      "Hydrogen bonding occurs when a hydrogen atom bonded to nitrogen, oxygen or fluorine is attracted to a lone pair of electrons on an atom of a neighbouring molecule.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-4.3",
    concept: "hydrogen bond formation",
  },
  {
    key: "hbond-strength-position",
    text: "Compared with ordinary dipole-dipole attraction and London dispersion forces, a hydrogen bond is",
    options: [
      "weaker than both of them",
      "stronger than both of them but weaker than a covalent bond",
      "stronger than the covalent bond that holds the molecule together",
      "of exactly the same strength as the dipole-dipole interaction",
    ],
    correctIndex: 1,
    explanation:
      "The small size and high electronegativity of N, O and F make the hydrogen bond an unusually strong dipole-dipole attraction, yet it is only a small fraction of the strength of a covalent bond.",
    evidence:
      "Hydrogen bonds are stronger than ordinary dipole-dipole attractions and dispersion forces but weaker than covalent and ionic bonds.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-4.3",
    concept: "hydrogen bond strength",
  },
  {
    key: "hbond-broken-on-boiling",
    text: "When a liquid such as water is boiled, the attractions that must be overcome as the liquid becomes vapour are",
    options: [
      "the covalent O-H bonds inside each water molecule",
      "the ionic bonds within each water molecule",
      "the hydrogen bonds between neighbouring water molecules",
      "the metallic bonds between the atoms of the sample",
    ],
    correctIndex: 2,
    explanation:
      "Boiling separates whole molecules from one another, so it overcomes the intermolecular hydrogen bonds while the covalent O-H bonds inside each molecule stay intact.",
    evidence:
      "Boiling a liquid breaks the intermolecular attractions between its molecules while the covalent bonds within them remain unchanged.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "CHEM-4.3",
    concept: "intermolecular bond rupture",
  },
  {
    key: "hbond-water-cohesion-surface-tension",
    text: "The surface tension of water at room temperature is far higher than that of most organic liquids because",
    options: [
      "water molecules are polar and repel one another at the surface",
      "hydrogen bonds pull surface molecules inward, giving the liquid strong cohesion",
      "dissolved air lowers the pull between the surface molecules",
      "water conducts heat away from the surface faster than most liquids",
    ],
    correctIndex: 1,
    explanation:
      "Hydrogen bonding makes water molecules cohere strongly to one another, so a surface molecule is held back by fewer neighbours than one in the bulk, and the resulting cohesion produces a high surface tension.",
    evidence:
      "Surface tension arises because the cohesion between liquid molecules is stronger than their attraction to molecules of the vapour above the surface.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "water surface tension",
  },
  {
    key: "hbond-hf-water-ammonia-anomalies",
    text: "HF, H2O and NH3 boil at temperatures far above the values expected from their small molar masses. The single best explanation is that",
    options: [
      "these three form strong intermolecular hydrogen bonds, while the other hydrides cannot",
      "these three contain covalent bonds, unlike the other hydrides in their groups",
      "these three have dipole moments that no other hydride molecule possesses",
      "these three are the only hydrides that are gases at ordinary room temperature",
    ],
    correctIndex: 0,
    explanation:
      "In each of HF, H2O and NH3 the hydrogen is bonded to F, O or N and so forms hydrogen bonds with neighbouring molecules, whereas HCl, H2S and PH3 cannot hydrogen bond and therefore boil far lower.",
    evidence:
      "HF, water and ammonia show anomalous high boiling points within their groups because they form hydrogen bonds, unlike the other hydrides of those elements.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-4.3",
    concept: "anomalous hydride boiling points",
  },
  {
    key: "hbond-ethanol-versus-butane-boiling",
    text: "Ethanol, C2H5OH, boils at 78 C while butane, C4H10, a hydrocarbon of similar molar mass, boils at about -0.5 C. The difference arises because",
    options: [
      "butane molecules are held together by stronger covalent bonds than ethanol molecules",
      "ethanol is polar and butane is not, and polarity alone fixes the boiling point",
      "ethanol molecules are joined by hydrogen bonds, but butane molecules attract one another only by dispersion forces",
      "butane has twice as many carbon atoms and therefore evaporates more slowly than ethanol",
    ],
    correctIndex: 2,
    explanation:
      "Since the two molecules have comparable mass their dispersion forces are of similar size, but the O-H group lets ethanol molecules form hydrogen bonds, which take far more energy to overcome than the attractions between nonpolar butane molecules.",
    evidence:
      "Alcohols, phenols and carboxylic acids boil much higher than alkanes of comparable molar mass because they form intermolecular hydrogen bonds.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-4.3",
    concept: "ethanol versus butane",
  },
  {
    key: "hbond-ethanol-solubility-in-water",
    text: "Ethanol mixes completely with water in all proportions. This behaviour is best explained by the fact that",
    options: [
      "ethanol is less dense than water and therefore floats as a separate layer",
      "ethanol reacts with water to form soluble ions that disperse through the liquid",
      "the -OH group of ethanol forms hydrogen bonds with water, replacing the water-water hydrogen bonds",
      "ethanol and water are both nonpolar liquids with nearly the same molar mass",
    ],
    correctIndex: 2,
    explanation:
      "Water forms hydrogen bonds with the hydroxyl group of ethanol, and the energy released on forming ethanol-water bonds compensates for the water-water bonds that are broken, so the two liquids mix completely.",
    evidence:
      "Alcohols and carboxylic acids dissolve in water because their hydroxyl or carboxyl groups form hydrogen bonds with water molecules.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-4.3",
    concept: "ethanol solubility in water",
  },
  {
    key: "hbond-intramolecular-nitrophenol",
    text: "In o-nitrophenol the hydrogen of the -OH group is held to a nearby oxygen within the same molecule. Compared with the para isomer this means the ortho compound",
    options: [
      "has weaker intermolecular hydrogen bonding and therefore a lower boiling point",
      "has stronger intermolecular hydrogen bonding and therefore a higher boiling point",
      "has the same boiling point, because isomers always boil at the same temperature",
      "forms no hydrogen bonds at all, since an intramolecular attraction is irrelevant to boiling",
    ],
    correctIndex: 0,
    explanation:
      "The intramolecular hydrogen bond is satisfied within each molecule, so fewer attractions act between neighbouring molecules and less energy is needed to separate them, giving a lower boiling point.",
    evidence:
      "Intramolecular hydrogen bonding keeps a molecule bonded to itself and reduces the attraction between molecules, lowering the boiling point.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-4.3",
    concept: "intramolecular hydrogen bonding",
  },
  {
    key: "hbond-water-high-heat-capacity",
    text: "Water requires a large amount of heat to raise its temperature by a single degree. The main reason for this high heat capacity is that",
    options: [
      "water molecules move so slowly that they store energy more efficiently than other liquids",
      "much of the heat goes into loosening the hydrogen bonds between molecules, not only into raising molecular motion",
      "water has a large latent heat of fusion because ice floats on the surface",
      "water is transparent to infrared radiation and so absorbs heat from its surroundings",
    ],
    correctIndex: 1,
    explanation:
      "A considerable share of the energy supplied to water is used to break the network of hydrogen bonds between molecules rather than to increase their motion, so a large quantity is needed for a modest temperature rise.",
    evidence:
      "Water has a high specific heat capacity because absorbed energy is used to break intermolecular hydrogen bonds as well as to raise the kinetic energy of the molecules.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "water heat capacity",
  },
  {
    key: "hbond-water-density-maximum-four-degrees",
    text: "Water reaches its maximum density at 4 C and is less dense both above and below that temperature. The behaviour follows from",
    options: [
      "the covalent bonds inside the molecules lengthen steadily as the temperature rises",
      "dissolved air leaves the water as it warms and rises to the surface",
      "the polar nature of water makes its density follow the expansion of the vessel exactly",
      "the hydrogen-bonded network is open and loose at low temperature, packs more closely up to 4 C, then loosens again",
    ],
    correctIndex: 3,
    explanation:
      "Below 4 C the partly open hydrogen-bonded structure leaves gaps between molecules, and as the temperature rises to 4 C the molecules pack more closely, above which ordinary thermal expansion reduces the density once more.",
    evidence:
      "Water has a maximum density at 4 degrees Celsius and expands on freezing because of the open hydrogen-bonded arrangement of its molecules.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-4.3",
    concept: "water density anomaly",
  },
  {
    key: "hbond-ice-floats-reason",
    text: "A large ice cube floats on liquid water rather than sinking. Which sequence of facts accounts for this?",
    options: [
      "Hydrogen bonds lock the molecules of ice into an open arrangement, this makes ice less dense than liquid water, so the cube floats",
      "Ice releases latent heat as it melts, the released heat warms the water, warm water is denser, so the cube stays on top",
      "Ice is a molecular solid, molecular solids are always less dense than liquids, so the cube floats",
      "Melting removes the hydrogen bonds and lets the molecules pack more tightly, making ice denser than liquid water so the cube sinks",
    ],
    correctIndex: 0,
    explanation:
      "In ice each water molecule forms four hydrogen bonds in a tetrahedral arrangement that encloses empty space, so the solid is less dense than the liquid and floats on it.",
    evidence:
      "Ice floats on water because the open hydrogen-bonded structure of the solid is less dense than the liquid.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-4.3",
    concept: "density of ice",
  },
  {
    key: "hbond-donor-and-acceptor-roles",
    text: "In a hydrogen bond between two water molecules, the molecule that supplies the covalently bonded hydrogen acts as the",
    options: [
      "hydrogen bond acceptor, because it contributes the lone pair",
      "hydrogen bond donor, while the other molecule is the acceptor through its lone pair",
      "covalent bond donor, because an O-H bond is broken in the process",
      "dispersion force donor, because its electrons spread over both molecules",
    ],
    correctIndex: 1,
    explanation:
      "The molecule providing the attached hydrogen is the donor, and that hydrogen is drawn to a lone pair on the N, O or F of the acceptor molecule, so one molecule can take both roles.",
    evidence:
      "The hydrogen bond donor provides the hydrogen covalently bonded to N, O or F, while the acceptor provides the lone pair of electrons on the electronegative atom.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-4.3",
    concept: "donor acceptor roles",
  },
  {
    key: "hbond-ethanoic-acid-dimer",
    text: "Two molecules of ethanoic acid, CH3COOH, join through two hydrogen bonds to form a cyclic pair. A direct consequence of this pairing is that ethanoic acid",
    options: [
      "is nonpolar and boils below ethane at a similar mass",
      "cannot dissolve in water under any circumstances",
      "boils below propan-1-ol, which has a similar molar mass",
      "boils above butan-1-ol, which has a similar molar mass",
    ],
    correctIndex: 3,
    explanation:
      "Ethanoic acid molecules link into strongly bound dimers, so the particles that must be separated at the boiling point are larger and more firmly bound than those of butan-1-ol despite the similar molar mass.",
    evidence:
      "Carboxylic acids exist as hydrogen bonded dimers in the liquid state, which raises their boiling points relative to compounds of similar molar mass.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-4.3",
    concept: "carboxylic acid dimer",
  },
  {
    key: "hbond-phenol-versus-cyclohexane",
    text: "Phenol, C6H5OH, boils at a much higher temperature than cyclohexane, which has a similar molar mass. The property of phenol responsible for this is its",
    options: [
      "covalent ring structure, which resists distortion as the liquid is heated",
      "greater polarizability of the aromatic ring",
      "ability to form intermolecular hydrogen bonds through its -OH group",
      "higher density in the liquid state, which delays boiling",
    ],
    correctIndex: 2,
    explanation:
      "Phenol molecules hydrogen bond to one another through the hydroxyl group, and breaking these attractions between molecules takes more energy than the dispersion forces holding cyclohexane together.",
    evidence:
      "Phenols and alcohols form intermolecular hydrogen bonds and so have higher boiling points than hydrocarbons of comparable molar mass.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "phenol boiling point",
  },
  {
    key: "hbond-alcohol-family-boiling-order",
    text: "Four liquids are available: methanol, ethanol, propan-1-ol and butan-1-ol. Which ordering lists them from the lowest to the highest boiling point?",
    options: [
      "methanol < ethanol < propan-1-ol < butan-1-ol",
      "butan-1-ol < propan-1-ol < ethanol < methanol",
      "ethanol < methanol < butan-1-ol < propan-1-ol",
      "propan-1-ol < butan-1-ol < methanol < ethanol",
    ],
    correctIndex: 0,
    explanation:
      "All four alcohols form intermolecular hydrogen bonds, so the deciding factor is the growing mass and length of the hydrocarbon chain, which strengthens the dispersion contribution as the series is ascended.",
    evidence:
      "Within a homologous series of alcohols the boiling point rises with increasing molecular mass even though every member can form hydrogen bonds.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "alcohol homologous series",
  },
  {
    key: "hbond-solute-hbonding-with-water",
    text: "Which one of the following solutes forms hydrogen bonds with water and can therefore be expected to dissolve in it readily?",
    options: ["C6H14", "CH4", "CCl4", "C2H5OH"],
    correctIndex: 3,
    explanation:
      "Ethanol is the only one of the four that carries an O-H group able to donate and accept hydrogen bonds with water, so its hydration outweighs the small nonpolar part of the molecule.",
    evidence:
      "Alcohols are soluble in water because their -OH group forms hydrogen bonds with water molecules.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-4.3",
    concept: "solubility in water",
  },
  {
    key: "hbond-dna-double-helix",
    text: "The two strands of the DNA double helix are held together mainly by",
    options: [
      "covalent bonds linking the sugars of neighbouring nucleotides",
      "hydrogen bonds between pairs of complementary bases",
      "ionic bonds between the phosphate groups of the two strands",
      "metallic bonds between the nitrogen bases of opposite strands",
    ],
    correctIndex: 1,
    explanation:
      "Complementary bases sit opposite one another so that their N-H groups and lone pairs line up and form hydrogen bonds, which hold the two strands together while the sugar-phosphate backbone is covalently bonded.",
    evidence:
      "In DNA the two strands are held together by hydrogen bonds between pairs of complementary bases.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-4.3",
    concept: "dna double helix",
  },
  {
    key: "hbond-protein-beta-sheet",
    text: "A beta sheet in a protein is a structural feature that arises because",
    options: [
      "peptide bonds coil the chain into a helix held together by ionic bonds",
      "disulfide bridges link the side chains of adjacent amino acid residues",
      "hydrogen bonds form between backbone C=O and N-H groups of neighbouring polypeptide segments",
      "dispersion attraction alone holds the pleated sheet without any hydrogen bonding",
    ],
    correctIndex: 2,
    explanation:
      "The pleated beta sheet is stabilised by hydrogen bonds between the carbonyl oxygen of one segment and the amide hydrogen of another, a pattern comparable to the base pairing of DNA.",
    evidence:
      "Protein secondary structure such as the alpha helix and the beta sheet is stabilised by hydrogen bonds between groups of the polypeptide backbone.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-4.3",
    concept: "protein beta sheet",
  },
  {
    key: "hbond-alcohol-against-alkane-solubility",
    text: "Equal masses of propan-1-ol and of hexane are each stirred into the same volume of water. Propan-1-ol disperses far better because",
    options: [
      "propan-1-ol is less dense than hexane",
      "hexane has weaker dispersion forces than propan-1-ol",
      "propan-1-ol boils at a lower temperature than hexane",
      "propan-1-ol hydrogen bonds with water through its -OH group, whereas hexane cannot",
    ],
    correctIndex: 3,
    explanation:
      "Propan-1-ol presents a hydroxyl group that forms hydrogen bonds with water and so becomes hydrated, while nonpolar hexane offers only weak dispersion forces that do not repay the water-water hydrogen bonds they would disturb.",
    evidence:
      "Compounds that form hydrogen bonds with water, such as alcohols and carboxylic acids, are far more soluble than hydrocarbons of similar size.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-4.3",
    concept: "alcohol and alkane solubility",
  },
  {
    key: "hbond-comparing-boiling-points-steps",
    text: "Two liquids of almost the same molar mass are to be compared. Which sequence of reasoning correctly predicts which will boil at the higher temperature?",
    options: [
      "Test whether each liquid hydrogen bonds to itself, then whether it can hydrogen bond to the other, then compare the remaining dipole-dipole and dispersion attractions",
      "Compare only the number of carbon atoms in each molecule and pick the larger one, ignoring functional groups",
      "Compare polarity first and, if the two differ, select the more polar liquid without considering hydrogen bonding",
      "Compare the densities of the liquids at room temperature, since the denser liquid must boil at the higher temperature",
    ],
    correctIndex: 0,
    explanation:
      "The boiling point follows the energy needed to separate molecules, so the strongest intermolecular attraction present must be identified first, and hydrogen bonding takes precedence over ordinary dipole-dipole and dispersion attractions.",
    evidence:
      "The boiling point of a liquid depends on the intermolecular forces holding its molecules together, hydrogen bonding being the strongest of these for N-H, O-H and F-H compounds.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "comparing boiling points",
  },
  {
    key: "hbond-statement-thermal-effects",
    text: "Hydrogen bonding has several thermal effects, and three claims are made about them. P: dissolving a hydrogen-bonding solute in water can release heat because solute-water bonds replace water-water bonds. Q: hydrogen bonding always raises the boiling point of a liquid. R: water has a high heat of vaporisation because many hydrogen bonds must be broken to form vapour. Which combination is correct?",
    options: [
      "P and R are correct",
      "Only P is correct",
      "Only R is correct",
      "P, Q and R are correct",
    ],
    correctIndex: 0,
    explanation:
      "Solute-water hydrogen bonds can be stronger than the water-water bonds they replace, so dissolution can be exothermic, and much of the network must be broken during vaporisation, which makes P and R correct while Q fails for molecules such as o-nitrophenol.",
    evidence:
      "Hydrogen bonds formed between a solute and water can release heat, and water has a high heat of vaporisation because its hydrogen-bonded structure must be broken on boiling.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "hydrogen bonding thermal effects",
  },
  {
    key: "hbond-statement-donor-acceptor-conditions",
    text: "Three statements about a hydrogen bond are given. P: the bond forms most readily when the lone pair and the attached hydrogen are far apart at an obtuse angle. Q: the acceptor atom must be nitrogen, oxygen or fluorine. R: the hydrogen must be covalently bonded to nitrogen, oxygen or fluorine. Which combination is correct?",
    options: ["Only P is correct", "P and R are correct", "Only Q is correct", "Q and R are correct"],
    correctIndex: 3,
    explanation:
      "The bond is strongest when the attached hydrogen points straight at the lone pair, giving an arrangement close to linear, so P is wrong, while both the donor hydrogen and the acceptor must be attached to N, O or F.",
    evidence:
      "A hydrogen bond forms when a hydrogen bonded to N, O or F is attracted to a lone pair on N, O or F of another molecule, and it is strongest in a nearly linear arrangement.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-4.3",
    concept: "hydrogen bond geometry",
  },
  {
    key: "hbond-statement-intramolecular-claims",
    text: "Three claims about o-nitrophenol are made. P: it can form intramolecular hydrogen bonds within a single molecule. Q: the intramolecular attraction raises its boiling point relative to the para isomer. R: it forms fewer hydrogen bonds with neighbouring molecules than the para isomer does. Which combination is correct?",
    options: ["P and Q are correct", "Only R is correct", "P, Q and R are correct", "P and R are correct"],
    correctIndex: 3,
    explanation:
      "The ortho isomer does hydrogen bond inside its own molecule, and that bonding is then unavailable between molecules, so fewer intermolecular bonds form and the boiling point falls rather than rising, which leaves P and R correct and Q wrong.",
    evidence:
      "Intramolecular hydrogen bonding reduces the intermolecular attraction between molecules and lowers the boiling point.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "intramolecular bonding claims",
  },
  {
    key: "hbond-viscosity-of-glycerol",
    text: "Glycerol flows more slowly than a liquid hydrocarbon of similar molar mass mainly because",
    options: [
      "each molecule is tied to its neighbours by several hydrogen bonds, so more force is needed to move one layer past another",
      "its covalent bonds are stronger, so its molecules resist sliding past one another",
      "its molecules are larger, and molecular size is the only factor that raises viscosity",
      "it is denser, and denser liquids always flow more slowly than lighter ones",
    ],
    correctIndex: 0,
    explanation:
      "Every hydroxyl group of a glycerol molecule hydrogen bonds to neighbouring molecules, so the whole molecule is linked into the surrounding liquid by several attractions that must all be overcome before it can slip past them.",
    evidence:
      "Liquids whose molecules are joined by extensive hydrogen bonding, such as glycerol, are more viscous than liquids of similar mass held together only by dispersion forces.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-4.3",
    concept: "viscosity of glycerol",
  },
  {
    key: "hbond-highest-boiling-compound",
    text: "Four compounds of roughly the same molar mass are available: hexane, diethyl ether, butan-1-ol and butanoic acid. Which is expected to have the highest boiling point, and for what reason?",
    options: [
      "Hexane, because a larger nonpolar molecule always boils above anything else of the same mass",
      "Diethyl ether, because an oxygen atom of any kind creates a strong intermolecular attraction",
      "Butanoic acid, because its molecules form hydrogen-bonded dimers with one another",
      "Butan-1-ol, because an -OH group forms more hydrogen bonds than a -COOH group",
    ],
    correctIndex: 2,
    explanation:
      "A carboxylic acid links its molecules into cyclic dimers held by two hydrogen bonds each, so the particles that must be separated are larger and more firmly bound than those of the alcohol, ether or alkane of comparable mass.",
    evidence:
      "Carboxylic acids form hydrogen-bonded dimers and therefore boil at higher temperatures than ethers, alcohols or hydrocarbons of comparable molar mass.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-4.3",
    concept: "boiling point prediction",
  },
];
