import type { GroundedMcq } from "../mcq-pipeline";

type Domain = "cell" | "biomolecules" | "enzymes" | "bioenergetics" | "viruses";
type Card = {
  slug: string;
  domain: Domain;
  outcomeCode: string;
  entity: string;
  description: string;
  function: string;
  impairment: string;
  evidence: string;
  relevance: number;
};

const cards: Card[] = [
  { slug: "fluid-mosaic", domain: "cell", outcomeCode: "BIO-4.1", entity: "fluid mosaic model", description: "a phospholipid bilayer in which proteins are embedded and can move laterally", function: "provides a selectively permeable, dynamic boundary for the cell", impairment: "membrane transport and cell-surface recognition become abnormal", evidence: "The plasma membrane is a fluid mosaic of proteins within a phospholipid bilayer.", relevance: 94 },
  { slug: "ribosome", domain: "cell", outcomeCode: "BIO-4.3", entity: "ribosome", description: "a non-membranous ribonucleoprotein particle made of rRNA and proteins", function: "translates messenger RNA into a polypeptide", impairment: "cellular protein synthesis falls directly", evidence: "Ribosomes contain rRNA and protein and are the site of protein synthesis.", relevance: 96 },
  { slug: "rough-er", domain: "cell", outcomeCode: "BIO-4.3", entity: "rough endoplasmic reticulum", description: "a membrane network bearing ribosomes on its cytosolic surface", function: "synthesizes and begins processing proteins destined for secretion or membranes", impairment: "production of secreted proteins is reduced", evidence: "Rough ER bears ribosomes and participates in protein synthesis and transport.", relevance: 91 },
  { slug: "golgi", domain: "cell", outcomeCode: "BIO-4.3", entity: "Golgi apparatus", description: "stacks of flattened membrane-bound cisternae with associated vesicles", function: "modifies, sorts and packages cellular products for delivery", impairment: "newly made secretory proteins are not packaged correctly", evidence: "Golgi bodies are concerned with modification, packaging and cell secretion.", relevance: 91 },
  { slug: "lysosome", domain: "cell", outcomeCode: "BIO-4.3", entity: "lysosome", description: "a single-membrane vesicle containing acid hydrolases", function: "digests worn-out organelles and material taken into the cell", impairment: "undegraded macromolecules accumulate inside the cell", evidence: "Lysosomes contain digestive enzymes and perform intracellular digestion.", relevance: 88 },
  { slug: "mitochondrion", domain: "cell", outcomeCode: "BIO-4.3", entity: "mitochondrion", description: "a double-membrane organelle with inner folds called cristae and an internal matrix", function: "carries out aerobic respiration and produces most cellular ATP", impairment: "aerobic ATP production decreases markedly", evidence: "Mitochondria are sites of aerobic respiration, oxidative metabolism and ATP production.", relevance: 97 },

  { slug: "water-solvent", domain: "biomolecules", outcomeCode: "BIO-3.3", entity: "water's polarity", description: "an unequal charge distribution caused by polar covalent bonds and molecular shape", function: "allows ionic and polar substances to dissolve and participate in reactions", impairment: "transport and reaction of many dissolved ions and polar molecules decline", evidence: "The polar nature of water makes it an effective solvent for ions and polar solutes.", relevance: 87 },
  { slug: "monosaccharide", domain: "biomolecules", outcomeCode: "BIO-3.4", entity: "monosaccharide", description: "a single sugar unit that cannot be hydrolysed into a simpler carbohydrate", function: "serves as a building block for larger carbohydrates and as an immediate fuel", impairment: "formation of disaccharides and polysaccharides lacks its basic subunit", evidence: "Monosaccharides are the simplest carbohydrates and form larger saccharides.", relevance: 92 },
  { slug: "glycogen", domain: "biomolecules", outcomeCode: "BIO-3.4", entity: "glycogen", description: "a highly branched storage polysaccharide composed of glucose units", function: "stores carbohydrate in animals for rapid mobilization", impairment: "animals lose a major short-term carbohydrate reserve", evidence: "Glycogen is a branched glucose polymer used for carbohydrate storage in animals.", relevance: 89 },
  { slug: "amino-acid", domain: "biomolecules", outcomeCode: "BIO-3.5", entity: "amino acid", description: "an organic molecule containing amino and carboxyl groups around a central carbon", function: "acts as the monomer from which proteins are assembled", impairment: "peptide-chain construction cannot proceed normally", evidence: "Proteins are polymers whose monomeric units are amino acids joined by peptide bonds.", relevance: 94 },
  { slug: "phospholipid", domain: "biomolecules", outcomeCode: "BIO-3.6", entity: "phospholipid", description: "an amphipathic lipid with a polar head and non-polar fatty-acid tails", function: "self-assembles into the bilayer forming the foundation of cell membranes", impairment: "the basic bilayer structure of cellular membranes is disrupted", evidence: "Phospholipids have hydrophilic heads and hydrophobic tails and form membrane bilayers.", relevance: 95 },
  { slug: "dna-rna", domain: "biomolecules", outcomeCode: "BIO-3.9", entity: "DNA rather than RNA", description: "a nucleic acid normally containing deoxyribose, thymine and two antiparallel strands", function: "stores hereditary information in most cellular organisms", impairment: "stable long-term storage of genetic information is compromised", evidence: "DNA contains deoxyribose and thymine and usually forms a double-stranded genetic store.", relevance: 97 },

  { slug: "activation-energy", domain: "enzymes", outcomeCode: "BIO-6.2", entity: "lowering activation energy", description: "reducing the energy barrier between reactants and the transition state", function: "increases reaction rate without changing the reaction's overall energy change", impairment: "biochemical reactions proceed too slowly at normal cellular temperatures", evidence: "Enzymes accelerate reactions by lowering the required activation energy.", relevance: 97 },
  { slug: "active-site", domain: "enzymes", outcomeCode: "BIO-6.1", entity: "enzyme active site", description: "the region whose shape and chemical groups bind the substrate and support catalysis", function: "brings selected substrate molecules into a catalytic microenvironment", impairment: "substrate binding and catalysis are both reduced", evidence: "The active site binds a particular substrate and is the site of enzyme catalysis.", relevance: 96 },
  { slug: "induced-fit", domain: "enzymes", outcomeCode: "BIO-6.3", entity: "induced-fit model", description: "a model in which substrate binding causes a conformational change in the enzyme", function: "positions catalytic groups more effectively after the substrate approaches", impairment: "failure of the active site to adjust lowers catalytic efficiency", evidence: "In induced fit, substrate binding changes the active site's conformation to aid catalysis.", relevance: 91 },
  { slug: "competitive-inhibition", domain: "enzymes", outcomeCode: "BIO-6.4", entity: "competitive inhibitor", description: "a molecule that resembles the substrate and competes for the enzyme's active site", function: "reduces enzyme activity while its effect can be lessened by increasing substrate concentration", impairment: "fewer active sites are available to substrate at a given substrate concentration", evidence: "Competitive inhibitors occupy active sites and compete directly with substrate molecules.", relevance: 95 },
  { slug: "temperature-enzyme", domain: "enzymes", outcomeCode: "BIO-6.4", entity: "enzyme denaturation at high temperature", description: "loss of the enzyme's functional three-dimensional conformation through disrupted interactions", function: "explains the sharp fall in activity above an enzyme's optimum temperature", impairment: "the active site's shape no longer binds substrate effectively", evidence: "Excess heat can alter enzyme conformation and destroy active-site complementarity.", relevance: 94 },

  { slug: "glycolysis", domain: "bioenergetics", outcomeCode: "BIO-2.1", entity: "glycolysis", description: "a cytosolic pathway that converts one glucose molecule into two pyruvate molecules", function: "begins glucose respiration and yields a small net amount of ATP and reduced coenzyme", impairment: "glucose cannot efficiently enter the later stages of cellular respiration", evidence: "Glycolysis occurs before pyruvate oxidation, the Krebs cycle and electron transport.", relevance: 97 },
  { slug: "krebs-cycle", domain: "bioenergetics", outcomeCode: "BIO-2.1", entity: "Krebs cycle", description: "a cyclic pathway in the mitochondrial matrix that oxidizes acetyl groups", function: "produces carbon dioxide and reduced coenzymes for electron transport", impairment: "delivery of NADH and FADH2 to the electron transport chain falls", evidence: "The mitochondrial matrix contains enzymes of the Krebs cycle, which supplies reduced coenzymes.", relevance: 97 },
  { slug: "electron-transport", domain: "bioenergetics", outcomeCode: "BIO-2.1", entity: "electron transport chain", description: "a series of inner-mitochondrial-membrane carriers that transfer electrons to oxygen", function: "builds a proton gradient that drives most ATP synthesis in aerobic respiration", impairment: "oxidative phosphorylation and oxygen consumption decrease", evidence: "Electron transport at the inner mitochondrial membrane supports oxidative ATP production.", relevance: 98 },
  { slug: "fat-respiration", domain: "bioenergetics", outcomeCode: "BIO-2.1", entity: "fatty-acid entry into respiration", description: "conversion of fatty acids into acetyl units that join the central aerobic pathway", function: "allows fats to provide substrates for the Krebs cycle and ATP production", impairment: "stored lipids contribute less fuel during prolonged energy demand", evidence: "Mitochondria extract energy from fats as well as glucose and other organic compounds.", relevance: 90 },

  { slug: "obligate-virus", domain: "viruses", outcomeCode: "BIO-1.1", entity: "obligate intracellular parasitism of viruses", description: "dependence on a living host cell for replication because independent cellular machinery is absent", function: "explains why viruses reproduce only after entering suitable host cells", impairment: "outside a host cell, viral replication stops", evidence: "Viruses lack ribosomes and metabolic machinery and cannot multiply outside living host cells.", relevance: 96 },
  { slug: "viral-capsid", domain: "viruses", outcomeCode: "BIO-1.1", entity: "viral capsid", description: "a protein coat surrounding and protecting the viral nucleic acid", function: "protects the genome and contributes to delivery or attachment in many viruses", impairment: "the viral genome becomes less protected and particle assembly fails", evidence: "A virus contains nucleic acid enclosed by a protein capsid; some also possess an envelope.", relevance: 91 },
  { slug: "hiv-retrovirus", domain: "viruses", outcomeCode: "BIO-1.2", entity: "HIV", description: "an enveloped retrovirus with an RNA genome that targets key immune cells", function: "causes progressive immune deficiency that can develop into AIDS", impairment: "loss of helper T-cell function weakens coordinated immune responses", evidence: "HIV is an enveloped RNA retrovirus associated with AIDS and immune-cell damage.", relevance: 98 },
  { slug: "reverse-transcriptase", domain: "viruses", outcomeCode: "BIO-1.2", entity: "reverse transcriptase", description: "a viral enzyme that synthesizes DNA using viral RNA as a template", function: "allows HIV genetic information to enter a DNA form before integration", impairment: "formation of viral DNA from the RNA genome is blocked", evidence: "HIV reverse transcriptase converts viral RNA information into DNA.", relevance: 98 },
];

