import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { PAD, OPEN_SANS, Label, Heading } from "@/components/site/SiteUI";
import { WP_DUBAI_RANGE, CATALOGUE_PACKAGES, STORE_TYPES, PORTAL_PACKAGES, WOO_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/web-development-company-abu-dhabi
   Brief (Semrush, 27 Nov 2026): 5 Abu Dhabi keywords, ~1.8K/mo combined,
   KD 13–17; 9 of top 10 ranking pages AS ≤ 23.
     web development companies in abu dhabi   590  KD 17  → "how to choose" H2, intro, FAQ
     web design agency in abu dhabi           480  KD 16  → services, intro
     web design company abu dhabi             320  KD 16  → services H2, meta
     website development company in abu dhabi 260  KD 13  → cost H2, FAQ
     website designing company abu dhabi      110  KD 14  → process, FAQ
   SERP has a local pack → no Abu Dhabi address, so organic only.
   Honesty edits to the brief: no team-size / project-count numbers; no
   "free support days" or "quote within 1 day" promises; prices = costs.js
   market ranges (labelled); "for Abu Dhabi businesses", not "in", because
   there is no office there; no Abu Dhabi client claimed (UAE clients shown).
   Kept distinct from the Dubai page (choosing checklist, industries, cost
   table, Abu Dhabi areas). NOT linked from menu/footer (location page rule).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/web-development-company-abu-dhabi";
const low = (r) => r.split("–")[0].trim();

const CHECKS = [
  ["Look at live work, not mock-ups", "Open sites the company has actually launched, on your phone. Check how fast they load and whether the contact buttons work."],
  ["Ask who will build it", "Find out whether the people you meet are the people who design and code the site, or whether the work is passed on."],
  ["Check the technology", "Ask what the site will be built on and why. Modern frameworks are usually faster and more secure than sites stacked with page-builder plugins."],
  ["Confirm ownership in writing", "You should own the domain, hosting, code and design files, with every login handed over at launch."],
  ["Insist on an itemised quote", "A single lump sum hides what you're paying for. Ask for pages, features, timeline and running costs, line by line, and whether VAT is included."],
  ["Ask about SEO and Arabic", "A site Google can't read, or that breaks in Arabic, costs you customers. Ask how both are handled at launch."],
  ["Agree on support before launch", "Know who fixes things after go-live, how quickly, and what it costs."],
];

const INDUSTRIES = [
  ["Trading and B2B suppliers", <>Corporate and product sites for trading companies, like our work for <Link href="/works/elnyca-solutions" className={LINK_DARK}>Elnyca Solutions</Link> in the UAE and <Link href="/works/technical-trade-co" className={LINK_DARK}>Technical Trade Co.</Link>, a telecom and IT supplier in Al Khobar, Saudi Arabia.</>],
  ["Consulting and business services", <>Credibility-first sites for advisory and service firms, like <Link href="/works/capitalcore" className={LINK_DARK}>CapitalCore</Link> in the UAE.</>],
  ["Retail, jewellery and brands", <>Showroom and brand websites, like the <Link href="/works/nizra-gold-and-diamonds" className={LINK_DARK}>Nizra Gold and Diamonds</Link> jewellery showroom site, and online stores like <Link href="/works/gaming-qatar" className={LINK_DARK}>Gaming Qatar</Link>.</>],
  ["Healthcare", <>Clinic and hospital sites with doctors, timings and booking; see <Link href="/website-development/hospital-website-development" className={LINK_DARK}>hospital and clinic websites</Link>.</>],
  ["Real estate and property", "Listing pages, project microsites and lead capture, built around enquiries on WhatsApp and phone."],
];

const ChooseSection = (
  <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
    <div className="mx-auto max-w-[1100px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
      <div>
        <Label dark={false}>Choosing a Company</Label>
        <Heading dark={false}>How to choose among web development companies in Abu Dhabi</Heading>
        <p className="mt-6 text-[15.5px] text-black/60 leading-relaxed">
          Quotes for the same website can differ widely. These seven checks work whoever you hire, including us. A good
          web design company in Abu Dhabi will answer all of them without hesitating.
        </p>
      </div>
      <ol className="border-t border-black/10">
        {CHECKS.map(([t, d], i) => (
          <li key={t} className="border-b border-black/10 py-5 grid grid-cols-[36px_1fr] gap-3">
            <span className="text-[13px] font-semibold text-black/40 tabular-nums pt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-[17px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 500 }}>{t}</h3>
              <p className="mt-1 text-[15px] text-black/60 leading-relaxed">{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div className="mx-auto max-w-[1100px] mt-16">
      <Label dark={false}>Industries</Label>
      <Heading dark={false}>Who we build for</Heading>
      <div className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-6">
        {INDUSTRIES.map(([t, d]) => (
          <div key={t} className="border-t border-black/10 pt-4">
            <h3 className="text-[18px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
            <p className="mt-1.5 text-[15px] text-black/60 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const page = {
  url: PAGE_URL,
  title: "Web Development Company for Abu Dhabi | Ivoniz LLP",
  ogTitle: "Web Development Company for Abu Dhabi Businesses",
  description:
    "Web design and development for Abu Dhabi businesses: custom websites, ecommerce, Arabic sites and web apps. Fixed, itemised AED quotes. Team in Kerala.",
  schemaName: "Web Design and Development for Abu Dhabi Businesses",
  serviceType: "Website development",
  areaServed: [{ "@type": "City", name: "Abu Dhabi" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Website Development", href: "/website-development" },
    { label: "Web Development for Abu Dhabi", href: "/website-development/web-development-company-abu-dhabi" },
  ],
  label: "Abu Dhabi · UAE · Remote team in Kerala",
  h1: "Web Development Company for",
  h1Outline: "Abu Dhabi Businesses",
  intro: (
    <>
      In Abu Dhabi, buyers compare several vendors before they make a single call, so your website has to load fast,
      look credible and make the next step obvious. We&apos;re a web design and development team at HiLITE Business
      Park in Kozhikode, Kerala, building custom websites, online stores and web apps for UAE businesses. We don&apos;t
      have an Abu Dhabi office: we work remotely, in hours that overlap almost completely with yours.
    </>
  ),
  cta: "Get a Fixed AED Quote",
  waMessage: "Hi Ivoniz, I need a website for my business in Abu Dhabi. Can we talk?",
  cards: {
    label: "Services",
    heading: "Web design and development services for Abu Dhabi",
    intro: "Looking for a web design agency in Abu Dhabi that also builds and supports the site? We handle everything from first wireframe to launch and support, so you deal with one team, not three.",
    items: [
      { t: "Custom website development", d: "Sites built around your business with React and Next.js, not squeezed into a template: fast, secure and light on mobile.", href: "/website-development" },
      { t: "Website design and UI/UX", d: "Layouts designed around how your customers browse: mobile first, clear navigation, and one obvious way to enquire.", href: "/ui-ux-design" },
      { t: "Ecommerce websites", d: "Shopify, WooCommerce or custom stores with UAE payment gateways, 5% VAT on invoices, cash on delivery and Arabic.", href: "/website-development/ecommerce-website-development/ecommerce-website-development-dubai" },
      { t: "Web applications", d: "Customer portals, booking systems and dashboards on React, Node.js and MongoDB or PostgreSQL, built to grow with you.", href: "/website-development/web-portal-development" },
      { t: "Arabic and bilingual websites", d: "Full right-to-left layouts with proper Arabic typography, so the Arabic site feels native, not mirrored.", href: "/website-development/arabic-website-development" },
      { t: "Redesign and maintenance", d: "Slow or outdated sites rebuilt without losing search rankings, then monthly plans for updates, backups and security.", href: "/blog/website-redesign-without-losing-rankings" },
    ],
  },
  notes: {
    label: "Why Work With Us",
    heading: "What Abu Dhabi businesses get from Ivoniz",
    items: [
      ["Designers and developers in one team", "The people who design your site work alongside the developers who build it, so what you approve is what goes live."],
      ["Modern technology", "React, Next.js and Node.js rather than heavy page builders, so the site stays fast, secure and easy to extend."],
      ["Working hours that suit the UAE", "The UAE is 1.5 hours behind India, so our working days overlap almost entirely. We talk on WhatsApp and video calls."],
      ["Fixed, itemised AED quotes", "A written scope with every page, feature and running cost before work starts, and whether VAT is included."],
      ["You own everything", "Domain, hosting, code and design files are in your company's name, with every login handed over at launch."],
      ["SEO-ready from launch", "Page titles, structured data, fast loading, a sitemap and Search Console setup, so the site starts well on Google."],
    ],
    footer: (
      <>
        Based in Dubai instead? See <Link href="/website-development/website-development-company-dubai" className={LINK_DARK}>websites for Dubai businesses</Link>.
      </>
    ),
  },
  proof: {
    label: "Our Work in the Gulf",
    heading: "Gulf websites we've built",
    intro: "Live sites for businesses in the UAE, Saudi Arabia and Qatar. We don't have Abu Dhabi clients to list yet; these show the same kind of work.",
    slugs: ["elnyca-solutions", "sky-pure-water", "capitalcore", "feraro-international", "technical-trade-co", "gaming-qatar"],
  },
  extra: ChooseSection,
  costs: {
    label: "Cost",
    heading: "Website development cost in Abu Dhabi",
    intro: "What a website development company in Abu Dhabi charges depends on pages, features, languages and integrations. These are typical UAE market ranges as a guide, not quotes; every Ivoniz quote is fixed and itemised.",
    cols: ["Project", "Typical range (AED)", "Typical scope"],
    rows: [
      ["Business website, English + Arabic", WP_DUBAI_RANGE, "Services, about, contact, CMS"],
      ["Product catalogue website", `${low(CATALOGUE_PACKAGES[0].aed)} – ${CATALOGUE_PACKAGES[1].aed.split("–").pop().trim()}`, "Products, filters, WhatsApp enquiry"],
      ["Ecommerce website", STORE_TYPES[0].aed, "Catalogue, UAE gateway, VAT, delivery"],
      ["Custom web application", `from ${low(PORTAL_PACKAGES[0].aed)}`, "Portals, dashboards, bookings"],
      ["Maintenance plan", WOO_PACKAGES[3].aed, "Updates, backups, security, small changes"],
    ],
    footer: (
      <>
        What changes the price, and yearly running costs: <Link href="/blog/website-development-cost-dubai-uae" className={LINK}>website development cost in the UAE</Link>.
      </>
    ),
  },
  process: {
    heading: "Our website design process, brief to launch",
    aside: "A business website typically takes a few weeks from approved content; online stores and web apps take longer. The written scope gives your timeline.",
    steps: [
      ["Discovery", "Your business, customers, competitors in Abu Dhabi and what the site must achieve, then a written scope and fixed quote."],
      ["Sitemap and wireframes", "Every page and how visitors move between them, planned before any visual design."],
      ["UI design", "Desktop and mobile designs, in English and Arabic if needed, for your review and approval."],
      ["Development", "The site built, with forms, payments and integrations connected and an easy content editor."],
      ["Testing", "Speed, forms, checkout and Arabic layouts tested on real phones and browsers."],
      ["Launch and handover", "Live site, Google Search Console set up, and every login and file handed to you."],
    ],
  },
  form: {
    label: "Fixed AED Quote",
    heading: "Start your website project",
    text: "Tell us what you need. We reply with questions, then a written scope and a fixed, itemised quote in AED. No obligation.",
    aside: "Our team is in Kozhikode, Kerala. We have no office in Abu Dhabi; calls and WhatsApp in UAE working hours.",
    props: {
      idPrefix: "auh",
      subject: "website",
      leadType: "website_abu_dhabi",
      location: "website_abu_dhabi_form",
      types: [
        { id: "website", label: "Business website" },
        { id: "store", label: "Ecommerce" },
        { id: "webapp", label: "Web app / portal" },
        { id: "redesign", label: "Redesign" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Abu Dhabi city", "Al Reem Island", "Mussafah", "Khalifa City", "Al Ain", "Elsewhere in UAE"],
    },
  },
  faqHeading: "Abu Dhabi websites: questions",
  faqs: [
    { q: "How much does a website development company in Abu Dhabi charge?", a: `As typical UAE market ranges, a bilingual business website costs about ${WP_DUBAI_RANGE}, and an ecommerce store ${STORE_TYPES[0].aed}. Web apps and larger stores cost more. We give a fixed, itemised quote after a short discovery call.` },
    { q: "Do I need a web design agency in Abu Dhabi, or can a remote team do the job?", a: "A local agency suits you if you want to meet in person often. A remote team can deliver the same work, usually for less, if it takes calls in UAE hours, shows live Gulf work you can open, and puts every account in your name. Ask any agency, local or remote, the seven questions on this page." },
  { q: "Do you have an office in Abu Dhabi?", a: "No. Our team is in Kozhikode, Kerala, India. We work with UAE businesses remotely; the UAE is 1.5 hours behind India, so our working hours overlap almost completely." },
    { q: "How long does it take to build a website?", a: "A business website usually takes a few weeks from approved content; ecommerce stores and web applications take longer depending on features. Your written scope includes the timeline." },
    { q: "How do I choose among web development companies in Abu Dhabi?", a: "Look at live work on your phone, ask who will actually build the site, check the technology, confirm in writing that you own everything, insist on an itemised quote, ask how SEO and Arabic are handled, and agree support terms before launch." },
    { q: "Do you build Arabic and bilingual websites?", a: "Yes, with full right-to-left layouts and proper Arabic fonts. The Arabic text should be written or checked by a native speaker, either your team or a translator you choose." },
    { q: "Can you integrate UAE payment gateways?", a: "Yes. We connect gateways commonly used by UAE stores, such as Network International, Telr, PayTabs or Stripe, with VAT shown correctly at checkout. Each provider approves merchants itself, so apply early." },
    { q: "Do I own my website after launch?", a: "Yes. The domain, hosting, code and design files are in your company's name, and we hand over every login at launch." },
    { q: "Is your website designing company SEO-ready?", a: "Every site launches with page titles and descriptions, structured data, fast mobile pages, a sitemap and Search Console set up. Ongoing SEO for competitive Abu Dhabi searches is a separate monthly service." },
  ],
  relatedSlugs: ["how-to-choose-web-design-company-dubai", "trustworthy-website-uae", "website-development-cost-dubai-uae"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
