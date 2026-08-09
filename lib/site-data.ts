export const site = {
  name: "Kiwi Coatings AZ",
  legalName: "KiwiCoatings LLC",
  url: "https://kiwicoatingsaz.com",
  phone: "(602) 901-1823",
  phoneHref: "tel:+16029011823",
  email: "randy@kiwicoatingsaz.com",
  area: "Coolidge, AZ",
  license: "Licensed and Bonded Arizona Residential General Contractor ROC#363582",
  accreditation:
    "Licensed and Bonded General Contractor located in the Coolidge, AZ area in Arizona Residential General Contractor License - ROC#363582",
  tagline: "High-performance coatings that combine beauty and unbeatable protection.",
  secondaryTagline: "A full spectrum of coatings to protect, enhance, and transform any surface.",
  socialHandle: "@KiwiCoatingsAZ",
  socials: {
    facebook: "https://www.facebook.com/kiwicoatingsaz",
    instagram: "https://instagram.com/kiwicoatingsaz"
  },
  reviewUrl: "https://maps.app.goo.gl/ZiJsREsFixigTz8K8",
  bbbUrl: "https://www.bbb.org/us/az/coolidge/profile/epoxy-floor-coating/kiwicoatings-llc-1126-1000166622/#sealclick",
  logo: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/01/kiwi-coatings-logo.png?fit=1024%2C1024&ssl=1",
  footerLogo: "https://kiwicoatingsaz.com/wp-content/themes/Kiwi%20Coatings%20Theme/assets/img/footerlogo.png",
  heroImage: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/02/Kiwi_Coatings_Intro_2026-8262-scaled.jpg?fit=2560%2C1707&ssl=1",
  introImage: "https://kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8189-scaled.jpg",
  dividerVideo: "https://kiwicoatingsaz.com/wp-content/themes/Kiwi%20Coatings%20Theme/assets/img/glow_handicap_sign.mp4",
  quoteOptions: ["Garage", "Patio", "Pool Decks", "I'm Not Sure"]
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  benefits: string[];
  image?: string;
  liveSiteGroup?: string;
};

