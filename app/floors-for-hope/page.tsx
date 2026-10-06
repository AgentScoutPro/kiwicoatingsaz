import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FloorsForHopeNominationForm } from "@/components/FloorsForHopeNominationForm";
import { site } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

const campaignImage = "/media/kiwi/finishes/kiwi-custom-blend-tray-01.jpg";

export const metadata: Metadata = createPageMetadata({
  title: "Floors for Hope",
  description:
    "Nominate someone for Kiwi Coatings AZ's Floors for Hope community initiative, created to provide a free garage floor coating to a selected recipient.",
  path: "/floors-for-hope",
  image: `${site.url}${campaignImage}`
});

export default function FloorsForHopePage() {
  return (
    <div className="floors-for-hope-page">
      <section className="floors-hope-hero">
        <div className="floors-hope-hero-media" aria-hidden="true">
          <Image src={campaignImage} alt="" fill sizes="100vw" priority />
        </div>
        <div className="floors-hope-hero-scrim" aria-hidden="true" />
        <div className="inner floors-hope-hero-content">
          <p className="eyebrow">Community Initiative</p>
          <h1>Floors for Hope</h1>
          <p className="lead">
            Kiwi Coatings is creating a community initiative to provide a free garage floor coating to a
            selected recipient. Use this page to nominate someone you believe should be considered.
          </p>
          <div className="actions">
            <a className="button" href="#nomination-form">
              Nominate Someone
            </a>
            <Link className="button secondary" href="/contact">
              Contact Kiwi Coatings
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="floors-hope-about">
        <div className="inner floors-hope-split">
          <div>
            <p className="eyebrow">Floors for Hope</p>
            <h2 id="floors-hope-about">A Garage Floor for Someone the Community Wants to Lift Up.</h2>
          </div>
          <div>
            <p className="lead lead--tight">
              Floors for Hope is organized by Kiwi Coatings as a way to help a deserving person, family, or
              community member with a professionally coated garage floor.
            </p>
            <p>
              If there is someone in your life whose story should be considered, share the nomination below.
              The nomination will open in your email application so you can review it and send it directly to
              Kiwi Coatings.
            </p>
          </div>
        </div>
      </section>

      <section className="section story-act--dark" aria-labelledby="how-to-nominate">
        <div className="inner">
          <div className="section-kicker-row">
            <div>
              <p className="eyebrow">How to Nominate</p>
              <h2 id="how-to-nominate">Three Simple Steps.</h2>
            </div>
          </div>
          <div className="grid three floors-hope-steps">
            <article className="card">
              <span>01</span>
              <h3>Tell Us Who</h3>
              <p>Share who you are nominating and how Kiwi Coatings can contact them if needed.</p>
            </article>
            <article className="card">
              <span>02</span>
              <h3>Share Their Story</h3>
              <p>Explain why you believe this person should be considered for Floors for Hope.</p>
            </article>
            <article className="card">
              <span>03</span>
              <h3>Send It to Kiwi</h3>
              <p>Your email app will open with the nomination ready to review and send.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="nomination-form" aria-labelledby="nomination-form-title">
        <div className="inner floors-hope-form-layout">
          <div>
            <p className="eyebrow">Nomination Form</p>
            <h2 id="nomination-form-title">Nominate Someone for Floors for Hope.</h2>
            <p className="lead">
              Required fields are marked with an asterisk. The website will prepare an email addressed to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>; you will still need to send it from your
              email application.
            </p>
          </div>
          <FloorsForHopeNominationForm />
        </div>
      </section>
    </div>
  );
}
