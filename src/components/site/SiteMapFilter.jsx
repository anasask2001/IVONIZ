"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

/* Live filter for /site-map. The page is fully rendered as static HTML; this
   only hides links that don't match the query (and groups left empty). With
   JavaScript off, every link stays visible. */
export default function SiteMapFilter() {
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(null);

  const filter = (value) => {
    setQ(value);
    const term = value.trim().toLowerCase();
    let count = 0;
    document.querySelectorAll("[data-sitemap-item]").forEach((el) => {
      const hit = !term || el.getAttribute("data-sitemap-item").includes(term);
      el.hidden = !hit;
      if (hit) count++;
    });
    document.querySelectorAll("[data-sitemap-group]").forEach((g) => {
      g.hidden = !!term && !g.querySelector("[data-sitemap-item]:not([hidden])");
    });
    setShown(term ? count : null);
  };

  return (
    <div>
      <label htmlFor="sitemap-filter" className="sr-only">Filter pages</label>
      <div className="relative">
        <FiSearch aria-hidden="true" className="absolute left-5 top-1/2 -translate-y-1/2 text-white/45" />
        <input
          id="sitemap-filter"
          type="search"
          value={q}
          onChange={(e) => filter(e.target.value)}
          placeholder="Type a service, e.g. SEO, Flutter, billing"
          autoComplete="off"
          className="w-full h-12 rounded-full bg-white/5 border border-white/15 pl-12 pr-5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
        />
      </div>
      <p aria-live="polite" className="mt-3 min-h-5 text-[13px] text-white/55">
        {shown === null ? "" : shown === 0 ? "No pages match. Try another word, or see the full list below." : `${shown} matching page${shown === 1 ? "" : "s"}`}
      </p>
    </div>
  );
}
