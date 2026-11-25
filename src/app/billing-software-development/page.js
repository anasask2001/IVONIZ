import Link from "next/link";
import {
  FaWhatsapp, FaStore, FaUtensils, FaGem, FaPrescriptionBottleAlt, FaTools, FaTshirt, FaTruck,
  FaFileInvoice, FaBarcode, FaBoxes, FaUserClock, FaQrcode, FaChartBar, FaWifi, FaMobileAlt, FaFileExport,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { BILLING_OPTIONS, BILLING_FROM } from "@/components/ecommerce/costs";
import BillingQuoteForm from "@/components/software/BillingQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /billing-software-development — owns "billing software Kerala / Kozhikode /
   Kochi", GST billing and billing software by shop type (SEO brief, 24 Nov 2026;
   Google autocomplete, volumes still to verify). Searchers mostly want a ready
   product, so the title/H1 lead with "Billing Software", not "development";
   custom development is the upgrade path. Offer (confirmed 24 Nov): both a
   ready product customised per shop and fully custom builds. Ready-product
   prices not fixed yet → "price on request" (BILLING_FROM in costs.js).
   Excludes "free / download / for pc" searchers.
   Breadcrumb: Home › Software Development › Billing Software.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/billing-software-development";
const TITLE = "GST Billing Software in Kerala & Kozhikode | Ivoniz LLP";
const DESCRIPTION =
  "GST billing software for shops, restaurants, jewellers and medical stores in Kerala. Customised to your business, with local setup and support. Free demo.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Billing Software for Retail, Restaurant & Jewellery | Kerala",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "GST billing software running at a retail shop counter in Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billing Software for Retail, Restaurant & Jewellery | Kerala",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  /* WhatsApp-first (brief): shop owner fills in shop type and town. */
  price: "Hi Ivoniz, I need billing software for my ___ (shop type) in ___ (town). Please share the price and a demo.",
  demo: "Hi Ivoniz, I'd like a free billing software demo at my shop. Shop type: ___ Town: ___",
};

const SHOP_TYPES = [
  { Icon: FaStore, title: "Retail shops and supermarkets", text: "Barcode billing, stock, purchase, offers, loyalty points and multi-counter billing." },
  { Icon: FaUtensils, title: "Restaurants, cafes and bakeries", text: "POS, KOT, table management, parcel and online-order billing, recipe-based stock." },
  { Icon: FaGem, title: "Jewellery shops", text: "Weight and purity billing, daily gold rate, making charges, old-gold exchange, hallmark details." },
  { Icon: FaPrescriptionBottleAlt, title: "Medical stores and pharmacies", text: "Batch and expiry tracking, drug schedules, doctor-wise reports." },
  { Icon: FaTools, title: "Hardware, electrical and paint shops", text: "Unit conversions, credit customers and contractor accounts." },
  { Icon: FaTshirt, title: "Textile and footwear shops", text: "Size and colour variants, barcode labels, season-wise stock." },
  { Icon: FaTruck, title: "Wholesale and distribution", text: <>Credit limits, route-wise billing, dealer pricing. Growing beyond billing? See <Link href="/erp-software-development" className={LINK}>ERP software development</Link>.</> },
];

/* TODO before launch: confirm offline billing and every feature below for the ready product. */
const FEATURES = [
  { Icon: FaFileInvoice, title: "GST billing and e-invoicing", text: "GST-compliant invoices, HSN codes, GSTR reports and e-way bills." },
  { Icon: FaBarcode, title: "Fast billing", text: "Barcode scanner, keyboard shortcuts, touch-screen POS." },
  { Icon: FaBoxes, title: "Stock management", text: "Live stock, low-stock alerts, purchase entries, stock transfer between branches." },
  { Icon: FaUserClock, title: "Customer accounts", text: "Credit sales, outstanding reminders by SMS or WhatsApp." },
  { Icon: FaQrcode, title: "Payments", text: "Cash, card, UPI QR and split payments." },
  { Icon: FaChartBar, title: "Reports", text: "Daily sales, profit, item-wise and staff-wise reports." },
  { Icon: FaWifi, title: "Works offline", text: "Keep billing even when the internet is down; sync later." },
  { Icon: FaMobileAlt, title: "Mobile app", text: "Check sales and stock from your phone." },
  { Icon: FaFileExport, title: "Tally export", text: "Send data to your accountant without re-entry." },
];

