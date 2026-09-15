# Google Business Profile Optimization — Ivoniz LLP

Recommendations only — none of this can be applied from the codebase. Everything below is meant to be entered directly into the Google Business Profile dashboard (business.google.com).

## 1. NAP — copy exactly as-is

Google weighs consistency between your website and your GBP listing heavily. Use these exact strings, matching what's now in `src/lib/schema.js` and the site footer:

- **Business name:** `Ivoniz LLP` (don't add keywords like "| Web Development Calicut" into the GBP name field — this violates Google's guidelines and risks suspension)
- **Address:** `7th Floor, Phase 1, HiLITE Business Park, Kozhikode, Kerala 673001, India`
- **Phone:** `+91 96457 60023` (primary) — list `+91 81138 47950` (sales) only as an additional phone number, not primary
- **Website:** `https://ivoniz.com`

## 1a. Service areas

GBP has a separate "Service areas" field (distinct from your address) — set it to match the `areaServed` list now in `src/lib/schema.js`: **Kozhikode, Kochi, Thrissur, Malappuram, Kannur** (plus Kerala/India as the broader fallback). This was previously only Kozhikode + Kochi in the schema even though the location landing pages and footer copy already talk about serving Thrissur/Malappuram/Kannur — keeping GBP's service area aligned with the schema and the on-page copy is what makes the "areas we serve" signal consistent across all three.

## 2. Categories

- **Primary category:** `Website Designer` or `Internet Marketing Service` — pick whichever better reflects your #1 revenue line today (web dev vs. digital marketing). Only one primary category is allowed.
- **Secondary categories** (add as many as apply): `Mobile App Developer`, `Marketing Agency`, `Software Company`, `Graphic Designer` (if branding/design is a real service line).

## 3. Business hours

Your own docs (`docs/ivoniz-ai-assistant-knowledge-base.md`) note hours aren't confirmed anywhere — that's the one field I deliberately did *not* add to the site's structured data, since fabricating it would create a mismatch between the schema and reality. Before anything else here: **confirm real office hours internally and set them in GBP.** An "hours unknown" GBP listing looks unmaintained and can suppress local pack ranking.

## 4. Photos

Google Business Profiles with photos get significantly more direction requests and website clicks than those without. Upload, in priority order:
1. **Logo** (square, used as your profile photo)
2. **Cover photo** — office exterior/interior at HiLITE Business Park (helps people recognize the building on arrival)
3. **Team photos** — at least 3-5, builds trust for a service business
4. **Work samples** — screenshots of shipped websites/apps (you can reuse assets from the `works` page)
5. Re-upload/refresh photos every 1-3 months — GBP's algorithm favors profiles with recent photo activity.

## 5. Reviews

- Your confirmed rating (4.9/5, referenced throughout the knowledge base) should be the *live* number on GBP already — if it's drifted, prioritize closing that gap over anything else on this list, since the aggregateRating in `schema.js` will only look legitimate to Google if it matches the real GBP number.
- Set up a standard post-project ask: a direct review link (`https://g.page/r/<your-place-id>/review` — get this from the GBP dashboard) sent via WhatsApp/email after each delivery.
- **Respond to every review**, positive or negative, within a few days — response rate is a ranking factor, not just a trust signal.
- Never incentivize reviews (discounts, giveaways) in exchange for a review — against Google's policy and groundable for profile suspension.

## 6. Google Posts

Post weekly if possible (minimum: monthly). GBP posts expire after 7 days for most post types, so a stale profile reads as inactive. Rotate between:
- **Offer/Update posts** — new service launches, seasonal promotions
- **Project posts** — "Just shipped: [client] website redesign" with a screenshot, linking to the relevant `works` case study
- **Event posts** — webinars, local meetups, if any

## 7. Q&A section

Seed this yourself before customers do — an empty Q&A section with unanswered public questions looks worse than none. Add and answer 5-8 questions covering exactly what the FAQ schema on your location pages already answers, e.g.:
- "Do you serve clients outside Kerala?"
- "Do you offer a free consultation/audit?"
- "What's your average project timeline?"
- "Do you provide post-launch support?"

## 8. Services section

List services as individual line items (GBP supports this natively, separate from the description) — Website Development, Mobile App Development, SEO, Google Ads Management, Social Media Marketing, Branding & Design, AI Solutions. Each can carry its own short description; this is separate from — and complements — the `Service`/`OfferCatalog` schema already on the three location landing pages.

## 9. Description field

Use the full 750-character limit. Lead with the two things people actually search: location + service. e.g.:

> Ivoniz LLP is a web development, mobile app development, and digital marketing company based in Kozhikode (Calicut), Kerala. We've delivered 1000+ websites and 100+ apps for clients across India, backed by a 4.9-star client rating. Services include custom website development, iOS/Android app development, SEO, Google Ads, social media marketing, and AI-powered business tools. Based at HiLITE Business Park — serving Kozhikode, Kochi, and businesses across Kerala and beyond.

## 10. Website link UTM tracking

Set the GBP website link to `https://ivoniz.com?utm_source=gbp&utm_medium=organic&utm_campaign=profile` so GBP-driven traffic is distinguishable in analytics from organic search — currently there's no way to tell them apart.

## 11. Messaging & booking

Enable the "Message" feature (customers can chat with you directly from the listing) — pairs naturally with the WhatsApp-first contact pattern already used sitewide (`wa.me` links in the footer, navbar, and every CTA).
