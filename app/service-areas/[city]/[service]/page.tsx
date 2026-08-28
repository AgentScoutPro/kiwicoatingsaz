import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/PageBlocks";
import { getCity, getService, site } from "@/lib/site-data";
import { getLocalServicePageContent } from "@/lib/local-service-page-content";
import { getGeneratedLocalSeoPages, getLocalSeoPage } from "@/lib/seo-map";
import { createBreadcrumbSchema, createFaqSchema, createPageMetadata, createServiceSchema } from "@/lib/seo";

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
  const content = getLocalServicePageContent(citySlug, serviceSlug);

  if (!city || !service) {
    return {};
  }

  return createPageMetadata({
    title: content?.title ?? `${service.name} in ${city.name}, AZ`,
    description: content?.metaDescription ?? `Kiwi Coatings AZ provides ${service.name.toLowerCase()} in ${city.name}, AZ. ${service.shortDescription}`,
    path: `/service-areas/${city.slug}/${service.slug}`,
    image: service.image,
    noindex: !seoPage?.indexable || !content
  });
}

export default async function CityServicePage({ params }: Params) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  const seoPage = getLocalSeoPage(citySlug, serviceSlug);
  const content = getLocalServicePageContent(citySlug, serviceSlug);

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
      {content ? (
        <JsonLd
          data={createFaqSchema(content.faqs)}
        />
      ) : null}
      <section className="hero">
        <div className="inner">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{city.region}</p>
          <h1>{content?.h1 ?? `${service.name} in ${city.name}, AZ`}</h1>
          <p className="lead">
            {content?.intro ?? `Kiwi Coatings AZ provides ${service.name.toLowerCase()} for ${city.localFocus} in ${city.name}, with coating options selected for Arizona heat, dust, traffic, and the way the surface will be used.`}
          </p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href="/contact">Request a Quote</a>
          </div>
        </div>
      </section>
      {content ? (
        <LocalServiceSections citySlug={city.slug} serviceSlug={service.slug} content={content} />
      ) : (
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
      )}
    </>
  );
}

function LocalServiceSections({
  citySlug,
  serviceSlug,
  content
}: {
  citySlug: string;
  serviceSlug: string;
  content: NonNullable<ReturnType<typeof getLocalServicePageContent>>;
}) {
  const city = getCity(citySlug);
  const service = getService(serviceSlug);

  if (!city || !service) {
    return null;
  }

  const relatedServices = content.relatedServices
    .map((slug) => getService(slug))
    .filter((related): related is NonNullable<ReturnType<typeof getService>> => Boolean(related));
  const nearbyCities = content.nearbyCities
    .map((slug) => getCity(slug))
    .filter((nearby): nearby is NonNullable<ReturnType<typeof getCity>> => Boolean(nearby?.verified));

  return (
    <>
      <section className="section local-service-use">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Local Use</p>
            <h2>Why {service.shortName.toLowerCase()} make sense in {city.name}</h2>
            {content.localUse.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="card">
            <h3>Arizona considerations</h3>
            <ul className="list">
              {content.conditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section local-system-choices">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">System Choices</p>
            <h2>Coating options to compare</h2>
            <ul className="list">
              {content.systemChoices.map((choice) => (
                <li key={choice}>{choice}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Finish Choices</p>
            <h2>Finish direction for the space</h2>
            <ul className="list">
              {content.finishChoices.map((finish) => (
                <li key={finish}>{finish}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section local-process">
        <div className="inner">
          <p className="eyebrow">Preparation and Process</p>
          <h2>How Kiwi approaches {service.shortName.toLowerCase()} in {city.name}</h2>
          <div className="grid three">
            {content.process.map((step) => (
              <article className="card" key={step}>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-parent-links">
        <div className="inner grid two">
          <div className="card">
            <p className="eyebrow">Parent Service</p>
            <h2>Learn the full {service.name.toLowerCase()} system</h2>
            <p>{service.shortDescription}</p>
            <p>
              <a href={`/services/${service.slug}`}>Read the {service.name} authority page</a>
            </p>
          </div>
          <div className="card">
            <p className="eyebrow">City Hub</p>
            <h2>See all floor coatings in {city.name}</h2>
            <p>{city.localFocus}</p>
            <p>
              <a href={`/locations/${city.slug}`}>Visit the {city.name} city hub</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section related-local-services">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Related Local Services</p>
            <h2>Other coating pages to compare</h2>
            <div className="service-links">
              {relatedServices.map((related) => (
                <a href={`/service-areas/${city.slug}/${related.slug}`} key={related.slug}>
                  {related.name} in {city.name}, AZ
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Nearby Markets</p>
            <h2>Nearby verified service areas</h2>
            <div className="service-links">
              {nearbyCities.map((nearby) => (
                <a href={`/locations/${nearby.slug}`} key={nearby.slug}>
                  Floor coatings in {nearby.name}, AZ
                </a>
              ))}
            </div>
          </div>
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

      <section className="section local-service-faq">
        <div className="inner">
          <p className="eyebrow">FAQ</p>
          <h2>Questions about {service.shortName.toLowerCase()} in {city.name}</h2>
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
          <h2>Request a {city.name} {service.shortName.toLowerCase()} quote</h2>
          <p className="lead">
            Share the surface, current concrete condition, finish direction, and how the space will be used. Kiwi Coatings AZ can help compare the coating options that fit the project.
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