export const services: Service[] = [
  {
    slug: "garage-floor-coatings",
    name: "Garage Floor Coatings",
    short: "Durable garage floors built for Arizona dust, heat, tires, tools, and daily traffic.",
    intro: "Kiwi Coatings AZ installs garage floor coating systems that improve appearance, cleanability, and long-term surface protection for homes across central Arizona.",
    benefits: ["Hot-tire resistant finish options", "Easy-to-clean surface", "Flake, quartz, epoxy, and polyaspartic systems"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/durable-floor-coatings-2560.jpg",
    liveSiteGroup: "Durable Floor Coatings"
  },
  {
    slug: "polyaspartic-floor-coatings",
    name: "Polyaspartic Floor Coatings",
    short: "Fast-curing, UV-stable coating systems for residential and light commercial floors.",
    intro: "Polyaspartic coatings are a strong fit for Arizona properties that need a durable, attractive floor with efficient installation and long-term UV performance.",
    benefits: ["Fast return to use", "UV-resistant finish", "Strong abrasion and chemical resistance"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/durable-floor-coatings-2560.jpg",
    liveSiteGroup: "Durable Floor Coatings"
  },
  {
    slug: "epoxy-floor-coatings",
    name: "Epoxy Floor Coatings",
    short: "High-build protective floor systems for garages, shops, patios, and workspaces.",
    intro: "Epoxy floor coatings create a strong base layer and polished finish for surfaces that need better protection, better looks, and simpler maintenance.",
    benefits: ["Excellent bond strength", "Custom color and broadcast options", "Strong protection from wear and spills"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/durable-floor-coatings-2560.jpg",
    liveSiteGroup: "Durable Floor Coatings"
  },
  {
    slug: "metallic-epoxy-floors",
    name: "Metallic Epoxy Floors",
    short: "Decorative epoxy flooring with dimensional movement, depth, and a premium finish.",
    intro: "Metallic epoxy floors give interior concrete surfaces a high-end visual effect while keeping the protection expected from a professional coating system.",
    benefits: ["Custom decorative movement", "Premium showroom look", "Great for interior feature spaces"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/02/Kiwi_Coatings_Intro_2026-8373-1-scaled.jpg",
    liveSiteGroup: "Durable Floor Coatings"
  },
  {
    slug: "flake-floor-systems",
    name: "Flake Floor Systems",
    short: "Classic flake blends including terrazzo, stone, mica, and custom color combinations.",
    intro: "Flake floor systems are a practical, attractive choice for garages, patios, utility areas, and commercial spaces that need traction and visual texture.",
    benefits: ["Wide blend selection", "Helps hide dust and daily wear", "Slip-resistant texture options"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/flakes.jpg",
    liveSiteGroup: "Timeless Flake Blends"
  },
  {
    slug: "quartz-floor-coatings",
    name: "Quartz Floor Coatings",
    short: "Heavy-duty quartz broadcast systems for textured, durable, professional surfaces.",
    intro: "Quartz coating systems are built for demanding floors where durability, traction, and a clean finished appearance all matter.",
    benefits: ["Durable aggregate texture", "Commercial-grade feel", "Strong traction and wear resistance"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/flakes.jpg",
    liveSiteGroup: "Timeless Flake Blends"
  },
  {
    slug: "patio-and-pool-deck-coatings",
    name: "Patio and Pool Deck Coatings",
    short: "Outdoor coating options for patios, walkways, pool decks, and backyard living areas.",
    intro: "Kiwi Coatings AZ helps Arizona homeowners refresh outdoor concrete with coating systems selected for appearance, grip, and weather exposure.",
    benefits: ["Outdoor-friendly finish options", "Improved backyard appearance", "Texture options for wet areas"],
    image: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8203-scaled-e1769828547879.jpg?fit=1707%2C2005&ssl=1",
    liveSiteGroup: "Timeless Flake Blends"
  },
  {
    slug: "commercial-floor-coatings",
    name: "Commercial Floor Coatings",
    short: "Protective floor coatings for shops, offices, showrooms, storage areas, and facilities.",
    intro: "Commercial floor coatings help local businesses create safer, cleaner, and more durable concrete surfaces without losing visual polish.",
    benefits: ["Built for frequent foot traffic", "Easy maintenance", "Professional finish for customer-facing spaces"],
    image: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8320-scaled.jpg?fit=2560%2C1707&ssl=1",
    liveSiteGroup: "Durable Floor Coatings"
  },
  {
    slug: "specialty-floor-finishes",
    name: "Specialty Floor Finishes",
    short: "Glow, neon, glitter, UV flake, and custom finish options for standout spaces.",
    intro: "Specialty floor finishes give homeowners and businesses more expressive options while preserving the protection of a professional coating system.",
    benefits: ["Custom visual effects", "Indoor and outdoor options", "Built around the intended use of the space"],
    image: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8320-scaled.jpg?fit=2560%2C1707&ssl=1",
    liveSiteGroup: "Standout Finishes"
  }
];

export type City = {
  slug: string;
  name: string;
  county: string;
  focus: string;
};

export const cities: City[] = [
  { slug: "coolidge", name: "Coolidge", county: "Pinal County", focus: "home garages, patios, and nearby commercial spaces" },
  { slug: "florence", name: "Florence", county: "Pinal County", focus: "garage floors, workshops, and outdoor concrete areas" },
  { slug: "casa-grande", name: "Casa Grande", county: "Pinal County", focus: "residential garages and growing commercial properties" },
  { slug: "san-tan-valley", name: "San Tan Valley", county: "Pinal County", focus: "garage transformations and backyard concrete upgrades" },
  { slug: "queen-creek", name: "Queen Creek", county: "Maricopa and Pinal County", focus: "premium residential floor coating projects" },
  { slug: "apache-junction", name: "Apache Junction", county: "Pinal and Maricopa County", focus: "garage, patio, and utility floor coatings" },
  { slug: "chandler", name: "Chandler", county: "Maricopa County", focus: "residential and light commercial coating systems" },
  { slug: "gilbert", name: "Gilbert", county: "Maricopa County", focus: "garage floor coatings and polished residential finishes" },
  { slug: "mesa", name: "Mesa", county: "Maricopa County", focus: "garage, shop, showroom, and patio floor coatings" },
  { slug: "tempe", name: "Tempe", county: "Maricopa County", focus: "commercial floors, garages, and specialty finish projects" },
  { slug: "scottsdale", name: "Scottsdale", county: "Maricopa County", focus: "premium decorative and protective concrete coatings" },
  { slug: "phoenix", name: "Phoenix", county: "Maricopa County", focus: "residential garages, outdoor spaces, and business floors" }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
