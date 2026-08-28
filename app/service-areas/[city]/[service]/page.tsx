import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/PageBlocks";
import { getCity, getService, site } from "@/lib/site-data";
import { getGeneratedLocalSeoPages, getLocalSeoPage } from "@/lib/seo-map";
import { createBreadcrumbSchema, createPageMetadata, createServiceSchema } from "@/lib/seo";

type Params = {
  params: Promise<{ city: string; service: string }>;
};

export function generateStaticParams() {
  return getGeneratedLocalSeoPages().map((page) => ({
    city: page.city,
    service: page.service
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  const seoPage = getLocalSeoPage(citySlug, serviceSlug);

  if (!city || !service) {
    return {};
  }

  return createPageMetadata({
    title: `${service.name} in ${city.name}, AZ`,
    description: `Kiwi Coatings AZ provides ${service.name.toLowerCase()} in ${city.name}, AZ. ${service.shortDescription}`,
    path: `/service-areas/${city.slug}/${service.slug}`,
    image: service.image,
    noindex: !seoPage?.indexable
  });
}

export default async function CityServicePage({ params }: Params) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  const seoPage = getLocalSeoPage(citySlug, serviceSlug);

  if (!city || !service || seoPage?.tier === "tier-3") {
    notFound();
  }

  const path = `/service-areas/${city.slug}/${service.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/locations" },
    { name: city.name, path: `/locations/${city.slug}` },
    { name: service.name, path }
  ];

  return (
    <>
      <JsonLd
        data={createServiceSchema(service, path, city)}
      />
      <JsonLd
        data={createBreadcrumbSchema(breadcrumbs)}
      />
      <section className="hero">
        <div className="inner">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{city.region}</p>
          <h1>{service.name} in {city.name}, AZ</h1>
          <p className="lead">
            Kiwi Coatings AZ provides {service.name.toLowerCase()} for {city.localFocus} in {city.name}, with coating options selected for Arizona heat, dust, traffic, and the way the surface will be used.
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
              Common applications include {service.applications.join(", ").toLowerCase()}. Kiwi can recommend a coating system based on the surface, exposure, appearance goals, and maintenance needs.
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
