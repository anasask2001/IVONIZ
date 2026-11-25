"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free marketing audit form (fields from the SEO brief): name, business name,
 * website / Instagram link, phone, city, industry, monthly budget, main goal.
 * Static site: sends by WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "digital_marketing", industry, budget, goal, channel }.
 */

const INDUSTRY = ["Clinic / hospital", "School / coaching", "Real estate", "Retail / jewellery", "Restaurant / hotel", "Ecommerce", "B2B", "Other"];
const BUDGET = ["Under ₹15,000", "₹15,000–40,000", "₹40,000–1 lakh", "₹1 lakh+", "Not sure"];
const GOAL = ["Calls", "Walk-ins", "Online sales", "Admissions", "Brand awareness"];
const EMAIL = "info@ivoniz.com";

export default function MarketingAuditForm() {
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [goal, setGoal] = useState("");
  const [f, setF] = useState({ name: "", business: "", link: "", phone: "", city: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free digital marketing audit${f.business ? ` for ${f.business}` : ""}.`,
      f.link ? `Website / Instagram: ${f.link}` : null,
      f.city ? `City: ${f.city}` : null,
      industry ? `Industry: ${industry}` : null,
      budget ? `Monthly budget: ${budget}` : null,
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
    track("generate_lead", { lead_type: "digital_marketing", industry, budget, goal, city: f.city, channel, location: "marketing_audit_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free marketing audit – ${f.business || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Group label="Industry"><Chips name="Industry" options={INDUSTRY} value={industry} onPick={setIndustry} /></Group>
        <Group label="Main goal"><Chips name="Main goal" options={GOAL} value={goal} onPick={setGoal} /></Group>
        <Group label="Monthly marketing budget"><Chips name="Monthly marketing budget" options={BUDGET} value={budget} onPick={setBudget} /></Group>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="dm-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="dm-business" label="Business name" value={f.business} onChange={set("business")} autoComplete="organization" />
          <Input id="dm-link" label="Website or Instagram link" value={f.link} onChange={set("link")} placeholder="https:// or @handle" />
          <Input id="dm-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
          <Input id="dm-city" label="City" value={f.city} onChange={set("city")} autoComplete="address-level2" placeholder="Kozhikode, Kochi …" />
        </div>
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
        <p className="mt-4 text-[13px] text-white/55">We review your website, Google profile, social pages and competitors, then send a short plan.</p>
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
