import Link from "next/link";
import {
  FaWhatsapp, FaSearchPlus, FaLink, FaPenNib, FaNewspaper, FaListUl, FaAt, FaUnlink, FaStar, FaShieldAlt, FaFileAlt,
  FaCheck, FaTimes, FaMapMarkerAlt, FaGlobeAsia,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { OFF_PAGE_PACKAGES, OFF_PAGE_MIN_TERM } from "@/components/ecommerce/costs";
import BacklinkGapForm from "@/components/marketing/BacklinkGapForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/off-page-seo-services — co-targets
   "link building services" (1,300/mo, SD 24, $1.95) and "off page seo
   services" (260/mo, SD 9), plus link building services india (260),
   seo link building (140), white hat (40), packages (30), local link
   building (20), white label (90) — Ubersuggest India db, 25 Nov 2026.
   UAE section: off page seo services (50) / link building services (20).
   "seo services dubai" (1,300, SD 9, $27 CPC) belongs to a future Dubai page.
   Learner terms (techniques, meaning, examples, sites list) → future blog post.
   Breadcrumb: Home › Digital Marketing › SEO Services › Off-Page SEO Services.
   Prices not fixed → "Price on request" (costs.js: OFF_PAGE_PACKAGES, OFF_PAGE_MIN_TERM).
   No "best" / "#1" claims, no link-count stats without client examples.
   TODO: sample monthly link report + 2–3 verified results (with permission).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/off-page-seo-services";
const TITLE = "Off-Page SEO & Link Building in Kerala & UAE | Ivoniz LLP";
const DESCRIPTION =
  "Off-page SEO and link building services in Kerala and the UAE: white-hat backlinks, digital PR and citations, with a monthly link report. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Off-Page SEO & Link Building Services | Kerala, India & UAE",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Off-page SEO and link building services by Ivoniz, Calicut" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-Page SEO & Link Building Services | Kerala, India & UAE",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  report: "Hi Ivoniz, I'd like a free backlink gap report. My website: ___ Competitors: ___",
  uae: "Hi Ivoniz, I'm in the UAE / GCC and want to discuss off-page SEO and link building. Website: ___",
  agency: "Hi Ivoniz, we're an agency and want to discuss white-label link building.",
};

const INCLUDED = [
  { Icon: FaSearchPlus, title: "Competitor backlink analysis", text: "We find the links your top competitors have and you don't." },
  { Icon: FaLink, title: "Link building and outreach", text: "Links from relevant business, industry and news websites in India and the GCC." },
  { Icon: FaPenNib, title: "Guest articles", text: "Useful articles published on real sites in your industry, with a link back to you." },
  { Icon: FaNewspaper, title: "Digital PR", text: "Stories, data and expert quotes that earn coverage from online publications." },
  { Icon: FaListUl, title: "Business citations and directories", text: "Consistent listings on trusted Indian and UAE business directories." },
  { Icon: FaAt, title: "Brand mention recovery", text: "Turning unlinked mentions of your business into links." },
  { Icon: FaUnlink, title: "Broken link building", text: "Replacing dead links on other sites with links to your content." },
  { Icon: FaStar, title: "Review and reputation support", text: <>A simple system to collect Google reviews, working with our <Link href="/digital-marketing/seo-services/local-seo-services" className={LINK}>local SEO services</Link>.</> },
  { Icon: FaShieldAlt, title: "Toxic link check", text: "Finding spammy links pointing to your site and cleaning them up where needed." },
  { Icon: FaFileAlt, title: "Monthly link report", text: "Every new link, the site it's on and its quality." },
];

const NEVER = [
  "Private blog networks (PBNs) or “our network of sites”",
  "Bulk directory or bookmarking submissions",
  "Paid links on irrelevant or spam websites",
  "Comment spam, forum spam or auto-generated links",
];

