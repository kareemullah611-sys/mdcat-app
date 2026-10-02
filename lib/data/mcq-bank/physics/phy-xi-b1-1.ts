import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "veca-magnitude-and-direction-define-vector",
    text: "Several physical quantities are classified as vectors. Which pair of information is needed to state a vector completely?",
    options: [
      "Its magnitude and its direction",
      "Its magnitude and its unit",
      "Its unit and its direction",
      "Its sign and its magnitude",
    ],
    correctIndex: 0,
    explanation:
      "A vector is defined by magnitude together with direction, which is why displacement and velocity are vectors while mass and temperature, described fully by magnitude and unit, are scalars.",
    evidence:
      "A vector is a physical quantity that has both magnitude and direction and that adds according to the triangle or parallelogram law.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-1.1",
    concept: "vector definition",
  },
  {
    key: "veca-why-xy-axes-chosen",
    text: "One vector can be replaced by many pairs of perpendicular quantities that point along different directions and still reproduce it exactly. Why are the x and y axes usually chosen?",
    options: [
      "Because only two components are possible along them",
      "Because the two axes are already mutually perpendicular",
      "Because a vector changes its magnitude when it is broken into parts",
      "Because perpendicular components always point in opposite directions",
    ],
    correctIndex: 1,
    explanation:
      "A vector admits infinitely many pairs of perpendicular components, and the x and y axes are picked only because they are already at right angles, which keeps the resolution simple and the two components independent.",
    evidence:
      "A vector can be resolved into an infinite number of pairs of mutually perpendicular components, the x and y axes being the most convenient choice.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-1.1",
    concept: "rectangular components",
  },
  {
    key: "veca-component-equation-pair",
    text: "A direction angle theta is measured from the positive x-axis. Which pair of equations gives the components of a vector of magnitude R along x and y?",
    options: [
      "Rx = R sin theta and Ry = R cos theta",
      "Rx = R tan theta and Ry = R cot theta",
      "Rx = R cos theta and Ry = R sin theta",
      "Rx = R / cos theta and Ry = R / sin theta",
    ],
    correctIndex: 2,
    explanation:
      "The x component is the adjacent side of the right triangle so Rx = R cos theta, and the y component is the opposite side so Ry = R sin theta, because theta is measured from the x-axis.",
    evidence:
      "When the direction angle is measured from the x-axis, the components are Rx = R cos theta and Ry = R sin theta.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "component equations",
  },
  {
    key: "veca-y-component-at-30-degrees",
    text: "A vector of 10 N magnitude points 30 degrees above the positive x-axis. Using sin 30 = 0.5, what is its y component?",
    options: ["8.7 N", "20 N", "10 N", "5 N"],
    correctIndex: 3,
    explanation: "Ry = R sin theta = 10 N x sin 30 = 10 N x 0.5 = 5 N.",
    evidence:
      "The component along an axis is the magnitude of the vector multiplied by the sine or cosine of the angle it makes with that axis.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "y component from sine",
  },
  {
    key: "veca-magnitude-from-6-and-8-components",
    text: "A displacement has rectangular components Rx = 6 m and Ry = 8 m. What is the magnitude of the displacement?",
    options: ["10 m", "14 m", "48 m", "7 m"],
    correctIndex: 0,
    explanation:
      "For perpendicular components R = sqrt(Rx^2 + Ry^2) = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10 m.",
    evidence:
      "When a vector is resolved into two mutually perpendicular components, its magnitude is the square root of the sum of the squares of the components.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "magnitude from components",
  },
  {
    key: "veca-direction-from-8-and-6-components",
    text: "One vector has components Rx = 8 N and Ry = 6 N, both positive, so the vector lies in the first quadrant. Using tan theta = Ry/Rx, what is its direction measured from the x-axis?",
    options: ["53 degrees", "37 degrees", "43 degrees", "23 degrees"],
    correctIndex: 1,
    explanation:
      "tan theta = Ry/Rx = 6/8 = 0.75, and the angle whose tangent is 0.75 is 37 degrees, consistent with the 6-8-10 right triangle whose hypotenuse angle satisfies sin theta = 6/10 = 0.6.",
    evidence:
      "The direction of a vector is recovered from its components by tan theta = Ry/Rx together with the signs of the components.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "direction from components",
  },
  {
    key: "veca-components-at-120-degrees",
    text: "Direction angle 120 degrees is measured anticlockwise from the positive x-axis for a force of magnitude 10 N. Using sin 60 = 0.5 and cos 60 = 0.87, what are its components?",
    options: [
      "Rx = 5 N and Ry = 8.7 N",
      "Rx = -5 N and Ry = -8.7 N",
      "Rx = -5 N and Ry = 8.7 N",
      "Rx = 8.7 N and Ry = -5 N",
    ],
    correctIndex: 2,
    explanation:
      "cos 120 = -cos 60 = -0.5 and sin 120 = sin 60 = 0.87, so Rx = 10 N x (-0.5) = -5 N and Ry = 10 N x 0.87 = 8.7 N, the x component being negative because the vector lies to the left of the y-axis.",
    evidence:
      "The sign of a component is fixed by the quadrant, so a vector in the second quadrant has a negative x component and a positive y component.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "components at 120 degrees",
  },
  {
    key: "veca-largest-absolute-component",
    text: "A vector has magnitude 20 N and makes an angle of 30 degrees with the positive x-axis. Using cos 30 = 0.87 and sin 30 = 0.5, what is the largest possible value of the absolute value of one of its components?",
    options: ["20 N", "34 N", "10 N", "17.4 N"],
    correctIndex: 3,
    explanation:
      "Rx = 20 N x 0.87 = 17.4 N and Ry = 20 N x 0.5 = 10 N, so the larger component is 17.4 N; a component can never exceed the magnitude, since the magnitude is reached only when the vector lies along the axis.",
    evidence:
      "A component of a vector can never be greater in absolute value than the magnitude of the vector itself, equality holding when the vector lies along that axis.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-1.1",
    concept: "component versus magnitude",
  },
  {
    key: "veca-displacement-due-west",
    text: "A car travels 200 m due west, which is along the negative x-axis. What are the values of Rx and Ry for this displacement?",
    options: [
      "Rx = -200 m and Ry = 0 m",
      "Rx = 200 m and Ry = 0 m",
      "Rx = 0 m and Ry = -200 m",
      "Rx = -200 m and Ry = -200 m",
    ],
    correctIndex: 0,
    explanation:
      "The direction angle is 180 degrees, so Rx = 200 cos 180 = -200 m and Ry = 200 sin 180 = 0 m, because cos 180 = -1 and sin 180 = 0.",
    evidence:
      "A vector directed along the negative x-axis has a negative x component and a zero y component.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-1.1",
    concept: "negative x component",
  },
  {
    key: "veca-x-components-at-30-and-60-degrees",
    text: "Two vectors have the same magnitude R. One makes 30 degrees with the x-axis and the other makes 60 degrees with the x-axis. How do their x components compare?",
    options: [
      "They are equal because the two magnitudes are the same",
      "The 30 degree vector gives 0.87R and the 60 degree vector gives 0.5R",
      "The 30 degree vector gives 0.5R and the 60 degree vector gives 0.87R",
      "The 30 degree vector gives 0.71R and the 60 degree vector gives 0.71R",
    ],
    correctIndex: 1,
    explanation:
      "Since Rx = R cos theta, the 30 degree vector has Rx = R x 0.87 while the 60 degree vector has Rx = R x 0.5, and the x component shrinks steadily as the angle from the x-axis grows.",
    evidence:
      "Because the x component is R cos theta, it decreases as the angle measured from the x-axis increases.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-1.1",
    concept: "cosine of direction angle",
  },
  {
    key: "veca-components-of-vertical-vector",
    text: "A vertical vector of 15 m magnitude points straight up, at 90 degrees to the x-axis. What are its components?",
    options: [
      "Rx = 15 m and Ry = 0 m",
      "Rx = 15 m and Ry = 15 m",
      "Rx = 0 m and Ry = 15 m",
      "Rx = -15 m and Ry = 15 m",
    ],
    correctIndex: 2,
    explanation:
      "Rx = 15 cos 90 = 0 and Ry = 15 sin 90 = 15 m, so a vector at right angles to an axis has zero component along that axis and its full magnitude along the perpendicular one.",
    evidence:
      "A vector perpendicular to an axis has zero component along that axis and a component equal to its magnitude along the other axis.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "component at right angles",
  },
  {
    key: "veca-component-along-tilted-axis",
    text: "A force of 100 N magnitude makes an angle of 60 degrees with an axis that is itself tilted 30 degrees above the x-axis. What is the component of the force along that tilted axis?",
    options: ["100 N", "87 N", "0 N", "50 N"],
    correctIndex: 3,
    explanation:
      "The component along any axis is the magnitude times the cosine of the angle between the vector and that axis, so along the tilted axis it is 100 N x cos 60 = 100 N x 0.5 = 50 N.",
    evidence:
      "Resolving a vector along axes other than x and y is done in the same way, using the angle the vector makes with the chosen axis.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-1.1",
    concept: "resolution along tilted axis",
  },
  {
    key: "veca-components-at-45-degrees",
    text: "At 45 degrees to the positive x-axis a vector of magnitude 50 N is resolved. Using sin 45 = cos 45 = 0.71, what are its two components?",
    options: [
      "Rx = 35.5 N and Ry = 35.5 N",
      "Rx = 50 N and Ry = 0 N",
      "Rx = 25 N and Ry = 25 N",
      "Rx = 70.5 N and Ry = 70.5 N",
    ],
    correctIndex: 0,
    explanation:
      "Rx = 50 N x cos 45 = 50 x 0.71 = 35.5 N and Ry = 50 N x sin 45 = 50 x 0.71 = 35.5 N, and the two are equal because sin 45 = cos 45.",
    evidence:
      "At 45 degrees to the x-axis a vector has two equal components, each equal to 0.71 times the magnitude.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "components at 45 degrees",
  },
  {
    key: "veca-compare-y-components-two-vectors",
    text: "Vector A has magnitude 10 N and makes 30 degrees with the x-axis, while vector B has magnitude 20 N and makes 60 degrees with the x-axis. How do their y components compare?",
    options: [
      "They are equal because both vectors make angles with the same axis",
      "The y component of B is larger, 17.4 N compared with 5 N",
      "The y component of A is larger, 17.4 N compared with 5 N",
      "Both y components are zero because the vectors lie in the x-y plane",
    ],
    correctIndex: 1,
    explanation:
      "Ry = R sin theta gives 10 N x 0.5 = 5 N for A and 20 N x 0.87 = 17.4 N for B, so B has the larger y component although A makes the smaller angle with the x-axis.",
    evidence:
      "The y component of a vector is its magnitude multiplied by the sine of the angle it makes with the x-axis.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-1.1",
    concept: "comparing y components",
  },
  {
    key: "veca-component-statements-check",
    text: "Three statements about resolving a vector are given. I. The two rectangular components are always perpendicular to each other. II. The squares of the components always add to the square of the magnitude. III. The components always add to the magnitude. Which statement is correct?",
    options: ["I only", "III only", "I and II", "I, II and III"],
    correctIndex: 2,
    explanation:
      "Rectangular components are perpendicular, and Pythagoras gives Rx^2 + Ry^2 = R^2, so I and II hold; a 6 m and 8 m pair adds to 14 m while its true magnitude is only 10 m, which rejects III.",
    evidence:
      "For two mutually perpendicular components the magnitude of the original vector is the square root of the sum of their squares, not their sum.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-1.1",
    concept: "sum versus resultant",
  },
  {
    key: "veca-steps-from-components-to-vector",
    text: "A student is given Rx = 9 m and Ry = 12 m and is asked to describe the original vector completely. In which order should the steps be carried out?",
    options: [
      "Find R = sqrt(Rx^2 + Ry^2), then use the magnitude alone to fix the quadrant",
      "Find theta from tan theta = Ry/Rx, then obtain R by adding Rx and Ry",
      "Find the signs of Rx and Ry, then obtain R by adding Rx and Ry",
      "Find the signs of Rx and Ry, then find R = sqrt(Rx^2 + Ry^2), then get theta from tan theta = Ry/Rx and fix the quadrant from the signs",
    ],
    correctIndex: 3,
    explanation:
      "The signs come first because they fix the quadrant, then R = sqrt(9^2 + 12^2) = sqrt(81 + 144) = sqrt(225) = 15 m, and tan theta = 12/9 = 1.33 gives theta = 53 degrees in the first quadrant.",
    evidence:
      "Magnitude and direction are recovered from components by R = sqrt(Rx^2 + Ry^2) and tan theta = Ry/Rx, with the signs fixing the quadrant.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-1.1",
    concept: "resolution procedure",
  },
  {
    key: "veca-unit-vector-along-x-axis",
    text: "The unit vector along the positive x-axis is given a standard symbol. Which symbol is used for it?",
    options: ["i hat", "j hat", "n hat", "k hat"],
    correctIndex: 0,
    explanation:
      "The unit vectors along the positive x, y and z axes are written i hat, j hat and k hat, and any vector is written by multiplying these unit vectors by its components.",
    evidence:
      "The three unit vectors along the positive axes of a right-handed set are written i hat, j hat and k hat.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-1.1",
    concept: "unit vectors",
  },
  {
    key: "veca-magnitude-and-quadrant-from-components",
    text: "A displacement has components Rx = -12 m and Ry = 5 m. Which pair of statements gives its magnitude and its quadrant correctly?",
    options: [
      "R = 7 m and the first quadrant",
      "R = 13 m and the second quadrant",
      "R = 13 m and the fourth quadrant",
      "R = 17 m and the second quadrant",
    ],
    correctIndex: 1,
    explanation:
      "R = sqrt((-12)^2 + 5^2) = sqrt(144 + 25) = sqrt(169) = 13 m, and because Rx is negative while Ry is positive the vector lies in the second quadrant.",
    evidence:
      "The quadrant of a vector follows from the signs of its components, while its magnitude follows from R = sqrt(Rx^2 + Ry^2) whatever those signs are.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "magnitude and quadrant",
  },
  {
    key: "veca-signs-through-four-quadrants",
    text: "As the direction angle of one vector is increased steadily from just above 0 degrees to just below 360 degrees, in which order are the four quadrants visited and what are the signs of Rx and Ry in each?",
    options: [
      "Second, first, fourth, third, with Rx negative then positive and Ry positive then negative",
      "First, fourth, third, second, with Rx and Ry changing at the same two angles",
      "First, second, third, fourth, with Rx positive, negative, negative, positive and Ry positive, positive, negative, negative",
      "Fourth, third, second, first, with the pattern reversed in every quadrant",
    ],
    correctIndex: 2,
    explanation:
      "Sweeping anticlockwise from the positive x-axis passes through Rx positive and Ry positive, then Rx negative and Ry positive, then both negative, and finally Rx positive with Ry negative.",
    evidence:
      "The signs of the rectangular components follow the quadrant of the vector and change one sign at a time at each axis crossing.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-1.1",
    concept: "quadrant sign sequence",
  },
  {
    key: "veca-components-at-60-degrees",
    text: "A force of magnitude 40 N acts at 60 degrees to the positive x-axis. Using sin 60 = 0.87 and cos 60 = 0.5, what are its components?",
    options: [
      "Rx = 40 N and Ry = 0 N",
      "Rx = 34.8 N and Ry = 20 N",
      "Rx = 0 N and Ry = 40 N",
      "Rx = 20 N and Ry = 34.8 N",
    ],
    correctIndex: 3,
    explanation:
      "Rx = 40 N x cos 60 = 40 x 0.5 = 20 N and Ry = 40 N x sin 60 = 40 x 0.87 = 34.8 N, so at 60 degrees the y component is the larger one.",
    evidence:
      "A vector making 60 degrees with the x-axis has an x component of half its magnitude and a y component of 0.87 times its magnitude.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-1.1",
    concept: "components at 60 degrees",
  },
  {
    key: "veca-sign-and-perpendicular-statements",
    text: "Three statements are made about the components of a vector. I. If a vector points downward, its y component is negative. II. If a vector points to the left, its x component is positive. III. If a vector makes 90 degrees with the y-axis, its y component is zero. Which statement is correct?",
    options: ["I and III", "II only", "I only", "III only"],
    correctIndex: 0,
    explanation:
      "A downward vector opposes the positive y-axis so its y component is negative, and a vector at right angles to the y-axis has no component along it, so I and III are right; a leftward vector has a negative, not positive, x component.",
    evidence:
      "A component is negative when the vector points opposite to the positive sense of that axis, and a vector perpendicular to an axis has zero component along it.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-1.1",
    concept: "sign and perpendicular statements",
  },
  {
    key: "veca-zero-component-implies-along-axis",
    text: "A force has components Rx = 12 N and Ry = 0 N. What follows about the position of the vector relative to the x-axis?",
    options: [
      "The vector makes 45 degrees with the positive x-axis",
      "The vector lies along the positive x-axis and its magnitude equals Rx",
      "The vector lies along the y-axis and its magnitude equals Ry",
      "The vector is perpendicular to the x-axis and its magnitude is zero",
    ],
    correctIndex: 1,
    explanation:
      "Ry = 0 forces sin theta = 0, and since Rx is positive the direction angle is 0 degrees, so the vector lies along the positive x-axis with magnitude R = sqrt(12^2 + 0^2) = 12 N, equal to its x component.",
    evidence:
      "A component of a vector equals the magnitude of the vector when the vector lies along the axis of that component.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-1.1",
    concept: "component equal to magnitude",
  },
  {
    key: "veca-components-along-tilted-pair",
    text: "A force of 25 N magnitude makes an angle of 30 degrees with a line that is tilted 60 degrees above the x-axis. Using cos 30 = 0.87 and sin 30 = 0.5, find its components along and perpendicular to that tilted line.",
    options: [
      "12.5 N along the line and 21.75 N perpendicular to it",
      "25 N along the line and 0 N perpendicular to it",
      "21.75 N along the line and 12.5 N perpendicular to it",
      "21.75 N along the line and 43.5 N perpendicular to it",
    ],
    correctIndex: 2,
    explanation:
      "The along-line component is 25 N x cos 30 = 25 x 0.87 = 21.75 N and the perpendicular component is 25 N x sin 30 = 25 x 0.5 = 12.5 N, since the same two relations that serve x and y serve any perpendicular pair of axes.",
    evidence:
      "Resolving a vector along a tilted axis uses the cosine for the along-axis component and the sine for the perpendicular component, exactly as for x and y.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-1.1",
    concept: "tilted axis resolution",
  },
  {
    key: "veca-components-at-210-degrees",
    text: "A force of 24 N magnitude acts in the third quadrant at a direction angle of 210 degrees measured anticlockwise from the positive x-axis. Using sin 30 = 0.5 and cos 30 = 0.87, what are its components?",
    options: [
      "Rx = 20.9 N and Ry = 12 N",
      "Rx = -20.9 N and Ry = 12 N",
      "Rx = 12 N and Ry = -20.9 N",
      "Rx = -20.9 N and Ry = -12 N",
    ],
    correctIndex: 3,
    explanation:
      "cos 210 = -cos 30 = -0.87 and sin 210 = -sin 30 = -0.5, so Rx = 24 x (-0.87) = -20.9 N and Ry = 24 x (-0.5) = -12 N, both negative because the third quadrant lies below and to the left of the origin.",
    evidence:
      "In the third quadrant both the cosine and the sine of the direction angle are negative, so both components of the vector are negative.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-1.1",
    concept: "third quadrant components",
  },
  {
    key: "veca-other-perpendicular-pairs",
    text: "It is argued that a vector should be resolved only into x and y components because any other perpendicular pair would give a different answer. The claim is best assessed as",
    options: [
      "Partly correct, because different perpendicular pairs give different component values but always the same vector",
      "Correct, because only the x and y axes are perpendicular to one another",
      "Incorrect, because only a finite and small number of component pairs exists",
      "Incorrect, because components exist only along axes that pass through the origin",
    ],
    correctIndex: 0,
    explanation:
      "A vector can be resolved into infinitely many pairs of perpendicular components and each pair carries different numerical values, but every pair recombines vectorially into the same vector; x and y are used because they are already perpendicular and easiest to read.",
    evidence:
      "The choice of perpendicular axes for resolving a vector is one of convenience, because the vector itself is left unchanged by that choice.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-1.1",
    concept: "choice of axes",
  },
];