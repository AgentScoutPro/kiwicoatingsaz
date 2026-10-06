# Kiwi DNS and Domain Inventory

Date: 2026-10-06

## Domain

- Domain: `kiwicoatingsaz.com`
- Canonical website hostname: `www.kiwicoatingsaz.com`
- Production URL used by code: https://www.kiwicoatingsaz.com
- Sitemap URL: https://www.kiwicoatingsaz.com/sitemap.xml
- Robots URL: https://www.kiwicoatingsaz.com/robots.txt

## Verified From Repository

- Canonical URLs, sitemap URLs, robots sitemap reference, schema URLs, and metadata are configured for `https://www.kiwicoatingsaz.com`.
- `/get-a-quote` is an application redirect to `/contact`.
- `/gallery` is an application redirect to `/projects`.

## Not Verified In This Step

- DNS provider.
- Apex-domain redirect behavior from `kiwicoatingsaz.com` to `www.kiwicoatingsaz.com`.
- Hosting DNS target records.
- Domain registrar owner.
- Current SSL certificate issuer and renewal account.

## Handoff Explanation

A receiving developer should confirm the DNS provider and verify that the `www` hostname points to the active hosting project. The apex domain should either redirect to `https://www.kiwicoatingsaz.com` or otherwise resolve consistently with the canonical host. Do not change DNS without explicit client approval and hosting-provider instructions.
