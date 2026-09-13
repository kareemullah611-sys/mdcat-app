import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SOURCE_URL = "https://www.pmdc.pk/Documents/Syllabus/Uniform%20Curriculum%20MDCAT-2025%20%20Final%20%2826-05-2025%29.pdf";

const biologyOutcomes = [
  ["1.1", "ACELLULAR LIFE", "Viruses", "Classify viruses on the basis of their structure, number of strands, diseases, and hosts."],
  ["1.2", "ACELLULAR LIFE", "AIDS and HIV Infection", "Identify symptoms, mode of transmission, and cause of AIDS."],
  ["2.1", "BIOENERGETICS", "Respiration", "Outline cellular respiration of proteins and fats and correlate these with respiration of glucose."],
  ["3.1", "BIOLOGICAL MOLECULES", "Biological molecules", "Define and classify biological molecules."],
  ["3.2", "BIOLOGICAL MOLECULES", "Biological molecules", "Discuss the importance of biological molecules."],
  ["3.3", "BIOLOGICAL MOLECULES", "Biological importance of water", "Describe biologically important properties of water: polarity, hydrolysis, specific heat, solvent and reagent roles, density, cohesion, and ionization."],
  ["3.4", "BIOLOGICAL MOLECULES", "Carbohydrates", "Discuss monosaccharides, oligosaccharides, and polysaccharides including glucose, sucrose, lactose, starch, cellulose, and glycogen."],
  ["3.5", "BIOLOGICAL MOLECULES", "Proteins", "Describe amino acids and the structure of proteins."],
  ["3.6", "BIOLOGICAL MOLECULES", "Lipids", "Describe phospholipids, triglycerides, alcohols, esters, and acylglycerols."],
  ["3.7", "BIOLOGICAL MOLECULES", "RNA", "Give an account of the structure and function of RNA."],
  ["3.8", "BIOLOGICAL MOLECULES", "Conjugated molecules", "Discuss conjugated molecules including glycolipids and glycoproteins."],
  ["3.9", "BIOLOGICAL MOLECULES", "DNA", "Explain the Watson-Crick double-helical structure of DNA."],
  ["3.10", "BIOLOGICAL MOLECULES", "Gene", "Define a gene as a DNA nucleotide sequence that codes for formation of a polypeptide."],
  ["4.1", "CELL STRUCTURE & FUNCTION", "Cell structure", "Compare the structures of typical animal and plant cells."],
  ["4.2", "CELL STRUCTURE & FUNCTION", "Prokaryotic and eukaryotic cells", "Compare and contrast prokaryotic and eukaryotic cell structure."],
  ["4.3", "CELL STRUCTURE & FUNCTION", "Cytoplasmic organelles", "Outline the structure and function of the nucleus, endoplasmic reticulum, Golgi apparatus, and mitochondria."],
  ["4.4", "CELL STRUCTURE & FUNCTION", "Chromosomes", "Describe chromosome structure, chemical composition, and function."],
  ["6.1", "ENZYMES", "Enzymes", "Describe the distinguishing characteristics of enzymes."],
  ["6.2", "ENZYMES", "Mode of enzyme action", "Explain the mechanism of enzyme action."],
  ["6.3", "ENZYMES", "Factors affecting enzyme reactions", "Describe effects of temperature, pH, and concentration on enzyme action."],
  ["6.4", "ENZYMES", "Inhibitors", "Describe enzyme inhibitors."],
] as const;

const chemistryOutcomes = [
  ["1.1","STOICHIOMETRY","Mole ratios","Use balanced equations and mole ratios in stoichiometric calculations."],
  ["1.3","STOICHIOMETRY","Limiting reagent","Identify the limiting reactant and calculate the amount of product formed."],
  ["1.5","STOICHIOMETRY","Yield","Calculate theoretical yield, actual yield and percentage yield."],
  ["2.3","ATOMIC STRUCTURE","Atomic orbitals","Describe atomic orbitals and the probability distribution of electrons."],
  ["2.7","ATOMIC STRUCTURE","Electronic configuration","Apply Aufbau principle, Pauli exclusion principle and Hund's rule."],
  ["3.4","GASES","Gas laws","Apply Boyle's law to pressure-volume changes at constant temperature."],
  ["3.7","GASES","Ideal gas equation","Use the ideal gas equation to solve gas problems."],
  ["4.3","LIQUIDS","Intermolecular forces","Explain hydrogen bonding and its effects on physical properties."],
  ["5.5","SOLIDS","Ionic solids","Relate lattice energy to ionic charge, ionic size and crystal stability."],
  ["6.3","CHEMICAL EQUILIBRIUM","Le Chatelier principle","Predict equilibrium shifts using Le Chatelier's principle."],
  ["6.6","ACIDS, BASES AND SALTS","Buffers","Explain buffer action and resistance to changes in pH."],
  ["7.5","REACTION KINETICS","Activation energy","Explain activation energy and the effect of catalysts on reaction rate."],
  ["8.6","THERMOCHEMISTRY","Hess's law","Apply Hess's law to calculate enthalpy changes."],
  ["9.2","ELECTROCHEMISTRY","Oxidation state","Determine oxidation numbers and identify oxidation and reduction."],
  ["10.1","CHEMICAL BONDING","Molecular shape","Use VSEPR theory to predict molecular shapes."],
  ["11.1","PERIODICITY","Periodic trends","Explain periodic trends including ionization energy."],
  ["12.1","TRANSITION ELEMENTS","Electronic structure","Relate incomplete d subshells to transition-element properties."],
  ["13.3","ORGANIC CHEMISTRY","Functional groups","Recognize functional groups and classify organic compounds."],
  ["13.4","ORGANIC CHEMISTRY","Isomerism","Explain structural and stereoisomerism in organic compounds."],
  ["14.2","HYDROCARBONS","Alkanes","Explain the free-radical substitution reactions of alkanes."],
  ["14.12","HYDROCARBONS","Benzene","Explain electrophilic substitution reactions of benzene."],
  ["15.3","ALKYL HALIDES","Substitution","Explain nucleophilic substitution reactions of alkyl halides."],
  ["16.6","ALCOHOLS AND PHENOLS","Phenol acidity","Compare the acidity and reactions of alcohols and phenols."],
  ["17.6","ALDEHYDES AND KETONES","Oxidation","Distinguish aldehydes and ketones using oxidation reactions."],
  ["18.3","CARBOXYLIC ACIDS","Acid derivatives","Explain reactions and interconversion of carboxylic acids and their derivatives."],
] as const;

