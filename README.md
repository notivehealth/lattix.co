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

`wrangler.jsonc` attaches `lattix.co` (custom domain) and `www.lattix.co` (zone route) on deploy.

For CI, use [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) with:

- **Build command:** `bun run build`
- **Deploy command:** `bunx wrangler deploy`
- **Node / Bun:** current LTS (Astro 7 wants Node 22.12+)

## Contact form

The contact page composes a `mailto:` to `hello@lattix.co`. Wire it to a Worker, Turnstile, or a form provider when you are ready.
