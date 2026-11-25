"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free local SEO audit form (fields from the Local SEO brief): name, business
 * name, Google Maps link or address, phone, town, business type, branches.
 * Static site: sends by WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "local_seo", business, branches, town, channel }.
 */

const BUSINESS = ["Clinic / dentist", "Restaurant / hotel", "Retail shop", "School / coaching", "Builder / interiors", "Salon / gym", "Service business", "Other"];
const BRANCHES = ["1", "2–3", "4 or more"];
const EMAIL = "info@ivoniz.com";

export default function LocalSeoAuditForm() {
  const [business, setBusiness] = useState("");
  const [branches, setBranches] = useState("");
  const [f, setF] = useState({ name: "", company: "", maps: "", phone: "", town: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free local SEO audit. Please check how we rank on Google Maps.`,
      f.company ? `Business name: ${f.company}` : null,
      f.maps ? `Google Maps link / address: ${f.maps}` : null,
      f.town ? `Town: ${f.town}` : null,
      business ? `Business type: ${business}` : null,
      branches ? `Branches: ${branches}` : null,
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
    track("generate_lead", { lead_type: "local_seo", business, branches, town: f.town, channel, location: "local_seo_audit_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free local SEO audit – ${f.company || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Group label="Business type"><Chips name="Business type" options={BUSINESS} value={business} onPick={setBusiness} /></Group>
        <Group label="Number of branches"><Chips name="Number of branches" options={BRANCHES} value={branches} onPick={setBranches} /></Group>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="lseo-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="lseo-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
          <Input id="lseo-company" label="Business name" value={f.company} onChange={set("company")} autoComplete="organization" />
          <Input id="lseo-town" label="Town" value={f.town} onChange={set("town")} autoComplete="address-level2" placeholder="Kozhikode, Malappuram …" />
          <div className="sm:col-span-2">
            <Input id="lseo-maps" label="Google Maps link or address" value={f.maps} onChange={set("maps")} placeholder="Paste your Maps link or type the address" />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Free Local SEO Audit
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We compare you with your top 3 local competitors and send a short fix list.</p>
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
