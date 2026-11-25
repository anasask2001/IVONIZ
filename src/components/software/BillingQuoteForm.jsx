"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Short billing-software lead form (brief: price- and time-sensitive buyer):
 * name, shop name, phone, town, business type, number of billing counters.
 * Static site: sends by WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "billing", business, counters, town, channel }.
 */

const BUSINESS = ["Retail", "Supermarket", "Restaurant", "Jewellery", "Medical", "Other"];
const COUNTERS = ["1", "2–3", "4+", "Multiple branches"];
const EMAIL = "info@ivoniz.com";

export default function BillingQuoteForm() {
  const [business, setBusiness] = useState("");
  const [counters, setCounters] = useState("");
  const [f, setF] = useState({ name: "", shop: "", phone: "", town: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I need billing software for my ${business ? business.toLowerCase() + " " : ""}shop${f.town ? ` in ${f.town}` : ""}. Please share a demo and price.`,
      f.shop ? `Shop: ${f.shop}` : null,
      counters ? `Billing counters: ${counters}` : null,
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
    track("generate_lead", { lead_type: "billing", business, counters, town: f.town, channel, location: "billing_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Billing software enquiry – ${f.shop || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Group label="Business type"><Chips name="Business type" options={BUSINESS} value={business} onPick={setBusiness} /></Group>
        <Group label="Number of billing counters"><Chips name="Number of billing counters" options={COUNTERS} value={counters} onPick={setCounters} /></Group>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="bill-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="bill-shop" label="Shop name" value={f.shop} onChange={set("shop")} autoComplete="organization" />
          <Input id="bill-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
          <Input id="bill-town" label="Town" value={f.town} onChange={set("town")} autoComplete="address-level2" placeholder="Kozhikode, Kochi …" />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Book a Free Demo
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We reply with a demo time and the price for your shop.</p>
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
