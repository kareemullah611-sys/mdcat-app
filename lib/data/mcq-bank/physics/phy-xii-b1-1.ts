import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-field-coulomb-law-statement",
    text: "Coulomb's law relates the force between two point charges to their magnitudes and to the distance separating them. Which expression states this law correctly?",
    options: [
      "F = (1/4 pi epsilon0) q1 q2 / r^2",
      "F = (1/4 pi epsilon0) q1 q2 r^2",
      "F = (1/4 pi epsilon0) (q1 + q2) / r^2",
      "F = (1/4 pi epsilon0) q1 q2 / r",
    ],
    correctIndex: 0,
    explanation:
      "Coulomb's law is F = (1/4 pi epsilon0) q1 q2 / r^2, so the force depends on the product of the two charges and falls off as the inverse square of the separation r.",
    evidence:
      "The electrostatic force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-8.1",
    concept: "coulomb law statement",
  },
  {
    key: "xii-field-coulomb-constant-value",
    text: "In Coulomb's law, F = k q1 q2 / r^2, the constant k = 1/4 pi epsilon0. What is its numerical value in SI units?",
    options: [
      "8.85 x 10^-12 N m^2 C^-2",
      "9 x 10^9 N m^2 C^-2",
      "9 x 10^9 N m C^-2",
      "9 x 10^9 C^2 N^-1 m^-2",
    ],
    correctIndex: 1,
    explanation:
      "The Coulomb constant is 1/4 pi epsilon0 = 9 x 10^9 N m^2 C^-2, the units being those that make k q1 q2 / r^2 come out as a force in newtons.",
    evidence:
      "The Coulomb constant 1/4 pi epsilon0 has the value 9 x 10^9 N m^2 C^-2.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.1",
    concept: "coulomb constant",
  },
  {
    key: "xii-field-charge-sign-product-decides-force",
    text: "Charge is a scalar quantity that may be positive or negative. Two point charges carry q1 = +2 x 10^-6 C and q2 = -3 x 10^-6 C. What does the sign of the product q1 q2 imply about the force between them?",
    options: [
      "The product is positive, so the force is attractive and pulls the charges together",
      "The product is positive, so the two charges experience no force at all",
      "The product is negative, so the force is attractive and pulls the charges together",
      "The product is negative, so the force is repulsive and pushes the charges apart",
    ],
    correctIndex: 2,
    explanation:
      "The two charges carry unlike signs, so the product q1 q2 is negative and the force between them is attractive, acting along the line that joins them.",
    evidence:
      "Charges of unlike sign attract one another while charges of like sign repel one another.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.1",
    concept: "like and unlike charges",
  },
  {
    key: "xii-field-excess-electrons-from-net-charge",
    text: "An isolated metal sphere is given a net charge of -3.2 x 10^-19 C. Using the elementary charge e = 1.6 x 10^-19 C, how many excess electrons does the sphere carry?",
    options: ["4", "1", "20", "2"],
    correctIndex: 3,
    explanation:
      "Dividing the magnitude of the charge by the elementary charge gives 3.2 x 10^-19 / 1.6 x 10^-19 = 2, and the negative sign means two electrons are in excess.",
    evidence:
      "Charge on a body always occurs as an integral multiple of the elementary charge e = 1.6 x 10^-19 C.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-8.1",
    concept: "quantization of charge",
  },
  {
    key: "xii-field-equal-opposite-mutual-forces",
    text: "Two point charges exert electrostatic forces on each other. How do these two forces compare, and on what does this rest?",
    options: [
      "They are equal in magnitude and opposite in direction, because each charge acts as the source of the field felt by the other",
      "They are equal in magnitude and act in the same direction, because the larger charge pulls the smaller one harder",
      "The force on the positive charge is greater, because a positive charge produces a stronger field than a negative one",
      "They are equal in magnitude and opposite in direction only when the two charges sit at equal distances",
    ],
    correctIndex: 0,
    explanation:
      "The Coulomb expression is symmetric in the two charges, so each feels the same magnitude of force along the line joining them but in the opposite direction.",
    evidence:
      "The mutual force between two charges depends on their product and their separation and not on which charge is considered first.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.1",
    concept: "action reaction pair",
  },
  {
    key: "xii-field-separation-halved-force-fourfold",
    text: "Two point charges are held at a separation of r. If the separation is reduced to r/2 while both charges are left unchanged, by what factor does the electrostatic force between them change?",
    options: [
      "It becomes one quarter of the original force",
      "It becomes four times the original force",
      "It becomes half of the original force",
      "It becomes twice the original force",
    ],
    correctIndex: 1,
    explanation:
      "The force varies as 1/r^2, so replacing r by r/2 multiplies the force by 2^2, that is by a factor of four.",
    evidence:
      "Because the electrostatic force varies inversely as the square of the distance, reducing the separation increases the force by the square of the reduction factor.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-8.1",
    concept: "inverse square dependence",
  },
  {
    key: "xii-field-both-charges-doubled",
    text: "In a standard MDCAT numerical, two point charges are each doubled while the separation between them is kept the same. The original force between them was F. What is the new force?",
    options: ["2F", "F/2", "4F", "8F"],
    correctIndex: 2,
    explanation:
      "The force is linear in each of the two charges, so doubling both of them multiplies the product q1 q2 by four and the force becomes 4F.",
    evidence:
      "The electrostatic force between two point charges is directly proportional to the product of the two charges.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.1",
    concept: "charge dependence of force",
  },
  {
    key: "xii-field-dielectric-medium-procedure",
    text: "The space between two point charges q1 and q2 separated by r is filled with a dielectric of dielectric constant K. Which sequence of operations gives the correct force between the charges?",
    options: [
      "Use F = (1/4 pi epsilon0) q1 q2 / r^2 and multiply the result by K, since a dielectric strengthens the attraction",
      "Use F = (1/4 pi epsilon0) q1 q2 / r^2 and multiply the result by K^2 to obtain the force in the medium",
      "Use F = (1/4 pi epsilon0) q1 q2 / r^2 unchanged, since the charges themselves have not been altered",
      "Replace epsilon0 by K epsilon0 in the denominator so that F = q1 q2 / (4 pi K epsilon0 r^2)",
    ],
    correctIndex: 3,
    explanation:
      "The permittivity of the medium is epsilon = K epsilon0, so F = q1 q2 / (4 pi epsilon r^2) = (1/4 pi epsilon0) q1 q2 / (K r^2) and the dielectric constant divides the free space value.",
    evidence:
      "In a dielectric medium the permittivity is K epsilon0, so the force between two charges is smaller than in free space by the factor K.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.1",
    concept: "dielectric medium reduction",
  },
  {
    key: "xii-field-medium-separation-for-same-force",
    text: "Two charges exert a force F on each other at a separation of 1 m in free space. The space between them is then filled with a dielectric of dielectric constant 9. What separation now keeps the force equal to F?",
    options: ["3 m", "1/3 m", "9 m", "1/9 m"],
    correctIndex: 1,
    explanation:
      "With F = k q1 q2 / (K r^2) unchanged and the charges fixed, the product K r^2 must stay constant, so 9 r^2 = 1 m^2 and r = 1/3 m.",
    evidence:
      "Since the dielectric constant divides the force, the same force in a denser medium is obtained at a smaller separation equal to the original separation divided by the square root of the dielectric constant.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-8.1",
    concept: "medium separation scaling",
  },
  {
    key: "xii-field-force-between-two-microcoulomb-pair",
    text: "Point charges of +2 x 10^-6 C and +5 x 10^-6 C are held 0.30 m apart in air. Using 9 x 10^9 N m^2 C^-2 for the Coulomb constant, what is the force between them?",
    options: ["0.50 N", "2.0 N", "1.0 N", "10 N"],
    correctIndex: 2,
    explanation:
      "F = (9 x 10^9)(2 x 10^-6)(5 x 10^-6)/(0.30)^2 = 0.09/0.09 = 1.0 N, and the force is repulsive because both charges are positive.",
    evidence:
      "The force between two point charges is calculated from F = k q1 q2 / r^2 with k = 9 x 10^9 N m^2 C^-2.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.1",
    concept: "coulomb law calculation",
  },
  {
    key: "xii-field-defined-as-force-per-unit-charge",
    text: "An electric field intensity at a point is defined as the force acting on a unit positive test charge placed at that point. Which expression gives this field?",
    options: ["E = F / q0", "E = F x q0", "E = q0 / F", "E = F / q0^2"],
    correctIndex: 0,
    explanation:
      "The electric field is the force per unit positive charge placed at the point, so E = F/q0, and because F itself varies as q0 this ratio is the same for any size of test charge.",
    evidence:
      "The electric field intensity at a point is the force experienced by a unit positive charge placed at that point.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-8.2",
    concept: "electric field definition",
  },
  {
    key: "xii-field-as-region-of-force",
    text: "Two statements about an electric field of force are given. (I) An electric field is a region around a charge in which another charge experiences a force. (II) The force felt inside such a region is the same at every point of the region. Which combination is correct?",
    options: [
      "Both I and II are correct",
      "Only I is correct",
      "Only II is correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 1,
    explanation:
      "An electric field is a field of force because a charge placed in the region around a source charge feels a force, but the strength of that field changes with distance from the source, so statement II fails.",
    evidence:
      "An electric field is a region in which a charge experiences a force, and its strength at a point varies with the distance of that point from the source charge.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.2",
    concept: "field of force",
  },
  {
    key: "xii-field-force-on-charge-in-uniform-field",
    text: "A region of space carries a uniform electric field of 3.0 x 10^5 N C^-1 along the positive x axis. What force acts on a charge of +4 x 10^-6 C placed in this field?",
    options: [
      "7.5 x 10^-11 N along the positive x axis",
      "1.2 N along the negative x axis",
      "1.2 N along the positive x axis",
      "12 N along the negative x axis",
    ],
    correctIndex: 2,
    explanation:
      "Since F = qE, the force has magnitude (4 x 10^-6)(3.0 x 10^5) = 1.2 N, and a positive charge feels a force along the direction of the field.",
    evidence:
      "A charge q placed in an electric field E experiences a force given by F = qE.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.2",
    concept: "force on a charge",
  },
  {
    key: "xii-field-force-on-negative-charge",
    text: "A uniform field of 2.5 x 10^5 N C^-1 points towards the east at a certain point in space. What force does a charge of -8 x 10^-6 C placed at that point experience?",
    options: [
      "2.0 N towards the east",
      "20 N towards the west",
      "0.20 N towards the west",
      "2.0 N towards the west",
    ],
    correctIndex: 3,
    explanation:
      "The magnitude is |q|E = (8 x 10^-6)(2.5 x 10^5) = 2.0 N, and because the charge is negative its force acts opposite to the field, that is towards the west.",
    evidence:
      "The force on a negative charge in an electric field acts opposite to the direction of the field.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.2",
    concept: "force on negative charge",
  },
  {
    key: "xii-field-test-charge-independence",
    text: "A small positive test charge placed at point P experiences an electric force. The same point P is then tested with a charge of three times that magnitude. Which statement is correct?",
    options: [
      "The field at P is unchanged and the force on the test charge becomes three times as large",
      "The field at P becomes three times as large and the force on the test charge is unchanged",
      "Both the field and the force at P become three times as large",
      "The field at P is unchanged and the force on the test charge is unchanged",
    ],
    correctIndex: 0,
    explanation:
      "From F = q0 E the force varies as the test charge, so tripling the charge triples the force, while the field at P is a property of the point and stays the same.",
    evidence:
      "Since the force varies as the product of the test charge and the field, the electric field at a point does not depend on the test charge used to detect it.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.2",
    concept: "test charge independence",
  },
  {
    key: "xii-field-unit-of-electric-field",
    text: "Two claims are made about the unit of electric field intensity. (I) The unit is the newton per coulomb. (II) Because the field is work done per unit charge per unit distance, the unit also equals the joule per coulomb per metre. Which combination is correct?",
    options: [
      "Only I is correct",
      "Both I and II are incorrect",
      "Both I and II are correct",
      "Only II is correct",
    ],
    correctIndex: 2,
    explanation:
      "E = F/q0 gives the unit N C^-1, and since N = J m^-1 this is the same as J C^-1 m^-1, so the two claims describe one and the same unit.",
    evidence:
      "The SI unit of electric field intensity is the newton per coulomb, which is equivalent to the volt per metre.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-8.2",
    concept: "unit of electric field",
  },
  {
    key: "xii-field-not-same-as-force",
    text: "A learner argues: 'The electric field at a point P and the force on a charge at P are two names for the same thing, since E = F/q0.' What is wrong with this argument?",
    options: [
      "Nothing is wrong, since dividing by a unit charge leaves a quantity unchanged in all respects",
      "E and F are different quantities; E belongs to the point while F also depends on the charge placed there",
      "The argument is wrong because E = F/q0 applies only to a negative test charge",
      "The argument is wrong because the force on a charge is independent of the field at its location",
    ],
    correctIndex: 1,
    explanation:
      "Dividing by the unit positive charge only makes E the force per unit charge; the field is fixed by the source charges and the position, whereas the force also depends on the magnitude and sign of the charge placed at P.",
    evidence:
      "Electric field intensity is the force per unit positive charge and therefore differs numerically from the force on a charge of finite magnitude.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.2",
    concept: "field versus force",
  },
  {
    key: "xii-field-point-charge-field-expression",
    text: "The electric field intensity at a distance r from a single point charge q follows from Coulomb's law by dividing the force on a unit positive charge by that charge. Which expression is correct?",
    options: [
      "E = (1/4 pi epsilon0) q / r^2",
      "E = (1/4 pi epsilon0) q r^2",
      "E = (1/4 pi epsilon0) q^2 / r",
      "E = (1/4 pi epsilon0) r / q^2",
    ],
    correctIndex: 0,
    explanation:
      "Putting the unit positive charge q0 = 1 C into E = F/q0 reduces Coulomb's law to E = (1/4 pi epsilon0) q / r^2, which keeps the same inverse square dependence on r.",
    evidence:
      "The electric field intensity due to a point charge q at a distance r is E = q / (4 pi epsilon0 r^2).",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-8.3",
    concept: "field of point charge",
  },
  {
    key: "xii-field-direction-for-negative-charge",
    text: "The electric field at a point due to a single point charge lies along the straight line joining that charge to the point. What is this direction when the charge is negative?",
    options: [
      "Away from the charge, further along the same line",
      "Towards the charge, along the same line",
      "At right angles to the line joining them",
      "At an angle of 45 degrees to the line joining them",
    ],
    correctIndex: 1,
    explanation:
      "A negative charge draws a positive test charge towards itself, so its field at every point points inwards along the joining line, whereas a positive charge gives an outward field.",
    evidence:
      "The electric field due to a positive charge is directed away from the charge and the field due to a negative charge is directed towards it.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-8.3",
    concept: "field direction and sign",
  },
  {
    key: "xii-field-zero-at-midpoint-of-equal-opposite",
    text: "Two equal charges of opposite sign, +q and -q, are fixed at two points in free space. What can you say about the electric field at the midpoint between them?",
    options: [
      "It is maximum because the midpoint is closest to both charges",
      "It is zero because the two fields there are equal and act in the same direction",
      "It is zero because the two fields there are equal in magnitude and opposite in direction",
      "It is doubled because both fields act along the line joining the charges",
    ],
    correctIndex: 2,
    explanation:
      "The midpoint is the same distance from both charges so the fields there have equal magnitudes, and the positive charge pushes the field one way while the negative charge pulls it the same way, so the two cancel.",
    evidence:
      "At the midpoint of two equal and opposite charges the two field intensities are equal in magnitude and opposite in direction, so the resultant field there is zero.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.3",
    concept: "zero field at midpoint",
  },
  {
    key: "xii-field-resultant-is-vector-sum",
    text: "The fields E1 and E2 at a point are produced by two separate charges, and neither lies along the line of the other. Which statement correctly describes the resultant field at that point?",
    options: [
      "It is the arithmetic sum E1 + E2 of the two field intensities",
      "It is always smaller than each of the two field intensities",
      "It is the difference of the two field intensities whatever their directions",
      "It is the vector sum of E1 and E2, found by the triangle or parallelogram law",
    ],
    correctIndex: 3,
    explanation:
      "Field intensity is a vector quantity, so by the principle of superposition the resultant field at a point is the vector sum of the individual fields and not their arithmetic sum.",
    evidence:
      "According to the principle of superposition, the resultant electric field at a point is the vector sum of the fields produced there by the individual charges.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.3",
    concept: "superposition of fields",
  },
  {
    key: "xii-field-doubled-between-equal-like-charges",
    text: "Two equal positive point charges are placed symmetrically about a point P, with P midway between them. If the field of one charge at P is E, what is the resultant field at P?",
    options: [
      "2E, directed away from both charges along the line joining them",
      "2E, directed towards the two charges",
      "Zero, because the two fields at P are equal and opposite",
      "E, because only the nearer charge is counted at P",
    ],
    correctIndex: 0,
    explanation:
      "At P each positive charge pushes the field away from itself, so both contributions point the same way along the line joining the charges and add up to give 2E.",
    evidence:
      "At the midpoint of two equal charges of the same sign the two field intensities point in the same direction and add together.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.3",
    concept: "added field at midpoint",
  },
  {
    key: "xii-field-resultant-two-like-charges",
    text: "Two point charges of +2 x 10^-6 C and +6 x 10^-6 C are placed on the x axis at x = 0 m and x = 0.20 m. Using 9 x 10^9 N m^2 C^-2, what is the electric field on the line joining them at x = 0.10 m, and in which direction does it act?",
    options: [
      "3.6 x 10^6 N C^-1 directed along the positive x axis",
      "3.6 x 10^6 N C^-1 directed along the negative x axis",
      "7.2 x 10^6 N C^-1 directed along the positive x axis",
      "1.8 x 10^6 N C^-1 directed along the negative x axis",
    ],
    correctIndex: 1,
    explanation:
      "Each charge is 0.10 m from x = 0.10 m, giving 1.8 x 10^6 N C^-1 from +2 x 10^-6 C along +x and 5.4 x 10^6 N C^-1 from +6 x 10^-6 C along -x, so the vector difference is 3.6 x 10^6 N C^-1 along the negative x axis.",
    evidence:
      "For two point charges of the same sign the field on the line joining them is the vector difference of the two field intensities.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 98,
    outcome: "PHY-8.3",
    concept: "resultant field two charges",
  },
  {
    key: "xii-field-resultant-between-unlike-charges",
    text: "A charge of +4 x 10^-6 C is fixed at the origin and a charge of -8 x 10^-6 C is fixed at x = 0.30 m on the x axis. What is the magnitude of the electric field at the point x = 0.10 m on the x axis?",
    options: [
      "1.8 x 10^6 N C^-1",
      "7.2 x 10^6 N C^-1",
      "5.4 x 10^6 N C^-1",
      "3.6 x 10^6 N C^-1",
    ],
    correctIndex: 2,
    explanation:
      "The +4 x 10^-6 C charge gives 3.6 x 10^6 N C^-1 at 0.10 m and the -8 x 10^-6 C charge gives 1.8 x 10^6 N C^-1 at 0.20 m, and at a point between unlike charges both act the same way, so they add to 5.4 x 10^6 N C^-1.",
    evidence:
      "In the region between two unlike charges the two field intensities act in the same direction and the resultant is their arithmetic sum.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-8.3",
    concept: "resultant field between unlike",
  },
  {
    key: "xii-field-superposition-procedure",
    text: "Two point charges sit off the line that joins them to a point P. Which sequence of steps gives the correct resultant electric field at P?",
    options: [
      "Add the magnitudes of the two fields and divide the sum by the distance to the nearer charge",
      "Find the force on a unit charge from each source separately and multiply the two forces together",
      "Add the two charges algebraically and then apply the field formula for that single total charge",
      "Find the field of each charge at P, resolve each into components, and add components along the same axis",
    ],
    correctIndex: 3,
    explanation:
      "Superposition requires the field of each charge at P to be found separately, resolved along chosen axes and then added component-wise, because field intensity is a vector quantity.",
    evidence:
      "To obtain the resultant field at a point, the individual field intensities are resolved into components and added algebraically along each axis.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.3",
    concept: "superposition procedure",
  },
];