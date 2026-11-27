import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { WP_DUBAI_RANGE, WOO_PACKAGES, PORTAL_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/website-development-company-qatar
   Targets: website development company in qatar / web design qatar /
   ecommerce website qatar (volumes not verified in this batch).
   Proof: Gaming Qatar (lib/clients.js — Shopify store, mygamehobbies.qa).
   Prices: costs.js has AED/INR only → shown as Gulf market ranges in AED;
   quotes in QAR or USD. No Qatar office. Payment gateways kept general.
   Not in menu/footer.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/website-development-company-qatar";
const W = "/website-development";

const page = {
  url: PAGE_URL,
  title: "Website Development for Qatar Businesses | Ivoniz LLP",
  ogTitle: "Website Design and Development for Qatar Businesses",
  description:
    "Website design and development for businesses in Doha and Qatar: company websites, online stores and portals in English and Arabic. Built remotely from Kerala.",
  schemaName: "Website Development for Qatar Businesses",
  serviceType: "Website development",
  areaServed: [{ "@type": "City", name: "Doha" }, { "@type": "Country", name: "Qatar" }],
  crumbs: [
    { label: "Website Development", href: W },
    { label: "Websites for Qatar", href: `${W}/website-development-company-qatar` },
  ],
  label: "Websites · Online Stores · Doha and Qatar",
  h1: "Website Development",
  h1Outline: "for Qatar Businesses",
  intro: (
    <>
      We design and build websites and online stores for businesses in Doha and across Qatar, in English and Arabic.
      One of them is Gaming Qatar, a Shopify store for consoles and gaming accessories. Our team works from Kozhikode,
      Kerala; we have no office in Qatar and run projects remotely in Gulf time.
    </>
  ),
  cta: "Discuss Your Website",
  waMessage: "Hi Ivoniz, I need a website for my business in Qatar.",
  cards: {
    label: "What We Build",
    heading: "Websites for Qatar businesses",
    items: [
      { t: "Company websites", d: "Clear, fast sites for trading, contracting, consulting and service firms, built around enquiries by call, WhatsApp and form." },
      { t: "Online stores", d: "Shopify and WooCommerce stores with local delivery options, payment set up for Qatar, and product pages that sell.", href: `${W}/ecommerce-website-development` },
      { t: "Arabic and bilingual sites", d: "Right-to-left Arabic pages designed properly, not just mirrored, with a language switch that keeps your place.", href: `${W}/arabic-website-development` },
      { t: "Product catalogues", d: "Catalogue sites for suppliers and distributors, with enquiry buttons instead of checkout.", href: `${W}/catalogue-website-development` },
      { t: "Portals and web apps", d: "Customer logins, dealer ordering and internal tools for businesses outgrowing spreadsheets.", href: `${W}/web-application-development-dubai` },
      { t: "Maintenance", d: "Updates, backups, security and small changes after launch.", href: `${W}/website-maintenance-services` },
    ],
  },
  notes: {
    label: "Built for Qatar",
    heading: "What a Qatar website needs to get right",
    items: [
      ["Mobile first", "Most of your visitors will be on phones. Pages are designed for mobile first and kept fast on mobile data."],
      ["WhatsApp as the main contact", "A WhatsApp button on every page, with pre-filled messages so you know which page the customer came from."],
      ["Prices in QAR", "Stores show prices in Qatari riyal, with delivery zones and charges set up for where you deliver."],
      ["Payment that works locally", "We set up a payment gateway that supports Qatar-based businesses and your bank, confirmed during scoping."],
      ["Found on Google in Qatar", "Clean structure, Google Business Profile and Search Console set up so you can be found for searches in Qatar."],
      ["Accounts in your name", "Domain, hosting and store accounts belong to your company, not to us."],
    ],
    footer: (
      <>
        Planning for more than one Gulf country? Read <Link href="/blog/website-for-saudi-arabia-qatar-gcc" className={LINK_DARK}>websites for Saudi Arabia, Qatar and the GCC</Link>.
      </>
    ),
  },
  proof: {
    label: "Our Work in the Gulf",
    heading: "Gulf websites we've built",
    intro: "Gaming Qatar is our Qatar client; the others are live sites for UAE and Saudi businesses.",
    slugs: ["gaming-qatar", "elnyca-solutions", "capitalcore", "technical-trade-co", "sky-pure-water", "feraro-international"],
  },
  costs: {
    label: "Cost",
    heading: "What a website costs for a Qatar business",
    intro: "Typical Gulf market ranges, shown in AED as a guide. We send fixed quotes in QAR or USD.",
    cols: ["Website", "Typical range (AED)", "Includes"],
    rows: [
      ["Company website", WP_DUBAI_RANGE, "Business pages, enquiry and WhatsApp, basic SEO"],
      [WOO_PACKAGES[0].label, WOO_PACKAGES[0].aed, WOO_PACKAGES[0].note],
      [WOO_PACKAGES[1].label, WOO_PACKAGES[1].aed, WOO_PACKAGES[1].note],
      [PORTAL_PACKAGES[0].label, PORTAL_PACKAGES[0].aed, PORTAL_PACKAGES[0].note],
    ],
    footer: (
      <>
        How Gulf website prices are built up: <Link href="/blog/website-development-cost-dubai-uae" className={LINK}>website development cost guide</Link>.
      </>
    ),
  },
  process: {
    heading: "How a Qatar website project runs",
    steps: [
      ["Call and brief", "Your business, customers, languages and what the site must do."],
      ["Fixed quote", "Pages, features and timeline in writing, in QAR or USD."],
      ["Design", "Mobile and desktop designs you review and approve."],
      ["Build and content", "English and Arabic pages, store setup, WhatsApp and tracking."],
      ["Launch", "Domain and accounts in your name, Google set up, your team trained."],
    ],
  },
  form: {
    heading: "Tell us about your Qatar business",
    text: "What you do, who your customers are, and whether you need Arabic or an online store. We reply with questions and a fixed quote.",
    aside: "Our team is in Kozhikode, Kerala. No office in Qatar; calls and WhatsApp in Gulf time.",
    props: {
      idPrefix: "qa",
      subject: "website for Qatar",
      leadType: "website_qatar",
      location: "website_qatar_form",
      question: "What do you need?",
      messageHint: "Your business, whether you sell online, and if you need Arabic.",
      types: [
        { id: "company", label: "Company website" },
        { id: "store", label: "Online store" },
        { id: "catalogue", label: "Product catalogue" },
        { id: "redesign", label: "Redesign" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Doha", "Elsewhere in Qatar", "UAE", "Saudi Arabia", "Other"],
    },
  },
  faqHeading: "Websites in Qatar: questions",
  faqs: [
    { q: "Do you build websites for businesses in Qatar?", a: "Yes. We've built Gaming Qatar's Shopify store and work with Gulf businesses remotely, in English and Arabic, with calls in Gulf time." },
    { q: "How much does a website cost in Qatar?", a: `As typical Gulf market ranges, a company website costs about ${WP_DUBAI_RANGE} and a starter online store ${WOO_PACKAGES[0].aed}. We send a fixed quote in QAR or USD after a short call.` },
    { q: "Do you have an office in Qatar?", a: "No. Our team is in Kozhikode, Kerala, India, and works with Qatar businesses remotely." },
    { q: "Can you build an Arabic website?", a: "Yes. We build Arabic-only and bilingual English–Arabic sites with proper right-to-left layouts." },
    { q: "Shopify or WooCommerce for a Qatar store?", a: "Shopify is quicker to run with less maintenance; WooCommerce gives more control and no platform subscription. We recommend one after checking your products, payment needs and who will manage the store." },
    { q: "Who owns the website?", a: "Your company does: the domain, hosting, store account and content are set up in your name." },
  ],
  relatedSlugs: ["website-for-saudi-arabia-qatar-gcc", "arabic-english-bilingual-website-guide", "best-ecommerce-platform-uae"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
