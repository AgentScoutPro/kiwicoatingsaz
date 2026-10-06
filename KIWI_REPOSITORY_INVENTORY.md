# Kiwi Repository Inventory

Date: 2026-10-06
Production domain: https://www.kiwicoatingsaz.com

## Summary

- Framework: Next.js App Router, Next.js 16, React 19, TypeScript.
- Package manager: npm, with `package-lock.json` present.
- Build command: `npm run build`.
- Start command after build: `npm start`.
- Main content model: source-driven arrays and page-content helpers under `lib/`.
- Final verified sitemap/indexable URL count from Step 5 QA: 89.
- Google Drive handoff folder: https://drive.google.com/drive/folders/1Tu4_Rw_BQZ8Fx82hixDx210pY4p5I4bk?usp=sharing

| Path | Purpose | Client-Specific / Framework | Important Notes |
| --- | --- | --- | --- |
| `app/` | Next.js App Router pages, dynamic routes, sitemap, robots, layout, global CSS | Framework and client-specific | Production route surface is defined here. |
| `app/page.tsx` | Homepage | Client-specific | Uses homepage story/content/media components. |
| `app/services/page.tsx` | Services hub | Client-specific | Links to all 9 service pages. |
| `app/services/[service]/page.tsx` | Dynamic individual service pages | Client-specific generator | Generated from `services` in `lib/site-data.ts`; detailed copy comes from `lib/service-page-content.ts`. |
| `app/locations/page.tsx` | Location/city hub | Client-specific | Lists verified service areas. |
| `app/locations/[city]/page.tsx` | Dynamic city hub pages | Client-specific generator | Generated for verified cities from `lib/seo-map.ts`; copy in `lib/city-page-content.ts`. |
| `app/service-areas/[city]/[service]/page.tsx` | Dynamic service by location pages | Client-specific generator | Generates indexable and future local combinations; metadata noindex is controlled through `lib/seo-map.ts`. |
| `app/projects/page.tsx` | Projects / selected work page | Client-specific | Uses selected-work gallery in `lib/projects.ts`; no individual project records are currently active. |
| `app/projects/[slug]/page.tsx` | Individual project case study route | Client-specific generator | Generator exists, but `projects` array is currently empty. |
| `app/gallery/page.tsx` | Gallery preservation route | Client-specific redirect | Redirects to `/projects`. |
| `app/contact/page.tsx` | Contact / quote page | Client-specific | Uses `ContactQuoteForm`; no backend form delivery. |
| `app/get-a-quote/page.tsx` | Quote preservation route | Client-specific redirect | Redirects to `/contact`, preserving `service` query parameter. Not in sitemap. |
| `app/floors-for-hope/page.tsx` | Floors for Hope campaign page | Client-specific campaign | Optional campaign asset with direct-email nomination form. |
| `app/founders-statement/page.tsx` | Founder statement page | Client-specific | Randy/founder trust page. |
| `app/sitemap.ts` | XML sitemap generator | Framework and SEO | Emits 89 production URLs using `https://www.kiwicoatingsaz.com`. |
| `app/robots.ts` | Robots.txt generator | Framework and SEO | Allows all crawlers and references production sitemap. |
| `app/layout.tsx` | Root metadata, schema, header/footer | Framework and SEO | Emits LocalBusiness/HomeAndConstructionBusiness schema. No analytics scripts present. |
| `components/Header.tsx` | Site navigation | Client-specific | Includes primary navigation and CTAs. |
| `components/Footer.tsx` | Footer navigation, contact links | Client-specific | Includes Floors for Hope link and shared contact data. |
| `components/ContactQuoteForm.tsx` | Main contact/quote form | Client-specific | Builds `mailto:randy@kiwicoatingsaz.com`; no SMTP/API/CRM dependency. |
| `components/FloorsForHopeNominationForm.tsx` | Campaign nomination form | Client-specific campaign | Builds `mailto:randy@kiwicoatingsaz.com`. |
| `components/PageBlocks.tsx` | Shared service/city page blocks | Client-specific | Includes reusable breadcrumbs, CTA and content structures. |
| `components/ProjectBlocks.tsx` | Project/selected work presentation | Client-specific | Used by projects route. |
| `components/home/` | Homepage sections, media and scroll-video behavior | Client-specific | GSAP and custom scroll/video hooks are used here. |
| `lib/site-data.ts` | Business identity, services, cities, contact data | Client-specific canonical data | Contains phone, email, domain, service list, city list, social links, logo paths. |
| `lib/seo-map.ts` | Indexable local SEO matrix | Client-specific SEO | Defines Tier 1 local pages and approved Red Rock/Eloy/Arizona City expansion. |
| `lib/seo.ts` | Metadata and schema helpers | Client-specific SEO | Canonicals, OG/Twitter metadata, LocalBusiness, Service, FAQ, breadcrumb schema. |
| `lib/*-page-content.ts` | Page copy and FAQs | Client-specific content | Holds city, service, local-service, and homepage content. |
| `lib/projects.ts` | Projects and selected-work gallery data | Client-specific content/assets | `projects` is empty; selected work uses repository images. |
| `public/media/kiwi/` | Production media assets | Client-specific assets | Logos, homepage media, finish images, founder/project/outdoor/process assets. |
| `public/images/founder/` | Founder image asset | Client-specific asset | Used for founder/about contexts. |
| `scripts/qa-local-pages.mjs` | Local SEO QA script | Project QA tooling | Uses optional `BASE_URL`; no secret dependency. |
| `.env.example` | Legacy environment example | Historical/needs cleanup | References old Resend form workflow that has been removed. Keep values blank; update before final repository transfer if desired. |
| `next.config.mjs` | Next.js configuration | Framework | No hosting-specific adapter configured. |
| `package.json` | Scripts and dependencies | Framework | `lint` uses deprecated `next lint` behavior in Next.js 16 per Step 5 QA. |
| `docs/` and `KIWI_*.md` | QA, SEO, and handoff documentation | Client-specific documentation | Existing docs plus this Step 6 inventory set. |
| `marketing-assets/` | Untracked screenshots/marketing outputs | Generated/local artifact | Not currently part of committed production source. |
| `output/` | Untracked Playwright screenshots | Generated QA artifact | Not currently part of committed production source. |
