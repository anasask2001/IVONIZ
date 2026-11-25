"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * CRM lead form (fields from the SEO brief): name, company, phone, city,
 * industry, number of sales users, lead sources, current tool, message.
 * Static site: sends by WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "crm", industry, users, sources, tool, channel }.
 */

const INDUSTRIES = ["Real estate", "Education / coaching", "Healthcare", "Travel", "Automobile", "B2B / distribution", "Other"];
const USERS = ["1–5", "6–20", "21–50", "50+"];
const SOURCES = ["Website", "Facebook / Instagram", "IndiaMart / JustDial", "WhatsApp", "Walk-in", "Other"];
const TOOLS = ["Excel / notebook", "Zoho", "Other CRM", "Nothing yet"];
const EMAIL = "info@ivoniz.com";

export default function CrmQuoteForm() {
  const [industry, setIndustry] = useState("");
  const [users, setUsers] = useState("");
  const [sources, setSources] = useState([]);
  const [tool, setTool] = useState("");
  const [f, setF] = useState({ name: "", company: "", phone: "", city: "", message: "" });
  const [error, setError] = useState("");

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggle = (setter) => (x) => setter((l) => (l.includes(x) ? l.filter((y) => y !== x) : [...l, x]));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like to book a free CRM demo${f.company ? ` for ${f.company}` : ""}.`,
      industry ? `Industry: ${industry}` : null,
      f.city ? `City: ${f.city}` : null,
      users ? `Sales users: ${users}` : null,
      sources.length ? `Lead sources: ${sources.join(", ")}` : null,
      tool ? `Current tool: ${tool}` : null,
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
      f.message ? `Message: ${f.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      setError("Please add your name and phone / WhatsApp number so we can arrange the demo.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "crm", industry, users, sources: sources.join("|"), tool, city: f.city, channel, location: "crm_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`CRM enquiry – ${f.company || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Group label="Industry"><Chips name="Industry" options={INDUSTRIES} isOn={(x) => x === industry} onPick={setIndustry} radio /></Group>
        <Group label="Where do your leads come from? (choose any)"><Chips name="Lead sources" options={SOURCES} isOn={(x) => sources.includes(x)} onPick={toggle(setSources)} /></Group>
        <div className="grid sm:grid-cols-2 gap-7">
          <Group label="Number of sales users"><Chips name="Number of sales users" options={USERS} isOn={(x) => x === users} onPick={setUsers} radio /></Group>
          <Group label="Current tool"><Chips name="Current tool" options={TOOLS} isOn={(x) => x === tool} onPick={setTool} radio /></Group>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="crm-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="crm-company" label="Company" value={f.company} onChange={set("company")} autoComplete="organization" />
          <Input id="crm-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
          <Input id="crm-city" label="City" value={f.city} onChange={set("city")} autoComplete="address-level2" placeholder="Kozhikode, Kochi …" />
        </div>
        <div>
          <label htmlFor="crm-message" className="block text-[13px] text-white/60 mb-2">Anything else we should know? (optional)</label>
          <textarea
            id="crm-message"
            rows={3}
            value={f.message}
            onChange={set("message")}
            placeholder="How your team sells today, what gets missed, reports you need."
            className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Book a Free CRM Demo
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We show you a working CRM, map your sales process and send a clear estimate.</p>
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

function Chips({ options, isOn, onPick, name, radio = false }) {
  return (
    <div role={radio ? "radiogroup" : "group"} aria-label={name} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = isOn(o);
        return (
          <button
            key={o}
            type="button"
            {...(radio ? { role: "radio", "aria-checked": on } : { "aria-pressed": on })}
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
