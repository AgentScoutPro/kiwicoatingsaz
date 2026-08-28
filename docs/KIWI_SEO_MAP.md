# Kiwi Coatings AZ SEO Map

Date: 2026-08-27

## Purpose

This document defines the canonical service and location SEO data model for Kiwi Coatings AZ before additional local content is created.

The site should support local SEO expansion without automatically exposing every possible city and service combination to search engines.

## Services

The canonical service set is stored in `lib/site-data.ts`. Each service now supports:

- `slug`
- `name`
- `seoTitle`
- `shortName`
- `primaryKeyword`
- `secondaryKeywords`
- `searchIntent`
- `shortDescription`
- `intro`
- `benefits`
- `applications`
- `relatedServices`
- `image`
- `featured`
- `priority`

Core services:

| Priority | Service | Primary keyword | Featured |
| --- | --- | --- | --- |
| 1 | Garage Floor Coatings | garage floor coatings | Yes |
| 2 | Polyaspartic Floor Coatings | polyaspartic floor coatings | Yes |
| 3 | Epoxy Floor Coatings | epoxy floor coatings | Yes |
| 4 | Patio and Pool Deck Coatings | patio and pool deck coatings | Yes |
| 5 | Metallic Epoxy Floors | metallic epoxy floors | Yes |
| 6 | Commercial Floor Coatings | commercial floor coatings | Yes |
| 7 | Flake Floor Systems | flake floor systems | No |
| 8 | Quartz Floor Coatings | quartz floor coatings | No |
| 9 | Specialty Floor Finishes | specialty floor finishes | No |

Highest commercial-priority services:

- Garage Floor Coatings
- Polyaspartic Floor Coatings
- Epoxy Floor Coatings
- Patio and Pool Deck Coatings
- Metallic Epoxy Floors
- Commercial Floor Coatings

## Cities

The canonical city set is stored in `lib/site-data.ts`. Each city now supports:

- `slug`
- `name`
- `county`
- `region`
- `priority`
- `verified`
- `localFocus`
- `nearbyAreas`
- `localChallenges`
- `featured`

Verified launch-market foundation:

| Priority | City | Region | Verified | Featured |
| --- | --- | --- | --- | --- |
| 1 | Mesa | East Valley | Yes | Yes |
| 2 | Gilbert | East Valley | Yes | Yes |
| 3 | Chandler | East Valley | Yes | Yes |
| 4 | Queen Creek | Southeast Valley | Yes | Yes |
| 5 | San Tan Valley | Southeast Valley | Yes | Yes |
| 6 | Casa Grande | Central Arizona | Yes | Yes |
| 7 | Maricopa | Central Arizona | Yes | No |
| 8 | Apache Junction | East Valley | Yes | No |
| 9 | Gold Canyon | East Valley | Yes | No |
| 10 | Florence | Central Arizona | Yes | No |
| 11 | Coolidge | Central Arizona | Yes | No |
| 12 | Phoenix | Greater Phoenix | Yes | No |

Secondary or future markets retained in the data model:

| City | Region | Verified | Launch indexing |
| --- | --- | --- | --- |
| Tempe | Future market | No | No |
| Scottsdale | Future market | No | No |

Tempe and Scottsdale remain useful as future architecture, but they should not be treated as verified launch markets unless explicitly approved.

## Tier 1 Page Matrix

Tier 1 pages are the only city plus service pages eligible for indexing at launch. The Tier 1 matrix is defined in `lib/seo-map.ts`.

Tier 1 cities:

- Mesa
- Gilbert
- Chandler
- Queen Creek
- San Tan Valley
- Casa Grande

Tier 1 services:

- Garage Floor Coatings
- Polyaspartic Floor Coatings
- Epoxy Floor Coatings
- Patio and Pool Deck Coatings
- Metallic Epoxy Floors

Tier 1 count:

`6 cities x 5 services = 30 indexable local service pages`

| City | Garage Floor Coatings | Polyaspartic Floor Coatings | Epoxy Floor Coatings | Patio and Pool Deck Coatings | Metallic Epoxy Floors |
| --- | --- | --- | --- | --- | --- |
| Mesa | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 |
| Gilbert | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 |
| Chandler | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 |
| Queen Creek | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 |
| San Tan Valley | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 |
| Casa Grande | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 |

