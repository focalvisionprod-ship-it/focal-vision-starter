# Focal Vision — Full Website Starter
Multi-page site with Services, Contact, Start Your Project, Thank You, robots.txt and sitemap.xml.

## Deploy
Upload to GitHub (or replace your current repo) → Vercel will deploy automatically.

## Edit brand/SEO
- Colours: `app/globals.css`
- Metadata/JSON-LD + domain: `app/layout.js` (replace https://example.com after you connect your real domain)
- Service copy: `data/services.js`
- Footer NAP: `components/Footer.js`

## Forms
- All forms POST to `/api/start-project` and redirect to `/thank-you`.
- To email submissions, replace the route with a Resend-powered handler (see earlier instructions).

## Local dev
`npm install` → `npm run dev` → http://localhost:3000
