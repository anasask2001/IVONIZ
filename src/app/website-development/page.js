import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaShoppingCart, FaWordpress, FaBookOpen, FaThLarge, FaBolt, FaStore, FaWhatsapp,
  FaMobileAlt, FaTachometerAlt, FaSearch, FaLock, FaChartLine, FaSlidersH, FaLifeRing,
  FaHospital, FaGraduationCap, FaRocket, FaShoppingBag, FaBuilding, FaWarehouse,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, Grid, PetalSketch } from "@/components/site/SiteUI";


/* ════════════════════════════════════════════════════════════════
   /website-development — main (pillar) website development page.
   Primary: "website development company", "website development services".
   Secondary: professional / business website development, web development company.
   Kerala + GCC appear in the title and one "markets" block each; the H1 stays broad.
   Does NOT target: "custom website vs wordpress" (comparison page),
   "[service] development [place]" (child pages), or "web development company
   Calicut" (owned by /website-development/best-website-development-company-in-calicut).

   Design follows the homepage: black / #0a0a0a + #f8f8f8 sections, "▶ LABEL"
   eyebrows, light Open Sans headings with an outlined word, the faint 72px grid,
   glass cards, pill buttons with ↗, and the hand-drawn petal sketch from the
   Ivoniz mark as the only decorative pattern.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development";
const TITLE = "Website Development Company in Kerala, UAE & GCC | Ivoniz LLP";
const DESCRIPTION =
  "Custom, WordPress and ecommerce website development for businesses in Kerala, the UAE and the GCC. Fast, SEO-ready sites built to bring enquiries. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Website Development Services for Growing Businesses | Ivoniz LLP",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Responsive business website designed by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Services for Growing Businesses | Ivoniz LLP",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const SERVICES = [
  { title: "E-Commerce Website Development", text: "Online stores with local payment gateways, shipping and inventory sync, built to convert on mobile.", href: "/website-development/ecommerce-website-development", Icon: FaShoppingCart },
  { title: "WooCommerce Development", text: "WordPress-powered stores your team can run themselves, with the plugins you need and nothing more.", href: "/website-development/ecommerce-website-development/woocommerce-website-development", Icon: FaStore },
  { title: "Catalogue Websites", text: "Product catalogues with search, filters and enquiry buttons for retailers, wholesalers and manufacturers.", href: "/website-development/catalogue-website-development", Icon: FaBookOpen },
  { title: "Web Portal Development", text: "Customer portals, dashboards and booking systems built around your workflow and integrations.", href: "/website-development/web-portal-development", Icon: FaThLarge },
  { title: "WordPress Website Development", text: "Professional, easy-to-edit websites that launch fast and stay affordable.", href: "/website-development/wordpress-website-development", Icon: FaWordpress },
  { title: "Static Website Development", text: "Fast, secure sites for brochures, landing pages and campaigns, with almost no upkeep.", href: "/website-development/static-website-development", Icon: FaBolt },
];

const INCLUDES = [
  { Icon: FaMobileAlt, title: "Mobile-first, responsive design" },
  { Icon: FaTachometerAlt, title: <>Core Web Vitals and page-speed optimisation, backed by our <Link href="/digital-marketing/seo-services/technical-seo-services" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">technical SEO</Link> team</> },
  { Icon: FaSearch, title: "On-page SEO: clean URLs, meta tags, sitemap, schema" },
  { Icon: FaWhatsapp, title: "Forms, WhatsApp and call buttons to your inbox or CRM" },
  { Icon: FaLock, title: "SSL, security hardening and backups" },
  { Icon: FaChartLine, title: "Google Analytics 4 and Search Console setup" },
  { Icon: FaSlidersH, title: "An easy admin panel and a handover session" },
  { Icon: FaLifeRing, title: "Post-launch support" },
];

const PROCESS = [
  { title: "Discovery call", text: "Your goals, audience, markets and must-have features." },
  { title: "Proposal and estimate", text: "Scope, platform recommendation, timeline and fixed price." },
  { title: "Design", text: "Wireframes and visual design for your approval." },
  { title: "Development", text: "Build, content entry and integrations, with a staging link to review." },
  { title: "Testing and SEO checks", text: "Devices, browsers, speed, forms, redirects and tracking." },
  { title: "Launch and handover", text: "Go live, training, and ongoing support or maintenance." },
];

const INDUSTRIES = [
  { Icon: FaWarehouse, title: "Retail and wholesale", text: "Catalogues, online ordering, dealer portals" },
  { Icon: FaHospital, title: "Hospitals and clinics", text: "Doctor profiles, appointment booking, patient enquiry forms" },
  { Icon: FaGraduationCap, title: "Schools and colleges", text: "Admissions, course pages, notices, parent portals" },
  { Icon: FaRocket, title: "Startups", text: "MVPs, landing pages, SaaS products" },
  { Icon: FaShoppingBag, title: "Ecommerce brands", text: "Fast stores built to convert" },
  { Icon: FaBuilding, title: "Real estate, travel and services", text: "Listings, enquiries and bookings" },
];

const MARKETS = [
  {
    label: "Kerala and India",
    text: (
      <>
        Our team is based in Kozhikode (Calicut), and we work with businesses across Kerala, including Kochi,
        Malappuram, Thrissur and Kannur, and across India. Meet us in person or work fully online. Looking for a local
        team? See our{" "}
        <Link href="/website-development/best-website-development-company-in-calicut" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
          Calicut website development page
        </Link>.
      </>
    ),
    cta: "Chat with our Kerala team",
    message: "Hi Ivoniz, I need a website for my business in Kerala.",
    location: "markets_kerala",
  },
  {
    label: "UAE, Saudi Arabia, Qatar and Oman",
    text: "We build English and Arabic (RTL) websites with local payment gateways such as PayTabs, Telr, Tap and Mada, VAT-ready invoicing and hosting close to your customers. Calls are scheduled in Gulf time.",
    cta: "Chat in Gulf time",
    message: "Hi Ivoniz, I need a website for my business in the UAE / GCC.",
    location: "markets_gcc",
  },
  {
    label: "Africa and international",
    text: "We work remotely with startups and businesses in Rwanda and other markets, including mobile-money payment integrations where needed. Hire a full web development team in India with one point of contact and calls in your time zone.",
    cta: "Talk to our team",
    message: "Hi Ivoniz, I'm outside India and need a website for my business.",
    location: "markets_international",
  },
];

/* Real, live client sites (from /works), one per market */
const PROJECTS = [
  { title: "Rivaura Hospital", category: "Healthcare", market: "Kerala, India", url: "https://www.rivaurahospital.com/", image: "/Portfolios/RIVAURA_HOSPITAL.webp" },
  { title: "CapitalCore", category: "Business Consulting", market: "UAE", url: "https://www.capitalcoreuae.com/", image: "/Portfolios/CAPITAL_CORE_UAE.webp" },
  { title: "Technical Trade Co.", category: "Engineering & IT Solutions", market: "Saudi Arabia", url: "https://techtrade.sa/", image: "/Portfolios/TECH_TRADE.webp" },
  { title: "Gaming Qatar", category: "Gaming & E-Commerce", market: "Qatar", url: "https://mygamehobbies.qa/", image: "/Portfolios/MYGAME_HOBBIES_ecommerce.webp" },
];

