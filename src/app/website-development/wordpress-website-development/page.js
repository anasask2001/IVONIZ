import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaMobileAlt, FaTachometerAlt, FaSearch, FaEnvelopeOpenText, FaLock, FaChartLine,
  FaChalkboardTeacher, FaLifeRing, FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { WP_PACKAGES, WP_DUBAI_RANGE } from "@/components/ecommerce/costs";
import WordPressQuoteForm from "@/components/wordpress/WordPressQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /website-development/wordpress-website-development — owns WordPress business-website and
   WordPress-company terms (SEO brief, 23 Nov 2026, Ubersuggest data):
   "wordpress development company" (880/mo IN), "wordpress website development"
   (720), the hire cluster (~2,440), cost-in-India (~310), and
   "wordpress development company dubai" (140, high CPC).
   Does NOT target: WooCommerce (/website-development/ecommerce-website-development/woocommerce-website-development), platform
   comparison (/website-development/custom-website-vs-wordpress), generic "website development
   company" (/website-development), or the job-seeker term "wordpress developer".
   Two lead paths: website quote vs hire a developer (form pre-selects via hash).
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/wordpress-website-development";
const TITLE = "WordPress Development Company in India & Dubai | Ivoniz LLP";
const DESCRIPTION =
  "WordPress website development company for business websites in India and Dubai. Fast, SEO-ready sites, fixed quotes, or hire a WordPress developer. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "WordPress Website Development Company | India & Dubai",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "WordPress business website built by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Website Development Company | India & Dubai",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  quote: "Hi Ivoniz, I'd like a quote for a WordPress website for my business.",
  talk: "Hi Ivoniz, I'd like to talk to a WordPress developer about my website.",
  hire: "Hi Ivoniz, I'd like to hire a WordPress developer for ongoing work.",
  agency: "Hi Ivoniz, we're an agency looking for white-label WordPress development support.",
  dubai: "Hi Ivoniz, I'm in the UAE and need a WordPress website (English / Arabic). Can we talk in Gulf time?",
  kerala: "Hi Ivoniz, I'm in Kerala and need a WordPress website. Can I meet your team?",
};

const SERVICES = [
  { title: "Business and corporate websites", text: "Company profiles, service pages, team, careers and contact, built to generate enquiries." },
  { title: "Custom WordPress theme development", text: "A theme designed for your brand, without heavy page builders, so pages load fast." },
  { title: "Landing pages", text: "Campaign and lead-generation pages connected to your forms, WhatsApp and CRM." },
  { title: "Blog and content websites", text: "News, articles and resources with a clean publishing workflow." },
  { title: "WordPress redesign", text: "Rebuild an old or slow site while keeping your URLs and Google rankings." },
  { title: "Plugin customization and development", text: "Custom features when existing plugins don't fit." },
  { title: "Multilingual WordPress sites", text: "English, Malayalam, Arabic (RTL) and other languages with correct hreflang tags." },
  {
    title: "Online stores",
    text: <>Selling online? See our <Link href="/website-development/ecommerce-website-development/woocommerce-website-development" className={LINK}>WooCommerce development services</Link>.</>,
  },
];

const WHY_WP = [
  ["Easy to manage.", "Update text, images, blogs and pages from a familiar dashboard."],
  ["Affordable.", "Lower build cost than a fully custom website, with no licence fees for WordPress itself."],
  ["SEO-friendly.", "Clean URLs, fast pages and plugins like Rank Math or Yoast make on-page SEO simple."],
  ["Flexible.", "Add forms, booking, multilingual content or a store later as you grow."],
  ["You own it.", "Open-source software on your hosting; no platform lock-in."],
];

/* TODO before launch: confirm engagement models and add starting rates. */
const ENGAGEMENTS = [
  { model: "Fixed-price project", best: "A new website or redesign with clear scope" },
  { model: "Monthly retainer (set hours)", best: "Regular updates, new pages, SEO fixes" },
  { model: "Dedicated developer", best: "Agencies and companies with continuous WordPress work" },
];

