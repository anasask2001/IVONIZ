import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaBoxOpen, FaFilter, FaShoppingCart, FaPercent, FaEnvelopeOpenText, FaRedo, FaGlobe,
  FaFileInvoice, FaDatabase, FaChartLine, FaSearch, FaCheck,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import SpeedCheck from "@/components/ecommerce/SpeedCheck";
import { WOO_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/ecommerce-website-development/woocommerce-website-development — owns "WooCommerce development services"
   and every WooCommerce-specific term (developer, customization, plugins,
   migration, speed, maintenance). Intent: transactional.
   Does NOT target: "ecommerce website development" (/website-development/ecommerce-website-development),
   "WordPress website development" (WordPress page), custom vs WordPress (comparison).
   Two buyers: new-store builders and owners of an existing store that needs fixing.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/ecommerce-website-development/woocommerce-website-development";
const TITLE = "WooCommerce Development Services in Kerala & UAE | Ivoniz LLP";
const DESCRIPTION =
  "WooCommerce development services for new stores, customization, plugins, migration and speed fixes. Serving Kerala, UAE and GCC businesses. Get a free quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "WooCommerce Development Company | Stores, Plugins, Support",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "WooCommerce development services by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WooCommerce Development Company | Stores, Plugins, Support",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const SERVICES = [
  { title: "WooCommerce store development", text: "New stores built on a lightweight theme, configured for your products, payments, shipping and taxes." },
  { title: "Theme design and customization", text: "Custom product, category, cart and checkout layouts that match your brand, without heavy page builders." },
  { title: "Custom WooCommerce plugin development", text: "Features no plugin offers: custom pricing rules, product configurators, dealer pricing, booking logic or ERP sync." },
  { title: "Payment and shipping integration", text: "Local gateways, COD rules, courier APIs and order tracking." },
  { title: "WooCommerce speed optimization", text: "Faster product pages and checkout through caching, image optimisation, script clean-up and better hosting." },
  { title: "Migration to WooCommerce", text: "Move products, customers and orders from Shopify, Magento, OpenCart or a custom store, with SEO redirects." },
  { title: "Maintenance and support", text: "Updates, backups, security monitoring, bug fixes and small changes on a monthly plan." },
  { title: "API and integrations", text: "Connect your store to Tally, Zoho, Odoo, CRMs, marketplaces, WhatsApp and mobile apps through the REST API." },
];

const WHY_WOO = [
  ["You own your store.", "WooCommerce is open source and runs on your hosting, so your data and code stay yours."],
  ["No platform transaction fees", "from WooCommerce itself; you pay only your payment gateway's fees."],
  ["Flexible.", "Thousands of extensions, plus custom development when you need something unique."],
  ["Content + commerce together.", "Blogs, landing pages and products on one WordPress site, which helps SEO."],
  ["Easy to manage.", "Your team updates products, prices and stock from a familiar dashboard."],
];

const FEATURES = [
  { Icon: FaBoxOpen, t: "Simple, variable, grouped and digital products" },
  { Icon: FaFilter, t: "Product filters, search and quick view" },
  { Icon: FaShoppingCart, t: "Block-based checkout, guest checkout and one-page checkout" },
  { Icon: FaPercent, t: "Coupons, bulk discounts and offers" },
  { Icon: FaEnvelopeOpenText, t: "Abandoned-cart recovery emails and WhatsApp notifications" },
  { Icon: FaRedo, t: "Subscriptions, bookings and memberships (official extensions)" },
  { Icon: FaGlobe, t: "Multi-currency and multi-language (WPML or Polylang)" },
  { Icon: FaFileInvoice, t: "GST or VAT invoices and tax rules" },
  { Icon: FaDatabase, t: "HPOS-ready order storage for faster admin and order handling" },
  { Icon: FaChartLine, t: "GA4 ecommerce tracking, Meta and Google product feeds" },
  { Icon: FaSearch, t: "Product schema and SEO-friendly URLs" },
];

/* TODO before launch: confirm which gateways and couriers Ivoniz has actually integrated */
const PAYMENTS = [
  { region: "India", pay: ["Razorpay", "PayU", "Cashfree", "PhonePe", "UPI", "COD rules by pincode"], ship: ["Shiprocket", "Delhivery"] },
  { region: "UAE and GCC", pay: ["PayTabs", "Telr", "Network International", "Tap", "Stripe", "Apple Pay", "Mada", "Tabby", "Tamara"], ship: ["Aramex", "Local couriers"] },
];

const SPEED_FIXES = [
  "Lighter theme or child theme",
  "Remove or replace heavy plugins",
  "Page and object caching (such as Redis)",
  "CDN and WebP images",
  "Database query tuning",
  "Leaner checkout scripts",
];

const PROCESS = [
  { title: "Requirements", text: "Products, payments, shipping, taxes, markets and integrations." },
  { title: "Proposal", text: "Theme approach, extensions, custom work, fixed quote and timeline." },
  { title: "Design", text: "Home, category, product, cart and checkout designs." },
  { title: "Build and configure", text: "WooCommerce setup, theme, extensions and custom code on a staging site." },
  { title: "Products and testing", text: "Catalogue import, test orders, payment and shipping checks, speed tests." },
  { title: "Launch and support", text: <>Go live, admin training, maintenance plan and <Link href="/digital-marketing/seo-services/ecommerce-seo-services" className={LINK}>WooCommerce SEO</Link>.</> },
];

const MARKETS = [
  {
    label: "Kerala and India",
    text: "Our team in Kozhikode (Calicut) builds WooCommerce stores for retailers, wholesalers and D2C brands across Kerala, including Kochi, Malappuram and Thrissur, and across India, with GST invoicing, UPI and COD built in.",
    cta: "WhatsApp our Kerala team",
    message: "Hi Ivoniz, I need help with my WooCommerce store in Kerala.",
    location: "markets_kerala",
  },
  {
    label: "UAE, Saudi Arabia, Qatar and Oman",
    text: "We build English–Arabic WooCommerce stores with RTL themes, AED / SAR / QAR pricing, VAT invoices and GCC payment gateways, with calls in Gulf time.",
    cta: "WhatsApp us in Gulf time",
    message: "Hi Ivoniz, I need help with my WooCommerce store in the UAE / GCC.",
    location: "markets_gcc",
  },
  {
    label: "Hire a WooCommerce developer remotely",
    text: "For agencies and businesses abroad, we offer project-based work or dedicated developer hours for ongoing WooCommerce development and support.",
    cta: "Ask about developer hours",
    message: "Hi Ivoniz, I'd like to hire a WooCommerce developer for ongoing work.",
    location: "markets_hire",
  },
];

