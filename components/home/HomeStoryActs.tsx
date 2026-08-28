import Link from "next/link";
import { FeaturedProjects } from "@/components/ProjectBlocks";
import { homeFaqs, homeMedia, processSteps, verifiedHomeReviews } from "@/lib/home-page-content";
import { getVerifiedCities } from "@/lib/seo-map";
import { getFeaturedProjects } from "@/lib/projects";
import { getService, site } from "@/lib/site-data";
import { StoryMedia } from "@/components/home/StoryMedia";

function ServiceAnchor({ slug, children }: { slug: string; children: React.ReactNode }) {
  return <Link href={`/services/${slug}`}>{children}</Link>;
}

export function HomeHero() {
  return (
    <section className="hero story-act story-act-hero" data-story-act="hero" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Professional Garage Floor & Concrete Coatings in Arizona</p>
          <h1>Turn Ordinary Concrete Into Something Extraordinary.</h1>
          <p className="lead">
            Kiwi Coatings AZ is an Arizona floor coating contractor installing garage floor coatings, patio and pool deck coatings, premium decorative floors, and commercial coating systems for residential and business spaces. Licensed and bonded. {site.licenseNumber}.
          </p>
          <div className="actions">
            <Link className="button" href="/get-a-quote">Request a Quote</Link>
            <a className="button secondary" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </div>
        <StoryMedia media={homeMedia.hero} />
      </div>
    </section>
  );
}

export function EnvironmentAct() {
  return (
    <section className="section story-act" data-story-act="arizona-environment" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Arizona Conditions</p>
          <h2>Bare Concrete Takes a Beating.</h2>
          <p>
            Arizona concrete has to deal with heat, UV exposure, dust, vehicle traffic, oil, spills, outdoor exposure, and everyday wear. Over time, untreated concrete can become stained, dusty, visually worn, and harder to keep clean.
          </p>
          <p>
            That does not mean every surface needs the same coating. It means the surface should be evaluated before a finish is chosen.
          </p>
        </div>
        <StoryMedia media={homeMedia.environment} />
      </div>
    </section>
  );
}

export function KiwiSystemAct() {
  return (
    <section className="section story-act" data-story-act="coating-system" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Not Paint. A System.</p>
          <h2>The Finish Is Only As Good As What Happens Underneath It.</h2>
          <p>
            A professional result starts before the decorative finish is installed. Kiwi looks at the existing concrete, how the space is used, whether repair is needed, and which coating system fits the surface.
          </p>
          <p>
            The visible finish may be flake, quartz, metallic epoxy, or another decorative direction, but the system underneath is what makes the project more than a basic surface treatment.
          </p>
        </div>
        <StoryMedia media={homeMedia.system} />
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
            Garage floors take tire traffic, tools, storage, dust, and spills. A garage coating system can make the space feel cleaner, more finished, and easier to maintain while giving homeowners choices in color, texture, and finish.
          </p>
          <p>
            Start with <ServiceAnchor slug="garage-floor-coatings">garage floor coatings</ServiceAnchor>, then compare <ServiceAnchor slug="polyaspartic-floor-coatings">polyaspartic coatings</ServiceAnchor>, <ServiceAnchor slug="epoxy-floor-coatings">epoxy floor coatings</ServiceAnchor>, and <ServiceAnchor slug="flake-floor-systems">flake floor systems</ServiceAnchor>.
          </p>
          <div className="actions">
            <Link className="button secondary" href="/services/garage-floor-coatings">Explore Garage Floor Coatings</Link>
          </div>
        </div>
        <StoryMedia media={homeMedia.garage} />
      </div>
    </section>
  );
}

export function OutdoorAct() {
  return (
    <section className="section story-act application-act" data-story-act="outdoor-living" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Your Outdoor Living Space</p>
          <h2>Extend the finish beyond the garage.</h2>
          <p>
            Patios, pool decks, walkways, and entertaining areas need coating choices that consider Arizona sun, water, texture, dust, and outdoor maintenance. The right conversation is different from an interior floor.
          </p>
          <p>
            <ServiceAnchor slug="patio-and-pool-deck-coatings">Patio and pool deck coatings</ServiceAnchor> can be compared with <ServiceAnchor slug="polyaspartic-floor-coatings">polyaspartic coating options</ServiceAnchor>, <ServiceAnchor slug="quartz-floor-coatings">quartz floor coatings</ServiceAnchor>, and decorative flake finishes where appropriate.
          </p>
          <div className="actions">
            <Link className="button secondary" href="/services/patio-and-pool-deck-coatings">Explore Patio & Pool Deck Coatings</Link>
          </div>
        </div>
        <StoryMedia media={homeMedia.outdoor} />
      </div>
    </section>
  );
}

