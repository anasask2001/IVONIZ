import Link from "next/link";
import {
  FaWhatsapp, FaMapMarkedAlt, FaBullhorn, FaStar, FaListUl, FaLaptopCode, FaLanguage, FaCodeBranch, FaChartLine,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt, FaBan,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { LOCAL_SEO_PACKAGES, GBP_SETUP_PRICE } from "@/components/ecommerce/costs";
import LocalSeoAuditForm from "@/components/marketing/LocalSeoAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/local-seo-services — owns "local seo services" (1,900/mo, SD 29, $1.95),
   "seo services near me" (1,900), Google Business Profile optimisation,
   Google Maps / "near me" ranking and multi-location SEO
   (Ubersuggest India db, 25 Nov 2026). Kerala geo volumes not yet checked.
   /digital-marketing/seo-services keeps the broad terms (seo company in calicut, technical, AI).
   Breadcrumb: Home › SEO Services › Local SEO Services.
   Prices not fixed → "Price on request" (costs.js: LOCAL_SEO_PACKAGES, GBP_SETUP_PRICE).
   TODO: add 2–3 verified local case studies with GBP Insights screenshots.
   Never offer fake / bought reviews.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/local-seo-services";
const TITLE = "Local SEO Services in Calicut, Kerala | Google Maps – Ivoniz LLP";
const DESCRIPTION =
  "Local SEO services in Calicut, Kerala. Rank in Google Maps and “near me” searches with Google Business Profile optimisation, reviews and citations. Free audit.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Local SEO & Google Business Profile Services | Calicut",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Business ranking in the Google Maps top 3 for a local search in Calicut" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Google Business Profile Services | Calicut",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  rank: "Hi Ivoniz, can you check where my business ranks on Google Maps? My Google Maps link: ___",
  audit: "Hi Ivoniz, I'd like a free local SEO audit. Business name: ___ Town: ___",
};

const FACTORS = [
  ["Google Business Profile", "How complete, accurate and active your profile is: categories, services, hours, photos and posts."],
  ["Reviews", "How many genuine reviews you have, how recent they are, and whether you reply to them."],
  ["Consistent business details", "The same name, address and phone number on your website and every directory that lists you."],
];

const SERVICES = [
  { Icon: FaMapMarkedAlt, title: "Google Business Profile optimisation", text: "Correct categories, services, description, hours, photos, products and attributes; verification help for new or suspended profiles." },
  { Icon: FaBullhorn, title: "Weekly GBP posts", text: "Offers, updates and photos in English and Malayalam to keep your profile active." },
  { Icon: FaStar, title: "Review growth and management", text: "A simple review request system (QR codes, WhatsApp links) and replies to every review. Only real customer reviews, never fake ones." },
  { Icon: FaListUl, title: "Local citations", text: "Consistent name, address and phone on Justdial, Sulekha, IndiaMart, Bing Places, Apple Maps and industry directories." },
  { Icon: FaLaptopCode, title: "Local website SEO", text: "Location pages, local schema, an embedded map and your address and phone on every page." },
  { Icon: FaLanguage, title: "Malayalam and voice search", text: "Keywords and content for how Kerala customers actually search, including mixed English–Malayalam queries." },
  { Icon: FaCodeBranch, title: "Multi-location SEO", text: "Separate profiles and pages for each branch across Kerala." },
  { Icon: FaChartLine, title: "Monthly local report", text: "Calls, direction requests, website clicks and map rankings by area." },
];

const WHO = [
  ["Clinics, dentists, hospitals and pharmacies", "Appointment and “near me” searches."],
  ["Restaurants, cafes, bakeries and hotels", "Food, stay and “open now” searches in Maps."],
  ["Retail shops, jewellery, textiles and furniture", "Showroom visits and festive-season searches."],
  ["Schools, colleges, coaching and training centres", "Admission searches by area."],
  ["Builders, interior designers and real estate", "Project and locality searches."],
  ["Salons, gyms and service businesses", "Repairs, cleaning, travel agencies and more."],
  ["Businesses with more than one branch", "One plan, a profile and page for every location."],
];

const PROCESS = [
  { title: "Free local SEO audit", text: "Where you appear on Google Maps today, compared with your top 3 local competitors." },
  { title: "Fix the foundations", text: "Google Business Profile, categories, business details and website basics." },
  { title: "Build trust", text: "Citations on Kerala and Indian directories, and a review system." },
  { title: "Stay active", text: "Weekly posts, photos and review replies." },
  { title: "Expand", text: "Location pages and keywords for nearby towns." },
  { title: "Report", text: "Monthly calls, directions and ranking changes." },
];

