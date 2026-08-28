import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, ServiceCityLinks } from "@/components/PageBlocks";
import { ProjectProofSlot } from "@/components/ProjectBlocks";
import { getService, services, site } from "@/lib/site-data";
import { getProjectsByService } from "@/lib/projects";
import { getPrimaryServiceContent } from "@/lib/service-page-content";
import { createBreadcrumbSchema, createFaqSchema, createPageMetadata, createServiceSchema } from "@/lib/seo";

type Params = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  const content = getPrimaryServiceContent(serviceSlug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.seoTitle,
    description: content
      ? `${service.shortDescription} Learn options, process, Arizona considerations, and where ${service.shortName.toLowerCase()} make sense.`
      : `${service.shortDescription} Request a quote from Kiwi Coatings AZ for ${service.name.toLowerCase()} across central Arizona.`,
    path: `/services/${service.slug}`,
    image: service.image
  });
}

export default async function ServicePage({ params }: Params) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  const content = getPrimaryServiceContent(serviceSlug);

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
      {content ? (
        <JsonLd
          data={createFaqSchema(content.faqs)}
        />
      ) : null}
      <section className="hero">
        <div className="inner">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">Floor coating service</p>
          <h1>{service.name} in Arizona</h1>
          <p className="lead">{content?.heroIntro ?? service.intro}</p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href="/contact">Request a Quote</a>
          </div>
        </div>
      </section>
      {content ? (
        <PrimaryServiceSections service={service} content={content} />
      ) : (
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
      )}
      <section className="section">
        <div className="inner">
          <h2>{service.name} by City</h2>
          <ServiceCityLinks serviceSlug={service.slug} />
        </div>
      </section>
      <ProjectProofSlot
        title={`Verified ${service.name.toLowerCase()} projects`}
        projects={getProjectsByService(service.slug)}
      />
      {content ? (
        <section className="section">
          <div className="inner">
            <h2>Ready to talk through your floor?</h2>
            <p className="lead">
              Share the surface, location, and finish direction you have in mind. Kiwi Coatings AZ can help narrow the system to the way the space will be used.
            </p>
            <div className="actions">
              <a className="button" href={site.phoneHref}>Call {site.phone}</a>
              <a className="button secondary" href="/contact">Request a Quote</a>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

type PrimaryServiceSectionsProps = {
  service: NonNullable<ReturnType<typeof getService>>;
  content: NonNullable<ReturnType<typeof getPrimaryServiceContent>>;
};

function PrimaryServiceSections({ service, content }: PrimaryServiceSectionsProps) {
  const related = service.relatedServices
    .map((slug) => getService(slug))
    .filter((relatedService): relatedService is NonNullable<ReturnType<typeof getService>> => Boolean(relatedService));

  return (
    <>
      <section className="section service-overview">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Service Overview</p>
            <h2>What {service.shortName.toLowerCase()} are</h2>
            {content.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="card media-slot" aria-label={`${service.name} project planning notes`}>
            <p className="eyebrow">Planning Notes</p>
            <h3>Match the system to the surface</h3>
            <p>Concrete condition, sun exposure, traffic, cleaning expectations, and finish style should all shape the coating recommendation.</p>
          </aside>
        </div>
      </section>

      <section className="section arizona-service-context">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Arizona Conditions</p>
            <h2>Why this system matters here</h2>
            {content.arizona.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="card">
            <h3>Common Problems</h3>
            <ul className="list">
              {content.problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section kiwi-process">
        <div className="inner">
          <p className="eyebrow">Kiwi Process</p>
          <h2>How a coating project is planned and installed</h2>
          <div className="grid three">
            {content.process.map((step) => (
              <article className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section system-options">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">System Options</p>
            <h2>Finish directions to consider</h2>
            <div className="grid">
              {content.finishOptions.map((option) => (
                <article className="card" key={option.title}>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Benefits</p>
            <h2>Practical reasons to coat the surface</h2>
            <div className="grid">
              {content.benefitDetails.map((benefit) => (
                <article className="card" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section applications-related">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">Applications</p>
            <h2>Where this service fits</h2>
            <p>{content.applicationsIntro}</p>
            <ul className="list">
              {service.applications.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Related Services</p>
            <h2>Compare nearby coating options</h2>
            <div className="service-links">
              {related.map((relatedService) => (
                <a href={`/services/${relatedService.slug}`} key={relatedService.slug}>
                  {relatedService.name}: {relatedService.shortDescription}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="inner">
          <p className="eyebrow">FAQ</p>
          <h2>Questions about {service.shortName.toLowerCase()}</h2>
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
    </>
  );
}
