# Kiwi Coatings AZ Current State Audit

Date: 2026-08-27

## Existing Route Architecture

The project is a Next.js App Router site. The current architecture is:

- `/` - homepage
- `/services` - service hub
- `/services/[service]` - individual service pages generated from `services`
- `/locations` - location hub
- `/locations/[city]` - city hub pages generated from `cities`
- `/service-areas/[city]/[service]` - city plus service pages generated from the full city and service cross-product
- `/about` - about page
- `/gallery` - gallery placeholder/media reference page
- `/contact` - contact/quote page
- `/get-a-quote` - redirect to `/contact`
- `/sitemap.xml` - generated sitemap
- `/robots.txt` - generated robots file

The main content source is `lib/site-data.ts`. Shared layout and linking components live in `components/Header.tsx`, `components/Footer.tsx`, `components/JsonLd.tsx`, and `components/PageBlocks.tsx`.

## Current Services

There are 9 services:

- Garage Floor Coatings
- Polyaspartic Floor Coatings
- Epoxy Floor Coatings
- Metallic Epoxy Floors
- Flake Floor Systems
- Quartz Floor Coatings
- Patio and Pool Deck Coatings
- Commercial Floor Coatings
- Specialty Floor Finishes

## Current Markets

There are 12 city markets:

- Coolidge
- Florence
- Casa Grande
- San Tan Valley
- Queen Creek
- Apache Junction
- Chandler
- Gilbert
- Mesa
- Tempe
- Scottsdale
- Phoenix

## Current Page Count

Current generated and static route count:

- Static user-facing routes: 8
- Service detail pages: 9
- City detail pages: 12
- City plus service pages: 108
- Sitemap and robots routes: 2
- Next.js not-found route shown in build output: 1

The current user-facing SEO URL count is 137 when counting `/sitemap.xml` and `/robots.txt`, and 135 when excluding those technical routes.

The current city x service generator creates 108 URLs:

`12 cities x 9 services = 108 city plus service pages`

The production build reported 140 static pages total because it also includes framework/system routes.

## Known SEO Issues

- The city plus service route currently creates every possible city and service combination, regardless of whether that combination has unique proof, project media, FAQs, or market-specific content.
- `/sitemap.xml` currently includes all 108 city plus service URLs, giving thin pages an indexable discovery path.
- `/robots.txt` allows all routes. There is no current robots-level holdback for unfinished generated pages.
- Canonicals exist on generated service, city, and city plus service pages, but they point every thin URL to itself. This is technically valid but risky while the pages are not launch-quality.
- Static pages such as `/services`, `/locations`, `/about`, `/gallery`, and `/contact` rely on inherited canonical behavior from the root layout unless explicit alternates are added later.
- Metadata templates are mostly formulaic. City plus service titles and descriptions are unique by token substitution, but not by substantive page content.
- The legal/business schema does not currently include the ROC number as a structured identifier.
- The homepage schema includes a locality-level address signal for Coolidge but no full street address. Do not add a street address unless confirmed by the business.
- Service schema is present on service and city plus service pages, but there is no deeper graph connecting services, organization identity, reviews, projects, service areas, or breadcrumbs.
- There is no BreadcrumbList schema on generated pages.
- There is no Review schema, AggregateRating schema, or testimonial markup. This is correct for now because no verified review content has been added, but it is a future gap.

## Thin-Content Risks

- `/service-areas/[city]/[service]` pages share almost the same structure and mostly reuse service intro, service benefits, and city focus copy.
- Many generated pages have no project photos, local examples, neighborhood references, city-specific FAQs, or proof.
- City hub pages are brief and mainly act as link lists.
- Service pages are brief and mainly act as link lists into all cities.
- The current internal linking pattern may encourage crawl discovery of unfinished local URLs before those URLs have enough unique value.
- Specialty service pages need careful validation because not every specialty finish may be appropriate to promote equally in every market without examples or business confirmation.

## Technical Issues

