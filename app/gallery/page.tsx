import type { Metadata } from "next";
import { services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Kiwi Coatings AZ project image references for garage, patio, pool deck, flake, epoxy, polyaspartic, and specialty floor coating work."
};

export default function GalleryPage() {
  const images = [
    site.heroImage,
    site.introImage,
    ...services.map((service) => service.image).filter(Boolean)
  ];

  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Gallery</p>
          <h1>Kiwi Coatings AZ project media references.</h1>
          <p className="lead">
            This page preserves the current site's gallery/navigation path and live media references before the full creative gallery layout is built.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="inner grid three">
          {[...new Set(images)].map((image) => (
            <a className="card media-card" href={image} key={image} target="_blank" rel="noreferrer">
              <span>{image?.split("/").pop()?.split("?")[0]}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
