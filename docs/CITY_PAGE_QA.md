# Kiwi Coatings AZ City Page QA

Date: 2026-08-27

## Scope

This phase built local city authority hubs for the verified markets at `/locations/[city]`.

Verified city hubs completed:

- Mesa
- Chandler
- Gilbert
- Queen Creek
- San Tan Valley
- Maricopa
- Casa Grande
- Apache Junction
- Gold Canyon
- Florence
- Coolidge
- Phoenix / Greater Phoenix

No unverified markets were added to the sitemap.

## Template Coverage

Each verified city page includes:

- H1: `Floor Coatings in [City], AZ`
- Unique city introduction
- Local property and use context
- Featured service recommendations
- Arizona concrete conditions
- Why Kiwi credibility section
- Local service links
- Future project proof slot
- Future review proof slot
- Nearby verified service area links
- City-specific FAQ
- Final quote CTA

## SEO Coverage

Each verified city page includes:

- Unique title
- Unique meta description
- Self-referencing canonical
- Visible HTML breadcrumbs
- BreadcrumbList JSON-LD
- FAQPage JSON-LD
- Local HomeAndConstructionBusiness area schema
- One H1
- Semantic section and heading structure

## Render QA

QA was performed against a local production server at `http://127.0.0.1:3014`.

| URL | Status | H1 Count | Word Count | Internal Links | Schema |
| --- | ---: | ---: | ---: | ---: | --- |
| `/locations/mesa` | 200 | 1 | 677 | 27 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/chandler` | 200 | 1 | 640 | 27 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/gilbert` | 200 | 1 | 636 | 27 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/queen-creek` | 200 | 1 | 666 | 27 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/san-tan-valley` | 200 | 1 | 665 | 27 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/maricopa` | 200 | 1 | 602 | 22 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/casa-grande` | 200 | 1 | 626 | 27 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/apache-junction` | 200 | 1 | 619 | 22 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/gold-canyon` | 200 | 1 | 602 | 22 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/florence` | 200 | 1 | 584 | 22 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/coolidge` | 200 | 1 | 613 | 22 | Breadcrumb, FAQ, LocalBusiness |
| `/locations/phoenix` | 200 | 1 | 624 | 22 | Breadcrumb, FAQ, LocalBusiness |

All tested city pages returned:

- No malformed internal links
- Self-canonical URL matching the route
- FAQPage schema present
- BreadcrumbList schema present
- Local HomeAndConstructionBusiness schema present

## Sitemap QA

Confirmed in `/sitemap.xml`:

- All 12 verified city hubs are included.
- `/locations/tempe` is not included.
- `/locations/scottsdale` is not included.

## Build QA

Command run:

```bash
npm run build
```

Result:

- Build passed
- TypeScript passed
- Static generation completed successfully
