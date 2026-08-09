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
          logo: site.logo,
          image: site.heroImage,
          sameAs: [site.socials.facebook, site.socials.instagram, site.bbbUrl],
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
          <h1>Kiwi Coatings Flooring</h1>
          <p className="lead">
            {site.tagline} Kiwi Coatings AZ installs epoxy, polyaspartic, quartz, flake, metallic, and specialty coating systems for homeowners and businesses across the Coolidge area and greater central Arizona.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">Request a Quote</Link>
            <Link className="button secondary" href="/services">View Services</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Unmatched Selection</p>
            <h2>{site.secondaryTagline}</h2>
          </div>
          <div>
            <h3>Transforming Spaces with Kiwi Coatings</h3>
            <p>
              At Kiwi Coatings, we specialize in transforming ordinary floors into durable, beautiful surfaces that stand up to life's toughest challenges. From epoxy and polyaspartic coatings to quartz, hybrid, and flake blends, we offer solutions that protect, enhance, and elevate every space, whether it's your garage, patio, or commercial property.
            </p>
            <p>
              We combine cutting-edge materials with hands-on expertise to deliver results that last. Our wide variety of options, including glow-in-the-dark, neon, glitter, and customizable flake patterns, allows you to create a floor that's as functional as it is stunning.
            </p>
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
      <section className="section">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Follow Us {site.socialHandle}</p>
            <h2>Connect with Kiwi Coatings AZ.</h2>
            <p className="lead">
              Keep the current social and review signals connected while the expanded local SEO site is built out.
            </p>
          </div>
          <div className="card">
            <p><a href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook</a></p>
            <p><a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
            <p><a href={site.reviewUrl} target="_blank" rel="noreferrer">Write a Review on Google</a></p>
            <p><a href={site.bbbUrl} target="_blank" rel="noreferrer">BBB profile</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
