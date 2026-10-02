import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "orbitala-probability-region-90-percent",
    text: "In the orbital model of the atom, the boundary surface of an orbital is drawn at the point where the probability of finding an electron is about",
    options: ["50 %", "75 %", "90 %", "99 %"],
    correctIndex: 2,
    explanation:
      "An orbital is a region of space around the nucleus within which the probability of finding an electron is about 90 %. A probability density exists everywhere around the nucleus, so the surface is drawn at a high but not total probability, and the remaining probability lies outside it.",
    evidence:
      "An atomic orbital is a region in space around the nucleus in which the probability of finding an electron is about 90 %.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-2.3",
    concept: "orbital probability region",
  },
  {
    key: "orbitala-path-versus-wavefunction",
    text: "An orbital differs from the circular path of the Bohr model in that an orbital",
    options: [
      "is a circular track of fixed radius on which the electron completes one revolution per second",
      "is a three-dimensional probability description given by the square of a wave function",
      "is a pair of intersecting rings that hold up to eighteen electrons",
      "is defined only for hydrogen and has no meaning for any other element",
    ],
    correctIndex: 1,
    explanation:
      "An orbital is a mathematical description in which the square of the wave function gives the probability density of the electron at a point, whereas the Bohr model placed the electron on a definite circular orbit of fixed radius.",
    evidence:
      "The orbital is a mathematical description of the region in which the probability of finding the electron is about 90 %, not a fixed path followed by the electron.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-2.3",
    concept: "orbital versus orbit",
  },
  {
    key: "orbitala-2l-plus-one-count",
    text: "A subshell with azimuthal quantum number l = 3 contains how many orbitals?",
    options: ["3", "5", "7", "9"],
    correctIndex: 2,
    explanation:
      "The number of orbitals in a subshell is given by 2l + 1, so l = 3 gives 2(3) + 1 = 7 orbitals, which is the f subshell holding a maximum of 14 electrons.",
    evidence:
      "The number of orbitals in a subshell is given by the expression 2l + 1, so the s, p, d and f subshells contain 1, 3, 5 and 7 orbitals respectively.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-2.3",
    concept: "orbitals per subshell",
  },
  {
    key: "orbitala-no-angular-node-in-s",
    text: "The angular node count of every s orbital, whatever its principal quantum number, is",
    options: ["zero", "one", "two", "n"],
    correctIndex: 0,
    explanation:
      "The number of angular nodes equals the azimuthal quantum number l, and an s subshell always has l = 0, so an s orbital has no angular node anywhere on its spherical surface.",
    evidence:
      "The number of angular nodes in an orbital is equal to its azimuthal quantum number l, and the number of radial nodes is n - l - 1.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "angular node count",
  },
  {
    key: "orbitala-two-allowed-l-values",
    text: "For n = 4, the permitted values of the azimuthal quantum number l run in steps of one from",
    options: ["0 to 3", "1 to 4", "0 to 4", "1 to 3"],
    correctIndex: 0,
    explanation:
      "For a given principal quantum number n the allowed values of l run from 0 up to n - 1, so for n = 4 the values are 0, 1, 2 and 3, giving the 4s, 4p, 4d and 4f subshells.",
    evidence:
      "For each principal quantum number n the possible values of l are the whole numbers from zero to n - 1, and for every value of l there are 2l + 1 values of the magnetic quantum number m.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-2.3",
    concept: "allowed l values",
  },
  {
    key: "orbitala-2p-three-orientations",
    text: "The three 2p orbitals differ from one another only in their",
    options: [
      "principal quantum number, since each 2p orbital has a different value of n",
      "spin quantum number, since the two spins occupy different orbitals",
      "orbital shape, since a p orbital may be dumbbell or ring shaped",
      "magnetic quantum number, since they point along the x, y and z axes",
    ],
    correctIndex: 3,
    explanation:
      "Within one subshell the n and l values are identical and only m changes, so the three 2p orbitals share the same size and dumbbell shape but differ in direction along the three axes.",
    evidence:
      "For a fixed value of l the magnetic quantum number m takes 2l + 1 values, which for l = 1 are -1, 0 and +1 and give the three mutually perpendicular p orbitals.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "p orbital orientation",
  },
  {
    key: "orbitala-foaming-four-radial-nodes",
    text: "An orbital with principal quantum number n = 4 and azimuthal quantum number l = 1 has how many radial nodes?",
    options: ["0", "2", "3", "4"],
    correctIndex: 1,
    explanation:
      "The number of radial nodes is n - l - 1, so for n = 4 and l = 1 the count is 4 - 1 - 1 = 2, and adding the single angular node of a p orbital gives three nodes in total.",
    evidence:
      "The total number of nodes in an orbital is n - 1, of which n - l - 1 are radial nodes and l are angular nodes.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.3",
    concept: "radial node count",
  },
  {
    key: "orbitala-shells-of-hydrogen-atom",
    text: "The single electron of the hydrogen atom occupies",
    options: [
      "the 1s subshell, which is the lowest energy orbital available",
      "the 2s subshell, which is the outermost shell of the atom",
      "all five 3d orbitals at once, because a lone electron is spread equally over them",
      "the 3p subshell, which is degenerate with the 2p subshell",
    ],
    correctIndex: 0,
    explanation:
      "Energy rises with the principal quantum number, so the 1s orbital is the lowest in the atom and the single hydrogen electron occupies it.",
    evidence:
      "In hydrogen the energy of an orbital depends only on the principal quantum number n, so 1s is lower in energy than 2s, which is lower than 2p and higher still shells.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.3",
    concept: "electron filling lowest",
  },
  {
    key: "orbitala-order-3s-below-2p",
    text: "The correct increasing order of energy of the orbitals 3s, 2p and 1s is",
    options: ["3s, then 1s, then 2p", "1s, then 3s, then 2p", "2p, then 3s, then 1s", "1s, then 2p, then 3s"],
    correctIndex: 3,
    explanation:
      "The 1s orbital lies closest to the nucleus, the 2p subshell belongs to n = 2, and 3s belongs to n = 3, so the increasing order of energy is 1s < 2p < 3s.",
    evidence:
      "The energy of an orbital increases with its principal quantum number, so within the atom the order of increasing energy begins 1s, then 2s, then 2p, then 3s.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-2.3",
    concept: "orbital energy order",
  },
  {
    key: "orbitala-degeneracy-of-one-electron",
    text: "In a one-electron species such as He+, the 2s, 2p, 3s and 3p orbitals all carry the same energy. This equal-energy grouping exists because the energy of such an orbital depends only on",
    options: [
      "the magnetic quantum number m of the electron inside it",
      "the spin state of the electron occupying the orbital",
      "the principal quantum number n shared by all four orbitals",
      "the l value, which the four orbitals do not have in common",
    ],
    correctIndex: 2,
    explanation:
      "With only one electron there is no electron-electron repulsion or shielding, so the energy of an orbital is a function of n alone and every orbital with n = 2 or n = 3 is degenerate within its shell.",
    evidence:
      "In a one-electron atom the energy of an orbital depends only on the principal quantum number, so all orbitals with the same n such as 2s, 2p, 3s and 3p are degenerate.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "orbital degeneracy",
  },
  {
    key: "orbitala-lifting-in-multielectron-atom",
    text: "In a many-electron atom the 2p orbitals end up slightly higher in energy than the 2s orbital. The effect responsible for this splitting is",
    options: [
      "the increased shielding and reduced penetration of a 2p electron compared with a 2s electron",
      "the greater angular momentum of a 2p electron, which adds centrifugal repulsion",
      "the greater distance of the 2p nucleus from the 2s electron cloud",
      "the smaller number of angular nodes carried by the 2s orbital",
    ],
    correctIndex: 0,
    explanation:
      "A 2s electron penetrates close to the nucleus and is shielded by the inner 1s electrons only weakly, whereas a 2p electron is held further out and experiences more shielding, so 2s is pulled to lower energy than 2p.",
    evidence:
      "For orbitals of the same principal quantum number in a multi-electron atom, an s orbital is lower in energy than a p orbital, a p orbital lower than a d orbital, because of penetration and shielding.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "shielding penetration",
  },
  {
    key: "orbitala-claim-i-overlap-nodes",
    text: "Three claims about atomic orbitals are listed below.\nI. Every orbital holds at most two electrons, and those two have opposite spins.\nII. A p orbital is dumbbell shaped and has one angular node, while an s orbital is spherical with no angular node.\nIII. The number of orbitals in a subshell equals 2(2l + 1).\nClaims I and II are correct while claim III is incorrect.",
    options: ["I only", "II only", "I and II", "I, II and III"],
    correctIndex: 2,
    explanation:
      "Claims I and II agree with the orbital model, but the number of orbitals in a subshell is 2l + 1; the factor of two belongs to the maximum number of electrons, which is 2(2l + 1).",
    evidence:
      "A subshell contains 2l + 1 orbitals and can hold a maximum of 2(2l + 1) electrons, so the s, p, d and f subshells hold at most 2, 6, 10 and 14 electrons.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "orbital statements",
  },
  {
    key: "orbitala-strongest-penetration-in-third-shell",
    text: "Among the 3s, 3p and 3d subshells of the same atom, the electron in the subshell whose orbital is pulled closest to the nucleus is the one in",
    options: ["3d", "3p", "3s", "all three equally"],
    correctIndex: 2,
    explanation:
      "An s orbital has zero angular nodes and so penetrates closest to the nucleus, a p orbital penetrates less and a d orbital least, which is why the order of increasing energy within one shell is 3s < 3p < 3d.",
    evidence:
      "Penetrating power decreases in the order s, p, d, f within a given principal quantum number, so in one shell the increasing energy order is ns, np, nd, nf.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "penetrating power",
  },
  {
    key: "orbitala-larger-than-bohr-orbit-radius",
    text: "The radius at which a 1s orbital of hydrogen is usually drawn is about 53 pm, yet the ground-state electron of that atom is found at many different distances from the nucleus. This spread of possible distances is",
    options: [
      "a direct consequence of the wave function description, in which the electron has no definite radius",
      "the result of centrifugal force holding the electron at the boundary of the orbital",
      "an indication that 90 % of the electron density lies outside the drawn surface",
      "an experimental error in the measured size of the hydrogen atom",
    ],
    correctIndex: 0,
    explanation:
      "The wave function gives a probability density for the electron at every point in space, so the electron may be found at many distances from the nucleus and only the 90 % boundary surface is a chosen convention.",
    evidence:
      "The wave function describes the probability of finding an electron in a region of space rather than a fixed circular path, which is why the electron has no definite distance from the nucleus.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.3",
    concept: "electron distance spread",
  },
  {
    key: "orbitala-spin-pair-limit",
    text: "No single orbital in any atom can contain",
    options: [
      "more than one electron, whatever the spin state",
      "more than two electrons, whatever the spin state",
      "more than one electron of a given spin, whatever the total",
      "two electrons of the same spin in the same nucleus",
    ],
    correctIndex: 1,
    explanation:
      "An orbital can accommodate a maximum of two electrons and those two must have opposite spins, so a third electron of any spin cannot be placed in the same orbital.",
    evidence:
      "Each orbital can hold a maximum of two electrons, and these must be of opposite spin, since electrons of the same spin cannot occupy the same orbital.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-2.3",
    concept: "two electron capacity",
  },
  {
    key: "orbitala-cloverleaf-of-d",
    text: "In contrast to the smooth spherical surface of an s orbital, a d orbital is drawn as",
    options: [
      "two spheres of equal charge touching at the nucleus",
      "a pair of lobes pointing along one axis",
      "four cloverleaf lobes lying in one plane",
      "a ring of charge in the plane that contains the nucleus",
    ],
    correctIndex: 2,
    explanation:
      "With l = 2 a d orbital has two angular nodes and is drawn as four lobes of electron density arranged in a cloverleaf pattern, the familiar shape of d orbitals in chemistry.",
    evidence:
      "The number of angular nodes equals l, so a d orbital with two angular nodes is drawn with four lobes of electron density in a cloverleaf arrangement.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "d orbital shape",
  },
  {
    key: "orbitala-unoccupied-three-orbital-gap",
    text: "A nitrogen atom, whose ground-state configuration is 1s2 2s2 2p3, presents three unoccupied orbitals in the filled second shell because",
    options: [
      "the 2p subshell can hold six electrons but the atom has only three outer electrons",
      "the 2p subshell consists of five orbitals, so two of them cannot be filled",
      "the 2s orbital of the atom already contains three electrons",
      "the 1s orbital is degenerate with the 2p orbitals and takes part in filling",
    ],
    correctIndex: 0,
    explanation:
      "With l = 1 the p subshell contains 2l + 1 = 3 orbitals, so it can hold at most six electrons, and nitrogen has only three outer electrons to place in them, leaving all three orbitals partly filled.",
    evidence:
      "For a fixed value of l the magnetic quantum number m takes 2l + 1 values, which for l = 1 are -1, 0 and +1 and give the three mutually perpendicular p orbitals.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "p subshell capacity",
  },
  {
    key: "orbitala-filling-order-after-3p",
    text: "The correct sequence in which the subshells of an atom are occupied, starting from the lowest energy, is",
    options: [
      "1s, 2s, 3s, 2p, 3p, 4s, 3d",
      "1s, 2s, 2p, 3s, 3p, 4s, 3d",
      "1s, 2s, 2p, 3s, 3p, 3d, 4s",
      "1s, 2s, 2p, 3p, 3s, 4s, 3d",
    ],
    correctIndex: 1,
    explanation:
      "Subshells of one shell are filled from lowest to highest energy, 2s before 2p and 3s before 3p, and the 4s orbital of the next shell lies below 3d once the 3p subshell is complete.",
    evidence:
      "Orbitals are filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p because each new subshell is reached only after the lower energy one is filled.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-2.3",
    concept: "subshell filling order",
  },
  {
    key: "orbitala-standard-atomic-state",
    text: "The arrangement in which an atom's electrons occupy the orbitals of lowest available energy, with no more than two electrons of opposite spin in any orbital, defines its",
    options: ["excited electronic configuration", "standard or ground state", "ionised state", "metastable state"],
    correctIndex: 1,
    explanation:
      "The lowest energy arrangement permitted by the orbital model, in which every electron sits in an available orbital of lowest energy and no orbital holds a pair of same-spin electrons, is the ground or standard state.",
    evidence:
      "Each orbital can hold a maximum of two electrons, and these must be of opposite spin, since electrons of the same spin cannot occupy the same orbital.",
    questionType: "CONCEPTUAL",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "ground state definition",
  },
  {
    key: "orbitala-two-claims-about-quantum-numbers",
    text: "Two claims about the quantum numbers of an electron are listed below.\nI. For a fixed value of l, the magnetic quantum number m can take 2l + 1 values.\nII. For a fixed value of n, the azimuthal quantum number l can take n values.\nClaim I is correct while claim II is incorrect.",
    options: ["I only", "II only", "I and II", "I, II and neither"],
    correctIndex: 0,
    explanation:
      "A fixed l does give 2l + 1 values of m, which is exactly the number of orbitals in that subshell, but for a given n the values of l run from 0 to n - 1, so there are n such values rather than the n stated in claim II.",
    evidence:
      "For a given principal quantum number n the possible values of l are the whole numbers from zero to n - 1, and for every value of l there are 2l + 1 values of the magnetic quantum number m.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 89,
    outcome: "CHEM-2.3",
    concept: "quantum number claims",
  },
  {
    key: "orbitala-penultimate-shell-in-phosphorus",
    text: "For a phosphorus atom with the ground-state configuration 1s2 2s2 2p6 3s2 3p3, the shell that holds eight electrons is",
    options: ["the innermost shell", "the penultimate shell", "the outermost shell", "the valence shell only"],
    correctIndex: 1,
    explanation:
      "The eight electrons in 2s2 2p6 lie in the shell with n = 2, which is one shell inside the partially filled n = 3 shell holding the five valence electrons, so n = 2 is the penultimate shell.",
    evidence:
      "Each orbital can hold a maximum of two electrons, and these must be of opposite spin, since electrons of the same spin cannot occupy the same orbital.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "penultimate shell",
  },
  {
    key: "orbitala-rings-are-not-orbitals",
    text: "The rings sometimes drawn for Bohr orbits of 2p, 3p and 3d in an atom",
    options: [
      "are boundary surfaces enclosing 90 % of the electron density of the subshell",
      "are meant to show where the electron is found with equal probability at every point",
      "are model-building conventions and have no connection with an atomic orbital",
      "are the paths along which the electron moves while changing its energy",
    ],
    correctIndex: 2,
    explanation:
      "A ring of fixed radius belongs to the obsolete Bohr picture, in which an electron travelled round a path; an orbital is instead a three-dimensional probability region, so the two cannot be equated.",
    evidence:
      "An atomic orbital is a region in space around the nucleus in which the probability of finding an electron is about 90 %, rather than a circular path of fixed radius.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-2.3",
    concept: "bohr ring misconception",
  },
  {
    key: "orbitala-why-bohr-broke-down",
    text: "As more electrons are added to heavier atoms, the simple one electron Bohr picture stops giving correct answers, because the electrons now",
    options: [
      "move at a constant speed that no longer matches the observed line spectra",
      "leave the atom and form part of a metallic lattice",
      "spin in opposite directions only, so angular momentum disappears",
      "repel one another, so their energies depend on the presence of the other electrons",
    ],
    correctIndex: 3,
    explanation:
      "Electron-electron repulsion and shielding between the several electrons of a larger atom change the energy of each orbital, which is precisely why the single-electron Bohr orbits have to be replaced by the orbital model.",
    evidence:
      "For orbitals of the same principal quantum number in a multi-electron atom, an s orbital is lower in energy than a p orbital, a p orbital lower than a d orbital, because of penetration and shielding.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-2.3",
    concept: "bohr model limits",
  },
  {
    key: "orbitala-value-of-n-sets-size",
    text: "If the principal quantum number of an orbital is raised from 2 to 3 while its subshell type is unchanged, the orbital becomes larger and",
    options: [
      "its energy falls, because a larger orbital is always less tightly bound",
      "its energy rises, because the electron spends more of its time further from the nucleus",
      "its energy stays constant, since only the subshell type fixes the energy",
      "its angular node count rises by two",
    ],
    correctIndex: 1,
    explanation:
      "Orbital energy increases with the principal quantum number, so an n = 3 orbital is larger and higher in energy than the matching n = 2 orbital, with the electron held further from the nucleus on average.",
    evidence:
      "The energy of an orbital increases with its principal quantum number, so within the atom the order of increasing energy begins 1s, then 2s, then 2p, then 3s.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "n and orbital energy",
  },
  {
    key: "orbitala-d-subshell-capacity-shape",
    text: "An orbital is given the quantum numbers n = 3 and l = 2. The subshell that this orbital belongs to contains how many orbitals and can hold how many electrons?",
    options: ["7 orbitals and 14 electrons", "3 orbitals and 6 electrons", "1 orbital and 2 electrons", "5 orbitals and 10 electrons"],
    correctIndex: 3,
    explanation:
      "With l = 2 the orbital belongs to a d subshell, which contains 2l + 1 = 5 orbitals and can hold a maximum of 2(2l + 1) = 10 electrons.",
    evidence:
      "A subshell contains 2l + 1 orbitals and can hold a maximum of 2(2l + 1) electrons, so the s, p, d and f subshells hold at most 2, 6, 10 and 14 electrons.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "d subshell shape",
  },
];