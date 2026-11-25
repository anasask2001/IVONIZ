"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { track } from "@/components/comparison/Interactive";
import { waLink, OPEN_SANS, GLASS } from "@/components/site/SiteUI";
import { APP_PACKAGES, APP_FACTORS } from "@/components/ecommerce/costs";

/*
 * App cost estimator (SEO brief: targets the ~3,700/mo "app development cost"
 * searches). 5 questions → indicative range from APP_PACKAGES × APP_FACTORS →
 * WhatsApp with the answers pre-filled. Market toggle switches INR / AED.
 * GA4: estimate_complete on send.
 */

const MARKETS = [{ id: "in", label: "India (INR)" }, { id: "gcc", label: "UAE / GCC (AED)" }];
const PLATFORMS = [{ id: "both", label: "Android + iOS" }, { id: "android", label: "Android only" }, { id: "ios", label: "iOS only" }];
const ROLES = [{ id: "one", label: "1 (customers only)" }, { id: "few", label: "2–3" }, { id: "many", label: "4 or more" }];
const YESNO = [{ id: "yes", label: "Yes" }, { id: "no", label: "No" }];

const roundTo = (n, step) => Math.round(n / step) * step;
const inr = (n) => (n >= 100000 ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)} lakh` : `₹${n.toLocaleString("en-IN")}`);
const aed = (n) => `AED ${n.toLocaleString("en-US")}`;

export default function AppCostEstimator() {
  const [market, setMarket] = useState("in");
  const [type, setType] = useState("business");
  const [platform, setPlatform] = useState("both");
  const [roles, setRoles] = useState("few");
  const [payments, setPayments] = useState("yes");
  const [admin, setAdmin] = useState("yes");

  const pkg = APP_PACKAGES.find((p) => p.id === type);
  const k = APP_FACTORS.platform[platform] * APP_FACTORS.roles[roles] * APP_FACTORS.payments[payments] * APP_FACTORS.admin[admin];
  const lo = market === "in" ? roundTo(pkg.min * k, 25000) : roundTo(pkg.aedMin * k, 5000);
  const hi = market === "in" ? roundTo(pkg.max * k, 25000) : roundTo(pkg.aedMax * k, 5000);
  const fmt = market === "in" ? inr : aed;
  const range = pkg.openEnded ? `${fmt(lo)}+` : `${fmt(lo)} – ${fmt(hi)}`;

  const label = (list, id) => list.find((x) => x.id === id).label;
  const message =
    `Hi Ivoniz, I want to build a ${pkg.label.toLowerCase()} for my business in ${market === "in" ? "India" : "the UAE / GCC"}.\n` +
    `Platforms: ${label(PLATFORMS, platform)}\nUser roles: ${label(ROLES, roles)}\nPayments: ${payments === "yes" ? "Yes" : "No"}\n` +
    `Admin panel: ${admin === "yes" ? "Yes" : "No"}\nYour estimator showed ${range}. Please send me a detailed estimate.`;

  return (
    <div className="p-6 sm:p-9" style={GLASS}>
      <div className="grid gap-7">
        <Field label="Where is your business?"><Choice name="Market" options={MARKETS} value={market} onChange={setMarket} /></Field>
        <Field label="1. What kind of app?"><Choice name="App type" options={APP_PACKAGES.map((p) => ({ id: p.id, label: p.label }))} value={type} onChange={setType} /></Field>
        <Field label="2. Which platforms?"><Choice name="Platforms" options={PLATFORMS} value={platform} onChange={setPlatform} /></Field>
        <Field label="3. How many types of user?"><Choice name="User roles" options={ROLES} value={roles} onChange={setRoles} /></Field>
        <Field label="4. In-app payments?"><Choice name="Payments" options={YESNO} value={payments} onChange={setPayments} /></Field>
        <Field label="5. Admin panel to manage content and orders?"><Choice name="Admin panel" options={YESNO} value={admin} onChange={setAdmin} /></Field>
      </div>

      <div className="mt-9 pt-8 border-t border-white/10 grid md:grid-cols-[1fr_auto] gap-6 items-end" aria-live="polite">
        <div>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/55">Indicative range</p>
          <p className="mt-2 text-white tabular-nums" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(30px,3.6vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {range}
          </p>
          <p className="mt-2 text-[13px] text-white/55">Typical timeline: {pkg.time}. Market range, not a quote; we send a fixed estimate after a short call.</p>
        </div>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("estimate_complete", { location: "app_estimator", app_type: type, platform, roles, payments, admin, market })}
          className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors"
        >
          <FaWhatsapp aria-hidden="true" /> Send me the detailed estimate
          <FiArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
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
        const active = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.id)}
            className={`min-h-11 px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
              active ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
