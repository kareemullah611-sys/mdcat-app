import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-cap-volt-unit-joule-per-coulomb",
    text: "The volt is the SI unit in which electric potential is measured. In base units, which expression describes one volt?",
    options: [
      "One newton per coulomb",
      "One coulomb per joule",
      "One joule per coulomb",
      "One joule per coulomb per metre",
    ],
    correctIndex: 2,
    explanation:
      "Potential is the work done per unit charge, V = W/q, so a joule of work done for each coulomb of charge corresponds to a potential difference of one volt.",
    evidence:
      "The unit of potential difference is the volt, which is equal to one joule of work done per coulomb of charge.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-8.7",
    concept: "unit of potential",
  },
  {
    key: "xii-cap-potential-work-per-unit-charge",
    text: "Two statements describe the potential at a point. (I) It is the work done in bringing a unit positive charge from infinity to that point. (II) The total work done in bringing a positive charge to that point is the same for every size of test charge. Which combination is correct?",
    options: [
      "Only I is correct",
      "Only II is correct",
      "Both I and II are correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "Statement I is the definition, since potential is the work done per unit charge brought from infinity. That work grows in proportion to the charge brought, so the total work is not the same for charges of different size and statement II fails.",
    evidence:
      "The potential at a point is the work done in bringing a unit positive charge from infinity to that point, where the zero of potential is taken.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.7",
    concept: "definition of potential",
  },
  {
    key: "xii-cap-potential-falls-slower-than-field",
    text: "A point charge q sits alone in free space. At distance r from it the field falls as 1/r^2 while the potential falls as 1/r. Which comparison of the two is correct?",
    options: [
      "The potential is always numerically larger than the field, because the two quantities differ in their units",
      "The potential is still appreciable at distances where the field has already become very small, because 1/r falls far more slowly than 1/r^2",
      "The field stays larger than the potential at large distances, because a vector quantity always exceeds a scalar one",
      "Both reach zero at the same distance, because a field and a potential fall away together",
    ],
    correctIndex: 1,
    explanation:
      "The inverse square dependence of the field makes it drop far more quickly with distance than the inverse first power of the potential, so far from the charge the field is negligible while the potential is still appreciable.",
    evidence:
      "The field due to a point charge falls as 1/r^2 whereas the potential due to the same charge falls as 1/r.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.7",
    concept: "potential versus field",
  },
  {
    key: "xii-cap-work-done-from-voltage",
    text: "A 12 V supply does 2.4 x 10^-4 J of work in moving a charge to a point. How much charge has been moved?",
    options: ["2.0 x 10^-6 C", "4.0 x 10^-5 C", "2.0 x 10^-5 C", "2.0 x 10^-3 C"],
    correctIndex: 2,
    explanation:
      "From V = W/q the charge is q = W/V = (2.4 x 10^-4 J)/(12 V) = 2.0 x 10^-5 C, since a coulomb of charge corresponds to a joule of work per volt.",
    evidence:
      "The work done in carrying a charge q through a potential difference V is W = qV, so the charge moved is W/V.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.7",
    concept: "work from potential difference",
  },
  {
    key: "xii-cap-potential-difference-of-two-points",
    text: "One conductor is held at a potential of +3.0 V and another at a potential of -3.0 V. What is the potential difference between the two conductors?",
    options: ["0 V", "9.0 V", "3.0 V", "6.0 V"],
    correctIndex: 3,
    explanation:
      "The potential difference is the difference of the two potentials, and since the values carry opposite signs they add in magnitude to give 3.0 + 3.0 = 6.0 V instead of cancelling.",
    evidence:
      "The potential difference between two points is the difference of their electric potentials and is measured in volts.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.7",
    concept: "potential difference",
  },
  {
    key: "xii-cap-charging-current-and-potential-pair",
    text: "Two statements describe a capacitor that is being charged through a resistance. (I) The current in the circuit falls steadily as charge builds up on the plates. (II) The potential difference across the plates approaches the supply voltage as charging continues. Which combination is correct?",
    options: [
      "Only I is correct",
      "Both I and II are correct",
      "Only II is correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 1,
    explanation:
      "As charge accumulates, the rising potential difference across the plates leaves less of the supply voltage across the resistance, so the current decays towards zero. The two statements therefore describe the same charging behaviour.",
    evidence:
      "During charging of a capacitor the current decreases with time while the potential difference across the plates rises until it equals the supply voltage.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.7",
    concept: "charging current and potential",
  },
  {
    key: "xii-cap-charging-potential-curve",
    text: "A capacitor is charged through a resistance from a supply, and the potential difference across its plates is plotted against time. What is the shape of this curve?",
    options: [
      "A curve that rises steeply at first and then more and more slowly, approaching the supply voltage without ever crossing it",
      "A straight line that rises at a constant rate until it reaches the supply voltage and then stops abruptly",
      "A curve that begins at the supply voltage and falls steadily towards zero as the plates fill with charge",
      "A curve that rises past the supply voltage and keeps climbing, since more and more charge keeps arriving",
    ],
    correctIndex: 0,
    explanation:
      "The charging current is greatest at the start and then decays, so the rate at which the potential difference rises is largest at the beginning and falls off afterwards, which gives a curve that levels off at the supply voltage.",
    evidence:
      "The potential across a charging capacitor rises exponentially with time and approaches the supply voltage asymptotically.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-8.7",
    concept: "charging potential curve",
  },
  {
    key: "xii-cap-equipotential-surface-properties",
    text: "A spherical surface is drawn around an isolated point charge. Which set of properties holds at every point of this surface?",
    options: [
      "The potential is the same at all points, the field is everywhere normal to the surface, and a charge carried along the surface is moved without work by the field",
      "The potential is the same at all points, the field is zero everywhere on the surface, and a charge carried along it is moved without work",
      "The potential is zero at all points, the field is everywhere normal to the surface, and a charge carried along it is moved against the field",
      "The potential varies with the angle on the surface, the field lies along the surface, and a charge carried along it is helped by the field",
    ],
    correctIndex: 0,
    explanation:
      "Every point of a sphere centred on the point charge is at the same distance, so the potential there is the same and the field points radially, that is normal to the surface. Since the potential does not change along the surface, no work is done by the field on a charge moved along it.",
    evidence:
      "A surface on which the potential is the same at all points is an equipotential surface, and the electric field is everywhere perpendicular to it.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.8",
    concept: "equipotential surface",
  },
  {
    key: "xii-cap-point-charge-potential-form",
    text: "At a point a distance r from a single point charge q, the potential follows an inverse distance law when the zero of potential is taken at infinity. Which expression is correct?",
    options: ["V = k q / r^2", "V = k q / r", "V = k q^2 / r", "V = k r^2 / q"],
    correctIndex: 1,
    explanation:
      "The potential due to a point charge is V = kq/r, so it falls as the first power of the inverse distance, unlike the field which falls as 1/r^2, and the sign of the result follows the sign of q.",
    evidence:
      "The electric potential due to a point charge q at a distance r from it is V = q/(4 pi epsilon0 r), and it carries the sign of the charge.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-8.8",
    concept: "point charge potential",
  },
  {
    key: "xii-cap-charge-from-negative-potential",
    text: "A single point charge in free space gives a potential of -600 V at a point 0.15 m from it. Using k = 9 x 10^9 N m^2 C^-2, what is the charge?",
    options: [
      "+1.0 x 10^-6 C",
      "+1.0 x 10^-8 C",
      "The charge cannot be found, because V = kq/r gives only the magnitude of the charge",
      "-1.0 x 10^-8 C",
    ],
    correctIndex: 3,
    explanation:
      "Rearranging V = kq/r gives q = Vr/k = (-600 V)(0.15 m)/(9 x 10^9 N m^2 C^-2) = -1.0 x 10^-8 C, and the negative sign matches the measured potential because the potential of a point charge keeps the sign of the charge.",
    evidence:
      "The potential due to a point charge has the sign of the charge, since V = q/(4 pi epsilon0 r).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.8",
    concept: "charge from potential",
  },
  {
    key: "xii-cap-superposing-potentials-of-charges",
    text: "The potential at a point P is the sum of the contributions of all the charges in its neighbourhood. Which sequence of steps gives the correct potential at P?",
    options: [
      "Find the potential at P due to each charge separately, add these potentials algebraically, and report the sum",
      "Resolve each potential into components along two axes and add the components by the triangle law",
      "Add the charges together first, treat them as one charge at a single position, and find the potential of that charge at P",
      "Find the field at P due to each charge, add these fields together, and divide the result by the distance to the nearest charge",
    ],
    correctIndex: 0,
    explanation:
      "Potential is a scalar, so the contribution of each charge is found independently and the contributions are added arithmetically with their signs, unlike fields, which have to be resolved into components and added as vectors.",
    evidence:
      "The potential at a point is the algebraic sum of the potentials due to the individual charges, since potential is a scalar quantity.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.8",
    concept: "superposition of potentials",
  },
  {
    key: "xii-cap-potential-inside-empty-cavity",
    text: "A hollow conducting shell carries charge on its outer surface, and a point P is taken inside the empty cavity, well away from the walls. What is the electric potential at P?",
    options: [
      "The potential at P is zero, because no charge is present anywhere near P",
      "The potential at P is infinite, because P lies inside the conducting material",
      "The potential at P is the same as that of the inner face of the cavity wall",
      "The potential at P is not zero although the field at P is zero, because a zero field does not fix a zero of potential",
    ],
    correctIndex: 3,
    explanation:
      "Inside an empty cavity the field is zero, but a zero field is not the same as a zero potential: the zero of potential is fixed at infinity, and the work done in bringing a charge from infinity to P is not zero, so P has a finite potential that is generally not zero.",
    evidence:
      "The electric field inside an empty cavity enclosed by a charged conductor is zero, while the potential inside need not be zero.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.8",
    concept: "potential inside cavity",
  },
  {
    key: "xii-cap-distance-that-gives-negative-potential",
    text: "A point charge of -5.0 x 10^-6 C is placed in free space. At what distance from it does the potential become -9.0 x 10^4 V? Use k = 9 x 10^9 N m^2 C^-2.",
    options: ["2.0 m", "0.20 m", "1.0 m", "0.50 m"],
    correctIndex: 3,
    explanation:
      "Rearranging V = kq/r gives r = kq/V = (9 x 10^9)(-5.0 x 10^-6)/(-9.0 x 10^4) = 0.50 m, the two negative signs cancelling because a negative charge produces a negative potential.",
    evidence:
      "The potential due to a point charge falls as 1/r and keeps the sign of the charge, so a negative charge produces a negative potential.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-8.8",
    concept: "distance from potential",
  },
  {
    key: "xii-cap-zero-of-potential-at-infinity",
    text: "The zero of electric potential is taken at infinity. With this choice, how does the potential behave as one moves further away from an isolated positive charge?",
    options: [
      "It turns negative beyond the charge, because the field of a positive charge points back towards it",
      "It stays exactly the same at every distance, because the zero of potential is fixed at infinity",
      "It stays positive but decreases in magnitude towards zero, becoming zero only at infinite distance",
      "It reaches zero at a finite distance and then keeps falling in the negative direction",
    ],
    correctIndex: 2,
    explanation:
      "V = kq/r is positive for a positive charge at every finite distance and only vanishes in the limit r tending to infinity, which is exactly where the zero of potential is placed by convention.",
    evidence:
      "The potential due to a point charge falls as 1/r and becomes zero only at infinite distance, where the zero of potential is taken.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.8",
    concept: "zero of potential",
  },
  {
    key: "xii-cap-potential-from-given-field",
    text: "At a point P located 0.10 m from a point charge of +2.0 x 10^-6 C, the electric field intensity is 1.8 x 10^6 N C^-1. What is the potential at P?",
    options: ["9.0 x 10^4 V", "1.8 x 10^5 V", "3.6 x 10^5 V", "1.8 x 10^6 V"],
    correctIndex: 1,
    explanation:
      "From E = kq/r^2 the combination kq = E r^2 = (1.8 x 10^6)(0.10)^2 = 1.8 x 10^4, and then V = kq/r = (1.8 x 10^4)/(0.10) = 1.8 x 10^5 V, that is V = E r for a point charge.",
    evidence:
      "For a point charge the field at distance r is E = q/(4 pi epsilon0 r^2) and the potential at the same point is V = q/(4 pi epsilon0 r).",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-8.8",
    concept: "potential from field",
  },
  {
    key: "xii-cap-capacitance-from-charge-and-voltage",
    text: "Two conductors carry equal and opposite charges of 5.0 x 10^-6 C each, and the potential difference between them is 3.0 V. What is the capacitance of the arrangement?",
    options: ["1.67 x 10^-6 F", "1.67 x 10^-12 F", "3.0 x 10^6 F", "1.5 x 10^-5 F"],
    correctIndex: 0,
    explanation:
      "Capacitance is the charge stored per unit potential difference, C = Q/V = (5.0 x 10^-6 C)/(3.0 V) = 1.67 x 10^-6 F, that is 1.67 microfarad.",
    evidence:
      "The capacitance of a capacitor is the ratio of the charge on its plates to the potential difference across them, C = Q/V, and is measured in farads.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.9",
    concept: "capacitance from charge",
  },
  {
    key: "xii-cap-unit-of-capacitance",
    text: "Capacitance is obtained by dividing a charge in coulombs by a potential difference in volts. What is the SI unit in which it is measured?",
    options: ["The coulomb", "The coulomb per volt", "The farad", "The volt per coulomb"],
    correctIndex: 2,
    explanation:
      "Coulomb per volt is the unit of capacitance and is named the farad, so a capacitance of one farad stores one coulomb of charge at a potential difference of one volt.",
    evidence:
      "The SI unit of capacitance is the farad, and a capacitance of one farad holds one coulomb of charge at a potential difference of one volt.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-8.9",
    concept: "unit of capacitance",
  },
  {
    key: "xii-cap-bank-with-largest-energy",
    text: "The same 12 V supply is connected across three different banks of capacitors, each bank having a different total capacitance. Which bank takes the largest energy from the supply?",
    options: [
      "The bank of smallest total capacitance, because a smaller capacitance draws more charge from the supply",
      "All three banks take the same energy, because the voltage across them is fixed by the supply",
      "The bank of largest total capacitance, because the energy stored grows as C^2 at a fixed voltage",
      "The bank of largest total capacitance, because the energy stored U = 1/2 C V^2 grows with C when V is fixed",
    ],
    correctIndex: 3,
    explanation:
      "At a fixed voltage the stored energy is directly proportional to the total capacitance, since U = 1/2 C V^2, so the bank with the largest capacitance takes the most energy from the supply.",
    evidence:
      "The energy stored in a capacitor is U = 1/2 C V^2, so for a fixed potential difference the energy increases with the capacitance.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-8.9",
    concept: "energy of capacitor bank",
  },
  {
    key: "xii-cap-concentric-shells-same-potential",
    text: "One hollow conducting sphere is placed concentrically inside a second, larger hollow sphere, and the two are given equal and opposite charges, +Q on the inner sphere and -Q on the outer one. What can you say about the two spheres?",
    options: [
      "They are at different potentials, because the charges on them are of opposite sign",
      "They are at zero potential, because all the charge has moved to the outermost surface",
      "They are at the same potential, because the equal and opposite charges on the concentric shells leave no potential in the outer region",
      "They are at the same potential only if the outer sphere is earthed",
    ],
    correctIndex: 2,
    explanation:
      "The +Q on the inner sphere and the -Q on the outer sphere cancel in the region outside, so the potential there is zero and both spheres, which bound that region, are at the same potential. This pair of conductors is the simplest form of a capacitor.",
    evidence:
      "Outside a system of equal and opposite charges the potential is zero, so the conductors that bound that region are at the same potential.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-8.8",
    concept: "concentric shell capacitor",
  },
  {
    key: "xii-cap-stored-energy-expression",
    text: "A capacitor of capacitance C carries a charge Q at a potential difference V. Which expression gives the energy stored in it?",
    options: [
      "U = 1/2 C V^2, which equals 1/2 Q V and Q^2/2C",
      "U = C V^2, which equals C Q V and Q^2 C",
      "U = 1/2 C V, which equals 1/2 Q V^2 and Q^2 C",
      "U = 2 C V^2, which equals 2 Q V and 2 Q^2/C",
    ],
    correctIndex: 0,
    explanation:
      "Substituting Q = CV into U = 1/2 Q V gives U = 1/2 C V^2, and putting V = Q/C in the same expression gives Q^2/2C, so all three forms give the same stored energy.",
    evidence:
      "The energy stored in a capacitor can be written as U = 1/2 Q V = Q^2/2C = 1/2 C V^2, where V is the potential difference across it.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.9",
    concept: "stored energy expression",
  },
  {
    key: "xii-cap-greatest-charging-current",
    text: "A capacitor is being charged through a resistance from a supply. When is the current in this circuit greatest, and what is the potential difference across the plates at that moment?",
    options: [
      "At the very start, when the plates carry no charge, the full supply voltage acts across the resistance and the potential difference across the plates is zero",
      "At the very start, when the full supply voltage acts across the capacitor and no voltage acts across the resistance",
      "Half way through charging, when the potential difference across the plates is half the supply voltage",
      "At the end of charging, when the capacitor is fully charged and the potential difference across the plates is greatest",
    ],
    correctIndex: 0,
    explanation:
      "An uncharged capacitor takes the place of a short circuit, so at the start the whole supply voltage lies across the resistance and the current is at its maximum. The potential difference across the plates is still zero there and only afterwards begins to rise.",
    evidence:
      "The current in a charging circuit is maximum at the start and decreases with time, while the potential across the plates rises from zero to the supply voltage.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.9",
    concept: "maximum charging current",
  },
  {
    key: "xii-cap-order-of-discharge-events",
    text: "A charged capacitor is connected across a resistance so that it discharges. Which sequence correctly describes this process?",
    options: [
      "The current starts at zero, builds up to a maximum in the middle of the discharge, and falls to zero at the end",
      "The current stays at a constant value until the plates are empty and then stops abruptly",
      "The potential difference across the plates rises during the discharge and reaches the supply voltage at the end",
      "The current is largest at the start, the stored charge and the potential difference across the plates then fall with time, and the current finally dies away to zero",
    ],
    correctIndex: 3,
    explanation:
      "A charged capacitor begins discharging at its full potential difference, so the current is largest right at the start. As the charge on the plates and the potential difference across them decay away, the current falls as well and finally becomes zero.",
    evidence:
      "In a discharging circuit the stored charge, the potential difference across the plates and the current all decrease with time until they become zero.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.9",
    concept: "discharging sequence",
  },
  {
    key: "xii-cap-energy-becomes-heat-on-discharge",
    text: "A capacitor of 4.0 x 10^-6 F is charged to a potential difference of 50 V and is then discharged through a resistance. What energy was stored in the capacitor, and what becomes of that energy?",
    options: [
      "0.5 x 10^-2 J was stored, and it appears as heat in the resistance",
      "5.0 x 10^-3 J was stored, and it appears as heat in the resistance",
      "1.0 x 10^-2 J was stored, and it is radiated away as light by the resistance",
      "5.0 x 10^-3 J was stored, and it is returned to the supply as useful electrical energy",
    ],
    correctIndex: 1,
    explanation:
      "U = 1/2 C V^2 = (1/2)(4.0 x 10^-6)(50)^2 = 5.0 x 10^-3 J, and as the capacitor discharges this stored energy is converted into heat in the resistance of the circuit.",
    evidence:
      "The energy stored in a capacitor is U = 1/2 C V^2, and during discharge it is dissipated as heat in the resistance of the circuit.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.9",
    concept: "energy dissipated on discharge",
  },
  {
    key: "xii-cap-series-combination-of-three",
    text: "Capacitors of 2.0 x 10^-6 F, 3.0 x 10^-6 F and 6.0 x 10^-6 F are connected in series across a supply. What is the capacitance of the combination?",
    options: ["11.0 x 10^-6 F", "1.0 x 10^-6 F", "5.5 x 10^-6 F", "2.0 x 10^-6 F"],
    correctIndex: 1,
    explanation:
      "For capacitors in series the reciprocals add, so 1/C = 1/2 + 1/3 + 1/6 in units of 10^6 per farad, and since this sum is 1 the combination has a capacitance of 1.0 x 10^-6 F, which is below the smallest single capacitor of the three.",
    evidence:
      "For capacitors in series the resultant capacitance is given by 1/C = 1/C1 + 1/C2 + 1/C3 and is smaller than the smallest individual capacitance.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "PHY-8.9",
    concept: "series capacitance",
  },
  {
    key: "xii-cap-current-at-start-of-charging",
    text: "A capacitor of 6.0 x 10^-6 F is charged from a 12 V supply through a resistance of 4.7 x 10^3 ohm. What is the current in the circuit at the very start of charging?",
    options: [
      "0 A, because no charge has yet reached the plates",
      "2.55 x 10^-3 A",
      "2.0 x 10^-6 A, because the capacitance sets the current",
      "12 A, because the whole supply voltage acts across the resistance at once",
    ],
    correctIndex: 1,
    explanation:
      "At the start the uncharged plates take the place of a short circuit, so the full 12 V acts across the resistance and I = V/R = 12/(4.7 x 10^3) = 2.55 x 10^-3 A, which is the largest current of the whole charging process.",
    evidence:
      "The charging current is greatest at the start of charging and is then limited by the resistance of the circuit.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.9",
    concept: "initial charging current",
  },
];
