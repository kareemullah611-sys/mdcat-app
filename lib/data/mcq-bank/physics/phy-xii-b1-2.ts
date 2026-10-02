import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-pot-lines-begin-and-end",
    text: "Electric field lines are drawn to represent the electric field of a charge. Which statement correctly describes where these lines begin and end?",
    options: [
      "They begin on positive charges and end on negative charges",
      "They begin on negative charges and end on positive charges",
      "They begin and end on the same charge, forming closed loops",
      "They begin at points where the field is zero and end on the charges",
    ],
    correctIndex: 0,
    explanation:
      "Lines are drawn outwards from positive charges, which is where they start, and inwards into negative charges, which is where they terminate, so the two ends of a line carry opposite signs.",
    evidence:
      "The electric field lines start from positive charges and end on negative charges.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-8.4",
    concept: "origin of field lines",
  },
  {
    key: "xii-pot-line-count-follows-charge",
    text: "When the field lines of a positive point charge are drawn, the number of lines used is fixed by a standard convention. What is that convention?",
    options: [
      "Ten lines are drawn for every charge, however small or large",
      "The number drawn is inversely proportional to the magnitude of the charge",
      "The number drawn is directly proportional to the magnitude of the charge",
      "The number drawn is proportional to the square of the magnitude of the charge",
    ],
    correctIndex: 2,
    explanation:
      "The number of field lines drawn is made proportional to the magnitude of the charge, so a charge of twice the magnitude is given twice as many lines.",
    evidence:
      "The number of field lines drawn is proportional to the magnitude of the charge they represent.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-8.4",
    concept: "field line convention",
  },
  {
    key: "xii-pot-lines-cannot-cross",
    text: "A student claims that two electric field lines belonging to one point charge must meet at some point. Which response is correct?",
    options: [
      "The claim holds, because lines of a single charge eventually spread into a single line",
      "The claim fails, because the field at a point has one definite direction and two lines there would need two different directions",
      "The claim holds, because lines that begin at the same charge curve back towards it",
      "The claim fails, but only because field lines are always straight everywhere",
    ],
    correctIndex: 1,
    explanation:
      "Two lines meeting at a point would give two directions for the field at that point, and since the field at a point has only one direction, field lines never cross one another.",
    evidence:
      "Electric field lines never intersect one another because the field at any point has a single direction.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.4",
    concept: "field lines never cross",
  },
  {
    key: "xii-pot-line-density-shows-strength",
    text: "Two small neighbouring patches of space lie inside the field of one point charge. One patch is crossed by closely packed field lines and the other by widely spaced lines. What does this difference tell you?",
    options: [
      "Both patches have the same field strength because they lie in the same field",
      "The patch with widely spaced lines has the stronger field because the lines there are longer",
      "The patch with widely spaced lines has the stronger field because the charge is farther away",
      "The patch with closely packed lines has the stronger field because lines are packed closer where the field is greater",
    ],
    correctIndex: 3,
    explanation:
      "The closeness of the field lines is used to show the strength of the field, so packed lines mark a region of strong field and widely spaced lines mark a region of weak field.",
    evidence:
      "Field lines are drawn closer together where the electric field is strong and farther apart where it is weak.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.4",
    concept: "field line density",
  },
  {
    key: "xii-pot-like-charges-neutral-midpoint",
    text: "Two equal positive point charges are held fixed a distance apart in free space. What is the field-line pattern in the region between them?",
    options: [
      "The lines bend away from the line joining the charges, and the field at the midpoint is zero",
      "The lines run in an unbroken straight path from one charge to the other",
      "The lines crowd together and cross at the midpoint, where the field is strongest",
      "The lines curve back towards each charge and never reach the midpoint",
    ],
    correctIndex: 0,
    explanation:
      "The lines leaving two like charges push away from one another, and at the midpoint each charge gives a field of equal magnitude in opposite directions, so the resultant field there is zero.",
    evidence:
      "For two equal charges of the same sign the field lines repel one another and a neutral point of zero field lies midway between them.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.4",
    concept: "like charge field pattern",
  },
  {
    key: "xii-pot-unlike-charge-line-statements",
    text: "Regarding the field of two equal and opposite point charges, the following statements are made. (I) Every line leaving the positive charge ends on the negative charge, and the field at the midpoint is zero. (II) Lines leaving the positive charge continue past the negative charge out to infinity. Which combination is correct?",
    options: [
      "Only II is correct",
      "Both I and II are correct",
      "Only I is correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "Since the two charges are equal and opposite, every line leaving the positive charge terminates on the negative charge and the midpoint fields cancel, so statement I holds while statement II fails.",
    evidence:
      "For two equal and opposite charges all field lines leaving the positive charge end on the negative charge and the field at the midpoint is zero.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.4",
    concept: "unlike charge line pattern",
  },
  {
    key: "xii-pot-far-field-of-like-pair",
    text: "Two equal positive charges of 2 x 10^-9 C are placed at x = 0 m and x = 0.20 m. Using 9 x 10^9 N m^2 C^-2, what is the approximate field at x = 1.20 m on the x axis, treating the pair as a single charge at their midpoint?",
    options: ["18.0 N C^-1", "29.8 N C^-1", "12.5 N C^-1", "30.5 N C^-1"],
    correctIndex: 1,
    explanation:
      "Far from the pair the two charges act as one charge of 4 x 10^-9 C at x = 0.10 m, so E = (9 x 10^9)(4 x 10^-9)/(1.10)^2 = 29.8 N C^-1, close to the exact vector sum of 30.5 N C^-1.",
    evidence:
      "At distances large compared with the separation, two equal charges of the same sign produce a field as if all their charge were placed at the midpoint.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.4",
    concept: "pair far field estimate",
  },
  {
    key: "xii-pot-line-termination-comparison",
    text: "Two pairs of equal charges are compared: in one pair the charges have the same sign and in the other pair they have opposite signs. Which statement about the field lines of the two pairs is correct?",
    options: [
      "In the unlike pair the lines leave the positive charge and end on the negative charge, while in the like pair no line leaving one charge ends on the other",
      "In the like pair the lines leave one charge and end on the other, while in the unlike pair the lines bend apart from each other",
      "In both pairs the lines join the two charges because equal charges produce equal fields",
      "In both pairs the lines run out to infinity because equal charges produce an unbounded field",
    ],
    correctIndex: 0,
    explanation:
      "Between two equal and opposite charges the lines run from the positive charge to the negative one, while for two equal and like charges the neutral point between them prevents any line from reaching the other charge.",
    evidence:
      "Field lines join two equal and opposite charges but never join two equal charges of the same sign, which repel one another.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.4",
    concept: "line termination in pairs",
  },
  {
    key: "xii-pot-field-pattern-check-steps",
    text: "A pair of equal positive charges sits apart in space and their field-line pattern is to be described in words. Which sequence of steps gives the correct description?",
    options: [
      "Add the two charges into one charge of double magnitude and describe the field of that single charge",
      "Check that both charges carry the same number of lines, confirm that no line from one charge reaches the other, and note the neutral point at the midpoint",
      "Trace lines from each charge to the other charge and then join the two sets of lines together",
      "Ignore the region between the charges because the fields of like charges never reach that region",
    ],
    correctIndex: 1,
    explanation:
      "A correct description must use the conventions that equal charges carry equal numbers of lines, that no line of a like pair ends on the other charge, and that the midpoint is a neutral point.",
    evidence:
      "For two equal charges of the same sign the field lines do not join the charges and the point midway between them has zero field.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-8.4",
    concept: "field pattern procedure",
  },
  {
    key: "xii-pot-sheet-field-perpendicular",
    text: "A very large flat sheet carries a uniform surface charge density. Which statement describes the direction of the electric field produced by such a sheet?",
    options: [
      "Along the sheet and parallel to its surface",
      "Perpendicular to the sheet, pointing away from it when the sheet is positively charged",
      "Perpendicular to the sheet but reversing direction near the edges of the sheet",
      "At a constant angle of 45 degrees to the surface of the sheet",
    ],
    correctIndex: 1,
    explanation:
      "The field of an infinite sheet is symmetric on the two faces, so any component along the sheet cancels and only the perpendicular component survives, directed away from a positive sheet.",
    evidence:
      "The electric field of an infinite charged sheet is directed normally to the sheet, away from it for positive charge.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-8.5",
    concept: "direction of sheet field",
  },
  {
    key: "xii-pot-sheet-field-statements",
    text: "An isolated infinite non-conducting sheet is being considered. (I) The magnitude of its field is the same at every distance from the sheet. (II) Its field points in opposite directions on the two sides. Which combination is correct?",
    options: [
      "Only I is correct",
      "Only II is correct",
      "Both I and II are incorrect",
      "Both I and II are correct",
    ],
    correctIndex: 3,
    explanation:
      "Each sheet supplies half its field to either side, so the two sides carry equal magnitudes while pointing in opposite directions, which makes both statements correct.",
    evidence:
      "The field of an infinite sheet has uniform magnitude independent of distance and points perpendicularly away from a positive sheet on each side.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.5",
    concept: "uniformity of sheet field",
  },
  {
    key: "xii-pot-sheet-field-distance-independent",
    text: "Unlike the field of a point charge, the field of an infinite charged sheet does not weaken as one moves away from it. How is this accounted for?",
    options: [
      "The field of the ring at 45 degrees is added to the field of the ring directly overhead, since the weaker slanting contribution makes up exactly for the extra geometrical spreading",
      "The ring directly overhead gives a stronger field than the ring at 45 degrees, so adding the two rings simply increases the total",
      "The charge on the sheet spreads over a wider area as distance increases, so the sheet appears weaker but not smaller",
      "The inverse square law holds for the sheet too, since every point of the sheet lies at a different distance from the observer",
    ],
    correctIndex: 0,
    explanation:
      "The ring directly overhead is the farthest away and so gives the weakest share, and the rings at larger angles on the sloping cone contribute just enough to replace this loss, leaving the total independent of height.",
    evidence:
      "The field of an infinite plane sheet stays constant because contributions from rings of charge at increasing angles compensate for the increasing distance.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-8.5",
    concept: "constant field of sheet",
  },
  {
    key: "xii-pot-nonconducting-sheet-field-value",
    text: "A large isolated non-conducting sheet carries a surface charge density of 4.0 x 10^-6 C m^-2. Taking epsilon0 = 8.85 x 10^-12 F m^-1, what is the electric field produced by the sheet?",
    options: [
      "1.13 x 10^5 N C^-1",
      "2.26 x 10^5 N C^-1",
      "4.52 x 10^5 N C^-1",
      "5.65 x 10^11 N C^-1",
    ],
    correctIndex: 1,
    explanation:
      "An isolated non-conducting sheet gives E = sigma/(2 epsilon0), so E = (4.0 x 10^-6)/(2 x 8.85 x 10^-12) = 2.26 x 10^5 N C^-1.",
    evidence:
      "The field due to an isolated non-conducting infinite sheet is E = sigma/(2 epsilon0), where sigma is the surface charge density.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-8.5",
    concept: "nonconducting sheet field",
  },
  {
    key: "xii-pot-conducting-plate-outside-field",
    text: "A very large conducting plate carries a surface charge density of 3.2 x 10^-6 C m^-2 on one of its faces. Taking epsilon0 = 8.85 x 10^-12 F m^-1, what is the field just outside that face?",
    options: [
      "1.81 x 10^5 N C^-1",
      "7.24 x 10^5 N C^-1",
      "3.62 x 10^5 N C^-1",
      "3.62 x 10^6 N C^-1",
    ],
    correctIndex: 2,
    explanation:
      "Just outside a conductor E = sigma/epsilon0, so E = (3.2 x 10^-6)/(8.85 x 10^-12) = 3.62 x 10^5 N C^-1, twice the value for an isolated non-conducting sheet of the same charge density.",
    evidence:
      "The electric field just outside a conductor carrying surface charge density sigma is E = sigma/epsilon0.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-8.5",
    concept: "field outside conductor",
  },
  {
    key: "xii-pot-charge-near-plate-force",
    text: "A large conducting plate carries a surface charge density of 4.0 x 10^-6 C m^-2 on one of its faces, and a charge of +2.0 x 10^-9 C is held 5 cm from that face. Taking epsilon0 = 8.85 x 10^-12 F m^-1, what force does the plate exert on the charge?",
    options: ["9.0 x 10^-8 N", "4.5 x 10^-5 N", "1.8 x 10^-3 N", "9.0 x 10^-4 N"],
    correctIndex: 3,
    explanation:
      "The field just outside the plate is sigma/epsilon0 = 4.52 x 10^5 N C^-1 at any distance, so F = qE = (2.0 x 10^-9)(4.52 x 10^5) = 9.0 x 10^-4 N, directed away from the plate.",
    evidence:
      "A charge q in the field just outside a conductor experiences the force F = q sigma/epsilon0, since that field does not depend on the distance from the surface.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-8.5",
    concept: "force near charged plate",
  },
  {
    key: "xii-pot-sheet-field-two-distances",
    text: "The field of an isolated infinite non-conducting sheet is measured at a distance of 1 cm from the sheet and again at a distance of 1 m from it. How do the two magnitudes compare?",
    options: [
      "The value at 1 m is one hundred times smaller because the inverse square law applies",
      "The value at 1 m is one hundred times larger because the sheet continues to produce charge",
      "The two values are equal because the field of an infinite sheet does not depend on the distance from it",
      "The value at 1 cm is twice the value at 1 m because the field falls off steadily with distance",
    ],
    correctIndex: 2,
    explanation:
      "The field of an infinite sheet is the same everywhere, so moving the point of measurement from 1 cm to 1 m leaves the magnitude unchanged at sigma/(2 epsilon0).",
    evidence:
      "The field due to an infinite plane sheet is constant and does not diminish with increasing distance from the sheet.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.5",
    concept: "distance and sheet field",
  },
  {
    key: "xii-pot-sheet-versus-conductor-field",
    text: "The same surface charge density sigma is given to an isolated non-conducting sheet and to the face of a large conducting plate. How do the fields just outside the two surfaces compare?",
    options: [
      "The field outside the conductor is twice the field outside the sheet",
      "The two fields are equal because the charge density is the same",
      "The field outside the conductor is half the field outside the sheet",
      "The field outside the sheet is twice the field outside the conductor",
    ],
    correctIndex: 0,
    explanation:
      "An isolated non-conducting sheet gives sigma/(2 epsilon0) whereas a conductor gives sigma/epsilon0 just outside its surface, so the field outside the conductor is twice as large.",
    evidence:
      "The field just outside a conductor is sigma/epsilon0, twice the field sigma/2epsilon0 of an isolated non-conducting sheet carrying the same surface charge density.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.5",
    concept: "sheet and conductor comparison",
  },
  {
    key: "xii-pot-potential-work-per-charge",
    text: "The electric potential at a point is defined as the work done in bringing a unit positive test charge slowly from infinity to that point. Which expression gives the potential there?",
    options: ["V = W x q", "V = q / W", "V = W / q", "V = W q^2"],
    correctIndex: 2,
    explanation:
      "The potential is the work done per unit charge, so the work divided by the charge gives V = W/q, which comes out in joule per coulomb.",
    evidence:
      "The potential at a point is defined as the work done in bringing a unit positive charge from infinity to that point.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-8.6",
    concept: "definition of potential",
  },
  {
    key: "xii-pot-volt-unit-definition",
    text: "Potential and potential difference are measured in a unit that is named after a scientist. Which choice names that unit correctly and gives its definition?",
    options: [
      "The joule, equal to one newton metre",
      "The volt, equal to one joule per coulomb",
      "The weber, equal to one volt second",
      "The farad, equal to one coulomb per volt",
    ],
    correctIndex: 1,
    explanation:
      "Because potential is work done per unit charge, its unit is the joule per coulomb, and this unit is called the volt.",
    evidence:
      "The unit of electric potential is the volt, which is equal to one joule per coulomb.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-8.6",
    concept: "unit of potential",
  },
  {
    key: "xii-pot-potential-scalar-field-vector",
    text: "The electric field and the electric potential are both evaluated at the same point of space. How do the two quantities differ in character?",
    options: [
      "The field is a vector quantity while the potential is a scalar",
      "The potential is a vector quantity while the field is a scalar",
      "Both are scalars and either may be added to the other directly",
      "Both are vectors and both must be resolved into components before use",
    ],
    correctIndex: 0,
    explanation:
      "Field intensity has direction as well as size and is added as a vector, whereas the potential is work done per unit charge and is a plain number added algebraically.",
    evidence:
      "Electric potential is a scalar quantity whereas electric field intensity is a vector quantity.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.6",
    concept: "scalar and vector character",
  },
  {
    key: "xii-pot-potential-test-charge-independence",
    text: "The potential at a point P is found by bringing different test charges to P from infinity and measuring the work done in each case. What does the resulting potential at P depend on?",
    options: [
      "It depends on the source charges and the position P alone, and not on the size of the test charge used",
      "It depends on the magnitude of the test charge, since more work is needed to move a larger charge",
      "It depends on the source charges and on the size of the test charge in equal measure",
      "It depends only on the distance that the test charge is carried through the field",
    ],
    correctIndex: 0,
    explanation:
      "The work done grows in proportion to the test charge, so the ratio W/q comes out the same for every test charge and the potential belongs to the source charges and the point alone.",
    evidence:
      "Since the work done in bringing a charge from infinity is proportional to the charge, the potential is the same whatever test charge is used to measure it.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.6",
    concept: "potential and test charge",
  },
  {
    key: "xii-pot-potential-from-work-done",
    text: "A work of 0.060 J is done in bringing a charge of 3.0 x 10^-6 C slowly from infinity to a point. What is the electric potential at that point?",
    options: [
      "2.0 x 10^4 V",
      "5.0 x 10^-5 V",
      "1.8 x 10^-5 V",
      "2.0 x 10^2 V",
    ],
    correctIndex: 0,
    explanation:
      "The potential is the work per unit charge, so V = 0.060/(3.0 x 10^-6) = 2.0 x 10^4 V, which is positive because work has been done against the repulsion of a positive source charge.",
    evidence:
      "The electric potential at a point equals the work done in bringing a unit positive charge from infinity to that point.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-8.6",
    concept: "potential from work",
  },
  {
    key: "xii-pot-point-charge-potential",
    text: "A point charge of +6.0 x 10^-9 C is placed in free space. Using 9 x 10^9 N m^2 C^-2, what is the electric potential at a point 0.30 m from the charge?",
    options: ["60 V", "540 V", "1800 V", "180 V"],
    correctIndex: 3,
    explanation:
      "The potential of a point charge is V = kq/r, so V = (9 x 10^9)(6.0 x 10^-9)/(0.30) = 180 V, and the sign is positive because the charge is positive.",
    evidence:
      "The electric potential at a distance r from a point charge q is V = q/(4 pi epsilon0 r).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-8.6",
    concept: "point charge potential",
  },
  {
    key: "xii-pot-work-to-reach-potential",
    text: "A point in an electric field has a potential of 200 V. What work must be done in bringing a charge of +4.0 x 10^-5 C slowly from infinity to that point?",
    options: [
      "8.0 x 10^7 J",
      "2.5 x 10^-2 J",
      "5.0 x 10^3 J",
      "8.0 x 10^-3 J",
    ],
    correctIndex: 3,
    explanation:
      "Since V = W/q the work done is W = qV = (4.0 x 10^-5)(200) = 8.0 x 10^-3 J, and it is positive because the potential of the point is positive.",
    evidence:
      "The work required to bring a charge q from infinity to a point of potential V is W = qV.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-8.6",
    concept: "work from potential",
  },
  {
    key: "xii-pot-field-to-potential-steps",
    text: "The dependence of the potential of a point charge on the distance r follows in two steps from Coulomb's law. Which sequence of steps is correct?",
    options: [
      "Divide the Coulomb force by the square of the distance to obtain the potential directly",
      "Divide the Coulomb force by the square of the distance to get the field, then multiply that radial field by the distance to get the potential",
      "Divide the Coulomb force by the distance to obtain the potential directly",
      "Multiply the Coulomb force by the distance to obtain the potential, since potential increases with distance",
    ],
    correctIndex: 1,
    explanation:
      "Dividing the force by the square of the distance gives E = kq/r^2, and multiplying this radial field by the distance gives V = kq/r, so the field falls as the inverse square while the potential falls as the inverse of the distance.",
    evidence:
      "The potential of a point charge varies as the inverse of the distance while its field varies as the inverse square of the distance.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-8.6",
    concept: "potential from field",
  },
];