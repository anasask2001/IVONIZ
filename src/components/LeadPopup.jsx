"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FiX, FiChevronDown, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { track, waLink } from "@/components/comparison/Interactive";
import Flag from "@/components/Flags";

/*
 * Timed lead pop-up (sitewide, mounted in app/layout.js).
 * - Opens once the visitor has spent 30 s on the site (time is counted across
 *   page changes via sessionStorage, so it doesn't restart on every page).
 * - Never on contact / legal / sitemap pages; waits while the visitor is typing
 *   in another form or has the menu open.
 * - Closed: not shown again for 7 days. Sent: not shown again for 180 days.
 * - Desktop: image panel (public/modal-image) + form. Phones: a bottom sheet
 *   with the form only.
 * - "Send on WhatsApp" opens WhatsApp with the details typed out.
 * - Test: add ?lead_popup to any URL to open it immediately.
 * GA4: lead_popup_shown, lead_popup_close, generate_lead { lead_type: "popup_form", channel: "whatsapp" }.
 */

const DELAY_MS = 30000;
const SNOOZE_DAYS = 7;
const DONE_DAYS = 180;
const KEY = "ivz_lead_popup";
const T0 = "ivz_t0";
const SKIP = [/^\/contact/, /^\/privacy/, /^\/terms/, /^\/sitemap/];
const COUNTRIES = [
  { iso: "IN", name: "India", dial: "+91" },
  { iso: "AE", name: "United Arab Emirates", dial: "+971" },
  { iso: "SA", name: "Saudi Arabia", dial: "+966" },
  { iso: "QA", name: "Qatar", dial: "+974" },
  { iso: "OM", name: "Oman", dial: "+968" },
  { iso: "BH", name: "Bahrain", dial: "+973" },
  { iso: "KW", name: "Kuwait", dial: "+965" },
];
const DAY = 86400000;

const store = {
  get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
  set(k, v, s = localStorage) { try { s.setItem(k, v); } catch {} },
};

const FIELD =
  "w-full h-11 rounded-xl bg-[#f5f5f7] border border-transparent px-4 text-[16px] text-[#1d1d1f] placeholder:text-black/35 outline-none transition focus:bg-white focus:border-black/20 focus:ring-4 focus:ring-black/5";
const LABEL = "block mb-1 text-[12.5px] font-medium text-black/70";

