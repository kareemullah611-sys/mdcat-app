import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "drag-defining-resistive-force",
    text: "A fluid flowing past a solid body sets up a resistive force on that body. This force, called viscous drag,",
    options: [
      "acts opposite to the relative motion of the body and the fluid",
      "acts along the direction of motion and drives the body forward",
      "grows as the body is pushed more slowly through the fluid",
      "is fixed by the mass of the body alone and not by the fluid",
    ],
    correctIndex: 0,
    explanation:
      "A fluid resists the sliding of a body through it, so the drag is set up opposite to the relative motion, and a driving force must be supplied for the body to keep moving at constant speed.",
    evidence:
      "Viscous drag is the resistive force exerted by a fluid on a body moving through it and acts opposite to the relative motion.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "PHY-5.2",
    concept: "definition of viscous drag",
  },
  {
    key: "drag-opposes-relative-motion",
    text: "For a body moving steadily through a fluid with no other force applied along the line of motion, the drag acting on it points",
    options: [
      "forward, because the fluid is pushed aside by the leading face",
      "backward, along the direction opposite to its motion",
      "sideways at right angles to the motion",
      "upward only, because the weight of the body is irrelevant",
    ],
    correctIndex: 1,
    explanation:
      "The fluid pushes back on a body that is pushed through it, so the drag acts backward along the line of motion and has to be balanced by a driving force to keep the speed constant.",
    evidence:
      "The viscous drag exerted by a fluid on a moving body always opposes the direction of the body's motion through the fluid.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "PHY-5.2",
    concept: "direction of drag",
  },
  {
    key: "drag-streamlined-speed-growth",
    text: "As the speed of a streamlined body moving through a fluid is increased, the viscous drag on that body",
    options: [
      "decreases, because the smooth shape lets the fluid slip past",
      "stays constant, being fixed only by the size and shape of the body",
      "increases steadily with the speed, so a greater driving force is needed",
      "first increases and then vanishes once the body is fully streamlined",
    ],
    correctIndex: 2,
    explanation:
      "Streamlining lowers the resistance offered to a body of given size but does not remove it, and the drag still builds up steadily as the speed rises, which is why more power is needed at higher speed.",
    evidence:
      "The drag on a moving body increases with its speed, and a streamlined body experiences less drag than a bluff body of the same size.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-5.2",
    concept: "streamlined drag growth",
  },
  {
    key: "drag-bluff-square-law",
    text: "At ordinary speeds a bluff shaped body, such as a flat plate held broadside to the flow, experiences a drag that varies with speed as",
    options: [
      "the inverse of the speed",
      "the square root of the speed",
      "the first power of the speed",
      "the square of the speed",
    ],
    correctIndex: 3,
    explanation:
      "A bluff body must push a large cushion of fluid aside, so its resistance climbs steeply and goes roughly as the square of the speed over the ordinary range of speeds.",
    evidence:
      "For a bluff shaped body the drag at ordinary speeds is approximately proportional to the square of its speed.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "PHY-5.2",
    concept: "bluff body square law",
  },
  {
    key: "drag-viscosity-internal-friction",
    text: "The viscosity of a fluid is best thought of as",
    options: [
      "its internal friction, which resists one layer of fluid sliding past another",
      "its density, which fixes how much fluid a body must displace",
      "its surface tension, which holds the free surface together",
      "its compressibility, which fixes its behaviour under pressure",
    ],
    correctIndex: 0,
    explanation:
      "Viscosity is the internal friction of a fluid, and it is this property that resists the shearing of one layer past another, and so produces the drag on a body moving through the fluid.",
    evidence:
      "Viscosity is the internal friction of a fluid, and it resists the relative sliding of neighbouring layers of the flowing fluid.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-5.2",
    concept: "viscosity as internal friction",
  },
  {
    key: "drag-cold-warm-viscosity",
    text: "The same liquid at a low temperature, compared with the same liquid at a high temperature",
    options: [
      "has a lower viscosity and so offers less resistance to a moving body",
      "has a higher viscosity and so offers more resistance to a moving body",
      "keeps the same viscosity, since viscosity never changes with temperature",
      "changes from a liquid into a gas as the temperature falls",
    ],
    correctIndex: 1,
    explanation:
      "A liquid becomes more viscous as it is cooled, so in cold weather the internal friction between its layers is greater and a body moving through it meets more drag.",
    evidence:
      "The viscosity of a liquid decreases with a rise in temperature and increases as the liquid cools.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-5.2",
    concept: "temperature effect on viscosity",
  },
  {
    key: "drag-streamlining-terminal-speed",
    text: "Streamlining the nose and the tail of a body that moves steadily through a fluid",
    options: [
      "raises its terminal speed, because streamlining reduces the mass of the body",
      "lowers its terminal speed, because a smooth body meets thicker fluid",
      "raises its terminal speed, because the smaller drag balances the weight at a higher speed",
      "lowers its terminal speed, because a pointed nose adds new drag",
    ],
    correctIndex: 2,
    explanation:
      "A streamlined shape lets the fluid close in smoothly behind the body, so less drag opposes the motion, a weaker driving force suffices, and the body settles at a higher limiting speed.",
    evidence:
      "A streamlined body experiences less fluid resistance than a bluff body of the same size and can therefore reach a higher terminal speed.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-5.2",
    concept: "streamlining and terminal speed",
  },
  {
    key: "drag-stokes-law-statement",
    text: "According to Stokes' law, the viscous drag on a small sphere creeping slowly through a viscous fluid is proportional to",
    options: [
      "the mass of the sphere and the time for which it has fallen",
      "the square root of the radius and the square of the speed",
      "the density of the fluid alone and not to its viscosity",
      "the radius of the sphere, the speed of the sphere and the coefficient of viscosity",
    ],
    correctIndex: 3,
    explanation:
      "Stokes' law gives F = 6 pi eta r v for a sphere moving slowly through a viscous fluid, so the drag grows with the radius, with the speed of the sphere and with the coefficient of viscosity.",
    evidence:
      "Stokes' law states that the viscous drag on a small sphere moving slowly through a fluid is proportional to eta r v.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-5.2",
    concept: "stokes law statement",
  },
  {
    key: "drag-same-mass-different-shape",
    text: "Two solid bodies of equal mass are dropped in air, one a compact ball and the other a flat plate of the same weight. The plate, being the bluff body,",
    options: [
      "meets the larger drag and so falls at the smaller terminal speed",
      "meets the smaller drag and so falls at the larger terminal speed",
      "meets the larger drag and so falls at the larger terminal speed",
      "meets the same drag as the ball, because their masses are equal",
    ],
    correctIndex: 0,
    explanation:
      "Equal mass fixes the weight to be balanced but not the resistance, and because the broad plate has to set aside a much larger cushion of air it meets more drag and reaches a lower terminal speed.",
    evidence:
      "Fluid resistance depends on the shape of a body as well as on its size, so bodies of equal mass can meet different drag.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-5.2",
    concept: "shape effect on drag",
  },
  {
    key: "drag-air-water-viscosity",
    text: "Two identical small spheres are released, one in air and the other in water, and each is allowed to settle at its terminal speed. Compared with the sphere in air, the sphere in water",
    options: [
      "settles at the same terminal speed, because the two radii are equal",
      "settles at a much smaller terminal speed, because water is the more viscous fluid",
      "settles at a much larger terminal speed, because water is the denser fluid",
      "never settles at any terminal speed, because water offers no resistance",
    ],
    correctIndex: 1,
    explanation:
      "A small sphere falling through a viscous fluid reaches a terminal speed that varies inversely with the viscosity of the fluid, so the much greater viscosity of water holds it back to a far smaller speed.",
    evidence:
      "A small sphere falling through a viscous fluid reaches a terminal speed that varies inversely with the coefficient of viscosity of the fluid.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-5.2",
    concept: "air and water viscosity",
  },
  {
    key: "drag-relative-motion-stream",
    text: "A body drifting down a river meets far less resistance when it is carried along with the current than when it is pushed through the water against the current. This behaviour shows that",
    options: [
      "the drag on a body depends on the relative motion of the body and the fluid",
      "the drag vanishes completely whenever a current is present",
      "the drag grows larger the closer the body is kept to the bank",
      "the drag is decided by the volume of the body alone",
    ],
    correctIndex: 2,
    explanation:
      "Drag arises because fluid has to slide past the body, so it is the relative motion that matters; drifting with the stream leaves little fluid sliding past the body and hence little drag.",
    evidence:
      "The drag exerted by a fluid depends on the relative motion between the fluid and the body moving through it.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-5.2",
    concept: "relative motion and drag",
  },
  {
    key: "drag-longer-body-length",
    text: "Of two bodies built from the same material with the same mass and the same cross-section, the one that is longer in the direction of motion",
    options: [
      "meets less drag, because the fluid has more time to close in",
      "meets exactly the same drag, because the cross-section is unchanged",
      "meets less drag, because its greater length makes it more streamlined",
      "meets more drag, because the fluid is disturbed over a greater length",
    ],
    correctIndex: 3,
    explanation:
      "The resistance comes from the fluid that must be set aside and swirled round the body, and a body of greater length has to move fluid over a longer distance, so it meets more drag.",
    evidence:
      "A longer body moving through a fluid has to displace fluid along a greater length and so experiences a larger viscous drag.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "PHY-5.2",
    concept: "effect of body length",
  },
  {
    key: "drag-air-resistance-distinction",
    text: "Two claims are examined: the engine of a moving car supplies a driving force, and the resistive force offered by the air is called air resistance. Taking both claims together, we find that",
    options: [
      "air resistance is a case of viscous drag, directed against the motion of the car through the air",
      "air resistance pushes the car forward and helps it to build up speed",
      "air resistance stays unchanged however fast the car travels",
      "the driving force always overcomes air resistance at low speed",
    ],
    correctIndex: 0,
    explanation:
      "Air is a fluid, so the resistance it offers is a viscous drag whose sense is fixed by the relative motion of car and air, and at the top speed that drag balances the driving force.",
    evidence:
      "The resistance offered by the air to a moving vehicle is a viscous drag acting opposite to the motion of the vehicle through the air.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-5.2",
    concept: "air resistance as drag",
  },
  {
    key: "drag-pressure-difference-streamlining",
    text: "A bluff body travelling through air has the pressure in front of it raised well above the pressure in the region behind it. Streamlining cuts down the drag chiefly because it",
    options: [
      "lowers the pressure in front and raises the pressure behind",
      "reduces this front to rear pressure difference and the drag it produces",
      "raises the pressure in front to exactly match the pressure behind",
      "keeps the pressure difference but makes the body lighter",
    ],
    correctIndex: 1,
    explanation:
      "Most of the drag on a bluff body comes from the pressure difference between the stagnation region at the front and the low pressure in the wake behind, and streamlining lets the pressure recover, shrinking that difference and the drag with it.",
    evidence:
      "A streamlined body reduces the pressure difference between its front and rear regions and with it the drag exerted by the fluid.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 86,
    outcome: "PHY-5.2",
    concept: "pressure difference and drag",
  },
  {
    key: "drag-stokes-numerical-force",
    text: "A small sphere of radius 1 cm moves with speed 0.2 m s^-1 through a liquid of coefficient of viscosity 0.5 Pa s. The viscous drag on the sphere is about",
    options: [
      "3.1 x 10^-3 N",
      "3.8 x 10^-3 N",
      "1.9 x 10^-2 N",
      "1.9 N",
    ],
    correctIndex: 2,
    explanation:
      "Stokes' law gives F = 6 pi eta r v = 6 x 3.14 x 0.5 x 0.01 x 0.2 = 1.9 x 10^-2 N, since the product eta r v is 10^-3 and multiplying it by 6 pi gives 1.9 x 10^-2.",
    evidence:
      "For a small sphere creeping through a viscous fluid Stokes' law gives the drag as F = 6 pi eta r v.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-5.2",
    concept: "stokes drag calculation",
  },
  {
    key: "drag-stokes-radius-speed-scaling",
    text: "Two small spheres creep through the same viscous fluid under Stokes' law. The radius of the second sphere is double that of the first and it moves at three times the speed. The drag on the second sphere is",
    options: [
      "twice the drag on the first sphere",
      "three times the drag on the first sphere",
      "twelve times the drag on the first sphere",
      "six times the drag on the first sphere",
    ],
    correctIndex: 3,
    explanation:
      "Under Stokes' law F = 6 pi eta r v, so doubling the radius doubles the drag and trebling the speed trebles it, giving an overall factor of 2 x 3 = 6, twice the original drag.",
    evidence:
      "Under Stokes' law the viscous drag on a small sphere is proportional to its radius and to its speed in the fluid.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-5.2",
    concept: "stokes radius scaling",
  },
  {
    key: "drag-stokes-halved-radius-viscosity",
    text: "By what factor does the Stokes drag on a small sphere change if its radius is halved while its speed and the viscosity of the fluid stay the same?",
    options: [
      "It is halved",
      "It is quartered",
      "It is doubled",
      "It is unchanged",
    ],
    correctIndex: 0,
    explanation:
      "Stokes' law is linear in the radius, F = 6 pi eta r v, so halving the radius halves the drag, even though the terminal speed of the sphere, which depends on r^2, would be cut to a quarter.",
    evidence:
      "Under Stokes' law the viscous drag on a small sphere is directly proportional to the radius of the sphere.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-5.2",
    concept: "stokes scaling with radius",
  },
  {
    key: "drag-square-law-speed-increase",
    text: "For a bluff shaped body at ordinary speeds the drag varies as the square of the speed. If such a body speeds up from 20 m s^-1 to 30 m s^-1, its drag becomes a factor of",
    options: ["1.5", "2.25", "3.0", "2.0"],
    correctIndex: 1,
    explanation:
      "With the drag proportional to v^2 the factor is (30/20)^2 = 1.5 x 1.5 = 2.25, so the drag rises to two and a quarter times its earlier value instead of growing in direct proportion to the speed.",
    evidence:
      "The drag on a bluff body at ordinary speeds is proportional to the square of its speed, so a speed raised by one and a half times raises the drag by two and a quarter times.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-5.2",
    concept: "square law speed change",
  },
  {
    key: "drag-streamlined-match-bluff-speed",
    text: "A bluff shaped car meets a drag of 100 N at 20 m s^-1, while a streamlined body of the same frontal area meets 55 N at that speed. At what speed would the streamlined body meet a drag equal to 100 N?",
    options: ["18 m s^-1", "33 m s^-1", "27 m s^-1", "36 m s^-1"],
    correctIndex: 2,
    explanation:
      "Since the drag goes as v^2, the condition 100 = 55 (v/20)^2 gives v = 20 x 1.348 = 26.97 m s^-1, about 27 m s^-1, and at 27 m s^-1 the drag is 55 x 1.82 = 100 N as required.",
    evidence:
      "Because the drag varies as the square of the speed, a streamlined body that meets less drag at one speed must be driven faster to meet the same drag as a bluff body.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-5.2",
    concept: "speed for equal drag",
  },
  {
    key: "drag-stokes-terminal-speed-scaling",
    text: "In the creeping-flow range the terminal speed of a small sphere in a liquid varies as r^2 divided by eta, where r is the sphere radius and eta the coefficient of viscosity. A sphere of doubled radius is placed in a liquid of doubled viscosity. Its terminal speed becomes",
    options: ["halved", "unchanged", "four times the original", "twice the original"],
    correctIndex: 3,
    explanation:
      "Doubling the radius multiplies r^2 by four while doubling the viscosity divides by two, so the ratio is 4/2 = 2 and the new terminal speed is twice the original one.",
    evidence:
      "The terminal speed of a small sphere in a viscous fluid varies directly as the square of its radius and inversely as the coefficient of viscosity.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 87,
    outcome: "PHY-5.2",
    concept: "stokes terminal speed",
  },
  {
    key: "drag-speed-growth-sequence",
    text: "As a bluff shaped body is speeded up through a fluid, the sequence of effects that follows is",
    options: [
      "drag grows with the square of the speed, the driving force must grow, and the resistance finally equals the driving force",
      "drag falls to zero, the driving force is cut off, and the body coasts on",
      "the pressure difference vanishes, the drag vanishes, and the speed grows without limit",
      "the body turns streamlined of its own accord and its drag disappears",
    ],
    correctIndex: 0,
    explanation:
      "Drag on a bluff body climbs steeply with speed, so a greater driving force is needed to hold each higher speed, and the process ends when the resistance matches the driving force and the body settles at its limiting speed.",
    evidence:
      "The drag on a moving body increases with speed until it balances the driving force, which fixes the limiting speed of the body.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-5.2",
    concept: "drag growth sequence",
  },
  {
    key: "drag-viscosity-cold-weather-statement",
    text: "Consider the two statements: the viscosity of a liquid rises as the liquid cools, and the drag on a body moving through that liquid increases with the viscosity of the liquid. It follows that",
    options: [
      "a body meets less resistance on a cold winter day than on a warm day",
      "a body meets more resistance on a cold winter day than on a warm day",
      "the resistance is the same in summer and in winter alike",
      "the resistance is decided by the temperature of the body alone",
    ],
    correctIndex: 1,
    explanation:
      "Cold liquid is more viscous and a larger viscosity means greater internal friction between the fluid layers, so the same body suffers a bigger drag in cold weather than in warm weather.",
    evidence:
      "The viscosity of a liquid increases as it cools, and a larger viscosity means a larger viscous drag on a body moving through the liquid.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-5.2",
    concept: "viscosity and cold weather",
  },
  {
    key: "drag-stokes-validity-statement",
    text: "Two statements about Stokes' law are considered: it applies to a small sphere creeping slowly through a viscous fluid, and the creeping condition is spoiled by a large sphere, a thin fluid or a fast body. Accepting both statements, one may conclude that",
    options: [
      "the law fits a large ball moving quickly through a thin liquid",
      "the law fits a small ball moving quickly through a thin liquid",
      "the law fits a small ball moving slowly through a viscous liquid",
      "the law fits a large ball moving slowly through a viscous liquid",
    ],
    correctIndex: 2,
    explanation:
      "The creeping condition calls for a small sphere, a high viscosity and a low speed, and only under those conditions does the flow round the sphere stay slow enough for the formula to hold, so a small ball creeping slowly through a viscous liquid is the best case.",
    evidence:
      "Stokes' law applies to a small sphere moving with low speed through a fluid of high viscosity, where the flow stays in the creeping-flow range.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 85,
    outcome: "PHY-5.2",
    concept: "limits of stokes law",
  },
  {
    key: "drag-stokes-force-comparison-calc",
    text: "A sphere of radius 2 mm in a liquid of viscosity 0.1 Pa s experiences a drag of 1.9 x 10^-3 N at a speed of 0.5 m s^-1. Another sphere of radius 1 mm moves in the same liquid at 2 m s^-1. The drag on the second sphere is",
    options: ["9.5 x 10^-4 N", "1.9 x 10^-3 N", "7.5 x 10^-3 N", "3.8 x 10^-3 N"],
    correctIndex: 3,
    explanation:
      "Applying F = 6 pi eta r v to the second sphere gives 6 x 3.14 x 0.1 x 0.001 x 2 = 3.8 x 10^-3 N, which is twice the first value because the fourfold greater speed more than offsets the halved radius.",
    evidence:
      "Stokes' law, F = 6 pi eta r v, gives the viscous drag on a small sphere from its radius, its speed and the viscosity of the fluid.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 87,
    outcome: "PHY-5.2",
    concept: "stokes drag comparison",
  },
  {
    key: "drag-top-speed-sequence",
    text: "As a streamlined vehicle is pushed harder and harder up to its top speed, the sequence of events is",
    options: [
      "the driving force grows, the drag grows with the speed, and at the top speed the two are equal",
      "the drag falls to zero, the top speed is passed, and the speed grows without limit",
      "the weight rises, the drag falls, and the vehicle stops accelerating",
      "the drag matches the weight at the start, so the vehicle never moves",
    ],
    correctIndex: 0,
    explanation:
      "Pushing harder raises the driving force and with it the speed, but the drag on the streamlined body grows as that speed rises, so the acceleration keeps shrinking until the drag equals the driving force and the speed settles at the top value.",
    evidence:
      "A vehicle reaches its top speed when the growing driving force is balanced by the drag, which increases as the speed increases.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-5.2",
    concept: "top speed sequence",
  },
];
