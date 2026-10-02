import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-elec-rectification-definition",
    text: "In electronics, what is meant by the rectification of an alternating current?",
    options: [
      "Raising the frequency of the alternating current until it can be used as a direct current",
      "Converting the alternating current into a direct current by allowing current to pass in one direction only",
      "Lowering the voltage of an alternating supply until its value becomes steady",
      "Converting a direct current supply into an alternating current by switching it rapidly on and off",
    ],
    correctIndex: 1,
    explanation:
      "Rectification means turning an alternating current into a direct current, and this is achieved by putting a device in the circuit that conducts in one direction only, so the reversed half of each cycle is blocked.",
    evidence:
      "Rectification is the conversion of an alternating current into a direct current by using a device that allows current to pass in one direction only.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-13.1",
    concept: "meaning of rectification",
  },
  {
    key: "xii-elec-half-wave-single-diode",
    text: "A single diode is placed in series with a load and the pair is driven by an alternating supply. What reaches the load in this half-wave arrangement?",
    options: [
      "One half of every alternating cycle, with the other half blocked by the reverse biased diode",
      "Both halves of every cycle, with the load current reversing at each half cycle",
      "One half of every cycle, but with the load current kept in the reverse sense throughout",
      "Both halves of every cycle, with the direct current smoothed by a second diode",
    ],
    correctIndex: 0,
    explanation:
      "With one diode only the half cycle that forward biases the junction is allowed through, and the other half finds the diode reverse biased and blocked, so the load receives a train of pulses in one direction only.",
    evidence:
      "A half-wave rectifier uses a single diode and passes only one half of the alternating cycle to the load.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-13.1",
    concept: "half-wave operation",
  },
  {
    key: "xii-elec-full-wave-diode-counts",
    text: "Full-wave rectification can be carried out in two standard ways. How many diodes does each way use?",
    options: [
      "One diode for the half-wave circuit and four diodes for the bridge circuit",
      "Two diodes for the bridge circuit and one diode for the centre-tapped transformer",
      "Four diodes for the bridge circuit and two diodes for the centre-tapped transformer",
      "Four diodes for the bridge circuit and one diode for the centre-tapped transformer",
    ],
    correctIndex: 2,
    explanation:
      "The bridge arrangement is built from four diodes, of which a conducting pair carries the load on each half cycle, while the centre-tapped arrangement uses two diodes and relies on a transformer with a tapped secondary.",
    evidence:
      "A full-wave rectifier is made either with four diodes in a bridge or with two diodes and a centre-tapped transformer.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-13.1",
    concept: "full-wave circuit layouts",
  },
  {
    key: "xii-elec-half-wave-power-discard",
    text: "A load draws power from a rectifier fed by one alternating source. Set the two arrangements against each other, and how does the power reaching the load compare?",
    options: [
      "The two are equal, because a diode passes some current during every part of the cycle",
      "Half-wave delivers more power, because its single diode has the least resistance of all",
      "Neither arrangement delivers power to the load, because a diode cannot carry current",
      "Half-wave wastes about half the power, while the bridge circuit makes use of both halves of the cycle",
    ],
    correctIndex: 3,
    explanation:
      "The half-wave circuit throws away the blocked half of the cycle and therefore about half the available power, whereas the bridge circuit delivers current to the load throughout both halves, so far less power is wasted.",
    evidence:
      "Half-wave rectification uses only one half of the cycle and so loses about half the power, while full-wave rectification uses both halves.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-13.1",
    concept: "power use in rectification",
  },
  {
    key: "xii-elec-half-wave-output-power",
    text: "An alternating source of 240 mW feeds a rectifier built from a single diode. If about half the power of the source is discarded in this half-wave arrangement, how much power reaches the load?",
    options: ["60 mW", "120 mW", "240 mW", "180 mW"],
    correctIndex: 1,
    explanation:
      "Discarding one half of 240 mW leaves 240 mW divided by two, which is 120 mW for the load to use.",
    evidence:
      "A half-wave rectifier passes only one half of the alternating cycle, and about half the available power is lost in the process.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-13.1",
    concept: "half-wave power calculation",
  },
  {
    key: "xii-elec-full-wave-smoother-output",
    text: "Both a half-wave and a full-wave rectifier are fed from the same alternating supply. Why is the direct current from the full-wave circuit the smoother of the two?",
    options: [
      "Its pulses of direct current arrive twice as often, so the gaps between them are shorter and the ripple is smaller",
      "The diodes of the bridge have a lower resistance, which steadies the output voltage",
      "The bridge circuit raises the frequency of the alternating supply before rectifying it",
      "The half-wave circuit sends its output in the reverse direction during the blocked half cycle",
    ],
    correctIndex: 0,
    explanation:
      "A full-wave circuit delivers current during both halves of every cycle, so its pulses come twice as frequently as those of a half-wave circuit, leaving shorter gaps and therefore a smaller ripple in the direct current.",
    evidence:
      "Full-wave rectification delivers current during both halves of each cycle, which makes its direct current output smoother than the output of a half-wave rectifier.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-13.1",
    concept: "smoothness of direct current",
  },
  {
    key: "xii-elec-bridge-conduction-sequence",
    text: "In a bridge rectifier the four diodes are arranged so that a load takes direct current from an alternating source. Which description fits the conduction during the first half of a cycle?",
    options: [
      "The two diodes on the same arm conduct together and drive the current through the load in opposite senses on alternate half cycles",
      "All four diodes conduct at the same time so that the load receives four times the current",
      "A pair of diodes at opposite corners of the bridge conduct together and drive the load in one sense, and the other pair takes over on the second half cycle",
      "The four diodes conduct one after another in turn, each handling one quarter of every cycle",
    ],
    correctIndex: 2,
    explanation:
      "In a bridge a diagonally opposite pair of diodes is forward biased on each half cycle while the other pair is reverse biased, so the current through the load always runs the same way round.",
    evidence:
      "In a bridge rectifier one pair of diodes conducts on one half of the alternating cycle and the other pair on the second half, so the load current is always in the same direction.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-13.1",
    concept: "bridge conduction order",
  },
  {
    key: "xii-elec-full-wave-average-current",
    text: "In a half-wave circuit the load carries 0.60 A while the diode conducts and no current at all in the other half of the cycle. Taking the two halves of a cycle as equal in time, a bridge rectifier on the same source carries 0.60 A through the load during both halves. How does the average load current of the bridge circuit compare with that of the half-wave circuit?",
    options: [
      "Half as large as the half-wave value",
      "The same as the half-wave value",
      "Four times as large as the half-wave value",
      "Twice as large as the half-wave value",
    ],
    correctIndex: 3,
    explanation:
      "The half-wave average is 0.60 A for half of each cycle, that is 0.30 A, while the bridge delivers 0.60 A throughout the whole cycle, so its average is twice the half-wave figure.",
    evidence:
      "A full-wave rectifier passes current during both halves of the cycle, which raises its average output current above that of a half-wave rectifier.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-13.1",
    concept: "average rectified current",
  },
  {
    key: "xii-elec-ripple-frequency-comparison",
    text: "A half-wave rectifier and a full-wave bridge rectifier are both fed from the same 50 Hz alternating supply. How do the ripple frequencies in their direct current outputs compare?",
    options: [
      "Both give the same 50 Hz ripple, since the supply frequency is the same for each",
      "The half-wave ripple is 50 Hz while the bridge ripple is 100 Hz, twice as high",
      "The half-wave ripple is 25 Hz while the bridge ripple is 100 Hz, four times as high",
      "The half-wave ripple is 50 Hz while the bridge ripple has no ripple at all",
    ],
    correctIndex: 1,
    explanation:
      "A half-wave circuit delivers one pulse per supply cycle, so its ripple repeats at the supply frequency of 50 Hz, whereas a bridge delivers two pulses per cycle and its ripple repeats at 100 Hz, which is why its output is the smoother of the two.",
    evidence:
      "The ripple frequency of a half-wave rectifier equals the supply frequency, while that of a full-wave rectifier is twice the supply frequency.",
    questionType: "COMPARISON",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-13.1",
    concept: "ripple frequency",
  },
  {
    key: "xii-elec-rectifier-two-statements",
    text: "Two claims about rectifying circuits are made. (I) A half-wave circuit passes only one half of the alternating cycle, so about half the available power is discarded. (II) The bridge circuit needs a centre-tapped transformer, and the centre-tapped arrangement needs four diodes. Which combination of these claims is right?",
    options: [
      "Only I is correct",
      "Only II is correct",
      "Both I and II are correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 0,
    explanation:
      "Claim I describes half-wave rectification correctly, but claim II has the two arrangements exchanged, since it is the centre-tapped circuit that uses a tapped transformer while the bridge is built from four diodes.",
    evidence:
      "Half-wave rectification loses about half the available power, and a bridge rectifier uses four diodes while a centre-tapped circuit uses two.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-13.1",
    concept: "rectifier claims check",
  },
  {
    key: "xii-elec-ptype-doping",
    text: "A pure semiconductor crystal is doped with a small quantity of a trivalent impurity. What is the result?",
    options: [
      "The crystal becomes n-type and electrons become its majority carriers",
      "The crystal becomes n-type but holes become its majority carriers",
      "The crystal becomes p-type and holes become its majority carriers",
      "The crystal becomes p-type and electrons become its majority carriers",
    ],
    correctIndex: 2,
    explanation:
      "Each trivalent impurity atom has three fewer valence electrons than the host atom, so it can accept an electron from the lattice and leave behind a vacancy that behaves as a positive carrier, making the material a p-type semiconductor in which holes predominate.",
    evidence:
      "Doping a semiconductor with a trivalent impurity produces a p-type material in which holes are the majority charge carriers.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-13.2",
    concept: "p-type doping",
  },
  {
    key: "xii-elec-ntype-doping",
    text: "When a semiconductor crystal is doped with a small quantity of a pentavalent impurity, what follows?",
    options: [
      "The material becomes n-type and free electrons are its majority carriers",
      "The material becomes p-type and holes are its majority carriers",
      "The material becomes n-type and holes are its majority carriers",
      "The material becomes p-type and free electrons are its majority carriers",
    ],
    correctIndex: 0,
    explanation:
      "A pentavalant atom carries one valence electron more than the host atom, and this extra electron is free to move through the lattice, so the doped material becomes n-type with electrons as the majority carriers.",
    evidence:
      "Doping a semiconductor with a pentavalent impurity produces an n-type material in which free electrons are the majority charge carriers.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-13.2",
    concept: "n-type doping",
  },
  {
    key: "xii-elec-junction-formation-sequence",
    text: "A block of p-type material is brought into contact with a block of n-type material. Which sequence of events takes place at the contact?",
    options: [
      "The electric field of the junction appears first and the carriers then line up along it",
      "The carriers stay inside their own blocks, and a depletion region forms only once a battery is connected",
      "The holes and electrons drift out of the contact until both blocks are left completely neutral",
      "Holes and electrons diffuse across the contact and recombine, leaving fixed ions that form the depletion region and its electric field",
    ],
    correctIndex: 3,
    explanation:
      "The large concentration difference pushes majority carriers across the contact, where holes and electrons recombine, and the ions left without carriers form the depletion region whose field opposes any further diffusion.",
    evidence:
      "At the contact of a p-type and an n-type block the majority carriers diffuse across and recombine, leaving a depletion region of fixed ions.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-13.2",
    concept: "junction formation",
  },
  {
    key: "xii-elec-forward-bias-narrows-depletion",
    text: "The positive terminal of a battery is joined to the p-side of a p-n junction and the negative terminal to the n-side. What happens at the junction?",
    options: [
      "The depletion layer widens and the junction passes no current at all",
      "The depletion layer narrows, the barrier to the majority carriers falls, and current flows across the junction",
      "The depletion layer narrows, but the junction still carries only a leakage current",
      "The depletion layer keeps its width while the current in the circuit rises steadily",
    ],
    correctIndex: 1,
    explanation:
      "Forward bias pushes the majority carriers towards the contact, where they neutralise the fixed ions, so the depletion layer becomes thin and the barrier potential drops until the carriers can cross and a current flows.",
    evidence:
      "Forward bias narrows the depletion region and allows the majority carriers to cross the junction, so a current flows.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-13.2",
    concept: "forward bias effect",
  },
  {
    key: "xii-elec-reverse-bias-widens-depletion",
    text: "In this arrangement the positive terminal of a battery is joined to the n-side of a p-n junction and the negative terminal to the p-side. How does the junction behave?",
    options: [
      "The depletion layer narrows and a large current flows from the n-side to the p-side",
      "The depletion layer narrows until the two sides touch and short circuit the supply",
      "The depletion layer keeps the same width, so the junction carries the same current as before",
      "The depletion layer widens, the barrier to the majority carriers rises, and only a tiny leakage current passes",
    ],
    correctIndex: 3,
    explanation:
      "Reverse bias pulls the majority carriers away from the contact, uncovering more fixed ions, so the depletion layer grows thicker and its barrier rises until only the minority carriers can be swept across, giving a very small leakage current.",
    evidence:
      "Reverse bias widens the depletion region and raises the barrier, so only a small leakage current can pass through the junction.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-13.2",
    concept: "reverse bias effect",
  },
  {
    key: "xii-elec-minority-carrier-leakage",
    text: "A reverse biased p-n junction still passes a very small current. Which charge carriers are responsible for that leakage?",
    options: [
      "The majority carriers, which the battery forces across the junction",
      "Free electrons that leak out of the battery terminals into the junction",
      "The minority carriers, which reach the depletion region and are swept across by the strong field there",
      "The photons absorbed inside the depletion region",
    ],
    correctIndex: 2,
    explanation:
      "Reverse bias does not stop the minority carriers altogether, since some are always present from thermal effects, and the strong field in the widened depletion region sweeps these across the junction to give the small leakage current.",
    evidence:
      "The small leakage current in a reverse biased junction is carried by the minority charge carriers that are swept across the depletion region.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-13.2",
    concept: "minority carrier conduction",
  },
  {
    key: "xii-elec-bias-conditions-comparison",
    text: "A p-n junction is first studied with the positive terminal of a battery joined to the p-side, and then with that terminal joined to the n-side. How do the two arrangements compare?",
    options: [
      "The first is forward bias, where the depletion layer narrows and a large current flows, and the second is reverse bias, where the layer widens and only leakage flows",
      "The first is reverse bias, where the depletion layer widens and a large current flows, and the second is forward bias, where only leakage flows",
      "Both are forward bias, since the depletion layer narrows in each of them",
      "Both are reverse bias, since a p-n junction passes no current under either arrangement",
    ],
    correctIndex: 0,
    explanation:
      "Joins to the p-side make the junction forward biased and thin the depletion layer so that current flows, while joins to the n-side make it reverse biased and widen the layer until only a leakage current is left.",
    evidence:
      "Forward bias means joining the positive terminal to the p-side, and reverse bias means joining the positive terminal to the n-side of the junction.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-13.2",
    concept: "forward and reverse bias",
  },
  {
    key: "xii-elec-diode-one-way-valve",
    text: "Why is a p-n junction often compared with a valve that permits current to pass in one direction only?",
    options: [
      "Because the depletion layer is made of a conducting metal that blocks current in both directions",
      "Because only one of the two bias combinations lowers the barrier enough for the majority carriers to cross, while the other raises it and holds them back",
      "Because the majority carriers of the two sides are identical and so cannot pass one another",
      "Because the field of the junction is strong in one bias and entirely absent in the other",
    ],
    correctIndex: 1,
    explanation:
      "Forward bias reduces the barrier and lets the majority carriers cross, whereas reverse bias increases the barrier and stops them, so a junction conducts freely one way and hardly at all the other, just like a one-way valve.",
    evidence:
      "A p-n junction conducts strongly in the forward direction and hardly at all in the reverse direction, which is why a diode is known as a one-way device.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-13.2",
    concept: "valve action of diode",
  },
  {
    key: "xii-elec-swapped-supply-polarity",
    text: "A 6.0 V supply drives a diode and a lamp in series, and the lamp is lit when the positive terminal of the supply is joined to the p-side of the diode. The two supply leads are then interchanged. What happens to the lamp?",
    options: [
      "It burns more brightly, since the current in the circuit has increased",
      "It goes out, because the junction is now reverse biased and only a tiny leakage current flows",
      "It burns at about half the brightness, since only part of the cycle now passes",
      "It goes out for a moment and then glows steadily at full brightness",
    ],
    correctIndex: 1,
    explanation:
      "Interchanging the leads puts the positive terminal on the n-side, which reverse biases the junction, widens the depletion layer and leaves only a leakage current, which is too small to light the lamp.",
    evidence:
      "A diode allows current to pass only in the forward direction, so reversing the supply polarity reduces the circuit current to a small leakage value.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-13.2",
    concept: "effect of reversing bias",
  },
  {
    key: "xii-elec-forward-bias-barrier-reduction",
    text: "The barrier potential across a p-n junction is 0.70 V. When a forward bias of 0.50 V is applied across that same junction, what is left of the barrier, and what current follows?",
    options: ["1.20 V, and no current can pass", "0.20 V, so a small current passes", "0.35 V, so a large current passes", "0.00 V, so the current is at its maximum"],
    correctIndex: 1,
    explanation:
      "A forward bias of 0.50 V opposes 0.50 V of the 0.70 V barrier, leaving 0.70 - 0.50 = 0.20 V to be surmounted, and the lowered barrier is small enough for a current to pass.",
    evidence:
      "Forward bias reduces the barrier potential of the junction, and once the barrier is overcome a current flows through the junction.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-13.2",
    concept: "barrier reduction by bias",
  },
  {
    key: "xii-elec-photon-quantum-packet",
    text: "Planck's quantum hypothesis deals with the way in which light interacts with matter. What does it state?",
    options: [
      "Light is emitted and absorbed in separate packets of energy, each of which is called a photon",
      "Light travels as a continuous wave whose energy is the same for every part of the wave",
      "Light carries energy only when it is reflected from a surface",
      "Light consists of material particles that are too large to be treated as quanta",
    ],
    correctIndex: 0,
    explanation:
      "Planck proposed that light is emitted and absorbed in discrete quanta rather than continuously, and Einstein named these packets of energy photons.",
    evidence:
      "Light is emitted or absorbed in discrete packets of energy called photons, each carrying energy E = h nu.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-14.1",
    concept: "photon concept",
  },
  {
    key: "xii-elec-photon-energy-colour-comparison",
    text: "Two sources of the same intensity send light of different colours on a surface, one red with a long wavelength and one violet with a short wavelength. Which comparison of the photons in the two beams is correct?",
    options: [
      "The red photons carry more energy, because a longer wavelength means more energy in each photon",
      "Both colours give photons of the same energy, because the two beams have the same intensity",
      "The violet photons carry more energy, because their shorter wavelength means a higher frequency",
      "The violet photons carry less energy, because a shorter wavelength fits more photons into the beam",
    ],
    correctIndex: 2,
    explanation:
      "Photon energy is E = h nu, and since the violet light has the shorter wavelength it has the higher frequency and so the larger energy in each photon, while the red light with its longer wavelength gives lower energy photons.",
    evidence:
      "Since the energy of a photon is E = h nu, light of higher frequency carries more energy per photon and light of longer wavelength carries less.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-14.1",
    concept: "energy and colour",
  },
  {
    key: "xii-elec-photon-energy-numerical",
    text: "Light of frequency 5.0 x 10^14 Hz falls on a surface. Taking the Planck constant as 6.6 x 10^-34 J s, what is the energy carried by one photon of this light?",
    options: ["1.3 x 10^-19 J", "6.6 x 10^-19 J", "3.3 x 10^-18 J", "3.3 x 10^-19 J"],
    correctIndex: 3,
    explanation:
      "Using E = h nu the energy is 6.6 x 10^-34 J s multiplied by 5.0 x 10^14 Hz, which works out as 33 x 10^-20 J, that is 3.3 x 10^-19 J for the single photon.",
    evidence:
      "The energy of a photon is given by E = h nu, where h is the Planck constant and nu is the frequency of the radiation.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-14.1",
    concept: "photon energy value",
  },
  {
    key: "xii-elec-photon-count-numerical",
    text: "A beam of light of frequency 5.0 x 10^14 Hz delivers a total energy of 1.98 x 10^-18 J to a surface. Taking the Planck constant as 6.6 x 10^-34 J s, how many photons does this energy represent?",
    options: ["6.0 x 10^5 photons", "6.0 photons", "60 photons", "0.6 photons"],
    correctIndex: 1,
    explanation:
      "Each photon of this frequency carries 6.6 x 10^-34 x 5.0 x 10^14 = 3.3 x 10^-19 J, and the number of photons is therefore 1.98 x 10^-18 divided by 3.3 x 10^-19, which is 6.0.",
    evidence:
      "Light consists of photons each carrying energy E = h nu, so the number of photons in a given amount of energy is that energy divided by h nu.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-14.1",
    concept: "photon count",
  },
  {
    key: "xii-elec-threshold-frequency-statements",
    text: "Two claims about the photoelectric effect are made. (I) Electrons leave a metal surface only when the light falling on it has a frequency above the threshold frequency of that metal. (II) Making the light brighter can release electrons from a metal even when the frequency stays below the threshold value. Which combination of these claims is right?",
    options: [
      "Only I is correct",
      "Only II is correct",
      "Both I and II are correct",
      "Both I and II are incorrect",
    ],
    correctIndex: 0,
    explanation:
      "Claim I is correct, because a single photon must carry at least the work function of the metal, and claim II is wrong, since brightness adds more photons of the same insufficient energy rather than raising the energy of any one of them.",
    evidence:
      "Photoelectric emission occurs only when the frequency of the incident light exceeds the threshold frequency of the metal surface.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-14.1",
    concept: "threshold frequency claim",
  },
];
