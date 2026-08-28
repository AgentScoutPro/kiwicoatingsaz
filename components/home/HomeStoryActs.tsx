"use client";

import Image from "next/image";
import Link from "next/link";
import { FeaturedProjects } from "@/components/ProjectBlocks";
import {
  beforeAfterFeature,
  cinematicChapters,
  customInteriorMaterialStrip,
  customInteriorPanels,
  customInteriorPrimary,
  founderMedia,
  homeFaqs,
  homeMedia,
  processSteps,
  realWorkPhotos,
  designGallery,
  reviewSummary,
  verifiedHomeReviews
} from "@/lib/home-page-content";
import { getVerifiedCities } from "@/lib/seo-map";
import { getFeaturedProjects } from "@/lib/projects";
import { getService, site } from "@/lib/site-data";
import { StoryMedia } from "@/components/home/StoryMedia";
import { QuoteSelector } from "@/components/home/QuoteSelector";
import { ScrollVideoChapter, beatOpacity, openingOpacity } from "@/components/home/ScrollVideoChapter";

function NumberedBlock({
  index,
  title,
  href,
  description
}: {
  index: number;
  title: string;
  href: string;
  description?: string;
}) {
  return (
    <Link href={href} className="numbered-block">
      <span className="numbered-block-index">{String(index).padStart(2, "0")}</span>
      <span className="numbered-block-title">{title}</span>
      {description ? <span className="numbered-block-desc">{description}</span> : null}
      <span className="numbered-block-arrow" aria-hidden="true">
        Explore →
      </span>
    </Link>
  );
}

/* ---------- Hero (Act 1 — pinned scroll film) ---------- */

function HeroCopy({ progress }: { progress: number }) {
  const introOpacity = openingOpacity(progress, 0.28, 0.4);
  const arizonaOpacity = beatOpacity(progress, 0.82, 0.92, 1, 1);

  return (
    <div className="chapter-copy-stack hero-copy-stack">
      <div className="hero-copy-primary" style={{ opacity: introOpacity }}>
        <p className="eyebrow">Professional Garage Floor &amp; Concrete Coatings in Arizona</p>
        <h1>Turn Ordinary Concrete Into Something Extraordinary.</h1>
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
      <p className="hero-transition-phrase" style={{ opacity: arizonaOpacity }}>
        Built For Arizona.
      </p>
    </div>
  );
}

export function HomeHero() {
  return (
    <ScrollVideoChapter
      mediaId={cinematicChapters.hero.mediaId}
      videoSrc={cinematicChapters.hero.videoSrc}
      posterSrc={cinematicChapters.hero.posterSrc}
      alt={cinematicChapters.hero.alt}
      className="hero-chapter"
      desktopScrollLength={260}
      mobileScrollLength={200}
      priority
      reducedMotionContent={<HeroCopy progress={0.1} />}
    >
      {(progress) => <HeroCopy progress={progress} />}
    </ScrollVideoChapter>
  );
}

/* ---------- Act 2 — Arizona bridge (short, normal flow) ---------- */

export function EnvironmentAct() {
  return (
    <section
      className="section story-act story-act--light story-act--compact"
      data-story-act="arizona-environment"
      data-reveal
    >
      <div className="inner story-bridge" data-story-content>
        <p className="eyebrow">Built for Arizona</p>
        <h2>Arizona Is Hard on Concrete.</h2>
        <p className="lead lead--tight">
          Heat, UV, dust, vehicle traffic, and outdoor exposure wear down untreated concrete over time. Kiwi
          Coatings AZ installs garage, patio, pool deck, and commercial floor coating systems built for that
          environment.
        </p>
      </div>
    </section>
  );
}

/* ---------- Act 3 — Not Paint. A System. (pinned scroll film) ---------- */

function SystemCopy({ progress }: { progress: number }) {
  const introOpacity = openingOpacity(progress, 0.3, 0.42);
  const supportOpacity = beatOpacity(progress, 0.32, 0.44, 0.68, 0.8);

  return (
    <div className="chapter-copy-stack">
      <div style={{ opacity: introOpacity }}>
        <p className="eyebrow">The Kiwi Difference</p>
        <h2>Not Paint. A System.</h2>
      </div>
      <p className="chapter-statement" style={{ opacity: supportOpacity }}>
        The finish is only as good as what happens underneath it.
      </p>
    </div>
  );
}

