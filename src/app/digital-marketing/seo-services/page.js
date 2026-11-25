import Link from "next/link";
import {
  FaWhatsapp, FaClipboardCheck, FaMapMarkedAlt, FaHeading, FaTachometerAlt, FaPenNib, FaLink, FaShoppingCart, FaChartLine,
  FaRobot, FaCheck, FaMapMarkerAlt, FaPhoneAlt, FaStar,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { SEO_PACKAGES, SEO_AUDIT_PRICE } from "@/components/ecommerce/costs";
import SeoAuditForm from "@/components/marketing/SeoAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services — owns "seo company in calicut" (390/mo, SD 27, $3.18 CPC),
   "seo agency in kerala" (390), "seo services" (9,900, SD 11), "ai seo services" (1,900, $7.85), on-page / technical /
   ecommerce SEO (Ubersuggest India db, 25 Nov 2026).
   Beats the top competitor page on prices, FAQs, Calicut NAP and AI SEO.
   Breadcrumb: Home › Digital Marketing › SEO Services.
   Package / audit prices not fixed → "Price on request" (costs.js).
   TODO: add 2–3 verified SEO case studies and a named SEO lead when available.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services";
const TITLE = "SEO Company in Calicut, Kerala | SEO Services – Ivoniz LLP";
const DESCRIPTION =
  "SEO company in Calicut, Kerala. Local, technical and AI SEO that brings real leads. Transparent monthly packages and a free SEO audit. Talk to our team today.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "SEO Company in Calicut | Local, Technical & AI SEO",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "SEO company in Calicut team reviewing Google rankings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Calicut | Local, Technical & AI SEO",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  talk: "Hi Ivoniz, I'd like to talk to an SEO expert about my website.",
  audit: "Hi Ivoniz, I'd like a free SEO audit. Website: ___ Main competitor: ___",
};

const SERVICES = [
  { Icon: FaClipboardCheck, title: "SEO audit", text: <>A full review of your website, rankings, competitors and technical issues, with a prioritised fix list. See our <Link href="/digital-marketing/seo-services/seo-audit-services" className={LINK}>SEO audit services</Link>.</> },
  { Icon: FaMapMarkedAlt, title: "Local SEO", text: "Google Business Profile optimisation, local citations, reviews strategy and location pages to rank in Google Maps and “near me” searches." },
  { Icon: FaHeading, title: "On-page SEO", text: <>Titles, headings, content, internal links and schema on every key page. See our <Link href="/digital-marketing/seo-services/on-page-seo-services" className={LINK}>on-page SEO services</Link>.</> },
  { Icon: FaTachometerAlt, title: "Technical SEO", text: <>Site speed, Core Web Vitals, mobile issues, indexing, redirects and broken links, fixed by our own developers. See our <Link href="/digital-marketing/seo-services/technical-seo-services" className={LINK}>technical SEO services</Link>.</> },
  { Icon: FaPenNib, title: "Content and keyword strategy", text: "Service pages and blog content built from real search data, in English and Malayalam where it helps." },
  { Icon: FaLink, title: "Link building and digital PR", text: <>Quality links from Indian and Kerala business sites, directories and publications. See our <Link href="/digital-marketing/seo-services/off-page-seo-services" className={LINK}>off-page SEO services</Link>.</> },
  { Icon: FaShoppingCart, title: "Ecommerce SEO", text: <>Category, product and schema optimisation for <Link href="/website-development/ecommerce-website-development/woocommerce-website-development" className={LINK}>WooCommerce</Link> and custom stores. See our <Link href="/digital-marketing/seo-services/ecommerce-seo-services" className={LINK}>ecommerce SEO services</Link>.</> },
  { Icon: FaChartLine, title: "SEO reporting", text: "Monthly report on rankings, traffic, calls and leads, in plain language." },
];

const AUDIT_CHECKS = [
  ["Rankings and visibility", "Where you rank today for the searches your buyers make, in Google and Google Maps."],
  ["Technical health", "Speed, mobile usability, indexing, broken links, redirects and duplicate pages."],
  ["On-page gaps", "Missing or weak titles, headings, content and schema on your key pages."],
  ["Google Business Profile", "Categories, services, photos, reviews and consistency of your business details."],
  ["Competitors", "What your top competitor ranks for that you don't, and why."],
  ["Quick wins", "The changes most likely to bring more calls and enquiries first."],
];

const PROCESS = [
  { title: "Free SEO audit", text: "Where you rank, what's holding you back and what competitors do better." },
  { title: "Keyword and lead plan", text: "Searches your buyers actually make, with volume and difficulty, mapped to pages." },
  { title: "Technical fixes", text: "Our developers fix speed, mobile and indexing issues directly." },
  { title: "On-page and content", text: "Key pages optimised; new pages and posts where there are gaps." },
  { title: "Local and links", text: "Google Business Profile, citations, reviews and quality backlinks." },
  { title: "Monthly reporting", text: "Rankings, traffic, calls and leads, with next month's plan." },
];