const COMPARE = [
  ["On-page SEO", "Content, titles, headings, internal links, schema", "On each page of your website", "/digital-marketing/seo-services/on-page-seo-services"],
  ["Off-page SEO", "Backlinks, digital PR, citations, mentions, reviews", "Outside your website", null],
  ["Technical SEO", "Crawling, indexing, speed, Core Web Vitals", "Across your whole website", "/digital-marketing/seo-services/technical-seo-services"],
];

const PROCESS = [
  { title: "Audit", text: "We review your current backlinks, citations and competitors." },
  { title: "Plan", text: "We pick target pages, keywords and the types of sites worth getting links from." },
  { title: "Outreach", text: "We pitch content and stories to relevant website owners and editors." },
  { title: "Publish", text: "Links, guest articles, PR placements and citations go live." },
  { title: "Report", text: "You get a monthly report of every link, plus ranking and traffic changes." },
];

const WHO = [
  ["Websites that are ready but not ranking", "Good pages stuck on page two for lack of authority."],
  ["Companies entering a competitive market", "In Kerala, across India or in the GCC."],
  ["Ecommerce stores", <>Authority for category and product pages, as part of <Link key="ec" href="/digital-marketing/seo-services/ecommerce-seo-services" className={LINK_DARK}>ecommerce SEO</Link>.</>],
  ["New websites", "Trust signals from the start."],
  ["Agencies", "White-label link building for your clients in India and the GCC."],
];

