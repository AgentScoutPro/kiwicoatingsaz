import Link from "next/link";
import { getCity, getService } from "@/lib/site-data";
import type { Project } from "@/lib/projects";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="grid three">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const city = project.citySlug ? getCity(project.citySlug) : undefined;
  const service = project.serviceSlugs?.[0] ? getService(project.serviceSlugs[0]) : undefined;

  return (
    <article className="card">
      <h3>{project.title}</h3>
      {project.summary ? <p>{project.summary}</p> : null}
      <dl className="project-meta">
        {city ? (
          <>
            <dt>City</dt>
            <dd>{city.name}, AZ</dd>
          </>
        ) : null}
        {service ? (
          <>
            <dt>Service</dt>
            <dd>{service.name}</dd>
          </>
        ) : null}
        {project.finish ? (
          <>
            <dt>Finish</dt>
            <dd>{project.finish}</dd>
          </>
        ) : null}
      </dl>
      <Link href={`/projects/${project.slug}`}>View Project Case Study</Link>
    </article>
  );
}

export function ProjectProofSlot({
  title,
  projects
}: {
  title: string;
  projects: Project[];
}) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="section project-proof">
      <div className="inner">
        <p className="eyebrow">Project Proof</p>
        <h2>{title}</h2>
        <FeaturedProjects projects={projects} />
      </div>
    </section>
  );
}
