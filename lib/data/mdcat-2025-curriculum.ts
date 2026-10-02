/**
 * PMDC MDCAT 2025 official learning outcomes (spec §13, §21, §22).
 *
 * This module is the single source of truth for what the MDCAT syllabus
 * contains. `scripts/seed-mdcat-syllabus-2025.ts` seeds from it; the bank
 * coverage map, the validator and the AI pipeline all resolve outcomes from the
 * database, so no academic content is hard-coded into application logic (§70).
 *
 * Source of truth: PM&DC, *Medical and Dental Colleges Admission Test (MDCAT)
 * Curriculum 2025*, published 2025-05-26.
 * `https://www.pmdc.pk/Documents/Syllabus/Uniform%20Curriculum%20MDCAT-2025%20%20Final%20%2826-05-2025%29.pdf`
 * The human-readable review copy, including the extraction notes and the
 * corrections applied to typos in the published PDF, lives in
 * `requirements/mdcat-2025-outcomes.md`.
 *
 * Status: COMPLETE for all three science subjects — 289 outcomes transcribed
 * from the official document and reviewed against its per-unit inventory:
 *   Biology   16 units /  69 outcomes
 *   Chemistry 20 units / 120 outcomes
 *   Physics   16 units / 100 outcomes
 * English and Logical Reasoning exist in the document too but are deliberately
 * not transcribed yet (spec §81).
 */

export type CurriculumSubjectCode = "BIOLOGY" | "CHEMISTRY" | "PHYSICS";

export type CurriculumOutcome = {
  /** Fully qualified outcome code, e.g. `BIO-4.3`. */
  code: string;
  /** Official unit name, e.g. `CELL STRUCTURE & FUNCTION`. */
  unit: string;
  /** Official topic / subtopic heading. */
  topic: string;
  /** Official learning outcome statement. */
  statement: string;
};

