import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaUsers, FaHandshake, FaTruckLoading, FaIdBadge, FaGraduationCap, FaHeartbeat, FaIdCard, FaBuilding,
  FaUserLock, FaKey, FaTachometerAlt, FaProjectDiagram, FaFileUpload, FaCreditCard, FaFileExport, FaUserCog,
  FaLanguage, FaHistory, FaMobileAlt, FaLock, FaCheck,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import RoleDemo from "@/components/portal/RoleDemo";
import PortalPlanner from "@/components/portal/PortalPlanner";
import { PORTAL_PACKAGES, PORTAL_FIRST_PHASE } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/web-portal-development — owns "web portal development" and portal-type
   terms (customer, B2B / dealer, vendor, employee, student, patient portals).
   High-value leads: optimised for qualified conversations, not form volume.
   URL kept flat like the other service pages; breadcrumb parent is
   Website Development (the brief's /web-development/ folder isn't used).
   Does NOT target: web application / SaaS development, custom website
   development, product catalogue website, ecommerce website development.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/web-portal-development";
const TITLE = "Web Portal Development Company in Kerala | Ivoniz LLP";
const DESCRIPTION =
  "Custom web portal development for customers, dealers, vendors, staff and students. Secure, role-based portals for Kerala, UAE and GCC businesses. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Custom Web Portal Development | Customer, B2B & Employee",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Custom web portal dashboard built by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Portal Development | Customer, B2B & Employee",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK_DARK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const CALL_MSG = "Hi Ivoniz, we're planning a web portal for our company. Can we book a discovery call?";

const TYPES = [
  { Icon: FaUsers, t: "Customer portals", d: "Order history, invoices, support tickets, service requests and account management." },
  { Icon: FaHandshake, t: "B2B and dealer portals", d: "Dealer-specific pricing, bulk ordering, credit limits, stock visibility and order tracking." },
  { Icon: FaTruckLoading, t: "Vendor and supplier portals", d: "Purchase orders, quotations, invoice submission and payment status." },
  { Icon: FaIdBadge, t: "Employee portals and intranets", d: "Announcements, documents, leave, attendance, payslips and approvals." },
  { Icon: FaGraduationCap, t: "Student and education portals", d: "Admissions, attendance, results, timetables, fees and parent access." },
  { Icon: FaHeartbeat, t: "Patient and healthcare portals", d: "Appointments, lab reports, prescriptions and teleconsultation links." },
  { Icon: FaIdCard, t: "Membership and community portals", d: "Member profiles, renewals, events and gated content." },
  { Icon: FaBuilding, t: "Real estate and property portals", d: "Listings, tenant self-service, maintenance requests and payments." },
];

const FEATURES = [
  { Icon: FaUserLock, t: "Secure login with role-based access control" },
  { Icon: FaKey, t: "Two-factor authentication and single sign-on (Google, Microsoft, UAE Pass where required)" },
  { Icon: FaTachometerAlt, t: "Personalised dashboards for each user type" },
  { Icon: FaProjectDiagram, t: "Workflows and approvals with email, SMS and WhatsApp notifications" },
  { Icon: FaFileUpload, t: "Document upload, storage and e-signature integration" },
  { Icon: FaCreditCard, t: "Online payments and invoice download" },
  { Icon: FaFileExport, t: "Search, filters and exportable reports (Excel / PDF)" },
  { Icon: FaUserCog, t: "Admin panel to manage users, roles, content and settings" },
  { Icon: FaLanguage, t: "Multi-language, including Arabic (RTL)" },
  { Icon: FaHistory, t: "Audit logs and activity history" },
  { Icon: FaMobileAlt, t: "Mobile-responsive, with an optional app on the same backend" },
];

/* TODO before launch: confirm integrations Ivoniz has delivered */
const INTEGRATIONS = [
  ["ERP and accounting", ["Tally", "Zoho Books", "Odoo", "SAP Business One"]],
  ["CRM", ["Zoho CRM", "HubSpot", "Salesforce"]],
  ["Industry systems", ["Hospital (HMS)", "School (LMS)", "HR systems"]],
  ["Payments", ["Razorpay", "PayTabs", "Telr", "Stripe"]],
  ["Messaging", ["WhatsApp Business API", "SMS", "Email"]],
  ["Workspace", ["Cloud storage", "Google Workspace", "Microsoft 365"]],
];

const SECURITY = ["Encrypted connections", "Hashed passwords", "Role-based permissions", "Secure file storage", "Regular backups", "Activity logs", "Protection against common web attacks", "In-region hosting option"];

