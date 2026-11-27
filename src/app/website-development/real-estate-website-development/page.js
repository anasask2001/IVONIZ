import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { PORTAL_PACKAGES, WP_DUBAI_RANGE } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/real-estate-website-development
   Semrush UAE list (27 Nov 2026): commercial real estate web design 590
   (KD 13), real estate web design 320 (KD 28), real estate website
   development company 210 (KD 8), best real estate website design 70,
   real estate broker web design 40, luxury real estate web design 30.
   Planned as L8 in the content strategy. Honest: no real-estate client in
   lib/clients.js → said plainly; Gulf work shown as proof of build quality.
   Regulation kept general (brokers display what their licence / advertising
   permits require) — no specific permit rules claimed.
   Prices: costs.js market ranges (labelled). NOT in menu/footer.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/real-estate-website-development";
const W = "/website-development";
const low = (r) => r.split("–")[0].trim();

const page = {
  url: PAGE_URL,
  title: "Real Estate Website Development for Dubai | Ivoniz LLP",
  ogTitle: "Real Estate Website Design & Development for Dubai and the UAE",
  description:
    "Real estate web design and development for Dubai brokers and developers: property listings, off-plan project pages, commercial real estate, lead capture and Arabic.",
  schemaName: "Real Estate Website Design and Development",
  serviceType: "Real estate website development",
  areaServed: [{ "@type": "City", name: "Dubai" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Website Development", href: W },
    { label: "Real Estate Websites", href: `${W}/real-estate-website-development` },
  ],
  label: "Real Estate · Brokers · Developers · Dubai and the UAE",
  h1: "Real Estate Website",
  h1Outline: "Design and Development",
  intro: (
    <>
      Property buyers and tenants decide quickly: they filter, look at photos, check the location and want to ask about a
      unit straight away. We design and build real estate websites for brokers, developers and commercial property firms
      in Dubai and the UAE that make that path short. Our team is in Kozhikode, Kerala; we work with UAE clients remotely,
      in Gulf time.
    </>
  ),
  cta: "Discuss Your Property Website",
  waMessage: "Hi Ivoniz, I need a real estate website for my brokerage / project in the UAE.",
  cards: {
    label: "What We Build",
    heading: "Real estate websites for every kind of property business",
    items: [
      { t: "Brokerage websites", d: "Searchable listings by community, price, bedrooms and type, with a WhatsApp and call button on every unit and agent profiles." },
      { t: "Off-plan project microsites", d: "One focused site per launch: location, floor plans, payment plan, gallery and a registration form that feeds your sales team." },
      { t: "Commercial real estate web design", d: "Offices, retail units and warehouses listed by size, location and fit-out, with the details tenants and investors actually compare." },
      { t: "Luxury property websites", d: "Large photography, video and restrained design for high-value homes, without the slow loading that usually comes with it." },
      { t: "Lead capture and CRM", d: "Every enquiry tagged with the listing it came from and sent to your CRM or inbox, so agents follow up on the right unit." },
      { t: "Listing management", d: "An admin your team can use to add and update listings, or a feed from the listing system you already use, if it supports one." },
    ],
  },
  notes: {
    label: "What Buyers Look For",
    heading: "What makes a real estate website work",
    items: [
      ["Filters that match how people search", "Community, budget, bedrooms, ready or off-plan, rent or buy. If filtering is slow or clumsy, buyers go back to the portals."],
      ["Fast photos on mobile", "Most property browsing happens on phones. Photo galleries are compressed and lazy-loaded so listings open quickly on mobile data."],
      ["One tap to ask about a unit", "A pre-filled WhatsApp message that names the listing, so the agent knows exactly what the buyer means."],
      ["Licence and permit details shown", "Brokers should display the licence and advertising permit details their regulator requires on listings and the site. We build the fields; your team supplies the numbers."],
      ["English and Arabic", "Right-to-left Arabic pages for buyers who prefer them, with listings available in both languages."],
      ["Up-to-date listings", "Sold and rented units marked or removed quickly. Stale listings are the fastest way to lose a buyer's trust."],
    ],
    footer: (
      <>
        The same trust rules apply to any UAE site: <Link href="/blog/trustworthy-website-uae" className={LINK_DARK}>what makes a website trustworthy to UAE customers</Link>.
      </>
    ),
  },
  proof: {
    label: "Our Work in the Gulf",
    heading: "Gulf websites we've built",
    intro: "We don't have a real estate client to show yet. These live sites for UAE, Saudi and Qatar businesses show how we build: fast, mobile-first and focused on enquiries.",
    slugs: ["elnyca-solutions", "capitalcore", "sky-pure-water", "feraro-international", "technical-trade-co", "gaming-qatar"],
  },
  costs: {
    label: "Cost",
    heading: "What a real estate website costs",
    intro: "Typical UAE market ranges as a guide, not quotes. Listing search, CRM integration and Arabic are the main things that change the price.",
    cols: ["Website", "Typical range (AED)", "Includes"],
    rows: [
      ["Project microsite or small brokerage site", WP_DUBAI_RANGE, "Project or brand pages, gallery, enquiry and WhatsApp"],
      ["Brokerage site with listing search", `from ${low(PORTAL_PACKAGES[0].aed)}`, "Listings, filters, agent profiles, admin"],
      ["Portal with CRM or listing feed integration", PORTAL_PACKAGES[1].aed, "Integrations, roles, dashboards"],
    ],
    footer: (
      <>
        How website prices are built up in the UAE: <Link href="/blog/website-development-cost-dubai-uae" className={LINK}>website development cost in Dubai</Link>.
      </>
    ),
  },
  process: {
    heading: "From brief to first enquiry",
    steps: [
      ["Brief", "Brokerage, project or commercial portfolio; how many listings; where listings come from today."],
      ["Structure and design", "Search, listing and project page layouts, mobile first, in English and Arabic if needed."],
      ["Build and integrations", "Listings, admin, CRM or feed connection, WhatsApp and call tracking."],
      ["Launch", "Domain and accounts in your name, Google set up, and your team trained on updating listings."],
    ],
  },
  form: {
    heading: "Tell us about your property business",
    text: "Brokerage, developer or commercial property? Roughly how many listings, and do you need Arabic? We reply with questions and a fixed quote in AED.",
    aside: "Our team is in Kozhikode, Kerala. We have no office in Dubai; calls and WhatsApp in Gulf time.",
    props: {
      idPrefix: "re",
      subject: "real estate website",
      leadType: "real_estate_website",
      location: "real_estate_website_form",
      question: "What kind of site?",
      messageHint: "Your company, roughly how many listings, and where your listings are managed today.",
      types: [
        { id: "brokerage", label: "Brokerage website" },
        { id: "project", label: "Off-plan project site" },
        { id: "commercial", label: "Commercial real estate" },
        { id: "redesign", label: "Redesign" },
      ],
      places: ["Dubai", "Abu Dhabi", "Sharjah", "Other UAE", "Saudi Arabia", "Kerala", "Other"],
    },
  },
  faqHeading: "Real estate websites: questions",
  faqs: [
    { q: "What should a real estate website include?", a: "Listing search with filters buyers use (community, budget, bedrooms, ready or off-plan), fast photo galleries, a one-tap WhatsApp or call button on every listing, agent profiles, project pages, and the licence and permit details your regulator requires." },
    { q: "Do you design commercial real estate websites?", a: "Yes. Commercial property sites list offices, retail and warehouse space by size, location and fit-out, with enquiry forms that capture what a tenant or investor needs." },
    { q: "Can listings come from our existing system?", a: "If your listing or CRM system offers a feed or API, we can connect it so listings update automatically. Otherwise your team manages listings from the website's admin." },
    { q: "Have you built real estate websites before?", a: "Not yet for a real estate client; this page shows our Gulf work for trading, consulting and ecommerce businesses instead. We'll walk you through how we'd approach your project before you commit." },
    { q: "How much does a real estate website cost in Dubai?", a: `As typical UAE market ranges, a project microsite or small brokerage site costs about ${WP_DUBAI_RANGE}, and a brokerage site with listing search starts around ${low(PORTAL_PACKAGES[0].aed)}. We send a fixed quote after understanding your listings and integrations.` },
    { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India, and works with UAE property businesses remotely, in Gulf time." },
  ],
  relatedSlugs: ["trustworthy-website-uae", "whatsapp-business-uae", "how-to-make-a-website-that-gets-enquiries"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
