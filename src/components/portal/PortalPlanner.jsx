"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS, OPEN_SANS } from "@/components/site/SiteUI";

/*
 * Portal planner for /website-development/web-portal-development — stands in for the brief's
 * "planning checklist" + long qualifying form. Visitors pick portal type,
 * users, systems, market and launch date; the result is a short requirements
 * brief sent on WhatsApp, so sales can prioritise and reply specifically.
 */

const TYPES = ["Customer", "B2B / dealer", "Vendor", "Employee", "Student", "Patient", "Other"];
const USERS = ["Under 100", "100 – 1,000", "1,000 – 10,000", "10,000+"];
const SYSTEMS = ["ERP / accounting", "CRM", "HR / payroll", "Hospital (HMS)", "School (LMS)", "Payment gateway", "WhatsApp / SMS", "None yet"];
const MARKETS = ["Kerala / India", "UAE / GCC", "Other country"];
const LAUNCH = ["Within 3 months", "3 – 6 months", "Just exploring"];

function Pills({ options, value, onChange, multi = false, name }) {
  const isOn = (o) => (multi ? value.includes(o) : value === o);
  const click = (o) => {
    if (!multi) return onChange(o);
    if (o === "None yet") return onChange(["None yet"]);
    const next = value.filter((v) => v !== "None yet");
    onChange(next.includes(o) ? next.filter((v) => v !== o) : [...next, o]);
  };
  return (
    <div className="flex flex-wrap gap-2" role={multi ? "group" : "radiogroup"} aria-label={name}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role={multi ? "checkbox" : "radio"}
          aria-checked={isOn(o)}
          onClick={() => click(o)}
          className={`min-h-11 px-4 py-2.5 rounded-full text-[13.5px] border transition-colors duration-200 ${
            isOn(o) ? "bg-white text-black border-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function PortalPlanner() {
  const [type, setType] = useState("B2B / dealer");
  const [users, setUsers] = useState(USERS[1]);
  const [systems, setSystems] = useState(["ERP / accounting"]);
  const [market, setMarket] = useState(MARKETS[0]);
  const [launch, setLaunch] = useState(LAUNCH[1]);

  const brief =
    `Hi Ivoniz, we're planning a ${type} portal for our company in ${market}.\n` +
    `• Users: ${users}\n• Connect to: ${systems.length ? systems.join(", ") : "Not sure"}\n• Launch: ${launch}\n` +
    `Can we book a discovery call?`;

  return (
    <div className="p-6 sm:p-9" style={GLASS}>
      <div className="grid gap-7">
        <Field label="What kind of portal?"><Pills name="Portal type" options={TYPES} value={type} onChange={setType} /></Field>
        <Field label="How many users, roughly?"><Pills name="Users" options={USERS} value={users} onChange={setUsers} /></Field>
        <Field label="Systems it should connect to (pick any)"><Pills name="Systems" multi options={SYSTEMS} value={systems} onChange={setSystems} /></Field>
        <div className="grid sm:grid-cols-2 gap-7">
          <Field label="Where is your organisation?"><Pills name="Market" options={MARKETS} value={market} onChange={setMarket} /></Field>
          <Field label="Target launch"><Pills name="Launch" options={LAUNCH} value={launch} onChange={setLaunch} /></Field>
        </div>
      </div>

      <div className="mt-9 pt-8 border-t border-white/10 grid md:grid-cols-[1fr_auto] gap-6 items-end">
        <div>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">Your portal brief</p>
          <p className="mt-3 text-white/80 text-[15px] leading-relaxed whitespace-pre-line" style={{ fontFamily: OPEN_SANS }} aria-live="polite">
            {brief.replace("Hi Ivoniz, we're planning", "Planning").replace("\nCan we book a discovery call?", "")}
          </p>
        </div>
        <a
          href={waLink(brief)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "portal_planner", portal_type: type, users, market, launch })}
          className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors"
        >
          <FaWhatsapp aria-hidden="true" /> Send brief &amp; book a call
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
