import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCityLinks } from "@/components/PageBlocks";
import { getService, services, site } from "@/lib/site-data";

type Params = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle,
    description: `${service.shortDescription} Request a quote from Kiwi Coatings AZ for ${service.name.toLowerCase()} across central Arizona.`,
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: Params) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: site.name,
            telephone: site.phone
          },
          image: service.image,
          areaServed: "Central Arizona",
          url: `${site.url}/services/${service.slug}`
        }}
      />
      <section className="hero">
        <div className="inner">
          <p className="breadcrumb">Services / {service.name}</p>
          <p className="eyebrow">Floor coating service</p>
          <h1>{service.name} in Arizona</h1>
          <p className="lead">{service.intro}</p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href="/contact">Request a Quote</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner grid two">
          <div>
            <h2>Built around the way the surface is used</h2>
            <p>
              Kiwi Coatings AZ helps property owners compare coating systems by durability, appearance, surface exposure, and maintenance needs before recommending a finish.
            </p>
          </div>
          <div className="card">
            <h3>Key Benefits</h3>
            <ul className="list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <h2>{service.name} by City</h2>
          <ServiceCityLinks serviceSlug={service.slug} />
        </div>
      </section>
    </>
  );
}
