"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "@/components/Footer";
import LazyVideo from "@/components/LazyVideo";
import { webPageSchema, ORG_ID } from "@/lib/schema";

/* Code-split below-the-fold sections — still statically prerendered
   (no ssr:false) so content stays in the static HTML for SEO/no-JS,
   but each ships as its own chunk instead of bloating the page's
   main bundle with GSAP/ScrollTrigger logic nobody needs at first paint. */
const ServicesSection  = dynamic(() => import("@/components/ServicesSection"));
const ShowcaseSections = dynamic(() => import("@/components/ShowcaseSections"));
const GoogleReviews    = dynamic(() => import("@/components/GoogleReviews"));
const SelectedWorks    = dynamic(() => import("@/components/SelectedWorks"));

/* ── JSON-LD — WebPage, Service catalog, and the real testimonials
   shown below via GoogleReviews. ──────────────────────────────── */
const homePageSchema = webPageSchema({
  url: "https://ivoniz.com/",
  name: "Ivoniz Pvt Ltd | Web & App Development Company in Kerala",
  description: "Ivoniz Pvt Ltd is a leading web development, mobile app development, and digital marketing company in Kozhikode, Kerala. We build scalable apps, websites, and AI tools to grow your business.",
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

const homeReviewSchema = [
  {
    author: "Rahul Mehta",
    company: "TechCorp India",
    quote: "Ivoniz delivered an outstanding mobile app for our business. The team was professional, creative, and delivered exactly what we envisioned — on time and within budget.",
    rating: 5,
  },
  {
    author: "Sarah Johnson",
    company: "Arlocks Fashion",
    quote: "Working with Ivoniz was a game changer for us. They built a stunning e-commerce website that increased our online sales by 300%. Highly recommended!",
    rating: 5,
  },
].map((r) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": ORG_ID },
  author: {
    "@type": "Person",
    name: r.author,
    worksFor: { "@type": "Organization", name: r.company },
  },
  reviewBody: r.quote,
  reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
}));

/* ── Data ───────────────────────────────────────────────────── */

const HERO_WORDS = ["Apps", "Websites", "AI Tools", "Software"];


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
    href: "/#our-services",
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
    href: "/best-website-development-company-in-calicut",
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
    href: "/best-website-development-company-in-calicut",
  },
];

