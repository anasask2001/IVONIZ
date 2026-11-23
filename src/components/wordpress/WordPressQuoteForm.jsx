"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, OPEN_SANS, GLASS } from "@/components/site/SiteUI";

/*
 * WordPress lead form (fields from the SEO brief). Static site, so there is no
 * server: the visitor sends the completed enquiry by WhatsApp (primary) or
 * email. Hero CTAs link to #quote-website / #quote-hire to pre-select the need.
 * GA4: generate_lead { lead_type: "website_quote" | "hire_developer" | ..., channel }.
 */

const NEEDS = [
  { id: "new", label: "New website", lead: "website_quote" },
  { id: "redesign", label: "Redesign", lead: "website_quote" },
  { id: "hire", label: "Hire a developer", lead: "hire_developer" },
  { id: "maintenance", label: "Maintenance", lead: "maintenance" },
];
const PAGES = ["1–10", "10–30", "30+"];
const COUNTRIES = ["India", "UAE", "Saudi Arabia", "Qatar", "Oman", "Other"];
const BUDGETS = {
  INR: ["Under ₹45,000", "₹45,000 – ₹1,20,000", "₹1,20,000 – ₹3,00,000", "₹3,00,000+", "Not sure yet"],
  AED: ["Under AED 6,000", "AED 6,000 – 15,000", "AED 15,000+", "Not sure yet"],
};
const EMAIL = "info@ivoniz.com";

const NEED_FROM_HASH = { "#quote-hire": "hire", "#quote-website": "new", "#quote-redesign": "redesign", "#quote-maintenance": "maintenance" };

export default function WordPressQuoteForm() {
  const [need, setNeed] = useState("new");
  const [pages, setPages] = useState(PAGES[0]);
  const [country, setCountry] = useState("India");
  const [budget, setBudget] = useState("");
  const [f, setF] = useState({ name: "", email: "", phone: "", url: "", message: "" });
  const [error, setError] = useState("");

  /* Pre-select the need from the CTA that brought the visitor here. */
  useEffect(() => {
    const apply = () => {
      const n = NEED_FROM_HASH[window.location.hash];
      if (n) setNeed(n);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const currency = country === "India" ? "INR" : "AED";
  const needObj = NEEDS.find((n) => n.id === need);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a WordPress ${need === "hire" ? "developer" : "website quote"}.`,
      `Need: ${needObj.label}`,
      need !== "hire" && need !== "maintenance" ? `Pages: ${pages}` : null,
      `Country: ${country}`,
      budget ? `Budget: ${budget}` : null,
      f.url ? `Current website: ${f.url}` : null,
      `Name: ${f.name}`,
      f.phone ? `Phone / WhatsApp: ${f.phone}` : null,
      f.email ? `Email: ${f.email}` : null,
      f.message ? `Message: ${f.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || (!f.phone.trim() && !f.email.trim())) {
      setError("Please add your name and a phone number or email so we can reply.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: needObj.lead, channel, need, country, pages, location: "wordpress_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      const subject = `WordPress ${need === "hire" ? "developer" : "website"} enquiry – ${f.name}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Field label="What do you need?">
          <Choice name="Need" options={NEEDS} value={need} onChange={setNeed} />
        </Field>

        {need !== "hire" && need !== "maintenance" && (
          <Field label="Approx. number of pages">
            <Choice name="Pages" options={PAGES} value={pages} onChange={setPages} />
          </Field>
        )}

        <Field label="Where is your business?">
          <Choice name="Country" options={COUNTRIES} value={country} onChange={(c) => { setCountry(c); setBudget(""); }} />
        </Field>

        <Field label={`Budget range (${currency})`}>
          <Choice name="Budget" options={BUDGETS[currency]} value={budget} onChange={setBudget} />
        </Field>

        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="wp-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="wp-phone" label="Phone / WhatsApp (with country code)" type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 or +971 …" />
          <Input id="wp-email" label="Email" type="email" value={f.email} onChange={set("email")} autoComplete="email" />
          <Input id="wp-url" label="Current website (optional)" type="url" value={f.url} onChange={set("url")} placeholder="https://" />
        </div>
        <div>
          <label htmlFor="wp-message" className="block text-[13px] text-white/55 mb-2">Message (optional)</label>
          <textarea
            id="wp-message"
            rows={3}
            value={f.message}
            onChange={set("message")}
            placeholder={need === "hire" ? "What work do you need help with, and how many hours a month?" : "Tell us about your business and the pages you need."}
            className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors"
          >
            <FaWhatsapp aria-hidden="true" /> {need === "hire" ? "Send on WhatsApp: Hire a Developer" : "Send on WhatsApp: Get My Quote"}
          </button>
          <button
            type="button"
            onClick={send("email")}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors"
          >
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">
          Your details go straight to our team on WhatsApp or email. We reply with a fixed quote and timeline.
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
            onClick={() => onChange(id)}
            className={`px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
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
