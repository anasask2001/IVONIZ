"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * ERP lead form (fields from the SEO brief): name, company, phone, city,
 * industry, users, branches, current tools, modules needed, message.
 * Static site: sends by WhatsApp (primary) or email.
 * GA4: generate_lead { lead_type: "erp", industry, users, branches, modules, channel }.
 */

const INDUSTRIES = ["Manufacturing", "Distribution / wholesale", "Retail", "School / college", "Hospital / clinic", "Construction", "Jewellery", "Other"];
const USERS = ["1–10", "11–30", "31–100", "100+"];
const BRANCHES = ["1", "2–5", "6+"];
const TOOLS = ["Excel / paper", "Tally", "Zoho", "Other ERP", "Nothing yet"];
const MODULES = ["Inventory", "Purchase", "Sales", "Production", "Accounts & GST", "HR & payroll", "CRM", "Mobile app"];
const EMAIL = "info@ivoniz.com";

export default function ErpQuoteForm() {
  const [industry, setIndustry] = useState("");
  const [users, setUsers] = useState("");
  const [branches, setBranches] = useState("");
  const [tools, setTools] = useState([]);
  const [modules, setModules] = useState([]);
  const [f, setF] = useState({ name: "", company: "", phone: "", city: "", message: "" });
  const [error, setError] = useState("");

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggle = (setter) => (x) => setter((l) => (l.includes(x) ? l.filter((y) => y !== x) : [...l, x]));

  const summary = () =>
    [
      `Hi Ivoniz, I'd like to book an ERP requirement visit / call${f.company ? ` for ${f.company}` : ""}.`,
      industry ? `Industry: ${industry}` : null,
      f.city ? `City: ${f.city}` : null,
      users ? `Users: ${users}` : null,
      branches ? `Branches: ${branches}` : null,
      tools.length ? `Current tools: ${tools.join(", ")}` : null,
      modules.length ? `Modules needed: ${modules.join(", ")}` : null,
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
      f.message ? `Message: ${f.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      setError("Please add your name and phone / WhatsApp number so we can arrange the visit.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "erp", industry, users, branches, modules: modules.join("|"), tools: tools.join("|"), city: f.city, channel, location: "erp_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`ERP enquiry – ${f.company || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <Group label="Industry"><Chips name="Industry" options={INDUSTRIES} isOn={(x) => x === industry} onPick={setIndustry} radio /></Group>
        <Group label="Modules needed (choose any)"><Chips name="Modules needed" options={MODULES} isOn={(x) => modules.includes(x)} onPick={toggle(setModules)} /></Group>
        <div className="grid sm:grid-cols-2 gap-7">
          <Group label="Number of users"><Chips name="Number of users" options={USERS} isOn={(x) => x === users} onPick={setUsers} radio /></Group>
          <Group label="Branches"><Chips name="Branches" options={BRANCHES} isOn={(x) => x === branches} onPick={setBranches} radio /></Group>
        </div>
        <Group label="What do you use today? (choose any)"><Chips name="Current tools" options={TOOLS} isOn={(x) => tools.includes(x)} onPick={toggle(setTools)} /></Group>

        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="erp-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="erp-company" label="Company" value={f.company} onChange={set("company")} autoComplete="organization" />
          <Input id="erp-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
          <Input id="erp-city" label="City" value={f.city} onChange={set("city")} autoComplete="address-level2" placeholder="Kozhikode, Kochi …" />
        </div>
        <div>
          <label htmlFor="erp-message" className="block text-[13px] text-white/60 mb-2">Anything else we should know? (optional)</label>
          <textarea
            id="erp-message"
            rows={3}
            value={f.message}
            onChange={set("message")}
            placeholder="Your biggest problem today, reports you need, timeline."
            className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Book a Free ERP Visit
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We visit you in Kerala or meet online, then send a phased ERP plan with a fixed estimate.</p>
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
