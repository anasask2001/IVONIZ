import Link from "next/link";
import {
  FaWhatsapp, FaSpider, FaTachometerAlt, FaSitemap, FaClone, FaExchangeAlt, FaMobileAlt, FaCode, FaLock, FaGlobe, FaReact,
  FaCheck, FaTools, FaRoute, FaHandshake, FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { TECH_SEO_PACKAGES } from "@/components/ecommerce/costs";
import TechSeoAuditForm from "@/components/marketing/TechSeoAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/technical-seo-services — owns technical SEO services / agency / India,
   technical SEO audit (+ cost), website / page speed optimisation services,
   WordPress & Shopify speed, JS website SEO, site migration SEO and
   outsourced (white-label) technical SEO. Source: Google autocomplete,
   25 Nov 2026 (Ubersuggest volumes not pulled — verify next run).
   Main difference from competitors: "we audit AND fix" with our own developers.
   Breadcrumb: Home › SEO Services › Technical SEO Services.
   Prices not fixed → "Price on request" (costs.js: TECH_SEO_PACKAGES).
   Platforms listed = ones Ivoniz builds on (portfolio: Next.js/React, Shopify;
   services: WordPress/WooCommerce). Laravel/PHP omitted until confirmed.
   TODO: add 2–3 verified before/after examples (PageSpeed, Search Console).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/technical-seo-services";
const TITLE = "Technical SEO Services & Audit in Kerala | Ivoniz LLP";
const DESCRIPTION =
  "Technical SEO services in Calicut, Kerala. We audit and fix speed, Core Web Vitals, indexing and site errors with our own developers. Get a technical SEO audit.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Technical SEO Audit & Fix | Speed, Core Web Vitals",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Technical SEO audit dashboard showing Core Web Vitals and indexing issues" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Audit & Fix | Speed, Core Web Vitals",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  speed: "Hi Ivoniz, please run a free 5-minute speed check on my website: ___",
  audit: "Hi Ivoniz, I'd like a technical SEO audit. Website: ___ Platform: ___",
  agency: "Hi Ivoniz, we're an agency and want to discuss white-label technical SEO.",
};

const AUDIT = [
  { Icon: FaSpider, title: "Crawling and indexing", text: "Search Console coverage, robots.txt, XML sitemaps, noindex mistakes and crawl budget for large sites." },
  { Icon: FaTachometerAlt, title: "Site speed and Core Web Vitals", text: "LCP, INP and CLS on mobile and desktop, measured on your most important pages." },
  { Icon: FaSitemap, title: "Site architecture", text: "URL structure, internal linking, orphan pages and click depth." },
  { Icon: FaClone, title: "Duplicate and thin content", text: "Canonical tags, parameter URLs, pagination and filters." },
  { Icon: FaExchangeAlt, title: "Redirects and errors", text: "404 pages, redirect chains, broken internal links and server errors." },
  { Icon: FaMobileAlt, title: "Mobile usability", text: "Layout, tap targets and mobile-only issues." },
  { Icon: FaCode, title: "Structured data", text: "Organization, LocalBusiness, Product, FAQ, Breadcrumb and Article schema." },
  { Icon: FaLock, title: "HTTPS and security", text: "Mixed content, certificates and security headers." },
  { Icon: FaGlobe, title: "International SEO", text: "hreflang for English, Malayalam and Arabic versions of your site." },
  { Icon: FaReact, title: "JavaScript SEO", text: "Rendering and indexing for React, Next.js and other JavaScript websites." },
];

/* Google's published "good" thresholds (75th percentile of real visits) */
const CWV = [
  ["LCP", "Largest Contentful Paint", "2.5 seconds or less", "How quickly the main content (usually the hero image or heading) appears. Slow servers, heavy images and render-blocking scripts push it up."],
  ["INP", "Interaction to Next Paint", "200 milliseconds or less", "How quickly the page responds when someone taps a button or opens a menu. Heavy JavaScript and third-party scripts are the usual cause."],
  ["CLS", "Cumulative Layout Shift", "0.1 or less", "How much the layout jumps while loading. Images without sizes, late fonts and pop-ins cause it, and cause mis-taps."],
];

