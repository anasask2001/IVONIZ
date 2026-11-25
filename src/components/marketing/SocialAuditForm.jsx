"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free social media audit form (SMM brief CTA: "we review your Instagram /
 * Facebook and 2 competitors"): page link, competitors, business type, market,
 * name, WhatsApp. Static site: WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "social_media", business, market, channel }.
 */

const BUSINESS = ["Restaurant / café", "Clinic / hospital", "Real estate", "Retail / fashion", "Jewellery", "Education", "Hotel / travel", "Ecommerce", "Other"];
const MARKET = ["Kerala", "India", "UAE", "Other GCC"];
const EMAIL = "info@ivoniz.com";

/* instagram: Instagram-only wording (used on /instagram-marketing-services) */
export default function SocialAuditForm({ instagram = false }) {
  const kind = instagram ? "Instagram" : "social media";
  const [business, setBusiness] = useState("");
  const [market, setMarket] = useState("");
  const [f, setF] = useState({ name: "", page: "", phone: "", competitors: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free ${kind} audit.`,
      `My page: ${f.page}`,
      f.competitors.trim() ? `Competitors: ${f.competitors.trim()}` : `Competitors: please pick 2`,
      business ? `Business type: ${business}` : null,
      market ? `Main market: ${market}` : null,
      `Name: ${f.name}`,
      `WhatsApp: ${f.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim() || !f.page.trim()) {
      setError(instagram ? "Please add your name, your Instagram handle and your WhatsApp number." : "Please add your name, your Instagram or Facebook page and your WhatsApp number.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: instagram ? "instagram" : "social_media", business, market, channel, location: "social_audit_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free ${kind} audit – ${f.page}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Input id="sm-page" label={instagram ? "Your Instagram handle" : "Your Instagram or Facebook page"} required value={f.page} onChange={set("page")} placeholder={instagram ? "@yourbrand" : "@yourbrand or page link"} />
          </div>
          <div className="sm:col-span-2">
            <Input id="sm-comp" label="2 competitors (optional)" value={f.competitors} onChange={set("competitors")} placeholder="@competitor1, @competitor2" />
          </div>
          <Input id="sm-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="sm-phone" label="WhatsApp number" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 / +971 …" />
        </div>
        <Group label="Business type"><Chips name="Business type" options={BUSINESS} value={business} onPick={setBusiness} /></Group>
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
        <p className="mt-4 text-[13px] text-white/55">{instagram ? "We review your profile and content against two competitors and share what to fix first." : "We review your page against two competitors and share what to fix first."}</p>
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
