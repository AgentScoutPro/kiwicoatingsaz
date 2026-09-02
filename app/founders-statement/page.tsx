import Image from "next/image";
import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/HomeStoryActs";
import { createPageMetadata } from "@/lib/seo";

const founderImage = "/images/founder/randy-hoffschneider-founder-kiwi-coatings.jpg";

export const metadata: Metadata = createPageMetadata({
  title: "A Message From Our Founder",
  description:
    "Read a personal founder statement from Randy Hoffschneider, founder and owner of Kiwi Coatings AZ.",
  path: "/founders-statement",
  image: founderImage
});

export default function FoundersStatementPage() {
  return (
    <>
      <main className="founder-statement-page">
        <section className="founder-statement-hero">
          <div className="inner founder-statement-intro">
            <p className="eyebrow">Founder&apos;s Statement</p>
            <h1>A Message From Our Founder</h1>
            <p className="lead">
              23+ years of experience. One simple standard: if you&apos;re going to put your name on
              something, do it right.
            </p>
          </div>
        </section>

        <section className="founder-statement-section" aria-labelledby="founder-letter-heading">
          <div className="inner founder-statement-layout">
            <article className="founder-statement-copy">
              <h2 id="founder-letter-heading" className="sr-only">
                Randy Hoffschneider founder statement
              </h2>
              <p>
                Kiwi Coatings was built on a simple belief:{" "}
                <strong>if you&apos;re going to put your name on something, do it right.</strong>
              </p>
              <p>
                After more than 23 years in the coatings industry, I&apos;ve learned that great work is
                about much more than the products you use. It&apos;s about preparation, attention to detail,
                understanding the materials, and caring about the finished product as if it were going into
                your own home.
              </p>
              <p>When I started Kiwi Coatings, I wanted to build a company that reflected those principles.</p>
              <p>
                We believe in doing our research before we recommend a system. We believe in using
                professional-quality products that are right for the application—not simply what is easiest or
                cheapest. And we believe our customers deserve honest communication, dependable service, and a
                finished floor we can both be proud of.
              </p>
              <p>
                I&apos;ve been fortunate throughout my career to work on everything from residential and specialty
                coatings to projects in the aviation industry, including having a hand in painting a B-52 now
                displayed at the Pima Air &amp; Space Museum. Those experiences taught me that whether you&apos;re
                working on an aircraft or someone&apos;s garage floor,{" "}
                <strong className="founder-statement-detail">the details matter.</strong>
              </p>
              <p>
                Today, I&apos;m still very much a hands-on owner. You&apos;ll find me involved in the projects,
                working alongside our team and making sure the standards we built Kiwi Coatings around are
                carried through every job.
              </p>
              <p>But Kiwi Coatings is about more than beautiful floors.</p>
              <p>
                It&apos;s about building a local company our family can be proud of, treating people the way we
                would want to be treated, supporting the communities that support us, and creating something
                that lasts.
              </p>
              <p>
                We know you have choices when deciding who to trust with your home. We don&apos;t take that trust
                lightly.
              </p>
              <p className="founder-statement-manifesto">
                <strong>Quality. Integrity. Craftsmanship. And treating people right.</strong>
              </p>
              <p>
                That&apos;s what Kiwi Coatings was founded on, and that&apos;s what we intend to stand for for many
                years to come.
              </p>
              <p>Thank you for considering Kiwi Coatings and for supporting a local Arizona business.</p>

              <footer className="founder-signature" aria-label="Founder signature">
                <strong>Randy Hoffschneider</strong>
                <span>Founder &amp; Owner</span>
                <span>Kiwi Coatings</span>
              </footer>
            </article>

            <aside className="founder-portrait-wrap" aria-label="Portrait of Randy Hoffschneider">
              <Image
                src={founderImage}
                alt="Randy Hoffschneider, founder and owner of Kiwi Coatings AZ"
                width={3391}
                height={5086}
                className="founder-portrait"
                sizes="(max-width: 760px) 100vw, 44vw"
                priority
              />
            </aside>
          </div>
        </section>
      </main>
      <FinalCTA />
    </>
  );
}
