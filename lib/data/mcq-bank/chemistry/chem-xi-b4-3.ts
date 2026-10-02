import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "kinetics-activation-energy-minimum",
    text: "The activation energy of a reaction is",
    options: [
      "the minimum energy that colliding reactant particles must possess so that they can react",
      "the total energy given out when the reactants are converted into products",
      "the difference in enthalpy between the products and the reactants",
      "the energy already present in the bonds of the reactants before the reaction starts",
    ],
    correctIndex: 0,
    explanation:
      "Activation energy is defined as the minimum energy which the colliding molecules must possess in order to react, so it fixes the barrier that has to be surmounted before products appear.",
    evidence:
      "Activation energy is the minimum energy which the colliding molecules must possess in order to react.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 97,
    outcome: "CHEM-7.5",
    concept: "activation energy meaning",
  },
  {
    key: "kinetics-rate-effective-collisions",
    text: "The rate of a chemical reaction is a measure of",
    options: [
      "the energy released by each mole of product formed",
      "the number of effective collisions between reactant molecules in unit time",
      "the fraction of the molecules that hold the activation energy at any instant",
      "the time taken by one molecule to pick up the activation energy",
    ],
    correctIndex: 1,
    explanation:
      "The rate counts the effective collisions per unit second, since only collisions between molecules that carry at least the activation energy and meet in the correct orientation actually produce products.",
    evidence: "The rate of a reaction is the number of effective collisions per unit time.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "reaction rate meaning",
  },
  {
    key: "kinetics-catalyst-regenerated",
    text: "A catalyst that has taken part in a reaction is left",
    options: [
      "in the mixture as one of the products",
      "as an impurity that must be removed before the next run",
      "chemically unchanged and available to catalyse further reaction",
      "combined with the unchanged reactants only",
    ],
    correctIndex: 2,
    explanation:
      "A catalyst takes part in the reaction mechanism but is regenerated at the end of it, so it reappears chemically unchanged and can be used again.",
    evidence: "A catalyst is regenerated at the end of the reaction and is not consumed by it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "catalyst regeneration",
  },
  {
    key: "kinetics-order-concentration-exponent",
    text: "The order of a reaction is",
    options: [
      "the coefficient of that reactant in the balanced equation",
      "the number of separate steps present in the mechanism",
      "the concentration of the reactant at which the reaction stops",
      "the power to which the reactant concentration is raised in the experimentally measured rate law",
    ],
    correctIndex: 3,
    explanation:
      "The order is the exponent that the concentration carries in the rate law, and it is obtained from experimental measurements rather than from the stoichiometric coefficients of the balanced equation.",
    evidence:
      "The order of a reaction is determined experimentally from its rate law and need not equal the stoichiometric coefficient of the reactant.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "order of reaction",
  },
  {
    key: "kinetics-temperature-raises-fraction",
    text: "Raising the temperature of a reacting mixture speeds up the reaction mainly because",
    options: [
      "a larger fraction of the molecules now carries energy equal to or above the activation energy",
      "the activation energy of the reaction is lowered by the heat supplied",
      "the concentrations of the reactants rise even though the volume is unchanged",
      "the molecules begin to collide in an entirely new orientation",
    ],
    correctIndex: 0,
    explanation:
      "Warming shifts the distribution of molecular energies upwards, so a much greater fraction of the molecules exceeds the activation energy and the number of effective collisions per second rises.",
    evidence:
      "On raising the temperature the fraction of molecules having energy greater than the activation energy increases, so the rate of reaction increases.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "temperature effect on rate",
  },
  {
    key: "kinetics-catalyst-vs-uncatalysed",
    text: "Comparing a reaction carried out with a catalyst against the same reaction without one, the catalyst",
    options: [
      "raises both the activation energy and the enthalpy change of the reaction",
      "lowers the activation energy while leaving the enthalpy change unaltered",
      "lowers the activation energy by the same amount as the enthalpy change",
      "raises the enthalpy change so that more heat is given out per mole",
    ],
    correctIndex: 1,
    explanation:
      "A catalyst opens a different pathway with a smaller activation energy, but since the reactants and the products are the same, the enthalpy change of the reaction stays exactly as it was.",
    evidence:
      "A catalyst lowers the activation energy of a reaction without altering the enthalpy change or the heat of the reaction.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "catalysed versus uncatalysed",
  },
  {
    key: "kinetics-negative-catalyst-retards",
    text: "A negative catalyst, or inhibitor, differs from a positive catalyst in that it",
    options: [
      "is consumed during the reaction and has to be replaced",
      "raises the yield of the desired product in an equilibrium mixture",
      "retards the reaction by making it proceed along a path of higher activation energy",
      "works only by raising the temperature of the mixture",
    ],
    correctIndex: 2,
    explanation:
      "An inhibitor slows a reaction down by steering it along a pathway whose barrier is higher than the uncatalysed one, whereas a positive catalyst opens a path of lower activation energy.",
    evidence:
      "A negative catalyst or inhibitor retards a reaction by raising the activation energy of the pathway it provides.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-7.5",
    concept: "negative catalyst action",
  },
  {
    key: "kinetics-catalyst-claim-combination",
    text: "Three statements about catalysts are given.\nA. A catalyst provides an alternative reaction pathway with a lower activation energy.\nB. A catalyst changes the position of equilibrium in a reversible reaction.\nC. A catalyst is regenerated at the end of the reaction and is not consumed.\nWhich combination of statements is correct?",
    options: ["A only", "B only", "C only", "A and C"],
    correctIndex: 3,
    explanation:
      "A catalyst opens an alternative pathway whose barrier is lower and is regenerated at the end of the process, so it is not used up; it has no power to move an equilibrium, because it speeds both directions equally and leaves the equilibrium constant untouched.",
    evidence:
      "A catalyst provides an alternative reaction path with a lower activation energy and is regenerated at the end of the reaction.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "catalyst claim evaluation",
  },
  {
    key: "kinetics-rate-law-rate-constant-use",
    text: "The rate law of a reaction and the rate constant k are employed in order to",
    options: [
      "describe how the rate depends on the concentrations of the reacting substances",
      "calculate the enthalpy change of the reaction from its balanced equation",
      "decide which reactant will be the limiting one in a mixture",
      "measure the activation energy of the uncatalysed reaction",
    ],
    correctIndex: 0,
    explanation:
      "A rate law expresses the rate as a function of the concentrations raised to experimentally measured powers, and k is the proportionality constant in that expression for the reaction at a given temperature.",
    evidence:
      "A rate law expresses the rate of a reaction in terms of the concentrations of the reactants raised to powers given by the order of the reaction.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "rate law and constant",
  },
  {
    key: "kinetics-rate-factor-incorrect-claim",
    text: "Four claims about factors that affect the rate of a reaction are made. A: raising the temperature increases the rate. B: increasing the concentration of the reacting particles increases the rate. C: reducing the surface area of a finely divided solid raises the rate. D: the nature of the reacting substances affects the rate. The one incorrect claim is",
    options: ["B", "C", "D", "A"],
    correctIndex: 1,
    explanation:
      "A finely divided solid exposes a larger surface area than a lump of the same mass, so reducing the surface area lowers the rate of reaction rather than raising it.",
    evidence:
      "The rate of a reaction depends on temperature, on the concentration and surface area of the reactants and on the nature of the reacting substances.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-7.5",
    concept: "rate factor claims",
  },
  {
    key: "kinetics-exothermic-diagram-barriers",
    text: "In the energy profile of an exothermic reaction the product level lies below the reactant level and a single peak marks the transition state. Comparing the two barriers, the",
    options: [
      "forward activation energy equals the reverse activation energy",
      "forward activation energy is smaller than the reverse activation energy",
      "forward activation energy is zero because the reaction gives out heat",
      "reverse activation energy is smaller than the forward activation energy",
    ],
    correctIndex: 1,
    explanation:
      "Because the products stand lower than the reactants, the climb from the reactant level up to the peak is shorter than the climb from the product level up to the peak, so the forward barrier is the smaller of the two.",
    evidence:
      "In an exothermic reaction the products lie lower than the reactants, so the activation energy of the backward reaction is greater than that of the forward reaction.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "exothermic energy profile",
  },
  {
    key: "kinetics-endothermic-diagram-barriers",
    text: "On the energy diagram for an endothermic reaction the product level lies above the reactant level and a single peak marks the transition state. Comparing the two barriers, the",
    options: [
      "forward activation energy equals the reverse activation energy",
      "reverse activation energy is smaller than the forward activation energy",
      "forward activation energy is zero because the reaction absorbs heat",
      "forward activation energy is greater than the reverse activation energy",
    ],
    correctIndex: 3,
    explanation:
      "With the products standing above the reactants, the climb from the reactant level to the peak is longer than the climb from the product level to the peak, so the forward activation energy is the larger of the two.",
    evidence:
      "In an endothermic reaction the products lie higher than the reactants, so the activation energy of the forward reaction is greater than that of the backward reaction.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "endothermic energy profile",
  },
  {
    key: "kinetics-half-life-from-k",
    text: "A first-order decomposition has a rate constant of 0.0231 min^-1. Its half-life is",
    options: ["3.00 min", "43.2 min", "0.0300 min", "30.0 min"],
    correctIndex: 3,
    explanation:
      "For a first-order reaction the half-life is 0.693/k, and here 0.693 divided by 0.0231 min^-1 gives 30.0 min.",
    evidence: "The half-life of a first-order reaction is given by t(1/2) = 0.693/k.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "half-life from rate constant",
  },
  {
    key: "kinetics-rate-law-concentration-changes",
    text: "A reaction obeys the rate law rate = k[A]^2[B]. At constant temperature [A] is halved while [B] is tripled. The new rate is",
    options: [
      "0.75 times the original rate",
      "3.0 times the original rate",
      "1.5 times the original rate",
      "12.0 times the original rate",
    ],
    correctIndex: 0,
    explanation:
      "The squared concentration term contributes a factor of (1/2)^2 = 1/4 and the linear term contributes a factor of 3, so the overall factor is (1/4) x 3 = 0.75 and the reaction slows down.",
    evidence:
      "In the rate law rate = k[A]^m[B]^n the rate depends on the mth power of [A] and the nth power of [B].",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-7.5",
    concept: "rate law scaling",
  },
  {
    key: "kinetics-four-half-lives-remaining",
    text: "A first-order reaction has a half-life of 25.0 min. The percentage of the starting material still present after 100 min is",
    options: ["25.0 %", "6.25 %", "12.5 %", "3.13 %"],
    correctIndex: 1,
    explanation:
      "A hundred minutes is four half-lives, and each half-life halves the amount left, so the fraction remaining is (1/2)^4 = 1/16 of the starting material, that is 6.25 %.",
    evidence:
      "Successive halvings of a first-order reaction leave 1/2, 1/4, 1/8 and 1/16 of the original amount after one, two, three and four half-lives.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "CHEM-7.5",
    concept: "half-life successive halving",
  },
  {
    key: "kinetics-half-life-two-starting-amounts",
    text: "Two portions of the same first-order reactant are kept at the same temperature, one beginning at twice the concentration of the other. Compared with the more dilute portion, the more concentrated portion will",
    options: [
      "take half as long to reach the same percentage decomposition",
      "stop at a lower final percentage decomposition",
      "show the same half-life while taking the same time to halve its own amount",
      "have a different half-life because its rate constant is higher",
    ],
    correctIndex: 2,
    explanation:
      "The half-life t(1/2) = 0.693/k depends only on the rate constant and the temperature, so both portions halve their own amount in the same time although their starting concentrations differ.",
    evidence:
      "The half-life of a first-order reaction is independent of the initial concentration of the reactant.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-7.5",
    concept: "half-life independence",
  },
  {
    key: "kinetics-catalyst-speeds-both-directions",
    text: "A catalyst is added to a system that is already at equilibrium. It is correct to say that the catalyst will",
    options: [
      "shift the equilibrium towards the side of larger yield",
      "raise the equilibrium constant so that more product forms",
      "make the reaction exothermic so that the equilibrium moves forward",
      "speed up both the forward and the backward reactions, leaving the equilibrium position unchanged",
    ],
    correctIndex: 3,
    explanation:
      "The catalyst lowers the activation energy of the forward and the backward reactions alike, so both become faster and equilibrium is reached sooner with no change in the equilibrium constant or in the amounts present at equilibrium.",
    evidence:
      "A catalyst speeds up both the forward and the backward reactions and does not change the position of equilibrium or the equilibrium constant.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-7.5",
    concept: "catalyst and equilibrium",
  },
  {
    key: "kinetics-fraction-of-molecules-reacts",
    text: "At a fixed temperature only a small fraction of the molecules in a gas sample actually takes part in a reaction, because",
    options: [
      "most collisions are either too weak to overcome the activation energy or involve the wrong orientation",
      "most molecules are moving away from the place where reaction could occur",
      "the molecules lose energy to the walls of the container",
      "the products formed are identical to the reactants",
    ],
    correctIndex: 0,
    explanation:
      "A reaction needs molecules carrying at least the activation energy that also meet in the correct orientation at the moment of collision, and only a small fraction of them satisfy both conditions at any given temperature.",
    evidence:
      "Only molecules that possess the activation energy and collide in the correct orientation react, so the rate depends on the number of effective collisions.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "CHEM-7.5",
    concept: "effective collision fraction",
  },
  {
    key: "kinetics-catalyst-faster-reaction-sequence",
    text: "Explaining on the energy distribution picture why a catalyst makes a reaction faster, the correct order of reasoning is",
    options: [
      "the catalyst supplies heat to the reactants so that more of them reach the activation energy",
      "the catalyst offers an alternative pathway of lower activation energy, so more molecules react effectively, and it is regenerated at the end",
      "the catalyst lowers the enthalpy change of the reaction so that the products appear sooner",
      "the catalyst raises the collision frequency by setting the reactant molecules moving",
    ],
    correctIndex: 1,
    explanation:
      "The catalyst works by opening a pathway whose barrier is lower than the uncatalysed one, which enlarges the fraction of molecules able to react, and it reappears unchanged at the end of the process.",
    evidence:
      "A catalyst provides an alternative reaction path with a lower activation energy and is regenerated at the end of the reaction.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "CHEM-7.5",
    concept: "catalyst reasoning sequence",
  },
  {
    key: "kinetics-effective-collision-checks-sequence",
    text: "In deciding whether two colliding molecules will actually form products, the correct order of checks is",
    options: [
      "check the total energy first, then the orientation, then the activation energy again",
      "check the orientation first, then the activation energy, then the concentration of the products",
      "check that the molecules carry at least the activation energy and that they meet in the correct orientation",
      "check the concentration, then the orientation, and ignore the energies altogether",
    ],
    correctIndex: 2,
    explanation:
      "A collision is effective only when the molecules bring together at least the activation energy and are arranged so that the reacting atoms actually meet, so energy and orientation are the two conditions that have to be checked.",
    evidence:
      "An effective collision requires the molecules to possess the activation energy and to be correctly oriented.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "effective collision checks",
  },
  {
    key: "kinetics-powdered-solid-surface-area",
    text: "Equal masses of a solid reactant are used, one portion in coarse lumps and the other finely powdered. The powdered portion reacts faster because",
    options: [
      "the surface area in contact with the other reactant is greater, so more effective collisions occur each second",
      "its molecules carry a lower activation energy than those in the lumps",
      "the activation energy of the reaction falls as the pieces become smaller",
      "the concentration of the dissolved reactant rises when the solid is powdered",
    ],
    correctIndex: 0,
    explanation:
      "Dividing the same mass of solid into smaller pieces exposes a much larger surface area, so many more reactant molecules are available to collide effectively with the other reactant in every second.",
    evidence:
      "For a given mass of solid the rate of reaction increases as its surface area is increased by powdering.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "surface area effect",
  },
  {
    key: "kinetics-first-order-87-percent-time",
    text: "The decomposition of a gas is first order with a rate constant of 0.0575 min^-1. The time needed for 87.5 % of the gas to decompose is",
    options: ["36.2 min", "12.1 min", "24.1 min", "3.88 min"],
    correctIndex: 0,
    explanation:
      "When 87.5 % has decomposed, 12.5 % of the gas, that is one eighth of the original amount, is left, so t = (1/k) ln 8 = 2.079/0.0575 min^-1 = 36.2 min.",
    evidence:
      "For a first-order reaction the time required is t = (1/k) ln (a0/a), where a0 is the initial amount and a is the amount left.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "first-order completion time",
  },
  {
    key: "kinetics-overall-order-from-data",
    text: "Rates for the reaction A + B -> products are recorded as follows: run i, [A] = 0.20 mol dm^-3 and [B] = 0.10 mol dm^-3, rate = 0.012 mol dm^-3 s^-1; run ii, [A] = 0.40 and [B] = 0.10, rate = 0.048; run iii, [A] = 0.40 and [B] = 0.20, rate = 0.096. The overall order of the reaction is",
    options: ["one", "two", "three", "cannot be settled from these three runs"],
    correctIndex: 2,
    explanation:
      "Comparing runs i and ii, doubling [A] multiplies the rate by four, so the reaction is second order in A; comparing runs ii and iii, doubling [B] doubles the rate, so it is first order in B, giving an overall order of 2 + 1 = 3.",
    evidence:
      "The order of a reaction is found from experimental rate measurements and equals the sum of the individual orders in the reactants.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "order from rate data",
  },
  {
    key: "kinetics-first-order-time-to-halve",
    text: "For a first-order reaction with a rate constant of 0.0862 dm3 mol^-1 s^-1, the time required for the concentration of a reactant to fall from 0.50 mol dm^-3 to 0.25 mol dm^-3 is",
    options: ["4.02 s", "16.1 s", "8.04 s", "2.01 s"],
    correctIndex: 2,
    explanation:
      "Substituting into t = (1/k) ln (a0/a) gives (1/0.0862) ln (0.50/0.25) = (1/0.0862)(0.693) = 8.04 s, which is the half-life of this reaction.",
    evidence:
      "The half-life of a first-order reaction is t(1/2) = 0.693/k and does not depend on the starting concentration.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "CHEM-7.5",
    concept: "first-order halving time",
  },
  {
    key: "kinetics-lower-barrier-faster-rate",
    text: "Reaction P has an activation energy of 50 kJ per mol and reaction Q has 80 kJ per mol. Both run at the same temperature and their molecules collide with similar frequency and orientation. The reason P forms its product faster is that",
    options: [
      "the molecules of P gain energy from the surface of the container",
      "the higher barrier forces the molecules of Q to break more bonds",
      "the same fraction of the molecules of P exceeds its activation energy",
      "a much greater fraction of the molecules of P reaches its lower activation energy",
    ],
    correctIndex: 3,
    explanation:
      "At a fixed temperature the spread of molecular energies is the same for both, so the reaction with the smaller barrier has a lower activation energy that a larger fraction of its molecules can reach, and it therefore has more effective collisions per second.",
    evidence:
      "At a given temperature the fraction of molecules whose energy exceeds the activation energy increases as the activation energy decreases.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 94,
    outcome: "CHEM-7.5",
    concept: "barrier height and rate",
  },
];