## Future Expansion Matrix

Tier 2 pages are valid future expansion candidates but are not indexable at launch. They can be promoted only after each page has enough unique content, project proof, imagery, and conversion context.

Tier 2 currently includes:

- Verified markets outside the initial Tier 1 city set
- Verified markets paired with lower-priority or not-yet-expanded services
- High-priority services in verified markets not selected for the first local cluster
- Commercial, flake, quartz, and specialty service combinations that need stronger supporting content before indexing

Tier 2 count:

`12 verified cities x 9 services = 108 verified city-service combinations`

`108 verified combinations - 30 Tier 1 combinations = 78 Tier 2 future expansion pages`

Tier 3 pages are not generated or indexed until approved:

- Any city-service combination for an unverified market
- Current examples: Tempe plus services, Scottsdale plus services

## Keyword Ownership Strategy

Service hubs own broad service relevance:

- `/services/garage-floor-coatings` owns broad "garage floor coatings" relevance.
- `/services/polyaspartic-floor-coatings` owns broad "polyaspartic floor coatings" relevance.
- `/services/epoxy-floor-coatings` owns broad "epoxy floor coatings" relevance.
- `/services/patio-and-pool-deck-coatings` owns broad outdoor concrete coating relevance.
- `/services/metallic-epoxy-floors` owns broad decorative metallic epoxy relevance.
- `/services/commercial-floor-coatings` owns broad commercial floor coating relevance.

City hubs own local service-area relevance:

- `/locations/mesa` owns "floor coatings in Mesa, AZ" and supports related city-service pages.
- `/locations/gilbert` owns "floor coatings in Gilbert, AZ" and supports related city-service pages.
- The same pattern applies to other verified city hubs.

Tier 1 city-service pages own combined local commercial intent:

- `/service-areas/mesa/garage-floor-coatings` owns "garage floor coatings in Mesa, AZ".
- `/service-areas/gilbert/polyaspartic-floor-coatings` owns "polyaspartic floor coatings in Gilbert, AZ".
- `/service-areas/chandler/epoxy-floor-coatings` owns "epoxy floor coatings in Chandler, AZ".

Avoid creating pages where the keyword is only a city/service token swap. Each indexable local page needs unique local context, proof, and useful service guidance.

## URL Conventions

Service URLs:

`/services/[service]`

City URLs:

`/locations/[city]`

City plus service URLs:

`/service-areas/[city]/[service]`

Rules:

- Keep service slugs stable once indexed.
- Keep city slugs lowercase and hyphenated.
- Do not add a city-service URL to the XML sitemap unless it is approved as indexable.
- Do not internally link every possible city-service combination from hubs.
- Use canonical URLs that match the final production domain in `site.url`.
- Preserve existing dynamic route architecture so future expansion can happen without rebuilding routing.

## Indexing Counts

Before this phase:

- Static sitemap routes: 7
- Service pages: 9
- City pages: 12
- City plus service pages: 108
- Technical sitemap/robots routes: 2
- Total sitemap-eligible URLs including technical routes: 138
- Total sitemap-eligible URLs excluding technical routes: 136

After this phase:

- Static sitemap routes: 5
- Service pages: 9
- Verified city pages: 12
- Tier 1 city plus service pages: 30
- Technical sitemap/robots routes: 2
- Total sitemap-eligible URLs including technical routes: 58
- Total sitemap-eligible URLs excluding technical routes: 56

`/about` and `/gallery` are preserved but marked `noindex` and removed from the XML sitemap until stronger verified content is added.

## Implementation Notes

- `lib/seo-map.ts` is the source of truth for local SEO page eligibility.
- `getIndexableLocalSeoPages()` controls sitemap inclusion and hub-level city-service links.
- `getGeneratedLocalSeoPages()` allows Tier 1 and Tier 2 verified-market pages to remain available without indexing every possible permutation.
- Tier 2 pages receive `noindex, nofollow` metadata.
- Tier 3 pages are not generated from static params and return not found when requested.
