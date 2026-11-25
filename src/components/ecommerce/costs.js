/* Ecommerce cost ranges — single source for the page's cost table and the estimate widget.
   INDICATIVE MARKET RANGES from the SEO brief: replace with Ivoniz packages before relying on them. */
export const STORE_TYPES = [
  { id: "woo", label: "WooCommerce starter store", inr: "₹50,000 – ₹1,50,000", aed: "AED 8,000 – 20,000" },
  { id: "advanced", label: "Advanced WooCommerce or headless", inr: "₹1,50,000 – ₹4,00,000", aed: "AED 20,000 – 50,000" },
  { id: "custom", label: "Custom ecommerce platform", inr: "₹3,00,000 – ₹10,00,000+", aed: "AED 40,000 – 150,000+" },
  { id: "b2b", label: "B2B portal or multi-vendor marketplace", inr: "₹5,00,000+", aed: "AED 60,000+" },
];

/* WooCommerce packages — INDICATIVE MARKET RANGES from the SEO brief: replace with Ivoniz pricing. */
export const WOO_PACKAGES = [
  { label: "Starter store", note: "Up to ~100 products, standard theme", inr: "₹40,000 – ₹80,000", aed: "AED 6,000 – 12,000" },
  { label: "Business store", note: "Custom design, integrations", inr: "₹80,000 – ₹2,00,000", aed: "AED 12,000 – 30,000" },
  { label: "Advanced store", note: "Custom plugins, ERP, multi-language", inr: "₹2,00,000 – ₹5,00,000+", aed: "AED 30,000 – 70,000+" },
  { label: "Maintenance plan", note: "Updates, backups, security, small changes", inr: "₹3,000 – ₹15,000 / month", aed: "AED 500 – 2,500 / month" },
];

/* Product catalogue website packages — INDICATIVE MARKET RANGES from the SEO brief: replace with Ivoniz pricing. */
export const CATALOGUE_PACKAGES = [
  { label: "Starter", note: "Up to ~100 products, enquiry + WhatsApp", inr: "₹30,000 – ₹60,000", aed: "AED 5,000 – 10,000" },
  { label: "Business", note: "Hundreds of products, filters, bulk upload", inr: "₹60,000 – ₹1,50,000", aed: "AED 10,000 – 25,000" },
  { label: "Advanced", note: "Dealer login, multi-language, CRM / ERP sync", inr: "₹1,50,000 – ₹4,00,000+", aed: "AED 25,000 – 60,000+" },
];

/* Web portal packages — INDICATIVE MARKET RANGES from the SEO brief: replace with Ivoniz pricing,
   including a real first-phase starting price (PORTAL_FIRST_PHASE). */
export const PORTAL_PACKAGES = [
  { label: "Basic portal", note: "1–2 user roles, core features", inr: "₹1,50,000 – ₹4,00,000", aed: "AED 25,000 – 60,000" },
  { label: "Business portal", note: "Multiple roles, workflows, integrations", inr: "₹4,00,000 – ₹12,00,000", aed: "AED 60,000 – 150,000" },
  { label: "Enterprise portal", note: "Complex integrations, high security, mobile app", inr: "₹12,00,000+", aed: "AED 150,000+" },
];
export const PORTAL_FIRST_PHASE = { inr: "₹1,50,000", aed: "AED 25,000" };

/* WordPress website packages — INDICATIVE MARKET RANGES from the SEO brief (23 Nov 2026):
   replace with Ivoniz pricing. Used by /website-development/wordpress-website-development (table, FAQ, quote widget). */
export const WP_PACKAGES = [
  { id: "starter", label: "Starter business site", note: "5–8 pages", inr: "₹20,000 – ₹45,000", time: "2–3 weeks" },
  { id: "corporate", label: "Corporate website", note: "10–30 pages, custom design", inr: "₹45,000 – ₹1,20,000", time: "3–6 weeks" },
  { id: "advanced", label: "Custom theme, multilingual or advanced features", note: "Custom theme, Arabic / multi-language, integrations", inr: "₹1,20,000 – ₹3,00,000+", time: "6–10 weeks" },
  { id: "care", label: "Monthly maintenance", note: "Updates, backups, security, small changes", inr: "₹2,500 – ₹10,000 / month", time: "Ongoing" },
];
export const WP_DUBAI_RANGE = "AED 4,000 – 15,000";