export function DesignAct() {
  return (
    <section className="section story-act application-act" data-story-act="finish-gallery" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">Your Design Possibilities</p>
          <h2>Protection can still have personality.</h2>
          <p>
            Coatings can change more than the maintenance of a floor. Metallic epoxy, terrazzo-style flake, stone-inspired blends, quartz texture, neon accents, glitter, glow-in-the-dark effects, and specialty finishes can turn concrete into a design element.
          </p>
          <nav className="service-links" aria-label="Decorative coating services">
            <Link href="/services/metallic-epoxy-floors">Metallic Epoxy Floors</Link>
            <Link href="/services/flake-floor-systems">Flake Floor Systems</Link>
            <Link href="/services/specialty-floor-finishes">Specialty Floor Finishes</Link>
            <Link href="/services/quartz-floor-coatings">Quartz Floor Coatings</Link>
          </nav>
        </div>
        <StoryMedia media={homeMedia.finishes} />
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
            Shops, showrooms, workspaces, facilities, storage areas, customer-facing spaces, and light commercial environments may need coating systems selected around traffic, cleaning, appearance, and daily operations.
          </p>
          <p>
            Commercial projects can also connect back to epoxy, polyaspartic, quartz, flake, and metallic systems depending on the surface and use.
          </p>
          <div className="actions">
            <Link className="button secondary" href="/services/commercial-floor-coatings">Explore Commercial Floor Coatings</Link>
          </div>
        </div>
        <StoryMedia media={homeMedia.commercial} />
      </div>
    </section>
  );
}

export function ProcessAct() {
  return (
    <section className="section story-act" data-story-act="installation-process" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Project Process</p>
        <h2>How a coating project progresses.</h2>
        <div className="grid three process-steps">
          {processSteps.map((step) => (
            <article className="card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <StoryMedia media={homeMedia.process} />
      </div>
    </section>
  );
}

export function ProjectsAct() {
  const featuredProjects = getFeaturedProjects();

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="section story-act" data-story-act="kiwi-projects" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Real Kiwi Work</p>
        <h2>Verified projects.</h2>
        <FeaturedProjects projects={featuredProjects} />
        <div className="actions">
          <Link className="button secondary" href="/gallery">View Kiwi Coatings Projects</Link>
        </div>
      </div>
    </section>
  );
}

export function WhyKiwiAct() {
  return (
    <section className="section story-act" data-story-act="why-kiwi" data-reveal>
      <div className="inner grid two" data-story-content>
        <div>
          <p className="eyebrow">Why Kiwi</p>
          <h2>Licensed, bonded, and focused on the full coating system.</h2>
          <p>
            Kiwi Coatings AZ is a licensed and bonded Arizona contractor, {site.licenseNumber}, serving residential and commercial coating projects with a broad range of system and finish options.
          </p>
          <div className="actions">
            <Link className="button secondary" href="/about">Learn About Kiwi Coatings AZ</Link>
            <a className="button secondary" href={site.reviewUrl} target="_blank" rel="noreferrer">Open the Google Review Profile</a>
            <Link className="button secondary" href="/gallery">View Kiwi Coatings Projects</Link>
          </div>
        </div>
        <ul className="list card">
          <li>Garage, patio, pool deck, decorative, and commercial applications</li>
          <li>Epoxy, polyaspartic, flake, quartz, metallic, and specialty finish options</li>
          <li>Surface preparation and system selection before finish selection</li>
          <li>Residential and commercial coating conversations based on actual use</li>
        </ul>
      </div>
    </section>
  );
}

export function ReviewsAct() {
  if (verifiedHomeReviews.length === 0) {
    return null;
  }

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

export function ServiceAreasAct() {
  const groups = new Map<string, ReturnType<typeof getVerifiedCities>>();

  for (const city of getVerifiedCities()) {
    const regionCities = groups.get(city.region) ?? [];
    regionCities.push(city);
    groups.set(city.region, regionCities);
  }

  return (
    <section className="section story-act" data-story-act="local-arizona" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Arizona Service Areas</p>
        <h2>Floor Coatings Across Arizona&apos;s East Valley & Central Arizona</h2>
        <p className="lead">
          Kiwi Coatings AZ serves verified markets across the East Valley, Pinal County, central Arizona, and the greater Phoenix area through dedicated city hubs.
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
          <Link className="button secondary" href="/locations">View All Service Areas</Link>
        </div>
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
    <section className="section story-act final-story-cta" data-story-act="final-cta" data-reveal>
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">{site.licenseNumber}</p>
          <h2>Your Floor Starts Here.</h2>
          <p className="lead">
            Tell Kiwi Coatings AZ what surface you want to transform, where it is located, and how the space will be used.
          </p>
          <div className="actions">
            <Link className="button" href="/get-a-quote">Request a Quote</Link>
            <a className="button secondary" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </div>
        <form className="card quote-selector" aria-label="Project type selector">
          <label>
            Project Type
            <select name="project-type" defaultValue="">
              <option value="" disabled>Select a project type</option>
              {site.quoteOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <StoryMedia media={homeMedia.finalCta} />
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
    <nav className="section story-act service-connection-act" aria-label="Kiwi Coatings service pages" data-story-act="service-connections" data-reveal>
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
          <Link className="button secondary" href="/services">Compare All Floor Coating Services</Link>
          <Link className="button secondary" href="/contact">Contact Kiwi Coatings AZ</Link>
        </div>
      </div>
    </nav>
  );
}
