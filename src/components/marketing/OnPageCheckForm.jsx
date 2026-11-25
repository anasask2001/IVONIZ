"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free on-page check of 3 pages (On-Page SEO brief CTA): website, up to 3 page
 * URLs, platform, main goal, name, phone. Static site: sends by WhatsApp
 * (primary) or email.
 * GA4: generate_lead { lead_type: "on_page_seo", platform, goal, pages, channel }.
 */

const PLATFORM = ["WordPress", "WooCommerce", "Shopify", "Custom", "Not sure"];
const GOAL = ["More enquiries", "Rank for new keywords", "Fix thin pages", "New website setup"];
const EMAIL = "info@ivoniz.com";

export default function OnPageCheckForm() {
  const [platform, setPlatform] = useState("");
  const [goal, setGoal] = useState("");
  const [f, setF] = useState({ name: "", website: "", phone: "", p1: "", p2: "", p3: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const pages = [f.p1, f.p2, f.p3].map((p) => p.trim()).filter(Boolean);

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free on-page SEO check of 3 pages.`,
      `Website: ${f.website}`,
      pages.length ? `Pages to check:\n${pages.map((p, i) => `${i + 1}. ${p}`).join("\n")}` : `Pages to check: please pick my 3 key pages`,
      platform ? `Platform: ${platform}` : null,
      goal ? `Main goal: ${goal}` : null,
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim() || !f.website.trim()) {
      setError("Please add your name, website and phone / WhatsApp number.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "on_page_seo", platform, goal, pages: pages.length, channel, location: "on_page_check_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free on-page SEO check – ${f.website}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Input id="op-website" label="Website URL" required type="url" value={f.website} onChange={set("website")} placeholder="https://" />
          </div>
          <Input id="op-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="op-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
        </div>
        <fieldset>
          <legend className="text-[13px] text-white/60 mb-3">3 pages to check (optional, or we&apos;ll pick your key pages)</legend>
          <div className="grid gap-3">
            {["p1", "p2", "p3"].map((k, i) => (
              <Input key={k} id={`op-${k}`} label={`Page ${i + 1}`} srOnlyLabel type="url" value={f[k]} onChange={set(k)} placeholder={`Page ${i + 1} link, e.g. yoursite.com/services`} />
            ))}
          </div>
        </fieldset>
        <Group label="Platform"><Chips name="Platform" options={PLATFORM} value={platform} onPick={setPlatform} /></Group>
        <Group label="Main goal"><Chips name="Main goal" options={GOAL} value={goal} onPick={setGoal} /></Group>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Free On-Page Check
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We review 3 key pages and send a short list of fixes for titles, headings and content.</p>
      </div>
    </form>
  );
}
function Group({ label, children }) {
  return (
    <fieldset>
      <legend className="text-[13px] text-white/60 mb-3">{label}</legend>
      {children}
    </fieldset>
  );
}

function Chips({ options, value, onPick, name }) {
  return (
    <div role="radiogroup" aria-label={name} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = value === o;
        return (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onPick(o)}
            className={`px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
              on ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Input({ id, label, required, srOnlyLabel, ...props }) {
  return (
    <div>
      <label htmlFor={id} className={srOnlyLabel ? "sr-only" : "block text-[13px] text-white/60 mb-2"}>
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        required={required}
        {...props}
        className="w-full h-12 rounded-full bg-white/5 border border-white/15 px-5 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
        style={{ fontFamily: OPEN_SANS }}
      />
    </div>
  );
}
