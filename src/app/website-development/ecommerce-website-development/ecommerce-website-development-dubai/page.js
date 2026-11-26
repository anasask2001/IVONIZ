import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { clientBySlug, domainOf } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, FaqList } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";
import { STORE_TYPES, WOO_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   L2 — /website-development/ecommerce-website-development/ecommerce-website-development-dubai
   Owns: "ecommerce website development dubai" (Ubersuggest UAE: 260/mo,
   SD 15, $34.88 CPC — the highest CPC in the set, Nov 2026), "ecommerce
   website development company in dubai" (90), "ecommerce website design
   dubai", "online store development uae".
   Parent ecommerce page keeps Kerala/India intent and links here; Shopify
   detail lives on L3. Proof: Gaming Qatar (Shopify, Qatar — labelled as
   Qatar, not UAE). Gateways: named as options we check per business; no
   claim that any provider will approve a merchant.
   Location page: NOT linked from the menu or footer (user rule).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/ecommerce-website-development/ecommerce-website-development-dubai";
const TITLE = "Ecommerce Website Development for Dubai & UAE Stores | Ivoniz LLP";
const DESCRIPTION =
  "Ecommerce website development for Dubai and UAE businesses: Shopify, WooCommerce or custom stores with AED pricing, VAT invoices, local payments and Arabic.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "Ecommerce Website Development for Dubai & UAE Stores", description: DESCRIPTION, url: PAGE_URL, type: "website", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ecommerce website development for UAE stores by Ivoniz" }] },
  twitter: { card: "summary_large_image", title: "Ecommerce Website Development for Dubai & UAE Stores", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const W = "/website-development";
const E = `${W}/ecommerce-website-development`;
const STORE = clientBySlug("gaming-qatar");

const PLATFORMS = [
  {
    t: "Shopify",
    best: "You want to launch quickly, don't want to manage hosting, and have a standard catalogue.",
    watch: "Monthly plan and app fees, and transaction fees depending on the payment setup.",
    href: `${E}/shopify-store-development-uae`,
    cta: "Shopify stores for the UAE",
  },
  {
    t: "WooCommerce",
    best: "You already use WordPress, want full control of the site and lower monthly fees, or need content and store in one place.",
    watch: "Hosting, updates and security are your responsibility, or covered by a maintenance plan.",
    href: `${E}/woocommerce-website-development`,
    cta: "WooCommerce development",
  },
  {
    t: "Custom build",
    best: "Unusual pricing rules, B2B accounts, very large catalogues or features no platform does well.",
    watch: "Higher build cost and a longer timeline, so it's worth it only when the features need it.",
    href: E,
    cta: "Custom ecommerce",
  },
];

const ESSENTIALS = [
  ["AED pricing and 5% VAT", "Prices shown in AED, VAT calculated at checkout and printed on invoices, so the store works with your accounts from day one."],
  ["Payments UAE customers use", "Cards, Apple Pay and buy-now-pay-later through a gateway such as Telr, Network International, PayTabs, Checkout.com, Stripe, Tabby or Tamara. Which ones suit you depends on your trade licence and what each provider approves, so we check before building."],
  ["Delivery and cash on delivery", "Delivery zones and charges by emirate, same-day options where you offer them, cash on delivery if you accept it, and courier tracking links in order emails."],
  ["English and Arabic", "Right-to-left layouts, Arabic product names and filters, and language tags for Google. The Arabic text is written or checked by a native speaker."],
  ["WhatsApp around the order", "A WhatsApp button for pre-sale questions, and order and delivery updates where your setup supports it."],
  ["Mobile checkout that's quick", "Most orders happen on a phone, so we keep checkout short, test it on real devices and measure where people drop out."],
];

const PROCESS = [
  ["Store plan", "Products, variants, delivery, payments and languages, agreed on a call in Gulf time."],
  ["Platform choice", "Shopify, WooCommerce or custom, based on your plan, with the monthly costs of each in writing."],
  ["Design and build", "On a private link: you review the design, then test real orders before launch."],
  ["Launch and handover", "Accounts in your company's name, training for your team, and Google Analytics and Search Console set up."],
];

const FAQS = [
  { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India, and we work with UAE businesses remotely, with calls and WhatsApp in Gulf time." },
  { q: "How much does an ecommerce website cost in Dubai?", a: `As typical UAE market ranges, a starter WooCommerce store costs ${STORE_TYPES[0].aed}, an advanced store ${STORE_TYPES[1].aed}, and a custom platform ${STORE_TYPES[2].aed}. We send a fixed quote in AED after we see your product list and features.` },
  { q: "Which ecommerce platform is best in the UAE?", a: "There isn't one best platform. Shopify is quick to launch and needs no hosting; WooCommerce gives more control and lower monthly fees; a custom build suits unusual features or large catalogues. The right one depends on your products, team and budget." },
  { q: "Which payment gateway should a UAE online store use?", a: "It depends on your trade licence, your products and the fees you're offered. Common options for UAE stores include Telr, Network International, PayTabs, Checkout.com, Stripe, and Tabby or Tamara for pay-later. Each provider approves merchants itself, so apply early." },
  { q: "Have you built an online store in the Gulf?", a: `Yes. We built ${STORE?.title}, a Shopify store in Qatar for gaming consoles, accessories and digital vouchers. The live store is linked on this page.` },
  { q: "Can the store be in English and Arabic?", a: "Yes. We build bilingual stores with right-to-left layouts and Arabic product content. Translation should be done or checked by a native Arabic speaker." },
  { q: "Who owns the store?", a: "You do. The platform account, domain, hosting and payment gateway account are in your company's name." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Ecommerce Website Development for Dubai and UAE Businesses",
      serviceType: "Ecommerce website development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Ecommerce Website Development for Dubai & UAE Stores",
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
        { "@type": "ListItem", position: 3, name: "Ecommerce Website Development", item: `https://ivoniz.com${E}` },
        { "@type": "ListItem", position: 4, name: "Ecommerce for Dubai Stores", item: PAGE_URL },
      ],
    },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function EcommerceDubaiPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Website Development", href: W }, { label: "Ecommerce", href: E }, { label: "Ecommerce for Dubai Stores", href: `${E}/ecommerce-website-development-dubai` }]} />
          <div className="mt-8"><Label>Dubai · UAE · Remote team in Kerala</Label></div>
          <HeroTitle outline="for Dubai and UAE Stores">Ecommerce Website Development</HeroTitle>
          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
              Online stores for UAE businesses with AED pricing, VAT on invoices, local payment options, delivery by
              emirate and an Arabic version. Built on Shopify, WooCommerce or a custom platform by our team in Kozhikode,
              Kerala. We have no office in the UAE; we work with you in Gulf time.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Store Quote" location="hero" />
              <PillLink href={waLink("Hi Ivoniz, I want to build an online store for my business in the UAE.")} external event="whatsapp_click" label="WhatsApp in Gulf Time" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-12">
            <Label>Choosing a Platform</Label>
            <Heading>Shopify, WooCommerce or custom?</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              We build on all three, so we recommend the one that fits your products and team, not the one we prefer.
              The longer comparison: <Link href="/blog/best-ecommerce-platform-uae" className={LINK}>best ecommerce platform in the UAE</Link>.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {PLATFORMS.map((p) => (
              <article key={p.t} className="p-7 sm:p-8 flex flex-col" style={GLASS}>
                <h3 className="text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>{p.t}</h3>
                <p className="mt-5 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Good when</p>
                <p className="mt-2 text-[15px] text-white/70 leading-relaxed">{p.best}</p>
                <p className="mt-5 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Watch for</p>
                <p className="mt-2 text-[15px] text-white/60 leading-relaxed flex-1">{p.watch}</p>
                <Link href={p.href} className="mt-6 inline-flex items-center gap-1.5 text-[14px] text-white/80 hover:text-white">{p.cta} <FiArrowUpRight aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── UAE ESSENTIALS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Selling in the UAE</Label>
          <Heading dark={false}>What a UAE online store needs</Heading>
          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
            {ESSENTIALS.map(([t, d]) => (
              <div key={t} className="border-t border-black/10 pt-5">
                <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="mt-2 text-[15px] text-black/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      {STORE && (
        <section className={`py-14 sm:py-24 ${PAD} bg-white text-black`}>
          <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <a href={STORE.url} target="_blank" rel="noopener noreferrer" className="group block">
              <span className="sr-only">Opens in a new tab: </span>
              <div className="relative aspect-[2/1] rounded-xl overflow-hidden border border-black/8">
                <Image src={STORE.image} alt={`${STORE.title} online store built by Ivoniz`} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
              </div>
            </a>
            <div>
              <Label dark={false}>A Gulf Store We Built</Label>
              <Heading dark={false}>{STORE.title}</Heading>
              <p className="mt-2 text-[14px] text-black/55">{STORE.location} · {domainOf(STORE.url)} · {STORE.tech?.join(", ")}</p>
              <p className="mt-5 text-[16px] text-black/65 leading-relaxed">{STORE.about}</p>
              <ul className="mt-5 grid gap-1.5 text-[15px] text-black/70">
                {STORE.services.map((s) => <li key={s}>· {s}</li>)}
              </ul>
              <p className="mt-6 text-[15px]">
                <Link href={`/works/${STORE.slug}`} className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">Read the case study</Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── COST ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px]">
          <Label>Cost</Label>
          <Heading>What an online store costs in the UAE</Heading>
          <p className="mt-5 text-white/60 text-[16px] leading-relaxed max-w-[760px]">
            Typical market ranges in AED, as a guide, not a quote. Platform fees, gateway fees and Arabic translation are
            separate.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[520px] text-left">
              <caption className="sr-only">Typical ecommerce website cost in the UAE</caption>
              <thead>
                <tr className="bg-white/[0.04]">
                  <th scope="col" className="px-5 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white/55">Store</th>
                  <th scope="col" className="px-5 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white/55">Typical cost (AED)</th>
                </tr>
              </thead>
              <tbody>
                {[...STORE_TYPES.map((s) => [s.label, s.aed]), [`WooCommerce ${WOO_PACKAGES[3].label.toLowerCase()}`, WOO_PACKAGES[3].aed]].map(([a, b]) => (
                  <tr key={a} className="border-t border-white/8">
                    <th scope="row" className="px-5 py-4 font-normal text-[15px] text-white/85">{a}</th>
                    <td className="px-5 py-4 text-[15px] text-white tabular-nums whitespace-nowrap">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[14.5px] text-white/55">
            Monthly, per-order and VAT costs, with a first-year worksheet: <Link href="/blog/ecommerce-website-cost-uae" className={LINK}>ecommerce website cost in the UAE</Link>.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>How It Works</Label>
            <Heading>From product list to first order</Heading>
          </div>
          <ol className="border-t border-white/10">
            {PROCESS.map(([t, d]) => (
              <li key={t} className="border-b border-white/10 py-6 grid sm:grid-cols-[240px_1fr] gap-2 sm:gap-8">
                <h3 className="text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="text-[15px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-24 ${PAD} bg-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Store Quote in AED</Label>
            <Heading>Tell us what you sell</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              Roughly how many products, where you deliver, and whether you need Arabic. We reply with questions, a
              platform recommendation and a fixed quote in AED.
            </p>
            <p className="mt-6 text-[15px] text-white/55">
              Already have a store? We also do <Link href="/digital-marketing/seo-services/ecommerce-seo-services" className={LINK}>ecommerce SEO</Link>.
            </p>
          </div>
          <ProjectQuoteForm
            idPrefix="ecdxb"
            subject="online store"
            leadType="ecommerce_dubai"
            location="ecommerce_dubai_form"
            question="Which platform?"
            messageHint="What you sell, roughly how many products, where you deliver and the languages you need."
            types={[
              { id: "shopify", label: "Shopify" },
              { id: "woo", label: "WooCommerce" },
              { id: "custom", label: "Custom" },
              { id: "unsure", label: "Not sure yet" },
            ]}
            places={["Dubai", "Abu Dhabi", "Sharjah", "Other UAE", "Saudi Arabia", "Qatar", "Other GCC"]}
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>UAE online stores: questions</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Need a business website, not a store? See <Link href={`${W}/website-development-company-dubai`} className={LINK}>websites for Dubai businesses</Link>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      <RelatedReading slugs={["payment-gateways-uae","ecommerce-website-cost-uae","best-ecommerce-platform-uae"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Store Quote" message="Hi Ivoniz, I want to build an online store for my business in the UAE." />
    </main>
  );
}
