import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-int4-work-to-assemble-like-charges",
    text: "Two identical point charges of +2.0 x 10^-6 C are held fixed at a separation of 0.40 m in free space and are then brought slowly to a separation of 0.10 m. What work does the external agent do on the pair?",
    options: [
      "The agent does no work, because a field of force cannot change the energy of a charge",
      "The agent does 0.27 J of work against the repelling field, raising the energy of the pair",
      "The agent does 0.27 J of work with the repelling field, lowering the energy of the pair",
      "The agent does 0.36 J of work, which is the whole of the energy finally stored between the charges",
    ],
    correctIndex: 1,
    explanation:
      "The energy between the charges is U = k q^2 / r, which rises from 0.09 J at 0.40 m to 0.36 J at 0.10 m, so the agent must supply the difference of 0.27 J against the mutual repulsion; unlike charges attract, so those need no work to assemble.",
    evidence:
      "Work must be done against the repulsion of two like charges to bring them together, while two unlike charges attract and come together without any work from outside.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.2",
    concept: "energy between like charges",
  },
  {
    key: "xii-int4-field-between-two-like-plates",
    text: "Two large flat conducting plates are placed parallel and close together, and each is given a charge of the same sign. In words, how is the electric field distributed around the pair?",
    options: [
      "The field between the plates nearly vanishes because the fields of the two surfaces oppose each other, while outside they act in the same direction and add",
      "The field between the plates is the sum of the fields of the two surfaces, so it is twice as strong as the field outside",
      "The field is equally strong everywhere, because the two plates carry equal and opposite charges",
      "The field is strongest between the plates and falls to zero in the space outside them",
    ],
    correctIndex: 0,
    explanation:
      "Each charged plane produces a uniform field of half its surface charge density divided by epsilon0 directed away from a positive plane, so between two plates of like sign the two contributions oppose and nearly cancel, while outside they point the same way and add.",
    evidence:
      "A large charged plane produces a uniform field of half its surface charge density divided by epsilon0, and between two planes carrying like charges the two fields oppose one another.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-8.5",
    concept: "field between charged plates",
  },
  {
    key: "xii-int4-negative-charge-moved-downhill",
    text: "An electric field exists between two parallel plates. A charge of -2.0 x 10^-6 C is moved slowly from a point A at potential +300 V to a point B at potential +100 V. What happens to the potential energy of the charge?",
    options: [
      "It falls by 4.0 x 10^-4 J and the agent does 4.0 x 10^-4 J of work",
      "It stays the same, because the field is the same everywhere in the region",
      "It rises by 4.0 x 10^-4 J and the agent does 4.0 x 10^-4 J of work against the field",
      "It rises by 4.0 x 10^-4 J and the agent recovers 4.0 x 10^-4 J of work from the field",
    ],
    correctIndex: 2,
    explanation:
      "The change in potential energy is the charge multiplied by the change in potential, (-2.0 x 10^-6 C)(100 V - 300 V), which comes out as +4.0 x 10^-4 J; because a negative charge is pushed by the field towards the higher potential, the field opposes this motion and the agent must supply that amount of work.",
    evidence:
      "The work done in bringing a charge from one point to another equals the charge multiplied by the potential difference between the two points.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.6",
    concept: "work against electric field",
  },
  {
    key: "xii-int4-volt-in-base-si-units",
    text: "The volt is a joule per coulomb. Written in the base units of the SI system, the volt is equal to",
    options: ["kg m^2 s^-2", "kg m s^-3 A^-1", "kg m^2 s^-2 A^-1", "kg m^2 s^-3 A^-1"],
    correctIndex: 3,
    explanation:
      "One joule is kg m^2 s^-2 and one coulomb is A s, so a joule per coulomb simplifies to kg m^2 s^-3 A^-1, which is the volt expressed in base units.",
    evidence:
      "The unit of potential difference is the volt, a joule per coulomb, that is a kilogram metre squared per second cubed per ampere.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-8.7",
    concept: "base units of volt",
  },
  {
    key: "xii-int4-larger-resistance-slower-charging",
    text: "An uncharged capacitor is connected across a battery of fixed emf through a resistance R and left there until the current has practically stopped. The same battery and capacitor are then used with a resistance of 4R. Which statement correctly compares the two experiments?",
    options: [
      "Both give the same final charge and stored energy, but the larger resistance makes charging take four times as long",
      "The larger resistance allows four times as much charge to flow, so the final charge and energy are four times greater",
      "Both give the same final charge, but the larger resistance charges the capacitor faster because it opposes the current less",
      "The final charge and the charging time both stay the same, because the time constant of the circuit is fixed by the battery",
    ],
    correctIndex: 0,
    explanation:
      "The final charge CV and the stored energy are set by the battery, but the time constant RC is four times larger with 4R, so the same current builds up four times more slowly and charging takes about four times as many time constants.",
    evidence:
      "A capacitor charges through a resistance with a time constant equal to RC and is practically fully charged after about five such time constants.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-8.9",
    concept: "capacitor charging time constant",
  },
  {
    key: "xii-int4-drift-speed-two-parallel-wires",
    text: "Two wires of the same material are joined in parallel across the same supply. The first wire is twice as long as the second and has twice the cross-sectional area of the second. How do the drift speeds of the free electrons in the two wires compare?",
    options: [
      "They are equal, because the drift speed depends only on the current and the material",
      "The drift speed in the first is half of that in the second, because equal resistances carry equal currents but the first has twice the area",
      "The drift speed in the first is twice that in the second, because it carries the same current over a longer length",
      "The drift speed in the first is four times that in the second, because its resistance is four times larger",
    ],
    correctIndex: 1,
    explanation:
      "Doubling the length while doubling the area leaves R = rho L/A unchanged, so the two parallel wires carry the same current, and since the drift speed is the current divided by n e A the larger area of the first wire halves its drift speed.",
    evidence:
      "The drift speed of charge carriers is the current divided by the product of the number density of carriers, the charge on each carrier and the cross-sectional area of the conductor.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-9.1",
    concept: "drift speed comparison",
  },
  {
    key: "xii-int4-power-split-inside-and-outside",
    text: "A battery of emf 12 V and internal resistance 0.50 ohm supplies a current of 4.0 A to an external circuit. The power delivered to that circuit and the power wasted as heat inside the battery are respectively",
    options: ["48 W and 8 W", "8 W and 40 W", "40 W and 8 W", "40 W and 48 W"],
    correctIndex: 2,
    explanation:
      "The potential difference at the terminals is E - Ir = 12 - 2 = 10 V, so the circuit receives 10 x 4 = 40 W, while the cell itself loses I^2 r = 16 x 0.5 = 8 W as heat, and these two add to the 48 W of chemical power EI.",
    evidence:
      "A cell of emf E and internal resistance r supplies EI in total, of which I^2 r is lost as heat inside the cell and the remainder reaches the external circuit.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.4",
    concept: "power lost inside cell",
  },
  {
    key: "xii-int4-power-versus-efficiency-condition",
    text: "A cell with emf E and an internal resistance r drives a purely resistive load R. Which statement correctly compares the condition for the greatest power in the load with the condition for the most efficient transfer?",
    options: [
      "Both occur at R equal to r, so the most efficient transfer is also the one that delivers the most power",
      "Both occur as R tends to zero, because a small load resistance always wastes the least energy inside the cell",
      "Both occur as R tends to infinity, because a large load resistance keeps the current and the internal heating small",
      "The greatest power is delivered when R equals r, but efficiency keeps rising as R grows far beyond r, when very little power reaches the load",
    ],
    correctIndex: 3,
    explanation:
      "The load power E^2 R divided by (R + r)^2 is greatest when R equals r, whereas the useful share R divided by (R + r) keeps rising as R grows, so the two requirements are met under quite different conditions.",
    evidence:
      "Maximum power is obtained when the load resistance equals the internal resistance, and at that setting only half of the energy supplied is delivered to the load.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-9.5",
    concept: "power versus efficiency",
  },
  {
    key: "xii-int4-force-per-unit-length-of-wire",
    text: "A conductor carrying a current of 6.0 A is placed with its length at right angles to a uniform magnetic field of flux density 0.50 T. The force on each metre of the conductor is",
    options: ["3.0 N", "0.30 N", "12.0 N", "0.083 N"],
    correctIndex: 0,
    explanation:
      "With the conductor at right angles to the field the force per unit length is the current multiplied by the flux density, and 6.0 A multiplied by 0.50 T gives 3.0 N for every metre of conductor.",
    evidence:
      "The magnetic force on a conductor of length L carrying current I at right angles to a field of flux density B is BIL, so the force per unit length is the product of the current and the flux density.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-10.1",
    concept: "force per unit length",
  },
  {
    key: "xii-int4-diameter-of-electron-circle",
    text: "An electron of mass 9.1 x 10^-31 kg moves at 3.0 x 10^6 m s^-1 perpendicular to a uniform field of flux density 0.50 T. The diameter of the circular path it follows is",
    options: ["1.7 x 10^-5 m", "6.8 x 10^-5 m", "2.3 x 10^-5 m", "6.8 x 10^-6 m"],
    correctIndex: 1,
    explanation:
      "The radius of the circle is mv divided by qB, that is (9.1 x 10^-31)(3.0 x 10^6) over (1.6 x 10^-19)(0.50), which is about 3.4 x 10^-5 m, and the diameter is twice this, 6.8 x 10^-5 m.",
    evidence:
      "A charged particle moving at right angles to a uniform field describes a circle of radius mv divided by the product of its charge and the flux density.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-10.3",
    concept: "path of charged particle",
  },
  {
    key: "xii-int4-straight-path-implies-parallel",
    text: "A charged particle is seen to travel in a straight line with uniform speed through a region in which a uniform magnetic field exists. Which conclusion must follow?",
    options: [
      "The particle must be uncharged, because a magnetic field can only act on a moving charge",
      "The particle must be at rest, because a magnetic field cannot act on a stationary charge",
      "The field must be absent from that region, because a magnetic field deflects every charge entering it",
      "The direction of motion must be parallel to the field, where the magnetic force is zero",
    ],
    correctIndex: 3,
    explanation:
      "The magnetic force on a moving charge is qvB sin theta, so any component of velocity across the field produces a deflection; a straight path at constant speed therefore means that the velocity lies along the field, where sin theta is zero.",
    evidence:
      "The magnetic force on a moving charge is qvB sin theta and it vanishes when the charge moves parallel to the field or when the charge is at rest.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-10.4",
    concept: "motion in magnetic field",
  },
  {
    key: "xii-int4-mechanical-power-becomes-heat",
    text: "A coil of wire is pulled steadily out of a uniform magnetic field, so that a current I flows in it and a force F must be applied to pull it along. What must be true of the mechanical power and the electrical effects in the coil?",
    options: [
      "The mechanical power Fv must equal the rate at which heat I^2 R is produced in the resistance of the coil",
      "The mechanical power Fv must be smaller than I^2 R, because part of the energy is stored as flux in the field",
      "The two powers are independent of one another, because the induced emf is created by the motion and not by the field",
      "The mechanical power Fv must equal the rate at which the coil stores magnetic energy, which is why the current keeps rising",
    ],
    correctIndex: 0,
    explanation:
      "Lenz's law makes the induced current oppose the motion, so the agent must supply power Fv for as long as the coil moves; since energy cannot be created and the induced emf drives the current through R, the mechanical power appears exactly as heat I^2 R in the coil.",
    evidence:
      "The work done against the induced current is converted into heat in the resistance of the circuit, and this is how Lenz's law expresses conservation of energy.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-11.2",
    concept: "lenz law and energy",
  },
  {
    key: "xii-int4-loss-when-voltage-doubled",
    text: "A power station sends 1.0 x 10^6 W along a transmission line of resistance 4.0 ohm. At a transmission voltage of 1.0 x 10^4 V the current is 100 A and the heating loss is 4.0 x 10^4 W. If the same power is sent at twice that voltage, the loss in the same line becomes",
    options: ["4.0 x 10^4 W", "1.0 x 10^4 W", "2.0 x 10^4 W", "1.0 x 10^3 W"],
    correctIndex: 1,
    explanation:
      "Sending a fixed power at twice the voltage halves the current from 100 A to 50 A, and the loss I^2 R goes as the square of the current, so the heating falls to one quarter of 4.0 x 10^4 W, that is 1.0 x 10^4 W.",
    evidence:
      "For a fixed power the current in a transmission line falls as the voltage is raised, and the heating loss I^2 R therefore falls as the square of that voltage.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-11.4",
    concept: "transmission loss and voltage",
  },
  {
    key: "xii-int4-step-up-then-step-down-chain",
    text: "Power must reach consumers many kilometres from a generating station. Which arrangement transfers that power with the least heating in the cables?",
    options: [
      "Send the power at generation voltage, step it up at the far end of the line, and step it down again at the consumers",
      "Send the power at generation voltage with a large current, since a large current reduces the heating in the cables",
      "Step the voltage up at the station, send it along the cables at high voltage and low current, and step it down near the consumers",
      "Step the voltage up at the station, send it along the cables at high voltage and high current, and step it down near the consumers",
    ],
    correctIndex: 2,
    explanation:
      "A step-up transformer raises the voltage so that the same power can travel on a much smaller current, which cuts the heating I^2 R to a small fraction, and a step-down transformer then restores a usable voltage at the receiving end.",
    evidence:
      "Power is transmitted at a high voltage and low current to reduce heating in the cables, and the voltage is stepped down again before reaching consumers.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-11.4",
    concept: "transformers in transmission",
  },
  {
    key: "xii-int4-current-leads-by-quarter-cycle",
    text: "Across a circuit element the applied voltage varies as V = V0 sin omega t while the current varies as I = I0 sin (omega t + pi/2). Which description fits these two expressions?",
    options: [
      "A resistive element, because the voltage and the current reach their maxima at the same instant",
      "A capacitive element, because the current reaches its maximum a quarter of a cycle before the voltage",
      "An inductive element, because the current reaches its maximum a quarter of a cycle after the voltage",
      "A resistive element, because a phase difference of pi/2 makes no difference to the current that flows",
    ],
    correctIndex: 1,
    explanation:
      "The plus pi/2 in the current expression means that the current is ahead of the voltage by one quarter of a cycle, and it is the current that leads the voltage in a capacitor because the capacitor returns stored energy as the driving voltage falls.",
    evidence:
      "In a capacitive circuit the current leads the applied voltage by 90 degrees, while in an inductive circuit it lags behind by 90 degrees.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-12.1",
    concept: "phase lead of current",
  },
  {
    key: "xii-int4-phase-relation-in-three-circuits",
    text: "The same a.c. supply is connected in turn to a pure resistor, a pure inductor and a pure capacitor. Which statement gives the phase relation of current and voltage in each?",
    options: [
      "In the resistor they are in phase, in the inductor the current lags the voltage by 90 degrees, and in the capacitor the current leads the voltage by 90 degrees",
      "In the resistor the current lags the voltage by 90 degrees, in the inductor they are in phase, and in the capacitor the current leads by 90 degrees",
      "In the resistor they are in phase, in the inductor the current leads the voltage by 90 degrees, and in the capacitor the current lags by 90 degrees",
      "In all three the current lags the voltage by 90 degrees, because a.c. always follows the supply that drives it",
    ],
    correctIndex: 0,
    explanation:
      "A pure resistor offers no reactance so voltage and current stay in step, a pure inductor stores energy magnetically and holds the current back, while a pure capacitor stores energy electrically and lets the current run ahead of the voltage.",
    evidence:
      "In a pure resistor voltage and current are in phase, in a pure inductor the current lags the voltage by 90 degrees and in a pure capacitor it leads by 90 degrees.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-12.2",
    concept: "phase in pure components",
  },
  {
    key: "xii-int4-average-power-resistor-and-coil",
    text: "An alternating supply of 100 V rms is connected first to a pure resistance of 50 ohm and then to a pure inductive reactance of 50 ohm. The average power taken from the supply in the two cases is respectively",
    options: ["zero and 200 W", "100 W and zero", "200 W and zero", "200 W and 100 W"],
    correctIndex: 2,
    explanation:
      "In the resistor the voltage and current are in step, so the average power is V^2 divided by R, that is 100^2 over 50 or 200 W; in the pure inductor the current lags by 90 degrees, cos 90 degrees is zero, and the average power over a cycle vanishes even though a large current flows.",
    evidence:
      "The average power in an a.c. circuit is V rms I rms cos phi, which is zero for a purely inductive or purely capacitive circuit where the phase difference is 90 degrees.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-12.2",
    concept: "average power in ac",
  },
  {
    key: "xii-int4-spectrum-order-increasing-wavelength",
    text: "Which arrangement places the main regions of the electromagnetic spectrum in order of increasing wavelength?",
    options: [
      "Gamma, X-ray, ultraviolet, visible, infrared, microwave, radio",
      "Infrared, radio, microwave, visible, ultraviolet, X-ray, gamma",
      "Microwave, infrared, radio, gamma, X-ray, visible, ultraviolet",
      "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma",
    ],
    correctIndex: 3,
    explanation:
      "Wavelength grows as frequency falls, so the longest waves, the radio waves, come first and the shortest, the gamma rays, come last, with visible light lying between the infrared and the ultraviolet.",
    evidence:
      "The electromagnetic spectrum runs from radio waves of the longest wavelength through the infrared, visible and ultraviolet to X-rays and gamma rays of the shortest wavelength.",
    questionType: "SEQUENCE",
    difficulty: "EASY",
    relevance: 91,
    outcome: "PHY-12.3",
    concept: "spectrum order by wavelength",
  },
  {
    key: "xii-int4-rectifier-versus-amplifier",
    text: "In a radio receiver a diode is used first and a transistor second. The diode takes the alternating signal from the aerial and the transistor then makes the current in the next stage much larger. How do these two stages differ in principle?",
    options: [
      "The diode stage is rectification and the transistor stage is amplification; the diode only changes the direction of the current, while the transistor raises its magnitude using energy from the supply",
      "Both stages are rectifiers, because each of them makes the current flow in one direction only",
      "Both stages are amplifiers, because each of them increases the magnitude of the current",
      "The diode stage is amplification and the transistor stage is rectification, because only the transistor needs a source of power",
    ],
    correctIndex: 0,
    explanation:
      "A diode that passes only one half of each cycle performs rectification and cannot make the current any larger, whereas an amplifying device draws energy from its own supply to raise the size of the signal while leaving its shape and timing intact.",
    evidence:
      "A diode in a rectifier changes an alternating current into a unidirectional current, while an amplifier increases the magnitude of a signal using energy from an external supply.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-13.1",
    concept: "rectification versus amplification",
  },
  {
    key: "xii-int4-forward-bias-of-pn-junction",
    text: "A p-n junction diode is joined to a battery with the p-side to the positive terminal and the n-side to the negative terminal. How does the junction then behave?",
    options: [
      "The depletion layer widens and only a very small current flows",
      "The depletion layer narrows and a large current flows forward through the junction",
      "The depletion layer narrows but only a tiny reverse saturation current flows",
      "The depletion layer widens and the current in the junction rises sharply",
    ],
    correctIndex: 1,
    explanation:
      "Joining the p-side to the positive terminal and the n-side to the negative terminal is forward bias, which pushes the carriers across the junction, narrows the depletion layer and lets a large current flow through the diode.",
    evidence:
      "In forward bias the p-side is joined to the positive terminal, the depletion layer narrows and a large current flows through the junction.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-13.2",
    concept: "forward bias of junction",
  },
  {
    key: "xii-int4-energy-of-one-photon",
    text: "A beam of light of wavelength 500 nm strikes a metal surface. Using the speed of light as 3.0 x 10^8 m s^-1 and the Planck constant as 6.6 x 10^-34 J s, how much energy does each photon of this beam carry?",
    options: ["2.5 x 10^-25 J", "6.6 x 10^-34 J", "4.0 x 10^-19 J", "1.3 x 10^-18 J"],
    correctIndex: 2,
    explanation:
      "In the photon model the energy of one quantum is hc divided by the wavelength, that is (6.6 x 10^-34)(3.0 x 10^8) over 5.0 x 10^-7, which gives 3.96 x 10^-19 J or about 4.0 x 10^-19 J per photon.",
    evidence:
      "The energy of a photon is h nu, or hc divided by the wavelength, and this fixes the energy carried by each quantum of light.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-14.1",
    concept: "photon energy",
  },
  {
    key: "xii-int4-lines-mean-discrete-levels",
    text: "The light emitted by a gas in a discharge tube is viewed with a spectroscope and appears as a set of separate bright lines on a dark background. What does the presence of those separate lines tell us about the atoms of the gas?",
    options: [
      "The atoms emit light of every possible wavelength at once, and the spectroscope shows only the strongest of them",
      "The atoms are at different temperatures, and each temperature produces its own separate line",
      "The light is continuous, and the separate lines are an artefact of the narrow slit used in the spectroscope",
      "The electrons in the atoms can hold only certain allowed energies, so photons of only certain wavelengths are emitted",
    ],
    correctIndex: 3,
    explanation:
      "Each line carries light of one definite wavelength, and a photon of that light carries an energy hf, so a line spectrum means the atoms can emit only a fixed set of photon energies, that is their electrons occupy a set of discrete levels.",
    evidence:
      "An emission line spectrum consists of separate bright lines, each produced when an electron drops from one allowed energy level to another.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-15.1",
    concept: "origin of line spectrum",
  },
  {
    key: "xii-int4-mass-number-and-electron-count",
    text: "An atom has 11 protons and 12 neutrons in its nucleus. Its mass number and the number of electrons in the neutral atom are respectively",
    options: ["23 and 11", "11 and 12", "12 and 11", "23 and 23"],
    correctIndex: 0,
    explanation:
      "The mass number counts protons and neutrons together, so it is 11 + 12 = 23, while the number of electrons in a neutral atom is fixed by the number of protons, so it is 11.",
    evidence:
      "The mass number of a nucleus is the total number of protons and neutrons, and a neutral atom carries as many electrons as it has protons.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 90,
    outcome: "PHY-16.1",
    concept: "nuclear composition",
  },
  {
    key: "xii-int4-claims-about-half-life",
    text: "The half-life of a radioactive isotope is quoted as 8 days. Three claims about this figure are made. (I) Every nucleus of the isotope decays within 8 days. (II) The rate of decay is the same whether the element is a metal, a non-metal or part of a chemical compound. (III) The exact moment at which any one nucleus will decay can be predicted from its past behaviour. Which combination of claims is correct?",
    options: [
      "Only I and II are correct",
      "Only II is correct",
      "Only I and III are correct",
      "Only III is correct",
    ],
    correctIndex: 1,
    explanation:
      "Claim I is false because the half-life is a statistical statement, so a large fraction of the nuclei outlives 8 days; claim III is false because the decay of any particular nucleus is random; only claim II holds, since decay depends on the nucleus and not on its chemical surroundings.",
    evidence:
      "Nuclear decay is spontaneous and random, and its rate depends only on the nucleus itself and not on the physical or chemical state of the element.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-16.2",
    concept: "random nature of decay",
  },
  {
    key: "xii-int4-xrays-and-gamma-uses",
    text: "X-rays and gamma rays both belong to the electromagnetic spectrum, yet they serve different purposes in medicine. Which statement explains the difference correctly?",
    options: [
      "X-rays form images because different tissues absorb them by different amounts, while gamma rays are used where intense ionising damage to rapidly dividing cells is required",
      "X-rays are used where tissue must be damaged, while gamma rays pass freely through the body and form shadow pictures",
      "Both are used only to form images, and the only difference between them is that gamma rays have the longer wavelength",
      "The difference has nothing to do with their effect on living tissue, because both are harmless waves of the electromagnetic spectrum",
    ],
    correctIndex: 0,
    explanation:
      "A beam of X-rays is partly absorbed by the tissues it crosses and bone absorbs far more than soft tissue, so the pattern of absorption gives an image; gamma rays are the more penetrating and more strongly ionising of the two, which suits them to acting on rapidly dividing cells.",
    evidence:
      "Radiation can ionise atoms in living cells, and the differing absorption of X-rays by different tissues is what allows the shadow of a bone to be formed.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-16.4",
    concept: "medical uses of radiation",
  },
];
