import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaThLarge, FaImages, FaClipboardList, FaTag, FaUserLock, FaFileExcel, FaSearch,
  FaInbox, FaLanguage, FaGoogle, FaSlidersH, FaIndustry, FaWarehouse, FaGem, FaCouch, FaCogs, FaShip,
  FaTshirt, FaMicroscope, FaCheck,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import DemoCatalogue from "@/components/catalogue/DemoCatalogue";
import { CATALOGUE_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /catalogue-website-development — owns "product catalogue website
   development": catalogue + enquiry / quote / WhatsApp ordering, no checkout.
   URL kept flat to match the other service pages (/ecommerce-website-development,
   /woocommerce-website-development); the breadcrumb carries the hierarchy.
   Does NOT target: "ecommerce website development", "WooCommerce development
   services", "website development company".
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/catalogue-website-development";
const TITLE = "Product Catalogue Website Development in Kerala & UAE | Ivoniz LLP";
const DESCRIPTION =
  "Product catalogue websites for manufacturers, wholesalers and showrooms in Kerala and the UAE. Show every product and get enquiries on WhatsApp. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Product Catalogue Website Development | Enquiry & WhatsApp",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Product catalogue website with Enquire and WhatsApp buttons" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Catalogue Website Development | Enquiry & WhatsApp",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK_DARK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_LIGHT = "text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black";

const SEND_CATALOGUE_MSG = "Hi Ivoniz, I want a product catalogue website. I'll send you my current catalogue / price list here.";

/* Real sites from /works for catalogue-style businesses (built by Ivoniz; not all are enquiry catalogues) */
const EXAMPLES = [
  { industry: "Jewellery", title: "Nizra Gold and Diamonds", url: "https://nizragold.com/", image: "/Portfolios/NIZRA_GOLD_AND_DIAMONS.webp" },
  { industry: "Manufacturing", title: "Feraro International", url: "https://www.ferarointernational.com/", image: "/Portfolios/FERARO_INTERNATIONAL.webp" },
  { industry: "Export", title: "Opiz Global LLP", url: "https://opizglobal.com/", image: "/Portfolios/OPIZ_GLOBAL.webp" },
  { industry: "Trading · UAE", title: "Elnyca Solutions", url: "https://elnyca.ae/", image: "/Portfolios/ELNYCA_DUBAI.webp" },
];

const PDF_VS = [
  ["Found on Google.", "Every product and category page can rank for searches like “[product] supplier in Kerala”. A PDF rarely does."],
  ["Always up to date.", "Change a price, add a product or mark something out of stock in minutes, without reprinting or resending files."],
  ["Easy on mobile.", "Customers browse and filter on their phone instead of zooming into a heavy PDF."],
  ["Trackable.", "See which products get the most views and enquiries."],
  ["Shareable.", "Send a link to one product on WhatsApp instead of a 30-page file."],
];

const FEATURES = [
  { Icon: FaThLarge, t: "Unlimited products and categories with filters (size, material, brand, price range)" },
  { Icon: FaImages, t: "Product pages with galleries, zoom, videos, specifications and datasheets" },
  { Icon: FaClipboardList, t: "“Enquire now”, “Request a quote” and a multi-product enquiry basket" },
  { Icon: FaWhatsapp, t: "WhatsApp ordering with the product name and link pre-filled" },
  { Icon: FaTag, t: "Show prices, hide prices, or “price on request” per product" },
  { Icon: FaUserLock, t: "Dealer or trade login to show wholesale prices to approved customers" },
  { Icon: FaFileExcel, t: "Bulk product upload from Excel or CSV" },
  { Icon: FaSearch, t: "Search by product name, code or SKU" },
  { Icon: FaInbox, t: "Enquiries delivered to email, WhatsApp and your CRM sheet" },
  { Icon: FaLanguage, t: "Multi-language, including Arabic (RTL)" },
  { Icon: FaGoogle, t: "SEO-ready product URLs, Product schema and fast-loading images" },
  { Icon: FaSlidersH, t: "Easy admin panel to manage products yourself" },
];

const WHO = [
  { Icon: FaIndustry, t: "Manufacturers", d: "Show your full range and specifications to dealers and project buyers." },
  { Icon: FaWarehouse, t: "Wholesalers and distributors", d: "Let retailers browse stock and send bulk enquiries." },
  { Icon: FaGem, t: "Jewellery stores", d: "Collections by category, purity and weight, with “enquire for price” as gold rates change." },
  { Icon: FaCouch, t: "Furniture, tiles and building materials", d: "Turn your showroom into an online catalogue." },
  { Icon: FaCogs, t: "Industrial and machinery suppliers", d: "Technical specs, datasheets and RFQ forms." },
  { Icon: FaShip, t: "Exporters and trading companies", d: "A professional catalogue for international buyers." },
  { Icon: FaTshirt, t: "Textile and garment wholesalers", d: "Collections, MOQ details and WhatsApp orders." },
  { Icon: FaMicroscope, t: "Medical and lab equipment suppliers", d: "Product specs and quotation requests for hospitals and clinics." },
];

const VS = [
  ["How customers buy", "Enquiry, quote, WhatsApp, visit", "Cart and online payment"],
  ["Best when", "Prices vary, B2B, custom orders, high-value items", "Fixed prices, retail, direct-to-consumer"],
  ["Payment gateway", "Not needed", "Required"],
  ["Build cost", "Lower", "Higher"],
  ["Upgrade path", "Can add cart and checkout later", "—"],
];

const PROCESS = [
  { title: "Product and audience review", text: "Your categories, product data, customers and how you close sales." },
  { title: "Structure and design", text: "Category tree, filters, product page layout and enquiry flow." },
  { title: "Development", text: "WordPress or custom build, with enquiry, quote and WhatsApp features." },
  { title: "Product upload", text: "Import from your Excel sheet or PDF catalogue; we can upload for you." },
  { title: "Testing and SEO", text: "Mobile, speed, enquiry delivery, schema and search setup." },
  { title: "Launch and training", text: "Go live and learn to add products and manage enquiries." },
];

const MARKETS = [
  {
    label: "Kerala and India",
    text: "From our office in Kozhikode (Calicut), we build catalogue websites for manufacturers, wholesalers and showrooms across Kerala, including Kochi, Malappuram and Thrissur, and across India, with enquiries routed to WhatsApp, where most local buyers already are.",
    cta: "WhatsApp our Kerala team",
    message: "Hi Ivoniz, I want a product catalogue website for my business in Kerala.",
    location: "markets_kerala",
  },
  {
    label: "UAE, Saudi Arabia, Qatar and Oman",
    text: "Trading companies and suppliers in the Gulf get bilingual English–Arabic catalogues with RTL layouts, RFQ forms and dealer logins for B2B buyers.",
    cta: "WhatsApp us in Gulf time",
    message: "Hi Ivoniz, I want a product catalogue website for my business in the UAE / GCC.",
    location: "markets_gcc",
  },
  {
    label: "Africa and global",
    text: "Exporters and suppliers in Rwanda and other markets get lightweight catalogues that load quickly on mobile networks and make it easy for international buyers to send enquiries.",
    cta: "Talk to our team",
    message: "Hi Ivoniz, I'm an exporter / supplier outside India and want a product catalogue website.",
    location: "markets_international",
  },
];

const FAQS = [
  { q: "What is a product catalogue website?", a: "It's a website that displays your products with photos, specifications and prices, and collects enquiries, quote requests or WhatsApp orders instead of online payments." },
  { q: "How much does a product catalogue website cost in Kerala?", a: "A starter catalogue website typically costs ₹30,000 to ₹60,000, and larger catalogues with filters, bulk upload or dealer logins cost ₹60,000 to ₹1,50,000 or more." },
  { q: "How much does a catalogue website cost in the UAE?", a: "A starter catalogue website typically costs AED 5,000 to 10,000, with Arabic, dealer logins or large catalogues raising it to AED 10,000–25,000 or more." },
  { q: "Can customers order through WhatsApp?", a: "Yes. Each product can have an “Order on WhatsApp” button that opens a chat with the product name and link already filled in." },
  { q: "Can I hide prices or show them only to dealers?", a: "Yes. You can show prices, hide them, mark them “price on request”, or show wholesale prices only to approved dealers after login." },
  { q: "Can you upload my products from Excel or a PDF catalogue?", a: "Yes. We import products in bulk from Excel or CSV, and can convert an existing PDF catalogue into product pages." },
  { q: "How many products can a catalogue website hold?", a: "There's no practical limit. We structure the build so hundreds or thousands of products stay fast and easy to filter." },
  { q: "Can I upgrade my catalogue website to an online store later?", a: "Yes. We can add a cart, checkout and payment gateways later without rebuilding the site." },
  { q: "Will my products show up on Google?", a: "Yes. Each product and category gets its own SEO-friendly page with Product schema, so it can appear in Google search and image results." },
  { q: "Can I add and edit products myself?", a: "Yes. You get a simple admin panel to add products, change prices and photos, and manage enquiries, and we train your team at launch." },
];

/* ── JSON-LD (service page: no Product markup here) ── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Product Catalogue Website Development",
      serviceType: "Product catalogue website development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Oman" },
      ],
      audience: { "@type": "BusinessAudience", audienceType: "Manufacturers, wholesalers, distributors, showrooms and exporters" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catalogue website services",
        itemListElement: [
          "Product catalogue website design and development",
          "WhatsApp ordering and enquiry integration",
          "B2B dealer catalogue with login",
          "Bulk product upload and catalogue migration",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Product Catalogue Website Development in Kerala & UAE",
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
        { "@type": "ListItem", position: 3, name: "Product Catalogue Website Development", item: PAGE_URL },
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
export default function CatalogueWebsiteDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "Website Development", href: "/website-development" },
              { label: "Product Catalogue Website Development", href: "/catalogue-website-development" },
            ]}
          />
          <div className="mt-8"><Label>Product Catalogue Websites</Label></div>
          <HeroTitle outline="into Enquiries">Product Catalogue Website Development That Turns Browsers</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
              Not every business needs an online checkout. If you sell through quotes, dealers, showroom visits or
              WhatsApp, a product catalogue website lets customers browse your full range, compare specifications and
              send an enquiry in one tap. Ivoniz builds catalogue websites for manufacturers, wholesalers,
              distributors, showrooms and exporters in Kerala, the UAE, Saudi Arabia, Qatar and beyond, as part of our{" "}
              <Link href="/website-development" className={LINK_DARK}>website development services</Link>.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="/contact" solid label="Request a Catalogue Website Quote" location="hero" />
              <PillLink href={waLink(SEND_CATALOGUE_MSG)} external event="whatsapp_click" label="Send Your Catalogue on WhatsApp" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          {/* industry examples — real Ivoniz projects */}
          <div className="mt-14 sm:mt-16">
            <p className="text-[12px] text-white/55 mb-4">Websites we&apos;ve built for businesses like yours</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {EXAMPLES.map((e) => (
                <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer" className="group block"><span className="sr-only">Opens in a new tab: </span>
                  <div className="relative aspect-[2/1] rounded-xl overflow-hidden border border-white/10">
                    <Image src={e.image} alt={`${e.title} website built by Ivoniz`} fill sizes="(max-width: 1024px) 50vw, 340px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <p className="mt-2.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white/50">{e.industry}</p>
                  <p className="text-[14px] text-white/85 inline-flex items-center gap-1">{e.title} <FiArrowUpRight aria-hidden="true" className="text-white/50" /></p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS + LIVE DEMO ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <div className="relative mx-auto max-w-[1300px]">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 mb-12 sm:mb-16">
            <div>
              <Label dark={false}>The Basics</Label>
              <Heading dark={false}>What is a product catalogue website?</Heading>
            </div>
            <div className="text-[16px] sm:text-[17px] leading-relaxed text-black/65 space-y-4">
              <p>
                A product catalogue website is an online showroom. It displays your products with photos,
                specifications, sizes, colours and prices (or “price on request”), organised into categories and
                filters. Instead of a cart and payment, each product has an Enquire, Request a Quote or Order on
                WhatsApp button that sends the lead straight to your sales team.
              </p>
              <p>It suits businesses where prices vary by quantity, products are customised, or the sale is closed by phone, visit or quotation.</p>
            </div>
          </div>
          <p className="text-black mb-5" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-0.02em" }}>
            Try it: a live demo catalogue
          </p>
          <DemoCatalogue />
          <p className="mt-3 text-[12.5px] text-black/60">Sample products for demonstration. Your catalogue would use your own photos, specs and prices.</p>
        </div>
      </section>

      {/* ── WHY NOT A PDF ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Digital Catalogue vs PDF</Label>
            <Heading>Why a catalogue website beats a PDF catalogue</Heading>
            <PetalSketch className="hidden lg:block w-[200px] mt-12" />
          </div>
          <div>
            <ul className="border-t border-white/10">
              {PDF_VS.map(([b, rest], i) => (
                <li key={b} className="flex items-baseline gap-6 border-b border-white/10 py-6">
                  <span className="text-[13px] text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[16px] sm:text-[17px] text-white/65 leading-relaxed">
                    <span className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{b}</span> {rest}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] text-white/50">You can still offer a downloadable PDF or datasheet on each product page.</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>Features</Label>
          <Heading className="max-w-[820px] mb-10 sm:mb-14">Features of an Ivoniz product catalogue website</Heading>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

      {/* ── WHO NEEDS IT ── */}
      <section className={`py-20 sm:py-28 ${PAD} bg-white text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label dark={false}>Who It&apos;s For</Label>
          <Heading dark={false} className="mb-10 sm:mb-14">Who needs a product catalogue website?</Heading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/8">
            {WHO.map(({ Icon, t, d }) => (
              <div key={t} className="border-r border-b border-black/8 p-7">
                <Icon aria-hidden="true" className="text-[20px] text-black/55" />
                <h3 className="mt-6 text-[18px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="mt-1.5 text-[14px] text-black/55 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] text-black/60">
            Need dealer logins and order history? See{" "}
            <Link href="/web-portal-development" className={LINK_LIGHT}>B2B portal development</Link>.
          </p>
        </div>
      </section>

      {/* ── CATALOGUE VS ECOMMERCE ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -right-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1100px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>Catalogue website vs ecommerce website</Heading>
          <div className="mt-10 rounded-2xl overflow-hidden border border-black/8 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-[14.5px]">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-4 w-[24%]"><span className="sr-only">Factor</span></th>
                    <th className="px-6 py-4 font-normal text-[16px]" style={{ fontFamily: OPEN_SANS }}>Catalogue website</th>
                    <th className="px-6 py-4 font-normal text-[16px]" style={{ fontFamily: OPEN_SANS }}>Ecommerce website</th>
                  </tr>
                </thead>
                <tbody>
                  {VS.map(([f, a, b]) => (
                    <tr key={f} className="border-t border-black/6">
                      <th scope="row" className="px-6 py-4 font-semibold text-black/80 align-top">{f}</th>
                      <td className="px-6 py-4 text-black/70 align-top">{a}</td>
                      <td className="px-6 py-4 text-black/55 align-top">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-7 text-[16px] text-black/60 leading-relaxed">
            If you want customers to pay online, see our{" "}
            <Link href="/ecommerce-website-development" className={LINK_LIGHT}>ecommerce website development</Link> services,
            or <Link href="/woocommerce-website-development" className={LINK_LIGHT}>WooCommerce development</Link> to
            add a cart to a WordPress catalogue later.
          </p>
        </div>
      </section>

      {/* ── COST ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Product catalogue website development cost</Heading>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {CATALOGUE_PACKAGES.map((p) => (
              <div key={p.label} className="p-7 flex flex-col" style={GLASS}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">{p.label}</p>
                <p className="mt-2 text-[14px] text-white/55 leading-relaxed flex-1">{p.note}</p>
                <p className="mt-6 text-[22px] text-white tabular-nums" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.inr}</p>
                <p className="mt-1 text-[14px] text-white/55 tabular-nums">{p.aed}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55">
            Indicative market ranges. Cost depends on number of products, who uploads them, filters, languages and integrations.
            Selling from a showroom too? Our <Link href="/billing-software-development" className={LINK_DARK}>GST billing software</Link> can share the same product list.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PillLink href="/contact" solid label="Get a Catalogue Website Estimate" location="pricing" />
            <PillLink href={waLink(SEND_CATALOGUE_MSG)} external event="whatsapp_click" label="Send your price list for a quote" location="pricing" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>How we build your catalogue website</Heading>
            </div>
            <p className="text-white/55 text-[15px] max-w-[420px] leading-relaxed">
              Typical timeline: 2–5 weeks, depending on the number of products and how ready the product data is.
              Built on <Link href="/wordpress-website-development" className={LINK_DARK}>WordPress</Link> or a custom stack.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(44px,4vw,64px)", letterSpacing: "-0.03em" }} aria-hidden="true">
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
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <PetalSketch className="absolute right-[-60px] bottom-[-40px] w-[360px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Where We Work</Label>
          <Heading className="max-w-[860px] mb-10 sm:mb-14">Catalogue websites for Kerala and international businesses</Heading>
          <div className="grid lg:grid-cols-3 gap-3">
            {MARKETS.map((m) => (
              <article key={m.label} className="p-7 sm:p-8 flex flex-col" style={GLASS}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">{m.label}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-white/70 flex-1">{m.text}</p>
                <div className="mt-7">
                  <PillLink href={waLink(m.message)} external event="whatsapp_click" label={m.cta} location={m.location} icon={<FaWhatsapp aria-hidden="true" />} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for your product catalogue website</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="/contact" label="Start Your Catalogue Website" location="why_ivoniz" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/55 hover:text-white">
                See our catalogue website projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Built for enquiries: every product page has a clear next step",
              "Easy product management, including bulk upload from Excel",
              "Fast, mobile-first pages with SEO-friendly product URLs",
              "A clear upgrade path to full ecommerce when you're ready",
              "Clear fixed quotes and a single point of contact",
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
      <section className={`py-20 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Product catalogue website FAQs</Heading>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className={`relative py-24 sm:py-32 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[920px] text-center">
          <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.6vw,66px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
            Put your full product range online and <span style={OUTLINE}>start getting enquiries</span>
          </h2>
          <p className="mt-7 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[680px] mx-auto">
            Send us your current catalogue, price list or product sheet. We&apos;ll suggest the right structure and send
            a clear estimate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <PillLink href="/contact" solid label="Request a Catalogue Website Quote" location="closing" />
            <PillLink href={waLink(SEND_CATALOGUE_MSG)} external event="whatsapp_click" label="Send Your Catalogue on WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
          <p className="mt-6 text-[13px] text-white/55">
            Or <Link href="/contact" className="underline underline-offset-4 hover:text-white">contact us</Link> directly.
          </p>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Quote" message={SEND_CATALOGUE_MSG} />
    </main>
  );
}
