import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaInbox, FaRandom, FaPhoneAlt, FaBell, FaColumns, FaFileInvoice, FaHistory, FaChartLine, FaMobileAlt,
  FaCheck, FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { CRM_PACKAGES, CRM_FROM } from "@/components/ecommerce/costs";
import CrmQuoteForm from "@/components/software/CrmQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /software-development/crm-software-development — owns custom CRM terms (SEO brief, 24 Nov 2026;
   Google autocomplete, volumes still to verify): "crm software development
   company (in india / in kochi)", "custom crm software development",
   "crm software development cost in india", real estate and healthcare CRM.
   WhatsApp integration leads (ranking Kochi pages lead with it). Kozhikode is
   a local gap (directory listings only).
   Breadcrumb: Home › Software Development › CRM Software Development.
   Does NOT target: ERP (link only), generic software development.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/software-development/crm-software-development";
const TITLE = "Custom CRM Software Development Company in Kerala | Ivoniz LLP";
const DESCRIPTION =
  "Custom CRM software development for Kerala and Indian businesses. Leads, follow-ups, WhatsApp and call tracking in one CRM you own. Get a free CRM estimate.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "CRM Software Development with WhatsApp | Calicut & Kochi",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Custom CRM dashboard with sales pipeline and WhatsApp integration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Software Development with WhatsApp | Calicut & Kochi",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  demo: "Hi Ivoniz, I'd like to book a free CRM demo. Company: ___ Industry: ___",
  talk: "Hi Ivoniz, I'm looking for a custom CRM for my sales team. Can we talk?",
};

const FEATURES = [
  { Icon: FaInbox, title: "Lead capture", text: "Website forms, Facebook and Instagram lead ads, Google Ads, IndiaMart, JustDial and WhatsApp." },
  { Icon: FaRandom, title: "Auto lead assignment", text: "By location, product or round-robin across your sales team." },
  { Icon: FaWhatsapp, title: "WhatsApp integration", text: "Send and log WhatsApp messages and templates from the CRM (WhatsApp Business API)." },
  { Icon: FaPhoneAlt, title: "Call tracking", text: "Click-to-call, call logs and notes from the mobile app." },
  { Icon: FaBell, title: "Follow-up reminders", text: "Never miss a callback; overdue alerts for managers." },
  { Icon: FaColumns, title: "Sales pipeline", text: "Drag-and-drop stages from enquiry to closed." },
  { Icon: FaFileInvoice, title: "Quotations and invoices", text: "Create and send from the CRM; sync with Tally or Zoho Books." },
  { Icon: FaHistory, title: "Customer history", text: "Every call, message, visit, quotation and payment in one place." },
  { Icon: FaChartLine, title: "Reports and dashboards", text: "Conversion rate, source performance and team targets." },
  { Icon: FaMobileAlt, title: "Mobile CRM app", text: <>For field sales and site visits, with GPS check-in, built by our <Link href="/mobile-app-development" className={LINK}>mobile app development</Link> team.</> },
];

const INDUSTRIES = [
  ["Real estate CRM", "Property inventory, site-visit scheduling, broker management, booking and payment tracking."],
  ["Education CRM", "Student enquiries, counselling, admissions and fee follow-ups for schools, colleges and coaching centres."],
  ["Healthcare CRM", "Patient enquiries, appointment follow-ups and treatment packages."],
  ["Travel and tourism CRM", "Enquiries, itineraries, bookings and visa follow-ups."],
  ["Automobile dealer CRM", "Test drives, finance follow-ups and service reminders."],
  ["B2B and distribution CRM", "Dealer leads, field visits, orders and outstanding payments."],
];

const COMPARE = [
  ["Fit to your sales process", "Configure within limits", "Built around your process"],
  ["Monthly fees", "Per user, every month", "None: you own it"],
  ["WhatsApp and local tools (IndiaMart, JustDial)", "Often add-ons", "Built in"],
  ["Language", "English", "English plus Malayalam if needed"],
  ["Best for", "Standard pipelines", "Teams with a unique sales process or many users"],
];

const PROCESS = [
  { title: "Sales process study", text: "We map your lead sources, stages and team roles." },
  { title: "CRM design", text: "Screens and workflow approved by your sales head." },
  { title: "Development", text: "Web CRM, mobile app and integrations." },
  { title: "Data import", text: "Existing leads and customers from Excel or your old CRM." },
  { title: "Team training", text: "On-site or online training for sales staff and managers." },
  { title: "Go live and improve", text: "Support plan and new features as your process changes." },
];