const WORKS = [
  { id: 1, title: "Arlocks Gents Wear", category: "E-Commerce", year: "2024", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80", href: "/works" },
  { id: 2, title: "TechFlow Dashboard",  category: "Web App",    year: "2024", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80", href: "/works" },
  { id: 3, title: "FoodieSpot",          category: "Mobile App", year: "2024", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80", href: "/works" },
  { id: 4, title: "Luxe Interiors",      category: "Website",    year: "2023", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80", href: "/works" },
];

const PARTNERS = ["React","Next.js","Flutter","Node.js","MongoDB","AWS","Firebase","WordPress","Figma","PostgreSQL","Shopify","Tailwind CSS"];

const CLIENTS = [
  "Arlocks Gents Wear","Federal Bank","Lulu Hypermarket","Kerala Tourism",
  "Malabar Gold","KITEX Group","UST Global","IBS Software",
  "Synthite Industries","Geojit Financial","Popular Vehicles","VKC Group",
];

/* ── Page ───────────────────────────────────────────────────── */

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % HERO_WORDS.length),
      3400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <main id="main-content" className="bg-white text-black overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceSchema) }} />
      {homeReviewSchema.map((r, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(r) }} />
      ))}

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "#060606" }}
      >
        {/* Background video */}
        <video
          autoPlay muted loop playsInline preload="auto"
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
          className="relative flex flex-col justify-end px-6 sm:px-10 lg:px-14 xl:px-20 pb-12 lg:pb-16"
          style={{ zIndex: 3, minHeight: "100vh" }}
        >
          {/* Text block — the page's single H1 */}
          <h1 className="mb-8 lg:mb-10 m-0">
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-light select-none block"
              style={{ fontSize: "clamp(44px, 11.5vw, 175px)", lineHeight: 0.87, letterSpacing: "-0.025em", color: "#D9D9D9" }}
            >
              We
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="font-light select-none block"
              style={{
                fontSize: "clamp(44px, 11.5vw, 175px)",
                lineHeight: 0.87,
                letterSpacing: "-0.025em",
                WebkitTextStroke: "1.5px rgba(217,217,217,0.38)",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              develop
            </motion.span>

            <span className="select-none block" style={{ overflow: "hidden", lineHeight: 0.87 }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="font-light block"
                  style={{
                    fontSize: "clamp(44px, 11.5vw, 175px)",
                    lineHeight: 0.87,
                    letterSpacing: "-0.025em",
                    color: "#D9D9D9",
                  }}
                  initial={{ x: "60px", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-60px", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {HERO_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 text-[14px] sm:text-[15px] tracking-[0.04em]"
          >
            Ivoniz — the complete solution for business
          </motion.p>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-6 lg:px-10 xl:px-16 bg-black overflow-hidden">

        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-start">

            {/* LEFT — label + double decorative logo */}
            <div className="flex flex-col">
              {/* Label */}
              <div className="flex items-center gap-2.5 mb-6 sm:mb-8 lg:mb-12">
                <span className="text-[10px] text-white" style={{ lineHeight: 1 }}>▶</span>
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">
                  About Company
                </span>
              </div>

              {/* Double sketch — white strokes on dark bg */}
              <div className="hidden lg:block w-47.5 sm:w-55 select-none pointer-events-none">
                <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <g opacity="0.18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {[0, 90, 180, 270].map((a) => (
                      <path key={a} transform={`rotate(${a} 75 80)`}
                        d="M 75,80 C 60,68 50,44 58,30 C 65,20 82,18 92,30 C 100,42 98,62 88,74 C 82,80 78,81 75,80 Z" />
                    ))}
                  </g>
                  <g opacity="0.30" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {[0, 90, 180, 270].map((a) => (
                      <path key={a} transform={`rotate(${a} 170 175)`}
                        d="M 170,175 C 155,163 145,139 153,125 C 160,115 177,113 187,125 C 195,137 193,157 183,169 C 177,175 173,176 170,175 Z" />
                    ))}
                  </g>
                </svg>
              </div>
            </div>

            {/* RIGHT — large text with scroll word-reveal */}
            <div className="relative pt-0 lg:pt-1">
              <TextReveal
                dark
                primary="Ivoniz is a leading mobile app and web development company. We build scalable mobile apps and web applications for startups and enterprises,"
                secondary=" and add intelligent AI where it creates real value. Our goal is simple: help businesses grow through technology."
              />

              {/* Pill button */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-[15px] font-medium text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                >
                  About us
                  <FiArrowUpRight aria-hidden="true" className="text-[15px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE: Design / Build / Market ───────────────────── */}
      <ShowcaseSections />

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-black pb-16 sm:pb-20">
        <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { value: "5+",    label: "Years of Building" },
              { value: "1000+", label: "Websites Delivered" },
              { value: "100+",  label: "Mobile Apps Delivered" },
              { value: "100%",  label: "Clients satisfied & retention" },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  scale      : 1.04,
                  boxShadow  : "0 8px 48px rgba(255,255,255,0.10), 0 2px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.22)",
                  borderColor: "rgba(255,255,255,0.28)",
                  background : "rgba(255,255,255,0.10)",
                  transition : { duration: 0.25 },
                }}
                className="flex flex-col items-center text-center gap-2 py-8 px-4 cursor-default"
                style={{
                  background           : "rgba(255,255,255,0.04)",
                  backdropFilter       : "blur(24px)",
                  WebkitBackdropFilter : "blur(24px)",
                  border               : "1px solid rgba(255,255,255,0.10)",
                  borderRadius         : "16px",
                  boxShadow            : "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="text-white leading-none"
                  style={{
                    fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
                    fontSize  : "clamp(40px, 5.5vw, 78px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value}
                </span>
                <span className="text-[13px] sm:text-[14px] text-white/60 font-normal leading-snug max-w-32">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <div id="our-services">
        <ServicesSection services={SERVICES} />
      </div>

      {/* ── SELECTED WORKS ───────────────────────────────────────── */}
      <section id="light-sections-start" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 xl:px-16 bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/60 mb-5">Our Work</p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Selected works</h2>
            </div>
            <Link href="/works" className="inline-flex items-center gap-2 text-[14px] font-medium text-black/50 hover:text-black transition-colors">View All <FaArrowRight aria-hidden="true" className="text-[12px]" /></Link>
          </div>
          <SelectedWorks works={WORKS} />
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-black/7 overflow-hidden">
        <p className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase text-black/55 mb-10">Technologies We Work With</p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-20 whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span key={i} className="text-[14px] font-semibold text-black/55 tracking-wide flex-shrink-0">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ──────────────────────────────────────────────── */}
      <section id="clients" className="py-20 bg-[#060606] overflow-hidden">
        <p className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase text-white/55 mb-12">
          Trusted by businesses across Kerala &amp; beyond
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-24 whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span key={i} className="text-[15px] font-semibold text-white/55 tracking-wide flex-shrink-0 hover:text-white/60 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-8">
          <div className="flex animate-marquee-reverse gap-24 whitespace-nowrap">
            {[...CLIENTS].reverse().concat([...CLIENTS].reverse()).map((name, i) => (
              <span key={i} className="text-[13px] font-medium text-white/55 tracking-wider flex-shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 xl:px-16 bg-[#f8f8f8]">
        <div className="mx-auto max-w-350">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black/60 mb-5">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-10">What clients say.</h2>
          <GoogleReviews />
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Background video */}
        <LazyVideo
          src="/video/all/next-gen/ivoniz-pvt-ltd-Next-Gen.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.70) 100%)" }} />

        <div className="relative mx-auto max-w-[1400px] text-center" style={{ zIndex: 2 }}>
          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white mb-5 leading-[1.1] tracking-tight">
            Ready to start your<br />next project?
          </h2>
          <p className="text-white/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Let&apos;s build something great together. Reach out and tell us about your idea.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 h-[54px] px-10 bg-white text-black text-[14px] font-bold tracking-[0.04em] rounded-full hover:bg-white/90 transition-colors">
            Get in Touch <FaArrowRight aria-hidden="true" className="text-[13px]" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ── Text Reveal ─────────────────────────────────────────────── */
function TextReveal({ primary, secondary, dark = false }) {
  const allWords  = `${primary}${secondary}`.split(" ");
  const primCount = primary.trim().split(" ").length;

  const dim    = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.14)";
  const dimSec = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.10)";
  const full   = dark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.92)";
  const fullSec= dark ? "rgba(255,255,255,0.82)" : "rgba(0,0,0,0.88)";

  return (
    <p
      className="font-medium leading-[1.6] tracking-[-0.01em]"
      style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}
    >
      {allWords.map((word, i) => {
        const isPrimary = i < primCount;
        return (
          <motion.span
            key={i}
            className="inline"
            initial={{ color: isPrimary ? dim : dimSec }}
            whileInView={{ color: isPrimary ? full : fullSec }}
            viewport={{ once: false, margin: "0px 0px -18% 0px" }}
            transition={{
              delay: (i % 12) * 0.028,
              duration: isPrimary ? 0.45 : 0.55,
              ease: "easeOut",
            }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </p>
  );
}


/* ── Shared icon ─────────────────────────────────────────────── */
function ArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
