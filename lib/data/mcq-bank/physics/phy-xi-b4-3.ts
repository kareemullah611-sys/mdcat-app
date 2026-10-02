import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "contin-equation-statement",
    text: "For steady flow of an incompressible liquid, the volume of liquid passing every cross-section of a pipe in one second is",
    options: [
      "different at each cross-section, because the pressure drops along the pipe",
      "the same at every cross-section, so that A1 v1 equals A2 v2",
      "the same at every cross-section, so that A1 v2 equals A2 v1",
      "greatest at the widest cross-section of the pipe",
    ],
    correctIndex: 1,
    explanation:
      "The density of an incompressible liquid is constant, so equal masses cross every section each second and equal volumes do too, which is exactly the statement A1 v1 = A2 v2 for any two sections.",
    evidence:
      "For steady flow of an incompressible fluid the volume passing every cross-section per second is the same, so A1 v1 = A2 v2.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-5.6",
    concept: "continuity equation statement",
  },
  {
    key: "contin-narrow-section-speed",
    text: "A horizontal pipe narrows steadily from a wide section to a narrow one. As the water flows along it, the water in the narrow section",
    options: [
      "moves more slowly, because less of the pipe is available to it",
      "moves at the same speed, because gravity drives the water steadily",
      "moves faster, because the same volume flow rate is squeezed through a smaller area",
      "moves faster, because the pressure of the water there is much greater",
    ],
    correctIndex: 2,
    explanation:
      "The same volume of water must cross every cross-section each second, so v = Q / A rises as the area A falls, and the narrowest part therefore carries the water at the highest speed.",
    evidence:
      "In a pipe of varying cross-section the speed of an incompressible fluid varies inversely as the cross-sectional area.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-5.6",
    concept: "narrowing raises flow speed",
  },
  {
    key: "contin-incompressible-meaning",
    text: "A liquid is said to be incompressible in this context because",
    options: [
      "it cannot be made to flow through a pipe under gravity",
      "its volume shrinks whenever extra pressure is applied to it",
      "its temperature stays constant while it is being pumped",
      "its density does not change when the pressure on it is changed",
    ],
    correctIndex: 3,
    explanation:
      "Incompressibility means the density of the liquid is unaffected by pressure, so a given mass always occupies the same volume and the volume passing a cross-section per second is conserved in steady flow.",
    evidence:
      "An incompressible fluid is one whose density does not change under pressure, so its volume per second at a section stays constant.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-5.6",
    concept: "meaning of incompressibility",
  },
  {
    key: "contin-two-sections-speed-compare",
    text: "In a pipe of varying bore carrying water, one section has area 20 cm^2 and another has area 5 cm^2. The ratio of the speed in the 5 cm^2 section to the speed in the 20 cm^2 section is",
    options: ["4", "2", "one quarter", "one half"],
    correctIndex: 0,
    explanation:
      "From A1 v1 = A2 v2 the speed ratio is the inverse area ratio, so v_small / v_large = 20 / 5 = 4 and the narrower section carries the water four times faster.",
    evidence:
      "The continuity equation makes the speed of an incompressible fluid inversely proportional to the cross-sectional area of the section.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 94,
    outcome: "PHY-5.6",
    concept: "inverse area speed ratio",
  },
  {
    key: "contin-pipe-speed-value",
    text: "Water flows steadily through a pipe whose cross-sectional area is 2.0 cm^2 at one end and 0.50 cm^2 at the other. If the speed at the wide end is 0.20 m s^-1, the speed at the narrow end is",
    options: ["0.05 m s^-1", "0.80 m s^-1", "0.40 m s^-1", "1.60 m s^-1"],
    correctIndex: 1,
    explanation:
      "Using A1 v1 = A2 v2 gives 2.0 x 0.20 = 0.50 x v2, so v2 = 0.40 / 0.50 = 0.80 m s^-1; the area has fallen to one quarter, so the speed has risen fourfold.",
    evidence:
      "Applying A1 v1 = A2 v2 at two sections of a pipe gives the speed where the cross-sectional area is smaller.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-5.6",
    concept: "speed in narrow section",
  },
  {
    key: "contin-halved-radius-speed",
    text: "A pipe of circular cross-section with radius 4 cm carries water at 1.5 m s^-1. The radius of the pipe is then reduced to 2 cm while the volume flow rate stays the same. The new speed of the water is",
    options: ["3.0 m s^-1", "0.75 m s^-1", "6.0 m s^-1", "12.0 m s^-1"],
    correctIndex: 2,
    explanation:
      "Since A = pi r^2, halving the radius turns 16 pi cm^2 into 4 pi cm^2, a fourfold reduction of area, and with A v fixed the speed must rise fourfold to 4 x 1.5 = 6.0 m s^-1.",
    evidence:
      "Halving the radius of a pipe reduces its cross-sectional area to one quarter and so multiplies the flow speed fourfold.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-5.6",
    concept: "radius halving effect",
  },
  {
    key: "contin-second-section-area",
    text: "An incompressible liquid flows steadily at 0.50 m s^-1 in a pipe of cross-sectional area 12 cm^2. When the liquid speeds up to 2.0 m s^-1 in a second section of the same pipe, the cross-sectional area of that section is",
    options: ["3.0 cm^2", "24 cm^2", "6.0 cm^2", "9.0 cm^2"],
    correctIndex: 0,
    explanation:
      "Rearranging A1 v1 = A2 v2 gives A2 = (12 x 0.50) / 2.0 = 6.0 / 2.0 = 3.0 cm^2, and the fourfold speed increase demands exactly this fourfold reduction of area.",
    evidence:
      "The continuity equation can be rearranged to find the cross-sectional area of a section once the speed and the flow rate there are known.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-5.6",
    concept: "second section area",
  },
  {
    key: "contin-diameter-double-speed",
    text: "Water is discharged steadily through a pipe of uniform bore at 3.0 m s^-1. The diameter of the pipe is then doubled along the same line of flow. Assuming the volume flow rate is unchanged, the speed in the wider part becomes",
    options: ["1.5 m s^-1", "0.75 m s^-1", "6.0 m s^-1", "12.0 m s^-1"],
    correctIndex: 1,
    explanation:
      "Doubling the diameter multiplies the area by four because A = pi d^2 / 4, and with the volume flow rate fixed the speed falls by the same factor, giving 3.0 / 4 = 0.75 m s^-1.",
    evidence:
      "With the volume flow rate fixed, a fourfold increase of cross-sectional area reduces the flow speed to one quarter.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-5.6",
    concept: "diameter doubling effect",
  },
  {
    key: "contin-river-narrowing-comparison",
    text: "Considering the continuity equation alone, a river that narrows from a wide channel into a shallow constriction of smaller cross-sectional area will have",
    options: [
      "a lower speed in the constriction, because the flow there is broken by the rocks",
      "an equal speed at both places, because gravity drives the water equally",
      "a higher speed in the constriction, because the same volume is squeezed through a smaller area",
      "a higher speed in the wide channel, because deeper water always flows faster",
    ],
    correctIndex: 2,
    explanation:
      "Continuity requires the same volume per second at every cross-section of the channel, and a cross-section of smaller area in the constriction can pass that volume only at a higher speed.",
    evidence:
      "Where a river channel narrows, the same volume of water per second passes through a smaller cross-section and the flow speeds up.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-5.6",
    concept: "river constriction speed",
  },
  {
    key: "contin-reduced-inlet-area-effect",
    text: "A two-section pipe is fed through a broad inlet. Someone throttles the inlet so that the volume delivered each second is cut to one half, while the narrow section is left unchanged. The speed in the narrow section will",
    options: [
      "double, because the constriction is still the same size",
      "fall to one half of its former value, because the same area now carries half the volume",
      "stay unchanged, because the narrow section alone fixes the speed",
      "fall to one quarter of its former value, because the area has been cut to one quarter",
    ],
    correctIndex: 1,
    explanation:
      "In the unchanged narrow section the speed is v2 = Q / A2, and since the area A2 is the same as before while the volume flow rate Q is halved, the speed there is also halved.",
    evidence:
      "The speed of a fluid in a section of a pipe equals the volume flow rate divided by the cross-sectional area of that section.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-5.6",
    concept: "flow rate reduction effect",
  },
  {
    key: "contin-split-stream-speed",
    text: "A stream of water arrives at a junction with a cross-sectional area of 6.0 cm^2 and a speed of 1.2 m s^-1, and it divides into two equal branches, each of cross-sectional area 1.5 cm^2. Assuming no water is lost at the junction, the speed in each branch is",
    options: ["2.4 m s^-1", "1.2 m s^-1", "0.6 m s^-1", "4.8 m s^-1"],
    correctIndex: 0,
    explanation:
      "The arriving flow rate is 6.0 x 1.2 = 7.2, half of which is 3.6 in each branch, so v = 3.6 / 1.5 = 2.4 m s^-1; the combined branch area of 3.0 cm^2 is half the inlet area, so the speed doubles.",
    evidence:
      "When a stream divides, the volume flow rates in the branches add up to the volume flow rate arriving at the junction.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-5.6",
    concept: "split stream speed",
  },
  {
    key: "contin-narrow-claim-statement",
    text: "Two claims about a narrowing pipe are made: the water speeds up where the pipe narrows, and the same volume of water passes each cross-section every second. Which conclusion follows correctly from the two claims?",
    options: [
      "The water must stop moving where the pipe is narrowest",
      "The water must slow down, because the walls are closer together there",
      "The water must move faster, and the area there must be inversely proportional to the speed",
      "The water must move faster, and the area there must be directly proportional to the speed",
    ],
    correctIndex: 2,
    explanation:
      "A1 v1 = A2 v2 with the same volume each second means A v is constant, so the speed must rise in proportion as the area falls, and the two quantities are inversely related.",
    evidence:
      "The continuity equation A1 v1 = A2 v2 states that, for a fixed volume flow rate, area and speed vary inversely.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-5.6",
    concept: "inverse area speed law",
  },
  {
    key: "contin-steady-vs-uniform",
    text: "Two different descriptions of flow are compared. Steady flow means the density of the fluid at any given point does not change with time, while uniform flow means the velocity is the same at all points of the flow at a given instant. A pipe of steadily decreasing diameter is",
    options: [
      "steady but not uniform, since the speed changes from section to section",
      "uniform but not steady, since the density at a point stays the same",
      "both steady and uniform, since the diameter changes only slowly",
      "neither steady nor uniform, since every pipe with a bend is unsteady",
    ],
    correctIndex: 0,
    explanation:
      "The flow is steady because the density at each fixed point of the pipe is unchanged in time, but it is not uniform because the speed is different in the wide and the narrow sections.",
    evidence:
      "Steady flow has unchanging density at each point in time, whereas uniform flow has the same velocity at all points at a given instant.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-5.6",
    concept: "steady versus uniform flow",
  },
  {
    key: "contin-unsteady-flow-accumulation",
    text: "While a tap is being opened, the length of the water column inside the pipe grows from moment to moment, so the volume of water held inside the pipe is changing with time. The simple continuity relation is unreliable at such a moment mainly because",
    options: [
      "the pipe has already been stretched by the pressure of the water",
      "the water behaves as a compressible liquid while the tap is open",
      "the speed of the water there is always greater than the speed of sound",
      "fluid is accumulating in the pipe, so equal volumes do not pass each cross-section",
    ],
    correctIndex: 3,
    explanation:
      "The relation A1 v1 = A2 v2 assumes steady flow, and while the column is still filling, water is being stored inside the pipe, so the volume entering one section in a second exceeds the volume leaving the next one.",
    evidence:
      "The continuity equation in the form A1 v1 = A2 v2 holds for steady flow, in which no fluid accumulates inside the pipe.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-5.6",
    concept: "unsteady flow accumulation",
  },
  {
    key: "contin-diameter-ratio-speed",
    text: "Water at 4.0 m s^-1 flows steadily through a pipe of diameter 6.0 cm. At a point where the diameter of the pipe falls to 4.0 cm, the speed of the water is",
    options: ["9.0 m s^-1", "1.8 m s^-1", "16 m s^-1", "5.3 m s^-1"],
    correctIndex: 0,
    explanation:
      "The radii are 3.0 cm and 2.0 cm, so the areas are 9 pi and 4 pi cm^2 and the speed ratio is 9 / 4 = 2.25, giving v2 = 4.0 x 2.25 = 9.0 m s^-1.",
    evidence:
      "Since the cross-sectional area of a circular pipe varies as the square of its diameter, continuity fixes the ratio of the speeds at two sections.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-5.6",
    concept: "diameter ratio speed",
  },
  {
    key: "contin-constriction-entry-sequence",
    text: "As water moves from a wide pipe into a narrow throat, the quantities change in the order",
    options: [
      "area falls, speed falls, and then speed rises again",
      "area falls, speed rises, and the volume flow rate stays the same",
      "speed rises, area falls, and then the volume flow rate falls",
      "area rises, speed falls, and then the volume flow rate doubles",
    ],
    correctIndex: 1,
    explanation:
      "The cross-sectional area is the first quantity to change at the throat, and because A v must stay constant the speed rises there, while the volume flow rate itself is never disturbed.",
    evidence:
      "Through a constriction the cross-sectional area falls and the flow speed rises, while the volume flow rate of the fluid remains unchanged.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-5.6",
    concept: "constriction entry sequence",
  },
  {
    key: "contin-equal-flow-two-pipes",
    text: "Two pipes of different bore carry the same volume of water every second, pipe P having twice the cross-sectional area of pipe Q. The speeds in the two pipes compare as",
    options: [
      "the speed in P is twice the speed in Q",
      "the speed in P is four times the speed in Q",
      "the speeds are equal, because the volume each second is the same",
      "the speed in P is one half of the speed in Q",
    ],
    correctIndex: 3,
    explanation:
      "With the volume flow rate the same in both pipes, v = Q / A, so doubling the area must halve the speed, and the wider pipe P carries the same water at half the speed of Q.",
    evidence:
      "For an equal volume flow rate the speed of an incompressible fluid varies inversely as the cross-sectional area of the pipe.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-5.6",
    concept: "equal flow different bore",
  },
  {
    key: "contin-area-one-ninth-speed",
    text: "A channel of cross-sectional area 45 cm^2 carries water at 1.5 m s^-1. Where the channel narrows to an area of 5 cm^2, the speed of the water is",
    options: ["1.5 m s^-1", "6.7 m s^-1", "0.17 m s^-1", "13.5 m s^-1"],
    correctIndex: 3,
    explanation:
      "The volume flow rate is 45 x 1.5 = 67.5, so v = 67.5 / 5 = 13.5 m s^-1; the area has fallen to one ninth, so the speed must be nine times the original.",
    evidence:
      "Where the cross-sectional area of a channel falls to one ninth, continuity requires the flow speed to become nine times greater.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-5.6",
    concept: "ninefold area reduction",
  },
  {
    key: "contin-derivation-argument-sequence",
    text: "The continuity equation for a steady flow of an incompressible liquid is reached by a chain of reasoning in which one first notes that no fluid can pile up anywhere in a steady flow, and then uses",
    options: [
      "the fact that a narrow section must always be followed by a wider one",
      "the fact that a pressure difference between two sections fixes the ratio of their areas",
      "the fact that the kinetic energy carried by the liquid is the same at every section",
      "the fact that the volume crossing one cross-section in a second equals the volume crossing another",
    ],
    correctIndex: 3,
    explanation:
      "If nothing accumulates, the volume passing one cross-section in a second must equal the volume passing the next one, and since that volume in a second is the area multiplied by the speed, A1 v1 = A2 v2 follows.",
    evidence:
      "Continuity is derived from the fact that in steady flow the volume of fluid passing each cross-section in one second is the same.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-5.6",
    concept: "derivation of continuity",
  },
  {
    key: "contin-extra-inlet-stream",
    text: "A second pipe of cross-sectional area 2.0 cm^2 joins a main pipe of area 6.0 cm^2 and both carry water into the junction. If the speed in the main pipe is 0.60 m s^-1 and that in the side pipe is 0.45 m s^-1, the speed just after the junction, in the 6.0 cm^2 pipe, is",
    options: ["0.75 m s^-1", "1.05 m s^-1", "0.52 m s^-1", "1.50 m s^-1"],
    correctIndex: 2,
    explanation:
      "The main pipe brings 6.0 x 0.60 = 3.6 and the side pipe brings 2.0 x 0.45 = 0.9, so 4.5 in all must leave through 6.0 cm^2, giving 4.5 / 6.0 = 0.75 m s^-1.",
    evidence:
      "Where two streams of an incompressible fluid join, the volume flow rates arriving add up and pass on through the common section.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 90,
    outcome: "PHY-5.6",
    concept: "two inlets combined flow",
  },
  {
    key: "contin-radius-area-claim",
    text: "Two statements are examined: the radius of a pipe is halved, and the volume flow rate through it is unchanged. Which option follows correctly from the two statements?",
    options: [
      "Both are wrong, because the bore of a pipe cannot be constricted",
      "The first is wrong, because the area of a pipe is proportional to its radius",
      "The second is wrong, because constriction always cuts the flow rate",
      "Both are right, so the area falls to one quarter and the speed must rise fourfold",
    ],
    correctIndex: 3,
    explanation:
      "Since A = pi r^2, halving the radius gives pi (r/2)^2 = A / 4, and as the volume flow rate is unchanged the speed must become four times its former value.",
    evidence:
      "The cross-sectional area of a circular pipe varies as the square of its radius, so halving the radius quarters the area.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-5.6",
    concept: "radius to area relation",
  },
  {
    key: "contin-nozzle-speedup",
    text: "Water flowing steadily through a pipe emerges from a nozzle that narrows the bore sharply. Neglecting the effects of viscosity, the speed of the emerging jet compared with the speed inside the pipe is",
    options: [
      "the same, because a liquid always moves at a fixed speed set by gravity",
      "greater, because the smaller area of the nozzle must pass the same volume per second",
      "smaller, because the nozzle holds back part of the water",
      "greater, because the water loses weight on passing through the nozzle",
    ],
    correctIndex: 1,
    explanation:
      "The same volume per second crosses the nozzle as crossed the wider pipe, and since the nozzle area is smaller, v = Q / A must be larger there.",
    evidence:
      "A nozzle that reduces the cross-sectional area increases the speed at which the liquid leaves it.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-5.6",
    concept: "nozzle speed increase",
  },
  {
    key: "contin-gas-compressibility-limit",
    text: "A gas is forced through a pipe that narrows sharply and its pressure drops noticeably where the pipe is narrow. The flow of this gas is described less exactly by the simple continuity relation than the flow of a liquid, because",
    options: [
      "the density of a gas changes appreciably with its pressure, so the volume flow rate need not stay constant",
      "a gas carries electric charge, which alters the speed of its flow",
      "a gas has no cross-sectional area, so no continuity relation can be applied at all",
      "the speed of a gas is always kept below the speed of sound in a narrow pipe",
    ],
    correctIndex: 0,
    explanation:
      "A liquid has almost fixed density, so A v is conserved in steady flow, but a compressible gas changes its density as its pressure changes, leaving the mass flow rate rather than A v as the conserved quantity.",
    evidence:
      "The relation A1 v1 = A2 v2 is exact only for an incompressible fluid such as a liquid and is approximate for a compressible gas.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-5.6",
    concept: "compressible fluid limitation",
  },
  {
    key: "contin-two-branch-flow-division",
    text: "Water enters a junction with a cross-sectional area of 12 cm^2 and a speed of 1.0 m s^-1 and then divides into branches of area 4 cm^2 and 2 cm^2. If the speed in the 2 cm^2 branch is 5.0 m s^-1, the speed in the 4 cm^2 branch is",
    options: ["0.5 m s^-1", "3.0 m s^-1", "1.5 m s^-1", "6.0 m s^-1"],
    correctIndex: 2,
    explanation:
      "The arriving flow rate is 12 x 1.0 = 12, of which the small branch takes 2 x 5.0 = 10, leaving 2 for the 4 cm^2 branch, so its speed is 2 / 4 = 0.5 m s^-1.",
    evidence:
      "When a stream of an incompressible fluid divides, the volume flow rates in the branches must add up to the flow rate arriving at the junction.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 90,
    outcome: "PHY-5.6",
    concept: "two branch flow division",
  },
  {
    key: "contin-tilted-pipe-equation",
    text: "A pipe of uniform bore that was laid horizontally is re-laid along a slope, and water still flows steadily through it at exactly the same speed as before. This result shows that",
    options: [
      "the continuity relation now needs a height term, because the water is falling",
      "the water must slow down, because gravity now acts along the pipe",
      "the water must speed up, because the vertical drop adds energy to the flow",
      "the continuity relation along the pipe is unchanged, because it rests on area and speed rather than on the tilt",
    ],
    correctIndex: 3,
    explanation:
      "Continuity only equates the flow rates at two sections through A1 v1 = A2 v2, so the tilt of the pipe never enters it, and the height of a point matters for the energy equation rather than for continuity.",
    evidence:
      "The continuity equation A1 v1 = A2 v2 compares flow rates at two sections and contains no term for height.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 89,
    outcome: "PHY-5.6",
    concept: "tilt independence of continuity",
  },
];
