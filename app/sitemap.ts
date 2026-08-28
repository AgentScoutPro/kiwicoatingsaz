import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site-data";
import { getIndexableLocalSeoPages, getVerifiedCities } from "@/lib/seo-map";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentLastModified);
  const staticRoutes = ["", "/services", "/locations", "/contact", "/get-a-quote"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const cityRoutes = getVerifiedCities().map((city) => `/locations/${city.slug}`);
  const cityServiceRoutes = getIndexableLocalSeoPages().map(
    (page) => `/service-areas/${page.city}/${page.service}`
  );

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/service-areas") ? 0.7 : 0.8
  }));
}
