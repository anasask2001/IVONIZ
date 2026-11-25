"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free ecommerce SEO audit form (Ecommerce SEO brief CTA: "10 product and
 * category pages + top 3 competitors"): store URL, platform, store size,
 * market, competitors, name, phone. Static site: WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "ecommerce_seo", platform, size, market, channel }.
 */

const PLATFORM = ["Shopify", "WooCommerce", "Custom", "Not sure"];
const SIZE = ["Under 100 products", "100–1,000", "1,000+"];
const MARKET = ["Kerala", "India", "UAE", "Other GCC"];
const EMAIL = "info@ivoniz.com";

export default function EcomSeoAuditForm() {
  const [platform, setPlatform] = useState("");
  const [size, setSize] = useState("");
  const [market, setMarket] = useState("");
  const [f, setF] = useState({ name: "", store: "", phone: "", competitors: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free ecommerce SEO audit for my store.`,
      `Store: ${f.store}`,
      platform ? `Platform: ${platform}` : null,
      size ? `Store size: ${size}` : null,
      market ? `Main market: ${market}` : null,
      f.competitors.trim() ? `Top competitors: ${f.competitors.trim()}` : null,
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim() || !f.store.trim()) {
      setError("Please add your name, store link and phone / WhatsApp number.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "ecommerce_seo", platform, size, market, channel, location: "ecommerce_seo_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free ecommerce SEO audit – ${f.store}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Input id="es-store" label="Store link" required type="url" value={f.store} onChange={set("store")} placeholder="https://yourstore.com" />
          </div>
          <Input id="es-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="es-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 / +971 …" />
          <div className="sm:col-span-2">
            <Input id="es-competitors" label="Top competitors (optional)" value={f.competitors} onChange={set("competitors")} placeholder="Up to 3 store links, or we'll find them" />
          </div>
        </div>
        <Group label="Platform"><Chips name="Platform" options={PLATFORM} value={platform} onPick={setPlatform} /></Group>
        <Group label="Store size"><Chips name="Store size" options={SIZE} value={size} onPick={setSize} /></Group>
        <Group label="Main market"><Chips name="Main market" options={MARKET} value={market} onPick={setMarket} /></Group>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Free Audit
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We check 10 product and category pages against your top 3 competitors and send a short fix list.</p>
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
