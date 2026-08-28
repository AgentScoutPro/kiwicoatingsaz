import { getCity, getService } from "@/lib/site-data";

export type LocalServicePageContent = {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localUse: string[];
  systemChoices: string[];
  process: string[];
  conditions: string[];
  finishChoices: string[];
  relatedServices: string[];
  nearbyCities: string[];
  projectProof: string;
  reviewProof: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const tier1Cities = {
  mesa: {
    name: "Mesa",
    tone: "daily-use garages, backyard concrete, shops, and showroom-style spaces",
    opener: "Mesa properties often need coating systems that can handle active garages, dust, outdoor living areas, and surfaces that owners want to keep looking finished.",
    garage: "In Mesa, a garage floor may serve as parking, storage, a tool space, or the clean entry point into the home.",
    outdoor: "Mesa patios and pool decks need careful thinking around sun, water, dust, texture, and cleaning.",
    decorative: "Decorative floors in Mesa should still be planned around traffic, lighting, cleaning, and the way the room is used.",
    nearbyCities: ["gilbert", "chandler", "apache-junction"]
  },
  gilbert: {
    name: "Gilbert",
    tone: "finished residential garages, patios, pool decks, and decorative home surfaces",
    opener: "Gilbert homeowners often want concrete surfaces to feel more finished without losing practical durability for vehicles, storage, outdoor living, and daily maintenance.",
    garage: "A Gilbert garage often works as an extension of the home, which makes cleanability, color, and a more polished finish important.",
    outdoor: "Gilbert backyard concrete should be reviewed for texture, water exposure, sunlight, and how the patio or pool area is used.",
    decorative: "Decorative coating choices in Gilbert should support the home’s finish direction while still fitting traffic and upkeep.",
    nearbyCities: ["mesa", "chandler", "queen-creek"]
  },
  chandler: {
    name: "Chandler",
    tone: "residential garages, light commercial floors, patios, and customer-facing interiors",
    opener: "Chandler projects often need a practical balance between residential polish, business-ready appearance, and concrete that can be cleaned without fuss.",
    garage: "Chandler garage floors may see vehicles, bikes, tools, stored items, and frequent foot traffic from the house to the driveway.",
    outdoor: "Chandler patios and outdoor concrete need system choices that account for sun exposure, tracked-in dust, and texture expectations.",
    decorative: "For Chandler offices, studios, and showrooms, decorative coatings should be selected around lighting, traffic, and maintenance.",
    nearbyCities: ["gilbert", "mesa", "phoenix"]
  },
  "queen-creek": {
    name: "Queen Creek",
    tone: "newer-home garages, backyard spaces, workshops, and premium residential finishes",
    opener: "Queen Creek property owners often want garages and outdoor concrete to feel intentional, durable, and aligned with the rest of the home.",
    garage: "A Queen Creek garage may need to support vehicles, storage, hobbies, home projects, and a cleaner finished look.",
    outdoor: "Queen Creek outdoor concrete should be selected around sun, water, dust, furniture movement, and comfortable texture.",
    decorative: "Decorative systems in Queen Creek should fit the surrounding home finishes instead of feeling disconnected from the property.",
    nearbyCities: ["san-tan-valley", "gilbert", "mesa"]
  },
  "san-tan-valley": {
    name: "San Tan Valley",
    tone: "busy garages, backyard concrete, workshops, and practical residential surfaces",
    opener: "San Tan Valley floors often need practical coating systems for dust, heat, storage, vehicles, and outdoor concrete that sees regular use.",
    garage: "In San Tan Valley, garages often double as work zones, storage areas, and high-traffic entries into the home.",
    outdoor: "San Tan Valley patios and pool-adjacent concrete should be discussed around sun exposure, dust, water, and cleaning.",
    decorative: "Decorative floors in San Tan Valley should keep maintenance and surface use in view, even when the finish is bold.",
    nearbyCities: ["queen-creek", "florence", "coolidge"]
  },
  "casa-grande": {
    name: "Casa Grande",
    tone: "residential garages, shops, patios, and growing commercial floor needs",
    opener: "Casa Grande projects can range from home garages and patios to shop floors and commercial spaces that need stronger, cleaner concrete surfaces.",
    garage: "A Casa Grande garage or shop floor may need to handle vehicle traffic, tools, storage, dust, and routine cleaning.",
    outdoor: "Casa Grande outdoor concrete should be evaluated for heat, sun exposure, texture, and how the surface will be maintained.",
    decorative: "Decorative systems in Casa Grande can work for interiors or showrooms when the design direction and use both make sense.",
    nearbyCities: ["coolidge", "maricopa", "florence"]
  }
} as const;

const tier1Services = {
  "garage-floor-coatings": {
    name: "Garage Floor Coatings",
    short: "garage floors",
    intent: "turn bare garage concrete into a cleaner, more finished surface",
    localWhy: "Garage coatings are useful when concrete is stained, dusty, difficult to sweep, or visually unfinished.",
    choices: ["Decorative flake systems for color variation and practical texture", "Epoxy base layers where a strong coating build is appropriate", "Polyaspartic topcoat options when UV stability and efficient cure characteristics matter", "Quartz texture where a more rugged surface feel is desired"],
    process: ["Evaluate stains, cracks, previous coatings, and how the garage is used", "Prepare the concrete surface mechanically where appropriate", "Address cracks, chips, and surface defects before coating", "Install base coat, selected broadcast layer, and protective topcoat", "Discuss return-to-use timing based on materials and site conditions"],
    conditions: ["hot tire traffic", "dust", "stored chemicals or household spills", "tools and rolling storage", "sunlight near the garage opening"],
    finishes: ["neutral flake blends", "stone-inspired blends", "higher-contrast garage blends", "textured topcoat direction"],
    related: ["polyaspartic-floor-coatings", "epoxy-floor-coatings", "metallic-epoxy-floors"],
    faqAngle: "garage"
  },
  "polyaspartic-floor-coatings": {
    name: "Polyaspartic Floor Coatings",
    short: "polyaspartic coatings",
    intent: "create a durable coating system with strong topcoat performance",
    localWhy: "Polyaspartic systems are often considered where UV stability, traffic, and project timing are important parts of the conversation.",
    choices: ["Polyaspartic topcoats over decorative flake", "Complete polyaspartic coating systems where appropriate", "Textured finishes for wet or working areas", "Clear protective coats for selected decorative systems"],
    process: ["Review UV exposure, surface condition, and intended use", "Prepare the concrete for the selected coating system", "Repair visible defects where appropriate", "Install coating layers and broadcast material if selected", "Confirm cure and use guidance for the specific materials and conditions"],
    conditions: ["UV exposure", "Arizona heat", "garage or patio traffic", "dust and cleaning needs", "light commercial use"],
    finishes: ["flake broadcast", "clear topcoat", "textured outdoor-friendly direction", "garage-focused finish systems"],
    related: ["garage-floor-coatings", "epoxy-floor-coatings", "patio-and-pool-deck-coatings"],
    faqAngle: "polyaspartic"
  },
  "epoxy-floor-coatings": {
    name: "Epoxy Floor Coatings",
    short: "epoxy floors",
    intent: "build a strong coating layer over prepared concrete",
    localWhy: "Epoxy systems are useful when concrete needs a stronger finished surface, a decorative base, or a coating layer for garages, shops, and interior spaces.",
    choices: ["Epoxy base coats for garage and shop systems", "Solid-color epoxy where a simple finished surface is desired", "Flake or quartz broadcast over epoxy", "Metallic epoxy for controlled decorative interiors"],
    process: ["Inspect concrete condition, previous coatings, stains, and cracks", "Mechanically prepare the concrete where appropriate", "Complete needed crack or chip repairs", "Install the epoxy layer as the base or body of the system", "Add broadcast material or topcoat based on the selected finish"],
    conditions: ["porous concrete", "oil or fluid staining", "shop traffic", "dust", "UV exposure that may require topcoat planning"],
    finishes: ["solid color", "flake broadcast", "quartz texture", "metallic effect"],
    related: ["garage-floor-coatings", "polyaspartic-floor-coatings", "metallic-epoxy-floors"],
    faqAngle: "epoxy"
  },
  "patio-and-pool-deck-coatings": {
    name: "Patio and Pool Deck Coatings",
    short: "patio and pool deck coatings",
    intent: "refresh outdoor concrete with texture, cleanability, and exposure in mind",
    localWhy: "Outdoor coating projects need attention to sun, water, dust, foot traffic, furniture, and how the surface will be cleaned.",
    choices: ["Decorative flake systems for outdoor concrete", "Textured finishes for patios and pool-adjacent areas", "UV-stable topcoat options where sunlight is a concern", "Color blends that work with hardscape and exterior finishes"],
    process: ["Review sun exposure, wet areas, drainage, and existing concrete condition", "Clean and prepare the concrete for the selected exterior coating system", "Address cracks, chips, edges, and transitions where appropriate", "Install coating layers with the selected texture or broadcast", "Discuss care and return-to-use based on materials and site conditions"],
    conditions: ["direct sunlight", "water near pool areas", "dust and landscaping debris", "outdoor furniture movement", "bare concrete that is hard to clean"],
    finishes: ["outdoor flake blends", "textured topcoats", "subtle neutral colors", "higher-traction finish direction"],
    related: ["polyaspartic-floor-coatings", "garage-floor-coatings", "epoxy-floor-coatings"],
    faqAngle: "outdoor"
  },
  "metallic-epoxy-floors": {
    name: "Metallic Epoxy Floors",
    short: "metallic epoxy floors",
    intent: "make interior concrete a decorative focal point",
    localWhy: "Metallic epoxy is useful where visual depth, movement, and a custom finish matter, especially in controlled interior or customer-facing spaces.",
    choices: ["Single-color metallic movement for a restrained look", "Multi-color metallic blends for stronger contrast", "Protective topcoats selected around traffic and sheen", "Color planning around lighting and surrounding finishes"],
    process: ["Review the design direction, concrete condition, lighting, and traffic", "Prepare the surface so the decorative coating has a suitable foundation", "Repair visible imperfections where appropriate", "Install the metallic epoxy to create movement and depth", "Add a protective topcoat selected around use and maintenance"],
    conditions: ["interior lighting", "foot traffic", "sunlight through doors or windows", "cleaning expectations", "decorative expectations"],
    finishes: ["subtle metallic movement", "bold multi-color blends", "gloss direction", "decorative topcoat systems"],
    related: ["epoxy-floor-coatings", "garage-floor-coatings", "polyaspartic-floor-coatings"],
    faqAngle: "metallic"
  }
} as const;

function buildFaqs(city: string, service: keyof typeof tier1Services, content: (typeof tier1Services)[keyof typeof tier1Services]) {
  const cityName = tier1Cities[city as keyof typeof tier1Cities].name;

  return [
    {
      question: `Does Kiwi install ${content.short} in ${cityName}?`,
      answer: `Yes. ${cityName} is part of the Tier 1 local service map for ${content.name.toLowerCase()}.`
    },
    {
      question: `Why would ${cityName} property owners consider this service?`,
      answer: `${content.localWhy} The right fit depends on the concrete condition, exposure, use, and finish preference.`
    },
    {
      question: "What happens before the coating is installed?",
      answer: "Kiwi reviews the surface, discusses how the space is used, evaluates visible concrete issues, and selects preparation and coating layers around the project."
    },
    {
      question: "Can damaged or stained concrete be coated?",
      answer: "Often, but it needs to be evaluated first. Stains, cracks, chips, old coatings, and surface weakness can affect preparation and system choice."
    },
    {
      question: "How do I request a quote?",
      answer: `Call Kiwi Coatings AZ or use the contact form with the ${cityName} location, surface type, current condition, and finish direction you are considering.`
    }
  ];
}

export function getLocalServicePageContent(citySlug: string, serviceSlug: string): LocalServicePageContent | undefined {
  const city = tier1Cities[citySlug as keyof typeof tier1Cities];
  const serviceContent = tier1Services[serviceSlug as keyof typeof tier1Services];
  const cityData = getCity(citySlug);
  const service = getService(serviceSlug);

  if (!city || !serviceContent || !cityData || !service) {
    return undefined;
  }

  const surfaceContext =
    serviceSlug === "patio-and-pool-deck-coatings"
      ? city.outdoor
      : serviceSlug === "metallic-epoxy-floors"
        ? city.decorative
        : city.garage;

  return {
    title: `${service.name} in ${city.name}, AZ`,
    metaDescription: `${service.shortDescription} Learn how ${serviceContent.short} fit ${city.name} concrete, traffic, exposure, finish options, and quote planning.`,
    h1: `${service.name} in ${city.name}, AZ`,
    intro: `${city.opener} For ${serviceContent.short}, the local goal is to ${serviceContent.intent} while accounting for ${city.tone}.`,
    localUse: [
      surfaceContext,
      `${serviceContent.localWhy} In ${city.name}, Kiwi looks at the actual surface instead of assuming every property needs the same coating build.`,
      `The recommendation should consider ${cityData.localChallenges.join(", ")}, along with cleaning expectations and the look the owner wants.`
    ],
    systemChoices: [...serviceContent.choices],
    process: [...serviceContent.process],
    conditions: serviceContent.conditions.map((condition) => `${city.name} consideration: ${condition}`),
    finishChoices: [...serviceContent.finishes],
    relatedServices: [...serviceContent.related],
    nearbyCities: [...city.nearbyCities],
    projectProof: `Future ${city.name} ${service.name.toLowerCase()} case studies can be added here when verified photos, project details, and customer-approved context are available.`,
    reviewProof: `${city.name} review proof should use real customer review content only after it is verified and approved for this page.`,
    faqs: buildFaqs(citySlug, serviceSlug as keyof typeof tier1Services, serviceContent)
  };
}
