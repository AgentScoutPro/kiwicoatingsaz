import type { Metadata } from "next";
import { site } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

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
          <form className="grid two" name="quote-request">
            <label className="card">
              Name *
              <input name="name" required type="text" />
            </label>
            <label className="card">
              Email Address *
              <input name="email" required type="email" />
            </label>
            <label className="card">
              Phone Number
              <input name="phone" type="tel" />
            </label>
            <label className="card">
              Address
              <input name="address" type="text" />
            </label>
            <label className="card">
              Service Requested
              <select name="service" defaultValue={selectedService || ""}>
                <option value="" disabled>Select a service</option>
                {site.quoteOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="card">
              Anything you'd like to add?
              <textarea maxLength={180} name="message" rows={5} />
            </label>
            <button className="button" type="submit">Request Free Estimate</button>
          </form>
          <div className="actions">
            <a className="button secondary" href={site.reviewUrl} target="_blank" rel="noreferrer">Write a Review</a>
            <a className="button secondary" href={site.socials.instagram} target="_blank" rel="noreferrer">Follow {site.socialHandle}</a>
          </div>
        </div>
      </section>
    </>
  );
}
