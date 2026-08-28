import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  CommercialAct,
  DesignAct,
  EnvironmentAct,
  FAQAct,
  FinalCTA,
  GarageAct,
  HomeHero,
  HomeServiceLinks,
  KiwiSystemAct,
  OutdoorAct,
  ProcessAct,
  ProjectsAct,
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
    <>
      <JsonLd
        data={createLocalBusinessSchema()}
      />
      <JsonLd data={createFaqSchema(homeFaqs)} />
      <HomeHero />
      <EnvironmentAct />
      <KiwiSystemAct />
      <GarageAct />
      <OutdoorAct />
      <DesignAct />
      <CommercialAct />
      <ProcessAct />
      <ProjectsAct />
      <WhyKiwiAct />
      <ReviewsAct />
      <ServiceAreasAct />
      <HomeServiceLinks />
      <FAQAct />
      <FinalCTA />
    </>
  );
}
