import Link from "next/link";
import {
  FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaGoogle, FaCalendarAlt, FaPenNib, FaFilm, FaClock,
  FaComments, FaUserCircle, FaBinoculars, FaChartLine, FaCheck, FaTimes, FaMapMarkerAlt, FaGlobeAsia, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { SMM_MGMT_PACKAGES } from "@/components/ecommerce/costs";
import SmmQuoteForm from "@/components/marketing/SmmQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/social-media-marketing/social-media-management
   Owns social media management services / packages / packages pricing /
   price, charges, monthly cost in india / company, agency india / kerala /
   calicut / for small business, restaurants, real estate / near me /
   "what are social media management services"; UAE: dubai, agency dubai,
   packages in dubai (AED line). Source: Google autocomplete via Ubersuggest,
   25 Nov 2026 — volumes NOT pulled (verify next run).
   Brief: packages high on the page (they sit right after the intro) with
   "Choose this plan" → WhatsApp; custom quote form; what's NOT included.
   /social-media-advertising and /social-media-content-creation don't exist
   yet → those links go to the hub sections.
   Breadcrumb: Home › Digital Marketing › Social Media Marketing › Social Media Management.
   Prices not fixed → "Price on request" (costs.js: SMM_MGMT_PACKAGES).
   TODO: contract terms, sample monthly report, confirm Malayalam captions,
   verify the UAE Advertiser Permit date.
   ════════════════════════════════════════════════════════════════ */

const HUB = "/digital-marketing/social-media-marketing";
const PAGE_URL = `https://ivoniz.com${HUB}/social-media-management`;
const TITLE = "Social Media Management in Kerala & Dubai | Ivoniz LLP";
const DESCRIPTION =
  "Social media management services and packages in Calicut, Kerala and Dubai. Planning, posting, reels, replies and monthly reports. See our packages.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Social Media Management Services and Packages | Ivoniz",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Social media management services – monthly content calendar by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Services and Packages | Ivoniz",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  talk: "Hi Ivoniz, I'd like to discuss social media management for my business.",
  uae: "Hi Ivoniz, I'm in the UAE / GCC and need social media management. My page: ___",
};

const PLATFORMS = [
  { Icon: FaInstagram, name: "Instagram" },
  { Icon: FaFacebookF, name: "Facebook" },
  { Icon: FaLinkedinIn, name: "LinkedIn" },
  { Icon: FaYoutube, name: "YouTube Shorts" },
  { Icon: FaGoogle, name: "Google Business Profile posts" },
];

const INCLUDED = [
  { Icon: FaCalendarAlt, title: "Content calendar", text: "A monthly plan of posts, reels and stories, shared for your approval." },
  { Icon: FaPenNib, title: "Design and captions", text: "Branded posts, carousels and captions in English and Malayalam." },
  { Icon: FaFilm, title: "Reels and short videos", text: <>Edited from your footage or created by our team (see <Link href={`${HUB}#content-creation`} className={LINK}>content creation</Link>).</> },
  { Icon: FaClock, title: "Scheduling and posting", text: "At the times your audience is most active." },
  { Icon: FaComments, title: "Community management", text: "Replies to comments and messages during business hours." },
  { Icon: FaUserCircle, title: "Profile upkeep", text: "Bio, highlights, cover images and contact buttons kept up to date." },
  { Icon: FaBinoculars, title: "Competitor tracking", text: "What similar businesses are posting and what's working." },
  { Icon: FaChartLine, title: "Monthly report", text: "Reach, engagement, followers, messages and leads, with next month's plan." },
];

const NOT_INCLUDED = [
  "Ad spend (paid directly to Meta, LinkedIn or Google)",
  "Professional photo or video shoots (available as an add-on)",
  "Printing",
];

const PROCESS = [
  { title: "Onboarding", text: "We learn your business, audience, goals and brand style." },
  { title: "Calendar", text: "You receive next month's content calendar to approve." },
  { title: "Production", text: "Our designers and editors create the posts and reels." },
  { title: "Publishing and replies", text: "We post on schedule and manage your community." },
  { title: "Reporting", text: "A monthly report and a review of what to improve." },
];

const WHO = [
  ["Small and medium businesses", "No in-house social media team, and no time to post every week."],
  ["Restaurants, clinics and retailers", "Steady posts, offers and replies that bring visits and bookings."],
  ["Real estate and education brands", "Project updates, admissions and enquiries managed every month."],
  ["Inactive or inconsistent pages", "We bring your pages back to a regular, professional rhythm."],
];

