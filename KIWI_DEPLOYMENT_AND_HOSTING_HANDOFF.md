# Kiwi Deployment and Hosting Handoff

Date: 2026-10-06

## Production Site

- Production domain: https://www.kiwicoatingsaz.com
- Canonical hostname: `www.kiwicoatingsaz.com`
- Framework: Next.js App Router
- Package manager: npm
- Build command: `npm run build`
- Start command: `npm start`
- Output/configuration: standard Next.js server build; no static export configured; `next.config.mjs` sets `agentRules: false` and `outputFileTracingRoot: process.cwd()`.

## Current Deployment Provider / Configuration

- Hosting provider: UNKNOWN from repository files. There is no `vercel.json`, `netlify.toml`, Dockerfile, or other provider-specific deployment file in the repo.
- Repository relationship: Git remote is `https://github.com/AgentScoutPro/kiwicoatingsaz.git`.
- Production branch: UNKNOWN from repository files; likely branch to confirm in hosting dashboard. Current local branch is `main`.
- Domain configuration: must be confirmed in the hosting provider dashboard and DNS provider.
- SSL: Step 2 docs report HTTPS production host responding with HSTS headers; current DNS/SSL ownership still requires client/hosting verification.
- Deployment workflow: expected Git-connected deployment or manual provider deployment; confirm in hosting dashboard before transfer.

## Environment Variables

No active application runtime environment variables are referenced by the production app source in the final repo scan.

| Variable Name | Purpose | Required? | Where Configured |
| --- | --- | --- | --- |
| `BASE_URL` | Optional base URL for `scripts/qa-local-pages.mjs` local QA script | No | Local shell only when running QA |
| `RESEND_API_KEY` | Legacy removed quote form email API key | No, removed workflow | Present only in stale `.env.example` and historical docs; do not configure for current form |
| `RESEND_FROM_EMAIL` | Legacy removed quote form sender address | No, removed workflow | Present only in stale `.env.example` and historical docs; do not configure for current form |

Secret values must never be placed in handoff documents.

## Domain / DNS Dependency

The site depends on DNS records pointing `www.kiwicoatingsaz.com` to the active hosting provider. Apex-domain behavior should be verified after transfer. No DNS modification was performed in this step.

## Transfer Notes

To hand hosting control to Kiwi Coatings or a new developer, confirm:

- Hosting provider account owner/admin.
- Git repository connected to hosting project.
- Production branch used by deployment.
- Domain ownership and DNS provider access.
- SSL certificate status after account/domain transfer.
