import type { Metadata } from "next";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote from Kiwi Coatings AZ for garage, epoxy, polyaspartic, flake, quartz, patio, pool deck, and commercial floor coatings."
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Contact</p>
          <h1>Request a Kiwi Coatings AZ quote.</h1>
          <p className="lead">
            Call, email, or use the quote form placeholder below. This technical pass reserves the conversion structure before final CRM or form handling is connected.
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
              Name
              <input name="name" type="text" />
            </label>
            <label className="card">
              Phone
              <input name="phone" type="tel" />
            </label>
            <label className="card">
              Email
              <input name="email" type="email" />
            </label>
            <label className="card">
              City
              <input name="city" type="text" />
            </label>
            <label className="card">
              Service Requested
              <input name="service" type="text" />
            </label>
            <label className="card">
              Project Notes
              <textarea name="message" rows={5} />
            </label>
            <button className="button" type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
}
