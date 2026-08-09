import Link from "next/link";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div>
          <strong>{site.name}</strong>
          <p>{site.license}</p>
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
        </div>
      </div>
    </footer>
  );
}
