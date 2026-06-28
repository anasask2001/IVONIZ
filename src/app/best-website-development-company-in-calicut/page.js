import Link from "next/link";
import { FaArrowRight, FaStar, FaWhatsapp, FaRegFileAlt, FaMapMarkerAlt, FaBolt, FaMobileAlt, FaCheckCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";

/* ════════════════════════════════════════════════════════════════
   METADATA — SEO Title / Meta Description / Canonical
   ════════════════════════════════════════════════════════════════ */
export const metadata = {
  title: "Best Website Development Company in Calicut",
  description:
    "Ivoniz is the best website development company in Calicut and the best website company in Calicut for businesses that want fast, mobile-first, conversion-focused websites. Free website audit & consultation. Call or WhatsApp now.",
  alternates: {
    canonical: "https://ivoniz.com/best-website-development-company-in-calicut",
    languages: {
      "en-IN": "https://ivoniz.com/best-website-development-company-in-calicut",
      "x-default": "https://ivoniz.com/best-website-development-company-in-calicut",
    },
  },
  openGraph: {
    title: "Best Website Development Company in Calicut | Ivoniz Pvt Ltd",
    description:
      "Ivoniz — the best website development company in Calicut and the best website company in Calicut. Custom websites, e-commerce, and web apps built to convert.",
    url: "https://ivoniz.com/best-website-development-company-in-calicut",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Ivoniz Pvt Ltd — Best Website Development Company in Calicut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in Calicut | Ivoniz Pvt Ltd",
    description: "Ivoniz — the best website development company in Calicut and the best website company in Calicut.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: { index: true, follow: true },
};

/* ════════════════════════════════════════════════════════════════
   FAQ DATA — single source of truth for rendering + FAQPage schema
   ════════════════════════════════════════════════════════════════ */
const FAQS = [
  {
    q: "Who is the best website development company in Calicut?",
    a: "Ivoniz Pvt Ltd is widely regarded as the best website development company in Calicut, with a proven track record building fast, mobile-first, conversion-focused websites for businesses across Kerala.",
  },
  {
    q: "Is Ivoniz also the best website company in Calicut for small businesses?",
    a: "Yes. As the best website company in Calicut for both startups and established brands, Ivoniz builds websites that scale with your business — from a simple landing page to a full e-commerce platform.",
  },
  {
    q: "What does a website development company in Calicut actually build?",
    a: "A website development company in Calicut like Ivoniz builds business websites, e-commerce stores, web applications, portals, and landing pages — all optimized for speed, mobile usability, and conversions.",
  },
  {
    q: "Why should I choose Ivoniz over other website companies in Calicut?",
    a: "Ivoniz combines website design, development, SEO, and digital marketing under one accountable team — so your website isn't just good-looking, it's built to actually rank and convert.",
  },
  {
    q: "How much does website development cost in Calicut?",
    a: "Pricing depends on the type of website — a landing page costs less than a full e-commerce platform. Ivoniz offers a free consultation and a custom quote based on your exact requirements.",
  },
  {
    q: "How long does it take to build a website in Calicut?",
    a: "Most business websites take a few weeks from design approval to launch, while larger e-commerce or web application projects take longer depending on features. Ivoniz confirms an exact timeline after a free consultation.",
  },
  {
    q: "Do you build e-commerce websites too?",
    a: "Yes. As a full-service website development company in Calicut, Ivoniz builds e-commerce stores on WooCommerce and custom platforms, complete with payment gateway integration.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes — every website Ivoniz builds is mobile-first by default, since the majority of visitors in Calicut and Kerala browse on smartphones.",
  },
  {
    q: "Can you redesign my existing website instead of building a new one?",
    a: "Yes, website redesigns are one of our most common projects — we rebuild outdated sites into fast, modern, conversion-focused experiences without losing your existing SEO rankings.",
  },
  {
    q: "Will my new website also rank on Google?",
    a: "Yes. Every website built by Ivoniz, the best website development company in Calicut, follows on-page SEO best practices from day one — clean structure, fast load times, and proper metadata.",
  },
  {
    q: "Do you provide hosting and domain support too?",
    a: "Yes, Ivoniz offers cloud hosting and domain setup alongside website development, so you don't have to manage a separate hosting vendor.",
  },
  {
    q: "What platforms do you build websites on?",
    a: "We build primarily on Next.js for custom, high-performance websites, along with WordPress and WooCommerce for CMS-driven and e-commerce projects.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: "Yes. Ivoniz provides ongoing website maintenance & support — updates, security patches, and bug fixes — after your site goes live.",
  },
  {
    q: "Is Ivoniz the best website company in Calicut for e-commerce specifically?",
    a: "Yes — Ivoniz has delivered e-commerce websites for fashion and jewellery brands across Kerala, with measurable increases in online sales.",
  },
  {
    q: "How do I get started with website development at Ivoniz?",
    a: "Simply book a free website audit, call us, or message us on WhatsApp. Ivoniz, the best website development company in Calicut, will review your requirements and recommend the right approach within 24 hours.",
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
  serviceType: "Website Development Company",
  provider: { "@id": "https://ivoniz.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Calicut" },
    { "@type": "State", name: "Kerala" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Services",
    itemListElement: [
      "Custom Website Design",
      "Website Development",
      "Ecommerce Development",
      "Web Application & Portal Development",
      "Landing Page Design",
      "WordPress Development",
      "WooCommerce Development",
      "API & Backend Development",
      "UI/UX Design",
      "Cloud & Hosting Solutions",
      "Website Maintenance & Support",
      "SEO-Ready Website Development",
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
      name: "Best Website Development Company in Calicut",
      item: "https://ivoniz.com/best-website-development-company-in-calicut",
    },
  ],
};

/* AEO — Speakable schema flags the quick-answer text for voice assistants
   (Google Assistant, Siri) to read aloud as a direct spoken answer. */
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://ivoniz.com/best-website-development-company-in-calicut",
  name: "Best Website Development Company in Calicut",
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

function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 h-13 px-8 bg-black text-white text-sm font-bold tracking-wide rounded-full hover:bg-black/85 transition-colors"
      >
        Get a Free Website Audit <FaArrowRight className="text-[13px]" />
      </Link>
      <a
        href="https://wa.me/919645760023?text=Hi%20Ivoniz%2C%20I%20found%20you%20as%20the%20best%20website%20development%20company%20in%20Calicut%20and%20want%20a%20free%20website%20audit."
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 h-13 px-8 border border-black/15 text-black text-sm font-bold tracking-wide rounded-full hover:bg-black hover:text-white transition-colors"
      >
        WhatsApp Us <FaArrowRight className="text-[13px]" />
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
export default function BestWebsiteDevelopmentCompanyInCalicut() {
  return (
    <main className="bg-white text-black">

      {/* ── JSON-LD Schema ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs dark items={[{ label: "Best Website Development Company in Calicut", href: "/best-website-development-company-in-calicut" }]} />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40 mt-4 mb-5">
            Ivoniz Pvt Ltd · Kozhikode, Kerala
          </p>
          <h1 className="font-bold leading-[1.08] mb-6" style={{ fontSize: "clamp(32px,5vw,58px)" }}>
            Best Website Development Company in Calicut
          </h1>

          {/* AEO/GEO quick-answer — direct, self-contained, citable by
              featured snippets, voice assistants, and AI answer engines. */}
          <p
            id="quick-answer"
            className="text-white/80 text-base leading-relaxed max-w-2xl mb-6 border-l-2 border-white/25 pl-4"
          >
            Ivoniz Pvt Ltd is the best website development company in Calicut and the best website company in
            Calicut — a 4.9-star rated agency that has delivered 1000+ websites, building custom, mobile-first,
            SEO-ready sites from HiLITE Business Park, Kozhikode.
          </p>

          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-4">
            Ivoniz is the <strong className="text-white">best website development company in Calicut</strong> and
            the <strong className="text-white">best website company in Calicut</strong> for businesses that want
            fast, mobile-first, conversion-focused websites — not just good-looking templates.
          </p>
          <p className="text-white/55 leading-relaxed max-w-2xl mb-2">
            From first-time business websites to full e-commerce platforms, <strong className="text-white">Ivoniz in
            Calicut</strong> builds sites engineered to turn visitors into calls, WhatsApp enquiries, and sales.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <Section className="bg-white">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/35 mb-5">Introduction</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ivoniz – The Best Website Company in Calicut
        </h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Calicut (Kozhikode) businesses are competing for attention online more than ever, and the foundation of
          every successful digital presence is the same: a fast, professional, mobile-friendly website. That&apos;s why
          so many businesses across the district search for a reliable{" "}
          <strong>website development company in Calicut</strong> that can deliver more than a template — a site
          built to actually convert visitors into customers.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          That is exactly where <strong>Ivoniz</strong> comes in. As the{" "}
          <strong>best website development company in Calicut</strong>, we design and build custom websites,
          e-commerce stores, and web applications using modern frameworks like Next.js — combined with SEO
          fundamentals from day one. Whether you&apos;re searching for a{" "}
          <strong>website company in Calicut</strong> to build your first business site, or a full{" "}
          <strong>website development company in Calicut</strong> partner to handle redesigns, e-commerce, and
          ongoing support, our team builds around your business goals, not generic templates.
        </p>
        <p className="text-black/65 leading-relaxed">
          This page explains exactly why businesses across Kerala choose <strong>Ivoniz in Calicut</strong> for
          website development, what we build, how our process works, and how you can get started today with a free
          website audit.
        </p>
      </Section>

      {/* ── ABOUT IVONIZ ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Ivoniz Pvt Ltd</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Ivoniz Pvt Ltd is a full-service website development, digital marketing, and mobile app development
          company headquartered at HiLITE Business Park, Kozhikode, Kerala. We were founded with one mission: to
          create &ldquo;galaxies of possibilities&rdquo; for technological advancement and attract investment to
          Calicut and Thrissur by promoting young, talented teams to do their creative best.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Today, <strong>Ivoniz</strong> — also known as <strong>Ivoniz Technologies</strong> and operating as a{" "}
          <strong>website development company in Calicut</strong> — serves clients across Calicut, Thrissur,
          Malappuram, Kannur, and beyond. Our services span Custom Website Design, Website Development, Ecommerce
          Development, Web Application & Portal Development, Landing Page Design, WordPress & WooCommerce
          Development, UI/UX Design, Cloud & Hosting, Website Maintenance, and SEO.
        </p>
        <p className="text-black/65 leading-relaxed">
          With a 4.9-star Google rating from real client reviews, <strong>Ivoniz Pvt Ltd</strong> has earned its
          reputation as the best website company in Calicut the hard way — through delivered results, not empty
          promises.
        </p>
      </Section>

      {/* ── WHY YOUR WEBSITE MATTERS ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why Calicut Businesses Need a Professional Website
        </h2>
        <p className="text-black/65 leading-relaxed mb-6">
          Your website is often the first impression a potential customer has of your business — before they ever
          call, WhatsApp, or walk in. A slow, outdated, or poorly designed site quietly turns away customers who
          never tell you why they left. Without a fast, modern website, even well-established businesses lose deals
          to competitors who simply load faster and look more credible.
        </p>
        <ul className="space-y-3 text-black/65 leading-relaxed mb-6">
          <li className="flex gap-2.5"><FaBolt className="shrink-0 mt-1 text-black/40" /> <span><strong>Speed matters</strong> — slow-loading websites lose visitors within seconds, especially on mobile networks across Calicut.</span></li>
          <li className="flex gap-2.5"><FaMobileAlt className="shrink-0 mt-1 text-black/40" /> <span><strong>Mobile-first browsing</strong> — most local visitors browse on smartphones, so a non-responsive site loses business immediately.</span></li>
          <li className="flex gap-2.5"><FaWhatsapp className="shrink-0 mt-1 text-black/40" /> <span><strong>WhatsApp-first enquiries</strong> — without click-to-WhatsApp buttons built in, you lose Kerala&apos;s preferred contact channel.</span></li>
          <li className="flex gap-2.5"><FaMapMarkerAlt className="shrink-0 mt-1 text-black/40" /> <span><strong>SEO foundations</strong> — a site built without SEO in mind makes every future marketing rupee work harder than it should.</span></li>
        </ul>
        <p className="text-black/65 leading-relaxed">
          This is precisely why partnering with an experienced <strong>website development company in Calicut</strong>{" "}
          like Ivoniz — rather than a freelancer or a generic template builder — consistently delivers a website that
          actually performs.
        </p>
      </Section>

      {/* ── WHY CHOOSE IVONIZ ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose Ivoniz in Calicut</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { t: "Built for Conversions", d: "Every website is designed around clear calls-to-action, not just visuals — turning visitors into enquiries." },
            { t: "In-House Full-Stack Team", d: "Design, development, SEO, and hosting under one accountable team — not five disconnected vendors." },
            { t: "SEO-Ready From Day One", d: "Clean structure, fast load times, and proper metadata built in from the first line of code." },
            { t: "Proven Results", d: "A 4.9-star Google rating built on real client outcomes across Calicut and Kerala." },
          ].map((c) => (
            <div key={c.t} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">{c.t}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 leading-relaxed mt-8">
          When businesses compare us against other <strong className="text-white">website companies in Calicut</strong>,
          the difference is clear: Ivoniz doesn&apos;t just hand over a finished site — we build a digital asset designed
          to keep performing long after launch.
        </p>
      </Section>

      {/* ── OUR SERVICES OVERVIEW ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Our Services — Website Development Company in Calicut Solutions
        </h2>
        <p className="text-black/65 leading-relaxed mb-8">
          As a complete <strong>website development company in Calicut</strong>, Ivoniz offers every service a
          growing business needs online — under one roof, with one accountable team.
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
                ["Custom Website Design", "Builds a unique, on-brand design instead of a generic template"],
                ["Website Development", "Fast, mobile-first websites that convert visitors into leads"],
                ["Ecommerce Development", "Launches online stores built to sell, not just display"],
                ["Web Application & Portal Development", "Builds custom portals and dashboards for your business"],
                ["Landing Page Design", "Creates high-conversion pages for campaigns and launches"],
                ["WordPress & WooCommerce Development", "Delivers easy-to-manage CMS and e-commerce sites"],
                ["API & Backend Development", "Connects your website to the systems your business runs on"],
                ["UI/UX Design", "Designs intuitive experiences that guide visitors to enquire"],
                ["Cloud & Hosting Solutions", "Keeps your website fast, secure, and online around the clock"],
                ["Website Maintenance & Support", "Handles updates, security, and fixes after launch"],
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
          How Our Website Development Calicut Process Works
        </h3>
        <p className="text-black/65 leading-relaxed">
          Every <strong>website development company in Calicut</strong> client starts with a free consultation,
          followed by design, development, testing, and launch — backed by ongoing support after your site goes live.
        </p>
      </Section>

      {/* ── CUSTOM WEBSITE DESIGN ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Custom Website Design</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          A website built from a recycled template looks like every other business online. As the{" "}
          <strong>best website company in Calicut</strong>, Ivoniz designs every site from scratch in Figma — built
          around your brand, your industry, and your customers&apos; expectations, not a one-size-fits-all theme.
        </p>
        <p className="text-black/65 leading-relaxed mb-4">
          Our design process starts with understanding your business goals and target audience, then moves into
          wireframes and high-fidelity mockups before a single line of code is written. This ensures the final
          website looks professional, builds trust instantly, and guides visitors naturally toward calling,
          messaging, or buying.
        </p>
        <p className="text-black/65 leading-relaxed">
          Every design decision — color, layout, typography — is made with conversion in mind, not just aesthetics.
        </p>
      </Section>

      {/* ── WEBSITE DEVELOPMENT (NEXT.JS) ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Modern Website Development with Next.js</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Most website companies in Calicut still ship slow, outdated WordPress themes loaded with bloated plugins.
          Ivoniz builds custom websites on Next.js — a modern framework that loads near-instantly, ranks better on
          Google, and scales effortlessly as your business grows.
        </p>
        <p className="text-black/65 leading-relaxed">
          Every website we build includes clear calls-to-action, click-to-call and click-to-WhatsApp buttons on
          every page, fast load times on mobile networks, and clean information architecture that guides visitors
          toward enquiring — not just browsing.
        </p>
      </Section>

      {/* ── ECOMMERCE DEVELOPMENT ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ecommerce Website Development</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Selling online requires more than a product catalogue — it requires a store engineered to convert browsers
          into buyers. Ivoniz builds e-commerce websites on WooCommerce and custom platforms, complete with secure
          payment gateway integration, inventory management, and mobile-optimized checkout flows.
        </p>
        <p className="text-black/65 leading-relaxed">
          For fashion, jewellery, and retail brands across Calicut, a well-built e-commerce site has consistently
          driven measurable increases in online sales — not just more traffic, but more completed orders.
        </p>
      </Section>

      {/* ── WEB APPLICATIONS & PORTALS ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Web Applications & Business Portals</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          Beyond marketing websites, Ivoniz builds custom web applications and portals — internal dashboards,
          client portals, booking systems, and other tools businesses use to run daily operations.
        </p>
        <p className="text-black/65 leading-relaxed">
          Every web application is built with the same engineering discipline as our public-facing websites: clean
          code, secure backend architecture, and an interface your team can actually use without training manuals.
        </p>
      </Section>

      {/* ── LOCAL SEO FOR WEBSITES ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">SEO-Ready Website Development for Calicut Businesses</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          A beautiful website that doesn&apos;t rank on Google is invisible to most customers. That&apos;s why every website
          built by Ivoniz, the <strong>best website development company in Calicut</strong>, follows on-page SEO
          best practices from the very first wireframe — clean URL structures, proper heading hierarchy, optimized
          images, and fast Core Web Vitals scores.
        </p>
        <p className="text-black/65 leading-relaxed">
          For businesses that want to go further, Ivoniz also offers full SEO and digital marketing services — so
          your new website doesn&apos;t just look good, it actually gets found by customers searching for what you offer
          in Calicut and across Kerala.
        </p>
      </Section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Industries We Build Websites For</h2>
        <p className="text-black/65 leading-relaxed mb-8">
          Every industry needs a different kind of website. A jewellery showroom and a clinic don&apos;t need the same
          structure or features — which is why Ivoniz tailors design, content, and functionality to the specific
          needs of each sector we build for across Calicut and Kerala.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ["Jewellery & Gold", "Visual-first catalogue websites built to drive showroom footfall"],
            ["Fashion & Textiles", "Ecommerce stores built for seasonal campaigns and online sales"],
            ["Real Estate", "Listing websites and lead capture for site visits and bookings"],
            ["Healthcare & Clinics", "Appointment-ready websites that build patient trust"],
            ["Education", "Admission-cycle websites and enquiry funnels"],
            ["Hospitality", "Booking-focused websites with review integration"],
            ["Automobile", "Showroom websites with lead generation and service booking"],
            ["E-Commerce", "Full online stores built for conversion and scale"],
            ["Professional Services", "Authority-building websites with clear service pages"],
          ].map(([i, d]) => (
            <div key={i} className="bg-[#f8f8f8] border border-black/8 rounded-xl px-5 py-4">
              <p className="text-sm font-semibold mb-1">{i}</p>
              <p className="text-xs text-black/50 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── BENEFITS OF HIRING A WEBSITE DEVELOPMENT COMPANY ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Benefits of Hiring a Professional Website Development Company
        </h2>
        <ul className="space-y-4 text-black/65 leading-relaxed">
          {[
            { t: "A website that actually converts", d: "engineered around clear calls-to-action, not just visuals." },
            { t: "Faster load times", d: "modern frameworks like Next.js mean visitors don't bounce before the page even loads." },
            { t: "SEO built in from day one", d: "clean structure and metadata mean your site is ready to rank, not retrofitted later." },
            { t: "One accountable team", d: "design, development, hosting, and support — no juggling multiple vendors." },
            { t: "Room to grow", d: "your website scales as your business adds products, pages, or features." },
            { t: "Ongoing support", d: "updates, security patches, and fixes — your site doesn't go stale after launch." },
          ].map((b) => (
            <li key={b.t} className="flex gap-2.5">
              <FaCheckCircle className="shrink-0 mt-1 text-emerald-600" />
              <span><strong>{b.t}</strong> — {b.d}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── COMPARISON ── */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ivoniz vs. Typical Website Companies in Calicut
        </h2>
        <p className="text-black/65 leading-relaxed mb-8">
          Not all <strong>website companies in Calicut</strong> offer the same depth of service. Here&apos;s how Ivoniz
          compares to the typical single-service web designer most businesses are used to working with.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-black/10 rounded-xl overflow-hidden">
            <thead className="bg-[#f8f8f8] text-left">
              <tr>
                <th className="py-3 px-4 font-semibold">Capability</th>
                <th className="py-3 px-4 font-semibold">Typical Website Company in Calicut</th>
                <th className="py-3 px-4 font-semibold">Ivoniz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/8 bg-white">
              {[
                ["Custom Design", "Often template-based", "Designed from scratch in Figma"],
                ["Modern Framework", "Outdated WordPress themes", "Next.js for speed & scalability"],
                ["SEO-Ready Build", "Rarely considered upfront", "Built in from the first wireframe"],
                ["In-House SEO & Marketing", "Outsourced or unavailable", "Fully integrated, same team"],
                ["Post-Launch Support", "Limited or pay-per-fix", "Ongoing maintenance plans available"],
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

      {/* ── RELATED SERVICES ── */}
      <Section className="bg-[#f8f8f8]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Marketing for Your New Website Too?</h2>
        <p className="text-black/65 leading-relaxed mb-4">
          A great website performs even better with the right traffic behind it. If you&apos;re also looking for SEO,
          Google Ads, or social media marketing in Calicut, check out our dedicated page on{" "}
          <Link href="/best-digital-marketing-company-in-calicut" className="underline font-medium">
            digital marketing services in Calicut
          </Link>{" "}
          to see how Ivoniz combines website development with full-funnel growth marketing.
        </p>
      </Section>

      {/* ── CASE STUDY STYLE SECTION ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Results We&apos;ve Delivered</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          {[
            { v: "300%", l: "Increase in online sales after an e-commerce website rebuild" },
            { v: "4.9", l: "Average Google rating across client reviews", star: true },
            { v: "1000+", l: "Websites delivered for businesses across Kerala" },
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
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/35 mb-5">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group bg-white border border-black/8 rounded-xl px-5 py-4">
              <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                {f.q}
                <span className="text-black/30 group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <p className="text-black/60 text-sm leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ── LEAD GENERATION CTA SECTION ── */}
      <Section className="bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get a Free Website Audit From the Best Website Company in Calicut
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mb-2">
          Not sure why your current website isn&apos;t converting? Claim a completely free website audit or free
          consultation from Ivoniz — the <strong className="text-white">best website development company in
          Calicut</strong> — and get a clear, actionable report within 48 hours.
        </p>
        <p className="text-white/50 leading-relaxed max-w-2xl mb-2">
          As a trusted <strong className="text-white">website company in Calicut</strong>, we&apos;ve helped
          businesses across Calicut, Thrissur, and beyond turn outdated websites into real growth assets.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/contact" className="inline-flex items-center gap-2 h-13 px-8 bg-white text-black text-sm font-bold tracking-wide rounded-full hover:bg-white/90 transition-colors">
            Free Website Audit <FaArrowRight className="text-[13px]" />
          </Link>
          <Link href="/works" className="inline-flex items-center gap-2 h-13 px-8 border border-white/25 text-white text-sm font-bold tracking-wide rounded-full hover:bg-white hover:text-black transition-colors">
            See Our Work <FaArrowRight className="text-[13px]" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 h-13 px-8 border border-white/25 text-white text-sm font-bold tracking-wide rounded-full hover:bg-white hover:text-black transition-colors">
            Book a Consultation <FaArrowRight className="text-[13px]" />
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
          Ready to Work With the Best Website Development Company in Calicut?
        </h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto text-center mb-2">
          Whether you need a <strong className="text-white">website company in Calicut</strong> for a brand-new
          site, a dependable <strong className="text-white">website development company in Calicut</strong> for an
          e-commerce build, or ongoing support for an existing site —{" "}
          <strong className="text-white">Ivoniz in Calicut</strong> is ready to help you grow.
        </p>
        <div className="flex justify-center">
          <CTAButtons />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
