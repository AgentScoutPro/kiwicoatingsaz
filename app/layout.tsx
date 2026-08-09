import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kiwi Coatings AZ | Arizona Floor Coatings",
    template: "%s | Kiwi Coatings AZ"
  },
  description:
    "Durable epoxy, polyaspartic, flake, quartz, patio, pool deck, garage, and commercial floor coatings from Kiwi Coatings AZ.",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