/** Biology — complete official curriculum (units 1-16, 69 outcomes). */
export const MDCAT_2025_BIOLOGY: CurriculumOutcome[] = [
  // 1 - ACELLULAR LIFE
  { code: "BIO-1.1", unit: "ACELLULAR LIFE", topic: "Viruses", statement: "Classify viruses on basis of their structure/ number of strands/ diseases/ hosts etc." },
  { code: "BIO-1.2", unit: "ACELLULAR LIFE", topic: "AIDS and HIV Infection", statement: "Identify symptoms, mode of transmission and cause of viral disease (AIDS)" },
  // 2 - BIOENERGETICS
  { code: "BIO-2.1", unit: "BIOENERGETICS", topic: "Respiration", statement: "Outline the cellular respiration of proteins and fats and correlate these with that of glucose." },
  // 3 - BIOLOGICAL MOLECULES
  { code: "BIO-3.1", unit: "BIOLOGICAL MOLECULES", topic: "Biological molecules", statement: "Define and classify biological molecules." },
  { code: "BIO-3.2", unit: "BIOLOGICAL MOLECULES", topic: "Biological molecules", statement: "Discuss the importance of biological molecules" },
  { code: "BIO-3.3", unit: "BIOLOGICAL MOLECULES", topic: "Biological Importance of Water", statement: "Describe biologically important properties of water (polarity, hydrolysis, specific heat, water as solvent and reagent, density, cohesion/ionization)" },
  { code: "BIO-3.4", unit: "BIOLOGICAL MOLECULES", topic: "Carbohydrates", statement: "Discuss carbohydrates: monosaccharides (glucose), oligosaccharides (cane sugar, sucrose, lactose), polysaccharides (starches, cellulose, glycogen)" },
  { code: "BIO-3.5", unit: "BIOLOGICAL MOLECULES", topic: "Proteins", statement: "Describe proteins: amino acids, structure of proteins" },
  { code: "BIO-3.6", unit: "BIOLOGICAL MOLECULES", topic: "Lipids", statement: "Describe lipids: phospholipids, triglycerides, alcohol and esters (acylglycerol)" },
  { code: "BIO-3.7", unit: "BIOLOGICAL MOLECULES", topic: "Ribonucleic acid (RNA)", statement: "Give an account of structure and function RNA" },
  { code: "BIO-3.8", unit: "BIOLOGICAL MOLECULES", topic: "Conjugated molecules", statement: "Discuss conjugated molecules (glycolipids, glycoproteins)" },
  { code: "BIO-3.9", unit: "BIOLOGICAL MOLECULES", topic: "Structure of DNA", statement: "Explain the double helical structure of DNA as proposed by Watson and Crick." },
  { code: "BIO-3.10", unit: "BIOLOGICAL MOLECULES", topic: "Gene", statement: "Define gene is a sequence of nucleotides as part of DNA, which codes for the formation of a polypeptide." },
  // 4 - CELL STRUCTURE & FUNCTION
  { code: "BIO-4.1", unit: "CELL STRUCTURE & FUNCTION", topic: "Cell structure", statement: "Compare the structure of typical animal and plant cell" },
  { code: "BIO-4.2", unit: "CELL STRUCTURE & FUNCTION", topic: "Prokaryotic and Eukaryotic cell", statement: "Compare and contrast the structure of prokaryotic cells with eukaryotic cells" },
  { code: "BIO-4.3", unit: "CELL STRUCTURE & FUNCTION", topic: "Cytoplasmic Organelles", statement: "Outline the structure and function of the following organelles: nucleus, Endoplasmic reticulum, Golgi apparatus and Mitochondria" },
  { code: "BIO-4.4", unit: "CELL STRUCTURE & FUNCTION", topic: "Chromosomes", statement: "Describe the structure, chemical composition and function of chromosomes." },
  // 5 - COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION
  { code: "BIO-5.1", unit: "COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION", topic: "Receptors", statement: "Recognize receptors as transducers sensitive to various stimuli." },
  { code: "BIO-5.2", unit: "COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION", topic: "Neurons", statement: "Explain the structure of a typical neuron (cell body, dendrites, axon and myelin sheath)." },
  { code: "BIO-5.3", unit: "COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION", topic: "Neurons", statement: "Define nerve impulse." },
  { code: "BIO-5.4", unit: "COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION", topic: "Neurons", statement: "Classify reflexes." },
  { code: "BIO-5.5", unit: "COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION", topic: "Neurons", statement: "Briefly explain the functions of components of a reflex arc." },
  { code: "BIO-5.6", unit: "COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION", topic: "Brain", statement: "Discuss the main parts of the brain (e.g., components of brain stem, mid brain, cerebellum, cerebrum)." },
  { code: "BIO-5.7", unit: "COORDINATION & CONTROL / NERVOUS & CHEMICAL COORDINATION", topic: "Brain", statement: "Describe the functions of each part." },
  // 6 - ENZYMES
  { code: "BIO-6.1", unit: "ENZYMES", topic: "Enzymes", statement: "Describe the distinguishing characteristics of enzymes" },
  { code: "BIO-6.2", unit: "ENZYMES", topic: "Mode of Enzyme Action", statement: "Explain mechanism of action of enzymes" },
  { code: "BIO-6.3", unit: "ENZYMES", topic: "Factors that Affect the Rate of Enzyme Reactions", statement: "Describe effects of factor on enzyme action (temperature, pH and concentration)" },
  { code: "BIO-6.4", unit: "ENZYMES", topic: "Inhibitors", statement: "Describe enzyme inhibitors" },
  // 7 - EVOLUTION
  { code: "BIO-7.1", unit: "EVOLUTION", topic: "Concept of Evolution", statement: "Explain origin of life according to concept of evolution." },
  { code: "BIO-7.2", unit: "EVOLUTION", topic: "Lamarckism", statement: "Describe the theory of inheritance of acquired characters, as proposed by Lamarck." },
  { code: "BIO-7.3", unit: "EVOLUTION", topic: "Darwinism", statement: "Explain the theory of natural selection as proposed by Darwin." },
  // 8 - REPRODUCTION
  { code: "BIO-8.1", unit: "REPRODUCTION", topic: "Human Reproductive system", statement: "Describe the functions of various parts of the male & female reproductive systems and the hormones that regulate those functions." },
  { code: "BIO-8.2", unit: "REPRODUCTION", topic: "Menstrual cycle", statement: "Describe the menstrual cycle (female reproductive cycle) emphasizing the role of hormones." },
  { code: "BIO-8.3", unit: "REPRODUCTION", topic: "Sexually transmitted diseases", statement: "List the common sexually transmitted diseases along with their causative agents and main symptoms." },
  // 9 - SUPPORT & MOVEMENT
  { code: "BIO-9.1", unit: "SUPPORT & MOVEMENT", topic: "Human skeleton", statement: "Describe cartilage, muscle and bone." },
  { code: "BIO-9.2", unit: "SUPPORT & MOVEMENT", topic: "Human skeleton", statement: "Explain the main characteristics of cartilage and bone along with functions." },
  { code: "BIO-9.3", unit: "SUPPORT & MOVEMENT", topic: "Muscles", statement: "Compare characteristics of smooth muscles, cardiac muscles and skeletal muscles." },
  { code: "BIO-9.4", unit: "SUPPORT & MOVEMENT", topic: "Skeletal muscles", statement: "Explain the ultra-structure of skeletal muscles." },
  { code: "BIO-9.5", unit: "SUPPORT & MOVEMENT", topic: "Muscle contraction", statement: "Describe in brief the process of skeletal muscle contraction." },
  { code: "BIO-9.6", unit: "SUPPORT & MOVEMENT", topic: "Joints", statement: "Classify joints." },
  { code: "BIO-9.7", unit: "SUPPORT & MOVEMENT", topic: "Arthritis", statement: "Define arthritis." },
  // 10 - INHERITANCE
  { code: "BIO-10.1", unit: "INHERITANCE", topic: "Mendel's laws of Inheritance", statement: "Associate inheritance with the laws of Mendel." },
  { code: "BIO-10.2", unit: "INHERITANCE", topic: "Mendel's laws of Inheritance", statement: "Explain the law of independent assortment, using a suitable example." },
  { code: "BIO-10.3", unit: "INHERITANCE", topic: "Gene linkage and crossing over", statement: "Describe the terms gene linkage and crossing over." },
  { code: "BIO-10.4", unit: "INHERITANCE", topic: "Gene linkage and crossing over", statement: "Explain how gene linkage counters independent assortment and crossing-over modifies the progeny." },
  { code: "BIO-10.5", unit: "INHERITANCE", topic: "X-linked Recessive inheritance", statement: "Describe the concept of sex-linkage." },
  { code: "BIO-10.6", unit: "INHERITANCE", topic: "X-linked Recessive inheritance", statement: "Briefly describe inheritance of sex-linked traits." },
  { code: "BIO-10.7", unit: "INHERITANCE", topic: "X-linked Recessive inheritance", statement: "Analyze the inheritance of hemophilia." },
  // 11 - CIRCULATION
  { code: "BIO-11.1", unit: "CIRCULATION", topic: "Human Heart", statement: "Discuss general structure of human heart." },
  { code: "BIO-11.2", unit: "CIRCULATION", topic: "Cardiac cycle and phases of Heartbeat", statement: "Describe the phases of heartbeat." },
  { code: "BIO-11.3", unit: "CIRCULATION", topic: "Blood Vessels", statement: "List the differences and functions of arteries, veins and capillaries." },
  { code: "BIO-11.4", unit: "CIRCULATION", topic: "Lymphatic system", statement: "Describe lymphatic system (nodes, vessels and organs)." },
  // 12 - IMMUNITY
  { code: "BIO-12.1", unit: "IMMUNITY", topic: "Specific Defense Mechanism", statement: "Define and discuss the functions and importance of specific defense mechanisms." },
  // 13 - RESPIRATION
  { code: "BIO-13.1", unit: "RESPIRATION", topic: "Human Respiratory System", statement: "Discuss the functions of main part of respiratory system." },
  { code: "BIO-13.2", unit: "RESPIRATION", topic: "Human Respiratory System", statement: "Discuss the process of gas exchange in human lungs." },
  { code: "BIO-13.3", unit: "RESPIRATION", topic: "Human Respiratory System", statement: "Discuss the effect of smoking on respiratory system." },
  // 14 - DIGESTION
  { code: "BIO-14.1", unit: "DIGESTION", topic: "Human digestive system", statement: "Describe the parts of human digestive system." },
  { code: "BIO-14.2", unit: "DIGESTION", topic: "Human digestive system", statement: "Explain the functions of the main parts of the digestive system including associated structures and glands." },
  // 15 - HOMEOSTASIS
  { code: "BIO-15.1", unit: "HOMEOSTASIS", topic: "Homeostasis (kidney specifically)", statement: "Explain different organs of urinary system. Describe the structure of kidney and relate it with its function." },
  { code: "BIO-15.2", unit: "HOMEOSTASIS", topic: "Homeostasis (kidney specifically)", statement: "Explain the processes of glomerular filtration, selective re-absorption and tubular secretion as the events in kidney functioning." },
  { code: "BIO-15.3", unit: "HOMEOSTASIS", topic: "Homeostasis (kidney specifically)", statement: "Justify the functioning of kidneys as both excretion and osmoregulation." },
  { code: "BIO-15.4", unit: "HOMEOSTASIS", topic: "Homeostasis (kidney specifically)", statement: "Compare the function of two major capillary beds in kidney i.e. glomerular capillaries and peritubular capillaries." },
  { code: "BIO-15.5", unit: "HOMEOSTASIS", topic: "Homeostasis (kidney specifically)", statement: "Explain the causes and treatments of kidney stones." },
  { code: "BIO-15.6", unit: "HOMEOSTASIS", topic: "Homeostasis (kidney specifically)", statement: "Outline the causes of kidney failure." },
  { code: "BIO-15.7", unit: "HOMEOSTASIS", topic: "Thermoregulation", statement: "Describe thermoregulation and explain its needs." },
  { code: "BIO-15.8", unit: "HOMEOSTASIS", topic: "Excretion", statement: "List various nitrogenous compounds excreted during the process of excretion." },
  // 16 - BIOTECHNOLOGY
  { code: "BIO-16.1", unit: "BIOTECHNOLOGY", topic: "Biotechnology and Health Care", statement: "Describe how biotechnologists can combat health problems by producing vaccines." },
  { code: "BIO-16.2", unit: "BIOTECHNOLOGY", topic: "Biotechnology and Health Care", statement: "State the role played by biotechnology in disease diagnosis (DNA/RNA probes, monoclonal antibodies)." },
  { code: "BIO-16.3", unit: "BIOTECHNOLOGY", topic: "Biotechnology and Health Care", statement: "Describe what products biotechnologists obtain for use in disease treatment." },
];

