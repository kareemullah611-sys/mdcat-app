import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "firstlaw-statement-sign-convention",
    text: "In the sign convention in which heat absorbed and work done by a system are both taken as positive, the first law of thermodynamics reads",
    options: [
      "delta Q = delta U + delta W",
      "delta Q = delta U - delta W",
      "delta W = delta U + delta Q",
      "delta U = delta Q - delta W",
    ],
    correctIndex: 0,
    explanation:
      "The heat supplied to a system equals the change in its internal energy plus the work it does, and with both counted as positive this is delta Q = delta U + delta W, which is conservation of energy applied to a thermal system.",
    evidence:
      "The first law of thermodynamics states that the heat supplied to a system equals the change in its internal energy plus the work done by it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-7.4",
    concept: "first law equation",
  },
  {
    key: "firstlaw-joule-energy-unit",
    text: "The SI unit of heat, and also the unit in which mechanical work is measured, is the",
    options: ["newton", "joule", "watt", "calorie"],
    correctIndex: 1,
    explanation:
      "Heat and work are both forms of energy transfer, so both are measured in joules, the SI unit of energy, one joule being the work done by a force of one newton moving its point of application through one metre.",
    evidence:
      "Heat and work are both measured in joules, the SI unit of energy, because both are forms of energy transfer.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "PHY-7.4",
    concept: "joule as energy unit",
  },
  {
    key: "firstlaw-internal-energy-kinetic-potential",
    text: "The internal energy of a gas is best described as",
    options: [
      "the total kinetic energy of its molecules alone, with all interactions ignored",
      "the energy that the gas has already spent in the work it has done",
      "the sum of the kinetic and potential energies of all its molecules",
      "the energy stored in the walls of the container that holds the gas",
    ],
    correctIndex: 2,
    explanation:
      "Internal energy belongs to the molecules of the gas, and it is made up of the kinetic energy of their random motion together with the potential energy of the forces acting between them.",
    evidence:
      "The internal energy of a system is the sum of the kinetic and potential energies of the molecules that constitute it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 91,
    outcome: "PHY-7.4",
    concept: "internal energy meaning",
  },
  {
    key: "firstlaw-ideal-gas-temperature-dependence",
    text: "For an ideal gas the internal energy depends only on",
    options: [
      "the pressure applied to it",
      "the volume it happens to occupy",
      "the amount of work it has already done",
      "the temperature of the gas",
    ],
    correctIndex: 3,
    explanation:
      "For an ideal gas the internal energy is a function of temperature alone, so two states at the same temperature have the same internal energy however differently their pressures and volumes may be set.",
    evidence:
      "For an ideal gas the internal energy depends only on its temperature and not on its pressure or volume.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-7.4",
    concept: "internal energy temperature",
  },
  {
    key: "firstlaw-expansion-work-pdv",
    text: "When a gas expands so that it pushes against a constant pressure p while its volume changes by delta V, the work done by the gas is",
    options: [
      "p multiplied by delta V",
      "p divided by delta V",
      "delta V divided by p",
      "p multiplied by itself and by delta V",
    ],
    correctIndex: 0,
    explanation:
      "The work done by an expanding gas is the product of the pressure and the change in volume, W = P.dV, so a larger volume change at the same pressure means proportionally more work.",
    evidence:
      "The work done by a gas during expansion is the product of the pressure and the change in volume, W = P.dV.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-7.4",
    concept: "expansion work form",
  },
  {
    key: "firstlaw-constant-volume-zero-work",
    text: "A gas is heated inside a rigid vessel of fixed volume, so that its volume does not change at all. The work done by the gas during this heating is",
    options: [
      "positive, because the gas always pushes outward",
      "negative, because the vessel prevents the gas from expanding",
      "zero, because the change in volume is zero",
      "positive, because the pressure rises during the heating",
    ],
    correctIndex: 2,
    explanation:
      "The work is W = P.dV, and in a rigid vessel the change in volume is zero whatever happens to the pressure, so the gas does no work however much its temperature rises.",
    evidence:
      "At constant volume the change in volume is zero, so the work done by the gas, P.dV, is also zero.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-7.4",
    concept: "constant volume work",
  },
  {
    key: "firstlaw-isothermal-statements",
    text: "Two statements about an ideal gas expanding isothermally are considered: the temperature of the gas stays constant, and the internal energy of the gas also stays constant. Which option follows correctly from the two statements?",
    options: [
      "The second statement is wrong, because expansion always cools a gas",
      "The first statement is wrong, because expansion always heats a gas",
      "Both statements are wrong, because a gas cannot expand at a fixed temperature",
      "Both statements are right, because the internal energy of an ideal gas follows temperature",
    ],
    correctIndex: 3,
    explanation:
      "Since the internal energy of an ideal gas depends only on temperature, an isothermal expansion gives delta U = 0, and the first law then leaves delta Q = W, so the whole of the heat supplied becomes the work of expansion.",
    evidence:
      "In an isothermal change the temperature is constant, so the internal energy of an ideal gas does not change and the heat supplied equals the work done.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-7.4",
    concept: "isothermal internal energy",
  },
  {
    key: "firstlaw-adiabatic-compression-statements",
    text: "Compressed so quickly that no heat at all can pass between it and its surroundings, a gas shows that the work done on it and the change in its internal energy are",
    options: [
      "both zero, because no heat is involved",
      "equal in magnitude, and the internal energy rises",
      "equal in magnitude, and the internal energy falls",
      "equal in magnitude, and the internal energy stays the same",
    ],
    correctIndex: 1,
    explanation:
      "With delta Q = 0 the first law gives delta W = -delta U, so the work done on the gas reappears as a rise in its internal energy, which is why a quick compression leaves the gas hotter.",
    evidence:
      "In an adiabatic process no heat is exchanged, so the work done on the gas equals the change in its internal energy.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-7.4",
    concept: "adiabatic work and energy",
  },
  {
    key: "firstlaw-isobaric-isochoric-work-compare",
    text: "The same quantity of gas is taken through one temperature rise twice, once at constant pressure and once at constant volume. The work done by the gas in the two cases compares as",
    options: [
      "equal, because the temperature rise is the same both times",
      "greater at constant volume, because the pressure there is higher",
      "greater at constant pressure, because the volume increases there",
      "zero in both cases, because the temperature rise is the same",
    ],
    correctIndex: 2,
    explanation:
      "The work is P.dV, so only the constant-pressure path, in which the gas expands as it warms, has any change of volume at all and therefore does work, while the constant-volume path does none.",
    evidence:
      "Work is done by a gas only when its volume changes, so an isobaric expansion does work and an isochoric change does none.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-7.4",
    concept: "path work comparison",
  },
  {
    key: "firstlaw-heat-work-equivalence",
    text: "A fixed mass of gas absorbs a quantity of heat that would be enough to raise the temperature of a small mass of water through many degrees, yet the temperature of the gas itself stays unchanged. The correct reading of this is that",
    options: [
      "the heat has not vanished but has been converted into work done by the gas",
      "the heat was lost to the surroundings while the gas expanded",
      "the internal energy of the gas fell by the same amount that the work rose",
      "the gas has kept the heat in store as extra internal energy",
    ],
    correctIndex: 0,
    explanation:
      "Heat and work are simply two forms of energy transfer, and with delta U = 0 the first law turns the whole of the heat absorbed into the work of expansion, so no energy is created or destroyed.",
    evidence:
      "Heat and work are equivalent as forms of energy transfer, and the first law states that neither is created nor destroyed.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-7.4",
    concept: "heat work equivalence",
  },
  {
    key: "firstlaw-compressed-heat-rejected-signs",
    text: "A gas is compressed by an external agent while at the same time it releases heat to its surroundings. In the convention where heat absorbed and work done by the gas are both positive, the two terms of the first law for this change are",
    options: [
      "the heat term positive and the work term positive, so the internal energy must rise",
      "the heat term positive and the work term negative, so the two effects oppose each other",
      "the heat term negative and the work term positive, so the two effects oppose each other",
      "the heat term negative and the work term negative, so the internal energy must fall",
    ],
    correctIndex: 3,
    explanation:
      "Heat leaves the gas, so delta Q is negative, and the gas is being squeezed instead of expanding, so the work it does, delta W = P.dV, is negative as well; two negative terms make delta U negative too.",
    evidence:
      "With heat absorbed and work done by the system taken as positive, heat rejected and compression both give negative terms in the first law.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-7.4",
    concept: "sign convention terms",
  },
  {
    key: "firstlaw-isothermal-figures-check",
    text: "An ideal gas absorbs 250 J of heat while expanding isothermally against a constant pressure of 500 Pa, and its volume increases by 0.3 m^3. These figures",
    options: [
      "are consistent, because the extra heat simply disappears inside the gas",
      "are consistent, because the extra heat must be stored in the pressure",
      "are inconsistent, because an isothermal change of this size needs only 150 J of heat",
      "are inconsistent, because isothermal work is always greater than the heat supplied",
    ],
    correctIndex: 2,
    explanation:
      "The work done is P.dV = 500 x 0.3 = 150 J and delta U = 0 for an isothermal change of an ideal gas, so the first law requires delta Q = 150 J, and the stated 250 J cannot be reconciled with the other two figures.",
    evidence:
      "In an isothermal change delta U is zero, so the heat supplied must equal the work done by the gas, which is P.dV.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 89,
    outcome: "PHY-7.4",
    concept: "isothermal figure check",
  },
  {
    key: "firstlaw-adiabatic-change-order",
    text: "While an ideal gas is being compressed adiabatically, the quantities involved change in the order",
    options: [
      "work done rises, temperature falls, and then heat enters the gas",
      "work done falls, temperature stays fixed, and then the volume increases",
      "work done on the gas rises, its temperature rises, and no heat is exchanged",
      "internal energy falls, temperature falls, and then heat leaves the gas",
    ],
    correctIndex: 2,
    explanation:
      "No heat enters or leaves in an adiabatic process, so the work done on the gas is taken out of its internal energy, and that loss of internal energy at constant particle number shows up as a rise in temperature.",
    evidence:
      "In an adiabatic process no heat is exchanged, and the work done on the gas raises its internal energy and temperature.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-7.4",
    concept: "adiabatic change order",
  },
  {
    key: "firstlaw-isobaric-heating-order",
    text: "Heated at constant pressure so that it expands, a gas shares the heat supplied out in a definite order. The correct order is",
    options: [
      "work of expansion, then rise in internal energy, then heat supplied",
      "rise in internal energy, then work of expansion, then heat supplied",
      "heat supplied, then work of expansion, then fall in internal energy",
      "heat supplied, then rise in internal energy, then work of expansion",
    ],
    correctIndex: 3,
    explanation:
      "The relation delta Q = delta U + delta W shows the sharing: part of the heat supplied raises the internal energy of the gas and the remainder is the work p delta V done as it expands, which is why constant-pressure heating needs more heat than constant-volume heating.",
    evidence:
      "In an isobaric process the heat supplied both raises the internal energy of the gas and provides the work of expansion.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-7.4",
    concept: "isobaric heat partition",
  },
  {
    key: "firstlaw-heat-capacity-statements",
    text: "Consider two statements about the heat capacity of a body: the heat capacity is the heat needed to raise the body through one kelvin, and the specific heat capacity is that same quantity expressed per unit mass. Which option follows correctly?",
    options: [
      "Both statements are wrong, because a body never needs heat in order to warm up",
      "The second statement is wrong, because specific heat capacity also depends on the mass",
      "The first statement is wrong, because the heat needed must also depend on the mass",
      "Both statements are right, because specific heat capacity is a per unit mass quantity",
    ],
    correctIndex: 3,
    explanation:
      "Raising a body through one kelvin needs Q = mc delta T, which becomes C = mc, so the heat capacity is the product of mass and specific heat capacity and dividing by the mass leaves a quantity fixed by the material alone.",
    evidence:
      "The heat capacity of a body is the product of its mass and its specific heat capacity, C = mc.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-7.4",
    concept: "heat capacity definitions",
  },
  {
    key: "firstlaw-heat-work-internal-energy-split",
    text: "A gas absorbs 900 J of heat while expanding and doing 300 J of work against the surroundings. The change in the internal energy of the gas is",
    options: ["600 J", "1200 J", "300 J", "900 J"],
    correctIndex: 0,
    explanation:
      "From delta Q = delta U + delta W, delta U = delta Q - delta W = 900 - 300 = 600 J, so 300 J of the heat went into the work of expansion and the remaining 600 J raised the internal energy.",
    evidence:
      "The first law gives the change in internal energy as the heat supplied minus the work done by the system.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-7.4",
    concept: "first law arithmetic",
  },
  {
    key: "firstlaw-heat-supplied-from-work",
    text: "A system does 400 J of work on its surroundings while its internal energy falls by 250 J. The heat supplied to the system over this change is",
    options: ["650 J", "250 J", "150 J", "400 J"],
    correctIndex: 2,
    explanation:
      "Rearranging gives delta Q = delta U + delta W = -250 + 400 = 150 J, so heat must still be fed in even though the internal energy falls, because the work done is the larger of the two terms.",
    evidence:
      "Applying the first law, the heat supplied equals the change in internal energy plus the work done by the system.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-7.4",
    concept: "heat supplied from work",
  },
  {
    key: "firstlaw-cycle-work-from-energy",
    text: "A gas absorbs 700 J of heat while doing 300 J of work, and in a later part of the same cycle it releases 500 J of heat. Over that later part of the cycle the work done is",
    options: [
      "900 J of work done on the gas",
      "100 J of work done on the gas",
      "100 J of work done by the gas",
      "300 J of work done by the gas",
    ],
    correctIndex: 1,
    explanation:
      "Over the complete cycle the internal energy returns to its starting value, so net heat equals net work at 700 - 500 = 200 J; the first part already did 300 J of work, so the later part must do 200 - 300 = -100 J, that is 100 J of work done on the gas.",
    evidence:
      "Over a complete cycle the change in internal energy is zero, so the net heat absorbed equals the net work done by the system.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 91,
    outcome: "PHY-7.4",
    concept: "cycle work from energy",
  },
  {
    key: "firstlaw-isothermal-work-heat-value",
    text: "A gas expands against a constant pressure of 200 Pa while its volume increases by 0.5 m^3, and the expansion is isothermal. The heat that must be supplied to the gas is",
    options: ["0 J", "50 J", "200 J", "100 J"],
    correctIndex: 3,
    explanation:
      "The work done is P.dV = 200 x 0.5 = 100 J, and since the internal energy of an ideal gas does not change at constant temperature, delta Q = delta U + delta W = 0 + 100 = 100 J.",
    evidence:
      "In an isothermal change delta U is zero, so the heat supplied equals the work done by the gas, which is P.dV.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-7.4",
    concept: "isothermal heat from work",
  },
  {
    key: "firstlaw-heat-capacity-calculation",
    text: "The heat capacity of a metal block is 800 J K^-1 and the mass of the block is 4 kg. The heat needed to raise its temperature by 15 K is",
    options: ["200 J", "12000 J", "3200 J", "48000 J"],
    correctIndex: 1,
    explanation:
      "The specific heat capacity is c = C/m = 800 / 4 = 200 J kg^-1 K^-1, so from Q = mc delta T the heat is 4 x 200 x 15 = 12000 J, which agrees with the heat capacity form C delta T = 800 x 15 = 12000 J.",
    evidence:
      "The heat needed to change the temperature of a body is Q = mc delta T, where c is the specific heat capacity of the material.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-7.4",
    concept: "heat capacity calculation",
  },
];
