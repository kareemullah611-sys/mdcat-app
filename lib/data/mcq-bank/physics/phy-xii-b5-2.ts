import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-int2-conductor-zero-interior-field",
    text: "An isolated metal body is given a net charge and then left alone until nothing inside it is moving. Why is the electric field inside the material zero at that point?",
    options: [
      "Excess charge migrates to the outer surface of the body, so no net charge is left in the interior to produce a field",
      "The ions in the lattice are packed so tightly that no charge at all can move through the metal",
      "The drifting electrons inside the metal generate a field of their own that cancels the field of the surface charge",
      "The interior field is zero only at the exact centre of the body and grows as a point is taken nearer the surface",
    ],
    correctIndex: 0,
    explanation:
      "Free charges keep moving until redistribution has removed every trace of excess charge from the interior, and only when that condition is reached does the field inside the conductor fall to zero with the remaining charge sitting on the surface.",
    evidence:
      "In electrostatic equilibrium the electric field inside a conductor is zero and all excess charge resides on its outer surface.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.2",
    concept: "equilibrium field in conductor",
  },
  {
    key: "xii-int2-potential-field-zero-distance",
    text: "Along a straight line through a positive point charge the potential V and the field E both change with distance. Three statements are made. (I) V is largest at the charge and approaches zero far from it. (II) E points away from the charge and its magnitude falls as the distance grows. (III) V and E reach zero at the same finite distance from the charge. Which statement is NOT correct?",
    options: [
      "Only I is incorrect",
      "Only II is incorrect",
      "Only III is incorrect",
      "I and II are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "The potential falls as 1/r and reaches zero only in the limit of infinite distance, whereas the field falls as 1/r^2 and stays finite at every finite distance, so the two quantities can never vanish at the same point.",
    evidence:
      "The potential due to a point charge varies as 1/r while the field intensity produced by it varies as 1/r^2.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.2",
    concept: "field versus potential",
  },
  {
    key: "xii-int2-charged-plate-field-symmetry",
    text: "An isolated flat conducting plate is given a uniform positive charge, so that both faces carry the same charge density. Let E1 be the field just outside one face, E2 the field deep inside the metal and E3 the field just outside the opposite face at the same distance. Which relation is correct?",
    options: [
      "E1 is greater than E3, and both are greater than E2",
      "E3 is greater than E1, and both are greater than E2",
      "E1, E2 and E3 are all equal and all point away from the plate",
      "E1 and E3 are equal and greater than E2, both outer fields pointing away from the plate and E2 being zero",
    ],
    correctIndex: 3,
    explanation:
      "By symmetry an isolated charged plate carries the same charge density on its two faces and produces fields of equal magnitude just outside them, directed away from the positive charge, while redistribution of charge inside the metal leaves the interior field zero.",
    evidence:
      "An infinite sheet of charge produces an electric field of the same magnitude at every point outside it and zero inside the conducting material.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.5",
    concept: "field of charged sheet",
  },
  {
    key: "xii-int2-capacitor-energy-vs-battery-work",
    text: "Charging a capacitor of capacitance C through a resistance until it stands at the full potential difference V of a battery, compare the energy finally stored in the capacitor with the work the battery has done in moving charge onto the plates.",
    options: [
      "The stored energy equals the work done by the battery",
      "The stored energy is half the work done by the battery, the remainder being dissipated as heat in the resistance",
      "The stored energy is twice the work done by the battery",
      "The stored energy is one quarter of the work done by the battery",
    ],
    correctIndex: 1,
    explanation:
      "The battery pushes a charge Q = CV onto the plates at potential V and so does work QV = CV^2, but the energy stored is only one half QV, and the missing half appears as heat while the charging current flows in the resistance.",
    evidence:
      "The energy stored in a charged capacitor is one half QV while the work done by the cell in charging it is QV.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-8.6",
    concept: "capacitor energy balance",
  },
  {
    key: "xii-int2-work-to-bring-charge-to-point",
    text: "At a certain point the potential is 250 V. The work done in bringing a charge of 4 x 10^-6 C slowly from infinity to that point is",
    options: ["5.0 x 10^-4 J", "6.3 x 10^4 J", "1.0 x 10^-3 J", "2.5 x 10^2 J"],
    correctIndex: 2,
    explanation:
      "Work done in bringing a charge quasistatically from infinity to a point is qV, so W = (4 x 10^-6 C)(250 V) = 1.0 x 10^-3 J, which is also the increase in the potential energy of that charge.",
    evidence:
      "The work done in bringing a charge q from infinity to a point of potential V is equal to qV.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.6",
    concept: "work done against potential",
  },
  {
    key: "xii-int2-potential-unit-matching",
    text: "Four quantities from electrostatics are offered with the unit that is supposed to measure them. Which quantity and unit pair is correct?",
    options: [
      "Electric potential difference - newton per coulomb, the unit used for electric field",
      "Electric potential difference - volt, which is one joule per coulomb",
      "Capacitance - coulomb, the same unit that measures electric charge",
      "Electric flux through a surface - tesla, the same unit that measures magnetic flux density",
    ],
    correctIndex: 1,
    explanation:
      "Potential is energy per unit charge, so it is measured in joule per coulomb, and this combination is given the name volt; the newton per coulomb belongs to the electric field and the tesla to magnetic flux density.",
    evidence:
      "The unit of electric potential is the volt, which is equal to one joule per coulomb.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 94,
    outcome: "PHY-8.7",
    concept: "unit of potential",
  },
  {
    key: "xii-int2-steady-current-drift-speed",
    text: "A steady current flows along a metallic conductor. Three statements are made. (I) The same current passes through every cross-section of the conductor at the same instant. (II) Each free electron crosses the whole length of the wire at its drift velocity, so the current appears at the far end at the drift speed. (III) A steady current persists although each individual carrier moves only very slowly. Which statement is NOT correct?",
    options: ["Only III is incorrect", "Only I is incorrect", "Only II is incorrect", "I and III are incorrect"],
    correctIndex: 2,
    explanation:
      "Steady current means the same charge crosses every cross-section in equal time intervals, yet the carriers themselves drift only a small distance each second, so the disturbance that establishes the current travels at the speed of the field rather than at the drift velocity.",
    evidence:
      "A steady current is one in which the same quantity of charge passes through a cross-section in equal time intervals.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.1",
    concept: "steady current and drift",
  },
  {
    key: "xii-int2-resistivity-resistance-heating",
    text: "A metal wire is heated so that its temperature rises while no external force stretches it. Its length and its cross-sectional area both change slightly during the heating. Compare the resistivity and the resistance of the wire before and after heating.",
    options: [
      "Resistivity is unchanged because it is fixed by the material, while resistance rises because the wire becomes longer",
      "Both resistivity and resistance fall, because the heated lattice lets the free electrons through more easily",
      "Resistivity rises with temperature, but resistance falls because the wire becomes longer and thicker",
      "Resistivity rises with temperature and the resistance rises as well, although the resistance also depends on the length and area of the wire",
    ],
    correctIndex: 3,
    explanation:
      "Resistivity depends only on the material and its temperature and increases for a metal, whereas resistance equals resistivity multiplied by length over area, so it responds to those temperature changes and to the small geometric changes that accompany them.",
    evidence:
      "The resistivity of a metal increases with temperature, while its resistance depends on resistivity as well as on the dimensions of the wire.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.3",
    concept: "resistivity and resistance",
  },
  {
    key: "xii-int2-temperature-coefficient-resistance",
    text: "A metal wire has a resistance of 20 ohm at 20 degree C and a temperature coefficient of resistivity of 4.0 x 10^-3 per degree C. If the small change in length is neglected, what is its resistance at 100 degree C?",
    options: ["26.4 ohm", "25.6 ohm", "32.0 ohm", "24.0 ohm"],
    correctIndex: 0,
    explanation:
      "Using R = R0(1 + alpha dT) with dT = 80 degree C gives R = 20(1 + 0.32) = 26.4 ohm, and the positive sign is required because the temperature coefficient of a metal is positive.",
    evidence:
      "For a metal conductor the resistance at temperature T is R0(1 + alpha(T - T0)).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.3",
    concept: "temperature coefficient of resistivity",
  },
  {
    key: "xii-int2-maximum-power-transfer-pair",
    text: "An emf of 12 V from a source of internal resistance 3 ohm supplies an external resistance. Which pair gives that external resistance when power transfer is to be at its greatest, together with the value of the power delivered?",
    options: [
      "3 ohm and 12 W",
      "3 ohm and 48 W",
      "6 ohm and 9 W",
      "1.5 ohm and 24 W",
    ],
    correctIndex: 0,
    explanation:
      "Power transfer is greatest when the external resistance equals the internal resistance, so R = 3 ohm, the current is then I = 12/(3 + 3) = 2 A and the power delivered is I squared R = 4 x 3 = 12 W, half of the 24 W the source generates.",
    evidence:
      "Maximum power is delivered to an external circuit when the external resistance equals the internal resistance of the source.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-9.5",
    concept: "maximum power transfer",
  },
  {
    key: "xii-int2-flux-density-unit-tesla",
    text: "A uniform magnetic field of 0.40 T passes perpendicularly through a flat surface of area 0.05 m^2. Which of the following correctly identifies the magnetic flux density B and the unit in which it is measured?",
    options: [
      "A scalar quantity measured in webers",
      "A vector quantity measured in webers per square metre",
      "A vector quantity measured in tesla, which is the same as one weber per square metre",
      "A vector quantity measured in tesla, which is the same as one weber multiplied by the area",
    ],
    correctIndex: 2,
    explanation:
      "Flux density is a vector quantity and is measured in tesla, and since the flux Phi equals B A, one tesla is the same as one weber of flux through every square metre of a surface placed across the field.",
    evidence:
      "Magnetic flux density is a vector quantity and its unit is the tesla, which equals one weber per square metre.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-10.1",
    concept: "flux density unit",
  },
  {
    key: "xii-int2-alpha-period-in-magnetic-field",
    text: "Charged with 3.2 x 10^-19 C and having a mass of 6.6 x 10^-27 kg, a particle enters a uniform field of 0.50 T with its velocity perpendicular to the field, and the magnetic force supplies the force needed for its circular motion. The time taken to complete one revolution is",
    options: ["6.5 x 10^-8 s", "1.3 x 10^-7 s", "5.2 x 10^-7 s", "2.6 x 10^-7 s"],
    correctIndex: 3,
    explanation:
      "Equating qvB to mv squared over r gives r = mv/qB, and the period is then T = 2 pi r/v = 2 pi m/(qB) = 2 pi (6.6 x 10^-27)/(3.2 x 10^-19 x 0.50) = 2.6 x 10^-7 s, a result that does not depend on the speed of the particle.",
    evidence:
      "A charged particle moving perpendicular to a uniform field describes a circle of radius mv/qB and completes a revolution in the time 2 pi m/qB.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-10.4",
    concept: "period of circular motion",
  },
  {
    key: "xii-int2-magnet-through-ring-sequence",
    text: "A magnet is pushed along the axis of a conducting ring towards it, passes through the ring and is then taken far beyond it. In which sequence does the induced current behave?",
    options: [
      "It flows as the magnet approaches, reverses as the magnet passes through the centre, and flows the other way as the magnet recedes, fading away once the magnet is far off",
      "It flows only while the magnet lies inside the ring and vanishes both before it enters and after it leaves",
      "It keeps flowing in one sense for as long as the magnet keeps moving and reverses only when the magnet is brought to rest",
      "It never appears, because the magnet is an insulator and cannot carry charge into the ring",
    ],
    correctIndex: 0,
    explanation:
      "The induced current opposes the change of flux at every stage, so while the magnet approaches it flows in the sense that repels the magnet, it reverses as the magnet passes the centre and the linked flux begins to fall, and it dies away when the flux stops changing.",
    evidence:
      "The induced current flows in the direction that opposes the change in magnetic flux which produces it.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-11.2",
    concept: "sequence of induced current",
  },
  {
    key: "xii-int2-lenz-not-reinforcing-flux",
    text: "Three statements about an induced current are made. (I) The induced current always flows so as to oppose the change in magnetic flux that produced it. (II) Because the induced current opposes that change, the energy it carries is taken from the work done against this opposition and never created by the change itself. (III) The induced current flows so as to reinforce the changing flux, since a larger change of flux keeps the induced emf large. Which statement is NOT correct?",
    options: ["Only I is incorrect", "Only III is incorrect", "Only II is incorrect", "I and II are incorrect"],
    correctIndex: 1,
    explanation:
      "Lenz's law is a statement of conservation of energy, for the mechanical work done against the opposition of the induced current is exactly what appears as electrical energy in the circuit, so a current reinforcing the change would create energy from nothing.",
    evidence:
      "Lenz's law states that an induced current opposes the change in flux producing it, which is a consequence of conservation of energy.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-11.2",
    concept: "lenz law and conservation",
  },
  {
    key: "xii-int2-stepup-transformer-secondary-current",
    text: "A step-up transformer has 11000 V across its primary coil and delivers 220000 V from its secondary coil. Treating the transformer as ideal, the primary current is 400 A. The current in the secondary coil is",
    options: ["8000 A", "8 A", "200 A", "20 A"],
    correctIndex: 3,
    explanation:
      "For an ideal transformer the power entering the primary equals that leaving the secondary and the voltage ratio equals the turns ratio, so the current must fall by the same factor of 20 by which the voltage rises, giving 400/20 = 20 A.",
    evidence:
      "An ideal transformer raises the voltage by the ratio of its turns and lowers the current by the same ratio.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-11.4",
    concept: "step-up transformer current",
  },
  {
    key: "xii-int2-phase-in-rlc-branches",
    text: "Three separate branches, one containing a pure resistance, one a pure inductance and one a pure capacitance, are each connected across the same alternating supply. Compare the phase of the voltage across each branch with the phase of the current in it.",
    options: [
      "Voltage and current are in step in the resistive branch, the voltage leads the current by 90 degrees in the inductive branch and lags it by 90 degrees in the capacitive branch",
      "Voltage and current are in step in the resistive branch, and in both reactive branches the voltage leads the current by 90 degrees",
      "Voltage and current are in step in the resistive branch, the voltage lags the current by 90 degrees in the inductive branch and leads it by 90 degrees in the capacitive branch",
      "Voltage and current are in step in the resistive branch and 45 degrees apart in each of the two reactive branches",
    ],
    correctIndex: 0,
    explanation:
      "An inductance opposes any change of current, so its voltage leads the current by a quarter of a cycle, while a capacitance opposes any change of voltage, so its voltage lags the current by a quarter of a cycle; a pure resistance keeps the two in step.",
    evidence:
      "In an inductive circuit the current lags the applied voltage by 90 degrees while in a capacitive circuit the current leads it by 90 degrees.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-12.1",
    concept: "phase relations in ac",
  },
  {
    key: "xii-int2-series-rlc-phase-angle",
    text: "A series branch contains a resistance of 30 ohm, an inductive reactance of 45 ohm and a capacitive reactance of 15 ohm at the frequency of the supply. The phase angle between the applied voltage and the current in the branch is",
    options: ["0 degree", "45 degree", "30 degree", "75 degree"],
    correctIndex: 1,
    explanation:
      "The net reactance is XL - XC = 45 - 15 = 30 ohm, so tan phi = X over R = 30/30 = 1 and the phase angle is 45 degrees, with the current lagging because the branch behaves inductively.",
    evidence:
      "For a series RLC circuit the phase angle satisfies tan phi = (XL - XC)/R and the current lags when the circuit is inductive.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-12.1",
    concept: "series rlc phase angle",
  },
  {
    key: "xii-int2-em-spectrum-ordering",
    text: "Ordered from radio waves through to gamma rays, the electromagnetic spectrum follows a definite pattern. Which option correctly describes how wavelength, frequency and photon energy vary along the series?",
    options: [
      "Wavelength, frequency and photon energy all increase along the series",
      "Wavelength increases while frequency and photon energy decrease along the series",
      "Wavelength decreases while frequency and photon energy increase along the series",
      "Wavelength and frequency both increase while photon energy decreases along the series",
    ],
    correctIndex: 2,
    explanation:
      "Every electromagnetic wave travels at the same speed, so a shorter wavelength means a higher frequency, and since the energy of a photon is hf the energy rises as well as the frequency when the wavelength falls.",
    evidence:
      "The electromagnetic spectrum runs from radio waves of long wavelength to gamma rays of short wavelength and high frequency.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "PHY-12.3",
    concept: "em spectrum ordering",
  },
  {
    key: "xii-int2-bridge-rectifier-conduction-order",
    text: "In a bridge rectifier two diodes, D1 and D2, form one path through the bridge and two more, D3 and D4, form the other. As the alternating supply reverses, in what order do these diodes conduct?",
    options: [
      "All four diodes conduct together during every half cycle, so the output current is doubled",
      "Only one diode conducts in each half cycle while the other three stay reverse biased, giving a pulsating output",
      "Each diode conducts continuously once the supply is connected, so the output is a steady direct current",
      "D1 and D2 conduct in one half cycle and D3 and D4 in the next, and the two pairs then take turns",
    ],
    correctIndex: 3,
    explanation:
      "Whichever terminal of the supply is positive, a different pair of diodes completes the circuit through the load, so the load current keeps one direction throughout and the two pairs alternate with every change of sign, giving a full wave output.",
    evidence:
      "A bridge rectifier uses four diodes, two of which conduct in each half cycle to deliver a full wave rectified output.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-13.1",
    concept: "bridge rectifier conduction",
  },
  {
    key: "xii-int2-forward-bias-depletion-narrowing",
    text: "Joining the p-side of a junction diode to the positive terminal of a battery and the n-side to the negative terminal, which account of what happens inside the junction is correct?",
    options: [
      "The depletion region narrows, the barrier potential is reduced and a large current crosses the junction",
      "The depletion region widens, the barrier potential rises and only a very small saturation current crosses the junction",
      "The depletion region widens but the barrier potential falls, so a large current crosses the junction",
      "Neither the depletion region nor the barrier changes, because the junction is fixed once the crystal has formed",
    ],
    correctIndex: 0,
    explanation:
      "Joining the p-side to the positive terminal and the n-side to the negative terminal forward biases the junction, which lowers the barrier potential and narrows the depletion region so that the majority carriers cross in large numbers.",
    evidence:
      "A p-n junction diode conducts strongly when forward biased and passes only a tiny current when reverse biased.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-13.2",
    concept: "forward bias of junction",
  },
  {
    key: "xii-int2-photon-energy-uv-light",
    text: "Light of wavelength 400 nm falls on a metal surface. Taking the Planck constant as 6.63 x 10^-34 J s and the speed of light as 3.0 x 10^8 m s^-1, the energy carried by one photon of this light is",
    options: ["2.0 x 10^-19 J", "5.0 x 10^-19 J", "2.5 x 10^-25 J", "1.0 x 10^-18 J"],
    correctIndex: 1,
    explanation:
      "The energy of a photon is E = hc divided by the wavelength, so E = (6.63 x 10^-34)(3.0 x 10^8)/(4.0 x 10^-7) = 4.97 x 10^-19 J, which is why light of this short wavelength can liberate electrons from a metal.",
    evidence:
      "Light is made of photons, each carrying energy E = hf, which is the same as hc divided by the wavelength.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-14.1",
    concept: "energy of a photon",
  },
  {
    key: "xii-int2-line-spectrum-unique-levels",
    text: "Each element in the gaseous state, when excited, emits its own sharp bright lines, and no two elements share the same set of lines. This characteristic line spectrum is a direct result of",
    options: [
      "the different number of electrons that revolve around the nucleus in the atoms of each element",
      "the different colour of light absorbed by the atoms of each element",
      "the unique set of discrete energy levels present in the atoms of each element",
      "the different speeds with which the atoms of each element move in a discharge tube",
    ],
    correctIndex: 2,
    explanation:
      "Electrons in an atom may occupy only certain discrete energy levels, so a falling electron emits a photon whose energy equals the gap between two levels, and because the pattern of gaps differs from element to element each one shows its own set of wavelengths.",
    evidence:
      "An excited gas emits a line spectrum in which each line corresponds to a transition between two discrete energy levels of the atom.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 91,
    outcome: "PHY-15.1",
    concept: "origin of line spectra",
  },
  {
    key: "xii-int2-isotope-proton-neutron-counts",
    text: "Two neutral atoms of chlorine have mass numbers 35 and 37, while the atomic number of chlorine is 17. Compare these two atoms.",
    options: [
      "Both atoms contain 17 protons and 35 neutrons, so they are two different elements",
      "The atom of mass 35 contains 35 protons while the atom of mass 37 contains 37 protons",
      "Both atoms contain 17 electrons and 17 protons, but the heavier one belongs to a different element and carries one more proton",
      "Both atoms contain 17 protons and 17 electrons, and the heavier atom simply carries two extra neutrons and has a slightly greater mass",
    ],
    correctIndex: 3,
    explanation:
      "Isotopes of one element share the same atomic number, so they carry the same number of protons and, being neutral, the same number of electrons, and the whole of the difference in mass number lies in the neutrons.",
    evidence:
      "Isotopes of the same element have the same number of protons but different numbers of neutrons, so their mass numbers differ.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-16.1",
    concept: "composition of isotopes",
  },
  {
    key: "xii-int2-random-decay-macroscopic-law",
    text: "In a specimen of a radioactive substance there is a very large number of unstable nuclei. Three statements are made. (I) For any one nucleus it is impossible to predict the instant at which it will decay. (II) For a sample this large the number of decays per unit time follows a steady law, and repeated measurements of the activity agree closely. (III) Since the decay of each nucleus is random, no reproducible law can connect the activity of such a large sample with the time of measurement. Which statement is NOT correct?",
    options: ["Only III is incorrect", "Only I is incorrect", "Only II is incorrect", "I and II are incorrect"],
    correctIndex: 0,
    explanation:
      "Each nucleus decays at a random instant, yet when the number of nuclei is enormous the fluctuations become negligible and the total activity follows a smooth and repeatable law with time, so (III) contradicts (II).",
    evidence:
      "The spontaneous decay of an individual nucleus is random, but the decay of a very large number of nuclei follows a regular statistical law.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 92,
    outcome: "PHY-16.2",
    concept: "randomness of nuclear decay",
  },
  {
    key: "xii-int2-alpha-gamma-medical-range",
    text: "Both alpha particles and gamma rays ionise the tissue they pass through, and both kinds of radiation are used in medicine, yet their roles are quite different. Which option explains the difference correctly?",
    options: [
      "Alpha particles suit internal treatment because they pass through the tissues of the body almost without losing energy",
      "Alpha particles ionise strongly but have very low penetrating power, so a sealed source must be put close to or inside the tissue it must affect, whereas penetrating gamma rays can be applied from outside the body",
      "Gamma rays suit internal treatment because they are stopped completely by a thin layer of skin",
      "Alpha particles suit treatment from outside the body because they travel several centimetres through tissue before being absorbed",
    ],
    correctIndex: 1,
    explanation:
      "Alpha particles give up their energy over a very short distance in tissue, which confines their damaging effect but requires the source to be placed close to or within the tissue, while deeply penetrating gamma rays can be directed at an internal site from outside the body.",
    evidence:
      "Alpha particles have a greater ionising power than gamma rays but a much shorter range in matter.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-16.4",
    concept: "radiation range in tissue",
  },
];
