import Image from "next/image";
import Link from "next/link";
import { FeaturedProjects } from "@/components/ProjectBlocks";
import {
  beforeAfterFeature,
  fieldMedia,
  founderMedia,
  homeFaqs,
  homeMedia,
  processSteps,
  realWorkPhotos,
  designGallery,
  verifiedHomeReviews
} from "@/lib/home-page-content";
import { getVerifiedCities } from "@/lib/seo-map";
import { getFeaturedProjects } from "@/lib/projects";
import { getService, site } from "@/lib/site-data";
import { StoryMedia } from "@/components/home/StoryMedia";
import { QuoteSelector } from "@/components/home/QuoteSelector";

function ServiceAnchor({ slug, children }: { slug: string; children: React.ReactNode }) {
  return <Link href={`/services/${slug}`}>{children}</Link>;
}

export function HomeHero() {
  return (
    <section className="hero story-act story-act-hero" data-story-act="hero" data-reveal>
      <StoryMedia media={homeMedia.hero} className="hero-media" sizes="100vw" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="inner hero-content" data-story-content>
        <p className="eyebrow">Professional Garage Floor &amp; Concrete Coatings in Arizona</p>
        <h1>Turn Ordinary Concrete Into Something Extraordinary.</h1>
        <p className="lead">
          Kiwi Coatings AZ is an Arizona floor coating contractor installing garage floor coatings, patio and pool
          deck coatings, premium decorative floors, and commercial coating systems for residential and business
          spaces. Licensed and bonded, {site.licenseNumber}.
        </p>
        <div className="actions">
          <Link className="button" href="/get-a-quote">
            Request a Quote
          </Link>
          <a className="button secondary" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </div>
        <ul className="trust-badges">
          <li>Licensed &amp; Bonded</li>
          <li>{site.licenseNumber}</li>
          <li>Arizona Contractor</li>
        </ul>
      </div>
    </section>
  );
}

export function EnvironmentAct() {
  return (
    <section className="section story-act story-act--light" data-story-act="arizona-environment" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Built for Arizona</p>
          <h2>Arizona Is Hard on Concrete.</h2>
          <p>
            Arizona concrete has to deal with heat, UV exposure, dust, vehicle traffic, oil, spills, outdoor
            exposure, and everyday wear. Over time, untreated concrete can become stained, dusty, visually worn, and
            harder to keep clean.
          </p>
          <p>
            That does not mean every surface needs the same coating. It means the surface should be evaluated before
            a finish is chosen.
          </p>
        </div>
        <StoryMedia media={homeMedia.environment} sizes="(max-width: 760px) 100vw, 50vw" />
      </div>
    </section>
  );
}

export function KiwiSystemAct() {
  return (
    <section className="section story-act story-act--dark" data-story-act="coating-system" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Not Paint. A System.</p>
          <h2>The Finish Is Only As Good As What Happens Underneath It.</h2>
          <p>
            A professional result starts before the decorative finish is installed. Kiwi looks at the existing
            concrete, how the space is used, whether repair is needed, and which coating system fits the surface.
          </p>
          <p>
            The visible finish may be flake, quartz, metallic epoxy, or another decorative direction, but the system
            underneath is what makes the project more than a basic surface treatment.
          </p>
          <ol className="system-layers" aria-label="Coating system layers, from the substrate up">
            <li>
              <span>Concrete Substrate</span>
            </li>
            <li>
              <span>Prepared Surface</span>
            </li>
            <li>
              <span>Coating System</span>
            </li>
            <li>
              <span>Decorative Finish</span>
            </li>
            <li>
              <span>Finished Surface</span>
            </li>
          </ol>
        </div>
        <StoryMedia media={homeMedia.system} sizes="(max-width: 760px) 100vw, 50vw" />
      </div>
    </section>
  );
}

export function GarageAct() {
  return (
    <section className="section story-act application-act" data-story-act="garage-transformation" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Your Garage</p>
          <h2>Make the hardest-working room easier to live with.</h2>
          <p>
            Garage floors take tire traffic, tools, storage, dust, and spills. A garage coating system can make the
            space feel cleaner, more finished, and easier to maintain while giving homeowners choices in color,
            texture, and finish.
          </p>
          <p>
            Start with <ServiceAnchor slug="garage-floor-coatings">garage floor coatings</ServiceAnchor>, then compare{" "}
            <ServiceAnchor slug="polyaspartic-floor-coatings">polyaspartic coatings</ServiceAnchor>,{" "}
            <ServiceAnchor slug="epoxy-floor-coatings">epoxy floor coatings</ServiceAnchor>, and{" "}
            <ServiceAnchor slug="flake-floor-systems">flake floor systems</ServiceAnchor>.
          </p>
          <div className="actions">
            <Link className="button secondary" href="/services/garage-floor-coatings">
              Explore Garage Floor Coatings
            </Link>
          </div>
        </div>
        <StoryMedia media={homeMedia.garage} className="story-media-feature" sizes="(max-width: 760px) 100vw, 55vw" />
      </div>
    </section>
  );
}