const PLATFORMS = ["WordPress", "WooCommerce", "Shopify", "React", "Next.js", "Custom code"];

const SPEED = [
  "Image compression, modern formats (WebP and AVIF) and lazy loading",
  "Caching, CDN setup and server tuning",
  "Removing unused CSS and JavaScript, and deferring third-party scripts",
  "Font loading and layout-shift fixes",
];

const PROCESS = [
  { title: "Access and crawl", text: "We connect Search Console and Analytics and crawl your full site." },
  { title: "Audit and prioritise", text: "We rank every issue by its impact on rankings and leads." },
  { title: "Walkthrough", text: "We explain the findings in plain language." },
  { title: "Fix", text: "Our developers implement the changes on a staging site, then on your live site." },
  { title: "Verify", text: "We re-crawl and re-check PageSpeed and Search Console." },
  { title: "Monitor", text: "Monthly checks make sure problems don't come back." },
];

const FAQS = [
  { q: "What is technical SEO?", a: "Technical SEO is improving your website's infrastructure (speed, crawling, indexing, structure, mobile usability and structured data) so search engines can find, understand and rank your pages." },
  { q: "How much does a technical SEO audit cost?", a: "It depends mainly on the size of your site. Small and medium websites cost less; larger and ecommerce sites are priced by the number of pages. Our Audit + Fix packages include implementation. Send your website for a free speed check and we'll quote a fixed price." },
  { q: "Do you fix the issues or only report them?", a: "We fix them. Our developers implement the changes on your website, then re-check everything with PageSpeed Insights and Google Search Console." },
  { q: "How long does a technical SEO audit take?", a: "Most audits take 5 to 10 working days, depending on the size of your site. Fixes usually follow within 1 to 3 weeks." },
  { q: "Will technical SEO improve my rankings?", a: "Fixing technical problems removes what is holding your site back, so your content can rank. Most sites see faster pages and better crawling quickly, and ranking gains over the following months, depending on how serious the issues were and on your content and links." },
  { q: "Can you improve my Core Web Vitals?", a: "Yes. We optimise images, scripts, fonts, caching and layout to improve LCP, INP and CLS, and we measure the results before and after." },
  { q: "Do you work on WordPress, Shopify and React websites?", a: "Yes. We work on WordPress, WooCommerce, Shopify, React, Next.js and custom-coded websites." },
  { q: "Can you help after a website migration lost our rankings?", a: "Yes. We review your old and new URLs, fix redirects and indexing problems, and help you recover lost traffic." },
];

