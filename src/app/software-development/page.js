import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaCubes, FaUsers, FaFileInvoice, FaCogs, FaThLarge, FaMobileAlt, FaPlug, FaTools,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { SOFTWARE_PACKAGES } from "@/components/ecommerce/costs";
import SoftwareQuoteForm from "@/components/software/SoftwareQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /software-development — hub for Ivoniz's software services (SEO brief,
   24 Nov 2026). Owns "software development company" with Calicut / Kozhikode
   and Kerala intent, plus "custom software development company" (Google
   autocomplete data; volumes still to verify). The home page keeps "web
   development company in Calicut"; this page never targets web/app terms.
   Children: /erp-software-development, /crm-software-development and
   /billing-software-development. Cards keep #erp / #crm / #billing anchors.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/software-development";
const TITLE = "Software Development Company in Calicut, Kerala | Ivoniz LLP";
const DESCRIPTION =
  "Custom software development company in Calicut, Kerala. ERP, CRM, billing and business software built for your workflow. Talk to our team for a free quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Custom Software Development Company in Kerala & India",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Custom business software dashboard built by Ivoniz in Calicut" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Kerala & India",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  talk: "Hi Ivoniz, I'd like to talk to your developers about software for my business.",
  kerala: "Hi Ivoniz, I'm in Kerala and need software for my business. Can we meet for a requirement study?",
};

/* ERP / CRM / billing: anchor ids here until their own pages are built. */
const SERVICES = [
  { id: "erp", Icon: FaCubes, title: "ERP software development", text: <>Inventory, purchase, sales, production, HR and accounts in one system. See <Link href="/erp-software-development" className={LINK}>ERP software development</Link>.</>, quote: "erp" },
  { id: "crm", Icon: FaUsers, title: "CRM software development", text: <>Leads, follow-ups, sales pipeline and customer history, with WhatsApp and call tracking. See <Link href="/crm-software-development" className={LINK}>CRM software development</Link>.</>, quote: "crm" },
  { id: "billing", Icon: FaFileInvoice, title: "Billing software development", text: <>GST billing, POS, stock and reports built for your shop or business type. See <Link href="/billing-software-development" className={LINK}>billing software</Link>.</>, quote: "billing" },
  { id: "custom", Icon: FaCogs, title: "Custom business software", text: "Booking, job-card, dealer, field-service and approval systems.", quote: "custom" },
  { Icon: FaThLarge, title: "Web portals and dashboards", text: <>Customer, vendor, dealer and staff portals. See <Link href="/web-portal-development" className={LINK}>web portal development</Link>.</> },
  { Icon: FaMobileAlt, title: "Mobile apps for your software", text: <>Android and iOS apps on the same backend. See <Link href="/mobile-app-development" className={LINK}>mobile app development</Link>.</> },
  { Icon: FaPlug, title: "Integrations", text: "Tally, Zoho, payment gateways, WhatsApp Business API, SMS and e-invoicing." },
  { Icon: FaTools, title: "Software maintenance and upgrades", text: "Support, new features and modernisation of old systems." },
];

const INDUSTRIES = [
  ["Retail and supermarkets", "Billing, stock, purchase and loyalty"],
  ["Wholesale and distribution", "Dealer orders, credit limits, route sales"],
  ["Manufacturing", "Production planning, raw material, job work, quality"],
  ["Hospitals and clinics", "Patient records, appointments, pharmacy billing"],
  ["Schools and colleges", "Admissions, fees, attendance, exams"],
  ["Jewellery", "Gold rate, weight-based billing, old-gold exchange, stock by purity"],
  ["Restaurants", "POS, KOT, table management, online orders"],
  ["Real estate and construction", "Project costing, site expenses, client payments"],
];

const COMPARE = [
  ["Fit", "Generic workflows", "Built around your process"],
  ["Start time", "Immediate", "4–16 weeks"],
  ["Upfront cost", "Low", "Higher"],
  ["Ongoing fees", "Per-user subscriptions", "No per-user licence (you own it)"],
  ["Integrations", "Limited", "Whatever you need"],
  ["Best when", "Standard needs, small team", "Unique workflows, growing team, multiple branches"],
];

