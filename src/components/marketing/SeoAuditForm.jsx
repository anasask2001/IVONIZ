"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free SEO audit form (fields from the SEO brief): name, website URL, main
 * competitor (optional), phone, city, business type, main goal.
 * Static site: sends by WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "seo", business, goal, channel }.
 */

const BUSINESS = ["Clinic / hospital", "School / coaching", "Real estate", "Retail / jewellery", "Hotel / restaurant", "Ecommerce", "B2B / manufacturer", "Other"];
const GOAL = ["Calls", "Walk-ins", "Online sales", "Enquiries"];
const EMAIL = "info@ivoniz.com";

export default function SeoAuditForm() {
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [f, setF] = useState({ name: "", website: "", competitor: "", phone: "", city: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free SEO audit for my website.`,
      f.website ? `Website: ${f.website}` : null,
      f.competitor ? `Main competitor: ${f.competitor}` : null,
      f.city ? `City: ${f.city}` : null,
      business ? `Business type: ${business}` : null,
      goal ? `Main goal: ${goal}` : null,
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      setError("Please add your name and phone / WhatsApp number.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "seo", business, goal, city: f.city, channel, location: "seo_audit_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free SEO audit – ${f.website || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Group label="Business type"><Chips name="Business type" options={BUSINESS} value={business} onPick={setBusiness} /></Group>
        <Group label="Main goal"><Chips name="Main goal" options={GOAL} value={goal} onPick={setGoal} /></Group>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="seo-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="seo-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
          <Input id="seo-website" label="Website URL" type="url" value={f.website} onChange={set("website")} placeholder="https://" />
          <Input id="seo-competitor" label="Main competitor (optional)" value={f.competitor} onChange={set("competitor")} placeholder="Their website or name" />
          <Input id="seo-city" label="City" value={f.city} onChange={set("city")} autoComplete="address-level2" placeholder="Kozhikode, Kochi …" />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Free SEO Audit
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We show where you rank, what&apos;s holding you back and how many more leads SEO could bring.</p>
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

function Input({ id, label, required, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] text-white/60 mb-2">
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
