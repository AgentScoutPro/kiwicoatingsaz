# Kiwi Coatings AZ Technical SEO QA

Date: 2026-08-27

## Scope

This phase focused on technical SEO only:

- Canonical architecture
- Route-level titles and meta descriptions
- OpenGraph and Twitter metadata
- LocalBusiness / HomeAndConstructionBusiness schema
- Service schema
- Visible breadcrumbs
- BreadcrumbList JSON-LD
- Sitemap eligibility and stable `lastModified`
- Robots output
- NAP consistency

No homepage redesign was performed.

## Canonicals

The root layout no longer applies `/` as an inherited canonical to every route.

Each route now self-canonicalizes through route-level metadata:

- `/`
- `/services`
- `/services/[service]`
- `/locations`
- `/locations/[city]`
- `/service-areas/[city]/[service]`
- `/about`
- `/gallery`
- `/contact`
- `/get-a-quote`

Dynamic local service pages self-canonicalize only to their own URL. Non-indexable Tier 2 pages receive `noindex` metadata and are excluded from the XML sitemap.

## Metadata

Reusable metadata generation now lives in `lib/seo.ts`.

Each metadata-enabled page receives:

- Unique `<title>`
- Unique meta description
- Self-referencing canonical
- OpenGraph title, description, URL, site name, image, locale, and type
- Twitter card, title, description, and image
- Optional `noindex` handling

## Schema

Reusable schema helpers now live in `lib/seo.ts`.

Local business schema uses only verified information:

- `name`: Kiwi Coatings AZ
- `legalName`: KiwiCoatings LLC
- `url`: `https://kiwicoatingsaz.com`
- `telephone`: `+1-602-901-1823`
- `email`: `randy@kiwicoatingsaz.com`
- `identifier`: `ROC #363582`
- `logo`: existing Kiwi logo URL
- `image`: existing Kiwi hero image URL
- `sameAs`: existing Facebook and Instagram URLs
- `areaServed`: verified markets from `lib/site-data.ts`

No street address was added or fabricated.

Service schema is generated for:

- Service pages
- Approved/generated local service pages

BreadcrumbList JSON-LD is generated for:

- Service pages
- City pages
- Local service pages

## Breadcrumbs

Visible HTML breadcrumbs were added through `components/PageBlocks.tsx`.

Implemented on:

- `/services/[service]`
- `/locations/[city]`
- `/service-areas/[city]/[service]`

The breadcrumb component is ready to reuse for project/case study pages later.

## Sitemap

The sitemap includes only intended indexable URLs:

- Homepage
- Service hub
- Location hub
- Contact
- Get a Quote redirect path
- 9 service pages
- 12 verified city pages
- 30 Tier 1 local service pages

The sitemap excludes:

- `/about`
- `/gallery`
- Tier 2 local service combinations
- Tier 3 unverified-market combinations

`lastModified` now uses the stable `site.contentLastModified` value instead of `new Date()` per request.

Current stable value:

`2026-08-27`

## Robots

Robots output allows normal crawling:

```txt
User-Agent: *
Allow: /

Sitemap: https://kiwicoatingsaz.com/sitemap.xml
```

Required Next.js assets are not blocked.

Unfinished pages are controlled with sitemap omission and page-level `noindex` where needed instead of blanket asset or route blocking.

## NAP Consistency

Centralized values in `lib/site-data.ts` now include:

- Business name
- Legal name
- Phone display value
- E.164 phone value
- Phone href
- Email
- License number
- Service areas
- Social URLs
- Review URL
- Stable content last-modified date

The project-supplied Google Maps link is now used:

`https://share.google/3dHiI8OBoD4IYFHeH`

## Spot Checks

Spot checks were performed against a local production server at `http://127.0.0.1:3010`.

### Homepage

- Title: `Arizona Floor Coatings`
- Description: `Kiwi Coatings AZ installs garage, epoxy, polyaspartic, patio, pool deck, metallic, flake, quartz, and commercial floor coatings across central Arizona.`
- Canonical: `https://kiwicoatingsaz.com`
- Robots: indexable
- OpenGraph URL: `https://kiwicoatingsaz.com`
- Twitter card: `summary_large_image`
- LocalBusiness schema: present

### Garage Floor Service Page

- URL: `/services/garage-floor-coatings`
- Title: `Garage Floor Coatings in Arizona | Kiwi Coatings AZ`
- Canonical: `https://kiwicoatingsaz.com/services/garage-floor-coatings`
- Robots: indexable
- Service schema: present
- BreadcrumbList schema: present

### Gilbert City Page

- URL: `/locations/gilbert`
- Title: `Floor Coatings in Gilbert, AZ | Kiwi Coatings AZ`
- Canonical: `https://kiwicoatingsaz.com/locations/gilbert`
- Robots: indexable
- BreadcrumbList schema: present

### Gilbert Garage Floor Page

- URL: `/service-areas/gilbert/garage-floor-coatings`
- Title: `Garage Floor Coatings in Gilbert, AZ | Kiwi Coatings AZ`
- Canonical: `https://kiwicoatingsaz.com/service-areas/gilbert/garage-floor-coatings`
- Robots: indexable
- Service schema: present
- BreadcrumbList schema: present

### About

- URL: `/about`
- Title: `About | Kiwi Coatings AZ`
- Canonical: `https://kiwicoatingsaz.com/about`
- Robots: `noindex, follow`
- OpenGraph URL: `https://kiwicoatingsaz.com/about`

### Contact

- URL: `/contact`
- Title: `Contact | Kiwi Coatings AZ`
- Canonical: `https://kiwicoatingsaz.com/contact`
- Robots: indexable
- OpenGraph URL: `https://kiwicoatingsaz.com/contact`

## Sitemap Spot Check

Confirmed:

- `/about` is not included
- `/gallery` is not included
- Tier 1 URL `/service-areas/gilbert/garage-floor-coatings` is included
- Tier 2 URL `/service-areas/gilbert/commercial-floor-coatings` is not included
- Sitemap contains stable `2026-08-27T00:00:00.000Z` last modified values

## Build Verification

Command run:

```bash
npm run build
```

Result:

- Build passed
- TypeScript passed
- Static generation completed successfully
