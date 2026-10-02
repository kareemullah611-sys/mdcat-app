import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-ac-resistor-current-in-phase",
    text: "When an alternating voltage is applied across a pure resistor, how does the current in the circuit behave?",
    options: [
      "It lags the applied voltage by a quarter of a cycle",
      "It is in phase with the applied voltage",
      "It leads the applied voltage by a quarter of a cycle",
      "It reaches its peak value twice in every cycle",
    ],
    correctIndex: 1,
    explanation:
      "A resistor offers the same opposition to every instantaneous value of the current, so the current rises and falls in step with the applied voltage and the two are in phase.",
    evidence:
      "In a purely resistive circuit the alternating current and the applied voltage are in phase with each other.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-12.2",
    concept: "current and voltage phase",
  },
  {
    key: "xii-ac-resistor-no-back-emf",
    text: "A learner asks why no back emf appears in a circuit that carries alternating current through a pure resistor. What is the correct reason?",
    options: [
      "The resistance of the conductor rises with frequency, so it absorbs the induced emf",
      "The current in a resistor is too small to produce an induced emf",
      "A back emf is present but is exactly cancelled by the friction of the charge carriers",
      "No flux links the circuit, so there is no change of flux and no induced emf opposing the current",
    ],
    correctIndex: 3,
    explanation:
      "A back emf requires a changing flux linked with the circuit, and in a plain resistive circuit no magnetic flux is linked at all, so nothing opposes the applied voltage.",
    evidence:
      "In a purely resistive a.c. circuit no induced back emf is produced, since the flux linked with the circuit does not change.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.2",
    concept: "back emf in resistor",
  },
  {
    key: "xii-ac-resistor-average-power",
    text: "Average power is taken over one complete cycle of an alternating current. How does the average power delivered to a pure resistor compare with the power in the corresponding steady direct current?",
    options: [
      "It is smaller, because the current is zero at the instants when the voltage is zero",
      "It is larger, because the current adds to itself at every instant of the cycle",
      "It is zero, because the current reverses its direction during the cycle",
      "It is unchanged, since the current never falls to zero and keeps flowing throughout the cycle",
    ],
    correctIndex: 3,
    explanation:
      "The reversal of the current does not cut the power, because current and voltage reverse together so that the product of the two is never negative, and the average power over the cycle is fully delivered to the resistor.",
    evidence:
      "The average power consumed in a pure resistance is not reduced over a cycle, because the current and the voltage are in phase.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.2",
    concept: "average power in resistor",
  },
  {
    key: "xii-ac-rms-current-from-peak",
    text: "The peak current in a sinusoidal alternating circuit is 12 A. What is the root mean square value of the current?",
    options: ["8.5 A", "6.0 A", "17.0 A", "3.5 A"],
    correctIndex: 0,
    explanation:
      "The rms value is the peak value divided by the square root of 2, so 12 / 1.414 gives about 8.5 A, the value that produces the same heating effect as a direct current.",
    evidence:
      "The rms value of a sinusoidal alternating quantity equals its maximum or peak value multiplied by 0.707.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-12.2",
    concept: "rms value of current",
  },
  {
    key: "xii-ac-inductor-current-lags",
    text: "An alternating voltage is applied to a coil of negligible resistance. By how much does the current in the coil lag the applied voltage?",
    options: [
      "It does not lag at all, and the two are in phase",
      "It lags the voltage by a quarter of a cycle, that is 90 degrees",
      "It lags the voltage by half a cycle, that is 180 degrees",
      "It lags the voltage by a tenth of a cycle, that is 36 degrees",
    ],
    correctIndex: 1,
    explanation:
      "The back emf induced in a coil opposes every change of the current, so the current can only build up after the voltage has already risen, and it therefore falls behind the voltage by a quarter cycle.",
    evidence:
      "In a purely inductive circuit the current lags behind the applied voltage by a phase angle of pi/2, that is 90 degrees.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-12.2",
    concept: "current lag in inductor",
  },
  {
    key: "xii-ac-inductive-reactance-value",
    text: "A coil of inductance 0.20 H is connected to a supply of frequency 50 Hz. Taking pi as 3.14, what is the inductive reactance of the coil?",
    options: ["62.8 ohm", "6.28 ohm", "314 ohm", "628 ohm"],
    correctIndex: 0,
    explanation:
      "The inductive reactance is omega L, with omega equal to 2 pi f, that is 2 x 3.14 x 50 = 314 s^-1, so X = 314 x 0.20 = 62.8 ohm.",
    evidence:
      "The inductive reactance of a coil is given by X = 2 pi f L, so it grows with both frequency and inductance.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.2",
    concept: "inductive reactance value",
  },
  {
    key: "xii-ac-inductor-frequency-doubles-reactance",
    text: "A coil of fixed inductance is connected first to a 50 Hz supply and then, with nothing else changed, to a 100 Hz supply of the same voltage. How do the currents compare?",
    options: [
      "The current at 100 Hz is twice the current at 50 Hz",
      "The current is the same at both frequencies, because the inductance has not changed",
      "The current at 100 Hz is half the current at 50 Hz",
      "The current at 100 Hz is one quarter of the current at 50 Hz",
    ],
    correctIndex: 2,
    explanation:
      "Doubling the frequency doubles omega and therefore doubles the reactance X = omega L, and with the voltage unchanged the current, which is the voltage divided by the reactance, is halved.",
    evidence:
      "Since the inductive reactance is proportional to frequency, raising the frequency raises the opposition offered by the coil.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.2",
    concept: "frequency and inductive reactance",
  },
  {
    key: "xii-ac-inductor-zero-average-power",
    text: "A pure coil, with no resistance in it, is connected to an alternating supply. What is the average power consumed by the coil over one complete cycle?",
    options: [
      "Zero, because the current lags the voltage by 90 degrees",
      "Zero, because the current falls to zero twice in every cycle",
      "Equal to the product of the rms voltage and the rms current",
      "Twice the product of the rms voltage and the rms current",
    ],
    correctIndex: 0,
    explanation:
      "With a lag of 90 degrees the current is positive while the voltage is negative and the reverse, so the positive and negative halves of the power cancel exactly and the average power over a cycle is zero.",
    evidence:
      "The average power consumed in a pure inductance over a complete cycle is zero, since the phase difference between current and voltage is 90 degrees.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-12.2",
    concept: "average power in inductor",
  },
  {
    key: "xii-ac-capacitor-current-leads",
    text: "Consider an alternating supply connected to a capacitor alone. By how much does the current in the capacitor lead the applied voltage?",
    options: [
      "It does not lead, and the two are in phase",
      "It leads the voltage by half a cycle, that is 180 degrees",
      "It leads the voltage by a quarter of a cycle, that is 90 degrees",
      "It leads the voltage by a tenth of a cycle, that is 36 degrees",
    ],
    correctIndex: 2,
    explanation:
      "The charge accumulating on the plates gives rise to a back emf that opposes the change producing it, so the current is already at its greatest while the voltage is still rising, and it leads by a quarter cycle.",
    evidence:
      "In a purely capacitive circuit the current leads the applied voltage by a phase angle of pi/2, that is 90 degrees.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-12.2",
    concept: "current lead in capacitor",
  },
  {
    key: "xii-ac-capacitive-reactance-value",
    text: "A capacitor of capacitance 20 microfarad is used in a circuit supplied at a frequency of 50 Hz. Taking pi as 3.14, what is the capacitive reactance of the capacitor?",
    options: ["159 ohm", "15.9 ohm", "1.59 ohm", "1.59 x 10^3 ohm"],
    correctIndex: 0,
    explanation:
      "The capacitive reactance is 1 divided by omega C, with omega = 2 x 3.14 x 50 = 314 s^-1 and C = 20 x 10^-6 F, so X = 1 / (314 x 20 x 10^-6) = 1 / 6.28 x 10^-3 = 159 ohm.",
    evidence:
      "The capacitive reactance of a capacitor is given by X = 1 over 2 pi f C, so it falls as the frequency rises.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.2",
    concept: "capacitive reactance value",
  },
  {
    key: "xii-ac-halved-capacitance-current",
    text: "A 10 microfarad capacitor takes a current of 0.32 A from a 100 V supply at a frequency of 50 Hz. If it is replaced by a capacitor of 5 microfarad on the same supply at the same frequency, what current does it take?",
    options: ["0.32 A", "0.64 A", "0.16 A", "1.28 A"],
    correctIndex: 2,
    explanation:
      "At fixed voltage and frequency the reactance is inversely proportional to capacitance, so halving the capacitance doubles the reactance from about 318 ohm to about 637 ohm and the current falls from 0.32 A to 0.16 A.",
    evidence:
      "For a given voltage and frequency the current through a capacitor is directly proportional to its capacitance.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-12.2",
    concept: "capacitance and current",
  },
  {
    key: "xii-ac-capacitor-two-statements",
    text: "Two statements about a capacitor carrying alternating current are given. (I) The current leads the applied voltage by a quarter of a cycle. (II) The average power consumed over a complete cycle is zero. Which combination is correct?",
    options: [
      "Only I is correct",
      "Only II is correct",
      "Both I and II are correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "Both statements are correct, since the leading current of a capacitor is 90 degrees ahead of the voltage, and a phase difference of 90 degrees makes the positive and negative halves of the power cancel over a cycle.",
    evidence:
      "In a capacitor the current leads the voltage by 90 degrees, so the average power over a complete cycle is zero.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.2",
    concept: "capacitor phase and power",
  },
  {
    key: "xii-ac-rlc-phase-angle-calculation",
    text: "A series circuit has a resistance of 30 ohm, an inductive reactance of 50 ohm and a capacitive reactance of 10 ohm. What is the phase angle between the applied voltage and the current in the circuit?",
    options: ["About 37 degrees", "About 63 degrees", "About 90 degrees", "About 53 degrees"],
    correctIndex: 3,
    explanation:
      "The phase angle follows tan phi = (X_L - X_C)/R = (50 - 10)/30 = 4/3, and the angle whose tangent is 4/3 is about 53 degrees.",
    evidence:
      "For a series RLC circuit the phase angle between voltage and current is given by tan phi = (X_L - X_C) divided by R.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-12.2",
    concept: "rlc phase angle",
  },
  {
    key: "xii-ac-series-resonance-current",
    text: "In a series RLC circuit connected to a supply of fixed voltage, the frequency is slowly raised until the inductive and capacitive reactances are equal. What happens to the current and to the phase angle?",
    options: [
      "The current falls to its smallest value and the phase angle becomes 90 degrees",
      "The current stays unchanged and the phase angle becomes zero",
      "The current rises to its maximum value and the phase angle becomes zero",
      "The current rises to its maximum value and the phase angle becomes 90 degrees",
    ],
    correctIndex: 2,
    explanation:
      "At resonance the inductive and capacitive reactances cancel, so the impedance is no greater than the resistance alone and is the least it can be; with fixed voltage the current is greatest, and the circuit behaves like a pure resistance, giving a phase angle of zero.",
    evidence:
      "In a series RLC circuit the current is maximum and the phase angle zero when the inductive and capacitive reactances are equal.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.2",
    concept: "series circuit resonance",
  },
  {
    key: "xii-ac-above-resonance-behaviour",
    text: "A series RLC circuit is already at resonance on a supply of fixed voltage. The frequency is then raised above the resonant value. In what order do the changes occur?",
    options: [
      "The reactance falls, the current falls, and the circuit becomes capacitive",
      "The reactance rises, the current rises, and the circuit becomes capacitive",
      "The reactance falls, the current rises, and the circuit becomes inductive",
      "The reactance rises, the current falls, and the circuit becomes inductive",
    ],
    correctIndex: 3,
    explanation:
      "Above resonance the inductive reactance outgrows the capacitive reactance, so the net reactance and with it the impedance rise, the current falls, and the current now lags the voltage, which is the behaviour of an inductive circuit.",
    evidence:
      "Above the resonant frequency the inductive reactance dominates in a series RLC circuit, so the current lags the applied voltage.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-12.2",
    concept: "behaviour above resonance",
  },
  {
    key: "xii-ac-radio-wave-longest-wavelength",
    text: "The electromagnetic spectrum is arranged from radio waves up to gamma rays. Which region of the spectrum has the longest wavelength and the lowest frequency?",
    options: ["Gamma rays", "X-rays", "Radio waves", "Ultraviolet rays"],
    correctIndex: 2,
    explanation:
      "The spectrum runs from the longest wavelength and lowest frequency at one end to the shortest wavelength and highest frequency at the other, so the radio waves, which are used for communication, sit at the long wavelength end.",
    evidence:
      "Radio waves occupy the low frequency, long wavelength end of the electromagnetic spectrum and are used for communication.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-12.3",
    concept: "radio wave wavelength",
  },
  {
    key: "xii-ac-spectrum-frequency-order",
    text: "Which of the following arrangements lists the regions of the electromagnetic spectrum in the correct order of increasing frequency?",
    options: [
      "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma",
      "Gamma, X-ray, ultraviolet, visible, infrared, microwave, radio",
      "Microwave, radio, infrared, visible, ultraviolet, X-ray, gamma",
      "Radio, infrared, microwave, visible, X-ray, ultraviolet, gamma",
    ],
    correctIndex: 0,
    explanation:
      "As the wavelength falls the frequency rises, and following the shortening wavelength through the spectrum gives radio waves, then microwaves, infrared, visible, ultraviolet, X-rays and finally gamma rays.",
    evidence:
      "The electromagnetic spectrum runs in order of increasing frequency from radio waves through microwaves and the optical regions to X-rays and gamma rays.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-12.3",
    concept: "order of the spectrum",
  },
  {
    key: "xii-ac-same-speed-no-medium",
    text: "Radio waves from a distant galaxy and gamma rays emitted inside the same galaxy both reach us through interstellar space. What can be said about the two kinds of wave?",
    options: [
      "The gamma rays travel faster, because they have the higher frequency",
      "Both travel at the same speed in vacuum and neither needs a material medium",
      "The radio waves travel faster, because their longer wavelength lets them pass through matter more easily",
      "Both travel at the same speed, but the radio waves can travel only in empty space",
    ],
    correctIndex: 1,
    explanation:
      "All electromagnetic waves have the same speed in vacuum, about 3 x 10^8 m s^-1, whatever their wavelength or frequency, and being electromagnetic waves neither of them needs any material medium for its travel.",
    evidence:
      "All electromagnetic waves travel with the same speed in vacuum and do not need a material medium to propagate.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-12.3",
    concept: "speed in vacuum",
  },
  {
    key: "xii-ac-gamma-ray-properties",
    text: "Which set of properties belongs to gamma rays in the electromagnetic spectrum?",
    options: [
      "Longest wavelength, lowest frequency, used for broadcasting",
      "Medium wavelength, medium frequency, used in remote control",
      "Long wavelength, high frequency, used for heating",
      "Shortest wavelength, highest frequency, greatest penetrating power",
    ],
    correctIndex: 3,
    explanation:
      "Gamma rays sit at the high frequency, short wavelength end of the spectrum, which is also where the penetrating power is greatest, since they pass through thick matter and are stopped only by heavy shielding.",
    evidence:
      "Gamma rays have the shortest wavelength and the highest frequency of all electromagnetic radiations, and they possess the greatest penetrating power.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-12.3",
    concept: "gamma ray properties",
  },
  {
    key: "xii-ac-frequency-from-wavelength",
    text: "An electromagnetic radiation in vacuum has a wavelength of 6.0 x 10^-7 m. Taking the speed of radiation in vacuum as 3.0 x 10^8 m s^-1, which region of the spectrum does it belong to and what is its frequency?",
    options: [
      "Visible light, with a frequency of 5.0 x 10^14 Hz",
      "Ultraviolet rays, with a frequency of 2.0 x 10^15 Hz",
      "Visible light, with a frequency of 1.8 x 10^16 Hz",
      "Infrared rays, with a frequency of 5.0 x 10^14 Hz",
    ],
    correctIndex: 0,
    explanation:
      "Using f = c over lambda, the frequency is 3.0 x 10^8 divided by 6.0 x 10^-7, which is 5.0 x 10^14 Hz, and a wavelength of several hundred nanometres lies in the visible region.",
    evidence:
      "The frequency of an electromagnetic wave is its speed in vacuum divided by its wavelength, so the two are inversely related.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 98,
    outcome: "PHY-12.3",
    concept: "frequency from wavelength",
  },
  {
    key: "xii-ac-gamma-penetration-statements",
    text: "Two statements about gamma rays are given. (I) They have the highest frequency and the shortest wavelength in the electromagnetic spectrum. (II) They pass through a thick sheet of lead because they move faster than all other radiations in vacuum. Which combination is correct?",
    options: [
      "Only I is correct",
      "Only II is correct",
      "Both I and II are correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 0,
    explanation:
      "Statement I is correct, but statement II gives a false reason, since every electromagnetic radiation travels at the same speed in vacuum and gamma rays pierce lead because of their very high penetrating power.",
    evidence:
      "All electromagnetic waves travel at the same speed in vacuum, while the great penetrating power of gamma rays comes from their very short wavelength.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 98,
    outcome: "PHY-12.3",
    concept: "gamma ray penetration",
  },
  {
    key: "xii-ac-penetration-not-speed",
    text: "A student observes that radio waves fail to pass through a thick wall while gamma rays pass straight through it, and concludes that gamma rays must travel much faster. Why is this conclusion faulty?",
    options: [
      "Radio waves are not really electromagnetic waves and so have no speed at all",
      "Gamma rays travel faster because their wavelength is short, and a short wavelength always means a high speed",
      "The wall is heated by the radio waves and stops them before they can pass",
      "Both travel at the same speed in vacuum, and the difference comes from their penetration through matter, not their speed",
    ],
    correctIndex: 3,
    explanation:
      "The speed in vacuum is the same for the whole spectrum, so penetration is not a matter of speed: the very short wavelength of gamma rays lets them pass through matter, whereas long radio waves are reflected and absorbed by it.",
    evidence:
      "Wavelength decides how well a radiation penetrates matter, while the speed in vacuum is the same for every region of the spectrum.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 98,
    outcome: "PHY-12.3",
    concept: "penetration and speed",
  },
  {
    key: "xii-ac-microwave-radio-comparison",
    text: "How do microwaves compare with ordinary radio waves in the electromagnetic spectrum?",
    options: [
      "They have a longer wavelength and a lower frequency than radio waves",
      "They have a shorter wavelength and a higher frequency than radio waves",
      "They have the same wavelength and the same frequency as radio waves",
      "They travel faster in vacuum than radio waves",
    ],
    correctIndex: 1,
    explanation:
      "Microwaves sit above the radio band in frequency, so their wavelength is correspondingly shorter, and like every other part of the spectrum they still travel at the same speed in vacuum.",
    evidence:
      "Microwaves form the band of the spectrum with a shorter wavelength and a higher frequency than ordinary radio waves.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-12.3",
    concept: "microwave versus radio",
  },
  {
    key: "xii-ac-band-from-frequency",
    text: "A radiation used for long distance communication has a frequency of 2.45 x 10^9 Hz and travels at 3.0 x 10^8 m s^-1 in vacuum. Which part of the spectrum does it belong to?",
    options: [
      "Radio waves, of wavelength about 122 m",
      "Microwaves, of wavelength about 0.12 m",
      "Microwaves, of wavelength about 8.2 x 10^8 m",
      "Infrared rays, of wavelength about 0.12 m",
    ],
    correctIndex: 1,
    explanation:
      "The wavelength is the speed divided by the frequency, 3.0 x 10^8 over 2.45 x 10^9, which is about 0.12 m, and a wavelength of a few centimetres places the radiation in the microwave band.",
    evidence:
      "The microwave band of the spectrum covers wavelengths of roughly 1 mm to 1 m and is used for communication links.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-12.3",
    concept: "band from frequency",
  },
  {
    key: "xii-ac-x-ray-application",
    text: "A hospital uses a certain region of the electromagnetic spectrum to photograph the bones of a fractured limb. Which region is used, and what property makes it suitable?",
    options: [
      "Infrared rays, because they can be detected as heat on the skin",
      "X-rays, because their short wavelength lets them pass through soft tissue and be stopped by bone",
      "Radio waves, because they penetrate the body most deeply",
      "Gamma rays, because they are stopped by the soft tissue of the limb",
    ],
    correctIndex: 1,
    explanation:
      "X-rays have a short wavelength and high penetrating power, so they pass through the soft tissue of the limb but are absorbed far more strongly by dense bone, which is why the shadow cast on the plate outlines the bone.",
    evidence:
      "X-rays are used to obtain radiographs of bones, since bone absorbs them far more strongly than the surrounding soft tissue.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-12.3",
    concept: "use of x-rays",
  },
];