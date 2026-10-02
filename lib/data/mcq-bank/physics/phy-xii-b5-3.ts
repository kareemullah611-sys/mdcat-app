import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-int3-three-charges-on-a-line",
    text: "Three point charges lie on one straight line. A charge of +1.0 microcoulomb at x = 0.50 m sits between a +2.0 microcoulomb charge at the origin and a -1.0 microcoulomb charge at x = 0.20 m. What is the magnitude and direction of the net force on the middle charge?",
    options: [
      "0.028 N, directed towards the negative charge",
      "0.028 N, directed away from the negative charge",
      "0.172 N, directed towards the negative charge",
      "0.100 N, directed towards the positive charge",
    ],
    correctIndex: 0,
    explanation:
      "The +2.0 microcoulomb charge repels the middle charge with 9 x 10^9 x 2.0e-6 x 1.0e-6 / 0.5^2 = 0.072 N while the -1.0 microcoulomb charge attracts it with 9 x 10^9 x 1.0e-12 / 0.3^2 = 0.100 N, so the resultant 0.028 N acts along the line towards the negative charge.",
    evidence:
      "By superposition the net force on a charge in the field of several other charges is the vector sum of the individual Coulomb forces.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.1",
    concept: "superposition of coulomb forces",
  },
  {
    key: "xii-int3-bisector-negative-test-charge",
    text: "Two equal positive charges sit at the ends of a horizontal line and a negative test charge is placed on the perpendicular bisector above the midpoint. Which statement correctly describes the net force on that negative charge?",
    options: [
      "It is zero, because the two charges are equal in magnitude",
      "It points straight upward, because the vertical components of the two attractions add",
      "It points horizontally towards the nearer charge, because the nearer charge exerts the larger force",
      "It points straight down the bisector, because the horizontal components cancel while the vertical components add",
    ],
    correctIndex: 3,
    explanation:
      "The two attractions have equal magnitude but opposite components parallel to the line of charges, so those cancel, while both components along the bisector point towards the midpoint and the negative test charge is pulled that way.",
    evidence:
      "Along the perpendicular bisector of two equal like charges the components of the field parallel to the line cancel while those along the bisector add.",
    questionType: "REASONING",
    difficulty: "EASY",
    relevance: 94,
    outcome: "PHY-8.1",
    concept: "force symmetry on bisector",
  },
  {
    key: "xii-int3-work-in-two-charge-field",
    text: "Along a line joining two point charges, points A and B are marked. A charge of +3.0 microcoulomb sits at the origin and a charge of -2.0 microcoulomb sits at x = 0.40 m. Point A is the midpoint and point B is at x = 0.80 m. A test charge of +2.0 microcoulomb is moved slowly from A to B. What work does the field do on it?",
    options: ["-0.1125 J", "0.1125 J", "0.0225 J", "0.2250 J"],
    correctIndex: 1,
    explanation:
      "The two charges give V_A = 45 kV and V_B = -11.25 kV, so the work done by the field is q(V_A - V_B) = 2.0e-6 x 5.625e4 = 0.1125 J, positive because the positive charge is taken from higher to lower potential.",
    evidence:
      "The potential of a point charge varies as 1/r and the work done by the field in moving a charge between two points equals q times the potential difference.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.3",
    concept: "work in combined potential",
  },
  {
    key: "xii-int3-midpoint-potential-statements",
    text: "Two identical positive charges are fixed at the ends of a horizontal line and a test charge is moved along the line joining them. Three statements are made. (I) The electric field is zero at the midpoint. (II) The potential at the midpoint is a minimum along that line. (III) The midpoint is a stable position for a negative test charge. Which statement is NOT correct?",
    options: [
      "Only I is incorrect",
      "Only II is incorrect",
      "Only III is incorrect",
      "I and III are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "The fields of the two like charges cancel at the midpoint and the potential there is a minimum along the joining line, but for a negative charge the energy qV is a maximum there, so that midpoint is an unstable equilibrium for it.",
    evidence:
      "For two equal like charges the midpoint is a point where the field vanishes and the potential along the line joining them is a minimum.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.3",
    concept: "midpoint saddle point",
  },
  {
    key: "xii-int3-charge-inside-shielded-shell",
    text: "A point charge is placed at the centre of a hollow conducting spherical shell that carries a net charge of -2.0 microcoulomb. Which pair of statements about the field inside the shell is correct?",
    options: [
      "The field in the cavity is that of the central charge alone and the inner surface carries induced charge equal and opposite to it",
      "The field in the cavity is zero because the shell screens it, and the inner surface carries no charge at all",
      "The field in the cavity is twice that of the central charge and the inner surface carries the full -2.0 microcoulomb",
      "The field in the cavity is zero and the whole -2.0 microcoulomb gathers on the outer surface",
    ],
    correctIndex: 0,
    explanation:
      "The central charge pushes an equal and opposite charge onto the inner surface of the conductor, so the field in the cavity is due to the central charge alone while superposition leaves the field inside the metal exactly zero.",
    evidence:
      "A charge placed inside a conductor causes an equal and opposite charge to appear on its inner surface, leaving zero field within the metal.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.4",
    concept: "induction in hollow conductor",
  },
  {
    key: "xii-int3-series-capacitors-on-battery",
    text: "Two capacitors of 6.0 microfarad and 3.0 microfarad are connected in series across a 12 V battery of negligible internal resistance. Which pair of results is correct?",
    options: [
      "Equivalent capacitance 9.0 microfarad and 108 microcoulomb on each capacitor",
      "Equivalent capacitance 4.5 microfarad and 54 microcoulomb on each capacitor",
      "Equivalent capacitance 2.0 microfarad and 4 V across the 3.0 microfarad capacitor",
      "Equivalent capacitance 2.0 microfarad and 24 microcoulomb on each capacitor",
    ],
    correctIndex: 3,
    explanation:
      "In series the inverse capacitances add, giving (6 x 3)/(6 + 3) = 2.0 microfarad, and the same charge 2.0e-6 x 12 = 24 microcoulomb appears on each capacitor, which means 4 V across the 6.0 microfarad unit and 8 V across the 3.0 microfarad unit.",
    evidence:
      "Capacitors in series carry the same charge while their voltages add in proportion to the inverse of their capacitances.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.8",
    concept: "series capacitor charge sharing",
  },
  {
    key: "xii-int3-charging-energy-division",
    text: "A 100 microfarad capacitor is connected to a 20 V cell of internal resistance r and is left until no current flows. Which statement about the energy involved is correct?",
    options: [
      "All the work done by the cell is stored in the capacitor because no current flows once charging is complete",
      "Half the work done by the cell is stored in the capacitor and half is dissipated as heat in the internal resistance, for any value of r",
      "The energy stored decreases as the internal resistance of the cell is increased",
      "The energy stored is greater than the energy dissipated whenever the internal resistance is small",
    ],
    correctIndex: 1,
    explanation:
      "While charging, the potential driving the current falls steadily from the emf to zero, so the average driving potential is half the emf; half the total work goes into the capacitor and half into heat in the internal resistance independently of its value.",
    evidence:
      "Charging a capacitor through a resistance converts half the work done by the cell into energy stored in the capacitor and half into heat.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-8.9",
    concept: "energy sharing during charging",
  },
  {
    key: "xii-int3-parallel-cells-feeding-resistor",
    text: "Two cells of emf 2.0 V and 1.5 V, each of internal resistance 1.0 ohm, are connected in parallel and joined to a 12 ohm external resistor. What is the potential difference across that resistor?",
    options: ["1.75 V", "1.54 V", "1.68 V", "1.40 V"],
    correctIndex: 2,
    explanation:
      "Parallel connection gives an emf of (2.0/1.0 + 1.5/1.0)/(1/1.0 + 1/1.0) = 1.75 V and an internal resistance of 0.5 ohm, so the current is 1.75/12.5 = 0.14 A and the drop across the 12 ohm resistor is 0.14 x 12 = 1.68 V.",
    evidence:
      "Cells connected in parallel share the load, so their internal resistances combine as the parallel equivalent while the emf is weighted equally.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.2",
    concept: "parallel cells feeding load",
  },
  {
    key: "xii-int3-terminal-voltage-across-network",
    text: "A cell of emf 12 V and internal resistance 0.5 ohm supplies a parallel combination of 3.0 ohm and 6.0 ohm resistors. Which pair of values is correct?",
    options: [
      "Current drawn from the cell 4.8 A and terminal potential difference 9.6 V",
      "Current drawn from the cell 4.0 A and terminal potential difference 9.6 V",
      "Current drawn from the cell 4.8 A and terminal potential difference 12.0 V",
      "Current drawn from the cell 5.0 A and terminal potential difference 10.0 V",
    ],
    correctIndex: 0,
    explanation:
      "The parallel pair is 2.0 ohm, which with 0.5 ohm of internal resistance gives 2.5 ohm in total, so the cell delivers 12/2.5 = 4.8 A and the terminal voltage is 12 - 4.8 x 0.5 = 9.6 V, which is also the voltage across the combination.",
    evidence:
      "A cell delivers less than its emf at its terminals because the product of the current and its internal resistance is lost inside the cell.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.2",
    concept: "terminal voltage with network",
  },
  {
    key: "xii-int3-wire-geometry-resistances",
    text: "Two wires, one of length 2.0 m and cross-section 1.0 x 10^-6 m^2 and the other of length 4.0 m and cross-section 4.0 x 10^-6 m^2, are made of the same material at the same temperature. How are their resistances related?",
    options: ["R1 is four times R2", "R1 is twice R2", "R1 equals R2", "R1 is half of R2"],
    correctIndex: 1,
    explanation:
      "With the same material and temperature both wires have the same resistivity, so each resistance is proportional to L/A: the ratios are 2.0/1.0e-6 for the first and 4.0/4.0e-6 for the second, which differ by a factor of two.",
    evidence:
      "The resistance of a wire is set by the resistivity of the material together with its length and cross-sectional area, R = rho L / A.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-9.3",
    concept: "resistance geometry comparison",
  },
  {
    key: "xii-int3-heated-wire-current-change",
    text: "A metal wire has a resistance of 20 ohm at 20 degrees Celsius and a temperature coefficient of 0.005 per degree Celsius. It is connected across a 90 V d.c. supply. How does the current change when the wire heats up to 120 degrees Celsius?",
    options: [
      "It falls to 1.5 A, a ratio of 3 between the cold and hot currents",
      "It falls from 4.5 A to 3.0 A, a ratio of 1.5",
      "It stays at 4.5 A because the supply voltage is constant",
      "It falls from 3.0 A to 4.5 A, a ratio of 1.5",
    ],
    correctIndex: 3,
    explanation:
      "The hot resistance is 20(1 + 0.005 x 100) = 30 ohm, so with the 90 V supply held fixed the current drops from 90/20 = 4.5 A to 90/30 = 3.0 A, that is from 4.5 A to 3.0 A, a ratio of 1.5.",
    evidence:
      "The resistance of a metal wire rises with temperature according to R = R0 (1 + alpha dT).",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.3",
    concept: "temperature effect on current",
  },
  {
    key: "xii-int3-cells-series-versus-parallel",
    text: "Two identical cells, each of emf E and internal resistance r, are first connected in series and then reconnected in parallel. Which statement compares the two combinations correctly?",
    options: [
      "Series gives emf E and internal resistance r/2, while parallel gives emf 2E and internal resistance 2r",
      "Both combinations give the same emf and the same internal resistance",
      "Series gives emf 2E and internal resistance 2r, while parallel gives emf E and internal resistance r/2",
      "Series gives emf 2E and internal resistance r/2, while parallel gives emf E and internal resistance 2r",
    ],
    correctIndex: 2,
    explanation:
      "In series the emfs add and so do the internal resistances, giving 2E and 2r, whereas in parallel the emf remains the emf of one cell and the internal resistance falls to a quarter of r, that is r/2.",
    evidence:
      "Cells in series add their emfs and internal resistances, while cells in parallel keep the emf of one cell and reduce the internal resistance.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-9.4",
    concept: "series and parallel cells",
  },
  {
    key: "xii-int3-potentiometer-balance-emf",
    text: "A 10 ohm potentiometer wire is connected across a 6 V cell of negligible internal resistance and an unknown test cell is balanced at the 40 cm point of the 100 cm wire. What is the emf of the test cell?",
    options: ["2.4 V", "1.5 V", "4.0 V", "6.0 V"],
    correctIndex: 0,
    explanation:
      "The potential gradient along the wire is 6 V over 100 cm, that is 0.06 V per cm, and at the balance point the test cell drives no current, so its emf equals the potential drop over 40 cm, which is 2.4 V.",
    evidence:
      "A potentiometer measures an unknown emf by finding the balance length at which no current flows in the test circuit.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.4",
    concept: "potentiometer potential gradient",
  },
  {
    key: "xii-int3-magnetic-force-does-no-work",
    text: "An electron crosses a region of uniform magnetic field of 2.0 millitesla, moving perpendicular to the field at 2.0 x 10^7 m s^-1 and travelling 0.10 m inside the region. What work does the magnetic field do on it?",
    options: [
      "6.4 x 10^-16 J, because the force acts along the direction of motion",
      "6.4 x 10^-15 J, because the force acts along the direction of motion",
      "6.4 x 10^-14 J, because the electron is accelerated along its path",
      "Zero, because the magnetic force stays perpendicular to the velocity at every instant",
    ],
    correctIndex: 3,
    explanation:
      "The force evB of magnitude 6.4 x 10^-15 N is always perpendicular to the velocity, so it can only bend the path and never change the speed, and the work done over the 0.10 m path is zero.",
    evidence:
      "The magnetic force on a moving charge is always perpendicular to its velocity, so it changes the direction of motion but never the speed.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-10.2",
    concept: "zero magnetic work",
  },
  {
    key: "xii-int3-proton-magnetic-orbit-radius",
    text: "A proton is accelerated from rest through a potential difference of 100 V and then enters a uniform magnetic field of 0.20 T perpendicular to its velocity. What is the radius of the circular path it describes?",
    options: ["3.6 mm", "7.2 mm", "14.4 mm", "2.5 mm"],
    correctIndex: 1,
    explanation:
      "From half mv^2 = qV the speed is 1.38 x 10^5 m s^-1, and setting the magnetic force equal to the centripetal force gives r = mv/qB = 1.67e-27 x 1.38e5 divided by 1.6e-19 x 0.20, which is 7.2 x 10^-3 m.",
    evidence:
      "A charged particle moving perpendicular to a uniform magnetic field describes a circle of radius r = mv/qB.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-10.3",
    concept: "radius of magnetic orbit",
  },
  {
    key: "xii-int3-parallel-wires-same-direction",
    text: "Two long straight wires run parallel to each other and carry currents in the same direction. Which statement about the interaction between them is correct?",
    options: [
      "They repel each other, because each wire produces a field along the current in the other wire",
      "They attract each other, because the field of one wire adds to the field of the other between the wires",
      "They attract each other, because the field produced by one wire is perpendicular to the current in the other and the force on that current is directed towards the first wire",
      "They exert no force on each other, because the currents are in the same direction",
    ],
    correctIndex: 2,
    explanation:
      "Between the two wires the fields they produce oppose one another and beyond each wire they point the other way, so the current in one wire always sits in the field of the other and feels a force that draws the wires together.",
    evidence:
      "Two long parallel wires carrying currents in the same direction attract each other while currents in opposite directions repel.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-10.3",
    concept: "parallel current attraction",
  },
  {
    key: "xii-int3-rotating-coil-emf-statements",
    text: "A flat coil of N turns rotates about an axis in its plane in a uniform magnetic field. Three statements are made. (I) The induced emf is maximum when the plane of the coil is perpendicular to the field. (II) The induced emf falls to zero when the plane of the coil is perpendicular to the field. (III) Doubling the rate of rotation doubles the average induced emf. Which statement is NOT correct?",
    options: [
      "Only II is incorrect",
      "Only I is incorrect",
      "Only III is incorrect",
      "I and III are incorrect",
    ],
    correctIndex: 1,
    explanation:
      "The emf depends on the rate of change of flux linkage, and when the plane of the coil is perpendicular to the field the flux is at its maximum and momentarily unchanging, so the emf is zero there and greatest where the flux passes through zero.",
    evidence:
      "The induced emf in a rotating coil is proportional to the rate of change of flux linkage, so it is greatest where the flux passes through zero.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-11.1",
    concept: "rotating coil emf",
  },
  {
    key: "xii-int3-rms-emf-of-generator-coil",
    text: "A coil of 200 turns, each of area 5.0 x 10^-3 m^2, rotates in a uniform field of 0.30 T at 150 revolutions per minute about an axis perpendicular to the field. What is the rms induced emf?",
    options: ["4.71 V", "6.66 V", "3.33 V", "2.36 V"],
    correctIndex: 2,
    explanation:
      "The angular speed is 2 pi x 150/60 = 15.7 rad s^-1, so the peak emf is NAB omega = 200 x 5.0 x 10^-3 x 0.30 x 15.7 = 4.71 V and dividing this by the square root of 2 gives an rms value of 3.33 V.",
    evidence:
      "The emf induced in a rotating coil is NAB omega cos omega t and its rms value is the peak value divided by the square root of 2.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-11.1",
    concept: "rms induced emf",
  },
  {
    key: "xii-int3-rising-frequency-effects-order",
    text: "The frequency of an a.c. supply applied to a coil of resistance R and inductance L is raised steadily from zero. Four effects are listed. (I) The inductive reactance 2 pi f L starts to grow. (II) The total impedance of the coil increases. (III) The current amplitude in the coil decreases. (IV) The power factor cos phi falls away from unity. In which order do these effects occur?",
    options: ["IV, III, II, I", "I, II, III, IV", "II, I, IV, III", "III, IV, I, II"],
    correctIndex: 1,
    explanation:
      "Raising the frequency makes the reactance 2 pi f L grow, the impedance sqrt(R^2 + X_L^2) then rises, the amplitude V/Z of the current must fall, and since cos phi = R/Z the power factor decreases from its initial value of 1.",
    evidence:
      "The inductive reactance 2 pi f L grows with frequency, so the impedance and the phase angle of a coil both increase as frequency rises.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-11.2",
    concept: "effects of rising frequency",
  },
  {
    key: "xii-int3-motional-emf-circuit-current",
    text: "A conducting rod of length 0.20 m slides along horizontal rails with a speed of 2.0 m s^-1 in a vertical magnetic field of 0.50 T, and the circuit completed through the rails has a total resistance of 0.40 ohm. What current flows in it?",
    options: ["0.20 A", "0.25 A", "1.00 A", "0.50 A"],
    correctIndex: 3,
    explanation:
      "The motional emf generated in the rod is B l v = 0.50 x 0.20 x 2.0 = 0.20 V, and this drives a current of 0.20/0.40 = 0.50 A through the rails and the rod that together provide the circuit resistance.",
    evidence:
      "A conductor of length l moving with velocity v across a field B develops a motional emf equal to B l v.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-11.2",
    concept: "motional emf current",
  },
  {
    key: "xii-int3-opening-switch-self-induction",
    text: "In a circuit where a coil of inductance L is connected to a battery, the switch is opened while a steady current is flowing. Four events are listed. (I) The current through the coil begins to fall, so the magnetic flux linked with it begins to decrease. (II) A self-induced emf appears in the coil that opposes this decrease. (III) An induced current flows through the coil in the direction of the current that was there before. (IV) Part of the energy stored in the magnetic field is returned to the battery. In which order do these events occur?",
    options: ["II, I, IV, III", "III, IV, I, II", "I, II, III, IV", "IV, III, II, I"],
    correctIndex: 2,
    explanation:
      "The collapse of current is the starting event, and it is the decrease of flux that produces the opposing self-induced emf, which drives a current that keeps the original direction and returns part of the stored field energy to the battery circuit.",
    evidence:
      "The self-induced emf of a coil opposes any change of the current through it, and the energy of the collapsing field is returned to the circuit.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-11.3",
    concept: "self induction at switching",
  },
  {
    key: "xii-int3-series-rl-impedance-current",
    text: "A 40 ohm resistor is connected in series with a coil of inductance 0.10 H across a 220 V, 50 Hz supply, taking pi as 3.14. Which pair of values is correct?",
    options: ["71.4 ohm and 3.1 A", "50.8 ohm and 4.3 A", "40.0 ohm and 5.5 A", "31.4 ohm and 7.0 A"],
    correctIndex: 1,
    explanation:
      "The reactance is 2 pi f L = 31.4 ohm and it combines with the resistance in quadrature, so Z = sqrt(40^2 + 31.4^2) = 50.8 ohm and the current is 220/50.8 = 4.3 A.",
    evidence:
      "The impedance of a series resistance and inductance is the square root of the sum of the squares of R and the reactance 2 pi f L.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-12.2",
    concept: "series rl impedance",
  },
  {
    key: "xii-int3-resonance-capacitor-voltage",
    text: "A series RLC circuit has R = 25 ohm, L = 0.10 H and C = 10 microfarad and is connected to a 250 V rms supply. What is the rms voltage across the capacitor when the circuit is at resonance?",
    options: ["250 V", "25 V", "10 V", "1000 V"],
    correctIndex: 3,
    explanation:
      "At resonance the reactances cancel, so the current is the largest possible at 250/25 = 10 A, and the capacitive reactance 1/(2 pi f C) = 100 ohm at f = 159 Hz makes the capacitor voltage 10 x 100 = 1000 V, far above the supply voltage.",
    evidence:
      "At resonance in a series RLC circuit the inductive and capacitive reactances cancel, leaving an impedance equal to the resistance alone.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-12.3",
    concept: "voltage magnification at resonance",
  },
  {
    key: "xii-int3-hydrogen-transition-comparison",
    text: "One hydrogen atom in the n=4 level makes the transition to n=2 while another in the n=3 level makes the transition to n=1. Which pair of statements about the two emitted photons is correct?",
    options: [
      "The first photon has energy 2.55 eV and wavelength 486 nm in the Balmer series, while the second has energy 12.1 eV and wavelength about 103 nm in the Lyman series",
      "The first photon has energy 12.1 eV and wavelength 486 nm in the Lyman series, while the second has energy 2.55 eV and wavelength about 103 nm in the Balmer series",
      "Both photons carry the same energy of 2.55 eV because each atom makes only one downward step",
      "Both photons have the same wavelength of 486 nm because the n=4 and n=3 levels are very close together",
    ],
    correctIndex: 0,
    explanation:
      "The energy of a photon is 13.6 eV times the difference of the inverse squares of the two levels: 13.6 x 3/16 = 2.55 eV for the 4 to 2 step giving 486 nm, and 13.6 x 8/9 = 12.1 eV for the 3 to 1 step giving about 103 nm.",
    evidence:
      "The lines of the hydrogen spectrum fall in series, and the photon energy is 13.6 eV times the difference of the inverse squares of the two level numbers.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-15.1",
    concept: "hydrogen series comparison",
  },
  {
    key: "xii-int3-activity-after-three-half-lives",
    text: "A radioactive sample has an initial activity of 800 Bq and a half-life of 10 days. Which pair of statements about the same sample 30 days later is correct?",
    options: [
      "The activity falls to 400 Bq because only one half-life has taken effect",
      "The activity falls to 200 Bq because one quarter of the nuclei remain undecayed",
      "The activity falls to 100 Bq because only one eighth of the nuclei remain undecayed",
      "The activity falls to 50 Bq because activity varies as the square of the number of half-lives",
    ],
    correctIndex: 2,
    explanation:
      "Thirty days is three half-lives, so the fraction of undecayed nuclei is (1/2)^3 = 1/8 and since activity is proportional to the number of undecayed nuclei per second, the activity becomes 800/8 = 100 Bq.",
    evidence:
      "Activity falls to half its value in one half-life, so after n half-lives it is 1/2^n of the initial value.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-16.3",
    concept: "activity after half-lives",
  },
];