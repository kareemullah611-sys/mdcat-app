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

async function main() {
  const subject = await prisma.subject.findUniqueOrThrow({ where: { code: "BIOLOGY" } });
  const syllabus = await prisma.syllabusVersion.upsert({
    where: { code: "PMDC_MDCAT_2025_FINAL" },
    update: { name: "Final MDCAT Curriculum 2025", authority: "Pakistan Medical & Dental Council", year: 2025, status: "ACTIVE", sourceUrl: SOURCE_URL, publishedAt: new Date("2025-06-01T00:00:00.000Z") },
    create: { code: "PMDC_MDCAT_2025_FINAL", name: "Final MDCAT Curriculum 2025", authority: "Pakistan Medical & Dental Council", year: 2025, status: "ACTIVE", sourceUrl: SOURCE_URL, publishedAt: new Date("2025-06-01T00:00:00.000Z") },
  });
  for (const [code, unit, topic, statement] of biologyOutcomes) {
    await prisma.syllabusOutcome.upsert({
      where: { syllabusVersionId_code: { syllabusVersionId: syllabus.id, code: `BIO-${code}` } },
      update: { subjectId: subject.id, unit, topic, statement },
      create: { syllabusVersionId: syllabus.id, subjectId: subject.id, code: `BIO-${code}`, unit, topic, statement },
    });
  }
  console.log(`Seeded ${biologyOutcomes.length} Biology outcomes for ${syllabus.code}.`);
}

main().finally(() => prisma.$disconnect());
