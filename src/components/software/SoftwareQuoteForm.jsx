"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Software lead form (fields from the SEO brief): name, business name, phone,
 * city, software needed, number of users, current tools, message.
 * Static site: sends by WhatsApp (primary) or email. Service cards link to
 * #quote-erp / #quote-crm / #quote-billing / #quote-custom to pre-select.
 * GA4: generate_lead { lead_type: "software", software, users, tools, channel }.
 */

const SOFTWARE = [
  { id: "erp", label: "ERP" },
  { id: "crm", label: "CRM" },
  { id: "billing", label: "Billing" },
  { id: "custom", label: "Custom" },
  { id: "unsure", label: "Not sure" },
];
const USERS = ["1–5", "6–20", "21–50", "50+"];
const TOOLS = ["Excel / paper", "Tally", "Zoho", "Other software", "Nothing yet"];
const EMAIL = "info@ivoniz.com";

export default function SoftwareQuoteForm() {
  const [software, setSoftware] = useState("unsure");
  const [users, setUsers] = useState("");
  const [tools, setTools] = useState([]);
  const [f, setF] = useState({ name: "", business: "", phone: "", city: "", message: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#quote-(erp|crm|billing|custom)$/);
      if (m) setSoftware(m[1]);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggle = (t) => setTools((l) => (l.includes(t) ? l.filter((x) => x !== t) : [...l, t]));
  const swLabel = SOFTWARE.find((s) => s.id === software).label;

  const summary = () =>
    [
      `Hi Ivoniz, I'd like to discuss ${software === "unsure" ? "software" : `${swLabel} software`} for my business.`,
      f.business ? `Business: ${f.business}` : null,
      f.city ? `City: ${f.city}` : null,
      users ? `Users: ${users}` : null,
      tools.length ? `Current tools: ${tools.join(", ")}` : null,
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
      f.message ? `Message: ${f.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      setError("Please add your name and phone / WhatsApp number so we can call you back.");
      return;
    }
    setError("");
    track("generate_lead", { lead_type: "software", software, users, tools: tools.join("|"), city: f.city, channel, location: "software_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Software enquiry – ${f.business || f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        <fieldset>
          <legend className="text-[13px] text-white/60 mb-3">Software needed</legend>
          <Chips name="Software needed" options={SOFTWARE.map((s) => s.label)} isOn={(l) => l === swLabel} onPick={(l) => setSoftware(SOFTWARE.find((s) => s.label === l).id)} radio />
        </fieldset>
        <fieldset>
          <legend className="text-[13px] text-white/60 mb-3">Number of users</legend>
          <Chips name="Number of users" options={USERS} isOn={(u) => u === users} onPick={setUsers} radio />
        </fieldset>
        <fieldset>
          <legend className="text-[13px] text-white/60 mb-3">What do you use today? (choose any)</legend>
          <Chips name="Current tools" options={TOOLS} isOn={(t) => tools.includes(t)} onPick={toggle} />
        </fieldset>

        <div className="grid sm:grid-cols-2 gap-4">
          <Input id="sw-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="sw-business" label="Business name" value={f.business} onChange={set("business")} autoComplete="organization" />
          <Input id="sw-phone" label="Phone / WhatsApp" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 …" />
          <Input id="sw-city" label="City" value={f.city} onChange={set("city")} autoComplete="address-level2" placeholder="Kozhikode, Kochi …" />
        </div>
        <div>
          <label htmlFor="sw-message" className="block text-[13px] text-white/60 mb-2">How does your business work today? (optional)</label>
          <textarea
            id="sw-message"
            rows={3}
            value={f.message}
            onChange={set("message")}
            placeholder="Branches, departments, what takes the most time, reports you need."
            className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Book a Free Requirement Call
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We call you back to understand your workflow, then send a scope and fixed quote.</p>
      </div>
    </form>
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
