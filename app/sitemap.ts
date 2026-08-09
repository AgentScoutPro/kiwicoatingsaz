import type { MetadataRoute } from "next";
import { cities, services, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/locations", "/gallery", "/about", "/contact", "/get-a-quote"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const cityRoutes = cities.map((city) => `/locations/${city.slug}`);
  const cityServiceRoutes = cities.flatMap((city) =>
    services.map((service) => `/service-areas/${city.slug}/${service.slug}`)
  );

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/service-areas") ? 0.7 : 0.8
  }));
}
