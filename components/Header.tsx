import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-data";

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/">
          <Image
            src={site.logoPath}
            alt="Kiwi Coatings AZ"
            width={140}
            height={140}
            className="brand-logo"
            priority
          />
        </Link>

        <input type="checkbox" id="nav-toggle" className="nav-toggle-input" aria-hidden="true" />
        <label htmlFor="nav-toggle" className="nav-toggle" aria-label="Open menu">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </label>

        <div className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/locations">Service Areas</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/founders-statement">Founder</Link>
          <Link href="/contact">Contact</Link>
          <a className="nav-phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <Link className="button" href="/get-a-quote">
            Request a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
