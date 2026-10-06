# Kiwi Floors for Hope Inventory

Date: 2026-10-06

## Status

Label: OPTIONAL CAMPAIGN ASSET

The client may retain, modify, unpublish, or remove this page after handoff.

## URL

- https://www.kiwicoatingsaz.com/floors-for-hope

## Page Files

| File | Purpose |
| --- | --- |
| `app/floors-for-hope/page.tsx` | Campaign page, metadata, hero, explanation, steps, CTA, nomination section. |
| `components/FloorsForHopeNominationForm.tsx` | Direct-email nomination form. |
| `app/globals.css` | Campaign page styles under `.floors-for-hope-page` and related selectors. |
| `app/sitemap.ts` | Includes `/floors-for-hope` in sitemap. |
| `components/Footer.tsx` | Includes footer link to Floors for Hope. |

## Page Design and Copy

- Campaign hero uses existing Kiwi visual language and site styling.
- Copy positions the campaign as a community nomination/giveaway style page.
- Page includes explanatory sections, nomination steps, and a form area.

## Campaign Assets

No separately labeled Floors for Hope image/video asset was found in `public/`. The page currently uses existing repository/site media and CSS design treatment.

## Nomination Form

- Component: `components/FloorsForHopeNominationForm.tsx`
- Recipient: `randy@kiwicoatingsaz.com`
- Delivery: visitor email client via `mailto:`
- Fields: nominator name/email/phone, nominee name/city/phone/email, nomination story, additional information.
- Fallback: direct email link to Randy if mail client cannot open.

## SEO and Sitemap

- Metadata title: Floors for Hope
- Canonical: https://www.kiwicoatingsaz.com/floors-for-hope
- Sitemap: included
- Search Console priority: listed in `GOOGLE_SEARCH_CONSOLE_ACTION_LIST.md`

## Internal Linking

- Footer links to `/floors-for-hope`.
- Campaign page links into nomination form and site CTAs.
