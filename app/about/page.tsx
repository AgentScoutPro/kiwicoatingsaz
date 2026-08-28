import type { Metadata } from "next";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kiwi Coatings AZ, a licensed and bonded floor coating contractor based near Coolidge, Arizona.",
  robots: {
    index: false,
    follow: true
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">About</p>
          <h1>Arizona floor coating work with a local contractor foundation.</h1>
          <p className="lead">
            Kiwi Coatings AZ is a licensed and bonded residential general contractor located in the Coolidge, AZ area, serving homeowners and businesses with durable concrete coating systems.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="inner grid two">
          <div>
            <h2>Company Signals</h2>
            <ul className="list">
              <li>{site.license}</li>
              <li>Based in the Coolidge, AZ area</li>
              <li>Serving central Arizona with residential and commercial floor coatings</li>
            </ul>
          </div>
          <div className="card">
            <h3>How Kiwi Coatings AZ Works</h3>
            <p>
              The team helps customers choose coating systems around the surface condition, intended use, finish style, and long-term maintenance needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
