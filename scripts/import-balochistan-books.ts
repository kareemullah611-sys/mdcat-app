import { PrismaClient } from "@prisma/client";
import { access } from "node:fs/promises";
import { resolveTextbookFile } from "../lib/textbook-storage";

const prisma = new PrismaClient();
const sourceLabel = "Balochistan Textbook Board, Quetta. Local educational copy; redistribution rights must be verified before production publication.";
const books = [
  { grade: 11, subject: "BIOLOGY", file: "balochistan-biology-11.pdf", title: "Biology Grade XI", chapters: ["Introduction to Biology", "Biological Molecules", "Enzymes", "The Cell", "Variety of Life", "Kingdom Prokaryotae", "Kingdom Protista and Fungi", "Diversity Among Plants", "Diversity Among Animals", "Functional Biology", "Bioenergetics", "Nutrition", "Gaseous Exchange", "Transport"] },
  { grade: 11, subject: "CHEMISTRY", file: "balochistan-chemistry-11.pdf", title: "Chemistry Grade XI", chapters: ["Stoichiometry", "Atomic Structure", "Theories of Covalent Bonding and Shapes of Molecules", "State of Matter I: Gases", "State of Matter II: Liquids", "State of Matter III: Solids", "Chemical Equilibrium", "Acids, Bases and Salts", "Chemical Kinetics", "Solutions", "Thermochemistry", "Electrochemistry", "Reaction Kinetics", "Fundamentals of Organic Chemistry"] },
  { grade: 11, subject: "PHYSICS", file: "balochistan-physics-11.pdf", title: "Physics Grade XI", chapters: ["Measurements", "Vectors and Equilibrium", "Forces and Motion", "Work and Energy", "Rotational and Circular Motion", "Fluid Dynamics", "Oscillations", "Waves", "Physical Optics", "Thermodynamics"] },
  { grade: 12, subject: "BIOLOGY", file: "balochistan-biology-12.pdf", title: "Biology Grade XII", chapters: ["Respiration", "Homeostasis", "Support and Movement", "Nervous Coordination", "Chemical Coordination", "Behavior", "Reproduction", "Development and Aging", "Inheritance", "Chromosome and DNA", "Evolution", "Man and Environment", "Biotechnology", "Immunity and Vulnerability"], start: 14 },
  { grade: 12, subject: "CHEMISTRY", file: "balochistan-chemistry-12.pdf", title: "Chemistry Grade XII", chapters: ["s- and p-Block Elements", "d- and f-Block Elements", "Organic Chemistry", "Hydrocarbons", "Alkyl Halides and Amines", "Alcohols, Phenols and Ethers", "Aldehydes and Ketones", "Carboxylic Acids", "Biochemistry", "Industrial Chemistry", "Environmental Chemistry", "Analytical Chemistry"], start: 13 },
  { grade: 12, subject: "PHYSICS", file: "balochistan-physics-12.pdf", title: "Physics Grade XII", chapters: ["Electrostatics", "Current Electricity", "Electromagnetism", "Electromagnetic Induction", "Alternating Current", "Physics of Solids", "Electronics", "Dawn of Modern Physics", "Atomic Spectra", "Nuclear Physics"], start: 11 },
];

async function main() {
  const board = await prisma.board.findUniqueOrThrow({ where: { code: "BALOCHISTAN" } });
  for (const item of books) {
    const filePath = resolveTextbookFile(item.file);
    if (!filePath) throw new Error(`Invalid file key: ${item.file}`);
    await access(filePath);
    const schoolClass = await prisma.schoolClass.findUniqueOrThrow({ where: { grade: item.grade } });
    const subject = await prisma.subject.findUniqueOrThrow({ where: { code: item.subject } });
    let book = await prisma.book.findFirst({ where: { boardId: board.id, classId: schoolClass.id, subjectId: subject.id, title: item.title } });
    const data = { edition: "New Edition", publisher: "Balochistan Textbook Board, Quetta", language: "ENGLISH", sourceLabel, fileUrl: item.file, status: "PUBLISHED" };
    book = book ? await prisma.book.update({ where: { id: book.id }, data }) : await prisma.book.create({ data: { ...data, title: item.title, boardId: board.id, classId: schoolClass.id, subjectId: subject.id } });
    for (let i = 0; i < item.chapters.length; i++) {
      const number = (item.start ?? 1) + i;
      const existing = await prisma.chapter.findFirst({ where: { bookId: book.id, number } });
      const chapter = existing ? await prisma.chapter.update({ where: { id: existing.id }, data: { title: item.chapters[i], status: "PUBLISHED" } }) : await prisma.chapter.create({ data: { bookId: book.id, number, title: item.chapters[i], status: "PUBLISHED" } });
      const topic = await prisma.topic.findFirst({ where: { chapterId: chapter.id, number: 1 } });
      if (!topic) await prisma.topic.create({ data: { chapterId: chapter.id, number: 1, order: 1, title: "Chapter textbook", content: "Read this chapter in the original textbook reader. Structured topic extraction and academic review are pending." } });
    }
    console.log(`Imported ${item.title} (${item.chapters.length} chapters)`);
  }
}
main().finally(() => prisma.$disconnect());
