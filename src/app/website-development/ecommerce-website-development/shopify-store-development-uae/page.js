import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { clientBySlug, domainOf } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, FaqList } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";

/* ════════════════════════════════════════════════════════════════
   L3 — /website-development/ecommerce-website-development/shopify-store-development-uae
   Owns: "shopify development company dubai", "shopify store setup uae",
   "shopify developer uae", "shopify agency dubai". Search volumes: data
   unavailable (not checked in Ubersuggest, daily limit). Platform-specific
   page; generic "ecommerce dubai" stays on L2.
   Proof: Gaming Qatar (Shopify, Qatar). Facts kept honest: Shopify Payments
   availability varies by country and changes, so the page points to
   Shopify's own list instead of claiming it (sources conflicted, Nov 2026).
   No Shopify Partner badge claimed. No fixed AED price (not in costs.js).
   Location page: NOT linked from the menu or footer (user rule).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/ecommerce-website-development/shopify-store-development-uae";
const TITLE = "Shopify Store Development for Dubai & UAE Businesses | Ivoniz LLP";
const DESCRIPTION =
  "Shopify store setup and development for UAE businesses: theme, products, AED pricing, VAT, payments, delivery and Arabic, by our team in Kerala. See a Gulf store we built.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "Shopify Store Development for Dubai & UAE Businesses", description: DESCRIPTION, url: PAGE_URL, type: "website", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Shopify store development for UAE businesses by Ivoniz" }] },
  twitter: { card: "summary_large_image", title: "Shopify Store Development for Dubai & UAE Businesses", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const W = "/website-development";
const E = `${W}/ecommerce-website-development`;
const STORE = clientBySlug("gaming-qatar");

const WORK = [
  ["Store setup", "Shopify plan advice, domain, store settings, taxes at 5% UAE VAT, staff accounts and policies pages."],
  ["Theme design", "A theme chosen for your catalogue and customised to your brand, tested on phones first. Custom sections where the theme falls short."],
  ["Products and collections", "Products, variants, images and collections set up or imported from a spreadsheet or your old store, with filters that match how people shop."],
  ["Payments", "We check which payment options Shopify offers for your country and connect a gateway that suits your business, including pay-later if you want it."],
  ["Delivery", "Shipping zones and rates by emirate or country, free-delivery thresholds, cash on delivery if you accept it, and courier tracking."],
  ["English and Arabic", "A second language with a theme that supports right-to-left layouts, and Arabic product content written or checked by a native speaker."],
  ["Apps, only where needed", "Reviews, WhatsApp, bundles or loyalty, chosen carefully: every app adds a monthly fee and can slow the store down."],
  ["Moving to Shopify", "Products, customers and order history moved from WooCommerce or another platform, with redirects so you keep your Google rankings."],
];

const FIT = {
  good: [
    "You want to launch quickly and don't want to manage hosting or updates",
    "Your catalogue is standard: products, variants, collections",
    "Your team wants an admin that's easy to learn",
  ],
  other: [
    "You want low monthly fees and full control of the code (look at WooCommerce)",
    "You need unusual pricing, B2B accounts or complex rules (consider custom)",
    "Most of your site is content, with a small shop attached (WordPress may suit better)",
  ],
};

const FAQS = [
  { q: "Do you have an office in the UAE?", a: "No. Our team is in Kozhikode, Kerala, India. We set up and build Shopify stores for UAE businesses remotely, with calls and WhatsApp in Gulf time." },
  { q: "Is Shopify Payments available in the UAE?", a: "Shopify Payments is offered only in certain countries, and the list changes. Check Shopify's 'Supported countries for Shopify Payments' help page for your country. Where it isn't available, stores connect a third-party payment gateway, which we set up." },
  { q: "How much does a Shopify store cost in Dubai?", a: "It depends on the number of products, the theme, custom sections, languages and apps. We quote in AED after seeing your product list. Shopify's own monthly plan and app fees are paid by you directly to Shopify and the app developers." },
  { q: "Shopify or WooCommerce for a UAE store?", a: "Shopify is quicker to launch and handles hosting, security and updates for you, for a monthly fee. WooCommerce gives more control and can cost less each month, but needs hosting and maintenance. We build on both and recommend based on your products and team." },
  { q: "Can a Shopify store be in Arabic?", a: "Yes. Shopify supports selling in more than one language, and many themes support right-to-left layouts. The Arabic text should be written or checked by a native speaker." },
  { q: "Have you built a Shopify store in the Gulf?", a: `Yes. We built ${STORE?.title}, a Shopify store in Qatar for gaming consoles, accessories and digital vouchers. It is linked on this page.` },
  { q: "Who owns the Shopify store?", a: "You do. The Shopify account is created in your company's name and billed to you; we work on it as a staff or collaborator account." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Shopify Store Development for UAE Businesses",
      serviceType: "Shopify store development",
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
      name: "Shopify Store Development for Dubai & UAE Businesses",
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
        { "@type": "ListItem", position: 4, name: "Shopify Stores for the UAE", item: PAGE_URL },
      ],
    },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function ShopifyUaePage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Website Development", href: W }, { label: "Ecommerce", href: E }, { label: "Shopify Stores for the UAE", href: `${E}/shopify-store-development-uae` }]} />
          <div className="mt-8"><Label>Shopify · UAE and GCC · Remote team in Kerala</Label></div>
          <HeroTitle outline="for UAE Businesses">Shopify Store Development</HeroTitle>
          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
              We set up, design and build Shopify stores for businesses in the UAE and the Gulf: theme, products, AED
              pricing, VAT, payments, delivery and an Arabic version. Our team works from Kozhikode, Kerala, with no
              office in the UAE, and the store is in your company&apos;s name from day one.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Shopify Quote" location="hero" />
              <PillLink href={waLink("Hi Ivoniz, I want a Shopify store for my business in the UAE.")} external event="whatsapp_click" label="WhatsApp in Gulf Time" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF (first: it's the reason to trust this page) ── */}
      {STORE && (
        <section className={`py-14 sm:py-24 ${PAD} bg-white text-black`}>
          <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <a href={STORE.url} target="_blank" rel="noopener noreferrer" className="group block">
              <span className="sr-only">Opens in a new tab: </span>
              <div className="relative aspect-[2/1] rounded-xl overflow-hidden border border-black/8">
                <Image src={STORE.image} alt={`${STORE.title} Shopify store built by Ivoniz`} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
              </div>
            </a>
            <div>
              <Label dark={false}>A Shopify Store We Built</Label>
              <Heading dark={false}>{STORE.title}</Heading>
              <p className="mt-2 text-[14px] text-black/55">{STORE.location} · {domainOf(STORE.url)}</p>
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

      {/* ── WHAT WE DO ── */}
      <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-12">
            <Label>What We Do on Shopify</Label>
            <Heading>From empty account to first order</Heading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {WORK.map(([t, d]) => (
              <div key={t} className="border-r border-b border-white/10 p-6 sm:p-7">
                <h3 className="text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{t}</h3>
                <p className="mt-3 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS SHOPIFY RIGHT ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Is Shopify Right for You?</Label>
          <Heading dark={false}>When Shopify fits, and when it doesn&apos;t</Heading>
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            {[["Shopify is a good fit if", FIT.good], ["Look at something else if", FIT.other]].map(([h, items]) => (
              <div key={h} className="border-t border-black/10 pt-5">
                <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{h}</h3>
                <ul className="mt-4 grid gap-2.5 text-[15px] text-black/65 leading-relaxed">
                  {items.map((i) => <li key={i}>· {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15.5px] text-black/60 leading-relaxed max-w-[760px]">
            Comparing all three platforms for a UAE store, with typical costs:{" "}
            <Link href={`${E}/ecommerce-website-development-dubai`} className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">ecommerce website development for Dubai stores</Link>.
          </p>
        </div>
      </section>

      {/* ── COSTS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Label>Costs</Label>
            <Heading>What you pay, and to whom</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              A Shopify store has two kinds of cost. Ask any agency to separate them in the quote.
            </p>
          </div>
          <ul className="grid gap-3 self-start">
            {[
              ["To us, once", "Setup, theme design and customisation, product setup or import, payments, delivery, Arabic, and testing. Quoted in AED after we see your product list."],
              ["To Shopify, every month", "Your Shopify plan, billed to your company by Shopify, plus transaction fees depending on your payment setup."],
              ["To app developers", "Monthly fees for any paid apps. We keep these to the ones you actually need."],
              ["Optional, ongoing", "Monthly help with new products, campaigns, theme updates and SEO, if you'd rather not do it in-house."],
            ].map(([t, d]) => (
              <li key={t} className="p-5" style={GLASS}>
                <p className="text-[16px] text-white">{t}</p>
                <p className="mt-1 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-24 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Shopify Quote in AED</Label>
            <Heading>Tell us about your store</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              What you sell, roughly how many products, and whether you&apos;re starting fresh or moving from another
              platform. We reply with questions and a fixed quote in AED.
            </p>
            <p className="mt-6 text-[15px] text-white/55">
              Store already live? See <Link href="/digital-marketing/seo-services/ecommerce-seo-services" className={LINK}>ecommerce SEO</Link>.
            </p>
          </div>
          <ProjectQuoteForm
            idPrefix="shuae"
            subject="Shopify store"
            leadType="shopify_uae"
            location="shopify_uae_form"
            question="What do you need?"
            messageHint="What you sell, roughly how many products, and your current store if you have one."
            types={[
              { id: "new", label: "New Shopify store" },
              { id: "migrate", label: "Move to Shopify" },
              { id: "redesign", label: "Redesign my store" },
              { id: "help", label: "Ongoing help" },
            ]}
            places={["Dubai", "Abu Dhabi", "Sharjah", "Other UAE", "Saudi Arabia", "Qatar", "Other GCC"]}
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-24 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Shopify in the UAE: questions</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Shopify&apos;s own list: <a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries" target="_blank" rel="noopener noreferrer" className={LINK}>Shopify Payments supported countries</a>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      <RelatedReading slugs={["is-shopify-good-in-uae","cart-abandonment-reasons"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Shopify Quote" message="Hi Ivoniz, I want a Shopify store for my business in the UAE." />
    </main>
  );
}
