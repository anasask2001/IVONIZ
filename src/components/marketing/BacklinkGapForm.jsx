"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free backlink gap report form (Off-Page SEO brief CTA): website, up to 3
 * competitors, market, name, phone, agency yes/no. Static site: sends by
 * WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "off_page_seo", market, competitors, agency, channel }.
 */

const MARKET = ["Kerala", "India", "UAE", "Other GCC"];
const AGENCY = ["No", "Yes, white-label"];
const EMAIL = "info@ivoniz.com";

export default function BacklinkGapForm() {
  const [market, setMarket] = useState("");
  const [agency, setAgency] = useState("");
  const [f, setF] = useState({ name: "", website: "", phone: "", c1: "", c2: "", c3: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const competitors = [f.c1, f.c2, f.c3].map((c) => c.trim()).filter(Boolean);

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free backlink gap report.`,
      `Website: ${f.website}`,
      competitors.length ? `Competitors:\n${competitors.map((c, i) => `${i + 1}. ${c}`).join("\n")}` : `Competitors: please find my top 3`,
      market ? `Main market: ${market}` : null,
      agency === AGENCY[1] ? `I'm an agency (white-label)` : null,
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
    track("generate_lead", { lead_type: "off_page_seo", market, competitors: competitors.length, agency: agency === AGENCY[1], channel, location: "backlink_gap_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free backlink gap report – ${f.website}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Input id="bl-website" label="Your website" required type="url" value={f.website} onChange={set("website")} placeholder="https://" />
          </div>
          <Input id="bl-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="bl-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 / +971 …" />
        </div>
        <fieldset>
          <legend className="text-[13px] text-white/60 mb-3">Up to 3 competitors (optional, or we&apos;ll find them)</legend>
          <div className="grid gap-3">
            {["c1", "c2", "c3"].map((k, i) => (
              <Input key={k} id={`bl-${k}`} label={`Competitor ${i + 1}`} srOnlyLabel value={f[k]} onChange={set(k)} placeholder={`Competitor ${i + 1} website`} />
            ))}
          </div>
        </fieldset>
        <Group label="Main market"><Chips name="Main market" options={MARKET} value={market} onPick={setMarket} /></Group>
        <Group label="Are you an agency?"><Chips name="Are you an agency?" options={AGENCY} value={agency} onPick={setAgency} /></Group>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Free Report
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We show the links your competitors have that you don&apos;t, and where to start.</p>
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
            className={`min-h-11 px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
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
