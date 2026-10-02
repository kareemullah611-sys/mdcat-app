import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "station-superposition-algebraic-sum",
    text: "Two pulses pass through the same region of a rope at the same time. According to the principle of superposition, the displacement of the rope at any instant is",
    options: [
      "the algebraic sum of the two individual displacements",
      "the larger of the two individual displacements",
      "the average of the two individual displacements",
      "the difference between the two individual displacements",
    ],
    correctIndex: 0,
    explanation:
      "Superposition states that when two waves overlap, the resultant displacement at each point is the algebraic sum of the displacements which each wave would produce there on its own, so the two contributions simply add with their signs.",
    evidence:
      "The resultant displacement at a point is the algebraic sum of the displacements produced there by the individual waves that overlap.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "PHY-6.12",
    concept: "superposition principle",
  },
  {
    key: "station-two-identical-opposite-waves",
    text: "A stationary wave is produced when two waves",
    options: [
      "of the same frequency and amplitude meet while moving in the same direction",
      "of identical frequency, amplitude and speed travel in opposite directions",
      "of equal speed but different frequencies are reflected from a fixed wall",
      "of equal frequency are superposed after passing through a narrow slit",
    ],
    correctIndex: 1,
    explanation:
      "A stationary wave is the superposition of two identical waves, meaning the same frequency, amplitude and therefore the same speed, travelling through the same medium in opposite directions, and the pattern they build up does not advance along the medium.",
    evidence:
      "Stationary waves are produced by the superposition of two identical waves travelling in the same medium in opposite directions.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-6.12",
    concept: "stationary wave formation",
  },
  {
    key: "station-node-zero-amplitude",
    text: "The points of a stationary wave that never move from their mean position, because the two component waves always cancel there, are called",
    options: [
      "antinodes, where the two waves always reinforce each other",
      "crests, where the two waves always reinforce each other",
      "nodes, where the amplitude of vibration is zero",
      "loops, where the amplitude is twice that of either wave",
    ],
    correctIndex: 2,
    explanation:
      "At a node the two counter-travelling waves always arrive with equal and opposite displacements, so the resultant amplitude is zero and the point stays permanently at its mean position.",
    evidence:
      "A node is a point of zero amplitude in a stationary wave because the two waves always cancel each other at that point.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-6.12",
    concept: "node definition",
  },
  {
    key: "station-node-antinode-amplitude",
    text: "For a stationary wave, how do the amplitude at a node and the amplitude at an antinode compare?",
    options: [
      "They are equal, since both points belong to the same stationary pattern",
      "They are equal, since both oscillate with the frequency of the component waves",
      "The node has twice the amplitude because the two waves cancel there",
      "The node has zero amplitude while the antinode has the maximum amplitude",
    ],
    correctIndex: 3,
    explanation:
      "At a node the two displacements are always equal and opposite and give zero resultant amplitude, whereas at an antinode they always act in the same direction and produce the largest displacement anywhere in the pattern.",
    evidence:
      "Nodes are points of zero amplitude and antinodes are points of maximum amplitude in a stationary wave.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-6.12",
    concept: "node antinode amplitude",
  },
  {
    key: "station-consecutive-node-spacing",
    text: "The wavelength of the two waves that form a stationary wave on a stretched string is 0.40 m. The distance between two consecutive nodes of this stationary wave is",
    options: ["0.20 m", "0.10 m", "0.40 m", "0.80 m"],
    correctIndex: 0,
    explanation:
      "Consecutive nodes are separated by half a wavelength, so the separation is 0.40 m divided by 2, which gives 0.20 m.",
    evidence:
      "The distance between two consecutive nodes is equal to half the wavelength of the waves forming the stationary wave.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.12",
    concept: "node separation",
  },
  {
    key: "station-node-antinode-quarter",
    text: "Along the pattern of a stationary wave, what is the distance from a node to the nearest antinode?",
    options: [
      "One eighth of a wavelength",
      "One quarter of a wavelength",
      "Half a wavelength",
      "One full wavelength",
    ],
    correctIndex: 1,
    explanation:
      "A quarter of a wavelength from a node the two waves arrive in phase and reinforce fully, so an antinode lies a quarter wavelength away, halfway towards the next node which is a full wavelength away.",
    evidence:
      "The distance between a node and the nearest antinode is one quarter of the wavelength of the component waves.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.12",
    concept: "node antinode spacing",
  },
  {
    key: "station-pattern-stationary-points",
    text: "When two identical waves meet in the same medium and form a stationary wave, the nodes and antinodes of the pattern",
    options: [
      "move along the medium at the speed of either component wave",
      "move along the medium at twice the speed of the component waves",
      "remain at fixed positions while the medium between them oscillates",
      "remain at fixed positions and the medium between them also stays still",
    ],
    correctIndex: 2,
    explanation:
      "The two counter-travelling waves keep passing through each other, so the points of zero and of maximum amplitude stay at the same places in the medium while the material between them swings to and fro about its mean position.",
    evidence:
      "In a stationary wave the nodes and antinodes remain at fixed positions and the pattern does not travel through the medium.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-6.12",
    concept: "stationary pattern",
  },
  {
    key: "station-no-net-energy-transfer",
    text: "Energy is not carried along a stationary wave from one part of the medium to another because",
    options: [
      "the two component waves travel in opposite directions and cancel everywhere",
      "the nodes have zero amplitude, so no part of the medium ever moves",
      "the antinodes absorb the energy of both waves as they pass through",
      "each part of the medium gains exactly the energy it hands to its neighbours",
    ],
    correctIndex: 3,
    explanation:
      "Every piece of the medium between two nodes oscillates about its equilibrium position, taking energy from the wave on one side and returning the same amount to it, so the net transfer of energy along the stationary wave is zero.",
    evidence:
      "In a stationary wave no net transfer of energy takes place along the wave, the energy stays confined between the nodes.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-6.12",
    concept: "energy in stationary wave",
  },
  {
    key: "station-constructive-versus-destructive",
    text: "A crest of one wave meets a crest of another wave, while elsewhere a crest of the first meets a trough of the second. The resulting displacements in the two regions are",
    options: [
      "larger where crest met crest and smaller where crest met trough",
      "larger where crest met crest and larger where crest met trough",
      "smaller where crest met crest and larger where crest met trough",
      "unchanged in both regions, since the two waves never overlap there",
    ],
    correctIndex: 0,
    explanation:
      "Crest meeting crest is constructive interference, in which the displacements add and the amplitude is greater than that of either wave alone, while crest meeting trough is destructive interference, in which they subtract and the amplitude is reduced.",
    evidence:
      "Constructive interference occurs where two crests meet and destructive interference where a crest meets a trough.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-6.12",
    concept: "constructive destructive interference",
  },
  {
    key: "station-closed-end-displacement-node",
    text: "An air column held in a pipe that is closed at one end behaves, as far as the air in it is concerned, as if that closed end were",
    options: [
      "a displacement antinode, since the air can move out through the open mouth",
      "a displacement node, since the air cannot oscillate at the closed wall",
      "a displacement node, because the pressure change there is also zero",
      "a displacement antinode, because the pressure change there is also zero",
    ],
    correctIndex: 1,
    explanation:
      "The closed wall stops the air from moving, so the displacement of the air is always zero there and the closed end is a displacement node, even though the pressure change is greatest at that same end.",
    evidence:
      "The closed end of an air column is a node for displacement and an antinode for pressure change.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.12",
    concept: "closed end boundary",
  },
  {
    key: "station-open-pipe-end-order",
    text: "A pipe is open at both ends and is sounding its fundamental note. Taking the positions in order from one open end, through the middle of the pipe, to the other open end, the three marked positions are",
    options: [
      "displacement node, then displacement node, then displacement antinode",
      "displacement antinode, then displacement antinode, then displacement node",
      "displacement antinode, then displacement node, then displacement antinode",
      "displacement node, then displacement antinode, then displacement node",
    ],
    correctIndex: 2,
    explanation:
      "Both open ends allow the air to oscillate freely, so each is a displacement antinode, and in the fundamental mode the air at the centre of the pipe is unable to move, which makes the middle a displacement node.",
    evidence:
      "In a pipe open at both ends the open ends are displacement antinodes and the centre of the fundamental mode is a displacement node.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.12",
    concept: "open pipe boundary",
  },
  {
    key: "station-false-remark-nodes-antinodes",
    text: "For the pattern of a stationary wave, the remark that is not correct is",
    options: [
      "the nodes and the antinodes both stay at fixed positions in the medium",
      "two consecutive antinodes are separated by a distance equal to half a wavelength",
      "the amplitude at a node is zero while the amplitude at an antinode is maximum",
      "each antinode travels forward and backward along the medium with the speed of the wave",
    ],
    correctIndex: 3,
    explanation:
      "The nodes and antinodes of a stationary wave are fixed in position, so no antinode travels along the medium; only the medium between them oscillates, while their spacing and their zero and maximum amplitudes stay as stated.",
    evidence:
      "In a stationary wave the nodes and antinodes remain at rest and the pattern does not travel through the medium.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.12",
    concept: "stationary wave statements",
  },
  {
    key: "station-harmonic-loop-order",
    text: "A string fixed at both ends can vibrate in several harmonics. Listed in the order of increasing frequency, the first three harmonics of this string contain",
    options: [
      "one loop, then two loops, then three loops",
      "three loops, then two loops, then one loop",
      "two loops, then one loop, then three loops",
      "one loop, then three loops, then two loops",
    ],
    correctIndex: 0,
    explanation:
      "For a string fixed at both ends the nth harmonic fits n half-wavelength loops along the string, so the fundamental has one loop and the harmonics above it have two, three and more, each of which is higher in frequency than the one before.",
    evidence:
      "For a string fixed at both ends the nth harmonic contains n loops, and the frequency of a harmonic is n times the fundamental frequency.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-6.12",
    concept: "harmonic loop order",
  },
  {
    key: "station-third-harmonic-string-wavelength",
    text: "A string of length 1.2 m is fixed at both of its ends. The wavelength used when the string vibrates in its third harmonic is",
    options: ["0.30 m", "0.80 m", "1.20 m", "0.60 m"],
    correctIndex: 1,
    explanation:
      "A string fixed at both ends satisfies L = n lambda/2, so in the third harmonic lambda = 2L/3 = 2 x 1.2 m divided by 3, which gives 0.80 m.",
    evidence:
      "For a string fixed at both ends L = n lambda/2, so the third harmonic has a wavelength equal to two thirds of the string length.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-6.12",
    concept: "third harmonic wavelength",
  },
  {
    key: "station-closed-pipe-first-overtone",
    text: "The first overtone of a pipe that is closed at one end has a wavelength",
    options: [
      "equal to 2L, where L is the length of the pipe",
      "equal to 4L, where L is the length of the pipe",
      "equal to 4L/3, where L is the length of the pipe",
      "equal to L, where L is the length of the pipe",
    ],
    correctIndex: 2,
    explanation:
      "A pipe closed at one end supports only the odd harmonics, so its fundamental has a wavelength of 4L and the first overtone is the next odd harmonic, the third, whose wavelength is 4L/3.",
    evidence:
      "A pipe closed at one end vibrates only in the odd harmonics, the fundamental having a wavelength equal to four times the length of the pipe.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.12",
    concept: "closed pipe first overtone",
  },
  {
    key: "station-midpoint-touch-second-harmonic",
    text: "A stretched string fixed at both ends is plucked and, while it is vibrating, is held lightly at its exact midpoint. The light hold acts as a node, so the string goes on vibrating mainly in",
    options: [
      "its first harmonic, with a single loop",
      "its third harmonic, with three equal loops",
      "its fundamental mode, with a node only at the midpoint",
      "its second harmonic, with two equal loops",
    ],
    correctIndex: 3,
    explanation:
      "The two fixed ends are nodes and the light touch forces a third node at the midpoint, so the string is divided into two halves each of length lambda/2, which means L = 2 x lambda/2 and the string vibrates in its second harmonic with two loops.",
    evidence:
      "Touching the middle of a string fixed at both ends forces a node there, so the string vibrates in two segments and sounds the second harmonic.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 89,
    outcome: "PHY-6.12",
    concept: "midpoint node harmonic",
  },
  {
    key: "station-antinode-position-from-node",
    text: "Two identical waves of wavelength 2.0 m travel in opposite directions along a rope and form a stationary wave with a node at the position x = 0. The nearest antinode on either side of this node lies at",
    options: [
      "x = 0.5 m and x = -0.5 m",
      "x = 1.0 m and x = -1.0 m",
      "x = 0.25 m and x = -0.25 m",
      "x = 2.0 m and x = -2.0 m",
    ],
    correctIndex: 0,
    explanation:
      "The nearest antinode lies a quarter of a wavelength from the node, and a quarter of 2.0 m is 0.5 m, so the antinodes of this pattern sit at x = +0.5 m and x = -0.5 m.",
    evidence:
      "The distance from a node to the nearest antinode is one quarter of the wavelength of the waves that form the stationary wave.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 88,
    outcome: "PHY-6.12",
    concept: "antinode position",
  },
  {
    key: "station-closed-pipe-third-harmonic-pattern",
    text: "A pipe closed at one end is sounding its third harmonic. Considering only the displacement of the air, the pattern along the length of the pipe contains",
    options: [
      "one node and one antinode, placed at the two ends of the pipe",
      "two nodes and two antinodes, beginning with a node at the closed end",
      "two nodes and two antinodes, beginning with an antinode at the closed end",
      "three nodes and three antinodes, beginning with a node at the closed end",
    ],
    correctIndex: 1,
    explanation:
      "In the third harmonic of a pipe closed at one end, L = 3 lambda/4, so the air cannot move at the closed wall and a node recurs every half wavelength, giving node, antinode, node and antinode in turn up to the open end.",
    evidence:
      "A pipe closed at one end has a displacement node at the closed end and a displacement antinode at the open end in every mode it supports.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 88,
    outcome: "PHY-6.12",
    concept: "closed pipe node pattern",
  },
  {
    key: "station-two-claims-assessment",
    text: "In describing a stationary wave, two claims are offered. I: the two component waves have the same frequency, amplitude and speed but travel in opposite directions. II: the pattern of nodes and antinodes advances through the medium at the speed of either component wave. The correct assessment is",
    options: [
      "statement I is correct and statement II is also correct",
      "statement I is incorrect and statement II is also incorrect",
      "statement I is correct while statement II is incorrect",
      "statement I is incorrect while statement II is correct",
    ],
    correctIndex: 2,
    explanation:
      "The component waves of a stationary wave must be identical and must travel in opposite directions, so statement I is correct, but their superposition fixes the nodes and antinodes in place, so the pattern does not advance and statement II is incorrect.",
    evidence:
      "Stationary waves arise from two identical waves travelling in opposite directions, and the resulting pattern of nodes and antinodes stays at rest.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 88,
    outcome: "PHY-6.12",
    concept: "stationary wave claims",
  },
  {
    key: "station-open-and-closed-pipe-fundamental",
    text: "Two pipes have the same length L, one open at both ends and the other closed at one end. How do the wavelengths of their fundamental notes compare?",
    options: [
      "Both fundamentals have a wavelength of 4L",
      "The open pipe has a wavelength of 4L and the closed pipe 2L",
      "The open pipe has a wavelength of L and the closed pipe 4L",
      "The open pipe has a wavelength of 2L and the closed pipe 4L",
    ],
    correctIndex: 3,
    explanation:
      "With a displacement antinode at each open end, a pipe open at both ends fits half a wavelength in its fundamental, giving 2L, while the closed end acts as a node so that pipe fits a quarter wavelength, giving 4L.",
    evidence:
      "The fundamental wavelength of a pipe open at both ends is twice its length, and that of a pipe closed at one end is four times its length.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "PHY-6.12",
    concept: "pipe fundamental wavelengths",
  },
];
