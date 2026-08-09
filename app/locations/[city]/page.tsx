import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityServiceLinks } from "@/components/PageBlocks";
import { cities, getCity, site } from "@/lib/site-data";

type Params = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    return {};
  }

  return {
    title: `Floor Coatings in ${city.name}, AZ`,
    description: `Kiwi Coatings AZ installs garage, epoxy, polyaspartic, flake, quartz, patio, pool deck, and commercial floor coatings in ${city.name}, AZ.`,
    alternates: {
      canonical: `/locations/${city.slug}`
    }
  };
}

export default async function CityPage({ params }: Params) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="breadcrumb">Service Areas / {city.name}</p>
          <p className="eyebrow">{city.county}</p>
          <h1>Floor Coatings in {city.name}, AZ</h1>
          <p className="lead">
            Kiwi Coatings AZ serves {city.name} with coating systems for {city.focus}, including epoxy, polyaspartic, flake, quartz, metallic, patio, and commercial floor solutions.
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
