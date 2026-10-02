/**
 * Grade XI question coverage map (spec §13, §22, §72).
 *
 * Every grounded question must map to a PMDC MDCAT 2025 outcome that exists in
 * the database, and to the textbook chapter(s) that actually teach it on each
 * board. This module is the single source of truth for that mapping so the
 * authored batches, the validator and the importer can never drift apart
 * (§106.7). Chapter numbers and page ranges mirror the imported books:
 * FBISE Grade XI Biology, and FBISE/Balochistan Grade XI Chemistry & Physics.
 *
 * Chemistry and Physics Grade XI books were imported without PDF page ranges,
 * so their sources intentionally carry no pageStart/pageEnd instead of
 * inventing page numbers.
 */

export type BankSubject = "BIOLOGY" | "CHEMISTRY" | "PHYSICS";

export type CoverageSource = {
  boardCode: "FBISE" | "BALOCHISTAN";
  grade: 11 | 12;
  chapterNumber: number;
  pageStart?: number;
  pageEnd?: number;
};

export type OutcomeCoverage = {
  subject: BankSubject;
  outcome: string;
  unit: string;
  /** Filled in by the merged registry from the official curriculum module. */
  topic?: string;
  statement: string;
  sources: CoverageSource[];
};

const biology = (outcome: string, unit: string, statement: string, sources: CoverageSource[]): OutcomeCoverage => ({
  subject: "BIOLOGY",
  outcome,
  unit,
  statement,
  sources,
});

const chemistry = (outcome: string, unit: string, statement: string, sources: CoverageSource[]): OutcomeCoverage => ({
  subject: "CHEMISTRY",
  outcome,
  unit,
  statement,
  sources,
});

const physics = (outcome: string, unit: string, statement: string, sources: CoverageSource[]): OutcomeCoverage => ({
  subject: "PHYSICS",
  outcome,
  unit,
  statement,
  sources,
});