const PROCESS = [
  { title: "Discovery workshop", text: "User groups, workflows, data sources and success measures." },
  { title: "Requirements and scope", text: "Feature list, user roles, integrations, phased plan and fixed quote." },
  { title: "UX design and prototype", text: "Clickable prototype tested with real users before development." },
  { title: "Agile development", text: "Two-week sprints with a demo at the end of each." },
  { title: "Testing and security review", text: "Functional, performance and security testing; user acceptance testing." },
  { title: "Launch, training and support", text: "Data migration, go-live, training and ongoing maintenance." },
];

const MARKETS = [
  {
    label: "Kerala and India",
    text: "From Kozhikode (Calicut), we build portals for hospitals, schools, distributors and growing companies across Kerala, including Kochi and Thrissur, and across India, with Malayalam and English interfaces where needed.",
    cta: "WhatsApp our Kerala team",
    message: "Hi Ivoniz, we're planning a web portal for our company in Kerala. Can we book a discovery call?",
    location: "markets_kerala",
  },
  {
    label: "UAE, Saudi Arabia, Qatar and Oman",
    text: "We deliver bilingual English–Arabic portals with RTL interfaces, in-region hosting options, and integration with local identity and payment systems where your project needs them. Workshops and demos run in Gulf time.",
    link: { href: "/website-development/web-application-development-dubai", label: "Web application development for Dubai" },
    cta: "Book a call in Gulf time",
    message: "Hi Ivoniz, we're planning a web portal for our company in the UAE / GCC. Can we book a discovery call?",
    location: "markets_gcc",
  },
  {
    label: "Other countries",
    text: "For organisations outside India and the Gulf, we can build lightweight portals that work well on mobile and slower connections, delivered remotely with calls in your time zone.",
    cta: "Talk to our team",
    message: "Hi Ivoniz, we're planning a web portal for our organisation outside India. Can we talk?",
    location: "markets_international",
  },
];

