import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaSearch, FaMapMarkedAlt, FaGoogle, FaInstagram, FaFacebookF, FaPhotoVideo, FaLaptopCode, FaChartLine,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt, FaStar,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { DM_PACKAGES } from "@/components/ecommerce/costs";
import MarketingAuditForm from "@/components/marketing/MarketingAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing — owns "digital marketing agency in Calicut" (1,000/mo,
   SD 27), "digital marketing agency kerala" (590), "digital marketing services"
   (14,800, SD 12), "social media marketing agency kerala" (260) — Ubersuggest
   India db, 25 Nov 2026. No "best" claims in copy.
   Cannibalisation (decided 25 Nov): /digital-marketing/best-digital-marketing-company-in-calicut
   stays and owns "best digital marketing COMPANY in Calicut"; this page uses
   "company in Calicut" once, as a link to it. Kochi page stays for Kochi.
   Package prices not fixed → "Price on request" (DM_PACKAGES in costs.js).
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing";
const TITLE = "Digital Marketing Agency in Calicut, Kerala | Ivoniz LLP";
const DESCRIPTION =
  "Digital marketing agency in Calicut, Kerala. SEO, Google Ads, social media and lead generation that bring real enquiries. See packages and get a free audit.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Digital Marketing Agency in Calicut | SEO, Ads & Social Media",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ivoniz digital marketing team planning campaigns in Calicut" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Calicut | SEO, Ads & Social Media",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  talk: "Hi Ivoniz, I'd like to talk to your marketing team about getting more enquiries for my business.",
  audit: "Hi Ivoniz, I'd like a free digital marketing audit. Business: ___ Website / Instagram: ___",
};

const SERVICES = [
  { id: "seo", Icon: FaSearch, title: "Search engine optimisation (SEO)", text: <>Rank on Google for searches your customers make: local SEO, technical SEO, <Link href="/digital-marketing/seo-services/on-page-seo-services" className={LINK}>on-page optimisation</Link>, content and <Link href="/digital-marketing/seo-services/off-page-seo-services" className={LINK}>link building</Link>. See our <Link href="/digital-marketing/seo-services" className={LINK}>SEO company in Calicut</Link> page, or start with a <Link href="/digital-marketing/seo-services/seo-audit-services" className={LINK}>free SEO audit</Link>.</> },
  { id: "google-business", Icon: FaMapMarkedAlt, title: "Google Business Profile management", text: <>Show up in Google Maps and “near me” searches, with reviews and posts managed for you. See our <Link href="/digital-marketing/seo-services/local-seo-services" className={LINK}>Google Business Profile management</Link> and local SEO services.</> },
  { id: "google-ads", Icon: FaGoogle, title: "Google Ads (PPC)", text: "Search, Performance Max and YouTube ads tracked to calls, WhatsApp messages and form leads." },
  { id: "social-media", Icon: FaInstagram, title: "Social media marketing", text: <>Instagram, Facebook and LinkedIn content, reels and community management. See our <Link href="/digital-marketing/social-media-marketing" className={LINK}>social media marketing agency in Calicut</Link> page, <Link href="/digital-marketing/social-media-marketing/instagram-marketing-services" className={LINK}>Instagram marketing</Link> and <Link href="/digital-marketing/social-media-marketing/social-media-management" className={LINK}>social media management packages</Link>.</> },
  { id: "meta-ads", Icon: FaFacebookF, title: "Meta ads (Facebook and Instagram)", text: <>Lead-generation and sales campaigns with WhatsApp click-to-chat. See <Link href="/digital-marketing/social-media-marketing/social-media-advertising" className={LINK}>social media ads</Link>.</> },
  { id: "content", Icon: FaPhotoVideo, title: "Content and video", text: "Posts, reels, blogs and ad creatives in English and Malayalam." },
  { id: "landing-pages", Icon: FaLaptopCode, title: "Landing pages and websites", text: <>Pages built to convert ad and SEO traffic, by our <Link href="/website-development" className={LINK}>website development</Link> team.</> },
  { id: "tracking", Icon: FaChartLine, title: "Lead tracking and reporting", text: "GA4, call tracking and a simple monthly report showing leads and cost per lead." },
];

const PROCESS = [
  { title: "Free audit", text: "We review your website, Google Business Profile, social pages and competitors." },
  { title: "Lead plan", text: "Which channels, budget and targets make sense for your business." },
  { title: "Set up tracking", text: "Calls, WhatsApp and forms tracked from day one." },
  { title: "Launch", text: "SEO fixes, ad campaigns and content calendar go live." },
  { title: "Optimise weekly", text: "Cut what doesn't bring leads; scale what does." },
  { title: "Monthly report", text: "Leads, cost per lead and next month's plan, in plain language." },
];

