import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-eas-addition-limited-by-aromaticity",
    text: "Addition reactions of benzene are described as unusual because",
    options: [
      "the three pi bonds of the ring occupy fixed positions and cannot be attacked",
      "the ring is stabilised by delocalised pi electrons, and adding across the double bonds removes that aromatic stabilisation",
      "every carbon of benzene already carries the maximum number of hydrogen atoms it can hold",
      "benzene reacts only with compounds that dissolve in organic solvents",
    ],
    correctIndex: 1,
    explanation:
      "The gain in energy from forming two extra sigma bonds is smaller than the aromatic stabilisation that is lost, so addition to benzene happens only under forcing conditions.",
    evidence:
      "Benzene shows addition reactions only under drastic conditions because addition destroys the aromatic character of the ring.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "CHEM-14.11",
    concept: "aromatic stability",
  },
  {
    key: "xii-eas-hydrogenation-of-benzene-product",
    text: "When benzene is heated with hydrogen in the presence of a nickel catalyst at high temperature and high pressure, the product formed is",
    options: ["cyclohexane", "cyclohexene", "hexane", "methylcyclopentane"],
    correctIndex: 0,
    explanation:
      "All three pi bonds of benzene take up hydrogen, so the aromatic ring becomes the saturated carbocycle cyclohexane in which there is no delocalised electron cloud.",
    evidence:
      "Benzene is hydrogenated to cyclohexane over a nickel catalyst at high temperature and high pressure.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "CHEM-14.11",
    concept: "benzene hydrogenation",
  },
  {
    key: "xii-eas-hydrogen-moles-for-full-addition",
    text: "Complete addition of hydrogen to a benzene ring requires",
    options: [
      "one molecule of hydrogen for each ring",
      "two molecules of hydrogen for each ring",
      "three molecules of hydrogen for each ring",
      "six molecules of hydrogen for each ring",
    ],
    correctIndex: 2,
    explanation:
      "Each of the three delocalised pi bonds accepts one hydrogen molecule, so a benzene ring takes up three H2 molecules before every carbon becomes saturated.",
    evidence:
      "Addition of three molecules of hydrogen converts benzene into cyclohexane.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-14.11",
    concept: "hydrogen addition ratio",
  },
  {
    key: "xii-eas-sunlight-chlorination-gives-hexachloride",
    text: "Chlorination of benzene in the presence of sunlight instead of a halogen carrier gives",
    options: [
      "chlorobenzene together with hydrogen chloride",
      "1,2,3,4,5,6-hexachlorocyclohexane",
      "1,2-dichlorobenzene together with two molecules of hydrogen chloride",
      "cyclohexane together with chlorine",
    ],
    correctIndex: 1,
    explanation:
      "In ultraviolet light the reaction is an addition in which three chlorine molecules add across the three double bonds, so the product is a saturated ring with one chlorine on each carbon.",
    evidence:
      "Benzene adds chlorine in sunlight to form benzene hexachloride, an addition product.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-14.11",
    concept: "photochemical addition",
  },
  {
    key: "xii-eas-methylbenzene-hydrogenation-product",
    text: "Complete hydrogenation of methylbenzene under forcing conditions produces",
    options: [
      "methylcyclohexane",
      "1,2-dimethylcyclopentane",
      "cyclohexane together with methane",
      "1-methylcyclohexene",
    ],
    correctIndex: 0,
    explanation:
      "Hydrogenation saturates the ring without breaking any carbon-carbon bond, so the methyl group stays on the ring carbon and the product is methylcyclohexane.",
    evidence:
      "Methylbenzene adds hydrogen under drastic conditions to give methylcyclohexane.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-14.11",
    concept: "methylbenzene hydrogenation",
  },
  {
    key: "xii-eas-sunlight-versus-halogen-carrier",
    text: "In sunlight benzene and chlorine combine by addition, while in the presence of a halogen carrier chlorobenzene is formed. The difference arises because",
    options: [
      "the halogen carrier is needed only to remove the colour of chlorine before it reaches the ring",
      "sunlight raises the temperature enough to turn the aromatic ring into an ordinary cyclohexene ring",
      "sunlight breaks the chlorine molecules so that they add across the double bonds, whereas the halogen carrier polarises chlorine to generate the electrophile needed for substitution",
      "substitution needs a catalyst because a hydrogen atom cannot leave the ring by itself",
    ],
    correctIndex: 2,
    explanation:
      "Photochemical addition gives no stable product because the delocalised pi system is lost, whereas a halogen carrier creates a strong electrophile that replaces ring hydrogen and restores aromaticity.",
    evidence:
      "Halogen carriers such as FeBr3 generate the electrophile that makes substitution, and are not required for the photochemical addition of chlorine to benzene.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-14.11",
    concept: "addition versus substitution",
  },
  {
    key: "xii-eas-methylbenzene-versus-benzene-addition",
    text: "Methylbenzene reacts with hydrogen under forcing conditions more readily than benzene does. The reason is that",
    options: [
      "the methyl group blocks the ortho and para ring positions from taking up hydrogen",
      "the methyl group releases electron density into the ring, which makes the ring carbons more easily attacked",
      "methylbenzene has no delocalised electron cloud and so is already partly saturated",
      "the methyl group of methylbenzene is itself converted into hydrogen during the reaction",
    ],
    correctIndex: 1,
    explanation:
      "Hyperconjugation and electron release from the methyl group raise the electron density of the ring, so electrophiles, hydrogen included, attack it more readily than they attack benzene.",
    evidence:
      "Methylbenzene is more reactive towards electrophilic attack than benzene because of the electron releasing methyl group.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-14.11",
    concept: "methyl group activation",
  },
  {
    key: "xii-eas-addition-product-statements",
    text: "For the addition of chlorine to benzene in sunlight: Statement I: the product is a saturated carbocycle. Statement II: the product still carries the delocalised electron cloud of benzene. Statement III: aromatic stabilisation is absent from the product.",
    options: [
      "Only statements I and III are correct",
      "Only statement II is correct",
      "All three statements are correct",
      "Only statements I and II are correct",
    ],
    correctIndex: 0,
    explanation:
      "Addition places a chlorine on every ring carbon and consumes all three pi bonds, so the product is saturated and has no delocalised electron cloud to give it aromatic stabilisation.",
    evidence:
      "The photochemical addition product of benzene is a saturated cyclohexane ring in which aromaticity has been lost.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-14.11",
    concept: "aromaticity in addition product",
  },
  {
    key: "xii-eas-no-addition-of-hydrogen-bromide",
    text: "Benzene does not add hydrogen bromide. The best explanation is that",
    options: [
      "the bromine atom is too large to be accommodated between two adjacent ring carbons",
      "hydrogen bromide dissolves in benzene and so never reaches the ring",
      "the bromine of hydrogen bromide is bonded to hydrogen so firmly that the ring cannot attack it",
      "addition would convert the aromatic ring into a non-aromatic ring, and the lost aromatic stabilisation is not compensated by the energy released",
    ],
    correctIndex: 3,
    explanation:
      "Any addition to the ring of benzene removes the delocalised pi system, so the energy given out by forming new sigma bonds is not enough to pay for the loss of aromatic stabilisation.",
    evidence:
      "Hydrogens halides do not add to benzene because such addition would destroy aromaticity.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-14.11",
    concept: "addition energetics",
  },
  {
    key: "xii-eas-addition-limited-versus-alkenes",
    text: "Aromatic hydrocarbons undergo addition only under forcing conditions, whereas alkenes add readily under mild ones. The difference arises because",
    options: [
      "the carbons of an alkene are sp2 hybridised while those of an aromatic ring are sp3 hybridised",
      "an aromatic ring contains no carbon-carbon double bonds that an addend could attack",
      "the delocalised pi electron cloud of an aromatic ring gives an aromatic stabilisation that addition destroys, whereas alkene addition loses no comparable stabilisation",
      "alkenes are larger molecules and therefore absorb more energy during an addition reaction",
    ],
    correctIndex: 2,
    explanation:
      "An alkene keeps an intact delocalised system after addition only in the sense that nothing is lost, since no ring aromaticity exists; an aromatic ring must lose its delocalisation, which is energetically costly.",
    evidence:
      "The resistance of benzene to addition is attributed to the large aromatic stabilisation energy of the ring.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-14.11",
    concept: "aromatic stabilisation energy",
  },
  {
    key: "xii-eas-attacking-species-in-halogenation",
    text: "In the halogenation of benzene by a halogen carrier, the species that actually attacks the ring is",
    options: [
      "a free chlorine atom released by the carrier",
      "a positively charged halogen species generated by the carrier",
      "a negatively charged bromide ion",
      "a hydrogen molecule bonded to the carrier",
    ],
    correctIndex: 1,
    explanation:
      "The carrier polarises the halogen molecule so that one end becomes electron deficient, and this positively charged halogen species is the electrophile that the ring attacks.",
    evidence:
      "A halogen carrier such as FeBr3 converts the halogen into an electrophile that attacks benzene.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.12",
    concept: "electrophile generation",
  },
  {
    key: "xii-eas-electrophile-for-nitration",
    text: "The electrophile responsible for the nitration of benzene is",
    options: [
      "the nitronium ion, NO2+",
      "the ammonium ion, NH4+",
      "the nitrite ion, NO2-",
      "the ammonium nitrate ion pair",
    ],
    correctIndex: 0,
    explanation:
      "Nitric acid and sulphuric acid together generate the nitronium ion, which carries a positive charge and is therefore the attacking species in the substitution step.",
    evidence:
      "Nitration of benzene proceeds through the nitronium ion formed by the action of sulphuric acid on nitric acid.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-14.12",
    concept: "nitronium electrophile",
  },
  {
    key: "xii-eas-name-of-cationic-intermediate",
    text: "The positively charged intermediate formed when an electrophile attacks benzene is called the",
    options: [
      "carbocation produced by cleavage of a carbon-carbon bond",
      "free radical produced by homolysis of the ring",
      "nucleophilic adduct of the ring",
      "arenium ion, also called the sigma complex",
    ],
    correctIndex: 3,
    explanation:
      "The pi electrons of the ring form a bond to the electrophile, so the intermediate carries a positive charge and a tetrahedral carbon; it is known as the arenium ion or sigma complex.",
    evidence:
      "The arenium ion, or sigma complex, is the delocalised carbocation intermediate of electrophilic aromatic substitution.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-14.12",
    concept: "arenium ion",
  },
  {
    key: "xii-eas-charge-delocalisation-in-arenium-ion",
    text: "In the arenium ion formed during electrophilic substitution of benzene, the positive charge is",
    options: [
      "confined to the ring carbon that carries the electrophile",
      "spread evenly over all six ring carbons",
      "delocalised over the ortho and para ring positions relative to the carbon that carries the electrophile",
      "located entirely on the attacking electrophile",
    ],
    correctIndex: 2,
    explanation:
      "The carbon bearing the electrophile becomes tetrahedral and has no p orbital, so the positive charge is shared by the three ring positions that are ortho and para to it.",
    evidence:
      "In the sigma complex the positive charge is delocalised over the ortho and para positions of the ring.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.12",
    concept: "sigma complex charge",
  },
  {
    key: "xii-eas-order-of-mechanism-steps",
    text: "In the mechanism of electrophilic substitution of benzene, the correct order of the steps is",
    options: [
      "attack of the ring, generation of the electrophile, loss of the proton, regeneration of the catalyst",
      "generation of the electrophile, loss of the proton, attack of the ring, regeneration of the catalyst",
      "loss of the proton, generation of the electrophile, regeneration of the catalyst, attack of the ring",
      "generation of the electrophile, attack by the pi electrons to give the arenium ion, loss of the proton, regeneration of the catalyst",
    ],
    correctIndex: 3,
    explanation:
      "The electrophile must exist before the ring can attack it, the arenium ion must form before a proton can leave, and the catalyst is only returned to its original form after the proton has gone.",
    evidence:
      "Electrophilic substitution of benzene proceeds in ordered stages: electrophile formation, arenium ion formation, proton loss and regeneration of the catalyst.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.12",
    concept: "mechanism step order",
  },
  {
    key: "xii-eas-hydrogen-leaves-as-proton",
    text: "During electrophilic substitution of benzene, the displaced hydrogen leaves as",
    options: [
      "a proton from the ring carbon that received the electrophile",
      "a hydrogen atom from a ring carbon adjacent to the site of attack",
      "a hydride ion from the electrophile",
      "a hydrogen atom already bonded to the catalyst",
    ],
    correctIndex: 0,
    explanation:
      "Only the loss of the proton from the carbon that received the electrophile returns that carbon to the ring system, so the continuous delocalised pi cloud is restored.",
    evidence:
      "The proton is lost from the carbon that received the electrophile, restoring aromaticity in the product.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.12",
    concept: "proton elimination",
  },
  {
    key: "xii-eas-catalyst-regenerated-after-proton-loss",
    text: "After the proton removed from the arenium ion is taken up by the counter-ion of the halogen carrier, the catalyst is",
    options: [
      "regenerated in its original form",
      "used up as hydrogen bromide and lost from the reaction",
      "attached to the ring carbon that gave up its hydrogen",
      "reduced to the free metal by the leaving proton",
    ],
    correctIndex: 0,
    explanation:
      "The proton converts the anion of the catalyst complex back into the carrier, for example FeBr4- gives FeBr3 and hydrogen bromide, so the catalyst can act again.",
    evidence:
      "The halogen carrier is regenerated at the end of the substitution step when the counter-ion accepts the proton.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-14.12",
    concept: "catalyst regeneration",
  },
  {
    key: "xii-eas-substitution-preferred-over-addition",
    text: "When a catalyst is present, benzene undergoes substitution instead of addition because",
    options: [
      "the catalyst first removes the delocalised electrons from the ring so that substitution can begin",
      "the hydrogen atom is replaced by the electrophile and the delocalised pi system is then rebuilt, so aromatic stabilisation is recovered",
      "the ring carbons are already fully bonded and can accept no new sigma bonds",
      "substitution requires no bond in the ring to be broken at any stage",
    ],
    correctIndex: 1,
    explanation:
      "The substitution product regains the aromatic stabilisation energy, which an addition product can never recover, so substitution is the lower energy pathway.",
    evidence:
      "Benzene prefers substitution to addition because substitution restores the aromaticity that addition would destroy.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.12",
    concept: "substitution over addition",
  },
  {
    key: "xii-eas-step-that-decides-position",
    text: "The position at which a substituent already present directs further substitution is decided during",
    options: [
      "the formation of the arenium ion, because a substituent stabilises the arenium ions produced by attack at the positions to which it directs",
      "the generation of the electrophile, because the catalyst can deliver the electrophile to only one ring carbon",
      "the loss of the proton, because that is the slowest step of the mechanism",
      "the regeneration of the catalyst, because it fixes the position of the new substituent",
    ],
    correctIndex: 0,
    explanation:
      "Different positions give arenium ions of different stability, and the substituent favours the pathway through its lowest energy intermediate, which fixes the position of the new group.",
    evidence:
      "The orientation of further substitution follows from the relative stability of the arenium ions formed at the different ring positions.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.12",
    concept: "regiochemistry control",
  },
  {
    key: "xii-eas-major-products-of-methylbenzene-nitration",
    text: "Nitration of methylbenzene gives mainly",
    options: [
      "the meta product, since the methyl group blocks both ortho positions",
      "equal amounts of the ortho, meta and para products",
      "the ortho and meta products only, with no para product",
      "the ortho and para products, together with a small proportion of the meta product",
    ],
    correctIndex: 3,
    explanation:
      "The methyl group releases electron density and directs substitution to the ortho and para positions, so those two products dominate and only a little of the meta product is formed.",
    evidence:
      "Nitration of methylbenzene yields chiefly the ortho and para products and only a small amount of the meta product.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-14.12",
    concept: "methylbenzene nitration",
  },
  {
    key: "xii-eas-rate-of-nitration-of-nitrobenzene",
    text: "Compared with benzene, nitrobenzene undergoes nitration",
    options: [
      "more rapidly, because the nitro group donates electron density to the ring",
      "much more slowly, because the nitro group withdraws electron density from the ring",
      "at the same rate, because aromatic rings are not affected by substituents",
      "more rapidly only when the temperature is raised",
    ],
    correctIndex: 1,
    explanation:
      "The nitro group pulls electron density away from the ring, so the ring resists attack by the electrophile and a higher temperature or a stronger catalyst is needed.",
    evidence:
      "A nitro group deactivates the benzene ring and makes further electrophilic substitution much slower.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.12",
    concept: "nitro group deactivation",
  },
  {
    key: "xii-eas-effect-of-hydroxyl-group-on-rate",
    text: "A benzene ring that carries a hydroxyl group undergoes electrophilic substitution",
    options: [
      "more slowly, because the hydroxyl group lowers the electron density of the ring",
      "only at temperatures that leave benzene unchanged",
      "more rapidly, because the oxygen lone pair releases electron density into the ring",
      "more rapidly only in the presence of a halogen carrier",
    ],
    correctIndex: 2,
    explanation:
      "An oxygen lone pair is donated into the ring, raising its electron density and stabilising the arenium ion, so the ring is attacked readily and substitution occurs mainly ortho and para to the hydroxyl group.",
    evidence:
      "Hydroxyl and amino groups are activating and direct further substitution to the ortho and para positions.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-14.12",
    concept: "hydroxyl activation",
  },
  {
    key: "xii-eas-halogen-deactivating-yet-ortho-para",
    text: "A halogen substituent on a benzene ring lowers the rate of further electrophilic substitution, yet the new group still enters mainly at the ortho and para positions. Both facts follow from",
    options: [
      "a single strong electron withdrawing effect, which reduces the electron density of the ring",
      "the large size of the halogen atoms, which physically blocks attack at nearby positions",
      "the ability of the halogen to withdraw electron density, which makes the meta position the most reactive site",
      "two competing effects: an overall electron withdrawing effect that reduces reactivity, and lone pair donation into the ring that stabilises the arenium ion from ortho and para attack",
    ],
    correctIndex: 3,
    explanation:
      "Lone pair donation by the halogen stabilises the arenium ion formed by ortho or para attack, so those positions are preferred, while the dominant electron withdrawing effect makes the ring less reactive than benzene.",
    evidence:
      "Halogens deactivate the benzene ring but direct further substitution to the ortho and para positions.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 95,
    outcome: "CHEM-14.12",
    concept: "halogen directing effect",
  },
  {
    key: "xii-eas-mechanism-statements",
    text: "Four statements describe the mechanism of electrophilic substitution in benzene. Statement I: the catalyst generates the electrophile and is regenerated at the end. Statement II: the pi electrons of the ring attack the electrophile to give a cationic sigma complex. Statement III: the displaced hydrogen leaves as a proton from a ring carbon adjacent to the site of attack. Statement IV: aromaticity is absent while the sigma complex exists and returns when the proton leaves.",
    options: [
      "Only statements I, II and IV are correct",
      "Only statements II and III are correct",
      "All four statements are correct",
      "Only statements I and IV are correct",
    ],
    correctIndex: 0,
    explanation:
      "The proton departs from the carbon that received the electrophile, not from an adjacent carbon, while the other three statements describe the standard stages of the mechanism.",
    evidence:
      "In electrophilic substitution the proton is lost from the carbon that received the electrophile, and the catalyst is regenerated at the end.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-14.12",
    concept: "mechanism statement check",
  },
  {
    key: "xii-eas-second-nitration-of-nitrobenzene",
    text: "A benzene ring already bears a nitro group. When this ring is nitrated again, the new nitro group enters at the meta position and the reaction is far slower than the nitration of benzene. Both observations follow from",
    options: [
      "the first nitro group donating electron density, which speeds up the second substitution",
      "the meta position carrying the highest electron density in a ring that bears a nitro group",
      "the nitro group withdrawing electron density and destabilising the arenium ions from ortho and para attack, so the less destabilised meta intermediate forms slowly but selectively",
      "two nitro groups repelling each other, so the second nitro group always takes the para position",
    ],
    correctIndex: 2,
    explanation:
      "Attack at the meta position avoids putting the positive charge next to the electron withdrawing nitro group, so that arenium ion is the least destabilised one, but the whole ring is still less reactive than benzene.",
    evidence:
      "A nitro group is a deactivating meta directing group, so further substitution of nitrobenzene is slower and occurs mainly at the meta position.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 95,
    outcome: "CHEM-14.12",
    concept: "meta directing group",
  },
];
