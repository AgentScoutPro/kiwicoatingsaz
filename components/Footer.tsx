import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site-data";
import { getPrimaryVerifiedCities } from "@/lib/seo-map";

export function Footer() {
  const featuredServices = services.filter((service) => service.featured);
  const primaryCities = getPrimaryVerifiedCities();

  return (
    <footer className="footer">
      <div className="inner footer-grid">
        <div className="footer-brand">
          <Image
            src={site.logoPath}
            alt="Kiwi Coatings AZ"
            width={120}
            height={120}
            className="footer-logo"
          />
          <p>{site.accreditation}</p>
          <div className="footer-trust-row">
            <a href={site.bbbUrl} target="_blank" rel="noreferrer" aria-label="BBB Accredited Business profile">
              <Image
                src={site.bbbLogoPath}
                alt="BBB Accredited Business"
                width={100}
                height={51}
                className="footer-bbb"
              />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <div className="service-links">
            {featuredServices.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                {service.name}
              </Link>
            ))}
          </div>
          <Link href="/services">Compare All Services</Link>
        </div>

        <div className="footer-column">
          <h3>Service Areas</h3>
          <div className="service-links">
            {primaryCities.map((city) => (
              <Link href={`/locations/${city.slug}`} key={city.slug}>
                {city.name}, AZ
              </Link>
            ))}
          </div>
          <Link href="/locations">View All Service Areas</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <Link href="/contact">Request a quote</Link>
          </p>
          <p>
            <Link href="/about">About Kiwi Coatings AZ</Link>
          </p>
          <p>
            <Link href="/founders-statement">A Message From Our Founder</Link>
          </p>
          <p className="footer-socials">
            <a href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
            {" / "}
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
            {" / "}
            <a href={site.reviewUrl} target="_blank" rel="noreferrer">Google Reviews</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
