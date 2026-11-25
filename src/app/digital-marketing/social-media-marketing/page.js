import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp, FaInstagram, FaCalendarAlt, FaBullhorn, FaPenNib, FaChessKnight, FaChartLine,
  FaFacebookF, FaLinkedinIn, FaYoutube, FaCheck, FaMapMarkerAlt, FaGlobeAsia, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { CLIENTS } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { SMM_PACKAGES } from "@/components/ecommerce/costs";
import SocialAuditForm from "@/components/marketing/SocialAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/social-media-marketing — SMM cluster hub. Owns
   social media marketing agency / company / services / expert in calicut,
   kozhikode, kerala; smm for small business, restaurants, doctors, hospitals,
   real estate; smm agency / company / packages in dubai (Phase 2 line).
   Source: Google autocomplete via Ubersuggest, 25 Nov 2026 — volumes NOT
   pulled (verify next run). Learner/job terms (course, jobs, salary,
   internship) kept off the page.
   Child pages from the brief (Instagram marketing, management, advertising,
   content creation) don't exist yet → services link to sections on this page;
   switch to the child URLs when they're built.
   Breadcrumb: Home › Digital Marketing › Social Media Marketing.
   Prices not fixed → "Price on request" (costs.js: SMM_PACKAGES).
   Proof = real Ivoniz work only: the Rivaura Hospital Instagram content.
   TODO: verify the UAE Advertiser Permit date; set contract terms; add 6–9
   real reels/posts and 2–3 confirmed results (with permission).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/social-media-marketing";
const TITLE = "Social Media Marketing Agency in Calicut, Kerala | Ivoniz LLP";
const DESCRIPTION =
  "Social media marketing agency in Calicut, Kerala. Content, reels, ads and page management for Instagram, Facebook and LinkedIn, in India and the UAE.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Social Media Marketing Agency in Calicut | Instagram, Facebook & Ads",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Social media marketing agency in Calicut – Ivoniz team planning content" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency in Calicut | Instagram, Facebook & Ads",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const DM = "/digital-marketing";

const WA = {
  audit: "Hi Ivoniz, I'd like a free social media audit. My page: ___",
  uae: "Hi Ivoniz, I'm in the UAE / GCC and want to discuss social media marketing. My page: ___",
};

const SERVICES = [
  { id: "instagram-marketing", Icon: FaInstagram, title: "Instagram marketing", text: <>Reels, posts, stories and profile growth for Instagram. See our <Link href="/digital-marketing/social-media-marketing/instagram-marketing-services" className={LINK}>Instagram marketing services</Link>.</> },
  { id: "social-media-management", Icon: FaCalendarAlt, title: "Social media management", text: <>Monthly planning, posting, replies and reporting across your platforms. See <Link href="/digital-marketing/social-media-marketing/social-media-management" className={LINK}>social media management</Link> packages.</> },
  { id: "social-media-advertising", Icon: FaBullhorn, title: "Social media advertising", text: <>Meta (Facebook and Instagram) and LinkedIn ads that bring leads and sales. See <Link href="/digital-marketing/social-media-marketing/social-media-advertising" className={LINK}>social media advertising</Link>.</> },
  { id: "content-creation", Icon: FaPenNib, title: "Content creation", text: <>Designs, reels, short videos and captions that match your brand. See <Link href="/digital-marketing/social-media-marketing/social-media-content-creation" className={LINK}>content creation</Link>.</> },
  { id: "strategy", Icon: FaChessKnight, title: "Strategy and audits", text: "A clear plan based on your goals, audience and competitors." },
  { id: "reporting", Icon: FaChartLine, title: "Reporting", text: "A monthly report on reach, engagement, followers, leads and ad results." },
];

const PLATFORMS = [
  { Icon: FaInstagram, name: "Instagram" },
  { Icon: FaFacebookF, name: "Facebook" },
  { Icon: FaLinkedinIn, name: "LinkedIn" },
  { Icon: FaYoutube, name: "YouTube Shorts" },
  { Icon: FaWhatsapp, name: "WhatsApp Business" },
];

const PROCESS = [
  { title: "Audit", text: "We review your current pages and 2–3 competitors." },
  { title: "Plan", text: "We set goals, content themes and a monthly content calendar." },
  { title: "Create", text: "Our designers and editors produce posts, reels and captions." },
  { title: "Publish and engage", text: "We post at the right times and reply to comments and messages." },
  { title: "Advertise", text: "We run targeted ads to reach new customers (optional)." },
  { title: "Report", text: "You get a monthly report and we improve the plan each month." },
];

