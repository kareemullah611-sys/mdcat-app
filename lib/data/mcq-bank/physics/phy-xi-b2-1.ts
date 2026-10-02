import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "graph-displacement-time-slope-velocity",
    text: "When displacement is plotted against time, the gradient of the curve at any instant gives",
    options: [
      "the acceleration of the body",
      "the instantaneous velocity of the body",
      "the distance travelled by the body",
      "the average speed of the body",
    ],
    correctIndex: 1,
    explanation:
      "Gradient on a displacement-time graph is change of displacement divided by change of time, which is the definition of velocity; acceleration comes instead from the gradient of a velocity-time graph.",
    evidence:
      "Velocity is the rate of change of displacement with respect to time, so it is given by the gradient of a displacement-time graph.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-2.3",
    concept: "displacement-time gradient",
  },
  {
    key: "graph-velocity-time-area-displacement",
    text: "The area lying under a velocity-time graph between two chosen times is numerically equal to",
    options: [
      "the displacement covered in that interval",
      "the distance travelled in that interval",
      "the acceleration reached in that interval",
      "the average speed of the body",
    ],
    correctIndex: 0,
    explanation:
      "The area under the curve is the sum of velocity multiplied by time over small intervals, which is the displacement; distance needs the magnitude of each velocity, so the two agree only while the velocity keeps one sign.",
    evidence:
      "The displacement in a given time interval equals the area under the velocity-time graph over that interval.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-2.3",
    concept: "area under v-t curve",
  },
  {
    key: "graph-horizontal-line-zero-acceleration",
    text: "A velocity-time graph is drawn as a horizontal straight line above the time axis. This shows that the body",
    options: [
      "moves with steadily increasing speed",
      "moves with a velocity that grows with time",
      "has an acceleration because the line sits at a height",
      "moves with constant velocity and zero acceleration",
    ],
    correctIndex: 3,
    explanation:
      "A horizontal line means the velocity has the same value at every instant, so its rate of change, and therefore the acceleration, is zero for the whole interval.",
    evidence:
      "Acceleration is the rate of change of velocity, so a horizontal velocity-time graph indicates zero acceleration.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "constant velocity graph",
  },
  {
    key: "graph-vertical-line-infinite-velocity",
    text: "A displacement-time graph drawn as a vertical straight line would mean that the body",
    options: [
      "is moving with a very large but finite speed",
      "has zero displacement in a very short time",
      "is at rest because the line carries no gradient",
      "covers a finite displacement in zero time, which no body can do",
    ],
    correctIndex: 3,
    explanation:
      "A vertical line has an infinite gradient, so reading it as velocity would demand an infinite speed; since no body covers a finite displacement in zero time, such a line cannot represent real motion.",
    evidence:
      "A displacement-time graph can never be vertical, because an infinite slope would imply an infinite velocity.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.3",
    concept: "vertical line impossibility",
  },
  {
    key: "graph-straight-line-gradient-calculation",
    text: "The straight line on a displacement-time graph rises 30 m in the 5 s from t = 0 s to t = 5 s. The velocity of the body is",
    options: ["5 m s^-1", "6 m s^-1", "150 m s^-1", "25 m s^-1"],
    correctIndex: 1,
    explanation:
      "A straight line has a constant gradient, and here that gradient is 30 m divided by 5 s, giving 6 m s^-1; multiplying the two numbers instead would mix the units of distance and time.",
    evidence:
      "A constant velocity appears as a straight line on a displacement-time graph, with its value equal to the gradient of the line.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.3",
    concept: "constant gradient calculation",
  },
  {
    key: "graph-gradient-sequence-three-stages",
    text: "A car first accelerates away from rest, then keeps a steady speed, and finally brakes to a stop, and its whole journey is drawn on a displacement-time graph. The gradients of the three parts of the curve, taken in order, are",
    options: [
      "positive and growing, then constant and positive, then positive but shrinking",
      "zero, then positive, then zero",
      "positive but shrinking, then zero, then negative",
      "negative, then zero, then positive",
    ],
    correctIndex: 0,
    explanation:
      "Speeding up from rest steepens the curve so the positive gradient grows, holding a steady speed leaves the gradient unchanged, and braking reduces it again while it is still positive, because the car is still moving forwards.",
    evidence:
      "The gradient of a displacement-time graph is the velocity, so speeding up steepens the curve and braking flattens it.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "gradient sequence motion",
  },
  {
    key: "graph-negative-gradient-direction",
    text: "Two bodies are traced on one displacement-time graph, one by a line sloping gently upwards and the other by a line sloping steeply downwards. The body drawn with the steeply downward line is",
    options: [
      "at rest for the whole interval",
      "travelling in the positive direction, since its graph falls on the paper",
      "travelling in the negative direction, since its gradient and hence its velocity is negative",
      "decelerating steadily, since its gradient becomes more negative as time passes",
    ],
    correctIndex: 2,
    explanation:
      "A downward line means the displacement decreases as time passes, so the gradient and therefore the velocity is negative, which places the motion in the negative direction; the line is straight, so the gradient is not changing and the acceleration is zero.",
    evidence:
      "A negative gradient on a displacement-time graph indicates motion in the negative direction.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "negative gradient direction",
  },
  {
    key: "graph-concave-down-deceleration",
    text: "The curve drawn for a car on a displacement-time graph rises but becomes progressively flatter, and it is still rising at the end of the journey. This shape shows that the car is",
    options: [
      "moving backwards throughout",
      "moving at a constant but unknown speed",
      "at rest for the whole time shown",
      "still moving forwards but slowing down",
    ],
    correctIndex: 3,
    explanation:
      "The curve is concave down, so its gradient, which is the velocity, stays positive but steadily falls, and a falling positive gradient means the body continues forwards while decelerating.",
    evidence:
      "A displacement-time curve that flattens while still rising shows a positive velocity that is decreasing.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "concave down deceleration",
  },
  {
    key: "graph-chord-versus-tangent",
    text: "On a curved displacement-time graph, how does the average velocity over an interval compare with the instantaneous velocity at the midpoint of the same interval?",
    options: [
      "The average velocity is the gradient of the chord joining the two endpoints, while the instantaneous velocity is the gradient of the tangent at that point",
      "The average velocity equals the gradient of the tangent, because a smooth curve is locally straight",
      "The average velocity is always the smaller value, because a chord always lies below the tangent",
      "The two are equal for every curve, since a gradient does not depend on where it is measured",
    ],
    correctIndex: 0,
    explanation:
      "Average velocity is change of displacement divided by change of time taken between the endpoints, which is the chord gradient, whereas the velocity at one instant comes from the tangent at that point.",
    evidence:
      "Instantaneous velocity is the gradient of the tangent to a displacement-time curve and average velocity is the gradient of its chord.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.3",
    concept: "chord versus tangent",
  },
  {
    key: "graph-rectangle-area-displacement",
    text: "A velocity-time graph shows a horizontal line at 8 m s^-1 from t = 0 s to t = 6 s. The displacement covered during these 6 s is",
    options: ["8 m", "14 m", "48 m", "24 m"],
    correctIndex: 2,
    explanation:
      "The area under the line is the rectangle formed by the velocity and the time, so the displacement is 8 m s^-1 multiplied by 6 s, which is 48 m.",
    evidence:
      "For motion at constant velocity the displacement equals the velocity multiplied by the time, which is the rectangular area under a velocity-time graph.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.3",
    concept: "rectangle area calculation",
  },
  {
    key: "graph-distance-versus-displacement",
    text: "A velocity-time graph has a region above the time axis from 0 s to 5 s and a region of equal area below the axis from 5 s to 10 s. Over these 10 s the total distance and the displacement are",
    options: [
      "equal to one another, because both are measured on the same graph",
      "in the ratio of two to one, the distance being larger since magnitudes are summed while the signed areas cancel",
      "both zero, because the regions above and below the axis cancel",
      "such that the displacement is the larger, because displacement always exceeds distance",
    ],
    correctIndex: 1,
    explanation:
      "Total distance adds the magnitudes of all the areas, giving twice the common area, while displacement adds them with their signs, so the equal and opposite regions cancel to zero.",
    evidence:
      "Total distance is the sum of the magnitudes of the areas under a velocity-time graph, while displacement is their signed sum.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "signed area comparison",
  },
  {
    key: "graph-velocity-gradient-acceleration",
    text: "The gradient measured on a velocity-time graph at a chosen instant is numerically equal to",
    options: [
      "the displacement of the body up to that instant",
      "the total distance covered before that instant",
      "the area under the graph up to that instant",
      "the acceleration of the body at that instant",
    ],
    correctIndex: 3,
    explanation:
      "Gradient here is change of velocity divided by change of time, which is exactly the definition of acceleration, while the area under the same graph would instead give the displacement.",
    evidence:
      "Acceleration is the rate of change of velocity with time, so it equals the gradient of a velocity-time graph.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.3",
    concept: "velocity graph gradient",
  },
  {
    key: "graph-falling-line-negative-acceleration",
    text: "On a velocity-time graph the line slopes steadily downwards from 20 m s^-1 towards 0 m s^-1. The body is",
    options: [
      "decelerating, because the velocity is decreasing as time passes",
      "accelerating, because the velocity stays positive throughout",
      "at rest for the whole interval, because the line never leaves the time axis",
      "moving at a constant speed, because the line is straight",
    ],
    correctIndex: 0,
    explanation:
      "Velocity falls as time passes, so its rate of change is negative; because the line is straight that negative gradient is the same at every instant, which is uniform deceleration.",
    evidence:
      "A velocity-time graph that falls with time shows a negative rate of change of velocity, that is, negative acceleration.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "negative acceleration graph",
  },
  {
    key: "graph-acceleration-area-velocity-change",
    text: "The area between an acceleration-time graph and the time axis over a given interval is equal to",
    options: [
      "the total distance covered in that interval",
      "the change in velocity over that interval",
      "the displacement in that interval",
      "the work done on the body in that interval",
    ],
    correctIndex: 1,
    explanation:
      "Adding acceleration over time measures how much the velocity has altered, so the area under an acceleration-time curve gives the change in velocity; displacement would require the area under a velocity-time graph instead.",
    evidence:
      "The change in velocity over an interval equals the area under the acceleration-time graph for that interval.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "acceleration area change",
  },
  {
    key: "graph-steeper-line-larger-acceleration",
    text: "Two velocity-time graphs are drawn from the origin, graph P reaching 20 m s^-1 in 4 s and graph Q reaching 20 m s^-1 in 10 s. Comparing the two bodies,",
    options: [
      "both have the same acceleration, because they reach the same final velocity",
      "body Q has the larger acceleration, because it takes longer to reach 20 m s^-1",
      "body P has the larger acceleration, because its line is the steeper of the two",
      "body P has the smaller acceleration, because both graphs start from rest",
    ],
    correctIndex: 2,
    explanation:
      "Acceleration is the gradient, and P gains the same velocity in half the time, so P works out at 20 divided by 4, that is 5 m s^-2, against 2 m s^-2 for Q.",
    evidence:
      "On a velocity-time graph a steeper line from the origin represents a greater acceleration for the same change in velocity.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "steepness comparison",
  },
  {
    key: "graph-return-journey-average-speed",
    text: "A student walks 60 m from the school gate to a shop and 40 m straight back to the gate, taking 20 s in all. The average speed and the average velocity of the student are",
    options: [
      "1 m s^-1 and 5 m s^-1",
      "2.5 m s^-1 and 0 m s^-1",
      "0 m s^-1 and 5 m s^-1",
      "5 m s^-1 and 1 m s^-1",
    ],
    correctIndex: 3,
    explanation:
      "The total distance is 100 m over 20 s, giving an average speed of 5 m s^-1, while the student finishes 20 m from the start so the average velocity is 1 m s^-1; the speed is the larger because the two legs of the journey partly cancel in the displacement.",
    evidence:
      "For a journey that ends at the starting point the displacement is zero while the total distance is not, so the average speed exceeds the average velocity.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "average speed versus velocity",
  },
  {
    key: "graph-velocity-position-gradient",
    text: "If the velocity of a body is plotted against its position rather than against time, then the gradient of the resulting curve represents",
    options: [
      "the acceleration divided by the speed of the body",
      "the acceleration of the body, exactly as on a velocity-time graph",
      "the displacement of the body measured from its starting point",
      "the reciprocal of the acceleration of the body",
    ],
    correctIndex: 0,
    explanation:
      "Writing acceleration as the rate of change of velocity with distance multiplied by the velocity itself, since velocity is the rate of change of position with time, shows that a velocity-position gradient is acceleration divided by velocity rather than acceleration.",
    evidence:
      "Acceleration is the rate of change of velocity with time, while a velocity-position graph measures the rate of change of velocity with distance.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-2.3",
    concept: "velocity-position gradient",
  },
  {
    key: "graph-area-sign-sequence",
    text: "One velocity-time graph shows a triangle above the time axis from 0 s to 4 s and a rectangle below the axis from 4 s to 10 s, the rectangle being the larger of the two. The correct order for finding the net displacement over the 10 s is",
    options: [
      "add the rectangle area, then subtract the triangle area, then state the result is positive",
      "add the triangle area, then add the rectangle area, then state the result is negative",
      "add the triangle area, then subtract the rectangle area, then state the result is negative",
      "subtract both areas from the time axis, then state the result is zero",
    ],
    correctIndex: 2,
    explanation:
      "Regions above the axis carry a positive sign and regions below it a negative sign, so the triangle is added, the larger rectangle beneath the axis is subtracted, and the net result is negative.",
    evidence:
      "Displacement is the signed area under a velocity-time graph, so regions below the time axis reduce the total.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-2.3",
    concept: "area sign sequence",
  },
  {
    key: "graph-triangle-area-displacement",
    text: "The velocity-time graph of a body is a straight line from 0 m s^-1 at t = 0 s to 12 m s^-1 at t = 6 s. The displacement covered in these 6 s is",
    options: ["12 m", "36 m", "18 m", "72 m"],
    correctIndex: 1,
    explanation:
      "The area is a triangle of base 6 s and height 12 m s^-1, so the displacement is half of the product of 6 and 12, which is 36 m.",
    evidence:
      "For uniform acceleration from rest the area under the velocity-time graph is a triangle of area equal to half the product of the time and the final velocity.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "triangle area calculation",
  },
  {
    key: "graph-two-curves-later-speed",
    text: "A single displacement-time graph carries two curves, curve M being a straight line that rises steadily and curve N a curve that rises steeply at first and then flattens. Late in the journey, once curve N has become almost flat, the two bodies are",
    options: [
      "at the same speed, because both curves are still rising",
      "both at rest, because the two curves have crossed",
      "such that N is the faster, because N still has the steeper gradient",
      "such that M is the faster, because its constant gradient exceeds N's shrinking gradient",
    ],
    correctIndex: 3,
    explanation:
      "Velocity is the gradient at each instant, and M keeps the same positive gradient all the way while N's gradient has collapsed towards zero, so in the later part of the journey M covers more ground in the same time.",
    evidence:
      "The velocity at any instant is the gradient of a displacement-time graph, so a flattening curve represents a falling velocity.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "slope comparison curves",
  },
  {
    key: "graph-two-levels-average-velocity",
    text: "The graph of velocity against time shows a horizontal line at 10 m s^-1 from 0 s to 2 s and a horizontal line at 5 m s^-1 from 2 s to 10 s. The average velocity over the whole 10 s is",
    options: ["5 m s^-1", "6 m s^-1", "7.5 m s^-1", "60 m"],
    correctIndex: 1,
    explanation:
      "The two rectangular areas are 10 times 2, that is 20 m, and 5 times 8, that is 40 m, so the displacement is 60 m and the average velocity over 10 s is 6 m s^-1, which is not the plain average of the two velocities because they act for unequal times.",
    evidence:
      "Average velocity is the total displacement divided by the total time taken.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "average velocity calculation",
  },
  {
    key: "graph-out-and-back-signed-area",
    text: "A car has a velocity of +10 m s^-1 for the first 30 s of a journey and then -5 m s^-1 for the next 10 s. Reading the two regions of its velocity-time graph, the total distance covered and the displacement of the car are",
    options: ["300 m and 250 m", "300 m and 350 m", "350 m and 250 m", "250 m and 300 m"],
    correctIndex: 2,
    explanation:
      "The distance sums the magnitudes of the two areas, 300 m plus 50 m giving 350 m, while the displacement subtracts the second region because that velocity is negative, leaving 250 m.",
    evidence:
      "When part of a journey is retraced the total distance exceeds the net displacement, since areas under a velocity-time graph carry the sign of the velocity.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-2.3",
    concept: "distance displacement calculation",
  },
  {
    key: "graph-statement-check-tangent-chord",
    text: "Consider a curved displacement-time graph and these statements. I. The velocity at an instant is given by the gradient of the tangent drawn at that point. II. The average velocity over an interval is given by the gradient of the chord joining the two endpoints. III. The area between the curve and the time axis gives the total distance travelled.",
    options: ["Only II and III", "Only I and II", "Only I and III", "Only I, II and III"],
    correctIndex: 1,
    explanation:
      "The tangent gives the velocity at one instant and the chord gives the average velocity over the interval, so I and II are right, while III fails because an area under a displacement-time curve has the units of displacement multiplied by time.",
    evidence:
      "Instantaneous velocity is the gradient of the tangent to a displacement-time curve and average velocity is the gradient of its chord.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "statement evaluation gradient",
  },
  {
    key: "graph-equal-triangles-zero-displacement",
    text: "A car accelerates uniformly from rest at 2 m s^-2 for 10 s and then reverses, decelerating at the same rate until it stops after a further 10 s. From the two triangular regions of its velocity-time graph, the displacement over the whole 20 s is",
    options: ["200 m", "100 m", "400 m", "0 m"],
    correctIndex: 3,
    explanation:
      "The peak velocity is 20 m s^-1, so the first triangle contributes half of 10 times 20, that is 100 m, and the second triangle lies below the axis and subtracts exactly the same 100 m, so the two regions cancel.",
    evidence:
      "Equal and opposite areas under a velocity-time graph leave a body at its starting point, since the net displacement is zero.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-2.3",
    concept: "triangular area cancellation",
  },
  {
    key: "graph-acceleration-statement-check",
    text: "Consider an acceleration-time graph and these statements. I. The area under the graph over an interval equals the change in velocity in that interval. II. A graph lying entirely below the time axis guarantees that the body is slowing down. III. A body can have zero average velocity and still cover a non-zero total distance.",
    options: ["Only I and III", "Only I and II", "Only II and III", "Only I, II and III"],
    correctIndex: 0,
    explanation:
      "Adding acceleration over time measures the change in velocity, and a body that returns to its starting point has zero displacement yet covers a non-zero distance; a negative acceleration on its own does not guarantee a fall in speed, since a body already moving in the negative direction speeds up.",
    evidence:
      "The area under an acceleration-time graph gives the change in velocity, while a journey ending where it began has zero average velocity.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-2.3",
    concept: "acceleration area statements",
  },
];
