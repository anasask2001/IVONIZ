"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { track } from "@/components/comparison/Interactive";
import { waLink, OPEN_SANS, GLASS } from "@/components/site/SiteUI";

/*
 * Native vs cross-platform decision tool (SEO brief: turns the large
 * informational "native app development" audience into leads).
 * 4 questions → simple scoring → recommends native, Flutter or a mix,
 * links to the most specific page, then sends the answers to WhatsApp.
 * GA4: decision_complete { recommendation, ... }.
 */

const Q = [
  { id: "platforms", label: "1. Do you need both iPhone and Android?", options: [
    { id: "both", label: "Yes, both" }, { id: "one", label: "One platform is enough" }, { id: "unsure", label: "Not sure yet" },
  ] },
  { id: "hardware", label: "2. Does the app rely on hardware or OS features (Bluetooth, NFC, AR, health data, heavy camera use)?", options: [
    { id: "heavy", label: "Yes, a lot" }, { id: "some", label: "A little" }, { id: "none", label: "No" },
  ] },
  { id: "budget", label: "3. What is your budget like?", options: [
    { id: "tight", label: "Tight" }, { id: "moderate", label: "Moderate" }, { id: "flexible", label: "Flexible" },
  ] },
  { id: "launch", label: "4. When do you want to launch?", options: [
    { id: "asap", label: "Within 3 months" }, { id: "mid", label: "3–6 months" }, { id: "later", label: "No rush" },
  ] },
];

const RESULTS = {
  native: {
    title: "Native is the right fit",
    text: "Your app depends on device features and the best possible performance, and your budget and timeline allow separate Swift and Kotlin apps built properly.",
    links: [{ href: "/mobile-app-development/ios-app-development", label: "Native iOS (Swift)" }, { href: "/mobile-app-development/android-app-development", label: "Native Android (Kotlin)" }],
  },
  flutter: {
    title: "Cross-platform (Flutter) is the better fit",
    text: "You need iPhone and Android on a sensible budget and timeline, and your features don't need deep hardware access. One Flutter codebase gets you to both stores faster.",
    links: [{ href: "/mobile-app-development/flutter-app-development", label: "Flutter app development" }],
  },
  mix: {
    title: "A mix: Flutter with native modules",
    text: "Build the app once in Flutter for both platforms, and write the hardware-heavy parts as small native Swift and Kotlin modules. You get most of native's power at closer to cross-platform cost.",
    links: [{ href: "/mobile-app-development/flutter-app-development", label: "Flutter app development" }, { href: "/mobile-app-development/native-app-development#services", label: "Native modules" }],
  },
};

function recommend(a) {
  let native = 0;
  let flutter = 0;
  if (a.hardware === "heavy") native += 3; else if (a.hardware === "some") native += 1; else flutter += 2;
  if (a.platforms === "both") flutter += 2; else if (a.platforms === "one") native += 2;
  if (a.budget === "tight") flutter += 3; else if (a.budget === "moderate") flutter += 1; else native += 2;
  if (a.launch === "asap") flutter += 2; else if (a.launch === "later") native += 1;
  if (a.hardware === "heavy" && a.platforms !== "one" && a.budget !== "flexible") return "mix";
  if (Math.abs(native - flutter) <= 1 && a.hardware !== "none") return "mix";
  return native > flutter ? "native" : "flutter";
}

export default function PlatformDecisionTool() {
  const [a, setA] = useState({ platforms: "both", hardware: "some", budget: "moderate", launch: "mid" });
  const [market, setMarket] = useState("India");
  const rec = recommend(a);
  const r = RESULTS[rec];

  const label = (qid) => Q.find((q) => q.id === qid).options.find((o) => o.id === a[qid]).label;
  const message =
    `Hi Ivoniz, I need help choosing native or cross-platform for my app in ${market}.\n` +
    `Both platforms: ${label("platforms")}\nHardware features: ${label("hardware")}\nBudget: ${label("budget")}\nLaunch: ${label("launch")}\n` +
    `Your tool suggested: ${r.title}. Please send me an estimate.`;

  return (
    <div className="p-6 sm:p-9" style={GLASS}>
      <div className="grid gap-7">
        {Q.map((q) => (
          <fieldset key={q.id}>
            <legend className="text-[13px] text-white/60 mb-3">{q.label}</legend>
            <div role="radiogroup" aria-label={q.label} className="flex flex-wrap gap-2">
              {q.options.map((o) => {
                const active = a[q.id] === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setA((s) => ({ ...s, [q.id]: o.id }))}
                    className={`min-h-11 px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
                      active ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-9 pt-8 border-t border-white/10" aria-live="polite">
        <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">Our recommendation</p>
        <p className="mt-2 text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          {r.title}
        </p>
        <p className="mt-3 text-[15px] text-white/65 leading-relaxed max-w-[640px]">{r.text}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {r.links.map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 text-[14px] text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
              {l.label} <FiArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
          <div role="radiogroup" aria-label="Where is your business?" className="flex gap-2">
            {["India", "UAE / GCC"].map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={market === m}
                onClick={() => setMarket(m)}
                className={`min-h-11 px-4 py-2 rounded-full text-[13px] border transition-colors ${market === m ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:text-white"}`}
              >
                {m}
              </button>
            ))}
          </div>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("decision_complete", { location: "native_decision_tool", recommendation: rec, ...a, market })}
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors"
          >
            <FaWhatsapp aria-hidden="true" /> Send me an estimate for this
            <FiArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