const FAQS = [
  { q: "How much does CRM software development cost in India?", a: "A starter custom CRM typically costs ₹60,000 to ₹1.5 lakh, and a business CRM with WhatsApp, call tracking and a mobile app ₹1.5 lakh to ₹4 lakh or more." },
  { q: "Can the CRM send and track WhatsApp messages?", a: "Yes. We integrate the WhatsApp Business API so your team can send templates and messages and log every chat against the lead." },
  { q: "Can leads from IndiaMart, JustDial and Facebook come into the CRM automatically?", a: "Yes. We connect lead sources such as website forms, Facebook and Instagram lead ads, Google Ads, IndiaMart and JustDial." },
  { q: "Is a custom CRM better than Zoho CRM?", a: "A custom CRM is better when your sales process is unique, you have many users, or you want to avoid monthly per-user fees. Zoho suits teams with standard processes." },
  { q: "Does the CRM have a mobile app?", a: "Yes. Sales staff can manage leads, make calls, log visits and get reminders from an Android or iOS app." },
  { q: "How long does CRM development take?", a: "A starter CRM goes live in 4 to 6 weeks; CRMs with WhatsApp, a mobile app and integrations take 6 to 10 weeks." },
  { q: "Will we own the CRM?", a: "Yes. You own the source code and data, with no per-user licence fees." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Custom CRM Software Development",
      serviceType: "CRM software development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "City", name: "Kochi" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CRM solutions",
        itemListElement: ["Real estate CRM", "Education CRM", "Healthcare CRM", "Travel CRM", "Automobile dealer CRM", "B2B and distribution CRM", "WhatsApp CRM integration"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Custom CRM Software Development Company in Kerala",
      description: DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      publisher: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
        { "@type": "ListItem", position: 2, name: "Software Development", item: "https://ivoniz.com/software-development" },
        { "@type": "ListItem", position: 3, name: "CRM Software Development", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

const h2Style = { fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em" };

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function CrmSoftwareDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "Software Development", href: "/software-development" },
              { label: "CRM Software Development", href: "/software-development/crm-software-development" },
            ]}
          />
          <div className="mt-8"><Label>CRM Software Development</Label></div>
          <HeroTitle outline="with WhatsApp Integration">Custom CRM Software Development Company</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
                Ivoniz is a CRM software development company in Calicut, Kerala, that builds custom CRM systems around
                how your team sells. Capture leads from your website, Facebook, Instagram and WhatsApp; assign them
                automatically; track every call and follow-up; and see your sales pipeline live on any phone or laptop.
                We build CRMs for businesses across Kerala and India.
              </p>
              {/* Starting price + go-live (brief). Indicative until real figures are set. */}
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[13px] text-white/60">Custom CRM from</span>
                <span className="text-[20px] text-white tabular-nums" style={{ fontFamily: OPEN_SANS }}>{CRM_FROM.price}</span>
                <span className="text-[13px] text-white/60">· live in {CRM_FROM.golive}</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a CRM Estimate" location="hero" event="estimate_click" />
              <PillLink href={waLink(WA.demo)} external event="demo_click" label="See a CRM Demo" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Custom CRM Software Development</Label>
            <Heading>CRM features we build</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Pick the features your sales team needs. Every lead, call and message lands in one place, so nothing
              falls through the cracks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
            {FEATURES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-6 flex flex-col sm:min-h-[220px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-6 text-[18px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2 text-[13.5px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CRM SPOTLIGHT ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Label>WhatsApp CRM</Label>
            <Heading>Your sales team already sells on WhatsApp. Now the CRM can see it.</Heading>
            <p className="mt-6 text-[16px] text-white/65 leading-relaxed">
              Most Kerala businesses close deals on WhatsApp and phone calls, not email. Generic CRMs treat WhatsApp as
              an add-on. We build it into the core, through the official WhatsApp Business API, so every conversation is
              tied to the right lead and visible to managers.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              ["Enquiry arrives on WhatsApp", "The CRM creates the lead automatically and assigns it to the right salesperson."],
              ["Salesperson replies from the CRM", "Using approved templates for price lists, brochures and payment links."],
              ["Every chat is logged", "Managers see the full conversation history, even if a salesperson leaves."],
              ["Follow-ups run on time", "Reminders and automatic template messages when a lead goes quiet."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5 p-5" style={GLASS}>
                <span className="text-[13px] text-white/55 tabular-nums pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[16.5px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                  <p className="mt-1.5 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SIGNS YOU NEED A CRM ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Is It Time?</Label>
            <Heading>Signs your sales team needs a CRM</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              If leads arrive faster than your team can track them, sales are being lost quietly. These are the problems
              a custom CRM fixes first.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ["Leads sit in personal phones", "Enquiries live in salespeople's WhatsApp and call logs, so the business can't see them."],
              ["Follow-ups depend on memory", "Callbacks are missed because reminders are on paper or nowhere at all."],
              ["Nobody knows which ads work", "Facebook, IndiaMart and walk-in leads are mixed together, so marketing spend is guesswork."],
              ["Leads leave with the salesperson", "When someone resigns, their customer history and open deals go with them."],
              ["Managers chase updates", "Sales meetings start with \"what's the status?\" instead of a live pipeline on screen."],
              ["Quotes take too long", "Prices and quotations are typed from scratch, so faster competitors win the deal."],
            ].map(([t, d]) => (
              <li key={t} className="p-6" style={GLASS}>
                <p className="text-[16.5px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Industries</Label>
            <Heading dark={false}>CRM software for your industry</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              As a real estate CRM software development company and a healthcare CRM software development company, we
              build pipelines that match how each industry actually sells.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {INDUSTRIES.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <dt className="text-[16px] font-semibold text-black">{t}</dt>
                <dd className="mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CUSTOM VS READY-MADE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px]">
          <Label>Compare</Label>
          <Heading>Custom CRM vs Zoho, Salesforce and other ready-made CRMs</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[620px] text-left">
              <caption className="sr-only">Ready-made CRM compared with custom CRM from Ivoniz</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-6 py-4 w-[26%]"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">Ready-made CRM</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white">Custom CRM by Ivoniz</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, r, c]) => (
                  <tr key={k} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-4 text-[14px] font-semibold text-white/70">{k}</th>
                    <td className="px-6 py-4 text-[15px] text-white/60">{r}</td>
                    <td className="px-6 py-4 text-[15px] text-white">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[16px] text-white/65 leading-relaxed">
            Already on Zoho? We can build custom modules and integrations around it instead of replacing it.
          </p>
        </div>
      </section>

      {/* ── COST ── */}
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1100px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">CRM software development cost in India</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[600px] text-left">
              <caption className="sr-only">Typical custom CRM software development cost in India, in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["Scope", "Typical cost (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CRM_PACKAGES.map((p) => (
                  <tr key={p.id} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 align-top font-normal">
                      <span className="block text-[16px] text-white" style={{ fontFamily: OPEN_SANS }}>{p.label}</span>
                      <span className="block mt-1 text-[13px] text-white/55">{p.note}</span>
                    </th>
                    <td className="px-6 py-5 text-[17px] text-white tabular-nums whitespace-nowrap align-top" style={{ fontFamily: OPEN_SANS }}>{p.inr}</td>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 whitespace-nowrap align-top">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            Indicative ranges. WhatsApp Business API messaging charges are paid separately to Meta or your provider.
            Need stock, purchase and accounts too? See <Link href="/software-development/erp-software-development" className={LINK}>ERP software development</Link>.
          </p>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get Your CRM Estimate" location="pricing" event="estimate_click" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">How we build your CRM</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9 sm:gap-y-12">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-3 sm:mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(36px,4vw,64px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── KERALA + INTEGRATIONS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#0a0a0a" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={h2Style}>CRM software development in Calicut, Kochi and across Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Ivoniz is based at HiLITE Business Park, Kozhikode (Calicut), and builds CRM systems for businesses across
              Kerala, including Kochi, Malappuram and Thrissur. As a CRM software development company serving Kochi and
              Calicut, we can meet your sales team in person to map your process and train them at launch.
            </p>
            {/* NAP: keep identical to the Google Business Profile (source: src/lib/schema.js) */}
            <address className="not-italic mt-6 grid gap-3 text-[14.5px] text-white/75 flex-1">
              <span className="flex gap-3">
                <FaMapMarkerAlt aria-hidden="true" className="shrink-0 mt-1 text-white/55" />
                <span>Ivoniz LLP, {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India</span>
              </span>
              <a href="tel:+919645760023" className="flex items-center gap-3 hover:text-white">
                <FaPhoneAlt aria-hidden="true" className="shrink-0 text-white/55" /> +91 96457 60023
              </a>
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink href={waLink(WA.demo)} external solid event="demo_click" label="Book a Free CRM Demo" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>

          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Integrations</Label>
            <h2 className="text-white" style={h2Style}>Connected to your lead sources and accounts</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-white/80">
              {["WhatsApp Business API", "Facebook and Instagram lead ads", "Google Ads lead forms", "IndiaMart and JustDial", "Your website contact forms", "Tally and Zoho Books", "SMS and email", "Telephony / IVR call logs"].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Want customers to log in, see quotes or raise requests? Add a customer portal through our{" "}
              <Link href="/website-development/web-portal-development" className={LINK}>web portal development</Link> team, on the same data.
            </p>
          </article>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why choose Ivoniz for CRM development</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote" label="Book a Free CRM Demo" location="why_ivoniz" event="demo_click" />
              <Link href="/software-development" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                All our software development company services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "CRM built around your sales process, with WhatsApp built in",
              "No per-user monthly fees; you own the CRM and data",
              "Web CRM plus mobile app for field teams",
              "Integrates with Tally, Zoho, IndiaMart, JustDial and your website",
              "Local team in Kerala for training and support",
            ].map((t, i) => (
              <li key={t} className="flex items-baseline gap-6 border-b border-white/10 py-6">
                <span className="text-[13px] text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] sm:text-[19px] text-white/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 300 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>CRM software development FAQs</Heading>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-16 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Free CRM Demo</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              See how a custom CRM <span style={OUTLINE}>would work for your team</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Book a free demo. We&apos;ll show a working CRM, map your sales process and send a clear estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <CrmQuoteForm />
        </div>
      </section>

      <RelatedReading slugs={["ai-automation-small-business","whatsapp-business-uae"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free CRM Demo" message={WA.demo} />
    </main>
  );
}
