import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, FaqList } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";
import {
  STATIC_PACKAGES, STATIC_SUPPORT, WP_PACKAGES, WP_DUBAI_RANGE, CATALOGUE_PACKAGES, STORE_TYPES, PORTAL_PACKAGES,
} from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/website-development-cost-in-kerala — price guide.
   Owns "website development cost in kerala", "website cost kerala",
   "how much does a website cost in kerala / calicut", "website price kerala".
   Informational with buyer intent: answer first, then a quote form.
   Every number comes from costs.js, the same INDICATIVE MARKET RANGES the
   service pages show (SEO briefs, Nov 2026) — labelled as market ranges, not
   Ivoniz prices. When costs.js gets real prices, this page follows.
   Service pages keep their own "cost" sections; they link here for detail.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/website-development-cost-in-kerala";
const TITLE = "Website Development Cost in Kerala: 2026 Price Guide | Ivoniz LLP";
const DESCRIPTION =
  "What does a website cost in Kerala? Typical price ranges for static, WordPress, catalogue and ecommerce sites, what changes the price, and costs after launch.";
const PUBLISHED = "2026-11-26";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "Website Development Cost in Kerala (2026)", description: DESCRIPTION, url: PAGE_URL, type: "article", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Website development cost guide for Kerala" }] },
  twitter: { card: "summary_large_image", title: "Website Development Cost in Kerala (2026)", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const first = (arr) => arr[0].inr.split("–")[0].trim();
const last = (arr) => arr[arr.length - 1].inr.split("–").pop().trim();

const SECTIONS = [
  {
    id: "static",
    title: "Static website",
    best: "A small business that needs a fast site with services, photos, location and an enquiry button, and rarely changes its content.",
    rows: STATIC_PACKAGES.map((p) => [`${p.label} (${p.pages})`, p.inr, p.time]),
    cols: ["Package", "Typical cost (INR)", "Timeline"],
    link: ["Static website development", "/website-development/static-website-development"],
  },
  {
    id: "wordpress",
    title: "WordPress business website",
    best: "Businesses whose staff will add news, offers, jobs or blog posts themselves.",
    rows: WP_PACKAGES.filter((p) => p.id !== "care").map((p) => [`${p.label} (${p.note})`, p.inr, p.time]),
    cols: ["Type", "Typical cost (INR)", "Timeline"],
    link: ["WordPress website development", "/website-development/wordpress-website-development"],
  },
  {
    id: "catalogue",
    title: "Product catalogue website",
    best: "Showrooms, wholesalers and manufacturers who want buyers to browse products and enquire on WhatsApp, without online payment.",
    rows: CATALOGUE_PACKAGES.map((p) => [`${p.label} (${p.note})`, p.inr, p.aed]),
    cols: ["Package", "Typical cost (INR)", "UAE / GCC (AED)"],
    link: ["Catalogue website development", "/website-development/catalogue-website-development"],
  },
  {
    id: "ecommerce",
    title: "Ecommerce website (online store)",
    best: "Shops that want customers to pay online by UPI, card or cash on delivery.",
    rows: STORE_TYPES.map((p) => [p.label, p.inr, p.aed]),
    cols: ["Store type", "Typical cost (INR)", "UAE / GCC (AED)"],
    link: ["Ecommerce website development", "/website-development/ecommerce-website-development"],
  },
  {
    id: "portal",
    title: "Web portal",
    best: "Businesses that need logins for customers, dealers, students or staff, with dashboards and workflows.",
    rows: PORTAL_PACKAGES.map((p) => [`${p.label} (${p.note})`, p.inr, p.aed]),
    cols: ["Portal type", "Typical cost (INR)", "UAE / GCC (AED)"],
    link: ["Web portal development", "/website-development/web-portal-development"],
  },
];

const FACTORS = [
  ["Number of pages", "A 5-page site and a 30-page site are different projects. Each page needs design, content and testing."],
  ["Template or custom design", "A ready theme is cheaper. A design made for your brand takes more time but looks like nobody else's site."],
  ["Who writes the content", "If you supply text and photos, the price drops. Copywriting, product photos and translation add cost."],
  ["Features", "Online payment, booking, logins, product filters and calculators each add development and testing time."],
  ["Languages", "An English and Malayalam, or English and Arabic, site is closer to two sites than one. Arabic also needs a right-to-left layout."],
  ["Integrations", "Connecting to Tally, Zoho, a CRM, a courier or a payment gateway adds work and needs testing."],
];

const FAQS = [
  { q: "How much does a website cost in Kerala?", a: `It depends on the type. Typical market ranges in Kerala are ${first(STATIC_PACKAGES)} to ${last(STATIC_PACKAGES)} for a static website, ${first(WP_PACKAGES)} to ${WP_PACKAGES[1].inr.split("–").pop().trim()} for most WordPress business websites, and ${STORE_TYPES[0].inr} for a starter online store. Larger stores and portals cost more. These are market ranges, not a quote.` },
  { q: "Why do quotes for the same website vary so much?", a: "One quote may be a ready-made theme with your logo added; another may include custom design, content writing, SEO setup and a year of support. Ask each agency to list the pages, features and what happens after launch, so you compare the same thing." },
  { q: "What costs come after the website is built?", a: `Domain renewal and hosting are paid every year. Most businesses also pay for maintenance: for example ${STATIC_SUPPORT.inr} for a static site, or ${WP_PACKAGES.find((p) => p.id === "care")?.inr} for WordPress care that covers updates, backups and security.` },
  { q: "Is it cheaper to hire a freelancer?", a: "Often, yes, for a small site. The risk is what happens later: who fixes it if the freelancer is busy, and whether the domain and hosting are in your name. Whoever you hire, make sure you own the domain, hosting account and content." },
  { q: "Does a website in Dubai cost more than in Kerala?", a: `Usually yes. GCC websites often need English and Arabic, local payment gateways and VAT invoices. As a guide, a bilingual WordPress business site in Dubai typically costs ${WP_DUBAI_RANGE}.` },
  { q: "How do I get an exact price?", a: "Send a list of the pages you want, the features you need (payments, booking, logins), examples of websites you like, and whether you have content and photos ready. With that, an agency can give a fixed written quote." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Website Development Cost in Kerala: 2026 Price Guide",
      description: DESCRIPTION,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: PAGE_URL,
      image: "https://ivoniz.com/ivoniz-og-image.webp",
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
        { "@type": "ListItem", position: 2, name: "Website Development", item: "https://ivoniz.com/website-development" },
        { "@type": "ListItem", position: 3, name: "Website Cost in Kerala", item: PAGE_URL },
      ],
    },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

function PriceTable({ cols, rows, caption }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-white/[0.04]">
            {cols.map((c) => <th key={c} scope="col" className="px-5 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white/55">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a} className="border-t border-white/8">
              <th scope="row" className="px-5 py-4 font-normal text-[15px] text-white/85">{a}</th>
              <td className="px-5 py-4 text-[15px] text-white tabular-nums whitespace-nowrap">{b}</td>
              <td className="px-5 py-4 text-[14.5px] text-white/60 whitespace-nowrap">{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WebsiteCostKeralaPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO: answer first ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px]">
          <Breadcrumbs dark items={[{ label: "Website Development", href: "/website-development" }, { label: "Website Cost in Kerala", href: "/website-development/website-development-cost-in-kerala" }]} />
          <div className="mt-8"><Label>Price Guide · Updated November 2026</Label></div>
          <HeroTitle outline="in Kerala">Website Development Cost</HeroTitle>
          <div className="mt-10 p-6 sm:p-8 max-w-[860px]" style={GLASS}>
            <p className="text-[17px] sm:text-[19px] leading-relaxed text-white/85">
              <strong className="text-white font-semibold">Short answer:</strong> in Kerala, a static business website
              typically costs {first(STATIC_PACKAGES)}–{last(STATIC_PACKAGES)}, a WordPress business website{" "}
              {first(WP_PACKAGES)}–{WP_PACKAGES[1].inr.split("–").pop().trim()}, and a starter online store{" "}
              {STORE_TYPES[0].inr}. The price depends mostly on pages, features and who writes the content.
            </p>
            <p className="mt-4 text-[14px] text-white/55 leading-relaxed">
              These are typical market ranges we use as a guide, not a quote. A fixed price needs your page list and features.
            </p>
          </div>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-2 rounded-full border border-white/15 text-[13.5px] text-white/75 hover:border-white/50 hover:text-white">{s.title}</a>
            ))}
            <a href="#factors" className="px-4 py-2 rounded-full border border-white/15 text-[13.5px] text-white/75 hover:border-white/50 hover:text-white">What changes the price</a>
            <a href="#after-launch" className="px-4 py-2 rounded-full border border-white/15 text-[13.5px] text-white/75 hover:border-white/50 hover:text-white">Costs after launch</a>
          </nav>
        </div>
      </section>

      {/* ── PRICE BY TYPE ── */}
      <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1100px]">
          <Label>Price by Type</Label>
          <Heading>What each type of website costs</Heading>
          <p className="mt-5 text-white/60 text-[16px] leading-relaxed max-w-[760px]">
            The biggest decision is the type of website. Pick the one that matches how your customers buy, then look at
            its range.
          </p>
          <div className="mt-12 grid gap-14">
            {SECTIONS.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-24">
                <h3 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(24px,2.4vw,32px)", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p className="mt-3 text-[15.5px] text-white/60 leading-relaxed max-w-[760px]"><span className="text-white/85">Suits:</span> {s.best}</p>
                <PriceTable cols={s.cols} rows={s.rows} caption={`${s.title} typical cost in Kerala`} />
                <Link href={s.link[1]} className={`mt-4 inline-block text-[14.5px] ${LINK}`}>{s.link[0]}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACTORS ── */}
      <section id="factors" className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Why Prices Differ</Label>
          <Heading dark={false}>What changes the price of a website</Heading>
          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
            {FACTORS.map(([t, d]) => (
              <div key={t} className="border-t border-black/10 pt-5">
                <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="mt-2 text-[15px] text-black/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15.5px] text-black/60 leading-relaxed max-w-[760px]">
            Choosing between WordPress and a custom build? Our{" "}
            <Link href="/website-development/custom-website-vs-wordpress" className="text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black">custom website vs WordPress</Link>{" "}
            guide compares the cost, speed and SEO of each.
          </p>
        </div>
      </section>

      {/* ── AFTER LAUNCH ── */}
      <section id="after-launch" className={`relative py-14 sm:py-24 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Label>After Launch</Label>
            <Heading>Costs that come every year</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              The build is a one-time cost, but a website also has running costs. Ask whether a quote includes them, and
              make sure the domain and hosting are registered in your business&apos;s name. Need someone to look after it? See{" "}
              <Link href="/website-development/website-maintenance-services" className={LINK}>website maintenance services</Link>.
            </p>
          </div>
          <ul className="grid gap-3 self-start">
            {[
              ["Domain renewal", "Paid yearly to keep your .com or .in address."],
              ["Hosting", "Paid yearly or monthly. Online stores and portals need more than a basic plan."],
              ["Maintenance", `${STATIC_SUPPORT.inr} for a static site; ${WP_PACKAGES.find((p) => p.id === "care")?.inr} for WordPress updates, backups and security.`],
              ["Changes and new pages", "Small edits are often covered by a maintenance plan; new sections or features are quoted separately."],
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
            <Label>Get an Exact Price</Label>
            <Heading>Want a fixed price for your website?</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              Tell us the type of website and roughly what it needs. We reply with questions, then a fixed written quote
              from our team in Kozhikode.
            </p>
            <div className="mt-8">
              <PillLink href={waLink("Hi Ivoniz, I read your website cost guide and want a price for my website.")} external event="whatsapp_click" label="Ask on WhatsApp" location="cost_guide" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
          <ProjectQuoteForm
            idPrefix="wcost"
            location="website_cost_guide_form"
            types={[
              { id: "static", label: "Static website" },
              { id: "wordpress", label: "WordPress website" },
              { id: "catalogue", label: "Product catalogue" },
              { id: "store", label: "Online store" },
              { id: "portal", label: "Web portal" },
              { id: "unsure", label: "Not sure yet" },
            ]}
            places={["Kerala", "Elsewhere in India", "UAE", "Saudi Arabia", "Qatar", "Other GCC", "Other"]}
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-24 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Website cost questions</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              In Calicut? See <Link href="/website-development/best-website-development-company-in-calicut" className={LINK}>website development in Calicut</Link>. In the UAE? See the <Link href="/blog/website-development-cost-dubai-uae" className={LINK}>Dubai website cost guide</Link>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      <RelatedReading slugs={["cheap-vs-professional-website","website-maintenance-cost","who-owns-your-website-domain-hosting"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Price" message="Hi Ivoniz, I read your website cost guide and want a price for my website." />
    </main>
  );
}
