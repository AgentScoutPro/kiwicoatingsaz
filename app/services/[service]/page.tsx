import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, ServiceCityLinks } from "@/components/PageBlocks";
import { getService, services, site } from "@/lib/site-data";
import { createBreadcrumbSchema, createPageMetadata, createServiceSchema } from "@/lib/seo";

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

  return createPageMetadata({
    title: service.seoTitle,
    description: `${service.shortDescription} Request a quote from Kiwi Coatings AZ for ${service.name.toLowerCase()} across central Arizona.`,
    path: `/services/${service.slug}`,
    image: service.image
  });
}

export default async function ServicePage({ params }: Params) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` }
  ];

  return (
    <>
      <JsonLd
        data={createServiceSchema(service, `/services/${service.slug}`)}
      />
      <JsonLd
        data={createBreadcrumbSchema(breadcrumbs)}
      />
      <section className="hero">
        <div className="inner">
          <Breadcrumbs items={breadcrumbs} />
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
