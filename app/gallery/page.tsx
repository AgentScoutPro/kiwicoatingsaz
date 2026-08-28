import type { Metadata } from "next";
import { services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Kiwi Coatings AZ project image references for garage, patio, pool deck, flake, epoxy, polyaspartic, and specialty floor coating work.",
  robots: {
    index: false,
    follow: true
  }
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
          <h1>Kiwi Coatings AZ project gallery.</h1>
          <p className="lead">
            Browse coating media from garage, patio, pool deck, flake, epoxy, polyaspartic, and specialty floor finish work.
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
