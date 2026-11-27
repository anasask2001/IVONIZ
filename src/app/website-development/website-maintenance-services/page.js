import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { STATIC_SUPPORT, WP_PACKAGES, WOO_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/website-maintenance-services
   Semrush UAE list (27 Nov 2026): website maintenance services dubai 90
   (KD 14), web maintenance services 50 (KD 12), website maintenance
   services 40 (KD 6), website maintenance company dubai 40 (KD 12), web
   maintenance 30. Fills the "suggested page to create — website
   maintenance" gap from the blog strategy; the blog article
   /blog/website-maintenance-cost (informational) links here (commercial).
   Markets: UAE + Kerala. Prices ONLY from costs.js (labelled ranges).
   No uptime/response-time guarantees claimed.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/website-maintenance-services";
const W = "/website-development";
const WP_CARE = WP_PACKAGES.find((p) => p.id === "care");
const WOO_CARE = WOO_PACKAGES[3];

const page = {
  url: PAGE_URL,
  title: "Website Maintenance Services for UAE & Kerala | Ivoniz LLP",
  ogTitle: "Website Maintenance Services for UAE and Kerala Businesses",
  description:
    "Website maintenance services for businesses in Dubai, the UAE and Kerala: updates, backups, security, fixes and small changes for WordPress, WooCommerce and custom sites.",
  schemaName: "Website Maintenance Services",
  serviceType: "Website maintenance",
  areaServed: [{ "@type": "City", name: "Dubai" }, { "@type": "Country", name: "United Arab Emirates" }, { "@type": "State", name: "Kerala" }],
  crumbs: [
    { label: "Website Development", href: W },
    { label: "Website Maintenance", href: `${W}/website-maintenance-services` },
  ],
  label: "Maintenance · Dubai · UAE · Kerala",
  h1: "Website Maintenance",
  h1Outline: "Services",
  intro: (
    <>
      A website needs looking after: updates, backups, security, the odd broken form, the price that changed last week.
      We maintain WordPress, WooCommerce and custom-built websites for businesses in Dubai, the wider UAE and Kerala,
      including sites we didn&apos;t build. Our team is in Kozhikode, Kerala, and works with Gulf clients remotely.
    </>
  ),
  cta: "Ask About Maintenance",
  waMessage: "Hi Ivoniz, I need website maintenance. My site runs on: ",
  cards: {
    label: "What's Included",
    heading: "Website maintenance services, month by month",
    items: [
      { t: "Updates", d: "WordPress core, themes and plugins updated after a backup, and checked afterwards so nothing silently breaks." },
      { t: "Backups", d: "Regular backups stored away from your hosting, so the site can be restored after a mistake or an attack." },
      { t: "Security", d: "Monitoring for malware and suspicious logins, SSL kept valid, and hacked sites cleaned and hardened." },
      { t: "Form and checkout tests", d: "Contact forms, WhatsApp buttons and store checkouts tested regularly, so enquiries and orders keep arriving." },
      { t: "Content changes", d: "Prices, offers, staff, photos and small page edits made for you, within the plan's monthly allowance." },
      { t: "Speed and health checks", d: "Page speed, broken links and Search Console errors checked and fixed before they cost you visitors." },
    ],
  },
  notes: {
    label: "Why It Matters",
    heading: "What happens to websites nobody maintains",
    items: [
      ["Outdated plugins get exploited", "Old WordPress plugins are a common way spam pages and malware get onto business sites, which can get the site flagged in browsers."],
      ["Forms break quietly", "A host change or plugin update can stop form emails arriving, and nobody notices for weeks."],
      ["Domains lapse", "Renewal emails go to an old address and the domain expires. Getting it back can be hard."],
      ["Small fixes become rebuilds", "Years of skipped updates often end in an expensive rebuild instead of routine care."],
    ],
    footer: (
      <>
        The full breakdown of costs and what to ask for: <Link href="/blog/website-maintenance-cost" className={LINK_DARK}>website maintenance cost guide</Link>.
      </>
    ),
  },
  costs: {
    label: "Pricing",
    heading: "Website maintenance plans",
    intro: "Typical market ranges as a guide, not quotes. The price depends on the platform, how many plugins it runs and how many changes you need each month.",
    cols: ["Website type", "Typical range", "Covers"],
    rows: [
      ["Static website", STATIC_SUPPORT.inr, STATIC_SUPPORT.note],
      ["WordPress website", WP_CARE?.inr, WP_CARE?.note],
      ["WooCommerce store", `${WOO_CARE.inr} · ${WOO_CARE.aed}`, WOO_CARE.note],
    ],
    footer: "Domain and hosting are usually billed separately. Every plan comes with a written list of what's included.",
  },
  process: {
    heading: "Starting maintenance with us",
    aside: (
      <>
        Taking over a site from a developer who&apos;s gone quiet? Read <Link href="/blog/who-owns-your-website-domain-hosting" className={LINK}>who owns your website</Link> first.
      </>
    ),
    steps: [
      ["Site review", "We check the platform, plugins, hosting, backups and security, and tell you what needs fixing first."],
      ["Access in your name", "Admin and hosting logins stay in your company's name; we're added as users."],
      ["Catch-up fixes", "Overdue updates, broken forms and security issues sorted before routine care begins."],
      ["Monthly care and report", "Updates, backups, checks and your content changes, with a short report each month."],
    ],
  },
  form: {
    heading: "Tell us about your website",
    text: "What it runs on, who built it, and what's been going wrong. We reply with a short review and a monthly plan in rupees or AED.",
    props: {
      idPrefix: "maint",
      subject: "website maintenance plan",
      leadType: "website_maintenance",
      location: "website_maintenance_form",
      question: "What does your site run on?",
      messageHint: "Your website address, the platform if you know it, and any current problems.",
      types: [
        { id: "wordpress", label: "WordPress" },
        { id: "woo", label: "WooCommerce store" },
        { id: "shopify", label: "Shopify" },
        { id: "custom", label: "Custom / other" },
        { id: "unsure", label: "Not sure" },
      ],
      places: ["Dubai", "Other UAE", "Kozhikode", "Elsewhere in Kerala", "Elsewhere in India", "Other GCC"],
    },
  },
  faqHeading: "Website maintenance: questions",
  faqs: [
    { q: "What do website maintenance services include?", a: "Usually software and plugin updates, backups, security monitoring, form and checkout tests, speed checks and a monthly allowance of small content changes. New pages and features are quoted separately. Every plan should list exactly what's covered." },
    { q: "How much do website maintenance services cost in Dubai?", a: `It depends on the platform and how much changes each month. As a typical market range, maintenance for a WooCommerce store is ${WOO_CARE.aed}; simpler business sites cost less. We quote a monthly plan after reviewing your site.` },
    { q: "Can you maintain a website you didn't build?", a: "Yes. We start with a review of the platform, plugins, hosting and security, fix what's overdue, and then move to routine monthly care." },
    { q: "Do I need maintenance for a static website?", a: `Much less than for WordPress. Static sites mainly need hosting checks, backups and occasional content changes; typical yearly support is ${STATIC_SUPPORT.inr}.` },
    { q: "Will you have full control of my website?", a: "No. Your domain, hosting and admin accounts stay in your company's name; we're added as users and can be removed at any time." },
    { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India, and maintains websites for UAE businesses remotely, with WhatsApp support in Gulf time." },
  ],
  relatedSlugs: ["website-maintenance-cost", "who-owns-your-website-domain-hosting", "website-redesign-without-losing-rankings"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