/* Static website packages — INDICATIVE MARKET RANGES from the SEO brief (23 Nov 2026):
   replace with Ivoniz pricing. Used by /website-development/static-website-development (package cards,
   "from" price in the hero, FAQs, Offer schema and the quote form). */
export const STATIC_PACKAGES = [
  { id: "starter", label: "Starter", pages: "Up to 5 pages", inr: "₹8,000 – ₹15,000", min: 8000, max: 15000, time: "5–7 days" },
  { id: "business", label: "Business", pages: "6–10 pages", inr: "₹15,000 – ₹30,000", min: 15000, max: 30000, time: "1–2 weeks" },
  { id: "premium", label: "Premium", pages: "10–20 pages, custom design, animations", inr: "₹30,000 – ₹60,000", min: 30000, max: 60000, time: "2–3 weeks" },
];
export const STATIC_SUPPORT = { label: "Yearly support", note: "Content updates, hosting check, backups", inr: "₹3,000 – ₹8,000 / year" };
export const STATIC_FROM = "₹8,000";

/* Mobile app packages — INDICATIVE MARKET RANGES from the SEO brief (23 Nov 2026):
   replace with Ivoniz pricing. Used by /mobile-app-development (cost table, FAQs
   and the AppCostEstimator). min/max in INR and AED feed the estimator. */
export const APP_PACKAGES = [
  { id: "mvp", label: "Simple app / MVP", features: "Login, a few screens, basic admin", inr: "₹1,50,000 – ₹4,00,000", time: "6–10 weeks", min: 150000, max: 400000, aedMin: 25000, aedMax: 50000 },
  { id: "business", label: "Business app", features: "Payments, notifications, dashboard, integrations", inr: "₹4,00,000 – ₹10,00,000", time: "10–16 weeks", min: 400000, max: 1000000, aedMin: 50000, aedMax: 120000 },
  { id: "ecommerce", label: "Ecommerce / on-demand app", features: "Catalogue, cart, payments, tracking, multi-role", inr: "₹8,00,000 – ₹20,00,000", time: "14–24 weeks", min: 800000, max: 2000000, aedMin: 100000, aedMax: 220000 },
  { id: "enterprise", label: "Complex / enterprise app", features: "Real-time features, ERP integration, high security", inr: "₹15,00,000+", time: "20+ weeks", min: 1500000, max: 3000000, aedMin: 180000, aedMax: 350000, openEnded: true },
];
/* Estimator multipliers (indicative): applied to the chosen app type's range. */
export const APP_FACTORS = {
  platform: { android: 0.8, ios: 0.8, both: 1 },
  roles: { one: 0.9, few: 1, many: 1.25 },
  payments: { no: 0.95, yes: 1.05 },
  admin: { no: 0.9, yes: 1 },
};

/* Flutter app packages — INDICATIVE MARKET RANGES from the SEO brief (23 Nov 2026):
   replace with Ivoniz pricing. Used by /mobile-app-development/flutter-app-development (cost table, FAQ). */
export const FLUTTER_PACKAGES = [
  { id: "mvp", label: "Flutter MVP", features: "Core features, basic admin", inr: "₹1,50,000 – ₹3,50,000", time: "6–9 weeks" },
  { id: "business", label: "Business app", features: "Payments, notifications, dashboard", inr: "₹3,50,000 – ₹8,00,000", time: "9–14 weeks" },
  { id: "ecommerce", label: "Ecommerce / on-demand app", features: "Catalogue, cart, payments, tracking", inr: "₹7,00,000 – ₹15,00,000", time: "12–20 weeks" },
  { id: "complex", label: "Complex app", features: "Real-time, integrations, multi-role", inr: "₹12,00,000+", time: "18+ weeks" },
];

/* iOS app packages — INDICATIVE MARKET RANGES from the SEO brief (23 Nov 2026):
   replace with Ivoniz pricing. Used by /mobile-app-development/ios-app-development (cost table, FAQ). */
