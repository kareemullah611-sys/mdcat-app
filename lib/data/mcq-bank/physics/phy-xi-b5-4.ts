import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "shm-defining-acceleration-condition",
    text: "A body is said to move in simple harmonic motion when its acceleration is",
    options: [
      "directly proportional to the displacement from the mean position and directed towards it",
      "directly proportional to the displacement and directed away from the mean position",
      "constant in magnitude but always directed towards the mean position",
      "directly proportional to the speed of the body and directed along the motion",
    ],
    correctIndex: 0,
    explanation:
      "Simple harmonic motion is defined by a = -omega^2 x, so the acceleration grows in direct proportion to the displacement and always points back towards the mean position, which is what keeps the body oscillating.",
    evidence:
      "In simple harmonic motion the acceleration of the body is directly proportional to the displacement from the mean position and directed towards it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-6.18",
    concept: "simple harmonic motion definition",
  },
  {
    key: "shm-restoring-force-toward-mean",
    text: "A body held in position by a spring is displaced from its mean position and released. The restoring force exerted by the spring on the body is",
    options: [
      "proportional to the displacement and directed away from the mean position",
      "proportional to the displacement and directed towards the mean position",
      "constant for a given displacement and directed along the motion of the body",
      "proportional to the speed of the body and directed opposite to the motion",
    ],
    correctIndex: 1,
    explanation:
      "The restoring force follows F = -kx, so its magnitude grows in direct proportion to the displacement while its direction is always back towards the mean position, which pulls the displaced body into oscillation.",
    evidence:
      "The restoring force F = -kx pulls a body back towards its equilibrium position whenever the body is displaced from the mean position.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "PHY-6.18",
    concept: "restoring force direction",
  },
  {
    key: "shm-amplitude-maximum-displacement",
    text: "For a mass oscillating on a spring, the amplitude of the motion is",
    options: [
      "the distance covered by the mass between two successive mean positions",
      "the largest acceleration of the mass during one complete oscillation",
      "the greatest displacement of the mass from its mean position",
      "the time taken by the mass to move from one extreme to the other",
    ],
    correctIndex: 2,
    explanation:
      "The amplitude is the maximum displacement from the mean position, so the mass swings over a total distance of 2A between the two extremes of the oscillation.",
    evidence:
      "The amplitude of an oscillation is the maximum displacement of the body from its mean position.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-6.18",
    concept: "amplitude of oscillation",
  },
  {
    key: "shm-mean-equilibrium-position",
    text: "A mass suspended from a spring is set oscillating. The mean position of this oscillation is",
    options: [
      "the point where the speed of the mass is greatest",
      "the point where the kinetic energy of the mass vanishes",
      "the point where the spring is stretched to its greatest length",
      "the point where the net restoring force on the mass becomes zero",
    ],
    correctIndex: 3,
    explanation:
      "The mean position is the equilibrium point where the net force and the acceleration both vanish, and the speed is greatest there because the potential energy stored in the spring has all become kinetic energy.",
    evidence:
      "The mean or equilibrium position of a body in simple harmonic motion is the point where the restoring force and the acceleration are zero.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.18",
    concept: "mean equilibrium position",
  },
  {
    key: "shm-circular-projection-shadows",
    text: "A particle moves in a circle at constant speed. The shadow it casts on a fixed diameter of that circle performs",
    options: [
      "simple harmonic motion, because the acceleration along the diameter stays proportional to the displacement",
      "uniform rectilinear motion, because the speed of the shadow never changes",
      "simple harmonic motion, because the speed of the shadow is greatest at the centre",
      "non-uniform motion that is not simple harmonic, because the acceleration is constant",
    ],
    correctIndex: 0,
    explanation:
      "The projected point has an acceleration that is always directed towards the centre of the circle and proportional to its displacement from that centre, which is exactly the condition a = -omega^2 x that defines simple harmonic motion.",
    evidence:
      "The projection of a particle moving in uniform circular motion on a fixed diameter of the circle executes simple harmonic motion.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-6.18",
    concept: "circular motion projection",
  },
  {
    key: "shm-projection-centre-statement",
    text: "The projection of a particle in uniform circular motion on a diameter executes simple harmonic motion, and the acceleration of that projected point always points towards the centre of the circle. Which conclusion follows correctly from the two statements?",
    options: [
      "Only the first statement holds, because the acceleration of the projected point points away from the centre",
      "Both statements hold, because the centre of the circle serves as the mean position of the projection",
      "Only the second statement holds, because the projected point is not accelerated at all",
      "The first statement fails, because projection on a diameter gives the shadow a constant speed",
    ],
    correctIndex: 1,
    explanation:
      "The projected point is always accelerated towards the centre of the circle and that centre plays the part of the mean position, so the two statements support one another and both are correct.",
    evidence:
      "The point obtained by projecting a particle in uniform circular motion on a diameter has its acceleration directed towards the centre, which corresponds to the mean position of the simple harmonic motion.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-6.18",
    concept: "centre as mean position",
  },
  {
    key: "shm-energy-extremes-statement",
    text: "Consider these two statements about a body in simple harmonic motion: its kinetic energy is maximum at the mean position, and its potential energy is maximum at the extremes. Which conclusion follows correctly?",
    options: [
      "Only the first statement holds, because the speed of the body is greatest at the extremes",
      "Only the second statement holds, because the displacement of the body vanishes at the mean position",
      "Both statements hold, because the speed and the displacement never reach their maxima at the same instant",
      "Each statement holds at some stage, because the two energies are equal at every point of the motion",
    ],
    correctIndex: 2,
    explanation:
      "The speed is greatest where the displacement is zero and the displacement is greatest where the speed is zero, so the two energies exchange continuously and their maxima can never occur at the same instant.",
    evidence:
      "In simple harmonic motion the kinetic energy is maximum at the mean position and the potential energy is maximum at the extreme positions.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-6.18",
    concept: "energy exchange in shm",
  },
  {
    key: "shm-kinetic-energy-mean-vs-extreme",
    text: "A mass stretched on a spring oscillates between two extreme positions. Its kinetic energy at the mean position compared with its kinetic energy at an extreme is",
    options: [
      "the same at both positions, because the restoring force keeps the speed fixed",
      "zero at the mean position and maximum at the extreme position",
      "zero at both positions, because the mass is at rest while the spring is extended",
      "maximum at the mean position and zero at the extreme position",
    ],
    correctIndex: 3,
    explanation:
      "At an extreme the mass is momentarily at rest, so its kinetic energy is zero and the whole of the energy is stored as potential energy, while at the mean position the speed is greatest and the entire energy is kinetic.",
    evidence:
      "The kinetic energy of a body in simple harmonic motion is maximum at the mean position and zero at the extreme positions.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.18",
    concept: "kinetic energy comparison",
  },
  {
    key: "shm-time-near-extremes",
    text: "A pendulum bob swinging in simple harmonic motion passes through its mean position and then moves towards an extreme. Compared with the time it spends in the region close to the mean position, the time spent close to the extremes is",
    options: [
      "much longer, because the speed of the bob falls to zero as it approaches an extreme",
      "much shorter, because the restoring force grows as the bob leaves the mean position",
      "the same, because the restoring force drives the bob at a steady rate",
      "much shorter, because the acceleration of the bob is greatest close to the mean position",
    ],
    correctIndex: 0,
    explanation:
      "The speed of the bob is greatest at the mean position and falls to zero at the extremes, so it sweeps through each small region near the centre quickly and lingers near the extremes where it moves slowly.",
    evidence:
      "A body in simple harmonic motion moves fastest at the mean position and slowest at the extreme positions, so it spends more time near the extremes.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-6.18",
    concept: "time spent near extremes",
  },
  {
    key: "shm-total-energy-constant",
    text: "For an ideal simple harmonic motion two claims are examined: without friction the total mechanical energy of the system stays constant, and the restoring force keeps supplying energy to the motion. Which conclusion follows correctly?",
    options: [
      "Only the first claim holds, because the restoring force does no work during the oscillation",
      "Both claims hold, because the restoring force only transfers energy from one form to the other",
      "Only the second claim holds, because the restoring force adds fresh energy at every step",
      "The first claim fails, because the total energy always varies with the amplitude",
    ],
    correctIndex: 1,
    explanation:
      "With no friction nothing leaves the system and the restoring force merely converts kinetic energy into potential energy and back again, so the total mechanical energy stays constant while the two forms alternate.",
    evidence:
      "In the absence of friction the total mechanical energy of a body in simple harmonic motion remains constant as kinetic and potential energy interchange.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.18",
    concept: "constant total energy",
  },
  {
    key: "shm-phase-relationships",
    text: "For a body in simple harmonic motion the displacement x, the velocity v and the acceleration a all vary with time. The correct phase relationships among these three quantities are",
    options: [
      "the velocity leads the displacement by 90 degrees, and the acceleration lags the velocity by 90 degrees",
      "the displacement and the velocity stay in step, while the acceleration depends on the amplitude",
      "the velocity is 90 degrees out of phase with the displacement, and the acceleration is 90 degrees out of phase with the velocity",
      "the acceleration is 90 degrees out of phase with the displacement, and the velocity is in step with the acceleration",
    ],
    correctIndex: 2,
    explanation:
      "Writing x = A cos(omega t) gives v = -A omega sin(omega t) and a = -omega^2 x, so the velocity differs from the displacement by a quarter cycle and the acceleration differs from the velocity by another quarter cycle.",
    evidence:
      "The displacement, the velocity and the acceleration of a body in simple harmonic motion differ in phase by 90 degrees successively.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.18",
    concept: "phase relationships of quantities",
  },
  {
    key: "shm-extremes-not-equilibrium",
    text: "A body oscillating in simple harmonic motion is at rest momentarily at its extreme displacement. Its condition at that instant is best described as",
    options: [
      "equilibrium, because the velocity of the body has fallen to zero",
      "equilibrium, because the body has stopped and the displacement is no longer changing",
      "equilibrium, because the restoring force acts only while the body is moving",
      "not equilibrium, because the restoring force and the acceleration are both at their maximum",
    ],
    correctIndex: 3,
    explanation:
      "Equilibrium requires the net force to vanish, and at an extreme the displacement is greatest so the restoring force -kx and the acceleration are both greatest there, even though the velocity happens to be zero at that instant.",
    evidence:
      "A body in simple harmonic motion is not in equilibrium at its extreme positions, where the restoring force and the acceleration are maximum.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-6.18",
    concept: "extremes and equilibrium",
  },
  {
    key: "shm-period-independent-of-amplitude",
    text: "Two identical masses on identical springs are set oscillating, one with a large amplitude and one with a small amplitude. The period of the second mass is",
    options: [
      "the same as that of the first, because the period depends on the mass and the spring constant only",
      "longer than that of the first, because a larger amplitude needs a stronger restoring force",
      "shorter than that of the first, because the body spends less time away from the mean position",
      "twice that of the first, because the restoring force grows with the amplitude",
    ],
    correctIndex: 0,
    explanation:
      "For a mass on a spring T = 2 pi sqrt(m/k), which contains no amplitude term, so in ideal simple harmonic motion every oscillation takes the same time however large or small the swing is.",
    evidence:
      "The time period of a mass attached to a spring is 2 pi sqrt(m/k) and does not depend on the amplitude of the oscillation.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-6.18",
    concept: "amplitude independence of period",
  },
  {
    key: "shm-energy-exchange-sequence",
    text: "A block on a spring is released from rest at its extreme displacement and allowed to oscillate freely. The sequence it passes through in the first quarter of the motion is",
    options: [
      "maximum kinetic energy, then zero kinetic energy, then maximum potential energy",
      "maximum potential energy with zero kinetic energy, then maximum kinetic energy at the mean position",
      "zero potential energy with zero kinetic energy, then maximum kinetic energy as the spring contracts",
      "zero acceleration and zero velocity, then both of them growing together along the swing",
    ],
    correctIndex: 1,
    explanation:
      "At the extreme the block is at rest and the spring is most stretched, so the potential energy is at its maximum and the kinetic energy is zero; as the spring contracts that potential energy is converted entirely into kinetic energy by the time the block reaches the mean position.",
    evidence:
      "In simple harmonic motion the potential energy is maximum at the extremes and the kinetic energy is maximum at the mean position, the two being exchanged continuously.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.18",
    concept: "energy conversion sequence",
  },
  {
    key: "shm-shadow-motion-sequence",
    text: "A point moves round a circle at constant speed while a narrow beam of light throws its shadow on a fixed diameter of the circle. The sequence seen by the shadow during one revolution is",
    options: [
      "constant speed along the diameter, from one end to the other without turning back",
      "slow near the centre, fastest at the ends, and slow again at the centre",
      "rest at one end, fastest at the centre, and rest again at the opposite end",
      "fastest at one end, slowing steadily to a stop at the centre, and fastest at the other end",
    ],
    correctIndex: 2,
    explanation:
      "The shadow executes simple harmonic motion along the diameter, so it begins at an extreme with zero speed, reaches its greatest speed at the centre where the displacement vanishes, and comes to rest again at the opposite extreme.",
    evidence:
      "The projection of uniform circular motion on a diameter is simple harmonic motion, with the greatest speed at the centre and rest at the extremes.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.18",
    concept: "shadow projection sequence",
  },
  {
    key: "shm-spring-period-value",
    text: "A mass of 8.0 kg is attached to a spring of force constant 32 N m^-1 and set oscillating. Taking pi as 3.14, the time period of this motion is",
    options: ["1.57 s", "6.28 s", "0.79 s", "3.14 s"],
    correctIndex: 3,
    explanation:
      "T = 2 pi sqrt(m/k) = 2(3.14) sqrt(8.0/32) = 6.28(0.5) = 3.14 s, and the same value follows from omega = sqrt(k/m) = 2 rad s^-1 giving T = 2 pi/omega = 6.28/2 = 3.14 s.",
    evidence: "The time period of a mass attached to a spring is given by T = 2 pi sqrt(m/k).",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 92,
    outcome: "PHY-6.18",
    concept: "spring mass period",
  },
  {
    key: "shm-pendulum-five-oscillations",
    text: "A simple pendulum of length 2.5 m oscillates in a place where the gravitational acceleration is 10 m s^-2. Taking pi as 3.14, the time taken by the bob to complete five oscillations is",
    options: ["15.7 s", "31.4 s", "6.28 s", "78.5 s"],
    correctIndex: 0,
    explanation:
      "T = 2 pi sqrt(L/g) = 2(3.14) sqrt(2.5/10) = 6.28(0.5) = 3.14 s, so five complete oscillations take 5 x 3.14 = 15.7 s.",
    evidence: "The time period of a simple pendulum is given by T = 2 pi sqrt(L/g).",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 92,
    outcome: "PHY-6.18",
    concept: "pendulum period calculation",
  },
  {
    key: "shm-restoring-force-value",
    text: "A particle of mass 0.50 kg moves in simple harmonic motion with an angular frequency of 4.0 rad s^-1. When it is 0.25 m from the mean position, the restoring force on it is",
    options: [
      "8.0 N away from the mean position",
      "2.0 N towards the mean position",
      "0.5 N towards the mean position",
      "2.0 N away from the mean position",
    ],
    correctIndex: 1,
    explanation:
      "The acceleration is a = -omega^2 x = -(4.0)^2(0.25) = -4.0 m s^-2, so the force is F = ma = 0.50 x 4.0 = 2.0 N and the minus sign shows that it is directed back towards the mean position.",
    evidence:
      "For simple harmonic motion a = -omega^2 x, so the restoring force is always directed towards the mean position.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 91,
    outcome: "PHY-6.18",
    concept: "restoring force from omega",
  },
  {
    key: "shm-maximum-kinetic-energy",
    text: "A mass of 0.50 kg oscillates on a spring of force constant 200 N m^-1 with an amplitude of 0.10 m. The maximum kinetic energy reached by the mass is",
    options: ["1.0 J", "0.5 J", "2.0 J", "4.0 J"],
    correctIndex: 2,
    explanation:
      "The total mechanical energy is one half k A^2 = one half x 200 x (0.10)^2 = 1.0 J and all of it is kinetic at the mean position; the same result follows from omega = sqrt(200/0.50) = 20 rad s^-1 giving v = omega A = 2.0 m s^-1 and one half m v^2 = 1.0 J.",
    evidence:
      "In simple harmonic motion the maximum kinetic energy equals the total energy and is reached at the mean position.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 90,
    outcome: "PHY-6.18",
    concept: "maximum kinetic energy",
  },
  {
    key: "shm-acceleration-from-displacement",
    text: "In the simple harmonic motion of a 0.60 kg object on a spring of force constant 48 N m^-1, the acceleration when the object is 0.25 m from the mean position is",
    options: [
      "12 m s^-2 away from the mean position",
      "0.30 m s^-2 towards the mean position",
      "5 m s^-2 away from the mean position",
      "20 m s^-2 towards the mean position",
    ],
    correctIndex: 3,
    explanation:
      "The restoring force is kx = 48 x 0.25 = 12 N directed towards the mean position, so a = F/m = 12/0.60 = 20 m s^-2, which agrees with a = omega^2 x for omega^2 = k/m = 80 m s^-2.",
    evidence:
      "The acceleration in simple harmonic motion is a = -omega^2 x, so it always acts towards the mean position.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 91,
    outcome: "PHY-6.18",
    concept: "acceleration from displacement",
  },
];
