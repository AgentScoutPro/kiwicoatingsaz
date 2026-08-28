import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/PageBlocks";
import { ProjectCard } from "@/components/ProjectBlocks";
import { getProject, getProjectCity, getProjectsByCity, getProjectServices, projects } from "@/lib/projects";
import { site } from "@/lib/site-data";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    title: project.title,
    description: project.summary ?? `View the ${project.title} Kiwi Coatings AZ project case study.`,
    path: `/projects/${project.slug}`,
    image: project.afterImage?.src ?? project.images?.[0]?.src
  });
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const city = getProjectCity(project);
  const services = getProjectServices(project);
  const relatedProjects = city ? getProjectsByCity(city.slug).filter((item) => item.slug !== project.slug).slice(0, 3) : [];
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` }
  ];

  return (
    <>
      <JsonLd data={createBreadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          headline: project.title,
          description: project.summary,
          image: project.afterImage?.src ?? project.images?.map((image) => image.src),
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.url
          },
          dateCreated: project.completedAt,
          about: services.map((service) => service?.name).filter(Boolean),
          contentLocation: city
            ? {
                "@type": "City",
                name: `${city.name}, AZ`
              }
            : undefined
        }}
      />
      <section className="hero">
        <div className="inner">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{city ? `${city.name}, AZ` : "Project"}</p>
          <h1>{project.title}</h1>
          {project.summary ? <p className="lead">{project.summary}</p> : null}
          <div className="actions">
            {services.map((service) =>
              service ? (
                <a className="button secondary" href={`/services/${service.slug}`} key={service.slug}>
                  View {service.name}
                </a>
              ) : null
            )}
            {city ? (
              <a className="button secondary" href={`/locations/${city.slug}`}>
                Floor Coatings in {city.name}
              </a>
            ) : null}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner grid two">
          {project.challenge ? (
            <article>
              <p className="eyebrow">Challenge</p>
              <h2>What the concrete needed</h2>
              <p>{project.challenge}</p>
            </article>
          ) : null}
          {project.preparation ? (
            <article>
              <p className="eyebrow">Preparation</p>
              <h2>How the surface was prepared</h2>
              <p>{project.preparation}</p>
            </article>
          ) : null}
          {project.solution ? (
            <article>
              <p className="eyebrow">Solution</p>
              <h2>The coating system</h2>
              <p>{project.solution}</p>
            </article>
          ) : null}
          {project.result ? (
            <article>
              <p className="eyebrow">Result</p>
              <h2>Finished project outcome</h2>
              <p>{project.result}</p>
            </article>
          ) : null}
        </div>
      </section>
      {project.images?.length ? (
        <section className="section">
          <div className="inner grid three">
            {project.images.map((image) => (
              <figure className="card media-card" key={image.src}>
                <img alt={image.alt} src={image.src} loading="lazy" />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}
      {project.testimonial ? (
        <section className="section">
          <div className="inner">
            <blockquote className="card">
              <p>{project.testimonial}</p>
              {project.testimonialAuthor ? <footer>{project.testimonialAuthor}</footer> : null}
            </blockquote>
          </div>
        </section>
      ) : null}
      {relatedProjects.length > 0 ? (
        <section className="section">
          <div className="inner">
            <p className="eyebrow">Related Projects</p>
            <h2>More {city?.name} project examples</h2>
            <div className="grid three">
              {relatedProjects.map((related) => (
                <ProjectCard key={related.slug} project={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