export const OUTCOME_COVERAGE: Record<string, OutcomeCoverage> = {
  // --- Biology Grade XI (FBISE 1-13 pp.8-310 | Balochistan 1-14 pp.5-406) ---
  "BIO-4.1": biology("BIO-4.1", "CELL STRUCTURE & FUNCTION", "Compare the structures of typical animal and plant cells.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 1, pageStart: 8, pageEnd: 41 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 1, pageStart: 5, pageEnd: 37 },
  ]),
  "BIO-4.2": biology("BIO-4.2", "CELL STRUCTURE & FUNCTION", "Compare and contrast prokaryotic and eukaryotic cell structure.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 6, pageStart: 132, pageEnd: 146 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 7, pageStart: 163, pageEnd: 192 },
  ]),
  "BIO-4.3": biology("BIO-4.3", "CELL STRUCTURE & FUNCTION", "Outline the structure and function of the nucleus, endoplasmic reticulum, Golgi apparatus, and mitochondria.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 1, pageStart: 8, pageEnd: 41 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 1, pageStart: 5, pageEnd: 37 },
  ]),
  "BIO-4.4": biology("BIO-4.4", "CELL STRUCTURE & FUNCTION", "Describe chromosome structure, chemical composition, and function.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 1, pageStart: 8, pageEnd: 41 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 12, pageStart: 318, pageEnd: 355 },
  ]),
  "BIO-3.1": biology("BIO-3.1", "BIOLOGICAL MOLECULES", "Define and classify biological molecules.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.2": biology("BIO-3.2", "BIOLOGICAL MOLECULES", "Discuss the importance of biological molecules.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.3": biology("BIO-3.3", "BIOLOGICAL MOLECULES", "Describe biologically important properties of water: polarity, hydrolysis, specific heat, solvent and reagent roles, density, cohesion, and ionization.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.4": biology("BIO-3.4", "BIOLOGICAL MOLECULES", "Discuss monosaccharides, oligosaccharides, and polysaccharides including glucose, sucrose, lactose, starch, cellulose, and glycogen.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.5": biology("BIO-3.5", "BIOLOGICAL MOLECULES", "Describe amino acids and the structure of proteins.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.6": biology("BIO-3.6", "BIOLOGICAL MOLECULES", "Describe phospholipids, triglycerides, alcohols, esters, and acylglycerols.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.7": biology("BIO-3.7", "BIOLOGICAL MOLECULES", "Give an account of the structure and function of RNA.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.8": biology("BIO-3.8", "BIOLOGICAL MOLECULES", "Discuss conjugated molecules including glycolipids and glycoproteins.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.9": biology("BIO-3.9", "BIOLOGICAL MOLECULES", "Explain the Watson-Crick double-helical structure of DNA.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-3.10": biology("BIO-3.10", "BIOLOGICAL MOLECULES", "Define a gene as a DNA nucleotide sequence that codes for formation of a polypeptide.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2, pageStart: 42, pageEnd: 62 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3, pageStart: 51, pageEnd: 90 },
  ]),
  "BIO-6.1": biology("BIO-6.1", "ENZYMES", "Describe the distinguishing characteristics of enzymes.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3, pageStart: 63, pageEnd: 78 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4, pageStart: 91, pageEnd: 107 },
  ]),
  "BIO-6.2": biology("BIO-6.2", "ENZYMES", "Explain the mechanism of enzyme action.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3, pageStart: 63, pageEnd: 78 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4, pageStart: 91, pageEnd: 107 },
  ]),
  "BIO-6.3": biology("BIO-6.3", "ENZYMES", "Describe effects of temperature, pH, and concentration on enzyme action.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3, pageStart: 63, pageEnd: 78 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4, pageStart: 91, pageEnd: 107 },
  ]),
  "BIO-6.4": biology("BIO-6.4", "ENZYMES", "Describe enzyme inhibitors.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3, pageStart: 63, pageEnd: 78 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4, pageStart: 91, pageEnd: 107 },
  ]),
  "BIO-2.1": biology("BIO-2.1", "BIOENERGETICS", "Outline cellular respiration of proteins and fats and correlate these with respiration of glucose.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 4, pageStart: 79, pageEnd: 106 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 5, pageStart: 108, pageEnd: 138 },
  ]),
  "BIO-1.1": biology("BIO-1.1", "ACELLULAR LIFE", "Classify viruses on the basis of their structure, number of strands, diseases, and hosts.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 5, pageStart: 107, pageEnd: 131 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 6, pageStart: 139, pageEnd: 162 },
  ]),
  "BIO-1.2": biology("BIO-1.2", "ACELLULAR LIFE", "Identify symptoms, mode of transmission, and cause of AIDS.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 5, pageStart: 107, pageEnd: 131 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 6, pageStart: 139, pageEnd: 162 },
  ]),

  // --- Chemistry Grade XI (FBISE 1-11 | Balochistan 1-14; no page ranges) ---
  "CHEM-1.1": chemistry("CHEM-1.1", "STOICHIOMETRY", "Use balanced equations and mole ratios in stoichiometric calculations.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 1 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 1 },
  ]),
  "CHEM-1.3": chemistry("CHEM-1.3", "STOICHIOMETRY", "Identify the limiting reactant and calculate the amount of product formed.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 1 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 1 },
  ]),
  "CHEM-1.5": chemistry("CHEM-1.5", "STOICHIOMETRY", "Calculate theoretical yield, actual yield and percentage yield.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 1 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 1 },
  ]),
  "CHEM-2.3": chemistry("CHEM-2.3", "ATOMIC STRUCTURE", "Describe atomic orbitals and the probability distribution of electrons.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 5 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 2 },
  ]),
  "CHEM-2.7": chemistry("CHEM-2.7", "ATOMIC STRUCTURE", "Apply Aufbau principle, Pauli exclusion principle and Hund's rule.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 5 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 2 },
  ]),
  "CHEM-3.4": chemistry("CHEM-3.4", "GASES", "Apply Boyle's law to pressure-volume changes at constant temperature.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4 },
  ]),
  "CHEM-3.7": chemistry("CHEM-3.7", "GASES", "Use the ideal gas equation to solve gas problems.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4 },
  ]),
  "CHEM-4.3": chemistry("CHEM-4.3", "LIQUIDS", "Explain hydrogen bonding and its effects on physical properties.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 4 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 5 },
  ]),
  "CHEM-5.5": chemistry("CHEM-5.5", "SOLIDS", "Relate lattice energy to ionic charge, ionic size and crystal stability.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 4 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 6 },
  ]),
  "CHEM-6.3": chemistry("CHEM-6.3", "CHEMICAL EQUILIBRIUM", "Predict equilibrium shifts using Le Chatelier's principle.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 8 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 7 },
  ]),
  "CHEM-6.6": chemistry("CHEM-6.6", "ACIDS, BASES AND SALTS", "Explain buffer action and resistance to changes in pH.", [
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 8 },
  ]),
  "CHEM-7.5": chemistry("CHEM-7.5", "REACTION KINETICS", "Explain activation energy and the effect of catalysts on reaction rate.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 11 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 9 },
  ]),
  "CHEM-8.6": chemistry("CHEM-8.6", "THERMOCHEMISTRY", "Apply Hess's law to calculate enthalpy changes.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 7 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 11 },
  ]),
  "CHEM-9.2": chemistry("CHEM-9.2", "ELECTROCHEMISTRY", "Determine oxidation numbers and identify oxidation and reduction.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 10 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 12 },
  ]),
  "CHEM-10.1": chemistry("CHEM-10.1", "CHEMICAL BONDING", "Use VSEPR theory to predict molecular shapes.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 6 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3 },
  ]),
  "CHEM-13.3": chemistry("CHEM-13.3", "ORGANIC CHEMISTRY", "Recognize functional groups and classify organic compounds.", [
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 14 },
  ]),
  "CHEM-13.4": chemistry("CHEM-13.4", "ORGANIC CHEMISTRY", "Explain structural and stereoisomerism in organic compounds.", [
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 14 },
  ]),

  // --- Physics Grade XI (FBISE 1-11 | Balochistan 1-10; no page ranges) ---
  "PHY-1.1": physics("PHY-1.1", "VECTORS", "Resolve a vector into rectangular components.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 2 },
  ]),
  "PHY-1.2": physics("PHY-1.2", "VECTORS", "Scalar product", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 2 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 2 },
  ]),
  "PHY-2.3": physics("PHY-2.3", "FORCE AND MOTION", "Interpret the slope of a displacement-time graph as velocity.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3 },
  ]),
  "PHY-2.8": physics("PHY-2.8", "FORCE AND MOTION", "Analyze horizontal and vertical components of projectile motion.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3 },
  ]),
  "PHY-2.13": physics("PHY-2.13", "FORCE AND MOTION", "Express Newton's second law as the rate of change of momentum.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3 },
  ]),
  "PHY-2.15": physics("PHY-2.15", "FORCE AND MOTION", "Apply conservation of linear momentum to an isolated system.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 3 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 3 },
  ]),
  "PHY-3.1": physics("PHY-3.1", "WORK AND ENERGY", "Calculate work as the scalar product of force and displacement.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 4 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4 },
  ]),
  "PHY-3.3": physics("PHY-3.3", "WORK AND ENERGY", "Apply the expression for translational kinetic energy.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 4 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4 },
  ]),
  "PHY-3.6": physics("PHY-3.6", "WORK AND ENERGY", "Relate power to work, time, force and velocity.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 4 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 4 },
  ]),
  "PHY-4.4": physics("PHY-4.4", "CIRCULAR MOTION", "Relate angular velocity to tangential speed.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 5 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 5 },
  ]),
  "PHY-5.1": physics("PHY-5.1", "FLUID DYNAMICS", "Explain terminal velocity in terms of balanced forces.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 6 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 6 },
  ]),
  "PHY-5.2": physics("PHY-5.2", "FLUID DYNAMICS", "Describe viscous drag on an object moving through a fluid.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 6 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 6 },
  ]),
  "PHY-5.6": physics("PHY-5.6", "FLUID DYNAMICS", "Apply the continuity equation to incompressible fluid flow.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 6 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 6 },
  ]),
  "PHY-5.8": physics("PHY-5.8", "FLUID DYNAMICS", "Apply Bernoulli's equation to steady fluid flow.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 6 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 6 },
  ]),
  "PHY-6.4": physics("PHY-6.4", "WAVES", "Use the relationship among wave speed, frequency and wavelength.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 8 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 8 },
  ]),
  "PHY-6.6": physics("PHY-6.6", "WAVES", "Distinguish transverse and longitudinal waves.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 8 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 8 },
  ]),
  "PHY-6.12": physics("PHY-6.12", "WAVES", "Identify nodes and antinodes in stationary waves.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 8 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 8 },
  ]),
  "PHY-6.18": physics("PHY-6.18", "OSCILLATIONS", "Describe simple harmonic motion and its relation to circular motion.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 7 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 7 },
  ]),
  "PHY-7.4": physics("PHY-7.4", "THERMODYNAMICS", "Apply the first law of thermodynamics.", [
    { boardCode: "FBISE", grade: 11, chapterNumber: 11 },
    { boardCode: "BALOCHISTAN", grade: 11, chapterNumber: 10 },
  ]),
};

export function subjectOutcomes(subject: BankSubject): string[] {
  return Object.values(OUTCOME_COVERAGE)
    .filter((coverage) => coverage.subject === subject)
    .map((coverage) => coverage.outcome);
}

export const BOARD_LABEL: Record<BankSubject, string> = {
  BIOLOGY: "Biology",
  CHEMISTRY: "Chemistry",
  PHYSICS: "Physics",
};