/* Country code picker with flags (a native <select> can't show images). */
function CountryPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const current = COUNTRIES.find((c) => c.iso === value) || COUNTRIES[0];

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (!wrap.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const pick = (iso) => { onChange(iso); setOpen(false); wrap.current?.querySelector("button")?.focus(); };

  return (
    <div ref={wrap} className="relative" data-cc-open={open ? "" : undefined}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${current.name} ${current.dial}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => { if (e.key === "Escape" && open) { e.preventDefault(); setOpen(false); } }}
        className="h-full flex items-center gap-2 pl-3.5 pr-2.5 rounded-l-xl text-[16px] text-[#1d1d1f] outline-none focus-visible:bg-black/5"
      >
        <Flag code={current.iso} size={20} />
        <span className="tabular-nums">{current.dial}</span>
        <FiChevronDown aria-hidden="true" className={`text-black/45 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Country code"
          className="absolute left-0 top-[calc(100%+8px)] z-20 w-[270px] max-h-[260px] overflow-auto rounded-2xl bg-white p-1.5 shadow-[0_18px_48px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10"
          onKeyDown={(e) => { if (e.key === "Escape") { e.preventDefault(); setOpen(false); } }}
        >
          {COUNTRIES.map((c) => (
            <li key={c.iso} role="option" aria-selected={c.iso === current.iso}>
              <button
                type="button"
                onClick={() => pick(c.iso)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[15px] text-[#1d1d1f] hover:bg-[#f5f5f7] focus-visible:bg-[#f5f5f7] outline-none"
              >
                <Flag code={c.iso} size={22} />
                <span className="flex-1">{c.name}</span>
                <span className="text-black/50 tabular-nums">{c.dial}</span>
                {c.iso === current.iso && <FiCheck aria-hidden="true" className="text-black/70" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [f, setF] = useState({ name: "", email: "", iso: "IN", phone: "", location: "", message: "" });
  const panel = useRef(null);

  /* Schedule the pop-up. */
  useEffect(() => {
    if (open || SKIP.some((r) => r.test(pathname || ""))) return;
    const force = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("lead_popup");
    if (!force && Number(store.get(KEY) || 0) > Date.now()) return;

    let t0 = Number(store.get(T0, sessionStorage) || 0);
    if (!t0) { t0 = Date.now(); store.set(T0, String(t0), sessionStorage); }
    const wait = force ? 600 : Math.max(0, DELAY_MS - (Date.now() - t0));

    let timer;
    const tryOpen = () => {
      const a = document.activeElement;
      const busy = (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) || document.documentElement.hasAttribute("data-menu-open");
      if (busy) { timer = setTimeout(tryOpen, 5000); return; }
      setOpen(true);
      track("lead_popup_shown");
    };
    timer = setTimeout(tryOpen, wait);
    return () => clearTimeout(timer);
  }, [pathname, open]);

  /* While open: lock scroll, focus, Esc closes, Tab stays inside. */
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    root.setAttribute("data-popup-open", "");
    // Laptops: cursor in the first field. Phones: focus the sheet itself, so the
    // keyboard doesn't jump up before the visitor chooses to type.
    const focusTimer = setTimeout(() => {
      const target = window.matchMedia("(min-width: 640px)").matches ? panel.current?.querySelector("input") : panel.current;
      target?.focus({ preventScroll: true });
    }, 350);
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (document.querySelector("[data-cc-open]")) return; // the country list closes first
        close("esc");
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = [...panel.current.querySelectorAll("a[href], button, input, textarea")].filter((el) => !el.disabled && el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      root.removeAttribute("data-popup-open");
    };
    // close() only reads state at call time; re-binding it is unnecessary.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close(how = "button") {
    setOpen(false);
    if (!sent) store.set(KEY, String(Date.now() + SNOOZE_DAYS * DAY));
    track("lead_popup_close", { how, sent });
  }

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const country = COUNTRIES.find((c) => c.iso === f.iso) || COUNTRIES[0];

  function submit(e) {
    e.preventDefault();
    const digits = f.phone.replace(/\D/g, "");
    if (f.name.trim().length < 2) return setError("Please add your name.");
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) return setError("Please add a valid email address.");
    if (digits.length < 7 || digits.length > 14) return setError("Please add a valid phone number.");
    if (!f.message.trim()) return setError("Please tell us a little about your project.");
    setError("");
    const text = [
      "Hi Ivoniz, I'd like to start a project.",
      "",
      `Name: ${f.name.trim()}`,
      `Phone: ${country.dial} ${f.phone.trim()}`,
      `Email: ${f.email.trim()}`,
      f.location.trim() ? `Location: ${f.location.trim()}` : null,
      "",
      `Message: ${f.message.trim()}`,
    ].filter((l) => l !== null).join("\n");
    track("generate_lead", { lead_type: "popup_form", channel: "whatsapp", location: "lead_popup", country: country.iso });
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    store.set(KEY, String(Date.now() + DONE_DAYS * DAY));
    setSent(true);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:p-6">
      <button type="button" tabIndex={-1} aria-label="Close" onClick={() => close("backdrop")} className="lead-fade absolute inset-0 bg-black/55 backdrop-blur-[6px] cursor-default" />

      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        tabIndex={-1}
        className="lead-pop outline-none relative w-full sm:max-w-[1000px] max-h-[92svh] overflow-y-auto sm:overflow-visible bg-white text-[#1d1d1f] rounded-t-[28px] sm:rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] grid sm:grid-cols-[0.8fr_1.2fr]"
      >
        {/* Image panel (desktop / tablet) */}
        <div className="hidden sm:block relative bg-black overflow-hidden rounded-l-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/modal-image/contact-modal.webp" alt="" width={735} height={973} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-[12px] font-semibold tracking-[0.24em]">IVONIZ</p>
            <p className="mt-3 text-[22px] leading-snug font-light tracking-[-0.02em] max-w-[280px]">
              Websites, apps and marketing for Kerala and the Gulf.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="relative px-6 pt-4 pb-7 sm:px-9 sm:py-8">
          <div className="sm:hidden mx-auto mb-4 h-1.5 w-10 rounded-full bg-black/15" aria-hidden="true" />
          <button
            type="button"
            onClick={() => close("button")}
            aria-label="Close"
            className="absolute right-4 top-4 sm:right-5 sm:top-5 w-9 h-9 rounded-full bg-[#f5f5f7] text-black/70 hover:bg-black/10 hover:text-black flex items-center justify-center transition-colors"
          >
            <FiX aria-hidden="true" className="text-[18px]" />
          </button>

          {sent ? (
            <div className="py-10 sm:py-16 pr-8" role="status">
              <h2 id="lead-popup-title" className="m-0 text-[28px] sm:text-[32px] font-semibold tracking-[-0.025em] leading-tight">
                Almost done, {f.name.trim().split(" ")[0]}.
              </h2>
              <p className="mt-3 text-[16px] text-black/60 leading-relaxed">
                WhatsApp has opened with your message ready. Just press <strong className="text-[#1d1d1f] font-semibold">Send</strong> there and we&apos;ll reply, usually within one working day.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={() => close("done")} className="h-12 px-7 rounded-full bg-[#1d1d1f] text-white text-[15px] font-medium hover:bg-black">Close</button>
                <button type="button" onClick={() => setSent(false)} className="h-12 px-6 rounded-full border border-black/15 text-[15px] font-medium hover:bg-black/5">Edit details</button>
              </div>
            </div>
          ) : (
            <>
              <h2 id="lead-popup-title" className="m-0 pr-10 text-[24px] sm:text-[27px] font-semibold tracking-[-0.025em] leading-[1.15]">
                Ready to start your next project?
              </h2>
              <p className="mt-1.5 text-[14.5px] text-black/55 leading-relaxed">
                Tell us a little about it and send it straight to our team on WhatsApp.
              </p>

              <form onSubmit={submit} noValidate className="mt-5 grid gap-3.5">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="lp-name" className={LABEL}>Name *</label>
                    <input id="lp-name" className={FIELD} value={f.name} onChange={set("name")} autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="lp-location" className={LABEL}>Location</label>
                    <input id="lp-location" className={FIELD} value={f.location} onChange={set("location")} placeholder="City or country" autoComplete="address-level2" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="lp-phone" className={LABEL}>Phone *</label>
                  <div className="flex h-11 rounded-xl bg-[#f5f5f7] border border-transparent transition focus-within:bg-white focus-within:border-black/20 focus-within:ring-4 focus-within:ring-black/5">
                    <CountryPicker value={f.iso} onChange={(iso) => setF((s) => ({ ...s, iso }))} />
                    <span className="my-3 w-px bg-black/10" aria-hidden="true" />
                    <input id="lp-phone" type="tel" inputMode="tel" className="flex-1 min-w-0 bg-transparent px-4 text-[16px] text-[#1d1d1f] placeholder:text-black/35 outline-none" value={f.phone} onChange={set("phone")} autoComplete="tel-national" placeholder="Mobile number" />
                  </div>
                </div>

                  <div>
                    <label htmlFor="lp-email" className={LABEL}>Email *</label>
                    <input id="lp-email" type="email" className={FIELD} value={f.email} onChange={set("email")} autoComplete="email" />
                  </div>
                </div>

                <div>
                  <label htmlFor="lp-message" className={LABEL}>Message *</label>
                  <textarea id="lp-message" rows={2} className={`${FIELD} h-auto py-3 resize-none`} value={f.message} onChange={set("message")} placeholder="What do you need built or marketed?" />
                </div>

                {error && <p role="alert" className="m-0 text-[14px] text-[#c4161c]">{error}</p>}

                <button
                  type="submit"
                  className="mt-1 h-12 w-full rounded-full bg-[#1d1d1f] text-white text-[16px] font-medium hover:bg-black active:scale-[0.99] transition inline-flex items-center justify-center gap-2.5"
                >
                  <FaWhatsapp aria-hidden="true" className="text-[19px]" /> Send on WhatsApp
                </button>

                <p className="m-0 text-center text-[12.5px] text-black/45">
                  Opens WhatsApp with your details filled in. Nothing is sent until you press Send.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