export function KiwiSystemAct() {
  return (
    <>
      <ScrollVideoChapter
        mediaId={cinematicChapters.system.mediaId}
        videoSrc={cinematicChapters.system.videoSrc}
        posterSrc={cinematicChapters.system.posterSrc}
        alt={cinematicChapters.system.alt}
        desktopScrollLength={230}
        mobileScrollLength={180}
        reducedMotionContent={<SystemCopy progress={0.15} />}
      >
        {(progress) => <SystemCopy progress={progress} />}
      </ScrollVideoChapter>
      <section
        className="section story-act story-act--dark story-act--supporting"
        data-story-act="coating-system-detail"
        data-reveal
      >
        <div className="inner story-layout" data-story-content>
          <p className="supporting-copy">
            A professional result starts before the decorative finish goes on. Kiwi evaluates the existing
            concrete, prepares the surface, repairs where needed, then builds the coating system underneath the
            flake, quartz, or metallic finish.
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
      </section>
    </>
  );
}

/* ---------- Act 4→5 — Garage → Outdoor (single connective film) ---------- */

function GarageOutdoorCopy({ progress }: { progress: number }) {
  const garageOpacity = openingOpacity(progress, 0.3, 0.4);
  const outdoorOpacity = beatOpacity(progress, 0.55, 0.66, 0.92, 1);

  return (
    <div className="chapter-copy-stack">
      <div style={{ opacity: garageOpacity }}>
        <p className="eyebrow">Your Garage</p>
        <h2>Make the Hardest-Working Room Easier to Live With.</h2>
      </div>
      <div style={{ opacity: outdoorOpacity }}>
        <p className="eyebrow">Then Take It Outside.</p>
        <h2>Patios. Pool Decks. Outdoor Living.</h2>
      </div>
    </div>
  );
}

export function GarageAct() {
  return (
    <>
      <ScrollVideoChapter
        mediaId={cinematicChapters.garageOutdoor.mediaId}
        videoSrc={cinematicChapters.garageOutdoor.videoSrc}
        posterSrc={cinematicChapters.garageOutdoor.posterSrc}
        alt={cinematicChapters.garageOutdoor.alt}
        desktopScrollLength={250}
        mobileScrollLength={195}
        reducedMotionContent={<GarageOutdoorCopy progress={0.15} />}
      >
        {(progress) => <GarageOutdoorCopy progress={progress} />}
      </ScrollVideoChapter>
      <section className="section story-act application-act" data-story-act="garage-outdoor-links" data-reveal>
        <div className="inner" data-story-content>
          <p className="eyebrow">Explore the Spaces</p>
          <div className="numbered-block-grid">
            <NumberedBlock index={1} title="Garage Floor Coatings" href="/services/garage-floor-coatings" />
            <NumberedBlock
              index={2}
              title="Patio & Pool Deck Coatings"
              href="/services/patio-and-pool-deck-coatings"
            />
            <NumberedBlock
              index={3}
              title="Polyaspartic Floor Coatings"
              href="/services/polyaspartic-floor-coatings"
            />
            <NumberedBlock index={4} title="Flake Floor Systems" href="/services/flake-floor-systems" />
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
    </>
  );
}

/* ---------- Act 6 — Custom Floor Design (signature pinned film) ---------- */

function DesignCopy({ progress }: { progress: number }) {
  const eyebrowOpacity = openingOpacity(progress, 0.16, 0.24);
  const rebelOpacity = beatOpacity(progress, 0.14, 0.24, 0.4, 0.48);
  const mainOpacity = beatOpacity(progress, 0.46, 0.56, 0.85, 0.95);

  return (
    <div className="chapter-copy-stack">
      <p className="chapter-eyebrow-standalone" style={{ opacity: eyebrowOpacity }}>
        Custom Floor Design
      </p>
      <p className="chapter-rebel-line" style={{ opacity: rebelOpacity }}>
        Or Don&apos;t Play It Safe.
      </p>
      <h2 style={{ opacity: mainOpacity }}>Concrete Doesn&apos;t Have to Look Like Concrete.</h2>
    </div>
  );
}

