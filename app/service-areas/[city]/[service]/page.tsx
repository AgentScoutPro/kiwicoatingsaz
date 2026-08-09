import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { cities, getCity, getService, services, site } from "@/lib/site-data";

type Params = {
  params: Promise<{ city: string; service: string }>;
};

export function generateStaticParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({
      city: city.slug,
      service: service.slug
    }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);

  if (!city || !service) {
    return {};
  }

  return {
    title: `${service.name} in ${city.name}, AZ`,
    description: `Kiwi Coatings AZ provides ${service.name.toLowerCase()} in ${city.name}, AZ. ${service.short}`,
    alternates: {
      canonical: `/service-areas/${city.slug}/${service.slug}`
    }
  };
}

export default async function CityServicePage({ params }: Params) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);

  if (!city || !service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.name} in ${city.name}, AZ`,
          serviceType: service.name,
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: site.name,
            telephone: site.phone,
            email: site.email
          },
          image: service.image,
          areaServed: {
            "@type": "City",
            name: `${city.name}, AZ`
          },
          url: `${site.url}/service-areas/${city.slug}/${service.slug}`
        }}
      />
      <section className="hero">
        <div className="inner">
          <p className="breadcrumb">
            Service Areas / {city.name} / {service.name}
          </p>
          <p className="eyebrow">Local service page</p>
          <h1>{service.name} in {city.name}, AZ</h1>
          <p className="lead">
            Kiwi Coatings AZ provides {service.name.toLowerCase()} for {city.focus} in {city.name}. This page is structured to target local searches while giving visitors a clear path to call or request a quote.
          </p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href="/contact">Request a Quote</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner grid two">
          <div>
            <h2>Why {city.name} property owners choose this service</h2>
            <p>{service.intro}</p>
            <p>
              The page can later be expanded with project photos, city-specific proof, nearby neighborhood references, and FAQs after Kiwi provides more field content.
            </p>
          </div>
          <div className="card">
            <h3>Service Highlights</h3>
            <ul className="list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
