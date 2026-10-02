import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "idealgas-equation-symbol-meanings",
    text: "In the ideal gas equation PV = nRT, the symbol n represents",
    options: [
      "the number of gas molecules present per unit volume of the container",
      "the amount of gas, expressed in moles",
      "the average kinetic energy of the gas molecules",
      "the number of collisions of the molecules with the container walls per second",
    ],
    correctIndex: 1,
    explanation:
      "In PV = nRT, P is the pressure, V the volume, n the amount of gas in moles, R the gas constant and T the absolute temperature in kelvin, so n is the number of moles of gas present.",
    evidence:
      "The ideal gas equation PV = nRT relates the pressure, volume and absolute temperature of a gas to the number of moles of gas it contains.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-3.7",
    concept: "ideal gas symbols",
  },
  {
    key: "idealgas-gas-constant-units",
    text: "The value R = 0.0821 used in the ideal gas equation carries the units",
    options: ["J mol^-1 K^-1", "L torr mol^-1 K^-1", "L atm mol^-1 K^-1", "m^3 Pa mol^-1 K^-1"],
    correctIndex: 2,
    explanation:
      "The value 0.0821 is the gas constant written for pressure in atmospheres and volume in litres, so its units are L atm mol^-1 K^-1.",
    evidence:
      "The gas constant R has the value 0.0821 L atm mol^-1 K^-1 when pressure is measured in atmospheres and volume in litres.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-3.7",
    concept: "gas constant units",
  },
  {
    key: "idealgas-kelvin-conversion-requirement",
    text: "Why must the temperature in the ideal gas equation always be entered in kelvin?",
    options: [
      "Because R is defined against absolute temperature, so the equation does not hold with a Celsius value",
      "Because kelvin is the only temperature scale accepted in chemistry examinations",
      "Because a Celsius reading becomes negative below 0 degrees C",
      "Because the volume in the equation is measured in kelvin rather than in litres",
    ],
    correctIndex: 0,
    explanation:
      "R = 0.0821 L atm mol^-1 K^-1 is expressed per kelvin, so any Celsius reading must first be converted with T = t + 273 before the equation can be applied.",
    evidence:
      "Only the absolute temperature in kelvin, found by adding 273 to the Celsius reading, can be used in the ideal gas equation.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-3.7",
    concept: "kelvin temperature requirement",
  },
  {
    key: "idealgas-stp-conditions",
    text: "Standard temperature and pressure, as used with the ideal gas equation, are",
    options: ["25 degrees C and 1 atm", "0 degrees C and 1 atm", "0 K and 1 atm", "100 degrees C and 760 torr"],
    correctIndex: 1,
    explanation:
      "STP means 0 degrees C and 1 atm, which is 273 K, and at these conditions one mole of any ideal gas occupies 22.4 L.",
    evidence:
      "At standard temperature and pressure of 0 degrees C and 1 atm, one mole of any ideal gas occupies 22.4 L.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "CHEM-3.7",
    concept: "standard conditions",
  },
  {
    key: "idealgas-moles-from-pressure-volume-temperature",
    text: "An ideal gas sample occupies 11.2 L at 273 K and 1 atm. The number of moles present, from PV = nRT, is",
    options: ["0.25 mol", "1.00 mol", "0.50 mol", "2.00 mol"],
    correctIndex: 2,
    explanation:
      "Rearranging PV = nRT gives n = PV/RT = (1 atm x 11.2 L)/(0.0821 L atm mol^-1 K^-1 x 273 K) = 11.2/22.41 = 0.50 mol.",
    evidence:
      "The number of moles of a gas is found from the ideal gas equation as n = PV/RT with R = 0.0821 L atm mol^-1 K^-1.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-3.7",
    concept: "moles from gas equation",
  },
  {
    key: "idealgas-sequence-volume-from-moles-stp",
    text: "To find the volume occupied by 2.5 mol of an ideal gas at 0 degrees C and 1 atm, which sequence of steps is correct?",
    options: [
      "Multiply the moles by the molar mass, then divide the result by the density of the gas",
      "Convert 0 degrees C to 273 K, then solve V = nRT/P with P = 1 atm",
      "Add 273 to the volume, then divide the result by the gas constant R",
      "Convert the pressure to pascals, then multiply the moles by 22.4 L mol^-1",
    ],
    correctIndex: 1,
    explanation:
      "The equation only accepts kelvin, so 0 degrees C is converted to 273 K first, and then V = nRT/P = 2.5 x 0.0821 x 273/1 = 56.0 L, which is also 2.5 mol x 22.4 L mol^-1.",
    evidence:
      "At 0 degrees C and 1 atm one mole of an ideal gas occupies 22.4 L, so any number of moles occupies that value multiplied by 22.4 L.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "volume calculation sequence",
  },
  {
    key: "idealgas-pressure-from-moles-volume-temperature",
    text: "0.50 mol of an ideal gas is held in a rigid vessel of volume 11.2 L at 546 K. The pressure it exerts, calculated from PV = nRT, is about",
    options: ["0.50 atm", "1.00 atm", "1.50 atm", "2.00 atm"],
    correctIndex: 3,
    explanation:
      "Solving PV = nRT for pressure gives P = nRT/V = (0.50 x 0.0821 x 546)/11.2 = 22.41/11.2 = 2.00 atm.",
    evidence:
      "The pressure of a gas follows from the ideal gas equation as P = nRT/V, with R = 0.0821 L atm mol^-1 K^-1.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "pressure from gas equation",
  },
  {
    key: "idealgas-temperature-from-volume-doubling",
    text: "A fixed amount of ideal gas occupies 8.2 L at 273 K and 1 atm. At what temperature will the same gas occupy 16.4 L if the pressure is kept constant? (R = 0.0821 L atm mol^-1 K^-1)",
    options: ["273 K", "546 K", "409 K", "819 K"],
    correctIndex: 1,
    explanation:
      "With n and P unchanged the ratio V/T stays constant, so T2 = 273 K x 16.4 L/8.2 L = 546 K; the equation agrees, since n = PV/RT = 8.2/22.41 = 0.366 mol gives T = PV/(nR) = 16.4/(0.366 x 0.0821) = 546 K.",
    evidence:
      "The volume of a fixed amount of gas at constant pressure is directly proportional to its absolute temperature.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "temperature from gas equation",
  },
  {
    key: "idealgas-molecules-from-mole-count",
    text: "A 0.500 mol sample of an ideal gas contains how many molecules? (Use Avogadro's number 6.022 x 10^23 mol^-1.)",
    options: ["3.01 x 10^23", "1.204 x 10^23", "6.02 x 10^23", "1.51 x 10^23"],
    correctIndex: 0,
    explanation:
      "The number of molecules is N = n x N_A = 0.500 mol x 6.022 x 10^23 mol^-1 = 3.01 x 10^23 molecules.",
    evidence:
      "The number of particles in a sample is the number of moles multiplied by Avogadro's number, 6.022 x 10^23 per mole.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-3.7",
    concept: "molecules from moles",
  },
  {
    key: "idealgas-mass-of-oxygen-from-moles",
    text: "What mass of oxygen gas, molar mass 32 g mol^-1, corresponds to the 0.50 mol of ideal gas that occupies 11.2 L at 273 K and 1 atm?",
    options: ["8 g", "32 g", "16 g", "64 g"],
    correctIndex: 2,
    explanation:
      "The ideal gas equation fixes the amount at n = PV/RT = 11.2/22.41 = 0.50 mol, and the mass is then m = nM = 0.50 mol x 32 g mol^-1 = 16 g.",
    evidence:
      "The mass of a gas is the number of moles multiplied by its molar mass, since the ideal gas equation fixes how many moles fill a given volume.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "gas mass from moles",
  },
  {
    key: "idealgas-density-derivation-expression",
    text: "Writing the mass of a gas as m = nM and dividing by its volume, then eliminating V with the ideal gas equation, gives the density of an ideal gas as",
    options: ["d = PM/(R T)", "d = M T/(R P)", "d = P R/(M T)", "d = R T/(P M)"],
    correctIndex: 0,
    explanation:
      "Since d = m/V = nM/V and V = nRT/P, substitution gives d = PM/(RT), so the density of an ideal gas rises with pressure and molar mass and falls with absolute temperature.",
    evidence:
      "The density of an ideal gas follows from the ideal gas equation as d = PM/RT, where P is the pressure, M the molar mass, R the gas constant and T the absolute temperature.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "ideal gas density",
  },
  {
    key: "idealgas-density-of-nitrogen-numeric",
    text: "Using d = PM/RT with a molar mass of 28 g mol^-1 for nitrogen, what is the density of nitrogen at 273 K and 1 atm? (R = 0.0821 L atm mol^-1 K^-1)",
    options: ["0.89 g L^-1", "2.24 g L^-1", "22.4 g L^-1", "1.25 g L^-1"],
    correctIndex: 3,
    explanation:
      "Substitution gives d = (1 atm x 28 g mol^-1)/(0.0821 L atm mol^-1 K^-1 x 273 K) = 28/22.41 = 1.25 g L^-1, the same as 28 g in the 22.4 L occupied at standard conditions.",
    evidence:
      "The density of a gas is obtained from d = PM/RT, and at standard conditions 28 g of nitrogen fills the 22.4 L occupied by one mole.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-3.7",
    concept: "gas density calculation",
  },
  {
    key: "idealgas-volume-at-27-degrees",
    text: "What volume does 3.00 mol of an ideal gas occupy at 27 degrees C and 1 atm? (R = 0.0821 L atm mol^-1 K^-1)",
    options: ["22.4 L", "67.2 L", "89.6 L", "73.9 L"],
    correctIndex: 3,
    explanation:
      "The temperature is converted first, 27 + 273 = 300 K, and then V = nRT/P = 3.00 x 0.0821 x 300/1 = 73.9 L.",
    evidence:
      "The volume of a gas at constant pressure is directly proportional to its absolute temperature, so a gas warmer than 0 degrees C occupies more than 22.4 L per mole.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "volume at room temperature",
  },
  {
    key: "idealgas-statement-molar-volume-25-degrees",
    text: "Consider this statement: at 25 degrees C and 1 atm one mole of an ideal gas occupies about 24.4 L, which is more than the 22.4 L occupied at 0 degrees C and 1 atm. The statement is",
    options: [
      "incorrect, because the molar volume at 1 atm is always 22.4 L whatever the temperature",
      "incorrect, because the molar volume of a gas decreases as the temperature rises",
      "correct, because raising the temperature at fixed pressure increases the volume",
      "correct only when the gas happens to be monatomic",
    ],
    correctIndex: 2,
    explanation:
      "At constant pressure the ratio V/T is constant, so the 22.4 L held at 273 K grows to about 24.4 L at 298 K, and this holds for every ideal gas whatever its atomicity.",
    evidence:
      "The molar volume of an ideal gas is 22.4 L at 0 degrees C and 1 atm and is close to 24.4 L at 25 degrees C and 1 atm, because the volume grows with absolute temperature.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-3.7",
    concept: "volume at 25 degrees",
  },
  {
    key: "idealgas-avogadro-equal-moles-equal-volume",
    text: "Two samples of ideal gas, 2.0 mol of nitrogen and 2.0 mol of carbon dioxide, are held at the same temperature and pressure. Their volumes",
    options: [
      "differ, because the nitrogen sample is lighter and so must occupy more space",
      "are equal, because the volume at fixed temperature and pressure is proportional to the number of moles",
      "differ, because carbon dioxide is heavier and so must occupy more space",
      "are equal only when both samples happen to be at standard conditions",
    ],
    correctIndex: 1,
    explanation:
      "Avogadro's law states that at fixed temperature and pressure the volume of a gas is directly proportional to the number of moles, so 2.0 mol of each gas fills the same volume whatever the mass of its molecules.",
    evidence:
      "Avogadro's law states that equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-3.7",
    concept: "avogadro volume law",
  },
  {
    key: "idealgas-half-moles-half-volume",
    text: "At a fixed temperature and pressure, the volume occupied by 0.75 mol of an ideal gas, compared with that occupied by 1.50 mol of the same gas, is",
    options: ["twice as large", "one quarter as large", "half as large", "the same as the original volume"],
    correctIndex: 2,
    explanation:
      "At fixed temperature and pressure the volume is directly proportional to the moles, and 0.75/1.50 = 0.5, so the smaller sample occupies half the volume.",
    evidence:
      "At the same temperature and pressure the volumes of gases are proportional to the number of moles they contain.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-3.7",
    concept: "volume mole proportionality",
  },
  {
    key: "idealgas-real-gas-deviation-conditions",
    text: "Real gases deviate most strongly from ideal behaviour when",
    options: [
      "the pressure is high and the temperature is low",
      "the pressure is low and the temperature is high",
      "both the pressure and the temperature are raised",
      "the gas is chemically unreactive under ordinary conditions",
    ],
    correctIndex: 0,
    explanation:
      "At high pressure the volume of the molecules themselves is no longer negligible, and at low temperature the attractions between molecules become important beside their kinetic energy, so both effects push the gas away from ideal behaviour.",
    evidence:
      "Real gases approach ideal behaviour at low pressure and high temperature, and deviate most at high pressure and low temperature, where molecular volume and intermolecular attractions matter.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "real gas deviation",
  },
  {
    key: "idealgas-model-assumptions",
    text: "Which pair of statements expresses the two assumptions on which the ideal gas model rests?",
    options: [
      "The molecules form weak chemical bonds that release heat whenever they collide",
      "The volume of the molecules themselves is negligible and the attractions between them are negligible",
      "The molecular diameter is large compared with the mean separation and the molecules attract one another strongly",
      "The molecules move in straight lines between collisions and then stick together permanently",
    ],
    correctIndex: 1,
    explanation:
      "The ideal gas model ignores both the volume occupied by the molecules and the attractions between them, treating the gas as point particles moving freely and colliding elastically.",
    evidence:
      "An ideal gas is one in which the volume of the molecules and the attractions between them are both negligible.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "ideal gas assumptions",
  },
  {
    key: "idealgas-combined-law-new-state",
    text: "A sample of ideal gas occupies 5.0 L at 273 K and 2.0 atm. Using the combined gas law, what volume will the same gas occupy at 546 K and 1.0 atm?",
    options: ["10.0 L", "5.0 L", "2.5 L", "20.0 L"],
    correctIndex: 3,
    explanation:
      "The combined gas law gives V2 = P1V1T2/(T1P2) = (2.0 x 5.0 x 546)/(273 x 1.0) = 20.0 L, and the ideal gas equation agrees, since n = 10/22.41 = 0.446 mol gives V2 = 0.446 x 0.0821 x 546/1.0 = 20.0 L.",
    evidence:
      "The combined gas law P1V1/T1 = P2V2/T2 relates the pressure, volume and temperature of a fixed amount of gas in two different states.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-3.7",
    concept: "combined gas law",
  },
  {
    key: "idealgas-pressure-proportional-to-temperature",
    text: "A sealed rigid container holds 3.0 mol of an ideal gas at 300 K. If the absolute temperature is raised to 600 K while the amount of gas and the container volume both stay fixed, the pressure",
    options: [
      "halves, because pressure falls as the temperature rises",
      "stays the same, because a rigid container cannot change pressure",
      "doubles, because PV = nRT makes the pressure directly proportional to the absolute temperature",
      "quadruples, because the square of the absolute temperature enters the equation",
    ],
    correctIndex: 2,
    explanation:
      "With n and V constant the equation reduces to P/T being constant, so P2 = P1 x T2/T1 = P1 x 600/300 = 2P1.",
    evidence:
      "At constant volume the pressure of a fixed amount of gas is directly proportional to its absolute temperature.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "CHEM-3.7",
    concept: "pressure temperature relation",
  },
  {
    key: "idealgas-volume-ratio-273-to-373",
    text: "The same mass of an ideal gas is held at 1 atm in a container whose temperature is raised from 273 K to 373 K. The new volume, compared with the original volume, is",
    options: [
      "0.73 times the original",
      "the same as the original",
      "1.37 times the original",
      "2.00 times the original",
    ],
    correctIndex: 2,
    explanation:
      "At fixed amount and pressure the ratio V/T is constant, so V2/V1 = 373/273 = 1.37, meaning the volume grows by about 37 per cent when the absolute temperature rises by 100 K.",
    evidence:
      "The volume of a fixed amount of gas at constant pressure is directly proportional to its absolute temperature.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-3.7",
    concept: "temperature volume ratio",
  },
  {
    key: "idealgas-statement-celsius-substitution-error",
    text: "A student finds the volume of 0.50 mol of an ideal gas at 25 degrees C and 1 atm by putting T = 25 straight into PV = nRT and reports about 1.0 L. The correct assessment of this working is that",
    options: [
      "the value of R selected was too large for that gas",
      "the temperature should have been entered in kelvin, since 25 + 273 = 298 K gives about 12.2 L",
      "the amount should have been 5.0 mol rather than 0.50 mol",
      "the pressure should have been multiplied by the number of moles",
    ],
    correctIndex: 1,
    explanation:
      "R = 0.0821 L atm mol^-1 K^-1 requires absolute temperature, so the correct substitution is V = 0.50 x 0.0821 x 298/1 = 12.2 L, while the 1.0 L figure comes from 0.50 x 0.0821 x 25.",
    evidence:
      "Because the gas constant R is expressed per kelvin, the volume of 0.50 mol of a gas at 25 degrees C and 1 atm is found with 298 K, giving about 12.2 L.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "kelvin substitution error",
  },
  {
    key: "idealgas-statement-low-pressure-high-temperature-ideal",
    text: "Consider this claim about real gases: a real gas can be expected to behave more ideally at low pressure and at high temperature. The claim is",
    options: [
      "incorrect, because ideal behaviour is approached at high pressure and low temperature",
      "incorrect, because the gas constant R takes a different value in that limit",
      "correct, because the molecular volume and the attractions between molecules both become negligible in that limit",
      "correct, but only for gases that are chemically unreactive",
    ],
    correctIndex: 2,
    explanation:
      "At low pressure the molecules are far apart, so their own volume is a negligible part of the container volume, and at high temperature the kinetic energy overwhelms the attractions between them, which is exactly the ideal gas limit.",
    evidence:
      "Real gases behave most ideally at low pressure and high temperature, and least ideally at high pressure and low temperature.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "ideal behaviour conditions",
  },
  {
    key: "idealgas-two-step-two-state-calculation",
    text: "A 10.0 L sample of an ideal gas at 273 K and 2.0 atm expands until its pressure falls to 1.0 atm while the temperature rises to 546 K. Using R = 0.0821 L atm mol^-1 K^-1 in both steps, the final volume is",
    options: ["20.0 L", "30.0 L", "35.0 L", "40.0 L"],
    correctIndex: 3,
    explanation:
      "First n = P1V1/(R T1) = 2.0 x 10.0/(0.0821 x 273) = 0.892 mol, then V2 = nRT2/P2 = 0.892 x 0.0821 x 546/1.0 = 40.0 L, which matches the combined gas law result P1V1T2/(P2T1) = 40.0 L.",
    evidence:
      "The amount of gas is unchanged between two states, so n = PV/RT is evaluated in the first state and then used to find the volume in the second.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 97,
    outcome: "CHEM-3.7",
    concept: "two state gas calculation",
  },
  {
    key: "idealgas-sequence-temperature-from-moles",
    text: "To find the temperature of an ideal gas sample for which P = 2.0 atm, V = 12.3 L and n = 0.50 mol, with R = 0.0821 L atm mol^-1 K^-1, which sequence of steps is correct?",
    options: [
      "Convert P and V into units that match R, then solve T = PV/(nR)",
      "Convert n into grams with the molar mass, then divide P by V",
      "Multiply P, V and n together, then multiply the product by R",
      "Divide V by n, then multiply the result by the Celsius temperature",
    ],
    correctIndex: 0,
    explanation:
      "The units of R already match P in atm, V in L and n in mol, so the equation is simply rearranged to T = PV/(nR) = (2.0 x 12.3)/(0.50 x 0.0821) = 599 K, which is about 326 degrees C.",
    evidence:
      "The absolute temperature of a gas follows from the ideal gas equation rearranged as T = PV/(nR) with R = 0.0821 L atm mol^-1 K^-1.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "CHEM-3.7",
    concept: "temperature calculation sequence",
  },
];
