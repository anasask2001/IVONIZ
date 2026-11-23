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
   replace with Ivoniz pricing. Used by /wordpress-website-development (table, FAQ, quote widget). */
export const WP_PACKAGES = [
  { id: "starter", label: "Starter business site", note: "5–8 pages", inr: "₹20,000 – ₹45,000", time: "2–3 weeks" },
  { id: "corporate", label: "Corporate website", note: "10–30 pages, custom design", inr: "₹45,000 – ₹1,20,000", time: "3–6 weeks" },
  { id: "advanced", label: "Custom theme, multilingual or advanced features", note: "Custom theme, Arabic / multi-language, integrations", inr: "₹1,20,000 – ₹3,00,000+", time: "6–10 weeks" },
  { id: "care", label: "Monthly maintenance", note: "Updates, backups, security, small changes", inr: "₹2,500 – ₹10,000 / month", time: "Ongoing" },
];
export const WP_DUBAI_RANGE = "AED 4,000 – 15,000";