export const IOS_PACKAGES = [
  { id: "mvp", label: "iOS MVP", features: "Core features, basic backend", inr: "₹2,00,000 – ₹4,50,000", time: "7–10 weeks" },
  { id: "business", label: "Business iOS app", features: "Payments, notifications, admin", inr: "₹4,50,000 – ₹10,00,000", time: "10–16 weeks" },
  { id: "advanced", label: "Advanced app", features: "Real-time, integrations, Apple ecosystem", inr: "₹10,00,000+", time: "16+ weeks" },
];

/* Android app packages — INDICATIVE MARKET RANGES from the SEO brief (24 Nov 2026):
   replace with Ivoniz pricing. Used by /mobile-app-development/android-app-development (cost table, FAQ). */
export const ANDROID_PACKAGES = [
  { id: "mvp", label: "Android MVP", features: "Core features, basic admin", inr: "₹1,25,000 – ₹3,00,000", time: "6–9 weeks" },
  { id: "business", label: "Business Android app", features: "Payments, notifications, dashboard", inr: "₹3,00,000 – ₹8,00,000", time: "9–14 weeks" },
  { id: "ecommerce", label: "Ecommerce / on-demand app", features: "Catalogue, cart, UPI / COD, tracking", inr: "₹6,00,000 – ₹15,00,000", time: "12–20 weeks" },
  { id: "complex", label: "Complex app", features: "Real-time, integrations, multi-role", inr: "₹12,00,000+", time: "18+ weeks" },
];

/* Native app packages — INDICATIVE MARKET RANGES from the SEO brief (24 Nov 2026):
   replace with Ivoniz pricing. Used by /mobile-app-development/native-app-development (cost table, FAQ). */
export const NATIVE_PACKAGES = [
  { id: "mvp", label: "MVP (core features)", one: "₹1,50,000 – ₹4,50,000", both: "₹3,00,000 – ₹8,00,000", time: "7–10 weeks" },
  { id: "business", label: "Business app", one: "₹4,50,000 – ₹10,00,000", both: "₹8,00,000 – ₹18,00,000", time: "10–18 weeks" },
  { id: "enterprise", label: "Advanced / enterprise", one: "₹10,00,000+", both: "₹18,00,000+", time: "18+ weeks" },
];

/* Custom software packages — INDICATIVE MARKET RANGES from the SEO brief (24 Nov 2026):
   replace with Ivoniz pricing. Used by /software-development (cost table, FAQ). */
export const SOFTWARE_PACKAGES = [
  { id: "small", label: "Small business tool", note: "1–2 modules", inr: "₹50,000 – ₹1,50,000", time: "3–6 weeks" },
  { id: "business", label: "Business software", note: "3–6 modules, roles, reports", inr: "₹1,50,000 – ₹5,00,000", time: "6–12 weeks" },
  { id: "erp", label: "ERP / multi-branch system", note: "With mobile app", inr: "₹5,00,000+", time: "12+ weeks" },
];

/* Custom ERP packages — INDICATIVE MARKET RANGES from the SEO brief (24 Nov 2026):
   replace with Ivoniz pricing. Used by /software-development/erp-software-development (hero "from"
   line, cost table, FAQ). */
export const ERP_PACKAGES = [
  { id: "starter", label: "Starter ERP", note: "3–4 modules, one branch", inr: "₹2,00,000 – ₹5,00,000", time: "8–12 weeks" },
  { id: "business", label: "Business ERP", note: "6–8 modules, multi-branch, mobile app", inr: "₹5,00,000 – ₹12,00,000", time: "12–20 weeks" },
  { id: "enterprise", label: "Enterprise / manufacturing ERP", note: "Phased delivery", inr: "₹12,00,000+", time: "Phased, 4–8 months" },
];
export const ERP_FROM = { price: "₹2 lakh", golive: "8–12 weeks" };

/* Custom CRM packages — INDICATIVE MARKET RANGES from the SEO brief (24 Nov 2026):
   replace with Ivoniz pricing. Used by /software-development/crm-software-development (hero "from"
   line, cost table, FAQ). */
export const CRM_PACKAGES = [
  { id: "starter", label: "Starter CRM", note: "Leads, follow-ups, reports", inr: "₹60,000 – ₹1,50,000", time: "4–6 weeks" },
  { id: "business", label: "Business CRM", note: "WhatsApp, call tracking, quotations, mobile app", inr: "₹1,50,000 – ₹4,00,000", time: "6–10 weeks" },
  { id: "industry", label: "Industry CRM", note: "With ERP or portal integration", inr: "₹4,00,000+", time: "10+ weeks" },
];
export const CRM_FROM = { price: "₹60,000", golive: "4–6 weeks" };

