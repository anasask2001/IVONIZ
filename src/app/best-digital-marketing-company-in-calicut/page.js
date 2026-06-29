import Link from "next/link";
import { FaArrowRight, FaStar, FaWhatsapp, FaRegFileAlt, FaMapMarkerAlt, FaChartLine, FaBullseye, FaCheckCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";

/* ════════════════════════════════════════════════════════════════
   METADATA — SEO Title / Meta Description / Canonical
   ════════════════════════════════════════════════════════════════ */
export const metadata = {
  title: "Best Digital Marketing Company in Calicut",
  description:
    "Ivoniz is the best digital marketing agency in Calicut — offering SEO, Google Ads, social media marketing, website & app development. Trusted digital marketing agency in Kerala. Free audit & consultation. Call or WhatsApp now.",
  alternates: {
    canonical: "https://ivoniz.com/best-digital-marketing-company-in-calicut",
    languages: {
      "en-IN": "https://ivoniz.com/best-digital-marketing-company-in-calicut",
      "x-default": "https://ivoniz.com/best-digital-marketing-company-in-calicut",
    },
  },
  openGraph: {
    title: "Best Digital Marketing Company in Calicut | Ivoniz Pvt Ltd",
    description:
      "Ivoniz — the best digital marketing agency in Calicut. SEO, Google Ads, Social Media, Web & App Development. Serving Calicut and all of Kerala.",
    url: "https://ivoniz.com/best-digital-marketing-company-in-calicut",
    type: "website",
    images: [
      {
        url: "/ivoniz-og-image.webp",
        width: 1734,
        height: 907,
        alt: "Ivoniz Pvt Ltd — Best Digital Marketing Company in Calicut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Calicut | Ivoniz Pvt Ltd",
    description: "Ivoniz — the best digital marketing agency in Calicut. SEO, Google Ads, Social Media, Web & App Development.",
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ════════════════════════════════════════════════════════════════
   FAQ DATA — single source of truth for rendering + FAQPage schema
   ════════════════════════════════════════════════════════════════ */
const FAQS = [
  {
    q: "Who is the best digital marketing agency in Calicut?",
    a: "Ivoniz Pvt Ltd is widely regarded as the best digital marketing agency in Calicut, with a proven track record across SEO, Google Ads, social media marketing, and website development for businesses across Kerala.",
  },
  {
    q: "What does a digital marketing agency in Calicut actually do?",
    a: "A digital marketing agency in Calicut like Ivoniz manages your SEO, paid ads, social media, content, and website to generate measurable leads, calls, and sales for your business — instead of you handling it all in-house.",
  },
  {
    q: "Why should I choose Ivoniz in Calicut over other agencies?",
    a: "Choosing Ivoniz in Calicut means working with a local team that understands the Calicut and Kerala market, combined with data-driven SEO, ad management, and conversion-focused web development — all under one roof.",
  },
  {
    q: "Is Ivoniz the best digital marketing agency in Kerala?",
    a: "Yes. Ivoniz is recognized as the best digital marketing agency in Kerala, serving clients across Calicut, Thrissur, Malappuram, Kannur, and other districts with full-funnel digital marketing services.",
  },
  {
    q: "What makes Ivoniz different from other ad agencies in Calicut?",
    a: "Unlike most ad agencies in Calicut that focus only on running ads, Ivoniz combines SEO, performance marketing, branding, and technology (websites & apps) into one integrated growth strategy.",
  },
  {
    q: "How much does digital marketing in Calicut cost?",
    a: "Digital marketing Calicut pricing with Ivoniz starts with a free audit and a custom quote based on your goals — whether that's local SEO, Google Ads, or a full digital marketing agency Calicut package.",
  },
  {
    q: "Can a digital marketing agency in Kerala help my local shop or showroom?",
    a: "Yes. A digital marketing agency in Kerala such as Ivoniz helps local shops, showrooms, clinics, and service businesses rank on Google Maps, attract walk-ins, and generate WhatsApp and phone enquiries.",
  },
  {
    q: "Do you offer SEO services along with digital marketing in Calicut?",
    a: "Yes, SEO is at the core of every digital marketing Calicut engagement we run — including on-page SEO, technical SEO, local SEO, and content SEO to help you rank higher on Google.",
  },
  {
    q: "Does Ivoniz manage Google Ads and Meta Ads too?",
    a: "Yes. As a full-service digital marketing agency Calicut businesses trust, Ivoniz manages Google Ads, Meta Ads (Facebook & Instagram), and performance marketing campaigns end-to-end.",
  },
  {
    q: "How is Ivoniz different from typical ad agencies in Calicut?",
    a: "Most ad agencies in Calicut stop at running campaigns. Ivoniz goes further — optimizing your website, tracking conversions, and reporting real ROI, not just impressions and clicks.",
  },
  {
    q: "Is there an ad agency in Calicut that also builds websites?",
    a: "Yes — Ivoniz is an ad agency in Calicut that also designs and develops high-converting websites, e-commerce stores, and mobile apps, so your ad traffic actually converts.",
  },
  {
    q: "How long does SEO take to show results in Calicut?",
    a: "Most digital marketing Calicut clients of Ivoniz start seeing measurable SEO improvements — keyword rankings, traffic, and local visibility — within 60 to 90 days, with stronger compounding results over 6 months.",
  },
  {
    q: "Do you provide a free SEO or website audit?",
    a: "Yes. Ivoniz, the best digital marketing agency in Calicut, offers a completely free SEO audit and free website audit so you can see exactly what's holding your rankings and conversions back.",
  },
  {
    q: "Which industries does Ivoniz serve as a digital marketing company in Calicut?",
    a: "As a digital marketing company in Calicut, Ivoniz serves jewellery, fashion & textiles, real estate, healthcare, education, hospitality, automobile, and e-commerce businesses across Kerala.",
  },
  {
    q: "How do I get started with Ivoniz in Calicut?",
    a: "Simply book a free strategy session, call us, or message us on WhatsApp. Ivoniz in Calicut will review your business and recommend the right digital marketing plan within 24 hours.",
  },
  {
    q: "Is Ivoniz the right digital marketing agency in Kerala for small businesses too?",
    a: "Absolutely. Whether you're a startup or an established brand, Ivoniz — a leading digital marketing agency in Kerala — builds custom packages that scale with your business size and budget.",
  },
];

/* ════════════════════════════════════════════════════════════════
   SCHEMA — FAQPage / Service / BreadcrumbList / Speakable
   (Organization/LocalBusiness is defined once, sitewide, in the
   root layout — see src/lib/schema.js — and referenced here by @id.)
   ════════════════════════════════════════════════════════════════ */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing Agency",
  provider: { "@id": "https://ivoniz.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Calicut" },
    { "@type": "State", name: "Kerala" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      "Search Engine Optimization (SEO)",
      "Local SEO",
      "Google Ads Management",
      "Meta Ads Management",
      "Social Media Marketing",
      "Performance Marketing",
      "Content Marketing",
      "Website Development",
      "Ecommerce Development",
      "Mobile App Development",
      "Branding",
      "AI Automation",
      "Lead Generation",
      "Conversion Rate Optimization",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Best Digital Marketing Company in Calicut",
      item: "https://ivoniz.com/best-digital-marketing-company-in-calicut",
    },
  ],
};

/* AEO — Speakable schema flags the quick-answer text for voice assistants
   (Google Assistant, Siri) to read aloud as a direct spoken answer. */
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://ivoniz.com/best-digital-marketing-company-in-calicut",
  name: "Best Digital Marketing Company in Calicut",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#quick-answer"],
  },
};

/* ════════════════════════════════════════════════════════════════
   SHARED UI BITS
   ════════════════════════════════════════════════════════════════ */
function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-10 xl:px-16 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

function CTAButtons({ context = "" }) {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 h-13 px-8 bg-black text-white text-sm font-bold tracking-wide rounded-full hover:bg-black/85 transition-colors"
      >
        Book a Free Strategy Session <FaArrowRight aria-hidden="true" className="text-[13px]" />
      </Link>
      <a
        href="https://wa.me/919645760023?text=Hi%20Ivoniz%2C%20I%20found%20you%20as%20the%20best%20digital%20marketing%20agency%20in%20Calicut%20and%20want%20a%20free%20SEO%20audit."
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 h-13 px-8 border border-black/15 text-black text-sm font-bold tracking-wide rounded-full hover:bg-black hover:text-white transition-colors"
      >
        WhatsApp Us <FaArrowRight aria-hidden="true" className="text-[13px]" />
      </a>
      <a
        href="tel:+919645760023"
        className="inline-flex items-center gap-2 h-13 px-8 border border-black/15 text-black text-sm font-bold tracking-wide rounded-full hover:bg-black hover:text-white transition-colors"
      >
        Call Now: +91 96457 60023
      </a>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function BestDigitalMarketingCompanyInCalicut() {
  return (
    <main id="main-content" className="bg-white text-black">

      {/* ── JSON-LD Schema ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs dark items={[{ label: "Best Digital Marketing Company in Calicut", href: "/best-digital-marketing-company-in-calicut" }]} />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 mt-4 mb-5">
            Ivoniz Pvt Ltd · Kozhikode, Kerala
          </p>
          <h1 className="font-bold leading-[1.08] mb-6" style={{ fontSize: "clamp(32px,5vw,58px)" }}>
            Best Digital Marketing Company in Calicut
          </h1>

          {/* AEO/GEO quick-answer — direct, self-contained, citable by
              featured snippets, voice assistants, and AI answer engines. */}
          <p
            id="quick-answer"
            className="text-white/80 text-base leading-relaxed max-w-2xl mb-6 border-l-2 border-white/25 pl-4"
          >
            Ivoniz Pvt Ltd is the best digital marketing company in Calicut, Kerala — a 4.9-star rated agency
            offering SEO, Google Ads, social media marketing, and website development, headquartered at HiLITE
            Business Park, Kozhikode.
          </p>

          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-4">
            Ivoniz is the <strong className="text-white">best digital marketing agency in Calicut</strong>, helping
            local and national brands grow with SEO, Google Ads, social media marketing, and conversion-focused
            websites. If you searched for a <strong className="text-white">digital marketing agency in Calicut</strong>,
            you&apos;ve found it.
          </p>
          <p className="text-white/55 leading-relaxed max-w-2xl mb-2">
            From small showrooms to growing enterprises, <strong className="text-white">Ivoniz in Calicut</strong>{" "}
            delivers measurable leads, calls, and sales — not just vanity metrics.
          </p>
          <CTAButtons context="hero" />
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <Section className="bg-white">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/60 mb-5">Introduction</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ivoniz – The Best Digital Marketing Agency in Calicut
        </h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Calicut (Kozhikode) is one of Kerala&apos;s fastest-growing commercial hubs — home to thriving jewellery
          showrooms, fashion retailers, real estate developers, hospitals, and educational institutions. As
          competition online intensifies, businesses across the district are searching for a reliable{" "}
          <strong>digital marketing agency in Calicut</strong> that can turn website visitors into paying customers.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          That is exactly where <strong>Ivoniz</strong> comes in. As the{" "}
          <strong>best digital marketing agency in Calicut</strong>, we combine search engine optimization, paid
          advertising, social media marketing, and high-performance web development into one accountable growth
          engine. Whether you need <strong>digital marketing Calicut</strong> services for a single product launch
          or a full <strong>digital marketing agency Calicut</strong> retainer to manage your entire online presence,
          our team builds a strategy around your business goals — not generic templates.
        </p>
        <p className="text-black/65 leading-relaxed">
          This page explains exactly why hundreds of businesses across Kerala choose{" "}
          <strong>Ivoniz in Calicut</strong> over other local agencies, what services we offer, how our process works,
          and how you can get started today with a free audit.
        </p>
      </Section>

      {/* ── ABOUT IVONIZ ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Ivoniz Pvt Ltd</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Ivoniz Pvt Ltd is a full-service digital marketing, SEO, web development, and mobile app development
          company headquartered at HiLITE Business Park, Kozhikode, Kerala. We were founded with one mission:
          to create &ldquo;galaxies of possibilities&rdquo; for technological advancement and attract investment
          to Calicut and Thrissur by promoting young, talented teams to do their creative best.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Today, <strong>Ivoniz</strong> — also known as <strong>Ivoniz Technologies</strong> and operating as a{" "}
          <strong>Ivoniz digital marketing agency</strong> — serves clients across Calicut, Thrissur, Malappuram,
          Kannur, and beyond. Our services span Search Engine Optimization (SEO), Local SEO, Google Ads Management,
          Meta Ads Management, Social Media Marketing, Performance Marketing, Content Marketing, Website
          Development, Ecommerce Development, Mobile App Development, Branding, AI Automation, Lead Generation,
          and Conversion Rate Optimization.
        </p>
        <p className="text-black/65 leading-relaxed">
          With a 4.9-star Google rating from real client reviews, <strong>Ivoniz Pvt Ltd</strong> has built its
          reputation the hard way — through delivered results, not empty promises.
        </p>
      </Section>

      {/* ── WHY BUSINESSES IN CALICUT NEED DIGITAL MARKETING ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why Businesses in Calicut Need Digital Marketing
        </h2>
        <p className="text-black/65 leading-relaxed mb-6">
          Consumer behaviour in Kerala has shifted permanently online. Shoppers in Calicut research products on
          Google and Instagram before ever walking into a showroom. Patients search &ldquo;clinic near me&rdquo;
          before calling. Students compare colleges on search engines before applying. Without a strong digital
          presence, even well-established businesses lose customers to competitors who show up first on Google.
        </p>
        <ul className="space-y-3 text-black/65 leading-relaxed mb-6">
          <li className="flex gap-2.5"><FaMapMarkerAlt className="shrink-0 mt-1 text-black/60" /> <span><strong>Local discovery</strong> — most customers in Calicut now find businesses via Google Maps and local search, not word-of-mouth alone.</span></li>
          <li className="flex gap-2.5"><FaChartLine className="shrink-0 mt-1 text-black/60" /> <span><strong>Rising competition</strong> — as more businesses go digital, ranking on page one of Google requires expert SEO, not guesswork.</span></li>
          <li className="flex gap-2.5"><FaWhatsapp className="shrink-0 mt-1 text-black/60" /> <span><strong>WhatsApp-first enquiries</strong> — Kerala customers prefer messaging over forms; your funnel must be built around that behaviour.</span></li>
          <li className="flex gap-2.5"><FaBullseye className="shrink-0 mt-1 text-black/60" /> <span><strong>Paid ads waste money without strategy</strong> — running Google Ads or Meta Ads without proper targeting burns budget fast.</span></li>
        </ul>
        <p className="text-black/65 leading-relaxed">
          This is precisely why partnering with an experienced <strong>digital marketing company in Calicut</strong>{" "}
          like Ivoniz — rather than attempting digital marketing in-house or hiring a freelancer — consistently
          delivers a stronger return on investment.
        </p>
      </Section>

      {/* ── WHY CHOOSE IVONIZ ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose Ivoniz in Calicut</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { t: "Local Market Expertise", d: "We understand Calicut & Kerala consumer behaviour, language, and buying patterns better than any outstation agency." },
            { t: "Full-Funnel Service", d: "SEO, ads, social media, websites, and apps — all under one accountable team, not five disconnected vendors." },
            { t: "Transparent Reporting", d: "Real dashboards showing leads, calls, and ROI — not vague impression counts." },
            { t: "Proven Results", d: "A 4.9-star Google rating built on real client outcomes across Calicut and Kerala." },
          ].map((c) => (
            <div key={c.t} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">{c.t}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 leading-relaxed mt-8">
          When businesses compare us against other <strong className="text-white">ad agencies in Calicut</strong>,
          the difference is clear: Ivoniz does not just &ldquo;run campaigns&rdquo; — we build complete digital
          growth systems designed to compound over time.
        </p>
      </Section>

      {/* ── OUR SERVICES OVERVIEW ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Our Services — Digital Marketing Agency in Calicut Solutions
        </h2>
        <p className="text-black/65 leading-relaxed mb-8">
          As a complete <strong>digital marketing agency in Calicut</strong>, Ivoniz offers every service a growing
          business needs to win online — under one roof, with one accountable team.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-black/10 rounded-xl overflow-hidden">
            <thead className="bg-[#f8f8f8] text-left">
              <tr>
                <th className="py-3 px-4 font-semibold">Service</th>
                <th className="py-3 px-4 font-semibold">What It Does For You</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/8">
              {[
                ["Search Engine Optimization (SEO)", "Ranks your website on Google for buyer-intent keywords"],
                ["Local SEO", "Gets you found on Google Maps & 'near me' searches in Calicut"],
                ["Google Ads Management", "Drives instant, targeted traffic that converts to leads"],
                ["Meta Ads Management", "Runs Facebook & Instagram campaigns that reach the right buyers"],
                ["Social Media Marketing", "Builds brand presence and engagement across platforms"],
                ["Performance Marketing", "Optimizes every rupee of ad spend toward measurable ROI"],
                ["Content Marketing", "Creates content that educates, ranks, and converts"],
                ["Website Development", "Builds fast, mobile-first websites that convert visitors"],
                ["Ecommerce Development", "Launches online stores built to sell, not just display"],
                ["Mobile App Development", "Builds Android & iOS apps for customer retention"],
                ["Branding", "Crafts a consistent identity across every touchpoint"],
                ["AI Automation", "Automates lead follow-up, chat, and reporting workflows"],
                ["Lead Generation", "Builds funnels engineered to capture calls, forms & WhatsApp leads"],
                ["Conversion Rate Optimization", "Turns more of your existing traffic into paying customers"],
              ].map(([s, d]) => (
                <tr key={s}>
                  <td className="py-3 px-4 font-medium">{s}</td>
                  <td className="py-3 px-4 text-black/60">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-10 mb-3">
          How Our Digital Marketing Agency Calicut Process Works
        </h3>
        <p className="text-black/65 leading-relaxed">
          Every <strong>digital marketing agency calicut</strong> client starts with a free audit, followed by a
          custom strategy, monthly execution, and transparent reporting — repeated and refined every single month.
        </p>
      </Section>

      {/* ── SEO SERVICES ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">SEO Services in Calicut</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          SEO is the foundation of every campaign we run. As a <strong>digital marketing company in Calicut</strong>,
          Ivoniz performs deep technical audits, on-page optimization, content strategy, and authoritative link
          building to help your website rank for the exact terms your customers are searching — including
          high-intent local terms tied to Calicut and the wider Kerala market.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Our SEO process begins with a full technical audit — checking site speed, mobile usability, crawlability,
          duplicate content, and broken links — because no amount of content or link building can overcome a
          technically broken website. From there, we map keyword opportunities specific to your industry and
          location, prioritizing terms with real buyer intent over vanity search volume.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          On-page optimization follows: rewriting titles, meta descriptions, headings, and content to match search
          intent precisely, while structuring pages for both traditional Google rankings and AI-driven answer
          engines like Google AI Overviews. We then build topical authority through pillar content, internal
          linking, and earned backlinks from relevant, authoritative sources — never through spammy link farms
          that risk long-term penalties.
        </p>
        <p className="text-black/65 leading-relaxed">
          Our SEO process is fully transparent: keyword research, competitor gap analysis, on-page fixes, technical
          health checks, and monthly ranking reports — so you always know exactly what you&apos;re paying for and
          exactly what results it produced.
        </p>
      </Section>

      {/* ── GOOGLE ADS SERVICES ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Google Ads Services</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Google Ads delivers leads from day one — if managed correctly. Ivoniz builds high-intent search campaigns,
          remarketing funnels, and call-only campaigns tailored for businesses across Calicut. Every campaign is
          built around a single goal: lowering your cost-per-lead while increasing lead quality.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          We start every Google Ads engagement with conversion tracking — phone calls, WhatsApp clicks, and form
          fills are all measured from day one, so we know precisely which keywords, ads, and landing pages actually
          produce paying customers, not just clicks. Campaigns are structured around search intent: separate
          campaigns for branded terms, competitor terms, and generic high-volume terms, each with its own bidding
          strategy and budget allocation.
        </p>
        <p className="text-black/65 leading-relaxed">
          We continuously test ad copy, landing pages, and bidding strategies — ensuring your ad budget is never
          wasted on irrelevant clicks. Weekly optimization reviews mean wasted spend gets cut fast, and winning ads
          get scaled faster.
        </p>
      </Section>

      {/* ── SOCIAL MEDIA MARKETING ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Social Media Marketing</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          From Instagram reels to Facebook ad funnels, Ivoniz builds social media strategies that build brand trust
          and drive direct enquiries. We manage content calendars, creative design, paid boosts, and community
          engagement — so your brand stays consistently visible to your Calicut and Kerala audience.
        </p>
        <p className="text-black/65 leading-relaxed">
          Every social media calendar is planned around your business goals, not generic content trends — whether
          that&apos;s driving showroom footfall, promoting a new product launch, or building long-term brand
          recall. We pair organic content with targeted paid boosts so your best-performing posts reach far beyond
          your existing followers, directly into the feeds of potential customers across Calicut.
        </p>
      </Section>

      {/* ── WEBSITE DEVELOPMENT ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Website Development</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          A slow, outdated website kills conversions before marketing even begins. Ivoniz builds fast, mobile-first,
          SEO-ready websites using modern frameworks like Next.js — designed specifically to convert traffic from
          your SEO and ad campaigns into real enquiries.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Every website we build is engineered around conversion: clear calls-to-action, click-to-call and
          click-to-WhatsApp buttons on every page, fast load times on mobile networks, and clean information
          architecture that guides visitors toward enquiring — not just browsing. Because the same team handles
          your SEO and your website, technical fixes happen instantly instead of waiting weeks for a separate web
          developer to respond.
        </p>
        <p className="text-black/65 leading-relaxed">
          Looking for a dedicated web build? See our full breakdown on{" "}
          <Link href="/best-website-development-company-in-calicut" className="underline font-medium">
            website development services in Calicut
          </Link>
          , including e-commerce, web apps, and SEO-ready builds.
        </p>
      </Section>

      {/* ── MOBILE APP DEVELOPMENT ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Mobile App Development</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          For businesses ready to build long-term customer retention, Ivoniz develops native and cross-platform
          mobile apps (Flutter, React Native, iOS, Android) — complete with push notifications, loyalty features,
          and seamless checkout experiences.
        </p>
        <p className="text-black/65 leading-relaxed">
          A branded app turns one-time website visitors into repeat customers — sending push notifications for
          offers, tracking loyalty points, and providing a faster checkout than any browser-based experience can
          match. For retail, healthcare, and education clients across Calicut, this has proven to be one of the
          highest-retention channels in their entire marketing stack.
        </p>
      </Section>

      {/* ── LOCAL SEO SERVICES ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Local SEO Services for Calicut Businesses</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Local SEO is where most <strong>ad agencies in Calicut</strong> fall short — they focus only on paid
          traffic and ignore free, high-intent Google Maps visibility. Ivoniz optimizes your Google Business
          Profile, builds local citations, manages reviews, and targets neighbourhood-level keywords so your
          business appears when customers search &ldquo;near me&rdquo; across Calicut.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          We ensure your business name, address, and phone number (NAP) stay perfectly consistent across Google,
          Justdial, Sulekha, and every other local directory — inconsistent listings are one of the most common,
          and most damaging, local SEO mistakes we see when auditing new clients in Calicut. We also build a
          proactive review-generation system, because review volume and recency are among the strongest local
          ranking signals Google uses today.
        </p>
        <p className="text-black/65 leading-relaxed">
          This is a core part of every <strong>digital marketing Calicut</strong> engagement, because local
          visibility consistently produces the highest-intent, lowest-cost leads of any channel — a customer
          searching &ldquo;near me&rdquo; is often minutes away from walking through your door or picking up the
          phone.
        </p>
      </Section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Industries We Serve</h2>
        <p className="text-black/65 leading-relaxed mb-8">
          Every industry markets differently. A jewellery showroom and a clinic don&apos;t need the same funnel —
          which is why Ivoniz tailors strategy, creative, and channel mix to the specific buying behaviour of each
          sector we work with across Calicut and Kerala.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ["Jewellery & Gold", "Visual-first campaigns and local SEO for showroom footfall"],
            ["Fashion & Textiles", "E-commerce growth and seasonal campaign management"],
            ["Real Estate", "Lead generation funnels for site visits and bookings"],
            ["Healthcare & Clinics", "Local SEO and reputation management for patient trust"],
            ["Education", "Admission-cycle campaigns and enquiry funnels"],
            ["Hospitality", "Booking-focused websites and review management"],
            ["Automobile", "Showroom lead generation and service reminders"],
            ["E-Commerce", "Performance marketing and conversion rate optimization"],
            ["Professional Services", "Authority-building content and local SEO"],
          ].map(([i, d]) => (
            <div key={i} className="bg-white border border-black/8 rounded-xl px-5 py-4">
              <p className="text-sm font-semibold mb-1">{i}</p>
              <p className="text-xs text-black/50 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── BENEFITS OF HIRING A DIGITAL MARKETING AGENCY ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Benefits of Hiring a Digital Marketing Agency
        </h2>
        <ul className="space-y-4 text-black/65 leading-relaxed">
          {[
            { t: "Save time", d: "focus on running your business while experts handle the day-to-day of SEO, ads, and content, instead of learning it all from scratch." },
            { t: "Access a full team", d: "SEO specialists, ad managers, designers, and developers — for less than the cost of one in-house hire." },
            { t: "Faster results", d: "through proven, tested strategies refined across dozens of clients, instead of trial-and-error guesswork." },
            { t: "Clear reporting and accountability", d: "you see exactly where every rupee of your budget goes and what it produced." },
            { t: "Flexible scaling", d: "increase or decrease investment as your business grows, without the overhead of hiring or firing staff." },
            { t: "Stay ahead of algorithm changes", d: "Google and Meta update their algorithms constantly; an experienced agency adapts your strategy before it costs you rankings or ad performance." },
          ].map((b) => (
            <li key={b.t} className="flex gap-2.5">
              <FaCheckCircle className="shrink-0 mt-1 text-emerald-600" />
              <span><strong>{b.t}</strong> — {b.d}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── COMPARISON: IVONIZ VS TYPICAL AD AGENCIES IN CALICUT ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ivoniz vs. Typical Ad Agencies in Calicut
        </h2>
        <p className="text-black/65 leading-relaxed mb-8">
          Not all <strong>ad agencies in Calicut</strong> offer the same depth of service. Here&apos;s how Ivoniz
          compares to the typical single-channel agency most businesses are used to working with.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-black/10 rounded-xl overflow-hidden">
            <thead className="bg-white text-left">
              <tr>
                <th className="py-3 px-4 font-semibold">Capability</th>
                <th className="py-3 px-4 font-semibold">Typical Ad Agency in Calicut</th>
                <th className="py-3 px-4 font-semibold">Ivoniz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/8 bg-white">
              {[
                ["SEO + Paid Ads Together", "Rare — usually only one channel", "Yes, fully integrated"],
                ["In-House Web Development", "Outsourced to third parties", "Built in-house"],
                ["WhatsApp-First Lead Capture", "Rarely configured", "Standard on every funnel"],
                ["Transparent ROI Reporting", "Impressions & reach only", "Leads, calls & conversions"],
                ["Local Kerala Market Knowledge", "Varies", "Deep, Calicut-based team"],
              ].map(([cap, them, us]) => (
                <tr key={cap}>
                  <td className="py-3 px-4 font-medium">{cap}</td>
                  <td className="py-3 px-4 text-black/50">{them}</td>
                  <td className="py-3 px-4 text-black/70 font-medium">{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── WHY IVONIZ IS DIFFERENT ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Looking for an Ad Agency in Calicut? Why Ivoniz Wins
        </h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Most <strong>ad agency in Calicut</strong> options specialize in just one channel — either SEO, or ads,
          or social media. Ivoniz was built differently: as a single team covering strategy, creative, technology,
          and paid media — so nothing falls through the cracks between vendors, and no campaign waits on a
          third-party developer to fix a broken landing page.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          We also build the assets your marketing depends on — websites and apps — in-house. That means faster
          fixes, better technical SEO, and a marketing funnel that&apos;s fully under one roof&apos;s control. When
          an SEO recommendation requires a website change, our own developers implement it the same week — not
          after weeks of back-and-forth between separate vendors who don&apos;t talk to each other.
        </p>
        <p className="text-black/65 leading-relaxed">
          Finally, every engagement starts with a strategy session, not a sales pitch. We learn your business,
          your margins, and your sales cycle before recommending a single channel — because the right mix of SEO,
          ads, and content is different for every business we work with.
        </p>
      </Section>

      {/* ── LOCAL MARKET INSIGHTS ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Local Market Insights for Calicut</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Calicut&apos;s economy is anchored by jewellery and gold retail, textiles, real estate, and a growing IT
          and startup ecosystem centred around HiLITE Business Park. Mobile-first browsing dominates — the majority
          of local searches for <strong>digital marketing agency calicut</strong> services happen on smartphones,
          which is why every website and ad funnel Ivoniz builds is mobile-optimized first.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          WhatsApp Business remains the preferred contact channel across Kerala — outperforming traditional contact
          forms by a wide margin in actual response rate. That&apos;s why every campaign we run for clients in
          Calicut is built with WhatsApp click-to-chat front and centre, rather than relying solely on email forms
          that often go unanswered for days.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Seasonal buying patterns also shape strategy here — wedding season drives jewellery and textile demand,
          academic-year cycles drive education enquiries, and festival periods like Onam and Eid create predictable
          spikes across nearly every retail category. A <strong>digital marketing agency in Kerala</strong> that
          understands these cycles can plan campaigns ahead of demand, instead of reacting after the opportunity
          has passed.
        </p>
        <p className="text-black/65 leading-relaxed mb-8">
          Competition for digital visibility in Calicut has grown sharply over the past few years, with more
          businesses than ever investing in SEO and paid ads. Ranking on page one today requires genuine expertise
          — which is exactly the gap Ivoniz, as a dedicated <strong>digital marketing agency in Calicut</strong>,
          was built to close.
        </p>

        <h3 className="text-xl font-bold mb-3">Digital Marketing Calicut: The Bottom Line</h3>
        <p className="text-black/65 leading-relaxed">
          Whatever stage your business is at, <strong>digital marketing calicut</strong> done right means more
          calls, more WhatsApp enquiries, and more walk-ins — not just higher impressions on a dashboard nobody
          checks.
        </p>
      </Section>

      {/* ── CASE STUDY STYLE SECTION ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Results We&apos;ve Delivered</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          {[
            { v: "300%", l: "Increase in online sales for an e-commerce fashion brand" },
            { v: "4.9", l: "Average Google rating across client reviews", star: true },
            { v: "60–90", l: "Days to first measurable SEO ranking gains" },
          ].map((s) => (
            <div key={s.l} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="font-bold text-3xl mb-2 inline-flex items-center gap-1.5">
                {s.v}
                {s.star && <FaStar className="text-[22px] text-amber-400" />}
              </p>
              <p className="text-white/55 text-sm leading-relaxed">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 leading-relaxed">
          &ldquo;Working with Ivoniz was a game changer for us. They built a stunning e-commerce website that
          increased our online sales by 300%. Highly recommended!&rdquo; — Sarah Johnson, Arlocks Fashion
        </p>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq" className="bg-[#f8f8f8]">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/60 mb-5">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group bg-white border border-black/8 rounded-xl px-5 py-4">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                {f.q}
                <span className="text-black/55 group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <p className="text-black/60 text-sm leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ── LEAD GENERATION CTA SECTION ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get a Free Audit From the Best Digital Marketing Agency in Kerala
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mb-2">
          Not sure where your website or ads are losing leads? Claim a completely free SEO audit, free website
          audit, or free consultation from Ivoniz — the <strong className="text-white">best digital marketing
          agency in Calicut</strong> — and get a clear, actionable report within 48 hours.
        </p>
        <p className="text-white/50 leading-relaxed max-w-2xl mb-2">
          As a trusted <strong className="text-white">digital marketing agency in Kerala</strong>, we&apos;ve helped
          businesses across Calicut, Thrissur, and beyond turn audits into real growth plans.
        </p>
        <p className="text-white/50 leading-relaxed max-w-2xl mb-2">
          Compare us against any other <strong className="text-white">ad agencies in Calicut</strong> you&apos;re
          considering — then book your free <strong className="text-white">digital marketing calicut</strong>{" "}
          consultation and see the difference a full-service <strong className="text-white">digital marketing agency calicut</strong> team makes.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/contact" className="inline-flex items-center gap-2 h-13 px-8 bg-white text-black text-sm font-bold tracking-wide rounded-full hover:bg-white/90 transition-colors">
            Free SEO Audit <FaArrowRight aria-hidden="true" className="text-[13px]" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 h-13 px-8 border border-white/25 text-white text-sm font-bold tracking-wide rounded-full hover:bg-white hover:text-black transition-colors">
            Free Website Audit <FaArrowRight aria-hidden="true" className="text-[13px]" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 h-13 px-8 border border-white/25 text-white text-sm font-bold tracking-wide rounded-full hover:bg-white hover:text-black transition-colors">
            Book a Strategy Session <FaArrowRight aria-hidden="true" className="text-[13px]" />
          </Link>
        </div>
      </Section>

      {/* ── CONTACT SECTION ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Ivoniz in Calicut</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3 text-black/65 leading-relaxed">
            <p><strong>Address:</strong> 7th Floor, Phase 1, HiLITE Business Park, Ivoniz Technologies Private Limited, Kozhikode, Kerala 673001</p>
            <p><strong>Phone:</strong> <a href="tel:+919645760023" className="underline">+91 96457 60023</a></p>
            <p><strong>WhatsApp (Sales):</strong> <a href="https://wa.me/919645760023" target="_blank" rel="noreferrer" className="underline">+91 96457 60023</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@ivoniz.com" className="underline">info@ivoniz.com</a></p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="tel:+919645760023" className="inline-flex items-center justify-center gap-2 h-13 px-8 bg-black text-white text-sm font-bold tracking-wide rounded-full hover:bg-black/85 transition-colors">
              <IoMdCall className="text-[16px]" /> Call Now
            </a>
            <a href="https://wa.me/919645760023" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 h-13 px-8 border border-black/15 text-black text-sm font-bold tracking-wide rounded-full hover:bg-black hover:text-white transition-colors">
              <FaWhatsapp className="text-[16px]" /> WhatsApp Enquiry
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-13 px-8 border border-black/15 text-black text-sm font-bold tracking-wide rounded-full hover:bg-black hover:text-white transition-colors">
              <FaRegFileAlt className="text-[15px]" /> Contact Form
            </Link>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Ready to Work With the Best Digital Marketing Agency in Calicut?
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto text-center mb-2">
          Whether you need a <strong className="text-white">digital marketing company in Calicut</strong> for SEO,
          a dependable <strong className="text-white">ad agency in Calicut</strong> for paid campaigns, or a
          full <strong className="text-white">digital marketing agency in Kerala</strong> partner to manage
          everything — <strong className="text-white">Ivoniz in Calicut</strong> is ready to help you grow.
        </p>
        <div className="flex justify-center">
          <CTAButtons context="final" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
