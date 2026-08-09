import type { Metadata } from "next";
import { CityGrid } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Arizona Service Areas",
  description: "Find Kiwi Coatings AZ floor coating service areas across Coolidge, Florence, Casa Grande, San Tan Valley, Queen Creek, Phoenix, Mesa, Gilbert, Chandler, Tempe, Scottsdale, and nearby cities."
};

export default function LocationsPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Service Areas</p>
          <h1>Local floor coating pages for central Arizona.</h1>
          <p className="lead">
            Each city page acts as a local SEO hub and links to the city-specific versions of Kiwi Coatings AZ services.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <CityGrid />
        </div>
      </section>
    </>
  );
}
