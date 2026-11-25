import Link from "next/link";
import {
  FaWhatsapp, FaKey, FaHeading, FaListOl, FaPenNib, FaLink, FaImage, FaRoute, FaCode, FaQuestionCircle, FaHandPointer,
  FaCheck, FaMapMarkerAlt, FaTools,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { ON_PAGE_PACKAGES, ON_PAGE_PER_PAGE } from "@/components/ecommerce/costs";
import OnPageCheckForm from "@/components/marketing/OnPageCheckForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/on-page-seo-services — owns "on page seo services" (2,400/mo, SD 24,
   $0.94 CPC, Ubersuggest India db, 25 Nov 2026), on-page SEO optimisation
   services, advanced on-page SEO, "what is included in on page seo",
   on-page vs off-page vs technical SEO, content and image optimisation,
   on-page SEO for WordPress. Learner terms (checklist, techniques, pdf,
   course) are left for a future blog checklist post.
   Crawling / speed → /technical-seo-services. Maps / GBP → /local-seo-services.
   Breadcrumb: Home › SEO Services › On-Page SEO Services.
   Prices not fixed → "Price on request" (costs.js: ON_PAGE_PACKAGES, ON_PAGE_PER_PAGE).
   The rewrite example is illustrative (labelled as such), not a client result.
   TODO: add real before/after examples with ranking changes.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/on-page-seo-services";
const TITLE = "On-Page SEO Services in Calicut, Kerala | Ivoniz LLP";
const DESCRIPTION =
  "On-page SEO services in Calicut, Kerala: we optimise titles, content, headings, internal links, images and schema on your key pages. Get a free check.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "On-Page SEO Optimisation Services | Calicut, Kerala",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "On-page SEO services: optimised titles, headings and content" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Page SEO Optimisation Services | Calicut, Kerala",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  check: "Hi Ivoniz, I'd like a free on-page SEO check of 3 pages. Website: ___",
};

const INCLUDED = [
  { Icon: FaKey, title: "Keyword mapping", text: "One main keyword per page, so your pages don't compete with each other." },
  { Icon: FaHeading, title: "Title tags and meta descriptions", text: "Written to rank and to earn the click." },
  { Icon: FaListOl, title: "Heading structure", text: "A clear H1 and logical H2 and H3 sections." },
  { Icon: FaPenNib, title: "Content optimisation", text: "Rewriting and expanding thin pages so they fully answer the search." },
  { Icon: FaLink, title: "Internal linking", text: "Links between related services, blogs and contact pages." },
  { Icon: FaImage, title: "Image optimisation", text: "Compressed images, descriptive file names and alt text." },
  { Icon: FaRoute, title: "URL structure", text: "Short, readable URLs, with redirects when anything changes." },
  { Icon: FaCode, title: "Schema markup", text: "Service, FAQ, Breadcrumb and Organization structured data." },
  { Icon: FaQuestionCircle, title: "FAQ sections", text: "Answering real customer questions on each service page." },
  { Icon: FaHandPointer, title: "CTA and conversion checks", text: "Clear calls, forms and WhatsApp buttons so visitors become leads." },
];

const COMPARE = [
  ["On-page SEO", "Content, titles, headings, internal links, images, schema", "On each page of your website", null],
  ["Off-page SEO", "Backlinks, mentions, reviews", "Outside your website", { href: "/digital-marketing/seo-services/off-page-seo-services", label: "Off-page SEO" }],
  ["Technical SEO", "Crawling, indexing, speed, Core Web Vitals", "Across your whole website", { href: "/digital-marketing/seo-services/technical-seo-services", label: "Technical SEO" }],
];

/* Illustrative rewrite (not a client result) */
const EXAMPLE = [
  ["Title tag", "Home | ABC Dental", "Dental Clinic in Kozhikode | Implants & Braces – ABC Dental"],
  ["Meta description", "Welcome to our website.", "Painless implants, braces and root canal treatment in Kozhikode. Open 7 days. Book on WhatsApp today."],
  ["H1", "Welcome", "Dental Clinic in Kozhikode for Implants, Braces and Family Care"],
  ["Image alt text", "IMG_2041.jpg", "Dentist explaining an implant to a patient at ABC Dental, Kozhikode"],
];

const PROCESS = [
  { title: "Review", text: "We check your key pages, rankings and Google Search Console data." },
  { title: "Keyword plan", text: "We assign one target keyword and intent to each page." },
  { title: "Rewrite", text: "We prepare new titles, meta descriptions, headings and content for your approval." },
  { title: "Implement", text: "Our developers update the pages on WordPress, Shopify, WooCommerce or your custom site." },
  { title: "Track", text: "We monitor rankings, clicks and enquiries, and refine pages that need more work." },
];

