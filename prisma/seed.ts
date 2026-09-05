// Reference + sample seed data for Phase 1.
// Reference dimension tables (roles, boards, classes, subjects) are the ONLY
// rows that must exist in production. The sample books/chapters/questions below
// are demo placeholders so the practice/exam engine is usable before the Phase 3
// content-ingestion pipeline replaces them with real board textbooks.

import { PrismaClient } from "@prisma/client";
import { hashPassword } from "better-auth/crypto";

const prisma = new PrismaClient();

const ROLES = [
  { code: "SUPER_ADMIN", name: "Super Admin" },
  { code: "ADMIN", name: "Admin" },
  { code: "STUDENT", name: "Student" },
];

const BOARDS = [
  { code: "FBISE", name: "Federal Board / FBISE", region: "Islamabad" },
  { code: "PUNJAB", name: "Punjab Board", region: "Punjab" },
  { code: "SINDH", name: "Sindh Board", region: "Sindh" },
  { code: "KPK", name: "KPK Board", region: "Khyber Pakhtunkhwa" },
  { code: "BALOCHISTAN", name: "Balochistan Board", region: "Balochistan" },
];

const CLASSES = [
  { name: "1st Year", grade: 11 },
  { name: "2nd Year", grade: 12 },
];

const SUBJECTS = [
  { code: "BIOLOGY", name: "Biology" },
  { code: "CHEMISTRY", name: "Chemistry" },
  { code: "PHYSICS", name: "Physics" },
];

// Demo books — clearly labelled placeholders for the Phase 3 ingestion pipeline.
type DemoChapter = {
  title: string;
  topics: { title: string; content: string }[];
  questions: {
    q: string;
    options: string[];
    correct: number; // index into options
    explanation: string;
    type: string;
    difficulty: string;
    relevance: number;
  }[];
};