const INDUSTRIES = [
  ["Restaurants and cafés", "Menus, offers and reels that bring walk-ins and orders."],
  ["Hospitals and clinics", "Doctor introductions, health tips and appointment campaigns."],
  ["Real estate", "Project launches, site-visit leads and NRI audiences."],
  ["Retail and fashion", "New arrivals, festive collections and store visits."],
  ["Jewellery", "Bridal, festive and gold-rate content for Kerala buyers."],
  ["Education", "Admission campaigns, results and student stories."],
  ["Hotels and travel", "Stays, packages and seasonal offers."],
  ["Ecommerce stores", "Product reels and sales campaigns that drive orders."],
];

const FAQS = [
  { q: "How much does social media marketing cost in Calicut?", a: "It depends on the number of platforms, posts, reels and whether ads are included. Ivoniz offers monthly packages in rupees for Kerala and India and in AED for UAE and GCC businesses. Ad spend is paid separately to the platform." },
  { q: "Which social media platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn and YouTube, and we can add other platforms if your audience uses them." },
  { q: "Do you create the content as well?", a: "Yes. Our team plans, designs and writes posts, reels and stories, and shares a monthly content calendar for your approval." },
  { q: "Do you work with businesses in Dubai and the UAE?", a: "Yes. We manage social media for businesses in the UAE and the wider GCC from our Calicut office, with pricing in AED." },
  { q: "How soon will I see results?", a: "Most businesses see better reach and engagement in the first month. Steady growth in followers and leads usually takes three to six months of consistent posting and ads." },
  { q: "Is there a long contract?", a: "We agree the terms with you clearly before we start, including the minimum period and how to change or stop the plan." },
];

