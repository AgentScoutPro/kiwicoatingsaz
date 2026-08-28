import type { Metadata } from "next";
import { CityGrid } from "@/components/PageBlocks";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Arizona Service Areas",
  description: "Find Kiwi Coatings AZ floor coating service areas across Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Maricopa, Casa Grande, Apache Junction, Gold Canyon, Florence, Coolidge, and Phoenix.",
  path: "/locations"
});

export default function LocationsPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Service Areas</p>
          <h1>Floor coating service areas across central Arizona.</h1>
          <p className="lead">
            Kiwi Coatings AZ serves verified markets across the East Valley, Pinal County, and the greater Phoenix area.
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
