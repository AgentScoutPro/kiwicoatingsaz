# Kiwi Form and Lead Ownership Inventory

Date: 2026-10-06

## Final Recipient

All current inquiry and nomination workflows send to:

`randy@kiwicoatingsaz.com`

## Ownership Summary

The current form workflow does not rely on C0D3AI SMTP, CRM, transactional email, webhook, server action, or email infrastructure.

Website visitors complete the form and their own email client opens with the inquiry populated for sending directly to Randy. The visitor must still send the email from their mail application.

## Components and Routes

| Component / Route | Purpose | Delivery Behavior | Notes |
| --- | --- | --- | --- |
| `components/ContactQuoteForm.tsx` | Main quote/contact form | Builds `mailto:randy@kiwicoatingsaz.com` with subject/body | Used on `/contact`; includes direct-email fallback. |
| `app/contact/page.tsx` | Contact route | Renders quote form | Receives optional `service` query prefill. |
| `app/get-a-quote/page.tsx` | Quote preservation route | Redirects to `/contact` | Preserves `service` query parameter. |
| `components/home/QuoteSelector.tsx` | Homepage service selector | Navigation only | Sends user to quote/contact flow; does not submit lead data. |
| `components/FloorsForHopeNominationForm.tsx` | Floors for Hope nomination form | Builds `mailto:randy@kiwicoatingsaz.com` with nomination body | Includes direct-email fallback. |
| `app/floors-for-hope/page.tsx` | Campaign route | Renders nomination form | Optional campaign asset. |

## Legacy Removed Workflow

A previous `app/api/quote-request/route.ts` route used Resend and referenced `RESEND_API_KEY` and `RESEND_FROM_EMAIL`. That API route has been removed, and the current form no longer calls it.

## Handoff Note

If the client wants server-side delivery, CRM logging, spam scoring, or analytics conversion tracking later, that should be implemented as a new approved workflow owned by the client or receiving developer.
