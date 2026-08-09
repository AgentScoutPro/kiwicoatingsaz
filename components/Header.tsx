import Link from "next/link";
import { site } from "@/lib/site-data";

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/">
          {site.name}
        </Link>
        <div className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/locations">Service Areas</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a className="button" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </div>
      </nav>
    </header>
  );
}
