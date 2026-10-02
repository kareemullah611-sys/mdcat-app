import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-mag2-perpendicular-entry-circular-path",
    text: "An alpha particle enters a region of uniform magnetic field with its velocity perpendicular to the field lines. The shape of the path it follows is",
    options: [
      "a circle lying in a plane perpendicular to the magnetic field",
      "a straight line parallel to the magnetic field",
      "a helix that becomes progressively wider",
      "a parabola opening along the direction of the field",
    ],
    correctIndex: 0,
    explanation:
      "With the velocity perpendicular to the field, the force qvB is perpendicular to the motion at every instant, so it turns the velocity without changing its magnitude and bends the path into a circle normal to the field.",
    evidence:
      "A charged particle moving perpendicular to a uniform magnetic field describes a circular path because the magnetic force is always perpendicular to its velocity.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-10.3",
    concept: "circular path in field",
  },
  {
    key: "xii-mag2-parallel-entry-straight-line",
    text: "A proton is projected into a uniform magnetic field with its velocity parallel to the direction of the field. The proton then",
    options: [
      "follows a circular path of radius mv/qB",
      "is brought to rest within one complete revolution",
      "spirals towards the field with a shrinking radius",
      "carries on in a straight line at constant speed",
    ],
    correctIndex: 3,
    explanation:
      "For motion parallel to the field the angle in F = qvB sin theta is zero, so the magnetic force vanishes and the proton keeps its velocity and travels in a straight line.",
    evidence:
      "A charge moving parallel to a uniform magnetic field experiences no magnetic force and continues in a straight line.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-10.3",
    concept: "motion along field",
  },
  {
    key: "xii-mag2-force-does-no-work",
    text: "An electron completes a full circle inside a uniform magnetic field without leaving it. Over this journey its speed and its kinetic energy",
    options: [
      "both decrease steadily as the field does negative work",
      "both stay constant because the magnetic force does no work",
      "speed stays constant while the kinetic energy doubles",
      "both increase steadily as the electron takes energy from the field",
    ],
    correctIndex: 1,
    explanation:
      "The magnetic force is always perpendicular to the velocity, and a force perpendicular to the displacement of a particle can do no work on it, so the speed and the kinetic energy remain unchanged while only the direction of motion turns.",
    evidence:
      "The magnetic force on a moving charge is always perpendicular to its velocity, so it does no work and cannot change the kinetic energy of the charge.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-10.3",
    concept: "work done by field",
  },
  {
    key: "xii-mag2-reversed-field-reverses-rotation",
    text: "A positive charge enters a uniform magnetic field moving at right angles to it and settles into a circular path. If the direction of the magnetic field is then reversed while the entry conditions stay the same, the charge will",
    options: [
      "go on tracing the same circle in the same sense of rotation",
      "leave the field along a straight line tangent to the circle",
      "trace the same circle but in the opposite sense of rotation",
      "slow down and stop after a quarter of the circle",
    ],
    correctIndex: 2,
    explanation:
      "Reversing the field reverses the direction of the force qvB at every point, so the charge is bent the other way about its circle and circles it in the opposite sense with the same speed and radius.",
    evidence:
      "The magnetic force on a moving charge reverses when the direction of the magnetic field is reversed.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-10.3",
    concept: "sense of circular motion",
  },
  {
    key: "xii-mag2-electron-radius-value",
    text: "An electron moves at 1.0 x 10^7 m s^-1 in a uniform magnetic field of 0.20 T with its velocity perpendicular to the field. Taking m = 9.1 x 10^-31 kg and q = 1.6 x 10^-19 C, the radius of its circular path is",
    options: ["1.4 x 10^-4 m", "2.8 x 10^-4 m", "5.7 x 10^-4 m", "1.1 x 10^-3 m"],
    correctIndex: 1,
    explanation:
      "The radius is r = mv/(qB) = (9.1 x 10^-31 x 1.0 x 10^7)/(1.6 x 10^-19 x 0.20) = 9.1 x 10^-24/3.2 x 10^-20, which is about 2.8 x 10^-4 m.",
    evidence: "The radius of the circular path of a charged particle moving perpendicular to a field is r = mv/qB.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-10.3",
    concept: "radius of charged path",
  },
  {
    key: "xii-mag2-proton-electron-radius-ratio",
    text: "An electron and a proton move at the same speed perpendicular to the same uniform magnetic field. Using m_e = 9.1 x 10^-31 kg and m_p = 1.67 x 10^-27 kg for equal charges, the ratio of the electron's path radius to the proton's is",
    options: ["1.85 x 10^3", "1", "2", "5.4 x 10^-4"],
    correctIndex: 3,
    explanation:
      "Since r = mv/qB and both particles carry the same charge at the same speed in the same field, the radii stand in the ratio of their masses: (9.1 x 10^-31)/(1.67 x 10^-27), which is about 5.4 x 10^-4.",
    evidence:
      "For particles of equal charge and speed in the same field, the radius of the circular path is proportional to the mass of the particle.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 93,
    outcome: "PHY-10.3",
    concept: "radius mass ratio",
  },
  {
    key: "xii-mag2-rest-electron-untouched-statement",
    text: "Statement I: a magnetic field exerts a force on an electron that is moving across the field lines. Statement II: a magnetic field exerts a force on an electron that is at rest in the field. Which pair of judgements is right?",
    options: [
      "Statement I is true and Statement II is false",
      "Statement I is false and Statement II is true",
      "Both statements are true",
      "Both statements are false",
    ],
    correctIndex: 0,
    explanation:
      "The force on a charge is F = qvB sin theta, so a moving electron is pushed sideways, while an electron at rest has v = 0 and feels no magnetic force; Statement I is true and Statement II is false.",
    evidence:
      "A magnetic field exerts a force qvB sin theta on a moving charge and exerts no force at all on a charge that is at rest.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-10.4",
    concept: "force on moving charge",
  },
  {
    key: "xii-mag2-beam-deflected-by-two-field-types",
    text: "A beam of electrons is deflected by an electric field and also by a magnetic field. The feature common to the two deflections is that",
    options: [
      "each field pushes on the mass of the electron rather than on its charge",
      "the kinetic energy of the electrons increases in both deflections",
      "a force acts on the charge of the electrons and bends their path",
      "the electrons are slowed to rest in both cases",
    ],
    correctIndex: 2,
    explanation:
      "Both fields deflect the beam because a force acting on the charge of the electrons bends their path, and this sideways deflection is what makes the electron beam visible in a cathode ray tube.",
    evidence:
      "The deflection of electrons in electric and magnetic fields shows that a field exerts a force on the charge carried by the electrons.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-10.4",
    concept: "electron beam deflection",
  },
  {
    key: "xii-mag2-slower-particle-wider-path",
    text: "Two alpha particles of identical mass and charge enter the same uniform magnetic field at right angles to it, one with speed v and the other with speed 2v. The ratio of the radius of the slower path to that of the faster one is",
    options: ["1 : 4", "1 : 2", "2 : 1", "1 : 1"],
    correctIndex: 1,
    explanation:
      "With r = mv/qB the radius is directly proportional to the speed for identical particles, so the particle moving at v traces a path half as wide as the one moving at 2v.",
    evidence:
      "The radius of the circular path of a charged particle in a uniform magnetic field is r = mv/qB, so it is directly proportional to the speed.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-10.3",
    concept: "radius versus speed",
  },
  {
    key: "xii-mag2-negative-charge-force-opposite",
    text: "A positive charge and a negative charge of equal magnitude move with the same velocity perpendicular to the same uniform magnetic field. Compared with the force on the positive charge, the force on the negative charge is",
    options: [
      "equal in magnitude and acting in the same direction",
      "equal in magnitude but larger",
      "smaller in magnitude and acting in the same direction",
      "equal in magnitude but acting in the opposite direction",
    ],
    correctIndex: 3,
    explanation:
      "The magnitude of the force is |q|vB and depends only on the size of the charge, but the sign of q decides the sense, so the negative charge is bent the opposite way to the positive charge.",
    evidence:
      "A negative charge experiences a magnetic force opposite in direction to that on a positive charge moving in the same way.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-10.4",
    concept: "sign of the charge",
  },
  {
    key: "xii-mag2-force-perpendicular-to-velocity-statement",
    text: "Statement I: the magnetic force on a moving charge is always perpendicular to the velocity of the charge. Statement II: a charged particle moving parallel to a uniform magnetic field experiences no magnetic force. Which pair of judgements is right?",
    options: [
      "Statement I is true and Statement II is false",
      "Statement I is false and Statement II is true",
      "Both statements are true",
      "Both statements are false",
    ],
    correctIndex: 0,
    explanation:
      "F = qvB sin theta places the force at right angles to the velocity, and with the velocity along the field the angle is zero so the force is nil; Statement I is true and Statement II is false.",
    evidence:
      "The magnetic force on a moving charge is always perpendicular to the velocity and vanishes when the velocity is parallel to the field.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-10.4",
    concept: "force orientation and angle",
  },
  {
    key: "xii-mag2-events-leading-to-circular-path",
    text: "A charge that enters a uniform magnetic field with its velocity perpendicular to the field goes on to describe a circle. The correct order in which the underlying events occur is",
    options: [
      "the charge gains speed, the force grows, the charge leaves the field",
      "the charge is deflected, the velocity tilts, a circular path results",
      "a magnetic force appears, the velocity direction turns, a circular path results",
      "the path first straightens, the charge then stops, the force vanishes",
    ],
    correctIndex: 2,
    explanation:
      "The field first produces the magnetic force qvB, that force then turns the direction of the velocity while leaving its magnitude unchanged, and this repeated turning carries the charge round a circle.",
    evidence:
      "A charged particle describes a circular path in a uniform field because the magnetic force turns the direction of its velocity at every point of the circle.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-10.3",
    concept: "steps to circular motion",
  },
  {
    key: "xii-mag2-speed-from-path-radius",
    text: "The circular path of an electron in a uniform magnetic field of 0.50 T has a radius of 5.0 mm. With m = 9.1 x 10^-31 kg and q = 1.6 x 10^-19 C, the speed of the electron in the field is",
    options: ["2.2 x 10^8 m s^-1", "4.4 x 10^8 m s^-1", "8.8 x 10^8 m s^-1", "4.4 x 10^7 m s^-1"],
    correctIndex: 1,
    explanation:
      "Rearranging r = mv/qB gives v = qBr/m = (1.6 x 10^-19 x 0.50 x 5.0 x 10^-3)/9.1 x 10^-31 = 4.0 x 10^-22/9.1 x 10^-31, which is about 4.4 x 10^8 m s^-1.",
    evidence:
      "The radius of the circular path is r = mv/qB, so the speed of the charge is v = qBr/m.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-10.3",
    concept: "speed from radius",
  },
  {
    key: "xii-mag2-alpha-particle-radius-value",
    text: "An alpha particle of mass 6.64 x 10^-27 kg and charge 3.2 x 10^-19 C moves at 1.5 x 10^7 m s^-1 perpendicular to a uniform magnetic field of 0.25 T. The radius of its circular path is",
    options: ["0.25 m", "2.50 m", "1.25 m", "0.50 m"],
    correctIndex: 2,
    explanation:
      "The radius is r = mv/(qB) = (6.64 x 10^-27 x 1.5 x 10^7)/(3.2 x 10^-19 x 0.25) = 9.96 x 10^-20/8.0 x 10^-20, which is about 1.25 m.",
    evidence:
      "The radius of the circular path of an alpha particle in a uniform magnetic field follows r = mv/qB.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 92,
    outcome: "PHY-10.3",
    concept: "radius of alpha path",
  },
  {
    key: "xii-mag2-radius-with-half-speed-double-field",
    text: "An electron moving perpendicular to a uniform magnetic field of 0.40 T at 2.0 x 10^7 m s^-1 follows a circular path of radius 2.8 x 10^-4 m. If its speed is halved and the field is doubled, the new radius of the path is",
    options: ["1.4 x 10^-4 m", "5.7 x 10^-5 m", "7.1 x 10^-5 m", "2.8 x 10^-4 m"],
    correctIndex: 2,
    explanation:
      "Because r = mv/qB the radius is directly proportional to the speed and inversely proportional to the field, so halving v and doubling B cuts the radius to one quarter, giving 2.8 x 10^-4/4, that is 7.1 x 10^-5 m.",
    evidence:
      "For a given charge the radius r = mv/qB is directly proportional to the speed and inversely proportional to the field strength.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-10.3",
    concept: "radius scaling",
  },
  {
    key: "xii-mag2-double-charge-halves-radius",
    text: "Two particles of equal mass enter the same uniform magnetic field at right angles to it with the same speed, one of them carrying twice the charge of the other. The radius of the path of the particle with the larger charge is",
    options: [
      "half the radius of the particle with the smaller charge",
      "twice the radius of the particle with the smaller charge",
      "the same as the radius of the particle with the smaller charge",
      "four times the radius of the particle with the smaller charge",
    ],
    correctIndex: 0,
    explanation:
      "With m, v and B unchanged, r = mv/qB is inversely proportional to the size of the charge, so a particle with twice the charge traces a path of half the radius.",
    evidence:
      "The radius of the circular path r = mv/qB is inversely proportional to the magnitude of the charge of the particle.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-10.3",
    concept: "radius versus charge",
  },
  {
    key: "xii-mag2-radius-formula-order",
    text: "To obtain the radius of the circular path followed by a charge q of mass m moving at speed v perpendicular to a uniform field B, the correct sequence of operations is",
    options: [
      "divide the product qB by m and then multiply by v",
      "multiply m by v and then divide by the product qB",
      "multiply q by B and then divide by the product mv",
      "add m to v and then divide by the product qB",
    ],
    correctIndex: 1,
    explanation:
      "The radius relation r = mv/qB is built by multiplying the mass by the speed first and then dividing by the product of the charge and the field.",
    evidence:
      "The radius of the circular path of a charge moving perpendicular to a uniform magnetic field is r = mv/qB.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-10.3",
    concept: "arranging the radius formula",
  },
  {
    key: "xii-mag2-proton-force-in-field",
    text: "A proton of charge 1.6 x 10^-19 C moves at 5.0 x 10^6 m s^-1 perpendicular to a uniform magnetic field of 0.40 T. The magnetic force acting on it is",
    options: ["8.0 x 10^-13 N", "3.2 x 10^-13 N", "1.6 x 10^-13 N", "3.2 x 10^-12 N"],
    correctIndex: 1,
    explanation:
      "For perpendicular motion F = qvB = (1.6 x 10^-19)(5.0 x 10^6)(0.40) = 3.2 x 10^-13 N, directed perpendicular to both the velocity and the field.",
    evidence:
      "A charge moving perpendicular to a uniform magnetic field of flux density B experiences the force F = qvB.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-10.4",
    concept: "force on a proton",
  },
  {
    key: "xii-mag2-conductor-force-expression",
    text: "The force on a current-carrying conductor of length L placed in a magnetic field of flux density B that makes an angle theta with the current is",
    options: ["F = B I L / sin theta", "F = B I L sin theta", "F = B I L cos theta", "F = B I / (L sin theta)"],
    correctIndex: 1,
    explanation:
      "The motor effect gives F = B I L sin theta, so the force grows with the field strength, the current and the length, and falls to zero as the conductor turns to lie along the field.",
    evidence:
      "A conductor of length L carrying current I in a uniform field B that makes an angle theta with it experiences a force F = B I L sin theta.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-10.4",
    concept: "motor effect formula",
  },
  {
    key: "xii-mag2-force-orientation-on-conductor",
    text: "A straight conductor carrying current in a uniform magnetic field experiences a force which is",
    options: [
      "along the direction of the current",
      "along the direction of the magnetic field",
      "perpendicular to both the current and the magnetic field",
      "along the conductor but opposite to the current",
    ],
    correctIndex: 2,
    explanation:
      "The magnetic force on a current-carrying conductor is perpendicular to the current and to the field, and Fleming's left-hand rule is used to fix which of the two perpendicular directions it takes.",
    evidence:
      "The force on a current-carrying conductor placed in a magnetic field is perpendicular to both the current and the field, as given by Fleming's left-hand rule.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-10.4",
    concept: "direction of conductor force",
  },
  {
    key: "xii-mag2-angle-dependence-statement",
    text: "Statement I: a conductor placed at right angles to a magnetic field feels its greatest magnetic force. Statement II: a conductor lying along the lines of the field feels no magnetic force. Which pair of judgements is right?",
    options: [
      "Statement I is true and Statement II is false",
      "Statement I is false and Statement II is true",
      "Both statements are true",
      "Both statements are false",
    ],
    correctIndex: 2,
    explanation:
      "In F = B I L sin theta the sine is largest, equal to 1, at theta = 90 degrees, and it is zero at theta = 0 degrees, so a conductor across the field feels the maximum force and one along the field feels none.",
    evidence:
      "The force on a conductor is maximum when the conductor is perpendicular to the magnetic field and is zero when it is parallel to the field.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-10.4",
    concept: "angle dependence of force",
  },
  {
    key: "xii-mag2-reversed-current-reverses-force",
    text: "A straight copper conductor carries current in a uniform magnetic field. If the direction of the current alone is reversed while the field and the position of the conductor stay unchanged, the force on the conductor",
    options: [
      "acts in the direction opposite to its original direction",
      "vanishes because the current now opposes the field",
      "is doubled because more charge carriers move",
      "is unchanged because the field has not changed",
    ],
    correctIndex: 0,
    explanation:
      "The force is directly proportional to the current, so reversing the current reverses the force, and Fleming's left-hand rule then gives a force pointing the opposite way.",
    evidence:
      "Reversing the direction of the current in a conductor placed in a magnetic field reverses the direction of the force on it.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-10.4",
    concept: "reversing the current",
  },
  {
    key: "xii-mag2-force-with-doubled-current-tripled-field",
    text: "A wire 5.0 m long carrying 3.0 A at right angles to a uniform field of 0.40 T feels a force of 6.0 N. If the current is doubled, the field is tripled and the wire is shortened to 2.5 m, the force becomes",
    options: ["18 N", "9 N", "6 N", "36 N"],
    correctIndex: 0,
    explanation:
      "The force is directly proportional to the current, the field and the length, so halving the length, doubling the current and tripling the field multiplies 6.0 N by 1/2 x 2 x 3, which gives 18 N.",
    evidence:
      "The force on a conductor in a uniform field is directly proportional to the current, the flux density of the field and the length of the conductor.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-10.4",
    concept: "force scaling with I, B and L",
  },
  {
    key: "xii-mag2-electron-force-in-weak-field",
    text: "An electron of charge 1.6 x 10^-19 C and mass 9.1 x 10^-31 kg moves at 3.0 x 10^7 m s^-1 perpendicular to a weak magnetic field of 2.0 x 10^-5 T. The force on the electron is",
    options: ["4.8 x 10^-17 N", "9.6 x 10^-16 N", "1.9 x 10^-16 N", "9.6 x 10^-17 N"],
    correctIndex: 3,
    explanation:
      "The force is F = qvB = (1.6 x 10^-19)(3.0 x 10^7)(2.0 x 10^-5) = 9.6 x 10^-17 N, tiny even though the field is very weak because the electron's charge is very small.",
    evidence:
      "A charge moving perpendicular to a uniform magnetic field of flux density B experiences the force F = qvB.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-10.4",
    concept: "force on an electron",
  },
  {
    key: "xii-mag2-units-for-motor-effect",
    text: "In the relation F = B I L sin theta the force comes out in newtons. Which set of units for B, I and L gives this result?",
    options: [
      "B in tesla, I in ampere and L in metre",
      "B in weber, I in coulomb and L in metre",
      "B in gauss, I in ampere and L in centimetre",
      "B in tesla, I in volt and L in metre",
    ],
    correctIndex: 0,
    explanation:
      "One tesla is one newton per ampere per metre, so a tesla multiplied by an ampere and a metre gives a force in newtons.",
    evidence: "The SI units of flux density, current and length are tesla, ampere and metre.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-10.4",
    concept: "motor effect units",
  },
  ];