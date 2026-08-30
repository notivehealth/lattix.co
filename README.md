# Lattix

Marketing site for [lattix.co](https://lattix.co) — the national lattice for health data.

Astro 7, Tailwind CSS 4, Bun. Static output, deployed to Cloudflare Workers/Pages.

## Local

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
bun run preview
```

## Deploy to Cloudflare

The site is pre-rendered. Wrangler serves `dist/` as static assets.

```bash
bun run deploy
```

`wrangler.jsonc` attaches `lattix.co` (custom domain) and `www.lattix.co` (zone route). The Worker 301s `www` to the apex.

For CI, use [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) with:

- **Build command:** `bun run build`
- **Deploy command:** `bunx wrangler deploy`
- **Node / Bun:** current LTS (Astro 7 wants Node 22.12+)

## Contact form

`POST /api/contact` sends through [Resend](https://resend.com). Store the API key as a Worker secret (not in git):

```bash
printf '%s' 're_…' | bunx wrangler secret put RESEND_API_KEY
```

Mail sends from `hello@notivehealth.com` (verified in Resend) to `dillon@lattix.co`. `CONTACT_TO` / `CONTACT_FROM` live in `wrangler.jsonc`.
