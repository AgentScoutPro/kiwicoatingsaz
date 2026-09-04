import type { Metadata } from "next";
import Link from "next/link";
import { designGallery } from "@/lib/home-page-content";
import { selectedWork } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Kiwi Coatings Projects and Selected Work",
  description:
    "View selected Kiwi Coatings garage floor, patio, and outdoor concrete coating work, with approved project images and finish direction resources.",
  path: "/projects",
  image: "/media/kiwi/projects/kiwi-project-garage-01.jpg"
});

export default function ProjectsPage() {
  const featuredFinishDirections = designGallery.slice(0, 4);

  return (
    <>
      <section className="projects-hero">
        <div className="inner projects-hero-inner">
          <p className="eyebrow">Our Work</p>
          <h1>Built to Be Used. Finished to Be Noticed.</h1>
          <p className="lead">
            A selection of garage and outdoor floor work from Kiwi Coatings, showcasing the preparation, finish and attention to detail behind the work.
          </p>
          <div className="actions">
            <Link className="button" href="/get-a-quote">Request a Quote</Link>
            <a className="button secondary" href={`tel:${site.phoneE164}`}>Call Kiwi</a>
          </div>
        </div>
      </section>

      <section className="section selected-work-section">
        <div className="inner selected-work-stack">
          {selectedWork.map((work) => (
            <article className={`selected-work selected-work--${work.layout}`} key={work.id}>
              <div className="selected-work-copy">
                <p className="eyebrow">{work.eyebrow}</p>
                <h2>{work.title}</h2>
                <p>{work.summary}</p>
                <Link className="text-link" href={work.href}>
                  {work.ctaLabel}
                </Link>
              </div>
              <div className="selected-work-media" aria-label={work.title}>
                {work.images.map((image) => (
                  <figure className={`selected-work-figure selected-work-figure--${image.role ?? "supporting"}`} key={image.src}>
                    <img alt={image.alt} src={image.src} loading={image.role === "lead" ? "eager" : "lazy"} />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section finish-direction-section">
        <div className="inner">
          <div className="section-kicker-row">
            <div>
              <p className="eyebrow">More Finish Directions</p>
              <h2>Inspiration for the finish conversation.</h2>
            </div>
            <p className="section-note">
              These examples show available finish directions and material looks. They are separate from the verified project work shown above.
            </p>
          </div>
          <div className="finish-direction-grid">
            {featuredFinishDirections.map((item) => (
              <Link className="finish-direction-link" href={item.serviceHref} key={item.id}>
                <img alt={item.alt} src={item.imageSrc} loading="lazy" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-final-cta">
        <div className="inner projects-final-cta-inner">
          <div>
            <p className="eyebrow">Have a Space in Mind?</p>
            <h2>Start with the surface, the use, and the finish you want to live with.</h2>
          </div>
          <div className="actions">
            <Link className="button" href="/get-a-quote">Request a Quote</Link>
            <a className="button secondary" href={`tel:${site.phoneE164}`}>Call Kiwi</a>
          </div>
        </div>
      </section>
    </>
  );
}