const ADDRESS = organizationSchema.address;
const RIVAURA = CLIENTS.find((c) => c.showcase);

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Social Media Marketing",
      serviceType: "Social media marketing",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Social media services",
        itemListElement: ["Instagram marketing", "Social media management", "Social media advertising", "Social media content creation"]
          .map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Social Media Marketing Agency in Calicut, Kerala",
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
        { "@type": "ListItem", position: 3, name: "Social Media Marketing", item: PAGE_URL },
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
export default function SocialMediaMarketingPage() {
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
              { label: "Digital Marketing", href: DM },
              { label: "Social Media Marketing", href: `${DM}/social-media-marketing` },
            ]}
          />
          <div className="mt-8"><Label>Social Media Marketing</Label></div>
          <HeroTitle outline="in Calicut, Kerala">Social Media Marketing Agency</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz is a social media marketing agency in Calicut (Kozhikode) helping businesses across Kerala, India
                and the UAE turn social media into enquiries and sales. We plan your content, create posts and reels,
                manage your pages and run ads on Instagram, Facebook and LinkedIn, all from one team at HiLITE Business
                Park.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">Free social media audit · content, ads and reporting from one team · pricing in ₹ and AED</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free Social Media Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="WhatsApp Us" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            {PLATFORMS.map(({ Icon, name }) => (
              <li key={name} className="flex items-center gap-2"><Icon aria-hidden="true" className="text-white/55" /> {name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>Why social media marketing matters</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Your customers check Instagram and Facebook before they call, visit or buy. A page that posts rarely, looks
              unprofessional or never replies loses those customers to competitors. Good social media marketing keeps your
              brand in front of the right people every week, builds trust and brings in leads you can track.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              ["Seen every week", "Consistent posts and reels keep you in front of the people who already follow you."],
              ["Trusted on first look", "A professional, active page is often the reason someone calls instead of scrolling on."],
              ["Leads you can track", "Ads and WhatsApp click-to-chat turn attention into enquiries you can count."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <span className="block text-[16px] font-semibold text-black">{t}</span>
                <span className="block mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our social media marketing services in Calicut</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Everything your pages need, from the first post to the monthly report, done by one team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {SERVICES.map(({ id, Icon, title, text }) => (
              <div key={title} id={id} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[220px] scroll-mt-24">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-7 text-[18.5px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[820px] text-[15px] text-white/60 leading-relaxed">
            Social media works best alongside search: see our <Link href={`${DM}/seo-services/local-seo-services`} className={LINK}>Google Business Profile</Link> and
            local SEO work, or the full <Link href={DM} className={LINK}>digital marketing agency in Calicut</Link> service.
          </p>
        </div>
      </section>

      {/* ── REAL WORK: Rivaura Instagram ── */}
      {RIVAURA && (
        <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
          <Grid />
          <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-14 items-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "1672/941" }}>
              <Image
                src={RIVAURA.showcase.image}
                alt="Instagram reels and posts created by Ivoniz for Rivaura Hospital, a Kerala healthcare brand"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>
            <div>
              <Label>Our Work</Label>
              <h2 className="text-white" style={h2Style}>Instagram content for {RIVAURA.title}</h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
                We design the Instagram content for {RIVAURA.review?.org || RIVAURA.title} in {RIVAURA.location}, alongside
                the hospital website we built. Doctor introductions, health awareness posts and hospital updates, in a
                consistent look that matches the brand.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillLink href={RIVAURA.showcase.instagram} external solid label={`See ${RIVAURA.showcase.handle}`} location="smm_work" event="outbound_click" icon={<FaInstagram aria-hidden="true" />} />
                <PillLink href={`/works/${RIVAURA.slug}`} label="Read the case study" location="smm_work" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">How we work</Heading>
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

      {/* ── WHY IVONIZ + INDUSTRIES ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Why Ivoniz</Label>
            <Heading dark={false}>A social media marketing company in Calicut, with a full team</Heading>
            <ul className="mt-6 grid gap-3 text-[15px] text-black/75">
              {[
                "One team for social media, ads, website and SEO",
                "Local knowledge of Kerala audiences, festivals and buying habits",
                "Monthly packages with everything agreed up front",
                "Reporting on leads and results, not just likes",
              ].map((t) => (
                <li key={t} className="flex gap-3"><FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-black/45" />{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-5">Industries we work with</h3>
            <dl className="grid sm:grid-cols-2 gap-3">
              {INDUSTRIES.map(([t, d]) => (
                <div key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                  <dt className="text-[16px] font-semibold text-black">{t}</dt>
                  <dd className="mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[15px] text-black/60 leading-relaxed">
              Also a social media marketing agency for small businesses across India: shops, clinics and service businesses
              that need a steady, professional presence without hiring an in-house team.
            </p>
          </div>
        </div>
      </section>

      {/* ── KERALA + UAE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="kerala" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Social media marketing in Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              From Calicut and Malappuram to Kochi, Thrissur and Kannur, we help Kerala businesses reach local customers
              and the Malayali audience across India and the Gulf. We create content in English and Malayalam, plan around
              Onam, Vishu, Ramadan and Christmas, and target the right towns and age groups.
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
            <h2 className="mt-6 text-white" style={h2Style}>Social media marketing in Dubai and the UAE</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We manage social media for businesses in Dubai, Abu Dhabi, Sharjah and the wider GCC, with packages in AED.
              Since 1 February 2026, anyone publishing promotional content on social media in the UAE needs a UAE
              Advertiser Permit. We plan your campaigns with this in mind and work only with creators who hold a valid
              permit. We work with Gulf clients remotely from our office in Kozhikode, with calls in Gulf time; we have no office in the UAE.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Monthly packages priced in AED</Check>
              <Check>Content for UAE and GCC audiences</Check>
              <Check>Creators with a valid UAE Advertiser Permit</Check>
            </ul>
            <div className="mt-8">
              <PillLink href={waLink(WA.uae)} external event="whatsapp_click" label="Talk to us about the UAE" location="uae_block" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Packages</Label>
          <Heading className="max-w-[760px]">Social media marketing packages</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            How much do social media marketing agencies charge in India? It depends on platforms, posts, reels and ads.
            Our monthly packages are in rupees for Kerala and India and in AED for the UAE and GCC.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {SMM_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-6 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className="mt-2 text-[18px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.platforms}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {price(p) ? <>{price(p)}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} social media package. My page: ___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`smm_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
            Ad spend is paid separately to Meta or LinkedIn. Prices exclude GST/VAT.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Social media marketing FAQs</Heading>
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
              Get your free <span style={OUTLINE}>social media audit</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your Instagram or Facebook page. We&apos;ll review it against two competitors and share what to fix
              first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <SocialAuditForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Social Audit" message={WA.audit} />
    </main>
  );
}
