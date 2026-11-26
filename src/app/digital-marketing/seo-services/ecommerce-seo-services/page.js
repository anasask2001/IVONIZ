import Link from "next/link";
import {
  FaWhatsapp, FaClipboardCheck, FaKey, FaThLarge, FaTag, FaCode, FaSitemap, FaTools, FaBookOpen, FaLink, FaChartLine,
  FaShopify, FaWordpress, FaReact, FaCheck, FaMapMarkerAlt, FaGlobeAsia, FaArrowRight,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { clientBySlug } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { ECOM_SEO_PACKAGES, ECOM_SEO_AUDIT_PRICE } from "@/components/ecommerce/costs";
import EcomSeoAuditForm from "@/components/marketing/EcomSeoAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/ecommerce-seo-services — owns ecommerce
   seo services (+ in kerala / kochi / calicut / india / dubai), ecommerce
   website seo, ecommerce seo audit, shopify seo services / company / expert,
   woocommerce seo agency / expert, shopify seo packages, ecommerce seo cost,
   ecommerce seo vs normal seo. Source: Google autocomplete via Ubersuggest,
   25 Nov 2026 — volumes NOT pulled (verify next run).
   Shopify + WooCommerce stay as H3s here (no separate Shopify page yet).
   DIY terms (plugins, apps, checklist, jobs) → future blog post.
   Breadcrumb: Home › Digital Marketing › SEO Services › Ecommerce SEO Services.
   Prices not fixed → "Price on request" (costs.js: ECOM_SEO_PACKAGES, ECOM_SEO_AUDIT_PRICE).
   "Stores we've built" = real Ivoniz builds (src/lib/clients.js), shown as
   builds only — NO SEO results claimed. Only Gaming Qatar is a full store
   (Shopify, checkout); the rest are product websites without checkout.
   TODO: 2–3 ecommerce SEO case studies with permission + verified numbers.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/ecommerce-seo-services";
const TITLE = "Ecommerce SEO Services in Kerala & Dubai | Ivoniz LLP";
const DESCRIPTION =
  "Ecommerce SEO services for Shopify, WooCommerce and custom stores in Kerala, India and the UAE. Rank product and category pages and grow sales. Free audit.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Ecommerce SEO Services | Shopify, WooCommerce & Custom Stores",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ecommerce SEO services by Ivoniz for online stores in Kerala and Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce SEO Services | Shopify, WooCommerce & Custom Stores",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";
const SEO = "/digital-marketing/seo-services";

const WA = {
  audit: "Hi Ivoniz, I'd like a free ecommerce SEO audit. Store: ___ Platform: ___",
  uae: "Hi Ivoniz, I run an online store in the UAE / GCC and want to discuss ecommerce SEO. Store: ___",
};

const INCLUDED = [
  { Icon: FaClipboardCheck, title: "Ecommerce SEO audit", text: "A full check of your store's structure, speed, indexing and competitors." },
  { Icon: FaKey, title: "Product and category keyword research", text: "The terms buyers actually use before they purchase." },
  { Icon: FaThLarge, title: "Category page optimisation", text: "Titles, headings, descriptions and internal links for your main money pages." },
  { Icon: FaTag, title: "Product page optimisation", text: "Unique titles, descriptions, image alt text and FAQs." },
  { Icon: FaCode, title: "Product schema", text: "Price, availability and reviews shown in Google results." },
  { Icon: FaSitemap, title: "Site structure", text: "Clear categories, breadcrumbs and URLs so Google and shoppers find products fast." },
  { Icon: FaTools, title: "Technical ecommerce fixes", text: <>Duplicate and filter URLs, canonical tags, out-of-stock handling, sitemaps and page speed, by our <Link href={`${SEO}/technical-seo-services`} className={LINK}>technical SEO</Link> team.</> },
  { Icon: FaBookOpen, title: "Content for buyers", text: "Buying guides and comparison pages that link to your products." },
  { Icon: FaLink, title: "Link building", text: <>Links from relevant blogs, publications and directories in India and the GCC, through our <Link href={`${SEO}/off-page-seo-services`} className={LINK}>link building</Link> service.</> },
  { Icon: FaChartLine, title: "Monthly reporting", text: "Rankings, organic traffic, revenue and orders from search." },
];

const COMPARE = [
  ["Main pages", "Category and product pages", "Service, about and blog pages"],
  ["Scale", "Hundreds or thousands of URLs", "Usually under 100 pages"],
  ["Key issues", "Filters, variants, duplicates, stock changes", "Content depth, local signals"],
  ["Schema", "Product, offer, review, breadcrumb", "Organization, service, FAQ"],
  ["Goal", "Orders and revenue", "Calls and enquiries"],
];

const PROCESS = [
  { title: "Audit", text: "We review your store, your top competitors and your Google Search Console data." },
  { title: "Keyword map", text: "We assign target keywords to each category and key product." },
  { title: "Fix the foundations", text: "Technical issues, structure and speed, done by our developers." },
  { title: "Optimise pages", text: "Category pages first, then top products, then supporting content." },
  { title: "Build authority", text: "Links and mentions from relevant sites." },
  { title: "Report and refine", text: "Monthly reports on rankings, traffic and sales, then the next set of pages." },
];

/* Real Ivoniz builds (no SEO results claimed) */
const BUILDS = [
  { slug: "gaming-qatar", note: "Shopify store with catalogue and checkout · Qatar" },
  { slug: "nizra-gold-and-diamonds", note: "Jewellery product website · Kerala" },
  { slug: "posh-palette", note: "Bag shop product website · Calicut" },
  { slug: "arlocks-gents-wear", note: "Menswear product website · Kerala" },
  { slug: "technical-trade-co", note: "Product supplier website · Saudi Arabia" },
].map((b) => ({ ...b, client: clientBySlug(b.slug) })).filter((b) => b.client);

const WHO = [
  ["Stores with traffic but few sales from Google", "Shopify and WooCommerce stores that need pages that convert."],
  ["New online stores", "SEO set up correctly from launch."],
  ["Brands relying on ads or marketplaces", "Building your own organic sales."],
  ["Stores moving platforms", "For example WooCommerce to Shopify, without losing rankings."],
  ["Retailers in Kerala, India and the GCC", "National product searches and local shoppers."],
];

const FAQS = [
  { q: "What is included in ecommerce SEO services?", a: "Ecommerce SEO includes keyword research for products and categories, category and product page optimisation, product schema, site structure, technical fixes such as duplicate and filter URLs, page speed, content and link building." },
  { q: "How is ecommerce SEO different from normal SEO?", a: "Ecommerce SEO deals with hundreds or thousands of product and category pages, filters, variants, stock changes and product schema. Normal SEO usually focuses on a smaller set of service and blog pages." },
  { q: "How much do ecommerce SEO services cost?", a: "Cost depends on the number of products and categories, your platform and how competitive your market is. Ivoniz offers monthly packages in rupees for India and in AED for UAE and GCC stores." },
  { q: "Do you do SEO for Shopify and WooCommerce stores?", a: "Yes. We work on Shopify, WooCommerce and custom-built stores, and our developers make the changes directly on your store." },
  { q: "Is SEO worth it for an ecommerce store?", a: "Yes, for most stores. Organic traffic does not cost per click, and product and category pages that rank keep bringing buyers without ongoing ad spend." },
  { q: "How long does ecommerce SEO take to show results?", a: "Technical fixes and category page improvements often show changes within a few weeks of Google re-crawling. Steady growth in rankings and sales usually takes three to six months, depending on competition." },
  { q: "Can you keep my rankings safe if I move to a new platform?", a: "Yes. We map every old URL to the new one, set up redirects and check indexing after launch, so you keep the rankings you've already earned." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Ecommerce SEO Services",
      serviceType: "Ecommerce search engine optimisation",
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
        name: "Ecommerce SEO",
        itemListElement: ["Shopify SEO", "WooCommerce SEO", "Ecommerce SEO audit", "Product schema", "Ecommerce link building"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Ecommerce SEO Services in Kerala & Dubai",
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
        { "@type": "ListItem", position: 4, name: "Ecommerce SEO Services", item: PAGE_URL },
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

const price = (p) => (p.inr && p.aed ? `${p.inr} / ${p.aed}` : p.inr || p.aed || null);

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function EcommerceSeoServicesPage() {
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
              { label: "Ecommerce SEO Services", href: `${SEO}/ecommerce-seo-services` },
            ]}
          />
          <div className="mt-8"><Label>Ecommerce SEO Services</Label></div>
          <HeroTitle outline="Shopify, WooCommerce and Custom Stores">Ecommerce SEO Services for</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz provides ecommerce SEO services for online stores in Calicut, across Kerala and India, and in Dubai
                and the GCC. We help your product and category pages show up when shoppers search for what you sell, so
                more of your sales come from Google instead of paid ads. Because our team also builds ecommerce stores, we
                don&apos;t just tell you what to fix. We fix it on your store.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">We build and rank stores · fixes done by our developers · pricing in ₹ and AED</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free Ecommerce SEO Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="WhatsApp Us" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaShopify aria-hidden="true" className="text-white/55" /> Shopify</li>
            <li className="flex items-center gap-2"><FaWordpress aria-hidden="true" className="text-white/55" /> WooCommerce</li>
            <li className="flex items-center gap-2"><FaReact aria-hidden="true" className="text-white/55" /> Custom and headless stores</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Calicut team serving India and the GCC</li>
          </ul>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>Why online stores need ecommerce SEO</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Most shoppers start on Google. If your category and product pages don&apos;t rank, those buyers go to
              marketplaces or competitors. Paid ads can bring traffic, but the cost goes up every month and stops the day
              you stop paying. Organic rankings keep bringing buyers without a cost per click.
            </p>
            <p className="mt-4 text-[16px] text-black/65 leading-relaxed">
              Online stores also have problems normal websites don&apos;t: hundreds of similar product pages, filter and
              variant URLs, out-of-stock items and thin descriptions. Ecommerce website SEO services are built to handle
              these.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              ["Hundreds of similar product pages", "Google can't tell which one to rank, so none rank well."],
              ["Filter and variant URLs", "Thousands of near-duplicate pages waste Google's crawl."],
              ["Out-of-stock and thin pages", "Dead ends for shoppers and weak signals for Google."],
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
            <Heading>What&apos;s included in our ecommerce SEO services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Category pages, product pages and the technical layer underneath, worked on together by one team.
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

      {/* ── PLATFORMS ── */}
      <section id="platforms" className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Platforms</Label>
          <h2 className="text-white max-w-[820px]" style={h2Style}>Shopify, WooCommerce and custom store SEO</h2>
          <div className="mt-10 grid lg:grid-cols-3 gap-3">
            <article id="shopify-seo" className="p-7 sm:p-8 flex flex-col scroll-mt-24" style={GLASS}>
              <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaShopify aria-hidden="true" /></span>
              <h3 className="mt-6 text-[22px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>Shopify SEO</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/65 flex-1">
                Our Shopify SEO services fix the platform&apos;s common issues: duplicate collection-product URLs, thin
                collection pages, app bloat that slows the store, and missing schema. We set up clean collections,
                metafields for product content and fast-loading themes.
              </p>
            </article>
            <article id="woocommerce-seo" className="p-7 sm:p-8 flex flex-col scroll-mt-24" style={GLASS}>
              <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaWordpress aria-hidden="true" /></span>
              <h3 className="mt-6 text-[22px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>WooCommerce SEO</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/65 flex-1">
                We optimise WooCommerce stores on WordPress: category and attribute pages, product schema, SEO plugin
                setup, caching and hosting speed. As a{" "}
                <Link href="/website-development/ecommerce-website-development/woocommerce-website-development" className={LINK}>WooCommerce development</Link>{" "}
                team, we can also fix templates and code directly.
              </p>
            </article>
            <article id="custom-store-seo" className="p-7 sm:p-8 flex flex-col scroll-mt-24" style={GLASS}>
              <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaReact aria-hidden="true" /></span>
              <h3 className="mt-6 text-[22px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>Custom and headless stores</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/65 flex-1">
                For custom-built stores, our developers handle server-side rendering, clean URLs, structured data and Core
                Web Vitals so search engines can read every product.
              </p>
            </article>
          </div>
          <p className="mt-8 max-w-[820px] text-[15px] text-white/60 leading-relaxed">
            Don&apos;t have a store yet? Our <Link href="/website-development/ecommerce-website-development" className={LINK}>ecommerce website development</Link> team
            builds Shopify, WooCommerce and custom stores with SEO set up from launch.
          </p>
        </div>
      </section>

      {/* ── STORES WE'VE BUILT ── */}
      {BUILDS.length > 0 && (
        <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[820px] mb-10">
              <Label>Our Work</Label>
              <Heading>Stores and product websites we&apos;ve built</Heading>
              <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
                We build and rank stores. These are product websites our team designed and developed, each with on-page
                SEO set up at launch.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {BUILDS.map(({ slug, note, client }) => (
                <li key={slug}>
                  <Link href={`/works/${slug}`} className="group h-full p-6 flex flex-col transition-colors hover:bg-white/[0.06]" style={GLASS}>
                    <span className="text-[12px] text-white/55">{client.industry}</span>
                    <span className="mt-2 text-[18px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{client.title}</span>
                    <span className="mt-2 text-[13.5px] text-white/60 leading-relaxed flex-1">{note}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13px] text-white/75 group-hover:text-white">
                      View project <FaArrowRight aria-hidden="true" className="text-[11px]" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── ECOMMERCE vs NORMAL SEO ── */}
      <section id="compare" className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>Ecommerce SEO vs normal SEO</Heading>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[600px] text-left text-[15px]">
              <caption className="sr-only">Comparison of ecommerce SEO and normal SEO</caption>
              <thead>
                <tr className="border-b border-black/10 text-[12px] uppercase tracking-[0.16em] text-black/60">
                  <th scope="col" className="p-5 font-semibold"><span className="sr-only">Aspect</span></th>
                  <th scope="col" className="p-5 font-semibold">Ecommerce SEO</th>
                  <th scope="col" className="p-5 font-semibold">Normal SEO</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, e, n]) => (
                  <tr key={k} className="border-b border-black/10 last:border-0">
                    <th scope="row" className="p-5 font-semibold text-black align-top">{k}</th>
                    <td className="p-5 text-black/75 align-top">{e}</td>
                    <td className="p-5 text-black/60 align-top">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-[820px] text-[16px] text-black/65 leading-relaxed">
            For service businesses, our <Link href={SEO} className={LINK_DARK}>SEO company in Calicut</Link> page covers
            the full service, and <Link href={`${SEO}/on-page-seo-services`} className={LINK_DARK}>on-page SEO</Link> covers
            titles, headings and content page by page.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our ecommerce SEO process</Heading>
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

      {/* ── KERALA + UAE/GCC ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="kerala" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Ecommerce SEO for Kerala stores</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              From fashion and jewellery to spices, Ayurveda and electronics, more Kerala businesses now sell online
              across India. Our ecommerce SEO services in Kerala help stores in Calicut, Kochi, Thrissur, Malappuram and
              beyond rank for national product searches, while also showing up in local searches for customers who want
              to visit or collect in store.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>National product and category searches</Check>
              <Check>Local searches for visit and collect-in-store</Check>
              <Check>Affordable ecommerce SEO services for Indian stores</Check>
            </ul>
            <p className="mt-8 text-[14px] text-white/60">
              Ivoniz LLP, {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion}
            </p>
          </article>
          <article id="uae-gcc" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaGlobeAsia aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Ecommerce SEO for Dubai, UAE and GCC stores</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We provide ecommerce SEO services in Dubai for online stores in Abu Dhabi, Sharjah, Saudi Arabia, Qatar and
              the wider GCC. We set up AED and local pricing in product schema, optimise for UAE and GCC search terms, and
              build links from regional sites, including Shopify SEO services for Dubai stores. You get clear monthly
              reporting and pricing in AED, delivered by our team in Calicut. We work with Gulf clients remotely from our office in Kozhikode, with calls in Gulf time; we have no office in the UAE. For SEO focused on the UAE, see <Link href="/digital-marketing/seo-services/seo-services-dubai" className="underline underline-offset-4">SEO services for Dubai businesses</Link>.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>AED and local pricing in product schema</Check>
              <Check>UAE and GCC search terms</Check>
              <Check>Links from regional sites</Check>
            </ul>
            <div className="mt-8">
              <PillLink href={waLink(WA.uae)} external event="whatsapp_click" label="Talk to us about the GCC" location="uae_block" icon={<FaWhatsapp aria-hidden="true" />} />
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
              An ecommerce SEO company in India with a Calicut office, for stores of every size.
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
          <Heading className="max-w-[760px]">Ecommerce SEO packages</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            Ecommerce SEO services in India priced by store size, in rupees, and in AED for UAE and GCC stores. Shopify SEO
            packages and WooCommerce packages follow the same tiers.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {ECOM_SEO_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className="mt-2 text-[20px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.size}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {price(p) ? <>{price(p)}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} ecommerce SEO package (${p.size}). Store: ___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`ecom_seo_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            All packages include monthly reporting. A one-time ecommerce SEO audit is also available
            {ECOM_SEO_AUDIT_PRICE ? <> from {ECOM_SEO_AUDIT_PRICE}</> : null}.
          </p>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Free Ecommerce SEO Audit" location="packages" event="audit_click" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Ecommerce SEO FAQs</Heading>
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
            <Label>Free Audit</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get your free <span style={OUTLINE}>ecommerce SEO audit</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your store link. We&apos;ll check 10 of your product and category pages against your top 3
              competitors and send you a short list of fixes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly. Want a full-site check too? See our{" "}
              <Link href="/digital-marketing/seo-services/seo-audit-services" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">SEO audit services</Link>.
            </p>
          </div>
          <EcomSeoAuditForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Store Audit" message={WA.audit} />
    </main>
  );
}
