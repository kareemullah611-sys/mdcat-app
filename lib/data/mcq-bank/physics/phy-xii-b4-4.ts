import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-modern2-ripple-capacitor-discharge",
    text: "In a rectifier whose output is smoothed by a capacitor connected across the load, the output voltage dips a little between successive charging peaks. This small periodic variation riding on an almost steady DC level is",
    options: [
      "a small ripple superimposed on an almost steady DC level",
      "a drop to zero between every half cycle, as in an unsmoothed supply",
      "an output that reverses sign at each successive peak",
      "a voltage that rises steadily with time as charge accumulates",
    ],
    correctIndex: 0,
    explanation:
      "Between peaks no fresh charge reaches the capacitor, so it discharges through the load and its voltage falls a little; the load current stays nearly constant, so what is left is a nearly steady DC level carrying a small ripple.",
    evidence:
      "In a rectifier the smoothing capacitor charges at the peaks and discharges through the load between them, leaving a small ripple on the DC output.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-13.1",
    concept: "ripple in rectifier output",
  },
  {
    key: "xii-modern2-ripple-double-capacitance",
    text: "A smoothing capacitor supplies a load current I to the load for a time t between successive charging peaks, so it loses charge It and the ripple voltage falls by It/C. If C is doubled while I and t are unchanged, the ripple voltage",
    options: [
      "doubles, because a larger capacitor takes longer to charge",
      "is unchanged, because ripple depends only on the supply frequency",
      "halves, because the same lost charge now spreads over twice the capacitance",
      "falls to zero, because a large capacitor never discharges",
    ],
    correctIndex: 2,
    explanation:
      "The charge lost between peaks is set by the load current and the time between peaks, both unchanged here, so the voltage drop is It/C and doubling C halves that drop.",
    evidence:
      "The ripple of a capacitor-filtered rectifier is the charge lost between peaks divided by the capacitance, so a larger capacitance gives a smaller ripple.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 86,
    outcome: "PHY-13.1",
    concept: "ripple and capacitance",
  },
  {
    key: "xii-modern2-smoothing-cycle-sequence",
    text: "During one complete cycle of the supply in a capacitor-smoothed rectifier, the capacitor in the correct order",
    options: [
      "keeps discharging throughout and then charges briefly at the very end",
      "charges in step with each peak and then discharges through the load until the next peak",
      "discharges while the diode conducts and charges while the diode blocks",
      "charges during the negative half cycle only and never discharges",
    ],
    correctIndex: 1,
    explanation:
      "The diode conducts near every peak and tops the capacitor up, while between peaks the diode is cut off and the capacitor alone feeds the load, so charging and discharging alternate in that order.",
    evidence:
      "In a rectifier with a smoothing capacitor the capacitor is charged at each peak and then discharges through the load until the next peak arrives.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 84,
    outcome: "PHY-13.1",
    concept: "capacitor charge discharge cycle",
  },
  {
    key: "xii-modern2-one-way-element-role",
    text: "A rectifier is needed to turn alternating current into unidirectional current. The property of the diode that allows this is that it",
    options: [
      "conducts readily in the forward direction and offers very large resistance in the reverse direction",
      "stores charge on one side of the junction and releases it on the other",
      "converts the alternating current into direct current inside the semiconductor itself",
      "keeps the forward current equal to the reverse current at every applied voltage",
    ],
    correctIndex: 3,
    explanation:
      "The junction conducts strongly for forward bias and blocks almost completely for reverse bias, so current is passed in one direction only and the diode behaves as a one-way valve.",
    evidence:
      "A p-n junction diode offers very low resistance to forward bias and very high resistance to reverse bias, so it acts as a one-way valve for current.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-13.1",
    concept: "diode as one-way valve",
  },
  {
    key: "xii-modern2-n-type-majority-carriers",
    text: "Silicon is doped with a pentavalent impurity such as phosphorus to make an n-type semiconductor. In this material",
    options: [
      "the donated electrons outnumber the holes, so electrons are the majority carriers",
      "the donated holes outnumber the electrons, so holes are the majority carriers",
      "electrons and holes stay equal because the impurity atom is neutral",
      "only the impurity atoms conduct, while the silicon atoms stay fixed",
    ],
    correctIndex: 0,
    explanation:
      "A pentavalent dopant uses four of its valence electrons in bonding and leaves the fifth loosely bound, so the electron concentration rises above the hole concentration and electrons become the majority carriers.",
    evidence:
      "Doping silicon with a pentavalent impurity produces an n-type semiconductor in which electrons are the majority charge carriers.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-13.2",
    concept: "n-type doping and carriers",
  },
  {
    key: "xii-modern2-p-type-statement-pair",
    text: "Doping silicon with a trivalent impurity leads to these two statements. I: the majority charge carriers of the material are holes. II: since a hole is a missing bonding electron, it carries current like a positive charge. Both statements are",
    options: [
      "wrong, statement I only, because a hole is really a free electron",
      "right for both, because the bonding vacancy left by the dopant acts as a mobile positive charge",
      "right for statement II only, because holes appear only in n-type material",
      "wrong for both, because a trivalent dopant adds free electrons to the band",
    ],
    correctIndex: 1,
    explanation:
      "A trivalent dopant can form only three of the four covalent bonds of silicon, so a vacancy is left; when a neighbouring electron fills it the vacancy moves onward, and this moving vacancy behaves as a positive carrier, which makes both statements true.",
    evidence:
      "Trivalent doping of silicon produces a p-type semiconductor in which holes are the majority charge carriers.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-13.2",
    concept: "p-type holes",
  },
  {
    key: "xii-modern2-reverse-saturation-current",
    text: "Even a p-n junction held in reverse bias keeps passing a small but nearly constant reverse current. This current survives mainly because",
    options: [
      "the applied voltage lowers the barrier and lets the majority carriers cross",
      "the junction turns ohmic and behaves like a small resistance",
      "minority carriers already present on each side are swept across the junction",
      "the depletion layer fills with free electrons arriving from the contacts",
    ],
    correctIndex: 2,
    explanation:
      "Thermal agitation keeps producing a few minority carriers on both sides of the junction, and the reverse bias field sweeps them across it, so a small saturation current persists and hardly grows with voltage.",
    evidence:
      "A reverse-biased p-n junction carries a small saturation current produced by the few minority charge carriers thermally generated on either side of the junction.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "PHY-13.2",
    concept: "reverse saturation current",
  },
  {
    key: "xii-modern2-threshold-frequency-onset",
    text: "The threshold frequency of a photosensitive metal is best described as the frequency at which",
    options: [
      "the energy of each incident photon is twice the work function",
      "photoelectrons leave the surface carrying a fixed kinetic energy of 1 eV",
      "light of any intensity just fails to eject electrons from the surface",
      "photoelectrons begin to leave the surface with zero maximum kinetic energy",
    ],
    correctIndex: 3,
    explanation:
      "At the threshold frequency one photon carries exactly the work function, so all of it is used in escaping and the emitted electrons have no kinetic energy; at any lower frequency the work function cannot be met at all.",
    evidence:
      "At the threshold frequency the energy of a photon equals the work function, so the maximum kinetic energy of the photoelectrons is zero.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "PHY-14.1",
    concept: "threshold frequency",
  },
  {
    key: "xii-modern2-photoelectron-max-energy",
    text: "Light of frequency 1.0 x 10^15 Hz falls on a metal of work function 2.0 eV. Taking h = 6.6 x 10^-34 J s and 1 eV = 1.6 x 10^-19 J, the maximum kinetic energy of the emitted photoelectrons is",
    options: [
      "2.1 eV",
      "4.1 eV",
      "0 eV, because this frequency lies below the threshold frequency",
      "6.1 eV",
    ],
    correctIndex: 0,
    explanation:
      "The photon energy is h nu = 6.6 x 10^-19 J = 4.1 eV, which is above the 2.0 eV work function, so the surplus 4.1 - 2.0 = 2.1 eV becomes the maximum kinetic energy of the fastest photoelectrons.",
    evidence:
      "Einstein's photoelectric equation h nu = W + KEmax gives the maximum kinetic energy of the photoelectrons as the photon energy minus the work function of the metal.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "PHY-14.1",
    concept: "photoelectron kinetic energy",
  },
  {
    key: "xii-modern2-intensity-threshold-statements",
    text: "Statement I: at a fixed frequency above threshold, raising the intensity of the incident light raises the number of photoelectrons emitted each second but leaves their maximum kinetic energy unchanged. Statement II: for a given metal the threshold frequency is fixed by the material and is the same whatever intensity of light is used. Both statements are",
    options: [
      "false, because brighter light always raises the kinetic energy of the electrons",
      "false, because the threshold frequency of a metal rises with the intensity used",
      "true, because intensity changes the number of photons while the work function stays fixed",
      "true for statement I only, because stronger light always alters the work function",
    ],
    correctIndex: 2,
    explanation:
      "Raising the intensity at a fixed frequency increases the photon flux without changing the energy h nu of each photon, so more electrons leave but each carries the same surplus energy; the threshold frequency follows from the fixed work function and the value of h, so it cannot depend on intensity.",
    evidence:
      "The photoelectric effect shows that the number of photoelectrons depends on the intensity of light while their maximum kinetic energy depends only on the frequency of the light.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 89,
    outcome: "PHY-14.1",
    concept: "intensity and threshold",
  },
  {
    key: "xii-modern2-absorption-dark-line-cause",
    text: "Light from a hot continuous source is made to pass through a cooler vapour of the same element before reaching a spectroscope, and dark lines appear in the spectrum. These dark lines are produced because",
    options: [
      "the vapour scatters the light of the source in every direction",
      "the cool vapour absorbs exactly those wavelengths that it would itself emit",
      "the vapour re-radiates the absorbed energy as white light",
      "the source already gives out less light at those wavelengths than the vapour",
    ],
    correctIndex: 1,
    explanation:
      "The atoms of the vapour possess the same discrete energy levels as the emitting source, so they remove from the beam precisely the photons they could emit, and those missing wavelengths appear as dark lines against the continuous background.",
    evidence:
      "A cool vapour placed in the path of continuous light absorbs the same wavelengths that it would emit, producing dark lines in the absorption spectrum.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 85,
    outcome: "PHY-15.1",
    concept: "absorption dark lines",
  },
  {
    key: "xii-modern2-emission-absorption-pattern-compare",
    text: "The line emission spectrum of a hot gas and the absorption spectrum of the same element in cool vapour differ mainly in that",
    options: [
      "the emission spectrum is continuous while the absorption spectrum is discontinuous",
      "the emission spectrum needs no continuous source behind the gas",
      "the absorption spectrum shows dark lines on a bright continuous background",
      "absorption lines lie at longer wavelengths than the matching emission lines",
    ],
    correctIndex: 2,
    explanation:
      "Hot matter radiates at its own characteristic wavelengths on a dark background, while cool vapour removes those same wavelengths from a continuous beam, so one spectrum is bright lines on darkness and the other dark lines on brightness.",
    evidence:
      "Line emission spectra show bright lines on a dark background whereas absorption spectra show dark lines on a bright continuous background at the same wavelengths.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 86,
    outcome: "PHY-15.1",
    concept: "emission versus absorption pattern",
  },
  {
    key: "xii-modern2-absorption-line-stability-sequence",
    text: "Continuous light from a hot source is passed through a cool atomic vapour. Considering three changes in turn, the dark lines in the absorption spectrum will",
    options: [
      "move to longer wavelengths when the vapour is cooled, because cooling narrows the levels",
      "vanish when the vapour is cooled and return at full contrast when its density is raised",
      "stay at the same wavelengths for the first two changes but move to new wavelengths for the third",
      "grow finer when the vapour is cooled and coarser when a different element is used",
    ],
    correctIndex: 2,
    explanation:
      "The positions of the lines are fixed by the atomic energy levels of the absorbing vapour, so cooling it or making it denser only alters how strongly and how sharply the lines show, whereas a different element has different energy levels and so absorbs different wavelengths.",
    evidence:
      "The wavelengths absorbed by an element are fixed by its energy levels, so changing the temperature, pressure or quantity of the same vapour does not shift them.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 84,
    outcome: "PHY-15.1",
    concept: "absorption line positions",
  },
  {
    key: "xii-modern2-aluminium-neutron-count",
    text: "A neutral atom of aluminium is written as ^27_13Al. The number of neutrons in its nucleus is",
    options: ["14", "13", "27", "40"],
    correctIndex: 0,
    explanation:
      "The lower number 13 is the atomic number and the upper number 27 is the mass number that counts all nucleons, so the neutron count is A - Z = 27 - 13 = 14.",
    evidence:
      "In a nuclide symbol the lower number is the atomic number and the upper number is the mass number, so the number of neutrons is the difference A - Z.",
    questionType: "APPLICATION",
    difficulty: "EASY",
    relevance: 93,
    outcome: "PHY-16.1",
    concept: "neutron count from nuclide",
  },
  {
    key: "xii-modern2-uranium-nuclide-symbol",
    text: "A radioactive nucleus contains 92 protons and 146 neutrons. In nuclide notation this nucleus is written as",
    options: ["146_92U", "92_146U", "238_146U", "238_92U"],
    correctIndex: 3,
    explanation:
      "The mass number counts every nucleon, 92 + 146 = 238, while the atomic number is the proton count 92, which also identifies the element as uranium, so the symbol carries 238 above 92 beside U.",
    evidence:
      "A nuclide is written with the mass number above and the atomic number below the element symbol, so 92 protons with 146 neutrons give 238 over 92 for uranium.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-16.1",
    concept: "nuclide notation",
  },
  {
    key: "xii-modern2-alpha-daughter-numbers",
    text: "A nuclide of mass number 220 and atomic number 84 decays by emitting an alpha particle. The mass number, atomic number and number of neutrons in the daughter nucleus are respectively",
    options: ["216, 82 and 134", "216, 84 and 132", "220, 82 and 138", "212, 80 and 132"],
    correctIndex: 1,
    explanation:
      "The alpha particle carries away two protons and two neutrons, so the mass number drops by 4 to 216 and the atomic number by 2 to 82, which leaves 216 - 82 = 134 neutrons in the daughter nucleus.",
    evidence:
      "In alpha decay the emitted particle contains two protons and two neutrons, so the mass number of the daughter falls by 4 and its atomic number by 2.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "PHY-16.1",
    concept: "daughter nuclide numbers",
  },
  {
    key: "xii-modern2-heavy-nucleus-instability",
    text: "Heavy nuclei are unstable because the electrostatic repulsion between their protons finally outgrows the strong force that binds them. The neutron to proton ratio therefore",
    options: [
      "falls towards 1 in the heaviest nuclides",
      "stays at 1 in every stable nuclide",
      "rises with mass number, since extra neutrons add binding without adding repulsion",
      "falls with mass number, since heavy nuclei need fewer neutrons",
    ],
    correctIndex: 2,
    explanation:
      "Only protons and neutrons attract through the strong force while every pair of protons repels, so as the proton number climbs more neutrons are needed to supply binding without extra repulsion, and the ratio grows with mass number.",
    evidence:
      "Stable nuclides contain progressively more neutrons than protons as the mass number increases, because extra neutrons add nuclear binding without adding electrostatic repulsion.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-16.2",
    concept: "nuclear stability and ratio",
  },
  {
    key: "xii-modern2-decay-energy-mass-defect",
    text: "In one decay the total rest mass of the products is 0.0054 u less than the mass of the parent nuclide. Using 1 u c^2 = 931.5 MeV, the energy released in the decay is",
    options: ["about 5.0 MeV", "about 373 MeV", "about 0.9 MeV", "about 0.005 MeV"],
    correctIndex: 0,
    explanation:
      "The released energy is the mass defect converted by E = mc^2, so 0.0054 u multiplied by 931.5 MeV per u gives 5.03 MeV, which leaves mainly as kinetic energy of the decay products.",
    evidence:
      "The energy released in a nuclear decay equals the mass defect of the reaction multiplied by the square of the speed of light, with 1 u equivalent to 931.5 MeV.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 90,
    outcome: "PHY-16.2",
    concept: "decay energy release",
  },
  {
    key: "xii-modern2-product-energy-sharing",
    text: "A decaying nucleus shares the released energy as kinetic energy between two products that fly apart with equal and opposite momenta. The product",
    options: [
      "of larger mass takes the larger share of the kinetic energy",
      "of smaller mass takes the larger share of the kinetic energy",
      "takes exactly half the energy, whatever its mass",
      "of larger mass stays at rest while the other carries all of it",
    ],
    correctIndex: 1,
    explanation:
      "Equal and opposite momenta mean both products carry the same value of p, and from K = p^2/2m the smaller mass must have the larger kinetic energy, which is why an alpha particle takes away most of the released energy.",
    evidence:
      "The two products of a nuclear decay leave with equal and opposite momenta, so the lighter particle receives the greater share of the released kinetic energy.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 87,
    outcome: "PHY-16.2",
    concept: "energy sharing in decay",
  },
  {
    key: "xii-modern2-half-life-amount-independence",
    text: "The radioactive decay law and the rate law of a first-order chemical reaction share the feature that the half-life",
    options: [
      "does not depend on how much of the substance was present at the start",
      "grows shorter as the concentration of the reactant rises",
      "is longer at a high temperature and shorter at a low one",
      "falls to zero once the substance has been fully used up",
    ],
    correctIndex: 0,
    explanation:
      "Both processes follow an exponential law in which the fraction remaining depends only on how many half-lives have passed, so the time needed to halve the amount is fixed by the rate constant alone and not by the amount present.",
    evidence:
      "The half-life of a first-order process such as radioactive decay depends only on the rate constant and not on the initial amount of the substance.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "PHY-16.3",
    concept: "half-life independence",
  },
  {
    key: "xii-modern2-first-order-half-life-value",
    text: "A first-order chemical reaction has a rate constant of 0.1155 h^-1. Using 0.693 divided by the rate constant, its half-life is",
    options: ["0.77 h", "8.7 h", "13.9 h", "6.0 h"],
    correctIndex: 3,
    explanation:
      "For any first-order process the half-life is 0.693 divided by the rate constant, and 0.693 / 0.1155 h^-1 = 6.0 h, the same expression that is used for a radioactive decay constant.",
    evidence:
      "The half-life of a first-order process is 0.693 divided by the rate constant, and the same expression holds for radioactive decay with lambda in place of k.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 84,
    outcome: "PHY-16.3",
    concept: "first-order half-life",
  },
  {
    key: "xii-modern2-decay-kinetics-statement-pair",
    text: "Consider the following two statements. I: in radioactive decay the rate of loss of nuclei is proportional to the number of undecayed nuclei present, exactly as a first-order chemical rate is proportional to reactant concentration. II: unlike a chemical reaction, radioactivity cannot be speeded up by raising the temperature, because its rate is set by the nucleus and not by collisions. Both statements are",
    options: [
      "false, because a chemical rate is always proportional to the concentration of products",
      "true, and both express the first-order character of nuclear decay",
      "true for statement I only, since temperature also affects nuclear decay",
      "false, because a first-order rate is independent of the amount present",
    ],
    correctIndex: 1,
    explanation:
      "Decay follows N = N0 exp(-lambda t), the integrated form of a first-order rate law, and since the process is a property of the nucleus rather than of molecular encounters, changing the temperature leaves the decay constant untouched.",
    evidence:
      "Radioactive decay follows the first-order law in which the rate is proportional to the number of nuclei present, and its decay constant is independent of temperature.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 88,
    outcome: "PHY-16.3",
    concept: "decay versus first-order kinetics",
  },
  {
    key: "xii-modern2-gray-sievert-relation",
    text: "Absorbed dose in tissue is expressed in gray, yet the biological damage of a given absorbed dose depends on the kind of radiation, so the equivalent dose is quoted in sievert. One sievert equals",
    options: [
      "the same absorbed dose written in a different unit",
      "the absorbed dose divided by the half-life of the radionuclide",
      "the absorbed dose multiplied by the radiation weighting factor",
      "the absorbed dose divided by the radiation weighting factor",
    ],
    correctIndex: 2,
    explanation:
      "The gray measures energy deposited per kilogram, while the sievert adds the relative biological effectiveness of the radiation, so the equivalent dose is the gray value scaled by the weighting factor assigned to that radiation.",
    evidence:
      "The sievert is the equivalent dose unit and equals the absorbed dose in gray multiplied by the radiation weighting factor of the radiation concerned.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "PHY-16.4",
    concept: "gray and sievert relation",
  },
  {
    key: "xii-modern2-alpha-ionisation-contrast",
    text: "Alpha particles and gamma rays from the same sample are compared in their effect on matter. An alpha particle differs from a gamma ray in that it",
    options: [
      "ionises atoms far more strongly but travels only a short distance in tissue",
      "ionises atoms far more weakly but travels a long distance in tissue",
      "ionises nothing at all, because it carries no charge",
      "penetrates deeply, because its mass is very small",
    ],
    correctIndex: 0,
    explanation:
      "An alpha particle is a helium nucleus with a double charge and a large mass, so it deposits its energy densely in many ion pairs along a short track, whereas a neutral gamma photon crosses much further while creating relatively few ions.",
    evidence:
      "Alpha particles are strongly ionising because of their double charge but have very low penetrating power, while gamma rays penetrate far into matter and ionise weakly.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 87,
    outcome: "PHY-16.4",
    concept: "alpha versus gamma effect",
  },
  {
    key: "xii-modern2-tracer-gamma-requirement",
    text: "A radionuclide given to a patient in order to trace the path of a substance inside the body is chosen mainly because it emits gamma rays. Gamma rays suit this purpose because they",
    options: [
      "are stopped completely by a few centimetres of tissue",
      "penetrate out of the body and can be detected from outside it",
      "carry a charge that draws the tracer to the region of interest",
      "are absorbed only by bone, so the tracer marks the skeleton alone",
    ],
    correctIndex: 1,
    explanation:
      "A gamma photon is neutral and highly penetrating, so it escapes the body and can be registered by an external detector, whereas alpha and beta particles are absorbed within the tissues and never reach the detector.",
    evidence:
      "Gamma emitting radionuclides are used as tracers in medicine because their penetrating radiation can be detected outside the body.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "PHY-16.4",
    concept: "tracer choice of radiation",
  },
];