const INDUSTRIES = [
  ["Clinics, hospitals and doctors", "Appointment-focused local SEO and ads."],
  ["Schools, colleges and coaching centres", "Admission-season campaigns and lead follow-up."],
  ["Real estate and builders", "Project launches, site-visit leads and NRI targeting."],
  ["Retail, jewellery and textiles", "Footfall, festive campaigns and Instagram shopping."],
  ["Restaurants and hotels", "Google Maps visibility, reviews and reels."],
  ["Ecommerce brands", <>Shopping ads, Meta sales campaigns and SEO for stores built by our <Link key="ec" href="/website-development/ecommerce-website-development" className={LINK_DARK}>ecommerce website development</Link> team.</>],
  ["B2B and manufacturers", "LinkedIn, Google search and export enquiries."],
];

const FAQS = [
  { q: "How much does digital marketing cost in Calicut?", a: "It depends on the channels, how much content you need and how competitive your market is. Our packages are quoted after a free audit, and ad spend is paid directly to Google or Meta, separate from our management fee." },
  { q: "What digital marketing services do you offer?", a: "SEO, Google Business Profile management, Google Ads, Meta (Facebook and Instagram) ads, social media marketing, content and video, landing pages and lead tracking." },
  { q: "How long does it take to see results?", a: "Ads can bring enquiries within days. SEO usually shows clear results in 3 to 6 months, depending on competition and your website's starting point." },
  { q: "Do you guarantee leads or rankings?", a: "No honest agency can guarantee Google rankings. We set clear lead targets, track every enquiry and report cost per lead every month." },
  { q: "Do you work with small businesses?", a: "Yes. Our Local Starter package is built for shops, clinics and service businesses in Kerala that want more calls and walk-ins from Google." },
  { q: "Can you create content in Malayalam?", a: "Yes. We create posts, reels and ads in Malayalam and English for Kerala audiences." },
  { q: "Do you also build websites?", a: "Yes. Ivoniz is a web development and digital marketing agency, so we can fix or build the website your campaigns send traffic to." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Digital Marketing Services",
      serviceType: "Digital marketing",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital marketing services",
        itemListElement: [
          "Search engine optimisation (SEO)",
          "Google Business Profile management",
          "Google Ads management",
          "Social media marketing",
          "Meta ads management",
          "Content and video",
          "Lead tracking and reporting",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Digital Marketing Agency in Calicut, Kerala",
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
        { "@type": "ListItem", position: 2, name: "Digital Marketing", item: PAGE_URL },
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
export default function DigitalMarketingPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Digital Marketing", href: "/digital-marketing" }]} />
          <div className="mt-8"><Label>Digital Marketing Agency</Label></div>
          <HeroTitle outline="That Brings You Real Leads">Digital Marketing Agency in Calicut</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
              Ivoniz is a digital marketing agency in Calicut, Kerala, focused on one thing: more enquiries, calls and
              sales for your business. We combine SEO, Google Ads, social media marketing and conversion-focused
              websites, and we report on leads, not likes. We work with businesses across Kerala and India, from local
              shops and clinics to schools, real estate and ecommerce brands.
            </p>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free Marketing Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="Talk to Our Team" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          {/* Proof strip — verifiable items only until client results are confirmed */}
          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2">
              <FaStar aria-hidden="true" className="text-white/55" />
              <a href={organizationSchema.hasMap} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-white/20 hover:text-white">
                Read our Google reviews<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> Monthly reports on leads and cost per lead</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Team at HiLITE Business Park, Kozhikode</li>
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Digital marketing services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Every channel we run is tracked to real enquiries, so you can see which digital marketing services are
              paying for themselves. As a social media marketing agency in Kerala and a search marketing team, we plan
              the channels together, not in silos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map(({ id, Icon, title, text }) => (
              <div key={title} id={id} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[230px] scroll-mt-24">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-7 text-[18.5px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADS NOT LIKES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Label>Our Approach</Label>
            <Heading>Leads, not likes</Heading>
            <p className="mt-6 text-[16px] text-white/65 leading-relaxed">
              Followers and impressions are easy to grow and hard to bank. We measure what reaches your phone and your
              counter: calls, WhatsApp chats, form enquiries, walk-ins and online orders. Every campaign is set up so
              you can see where each enquiry came from and what it cost.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ["Cost per lead", "What you paid for each enquiry, by channel and campaign."],
              ["Lead source", "Google search, Maps, Instagram, Facebook or your website."],
              ["Calls and WhatsApp", "Tracked clicks and calls, not just form fills."],
              ["Next month's plan", "What we'll cut, what we'll scale, and why."],
            ].map(([t, d]) => (
              <li key={t} className="p-5" style={GLASS}>
                <p className="text-[16.5px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                <p className="mt-1.5 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">How we turn marketing into leads</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9 sm:gap-y-12">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-3 sm:mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(36px,4vw,64px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Industries</Label>
            <Heading dark={false}>Digital marketing for your industry</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              The right channel depends on how your customers decide. A clinic needs Maps and reviews; a builder needs
              site-visit leads; an online store needs shopping ads.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {INDUSTRIES.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <dt className="text-[16px] font-semibold text-black">{t}</dt>
                <dd className="mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── HOW TO CHOOSE AN AGENCY ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Before You Hire</Label>
            <Heading>How to choose a digital marketing agency in Kerala</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              Many agencies promise rankings and followers. Ask these questions before you sign with any digital
              marketing agency in Kerala, including us.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ["Do they report leads or likes?", "Ask to see a sample monthly report. It should show enquiries and cost per lead, not only reach and followers."],
              ["Who owns the ad accounts?", "Your Google Ads, Meta Business and Analytics accounts should be in your name, so you keep the data if you switch."],
              ["Can they fix your website?", "Ads and SEO fail on slow pages. An agency that also builds websites can fix problems without another vendor."],
              ["Do they show real work?", "Look for live client websites, campaigns and reviews you can check yourself, not just logos."],
              ["Do they understand your market?", "Kerala buyers search in English and Malayalam, call more than they fill forms, and use WhatsApp for everything."],
              ["Are fees and ad spend separate?", "Management fees and ad spend should be listed separately, with ad money paid straight to Google or Meta."],
            ].map(([t, d]) => (
              <li key={t} className="p-6" style={GLASS}>
                <p className="text-[16.5px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</p>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">Digital marketing packages</Heading>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {DM_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 sm:p-8 flex flex-col ${i === 2 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 2 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 2 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 2 ? "text-black/70" : "text-white/70"}`}>{p.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {p.price ? <>{p.price}<span className={`text-[14px] ${i === 2 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} digital marketing package. Can you share the price?`)}
                    external
                    solid
                    dark={i !== 2}
                    event="package_click"
                    label="Ask about this package"
                    location={`package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            Ad spend is paid directly to Google or Meta and is separate from management fees. We recommend the right
            package after a free audit.
          </p>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Free Marketing Audit" location="packages" event="audit_click" />
          </div>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why choose Ivoniz as your digital marketing agency</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Comparing a digital marketing company in Calicut?{" "}
              <Link href="/digital-marketing/best-digital-marketing-company-in-calicut" className={LINK}>See how we work with Calicut businesses</Link>.
            </p>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Leads, not vanity metrics: we report enquiries and cost per lead",
              "Marketing and development in one team: we fix your website and landing pages ourselves, with no waiting on another agency",
              "Local team in Calicut: meet us at HiLITE Business Park, Kozhikode",
              "Malayalam and English content for Kerala audiences",
            ].map((t, i) => (
              <li key={t} className="flex items-baseline gap-6 border-b border-white/10 py-6">
                <span className="text-[13px] text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] sm:text-[19px] text-white/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 300 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── KERALA ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[1.1fr_1fr] gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={h2Style}>Digital marketing agency in Calicut, serving all of Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Based in Kozhikode (Calicut), we run digital marketing for businesses across Kerala, including Kochi,
              Malappuram, Thrissur, Kannur and Trivandrum, and for clients across India. Whether you need digital
              marketing services in Kochi, Thrissur or Malappuram, you work with the same team and the same reporting.
              Based in Kochi? See <Link href="/digital-marketing/best-digital-marketing-company-in-kochi" className={LINK}>digital marketing in Kochi</Link>.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-white/65">
              For most Kerala businesses, the fastest wins come from Google Maps. When someone searches for a clinic,
              shop or service &ldquo;near me&rdquo;, Google shows the three best-kept Business Profiles first. We
              complete your profile, add products and services, post updates every week, answer reviews and keep your
              name, address and phone identical everywhere online, so you appear in those local results.
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
              <PillLink href={waLink(WA.talk)} external solid event="whatsapp_click" label="Talk to Our Marketing Team" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Starting Small?</Label>
            <h2 className="text-white" style={h2Style}>A website that converts, then the marketing</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Marketing only works if the page it sends people to turns visits into enquiries. If you don&apos;t have a
              site yet, start with a fast <Link href="/website-development/static-website-development" className={LINK}>static website</Link>, or
              see our <Link href="/website-development" className={LINK}>website development</Link> services.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              {["Click-to-call and WhatsApp buttons on every page", "Fast mobile pages for ad traffic", "Tracking set up before campaigns launch"].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{t}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Digital marketing FAQs</Heading>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-16 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Free Audit</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get a free <span style={OUTLINE}>digital marketing audit</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              We&apos;ll review your website, Google profile, social pages and competitors, and send a short plan
              showing where your next leads can come from.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="Request the audit on WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <MarketingAuditForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Audit" message={WA.audit} />
    </main>
  );
}