const FAQS = [
  { q: "What are local SEO services?", a: "Local SEO services help your business appear in Google Maps and local search results when people nearby search for what you offer, mainly through Google Business Profile optimisation, reviews, citations and local website pages." },
  { q: "How long does local SEO take?", a: "Most businesses see more calls and map views within 30 to 90 days. Competitive categories in big towns can take longer." },
  { q: "How much do local SEO services cost in Calicut?", a: "It depends on your category, your town and the number of branches. A single shop or clinic needs less work than a multi-branch chain. We recommend a package after a free local SEO audit." },
  { q: "Can you get my business into the Google Maps top 3?", a: "We can't guarantee positions because Google decides them, but we work on the three factors Google uses: profile completeness, reviews and consistent business information. Most clients move up clearly within a few months." },
  { q: "Do you create fake reviews?", a: "No. Fake reviews break Google's rules and can get your profile suspended. We set up simple ways for real customers to leave reviews." },
  { q: "My Google Business Profile is suspended or not verified. Can you help?", a: "Yes. We help with verification and reinstatement requests, following Google's guidelines." },
  { q: "Do you do local SEO for multiple branches?", a: "Yes. We manage separate profiles, location pages and reports for each branch." },
  { q: "Do I need a website for local SEO?", a: "A Google Business Profile alone can bring calls, but a fast website with location pages ranks better and converts more visitors. We can build or fix it." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Local SEO Services",
      serviceType: "Local search engine optimisation",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "City", name: "Malappuram" },
        { "@type": "City", name: "Kochi" },
        { "@type": "State", name: "Kerala" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Local SEO services",
        itemListElement: ["Google Business Profile optimisation", "Local citation building", "Review management", "Multi-location SEO"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Local SEO Services in Calicut, Kerala",
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
        { "@type": "ListItem", position: 2, name: "Digital Marketing", item: "https://ivoniz.com/digital-marketing" },
        { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://ivoniz.com/digital-marketing/seo-services" },
        { "@type": "ListItem", position: 4, name: "Local SEO Services", item: PAGE_URL },
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

const Check = ({ children }) => (
  <li className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/55" />{children}</li>
);

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function LocalSeoServicesPage() {
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
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "SEO Services", href: "/digital-marketing/seo-services" },
              { label: "Local SEO Services", href: "/digital-marketing/seo-services/local-seo-services" },
            ]}
          />
          <div className="mt-8"><Label>Local SEO Services</Label></div>
          <HeroTitle outline="Get Found on Google Maps">Local SEO Services in Calicut:</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                When someone in Kozhikode searches &ldquo;dentist near me&rdquo;, &ldquo;best biryani in Calicut&rdquo; or
                &ldquo;interior designer Kerala&rdquo;, Google shows three businesses on a map before any website.
                Ivoniz&apos;s local SEO services put your business in those three spots, so you get more calls, WhatsApp
                messages and direction requests from customers nearby. We optimise your Google Business Profile, build
                trusted local listings, grow your reviews and make your website rank for your town.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">Free local SEO audit · Google Business Profile setup and recovery · monthly packages</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free Local SEO Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.rank)} external event="whatsapp_click" label="Check My Google Ranking" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2">
              <FaStar aria-hidden="true" className="text-white/55" />
              <a href={organizationSchema.hasMap} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-white/20 hover:text-white">
                See our own Google Business Profile<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li className="flex items-center gap-2"><FaBan aria-hidden="true" className="text-white/55" /> Real reviews only, never fake</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Calicut team at HiLITE Business Park</li>
          </ul>
        </div>
      </section>

      {/* ── WHAT IS LOCAL SEO ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>What is local SEO?</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Local SEO is the work of making your business appear when people nearby search on Google or Google Maps.
              It focuses on the map pack (the three map results at the top of local searches), your Google Business
              Profile, and local results on your website. For a shop, clinic or restaurant, the map pack is often where
              most new customers find you, and a strong profile brings calls and visits even before anyone opens your
              website.
            </p>
            <p className="mt-4 text-[16px] text-black/65 leading-relaxed">
              Local SEO is one part of our wider <Link href="/digital-marketing/seo-services" className={LINK_DARK}>SEO company in Calicut</Link> service,
              which also covers technical, content and AI SEO.
            </p>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.18em] uppercase text-black/55">Google ranks local businesses on</h3>
            <ol className="mt-5 grid gap-3">
              {FACTORS.map(([t, d], i) => (
                <li key={t} className="rounded-2xl bg-white border border-black/10 p-5 flex gap-5">
                  <span className="text-[13px] text-black/60 tabular-nums pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[16px] font-semibold text-black">{t}</span>
                    <span className="block mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our local SEO services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Google Business Profile optimisation is the core of the work. Around it we build the reviews, listings and
              website pages that Google Maps SEO depends on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[230px]">
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

      {/* ── GBP + REVIEWS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="google-business-profile" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkedAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Google Business Profile and Google Maps SEO</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Your Google Business Profile is the listing that appears in Maps and the map pack. Most Kerala profiles we
              see have the wrong primary category, missing services, old photos and no posts. Our Google My Business SEO
              services fix every field, add your products and services, and keep the profile active with weekly posts, so
              Google sees a real, busy business. If your profile is new, unverified or suspended, we help you through
              verification or reinstatement, following Google&apos;s guidelines.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              <Check>Primary and secondary categories that match your searches</Check>
              <Check>Services, products, photos and opening hours kept current</Check>
              <Check>Posts in English and Malayalam every week</Check>
            </ul>
          </article>
          <article id="reviews" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaStar aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Reviews and local listings, done the safe way</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Reviews are one of the strongest local signals and the first thing customers read. We give your team a
              QR code review card and a WhatsApp review link to send after every visit or delivery, and we reply to
              every review, in English or Malayalam. We never buy or write fake reviews: they break Google&apos;s rules
              and can get your profile suspended. Alongside reviews, we list your business with the same details on
              the directories Kerala customers and Google both trust, as part of our{" "}
              <Link href="/digital-marketing/seo-services/off-page-seo-services" className={LINK}>off-page SEO</Link> work.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              <Check>QR code and WhatsApp review requests</Check>
              <Check>Replies to every review, good or bad</Check>
              <Check>Justdial, Sulekha, IndiaMart, Bing Places and Apple Maps</Check>
            </ul>
          </article>
        </div>
      </section>

      {/* ── WHO NEEDS LOCAL SEO ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Who It&apos;s For</Label>
            <Heading dark={false}>Who needs local SEO?</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Any business that wants calls and walk-ins from its own town. No website yet? Start with a fast{" "}
              <Link href="/website-development/static-website-development" className={LINK_DARK}>static website</Link> and a strong Google profile.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {WHO.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <dt className="text-[16px] font-semibold text-black">{t}</dt>
                <dd className="mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">How our local SEO works</Heading>
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

      {/* ── PACKAGES ── */}
      <section id="packages" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">Local SEO packages for small business</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            Affordable local SEO services that grow with you, from a single clinic to a chain of showrooms.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {LOCAL_SEO_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className={`mt-2 text-[14px] ${i === 1 ? "text-black/60" : "text-white/55"}`}>Best for: {p.best}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {p.price ? <>From {p.price}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / {p.unit}</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} local SEO package. Can you share the price?`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`local_seo_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            {GBP_SETUP_PRICE
              ? <>One-time Google Business Profile setup or recovery: {GBP_SETUP_PRICE}. </>
              : <>One-time Google Business Profile setup or recovery is also available on its own. </>}
            The first local SEO audit is free.
          </p>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Free Local SEO Audit" location="packages" event="audit_click" />
          </div>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for local SEO</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Local SEO works best alongside ads and social media. See our full <Link href="/digital-marketing" className={LINK}>digital marketing agency in Calicut</Link> services.
            </p>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Calicut-based team at HiLITE Business Park; we know Kerala search habits",
              "Malayalam and English content and review replies",
              <>Website fixes in-house: local pages, schema and speed by our <Link key="wd" href="/website-development" className={LINK}>website development</Link> team</>,
              "Real reviews only: safe, policy-compliant methods",
              "Clear monthly report on calls and directions, not just rankings",
            ].map((t, i) => (
              <li key={i} className="flex items-baseline gap-6 border-b border-white/10 py-6">
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
            <h2 className="text-white" style={h2Style}>Local SEO across Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              From Kozhikode (Calicut) we run local SEO for businesses across Kerala, including Malappuram, Kochi,
              Thrissur, Kannur, Wayanad and Kasaragod, so you appear when customers in your town search. For businesses
              selling beyond one town, we also offer local SEO services across India.
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
              <PillLink href={waLink(WA.rank)} external solid event="whatsapp_click" label="Check How You Rank on Google Maps" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Multi-Branch</Label>
            <h2 className="text-white" style={h2Style}>One plan for every branch</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Chains with branches across Kozhikode, Malappuram and Kochi often have duplicate, unverified or
              out-of-date profiles. We clean them up, give every branch its own verified profile and location page,
              and report calls and directions for each branch in one monthly report.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80">
              <Check>A verified Google profile for every branch</Check>
              <Check>A location page on your website for each town</Check>
              <Check>Branch-by-branch calls, directions and rankings</Check>
            </ul>
          </article>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Local SEO FAQs</Heading>
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
            <Label>Free Local SEO Audit</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              See how you rank on Google Maps, <span style={OUTLINE}>free</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              We&apos;ll check where you appear for your top searches across your town, compare you with your top 3
              local competitors, and send a short fix list.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.rank)} external event="whatsapp_click" label="Send your Maps link on WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly. Need a full-site check too? See our{" "}
              <Link href="/digital-marketing/seo-services/seo-audit-services" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">SEO audit services</Link>.
            </p>
          </div>
          <LocalSeoAuditForm />
        </div>
      </section>

      <RelatedReading slugs={["local-seo-kerala-guide","google-business-profile-not-showing"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Local Audit" message={WA.audit} />
    </main>
  );
}