const INCLUDES = [
  { Icon: FaMobileAlt, t: "Mobile-first, responsive design" },
  { Icon: FaTachometerAlt, t: <>Lightweight theme and minimal plugins, Core Web Vitals checked. Slow existing site? See <Link href="/digital-marketing/seo-services/technical-seo-services" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">website speed optimisation</Link></> },
  { Icon: FaSearch, t: <>On-page SEO setup: titles, meta, schema, sitemap, clean URLs. Existing site? See <Link href="/digital-marketing/seo-services/on-page-seo-services" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">on-page SEO for WordPress</Link></> },
  { Icon: FaEnvelopeOpenText, t: "Contact forms, WhatsApp and call buttons linked to email or CRM" },
  { Icon: FaLock, t: "SSL, security hardening, spam protection and backups" },
  { Icon: FaChartLine, t: "Google Analytics 4 and Search Console setup" },
  { Icon: FaChalkboardTeacher, t: "Admin training and a simple how-to guide" },
  { Icon: FaLifeRing, t: "Post-launch support" },
];

const PROCESS = [
  { title: "Discovery", text: "Goals, audience, pages and must-have features." },
  { title: "Sitemap and wireframes", text: "Page structure planned for SEO and conversions." },
  { title: "Design", text: "Home and key page designs for your approval." },
  { title: "Development", text: "Theme build, content entry and plugin setup on a staging link." },
  { title: "Testing and SEO", text: "Speed, devices, forms, redirects and tracking." },
  { title: "Launch and training", text: "Go live, admin training and support." },
];

const [STARTER, CORPORATE] = WP_PACKAGES;

const FAQS = [
  { q: "How much does WordPress website development cost in India?", a: `A starter WordPress business website typically costs ${STARTER.inr}, and a corporate site with custom design costs ${CORPORATE.inr} or more, depending on pages and features.` },
  { q: "How much does a WordPress website cost in Dubai?", a: `A bilingual WordPress business website in Dubai typically costs ${WP_DUBAI_RANGE}, depending on pages, Arabic content and integrations.` },
  { q: "Can I hire a dedicated WordPress developer?", a: "Yes. You can hire an Ivoniz WordPress developer for a fixed project, a monthly retainer, or as a dedicated developer for ongoing work." },
  { q: "How long does it take to build a WordPress website?", a: "A starter business website takes 2 to 3 weeks, and larger corporate sites take 3 to 6 weeks." },
  { q: "Will I be able to update the website myself?", a: "Yes. You can edit text, images, pages and blog posts from the WordPress dashboard, and we train your team at launch." },
  { q: "Is a WordPress website good for SEO?", a: "Yes. A well-built WordPress site with a lightweight theme, fast hosting and an SEO plugin gives Google everything it needs to rank your pages." },
  { q: "Do you redesign existing WordPress websites?", a: "Yes. We redesign slow or outdated WordPress sites and keep your URLs or set up 301 redirects so you don't lose rankings." },
  { q: "Do you provide WordPress maintenance?", a: "Yes. Monthly plans cover core, theme and plugin updates, backups, security monitoring and small content changes." },
  { q: "Can you build an Arabic WordPress website?", a: "Yes. We build English and Arabic WordPress sites with full right-to-left layouts for businesses in the UAE and GCC." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "WordPress Website Development",
      serviceType: "WordPress website development",
      provider: { "@id": ORG_ID },
      about: { "@type": "SoftwareApplication", name: "WordPress", applicationCategory: "Content management system" },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Kerala" },
        { "@type": "City", name: "Dubai" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Oman" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "WordPress services",
        itemListElement: [
          "WordPress business website development",
          "Custom WordPress theme development",
          "WordPress redesign",
          "Hire a dedicated WordPress developer",
          "WordPress maintenance",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "WordPress Development Company in India & Dubai",
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
        { "@type": "ListItem", position: 3, name: "WordPress Website Development", item: PAGE_URL },
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
export default function WordPressWebsiteDevelopmentPage() {
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
              { label: "WordPress Website Development", href: "/website-development/wordpress-website-development" },
            ]}
          />
          <div className="mt-8"><Label>WordPress Development Company</Label></div>
          <HeroTitle outline="Easy-to-Manage Business Sites">WordPress Website Development Company for Fast,</HeroTitle>

          <p className="mt-10 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
            Ivoniz is a WordPress development company that builds fast, secure and SEO-ready business websites for
            companies in India, Dubai and the wider GCC. From a 5-page company site to a 100-page corporate website, our
            WordPress website development team designs, develops and launches sites your team can update without writing
            code. Part of our <Link href="/website-development" className={LINK}>website development services</Link>.
          </p>

          {/* Two buyer paths: a website vs a developer */}
          <div className="mt-12 grid md:grid-cols-2 gap-3 max-w-[1100px]">
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">Need a website</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Build or redesign my WordPress site</p>
              <p className="mt-2 text-[14.5px] text-white/55 leading-relaxed flex-1">Design, development and launch, with a fixed quote and timeline.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-website" solid label="Get a WordPress Website Quote" location="hero_website" />
                <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="Talk to a WordPress Developer" location="hero_website" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">Need a developer</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Hire a WordPress developer</p>
              <p className="mt-2 text-[14.5px] text-white/55 leading-relaxed flex-1">By project, monthly retainer or dedicated developer. White-label support for agencies.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-hire" solid label="Hire a WordPress Developer" location="hero_hire" />
                <PillLink href={waLink(WA.hire)} external event="whatsapp_click" label="WhatsApp" location="hero_hire" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
          </div>

          {/* Trust strip — verifiable facts only */}
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/55">
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Office at HiLITE Business Park, Kozhikode</li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> <Link href="/clients" className="hover:text-white underline underline-offset-4 decoration-white/20">Live client websites in India, UAE, Saudi Arabia and Qatar</Link></li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> Fixed quotes, one point of contact</li>
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>WordPress website development services</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              Everything from a first company website to a multilingual corporate site, built on WordPress and handed
              over so your team can run it.
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

      {/* ── WHY WORDPRESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Why WordPress</Label>
            <Heading dark={false}>Why businesses choose WordPress</Heading>
            <div className="mt-8 rounded-2xl bg-black text-white p-6">
              <p className="text-[15px] leading-relaxed text-white/75">
                Need something WordPress can&apos;t do well, like a customer portal or a complex web app? Read our{" "}
                <Link href="/website-development/custom-website-vs-wordpress" className={LINK}>custom website vs WordPress</Link> comparison, or
                see <Link href="/website-development/web-portal-development" className={LINK}>web portal development</Link>.
              </p>
            </div>
          </div>
          <ul className="border-t border-black/10">
            {WHY_WP.map(([b, rest]) => (
              <li key={b} className="flex gap-4 border-b border-black/10 py-5">
                <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[13px] text-black/60" />
                <p className="text-[16px] leading-relaxed text-black/65"><strong className="font-semibold text-black">{b}</strong> {rest}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HIRE A DEVELOPER ── */}
      <section id="hire" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Hire a Developer</Label>
            <Heading>Hire a WordPress developer</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Need ongoing WordPress help rather than a single project? Hire a dedicated WordPress developer from Ivoniz
              by the hour, by the month, or for a fixed project. It suits agencies that need white-label support and
              businesses with regular updates, new pages or plugin work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href="#quote-hire" solid label="Hire a WordPress Developer" location="hire_section" />
              <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="White-label support for agencies" location="hire_agency" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
          <div className="overflow-hidden" style={GLASS}>
            <table className="w-full text-left">
              <caption className="sr-only">Ways to hire a WordPress developer from Ivoniz</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Engagement</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Best for</th>
                </tr>
              </thead>
              <tbody>
                {ENGAGEMENTS.map((e) => (
                  <tr key={e.model} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 text-[16px] text-white font-normal align-top" style={{ fontFamily: OPEN_SANS }}>{e.model}</th>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 leading-relaxed">{e.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Included</Label>
            <Heading>What every Ivoniz WordPress website includes</Heading>
            <PetalSketch className="hidden lg:block w-[200px] mt-12" />
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {INCLUDES.map(({ Icon, t }, i) => (
              <li key={i} className="flex items-center gap-4 px-5 py-5" style={GLASS}>
                <span className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <span className="text-[15px] text-white/80 leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COST ── */}
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">WordPress website development cost in India</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Typical WordPress website development cost in India, in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Website type</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Typical cost (INR)</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {WP_PACKAGES.map((p) => (
                  <tr key={p.id} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 align-top font-normal">
                      <span className="block text-[16px] text-white" style={{ fontFamily: OPEN_SANS }}>{p.label}</span>
                      <span className="block mt-1 text-[13px] text-white/55">{p.note}</span>
                    </th>
                    <td className="px-6 py-5 text-[17px] text-white tabular-nums whitespace-nowrap align-top" style={{ fontFamily: OPEN_SANS }}>{p.inr}</td>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 whitespace-nowrap align-top">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-white/55 max-w-[820px] leading-relaxed">
            Indicative ranges. Cost depends on number of pages, custom design, content writing, integrations and
            languages. Hosting, domain and premium plugin licences are separate. For UAE and GCC projects, we quote in AED.
            Need just a few pages on a tight budget? A{" "}
            <Link href="/website-development/static-website-development" className={LINK}>static website</Link> is the lower-budget option.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PillLink href="#quote-website" solid label="Get a WordPress Website Quote" location="pricing" />
            <PillLink href="#quote-maintenance" label="Ask about maintenance plans" location="pricing_maintenance" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>Our WordPress development process</Heading>
            </div>
            <p className="text-white/55 text-[15px] max-w-[420px] leading-relaxed">
              Typical timeline: 2–3 weeks for a starter business site; 3–6 weeks for corporate websites.
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

      {/* ── DUBAI / GCC + KERALA ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Dubai and GCC</Label>
            <h2 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
              WordPress development for Dubai and GCC businesses
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65 flex-1">
              We build bilingual English–Arabic WordPress websites with RTL layouts, hosting close to Gulf visitors,
              WhatsApp Business links and UAE payment gateways, for businesses in Dubai, Abu Dhabi, Saudi Arabia, Qatar
              and Oman. We have no office in the Gulf: we work remotely from Kozhikode, quote in AED (a bilingual
              business site typically costs {WP_DUBAI_RANGE}) and schedule calls in Gulf time.
            </p>
            <div className="mt-8">
              <PillLink href={waLink(WA.dubai)} external solid event="whatsapp_click" label="Talk to Our WordPress Team in Gulf Time" location="gcc_block" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>

          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
              WordPress developers in Kerala
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Our WordPress developers work from HiLITE Business Park, Kozhikode (Calicut), and build websites for
              businesses across Kerala, including Kochi, Malappuram and Thrissur. Meet us at the office or work fully
              online.
            </p>
            {/* NAP: keep identical to the Google Business Profile (source: src/lib/schema.js) */}
            <address className="not-italic mt-6 grid gap-3 text-[14.5px] text-white/75 flex-1">
              <span className="flex gap-3">
                <FaMapMarkerAlt aria-hidden="true" className="shrink-0 mt-1 text-white/55" />
                <span>
                  Ivoniz LLP, {ADDRESS.streetAddress},<br />
                  {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India
                </span>
              </span>
              <a href="tel:+919645760023" className="flex items-center gap-3 hover:text-white">
                <FaPhoneAlt aria-hidden="true" className="shrink-0 text-white/55" /> +91 96457 60023
              </a>
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink href={waLink(WA.kerala)} external solid event="whatsapp_click" label="WhatsApp our Kerala team" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz as your WordPress development company</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote-website" label="Start Your WordPress Project" location="why_ivoniz" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/55 hover:text-white">
                See websites we&apos;ve built <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "WordPress, WooCommerce and custom development under one team, so you get honest platform advice",
              "Lightweight builds with fewer plugins and faster pages",
              <>SEO built in at launch, plus <Link key="lseo" href="/digital-marketing/seo-services/local-seo-services" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">local SEO</Link> to get found on Google Maps</>,
              "Fixed quotes and a single point of contact",
              "You own the domain, content and code",
            ].map((t, i) => (
              <li key={i} className="flex items-baseline gap-6 border-b border-white/10 py-6">
                <span className="text-[13px] text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] sm:text-[19px] text-white/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 300 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>WordPress website development FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/55 leading-relaxed">
              Choosing between platforms? See{" "}
              <Link href="/website-development/custom-website-vs-wordpress" className={LINK}>custom website vs WordPress</Link>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + LEAD FORM ── */}
      <section id="quote" className={`relative py-16 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        {/* Hash targets used by CTAs to pre-select the form's "need" */}
        <span id="quote-website" className="absolute top-0" aria-hidden="true" />
        <span id="quote-hire" className="absolute top-0" aria-hidden="true" />
        <span id="quote-redesign" className="absolute top-0" aria-hidden="true" />
        <span id="quote-maintenance" className="absolute top-0" aria-hidden="true" />
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Get a Quote</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get a WordPress website <span style={OUTLINE}>that brings you enquiries</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Tell us about your business, how many pages you need and where your customers are. We&apos;ll send a
              fixed quote and timeline.
            </p>
            <p className="mt-6 text-[14px] text-white/50">
              Prefer to talk?{" "}
              <a href="tel:+919645760023" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">+91 96457 60023</a>
              {" "}or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link>.
            </p>
          </div>
          <WordPressQuoteForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Quote" message={WA.quote} />
    </main>
  );
}
