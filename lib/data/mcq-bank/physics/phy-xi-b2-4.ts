import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "conserv-third-law-different-bodies",
    text: "Newton's third law states that the force exerted by body A on body B is equal and opposite to the force exerted by B on A. These two forces",
    options: [
      "cancel each other because their magnitudes are equal",
      "never appear together in the free body diagram of a single body",
      "cancel only when the two bodies are at rest",
      "cancel only when the two bodies have equal masses",
    ],
    correctIndex: 1,
    explanation:
      "Action and reaction act on two different bodies, so they are never included in the same free body diagram and cannot cancel; they cancel only when both bodies are counted together as one system.",
    evidence:
      "Action and reaction forces are equal in magnitude and opposite in direction but act on two different bodies, so they do not cancel each other.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-2.15",
    concept: "third law force pair",
  },
  {
    key: "conserv-isolated-system-condition",
    text: "A group of bodies forms an isolated system only when",
    options: [
      "all the bodies inside it are momentarily at rest",
      "the internal forces between the bodies are balanced",
      "no resultant external force acts on the group as a whole",
      "all the bodies in the group have identical masses",
    ],
    correctIndex: 2,
    explanation:
      "An isolated system is defined by the absence of a resultant external force on it, so no external agent can change its total linear momentum and that momentum remains constant.",
    evidence:
      "Conservation of linear momentum holds for an isolated system, that is a system on which no resultant external force acts.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-2.15",
    concept: "isolated system condition",
  },
  {
    key: "conserv-gun-recoil-momentum-equal",
    text: "A bullet of mass m leaves a gun of mass M and the gun recoils as the bullet moves forward. The correct relation between the magnitude of the bullet's momentum and the magnitude of the gun's recoil momentum is",
    options: [
      "the bullet's momentum is larger because the bullet is the lighter body",
      "they are equal because the two forces act for the same time",
      "the gun's momentum is larger because the gun is the heavier body",
      "they are equal only if the bullet leaves the barrel slowly",
    ],
    correctIndex: 1,
    explanation:
      "The bullet and the gun push on each other with equal and opposite forces for the same interval of time, so by the third law they receive equal and opposite impulses and therefore equal and opposite momenta.",
    evidence:
      "The recoil momentum of a gun is equal in magnitude and opposite in direction to the momentum of the bullet it fires.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-2.15",
    concept: "recoil momentum balance",
  },
  {
    key: "conserv-explosion-total-momentum",
    text: "A bomb that is at rest in mid-air explodes into three fragments which scatter in different directions. Immediately after the explosion the vector sum of the momenta of the three fragments is",
    options: [
      "zero, because the bomb happened to be at rest before the explosion",
      "greater than zero, because the explosion releases stored energy",
      "the same as the momentum of the bomb just before it exploded",
      "greater than the momentum of the bomb but directed the opposite way",
    ],
    correctIndex: 2,
    explanation:
      "The explosion is an internal process and the pieces fly in different directions, so their vector sum equals the momentum of the bomb just before the explosion, which was zero. The pieces can gain kinetic energy without changing total momentum.",
    evidence:
      "In an explosion the total momentum of the pieces equals the momentum of the object before the explosion.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-2.15",
    concept: "explosion momentum sum",
  },
  {
    key: "conserv-sticking-two-kg-trolley",
    text: "A 2 kg trolley moving at 3 m s^-1 collides head-on with a stationary trolley of mass 1 kg, and the two trolleys move together after the impact. Their common velocity is",
    options: [
      "2 m s^-1 along the original direction of the 2 kg trolley",
      "1.5 m s^-1 along the original direction of the 2 kg trolley",
      "3 m s^-1 along the original direction of the 2 kg trolley",
      "4.5 m s^-1 along the original direction of the 2 kg trolley",
    ],
    correctIndex: 0,
    explanation:
      "The momentum before impact is 2 x 3 = 6 kg m s^-1 and after sticking the combined mass is 2 + 1 = 3 kg moving at a single velocity, so 3v = 6 and v = 2 m s^-1 in the original direction.",
    evidence:
      "In a collision in which the bodies move together, total momentum equals the total mass multiplied by their common velocity.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.15",
    concept: "common velocity after sticking",
  },
  {
    key: "conserv-second-body-velocity-after-impact",
    text: "In a head-on collision a 2 kg ball moving at 6 m s^-1 strikes a stationary ball of mass 1 kg, and afterwards the 2 kg ball is still moving at 2 m s^-1 along its original line. The velocity of the 1 kg ball just after the collision is",
    options: ["-8 m s^-1", "0 m s^-1", "4 m s^-1", "8 m s^-1"],
    correctIndex: 3,
    explanation:
      "Total momentum before impact is 2 x 6 = 12 kg m s^-1; the 2 kg ball carries away only 2 x 2 = 4 kg m s^-1, so the 1 kg ball must carry the remaining 12 - 4 = 8 kg m s^-1 and moves at 8 m s^-1 forward.",
    evidence:
      "In a head-on collision the total momentum before impact equals the total momentum after impact, so the momentum carried by one body fixes that of the other.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.15",
    concept: "velocity after head-on impact",
  },
  {
    key: "conserv-sticking-four-kg-body",
    text: "A body of mass 4 kg moving at 5 m s^-1 strikes a body of mass 1 kg that is initially at rest, and the two bodies stay joined after the collision. Their common velocity is",
    options: ["5 m s^-1", "4 m s^-1", "3 m s^-1", "2.5 m s^-1"],
    correctIndex: 1,
    explanation:
      "Total momentum before the impact is 4 x 5 = 20 kg m s^-1 and after joining the combined mass is 4 + 1 = 5 kg, so 5v = 20 gives v = 4 m s^-1.",
    evidence:
      "When two bodies collide and move together afterwards their shared velocity follows from total momentum divided by total mass.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.15",
    concept: "sticking collision velocity",
  },
  {
    key: "conserv-wall-rebound-double-momentum",
    text: "When a ball of mass 0.5 kg approaches a rigid wall with a speed of 10 m s^-1 and leaves the wall with the same speed, the change in its momentum taking the incident direction as positive is",
    options: ["zero, because its speed is unchanged", "+5 kg m s^-1", "-10 kg m s^-1", "-5 kg m s^-1"],
    correctIndex: 3,
    explanation:
      "Rebounding reverses the direction, so the final velocity is -10 m s^-1 and the momentum changes from +5 to -5 kg m s^-1, giving a change of -5 - (+5) = -10 kg m s^-1, twice the incident momentum.",
    evidence:
      "A body that rebounds from a fixed obstacle has its momentum reversed, so its momentum change equals twice the incident momentum.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.15",
    concept: "momentum change on rebound",
  },
  {
    key: "conserv-rebound-momentum-change-value",
    text: "On striking a wall with a speed of 15 m s^-1 a ball of mass 0.2 kg rebounds with a speed of 10 m s^-1. The magnitude of the change in the momentum of the ball is",
    options: ["1 kg m s^-1", "3 kg m s^-1", "5 kg m s^-1", "2 kg m s^-1"],
    correctIndex: 2,
    explanation:
      "The momentum before impact is 0.2 x 15 = 3 kg m s^-1 and after rebound it is 0.2 x 10 = 2 kg m s^-1 in the opposite direction, so the magnitude of the change is 3 + 2 = 5 kg m s^-1.",
    evidence:
      "Because momentum is a vector, a ball that rebounds from a wall shows a momentum change equal to the sum of the two momentum magnitudes.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.15",
    concept: "rebound momentum change value",
  },
  {
    key: "conserv-rifle-recoil-velocity",
    text: "A rifle of mass 5 kg fires a bullet of mass 0.01 kg horizontally, and the bullet leaves the rifle with a speed of 500 m s^-1. The recoil velocity of the rifle is",
    options: ["0.01 m s^-1", "10 m s^-1", "100 m s^-1", "1 m s^-1"],
    correctIndex: 3,
    explanation:
      "The bullet leaves with momentum 0.01 x 500 = 5 kg m s^-1, so the rifle must acquire an equal and opposite momentum; 5v = 5 gives a recoil speed of 1 m s^-1 in the backward direction.",
    evidence:
      "Conservation of momentum while a projectile leaves a gun gives the gun a recoil momentum equal and opposite to the momentum of the projectile.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.15",
    concept: "recoil velocity calculation",
  },
  {
    key: "conserv-explosion-equal-fragment-speed",
    text: "A shell of mass 8 kg is initially at rest and explodes into two fragments of equal mass. One fragment is observed moving with a speed of 10 m s^-1, and the velocity of the other fragment is",
    options: [
      "10 m s^-1 in the same direction as the first fragment",
      "10 m s^-1 in the direction opposite to the first fragment",
      "5 m s^-1 in the direction opposite to the first fragment",
      "20 m s^-1 in the direction opposite to the first fragment",
    ],
    correctIndex: 1,
    explanation:
      "Total momentum remains zero, so the two equal fragments must carry equal and opposite momenta of magnitude 4 x 10 = 40 kg m s^-1; equal mass therefore means the second fragment moves at 10 m s^-1 in the opposite direction.",
    evidence:
      "An object at rest that breaks into two equal parts sends them apart with equal momenta in opposite directions.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-2.15",
    concept: "explosion fragment velocity",
  },
  {
    key: "conserv-sticking-versus-elastic-comparison",
    text: "Two bodies collide head-on and remain joined after the impact. Compared with a perfectly elastic collision between the same two bodies, this collision gives",
    options: [
      "the same final total momentum but a smaller final total kinetic energy",
      "the same final total kinetic energy but a smaller final total momentum",
      "a larger final total momentum and a larger final total kinetic energy",
      "a smaller final total momentum and the same final total kinetic energy",
    ],
    correctIndex: 0,
    explanation:
      "Total momentum is conserved for an isolated system whatever the kind of collision, so it is the same in both cases, but sticking together leaves less kinetic energy than a perfectly elastic collision between the same bodies.",
    evidence:
      "Kinetic energy is conserved only in an elastic collision, whereas the total momentum of an isolated system is conserved in every type of collision.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.15",
    concept: "elastic versus inelastic",
  },
  {
    key: "conserv-momentum-versus-energy-statement",
    text: "Two statements are offered about an isolated system. Statement I: the total linear momentum of the system stays constant with time. Statement II: the total kinetic energy of the system also stays constant with time. Which statement follows from Newton's laws?",
    options: ["Statement I only", "Statement II only", "Both statements", "Neither statement"],
    correctIndex: 0,
    explanation:
      "With no resultant external force the rate of change of total momentum is zero, so momentum is conserved, but kinetic energy need not be constant because internal forces can deform the bodies and turn kinetic energy into heat and sound.",
    evidence:
      "The total momentum of an isolated system is constant, while its kinetic energy can change because the internal forces can do work on the bodies.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.15",
    concept: "momentum versus kinetic energy",
  },
  {
    key: "conserv-friction-invalidates-isolation",
    text: "A hockey puck slides across rough ice and slows down steadily until it comes to rest. The momentum of the puck is not conserved during this sliding because",
    options: [
      "the mass of the puck changes while it is sliding",
      "momentum is conserved only for perfectly elastic collisions",
      "the puck is not travelling along a straight line",
      "the rough ice exerts a resultant frictional force on the puck",
    ],
    correctIndex: 3,
    explanation:
      "Conservation of momentum applies only to an isolated system, and the friction exerted by the rough ice is a resultant external force directed against the motion, so it steadily reduces the momentum of the puck.",
    evidence:
      "Conservation of momentum requires that no resultant external force acts on the system, which is not the case for a body sliding on a rough surface.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-2.15",
    concept: "external force removes isolation",
  },
  {
    key: "conserv-equal-and-opposite-changes",
    text: "Two bodies exert equal and opposite forces on each other for the same interval of time. The changes of momentum dp1 and dp2 of the two bodies satisfy",
    options: [
      "dp1 = dp2",
      "both changes point in the direction of the larger of the two forces",
      "dp1 + dp2 = 0",
      "dp1 = m1 m2 dp2",
    ],
    correctIndex: 2,
    explanation:
      "The rate of change of momentum equals the applied force, so integrating a pair of equal and opposite forces over the same time gives equal and opposite impulses, which means dp1 + dp2 = 0.",
    evidence:
      "Equal and opposite forces acting for equal times produce equal and opposite impulses and hence equal and opposite changes of momentum.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.15",
    concept: "equal opposite momentum change",
  },
  {
    key: "conserv-rocket-exhaust-momentum",
    text: "A rocket is accelerating forward through empty space where there is no air to push against. The forward momentum of the rocket is gained because",
    options: [
      "hot gases from the engine push against the surrounding air",
      "the exhaust gases are ejected backwards and carry backward momentum with them",
      "the rocket gains mass as its fuel is consumed",
      "the gravitational pull of a distant star speeds the rocket up",
    ],
    correctIndex: 1,
    explanation:
      "The rocket pushes its exhaust gases backwards, so by the third law the gases push the rocket forward, and with no resultant external force the forward momentum of the rocket exactly balances the backward momentum of the gases.",
    evidence:
      "A rocket accelerates by ejecting exhaust gases backwards, so the gases gain backward momentum while the rocket gains equal forward momentum.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-2.15",
    concept: "rocket exhaust momentum",
  },
  {
    key: "conserv-sticking-solution-step-order",
    text: "A block of mass 5 kg moving at 6 m s^-1 hits a stationary block of mass 3 kg and the two stick together. Which sequence of operations finds their common velocity correctly?",
    options: [
      "Find the total kinetic energy first, then divide it by the total mass to obtain v",
      "Divide the first mass by its velocity and add the result to the second mass",
      "Find the total momentum 5 x 6 = 30 kg m s^-1, then set (5 + 3)v = 30",
      "Subtract the lighter mass from the heavier one, multiply by v, then set the result to zero",
    ],
    correctIndex: 2,
    explanation:
      "Momentum before the impact is 5 x 6 = 30 kg m s^-1; because the bodies move together afterwards the total momentum after is (5 + 3)v, so 8v = 30 and the common velocity is 3.75 m s^-1.",
    evidence:
      "Setting the total momentum before a collision equal to the total momentum after it gives the shared velocity when the bodies stick together.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-2.15",
    concept: "sticking solution order",
  },
  {
    key: "conserv-sequential-collision-order",
    text: "A 2 kg object moving at 6 m s^-1 hits a stationary 4 kg object and sticks to it, and the joined pair then strikes a stationary 6 kg object and all three move together. The correct order of steps to find the final common velocity is",
    options: [
      "add all three masses first, then divide the first velocity by the total mass",
      "multiply each mass by its own velocity and add the three products together",
      "add the momentum of the first two objects, divide by their combined mass, then add that momentum to the 6 kg object and divide by the final total mass",
      "subtract the final mass from the initial masses, then divide the result by the first velocity",
    ],
    correctIndex: 2,
    explanation:
      "First 2 x 6 + 4 x 0 = 12 kg m s^-1 becomes 12 divided by 2 + 4 = 2 m s^-1 for the stuck pair; that pair then strikes the 6 kg object, so 6 x 2 + 6 x 0 = 12 divided by 6 + 6 = 1 m s^-1 for all three bodies.",
    evidence:
      "Successive perfectly inelastic collisions are treated one after another, each time conserving momentum for the group of bodies involved.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-2.15",
    concept: "sequential collision steps",
  },
  {
    key: "conserv-opposite-motion-signed-momentum",
    text: "A 2 kg ball moves to the right with a speed of 3 m s^-1 while a 1 kg ball moves to the left with the same speed. Taking the rightward direction as positive, the total momentum of the two balls is",
    options: ["zero kg m s^-1", "-3 kg m s^-1", "+9 kg m s^-1", "+3 kg m s^-1"],
    correctIndex: 3,
    explanation:
      "The leftward ball has velocity -3 m s^-1, so the total momentum is (2)(+3) + (1)(-3) = +6 - 3 = +3 kg m s^-1; since momentum is a vector the signs of the components must be kept.",
    evidence:
      "Momentum is a vector quantity, so the momenta of bodies moving in opposite directions must be added with their proper signs.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.15",
    concept: "signed momentum components",
  },
  {
    key: "conserv-same-direction-sticking-speed",
    text: "A 3 kg body moving at 10 m s^-1 overtakes a 5 kg body moving at 2 m s^-1 in the same direction, and the two bodies collide and stay joined. Their common velocity is",
    options: ["5 m s^-1", "4 m s^-1", "6 m s^-1", "8 m s^-1"],
    correctIndex: 0,
    explanation:
      "Both velocities carry the same sign, so the total momentum is 3 x 10 + 5 x 2 = 30 + 10 = 40 kg m s^-1; the joined mass is 8 kg, so 8v = 40 and v = 5 m s^-1.",
    evidence:
      "For bodies travelling in the same direction the momenta are added with the same sign before being equated across the collision.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.15",
    concept: "same direction sticking speed",
  },
  {
    key: "conserv-explosion-energy-versus-momentum",
    text: "A body moving along a straight line explodes into two pieces that both continue forward. Compared with the body just before the explosion, the two pieces immediately afterwards have",
    options: [
      "the same total momentum but a greater total kinetic energy",
      "a greater total momentum and a greater total kinetic energy",
      "a smaller total momentum but a greater total kinetic energy",
      "the same total momentum and the same total kinetic energy",
    ],
    correctIndex: 0,
    explanation:
      "The explosion acts only through internal forces, so the vector sum of the piece momenta stays equal to the momentum of the body before the explosion, while the released stored energy raises the total kinetic energy.",
    evidence:
      "In an explosion the total momentum is unchanged from before the event even though the kinetic energy of the pieces increases.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-2.15",
    concept: "explosion energy and momentum",
  },
  {
    key: "conserv-truck-velocity-after-separation",
    text: "A truck of mass 10 kg moving at 6 m s^-1 collides head-on with a stationary car of mass 4 kg and the two move apart afterwards. The car leaves with a speed of 9 m s^-1 along the direction opposite to the truck's original motion. The velocity of the truck just after the collision is",
    options: [
      "2.4 m s^-1 along the truck's original direction",
      "9 m s^-1 along the truck's original direction",
      "12 m s^-1 along the truck's original direction",
      "9.6 m s^-1 along the truck's original direction",
    ],
    correctIndex: 3,
    explanation:
      "Taking the truck's initial direction as positive, the momentum before impact is 10 x 6 = 60 kg m s^-1 and the car carries away 4 x (-9) = -36 kg m s^-1, so 10v - 36 = 60 and v = +9.6 m s^-1 along the original direction.",
    evidence:
      "After a head-on collision the vector sum of the momenta of the separated bodies equals their total momentum before the collision.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-2.15",
    concept: "separated body final velocity",
  },
  {
    key: "conserv-elastic-pair-final-speeds",
    text: "A 3 kg block moving at 4 m s^-1 collides head-on with a stationary 2 kg block in a perfectly elastic collision. The velocities of the 3 kg block and the 2 kg block just after the collision are",
    options: [
      "4.0 m s^-1 and 0 m s^-1",
      "1.6 m s^-1 and 3.2 m s^-1",
      "0.8 m s^-1 and 4.8 m s^-1",
      "2.4 m s^-1 and 4.8 m s^-1",
    ],
    correctIndex: 2,
    explanation:
      "For an elastic head-on collision with the second block at rest, v1 = (3 - 2) x 4 divided by (3 + 2) = 0.8 m s^-1 and v2 = (2 x 3) x 4 divided by (3 + 2) = 4.8 m s^-1, and momentum checks out as 3(0.8) + 2(4.8) = 12 kg m s^-1.",
    evidence:
      "In a perfectly elastic head-on collision both the total momentum and the total kinetic energy of the two bodies are conserved.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-2.15",
    concept: "elastic collision final speeds",
  },
  {
    key: "conserv-two-step-sticking-speed",
    text: "A 2 kg block moving at 12 m s^-1 strikes a stationary 3 kg block and the two move together. That joined pair then strikes a stationary 5 kg block and all three end up moving together. The final velocity of the three blocks is",
    options: ["4.8 m s^-1", "2.4 m s^-1", "1.2 m s^-1", "7.2 m s^-1"],
    correctIndex: 1,
    explanation:
      "First 2 x 12 = 24 kg m s^-1 shared by 2 + 3 = 5 kg gives 4.8 m s^-1; then 5 x 4.8 = 24 kg m s^-1 shared by 5 + 5 = 10 kg gives a final velocity of 2.4 m s^-1.",
    evidence:
      "In each perfectly inelastic collision the momentum of the striking group is shared by the total mass of the bodies that end up joined together.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "PHY-2.15",
    concept: "two stage sticking speed",
  },
  {
    key: "conserv-kinetic-energy-loss-fraction",
    text: "A 4 kg body moving at 5 m s^-1 collides head-on with a 1 kg body at rest and the two stick together. The fraction of the initial kinetic energy that is converted into heat and sound is",
    options: ["20 per cent", "40 per cent", "80 per cent", "50 per cent"],
    correctIndex: 0,
    explanation:
      "Momentum 4 x 5 = 20 kg m s^-1 spread over 5 kg gives v = 4 m s^-1; the kinetic energy falls from (1/2) x 4 x 25 = 50 J to (1/2) x 5 x 16 = 40 J, so 10 J of the original 50 J, that is 20 per cent, is dissipated.",
    evidence:
      "A perfectly inelastic collision conserves total momentum but not kinetic energy, part of which is converted into heat and sound.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-2.15",
    concept: "kinetic energy loss fraction",
  },
];