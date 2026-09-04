import { getCity, getService } from "@/lib/site-data";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  citySlug?: string;
  serviceSlugs?: string[];
  summary?: string;
  challenge?: string;
  preparation?: string;
  solution?: string;
  result?: string;
  finish?: string;
  propertyType?: string;
  images?: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  featured?: boolean;
  completedAt?: string;
  testimonial?: string;
  testimonialAuthor?: string;
};

export const projects: Project[] = [];

export type SelectedWorkImage = ProjectImage & {
  role?: "lead" | "supporting";
};

export type SelectedWorkGallery = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  ctaLabel: string;
  layout: "garage" | "wide";
  images: SelectedWorkImage[];
};

export const selectedWork: SelectedWorkGallery[] = [
  {
    id: "garage-floor-work",
    eyebrow: "Garage Floor Work",
    title: "Garage Floor Coatings",
    summary:
      "Garage coating systems can give daily-use concrete a more finished surface with decorative texture, practical cleanability, and durability planned around how the space is used.",
    href: "/services/garage-floor-coatings",
    ctaLabel: "Explore Garage Floor Coatings",
    layout: "garage",
    images: [
      {
        src: "/media/kiwi/projects/kiwi-project-garage-01.jpg",
        alt: "Finished Kiwi Coatings decorative garage floor coating",
        role: "lead"
      },
      {
        src: "/media/kiwi/projects/kiwi-project-garage-02.jpg",
        alt: "Kiwi Coatings garage floor coating detail with decorative broadcast finish",
        role: "supporting"
      },
      {
        src: "/media/kiwi/projects/kiwi-project-garage-03.jpg",
        alt: "Finished garage concrete coating by Kiwi Coatings",
        role: "supporting"
      }
    ]
  },
  {
    id: "patio-outdoor-work",
    eyebrow: "Patio & Outdoor Work",
    title: "Patio & Outdoor Concrete Coatings",
    summary:
      "Outdoor concrete in Arizona should be planned around sun exposure, surface texture, water use, cleaning expectations, and a finish direction that works with the surrounding space.",
    href: "/services/patio-and-pool-deck-coatings",
    ctaLabel: "Explore Patio & Pool Deck Coatings",
    layout: "wide",
    images: [
      {
        src: "/media/kiwi/projects/kiwi-project-patio-01.jpg",
        alt: "Finished Kiwi Coatings patio and outdoor concrete coating",
        role: "lead"
      }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCity(citySlug: string) {
  return projects.filter((project) => project.citySlug === citySlug);
}

export function getProjectsByService(serviceSlug: string) {
  return projects.filter((project) => project.serviceSlugs?.includes(serviceSlug));
}

export function getProjectsByCityAndService(citySlug: string, serviceSlug: string) {
  return projects.filter(
    (project) => project.citySlug === citySlug && project.serviceSlugs?.includes(serviceSlug)
  );
}

export function getProjectCity(project: Project) {
  return project.citySlug ? getCity(project.citySlug) : undefined;
}

export function getProjectServices(project: Project) {
  return project.serviceSlugs?.map((slug) => getService(slug)).filter(Boolean) ?? [];
}
