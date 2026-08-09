import Link from "next/link";
import { CityGrid, ServiceGrid } from "@/components/PageBlocks";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: site.name,
          url: site.url,
          telephone: site.phone,
          email: site.email,
          areaServed: "Central Arizona",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coolidge",
            addressRegion: "AZ",
            addressCountry: "US"
          }
        }}
      />
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Arizona floor coating contractor</p>
          <h1>Garage, patio, and commercial floor coatings built for Arizona.</h1>
          <p className="lead">
            Kiwi Coatings AZ installs epoxy, polyaspartic, quartz, flake, metallic, and specialty coating systems for homeowners and businesses across the Coolidge area and greater central Arizona.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">Request a Quote</Link>
            <Link className="button secondary" href="/services">View Services</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <h2>Core Services</h2>
          <ServiceGrid />
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <h2>Service Areas</h2>
          <CityGrid />
        </div>
      </section>
    </>
  );
}
