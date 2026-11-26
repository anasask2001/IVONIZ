import Link from "next/link";
import {
  FaWhatsapp, FaTools, FaHeading, FaKey, FaLink, FaMapMarkedAlt, FaUsers, FaCode, FaRobot, FaHandPointer, FaListOl,
  FaCheck, FaMapMarkerAlt, FaGlobeAsia, FaFilePdf, FaUserCheck,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { SEO_AUDIT_TIERS, AUDIT_FEE_CREDIT } from "@/components/ecommerce/costs";
import SeoMiniAuditForm from "@/components/marketing/SeoMiniAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/seo-audit-services — owns seo audit
   services, website seo audit, seo audit services in india / company /
   experts, professional seo audit, free seo audit, seo audit cost,
   seo audit report example, seo audit dubai / affordable seo audit dubai.
   Also the landing page for general "free SEO audit" CTAs (#free-audit).
   Source: Google autocomplete via Ubersuggest, 25 Nov 2026 — volumes NOT
   pulled (verify next run). DIY terms (tool, checker, checklist, template,
   jobs, course) → future "SEO audit checklist 2026" blog post.
   "technical seo audit" depth stays on /technical-seo-services.
   Breadcrumb: Home › Digital Marketing › SEO Services › SEO Audit Services.
   Prices not fixed → "Price on request" (costs.js: SEO_AUDIT_TIERS).
   AUDIT_FEE_CREDIT=false hides the "fee credited against fixes" line until agreed.
   No sample report exists yet → "Ask for a sample report" (WhatsApp) instead of a download.
   TODO: confirm the 5–10 working day turnaround; add a blurred sample report.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/seo-audit-services";
const SEO = "/digital-marketing/seo-services";
const TITLE = "SEO Audit Services in Kerala & Dubai | Ivoniz LLP";
const DESCRIPTION =
  "Professional SEO audit services in Calicut, Kerala and Dubai. A manual website audit with a prioritised fix plan and a fixed price. Get a free mini-audit.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "SEO Audit Services | Manual Website Audit with a Fix Plan",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "SEO audit services by Ivoniz, Calicut: website audit report on screen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Audit Services | Manual Website Audit with a Fix Plan",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  mini: "Hi Ivoniz, I'd like a free SEO mini-audit. Website: ___ Main service: ___ Location: ___",
  full: "Hi Ivoniz, I'd like to book a full SEO audit. Website: ___",
  sample: "Hi Ivoniz, can you share a sample SEO audit report?",
  uae: "Hi Ivoniz, I'm in the UAE / GCC and would like an SEO audit quote in AED. Website: ___",
  agency: "Hi Ivoniz, we're an agency and want to discuss white-label SEO audits.",
};

const INCLUDED = [
  { Icon: FaTools, title: "Technical SEO", text: "Crawling, indexing, site speed, Core Web Vitals, mobile issues, redirects, broken links and sitemaps." },
  { Icon: FaHeading, title: "On-page SEO", text: "Titles, meta descriptions, headings, duplicate and thin content, internal links and images." },
  { Icon: FaKey, title: "Content and keywords", text: "Which pages rank, which keywords you're missing and where pages compete with each other." },
  { Icon: FaLink, title: "Backlink audit", text: "The quality of sites linking to you, toxic links and link gaps against competitors." },
  { Icon: FaMapMarkedAlt, title: "Local SEO", text: "Google Business Profile, reviews, map listings and business citations." },
  { Icon: FaUsers, title: "Competitor analysis", text: "What your top 3 competitors do better, and where you can overtake them." },
  { Icon: FaCode, title: "Schema and rich results", text: "Structured data that can earn stars, FAQs and product details in Google." },
  { Icon: FaRobot, title: "AI search visibility", text: "How your business appears in Google AI Overviews and AI assistants." },
  { Icon: FaHandPointer, title: "Conversion check", text: "Calls to action, forms and WhatsApp buttons that turn visitors into enquiries." },
  { Icon: FaListOl, title: "Prioritised action plan", text: "Every fix ranked by impact and effort." },
];

const TYPES = [
  ["Full SEO audit", "Business websites that want the complete picture", null],
  ["Technical SEO audit", "Sites with indexing, speed or migration problems", `${SEO}/technical-seo-services`],
  ["Local SEO audit", "Shops, clinics and service businesses that need Google Maps visibility", `${SEO}/local-seo-services`],
  ["Ecommerce SEO audit", "Shopify, WooCommerce and custom online stores", `${SEO}/ecommerce-seo-services`],
  ["Backlink audit", "Sites with ranking drops or a history of cheap link building", `${SEO}/off-page-seo-services`],
  ["Website migration audit", "Before and after a redesign or platform change", null],
];

const PROCESS = [
  { title: "Brief", text: "You tell us your goals, main services and target locations." },
  { title: "Crawl and data", text: "We crawl your website and review Google Search Console and Analytics (with your access)." },
  { title: "Manual review", text: "Our team checks every finding and compares you with your competitors." },
  { title: "Report", text: "You get a clear report with the action plan sorted by priority." },
  { title: "Walkthrough call", text: "We explain the findings and answer your questions." },
  { title: "Fix (optional)", text: "Our developers and SEO team can fix the issues for you." },
];

const RECEIVE = [
  "A written audit report (PDF) in plain language",
  "A prioritised fix list your team or ours can work from",
  "Competitor comparison for your top 3 competitors",
  "Keyword opportunities for your main services",
  "A walkthrough call to go through the findings",
];

const WHO = [
  ["Little traffic or few enquiries", "Websites that should be bringing more business than they do."],
  ["Lost rankings", "After a Google update or a redesign."],
  ["Planning a new website or platform move", "A baseline before anything changes."],
  ["About to hire an SEO agency", "An honest baseline first, so you can judge any proposal."],
  ["Agencies", "White-label audits for your clients."],
];

const FAQS = [
  { q: "What is included in an SEO audit?", a: "Our SEO audit covers technical SEO, on-page SEO, content, backlinks, local SEO, competitors, keyword opportunities and AI search visibility, with a prioritised action plan." },
  { q: "How much does an SEO audit cost?", a: "The cost depends on the size of your website and the depth of the audit. Ivoniz offers fixed-price audits in rupees for India and in AED for UAE and GCC businesses, plus a free mini-audit to start." },
  { q: "How long does an SEO audit take?", a: "A standard audit takes about 5 to 10 working days, depending on the size of the website. Large ecommerce websites can take longer." },
  { q: "Are SEO audits worth it?", a: "Yes. An audit shows exactly what is holding your website back, so you spend your SEO budget on the fixes that matter most instead of guessing." },
  { q: "Do you also fix the issues you find?", a: "Yes. Our developers and SEO team can fix the issues for you, or you can hand the report to your own team." },
  { q: "What access do you need?", a: "Just your website link for the mini-audit. For a full audit, read-only access to Google Search Console and Google Analytics gives the most accurate results." },
  { q: "How often should I audit my website?", a: "Once a year for most businesses, and always before and after a redesign, platform change or a big drop in traffic." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "SEO Audit Services",
      serviceType: "Website SEO audit",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO audits",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free SEO mini-audit" }, price: "0", priceCurrency: "INR" },
          ...["Full SEO audit", "Technical SEO audit", "Local SEO audit", "Ecommerce SEO audit", "Backlink audit"]
            .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "SEO Audit Services in Kerala & Dubai",
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
        { "@type": "ListItem", position: 3, name: "SEO Services", item: `https://ivoniz.com${SEO}` },
        { "@type": "ListItem", position: 4, name: "SEO Audit Services", item: PAGE_URL },
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

const tierPrice = (t) => {
  if (t.free) return "Free";
  if (t.inr && t.aed) return `${t.inr} / ${t.aed}`;
  return t.inr || t.aed || "Price on request";
};

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function SeoAuditServicesPage() {
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
              { label: "SEO Services", href: SEO },
              { label: "SEO Audit Services", href: `${SEO}/seo-audit-services` },
            ]}
          />
          <div className="mt-8"><Label>SEO Audit Services</Label></div>
          <HeroTitle outline="Find Out Exactly Why Your Website Isn't Ranking">SEO Audit Services:</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz provides professional SEO audit services for businesses in Calicut, across Kerala and India, and in
                Dubai and the GCC. We review your website the way Google does: how it is built, what each page says, who
                links to you and how you compare with competitors. You get a clear report that ranks every issue by
                impact, so you know exactly what to fix first.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">Free mini-audit · fixed-price full audits in ₹ and AED · no retainer required</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#free-audit" solid label="Get a Free SEO Mini-Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.full)} external event="whatsapp_click" label="Book a Full Audit" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaUserCheck aria-hidden="true" className="text-white/55" /> Checked by hand, not a tool export</li>
            <li className="flex items-center gap-2"><FaTools aria-hidden="true" className="text-white/55" /> Fixes available from our own developers</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Calicut team serving India, UAE and GCC</li>
          </ul>
        </div>
      </section>

      {/* ── WHY + PROFESSIONAL ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>Start Here</Label>
            <Heading dark={false}>Why start with an SEO audit</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Most businesses spend money on SEO without knowing what&apos;s actually wrong. A slow page, a blocked
              section, duplicate titles or a few bad links can hold back an entire website. A website SEO audit finds
              these problems before you spend on fixes, content or ads, so your budget goes where it makes a difference.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-black/10 p-7 sm:p-9">
            <h2 className="text-black" style={{ ...h2Style, fontSize: "clamp(22px,2.2vw,30px)" }}>Professional audit, not an automated scan</h2>
            <p className="mt-5 text-[15.5px] text-black/65 leading-relaxed">
              Free tools can list hundreds of warnings, but they can&apos;t tell you which ones matter for your business.
              Our SEO specialists check the results by hand, remove the noise, and explain each issue in plain language
              with a clear fix. You get a plan you can act on, not a long export.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section id="included" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>What&apos;s Included</Label>
            <Heading>What&apos;s included in our SEO audit</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              SEO audit and competitor analysis in one report, covering every area that affects rankings and leads.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
            {INCLUDED.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-6 flex flex-col sm:min-h-[210px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-6 text-[17px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2 text-[13.5px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPES OF AUDIT ── */}
      <section id="audit-types" className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Audit Types</Label>
          <h2 className="text-white" style={h2Style}>Types of SEO audit</h2>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TYPES.map(([t, best, href]) => (
              <li key={t} className="p-6 flex flex-col" style={GLASS}>
                <h3 className="text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="mt-2 text-[14px] text-white/60 leading-relaxed flex-1">Best for: {best}</p>
                {href && (
                  <Link href={href} className="mt-4 text-[13px] text-white/75 hover:text-white underline underline-offset-4 decoration-white/25">
                    {t === "Backlink audit" ? "See link building services" : `See ${t.replace(" audit", "")} services`}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our SEO audit process</Heading>
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
          <p className="mt-12 max-w-[820px] text-[15px] text-white/60 leading-relaxed">
            Fixes are done by the same team: <Link href={`${SEO}/technical-seo-services`} className={LINK}>technical SEO services</Link> for
            speed and indexing, <Link href={`${SEO}/on-page-seo-services`} className={LINK}>on-page SEO</Link> for titles and
            content, and <Link href={`${SEO}/off-page-seo-services`} className={LINK}>link building</Link> for authority.
          </p>
        </div>
      </section>

      {/* ── WHAT YOU RECEIVE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>Deliverables</Label>
            <Heading dark={false}>What you receive</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Want to see what an Ivoniz SEO audit report looks like before you book? Ask us for a sample.
            </p>
            <div className="mt-8">
              <PillLink href={waLink(WA.sample)} external solid dark={false} event="whatsapp_click" label="Ask for a sample report" location="receive" icon={<FaFilePdf aria-hidden="true" />} />
            </div>
          </div>
          <ul className="grid gap-3">
            {RECEIVE.map((t) => (
              <li key={t} className="rounded-2xl bg-white border border-black/10 p-5 flex gap-4 text-[15.5px] text-black/80">
                <FaCheck aria-hidden="true" className="shrink-0 mt-1 text-[13px] text-black/45" />{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── KERALA + UAE/GCC ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="kerala" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>SEO audit for Kerala businesses</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              For businesses in Calicut, Kochi, Thrissur, Malappuram, Kannur and across Kerala, we look closely at local
              search: your Google Business Profile, reviews, local listings and how you rank in your city. We also check
              whether your website is ready for customers searching from across India and the Gulf.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Google Business Profile and reviews</Check>
              <Check>City-level rankings across Kerala</Check>
              <Check>Readiness for India-wide and Gulf searches</Check>
            </ul>
            <p className="mt-8 text-[14px] text-white/60">
              Ivoniz LLP, {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion}
            </p>
          </article>
          <article id="uae-gcc" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaGlobeAsia aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>SEO audit services in Dubai, UAE and GCC</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We audit websites for businesses in Dubai, Abu Dhabi, Sharjah, Saudi Arabia, Qatar and the wider GCC. That
              includes UAE search terms, local listings, multi-country targeting and, where needed, a{" "}
              <Link href={`${SEO}/technical-seo-services`} className={LINK}>technical SEO audit</Link> for large or
              multilingual sites. You get an affordable, fixed-price audit in AED, with no retainer required, delivered by
              our team in Calicut. We work with Gulf clients remotely from our office in Kozhikode, with calls in Gulf time; we have no office in the UAE. For SEO focused on the UAE, see <Link href="/digital-marketing/seo-services/seo-services-dubai" className="underline underline-offset-4">SEO services for Dubai businesses</Link>.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>UAE and GCC search terms and listings</Check>
              <Check>Multi-country and multilingual targeting</Check>
              <Check>Fixed AED price, no retainer</Check>
            </ul>
            <div className="mt-8">
              <PillLink href={waLink(WA.uae)} external event="whatsapp_click" label="Get an AED quote" location="uae_block" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Who It&apos;s For</Label>
            <Heading dark={false}>Who it&apos;s for</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Your audit is done by SEO specialists in our Calicut team, the same people who fix the issues. Agencies can{" "}
              <a href={waLink(WA.agency)} target="_blank" rel="noopener noreferrer" className={LINK_DARK}>ask about white-label audits<span className="sr-only"> (opens WhatsApp)</span></a>.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {WHO.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <dt className="text-[16px] font-semibold text-black">{t}</dt>
                <dd className="mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">SEO audit pricing</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            SEO audit cost depends on the size of your website and the depth of the audit. Every audit is a one-time,
            fixed price, in rupees for India and in AED for the UAE and GCC.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SEO_AUDIT_TIERS.map((t) => (
              <article key={t.id} className={`p-7 flex flex-col ${t.free ? "bg-white text-black rounded-2xl" : ""}`} style={t.free ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${t.free ? "text-black/60" : "text-white/60"}`}>{t.label}</h3>
                <p className="mt-2 text-[19px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{t.size === "Any" ? "Any website" : t.size}</p>
                <p className={`mt-4 text-[14.5px] leading-relaxed flex-1 ${t.free ? "text-black/75" : "text-white/75"}`}>{t.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{tierPrice(t)}</p>
                <div className="mt-6">
                  {t.free ? (
                    <PillLink href="#free-audit" solid dark={false} label="Get it free" location="pricing_mini" event="audit_click" />
                  ) : (
                    <PillLink
                      href={waLink(`Hi Ivoniz, I'd like to book the ${t.label} (${t.size}). Website: ___`)}
                      external
                      solid
                      event="package_click"
                      label="Book this audit"
                      location={`seo_audit_${t.id}`}
                      icon={<FaWhatsapp aria-hidden="true" />}
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            All prices are one-time and fixed.
            {AUDIT_FEE_CREDIT ? " If you hire us to fix the issues, the audit fee is adjusted against the work." : " If you'd like us to fix the issues, we quote that separately after the walkthrough."}
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>SEO audit FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Looking for ongoing SEO instead? See our <Link href={SEO} className={LINK}>SEO company in Calicut</Link> page.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="free-audit" className={`relative py-16 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Free Mini-Audit</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get your free <span style={OUTLINE}>SEO mini-audit</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your website, your main service and your target location. We&apos;ll check your homepage and one
              key page and send you the top issues holding you back.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.mini)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <SeoMiniAuditForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free SEO Mini-Audit" message={WA.mini} />
    </main>
  );
}
