"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

/* Shared lead-capture pieces (tracked CTAs, quiz, sticky mobile bar).
   Used by /website-development/custom-website-vs-wordpress and /website-development. */

const WA_NUMBER = "919645760023";

export function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* GA4 event — no-ops safely if gtag is not loaded (e.g. ad blockers).
   The page path is attached so reports can split leads by page. */
export function track(event, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, { page: window.location.pathname, ...params });
  }
}

/* ── Tracked CTA buttons ──────────────────────────────────────── */
export function EstimateButton({ label = "Get a Custom Website Development Estimate", location, dark = false }) {
  return (
    <Link
      href="/contact"
      onClick={() => track("generate_lead_click", { cta: "estimate", location })}
      className={`inline-flex items-center justify-center gap-2 h-13 px-7 text-sm font-bold tracking-wide rounded-full transition-colors ${
        dark ? "bg-white text-black hover:bg-white/85" : "bg-black text-white hover:bg-black/85"
      }`}
    >
      {label} <FaArrowRight aria-hidden="true" className="text-[12px]" />
    </Link>
  );
}

export function WhatsAppButton({
  label = "Discuss Your Website Project",
  message = "Hi Ivoniz, I'm comparing a custom website vs WordPress for my business. Can you help me choose?",
  location,
  dark = false,
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location })}
      className={`inline-flex items-center justify-center gap-2 h-13 px-7 text-sm font-bold tracking-wide rounded-full border transition-colors ${
        dark
          ? "border-white/25 text-white hover:bg-white hover:text-black"
          : "border-black/15 text-black hover:bg-black hover:text-white"
      }`}
    >
      <FaWhatsapp aria-hidden="true" className="text-[16px]" /> {label}
    </a>
  );
}

/* ── Three-question decision quiz ─────────────────────────────── */
const QUESTIONS = [
  {
    id: "need",
    q: "What does your website need to do?",
    options: [
      { label: "Present my business, services or blog", value: "site", custom: 0 },
      { label: "Sell products online", value: "store", custom: 1 },
      { label: "Logins, bookings, dashboards or integrations", value: "app", custom: 3 },
    ],
  },
  {
    id: "budget",
    q: "What budget do you have in mind?",
    options: [
      { label: "Keep it lean", value: "lean", custom: 0 },
      { label: "Moderate, for the right result", value: "moderate", custom: 1 },
      { label: "Flexible, this is a long-term investment", value: "flexible", custom: 2 },
    ],
  },
  {
    id: "timeline",
    q: "When do you need to launch?",
    options: [
      { label: "Within a month", value: "fast", custom: 0 },
      { label: "In 1 to 3 months", value: "medium", custom: 1 },
      { label: "No rush, we want it right", value: "flexible", custom: 1 },
    ],
  },
];

function recommend(answers) {
  if (answers.need?.value === "app") return "custom";
  const score = Object.values(answers).reduce((s, o) => s + o.custom, 0);
  if (answers.need?.value === "store" && score >= 4) return "custom";
  if (score >= 5) return "custom";
  if (answers.need?.value === "store") return "woo";
  return "wp";
}

const RESULTS = {
  wp: {
    title: "WordPress is your best fit",
    text: "You can launch a fast, professional site quickly, keep costs down and update it yourself. We'll set it up with a lean theme and only the plugins you need.",
    color: "#2563eb",
  },
  woo: {
    title: "WordPress + WooCommerce fits your store",
    text: "A WooCommerce store handles a standard catalogue, checkout and local payment gateways well, and you can move to custom later as you grow.",
    color: "#2563eb",
  },
  custom: {
    title: "A custom website fits your plans",
    text: "Your features, integrations or growth plans need a build made around your business. We'll scope it so you only pay for what you need.",
    color: "#7c3aed",
  },
};

