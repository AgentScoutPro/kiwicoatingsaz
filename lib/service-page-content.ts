export type ServicePageContent = {
  heroIntro: string;
  overview: string[];
  arizona: string[];
  problems: string[];
  process: Array<{
    title: string;
    text: string;
  }>;
  finishOptions: Array<{
    title: string;
    text: string;
  }>;
  benefitDetails: Array<{
    title: string;
    text: string;
  }>;
  applicationsIntro: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const primaryServiceContent: Record<string, ServicePageContent> = {
  "garage-floor-coatings": {
    heroIntro:
      "A garage floor coating should make the space easier to live with, not just better looking on day one. Kiwi Coatings AZ installs garage systems for Arizona homes that need cleaner concrete, stronger surface protection, and finish options that fit how the garage is actually used.",
    overview: [
      "Garage floor coatings are layered concrete coating systems installed over properly prepared concrete. Depending on the project, the system may include epoxy, polyaspartic, decorative flake, quartz, or other finish layers selected around appearance, use, and exposure.",
      "For many homeowners, the garage is more than a parking space. It is storage, a workshop, a home gym, a hobby area, or the clean transition between the driveway and the house. A coating system helps turn dusty, stained concrete into a finished surface that is easier to sweep, wipe down, and maintain."
    ],
    arizona: [
      "Arizona garages deal with heat, dust, tire traffic, tools, stored chemicals, and daily use. Bare concrete can stain, shed dust, and become harder to clean as it absorbs spills and tire marks.",
      "A professionally prepared coating system can reduce dusting, improve cleanability, and add a finished look that holds up better than painted concrete. For garages with sun exposure near the door, UV-stable topcoat options can also matter."
    ],
    problems: [
      "Oil, fluid, and rust stains that make the garage feel unfinished",
      "Concrete dust that keeps returning after sweeping",
      "Tire marks and traffic wear near parking areas",
      "Small cracks, chips, or surface imperfections that need evaluation before coating",
      "Plain gray concrete that does not match a finished home, workshop, or car space"
    ],
    process: [
      { title: "Inspection and project planning", text: "The surface, use of the garage, finish goals, and visible concrete condition are reviewed before a coating system is recommended." },
      { title: "Concrete preparation", text: "Preparation may include mechanical surface profiling so the coating has a better surface to bond to than a simple topical paint application." },
      { title: "Repair and detail work", text: "Cracks, chips, spalls, and control joints are evaluated. Repairs are addressed where appropriate before coating layers are installed." },
      { title: "Base coat and broadcast", text: "The base coating is applied and, when selected, decorative flake or aggregate is broadcast into the wet material for coverage, texture, and appearance." },
      { title: "Topcoat and return to use", text: "A protective topcoat completes the system. Return-to-use timing depends on the materials, weather, and site conditions, so Kiwi discusses timing during the project." }
    ],
    finishOptions: [
      { title: "Decorative flake blends", text: "Flake systems are popular for garages because they add texture, hide normal dust better than solid colors, and offer a clean finished look." },
      { title: "Polyaspartic topcoat options", text: "Polyaspartic coatings can be a strong fit where durability, UV stability, and efficient return to use are priorities." },
      { title: "Quartz or textured systems", text: "Quartz and textured finishes can be considered where grip and heavier use matter." },
      { title: "Custom color direction", text: "Color and blend selection should support the garage, vehicles, storage, lighting, and adjacent home finishes." }
    ],
    benefitDetails: [
      { title: "Cleaner daily use", text: "A coated garage is typically easier to sweep and wipe down than porous bare concrete." },
      { title: "Better surface protection", text: "The coating system creates a protective wearing surface between the concrete and normal garage traffic." },
      { title: "More finished space", text: "A garage coating can make the garage feel like part of the home instead of an unfinished utility zone." },
      { title: "Flexible finish choices", text: "Flake, quartz, epoxy, and polyaspartic systems allow the floor to be matched to the way the space is used." }
    ],
    applicationsIntro:
      "Garage systems are commonly used in residential garages, workshops, hobby spaces, storage areas, and light commercial garage spaces.",
    faqs: [
      { question: "Is a garage floor coating different from concrete paint?", answer: "Yes. A professional coating system relies on surface preparation and layered materials designed for concrete protection. Concrete paint is usually a thinner topical finish and is not the same system." },
      { question: "Can stained garage concrete be coated?", answer: "Often, but the concrete needs to be evaluated first. Stains, oil, previous coatings, moisture concerns, and surface damage can affect preparation and system choice." },
      { question: "Are flake garage floors slippery?", answer: "Texture can be adjusted through the broadcast and topcoat system. Kiwi can discuss finish feel and traction goals before installation." },
      { question: "Will a coating hide cracks?", answer: "Coatings can improve the appearance of repaired cracks, but they do not make concrete structurally new. Existing cracks should be evaluated and addressed appropriately." },
      { question: "What finish is right for an Arizona garage?", answer: "The right system depends on sun exposure, vehicle use, cleaning expectations, and appearance goals. Polyaspartic, epoxy, flake, and quartz systems can all have a place depending on the project." },
      { question: "How soon can the garage be used again?", answer: "Return-to-use timing depends on the selected materials, temperature, humidity, and site conditions. Kiwi should confirm timing for the specific project." }
    ]
  },
  "polyaspartic-floor-coatings": {
    heroIntro:
      "Polyaspartic floor coatings are a strong option for Arizona properties that need a durable, attractive surface with good UV stability and efficient installation planning. Kiwi Coatings AZ uses polyaspartic systems where the project calls for a tough finish without treating every floor the same way.",
    overview: [
      "Polyaspartic coatings are resinous floor coatings often used as topcoats or complete coating systems. They are known for durability, chemical resistance, UV stability, and fast cure characteristics compared with many traditional coating materials.",
      "They are commonly used in garages, patios, utility spaces, commercial floors, and decorative flake systems. The right build depends on the concrete, the exposure, and whether the floor needs decorative texture, working durability, or both."
    ],
    arizona: [
      "In Arizona, UV exposure and heat can be hard on outdoor and sun-adjacent concrete surfaces. Polyaspartic coatings are often considered where UV stability is important, especially near garage doors, patios, and areas with strong daylight exposure.",
      "Dust, spills, foot traffic, vehicle traffic, and outdoor exposure also influence system choice. A coating that is easy to clean and selected for the environment can make a practical difference for homeowners and businesses."
    ],
    problems: [
      "Coatings or paints that discolor near sunlight",
      "Concrete that is hard to sweep or keep clean",
      "Garage or patio surfaces exposed to heat and dust",
      "Floors that need a durable topcoat over decorative flake",
      "Commercial surfaces that need a cleaner professional appearance"
    ],
    process: [
      { title: "Evaluate the concrete and exposure", text: "Kiwi reviews the surface condition, use case, UV exposure, moisture concerns, and finish goals before recommending a system." },
      { title: "Prepare the surface", text: "Mechanical preparation is commonly used so the coating can bond to a profiled concrete surface instead of sitting on weak surface material." },
      { title: "Address repairs as needed", text: "Visible cracks, chips, spalling, and previous coating issues are considered before the coating layers are applied." },
      { title: "Install the selected coating system", text: "The system may include a base layer, decorative broadcast, and polyaspartic topcoat depending on the project." },
      { title: "Discuss cure and use", text: "Polyaspartic systems are known for efficient cure characteristics, but timing should be confirmed for the materials and job conditions." }
    ],
    finishOptions: [
      { title: "Flake broadcast systems", text: "Polyaspartic topcoats pair well with flake systems used in garages, patios, and utility spaces." },
      { title: "Clear protective topcoats", text: "A clear polyaspartic layer can protect decorative broadcast or base coating layers." },
      { title: "Textured finishes", text: "Texture can be selected around wet-area concerns, cleaning expectations, and surface use." },
      { title: "Indoor and outdoor applications", text: "Polyaspartic may be appropriate for both indoor and outdoor surfaces when the full system is selected for the exposure." }
    ],
    benefitDetails: [
      { title: "UV stability", text: "Polyaspartic coatings are often selected where sunlight exposure is a concern." },
      { title: "Durable wearing surface", text: "The topcoat helps protect the decorative and base layers from normal traffic and use." },
      { title: "Efficient project planning", text: "Fast cure characteristics can help reduce disruption, depending on the system and site conditions." },
      { title: "Clean finished look", text: "The finished surface can make garages, patios, and commercial spaces easier to maintain and more polished." }
    ],
    applicationsIntro:
      "Polyaspartic systems are commonly used for garages, patios, commercial floors, utility rooms, and decorative flake coating projects.",
    faqs: [
      { question: "Is polyaspartic better than epoxy?", answer: "It depends on the project. Polyaspartic is often valued for UV stability and efficient cure, while epoxy can be useful as part of a high-build system. Kiwi can recommend the right combination after seeing the concrete." },
      { question: "Can polyaspartic be used outside?", answer: "Polyaspartic can be appropriate for some outdoor or sun-exposed applications when the whole coating system is selected for that environment." },
      { question: "Does polyaspartic work for garage floors?", answer: "Yes, polyaspartic is commonly used in garage coating systems, especially as a protective topcoat over decorative flake." },
      { question: "Will the floor be easy to clean?", answer: "A properly installed coating system is generally easier to sweep and wipe down than porous bare concrete." },
      { question: "Can it go over cracked concrete?", answer: "Cracks and damaged concrete should be evaluated first. Repairs may be recommended before coating." },
      { question: "How should I choose texture?", answer: "Texture depends on the space. Wet areas, patios, and working floors may need a different feel than an interior decorative surface." }
    ]
  },
  "epoxy-floor-coatings": {
    heroIntro:
      "Epoxy floor coatings create a strong protective base for concrete surfaces that need better appearance, better cleanability, and a more finished feel. Kiwi Coatings AZ installs epoxy systems for Arizona garages, shops, workspaces, and decorative interior floors.",
    overview: [
      "Epoxy is a resinous coating material often used to build a durable layer over prepared concrete. It can be used as part of garage floors, decorative systems, broadcast floors, metallic finishes, and commercial coating assemblies.",
      "A good epoxy project starts with the concrete. Surface preparation, moisture conditions, previous coatings, cracks, and the intended use of the floor all matter before the coating is installed."
    ],
    arizona: [
      "Arizona floors often deal with garage heat, dust, vehicle traffic, shop use, and spills. Bare concrete can absorb contaminants and stay visibly stained even after cleaning.",
      "Epoxy systems can help create a more durable and cleanable surface. Where UV exposure is present, epoxy may be paired with appropriate topcoat options rather than used as the only finish layer."
    ],
    problems: [
      "Stained or porous concrete that never looks clean",
      "Worn garage or shop floors",
      "Plain concrete in spaces that need a more professional look",
      "Previous coatings or paint that failed",
      "Concrete surfaces needing a strong base for decorative finish systems"
    ],
    process: [
      { title: "Surface review", text: "Kiwi reviews the concrete, existing damage, prior coatings, and the way the floor will be used." },
      { title: "Mechanical preparation", text: "Concrete preparation helps create a suitable profile for coating adhesion and removes weak surface material." },
      { title: "Repair work", text: "Cracks, chips, and spalled areas are evaluated and repaired where appropriate before coating." },
      { title: "Epoxy installation", text: "The epoxy layer is installed as the base or body of the system, depending on the desired finish and performance needs." },
      { title: "Finish and topcoat", text: "Decorative broadcast, metallic effects, or protective topcoats may be added based on the selected system." }
    ],
    finishOptions: [
      { title: "Solid-color epoxy", text: "A clean option for workspaces or areas where a simple finished surface is preferred." },
      { title: "Flake systems", text: "Decorative flake can be broadcast into the coating for texture, color variation, and a garage-friendly look." },
      { title: "Metallic epoxy", text: "Metallic systems use epoxy to create visual movement and depth for interior decorative floors." },
      { title: "Protective topcoats", text: "Topcoats can be selected around traffic, UV exposure, and maintenance needs." }
    ],
    benefitDetails: [
      { title: "Strong coating build", text: "Epoxy can create a substantial protective layer over prepared concrete, with a seamless, hard-wearing finished appearance." },
      { title: "Chemical, stain, and abrasion resistance", text: "A properly installed epoxy system is selected to resist common spills, stains, and everyday abrasion better than bare concrete." },
      { title: "Decorative flexibility", text: "It supports solid, flake, quartz, and metallic finish directions." },
      { title: "Improved cleanability", text: "A coated floor can be easier to clean than porous concrete that absorbs spills." },
      { title: "Useful for many spaces", text: "Epoxy systems can fit garages, shops, interior floors, and some commercial environments." }
    ],
    applicationsIntro:
      "Epoxy coating systems are commonly used for garages, shops, workshops, decorative interior floors, utility areas, and commercial spaces.",
    faqs: [
      { question: "Is epoxy a good choice for Arizona garages?", answer: "Epoxy can be a good part of an Arizona garage system, especially when paired with the right preparation and topcoat for the exposure." },
      { question: "Can epoxy be decorative?", answer: "Yes. Epoxy can support flake, quartz, solid-color, and metallic decorative systems." },
      { question: "Does old paint need to be removed?", answer: "Existing coatings should be evaluated. Failed or incompatible coatings may need to be removed during preparation." },
      { question: "Can epoxy handle vehicle traffic?", answer: "Epoxy systems are commonly used in garages and shops, but the full system and topcoat should match the expected traffic." },
      { question: "Is epoxy slippery?", answer: "Texture can be adjusted depending on the broadcast material and topcoat. Wet or working areas should be discussed before selecting a finish." },
      { question: "Will epoxy fix damaged concrete?", answer: "It can improve the surface after repairs, but it does not replace structural concrete repair when that is needed." },
      { question: "How long can a professionally coated floor last?", answer: "With proper preparation, the right coating system, normal maintenance, and conditions suited to the application, epoxy or polyaspartic-coated floors can provide decades of service. Kiwi's legacy guidance notes that properly prepared and maintained systems can last 25+ years, although actual lifespan depends on use, exposure, maintenance, and the condition of the concrete. This is general guidance, not a warranty or guaranteed lifespan." }
    ]
  },
  "patio-and-pool-deck-coatings": {
    heroIntro:
      "Outdoor concrete in Arizona needs more than a cosmetic refresh. Kiwi Coatings AZ installs patio and pool deck coating systems for homeowners who want outdoor surfaces that look better, clean more easily, and are selected for sun, water, dust, and foot traffic.",
    overview: [
      "Patio and pool deck coatings are outdoor concrete coating systems used on backyard living areas, walkways, pool decks, and other exterior concrete surfaces. The finish should be chosen around sun exposure, wet use, texture, appearance, and maintenance.",
      "These projects are different from interior floors or enclosed garages. Outdoor coatings need a realistic conversation about exposure, surface condition, drainage, texture, and how the area is used."
    ],
    arizona: [
      "Arizona patios and pool decks face intense sun, dust, heat, wet foot traffic, landscaping debris, and frequent cleaning. Bare or worn concrete can become unattractive and harder to maintain over time.",
      "A coating system can refresh the surface and add a finished look to outdoor living areas. Texture and UV-stable materials are especially important topics for exterior projects."
    ],
    problems: [
      "Sun-faded or worn outdoor concrete",
      "Patios that collect dust and look dirty quickly",
      "Pool deck surfaces that need better texture planning",
      "Concrete stains from outdoor use, furniture, or landscaping",
      "Backyard surfaces that do not match the quality of the outdoor living space"
    ],
    process: [
      { title: "Outdoor surface evaluation", text: "Kiwi reviews the concrete, sun exposure, wet areas, drainage, existing coatings, and the way the patio or pool deck is used." },
      { title: "Cleaning and preparation", text: "Preparation is selected around the existing condition of the concrete and may include mechanical profiling where appropriate." },
      { title: "Repair and transition details", text: "Cracks, chips, edges, and transitions are reviewed before the coating system is installed." },
      { title: "Coating and texture", text: "The coating system and texture are installed around appearance goals and practical outdoor use." },
      { title: "Topcoat and use guidance", text: "A protective topcoat completes the system. Kiwi should discuss care and return-to-use timing based on the selected materials and conditions." }
    ],
    finishOptions: [
      { title: "Decorative flake", text: "Flake systems can add visual texture and help outdoor concrete feel more finished." },
      { title: "Textured finishes", text: "Texture can be adjusted for patios, walkways, and wet pool deck areas." },
      { title: "UV-stable topcoat options", text: "Sun exposure should be considered when selecting the topcoat and finish system." },
      { title: "UV+Flake specialty direction", text: "Where it fits the space and exposure, UV-reactive flake can be considered as a specialty outdoor design option alongside a standard finish." },
      { title: "Stem wall coatings", text: "Exposed stem walls next to a patio or pool deck can be coated as part of the same project for a more finished, consistent look around the slab." },
      { title: "Color and blend selection", text: "Outdoor colors should work with the home exterior, hardscape, pool area, and surrounding landscape." }
    ],
    benefitDetails: [
      { title: "Better outdoor appearance", text: "A coating can make patios and pool decks feel more intentional and connected to the home." },
      { title: "Improved cleanability", text: "Coated surfaces are generally easier to clean than worn or porous concrete." },
      { title: "Texture planning", text: "The system can be selected with wet areas and foot traffic in mind." },
      { title: "Arizona-aware materials", text: "Sun, heat, and exposure should influence the coating system instead of being treated as afterthoughts." }
    ],
    applicationsIntro:
      "Outdoor coating systems are commonly used on patios, pool decks, walkways, backyard concrete areas, covered patios, exposed stem walls, and outdoor living spaces.",
    faqs: [
      { question: "Can pool deck concrete be coated?", answer: "Often, yes. The surface needs to be evaluated for condition, previous coatings, cracks, drainage, and wet-area use before selecting a system." },
      { question: "What texture should a patio coating have?", answer: "Texture depends on whether the area is dry, wet, covered, uncovered, used by children, or used around a pool. Kiwi can discuss practical finish options." },
      { question: "Will outdoor coatings fade?", answer: "Outdoor exposure should be considered when selecting materials. UV-stable topcoat options may be recommended depending on the surface and finish." },
      { question: "Can stained patio concrete be refreshed?", answer: "In many cases, coating can improve appearance after preparation, but the concrete condition should be reviewed first." },
      { question: "Is this the same as indoor epoxy flooring?", answer: "No. Outdoor patios and pool decks need coating choices that account for sun, water, texture, and exposure." },
      { question: "Do coatings make outdoor concrete maintenance-free?", answer: "No surface is maintenance-free. A coating can improve cleanability, but outdoor areas still need regular cleaning and care." }
    ]
  },
  "metallic-epoxy-floors": {
    heroIntro:
      "Metallic epoxy floors are built for customers who want concrete to become a design feature. Kiwi Coatings AZ installs metallic systems for interior floors, showrooms, and specialty spaces where depth, movement, and a premium visual finish matter.",
    overview: [
      "Metallic epoxy is a decorative resinous flooring system that uses metallic pigments in epoxy to create depth, movement, and variation across the floor. The result is intentionally custom rather than a repeating tile or plank pattern.",
      "Because the look depends on surface preparation, material movement, color choice, and installation technique, metallic epoxy should be planned carefully. It is typically used for interior or controlled environments unless a specific system is selected for the exposure."
    ],
    arizona: [
      "In Arizona homes and businesses, metallic epoxy is often considered for areas where visual impact matters: showrooms, offices, studios, retail spaces, entertainment areas, and interior concrete floors.",
      "Heat, sunlight through windows, cleaning expectations, and foot traffic should all be discussed. Where UV exposure or heavier commercial use is expected, topcoat selection becomes an important part of the system."
    ],
    problems: [
      "Interior concrete that feels unfinished",
      "Spaces that need a premium alternative to plain flooring",
      "Showrooms or customer-facing areas that need visual impact",
      "Old coatings or floor coverings that need evaluation before a new finish",
      "Floors where color, movement, and reflection need to be planned intentionally"
    ],
    process: [
      { title: "Design and surface evaluation", text: "Kiwi reviews the concrete condition, interior environment, design direction, lighting, and intended use of the space." },
      { title: "Surface preparation", text: "Mechanical preparation helps create a suitable surface for the epoxy system and exposes issues that may need repair." },
      { title: "Repairs and priming", text: "Cracks, chips, and imperfections are reviewed because decorative floors can draw attention to poor prep work." },
      { title: "Metallic epoxy application", text: "Pigmented epoxy is installed to create movement and visual depth. Each floor has natural variation." },
      { title: "Protective topcoat", text: "A topcoat may be selected around sheen, traffic, cleaning, and exposure needs." }
    ],
    finishOptions: [
      { title: "Single-color metallic movement", text: "A restrained metallic look can add depth without overwhelming the room." },
      { title: "Multi-color blends", text: "Multiple pigments can create stronger movement and contrast when the space calls for it." },
      { title: "Gloss and sheen direction", text: "Sheen should be considered alongside lighting, maintenance, and the desired feel of the room." },
      { title: "Protective topcoat systems", text: "Topcoats help match the finish to foot traffic, cleaning expectations, and use." }
    ],
    benefitDetails: [
      { title: "Custom visual result", text: "Metallic epoxy creates a floor with depth and movement rather than a flat painted look." },
      { title: "Strong design presence", text: "It can help a showroom, studio, or interior feature space feel more finished and memorable." },
      { title: "Coating-system durability", text: "The decorative layer is part of a resinous coating system selected for the surface and use." },
      { title: "Works with brand or interior direction", text: "Colors can be planned around the surrounding finishes and desired mood of the space." }
    ],
    applicationsIntro:
      "Metallic epoxy is commonly used for interior feature floors, showrooms, retail spaces, studios, offices, entertainment rooms, and decorative residential concrete.",
    faqs: [
      { question: "Are metallic epoxy floors all the same?", answer: "No. Metallic epoxy floors are custom installations, so color, movement, lighting, and installer technique all affect the final look." },
      { question: "Can metallic epoxy be used in a garage?", answer: "It may be possible, but many garages are better suited to flake or quartz systems. Kiwi can discuss whether metallic epoxy fits the use and exposure." },
      { question: "Is metallic epoxy good for commercial spaces?", answer: "It can be a good fit for showrooms, offices, studios, and customer-facing spaces when the system is selected for traffic and maintenance needs." },
      { question: "Will the exact pattern be predictable?", answer: "No. The movement is part of the material and installation process. The design direction can be planned, but the exact pattern will vary." },
      { question: "Does metallic epoxy need a topcoat?", answer: "A protective topcoat is commonly considered to support durability, sheen, and maintenance goals." },
      { question: "What should I consider before choosing metallic epoxy?", answer: "Lighting, room use, cleaning expectations, desired sheen, color direction, and concrete condition all matter." }
    ]
  },
  "commercial-floor-coatings": {
    heroIntro:
      "Commercial floor coatings need to look professional and stand up to the way the space operates. Kiwi Coatings AZ installs coating systems for shops, offices, showrooms, storage areas, and facilities that need cleaner, stronger concrete surfaces.",
    overview: [
      "Commercial floor coatings are protective resinous systems installed over prepared concrete. The system may include epoxy, polyaspartic, quartz, flake, or other finish options depending on the traffic, cleaning needs, appearance goals, and downtime concerns.",
      "A commercial floor should be planned around the business use first. A showroom, storage room, office, shop, and service area can all need different texture, durability, sheen, and maintenance characteristics."
    ],
    arizona: [
      "Arizona commercial spaces deal with dust, tracked-in debris, heat near overhead doors, foot traffic, carts, light equipment, spills, and customer expectations. Bare concrete can look unfinished and can be difficult to keep consistently clean.",
      "A coating system can create a more professional surface while supporting easier cleaning. Where sunlight, vehicle traffic, or frequent maintenance is expected, the topcoat and texture choices matter."
    ],
    problems: [
      "Dusty or stained concrete in customer-facing spaces",
      "Work areas that are hard to clean at the end of the day",
      "Showroom floors that do not match the quality of the business",
      "Storage or facility floors with normal wear and spills",
      "Previous floor coatings that need evaluation before replacement"
    ],
    process: [
      { title: "Use-case review", text: "Kiwi reviews the business use, traffic, cleaning routine, appearance goals, schedule constraints, and surface condition." },
      { title: "Concrete preparation", text: "Mechanical surface preparation helps create a better bonding profile and removes weak surface material." },
      { title: "Repairs and details", text: "Cracks, chips, joints, edges, and prior coatings are evaluated and addressed where appropriate." },
      { title: "System installation", text: "The selected coating system is installed around durability, texture, and appearance requirements." },
      { title: "Topcoat and maintenance guidance", text: "The topcoat is selected for the expected traffic and cleaning needs. Return-to-use timing should be confirmed for the specific site." }
    ],
    finishOptions: [
      { title: "Flake commercial systems", text: "Flake systems can give commercial floors a clean, textured, professional appearance." },
      { title: "Quartz systems", text: "Quartz broadcast systems can be considered where heavier texture and durability are priorities." },
      { title: "Epoxy base systems", text: "Epoxy may be used as a strong coating layer in commercial floor assemblies." },
      { title: "Polyaspartic topcoats", text: "Polyaspartic topcoats can support durability, UV stability, and efficient project planning." }
    ],
    benefitDetails: [
      { title: "More professional appearance", text: "A coated floor can make a shop, office, or showroom feel cleaner and more intentional." },
      { title: "Built for high-traffic areas", text: "Commercial systems are selected with wear resistance in mind for high-traffic areas, carts, foot traffic, and daily operations." },
      { title: "Easier routine cleaning", text: "Coated concrete is generally easier to sweep and clean than porous bare concrete." },
      { title: "System selection by use", text: "The coating can be selected around traffic, texture, cleaning, and appearance needs." },
      { title: "Useful for working spaces", text: "Commercial coatings can support storage areas, light facility use, and customer-facing environments." }
    ],
    applicationsIntro:
      "Commercial coating systems are commonly used in shops, offices, showrooms, storage areas, facilities, service areas, and light commercial workspaces.",
    faqs: [
      { question: "What businesses use commercial floor coatings?", answer: "Common uses include shops, offices, showrooms, storage areas, service spaces, and light facility environments." },
      { question: "Can coating work be planned around business operations?", answer: "Scheduling depends on the project, materials, and site conditions. Kiwi can discuss timing and access needs before work begins." },
      { question: "Is epoxy or polyaspartic better for a business floor?", answer: "The right system depends on traffic, UV exposure, cleaning routine, texture, and appearance goals. Many systems use more than one material." },
      { question: "Can old commercial coatings be recoated?", answer: "Existing coatings must be evaluated. Failed or incompatible coatings may need removal or additional preparation." },
      { question: "Can commercial coatings be decorative?", answer: "Yes. Flake, quartz, metallic, and solid-color systems can all be considered depending on the use of the space." },
      { question: "Do commercial floors need texture?", answer: "Some do. Texture should be selected around foot traffic, spills, cleaning needs, and the work performed in the space." }
    ]
  },
  "flake-floor-systems": {
    heroIntro:
      "Flake floor systems give concrete a clean, finished look with practical texture and color variation. Kiwi Coatings AZ installs flake systems for Arizona garages, patios, utility spaces, and commercial floors where the surface needs to look better and work harder.",
    overview: [
      "A flake floor system uses decorative vinyl flakes or similar broadcast media within a layered coating assembly. The flakes add color variation, visual texture, and a more forgiving appearance than a single solid color.",
      "Kiwi Coatings AZ custom-mixes flake combinations rather than limiting projects to a handful of premade colors, including hybrid flake blends, terrazzo and stone-inspired directions, and mica accents selected around the room or space.",
      "Flake systems are commonly chosen for garages because they help disguise normal dust and daily wear while making the floor feel intentional. They can also work in patios, utility spaces, and commercial settings when the full system is selected for the exposure and traffic."
    ],
    arizona: [
      "Arizona properties see dust, heat, vehicle traffic, outdoor debris, and frequent cleaning. A flake finish can make coated concrete easier to live with because the surface does not show every footprint or small bit of dust the way plain concrete can.",
      "For sun-adjacent garages, patios, and exterior surfaces, the topcoat and texture should be selected around UV exposure, foot traffic, and cleaning expectations."
    ],
    problems: [
      "Plain concrete that feels unfinished",
      "Garage floors that show dust, tire marks, and stains",
      "Utility spaces that need a more durable finished surface",
      "Patio concrete that needs color variation and texture",
      "Commercial floors that need a clean appearance without looking overly decorative"
    ],
    process: [
      { title: "Review the surface and use", text: "Kiwi looks at the concrete condition, traffic, exposure, and color goals before recommending a flake system." },
      { title: "Prepare the concrete", text: "Surface preparation is selected around the existing concrete and helps the coating system bond to a properly profiled surface." },
      { title: "Address visible damage", text: "Cracks, chips, and worn areas are evaluated and repaired where appropriate before the flake broadcast." },
      { title: "Apply base coat and flake", text: "The base layer is installed and the selected flake blend is broadcast into the wet coating to build color, coverage, and texture." },
      { title: "Scrape and topcoat", text: "Loose material is removed and a protective topcoat completes the system. Timing depends on the selected materials and site conditions." }
    ],
    finishOptions: [
      { title: "Custom-mixed flake blends", text: "Colors can be custom-mixed rather than limited to a standard premade blend, so the final look is selected for the room instead of picked off a shelf." },
      { title: "Full-flake coverage", text: "A full broadcast creates a consistent flake look with strong color coverage across the floor." },
      { title: "Hybrid, terrazzo, and stone-inspired blends", text: "Hybrid flake blends and terrazzo- or stone-inspired directions can give the floor a more neutral, tile-like appearance without using tile." },
      { title: "Mica accents", text: "Mica can be worked into a blend for subtle shimmer and added depth where that fits the space." },
      { title: "Higher-contrast blends", text: "Bolder flake combinations can fit garages, hobby spaces, or commercial areas that need more visual energy." },
      { title: "Texture and topcoat choices", text: "The finish feel should be selected around cleaning, traction, wet use, and exposure." }
    ],
    benefitDetails: [
      { title: "Forgiving appearance", text: "The variation in a flake blend helps hide ordinary dust and small marks better than flat, plain concrete." },
      { title: "Useful texture", text: "Broadcast flakes can add practical surface texture when paired with the right topcoat." },
      { title: "Wide design range", text: "Flake blends can feel subtle, stone-like, classic, or more custom depending on the color direction." },
      { title: "Good fit for daily-use spaces", text: "Garages, utility areas, and workspaces benefit from a finish that balances appearance with maintainability." }
    ],
    applicationsIntro:
      "Flake floor systems are commonly used in residential garages, patios, utility rooms, laundry areas, workshops, storage areas, and commercial spaces that need a durable decorative finish.",
    faqs: [
      { question: "Why choose a flake floor instead of a solid color?", answer: "Flake adds visual texture and color variation, which can make dust, small marks, and daily wear less noticeable than on a flat solid-color surface." },
      { question: "Can flake systems be used outside?", answer: "They may be appropriate for some outdoor areas when the full coating system is selected for UV exposure, water, texture, and maintenance needs." },
      { question: "Are flake floors only for garages?", answer: "No. Garages are common, but flake systems can also fit patios, utility spaces, workshops, storage areas, and some commercial floors." },
      { question: "Can I choose the flake blend?", answer: "Yes. Blend direction can be selected around the home, garage, exterior finishes, or commercial space." },
      { question: "Do flake floors need texture planning?", answer: "Yes. Texture should match the space, especially for patios, wet areas, and working floors." },
      { question: "Can damaged concrete receive a flake system?", answer: "Possibly. The concrete needs to be inspected first so cracks, chips, old coatings, and surface damage can be addressed appropriately." }
    ]
  },
  "quartz-floor-coatings": {
    heroIntro:
      "Quartz floor coatings are built for surfaces that need a tougher textured finish with a clean, professional appearance. Kiwi Coatings AZ installs quartz broadcast systems for Arizona properties where grip, durability, and maintenance all matter.",
    overview: [
      "Quartz floor coatings use colored quartz aggregate broadcast into a resinous coating system. The aggregate creates a dense, textured finish that can be useful in working spaces, utility areas, commercial floors, and concrete surfaces where traction is part of the conversation.",
      "Quartz systems are not chosen only for looks. They are often considered when a property owner wants a more substantial surface feel than a standard decorative flake floor."
    ],
    arizona: [
      "Arizona dust, heat, tracked-in debris, and frequent foot traffic can wear down unfinished concrete and make cleaning harder. In areas where people work, walk, carry equipment, or deal with wet conditions, texture and durability become more important.",
      "A quartz system can help create a more rugged finished surface. The final specification should still account for cleaning expectations, sunlight exposure, and whether the surface is indoors, covered, or exposed."
    ],
    problems: [
      "Concrete that needs a more textured finish",
      "Utility or work areas exposed to frequent foot traffic",
      "Commercial spaces where plain concrete looks unfinished",
      "Wet or transitional areas where traction should be discussed",
      "Floors where durability matters more than a smooth decorative look"
    ],
    process: [
      { title: "Use and exposure review", text: "Kiwi evaluates traffic, cleaning needs, wet-area concerns, exposure, and finish expectations before recommending quartz." },
      { title: "Concrete preparation", text: "Mechanical preparation helps create a suitable surface profile for the coating layers." },
      { title: "Repair and edge details", text: "Visible damage, joints, transitions, and edges are reviewed before the broadcast system is installed." },
      { title: "Quartz broadcast", text: "Quartz aggregate is broadcast into the coating system to build texture, density, and appearance." },
      { title: "Topcoat selection", text: "A protective topcoat completes the system and should be matched to the desired texture, traffic, and maintenance expectations." }
    ],
    finishOptions: [
      { title: "Single or blended quartz colors", text: "Quartz colors can be selected for a clean professional appearance or a more decorative finish." },
      { title: "Texture level", text: "The final feel should be planned around grip, cleaning, wet use, and comfort underfoot." },
      { title: "Commercial-grade direction", text: "Quartz can be considered for shops, storage areas, and utility spaces where a more rugged surface is desired." },
      { title: "Protective topcoats", text: "Topcoat choice affects appearance, cleanability, and final texture." }
    ],
    benefitDetails: [
      { title: "Textured surface profile", text: "Quartz broadcast systems create a more substantial surface feel than many smooth coating finishes." },
      { title: "Durable working finish", text: "The aggregate layer can support surfaces that see regular foot traffic and work use." },
      { title: "Non-porous finished surface", text: "The finished quartz system is built to be non-porous, which can help with spill resistance, chemical resistance, and everyday cleaning compared with untreated concrete." },
      { title: "Professional appearance", text: "Quartz can look clean and intentional in utility, commercial, and garage-adjacent spaces." },
      { title: "Traction-oriented texture", text: "Quartz is often selected where additional grip matters. Kiwi can discuss slip-resistant texture options instead of treating all floors as smooth decorative surfaces." }
    ],
    applicationsIntro:
      "Quartz coating systems are commonly used in utility spaces, work areas, commercial floors, garages, storage areas, and surfaces where texture and durability are priorities.",
    faqs: [
      { question: "How is quartz flooring different from flake flooring?", answer: "Quartz uses aggregate to create a denser textured surface, while flake systems are usually chosen for decorative color variation and a garage-friendly finish." },
      { question: "Is quartz good for commercial floors?", answer: "Quartz can be a strong option for commercial and utility spaces when the surface needs texture, durability, and a professional appearance." },
      { question: "Can quartz coatings be used in garages?", answer: "Yes, quartz may be appropriate for garages where a more textured or rugged surface is desired." },
      { question: "Is quartz hard to clean?", answer: "Cleaning depends on the texture level and topcoat. A more textured surface can affect how the floor is maintained, so that should be discussed before installation." },
      { question: "Does quartz help with traction?", answer: "Quartz systems can support traction planning, but the final surface feel depends on the broadcast, topcoat, and selected texture." },
      { question: "Can quartz be decorative?", answer: "Yes. Quartz systems can be selected in colors or blends that look clean and intentional while still serving a practical role." }
    ]
  },
  "specialty-floor-finishes": {
    heroIntro:
      "Specialty floor finishes are for customers who want a floor with more personality than a standard neutral system. Kiwi Coatings AZ offers custom finish directions such as glow, neon, glitter, UV flake, and other decorative effects when they fit the space and use.",
    overview: [
      "Specialty finishes build on resinous coating systems with custom decorative elements. They may include distinctive flake blends, glow effects, neon accents, glitter, mica, or other visual choices that make the floor stand out.",
      "These finishes should still be practical. The coating system underneath, surface preparation, topcoat, texture, and cleaning expectations matter just as much as the decorative effect."
    ],
    arizona: [
      "Arizona garages, patios, shops, and entertainment spaces often double as personal or customer-facing areas. A specialty finish can help the floor support the personality of the room, vehicle space, brand, or outdoor setting.",
      "Sun exposure, heat, traffic, and maintenance should guide the finish. Some decorative choices make more sense indoors or in controlled areas, while others may need careful system selection for exterior or high-use spaces."
    ],
    problems: [
      "A garage or shop floor that feels too plain for the space",
      "Commercial or hobby areas that need stronger visual identity",
      "Decorative floors where standard flake blends feel too neutral",
      "Interior feature spaces that need a custom coating direction",
      "Projects where appearance matters but practical coating performance still matters"
    ],
    process: [
      { title: "Design direction", text: "Kiwi starts by understanding the look, color direction, space use, lighting, and level of visual impact the customer wants." },
      { title: "Surface and exposure review", text: "The concrete condition, sun exposure, traffic, and maintenance needs are reviewed before the decorative system is selected." },
      { title: "Preparation and repairs", text: "The floor is prepared and visible damage is addressed where appropriate so the specialty finish has a better foundation." },
      { title: "Decorative build", text: "The selected specialty material or blend is installed as part of the coating system, not as a loose surface decoration." },
      { title: "Topcoat and care discussion", text: "A protective topcoat completes the system. Kiwi should discuss cleaning, texture, and use based on the chosen finish." }
    ],
    finishOptions: [
      { title: "Photoluminescent / glow-in-the-dark flakes", text: "Photoluminescent flakes can add a visual glow-in-the-dark effect for garage, hobby, or specialty spaces where the lighting conditions support it. This is a decorative visual effect and is not a substitute for code-required emergency egress or safety lighting." },
      { title: "UV+Flake", text: "UV-reactive flake is another specialty direction, adding a distinct look under UV or blacklight conditions where that fits the space." },
      { title: "Neon flake accents", text: "Brighter neon flake directions can add energy to garages, shops, studios, or branded spaces." },
      { title: "Glitter and mica details", text: "Reflective accents can add depth or sparkle when they fit the room and lighting." },
      { title: "Custom specialty blends", text: "Specialty finishes can combine practical flake or coating systems with a more expressive, custom-mixed color direction." }
    ],
    benefitDetails: [
      { title: "More personal finish", text: "Specialty options let the floor reflect the space instead of defaulting to a standard neutral blend." },
      { title: "Visual identity", text: "Custom effects can support garages, studios, showrooms, and branded environments." },
      { title: "Built on coating fundamentals", text: "The decorative effect still relies on preparation, coating layers, and a topcoat selected for the use." },
      { title: "Flexible design range", text: "The finish can be subtle, bright, reflective, or more dramatic depending on the customer’s goals." }
    ],
    applicationsIntro:
      "Specialty finishes are commonly used in garages, studios, hobby spaces, showrooms, entertainment areas, branded commercial spaces, and custom decorative floor projects.",
    faqs: [
      { question: "Are specialty finishes only decorative?", answer: "No. The decorative effect is part of a coating system. Surface preparation, material selection, texture, and topcoat choice still matter." },
      { question: "Can glow or neon finishes be used in a garage?", answer: "They can be considered for garages when the design direction, lighting, use, and maintenance expectations make sense." },
      { question: "Will a specialty finish look exactly like a sample?", answer: "Samples help set direction, but broadcast materials, lighting, concrete conditions, and installation can create natural variation." },
      { question: "Can specialty finishes be used outdoors?", answer: "Some decorative directions may be possible outdoors, but UV exposure, water, texture, and cleaning needs must be considered carefully." },
      { question: "Are specialty floors harder to maintain?", answer: "Maintenance depends on texture, topcoat, and use. Kiwi can discuss practical cleaning expectations before the finish is chosen." },
      { question: "How do I choose between metallic, flake, and specialty finishes?", answer: "Metallic epoxy is usually about depth and movement, flake is a practical decorative broadcast, and specialty finishes add bolder custom effects to a coating system." }
    ]
  }
};

export function getPrimaryServiceContent(slug: string) {
  return primaryServiceContent[slug];
}