export function DesignAct() {
  const featured = designGallery.find((item) => item.size === "featured");
  const wide = designGallery.find((item) => item.size === "wide");
  const small = designGallery.filter((item) => item.size === "small");
  const serviceLinks = new Map(designGallery.map((item) => [item.serviceHref, item.serviceLabel]));

  return (
    <>
      <ScrollVideoChapter
        mediaId={cinematicChapters.customDesign.mediaId}
        videoSrc={cinematicChapters.customDesign.videoSrc}
        posterSrc={cinematicChapters.customDesign.posterSrc}
        alt={cinematicChapters.customDesign.alt}
        desktopScrollLength={260}
        mobileScrollLength={200}
        reducedMotionContent={<DesignCopy progress={0.15} />}
      >
        {(progress) => <DesignCopy progress={progress} />}
      </ScrollVideoChapter>

      <section
        className="section story-act story-act--dark story-act--vivid"
        data-story-act="custom-floor-design-gallery"
        data-reveal
      >
        <div className="inner" data-story-content>
          <p className="eyebrow">Real Projects, Real Rooms</p>
          <div className="custom-interior-grid">
            <div className="custom-interior-primary">
              <StoryMedia
                media={{
                  mediaId: customInteriorPrimary.id,
                  videoSrc: customInteriorPrimary.videoSrc,
                  posterSrc: customInteriorPrimary.posterSrc,
                  imageSrc: customInteriorPrimary.imageSrc,
                  alt: customInteriorPrimary.alt,
                  aspect: "4 / 5",
                  priority: true,
                  caption: `${customInteriorPrimary.label} · ${customInteriorPrimary.room}`
                }}
                sizes="(max-width: 760px) 100vw, 42vw"
              />
            </div>
            <div className="custom-interior-panels">
              {customInteriorPanels.map((panel) => (
                <StoryMedia
                  key={panel.id}
                  media={{
                    mediaId: panel.id,
                    imageSrc: panel.imageSrc,
                    alt: panel.alt,
                    aspect: "16 / 11",
                    caption: `${panel.label} · ${panel.room}`
                  }}
                  sizes="(max-width: 760px) 100vw, 32vw"
                />
              ))}
            </div>
          </div>

          <div className="custom-material-strip">
            <p className="custom-material-strip-heading">Where The Design Begins</p>
            <div className="custom-material-strip-row">
              {customInteriorMaterialStrip.map((item) => (
                <StoryMedia
                  key={item.id}
                  media={{
                    mediaId: item.id,
                    imageSrc: item.imageSrc,
                    alt: item.alt,
                    aspect: "4 / 3",
                    caption: item.room
                  }}
                  className="custom-material-item"
                  sizes="(max-width: 760px) 33vw, 220px"
                />
              ))}
            </div>
          </div>

          <p className="eyebrow design-gallery-heading">More Finish Directions</p>
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
    </>
  );
}

/* ---------- Commercial (short, normal flow) ---------- */

