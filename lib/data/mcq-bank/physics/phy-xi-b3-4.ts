import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "angular-revolution-in-radians",
    text: "One complete revolution of a wheel about a fixed axis corresponds to an angular displacement of",
    options: ["pi radians", "2 pi radians", "4 pi radians", "360 pi radians"],
    correctIndex: 1,
    explanation:
      "A full turn sweeps out 2 pi radians, and this holds for any radius, so the angular displacement of one revolution never depends on the size of the wheel or on the number 360, which belongs to degrees.",
    evidence:
      "Angular displacement is measured in radians, and one complete revolution is equal to 2 pi radians.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-4.4",
    concept: "radians per revolution",
  },
  {
    key: "angular-velocity-rate-of-displacement",
    text: "The angular velocity omega of a body rotating about a fixed axis is the angular displacement covered divided by",
    options: [
      "the time taken",
      "the radius of the circular path",
      "the tangential speed of the body",
      "the square of the time interval",
    ],
    correctIndex: 0,
    explanation:
      "Omega equals the angular displacement divided by the time, omega = theta / t, which makes it the rate at which angular displacement accumulates along the path.",
    evidence: "Angular velocity is the rate of change of angular displacement, omega = theta / t.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "angular velocity definition",
  },
  {
    key: "angular-velocity-from-period",
    text: "A wheel turning with period T completes one revolution in T seconds, so its angular velocity in radians per second is",
    options: ["T / 2 pi", "pi / T", "2 T", "2 pi / T"],
    correctIndex: 3,
    explanation:
      "One revolution is 2 pi radians, so omega = angular displacement / time = 2 pi / T, the standard relation between angular velocity and the period of rotation.",
    evidence:
      "For uniform rotation the angular velocity is omega = 2 pi / T, where T is the period of revolution.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "angular velocity and period",
  },
  {
    key: "angular-velocity-changing-direction",
    text: "In uniform circular motion the speed of the body is constant, yet the body is still described as accelerating because",
    options: [
      "the speed slowly increases with the angle turned",
      "the radius of the path shrinks with time",
      "the direction of the velocity changes continuously",
      "the force on the body doubles every second",
    ],
    correctIndex: 2,
    explanation:
      "Acceleration measures the rate of change of velocity, and velocity carries direction as well as magnitude, so a body whose speed is fixed while its direction swings around the circle still has an acceleration.",
    evidence:
      "In uniform circular motion the speed stays constant but the direction of the velocity keeps changing, so the body is accelerated.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "changing velocity direction",
  },
  {
    key: "angular-velocity-sixty-turns",
    text: "A fan blade completes 60 revolutions in 20 s. Taking one revolution as 2 pi radians, the angular velocity of the blade is",
    options: ["6 pi rad s^-1", "3 pi rad s^-1", "120 pi rad s^-1", "1200 pi rad s^-1"],
    correctIndex: 0,
    explanation:
      "The angle covered is 60 x 2 pi = 120 pi radians, so omega = 120 pi / 20 = 6 pi rad s^-1, which is about 18.8 rad s^-1.",
    evidence:
      "Angular velocity equals the total angular displacement in radians divided by the elapsed time.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-4.4",
    concept: "angular velocity from revolutions",
  },
  {
    key: "angular-velocity-rpm-conversion",
    text: "A grinding wheel is labelled 3000 revolutions per minute. The angular velocity of the wheel in radians per second is",
    options: ["50 pi rad s^-1", "100 pi rad s^-1", "200 pi rad s^-1", "3000 rad s^-1"],
    correctIndex: 1,
    explanation:
      "3000 rpm is 3000 / 60 = 50 revolutions per second, and each revolution is 2 pi radians, so omega = 2 pi x 50 = 100 pi rad s^-1, about 314 rad s^-1.",
    evidence:
      "The relation omega = 2 pi f converts revolutions per second, and hence revolutions per minute, into angular velocity.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-4.4",
    concept: "rpm to radians",
  },
  {
    key: "angular-velocity-from-tangential-speed",
    text: "A car moves around a bend at 20 m s^-1 along a circular path of radius 50 m. Its angular velocity about the centre of the bend is",
    options: ["0.25 rad s^-1", "2.5 rad s^-1", "1000 rad s^-1", "0.4 rad s^-1"],
    correctIndex: 3,
    explanation:
      "Rearranging v = omega r gives omega = v / r = 20 / 50 = 0.4 rad s^-1, so an ordinary road speed on a wide bend corresponds to a small angular rate.",
    evidence:
      "The tangential speed and the angular velocity in circular motion are related by v = omega r.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "omega from tangential speed",
  },
  {
    key: "angular-speed-clock-hand",
    text: "The tip of a clock's minute hand is 8 cm from the axis of rotation and the hand completes one turn in 3600 s. The tangential speed of the tip is",
    options: [
      "1.4 x 10^-2 m s^-1",
      "2.8 x 10^-4 m s^-1",
      "5.6 x 10^-4 m s^-1",
      "1.4 x 10^-4 m s^-1",
    ],
    correctIndex: 3,
    explanation:
      "The angular velocity is omega = 2 pi / T = 2 pi / 3600 = 1.75 x 10^-3 rad s^-1, so v = omega r = 1.75 x 10^-3 x 0.08 = 1.4 x 10^-4 m s^-1.",
    evidence:
      "Every point at radius r on a rotating body has tangential speed v = omega r, so the speed grows with the radius.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-4.4",
    concept: "clock hand speed",
  },
  {
    key: "angular-acceleration-from-omega",
    text: "A wheel rotates with angular velocity 4 rad s^-1 and a point on its rim is 0.5 m from the axis. The centripetal acceleration of that point is",
    options: ["2 m s^-2", "8 m s^-2", "16 m s^-2", "4 m s^-2"],
    correctIndex: 2,
    explanation:
      "The centripetal acceleration is a_c = omega^2 r = (4)^2 x 0.5 = 16 x 0.5 = 8 m s^-2, directed along the radius toward the axis.",
    evidence:
      "The centripetal acceleration of a body in circular motion is a_c = omega^2 r and always points toward the centre.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "centripetal acceleration from omega",
  },
  {
    key: "angular-acceleration-from-speed",
    text: "A train travels at 30 m s^-1 on a circular track of radius 150 m. The magnitude of its centripetal acceleration is",
    options: ["5 m s^-2", "4500 m s^-2", "6 m s^-2", "0.2 m s^-2"],
    correctIndex: 2,
    explanation:
      "Using a_c = v^2 / r, the acceleration is (30)^2 / 150 = 900 / 150 = 6 m s^-2, directed toward the centre of the track.",
    evidence:
      "For a body moving in a circle at speed v the centripetal acceleration has magnitude a_c = v^2 / r.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "centripetal acceleration from speed",
  },
  {
    key: "angular-centripetal-force-mass",
    text: "A stone of mass 2 kg is swung in a horizontal circle of radius 1 m at 4 m s^-1. The force required to keep the stone on the circular path is",
    options: ["8 N", "16 N", "4 N", "32 N"],
    correctIndex: 3,
    explanation:
      "The centripetal force is F = m v^2 / r = 2 x (4)^2 / 1 = 2 x 16 = 32 N, and in this case it is supplied by the tension in the string.",
    evidence:
      "The centripetal force required for uniform circular motion is F = m v^2 / r, directed toward the centre of the path.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "centripetal force magnitude",
  },
  {
    key: "angular-speed-computation-sequence",
    text: "The period T of a rotating body and the radius r of a point on it are known. Put the steps in the order needed to obtain the tangential speed of that point.",
    options: [
      "multiply omega by r first, then work out omega = 2 pi / T",
      "work out omega = 2 pi / T first, then multiply omega by r",
      "work out the linear speed first, then find the period of the rotation",
      "divide the radius by the period, then multiply the result by 2 pi",
    ],
    correctIndex: 1,
    explanation:
      "The tangential speed follows from v = omega r, and the angular velocity has to be found from omega = 2 pi / T before it can be used, so the period must be used before the radius.",
    evidence:
      "For a point at radius r on a body of period T the tangential speed is v = omega r with omega = 2 pi / T.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-4.4",
    concept: "order of speed calculation",
  },
  {
    key: "angular-rpm-to-speed-sequence",
    text: "A performance report lists a wheel speed of 1800 revolutions per minute and the radius of a point on the wheel. To report the tangential speed of that point, the calculations must be done in the order",
    options: [
      "divide the rpm by 60 to get revolutions per second, multiply by 2 pi to get omega, then multiply omega by r",
      "multiply omega by r first, then divide the rpm by 60, then multiply by 2 pi",
      "divide the rpm by 60, then multiply r by 2 pi, then find the force on the wheel",
      "multiply the rpm by 2 pi to get omega, then divide r by 60 to get the speed",
    ],
    correctIndex: 0,
    explanation:
      "The report supplies a frequency, so the rpm must be turned into revolutions per second first, then into omega = 2 pi f, and only then can v = omega r be evaluated.",
    evidence:
      "Angular velocity follows from omega = 2 pi f and the tangential speed from v = omega r, so the frequency must be used first.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-4.4",
    concept: "order of rpm conversion",
  },
  {
    key: "angular-acceleration-not-a-force",
    text: "Statement I: centripetal acceleration is a separate force of nature that pulls a body towards the centre of its circular path. Statement II: centripetal acceleration is the inward part of the net force on a body moving in a circle and always points towards the centre. Which pair of judgements is right?",
    options: [
      "Statement I is true and Statement II is false",
      "Statement I is false and Statement II is true",
      "Both statements are true",
      "Both statements are false",
    ],
    correctIndex: 1,
    explanation:
      "Centripetal acceleration is not an extra force, it is the name given to the resultant acceleration that always points toward the centre of the circle, so Statement I is false and Statement II is true.",
    evidence:
      "Centripetal acceleration always points toward the centre of the circular path and is produced by the net force on the body.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-4.4",
    concept: "acceleration versus force",
  },
  {
    key: "angular-velocity-constant-statement",
    text: "Statement I: the velocity of a body in uniform circular motion is constant because its speed is constant. Statement II: the velocity of a body in uniform circular motion changes continuously in direction even though its speed stays constant. Which pair of judgements is right?",
    options: [
      "Statement I is true and Statement II is false",
      "Statement I is false and Statement II is true",
      "Both statements are true",
      "Both statements are false",
    ],
    correctIndex: 2,
    explanation:
      "Velocity is a vector, so a constant speed alone does not make it constant; the direction of the velocity keeps rotating with the body, which makes Statement I false and Statement II true.",
    evidence:
      "In uniform circular motion the direction of the velocity changes continuously although the speed remains constant.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-4.4",
    concept: "circular velocity vector",
  },
  {
    key: "angular-centripetal-force-source",
    text: "Statement I: for a satellite travelling in a circular orbit the centripetal force is supplied by gravitational attraction towards the Earth. Statement II: on a level circular road the tyres of a car supply the centripetal force through friction. Which pair of judgements is right?",
    options: [
      "Statement I is true and Statement II is false",
      "Both statements are true",
      "Statement I is false and Statement II is true",
      "Both statements are false",
    ],
    correctIndex: 1,
    explanation:
      "The inward force is a real force whose source depends on the situation: gravity holds the satellite in orbit while friction between tyres and road holds the car in its bend, so both statements are true.",
    evidence:
      "The centripetal force F = m v^2 / r may be supplied by gravity, friction, tension or a normal reaction depending on the situation.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-4.4",
    concept: "source of centripetal force",
  },
  {
    key: "angular-speed-rigid-body-radii",
    text: "A rigid flywheel turns about a fixed axis. Compare a point on the rim with a point halfway between the rim and the axis.",
    options: [
      "both points share the same angular velocity while the rim point has twice the tangential speed",
      "the rim point has the greater angular velocity and the greater tangential speed",
      "both points share the same tangential speed while the rim point has the greater angular velocity",
      "the rim point has twice the angular velocity and twice the tangential speed",
    ],
    correctIndex: 0,
    explanation:
      "Every point of a rigid body rotating about a fixed axis shares one angular velocity, but v = omega r makes the tangential speed grow with the radius, so twice the radius gives twice the speed.",
    evidence:
      "All points of a rigid body turning about a fixed axis share one angular velocity while their tangential speeds differ through v = omega r.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-4.4",
    concept: "angular and linear speed",
  },
  {
    key: "angular-speed-two-axes",
    text: "The same rod is first spun about an axis through its centre and then about an axis through one end. If both spins are given the same angular velocity, the free end of the rod",
    options: [
      "moves twice as fast the second time, because its distance from the axis has doubled",
      "moves at the same speed both times, because its distance from the axis is unchanged",
      "moves four times as fast the second time, because speed rises with the square of the radius",
      "moves at half the speed the second time, because the end is nearer the axis",
    ],
    correctIndex: 0,
    explanation:
      "The end is at radius L about the centre but at radius 2L about the end, so with omega unchanged v = omega r makes the speed twice as large in the second case.",
    evidence:
      "The tangential speed v = omega r of a point on a rigid body depends on its distance from the axis of rotation.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-4.4",
    concept: "rotation about different axes",
  },
  {
    key: "angular-doubling-speed-force",
    text: "A car moving at speed v around a bend needs a centripetal force m v^2 / r. If the speed is doubled while the radius of the bend is unchanged, the inward force the tyres must supply becomes",
    options: ["twice as large", "four times as large", "half as large", "unchanged, because the radius is unchanged"],
    correctIndex: 1,
    explanation:
      "The force goes as the square of the speed, so doubling v replaces v^2 by (2 v)^2 = 4 v^2 and the force the tyres must provide becomes four times as large.",
    evidence:
      "The centripetal force F = m v^2 / r varies with the square of the speed of the body.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "effect of doubling speed",
  },
  {
    key: "angular-doubling-radius-acceleration",
    text: "A body keeps the same speed v while the radius of its circular path is doubled. Its centripetal acceleration",
    options: [
      "becomes half as large, because a_c = v^2 / r",
      "becomes twice as large, because a_c = v^2 / r",
      "stays the same, because only the speed matters",
      "becomes four times as large, because the speed is unchanged",
    ],
    correctIndex: 0,
    explanation:
      "Since a_c = v^2 / r, doubling r with the speed fixed replaces r by 2 r, so the acceleration falls from v^2 / r to v^2 / 2 r.",
    evidence:
      "The centripetal acceleration a_c = v^2 / r varies inversely with the radius when the speed is kept constant.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-4.4",
    concept: "effect of doubling radius",
  },
  {
    key: "angular-perpendicular-acceleration-components",
    text: "A car rounding a banked circular road has an acceleration along its direction of motion and another acceleration toward the centre of the bend. These two components",
    options: [
      "act in the same direction, so they simply add together",
      "act in opposite directions, so they partly cancel",
      "reverse their relative directions during every revolution",
      "are always perpendicular, at right angles to one another",
    ],
    correctIndex: 3,
    explanation:
      "The tangential component acts along the motion while the centripetal component acts along the radius, and the radius is always at right angles to the tangent, so the two components are perpendicular.",
    evidence:
      "In circular motion the tangential and centripetal components of the acceleration are perpendicular to each other.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-4.4",
    concept: "perpendicular acceleration components",
  },
  {
    key: "angular-speed-forty-turns",
    text: "A disc completes 40 revolutions in 8 s and a point on its rim is 0.5 m from the axis. The tangential speed of that point is",
    options: [
      "5 pi m s^-1, that is about 15.7 m s^-1",
      "10 pi m s^-1, that is about 31.4 m s^-1",
      "2.5 pi m s^-1, that is about 7.9 m s^-1",
      "20 pi m s^-1, that is about 62.8 m s^-1",
    ],
    correctIndex: 0,
    explanation:
      "One turn takes 8 / 40 = 0.2 s, so omega = 2 pi / T = 2 pi / 0.2 = 10 pi rad s^-1, and v = omega r = 10 pi x 0.5 = 5 pi, which is about 15.7 m s^-1.",
    evidence:
      "The tangential speed follows from v = omega r, with the angular velocity of uniform rotation given by omega = 2 pi / T.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-4.4",
    concept: "two step speed calculation",
  },
  {
    key: "angular-centripetal-force-from-omega",
    text: "A 0.5 kg body rotates about a fixed axis with angular velocity 8 rad s^-1 at a distance of 0.25 m from the axis. The force acting on it towards the axis has magnitude",
    options: ["4 N", "8 N", "16 N", "32 N"],
    correctIndex: 1,
    explanation:
      "The centripetal acceleration is a_c = omega^2 r = 8^2 x 0.25 = 64 x 0.25 = 16 m s^-2, and multiplying by the mass gives F = 0.5 x 16 = 8 N.",
    evidence:
      "The centripetal force on a body in circular motion is F = m omega^2 r, directed toward the centre of the path.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-4.4",
    concept: "force from angular velocity",
  },
  {
    key: "angular-record-stylus-acceleration",
    text: "A record turns at 33 revolutions per second and the stylus is 0.15 m from the spindle. The centripetal acceleration of the stylus is about",
    options: [
      "2.1 x 10^2 m s^-2",
      "4.3 x 10^4 m s^-2",
      "6.4 x 10^3 m s^-2",
      "1.3 x 10^4 m s^-2",
    ],
    correctIndex: 2,
    explanation:
      "The frequency is f = 33 s^-1, so omega = 2 pi f = 66 pi = 207 rad s^-1, and a_c = omega^2 r = (207)^2 x 0.15 = 4.29 x 10^4 x 0.15 = 6.4 x 10^3 m s^-2.",
    evidence:
      "A point at radius r moving with angular velocity omega has centripetal acceleration a_c = omega^2 r toward the axis.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 93,
    outcome: "PHY-4.4",
    concept: "acceleration from rotation frequency",
  },
  {
    key: "angular-satellite-centripetal-acceleration",
    text: "An artificial satellite travels in a circular orbit of radius 7.0 x 10^6 m at a speed of 7.8 x 10^3 m s^-1. Its centripetal acceleration is about",
    options: [
      "78 m s^-2",
      "0.87 m s^-2",
      "8.7 x 10^4 m s^-2",
      "8.7 m s^-2",
    ],
    correctIndex: 3,
    explanation:
      "The centripetal acceleration is a_c = v^2 / r = (7.8 x 10^3)^2 / (7.0 x 10^6) = 6.08 x 10^7 / 7.0 x 10^6 = 8.7 m s^-2, close to g because gravity is supplying the centripetal force.",
    evidence:
      "The centripetal acceleration a_c = v^2 / r of an orbiting satellite is produced by the gravitational attraction of the Earth.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 92,
    outcome: "PHY-4.4",
    concept: "satellite centripetal acceleration",
  },
];