/**
 * Chemistry — PARTIAL. Curated subset carried over from the original seed.
 * The official curriculum contains 20 units / 120 outcomes; 95 are not yet
 * transcribed. Do not treat this array as the full Chemistry MDCAT syllabus.
 */
export const MDCAT_2025_CHEMISTRY: CurriculumOutcome[] = [
  // 1 - INTRODUCTION OF FUNDAMENTALS AND CONCEPT OF CHEMISTRY
  { code: "CHEM-1.1", unit: "INTRODUCTION OF FUNDAMENTALS AND CONCEPT OF CHEMISTRY", topic: "Moles and Avogadro's Numbers", statement: "Construct mole ratios from balanced equations for use as conversion factors in stoichiometric problems." },
  { code: "CHEM-1.2", unit: "INTRODUCTION OF FUNDAMENTALS AND CONCEPT OF CHEMISTRY", topic: "Moles and Avogadro's Numbers", statement: "Perform stoichiometric calculations with balanced equations using moles, representative particles, masses and volumes of the gases (at ST)." },
  { code: "CHEM-1.3", unit: "INTRODUCTION OF FUNDAMENTALS AND CONCEPT OF CHEMISTRY", topic: "Limiting and Excess Reactants", statement: "Explain the limiting reagent in reaction" },
  { code: "CHEM-1.4", unit: "INTRODUCTION OF FUNDAMENTALS AND CONCEPT OF CHEMISTRY", topic: "Limiting and Excess Reactants", statement: "Calculate the maximum number of products produced and the amount of any un-reacted excess reagent" },
  { code: "CHEM-1.5", unit: "INTRODUCTION OF FUNDAMENTALS AND CONCEPT OF CHEMISTRY", topic: "Yield", statement: "Given information from which any two of the following may be determined, calculate the third: theoretical yield, actual yield, percentage yield." },
  { code: "CHEM-1.6", unit: "INTRODUCTION OF FUNDAMENTALS AND CONCEPT OF CHEMISTRY", topic: "Yield", statement: "Calculate the theoretical yield and the percent yield when given the balanced equation, the amount of reactants and the actual yield." },
  // 2 - ATOMIC STRUCTURE
  { code: "CHEM-2.1", unit: "ATOMIC STRUCTURE", topic: "Discovery of Proton / Planck's Quantum Theory", statement: "Describe discovery and properties of proton (Positive rays)" },
  { code: "CHEM-2.2", unit: "ATOMIC STRUCTURE", topic: "Discovery of Proton / Planck's Quantum Theory", statement: "Define Photon as a unit of radiation energy" },
  { code: "CHEM-2.3", unit: "ATOMIC STRUCTURE", topic: "Quantum Number", statement: "Describe the concept of orbitals." },
  { code: "CHEM-2.4", unit: "ATOMIC STRUCTURE", topic: "Quantum Number", statement: "Distinguish among Principal energy level, energy sub-level and atomic orbitals" },
  { code: "CHEM-2.5", unit: "ATOMIC STRUCTURE", topic: "Shapes of orbitals", statement: "Describe the general shapes of s, p and d orbitals." },
  { code: "CHEM-2.6", unit: "ATOMIC STRUCTURE", topic: "Spectrum of Hydrogen", statement: "Describe Hydrogen Atom using the quantum theory" },
  { code: "CHEM-2.7", unit: "ATOMIC STRUCTURE", topic: "Electronic Configuration", statement: "Use the Aufbau principle, the Pauli Exclusion Principle and Hund's Rule to write the Electronic Configuration of atoms." },
  { code: "CHEM-2.8", unit: "ATOMIC STRUCTURE", topic: "Electronic Configuration", statement: "Write electronic configuration of atom" },
  // 3 - GASES
  { code: "CHEM-3.1", unit: "GASES", topic: "Kinetic Molecular Theory", statement: "List the postulates of Kinetic Molecular Theory" },
  { code: "CHEM-3.2", unit: "GASES", topic: "Kinetic Molecular Theory", statement: "Describe the motion of particles of the gas according to kinetic theory." },
  { code: "CHEM-3.3", unit: "GASES", topic: "Standard Temperature and Pressure (STP)", statement: "State the values of standard temperature and pressure (STP)" },
  { code: "CHEM-3.4", unit: "GASES", topic: "Boyle's Law", statement: "Describe the effect of change in pressure on the volume of gas." },
  { code: "CHEM-3.5", unit: "GASES", topic: "Charles's Law", statement: "Describe the effect of change in temperature on the volume of gas." },
  { code: "CHEM-3.6", unit: "GASES", topic: "Absolute Zero", statement: "Explain the significance of the absolute zero, giving its value in degree." },
  { code: "CHEM-3.7", unit: "GASES", topic: "Ideal Gas Equation", statement: "Derive Ideal Gas equation using Boyle's Law, Charle's Law and Avogadro's Law." },
  { code: "CHEM-3.8", unit: "GASES", topic: "Unit of R", statement: "Explain the significance and different units of ideal gas constant." },
  { code: "CHEM-3.9", unit: "GASES", topic: "Real and Ideal Gas", statement: "Distinguish between Real and Ideal Gases." },
  // 4 - LIQUIDS
  { code: "CHEM-4.1", unit: "LIQUIDS", topic: "Properties of Liquids based on Kinetic Molecular Theory", statement: "Describe simple properties of liquids e.g. diffusion, compression, expansion, motion of molecules, spaces between them, intermolecular forces and kinetic energy based on kinetic molecular theory." },
  { code: "CHEM-4.2", unit: "LIQUIDS", topic: "Evaporation, Boiling Point and Vapor Pressure", statement: "Explain physical properties of liquid such as evaporation, vapor pressure, boiling point" },
  { code: "CHEM-4.3", unit: "LIQUIDS", topic: "Hydrogen Bonding", statement: "Describe the hydrogen bonding in H2O, NH3 and HF molecules." },
  { code: "CHEM-4.4", unit: "LIQUIDS", topic: "Anomalous Behavior of Water", statement: "Anomalous behavior of water when its density shows maximum at 4 degrees centigrade." },
  // 5 - SOLID
  { code: "CHEM-5.1", unit: "SOLID", topic: "Crystalline Solids", statement: "Describe crystalline solid" },
  { code: "CHEM-5.2", unit: "SOLID", topic: "Factors Affecting the Shape of Ionic Crystals", statement: "Name three factors that affect the shape of the ionic crystals." },
  { code: "CHEM-5.3", unit: "SOLID", topic: "Difference between Ionic and Molecular Crystals", statement: "Give brief description of ionic and molecular crystals." },
  { code: "CHEM-5.4", unit: "SOLID", topic: "Crystal Lattice", statement: "Explain the structure of a crystal lattice" },
  { code: "CHEM-5.5", unit: "SOLID", topic: "Lattice Energy", statement: "Define Lattice Energy." },
  // 6 - CHEMICAL EQUILIBRIUM
  { code: "CHEM-6.1", unit: "CHEMICAL EQUILIBRIUM", topic: "Chemical Equilibrium", statement: "Define chemical equilibrium in terms of reversible reaction." },
  { code: "CHEM-6.2", unit: "CHEMICAL EQUILIBRIUM", topic: "Chemical Equilibrium", statement: "Write both forward and reverse reactions and describe the macroscopic characteristics of each." },
  { code: "CHEM-6.3", unit: "CHEMICAL EQUILIBRIUM", topic: "Le Chatelier's Principle", statement: "State Le Chatelier's principle and be able to apply it to systems in equilibrium with changes in concentration, pressure, temperature or addition of catalyst." },
  { code: "CHEM-6.4", unit: "CHEMICAL EQUILIBRIUM", topic: "Solubility Products", statement: "Define and explain solubility products." },
  { code: "CHEM-6.5", unit: "CHEMICAL EQUILIBRIUM", topic: "Common Ion Effect", statement: "Define and explain the common ion effect by giving suitable examples." },
  { code: "CHEM-6.6", unit: "CHEMICAL EQUILIBRIUM", topic: "Buffer Solution", statement: "Define buffer solution and explain types of buffers." },
  { code: "CHEM-6.7", unit: "CHEMICAL EQUILIBRIUM", topic: "Haber's Process", statement: "Explain synthesis of Ammonia by Haber's process." },
  // 7 - REACTION KINETICS
  { code: "CHEM-7.1", unit: "REACTION KINETICS", topic: "Chemical Kinetics", statement: "Define chemical kinetics." },
  { code: "CHEM-7.2", unit: "REACTION KINETICS", topic: "Chemical Kinetics", statement: "Explain the terms: rate of reaction, rate equation." },
  { code: "CHEM-7.3", unit: "REACTION KINETICS", topic: "Factors Affecting Rate of Reaction", statement: "Explain qualitatively factors affecting rate of reaction." },
  { code: "CHEM-7.4", unit: "REACTION KINETICS", topic: "Order of Reaction", statement: "Give the order with respect to the reactant, write the rate law for reaction." },
  { code: "CHEM-7.5", unit: "REACTION KINETICS", topic: "Order of Reaction", statement: "Explain the meaning of the term activation energy and activated complex." },
  { code: "CHEM-7.6", unit: "REACTION KINETICS", topic: "Order of Reaction", statement: "Relate the ideas of activation energy and the activated complex to the rate of reaction." },
  { code: "CHEM-7.7", unit: "REACTION KINETICS", topic: "Rate Constant", statement: "Describe the role of the rate constant in the theoretical determination of reaction rate." },
  // 8 - THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION
  { code: "CHEM-8.1", unit: "THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION", topic: "Thermodynamics", statement: "Define Thermodynamics" },
  { code: "CHEM-8.2", unit: "THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION", topic: "Exothermic and Endothermic Reaction", statement: "Classify reactions as exothermic and endothermic" },
  { code: "CHEM-8.3", unit: "THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION", topic: "Different Terms Used", statement: "Define the terms system, surroundings, boundary, state function, heat, heat capacity, internal energy, work done and enthalpy of a substance." },
  { code: "CHEM-8.4", unit: "THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION", topic: "Internal Energies", statement: "Name and define the units of the Internal energy." },
  { code: "CHEM-8.5", unit: "THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION", topic: "Law of Thermodynamics", statement: "Explain the first law of thermodynamics of energy conservation." },
  { code: "CHEM-8.6", unit: "THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION", topic: "Hess's Law", statement: "Apply Hess's Law to construct simple energy cycles." },
  { code: "CHEM-8.7", unit: "THERMOCHEMISTRY AND ENERGETICS OF CHEMICAL REACTION", topic: "Enthalpy", statement: "Describe enthalpy of the reaction" },
  // 9 - ELECTROCHEMISTRY
  { code: "CHEM-9.1", unit: "ELECTROCHEMISTRY", topic: "Redox Reaction", statement: "Give the characteristics of a redox reaction." },
  { code: "CHEM-9.2", unit: "ELECTROCHEMISTRY", topic: "Oxidation and Reduction", statement: "Define oxidation and reduction in terms of a change in oxidation number." },
  { code: "CHEM-9.3", unit: "ELECTROCHEMISTRY", topic: "Balancing Chemical Reaction", statement: "Use the oxidation number change method to identify atoms being oxidized or reduced in redox reactions." },
  { code: "CHEM-9.4", unit: "ELECTROCHEMISTRY", topic: "Standard Hydrogen Electrode (SHE)", statement: "Define cathode, anode, electrode potential and S.H.E." },
  { code: "CHEM-9.5", unit: "ELECTROCHEMISTRY", topic: "Standard Hydrogen Electrode (SHE)", statement: "Define the standard electrode potential of an electrode." },
  // 10 - CHEMICAL BONDING
  { code: "CHEM-10.1", unit: "CHEMICAL BONDING", topic: "VSEPR Theory", statement: "Use VSEPR Theory to describe the shapes of the molecules." },
  { code: "CHEM-10.2", unit: "CHEMICAL BONDING", topic: "Sigma and Pi Bond", statement: "Describe the features of sigma and pi-bonds." },
  { code: "CHEM-10.3", unit: "CHEMICAL BONDING", topic: "Hybridization", statement: "Describe the shapes of simple molecules using orbital hybridization." },
  { code: "CHEM-10.4", unit: "CHEMICAL BONDING", topic: "Application of VSEPR Theory", statement: "Determine the shapes of some molecules from the number of the bonded pairs." },
  { code: "CHEM-10.5", unit: "CHEMICAL BONDING", topic: "Dipole Moment", statement: "Predict the molecular polarity from the shapes of molecules." },
  { code: "CHEM-10.6", unit: "CHEMICAL BONDING", topic: "Dipole Moment", statement: "Explain what is meant by the term ionic character of the covalent bond." },
  { code: "CHEM-10.7", unit: "CHEMICAL BONDING", topic: "Dipole Moment", statement: "Describe how knowledge of molecular polarity can be used to explain some physical and chemical properties of the molecules." },
  { code: "CHEM-10.8", unit: "CHEMICAL BONDING", topic: "Bond Energy", statement: "Define bond energies and explain how they can be used to compare strengths of different chemical bonds." },
  // 11 - S- AND P- BLOCK ELEMENTS
  { code: "CHEM-11.1", unit: "S- AND P- BLOCK ELEMENTS", topic: "Properties and their Trends", statement: "Define and explain the terms atomic radii, ionic radii, covalent radii, ionization energy, electron affinity, electronegativity, bond energy and bond length." },
  { code: "CHEM-11.2", unit: "S- AND P- BLOCK ELEMENTS", topic: "S-, P-, D- & F- Block Elements", statement: "Recognize the demarcation of the periodic table into S-block, P-block, D-block and F-block." },
  { code: "CHEM-11.3", unit: "S- AND P- BLOCK ELEMENTS", topic: "Reaction of Group I Elements", statement: "Describe reactions of Group I elements with water, oxygen and chlorine." },
  { code: "CHEM-11.4", unit: "S- AND P- BLOCK ELEMENTS", topic: "Reaction of Group II Elements", statement: "Describe reactions of Group II elements with water, oxygen and chlorine." },
  { code: "CHEM-11.5", unit: "S- AND P- BLOCK ELEMENTS", topic: "Reaction of Group IV Elements", statement: "Describe reactions of Group IV Elements." },
  // 12 - TRANSITION ELEMENTS
  { code: "CHEM-12.1", unit: "TRANSITION ELEMENTS", topic: "Electronic Structure", statement: "Describe the electronic structures of the elements and ions of d-block Elements." },
  // 13 - FUNDAMENTAL PRINCIPLES OF ORGANIC CHEMISTRY
  { code: "CHEM-13.1", unit: "FUNDAMENTAL PRINCIPLES OF ORGANIC CHEMISTRY", topic: "Definition and Classification of Organic Compound", statement: "Define organic chemistry and organic compound." },
  { code: "CHEM-13.2", unit: "FUNDAMENTAL PRINCIPLES OF ORGANIC CHEMISTRY", topic: "Definition and Classification of Organic Compound", statement: "Classify organic compounds on structural basis." },
  { code: "CHEM-13.3", unit: "FUNDAMENTAL PRINCIPLES OF ORGANIC CHEMISTRY", topic: "Functional Group", statement: "Define functional group." },
  { code: "CHEM-13.4", unit: "FUNDAMENTAL PRINCIPLES OF ORGANIC CHEMISTRY", topic: "Isomerism", statement: "Explain stereoisomerism and its types." },
  // 14 - CHEMISTRY OF HYDROCARBONS
  { code: "CHEM-14.1", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Nomenclature of Alkanes", statement: "Describe the nomenclature of Alkanes." },
  { code: "CHEM-14.2", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Free Radical Mechanism", statement: "Define Free Radical Initiation, propagation and termination." },
  { code: "CHEM-14.3", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Free Radical Mechanism", statement: "Describe the mechanism of the free radical substitution in alkanes exemplified by Methane and Ethane." },
  { code: "CHEM-14.4", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Nomenclature of Alkenes", statement: "Explain the IUPAC nomenclature of alkenes." },
  { code: "CHEM-14.5", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Shapes of Alkenes", statement: "Explain the shapes of the Ethene molecules in terms of Sigma and Pi C-C Bonds." },
  { code: "CHEM-14.6", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Structure and Reactivity of Alkenes", statement: "Describe the structure and reactivity of Alkenes as exemplified by Ethene." },
  { code: "CHEM-14.7", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Preparation of Alkanes", statement: "Explain dehydration of alcohols and dehydrohalogenation of RX for the preparation of Ethane." },
  { code: "CHEM-14.8", unit: "CHEMISTRY OF HYDROCARBONS", topic: "MOT of Benzene; Resonance and Resonance Energy", statement: "Explain the shape of Benzene Molecules (Molecular orbital treatment)." },
  { code: "CHEM-14.9", unit: "CHEMISTRY OF HYDROCARBONS", topic: "MOT of Benzene; Resonance and Resonance Energy", statement: "Define resonance, resonance energy and relative stability." },
  { code: "CHEM-14.10", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Reactivity of Benzene", statement: "Compare the reactivity of benzene with alkanes and alkenes." },
  { code: "CHEM-14.11", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Chemical Reactions of Benzenes", statement: "Define addition reactions of benzene and methylbenzene." },
  { code: "CHEM-14.12", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Chemical Reactions of Benzenes", statement: "Describe the mechanism of electrophilic substitution in Benzene." },
  { code: "CHEM-14.13", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Chemical Reactions of Benzenes", statement: "Discuss chemistry of benzene and methylbenzene by nitration, sulphonation, halogenation, Friedel Craft's Alkylation and acylation." },
  { code: "CHEM-14.14", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Effect of Substituents", statement: "Apply the knowledge of positions of substituents in the electrophilic substitution of benzene." },
  { code: "CHEM-14.15", unit: "CHEMISTRY OF HYDROCARBONS", topic: "IUPAC System of Alkynes", statement: "Use the IUPAC naming System of Alkynes." },
  { code: "CHEM-14.16", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Preparation of Alkynes", statement: "Describe the preparation of Alkynes using elimination reactions." },
  { code: "CHEM-14.17", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Acidity of Alkynes", statement: "Describe the acidity of alkynes." },
  { code: "CHEM-14.18", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Reactions of Alkynes", statement: "Discuss chemistry of alkynes by hydrogenation, hydrohalogenation and hydration." },
  { code: "CHEM-14.19", unit: "CHEMISTRY OF HYDROCARBONS", topic: "Substitution vs Addition", statement: "Describe and differentiate between substitution and Addition reactions." },
  // 15 - ALKYL HALIDES
  { code: "CHEM-15.1", unit: "ALKYL HALIDES", topic: "Nomenclature", statement: "Name Alkyl Halides using IUPAC system." },
  { code: "CHEM-15.2", unit: "ALKYL HALIDES", topic: "Structure and Reactivity", statement: "Discuss the structure and reactivity of RX." },
  { code: "CHEM-15.3", unit: "ALKYL HALIDES", topic: "Substitution vs Elimination", statement: "Describe the mechanism and types of nucleophilic substitution reactions." },
  { code: "CHEM-15.4", unit: "ALKYL HALIDES", topic: "Substitution vs Elimination", statement: "Describe the mechanism and types of elimination reactions." },
  // 16 - ALCOHOLS AND PHENOLS
  { code: "CHEM-16.1", unit: "ALCOHOLS AND PHENOLS", topic: "Nomenclature, Structure and Reactivity of Alcohol", statement: "Explain nomenclature and structure of Alcohols." },
  { code: "CHEM-16.2", unit: "ALCOHOLS AND PHENOLS", topic: "Nomenclature, Structure and Reactivity of Alcohol", statement: "Explain the reactivity of Alcohols." },
  { code: "CHEM-16.3", unit: "ALCOHOLS AND PHENOLS", topic: "Nomenclature, Structure and Reactivity of Alcohol", statement: "Describe the chemistry of alcohols by preparation of ethers and esters." },
  { code: "CHEM-16.4", unit: "ALCOHOLS AND PHENOLS", topic: "Nomenclature, Structure and Reactivity of Phenols", statement: "Explain the nomenclature, structure and reactivity of Phenol." },
  { code: "CHEM-16.5", unit: "ALCOHOLS AND PHENOLS", topic: "Nomenclature, Structure and Reactivity of Phenols", statement: "Discuss the reactivity of phenol and their chemistry by electrophilic aromatic substitution." },
  { code: "CHEM-16.6", unit: "ALCOHOLS AND PHENOLS", topic: "Alcohols and Phenols", statement: "Differentiate between an alcohol and phenol." },
  // 17 - ALDEHYDES AND KETONES
  { code: "CHEM-17.1", unit: "ALDEHYDES AND KETONES", topic: "Nomenclature and Structure of Aldehydes and Ketones", statement: "Explain nomenclature and structure of Aldehydes and Ketones." },
  { code: "CHEM-17.2", unit: "ALDEHYDES AND KETONES", topic: "Preparation", statement: "Discuss the preparation of aldehydes and ketones." },
  { code: "CHEM-17.3", unit: "ALDEHYDES AND KETONES", topic: "Reactivity of Aldehydes and Ketones", statement: "Describe Reactivity of Aldehydes and Ketones and their comparison." },
  { code: "CHEM-17.4", unit: "ALDEHYDES AND KETONES", topic: "Reaction of Aldehydes and Ketones", statement: "Describe Acid and Base catalyzed Nucleophilic addition reactions of aldehydes and ketones." },
  { code: "CHEM-17.5", unit: "ALDEHYDES AND KETONES", topic: "Reaction of Aldehydes and Ketones", statement: "Discuss the chemistry of Aldehydes and Ketones by their reduction to alcohols." },
  { code: "CHEM-17.6", unit: "ALDEHYDES AND KETONES", topic: "Reaction of Aldehydes and Ketones", statement: "Describe oxidation reactions of aldehydes and ketones." },
  // 18 - CARBOXYLIC ACIDS
  { code: "CHEM-18.1", unit: "CARBOXYLIC ACIDS", topic: "Nomenclature, Structure and Preparation of Carboxylic Acid", statement: "Describe nomenclature, Structure and Preparation of Carboxylic Acid." },
  { code: "CHEM-18.2", unit: "CARBOXYLIC ACIDS", topic: "Chemical Reactions/Reactivity", statement: "Discuss reactivity of carboxylic acid." },
  { code: "CHEM-18.3", unit: "CARBOXYLIC ACIDS", topic: "Conversion of Carboxylic Acid", statement: "Describe the Chemistry of carboxylic acid by conversion to carboxylic acid derivative: acyl halides, acid anhydrides, esters and reactions involving conversion of these." },
  // 19 - MACROMOLECULES
  { code: "CHEM-19.1", unit: "MACROMOLECULES", topic: "Classification of Proteins", statement: "Explain the basis of classification and structure function relationship of proteins." },
  { code: "CHEM-19.2", unit: "MACROMOLECULES", topic: "Importance of Proteins", statement: "Describe the role of various proteins in maintaining body functions and their Nutritional importance." },
  { code: "CHEM-19.3", unit: "MACROMOLECULES", topic: "Enzymes as Biocatalyst", statement: "Describe the role of enzymes as Biocatalyst." },
  // 20 - INDUSTRIAL CHEMISTRY
  { code: "CHEM-20.1", unit: "INDUSTRIAL CHEMISTRY", topic: "Adhesive", statement: "Know about types and application of Adhesive." },
  { code: "CHEM-20.2", unit: "INDUSTRIAL CHEMISTRY", topic: "Dyes", statement: "Know about types of dyes and their uses." },
  { code: "CHEM-20.3", unit: "INDUSTRIAL CHEMISTRY", topic: "Polymers", statement: "Know about condensation and addition polymers and their sub-types." },
];

export const MDCAT_2025_PHYSICS: CurriculumOutcome[] = [
  // 1 - VECTORS AND EQUILIBRIUM
  { code: "PHY-1.1", unit: "VECTORS AND EQUILIBRIUM", topic: "Addition of Vectors (Rectangular Components)", statement: "Determine the sum of vectors using perpendicular components." },
  { code: "PHY-1.2", unit: "VECTORS AND EQUILIBRIUM", topic: "Product of Vectors (Scalar Product)", statement: "Describe Scalar Product of two vectors in term of angle between them." },
  { code: "PHY-1.3", unit: "VECTORS AND EQUILIBRIUM", topic: "Product of Vectors (Vector Product)", statement: "Describe Vector product of two vectors in terms of angle between them." },
  // 2 - FORCE AND MOTION
  { code: "PHY-2.1", unit: "FORCE AND MOTION", topic: "Displacement", statement: "Describe displacement." },
  { code: "PHY-2.2", unit: "FORCE AND MOTION", topic: "Velocity", statement: "Describe average velocity of objects." },
  { code: "PHY-2.3", unit: "FORCE AND MOTION", topic: "Displacement-time Graph", statement: "Interpret displacement-time graph of objects moving along the same straight line." },
  { code: "PHY-2.4", unit: "FORCE AND MOTION", topic: "Acceleration", statement: "Describe acceleration." },
  { code: "PHY-2.5", unit: "FORCE AND MOTION", topic: "Uniform and Variable Acceleration", statement: "Distinguish between uniform and variable acceleration." },
  { code: "PHY-2.6", unit: "FORCE AND MOTION", topic: "Projectile Motion", statement: "Explain that projectile motion is two-dimensional motion in a vertical plane." },
  { code: "PHY-2.7", unit: "FORCE AND MOTION", topic: "Ideal Projectile", statement: "Explain the idea of a projectile in the absence of air resistance." },
  { code: "PHY-2.8", unit: "FORCE AND MOTION", topic: "Projectile Motion (Velocity)", statement: "Explain that the horizontal component (VH) of velocity is constant." },
  { code: "PHY-2.9", unit: "FORCE AND MOTION", topic: "Projectile Motion (Velocity)", statement: "Acceleration is in the vertical direction and is the same as that of a vertically free-falling object." },
  { code: "PHY-2.10", unit: "FORCE AND MOTION", topic: "Projectile Motion (Velocity)", statement: "Differentiate between the characteristics of horizontal motion and vertical motion." },
  { code: "PHY-2.11", unit: "FORCE AND MOTION", topic: "Projectile Motion: Maximum Height, Range, Time of Flight, Maximum Angle", statement: "Evaluate, using the equations of uniformly accelerated motion for a given initial velocity of a frictionless projectile: (a) how much higher it goes; (b) how far it goes along level land; (c) where it is after a given time; (d) how long it remains in air; (e) the parameters for a projectile launched from ground height; (f) the launch angle that results in maximum range; (g) the relation between launch angles that result in the same range." },
  { code: "PHY-2.12", unit: "FORCE AND MOTION", topic: "Newton's Laws of Motion", statement: "Apply Newton's laws to explain the motion of objects in a variety of context." },
  { code: "PHY-2.13", unit: "FORCE AND MOTION", topic: "Newton's Second Law and Linear Momentum", statement: "Describe Newton's second law of motion as rate of change of momentum." },
  { code: "PHY-2.14", unit: "FORCE AND MOTION", topic: "Newton's Third Law of Motion", statement: "Correlate Newton's third law of motion and conservation of momentum." },
  { code: "PHY-2.15", unit: "FORCE AND MOTION", topic: "Collision", statement: "Solve different problems of elastic and inelastic collisions between two bodies in one dimension by using law of conservation of momentum." },
  { code: "PHY-2.16", unit: "FORCE AND MOTION", topic: "Momentum and Explosive Forces", statement: "Describe that momentum is conserved in the situations of explosions and recoil." },
  { code: "PHY-2.17", unit: "FORCE AND MOTION", topic: "Perfectly Elastic Collision in One Dimension", statement: "Identify that for a perfectly elastic collision, the relative speed of approach is equal to the relative speed of separation." },
  // 3 - WORK AND ENERGY
  { code: "PHY-3.1", unit: "WORK AND ENERGY", topic: "Work", statement: "Describe the concept of work in terms of the product of force F and displacement d in the direction of force." },
  { code: "PHY-3.2", unit: "WORK AND ENERGY", topic: "Energy", statement: "Describe energy." },
  { code: "PHY-3.3", unit: "WORK AND ENERGY", topic: "Kinetic Energy", statement: "Explain kinetic energy." },
  { code: "PHY-3.4", unit: "WORK AND ENERGY", topic: "Potential Energy", statement: "Explain the difference between potential energy and gravitational potential energy." },
  { code: "PHY-3.5", unit: "WORK AND ENERGY", topic: "Absolute Potential Energy", statement: "Describe that the gravitational potential energy is measured from a reference level and can be positive or negative, to denote the orientation from the reference levels." },
  { code: "PHY-3.6", unit: "WORK AND ENERGY", topic: "Power", statement: "Express power as scalar product of force and velocity." },
  { code: "PHY-3.7", unit: "WORK AND ENERGY", topic: "Work Energy Theorem in Resistive Medium", statement: "Explain that work done against friction is dissipated as heat in the environment." },
  { code: "PHY-3.8", unit: "WORK AND ENERGY", topic: "Implications of Energy Losses in Practical Devices and Efficiency", statement: "State the implications of energy losses in practical devices." },
  // 4 - ROTATIONAL AND CIRCULAR MOTION
  { code: "PHY-4.1", unit: "ROTATIONAL AND CIRCULAR MOTION", topic: "Angular Displacement", statement: "Define angular displacement and express angular displacement in radians." },
  { code: "PHY-4.2", unit: "ROTATIONAL AND CIRCULAR MOTION", topic: "Angular Displacement", statement: "Define revolution, degree and radian." },
  { code: "PHY-4.3", unit: "ROTATIONAL AND CIRCULAR MOTION", topic: "Angular Velocity", statement: "Describe the term angular velocity." },
  { code: "PHY-4.4", unit: "ROTATIONAL AND CIRCULAR MOTION", topic: "Relation between Angular and Linear Quantities", statement: "Find out the relationship between: (a) linear and angular variables; (b) linear and angular displacements; (c) linear and angular velocities; (d) linear and angular accelerations." },
  // 5 - FLUID DYNAMICS
  { code: "PHY-5.1", unit: "FLUID DYNAMICS", topic: "Terminal Velocity", statement: "Describe the terminal velocity of an object." },
  { code: "PHY-5.2", unit: "FLUID DYNAMICS", topic: "Fluid Drag", statement: "Define and explain the term fluid drag." },
  { code: "PHY-5.3", unit: "FLUID DYNAMICS", topic: "Fluid Flow", statement: "Define the terms steady (streamline or laminar) flow, incompressible flow and non-viscous flow as applied to the motion of an ideal fluid." },
  { code: "PHY-5.4", unit: "FLUID DYNAMICS", topic: "Fluid Flow", statement: "Explain that at sufficiently high velocity, the flow of viscous fluid undergoes a transition from laminar to turbulence conditions." },
  { code: "PHY-5.5", unit: "FLUID DYNAMICS", topic: "Fluid Flow", statement: "Describe that majority of practical examples of fluid flow and resistance to motion in fluid involve turbulent rather than laminar conditions." },
  { code: "PHY-5.6", unit: "FLUID DYNAMICS", topic: "Equation of Continuity", statement: "Describe the equation of continuity Av = constant for the flow of an ideal and incompressible fluid and solve problems using it." },
  { code: "PHY-5.7", unit: "FLUID DYNAMICS", topic: "Equation of Continuity", statement: "Identify that the equation of continuity is a form of the principle of conservation of mass." },
  { code: "PHY-5.8", unit: "FLUID DYNAMICS", topic: "Bernoulli's Equation", statement: "Interpret and apply Bernoulli's effect in blood physics." },
  { code: "PHY-5.9", unit: "FLUID DYNAMICS", topic: "Bernoulli's Equation", statement: "Derive Bernoulli's equation for the case of a horizontal tube of flow." },
  { code: "PHY-5.10", unit: "FLUID DYNAMICS", topic: "Bernoulli's Equation", statement: "Describe that the pressure difference can arise from different rates of flow of fluid (Bernoulli's effect)." },
  // 6 - WAVES
  { code: "PHY-6.1", unit: "WAVES", topic: "Motion of Wave", statement: "Describe the meaning of wave motion as illustrated by vibrations in ropes and springs." },
  { code: "PHY-6.2", unit: "WAVES", topic: "Progressive Waves", statement: "Demonstrate that mechanical waves require a medium for their propagation while electromagnetic waves do not." },
  { code: "PHY-6.3", unit: "WAVES", topic: "Characteristics of Wave", statement: "Define and apply the following terms to the wave model: medium, displacement, amplitude, period, compression, rarefaction, crest, trough, wavelength, velocity." },
  { code: "PHY-6.4", unit: "WAVES", topic: "Wave Speed", statement: "Solve problems using the equation v = f x wavelength." },
  { code: "PHY-6.5", unit: "WAVES", topic: "Progressive Waves", statement: "Describe that energy is transferred due to a progressive wave." },
  { code: "PHY-6.6", unit: "WAVES", topic: "Classification of Progressive Waves", statement: "Compare transverse and longitudinal waves." },
  { code: "PHY-6.7", unit: "WAVES", topic: "Speed of Sound; Newton's Formula for Speed of Sound in Air", statement: "Explain that speed of sound depends on the properties of the medium in which it propagates and describe Newton's formula for the speed of sound." },
  { code: "PHY-6.8", unit: "WAVES", topic: "Speed of Sound; Newton's Formula for Speed of Sound in Air", statement: "Describe the Laplace correction in Newton's formula for speed of sound in air." },
  { code: "PHY-6.9", unit: "WAVES", topic: "Speed of Sound; Newton's Formula for Speed of Sound in Air", statement: "Identify the factors on which speed of sound in air depends." },
  { code: "PHY-6.10", unit: "WAVES", topic: "Superposition of Waves", statement: "Describe the principle of superposition of two waves from coherent sources." },
  { code: "PHY-6.11", unit: "WAVES", topic: "Interference of Sound Waves", statement: "Describe the phenomenon of interference of sound waves." },
  { code: "PHY-6.12", unit: "WAVES", topic: "Stationary Waves", statement: "Explain the formation of stationary waves using graphical method." },
  { code: "PHY-6.13", unit: "WAVES", topic: "Stationary Waves", statement: "Define the terms node and antinodes." },
  { code: "PHY-6.14", unit: "WAVES", topic: "Stationary Waves", statement: "Describe modes of vibration of strings." },
  { code: "PHY-6.15", unit: "WAVES", topic: "Stationary Waves", statement: "Describe formation of stationary waves in vibrating air columns." },
  { code: "PHY-6.16", unit: "WAVES", topic: "Superposition of Waves", statement: "Explain the principle of superposition." },
  { code: "PHY-6.17", unit: "WAVES", topic: "Simple Harmonic Motion; Terminologies of SHM; Circular Motion and SHM; Energy", statement: "Explain Simple Harmonic Motion (S.H.M) and explain the characteristics of S.H.M." },
  { code: "PHY-6.18", unit: "WAVES", topic: "Circular Motion and SHM (Acceleration and Velocity of Projection)", statement: "Describe that when an object moves in a circle, the motion of its projection on the diameter of a circle is SHM." },
  // 7 - THERMODYNAMICS
  { code: "PHY-7.1", unit: "THERMODYNAMICS", topic: "Thermal Equilibrium, Heat", statement: "Describe that thermal energy is transferred from a region of higher temperature to a region of lower temperature." },
  { code: "PHY-7.2", unit: "THERMODYNAMICS", topic: "Molar Specific Heat of Gas", statement: "Differentiate between specific heat and molar specific heat." },
  { code: "PHY-7.3", unit: "THERMODYNAMICS", topic: "Work", statement: "Calculate work done by a thermodynamic system during a volume change." },
  { code: "PHY-7.4", unit: "THERMODYNAMICS", topic: "First Law of Thermodynamics", statement: "Describe the first law of thermodynamics expressed in terms of the change in internal energy, the heating of the system and work done on the system." },
  { code: "PHY-7.5", unit: "THERMODYNAMICS", topic: "First Law of Thermodynamics", statement: "Explain that the first law of thermodynamics expresses the conservation of energy." },
  { code: "PHY-7.6", unit: "THERMODYNAMICS", topic: "Molar Specific Heat of Gas", statement: "Define the terms specific heat and molar specific heats of a gas." },
  { code: "PHY-7.7", unit: "THERMODYNAMICS", topic: "Molar Specific Heat of Gas", statement: "Apply the first law of thermodynamics to derive the relation Cp - Cv = RC for an ideal gas." },
  // 8 - ELECTROSTATICS
  { code: "PHY-8.1", unit: "ELECTROSTATICS", topic: "Coulomb's Law", statement: "State Coulomb's law and explain that the force between two point charges is reduced in a medium other than free space using Coulomb's law." },
  { code: "PHY-8.2", unit: "ELECTROSTATICS", topic: "Electric Field", statement: "Describe the concept of an electric field as an example of a field of force." },
  { code: "PHY-8.3", unit: "ELECTROSTATICS", topic: "Electric Field Intensity due to a Point Charge", statement: "Calculate the magnitude and direction of the electric field at a point due to two charges with the same or opposite signs." },
  { code: "PHY-8.4", unit: "ELECTROSTATICS", topic: "Representation of Electric Field by Lines", statement: "Sketch the electric field lines for two point charges of equal magnitude with same or opposite signs." },
  { code: "PHY-8.5", unit: "ELECTROSTATICS", topic: "Electric Field Intensity due to an Infinite Sheet of Charges", statement: "Describe and draw the electric field due to an infinite size conducting plate of positive or negative charge." },
  { code: "PHY-8.6", unit: "ELECTROSTATICS", topic: "Electric Potential Energy and Potential due to a Point Charge", statement: "Define electric potential at a point in terms of the work done in bringing unit positive charge from infinity to that point." },
  { code: "PHY-8.7", unit: "ELECTROSTATICS", topic: "Electric Potential", statement: "Define the unit of potential." },
  { code: "PHY-8.8", unit: "ELECTROSTATICS", topic: "Electric Potential Energy and Potential due to a Point Charge", statement: "Derive an expression for electric potential at a point due to a point charge." },
  { code: "PHY-8.9", unit: "ELECTROSTATICS", topic: "Charging and Discharging of a Capacitor through a Resistance", statement: "Demonstrate charging and discharging of a capacitor through a resistance." },
  // 9 - CURRENT ELECTRICITY
  { code: "PHY-9.1", unit: "CURRENT ELECTRICITY", topic: "Steady Current", statement: "Describe the concept of steady current." },
  { code: "PHY-9.2", unit: "CURRENT ELECTRICITY", topic: "Ohm's Law", statement: "State Ohm's law." },
  { code: "PHY-9.3", unit: "CURRENT ELECTRICITY", topic: "Factors on which Resistance Depends; Temperature Coefficient of Resistivity", statement: "Define resistivity and explain its dependence upon temperature." },
  { code: "PHY-9.4", unit: "CURRENT ELECTRICITY", topic: "Internal Resistance of Sources", statement: "Explain the internal resistance of sources and its consequences for external circuits." },
  { code: "PHY-9.5", unit: "CURRENT ELECTRICITY", topic: "Maximum Power Output", statement: "Describe the conditions for maximum power transfer." },
  // 10 - ELECTROMAGNETISM
  { code: "PHY-10.1", unit: "ELECTROMAGNETISM", topic: "Magnetic Flux Density / Magnetic Field", statement: "Define magnetic flux density and its units." },
  { code: "PHY-10.2", unit: "ELECTROMAGNETISM", topic: "Magnetic Flux", statement: "Describe the concept of magnetic flux as the scalar product of magnetic field B and area A, using the relation flux = BA." },
  { code: "PHY-10.3", unit: "ELECTROMAGNETISM", topic: "Motion of Charged Particle in Magnetic Field", statement: "Describe quantitatively the path followed by a charged particle shot into a magnetic field in a direction perpendicular to the field." },
  { code: "PHY-10.4", unit: "ELECTROMAGNETISM", topic: "Motion of Charged Particle in Magnetic Field", statement: "Explain that a force may act on a charged particle in a uniform magnetic field." },
  // 11 - ELECTROMAGNETIC INDUCTION
  { code: "PHY-11.1", unit: "ELECTROMAGNETIC INDUCTION", topic: "Faraday's Law of Electromagnetic Induction", statement: "State Faraday's law of electromagnetic induction." },
  { code: "PHY-11.2", unit: "ELECTROMAGNETIC INDUCTION", topic: "Lenz's Law", statement: "Account for Lenz's law to predict the direction of an induced current and relate it to the principle of conservation of energy." },
  { code: "PHY-11.3", unit: "ELECTROMAGNETIC INDUCTION", topic: "Transformer", statement: "Describe the construction of a transformer and explain how it works." },
  { code: "PHY-11.4", unit: "ELECTROMAGNETIC INDUCTION", topic: "Transformer", statement: "Describe how set-up and step-down transformers can be used to ensure efficient transfer of electricity along cables." },
  // 12 - ALTERNATING CURRENT
  { code: "PHY-12.1", unit: "ALTERNATING CURRENT", topic: "Phase of Alternating Current", statement: "Describe the phase of Alternating Current and explain how phase lag and phase lead occur in AC circuits." },
  { code: "PHY-12.2", unit: "ALTERNATING CURRENT", topic: "AC through Resistor, Capacitor and Inductor", statement: "Explain the flow of AC through resistors, capacitors and inductors." },
  { code: "PHY-12.3", unit: "ALTERNATING CURRENT", topic: "Electromagnetic Waves", statement: "Become familiar with the EM spectrum ranging from radio waves to gamma rays." },
  // 13 - ELECTRONICS
  { code: "PHY-13.1", unit: "ELECTRONICS", topic: "Rectification", statement: "Define rectification and describe the use of diodes for half and full wave rectifications." },
  { code: "PHY-13.2", unit: "ELECTRONICS", topic: "PN Junction", statement: "Describe the PN junction and discuss its forward and reverse biasing." },
  // 14 - DAWN OF MODERN PHYSICS
  { code: "PHY-14.1", unit: "DAWN OF MODERN PHYSICS", topic: "Quantum Theory and Radiation", statement: "Explain the particle model of light in terms of photons with energy." },
  // 15 - ATOMIC SPECTRA
  { code: "PHY-15.1", unit: "ATOMIC SPECTRA", topic: "Atomic Spectra", statement: "Describe and explain atomic spectra / line spectrum." },
  // 16 - NUCLEAR PHYSICS
  { code: "PHY-16.1", unit: "NUCLEAR PHYSICS", topic: "Composition of Atomic Nuclei", statement: "Describe a simple model for the atom to include protons, neutrons and electrons." },
  { code: "PHY-16.2", unit: "NUCLEAR PHYSICS", topic: "Spontaneous and Random Nuclear Decay", statement: "Identify the spontaneous and random nature of nuclear decay." },
  { code: "PHY-16.3", unit: "NUCLEAR PHYSICS", topic: "Half-life and Rate of Decay", statement: "Describe the term half-life and solve problems using the equation lambda = 0.693 / T-half." },
  { code: "PHY-16.4", unit: "NUCLEAR PHYSICS", topic: "Biological and Medical Uses of Radiation", statement: "Describe biological effects of radiation and explain the different medical uses of radiation." },
];

export const MDCAT_2025_OUTCOMES: Record<CurriculumSubjectCode, CurriculumOutcome[]> = {
  BIOLOGY: MDCAT_2025_BIOLOGY,
  CHEMISTRY: MDCAT_2025_CHEMISTRY,
  PHYSICS: MDCAT_2025_PHYSICS,
};

/**
 * Outcome counts in the published PMDC 2025 curriculum, used by the inventory
 * test so a transcription slip cannot silently shrink the syllabus.
 */
export const MDCAT_2025_OFFICIAL_TOTALS: Record<CurriculumSubjectCode, { units: number; outcomes: number }> = {
  BIOLOGY: { units: 16, outcomes: 69 },
  CHEMISTRY: { units: 20, outcomes: 120 },
  PHYSICS: { units: 16, outcomes: 100 },
};