export function CommercialAct() {
  return (
    <section className="section story-act story-act--compact" data-story-act="commercial-flooring" data-reveal>
      <div className="inner story-bridge" data-story-content>
        <p className="eyebrow">Your Business</p>
        <h2>Cleaner Surfaces for Spaces That Need to Work.</h2>
        <p className="lead lead--tight">
          Shops, showrooms, and light commercial spaces get coating systems selected around traffic, cleaning,
          and daily operations.
        </p>
        <div className="actions">
          <Link className="button secondary" href="/services/commercial-floor-coatings">
            Explore Commercial Floor Coatings
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Color → Craft (pinned scroll film, opens the process chapter) ---------- */

function ColorCraftCopy({ progress }: { progress: number }) {
  const firstOpacity = openingOpacity(progress, 0.32, 0.42);
  const secondOpacity = beatOpacity(progress, 0.36, 0.46, 0.68, 0.78);

  return (
    <div className="chapter-copy-stack">
      <h2 style={{ opacity: firstOpacity }}>Custom Doesn&apos;t Come From a Catalog.</h2>
      <p className="chapter-statement" style={{ opacity: secondOpacity }}>
        It Starts With the Details.
      </p>
    </div>
  );
}

export function ColorCraftAct() {
  return (
    <ScrollVideoChapter
      mediaId={cinematicChapters.colorCraft.mediaId}
      videoSrc={cinematicChapters.colorCraft.videoSrc}
      posterSrc={cinematicChapters.colorCraft.posterSrc}
      alt={cinematicChapters.colorCraft.alt}
      desktopScrollLength={220}
      mobileScrollLength={175}
      reducedMotionContent={<ColorCraftCopy progress={0.15} />}
    >
      {(progress) => <ColorCraftCopy progress={progress} />}
    </ScrollVideoChapter>
  );
}

/* ---------- Process ---------- */

export function ProcessAct() {
  return (
    <section className="section story-act story-act--light" data-story-act="installation-process" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Project Process</p>
        <h2>How a Coating Project Progresses.</h2>
        <ol className="process-numbered">
          {processSteps.map((step, index) => (
            <li className="process-numbered-item" key={step.title}>
              <span className="process-numbered-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Real work ---------- */

export function ProjectsAct() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section story-act" data-story-act="kiwi-projects" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Real Kiwi Work</p>
        <h2>See the Difference.</h2>
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

/* ---------- Why Kiwi ---------- */

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
          <h2>Licensed, Bonded, and Focused on the Full System.</h2>
          <p className="lead lead--tight">
            Kiwi Coatings AZ is a licensed and bonded Arizona contractor, {site.licenseNumber}, serving
            residential and commercial coating projects.
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

/* ---------- Reviews ---------- */

function reviewerInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function ReviewsAct() {
  if (verifiedHomeReviews.length === 0) {
    return (
      <section className="section story-act story-act--light review-cta-act" data-story-act="verified-reviews" data-reveal>
        <div className="inner" data-story-content>
          <p className="eyebrow">Customer Proof</p>
          <h2>See what Arizona customers are saying.</h2>
          <p className="lead lead--tight">
            Kiwi Coatings AZ reviews are collected on Google. Read verified customer feedback directly on the
            Kiwi Coatings AZ Google Business Profile.
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

  return (
    <section className="section story-act reviews-act" data-story-act="verified-reviews" data-reveal>
      <div className="inner" data-story-content>
        <p className="eyebrow">Real Customer Reviews</p>
        <h2>What Arizona Homeowners Are Saying.</h2>
        <div className="reviews-summary-row">
          <span className="reviews-rating">{reviewSummary.rating.toFixed(1)}</span>
          <div>
            <div className="reviews-stars" aria-hidden="true">
              ★★★★★
            </div>
            <p className="reviews-summary-line">
              Rated 5 Stars on {reviewSummary.source} · {reviewSummary.reviewCount}+ Reviews
            </p>
          </div>
        </div>
        <div className="reviews-row">
          {verifiedHomeReviews.map((review) => (
            <blockquote className="review-card" key={`${review.source}-${review.reviewer}`}>
              <span className="review-card-badge">{review.source}</span>
              <p className="review-card-text">&ldquo;{review.text}&rdquo;</p>
              <footer className="review-card-footer">
                <span className="review-card-avatar" aria-hidden="true">
                  {reviewerInitials(review.reviewer)}
                </span>
                <span className="review-card-meta">
                  <span className="review-card-name">{review.reviewer}</span>
                  {review.date ? <span className="review-card-date">{review.date}</span> : null}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="actions">
          <a className="button secondary" href={site.reviewUrl} target="_blank" rel="noreferrer">
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Service areas ---------- */

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
        <h2>Floor Coatings Across Arizona&apos;s East Valley &amp; Central Arizona</h2>
        <p className="lead lead--tight">
          Kiwi Coatings AZ serves verified markets across the East Valley, Pinal County, and the greater
          Phoenix area.
        </p>
        {[...groups.entries()].map(([region, regionCities]) => (
          <div className="city-block-group" key={region}>
            <h3 className="city-block-group-title">{region}</h3>
            <div className="city-block-grid">
              {regionCities.map((city) => (
                <Link href={`/locations/${city.slug}`} key={city.slug} className="city-block">
                  <span className="city-block-name">Floor Coatings in {city.name}</span>
                  <span className="city-block-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="actions">
          <Link className="button secondary" href="/locations">
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function FAQAct() {
  return (
    <section className="section story-act" data-story-act="homepage-faq" data-reveal>
      <div className="inner faq-inner" data-story-content>
        <p className="eyebrow">Questions Answered</p>
        <h2>Common questions before requesting a quote.</h2>
        <div className="faq-list">
          {homeFaqs.map((faq) => (
            <details className="faq-row" key={faq.question}>
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

/* ---------- Final CTA ---------- */

export function FinalCTA() {
  return (
    <section className="section story-act final-story-cta story-act--dark" data-story-act="final-cta" data-reveal>
      <StoryMedia media={homeMedia.finalCta} className="final-cta-media" sizes="100vw" />
      <div className="final-cta-scrim" aria-hidden="true" />
      <div className="inner story-layout" data-story-content>
        <div>
          <p className="eyebrow">{site.licenseNumber}</p>
          <h2>Your Floor Starts Here.</h2>
          <p className="lead lead--tight">
            Tell Kiwi Coatings AZ what surface you want to transform, where it is located, and how the space
            will be used.
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

/* ---------- Homepage → service page connections ---------- */

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
        <div className="numbered-block-grid numbered-block-grid--wide">
          {serviceSlugs.map((slug, index) => {
            const service = getService(slug);

            if (!service) {
              return null;
            }

            return (
              <NumberedBlock key={service.slug} index={index + 1} title={service.name} href={`/services/${service.slug}`} />
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

