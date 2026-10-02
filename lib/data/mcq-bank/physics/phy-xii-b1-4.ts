import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-elec2-medium-permittivity-force",
    text: "A charge of +2.0 microC is held 0.30 m from a charge of +3.0 microC in a large tank of insulating oil whose relative permittivity is 3. Using k = 9 x 10^9 N m^2 C^-2, the magnitude of the force between the two charges is:",
    options: ["0.067 N", "0.60 N", "0.20 N", "0.09 N"],
    correctIndex: 2,
    explanation:
      "In a medium of relative permittivity 3 the force is cut to one third, so F = (9 x 10^9)(2.0 x 10^-6)(3.0 x 10^-6)/(3 x 0.30^2) = 0.054/0.27 = 0.20 N.",
    evidence:
      "The mutual force between two charges in a medium of relative permittivity er is reduced to one part in er compared with its value in vacuum.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.1",
    concept: "coulomb law in medium",
  },
  {
    key: "xii-elec2-force-scaling-charge-and-distance",
    text: "Two charges attract with a force of 5.0 N. Each charge is then replaced by one of twice the magnitude, and the separation between them is halved. The new force between them is:",
    options: ["80 N", "20 N", "10 N", "2.5 N"],
    correctIndex: 0,
    explanation:
      "Doubling both charges multiplies the force by 4, and halving the separation multiplies it by a further 4 because the force varies as 1/r^2, so the force becomes 16 x 5.0 N = 80 N.",
    evidence:
      "The force between two point charges varies as the product of the charges and inversely as the square of the distance between them.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.1",
    concept: "force scaling law",
  },
  {
    key: "xii-elec2-permittivity-statements",
    text: "Three statements concern the part played by the medium in the electrostatic force. (I) A liquid of relative permittivity 4 reduces the force between two fixed charges to one quarter of its value in vacuum. (II) The constant 9 x 10^9 N m^2 C^-2 keeps its value in every material. (III) Doubling the relative permittivity of the medium halves the force between the charges. Which combination of statements is correct?",
    options: [
      "Only I is correct",
      "Only II and III are correct",
      "Only III is correct",
      "Only I and III are correct",
    ],
    correctIndex: 3,
    explanation:
      "The force varies inversely with the relative permittivity, so a medium of 4 cuts it to a quarter and doubling the permittivity halves it. The numerical constant 9 x 10^9 belongs to vacuum and is replaced by 9 x 10^9/er in a material, so statement II fails.",
    evidence:
      "In a medium of relative permittivity er the constant of Coulomb's law becomes 9 x 10^9/er N m^2 C^-2.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.1",
    concept: "relative permittivity effect",
  },
  {
    key: "xii-elec2-dielectric-screening-reason",
    text: "Two charged particles are held a fixed distance apart in a non-conducting liquid instead of in air, and the mutual force falls. The reduction takes place because:",
    options: [
      "the liquid draws charge away from the surfaces of the particles",
      "the polarised molecules of the liquid set up a field that opposes and partly screens each charge",
      "the charges drift apart inside the liquid so that the separation increases",
      "the liquid conducts the charges away to the walls of the vessel",
    ],
    correctIndex: 1,
    explanation:
      "In a dielectric the bound charges of the polarised molecules are displaced slightly, and the field they produce opposes the field of each free charge, so each charge is partly screened and the mutual force falls to one part in the relative permittivity.",
    evidence:
      "A dielectric weakens the mutual force between charges because the polarisation of its molecules produces a field opposing the field of each charge.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-8.1",
    concept: "dielectric polarisation screening",
  },
  {
    key: "xii-elec2-two-charge-force-numeric",
    text: "Point charges of 4.0 microC each are held 0.20 m apart in air. Taking k = 9 x 10^9 N m^2 C^-2, the magnitude of the force between them is:",
    options: ["3.6 N", "72 N", "0.36 N", "1.8 N"],
    correctIndex: 0,
    explanation:
      "Substituting in Coulomb's law, F = (9 x 10^9)(4.0 x 10^-6)(4.0 x 10^-6)/(0.20)^2 = 0.144/0.040 = 3.6 N.",
    evidence:
      "The force between two point charges separated by a distance r in air is F = k q1 q2/r^2 with k = 9 x 10^9 N m^2 C^-2.",
    questionType: "MDCAT_STYLE",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-8.1",
    concept: "coulomb force calculation",
  },
  {
    key: "xii-elec2-coulomb-law-validity",
    text: "The expression F = k q1 q2 / r^2 is an exact statement of the mutual force when the two charged bodies are:",
    options: [
      "of any size, provided the distance between their centres is used",
      "insulated conductors, whatever their shape happens to be",
      "point charges, or charge distributions that are spherically symmetric about a centre",
      "close enough together for charge to pass from one body to the other",
    ],
    correctIndex: 3,
    explanation:
      "The simple inverse square form holds exactly for point charges and for charges arranged spherically symmetrically, because from outside such a distribution the system behaves like a single charge at its centre. For other shapes, and for bodies close enough to disturb each other's charge, the simple formula does not apply.",
    evidence:
      "Coulomb's law in the form F = k q1 q2/r^2 holds exactly for point charges and for spherically symmetric charge distributions.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "PHY-8.1",
    concept: "validity of coulomb law",
  },
  {
    key: "xii-elec2-electric-versus-gravitational-force",
    text: "Comparing the electrostatic force with the gravitational force between two particles of ordinary mass that carry electric charges:",
    options: [
      "the gravitational force is the larger, because mass acts at every distance",
      "the two forces are equal in magnitude while the particles are at rest",
      "the electrostatic force is enormously the larger, and it acts between like charges as well as unlike ones",
      "the electrostatic force is the larger only for charges of opposite sign",
    ],
    correctIndex: 2,
    explanation:
      "Gravity acts only between masses and is extraordinarily weak, so even a modest pair of charges exerts a force far greater than the gravitational pull between them, and that force is repulsive for like charges just as it is attractive for unlike ones.",
    evidence:
      "The electrostatic force between two charged particles is enormously greater than the gravitational force between them, and it is attractive for unlike charges and repulsive for like ones.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-8.1",
    concept: "electric versus gravitational force",
  },
  {
    key: "xii-elec2-field-test-charge-statements",
    text: "Three statements describe the electric field E at a point. (I) It is the force on a unit positive test charge placed at that point. (II) Its value is the same whether the test charge used to define it is large or small. (III) The force on a negative test charge at that point acts along E. Which combination of statements is correct?",
    options: [
      "Only I and II are correct",
      "Only I and III are correct",
      "I, II and III are correct",
      "Only III is correct",
    ],
    correctIndex: 1,
    explanation:
      "E is the force per unit positive charge and does not depend on the size of the test charge, but it is defined with a positive charge, so the force on a negative charge acts opposite to E and statement III is wrong.",
    evidence:
      "The electric field at a point is the force experienced by a unit positive test charge placed there and is independent of the magnitude of that test charge.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.2",
    concept: "field and test charge",
  },
  {
    key: "xii-elec2-force-on-charge-in-field",
    text: "At a point in an electric field of strength 400 N C^-1 a charge of 2.5 microC is placed. The magnitude of the force acting on it is:",
    options: ["1.0 x 10^-6 N", "1.6 x 10^3 N", "1.0 x 10^-3 N", "160 N"],
    correctIndex: 2,
    explanation:
      "Since E = F/q, the force is F = qE = (2.5 x 10^-6 C)(400 N C^-1) = 1.0 x 10^-3 N.",
    evidence:
      "The force on a charge q placed in an electric field of strength E is F = qE.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-8.2",
    concept: "force from field strength",
  },
  {
    key: "xii-elec2-test-charge-enlargement",
    text: "A small test charge is used to measure a field of 2.0 x 10^3 N C^-1 at a point. If the test charge is made four times larger, while remaining small enough not to disturb the distribution of the source charges, then:",
    options: [
      "the measured field is unchanged, while the force on the test charge becomes four times greater",
      "the measured field and the force on the test charge both become four times greater",
      "the measured field becomes four times greater, while the force on the test charge is unchanged",
      "the measured field and the force on the test charge both become sixteen times greater",
    ],
    correctIndex: 0,
    explanation:
      "The field is fixed by the source charges and the point, so it is unchanged, whereas the force follows F = qE and grows in direct proportion to the charge, becoming four times greater.",
    evidence:
      "The electric field at a point is determined by the source charges alone and does not change when the test charge used to detect it is enlarged.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.2",
    concept: "test charge independence",
  },
  {
    key: "xii-elec2-field-without-test-charge",
    text: "An isolated positive charge is fixed in empty space and no test charge is brought anywhere near it. The region around the charge nevertheless has:",
    options: [
      "no electric field until a charge is placed in it",
      "an electric field only at the surface of the charge",
      "an electric field that is zero at every point of the region",
      "an electric field at every point of the space surrounding the charge",
    ],
    correctIndex: 3,
    explanation:
      "The field is a property of the source charge and the point, so it is present at every point around the charge whether or not anything is placed there; a test charge serves only to detect and measure it.",
    evidence:
      "The electric field exists at every point in the space surrounding a charge, whether or not a test charge is present to detect it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-8.2",
    concept: "existence of electric field",
  },
  {
    key: "xii-elec2-bisector-vector-sum",
    text: "Charges of +2.0 microC each are placed at the two ends of a horizontal line 0.80 m apart. A point P lies 0.30 m above the midpoint of this line. The field at P is:",
    options: [
      "8.64 x 10^4 N C^-1, vertically upward",
      "1.44 x 10^5 N C^-1, vertically upward",
      "3.60 x 10^4 N C^-1, horizontally towards the nearer charge",
      "0 N, since the point is equidistant from the two charges",
    ],
    correctIndex: 0,
    explanation:
      "Each charge is 0.50 m from P and produces E = (9 x 10^9)(2.0 x 10^-6)/(0.50)^2 = 7.2 x 10^4 N C^-1. The components along the line joining the charges cancel by symmetry, while the components along the bisector, each 7.2 x 10^4 x (0.30/0.50) = 4.32 x 10^4 N C^-1, add to 8.64 x 10^4 N C^-1 directed vertically upward.",
    evidence:
      "At a point on the perpendicular bisector of two equal charges of the same sign the components along the line of charges cancel and those along the bisector add.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.3",
    concept: "field on perpendicular bisector",
  },
  {
    key: "xii-elec2-bisector-and-midpoint-statements",
    text: "Two equal charges of the same sign sit at A and B. Three statements concern the field. (I) On the perpendicular bisector of AB the components along AB are equal and opposite, so they cancel. (II) On the same bisector the remaining components both point away from AB along the bisector, so the resultant lies along the bisector. (III) At the midpoint of AB the field is zero. Which combination of statements is correct?",
    options: [
      "Only I and II are correct",
      "Only I and III are correct",
      "I, II and III are correct",
      "Only II and III are correct",
    ],
    correctIndex: 2,
    explanation:
      "Equal charges at the ends of AB give cancelling components along AB everywhere on the perpendicular bisector, and the addable components along the bisector point away from the charges, so I and II hold. At the midpoint the two equal fields point in opposite directions along AB, so the resultant there vanishes and III holds as well.",
    evidence:
      "The field at the midpoint between two equal charges of the same sign is zero because the two contributions are equal and opposite, while on the perpendicular bisector the components along the line of charges cancel.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.3",
    concept: "symmetry of resultant field",
  },
  {
    key: "xii-elec2-three-charge-superposition",
    text: "Three charges are fixed along a straight line: +6.0 microC at one end, -3.0 microC at the middle and +6.0 microC at the other end, the first and third being 0.40 m apart. Taking k = 9 x 10^9 N m^2 C^-2, the field at the point 0.10 m from the first charge is:",
    options: [
      "7.5 x 10^6 N C^-1, directed from the first charge towards the third",
      "7.5 x 10^6 N C^-1, directed from the third charge towards the first",
      "8.7 x 10^6 N C^-1, directed from the third charge towards the first",
      "1.5 x 10^6 N C^-1, directed from the first charge towards the third",
    ],
    correctIndex: 1,
    explanation:
      "The +6.0 microC charge is 0.10 m away and gives 5.4 x 10^6 N C^-1 away from itself, towards the third charge, and the -3.0 microC charge is also 0.10 m away with a field pointing towards it, again in the same direction, of 2.7 x 10^6 N C^-1. The far +6.0 microC charge is 0.30 m away and contributes 6.0 x 10^5 N C^-1 in the opposite direction, so the resultant is 5.4 + 2.7 - 0.6 = 7.5 x 10^6 N C^-1 from the first charge towards the third.",
    evidence:
      "The field at a point is the vector sum of the fields due to the individual charges, each found from its magnitude and its direction at that point.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-8.3",
    concept: "three charge superposition",
  },
  {
    key: "xii-elec2-field-at-tripled-distance",
    text: "A point charge produces a field of 3.6 x 10^5 N C^-1 at a distance of 0.20 m. The field at a distance of 0.60 m from the same charge is:",
    options: ["1.2 x 10^5 N C^-1", "1.8 x 10^5 N C^-1", "4.0 x 10^6 N C^-1", "4.0 x 10^4 N C^-1"],
    correctIndex: 3,
    explanation:
      "Tripling the distance divides the field by 3 squared, so the new field is 3.6 x 10^5/9 = 4.0 x 10^4 N C^-1.",
    evidence:
      "The field of a point charge falls as the inverse square of the distance, so at three times the distance it is one ninth of its earlier value.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.3",
    concept: "inverse square field falloff",
  },
  {
    key: "xii-elec2-far-field-cancellation",
    text: "Two equal and opposite charges are fixed a short distance apart. A point is observed extremely far from the pair, in a direction that is not perpendicular to the line joining them. Compared with the field of a single charge of the same magnitude at the same distance, the field there is:",
    options: [
      "larger, because the two fields add before they can cancel",
      "far smaller, because the two fields are nearly equal and nearly opposite and very nearly cancel",
      "the same, because the pair is no further away than either charge",
      "zero, because the pair carries no net charge",
    ],
    correctIndex: 1,
    explanation:
      "At distances large compared with the separation the fields of the two charges are almost equal in size and almost opposite in direction, so their resultant is very much smaller than either one and falls away far more rapidly, though it does not vanish unless the point lies exactly on the perpendicular bisector.",
    evidence:
      "At distances much greater than the separation the fields of two equal and opposite charges very nearly cancel, so the resultant falls away far more rapidly than the field of a single charge.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-8.3",
    concept: "far field of a charge pair",
  },
  {
    key: "xii-elec2-field-line-statements",
    text: "In any construction of electric field lines, three statements are listed. (I) The number of lines passing through a small area is greater where the field is stronger. (II) The tangent to a field line at any point gives the direction of the field at that point. (III) Where two strong fields superpose, field lines are allowed to cross each other. Which combination of statements is correct?",
    options: [
      "Only I and II are correct",
      "Only I and III are correct",
      "I, II and III are correct",
      "Only II is correct",
    ],
    correctIndex: 0,
    explanation:
      "Lines are drawn closer together where the field is stronger, and every line is everywhere tangent to the field, but two lines can never cross because a point can have only one field direction, so statement III is wrong.",
    evidence:
      "Field lines are drawn so that their number is proportional to the strength of the field and their tangent at any point gives the field direction, and two field lines can never cross.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.4",
    concept: "properties of field lines",
  },
  {
    key: "xii-elec2-unlike-unequal-line-count",
    text: "Two unlike charges of unequal magnitude are placed close together and the field around them is represented by field lines. The correct description of that pattern is:",
    options: [
      "equal numbers of lines leave the larger charge and end on the smaller one, with none reaching infinity",
      "every line leaving the larger charge ends on the smaller one, so none of them reach infinity",
      "the number of lines is proportional to the charge, so lines from the larger charge in excess of those of the smaller one go to infinity",
      "the lines run from the smaller charge to the larger one, since field lines always leave the weaker charge",
    ],
    correctIndex: 2,
    explanation:
      "The number of lines associated with a charge is chosen in proportion to the magnitude of that charge, so the smaller charge can receive only as many lines as it supplies and the surplus lines from the larger charge travel to infinity.",
    evidence:
      "The number of field lines associated with a charge is proportional to the magnitude of that charge, and the surplus lines of unlike charges of unequal size go to infinity.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.4",
    concept: "line count and charge size",
  },
  {
    key: "xii-elec2-sketch-like-charges-sequence",
    text: "To sketch in words the field pattern of two equal positive charges placed side by side, the correct order of steps is:",
    options: [
      "draw the lines first, then place the charges, then add the arrows",
      "place one charge, place the second charge, then join them with a single line",
      "send lines inward from infinity towards both charges and mark the arrows pointing inwards",
      "place both charges, send lines outward from each so that they curve away from the other charge, then mark the arrows pointing away from both",
    ],
    correctIndex: 3,
    explanation:
      "The pattern is built by placing the two source charges, then drawing lines that leave each one and bow away from its neighbour, and finally marking the direction, which for positive charges is outward everywhere along every line.",
    evidence:
      "The field lines of two like charges leave each charge and curve away from the other, so the pattern is crowded along the line joining the charges and sparse on the perpendicular bisector.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-8.4",
    concept: "field pattern procedure",
  },
  {
    key: "xii-elec2-sheet-field-statements",
    text: "An infinite sheet carries a uniform surface charge density. Three statements concern its field. (I) The field is the same at every distance from the sheet. (II) The field has the same magnitude on the two sides, and for positive charge it points away from the sheet. (III) Doubling the surface charge density doubles the field. Which combination of statements is correct?",
    options: [
      "Only I and II are correct",
      "I, II and III are correct",
      "Only II and III are correct",
      "Only I is correct",
    ],
    correctIndex: 1,
    explanation:
      "The field of an infinite uniformly charged sheet is the same on both sides, it does not weaken as the point moves away from the sheet, and it is directly proportional to the surface charge density, so all three statements hold.",
    evidence:
      "The field of an infinite uniformly charged sheet is of constant magnitude, the same on either side, and is proportional to the surface charge density.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.5",
    concept: "field of an infinite sheet",
  },
  {
    key: "xii-elec2-sheet-density-ratio",
    text: "A second infinite sheet carries three times the surface charge density of a first sheet, and both sheets are positively charged. At any point in front of the second sheet, its field is:",
    options: [
      "three times the field of the first sheet",
      "one third of the field of the first sheet",
      "nine times the field of the first sheet",
      "equal to the field of the first sheet, since the field of a sheet is independent of its charge",
    ],
    correctIndex: 0,
    explanation:
      "The field of an infinite sheet is directly proportional to its surface charge density and does not depend on the distance of the point from the sheet, so a density three times larger gives a field three times as strong.",
    evidence:
      "The field of an infinite charged sheet is proportional to the surface charge density and independent of the distance of the point from the sheet.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-8.5",
    concept: "sheet charge density ratio",
  },
  {
    key: "xii-elec2-sheet-versus-point-ratio",
    text: "A large positively charged sheet is 0.20 m from point P1 and 1.00 m from point P2, and a point charge is 0.20 m from P1 and 1.00 m from P2. How do the fields at these two points compare in each case?",
    options: [
      "Sheet: equal at P1 and P2; point charge: 25 times larger at P1 than at P2",
      "Sheet: 5 times larger at P1; point charge: 25 times larger at P1",
      "Sheet: 5 times larger at P1; point charge: 5 times larger at P1",
      "Sheet: 25 times larger at P1; point charge: equal at P1 and P2",
    ],
    correctIndex: 2,
    explanation:
      "The field of a sheet does not depend on distance, so it is the same at 0.20 m and at 1.00 m, while the field of a point charge varies as the inverse square of the distance, giving the ratio (1.00/0.20)^2 = 25 in favour of the nearer point P1.",
    evidence:
      "The field of an infinite sheet is independent of the distance of the point from it, whereas the field of a point charge varies inversely as the square of that distance.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.5",
    concept: "sheet and point charge dependence",
  },
  {
    key: "xii-elec2-field-potential-zero-statements",
    text: "Three statements compare the electric field E and the electric potential V at a point. (I) Wherever E is zero, V must also be zero. (II) V can be zero at a point even though a charge is present. (III) E can be zero at a point at which charges surround it symmetrically. Which combination of statements is correct?",
    options: [
      "Only I and II are correct",
      "Only I and III are correct",
      "I, II and III are correct",
      "Only II and III are correct",
    ],
    correctIndex: 3,
    explanation:
      "A zero field means only that the vector contributions cancel, as at the midpoint of two equal like charges, so III holds, and the potential is a scalar that adds algebraically, so the potentials of equal and opposite charges cancel at their midpoint and II holds. A zero field says nothing about the value of the potential, so I fails.",
    evidence:
      "The potential at a point is the algebraic sum of the potentials of the individual charges while the field is their vector sum, so a zero field does not imply a zero potential.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-8.6",
    concept: "field versus potential",
  },
  {
    key: "xii-elec2-two-stage-work-from-infinity",
    text: "Bringing a charge of +4.0 microC slowly from a very large distance to a point 0.50 m from a fixed charge of +2.0 microC, and then moving it slowly along the line of centres to a point 0.30 m from the fixed charge, the total work done against the electric force is:",
    options: ["0.048 J", "0.096 J", "0.144 J", "0.240 J"],
    correctIndex: 1,
    explanation:
      "The work depends only on the initial and final distances, and it can be found in one step as k q1 q2 times the difference of the reciprocals, (9 x 10^9)(2.0 x 10^-6)(4.0 x 10^-6) x (1/0.30 - 1/0.50) = 0.072 x 1.333 = 0.096 J, which equals the 0.24 J needed to reach 0.30 m from infinity less the 0.144 J needed to reach only 0.50 m.",
    evidence:
      "The work done in bringing a charge q from infinity to a distance r from a fixed charge Q is W = kQq/r, so the work between two finite distances is the difference of the two values.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.6",
    concept: "work from infinity in stages",
  },
  {
    key: "xii-elec2-work-from-infinity-steps",
    text: "To find the work done in bringing a charge q from infinity to a point near a single fixed charge Q, which order of steps is correct?",
    options: [
      "take infinity as the zero of potential, find the potential V at the point, then multiply V by q",
      "multiply q by Q first, then find the distance, then subtract this product from the constant k",
      "find the field at the point, multiply it by the distance, then multiply by q",
      "take the point itself as the zero of potential, then find the work, then divide by q",
    ],
    correctIndex: 0,
    explanation:
      "Potential is defined as the work done per unit charge in bringing a test charge from infinity, so infinity is taken as the zero of potential, the potential of the point is found first from the source charge, and the work for the actual charge is that potential multiplied by q.",
    evidence:
      "The work done in bringing a charge q from infinity to a point is W = qV, where V is the potential of that point with infinity taken as the zero of potential.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.6",
    concept: "procedure for work from infinity",
  },
];