const FAQS = [
  { q: "What are social media management services?", a: "Social media management means planning, creating, posting and monitoring content on your social media pages every month, replying to comments and messages, and reporting on results." },
  { q: "How much does social media management cost in India?", a: "It depends on the number of platforms, posts, reels and how much community management you need. Ivoniz offers monthly packages in rupees for India and in AED for the UAE." },
  { q: "Is ad spend included in the package?", a: "No. Ad spend is paid directly to Meta, LinkedIn or other platforms. Our packages cover planning, content, posting, management and reporting." },
  { q: "Do I get to approve posts before they go live?", a: "Yes. We share a monthly content calendar for approval, and nothing is posted without your sign-off." },
  { q: "Who owns my social media accounts?", a: "You do. We work through access you give us (for example Meta Business Suite) and you keep full ownership of your pages and content." },
  { q: "What is the minimum contract?", a: "We agree the terms with you clearly before we start, including the minimum period and how to change or stop the plan." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Social Media Management",
      serviceType: "Social media management",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      isRelatedTo: { "@id": `https://ivoniz.com${HUB}#service` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Social media management packages",
        itemListElement: SMM_MGMT_PACKAGES.map((p) => ({ "@type": "Offer", name: p.label })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Social Media Management in Kerala & Dubai",
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
        { "@type": "ListItem", position: 3, name: "Social Media Marketing", item: `https://ivoniz.com${HUB}` },
        { "@type": "ListItem", position: 4, name: "Social Media Management", item: PAGE_URL },
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

const price = (p) => (p.inr && p.aed ? `${p.inr} / ${p.aed}` : p.inr || p.aed || null);

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function SocialMediaManagementPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Social Media Marketing", href: HUB },
              { label: "Social Media Management", href: `${HUB}/social-media-management` },
            ]}
          />
          <div className="mt-8"><Label>Social Media Management</Label></div>
          <HeroTitle outline="and Packages">Social Media Management Services</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz offers social media management services for businesses in Calicut, across Kerala and India, and in
                Dubai and the UAE. Every month we plan your content, design posts and reels, publish on schedule, reply to
                comments and messages, and send you a clear report. You approve everything, and we handle the rest.
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#packages" solid label="See Packages" location="hero" event="package_click" />
              <PillLink href="#quote" label="Get a Custom Quote" location="hero" event="audit_click" />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            {PLATFORMS.map(({ Icon, name }) => (
              <li key={name} className="flex items-center gap-2"><Icon aria-hidden="true" className="text-white/55" /> {name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PACKAGES (high on the page, as buyers compare first) ── */}
      <section id="packages" className={`relative py-14 sm:py-24 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">Social media management packages</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            Clear monthly deliverables for every plan, in rupees for India and in AED for the UAE and GCC.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {SMM_MGMT_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-6 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className="mt-2 text-[20px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.platforms}</p>
                <dl className={`mt-5 grid gap-3 text-[14.5px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>
                  <div>
                    <dt className={`text-[12px] uppercase tracking-[0.14em] ${i === 1 ? "text-black/55" : "text-white/55"}`}>Monthly content</dt>
                    <dd className="mt-1">{p.content}</dd>
                  </div>
                  <div>
                    <dt className={`text-[12px] uppercase tracking-[0.14em] ${i === 1 ? "text-black/55" : "text-white/55"}`}>Management</dt>
                    <dd className="mt-1">{p.management}</dd>
                  </div>
                </dl>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {price(p) ? <>{price(p)}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'd like the ${p.label} social media management plan (${p.platforms}). My page: ___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Choose this plan"
                    location={`smm_mgmt_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-2 items-start p-5 sm:p-6 rounded-2xl border border-white/10">
            <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-white/60 pt-0.5">Not included</p>
            <ul className="grid gap-2 text-[14.5px] text-white/70">
              {NOT_INCLUDED.map((t) => (
                <li key={t} className="flex gap-3"><FaTimes aria-hidden="true" className="shrink-0 mt-1.5 text-[11px] text-white/45" />{t}</li>
              ))}
              <li className="text-white/55">Prices exclude GST/VAT.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHAT IS SMM MANAGEMENT ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>What is social media management?</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Social media management is the ongoing, month-by-month work of running your social pages: planning,
              creating, posting, engaging and measuring. It keeps your brand active and professional without taking up
              your team&apos;s time.
            </p>
            <p className="mt-4 text-[16px] text-black/65 leading-relaxed">
              It&apos;s one part of our <Link href={HUB} className={LINK_DARK}>social media marketing agency in Calicut</Link> service.
              For Instagram-only growth, see <Link href={`${HUB}/instagram-marketing-services`} className={LINK_DARK}>Instagram marketing</Link>,
              and for paid campaigns, <Link href={`${HUB}/social-media-advertising`} className={LINK_DARK}>paid social ads</Link>.
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

      {/* ── WHAT'S INCLUDED ── */}
      <section id="included" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>What&apos;s Included</Label>
            <Heading>What&apos;s included every month</Heading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {INCLUDED.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[210px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-7 text-[18px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How It Works</Label>
          <Heading className="mb-12 sm:mb-16">How it works</Heading>
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

      {/* ── KERALA + UAE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#0a0a0a" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="kerala" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Social media management in Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              From our office in Calicut, we manage social media for businesses in Kozhikode, Malappuram, Kochi, Thrissur,
              Kannur and across Kerala. We know local festivals, language and buying habits, and we can meet you in person.
            </p>
            <address className="not-italic mt-6 grid gap-3 text-[14.5px] text-white/75 flex-1">
              <span className="flex gap-3">
                <FaMapMarkerAlt aria-hidden="true" className="shrink-0 mt-1 text-white/55" />
                <span>Ivoniz LLP, {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India</span>
              </span>
              <a href="tel:+919645760023" className="flex items-center gap-3 hover:text-white min-h-11">
                <FaPhoneAlt aria-hidden="true" className="shrink-0 text-white/55" /> +91 96457 60023
              </a>
            </address>
          </article>
          <article id="uae" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaGlobeAsia aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Social media management in Dubai and the UAE</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We manage social media for businesses in Dubai, Abu Dhabi, Sharjah and the GCC, with packages in AED and
              content for UAE audiences. Since 1 February 2026, promotional content on social media in the UAE requires a
              UAE Advertiser Permit. We plan your content and creator collaborations to stay within the rules.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Monthly packages priced in AED</Check>
              <Check>Content planned for UAE audiences</Check>
              <Check>Creator collaborations within the permit rules</Check>
            </ul>
            <div className="mt-8">
              <PillLink href={waLink(WA.uae)} external event="whatsapp_click" label="Talk to us about the UAE" location="uae_block" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Social media management FAQs</Heading>
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
            <Label>Custom Quote</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get your custom <span style={OUTLINE}>social media management quote</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Tell us your platforms, how often you want to post and whether you need ads. We&apos;ll send a clear quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <SmmQuoteForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Custom Quote" message={WA.talk} />
    </main>
  );
}
