import type { Metadata } from "next";
import { site } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";
import { ContactQuoteForm } from "@/components/ContactQuoteForm";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Request a quote from Kiwi Coatings AZ for garage, epoxy, polyaspartic, flake, quartz, patio, pool deck, and commercial floor coatings.",
  path: "/contact"
});

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const selectedService = site.quoteOptions.includes(service ?? "") ? service : "";

  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Contact</p>
          <h1>Request Your Free Kiwi Coatings AZ Estimate.</h1>
          <p className="lead">
            Call, email, or send project details so Kiwi Coatings AZ can follow up with a free estimate for the
            surface, service type, and location.
          </p>
          <div className="actions">
            <a className="button" href={site.phoneHref}>Call {site.phone}</a>
            <a className="button secondary" href={`mailto:${site.email}`}>Email {site.email}</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <ContactQuoteForm selectedService={selectedService || ""} />
          <div className="actions">
            <a className="button secondary" href={site.reviewUrl} target="_blank" rel="noreferrer">Write a Review</a>
            <a className="button secondary" href={site.socials.instagram} target="_blank" rel="noreferrer">Follow {site.socialHandle}</a>
          </div>
        </div>
      </section>
    </>
  );
}
