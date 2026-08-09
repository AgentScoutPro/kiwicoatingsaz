import Link from "next/link";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div>
          <strong>{site.name}</strong>
          <p>{site.accreditation}</p>
          <p>
            <a href={site.bbbUrl} target="_blank" rel="noreferrer">BBB profile</a>
          </p>
        </div>
        <div>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <Link href="/contact">Request a quote</Link>
          </p>
          <p>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
            {" / "}
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </p>
          <p>
            <a href={site.reviewUrl} target="_blank" rel="noreferrer">Write a Review</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