const COMPARE = [
  ["Setup", "Do it yourself", "We install and set up at your shop"],
  ["Customisation", "Fixed features", "Changed to fit your billing process"],
  ["Training", "Videos and chat", "In-person training in Malayalam or English"],
  ["Support", "Call centre", "Local team in Kozhikode you can call or WhatsApp"],
];

const SETUP = [
  { title: "Free demo", text: "At your shop or online." },
  { title: "Customisation", text: "Invoice format, items, tax, users and reports set up for you." },
  { title: "Data import", text: "Item list and opening stock from Excel or old software." },
  { title: "Installation and training", text: "On-site setup and staff training." },
  { title: "Support", text: "Phone, WhatsApp and remote support, plus updates." },
];

const FAQS = [
  { q: "What is the price of billing software in Kerala?", a: "The price of our ready billing software depends on your shop type, number of billing counters and the customisation you need, so we quote after a short free demo. Fully custom billing software typically costs ₹60,000 to ₹2 lakh or more." },
  { q: "Is your billing software GST compliant?", a: "Yes. It creates GST invoices with HSN codes and generates GSTR reports, with e-invoicing and e-way bill support where required." },
  { q: "Do you have billing software for restaurants?", a: "Yes. Our restaurant billing includes POS, KOT, table management, parcel orders and recipe-based stock tracking." },
  { q: "Can you set up billing software for a jewellery shop?", a: "Yes. It supports weight and purity billing, daily gold rates, making charges, old-gold exchange and hallmark details." },
  { q: "Does the billing software work without internet?", a: "Yes. You can keep billing offline, and data syncs automatically when the connection returns." },
  { q: "Do you install the software at my shop?", a: "Yes. We install and set it up at shops across Kerala, train your staff and provide phone, WhatsApp and remote support." },
  { q: "Can it connect with Tally?", a: "Yes. Sales and purchase data can be exported to Tally for your accountant." },
  { q: "Can you build fully custom billing software?", a: "Yes. For unique billing workflows we develop billing software from scratch, integrated with your website, app or ERP." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD (Service, not SoftwareApplication with prices, until pricing is final — brief) ── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Billing Software and Billing Software Development",
      serviceType: "GST billing software",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "City", name: "Kochi" },
        { "@type": "State", name: "Kerala" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Billing software",
        itemListElement: [
          "Retail and supermarket billing software",
          "Restaurant billing software",
          "Jewellery billing software",
          "Medical store billing software",
          "Custom billing software development",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "GST Billing Software in Kerala & Kozhikode",
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
        { "@type": "ListItem", position: 2, name: "Software Development", item: "https://ivoniz.com/software-development" },
        { "@type": "ListItem", position: 3, name: "Billing Software", item: PAGE_URL },
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
export default function BillingSoftwarePage() {
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
              { label: "Software Development", href: "/software-development" },
              { label: "Billing Software", href: "/billing-software-development" },
            ]}
          />
          <div className="mt-8"><Label>GST Billing Software</Label></div>
          <HeroTitle outline="Customised for Your Business">Billing Software in Kerala,</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
                Ivoniz provides GST billing software for shops, supermarkets, restaurants, jewellery stores and medical
                stores across Kerala, set up and customised for the way your business works. Bill faster, track stock in
                real time and get GST-ready reports, with local installation, Malayalam-friendly training and support
                from our team in Kozhikode. Need something unique? We also build fully custom billing software.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                {BILLING_FROM ? (
                  <>
                    <span className="text-[13px] text-white/60">Plans from</span>
                    <span className="text-[20px] text-white tabular-nums" style={{ fontFamily: OPEN_SANS }}>{BILLING_FROM}</span>
                    <span className="text-[13px] text-white/60">· free demo</span>
                  </>
                ) : (
                  <span className="text-[14px] text-white/75">Free demo at your shop · price on request</span>
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Book a Free Demo" location="hero" event="demo_click" />
              <PillLink href={waLink(WA.price)} external event="whatsapp_click" label="Ask for Price" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BY SHOP TYPE ── */}
      <section id="shop-types" className={`relative py-20 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-10 sm:mb-14">
            <Label>By Shop Type</Label>
            <Heading>Billing software for your type of business</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Billing software for retail shops, restaurants, jewellery shops and medical stores, each set up with the
              fields, taxes and reports that trade actually uses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SHOP_TYPES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-7 flex flex-col min-h-[220px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-7 text-[18.5px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
            <div className="border-r border-b border-white/10 p-7 flex flex-col justify-between min-h-[220px] bg-white/3">
              <p className="text-[15px] text-white/75 leading-relaxed">Don&apos;t see your trade? We customise the billing for it.</p>
              <div className="mt-6"><PillLink href={waLink(WA.price)} external solid event="whatsapp_click" label="Ask us" location="shop_types_tile" icon={<FaWhatsapp aria-hidden="true" />} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Features</Label>
            <Heading>Billing software features</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              GST billing software that keeps the counter fast and gives owners the numbers they need, every day.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FEATURES.map(({ Icon, title, text }) => (
              <li key={title} className="p-5" style={GLASS}>
                <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[14px]" />
                </span>
                <p className="mt-4 text-[16px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{title}</p>
                <p className="mt-1.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── LOCAL VS NATIONAL APP ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>Why choose local billing software over a national app</Heading>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[600px] text-left">
              <caption className="sr-only">National billing apps compared with Ivoniz billing software</caption>
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="px-6 py-4 w-[18%]"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">National billing apps</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black">Ivoniz billing software</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, n, i]) => (
                  <tr key={k} className="border-b border-black/8 last:border-0">
                    <th scope="row" className="px-6 py-4 text-[14px] font-semibold text-black/70">{k}</th>
                    <td className="px-6 py-4 text-[15px] text-black/65">{n}</td>
                    <td className="px-6 py-4 text-[15px] text-black">{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
            National apps are a good start for a single small shop. When you need help at the counter, changes to how
            billing works, or someone who answers in Malayalam, a local team makes the difference.
          </p>
        </div>
      </section>

      {/* ── BUYER'S CHECKLIST ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Before You Buy</Label>
            <Heading>What to check before choosing billing software</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              Whichever billing software for small business you choose, ours or another, ask these questions first.
              They decide whether billing stays smooth a year from now.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ["Does it keep up with GST changes?", "Rates, HSN rules and e-invoicing limits change. Updates should be included, not charged as extras."],
              ["What happens when the internet goes down?", "A busy counter can't wait. Check that billing continues offline and syncs later."],
              ["Where is your data backed up?", "Ask how often backups run and how quickly your data can be restored after a system failure."],
              ["Who answers when billing stops?", "A local number you can call or WhatsApp during shop hours matters more than a ticket system."],
              ["Can you get your data out?", "Item lists, customers and sales should export to Excel or Tally whenever you need them."],
              ["Will it work with your hardware?", "Confirm support for your barcode scanner, thermal printer, cash drawer and weighing scale."],
            ].map(([t, d]) => (
              <li key={t} className="p-6" style={GLASS}>
                <p className="text-[16.5px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRICE ── */}
      <section id="price" className={`relative py-20 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1100px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Billing software price in Kerala</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[600px] text-left">
              <caption className="sr-only">Billing software options and prices</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["Option", "Typical price (INR)", "Best for"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BILLING_OPTIONS.map((o) => (
                  <tr key={o.id} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 text-[16px] text-white font-normal align-top" style={{ fontFamily: OPEN_SANS }}>{o.label}</th>
                    <td className="px-6 py-5 text-[16px] text-white tabular-nums whitespace-nowrap align-top" style={{ fontFamily: OPEN_SANS }}>{o.price}</td>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 align-top">{o.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            Billing software price depends on shop type, billing counters, branches and customisation, so we quote after
            a free demo. The custom development range is indicative. Hardware such as barcode scanners, thermal printers
            and POS terminals is priced separately; ask us if you&apos;d like help choosing it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PillLink href={waLink(WA.price)} external solid event="whatsapp_click" label="Get Billing Software Price" location="pricing" icon={<FaWhatsapp aria-hidden="true" />} />
            <PillLink href="#quote" label="Book a Free Demo" location="pricing" event="demo_click" />
          </div>
        </div>
      </section>

      {/* ── CUSTOM DEVELOPMENT ── */}
      <section id="custom" className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Custom Development</Label>
            <Heading>Custom billing software development</Heading>
            <p className="mt-6 text-[16px] text-white/65 leading-relaxed">
              If ready-made billing doesn&apos;t fit, for example subscription billing, service-job billing, billing
              combined with bookings or a franchise network, we build billing software from scratch: your invoice
              format, your workflow, your reports, integrated with your website, app or ERP. It&apos;s part of our{" "}
              <Link href="/software-development" className={LINK}>software development</Link> services.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              ["Subscription and recurring billing", "Monthly plans, auto-generated invoices and payment reminders."],
              ["Service and job-card billing", "Workshops and service centres billing parts, labour and warranty."],
              ["Billing with bookings", "Clinics, salons and rentals that bill against appointments."],
              ["Franchise and multi-outlet networks", "Central price control, outlet billing and head-office reports."],
            ].map(([t, d]) => (
              <li key={t} className="p-5" style={GLASS}>
                <p className="text-[16.5px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                <p className="mt-1.5 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SETUP PROCESS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How It Works</Label>
          <Heading className="mb-12 sm:mb-16">Setup process</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
            {SETUP.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(40px,3.6vw,56px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── KERALA ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[1.1fr_1fr] gap-3">
          <article className="p-7 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={h2Style}>Billing software in Kozhikode, Kochi and across Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Our team works from HiLITE Business Park, Kozhikode (Calicut), and supports shops and businesses across
              Kerala, including Kochi, Malappuram, Thrissur, Kannur and Wayanad, with on-site installation where possible
              and remote support everywhere. Looking for billing software in Kozhikode or billing software in Kochi?
              Visit us, or we&apos;ll come to your shop.
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
              <PillLink href={waLink(WA.demo)} external solid event="whatsapp_click" label="Book a Free Billing Software Demo" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>
          <article className="p-7 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Grow Beyond the Counter</Label>
            <h2 className="text-white" style={h2Style}>Selling online too?</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Connect your billing to an online store so stock and prices stay in sync between the shop and the website.
              See <Link href="/ecommerce-website-development" className={LINK}>ecommerce website development</Link>, or add a
              customer app through our <Link href="/mobile-app-development" className={LINK}>mobile app development</Link> team.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              {["One stock for shop and online orders", "Online orders billed with the same GST invoice format", "Sales from every channel in one report"].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Billing software FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Billing software development cost for custom builds is covered in the{" "}
              <a href="#price" className={LINK}>price table above</a>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-24 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Free Demo</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              See the billing software <span style={OUTLINE}>working at your shop</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Book a free demo at your shop in Kerala or online. We&apos;ll show the billing for your trade and give you
              a clear price.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.price)} external event="whatsapp_click" label="Ask for Price on WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <BillingQuoteForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Demo" message={WA.price} />
    </main>
  );
}
