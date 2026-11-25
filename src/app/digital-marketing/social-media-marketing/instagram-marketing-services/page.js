import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp, FaInstagram, FaUserCircle, FaCalendarAlt, FaFilm, FaImages, FaCircleNotch, FaHashtag, FaComments,
  FaBullhorn, FaHandshake, FaChartLine, FaCheck, FaMapMarkerAlt, FaGlobeAsia, FaPhoneAlt, FaBan,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { CLIENTS } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { IG_PACKAGES } from "@/components/ecommerce/costs";
import SocialAuditForm from "@/components/marketing/SocialAuditForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/social-media-marketing/instagram-marketing-services
   Owns instagram marketing services / agency / company (+ india, dubai),
   instagram marketing pricing / cost, "near me", insta marketing services,
   agency vs freelancer, reels marketing. Source: Google autocomplete via
   Ubersuggest, 25 Nov 2026 — volumes NOT pulled (verify next run).
   Never promise bought followers or likes.
   The brief's /social-media-advertising and /social-media-content-creation
   pages don't exist yet → links go to those sections on the SMM hub.
   Breadcrumb: Home › Digital Marketing › Social Media Marketing › Instagram Marketing Services.
   Prices not fixed → "Price on request" (costs.js: IG_PACKAGES).
   Proof = real Ivoniz work only (Rivaura Hospital Instagram content).
   TODO: embed 6–9 real reels; verify the UAE Advertiser Permit date.
   ════════════════════════════════════════════════════════════════ */

const HUB = "/digital-marketing/social-media-marketing";
const PAGE_URL = `https://ivoniz.com${HUB}/instagram-marketing-services`;
const TITLE = "Instagram Marketing Services in Kerala & Dubai | Ivoniz LLP";
const DESCRIPTION =
  "Instagram marketing services in Calicut, Kerala and Dubai. Reels, posts, stories, profile growth and Instagram ads that bring real enquiries. Free audit.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Instagram Marketing Services | Reels, Posts & Instagram Ads",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Instagram marketing services by Ivoniz – reels grid for a Kerala brand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Marketing Services | Reels, Posts & Instagram Ads",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  audit: "Hi Ivoniz, I'd like a free Instagram audit. My handle: @___",
  uae: "Hi Ivoniz, I'm in the UAE / GCC and want to discuss Instagram marketing. My handle: @___",
};

const INCLUDED = [
  { Icon: FaUserCircle, title: "Profile optimisation", text: "Bio, highlights, link, contact buttons and a clean grid." },
  { Icon: FaCalendarAlt, title: "Content strategy", text: "Content pillars and a monthly calendar built around your goals." },
  { Icon: FaFilm, title: "Reels", text: "Short videos planned, shot or edited for reach and engagement." },
  { Icon: FaImages, title: "Posts and carousels", text: "Branded designs and captions that explain and sell." },
  { Icon: FaCircleNotch, title: "Stories", text: "Daily or weekly stories with polls, offers and behind-the-scenes content." },
  { Icon: FaHashtag, title: "Hashtag and audio research", text: "What your audience actually follows." },
  { Icon: FaComments, title: "Community management", text: "Replies to comments and DMs during business hours." },
  { Icon: FaBullhorn, title: "Instagram ads", text: <>Targeted campaigns for leads, messages, website visits and sales. More on <Link href={`${HUB}/social-media-advertising`} className={LINK}>Instagram ads</Link>.</> },
  { Icon: FaHandshake, title: "Influencer collaborations", text: "Finding and managing creators who fit your brand." },
  { Icon: FaChartLine, title: "Monthly report", text: "Reach, followers, profile visits, messages and leads." },
];

const PROCESS = [
  { title: "Audit", text: "We review your profile, content and 2 competitors." },
  { title: "Plan", text: "We agree goals, content pillars and a monthly calendar." },
  { title: "Create", text: <>Our team designs posts and produces reels (see <Link href={`${HUB}#content-creation`} className={LINK}>reels and content creation</Link>).</> },
  { title: "Publish and engage", text: "We post at the best times and manage comments and DMs." },
  { title: "Promote", text: "We boost the best content with targeted ads." },
  { title: "Report and improve", text: "Monthly results and a better plan for next month." },
];

