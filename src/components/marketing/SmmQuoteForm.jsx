"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Social media management quote form (SMM management brief CTA: platforms,
 * posts per month, ads yes/no): platforms (multi-select), posts, ads, business,
 * market, name, WhatsApp. Static site: WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "smm_management", platforms, posts, ads, market, channel }.
 */

const PLATFORMS = ["Instagram", "Facebook", "LinkedIn", "YouTube Shorts", "Google Business Profile"];
const POSTS = ["8–12 a month", "12–16 a month", "20+ a month", "Not sure"];
const ADS = ["Yes", "No", "Not sure"];
const MARKET = ["Kerala", "India", "UAE", "Other GCC"];
const EMAIL = "info@ivoniz.com";

export default function SmmQuoteForm() {
  const [platforms, setPlatforms] = useState([]);
  const [posts, setPosts] = useState("");
  const [ads, setAds] = useState("");
  const [market, setMarket] = useState("");
  const [f, setF] = useState({ name: "", business: "", phone: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const togglePlatform = (p) => setPlatforms((list) => (list.includes(p) ? list.filter((x) => x !== p) : [...list, p]));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a quote for social media management.`,
      f.business.trim() ? `Business: ${f.business.trim()}` : null,
      platforms.length ? `Platforms: ${platforms.join(", ")}` : null,
      posts ? `Posts: ${posts}` : null,
      ads ? `Ads management: ${ads}` : null,
      market ? `Main market: ${market}` : null,
      `Name: ${f.name}`,
      `WhatsApp: ${f.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      setError("Please add your name and WhatsApp number.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "smm_management", platforms: platforms.join("|"), posts, ads, market, channel, location: "smm_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Social media management quote – ${f.business || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <fieldset>
          <legend className="text-[13px] text-white/60 mb-3">Platforms (pick all that apply)</legend>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => {
              const on = platforms.includes(p);
              return (
                <button
                  key={p}
                  type="button"
                  aria-pressed={on}
                  onClick={() => togglePlatform(p)}
                  className={`min-h-11 px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${on ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"}`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </fieldset>
        <Group label="Posts per month"><Chips name="Posts per month" options={POSTS} value={posts} onPick={setPosts} /></Group>
        <Group label="Do you need ads managed too?"><Chips name="Ads management" options={ADS} value={ads} onPick={setAds} /></Group>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Input id="smq-business" label="Business name or page" value={f.business} onChange={set("business")} placeholder="@yourbrand or business name" />
          </div>
          <Input id="smq-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="smq-phone" label="WhatsApp number" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 / +971 …" />
        </div>
        <Group label="Main market"><Chips name="Main market" options={MARKET} value={market} onPick={setMarket} /></Group>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Quote
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We reply with a clear monthly quote for your platforms and posting plan.</p>
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
