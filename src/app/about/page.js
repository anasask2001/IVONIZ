"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import AboutHero from "@/components/AboutHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const PILLARS = [
  {
    word: "Design",
    body: [
      "Every successful digital product starts with a clear vision. We create modern, user-focused designs that reflect your brand, engage your audience, and deliver exceptional experiences.",
      "From branding and UI/UX design to websites and mobile applications, we focus on creating digital experiences people love.",
    ],
  },
  {
    word: "Build",
    body: [
      "Ideas become reality through technology.",
      "Our team develops high-performance websites, mobile applications, e-commerce platforms, custom software, and AI-powered solutions designed to solve real business challenges and scale with your growth.",
      "We build with performance, security, and future expansion in mind.",
    ],
  },
  {
    word: "Market",
    body: [
      "Building a great product is only the beginning.",
      "We help businesses reach the right audience through SEO, digital marketing, social media marketing, content strategy, and performance-driven campaigns that generate visibility, leads, and measurable results.",
      "Because a product only succeeds when people can find it.",
    ],
  },
];

const WHY = [
  "Strategic Design Thinking",
  "Modern Web & Mobile Development",
  "SEO & Digital Marketing Expertise",
  "AI & Automation Solutions",
  "Transparent Communication",
  "Long-Term Partnership Approach",
  "Results-Driven Execution",
];

