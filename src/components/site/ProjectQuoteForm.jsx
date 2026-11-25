"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, OPEN_SANS, GLASS } from "@/components/site/SiteUI";

/*
 * Shared project enquiry form for service pages (website hub, Calicut page,
 * ecommerce). Static site, so no server: the visitor sends the enquiry by
 * WhatsApp (primary) or email. Each page passes its own project types and
 * places, so the questions match what that page sells.
 * GA4: generate_lead { lead_type, channel, project, place, timing, location }.
 */

const TIMING = ["Within a month", "1–3 months", "Just comparing options"];
const EMAIL = "info@ivoniz.com";

export default function ProjectQuoteForm({
  types,                 // [{ id, label }]
  places,                // ["Calicut / Kozhikode", ...]
  subject = "website",   // used in the message: "I'd like a quote for a <subject>"
  leadType = "website_quote",
  location,              // GA4 location, e.g. "calicut_quote_form"
  idPrefix = "pq",
  messageHint = "Tell us about your business and what the website needs to do.",
  question = "What do you need?",
}) {
  const [type, setType] = useState(types[0].id);
  const [place, setPlace] = useState(places[0]);
  const [timing, setTiming] = useState("");
  const [f, setF] = useState({ name: "", phone: "", email: "", url: "", message: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const typeLabel = types.find((t) => t.id === type)?.label;

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a quote for a ${subject}.`,
      `Project: ${typeLabel}`,
      `Business location: ${place}`,
      timing ? `Timing: ${timing}` : null,
      f.url ? `Current website: ${f.url}` : null,
      `Name: ${f.name}`,
      f.phone ? `Phone / WhatsApp: ${f.phone}` : null,
      f.email ? `Email: ${f.email}` : null,
      f.message ? `Details: ${f.message}` : null,
    ].filter(Boolean).join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || (!f.phone.trim() && !f.email.trim())) {
      setError("Please add your name and a phone number or email so we can reply.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: leadType, channel, project: type, place, timing, location });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      const subj = `${typeLabel} enquiry – ${f.name}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Field label={question}><Choice name="Project" options={types} value={type} onChange={setType} /></Field>
        <Field label="Where is your business?"><Choice name="Business location" options={places} value={place} onChange={setPlace} /></Field>
        <Field label="When do you want to start? (optional)"><Choice name="Timing" options={TIMING} value={timing} onChange={setTiming} /></Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input id={`${idPrefix}-name`} label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id={`${idPrefix}-phone`} label="Phone / WhatsApp (with country code)" type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 or +971 …" />
          <Input id={`${idPrefix}-email`} label="Email" type="email" value={f.email} onChange={set("email")} autoComplete="email" />
          <Input id={`${idPrefix}-url`} label="Current website (optional)" type="url" value={f.url} onChange={set("url")} placeholder="https://" />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-message`} className="block text-[13px] text-white/55 mb-2">Details (optional)</label>
          <textarea
            id={`${idPrefix}-message`}
            rows={3}
            value={f.message}
            onChange={set("message")}
            placeholder={messageHint}
            className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Send on WhatsApp
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">
          Your details go straight to our team. We reply with questions about scope, then a fixed written quote.
        </p>
      </div>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <fieldset>
      <legend className="text-[13px] text-white/55 mb-3">{label}</legend>
      {children}
    </fieldset>
  );
}

function Choice({ options, value, onChange, name }) {
  return (
    <div role="radiogroup" aria-label={name} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const id = typeof o === "string" ? o : o.id;
        const label = typeof o === "string" ? o : o.label;
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(active && name.startsWith("Timing") ? "" : id)}
            className={`min-h-11 px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
              active ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function Input({ id, label, required, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] text-white/55 mb-2">
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
