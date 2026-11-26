import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaMobileAlt, FaTachometerAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaSearch, FaLock,
  FaChartLine, FaShareAlt, FaCheck, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { CLIENTS, domainOf } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { STATIC_PACKAGES, STATIC_SUPPORT, STATIC_FROM } from "@/components/ecommerce/costs";
import StaticQuoteForm from "@/components/static/StaticQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /website-development/static-website-development — owns "static website design / development"
   and the static-website cost cluster (SEO brief, 23 Nov 2026, Ubersuggest:
   ~500 buyer searches/mo in India, SD 5–18; cost terms ≈ 220/mo).
   Budget-entry page: price-led, short form, WhatsApp-first, visible upgrade
   path to WordPress / ecommerce. India-focused; UAE not targeted.
   Does NOT target: WordPress/CMS sites, "static website design templates"
   (DIY), hosting-cost terms (developers).
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/static-website-development";
const TITLE = "Static Website Design & Development in India | Ivoniz LLP";
const DESCRIPTION =
  "Static website design and development for small businesses in India. Fast, secure 5-page to 20-page sites at a fixed price. See costs and get a quote today.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Static Website Design & Development | Fixed Prices",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Static website design for a small business on mobile and laptop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Static Website Design & Development | Fixed Prices",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const pkgMessage = (p) => `Hi Ivoniz, I need a ${p.pages.split(",")[0].toLowerCase()} static website (${p.label} package) for my business.`;

const INCLUDES = [
  { Icon: FaMobileAlt, t: "Mobile-responsive design" },
  { Icon: FaTachometerAlt, t: "Fast loading, tested with Google PageSpeed Insights" },
  { Icon: FaEnvelopeOpenText, t: "Contact form, WhatsApp button and click-to-call" },
  { Icon: FaMapMarkerAlt, t: "Google Maps and your business details" },
  { Icon: FaSearch, t: "Basic on-page SEO: titles, meta descriptions, headings, sitemap, schema" },
  { Icon: FaLock, t: "SSL certificate (HTTPS)" },
  { Icon: FaChartLine, t: "Google Analytics and Search Console setup" },
  { Icon: FaShareAlt, t: "Social media links and share images" },
];

const COMPARE = [
  ["Best for", "5–20 page sites that rarely change", "Sites you update often, blogs, many pages"],
  ["Cost", "Lowest", "Low to medium"],
  ["Speed", "Fastest", "Fast with good setup"],
  ["Security", "Very high (no database)", "Good with updates"],
  ["Updating content", "Through a developer", "Yourself, from the dashboard"],
  ["Maintenance", "Almost none", "Regular updates needed"],
];

const FOR_WHO = [
  "Startups needing a professional site quickly",
  "Doctors, clinics and consultants",
  "Lawyers, accountants and architects",
  "Local shops, restaurants and service businesses",
  "Event, campaign and product landing pages",
  "Portfolio sites for designers, photographers and freelancers",
];

const PROCESS = [
  { title: "Share your requirements", text: "Pages, content, logo and reference sites." },
  { title: "Design", text: "Home page design for approval." },
  { title: "Build", text: "Remaining pages, forms and SEO setup." },
  { title: "Review", text: "You check it on a preview link; we make revisions." },
  { title: "Launch", text: "Go live on your domain with Analytics and Search Console connected." },
];

/* Real client sites that Ivoniz's own portfolio data marks as static builds. */
const EXAMPLES = CLIENTS.filter((c) => c.type === "static");

const [STARTER, BUSINESS] = STATIC_PACKAGES;

