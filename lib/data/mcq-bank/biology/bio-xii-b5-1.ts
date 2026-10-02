import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-r2-growth-plate-closure",
    text: "A person's arms and legs stop lengthening in early adulthood, yet the bones stay alive and go on being remodelled. The reason that no further lengthening occurs is that",
    options: [
      "the cartilage of the growth plates has been replaced by bone, so no cartilaginous template is left to lengthen",
      "the periosteum has stopped laying down new bone on the surfaces of the bones",
      "the osteoclasts have grown so active that each bone is slowly dissolved away",
      "the joints have turned into immovable sutures, which block any further movement",
    ],
    correctIndex: 0,
    explanation:
      "A long bone lengthens only where cartilage in the epiphyseal plates is steadily replaced by bone. Once those plates have been wholly ossified there is no cartilage left to work on, so lengthening stops, although remodelling of the bone continues.",
    evidence:
      "Bone grows in length at the epiphyseal growth plates where cartilage is replaced by bone, and this growth ceases when the plates close.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-9.1",
    concept: "growth plate closure",
  },
  {
    key: "xii-r2-fracture-healing-order",
    text: "A long bone is broken and its two ends are left separated by a gap. Healing at the site of the break passes through a recognisable series of stages. The correct order is",
    options: [
      "mineralisation of the new bone, then bleeding into the gap, then the growth of new tissue, then the joining of the ends",
      "the joining of the ends, then bleeding into the gap, then the growth of new tissue, then mineralisation",
      "bleeding into the gap, then mineralisation, then the joining of the ends, then the growth of new tissue",
      "bleeding and clot formation in the gap, then new tissue growing to join the ends, then that bridge being replaced by mineralised bone",
    ],
    correctIndex: 3,
    explanation:
      "The gap is first filled by a blood clot, new tissue then grows across it to link the broken ends, and the bridge is finally replaced by bone that is mineralised, so the bone regains its strength.",
    evidence:
      "Bone is a living, vascular tissue that repairs a fracture by building new bone at the broken ends until the gap is closed.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "BIO-9.1",
    concept: "fracture healing stages",
  },
  {
    key: "xii-r2-lever-arm-advantage",
    text: "A student raises a heavy load with the forearm, and the biceps is attached to the forearm bone well beyond the elbow joint while the load is held close to the hand. In this lever system",
    options: [
      "the load must be lifted by a muscle pull larger than the load itself, because the muscle works through the longer arm",
      "a modest pull of the biceps can lift the heavy load, because the muscle acts through a long arm while the load acts through a short one",
      "the muscle pull and the load have exactly the same effect, because both act on the same bone",
      "the elbow joint supplies the lifting force, and the biceps only keeps the forearm steady",
    ],
    correctIndex: 1,
    explanation:
      "In a lever a force has a turning effect in proportion to its distance from the fulcrum. With the biceps attached far from the elbow its pull acts through a long arm while the load acts close to the hand, so a small effort can shift a heavy load.",
    evidence:
      "Bones act as levers, with the joint as fulcrum, the bone as the lever, the muscle as the effort and the load as the resistance.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-9.2",
    concept: "lever arms in movement",
  },
  {
    key: "xii-r2-bone-cartilage-turnover",
    text: "As a person grows older the bones become lighter and more porous, and the joints at the same time become stiff and awkward to move. Treating the skeleton as one connected system, the common reason behind both changes is that",
    options: [
      "the cartilage of the joints is slowly converted into bone, so the joints lock while the bones hollow out",
      "the blood supply to the bones fails first, so the joints are then left with no nutrition at all",
      "the matrix of both tissues is kept up by living cells, so a disturbed balance between building up and breaking down shows up in bone and in cartilage alike",
      "the ligaments are converted into cartilage in order to reinforce the thinning bones",
    ],
    correctIndex: 2,
    explanation:
      "The matrix of bone and the matrix of cartilage are both living structures that are continually added to and taken away. The same kind of disturbance of that balance therefore appears as porous bone in one tissue and as a worn joint surface in the other.",
    evidence:
      "Bone is a living tissue that is continuously remodelled, and cartilage is likewise living tissue whose matrix is maintained by its own cells.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 86,
    outcome: "BIO-9.2",
    concept: "skeleton as one system",
  },
  {
    key: "xii-r2-skeleton-function-claims",
    text: "Four claims about the human skeleton are listed.\nI. It gives the body its shape and bears its weight.\nII. It protects organs such as the brain, the spinal cord and the lungs.\nIII. It stores calcium and phosphate and releases them to the blood when needed.\nIV. It provides the large moist surface area needed for gas exchange in the lungs.\nWhich of these claims about the skeleton is incorrect?",
    options: ["Claim IV is incorrect", "Claim II is incorrect", "Claim I is incorrect", "Claim III is incorrect"],
    correctIndex: 0,
    explanation:
      "Claims I, II and III all describe accepted functions of the skeleton. Gas exchange takes place across the thin moist lining of the lung alveoli with its capillaries, not across any structure of the skeleton, so claim IV is the incorrect one.",
    evidence:
      "The skeleton supports the body, protects vital organs and stores calcium and phosphate salts that can be released to the blood.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "BIO-9.2",
    concept: "functions of the skeleton",
  },
  {
    key: "xii-r2-smooth-sustained-contraction",
    text: "The gut wall and the wall of a blood vessel can hold a steady contraction for hours, and none of this is under the control of the will. Which set of properties of smooth muscle best accounts for this?",
    options: [
      "It is striated and branched, so it keeps contracting without waiting for a nerve impulse",
      "It is spindle shaped and uninucleate, so each cell can grip its neighbours indefinitely",
      "It is involuntary and does not fatigue, so a sustained contraction can be held for long periods",
      "It is short and multinucleate, so it contracts faster than any nerve can signal",
    ],
    correctIndex: 2,
    explanation:
      "Smooth muscle is involuntary, so the body does not have to direct it, and it does not tire with sustained use, which is precisely what is needed to hold the gut wall in a steady state or to keep a vessel narrowed for hours.",
    evidence:
      "Smooth muscle is non-striated, involuntary and non-fatiguing, and it controls the movement of the viscera and the width of blood vessels.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-9.3",
    concept: "sustained smooth contraction",
  },
  {
    key: "xii-r2-muscle-type-claims",
    text: "Four claims about muscle tissue are listed.\nI. The cells of cardiac muscle are joined to one another by intercalated discs.\nII. A skeletal muscle fibre contains many nuclei.\nIII. Each smooth muscle cell has a single nucleus and no cross striations.\nIV. All three types of muscle are attached to the bones and are used to move the body wall.\nWhich of these statements about the three muscle types is incorrect?",
    options: [
      "Statement I is incorrect",
      "Statement III is incorrect",
      "Statement IV is incorrect",
      "Statement II is incorrect",
    ],
    correctIndex: 2,
    explanation:
      "Intercalated discs between cardiac cells, many nuclei in each skeletal fibre and a single striation-free nucleus in each smooth cell are all correct. Only skeletal muscle acts on the bones, so statement IV is the incorrect one.",
    evidence:
      "Cardiac muscle is striated, branched and joined by intercalated discs, skeletal muscle fibres are multinucleate, and smooth muscle cells are spindle shaped with one nucleus.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "BIO-9.3",
    concept: "muscle type features",
  },
  {
    key: "xii-r2-transverse-tubules",
    text: "The membrane of a muscle fibre is folded inward into many finger-like channels that carry the nerve impulse deep into the fibre. These channels of the sarcolemma are called",
    options: ["myofibrils", "transverse tubules", "sarcomeres", "sarcoplasmic reticulum"],
    correctIndex: 1,
    explanation:
      "Transverse tubules are inward folds of the sarcolemma, so they take the nerve impulse right into the fibre and carry the stimulus to myofibrils lying deep inside the cell.",
    evidence:
      "The sarcolemma of a muscle fibre is folded inward to form transverse tubules that carry the nerve impulse deep into the fibre.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 94,
    outcome: "BIO-9.4",
    concept: "transverse tubules",
  },
  {
    key: "xii-r2-myofibril-force",
    text: "Each skeletal muscle fibre is packed with a large number of myofibrils instead of being built around a single one. The advantage of this arrangement is that",
    options: [
      "each myofibril can be contracted at a different moment, which smooths out a jerky action",
      "the fibre needs far less cytoplasm to keep the myofibrils separated from one another",
      "calcium ions can be stored in the myofibrils, so the sarcoplasmic reticulum becomes unnecessary",
      "a very large number of sarcomeres lies side by side, so more cross-bridges act at once and a greater force is produced",
    ],
    correctIndex: 3,
    explanation:
      "Because many myofibrils lie in parallel, one fibre contains a very large number of sarcomeres side by side, and all of their cross-bridges can pull at the same time, which is how a large force is generated.",
    evidence:
      "A muscle fibre contains many myofibrils, and each myofibril is built of sarcomeres made up of actin and myosin filaments.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "BIO-9.4",
    concept: "myofibrils and force",
  },
  {
    key: "xii-r2-atp-energy-source",
    text: "The energy that drives the cross-bridge cycle inside a muscle fibre comes directly from",
    options: [
      "the calcium ions stored in the sarcoplasmic reticulum",
      "ATP, which is continuously renewed by respiration within the muscle fibre",
      "the glucose that leaks out of the blood capillaries into the sarcomere",
      "the lactic acid that collects in the fibre during a contraction",
    ],
    correctIndex: 1,
    explanation:
      "The myosin head is energised by ATP, which is generated afresh in the muscle fibre by respiration, so both the power stroke and the release of myosin from actin depend on a steady supply of ATP.",
    evidence: "ATP supplies the energy for muscle contraction and is produced in the muscle fibres by respiration.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 96,
    outcome: "BIO-9.5",
    concept: "energy for contraction",
  },
  {
    key: "xii-r2-muscle-fatigue-cause",
    text: "A muscle that has been working hard without rest finally stops responding to the nerve impulses reaching it, and this state is called fatigue. Fatigue appears because",
    options: [
      "the actin and myosin filaments fuse into a rigid mass that can no longer be pulled",
      "the ATP and glucose reserves of the fibres are used up and the products of respiration collect, so the cross-bridge cycle slows",
      "the calcium ions leave the fibre permanently and can never be released again",
      "the motor nerve endings withdraw from the sarcolemma and the fibre becomes a smooth muscle",
    ],
    correctIndex: 1,
    explanation:
      "Continued contraction draws on the ATP and glucose stores of the fibre, and the products of respiration accumulate as those stores dwindle, so fewer cross-bridges are formed and the muscle can no longer respond.",
    evidence:
      "A muscle fibre contracts using ATP, and prolonged activity uses up its ATP and glucose reserves until the fibres tire.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-9.5",
    concept: "cause of muscle fatigue",
  },
  {
    key: "xii-r2-sprint-muscle-energy",
    text: "In the first few seconds of a sprint the leg muscles contract powerfully, but no extra oxygen has yet reached them. The ATP driving this contraction is obtained",
    options: [
      "from the oxygen that is carried to the muscle a moment later in the race",
      "from mineral salts released from the bones of the leg",
      "from reserves already present in the fibre and from glucose broken down in the muscle without oxygen",
      "from the calcium ions released by the sarcoplasmic reticulum",
    ],
    correctIndex: 2,
    explanation:
      "At the start of a burst of activity the fibre works from its own ATP and from glucose broken down without oxygen, which is why the first powerful contractions are possible before the cardiovascular system has responded.",
    evidence:
      "Muscle contraction depends on ATP, and a muscle fibre can supply ATP for a short burst from its own reserves without waiting for extra oxygen.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-9.5",
    concept: "rapid muscle energy",
  },
  {
    key: "xii-r2-joint-degrees-of-freedom",
    text: "The elbow, where the lower arm swings about a single hinge axis, and the shoulder, where the arm can be swept in wide circles, are both synovial joints. The elbow is the more restricted of the two because",
    options: [
      "the bones of the elbow are joined by an immovable suture instead of by a joint cavity",
      "its articulating surfaces are shaped so that the bones move in one plane only, while the shoulder socket allows movement in several directions",
      "the ends of the elbow bones carry no cartilage at all",
      "it is a cartilaginous joint, so only the slightest movement is possible in it",
    ],
    correctIndex: 1,
    explanation:
      "A hinge joint has surfaces shaped like a hinge, so it permits movement about one axis in one plane, whereas the ball-and-socket arrangement of the shoulder permits movement in several directions and over a far wider range.",
    evidence:
      "Synovial joints include hinge, pivot, gliding, saddle and ball-and-socket types, which differ in the range of movement they allow.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "BIO-9.6",
    concept: "joint degrees of freedom",
  },
  {
    key: "xii-r2-synovial-joint-parts",
    text: "The bones of a synovial joint can move freely over a wide range without grinding on one another and without pulling apart. This freedom is made possible by",
    options: [
      "the fibrous tissue that fuses the two bones into a single rigid mass",
      "the growth plate, which keeps the joint lengthening as it is used",
      "cartilage capping the bone ends, a cavity holding synovial fluid, and ligaments holding the bones together",
      "a thick covering of muscle over the joint, which cushions every movement",
    ],
    correctIndex: 2,
    explanation:
      "Cartilage caps the bone ends and supplies a smooth surface, synovial fluid in the cavity lubricates the movement, and ligaments bind the bones so that the joint stays together while still moving freely.",
    evidence:
      "A synovial joint has a cavity filled with synovial fluid, the ends of the bones are covered by cartilage, and ligaments hold the bones together.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "BIO-9.6",
    concept: "synovial joint components",
  },
  {
    key: "xii-r2-cranium-suture-rigidity",
    text: "The bones of the cranium meet at sutures that permit no movement at all, unlike the freely movable joints of the limbs. The functional reason for locking the skull together is that",
    options: [
      "the brain can only be enclosed safely in a rigid box that resists impact",
      "the cranial nerves regenerate more quickly when the skull bones do not move",
      "the sutures pump oxygen into the brain whenever the body is short of it",
      "movable skull bones would allow the brain to keep growing throughout adult life",
    ],
    correctIndex: 0,
    explanation:
      "The cranium exists to enclose and protect the brain, and that protection depends on the box it forms staying rigid, which is why the sutures of the skull are immovable while the joints of the limbs are freely movable.",
    evidence:
      "Sutures between the bones of the skull are immovable fibrous joints that make the cranium a rigid box protecting the brain.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 92,
    outcome: "BIO-9.6",
    concept: "rigidity of the cranium",
  },
  {
    key: "xii-r2-arthritic-joint-stiffness",
    text: "In a joint that is inflamed the swollen tissues and the extra fluid collect inside a tough capsule that cannot stretch to take them. This explains why such a joint",
    options: [
      "loses all of its cartilage within a matter of hours",
      "becomes freely movable as soon as the fluid accumulates inside it",
      "returns to normal as soon as the muscles around it are exercised",
      "becomes stiff and painful on movement, because the swelling is confined within the joint",
    ],
    correctIndex: 3,
    explanation:
      "The capsule of a joint is a closed space with little room to expand, so swelling and fluid collecting inside it press upon the joint surfaces and on the nerves of the capsule, and movement becomes painful and difficult.",
    evidence:
      "Arthritis is inflammation of a joint, producing pain, swelling and stiffness that limit the movement of that joint.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-9.7",
    concept: "stiffness of inflamed joint",
  },
  {
    key: "xii-r2-joint-cartilage-cap",
    text: "A long-standing painful joint grates on movement, and the surfaces of the two bones that meet in it have become rough instead of smooth. The reason the ends of the bones can be affected in this way is that",
    options: [
      "they are normally left bare, and the inflammation polishes them until they grate",
      "they are normally capped by cartilage as part of the joint, and it is this covering that the inflammation damages",
      "they are normally joined by a ligament, which the inflammation turns into a rough surface",
      "they are normally wrapped in a layer of muscle, which the inflammation converts into bone",
    ],
    correctIndex: 1,
    explanation:
      "Within a synovial joint the ends of the bones are covered by cartilage, which normally gives a smooth low-friction surface, so roughening of the bone ends means that this cartilage covering has been affected.",
    evidence:
      "The ends of the bones in a synovial joint are covered by cartilage, which provides a smooth surface and is the tissue affected in arthritis.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-9.7",
    concept: "cartilage capping bone ends",
  },
  {
    key: "xii-r2-nephron-number-advantage",
    text: "A human kidney is built from an enormous number of tiny nephrons instead of from a few large filtering units. The main advantage of this arrangement is that",
    options: [
      "each worn-out nephron can be replaced by a newly grown one",
      "the blood can bypass the nephrons whenever extra water must be removed",
      "urine travels a shorter path and so leaves the body more quickly",
      "a very large filtering surface is provided and the returning blood can be adjusted finely",
    ],
    correctIndex: 3,
    explanation:
      "A great many small nephrons give an enormous surface for filtration and allow the kidney to make fine corrections to what it hands back to the blood, something a few large filtering units could never manage.",
    evidence:
      "The nephron is the structural and functional unit of the kidney, and very many nephrons make up each kidney.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 91,
    outcome: "BIO-15.1",
    concept: "advantage of nephron numbers",
  },
  {
    key: "xii-r2-ureter-muscle-capsule",
    text: "The ureter has a layer of smooth muscle in its wall, while the wall of Bowman's capsule does not. The difference between the two is explained by",
    options: [
      "urine has to be actively driven along the ureter, whereas the filtrate simply flows into Bowman's capsule under the pressure of filtration",
      "the ureter belongs to the digestive tract while Bowman's capsule belongs to the circulation",
      "the capsule must contract in order to keep blood cells out of the filtrate",
      "smooth muscle is needed to hold the kidney in position against the backbone",
    ],
    correctIndex: 0,
    explanation:
      "Muscle is present only where there is work to be done. The ureter actively propels urine towards the bladder, whereas the filtrate forms at the glomerulus and simply runs into the capsule, so no muscle is needed there.",
    evidence:
      "Urine passes from the kidney along the ureter into the bladder, while the filtrate formed at the glomerulus is simply collected by Bowman's capsule.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 88,
    outcome: "BIO-15.1",
    concept: "ureter wall against capsule",
  },
  {
    key: "xii-r2-bicarbonate-conservation",
    text: "Bicarbonate is filtered out of the blood at the glomerulus, yet the bicarbonate level of the blood stays within narrow limits. This is possible because\nI. bicarbonate is filtered into Bowman's capsule;\nII. nearly all of the filtered bicarbonate is reabsorbed back into the blood by the tubule;\nIII. the tubule secretes hydrogen ions into the filtrate, where these combine with bicarbonate.\nWhich combination of these statements is correct?",
    options: [
      "Only statements (i) and (ii)",
      "Only statement (i)",
      "Only statements (i) and (iii)",
      "Only statements (ii) and (iii)",
    ],
    correctIndex: 3,
    explanation:
      "Bicarbonate does pass into the capsule at the glomerulus, but almost all of it is recovered by re-absorption, and the hydrogen ions secreted into the tubule combine with whatever bicarbonate remains, so statements (ii) and (iii) together explain the steady blood level.",
    evidence:
      "Selective reabsorption returns bicarbonate from the filtrate to the blood while hydrogen ions are secreted into the tubule to help keep the blood pH constant.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 93,
    outcome: "BIO-15.2",
    concept: "bicarbonate conservation",
  },
  {
    key: "xii-r2-bicarbonate-loss-effect",
    text: "Suppose the tubule cells stopped returning bicarbonate to the blood and hydrogen ions were no longer secreted into the tubule. The disturbance that would follow is",
    options: [
      "a rise in blood urea alone, with the blood pH left unchanged",
      "a fall in the volume of urine, because no hydrogen ions would be produced",
      "a rise in blood glucose, because bicarbonate would be converted into sugar",
      "a fall in the blood bicarbonate level together with a fall in blood pH, as the kidney loses its power to dispose of acid",
    ],
    correctIndex: 3,
    explanation:
      "Returning bicarbonate to the blood and secreting hydrogen ions into the tubule are the two parts of the kidney's control of blood pH. Losing both leaves the blood with less buffer and leaves acid that cannot be excreted, so the pH falls.",
    evidence:
      "The kidney helps keep the pH of the blood constant by reabsorbing bicarbonate and by secreting hydrogen ions into the tubule.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 90,
    outcome: "BIO-15.2",
    concept: "loss of pH control",
  },
  {
    key: "xii-r2-counter-current-gradient",
    text: "In the loop of Henle the filtrate runs down one limb and back up the other, so the two limbs lie side by side with their flows running in opposite directions. The purpose of this arrangement is to",
    options: [
      "double the amount of filtrate that can pass along the loop",
      "let the fluid leaving the loop be used a second time, so that less water needs reabsorbing",
      "build up a steep osmotic gradient in the medulla, from which water can still be drawn out of the collecting duct",
      "stop the kidney from producing any glucose",
    ],
    correctIndex: 2,
    explanation:
      "Because the two limbs exchange solutes and water in opposite directions, the fluid of the medulla becomes progressively more concentrated from the cortex down towards the papilla, and that gradient is what allows water to be reabsorbed even from the collecting duct.",
    evidence:
      "The counter-current arrangement of the loop of Henle concentrates the fluid of the medulla and so helps the kidney conserve water.",
    questionType: "REASONING",
    difficulty: "HARD",
    relevance: 92,
    outcome: "BIO-15.3",
    concept: "counter-current gradient",
  },
  {
    key: "xii-r2-renin-blood-pressure-chain",
    text: "Blood pressure in the artery supplying the kidney falls. The juxtaglomerular apparatus then releases renin and a corrective chain is set off. The chain runs",
    options: [
      "renin, then angiotensin, then aldosterone, so that sodium and water are retained and blood volume and pressure rise",
      "renin, then aldosterone, then angiotensin, so that the arterioles widen and water is lost",
      "renin, then water loss from the collecting duct, then angiotensin, so that blood volume falls still further",
      "renin, then glucose release from the liver, then angiotensin, so that the blood becomes thicker",
    ],
    correctIndex: 0,
    explanation:
      "Renin starts the formation of angiotensin, which constricts arterioles and promotes the release of aldosterone. Aldosterone increases sodium re-absorption, water follows the sodium, and blood volume and pressure are restored.",
    evidence:
      "The juxtaglomerular apparatus of the kidney releases renin, which leads to the formation of angiotensin and the release of aldosterone, raising blood volume and pressure.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 89,
    outcome: "BIO-15.3",
    concept: "renin and blood pressure",
  },
  {
    key: "xii-r2-kidney-failure-homeostasis",
    text: "In long-standing kidney failure several homeostatic variables drift out of range together.\nI. Wastes such as urea build up in the blood because the nephrons can no longer filter and excrete them.\nII. Water and salts are retained because the kidney can no longer adjust how much of them it reabsorbs.\nIII. The blood tends to become more acidic because hydrogen ions can no longer be secreted into the tubule.\nIV. The balance of the internal environment is maintained exactly as before because other organs take the work over completely.\nWhich of these statements is incorrect?",
    options: [
      "Statement IV is incorrect",
      "Statement II is incorrect",
      "Statement I is incorrect",
      "Statement III is incorrect",
    ],
    correctIndex: 0,
    explanation:
      "Statements I, II and III all follow from the loss of nephron function, since wastes accumulate, water and salts are retained and acid can no longer be excreted. No other organ takes the place of the kidney in this regulation, so statement IV is the incorrect one.",
    evidence:
      "In kidney failure the kidneys can no longer excrete wastes, regulate water and salt balance, or help maintain the pH of the blood.",
    questionType: "STATEMENT_BASED",
    difficulty: "HARD",
    relevance: 92,
    outcome: "BIO-15.6",
    concept: "failure of homeostasis",
  },
  {
    key: "xii-r2-hypertension-glomerular-damage",
    text: "Long-standing high blood pressure is listed among the causes of kidney failure. The connection between the two is that",
    options: [
      "the raised pressure makes the kidney release an excess of renin, which dissolves the nephrons",
      "the raised pressure damages the fine glomerular capillaries, so the kidney gradually loses its filtering surface",
      "the raised pressure stops the heart from beating, so the kidneys receive no blood at all",
      "the raised pressure turns the cartilage of the joints into bone and traps the kidneys",
    ],
    correctIndex: 1,
    explanation:
      "The glomerular capillaries are the finest vessels of the kidney and are exposed to the full pressure of the blood, so years of raised pressure damage them, and the nephrons slowly lose the surface through which they filter.",
    evidence: "Long-standing hypertension damages the glomeruli and is a major cause of kidney failure.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 91,
    outcome: "BIO-15.6",
    concept: "hypertension and glomeruli",
  },
];