const INDUSTRIES = [
  ["Doctors, clinics and hospitals", "Appointment searches and Google Maps."],
  ["Schools, colleges and coaching", "Admission-season keywords."],
  ["Real estate and builders", "Project and location searches, including NRI audiences."],
  ["Jewellery, textiles and retail", "Local and festive searches."],
  ["Hotels, resorts and restaurants", "Maps, reviews and travel searches."],
  ["Ecommerce brands", <>Category and product rankings for stores from our <Link key="ec" href="/website-development/ecommerce-website-development" className={LINK_DARK}>ecommerce website development</Link> team.</>],
  ["Manufacturers and B2B", "Product and export enquiries."],
];

const FAQS = [
  { q: "How much do SEO services cost in Calicut?", a: "It depends on how competitive your industry is, how many keywords you target, and whether you need local, national or ecommerce SEO. We recommend a package after a free SEO audit, so you only pay for what will move your results." },
  { q: "How long does SEO take to show results?", a: "Most businesses see clear movement in 3 to 6 months. Local SEO in Google Maps can improve sooner, while competitive national keywords take longer." },
  { q: "Do you guarantee first-page rankings?", a: "No. No honest SEO company can guarantee Google rankings, because Google controls them. We set clear targets, show progress every month and focus on leads." },
  { q: "What is included in local SEO?", a: "Google Business Profile optimisation, consistent name-address-phone details, local citations, a review strategy and location-specific pages." },
  { q: "What is AI SEO?", a: "AI SEO is optimising your content and business information so that tools like Google AI Overviews and ChatGPT mention or cite your business when people ask questions in your field." },
  { q: "Do you fix website issues yourself?", a: "Yes. Ivoniz is also a web development company, so our developers fix speed, mobile and technical SEO issues directly." },
  { q: "Do I need a long-term contract?", a: "We recommend giving SEO at least 6 months to work, because rankings build over time. We agree the terms with you clearly before we start." },
  { q: "Can you do SEO for a website another company built?", a: "Yes. We work on WordPress, WooCommerce, Shopify and custom websites, whoever built them." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "SEO Services",
      serviceType: "Search engine optimisation",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO services",
        itemListElement: ["SEO audit", "Local SEO", "On-page SEO", "Technical SEO", "AI SEO", "Ecommerce SEO", "Link building"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "SEO Company in Calicut, Kerala",
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
        { "@type": "ListItem", position: 2, name: "Digital Marketing", item: "https://ivoniz.com/digital-marketing" },
        { "@type": "ListItem", position: 3, name: "SEO Services", item: PAGE_URL },
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
export default function SeoServicesPage() {
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
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "SEO Services", href: "/digital-marketing/seo-services" },
            ]}
          />
          <div className="mt-8"><Label>SEO Company in Calicut</Label></div>
          <HeroTitle outline="That Turns Rankings into Leads">SEO Company in Calicut, Kerala</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz is an SEO company in Calicut (Kozhikode), Kerala, that helps businesses get found on Google, Google
                Maps and AI search, and turns that visibility into calls, WhatsApp enquiries and sales. As an SEO agency
                in Kerala we handle the full job: technical fixes on your website, local SEO, content, links and monthly
                reporting on leads, not just rankings. Our team works from HiLITE Business Park, Kozhikode, and serves
                businesses across Kerala and India.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">Free SEO audit · monthly packages · reports on leads, not just rankings</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free SEO Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="Talk to an SEO Expert" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          {/* Proof strip — verifiable items only (add verified ranking results / directory badges when available) */}
          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2">
              <FaStar aria-hidden="true" className="text-white/55" />
              <a href={organizationSchema.hasMap} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-white/20 hover:text-white">
                Read our Google reviews<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> Technical fixes by our own developers</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Real office at HiLITE Business Park, Kozhikode</li>
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our SEO services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              From on-page SEO services to technical fixes and link building, every part of SEO is done in-house and
              reported against the leads it brings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[230px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-7 text-[18.5px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SEO + LOCAL SEO ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="ai-seo" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaRobot aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>AI SEO: be found in Google AI Overviews and ChatGPT</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              More customers now get answers from Google&apos;s AI Overviews, ChatGPT and other AI assistants before they
              click a website. Our AI SEO services help your business appear in those answers: clear question-and-answer
              content, structured data, consistent business information across the web, and authority signals that AI
              tools rely on. It builds on solid traditional SEO, so you get both.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              {["Question-and-answer content that AI tools can quote", "Schema markup for your business, services and FAQs", "Consistent details on directories AI assistants read"].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
              ))}
            </ul>
          </article>
          <article id="local-seo" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkedAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Local SEO for Calicut and Kerala businesses</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              For most Kerala businesses, the fastest SEO wins come from Google Maps and &ldquo;near me&rdquo; searches.
              Our <Link href="/digital-marketing/seo-services/local-seo-services" className={LINK}>local SEO services</Link> optimise your Google Business Profile, fix your name, address and phone details
              everywhere they appear, build local citations, set up a review strategy, and create location pages for the
              towns you serve: Kozhikode, Malappuram, Kochi, Thrissur, Kannur and beyond.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              {["Google Business Profile set up and kept active", "Review requests and replies", "Location pages for every town you serve"].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ── WHAT THE FREE AUDIT COVERS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Free SEO Audit</Label>
            <Heading dark={false}>What your free SEO audit covers</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              The audit is a clear, plain-language report, not a 50-page tool export. It shows what to fix first and
              what results to expect.
            </p>
            <div className="mt-8"><PillLink href="#quote" solid dark={false} label="Get My Free SEO Audit" location="audit_block" event="audit_click" /></div>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {AUDIT_CHECKS.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <dt className="text-[16px] font-semibold text-black">{t}</dt>
                <dd className="mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">How our SEO process works</Heading>
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

      {/* ── PACKAGES ── */}
      <section id="packages" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">SEO packages and pricing</Heading>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {SEO_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className={`mt-2 text-[14px] ${i === 1 ? "text-black/60" : "text-white/55"}`}>Best for: {p.best}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {p.price ? <>From {p.price}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} SEO package. Can you share the price?`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`seo_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            {SEO_AUDIT_PRICE ? <>One-time SEO audit: {SEO_AUDIT_PRICE} (free for businesses that start a package). </> : <>The first SEO audit is free. </>}
            SEO services for small business and larger campaigns are scoped after the audit, based on your competition and goals.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-3">
            <div className="p-7 sm:p-8" style={GLASS}>
              <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>What affects the cost of SEO</h3>
              <ul className="mt-4 grid gap-3 text-[14.5px] text-white/65 leading-relaxed">
                {[
                  "Competition: a dentist in Kozhikode needs less work than a national ecommerce brand.",
                  "Number of keywords, locations and pages you want to rank.",
                  "Your website's starting point: speed, technical issues and existing content.",
                  "How much new content and link building the plan needs each month.",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="p-7 sm:p-8" style={GLASS}>
              <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>SEO or Google Ads?</h3>
              <p className="mt-4 text-[14.5px] text-white/65 leading-relaxed">
                Google Ads bring enquiries from the first week but stop the day you stop paying. SEO takes 3 to 6 months
                to build, then keeps bringing visitors without paying per click. Most businesses do best with both:
                ads for leads now, SEO for lower-cost leads later. We plan them together so they target the same
                buyers and you can see which one brings each enquiry.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Free SEO Audit" location="packages" event="audit_click" />
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Industries</Label>
            <Heading dark={false}>SEO for your industry</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Buyers search differently in every industry. We target the searches that lead to bookings, visits and
              orders in yours.
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

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why choose Ivoniz as your SEO company in Calicut</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              SEO is part of our full <Link href="/digital-marketing" className={LINK}>digital marketing agency in Calicut</Link> service,
              alongside Google Ads and <Link href="/digital-marketing/social-media-marketing" className={LINK}>social media marketing</Link>.
            </p>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Developers in-house: technical SEO issues get fixed, not just reported",
              "Lead-focused reporting: calls and enquiries, not just rankings",
              "Real Calicut office: meet us at HiLITE Business Park, Kozhikode",
              "Ethical SEO only: no spam links or shortcuts that risk penalties",
              "AI search ready: content built for Google AI Overviews and ChatGPT",
            ].map((t, i) => (
              <li key={t} className="flex items-baseline gap-6 border-b border-white/10 py-6">
                <span className="text-[13px] text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] sm:text-[19px] text-white/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 300 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── KERALA ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[1.1fr_1fr] gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={h2Style}>SEO services across Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              From our Calicut office we run SEO for businesses across Kerala, including Kochi, Malappuram, Thrissur,
              Kannur and Trivandrum, and for clients across India. Whether you need SEO services in Calicut, Cochin or
              Thrissur, you work with the same team and get the same monthly reporting. Many of our clients also sell
              to NRI and GCC audiences, so we plan keywords and pages for buyers searching from the UAE, Qatar and
              Saudi Arabia as well as Kerala.
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
              <PillLink href="#quote" solid label="Get Your Free SEO Audit" location="kerala_block" event="audit_click" />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Built Right</Label>
            <h2 className="text-white" style={h2Style}>SEO starts with a well-built website</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Slow, badly structured sites hold rankings back however good the content is. Because we also build
              websites, we can fix the foundations directly. See our <Link href="/website-development" className={LINK}>website development</Link> and{" "}
              <Link href="/website-development/wordpress-website-development" className={LINK}>WordPress website development</Link> services.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              {["Core Web Vitals and mobile speed", "Clean URLs, sitemaps and schema", "Redirects that keep rankings during a redesign"].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>SEO FAQs</Heading>
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
            <Label>Free SEO Audit</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get a free SEO audit <span style={OUTLINE}>for your website</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your website and your main competitor. We&apos;ll show where you rank, what&apos;s holding you
              back and how many more leads SEO could bring.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="Request the audit on WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <SeoAuditForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free SEO Audit" message={WA.audit} />
    </main>
  );
}
