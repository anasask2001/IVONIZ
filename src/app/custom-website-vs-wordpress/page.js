import Link from "next/link";
import Image from "next/image";
import { FaCheck, FaArrowRight, FaRegClock, FaGlobeAsia } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { HeroVersus, Scorecard, StackDiagram, VitalsGauges, Legend, WP, CUSTOM } from "@/components/comparison/Graphics";
import { EstimateButton, WhatsAppButton, PlatformQuiz, StickyMobileCTA } from "@/components/comparison/Interactive";

/* ════════════════════════════════════════════════════════════════
   Custom Website vs WordPress — global comparison page.
   Focus keyword: "custom website vs wordpress"
   Supporting: custom website development vs wordpress,
   wordpress or custom website for business, website cost india/uae.
   Rule: never use "company in [city]" in title/H1/H2s here — those
   phrases belong to the service and location pages.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/custom-website-vs-wordpress";
const UPDATED_ISO = "2026-11-19";
const UPDATED_LABEL = "19 November 2026";
const TITLE = "Custom Website vs WordPress: Cost, Speed, SEO Compared | Ivoniz LLP";
const DESCRIPTION =
  "Custom website or WordPress? Compare cost, speed, SEO, security and ecommerce, with price ranges for India and the UAE. Get a free project estimate from Ivoniz.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Custom Website vs WordPress: An Honest Comparison for Businesses",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    modifiedTime: UPDATED_ISO,
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Custom website development compared with WordPress development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website vs WordPress: An Honest Comparison for Businesses",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── FAQ: single source for the visible list and FAQPage schema ── */
const FAQS = [
  { q: "Is a custom website better than WordPress?", a: "Neither is better in every case. WordPress is better for fast, budget-friendly business sites and blogs; custom development is better for unique features, complex integrations and large-scale growth." },
  { q: "Is WordPress good for SEO?", a: "Yes. WordPress is SEO-friendly when it uses a lightweight theme, an SEO plugin, fast hosting and well-structured content. Poor themes and too many plugins are what hold WordPress sites back." },
  { q: "Is a custom website faster than WordPress?", a: "Usually, yes. A custom site ships only the code it needs, so it has a higher speed ceiling, but a well-optimised WordPress site can still pass Google's Core Web Vitals." },
  { q: "How much does a website cost in Kerala?", a: "A WordPress business website in Kerala typically costs ₹25,000 to ₹1,00,000, and a custom website ₹1,00,000 to ₹3,00,000 or more, depending on pages, features and integrations." },
  { q: "How much does website development cost in Dubai or the UAE?", a: "A bilingual WordPress business website in the UAE typically costs AED 4,000 to 15,000, while custom websites usually start around AED 15,000. Ecommerce and web applications cost more." },
  { q: "Is WordPress good for ecommerce?", a: "Yes, for small to mid-sized stores. WooCommerce handles standard catalogues and checkout well; custom ecommerce is better for B2B ordering, marketplaces, multi-country stores and ERP-linked inventory." },
  { q: "Can I move from WordPress to a custom website later?", a: "Yes. Content, products, customers and URLs can be migrated, and with proper 301 redirects you keep your Google rankings." },
  { q: "Is WordPress secure enough for a business website?", a: "Yes, if it is maintained. Keep core, themes and plugins updated, use few trusted plugins, strong logins, backups and a firewall." },
  { q: "Can you build an Arabic and English website?", a: "Yes. We build bilingual sites with right-to-left Arabic layouts and correct hreflang tags, on both WordPress and custom stacks." },
  { q: "How long does it take to build a website?", a: "A WordPress business website usually takes 2 to 6 weeks; a custom website or web application usually takes 6 to 16 weeks or more, depending on scope." },
  { q: "Do you work with clients outside India?", a: "Yes. Ivoniz works remotely with businesses in the UAE, Saudi Arabia, Qatar, Oman, Rwanda and other markets, with calls scheduled in the client's time zone." },
  { q: "Will I own my website?", a: "Yes. On both WordPress and custom builds you own the domain, content and code once the project is paid for." },
];

