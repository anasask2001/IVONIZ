"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const VALUES = [
  { t: "Innovation", d: "We continuously explore new technologies and creative approaches to solve complex business challenges." },
  { t: "Excellence", d: "We are committed to delivering high-quality solutions that exceed expectations." },
  { t: "Transparency", d: "Honest communication and trust form the foundation of every client relationship." },
  { t: "Growth", d: "We focus on creating solutions that contribute to long-term business success." },
  { t: "Client Success", d: "Our success is measured by the success of our clients." },
];

const LEADERSHIP = [
  "Business-First Thinking",
  "Continuous Learning",
  "Innovation-Driven Development",
  "Customer-Centric Solutions",
  "Long-Term Partnership Building",
];

const EXPERTISE = [
  "Web Development",
  "Mobile Application Development",
  "Custom Software Solutions",
  "Digital Marketing",
  "Search Engine Optimization (SEO)",
  "AI Integration & Automation",
  "UI/UX Design",
  "E-Commerce Solutions",
  "Cloud & Hosting Solutions",
  "Business Process Automation",
];

function Section({ className = "", children }) {
  return (
    <section className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-10 xl:px-16 ${className}`}>
      <div className="mx-auto max-w-350">{children}</div>
    </section>
  );
}

export default function FounderPageClient({ faqs = [] }) {
  return (
    <main id="main-content" className="bg-white text-black">

      {/* ── HERO ── */}
      <section className="bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-350 grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-center">

          <motion.div {...fadeUp(0)}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder/founder-of-ivoniz.jpg"
                alt="Muhammed Anas — Founder & Managing Director, Ivoniz LLP"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div>
            <Breadcrumbs dark items={[{ label: "Founder", href: "/founder" }]} />
            <motion.p {...fadeUp(0.05)} className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 mt-4 mb-5">
              About the Founder
            </motion.p>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-bold leading-[1.08] mb-6"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Building a Vision<br />Beyond Boundaries
            </motion.h1>
            <motion.p {...fadeUp(0.15)} className="font-bold text-2xl mb-1">Muhammed Anas</motion.p>
            <motion.p {...fadeUp(0.18)} className="text-white/60 text-[15px]">
              Founder &amp; Managing Director, Ivoniz LLP
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <Section className="bg-white">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            Every successful company begins with a vision. For Ivoniz, that vision started with a young commerce
            graduate who believed that technology could solve real business challenges and create opportunities
            for growth.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            Muhammed Anas, the Founder and Managing Director of Ivoniz LLP, completed his Bachelor of Commerce
            (B.Com) with aspirations of building a meaningful career. While his academic background was rooted in
            business and commerce, his curiosity led him toward an entirely different world—technology.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            What began as a simple interest in websites and software gradually evolved into a passion for creating
            digital solutions. Instead of following a traditional career path, Anas dedicated himself to learning
            web development, software engineering, user experience design, digital marketing, and emerging
            technologies through continuous self-learning and practical experience.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed">
            He spent years mastering the skills required to build modern digital products, working on real-world
            projects, understanding client requirements, and learning how businesses operate in an increasingly
            digital-first world.
          </p>
        </motion.div>
      </Section>

      {/* ── DISCOVERING THE GAP ── */}
      <Section className="bg-[#f8f8f8]">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Discovering the Gap</h2>
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            As Anas worked with businesses from different industries, he noticed a recurring problem.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            Many organizations wanted to embrace technology but struggled to find partners who truly understood
            their business objectives. Most service providers focused solely on development, while businesses
            needed strategic solutions that could drive growth, improve efficiency, and deliver measurable results.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            His commerce background gave him a unique perspective. He understood not only the technical aspects of
            building digital solutions but also the business challenges faced by entrepreneurs and organizations.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed">
            This combination of business understanding and technical expertise became the foundation of what would
            later become Ivoniz.
          </p>
        </motion.div>
      </Section>

      {/* ── BIRTH OF IVONIZ ── */}
      <Section className="bg-white">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Birth of Ivoniz</h2>
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            Driven by the desire to help businesses succeed in the digital era, Muhammed Anas founded Ivoniz LLP
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed mb-3">
            The company was established with a clear mission:
          </p>
          <p className="font-semibold text-[19px] leading-relaxed mb-6 border-l-2 border-black/15 pl-5">
            To empower businesses with innovative technology solutions that simplify operations, strengthen digital
            presence, and accelerate growth.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed mb-6">
            From web development and mobile applications to AI integration, digital marketing, and business
            automation, Ivoniz was built to be more than a service provider—it was designed to become a long-term
            technology partner for businesses.
          </p>
          <p className="text-black/65 text-[17px] leading-relaxed">
            What started as a vision soon evolved into a growing company delivering digital solutions for startups,
            small businesses, and enterprises.
          </p>
        </motion.div>
      </Section>

      {/* ── MISSION + VISION ── */}
      <Section className="bg-black text-white">
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/55 leading-relaxed mb-3">At Ivoniz, our mission is simple:</p>
            <p className="font-semibold text-[19px] leading-relaxed mb-4">
              Transform ideas into powerful digital experiences.
            </p>
            <p className="text-white/55 leading-relaxed">
              We believe every business deserves access to modern technology, innovative strategies, and scalable
              solutions that enable sustainable growth. Through creativity, technology, and strategic thinking, we
              help organizations unlock their full potential in a rapidly changing digital landscape.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-white/55 leading-relaxed">
              To become a globally recognized technology company known for delivering innovative, reliable, and
              impactful digital solutions that help businesses thrive in the modern world.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ── VALUES ── */}
      <Section className="bg-[#f8f8f8]">
        <motion.h2 {...fadeUp(0)} className="text-3xl sm:text-4xl font-bold mb-10">
          The Values That Drive Us
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.t}
              {...fadeUp(i * 0.05)}
              className="bg-white border border-black/8 rounded-xl p-6"
            >
              <h3 className="font-bold text-lg mb-2">{v.t}</h3>
              <p className="text-black/55 text-[14px] leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── LEADERSHIP PHILOSOPHY ── */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Leadership Philosophy</h2>
            <p className="text-black/65 text-[16px] leading-relaxed mb-4">
              Muhammed Anas believes that great technology should be simple, effective, and focused on solving
              real-world problems.
            </p>
            <p className="text-black/65 text-[16px] leading-relaxed">
              His leadership approach combines:
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <ul className="space-y-3">
              {LEADERSHIP.map((l) => (
                <li key={l} className="flex items-center gap-3 text-[16px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
            <p className="text-black/60 text-[14px] leading-relaxed mt-6">
              This philosophy continues to guide every project delivered by Ivoniz.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ── AREAS OF EXPERTISE ── */}
      <Section className="bg-[#f8f8f8]">
        <motion.h2 {...fadeUp(0)} className="text-3xl sm:text-4xl font-bold mb-10">
          Areas of Expertise
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EXPERTISE.map((e, i) => (
            <motion.div
              key={e}
              {...fadeUp((i % 3) * 0.05)}
              className="bg-white border border-black/8 rounded-lg px-5 py-4 text-[14px] font-medium"
            >
              {e}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── MESSAGE FROM THE FOUNDER ── */}
      <Section className="bg-black text-white">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 mb-6">
            A Message from the Founder
          </p>
          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: "clamp(20px, 2.4vw, 28px)", fontWeight: 400 }}
          >
            &ldquo;My journey from a B.Com graduate to founding a technology company taught me one important
            lesson: your background does not define your future. Passion, dedication, and continuous learning can
            open doors you never imagined possible.
          </p>
          <p
            className="leading-relaxed mb-10"
            style={{ fontSize: "clamp(20px, 2.4vw, 28px)", fontWeight: 400 }}
          >
            At Ivoniz, we are committed to helping businesses leverage technology to achieve meaningful growth and
            lasting success. Every project we undertake is an opportunity to create value, solve challenges, and
            build something impactful.&rdquo;
          </p>
          <p className="font-bold text-lg">— Muhammed Anas</p>
          <p className="text-white/60 text-[14px] mt-1">Founder &amp; Managing Director, Ivoniz LLP</p>
        </motion.div>
      </Section>

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <Section className="bg-[#f8f8f8]">
          <motion.h2 {...fadeUp(0)} className="text-3xl sm:text-4xl font-bold mb-10">
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((f) => (
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
      )}

      {/* ── CTA ── */}
      <Section className="bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s build something together.</h2>
        <p className="text-black/50 max-w-md mx-auto mb-8">
          We&apos;d love to hear what you&apos;re working on.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-13 px-8 bg-black text-white text-sm font-bold tracking-wide rounded-full hover:bg-black/85 transition-colors"
        >
          Get in Touch <FaArrowRight aria-hidden="true" className="text-[13px]" />
        </Link>
      </Section>

      <Footer />
    </main>
  );
}
