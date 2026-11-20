"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { track } from "@/components/comparison/Interactive";
import { waLink, OPEN_SANS, GLASS } from "@/components/site/SiteUI";
import { STORE_TYPES } from "./costs";

/*
 * Quick ecommerce estimate: market + store type + catalogue size + integrations
 * → indicative range (same figures as the page's cost table) → WhatsApp with the
 * answers pre-filled, so sales get a qualified lead.
 * Prices come from ./costs.js (indicative; replace with Ivoniz packages).
 */

const MARKETS = [
  { id: "in", label: "Kerala / India" },
  { id: "gcc", label: "UAE / GCC" },
];
const PRODUCTS = ["Under 100", "100 – 1,000", "1,000+"];
const NEEDS = ["Payments + shipping", "Plus ERP / accounting sync", "Plus Arabic / multi-currency"];

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

export default function EstimateWidget() {
  const [market, setMarket] = useState("in");
  const [type, setType] = useState("woo");
  const [products, setProducts] = useState(PRODUCTS[0]);
  const [needs, setNeeds] = useState(NEEDS[0]);

  const store = STORE_TYPES.find((s) => s.id === type);
  const range = market === "in" ? store.inr : store.aed;
  const upper = products === "1,000+" || needs !== NEEDS[0];
  const marketLabel = MARKETS.find((m) => m.id === market).label;

  const message =
    `Hi Ivoniz, I want to start an online store in ${marketLabel}.\n` +
    `Store type: ${store.label}\nProducts: ${products}\nNeeds: ${needs}\n` +
    `Your estimator showed ${range}. Please send me a detailed quote.`;

  return (
    <div className="p-6 sm:p-9" style={GLASS}>
      <div className="grid gap-7">
        <Field label="Where will you sell?"><Choice name="Market" options={MARKETS} value={market} onChange={setMarket} /></Field>
        <Field label="What kind of store?"><Choice name="Store type" options={STORE_TYPES} value={type} onChange={setType} /></Field>
        <Field label="How many products?"><Choice name="Products" options={PRODUCTS} value={products} onChange={setProducts} /></Field>
        <Field label="Integrations"><Choice name="Integrations" options={NEEDS} value={needs} onChange={setNeeds} /></Field>
      </div>

      <div className="mt-9 pt-8 border-t border-white/10 grid md:grid-cols-[1fr_auto] gap-6 items-end" aria-live="polite">
        <div>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">Indicative range</p>
          <p className="mt-2 text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(30px,3.6vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {range}
          </p>
          <p className="mt-2 text-[13px] text-white/50">
            {upper ? "A large catalogue or extra integrations usually puts you at the upper end. " : ""}
            Market range, not a quote. We&apos;ll send a fixed price after a short call.
          </p>
        </div>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "estimate_widget", store_type: type, market, products })}
          className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors"
        >
          <FaWhatsapp aria-hidden="true" /> Send me the detailed quote
          <FiArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <p className="text-[13px] text-white/55 mb-3">{label}</p>
      {children}
    </div>
  );
}
