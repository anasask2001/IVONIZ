import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { STATIC_PACKAGES, WP_PACKAGES, STORE_TYPES, CATALOGUE_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   L18 — /website-development/website-development-company-in-malappuram
   Owns: "website development company in malappuram", "web design
   malappuram", "web designing company in malappuram" (the old WordPress URL
   web-designing-company-in-malappuram now 301s HERE, .htaccess).
   Not a city-swap page: 4 real clients in Malappuram district (Rivaura —
   Areekode, Danthika + Nizra — Kondotty, Arlocks — Kooriyad). Honest: the
   office is in Kozhikode, no Malappuram office; meetings in person on request.
   Prices = Kerala market ranges from costs.js (labelled).
   Location page: NOT linked from the menu or footer (user rule).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/website-development-company-in-malappuram";
const range = (p) => p.inr;

const page = {
  url: PAGE_URL,
  title: "Website Development Company in Malappuram | Ivoniz LLP",
  ogTitle: "Website Development for Malappuram Businesses",
  description:
    "Web design and development for Malappuram businesses by our Kozhikode team: a hospital, dental clinic, jewellery showroom and men's store in the district so far.",
  schemaName: "Website Development for Malappuram Businesses",
  serviceType: "Website development",
  areaServed: [{ "@type": "AdministrativeArea", name: "Malappuram district" }, { "@type": "State", name: "Kerala" }],
  crumbs: [
    { label: "Website Development", href: "/website-development" },
    { label: "Websites in Malappuram", href: "/website-development/website-development-company-in-malappuram" },
  ],
  label: "Malappuram · Areekode · Kondotty · Team in Kozhikode",
  h1: "Website Development for",
  h1Outline: "Malappuram Businesses",
  intro: (
    <>
      We&apos;ve built websites for a hospital in Areekode, a dental clinic and a jewellery showroom in Kondotty, and a
      men&apos;s store in Kooriyad. Our office is at HiLITE Business Park in Kozhikode, next door to Malappuram district.
      We can meet you in person, or run the whole project on WhatsApp and calls.
    </>
  ),
  cta: "Get a Quote",
  waMessage: "Hi Ivoniz, I need a website for my business in Malappuram.",
  proof: {
    label: "Our Work in Malappuram District",
    heading: "Malappuram businesses we've built for",
    intro: "All four are live. Open them and judge the work yourself.",
    slugs: ["rivaura-hospital", "danthika-dental-zone", "nizra-gold-and-diamonds", "arlocks-gents-wear"],
  },
  cards: {
    label: "What We Build",
    heading: "Websites for local businesses",
    intro: "Typical Kerala market ranges, as a guide. Each links to the full detail.",
    items: [
      { t: "Business website", d: "Services, photos, location map, and WhatsApp and call buttons. Fast and simple to keep updated.", meta: range(STATIC_PACKAGES[0]).split("–")[0].trim() + " onwards", href: "/website-development/static-website-development" },
      { t: "WordPress website", d: "For businesses that post offers, news or jobs themselves.", meta: range(WP_PACKAGES[0]), href: "/website-development/wordpress-website-development" },
      { t: "Product catalogue", d: "For showrooms and wholesalers: customers browse products and enquire on WhatsApp.", meta: range(CATALOGUE_PACKAGES[0]), href: "/website-development/catalogue-website-development" },
      { t: "Online store", d: "Payments by UPI, card or cash on delivery, with delivery across Kerala and India.", meta: range(STORE_TYPES[0]), href: "/website-development/ecommerce-website-development" },
    ],
    footer: (
      <>
        Full price breakdown: <Link href="/website-development/website-development-cost-in-kerala" className={LINK}>website development cost in Kerala</Link>.
      </>
    ),
  },
  notes: {
    label: "Malappuram Businesses",
    heading: "What we see in Malappuram projects",
    items: [
      ["Families and customers in the Gulf", "Many Malappuram businesses have owners, partners or customers in the Gulf. A site that works well on WhatsApp, with clear phone numbers including country codes, matters more than usual."],
      ["Google Maps decides a lot", "For hospitals, clinics and showrooms, most new customers find you in Maps. We set up your Google Business Profile alongside the website so the two match."],
      ["Malayalam where it helps", "A Malayalam version, or just Malayalam headings on key pages, can help with local customers. We'll tell you if it's worth it for your business."],
      ["Meetings where you are", "Our office is in Kozhikode. We can come to you for the first meeting, or you can visit us at HiLITE Business Park."],
    ],
    footer: (
      <>
        In Kozhikode itself? See <Link href="/website-development/best-website-development-company-in-calicut" className={LINK_DARK}>website development in Calicut</Link>.
      </>
    ),
  },
  process: {
    heading: "How a project runs",
    steps: [
      ["First meeting", "At your place, at our Kozhikode office, or on a call: what the site needs to do and a rough budget."],
      ["Written quote", "Pages, features, timeline and yearly costs in writing, in rupees, before you pay anything."],
      ["Design and build", "You review the site on a private link and send changes on WhatsApp."],
      ["Launch", "Domain and hosting in your name, Google set up, and your staff shown how to update the site."],
    ],
  },
  form: {
    heading: "Tell us about your business",
    text: "What you do, where you are in Malappuram, and what you want the website to do. We reply with questions and a fixed quote.",
    aside: "Office: 7th Floor, HiLITE Business Park, Kozhikode. No separate Malappuram office.",
    props: {
      idPrefix: "mlp",
      subject: "website",
      leadType: "website_malappuram",
      location: "website_malappuram_form",
      types: [
        { id: "business", label: "Business website" },
        { id: "wordpress", label: "WordPress website" },
        { id: "catalogue", label: "Product catalogue" },
        { id: "store", label: "Online store" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Malappuram town", "Manjeri", "Kondotty", "Tirur", "Perinthalmanna", "Areekode", "Elsewhere in the district"],
    },
  },
  faqHeading: "Malappuram websites: questions",
  faqs: [
    { q: "Do you have an office in Malappuram?", a: "No. Our office is at HiLITE Business Park in Kozhikode. We work with Malappuram businesses in person or online, and four of our clients are in the district: Rivaura Hospital in Areekode, Danthika Dental Zone and Nizra Gold and Diamonds in Kondotty, and Arlocks Gents Wear in Kooriyad." },
    { q: "How much does a website cost in Malappuram?", a: `The same as elsewhere in Kerala. Typical market ranges start from ${STATIC_PACKAGES[0].inr} for a small static site and ${WP_PACKAGES[0].inr} for a WordPress business site. We send a fixed written quote after a short meeting.` },
    { q: "Can you come to our shop or hospital for the meeting?", a: "Yes, for the first meeting we can come to you in Malappuram district. After that, most of the work runs on WhatsApp and a private review link." },
    { q: "Do you also set up Google Maps for our business?", a: "Yes. We check or set up your Google Business Profile so the name, address, phone and hours match the website." },
    { q: "Who owns the website after it's built?", a: "You do. The domain and hosting are registered in your name, and we hand over all logins at launch." },
  ],
  relatedSlugs: ["local-seo-kerala-guide","google-business-profile-not-showing"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
