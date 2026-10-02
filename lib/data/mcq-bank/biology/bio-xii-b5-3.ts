import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-r2c-double-circulation-two-visits",
    text: "In the human body circulation is described as double because",
    options: [
      "the heart is divided into four chambers and each chamber pumps a different type of blood",
      "blood passes through the heart twice in one complete circuit, once through the lungs and once through the body",
      "each drop of blood is sent to the lungs only after it has already circulated through the whole body",
      "the lungs and the body tissues are supplied by two separate hearts lying side by side",
    ],
    correctIndex: 1,
    explanation:
      "In double circulation a given volume of blood crosses the heart twice for one complete circuit: right side to the lungs, left side to the body, and back to the right side again. Both circuits are carried out by a single four-chambered heart.",
    evidence:
      "Double circulation is the condition in which blood passes through the heart twice during one complete circuit of the body.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 90,
    outcome: "BIO-11.1",
    concept: "double circulation",
  },
  {
    key: "xii-r2c-ventricle-wall-pressure",
    text: "The wall of the left ventricle is much thicker than that of the right ventricle because",
    options: [
      "the left ventricle must build up enough pressure to drive blood through the arteries of the whole body",
      "the left ventricle always holds more blood than the right ventricle",
      "the left ventricle receives oxygenated blood, which makes its muscle grow thicker",
      "the left ventricle has to push blood through the lungs as well as through the body",
    ],
    correctIndex: 0,
    explanation:
      "Both ventricles pump the same volume of blood per minute, but the arteries of the body offer far more resistance than those of the lungs. The left ventricle therefore develops a much higher pressure and needs a thicker muscle to do it.",
    evidence:
      "The left ventricle has a thicker wall than the right because it pumps blood through the high resistance systemic circulation.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "BIO-11.1",
    concept: "ventricular wall thickness",
  },
  {
    key: "xii-r2c-cardiac-output-doubles",
    text: "A person has a heart rate of 70 beats per minute and a cardiac output of 5.0 litres per minute. If the heart rate doubles and the stroke volume does not change, the new cardiac output is about",
    options: ["2.5 litres per minute", "5.0 litres per minute", "10.0 litres per minute", "20.0 litres per minute"],
    correctIndex: 2,
    explanation:
      "Stroke volume is 5000 divided by 70, about 71 mL per beat. At 140 beats per minute that same stroke volume gives roughly 71 x 140 = 10000 mL, so cardiac output rises in proportion to heart rate when stroke volume is unchanged.",
    evidence: "Cardiac output is calculated as the product of heart rate and stroke volume.",
    questionType: "APPLICATION",
    difficulty: "HARD",
    relevance: 93,
    outcome: "BIO-11.2",
    concept: "cardiac output calculation",
  },
  {
    key: "xii-r2c-stroke-volume-fall-output",
    text: "If the stroke volume of a person drops to 40 mL per beat while the heart rate rises to 100 beats per minute, cardiac output becomes",
    options: [
      "4,000 mL per minute, which is higher than the normal value",
      "1,400 mL per minute, which is lower than the normal value",
      "100 mL per minute, which is too small to measure",
      "4 litres per minute, which is lower than the normal value of about 5 litres",
    ],
    correctIndex: 3,
    explanation:
      "Cardiac output equals heart rate multiplied by stroke volume, and 100 x 40 = 4000 mL, that is 4 litres per minute. This is below the resting value of about 5 litres, so a fall in stroke volume can offset a faster heart rate.",
    evidence: "Cardiac output equals stroke volume multiplied by heart rate.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-11.2",
    concept: "cardiac output change",
  },
  {
    key: "xii-r2c-capillary-exchange-distance",
    text: "Capillaries form the main site of exchange between blood and tissue fluid rather than the thicker-walled vessels because",
    options: [
      "their lumen is narrow enough that blood cells have to pass through in single file",
      "their walls are only one cell thick and the flow is slow, so materials have a very short diffusion distance",
      "they contain the highest blood pressure of any vessel, which pushes plasma out of them",
      "they have no muscle or elastic tissue, so their walls cannot contract and squeeze the blood",
    ],
    correctIndex: 1,
    explanation:
      "An efficient exchange surface must be thin and widely exposed to blood. Capillary walls are a single cell layer with gaps between the cells, the flow through them is the slowest of any vessel, and together they offer the largest surface area, so diffusion distances are minimal.",
    evidence:
      "Capillaries have thin walls and a large surface area, so they are the main site of exchange between blood and tissue fluid.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "BIO-11.3",
    concept: "capillary exchange",
  },
  {
    key: "xii-r2c-pressure-along-circuit",
    text: "Following one drop of blood from the aorta through the arteries, arterioles, capillaries and veins back to the vena cava, the blood pressure",
    options: [
      "falls steadily and ends close to zero",
      "rises steadily as the blood approaches the heart",
      "stays the same because the heart keeps it under pressure",
      "falls to zero in the capillaries and then rises again in the veins",
    ],
    correctIndex: 0,
    explanation:
      "Pressure is highest in the aorta and is steadily spent in forcing blood through the narrow arteries and arterioles, where most of the resistance lies. By the capillaries little pressure is left, which is why they are the level at which exchange can occur.",
    evidence:
      "Blood pressure falls continuously from the arteries to the veins as the heart's pressure is used up in overcoming the resistance of the vessels.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-11.3",
    concept: "blood pressure gradient",
  },
  {
    key: "xii-r2c-spleen-blood-filter",
    text: "The spleen is classed with the lymphatic organs, but it differs from a lymph node because it",
    options: [
      "receives lymph from the lacteals of the small intestine",
      "lies in the neck and is the only organ that filters lymph",
      "works on blood rather than lymph, removing worn-out red blood cells and bacteria carried in the blood",
      "produces the antibodies that are released into the lymph during the primary immune response",
    ],
    correctIndex: 2,
    explanation:
      "A lymph node filters lymph arriving from other organs, whereas the spleen filters blood, since its macrophages remove old erythrocytes and any bacteria in the blood. It also stores blood and platelets, which is why it is grouped with the lymphoid organs.",
    evidence:
      "The spleen filters the blood, removing old red blood cells and microorganisms, and also stores blood.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-11.4",
    concept: "spleen function",
  },
  {
    key: "xii-r2c-hepatic-portal-vein-benefit",
    text: "Blood from the small intestine passes through the liver before it reaches the general circulation. The main advantage of this arrangement is that",
    options: [
      "oxygen can be added to the blood while nutrients are being absorbed",
      "bile can be released into the intestine more quickly",
      "digestive enzymes from the pancreas can reach the intestine sooner",
      "absorbed nutrients can be processed, stored and detoxified before they reach the tissues",
    ],
    correctIndex: 3,
    explanation:
      "The hepatic portal vein carries nutrient-rich blood from the intestine straight to the liver, so the liver controls what enters the general blood. It stores surplus glucose as glycogen, deals with excess amino acids and destroys harmful substances before they reach the tissues.",
    evidence:
      "The hepatic portal vein carries blood rich in absorbed nutrients from the intestine to the liver.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-11.4",
    concept: "hepatic portal circulation",
  },
  {
    key: "xii-r2c-self-marker-recognition",
    text: "Why are the cells of a person's own body not destroyed by the specific defence system?",
    options: [
      "they carry the person's own surface markers, which that person's lymphocytes recognise as self",
      "they are too large to enter the blood, so lymphocytes never meet them",
      "they release chemicals that kill any lymphocyte that approaches them",
      "they carry no surface markers at all, and lymphocytes attack only marked cells",
    ],
    correctIndex: 0,
    explanation:
      "Specific defence rests on recognition of markers. Each body cell carries marker molecules that the immune system of that individual recognises as self, so lymphocytes bind to and destroy only cells carrying markers that are foreign.",
    evidence:
      "Body cells carry self markers, which allow lymphocytes to recognise them as belonging to the individual.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-12.1",
    concept: "self recognition",
  },
  {
    key: "xii-r2c-antibody-binding-shape",
    text: "An antibody molecule attacks only its own particular antigen because",
    options: [
      "it is secreted by plasma cells and cannot leave the blood vessels",
      "its variable regions form binding sites of a shape complementary to part of the antigen",
      "it carries the same carbohydrate chains as the pathogen it neutralises",
      "it is broken down as soon as it meets an antigen that does not fit it",
    ],
    correctIndex: 1,
    explanation:
      "The ends of every antibody molecule carry variable regions that differ from one antibody to another. Their shape matches the epitope of a single antigen, so the antibody docks onto that antigen and onto no other.",
    evidence:
      "The variable regions of an antibody form specific binding sites that combine with the epitope of its antigen.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "BIO-12.1",
    concept: "antibody specificity",
  },
  {
    key: "xii-r2c-exercise-ventilation-stimulus",
    text: "During hard exercise the rate and depth of breathing increase mainly because",
    options: [
      "the falling oxygen content of alveolar air acts directly on the diaphragm",
      "the nerve supply from the brain to the lungs is interrupted by contracting muscles",
      "the rising concentration of carbon dioxide and hydrogen ions in the blood stimulates chemoreceptors",
      "the body needs extra oxygen to convert carbon dioxide into water inside the lungs",
    ],
    correctIndex: 2,
    explanation:
      "The main stimulus for breathing is the rise in carbon dioxide together with the hydrogen ions that it produces, because these stimulate chemoreceptors acting on the respiratory centre. Exercising muscles release these metabolites far faster, so ventilation is increased to remove them.",
    evidence:
      "Chemoreceptors respond to the rise of carbon dioxide and hydrogen ions in the blood and stimulate the respiratory centre to increase breathing.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "BIO-13.1",
    concept: "ventilation control",
  },
  {
    key: "xii-r2c-breathing-control-order",
    text: "Carbon dioxide rises in the blood during exercise. Which sequence describes the events that increase breathing?",
    options: [
      "chemoreceptors fire, carbon dioxide enters the blood, the diaphragm contracts, hydrogen ions rise",
      "the diaphragm relaxes, carbon dioxide leaves the blood, chemoreceptors fire, the lungs inflate",
      "carbon dioxide enters the blood, chemoreceptors fire, the diaphragm contracts, hydrogen ions rise",
      "carbon dioxide enters the blood, hydrogen ions rise, chemoreceptors fire, the respiratory centre signals the diaphragm",
    ],
    correctIndex: 3,
    explanation:
      "Carbon dioxide diffuses into the blood and forms carbonic acid, which releases hydrogen ions, so the rise in hydrogen ions comes before the response. Chemoreceptors detect this change and stimulate the respiratory centre, which sends impulses to the diaphragm and intercostal muscles so that they contract and increase ventilation.",
    evidence:
      "Chemoreceptors are stimulated by the rise of carbon dioxide and hydrogen ions and send impulses to the respiratory centre in the brain.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-13.1",
    concept: "breathing regulation pathway",
  },
  {
    key: "xii-r2c-carbon-dioxide-as-bicarbonate",
    text: "Most of the carbon dioxide carried from the tissues to the lungs travels in the blood as",
    options: [
      "bicarbonate ions formed inside red blood cells and released into the plasma",
      "gas dissolved directly in the plasma",
      "a compound formed by attaching carbon dioxide to the iron of haemoglobin",
      "a compound formed by attaching carbon dioxide to the globin protein of haemoglobin",
    ],
    correctIndex: 0,
    explanation:
      "About two thirds of the carbon dioxide is converted to bicarbonate inside the red blood cell and then carried in the plasma. Only a small part is carried bound to haemoglobin, and that binding is to the globin part, leaving the iron available for oxygen.",
    evidence:
      "Most carbon dioxide is transported as bicarbonate ions, while some is carried as carbaminohaemoglobin and a very little is dissolved in the plasma.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "BIO-13.2",
    concept: "carbon dioxide transport",
  },
  {
    key: "xii-r2c-dissociation-curve-shape",
    text: "The oxyhaemoglobin dissociation curve allows haemoglobin to load oxygen in the lungs and unload it in the tissues because",
    options: [
      "it is a straight line, so haemoglobin holds the same share of oxygen at every oxygen pressure",
      "it is nearly flat at the pressures found in the alveoli but steep over the pressures found in the tissues",
      "it reaches full saturation only above 150 mmHg, so no oxygen is released in the tissues",
      "it falls as oxygen pressure rises, so oxygen is taken up only in the tissues",
    ],
    correctIndex: 1,
    explanation:
      "At the alveolar oxygen pressure of about 104 mmHg haemoglobin is already 97-98 per cent saturated, so raising the pressure further adds very little, whereas over the tissue range of roughly 20-40 mmHg the curve is steep. That shape lets the lungs load haemoglobin almost fully while the tissues take oxygen from it easily.",
    evidence:
      "The oxyhaemoglobin dissociation curve is sigmoid, with a plateau at lung oxygen pressures and a steep fall at tissue oxygen pressures.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 92,
    outcome: "BIO-13.2",
    concept: "oxygen dissociation curve",
  },
  {
    key: "xii-r2c-high-altitude-red-cells",
    text: "A visitor feels breathless on arriving at a high mountain station, but the feeling eases after several days. The main reason is that",
    options: [
      "the lungs grow extra alveoli within a few days of arrival",
      "the haemoglobin gives up less oxygen so that the tissues need less of it",
      "more red blood cells are made, so the blood can carry more oxygen at the low oxygen pressure",
      "the heart rate falls so that the same oxygen lasts for longer",
    ],
    correctIndex: 2,
    explanation:
      "At high altitude the partial pressure of oxygen is low, so each unit of blood receives less oxygen than usual. Acclimatisation includes increased production of red blood cells and deeper breathing, which together restore the oxygen-carrying capacity of the blood.",
    evidence:
      "Living at high altitude stimulates the production of more red blood cells so that the blood can carry more oxygen at reduced oxygen pressure.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "BIO-13.2",
    concept: "altitude acclimatisation",
  },
  {
    key: "xii-r2c-smoke-carbon-monoxide-affinity",
    text: "The carbon monoxide in cigarette smoke harms the tissues because it",
    options: [
      "damages the cilia of the airway so mucus is no longer cleared",
      "makes the alveolar walls so stiff that they cannot expand",
      "raises the pressure in the pulmonary vessels until fluid collects in the lungs",
      "binds haemoglobin with much greater affinity than oxygen, so less oxygen is carried to the tissues",
    ],
    correctIndex: 3,
    explanation:
      "Carbon monoxide forms a stable compound with haemoglobin two hundred to two hundred and fifty times more readily than oxygen. It therefore both occupies the binding sites needed for oxygen and makes the remaining oxygen harder to release to the tissues.",
    evidence:
      "Carbon monoxide of cigarette smoke combines with haemoglobin far more readily than oxygen and reduces the oxygen supply to the tissues.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-13.3",
    concept: "smoke carbon monoxide",
  },
  {
    key: "xii-r2c-airway-cilia-damaged",
    text: "In the airway of a smoker, mucus collects because",
    options: [
      "smoke damages the cilia that normally sweep the mucus towards the throat",
      "smoke draws extra water out of the cells lining the airway",
      "smoke makes the bronchioles widen so that the air moves back and forth",
      "smoke lowers the blood pressure of the lung vessels so fluid leaks into the airway",
    ],
    correctIndex: 0,
    explanation:
      "The cilia of the trachea and bronchi beat steadily to move mucus and the particles trapped in it up to the pharynx, where they can be swallowed or spat out. Smoke destroys and paralyses these cilia, so mucus thickens and accumulates in the airways.",
    evidence:
      "Smoking destroys the cilia lining the airways, so mucus accumulates instead of being cleared.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 89,
    outcome: "BIO-13.3",
    concept: "airway cilia",
  },
  {
    key: "xii-r2c-starch-mouth-to-intestine",
    text: "Digestion of starch starts in the mouth but is completed in the small intestine because",
    options: [
      "starch cannot be absorbed through the wall of the mouth",
      "salivary amylase works only briefly and is stopped by the acid of the stomach",
      "the small intestine has no enzymes of its own and only finishes what saliva began",
      "bile in the small intestine changes starch into sugar before enzymes can act on it",
    ],
    correctIndex: 1,
    explanation:
      "Salivary amylase begins breaking starch into maltose but acts best in the near neutral conditions of the mouth and is destroyed by the acid of the stomach. The small intestine then receives fresh amylase from the pancreas together with alkaline pancreatic juice, so starch digestion is completed there.",
    evidence:
      "Salivary amylase starts starch digestion in the mouth and is inactivated at the low pH of the stomach, so the small intestine completes the job.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "BIO-14.1",
    concept: "starch digestion",
  },
  {
    key: "xii-r2c-small-intestine-statements",
    text: "Read the two statements on digestion. I: Most digestion and absorption take place in the small intestine because its wall provides a very large surface area. II: The stomach completes most absorption of digested nutrients because its inner wall is covered with villi.",
    options: [
      "Statement I is false while statement II is true",
      "Both statements I and II are true",
      "Statement I is true while statement II is false",
      "Both statements I and II are false",
    ],
    correctIndex: 2,
    explanation:
      "Length, circular folds, villi and microvilli give the small intestine an enormous surface area, which makes it the chief site of absorption, so the first statement is true. The stomach stores and churns food and has no villi, so the second statement is false.",
    evidence:
      "The small intestine has a very large surface area of villi and microvilli, making it the main site of digestion and absorption.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-14.1",
    concept: "intestinal surface area",
  },
  {
    key: "xii-r2c-absorbed-fat-route",
    text: "Absorbed fat follows a different route from glucose and amino acids because",
    options: [
      "it is broken down further inside the lymphatic vessels before it can join the blood",
      "it enters the blood capillaries of the villi before the lymph vessels",
      "it is carried to the liver first and stored there before entering the general blood",
      "it passes into the lymph vessels of the villi and reaches the blood after passing through lymph nodes",
    ],
    correctIndex: 3,
    explanation:
      "Fatty acids and glycerol are rebuilt into fat globules inside the cells of the villi, where the central channel is a lacteal rather than a blood capillary. These globules travel in lymph through the lymphatic vessels and enter the bloodstream later, at the thoracic duct, so they bypass the liver on their first pass.",
    evidence:
      "Absorbed fats enter the lymph vessels of the villi and reach the blood through the thoracic duct rather than by the hepatic portal vein.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-14.2",
    concept: "fat absorption",
  },
  {
    key: "xii-r2c-water-soluble-vitamin-route",
    text: "A water-soluble vitamin is absorbed from the intestine differently from a fat-soluble vitamin because",
    options: [
      "it passes directly into the blood capillaries and does not need to be carried first in lymph",
      "it can leave the intestine only in the large intestine",
      "bile must split it into simpler pieces before it can be absorbed",
      "it is converted to glycogen in the liver before it enters the blood",
    ],
    correctIndex: 0,
    explanation:
      "Vitamins A, D, E and K dissolve in fats and travel inside the fat globules that enter the lymph of the villi. The water-soluble vitamins of the B group and vitamin C pass straight into the blood capillaries and then to the liver.",
    evidence:
      "Fat-soluble vitamins are absorbed with fats into the lymph, whereas water-soluble vitamins enter the blood capillaries directly.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 84,
    outcome: "BIO-14.2",
    concept: "vitamin absorption",
  },
  {
    key: "xii-r2c-live-vaccine-advantage",
    text: "A live attenuated vaccine is often preferred to a killed vaccine because it",
    options: [
      "can never cause the disease, even in someone with a very weak immune system",
      "produces a stronger and longer-lasting response, as the organism multiplies briefly in the body",
      "needs to be given only once in a lifetime because its effect never fades",
      "works without entering the cells of the body at all",
    ],
    correctIndex: 1,
    explanation:
      "A live attenuated vaccine contains weakened organisms that multiply briefly inside the body, and this produces a strong memory response lasting for years. The same property makes it unsuitable for a person whose immune system is weak, since the attenuated organisms may multiply unchecked.",
    evidence:
      "A live attenuated vaccine contains weakened organisms that multiply in the body and produce longer lasting immunity than a killed vaccine.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "BIO-16.1",
    concept: "live attenuated vaccine",
  },
  {
    key: "xii-r2c-vaccination-statements",
    text: "Assess these two statements on vaccination. I: A vaccine presents the immune system with an antigen in a form that cannot itself cause the disease. II: Even when most people of a population are vaccinated, the disease continues to spread freely among the unvaccinated minority.",
    options: [
      "Statement I is false while statement II is true",
      "Both statements I and II are true",
      "Statement I is true while statement II is false",
      "Both statements I and II are false",
    ],
    correctIndex: 2,
    explanation:
      "A vaccine exposes the immune system to a harmless form of the antigen, so statement I is true. Statement II reverses the effect of mass vaccination, because immunised people act as barriers that interrupt transmission and make the disease unable to spread through the community.",
    evidence:
      "Vaccination gives immunity and, when most of a population is vaccinated, breaks the chain of transmission of the disease.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 90,
    outcome: "BIO-16.1",
    concept: "vaccination principle",
  },
  {
    key: "xii-r2c-probe-base-pairing",
    text: "A nucleic acid probe can show whether a suspected pathogen is present in a tissue sample because it is",
    options: [
      "an antibody that reacts only with the protein coat of the pathogen",
      "an enzyme that breaks the nucleic acid of the pathogen into nucleotides",
      "a nutrient medium in which only the pathogen can grow",
      "a labelled single strand of DNA or RNA that pairs with a complementary sequence in the pathogen",
    ],
    correctIndex: 3,
    explanation:
      "A probe is a known single-stranded sequence of DNA or RNA carrying a detectable label. If the sample contains the pathogen's DNA or RNA, the probe base-pairs with its complementary sequence and the label makes the presence of the pathogen visible.",
    evidence:
      "A labelled DNA or RNA probe hybridises with a complementary sequence of the pathogen and so detects it.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 91,
    outcome: "BIO-16.2",
    concept: "nucleic acid probe",
  },
  {
    key: "xii-r2c-probe-genetic-disorder",
    text: "When a DNA probe is used to test for a genetic disorder rather than to detect a pathogen, it is designed to",
    options: [
      "base-pair with the normal form of the gene, so the sample shows whether a mutated copy is present",
      "stick to every strand of DNA in the sample so that the whole gene can be counted",
      "join the two strands of the patient's DNA together so that the gene sequence can be read",
      "act as a template for making the missing protein inside the patient's cells",
    ],
    correctIndex: 0,
    explanation:
      "For a genetic disorder the probe is made from the normal sequence of the gene. Where the DNA of the person matches it, the labelled probe binds and produces a band, while a mutated gene that no longer matches leaves no band, revealing the disorder.",
    evidence:
      "DNA probes made from normal genes detect genetic disorders, because a mutated gene fails to base-pair with the probe.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 87,
    outcome: "BIO-16.2",
    concept: "gene disorder diagnosis",
  },
];