const ADDRESS = organizationSchema.address;
const PSI_SELF = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(PAGE_URL)}`;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Technical SEO Services",
      serviceType: "Technical search engine optimisation",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technical SEO services",
        itemListElement: ["Technical SEO audit", "Website speed and Core Web Vitals optimisation", "JavaScript SEO", "Site migration SEO", "White-label technical SEO"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Technical SEO Services & Audit in Kerala",
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
        { "@type": "ListItem", position: 2, name: "SEO Services", item: "https://ivoniz.com/digital-marketing/seo-services" },
        { "@type": "ListItem", position: 3, name: "Technical SEO Services", item: PAGE_URL },
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

const Check = ({ children }) => (
  <li className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{children}</li>
);

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function TechnicalSeoServicesPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "SEO Services", href: "/digital-marketing/seo-services" },
              { label: "Technical SEO Services", href: "/digital-marketing/seo-services/technical-seo-services" },
            ]}
          />
          <div className="mt-8"><Label>Technical SEO Services</Label></div>
          <HeroTitle outline="We Find the Problems and Fix Them">Technical SEO Services:</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                If Google can&apos;t crawl, load or understand your website properly, great content and backlinks
                won&apos;t help it rank. Ivoniz&apos;s technical SEO services find what&apos;s holding your site back (slow
                pages, Core Web Vitals failures, indexing errors, broken links, duplicate pages, missing schema) and then
                our own developers fix it. We&apos;re a technical SEO and web development team in Calicut, Kerala, working
                with businesses and agencies across India.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">Technical SEO audit · audit + fix packages · results you can see in PageSpeed and Search Console</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Technical SEO Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.speed)} external event="whatsapp_click" label="Free 5-Minute Speed Check" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaTools aria-hidden="true" className="text-white/55" /> Audit and fixes by the same team</li>
            <li className="flex items-center gap-2">
              <FaTachometerAlt aria-hidden="true" className="text-white/55" />
              <a href={PSI_SELF} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-white/20 hover:text-white">
                Test this page in PageSpeed Insights<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Team at HiLITE Business Park, Kozhikode</li>
          </ul>
        </div>
      </section>

      {/* ── AUDIT COVERS ── */}
      <section id="audit" className={`relative py-20 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-10 sm:mb-14">
            <Label>Technical SEO Audit</Label>
            <Heading>What our technical SEO audit covers</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              A website technical SEO audit from Ivoniz checks every layer Google depends on. You get a prioritised
              report showing what to fix first, why it matters and how much effort each fix takes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
            {AUDIT.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-6 flex flex-col min-h-[220px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-6 text-[17px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2 text-[13.5px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-16">
            <div>
              <h3 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(22px,2.2vw,30px)", lineHeight: 1.15, letterSpacing: "-0.03em" }}>Core Web Vitals, in plain language</h3>
              <p className="mt-4 text-[14.5px] text-white/60 leading-relaxed">
                Google measures three things about how your pages feel to real visitors, and uses them in ranking. These
                are the targets a page needs to pass on mobile.
              </p>
            </div>
            <dl className="grid sm:grid-cols-3 gap-3">
              {CWV.map(([k, name, target, d]) => (
                <div key={k} className="p-6" style={GLASS}>
                  <dt>
                    <span className="block text-[12px] font-bold tracking-[0.2em] uppercase text-white/60">{k}</span>
                    <span className="block mt-2 text-[17px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{name}</span>
                  </dt>
                  <dd className="mt-3 text-[14px] text-white/60 leading-relaxed">
                    <span className="block text-white/85">Good: {target}</span>
                    <span className="block mt-1.5">{d}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── WE FIX ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Label dark={false}>Audit + Fix</Label>
            <Heading dark={false}>We don&apos;t just report. We fix.</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Most technical SEO audits end with a PDF your team has to figure out. At Ivoniz, our developers implement
              the fixes on your site, whatever it&apos;s built on. You don&apos;t need to hire a separate developer, and
              the fixes are done right the first time. It&apos;s the same team behind our{" "}
              <Link href="/website-development" className={LINK_DARK}>website development</Link> work.
            </p>
            <div className="mt-8"><PillLink href="#quote" solid dark={false} label="Fix My Website's Technical SEO" location="we_fix" event="audit_click" /></div>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.18em] uppercase text-black/55">Platforms we fix</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {PLATFORMS.map((p) => (
                <li key={p} className="px-5 py-3 rounded-full bg-white border border-black/10 text-[15px] text-black/80">{p}</li>
              ))}
            </ul>
            <p className="mt-6 text-[14.5px] text-black/60 leading-relaxed">
              This website is built by our own team. Test it in{" "}
              <a href={PSI_SELF} target="_blank" rel="noopener noreferrer" className={LINK_DARK}>PageSpeed Insights<span className="sr-only"> (opens in a new tab)</span></a>{" "}
              before you trust us with yours.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPEED + JS SEO ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="speed" className="p-7 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaTachometerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Website speed optimisation services</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Our page speed optimisation services target what slows real visitors down, especially on mobile data.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              {SPEED.map((t) => <Check key={t}>{t}</Check>)}
              <Check>
                <span><strong className="font-medium text-white">WordPress speed optimisation:</strong> plugin clean-up, lighter themes and database tuning, from our{" "}
                  <Link href="/website-development/wordpress-website-development" className={LINK}>WordPress website development</Link> team</span>
              </Check>
              <Check>
                <span><strong className="font-medium text-white">WooCommerce and Shopify speed:</strong> app and plugin audit, theme fixes and product-image optimisation</span>
              </Check>
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-white/55">
              We measure every change before and after with PageSpeed Insights, Lighthouse and real-user Core Web Vitals
              data from Google Search Console.
            </p>
          </article>
          <article id="javascript-seo" className="p-7 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaReact aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Technical SEO for modern JavaScript websites</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              React and single-page apps often look great but hide content from Google. As a MERN-stack development
              team, we fix JavaScript SEO properly, and most of the sites in our portfolio are built with Next.js.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Server-side rendering or static generation with Next.js</Check>
              <Check>Correct routing and canonical URLs</Check>
              <Check>Crawlable internal links instead of click-only navigation</Check>
              <Check>Dynamic metadata and schema for every page</Check>
            </ul>
            <div className="mt-8">
              <PillLink href={waLink("Hi Ivoniz, I'd like a JavaScript SEO audit for my React / Next.js website: ___")} external event="whatsapp_click" label="Ask about a JS SEO audit" location="js_seo" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>
        </div>
      </section>

      {/* ── MIGRATION + WHITE-LABEL ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="migration" className="p-7 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaRoute aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Site migration and redesign SEO</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Changing your website, domain or platform is the most common way businesses lose rankings overnight. We
              plan every migration with full URL mapping, 301 redirects and before-and-after crawl checks, so your
              traffic survives the move. Already lost rankings after a redesign? We review old and new URLs and fix what
              broke.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              <Check>Old-to-new URL map and 301 redirects</Check>
              <Check>Pre-launch crawl on staging, post-launch crawl on live</Check>
              <Check>Search Console checks for the weeks after launch</Check>
            </ul>
          </article>
          <article id="white-label" className="p-7 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaHandshake aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>White-label technical SEO for agencies</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Many digital marketing agencies don&apos;t have developers in-house. Agencies in Kerala and beyond can
              outsource technical SEO audit services to Ivoniz: we deliver audits under your brand, our developers
              implement the fixes, and you get reports your clients can understand.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Audits and reports under your brand</Check>
              <Check>Fixes implemented by our developers</Check>
              <Check>One point of contact for your team</Check>
            </ul>
            <div className="mt-8">
              <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="Talk about white-label" location="white_label" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className={`relative py-20 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">Technical SEO packages</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            Technical SEO audit cost depends mainly on the size of your site. Elsewhere, fixes are usually quoted
            separately; our Audit + Fix packages include them.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {TECH_SEO_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className={`mt-2 text-[14px] ${i === 1 ? "text-black/60" : "text-white/55"}`}>Best for: {p.best}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.includes}</p>
                <p className="mt-6 text-[21px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {p.price ? <>From {p.price}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / {p.unit}</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} technical SEO package. Website: ___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this"
                    location={`tech_seo_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Technical SEO Audit" location="packages" event="audit_click" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our technical SEO process</Heading>
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

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why choose Ivoniz for technical SEO</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Technical SEO is part of our <Link href="/digital-marketing/seo-services" className={LINK}>SEO company in Calicut</Link> service.
              For Google Maps and walk-ins, see our <Link href="/digital-marketing/seo-services/local-seo-services" className={LINK}>local SEO services</Link>; for titles,
              headings and content, our <Link href="/digital-marketing/seo-services/on-page-seo-services" className={LINK}>on-page SEO</Link> service.
            </p>
            <div className="mt-8"><PillLink href="#quote" solid label="Fix My Website's Technical SEO" location="why_ivoniz" event="audit_click" /></div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Developers and SEO specialists in one team: audit and implementation with no handoffs",
              "Modern technology experience: React, Next.js, Node.js, WordPress, WooCommerce and Shopify",
              "Measured results: PageSpeed, Core Web Vitals and Search Console, before and after",
              "Clear quotes for audits and fix packages, agreed before work starts",
              `Based in Calicut (${ADDRESS.addressLocality}), working with businesses and agencies across Kerala and India`,
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
            <Heading>Technical SEO FAQs</Heading>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-24 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Free Speed Check</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Find out what&apos;s holding <span style={OUTLINE}>your website back</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your website link. We&apos;ll run a free 5-minute speed and indexing check, tell you the top 3
              issues and quote a full audit and fix.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="Book a Technical SEO Audit" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <TechSeoAuditForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Speed Check" message={WA.speed} />
    </main>
  );
}