const WHO = [
  ["Websites with visitors but few enquiries", "Pages that rank or get traffic but don't convert."],
  ["New websites", "Every page set up correctly from the start."],
  ["Ecommerce stores", <>Weak product and category pages that need better titles, content and schema. See <Link key="ec" href="/digital-marketing/seo-services/ecommerce-seo-services" className="text-black underline underline-offset-4 decoration-black/25 hover:decoration-black">ecommerce SEO</Link>.</>],
  ["Many service pages, few rankings", "Pages that overlap, compete with each other and rank for nothing."],
  ["Kerala, India and the GCC", "Businesses across India and in the UAE, Qatar and Saudi Arabia."],
];

const FAQS = [
  { q: "What is included in on-page SEO?", a: "On-page SEO includes keyword mapping, title tags, meta descriptions, headings, content optimisation, internal links, image optimisation, URL structure and schema markup on each important page of your website." },
  { q: "What is the difference between on-page and off-page SEO?", a: "On-page SEO improves the content and structure of your own pages. Off-page SEO builds authority from outside your website, mainly through backlinks, mentions and reviews." },
  { q: "What is the difference between on-page and technical SEO?", a: "On-page SEO works on what each page says and how it is structured: titles, headings, content, links and schema. Technical SEO works on the whole site's foundations: crawling, indexing, speed and Core Web Vitals." },
  { q: "How long does on-page SEO take to show results?", a: "Changes are usually picked up within a few weeks of Google re-crawling the pages. Ranking improvements depend on competition and your website's authority, and often take a few months." },
  { q: "Do you write the content too?", a: "Yes. Our team writes or rewrites page content, titles and meta descriptions, and shares them for your approval before publishing." },
  { q: "Can you work on my existing WordPress or Shopify website?", a: "Yes. We update existing WordPress, WooCommerce, Shopify and custom websites without changing your design." },
  { q: "Is on-page SEO a one-time job?", a: "The main optimisation is a one-time project. We recommend reviewing key pages every few months as search trends and competitors change." },
];

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "On-Page SEO Services",
      serviceType: "On-page search engine optimisation",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "On-page SEO services",
        itemListElement: ["Keyword mapping", "Title and meta description optimisation", "Content optimisation", "Internal linking", "Image optimisation", "Schema markup"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "On-Page SEO Services in Calicut, Kerala",
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
        { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://ivoniz.com/digital-marketing/seo-services" },
        { "@type": "ListItem", position: 4, name: "On-Page SEO Services", item: PAGE_URL },
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
export default function OnPageSeoServicesPage() {
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
              { label: "On-Page SEO Services", href: "/digital-marketing/seo-services/on-page-seo-services" },
            ]}
          />
          <div className="mt-8"><Label>On-Page SEO Services</Label></div>
          <HeroTitle outline="That Make Every Page Rank-Ready">On-Page SEO Services</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz provides on-page SEO services for businesses in Calicut, Kerala and across India. We go through
                your important pages one by one and fix what Google reads first: titles, meta descriptions, headings,
                content, internal links, images and schema. Our team writes the changes and updates your website
                directly, so nothing waits on another vendor.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">Free on-page check of 3 pages · content written and published by our team</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free On-Page Check" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.check)} external event="whatsapp_click" label="Send My Website on WhatsApp" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaPenNib aria-hidden="true" className="text-white/55" /> Content written for your approval</li>
            <li className="flex items-center gap-2"><FaTools aria-hidden="true" className="text-white/55" /> Changes published by our developers</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Team at HiLITE Business Park, Kozhikode</li>
          </ul>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>Why on-page SEO matters</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              A page can&apos;t rank for a search it doesn&apos;t clearly answer. Many business websites have service
              pages with the same title, thin content, missing headings or no links between related pages. On-page SEO
              optimisation fixes these so Google understands what each page is about and visitors find the answer they
              came for.
            </p>
            <p className="mt-4 text-[16px] text-black/65 leading-relaxed">
              It is also the part of SEO you control completely. Unlike links from other websites, every word, heading
              and link on your own pages can be improved this week.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              ["Same title on every page", "Google can't tell your services apart, so none of them rank well."],
              ["Thin service pages", "A few lines of text can't answer what buyers are searching for."],
              ["No internal links", "Important pages sit alone, and visitors can't find the next step."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <span className="block text-[16px] font-semibold text-black">{t}</span>
                <span className="block mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section id="included" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>What&apos;s Included</Label>
            <Heading>What&apos;s included in our on-page SEO services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Every important page gets the same ten checks, from keyword to call-to-action.
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

      {/* ── EXAMPLE REWRITE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Example</Label>
          <Heading className="max-w-[760px]">What an on-page rewrite looks like</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            An illustration for a dental clinic in Kozhikode (not a client page). The same page, before and after
            on-page SEO content optimisation.
          </p>
          <div className="mt-10 grid gap-3">
            {EXAMPLE.map(([field, before, after]) => (
              <div key={field} className="grid md:grid-cols-[180px_1fr_1fr] gap-3 md:gap-6 p-6" style={GLASS}>
                <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/60 md:pt-1">{field}</span>
                <span className="text-[15px] text-white/55">
                  <span className="block text-[12px] text-white/55 mb-1">Before</span>
                  <span className="line-through decoration-white/30">{before}</span>
                </span>
                <span className="text-[15px] text-white">
                  <span className="block text-[12px] text-white/55 mb-1">After</span>
                  {after}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ON-PAGE vs OFF-PAGE vs TECHNICAL ── */}
      <section id="compare" className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>On-page vs off-page vs technical SEO</Heading>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-[15px]">
              <caption className="sr-only">Comparison of on-page, off-page and technical SEO</caption>
              <thead>
                <tr className="border-b border-black/10 text-[12px] uppercase tracking-[0.16em] text-black/60">
                  <th scope="col" className="p-5 font-semibold">Type</th>
                  <th scope="col" className="p-5 font-semibold">What it covers</th>
                  <th scope="col" className="p-5 font-semibold">Where it happens</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([type, covers, where, link]) => (
                  <tr key={type} className="border-b border-black/10 last:border-0">
                    <th scope="row" className="p-5 font-semibold text-black align-top">
                      {link ? <Link href={link.href} className={LINK_DARK}>{type}</Link> : type}
                    </th>
                    <td className="p-5 text-black/70 align-top">{covers}</td>
                    <td className="p-5 text-black/70 align-top">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-[820px] text-[16px] text-black/65 leading-relaxed">
            Most websites need all three, and on-page and off-page SEO services work best together. Our{" "}
            <Link href="/digital-marketing/seo-services" className={LINK_DARK}>SEO company in Calicut</Link> page covers the full service,
            and our <Link href="/digital-marketing/seo-services/technical-seo-services" className={LINK_DARK}>technical SEO services</Link> handle site
            speed and indexing. For Google Maps, see our <Link href="/digital-marketing/seo-services/local-seo-services" className={LINK_DARK}>local SEO services</Link>.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our on-page SEO process</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-9 sm:gap-y-12">
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
            Running WordPress? We handle on-page SEO for WordPress with Rank Math or Yoast, or directly in your theme,
            without changing your design. New site on the way? Our <Link href="/website-development" className={LINK}>website development</Link> team
            builds every page on-page ready from day one.
          </p>
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
              On-page SEO services in India and the GCC, run from our Calicut office for businesses of every size.
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

      {/* ── PACKAGES ── */}
      <section id="packages" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">On-page SEO packages</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            One-time projects priced by the number of pages, from a small business site to advanced on-page SEO
            services for large websites.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {ON_PAGE_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className="mt-2 text-[20px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.pages}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {p.price ? <>From {p.price}</> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} on-page SEO package (${p.pages}). Website: ___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`on_page_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            Need a few pages only? {ON_PAGE_PER_PAGE ? <>Per-page pricing from {ON_PAGE_PER_PAGE}.</> : <>Ask about per-page pricing.</>}
          </p>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Free On-Page Check" location="packages" event="audit_click" />
          </div>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for on-page SEO</Heading>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Writers and developers in one team: content is written and published without a second vendor",
              "Every change shared for your approval before it goes live",
              "Your design stays the same: we change what Google reads, not how your site looks",
              "Pages set up for leads as well as rankings, with clear calls and WhatsApp buttons",
              "Based in Calicut, working with businesses across Kerala, India and the GCC",
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
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>On-page SEO FAQs</Heading>
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
            <Label>Free On-Page Check</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get your free <span style={OUTLINE}>on-page check</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your website and we&apos;ll review 3 key pages and share a short list of fixes for titles,
              headings and content.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.check)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly. Need a full-site check first? See our{" "}
              <Link href="/digital-marketing/seo-services/seo-audit-services" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">SEO audit services</Link>.
            </p>
          </div>
          <OnPageCheckForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free On-Page Check" message={WA.check} />
    </main>
  );
}
