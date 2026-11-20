"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { track } from "@/components/comparison/Interactive";
import { waLink, GLASS } from "@/components/site/SiteUI";

/*
 * Free WooCommerce speed check (lead magnet for existing-store owners).
 * The site is a static export with no form backend, so the request is sent
 * through WhatsApp with the store URL pre-filled; the team replies with a short
 * PageSpeed report and fixes.
 */
export default function SpeedCheck() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const clean = url.trim();
    if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+\S*$/i.test(clean)) {
      setError("Please enter your store address, for example yourstore.com");
      return;
    }
    setError("");
    track("speed_check_request", { location: "speed_check" });
    window.open(
      waLink(`Hi Ivoniz, please run a free WooCommerce speed check on my store: ${clean}`),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form onSubmit={submit} className="p-6 sm:p-8" style={GLASS} noValidate>
      <label htmlFor="store-url" className="block text-[13px] text-white/60 mb-3">Your WooCommerce store address</label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="store-url"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="yourstore.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "store-url-error" : "store-url-hint"}
          className="flex-1 min-w-0 h-13 px-5 rounded-full bg-white/[0.06] border border-white/15 text-white text-[15px] placeholder:text-white/35 focus:outline-none focus:border-white/50"
        />
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-full bg-white text-black text-[15px] font-medium hover:bg-white/85 transition-colors"
        >
          <FaWhatsapp aria-hidden="true" /> Get my free speed check
          <FiArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
      {error ? (
        <p id="store-url-error" className="mt-3 text-[13px] text-red-300">{error}</p>
      ) : (
        <p id="store-url-hint" className="mt-3 text-[13px] text-white/45">
          Opens WhatsApp with your store address. We reply with a short PageSpeed report and the fixes we&apos;d make.
        </p>
      )}
    </form>
  );
}
