import { PrismaClient } from "@prisma/client";
import { access } from "node:fs/promises";
import { resolveTextbookFile } from "../lib/textbook-storage";

const prisma = new PrismaClient();
const sourceLabel = "Federal Board / FBISE curriculum copy supplied by the administrator. Some scanned covers retain Khyber Pakhtunkhwa Textbook Board branding; redistribution rights must be verified before public distribution.";

const books = [
  { grade: 11, subject: "BIOLOGY", file: "fbise-biology-11.pdf", title: "Biology Grade XI (Federal)", pageCount: 426, chapters: ["Introduction", "Biological Molecules", "Enzymes", "The Cell", "Variety of Life", "Kingdom Prokaryotae", "Kingdom Protista", "Kingdom Fungi", "Kingdom Plantae", "Kingdom Animalia", "Bioenergetics", "Nutrition", "Gaseous Exchange", "Transport"] },
  { grade: 11, subject: "CHEMISTRY", file: "fbise-chemistry-11.pdf", title: "Chemistry Grade XI (Federal)", pageCount: 343, chapters: ["Basic Concepts", "Experimental Techniques in Chemistry", "Gases", "Liquids and Solids", "Atomic Structure", "Chemical Bonding", "Thermochemistry", "Chemical Equilibrium", "Solutions", "Electrochemistry", "Reaction Kinetics"] },
  { grade: 11, subject: "PHYSICS", file: "fbise-physics-11.pdf", title: "Physics Grade XI (Federal)", pageCount: 382, chapters: ["Measurements", "Vectors and Equilibrium", "Motion and Force", "Work and Energy", "Circular Motion", "Fluid Dynamics", "Oscillations", "Waves", "Physical Optics", "Optical Instruments", "Heat and Thermodynamics"] },
  { grade: 12, subject: "BIOLOGY", file: "fbise-biology-12.pdf", title: "Biology Grade XII (Federal)", pageCount: 335, chapters: ["Homeostasis", "Support and Movement", "Coordination and Control", "Reproduction", "Growth and Development", "Chromosomes and DNA", "Cell Cycle", "Variation and Genetics", "Biotechnology", "Evolution", "Ecosystem", "Some Major Ecosystems", "Man and His Environment"] },
  { grade: 12, subject: "CHEMISTRY", file: "fbise-chemistry-12.pdf", title: "Chemistry Grade XII (Federal)", pageCount: 394, chapters: ["Periodic Classification of Elements and Periodicity", "s-Block Elements", "Group IIIA and Group IVA Elements", "Group VA and Group VIA Elements", "Halogens and Noble Gases", "Transition Elements", "Fundamental Principles of Organic Chemistry", "Aliphatic Hydrocarbons", "Aromatic Hydrocarbons", "Alkyl Halides", "Alcohols, Phenols and Ethers", "Aldehydes and Ketones", "Carboxylic Acids", "Macromolecules", "Common Chemical Industries in Pakistan", "Environmental Chemistry"] },
  { grade: 12, subject: "PHYSICS", file: "fbise-physics-12.pdf", title: "Physics Grade XII (Federal)", pageCount: 446, chapters: ["Electrostatics", "Current Electricity", "Electromagnetism", "Electromagnetic Induction", "Alternating Current", "Physics of Solids", "Electronics", "Dawn of Modern Physics", "Atomic Spectra", "Nuclear Physics"] },
];

async function main() {
  const board = await prisma.board.findUniqueOrThrow({ where: { code: "FBISE" } });
  for (const item of books) {
    const filePath = resolveTextbookFile(item.file);
    if (!filePath) throw new Error(`Invalid file key: ${item.file}`);
    await access(filePath);
    const schoolClass = await prisma.schoolClass.findUniqueOrThrow({ where: { grade: item.grade } });
    const subject = await prisma.subject.findUniqueOrThrow({ where: { code: item.subject } });
    const existing = await prisma.book.findFirst({ where: { boardId: board.id, classId: schoolClass.id, subjectId: subject.id, title: item.title } });
    const data = { edition: "Federal curriculum edition", publisher: "Federal Board / FBISE curriculum", language: "ENGLISH", sourceLabel, fileUrl: item.file, pageCount: item.pageCount, status: "PUBLISHED" };
    const book = existing
      ? await prisma.book.update({ where: { id: existing.id }, data })
      : await prisma.book.create({ data: { ...data, title: item.title, boardId: board.id, classId: schoolClass.id, subjectId: subject.id } });

    for (let index = 0; index < item.chapters.length; index++) {
      const number = index + 1;
      const existingChapter = await prisma.chapter.findFirst({ where: { bookId: book.id, number } });
      const chapter = existingChapter
        ? await prisma.chapter.update({ where: { id: existingChapter.id }, data: { title: item.chapters[index], status: "PUBLISHED" } })
        : await prisma.chapter.create({ data: { bookId: book.id, number, title: item.chapters[index], status: "PUBLISHED" } });
      const topic = await prisma.topic.findFirst({ where: { chapterId: chapter.id, number: 1 } });
      if (!topic) await prisma.topic.create({ data: { chapterId: chapter.id, number: 1, order: 1, title: "Chapter textbook", content: "Read this chapter in the original textbook reader. Structured topic extraction and academic review are pending." } });
    }
    console.log(`Imported ${item.title} (${item.chapters.length} chapters)`);
  }
}

main().finally(() => prisma.$disconnect());
