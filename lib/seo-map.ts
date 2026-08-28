import { cities, getCity, getService, services } from "@/lib/site-data";

export type LocalSeoTier = "tier-1" | "tier-2" | "tier-3";

export type LocalSeoPage = {
  city: string;
  service: string;
  tier: LocalSeoTier;
  indexable: boolean;
};

export const tier1CitySlugs = [
  "mesa",
  "gilbert",
  "chandler",
  "queen-creek",
  "san-tan-valley",
  "casa-grande"
] as const;

export const tier1ServiceSlugs = [
  "garage-floor-coatings",
  "polyaspartic-floor-coatings",
  "epoxy-floor-coatings",
  "patio-and-pool-deck-coatings",
  "metallic-epoxy-floors"
] as const;

const tier1CitySet = new Set<string>(tier1CitySlugs);
const tier1ServiceSet = new Set<string>(tier1ServiceSlugs);

export const tier1LocalSeoPages: LocalSeoPage[] = tier1CitySlugs.flatMap((city) =>
  tier1ServiceSlugs.map((service) => ({
    city,
    service,
    tier: "tier-1",
    indexable: true
  }))
);

export const futureExpansionPages: LocalSeoPage[] = cities
  .filter((city) => city.verified)
  .flatMap((city) =>
    services.map((service) => ({
      city: city.slug,
      service: service.slug,
      tier: "tier-2" as const,
      indexable: false
    }))
  )
  .filter((page) => !isTier1LocalSeoPage(page.city, page.service));

export function isTier1LocalSeoPage(citySlug: string, serviceSlug: string) {
  return tier1CitySet.has(citySlug) && tier1ServiceSet.has(serviceSlug);
}

export function getLocalSeoPage(citySlug: string, serviceSlug: string): LocalSeoPage | undefined {
  const city = getCity(citySlug);
  const service = getService(serviceSlug);

  if (!city || !service) {
    return undefined;
  }

  if (isTier1LocalSeoPage(citySlug, serviceSlug)) {
    return {
      city: citySlug,
      service: serviceSlug,
      tier: "tier-1",
      indexable: true
    };
  }

  if (city.verified) {
    return {
      city: citySlug,
      service: serviceSlug,
      tier: "tier-2",
      indexable: false
    };
  }

  return {
    city: citySlug,
    service: serviceSlug,
    tier: "tier-3",
    indexable: false
  };
}

export function getIndexableLocalSeoPages() {
  return tier1LocalSeoPages;
}

export function getGeneratedLocalSeoPages() {
  return [...tier1LocalSeoPages, ...futureExpansionPages];
}

export function getVerifiedCities() {
  return cities.filter((city) => city.verified);
}

export function getPrimaryVerifiedCities() {
  return cities.filter((city) => city.verified && city.featured);
}

export function getFutureCities() {
  return cities.filter((city) => !city.verified);
}
