import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "projec-components-of-launch-velocity",
    text: "A body is projected with a speed of 20 m s^-1 at 30 degrees to the horizontal. The horizontal and vertical components of its initial velocity are respectively",
    options: [
      "17.3 m s^-1 and 10 m s^-1",
      "10 m s^-1 and 17.3 m s^-1",
      "17.3 m s^-1 and 20 m s^-1",
      "10 m s^-1 and 10 m s^-1",
    ],
    correctIndex: 0,
    explanation:
      "Resolving u = 20 m s^-1 gives ux = u cos theta = 20 x 0.866 = 17.3 m s^-1 and uy = u sin theta = 20 x 0.5 = 10 m s^-1; the cosine belongs to the horizontal component because theta is measured from the horizontal.",
    evidence:
      "The velocity of a projectile is resolved into a horizontal component u cos theta and a vertical component u sin theta.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "initial velocity components",
  },
  {
    key: "projec-vertical-acceleration-stays-g",
    text: "After a body leaves the hand, gravity is the only force acting on it. The acceleration of the body in the vertical direction is",
    options: [
      "zero, because the horizontal motion carries it forward",
      "9.8 m s^-2 downwards at every instant",
      "9.8 m s^-2 upwards while the body rises",
      "zero while rising and 9.8 m s^-2 downwards while falling",
    ],
    correctIndex: 1,
    explanation:
      "The weight mg acts vertically downwards throughout the flight and nothing opposes it, so the vertical acceleration is g = 9.8 m s^-2 downwards at every moment, whether the body is rising, at the top or falling.",
    evidence:
      "In the absence of air resistance the only force on a projectile is its weight, which produces a constant downward acceleration of g.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "vertical acceleration",
  },
  {
    key: "projec-horizontal-vertical-independence",
    text: "The motion of a projectile is studied in two separate parts, horizontal and vertical, because",
    options: [
      "the two parts always have the same duration",
      "the falling body drags the horizontal motion downwards",
      "gravity changes the vertical motion only, so the horizontal part is unaffected by it",
      "gravity changes the speed in both the horizontal and the vertical part at once",
    ],
    correctIndex: 2,
    explanation:
      "Gravity acts only in the vertical direction, so the vertical acceleration is fixed by g while the horizontal component keeps its initial value throughout; neither part of the motion can alter the other.",
    evidence:
      "The horizontal and vertical motions of a projectile are independent and are studied separately.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-2.8",
    concept: "motion independence",
  },
  {
    key: "projec-path-shape-under-gravity",
    text: "Ignoring air resistance, the path followed by a body projected at an angle to the horizontal is",
    options: ["a straight line", "an arc of a circle", "a spiral", "a parabola"],
    correctIndex: 3,
    explanation:
      "The horizontal distance x = u cos theta t grows linearly with time while the vertical distance y = u sin theta t - gt^2/2 contains t squared, and eliminating t between them leaves a second-degree relation in x and y, which is a parabola.",
    evidence: "When air resistance is neglected the trajectory of a projectile is a parabola.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "parabolic trajectory",
  },
  {
    key: "projec-time-of-flight-twenty-at-thirty",
    text: "A football is kicked with speed 20 m s^-1 at 30 degrees above the horizontal and comes to rest on the same level of ground. The time of flight is",
    options: ["2.04 s", "1.02 s", "4.08 s", "2.00 s"],
    correctIndex: 0,
    explanation:
      "T = 2u sin theta/g = (2 x 20 x 0.5)/9.8 = 20/9.8 = 2.04 s; the factor of two covers the rise to the top and the equal fall back to the starting level.",
    evidence:
      "The time of flight of a projectile that lands at its level of projection is T = 2u sin theta/g.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-2.8",
    concept: "time of flight",
  },
  {
    key: "projec-maximum-height-thirty-nine-two",
    text: "A stone is projected with speed 39.2 m s^-1 at 30 degrees to the horizontal. The greatest height it reaches above the point of projection is",
    options: ["9.8 m", "19.6 m", "39.2 m", "4.9 m"],
    correctIndex: 1,
    explanation:
      "The vertical component is u sin 30 degrees = 39.2 x 0.5 = 19.6 m s^-1, and H = u^2 sin^2 theta/(2g) = 19.6^2/(2 x 9.8) = 384.16/19.6 = 19.6 m.",
    evidence: "The maximum height of a projectile is H = u^2 sin^2 theta/(2g).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "maximum height",
  },
  {
    key: "projec-greatest-range-at-forty-five",
    text: "A projectile is fired with speed 39.2 m s^-1 so as to achieve the largest possible range. The angle used and the range obtained are",
    options: [
      "30 degrees and 78.4 m",
      "60 degrees and 156.8 m",
      "45 degrees and 156.8 m",
      "45 degrees and 78.4 m",
    ],
    correctIndex: 2,
    explanation:
      "R = u^2 sin 2theta/g is greatest when sin 2theta = 1, that is at 2theta = 90 degrees so theta = 45 degrees, and then R = 39.2^2/9.8 = 1536.64/9.8 = 156.8 m.",
    evidence:
      "The range R = u^2 sin 2theta/g is maximum when the angle of projection is 45 degrees.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-2.8",
    concept: "maximum range",
  },
  {
    key: "projec-range-of-twenty-at-thirty",
    text: "A ball is fired at 20 m s^-1 making an angle of 30 degrees with the horizontal and returns to the same level. The distance covered along the horizontal before it reaches the ground is about",
    options: ["17.7 m", "34.6 m", "20.0 m", "35.3 m"],
    correctIndex: 3,
    explanation:
      "R = u^2 sin 2theta/g = (20^2 x sin 60 degrees)/9.8 = 400 x 0.866/9.8 = 346.4/9.8 = 35.3 m; the same value follows from ux T = 17.3 x 2.04 = 35.3 m.",
    evidence:
      "The horizontal range of a projectile landing at its level of projection is R = u^2 sin 2theta/g.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-2.8",
    concept: "horizontal range",
  },
  {
    key: "projec-time-to-top-nineteen-six",
    text: "A ball leaves the ground with a speed of 19.6 m s^-1 at 30 degrees to the horizontal. The time after which it reaches its highest point is",
    options: ["1.0 s", "0.5 s", "2.0 s", "4.0 s"],
    correctIndex: 0,
    explanation:
      "Its vertical component is u sin 30 degrees = 19.6 x 0.5 = 9.8 m s^-1, and gravity removes 9.8 m s^-1 from this every second, so the vertical velocity vanishes after 9.8/9.8 = 1.0 s, half of the 2.0 s flight.",
    evidence:
      "The vertical velocity of a projectile becomes zero at the highest point after a time u sin theta/g.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "time to highest point",
  },
  {
    key: "projec-complementary-angles-range",
    text: "Two balls are projected with the same speed of 25 m s^-1, one at 30 degrees and one at 60 degrees to the horizontal, and both land on level ground. Their ranges are",
    options: [
      "different, because 60 degrees is the steeper angle",
      "equal, each about 55 m",
      "in the ratio 1 : 3",
      "in the ratio 3 : 1",
    ],
    correctIndex: 1,
    explanation:
      "R depends on sin 2theta, and sin 60 degrees equals sin 120 degrees, so both shots give R = 25^2 x 0.866/9.8 = 541.3/9.8 = 55.2 m.",
    evidence:
      "Two projectiles fired with the same speed at complementary angles have equal ranges.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "complementary angles",
  },
  {
    key: "projec-vertical-velocity-after-one-second",
    text: "A ball is projected with speed 20 m s^-1 at 30 degrees above the horizontal. One second after it leaves the hand, its vertical velocity is",
    options: [
      "9.8 m s^-1 downwards",
      "0.2 m s^-1 upwards",
      "19.6 m s^-1 upwards",
      "1.8 m s^-1 upwards",
    ],
    correctIndex: 2,
    explanation:
      "The initial vertical component is u sin 30 degrees = 20 x 0.5 = 10 m s^-1, and each second gravity subtracts 9.8 m s^-1 from it, so after 1 s the vertical velocity is 10 - 9.8 = 0.2 m s^-1, still directed upwards.",
    evidence:
      "The vertical velocity of a projectile decreases by g every second from its initial value u sin theta.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "vertical velocity change",
  },
  {
    key: "projec-rising-time-equals-falling-time",
    text: "A projectile is thrown upward at an angle and returns to the level of the point of projection. Compare the time it takes to reach the highest point with the time it takes to fall from the highest point to that level.",
    options: [
      "The rising time is twice the falling time",
      "The falling time is twice the rising time",
      "The falling time is shorter because the body starts from rest",
      "The two times are equal",
    ],
    correctIndex: 3,
    explanation:
      "The vertical motion is uniformly accelerated with the same magnitude g in both stages, and the body climbs and then covers the same vertical distance, so each stage lasts u sin theta/g.",
    evidence:
      "A projectile takes equal times to rise to its highest point and to fall back to its level of projection.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "symmetric flight times",
  },
  {
    key: "projec-speed-at-highest-point",
    text: "At the highest point of its flight a projectile that was launched with speed u at an angle to the horizontal",
    options: [
      "is momentarily at rest",
      "has no horizontal velocity",
      "moves horizontally with speed u cos theta",
      "moves horizontally with speed u sin theta",
    ],
    correctIndex: 0,
    explanation:
      "Gravity has removed the whole vertical velocity by then, while the horizontal component was never acted on, so the speed there is u cos theta, which is smaller than the launch speed u.",
    evidence:
      "At the highest point of its path a projectile moves horizontally with a speed equal to its horizontal component of velocity.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-2.8",
    concept: "speed at highest point",
  },
  {
    key: "projec-dropped-versus-thrown-horizontal",
    text: "From the same height, one body is simply released and another is thrown horizontally. The two bodies reach the ground",
    options: [
      "at the same instant, because both begin with zero vertical velocity",
      "at different instants, because the thrown body is lighter",
      "at the same instant, because both cover the same height",
      "at different instants, because the thrown body keeps moving upwards",
    ],
    correctIndex: 1,
    explanation:
      "The vertical motion of both bodies starts from rest and follows the same law h = gt^2/2, so each takes sqrt(2h/g) to reach the ground; the horizontal velocity of the thrown body does not enter into this time.",
    evidence:
      "The vertical motion of a falling body depends only on its initial vertical velocity and on the height through which it falls.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "independent fall time",
  },
  {
    key: "projec-speed-on-returning-level",
    text: "A ball is launched at 40 m s^-1 at 30 degrees to the horizontal and falls back on the level ground from which it was thrown. The speed with which it strikes the ground is",
    options: ["20 m s^-1", "zero, because it falls vertically", "40 m s^-1", "9.8 m s^-1"],
    correctIndex: 2,
    explanation:
      "The vertical motion is uniformly accelerated, so the vertical velocity on landing has the same magnitude u sin theta as at launch but points downwards, and together with the unchanged horizontal component u cos theta this again gives a speed of exactly u.",
    evidence:
      "A projectile that lands at its level of projection strikes the ground with the same speed with which it was launched.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "landing speed",
  },
  {
    key: "projec-raising-speed-holds-angle",
    text: "Keeping the angle of projection at 30 degrees, the launch speed of a projectile is raised from 20 m s^-1 to 30 m s^-1. Which statement about the flight is correct?",
    options: [
      "The maximum height increases but the range decreases",
      "The range increases by 10 m s^-1 while the height is unchanged",
      "The range and the maximum height both stay the same",
      "The range and the maximum height both become 2.25 times larger",
    ],
    correctIndex: 3,
    explanation:
      "For a fixed angle both R = u^2 sin 2theta/g and H = u^2 sin^2 theta/(2g) contain u squared, so each quantity is multiplied by (30/20)^2 = 2.25 when the launch speed is raised from 20 to 30 m s^-1.",
    evidence:
      "For a fixed angle of projection both the range and the maximum height of a projectile vary as the square of the launch speed.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "speed effect on range",
  },
  {
    key: "projec-raising-angle-above-forty-five",
    text: "With the launch speed held fixed, a projectile fired at 45 degrees to the horizontal is re-fired at 60 degrees. The range will",
    options: [
      "decrease, because sin 120 degrees is smaller than sin 90 degrees",
      "increase, because the projectile rises to a greater height",
      "remain the same, because the two angles are complementary",
      "remain the same, because the launch speed is unchanged",
    ],
    correctIndex: 0,
    explanation:
      "R depends on sin 2theta, and above 45 degrees this sine falls below 1: at 60 degrees sin 120 degrees = 0.866, so the range becomes 0.866 of its 45 degree value even though the maximum height rises.",
    evidence:
      "The range of a projectile falls when the angle of projection is increased beyond 45 degrees.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "angle effect on range",
  },
  {
    key: "projec-height-launch-time-formula",
    text: "Consider a body projected upward at an angle from a point 10 m above the ground. Statement I: its time of flight is 2u sin theta/g. Statement II: its vertical velocity changes by 9.8 m s^-2 every second throughout the flight. Which assessment is correct?",
    options: [
      "Statement I is true and statement II is false",
      "Statement I is false and statement II is true",
      "Both statements are true",
      "Both statements are false",
    ],
    correctIndex: 1,
    explanation:
      "The formula 2u sin theta/g assumes that the body returns to its level of projection, which a body launched from 10 m above the ground does not, so statement I is false; gravity acts continuously, so the vertical velocity changes by 9.8 m s^-2 each second and statement II is true.",
    evidence:
      "The time of flight 2u sin theta/g applies only when the projectile lands at the level of projection.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-2.8",
    concept: "time of flight limitation",
  },
  {
    key: "projec-vertical-velocity-order-in-flight",
    text: "For a projectile thrown upward and landing on the same level, the correct order of its vertical velocities at the point of projection, at the highest point and on return is",
    options: [
      "zero, then u sin theta upwards, then u sin theta downwards",
      "u sin theta downwards, then zero, then u sin theta upwards",
      "u sin theta upwards, then u sin theta downwards, then zero",
      "u sin theta upwards, then zero, then u sin theta downwards",
    ],
    correctIndex: 2,
    explanation:
      "Gravity removes 9.8 m s^-2 from the vertical velocity every second, so it starts at u sin theta upwards, falls to zero at the top and becomes u sin theta again at the same level but now directed downwards.",
    evidence:
      "The vertical velocity of a projectile decreases steadily to zero at the highest point and then reverses its direction.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "vertical velocity sequence",
  },
  {
    key: "projec-horizontal-throw-component-order",
    text: "Thrown horizontally at 25 m s^-1 from the edge of a cliff, a ball begins to fall at the same instant. The correct order in which its two velocity components behave is",
    options: [
      "The vertical component grows steadily while the horizontal one is unchanged",
      "Both components grow steadily at the same rate",
      "The horizontal component grows while the vertical one is unchanged",
      "Both components fall to zero at the same moment",
    ],
    correctIndex: 3,
    explanation:
      "The throw gives the ball an initial vertical velocity of zero and an initial horizontal velocity, so during the fall the vertical component is built up from zero by g each second while the horizontal component stays at its launch value.",
    evidence:
      "A body thrown horizontally keeps a constant horizontal velocity and gains a vertical velocity of magnitude gt while it falls.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "component change sequence",
  },
  {
    key: "projec-flight-event-order",
    text: "A body launched at 45 degrees from level ground passes through four events in turn: (i) its vertical velocity becomes zero, (ii) its speed becomes minimum, (iii) its vertical velocity becomes equal to u sin theta downwards, (iv) it reaches the ground. The correct order is",
    options: [
      "(i), (ii), (iii), (iv)",
      "(ii), (i), (iii), (iv)",
      "(i), (iii), (ii), (iv)",
      "(iii), (i), (ii), (iv)",
    ],
    correctIndex: 0,
    explanation:
      "The vertical velocity falls to zero at the top (i), and since the horizontal component is constant the total speed is smallest there as well (ii); the speed then grows again and just before impact the vertical velocity equals u sin theta downwards (iii), followed by landing (iv).",
    evidence:
      "The speed of a projectile is least at the highest point of its path, where its vertical velocity is zero.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "flight event order",
  },
  {
    key: "projec-upward-throw-from-building",
    text: "From the top of a 45 m high building a ball is thrown upward at 20 m s^-1 at 30 degrees above the horizontal. The total time after which it reaches the ground is about",
    options: ["2.18 s", "4.22 s", "3.03 s", "5.20 s"],
    correctIndex: 1,
    explanation:
      "The vertical component is 20 x 0.5 = 10 m s^-1 upwards, so the body falls through 45 + 10t - 4.9t^2 = 0 and 4.9t^2 - 10t - 45 = 0 gives t = (10 + sqrt(100 + 4 x 4.9 x 45))/9.8 = (10 + 31.3)/9.8 = 4.2 s.",
    evidence:
      "For a projectile launched upward from a height the total time of flight follows from 0 = h + u sin theta t - gt^2/2.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-2.8",
    concept: "flight time from height",
  },
  {
    key: "projec-air-resistance-two-claims",
    text: "Consider a ball flying through the air. Statement I: if air resistance is taken into account, the horizontal velocity of the ball decreases along the path. Statement II: with air resistance the time of flight is less than 2u sin theta/g for a body landing at its level of projection. Which assessment is correct?",
    options: [
      "Statement I is true and statement II is false",
      "Both statements are false",
      "Statement I is true and statement II is true",
      "Statement I is false and statement II is true",
    ],
    correctIndex: 2,
    explanation:
      "Air resistance always opposes the motion, so the component of it that acts backwards slows the horizontal part and makes statement I true; the reduced horizontal speed together with the drag that acts upwards during the descent shortens the flight below the drag-free value 2u sin theta/g, so statement II is true as well.",
    evidence:
      "Air resistance opposes the motion of a projectile and reduces both its range and its time of flight.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-2.8",
    concept: "air resistance effects",
  },
  {
    key: "projec-doubling-speed-two-claims",
    text: "The launch speed u of a projectile fired at 30 degrees to the horizontal is doubled while the angle of projection is kept the same. Statement I: its maximum height is doubled. Statement II: its range is doubled. Which assessment is correct?",
    options: [
      "Statement I is true and statement II is false",
      "Both statements are true",
      "Statement I is false and statement II is true",
      "Both statements are false",
    ],
    correctIndex: 3,
    explanation:
      "Both H = u^2 sin^2 theta/(2g) and R = u^2 sin 2theta/g contain u squared, so doubling u multiplies the maximum height and the range by four each, and neither statement is true.",
    evidence:
      "The maximum height and the range of a projectile both vary as the square of its launch speed.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-2.8",
    concept: "square dependence on speed",
  },
  {
    key: "projec-range-and-height-at-two-angles",
    text: "Two projectiles are fired with the same speed of 25 m s^-1, one at 30 degrees and one at 60 degrees to the horizontal, and each returns to its level of projection. Compared with the first, the second will have",
    options: [
      "the same range, a height three times greater and a longer time of flight",
      "the same range and the same height",
      "a greater range and a height three times greater",
      "a smaller range and the same height",
    ],
    correctIndex: 0,
    explanation:
      "sin 60 degrees and sin 120 degrees are both 0.866, so the ranges are equal at 25^2 x 0.866/9.8 = 55.2 m; the height depends on sin^2 theta and 0.75/0.25 = 3, while the time of flight depends on sin theta and grows by sin 60 degrees/sin 30 degrees = 1.73.",
    evidence:
      "Complementary angles give equal ranges but different maximum heights and different times of flight.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-2.8",
    concept: "two-angle comparison",
  },
];