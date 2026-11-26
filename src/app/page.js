/* Server component: the static homepage markup renders at build time and is
   not hydrated. Interactive parts are small client islands in components/home. */
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroRotator from "@/components/home/HeroRotator";
import Reveal from "@/components/home/Reveal";
import TextReveal from "@/components/home/TextReveal";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "@/components/Footer";
import LazyVideo from "@/components/LazyVideo";
import { webPageSchema, ORG_ID, organizationSchema } from "@/lib/schema";
import { clientBySlug, CLIENTS as CLIENT_LIST, CLIENT_STATS } from "@/lib/clients";
import { waLink } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";

/* Code-split below-the-fold sections — still statically prerendered
   (no ssr:false) so content stays in the static HTML for SEO/no-JS,
   but each ships as its own chunk instead of bloating the page's
   main bundle with GSAP/ScrollTrigger logic nobody needs at first paint. */
const ServicesSection  = dynamic(() => import("@/components/ServicesSection"));
const ShowcaseSections = dynamic(() => import("@/components/ShowcaseSections"));
const SelectedWorks    = dynamic(() => import("@/components/SelectedWorks"));

/* ── JSON-LD — WebPage and Service catalog. ───────────────────── */
const homePageSchema = webPageSchema({
  url: "https://ivoniz.com/",
  name: "Ivoniz LLP | Web & App Development Company in Kerala",
  description: "Ivoniz LLP is a web development, mobile app development, and digital marketing company in Kozhikode, Kerala — scalable apps, websites, and AI tools.",
});

