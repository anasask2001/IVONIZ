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

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/seo-services-dubai — owns "seo services dubai"
   (Ubersuggest: 1,300/mo, SD 9, $27 CPC, Nov 2026), "seo agency dubai",
   "seo company dubai / uae". Reserved for this page by the SEO hub's notes.
   Honest positioning: a remote team in Kozhikode, NO office in the UAE (said
   in the hero, the FAQ and the schema has no UAE address). Proof = the real
   GCC client websites from lib/clients.js (built with on-page SEO at launch);
   no ranking or traffic claims. Arabic: technical setup only (hreflang, RTL),
   Arabic copy by a native writer. Prices not fixed → quoted in AED.
   Location page: NOT linked from the menu or footer (user rule).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/seo-services-dubai";
const TITLE = "SEO Services for Dubai & UAE Businesses | Ivoniz LLP";
const DESCRIPTION =
  "SEO services for Dubai and UAE businesses, delivered remotely by our team in Kerala: technical, on-page, local and ecommerce SEO, quoted in AED. Free SEO audit.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "SEO Services for Dubai & UAE Businesses", description: DESCRIPTION, url: PAGE_URL, type: "website", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "SEO services for Dubai and UAE businesses by Ivoniz" }] },
  twitter: { card: "summary_large_image", title: "SEO Services for Dubai & UAE Businesses", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const SEO = "/digital-marketing/seo-services";
const GCC = CLIENTS.filter((c) => c.region === "gcc");

const INCLUDED = [
  { t: "Technical SEO", d: "Speed, mobile usability, indexing, redirects and site errors, fixed by our own developers rather than handed to you as a list.", href: `${SEO}/technical-seo-services` },
  { t: "On-page SEO", d: "Titles, headings, content, internal links and schema on the pages that should bring enquiries.", href: `${SEO}/on-page-seo-services` },
  { t: "Local SEO and Google Business Profile", d: "Your profile, categories, photos and reviews for your real UAE address, so you show in Google Maps and “near me” searches.", href: `${SEO}/local-seo-services` },
  { t: "Ecommerce SEO", d: "Category and product pages for Shopify, WooCommerce and custom stores selling in the UAE.", href: `${SEO}/ecommerce-seo-services` },
  { t: "Links and mentions", d: "White-hat links from relevant UAE and industry sites, directories and digital PR. No paid link networks.", href: `${SEO}/off-page-seo-services` },
  { t: "An audit before anything else", d: "A manual review of your site with a prioritised fix list, so you know what matters before you commit to a package.", href: `${SEO}/seo-audit-services` },
];

const UAE_NOTES = [
  ["People search in English and Arabic", "Many UAE searches are in English, but some customers search in Arabic. If you have an Arabic version of your site, Google needs to know which page is for which language, and the Arabic pages need a right-to-left layout."],
  ["Maps results matter for local businesses", "For clinics, salons, restaurants and services, many customers choose from the Google Maps results. That depends on your Google Business Profile and reviews as much as your website."],
  ["Area names are part of the search", "Customers often search by area, like a service “in Business Bay” or “in Al Nahda”. Pages and profiles should mention the areas you actually serve, and only those."],
  ["Competitive industries move slowly", "Real estate, legal, finance and similar sectors in Dubai are crowded. Expect a longer timeline there, and start with the searches where you can realistically win."],
];

const PROCESS = [
  ["Free audit", "We review your site and Google presence and send a short list of the biggest problems."],
  ["Kick-off call in Gulf time", "Your services, areas, competitors and which enquiries matter most."],
  ["Access", "Read access to Google Search Console and Analytics, so we measure from real data."],
  ["Monthly work and report", "Fixes, pages and links each month, with a report on enquiries, not just rankings."],
];

const FAQS = [
  { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India. We work with UAE businesses remotely, with calls and WhatsApp scheduled in Gulf time, and shared reports you can check any time." },
  { q: "How much do SEO services cost for a Dubai business?", a: "We quote in AED after a free audit, because the work depends on your site, your competitors and how many areas or services you want to rank for. Each proposal lists what every month includes." },
  { q: "How long does SEO take to show results in the UAE?", a: "Technical fixes and Google Business Profile improvements can help within weeks. Ranking for competitive Dubai searches usually takes several months, and longer in crowded sectors like real estate." },
  { q: "Can you do Arabic SEO?", a: "We set up the technical side for Arabic: language tags so Google shows the right version, right-to-left layouts and Arabic page titles. The Arabic text itself should be written or checked by a native speaker, either your team or a translator you trust." },
  { q: "Can you guarantee first-page rankings in Dubai?", a: "No. Google decides rankings, and no honest agency can guarantee them. We commit to the work, show you what was done each month, and report on enquiries." },
  { q: "Have you worked with UAE businesses before?", a: `Yes. We have built websites for businesses in the UAE, Saudi Arabia and Qatar, most of them with on-page SEO set up at launch. They are listed on this page with links to their live sites.` },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "SEO Services for Dubai and UAE Businesses",
      serviceType: "Search engine optimisation",
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
      name: "SEO Services for Dubai & UAE Businesses",
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
        { "@type": "ListItem", position: 2, name: "Digital Marketing", item: "https://ivoniz.com/digital-marketing" },
        { "@type": "ListItem", position: 3, name: "SEO Services", item: `https://ivoniz.com${SEO}` },
        { "@type": "ListItem", position: 4, name: "SEO Services for Dubai", item: PAGE_URL },
      ],
    },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function SeoDubaiPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "SEO Services", href: SEO },
              { label: "SEO Services for Dubai", href: `${SEO}/seo-services-dubai` },
            ]}
          />
          <div className="mt-8"><Label>Dubai · UAE · Remote team in Kerala</Label></div>
          <HeroTitle outline="Dubai and UAE Businesses">SEO Services for</HeroTitle>
          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
              We&apos;re an SEO and web development team in Kozhikode, Kerala. We don&apos;t have an office in Dubai: we
              work with UAE businesses remotely, in Gulf time. You get technical fixes from our own developers, on-page
              and local SEO, and a monthly report on the enquiries it brings.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free SEO Audit" location="hero" event="audit_click" />
              <PillLink href={waLink("Hi Ivoniz, I'd like SEO for my business in Dubai / UAE. Can we talk in Gulf time?")} external event="whatsapp_click" label="WhatsApp in Gulf Time" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-12">
            <Label>What&apos;s Included</Label>
            <Heading>SEO work for UAE businesses</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              The same services we offer in Kerala, adapted for UAE searches. Each links to the full detail. Need the
              website built first? See <Link href="/website-development/website-development-company-dubai" className={LINK}>websites for Dubai businesses</Link>.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {INCLUDED.map((s) => (
              <Link key={s.t} href={s.href} className="group border-r border-b border-white/10 p-6 sm:p-8 flex flex-col hover:bg-white/[0.03] transition-colors">
                <h3 className="text-[20px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{s.t}</h3>
                <p className="mt-3 text-[14.5px] text-white/60 leading-relaxed flex-1">{s.d}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-white/70 group-hover:text-white">Details <FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── UAE SPECIFICS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>SEO in the UAE</Label>
          <Heading dark={false}>What&apos;s different about SEO for a Dubai business</Heading>
          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
            {UAE_NOTES.map(([t, d]) => (
              <div key={t} className="border-t border-black/10 pt-5">
                <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="mt-2 text-[15px] text-black/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW REMOTE SEO WORKS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>How It Works</Label>
            <Heading>Working with us from Dubai</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Everything runs online: video calls and WhatsApp in Gulf time, and shared reports.
            </p>
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

      {/* ── GCC WORK ── */}
      <section className={`py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-12">
            <Label dark={false}>Our Work in the Gulf</Label>
            <Heading dark={false}>Gulf businesses we&apos;ve built websites for</Heading>
            <p className="mt-5 text-[16px] text-black/60 leading-relaxed">
              Websites we designed and built, most with on-page SEO set up at launch. We don&apos;t publish ranking claims we
              can&apos;t show you; open the sites and judge the work yourself.
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
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-24 ${PAD} bg-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Free SEO Audit</Label>
            <Heading>Start with a free audit</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              Send your website address and what you want more of. We reply with the biggest problems we find, then a
              proposal in AED if you want help fixing them.
            </p>
          </div>
          <ProjectQuoteForm
            idPrefix="dxb"
            subject="SEO audit"
            leadType="seo_dubai"
            location="seo_dubai_form"
            question="What do you need?"
            messageHint="Your website, the services you sell, and the areas you serve."
            types={[
              { id: "audit", label: "Free SEO audit" },
              { id: "seo", label: "Monthly SEO" },
              { id: "local", label: "Google Maps / local SEO" },
              { id: "ecommerce", label: "Online store SEO" },
              { id: "arabic", label: "English + Arabic site" },
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
            <Heading>SEO for Dubai businesses: questions</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              See all our <Link href={SEO} className={LINK}>SEO services</Link>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      <RelatedReading slugs={["how-long-does-seo-take","trustworthy-website-uae"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free SEO Audit" message="Hi Ivoniz, I'd like SEO for my business in Dubai / UAE." />
    </main>
  );
}
