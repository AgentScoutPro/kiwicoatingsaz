export const site = {
  name: "Kiwi Coatings AZ",
  legalName: "KiwiCoatings LLC",
  url: "https://kiwicoatingsaz.com",
  phone: "(602) 901-1823",
  phoneE164: "+1-602-901-1823",
  phoneHref: "tel:+16029011823",
  email: "randy@kiwicoatingsaz.com",
  area: "Coolidge, AZ",
  licenseNumber: "ROC #363582",
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
  reviewUrl: "https://share.google/3dHiI8OBoD4IYFHeH",
  bbbUrl: "https://www.bbb.org/us/az/coolidge/profile/epoxy-floor-coating/kiwicoatings-llc-1126-1000166622/#sealclick",
  logo: "https://kiwicoatingsaz.com/media/kiwi/brand/kiwi-coatings-logo.png",
  logoPath: "/media/kiwi/brand/kiwi-coatings-logo.png",
  bbbLogoPath: "/media/kiwi/brand/bbb-accredited-business.png",
  footerLogo: "https://kiwicoatingsaz.com/media/kiwi/brand/kiwi-coatings-logo.png",
  heroImage: "https://kiwicoatingsaz.com/media/kiwi/hero/kiwi-hero-poster.jpg",
  introImage: "https://kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8189-scaled.jpg",
  dividerVideo: "https://kiwicoatingsaz.com/wp-content/themes/Kiwi%20Coatings%20Theme/assets/img/glow_handicap_sign.mp4",
  quoteOptions: [
    "Garage Floor",
    "Patio / Pool Deck / Outdoor Concrete",
    "Epoxy Floor",
    "Polyaspartic Floor",
    "Metallic / Decorative Interior Floor",
    "Flake Floor System",
    "Quartz Floor",
    "Commercial Floor",
    "Specialty / Custom Finish",
    "I'm Not Sure"
  ],
  contentLastModified: "2026-08-27"
};

export type Service = {
  slug: string;
  name: string;
  seoTitle: string;
  shortName: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  shortDescription: string;
  intro: string;
  benefits: string[];
  applications: string[];
  relatedServices: string[];
  image?: string;
  liveSiteGroup?: string;
  featured: boolean;
  priority: number;
};