/* ── JSON-LD: one @graph, reusing the sitewide Organization/WebSite @ids ── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Custom Website vs WordPress: Cost, Speed, SEO Compared",
      description: "Compare custom website development and WordPress on cost, speed, SEO, security and ecommerce, with price ranges for India and the UAE.",
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORG_ID },
      about: [
        { "@type": "Thing", name: "Custom website development" },
        { "@type": "SoftwareApplication", name: "WordPress", applicationCategory: "Content management system" },
      ],
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      dateModified: UPDATED_ISO,
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["#short-answer"] },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
        { "@type": "ListItem", position: 2, name: "Website Development", item: "https://ivoniz.com/website-development" },
        { "@type": "ListItem", position: 3, name: "Custom Website vs WordPress", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ── Table of contents ── */
const TOC = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "what-is-custom", label: "What is custom development?" },
  { id: "what-is-wordpress", label: "What is WordPress?" },
  { id: "technical-differences", label: "Technical differences" },
  { id: "performance", label: "Performance and speed" },
  { id: "seo", label: "SEO and search visibility" },
  { id: "cost", label: "Cost and maintenance" },
  { id: "security", label: "Security and scalability" },
  { id: "small-business", label: "For small businesses" },
  { id: "ecommerce", label: "For ecommerce" },
  { id: "decision", label: "Which is right for you?" },
  { id: "why-ivoniz", label: "Why Ivoniz" },
  { id: "faq", label: "FAQs" },
];

/* ── Comparison table rows ── */
const GLANCE = [
  ["Best for", "Business sites, blogs, brochure sites, small stores", "Web apps, portals, large ecommerce, unique workflows"],
  ["Typical build time", "2–6 weeks", "6–16+ weeks"],
  ["Upfront cost", "Lower", "Higher"],
  ["Ongoing cost", "Plugin licences, updates, security", "Hosting, planned feature work"],
  ["Speed potential", "Good with careful theme and plugin choice", "Excellent; only the code you need"],
  ["SEO", "Strong with plugins like Yoast or Rank Math", "Strong when built SEO-first; full control"],
  ["Content editing", "Very easy, familiar admin", "Easy with a custom or headless CMS"],
  ["Security", "Depends on updates and plugin hygiene", "Smaller attack surface; depends on code quality"],
  ["Scalability", "Moderate; needs tuning at scale", "High; designed for your growth"],
  ["Ownership", "Open source; you own the site", "You own the code outright"],
];

const COST_INDIA = [
  ["Business / brochure website", "₹25,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000"],
  ["Ecommerce store", "₹50,000 – ₹2,00,000 (WooCommerce)", "₹2,00,000 – ₹8,00,000+"],
  ["Portal / web application", "Not usually suitable", "₹3,00,000 – ₹15,00,000+"],
];

const COST_GCC = [
  ["Business website (English + Arabic)", "AED 4,000 – 15,000", "AED 15,000 – 50,000"],
  ["Ecommerce store", "AED 8,000 – 25,000", "AED 30,000 – 120,000+"],
  ["Portal / web application", "Not usually suitable", "AED 50,000+"],
];

const DECISION = [
  ["Need a professional website in under a month on a limited budget", "WordPress", "wp"],
  ["Publish blogs, news or course updates often", "WordPress", "wp"],
  ["Sell a standard product range online", "WordPress + WooCommerce", "wp"],
  ["Need customer logins, dashboards or a booking engine", "Custom", "custom"],
  ["Must integrate with ERP, CRM, HMS or school software", "Custom", "custom"],
  ["Operate across several countries, currencies or languages at scale", "Custom or headless", "custom"],
  ["Expect high traffic or are building a product to sell", "Custom", "custom"],
  ["Are unsure", "Talk to us; we'll recommend after one call", "talk"],
];

const PROJECTS = [
  { title: "Posh Palette", category: "Fashion & Accessories", url: "https://poshpalette.in/", image: "/Portfolios/POSHPALETTE.webp" },
  { title: "Rivaura Hospital", category: "Healthcare", url: "https://www.rivaurahospital.com/", image: "/Portfolios/RIVAURA_HOSPITAL.webp" },
  { title: "Gaming Qatar", category: "Gaming & E-Commerce", url: "https://mygamehobbies.qa/", image: "/Portfolios/MYGAME_HOBBIES_ecommerce.webp" },
];

/* ════════════════════════════════════════════════════════════════
   UI helpers
   ════════════════════════════════════════════════════════════════ */
