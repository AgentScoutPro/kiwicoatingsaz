import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProjects } from "@/components/ProjectBlocks";
import { projects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kiwi Coatings Projects",
  description:
    "View verified Kiwi Coatings AZ floor coating projects and case studies as project photos and details are added.",
  path: "/projects",
  noindex: projects.length === 0
});

export default function ProjectsPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Projects</p>
          <h1>Kiwi Coatings AZ Projects</h1>
          <p className="lead">
            Verified project photos and case studies will be organized here by city, service, finish, and application as they are approved for the site.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">Request a Quote</Link>
            <Link className="button secondary" href="/services">Explore Services</Link>
          </div>
        </div>
      </section>
      {projects.length > 0 ? (
        <section className="section">
          <div className="inner">
            <FeaturedProjects projects={projects} />
          </div>
        </section>
      ) : null}
    </>
  );
}
