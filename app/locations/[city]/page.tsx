import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CityServiceLinks } from "@/components/PageBlocks";
import { getCity, site } from "@/lib/site-data";
import { getVerifiedCities } from "@/lib/seo-map";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

type Params = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return getVerifiedCities().map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    return {};
  }

  return createPageMetadata({
    title: `Floor Coatings in ${city.name}, AZ`,
    description: `Kiwi Coatings AZ installs garage, epoxy, polyaspartic, flake, quartz, patio, pool deck, and commercial floor coatings in ${city.name}, AZ.`,
    path: `/locations/${city.slug}`,
    noindex: !city.verified
  });
}

export default async function CityPage({ params }: Params) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/locations" },
    { name: city.name, path: `/locations/${city.slug}` }
  ];

  return (
    <>
      <JsonLd data={createBreadcrumbSchema(breadcrumbs)} />
      <section className="hero">
        <div className="inner">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{city.county}</p>
          <h1>Floor Coatings in {city.name}, AZ</h1>
          <p className="lead">
            Kiwi Coatings AZ serves {city.name} with coating systems for {city.localFocus}, including epoxy, polyaspartic, flake, quartz, metallic, patio, and commercial floor solutions.
          </p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href="/contact">Request a Quote</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <h2>{city.name} Services</h2>
          <CityServiceLinks citySlug={city.slug} />
        </div>
      </section>
    </>
  );
}
