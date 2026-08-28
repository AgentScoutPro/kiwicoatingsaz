export type StoryMediaConfig = {
  mediaId: string;
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  alt: string;
  position?: string;
  priority?: boolean;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export type HomeProject = {
  title: string;
  image?: string;
  beforeImage?: string;
  afterImage?: string;
  city?: string;
  application?: string;
  finish?: string;
  summary?: string;
  href?: string;
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
    alt: "Finished Kiwi Coatings concrete coating surface",
    priority: true
  },
  environment: {
    mediaId: "arizona-environment",
    alt: "Arizona concrete surface exposed to heat, dust, and traffic"
  },
  system: {
    mediaId: "coating-system",
    alt: "Layered concrete coating system"
  },
  garage: {
    mediaId: "garage-transformation",
    alt: "Finished garage floor coating"
  },
  outdoor: {
    mediaId: "outdoor-living",
    alt: "Finished patio and pool deck coating"
  },
  finishes: {
    mediaId: "finish-gallery",
    alt: "Decorative coating finish options"
  },
  commercial: {
    mediaId: "commercial-flooring",
    alt: "Commercial concrete floor coating"
  },
  process: {
    mediaId: "installation-process",
    alt: "Concrete coating preparation and finish process"
  },
  projects: {
    mediaId: "kiwi-projects",
    alt: "Verified Kiwi Coatings project media"
  },
  local: {
    mediaId: "local-arizona",
    alt: "Arizona service area map and local markets"
  },
  finalCta: {
    mediaId: "final-cta",
    alt: "Finished concrete coating ready for use"
  }
} satisfies Record<string, StoryMediaConfig>;

export const processSteps = [
  {
    title: "Evaluate",
    text: "Review the concrete, use of the space, exposure, and desired finish."
  },
  {
    title: "Prepare",
    text: "Prepare the surface so the coating system has a suitable foundation."
  },
  {
    title: "Repair Where Needed",
    text: "Address cracks, chips, worn areas, or old coatings where appropriate."
  },
  {
    title: "Coat",
    text: "Install the selected base and coating layers for the project."
  },
  {
    title: "Broadcast / Finish",
    text: "Add flake, quartz, metallic movement, or other finish direction when selected."
  },
  {
    title: "Protect",
    text: "Complete the system with a protective finish selected around use and exposure."
  }
];

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

export const verifiedHomeProjects: HomeProject[] = [];

export const verifiedHomeReviews: HomeReview[] = [];