export function PlatformQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const done = step >= QUESTIONS.length;
  const result = done ? RESULTS[recommend(answers)] : null;

  const choose = (qid, option) => {
    const next = { ...answers, [qid]: option };
    setAnswers(next);
    setStep(step + 1);
    if (step + 1 >= QUESTIONS.length) {
      track("quiz_complete", { result: recommend(next) });
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <div className="rounded-3xl bg-black text-white p-6 sm:p-9 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-30 bg-[#7c3aed]" aria-hidden="true" />
      <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full blur-3xl opacity-30 bg-[#2563eb]" aria-hidden="true" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60">60-second platform check</p>
          <div className="flex gap-1.5" aria-hidden="true">
            {QUESTIONS.map((_, i) => (
              <span key={i} className={`h-1.5 w-7 rounded-full ${i < step ? "bg-white" : "bg-white/20"}`} />
            ))}
          </div>
        </div>

        <div aria-live="polite">
          {!done ? (
            <>
              <p className="text-[12px] text-white/50 mb-2">Question {step + 1} of {QUESTIONS.length}</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">{QUESTIONS[step].q}</h3>
              <div className="grid gap-3">
                {QUESTIONS[step].options.map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => choose(QUESTIONS[step].id, o)}
                    className="group text-left rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-[15px] hover:bg-white hover:text-black transition-colors flex items-center justify-between gap-3"
                  >
                    {o.label}
                    <FaArrowRight aria-hidden="true" className="text-[12px] opacity-40 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} className="mt-5 text-[13px] text-white/55 hover:text-white underline underline-offset-4">
                  Back
                </button>
              )}
            </>
          ) : (
            <>
              <span className="inline-block text-[11px] font-bold tracking-[0.16em] uppercase rounded-full px-3 py-1 mb-4" style={{ background: result.color }}>
                Our recommendation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">{result.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-xl mb-7">{result.text}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <WhatsAppButton
                  dark
                  location="quiz_result"
                  label="Send me an estimate on WhatsApp"
                  message={`Hi Ivoniz, your platform check recommended: ${result.title}. I'd like an estimate for my website.`}
                />
                <EstimateButton dark location="quiz_result" label="Request a quote" />
              </div>
              <button type="button" onClick={reset} className="mt-5 text-[13px] text-white/55 hover:text-white underline underline-offset-4">
                Start again
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Sticky mobile CTA bar (shows after 30% scroll) ───────────── */
export function StickyMobileCTA({ message = "Hi Ivoniz, I'm comparing a custom website vs WordPress for my business. Can you help me choose?", estimateLabel = "Get Estimate", dark = false }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(max > 0 && window.scrollY / max > 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 p-3 backdrop-blur border-t transition-transform ${dark ? "bg-black/90 border-white/10" : "bg-white/95 border-black/10"} duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="/contact"
          tabIndex={show ? 0 : -1}
          onClick={() => track("generate_lead_click", { cta: "estimate", location: "sticky_mobile" })}
          className={`h-12 rounded-full text-[14px] font-bold flex items-center justify-center ${dark ? "bg-white text-black" : "bg-black text-white"}`}
        >
          {estimateLabel}
        </Link>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          onClick={() => track("whatsapp_click", { location: "sticky_mobile" })}
          className="h-12 rounded-full bg-[#25d366] text-white text-[14px] font-bold flex items-center justify-center gap-2"
        >
          <FaWhatsapp aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ── Site-style pill link (matches the homepage "About us" pill) ──
   Tracks a GA4 event on click. `external` opens in a new tab. */
export function PillLink({ href, label, location, event = "generate_lead_click", external = false, dark = true, solid = false, icon = null }) {
  const base = "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-[15px] font-medium transition-all duration-300";
  const tone = solid
    ? dark ? "bg-white text-black hover:bg-white/85" : "bg-black text-white hover:bg-black/85"
    : dark ? "border border-white/25 text-white hover:bg-white hover:text-black hover:border-white" : "border border-black/20 text-black hover:bg-black hover:text-white hover:border-black";
  const inner = (
    <>
      {icon}
      {label}
      <FiArrowUpRight aria-hidden="true" className="text-[15px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </>
  );
  const onClick = () => track(event, { location });
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={`${base} ${tone}`}>{inner}</a>
  ) : (
    <Link href={href} onClick={onClick} className={`${base} ${tone}`}>{inner}</Link>
  );
}
