export type StoryMediaConfig = {
  mediaId: string;
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  alt: string;
  aspect?: string;
  position?: string;
  priority?: boolean;
  overlay?: "dark" | "gradient";
  caption?: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export type HomeReview = {
  text: string;
  reviewer: string;
  rating?: number;
  source: string;
  date?: string;
};

export const homeMedia = {
  hero: {
    mediaId: "hero-transformation",
    videoSrc: "/media/kiwi/hero/kiwi-hero-randy-transformation.mp4",
    posterSrc: "/media/kiwi/hero/kiwi-hero-poster.jpg",
    imageSrc: "/media/kiwi/hero/kiwi-hero-poster.jpg",
    alt: "Finished Kiwi Coatings garage floor coating with the Arizona desert visible through the open garage door",
    priority: true
  },
  environment: {
    mediaId: "arizona-environment",
    imageSrc: "/media/kiwi/environment/kiwi-arizona-bare-concrete-01.jpg",
    alt: "Bare, worn concrete garage floor before coating, with the Arizona desert visible outside",
    aspect: "3 / 2"
  },
  system: {
    mediaId: "coating-system",
    imageSrc: "/media/kiwi/process/kiwi-surface-prep-01.jpg",
    alt: "Kiwi Coatings technician preparing a concrete surface with a grinder before coating",
    aspect: "4 / 3"
  },
  garage: {
    mediaId: "garage-transformation",
    imageSrc: "/media/kiwi/garage/kiwi-garage-finished-01.jpg",
    alt: "Finished gray flake garage floor coating with a car parked on it",
    aspect: "3 / 2",
    priority: false
  },
  outdoor: {
    mediaId: "outdoor-living",
    imageSrc: "/media/kiwi/outdoor/kiwi-patio-finished-01.jpg",
    alt: "Finished light gray flake patio floor coating under a covered outdoor living space",
    aspect: "4 / 5"
  },
  commercial: {
    mediaId: "commercial-flooring",
    alt: "Commercial concrete floor coating"
  },
  process: {
    mediaId: "installation-process",
    imageSrc: "/media/kiwi/process/kiwi-tools-01.jpg",
    alt: "Kiwi Coatings floor grinding and preparation equipment staged on a finished flake floor",
    aspect: "3 / 2"
  },
  finalCta: {
    mediaId: "final-cta",
    imageSrc: "/media/kiwi/garage/kiwi-garage-finished-03.jpg",
    alt: "Finished dark flake garage floor coating ready for everyday use",
    aspect: "3 / 4"
  }
} satisfies Record<string, StoryMediaConfig>;

export const processSteps: Array<{
  title: string;
  text: string;
  imageSrc?: string;
  alt?: string;
}> = [
  {
    title: "Evaluate",
    text: "Review the concrete, use of the space, exposure, and desired finish."
  },
  {
    title: "Prepare",
    text: "Prepare the surface so the coating system has a suitable foundation.",
    imageSrc: "/media/kiwi/process/kiwi-tools-01.jpg",
    alt: "Grinding and surface preparation equipment used before coating"
  },
  {
    title: "Repair Where Needed",
    text: "Address cracks, chips, worn areas, or old coatings where appropriate.",
    imageSrc: "/media/kiwi/process/kiwi-crack-repair-01.jpg",
    alt: "Technician injecting crack repair material into a concrete floor crack before coating"
  },
  {
    title: "Coat",
    text: "Install the selected base and coating layers for the project.",
    imageSrc: "/media/kiwi/process/kiwi-coat-application-01.jpg",
    alt: "Kiwi Coatings crew applying a base coating layer to a garage floor"
  },
  {
    title: "Broadcast / Finish",
    text: "Add flake, quartz, metallic movement, or other finish direction when selected.",
    imageSrc: "/media/kiwi/process/kiwi-broadcast-01.jpg",
    alt: "Kiwi Coatings technician broadcasting decorative flake across a wet coating"
  },
  {
    title: "Protect",
    text: "Complete the system with a protective finish selected around use and exposure."
  }
];

export type CustomInteriorPanel = {
  id: string;
  label: string;
  room: string;
  imageSrc: string;
  videoSrc?: string;
  posterSrc?: string;
  alt: string;
};

export const customInteriorPrimary: CustomInteriorPanel = {
  id: "custom-office",
  label: "Custom Metallic Floor",
  room: "Office",
  imageSrc: "/media/kiwi/custom-interiors/custom-office-metallic-poster.jpg",
  videoSrc: "/media/kiwi/custom-interiors/custom-office-metallic.mp4",
  posterSrc: "/media/kiwi/custom-interiors/custom-office-metallic-poster.jpg",
  alt: "Green and teal flowing metallic epoxy floor coating installed in a finished office"
};

export const customInteriorPanels: CustomInteriorPanel[] = [
  {
    id: "custom-closet",
    label: "Custom Metallic Floor",
    room: "Walk-In Closet",
    imageSrc: "/media/kiwi/custom-interiors/custom-walk-in-closet-metallic.jpg",
    alt: "Pink and purple metallic epoxy floor coating finished in a walk-in closet"
  },
  {
    id: "custom-bedroom",
    label: "Custom Metallic Floor",
    room: "Master Bedroom",
    imageSrc: "/media/kiwi/custom-interiors/custom-master-bedroom-metallic.jpg",
    alt: "Deep purple metallic epoxy floor coating finished in a master bedroom"
  }
];

export const customInteriorMaterialStrip: CustomInteriorPanel[] = [
  {
    id: "material-copper",
    label: "Custom Blends",
    room: "Copper Flake Detail",
    imageSrc: "/media/kiwi/custom-interiors/custom-copper-flake-detail.jpg",
    alt: "Gloved hands adding copper decorative flake into a coating base blend"
  },
  {
    id: "material-craft",
    label: "Craft & Material",
    room: "Metallic Application",
    imageSrc: "/media/kiwi/custom-interiors/metallic-application-detail.jpg",
    alt: "Gold, charcoal, and cream metallic decorative coating being worked with a trowel"
  },
  {
    id: "material-colors",
    label: "Custom Color Lab",
    room: "Flake Color Selection",
    imageSrc: "/media/kiwi/custom-interiors/custom-flake-colors.jpg",
    alt: "Buckets of bright custom decorative flake colors staged for a custom blend"
  }
];

export type DesignGalleryItem = {
  id: string;
  label: string;
  imageSrc: string;
  alt: string;
  aspect: string;
  serviceHref: string;
  serviceLabel: string;
  size: "featured" | "wide" | "small";
};

export const designGallery: DesignGalleryItem[] = [
  {
    id: "custom-colors",
    label: "Custom Color & Blend Options",
    imageSrc: "/media/kiwi/finishes/kiwi-custom-colors-01.jpg",
    alt: "Hands holding a custom blend of colorful decorative floor flakes over a rainbow flake sample display",
    aspect: "4 / 5",
    serviceHref: "/services/flake-floor-systems",
    serviceLabel: "See Custom Flake Floor Systems",
    size: "featured"
  },
  {
    id: "flake-finished",
    label: "Flake Floor Systems",
    imageSrc: "/media/kiwi/finishes/kiwi-flake-finished-01.jpg",
    alt: "Finished decorative flake floor coating close-up with Kiwi Coatings branding",
    aspect: "3 / 2",
    serviceHref: "/services/flake-floor-systems",
    serviceLabel: "See Custom Flake Floor Systems",
    size: "wide"
  },
  {
    id: "metallic",
    label: "Metallic Epoxy",
    imageSrc: "/media/kiwi/finishes/kiwi-metallic-01.jpg",
    alt: "Metallic epoxy floor finish with dimensional gold and bronze movement",
    aspect: "4 / 5",
    serviceHref: "/services/metallic-epoxy-floors",
    serviceLabel: "Explore Metallic Epoxy Floors",
    size: "small"
  },
  {
    id: "quartz",
    label: "Quartz Coatings",
    imageSrc: "/media/kiwi/finishes/kiwi-quartz-01.jpg",
    alt: "Close-up of a durable gray and white quartz broadcast floor coating texture",
    aspect: "4 / 5",
    serviceHref: "/services/quartz-floor-coatings",
    serviceLabel: "See Quartz Floor Coatings",
    size: "small"
  },
  {
    id: "specialty-glow",
    label: "Specialty & Glow Accents",
    imageSrc: "/media/kiwi/finishes/kiwi-specialty-glow-01.jpg",
    alt: "Specialty accent flake floor shown under UV light with glow-in-the-dark particles",
    aspect: "3 / 2",
    serviceHref: "/services/specialty-floor-finishes",
    serviceLabel: "Explore Specialty Floor Finishes",
    size: "small"
  },
  {
    id: "stone-blend",
    label: "Stone-Style Blend",
    imageSrc: "/media/kiwi/finishes/kiwi-stone-blend-01.jpg",
    alt: "Marble-style decorative flake blend in warm stone tones",
    aspect: "4 / 5",
    serviceHref: "/services/flake-floor-systems",
    serviceLabel: "See Custom Flake Floor Systems",
    size: "small"
  },
  {
    id: "polyaspartic",
    label: "Polyaspartic Systems",
    imageSrc: "/media/kiwi/finishes/kiwi-polyaspartic-01.jpg",
    alt: "Finished polyaspartic floor coating texture in blue-gray tones",
    aspect: "3 / 2",
    serviceHref: "/services/polyaspartic-floor-coatings",
    serviceLabel: "Compare Polyaspartic Floor Coatings",
    size: "small"
  },
  {
    id: "custom-blend-tray",
    label: "Custom Blend Sampling",
    imageSrc: "/media/kiwi/finishes/kiwi-custom-blend-tray-01.jpg",
    alt: "Tray of custom decorative flake color samples staged on a finished floor",
    aspect: "3 / 2",
    serviceHref: "/services/epoxy-floor-coatings",
    serviceLabel: "Compare Epoxy Floor Coatings",
    size: "small"
  }
];

export const beforeAfterFeature = {
  imageSrc: "/media/kiwi/outdoor/kiwi-patio-before-after-01.jpg",
  alt: "Side-by-side comparison of a bare concrete patio being ground for coating next to the same patio finished with a Kiwi decorative flake system",
  beforeLabel: "BEFORE",
  afterLabel: "AFTER"
};

export type RealWorkPhoto = {
  id: string;
  imageSrc: string;
  alt: string;
  caption: string;
  aspect: string;
};

export const realWorkPhotos: RealWorkPhoto[] = [
  {
    id: "garage-01",
    imageSrc: "/media/kiwi/projects/kiwi-project-garage-01.jpg",
    alt: "Finished dark flake garage floor coating with crew finishing details",
    caption: "Finished Kiwi Coatings Garage Floor",
    aspect: "4 / 5"
  },
  {
    id: "patio-01",
    imageSrc: "/media/kiwi/projects/kiwi-project-patio-01.jpg",
    alt: "Finished light gray flake patio coating edge detail against a stucco exterior",
    caption: "Finished Decorative Patio Coating",
    aspect: "4 / 5"
  },
  {
    id: "garage-02",
    imageSrc: "/media/kiwi/projects/kiwi-project-garage-02.jpg",
    alt: "Two-tone gray flake garage floor coating corner detail",
    caption: "Completed Kiwi Coatings Project",
    aspect: "4 / 5"
  },
  {
    id: "garage-03",
    imageSrc: "/media/kiwi/projects/kiwi-project-garage-03.jpg",
    alt: "Two-tone flake garage floor coating in natural light",
    caption: "Real Kiwi Coatings Work",
    aspect: "3 / 4"
  }
];

export const founderMedia = {
  imageSrc: "/media/kiwi/founder/randy-founder-01.jpg",
  alt: "Randy, owner of Kiwi Coatings AZ, standing next to floor coating equipment"
};

export const fieldMedia = {
  truck: {
    imageSrc: "/media/kiwi/field/kiwi-truck-decal-01.jpg",
    alt: "Kiwi Coatings branded logo decal on a work truck door"
  },
  trailer: {
    imageSrc: "/media/kiwi/field/kiwi-trailer-01.jpg",
    alt: "Kiwi Coatings branded equipment trailer parked outdoors"
  },
  jobsiteSignage: {
    imageSrc: "/media/kiwi/field/kiwi-jobsite-signage-01.jpg",
    alt: "Kiwi Coatings yard sign staged on a finished flake floor at a job site"
  }
};

export const homeFaqs: HomeFaq[] = [
  {
    question: "Should I choose epoxy or polyaspartic for my floor?",
    answer:
      "It depends on the surface, exposure, use, and finish goals. Epoxy can be useful as a strong coating layer, while polyaspartic is often considered where UV stability and topcoat performance matter."
  },
  {
    question: "How does Arizona heat affect concrete coating decisions?",
    answer:
      "Heat, sunlight, dust, and outdoor exposure can influence the coating system, texture, and topcoat selection. Outdoor and sun-adjacent surfaces should be evaluated before a system is chosen."
  },
  {
    question: "Can cracks be addressed before coating?",
    answer:
      "Visible cracks, chips, and worn areas should be evaluated before coating. Repairs may be recommended where appropriate, but coatings do not turn damaged concrete into new structural concrete."
  },
  {
    question: "Why does garage floor preparation matter?",
    answer:
      "A coating system depends on the surface underneath it. Preparation helps create a better foundation for coating layers than applying a simple topical finish over unprepared concrete."
  },
  {
    question: "Can patios and pool decks be coated?",
    answer:
      "Often, yes. Outdoor concrete should be reviewed for sun exposure, water, drainage, texture needs, previous coatings, and maintenance expectations."
  },
  {
    question: "Are custom flake and decorative finishes available?",
    answer:
      "Yes. Kiwi Coatings AZ offers flake, quartz, metallic epoxy, glow, neon, glitter, and specialty decorative finish directions when they fit the surface and use."
  },
  {
    question: "How do coated floors need to be maintained?",
    answer:
      "Maintenance depends on the system, texture, and use of the space. In general, coated surfaces are planned to be easier to clean than porous bare concrete, but they still need routine care."
  },
  {
    question: "When can a coated floor return to normal use?",
    answer:
      "Return-to-use timing depends on the coating materials, weather, site conditions, and the surface being coated. Kiwi should confirm project-specific guidance before work begins."
  }
];

export const verifiedHomeReviews: HomeReview[] = [];
