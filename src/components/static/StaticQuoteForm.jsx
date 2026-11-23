"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Short static-website lead form (budget buyers: every extra field loses leads).
 * Fields from the SEO brief: name, WhatsApp, business type, pages, message.
 * Sends by WhatsApp (primary) or email; static site, so no server.
 * Package cards link to #quote-starter / #quote-business / #quote-premium to
 * pre-select the page count. GA4: generate_lead { lead_type: "static_website", package, channel }.
 */

const PAGES = [
  { id: "starter", label: "Up to 5 pages" },
  { id: "business", label: "6–10 pages" },
  { id: "premium", label: "10+ pages" },
];
const BUSINESS = ["Clinic / doctor", "Consultant / professional", "Shop / restaurant", "Startup", "Portfolio", "Other"];
const EMAIL = "info@ivoniz.com";

export default function StaticQuoteForm() {
  const [pages, setPages] = useState("starter");
  const [business, setBusiness] = useState("");
  const [f, setF] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#quote-(starter|business|premium)$/);
      if (m) setPages(m[1]);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const pagesLabel = PAGES.find((p) => p.id === pages).label;

  const summary = () =>
    [
      `Hi Ivoniz, I need a static website (${pagesLabel.toLowerCase()})${business ? ` for my ${business.toLowerCase()} business` : ""}.`,
      `Name: ${f.name}`,
      f.phone ? `WhatsApp / phone: ${f.phone}` : null,
      f.message ? `Message: ${f.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      setError("Please add your name and WhatsApp number so we can send your quote.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "static_website", package: pages, business, channel, location: "static_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Static website enquiry – ${f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <fieldset>
          <legend className="text-[13px] text-white/55 mb-3">Number of pages</legend>
          <Choice name="Pages" options={PAGES} value={pages} onChange={setPages} />
        </fieldset>
        <fieldset>
          <legend className="text-[13px] text-white/55 mb-3">Business type</legend>
          <Choice name="Business type" options={BUSINESS} value={business} onChange={setBusiness} />
        </fieldset>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="st-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="st-phone" label="WhatsApp number" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
        </div>
        <div>
          <label htmlFor="st-message" className="block text-[13px] text-white/55 mb-2">Message (optional)</label>
          <textarea
            id="st-message"
            rows={3}
            value={f.message}
            onChange={set("message")}
            placeholder="Your business name, the pages you need, any reference sites."
            className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Static Website Quote
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We reply on WhatsApp with a fixed price and delivery date.</p>
      </div>
    </form>
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
