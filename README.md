# Focal Vision — Starter (Next.js + Tailwind)

A ready-to-deploy mini site for **Focal Vision** with a **Start Your Project** form.

## Option A — Deploy to a subdomain (e.g., start.focalvision.com.au)

1) Create a GitHub repo and upload these files.
2) Go to https://vercel.com → Import the repo → Deploy.
3) In Vercel → Project Settings → Domains → add your subdomain (e.g., `start.focalvision.com.au`).
4) Vercel will show a **CNAME** target. Create that CNAME in your DNS for `start`.
5) When DNS propagates, the subdomain is live.
6) From WordPress, add a menu/button linking to `https://start.focalvision.com.au/(auth)/start-your-project`.

## Option B — Run locally

1) Install Node.js LTS from https://nodejs.org
2) In this folder: `npm install`
3) Dev server: `npm run dev`
4) Visit http://localhost:3000

## Edit these files

- Brand colours: `app/globals.css` (uses `#fc4405`)
- Form page: `app/(auth)/start-your-project/page.js`
- Form handler: `app/api/start-project/route.js`
- Home page: `app/page.js`
- Logo: `public/focal-vision-logo.svg`

## Hook up email or Google Sheets

- Email: add Resend (https://resend.com) in the route handler and send the form data
- Google Sheet: use a webhook service (e.g., sheet.best) or a small serverless function to write rows

## GA4 (optional)

- In `app/layout.js`, replace `G-XXXXXXX` with your GA4 ID or remove the two GA script tags.
