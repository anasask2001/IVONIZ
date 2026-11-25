import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaWarehouse, FaShoppingBasket, FaTruck, FaIndustry, FaFileInvoiceDollar, FaUserTie, FaUsers,
  FaChartBar, FaMobileAlt, FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { ERP_PACKAGES, ERP_FROM } from "@/components/ecommerce/costs";
import ErpQuoteForm from "@/components/software/ErpQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /software-development/erp-software-development — owns custom ERP terms for Kerala and India
   (SEO brief, 24 Nov 2026; Google autocomplete, volumes still to verify):
   "erp software development company in india", "custom erp software
   development services", "erp software development cost", "… in kochi",
   industry ERPs (manufacturing, school, healthcare, engineering).
   Calicut is a local gap (no visible ERP-development competitor page).
   Breadcrumb: Home › Software Development › ERP Software Development.
   Does NOT target: CRM, billing/POS (own pages — link only), generic software.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/software-development/erp-software-development";
const TITLE = "Custom ERP Software Development Company in Kerala | Ivoniz LLP";
const DESCRIPTION =
  "Custom ERP software development for manufacturers, distributors, schools and hospitals in Kerala and India. No per-user licence fees. Get an ERP estimate.";

const CRM_HREF = "/software-development/crm-software-development";
const BILLING_HREF = "/software-development/billing-software-development";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Custom ERP Software Development in Calicut & Kochi",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Custom ERP software dashboard with inventory, sales and production" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom ERP Software Development in Calicut & Kochi",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  talk: "Hi Ivoniz, I'm looking for custom ERP software for my business. Can we talk?",
  visit: "Hi Ivoniz, I'd like to book a free ERP requirement visit. Company: ___ City: ___",
};

const MODULES = [
  { Icon: FaWarehouse, title: "Inventory and warehouse", text: "Stock by location, batch, expiry and barcode; reorder alerts." },
  { Icon: FaShoppingBasket, title: "Purchase", text: "Requests, approvals, purchase orders, GRN and supplier payments." },
  { Icon: FaTruck, title: "Sales and distribution", text: "Quotations, orders, dealer pricing, credit limits, delivery." },
  { Icon: FaIndustry, title: "Production and manufacturing", text: "BOM, work orders, job work, raw material planning, quality checks." },
  { Icon: FaFileInvoiceDollar, title: "Accounts and GST", text: "Invoices, ledgers, GST reports, e-invoicing; Tally or Zoho integration." },
  { Icon: FaUserTie, title: "HR and payroll", text: "Attendance, leave, salary, statutory deductions." },
  { Icon: FaUsers, title: "CRM", text: <>Leads, follow-ups and customer history. See <Link href={CRM_HREF} className={LINK}>CRM software development</Link>.</> },
  { Icon: FaChartBar, title: "Reports and dashboards", text: "Live sales, stock, profit and branch performance." },
  { Icon: FaMobileAlt, title: "Mobile app", text: <>Field sales, approvals and dashboards on Android and iOS, built by our <Link href="/mobile-app-development" className={LINK}>mobile app</Link> team.</> },
];

const INDUSTRIES = [
  ["Manufacturing ERP", "Production planning, BOM, machine and labour costing, job work."],
  ["Distribution and wholesale ERP", "Dealer orders, route sales, van sales, credit control."],
  ["Retail and supermarket ERP", <>Multi-branch billing, stock transfer, loyalty. See <Link key="b" href={BILLING_HREF} className={LINK_DARK}>billing software development</Link>.</>],
  ["School and college ERP", "Admissions, fees, attendance, exams, transport, parent app."],
  ["Hospital and clinic ERP", "Patient records, appointments, pharmacy, lab and billing."],
  ["Construction and engineering ERP", "Project costing, site expenses, material tracking, subcontractors."],
  ["Jewellery ERP", "Weight and purity stock, gold rate, old-gold exchange, karigar (smith) tracking."],
];

const COMPARE = [
  ["Fit to your process", "You adapt to the software", "Software adapts to you"],
  ["Licence fees", "Per user, every year", "None: you own it"],
  ["Features you don't need", "Many", "Only what you use"],
  ["Implementation", "Configuration + customisation", "Built from your requirements"],
  ["Best for", "Standard processes, large budgets", "Unique workflows, growing SMEs"],
];

const PHASES = [
  ["Phase 1", "Inventory, sales and purchase", "Your team stops working from spreadsheets and sees live stock."],
  ["Phase 2", "Accounts, GST and reports", "Billing flows into accounts or Tally, and owners get daily dashboards."],
  ["Phase 3", "Production, HR or CRM", "Added once the core is stable, based on what the business needs next."],
];