const demoData: {
  boardCode: string;
  grade: number;
  subjectCode: string;
  bookTitle: string;
  chapters: DemoChapter[];
}[] = [
  {
    boardCode: "PUNJAB",
    grade: 11,
    subjectCode: "PHYSICS",
    bookTitle: "Physics Grade XI (Sample)",
    chapters: [
      {
        title: "Motion and Force",
        topics: [
          {
            title: "Scalars and Vectors",
            content:
              "Scalars have magnitude only (e.g. speed, distance, mass). Vectors have both magnitude and direction (e.g. displacement, velocity, force).",
          },
          {
            title: "Newton's Laws of Motion",
            content:
              "Newton's first law: a body continues in its state of rest or uniform motion unless acted upon by an unbalanced external force. The second law relates force to mass and acceleration: F = ma. The third law states every action has an equal and opposite reaction.",
          },
        ],
        questions: [
          {
            q: "Which of the following is a vector quantity?",
            options: ["Speed", "Distance", "Mass", "Displacement"],
            correct: 3,
            explanation:
              "Displacement has both magnitude and direction, so it is a vector. Speed, distance and mass have magnitude only.",
            type: "CONCEPTUAL",
            difficulty: "EASY",
            relevance: 82,
          },
          {
            q: "The SI unit of force is the",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1,
            explanation:
              "The newton (N) is the SI unit of force (1 N = 1 kg·m/s²). Joule, watt and pascal are units of work, power and pressure respectively.",
            type: "FACTUAL",
            difficulty: "EASY",
            relevance: 75,
          },
          {
            q: "A body continues in its state of rest or uniform motion in a straight line unless acted upon by a(n)",
            options: [
              "Unbalanced external force",
              "Balanced external force",
              "Internal force",
              "Normal reaction",
            ],
            correct: 0,
            explanation:
              "This is Newton's first law of motion: a net (unbalanced) external force is required to change the state of motion.",
            type: "STATEMENT_BASED",
            difficulty: "EASY",
            relevance: 88,
          },
          {
            q: "If a constant force of 10 N acts on a 2 kg mass, its acceleration is",
            options: ["20 m/s²", "5 m/s²", "0.2 m/s²", "2 m/s²"],
            correct: 1,
            explanation: "Using F = ma, a = F/m = 10/2 = 5 m/s².",
            type: "NUMERICAL",
            difficulty: "MEDIUM",
            relevance: 90,
          },
        ],
      },
      {
        title: "Oscillation",
        topics: [
          {
            title: "Simple Harmonic Motion",
            content:
              "Simple harmonic motion (SHM) is the to-and-fro motion in which acceleration is directly proportional to displacement and directed towards the mean position.",
          },
        ],
        questions: [
          {
            q: "The time taken for one complete oscillation is called the",
            options: ["Amplitude", "Frequency", "Wavelength", "Period"],
            correct: 3,
            explanation:
              "The period (T) is the time for one complete cycle. Frequency is the reciprocal of the period.",
            type: "FACTUAL",
            difficulty: "EASY",
            relevance: 78,
          },
          {
            q: "In simple harmonic motion, the acceleration of the particle is always directed",
            options: [
              "Away from the mean position",
              "Towards the mean position",
              "Along the direction of motion",
              "Perpendicular to displacement",
            ],
            correct: 1,
            explanation:
              "In SHM, acceleration is directly proportional to displacement and directed towards the mean position (restoring acceleration).",
            type: "CONCEPTUAL",
            difficulty: "MEDIUM",
            relevance: 85,
          },
        ],
      },
    ],
  },
  {
    boardCode: "PUNJAB",
    grade: 11,
    subjectCode: "BIOLOGY",
    bookTitle: "Biology Grade XI (Sample)",
    chapters: [
      {
        title: "Introduction to Biology",
        topics: [
          {
            title: "Major Fields of Biology",
            content:
              "Morphology studies form and structure; physiology studies function; genetics studies heredity and variation; ecology studies the relationships of organisms with their environment.",
          },
          {
            title: "The Cell",
            content:
              "Mitochondria are the site of aerobic respiration and are often called the powerhouse of the cell. The nucleus stores genetic material.",
          },
        ],
        questions: [
          {
            q: "The study of the structure and form of living organisms is called",
            options: ["Physiology", "Morphology", "Genetics", "Ecology"],
            correct: 1,
            explanation:
              "Morphology deals with the structure and form of organisms. Physiology is the study of function.",
            type: "CONCEPTUAL",
            difficulty: "EASY",
            relevance: 74,
          },
          {
            q: "Which organelle is known as the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi complex"],
            correct: 2,
            explanation:
              "Mitochondria perform aerobic respiration and produce most of the cell's ATP.",
            type: "FACTUAL",
            difficulty: "EASY",
            relevance: 86,
          },
        ],
      },
    ],
  },
  {
    boardCode: "PUNJAB",
    grade: 11,
    subjectCode: "CHEMISTRY",
    bookTitle: "Chemistry Grade XI (Sample)",
    chapters: [
      {
        title: "Chemical Bonding",
        topics: [
          {
            title: "Types of Chemical Bonds",
            content:
              "An ionic bond forms by the electrostatic attraction between oppositely charged ions. A covalent bond forms by the sharing of electron pairs between atoms.",
          },
        ],
        questions: [
          {
            q: "Which type of bond involves the sharing of electron pairs between atoms?",
            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
            correct: 1,
            explanation:
              "A covalent bond is formed by the mutual sharing of electron pairs between atoms.",
            type: "CONCEPTUAL",
            difficulty: "EASY",
            relevance: 84,
          },
          {
            q: "The electrostatic force of attraction between oppositely charged ions forms a(n) ______ bond.",
            options: ["Covalent", "Hydrogen", "Ionic", "Coordinate"],
            correct: 2,
            explanation:
              "Ionic (electrovalent) bonds result from electrostatic attraction between a cation and an anion.",
            type: "CONCEPTUAL",
            difficulty: "MEDIUM",
            relevance: 81,
          },
        ],
      },
    ],
  },
];