export function OutdoorAct() {
  return (
    <section className="section story-act application-act story-act--warm" data-story-act="outdoor-living" data-reveal>
      <div className="inner story-layout story-layout-reverse" data-story-content>
        <StoryMedia media={homeMedia.outdoor} sizes="(max-width: 760px) 100vw, 45vw" />
        <div>
          <p className="eyebrow">Your Outdoor Living Space</p>
          <h2>Extend the finish beyond the garage.</h2>
          <p>
            Patios, pool decks, walkways, and entertaining areas need coating choices that consider Arizona sun,
            water, texture, dust, and outdoor maintenance. The right conversation is different from an interior
            floor.
          </p>
          <p>
            <ServiceAnchor slug="patio-and-pool-deck-coatings">Patio and pool deck coatings</ServiceAnchor> can be
            compared with <ServiceAnchor slug="polyaspartic-floor-coatings">polyaspartic coating options</ServiceAnchor>,{" "}
            <ServiceAnchor slug="quartz-floor-coatings">quartz floor coatings</ServiceAnchor>, and decorative flake
            finishes where appropriate.
          </p>
          <div className="actions">
            <Link className="button secondary" href="/services/patio-and-pool-deck-coatings">
              Explore Patio &amp; Pool Deck Coatings
            </Link>
          </div>
        </div>
      </div>
      <div className="inner before-after-block">
        <p className="eyebrow">See The Difference</p>
        <h3>From Bare Concrete to Finished Space.</h3>
        <figure className="before-after-figure">
          <Image
            src={beforeAfterFeature.imageSrc}
            alt={beforeAfterFeature.alt}
            width={2000}
            height={1827}
            sizes="(max-width: 760px) 100vw, 900px"
          />
          <div className="before-after-labels" aria-hidden="true">
            <span>{beforeAfterFeature.beforeLabel}</span>
            <span>{beforeAfterFeature.afterLabel}</span>
          </div>
        </figure>
      </div>
    </section>
  );
}

