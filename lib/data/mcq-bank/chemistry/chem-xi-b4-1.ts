import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "lechat-dynamic-forward-reverse-equal",
    text: "In a reversible reaction that has reached equilibrium, the forward and reverse reactions",
    options: [
      "proceed at equal rates so that the concentrations of all species stay constant",
      "both stop completely, leaving no molecules of either kind",
      "slow down steadily until both rates fall to zero as the reaction ends",
      "continue until every molecule of reactant has been converted into product",
    ],
    correctIndex: 0,
    explanation:
      "Chemical equilibrium is dynamic: the forward and reverse reactions continue at equal rates, so reactants and products are constantly interconverted while their concentrations remain constant. Neither direction is ever completely switched off.",
    evidence:
      "At equilibrium the forward and reverse reactions proceed at equal rates and the concentrations of reactants and products remain constant.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-6.3",
    concept: "dynamic equilibrium rates",
  },
  {
    key: "lechat-kc-depends-on-temperature",
    text: "For a reversible reaction, the equilibrium constant Kc is affected by",
    options: [
      "the initial concentrations of the reactants",
      "temperature alone",
      "the volume of the reaction vessel",
      "the presence of a catalyst",
    ],
    correctIndex: 1,
    explanation:
      "Kc is a constant for a given reaction at one fixed temperature, so it does not vary with concentrations, volume or catalyst. Only a change of temperature gives a new value of Kc.",
    evidence:
      "For a given reaction the equilibrium constant has a constant value at a fixed temperature and depends on temperature only.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-6.3",
    concept: "equilibrium constant dependence",
  },
  {
    key: "lechat-heterogeneous-solid-omitted",
    text: "For the heterogeneous equilibrium CaCO3(s) <=> CaO(s) + CO2(g), the expression for Kc involves",
    options: [
      "the concentration of CaCO3 multiplied by that of CaO",
      "the concentrations of CaO and CO2 raised to equal powers",
      "the concentration of CO2 only",
      "the concentrations of all three species multiplied together",
    ],
    correctIndex: 2,
    explanation:
      "In a heterogeneous equilibrium the pure solid and pure liquid phases have constant concentrations, so they are left out of the expression and only the concentration of the gaseous product appears. This keeps Kc free of the amount of solid present.",
    evidence:
      "The equilibrium constant of a heterogeneous equilibrium contains the concentrations of gases and solutions only, because the concentrations of pure solids and pure liquids are constant.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "CHEM-6.3",
    concept: "heterogeneous equilibrium expression",
  },
  {
    key: "lechat-catalyst-leaves-position",
    text: "A catalyst introduced into a reversible system that is already at equilibrium will",
    options: [
      "increase the equilibrium constant so that more product forms",
      "decrease the equilibrium constant so that the reactant is recovered",
      "drive the reaction to completion within a few seconds",
      "speed up both the forward and reverse reactions without changing the equilibrium constant",
    ],
    correctIndex: 3,
    explanation:
      "A catalyst lowers the activation energy of both directions by the same route, so both rates rise equally and the ratio of forward to reverse rate is untouched. The system is already at equilibrium, so the position and Kc remain exactly where they were.",
    evidence:
      "A catalyst increases the rates of both the forward and the reverse reactions and therefore does not change the position of equilibrium or the value of the equilibrium constant.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "CHEM-6.3",
    concept: "catalyst and position",
  },
  {
    key: "lechat-add-nitrogen-shifts-forward",
    text: "For N2(g) + 3H2(g) <=> 2NH3(g) at constant temperature, more nitrogen is fed into a mixture already at equilibrium. The mixture then",
    options: [
      "shifts forward, so that more ammonia is present",
      "shifts backward, so that ammonia is decomposed",
      "stays unchanged, because Kp cannot change once it has been measured",
      "shifts forward, and Kp must rise to match the new composition",
    ],
    correctIndex: 0,
    explanation:
      "Adding a reactant raises its concentration, and the system meets the disturbance by consuming part of the added nitrogen to form more ammonia. Because temperature is unchanged, Kp keeps its original value while the position moves to the right.",
    evidence:
      "According to Le Chatelier's principle a system at equilibrium shifts in the direction that opposes an imposed change, so adding a reactant drives the reaction forwards.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-6.3",
    concept: "adding a reactant",
  },
  {
    key: "lechat-equal-gas-moles-no-shift",
    text: "At constant temperature an equilibrium mixture of H2(g) + I2(g) <=> 2HI(g) is compressed by reducing the volume. Because the number of gas moles is the same on both sides, the position of equilibrium will",
    options: [
      "shift towards HI, because the total pressure on the product side rises more",
      "remain unchanged, because compression influences only equilibria with unequal numbers of gas moles",
      "shift towards H2 and I2, because their total concentration falls less than that of HI",
      "shift towards HI, because Kp for this reaction increases as the pressure rises",
    ],
    correctIndex: 1,
    explanation:
      "Changing pressure moves the position only when the two sides carry different numbers of gas moles. Here one mole of HI is formed from two moles of gas, so neither side is favoured and the composition and Kp are untouched.",
    evidence:
      "The position of equilibrium is disturbed by a change of pressure only when there are different numbers of moles of gas on the two sides of the equation.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-6.3",
    concept: "pressure with equal moles",
  },
  {
    key: "lechat-heat-exothermic-absorbs",
    text: "A mixture of N2(g), H2(g) and NH3(g) at equilibrium is heated at constant volume. Since the formation of ammonia is exothermic, the equilibrium will",
    options: [
      "shift forward in order to absorb the extra heat",
      "stay fixed, because a catalyst is always present in the plant",
      "shift backward, decomposing ammonia so as to absorb the added heat",
      "cease to be an equilibrium once the temperature rises",
    ],
    correctIndex: 2,
    explanation:
      "Heating supplies heat, which the system treats as a reactant. An exothermic formation of ammonia therefore cannot consume the extra heat, so the mixture moves in the reverse, endothermic direction to take it up.",
    evidence:
      "For an exothermic reversible reaction an increase of temperature shifts the equilibrium in the direction that absorbs heat, that is towards the endothermic side.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-6.3",
    concept: "heating an exothermic system",
  },
  {
    key: "lechat-endothermic-kc-and-yield",
    text: "Two claims are made about the endothermic dissociation N2O4(g) <=> 2NO2(g). I: Kc falls when the temperature is raised. II: The equilibrium mixture contains more NO2 at the higher temperature. The combination of claims that holds is",
    options: ["I only", "II only", "Neither I nor II", "I and II only"],
    correctIndex: 1,
    explanation:
      "The forward dissociation of N2O4 absorbs heat, so raising the temperature favours NO2 formation and Kc increases. Claim I states the opposite of this behaviour, whereas claim II follows directly from the forward shift.",
    evidence:
      "For an endothermic reaction the equilibrium constant increases with temperature because the higher temperature favours the products of the absorbing direction.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-6.3",
    concept: "endothermic equilibrium constant",
  },
  {
    key: "lechat-inert-gas-two-claims",
    text: "An inert gas such as argon is used to disturb an equilibrium mixture. I: At constant volume the position of equilibrium does not move. II: At constant pressure the equilibrium moves towards the side carrying the greater number of gas moles. These claims are",
    options: ["I only", "II only", "I and II only", "neither I nor II"],
    correctIndex: 2,
    explanation:
      "At constant volume an inert gas changes only the total pressure, leaving every reacting partial pressure and Kp untouched, so the position holds. At constant pressure the volume must increase to keep the pressure, which dilutes the reacting gases and favours the side with more gas moles.",
    evidence:
      "Adding an inert gas has no effect on the position of equilibrium at constant volume, while at constant pressure it favours the direction with the greater number of moles of gas.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-6.3",
    concept: "inert gas additions",
  },
  {
    key: "lechat-compress-towards-fewer-moles",
    text: "An equilibrium mixture for 2SO3(g) <=> 2SO2(g) + O2(g) is compressed at constant temperature. The shift that follows is",
    options: [
      "towards SO3, because compression lowers every concentration at once",
      "towards SO2 and O2, because an equilibrium mixture always resists every change",
      "nowhere, because the value of Kp never responds to pressure",
      "towards SO3, because that side carries fewer moles of gas",
    ],
    correctIndex: 3,
    explanation:
      "Compression multiplies every partial pressure by the same factor, which pushes the reaction quotient above Kp for an equation whose products have fewer gas moles. The mixture therefore consumes SO3 and returns the quotient to Kp.",
    evidence:
      "On compression the position of equilibrium shifts towards the side that has fewer moles of gas, so 2SO3 giving 2SO2 and O2 is driven backwards.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-6.3",
    concept: "compression towards fewer moles",
  },
  {
    key: "lechat-remove-product-forward-shift",
    text: "Ammonia is continuously withdrawn from an equilibrium mixture of N2(g) + 3H2(g) <=> 2NH3(g) held at constant temperature. Removing the product",
    options: [
      "drops the reaction quotient below Kp, so the mixture shifts forward and makes more ammonia",
      "raises the reaction quotient above Kp, so the mixture shifts forward and makes more ammonia",
      "raises the value of Kp, so the mixture shifts forward until the quotient matches it",
      "changes nothing, because an equilibrium mixture resists disturbance permanently",
    ],
    correctIndex: 0,
    explanation:
      "Removing ammonia lowers the numerator of Kp, so the reaction quotient becomes smaller than Kp. Nitrogen and hydrogen then react to restore the constant, which is the reverse side of the disturbance.",
    evidence:
      "Le Chatelier's principle states that removing a product shifts a reversible reaction forwards, so that more of the product is formed again.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-6.3",
    concept: "removing a product",
  },
  {
    key: "lechat-why-compression-pcl5-back",
    text: "Halving the volume of an equilibrium mixture holding PCl5(g) <=> PCl3(g) + Cl2(g) drives the reaction backwards because",
    options: [
      "halving the volume doubles the value of Kc",
      "compression raises the pressure and the system then favours the side with fewer moles of gas",
      "PCl3 and Cl2 are products and products are always consumed first",
      "the catalyst on the vessel wall becomes inactive under higher pressure",
    ],
    correctIndex: 1,
    explanation:
      "The products on the right number three moles of gas against one on the left, so a rise of pressure is opposed by the system through the backward reaction. Kc is unaffected by the volume change.",
    evidence:
      "Decreasing the volume raises the pressure and shifts the equilibrium towards the side with a smaller total number of moles of gas.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-6.3",
    concept: "reason for backward shift",
  },
  {
    key: "lechat-kc-from-equilibrium-data",
    text: "For A(g) + B(g) <=> AB(g) an equilibrium mixture holds A at 0.40 mol L^-1, B at 0.50 mol L^-1 and AB at 0.50 mol L^-1. The value of Kc is",
    options: ["0.40", "1.00", "2.50", "1.25"],
    correctIndex: 2,
    explanation:
      "Kc equals the concentration of the product divided by the product of the reactant concentrations, so 0.50 divided by (0.40 x 0.50) gives 2.50. The reciprocal 0.40 and the halved values 1.00 and 1.25 come from misusing the powers.",
    evidence:
      "For A(g) + B(g) <=> AB(g) the equilibrium constant is the concentration of AB divided by the product of the concentrations of A and B.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-6.3",
    concept: "computing Kc",
  },
  {
    key: "lechat-degree-of-dissociation",
    text: "In the system PCl5(g) <=> PCl3(g) + Cl2(g) the degree of dissociation of PCl5 is increased by",
    options: [
      "adding PCl3 to the equilibrium mixture",
      "removing Cl2 from the equilibrium mixture",
      "using a more active catalyst",
      "diluting the mixture so that the total pressure falls",
    ],
    correctIndex: 3,
    explanation:
      "Dilution reduces the partial pressures of the reacting gases and the side with more gas moles is favoured, so more PCl5 dissociates and the degree of dissociation rises. Adding or removing a product and using a catalyst all leave the position unchanged or drive it backwards.",
    evidence:
      "The degree of dissociation of a substance in a reversible reaction increases when the mixture is diluted because the equilibrium then favours the side with more particles.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-6.3",
    concept: "degree of dissociation",
  },
  {
    key: "lechat-haber-high-pressure-benefit",
    text: "In the Haber synthesis N2(g) + 3H2(g) <=> 2NH3(g) a pressure of about 200 atm is used chiefly because this pressure",
    options: [
      "favours ammonia, since two moles of gas lie on the product side against four on the reactant side",
      "raises the value of Kp and so enlarges the yield",
      "allows nitrogen to react without any catalyst",
      "lowers the activation energy of the reaction",
    ],
    correctIndex: 0,
    explanation:
      "Four moles of gas on the reactant side become two on the product side, so the compression applied in the plant favours ammonia. Neither Kp nor the activation energy is altered by the applied pressure.",
    evidence:
      "The Haber process is carried out at high pressure because the equilibrium shifts towards ammonia, the side with fewer moles of gas.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "CHEM-6.3",
    concept: "Haber process pressure",
  },
  {
    key: "lechat-contact-process-moderate-temperature",
    text: "In the contact process the oxidation of SO2 to SO3 is exothermic, so the plant is kept at a moderate rather than a very high temperature in order to",
    options: [
      "raise Kp as far as possible",
      "keep a workable rate of reaction without driving the equilibrium back towards SO2 and O2",
      "change the reaction from exothermic to endothermic",
      "avoid the need for a platinum catalyst",
    ],
    correctIndex: 1,
    explanation:
      "Heating would improve the rate but lowers the yield because an exothermic system is pushed back towards its reactants when heated. A moderate temperature with a catalyst keeps the rate useful while retaining a favourable equilibrium yield.",
    evidence:
      "In the contact process a moderate temperature is used because a high temperature would shift the exothermic oxidation back towards the reactants.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "CHEM-6.3",
    concept: "contact process temperature",
  },
  {
    key: "lechat-kc-independent-of-concentration",
    text: "Two mixtures of the same reversible reaction are prepared at the same temperature, the second using twice the concentration of every species. Compared with the first, the second mixture will",
    options: [
      "have a value of Kc that is twice as large",
      "have a value of Kc that is half as large",
      "give the same value of Kc, since Kc depends only on temperature",
      "give the same value of Kc and the same equilibrium composition",
    ],
    correctIndex: 2,
    explanation:
      "Kc is a constant for a reaction at a fixed temperature, so doubling all concentrations leaves it unchanged. The equilibrium composition still differs, because the system settles at a different point of the same constant.",
    evidence:
      "The value of the equilibrium constant is independent of the concentrations and changes only when the temperature changes.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-6.3",
    concept: "concentration and Kc",
  },
  {
    key: "lechat-kc-and-kp-comparison",
    text: "Two equilibria are compared: for N2(g) + 3H2(g) <=> 2NH3(g) the number of gas moles differs across the arrow, while for H2(g) + I2(g) <=> 2HI(g) it does not. At a fixed temperature this means that",
    options: [
      "only the first reaction possesses an equilibrium constant",
      "only the second reaction possesses an equilibrium constant",
      "both constants change whenever the volume of the vessel is altered",
      "Kp and Kc are numerically equal for the second reaction but stand in a power relation to RT for the first",
    ],
    correctIndex: 3,
    explanation:
      "When the two sides carry the same number of gas moles, as in the hydrogen and iodine system, Kp and Kc have the same numerical value. Where the moles differ, as in the ammonia system, the two constants are related through a power of the gas constant and the temperature.",
    evidence:
      "Kp and Kc are equal when the numbers of moles of gas on the two sides of the equation are the same and differ by a power of RT when they are not.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "CHEM-6.3",
    concept: "Kp versus Kc",
  },
  {
    key: "lechat-predicting-shift-steps",
    text: "The sound order of reasoning for predicting the effect of a change on an equilibrium mixture is",
    options: [
      "write the balanced equation, compare the numbers of gas moles on the two sides, decide which way the system opposes the change, and check the effect on the equilibrium constant",
      "guess from experience, change the conditions, judge the result from memory, and repeat until the answer seems reasonable",
      "raise the temperature first, note whether Kc changes, compute a new composition, and then look for a limiting reactant",
      "convert the equation into a dynamic equilibrium, cancel every common species, and read the shift from what is left over",
    ],
    correctIndex: 0,
    explanation:
      "Le Chatelier's principle is applied by comparing what is disturbed with the species present on each side of the balanced equation, then noting that Kc responds only to temperature. Any other route relies on guesswork or on expressions that do not describe a shift.",
    evidence:
      "Le Chatelier's principle states that when a system at equilibrium is subjected to a disturbance it tends to counteract the disturbance and return to equilibrium.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "CHEM-6.3",
    concept: "le chatelier procedure",
  },
  {
    key: "lechat-liquid-water-vapour-pressure",
    text: "In the closed-vessel equilibrium H2O(l) <=> H2O(g) more liquid water is added at constant temperature. The vapour pressure of the water will",
    options: [
      "rise, because the concentration of the liquid has increased",
      "remain unchanged, because pure liquid water is excluded from the equilibrium expression",
      "fall by half, because the amount of liquid has doubled",
      "rise only if the vessel is shaken",
    ],
    correctIndex: 1,
    explanation:
      "The activity of a pure liquid is fixed, so adding more of it cannot change the constant or the vapour pressure it fixes at that temperature. Only the amount of liquid in excess increases.",
    evidence:
      "Pure liquids and pure solids do not appear in the equilibrium expression because their concentrations are constant and independent of the amount present.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "CHEM-6.3",
    concept: "liquid phase vapour pressure",
  },
  {
    key: "lechat-compress-then-remove-ammonia",
    text: "The mixture N2(g) + 3H2(g) <=> 2NH3(g) at equilibrium is compressed at constant temperature and then a little ammonia is withdrawn. Over these two operations",
    options: [
      "the amount of ammonia falls, because removal of product cancels the forward shift caused by compression",
      "the amount of ammonia falls, because compression always reduces the yield of a gas",
      "the amount of ammonia rises, while Kp keeps the value it had at the original temperature",
      "the amount of ammonia is unchanged, because an equilibrium mixture has a fixed composition",
    ],
    correctIndex: 2,
    explanation:
      "Compression favours the side with fewer gas moles and withdrawing a product also drives the reaction forwards, so both changes raise the ammonia content. Because the temperature never changes, Kp remains at its original value throughout.",
    evidence:
      "The equilibrium constant changes only with temperature, so a change of pressure or the removal of a product alters the position of equilibrium without altering Kp.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "CHEM-6.3",
    concept: "two successive disturbances",
  },
  {
    key: "lechat-pcl5-four-step-sequence",
    text: "A sealed vessel holds PCl5(g) <=> PCl3(g) + Cl2(g) at equilibrium at 300 K. The steps are carried out in order: (i) the volume is suddenly halved at 300 K, (ii) a new equilibrium is reached at 300 K, (iii) the temperature is raised to 350 K at constant volume, (iv) the mixture is allowed to equilibrate again. Along this sequence",
    options: [
      "Kc rises at step (i) and falls at step (iii), since the system resists every imposed change",
      "the degree of dissociation never changes, because a mixture at equilibrium has a fixed composition",
      "the mole ratio PCl3 to PCl5 doubles at step (i), because halving the volume doubles all concentrations equally",
      "the degree of dissociation falls at step (i) while Kc holds, and both the dissociation and Kc rise at step (iii)",
    ],
    correctIndex: 3,
    explanation:
      "Halving the volume favours the side with fewer gas moles, so less PCl5 dissociates while Kc stays at its 300 K value. Heating then supplies the heat that the endothermic dissociation needs, so both the degree of dissociation and Kc increase.",
    evidence:
      "Decreasing the volume reduces the degree of dissociation where the products number more gas moles, while raising the temperature increases it for an endothermic dissociation and increases Kc.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 90,
    outcome: "CHEM-6.3",
    concept: "successive pressure and temperature",
  },
  {
    key: "lechat-catalyst-plus-heating-exothermic",
    text: "For the exothermic reaction 2SO2(g) + O2(g) <=> 2SO3(g) in a closed vessel a platinum catalyst is added and the temperature is then raised. Compared with the original state, the new equilibrium",
    options: [
      "has a smaller Kp and less SO3, because heating favours the endothermic reverse direction while the catalyst leaves Kp unchanged",
      "has a smaller Kp and less SO3, because the catalyst draws the equilibrium towards the product side",
      "has the same Kp and the same amount of SO3, because a catalyst cancels every thermal disturbance",
      "has a larger Kp and more SO3, because a catalyst always raises the constant of an exothermic reaction",
    ],
    correctIndex: 0,
    explanation:
      "Heating an exothermic mixture drives it towards the reactants, which reduces the yield of SO3 and lowers Kp. The catalyst only raises both rates equally, so it leaves Kp and the position exactly where the temperature change put them.",
    evidence:
      "Raising the temperature decreases the equilibrium constant of an exothermic reaction, and a catalyst does not change the equilibrium constant.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 88,
    outcome: "CHEM-6.3",
    concept: "catalyst with temperature rise",
  },
  {
    key: "lechat-two-systems-compression-inert-gas",
    text: "The systems N2(g) + 3H2(g) <=> 2NH3(g) and H2(g) + I2(g) <=> 2HI(g) are treated alike: each is compressed at constant temperature and then exposed to an inert gas at constant volume. In these two operations the systems",
    options: [
      "answer both disturbances alike, because every gaseous equilibrium responds to a change of pressure",
      "answer compression differently but the inert gas alike, since only the ammonia equation has unequal numbers of gas moles",
      "answer both disturbances differently, because an inert gas always pushes an equilibrium towards the products",
      "answer both disturbances alike, because the equilibrium constant is independent of pressure and volume",
    ],
    correctIndex: 1,
    explanation:
      "Compressing the ammonia system shifts it towards two moles against four, whereas the hydrogen plus iodine system cannot shift because one mole becomes two on the same basis. An inert gas at constant volume disturbs neither system.",
    evidence:
      "A change of pressure shifts the position only when the numbers of moles of gas differ on the two sides, and an inert gas at constant volume has no effect on either.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 89,
    outcome: "CHEM-6.3",
    concept: "comparing two equilibria",
  },
  {
    key: "lechat-haber-yield-improving-changes",
    text: "In the ammonia synthesis N2(g) + 3H2(g) <=> 2NH3(g), delta H negative, a plant raises the temperature, lowers the pressure and feeds nitrogen in excess. Of these changes, the one that raises the equilibrium yield of ammonia is",
    options: [
      "raising the temperature, because heat favours the exothermic direction",
      "lowering the pressure, because a smaller pressure always favours the products",
      "feeding excess nitrogen, because a reactant shifts the system forwards",
      "adding a catalyst together with a higher temperature, since both favour the products",
    ],
    correctIndex: 2,
    explanation:
      "An exothermic mixture is pushed back towards its reactants when heated, and lowering the pressure favours the side with four moles of gas against two, so both reduce the yield. Adding more of a reactant drives the reaction forwards without altering Kp.",
    evidence:
      "Adding a reactant shifts a reversible reaction forwards, while raising the temperature or lowering the pressure reduces the yield of ammonia in the Haber process.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 91,
    outcome: "CHEM-6.3",
    concept: "yield and industrial changes",
  },
];