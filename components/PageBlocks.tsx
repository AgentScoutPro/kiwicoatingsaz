import Link from "next/link";
import { cities, services } from "@/lib/site-data";
import { getIndexableLocalSeoPages, getVerifiedCities } from "@/lib/seo-map";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.path}>
          {index > 0 ? " / " : null}
          {index === items.length - 1 ? item.name : <Link href={item.path}>{item.name}</Link>}
        </span>
      ))}
    </nav>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid three">
      {services.map((service) => (
        <Link className="card" href={`/services/${service.slug}`} key={service.slug}>
          {service.liveSiteGroup ? <p className="eyebrow">{service.liveSiteGroup}</p> : null}
          <h3>{service.name}</h3>
          <p>{service.shortDescription}</p>
        </Link>
      ))}
    </div>
  );
}

export function CityGrid() {
  const visibleCities = getVerifiedCities();

  return (
    <div className="grid three">
      {visibleCities.map((city) => (
        <Link className="card" href={`/locations/${city.slug}`} key={city.slug}>
          <h3>{city.name}</h3>
          <p>
            Floor coating services for {city.localFocus} in {city.county}.
          </p>
        </Link>
      ))}
    </div>
  );
}

export function CityServiceLinks({ citySlug }: { citySlug: string }) {
  const indexableServiceSlugs = new Set(
    getIndexableLocalSeoPages()
      .filter((page) => page.city === citySlug)
      .map((page) => page.service)
  );
  const visibleServices = services.filter((service) => indexableServiceSlugs.has(service.slug));

  return (
    <div className="service-links">
      {visibleServices.map((service) => (
        <Link href={`/service-areas/${citySlug}/${service.slug}`} key={service.slug}>
          {service.name}
        </Link>
      ))}
    </div>
  );
}

export function ServiceCityLinks({ serviceSlug }: { serviceSlug: string }) {
  const indexableCitySlugs = new Set(
    getIndexableLocalSeoPages()
      .filter((page) => page.service === serviceSlug)
      .map((page) => page.city)
  );
  const visibleCities = cities.filter((city) => indexableCitySlugs.has(city.slug));

  return (
    <div className="service-links">
      {visibleCities.map((city) => (
        <Link href={`/service-areas/${city.slug}/${serviceSlug}`} key={city.slug}>
          {city.name}
        </Link>
      ))}
    </div>
  );
}