const FAQS = [
  { q: "How much does a static website cost in India?", a: `A starter static website of up to 5 pages typically costs ${STARTER.inr}, and a 6–10 page business site costs ${BUSINESS.inr}.` },
  { q: "What is the cost of a 5-page static website in India?", a: `A 5-page static website usually costs ${STARTER.inr}, including mobile design, contact form, WhatsApp button and basic SEO.` },
  { q: "What is static website design?", a: "Static website design is creating a website from fixed HTML pages, with no database or admin panel, so it loads fast, is very secure and costs little to host." },
  { q: "How long does it take to build a static website?", a: "A starter static website takes 5 to 7 days, and larger sites take 1 to 3 weeks." },
  { q: "Can I update a static website myself?", a: "Not directly, as there's no admin panel. We make content changes for you under a yearly support plan, or we can build a WordPress site if you want to edit it yourself." },
  { q: "Is a static website good for SEO?", a: "Yes. Static sites load very fast and have clean code, both of which help Google rankings. You'll still need good content and regular updates to rank well." },
  { q: "Can a static website be upgraded later?", a: "Yes. We can convert it to WordPress, add a blog, or add ecommerce when your business grows." },
  { q: "Do I need to pay for hosting?", a: "Static sites can be hosted free or very cheaply on platforms like Netlify, Vercel or Cloudflare Pages, or on your existing hosting. You only need to buy a domain." },
];

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Static Website Design and Development",
      serviceType: "Static website development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Kerala" },
        { "@type": "City", name: "Kozhikode" },
      ],
      offers: STATIC_PACKAGES.map((p) => ({
        "@type": "Offer",
        name: `${p.label} static website (${p.pages.split(",")[0].toLowerCase()})`,
        priceSpecification: { "@type": "PriceSpecification", minPrice: p.min, maxPrice: p.max, priceCurrency: "INR" },
      })),
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Static Website Design & Development in India",
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
        { "@type": "ListItem", position: 2, name: "Website Development", item: "https://ivoniz.com/website-development" },
        { "@type": "ListItem", position: 3, name: "Static Website Development", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

const ADDRESS = organizationSchema.address;

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function StaticWebsiteDevelopmentPage() {
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
              { label: "Static Website Development", href: "/website-development/static-website-development" },
            ]}
          />
          <div className="mt-8"><Label>Static Website Design</Label></div>
          <HeroTitle outline="Affordable Business Websites">Static Website Design and Development for Fast,</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[760px]">
                Ivoniz offers static website design and development for small businesses, startups, clinics, consultants
                and professionals across India. A static website is the quickest and most affordable way to get a
                professional online presence: fast to load, secure, cheap to host and almost maintenance-free. Choose a
                fixed-price package, from a 5-page site upward.
              </p>
              <p className="mt-6 inline-flex items-baseline gap-3 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[13px] text-white/55">Static websites from</span>
                <span className="text-[22px] text-white tabular-nums" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{STATIC_FROM}</span>
                <a href="#cost" className="text-[13px] text-white/70 underline underline-offset-4 decoration-white/30 hover:text-white">see packages</a>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Static Website Quote" location="hero" />
              <PillLink
                href={waLink("Hi Ivoniz, I need a 5-page static website for my business. What would it cost?")}
                external
                event="whatsapp_click"
                label="Ask for Static Website Pricing"
                location="hero"
                icon={<FaWhatsapp aria-hidden="true" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS A STATIC WEBSITE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>What is a static website?</Heading>
          </div>
          <div className="space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-black/65">
            <p>
              A static website is made of fixed pages built in HTML, CSS and JavaScript. Every visitor sees the same
              content, and there&apos;s no database or admin panel behind it. That makes it faster, more secure and
              cheaper to run than a CMS-based website. Content changes are made by a developer, usually within a
              support plan.
            </p>
            <p>
              Modern static sites can still look premium and include contact forms, WhatsApp chat, Google Maps, image
              galleries and animations. Pair your site with <Link href="/digital-marketing/seo-services/local-seo-services" className="text-black underline underline-offset-4 decoration-black/25 hover:decoration-black">local SEO</Link> so nearby customers find you on Google Maps.
            </p>
          </div>
        </div>
      </section>

      {/* ── COST (centre of the page) ── */}
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Static website cost in India</Heading>
          <p className="mt-5 text-white/60 text-[16px] leading-relaxed max-w-[720px]">
            Fixed-price static website development packages. What affects the price: number of pages, custom vs
            template-based design, content writing, number of images, forms and integrations, and languages.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {STATIC_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 sm:p-8 flex flex-col ${i === 0 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 0 ? undefined : GLASS}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 0 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                  {i === 0 && <span className="text-[11px] font-semibold rounded-full bg-black text-white px-3 py-1">5-page website</span>}
                </div>
                <p className="mt-3 text-[15px]" style={{ fontFamily: OPEN_SANS }}>{p.pages}</p>
                <p className="mt-6 text-[26px] tabular-nums" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.inr}</p>
                <p className={`mt-1 text-[14px] flex-1 ${i === 0 ? "text-black/60" : "text-white/55"}`}>Delivery: {p.time}</p>
                <div className="mt-7 flex flex-col gap-2.5">
                  <PillLink
                    href={waLink(pkgMessage(p))}
                    external
                    solid
                    dark={i !== 0}
                    event="package_click"
                    label="Choose this package"
                    location={`package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                  <a href={`#quote-${p.id}`} className={`text-center text-[13.5px] underline underline-offset-4 ${i === 0 ? "text-black/60 decoration-black/25 hover:text-black" : "text-white/60 decoration-white/25 hover:text-white"}`}>
                    or use the quote form
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-3 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={GLASS}>
            <p className="text-[15px] text-white/80"><strong className="font-semibold text-white">{STATIC_SUPPORT.label}:</strong> {STATIC_SUPPORT.note}</p>
            <p className="text-[17px] text-white tabular-nums whitespace-nowrap" style={{ fontFamily: OPEN_SANS }}>{STATIC_SUPPORT.inr}</p>
          </div>
          <p className="mt-4 text-[13px] text-white/55 max-w-[820px] leading-relaxed">
            Indicative ranges. Domain and hosting are separate; static sites can often be hosted for free or very cheaply
            on Netlify, Vercel or Cloudflare Pages.
          </p>
        </div>
      </section>

      {/* ── INCLUDED ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Included</Label>
            <Heading>What&apos;s included in every static website</Heading>
            <p className="mt-5 text-[15px] text-white/55 leading-relaxed">Our static website development services, in every package.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {INCLUDES.map(({ Icon, t }) => (
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

      {/* ── STATIC VS WORDPRESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>Static website vs WordPress website</Heading>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Static website compared with a WordPress website</caption>
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="px-6 py-4 w-[22%]"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black">Static website</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">WordPress website</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-black/8 last:border-0">
                    <th scope="row" className="px-6 py-4 text-[14px] font-semibold text-black/70">{k}</th>
                    <td className="px-6 py-4 text-[15px] text-black">{a}</td>
                    <td className="px-6 py-4 text-[15px] text-black/60">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
            If you want to edit pages and publish blogs yourself, see our{" "}
            <Link href="/website-development/wordpress-website-development" className={LINK_DARK}>WordPress website development</Link> services.
          </p>
        </div>
      </section>

      {/* ── WHO + NEXT.JS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Label>Who It&apos;s For</Label>
            <Heading>Who is a static website right for?</Heading>
            <ul className="mt-8 border-t border-white/10">
              {FOR_WHO.map((t) => (
                <li key={t} className="flex gap-4 border-b border-white/10 py-4">
                  <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />
                  <span className="text-[16px] text-white/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 sm:p-10 self-start" style={GLASS}>
            <Label>Next.js</Label>
            <h2 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
              Modern static websites with Next.js
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              For businesses wanting more, we also build modern static sites with Next.js and React, the same technology
              used by large brands. They give app-like speed, top Core Web Vitals scores and an easy upgrade path to a
              CMS, blog or full web application later. See our{" "}
              <Link href="/website-development" className={LINK}>custom website development</Link> services.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      {EXAMPLES.length > 0 && (
        <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-14">
              <div>
                <Label>Examples</Label>
                <Heading>Static websites we&apos;ve built</Heading>
              </div>
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                See all our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EXAMPLES.map((c) => (
                <li key={c.url}>
                  <Link href={`/works/${c.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-xl border border-white/10" style={{ aspectRatio: "21/10", background: c.gradient }}>
                      <Image
                        src={c.image}
                        alt={`${c.title} static website developed by Ivoniz`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="mt-4 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/55">{c.category}{c.location ? ` · ${c.location}` : ""}</p>
                    <p className="mt-1 text-[17px] text-white inline-flex items-center gap-1.5">{c.title} <FiArrowUpRight aria-hidden="true" className="text-white/55" /></p>
                    <p className="text-[13px] text-white/55">{domainOf(c.url)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our process</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-3 sm:mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(40px,3.6vw,56px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/55 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CALICUT + WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Calicut and India</Label>
            <h2 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
              Static website development in Calicut and across India
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Ivoniz is based at HiLITE Business Park, Kozhikode (Calicut), and builds static websites for businesses
              across Kerala and the rest of India. Meet us at the office or complete the whole project online. We also
              build websites for clients in the UAE and GCC; see our{" "}
              <Link href="/website-development" className={LINK}>website development services</Link>.
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
          </article>

          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Why Ivoniz</Label>
            <h2 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
              Why choose Ivoniz for your static website
            </h2>
            <ul className="mt-6 grid gap-3 flex-1">
              {[
                "Fixed, transparent prices with no hidden costs",
                "Fast delivery, from 5 days for a starter site",
                "Clean, hand-coded pages that load fast and rank well",
                <>Easy upgrade to <Link key="wp" href="/website-development/wordpress-website-development" className={LINK}>WordPress</Link>, <Link key="ec" href="/website-development/ecommerce-website-development" className={LINK}>ecommerce website development</Link> or a web app when you grow, plus <Link key="dm" href="/digital-marketing" className={LINK}>digital marketing packages</Link> to bring enquiries</>,
                "Local team in Calicut, with support on WhatsApp",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-[15.5px] text-white/80 leading-relaxed">
                  <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PillLink href="#quote" solid label="Start Your Static Website" location="why_ivoniz" />
            </div>
          </article>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Static website FAQs</Heading>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-16 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <span id="quote-starter" className="absolute top-0" aria-hidden="true" />
        <span id="quote-business" className="absolute top-0" aria-hidden="true" />
        <span id="quote-premium" className="absolute top-0" aria-hidden="true" />
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Get a Quote</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get your business online <span style={OUTLINE}>this week</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Tell us how many pages you need and send your logo and content. We&apos;ll confirm a fixed price and
              delivery date.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink
                href={waLink("Hi Ivoniz, I need a static website. Here are my requirements: ")}
                external
                solid
                event="whatsapp_click"
                label="Send Your Requirements"
                location="closing"
                icon={<FaWhatsapp aria-hidden="true" />}
              />
            </div>
            <p className="mt-6 text-[14px] text-white/55">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <StaticQuoteForm />
        </div>
      </section>

      <RelatedReading slugs={["do-you-need-a-website-if-you-have-instagram","cheap-vs-professional-website"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Quote" message="Hi Ivoniz, I need a 5-page static website for my business." />
    </main>
  );
}
