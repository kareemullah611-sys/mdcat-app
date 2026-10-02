import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "work-scalar-product-component",
    text: "A force and a displacement are both vectors. Why does the work done by the force depend on the angle between them rather than on the plain product of their magnitudes?",
    options: [
      "Because the force and the displacement act at different instants of the motion",
      "Because the perpendicular component of the force removes energy from the body",
      "Because only the component of force along the displacement can change the speed",
      "Because the magnitudes of two vectors cannot be multiplied at all",
    ],
    correctIndex: 2,
    explanation:
      "Only the component of the force along the displacement, F cos(theta), is able to speed the body up or slow it down, while the perpendicular component merely turns the direction of motion, so the product that gives work is the scalar product F s cos(theta).",
    evidence:
      "Work done by a constant force is the scalar product of the force and the displacement, W = F s cos(theta).",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-3.1",
    concept: "scalar product work",
  },
  {
    key: "work-area-under-graph-equals-work",
    text: "The area under a graph of force against displacement gives a quantity that is measured in newton metres. What does this area represent?",
    options: [
      "The work done by the force, measured in joules",
      "The distance travelled by the body, measured in metres",
      "The speed gained by the body, measured in m s^-1",
      "The power used by the force, measured in watts",
    ],
    correctIndex: 0,
    explanation:
      "A narrow strip of the graph of width d x has area F d x, which is exactly the work done over that strip, so adding all the strips gives the whole area under the force-displacement graph, and this area carries the unit newton metre, that is the joule.",
    evidence:
      "The area bounded by a force-displacement graph equals the work done by the force.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "PHY-3.1",
    concept: "area under graph",
  },
  {
    key: "work-centripetal-force-circular-path",
    text: "A body moves in a circle at constant speed under a single force that always points towards the centre of the circle. What is the work done by this force during one complete trip round the circle?",
    options: [
      "It is positive, because the body is being held against its tendency to fly off",
      "It is zero, because the force stays at right angles to the motion everywhere",
      "It is negative, because the force pulls inward against the outward motion",
      "It is the force multiplied by the length of the circular path",
    ],
    correctIndex: 1,
    explanation:
      "The centripetal force is at right angles to the instantaneous velocity at every point of the path, so cos(theta) = 0 and F s cos(theta) vanishes all the way round; the force changes only the direction of the motion and never the speed, so it does no work.",
    evidence:
      "In circular motion the centripetal force is perpendicular to the tangent of the path and therefore does no work.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-3.1",
    concept: "centripetal force work",
  },
  {
    key: "work-is-a-scalar",
    text: "Work is obtained by multiplying two vectors, yet it is never given a direction and is simply added when several forces act. How is work best classified?",
    options: [
      "A vector, because it is built from two vector quantities",
      "A vector, because it points along the resultant force",
      "A scalar, because it is measured in joules",
      "A scalar, because it has magnitude only and no direction of its own",
    ],
    correctIndex: 3,
    explanation:
      "The dot product of two vectors is an ordinary number, so work is a scalar: its sign only records whether the force assisted or opposed the displacement, and works done by several forces are added algebraically rather than head to tail.",
    evidence:
      "Work is a scalar quantity that is measured in joules and is added algebraically.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "scalar nature of work",
  },
  {
    key: "work-two-perpendicular-legs",
    text: "A constant horizontal force of 10 N acts throughout a journey made of two straight parts: first 3 m along the x axis in the direction of the force, then 4 m along the y axis at right angles to it. What is the total work done?",
    options: [
      "30 J",
      "70 J",
      "50 J",
      "0 J",
    ],
    correctIndex: 0,
    explanation:
      "On the first leg cos(theta) = 1, so W = 10 x 3 = 30 J, while on the second leg the force is perpendicular to the displacement and cos(theta) = 0 so it contributes nothing, leaving 30 J in total.",
    evidence:
      "Only the component of a force along the displacement can do work on a body.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "work on perpendicular legs",
  },
  {
    key: "work-at-obtuse-angle-negative",
    text: "A force of 30 N acts on a body while the body is displaced 4 m along a straight line that makes 120 degrees with the force. What is the work done?",
    options: [
      "60 J",
      "120 J",
      "-120 J",
      "-60 J",
    ],
    correctIndex: 3,
    explanation:
      "cos 120 degrees is -0.5, so W = F s cos(theta) = 30 x 4 x (-0.5) = -60 J, and the negative sign records that this force has a component opposite to the displacement.",
    evidence:
      "For an obtuse angle between the force and the displacement the cosine is negative, so the work done is negative.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-3.1",
    concept: "work at obtuse angle",
  },
  {
    key: "work-raising-load-mgh",
    text: "A 12 kg load is raised from rest through a vertical height of 5 m. Taking g = 10 m s^-2, what is the work done in lifting it?",
    options: [
      "60 J",
      "600 J",
      "6000 J",
      "12 J",
    ],
    correctIndex: 1,
    explanation:
      "The weight of the load is mg = 12 x 10 = 120 N and raising it means pushing against this force through 5 m, so the work done is m g h = 120 x 5 = 600 J.",
    evidence:
      "The work done in lifting a body of mass m through a height h is m g h.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-3.1",
    concept: "lifting work mgh",
  },
  {
    key: "work-lowering-body-rope",
    text: "An 8 kg block is lowered at steady speed through a vertical distance of 4 m by a vertical rope. Taking g = 10 m s^-2, what is the work done by the upward pull of the rope?",
    options: [
      "320 J",
      "80 J",
      "-320 J",
      "-80 J",
    ],
    correctIndex: 2,
    explanation:
      "At steady speed the rope tension balances the weight, 8 x 10 = 80 N, while the displacement is downward, so cos(theta) = -1 and W = 80 x 4 x (-1) = -320 J, which is the familiar -mgh for a body that is being lowered.",
    evidence:
      "In lowering a body at constant speed the upward pulling force does work equal to -m g h.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-3.1",
    concept: "lowering work sign",
  },
  {
    key: "work-against-friction-distance",
    text: "A crate is dragged 12 m along a rough horizontal floor against a steady frictional force of 150 N. What is the work done in overcoming friction?",
    options: [
      "1800 J",
      "150 J",
      "1500 J",
      "180 J",
    ],
    correctIndex: 0,
    explanation:
      "Friction acts opposite the motion over the whole 12 m that the crate slides, so the work done against it is f x d = 150 x 12 = 1800 J, which is why the distance slid, and not any vertical height, is the quantity that matters.",
    evidence:
      "The work done against friction equals the friction force multiplied by the distance the body slides.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "work against friction",
  },
  {
    key: "work-up-rough-incline",
    text: "A block is pulled up a rough incline by a force of 200 N applied parallel to the surface. The block slides 10 m along the incline, which lifts it through a vertical height of 6 m. What is the work done by the 200 N pulling force?",
    options: [
      "1200 J",
      "200 J",
      "0 J",
      "2000 J",
    ],
    correctIndex: 3,
    explanation:
      "The pulling force is parallel to the 10 m path, so cos(theta) = 1 and W = 200 x 10 = 2000 J; the 6 m vertical height is irrelevant here because the force never acts along the height.",
    evidence:
      "A force applied parallel to an incline does work equal to the force multiplied by the distance along the surface.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-3.1",
    concept: "work along incline",
  },
  {
    key: "work-rectangular-graph-area",
    text: "A force-displacement graph is a horizontal line at 90 N running from 0 m to 7 m on the displacement axis. What work does the area under this graph represent?",
    options: [
      "315 J",
      "630 J",
      "1260 J",
      "90 J",
    ],
    correctIndex: 1,
    explanation:
      "The area under a force-displacement graph is the work, and here the region is a rectangle of height 90 N and base 7 m, so the area is 90 x 7 = 630 J.",
    evidence:
      "The area under a force-displacement graph equals the work done by the force.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-3.1",
    concept: "graph area work",
  },
  {
    key: "work-kilojoule-to-joule",
    text: "The work done in dragging a heavy suitcase is reported as 2.5 kJ. What is this same work expressed in joules?",
    options: [
      "250000 J",
      "25 J",
      "2500 J",
      "2.5 J",
    ],
    correctIndex: 2,
    explanation:
      "The prefix kilo means one thousand, so 2.5 kJ = 2.5 x 1000 J = 2500 J.",
    evidence:
      "Work stated in kilojoules is converted to joules by multiplying by 1000.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-3.1",
    concept: "kilojoule conversion",
  },
  {
    key: "work-dimensional-formula",
    text: "Work is measured in newton metres. In terms of the base quantities mass M, length L and time T, which dimensional formula does work carry?",
    options: [
      "M L^2 T^-2",
      "M L T^-2",
      "M L^2 T^-1",
      "L^2 T^-2",
    ],
    correctIndex: 0,
    explanation:
      "A newton is M L T^-2 and multiplying it by the metre of displacement adds a further power of length, so work has the dimensions M L^2 T^-2, the same as energy.",
    evidence:
      "The dimensions of work are mass times length squared divided by time squared, M L^2 T^-2.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-3.1",
    concept: "dimensions of work",
  },
  {
    key: "work-statement-pair-one-three",
    text: "The following claims are made about work: I. Work is a scalar quantity. II. The SI unit of work is the newton. III. Work done by a force is zero when that force is perpendicular to the displacement. Which combination of the above claims is correct?",
    options: [
      "Only claim III is correct",
      "Claims I and II are correct",
      "Claims II and III are correct",
      "Claims I and III are correct",
    ],
    correctIndex: 3,
    explanation:
      "Work is a scalar and it vanishes when cos(theta) = 0, so claims I and III hold, whereas claim II fails because the SI unit of work is the joule and not the newton, which is the unit of force alone.",
    evidence:
      "Work is a scalar measured in joules and is zero when the force is perpendicular to the displacement.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "properties of work",
  },
  {
    key: "work-path-independence-constant-force",
    text: "A steady force of 60 N carries a body from a point P to a point Q. On the first journey the body follows a straight 4 m path along the force, and on the second it follows a longer curved path whose net displacement is again 4 m along the force. How do the two works compare?",
    options: [
      "The curved path gives more work, because the force acts over the longer distance",
      "They are equal, because each journey has the same displacement along the force",
      "They are equal, because the force itself is unchanged between the journeys",
      "They are equal, because the closed force does no work over either route",
    ],
    correctIndex: 1,
    explanation:
      "For a constant force the work is set by the component of the displacement along the force, and both journeys have the same 4 m of it, so W = 60 x 4 = 240 J is done on each even though the curved route is longer.",
    evidence:
      "The work of a constant force depends only on the displacement between the two points and not on the path followed.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-3.1",
    concept: "path independence of work",
  },
  {
    key: "work-constant-versus-rising-force",
    text: "Two force-displacement graphs cover the same displacement. On graph A the force is constant, while on graph B the force rises steadily from zero up to the same value. How does the work shown by the two graphs compare?",
    options: [
      "Both graphs show the same work",
      "Graph B shows twice the work of graph A",
      "Graph A shows twice the work of graph B",
      "The two graphs can be compared only after the forces are multiplied by the time",
    ],
    correctIndex: 2,
    explanation:
      "Graph A encloses a full rectangle of base d and height F, that is F x d, while graph B encloses a triangle over the same base and height with only half that area, 1/2 F x d, so the constant force shows twice the work of the rising force.",
    evidence:
      "The area under a force-displacement graph, rectangular or triangular, equals the work done.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-3.1",
    concept: "graph area comparison",
  },
  {
    key: "work-conveyor-constant-speed",
    text: "A box is carried at steady speed along a horizontal path by a moving conveyor belt, and the contact force of the belt on the box stays vertical, exactly balancing its weight. What is the work done by the belt on the box during this motion?",
    options: [
      "Zero, because the vertical force of the belt is perpendicular to the horizontal motion",
      "Positive, because the box is carried through a finite distance",
      "It equals the weight of the box multiplied by the distance travelled",
      "It equals half the weight of the box multiplied by the distance travelled",
    ],
    correctIndex: 0,
    explanation:
      "The belt only presses vertically while the box slides horizontally, so the angle between the belt force and the displacement is 90 degrees, cos(theta) = 0 and the belt does no work at all however long the belt runs.",
    evidence:
      "A force perpendicular to the displacement does no work.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "conveyor belt work",
  },
  {
    key: "work-push-balanced-by-friction",
    text: "A block creeps along a rough horizontal floor at steady speed because the push applied to it exactly balances the friction of the floor. Over the journey how do the works of the push and of the friction compare?",
    options: [
      "They are equal in magnitude and opposite in sign",
      "They are equal in magnitude and have the same sign",
      "The push does work while the friction does none",
      "The friction does work while the push does none",
    ],
    correctIndex: 0,
    explanation:
      "The push acts along the motion with cos(theta) = 1 while the equal and opposite friction has cos(theta) = -1 over the same distance, so the two works are equal in magnitude and opposite in sign, and their sum is the zero net work that a body of steady speed requires.",
    evidence:
      "The work of friction is the friction force multiplied by the distance slid and is always negative for the sliding body.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "push balanced by friction",
  },
  {
    key: "work-procedure-angled-force",
    text: "A 25 N force acts at an angle on a body that is displaced 8 m along a straight line. In which order should the calculation be carried out?",
    options: [
      "Multiply the force by the displacement, then divide by the angle, then state the result in joules",
      "Find the angle, take the component of force along the displacement, multiply it by the displacement, state the result in joules",
      "Resolve the force, convert the displacement into a time, divide the force by the time, state the result in joules",
      "Subtract the perpendicular force component from the force, multiply by the displacement, state the result in newtons",
    ],
    correctIndex: 1,
    explanation:
      "The angle fixes the component of the force along the displacement, here 25 cos(theta) N, and this component times the 8 m gives the work in newton metres, that is in joules, which is exactly the order F s cos(theta) demands.",
    evidence:
      "Work from a force acting at an angle is found from the component of the force along the displacement multiplied by the displacement.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-3.1",
    concept: "work calculation steps",
  },
  {
    key: "work-friction-statement-pair",
    text: "Consider these statements on the work of friction when a body is dragged along a rough surface: I. It depends on the distance the body slides along the direction of the friction. II. It can be found from the vertical height gained by the body. III. The work of friction on the sliding body is always negative. Which combination of the above statements is correct?",
    options: [
      "Claims I and II are correct",
      "Only claim I is correct",
      "Claims I and III are correct",
      "Claims II and III are correct",
    ],
    correctIndex: 2,
    explanation:
      "Friction acts along the surface, so its work is f x d over the distance actually slid and it always opposes the motion, giving claims I and III, whereas claim II fails because a vertical height contributes nothing to the sliding distance.",
    evidence:
      "The work done by friction equals the friction force multiplied by the distance the body slides along the surface.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "work of friction",
  },
  {
    key: "work-resultant-three-forces",
    text: "A trolley moves 10 m along a straight horizontal track. A 25 N force pushes it forward, a 15 N force resists its motion along the same line, and a 10 N force presses vertically downward on it. What is the net work done on the trolley?",
    options: [
      "100 J",
      "250 J",
      "400 J",
      "-400 J",
    ],
    correctIndex: 0,
    explanation:
      "The vertical 10 N force is perpendicular to the 10 m displacement and contributes nothing, so only the two collinear forces count, giving W = (25 - 15) x 10 = 100 J along the track.",
    evidence:
      "Only the component of a force along the displacement does work on the body.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-3.1",
    concept: "resultant net work",
  },
  {
    key: "work-incline-resultant-net",
    text: "A 60 kg block is dragged 10 m up a rough incline of 30 degrees to the horizontal by a force of 800 N applied parallel to the surface. The kinetic friction is 200 N and g = 10 m s^-2. What is the net work done on the block?",
    options: [
      "5000 J",
      "1000 J",
      "-3000 J",
      "3000 J",
    ],
    correctIndex: 3,
    explanation:
      "Along the incline the pull, the friction and the component of the weight all act over the 10 m path, so W = 800 x 10 - 200 x 10 - 60 x 10 x 5 = 8000 - 2000 - 3000 = 3000 J, the rise being 10 sin 30 degrees = 5 m.",
    evidence:
      "The work done against gravity in raising a body through a height h is m g h, while friction does negative work over the distance slid.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-3.1",
    concept: "incline net work",
  },
  {
    key: "work-procedure-raising-load",
    text: "In which order should the work done in raising a load be calculated when only its mass and the vertical height of the lift are known?",
    options: [
      "Divide the mass by the height, multiply the result by 9.8, state the answer in newtons",
      "Multiply the mass by g to get the weight, multiply the weight by the vertical rise, state the answer in joules",
      "Multiply the height by g, multiply that by the time of lifting, state the answer in watts",
      "Add the mass to the height, multiply the result by 9.8, state the answer in joules",
    ],
    correctIndex: 1,
    explanation:
      "The first step gives the weight to be overcome, mg, and multiplying that force by the vertical rise through which it acts gives m g h in newton metres, which is the work done in joules.",
    evidence:
      "The work done in raising a body of mass m through a height h is m g h.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-3.1",
    concept: "lifting work steps",
  },
  {
    key: "work-constant-force-statement-pair",
    text: "Three claims are made about the work done by a single constant force: I. It depends on the path followed between the two end points. II. It is zero when the force is perpendicular to the displacement. III. It is a vector quantity. Which combination of the above claims is correct?",
    options: [
      "Claims I and II are correct",
      "Claims II and III are correct",
      "Only claim II is correct",
      "Claims I and III are correct",
    ],
    correctIndex: 2,
    explanation:
      "Claim I is false because a constant force does the same work on every path joining two given points, and claim III is false because work is a scalar, leaving claim II, the perpendicular case with cos(theta) = 0, as the only correct statement.",
    evidence:
      "The work of a constant force is a scalar that is zero when the force is perpendicular to the displacement.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-3.1",
    concept: "constant force work",
  },
  {
    key: "work-closed-path-friction",
    text: "A steady horizontal push of constant magnitude acts on a trolley while a constant frictional force opposes its motion all the way round a closed path. How does the work done on the trolley over the complete trip compare with zero?",
    options: [
      "It is negative, because the constant force does no work over a closed path while friction does work over the distance slid",
      "It is zero, because the trolley comes back to its starting point",
      "It is positive, because the push acts through the whole length of the path",
      "It cannot be settled without knowing the shape of the closed path",
    ],
    correctIndex: 0,
    explanation:
      "The push is a constant force, so over a closed path it works out at force multiplied by the zero net displacement, that is 0 J, while friction acts against the distance travelled and does negative work of f x d, so the net work is negative rather than zero.",
    evidence:
      "A constant force does no work over a closed path because the net displacement is zero, whereas friction does work over the distance travelled.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-3.1",
    concept: "closed path work",
  },
];