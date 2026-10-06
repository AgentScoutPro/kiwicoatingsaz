# Kiwi Form Handoff QA

## Forms Found

- `components/ContactQuoteForm.tsx`
  - Shared quote/contact form with fields for name, email, phone, project address, service requested, project details, and a hidden honeypot field.
  - This is the only visitor-submitted contact/quote form found in `app/` and `components/`.
- `components/home/QuoteSelector.tsx`
  - Homepage project type selector form. It does not submit visitor contact data and only routes visitors to `/get-a-quote?service=...`, which redirects to `/contact?service=...`.

## Routes Using Each Form

- `ContactQuoteForm`
  - Used directly on `/contact`.
  - `/get-a-quote` redirects to `/contact`, preserving the selected `service` query value.
  - Request-a-quote CTAs on homepage, service, location, service-area, about, projects, and header routes route visitors to `/get-a-quote` or `/contact`.
- `QuoteSelector`
  - Used on the homepage in `components/home/HomeStoryActs.tsx`.

## Files Changed

- `components/ContactQuoteForm.tsx`
  - Removed backend `fetch("/api/quote-request")` submission.
  - Added client-side required-field validation with `form.reportValidity()`.
  - Collects populated form values dynamically from `FormData`.
  - Builds a readable plain-text email body.
  - Adds the originating `window.location.href`.
  - Builds a URL-encoded `mailto:` link with `URLSearchParams`.
  - Opens the visitor's default email application with `window.location.href`.
  - Replaced false success copy with: "Your email application will open with your request ready to send."
  - Added fallback copy with a clickable direct email link.
- `app/api/quote-request/route.ts`
  - Removed after confirming the shared form no longer calls it.

## Recipient Confirmation

- Recipient is exactly `randy@kiwicoatingsaz.com`.
- No CC or BCC recipients are added.

## Old Form-Delivery System Found

- Found a previous `/api/quote-request` API route.
- It used Resend via `https://api.resend.com/emails`.
- It referenced `RESEND_API_KEY` and `RESEND_FROM_EMAIL`.
- No SendGrid, Formspree, SMTP, nodemailer, CRM integration, webhook, or server action was found.

## Anything Removed

- Removed `app/api/quote-request/route.ts`, because it was confirmed unused after converting the shared form to client-side mailto behavior.

## Desktop QA

- Desktop Chromium check against local dev server:
  - Required `name` and `email` fields block invalid submission.
  - Generated subject: `Kiwi Coatings Website Quote Request - John Smith`.
  - Generated body includes name, email, phone, address, service, project details, website page URL, and submitted-from text.
  - Special characters in `john+kiwi@example.com` and `chips & UV protection` are URL encoded safely.
  - Recipient starts with `mailto:randy@kiwicoatingsaz.com?`.
  - No `cc=` or `bcc=` values are present.
  - False success phrases are not present.
- Desktop Safari and Firefox code paths use the same standards-based `mailto:` URL and browser-native form validation. Native email-client launch itself depends on the visitor's OS/browser email-handler configuration and cannot be confirmed by the website after handoff.

## Mobile QA

- Mobile viewport check at `390x844` against local dev server:
  - Contact form remains present and usable.
  - No false success phrases are present.
  - Same standards-based `mailto:` URL generation is used for iPhone/Safari and Android/Chrome paths.
- Native email app opening depends on device-level mail-handler configuration. If the handoff cannot be opened, the component exposes the direct clickable fallback email address.

## Production Build Result

- `npm run build` passed.
- Initial build after deleting the old API route encountered a stale `.next/dev` generated validator reference. Clearing generated `.next` output and rebuilding passed successfully.

## Remaining Issues

- A website cannot verify whether the visitor clicks Send inside their own email app after the `mailto:` handoff.
- Browser automation could verify URL generation and validation, but not actual native email-app launch across every installed OS/browser/email-client combination.
