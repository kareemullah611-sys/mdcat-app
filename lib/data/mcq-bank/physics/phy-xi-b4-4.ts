import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "bernoul-total-pressure-constant",
    text: "A steady ideal fluid flows along a streamline that first narrows and then widens again. Comparing the total pressure, that is P + 0.5 rho v^2 + rho g h, at the narrow part with the same quantity at the wide part, it is",
    options: [
      "the same at both places",
      "larger at the narrow part, where the speed is greater",
      "smaller at the wide part, where the speed is smaller",
      "zero at the narrow part, because the speed is greatest there",
    ],
    correctIndex: 0,
    explanation:
      "Bernoulli's equation makes the sum of the pressure, the kinetic energy per unit volume and the gravitational potential energy per unit volume constant along a streamline, so the gain in the kinetic term at the narrow part is exactly matched by a loss of pressure there.",
    evidence:
      "The total pressure P + 1/2 rho v^2 + rho g h stays constant along a streamline of the steady flow of an ideal fluid.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-5.8",
    concept: "constant total pressure",
  },
  {
    key: "bernoul-equation-form",
    text: "The equation that relates pressure, speed and height for the steady flow of an ideal fluid along a streamline is written as",
    options: [
      "P + 0.5 rho v^2 - rho g h = constant",
      "P + 0.5 rho v^2 + rho g h = constant",
      "P - 0.5 rho v^2 + rho g h = constant",
      "P + 0.5 rho v^2 + g h = constant",
    ],
    correctIndex: 1,
    explanation:
      "The three terms all enter with plus signs: the static pressure P, the kinetic energy per unit volume 0.5 rho v^2 and the gravitational potential energy per unit volume rho g h, and their sum has the same value at every point of the streamline.",
    evidence:
      "Bernoulli's equation for an ideal fluid is P + 1/2 rho v^2 + rho g h = constant along a streamline.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 98,
    outcome: "PHY-5.8",
    concept: "equation form",
  },
  {
    key: "bernoul-valid-ideal-flow-only",
    text: "Bernoulli's equation may be applied without any correction to a fluid that is",
    options: [
      "steady but turbulent, so long as its density does not change",
      "of steadily varying density, so long as its viscosity is negligible",
      "incompressible, non-viscous and in steady flow",
      "in steady flow through a pipe of any width, whatever its viscosity",
    ],
    correctIndex: 2,
    explanation:
      "The equation is derived for a steady flow of an incompressible and non-viscous fluid, so the density must stay constant along the flow and viscous losses must be absent; neither turbulence nor an unaccounted viscosity is allowed.",
    evidence:
      "Bernoulli's equation is valid for the steady flow of an ideal fluid, that is an incompressible and non-viscous one.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "validity conditions",
  },
  {
    key: "bernoul-speed-pressure-trade",
    text: "Two points of a horizontal streamline of a steady ideal flow carry fluid at different speeds. Comparing the pressures at these two points, the pressure is",
    options: [
      "greater at the faster point, because faster fluid carries more momentum",
      "the same at both points, because they lie on one streamline",
      "not comparable, because the equation can be used at only one point",
      "greater at the slower point, because the kinetic term is then smaller",
    ],
    correctIndex: 3,
    explanation:
      "At one height the rho g h term has the same value at both points, so the constant sum leaves P + 0.5 rho v^2 unchanged; the point of smaller speed must therefore carry the larger static pressure.",
    evidence:
      "For a horizontal streamline P + 1/2 rho v^2 is constant, so the pressure is larger where the speed is smaller.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-5.8",
    concept: "speed pressure trade",
  },
  {
    key: "bernoul-horizontal-pressure-drop",
    text: "Water (rho = 1000 kg m^-3) flows steadily through a horizontal pipe at 2 m s^-1, where the pressure is 1.0 x 10^5 Pa. At a second point of the same streamline the speed is 4 m s^-1. The pressure at the second point is",
    options: [
      "100000 Pa, because the height is unchanged",
      "106000 Pa, because the pressure rises with the speed",
      "94000 Pa, because the extra kinetic term is taken from the pressure",
      "97000 Pa, because only the kinetic term at the second point matters",
    ],
    correctIndex: 2,
    explanation:
      "At one height Bernoulli's equation gives P1 + 0.5 rho v1^2 = P2 + 0.5 rho v2^2, so P2 = 1.0 x 10^5 + 0.5 x 1000 x (2^2 - 4^2) = 1.0 x 10^5 - 6000 = 94000 Pa.",
    evidence:
      "For a horizontal streamline P + 1/2 rho v^2 is constant, so a fourfold speed increase costs the pressure 1/2 rho (v2^2 - v1^2).",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-5.8",
    concept: "horizontal pressure drop",
  },
  {
    key: "bernoul-narrowing-pressure-fall",
    text: "An ideal fluid flows steadily through a pipe that first narrows and then widens again to its original diameter. Comparing the two wide sections with the narrow section between them, the correct statement is that",
    options: [
      "the two wide sections carry the same pressure and the narrow section carries a lower pressure",
      "the two wide sections carry different pressures, because the speed differs between them",
      "the narrow section carries the highest pressure, because the fluid is slowest there",
      "all three sections carry the same pressure, because the total pressure is constant",
    ],
    correctIndex: 0,
    explanation:
      "Continuity gives the same speed in both wide sections, so their static pressures are equal, and the greater speed in the narrow part is paid for by a fall of static pressure there while the total pressure stays constant throughout.",
    evidence:
      "Where a pipe narrows the speed of the ideal fluid rises and the static pressure there falls.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "contraction pressure fall",
  },
  {
    key: "bernoul-terms-are-pressures",
    text: "The three quantities that add together in Bernoulli's equation all have the same unit, which is",
    options: [
      "the joule, because each term measures an energy",
      "the pascal, because each term is an energy per unit volume",
      "the newton, because each term measures a force",
      "the metre per second, because each term describes the motion",
    ],
    correctIndex: 1,
    explanation:
      "Half of rho v^2 works out as joules per cubic metre and rho g h as newtons per cubic metre, and one joule per cubic metre is one pascal, so every term in the equation is a pressure and the constant is a pressure too.",
    evidence:
      "Every term of Bernoulli's equation has the dimensions of pressure, so 1/2 rho v^2 and rho g h are pressures measured in pascals.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "term dimensions",
  },
  {
    key: "bernoul-venturi-pressure-difference",
    text: "A venturi meter is fitted in a pipe in order to find the rate of flow of a liquid. Its working rests on the fact that it",
    options: [
      "measures the weight of the liquid collected beneath the pipe in a known time",
      "measures the difference of temperature between the wide and the narrow section",
      "measures the mass of liquid that passes a fixed point in a given time",
      "measures the difference of pressure between the wide and the narrow section",
    ],
    correctIndex: 3,
    explanation:
      "The narrow throat of the meter raises the speed and lowers the pressure, and this measured difference of pressure between the two sections, used with the continuity equation, gives the rate of flow of the liquid.",
    evidence:
      "A venturi meter works on the difference of pressure between the wide and the narrow sections of a pipe, which with continuity gives the rate of flow.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "venturi principle",
  },
  {
    key: "bernoul-atomiser-suction",
    text: "In an atomiser, air is blown at high speed across the top of a narrow vertical tube whose lower end dips into a liquid. The liquid climbs the tube and leaves as a fine spray because",
    options: [
      "the fast-moving air drags the liquid upward through friction",
      "the tube is so narrow that the liquid is squeezed upward by its own column",
      "the fast air lowers the pressure above the liquid, so the atmosphere pushes it up",
      "the air carries the liquid upward as part of the fast stream",
    ],
    correctIndex: 2,
    explanation:
      "The air racing past the tube mouth moves faster than the nearly still air above the liquid, so the pressure there falls below atmospheric pressure and the greater atmospheric pressure on the liquid surface drives the liquid up the tube.",
    evidence:
      "In an atomiser the fast stream of air over the top of the tube reduces the pressure there, so atmospheric pressure pushes the liquid up.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "atomiser suction",
  },
  {
    key: "bernoul-reservoir-pipe-speed",
    text: "A large open reservoir of an ideal liquid feeds a pipe that descends vertically from its base. Taking g = 9.8 m s^-2, the speed of the liquid in the pipe 5.0 m below the free surface, where the surface itself is at rest, is",
    options: [
      "9.9 m s^-1",
      "7.0 m s^-1, from taking only g times the depth inside the root",
      "14.0 m s^-1, from taking four times g times the depth inside the root",
      "19.8 m s^-1, from doubling the speed given by the correct relation",
    ],
    correctIndex: 0,
    explanation:
      "The free surface is at rest at atmospheric pressure, so cancelling the two pressure terms leaves 0.5 rho v^2 = rho g h with h = 5.0 m, which gives v = sqrt(2 g h) = sqrt(2 x 9.8 x 5.0) = sqrt(98) = 9.9 m s^-1.",
    evidence:
      "Applying Bernoulli's equation between the free surface of a reservoir, which is at rest, and a point below it gives v = sqrt(2gh) for an ideal fluid.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "reservoir outflow speed",
  },
  {
    key: "bernoul-unsteady-flow-invalid",
    text: "A fluid passes through a bend whose shape is changed from moment to moment, so the speed and the pressure at every point of the bend keep varying with time. Bernoulli's simple equation cannot be used here because",
    options: [
      "the density of the fluid changes as it speeds up",
      "the flow is unsteady, so the pressure and the speed at a point vary with time",
      "the bend is curved, and the equation applies only to straight pipes",
      "the pressure of a fluid cannot be measured inside a curved pipe",
    ],
    correctIndex: 1,
    explanation:
      "The simple equation assumes steady flow, meaning that the velocity and the pressure at any fixed point do not change with time, and an unsteady flow breaks that assumption at every point of the bend.",
    evidence:
      "Bernoulli's equation applies to the steady flow of an ideal fluid, so it cannot be used where the flow pattern changes with time.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-5.8",
    concept: "steady flow requirement",
  },
  {
    key: "bernoul-two-streamlines-no-relation",
    text: "Two different streamlines of the same steady ideal flow pass through points at the same height. These claims are made. I. The two pressures must be equal because both points lie on a streamline. II. The two pressures may differ because the constant total pressure applies only along one streamline. III. The difference of the two pressures can be found by writing the equation once for each streamline. The correct set of claims is",
    options: [
      "Only I and II are correct",
      "Only II is correct",
      "Only I and III are correct",
      "Only I, II and III are correct",
    ],
    correctIndex: 1,
    explanation:
      "The equation equates the total pressure at two points of the same streamline, so it furnishes no relation at all between points lying on two separate streamlines, which makes claim II the only one that is right.",
    evidence:
      "The constant total pressure applies along a single streamline, so Bernoulli's equation gives no relation between pressures on two different streamlines.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "streamline restriction",
  },
  {
    key: "bernoul-venturi-speed-calculation",
    text: "A venturi meter carries water (rho = 1000 kg m^-3) horizontally, with a wide section of area 4.0 x 10^-4 m^2 where the pressure is 1.2 x 10^5 Pa and a narrow section of area 1.0 x 10^-4 m^2 where the pressure is 9.0 x 10^4 Pa. The speed of the water in the narrow section is",
    options: [
      "4 m s^-1, because the area is cut to one quarter",
      "2 m s^-1, because the pressure is reduced by 3.0 x 10^4 Pa",
      "8 m s^-1, because continuity and Bernoulli together give it",
      "16 m s^-1, because the area ratio is multiplied by itself",
    ],
    correctIndex: 2,
    explanation:
      "Continuity gives v1 = (1.0/4.0) v2 = v2/4, and Bernoulli for a horizontal line gives 1.2 x 10^5 - 9.0 x 10^4 = 0.5 x 1000 x (v2^2 - v2^2/16), so (15/16) v2^2 = 60, v2^2 = 64 and v2 = 8 m s^-1.",
    evidence:
      "For a horizontal venturi meter P1 - P2 = 1/2 rho (v2^2 - v1^2) together with continuity fixes the speed in the narrow section.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "venturi speed calculation",
  },
  {
    key: "bernoul-aeroplane-lift",
    text: "The wing of a flying aeroplane is shaped so that the air over its upper curved surface moves faster than the air passing beneath the wing. The aeroplane is held up mainly because",
    options: [
      "the fast air above the wing pushes it upward as the stream carries it along",
      "the pressure over the curved upper surface is lower than the pressure beneath the wing",
      "the downward-moving air below the wing increases the weight that is lifted",
      "the fast air above the wing is denser, so it weighs more on the wing",
    ],
    correctIndex: 1,
    explanation:
      "Continuity makes the air over the curved upper surface move faster and Bernoulli then gives a smaller pressure there than below the wing, so the difference of pressure between the two surfaces acts as a net upward force on the wing.",
    evidence:
      "The shape of the aeroplane wing makes the air flow faster over its upper surface, where the pressure is lower, which produces lift.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "aeroplane lift",
  },
  {
    key: "bernoul-narrowing-climb-sequence",
    text: "An ideal fluid moves steadily along a pipe that narrows and then rises to a higher level. Along the streamline from the first section to the last, in order,",
    options: [
      "the speed increases, the kinetic term increases, the height term increases and the pressure decreases",
      "the speed increases, the kinetic term increases, the height term decreases and the pressure increases",
      "the speed decreases, the kinetic term decreases, the height term increases and the pressure increases",
      "the speed increases, the kinetic term decreases, the height term decreases and the pressure increases",
    ],
    correctIndex: 0,
    explanation:
      "Narrowing raises the speed and so raises 0.5 rho v^2, climbing raises rho g h, and since the total pressure is constant both of those increases can only be balanced by a fall in the static pressure.",
    evidence:
      "Along a streamline a rise in 1/2 rho v^2 or in rho g h must be paid for by a fall in the static pressure.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-5.8",
    concept: "along-streamline changes",
  },
  {
    key: "bernoul-viscous-energy-loss",
    text: "Real water flowing through a garden hose is compared with the same water in an ideal flow. In the real flow the measured total pressure along the hose",
    options: [
      "stays constant, exactly as it does for an ideal fluid",
      "increases, because the hose supplies energy to the water",
      "stays constant provided the hose is held horizontally",
      "falls, because viscous friction turns part of it into heat",
    ],
    correctIndex: 3,
    explanation:
      "A real liquid has viscosity, and the friction force along the hose converts part of P + 0.5 rho v^2 + rho g h into heat at every metre of pipe, so the measured total pressure drops along the flow and is smallest where the water leaves the nozzle.",
    evidence:
      "Bernoulli's equation holds only for an ideal fluid, so viscous friction reduces the total pressure of a real fluid along a pipe.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "viscous energy loss",
  },
  {
    key: "bernoul-total-pressure-value",
    text: "In a steady ideal flow of water (rho = 1000 kg m^-3) the pressure at a point on a streamline is 7.2 x 10^4 Pa, the speed there is 4 m s^-1 and the point lies 3.0 m above the chosen level. Taking g = 10 m s^-2, the total pressure at that point is",
    options: [
      "8.0 x 10^4 Pa, found by adding the kinetic term to the pressure",
      "1.4 x 10^5 Pa, found by adding the height term twice",
      "1.1 x 10^5 Pa, found by adding all three terms",
      "1.02 x 10^5 Pa, found by adding the pressure and the height term",
    ],
    correctIndex: 2,
    explanation:
      "The total pressure is P + 0.5 rho v^2 + rho g h = 7.2 x 10^4 + 0.5 x 1000 x 4^2 + 1000 x 10 x 3.0 = 72000 + 8000 + 30000 = 1.1 x 10^5 Pa.",
    evidence:
      "The total pressure of an ideal fluid at a point of a streamline is the sum P + 1/2 rho v^2 + rho g h of the three terms.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "total pressure value",
  },
  {
    key: "bernoul-uniform-pipe-height-compare",
    text: "The same ideal liquid flows steadily through a pipe of uniform diameter whose two ends are at different heights. Comparing the pressure at the two ends, the pressure is",
    options: [
      "equal at both ends, because a steady flow has no gradient along a pipe",
      "lower at the higher end by rho g times the difference in height",
      "lower at the higher end by 0.5 rho times the difference of the squared speeds",
      "higher at the higher end by rho g times the difference in height",
    ],
    correctIndex: 1,
    explanation:
      "A constant diameter makes the speed the same at both ends by the continuity equation, so the kinetic terms cancel and P + rho g h is left constant, which makes the pressure at the higher end smaller by rho g times the difference in height.",
    evidence:
      "In a pipe of uniform diameter the speed is the same at both ends, so the pressure difference is rho g times the difference in height between them.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "uniform pipe heights",
  },
  {
    key: "bernoul-curved-surface-deflection",
    text: "A ball travelling through the air is deflected towards the curved side of its own surface, as a spinning top is deflected while it leans over. Three claims are made. I. The air past the curved side of the body moves faster than the air on the other side. II. The pressure on the curved side is lower than the pressure on the other side. III. The force arising from this difference pushes the body towards the side of higher pressure. The correct set of claims is",
    options: [
      "Only I is correct",
      "Only I and II are correct",
      "Only II and III are correct",
      "Only I, II and III are correct",
    ],
    correctIndex: 1,
    explanation:
      "The faster air over the curved side carries a lower static pressure by Bernoulli's equation, and the resulting force acts from the high-pressure side towards the low-pressure side, so claim III states the direction of the force wrongly.",
    evidence:
      "A body moving through air along a curved path is deflected towards the curved side, where the faster-moving air has the lower pressure.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-5.8",
    concept: "curved surface deflection",
  },
  {
    key: "bernoul-duct-flow-rate",
    text: "A blower drives air of density 1.2 kg m^-3 through a horizontal duct whose cross-section narrows from 0.20 m^2, where the pressure is 2.0 x 10^3 Pa, to 0.05 m^2, where the pressure is 1.1 x 10^3 Pa. Treating the flow as steady and non-viscous, the volume flow rate through the narrow section is",
    options: [
      "0.5 m^3 s^-1, from a speed of 10 m s^-1 in the wide section",
      "8.0 m^3 s^-1, from a speed of 40 m s^-1 in the wide section",
      "0.25 m^3 s^-1, from a speed of 5 m s^-1 in the narrow section",
      "2.0 m^3 s^-1, from a speed of 40 m s^-1 in the narrow section",
    ],
    correctIndex: 3,
    explanation:
      "Continuity gives v1 = (0.05/0.20) v2 = v2/4 and Bernoulli gives 2.0 x 10^3 - 1.1 x 10^3 = 0.6 (v2^2 - v2^2/16), so v2^2 = 1600 and v2 = 40 m s^-1; the flow rate is then 0.05 m^2 x 40 m s^-1 = 2.0 m^3 s^-1.",
    evidence:
      "For a horizontal duct P1 - P2 = 1/2 rho (v2^2 - v1^2), and with continuity this fixes the speed of the air in the narrow section.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "duct flow rate",
  },
  {
    key: "bernoul-pipe-height-and-speed",
    text: "A pipe of varying cross-section carries an ideal liquid steadily from a large reservoir, its free surface standing 10 m above the ground, to a tap 2 m below that surface. Compared with the free surface, at the tap",
    options: [
      "the speed is greater and the pressure is smaller, because the pipe is narrower and lower",
      "the speed is greater but the pressure is larger, because the flow has gained speed",
      "the speed is smaller and the pressure is larger, because the pressure drives the flow",
      "the speed and the pressure are unchanged, because the total pressure is constant",
    ],
    correctIndex: 0,
    explanation:
      "Continuity gives a greater speed where the pipe narrows, and the tap lies 8 m below the surface, so both the larger 0.5 rho v^2 term and the smaller rho g h term are paid for by a fall in the static pressure below the atmospheric pressure at the surface.",
    evidence:
      "For a steady ideal liquid the sum P + 1/2 rho v^2 + rho g h is constant, so a fall in height together with a rise in speed lowers the static pressure.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "height and speed effects",
  },
  {
    key: "bernoul-burner-whistle-statements",
    text: "In a Bunsen-type gas burner and in a whistle, a fast stream of air passes a region that is open to the surrounding air. Three claims are made. I. The fast-moving air has a lower static pressure than the still air around it. II. The surrounding air is drawn in towards the fast stream. III. The pressure in the fast stream is higher than in the surrounding air, which is what pulls the material in. The correct set of claims is",
    options: [
      "Only II is correct",
      "Only I and III are correct",
      "Only I and II are correct",
      "Only I, II and III are correct",
    ],
    correctIndex: 2,
    explanation:
      "Where the air streams fastest the static pressure is smallest, so claims I and II describe the working correctly, while claim III reverses the situation because it is the low pressure in the fast stream that draws the air or vapour in.",
    evidence:
      "Fast moving air over a tube lowers the pressure there and draws the surrounding air into the fast stream, as in a burner or a whistle.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-5.8",
    concept: "burner and whistle",
  },
  {
key: "bernoul-venturi-solution-steps",
    text: "The rate of flow through a horizontal venturi meter is to be found from the areas of its two sections and the pressure difference between them. The steps are I. Write P1 + 0.5 rho v1^2 = P2 + 0.5 rho v2^2 for the two sections, which are at the same height. II. Rearrange this to P1 - P2 = 0.5 rho (v2^2 - v1^2). III. Replace v1 by v2 A2/A1 using the continuity equation. IV. Solve for v2 and then multiply it by the area of the narrow section to obtain the rate of flow. The correct order of steps is",
    options: [
      "III, II, I, IV",
      "I, II, III, IV",
      "II, I, III, IV",
      "IV, III, II, I",
    ],
    correctIndex: 1,
    explanation:
      "The equal-height form must be written first, then rearranged to isolate the pressure difference, and only then can the continuity relation be used to remove the second unknown speed, after which the narrow-section speed gives the rate of flow.",
    evidence:
      "For a horizontal venturi meter Bernoulli's equation and the continuity equation are combined as P1 - P2 = 1/2 rho (v2^2 - v1^2) with v1 A1 = v2 A2 to find the rate of flow.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-5.8",
    concept: "venturi solution steps",
  },
  {
    key: "bernoul-three-term-calculation",
    text: "A steady ideal liquid of density 800 kg m^-3 flows along a pipe. At the upper point the pressure is 1.4 x 10^5 Pa, the speed is 4 m s^-1 and the height is 6.0 m; at the lower point the height is taken as 0 m and the speed is 6 m s^-1. Taking g = 10 m s^-2, the pressure at the lower point is",
    options: [
      "1.32 x 10^5 Pa, obtained by leaving out the height term",
      "9.2 x 10^4 Pa, obtained by leaving out both kinetic terms",
      "2.28 x 10^5 Pa, obtained by adding the height term on the far side",
      "1.8 x 10^5 Pa, obtained by balancing all three terms",
    ],
    correctIndex: 3,
    explanation:
      "At the upper point the total pressure is 1.4 x 10^5 + 400 x 16 + 800 x 10 x 6 = 194400 Pa; at the lower point the height term vanishes and the kinetic term is 400 x 36 = 14400 Pa, so P = 194400 - 14400 = 1.8 x 10^5 Pa.",
    evidence:
      "Bernoulli's equation between two points of a streamline balances the pressure, the term 1/2 rho v^2 and the term rho g h at each of the two points.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 97,
    outcome: "PHY-5.8",
    concept: "three term calculation",
  },
  {
    key: "bernoul-narrowing-rising-pipe",
    text: "An ideal liquid of density 1000 kg m^-3 flows steadily through a pipe that narrows from a cross-section of area 0.04 m^2, standing at a height of 4.0 m where the pressure is 1.5 x 10^5 Pa, to a cross-section of area 0.01 m^2, standing at a height of 2.0 m where the pressure is 1.4 x 10^5 Pa. Taking g = 10 m s^-2, the speed of the liquid in the narrow section is",
    options: [
      "4 m s^-1, because the area is cut to one quarter",
      "16 m s^-1, because the area ratio is multiplied by itself",
      "8 m s^-1, because continuity and Bernoulli together give it",
      "2 m s^-1, because the height falls by 2.0 m",
    ],
    correctIndex: 2,
    explanation:
      "Continuity gives v1 = v2/4, so 1.5 x 10^5 + 500 (v2/4)^2 + 1000 x 10 x 4.0 = 1.4 x 10^5 + 500 v2^2 + 1000 x 10 x 2.0, which gives 500 v2^2 (15/16) = 30000, so v2^2 = 64 and v2 = 8 m s^-1.",
    evidence:
      "When a pipe both narrows and rises, continuity fixes the ratio of the speeds and Bernoulli balances the pressure, 1/2 rho v^2 and rho g h at the two sections.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-5.8",
    concept: "narrowing rising pipe",
  },
];