const PROCESS = [
  { title: "Requirement study", text: "We visit or call your team and map how work actually flows." },
  { title: "Scope and quote", text: "Modules, user roles, reports and a fixed price." },
  { title: "Prototype", text: "Screens you can click through before development." },
  { title: "Development", text: "Sprints with a test link to review progress." },
  { title: "Data migration and training", text: "Import from Excel, Tally or old software; train your staff." },
  { title: "Go live and support", text: "On-site or remote support during the first weeks, then a support plan." },
];

const FAQS = [
  { q: "How much does custom software development cost in Kerala?", a: "Small business tools typically cost ₹50,000 to ₹1.5 lakh, and multi-module business software ₹1.5 lakh to ₹5 lakh or more, depending on modules, users and integrations." },
  { q: "How long does it take to build custom software?", a: "A focused tool takes 3 to 6 weeks; full business software or ERP takes 6 to 16 weeks, and larger systems are delivered in phases." },
  { q: "Should I buy ready-made software or get custom software?", a: "Ready-made software suits standard needs. Custom software is better when your workflow is unique, you have several branches or roles, or you're paying growing per-user fees." },
  { q: "Can your software work with Tally or Zoho?", a: "Yes. We integrate custom software with Tally, Zoho Books and other tools so data flows without double entry." },
  { q: "Will I own the software and source code?", a: "Yes. After final payment you own the source code and data, with no per-user licence fees." },
  { q: "Do you provide support after launch?", a: "Yes. We offer on-site and remote support in Kerala, plus maintenance plans for updates and new features." },
  { q: "Can the software work on mobile?", a: "Yes. Our software runs in any browser on phones and computers, and we can add Android and iOS apps on the same system." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Custom Software Development",
      serviceType: "Software development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software services",
        itemListElement: [
          "ERP software development",
          "CRM software development",
          "Billing software development",
          "Custom business software development",
          "Software integrations",
          "Software maintenance and upgrades",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Software Development Company in Calicut, Kerala",
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
        { "@type": "ListItem", position: 2, name: "Software Development", item: PAGE_URL },
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
export default function SoftwareDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Software Development", href: "/software-development" }]} />
          <div className="mt-8"><Label>Software Development Company</Label></div>
          <HeroTitle outline="in Calicut, Kerala">Custom Software Development Company</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
              Ivoniz is a software development company in Calicut (Kozhikode), Kerala, that builds custom business
              software around the way your team actually works. From ERP and CRM systems to GST billing, inventory and
              industry-specific software, we replace spreadsheets and disconnected tools with one secure system your
              staff can use on any device. We work with businesses across Kerala and India.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Discuss Your Software Project" location="hero" />
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="Talk to Our Developers" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> HiLITE Business Park, Kozhikode</li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> You own the source code, with no per-user licence fees</li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> Start small, add modules as you grow</li>
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-20 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-10 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Software development services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Custom software development for the systems your business runs on, plus the portals, apps and
              integrations around them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map(({ id, Icon, title, text, quote }) => (
              <div key={title} id={id} className="border-r border-b border-white/10 p-7 flex flex-col min-h-[250px] scroll-mt-24">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-8 text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
                {quote && (
                  <a href={`#quote-${quote}`} className="mt-4 inline-flex items-center gap-1 text-[13.5px] text-white/75 hover:text-white underline underline-offset-4 decoration-white/25">
                    Get a quote <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Industries</Label>
            <Heading dark={false}>Software for your industry</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Every industry has its own way of working. We build the modules your business actually uses.
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

      {/* ── SIGNS YOU NEED CUSTOM SOFTWARE ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Is It Time?</Label>
            <Heading>Signs your business needs custom software</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              Most of our software projects start with one of these problems. If two or more sound familiar, a system
              built around your workflow will usually pay for itself.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ["Data lives in Excel and WhatsApp", "Stock, orders and customer details are spread across sheets and chats, and nobody trusts the numbers."],
              ["The same data is typed twice", "Staff re-enter bills into Tally, or copy orders from one system to another, and mistakes creep in."],
              ["Branches don't see each other", "Each shop or warehouse keeps its own records, so owners only see the full picture at month end."],
              ["Reports take days", "Sales, stock or collection reports are built by hand instead of being ready on screen."],
              ["Per-user fees keep rising", "Every new staff member adds another monthly licence to a tool that still doesn't fit."],
              ["Ready-made software forces workarounds", "Your process is different from the template, so the team works around the software, not with it."],
            ].map(([t, d]) => (
              <li key={t} className="p-6" style={GLASS}>
                <p className="text-[16.5px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CUSTOM VS READY-MADE ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px]">
          <Label>Compare</Label>
          <Heading>Custom software vs ready-made software</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[620px] text-left">
              <caption className="sr-only">Ready-made software compared with custom software from Ivoniz</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-6 py-4 w-[20%]"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">Ready-made (Tally, Zoho, Vyapar, etc.)</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white">Custom software (Ivoniz)</th>
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
            We also integrate with tools you already use. Custom software doesn&apos;t have to replace Tally or Zoho; it
            can work alongside them.
          </p>
        </div>
      </section>

      {/* ── COST ── */}
      <section id="cost" className={`relative py-20 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1100px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Software development cost</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[600px] text-left">
              <caption className="sr-only">Typical custom software development cost in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["Scope", "Typical cost (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SOFTWARE_PACKAGES.map((p) => (
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
            Indicative ranges. We can start with a smaller first phase and add modules as you grow.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-3">
            <p className="sm:col-span-2 text-[16px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>What affects the cost</p>
            {[
              "Number of modules and screens",
              "User roles, approvals and branches",
              "Reports and dashboards required",
              "Integrations (Tally, Zoho, payments, WhatsApp, e-invoicing)",
              "Data migration from old software or Excel",
              "Mobile apps on the same system",
            ].map((t) => (
              <p key={t} className="flex gap-3 text-[15px] text-white/70">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" aria-hidden="true" />{t}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Software Development Estimate" location="pricing" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our software development process</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(44px,4vw,64px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TECHNOLOGY + KERALA ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#0a0a0a" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article className="p-7 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Technology</Label>
            <h2 className="text-white" style={h2Style}>Technology we use</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              React and Next.js for fast web interfaces, Node.js for the backend, MongoDB or PostgreSQL for data,
              Flutter or React Native for mobile apps, and secure cloud hosting. Your software works in the browser and
              on mobile, and you own the source code.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Flutter", "React Native", "Cloud hosting"].map((t) => (
                <li key={t} className="px-3.5 py-1.5 rounded-full border border-white/15 text-[13px] text-white/80">{t}</li>
              ))}
            </ul>
          </article>

          <article className="p-7 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={h2Style}>Software development company in Calicut, serving all of Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Our team works from HiLITE Business Park, Kozhikode (Calicut). We build software for businesses across
              Kerala, including Kochi, Malappuram, Thrissur and Kannur, and visit clients for requirement study and
              training where needed.
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
              <PillLink href={waLink(WA.kerala)} external solid event="whatsapp_click" label="WhatsApp our Kerala team" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>
        </div>
      </section>

      {/* ── DATA SECURITY ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Security</Label>
            <Heading dark={false}>Your business data, kept safe</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Business software holds your sales, stock, customers and staff records. We build it so the right people
              see the right data, and nothing is lost.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {[
              ["Role-based access", "Owners, managers, accountants and staff each see only the screens and actions their role needs."],
              ["Audit trail", "Important changes, such as edited bills or stock adjustments, are logged with who changed what and when."],
              ["Automatic backups", "Regular database backups, so a deleted record or a failed device never means lost data."],
              ["Secure hosting", "HTTPS everywhere, encrypted passwords and cloud hosting, with servers in India available where you prefer."],
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
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why businesses choose Ivoniz</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote" label="Discuss Your Software Project" location="why_ivoniz" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Software, web and mobile apps from one team, on one backend",
              "On-site requirement study and staff training in Kerala",
              "Phased delivery: start small, add modules later",
              "You own the source code and data, with no per-user licence fees",
              "Local support you can call or WhatsApp",
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
      <section className={`py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Software development FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Need a customer or dealer login area? See{" "}
              <Link href="/web-portal-development" className={LINK}>web portal development</Link>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-24 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        {["erp", "crm", "billing", "custom"].map((id) => <span key={id} id={`quote-${id}`} className="absolute top-0" aria-hidden="true" />)}
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Get Started</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Tell us how your business works. <span style={OUTLINE}>We&apos;ll build software that fits.</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Share what you use today and what slows your team down. We&apos;ll suggest the right modules and send a
              scope and fixed quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <SoftwareQuoteForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Requirement Call" message={WA.talk} />
    </main>
  );
}
