import type { Metadata } from "next";
import { ServiceGrid } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Floor Coating Services",
  description: "Explore Kiwi Coatings AZ services including garage floor coatings, epoxy, polyaspartic, flake, quartz, patio, pool deck, and commercial floor coatings."
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Services</p>
          <h1>Floor coating services for Arizona homes and businesses.</h1>
          <p className="lead">
            A technical service hub for every core coating system Kiwi Coatings AZ offers, with city-level pages connected for local search coverage.
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
