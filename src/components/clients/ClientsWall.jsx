"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { domainOf } from "@/lib/clients";

const FILTERS = [
  { value: "all", label: "All clients" },
  { value: "kerala", label: "Kerala" },
  { value: "gcc", label: "UAE & GCC" },
];

/* Client cards: each one is a live site, shown in a minimal browser frame
   with its real domain. CSS-only hover (no animation library) to keep the
   page light. Every card is in the static HTML; the filter only hides. */
export default function ClientsWall({ clients }) {
  const [filter, setFilter] = useState("all");
  const count = (v) => (v === "all" ? clients.length : clients.filter((c) => c.region === v).length);

  return (
    <div>
      <div role="group" aria-label="Filter clients by region" className="flex flex-wrap gap-2.5 mb-10 sm:mb-12">
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] transition-colors duration-200 ${
                active ? "bg-white text-black" : "border border-white/20 text-white/70 hover:text-white hover:border-white/50"
              }`}
            >
              {f.label}
              <span className={`text-[12px] tabular-nums ${active ? "text-black/60" : "text-white/55"}`}>{count(f.value)}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {clients.map((c, i) => {
          const hidden = filter !== "all" && c.region !== filter;
          return (
            <li key={c.url} className={hidden ? "hidden" : ""}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border border-white/10 bg-white/3 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/6 focus-visible:outline-2 focus-visible:outline-white"
              >
                {/* Browser frame */}
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/4">
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </span>
                    <span className="mx-auto truncate rounded-full bg-white/6 px-3 py-0.5 text-[11px] text-white/50">
                      {domainOf(c.url)}
                    </span>
                  </div>
                  {/* Matches the screenshots' ~2.1:1 ratio so no side of a site gets cropped */}
                  <div className="relative" style={{ aspectRatio: "21/10", background: c.gradient }}>
                    <Image
                      src={c.image}
                      alt={`${c.title} website homepage`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={i < 3 ? "eager" : "lazy"}
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-start justify-between gap-4 px-2 pt-5 pb-3">
                  <div className="min-w-0">
                    <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/55">{c.category}</p>
                    <h3 className="mt-1.5 text-[17px] leading-snug text-white">{c.title}</h3>
                    {c.location && <p className="mt-1 text-[13px] text-white/50">{c.location}</p>}
                    <span className="sr-only"> (opens their website in a new tab)</span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white"
                  >
                    <FiArrowUpRight className="text-[15px]" />
                  </span>
                </div>
              </a>
            </li>
          );
        })}

        {/* Closing card: invites the next client and fills the last grid row */}
        <li>
          <Link
            href="/contact"
            className="group flex h-full min-h-60 flex-col justify-between rounded-2xl border border-dashed border-white/20 p-7 transition-colors duration-300 hover:border-white/50 hover:bg-white/4 focus-visible:outline-2 focus-visible:outline-white"
          >
            <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/55">Your business</p>
            <div>
              <p className="text-white text-[26px] leading-tight" style={{ fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif", fontWeight: 300, letterSpacing: "-0.02em" }}>
                Your website<br />could be here.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[14px] text-white/70 group-hover:text-white transition-colors">
                Start your project
                <span aria-hidden="true" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                  <FiArrowUpRight className="text-[15px]" />
                </span>
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
