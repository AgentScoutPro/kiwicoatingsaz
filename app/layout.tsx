import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/site-data";
import { createLocalBusinessSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kiwi Coatings AZ | Arizona Floor Coatings",
    template: "%s | Kiwi Coatings AZ"
  },
  description:
    "Durable epoxy, polyaspartic, flake, quartz, patio, pool deck, garage, and commercial floor coatings from Kiwi Coatings AZ.",
  openGraph: {
    siteName: site.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={createLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
