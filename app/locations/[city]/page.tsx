import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CityServiceLinks } from "@/components/PageBlocks";
import { getCity, getService, site } from "@/lib/site-data";
import { getCityPageContent } from "@/lib/city-page-content";
import { getVerifiedCities } from "@/lib/seo-map";
import { createBreadcrumbSchema, createCityServiceAreaSchema, createFaqSchema, createPageMetadata } from "@/lib/seo";

type Params = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return getVerifiedCities().map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  const content = getCityPageContent(citySlug);

  if (!city) {
    return {};
  }

  return createPageMetadata({
    title: content?.title ?? `Floor Coatings in ${city.name}, AZ`,
    description: content?.metaDescription ?? `Kiwi Coatings AZ installs garage, epoxy, polyaspartic, flake, quartz, patio, pool deck, and commercial floor coatings in ${city.name}, AZ.`,
    path: `/locations/${city.slug}`,
    noindex: !city.verified
  });
}

export default async function CityPage({ params }: Params) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  const content = getCityPageContent(citySlug);

  if (!city || !content) {
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
      <JsonLd data={createCityServiceAreaSchema(city, `/locations/${city.slug}`)} />
      <JsonLd data={createFaqSchema(content.faqs)} />
      <section className="hero">
        <div className="inner">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{city.county}</p>
          <h1>Floor Coatings in {city.name}, AZ</h1>
          <p className="lead">{content.intro}</p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href="/contact">Request a Quote</a>
          </div>
        </div>
      </section>
      <section className="section local-property-context">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">{city.region}</p>
            <h2>Local property and use context</h2>
          </div>
          <div>
            {content.localContext.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section featured-city-services">
        <div className="inner">
          <p className="eyebrow">Featured Services</p>
          <h2>Coating systems to consider in {city.name}</h2>
          <div className="grid three">
            {content.featuredServices.map((serviceSlug) => {
              const service = getService(serviceSlug);

              if (!service) {
                return null;
              }

              return (
                <a className="card" href={`/services/${service.slug}`} key={service.slug}>
                  <h3>{service.name}</h3>
                  <p>{service.shortDescription}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section arizona-concrete-conditions">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Concrete Conditions</p>
            <h2>Arizona surfaces need practical system choices</h2>
            <p>
              Coating recommendations should account for how the concrete is used, what it is exposed to, and how the owner wants to maintain it.
            </p>
          </div>
          <div className="card">
            <h3>Relevant conditions in {city.name}</h3>
            <ul className="list">
              {content.concreteConditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section why-kiwi-local">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Why Kiwi</p>
            <h2>Licensed, bonded, and system-focused</h2>
          </div>
          <div className="card">
            <ul className="list">
              {content.whyKiwi.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <p className="eyebrow">Local Service Links</p>
          <h2>{city.name} service pages</h2>
          <CityServiceLinks citySlug={city.slug} />
        </div>
      </section>
      <section className="section local-proof-slots">
        <div className="inner grid two">
          <article className="card">
            <p className="eyebrow">Project Proof</p>
            <h2>Related {city.name} projects</h2>
            <p>{content.projectProof}</p>
          </article>
          <article className="card">
            <p className="eyebrow">Review Proof</p>
            <h2>Customer feedback</h2>
            <p>{content.reviewProof}</p>
            <p>
              <a href={site.reviewUrl} target="_blank" rel="noreferrer">View or leave a Google review</a>
            </p>
          </article>
        </div>
      </section>
      <section className="section nearby-service-areas">
        <div className="inner">
          <p className="eyebrow">Nearby Service Areas</p>
          <h2>Other verified markets near {city.name}</h2>
          <div className="service-links">
            {content.nearbyCities.map((nearbySlug) => {
              const nearbyCity = getCity(nearbySlug);

              if (!nearbyCity?.verified) {
                return null;
              }

              return (
                <a href={`/locations/${nearbyCity.slug}`} key={nearbyCity.slug}>
                  Floor coatings in {nearbyCity.name}, AZ
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section city-faq">
        <div className="inner">
          <p className="eyebrow">FAQ</p>
          <h2>Questions about floor coatings in {city.name}</h2>
          <div className="grid two">
            {content.faqs.map((faq) => (
              <article className="card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <h2>Request a {city.name} floor coating quote</h2>
          <p className="lead">
            Share the surface type, current concrete condition, finish direction, and how the space will be used. Kiwi Coatings AZ can help compare coating options for the project.
          </p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href="/contact">Request a Quote</a>
          </div>
        </div>
      </section>
    </>
  );
}
