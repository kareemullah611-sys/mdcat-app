import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "orbitalb-probability-density-from-wavefunction",
    text: "According to the orbital model of the atom, the probability density of the electron at a particular point in space is given by",
    options: [
      "the square of the wave function for that orbital at that point",
      "the wave function itself at that point",
      "the total number of electrons divided by the volume of the orbital",
      "the distance of the electron from the nucleus at that point",
    ],
    correctIndex: 0,
    explanation:
      "The square of the wave function, written as psi squared, gives the probability per unit volume of finding the electron at a point, whereas the wave function by itself carries no such meaning and the electron has no definite position.",
    evidence:
      "The probability of finding an electron in a region of space is given by the square of the wave function describing that orbital.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-2.3",
    concept: "probability density",
  },
  {
    key: "orbitalb-electron-cloud-dot-density",
    text: "In the electron cloud representation of an orbital, the density of dots used to draw the cloud at any point indicates",
    options: [
      "the speed with which the electron travels through that point",
      "the probability density of finding the electron at that point",
      "the charge of the nucleus spread over the orbital",
      "the number of electrons that pass through that point every second",
    ],
    correctIndex: 1,
    explanation:
      "The cloud is a picture of probability density: where the dots are close together the probability of finding the electron is high and where they thin out the probability approaches zero, so the picture describes a probability and not a moving particle.",
    evidence:
      "The density of dots in the electron cloud is proportional to the probability density of finding the electron at that point in space.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "electron cloud density",
  },
  {
    key: "orbitalb-spin-quantum-number-no-direction",
    text: "Of the four quantum numbers used to describe an electron in an atom, the one that describes no position or direction of the electron in space is the",
    options: ["principal quantum number", "azimuthal quantum number", "spin quantum number", "magnetic quantum number"],
    correctIndex: 2,
    explanation:
      "The principal quantum number fixes the shell, the azimuthal number the subshell and the magnetic number the orientation of the orbital, but the spin quantum number has only the values plus and minus one-half and carries no spatial meaning.",
    evidence:
      "The spin quantum number has only two possible values for an electron, plus one-half and minus one-half, and distinguishes the two electrons that occupy the same orbital.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "spin quantum number",
  },
  {
    key: "orbitalb-m-value-zero-in-s-orbital",
    text: "An electron in any s orbital can have only one value of the magnetic quantum number, because",
    options: [
      "the principal quantum number is zero for every s orbital",
      "the spin quantum number fixes the direction of the orbital",
      "p orbitals already use up all three possible values",
      "the azimuthal quantum number is zero and 2l + 1 then equals one",
    ],
    correctIndex: 3,
    explanation:
      "An s orbital has l = 0, and the number of allowed values of m for a given l is 2l + 1, so 2(0) + 1 = 1 and m can only be zero, which is the reason why each shell has exactly one s orbital.",
    evidence:
      "For every value of l there are 2l + 1 values of the magnetic quantum number m, so for l = 0 the only possible value of m is zero.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-2.3",
    concept: "magnetic number in s",
  },
  {
    key: "orbitalb-nodal-plane-of-px",
    text: "The single angular node of a p_x orbital is the plane",
    options: [
      "on which the probability of finding the electron is zero and which separates the two lobes",
      "that contains the x axis and both lobes of the orbital",
      "perpendicular to the x axis and lying outside the drawn surface of the orbital",
      "where the electron density is greatest along the x axis",
    ],
    correctIndex: 0,
    explanation:
      "An angular node is a region in which the wave function is zero, and for a p orbital with l = 1 it is a plane passing through the nucleus, so the p_x orbital has zero probability in the plane perpendicular to the x axis.",
    evidence:
      "The number of angular nodes equals the azimuthal quantum number l, and an angular node of a p orbital is a plane through the nucleus on which the probability of finding the electron is zero.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.3",
    concept: "p orbital nodal plane",
  },
  {
    key: "orbitalb-two-clues-point-to-s-orbital",
    text: "An atomic orbital holds at most two electrons, and the probability of finding its electrons is the same in every direction from the nucleus. This orbital is",
    options: ["a p orbital", "an s orbital", "a d orbital", "any orbital of the second shell"],
    correctIndex: 1,
    explanation:
      "A maximum of two electrons is true of every orbital, so the deciding clue is the equal probability in every direction, which means the orbital has no angular node and therefore l = 0, that is an s orbital.",
    evidence:
      "An atomic orbital is a region in space around the nucleus in which the probability of finding an electron is about 90 %, and an s orbital is spherical with no angular node.",
    questionType: "MDCAT_STYLE",
    difficulty: "EASY",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "identifying s orbital",
  },
  {
    key: "orbitalb-second-shell-orbital-count",
    text: "The shell of an atom with principal quantum number n = 2 is made up of how many orbitals in all?",
    options: ["2", "3", "4", "9"],
    correctIndex: 2,
    explanation:
      "For n = 2 the permitted values of l are 0 and 1, so the shell contains one 2s orbital and three 2p orbitals, that is 1 + 3 = 4 orbitals, which is n squared.",
    evidence:
      "For each principal quantum number n the possible values of l are the whole numbers from zero to n - 1, and for every value of l there are 2l + 1 values of the magnetic quantum number m.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "orbitals per shell",
  },
  {
    key: "orbitalb-three-d-node-counts",
    text: "For an orbital with n = 3 and l = 2, the number of radial nodes, the number of angular nodes and the total number of nodes are",
    options: [
      "1 radial, 2 angular and 3 in total",
      "2 radial, 1 angular and 3 in total",
      "0 radial, 1 angular and 1 in total",
      "0 radial, 2 angular and 2 in total",
    ],
    correctIndex: 3,
    explanation:
      "The number of radial nodes is n - l - 1 = 3 - 2 - 1 = 0 and the number of angular nodes is l = 2, and the two together account for the total of n - 1 = 2 nodes.",
    evidence:
      "The total number of nodes in an orbital is n - 1, of which n - l - 1 are radial nodes and l are angular nodes.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "3d orbital nodes",
  },
  {
    key: "orbitalb-orbital-from-node-counts",
    text: "An orbital of an atom has two radial nodes and one angular node. The principal and azimuthal quantum numbers of this orbital are",
    options: ["n = 4 and l = 1", "n = 3 and l = 1", "n = 4 and l = 2", "n = 3 and l = 2"],
    correctIndex: 0,
    explanation:
      "One angular node means l = 1, and the radial node count is n - l - 1, so n - 1 - 1 = 2 gives n = 4, and the orbital is therefore a 4p orbital with three nodes in total.",
    evidence:
      "The total number of nodes in an orbital is n - 1, of which n - l - 1 are radial nodes and l are angular nodes.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "orbital from node counts",
  },
  {
    key: "orbitalb-total-nodes-four-p",
    text: "A 4p orbital of an atom contains how many nodes altogether?",
    options: ["2", "3", "4", "1"],
    correctIndex: 1,
    explanation:
      "The total number of nodes in any orbital is n - 1, so a 4p orbital with n = 4 has three nodes, made up of n - l - 1 = 2 radial nodes and l = 1 angular node.",
    evidence:
      "The total number of nodes in an orbital is n - 1, of which n - l - 1 are radial nodes and l are angular nodes.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.3",
    concept: "total node count",
  },
  {
    key: "orbitalb-energy-order-2p-3s-3p",
    text: "Listing the 2p, 3s and 3p orbitals of the same atom in order of increasing energy gives",
    options: ["3s, then 3p, then 2p", "3p, then 2p, then 3s", "2p, then 3s, then 3p", "2p, then 3p, then 3s"],
    correctIndex: 2,
    explanation:
      "Energy rises with the principal quantum number, so the orbitals of the n = 2 shell come first, and within the n = 3 shell the s orbital lies below the p orbitals because it penetrates closer to the nucleus.",
    evidence:
      "For orbitals of the same principal quantum number in a multi-electron atom, an s orbital is lower in energy than a p orbital, a p orbital lower than a d orbital, because of penetration and shielding.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.3",
    concept: "energy order across shells",
  },
  {
    key: "orbitalb-angular-node-sequence",
    text: "Arranged in the order of increasing number of angular nodes, the orbitals 1s, 2p, 3d and 4f stand as",
    options: ["1s, 2p, 3d, 4f", "1s, 3d, 2p, 4f", "2p, 1s, 3d, 4f", "4f, 3d, 2p, 1s"],
    correctIndex: 3,
    explanation:
      "The number of angular nodes equals l, and the l values of these four orbitals are 0, 1, 2 and 3 respectively, so the angular node count rises steadily from 1s through 2p and 3d to 4f.",
    evidence:
      "The number of angular nodes in an orbital is equal to its azimuthal quantum number l, and the number of radial nodes is n - l - 1.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "angular node sequence",
  },
  {
    key: "orbitalb-radial-node-sequence",
    text: "In the order of increasing number of radial nodes, the s orbitals 1s, 2s and 3s of the same atom stand as",
    options: ["1s, then 2s, then 3s", "3s, then 2s, then 1s", "2s, then 1s, then 3s", "1s, then 3s, then 2s"],
    correctIndex: 0,
    explanation:
      "In an s orbital l is always zero, so the radial node count reduces to n - l - 1 = n - 1, which gives zero for 1s, one for 2s and two for 3s, and the count therefore rises with n.",
    evidence:
      "The number of radial nodes in an orbital is n - l - 1, which for an s orbital with l = 0 becomes n - 1.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.3",
    concept: "radial node sequence",
  },
  {
    key: "orbitalb-4s-below-3d-in-potassium",
    text: "In a neutral potassium atom the outermost electron occupies the 4s orbital while the 3d subshell is still empty, because in that atom",
    options: [
      "3d already contains six paired electrons that repel the 4s electron",
      "4s is filled first since it lies lower in energy than 3d",
      "4s has three angular nodes and is therefore the outermost subshell",
      "the 3d subshell does not exist in the fourth period of the table",
    ],
    correctIndex: 1,
    explanation:
      "In the neutral atoms of the first transition series the 4s orbital lies below 3d in energy and is occupied first, and only as the 3d subshell fills across the series does the order of the two reverse.",
    evidence:
      "Orbitals are filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p because each new subshell is reached only after the lower energy one is filled.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-2.3",
    concept: "4s below 3d",
  },
  {
    key: "orbitalb-4s-energy-shifts-on-ionisation",
    text: "Across the first transition series the 3d subshell fills up, and by the end of the series the 4s orbital lies above 3d in energy. As a direct consequence the cations formed by these elements",
    options: [
      "lose their 3d electrons before any 4s electrons",
      "gain two electrons in the 4s subshell on ionisation",
      "lose their 4s electrons before any 3d electrons",
      "keep an empty 4s orbital in the ground state",
    ],
    correctIndex: 2,
    explanation:
      "Once 3d is occupied and the shielding it produces is felt, the 4s orbital is pushed to higher energy, so ionising a transition metal removes the 4s electrons first and leaves the 3d subshell partly filled.",
    evidence:
      "The 4s orbital is filled before 3d in a neutral atom, and as the 3d subshell fills the energy of 4s rises so that 4s electrons are removed first on ionisation.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "4s energy and ionisation",
  },
  {
    key: "orbitalb-2p-versus-3s-size-energy",
    text: "Comparing the 2p and 3s orbitals of the same atom, the 2p orbital is",
    options: [
      "larger and higher in energy",
      "larger and lower in energy",
      "the same size and the same energy",
      "smaller and lower in energy",
    ],
    correctIndex: 3,
    explanation:
      "The 2p orbital belongs to n = 2 and the 3s orbital to n = 3, and since both size and energy increase with the principal quantum number, the 2p orbital is the smaller and the lower in energy of the two.",
    evidence:
      "The energy of an orbital increases with its principal quantum number, so within the atom the order of increasing energy begins 1s, then 2s, then 2p, then 3s.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "2p versus 3s",
  },
  {
    key: "orbitalb-radial-distribution-1s-2s-2p",
    text: "Plotted as a radial distribution, the 1s, 2s and 2p orbitals of hydrogen behave differently because",
    options: [
      "only 2s has a radial node, so its curve shows two maxima separated by a point of zero probability",
      "all three have one radial node, so their curves are identical in shape",
      "only 2p has a radial node, so its curve rises to two maxima",
      "none of the three has a radial node, so each curve has a single maximum",
    ],
    correctIndex: 0,
    explanation:
      "The radial node count is n - l - 1, which is zero for 1s, one for 2s and zero for 2p, so the 2s curve falls to zero probability and rises again while 1s and 2p each show a single maximum.",
    evidence:
      "The number of radial nodes in an orbital is n - l - 1, which for the 1s, 2s and 2p orbitals gives 0, 1 and 0 radial nodes respectively.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 91,
    outcome: "CHEM-2.3",
    concept: "radial distribution curves",
  },
  {
    key: "orbitalb-why-opposite-spins-in-one-orbital",
    text: "Two electrons may share a single orbital only when their spin quantum numbers are opposite, because",
    options: [
      "an orbital can hold only two electrons of the same spin",
      "two electrons with the same four quantum numbers would be indistinguishable and are forbidden by the Pauli exclusion principle",
      "spin can take only the value plus one-half for the first electron",
      "the magnetic quantum number of the second electron must then be different",
    ],
    correctIndex: 1,
    explanation:
      "Electrons sharing an orbital already have identical n, l and m values, so equal spins would leave them described by the same set of four quantum numbers, which the Pauli exclusion principle does not permit.",
    evidence:
      "Each orbital can hold a maximum of two electrons, and these must be of opposite spin, since electrons of the same spin cannot occupy the same orbital.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.3",
    concept: "Pauli exclusion principle",
  },
  {
    key: "orbitalb-half-filled-p-subshell-stability",
    text: "A p subshell holding three electrons, one in each of its three orbitals with parallel spins, is unusually stable because",
    options: [
      "three electrons together exceed the maximum capacity of two per orbital",
      "each of the three orbitals then holds a full pair of opposite spins",
      "three electrons of parallel spin in separate orbitals can interchange places repeatedly and lower the energy",
      "the subshell has one angular node fewer than a filled p subshell",
    ],
    correctIndex: 2,
    explanation:
      "The extra stability of a half-filled subshell comes from the exchange energy of electrons of parallel spin in separate orbitals, which is why a p3 arrangement is more stable than p1, p2, p4 or p5.",
    evidence:
      "A half-filled or fully filled subshell is unusually stable because electrons of parallel spin in separate orbitals can exchange places many times, which lowers the energy of the arrangement.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "half-filled subshell",
  },
  {
    key: "orbitalb-statements-about-probability-surface",
    text: "On the orbital picture of an atom, three statements are set out below.\nI. The surface drawn around an orbital is a chosen boundary enclosing about 90 % of the electron probability.\nII. Probability density exists at all distances from the nucleus and falls smoothly towards zero without reaching it at any finite point.\nIII. An electron occupying an orbital can be assigned a definite radius from the nucleus.\nStatements I and II are correct while statement III is incorrect.",
    options: ["I only", "II only", "I, II and III", "I and II"],
    correctIndex: 3,
    explanation:
      "The 90 % surface is a chosen boundary and the density tails off smoothly beyond it, so statements I and II describe the orbital correctly, whereas an electron cannot be given a definite radius, which is what statement III claims.",
    evidence:
      "An atomic orbital is a region in space around the nucleus in which the probability of finding an electron is about 90 %, rather than a circular path of fixed radius.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-2.3",
    concept: "probability surface claims",
  },
  {
    key: "orbitalb-statements-about-quantum-number-roles",
    text: "Consider the following statements on the quantum numbers of an electron.\nI. The principal quantum number n identifies the shell and the azimuthal quantum number l identifies the subshell within it.\nII. For n = 2 the permitted values of l are 0 and 1 only, giving the 2s and 2p subshells.\nIII. The number of radial nodes of an orbital is fixed by n alone and does not change with l.\nStatements I and II are correct while statement III is incorrect.",
    options: ["I and II", "I only", "II only", "I, II and III"],
    correctIndex: 0,
    explanation:
      "The principal number fixes the shell, the azimuthal number the subshell, and for n = 2 only l = 0 and 1 are allowed, but the radial node count n - l - 1 changes when l changes at a fixed n, so statement III fails.",
    evidence:
      "The number of angular nodes in an orbital is equal to its azimuthal quantum number l, and the number of radial nodes is n - l - 1.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.3",
    concept: "quantum number claims",
  },
  {
    key: "orbitalb-statements-about-node-formulas",
    text: "Regarding the nodes of atomic orbitals, the following three statements are given.\nI. The number of radial nodes of an orbital is n - l - 1.\nII. The total number of nodes of an orbital is n - 1.\nIII. A 3p orbital has one radial node and one angular node.",
    options: [
      "Only I and II are correct",
      "All three are correct",
      "Only I and III are correct",
      "Only II and III are correct",
    ],
    correctIndex: 1,
    explanation:
      "Radial nodes are given by n - l - 1 and angular nodes by l, so the two counts always add up to n - 1, and for a 3p orbital with n = 3 and l = 1 they work out as 3 - 1 - 1 = 1 radial node and 1 angular node.",
    evidence:
      "The total number of nodes in an orbital is n - 1, of which n - l - 1 are radial nodes and l are angular nodes.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 92,
    outcome: "CHEM-2.3",
    concept: "node formula claims",
  },
  {
    key: "orbitalb-set-with-two-nodes",
    text: "Each of the following sets contains orbitals with the same total number of nodes. The set in which every orbital has exactly two nodes is",
    options: ["2s, 2p and 3s", "3p, 3d and 4s", "3s, 3p and 3d", "3d, 4s and 4p"],
    correctIndex: 2,
    explanation:
      "Two nodes means n - 1 = 2 and so n = 3, and every orbital of the third shell, whether s, p or d, has two nodes, while the orbitals of n = 2 have only one and those of n = 4 have three.",
    evidence:
      "The total number of nodes in an orbital is n - 1, of which n - l - 1 are radial nodes and l are angular nodes.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-2.3",
    concept: "nodes by shell",
  },
  {
    key: "orbitalb-four-f-orbital-description",
    text: "An electron occupies an orbital with n = 4 and l = 3. The statement that correctly describes this orbital is",
    options: [
      "it belongs to the 4d subshell and has two angular nodes",
      "it belongs to the 4f subshell and has seven radial nodes",
      "it belongs to the 3f subshell, which is filled before 4s",
      "it belongs to the 4f subshell, has three angular nodes and no radial node",
    ],
    correctIndex: 3,
    explanation:
      "With l = 3 the orbital lies in the f subshell of the n = 4 shell, the number of angular nodes equals l and is three, and the radial node count is n - l - 1 = 4 - 3 - 1 = 0, while the f subshell holds 2l + 1 = 7 orbitals.",
    evidence:
      "The number of angular nodes in an orbital is equal to its azimuthal quantum number l, and the number of radial nodes is n - l - 1.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-2.3",
    concept: "4f orbital",
  },
  {
    key: "orbitalb-why-no-fixed-radius",
    text: "The electron of an atom cannot be said to lie at a fixed distance from the nucleus, because",
    options: [
      "the wave function gives a probability density at every point and the electron may be found over a range of distances",
      "the nucleus repels the electron until it reaches a fixed equilibrium distance",
      "the drawn boundary of the orbital fixes the radius at which the electron must stop",
      "the spin quantum number sets the distance of the electron from the nucleus",
    ],
    correctIndex: 0,
    explanation:
      "Quantum mechanics describes the electron by a wave function whose square is a probability density, so the electron may be found over a whole range of distances and only a region of high probability, never a single radius, can be quoted.",
    evidence:
      "The wave function describes the probability of finding an electron in a region of space rather than a fixed circular path, which is why the electron has no definite distance from the nucleus.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-2.3",
    concept: "no definite electron radius",
  },
];