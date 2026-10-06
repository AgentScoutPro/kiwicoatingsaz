# Kiwi Content and Copy Inventory

Date: 2026-10-06

## Verified Totals

- Unique service pages: 9
- Active city hubs: 15
- Indexable service x location pages: 54
- Specialty/campaign pages: 1 optional campaign page (Floors for Hope)
- Core/project/support pages in sitemap: 8 static URLs plus service/city/local pages
- SEO titles: 89 indexable URLs have unique metadata per Step 5 QA
- Meta descriptions: 89 indexable URLs have unique metadata per Step 5 QA
- Duplicate titles/descriptions/canonicals found in final crawl: 0
- FAQs: Present on city pages, service pages, local service pages, homepage content, and schema helpers where supplied by page content files

## Content Sources

| Content Area | Source Files | Notes |
| --- | --- | --- |
| Homepage copy | `app/page.tsx`, `lib/home-page-content.ts`, `components/home/*` | Homepage story acts, CTAs, reviews/proof, media captions, FAQs. |
| Service-page copy | `app/services/[service]/page.tsx`, `lib/service-page-content.ts`, `lib/site-data.ts` | 9 service pages with page-specific sections, FAQs, applications, benefits, related services. |
| City copy | `app/locations/[city]/page.tsx`, `lib/city-page-content.ts`, `lib/site-data.ts` | 15 active verified city hubs. |
| Localized service/city copy | `app/service-areas/[city]/[service]/page.tsx`, `lib/local-service-page-content.ts`, `lib/seo-map.ts` | 54 indexable service/location pages. |
| Founder statement | `app/founders-statement/page.tsx`, founder assets | Founder trust/ownership story. |
| About copy | `app/about/page.tsx` | Company/about positioning. |
| CTA copy | Header, Footer, PageBlocks, HomeStoryActs, Contact page | Routes to phone, contact, quote redirect, and direct email patterns. |
| SEO titles and descriptions | `app/*/page.tsx`, `lib/seo.ts`, `lib/*-page-content.ts`, `lib/site-data.ts` | 89 indexable metadata sets verified in Step 5. |
| Schema content | `lib/seo.ts`, route pages | LocalBusiness/HomeAndConstructionBusiness, Service, BreadcrumbList, FAQPage. |
| Floors for Hope copy | `app/floors-for-hope/page.tsx`, `components/FloorsForHopeNominationForm.tsx` | Optional campaign page and nomination workflow. |
| Nomination workflow copy | `components/FloorsForHopeNominationForm.tsx` | Mailto subject/body and fallback copy for nomination submissions. |

## Service Pages

- Garage Floor Coatings: `/services/garage-floor-coatings`
- Polyaspartic Floor Coatings: `/services/polyaspartic-floor-coatings`
- Epoxy Floor Coatings: `/services/epoxy-floor-coatings`
- Metallic Epoxy Floors: `/services/metallic-epoxy-floors`
- Flake Floor Systems: `/services/flake-floor-systems`
- Quartz Floor Coatings: `/services/quartz-floor-coatings`
- Patio and Pool Deck Coatings: `/services/patio-and-pool-deck-coatings`
- Commercial Floor Coatings: `/services/commercial-floor-coatings`
- Specialty Floor Finishes: `/services/specialty-floor-finishes`

## City Hubs

- Mesa, AZ: `/locations/mesa`
- Gilbert, AZ: `/locations/gilbert`
- Chandler, AZ: `/locations/chandler`
- Queen Creek, AZ: `/locations/queen-creek`
- San Tan Valley, AZ: `/locations/san-tan-valley`
- Casa Grande, AZ: `/locations/casa-grande`
- Maricopa, AZ: `/locations/maricopa`
- Apache Junction, AZ: `/locations/apache-junction`
- Gold Canyon, AZ: `/locations/gold-canyon`
- Florence, AZ: `/locations/florence`
- Coolidge, AZ: `/locations/coolidge`
- Phoenix, AZ: `/locations/phoenix`
- Red Rock, AZ: `/locations/red-rock`
- Eloy, AZ: `/locations/eloy`
- Arizona City, AZ: `/locations/arizona-city`

## Important Limits

- Do not claim Google indexing from source code. Search Console must verify actual index status.
- No Google Analytics or Search Console verification identifiers are present in source.
- `.env.example` still documents the removed Resend workflow and should be cleaned before final transfer if the repository is being presented as fully current.
