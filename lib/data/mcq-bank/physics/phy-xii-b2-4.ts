import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-mag3-steady-electron-rate",
    text: "A conductor carries a steady current of 2.0 A. Taking the charge of the electron as 1.6 x 10^-19 C, how many electrons cross a section of that conductor in every second?",
    options: ["3.2 x 10^19", "8.0 x 10^18", "1.6 x 10^19", "1.25 x 10^19"],
    correctIndex: 3,
    explanation:
      "The steady current is the number of electrons passing each second multiplied by the charge carried by each one, so that number is 2.0 divided by 1.6 x 10^-19, which is 1.25 x 10^19 electrons.",
    evidence:
      "The current in a conductor is the rate of flow of charge, and each free electron carries a charge of 1.6 x 10^-19 C.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 88,
    outcome: "PHY-9.1",
    concept: "electron flow rate",
  },
  {
    key: "xii-mag3-parallel-branch-current-ratio",
    text: "Resistors of 2 ohm, 3 ohm and 6 ohm are connected in parallel across a supply of 6 V. Compare the currents in the three branches.",
    options: [
      "6 A, 3 A and 2 A in that order",
      "3 A, 2 A and 1 A in that order",
      "1 A, 2 A and 3 A in that order",
      "2 A, 3 A and 6 A in that order",
    ],
    correctIndex: 1,
    explanation:
      "Every branch is connected directly across the supply, so each one has 6 V across it and the currents are 3 A, 2 A and 1 A; the branch with the smallest resistance carries the largest current.",
    evidence:
      "Parallel branches share the same potential difference, so the current in each branch is inversely proportional to the resistance of that branch.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-9.1",
    concept: "current division",
  },
  {
    key: "xii-mag3-parallel-branch-current-steps",
    text: "Two resistors of 4 ohm and 12 ohm are joined in parallel across a supply of 12 V. Which ordered steps give the current in the 4 ohm resistor?",
    options: [
      "Divide the supply voltage by the 4 ohm resistor, since that branch carries the full 12 V",
      "Add the two resistances, then divide the supply voltage by the total",
      "Divide the supply voltage by the 12 ohm resistor, then subtract that result from 3 A",
      "Divide the supply voltage by the 4 ohm resistor, then subtract the current in the 12 ohm resistor",
    ],
    correctIndex: 0,
    explanation:
      "A branch of a parallel combination has the whole supply voltage across it, so the current in the 4 ohm resistor is 12 V divided by 4 ohm, which is 3 A; neither adding the resistances nor subtracting branch currents gives this branch current.",
    evidence:
      "The current in a parallel branch is the potential difference across that branch divided by the resistance of the branch.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-9.1",
    concept: "branch current method",
  },
  {
    key: "xii-mag3-parallel-pair-equivalent-resistance",
    text: "Two resistors of 6 ohm and 3 ohm are connected in parallel across a battery. What single resistance would be equivalent to this pair?",
    options: ["9 ohm", "1.8 ohm", "2 ohm", "4.5 ohm"],
    correctIndex: 2,
    explanation:
      "For two resistors in parallel the equivalent resistance is the product divided by the sum, that is 6 x 3 over 6 + 3, which is 2 ohm, a value below the smaller resistor of the pair.",
    evidence:
      "Resistors in parallel have an equivalent resistance that is smaller than the smallest resistance in the combination.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-9.2",
    concept: "parallel equivalent resistance",
  },
  {
    key: "xii-mag3-series-parallel-branch-current",
    text: "A 4 ohm resistor is connected in series with a parallel pair of a 6 ohm and a 3 ohm resistor, and the whole arrangement is joined to a supply of 12 V. What current flows through the 3 ohm resistor?",
    options: ["2.00 A", "4.00 A", "0.67 A", "1.33 A"],
    correctIndex: 3,
    explanation:
      "The parallel pair works out at 2 ohm, so the series total is 6 ohm and the supply delivers 2 A; that leaves 4 V across the pair, and 4 V through the 3 ohm resistor gives 1.33 A.",
    evidence:
      "Resistors in series carry the same current while the branches of a parallel combination share the potential difference across them.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-9.2",
    concept: "series parallel branch current",
  },
  {
    key: "xii-mag3-series-parallel-power-statements",
    text: "A pair of resistors of 6 ohm and 3 ohm is available together with a 6 V supply. Statement I: joined in series they take less power from the supply than when the same two are joined in parallel. Statement II: joined in parallel their combined resistance is less than the smaller of the two resistors. Which pair of judgements is right?",
    options: [
      "Statement I is true and Statement II is false",
      "Both statements are true",
      "Statement I is false and Statement II is true",
      "Both statements are false",
    ],
    correctIndex: 1,
    explanation:
      "In series the pair is 9 ohm and draws 4 W, while in parallel it is 2 ohm and draws 18 W, so the first statement holds; 2 ohm is also below the 3 ohm resistor, so the second holds.",
    evidence:
      "A parallel combination of two resistors has a lower equivalent resistance than the series combination of the same two, so it draws more current and more power from the supply.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-9.2",
    concept: "series parallel comparison",
  },
  {
    key: "xii-mag3-parallel-currents-add",
    text: "Two resistors are connected in parallel across a supply and each of them is found to carry a current of 3 A. What current is drawn from the supply, and why does it work out that way?",
    options: [
      "6 A, the sum of the two branch currents, because the charge from both branches returns to the supply along the same wire",
      "3 A, because the supply current is the average of the currents in the two branches",
      "6 A, because the supply current is the difference between the currents in the two branches",
      "9 A, because each branch draws its own current from the supply independently",
    ],
    correctIndex: 0,
    explanation:
      "The charge carried by both branches flows back to the supply in one wire, so the current there is the sum of the branch currents, 3 A plus 3 A, which is 6 A.",
    evidence:
      "In a parallel combination the total current carried by the supply is the sum of the currents in the individual branches.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-9.2",
    concept: "branch current sum",
  },
  {
    key: "xii-mag3-resistivity-dimensions",
    text: "The resistance R of a uniform wire of length L and cross-sectional area A obeys R = rho L / A, where rho is the resistivity of the material. Which set of dimensions belongs to rho?",
    options: ["M L^2 T^-3 I^-2", "M L T^-3 I^-2", "M L^3 T^-3 I^-2", "M L^3 T^-2 I^-2"],
    correctIndex: 2,
    explanation:
      "Resistance carries the dimensions M L^2 T^-3 I^-2 and the factor L / A contributes L^-1, so the resistivity must carry M L^3 T^-3 I^-2.",
    evidence:
      "Resistivity is the resistance of a unit length of wire of unit cross-sectional area, so its dimensions include those of area divided by those of length.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-9.3",
    concept: "resistivity dimensions",
  },
  {
    key: "xii-mag3-wire-radius-resistance-value",
    text: "A nichrome wire of resistivity 1.0 x 10^-6 ohm m has a radius of 0.50 mm and a length of 5.0 m. Taking pi as 3.14, what resistance does it offer?",
    options: ["0.64 ohm", "1.3 ohm", "3.1 ohm", "6.4 ohm"],
    correctIndex: 3,
    explanation:
      "The cross-sectional area is pi r^2, that is 3.14 x (0.50 x 10^-3)^2 = 7.85 x 10^-7 m^2, so the resistance is 1.0 x 10^-6 x 5.0 divided by 7.85 x 10^-7, which is 6.4 ohm.",
    evidence:
      "The resistance of a uniform wire is the resistivity of its material multiplied by its length and divided by its cross-sectional area.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.3",
    concept: "wire resistance from radius",
  },
  {
    key: "xii-mag3-filament-cold-hot-surge",
    text: "A bulb is marked 60 W, 240 V. Its filament has a resistance of 960 ohm at its working temperature but only 15 ohm when cold. How many times larger than its working current is the current at the instant the bulb is switched on?",
    options: ["4 times", "64 times", "16 times", "128 times"],
    correctIndex: 1,
    explanation:
      "The working current is 60 W / 240 V = 0.25 A while the switch-on current is 240 V / 15 ohm = 16 A, so the surge is 16 divided by 0.25, which is 64 times the working current.",
    evidence:
      "The resistance of a metal rises with temperature, so a cold filament passes a much larger current than a hot one under the same applied voltage.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-9.3",
    concept: "cold filament current surge",
  },
  {
    key: "xii-mag3-conductors-insulators-ordering",
    text: "Wires of equal length and equal cross-sectional area are cut from copper, from nichrome and from rubber, and each wire is connected in turn across the same supply. How do the currents they carry compare, and why?",
    options: [
      "Copper carries the largest current, nichrome a smaller one and rubber almost none, because the current falls as the resistivity rises",
      "Rubber carries the largest current, because an insulator lets charge through more easily than a metal",
      "Nichrome carries the largest current, because a heating alloy conducts better than pure copper",
      "All three carry the same current, because their length and their cross-sectional area are the same",
    ],
    correctIndex: 0,
    explanation:
      "With the geometry held the same the resistance is set by the resistivity, about 1.7 x 10^-8 ohm m for copper, 1.0 x 10^-6 ohm m for nichrome and of order 10^11 ohm m for rubber, so the currents rank in the reverse order of the resistivities.",
    evidence:
      "Metals such as copper have very low resistivity while insulators such as rubber and glass have resistivities of order 10^10 to 10^12 ohm m.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-9.3",
    concept: "resistivity ranking",
  },
  {
    key: "xii-mag3-source-series-model",
    text: "A real source is modelled as an ideal source of emf E in series with an internal resistance r, and this pair is connected to a load of resistance R. Which statement about the resistance that limits the current in the circuit is correct?",
    options: [
      "It is R alone, because the emf of a source is separate from any resistance in it",
      "It is R - r, because the internal resistance works against the emf of the source",
      "It is R r divided by R + r, because the internal resistance sits in parallel with the load",
      "It is R + r, because the internal resistance of the source is in series with the load",
    ],
    correctIndex: 3,
    explanation:
      "The current in the loop is the emf divided by the total resistance of the loop, and since the internal resistance lies in the same loop as the load the two add, giving E divided by R + r.",
    evidence:
      "A source of emf E and internal resistance r supplies a current equal to E divided by the sum of the internal resistance and the external resistance.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.4",
    concept: "source equivalent circuit",
  },
  {
    key: "xii-mag3-cell-parallel-load-branch-current",
    text: "The emf of a cell is 9.0 V and its internal resistance 0.50 ohm, and it supplies a load made of resistors of 2 ohm, 3 ohm and 6 ohm joined in parallel. What current flows through the 6 ohm resistor?",
    options: ["6.0 A", "2.0 A", "1.0 A", "3.0 A"],
    correctIndex: 2,
    explanation:
      "The three parallel resistors reduce to 1 ohm, the internal resistance makes 1.5 ohm in total and the cell therefore supplies 6 A; that leaves 6 V across the parallel combination, so the 6 ohm branch carries 1 A.",
    evidence:
      "A source of emf E and internal resistance r drives a load of resistance R with a current E divided by R + r, and the remaining voltage appears across the load.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-9.4",
    concept: "internal resistance with load",
  },
  {
    key: "xii-mag3-resistor-power-dissipated",
    text: "An ohmic resistor of 4 ohm is connected across a supply of 12 V whose internal resistance is negligible. What power is dissipated in the resistor?",
    options: ["36 W", "48 W", "3 W", "12 W"],
    correctIndex: 0,
    explanation:
      "The power taken by a resistor held at a fixed potential difference is V squared divided by R, that is 144 divided by 4, which is 36 W.",
    evidence:
      "The power dissipated in a resistor carrying a current I with a potential difference V across it is P = VI = I^2 R = V^2 / R.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 93,
    outcome: "PHY-9.5",
    concept: "power dissipation",
  },
  {
    key: "xii-mag3-resistor-pair-power-compare",
    text: "Two identical resistors of 6 ohm are connected across a 12 V supply, first in series and then in parallel. Compare the power dissipated in each resistor in the two arrangements.",
    options: [
      "Each resistor dissipates the same 6 W in both arrangements",
      "Each resistor dissipates four times as much power in the parallel arrangement, 24 W against 6 W",
      "Each resistor dissipates half as much power in the parallel arrangement, 3 W against 6 W",
      "Each resistor dissipates four times as much power in the series arrangement, 24 W against 6 W",
    ],
    correctIndex: 1,
    explanation:
      "In series the pair is 12 ohm and carries 1 A, so each resistor takes 6 W, while in parallel each resistor has the whole 12 V across it and takes 144 / 6, which is 24 W.",
    evidence:
      "A resistor in a parallel combination has the full supply voltage across it, so each branch dissipates more power than in a series arrangement of the same resistors.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-9.5",
    concept: "series parallel power",
  },
  {
    key: "xii-mag3-field-density-dimensions",
    text: "A charge q moving at speed v perpendicular to a uniform magnetic field of flux density B feels a force of magnitude F = qvB. Which set of dimensions matches the flux density B in this relation?",
    options: ["M T^-2 I^-1", "M L T^-2 I^-1", "M T^-2 I^-2", "M L^-1 T^-2 I^-1"],
    correctIndex: 0,
    explanation:
      "Force has the dimensions M L T^-2 while the product qv has the dimensions of charge times velocity, which is I L, so dividing one by the other leaves M T^-2 I^-1 for the flux density.",
    evidence:
      "Magnetic flux density is defined through the force on a moving charge by the relation F = qvB, from which its unit of measurement follows.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-10.1",
    concept: "flux density dimensions",
  },
  {
    key: "xii-mag3-uniform-field-definition",
    text: "A magnetic field is described as uniform when",
    options: [
      "the field is strongest in the middle of the region and weakest near its edges",
      "the flux density keeps the same magnitude and direction at every point of the region",
      "the field lines stay parallel everywhere while their spacing keeps changing",
      "the flux density changes with time in the same way at every point of the region",
    ],
    correctIndex: 1,
    explanation:
      "Uniformity means the flux density keeps both the same magnitude and the same direction across the whole region, which is what allows the field to be replaced by one constant value of B in calculations.",
    evidence:
      "A uniform magnetic field is one in which the magnetic flux density has the same value and the same direction at all points.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 86,
    outcome: "PHY-10.1",
    concept: "uniform field",
  },
  {
    key: "xii-mag3-field-line-properties",
    text: "The magnetic field of a region is often sketched with lines of force. Which statement about these lines is correct?",
    options: [
      "They cross one another wherever two different sources of the field act in the same region",
      "They show the path that a free positive charge follows as it moves through the field",
      "Their spacing is the same everywhere, so the sketch carries no information about field strength",
      "They never cross, and the number of lines crossing an area measures how strong the field is there",
    ],
    correctIndex: 3,
    explanation:
      "Two lines crossing would give two different directions for the flux density at the same point, which cannot happen, and lines drawn close together mark a region where the flux density is larger.",
    evidence:
      "The lines of force of a magnetic field show the direction of the field at any point, and the closeness of the lines indicates the strength of the field.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 85,
    outcome: "PHY-10.1",
    concept: "magnetic field lines",
  },
  {
    key: "xii-mag3-flux-to-area-calculation",
    text: "The flux linked with a flat coil is 4.0 x 10^-4 Wb when the coil stands in a uniform field of flux density 0.80 T with the field normal to it. What is the area of the coil?",
    options: ["3.2 x 10^-4 m^2", "5.0 x 10^-4 m^2", "2.0 x 10^-4 m^2", "6.4 x 10^-4 m^2"],
    correctIndex: 1,
    explanation:
      "With the field normal to the coil the flux is B A, so the area is the flux divided by the flux density, 4.0 x 10^-4 divided by 0.80, which is 5.0 x 10^-4 m^2.",
    evidence:
      "The magnetic flux through an area placed normally in a field is the flux density multiplied by the area of the surface.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 90,
    outcome: "PHY-10.2",
    concept: "area from flux",
  },
  {
    key: "xii-mag3-equal-flux-two-coils",
    text: "Two flat coils of areas 0.10 m^2 and 0.25 m^2 are each placed so that a uniform field passes normally through them, and each coil is found to enclose the same flux of 2.0 x 10^-3 Wb. Compare the flux densities in the two cases.",
    options: [
      "2.0 x 10^-2 T in the smaller coil against 8.0 x 10^-3 T in the larger coil",
      "8.0 x 10^-2 T in the smaller coil against 2.0 x 10^-3 T in the larger coil",
      "The same flux density in both coils, because the enclosed flux is the same",
      "2.0 x 10^-5 T in the smaller coil against 8.0 x 10^-6 T in the larger coil",
    ],
    correctIndex: 0,
    explanation:
      "With equal fluxes the smaller area must carry the larger flux density, 2.0 x 10^-3 / 0.10 = 2.0 x 10^-2 T against 2.0 x 10^-3 / 0.25 = 8.0 x 10^-3 T.",
    evidence:
      "Flux density is the flux per unit area, so equal fluxes through unequal areas give different flux densities.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-10.2",
    concept: "flux density comparison",
  },
  {
    key: "xii-mag3-oblique-entry-helical-path",
    text: "A charged particle enters a uniform magnetic field with its velocity making an angle of 45 degrees with the field. The path it follows is",
    options: [
      "a straight line along the direction of the field",
      "a circle lying in a plane perpendicular to the field",
      "an open curve bending steadily along the field lines",
      "a helix whose axis lies along the field",
    ],
    correctIndex: 3,
    explanation:
      "Only the component of the velocity across the field is turned into circular motion, while the component along the field is unchanged, so the two motions together trace a helix about the field direction.",
    evidence:
      "A charge entering a magnetic field at an angle to the field describes a spiral or helical path, because only the component of its velocity perpendicular to the field produces circular motion.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-10.3",
    concept: "helical path",
  },
  {
    key: "xii-mag3-oblique-entry-steps",
    text: "A charge q of mass m enters a uniform magnetic field of flux density B with velocity v at an angle to the field. Which ordered steps give the radius of the circular part of the resulting helical path?",
    options: [
      "Resolve v into two components, then set the component parallel to the field equal to mv sin theta / qB",
      "Divide q by B, then divide m by v, then multiply the two results",
      "Resolve v into two components, then set the component perpendicular to the field equal to mv cos theta / qB",
      "Multiply m by v, then divide by the sum of q and B",
    ],
    correctIndex: 2,
    explanation:
      "The circular part of the path is produced by the component of the velocity perpendicular to the field, v sin theta, so the radius follows as m(v sin theta) divided by qB; the component along the field carries the charge forward without turning it.",
    evidence:
      "For a charge moving at an angle to a uniform field the radius of the circular part of the path is fixed by the component of the velocity perpendicular to the field.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-10.3",
    concept: "oblique entry method",
  },
  {
    key: "xii-mag3-revolution-time-vs-speed",
    text: "Two electrons enter the same uniform magnetic field at right angles to it but with different speeds. How does the time taken by each electron to complete one full circle compare?",
    options: [
      "The faster electron takes longer, because its much larger radius more than offsets its higher speed",
      "The times are the same, because the radius grows in the same proportion as the speed and cancels out of the time for one turn",
      "The times are the same, because the magnetic field acts only on the slower electron",
      "The faster electron takes less time by exactly the factor by which its speed is greater",
    ],
    correctIndex: 1,
    explanation:
      "One turn takes 2 pi r divided by v, and since r = mv / qB the speed cancels, leaving a time of 2 pi m / qB that depends on the mass, the charge and the field but not on the speed.",
    evidence:
      "A charge moving perpendicular to a uniform field describes a circle of radius mv / qB, so the time for one revolution is 2 pi m / qB.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 84,
    outcome: "PHY-10.3",
    concept: "revolution time",
  },
  {
    key: "xii-mag3-negative-charge-force-direction",
    text: "An electron is moving north in a horizontal plane and enters a region where the magnetic field points vertically downwards. Statement I: the magnetic force on the electron acts towards the west. Statement II: the magnetic force on the electron acts towards the east. Which judgement is right?",
    options: [
      "Statement I is false and Statement II is true",
      "Statement I is true and Statement II is false",
      "Both statements are true",
      "Both statements are false",
    ],
    correctIndex: 0,
    explanation:
      "For a positive charge the force qv x B would point west, and because the charge travelling here is negative the force is reversed and points east, which is the result the three-finger hand rule gives for negative carriers.",
    evidence:
      "The magnetic force on a negative charge acts in the direction opposite to the force on a positive charge moving with the same velocity in the same field.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-10.4",
    concept: "force direction negative charge",
  },
  {
    key: "xii-mag3-oblique-electron-force-value",
    text: "An electron moving at 4.0 x 10^6 m s^-1 at 30 degrees to a uniform magnetic field of 0.30 T, and of charge 1.6 x 10^-19 C, feels a magnetic force of",
    options: ["1.9 x 10^-13 N", "4.8 x 10^-14 N", "9.6 x 10^-14 N", "3.8 x 10^-14 N"],
    correctIndex: 2,
    explanation:
      "A charge entering at an angle theta to the field feels a force qvB sin theta, so 1.6 x 10^-19 x 4.0 x 10^6 x 0.30 x 0.5 gives 9.6 x 10^-14 N.",
    evidence:
      "A charged particle moving at an angle to a uniform magnetic field experiences a force of magnitude qvB sin theta.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-10.4",
    concept: "oblique force value",
  },
];