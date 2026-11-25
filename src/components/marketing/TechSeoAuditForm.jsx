"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Free speed check / technical SEO audit form (fields from the Technical SEO
 * brief): name, website URL, platform, approx. pages, main problem, phone,
 * agency yes/no. Static site: sends by WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "technical_seo", platform, pages, problem, agency, channel }.
 */

const PLATFORM = ["WordPress", "WooCommerce", "Shopify", "React / Next.js", "Custom", "Not sure"];
const PAGES = ["Under 50", "50–500", "500+"];
const PROBLEM = ["Slow site", "Not indexed", "Lost rankings", "After a redesign", "Other"];
const AGENCY = ["No", "Yes, I'm an agency"];
const EMAIL = "info@ivoniz.com";

export default function TechSeoAuditForm() {
  const [platform, setPlatform] = useState("");
  const [pages, setPages] = useState("");
  const [problem, setProblem] = useState("");
  const [agency, setAgency] = useState("");
  const [f, setF] = useState({ name: "", website: "", phone: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like a free speed and indexing check for my website.`,
      `Website: ${f.website}`,
      platform ? `Platform: ${platform}` : null,
      pages ? `Approx. pages: ${pages}` : null,
      problem ? `Main problem: ${problem}` : null,
      agency === AGENCY[1] ? `I'm an agency (white-label)` : null,
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim() || !f.website.trim()) {
      setError("Please add your name, website and phone / WhatsApp number.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "technical_seo", platform, pages, problem, agency: agency === AGENCY[1], channel, location: "tech_seo_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Technical SEO check – ${f.website}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Input id="tseo-website" label="Website URL" required type="url" value={f.website} onChange={set("website")} placeholder="https://" />
          </div>
          <Input id="tseo-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="tseo-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
        </div>
        <Group label="Platform"><Chips name="Platform" options={PLATFORM} value={platform} onPick={setPlatform} /></Group>
        <Group label="Approx. number of pages"><Chips name="Approx. number of pages" options={PAGES} value={pages} onPick={setPages} /></Group>
        <Group label="Main problem"><Chips name="Main problem" options={PROBLEM} value={problem} onPick={setProblem} /></Group>
        <Group label="Are you an agency?"><Chips name="Are you an agency?" options={AGENCY} value={agency} onPick={setAgency} /></Group>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Free Speed Check
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We reply with your top 3 issues and a quote for a full audit and fix.</p>
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
