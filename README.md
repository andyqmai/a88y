# A88Y Landing Page

A static React/Vite site for A88Y, built to support TikTok API review with a public product page, privacy policy, terms, data deletion instructions, contact page, and OAuth callback placeholder.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## TikTok review URLs

Use your deployed domain for these paths:

- `/`
- `/privacy`
- `/terms`
- `/data-deletion`
- `/contact`
- `/auth/tiktok/callback`

## Recommended deployment

Deploy to Cloudflare Pages for free, then connect `a88y.com` or a subdomain like `app.a88y.com`.

Cloudflare Pages settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
