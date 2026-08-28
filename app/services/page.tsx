import type { Metadata } from "next";
import { ServiceGrid } from "@/components/PageBlocks";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Floor Coating Services",
  description: "Explore Kiwi Coatings AZ services including garage floor coatings, epoxy, polyaspartic, flake, quartz, patio, pool deck, and commercial floor coatings.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Services</p>
          <h1>Floor coating services for Arizona homes and businesses.</h1>
          <p className="lead">
            Explore coating systems for garages, patios, pool decks, commercial spaces, and decorative concrete surfaces across central Arizona.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <ServiceGrid />
        </div>
      </section>
    </>
  );
}