const chapterByDomain: Record<Domain, { fbise: [number, number, number]; balochistan: [number, number, number] }> = {
  cell: { fbise: [1, 8, 41], balochistan: [1, 5, 37] },
  biomolecules: { fbise: [2, 42, 62], balochistan: [3, 51, 90] },
  enzymes: { fbise: [3, 63, 78], balochistan: [4, 91, 107] },
  bioenergetics: { fbise: [4, 79, 106], balochistan: [5, 108, 138] },
  viruses: { fbise: [5, 107, 131], balochistan: [6, 139, 162] },
};

function rotate<T>(correct: T, distractors: T[], correctIndex: number): [T, T, T, T] {
  const values = distractors.slice(0, 3);
  values.splice(correctIndex, 0, correct);
  return values as [T, T, T, T];
}

function difficulty(index: number): GroundedMcq["difficulty"] {
  const position = index % 20;
  return position < 3 ? "EASY" : position >= 17 ? "HARD" : "MEDIUM";
}

export const biology11Pilot: GroundedMcq[] = cards.flatMap((card, cardIndex) => {
  const domainCards = cards.filter((candidate) => candidate.domain === card.domain);
  const domainIndex = domainCards.findIndex((candidate) => candidate.slug === card.slug);
  const peers = [1, 2, 3].map((offset) => domainCards[(domainIndex + offset) % domainCards.length]);
  const pages = chapterByDomain[card.domain];
  const sources: GroundedMcq["sources"] = [
    { boardCode: "FBISE", chapterNumber: pages.fbise[0], pageStart: pages.fbise[1], pageEnd: pages.fbise[2], evidence: card.evidence },
    { boardCode: "BALOCHISTAN", chapterNumber: pages.balochistan[0], pageStart: pages.balochistan[1], pageEnd: pages.balochistan[2], evidence: card.evidence },
  ];
  const specs = [
    { type: "FACTUAL", stem: `Which term is best described as ${card.description}?`, field: "entity" as const },
    { type: "CONCEPTUAL", stem: `What is the most direct biological role of ${card.entity}?`, field: "function" as const },
    { type: "APPLICATION", stem: `Which cellular or biological component is most likely affected if ${card.impairment}?`, field: "entity" as const },
    { type: "STATEMENT_BASED", stem: `Which statement about ${card.entity} is correct?`, field: "description" as const },
  ];
  return specs.map((spec, variant): GroundedMcq => {
    const correctIndex = (cardIndex + variant) % 4;
    const correct = card[spec.field];
    const distractors = peers.map((peer) => peer[spec.field]);
    return {
      generationKey: `bio11-pilot-v1-${card.slug}-${variant + 1}`,
      questionText: spec.stem,
      options: rotate(correct, distractors, correctIndex),
      correctIndex,
      explanation: `${card.entity} ${card.function}. ${card.evidence}`,
      questionType: spec.type,
      difficulty: difficulty(cardIndex * 4 + variant),
      mdcatRelevanceScore: card.relevance,
      outcomeCode: card.outcomeCode,
      concept: card.entity,
      sources,
    };
  });
});