export const services: Service[] = [
  {
    slug: "garage-floor-coatings",
    name: "Garage Floor Coatings",
    seoTitle: "Garage Floor Coatings in Arizona",
    shortName: "Garage Floors",
    primaryKeyword: "garage floor coatings",
    secondaryKeywords: ["garage epoxy flooring", "garage floor epoxy", "polyaspartic garage floor coating"],
    searchIntent: "Homeowners comparing durable, easy-to-clean garage floor coating options.",
    shortDescription: "Durable garage floors built for Arizona dust, heat, tires, tools, and daily traffic.",
    intro: "Kiwi Coatings AZ installs garage floor coating systems that improve appearance, cleanability, and long-term surface protection for homes across central Arizona.",
    benefits: ["Hot-tire resistant finish options", "Easy-to-clean surface", "Flake, quartz, epoxy, and polyaspartic systems"],
    applications: ["Residential garages", "Workshops", "Storage areas", "Light commercial garage spaces"],
    relatedServices: ["polyaspartic-floor-coatings", "epoxy-floor-coatings", "flake-floor-systems"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/durable-floor-coatings-2560.jpg",
    liveSiteGroup: "Durable Floor Coatings",
    featured: true,
    priority: 1
  },
  {
    slug: "polyaspartic-floor-coatings",
    name: "Polyaspartic Floor Coatings",
    seoTitle: "Polyaspartic Floor Coatings in Arizona",
    shortName: "Polyaspartic Coatings",
    primaryKeyword: "polyaspartic floor coatings",
    secondaryKeywords: ["polyaspartic garage floors", "UV stable floor coatings", "fast curing floor coatings"],
    searchIntent: "Property owners researching durable floor coatings with fast cure times and UV stability.",
    shortDescription: "Fast-curing, UV-stable coating systems for residential and light commercial floors.",
    intro: "Polyaspartic coatings are a strong fit for Arizona properties that need a durable, attractive floor with efficient installation and long-term UV performance.",
    benefits: ["Fast return to use", "UV-resistant finish", "Strong abrasion and chemical resistance"],
    applications: ["Garages", "Patios", "Commercial floors", "Utility areas"],
    relatedServices: ["garage-floor-coatings", "epoxy-floor-coatings", "patio-and-pool-deck-coatings"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/durable-floor-coatings-2560.jpg",
    liveSiteGroup: "Durable Floor Coatings",
    featured: true,
    priority: 2
  },
  {
    slug: "epoxy-floor-coatings",
    name: "Epoxy Floor Coatings",
    seoTitle: "Epoxy Floor Coatings in Arizona",
    shortName: "Epoxy Floors",
    primaryKeyword: "epoxy floor coatings",
    secondaryKeywords: ["epoxy flooring", "garage epoxy floors", "decorative epoxy floors"],
    searchIntent: "Homeowners and businesses comparing epoxy floor systems for concrete protection.",
    shortDescription: "High-build protective floor systems for garages, shops, patios, and workspaces.",
    intro: "Epoxy floor coatings create a strong base layer and polished finish for surfaces that need better protection, better looks, and simpler maintenance.",
    benefits: ["Excellent bond strength", "Custom color and broadcast options", "Strong protection from wear and spills"],
    applications: ["Garages", "Shops", "Workspaces", "Decorative interior floors"],
    relatedServices: ["garage-floor-coatings", "polyaspartic-floor-coatings", "metallic-epoxy-floors"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/durable-floor-coatings-2560.jpg",
    liveSiteGroup: "Durable Floor Coatings",
    featured: true,
    priority: 3
  },
  {
    slug: "metallic-epoxy-floors",
    name: "Metallic Epoxy Floors",
    seoTitle: "Metallic Epoxy Floors in Arizona",
    shortName: "Metallic Floors",
    primaryKeyword: "metallic epoxy floors",
    secondaryKeywords: ["metallic epoxy flooring", "decorative epoxy floors", "luxury epoxy floors"],
    searchIntent: "Customers looking for premium decorative epoxy flooring with visual depth.",
    shortDescription: "Decorative epoxy flooring with dimensional movement, depth, and a premium finish.",
    intro: "Metallic epoxy floors give interior concrete surfaces a high-end visual effect while keeping the protection expected from a professional coating system.",
    benefits: ["Custom decorative movement", "Premium showroom look", "Great for interior feature spaces"],
    applications: ["Interior feature floors", "Showrooms", "Retail spaces", "Decorative residential floors"],
    relatedServices: ["epoxy-floor-coatings", "commercial-floor-coatings", "specialty-floor-finishes"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/02/Kiwi_Coatings_Intro_2026-8373-1-scaled.jpg",
    liveSiteGroup: "Durable Floor Coatings",
    featured: true,
    priority: 5
  },
  {
    slug: "flake-floor-systems",
    name: "Flake Floor Systems",
    seoTitle: "Flake Floor Systems in Arizona",
    shortName: "Flake Systems",
    primaryKeyword: "flake floor systems",
    secondaryKeywords: ["flake floor coatings", "decorative flake floors", "terrazzo flake floors"],
    searchIntent: "Customers comparing decorative broadcast flake systems for garages and concrete surfaces.",
    shortDescription: "Classic flake blends including terrazzo, stone, mica, and custom color combinations.",
    intro: "Flake floor systems are a practical, attractive choice for garages, patios, utility areas, and commercial spaces that need traction and visual texture.",
    benefits: ["Wide blend selection", "Helps hide dust and daily wear", "Slip-resistant texture options"],
    applications: ["Garages", "Patios", "Utility spaces", "Commercial floors"],
    relatedServices: ["garage-floor-coatings", "quartz-floor-coatings", "specialty-floor-finishes"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/flakes.jpg",
    liveSiteGroup: "Timeless Flake Blends",
    featured: false,
    priority: 7
  },
  {
    slug: "quartz-floor-coatings",
    name: "Quartz Floor Coatings",
    seoTitle: "Quartz Floor Coatings in Arizona",
    shortName: "Quartz Coatings",
    primaryKeyword: "quartz floor coatings",
    secondaryKeywords: ["quartz broadcast flooring", "textured floor coatings", "commercial quartz floors"],
    searchIntent: "Property owners looking for durable textured coating systems with strong traction.",
    shortDescription: "Heavy-duty quartz broadcast systems for textured, durable, professional surfaces.",
    intro: "Quartz coating systems are built for demanding floors where durability, traction, and a clean finished appearance all matter.",
    benefits: ["Durable aggregate texture", "Commercial-grade feel", "Strong traction and wear resistance"],
    applications: ["Commercial floors", "Utility areas", "Work areas", "Textured concrete surfaces"],
    relatedServices: ["flake-floor-systems", "commercial-floor-coatings", "polyaspartic-floor-coatings"],
    image: "https://kiwicoatingsaz.com/wp-content/uploads/2026/07/flakes.jpg",
    liveSiteGroup: "Timeless Flake Blends",
    featured: false,
    priority: 8
  },
  {
    slug: "patio-and-pool-deck-coatings",
    name: "Patio and Pool Deck Coatings",
    seoTitle: "Patio and Pool Deck Coatings in Arizona",
    shortName: "Patio and Pool Decks",
    primaryKeyword: "patio and pool deck coatings",
    secondaryKeywords: ["patio coatings", "pool deck coatings", "outdoor concrete coatings"],
    searchIntent: "Homeowners researching outdoor concrete coating options for backyard living areas.",
    shortDescription: "Outdoor coating options for patios, walkways, pool decks, and backyard living areas.",
    intro: "Kiwi Coatings AZ helps Arizona homeowners refresh outdoor concrete with coating systems selected for appearance, grip, and weather exposure.",
    benefits: ["Outdoor-friendly finish options", "Improved backyard appearance", "Texture options for wet areas"],
    applications: ["Patios", "Pool decks", "Walkways", "Stem walls", "Backyard concrete areas"],
    relatedServices: ["polyaspartic-floor-coatings", "flake-floor-systems", "garage-floor-coatings"],
    image: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8203-scaled-e1769828547879.jpg?fit=1707%2C2005&ssl=1",
    liveSiteGroup: "Timeless Flake Blends",
    featured: true,
    priority: 4
  },
  {
    slug: "commercial-floor-coatings",
    name: "Commercial Floor Coatings",
    seoTitle: "Commercial Floor Coatings in Arizona",
    shortName: "Commercial Floors",
    primaryKeyword: "commercial floor coatings",
    secondaryKeywords: ["commercial epoxy flooring", "shop floor coatings", "showroom floor coatings"],
    searchIntent: "Business owners comparing durable coating systems for customer-facing and working floors.",
    shortDescription: "Protective floor coatings for shops, offices, showrooms, storage areas, and facilities.",
    intro: "Commercial floor coatings help local businesses create safer, cleaner, and more durable concrete surfaces without losing visual polish.",
    benefits: ["Built for frequent foot traffic", "Easy maintenance", "Professional finish for customer-facing spaces"],
    applications: ["Shops", "Offices", "Showrooms", "Storage areas", "Facilities"],
    relatedServices: ["epoxy-floor-coatings", "polyaspartic-floor-coatings", "quartz-floor-coatings"],
    image: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8320-scaled.jpg?fit=2560%2C1707&ssl=1",
    liveSiteGroup: "Durable Floor Coatings",
    featured: true,
    priority: 6
  },
  {
    slug: "specialty-floor-finishes",
    name: "Specialty Floor Finishes",
    seoTitle: "Specialty Floor Finishes in Arizona",
    shortName: "Specialty Finishes",
    primaryKeyword: "specialty floor finishes",
    secondaryKeywords: ["glow floor finishes", "neon floor flakes", "custom floor finishes"],
    searchIntent: "Customers exploring custom decorative floor finish options for standout spaces.",
    shortDescription: "Glow, neon, glitter, UV flake, and custom finish options for standout spaces.",
    intro: "Specialty floor finishes give homeowners and businesses more expressive options while preserving the protection of a professional coating system.",
    benefits: ["Custom visual effects", "Indoor and outdoor options", "Built around the intended use of the space"],
    applications: ["Decorative floors", "Garages", "Commercial feature spaces", "Custom finish projects"],
    relatedServices: ["flake-floor-systems", "metallic-epoxy-floors", "epoxy-floor-coatings"],
    image: "https://i0.wp.com/kiwicoatingsaz.com/wp-content/uploads/2026/01/Kiwi_Coatings_Intro_2026-8320-scaled.jpg?fit=2560%2C1707&ssl=1",
    liveSiteGroup: "Standout Finishes",
    featured: false,
    priority: 9
  }
];

export type City = {
  slug: string;
  name: string;
  county: string;
  region: string;
  priority: number;
  verified: boolean;
  localFocus: string;
  nearbyAreas: string[];
  localChallenges: string[];
  featured: boolean;
};

export const cities: City[] = [
  { slug: "mesa", name: "Mesa", county: "Maricopa County", region: "East Valley", priority: 1, verified: true, localFocus: "garage, shop, showroom, and patio floor coatings", nearbyAreas: ["Gilbert", "Chandler", "Apache Junction"], localChallenges: ["heat exposure", "dust", "daily vehicle traffic"], featured: true },
  { slug: "gilbert", name: "Gilbert", county: "Maricopa County", region: "East Valley", priority: 2, verified: true, localFocus: "garage floor coatings and polished residential finishes", nearbyAreas: ["Mesa", "Chandler", "Queen Creek"], localChallenges: ["garage dust", "hot tires", "outdoor concrete exposure"], featured: true },
  { slug: "chandler", name: "Chandler", county: "Maricopa County", region: "East Valley", priority: 3, verified: true, localFocus: "residential and light commercial coating systems", nearbyAreas: ["Gilbert", "Mesa", "Phoenix"], localChallenges: ["frequent foot traffic", "garage use", "UV exposure"], featured: true },
  { slug: "queen-creek", name: "Queen Creek", county: "Maricopa and Pinal County", region: "Southeast Valley", priority: 4, verified: true, localFocus: "premium residential floor coating projects", nearbyAreas: ["San Tan Valley", "Gilbert", "Mesa"], localChallenges: ["new-home garage floors", "dust", "outdoor concrete wear"], featured: true },
  { slug: "san-tan-valley", name: "San Tan Valley", county: "Pinal County", region: "Southeast Valley", priority: 5, verified: true, localFocus: "garage transformations and backyard concrete upgrades", nearbyAreas: ["Queen Creek", "Florence", "Coolidge"], localChallenges: ["dust", "garage traffic", "sun-exposed concrete"], featured: true },
  { slug: "casa-grande", name: "Casa Grande", county: "Pinal County", region: "Central Arizona", priority: 6, verified: true, localFocus: "residential garages and growing commercial properties", nearbyAreas: ["Coolidge", "Maricopa", "Florence"], localChallenges: ["heat", "dust", "working floor durability"], featured: true },
  { slug: "maricopa", name: "Maricopa", county: "Pinal County", region: "Central Arizona", priority: 7, verified: true, localFocus: "garage floors, patios, and residential concrete coating projects", nearbyAreas: ["Casa Grande", "Phoenix", "Queen Creek"], localChallenges: ["new-home concrete", "dust", "outdoor exposure"], featured: false },
  { slug: "apache-junction", name: "Apache Junction", county: "Pinal and Maricopa County", region: "East Valley", priority: 8, verified: true, localFocus: "garage, patio, and utility floor coatings", nearbyAreas: ["Mesa", "Gold Canyon", "Queen Creek"], localChallenges: ["dust", "sun exposure", "utility floor wear"], featured: false },
  { slug: "gold-canyon", name: "Gold Canyon", county: "Pinal County", region: "East Valley", priority: 9, verified: true, localFocus: "decorative and protective floor coatings for garages and outdoor concrete", nearbyAreas: ["Apache Junction", "Mesa", "Queen Creek"], localChallenges: ["outdoor exposure", "dust", "decorative finish selection"], featured: false },
  { slug: "florence", name: "Florence", county: "Pinal County", region: "Central Arizona", priority: 10, verified: true, localFocus: "garage floors, workshops, and outdoor concrete areas", nearbyAreas: ["Coolidge", "San Tan Valley", "Casa Grande"], localChallenges: ["dust", "workshop use", "sun-exposed concrete"], featured: false },
  { slug: "coolidge", name: "Coolidge", county: "Pinal County", region: "Central Arizona", priority: 11, verified: true, localFocus: "home garages, patios, and nearby commercial spaces", nearbyAreas: ["Florence", "Casa Grande", "San Tan Valley"], localChallenges: ["heat", "dust", "working floor wear"], featured: false },
  { slug: "phoenix", name: "Phoenix", county: "Maricopa County", region: "Greater Phoenix", priority: 12, verified: true, localFocus: "residential garages, outdoor spaces, and business floors", nearbyAreas: ["Mesa", "Chandler", "Maricopa"], localChallenges: ["heat exposure", "vehicle traffic", "commercial floor wear"], featured: false },
  { slug: "tempe", name: "Tempe", county: "Maricopa County", region: "Future market", priority: 50, verified: false, localFocus: "future commercial floors, garages, and specialty finish projects", nearbyAreas: ["Mesa", "Chandler", "Phoenix"], localChallenges: ["future market validation needed"], featured: false },
  { slug: "scottsdale", name: "Scottsdale", county: "Maricopa County", region: "Future market", priority: 51, verified: false, localFocus: "future decorative and protective concrete coating projects", nearbyAreas: ["Phoenix", "Mesa"], localChallenges: ["future market validation needed"], featured: false }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