- The build is clean after `npm install` and `npm run build`.
- The contact form has no submission handler, action endpoint, CRM integration, email integration, spam protection, or success/error state.
- `/get-a-quote` redirects to `/contact`, which is fine as a preservation route, but it should be tracked in analytics once analytics are added.
- The gallery page links directly to image URLs and displays filenames instead of a finished visual gallery experience.
- Several assets are remote WordPress URLs from the existing site. This preserves references but leaves performance and long-term asset ownership unresolved.
- The Google review URL in `lib/site-data.ts` is `https://maps.app.goo.gl/ZiJsREsFixigTz8K8`, while the project brief supplied `https://share.google/3dHiI8OBoD4IYFHeH`. This should be confirmed before launch.
- `site.url` is set to `https://kiwicoatingsaz.com`, so metadata and sitemap output target the future production domain even while the current preview is on Vercel. This is expected for eventual launch but should be considered during preview indexing.

## Missing Content

- Founder/company story and verified expertise details
- Verified project/case study content
- Project photos mapped to services and cities
- Before-and-after proof
- Verified customer reviews or testimonials
- City-specific local proof
- Service-specific FAQs based on real customer questions
- Warranty, guarantee, manufacturer, financing, awards, years in business, project count, or address details, if and only if verified by the business
- Clear explanation of licensed and bonded status without overstating license classification beyond confirmed language
- Finished gallery copy and image presentation

## Missing Functionality

- Working quote form submission
- Spam protection for quote submissions
- Success and error states for form submission
- Analytics/conversion tracking
- Call/email/review click tracking
- Sitemap gating for pages not ready to index
- Noindex controls for unfinished local pages if they remain published but incomplete
- Project/case study routes
- Reviews/proof section or pages
- Breadcrumb UI and structured data

## Visible Placeholder or Development Copy

The following user-visible content should be removed or rewritten before production launch:

- `app/services/[service]/page.tsx` - heading: "What this page targets"
- `app/services/[service]/page.tsx` - paragraph explaining that the page "establishes the main relevance" and "links into every local version"
- `app/service-areas/[city]/[service]/page.tsx` - eyebrow: "Local service page"
- `app/service-areas/[city]/[service]/page.tsx` - lead sentence saying the page is "structured to target local searches"
- `app/service-areas/[city]/[service]/page.tsx` - paragraph saying the page "can later be expanded"
- `app/about/page.tsx` - card heading: "Content Needed Next"
- `app/about/page.tsx` - paragraph listing content to add later
- `app/gallery/page.tsx` - heading: "project media references"
- `app/gallery/page.tsx` - lead sentence saying the page preserves paths before the full gallery is built
- `app/services/page.tsx` - lead sentence describing the page as a "technical service hub"
- `app/locations/page.tsx` - H1: "Local floor coating pages for central Arizona"
- `app/locations/page.tsx` - lead sentence describing city pages as local SEO hubs
- `app/page.tsx` - social section sentence saying to keep signals connected while the expanded local SEO site is built out
- `app/contact/page.tsx` - lead sentence saying the form fields mirror the current flow while the final form handler is connected

## Pages That Should Not Yet Be Indexed

The following page types should be held back from indexing until they contain production-ready content:

- All 108 `/service-areas/[city]/[service]` pages, unless a smaller curated subset is selected and expanded first
- `/gallery`, until it becomes a real gallery with useful media and alt/context content
- `/about`, until placeholder content is removed and verified business content is added

The core homepage, service hub, service pages, location hub, city pages, contact page, and quote redirect can become indexable once placeholder/development copy is removed and metadata/canonical handling is finalized.

## Recommended Execution Order

1. Decide the first curated local SEO set instead of indexing all 108 city plus service combinations.
2. Add index gating: remove unfinished generated pages from the sitemap and/or mark unfinished pages noindex until expanded.
3. Remove visible developer/placeholder copy from public pages.
4. Confirm the Google review URL and any business identity details that differ between the brief and `lib/site-data.ts`.
5. Improve metadata and canonical coverage for static hub pages and unfinished page states.
6. Add breadcrumb UI and BreadcrumbList schema.
7. Connect the quote form to a real submission workflow with spam protection and user feedback.
8. Build out priority service pages with stronger educational content, images, proof, and conversion sections.
9. Build out priority city hubs with local proof and a controlled set of links to high-value city plus service pages.
10. Add project/case study architecture after real projects, locations, services, and images are available.
11. Add review/proof architecture only after verified review content is available.
12. Optimize assets currently loaded from the WordPress site once the permanent media strategy is confirmed.

## Build Verification

Commands run:

```bash
npm install
npm run build
```

Result:

- `npm install` completed successfully with 0 vulnerabilities.
- `npm run build` completed successfully.
- No build fixes were required.