async function main() {
  const roleIds: Record<string, string> = {};
  for (const r of ROLES) {
    const rec = await prisma.role.upsert({
      where: { code: r.code },
      update: {},
      create: r,
    });
    roleIds[r.code] = rec.id;
  }

  const boardIds: Record<string, string> = {};
  for (const b of BOARDS) {
    const rec = await prisma.board.upsert({
      where: { code: b.code },
      update: { name: b.name, region: b.region },
      create: b,
    });
    boardIds[b.code] = rec.id;
  }

  const classIds: Record<number, string> = {};
  for (const c of CLASSES) {
    const rec = await prisma.schoolClass.upsert({
      where: { grade: c.grade },
      update: { name: c.name },
      create: c,
    });
    classIds[c.grade] = rec.id;
  }

  const subjectIds: Record<string, string> = {};
  for (const s of SUBJECTS) {
    const rec = await prisma.subject.upsert({
      where: { code: s.code },
      update: { name: s.name },
      create: s,
    });
    subjectIds[s.code] = rec.id;
  }

  // Super admin (credential login)
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@mdcat.pk";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "ChangeMe123!";
  let admin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!admin) {
    const password = await hashPassword(adminPassword);
    // Match better-auth's exact account shape (sign-up.mjs): accountId = userId,
    // issuer = "local:credential". A mismatched shape makes sign-in return 401.
    admin = await prisma.user.create({
      data: {
        name: "Platform Admin",
        email: adminEmail,
        emailVerified: true,
        roleId: roleIds.SUPER_ADMIN,
      },
    });
    await prisma.account.create({
      data: {
        userId: admin.id,
        accountId: admin.id,
        providerId: "credential",
        issuer: "local:credential",
        password,
      },
    });
    console.log(`Created super admin ${adminEmail} (change the password after first login).`);
  } else {
    // Idempotently repair the legacy broken account shape (accountId was the email, issuer was null).
    const credential = await prisma.account.findFirst({
      where: { userId: admin.id, providerId: "credential" },
    });
    if (credential && credential.accountId !== admin.id) {
      const password = await hashPassword(adminPassword);
      await prisma.account.upsert({
        where: { id: credential.id },
        update: { accountId: admin.id, issuer: "local:credential", password },
        create: { userId: admin.id, accountId: admin.id, providerId: "credential", issuer: "local:credential", password },
      });
      console.log(`Repaired credential account shape for ${adminEmail}.`);
    }
  }

  // ---- Sample content (demo only; replaced by Phase 3 ingestion) ----
  let questionCount = 0;
  for (const book of demoData) {
    const existing = await prisma.book.findFirst({
      where: {
        boardId: boardIds[book.boardCode],
        classId: classIds[book.grade],
        subjectId: subjectIds[book.subjectCode],
        title: book.bookTitle,
      },
    });
    if (existing) continue;

    const createdBook = await prisma.book.create({
      data: {
        title: book.bookTitle,
        boardId: boardIds[book.boardCode],
        classId: classIds[book.grade],
        subjectId: subjectIds[book.subjectCode],
        edition: "Sample",
        publisher: "mdcat.pk (demo)",
        status: "PUBLISHED",
        sourceLabel: "Sample placeholder content — replaced by Phase 3 ingestion.",
      },
    });

    for (const [ci, chapter] of book.chapters.entries()) {
      const createdChapter = await prisma.chapter.create({
        data: {
          bookId: createdBook.id,
          number: ci + 1,
          title: chapter.title,
          status: "PUBLISHED",
        },
      });
      for (const [ti, topic] of chapter.topics.entries()) {
        const createdTopic = await prisma.topic.create({
          data: {
            chapterId: createdChapter.id,
            number: ti + 1,
            title: topic.title,
            order: ti + 1,
            content: topic.content,
          },
        });
        for (const question of chapter.questions) {
          await prisma.question.create({
            data: {
              questionText: question.q,
              subjectId: subjectIds[book.subjectCode],
              boardId: boardIds[book.boardCode],
              classId: classIds[book.grade],
              chapterId: createdChapter.id,
              topicId: createdTopic.id,
              questionType: question.type,
              difficulty: question.difficulty,
              explanation: question.explanation,
              sourceType: "ADMIN_CREATED",
              mdcatRelevanceScore: question.relevance,
              qualityScore: 90,
              status: "PUBLISHED",
              createdById: admin.id,
              options: {
                create: question.options.map((text, i) => ({
                  text,
                  isCorrect: i === question.correct,
                  order: i,
                })),
              },
            },
          });
          questionCount++;
        }
      }
    }
  }

  console.log(`Seeded ${questionCount} sample questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });