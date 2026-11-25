import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaMobileAlt, FaTags, FaShoppingCart, FaCreditCard, FaTruck, FaPercent, FaFileInvoice,
  FaChartBar, FaSearch, FaChartLine, FaLock, FaStore, FaWarehouse, FaTshirt, FaCouch, FaPrescriptionBottleAlt, FaGlobeAsia,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import EstimateWidget from "@/components/ecommerce/EstimateWidget";
import { STORE_TYPES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/ecommerce-website-development — single owner of "ecommerce website
   development" and its location variants. Intent: transactional.
   "E-commerce" (hyphenated) appears once, in the title, to catch both spellings.
   Does NOT target: "website development company" (/website-development),
   "is WordPress good for ecommerce" / custom vs WordPress (comparison page),
   "web application development" (/website-development/web-portal-development).
   Design: same homepage language as /website-development (see SiteUI).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/ecommerce-website-development";
const TITLE = "E-commerce Website Development in Kerala & UAE | Ivoniz LLP";
const DESCRIPTION =
  "Ecommerce website development for Kerala, UAE and GCC brands. WooCommerce or custom stores with local payments, Arabic support and fast checkout. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Ecommerce Website Development Company | Kerala, UAE, GCC",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ecommerce website development by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Website Development Company | Kerala, UAE, GCC",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const SERVICES = [
  { title: "New online store development", text: <>From product catalogue to checkout, built to load fast on mobile. Want a shopping app too? See <Link href="/mobile-app-development#apps" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">ecommerce app development</Link>.</> },
  { title: "Custom ecommerce development", text: "Built on React / Next.js and Node.js for unique features, high traffic and complex logic." },
  { title: "WooCommerce development", text: <>Affordable, easy-to-manage stores on WordPress. See our <Link href="/website-development/ecommerce-website-development/woocommerce-website-development" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">WooCommerce development services</Link>.</> },
  { title: "B2B and wholesale portals", text: <>Dealer logins, tiered pricing, bulk ordering, credit limits and quotation requests, built with our <Link href="/website-development/web-portal-development" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">web portal development</Link> team.</> },
  { title: "Multi-vendor marketplaces", text: "Vendor onboarding, commissions, payouts and separate dashboards." },
  { title: "Store migration and redesign", text: <>Move from an old platform or rebuild a slow store without losing products, customers or rankings. Then grow sales with <Link href="/digital-marketing" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">ecommerce marketing</Link>.</> },
  { title: "Integrations", text: <>ERP and accounting (Tally, Zoho, Odoo), CRM, inventory, shipping and marketing tools. Also run a physical store? See <Link href="/software-development/billing-software-development" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">billing software for your shop</Link>.</> },
  { title: "AI features", text: <>Product recommendations, smart search and chat assistants, through our <Link href="/#our-services" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">AI integration</Link> services.</> },
];

const PLATFORMS = [
  ["Best for", "Small to mid-size stores, content-led brands", "Fast launch, standard stores", "B2B, marketplaces, multi-country, unique workflows"],
  ["Upfront cost", "Low – medium", "Low", "Higher"],
  ["Monthly fees", "Hosting + plugin licences", "Plan + app fees + transaction fees on some plans", "Hosting + support"],
  ["Flexibility", "High with plugins", "Limited to apps and theme", "Unlimited"],
  ["Ownership", "You own the code", "Hosted platform", "You own the code"],
];

const FEATURES = [
  { Icon: FaMobileAlt, t: "Mobile-first design focused on product pages and checkout" },
  { Icon: FaTags, t: "Product catalogue with variants, filters and search" },
  { Icon: FaShoppingCart, t: "Cart, guest checkout and saved addresses" },
  { Icon: FaCreditCard, t: "Local payment gateways and cash on delivery" },
  { Icon: FaTruck, t: "Shipping rules, courier integration and order tracking" },
  { Icon: FaPercent, t: "Discount codes, offers and abandoned-cart reminders" },
  { Icon: FaFileInvoice, t: "GST or VAT-ready invoices" },
  { Icon: FaChartBar, t: "Order, customer and inventory dashboard" },
  { Icon: FaSearch, t: "SEO setup: clean URLs, Product schema, sitemap, fast loading" },
  { Icon: FaChartLine, t: "GA4 ecommerce tracking and Meta / Google Ads pixels" },
  { Icon: FaLock, t: "SSL, security hardening and backups" },
];

/* TODO before launch: confirm which gateways and couriers Ivoniz has actually integrated */
const PAYMENTS = [
  { region: "India", pay: ["Razorpay", "PayU", "Cashfree", "PhonePe", "UPI", "Cash on delivery"], ship: ["Shiprocket", "Delhivery"] },
  { region: "UAE and GCC", pay: ["PayTabs", "Telr", "Network International", "Tap", "Stripe", "Apple Pay", "Mada", "Tabby", "Tamara"], ship: ["Aramex", "Local couriers"] },
  { region: "Africa", pay: ["Card payments", "MTN MoMo", "Airtel Money"], ship: ["Local couriers"] },
];

const PROCESS = [
  { title: "Discovery", text: "Products, customers, markets, payments and shipping needs." },
  { title: "Platform and scope", text: "WooCommerce, Shopify or custom, with a fixed quote and timeline." },
  { title: "UX and design", text: "Home, category, product, cart and checkout designs for approval." },
  { title: "Development and integrations", text: "Store build, payments, shipping, ERP and tracking." },
  { title: "Product upload and testing", text: "Catalogue import, test orders, speed and device checks." },
  { title: "Launch and growth support", text: <>Go live, team training, maintenance and <Link href="/digital-marketing/seo-services/ecommerce-seo-services" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">ecommerce SEO services</Link>.</> },
];

const BUSINESSES = [
  { Icon: FaStore, t: "Retail shops going online across Kerala and India" },
  { Icon: FaWarehouse, t: "Wholesalers and distributors taking dealer orders online" },
  { Icon: FaTshirt, t: "D2C brands in fashion, cosmetics, food, spices and handicrafts" },
  { Icon: FaCouch, t: "Electronics and furniture stores with large catalogues and variants" },
  { Icon: FaPrescriptionBottleAlt, t: "Pharmacies and healthcare suppliers, within each market's rules" },
  { Icon: FaGlobeAsia, t: "GCC boutiques and brands selling in English and Arabic" },
];

const MARKETS = [
  {
    label: "Kerala and India",
    text: "Based in Kozhikode (Calicut), we build online stores for businesses across Kerala, including Kochi, Malappuram and Thrissur, and across India, with GST invoicing, UPI and COD built in.",
    cta: "Start my store in Kerala",
    message: "Hi Ivoniz, I want to start an online store in Kerala.",
    location: "markets_kerala",
  },
  {
    label: "UAE, Saudi Arabia, Qatar and Oman",
    text: "We build bilingual English–Arabic stores with RTL layouts, AED / SAR / QAR pricing, VAT invoices, local gateways and buy-now-pay-later options. For Saudi Arabia we plan for ZATCA e-invoicing requirements.",
    cta: "Start my store in the GCC",
    message: "Hi Ivoniz, I want to start an online store in the UAE / GCC.",
    location: "markets_gcc",
  },
  {
    label: "Africa and global",
    text: "We help businesses in Rwanda and other markets sell online with mobile-money payments, multi-currency pricing and lightweight pages for slower networks, delivered remotely by our team in India.",
    cta: "Talk to our team",
    message: "Hi Ivoniz, I want to start an online store outside India.",
    location: "markets_international",
  },
];

/* Real work from /works. Only Gaming Qatar is a full online store; the others are retail brand sites. */
const STORES = [
  { title: "Gaming Qatar", category: "Online store · Qatar", url: "https://mygamehobbies.qa/", image: "/Portfolios/MYGAME_HOBBIES_ecommerce.webp", tag: "Live online store" },
  { title: "Arlocks Gents Wear", category: "Men's fashion · Kerala", url: "https://arlocksgentswear.com/", image: "/Portfolios/ARLOCKS_GENTS_WEAR.webp", tag: "Retail brand website" },
  { title: "Posh Palette", category: "Fashion & accessories · Calicut", url: "https://poshpalette.in/", image: "/Portfolios/POSHPALETTE.webp", tag: "Retail brand website" },
];

const FAQS = [
  { q: "How much does ecommerce website development cost in Kerala?", a: "A WooCommerce store in Kerala typically costs ₹50,000 to ₹1,50,000, while custom ecommerce platforms start around ₹3,00,000, depending on products, features and integrations." },
  { q: "How much does an ecommerce website cost in Dubai or the UAE?", a: "A WooCommerce store typically costs AED 8,000 to 20,000, and custom ecommerce platforms usually start around AED 40,000, with Arabic and integrations adding to scope." },
  { q: "How long does it take to build an ecommerce website?", a: "A WooCommerce store usually takes 3 to 6 weeks; custom ecommerce platforms and marketplaces usually take 8 to 20 weeks." },
  { q: "Which payment gateways can you integrate?", a: "We integrate Razorpay, PayU, Cashfree and UPI in India, and PayTabs, Telr, Tap, Stripe, Mada, Tabby and Tamara in the GCC, plus cash on delivery." },
  { q: "Can you build an Arabic ecommerce website?", a: "Yes. We build bilingual English and Arabic stores with right-to-left layouts, local currencies and VAT-compliant invoices." },
  { q: "Can you connect my store to Tally, Zoho or my ERP?", a: "Yes. We sync products, stock, orders and invoices with accounting and ERP systems through APIs or connectors." },
  { q: "Can I manage products and orders myself?", a: "Yes. You get an admin panel to add products, update prices and stock, and manage orders, and we train your team at handover." },
  { q: "Can you move my store from Shopify or another platform?", a: "Yes. We migrate products, customers and order history and set up 301 redirects so you keep your search rankings." },
  { q: "Will my ecommerce website be SEO-friendly?", a: "Yes. Every store launches with clean product URLs, Product schema, fast loading, a sitemap and Search Console setup." },
  { q: "Do you build B2B and wholesale ordering portals?", a: "Yes. We build dealer portals with logins, tiered pricing, minimum order quantities, bulk ordering and quotation requests." },
];

/* ── JSON-LD (service page: no Product / priced Offer markup) ── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Ecommerce Website Development",
      serviceType: "Ecommerce website development",
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
        name: "Ecommerce development services",
        itemListElement: [
          "WooCommerce store development",
          "Custom ecommerce development",
          "B2B and wholesale ecommerce portals",
          "Multi-vendor marketplace development",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "E-commerce Website Development in Kerala & UAE",
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
        { "@type": "ListItem", position: 3, name: "Ecommerce Website Development", item: PAGE_URL },
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
export default function EcommerceWebsiteDevelopmentPage() {
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
            ]}
          />
          <div className="mt-8"><Label>Ecommerce Website Development</Label></div>
          <HeroTitle outline="into Orders">Ecommerce Website Development That Turns Visitors</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[700px]">
              Ivoniz builds fast, secure online stores for retailers, wholesalers, brands and startups in Kerala, the
              UAE, Saudi Arabia, Qatar and beyond. Whether you need a WooCommerce shop, a custom ecommerce platform or a
              B2B ordering portal, we handle design, development, payments, shipping and launch, so you can focus on
              selling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PillLink href="/contact" solid label="Start Your Ecommerce Project" location="hero" />
              <PillLink
                href={waLink("Hi Ivoniz, I want to start an online store. Can we discuss it?")}
                external
                event="whatsapp_click"
                label="Discuss Your Online Store"
                location="hero"
                icon={<FaWhatsapp aria-hidden="true" />}
              />
            </div>
          </div>

          {/* live store proof, framed like the homepage work cards */}
          <a href={STORES[0].url} target="_blank" rel="noopener noreferrer" className="group mt-14 sm:mt-20 block"><span className="sr-only">Opens in a new tab: </span>
            <div className="relative aspect-[2/1] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={STORES[0].image}
                alt="Ecommerce website showing product listings and checkout, built by Ivoniz for Gaming Qatar"
                fill
                priority
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.85) 100%)" }} />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Live online store</p>
                  <p className="mt-1 text-[18px] sm:text-[22px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>Gaming Qatar</p>
                </div>
                <span className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Ecommerce website development services</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              Online store development for every stage, from your first shop to a marketplace. Part of our wider{" "}
              <Link href="/website-development" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">website development services</Link>.
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

      {/* ── PLATFORMS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <div className="relative mx-auto max-w-[1200px]">
          <Label dark={false}>Platforms</Label>
          <Heading dark={false} className="max-w-[760px]">Which ecommerce platform is right for you?</Heading>
          <figure className="mt-10 sm:mt-14 rounded-2xl overflow-hidden border border-black/8 bg-white">
            <figcaption className="sr-only">WooCommerce, Shopify and custom ecommerce platform comparison</figcaption>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-[14.5px]">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-4 font-medium w-[18%]"><span className="sr-only">Factor</span></th>
                    {["WooCommerce", "Shopify", "Custom ecommerce"].map((h) => (
                      <th key={h} className="px-6 py-4 font-normal text-[16px]" style={{ fontFamily: OPEN_SANS }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PLATFORMS.map(([f, ...cells]) => (
                    <tr key={f} className="border-t border-black/6">
                      <th scope="row" className="px-6 py-4 font-semibold text-black/80 align-top">{f}</th>
                      {cells.map((c, i) => <td key={i} className="px-6 py-4 text-black/65 align-top">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </figure>
          <p className="mt-7 text-[16px] text-black/60 leading-relaxed max-w-[760px]">
            We recommend the platform after understanding your catalogue, order volume and growth plans. Still deciding?
            Read{" "}
            <Link href="/website-development/custom-website-vs-wordpress#ecommerce" className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">
              custom website vs WordPress for ecommerce
            </Link>.
          </p>
          <p className="mt-3 text-[16px] text-black/60 leading-relaxed max-w-[760px]">
            Don&apos;t need online payments? See{" "}
            <Link href="/website-development/catalogue-website-development" className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">
              product catalogue website development
            </Link>{" "}
            for enquiry and WhatsApp ordering.
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Included as Standard</Label>
            <Heading>Features every Ivoniz store includes</Heading>
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
          <Heading className="max-w-[820px] mb-8 sm:mb-14">Payment gateways and shipping we integrate</Heading>
          <div className="grid lg:grid-cols-3 gap-3" role="list" aria-label="Payment gateways for ecommerce in India and the UAE">
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
          <p className="mt-6 text-[13px] text-white/55">Buy-now-pay-later (Tabby, Tamara) and cash on delivery available where the market supports them.</p>
        </div>
      </section>

      {/* ── COST + ESTIMATOR ── */}
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <PetalSketch className="absolute -left-16 top-10 w-[300px] hidden lg:block" />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Ecommerce website development cost</Heading>
          <p className="mt-5 text-white/55 text-[16px] leading-relaxed max-w-[760px]">
            Cost depends on the platform, number of products, custom features, integrations and languages. Ongoing costs
            include hosting, plugin or app licences, payment gateway fees and maintenance.
          </p>

          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-[14.5px]">
                <thead>
                  <tr className="bg-white/[0.04] text-[11px] font-bold tracking-[0.18em] uppercase text-white/55">
                    <th className="px-6 py-4">Store type</th>
                    <th className="px-6 py-4">India (INR)</th>
                    <th className="px-6 py-4">UAE / GCC (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  {STORE_TYPES.map((s) => (
                    <tr key={s.id} className="border-t border-white/8">
                      <th scope="row" className="px-6 py-4 font-normal text-white/85">{s.label}</th>
                      <td className="px-6 py-4 text-white/70 tabular-nums">{s.inr}</td>
                      <td className="px-6 py-4 text-white/70 tabular-nums">{s.aed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-[13px] text-white/55">Indicative market ranges. Your fixed estimate depends on scope.</p>

          <div className="mt-14">
            <p className="text-white mb-5" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-0.02em" }}>
              Get a quick estimate for your store
            </p>
            <EstimateWidget />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>Our ecommerce development process</Heading>
            </div>
            <p className="text-white/55 text-[15px] max-w-[420px] leading-relaxed">
              Typical timelines: 3–6 weeks for a WooCommerce store; 8–20 weeks for custom platforms and marketplaces.
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

      {/* ── BUSINESS TYPES ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-white text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label dark={false}>Who We Build For</Label>
          <Heading dark={false} className="mb-8 sm:mb-14">Ecommerce for every type of business</Heading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/8">
            {BUSINESSES.map(({ Icon, t }) => (
              <div key={t} className="border-r border-b border-black/8 p-7 sm:p-8">
                <Icon aria-hidden="true" className="text-[20px] text-black/55" />
                <p className="mt-6 text-[17px] text-black/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <PetalSketch className="absolute right-[-60px] bottom-[-40px] w-[360px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Where We Work</Label>
          <Heading className="max-w-[860px] mb-8 sm:mb-14">Ecommerce development for Kerala and international markets</Heading>
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

      {/* ── STORES WE'VE BUILT ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-14">
            <div>
              <Label dark={false}>Our Work</Label>
              <Heading dark={false}>Retail and ecommerce sites we&apos;ve built</Heading>
            </div>
            <Link href="/works" className="inline-flex items-center gap-2 text-[14px] font-medium text-black/60 hover:text-black transition-colors">
              View all ecommerce projects <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {STORES.map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="group block"><span className="sr-only">Opens in a new tab: </span>
                <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-black/8 transition-shadow duration-500 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
                  <Image src={p.image} alt={`${p.title} website built by Ivoniz`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                </div>
                <p className="mt-4 text-[11px] font-bold tracking-[0.18em] uppercase text-black/60">{p.tag}</p>
                <div className="mt-1 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[19px] font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-0.5 text-[14px] text-black/55">{p.category}</p>
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
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why choose Ivoniz for ecommerce website development</Heading>
            <div className="mt-8">
              <PillLink href="/contact" label="Talk to Our Ecommerce Team" location="why_ivoniz" />
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "WooCommerce, Shopify and custom builds under one team, so we recommend what fits",
              "Checkout and mobile speed treated as revenue, not design details",
              "Local payment, tax and language experience for India and the GCC",
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

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Ecommerce website development FAQs</Heading>
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
            Ready to start <span style={OUTLINE}>selling online?</span>
          </h2>
          <p className="mt-7 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[680px] mx-auto">
            Tell us what you sell, where your customers are and how you want to take payments. We&apos;ll recommend the
            right platform and send a clear estimate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <PillLink href="/contact" solid label="Start Your Ecommerce Project" location="closing" />
            <PillLink href={waLink("Hi Ivoniz, I'm ready to start my online store. Can we talk?")} external event="whatsapp_click" label="Chat on WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
          <p className="mt-6 text-[13px] text-white/55">
            Or <Link href="/contact" className="underline underline-offset-4 hover:text-white">contact our ecommerce team</Link> directly.
          </p>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Start My Store" message="Hi Ivoniz, I want to start an online store. Can we discuss it?" />
    </main>
  );
}
