import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "organelle-nucleolus-ribosome-assembly",
    text: "Inside the nucleus, a dense non-membranous region is the site where ribosomal RNA is synthesised and the two ribosomal subunits are assembled. This region is the",
    options: ["Nucleolus", "Nucleoplasm", "Chromatin network", "Nuclear pore complex"],
    correctIndex: 0,
    explanation:
      "The nucleolus has no surrounding membrane and is where rRNA is transcribed and the large and small ribosomal subunits are assembled before export through nuclear pores.",
    evidence:
      "The nucleolus is a dense non-membranous region of the nucleus where ribosomal RNA is made and ribosomal subunits are assembled.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "BIO-4.3",
    concept: "nucleolus function",
  },
  {
    key: "organelle-nuclear-pore-traffic",
    text: "Traffic between the nucleoplasm and the cytoplasm is controlled by openings that perforate the double-membraned nuclear envelope. Which structures form these openings?",
    options: ["Cristae", "Nuclear pores", "Golgi cisternae", "Thylakoid spaces"],
    correctIndex: 1,
    explanation:
      "Nuclear pores perforate the nuclear envelope and allow messenger RNA, ribosomal subunits and proteins to move in and out of the nucleus; cristae belong to mitochondria and cisternae to the Golgi.",
    evidence:
      "The nuclear envelope is perforated by numerous nuclear pores that regulate exchange between the nucleoplasm and the cytoplasm.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "BIO-4.3",
    concept: "nuclear envelope pores",
  },
  {
    key: "organelle-chromatin-hereditary-information",
    text: "Genetic instructions in the nucleus are carried on chromatin, which is DNA associated with histone proteins. The chief role of chromatin is to",
    options: [
      "Synthesise the phospholipids of the nuclear envelope",
      "Assemble the subunits of cytoplasmic ribosomes",
      "Store the cell's hereditary information",
      "Carry out translation of messenger RNA",
    ],
    correctIndex: 2,
    explanation:
      "Chromatin is the DNA-protein material of the nucleus and its function is to store and protect hereditary information. Phospholipids are made in the smooth ER, ribosomal subunits are built in the nucleolus, and translation occurs on cytoplasmic or mitochondrial ribosomes.",
    evidence:
      "Chromatin, the DNA and protein material of the nucleus, stores the cell's hereditary information.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-4.3",
    concept: "chromatin function",
  },
  {
    key: "organelle-nucleus-enucleation",
    text: "The nucleus of a cell is removed although the cytoplasm and the plasma membrane stay intact. Which change should be expected first?",
    options: [
      "ATP generation stops within minutes",
      "Worn-out organelles are digested at an increased rate",
      "New phospholipid synthesis switches to the smooth ER",
      "The cell can no longer direct transcription of its own genes",
    ],
    correctIndex: 3,
    explanation:
      "Transcription of nuclear genes stops once the nucleus is gone, so no new nuclear-encoded messenger RNA is made. Existing enzymes and substrates let respiration, digestion and lipid synthesis continue for a while.",
    evidence: "The nucleus directs the activities of the cell by controlling gene expression.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "BIO-4.3",
    concept: "nuclear control of activity",
  },
  {
    key: "organelle-ribosome-non-membranous",
    text: "Ribosomes are counted among the cell organelles although they behave differently from mitochondria, lysosomes and the Golgi apparatus. The structural feature that sets ribosomes apart is that they",
    options: [
      "Are surrounded by no membrane of their own",
      "Contain only protein and no RNA",
      "Are always attached to a flattened membrane sac",
      "Lack any large and small subunits",
    ],
    correctIndex: 0,
    explanation:
      "Ribosomes are non-membrane-bound particles made of ribosomal RNA and protein arranged in two subunits, whereas mitochondria, lysosomes and the Golgi apparatus are all enclosed by membranes.",
    evidence: "Ribosomes are small non-membrane-bound particles composed of rRNA and proteins.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "BIO-4.3",
    concept: "ribosome structure",
  },
  {
    key: "organelle-ribosome-free-versus-bound",
    text: "One group of proteins stays free in the cytosol while another group is released from the cell. The two groups are made by different kinds of ribosome because",
    options: [
      "Bound ribosomes make cytosolic proteins while free ribosomes make secreted proteins",
      "Free ribosomes make cytosolic proteins while ribosomes bound to the rough ER make secreted and membrane proteins",
      "Only ribosomes bound to the Golgi apparatus make exported proteins",
      "Both groups are translated on ribosomes inside the nucleoplasm",
    ],
    correctIndex: 1,
    explanation:
      "Proteins destined for secretion or for membranes enter the ER during translation on bound ribosomes, whereas cytosolic proteins are completed on free cytoplasmic ribosomes. Ribosomes do not work inside the nucleoplasm.",
    evidence:
      "Free ribosomes synthesise cytosolic proteins while ribosomes bound to the rough ER synthesise secretory and membrane proteins.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "BIO-4.3",
    concept: "free versus bound ribosomes",
  },
  {
    key: "organelle-ribosome-80s-versus-70s",
    text: "Ribosomes taken from the cytosol and from a mitochondrion of the same cell are compared. Which description of the difference is accurate?",
    options: [
      "The cytosolic ribosome is 70S and the mitochondrial ribosome is 80S because mitochondrial proteins are larger",
      "Both ribosomes are 80S because the same genetic message is read in both compartments",
      "The cytosolic ribosome is 80S and splits into 60S and 40S subunits, while the mitochondrial ribosome is 70S and splits into 50S and 30S subunits",
      "The mitochondrial ribosome contains no ribosomal RNA and is made entirely of protein",
    ],
    correctIndex: 2,
    explanation:
      "Cytoplasmic ribosomes sediment at 80S and dissociate into 60S and 40S subunits, while the mitochondrial 70S ribosome dissociates into 50S and 30S subunits, a bacterial-type arrangement that matches the organelle's own circular DNA.",
    evidence: "Cytoplasmic ribosomes are 80S while the ribosomes of mitochondria are 70S.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 90,
    outcome: "BIO-4.3",
    concept: "ribosome sedimentation",
  },
  {
    key: "organelle-rough-er-secretory-synthesis",
    text: "Proteins destined for secretion or for insertion into membranes are made on ribosomes sitting on the cytoplasmic face of the endoplasmic reticulum. Why does this attachment matter?",
    options: [
      "It converts the ribosome from an 80S particle into a 70S particle",
      "It allows the ribosome to move into the nucleolus for assembly",
      "It frees the ribosome from any dependence on messenger RNA",
      "It lets the growing chain feed directly into the ER lumen for folding and onward transport",
    ],
    correctIndex: 3,
    explanation:
      "A ribosome bound to the ER feeds its growing polypeptide chain into the ER lumen or membrane, where the chain folds and is packaged for onward transport. Binding changes nothing about ribosome type or its dependence on messenger RNA.",
    evidence:
      "Ribosomes bound to the rough ER synthesise secretory and membrane proteins and feed the growing chain into the ER.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "BIO-4.3",
    concept: "rough endoplasmic reticulum",
  },
  {
    key: "organelle-rough-er-nuclear-continuity",
    text: "A membrane-bound sac in a cell is continuous with the outer membrane of the nuclear envelope and carries 80S ribosomes on its cytosolic surface. Its correct identification is",
    options: ["Rough endoplasmic reticulum", "Smooth endoplasmic reticulum", "Golgi apparatus", "Lysosome"],
    correctIndex: 0,
    explanation:
      "Continuity with the nuclear envelope plus ribosomes studding the cytosolic face identifies the rough ER. The smooth ER has no ribosomes, while the Golgi apparatus and lysosome are separate downstream compartments.",
    evidence:
      "The rough endoplasmic reticulum is continuous with the outer nuclear membrane and bears 80S ribosomes on its surface.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-4.3",
    concept: "endoplasmic reticulum continuity",
  },
  {
    key: "organelle-smooth-er-lipid-synthesis",
    text: "Tubular membranes that carry no attached ribosomes make up the smooth endoplasmic reticulum. Its main synthetic product is",
    options: [
      "Proteins for export from the cell",
      "Lipids such as phospholipids and steroids",
      "Ribosomal subunits for the nucleolus",
      "Enzymes of the Krebs cycle",
    ],
    correctIndex: 1,
    explanation:
      "With no ribosomes attached the smooth ER cannot make proteins, and it synthesises lipids such as phospholipids and steroids instead. Ribosomal subunits are built in the nucleolus and Krebs cycle enzymes lie in the mitochondrial matrix.",
    evidence:
      "The smooth endoplasmic reticulum lacks ribosomes and synthesises lipids as well as detoxifying harmful substances.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "BIO-4.3",
    concept: "smooth endoplasmic reticulum",
  },
  {
    key: "organelle-smooth-er-detoxification",
    text: "Certain cells exposed repeatedly to drugs and other toxins develop unusually extensive smooth endoplasmic reticulum. This response makes sense because the smooth ER",
    options: [
      "Is the site at which polypeptides for secretion are made",
      "Houses the acid hydrolases used to digest engulfed material",
      "Carries enzymes that chemically detoxify harmful substances",
      "Forms the cristae on which respiration depends",
    ],
    correctIndex: 2,
    explanation:
      "Smooth ER carries detoxifying enzymes, so it expands in cells that handle many toxins. Secretory proteins are made on the rough ER, acid hydrolases sit in lysosomes, and cristae belong to mitochondria.",
    evidence: "Smooth ER detoxifies drugs and poisons and is abundant in cells exposed to them.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "BIO-4.3",
    concept: "cellular detoxification",
  },
  {
    key: "organelle-transitional-er-vesicles",
    text: "A secretory protein has just been completed on a ribosome of the rough endoplasmic reticulum. Which step directly follows inside the same cell?",
    options: [
      "Immediate digestion by a lysosome that fuses with the ER",
      "Transfer to the nucleolus for reassembly of subunits",
      "Insertion into the mitochondrial inner membrane",
      "Collection in the transitional region of the ER, which buds off transport vesicles",
    ],
    correctIndex: 3,
    explanation:
      "Newly made secretory proteins move into the transitional region of the rough ER, where transport vesicles bud off and carry them to the Golgi apparatus.",
    evidence:
      "Transport vesicles bud from the transitional region of the endoplasmic reticulum and carry secretory proteins to the Golgi apparatus.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 86,
    outcome: "BIO-4.3",
    concept: "transitional endoplasmic reticulum",
  },
  {
    key: "organelle-secretory-pathway-order",
    text: "Arrange the compartments in the correct order for a protein that is released from the cell by exocytosis.",
    options: [
      "Ribosome, rough ER, transport vesicle, Golgi apparatus, secretory vesicle, plasma membrane",
      "Ribosome, Golgi apparatus, rough ER, secretory vesicle, transport vesicle, plasma membrane",
      "Rough ER, ribosome, Golgi apparatus, transitional ER, secretory vesicle, plasma membrane",
      "Ribosome, smooth ER, Golgi apparatus, lysosome, plasma membrane",
    ],
    correctIndex: 0,
    explanation:
      "The secretory pathway runs from the ribosome on the rough ER, through a transport vesicle to the Golgi, and out in a secretory vesicle that fuses with the plasma membrane to release the protein.",
    evidence:
      "Secreted proteins pass from the rough ER via transport vesicles to the Golgi apparatus and leave the cell by exocytosis.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "BIO-4.3",
    concept: "secretory pathway order",
  },
  {
    key: "organelle-golgi-cisternae",
    text: "Under the electron microscope the Golgi apparatus appears as a stack of flattened, membrane-bound sacs. The value of this cisternal arrangement lies in",
    options: [
      "Housing the enzymes of the Krebs cycle away from the cytosol",
      "Providing separate compartments in which arriving products are modified, sorted and packaged",
      "Giving the cell a place to assemble ribosomal subunits",
      "Offering a large surface for the cristae of respiration",
    ],
    correctIndex: 1,
    explanation:
      "The stacked cisternae hold glycosylation enzymes and act as a processing and dispatch chamber for material arriving from the rough ER. Krebs cycle enzymes sit in the mitochondrial matrix, ribosomal subunits are built in the nucleolus, and cristae belong to mitochondria.",
    evidence:
      "The Golgi apparatus is a stack of cisternae that modifies, sorts and packages materials received from the endoplasmic reticulum.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-4.3",
    concept: "golgi apparatus structure",
  },
  {
    key: "organelle-golgi-role-statements",
    text: "Statements about the Golgi apparatus are given below.\nI. It adds sugar groups to arriving proteins and lipids.\nII. It synthesises the polypeptide chains that it modifies.\nIII. It sorts and packages its products for delivery elsewhere in the cell.\nIV. It carries its own circular DNA and divides by fission.\nWhich one of these four statements is incorrect?",
    options: [
      "It adds sugar groups to arriving proteins and lipids",
      "It sorts and packages its products for delivery elsewhere in the cell",
      "It synthesises the polypeptide chains that it modifies",
      "It carries its own circular DNA and divides by fission",
    ],
    correctIndex: 2,
    explanation:
      "The Golgi modifies, sorts and packages but never synthesises polypeptide chains, which are completed on rough ER ribosomes before reaching it. Its own circular DNA and division by fission describe the mitochondrion.",
    evidence:
      "The Golgi apparatus modifies, sorts and packages proteins but does not synthesise them.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-4.3",
    concept: "golgi apparatus role",
  },
  {
    key: "organelle-golgi-lysosome-formation",
    text: "A secretory cell contains many membrane-bound vesicles whose interior is filled with acid hydrolases. These enzyme-loaded vesicles most probably arise from",
    options: [
      "Nuclear pores that widen to release enzymes into the cytosol",
      "Ribosomes that detach from the rough ER and digest folded proteins",
      "Plasma membrane invaginations that trap extracellular fluid",
      "Golgi vesicles that have acquired their hydrolase cargo",
    ],
    correctIndex: 3,
    explanation:
      "Lysosomes are derived from Golgi vesicles loaded with acid hydrolases, the Golgi performing the sorting and packaging step that creates them. Ribosomes make protein but do not digest it, and nuclear pores and the plasma membrane take no part in this.",
    evidence: "Lysosomes form from Golgi vesicles that carry acid hydrolases for intracellular digestion.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 86,
    outcome: "BIO-4.3",
    concept: "lysosome formation",
  },
  {
    key: "organelle-golgi-acrosome",
    text: "The acrosome of a sperm head is built from Golgi material during sperm formation. Its role during fertilisation is to",
    options: [
      "Carry enzymes that dissolve the protective layers around the egg",
      "Supply the ATP that drives the flagellum",
      "Provide the circular DNA that the embryo inherits",
      "Assemble the microtubules of the sperm tail",
    ],
    correctIndex: 0,
    explanation:
      "The Golgi-derived acrosome is a cap of hydrolytic enzymes that helps the sperm head penetrate the coverings of the egg. ATP for flagellar movement comes from mitochondria, and tail microtubules are assembled from cytoplasmic tubulin.",
    evidence:
      "The acrosome is formed from the Golgi apparatus and carries enzymes that help the sperm fertilise the egg.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 84,
    outcome: "BIO-4.3",
    concept: "acrosome function",
  },
  {
    key: "organelle-cristae-surface-area",
    text: "The inner membrane of a mitochondrion is thrown into folds that project well inside the organelle. The main advantage of these folds is that they",
    options: [
      "Store the enzymes of the Krebs cycle close to the DNA",
      "Greatly enlarge the membrane area carrying the electron transport chain",
      "Provide the surface on which ribosomal subunits are assembled",
      "Hold the hydrogen ions that supply the mitochondrial DNA",
    ],
    correctIndex: 1,
    explanation:
      "Cristae multiply the area of inner membrane available for respiratory carriers, which raises the rate of oxidative phosphorylation and ATP formation. Krebs cycle enzymes lie free in the matrix, ribosome assembly occurs in the nucleolus, and mitochondrial DNA stays in the matrix.",
    evidence:
      "Cristae are folds of the inner mitochondrial membrane that increase the surface area available for aerobic respiration.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-4.3",
    concept: "cristae function",
  },
  {
    key: "organelle-mitochondrion-compartments",
    text: "Features of a typical animal cell mitochondrion are described in the four statements below.\nI. Cristae are folds of the inner membrane and the matrix lies inside this membrane.\nII. The matrix contains the enzymes of the Krebs cycle.\nIII. Ribosomes are attached in rows along the outer surface of the outer membrane.\nIV. The organelle carries its own circular DNA.\nWhich one of these four statements is incorrect?",
    options: [
      "Cristae are folds of the inner membrane and the matrix lies inside it",
      "The matrix contains the enzymes of the Krebs cycle",
      "Ribosomes sit in rows along the outer surface of the outer membrane",
      "The organelle contains its own circular DNA",
    ],
    correctIndex: 2,
    explanation:
      "Mitochondrial ribosomes lie free in the matrix as 70S particles and are not bound to either membrane. Cristae, matrix enzymes and circular DNA all describe the organelle correctly.",
    evidence:
      "Mitochondria have cristae formed from the inner membrane, Krebs cycle enzymes in the matrix, and their own circular DNA and 70S ribosomes.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 89,
    outcome: "BIO-4.3",
    concept: "mitochondrial compartments",
  },
  {
    key: "organelle-electron-transport-location",
    text: "During aerobic respiration the electron transport carriers of a mitochondrion are located",
    options: [
      "In the matrix, where the Krebs cycle runs",
      "On the outer mitochondrial membrane facing the cytosol",
      "Inside the intermembrane space only",
      "On the inner mitochondrial membrane, including the cristae",
    ],
    correctIndex: 3,
    explanation:
      "The respiratory carriers are built into the inner mitochondrial membrane, which is folded into cristae to enlarge the surface available for oxidative phosphorylation. Krebs cycle enzymes lie in the matrix.",
    evidence:
      "The electron transport chain is located on the inner mitochondrial membrane and drives ATP synthesis.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-4.3",
    concept: "electron transport location",
  },
  {
    key: "organelle-mitochondria-semi-autonomy",
    text: "Most of the proteins a mitochondrion needs are encoded by nuclear genes and made on cytoplasmic ribosomes. The organelle is nevertheless called semi-autonomous because it",
    options: [
      "Retains its own circular DNA, its own 70S ribosomes and the ability to divide by fission",
      "Is a permanent component of the endomembrane system alongside the Golgi apparatus",
      "Can survive and keep dividing outside the cell indefinitely",
      "Builds all of its own membrane lipids without any nuclear contribution",
    ],
    correctIndex: 0,
    explanation:
      "Semi-autonomy is only partial: the mitochondrion keeps a genome, its own translation machinery and fission ability, so it makes part of its own components while still importing the rest. Mitochondria are not endomembrane components, cannot divide indefinitely outside a cell, and depend on nuclear genes for most of their proteins.",
    evidence:
      "Mitochondria are semi-autonomous because they possess their own DNA, ribosomes and division mechanism while still depending on nuclear genes.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 90,
    outcome: "BIO-4.3",
    concept: "semi-autonomous organelles",
  },
  {
    key: "organelle-endomembrane-membership",
    text: "The endomembrane system is described in the four statements below.\nI. It includes the nuclear envelope, endoplasmic reticulum, Golgi apparatus, lysosomes and transport vesicles.\nII. The outer mitochondrial membrane is a continuous part of this system.\nIII. Vesicles shuttle material between its components.\nIV. Its membrane proteins are synthesised on ribosomes bound to the rough ER.\nWhich one of these four statements is incorrect?",
    options: [
      "It includes the nuclear envelope, endoplasmic reticulum, Golgi apparatus, lysosomes and vesicles",
      "The outer mitochondrial membrane is a continuous part of it",
      "Vesicles shuttle material between its components",
      "Its membrane proteins are made on ribosomes bound to the rough ER",
    ],
    correctIndex: 1,
    explanation:
      "Mitochondria are not part of the endomembrane system and are not continuous with the ER, even though their membranes are similar in composition. The component list, the role of vesicles and the contribution of bound ribosomes are all correct.",
    evidence:
      "The endomembrane system comprises the nuclear envelope, ER, Golgi apparatus, lysosomes and vesicles, and excludes mitochondria.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 88,
    outcome: "BIO-4.3",
    concept: "endomembrane system",
  },
  {
    key: "organelle-lysosome-autophagy",
    text: "A cell encloses a worn-out organelle in a membrane vesicle that then fuses with an acidic vesicle full of hydrolytic enzymes, so the old organelle is broken down and its building blocks reused. This recycling event is",
    options: [
      "Glycosylation carried out by Golgi cisternae",
      "Oxidation carried out by peroxisomes",
      "Autophagy carried out by lysosomes",
      "Exocytosis of a secretory vesicle",
    ],
    correctIndex: 2,
    explanation:
      "Lysosomes supply the acid hydrolases that digest cellular debris in a process called autophagy; in plant cells the lytic vacuole performs the comparable role. Glycosylation adds sugar groups, peroxisomes carry out oxidation, and exocytosis releases material from the cell.",
    evidence:
      "Lysosomes contain acid hydrolases and digest worn-out cell parts in autophagy, while plant lytic vacuoles perform a comparable role.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "BIO-4.3",
    concept: "lysosomal autophagy",
  },
  {
    key: "organelle-peroxisome-oxidation",
    text: "Peroxisomes in leaf cells dispose of a product of photosynthesis, and peroxisomes in animal cells shorten very long chain fatty acids taken in from outside the cell. Both activities are possible because peroxisomes",
    options: [
      "Hold the electron carriers of the mitochondrial respiratory chain",
      "Assemble polypeptides that are exported from the cell",
      "Add sugar chains to proteins arriving from the endoplasmic reticulum",
      "Contain oxidative enzymes such as catalase",
    ],
    correctIndex: 3,
    explanation:
      "Peroxisomes are small bodies of oxidative enzymes including catalase, so they take part in fatty acid breakdown and in disposing of the products of photorespiration. Respiratory carriers belong to the inner mitochondrial membrane, secretory proteins are made on the rough ER, and glycosylation occurs in the Golgi apparatus.",
    evidence:
      "Peroxisomes contain oxidising enzymes and carry out fatty acid oxidation and photorespiration.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 83,
    outcome: "BIO-4.3",
    concept: "peroxisome function",
  },
  {
    key: "organelle-centrosome-plant-versus-animal",
    text: "During division of a typical higher plant cell no centrosome or centriole pair is present, and spindle microtubules are formed in a different way than in an animal cell. The reason is that",
    options: [
      "Higher plant cells organise their spindle without a centrosome",
      "Higher plant cells possess many small centrioles inside the nucleus",
      "Higher plant cells form their spindle entirely inside the nucleolus",
      "Higher plant cells replace the plasma membrane with a centrosome",
    ],
    correctIndex: 0,
    explanation:
      "Typical higher plant cells lack centrioles and a discrete centrosome and build spindle microtubules by other means, whereas animal cells nucleate the spindle at a centrosome holding a pair of centrioles in pericentriolar material.",
    evidence:
      "Animal cells organise the spindle from a centrosome containing centrioles, which typical higher plant cells lack.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 82,
    outcome: "BIO-4.3",
    concept: "centrosome in plant cells",
  },
];
