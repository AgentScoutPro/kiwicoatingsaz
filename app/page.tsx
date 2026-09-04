import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  ColorCraftAct,
  CommercialAct,
  DesignAct,
  EnvironmentAct,
  FAQAct,
  FinalCTA,
  GarageAct,
  HomeHero,
  HomeServiceLinks,
  KiwiSystemAct,
  ProcessAct,
  ReviewsAct,
  ServiceAreasAct,
  WhyKiwiAct
} from "@/components/home/HomeStoryActs";
import { homeFaqs } from "@/lib/home-page-content";
import { createFaqSchema, createLocalBusinessSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Arizona Floor Coatings",
  description:
    "Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings across central Arizona.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="home-page">
      <JsonLd
        data={createLocalBusinessSchema()}
      />
      <JsonLd data={createFaqSchema(homeFaqs)} />
      <HomeHero />
      <EnvironmentAct />
      <KiwiSystemAct />
      <GarageAct />
      <DesignAct />
      <CommercialAct />
      <ColorCraftAct />
      <ProcessAct />
      <WhyKiwiAct />
      <ReviewsAct />
      <ServiceAreasAct />
      <HomeServiceLinks />
      <FAQAct />
      <FinalCTA />
    </div>
  );
}
