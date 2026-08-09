import Link from "next/link";
import { cities, services } from "@/lib/site-data";

export function ServiceGrid() {
  return (
    <div className="grid three">
      {services.map((service) => (
        <Link className="card" href={`/services/${service.slug}`} key={service.slug}>
          <h3>{service.name}</h3>
          <p>{service.short}</p>
        </Link>
      ))}
    </div>
  );
}

export function CityGrid() {
  return (
    <div className="grid three">
      {cities.map((city) => (
        <Link className="card" href={`/locations/${city.slug}`} key={city.slug}>
          <h3>{city.name}</h3>
          <p>
            Floor coating services for {city.focus} in {city.county}.
          </p>
        </Link>
      ))}
    </div>
  );
}

export function CityServiceLinks({ citySlug }: { citySlug: string }) {
  return (
    <div className="service-links">
      {services.map((service) => (
        <Link href={`/service-areas/${citySlug}/${service.slug}`} key={service.slug}>
          {service.name}
        </Link>
      ))}
    </div>
  );
}

export function ServiceCityLinks({ serviceSlug }: { serviceSlug: string }) {
  return (
    <div className="service-links">
      {cities.map((city) => (
        <Link href={`/service-areas/${city.slug}/${serviceSlug}`} key={city.slug}>
          {city.name}
        </Link>
      ))}
    </div>
  );
}