const FAQS = [
  { q: "How much do Instagram marketing services cost?", a: "It depends on how many posts and reels you need each month and whether ads are included. Ivoniz offers monthly Instagram packages in rupees for India and in AED for the UAE. Ad spend is paid separately to Meta." },
  { q: "Do you buy followers or likes?", a: "No. We grow real followers through useful content, reels, engagement and targeted ads. Fake followers hurt your reach and trust." },
  { q: "Can Instagram bring leads for my business?", a: "Yes. With a clear profile, regular reels, story highlights, a WhatsApp or call button and targeted ads, Instagram can bring direct enquiries and sales." },
  { q: "Should I hire an agency or a freelancer for Instagram?", a: "A freelancer can suit very small accounts. An agency gives you a designer, video editor, ads specialist and account manager together, with backup when someone is away." },
  { q: "Do I need to appear in the reels?", a: "No. We can create reels with your products, team, workplace or customers, and with on-screen text and voiceovers." },
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
      name: "Instagram Marketing Services",
      serviceType: "Instagram marketing",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      isRelatedTo: { "@id": `https://ivoniz.com${HUB}#service` },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Instagram Marketing Services in Kerala & Dubai",
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
        { "@type": "ListItem", position: 4, name: "Instagram Marketing Services", item: PAGE_URL },
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
export default function InstagramMarketingServicesPage() {
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
              { label: "Social Media Marketing", href: HUB },
              { label: "Instagram Marketing Services", href: `${HUB}/instagram-marketing-services` },
            ]}
          />
          <div className="mt-8"><Label>Instagram Marketing Services</Label></div>
          <HeroTitle outline="That Turn Followers into Customers">Instagram Marketing Services</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz provides Instagram marketing services for businesses in Calicut, across Kerala and India, and in
                Dubai and the UAE. We plan and create reels, posts and stories, set up your profile to convert, reply to
                your audience and run Instagram ads, so your account brings in real enquiries, not just likes.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-[14px] text-white/75">Free Instagram audit · reels, posts, stories and ads · no fake followers</span>
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free Instagram Audit" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="WhatsApp Us" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INSTAGRAM ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>Why Instagram matters for your business</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Instagram is where many customers discover new brands, check reviews in comments and message businesses
              directly. A well-run account builds trust before a customer ever calls you. An inactive or messy profile
              does the opposite.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              ["Discovery", "Reels and the Explore tab put your business in front of people who don't follow you yet."],
              ["Trust", "Your grid, highlights and comments are what people check before they message you."],
              ["Direct enquiries", "DMs, WhatsApp and call buttons turn a profile visit into a conversation."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl bg-white border border-black/10 p-5">
                <span className="block text-[16px] font-semibold text-black">{t}</span>
                <span className="block mt-1.5 text-[14.5px] text-black/60 leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section id="included" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>What&apos;s Included</Label>
            <Heading>What&apos;s included in our Instagram marketing services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Organic content, reels, replies and ads in one plan, from an Instagram marketing agency in Calicut.
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

      {/* ── NO FAKE FOLLOWERS + REAL WORK ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1.25fr] gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaBan aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>No fake followers, ever</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We don&apos;t buy followers, likes or comments. Fake numbers reduce your reach and make your brand look
              untrustworthy. We grow real followers who can become customers.
            </p>
          </article>
          {RIVAURA && (
            <article className="p-6 sm:p-8 flex flex-col" style={GLASS}>
              <div className="relative overflow-hidden rounded-xl border border-white/10" style={{ aspectRatio: "1672/941" }}>
                <Image
                  src={RIVAURA.showcase.image}
                  alt={`Instagram marketing services by Ivoniz – posts designed for ${RIVAURA.title}, a Kerala healthcare brand`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>Our work: {RIVAURA.title} on Instagram</h3>
              <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">
                We design the Instagram content for {RIVAURA.review?.org || RIVAURA.title}, alongside the website we built.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href={RIVAURA.showcase.instagram} external solid label={`See ${RIVAURA.showcase.handle}`} location="ig_work" event="outbound_click" icon={<FaInstagram aria-hidden="true" />} />
                <PillLink href={`/works/${RIVAURA.slug}`} label="Case study" location="ig_work" />
              </div>
            </article>
          )}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our Instagram marketing process</Heading>
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
          <p className="mt-12 max-w-[820px] text-[15px] text-white/60 leading-relaxed">
            Instagram is one part of our <Link href={HUB} className={LINK}>social media marketing agency in Calicut</Link> service, alongside
            monthly <Link href={`${HUB}/social-media-management`} className={LINK}>social media management</Link>.
            Selling online? Pair it with <Link href="/digital-marketing/seo-services/ecommerce-seo-services" className={LINK}>ecommerce SEO</Link> for
            online stores.
          </p>
        </div>
      </section>

      {/* ── KERALA + UAE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="kerala" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Instagram marketing for Kerala businesses</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              For restaurants, clinics, boutiques, jewellery stores, real estate and institutes in Calicut, Kochi,
              Malappuram, Thrissur and across Kerala, we create content in English and Malayalam, plan around local
              festivals and target the right towns. We also help Kerala brands reach the Malayali audience in the Gulf.
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
            <h2 className="mt-6 text-white" style={h2Style}>Instagram marketing services in Dubai and the UAE</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We run Instagram marketing for businesses in Dubai, Abu Dhabi, Sharjah and the wider GCC, with packages in
              AED. Since 1 February 2026, promotional content on social media in the UAE requires a UAE Advertiser Permit.
              We plan your content and influencer work with this in mind and only work with permitted creators.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Monthly packages priced in AED</Check>
              <Check>Influencers with a valid UAE Advertiser Permit</Check>
              <Check>Content for UAE and GCC audiences</Check>
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
          <Heading className="max-w-[760px]">Instagram marketing packages and pricing</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            Instagram marketing agency pricing depends on how many posts and reels you need and whether ads are included.
            Monthly packages in rupees for India and in AED for the UAE.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {IG_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-6 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className="mt-2 text-[18px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.content}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.extras}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {price(p) ? <>{price(p)}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} Instagram package. My handle: @___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`ig_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">Ad spend is paid separately to Meta. Prices exclude GST/VAT.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Instagram marketing FAQs</Heading>
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
              Get your free <span style={OUTLINE}>Instagram audit</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Send us your Instagram handle. We&apos;ll review your profile and content against two competitors and share
              what to fix first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.audit)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <SocialAuditForm instagram />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Instagram Audit" message={WA.audit} />
    </main>
  );
}