function H2({ id, children, eyebrow }) {
  return (
    <div className="scroll-mt-28" id={id}>
      {eyebrow && <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/45 mb-3">{eyebrow}</p>}
      <h2 className="text-[28px] sm:text-[34px] font-bold leading-[1.15] tracking-tight mb-5">{children}</h2>
    </div>
  );
}

function P({ children }) {
  return <p className="text-[16.5px] leading-[1.8] text-black/70 mb-5">{children}</p>;
}

function A({ href, children }) {
  return (
    <Link href={href} className="text-black font-semibold underline decoration-black/25 underline-offset-4 hover:decoration-black transition-colors">
      {children}
    </Link>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-3 mb-6">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[16px] leading-[1.7] text-black/70">
          <span className="shrink-0 mt-1.5 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
            <FaCheck aria-hidden="true" className="text-[9px]" />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <hr className="my-14 sm:my-16 border-black/8" />;
}

function PlatformTag({ kind }) {
  const color = kind === "wp" ? WP : kind === "custom" ? CUSTOM : "#111";
  return <span className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle" style={{ background: color }} aria-hidden="true" />;
}

function CostTable({ caption, rows, flag }) {
  return (
    <figure className="rounded-2xl border border-black/8 bg-white overflow-hidden mb-6">
      <figcaption className="flex items-center gap-2 px-5 py-4 bg-black/[0.03] border-b border-black/8 text-[14px] font-semibold">
        <span className="text-[10px] font-bold tracking-wider rounded-md bg-black text-white px-1.5 py-0.5" aria-hidden="true">{flag}</span> {caption}
      </figcaption>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-[14px]">
          <thead>
            <tr className="text-[12px] uppercase tracking-wide text-black/50">
              <th className="px-5 py-3 font-semibold">Project type</th>
              <th className="px-5 py-3 font-semibold"><PlatformTag kind="wp" />WordPress</th>
              <th className="px-5 py-3 font-semibold"><PlatformTag kind="custom" />Custom</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([type, wp, custom]) => (
              <tr key={type} className="border-t border-black/6">
                <th scope="row" className="px-5 py-4 font-medium text-black/80">{type}</th>
                <td className="px-5 py-4 text-black/70 tabular-nums">{wp}</td>
                <td className="px-5 py-4 text-black/70 tabular-nums">{custom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function InlineCTA({ title, text, location, waMessage }) {
  return (
    <aside className="my-10 rounded-2xl border border-black/10 bg-[#f6f6f4] p-6 sm:p-8">
      <p className="text-[19px] font-bold mb-2">{title}</p>
      <p className="text-[15px] text-black/65 leading-relaxed mb-5">{text}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <EstimateButton location={location} label="Request a Website Development Quote" />
        <WhatsAppButton location={location} message={waMessage} label="Ask on WhatsApp" />
      </div>
    </aside>
  );
}

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function CustomWebsiteVsWordPressPage() {
  return (
    <main id="main-content" className="bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="relative bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 xl:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <Breadcrumbs dark items={[{ label: "Website Development", href: "/website-development" }, { label: "Custom Website vs WordPress", href: "/custom-website-vs-wordpress" }]} />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 mb-5 text-[12px] text-white/55">
              <span className="font-semibold tracking-[0.2em] uppercase text-white/70">Platform guide</span>
              <span className="inline-flex items-center gap-1.5"><FaRegClock aria-hidden="true" /> 9 min read</span>
              <span>Updated <time dateTime={UPDATED_ISO}>{UPDATED_LABEL}</time></span>
            </div>
            <h1 className="font-bold leading-[1.06] tracking-tight mb-7" style={{ fontSize: "clamp(32px,4.6vw,56px)" }}>
              Custom Website Development vs WordPress: Which Is Right for Your Business?
            </h1>

            <div id="short-answer" className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:p-6 mb-6">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-2">Short answer</p>
              <p className="text-white/85 text-[16px] leading-relaxed">
                WordPress is the faster, lower-cost choice for content-led business websites, blogs and small online
                stores. Custom website development is the better choice when your site needs unique features, heavy
                traffic, complex integrations or a long-term product roadmap.
              </p>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xl">
              At Ivoniz we build both, so we don&apos;t need to push you toward one. We recommend whichever will cost you
              less over three to five years and bring you more enquiries.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <EstimateButton dark location="hero" />
              <WhatsAppButton dark location="hero" />
            </div>
          </div>
          <HeroVersus />
        </div>
      </section>

      {/* ── ARTICLE + STICKY TOC ── */}
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[240px_1fr] gap-12 xl:gap-20">
          {/* TOC */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/45 mb-4">On this page</p>
              <ol className="space-y-2.5 border-l border-black/10">
                {TOC.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="block -ml-px pl-4 border-l border-transparent text-[13.5px] text-black/55 hover:text-black hover:border-black transition-colors">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl bg-black text-white p-5">
                <p className="font-bold text-[15px] mb-1">Not sure yet?</p>
                <p className="text-[13px] text-white/60 mb-4 leading-relaxed">Tell us your goals and we&apos;ll recommend the right platform.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold underline underline-offset-4">
                  Get a free estimate <FaArrowRight aria-hidden="true" className="text-[10px]" />
                </Link>
              </div>
            </nav>
          </aside>

          {/* ARTICLE */}
          <article className="min-w-0 max-w-[760px]">
            {/* Mobile TOC */}
            <details className="lg:hidden mb-12 rounded-2xl border border-black/10 p-5">
              <summary className="cursor-pointer font-semibold text-[15px]">On this page</summary>
              <ol className="mt-4 space-y-2 list-decimal pl-5 text-[14px] text-black/65">
                {TOC.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="hover:text-black">{t.label}</a></li>
                ))}
              </ol>
            </details>

            {/* AT A GLANCE */}
            <H2 id="at-a-glance" eyebrow="Comparison">Custom Website vs WordPress at a glance</H2>
            <P>
              Most businesses can decide in a few minutes by matching their budget, timeline and feature list to the
              comparison below.
            </P>
            <figure className="rounded-2xl border border-black/8 overflow-hidden mb-8">
              <figcaption className="sr-only">Comparison table of custom website and WordPress cost, speed, SEO and security</figcaption>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left text-[14px]">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="px-5 py-4 font-semibold w-[22%]">Factor</th>
                      <th className="px-5 py-4 font-semibold"><PlatformTag kind="wp" />WordPress</th>
                      <th className="px-5 py-4 font-semibold"><PlatformTag kind="custom" />Custom website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GLANCE.map(([f, wp, c], i) => (
                      <tr key={f} className={i % 2 ? "bg-black/[0.02]" : "bg-white"}>
                        <th scope="row" className="px-5 py-4 font-semibold text-black/85 align-top">{f}</th>
                        <td className="px-5 py-4 text-black/70 align-top">{wp}</td>
                        <td className="px-5 py-4 text-black/70 align-top">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </figure>
            <Scorecard />

            <Divider />

            {/* WHAT IS CUSTOM */}
            <H2 id="what-is-custom" eyebrow="Definitions">What is custom website development?</H2>
            <P>
              Custom website development means building your website from code, around your exact requirements, instead
              of starting from a theme or page builder. Developers choose the stack to suit the project, for example
              React or Next.js on the front end and Node.js, Laravel or a headless CMS behind it. See our{" "}
              <A href="/website-development">custom website development services</A>.
            </P>
            <P>
              It suits businesses that need things a template can&apos;t do well: booking engines, customer portals,
              multi-vendor marketplaces, ERP or CRM integration, custom dashboards, AI features, or very high traffic. You
              get a site that does exactly what your business needs and nothing it doesn&apos;t.
            </P>

            {/* WHAT IS WORDPRESS */}
            <H2 id="what-is-wordpress">What is WordPress website development?</H2>
            <P>
              WordPress is an open-source content management system that powers a large share of the world&apos;s
              websites. A WordPress developer sets up the platform, builds or customises a theme, adds plugins for
              features such as forms, SEO and ecommerce (WooCommerce), and hands over an admin panel your team can update
              without code. Explore our <A href="/wordpress-website-development">WordPress development services</A>.
            </P>
            <P>
              It suits businesses that publish content often, need a professional site quickly, or want a store with a
              standard catalogue and checkout. Done properly, with a lightweight theme, few plugins and good hosting, a
              WordPress site can be fast and secure.
            </P>

            <Divider />

            {/* TECHNICAL */}
            <H2 id="technical-differences" eyebrow="Under the hood">Technical differences that matter</H2>
            <StackDiagram />
            <div className="h-8" />
            <Bullets
              items={[
                <><strong className="text-black">Architecture.</strong> WordPress is a PHP application with a MySQL database and a plugin system. A custom site is built on whatever architecture the project needs, including static generation, server-side rendering or a separate API.</>,
                <><strong className="text-black">Features.</strong> On WordPress, features usually come from plugins. On a custom build, features are written for you, so there are no unused settings, scripts or plugin conflicts.</>,
                <><strong className="text-black">Integrations.</strong> WordPress handles common integrations through plugins. Custom builds handle complex ones directly, such as two-way sync with an ERP, a hospital appointment system or a school&apos;s student records. That is the core of <A href="/web-portal-development">web application development</A>.</>,
                <><strong className="text-black">Content management.</strong> WordPress gives you its admin. A custom site can use a headless CMS (such as Strapi or Sanity) or a purpose-built admin panel.</>,
                <><strong className="text-black">Hosting.</strong> WordPress needs PHP hosting. Custom sites can run on modern cloud and edge platforms with a CDN.</>,
              ]}
            />

            <Divider />

            {/* PERFORMANCE */}
            <H2 id="performance" eyebrow="Speed">Performance and website speed</H2>
            <P>
              Speed affects both rankings and enquiries. Google measures it through Core Web Vitals: loading (LCP),
              responsiveness (INP) and visual stability (CLS).
            </P>
            <div className="mb-8"><VitalsGauges /></div>
            <P>
              WordPress sites slow down mainly because of heavy page builders, too many plugins and cheap shared hosting.
              A well-built WordPress site with a lean theme, caching and a CDN can still pass Core Web Vitals
              comfortably.
            </P>
            <P>
              Custom sites have the higher ceiling. Only the code each page needs is shipped, and techniques like static
              generation and image optimisation are built in from the start. For image-heavy ecommerce, high-traffic
              campaigns or users on slower mobile networks, that difference shows up in conversion rates.
            </P>

            <Divider />

            {/* SEO */}
            <H2 id="seo" eyebrow="Search">SEO and Google search visibility</H2>
            <P>
              Neither platform ranks a site by itself. Rankings come from content, technical quality, links and user
              experience.
            </P>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl p-5 border" style={{ borderColor: `${WP}33`, background: `${WP}0d` }}>
                <p className="text-[12px] font-bold tracking-[0.16em] uppercase mb-2" style={{ color: WP }}>WordPress</p>
                <p className="text-[15px] leading-relaxed text-black/70">
                  Makes on-page SEO easy for non-technical teams. Plugins such as Yoast and Rank Math handle titles, meta
                  descriptions, sitemaps and basic schema, and publishing new pages is quick.
                </p>
              </div>
              <div className="rounded-2xl p-5 border" style={{ borderColor: `${CUSTOM}33`, background: `${CUSTOM}0d` }}>
                <p className="text-[12px] font-bold tracking-[0.16em] uppercase mb-2" style={{ color: CUSTOM }}>Custom</p>
                <p className="text-[15px] leading-relaxed text-black/70">
                  Full control over rendering, PAGE_URL structure, structured data, internal linking and page speed. That
                  matters for large catalogues, multilingual sites (English and Arabic with correct hreflang) and sites
                  where speed is an edge.
                </p>
              </div>
            </div>
            <P>
              At Ivoniz, every build, WordPress or custom, launches with clean URLs, a sitemap, schema markup, optimised
              images and Core Web Vitals checks.
            </P>

            <Divider />

            {/* COST */}
            <H2 id="cost" eyebrow="Budget">Development cost and maintenance</H2>
            <P>
              WordPress almost always costs less to launch. A custom website costs more upfront but can cost less over
              time when it replaces paid plugins, manual work or a platform you would otherwise outgrow.
            </P>
            <P>
              What drives the price on either platform: number of pages and templates, design complexity, ecommerce
              features, integrations (payment, ERP, CRM, shipping), languages, content migration, and how much ongoing
              support you want.
            </P>
            <CostTable flag="INR" caption="Typical ranges in India (including Kerala)" rows={COST_INDIA} />
            <CostTable flag="AED" caption="Typical ranges in the UAE, Saudi Arabia, Qatar and Oman" rows={COST_GCC} />
            <p className="text-[13px] text-black/50 -mt-2 mb-6">
              Indicative market ranges. Your fixed estimate depends on scope, and we&apos;ll send one after a short call.
            </p>
            <div className="flex gap-4 rounded-2xl border border-black/8 p-5 mb-6">
              <FaGlobeAsia aria-hidden="true" className="shrink-0 text-[22px] text-black/70 mt-0.5" />
              <p className="text-[15px] leading-relaxed text-black/70 m-0">
                <strong className="text-black">Building for the GCC?</strong> Projects often add Arabic RTL layouts, local
                payment gateways (PayTabs, Telr, Tap, Mada in Saudi Arabia), VAT-compliant invoices and, in Saudi Arabia,
                ZATCA e-invoicing integration. Plan for these at the start; retrofitting them costs more.
              </p>
            </div>
            <P>
              <strong className="text-black">Maintenance.</strong> WordPress needs regular core, theme and plugin
              updates, backups and security monitoring, and some premium plugins charge yearly licences. Custom sites need
              fewer routine updates but benefit from a support plan for hosting, dependency updates and new features.
              Ivoniz offers maintenance plans for both.
            </P>
            <InlineCTA
              location="cost_section"
              title="Request a Website Development Quote"
              text="Tell us your pages, features and target market and we'll send a fixed estimate."
              waMessage="Hi Ivoniz, I'd like a website development quote. Here are my pages, features and target market:"
            />

            <Divider />

            {/* SECURITY */}
            <H2 id="security" eyebrow="Risk">Security and scalability</H2>
            <P>
              WordPress is secure when it is maintained. Most WordPress compromises come from outdated plugins, nulled
              themes and weak admin passwords, not from WordPress core. Hardening, a short plugin list, updates and a web
              application firewall close most of that risk.
            </P>
            <P>
              Custom websites have a smaller attack surface because there is no public plugin ecosystem to target.
              Security then depends on the development team: input validation, authentication, dependency updates and
              secure hosting.
            </P>
            <P>
              On scalability, WordPress handles moderate traffic well with caching and good hosting. Very large
              catalogues, many concurrent logged-in users, or complex business logic are where custom architecture pays
              off. If you expect to grow from one market into several, or from a website into a platform, build for
              that from day one.
            </P>
            <div className="flex flex-wrap gap-2 mb-2">
              {["India DPDP Act", "UAE PDPL", "Saudi PDPL", "GDPR"].map((law) => (
                <span key={law} className="text-[12px] font-semibold rounded-full border border-black/12 px-3 py-1.5 text-black/70">{law}</span>
              ))}
            </div>
            <P>
              Data protection rules apply to both platforms. We build consent, data storage and access controls to match
              the markets you serve.
            </P>

            <Divider />

            {/* SMALL BUSINESS */}
            <H2 id="small-business" eyebrow="Small business">Which is better for small businesses?</H2>
            <P>
              For most small businesses, startups, clinics, schools and local retailers, WordPress is the better starting
              point. It launches fast, costs less and your team can update it without a developer.
            </P>
            <p className="font-semibold mb-4">Choose custom development as a small business when:</p>
            <Bullets
              items={[
                "your idea is the product, such as a booking platform, a marketplace or a SaaS tool;",
                "you need integration with existing software (billing, inventory, hospital or student management);",
                "you have already outgrown a WordPress site that is slow or held together by plugins.",
              ]}
            />

            {/* ECOMMERCE */}
            <H2 id="ecommerce" eyebrow="Online stores">Which is better for ecommerce?</H2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl border border-black/8 p-5">
                <p className="font-bold mb-2"><PlatformTag kind="wp" />WooCommerce (WordPress)</p>
                <p className="text-[15px] leading-relaxed text-black/70">
                  Suits stores with up to a few thousand products, standard checkout, and common payment and shipping
                  integrations. A good fit for Kerala retailers moving online and GCC boutiques starting with one market. See our <A href="/woocommerce-website-development">WooCommerce development</A>.
                </p>
              </div>
              <div className="rounded-2xl border border-black/8 p-5">
                <p className="font-bold mb-2"><PlatformTag kind="custom" />Custom ecommerce</p>
                <p className="text-[15px] leading-relaxed text-black/70">
                  Suits wholesale and B2B ordering, multi-vendor marketplaces, multi-country stores with different
                  currencies and languages, subscriptions, ERP-linked inventory, and stores where mobile speed is critical.
                </p>
              </div>
            </div>
            <P>
              A middle path is headless commerce: WordPress or another CMS for content, with a custom fast storefront.
              We&apos;ll tell you honestly if that is overkill for your stage. Learn more about our{" "}
              <A href="/ecommerce-website-development">ecommerce website development</A>.
            </P>
            <InlineCTA
              location="ecommerce_section"
              title="Start Your Ecommerce Project"
              text="Share your product range, markets and payment needs, and we'll recommend WooCommerce or custom."
              waMessage="Hi Ivoniz, I want to start an ecommerce website. Can you help me choose between WooCommerce and custom?"
            />

            <Divider />

            {/* DECISION */}
            <H2 id="decision" eyebrow="Decide">Which solution is right for your business?</H2>
            <P>Use this quick guide, or take the 60-second check below.</P>
            <div className="rounded-2xl border border-black/8 overflow-hidden mb-10">
              <table className="w-full text-left text-[14.5px]">
                <thead>
                  <tr className="bg-black/[0.03] text-[12px] uppercase tracking-wide text-black/50">
                    <th className="px-5 py-3 font-semibold">If you…</th>
                    <th className="px-5 py-3 font-semibold w-[38%]">Choose</th>
                  </tr>
                </thead>
                <tbody>
                  {DECISION.map(([ifYou, choose, kind]) => (
                    <tr key={ifYou} className="border-t border-black/6">
                      <td className="px-5 py-4 text-black/75">{ifYou}</td>
                      <td className="px-5 py-4 font-semibold"><PlatformTag kind={kind} />{choose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PlatformQuiz />

            <Divider />

            {/* WHY IVONIZ */}
            <H2 id="why-ivoniz" eyebrow="About us">Why businesses choose Ivoniz</H2>
            <P>
              Ivoniz is a web development and digital solutions company headquartered in Kozhikode (Calicut), Kerala,
              working with clients across India, the GCC and Africa. We build WordPress websites, custom websites and web
              applications, ecommerce stores and <A href="/#our-services">AI integration for websites</A>, so our advice
              is not tied to one platform.
            </P>
            <Bullets
              items={[
                "Both WordPress and custom (React, Next.js, Node.js, MERN) under one team",
                "SEO, speed and mobile performance built in at launch",
                "English and Arabic (RTL) builds for GCC businesses",
                "Clear fixed estimates and a named project contact",
                "Remote delivery for international clients, with calls in your time zone",
              ]}
            />
            <div className="flex items-center justify-between gap-4 mt-10 mb-5">
              <p className="font-bold text-[18px]">Recent websites we&apos;ve built</p>
              <Link href="/works" className="text-[14px] font-semibold text-black/60 hover:text-black inline-flex items-center gap-1.5">
                Our recent projects <FaArrowRight aria-hidden="true" className="text-[11px]" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {PROJECTS.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/8">
                    <Image src={p.image} alt={`${p.title} website built by Ivoniz`} fill sizes="(max-width: 640px) 100vw, 250px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <p className="mt-3 text-[14px] font-semibold">{p.title}</p>
                  <p className="text-[12.5px] text-black/50">{p.category}</p>
                </a>
              ))}
            </div>

            <Divider />

            {/* FAQ */}
            <H2 id="faq" eyebrow="FAQ">Frequently asked questions</H2>
            <div className="divide-y divide-black/8 border-y border-black/8">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-[16.5px] font-semibold leading-snug">{f.q}</h3>
                    <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full border border-black/15 flex items-center justify-center text-[16px] leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-[15.5px] leading-[1.75] text-black/65 pr-10">{f.a}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </div>

      {/* ── CLOSING CTA ── */}
      <section className="relative bg-black text-white px-4 sm:px-6 lg:px-10 xl:px-16 py-20 sm:py-28 overflow-hidden">
        <div className="absolute left-[10%] top-0 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: WP }} aria-hidden="true" />
        <div className="absolute right-[10%] bottom-0 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: CUSTOM }} aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6"><Legend dark /></div>
          <h2 className="font-bold leading-[1.1] tracking-tight mb-5" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
            Not sure which is right for you? Let&apos;s work it out together.
          </h2>
          <p className="text-white/65 text-[17px] leading-relaxed mb-9">
            Tell us what your website needs to do, who it&apos;s for and which markets you serve. Our development team
            will recommend WordPress or custom, explain why, and send a clear estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3">
            <EstimateButton dark location="closing" />
            <WhatsAppButton dark location="closing" label="Talk to Our Development Team on WhatsApp" />
          </div>
          <p className="mt-6 text-[13px] text-white/45">
            No obligation. Or <Link href="/contact" className="underline underline-offset-4 hover:text-white">contact our team</Link> directly.
          </p>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