/* Billing software options — /billing-software-development. Ready-product prices
   are NOT fixed yet (decision 24 Nov 2026): shown as "Price on request" until set.
   Custom development range is the brief's indicative market range. */
export const BILLING_OPTIONS = [
  { id: "ready", label: "Ready billing software, customised", price: "Price on request", best: "Single shop, standard needs" },
  { id: "multi", label: "Multi-counter / multi-branch billing", price: "Price on request", best: "Supermarkets, chains" },
  { id: "custom", label: "Fully custom billing software development", price: "₹60,000 – ₹2,00,000+", best: "Unique workflows, integrations" },
];
/* Set to e.g. "₹15,000" once fixed; null shows "Free demo · price on request". */
export const BILLING_FROM = null;

/* Digital marketing packages — /digital-marketing. Monthly prices NOT fixed yet
   (brief has ₹X placeholders): `price: null` shows "Price on request". Set e.g.
   "₹15,000" per package once decided. Ad spend is always separate. */
export const DM_PACKAGES = [
  { id: "starter", label: "Local Starter", includes: "Google Business Profile, local SEO basics, 8 social posts", price: null },
  { id: "growth", label: "Growth", includes: "SEO, social media (12 posts + reels), Meta or Google Ads management", price: null },
  { id: "engine", label: "Lead Engine", includes: "SEO, Google + Meta ads, landing page, call and WhatsApp tracking, monthly strategy call", price: null },
];

/* SEO packages — /seo-services. Monthly prices NOT fixed yet (brief: ₹X).
   `price: null` shows "Price on request". Brief benchmarks (25 Nov 2026):
   Local Starter ~₹10,000–15,000, Growth ~₹20,000–30,000, Competitive ₹35,000+
   per month; Calicut IndiaMart sellers from ₹10,000/month. */
export const SEO_PACKAGES = [
  { id: "starter", label: "Local Starter", best: "Shops, clinics, local services", includes: "Google Business Profile, local SEO, 5 target keywords, monthly report", price: null },
  { id: "growth", label: "Growth", best: "SMEs targeting Kerala", includes: "Local + on-page + technical SEO, 15 keywords, 2 content pieces a month, link building", price: null },
  { id: "competitive", label: "Competitive / Ecommerce", best: "National reach, online stores", includes: "Full SEO, 30+ keywords, ecommerce SEO, content, digital PR", price: null },
];
export const SEO_AUDIT_PRICE = null; // one-time audit price; free for businesses that start a package

/* Local SEO (/digital-marketing/seo-services/local-seo-services) — prices not fixed yet → "Price on request".
   Set a monthly figure per package (per location for multi-location) and the GBP setup fee. */
export const LOCAL_SEO_PACKAGES = [
  { id: "gbp-starter", label: "GBP Starter", best: "Single shop or clinic", includes: "Google Business Profile optimisation, 4 posts a month, review system, 10 citations, monthly report", price: null, unit: "month" },
  { id: "local-growth", label: "Local Growth", best: "Businesses targeting a town or district", includes: "Starter + 8 posts a month, 25 citations, 2 location pages, review replies, local keyword tracking", price: null, unit: "month" },
  { id: "multi-location", label: "Multi-Location", best: "Chains and multi-branch businesses", includes: "Everything per branch, plus location pages and a combined report", price: null, unit: "location / month" },
];
export const GBP_SETUP_PRICE = null;

/* Technical SEO (/digital-marketing/seo-services/technical-seo-services) — prices not fixed yet → "Price on request".
   Brief benchmarks: Kerala audits ₹10,000–₹30,000; national fixed audits ~₹25,000;
   suggested Ivoniz audit ₹10,000–₹20,000 for SME sites. */