const physicsOutcomes = [
  ["1.1","VECTORS","Vector components","Resolve a vector into rectangular components."],
  ["1.2","VECTORS","Scalar product","Define and apply the scalar product of two vectors."],
  ["2.3","FORCE AND MOTION","Motion graphs","Interpret the slope of a displacement-time graph as velocity."],
  ["2.8","FORCE AND MOTION","Projectile motion","Analyze horizontal and vertical components of projectile motion."],
  ["2.13","FORCE AND MOTION","Momentum","Express Newton's second law as the rate of change of momentum."],
  ["2.15","FORCE AND MOTION","Momentum conservation","Apply conservation of linear momentum to an isolated system."],
  ["3.1","WORK AND ENERGY","Work","Calculate work as the scalar product of force and displacement."],
  ["3.3","WORK AND ENERGY","Kinetic energy","Apply the expression for translational kinetic energy."],
  ["3.6","WORK AND ENERGY","Power","Relate power to work, time, force and velocity."],
  ["4.4","CIRCULAR MOTION","Angular motion","Relate angular velocity to tangential speed."],
  ["5.1","FLUID DYNAMICS","Terminal velocity","Explain terminal velocity in terms of balanced forces."],
  ["5.2","FLUID DYNAMICS","Drag","Describe viscous drag on an object moving through a fluid."],
  ["5.6","FLUID DYNAMICS","Continuity equation","Apply the continuity equation to incompressible fluid flow."],
  ["5.8","FLUID DYNAMICS","Bernoulli principle","Apply Bernoulli's equation to steady fluid flow."],
  ["6.4","WAVES","Wave equation","Use the relationship among wave speed, frequency and wavelength."],
  ["6.6","WAVES","Wave types","Distinguish transverse and longitudinal waves."],
  ["6.12","WAVES","Stationary waves","Identify nodes and antinodes in stationary waves."],
  ["6.18","OSCILLATIONS","Simple harmonic motion","Describe simple harmonic motion and its relation to circular motion."],
  ["7.4","THERMODYNAMICS","First law","Apply the first law of thermodynamics."],
  ["8.1","ELECTROSTATICS","Coulomb's law","Apply Coulomb's law to point charges."],
  ["8.6","ELECTROSTATICS","Electric potential","Define electric potential as potential energy per unit charge."],
  ["9.2","CURRENT ELECTRICITY","Ohm's law","Apply Ohm's law under constant physical conditions."],
  ["10.3","ELECTROMAGNETISM","Magnetic force","Calculate the magnetic force on a moving charge."],
  ["11.1","ELECTROMAGNETIC INDUCTION","Faraday and Lenz laws","Explain induced emf using Faraday's and Lenz's laws."],
  ["16.3","NUCLEAR PHYSICS","Half-life","Use half-life to describe radioactive decay."],
] as const;

async function main() {
  const syllabus = await prisma.syllabusVersion.upsert({
    where: { code: "PMDC_MDCAT_2025_FINAL" },
    update: { name: "Final MDCAT Curriculum 2025", authority: "Pakistan Medical & Dental Council", year: 2025, status: "ACTIVE", sourceUrl: SOURCE_URL, publishedAt: new Date("2025-06-01T00:00:00.000Z") },
    create: { code: "PMDC_MDCAT_2025_FINAL", name: "Final MDCAT Curriculum 2025", authority: "Pakistan Medical & Dental Council", year: 2025, status: "ACTIVE", sourceUrl: SOURCE_URL, publishedAt: new Date("2025-06-01T00:00:00.000Z") },
  });
  const sets = [["BIOLOGY","BIO",biologyOutcomes],["CHEMISTRY","CHEM",chemistryOutcomes],["PHYSICS","PHY",physicsOutcomes]] as const;
  for (const [subjectCode, prefix, outcomes] of sets) {
    const subject = await prisma.subject.findUniqueOrThrow({ where: { code: subjectCode } });
    for (const [code, unit, topic, statement] of outcomes) {
      await prisma.syllabusOutcome.upsert({
        where: { syllabusVersionId_code: { syllabusVersionId: syllabus.id, code: `${prefix}-${code}` } },
        update: { subjectId: subject.id, unit, topic, statement },
        create: { syllabusVersionId: syllabus.id, subjectId: subject.id, code: `${prefix}-${code}`, unit, topic, statement },
      });
    }
  }
  console.log(`Seeded ${biologyOutcomes.length + chemistryOutcomes.length + physicsOutcomes.length} outcomes for ${syllabus.code}.`);
}

main().finally(() => prisma.$disconnect());