const FAQS = [
  { q: "What is included in off-page SEO services?", a: "Off-page SEO services include link building from relevant websites, digital PR, guest articles, business citations and directory listings, brand mentions, review building and competitor backlink analysis." },
  { q: "Is link building part of off-page SEO?", a: "Yes. Link building is the main part of off-page SEO. Off-page SEO also covers brand mentions, citations, reviews and PR that build trust outside your website." },
  { q: "How much do off-page SEO services cost?", a: "Cost depends on how competitive your keywords are and how many quality links are needed each month. Ivoniz offers monthly packages in rupees for India and in AED for UAE and GCC clients." },
  { q: "How long does off-page SEO take to work?", a: "New links usually take a few weeks to be found by Google. Ranking gains from off-page SEO typically build over three to six months, depending on competition." },
  { q: "Do you work with businesses in Dubai and the GCC?", a: "Yes. Our Calicut team builds links and citations for businesses in the UAE, Saudi Arabia, Qatar and other GCC countries, using UAE and GCC business directories and publications." },
  { q: "Are your backlinks safe?", a: "Yes. We only build links from real, relevant websites, and we never use private blog networks, bulk submissions or spam links. Every link is listed in your monthly report." },
  { q: "Can I see the links you build?", a: "Yes. Your monthly report lists every new link with the page it's on, so you can check each one yourself." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Off-Page SEO and Link Building Services",
      serviceType: "Off-page search engine optimisation and link building",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Off-page SEO services",
        itemListElement: ["Link building and outreach", "Guest articles", "Digital PR", "Business citations", "Competitor backlink analysis", "Toxic link clean-up"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Off-Page SEO & Link Building Services in Kerala & UAE",
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
        { "@type": "ListItem", position: 4, name: "Off-Page SEO Services", item: PAGE_URL },
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

const price = (p) => {
  if (p.inr && p.aed) return `${p.inr} / ${p.aed}`;
  return p.inr || p.aed || null;
};

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function OffPageSeoServicesPage() {
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
              { label: "Off-Page SEO Services", href: "/digital-marketing/seo-services/off-page-seo-services" },
            ]}
          />
          <div className="mt-8"><Label>Off-Page SEO Services</Label></div>
          <HeroTitle outline="Link Building Services">Off-Page SEO and</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz provides off-page SEO and link building services for businesses in Calicut, across Kerala and
                India, and in the UAE and GCC. We earn links from real, relevant websites, get your business listed where
                customers and Google look, and build the trust that helps your pages rank. Every link we build appears in
                your monthly report, so you always know what you are paying for.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">White-hat links only · every link in your monthly report · pricing in ₹ and AED</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free Backlink Gap Report" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.report)} external event="whatsapp_click" label="WhatsApp Us" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaShieldAlt aria-hidden="true" className="text-white/55" /> No PBNs, no bulk submissions</li>
            <li className="flex items-center gap-2"><FaFileAlt aria-hidden="true" className="text-white/55" /> Every live link reported monthly</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Calicut team serving India, UAE and GCC</li>
          </ul>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>Why off-page SEO matters</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Google ranks pages it trusts. A large part of that trust comes from outside your website: other sites
              linking to you, your business appearing in directories and the press, and customers mentioning and
              reviewing you. Two businesses with equally good websites rarely rank the same. The one with stronger, more
              relevant links usually wins.
            </p>
            <p className="mt-4 text-[16px] text-black/65 leading-relaxed">
              If your website is well built but still stuck on page two, off-page SEO is often what&apos;s missing.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-black/10 p-7 sm:p-8">
            <h3 className="text-[13px] font-semibold tracking-[0.18em] uppercase text-black/55">Signals Google reads from outside your site</h3>
            <ul className="mt-5 grid gap-4">
              {[
                ["Links", "Relevant websites linking to your pages, the strongest off-page signal."],
                ["Mentions and PR", "Your brand named in news, industry and partner sites."],
                ["Citations", "Your business listed with the same details on trusted directories."],
                ["Reviews", "Customers talking about you on Google and other platforms."],
              ].map(([t, d]) => (
                <li key={t}>
                  <span className="block text-[16px] font-semibold text-black">{t}</span>
                  <span className="block mt-1 text-[14.5px] text-black/60 leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section id="included" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>What&apos;s Included</Label>
            <Heading>What&apos;s included in our off-page SEO services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              SEO link building services in India and the GCC, done by hand and reported link by link.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
            {INCLUDED.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-6 flex flex-col sm:min-h-[210px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-6 text-[17px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2 text-[13.5px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHITE-HAT: LINKS WE NEVER BUILD ── */}
      <section id="white-hat" className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Our Approach</Label>
            <h2 className="text-white" style={h2Style}>White-hat link building services</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Some cheap link packages can do more harm than good. Bulk links from spam sites can trigger a Google
              penalty that takes months to undo. Every link we build is one you&apos;d be happy for a customer to click,
              and every one is listed in your monthly report so you can check it yourself.
            </p>
            <div className="mt-8"><PillLink href="#quote" solid label="Get a Free Backlink Gap Report" location="white_hat" event="audit_click" /></div>
          </article>
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <h3 className="text-[13px] font-semibold tracking-[0.18em] uppercase text-white/60">Links we never build</h3>
            <ul className="mt-6 grid gap-4 text-[16px] text-white/85">
              {NEVER.map((t) => (
                <li key={t} className="flex gap-3.5">
                  <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center"><FaTimes aria-hidden="true" className="text-[11px] text-white/70" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ── ON-PAGE vs OFF-PAGE vs TECHNICAL ── */}
      <section id="compare" className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>On-page vs off-page vs technical SEO</Heading>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-[15px]">
              <caption className="sr-only">Comparison of on-page, off-page and technical SEO</caption>
              <thead>
                <tr className="border-b border-black/10 text-[12px] uppercase tracking-[0.16em] text-black/60">
                  <th scope="col" className="p-5 font-semibold">Type</th>
                  <th scope="col" className="p-5 font-semibold">What it covers</th>
                  <th scope="col" className="p-5 font-semibold">Where it happens</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([type, covers, where, href]) => (
                  <tr key={type} className={`border-b border-black/10 last:border-0 ${href ? "" : "bg-black/[0.03]"}`}>
                    <th scope="row" className="p-5 font-semibold text-black align-top">
                      {href ? <Link href={href} className={LINK_DARK}>{type}</Link> : type}
                    </th>
                    <td className="p-5 text-black/70 align-top">{covers}</td>
                    <td className="p-5 text-black/70 align-top">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-[820px] text-[16px] text-black/65 leading-relaxed">
            Off-page SEO works best when your pages are already strong. We often pair it with our{" "}
            <Link href="/digital-marketing/seo-services/on-page-seo-services" className={LINK_DARK}>on-page SEO services</Link> and{" "}
            <Link href="/digital-marketing/seo-services/technical-seo-services" className={LINK_DARK}>technical SEO</Link>, or the full
            service from our <Link href="/digital-marketing/seo-services" className={LINK_DARK}>SEO company in Calicut</Link>.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our off-page SEO process</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-9 sm:gap-y-12">
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

      {/* ── KERALA + UAE/GCC ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="kerala" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Off-page SEO for Kerala businesses</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Customers in Kerala check Google Maps, reviews and local listings before they call. For businesses in
              Calicut, Kochi, Thrissur, Malappuram and Thiruvananthapuram, our link building services in Kerala focus on
              links and mentions from Kerala and Indian sources: local business directories, industry associations,
              regional news sites and partner websites. Combined with your Google Business Profile, these help you show up
              for local searches.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Local link building services from Kerala sources</Check>
              <Check>Citations kept identical to your Google Business Profile</Check>
              <Check>Regional news and association mentions</Check>
            </ul>
            <p className="mt-8 text-[14px] text-white/60">
              Ivoniz LLP, {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion}
            </p>
          </article>
          <article id="uae-gcc" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaGlobeAsia aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Off-page SEO and link building for Dubai, UAE and GCC</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We provide off-page SEO services in Dubai and link building services for businesses in Abu Dhabi, Sharjah,
              Saudi Arabia, Qatar, Oman, Bahrain and Kuwait. That includes UAE and GCC business directories, regional
              industry sites and English-language publications. You get white-hat work, clear monthly reporting and
              pricing in AED, delivered remotely by our team in Calicut, with calls in Gulf time. We have no office in the UAE.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>UAE and GCC business directories</Check>
              <Check>Regional industry sites and publications</Check>
              <Check>Monthly packages priced in AED</Check>
            </ul>
            <div className="mt-8">
              <PillLink href={waLink(WA.uae)} external event="whatsapp_click" label="Talk to us about the GCC" location="uae_block" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Who It&apos;s For</Label>
            <Heading dark={false}>Who it&apos;s for</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Off-page SEO services in India and the GCC for businesses ready to build authority. We also work
              white-label for agencies in India and the GCC.{" "}
              <a href={waLink(WA.agency)} target="_blank" rel="noopener noreferrer" className={LINK_DARK}>Ask about white-label<span className="sr-only"> (opens WhatsApp)</span></a>.
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

      {/* ── PACKAGES ── */}
      <section id="packages" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">Off-page SEO and link building packages</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            Monthly link building services packages in rupees for India and in AED for the UAE and GCC. Off-page SEO
            cost depends on how competitive your keywords are and how many quality links you need each month.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {OFF_PAGE_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-7 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className={`mt-2 text-[14px] ${i === 1 ? "text-black/60" : "text-white/55"}`}>Best for: {p.best}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.work}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {price(p) ? <>{price(p)}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} off-page SEO package. Website: ___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`off_page_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            All packages include a monthly link report.{OFF_PAGE_MIN_TERM ? <> Minimum term: {OFF_PAGE_MIN_TERM} months.</> : null}
          </p>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get a Free Backlink Gap Report" location="packages" event="audit_click" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Off-page SEO FAQs</Heading>
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
            <Label>Free Report</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get your free <span style={OUTLINE}>backlink gap report</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your website and up to 3 competitors. We&apos;ll show you the links they have that you don&apos;t,
              and where to start.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.report)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">get a quote</Link> directly. Need a full-site check too? See our{" "}
              <Link href="/digital-marketing/seo-services/seo-audit-services" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">SEO audit services</Link>.
              Ivoniz · HiLITE Business Park, Kozhikode · serving India, UAE and GCC.
            </p>
          </div>
          <BacklinkGapForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Backlink Report" message={WA.report} />
    </main>
  );
}
