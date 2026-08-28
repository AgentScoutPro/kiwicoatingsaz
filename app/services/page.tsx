import type { Metadata } from "next";
import Link from "next/link";
import { getService } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Floor Coating Services",
  description: "Compare Kiwi Coatings AZ garage, epoxy, polyaspartic, flake, quartz, patio, pool deck, metallic, specialty, and commercial floor coating services.",
  path: "/services"
});

const serviceGroups = [
  {
    eyebrow: "Garage + Protective Systems",
    title: "Durable systems for daily-use concrete",
    intro:
      "These pages help homeowners compare the core protective systems used for garages, workshops, storage areas, and concrete that sees regular traffic.",
    services: ["garage-floor-coatings", "polyaspartic-floor-coatings", "epoxy-floor-coatings"]
  },
  {
    eyebrow: "Decorative + Premium Systems",
    title: "Finishes with more texture, depth, or personality",
    intro:
      "Decorative systems can make a floor feel designed, but they still need the right preparation, coating build, topcoat, and maintenance expectations.",
    services: ["metallic-epoxy-floors", "flake-floor-systems", "quartz-floor-coatings", "specialty-floor-finishes"]
  },
  {
    eyebrow: "Outdoor",
    title: "Coatings for patios, pool decks, and backyard concrete",
    intro:
      "Outdoor concrete needs a different conversation around sun exposure, texture, water, dust, drainage, and the way the space is used.",
    services: ["patio-and-pool-deck-coatings"]
  },
  {
    eyebrow: "Commercial",
    title: "Cleaner, stronger surfaces for business spaces",
    intro:
      "Commercial coating systems should be selected around foot traffic, cleaning routines, customer-facing appearance, scheduling, and the work performed in the space.",
    services: ["commercial-floor-coatings"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Services</p>
          <h1>Floor coating services for Arizona homes and businesses.</h1>
          <p className="lead">
            Kiwi Coatings AZ helps customers choose coating systems around location, surface use, appearance, traffic, UV exposure, traction needs, and maintenance preference.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="inner grid two">
          <div>
            <p className="eyebrow">How to Compare Systems</p>
            <h2>Start with the surface, then choose the finish</h2>
          </div>
          <div>
            <p>
              A garage floor, patio, showroom, and utility space do not need the same coating conversation. The right system depends on whether the concrete is indoors or outside, how much traffic it sees, whether sunlight reaches it, how much texture is appropriate, and how the owner wants to clean and maintain it.
            </p>
            <p>
              Use the service groups below to compare protective, decorative, outdoor, and commercial coating options before narrowing the project to a specific system.
            </p>
          </div>
        </div>
      </section>
      {serviceGroups.map((group) => (
        <section className="section" key={group.eyebrow}>
          <div className="inner">
            <p className="eyebrow">{group.eyebrow}</p>
            <h2>{group.title}</h2>
            <p className="lead">{group.intro}</p>
            <div className="grid three">
              {group.services.map((slug) => {
                const service = getService(slug);

                if (!service) {
                  return null;
                }

                return (
                  <Link className="card" href={`/services/${service.slug}`} key={service.slug}>
                    <h3>{service.name}</h3>
                    <p>{service.shortDescription}</p>
                    <p>
                      Learn about {service.shortName.toLowerCase()}, common applications, finish options, Arizona considerations, and related coating systems.
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}
      <section className="section">
        <div className="inner">
          <h2>Not sure which coating system fits?</h2>
          <p className="lead">
            Share the surface, location, current concrete condition, and how the space will be used. Kiwi Coatings AZ can help compare options without forcing every project into the same system.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">Request a Quote</Link>
            <Link className="button secondary" href="/locations">View Service Areas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
