import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { PORTAL_PACKAGES, PORTAL_FIRST_PHASE } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/web-application-development-dubai  (plan L5)
   Semrush UAE (27 Nov 2026): web application development dubai 260/mo,
   KD 21. Other variants (web app development company dubai, customer
   portal dubai) — volume not verified. The general portal page
   (/website-development/web-portal-development) is retitled to Kerala so
   the two don't compete. Stack wording matches the portal/software pages
   (React, Next.js, Node.js, PostgreSQL/MongoDB). Prices: costs.js ranges.
   No web-app case study claimed (none in lib/clients.js). Not in menu/footer.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/web-application-development-dubai";
const W = "/website-development";

const page = {
  url: PAGE_URL,
  title: "Web Application Development for Dubai | Ivoniz LLP",
  ogTitle: "Web Application Development for Dubai and UAE Businesses",
  description:
    "Web application development for Dubai and UAE businesses: customer portals, booking systems, dashboards and internal tools, built in phases and quoted in AED.",
  schemaName: "Web Application Development for Dubai and UAE Businesses",
  serviceType: "Web application development",
  areaServed: [{ "@type": "City", name: "Dubai" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Website Development", href: W },
    { label: "Web Apps for Dubai", href: `${W}/web-application-development-dubai` },
  ],
  label: "Web Apps · Portals · Dubai and the UAE",
  h1: "Web Application Development",
  h1Outline: "for Dubai Businesses",
  intro: (
    <>
      When spreadsheets, WhatsApp groups and email threads can&apos;t keep up any more, a web application puts the work in
      one place: customers log in, staff approve, managers see what&apos;s happening. We build web apps and portals for
      UAE businesses, in phases, from our team in Kozhikode, Kerala. We have no Dubai office; projects run in Gulf time.
    </>
  ),
  cta: "Discuss Your Web App",
  waMessage: "Hi Ivoniz, I need a web application / portal for my business in the UAE.",
  cards: {
    label: "What We Build",
    heading: "Web applications for UAE businesses",
    items: [
      { t: "Customer portals", d: "Customers log in to see orders, invoices, documents and requests, instead of phoning or messaging for each one." },
      { t: "Booking and scheduling", d: "Appointments, rooms, vehicles or staff time booked online, with reminders and a calendar your team actually uses." },
      { t: "Dealer and B2B portals", d: "Price lists by customer, bulk ordering, credit limits and quotation requests for trading and distribution companies." },
      { t: "Dashboards and reports", d: "The numbers managers ask for every week, pulled together automatically from your existing systems." },
      { t: "Internal tools", d: "Approvals, job tracking, inspections and field reports that replace paper forms and shared spreadsheets." },
      { t: "Integrations", d: "Connections to accounting, CRM, ERP, payment gateways and WhatsApp, so data isn't typed twice." },
    ],
  },
  notes: {
    label: "How We Approach It",
    heading: "Building a web app without the usual surprises",
    items: [
      ["Start with one workflow", "The first phase solves one painful process well. The next phases add to a working system, instead of everything arriving late at once."],
      ["Built for how your team works", "We map the real steps, approvals and exceptions first, so the app fits the work rather than the other way round."],
      ["English and Arabic", "Interfaces in both languages where your users need it, with right-to-left layouts."],
      ["Modern, maintainable technology", "React and Next.js for the interface, Node.js for the backend, PostgreSQL or MongoDB for data, hosted where you choose."],
      ["Roles and permissions", "Each user sees and does only what their role allows, with a record of who changed what."],
      ["You own it", "Code, data and hosting accounts belong to your company, with documentation so another team could take over."],
    ],
    footer: (
      <>
        More on portals in general: <Link href={`${W}/web-portal-development`} className={LINK_DARK}>web portal development</Link>.
        For full business systems, see <Link href="/software-development" className={LINK_DARK}>custom software development</Link>.
      </>
    ),
  },
  proof: {
    label: "Our Work in the Gulf",
    heading: "Gulf businesses we've built for",
    intro: "Live websites and stores for UAE, Saudi and Qatar businesses. We'll walk you through relevant work on a call before you commit.",
    slugs: ["elnyca-solutions", "technical-trade-co", "capitalcore", "sky-pure-water", "gaming-qatar", "feraro-international"],
  },
  costs: {
    label: "Cost",
    heading: "What a web application costs in the UAE",
    intro: `Typical market ranges, as a guide. Most projects start with a first phase from about ${PORTAL_FIRST_PHASE.aed}, then grow.`,
    cols: ["Web app", "Typical range (AED)", "Scope"],
    rows: PORTAL_PACKAGES.map((p) => [p.label, p.aed, p.note]),
    footer: (
      <>
        How UAE website and app prices are built up: <Link href="/blog/website-development-cost-dubai-uae" className={LINK}>website development cost in Dubai</Link>.
      </>
    ),
  },
  process: {
    heading: "From workflow to working app",
    steps: [
      ["Workflow mapping", "Who does what today, where it breaks, and what the first phase must fix."],
      ["Scope and fixed quote", "Screens, roles, integrations and timeline for phase one, in writing, in AED."],
      ["Design and prototype", "Clickable screens your team tries before development starts."],
      ["Build in short cycles", "Working features shown every couple of weeks on a test link."],
      ["Launch, train, extend", "Go live with training, then plan the next phase from real use."],
    ],
  },
  form: {
    heading: "Tell us about the process you want to fix",
    text: "Describe what happens today and who's involved. We reply with questions and a proposed first phase with a fixed AED quote.",
    aside: "Our team is in Kozhikode, Kerala. No office in Dubai; calls and WhatsApp in Gulf time.",
    props: {
      idPrefix: "wadxb",
      subject: "web application",
      leadType: "web_app_dubai",
      location: "web_app_dubai_form",
      question: "What kind of app?",
      messageHint: "The process you want to move online, roughly how many users, and the systems you use today.",
      types: [
        { id: "portal", label: "Customer portal" },
        { id: "booking", label: "Booking system" },
        { id: "b2b", label: "Dealer / B2B portal" },
        { id: "internal", label: "Internal tool" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Dubai", "Abu Dhabi", "Sharjah", "Other UAE", "Saudi Arabia", "Qatar", "Other"],
    },
  },
  faqHeading: "Web apps in Dubai: questions",
  faqs: [
    { q: "What's the difference between a website and a web application?", a: "A website mainly shows information. A web application lets people do work: log in, submit, approve, book, order and track, with data saved in a database." },
    { q: "How much does web application development cost in Dubai?", a: `As typical UAE market ranges, a basic portal costs ${PORTAL_PACKAGES[0].aed}, and a business portal with several roles and integrations ${PORTAL_PACKAGES[1].aed}. Starting with a smaller first phase keeps the initial cost down.` },
    { q: "How long does it take to build a web app?", a: "A focused first phase often takes a couple of months; larger systems are built in phases over longer. The written scope gives the timeline for each phase." },
    { q: "Can the web app connect to our accounting or ERP software?", a: "Usually, if the software offers an API or export. We check what your systems support during scoping and quote the integration separately." },
    { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India, and works with UAE businesses remotely, in Gulf time." },
    { q: "Who owns the code?", a: "Your company does: code, data and hosting accounts, with documentation handed over." },
  ],
  relatedSlugs: ["ai-automation-small-business", "how-to-choose-web-design-company-dubai", "who-owns-your-website-domain-hosting"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
