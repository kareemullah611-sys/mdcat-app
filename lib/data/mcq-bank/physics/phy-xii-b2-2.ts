import type { BankItem } from "../build";

export const items: BankItem[] = [
  {
    key: "xii-mag1-internal-r-open-circuit",
    text: "An open external circuit leaves a cell of emf E and internal resistance r supplying no current. What is the terminal voltage across its terminals in this state?",
    options: [
      "Equal to zero volts, because no current is available to sustain a voltage",
      "Equal to the internal drop Ir inside the cell, which is zero only if r is zero",
      "Equal to the emf E, because the drop Ir inside the cell vanishes",
      "Equal to half the emf E/2, because the internal resistance always halves the emf",
    ],
    correctIndex: 2,
    explanation:
      "The terminal voltage is V = E - Ir. With the external circuit open the current is zero, so the drop Ir inside the cell is zero and the terminals deliver the full emf E.",
    evidence:
      "The potential difference between the terminals of a cell equals its emf when the circuit is open and no current flows.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-9.4",
    concept: "open circuit terminal voltage",
  },
  {
    key: "xii-mag1-internal-r-heavy-load-drops",
    text: "The same cell supplies two different bulbs, one of small resistance and one of large resistance. How does the terminal voltage compare in the two cases?",
    options: [
      "It is larger for the large-resistance bulb, because the smaller current drawn produces a smaller internal drop",
      "It is the same in both cases, since the emf of the cell does not change",
      "It is smaller for the large-resistance bulb, because the internal drop is then larger",
      "It falls to zero for the small-resistance bulb, because that bulb takes the whole emf",
    ],
    correctIndex: 0,
    explanation:
      "The smaller current drawn by the large-resistance bulb gives a smaller loss of volts as Ir inside the cell, so its terminal voltage stays closer to the emf than that of the heavily loaded small-resistance bulb.",
    evidence:
      "The terminal voltage of a cell falls below its emf by an amount equal to Ir, and a heavy current load increases this loss.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-9.4",
    concept: "load dependent voltage",
  },
  {
    key: "xii-mag1-internal-r-terminal-drop-calc",
    text: "A cell of emf 10 V and internal resistance 0.40 ohm supplies a current of 5.0 A. What is the terminal voltage across its terminals?",
    options: ["10.0 V", "12.0 V", "2.0 V", "8.0 V"],
    correctIndex: 3,
    explanation:
      "The lost volts inside the cell are Ir = 5.0 x 0.40 = 2.0 V, so the terminal voltage is V = 10 - 2.0 = 8.0 V, which is less than the emf because current is flowing.",
    evidence:
      "For a cell of emf E and internal resistance r supplying a current I, the terminal voltage is V = E - Ir.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-9.4",
    concept: "terminal voltage drop",
  },
  {
    key: "xii-mag1-internal-r-statement-set",
    text: "Only one of the following statements about a cell of emf E and internal resistance r is correct. Which one is it?",
    options: [
      "The terminal voltage of a cell equals its emf even when a large current is drawn from it",
      "The difference between the emf and the terminal voltage grows as the current drawn from the cell increases",
      "Increasing the internal resistance of a cell raises the terminal voltage that the cell delivers to a load",
      "A cell connected to a very small external resistance delivers a terminal voltage equal to its full emf",
    ],
    correctIndex: 1,
    explanation:
      "The gap between emf and terminal voltage is Ir, which increases directly with the current drawn, so the terminal voltage falls further below E as the load draws more current.",
    evidence:
      "Because the internal resistance r is in series with the emf, the lost volts Ir grow in proportion to the current supplied by the cell.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.4",
    concept: "emf voltage gap",
  },
  {
    key: "xii-mag1-emf-versus-terminal-voltage",
    text: "How does the emf of a cell differ from the terminal voltage that the same cell supplies to an external circuit?",
    options: [
      "The emf is larger than the terminal voltage even when the external circuit carries no current",
      "The emf is the voltage across the internal resistance while the terminal voltage is the voltage across the load",
      "They are the same quantity measured at different points of the circuit",
      "The emf is the total energy supplied per unit charge by the cell, while the terminal voltage is what remains after the drop Ir inside it",
    ],
    correctIndex: 3,
    explanation:
      "Emf measures the total work done per unit charge by the cell, whereas the terminal voltage is what survives the loss Ir inside the cell before reaching the external circuit, so it is smaller whenever current flows.",
    evidence:
      "Emf is the energy converted per unit charge inside the source, while the terminal potential difference is reduced by the drop across the internal resistance.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 98,
    outcome: "PHY-9.4",
    concept: "emf and terminal voltage",
  },
  {
    key: "xii-mag1-internal-r-two-step-terminal-voltage",
    text: "A source of emf 6.0 V and internal resistance 0.50 ohm drives an external resistor of 5.5 ohm. Find the terminal voltage across the source.",
    options: ["6.0 V", "1.0 V", "5.5 V", "0.5 V"],
    correctIndex: 2,
    explanation:
      "The total resistance in the circuit is 5.5 + 0.50 = 6.0 ohm, so the current is I = 6.0/6.0 = 1.0 A and the terminal voltage is V = 6.0 - (1.0)(0.50) = 5.5 V.",
    evidence:
      "When a cell drives an external load, the current is set by the sum of the load resistance and the internal resistance of the cell.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-9.4",
    concept: "two step terminal voltage",
  },
  {
    key: "xii-mag1-max-power-condition",
    text: "Under what condition does a cell of emf E and internal resistance r deliver the greatest power to a load resistance R?",
    options: [
      "When R is much larger than r, so that the load takes nearly the whole emf",
      "When R equals r, so that the load resistance is matched to the internal resistance",
      "When R is much smaller than r, so that the current through the cell is as large as possible",
      "When R equals half of r, so that half of the emf is used up inside the cell",
    ],
    correctIndex: 1,
    explanation:
      "Power in the load is P = I^2 R with I = E/(R + r), and this expression reaches its maximum value E^2/(4r) when R is equal to r.",
    evidence:
      "A source delivers maximum power to a load when the load resistance is equal to the internal resistance of the source.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 99,
    outcome: "PHY-9.5",
    concept: "maximum power condition",
  },
  {
    key: "xii-mag1-max-power-not-max-current",
    text: "The current from a cell of internal resistance r is largest when the external resistance is reduced to zero. Why does that setting not deliver the greatest power to the load?",
    options: [
      "Because the emf of the cell falls to zero when the external resistance is reduced to zero",
      "Because a zero-resistance load cannot carry any current, so no power is transferred to it",
      "Because the power delivered to the load is independent of the current that supplies it",
      "Because with a short-circuited load almost all the power is dissipated inside the cell as heat and very little reaches the load",
    ],
    correctIndex: 3,
    explanation:
      "With R close to zero almost the entire product I^2 r is lost inside the cell, so the product I^2 R in the load becomes very small even though the current is at its maximum.",
    evidence:
      "Most of the energy is wasted as heat inside the source when the external circuit offers a resistance smaller than the internal resistance.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-9.5",
    concept: "internal power loss",
  },
  {
    key: "xii-mag1-max-power-value-calc",
    text: "Maximum power is drawn from a cell of emf 2.0 V and internal resistance 2.0 ohm. What is that maximum power?",
    options: ["0.50 W", "1.00 W", "0.25 W", "2.00 W"],
    correctIndex: 0,
    explanation:
      "At maximum power delivery R equals r, so the power is P = E^2/(4r) = (2.0)^2/(4 x 2.0) = 4.0/8.0 = 0.50 W.",
    evidence:
      "The greatest power a source can deliver is E^2 divided by four times its internal resistance.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-9.5",
    concept: "maximum power value",
  },
  {
    key: "xii-mag1-max-power-half-share",
    text: "A load resistance is matched to the internal resistance of a cell so that the load receives the greatest possible power. Which statement correctly describes the terminal voltage and the power dissipation inside the cell in this condition?",
    options: [
      "The terminal voltage equals the emf and all the power is dissipated inside the cell",
      "The terminal voltage equals the emf and half of the total power is dissipated inside the cell",
      "The terminal voltage is half the emf and half of the total power is dissipated inside the cell",
      "The terminal voltage is half the emf and all the total power is dissipated inside the cell",
    ],
    correctIndex: 2,
    explanation:
      "With R equal to r the terminal voltage is E - Ir = E/2, and since the same current flows through both resistances, each of them dissipates an equal share I^2 r of the total power IE.",
    evidence:
      "At maximum power transfer the load resistance and the internal resistance are equal, so the same current flows through both and each takes half of the power.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-9.5",
    concept: "power sharing at match",
  },
  {
    key: "xii-mag1-max-power-terminal-voltage-calc",
    text: "Delivering maximum power, a cell of emf 16 V and internal resistance 4.0 ohm drives an adjustable load. What is the terminal voltage of the cell in this condition?",
    options: ["12.0 V", "8.0 V", "16.0 V", "4.0 V"],
    correctIndex: 1,
    explanation:
      "Maximum power requires R = r = 4.0 ohm, so the current is I = 16/(4.0 + 4.0) = 2.0 A and the terminal voltage is V = 16 - (2.0)(4.0) = 8.0 V, exactly half the emf.",
    evidence:
      "When a cell supplies a load equal to its internal resistance it gives a terminal voltage equal to half its emf.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 96,
    outcome: "PHY-9.5",
    concept: "terminal voltage at match",
  },
  {
    key: "xii-mag1-power-as-load-resistance-falls",
    text: "Consider a cell of emf E and internal resistance r driving a load whose resistance R is reduced step by step from a very large value to a very small value. In this order of change, how do R, the circuit current and the power delivered to the load behave?",
    options: [
      "R falls steadily, the current rises steadily, and the power in the load first rises and then falls",
      "R falls steadily, the current falls steadily, and the power in the load rises steadily",
      "R rises steadily, the current rises steadily, and the power in the load rises steadily",
      "R falls steadily, the current rises steadily, and the power in the load rises steadily",
    ],
    correctIndex: 0,
    explanation:
      "R falls and I = E/(R + r) rises steadily, but the load power E^2 R/(R + r)^2 climbs only until R equals r and then drops, so the power first rises and then falls.",
    evidence:
      "Power delivered to the load is E^2 R divided by (R + r)^2, which is a maximum when R equals r.",
    questionType: "SEQUENCE",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-9.5",
    concept: "load sweep power trend",
  },
  {
    key: "xii-mag1-tesla-weber-pair",
    text: "Which pair of magnetic quantities is matched correctly with the SI unit used to measure it?",
    options: [
      "Tesla for magnetic flux and weber for magnetic flux density",
      "Weber for magnetic flux density and tesla for the strength of the magnetic field itself",
      "Tesla for magnetic flux density and weber for electric field strength",
      "Weber for magnetic flux and tesla for magnetic flux density",
    ],
    correctIndex: 3,
    explanation:
      "Magnetic flux Phi is measured in webers, while magnetic flux density B, being flux per unit area, is measured in teslas.",
    evidence:
      "The weber is the SI unit of magnetic flux and the tesla is the SI unit of magnetic flux density.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-10.1",
    concept: "weber and tesla units",
  },
  {
    key: "xii-mag1-flux-density-force-definition",
    text: "The magnetic flux density B at a point in a magnetic field can be defined by the force on a current-carrying conductor placed at that point. Which statement expresses this definition correctly?",
    options: [
      "B equals the total magnetic force on the conductor divided by the current in it",
      "B equals the magnetic force on the conductor when the conductor is placed parallel to the field",
      "B equals the magnetic force on the conductor divided by its length when the conductor lies along the field",
      "B equals the magnetic force on the conductor per unit length of the conductor when the conductor is placed at right angles to the field",
    ],
    correctIndex: 3,
    explanation:
      "At right angles to the field the magnetic force F = BIL holds, so B is the force on each metre of a conductor carrying current I placed perpendicular to the field.",
    evidence:
      "A conductor of length L carrying current I at right angles to a field of flux density B experiences a force F = BIL.",
    questionType: "CONCEPTUAL",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-10.1",
    concept: "flux density force definition",
  },
  {
    key: "xii-mag1-unit-statement-set",
    text: "Three statements about the SI units of magnetic flux and flux density are listed. Only one of them is correct. Which one is it?",
    options: [
      "The weber is the SI unit of magnetic flux density while the tesla is the SI unit of magnetic flux",
      "One tesla is the flux density that produces one weber of flux through an area of one square metre placed normally to the field",
      "One weber is a magnetic flux density equal to one volt-second per square metre",
      "One tesla equals one weber, because flux and flux density are measured in the same unit",
    ],
    correctIndex: 1,
    explanation:
      "One tesla acting normally on one square metre encloses one weber, so the tesla is a flux per unit area; a weber of flux corresponds to one tesla times one square metre, which is also one volt-second.",
    evidence:
      "One weber is the flux that results from a flux density of one tesla acting normally on an area of one square metre.",
    questionType: "STATEMENT_BASED",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-10.1",
    concept: "si unit relationships",
  },
  {
    key: "xii-mag1-flux-density-calculation",
    text: "A straight conductor of length 0.25 m carries a current of 4.0 A and feels a magnetic force of 0.50 N when placed at right angles to a uniform field. What is the flux density of the field?",
    options: ["0.125 T", "2.0 T", "0.50 T", "8.0 T"],
    correctIndex: 2,
    explanation:
      "Since F = BIL at right angles, B = F/(IL) = 0.50/(4.0 x 0.25) = 0.50/1.0 = 0.50 T.",
    evidence:
      "From F = BIL the flux density follows as B = F divided by the product of the current and the length of the conductor.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 95,
    outcome: "PHY-10.1",
    concept: "flux density from force",
  },
  {
    key: "xii-mag1-force-direction-hand-rule",
    text: "The force on a current-carrying conductor placed in a magnetic field has a direction that can be predicted by a hand rule. Which rule gives that direction?",
    options: [
      "The left-hand rule, with the first two fingers setting the field and current directions",
      "The right-hand grip rule, which gives the direction of the induced current",
      "The right-hand thumb rule, which gives the direction of the field around a straight conductor",
      "The left-hand rule with the thumb laid along the conventional current",
    ],
    correctIndex: 0,
    explanation:
      "In the left-hand rule the index finger is aligned with the field, the middle finger with the current, and the extended thumb then gives the direction of the force on the conductor.",
    evidence:
      "The direction of the force on a current-carrying conductor in a magnetic field is found with the left-hand rule.",
    questionType: "REASONING",
    difficulty: "MEDIUM",
    relevance: 93,
    outcome: "PHY-10.1",
    concept: "force direction hand rule",
  },
  {
    key: "xii-mag1-right-hand-thumb-rule",
    text: "When the right-hand thumb rule is applied to a current-carrying straight conductor, what do the bent fingers and the stretched thumb indicate?",
    options: [
      "The bent fingers give the direction of the current and the thumb gives the direction of the force on the conductor",
      "The bent fingers curl in the direction of the magnetic field around the conductor and the thumb points along the current",
      "The bent fingers give the direction of the magnetic field and the thumb gives the direction of the force on the conductor",
      "The bent fingers curl along the magnetic field and the thumb points opposite to the current",
    ],
    correctIndex: 1,
    explanation:
      "Pointing the right thumb along the current makes the fingers curl in the sense of the circular magnetic field that surrounds the conductor.",
    evidence:
      "The right-hand thumb rule shows the direction of the circular magnetic field around a current-carrying straight conductor.",
    questionType: "FACTUAL",
    difficulty: "EASY",
    relevance: 92,
    outcome: "PHY-10.1",
    concept: "thumb rule field direction",
  },
  {
    key: "xii-mag1-flux-scalar-product-meaning",
    text: "Magnetic flux through a surface is the scalar product of the magnetic field B with the area vector of that surface. What does this definition imply about the value of the flux?",
    options: [
      "The flux is largest when the field lies along the plane of the area and zero when the field is perpendicular to it",
      "The flux is largest when the field is perpendicular to the area and zero when the field lies in the plane of the area",
      "The flux is the same for every orientation of the area because a scalar product removes all dependence on direction",
      "The flux depends only on the size of the area and is independent of both field strength and orientation",
    ],
    correctIndex: 1,
    explanation:
      "Since flux is BA cos theta with theta measured from the area normal, it reaches the full value BA when the field is perpendicular to the area and vanishes when the field lies along the plane of the area.",
    evidence:
      "Magnetic flux is the scalar product of the field and the area vector, so it is greatest for a field perpendicular to the surface and zero for a field in its plane.",
    questionType: "CONCEPTUAL",
    difficulty: "EASY",
    relevance: 99,
    outcome: "PHY-10.2",
    concept: "flux orientation dependence",
  },
  {
    key: "xii-mag1-flux-equation-expression",
    text: "Let theta be the angle between a uniform field B and the normal to a flat area A. Which expression gives the magnetic flux Phi through that area?",
    options: ["Phi = B A cos theta", "Phi = B A sin theta", "Phi = B A / cos theta", "Phi = B^2 A cos theta"],
    correctIndex: 0,
    explanation:
      "The scalar product of the field with the area vector is Phi = BA cos theta, which reduces to BA when the field is along the normal and to zero when theta is 90 degrees.",
    evidence:
      "Magnetic flux through a plane surface is the product BA cos theta, where theta is the angle between the field and the normal to the surface.",
    questionType: "FACTUAL",
    difficulty: "MEDIUM",
    relevance: 97,
    outcome: "PHY-10.2",
    concept: "flux equation expression",
  },
  {
    key: "xii-mag1-flux-perpendicular-calculation",
    text: "A field of flux density 2.5 x 10^-3 T passes normally through a flat area of 0.40 m^2. What is the magnetic flux through the area?",
    options: ["2.5 x 10^-3 Wb", "6.25 x 10^-3 Wb", "1.0 x 10^-3 T", "1.0 x 10^-3 Wb"],
    correctIndex: 3,
    explanation:
      "Because the field is along the normal, theta is zero and cos theta is 1, so the flux is Phi = BA = (2.5 x 10^-3)(0.40) = 1.0 x 10^-3 Wb, measured in webers.",
    evidence:
      "When the field is perpendicular to the surface the flux equals the product of the flux density and the area, and it is measured in webers.",
    questionType: "APPLICATION",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-10.2",
    concept: "perpendicular flux value",
  },
  {
    key: "xii-mag1-flux-oblique-calculation",
    text: "A flat area of 0.20 m^2 is placed in a uniform field of flux density 0.50 T, with the normal to the area making 60 degrees with the field. What is the flux through the area?",
    options: ["0.10 Wb", "0.20 Wb", "0.05 Wb", "0.087 Wb"],
    correctIndex: 2,
    explanation:
      "Using Phi = BA cos theta with the angle measured from the normal gives Phi = (0.50)(0.20)(cos 60 degrees) = 0.10 x 0.5 = 0.05 Wb.",
    evidence:
      "The flux through an area that is not perpendicular to the field is reduced by the factor cos theta compared with the product BA.",
    questionType: "MDCAT_STYLE",
    difficulty: "MEDIUM",
    relevance: 96,
    outcome: "PHY-10.2",
    concept: "oblique flux value",
  },
  {
    key: "xii-mag1-flux-three-orientations",
    text: "The same flat coil is placed in the same uniform field in three orientations. Compare the flux through the coil when the field is perpendicular to the area, when it makes 60 degrees with the normal, and when it lies in the plane of the area.",
    options: [
      "Phi(a) = 0, Phi(b) = BA cos 60 degrees = BA/2, Phi(c) = BA",
      "Phi(a) = BA, Phi(b) = BA cos 60 degrees = BA/2, Phi(c) = 0",
      "Phi(a) = BA, Phi(b) = 0, Phi(c) = BA cos 60 degrees = BA/2",
      "Phi(a) = BA, Phi(b) = BA sin 60 degrees, Phi(c) = BA sin 0 degrees = 0, all equal to BA",
    ],
    correctIndex: 1,
    explanation:
      "Applying Phi = BA cos theta in turn gives BA for the perpendicular case, BA cos 60 degrees = BA/2 for the inclined case and zero for the field lying in the plane of the coil.",
    evidence:
      "The flux through a coil is BA cos theta, so it equals BA for a normal field and is zero when the field lies along the plane of the coil.",
    questionType: "COMPARISON",
    difficulty: "MEDIUM",
    relevance: 94,
    outcome: "PHY-10.2",
    concept: "flux across orientations",
  },
  {
    key: "xii-mag1-flux-as-coil-rotates",
    text: "A flat coil of area 0.10 m^2 lies in a uniform field of flux density 0.40 T and is turned so that the angle between the field and the coil normal goes from 0 degrees through 90 degrees to 180 degrees. How does the flux behave in this order of rotation?",
    options: [
      "It falls from BA = 0.040 Wb to BA/2 at 60 degrees and to zero at 90 degrees, then becomes negative beyond 90 degrees",
      "It stays at BA = 0.040 Wb throughout, because the field strength is unchanged",
      "It rises from zero to a maximum of BA = 0.040 Wb as the angle goes from 0 degrees to 90 degrees",
      "It falls from BA = 0.040 Wb to zero at 90 degrees and then rises back to BA at 180 degrees",
    ],
    correctIndex: 0,
    explanation:
      "With Phi = BA cos theta the flux starts at 0.040 Wb, is half that at 60 degrees, reaches zero at 90 degrees, and reverses sign for larger angles because the cosine becomes negative.",
    evidence:
      "Because flux follows BA cos theta, it passes through zero at 90 degrees and reverses direction beyond a right angle.",
    questionType: "SEQUENCE",
    difficulty: "HARD",
    relevance: 94,
    outcome: "PHY-10.2",
    concept: "flux during rotation",
  },
  {
    key: "xii-mag1-flux-reduced-by-turning",
    text: "A uniform field of flux density 2.0 x 10^-2 T passes normally through a flat coil of area 0.30 m^2, giving a flux of 6.0 x 10^-3 Wb. If the coil is turned so that its normal makes 30 degrees with the field, what is the new flux?",
    options: [
      "3.0 x 10^-3 Wb",
      "6.0 x 10^-3 Wb",
      "5.2 x 10^-3 Wb",
      "1.04 x 10^-2 Wb",
    ],
    correctIndex: 2,
    explanation:
      "The flux after turning is the original flux multiplied by cos 30 degrees, so Phi = (6.0 x 10^-3)(0.866) = 5.2 x 10^-3 Wb, which is a direct use of Phi = BA cos theta.",
    evidence:
      "Turning a coil away from the normal multiplies the enclosed flux by the cosine of the new angle between the field and the normal.",
    questionType: "MDCAT_STYLE",
    difficulty: "HARD",
    relevance: 95,
    outcome: "PHY-10.2",
    concept: "flux after turning coil",
  },
];