import type { Metadata } from "next";
import { City, Service, site } from "@/lib/site-data";
import { getVerifiedCities } from "@/lib/seo-map";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = site.heroImage,
  noindex = false
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      images: image ? [{ url: image }] : undefined,
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: image ? [image] : undefined
    },
    robots: noindex
      ? {
          index: false,
          follow: true
        }
      : undefined
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    logo: site.logo,
    image: site.heroImage,
    identifier: site.licenseNumber,
    sameAs: [site.socials.facebook, site.socials.instagram],
    areaServed: getVerifiedCities().map((city) => ({
      "@type": "City",
      name: `${city.name}, AZ`
    }))
  };
}

export function createServiceSchema(service: Service, path: string, city?: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: city ? `${service.name} in ${city.name}, AZ` : service.name,
    serviceType: service.name,
    description: service.shortDescription,
    provider: {
      "@id": `${site.url}/#business`,
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      telephone: site.phoneE164,
      email: site.email
    },
    image: service.image,
    areaServed: city
      ? {
          "@type": "City",
          name: `${city.name}, AZ`
        }
      : getVerifiedCities().map((market) => ({
          "@type": "City",
          name: `${market.name}, AZ`
        })),
    url: absoluteUrl(path)
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function createFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
