"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * App lead form with qualification fields from the SEO brief (platforms, stage,
 * budget, launch date) so sales can call the best leads first. Static site:
 * sends by WhatsApp (primary) or email. GA4: generate_lead { lead_type, app_type, country, channel }.
 *
 * Optional props (used by /mobile-app-development/flutter-app-development):
 *   needs    — list of { id, label, lead } shown as a "What do you need?" field in
 *              place of Platforms / Stage; CTAs link to #quote-<id> to pre-select it.
 *   tech     — technology named in the WhatsApp message (e.g. "Flutter").
 *   leadType — GA4 lead_type when no need is chosen (default "mobile_app").
 *
 * Optional props (used by /mobile-app-development/native-app-development):
 *   platformOptions — replaces the default Platforms list (e.g. adds "Not sure").
 *   features        — multi-select "Key features" list shown in place of Stage;
 *                     Target launch is hidden in this mode (brief's field list).
 */

const TYPES = ["Ecommerce", "Booking", "Healthcare", "Education", "On-demand", "Business", "Other"];
const PLATFORMS = ["Android", "iOS", "Both"];
const STAGES = ["Idea", "Design ready", "Existing app"];
const COUNTRIES = ["India", "UAE", "Saudi Arabia", "Qatar", "Oman", "Other"];
const LAUNCH = ["Within 3 months", "3–6 months", "6+ months", "Not sure"];
const BUDGETS = {
  INR: ["Under ₹4 lakh", "₹4–10 lakh", "₹10–20 lakh", "₹20 lakh+", "Not sure yet"],
  AED: ["Under AED 50,000", "AED 50,000–120,000", "AED 120,000+", "Not sure yet"],
};
const EMAIL = "info@ivoniz.com";

export default function AppQuoteForm({ needs, tech, leadType = "mobile_app", platformOptions = PLATFORMS, features }) {
  const [need, setNeed] = useState(needs ? needs[0].id : null);
  const [type, setType] = useState("");
  const [platforms, setPlatforms] = useState("Both");
  const [picked, setPicked] = useState([]);
  const toggleFeature = (x) => setPicked((list) => (list.includes(x) ? list.filter((y) => y !== x) : [...list, x]));
  const [stage, setStage] = useState("Idea");
  const [country, setCountry] = useState("India");
  const [budget, setBudget] = useState("");
  const [launch, setLaunch] = useState("");
  const [f, setF] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");

  /* Pre-select the need from the CTA that brought the visitor here (#quote-<id>). */
  useEffect(() => {
    if (!needs) return;
    const apply = () => {
      const m = window.location.hash.match(/^#quote-(.+)$/);
      if (m && needs.some((n) => n.id === m[1])) setNeed(m[1]);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [needs]);

  const needObj = needs?.find((n) => n.id === need);
  const appWord = tech ? `${tech} app` : "app";
  const currency = country === "India" ? "INR" : "AED";
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const summary = () =>
    [
      needObj?.id === "hire"
        ? `Hi Ivoniz, I'd like to hire ${tech ? tech + " " : ""}developers. I'm based in ${country}.`
        : `Hi Ivoniz, I want to build ${type ? `a ${type.toLowerCase()} ${appWord}` : `a ${appWord}`} for my business in ${country}.`,
      needObj ? `Need: ${needObj.label}` : `Platforms: ${platforms}`,
      needObj ? (type ? `App type: ${type}` : null) : features ? (type ? `App type: ${type}` : null) : `Stage: ${stage}`,
      features && picked.length ? `Key features: ${picked.join(", ")}` : null,
      budget ? `Budget: ${budget}` : null,
      launch ? `Target launch: ${launch}` : null,
      `Name: ${f.name}`,
      f.phone ? `Phone / WhatsApp: ${f.phone}` : null,
      f.email ? `Email: ${f.email}` : null,
      f.message ? `About the app: ${f.message}` : null,
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
    track("generate_lead", { lead_type: needObj?.lead || leadType, need: need || undefined, app_type: type || "unspecified", platforms: needs ? undefined : platforms, stage: needs || features ? undefined : stage, features: features ? picked.join("|") : undefined, country, budget, channel, location: "app_quote_form" });
    if (channel === "whatsapp") {
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`App development enquiry – ${f.name}`)}&body=${encodeURIComponent(summary())}`;
    }
  };

  return (
    <form onSubmit={send("whatsapp")} className="p-6 sm:p-9" style={GLASS} noValidate>
      <div className="grid gap-7">
        {needs && (
          <Field label="What do you need?">
            <Choice name="Need" options={needs.map((n) => n.label)} value={needObj?.label} onChange={(l) => setNeed(needs.find((n) => n.label === l).id)} />
          </Field>
        )}
        <Field label="App type"><Choice name="App type" options={TYPES} value={type} onChange={setType} /></Field>
        {!needs && !features && (
          <div className="grid sm:grid-cols-2 gap-7">
            <Field label="Platforms"><Choice name="Platforms" options={platformOptions} value={platforms} onChange={setPlatforms} /></Field>
            <Field label="Stage"><Choice name="Stage" options={STAGES} value={stage} onChange={setStage} /></Field>
          </div>
        )}
        {features && (
          <>
            <Field label="Platforms"><Choice name="Platforms" options={platformOptions} value={platforms} onChange={setPlatforms} /></Field>
            <Field label="Key features (choose any)">
              <div role="group" aria-label="Key features" className="flex flex-wrap gap-2">
                {features.map((x) => {
                  const on = picked.includes(x);
                  return (
                    <button
                      key={x}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleFeature(x)}
                      className={`px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
                        on ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
                      }`}
                    >
                      {x}
                    </button>
                  );
                })}
              </div>
            </Field>
          </>
        )}
        <Field label="Country"><Choice name="Country" options={COUNTRIES} value={country} onChange={(c) => { setCountry(c); setBudget(""); }} /></Field>
        <Field label={`Budget range (${currency})`}><Choice name="Budget" options={BUDGETS[currency]} value={budget} onChange={setBudget} /></Field>
        {!features && <Field label="Target launch"><Choice name="Target launch" options={LAUNCH} value={launch} onChange={setLaunch} /></Field>}

        <div className="grid sm:grid-cols-3 gap-4">
          <Input id="app-name" label="Name" required value={f.name} onChange={set("name")} autoComplete="name" />
          <Input id="app-phone" label="Phone / WhatsApp" type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 or +971 …" />
          <Input id="app-email" label="Email" type="email" value={f.email} onChange={set("email")} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="app-message" className="block text-[13px] text-white/55 mb-2">Your app idea (optional)</label>
          <textarea
            id="app-message"
            rows={3}
            value={f.message}
            onChange={set("message")}
            placeholder="Key features, target users, any apps you like."
            className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-white/10">
        {error && <p role="alert" className="mb-4 text-[14px] text-[#ff8a8a]">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors">
            <FaWhatsapp aria-hidden="true" /> Get My Free App Estimate
          </button>
          <button type="button" onClick={send("email")} className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            <FaEnvelope aria-hidden="true" /> Send by email
          </button>
        </div>
        <p className="mt-4 text-[13px] text-white/55">We reply with the right platform, an MVP outline, and a cost and timeline estimate.</p>
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
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o)}
            className={`px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
              active ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
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
