import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-int-force-with-dielectric",
    text: "Charges of +2.0 x 10^-6 C each are held 0.30 m apart in air and repel each other. The space between them is then filled with a dielectric of dielectric constant 4, and at the same time their separation is increased to 0.60 m. The new force between them is what fraction of the original force?",
    options: [
      "One sixteenth of the original force",
      "One quarter of the original force",
      "One half of the original force",
      "Four times the original force",
    ],
    correctIndex: 0,
    explanation:
      "The original force is k q^2 divided by r^2, that is (9 x 10^9)(4 x 10^-12)/(0.09) = 0.40 N, and filling the gap with a dielectric divides this by 4 while doubling the separation divides it by a further 4, leaving 0.40/16 = 0.025 N.",
    evidence:
      "The force between two point charges is reduced in a medium other than free space by the dielectric constant, and it varies inversely as the square of the distance between the charges.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.1",
    concept: "force with dielectric",
  },
  {
    key: "xii-int-charge-sharing-between-spheres",
    text: "Two identical conducting spheres, one carrying +2.0 x 10^-6 C and the other -2.0 x 10^-6 C, are held apart in air but joined by a thin wire. When the wire is taken away the spheres are 0.20 m apart, and each now carries +1.0 x 10^-6 C. Taking the Coulomb constant as 9 x 10^9 N m^2 C^-2, what force does each sphere exert on the other?",
    options: ["0.1125 N", "0.225 N", "0.90 N", "0.45 N"],
    correctIndex: 1,
    explanation:
      "The two charges are shared equally, so each sphere ends with +1.0 x 10^-6 C, and the Coulomb force is then (9 x 10^9)(1.0 x 10^-6)^2 divided by (0.20)^2, which is 0.225 N. The 0.90 N value belongs to the charges before they were joined.",
    evidence:
      "Identical conducting spheres connected together share the total charge equally, and the force between them then follows from Coulomb's law.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-8.1",
    concept: "charge sharing between spheres",
  },
  {
    key: "xii-int-field-null-point-two-charges",
    text: "Between two like charges of +2.0 x 10^-6 C and +8.0 x 10^-6 C held 0.30 m apart in air, the electric field on the line that joins them is zero at a point. How far is that point from the smaller charge?",
    options: ["0.20 m", "0.15 m", "0.24 m", "0.10 m"],
    correctIndex: 3,
    explanation:
      "Between like charges the two fields oppose one another, so the null point satisfies 2 divided by x^2 = 8 divided by (0.30 - x)^2. Taking square roots gives 0.30 - x = 2x, hence x = 0.10 m, which lies nearer the smaller charge as it must.",
    evidence:
      "Between two like charges the electric field vanishes only where the two contributions are equal and opposite, a point that lies closer to the smaller charge.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.3",
    concept: "null point between charges",
  },
  {
    key: "xii-int-field-at-the-midpoint",
    text: "Two charges of equal magnitude, +q and -q, are held a distance 2d apart and the field at their midpoint is E. If both charges are then changed to +q while the separation is left unchanged, the field at that same midpoint becomes",
    options: [
      "zero, because the two equal field contributions now point in opposite directions",
      "the same as E",
      "twice E",
      "half of E",
    ],
    correctIndex: 0,
    explanation:
      "At the midpoint of two unlike charges the fields add to 2kq/d^2, whereas at the midpoint of two like charges the two contributions are equal in size and opposite in direction, so they cancel and the resultant field there is zero.",
    evidence:
      "The electric field at the midpoint of two like charges is zero, since the fields there are equal in magnitude but opposite in direction.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.3",
    concept: "field at the midpoint",
  },
  {
    key: "xii-int-superposition-of-potentials",
    text: "Charges +2.0 x 10^-6 C and +6.0 x 10^-6 C are held 0.30 m apart in air. Taking the Coulomb constant as 9 x 10^9 N m^2 C^-2, what is the potential at the midpoint of the line joining them?",
    options: ["2.4 x 10^5 V", "9.6 x 10^5 V", "4.8 x 10^5 V", "1.6 x 10^5 V"],
    correctIndex: 2,
    explanation:
      "The midpoint lies 0.15 m from each charge and potential is a scalar, so the two contributions simply add: 9 x 10^9 x 2.0 x 10^-6 divided by 0.15 is 1.2 x 10^5 V and 9 x 10^9 x 6.0 x 10^-6 divided by 0.15 is 3.6 x 10^5 V, giving 4.8 x 10^5 V.",
    evidence:
      "The potential at a point due to a point charge is k q divided by the distance from the charge, and potentials due to separate charges add arithmetically.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.8",
    concept: "superposition of potentials",
  },
  {
    key: "xii-int-work-against-potential-rise",
    text: "Fixed charges of +4.0 x 10^-6 C and +9.0 x 10^-6 C stand 0.30 m apart in air. A charge of +2.0 x 10^-6 C is moved slowly from the midpoint of the line joining them to a point 0.10 m from the +9.0 x 10^-6 C charge. Taking the Coulomb constant as 9 x 10^9 N m^2 C^-2, what work is done against the electric field in moving it?",
    options: ["0.21 J", "0.42 J", "0.84 J", "0.36 J"],
    correctIndex: 1,
    explanation:
      "At the midpoint the potential is (9 x 10^9)(13 x 10^-6)/0.15 = 7.8 x 10^5 V, while at the second point it is (9 x 10^9)[(9 x 10^-6)/0.10 + (4 x 10^-6)/0.20] = 9.9 x 10^5 V, so the work done is the charge times the rise in potential, (2.0 x 10^-6)(2.1 x 10^5) = 0.42 J.",
    evidence:
      "The work required to move a charge q between two points is q multiplied by the difference between the potentials at those points.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-8.8",
    concept: "work against potential rise",
  },
  {
    key: "xii-int-capacitor-charging-after-time-constant",
    text: "Charging a capacitance of 4.0 x 10^-6 F through a resistance of 1000 ohm from a cell of emf 12 V whose internal resistance is negligible, the current a time equal to the time constant RC after the circuit is closed is",
    options: ["6.0 x 10^-3 A", "8.8 x 10^-3 A", "4.4 x 10^-3 A", "2.4 x 10^-3 A"],
    correctIndex: 2,
    explanation:
      "The initial current is 12 V divided by 1000 ohm, that is 1.2 x 10^-2 A, and the charging current falls as the initial value multiplied by e raised to minus t over RC, so one time constant later it is 1.2 x 10^-2 divided by 2.718, which is 4.4 x 10^-3 A.",
    evidence:
      "While a capacitor is being charged through a resistance its current falls as the initial value multiplied by the factor e raised to minus t over RC.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.9",
    concept: "charging current decay",
  },
  {
    key: "xii-int-capacitor-charging-statements",
    text: "Three statements describe the charging of a capacitor through a resistance from a cell. (I) The charging current is greatest at the moment the circuit is closed and has fallen nearly to zero once the capacitor is full. (II) The heat produced in the resistance while charging equals the energy finally stored in the capacitor. (III) Using a smaller resistance raises the final potential difference across the capacitor. Which statement is NOT correct?",
    options: [
      "Only I is incorrect",
      "Only II is incorrect",
      "Only III is incorrect",
      "II and III are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "Whatever resistance is used the capacitor ends at the emf of the cell, so statement III fails. The other two hold, because the current begins at its largest value and dies away, and the heat in the resistance is one half QV, exactly the energy stored.",
    evidence:
      "The energy stored in a charged capacitor is one half QV while the work done by the cell in charging it is QV, so half of that work appears as heat.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.9",
    concept: "charging process statements",
  },
  {
    key: "xii-int-ohms-law-with-temperature",
    text: "A metal conductor draws 2.0 A when 10 V is applied at 20 degree C. The applied potential difference is then raised to 15 V while the conductor is heated to 100 degree C. The temperature coefficient of resistivity of the metal is 5.0 x 10^-3 per degree C. The current the conductor now draws is",
    options: ["3.00 A", "1.43 A", "2.00 A", "2.14 A"],
    correctIndex: 3,
    explanation:
      "The original resistance is 10 V divided by 2.0 A, that is 5.0 ohm, and after a rise of 80 degree C it becomes 5.0(1 + 5.0 x 10^-3 x 80) = 5.0(1.4) = 7.0 ohm, so the new current is 15 V divided by 7.0 ohm, which is 2.14 A.",
    evidence:
      "For a metal the resistance at temperature T is R0(1 + alpha(T - T0)), and Ohm's law then gives the current for the new applied voltage.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.2",
    concept: "ohms law with temperature",
  },
  {
    key: "xii-int-two-conductors-compared",
    text: "Conductor A carries 3.0 A when 6.0 V is applied to it, while conductor B carries 3.0 A when 12.0 V is applied to it. Both are wires of the same material, the same length and the same cross-sectional area. Compare the two wires.",
    options: [
      "A has the larger resistivity, so from any common supply A will draw the larger current",
      "B has the larger resistivity, so from any common supply B will draw the larger current",
      "A has the smaller resistivity, so from any common supply A will draw the larger current",
      "Both have the same resistivity, so they draw equal currents from a common supply",
    ],
    correctIndex: 2,
    explanation:
      "At the same current the wire that needs the larger voltage has the larger resistance, and for wires of equal length and area that larger resistance means a larger resistivity, so B is the more resistive wire and A, placed on a common supply, will draw the larger current.",
    evidence:
      "Ohm's law fixes the resistance of a conductor as its potential difference divided by its current, and for wires of equal length and area these resistances stand in the ratio of their resistivities.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-9.2",
    concept: "resistivity from ohm law",
  },
  {
    key: "xii-int-loaded-cell-terminal-voltage",
    text: "One cell of emf 12 V and internal resistance 1.0 ohm supplies two resistors of 5.0 ohm each connected in parallel. The potential difference across the parallel pair is",
    options: ["9.6 V", "8.6 V", "6.0 V", "4.0 V"],
    correctIndex: 1,
    explanation:
      "The parallel pair works out at 2.5 ohm, so with the internal resistance the circuit total is 3.5 ohm and the cell supplies 12/3.5 = 3.43 A. That current across 2.5 ohm leaves 8.6 V on the pair, below the emf because a further 3.4 V is dropped inside the cell.",
    evidence:
      "The terminal potential difference of a loaded cell is smaller than its emf, because part of the emf is used in driving current through the internal resistance.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.4",
    concept: "loaded cell terminal voltage",
  },
  {
    key: "xii-int-parallel-cells-under-load",
    text: "Two cells in this arrangement are joined in parallel with their like terminals, and a 1.0 ohm load is connected across the combination. The first cell has an emf of 12 V and an internal resistance of 1.0 ohm, while the second has an emf of 6 V and an internal resistance of 2.0 ohm. The currents they supply are",
    options: [
      "the terminal potential difference settles at 6 V, so the 6 V cell supplies no current while the 12 V cell supplies 6 A to the load",
      "those of the two cells in the ratio of their internal resistances, whatever the load",
      "such that the 12 V cell takes current back from the load while the 6 V cell supplies the whole load current",
      "both zero, since the terminal potential difference settles at 12 V",
    ],
    correctIndex: 0,
    explanation:
      "The two cells share one terminal voltage, and the load settles it at 6 V, the value of the smaller emf. The 6 V cell then drives (6 - 6)/2 = 0 A while the 12 V cell drives (12 - 6)/1 = 6 A, and that whole 6 A passes through the 1.0 ohm load.",
    evidence:
      "Cells connected in parallel share a common terminal potential difference, so a cell whose emf equals that value supplies no current whatever its internal resistance.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-9.4",
    concept: "parallel cells under load",
  },
  {
    key: "xii-int-flux-linkage-three-angles",
    text: "A coil of 20 turns and area 0.050 m^2 lies in a uniform magnetic field of flux density 0.40 T. When the field makes an angle of 0 degrees, 60 degrees and 90 degrees with the normal to the coil, the flux linked with it is in turn",
    options: [
      "0.40 Wb-turn, 0.20 Wb-turn and 0 Wb-turn in that order",
      "0.40 Wb-turn, 0.35 Wb-turn and 0.40 Wb-turn in that order",
      "0.20 Wb-turn, 0.40 Wb-turn and 0 Wb-turn in that order",
      "0.40 Wb-turn, 0.80 Wb-turn and 0 Wb-turn in that order",
    ],
    correctIndex: 0,
    explanation:
      "The flux linked is N B A cos theta, and N B A works out as (20)(0.40)(0.050) = 0.40 Wb-turn, so the three values are 0.40 x cos 0 degrees, 0.40 x cos 60 degrees and 0.40 x cos 90 degrees, that is 0.40, 0.20 and 0 Wb-turn.",
    evidence:
      "The flux linked with a coil of N turns is N B A cos theta, where theta is the angle between the field and the normal to the coil.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 93,
    outcome: "PHY-10.2",
    concept: "flux linkage and angle",
  },
  {
    key: "xii-int-electron-accelerated-then-deflected",
    text: "An electron of mass 9.1 x 10^-31 kg carrying a charge of 1.6 x 10^-19 C is accelerated from rest through a potential difference of 100 V and then enters a uniform magnetic field of 2.0 x 10^-3 T with its velocity perpendicular to the field. The radius of the circular path it then follows is",
    options: ["3.4 x 10^-2 m", "8.5 x 10^-3 m", "1.7 x 10^-2 m", "1.7 x 10^-1 m"],
    correctIndex: 2,
    explanation:
      "The electron gains kinetic energy qV = 1.6 x 10^-17 J, so its speed becomes the square root of 2qV/m = 5.9 x 10^6 m s^-1, and the radius is then mv divided by qB, that is (9.1 x 10^-31)(5.9 x 10^6)/[(1.6 x 10^-19)(2.0 x 10^-3)], which is 1.7 x 10^-2 m.",
    evidence:
      "A charge accelerated through a potential difference V gains kinetic energy qV, and a charge moving perpendicular to a magnetic field describes a circle of radius mv divided by qB.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-10.3",
    concept: "electron accelerated then deflected",
  },
  {
    key: "xii-int-radii-for-equal-energy",
    text: "A proton and an alpha particle are given the same kinetic energy and are then fired into the same uniform magnetic field with their velocities perpendicular to it. The alpha particle has four times the mass and twice the charge of the proton. Compare the radii of the circles they describe.",
    options: [
      "The alpha particle describes the larger circle, twice the radius of the proton",
      "Both describe circles of the same radius, because at a given kinetic energy the radius varies as the square root of the mass divided by the charge and for the alpha particle those two changes cancel",
      "The proton describes the larger circle, four times the radius of the alpha particle",
      "The alpha particle describes the smaller circle, half the radius of the proton",
    ],
    correctIndex: 1,
    explanation:
      "For a given kinetic energy the radius is the square root of 2 m K divided by qB, so it varies as the square root of the mass divided by the charge. For the alpha particle that ratio is the square root of 4 divided by 2, which is 1, the same as for the proton, so the two circles match.",
    evidence:
      "For a particle of given kinetic energy entering a field perpendicular to its path, the radius of the circle it describes is proportional to the square root of its mass divided by its charge.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-10.3",
    concept: "radii for equal energy",
  },
  {
    key: "xii-int-coil-orientation-and-emf",
    text: "A coil of N turns is placed in a uniform magnetic field whose strength is held constant. In the first case the plane of the coil is perpendicular to the field and in the second case it is parallel to the field. In both cases the field is then switched off in the same short time. Compare the induced emfs.",
    options: [
      "The first emf is finite and the second is zero, because flux links the coil in the first arrangement but never enters the second one",
      "Both emfs are equal, because the strength of the field is the same in the two cases",
      "The second emf is the larger of the two, because a coil lying along the field gathers more flux",
      "Both emfs are zero, because nothing has moved and an emf appears only when a conductor cuts field lines",
    ],
    correctIndex: 0,
    explanation:
      "The emf depends on the rate of change of the flux that actually links the coil. With the plane perpendicular to the field the whole area is linked and switching the field off gives a finite emf, while a coil lying parallel to the field encloses no flux at all, so there is nothing to change.",
    evidence:
      "An emf is induced in a circuit only while the magnetic flux linking it is changing, and the flux linked is B A cos theta between the field and the normal to the coil.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-11.1",
    concept: "coil orientation and emf",
  },
  {
    key: "xii-int-steps-for-induced-current",
    text: "A coil of 150 turns and area 0.030 m^2 lies in a uniform magnetic field of flux density 0.60 T with the field normal to the coil. The field is switched off in 0.025 s and the coil has a total resistance of 5.0 ohm. Which ordered steps give the current that flows in the coil while the field dies away?",
    options: [
      "Find the flux as B A, multiply by the number of turns to get the flux linkage, divide by the time to get the emf, then divide by the resistance to get the current",
      "Find the flux as B divided by A, multiply by the number of turns and by the time to get the emf, then divide by the resistance to get the current",
      "Find the flux as N B A, multiply it by the resistance and divide by the time to get the current",
      "Find the emf as N B A divided by the time, then multiply by the resistance to get the current",
    ],
    correctIndex: 0,
    explanation:
      "The steps run B A for the flux, N B A for the flux linkage, (N B A)/t for the emf of 108 V and finally that emf divided by R for the current of 21.6 A. Dividing the flux by the area, or multiplying by the resistance at any stage, produces a quantity of the wrong kind.",
    evidence:
      "Faraday's law states that the emf induced in a coil equals the number of turns multiplied by the rate of change of the flux linked with it, and the current then follows from Ohm's law.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-11.1",
    concept: "steps for induced current",
  },
  {
    key: "xii-int-transformer-with-open-primary",
    text: "An alternating supply drives the primary coil of a transformer whose secondary coil is joined to a load. The primary is then disconnected while the secondary stays joined to the load. From that moment the emf in the secondary is",
    options: [
      "zero, because there is no longer any changing flux in the core for the secondary to link",
      "still present for a while, because the energy stored in the core continues to drive the load",
      "a steady direct emf, because the flux remaining in the core does not reverse",
      "larger than before, because the collapse of the core flux is faster than the build up",
    ],
    correctIndex: 0,
    explanation:
      "Once the primary current stops the flux in the core no longer changes, and since an induced emf appears only while the linked flux is changing, the secondary delivers nothing even though its circuit remains closed through the load.",
    evidence:
      "An alternating current in the primary coil produces a changing flux in the iron core, and it is this changing flux that induces an emf in the secondary coil.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-11.3",
    concept: "transformer with open primary",
  },
  {
    key: "xii-int-frequency-and-core-flux",
    text: "An alternating supply of fixed voltage drives a transformer whose turns are not altered. The frequency of the supply is then doubled while the supply voltage stays the same. Compare the flux in the iron core and the emf induced in the secondary coil.",
    options: [
      "The flux in the core is halved while the emf in the secondary is unchanged, because that emf is fixed by the turns ratio and the applied voltage rather than by the frequency",
      "The flux in the core and the emf in the secondary are both halved",
      "The flux in the core and the emf in the secondary are both doubled",
      "The flux in the core is unchanged while the emf in the secondary is doubled",
    ],
    correctIndex: 0,
    explanation:
      "The flux in the core varies inversely with the frequency for a given applied voltage, so doubling the frequency halves it. The secondary emf, however, is fixed by the ratio of the voltages across the two coils, and with the supply voltage and the turns both unchanged that ratio, and so the secondary emf, is untouched.",
    evidence:
      "A transformer transfers power from the primary to the secondary coil by the turns ratio, and the changing flux in its core is set by the applied voltage and the frequency of the supply.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 93,
    outcome: "PHY-11.3",
    concept: "frequency and core flux",
  },
  {
    key: "xii-int-steps-for-line-loss",
    text: "Consider a power station that delivers a fixed power to a distant city and its engineers raise the voltage along the transmission line before sending the power. Which ordered steps show how the loss in the line is affected by that change?",
    options: [
      "Multiply the line resistance by each voltage in turn, square the result and compare the two values",
      "Add the line resistance to each voltage, square the sum and compare, since the loss depends on the total opposition",
      "Compare the two voltages alone, since the heat produced in a line is fixed by the voltage sent along it",
      "Work out the current from the power and the voltage at each stage, square each current, multiply by the line resistance and compare the two losses",
    ],
    correctIndex: 3,
    explanation:
      "For a fixed power the current follows from P divided by V, so a higher voltage means a smaller current, and since the heat produced in a line is I^2 R the loss falls as the square of that current. Nothing about the resistance or the transmitted power needs to change for this to hold.",
    evidence:
      "Electric power is sent over long distances at high voltage and low current so that the I^2 R energy loss in the cables is reduced.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-11.3",
    concept: "steps for line loss",
  },
  {
    key: "xii-int-power-at-series-resonance",
    text: "A series circuit contains a resistance of 40 ohm, an inductive reactance of 30 ohm and a capacitive reactance of 30 ohm at the frequency of the supply, which is 100 V. Taking rms values throughout, the average power taken from the supply is",
    options: ["125 W", "250 W", "100 W", "500 W"],
    correctIndex: 1,
    explanation:
      "The two reactances cancel exactly, so the impedance of the circuit is the resistance alone, that is 40 ohm, and the current is 100/40 = 2.5 A. The average power is then the current squared multiplied by the resistance, (2.5)^2 x 40, which is 250 W.",
    evidence:
      "At resonance the inductive and capacitive reactances of a series circuit cancel, the impedance falls to the resistance alone and the power taken is the current squared multiplied by that resistance.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-12.2",
    concept: "power at series resonance",
  },
  {
    key: "xii-int-power-in-reactive-branches",
    text: "Three statements about alternating current in circuit elements are made. (I) In a pure capacitor the current leads the applied voltage by 90 degrees and the average power taken over a complete cycle is zero. (II) In a pure inductance the applied voltage leads the current by 90 degrees and the average power taken over a cycle is also zero. (III) A coil that has both resistance and inductance draws no average power, because the current lags behind the voltage in it. Which statement is NOT correct?",
    options: [
      "Only I is incorrect",
      "Only II is incorrect",
      "Only III is incorrect",
      "I and II are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "A coil that has resistance dissipates real power equal to I squared R in that resistance during every cycle, whatever lag its inductance introduces, so statement III fails. The other two hold, since in a purely reactive element the current and the voltage are a quarter cycle apart and their average product over a cycle vanishes.",
    evidence:
      "A pure capacitance or a pure inductance takes no average power because current and voltage are out of step, while a resistance consumes real power proportional to the square of the current.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-12.2",
    concept: "power in reactive branches",
  },
  {
    key: "xii-int-activity-after-half-lives",
    text: "A radioactive sample has an initial activity of 3.2 x 10^4 per second and a half-life of 5.0 days. What is the activity of the sample 15 days later?",
    options: [
      "8.0 x 10^3 per second",
      "1.0 x 10^4 per second",
      "1.6 x 10^3 per second",
      "4.0 x 10^3 per second",
    ],
    correctIndex: 3,
    explanation:
      "Fifteen days is three half-lives of 5.0 days, and the activity is halved in each of them, so the value now is 3.2 x 10^4 divided by 2 x 2 x 2, which is 4.0 x 10^3 per second.",
    evidence:
      "The activity of a radioactive sample falls by half for every half-life that passes, so after n half-lives the remaining activity is the initial value multiplied by one half raised to the power n.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-16.3",
    concept: "activity after half-lives",
  },
  {
    key: "xii-int-decay-constant-and-activity",
    text: "A sample contains 8.0 x 10^20 undecayed nuclei of a radionuclide whose half-life is 10 hours. Taking the decay constant as 0.693 divided by the half-life expressed in seconds, the activity of the sample is",
    options: [
      "5.54 x 10^16 per second",
      "1.54 x 10^15 per second",
      "8.00 x 10^20 per second",
      "1.54 x 10^16 per second",
    ],
    correctIndex: 3,
    explanation:
      "Ten hours is 36000 s, so the decay constant is 0.693/36000 = 1.925 x 10^-5 per second, and the activity is that constant multiplied by the nuclei present, (1.925 x 10^-5)(8.0 x 10^20), which is 1.54 x 10^16 per second.",
    evidence:
      "The activity of a sample is the decay constant lambda multiplied by the number of undecayed nuclei present, and lambda is 0.693 divided by the half-life.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-16.3",
    concept: "decay constant and activity",
  },
  {
    key: "xii-int-capacitor-charging-current",
    text: "An uncharged capacitor is connected directly across a cell of emf 12 V whose internal resistance is 20 ohm. Which account of the current that follows the connection is correct?",
    options: [
      "The current is largest at the start, when the uncharged capacitor behaves like a short circuit, and it falls to zero as the potential difference across it reaches the emf",
      "The current is zero at the start and rises to a maximum as the capacitor approaches its final charge",
      "The current stays at 12 V divided by 20 ohm for as long as the charging continues",
      "The current is largest at the start and stays at that value, because the internal resistance fixes the cell voltage",
    ],
    correctIndex: 0,
    explanation:
      "At the first instant there is no potential difference across the capacitor, so the whole emf acts on the internal resistance and the current has its maximum value of 0.6 A. As the capacitor charges and its potential difference rises to the emf, the current falls smoothly to zero, when the capacitor behaves as an open circuit.",
    evidence:
      "The internal resistance of a cell limits the current that flows when a capacitor is first connected, while the charge it finally carries depends only on its capacitance and the emf of the cell.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-9.4",
    concept: "capacitor charging current",
  },
];