const FAQS = [
  { q: "What is web portal development?", a: "Web portal development is building a secure, login-based website where customers, partners, employees or students access their own information, tools and services in one place." },
  { q: "What is the difference between a website and a web portal?", a: "A website is mostly public and gives the same information to everyone; a web portal requires login and shows each user personalised data and actions based on their role." },
  { q: "How much does web portal development cost in India?", a: "A basic portal typically costs ₹1,50,000 to ₹4,00,000, and business portals with multiple roles and integrations cost ₹4,00,000 to ₹12,00,000 or more." },
  { q: "How much does a web portal cost in the UAE?", a: "A basic portal typically starts around AED 25,000, with multi-role business portals ranging from AED 60,000 to 150,000 or more." },
  { q: "How long does it take to develop a web portal?", a: "A first phase usually takes 8 to 12 weeks; larger portals are delivered in phases over 3 to 6 months." },
  { q: "Can the portal connect to our ERP, CRM or existing software?", a: "Yes. We integrate portals with ERP, accounting, CRM, HR, hospital and school systems through APIs so users see live data." },
  { q: "Is my data secure in a web portal?", a: "Yes. We use encrypted connections, role-based permissions, two-factor login, audit logs and regular backups, and can host data in your country where required." },
  { q: "Can you build an Arabic web portal?", a: "Yes. We build bilingual English and Arabic portals with full right-to-left support." },
  { q: "Can we get a mobile app for the portal?", a: "Yes. The portal is mobile-responsive, and we can build Android and iOS apps on the same backend." },
  { q: "Who owns the portal's source code?", a: "You do. After final payment, you own the source code, data and hosting account." },
];

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Web Portal Development",
      serviceType: "Web portal development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Oman" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web portal types",
        itemListElement: [
          "Customer portal development",
          "B2B and dealer portal development",
          "Vendor portal development",
          "Employee portal and intranet development",
          "Student and education portal development",
          "Patient portal development",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Web Portal Development Company in Kerala",
      description: DESCRIPTION,
      inLanguage: "en",
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
        { "@type": "ListItem", position: 2, name: "Website Development", item: "https://ivoniz.com/website-development" },
        { "@type": "ListItem", position: 3, name: "Web Portal Development", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function WebPortalDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO + ROLE DEMO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "Website Development", href: "/website-development" },
              { label: "Web Portal Development", href: "/website-development/web-portal-development" },
            ]}
          />
          <div className="mt-8"><Label>Web Portal Development</Label></div>
          <HeroTitle outline="Partners and Teams">Web Portal Development for Customers,</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
              Ivoniz builds secure, custom web portals that give your customers, dealers, vendors, employees or
              students one place to log in, see their information and get things done. We design and develop portals
              for businesses, hospitals, schools and distributors in Kerala, the UAE, Saudi Arabia, Qatar and beyond,
              connected to the systems you already use. Part of our{" "}
              <Link href="/website-development" className={LINK_DARK}>website development services</Link>.
            </p>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href={waLink(CALL_MSG)} external solid event="whatsapp_click" label="Book a Discovery Call" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href="/contact" label="Discuss Your Portal Project" location="hero" />
            </div>
          </div>

          <div className="mt-14 sm:mt-20 grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">One portal, many views</p>
              <h2 className="mt-4 text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                What is a web portal?
              </h2>
              <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
                A web portal is a secure, login-based website where different users see different information and
                tools. A dealer sees their orders and price list, a patient sees their reports, an employee sees leave
                and payslips, and an admin manages it all from one dashboard. Portals replace phone calls, emails and
                spreadsheets with self-service.
              </p>
              <p className="mt-4 text-[13px] text-white/55">Switch roles in the demo to see it.</p>
            </div>
            <div>
              <RoleDemo />
              <p className="mt-3 text-[12px] text-white/55">Demo with sample data. Your portal is designed around your own users and workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTAL TYPES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Portal Types</Label>
            <Heading>Types of web portals we develop</Heading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {TYPES.map(({ Icon, t, d }, i) => (
              <div key={t} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[230px]">
                <div className="flex items-start justify-between">
                  <span className="text-[13px] font-medium text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" className="text-[18px] text-white/55" />
                </div>
                <h3 className="mt-auto pt-4 sm:pt-8 text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{t}</h3>
                <p className="mt-2.5 text-[14px] text-white/55 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-white/50">
            Only need to show products and collect enquiries? A{" "}
            <Link href="/website-development/catalogue-website-development" className={LINK_DARK}>product catalogue website</Link> may be enough to start.
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Features</Label>
            <Heading>Core features of an Ivoniz web portal</Heading>
            <p className="mt-6 text-[14.5px] text-white/50 leading-relaxed">
              Add smart search and chat assistants with our <Link href="/#our-services" className={LINK_DARK}>AI integration</Link> services.
            </p>
            <PetalSketch className="hidden lg:block w-[200px] mt-12" />
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map(({ Icon, t }) => (
              <li key={t} className="flex items-center gap-4 px-5 py-5" style={GLASS}>
                <span className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <span className="text-[15px] text-white/80 leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px]">
          <Label dark={false}>Integrations</Label>
          <Heading dark={false} className="max-w-[760px]">A portal is only useful if it shows real data</Heading>
          <p className="mt-5 text-[16px] text-black/60 max-w-[700px] leading-relaxed">We connect your portal to the systems you already use, so users see live information.</p>
          <div
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            role="list"
            aria-label="Web portal integrated with ERP, CRM and payment systems"
          >
            {INTEGRATIONS.map(([group, items]) => (
              <div key={group} role="listitem" className="rounded-2xl bg-white border border-black/8 p-6">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">{group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((x) => <span key={x} className="px-3 py-1.5 rounded-full border border-black/12 text-[13px] text-black/75">{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY + TECHNOLOGY ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Label>Security</Label>
            <Heading>Security and data protection</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Portals hold sensitive data, so security is designed in from the start. We build for the data protection
              rules in your markets, including India&apos;s DPDP Act, the UAE&apos;s PDPL and Saudi Arabia&apos;s PDPL, and can
              host data in-region where required.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {SECURITY.map((s) => (
                <li key={s} className="flex items-center gap-3 text-[14.5px] text-white/75">
                  <FaLock aria-hidden="true" className="shrink-0 text-[11px] text-white/55" />{s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label>Technology</Label>
            <Heading>Technology we use</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Modern, maintainable technology: React and Next.js for fast interfaces, Node.js for the backend,
              PostgreSQL or MongoDB for data, and cloud hosting on AWS, Azure or your preferred provider. You own the
              source code and data.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS / Azure"].map((t) => (
                <div key={t} className="px-4 py-5 text-center text-[14px] text-white/80" style={GLASS}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COST ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <Label>Pricing</Label>
              <Heading className="max-w-[760px]">Web portal development cost</Heading>
            </div>
            <div className="rounded-2xl bg-white text-black px-6 py-5">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">Start with a first phase</p>
              <p className="mt-1 text-[20px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                from {PORTAL_FIRST_PHASE.inr} <span className="text-black/60 text-[15px]">/ {PORTAL_FIRST_PHASE.aed}</span>
              </p>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {PORTAL_PACKAGES.map((p) => (
              <div key={p.label} className="p-7 flex flex-col" style={GLASS}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">{p.label}</p>
                <p className="mt-2 text-[14px] text-white/55 leading-relaxed flex-1">{p.note}</p>
                <p className="mt-6 text-[22px] text-white tabular-nums" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.inr}</p>
                <p className="mt-1 text-[14px] text-white/55 tabular-nums">{p.aed}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55">
            Indicative market ranges. Cost depends on user roles, features, integrations, security requirements and
            hosting. We can start with a smaller first phase and add modules over time.
          </p>
          <div className="mt-8">
            <PillLink href="/contact" solid label="Get a Web Portal Development Estimate" location="pricing" />
          </div>
        </div>
      </section>

      {/* ── PORTAL PLANNER (qualifying lead tool) ── */}
      <section id="plan" className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden scroll-mt-20`}>
        <Grid />
        <PetalSketch className="absolute -right-12 top-10 w-[300px] hidden lg:block" />
        <div className="relative mx-auto max-w-[1100px]">
          <Label>Plan Your Portal</Label>
          <Heading className="max-w-[760px]">Map your portal in a minute</Heading>
          <p className="mt-5 text-white/55 text-[16px] leading-relaxed max-w-[700px]">
            Answer five quick questions. We&apos;ll receive a short brief and come back with the right questions for a
            discovery call, not a sales pitch.
          </p>
          <div className="mt-10"><PortalPlanner /></div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>Our portal development process</Heading>
            </div>
            <p className="text-white/55 text-[15px] max-w-[420px] leading-relaxed">
              Typical timeline: 8–12 weeks for a first phase; larger portals are delivered in phases over 3–6 months.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9 sm:gap-y-12">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-3 sm:mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(36px,4vw,64px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/55 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <PetalSketch className="absolute right-[-60px] bottom-[-40px] w-[360px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Where We Work</Label>
          <Heading className="max-w-[860px] mb-8 sm:mb-14">Web portal development for Kerala and international organisations</Heading>
          <div className="grid lg:grid-cols-3 gap-3">
            {MARKETS.map((m) => (
              <article key={m.label} className="p-7 sm:p-8 flex flex-col" style={GLASS}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">{m.label}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-white/70 flex-1">{m.text}{m.link && <> See <Link href={m.link.href} className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">{m.link.label.toLowerCase()}</Link>.</>}</p>
                <div className="mt-7">
                  <PillLink href={waLink(m.message)} external event="whatsapp_click" label={m.cta} location={m.location} icon={<FaWhatsapp aria-hidden="true" />} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for web portal development</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href={waLink(CALL_MSG)} external event="whatsapp_click" label="Discuss Your Portal Project" location="why_ivoniz" icon={<FaWhatsapp aria-hidden="true" />} />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/55 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Portal, web app and website development under one team",
              "Modern stack (React, Next.js, Node.js) built for long-term maintenance",
              "Security and data protection built in from day one",
              "Phased delivery so you see value early and control budget",
              "You own the source code, data and hosting account",
            ].map((t) => (
              <li key={t} className="flex items-center gap-5 border-b border-white/10 py-6">
                <FaCheck aria-hidden="true" className="shrink-0 text-[13px] text-white/50" />
                <span className="text-[17px] sm:text-[19px] text-white/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 300 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Web portal development FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Need Android and iOS apps on the same backend? See our{" "}
              <Link href="/mobile-app-development" className={LINK_DARK}>mobile app development company</Link> services,
              or a cross-platform <Link href="/mobile-app-development/flutter-app-development" className={LINK_DARK}>Flutter app</Link>. For ERP,
              CRM or billing systems, see our <Link href="/software-development" className={LINK_DARK}>custom software development</Link> services,
              including <Link href="/software-development/erp-software-development" className={LINK_DARK}>ERP integration</Link> for dealer and vendor portals and{" "}
              <Link href="/software-development/crm-software-development" className={LINK_DARK}>CRM integration</Link> for customer portals.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className={`relative py-16 sm:py-32 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[900px] text-center">
          <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(34px,5vw,72px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
            Let&apos;s plan your <span style={OUTLINE}>web portal</span>
          </h2>
          <p className="mt-7 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[680px] mx-auto">
            Tell us who will use the portal and what they need to do. We&apos;ll map the user roles and workflows,
            suggest a phased plan and send a clear estimate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <PillLink href={waLink(CALL_MSG)} external solid event="whatsapp_click" label="Book a Portal Discovery Call" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            <PillLink href="#plan" label="Plan my portal first" location="closing" event="portal_planner_click" />
          </div>
          <p className="mt-6 text-[13px] text-white/55">
            Or <Link href="/contact" className="underline underline-offset-4 hover:text-white">contact our team</Link> directly.
          </p>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get Estimate" message={CALL_MSG} />
    </main>
  );
}
