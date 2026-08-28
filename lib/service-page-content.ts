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
      { title: "Strong coating build", text: "Epoxy can create a substantial protective layer over prepared concrete." },
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
      { question: "Will epoxy fix damaged concrete?", answer: "It can improve the surface after repairs, but it does not replace structural concrete repair when that is needed." }
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
      { title: "Color and blend selection", text: "Outdoor colors should work with the home exterior, hardscape, pool area, and surrounding landscape." }
    ],
    benefitDetails: [
      { title: "Better outdoor appearance", text: "A coating can make patios and pool decks feel more intentional and connected to the home." },
      { title: "Improved cleanability", text: "Coated surfaces are generally easier to clean than worn or porous concrete." },
      { title: "Texture planning", text: "The system can be selected with wet areas and foot traffic in mind." },
      { title: "Arizona-aware materials", text: "Sun, heat, and exposure should influence the coating system instead of being treated as afterthoughts." }
    ],
    applicationsIntro:
      "Outdoor coating systems are commonly used on patios, pool decks, walkways, backyard concrete areas, covered patios, and outdoor living spaces.",
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
  }
};

export function getPrimaryServiceContent(slug: string) {
  return primaryServiceContent[slug];
}