const FAQS = [
  { q: "What do WooCommerce development services include?", a: "They cover store setup, theme design and customization, custom plugin development, payment and shipping integration, speed optimization, migration and ongoing maintenance." },
  { q: "How much does a WooCommerce website cost in India?", a: "A starter WooCommerce store typically costs ₹40,000 to ₹80,000, and stores with custom design or integrations cost ₹80,000 to ₹2,00,000 or more." },
  { q: "How much does a WooCommerce store cost in the UAE?", a: "A starter WooCommerce store typically costs AED 6,000 to 12,000, with custom design, Arabic and integrations raising it to AED 12,000–30,000 or more." },
  { q: "Is WooCommerce free?", a: "The WooCommerce plugin is free, but you pay for hosting, a domain, any premium extensions or themes, payment gateway fees and development." },
  { q: "Can you customize my existing WooCommerce store?", a: "Yes. We add features, redesign product and checkout pages, write custom plugins and fix bugs on existing stores." },
  { q: "Why is my WooCommerce site slow, and can you fix it?", a: "Usually it's a heavy theme, too many plugins, large images or weak hosting. We audit the store and fix the causes, then measure the improvement." },
  { q: "Can you migrate my store from Shopify to WooCommerce?", a: "Yes. We move products, customers and orders and set up 301 redirects to keep your search rankings." },
  { q: "Can WooCommerce handle Arabic and multiple currencies?", a: "Yes. With RTL themes and plugins like WPML, WooCommerce supports Arabic, English and multiple currencies such as AED, SAR and INR." },
  { q: "Do you offer WooCommerce maintenance plans?", a: "Yes. Monthly plans cover updates, backups, security monitoring, uptime checks and small changes." },
  { q: "Can I hire a dedicated WooCommerce developer?", a: "Yes. We offer dedicated developer hours for agencies and businesses that need ongoing WooCommerce work." },
];

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "WooCommerce Development Services",
      serviceType: "WooCommerce development",
      provider: { "@id": ORG_ID },
      about: { "@type": "Thing", name: "WooCommerce", sameAs: "https://en.wikipedia.org/wiki/WooCommerce" },
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
        name: "WooCommerce services",
        itemListElement: [
          "WooCommerce store development",
          "WooCommerce customization",
          "Custom WooCommerce plugin development",
          "WooCommerce speed optimization",
          "WooCommerce migration",
          "WooCommerce maintenance",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "WooCommerce Development Services in Kerala & UAE",
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
        { "@type": "ListItem", position: 3, name: "Ecommerce Website Development", item: "https://ivoniz.com/website-development/ecommerce-website-development" },
        { "@type": "ListItem", position: 4, name: "WooCommerce Development", item: PAGE_URL },
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
export default function WooCommerceDevelopmentPage() {
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
              { label: "Website Development", href: "/website-development" },
              { label: "Ecommerce Website Development", href: "/website-development/ecommerce-website-development" },
              { label: "WooCommerce Development", href: "/website-development/ecommerce-website-development/woocommerce-website-development" },
            ]}
          />
          <div className="mt-8"><Label>WooCommerce Development Services</Label></div>
          <HeroTitle outline="Online Stores That Sell">WooCommerce Development Services for</HeroTitle>

          <p className="mt-10 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[760px]">
            Ivoniz builds, customises and supports WooCommerce stores for businesses in Kerala, the UAE, Saudi Arabia,
            Qatar and beyond. Whether you&apos;re launching your first online store, extending WooCommerce with custom
            features or rescuing a slow store, our WordPress and WooCommerce developers handle it end to end.
          </p>

          {/* two ways in — new store vs existing store */}
          <div className="mt-12 grid md:grid-cols-2 gap-3 max-w-[1100px]">
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">Starting out</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Build a new WooCommerce store</p>
              <p className="mt-2 text-[14.5px] text-white/55 leading-relaxed flex-1">Design, setup, payments, shipping and launch, with a fixed quote.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote" solid label="Request a WooCommerce Quote" location="hero_new_store" />
                <PillLink
                  href={waLink("Hi Ivoniz, I want to build a new WooCommerce store.")}
                  external
                  event="whatsapp_click"
                  label="WhatsApp"
                  location="hero_new_store"
                  icon={<FaWhatsapp aria-hidden="true" />}
                />
              </div>
            </div>
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">Already have a store</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Fix or improve my store</p>
              <p className="mt-2 text-[14.5px] text-white/55 leading-relaxed flex-1">Speed fixes, new features, custom plugins, migration or monthly support.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink
                  href={waLink("Hi Ivoniz, I need help fixing or improving my WooCommerce store. My store is: ")}
                  external
                  solid
                  event="whatsapp_click"
                  label="Talk to a WooCommerce Developer"
                  location="hero_fix_store"
                  icon={<FaWhatsapp aria-hidden="true" />}
                />
                <PillLink href="#speed" label="Free speed check" location="hero_fix_store" event="speed_check_click" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our WooCommerce development services</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              WooCommerce website development, customization and support from a team that also builds{" "}
              <Link href="/website-development/wordpress-website-development" className={LINK}>WordPress website development</Link>, so your store and
              content work as one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[230px]">
                <span className="text-[13px] font-medium text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-auto pt-4 sm:pt-8 text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p className="mt-2.5 text-[14px] text-white/55 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WOOCOMMERCE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Why WooCommerce</Label>
            <Heading dark={false}>Why choose WooCommerce for your online store?</Heading>
            <div className="mt-8 rounded-2xl bg-black text-white p-6">
              <p className="text-[15px] leading-relaxed text-white/75">
                WooCommerce isn&apos;t the right fit for every store. Very large catalogues, multi-vendor marketplaces or
                complex B2B workflows may be better on a custom platform. See{" "}
                <Link href="/website-development/ecommerce-website-development" className={LINK}>ecommerce website development</Link> or read{" "}
                <Link href="/website-development/custom-website-vs-wordpress#ecommerce" className={LINK}>custom website vs WordPress</Link>.
              </p>
            </div>
          </div>
          <ul className="border-t border-black/10">
            {WHY_WOO.map(([b, rest]) => (
              <li key={b} className="flex gap-4 border-b border-black/10 py-5">
                <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[13px] text-black/60" />
                <p className="text-[16px] leading-relaxed text-black/65"><strong className="font-semibold text-black">{b}</strong> {rest}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Store Setup</Label>
            <Heading>WooCommerce features we set up</Heading>
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

      {/* ── PAYMENTS & SHIPPING ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>Payments and Shipping</Label>
          <Heading className="max-w-[820px] mb-8 sm:mb-14">Payment gateways and shipping for WooCommerce</Heading>
          <div className="grid lg:grid-cols-2 gap-3" role="list" aria-label="WooCommerce payment gateways for India and the UAE">
            {PAYMENTS.map((p) => (
              <div key={p.region} role="listitem" className="p-7" style={GLASS}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">{p.region}</p>
                <p className="mt-6 text-[13px] text-white/55">Payments</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.pay.map((x) => <span key={x} className="px-3 py-1.5 rounded-full border border-white/15 text-[13px] text-white/80">{x}</span>)}
                </div>
                <p className="mt-6 text-[13px] text-white/55">Shipping</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.ship.map((x) => <span key={x} className="px-3 py-1.5 rounded-full border border-white/10 text-[13px] text-white/60">{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEED + LEAD MAGNET ── */}
      <section id="speed" className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden scroll-mt-20`}>
        <Grid />
        <PetalSketch className="absolute -right-12 top-10 w-[300px] hidden lg:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Performance</Label>
            <Heading>WooCommerce speed and performance</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Slow WooCommerce stores lose sales, especially on mobile. Most speed problems come from heavy themes, page
              builders, too many plugins, unoptimised images and shared hosting. We measure before and after with
              PageSpeed Insights and Core Web Vitals. For a full <Link href="/digital-marketing/seo-services/technical-seo-services" className={LINK}>technical SEO audit</Link> with fixes, see our technical SEO page.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {SPEED_FIXES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[14.5px] text-white/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" aria-hidden="true" />{f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white mb-5" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-0.02em" }}>
              Get a free WooCommerce speed check
            </p>
            <SpeedCheck />
          </div>
        </div>
      </section>

      {/* ── COST ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">WooCommerce development cost</Heading>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {WOO_PACKAGES.map((p, i) => (
              <div key={p.label} className={`p-6 sm:p-7 flex flex-col ${i === 3 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 3 ? undefined : GLASS}>
                <p className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 3 ? "text-black/55" : "text-white/55"}`}>{p.label}</p>
                <p className={`mt-2 text-[14px] leading-relaxed flex-1 ${i === 3 ? "text-black/60" : "text-white/55"}`}>{p.note}</p>
                <p className="mt-6 text-[20px] tabular-nums" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.inr}</p>
                <p className={`mt-1 text-[14px] tabular-nums ${i === 3 ? "text-black/55" : "text-white/55"}`}>{p.aed}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55">
            Indicative market ranges. Ongoing costs also include hosting, premium extension licences and payment gateway fees.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PillLink href="#quote" solid label="Get a Fixed WooCommerce Quote" location="pricing" />
            <PillLink href={waLink("Hi Ivoniz, I'd like to know about your WooCommerce maintenance plans.")} external event="whatsapp_click" label="Ask about maintenance plans" location="pricing_maintenance" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>Our WooCommerce development process</Heading>
            </div>
            <p className="text-white/55 text-[15px] max-w-[420px] leading-relaxed">
              Typical timeline: 3–6 weeks for most stores; 6–12 weeks with custom plugins or ERP integration.
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
      <section className={`relative py-14 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#0a0a0a" }}>
        <Grid />
        <PetalSketch className="absolute right-[-60px] bottom-[-40px] w-[360px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Where We Work</Label>
          <Heading className="max-w-[860px] mb-8 sm:mb-14">WooCommerce developers for Kerala and international businesses</Heading>
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
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for WooCommerce development</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote" label="Start Your WooCommerce Project" location="why_ivoniz" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/55 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "WordPress and WooCommerce specialists who also build custom ecommerce, so we tell you honestly when WooCommerce isn't the right fit",
              "Lightweight builds: few plugins, clean code, fast checkout",
              "Custom plugin development when off-the-shelf extensions fall short",
              "Clear fixed quotes and a single point of contact",
              "You own your store, data and code",
            ].map((t, i) => (
              <li key={t} className="flex items-baseline gap-6 border-b border-white/10 py-6">
                <span className="text-[13px] text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] sm:text-[19px] text-white/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 300 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Get a Quote</Label>
            <Heading>New store or a fix for your current one?</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              Tell us what you need. For an existing store, include its address so we can look at it before we reply
              with a fixed written quote.
            </p>
          </div>
          <ProjectQuoteForm
            idPrefix="woo"
            subject="WooCommerce project"
            leadType="woocommerce_quote"
            location="woocommerce_quote_form"
            messageHint="What do you sell, roughly how many products, and what needs doing?"
            types={[
              { id: "new", label: "New WooCommerce store" },
              { id: "fix", label: "Fix or speed up my store" },
              { id: "custom", label: "Plugin or customisation" },
              { id: "migrate", label: "Move my store to WooCommerce" },
              { id: "maintain", label: "Ongoing maintenance" },
            ]}
            places={["Kerala", "Elsewhere in India", "UAE", "Saudi Arabia", "Qatar", "Other GCC", "Other"]}
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>WooCommerce development FAQs</Heading>
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
            Need a WooCommerce store <span style={OUTLINE}>built, fixed or extended?</span>
          </h2>
          <p className="mt-7 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[680px] mx-auto">
            Tell us what you sell and what your store needs. We&apos;ll suggest the right setup and send a fixed quote.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <PillLink href="#quote" solid label="Request a WooCommerce Quote" location="closing" />
            <PillLink href={waLink("Hi Ivoniz, I need a WooCommerce developer. Can we talk?")} external event="whatsapp_click" label="WhatsApp a WooCommerce Developer" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
          <p className="mt-6 text-[13px] text-white/55">
            Or <Link href="/contact" className="underline underline-offset-4 hover:text-white">contact our team</Link> directly.
          </p>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Quote" message="Hi Ivoniz, I need help with my WooCommerce store." />
    </main>
  );
}
