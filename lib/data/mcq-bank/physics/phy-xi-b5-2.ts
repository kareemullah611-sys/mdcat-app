import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "wavetype-transverse-perpendicular-vibration",
    text: "In a transverse wave the particles of the medium oscillate",
    options: [
      "at right angles to the direction in which the wave is travelling",
      "along the direction in which the wave is travelling",
      "along the direction in which the wave is travelling, but more slowly than the wave",
      "in a random direction, with no fixed relation to the travel of the wave",
    ],
    correctIndex: 0,
    explanation:
      "The defining feature of a transverse wave is that the particles of the medium vibrate perpendicular to the direction of propagation; in a longitudinal wave they vibrate along that direction.",
    evidence:
      "A transverse wave is one in which the particles of the medium vibrate at right angles to the direction of wave propagation.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-6.6",
    concept: "transverse wave definition",
  },
  {
    key: "wavetype-longitudinal-particle-motion",
    text: "In a sound wave travelling through air, the particles of air",
    options: [
      "vibrate sideways, at right angles to the direction of travel",
      "vibrate to and fro along the direction in which the wave travels",
      "stay still while the disturbance moves onward past them",
      "move forward continuously and are never restored to their positions",
    ],
    correctIndex: 1,
    explanation:
      "Sound in air is a longitudinal wave, so the air particles oscillate back and forth parallel to the direction of propagation while the disturbance itself travels onward.",
    evidence:
      "In longitudinal waves the particles of the medium vibrate to and fro along the direction of wave propagation, producing compressions and rarefactions.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "PHY-6.6",
    concept: "longitudinal particle motion",
  },
  {
    key: "wavetype-medium-restored-after-passage",
    text: "After a transverse wave has passed a point on a stretched string, that point",
    options: [
      "stays permanently displaced, since the wave has carried matter forward",
      "moves along the string at the same speed as the wave",
      "returns to its original position once the wave has passed",
      "vibrates continuously at the frequency of the source",
    ],
    correctIndex: 2,
    explanation:
      "A wave transfers energy and momentum without a net transfer of matter, so the particles of an elastic medium return to their original positions once the disturbance has passed.",
    evidence:
      "The medium is restored to its original shape after a wave has passed through it, because the wave transfers energy without transferring matter.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "PHY-6.6",
    concept: "medium restoration",
  },
  {
    key: "wavetype-string-pulse-classification",
    text: "A pulse sent along a stretched guitar string is a",
    options: [
      "transverse wave, because the particles of the string move up and down as the pulse travels along it",
      "longitudinal wave, because the particles of the string move to and fro along its length",
      "electromagnetic wave, because the string carries the disturbance without disturbing the air",
      "sound wave, because the vibrating string can afterwards be heard in the surrounding air",
    ],
    correctIndex: 0,
    explanation:
      "A wave on a stretched string is transverse because the particles of the string oscillate perpendicular to the direction in which the pulse travels along it.",
    evidence:
      "Waves produced in a stretched string or a stretched wire are transverse, since their particles vibrate perpendicular to the direction of propagation.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-6.6",
    concept: "string wave classification",
  },
  {
    key: "wavetype-pond-ripple-class-match",
    text: "Ripples spreading across the surface of a pond belong to the same class of waves as",
    options: [
      "sound waves travelling in a liquid",
      "waves travelling along a stretched rope",
      "compression waves travelling through a steel rod",
      "sound waves travelling through air",
    ],
    correctIndex: 1,
    explanation:
      "Ripples on a water surface are transverse waves because the surface particles oscillate up and down across the surface as the disturbance moves on, exactly as on a stretched rope.",
    evidence:
      "Waves on the surface of water and waves on a stretched string are transverse waves, with particles vibrating perpendicular to the direction of travel.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-6.6",
    concept: "surface wave class",
  },
  {
    key: "wavetype-radio-signal-versus-sound",
    text: "A radio signal sent from a spacecraft is received on Earth, but the sound of an explosion out in space is never heard. The difference lies in the fact that",
    options: [
      "the radio signal is mechanical and needs no medium, while sound is electromagnetic",
      "sound travels more slowly than the radio signal and so has not arrived yet",
      "sound is absorbed only by the vacuum between the planets and not by ordinary air",
      "sound needs particles of a medium to transmit the vibration, whereas the radio wave is electromagnetic",
    ],
    correctIndex: 3,
    explanation:
      "Sound is a mechanical wave and depends on the particles of a medium to carry the disturbance, whereas a radio wave is electromagnetic and can cross a vacuum.",
    evidence:
      "Mechanical waves such as sound cannot pass through a vacuum because they need particles of a medium to transmit the disturbance.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-6.6",
    concept: "mechanical versus electromagnetic",
  },
  {
    key: "wavetype-light-transverse-without-medium",
    text: "Light is treated as a transverse wave even though it crosses a vacuum, because",
    options: [
      "the particles of air that light passes through oscillate up and down as it advances",
      "its electric and magnetic fields oscillate at right angles to the direction of travel",
      "its wavelength always becomes shorter in air than in glass",
      "it is pushed onward by the free electrons of any material it traverses",
    ],
    correctIndex: 1,
    explanation:
      "Light is an electromagnetic wave in which the electric and magnetic fields oscillate perpendicular to the direction of propagation, and these fields can oscillate without any material medium.",
    evidence:
      "Light is an electromagnetic transverse wave whose electric and magnetic fields oscillate at right angles to the direction of propagation.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-6.6",
    concept: "electromagnetic wave nature",
  },
  {
    key: "wavetype-longitudinal-wave-regions",
    text: "A longitudinal wave travelling through air contains, in turn,",
    options: [
      "crests and troughs, because the particles of the air move up and down as it passes",
      "poles of attraction and repulsion that act between neighbouring layers of air",
      "an electric field and a magnetic field that oscillate at right angles to the line of travel",
      "crowded and spread-out regions of air arranged along the line of travel",
    ],
    correctIndex: 3,
    explanation:
      "In a longitudinal wave the particles crowd together to form compressions and spread apart to form rarefactions, both of which lie along the direction of propagation.",
    evidence:
      "A longitudinal wave consists of compressions and rarefactions produced by the to and fro motion of the particles along the direction of travel.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-6.6",
    concept: "compression and rarefaction",
  },
  {
    key: "wavetype-chief-difference-wavetypes",
    text: "The chief difference between a transverse wave and a longitudinal wave is",
    options: [
      "that only a transverse wave needs a material medium in order to travel",
      "the direction in which the particles of the medium vibrate relative to the direction of travel",
      "that a longitudinal wave always travels faster than a transverse wave in the same medium",
      "that a transverse wave can cross a vacuum while a longitudinal wave cannot",
    ],
    correctIndex: 1,
    explanation:
      "The two types are separated by the vibration of the particles: across the direction of travel for a transverse wave, and along it for a longitudinal wave.",
    evidence:
      "Transverse and longitudinal waves are distinguished by whether the particles of the medium vibrate perpendicular or parallel to the direction of wave propagation.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-6.6",
    concept: "transverse longitudinal difference",
  },
  {
    key: "wavetype-mechanical-versus-electromagnetic-medium",
    text: "A mechanical wave and an electromagnetic wave differ in that",
    options: [
      "only the electromagnetic wave requires a material medium to travel through",
      "only the mechanical wave is able to carry a crest and a trough",
      "the mechanical wave requires particles of a medium, which the electromagnetic wave does not",
      "the electromagnetic wave must always be longitudinal, while the mechanical wave is transverse",
    ],
    correctIndex: 2,
    explanation:
      "A mechanical wave such as sound needs particles of a medium to transmit the disturbance, while an electromagnetic wave such as light consists of oscillating fields and can travel through a vacuum.",
    evidence:
      "Mechanical waves require a material medium, whereas electromagnetic waves such as light and radio waves can travel through a vacuum.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-6.6",
    concept: "mechanical wave medium",
  },
  {
    key: "wavetype-rarefaction-region-identification",
    text: "A sound wave is passing along a tube of air. At one instant the air near the far end of the tube is spread farther apart than usual, while the air nearer the source is crowded together. The spread-out region is",
    options: [
      "a compression, because its particles have been pushed closest together",
      "a crest, because its particles have been lifted above their mean level",
      "a rarefaction, because its particles have moved apart and the density there is lower",
      "the leading edge of the wave, where the particles begin to move forward",
    ],
    correctIndex: 2,
    explanation:
      "A rarefaction is the region in which the particles of the medium have moved apart, so the local density is lower than the average until the wave has passed.",
    evidence:
      "A rarefaction is the part of a longitudinal wave in which the particles of the medium are momentarily spread apart.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.6",
    concept: "rarefaction identification",
  },
  {
    key: "wavetype-elastic-medium-condition",
    text: "A material can serve as the medium of a mechanical wave only if its particles",
    options: [
      "can be displaced from their positions of equilibrium and then return to them",
      "are permanently fixed, so that a disturbance cannot be handed from one to another",
      "are already moving in the direction in which the wave is to travel",
      "leave the material and travel onward together with the disturbance",
    ],
    correctIndex: 0,
    explanation:
      "A mechanical wave requires an elastic medium whose particles can be disturbed from equilibrium and then spring back to their original positions.",
    evidence:
      "A mechanical wave needs an elastic medium in which the particles are able to oscillate about their equilibrium positions.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-6.6",
    concept: "elastic medium condition",
  },
  {
    key: "wavetype-pulse-passage-sequence",
    text: "As a wave pulse travels away from its source, the sequence of events is",
    options: [
      "each particle of the medium moves permanently forward and is left behind the pulse",
      "the medium is displaced once and keeps its new shape for the whole journey of the pulse",
      "the particles of the medium start to move only after the pulse has passed their position",
      "each particle is disturbed, hands the disturbance to its neighbours, and returns to its equilibrium position",
    ],
    correctIndex: 3,
    explanation:
      "Each particle passes the disturbance to its neighbours and then returns to equilibrium, so energy travels forward while no matter is transported.",
    evidence:
      "Energy in a mechanical wave is transferred from particle to particle as each is disturbed and then returns to its equilibrium position.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.6",
    concept: "wave energy transfer order",
  },
  {
    key: "wavetype-longitudinal-region-order",
    text: "Moving along a sound wave in air in the direction of travel, the regions are encountered in the order",
    options: [
      "crest, trough, crest",
      "compression, crest, trough",
      "compression, rarefaction, compression",
      "rarefaction, crest, trough",
    ],
    correctIndex: 2,
    explanation:
      "Particles crowd together at one place and spread out at the next along the line of travel, so compressions and rarefactions succeed one another; crests and troughs belong to transverse waves.",
    evidence:
      "Compressions and rarefactions in a longitudinal wave lie along the direction of propagation and alternate regularly.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.6",
    concept: "wave region alternation",
  },
  {
    key: "wavetype-medium-and-light-statements",
    text: "Two statements are made: (i) mechanical waves such as sound need a material medium in order to travel; (ii) light also depends on particles of matter to carry its disturbance. In the order given, the statements are",
    options: [
      "true, false",
      "true, true",
      "false, true",
      "false, false",
    ],
    correctIndex: 0,
    explanation:
      "Sound is a mechanical wave and requires a medium, while light is an electromagnetic wave whose oscillating fields carry it through a vacuum, so statement (ii) is false.",
    evidence:
      "Mechanical waves need a material medium, while electromagnetic waves such as light need none.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-6.6",
    concept: "medium requirement statements",
  },
  {
    key: "wavetype-pond-ripple-claim-reason",
    text: "A student claims that ripples on the surface of a pond must be longitudinal because the water of the pond moves along with the ripple. Judging the claim and its reason, the ripple is",
    options: [
      "transverse, and both the claim and the reason are wrong",
      "longitudinal, and both the claim and the reason are correct",
      "transverse, so the claim is wrong but the reasoning is sound",
      "electromagnetic, and both the claim and the reason are wrong",
    ],
    correctIndex: 0,
    explanation:
      "The water of the surface is not carried along with the ripple; its particles oscillate up and down across the surface while the disturbance moves on, so the wave is transverse and the reasoning fails.",
    evidence:
      "Waves on the surface of water are transverse, since the particles of the surface vibrate perpendicular to the direction in which the wave travels.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-6.6",
    concept: "surface wave claim reasoning",
  },
  {
    key: "wavetype-three-wave-statements",
    text: "Three statements are listed: (i) a wave transfers energy and momentum without a net transfer of matter; (ii) in a transverse wave the particles of the medium vibrate along the direction of travel; (iii) light is a mechanical wave and so can cross a vacuum. In the order given, the statements are",
    options: [
      "true, true, true",
      "true, false, false",
      "false, false, true",
      "true, true, false",
    ],
    correctIndex: 1,
    explanation:
      "A wave carries energy and momentum but no net matter, so (i) is true; transverse particles vibrate across the line of travel, making (ii) false; and light is electromagnetic rather than mechanical, making (iii) false.",
    evidence:
      "A wave transfers energy and momentum without a net transfer of matter, transverse particles vibrate perpendicular to the travel, and light is an electromagnetic wave.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-6.6",
    concept: "wave statement verdicts",
  },
  {
    key: "wavetype-guitar-string-and-air-waves",
    text: "A guitar string is plucked and the note is heard across the room. In this single event the wave in the string and the sound wave in the air are",
    options: [
      "both transverse, since the string and the air both oscillate up and down",
      "both longitudinal, since in each case the particles move along the direction of travel",
      "transverse in the string and longitudinal in the air",
      "longitudinal in the string and transverse in the air",
    ],
    correctIndex: 2,
    explanation:
      "The string particles oscillate at right angles to the string, so the string wave is transverse, while the air particles oscillate to and fro along the direction of the sound, so the air wave is longitudinal.",
    evidence:
      "A wave in a stretched string is transverse, while a sound wave in air is longitudinal because its particles vibrate along the direction of travel.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-6.6",
    concept: "two medium wave comparison",
  },
  {
    key: "wavetype-energy-without-net-displacement",
    text: "A common student claim is that a transverse wave cannot transfer energy, because every point of the medium returns to its original position after the pulse has passed. The argument fails because",
    options: [
      "the medium does in fact remain permanently deformed after the wave has gone",
      "energy can be transferred only by matter that changes its position",
      "the return of the medium to its shape shows that the wave must be longitudinal",
      "a wave carries energy and momentum forward although no matter is transported with it",
    ],
    correctIndex: 3,
    explanation:
      "Energy and momentum are carried along by the wave while the particles merely oscillate, so the absence of any net displacement of matter does not prevent energy transfer.",
    evidence:
      "A wave transfers energy and momentum without any net transfer of matter, since the particles of the medium return to their original positions.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-6.6",
    concept: "energy transfer argument",
  },
  {
    key: "wavetype-rope-pulse-claim-check",
    text: "A pulse moves along a stretched rope from end A towards end B. A student claims that the particles of the rope travel from A to B with the pulse, and that the pulse must be transverse simply because the rope is stretched. The claims and the pulse are",
    options: [
      "both claims wrong, and the pulse is a transverse wave",
      "only the second claim wrong, and the pulse is a longitudinal wave",
      "both claims correct, and the pulse is a transverse wave",
      "only the first claim wrong, and the pulse is a transverse wave",
    ],
    correctIndex: 3,
    explanation:
      "No particles travel from A to B, since each returns to its original position, but the particles do oscillate across the rope as the pulse moves along it, which makes the pulse transverse.",
    evidence:
      "In a wave on a stretched string the particles vibrate perpendicular to the direction of travel and are restored to their original positions after the wave has passed.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-6.6",
    concept: "rope pulse claim check",
  },
];
