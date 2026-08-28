export type CityPageContent = {
  title: string;
  metaDescription: string;
  intro: string;
  localContext: string[];
  featuredServices: string[];
  concreteConditions: string[];
  whyKiwi: string[];
  projectProof: string;
  reviewProof: string;
  nearbyCities: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const cityPageContent: Record<string, CityPageContent> = {
  mesa: {
    title: "Floor Coatings in Mesa, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings in Mesa, AZ.",
    intro:
      "Mesa property owners use concrete in a lot of different ways, from daily-use garages and workshops to patios, pool decks, showrooms, and storage areas. Kiwi Coatings AZ serves Mesa with coating systems selected around the surface, exposure, traffic, and the look the space needs.",
    localContext: [
      "Mesa garages often function as storage zones, work areas, and high-traffic entry points into the home. A coating system can help make those spaces easier to clean while giving bare concrete a more finished appearance.",
      "Outdoor concrete also matters in Mesa. Patios, walkways, and pool deck areas need coating conversations that account for sun exposure, dust, water, texture, and maintenance."
    ],
    featuredServices: ["garage-floor-coatings", "polyaspartic-floor-coatings", "epoxy-floor-coatings", "patio-and-pool-deck-coatings", "metallic-epoxy-floors", "commercial-floor-coatings"],
    concreteConditions: [
      "Heat and sunlight near garage doors and outdoor concrete",
      "Dust that can make bare concrete feel difficult to keep clean",
      "Vehicle traffic, tire marks, tools, and stored household items",
      "Patio and pool deck surfaces that need texture and finish planning"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Residential and commercial coating options for garages, patios, showrooms, shops, and utility spaces",
      "Coating variety including epoxy, polyaspartic, flake, quartz, metallic, and specialty finishes",
      "Surface preparation and system selection based on concrete condition and intended use"
    ],
    projectProof:
      "Future Mesa case studies can be added here when verified project photos, service type, and customer-approved details are available.",
    reviewProof:
      "Mesa-specific reviews should appear here only after real customer review content is verified and approved for use.",
    nearbyCities: ["gilbert", "chandler", "apache-junction"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Mesa?", answer: "Yes. Mesa is one of the verified service areas for Kiwi Coatings AZ." },
      { question: "What coatings are most relevant for Mesa garages?", answer: "Garage floor coatings, polyaspartic systems, epoxy systems, and flake finishes are common options to compare for Mesa garages." },
      { question: "Can Mesa patio or pool deck concrete be coated?", answer: "Often, yes. Outdoor concrete should be evaluated for exposure, texture needs, water use, existing coatings, and surface condition." },
      { question: "Are commercial coatings available in Mesa?", answer: "Yes. Kiwi Coatings AZ offers commercial floor coating options for shops, showrooms, offices, storage areas, and similar spaces." },
      { question: "What should I share when requesting a Mesa quote?", answer: "Share the surface type, approximate location, current concrete condition, desired finish, and how the space will be used." }
    ]
  },
  chandler: {
    title: "Floor Coatings in Chandler, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings in Chandler, AZ.",
    intro:
      "Chandler projects often need a balance of clean residential finishes and practical durability. Kiwi Coatings AZ serves Chandler homeowners and businesses with concrete coating systems for garages, patios, light commercial spaces, and decorative floors.",
    localContext: [
      "Many Chandler garages need to handle parked vehicles, storage, tools, bikes, and the everyday dust that follows people in from outside. A coating system can help the garage feel more finished and easier to maintain.",
      "For businesses and customer-facing spaces, the floor also affects how clean and professional the room feels. The system should be chosen around foot traffic, cleaning, sunlight, and the visual tone of the space."
    ],
    featuredServices: ["garage-floor-coatings", "polyaspartic-floor-coatings", "epoxy-floor-coatings", "commercial-floor-coatings", "metallic-epoxy-floors", "flake-floor-systems"],
    concreteConditions: [
      "Garage use, tire traffic, and storage wear",
      "Dust and tracked-in debris",
      "Sun exposure near doors, patios, and windows",
      "Commercial and light industrial spaces that need routine cleaning"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Residential and light commercial coating systems",
      "Finish choices ranging from practical flake systems to decorative metallic epoxy",
      "Preparation-focused process before coating layers are installed"
    ],
    projectProof:
      "Future Chandler project examples can be added here when verified city-tagged project details are available.",
    reviewProof:
      "Chandler review content should be added only when real customer reviews are verified and approved.",
    nearbyCities: ["gilbert", "mesa", "phoenix"],
    faqs: [
      { question: "Does Kiwi Coatings AZ work in Chandler?", answer: "Yes. Chandler is included in the verified Kiwi Coatings AZ service area." },
      { question: "What coating should I consider for a Chandler garage?", answer: "Start by comparing garage floor coatings, epoxy, polyaspartic, and flake systems. The right choice depends on traffic, sun exposure, and finish preference." },
      { question: "Can a Chandler business request commercial floor coatings?", answer: "Yes. Commercial coating options are available for shops, offices, showrooms, storage areas, and service spaces." },
      { question: "Are metallic epoxy floors appropriate for Chandler spaces?", answer: "Metallic epoxy can fit interior decorative floors and showrooms when the environment, lighting, and traffic make sense." },
      { question: "How does Kiwi choose the right system?", answer: "The team reviews concrete condition, surface use, exposure, cleaning expectations, and appearance goals before recommending a coating direction." }
    ]
  },
  gilbert: {
    title: "Floor Coatings in Gilbert, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage floor coatings, epoxy, polyaspartic, patio and pool deck coatings, metallic epoxy, and commercial floor coatings in Gilbert, AZ.",
    intro:
      "Gilbert homeowners often want garage and outdoor concrete to feel as finished as the rest of the property. Kiwi Coatings AZ serves Gilbert with coating systems for garages, patios, pool decks, decorative concrete, and select commercial spaces.",
    localContext: [
      "Garage floors in Gilbert may need to support vehicles, storage, home projects, and a clean transition into the house. Coatings can help reduce the unfinished look of bare concrete while improving day-to-day cleanability.",
      "Backyard concrete is also important. Patio and pool deck surfaces need texture, UV exposure, water, and maintenance considered before a coating system is selected."
    ],
    featuredServices: ["garage-floor-coatings", "polyaspartic-floor-coatings", "patio-and-pool-deck-coatings", "epoxy-floor-coatings", "flake-floor-systems", "metallic-epoxy-floors"],
    concreteConditions: [
      "Garage dust and tire traffic",
      "Sun-exposed concrete near exterior openings",
      "Outdoor surfaces affected by water, dust, and furniture movement",
      "Decorative expectations for finished residential spaces"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Garage, patio, decorative, and commercial coating options",
      "Custom flake, quartz, metallic, polyaspartic, and epoxy system directions",
      "System recommendations based on surface condition, use, and maintenance goals"
    ],
    projectProof:
      "Future Gilbert case studies can be placed here when verified project media and details are ready.",
    reviewProof:
      "Real Gilbert customer reviews can be featured here after verification and approval.",
    nearbyCities: ["mesa", "chandler", "queen-creek"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Gilbert?", answer: "Yes. Gilbert is a verified service area for Kiwi Coatings AZ." },
      { question: "What floor coating is popular for Gilbert garages?", answer: "Garage floor coatings with flake, epoxy, or polyaspartic components are common options to compare. The final system should match the concrete and use." },
      { question: "Can Kiwi coat Gilbert patios and pool decks?", answer: "Yes. Outdoor concrete can be evaluated for patio and pool deck coating options with appropriate texture and exposure planning." },
      { question: "Should I choose epoxy or polyaspartic?", answer: "It depends on UV exposure, desired finish, traffic, cure planning, and whether the system needs decorative broadcast layers." },
      { question: "Can decorative finishes work in Gilbert homes?", answer: "Yes. Metallic epoxy, flake blends, quartz, and specialty finishes can be considered where the space and use make sense." }
    ]
  },
  "queen-creek": {
    title: "Floor Coatings in Queen Creek, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings in Queen Creek, AZ.",
    intro:
      "Queen Creek properties often place a lot of value on finished garages, outdoor living areas, and durable surfaces that fit everyday home life. Kiwi Coatings AZ serves Queen Creek with garage, patio, pool deck, decorative, and protective concrete coating systems.",
    localContext: [
      "Newer and established homes alike can have garage concrete that is plain, dusty, stained, or not aligned with the rest of the home. A coating system can help turn that surface into a cleaner and more usable part of the property.",
      "Outdoor concrete should be approached with sun, water, dust, and texture in mind. Patios and pool decks need a different system conversation than enclosed interior floors."
    ],
    featuredServices: ["garage-floor-coatings", "patio-and-pool-deck-coatings", "polyaspartic-floor-coatings", "epoxy-floor-coatings", "metallic-epoxy-floors", "flake-floor-systems"],
    concreteConditions: [
      "Dust and vehicle use in garages",
      "New-home concrete that may need finish planning",
      "Sun and outdoor exposure on patios and pool decks",
      "Backyard surfaces that need a finished look and practical texture"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Coating options for garages, patios, pool decks, workshops, and decorative spaces",
      "Custom flake blends, metallic epoxy, quartz, epoxy, and polyaspartic systems",
      "Evaluation of concrete condition before coating recommendations"
    ],
    projectProof:
      "Future Queen Creek project proof should be added here only when verified photos and project context are available.",
    reviewProof:
      "Queen Creek-specific review proof should use only verified customer review content.",
    nearbyCities: ["san-tan-valley", "gilbert", "mesa"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Queen Creek?", answer: "Yes. Queen Creek is included in the verified service area." },
      { question: "What services should Queen Creek homeowners compare first?", answer: "Garage floor coatings, patio and pool deck coatings, polyaspartic systems, epoxy systems, and flake finishes are useful starting points." },
      { question: "Can garage concrete in a newer home be coated?", answer: "Often, yes. The concrete still needs to be evaluated for condition, surface profile, moisture concerns, and the intended use of the garage." },
      { question: "Are outdoor coatings different from garage coatings?", answer: "Yes. Outdoor coatings need additional consideration for sun, water, texture, and exterior maintenance." },
      { question: "Can Kiwi help choose colors or flake blends?", answer: "Yes. Finish direction can be discussed around the home, garage, exterior surfaces, lighting, and maintenance preference." }
    ]
  },
  "san-tan-valley": {
    title: "Floor Coatings in San Tan Valley, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings in San Tan Valley, AZ.",
    intro:
      "San Tan Valley homeowners often need practical coatings for garages, backyard concrete, workshops, and spaces that see dust, heat, and regular use. Kiwi Coatings AZ serves San Tan Valley with coating systems selected around the surface and how the property owner plans to use it.",
    localContext: [
      "Garages in San Tan Valley can quickly become working storage spaces, hobby areas, or high-traffic entry points. Coating the concrete can help with appearance and maintenance while giving the floor a more complete feel.",
      "Backyard patios and other outdoor concrete surfaces should be evaluated for sun exposure, texture, cleaning needs, and whether water will be part of the use pattern."
    ],
    featuredServices: ["garage-floor-coatings", "polyaspartic-floor-coatings", "patio-and-pool-deck-coatings", "epoxy-floor-coatings", "flake-floor-systems", "quartz-floor-coatings"],
    concreteConditions: [
      "Dust that tracks through garages and outdoor spaces",
      "Garage traffic from vehicles, tools, and storage",
      "Sun-exposed patios and backyard concrete",
      "Concrete that needs cleaning and finish improvements"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Residential coating systems for garages, patios, workshops, and backyard concrete",
      "Protective and decorative options including flake, quartz, epoxy, and polyaspartic systems",
      "Process-driven preparation before coating layers are installed"
    ],
    projectProof:
      "Future San Tan Valley case studies can be added when verified city-tagged project content is available.",
    reviewProof:
      "San Tan Valley reviews should be added only after real customer review content is verified.",
    nearbyCities: ["queen-creek", "florence", "coolidge"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve San Tan Valley?", answer: "Yes. San Tan Valley is a verified Kiwi Coatings AZ service area." },
      { question: "What coating is useful for San Tan Valley garages?", answer: "Garage floor coatings, flake systems, epoxy, and polyaspartic options are common systems to compare." },
      { question: "Can patios be coated in San Tan Valley?", answer: "Yes. Patio coatings can be considered after reviewing sun exposure, surface condition, texture needs, and outdoor maintenance." },
      { question: "Is quartz flooring relevant for this area?", answer: "Quartz systems can be considered where a textured, durable finish is more important than a smooth decorative look." },
      { question: "What should I expect before a coating recommendation?", answer: "Kiwi should review the concrete, intended use, exposure, finish preference, and any visible cracks or old coatings." }
    ]
  },
  maricopa: {
    title: "Floor Coatings in Maricopa, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, flake, quartz, metallic, and commercial floor coatings in Maricopa, AZ.",
    intro:
      "Maricopa homeowners use garages, patios, and outdoor concrete as part of daily desert living. Kiwi Coatings AZ serves Maricopa with coating systems for residential concrete, backyard surfaces, decorative floors, and select commercial spaces.",
    localContext: [
      "Garage floors in Maricopa may need to handle vehicles, storage, heat, and dust while still looking clean enough for a finished home. A coating system can make the space easier to use and maintain.",
      "Patios and backyard concrete need attention to exposure, water, texture, and cleaning. The system should be chosen for the surface rather than copied from an indoor floor."
    ],
    featuredServices: ["garage-floor-coatings", "patio-and-pool-deck-coatings", "polyaspartic-floor-coatings", "epoxy-floor-coatings", "flake-floor-systems", "commercial-floor-coatings"],
    concreteConditions: [
      "New-home and existing garage concrete",
      "Dust and heat exposure",
      "Outdoor concrete affected by sun and routine use",
      "Surfaces that need better cleaning and a more finished appearance"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Garage, outdoor, decorative, and commercial coating options",
      "Coating variety including epoxy, polyaspartic, flake, quartz, metallic, and specialty finishes",
      "Concrete preparation and repair evaluation where appropriate"
    ],
    projectProof:
      "Future Maricopa project proof can be placed here when verified photos and project details are available.",
    reviewProof:
      "Maricopa review proof should be added only from verified customer reviews.",
    nearbyCities: ["casa-grande", "phoenix", "queen-creek"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Maricopa?", answer: "Yes. Maricopa is included in the verified service area." },
      { question: "What coatings should Maricopa homeowners consider?", answer: "Garage coatings, patio and pool deck coatings, epoxy, polyaspartic, and flake systems are strong starting points to compare." },
      { question: "Can outdoor concrete coatings handle desert exposure?", answer: "Outdoor systems should be selected with sun, dust, water, texture, and maintenance expectations in mind." },
      { question: "Can Kiwi coat a garage used for storage and hobbies?", answer: "Yes. The coating recommendation should account for traffic, tools, storage, cleaning, and finish preference." },
      { question: "Are commercial coatings available in Maricopa?", answer: "Yes. Kiwi offers commercial coating options where the surface, use, and scheduling needs fit the system." }
    ]
  },
  "casa-grande": {
    title: "Floor Coatings in Casa Grande, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings in Casa Grande, AZ.",
    intro:
      "Casa Grande projects can range from residential garages and patios to growing commercial and work spaces. Kiwi Coatings AZ serves Casa Grande with concrete coating systems selected for traffic, dust, heat, cleaning needs, and finish style.",
    localContext: [
      "Residential garage floors often need help with staining, dust, tire traffic, and general wear. A coating system can give the space a cleaner finish and make routine maintenance more manageable.",
      "Commercial and shop floors need a practical surface conversation too. Coatings should be selected around foot traffic, spills, cleaning, equipment use, and whether customers see the space."
    ],
    featuredServices: ["garage-floor-coatings", "commercial-floor-coatings", "polyaspartic-floor-coatings", "epoxy-floor-coatings", "patio-and-pool-deck-coatings", "quartz-floor-coatings"],
    concreteConditions: [
      "Heat and dust across residential and working floors",
      "Vehicle and equipment traffic",
      "Garage and shop floors that need easier cleaning",
      "Outdoor concrete exposure on patios and walkways"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Residential and commercial floor coating systems",
      "Garage, patio, shop, showroom, flake, quartz, epoxy, and polyaspartic options",
      "Concrete condition review before system selection"
    ],
    projectProof:
      "Future Casa Grande case studies can be added when verified project photos and details are available.",
    reviewProof:
      "Casa Grande review proof should only use verified customer review content.",
    nearbyCities: ["coolidge", "maricopa", "florence"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Casa Grande?", answer: "Yes. Casa Grande is a verified service area." },
      { question: "Can Kiwi coat both residential and commercial floors in Casa Grande?", answer: "Yes. Residential and commercial coating options are available when the surface and use fit the system." },
      { question: "What floor coatings fit shop or work areas?", answer: "Commercial floor coatings, epoxy systems, quartz systems, and polyaspartic topcoats may be considered depending on traffic and cleaning needs." },
      { question: "Are patio coatings available in Casa Grande?", answer: "Yes. Patios and outdoor concrete can be evaluated for coating systems selected around exposure and texture." },
      { question: "What happens before a quote?", answer: "Kiwi reviews the surface, location, use, condition, and desired finish before recommending the coating direction." }
    ]
  },
  "apache-junction": {
    title: "Floor Coatings in Apache Junction, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, flake, quartz, metallic, and commercial floor coatings in Apache Junction, AZ.",
    intro:
      "Apache Junction properties often need practical concrete coatings for garages, patios, utility spaces, and work areas exposed to dust and sun. Kiwi Coatings AZ serves Apache Junction with protective and decorative coating systems for residential and light commercial surfaces.",
    localContext: [
      "Garage and utility floors can take on dust, tire traffic, storage wear, and stains. A coating system can help the floor feel cleaner and easier to maintain without pretending every surface needs the same finish.",
      "Outdoor concrete in Apache Junction should be reviewed for sunlight, texture, water, and maintenance. Patios, walkways, and backyard surfaces require different choices than interior feature floors."
    ],
    featuredServices: ["garage-floor-coatings", "patio-and-pool-deck-coatings", "flake-floor-systems", "quartz-floor-coatings", "polyaspartic-floor-coatings", "epoxy-floor-coatings"],
    concreteConditions: [
      "Dust and outdoor debris",
      "Sun-exposed patios, walkways, and garage entries",
      "Utility spaces and work floors with regular wear",
      "Concrete stains and surface imperfections that need evaluation"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Protective systems for garages, utility spaces, patios, and work areas",
      "Decorative flake, quartz, epoxy, polyaspartic, and metallic options",
      "Preparation and repair evaluation before coating installation"
    ],
    projectProof:
      "Future Apache Junction project examples can be added when verified media and project details are available.",
    reviewProof:
      "Apache Junction reviews should be featured only after real customer review content is verified.",
    nearbyCities: ["mesa", "gold-canyon", "queen-creek"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Apache Junction?", answer: "Yes. Apache Junction is part of the verified Kiwi Coatings AZ service area." },
      { question: "What coatings are useful for Apache Junction garages?", answer: "Garage floor coatings, flake systems, epoxy, polyaspartic, and quartz options may be worth comparing." },
      { question: "Can outdoor concrete be coated?", answer: "Often, yes. Outdoor surfaces should be reviewed for exposure, drainage, texture needs, and current condition." },
      { question: "When should I consider quartz?", answer: "Quartz may be useful where a textured, durable finish is desired for working or utility areas." },
      { question: "Can Kiwi help with decorative options?", answer: "Yes. Flake, metallic, quartz, and specialty finishes can be discussed when they fit the surface and use." }
    ]
  },
  "gold-canyon": {
    title: "Floor Coatings in Gold Canyon, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, patio, pool deck, epoxy, polyaspartic, metallic, flake, quartz, and specialty floor coatings in Gold Canyon, AZ.",
    intro:
      "Gold Canyon concrete coating projects often need to balance durable protection with a more finished, design-aware appearance. Kiwi Coatings AZ serves Gold Canyon with garage, outdoor, decorative, and protective coating systems.",
    localContext: [
      "Garages, patios, and outdoor concrete surfaces can all affect how polished a property feels. A coating system can help plain concrete feel more intentional while improving cleaning and surface protection.",
      "Decorative choices should still be practical. Sun exposure, dust, foot traffic, water use, texture, and maintenance expectations should guide the finish."
    ],
    featuredServices: ["garage-floor-coatings", "patio-and-pool-deck-coatings", "metallic-epoxy-floors", "flake-floor-systems", "specialty-floor-finishes", "polyaspartic-floor-coatings"],
    concreteConditions: [
      "Sun and outdoor exposure",
      "Dust on garage and patio surfaces",
      "Decorative finish selection for visible concrete areas",
      "Garage traffic, storage, and maintenance needs"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Protective and decorative concrete coating options",
      "Custom flake, quartz, metallic, specialty, epoxy, and polyaspartic systems",
      "System selection based on use, exposure, and appearance goals"
    ],
    projectProof:
      "Future Gold Canyon project proof can be added here when verified photos and project context are available.",
    reviewProof:
      "Gold Canyon review proof should only use verified customer review content.",
    nearbyCities: ["apache-junction", "mesa", "queen-creek"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Gold Canyon?", answer: "Yes. Gold Canyon is included in the verified service area." },
      { question: "What coatings fit Gold Canyon garages?", answer: "Garage floor coatings, flake systems, polyaspartic coatings, epoxy systems, and decorative finishes may all be considered depending on the space." },
      { question: "Can patios and pool decks be coated?", answer: "Yes. Outdoor concrete can be evaluated for coatings that account for sun exposure, water, texture, and maintenance." },
      { question: "Are specialty finishes available?", answer: "Yes. Specialty finishes can be discussed for garages, hobby spaces, decorative interiors, and other suitable surfaces." },
      { question: "How should I choose between decorative options?", answer: "Consider the concrete condition, lighting, traffic, surrounding finishes, and how much visual movement or texture you want." }
    ]
  },
  florence: {
    title: "Floor Coatings in Florence, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, flake, quartz, metallic, and commercial floor coatings in Florence, AZ.",
    intro:
      "Florence property owners often need coating systems for garages, workshops, patios, and outdoor concrete areas that see dust, heat, and regular use. Kiwi Coatings AZ serves Florence with practical protective and decorative concrete coating options.",
    localContext: [
      "Garage and workshop floors can become stained, dusty, and harder to clean over time. A coating system can help create a more usable surface for vehicles, tools, storage, and household projects.",
      "Outdoor concrete should be considered separately from interior floors. Patios and walkways need attention to sun exposure, surface texture, water, and cleaning."
    ],
    featuredServices: ["garage-floor-coatings", "epoxy-floor-coatings", "polyaspartic-floor-coatings", "flake-floor-systems", "patio-and-pool-deck-coatings", "quartz-floor-coatings"],
    concreteConditions: [
      "Dust and garage traffic",
      "Workshop and tool-related wear",
      "Sun-exposed patios and outdoor concrete",
      "Concrete stains, chips, and worn areas that need review"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Coatings for garages, workshops, patios, and outdoor concrete",
      "Epoxy, polyaspartic, flake, quartz, metallic, and specialty finish options",
      "Preparation-based coating process with repair evaluation where appropriate"
    ],
    projectProof:
      "Future Florence project examples can be added when verified city-tagged proof is available.",
    reviewProof:
      "Florence-specific reviews should be added only after verified customer review content is approved.",
    nearbyCities: ["coolidge", "san-tan-valley", "casa-grande"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Florence?", answer: "Yes. Florence is a verified Kiwi Coatings AZ service area." },
      { question: "What coatings are useful for Florence workshops?", answer: "Epoxy, polyaspartic, flake, and quartz systems may be considered depending on traffic, cleaning, and texture needs." },
      { question: "Can old stained concrete be coated?", answer: "Often, but the concrete should be evaluated first for stains, cracks, previous coatings, and surface damage." },
      { question: "Are patio coatings available in Florence?", answer: "Yes. Outdoor concrete can be reviewed for patio and pool deck coating options." },
      { question: "Can Kiwi recommend a finish style?", answer: "Yes. Finish style can be discussed around the space, traffic, exposure, cleaning preference, and surrounding surfaces." }
    ]
  },
  coolidge: {
    title: "Floor Coatings in Coolidge, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, flake, quartz, metallic, and commercial floor coatings in Coolidge, AZ.",
    intro:
      "Kiwi Coatings AZ serves Coolidge with concrete coating systems for home garages, patios, nearby commercial spaces, workshops, and utility floors. The goal is to match the coating system to the surface condition, exposure, and way the floor will be used.",
    localContext: [
      "Coolidge garages and work areas often need finishes that can handle dust, vehicle traffic, storage, and cleaning. A coating system can help make bare concrete feel more complete and easier to maintain.",
      "For patios and outdoor surfaces, sun exposure and texture matter. The system should be selected around the exterior environment rather than treated like a simple indoor coating."
    ],
    featuredServices: ["garage-floor-coatings", "epoxy-floor-coatings", "polyaspartic-floor-coatings", "patio-and-pool-deck-coatings", "commercial-floor-coatings", "flake-floor-systems"],
    concreteConditions: [
      "Heat and dust across garage and outdoor surfaces",
      "Working floor wear from tools, storage, and traffic",
      "Outdoor concrete that needs texture and UV-aware planning",
      "Stains, chips, cracks, or old coatings that should be evaluated"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Local service foundation in the Coolidge area",
      "Residential and commercial coating options",
      "System choices including epoxy, polyaspartic, flake, quartz, metallic, and specialty finishes"
    ],
    projectProof:
      "Future Coolidge project proof can be added when verified project photos and details are available.",
    reviewProof:
      "Coolidge review proof should only use verified customer review content.",
    nearbyCities: ["florence", "casa-grande", "san-tan-valley"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Coolidge?", answer: "Yes. Coolidge is a verified Kiwi Coatings AZ service area." },
      { question: "What coatings fit Coolidge garages?", answer: "Garage floor coatings, epoxy, polyaspartic, and flake systems are useful options to compare for daily-use garage concrete." },
      { question: "Can Kiwi coat patios in Coolidge?", answer: "Yes. Patio coatings can be considered after reviewing sun exposure, surface condition, texture needs, and maintenance goals." },
      { question: "Are commercial floor coatings available?", answer: "Yes. Commercial coating systems may be used for shops, showrooms, storage areas, and other business spaces." },
      { question: "Why does surface preparation matter?", answer: "Preparation helps the coating bond to a suitable concrete surface and allows cracks, chips, previous coatings, and weak areas to be addressed." }
    ]
  },
  phoenix: {
    title: "Floor Coatings in Phoenix, AZ",
    metaDescription:
      "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings in Phoenix and the greater Phoenix area.",
    intro:
      "Kiwi Coatings AZ serves Phoenix and the greater Phoenix area with concrete coating systems for garages, outdoor living spaces, business floors, showrooms, and decorative interiors. Each project should start with how the surface is used and what the concrete is exposed to.",
    localContext: [
      "Phoenix garages and business floors can see heat, dust, vehicle traffic, foot traffic, and frequent cleaning needs. Coatings can help make those surfaces feel more finished and easier to maintain.",
      "Outdoor patios and pool deck areas need careful discussion around sun exposure, texture, water, and long-term upkeep. Decorative interior floors need a different conversation around lighting, traffic, and design direction."
    ],
    featuredServices: ["garage-floor-coatings", "commercial-floor-coatings", "polyaspartic-floor-coatings", "patio-and-pool-deck-coatings", "epoxy-floor-coatings", "metallic-epoxy-floors"],
    concreteConditions: [
      "Heat exposure and sunlight around exterior concrete",
      "Vehicle traffic and tire marks in garages",
      "Commercial foot traffic and cleaning routines",
      "Outdoor dust, water use, and surface maintenance"
    ],
    whyKiwi: [
      "Licensed and bonded with Arizona ROC #363582",
      "Residential and commercial coating options across the greater Phoenix area",
      "Epoxy, polyaspartic, flake, quartz, metallic, patio, pool deck, and specialty systems",
      "Recommendations based on concrete condition, use, exposure, and finish goals"
    ],
    projectProof:
      "Future Phoenix project proof can be added when verified city-tagged case studies and photos are available.",
    reviewProof:
      "Phoenix review proof should be added only from verified customer reviews.",
    nearbyCities: ["mesa", "chandler", "maricopa"],
    faqs: [
      { question: "Does Kiwi Coatings AZ serve Phoenix?", answer: "Yes. Kiwi Coatings AZ serves Phoenix and the greater Phoenix area." },
      { question: "What coatings are common for Phoenix garages?", answer: "Garage floor coatings, polyaspartic systems, epoxy systems, and flake finishes are useful options to compare for Phoenix garage concrete." },
      { question: "Can Phoenix businesses request commercial floor coatings?", answer: "Yes. Kiwi offers commercial coating options for shops, showrooms, offices, storage areas, and similar spaces." },
      { question: "Are outdoor coatings available in Phoenix?", answer: "Yes. Patio and pool deck coatings can be discussed with sun exposure, water, texture, and cleaning needs in mind." },
      { question: "Can decorative floors work in Phoenix interiors?", answer: "Yes. Metallic epoxy and specialty finishes can be considered for interior spaces where the environment and traffic fit the system." }
    ]
  }
};

export function getCityPageContent(slug: string) {
  return cityPageContent[slug];
}