export function DesignAct() {
  const featured = designGallery.find((item) => item.size === "featured");
  const wide = designGallery.find((item) => item.size === "wide");
  const small = designGallery.filter((item) => item.size === "small");
  const serviceLinks = new Map(designGallery.map((item) => [item.serviceHref, item.serviceLabel]));

  return (
    <section className="section story-act story-act--dark story-act--vivid" data-story-act="custom-floor-design" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Custom Floor Design</p>
        <h2>Concrete Doesn&apos;t Have to Look Like Concrete.</h2>
        <p className="lead">
          Beyond a standard protective coating, Kiwi Coatings AZ can build a floor into a real design feature through
          custom metallic movement, flake blends, quartz texture, and specialty color and finish combinations.
        </p>
        <div className="design-gallery">
          {featured ? (
            <Link href={featured.serviceHref} className="design-tile design-tile-featured" aria-label={featured.serviceLabel}>
              <StoryMedia
                media={{ mediaId: featured.id, imageSrc: featured.imageSrc, alt: featured.alt, aspect: featured.aspect }}
                sizes="(max-width: 760px) 100vw, 38vw"
              />
              <span className="design-tile-label">{featured.label}</span>
            </Link>
          ) : null}
          {wide ? (
            <Link href={wide.serviceHref} className="design-tile design-tile-wide" aria-label={wide.serviceLabel}>
              <StoryMedia
                media={{ mediaId: wide.id, imageSrc: wide.imageSrc, alt: wide.alt, aspect: wide.aspect }}
                sizes="(max-width: 760px) 100vw, 58vw"
              />
              <span className="design-tile-label">{wide.label}</span>
            </Link>
          ) : null}
          {small.map((item) => (
            <Link href={item.serviceHref} className="design-tile design-tile-small" key={item.id} aria-label={item.serviceLabel}>
              <StoryMedia
                media={{ mediaId: item.id, imageSrc: item.imageSrc, alt: item.alt, aspect: item.aspect }}
                sizes="(max-width: 760px) 50vw, 18vw"
              />
              <span className="design-tile-label">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="actions">
          {[...serviceLinks.entries()].map(([href, label]) => (
            <Link className="button secondary" href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommercialAct() {
  return (
    <section className="section story-act application-act" data-story-act="commercial-flooring" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Your Business</p>
          <h2>Cleaner surfaces for spaces that need to work.</h2>
          <p>
            Shops, showrooms, workspaces, facilities, storage areas, customer-facing spaces, and light commercial
            environments may need coating systems selected around traffic, cleaning, appearance, and daily
            operations.
          </p>
          <p>
            Commercial projects can also connect back to epoxy, polyaspartic, quartz, flake, and metallic systems
            depending on the surface and use.
          </p>
          <div className="actions">
            <Link className="button secondary" href="/services/commercial-floor-coatings">
              Explore Commercial Floor Coatings
            </Link>
          </div>
        </div>
        <StoryMedia media={homeMedia.commercial} sizes="(max-width: 760px) 100vw, 50vw" />
      </div>
    </section>
  );
}

export function ProcessAct() {
  return (
    <section className="section story-act story-act--light" data-story-act="installation-process" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Project Process</p>
        <h2>How a coating project progresses.</h2>
        <ol className="process-steps">
          {processSteps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="process-step-number">{String(index + 1).padStart(2, "0")}</span>
              {step.imageSrc ? (
                <StoryMedia
                  media={{ mediaId: `process-${index}`, imageSrc: step.imageSrc, alt: step.alt ?? step.title, aspect: "4 / 3" }}
                  className="process-step-media"
                  sizes="(max-width: 760px) 100vw, 320px"
                />
              ) : null}
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProjectsAct() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section story-act" data-story-act="kiwi-projects" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Real Kiwi Work</p>
        <h2>Real Floors. Real Transformations.</h2>
        <div className="real-work-gallery">
          {realWorkPhotos.map((photo) => (
            <figure className="real-work-photo" key={photo.id}>
              <StoryMedia
                media={{ mediaId: photo.id, imageSrc: photo.imageSrc, alt: photo.alt, aspect: photo.aspect }}
                sizes="(max-width: 760px) 50vw, 25vw"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        {featuredProjects.length > 0 ? <FeaturedProjects projects={featuredProjects} /> : null}
        <div className="actions">
          <Link className="button secondary" href="/projects">
            View Kiwi Coatings Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhyKiwiAct() {
  return (
    <section className="section story-act story-act--dark" data-story-act="why-kiwi" data-reveal>
      <div className="inner grid two founder-layout" data-story-content>
        <StoryMedia
          media={{ mediaId: "founder", imageSrc: founderMedia.imageSrc, alt: founderMedia.alt, aspect: "4 / 5" }}
          className="founder-media"
          sizes="(max-width: 760px) 100vw, 38vw"
        />
        <div>
          <p className="eyebrow">Why Kiwi</p>
          <h2>Licensed, bonded, and focused on the full coating system.</h2>
          <p>
            Kiwi Coatings AZ is a licensed and bonded Arizona contractor, {site.licenseNumber}, serving residential
            and commercial coating projects with a broad range of system and finish options.
          </p>
          <ul className="list card trust-list">
            <li>Licensed and bonded Arizona contractor</li>
            <li>{site.licenseNumber}</li>
            <li>Garage, patio, pool deck, decorative, and commercial applications</li>
            <li>Surface preparation and system selection before finish selection</li>
          </ul>
          <div className="trust-row">
            <a href={site.bbbUrl} target="_blank" rel="noreferrer" className="bbb-badge" aria-label="BBB Accredited Business profile">
              <Image src={site.bbbLogoPath} alt="BBB Accredited Business" width={100} height={51} />
            </a>
          </div>
          <div className="actions">
            <Link className="button secondary" href="/about">
              Learn About Kiwi Coatings AZ
            </Link>
            <a className="button secondary" href={site.reviewUrl} target="_blank" rel="noreferrer">
              Open the Google Review Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsAct() {
  if (verifiedHomeReviews.length > 0) {
    return (
      <section className="section story-act" data-story-act="verified-reviews" data-reveal>
        <div className="inner" data-story-content>
          <p className="eyebrow">Customer Proof</p>
          <h2>Verified customer feedback.</h2>
          <div className="grid three">
            {verifiedHomeReviews.map((review) => (
              <blockquote className="card" key={`${review.source}-${review.reviewer}`}>
                <p>{review.text}</p>
                <footer>{review.reviewer}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section story-act story-act--light review-cta-act" data-story-act="verified-reviews" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Customer Proof</p>
        <h2>See what Arizona customers are saying.</h2>
        <p className="lead">
          Kiwi Coatings AZ reviews are collected on Google. Read verified customer feedback directly on the Kiwi
          Coatings AZ Google Business Profile.
        </p>
        <div className="actions">
          <a className="button" href={site.reviewUrl} target="_blank" rel="noreferrer">
            Read Verified Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreasAct() {
  const groups = new Map<string, ReturnType<typeof getVerifiedCities>>();

  for (const city of getVerifiedCities()) {
    const regionCities = groups.get(city.region) ?? [];
    regionCities.push(city);
    groups.set(city.region, regionCities);
  }

  return (
    <section className="section story-act" data-story-act="local-arizona" data-reveal>
      <div className="inner service-area-layout" data-story-content>
        <div>
          <p className="eyebrow">Arizona Service Areas</p>
          <h2>Floor Coatings Across Arizona&apos;s East Valley &amp; Central Arizona</h2>
          <p className="lead">
            Kiwi Coatings AZ serves verified markets across the East Valley, Pinal County, central Arizona, and the
            greater Phoenix area through dedicated city hubs.
          </p>
          <div className="grid three">
            {[...groups.entries()].map(([region, regionCities]) => (
              <nav className="card" aria-label={`${region} service areas`} key={region}>
                <h3>{region}</h3>
                <div className="service-links">
                  {regionCities.map((city) => (
                    <Link href={`/locations/${city.slug}`} key={city.slug}>
                      Floor Coatings in {city.name}
                    </Link>
                  ))}
                </div>
              </nav>
            ))}
          </div>
          <div className="actions">
            <Link className="button secondary" href="/locations">
              View All Service Areas
            </Link>
          </div>
        </div>
        <StoryMedia
          media={{ mediaId: "field-trailer", imageSrc: fieldMedia.trailer.imageSrc, alt: fieldMedia.trailer.alt, aspect: "4 / 5" }}
          sizes="(max-width: 760px) 100vw, 28vw"
        />
      </div>
    </section>
  );
}

export function FAQAct() {
  return (
    <section className="section story-act" data-story-act="homepage-faq" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Questions Answered</p>
        <h2>Common questions before requesting a quote.</h2>
        <div className="grid two">
          {homeFaqs.map((faq) => (
            <details className="card" key={faq.question}>
              <summary>
                <h3>{faq.question}</h3>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section story-act final-story-cta story-act--dark" data-story-act="final-cta" data-reveal>
      <StoryMedia media={homeMedia.finalCta} className="final-cta-media" sizes="100vw" />
      <div className="final-cta-scrim" aria-hidden="true" />
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">{site.licenseNumber}</p>
          <h2>Your Floor Starts Here.</h2>
          <p className="lead">
            Tell Kiwi Coatings AZ what surface you want to transform, where it is located, and how the space will be
            used.
          </p>
          <div className="actions">
            <Link className="button" href="/get-a-quote">
              Request a Quote
            </Link>
            <a className="button secondary" href={site.phoneHref}>
              Call {site.phone}
            </a>
          </div>
        </div>
        <QuoteSelector options={site.quoteOptions} />
      </div>
    </section>
  );
}

export function HomeServiceLinks() {
  const serviceSlugs = [
    "garage-floor-coatings",
    "polyaspartic-floor-coatings",
    "epoxy-floor-coatings",
    "metallic-epoxy-floors",
    "flake-floor-systems",
    "quartz-floor-coatings",
    "patio-and-pool-deck-coatings",
    "commercial-floor-coatings",
    "specialty-floor-finishes"
  ];

  return (
    <nav
      className="section story-act service-connection-act"
      aria-label="Kiwi Coatings service pages"
      data-story-act="service-connections"
      data-reveal
    >
      <div className="inner" data-story-content>
        <p className="eyebrow">Service Authority</p>
        <h2>Explore the coating systems in detail.</h2>
        <div className="grid three">
          {serviceSlugs.map((slug) => {
            const service = getService(slug);

            if (!service) {
              return null;
            }

            return (
              <Link className="card" href={`/services/${service.slug}`} key={service.slug}>
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            );
          })}
        </div>
        <div className="actions">
          <Link className="button secondary" href="/services">
            Compare All Floor Coating Services
          </Link>
          <Link className="button secondary" href="/contact">
            Contact Kiwi Coatings AZ
          </Link>
        </div>
      </div>
    </nav>
  );
}