const FAQS = [
  { q: "How much does website development cost?", a: "It depends on pages, features and integrations. WordPress business websites are the most affordable option, while custom websites, ecommerce stores and web applications cost more. Share your requirements and we'll send a fixed estimate." },
  { q: "How long does it take to develop a website?", a: "A WordPress business website usually takes 2 to 6 weeks; custom websites and ecommerce stores usually take 6 to 16 weeks." },
  { q: "Do you work with businesses outside Kerala?", a: "Yes. We work with clients across India and remotely with businesses in the UAE, Saudi Arabia, Qatar, Oman, Rwanda and other countries." },
  { q: "Can you build a website in Arabic and English?", a: "Yes. We build bilingual websites with right-to-left Arabic layouts and correct language tags for Google." },
  { q: "Will my website be SEO-friendly?", a: "Yes. Every site launches with clean URLs, meta tags, a sitemap, schema markup, fast loading and Search Console setup." },
  { q: "Can you redesign my existing website without losing rankings?", a: "Yes. We map old URLs to new ones with 301 redirects and keep your existing content and SEO signals." },
  { q: "Do you provide website maintenance?", a: "Yes. We offer maintenance plans covering updates, backups, security monitoring and small content changes." },
  { q: "What do you need from me to start?", a: "Your goals, a list of pages or features, any branding you have, and examples of websites you like. We'll handle the rest in the discovery call." },
];

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Website Development",
      serviceType: "Website development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Oman" },
        { "@type": "Country", name: "Rwanda" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website development services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: `https://ivoniz.com${s.href}` },
        })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Website Development Company in Kerala, UAE & GCC",
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
        { "@type": "ListItem", position: 2, name: "Website Development", item: PAGE_URL },
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
export default function WebsiteDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Website Development", href: "/website-development" }]} />
          <div className="mt-8"><Label>Website Development Services</Label></div>

          <h1 className="m-0 max-w-[1100px]" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(40px, 6.4vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
            Website Development Services for Businesses in{" "}
            <span style={{ WebkitTextStroke: "1.5px rgba(217,217,217,0.45)", WebkitTextFillColor: "transparent", color: "transparent" }}>
              Kerala and Worldwide
            </span>
          </h1>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[680px]">
              Ivoniz designs and develops fast, secure, SEO-ready websites that turn visitors into enquiries, for
              startups, retailers, hospitals, schools and growing companies in Kerala, the UAE, Saudi Arabia, Qatar,
              Oman and Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PillLink href="/contact" solid label="Request a Website Development Quote" location="hero" />
              <PillLink
                href={waLink("Hi Ivoniz, I need a website for my business. Can we discuss my project?")}
                external
                event="whatsapp_click"
                label="Discuss on WhatsApp"
                location="hero"
                icon={<FaWhatsapp aria-hidden="true" />}
              />
            </div>
          </div>

          {/* trust strip — glass cards, only verifiable facts */}
          <ul className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              ["Live client websites", "Kerala, UAE, Saudi Arabia, Qatar"],
              ["WordPress + Custom", "Under one team"],
              ["English + Arabic", "RTL builds for the GCC"],
              ["HiLITE Business Park", "Kozhikode, Kerala"],
            ].map(([a, b]) => (
              <li key={a} className="px-5 py-6 text-center" style={GLASS}>
                <p className="text-[15px] sm:text-[16px] font-semibold text-white">{a}</p>
                <p className="text-[13px] text-white/55 mt-1">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <Label>Our Services</Label>
              <Heading>Website development services we offer</Heading>
            </div>
            <Link href="/works" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white text-[13px] font-medium whitespace-nowrap hover:bg-white hover:text-black transition-all duration-300">
              See our work <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {SERVICES.map(({ title, text, href, Icon }, i) => (
              <Link
                key={href}
                href={href}
                className="group relative border-r border-b border-white/10 p-7 sm:p-9 flex flex-col min-h-[280px] hover:bg-white/[0.03] transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[13px] font-medium text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" className="text-[20px] text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-auto pt-10 text-[21px] sm:text-[23px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {title}
                </h3>
                <p className="mt-3 text-[14.5px] text-white/55 leading-relaxed">{text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 group-hover:text-white">
                  Learn more <FiArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORDPRESS OR CUSTOM ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1100px] grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Label dark={false}>Choosing a Platform</Label>
            <Heading dark={false}>Not sure whether you need WordPress or a custom website?</Heading>
            <p className="mt-6 text-black/60 text-[16px] sm:text-[17px] leading-relaxed">
              WordPress suits most business websites that need to launch quickly on a sensible budget. Custom
              development suits businesses that need unique features, complex integrations or room to scale. We build
              both, so we recommend whichever fits your goals and budget.
            </p>
            <div className="mt-8">
              <PillLink href="/website-development/custom-website-vs-wordpress" dark={false} label="Read our custom website vs WordPress comparison" location="platform_block" event="internal_link_click" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3" aria-hidden="true">
            {[
              { name: "WordPress", rows: ["Launch in 2–6 weeks", "Easy admin", "Lower upfront cost"] },
              { name: "Custom", rows: ["Built for your workflow", "Any integration", "Scales with you"] },
            ].map((p, i) => (
              <div key={p.name} className={`rounded-2xl p-6 ${i ? "bg-black text-white" : "bg-white border border-black/8"}`}>
                <p className="text-[18px] mb-4" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{p.name}</p>
                <ul className="space-y-2.5">
                  {p.rows.map((r) => (
                    <li key={r} className={`text-[13.5px] ${i ? "text-white/65" : "text-black/60"}`}>— {r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT EVERY WEBSITE INCLUDES ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Included as Standard</Label>
            <Heading>What every Ivoniz website includes</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Want visitors after launch? Pair your site with our{" "}
              <Link href="/digital-marketing" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">digital marketing</Link> services.
            </p>
            <PetalSketch className="hidden lg:block w-[200px] mt-12" />
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {INCLUDES.map(({ Icon, title }, i) => (
              <li key={i} className="flex items-center gap-4 px-5 py-5" style={GLASS}>
                <span className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <span className="text-[15px] text-white/80 leading-snug">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>Our website development process</Heading>
            </div>
            <p className="text-white/55 text-[15px] max-w-[420px] leading-relaxed">
              Typical timelines: WordPress business sites 2–6 weeks; custom websites and ecommerce 6–16 weeks,
              depending on scope.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12" aria-label="Six-step website development process from discovery to launch">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span
                  className="block leading-none mb-5"
                  style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(44px,4vw,64px)", letterSpacing: "-0.03em", WebkitTextStroke: "1px rgba(217,217,217,0.45)", WebkitTextFillColor: "transparent", color: "transparent" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/55 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── COST + MID-PAGE CTA ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <div className="relative mx-auto max-w-[1100px] grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Label dark={false}>Pricing</Label>
            <Heading dark={false}>Website development cost</Heading>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-black/60">
              Price depends on pages, design, features, integrations, languages and content. As a guide, WordPress
              business websites cost less to launch, while custom sites and web applications cost more upfront but are
              built around your exact needs. You get a clear, fixed estimate before any work starts.
            </p>
            <Link href="/website-development/custom-website-vs-wordpress#cost" className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-black underline underline-offset-4 decoration-black/25 hover:decoration-black">
              See the full cost comparison in custom website vs WordPress <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-2xl bg-black text-white p-7 sm:p-9 relative overflow-hidden">
            <PetalSketch className="absolute -right-10 -top-10 w-[180px]" />
            <p className="relative text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Get a fixed estimate</p>
            <p className="relative mt-2 text-[14.5px] text-white/60 leading-relaxed">
              Tell us your pages, features and target market. We&apos;ll recommend a platform and send a clear price.
            </p>
            <div className="relative mt-7 flex flex-col gap-3">
              <PillLink href="/contact" solid label="Get a Website Development Estimate" location="pricing" />
              <PillLink
                href={waLink("Hi Ivoniz, I'd like a website development estimate. Here's what I need:")}
                external
                event="whatsapp_click"
                label="Ask on WhatsApp"
                location="pricing"
                icon={<FaWhatsapp aria-hidden="true" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-white text-black`}>
        <div className="relative mx-auto max-w-[1400px]">
          <Label dark={false}>Industries</Label>
          <Heading dark={false} className="mb-10 sm:mb-14">Websites for your industry</Heading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/8">
            {INDUSTRIES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-black/8 p-7 sm:p-8">
                <Icon aria-hidden="true" className="text-[20px] text-black/55" />
                <h3 className="mt-6 text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{title}</h3>
                <p className="mt-1.5 text-[14.5px] text-black/55 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <PetalSketch className="absolute right-[-60px] bottom-[-40px] w-[360px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Where We Work</Label>
          <Heading className="mb-10 sm:mb-14">Markets we serve</Heading>
          <div className="grid lg:grid-cols-3 gap-3">
            {MARKETS.map((m) => (
              <article key={m.label} className="p-7 sm:p-8 flex flex-col" style={GLASS}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">{m.label}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-white/70 flex-1">{m.text}</p>
                <div className="mt-7">
                  <PillLink
                    href={waLink(m.message)}
                    external
                    event="whatsapp_click"
                    label={m.cta}
                    location={m.location}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF: real projects (same card style as the homepage Selected works) ── */}
      <section className={`py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <Label dark={false}>Our Work</Label>
              <Heading dark={false}>Websites we&apos;ve built, from Kerala to the Gulf</Heading>
            </div>
            <Link href="/works" className="inline-flex items-center gap-2 text-[14px] font-medium text-black/60 hover:text-black transition-colors">
              View All <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-10 sm:gap-y-14">
            {PROJECTS.map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="group block"><span className="sr-only">Opens in a new tab: </span>
                <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-black/8 transition-shadow duration-500 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
                  <Image src={p.image} alt={`${p.title} website built by Ivoniz`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[19px] sm:text-[21px] font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-1 text-[14px] text-black/55">
                      {p.category}<span className="mx-2 text-black/25" aria-hidden="true">·</span>{p.market}
                    </p>
                  </div>
                  <span className="shrink-0 mt-1 w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-black/70 transition-colors duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white">
                    <FiArrowUpRight aria-hidden="true" className="text-[16px]" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why businesses choose Ivoniz</Heading>
            <div className="mt-8">
              <PillLink href="/contact" label="Talk to Our Development Team" location="why_ivoniz" />
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "WordPress, custom and ecommerce under one team, so the advice isn't tied to one platform",
              "Modern stack: React, Next.js, Node.js and the MERN stack",
              <>SEO and speed built in from day one, with ongoing <Link key="seo" href="/digital-marketing/seo-services" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">SEO services</Link> after launch</>,
              "Clear fixed quotes and a single point of contact",
              "You own your domain, content and code",
              <>Websites and <Link key="app" href="/mobile-app-development" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">Android and iOS app development</Link> from the same team</>,
            ].map((t, i) => (
              <li key={i} className="flex items-baseline gap-6 border-b border-white/10 py-6">
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
            <Heading>Website development FAQs</Heading>
          </div>
          <div className="border-t border-white/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-white/10 py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[16.5px] sm:text-[18px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{f.q}</h3>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 text-[18px] leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-[1.75] text-white/60 pr-12">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className={`relative py-24 sm:py-32 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[900px] text-center">
          <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(34px,5vw,72px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
            Ready to build a website that brings in{" "}
            <span style={{ WebkitTextStroke: "1.5px rgba(217,217,217,0.45)", WebkitTextFillColor: "transparent", color: "transparent" }}>enquiries?</span>
          </h2>
          <p className="mt-7 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[680px] mx-auto">
            Tell us about your business and the market you serve. We&apos;ll recommend the right platform, share a
            timeline and send a clear estimate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <PillLink href="/contact" solid label="Request a Website Development Quote" location="closing" />
            <PillLink
              href={waLink("Hi Ivoniz, I'm ready to build my website. Can we talk?")}
              external
              event="whatsapp_click"
              label="Chat on WhatsApp"
              location="closing"
              icon={<FaWhatsapp aria-hidden="true" />}
            />
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Quote" message="Hi Ivoniz, I need a website for my business. Can we discuss my project?" />
    </main>
  );
}
