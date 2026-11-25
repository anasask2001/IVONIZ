import Link from "next/link";
import {
  FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaImages, FaCrosshairs, FaLaptopCode, FaCode,
  FaSlidersH, FaChartLine, FaCheck, FaMapMarkerAlt, FaGlobeAsia, FaPhoneAlt, FaWallet, FaUserTie,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { ADS_PACKAGES, ADS_MIN_DAILY_BUDGET } from "@/components/ecommerce/costs";
import AdsReviewForm from "@/components/marketing/AdsReviewForm";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/social-media-marketing/social-media-advertising
   Owns social media advertising agency / services / company (+ india),
   facebook ads / meta ads calicut, social media advertising cost (india,
   per month, price), instagram ad cost, packages, near me, for small
   business / restaurants / real estate; UAE: social media advertising uae /
   dubai / permit. Source: Google autocomplete via Ubersuggest, 25 Nov 2026 —
   volumes NOT pulled (verify next run).
   Brief: "What you pay" box near the top (ad budget vs management fee).
   UAE permit: general wording only, no legal advice (re-check rules before publishing).
   /social-media-content-creation doesn't exist yet → "ad creatives" links to the hub section.
   Breadcrumb: Home › Digital Marketing › Social Media Marketing › Social Media Advertising.
   Fees not fixed → "Price on request" (costs.js: ADS_PACKAGES, ADS_MIN_DAILY_BUDGET).
   TODO: 2–3 campaign results with cost per lead (with permission).
   ════════════════════════════════════════════════════════════════ */

const HUB = "/digital-marketing/social-media-marketing";
const PAGE_URL = `https://ivoniz.com${HUB}/social-media-advertising`;
const TITLE = "Social Media Advertising Agency in Kerala & UAE | Ivoniz LLP";
const DESCRIPTION =
  "Social media advertising agency in Calicut, Kerala and the UAE. Facebook, Instagram and LinkedIn ads that bring leads and sales, with clear costs.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Social Media Advertising Agency | Facebook, Instagram & LinkedIn Ads",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Social media advertising dashboard showing leads and cost per lead" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Advertising Agency | Facebook, Instagram & LinkedIn Ads",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  review: "Hi Ivoniz, I'd like a free review of my social media ads. My business: ___",
  uae: "Hi Ivoniz, I'm in the UAE / GCC and want to run social media ads. My business: ___",
};

const SERVICES = [
  { Icon: FaFacebookF, title: "Facebook and Instagram ads (Meta)", text: "Lead forms, WhatsApp and message ads, website traffic and sales campaigns." },
  { Icon: FaLinkedinIn, title: "LinkedIn ads", text: "For B2B, recruitment, education and professional services." },
  { Icon: FaYoutube, title: "YouTube ads", text: "Short video campaigns when video suits your goal." },
  { Icon: FaImages, title: "Ad creatives", text: <>Images, carousels and short videos: <Link href={`${HUB}/social-media-content-creation`} className={LINK}>ad creatives</Link> made by our content team.</> },
  { Icon: FaCrosshairs, title: "Audience targeting", text: "Location, interests, lookalike audiences and remarketing." },
  { Icon: FaLaptopCode, title: "Landing pages", text: <>Fast pages built by our <Link href="/website-development" className={LINK}>website development</Link> team to turn clicks into leads.</> },
  { Icon: FaCode, title: "Tracking", text: "Meta pixel, conversion events and lead tracking set up properly." },
  { Icon: FaSlidersH, title: "Optimisation", text: "Weekly testing of audiences, creatives and budgets." },
  { Icon: FaChartLine, title: "Reporting", text: "Leads, cost per lead, reach and sales in a clear monthly report." },
];

const PROCESS = [
  { title: "Goal and audit", text: "We agree your goal (leads, messages, sales) and review any past ads." },
  { title: "Plan", text: "Audiences, offer, budget split and campaign structure." },
  { title: "Create", text: "Ad copy, designs and videos for testing." },
  { title: "Launch and track", text: "Campaigns go live with tracking in place." },
  { title: "Optimise", text: "We test and improve every week." },
  { title: "Report", text: "Monthly results and next steps." },
];

const INDUSTRIES = ["Real estate", "Hospitals and clinics", "Education and training", "Restaurants", "Retail and ecommerce", "Jewellery", "Travel", "Professional services"];