const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Solutions Provider",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ivoniz Services",
    itemListElement: [
      "App Development",
      "Website Design",
      "Web Development",
      "Custom Software Development",
      "AI Solutions & Automation",
      "Digital Marketing",
      "Branding",
      "UI/UX Design",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

/* No Review markup here: Google does not allow a business to mark up reviews of itself (self-serving reviews),
   and can penalise sites that do. The testimonials stay on the page; real ratings live on the Google Business Profile. */

/* ── Data ───────────────────────────────────────────────────── */



const SERVICES = [
  {
    number: "01",
    title: "App Development",
    description: "As a trusted mobile app development company, we build apps for business growth through technology. We use Flutter, React Native, and native iOS/Android — built to match the scale of your business.",
    items: [
      "Cross-Platform App Development (Flutter / React Native)",
      "Native App Development (iOS / Android)",
      "AI-Powered App Features",
    ],
    href: "/mobile-app-development",
  },
  {
    number: "02",
    title: "Website Design",
    description: "We create websites that turn visitors into enquiries. We use Figma for design and Next.js for development — crafting stunning, conversion-focused digital experiences.",
    items: [
      "UI/UX Design & Prototyping",
      "Responsive Web Design",
      "Landing Page & Portfolio Design",
    ],
    href: "/website-development/best-website-development-company-in-calicut",
  },
  {
    number: "03",
    title: "Web Development",
    description: "Scalable web applications and portals built with modern technologies. From e-commerce to enterprise portals, we deliver digital products that perform.",
    items: [
      "E-Commerce & CMS Development",
      "Web Application & Portal Development",
      "API & Backend Development",
    ],
    href: "/website-development",
  },
  {
    number: "04",
    title: "Software Development",
    description: "As a software development company in Calicut, we build custom business software around how your team works: ERP, CRM, GST billing and industry-specific systems you own outright.",
    items: [
      "ERP Software Development",
      "CRM Software Development",
      "Billing & Custom Business Software",
    ],
    href: "/software-development",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description: "As a digital marketing agency in Calicut, we run SEO, Google Ads, Meta ads and social media that bring real enquiries, and report leads and cost per lead every month.",
    items: [
      "SEO & Google Business Profile",
      "Google Ads & Meta Ads",
      "Social Media Marketing & Content",
    ],
    href: "/digital-marketing",
  },
];

/* Real client projects (same data as /works) — cards link to the live sites */
const WORKS = ["posh-palette", "nizra-gold-and-diamonds", "rivaura-hospital", "opiz-global"].map(clientBySlug);

const PARTNERS = ["React","Next.js","Flutter","Node.js","MongoDB","AWS","Firebase","WordPress","Figma","PostgreSQL","Shopify","Tailwind CSS"];

/* Real Ivoniz clients only (src/lib/clients.js). The old list named large
   companies (banks, retailers, Kerala Tourism…) that are not clients. */
const CLIENTS = CLIENT_LIST.map((c) => c.title.replace(/ General Trading LLC$/, ""));

/* Featured real review (same video as /clients). */
const REVIEW = CLIENT_LIST.find((c) => c.review);

/* Apple-style display type in the site's font: light, tight, large */
const DISPLAY = { fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif", fontWeight: 300, letterSpacing: "-0.035em", lineHeight: 1.04 };
const OUT_LIGHT = { WebkitTextStroke: "1.4px rgba(237,237,237,0.5)", WebkitTextFillColor: "transparent", color: "transparent" };
const OUT_DARK = { WebkitTextStroke: "1.3px rgba(0,0,0,0.45)", WebkitTextFillColor: "transparent", color: "transparent" };
/* soft fade at both ends of the logo strips */
const EDGE_FADE = "[mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]";

/* ── Page ───────────────────────────────────────────────────── */

export default function Home() {
  // bg-black on <main>: every section sets its own background; black underneath the
  // hero video also gives accessibility checkers the real backdrop behind the glass navbar.
  return (
    <main id="main-content" className="bg-black text-black overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceSchema) }} />

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-dvh"
        style={{ background: "#060606" }}
      >
        {/* Background video — preload="metadata" instead of "auto" so this
            ~800KB file doesn't compete with critical CSS/JS/fonts for
            bandwidth on a slow connection; the dark section background
            above covers the gap until it's ready to play. */}
        <video
          autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/video/herosection/ivoniz_compressed.mp4" type="video/mp4" />
        </video>

        {/* Cinematic bottom-heavy overlay */}
        <div className="absolute inset-0" style={{
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.5) 62%, rgba(0,0,0,0.95) 100%)",
        }} />

        {/* Bottom fade → pure black so hero melts into About with no hard edge */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
          zIndex: 4,
          height: "200px",
          background: "linear-gradient(to bottom, transparent 0%, #000 100%)",
        }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          zIndex: 2,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.016) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,0.016) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }} />

        {/* Content — anchored to bottom */}
        <div
          className="relative flex flex-col justify-end px-6 sm:px-10 lg:px-14 xl:px-20 pb-44 sm:pb-12 lg:pb-16 min-h-dvh"
          style={{ zIndex: 3 }}
        >
          {/* Text block — the page's single H1.
              "We" and "develop" render as plain (non-motion) spans, visible
              in the static HTML with no entrance fade: as the LCP candidate,
              gating their paint on framer-motion hydration was adding ~3.7s
              of render delay on mobile (measured via PageSpeed Insights). */}
          {/* Big rotating statement — visual only. The SEO H1 is the short line
              below it (what we do + where), with the hero's two CTAs. */}
          <p className="m-0">
            <span
              className="font-light select-none block"
              style={{ fontSize: "clamp(76px, 11.5vw, 175px)", lineHeight: 0.87, letterSpacing: "-0.025em", color: "#D9D9D9" }}
            >
              We
            </span>

            <span
              className="font-light select-none block"
              style={{
                fontSize: "clamp(76px, 11.5vw, 175px)",
                lineHeight: 0.87,
                letterSpacing: "-0.025em",
                WebkitTextStroke: "1.5px rgba(217,217,217,0.38)",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              develop
            </span>

            <HeroRotator />
          </p>

          <div className="mt-8 lg:mt-10 mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1 className="m-0 max-w-[560px] text-[16px] sm:text-[18px] leading-relaxed font-normal text-white/75">
              Web design, app development and digital marketing company in Kozhikode (Calicut), Kerala, working
              with businesses across Kerala and the Gulf.
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="#quote" className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-white/90 transition-colors">
                Get a Project Quote <FiArrowUpRight aria-hidden="true" className="text-[16px]" />
              </Link>
              <a
                href={waLink("Hi Ivoniz, I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full border border-white/30 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── ABOUT — centred statement; words light up as you scroll ── */}
      <section className="relative bg-black px-5 sm:px-6 lg:px-10 xl:px-16 pt-20 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="mx-auto max-w-[1040px]">
          <div className="flex items-center justify-center gap-2.5 mb-8 sm:mb-10">
            <span className="text-[10px] text-white" style={{ lineHeight: 1 }} aria-hidden="true">▶</span>
            <span className="text-[12px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">About Company</span>
          </div>
          <TextReveal
            dark
            center
            large
            primary="Ivoniz is a web, app and digital marketing company in Kozhikode, Kerala. We build websites, mobile apps and software for businesses in Kerala and the Gulf,"
            secondary=" and add intelligent AI where it creates real value. Our goal is simple: help businesses grow through technology."
          />
          <Reveal className="mt-10 sm:mt-12 flex justify-center" delay={0.2}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 h-12 px-7 rounded-full border border-white/25 text-[15px] font-medium text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            >
              About us
              <FiArrowUpRight aria-hidden="true" className="text-[15px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SHOWCASE: Design / Build / Market ───────────────────── */}
      <ShowcaseSections />

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-black pb-20 sm:pb-28">
        <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { value: CLIENT_STATS.total,     label: "Live client websites" },
              { value: CLIENT_STATS.kerala,    label: "Clients in Kerala" },
              { value: CLIENT_STATS.gcc,       label: "Clients in the GCC" },
              { value: CLIENT_STATS.countries, label: "Countries" },
            ].map(({ value, label }, i) => (
              <Reveal key={label} y={40} scale={0.94} delay={i * 0.12}>
              <div className="stat-card flex flex-col items-center justify-center text-center gap-3 py-10 sm:py-14 px-4 cursor-default h-full">
                <span
                  className="text-white leading-none"
                  style={{
                    fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
                    fontSize  : "clamp(40px, calc(3.2vw + 24px), 76px)",
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {value}
                </span>
                <span className="text-[13px] sm:text-[14px] text-white/60 font-normal leading-snug max-w-32">
                  {label}
                </span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <div id="our-services">
        <ServicesSection services={SERVICES} />
      </div>

      {/* ── SELECTED WORKS — compact: one header row, one row of cards on desktop ── */}
      <section id="light-sections-start" className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 xl:px-16 bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between gap-6 mb-7 sm:mb-9">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-[10px] text-black" style={{ lineHeight: 1 }} aria-hidden="true">▶</span>
                <span className="text-[12px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.22em] uppercase text-black/55">Our Work</span>
              </div>
              <h2 className="text-black" style={{ ...DISPLAY, fontSize: "clamp(26px, calc(1vw + 18px), 36px)" }}>
                Selected <span style={OUT_DARK}>works</span>
              </h2>
            </div>
            <Link href="/works" className="inline-flex items-center gap-1.5 shrink-0 min-h-11 text-[14px] sm:text-[15px] font-medium text-black/70 hover:text-black transition-colors">
              View all <span aria-hidden="true">›</span>
            </Link>
          </div>
          <SelectedWorks works={WORKS} />
        </div>
      </section>

      {/* ── TECHNOLOGIES — light strip, soft edge fade ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-black/[0.06] overflow-hidden">
        <p className="text-center text-[12px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-black/60 mb-8 sm:mb-10">Technologies we work with</p>
        <div className={`overflow-hidden ${EDGE_FADE}`}>
          <div className="flex animate-marquee gap-14 sm:gap-20 whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span key={i} className="text-[19px] sm:text-[23px] font-medium tracking-[-0.015em] text-black/55 flex-shrink-0">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS — real client names only ── */}
      <section id="clients" className="py-20 sm:py-24 bg-[#060606] overflow-hidden">
        <p className="text-center text-[12px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white/50 mb-8 sm:mb-10">
          Trusted by businesses across Kerala and the Gulf
        </p>
        <div className={`overflow-hidden ${EDGE_FADE}`}>
          <div className="flex animate-marquee gap-14 sm:gap-20 whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span key={i} className="text-[19px] sm:text-[23px] font-medium tracking-[-0.015em] text-white/55 flex-shrink-0">{name}</span>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/clients" className="inline-flex items-center gap-1.5 min-h-11 text-[15px] text-white/70 hover:text-white transition-colors">
            Meet our clients <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      {/* ── CLIENT REVIEW — real video review (same as /clients) ── */}
      {REVIEW && (
        <section className="py-20 sm:py-28 lg:py-32 px-5 sm:px-6 lg:px-10 xl:px-16 bg-[#f8f8f8]">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-2.5 mb-5">
                <span className="text-[10px] text-black" style={{ lineHeight: 1 }} aria-hidden="true">▶</span>
                <span className="text-[12px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-black/55">Client Review</span>
              </div>
              <h2 className="text-black" style={{ ...DISPLAY, fontSize: "clamp(32px, calc(2vw + 20px), 52px)" }}>
                In their <span style={OUT_DARK}>own words</span>
              </h2>
              <p className="mt-5 text-[16px] sm:text-[17px] text-black/60 leading-relaxed">
                We built the website for {REVIEW.review.org} and design its Instagram content. Here&apos;s {REVIEW.review.name} on working with Ivoniz.
              </p>
            </div>

            <div className="grid md:grid-cols-[minmax(0,330px)_1fr] gap-10 lg:gap-16 items-center">
              <figure className="m-0">
                <div className="mx-auto w-full max-w-[300px] md:max-w-none rounded-[34px] bg-white border border-black/[0.08] p-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_30px_60px_-24px_rgba(0,0,0,0.28)]">
                  <video
                    className="block w-full rounded-[26px] bg-black"
                    style={{ aspectRatio: "9/16" }}
                    src={`${REVIEW.review.video}#t=0.5`}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`Video review from ${REVIEW.review.name}, ${REVIEW.review.org}`}
                  />
                </div>
              </figure>

              <div className="text-center md:text-left">
                <p className="text-[13px] font-semibold tracking-[0.16em] uppercase text-black/55">{REVIEW.category}</p>
                <p className="mt-3 text-black" style={{ ...DISPLAY, fontSize: "clamp(26px, calc(1.2vw + 18px), 40px)" }}>{REVIEW.review.name}</p>
                <p className="mt-2 text-[16px] text-black/55">{REVIEW.review.org} · {REVIEW.location}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3">
                  <a href={REVIEW.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-black text-white text-[15px] font-medium hover:bg-black/85 transition-colors">
                    Visit their website <FiArrowUpRight aria-hidden="true" />
                  </a>
                  <a href={organizationSchema.hasMap} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-black/15 text-black text-[15px] font-medium hover:bg-black hover:text-white hover:border-black transition-colors">
                    Read our Google reviews <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── QUOTE FORM — one short form for every service ── */}
      <section id="quote" className="relative bg-black px-5 sm:px-6 lg:px-10 xl:px-16 py-20 sm:py-28 scroll-mt-20">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-[10px] text-white" style={{ lineHeight: 1 }} aria-hidden="true">▶</span>
              <span className="text-[12px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Get a Quote</span>
            </div>
            <h2 style={{ ...DISPLAY, color: "#EDEDED", fontSize: "clamp(30px, calc(1.6vw + 20px), 48px)" }}>
              Tell us what you <span style={OUT_LIGHT}>need</span>
            </h2>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed max-w-[440px]">
              A website, an app, software or marketing. Answer a few questions and send them on WhatsApp or email.
              We reply with questions, then a fixed written quote.
            </p>
          </div>
          <ProjectQuoteForm
            idPrefix="home"
            subject="project"
            leadType="project_quote"
            location="home_quote_form"
            messageHint="Tell us about your business and what you need built or marketed."
            types={[
              { id: "website", label: "Website" },
              { id: "store", label: "Online store" },
              { id: "app", label: "Mobile app" },
              { id: "software", label: "Software (ERP, CRM, billing)" },
              { id: "marketing", label: "Digital marketing / SEO" },
              { id: "unsure", label: "Not sure yet" },
            ]}
            places={["Kerala", "Elsewhere in India", "UAE", "Saudi Arabia", "Qatar", "Other GCC", "Other"]}
          />
        </div>
      </section>

      {/* ── CTA — centred, Apple-style ── */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 px-5 sm:px-6 lg:px-10 xl:px-16">
        <LazyVideo
          src="/video/all/next-gen/ivoniz-llp-Next-Gen.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.78) 100%)" }} />

        <div className="relative mx-auto max-w-[920px] text-center" style={{ zIndex: 2 }}>
          <h2 style={{ ...DISPLAY, color: "#EDEDED", fontSize: "clamp(36px, calc(3vw + 22px), 76px)" }}>
            Ready to start your <span style={OUT_LIGHT}>next project?</span>
          </h2>
          <p className="mt-6 text-white/65 text-[17px] sm:text-[19px] max-w-xl mx-auto leading-relaxed">
            Let&apos;s build something great together. Reach out and tell us about your idea.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7">
            <Link href="/contact" className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-white/90 transition-colors">
              Get in touch <FiArrowUpRight aria-hidden="true" className="text-[16px]" />
            </Link>
            <a
              href={waLink("Hi Ivoniz, I'd like to discuss a new project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-11 text-[16px] text-white/80 hover:text-white transition-colors"
            >
              Chat on WhatsApp <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
