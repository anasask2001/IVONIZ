import Link from "next/link";
import { FaArrowRight, FaStar, FaWhatsapp, FaRegFileAlt, FaMapMarkerAlt, FaChartLine, FaBullseye, FaCheckCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";

/* ════════════════════════════════════════════════════════════════
   METADATA
   ════════════════════════════════════════════════════════════════ */
export const metadata = {
  title: "Best Digital Marketing Company in Kochi",
  description:
    "Looking for the best digital marketing agency in Kochi? Ivoniz is a results-driven digital marketing agency offering SEO, ads, social media, and web development. Trusted digital marketing agency in Kerala. Free audit available.",
  alternates: {
    canonical: "https://ivoniz.com/best-digital-marketing-company-in-kochi",
    languages: {
      "en-IN": "https://ivoniz.com/best-digital-marketing-company-in-kochi",
      "x-default": "https://ivoniz.com/best-digital-marketing-company-in-kochi",
    },
  },
  openGraph: {
    title: "Best Digital Marketing Company in Kochi | Ivoniz Pvt Ltd",
    description:
      "Ivoniz — a results-driven digital marketing agency in Kochi serving Ernakulam and all of Kerala.",
    url: "https://ivoniz.com/best-digital-marketing-company-in-kochi",
    type: "website",
    images: [
      {
        url: "/ivoniz-og-image.webp",
        width: 1734,
        height: 907,
        alt: "Ivoniz Pvt Ltd — Best Digital Marketing Company in Kochi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Kochi | Ivoniz Pvt Ltd",
    description: "Ivoniz — a results-driven digital marketing agency in Kochi serving Ernakulam and all of Kerala.",
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ════════════════════════════════════════════════════════════════
   FAQ DATA
   ════════════════════════════════════════════════════════════════ */
const FAQS = [
  {
    q: "What should I look for in a digital marketing agency in Kochi?",
    a: "Look for a digital marketing agency in Kochi that combines SEO, paid advertising, and web development under one team, reports real leads and calls rather than just impressions, and understands the local Kochi and Ernakulam buyer.",
  },
  {
    q: "Is Ivoniz a digital marketing agency Kochi businesses can trust long term?",
    a: "Yes — Ivoniz has built lasting relationships as a digital marketing agency Kochi businesses return to repeatedly, thanks to transparent monthly reporting and a 4.9-star Google rating earned through real client outcomes.",
  },
  {
    q: "What exactly does a digital marketing company Kochi engagement include?",
    a: "A typical digital marketing company Kochi engagement with Ivoniz includes a free audit, a custom strategy covering SEO and paid ads, website or landing page improvements, and monthly performance reporting.",
  },
  {
    q: "What is a digital marketing agency, in simple terms?",
    a: "A digital marketing agency is a specialist team that plans and runs your SEO, advertising, content, and online presence professionally, so you don't have to learn every channel yourself or hire a full internal team.",
  },
  {
    q: "How do I know if Ivoniz is the best digital marketing agency in Kochi for my business?",
    a: "Book a free strategy call — the best digital marketing agency in Kochi for your business is one that asks about your goals and margins before recommending a channel, which is exactly how every Ivoniz engagement starts.",
  },
  {
    q: "What does a digital marketing company in Kochi typically charge?",
    a: "Pricing from a digital marketing company in Kochi varies by scope. Ivoniz starts every relationship with a free audit and then provides a custom quote based on whether you need SEO, paid ads, or a full-funnel package.",
  },
  {
    q: "How is Ivoniz positioned as the best digital marketing company in Kochi?",
    a: "Ivoniz earns its position as the best digital marketing company in Kochi by combining SEO, Google Ads, Meta Ads, content, and web development in-house — rather than outsourcing pieces to third parties.",
  },
  {
    q: "Does Ivoniz work as a digital marketing agency in Kerala beyond Kochi?",
    a: "Yes. As a digital marketing agency in Kerala, Ivoniz serves businesses across Kochi, Ernakulam, Calicut, Thrissur, and other districts using the same proven SEO and advertising process.",
  },
  {
    q: "How long before a digital marketing agency in Kochi shows SEO results?",
    a: "Most clients working with our digital marketing agency in Kochi see initial keyword ranking movement within 60–90 days, with stronger compounding traffic and lead growth over 6 months.",
  },
  {
    q: "Can a small business afford a digital marketing agency Kochi package?",
    a: "Yes. Ivoniz builds digital marketing agency Kochi packages that scale with budget — from a single-channel SEO retainer for small businesses to full-funnel management for larger brands.",
  },
  {
    q: "Why do businesses specifically search for the best digital marketing agency in Kochi rather than hire freelancers?",
    a: "Businesses search for the best digital marketing agency in Kochi because a freelancer typically covers one channel, while an agency like Ivoniz manages strategy, ads, SEO, and web development together — with accountability across the whole funnel.",
  },
  {
    q: "Is SEO included in a digital marketing company Kochi retainer, or is it separate?",
    a: "SEO is included as a core part of every digital marketing company Kochi retainer at Ivoniz, alongside paid media and content — we don't treat it as a separate add-on service.",
  },
  {
    q: "What makes Ivoniz different from other firms claiming to be the best digital marketing company in Kochi?",
    a: "Many firms advertise as the best digital marketing company in Kochi but outsource development and design. Ivoniz keeps SEO, ads, websites, and apps fully in-house, so fixes and optimizations happen faster.",
  },
  {
    q: "Does a digital marketing agency handle social media too, or only ads and SEO?",
    a: "A full-service digital marketing agency like Ivoniz handles social media content, paid boosts, SEO, Google Ads, and website development together — not just one isolated channel.",
  },
  {
    q: "How do I start working with a digital marketing agency in Kochi?",
    a: "Simply book a free strategy session, call, or message us on WhatsApp. As a digital marketing agency in Kochi, Ivoniz reviews your business and proposes a tailored plan within 24 hours.",
  },
  {
    q: "Is Ivoniz the right digital marketing agency in Kerala for startups specifically?",
    a: "Yes — whether you're an early-stage startup near Infopark or an established Kochi brand, Ivoniz as a digital marketing agency in Kerala builds plans that scale with your stage and budget.",
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
    { "@type": "City", name: "Kochi" },
    { "@type": "City", name: "Ernakulam" },
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
      name: "Best Digital Marketing Company in Kochi",
      item: "https://ivoniz.com/best-digital-marketing-company-in-kochi",
    },
  ],
};

/* AEO — Speakable schema flags the quick-answer text for voice assistants
   (Google Assistant, Siri) to read aloud as a direct spoken answer. */
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://ivoniz.com/best-digital-marketing-company-in-kochi",
  name: "Best Digital Marketing Company in Kochi",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#quick-answer"],
  },
};

/* ════════════════════════════════════════════════════════════════
   SHARED UI
   ════════════════════════════════════════════════════════════════ */
function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-10 xl:px-16 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 h-13 px-8 bg-black text-white text-sm font-bold tracking-wide rounded-full hover:bg-black/85 transition-colors"
      >
        Book a Free Strategy Session <FaArrowRight aria-hidden="true" className="text-[13px]" />
      </Link>
      <a
        href="https://wa.me/919645760023?text=Hi%20Ivoniz%2C%20I%20want%20a%20free%20audit%20from%20your%20digital%20marketing%20agency%20in%20Kochi."
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
export default function BestDigitalMarketingCompanyInKochi() {
  return (
    <main id="main-content" className="bg-white text-black">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs dark items={[{ label: "Best Digital Marketing Company in Kochi", href: "/best-digital-marketing-company-in-kochi" }]} />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 mt-4 mb-5">
            Ivoniz Pvt Ltd · Serving Kochi &amp; Ernakulam
          </p>
          <h1 className="font-bold leading-[1.08] mb-6" style={{ fontSize: "clamp(32px,5vw,58px)" }}>
            Best Digital Marketing Company in Kochi
          </h1>

          {/* AEO/GEO quick-answer — direct, self-contained, citable by
              featured snippets, voice assistants, and AI answer engines. */}
          <p
            id="quick-answer"
            className="text-white/80 text-base leading-relaxed max-w-2xl mb-6 border-l-2 border-white/25 pl-4"
          >
            Ivoniz Pvt Ltd is a leading digital marketing company serving Kochi and Ernakulam — a 4.9-star rated
            agency offering SEO, Google Ads, social media marketing, and website development across Kerala.
          </p>

          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-4">
            Searching for a <strong className="text-white">digital marketing agency in Kochi</strong> that actually
            moves the needle? Ivoniz plans, builds, and runs every channel your business needs — SEO, paid ads,
            social, and the website that converts the traffic those channels send you.
          </p>
          <p className="text-white/55 leading-relaxed max-w-2xl mb-2">
            We&apos;re not chasing a title — but client results are exactly why businesses across Kochi keep
            calling us the <strong className="text-white">best digital marketing agency in Kochi</strong> they&apos;ve
            worked with.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <Section className="bg-white">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/60 mb-5">Introduction</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          What Makes a Digital Marketing Agency in Kochi Worth Hiring
        </h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Kochi carries more commercial weight than any other city in Kerala — a working port, an IT corridor at
          Infopark and Kakkanad, a tourism economy built around Fort Kochi, and a retail scene that spans MG Road
          to Lulu Mall. With that much economic density comes equally dense online competition, which is exactly
          why so many businesses here are evaluating a <strong>digital marketing agency in Kochi</strong> rather
          than continuing to handle marketing internally.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Ivoniz operates as a complete <strong>digital marketing agency</strong> — not a single-channel vendor.
          We run SEO, manage paid campaigns, produce content, and build the websites and apps that everything else
          points to. Whether you&apos;re comparing us as a <strong>digital marketing company in Kochi</strong> for
          a one-off campaign or evaluating a long-term <strong>digital marketing agency Kochi</strong> retainer,
          the process starts the same way: understanding your business before recommending a channel.
        </p>
        <p className="text-black/65 leading-relaxed">
          What follows on this page covers exactly what we do, how our process works, what it&apos;s like working
          with our team, and how to get started with a free audit today.
        </p>
      </Section>

      {/* ── ABOUT IVONIZ ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Ivoniz Pvt Ltd</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Ivoniz Pvt Ltd is a Kerala-based digital marketing, SEO, web, and app development company headquartered
          at HiLITE Business Park, Kozhikode. We started with a simple aim — give Kerala businesses the same
          calibre of digital marketing usually reserved for metro cities, delivered by a team that actually
          understands the local market.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          As a working <strong>digital marketing agency</strong>, our scope covers Search Engine Optimization,
          Local SEO, Google Ads Management, Meta Ads Management, Social Media Marketing, Performance Marketing,
          Content Marketing, Website Development, Ecommerce Development, Mobile App Development, Branding, AI
          Automation, Lead Generation, and Conversion Rate Optimization — one team, one accountable process.
        </p>
        <p className="text-black/65 leading-relaxed">
          A 4.9-star Google rating, built entirely on real client reviews, is the closest thing we have to a
          guarantee: that the work speaks louder than the pitch.
        </p>
      </Section>

      {/* ── WHY BUSINESSES IN KOCHI NEED DIGITAL MARKETING ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why Kochi Businesses Can&apos;t Skip Digital Marketing Anymore
        </h2>
        <p className="text-black/65 leading-relaxed mb-6">
          Ten years ago, a good location and word-of-mouth could carry a Kochi business for years. That&apos;s no
          longer true. Shoppers compare prices on Instagram before walking into a showroom. Patients Google a
          clinic before calling. IT founders at Infopark vet vendors entirely through search results. If your
          business isn&apos;t visible at that exact moment, the sale happens with whoever shows up first.
        </p>
        <ul className="space-y-3 text-black/65 leading-relaxed mb-6">
          <li className="flex gap-2.5"><FaMapMarkerAlt className="shrink-0 mt-1 text-black/60" /> <span><strong>Search-first discovery</strong> — Google and Maps have replaced word-of-mouth as the first stop for most buyers in Kochi.</span></li>
          <li className="flex gap-2.5"><FaChartLine className="shrink-0 mt-1 text-black/60" /> <span><strong>Crowded competition</strong> — as Kerala&apos;s commercial capital, Kochi has more businesses fighting for page-one rankings than almost anywhere else in the state.</span></li>
          <li className="flex gap-2.5"><FaWhatsapp className="shrink-0 mt-1 text-black/60" /> <span><strong>WhatsApp over email</strong> — Kerala customers respond to WhatsApp far faster than contact forms; funnels need to be built around that habit.</span></li>
          <li className="flex gap-2.5"><FaBullseye className="shrink-0 mt-1 text-black/60" /> <span><strong>Unmanaged ad spend disappears fast</strong> — Google Ads or Meta Ads without clear targeting burns budget quickly in a saturated market.</span></li>
        </ul>
        <p className="text-black/65 leading-relaxed">
          This is the exact gap a capable <strong>digital marketing agency in Kochi</strong> closes — turning
          scattered online effort into a system that actually produces enquiries.
        </p>
      </Section>

      {/* ── WHY CHOOSE IVONIZ ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          What Working With Our Digital Marketing Agency Kochi Team Looks Like
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { t: "We Learn the Local Market First", d: "Kochi & Kerala buyer behaviour, language, and seasonal patterns shape every strategy we propose — not generic playbooks." },
            { t: "One Team, Every Channel", d: "SEO, ads, social, websites, and apps run under one roof, so nothing gets lost between disconnected vendors." },
            { t: "Numbers You Can Actually Check", d: "Dashboards built around leads, calls, and WhatsApp enquiries — not impressions nobody can spend." },
            { t: "A Track Record, Not a Pitch", d: "A 4.9-star Google rating built from real client outcomes across Kerala, visible before you sign anything." },
          ].map((c) => (
            <div key={c.t} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">{c.t}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 leading-relaxed mt-8">
          Plenty of vendors in Kochi will call themselves a <strong className="text-white">digital marketing
          agency</strong>. Few will show you exactly what each rupee produced. That difference is the entire
          reason Ivoniz exists.
        </p>
      </Section>

      {/* ── OUR SERVICES OVERVIEW ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Everything Our Digital Marketing Company in Kochi Handles
        </h2>
        <p className="text-black/65 leading-relaxed mb-8">
          A genuine <strong>digital marketing company in Kochi</strong> shouldn&apos;t leave you stitching
          together five different freelancers. Here&apos;s the full scope Ivoniz manages under one engagement.
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
                ["Search Engine Optimization (SEO)", "Ranks your website for the terms buyers actually search"],
                ["Local SEO", "Puts you on the map — literally — for 'near me' searches in Kochi"],
                ["Google Ads Management", "Targeted traffic that converts, not just clicks"],
                ["Meta Ads Management", "Facebook & Instagram campaigns aimed at real buyers"],
                ["Social Media Marketing", "Consistent brand presence across the platforms your audience uses"],
                ["Performance Marketing", "Every rupee of ad spend tracked back to actual ROI"],
                ["Content Marketing", "Content built to rank and to convert, not just fill a calendar"],
                ["Website Development", "Fast, mobile-first sites that turn visits into enquiries"],
                ["Ecommerce Development", "Online stores engineered to sell, not just display a catalogue"],
                ["Mobile App Development", "Android & iOS apps built for repeat customers, not novelty"],
                ["Branding", "A consistent identity across every touchpoint your customers see"],
                ["AI Automation", "Automated lead follow-up, chat, and reporting that save hours weekly"],
                ["Lead Generation", "Funnels built specifically to capture calls, forms, and WhatsApp leads"],
                ["Conversion Rate Optimization", "Getting more out of the traffic you already have"],
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
          The Best Digital Marketing Agency in Kochi Starts With a Process, Not a Sales Call
        </h3>
        <p className="text-black/65 leading-relaxed">
          Every engagement opens with a free audit, moves into a custom strategy built around your numbers, then
          monthly execution with reporting you can actually read — the same repeatable loop every time, refined
          month over month.
        </p>
      </Section>

      {/* ── SEO SERVICES ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">SEO, the Foundation of Every Campaign</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Before any campaign launches, we run a full technical audit — page speed, mobile usability, crawl
          errors, duplicate content — because no volume of content or backlinks fixes a website Google struggles
          to read. From there we map keyword opportunity specific to your industry, prioritizing intent over raw
          search volume.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          On-page work follows: titles, meta descriptions, headings, and copy rewritten to match what searchers
          actually want, structured to perform in both classic Google rankings and newer AI-driven answer panels.
          Authority is built through pillar content and earned links — never through link farms that put your
          domain at risk later.
        </p>
        <p className="text-black/65 leading-relaxed">
          You get visibility into all of it: keyword research, competitor gaps, technical fixes, and monthly
          ranking reports, so you know precisely what you&apos;re paying for.
        </p>
      </Section>

      {/* ── GOOGLE ADS SERVICES ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Google Ads That Earn Their Budget</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Google Ads can produce leads from day one — but only with proper structure. We separate campaigns by
          intent (branded, competitor, generic), track every call and WhatsApp click as a conversion event, and
          adjust bidding weekly based on what&apos;s actually closing, not just what&apos;s clicking.
        </p>
        <p className="text-black/65 leading-relaxed">
          Ad copy, landing pages, and audiences get tested continuously. Spend that isn&apos;t producing gets cut
          fast; spend that is gets scaled faster.
        </p>
      </Section>

      {/* ── SOCIAL MEDIA MARKETING ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Social Media That Builds Trust, Not Just Likes</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          From Instagram reels to boosted Facebook posts, the goal is always the same: turning followers into
          enquiries. We plan content calendars, design creative, manage paid boosts, and engage with comments and
          DMs — so your brand stays visible without it becoming a full-time job for you.
        </p>
        <p className="text-black/65 leading-relaxed">
          Every calendar is built around your actual business goal — footfall, bookings, or brand recall — not
          whatever trend happened to be popular that week.
        </p>
      </Section>

      {/* ── WEBSITE DEVELOPMENT ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Websites Built to Convert, Not Just Display</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          A slow or cluttered website undoes everything your marketing budget just paid for. We build fast,
          mobile-first sites on modern frameworks like Next.js, with click-to-call and click-to-WhatsApp on every
          page and a layout designed to move visitors toward enquiring.
        </p>
        <p className="text-black/65 leading-relaxed">
          Because the same team runs your SEO and your website, fixes happen in days, not after weeks of emails
          between separate vendors.
        </p>
      </Section>

      {/* ── MOBILE APP DEVELOPMENT ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Apps That Bring Customers Back</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          For businesses ready to invest in retention, we build native and cross-platform apps — Flutter, React
          Native, iOS, Android — with push notifications, loyalty tracking, and checkout flows faster than any
          browser experience.
        </p>
        <p className="text-black/65 leading-relaxed">
          For retail and hospitality brands especially, an app consistently outperforms every other channel for
          repeat purchases.
        </p>
      </Section>

      {/* ── LOCAL SEO SERVICES ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Local SEO: Where Most Agencies Drop the Ball</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Plenty of agencies focus purely on paid traffic and ignore the free, high-intent visibility Google Maps
          offers. We optimize your Google Business Profile, build consistent local citations, manage your review
          flow, and target neighbourhood-level search terms so you show up when someone nearby searches.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Name, address, and phone number consistency across Google, Justdial, and Sulekha matters more than most
          businesses realize — it&apos;s one of the most common things we fix in a first audit.
        </p>
        <p className="text-black/65 leading-relaxed">
          A &ldquo;near me&rdquo; search is often the highest-intent moment in the entire buying journey — the
          customer is usually minutes from calling or walking in.
        </p>
      </Section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Industries We Work With</h2>
        <p className="text-black/65 leading-relaxed mb-8">
          An IT startup at Infopark and a homestay in Fort Kochi don&apos;t need identical strategies. We tailor
          channel mix and creative to how each industry&apos;s customers actually buy.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ["IT & Startups", "Lead generation and brand positioning for tech companies"],
            ["Real Estate", "Funnels built around site visits and bookings"],
            ["Hospitality & Tourism", "Booking-ready websites and review management"],
            ["E-Commerce", "Performance marketing and conversion optimization"],
            ["Healthcare & Clinics", "Local SEO and reputation management for patient trust"],
            ["Education", "Enquiry funnels timed to admission cycles"],
            ["Import & Export", "B2B lead generation and authority content"],
            ["Fashion & Retail", "E-commerce growth and seasonal campaigns"],
            ["Professional Services", "Authority content paired with local SEO"],
          ].map(([i, d]) => (
            <div key={i} className="bg-white border border-black/8 rounded-xl px-5 py-4">
              <p className="text-sm font-semibold mb-1">{i}</p>
              <p className="text-xs text-black/50 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── BENEFITS ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          What You Actually Gain From Hiring a Digital Marketing Agency
        </h2>
        <ul className="space-y-4 text-black/65 leading-relaxed">
          {[
            { t: "Your time back", d: "a dedicated digital marketing agency handles execution while you run the business." },
            { t: "A full team for less", d: "strategists, ad managers, designers, and developers, for less than one in-house salary." },
            { t: "Faster results", d: "through patterns tested across many clients, not guesswork starting from zero." },
            { t: "Visibility into spend", d: "every rupee traceable to what it produced." },
            { t: "Room to scale", d: "increase or pull back investment without hiring or firing." },
            { t: "Protection from algorithm shifts", d: "an experienced digital marketing agency adapts before a Google or Meta update costs you rankings." },
          ].map((b) => (
            <li key={b.t} className="flex gap-2.5">
              <FaCheckCircle className="shrink-0 mt-1 text-emerald-600" />
              <span><strong>{b.t}</strong> — {b.d}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── COMPARISON ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ivoniz vs. a Typical Digital Marketing Company Kochi Vendor
        </h2>
        <p className="text-black/65 leading-relaxed mb-8">
          Not every <strong>digital marketing company Kochi</strong> businesses consider offers the same depth.
          Here&apos;s the honest comparison.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-black/10 rounded-xl overflow-hidden">
            <thead className="bg-white text-left">
              <tr>
                <th className="py-3 px-4 font-semibold">Capability</th>
                <th className="py-3 px-4 font-semibold">Typical Vendor</th>
                <th className="py-3 px-4 font-semibold">Ivoniz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/8 bg-white">
              {[
                ["SEO + Paid Ads Together", "Usually only one channel", "Fully integrated"],
                ["In-House Web Development", "Outsourced to third parties", "Built in-house"],
                ["WhatsApp-First Funnels", "Rarely configured", "Standard by default"],
                ["ROI Reporting", "Impressions & reach only", "Leads, calls, conversions"],
                ["Local Kerala Knowledge", "Varies widely", "Kerala-based team"],
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
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why a Single Digital Marketing Agency Beats Five Vendors
        </h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Most providers specialize in exactly one channel — SEO, or ads, or social. Ivoniz was deliberately built
          as one <strong>digital marketing agency</strong> spanning strategy, creative, technology, and paid
          media, so an SEO fix that needs a website change happens the same week, not after weeks of emails
          between vendors who&apos;ve never spoken to each other.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Building websites and apps in-house means faster technical fixes and a funnel that&apos;s genuinely
          under one team&apos;s control end to end.
        </p>
        <p className="text-black/65 leading-relaxed">
          Every relationship still starts with a strategy session, not a pitch deck — we want to understand your
          margins and sales cycle before recommending a single channel.
        </p>
      </Section>

      {/* ── LOCAL MARKET INSIGHTS ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Reading the Kochi Market Correctly</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Kochi&apos;s economy runs on IT and startups around Infopark and Kakkanad, international trade through
          Cochin Port, real estate, and a hospitality sector anchored by Fort Kochi and Marine Drive. Mobile
          browsing dominates almost every local search, which is why every funnel we build is mobile-first from
          the start.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          WhatsApp consistently outperforms contact forms across Kerala in response rate — campaigns built without
          a WhatsApp click-to-chat option are leaving enquiries on the table.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Seasonal demand matters too: wedding season lifts jewellery and fashion, the academic calendar drives
          education enquiries, and Onam and Christmas create predictable spikes across retail and hospitality. A
          <strong> digital marketing agency in Kerala</strong> that plans around these cycles gets ahead of demand
          instead of reacting to it.
        </p>
        <p className="text-black/65 leading-relaxed mb-8">
          Competition for visibility keeps climbing every year — page-one rankings today require real expertise,
          which is the gap a properly run <strong>digital marketing agency in Kochi</strong> exists to close.
        </p>

        <h3 className="text-xl font-bold mb-3">One Digital Marketing Agency in Kerala, Every District</h3>
        <p className="text-black/65 leading-relaxed">
          The same process that works in Kochi runs across the rest of the state too — as a digital marketing
          agency in Kerala, Ivoniz applies it consistently in Ernakulam, Calicut, Thrissur, and beyond.
        </p>
      </Section>

      {/* ── CASE STUDY — small container pattern ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Results, Not Just Promises</h2>
        <div className="flex flex-wrap gap-3 mb-5">
          {[
            { v: "300%", l: "Online sales growth" },
            { v: "4.9", l: "Google rating", star: true },
            { v: "60–90 days", l: "To first SEO gains" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3"
            >
              <p className="font-bold text-lg leading-none mb-1 inline-flex items-center gap-1">
                {s.v}
                {s.star && <FaStar className="text-[13px] text-amber-400" />}
              </p>
              <p className="text-white/60 text-xs">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 max-w-xl">
          <p className="text-white/60 text-sm leading-relaxed">
            &ldquo;Working with Ivoniz was a game changer for us. They built a stunning e-commerce website that
            increased our online sales by 300%.&rdquo;
          </p>
          <p className="text-white/60 text-xs mt-2">— Sarah Johnson, Arlocks Fashion</p>
        </div>
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
          Get a Free Audit From the Best Digital Marketing Company in Kochi
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mb-2">
          Not sure where leads are slipping through? Claim a free SEO audit, free website audit, or free
          consultation and get a clear report within 48 hours — no obligation either way.
        </p>
        <p className="text-white/50 leading-relaxed max-w-2xl mb-2">
          As a <strong className="text-white">digital marketing agency in Kerala</strong>, we&apos;ve turned audits
          into real growth plans for businesses across Kochi, Ernakulam, and beyond.
        </p>
        <p className="text-white/50 leading-relaxed max-w-2xl mb-2">
          Whether you find us as a <strong className="text-white">digital marketing company Kochi</strong>{" "}
          businesses search for, or as the <strong className="text-white">best digital marketing agency in Kochi</strong> someone referred you to, the outcome we aim for is the same — more calls, more WhatsApp
          enquiries, more real growth.
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Talk to Our Team</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3 text-black/65 leading-relaxed">
            <p><strong>Head Office:</strong> Ivoniz Technologies Private Limited, 7th Floor, Phase 1, HiLITE Business Park, Kozhikode, Kerala 673001</p>
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
          Ready to Work With a Digital Marketing Agency in Kochi That Delivers?
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto text-center mb-2">
          Whether you need a <strong className="text-white">digital marketing company in Kochi</strong> for SEO, a
          dependable <strong className="text-white">digital marketing agency Kochi</strong> partner for paid
          campaigns, or a full <strong className="text-white">digital marketing agency in Kerala</strong> team to
          run everything — Ivoniz is ready.
        </p>
        <div className="flex justify-center">
          <CTAButtons />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
