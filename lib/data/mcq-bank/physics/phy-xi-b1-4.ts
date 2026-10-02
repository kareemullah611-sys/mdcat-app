import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "dotb-perpendicular-vectors-dot-zero",
    text: "Two vectors A and B act at right angles to each other, so the value of the dot product A . B is",
    options: ["A times B", "zero", "the sum of their magnitudes", "the difference of their magnitudes"],
    correctIndex: 1,
    explanation:
      "A . B = AB cos theta, and cos 90 degrees is zero, so a right angle always produces a zero dot product however large the two magnitudes are.",
    evidence:
      "The scalar product A . B = AB cos theta vanishes when the two vectors are at right angles to each other.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-1.2",
    concept: "perpendicular dot product",
  },
  {
    key: "dotb-vector-with-itself-squared",
    text: "For any non-zero vector A, the dot product of A with itself is",
    options: ["the square of its magnitude", "its magnitude", "zero unless A is the zero vector", "the sum of its components"],
    correctIndex: 0,
    explanation:
      "Putting B = A in A . B = AB cos theta gives A . A = A x A x cos 0 degrees = A^2, so the self dot product returns the square of the magnitude, never the magnitude itself.",
    evidence:
      "The dot product of a vector with itself equals the square of its magnitude, so A . A = A^2.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-1.2",
    concept: "square of magnitude",
  },
  {
    key: "dotb-constant-force-closed-path",
    text: "A constant force acts on a body while the body is taken once around a closed path and ends at its starting point. The work done by this force over the path is",
    options: [
      "positive, because the force keeps acting throughout",
      "negative, because the path is longer than the straight line",
      "zero, because the net displacement of the body is zero",
      "equal to the force multiplied by the length of the path",
    ],
    correctIndex: 2,
    explanation:
      "For a constant force W = F . d, and a closed path leaves the net displacement d equal to zero, so W = F . 0 = 0 whatever the shape or length of the path.",
    evidence:
      "The work done by a constant force is the scalar product of that force with the displacement between the initial and final points.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-1.2",
    concept: "work on closed path",
  },
  {
    key: "dotb-magnitude-from-components-five",
    text: "A vector is given by A = 3i + 4j m. The magnitude of this vector, obtained from the self dot product, is",
    options: ["5 m", "7 m", "12 m", "25 m"],
    correctIndex: 0,
    explanation:
      "A . A = 3(3) + 4(4) = 9 + 16 = 25 m^2, and since A . A equals A^2 the magnitude is sqrt(25) = 5 m.",
    evidence:
      "The magnitude of a vector A = ax i + ay j follows from A . A = ax^2 + ay^2, so A = sqrt(A . A).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-1.2",
    concept: "magnitude from components",
  },
  {
    key: "dotb-obtuse-angle-from-negative-dot",
    text: "Two vectors have magnitudes 6 units and 4 units and their dot product is -12 square units. The angle between them is",
    options: ["60 degrees", "90 degrees", "150 degrees", "120 degrees"],
    correctIndex: 3,
    explanation:
      "cos theta = A . B / (AB) = -12 / (6 x 4) = -12 / 24 = -0.5, so theta = 120 degrees; the negative dot product shows the angle must be greater than 90 degrees.",
    evidence:
      "Since A . B = AB cos theta, a negative scalar product means the angle between the two vectors is obtuse.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-1.2",
    concept: "obtuse angle calculation",
  },
  {
    key: "dotb-acute-angle-two-components",
    text: "Two vectors are a = 2i m and b = (1i + 1j) m. The angle between a and b is",
    options: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
    correctIndex: 1,
    explanation:
      "a . b = 2(1) + 0(1) = 2, while |a| = 2 and |b| = sqrt(1^2 + 1^2) = 1.414, so cos theta = 2 / (2 x 1.414) = 0.707 and theta = 45 degrees.",
    evidence:
      "For component vectors the scalar product is ax bx + ay by, which is then divided by AB to give cos theta.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-1.2",
    concept: "angle between component vectors",
  },
  {
    key: "dotb-obtuse-angle-two-components",
    text: "Another pair of vectors is a = 2i m and b = (-1i + 1j) m. The angle between a and b is",
    options: ["45 degrees", "90 degrees", "135 degrees", "150 degrees"],
    correctIndex: 2,
    explanation:
      "a . b = 2(-1) + 0(1) = -2 and |a| = 2 with |b| = sqrt 2, so cos theta = -2 / (2 x 1.414) = -0.707, which gives theta = 135 degrees.",
    evidence:
      "A negative value of ax bx + ay by places the two component vectors at an obtuse angle to each other.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-1.2",
    concept: "obtuse angle in components",
  },
  {
    key: "dotb-work-angled-pull-hundred",
    text: "A force of 20 N acts on a trolley while the trolley moves 10 m in a straight line, and the angle between the force and the displacement is 60 degrees. The work done is",
    options: ["100 J", "50 J", "173 J", "200 J"],
    correctIndex: 0,
    explanation:
      "W = F . d = F d cos theta = 20 x 10 x cos 60 degrees = 200 x 0.5 = 100 J.",
    evidence:
      "Work done by a force is the scalar product of the force and the displacement, W = F d cos theta.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-1.2",
    concept: "work by angled force",
  },
  {
    key: "dotb-work-lifting-block-ninety-eight",
    text: "A 5 kg block is lifted 2 m vertically at constant speed by a rope that pulls straight upward. Taking g = 9.8 m s^-2, the work done by the lifting force is",
    options: ["98 J", "49 J", "19.6 J", "196 J"],
    correctIndex: 1,
    explanation:
      "At constant speed the pull equals the weight, 5 x 9.8 = 49 N, and it is parallel to the 2 m rise, so W = F d cos 0 degrees = 49 x 2 = 98 J.",
    evidence:
      "Lifting a body against gravity is a case of W = F . d with the force along the displacement, giving W = mgh.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-1.2",
    concept: "work done while lifting",
  },
  {
    key: "dotb-work-inclined-push-mower",
    text: "A worker pushes a lawn mower with a force of 50 N directed along a handle inclined at 30 degrees above the horizontal, and the mower moves 20 m horizontally. The work done is",
    options: ["433 J", "500 J", "1000 J", "866 J"],
    correctIndex: 3,
    explanation:
      "The angle between the push and the horizontal displacement is 30 degrees, so W = 50 x 20 x cos 30 degrees = 1000 x 0.866 = 866 J.",
    evidence:
      "A push inclined above the horizontal does work equal to F d cos theta, with theta measured from the direction of motion.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-1.2",
    concept: "inclined push work",
  },
  {
    key: "dotb-work-bent-path-horizontal-force",
    text: "A constant horizontal force of 40 N acts on a crate while the crate is carried 3 m east and then 4 m north along a right-angled path. The work done by this force is",
    options: ["200 J", "0 J", "120 J", "280 J"],
    correctIndex: 2,
    explanation:
      "The net displacement is the 5 m diagonal of the 3 m by 4 m right triangle, of which only the 3 m lies along the 40 N force, so W = F . d = 40 x 3 = 120 J.",
    evidence:
      "The work done by a constant force is fixed by the resultant displacement between the initial and final positions.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-1.2",
    concept: "work along bent path",
  },
  {
    key: "dotb-path-independence-of-work",
    text: "In a region of constant horizontal force a body is taken from a point P to a point Q, once along the straight line PQ and once along a longer curved route between the same two points. Comparing the two values of the work done",
    options: [
      "the work is less along the curve, because the path there is longer",
      "the work is the same on both routes, because only the net displacement matters",
      "the work is more along the curve, because the force acts over a longer distance",
      "the work is the same on both routes, but only if the speed stays constant",
    ],
    correctIndex: 1,
    explanation:
      "W = F . d for a constant force uses the displacement from P to Q, which is identical for both routes, so a longer detour at constant speed changes the time taken but not the work.",
    evidence:
      "For a constant force the scalar product F . d is unchanged by any detour between the same initial and final points.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-1.2",
    concept: "path independence of work",
  },
  {
    key: "dotb-work-perpendicular-force-zero",
    text: "A body is pulled with a force of 25 N that always stays exactly perpendicular to the direction in which the body moves, and the body travels 12 m. The work done by this pull is",
    options: ["300 J", "150 J", "25 J", "0 J"],
    correctIndex: 3,
    explanation:
      "cos 90 degrees is zero, so W = 25 x 12 x cos 90 degrees = 0; a force at right angles to the motion can turn the velocity but cannot alter the speed along the path.",
    evidence:
      "When the force and the displacement are at right angles the scalar product, and hence the work done, is zero.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-1.2",
    concept: "perpendicular force work",
  },
  {
    key: "dotb-negative-work-in-braking",
    text: "A braking force of 40 N acts opposite to a displacement of 6 m while a body is being brought to rest. The work done by this force is",
    options: ["240 J", "-240 J", "0 J", "-160 J"],
    correctIndex: 1,
    explanation:
      "The angle between the force and the displacement is 180 degrees, so W = 40 x 6 x cos 180 degrees = 240 x (-1) = -240 J, the negative sign showing that the force removes kinetic energy.",
    evidence:
      "A force opposite to the displacement makes a negative scalar product with it, so the work done is negative.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-1.2",
    concept: "negative work in braking",
  },
  {
    key: "dotb-only-parallel-component-works",
    text: "A force F acting on a particle is resolved into a component Fx along the displacement d and a component Fy at right angles to d. Comparing the two components,",
    options: [
      "Fx alone contributes to the work while Fy contributes nothing",
      "Fy alone contributes to the work while Fx contributes nothing",
      "both components contribute equally to the work done",
      "neither component contributes to the work done",
    ],
    correctIndex: 0,
    explanation:
      "W = F . d = Fx d + Fy d cos 90 degrees = Fx d, so only the component of the force along the displacement does work.",
    evidence:
      "Resolving a force along and perpendicular to the displacement leaves only the parallel component in the scalar product F . d.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-1.2",
    concept: "work from parallel component",
  },
  {
    key: "dotb-dot-product-with-resultant-larger",
    text: "Let A and B be two non-zero vectors and let R = A + B be their resultant. Compared with A . B, the dot product A . R is",
    options: [
      "always smaller, because the resultant has the larger magnitude",
      "equal to A . B whenever A . B is negative",
      "always larger, because the extra term A^2 is positive",
      "equal to A . B for every pair of vectors",
    ],
    correctIndex: 2,
    explanation:
      "The distributive property gives A . R = A . (A + B) = A^2 + A . B, and A^2 is positive for a non-zero vector, so A . R exceeds A . B by exactly A^2.",
    evidence:
      "The scalar product is distributive, so A . (B + C) = A . B + A . C.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-1.2",
    concept: "dot product with resultant",
  },
  {
    key: "dotb-equal-to-ab-means-codirectional",
    text: "The dot product of two non-zero vectors is positive and equal to the product of their magnitudes. The two vectors must be",
    options: ["perpendicular to each other", "opposite in direction", "of different magnitudes", "parallel and pointing in the same direction"],
    correctIndex: 3,
    explanation:
      "A . B = AB cos theta equals AB only when cos theta = 1, that is theta = 0 degrees, which makes the two vectors parallel and codirectional.",
    evidence:
      "A scalar product equal to AB corresponds to a zero angle between the vectors, so they are parallel and codirectional.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-1.2",
    concept: "dot product and direction",
  },
  {
    key: "dotb-statements-on-sign-of-dot",
    text: "Consider the two statements on the dot product of non-zero vectors. Statement I: a positive dot product means the angle between the vectors is acute. Statement II: a dot product equal to the product of the magnitudes means the two vectors are perpendicular.",
    options: [
      "Both statements are correct",
      "Statement I is correct while statement II is incorrect",
      "Statement I is incorrect while statement II is correct",
      "Both statements are incorrect",
    ],
    correctIndex: 1,
    explanation:
      "A . B = AB cos theta, so a positive value requires cos theta above zero and an acute angle, while a value equal to AB requires cos theta = 1 and a zero angle, which is parallel rather than perpendicular.",
    evidence:
      "A positive scalar product indicates an acute angle and a negative scalar product an obtuse angle between the vectors.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-1.2",
    concept: "dot product sign statements",
  },
  {
    key: "dotb-statements-on-work-and-path",
    text: "Two claims are advanced about the work done by a constant force. Claim I: the work depends on the length of the path that is followed. Claim II: the work depends only on the net displacement between the initial and final points.",
    options: [
      "Both statements are correct",
      "Statement I is correct while statement II is incorrect",
      "Statement I is incorrect while statement II is correct",
      "Both statements are incorrect",
    ],
    correctIndex: 2,
    explanation:
      "W = F . d for a constant force contains only the displacement vector between the two end points, so any two routes joining the same points give identical work.",
    evidence:
      "The work done by a constant force is the scalar product of that force with the resultant displacement between the end points.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-1.2",
    concept: "work and path statements",
  },
  {
    key: "dotb-sequence-work-over-three-moves",
    text: "An upward force of 5 N acts on a body that is then taken through three successive moves, 2 m vertically up, then 4 m horizontally, then 3 m vertically down. Listed from the least work to the greatest work, these moves are",
    options: [
      "the 3 m move down, then the 4 m sideways move, then the 2 m move up",
      "the 4 m sideways move, then the 3 m move down, then the 2 m move up",
      "the 2 m move up, then the 4 m sideways move, then the 3 m move down",
      "the 3 m move down, then the 2 m move up, then the 4 m sideways move",
    ],
    correctIndex: 0,
    explanation:
      "The three works are 5 x 2 x cos 0 degrees = +10 J, 5 x 4 x cos 90 degrees = 0 J and 5 x 3 x cos 180 degrees = -15 J, and since -15 J is below 0 J which is below +10 J the downward move comes first and the upward move last.",
    evidence:
      "The scalar product of force and displacement gives positive, zero or negative work according as the angle between them is acute, right or obtuse.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-1.2",
    concept: "work over successive moves",
  },
  {
    key: "dotb-sequence-order-of-dot-products",
    text: "Three pairs of vectors each have magnitudes 5 units and 5 units, and the angle is 60 degrees for pair P, 90 degrees for pair Q and 120 degrees for pair R. In order of increasing dot product the pairs are",
    options: ["P, then Q, then R", "Q, then P, then R", "R, then Q, then P", "R, then P, then Q"],
    correctIndex: 2,
    explanation:
      "The dot products are 25 cos 60 degrees = +12.5, 25 cos 90 degrees = 0 and 25 cos 120 degrees = -12.5, so the increasing order is R, then Q, then P.",
    evidence:
      "For equal magnitudes the scalar product AB cos theta falls steadily as the angle between the vectors widens past 0 degrees.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-1.2",
    concept: "dot product ordering",
  },
  {
    key: "dotb-resistive-work-around-a-lap",
    text: "A cyclist holds a constant speed while moving around a circular track, and a resistive force always acts along the line of motion opposite to the velocity. Over one complete lap the work done by this resistive force is",
    options: [
      "positive, because the cyclist covers the whole circumference",
      "zero, because the net displacement over the lap is zero",
      "zero, because the speed of the cyclist is constant",
      "negative, because the resistive force opposes every small displacement",
    ],
    correctIndex: 3,
    explanation:
      "Here the direction of the force keeps turning with the velocity, so at every small element of the path the resistive force makes an obtuse angle with the displacement and its total work is negative.",
    evidence:
      "Work done is found from the scalar product of the force with each displacement element, so a force that always opposes the motion does negative work.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-1.2",
    concept: "resistive work per lap",
  },
  {
    key: "dotb-difference-vector-magnitude-identity",
    text: "Two non-zero vectors satisfy A^2 = 16 square units and B^2 = 36 square units, and the angle between them is 90 degrees. The magnitude of the vector A - B is",
    options: ["5.2 units", "7.2 units", "10 units", "2 units"],
    correctIndex: 1,
    explanation:
      "The identity |A - B|^2 = A^2 + B^2 - 2 A . B gives 16 + 36 - 2(0) = 52 because A . B is zero at 90 degrees, so |A - B| = sqrt(52) = 7.2 units.",
    evidence:
      "The resultants of two vectors satisfy |A - B|^2 = A^2 + B^2 - 2 A . B, the vector form of the cosine rule.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-1.2",
    concept: "difference vector magnitude",
  },
  {
    key: "dotb-work-in-two-situations-difference",
    text: "A force of 60 N acts on a body in two different situations. In the first the body moves 5 m along the direction of the force; in the second it moves 5 m at 60 degrees to the force. The difference between the two values of the work is",
    options: ["150 J", "75 J", "225 J", "300 J"],
    correctIndex: 0,
    explanation:
      "The first work is 60 x 5 x cos 0 degrees = 300 J and the second is 60 x 5 x cos 60 degrees = 300 x 0.5 = 150 J, so the first exceeds the second by 300 - 150 = 150 J.",
    evidence:
      "Because W = F d cos theta, halving cos theta at the same force and distance halves the work done.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-1.2",
    concept: "work in two situations",
  },
  {
    key: "dotb-square-of-resultant-with-two-b",
    text: "The vectors A and B satisfy A^2 = 10, B^2 = 5 and A . B = 6. If R = A + 2B, then the square of the magnitude of R is",
    options: ["34 square units", "44 square units", "24 square units", "54 square units"],
    correctIndex: 3,
    explanation:
      "Expanding with the distributive property gives R . R = (A + 2B) . (A + 2B) = A^2 + 2(A . 2B) + 4 B^2 = 10 + 2(12) + 4(5) = 10 + 24 + 20 = 54.",
    evidence:
      "Squaring a resultant uses the distributive property of the scalar product, so (A + kB)^2 = A^2 + 2k A . B + k^2 B^2.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "PHY-1.2",
    concept: "square of a resultant",
  },
];