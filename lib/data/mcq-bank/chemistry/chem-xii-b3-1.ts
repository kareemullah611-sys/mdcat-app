import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-benzene-sp2-plus-free-p-orbital",
    text: "In the molecular orbital treatment of benzene each carbon atom contributes orbitals that combine into a continuous pi system. The orbital set on each ring carbon consists of",
    options: [
      "three sp2 hybrid orbitals forming three sigma bonds, together with one unhybridised p orbital holding a single electron",
      "three sp2 hybrid orbitals forming three sigma bonds, with all six electrons already paired inside the hybrids",
      "four sp3 hybrid orbitals, three of which form sigma bonds to neighbouring carbons",
      "two sp hybrid orbitals forming the sigma skeleton, together with two unhybridised p orbitals",
    ],
    correctIndex: 0,
    explanation:
      "Each ring carbon uses three sp2 hybrids to make sigma bonds to its two neighbouring carbons and to its hydrogen; the single remaining unhybridised p orbital holds one electron and supplies the electron that joins the delocalised pi cloud.",
    evidence:
      "Each carbon of benzene is sp2 hybridised and retains one unhybridised p orbital available for pi bonding.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.8",
    concept: "hybridisation in benzene",
  },
  {
    key: "xii-benzene-sigma-framework-count",
    text: "Benzene has six carbon-carbon links in the ring and six carbon-hydrogen links. Counting every shared pair of electrons in the sigma framework alone, one molecule of benzene contains",
    options: ["6 sigma bonds", "12 sigma bonds", "18 sigma bonds", "24 sigma bonds"],
    correctIndex: 2,
    explanation:
      "The planar sigma skeleton needs six C-C sigma bonds plus six C-H sigma bonds, so twelve in all; the six pi electrons occupy the delocalised cloud above and below the ring and are not part of the sigma count.",
    evidence:
      "Each carbon of benzene forms three sigma bonds, two to adjacent carbons and one to hydrogen.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "CHEM-14.8",
    concept: "sigma framework",
  },
  {
    key: "xii-benzene-planarity-from-sp2",
    text: "Molecular orbital reasoning requires the six carbon nuclei of benzene to lie in one plane with ring angles near 120 degrees. That geometry follows because",
    options: [
      "the six hydrogen atoms are bulky enough to flatten the carbon ring",
      "the three sp2 hybrid orbitals on each carbon are coplanar and point about 120 degrees apart",
      "the pi electrons repel the carbon nuclei and push them into one plane",
      "each carbon forms four sigma bonds of equal length, which forces the ring flat",
    ],
    correctIndex: 1,
    explanation:
      "An sp2 carbon uses three coplanar hybrids, so the two C-C sigma bonds and the C-H sigma bond at each ring carbon must lie in one plane at about 120 degrees, which makes the six-carbon ring planar and regular.",
    evidence:
      "The carbon skeleton of benzene is a planar hexagon in which every ring carbon is sp2 hybridised.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-14.8",
    concept: "ring planarity",
  },
  {
    key: "xii-benzene-equal-cc-bond-length",
    text: "A carbon-carbon single bond measures about 154 pm and a carbon-carbon double bond about 134 pm. Compared with these reference values, the carbon-carbon distances in benzene, all of them 139 pm, are",
    options: [
      "longer than a single bond, showing that the ring bonds are weaker than ordinary C-C links",
      "identical to the double bond value, showing that the ring holds three localised C=C groups",
      "identical to the single bond value, showing that the ring is held by sigma bonding only",
      "shorter than a single bond but longer than a double bond, as expected for bonds of partial double-bond character",
    ],
    correctIndex: 3,
    explanation:
      "At 139 pm every ring C-C distance lies between the 154 pm single bond and the 134 pm double bond, which is the measure of delocalised pi electrons giving each of the six ring bonds partial double-bond character.",
    evidence:
      "All six carbon-carbon bonds of benzene are equal in length and their length lies between a single bond and a double bond.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-14.8",
    concept: "ring bond length",
  },
  {
    key: "xii-benzene-pi-cloud-above-and-below",
    text: "Regarding the bonding of benzene, the following statements are made. I - the six unhybridised p orbitals overlap side by side all round the ring. II - the resulting pi cloud lies above and below the plane of the ring. III - this pi cloud is what holds the ring atoms together. Which set of statements is correct?",
    options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
    correctIndex: 0,
    explanation:
      "Side-by-side overlap of the six p orbitals does give a continuous pi cloud above and below the ring, so I and II are correct; the sigma framework built from the sp2 hybrids holds the skeleton together and survives the loss of the pi cloud, so III is false.",
    evidence:
      "The unhybridised p orbitals of benzene overlap sideways to give delocalised pi electron clouds above and below the plane of the ring.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.8",
    concept: "pi electron cloud",
  },
  {
    key: "xii-benzene-ch-bond-in-ring-plane",
    text: "Each sp2 hybrid orbital of a ring carbon of benzene makes one of that carbon's three sigma bonds. The sigma bond to the hydrogen atom must therefore lie",
    options: [
      "perpendicular to the ring plane, standing above the ring",
      "in the ring plane, directed outwards from the centre of the ring",
      "in the ring plane, directed inwards towards the centre of the ring",
      "below the ring plane, making a 60 degree angle with the nearest C-C bond",
    ],
    correctIndex: 1,
    explanation:
      "The three sp2 hybrids of each ring carbon lie in the ring plane; two of them make the C-C sigma bonds and the third points away from the ring centre, so every C-H bond of benzene lies in the plane.",
    evidence:
      "The two sigma bonds to adjacent carbons and the bond to hydrogen at each ring carbon of benzene all lie in the plane of the ring.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-14.8",
    concept: "sigma bond orientation",
  },
  {
    key: "xii-benzene-circle-inside-hexagon",
    text: "Benzene is very often drawn as a plain hexagon with a circle inside it. The circle is a shorthand for",
    options: [
      "a ring held together by sigma bonding only, with no pi electrons present",
      "six separate pairs of electrons each locked onto one carbon of the ring",
      "six pi electrons spread evenly over all six ring carbons instead of three fixed double bonds",
      "three double bonds that jump from one position to another in rapid succession",
    ],
    correctIndex: 2,
    explanation:
      "The circle stands for the delocalised pi electron cloud that belongs to the whole ring; it is a static picture of bonding shared by all six carbons, not a set of double bonds moving around.",
    evidence:
      "Benzene is commonly drawn as a hexagon enclosing a circle that represents the delocalised pi electrons.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.8",
    concept: "delocalised pi electrons",
  },
  {
    key: "xii-benzene-localised-double-bonds-fail",
    text: "If the ring of benzene really carried three isolated C=C double bonds locked in fixed positions, two consequences should follow, and neither of them is observed in benzene. Those two consequences would be",
    options: [
      "all six ring carbons would still be chemically identical, because every one of them is sp2 hybridised",
      "the ring would have to fold out of a plane, because isolated double bonds forbid sideways overlap",
      "every ring carbon would carry two hydrogens, giving the saturated formula C6H12",
      "three C-C distances of about 134 pm and three of about 154 pm, with two different kinds of ring carbon carrying the hydrogens",
    ],
    correctIndex: 3,
    explanation:
      "A ring of three fixed isolated double bonds would behave like an ordinary polyene, with double-bond lengths of about 134 pm, single-bond lengths of about 154 pm and two distinct sets of ring positions; benzene instead shows six identical 139 pm distances and one single kind of ring carbon.",
    evidence:
      "The identical carbon-carbon bond lengths of benzene show that its pi electrons are delocalised rather than locked in fixed double bonds.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-14.8",
    concept: "localised versus delocalised",
  },
  {
    key: "xii-benzene-pi-molecular-orbitals",
    text: "The six unhybridised p orbitals of the benzene ring combine to give a set of pi molecular orbitals. In the ground state of benzene",
    options: [
      "the three bonding pi molecular orbitals are doubly occupied and the three antibonding levels are empty",
      "all six pi molecular orbitals are singly occupied, so the ring carries six unpaired electrons",
      "one pi molecular orbital holds all six pi electrons, which are therefore crowded together",
      "the six pi molecular orbitals are all antibonding, which is why the ring is unusually unstable",
    ],
    correctIndex: 1,
    explanation:
      "Six atomic p orbitals give six pi molecular orbitals, three bonding and three antibonding, and the six pi electrons of benzene exactly fill the three bonding levels to give a closed shell, which accounts for the unusual stability of the ring.",
    evidence:
      "Delocalisation of the six pi electrons over the ring gives benzene a closed-shell pi system of exceptional stability.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.8",
    concept: "pi molecular orbitals",
  },
  {
    key: "xii-benzene-meaning-of-resonance",
    text: "The term resonance, as applied to benzene, refers to the fact that",
    options: [
      "the real molecule is a single hybrid that no one classical formula can represent but which is described by its contributing structures taken together",
      "the real molecule alternates back and forth between two structures in rapid succession",
      "the compound is a pair of isomers of formula C6H6 that can be separated and stored",
      "the property belongs only to the products of benzene and not to benzene itself",
    ],
    correctIndex: 0,
    explanation:
      "Resonance is a property of one molecule whose true bonding lies between the classical structures offered, so the hybrid is more stable than any contributor and cannot be written as a single formula.",
    evidence:
      "The structure of benzene cannot be represented by a single classical formula and is described by resonance.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-14.9",
    concept: "definition of resonance",
  },
  {
    key: "xii-benzene-kekule-structure-pair",
    text: "The two classical structures normally drawn for benzene differ from one another only in",
    options: [
      "the number of hydrogen atoms attached to particular ring carbons",
      "the arrangement of the ring carbons in a plane or in a folded chain",
      "which three of the carbon-carbon links are drawn as double bonds",
      "the direction in which the six unhybridised p orbitals are said to point",
    ],
    correctIndex: 2,
    explanation:
      "The two Kekule structures keep the same atom positions and the same hydrogen count; only the choice of which alternating set of C-C links is drawn as double differs, and the real molecule is the hybrid of the two.",
    evidence:
      "Benzene is represented by two Kekule structures that differ only in the positions of the alternating double bonds.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-14.9",
    concept: "Kekule structures",
  },
  {
    key: "xii-benzene-resonance-not-isomerism",
    text: "Isomerism would require two different species, each with its own fixed set of bonds. Resonance is not a form of isomerism because",
    options: [
      "resonance structures cannot be drawn on paper at all",
      "only one real species exists, and the contributing structures are drawings of bonding that lies between them rather than separate molecules",
      "the two Kekule drawings of benzene contain different numbers of atoms",
      "resonance alters the molecular formula of the compound",
    ],
    correctIndex: 1,
    explanation:
      "The contributors are hypothetical limits of the same molecule and not isolable species; the true structure is the delocalised hybrid, so there is no equilibrium between two forms and no isomerism.",
    evidence:
      "Resonance structures are contributing forms of a single molecule and not distinct isomers.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-14.9",
    concept: "resonance versus isomerism",
  },
  {
    key: "xii-benzene-equivalent-ring-carbons",
    text: "Because the six pi electrons of benzene are delocalised evenly around the ring, all six carbon atoms of benzene are",
    options: [
      "identical in every respect, including in the way each one reacts when an electrophile attacks the ring",
      "different from one another, with three carrying electron-rich character and three electron-poor character",
      "identical in their sigma bonding but unequal in the share of pi electrons they hold",
      "identical only when the ring carries an electron-donating substituent",
    ],
    correctIndex: 0,
    explanation:
      "Uniform delocalisation gives every ring carbon the same environment, so monosubstituted benzene yields a single monosubstituted product and all six ring hydrogens react alike towards an electrophile.",
    evidence:
      "All six carbon atoms of benzene are equivalent because of the delocalised pi electron cloud.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-14.9",
    concept: "equivalent ring carbons",
  },
  {
    key: "xii-benzene-resonance-stability-statements",
    text: "For the two Kekule contributors of benzene the following statements are given. I - neither contributor is the real molecule. II - the real molecule is more stable than either contributor. III - the two contributors stand in dynamic equilibrium, each giving way to the other in turn. Which set of statements is correct?",
    options: [
      "I and III only",
      "II and III only",
      "I, II and III",
      "I and II only",
    ],
    correctIndex: 3,
    explanation:
      "Neither contributor is the real molecule (I) and the delocalised hybrid is more stable than either of them (II), but there is no equilibrium between two forms because the molecule is one single delocalised structure, so III is false.",
    evidence:
      "The resonance hybrid of benzene is more stable than any of its contributing structures.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.9",
    concept: "stability of the hybrid",
  },
  {
    key: "xii-benzene-resonance-energy-difference",
    text: "A hypothetical ring of three isolated carbon-carbon double bonds would be expected to give up about 360 kJ per mole on full hydrogenation to the saturated ring, whereas benzene gives up only about 208 kJ per mole. The shortfall of roughly 150 kJ per mole measures",
    options: [
      "the resonance energy of benzene, that is, the extra stability gained by delocalising the pi electrons",
      "the activation energy that must be supplied before benzene reacts at all",
      "the energy stored in the hydrogen that is consumed in the process",
      "an impossibility, because a chemical process cannot release less energy than theory allows",
    ],
    correctIndex: 0,
    explanation:
      "The difference of about 152 kJ per mole between the expected and the actual energy change is the delocalisation, or resonance, energy of benzene, and it quantifies the extra stability the ring gains from its continuous pi cloud.",
    evidence:
      "The resonance energy of benzene is about 150 kJ per mole, the extra stability provided by delocalisation of the pi electrons.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 99,
    outcome: "CHEM-14.9",
    concept: "resonance energy",
  },
  {
    key: "xii-benzene-stability-order",
    text: "Which sequence places the three species in order of increasing stability?",
    options: [
      "a hypothetical ring with three isolated double bonds < ethene < benzene",
      "benzene < a hypothetical ring with three isolated double bonds < ethene",
      "ethene < a hypothetical ring with three isolated double bonds < benzene",
      "ethane < benzene < a hypothetical ring with three isolated double bonds",
    ],
    correctIndex: 2,
    explanation:
      "Ethene has a single localised double bond and no delocalisation, the hypothetical three-double-bond ring gains stability from its three pi bonds, and benzene outranks that reference structure by its resonance energy of about 150 kJ per mole.",
    evidence:
      "Benzene is more stable than a hypothetical structure in which the ring carries three isolated double bonds.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.9",
    concept: "relative stability",
  },
  {
    key: "xii-benzene-single-picture-bond-order",
    text: "A single drawing is wanted that shows every ring C-C bond of benzene with a bond order of 1.5 and no separate double bonds. The drawing that does this is",
    options: [
      "one Kekule structure with three alternating double bonds, which gives three bonds of order 2 and three of order 1",
      "a hexagon with three double bonds drawn at the top and a lone pair marked on each carbon",
      "an open chain of six carbons with alternating double bonds, which sidesteps the question of bond order",
      "a hexagon with a circle inside it, since the six pi electrons belong to the ring and not to particular bonds",
    ],
    correctIndex: 3,
    explanation:
      "A circle inside the ring is the accepted shorthand for the delocalised pi cloud, and every C-C link then has bond order 1.5, whereas a Kekule drawing assigns order 2 to three bonds and order 1 to three others.",
    evidence:
      "The resonance hybrid of benzene is often drawn as a hexagon containing a circle to represent the delocalised pi electrons.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.9",
    concept: "hybrid representation",
  },
  {
    key: "xii-benzene-delocalisation-consequences",
    text: "Consider three claims about delocalisation in benzene. I - delocalisation of the pi electrons lowers the energy of the ring relative to any structure with three fixed double bonds. II - delocalisation lengthens every ring C-C distance towards the value of a pure single bond. III - delocalisation makes all six ring carbons equally available to an attacking electrophile. Which set of claims is correct?",
    options: ["I and III only", "I, II and III", "II and III only", "I and II only"],
    correctIndex: 0,
    explanation:
      "Delocalisation does lower the energy of the ring and does make all six carbons equally available to an electrophile, so I and III are correct; claim II reverses the bond-length effect, because delocalisation shortens the ring bonds to 139 pm, between a single bond and a double bond.",
    evidence:
      "Delocalisation of the pi electrons of benzene gives extra stability and equal reactivity at all six ring positions.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-14.9",
    concept: "consequences of delocalisation",
  },
  {
    key: "xii-benzene-substitution-instead-of-addition",
    text: "An electrophile brought into contact with a hydrocarbon may add across a carbon-carbon double bond or may replace a hydrogen atom. Benzene characteristically takes the second route because",
    options: [
      "substitution lets the ring rebuild its delocalised pi cloud, whereas addition would destroy that cloud for good",
      "benzene carries no ring carbon-hydrogen bonds available for substitution",
      "substitution converts the ring carbons from sp2 to sp3 and so releases ring strain",
      "the hydrogen atom displaced in substitution carries the ring pi electrons away with it",
    ],
    correctIndex: 0,
    explanation:
      "The electrophile uses the ring pi electrons, but in substitution the delocalised cloud is restored when the hydrogen leaves, so aromatic stabilisation is kept, while addition would break the cloud permanently and forfeit the resonance energy.",
    evidence:
      "Benzene characteristically undergoes electrophilic substitution because substitution preserves the aromatic system.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "CHEM-14.10",
    concept: "substitution versus addition",
  },
  {
    key: "xii-benzene-addition-loses-resonance-energy",
    text: "Compare adding an electrophile across one C=C link of the benzene ring with replacing a ring hydrogen by an electrophile. The comparison shows that",
    options: [
      "neither change disturbs the delocalised pi cloud, which is far too stable to be affected",
      "substitution destroys the delocalised pi cloud, whereas addition restores it",
      "addition and substitution both destroy the delocalised pi cloud equally",
      "addition destroys the delocalised pi cloud and forfeits the roughly 150 kJ per mole of resonance stabilisation, whereas substitution restores the cloud",
    ],
    correctIndex: 3,
    explanation:
      "In substitution the sigma bond to hydrogen breaks and a new sigma bond to the electrophile forms while the pi cloud continues to circulate, so aromaticity is preserved; in addition the delocalised system is destroyed and the whole resonance energy is lost.",
    evidence:
      "Addition across the benzene ring would destroy aromaticity and cost the resonance energy, so addition occurs only under forcing conditions.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-14.10",
    concept: "loss of aromaticity",
  },
  {
    key: "xii-benzene-electrophile-addition-order",
    text: "Which sequence lists three hydrocarbons in decreasing order of the ease with which they react with an electrophile that adds to a carbon-carbon double bond?",
    options: [
      "ethane > ethene > benzene",
      "ethene > benzene > ethane",
      "benzene > ethene > ethane",
      "benzene > ethane > ethene",
    ],
    correctIndex: 1,
    explanation:
      "Ethene adds readily because its pi electrons are localised and nothing is lost, benzene adds only under forcing conditions because addition costs it the whole resonance energy, and ethane has no pi bond at all and so cannot undergo electrophilic addition.",
    evidence:
      "Benzene is less reactive than alkenes towards electrophilic addition but more reactive than alkanes.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-14.10",
    concept: "reactivity order",
  },
  {
    key: "xii-benzene-bond-length-order",
    text: "The three carbon-carbon distances listed below can be placed in order of length. Which sequence lists them in increasing order?",
    options: [
      "benzene (139 pm) < ethene (134 pm) < ethane (154 pm)",
      "ethane (154 pm) < ethene (134 pm) < benzene (139 pm)",
      "ethane (154 pm) < benzene (139 pm) < ethene (134 pm)",
      "ethene (134 pm) < benzene (139 pm) < ethane (154 pm)",
    ],
    correctIndex: 2,
    explanation:
      "A carbon-carbon single bond at 154 pm is the longest, the ring bonds of benzene at 139 pm have partial double-bond character, and a localised carbon-carbon double bond at 134 pm is the shortest.",
    evidence:
      "The carbon-carbon bond length in benzene is intermediate between a single bond and a double bond.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-14.10",
    concept: "bond length order",
  },
  {
    key: "xii-benzene-versus-alkene-pi-electrons",
    text: "Ethene and benzene both hold pi electrons and both can be attacked by an electrophile, yet their behaviour differs sharply. The decisive difference is that",
    options: [
      "ethene has no carbon-carbon double bond, so an electrophile has nothing to attack there",
      "benzene carries more ring hydrogens than ethene, so its pi electrons are held less firmly",
      "in ethene the pi electrons are localised between two carbons, whereas in benzene they are delocalised over all six",
      "ethene is sp3 hybridised while every ring carbon of benzene is sp2 hybridised",
    ],
    correctIndex: 2,
    explanation:
      "Ethene offers a localised pi bond and loses nothing when an electrophile adds, whereas benzene can only add by destroying a delocalised cloud worth about 150 kJ per mole, so it is markedly less reactive towards an electrophile.",
    evidence:
      "Benzene is less reactive than alkenes towards electrophilic addition because addition destroys aromaticity.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-14.10",
    concept: "pi electron availability",
  },
  {
    key: "xii-benzene-forcing-conditions-for-addition",
    text: "Under severe conditions benzene can be made to take up three molecules of hydrogen and so lose its aromatic character entirely. Such forcing is necessary because",
    options: [
      "the ring hydrogen atoms become unusually strong bonds at high temperature",
      "the six ring carbons lose their sp2 character once the ring is hydrogenated",
      "the delocalised pi cloud repels hydrogen until its own stored energy is used up",
      "the delocalised pi cloud is highly stabilised and addition destroys it for good",
    ],
    correctIndex: 3,
    explanation:
      "The ring is held together energetically by a resonance energy of about 150 kJ per mole, so an addition reaction that destroys the delocalised cloud needs a large input of energy and occurs only under forcing conditions.",
    evidence:
      "Benzene undergoes addition only under forcing conditions because addition destroys aromaticity.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.10",
    concept: "forcing conditions",
  },
  {
    key: "xii-benzene-reaction-type-versus-alkane",
    text: "Benzene is more reactive than an alkane but less reactive than an alkene towards an electrophile. The reaction type that follows for benzene is",
    options: [
      "electrophilic substitution of a ring hydrogen",
      "electrophilic addition across a ring carbon-carbon bond",
      "free radical substitution at a ring hydrogen by a halogen under light",
      "no reaction of any kind towards an electrophile",
    ],
    correctIndex: 1,
    explanation:
      "Because benzene is more reactive than an alkane it reacts with an electrophile, and because it is less reactive than an alkene it reacts by substitution, using its pi electrons to replace a ring hydrogen while keeping the delocalised cloud.",
    evidence:
      "Benzene is more reactive than alkanes and less reactive than alkenes, so it undergoes electrophilic substitution rather than addition.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-14.10",
    concept: "characteristic reaction type",
  },
];