const PROCESS = [
  { title: "On-site requirement study", text: "We visit your office, shop floor or warehouse and map every workflow." },
  { title: "Module plan and quote", text: "Phased plan, user roles, reports and a fixed price." },
  { title: "Prototype", text: "Clickable screens approved by your team." },
  { title: "Phased development", text: "Priority modules first, with a test system for your staff." },
  { title: "Data migration", text: "Import masters and opening stock from Excel, Tally or old software." },
  { title: "Training and go-live", text: "On-site staff training and go-live support." },
  { title: "Support and new modules", text: "Ongoing support plan and additions as you grow." },
];

const FAQS = [
  { q: "How much does custom ERP software development cost in Kerala?", a: "A starter custom ERP typically costs ₹2 lakh to ₹5 lakh, and multi-branch ERP with a mobile app ₹5 lakh to ₹12 lakh or more, depending on modules and users." },
  { q: "How long does ERP development take?", a: "Priority modules usually go live in 8 to 12 weeks; complete ERP systems are delivered in phases over 3 to 8 months." },
  { q: "Is custom ERP better than SAP or Odoo?", a: "Custom ERP is better when your processes are unique or you want to avoid yearly per-user licence fees. Ready-made ERPs suit standard processes and larger budgets." },
  { q: "Can your ERP integrate with Tally?", a: "Yes. We sync sales, purchase and ledger data with Tally or Zoho Books, so your accounts team keeps using the tools they know." },
  { q: "Can we start with a few modules?", a: "Yes. Most clients start with inventory, sales and purchase, then add production, HR or CRM later." },
  { q: "Do you build school and hospital ERP?", a: "Yes. We build school ERP (admissions, fees, attendance, exams) and hospital ERP (patients, appointments, pharmacy, billing)." },
  { q: "Will we own the ERP software?", a: "Yes. You own the source code and data, with no per-user licence fees." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Custom ERP Software Development",
      serviceType: "ERP software development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "City", name: "Kochi" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ERP solutions",
        itemListElement: ["Manufacturing ERP", "Distribution and wholesale ERP", "Retail ERP", "School ERP", "Hospital ERP", "Construction ERP", "Jewellery ERP"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Custom ERP Software Development Company in Kerala",
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
        { "@type": "ListItem", position: 3, name: "ERP Software Development", item: PAGE_URL },
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
export default function ErpSoftwareDevelopmentPage() {
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
              { label: "ERP Software Development", href: "/software-development/erp-software-development" },
            ]}
          />
          <div className="mt-8"><Label>ERP Software Development</Label></div>
          <HeroTitle outline="in Kerala and India">Custom ERP Software Development Company</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
                Ivoniz builds custom ERP software that brings your inventory, purchase, sales, production, accounts and
                HR into one system, built around how your business actually runs. As an ERP software development
                company in Calicut, Kerala, we work with manufacturers, distributors, retailers, schools and hospitals
                across Kerala and India. No per-user licence fees: you own the software.
              </p>
              {/* Starting price + go-live (brief: competitors show these above the fold). Indicative until real figures are set. */}
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[13px] text-white/60">Custom ERP from</span>
                <span className="text-[20px] text-white tabular-nums" style={{ fontFamily: OPEN_SANS }}>{ERP_FROM.price}</span>
                <span className="text-[13px] text-white/60">· first modules live in {ERP_FROM.golive}</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get an ERP Estimate" location="hero" event="estimate_click" />
              <PillLink href={waLink(WA.visit)} external event="whatsapp_click" label="Book a Free Requirement Visit" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section id="modules" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Custom ERP Software Development Services</Label>
            <Heading>ERP modules we build</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Choose the modules your business needs today and add more later. Every module shares one database, so
              stock, sales and accounts always match.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {MODULES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[210px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-7 text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNS YOU NEED AN ERP ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Is It Time?</Label>
            <Heading>Signs your business is ready for an ERP</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              Billing software and spreadsheets work well until the business grows past one location or one person who
              knows everything. These are the moments our ERP clients usually call us.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ["Stock never matches", "The system says one thing, the shelf says another, and branches can't see each other's stock."],
              ["You don't know true production cost", "Raw material, labour and job-work costs aren't tied to each batch, so pricing is guesswork."],
              ["Purchase runs on phone calls", "Requests and approvals happen on WhatsApp, with no record of who approved what."],
              ["Month-end takes a week", "Sales, purchase and stock have to be reconciled by hand before accounts can close."],
              ["Owners wait for reports", "Daily sales, outstanding payments and profit by branch need someone to prepare them."],
              ["Growth adds chaos, not profit", "Each new branch, product line or salesperson adds more manual work instead of more control."],
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
            <Heading dark={false}>ERP software for your industry</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              From manufacturing ERP software development to school ERP, and as a healthcare ERP software development
              company for hospitals and clinics, we build each system around how that industry works.
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

      {/* ── CUSTOM VS READY-MADE ERP ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px]">
          <Label>Compare</Label>
          <Heading>Custom ERP vs SAP, Odoo and other ready-made ERPs</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[620px] text-left">
              <caption className="sr-only">Ready-made ERP compared with custom ERP from Ivoniz</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-6 py-4 w-[22%]"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">Ready-made ERP (SAP B1, Odoo, Sage, etc.)</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white">Custom ERP by Ivoniz</th>
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
            Already using Tally or Zoho? We build ERP modules that work alongside them, so your accountant keeps the
            tools they know.
          </p>
        </div>
      </section>

      {/* ── COST + PHASES ── */}
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1100px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">ERP software development cost</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[600px] text-left">
              <caption className="sr-only">Typical custom ERP software development cost in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["Scope", "Typical cost (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ERP_PACKAGES.map((p) => (
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
            Indicative ranges. We usually deliver ERP in phases: the most important modules first, so your team gets
            value within weeks. Manufacturing ERP software development cost depends mainly on how many production
            stages, units and costing rules need to be modelled.
          </p>

          <h3 className="mt-12 text-white" style={h2Style}>How phased ERP delivery works</h3>
          <ol className="mt-6 grid md:grid-cols-3 gap-3">
            {PHASES.map(([n, t, d]) => (
              <li key={n} className="p-6" style={GLASS}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">{n}</p>
                <p className="mt-2 text-[17px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get Your ERP Estimate" location="pricing" event="estimate_click" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our ERP development process</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-9 sm:gap-y-12">
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
            <h2 className="text-white" style={h2Style}>ERP software development in Calicut, Kochi and across Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Ivoniz is based at HiLITE Business Park, Kozhikode (Calicut). As an ERP software development company
              serving Kochi and the whole state, we deliver ERP projects across Kerala, including Malappuram, Thrissur
              and Kannur, with on-site requirement study and staff training. For businesses elsewhere in India, we work
              remotely with scheduled site visits.
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
              <PillLink href={waLink(WA.visit)} external solid event="whatsapp_click" label="Book a Free Requirement Visit" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>

          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Integrations</Label>
            <h2 className="text-white" style={h2Style}>Works with the tools you already use</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              A custom ERP should connect your business, not create another island. We integrate it with:
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-white/80">
              {["Tally and Zoho Books", "GST e-invoicing and e-way bills", "Payment gateways and UPI", "WhatsApp Business API and SMS", "Barcode scanners and label printers", "Biometric attendance devices"].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Dealer and vendor logins can be added through our <Link href="/website-development/web-portal-development" className={LINK}>web portal development</Link> team.
            </p>
          </article>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Deliverables</Label>
            <Heading dark={false}>What you get with every ERP project</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              A custom ERP is a long-term business asset, so you receive everything needed to run, support and extend
              it, whoever works on it next.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {[
              ["Requirement document", "Every workflow, role, approval and report agreed in writing before development starts."],
              ["Clickable prototype", "Screens your team tests and signs off, so the build matches how they work."],
              ["Test system", "A separate copy where staff practise with sample data before go-live."],
              ["Data migration", "Item masters, customers, suppliers and opening balances imported and checked."],
              ["User guides and training", "Role-wise guides plus on-site or online training for each department."],
              ["Source code and access", "Code, database and hosting access handed over in your company's name."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <dt className="text-[16px] font-semibold text-black">{t}</dt>
                <dd className="mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why choose Ivoniz for ERP development</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote" label="Book a Free ERP Requirement Visit" location="why_ivoniz" />
              <Link href="/software-development" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                All our software development company services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Custom ERP built around your process, not a template",
              "No per-user licence fees; you own the source code and data",
              "Web ERP plus mobile app on one system",
              "On-site study, training and support in Kerala",
              "Phased delivery to control cost and risk",
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
            <Heading>ERP software development FAQs</Heading>
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
            <Label>Free Requirement Visit</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Book a free <span style={OUTLINE}>ERP requirement visit</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              We&apos;ll visit your business (Kerala) or meet online, map your workflows and send a phased ERP plan with
              a fixed estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <ErpQuoteForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free ERP Visit" message={WA.visit} />
    </main>
  );
}
