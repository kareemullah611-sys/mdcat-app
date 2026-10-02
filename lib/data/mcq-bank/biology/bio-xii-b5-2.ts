import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-r2b-receptor-and-hormone-signal-routes",
    text: "A receptor in the wall of the ear converts a sound wave into an impulse, while adrenaline released in the same situation is carried to distant organs by the blood. Which comparison of the two routes is accurate?",
    options: [
      "The receptor produces an impulse that stays within its own nervous pathway, whereas the hormone travels in the blood and acts only on cells with matching receptors",
      "The receptor releases a chemical into the blood, so both routes deliver their message in the same way",
      "Neither route can carry a message beyond the tissue in which it was produced",
      "The hormone is converted into an impulse at the site of release, which lets it reach every cell at once",
    ],
    correctIndex: 0,
    explanation:
      "A receptor converts a stimulus into a nerve impulse that travels only along its own sensory pathway to a particular part of the brain, whereas a hormone is transported by the blood and acts only on target cells that carry receptors for it.",
    evidence:
      "Sensory receptors convert the energy of a stimulus into a nerve impulse, while hormones are carried in the blood and act only on their target cells.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "BIO-5.1",
    concept: "receptor and hormone routes",
  },
  {
    key: "xii-r2b-receptor-properties-claims",
    text: "Four claims about sensory receptors are given. I: each receptor is most sensitive to one particular form of energy. II: the receptor converts that energy into a nerve impulse. III: every receptor generates impulses that differ in size according to the strength of the stimulus. IV: a receptor that has not been stimulated keeps sending impulses along its sensory neurone. Which set of claims is correct?",
    options: ["I and II only", "II and IV only", "III and IV only", "I, II and III"],
    correctIndex: 3,
    explanation:
      "Claims I and II hold, since each receptor has its own adequate stimulus and turns it into an impulse. Claim III is wrong because an individual impulse is all-or-none, and claim IV is wrong because a receptor generates impulses only while it is being stimulated.",
    evidence: "Each sensory receptor responds best to a specific form of energy and converts that stimulus into a nerve impulse.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-5.1",
    concept: "receptor claims",
  },
  {
    key: "xii-r2b-pupil-response-reflex-division",
    text: "A student blinks at a sudden flash of light, and at the same moment the pupil of the eye becomes wider. The blink is a cranial somatic reflex, and the widening of the pupil is best described as",
    options: [
      "a reflex of the somatic system, because the muscle of the iris is a skeletal muscle",
      "an autonomic reflex, because the muscle of the iris is smooth muscle",
      "a reflex of the endocrine system, because a hormone acts on the iris",
      "a reflex whose control centre lies in the cerebrum, because it is consciously directed",
    ],
    correctIndex: 1,
    explanation:
      "Reflexes are sorted by their effector, and the muscle of the iris is smooth muscle under autonomic control, so a widened pupil is an autonomic reflex and not a somatic one.",
    evidence:
      "Reflexes are classified as somatic when the effector is skeletal muscle and as autonomic when the effector is smooth muscle or a gland.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-5.4",
    concept: "autonomic reflex identification",
  },
  {
    key: "xii-r2b-threat-reflex-and-hormonal-response",
    text: "On seeing a snake, a person's hand is pulled back almost at once, and a few seconds later the heart beats faster and the mouth feels dry. Which statement compares these two responses correctly?",
    options: [
      "The withdrawal is a reflex completed within a nervous pathway, while the later changes follow from a hormone that had to be carried in the blood",
      "The withdrawal is a hormonal response, because no nerve impulse can act on a muscle without a hormone",
      "Both responses are reflexes of the same division, so they should begin at the same moment",
      "The withdrawal is controlled only by the cerebrum, while the change in heart rate is controlled only by the medulla",
    ],
    correctIndex: 0,
    explanation:
      "The withdrawal is carried out by a reflex arc and needs no hormone, whereas the racing heart and dry mouth are hormonal effects that appear only after the hormone has travelled to its target tissues, which is why they lag behind the movement.",
    evidence:
      "A reflex produces its response through a nervous pathway without conscious effort, whereas a hormone acts through the blood after a longer delay.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 93,
    outcome: "BIO-5.4",
    concept: "reflex and hormonal response",
  },
  {
    key: "xii-r2b-relay-neurone-loss-outcome",
    text: "The relay neurone of a knee-jerk reflex is destroyed in the spinal cord, while the sensory neurone, the motor neurone and the quadriceps muscle all remain intact. What can the person still do?",
    options: [
      "Show the knee jerk but be unable to kick on command",
      "Kick on command but show no knee jerk when the tendon is tapped",
      "Do both, because the sensory neurone can pass the impulse on without the relay",
      "Do neither, because the muscle has lost every connection with the nervous system",
    ],
    correctIndex: 1,
    explanation:
      "Without the relay neurone the sensory impulse can no longer reach the motor neurone, so the reflex is lost, but a voluntary command still travels from the cerebrum down the same motor neurone to the same muscle, so kicking on command survives.",
    evidence:
      "A relay neurone in the spinal cord links the sensory and motor neurones of a reflex arc, so the reflex fails without it while voluntary movement continues.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-5.5",
    concept: "relay neurone loss",
  },
  {
    key: "xii-r2b-reflex-response-speed-reason",
    text: "The same arm muscle can be contracted by a reflex arc or by a deliberate command from the cerebrum, yet the reflex contraction appears first. The main reason is that",
    options: [
      "the reflex muscle is larger and therefore contracts more quickly",
      "the cerebrum cannot conduct impulses as fast as the spinal cord",
      "reflex impulses are larger and travel faster along the sensory neurone",
      "a reflex arc is completed in the spinal cord through only a few neurones, whereas a voluntary command needs many cells of the cerebrum",
    ],
    correctIndex: 3,
    explanation:
      "The reflex pathway is very short, so the impulse is relayed to the motor neurone and out to the muscle with little delay, while a voluntary action must first be planned in the many neurones of the cerebrum before the command leaves it.",
    evidence:
      "A reflex arc is completed in the spinal cord through a few neurones, so its response appears before a voluntary command issued from the cerebrum.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-5.5",
    concept: "reflex response speed",
  },
  {
    key: "xii-r2b-hypothalamus-pituitary-relationship",
    text: "The hypothalamus works closely with the pituitary gland. Which statement describes that relationship correctly?",
    options: [
      "The hypothalamus releases its own hormones into the blood and the pituitary stores them",
      "The hypothalamus makes releasing factors that act on the pituitary, which then releases hormones into the blood",
      "The two glands secrete the same hormones into the same duct",
      "The pituitary influences only the brain and never the blood",
    ],
    correctIndex: 1,
    explanation:
      "The hypothalamus produces releasing and inhibiting factors that reach the pituitary through the short vessels between them, and the pituitary responds by releasing its own hormones into the circulation.",
    evidence: "The hypothalamus controls the pituitary gland, so a chemical signal from the nervous system leads to the release of hormones into the blood.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 93,
    outcome: "BIO-5.7",
    concept: "hypothalamus pituitary link",
  },
  {
    key: "xii-r2b-pituitary-bridge-implication",
    text: "The pituitary releases hormones into the blood under the direction of the hypothalamus, which is why it is described as a link between the nervous and the hormonal system. Which implication of that arrangement is valid?",
    options: [
      "A change inside the brain can therefore set off a slow and widespread hormonal response",
      "A pituitary hormone can act only on the neurone that released the corresponding factor",
      "Hormones released from the pituitary can never reach the brain",
      "The pituitary allows the nervous system to be switched off during hormonal control",
    ],
    correctIndex: 3,
    explanation:
      "Because the pituitary turns a signal made in the brain into a hormone released into the circulation, activity in one part of the nervous system can produce effects all over the body, although slowly and for longer.",
    evidence:
      "The hypothalamus controls the pituitary gland, and the pituitary releases hormones into the blood, so the nervous system can influence hormonal activity throughout the body.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-5.7",
    concept: "neural hormonal bridge",
  },
  {
    key: "xii-r2b-lamarck-use-disuse-prediction",
    text: "Lamarck held that an organ strengthened by repeated use becomes stronger, while an organ left unused is gradually reduced. For an animal that runs daily but never uses its wings, which set of changes would that theory predict?",
    options: [
      "Running muscles strengthen over generations and the unused wings become reduced",
      "Running muscles shrink and the unused wings become stronger over generations",
      "Both kinds of limb change equally, because use affects the whole body in the same way",
      "No limb changes at all, because inherited characters cannot be altered by use",
    ],
    correctIndex: 0,
    explanation:
      "The principle of use and disuse makes the outcome depend on how much each organ is used, so a limb exercised in every generation would strengthen while an organ never used would shrink, and the modified condition would then be passed on.",
    evidence:
      "Lamarck's principles of use and disuse hold that an organ strengthened by use becomes stronger and one that is not used becomes reduced.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "BIO-7.2",
    concept: "use and disuse",
  },
  {
    key: "xii-r2b-lamarck-inborn-trait-problem",
    text: "A population contains animals that can digest a food none of them has ever eaten, a character that was already present at birth. How does such a case stand against Lamarck's mechanism?",
    options: [
      "It supports Lamarck, because the ability to digest the new food was a change made during life",
      "It shows that unused characters increase from one generation to the next",
      "It exposes a weakness, because a character never acquired by the parents cannot be passed on by them under Lamarck's rule",
      "It shows that Lamarck's mechanism applies only to organs and not to chemical processes",
    ],
    correctIndex: 2,
    explanation:
      "Lamarck's inheritance of acquired characters passes on changes made during an organism's own lifetime, so an inborn character that appeared without any such change is left unexplained, and that is the weakness his theory cannot overcome.",
    evidence: "Lamarck's theory holds that a character developed during an organism's lifetime is passed on to its offspring.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-7.2",
    concept: "lamarck limitation",
  },
  {
    key: "xii-r2b-melanism-selection-sequence",
    text: "In woods around industrial British cities the dark form of the peppered moth was rare in clean areas and common in polluted ones, while the light form showed the opposite trend. Which sequence of events explains this?",
    options: [
      "Polluted air stimulated moths to make extra pigment, and that acquired change was passed on to all their offspring",
      "Light moths migrated out of the polluted areas, leaving only dark moths in the whole country",
      "Soot darkened the surfaces, birds took more of the light moths in polluted woods, and the dark form became the commoner one there",
      "Soot changed the colour of the moths themselves, so dark moths developed from light parents in polluted areas",
    ],
    correctIndex: 2,
    explanation:
      "The dark moths already existed as a heritable variation in the population; once soot darkened the trees they were better camouflaged, so birds caught more of the light form and the dark form rose in number in those woods, which is natural selection acting on existing variation.",
    evidence:
      "Industrial melanism shows that predators remove the less well camouflaged moths, so the better camouflaged form becomes commoner in polluted areas.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-7.3",
    concept: "industrial melanism",
  },
  {
    key: "xii-r2b-homologous-versus-analogous-organs",
    text: "A bat's wing and an insect's wing both serve in flight, while a human arm and a whale flipper share the same arrangement of bones. Which comparison is correct?",
    options: [
      "The two wings are homologous because flight is their common use, and the arm and flipper are analogous because they move water",
      "The two wings are analogous because they serve the same function, and the arm and flipper are homologous because they share a structural plan",
      "Both pairs are homologous, because a shared function is enough to make two organs homologous",
      "Both pairs are analogous, because organs of different basic structure cannot share an origin",
    ],
    correctIndex: 1,
    explanation:
      "Homologous organs share a basic structural plan inherited from a common ancestor even when their functions differ, which fits the arm and the flipper, whereas analogous organs do the same job without such a plan, as the two wings do.",
    evidence:
      "Homologous organs have the same basic structure and a common origin, whereas analogous organs have the same function but no common structural origin.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-7.3",
    concept: "homologous analogous organs",
  },
  {
    key: "xii-r2b-adaptive-radiation-finches",
    text: "After the ancestors of the Darwin's finches reached the Galapagos, their descendants spread over the islands and now occupy separate food niches. This pattern is best named",
    options: [
      "convergent evolution, in which unrelated species become identical because they share an ancestor",
      "genetic drift, in which chance alone removes alleles from a population",
      "polyploidy, in which the chromosome number of the parent changes within one generation",
      "adaptive radiation, in which related forms diversify into separate species, each filling a different niche",
    ],
    correctIndex: 3,
    explanation:
      "Adaptive radiation occurs when related organisms spread into several habitats and each lineage adapts to a different way of life, so the descendants of one common ancestor became several species differing in beak shape and food.",
    evidence:
      "When descendants of a common ancestor occupy different habitats and each adapts to a different niche, the result is called adaptive radiation.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-7.3",
    concept: "adaptive radiation",
  },
  {
    key: "xii-r2b-self-versus-cross-fertilisation",
    text: "Self-fertilisation and cross-fertilisation are compared. Which statement about their effect on variation is correct?",
    options: [
      "Cross-fertilisation joins the genes of two individuals, so it maintains more variation in a population than self-fertilisation",
      "Self-fertilisation joins the genes of two individuals, so it maintains more variation than cross-fertilisation",
      "Both give the same amount of variation, because each produces the same number of offspring",
      "Cross-fertilisation reduces variation, because offspring from it are less vigorous",
    ],
    correctIndex: 0,
    explanation:
      "Self-fertilisation repeatedly pairs alleles already present in one plant and so tends to make lines homozygous, whereas cross-fertilisation brings together alleles from two parents and keeps the population varied.",
    evidence:
      "Cross-fertilisation mixes the genes of two parents and maintains greater variation than self-fertilisation, which pairs the alleles of a single individual.",
    questionType: "COMPARISON",
    difficulty: "EASY",
    relevance: 88,
    outcome: "BIO-7.3",
    concept: "self cross fertilisation",
  },
  {
    key: "xii-r2b-human-sex-determination-basis",
    text: "In humans the sex of a child is settled at fertilisation by",
    options: [
      "the number of chromosomes supplied by the mother's egg alone",
      "the level of hormones in the mother's blood during pregnancy",
      "the pair of sex chromosomes contributed by the parents, the sperm supplying either an X or a Y",
      "the temperature and the nutrition available to the developing embryo",
    ],
    correctIndex: 2,
    explanation:
      "Humans have separate sex chromosomes, so the child receives an X chromosome from the ovum and either an X or a Y from the sperm, giving XX in the female and XY in the male.",
    evidence:
      "In humans the ovum always carries an X chromosome and the sperm carries an X or a Y, so the sperm determines the sex of the child.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 95,
    outcome: "BIO-8.1",
    concept: "human sex determination",
  },
  {
    key: "xii-r2b-parent-sex-contribution-comparison",
    text: "Compare the part played by each parent in the sex of a human child.",
    options: [
      "The father supplies the deciding chromosome, while the mother's ovum always carries an X chromosome",
      "Both parents supply a sex chromosome chosen at random, so each decides with equal chance",
      "The mother supplies the deciding chromosome, while the father's sperm always carries an X chromosome",
      "The sperm carries an X or a Y and the ovum carries whichever chromosome fixes the sex",
    ],
    correctIndex: 0,
    explanation:
      "The ovum carries only an X chromosome, so the sperm alone decides whether the child receives XX or XY, which is why the father determines the sex of the child and the mother does not.",
    evidence:
      "The ovum always carries an X chromosome while the sperm carries an X or a Y, so the sex of the child is determined by the sperm.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "BIO-8.1",
    concept: "sex chromosome contribution",
  },
  {
    key: "xii-r2b-menstrual-cycle-event-order",
    text: "Arrange the main events of the menstrual cycle in the order in which they normally occur.",
    options: [
      "Shedding of the uterine lining, growth of the follicle, release of the ovum, thickening of the lining under progesterone",
      "Growth of the follicle, shedding of the uterine lining, release of the ovum, thickening of the lining under progesterone",
      "Release of the ovum, growth of the follicle, shedding of the uterine lining, thickening of the lining under progesterone",
      "Thickening of the lining under progesterone, growth of the follicle, release of the ovum, shedding of the uterine lining",
    ],
    correctIndex: 0,
    explanation:
      "The cycle opens with menstruation, when the old lining is shed, then the follicle grows under FSH, the ovum is released at ovulation, and progesterone from the corpus luteum afterwards thickens and maintains the lining until the next cycle.",
    evidence:
      "The menstrual cycle passes through menstruation, follicular growth, ovulation and a luteal phase in which progesterone maintains the uterine lining.",
    questionType: "SEQUENCE",
    difficulty: "EASY",
    relevance: 93,
    outcome: "BIO-8.2",
    concept: "menstrual cycle sequence",
  },
  {
    key: "xii-r2b-cycle-lining-maintaining-hormone",
    text: "During the second half of the cycle the hormone that keeps the uterine lining ready for the possible arrival of an embryo is",
    options: [
      "FSH, released by the pituitary as soon as the cycle begins",
      "oestrogen, released by the pituitary rather than by the ovary",
      "progesterone, released by the corpus luteum that forms after ovulation",
      "adrenaline, released by the adrenal gland whenever the body is under stress",
    ],
    correctIndex: 2,
    explanation:
      "After ovulation the ruptured follicle becomes the corpus luteum, and the progesterone it secretes prepares and maintains the thickened uterine lining so that it is ready for implantation.",
    evidence:
      "The corpus luteum secretes progesterone, which prepares and maintains the uterine lining for the possible arrival of the embryo.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-8.2",
    concept: "progesterone corpus luteum",
  },
  {
    key: "xii-r2b-luteal-regression-menstrual-shedding",
    text: "The corpus luteum persists only while the released ovum is being carried on after fertilisation, and otherwise it degenerates about two weeks after ovulation. Why does the uterine lining then break down?",
    options: [
      "The pituitary stops releasing FSH, so the lining loses the support of the follicle",
      "The lining breaks down because the pituitary begins to release extra LH",
      "The absence of progesterone lets the uterus contract and push the shed lining out",
      "With the corpus luteum gone the supply of progesterone falls, so the lining is no longer maintained and is shed",
    ],
    correctIndex: 3,
    explanation:
      "Progesterone from the corpus luteum is what holds the thickened lining in place, and once the corpus luteum degenerates the hormone level falls, so the lining loses its support and is shed.",
    evidence: "Progesterone from the corpus luteum maintains the uterine lining, and menstruation begins when this hormone level falls.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-8.2",
    concept: "menstrual shedding cause",
  },
  {
    key: "xii-r2b-meiosis-behind-mendel-ratios",
    text: "Mendel's ratios are seen in the offspring of a cross, yet the genes behave in a predictable way before fertilisation occurs. Which event is the immediate cause of the ratios?",
    options: [
      "Separation of the homologous chromosomes in meiosis, which puts one allele of each gene into every gamete",
      "Fusion of the egg and sperm nuclei, which combines two dominant alleles of each gene",
      "Replication of DNA before cell division, which copies every allele twice in each gamete",
      "Growth of the pollen tube, which carries both alleles of the father into the egg",
    ],
    correctIndex: 0,
    explanation:
      "Meiosis halves the chromosome number and separates the two alleles of each gene into different gametes, and random fusion of these gametes then produces the genotypic ratios observed in the offspring.",
    evidence:
      "Homologous chromosomes separate during meiosis so that each gamete receives one allele of each gene, which is the basis of Mendel's ratios after fertilisation.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-10.1",
    concept: "meiosis and ratios",
  },
  {
    key: "xii-r2b-meiosis-ratio-claims-check",
    text: "Claims about meiosis and Mendel's results are given. I: the two alleles of a gene move into different gametes during meiosis. II: random fusion of such gametes can give offspring of the genotypes TT, Tt and tt. III: each allele pair segregates independently of the others, so a dihybrid cross yields 9:3:3:1. IV: each gamete ends up with the same number of chromosomes as the parent cell. Which set of claims is correct?",
    options: ["I, II and IV", "I and III only", "I, II and III", "II, III and IV"],
    correctIndex: 2,
    explanation:
      "Claims I, II and III hold, because segregation in meiosis combined with random fusion gives TT, Tt and tt in the genotypic ratio 1:2:1, and independent segregation of two gene pairs gives 9:3:3:1. Claim IV is wrong because meiosis halves the chromosome number, so gametes carry half as many chromosomes as the parent cell.",
    evidence:
      "Meiosis halves the chromosome number and separates the alleles of a gene, and random fertilisation of such gametes gives the genotypic ratios of Mendel's crosses.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 91,
    outcome: "BIO-10.1",
    concept: "meiosis claims check",
  },
  {
    key: "xii-r2b-incomplete-dominance-pink-cross",
    text: "In a plant in which flower colour shows incomplete dominance, two plants with the same intermediate pink flowers are crossed. What proportion of the offspring is expected to have pink flowers?",
    options: ["1/4", "1/2", "3/4", "1"],
    correctIndex: 1,
    explanation:
      "A pink flower belongs to the heterozygote only, because neither allele dominates in the intermediate form, so the cross is between two heterozygotes and gives 1 homozygous red : 2 pink : 1 homozygous white, with half of the offspring pink.",
    evidence:
      "With incomplete dominance the heterozygote has an intermediate phenotype, so a cross between two heterozygotes gives offspring in the phenotypic ratio 1:2:1.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "BIO-10.1",
    concept: "incomplete dominance cross",
  },
  {
    key: "xii-r2b-trihybrid-single-dominant-trait",
    text: "Two plants heterozygous for three independent genes (TtRrSs x TtRrSs) produce an F2 generation. What fraction of that generation shows a dominant phenotype for exactly one of the three traits?",
    options: ["3/64", "9/64", "27/64", "1/64"],
    correctIndex: 1,
    explanation:
      "There are three choices for which single trait is dominant, and in each case the chance is 3/4 for that dominant phenotype with 1/4 for each of the two recessive ones, so 3 x 3/4 x 1/4 x 1/4 = 9/64, which is the three classes of 3 in the 27:9:9:3:3:3:1 ratio added together.",
    evidence:
      "The F2 of a trihybrid cross shows the phenotypic ratio 27:9:9:3:3:3:1, in which the three classes of 3 carry a single dominant trait.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "BIO-10.2",
    concept: "trihybrid trait probability",
  },
  {
    key: "xii-r2b-codominance-abo-cross-ratio",
    text: "In the ABO blood group system two alleles are codominant while a third is recessive to both of them. What ratio should be expected among the children of a parent with group AB and a parent with group O?",
    options: ["1:1", "1:2:1", "1:1:1:1", "1:1:2"],
    correctIndex: 2,
    explanation:
      "The AB parent makes gametes carrying one of its two alleles in equal numbers while the O parent can make only gametes carrying the recessive allele, so the children fall into the four blood groups in equal numbers, giving a 1:1:1:1 ratio.",
    evidence:
      "In codominance both alleles of a pair are expressed together in the heterozygote, as in the AB blood group, while the O group carries two copies of the recessive allele.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-10.2",
    concept: "codominance blood groups",
  },
  {
    key: "xii-r2b-trihybrid-test-cross-classes",
    text: "A plant heterozygous for three independent genes is crossed with a plant homozygous recessive for all three genes. What offspring ratio should the cross give?",
    options: ["1:2:2:1", "1:1:1:1:1:1:1:1", "27:9:9:3:3:3:1", "1:1:2"],
    correctIndex: 1,
    explanation:
      "A plant heterozygous at three loci makes 2 x 2 x 2 = 8 gamete types in equal numbers, and the homozygous recessive partner can contribute only one gamete type, so each offspring class reports one gamete of the tested plant and all eight classes appear equally.",
    evidence:
      "In a test cross with a homozygous recessive individual each progeny class reflects one gamete type of the tested individual, and a plant heterozygous for three genes produces eight types.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 92,
    outcome: "BIO-10.2",
    concept: "trihybrid test cross",
  },
];