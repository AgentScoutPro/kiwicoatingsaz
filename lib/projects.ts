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
