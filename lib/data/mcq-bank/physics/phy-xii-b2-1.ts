import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-ohm-current-rate-ampere",
    text: "The strength of an electric current is defined as the rate at which charge passes a section of a conductor. Which pair of expression and unit describes this quantity correctly?",
    options: [
      "I = Q/t, measured in ampere with 1 A equal to one coulomb per second",
      "I = t/Q, measured in ampere with 1 A equal to one second per coulomb",
      "I = Q/t, measured in volt with 1 V equal to one joule per coulomb",
      "I = Q x t, measured in coulomb with 1 C equal to one ampere second",
    ],
    correctIndex: 0,
    explanation:
      "Current is the rate of flow of charge, so I = Q/t, and because charge in coulombs is divided by time in seconds the resulting unit is the ampere, that is one coulomb per second.",
    evidence:
      "The strength of current is the rate of flow of electric charge and its SI unit is the ampere, which is equal to one coulomb per second.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-9.1",
    concept: "current as rate of charge",
  },
  {
    key: "xii-ohm-steady-current-definition",
    text: "Which statement correctly defines a current as being steady?",
    options: [
      "Every charge carrier in the conductor moves with the same velocity at every instant",
      "The total charge held in the conductor stays constant because none enters or leaves it",
      "The rate at which charge crosses any section of the circuit is constant with time",
      "All the charge carriers travel at the same speed as the signal that sets them moving",
    ],
    correctIndex: 2,
    explanation:
      "A current is steady when the rate of flow of charge does not change with time, so the same number of coulombs crosses every section of the circuit in each second.",
    evidence:
      "A current is said to be steady when the rate of flow of charge across every cross-section of the circuit remains constant with time.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-9.1",
    concept: "steady current definition",
  },
  {
    key: "xii-ohm-conventional-versus-electron-flow",
    text: "In a metal conductor carrying a steady current, how do the direction of conventional current and the drift of the free electrons compare?",
    options: [
      "Both conventional current and electron drift run from the positive terminal to the negative terminal",
      "Conventional current runs from the positive to the negative terminal while the electrons drift the other way",
      "Conventional current runs from the negative to the positive terminal while the electrons drift the other way",
      "Conventional current and electron drift run in the same direction but at very different speeds",
    ],
    correctIndex: 1,
    explanation:
      "Conventional current is defined as the direction in which positive charge would move, that is from the positive to the negative terminal, while the mobile carriers in a metal are electrons and drift the opposite way.",
    evidence:
      "Conventional current in a conductor is directed from the positive terminal to the negative terminal, whereas the free electrons that produce it drift in the opposite direction.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-9.1",
    concept: "conventional current direction",
  },
  {
    key: "xii-ohm-drift-speed-versus-signal-speed",
    text: "The drift speed of charge carriers in a long metal wire is very small, yet a lamp at the far end of the circuit glows almost at once. How can both facts hold together?",
    options: [
      "The drift speed is really the greatest speed in the circuit, but the eye cannot follow it",
      "The electrons leave the wire and travel through the surrounding air to reach the lamp",
      "The lamp needs a steady current, so it glows only after electrons have arrived at it",
      "The field disturbance that drives the electrons travels along the circuit at nearly the speed of light, far faster than the drift",
    ],
    correctIndex: 3,
    explanation:
      "The electrons themselves are displaced only very slowly along the wire, but the electric field that pushes them is established along the whole circuit almost at once, so carriers are set in motion everywhere together and the lamp lights with negligible delay.",
    evidence:
      "The drift velocity of the charge carriers is very small compared with the speed at which an electrical signal travels along the circuit.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.1",
    concept: "drift speed and signal speed",
  },
  {
    key: "xii-ohm-charge-in-given-time",
    text: "A steady current of 0.80 A flows through a section of a circuit. What charge passes through that section in 15 s?",
    options: ["12 C", "0.053 C", "18.75 C", "1.2 x 10^2 C"],
    correctIndex: 0,
    explanation:
      "Rearranging I = Q/t gives Q = I t, so the charge is (0.80)(15) = 12 C crossing the section in that time.",
    evidence: "The charge crossing a section in a time t is obtained from I = Q/t as Q = I t.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.1",
    concept: "charge from current and time",
  },
  {
    key: "xii-ohm-conditions-for-flow-and-steadiness",
    text: "Two claims about current in a circuit are made. (I) Charge flows in a conductor only when the circuit is closed and a potential difference is maintained across it. (II) Once the circuit is working as a steady current, the same amount of charge passes in every second. Which combination is correct?",
    options: [
      "Both I and II are incorrect",
      "Only II is correct",
      "Both I and II are correct",
      "Only I is correct",
    ],
    correctIndex: 2,
    explanation:
      "Both claims hold, because charge needs a complete path and a driving potential difference in order to move, and the steady current that results carries an equal charge past any section in each second.",
    evidence:
      "Charge flows through a conductor only when the circuit is closed and a potential difference is applied, and a steady current carries the same charge per second across every section.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.1",
    concept: "conditions for steady flow",
  },
  {
    key: "xii-ohm-ohms-law-relation",
    text: "For a metal conductor held at constant physical conditions, the potential difference across it is directly proportional to the current flowing through it. Which relation states this law?",
    options: ["V = R / I", "V = I R", "V = I / R", "R = V x I"],
    correctIndex: 1,
    explanation:
      "Ohm's law states V = I R, where the resistance of the conductor is the constant of proportionality between the applied potential difference and the resulting current.",
    evidence:
      "According to Ohm's law the potential difference across a conductor is directly proportional to the current through it while its physical conditions are kept constant.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-9.2",
    concept: "statement of ohms law",
  },
  {
    key: "xii-ohm-ohm-unit-definition",
    text: "The resistance of a conductor is measured in ohm. Which statement defines this unit?",
    options: [
      "One ohm is the resistance of a conductor through which 1 A flows while 1 J of energy is delivered",
      "One ohm is the resistance of a conductor that dissipates 1 W of power at a current of 2 A",
      "One ohm is the resistance of a conductor across which a potential difference of 1 V produces a current of 1 mA",
      "One ohm is the resistance of a conductor through which 1 A flows when a potential difference of 1 V is applied across it",
    ],
    correctIndex: 3,
    explanation:
      "Since R = V/I, the ratio of a potential difference of 1 V to the current of 1 A it drives gives a resistance of 1 ohm.",
    evidence:
      "The SI unit of resistance is the ohm, and a conductor has a resistance of one ohm when a potential difference of one volt across it drives a current of one ampere.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-9.2",
    concept: "unit of resistance",
  },
  {
    key: "xii-ohm-resistance-from-voltage-current",
    text: "A metal conductor carries a current of 2.5 A when a potential difference of 15 V is applied across it. What is its resistance?",
    options: ["6.0 ohm", "0.15 ohm", "37.5 ohm", "2.5 ohm"],
    correctIndex: 0,
    explanation:
      "From V = I R the resistance is R = V/I, so R = 15/2.5 = 6.0 ohm for this conductor.",
    evidence: "The resistance of a conductor is calculated from Ohm's law as R = V/I.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-9.2",
    concept: "resistance from ohms law",
  },
  {
    key: "xii-ohm-voltage-for-changed-current",
    text: "A metal conductor carries 3.0 A when 12 V is applied across it and its temperature is unchanged. What potential difference must be applied to send 5.0 A through the same conductor?",
    options: ["9.0 V", "16.7 V", "20 V", "12 V"],
    correctIndex: 2,
    explanation:
      "At unchanged temperature the resistance stays at R = 12/3.0 = 4 ohm, so the new potential difference is V = I R = (5.0)(4) = 20 V.",
    evidence:
      "At constant temperature a metal conductor keeps the same resistance, so a larger current through it requires a proportionally larger potential difference.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-9.2",
    concept: "voltage for new current",
  },
  {
    key: "xii-ohm-current-after-doubling-voltage-tripling-resistance",
    text: "A metal conductor obeys Ohm's law. If the potential difference across it is doubled and its resistance is made three times as large, what current flows in terms of the original current I?",
    options: ["3I", "I", "6I", "2I/3"],
    correctIndex: 3,
    explanation:
      "The new current is I' = V'/R' = 2V/3R = 2I/3, so doubling the potential difference while trebling the resistance leaves the current at two thirds of its original value.",
    evidence:
      "Since V = I R, doubling the potential difference while trebling the resistance reduces the current to two thirds of its original value.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.2",
    concept: "scaling of voltage and resistance",
  },
  {
    key: "xii-ohm-ohmic-versus-non-ohmic-graph",
    text: "A V-I graph for a metal conductor kept at constant temperature is compared with the graph for a semiconducting rod. How do the two differ?",
    options: [
      "The metal gives a straight line through the origin, while the semiconductor curve bends because its resistance changes with the applied potential difference",
      "Both graphs are straight lines through the origin because all conductors obey Ohm's law",
      "The metal curve bends while the semiconductor gives a straight line through the origin",
      "Both graphs bend away from the origin because the resistance of every conductor depends on the current",
    ],
    correctIndex: 0,
    explanation:
      "A metal at constant temperature has a fixed resistance, so V stays proportional to I and the graph is a straight line through the origin, whereas the resistance of a semiconductor changes with the applied conditions and its graph is not a straight line.",
    evidence:
      "Semiconductors and electrolytes show non-ohmic behaviour because their resistance changes with conditions, unlike the straight line through the origin given by an ohmic conductor.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.2",
    concept: "ohmic and non-ohmic conductors",
  },
  {
    key: "xii-ohm-validity-conditions-of-ohms-law",
    text: "A metal conductor is connected to a supply and the current through it is noted as the supply voltage is raised. Two claims follow. (I) As long as the physical state of the conductor is unchanged, the current rises in direct proportion to the potential difference. (II) If the conductor is heated, the direct proportion should continue unchanged. Which combination is correct?",
    options: [
      "Both I and II are correct",
      "Only I is correct",
      "Only II is correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 1,
    explanation:
      "Ohm's law is a statement about a conductor whose physical state is held fixed, so claim I holds, but heating a metal raises its resistance and destroys the direct proportion, so claim II fails.",
    evidence:
      "Ohm's law is valid for a metal conductor only while its physical conditions, in particular its temperature, remain constant.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-9.2",
    concept: "conditions of ohms law",
  },
  {
    key: "xii-ohm-vi-gradient-and-length",
    text: "For an ohmic conductor the graph of potential difference V against current I is a straight line through the origin. What does the gradient of this line represent, and how does it change when the conductor is replaced by one of the same material with twice the length and the same cross-section?",
    options: [
      "The gradient is the resistance and doubles when the length doubles",
      "The gradient is the current and doubles when the length doubles",
      "The gradient is the reciprocal of the resistance and halves when the length doubles",
      "The gradient is the conductance and doubles when the length doubles",
    ],
    correctIndex: 2,
    explanation:
      "The gradient of the V-I line is the ratio V/I, which is the reciprocal of the resistance, and since R = rho L/A a doubling of the length at the same cross-section doubles the resistance and therefore halves the gradient.",
    evidence:
      "The gradient of a potential difference against current graph is the resistance of the conductor, and resistance increases in proportion to length.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-9.2",
    concept: "gradient of vi graph",
  },
  {
    key: "xii-ohm-series-resistance-steps",
    text: "A resistor of 4 ohm and a resistor of 6 ohm are connected in series across a 12 V supply. Which ordered steps give the current drawn from the supply?",
    options: [
      "Multiply the two resistances, then divide the supply voltage by the product",
      "Subtract the smaller resistance from the larger, then divide the supply voltage by the difference",
      "Add the two resistances, then divide the supply voltage by the total",
      "Divide the larger resistance by the smaller, then multiply the supply voltage by the result",
    ],
    correctIndex: 2,
    explanation:
      "Resistances in series add, so the combination is 4 + 6 = 10 ohm, and Ohm's law then gives I = 12/10 = 1.2 A from the supply.",
    evidence:
      "The total resistance of resistors connected in series is the sum of their resistances, and the current is then found from V = I R.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.2",
    concept: "resistances in series",
  },
  {
    key: "xii-ohm-straight-line-through-origin",
    text: "The graph of potential difference against current drawn for a conductor is a straight line passing through the origin. What does this tell you about the conductor?",
    options: [
      "It obeys Ohm's law, because the potential difference is proportional to the current for it",
      "It does not obey Ohm's law, because an ohmic conductor must give a curved graph",
      "It has zero resistance, since a finite current passes at zero potential difference",
      "Its resistance is zero at the origin and rises steadily along the line",
    ],
    correctIndex: 0,
    explanation:
      "A straight line through the origin means the ratio V/I has the same value at every point on the line, which is precisely Ohm's law for a conductor kept at constant temperature.",
    evidence:
      "For a conductor obeying Ohm's law the graph of potential difference against current is a straight line passing through the origin.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-9.2",
    concept: "interpretation of vi graph",
  },
  {
    key: "xii-ohm-stretched-wire-in-parallel",
    text: "A uniform wire of resistance 8 ohm is stretched so that its length doubles while its volume stays the same. The stretched wire is then joined in parallel with a 4 ohm resistor across a 12 V supply. What current does the parallel combination draw from the supply?",
    options: ["3.4 A", "3.0 A", "0.4 A", "1.5 A"],
    correctIndex: 0,
    explanation:
      "Keeping the volume fixed while the length doubles halves the cross-section, so R = rho L/A makes the stretched wire 4 x 8 = 32 ohm; in parallel with 4 ohm this gives (32 x 4)/36 = 3.56 ohm, and the supply current is 12/3.56 = 3.4 A.",
    evidence:
      "A wire stretched to twice its length at constant volume has half the cross-section, so R = rho L/A makes its resistance four times larger.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-9.3",
    concept: "stretched wire resistance",
  },
  {
    key: "xii-ohm-unit-of-resistivity",
    text: "The relation R = rho L/A connects the resistance of a conductor with the resistivity rho of its material. Which SI unit does this relation give for the resistivity?",
    options: [
      "Ohm per metre, because the resistance carries units of ohm and the length those of metre",
      "Ohm square metre, because the cross-sectional area carries units of square metre",
      "Ohm metre, because the resistance carries units of ohm and the ratio L/A carries units of metre",
      "Metre per ohm, because the area is measured in square metre",
    ],
    correctIndex: 2,
    explanation:
      "Rearranging gives rho = R A/L, and since area has units of m^2 and length those of m, the quotient A/L has units of metre, so rho is measured in ohm metre.",
    evidence: "The resistivity of a material has SI units of ohm metre, which follow from rho = R A / L.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.3",
    concept: "unit of resistivity",
  },
  {
    key: "xii-ohm-resistance-length-area-dependence",
    text: "How does the resistance of a uniform conductor made of a given material depend on its length and cross-sectional area?",
    options: [
      "It is directly proportional to the length and inversely proportional to the cross-sectional area",
      "It is directly proportional to both the length and the cross-sectional area",
      "It is inversely proportional to the length and directly proportional to the cross-sectional area",
      "It varies with the length and the area in the same proportion as the resistivity",
    ],
    correctIndex: 0,
    explanation:
      "The relation R = rho L/A places the length in the numerator and the area in the denominator, so a longer conductor offers more resistance while a thicker one offers less.",
    evidence:
      "The resistance of a conductor is given by R = rho L / A, so it increases with length and decreases with cross-sectional area.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-9.3",
    concept: "resistance geometry dependence",
  },
  {
    key: "xii-ohm-resistivity-from-wire-readings",
    text: "A metal wire 5.0 m long with a cross-sectional area of 2.0 x 10^-6 m^2 offers a resistance of 0.85 ohm at constant temperature. What is the resistivity of the metal?",
    options: [
      "3.4 x 10^-7 ohm m",
      "8.5 x 10^-1 ohm m",
      "2.1 x 10^6 ohm m",
      "1.7 x 10^-6 ohm m",
    ],
    correctIndex: 0,
    explanation:
      "From R = rho L/A the resistivity is rho = R A/L = (0.85)(2.0 x 10^-6)/5.0 = 3.4 x 10^-7 ohm m, a value typical of a metal.",
    evidence: "The resistivity of a material is obtained from the resistance of a conductor of known length and cross-section as rho = R A / L.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.3",
    concept: "resistivity calculation",
  },
  {
    key: "xii-ohm-metal-versus-semiconductor-temperature",
    text: "How does the resistivity of a metal compare with that of a semiconductor as the temperature of each of them rises?",
    options: [
      "It falls for the metal and also falls for the semiconductor, so the two behave alike",
      "It rises for the metal and falls for the semiconductor",
      "It falls for the metal and rises for the semiconductor",
      "It stays constant for the metal and rises for the semiconductor",
    ],
    correctIndex: 1,
    explanation:
      "In a metal the lattice ions vibrate more strongly as it heats, so the free electrons are obstructed more and the resistivity rises, while in a semiconductor the number of charge carriers increases sharply and its resistivity falls.",
    evidence:
      "The resistivity of a metal increases with temperature whereas the resistivity of a semiconductor decreases, so the semiconductor has a negative temperature coefficient.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.3",
    concept: "temperature coefficient by material",
  },
  {
    key: "xii-ohm-halved-length-doubled-area",
    text: "A uniform metal wire has a resistance of 12 ohm at constant temperature. If its length is halved and its cross-sectional area is doubled with no change of material, what resistance does it offer?",
    options: ["1.5 ohm", "6 ohm", "3 ohm", "24 ohm"],
    correctIndex: 2,
    explanation:
      "Since R = rho L/A, halving the length halves the resistance and doubling the area halves it once more, leaving R/4 = 12/4 = 3 ohm.",
    evidence: "Halving the length and doubling the cross-sectional area of a wire reduces its resistance to one quarter of the original value.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.3",
    concept: "resistance scaling by geometry",
  },
  {
    key: "xii-ohm-why-filament-glows",
    text: "The filament of a lamp glows while a current passes through it. Which property of the filament accounts for this?",
    options: [
      "The resistivity of the filament metal rises with temperature, so the filament becomes hot enough to glow",
      "The resistivity of the filament metal falls with temperature, so the filament becomes hot enough to glow",
      "The length of the filament increases as it heats, so the filament becomes hot enough to glow",
      "The cross-sectional area of the filament falls as it heats, so the filament becomes hot enough to glow",
    ],
    correctIndex: 0,
    explanation:
      "A current heats the filament, and because the resistivity of a metal rises with temperature its resistance and the power dissipated per second grow until the filament is hot enough to glow.",
    evidence:
      "The resistivity of the metal of a lamp filament rises with temperature, so the filament becomes hot and glows while carrying a current.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.3",
    concept: "glowing filament",
  },
  {
    key: "xii-ohm-cold-filament-heating-sequence",
    text: "A lamp is switched on from cold and its filament heats up while the applied potential difference stays the same. Which sequence of events follows for the filament?",
    options: [
      "Resistivity falls, so the resistance falls, so the current rises and the filament glows more brightly",
      "Resistivity rises, so the resistance rises, so the current falls, until the filament settles at a steady temperature",
      "Resistivity rises, so the resistance rises, so the current rises and the filament glows more brightly",
      "Resistivity falls, so the resistance falls, so the current falls, until the filament settles at a steady temperature",
    ],
    correctIndex: 1,
    explanation:
      "Heating a metal raises its resistivity, so with V fixed the current falls as the resistance rises, and this continues until the filament loses heat as fast as it gains it and settles at a steady temperature.",
    evidence:
      "Since the resistance of a metal rises with its temperature, a filament carrying a current at a fixed potential difference draws a smaller current as it heats up.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.3",
    concept: "filament heating chain",
  },
  {
    key: "xii-ohm-resistivity-claim-review",
    text: "Three claims about resistivity are examined. (I) The resistivity of a metal falls when the metal is heated. (II) Insulators such as rubber and glass have a very high resistivity and so carry almost no current. (III) Since the resistivity of a metal rises with temperature, a lamp filament is at lower resistance when cold and the current surge at switch-on can be large. Which combination is correct?",
    options: [
      "Only I and III are correct",
      "Only I is correct",
      "Only II is correct",
      "Only II and III are correct",
    ],
    correctIndex: 3,
    explanation:
      "Claim I contradicts the positive temperature coefficient of metals and fails, while claim II is true because insulators have a very high resistivity, and claim III follows from the same positive coefficient of the filament metal.",
    evidence:
      "Metals have a positive temperature coefficient so their resistivity rises with temperature, whereas insulators such as rubber and glass have a very high resistivity.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-9.3",
    concept: "resistivity claims review",
  },
];