const FAQS = [
  { q: "How much does social media advertising cost?", a: "There are two parts: your ad budget, which you pay directly to Meta or LinkedIn, and our monthly management fee. You choose the ad budget and can change it at any time." },
  { q: "Which platforms do you run ads on?", a: "We run ads on Facebook, Instagram and LinkedIn, and on YouTube when video suits your goal." },
  { q: "How soon will I get leads from ads?", a: "Campaigns can start bringing enquiries within days of going live. The first few weeks are used to test audiences and creatives and lower your cost per lead." },
  { q: "Do you run ads for businesses in the UAE?", a: "Yes. We run social media ads for businesses in Dubai and across the UAE and GCC, and we plan campaigns in line with UAE Advertiser Permit rules." },
  { q: "Will I own the ad account?", a: "Yes. Ads run in your own Meta Business account, so your data, audiences and history stay with you." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Social Media Advertising",
      serviceType: "Social media advertising",
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
      name: "Social Media Advertising Agency in Kerala & UAE",
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
        { "@type": "ListItem", position: 4, name: "Social Media Advertising", item: PAGE_URL },
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
export default function SocialMediaAdvertisingPage() {
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
              { label: "Social Media Advertising", href: `${HUB}/social-media-advertising` },
            ]}
          />
          <div className="mt-8"><Label>Social Media Advertising</Label></div>
          <HeroTitle outline="Not Just Likes">Social Media Advertising That Brings Leads,</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
                Ivoniz is a social media advertising agency in Calicut running Facebook, Instagram and LinkedIn ads for
                businesses across Kerala, India and the UAE. We plan the campaign, create the ads, target the right people,
                track every lead and keep lowering your cost per enquiry, with clear reporting on where every rupee or
                dirham goes.
              </p>
            </div>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Free Ads Review" location="hero" event="audit_click" />
              <PillLink href={waLink(WA.review)} external event="whatsapp_click" label="WhatsApp Us" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaFacebookF aria-hidden="true" className="text-white/55" /> Facebook</li>
            <li className="flex items-center gap-2"><FaInstagram aria-hidden="true" className="text-white/55" /> Instagram</li>
            <li className="flex items-center gap-2"><FaLinkedinIn aria-hidden="true" className="text-white/55" /> LinkedIn</li>
            <li className="flex items-center gap-2"><FaYoutube aria-hidden="true" className="text-white/55" /> YouTube</li>
          </ul>
        </div>
      </section>

      {/* ── WHAT YOU PAY (near the top: the main cost question) ── */}
      <section id="cost" className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[760px]">
            <Label dark={false}>Clear Costs</Label>
            <Heading dark={false}>What you pay for social media ads</Heading>
            <p className="mt-5 text-[16px] text-black/65 leading-relaxed">
              Social media advertising cost has two separate parts. You stay in control of your ad budget and can raise or
              lower it at any time.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-3">
            {[
              { Icon: FaWallet, cost: "Ad budget", to: "Paid to Meta, LinkedIn or Google directly", covers: "The ads shown to people. You choose the amount." },
              { Icon: FaUserTie, cost: "Management fee", to: "Paid to Ivoniz", covers: "Strategy, creatives, setup, daily monitoring, optimisation and reporting." },
            ].map(({ Icon, cost, to, covers }) => (
              <div key={cost} className="rounded-2xl bg-white border border-black/10 p-6 sm:p-8">
                <span className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-black/70"><Icon aria-hidden="true" /></span>
                <h3 className="mt-5 text-[22px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{cost}</h3>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-black/55">{to}</p>
                <p className="mt-3 text-[15px] text-black/70 leading-relaxed">{covers}</p>
              </div>
            ))}
          </div>
          {ADS_MIN_DAILY_BUDGET && (
            <p className="mt-5 text-[15px] text-black/65">A typical starting ad budget is from {ADS_MIN_DAILY_BUDGET} a day.</p>
          )}
        </div>
      </section>

      {/* ── WHY ADVERTISE ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Label>Why Ads</Label>
            <Heading>Why advertise on social media</Heading>
          </div>
          <p className="text-[16px] text-white/65 leading-relaxed">
            Organic posts mostly reach people who already follow you. Ads put your business in front of new customers by
            location, age, interests and behaviour, and send them straight to WhatsApp, a call, a lead form or your
            website. Done well, social ads are one of the fastest ways to get enquiries.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our social media advertising services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Facebook and Instagram ads in Calicut and across Kerala, plus LinkedIn and YouTube, managed by one team from
              creative to report.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {SERVICES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[210px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-7 text-[18px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[820px] text-[15px] text-white/60 leading-relaxed">
            Ads work best with an active page: see our <Link href={`${HUB}/instagram-marketing-services`} className={LINK}>Instagram marketing</Link> service,
            or the full <Link href={HUB} className={LINK}>social media marketing agency in Calicut</Link> page.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our process</Heading>
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
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <div className="relative mx-auto max-w-[1300px] grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-16 items-start">
          <div>
            <Label dark={false}>Industries</Label>
            <Heading dark={false}>Industries we run ads for</Heading>
            <p className="mt-5 text-[15px] text-black/60 leading-relaxed">
              Social media advertising for small businesses, restaurants and real estate, as well as larger brands.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {INDUSTRIES.map((t) => (
              <li key={t} className="px-5 py-3 rounded-full bg-white border border-black/10 text-[15px] text-black/80">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── KERALA + UAE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article id="kerala" className="p-6 sm:p-10 flex flex-col scroll-mt-24" style={GLASS}>
            <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80"><FaMapMarkerAlt aria-hidden="true" /></span>
            <h2 className="mt-6 text-white" style={h2Style}>Social media advertising in Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              From Calicut, we run campaigns for businesses in Kozhikode, Malappuram, Kochi, Thrissur, Kannur and across
              Kerala, targeting the right towns and Malayalam-speaking audiences in India and the Gulf.
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
            <h2 className="mt-6 text-white" style={h2Style}>Social media advertising in Dubai and the UAE</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              We run Facebook, Instagram and LinkedIn ads for businesses in Dubai, Abu Dhabi, Sharjah and the wider GCC,
              with management fees in AED. The UAE requires an Advertiser Permit for promotional content on social media,
              and we plan campaigns and creator collaborations in line with those rules. We work with Gulf clients remotely from our office in Kozhikode, with calls in Gulf time; we have no office in the UAE.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-white/80 flex-1">
              <Check>Management fees in AED</Check>
              <Check>UAE and GCC audience targeting</Check>
              <Check>Campaigns planned in line with Advertiser Permit rules</Check>
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
          <Heading className="max-w-[760px]">Social media advertising packages</Heading>
          <p className="mt-5 max-w-[760px] text-white/60 text-[16px] leading-relaxed">
            Monthly management fees in rupees for India and in AED for the UAE and GCC. Your ad budget is separate.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-3">
            {ADS_PACKAGES.map((p, i) => (
              <article key={p.id} className={`p-6 sm:p-8 flex flex-col ${i === 1 ? "bg-white text-black rounded-2xl" : ""}`} style={i === 1 ? undefined : GLASS}>
                <h3 className={`text-[11px] font-bold tracking-[0.22em] uppercase ${i === 1 ? "text-black/60" : "text-white/60"}`}>{p.label}</h3>
                <p className="mt-2 text-[19px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.platforms}</p>
                <p className={`mt-4 text-[15px] leading-relaxed flex-1 ${i === 1 ? "text-black/75" : "text-white/75"}`}>{p.includes}</p>
                <p className="mt-6 text-[22px]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {price(p) ? <>{price(p)}<span className={`text-[14px] ${i === 1 ? "text-black/55" : "text-white/55"}`}> / month</span></> : "Price on request"}
                </p>
                <div className="mt-6">
                  <PillLink
                    href={waLink(`Hi Ivoniz, I'm interested in the ${p.label} social media ads package (${p.platforms}). My business: ___`)}
                    external
                    solid
                    dark={i !== 1}
                    event="package_click"
                    label="Ask about this package"
                    location={`ads_package_${p.id}`}
                    icon={<FaWhatsapp aria-hidden="true" />}
                  />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-white/55 leading-relaxed">Ad budget is paid separately to the platform. Prices exclude GST/VAT.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Social media advertising FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Prefer us to handle posting too? See <Link href={`${HUB}/social-media-management`} className={LINK}>social media management</Link> packages.
            </p>
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
            <Label>Free Review</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Get your free <span style={OUTLINE}>ads review</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Already running ads? We&apos;ll review your account and show where you&apos;re losing money. New to ads?
              We&apos;ll send a simple campaign plan for your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.review)} external event="whatsapp_click" label="WhatsApp us" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <AdsReviewForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Ads Review" message={WA.review} />
    </main>
  );
}
