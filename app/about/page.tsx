import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-data";
import { founderMedia } from "@/lib/home-page-content";
import { getVerifiedCities } from "@/lib/seo-map";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Kiwi Coatings AZ",
  description:
    "Learn about Kiwi Coatings AZ, an Arizona concrete coatings company built around experience, preparation, craftsmanship, and garage floor coating systems selected for the right application.",
  path: "/about",
  image: founderMedia.imageSrc
});

export default function AboutPage() {
  const serviceAreas = getVerifiedCities().map((city) => city.name);
  const visibleServiceAreas = serviceAreas.slice(0, 8).join(", ");

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-media" aria-hidden="true">
          <Image
            src="/media/kiwi/environment/kiwi-arizona-bare-concrete-01.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="about-hero-scrim" aria-hidden="true" />
        <div className="inner about-hero-content">
          <p className="eyebrow">About Kiwi Coatings</p>
          <h1>Built on Experience. Driven by the Details.</h1>
          <p className="lead">
            Kiwi Coatings AZ is an Arizona concrete coating company built around Randy&apos;s more than
            23 years of coatings-industry experience and a simple standard: do the work correctly.
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
      </section>

      <section className="section about-exists" aria-labelledby="why-kiwi-exists">
        <div className="inner about-editorial-split">
          <p className="about-section-number">01</p>
          <div>
            <p className="eyebrow">Why Kiwi Exists</p>
            <h2 id="why-kiwi-exists">Do It Right.</h2>
            <p className="about-body-large">
              Kiwi was created around preparation, understanding the material, and recommending the right
              system for the actual surface and application. The easiest option is not always the right one.
              The cheapest option is not always the one that should go on your concrete.
            </p>
            <p className="about-body">
              That is the difference Kiwi is built to protect: honest communication, dependable service, and
              coating work guided by what the floor actually needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-founder story-act--dark" aria-labelledby="about-randy">
        <div className="inner about-founder-layout">
          <figure className="about-founder-figure">
            <Image
              src={founderMedia.imageSrc}
              alt={founderMedia.alt}
              width={1200}
              height={1500}
              sizes="(max-width: 760px) 100vw, 44vw"
            />
          </figure>
          <div>
            <p className="eyebrow">Randy / Experience</p>
            <h2 id="about-randy">
              <span>23+ Years</span> of Coatings Experience
            </h2>
            <p className="lead lead--tight">
              Randy remains a hands-on owner, involved in the work and the standards behind Kiwi projects.
              His experience shows up in the parts of a floor most people never see: the prep, the product
              choice, the system, and the details before the finish is complete.
            </p>
            <div className="actions">
              <Link className="button secondary" href="/founders-statement">
                Read Randy&apos;s Founder Statement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-standard" aria-labelledby="about-standard">
        <div className="inner">
          <div className="about-standard-heading">
            <p className="eyebrow">The Standard</p>
            <h2 id="about-standard">What the Work Comes Back To.</h2>
          </div>
          <div className="about-principles">
            <article>
              <span>01</span>
              <h3>Preparation Matters</h3>
              <p>A finished coating is only as good as the surface and system underneath it.</p>
            </article>
            <article>
              <span>02</span>
              <h3>The Right System Matters</h3>
              <p>
                Surface condition, exposure, intended use, and desired finish should determine the coating
                system.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>The Details Matter</h3>
              <p>
                Quality, craftsmanship, and attention to the small things are what separate a coating job from
                work someone is proud to put their name on.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-trust" aria-labelledby="about-company-info">
        <div className="inner about-trust-layout">
          <div>
            <p className="eyebrow">Local Trust</p>
            <h2 id="about-company-info">A Local Arizona Business.</h2>
          </div>
          <dl className="about-facts">
            <div>
              <dt>Licensed &amp; Bonded</dt>
              <dd>{site.license}</dd>
            </div>
            <div>
              <dt>Arizona Contractor</dt>
              <dd>{site.licenseNumber}</dd>
            </div>
            <div>
              <dt>Project Types</dt>
              <dd>Residential and commercial concrete coating projects</dd>
            </div>
            <div>
              <dt>Arizona Service Area</dt>
              <dd>
                {visibleServiceAreas}
                {serviceAreas.length > 8 ? ", and surrounding Arizona communities" : ""}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section about-cta story-act--dark">
        <div className="inner about-cta-inner">
          <p className="eyebrow">{site.licenseNumber}</p>
          <h2>Let&apos;s Build a Floor You&apos;ll Be Proud Of.</h2>
          <div className="actions">
            <Link className="button" href="/get-a-quote">
              Request a Quote
            </Link>
            <a className="button secondary" href={site.phoneHref}>
              Call Kiwi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