export const TECH_SEO_PACKAGES = [
  { id: "audit", label: "Technical Audit", best: "Websites up to about 500 pages", includes: "Full audit, prioritised fix list and a walkthrough call", price: null, unit: "one-time" },
  { id: "audit-fix", label: "Audit + Fix", best: "Small business and WordPress websites", includes: "Audit plus implementation of priority fixes, with a before-and-after report", price: null, unit: "one-time" },
  { id: "large", label: "Ecommerce / Large Site", best: "Online stores and sites with 500+ pages", includes: "Deep crawl, filters and faceted navigation, schema, speed and fixes", price: null, unit: "one-time" },
  { id: "care", label: "Technical SEO Care", best: "Ongoing protection", includes: "Monthly crawl, Core Web Vitals monitoring and fixes as needed", price: null, unit: "month" },
];

/* On-page SEO (/digital-marketing/seo-services/on-page-seo-services) — prices not fixed yet → "Price on request".
   One-time project prices; per-page pricing for a few pages (ON_PAGE_PER_PAGE). */
export const ON_PAGE_PACKAGES = [
  { id: "starter", label: "Starter", pages: "Up to 5 pages", includes: "Keyword mapping, titles, meta descriptions, headings and internal links", price: null },
  { id: "growth", label: "Growth", pages: "Up to 15 pages", includes: "Starter + content optimisation, images and FAQ sections", price: null },
  { id: "advanced", label: "Advanced", pages: "30+ pages", includes: "Growth + schema, content writing and monthly refinements", price: null },
];
export const ON_PAGE_PER_PAGE = null;

/* Off-page SEO / link building (/digital-marketing/seo-services/off-page-seo-services).
   Monthly prices NOT fixed yet → "Price on request". Set both INR and AED.
   OFF_PAGE_MIN_TERM: minimum contract in months (brief: "[X] months") — null hides the line. */
export const OFF_PAGE_PACKAGES = [
  { id: "starter", label: "Starter", work: "Competitor backlink audit, citations, 4–5 quality links", best: "Local businesses in Kerala", inr: null, aed: null },
  { id: "growth", label: "Growth", work: "Starter + guest articles, 8–10 quality links, brand mentions", best: "Growing businesses in India and the UAE", inr: null, aed: null },
  { id: "authority", label: "Authority", work: "Growth + digital PR, 15+ quality links, toxic link clean-up", best: "Competitive industries and GCC markets", inr: null, aed: null },
];
export const OFF_PAGE_MIN_TERM = null;

/* Ecommerce SEO (/digital-marketing/seo-services/ecommerce-seo-services).
   Monthly prices by store size NOT fixed yet → "Price on request". Set INR and AED.
   ECOM_SEO_AUDIT_PRICE: one-time ecommerce SEO audit (null = "available on request"). */
export const ECOM_SEO_PACKAGES = [
  { id: "starter", label: "Starter", size: "Up to 100 products", includes: "Audit, keyword map, top 10 categories optimised, product schema", inr: null, aed: null },
  { id: "growth", label: "Growth", size: "Up to 1,000 products", includes: "Starter + product page optimisation, technical fixes, buying guides, link building", inr: null, aed: null },
  { id: "scale", label: "Scale", size: "1,000+ products", includes: "Growth + large-catalogue technical SEO, content at scale, digital PR", inr: null, aed: null },
];
export const ECOM_SEO_AUDIT_PRICE = null;

/* SEO audits (/digital-marketing/seo-services/seo-audit-services) — one-time,
   fixed prices NOT set yet → "Price on request". Set INR and AED per tier.
   Benchmarks (brief): Kerala technical audit ₹10,000–₹30,000 (Turquoic);
   43% of businesses pay $101–$750 (WebFX); Dubai monthly SEO from AED 4,500.
   AUDIT_FEE_CREDIT: true only once Ivoniz agrees to credit the audit fee
   against fix work — shows the line on the page. */
export const SEO_AUDIT_TIERS = [
  { id: "mini", label: "Free mini-audit", size: "Any", includes: "Quick check of your homepage, one service page and top issues", free: true },
  { id: "standard", label: "Standard audit", size: "Up to 50 pages", includes: "Full audit, action plan, walkthrough call", inr: null, aed: null },
  { id: "advanced", label: "Advanced audit", size: "Up to 500 pages", includes: "Standard + backlink audit, competitor deep-dive, content gaps", inr: null, aed: null },
  { id: "large", label: "Ecommerce / large site audit", size: "500+ pages", includes: "Advanced + catalogue, filter and crawl-budget review", inr: null, aed: null },
];
export const AUDIT_FEE_CREDIT = false;