const PROMISE = ["You bring the idea.", "We design it.", "We build it.", "We market it."];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Ivoniz",
  url: "https://ivoniz.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Ivoniz Pvt Ltd",
    url: "https://ivoniz.com",
    founder: { "@type": "Person", name: "Muhammed Anas" },
    description:
      "Ivoniz Pvt Ltd is a technology and digital growth company dedicated to helping businesses transform ideas into successful digital products through design, development, and marketing.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* ── HERO ── */}
      <AboutHero />

      {/* ── DESIGN / BUILD / MARKET PILLARS ── */}
      {PILLARS.map((p, i) => (
        <section
          key={p.word}
          className={`relative py-8 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-16 overflow-hidden ${i % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"}`}
        >
          {/* giant faint background number */}
          <p
            aria-hidden="true"
            className="absolute select-none pointer-events-none font-black leading-none"
            style={{
              top: "0%", right: "2%", fontSize: "clamp(100px,14vw,220px)",
              color: "rgba(0,0,0,0.035)", zIndex: 0,
            }}
          >
            0{i + 1}
          </p>

          <div className="relative mx-auto max-w-350" style={{ zIndex: 1 }}>
            <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div>
                <motion.p
                  {...fadeUp(0)}
                  className="text-[11px] font-semibold tracking-[0.3em] uppercase text-black/35 mb-4"
                >
                  Step 0{i + 1}
                </motion.p>
                <motion.h2
                  {...fadeUp(0.04)}
                  className="font-bold leading-none mb-2 inline-block"
                  style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
                >
                  {p.word}
                </motion.h2>
                <motion.div
                  {...fadeUp(0.1)}
                  className="h-1 w-12 bg-black rounded-full mt-3"
                />
              </div>
              <div className="max-w-2xl">
                {p.body.map((para, j) => (
                  <motion.p
                    key={j}
                    {...fadeUp(0.08 + j * 0.06)}
                    className="text-black/60 text-[16px] sm:text-[18px] leading-relaxed mb-4"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── WHO WE ARE ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 xl:px-16 bg-black text-white relative overflow-hidden">
        <FloatingOrbs />
        <div className="relative mx-auto max-w-350" style={{ zIndex: 1 }}>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="max-w-3xl">
              <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-5">
                Who We Are
              </motion.p>
              <motion.h2 {...fadeUp(0.04)} className="text-3xl sm:text-4xl font-bold mb-6">
                A technology partner, not just a vendor.
              </motion.h2>
              <motion.p {...fadeUp(0.08)} className="text-white/55 text-[16px] sm:text-[17px] leading-relaxed mb-5">
                Ivoniz Pvt Ltd is a technology and digital growth company dedicated to helping businesses transform
                ideas into successful digital products.
              </motion.p>
              <motion.p {...fadeUp(0.14)} className="text-white/55 text-[16px] sm:text-[17px] leading-relaxed">
                Founded by Muhammed Anas, Ivoniz was created with a vision to bridge the gap between business goals
                and technology solutions. By combining strategic thinking, creative design, advanced development, and
                modern marketing, we help businesses build a strong digital presence and achieve sustainable growth.
              </motion.p>
            </div>

            {/* proof stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "5+", l: "Years building" },
                { v: "1000+", l: "Websites delivered" },
                { v: "100+", l: "Apps shipped" },
                { v: "4.9", l: "Client rating", star: true },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  {...fadeUp(0.1 + i * 0.06)}
                  className="rounded-xl p-5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <p className="font-bold text-2xl sm:text-3xl mb-1 inline-flex items-center gap-1.5">
                    {s.v}
                    {s.star && <FaStar className="text-[18px] sm:text-[20px] text-amber-400" />}
                  </p>
                  <p className="text-white/40 text-[12px]">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY (timeline) ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 xl:px-16 bg-[#EEEEEE]">
        <div className="mx-auto max-w-350">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] uppercase text-black/35 mb-5">
            Our Journey
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-bold mb-16 max-w-xl">
            From curiosity to a company built on results.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative max-w-2xl">
              <div
                className="absolute top-0 bottom-0 left-6 sm:left-7 w-px"
                style={{ background: "rgba(0,0,0,0.10)" }}
              />
              <div className="flex flex-col gap-12">
                {[
                  { t: "The Spark", d: "A B.Com graduate's curiosity about technology and design — no plan, just genuine interest in how websites and software worked." },
                  { t: "Learning By Doing", d: "Years of self-taught development, real client projects, and hard-won problem-solving — turning curiosity into real, usable skill." },
                  { t: "Ivoniz Is Born", d: "A clear mission takes shape: bridge the gap between business goals and technology solutions, under one accountable roof." },
                  { t: "Building Momentum", d: "Capabilities grow across web, mobile, AI, and digital marketing — one client outcome at a time, one referral at a time." },
                  { t: "Today", d: "5+ years of building, 1000+ websites delivered, and a 4.9-star reputation earned through results, not promises." },
                ].map((stage, i) => (
                  <motion.div
                    key={stage.t}
                    {...fadeUp(0.08 + i * 0.08)}
                    className="relative flex items-start gap-5"
                  >
                    <span
                      className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[14px] bg-white border border-black/12"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-bold text-lg sm:text-xl mb-1.5">{stage.t}</h3>
                      <p className="text-black/55 text-[15px] leading-relaxed max-w-md">{stage.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* opposite side — graphic gif background */}
            <motion.div
              {...fadeUp(0.1)}
              className="hidden lg:block rounded-2xl overflow-hidden"
              style={{
                minHeight: "100%",
                backgroundImage: "url('/about-assets/graphic.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 xl:px-16 bg-white">
        <div className="mx-auto max-w-350 grid sm:grid-cols-2 gap-6">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl p-8 sm:p-10"
            style={{ background: "#0a0a0a", color: "#fff" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeOpacity="0.6" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="1" fill="white" fillOpacity="0.8" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/55 text-[16px] leading-relaxed mb-3">At Ivoniz, our mission is simple:</p>
            <p className="font-semibold text-[19px] leading-relaxed mb-4">
              Transform ideas into powerful digital experiences.
            </p>
            <p className="text-white/55 text-[16px] leading-relaxed">
              We believe every business deserves access to modern technology, innovative strategies, and scalable
              solutions that enable sustainable growth. Through creativity, technology, and strategic thinking, we
              help organizations unlock their full potential in a rapidly changing digital landscape.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.08)}
            className="rounded-2xl p-8 sm:p-10 border border-black/8"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-black/5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" stroke="black" strokeOpacity="0.55" strokeWidth="1.6" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="2.6" stroke="black" strokeOpacity="0.55" strokeWidth="1.6" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-black/60 text-[16px] leading-relaxed">
              To become a globally recognized technology company known for delivering innovative, reliable, and
              impactful digital solutions that help businesses thrive in the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY BUSINESSES CHOOSE IVONIZ ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 xl:px-16 bg-[#f8f8f8]">
        <div className="mx-auto max-w-350">
          <motion.h2 {...fadeUp(0)} className="text-3xl sm:text-4xl font-bold mb-10">
            Why Businesses Choose Ivoniz
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w, i) => (
              <motion.div
                key={w}
                {...fadeUp((i % 3) * 0.06)}
                whileHover={{ y: -4, borderColor: "rgba(0,0,0,0.18)" }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-black/8 rounded-xl px-5 py-5 flex items-start gap-4"
              >
                <span className="text-black/25 font-bold text-sm shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-[15px] leading-snug">{w}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ── */}
      <section
        className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-10 xl:px-16 bg-black text-white overflow-hidden"
        style={{
          backgroundImage: "url('/about-assets/delirium lab.gif')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* dark wash so text stays legible while the artwork still shows through */}
        <div className="absolute inset-0 bg-black/55" style={{ zIndex: 0 }} />
        <FloatingOrbs />

        <div className="relative mx-auto max-w-350 text-center" style={{ zIndex: 1 }}>

          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-4"
          >
            Our Promise
          </motion.p>
          <motion.h2
            {...fadeUp(0.05)}
            className="font-bold max-w-md mx-auto mb-12"
            style={{ fontSize: "clamp(22px, 3.2vw, 34px)", textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
          >
            One simple promise, every single time.
          </motion.h2>

          {/* Promise flow — vertical numbered journey with connecting line */}
          <div className="relative max-w-md mx-auto mb-20">
            <div
              className="absolute top-0 bottom-0 left-6 sm:left-7 w-px"
              style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.25), transparent)" }}
            />
            <div className="flex flex-col gap-7">
              {PROMISE.map((line, i) => (
                <motion.div
                  key={line}
                  {...fadeUp(0.1 + i * 0.1)}
                  className="relative flex items-center gap-5 text-left"
                >
                  <span
                    className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[15px]"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "clamp(18px, 2.2vw, 26px)", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
                  >
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp(0.6)} className="inline-flex">
            <p
              className="text-white text-[13px] font-bold tracking-[0.22em] uppercase rounded-full px-7 py-3.5"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.30)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 0 40px rgba(255,255,255,0.08)",
              }}
            >
              That&apos;s the Ivoniz way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-16 bg-black text-white text-center overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%", left: "50%", transform: "translateX(-50%)", width: "70vw", height: "70vw", maxWidth: "900px",
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative" style={{ zIndex: 1 }}>
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6"
          >
            Let&apos;s Talk
          </motion.p>
          <motion.h2
            {...fadeUp(0.06)}
            className="font-bold mb-5 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(28px, 4.4vw, 52px)" }}
          >
            Ready to build something together?
          </motion.h2>
          <motion.p {...fadeUp(0.12)} className="text-white/50 max-w-md mx-auto mb-10 text-[16px]">
            Tell us what you&apos;re working on — we&apos;ll help you design it, build it, and market it.
          </motion.p>
          <motion.div {...fadeUp(0.18)}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-14 px-9 bg-white text-black text-sm font-bold tracking-wide rounded-full hover:bg-white/90 transition-colors"
            >
              Get in Touch <FaArrowRight className="text-[13px]" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
