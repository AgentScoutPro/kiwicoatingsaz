import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Get a Quote",
  description: "Request a Kiwi Coatings AZ floor coating quote for a garage, patio, pool deck, commercial floor, or specialty finish project.",
  path: "/get-a-quote"
});

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function GetAQuotePage({ searchParams }: Props) {
  const { service } = await searchParams;
  redirect(service ? `/contact?service=${encodeURIComponent(service)}` : "/contact");
}
