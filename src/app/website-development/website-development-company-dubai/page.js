import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { CLIENTS, domainOf } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, FaqList } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";
import { WP_DUBAI_RANGE, CATALOGUE_PACKAGES, STORE_TYPES, PORTAL_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   L1 — /website-development/website-development-company-dubai
   Owns: "website development company in dubai" (Ubersuggest UAE: 2,900/mo,
   SD 42, $11.91 CPC), "web design company dubai" (1,900/mo, SD 22, $15.41),
   "best web design company dubai" (720) and "best website development
   company in dubai" (480) — Nov 2026. "Best" is NOT claimed in copy.
   Honest positioning: team in Kozhikode, NO UAE office (hero, FAQ; schema has
   no UAE address). Proof = real GCC sites from lib/clients.js.
   The /website-development hub keeps Kerala/India intent and links here.
   Location page: NOT linked from the menu or footer (user rule).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/website-development-company-dubai";
const TITLE = "Web Design Company for Dubai & UAE Businesses | Ivoniz LLP";
const DESCRIPTION =
  "Web design and website development for Dubai and UAE businesses: English and Arabic sites, online stores and SEO built in. Team in Kerala, quoted in AED.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "Web Design Company for Dubai & UAE Businesses", description: DESCRIPTION, url: PAGE_URL, type: "website", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Website development for Dubai and UAE businesses by Ivoniz" }] },
  twitter: { card: "summary_large_image", title: "Web Design Company for Dubai & UAE Businesses", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const W = "/website-development";
const E = `${W}/ecommerce-website-development`;
const GCC = CLIENTS.filter((c) => c.region === "gcc");
const low = (r) => r.split("–")[0].trim();

const BUILD = [
  { t: "Business websites", d: "Services, about, team, locations and enquiry pages, with WhatsApp and call buttons that track every lead.", from: WP_DUBAI_RANGE, href: `${W}/wordpress-website-development` },
  { t: "Online stores", d: "AED pricing, card and wallet payments, delivery zones and VAT on invoices, on Shopify, WooCommerce or a custom build.", from: `from ${low(STORE_TYPES[0].aed)}`, href: `${E}/ecommerce-website-development-dubai` },
  { t: "Product catalogues", d: "For suppliers and showrooms: buyers browse, filter and send an enquiry, with no checkout to manage.", from: `from ${low(CATALOGUE_PACKAGES[0].aed)}`, href: `${W}/catalogue-website-development` },
  { t: "Portals and web apps", d: "Logins for customers, dealers or staff, with dashboards, approvals and integrations, often built in phases.", from: `from ${low(PORTAL_PACKAGES[0].aed)}`, href: `${W}/web-portal-development` },
];

const UAE_NOTES = [
  ["English and Arabic, done properly", "An Arabic version needs a right-to-left layout, Arabic fonts, language tags so Google shows the right version, and text written or checked by a native speaker. We build and test the technical side; the Arabic copy comes from your team or a translator you trust."],
  ["WhatsApp first", "Many UAE customers would rather message than fill in a form. We put WhatsApp and click-to-call where people decide, and set up tracking in Google Analytics, so you can see which pages bring enquiries."],
  ["Payments and VAT", "Stores and booking sites connect a gateway that works for UAE businesses, show prices in AED, and add 5% VAT to invoices. We check which options are available for your company before choosing a platform."],
  ["Fast on mobile, everywhere", "Most visitors arrive on a phone. We build light pages, compress images and test on real mobile connections, because a slow site loses enquiries before it loads."],
];

const PROCESS = [
  ["Call in Gulf time", "Your services, customers, languages and the enquiries that matter most. India is 1.5 hours ahead of the UAE, so our working days overlap."],
  ["Written scope and AED quote", "Every page, language, feature, timeline and post-launch cost in writing, before you pay anything."],
  ["Design and build on a private link", "You review the design, then the working site, on a private link, and comment directly."],
  ["Launch in your name", "Domain, hosting and admin logins in your company's name, with redirects from your old site and Google set up."],
];

const FAQS = [
  { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India. We work with UAE businesses remotely: video calls and WhatsApp in Gulf time, and a private link where you review the site as it's built." },
  { q: "How much does a website cost for a Dubai business?", a: `It depends on the type. As a guide, a bilingual English and Arabic business website on WordPress typically costs ${WP_DUBAI_RANGE}, and an online store starts around ${low(STORE_TYPES[0].aed)}. These are typical market ranges; we send a fixed quote in AED once we know your pages and features.` },
  { q: "Have you built websites for UAE businesses?", a: "Yes. This page lists the websites we've built for businesses in the UAE, Saudi Arabia and Qatar, with links to each live site so you can judge the work yourself." },
  { q: "Can you build an Arabic website?", a: "Yes, we build English and Arabic websites with right-to-left layouts, Arabic fonts and the language tags Google uses. The Arabic text itself should be written or checked by a native speaker, either your team or a translator you choose." },
  { q: "How long does a website take?", a: "A business website usually takes a few weeks from approved content; a bilingual site or an online store takes longer. We give you a timeline in the written scope, and the biggest factor is how quickly content and approvals come in." },
  { q: "Are you the best web design company in Dubai?", a: "We won't claim that; 'best' depends on what you need, and we don't have a Dubai office. What we can show is live work for UAE, Saudi and Qatar businesses, a written scope and fixed AED quote, and every account in your name. Our guide on choosing a web design company in Dubai lists the checks to run on any agency, including us." },
  { q: "Is SEO included in your web design?", a: "The SEO basics are built into every site: page titles and descriptions, fast mobile pages, clean URLs, a sitemap, Search Console setup and redirects from your old site. Ongoing SEO to rank for competitive Dubai searches is a separate monthly service." },
  { q: "Who owns the website when it's finished?", a: "You do. The domain, hosting, admin logins and code are in your company's name, and we hand everything over at launch." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Web Design and Website Development for Dubai and UAE Businesses",
      serviceType: "Website development",
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
      name: "Web Design Company for Dubai & UAE Businesses",
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
        { "@type": "ListItem", position: 3, name: "Websites for Dubai Businesses", item: PAGE_URL },
      ],
    },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function WebsiteDubaiPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Website Development", href: W }, { label: "Websites for Dubai Businesses", href: `${W}/website-development-company-dubai` }]} />
          <div className="mt-8"><Label>Dubai · UAE · Remote team in Kerala</Label></div>
          <HeroTitle outline="for Dubai & UAE Businesses">Web Design and Website Development</HeroTitle>
          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
              We design and build websites, online stores and portals for UAE businesses, in English and Arabic. Our team
              is in Kozhikode, Kerala, and we don&apos;t have an office in Dubai: projects run on video calls and WhatsApp
              in Gulf time, with a fixed quote in AED.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Quote in AED" location="hero" />
              <PillLink href={waLink("Hi Ivoniz, I need a website for my business in Dubai / UAE. Can we talk in Gulf time?")} external event="whatsapp_click" label="WhatsApp in Gulf Time" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-12">
            <Label>What We Build</Label>
            <Heading>Websites for UAE companies</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              Prices are typical UAE market ranges, as a guide. Each links to the full detail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {BUILD.map((s) => (
              <Link key={s.t} href={s.href} className="group border-r border-b border-white/10 p-6 sm:p-8 flex flex-col hover:bg-white/[0.03] transition-colors">
                <h3 className="text-[20px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{s.t}</h3>
                <p className="mt-3 text-[14.5px] text-white/60 leading-relaxed flex-1">{s.d}</p>
                <p className="mt-5 text-[14px] text-white/85 tabular-nums">{s.from}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-white/70 group-hover:text-white">Details <FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[14.5px] text-white/55">
            How these prices are built up, and the yearly costs: <Link href="/blog/website-development-cost-dubai-uae" className={LINK}>website development cost in Dubai and the UAE</Link>.
          </p>
        </div>
      </section>

      {/* ── UAE SPECIFICS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Built for the UAE</Label>
          <Heading dark={false}>What a UAE business website needs</Heading>
          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
            {UAE_NOTES.map(([t, d]) => (
              <div key={t} className="border-t border-black/10 pt-5">
                <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="mt-2 text-[15px] text-black/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15.5px] text-black/60 leading-relaxed max-w-[760px]">
            Need English and Arabic? See{" "}
            <Link href="/website-development/arabic-website-development" className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">Arabic &amp; bilingual website development</Link>.{" "}
            Want people to find it on Google too? See{" "}
            <Link href="/digital-marketing/seo-services/seo-services-dubai" className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">SEO services for Dubai businesses</Link>.
          </p>
        </div>
      </section>

      {/* ── GCC WORK ── */}
      <section className={`py-14 sm:py-24 ${PAD} bg-white text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-12">
            <Label dark={false}>Our Work in the Gulf</Label>
            <Heading dark={false}>Gulf websites we&apos;ve built</Heading>
            <p className="mt-5 text-[16px] text-black/60 leading-relaxed">
              Live sites for businesses in the UAE, Saudi Arabia and Qatar. Open them and judge the work yourself.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {GCC.map((c) => (
              <a key={c.slug} href={c.url} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="sr-only">Opens in a new tab: </span>
                <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-black/8">
                  <Image src={c.image} alt={`${c.title} website built by Ivoniz`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-4 text-[18px] font-semibold leading-snug">{c.title}</h3>
                <p className="mt-0.5 text-[13.5px] text-black/55">{c.location} · {domainOf(c.url)}</p>
                <p className="mt-2 text-[14px] text-black/60 leading-relaxed">{c.about}</p>
              </a>
            ))}
          </div>
          <p className="mt-10 text-[15px] text-black/60">
            Case studies for each project: <Link href="/works" className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">see all our work</Link>.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>How It Works</Label>
            <Heading>Working with us from Dubai</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Choosing between agencies? Our <Link href="/blog/how-to-choose-web-design-company-dubai" className={LINK}>12 checks before you sign</Link> apply to us too.
            </p>
          </div>
          <ol className="border-t border-white/10">
            {PROCESS.map(([t, d]) => (
              <li key={t} className="border-b border-white/10 py-6 grid sm:grid-cols-[260px_1fr] gap-2 sm:gap-8">
                <h3 className="text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="text-[15px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-24 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Quote in AED</Label>
            <Heading>Tell us about your website</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              The type of site, the languages and a site you like. We reply with questions, then a written scope and a
              fixed quote in AED.
            </p>
            <div className="mt-8 p-5" style={GLASS}>
              <p className="text-[14.5px] text-white/70 leading-relaxed">
                Based in Kerala? See <Link href={W} className={LINK}>website development in Kerala</Link>.
              </p>
            </div>
          </div>
          <ProjectQuoteForm
            idPrefix="wdxb"
            subject="website"
            leadType="website_dubai"
            location="website_dubai_form"
            messageHint="Your business, the pages and languages you need, and a website you like."
            types={[
              { id: "business", label: "Business website" },
              { id: "store", label: "Online store" },
              { id: "catalogue", label: "Product catalogue" },
              { id: "portal", label: "Portal / web app" },
              { id: "redesign", label: "Redesign" },
              { id: "unsure", label: "Not sure yet" },
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
            <Heading>Websites for Dubai businesses: questions</Heading>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      <RelatedReading slugs={["trustworthy-website-uae","whatsapp-business-uae","how-to-choose-web-design-company-dubai"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Quote in AED" message="Hi Ivoniz, I need a website for my business in Dubai / UAE." />
    </main>
  );
}
