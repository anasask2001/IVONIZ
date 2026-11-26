"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { track, waLink } from "@/components/comparison/Interactive";
import { getRecaptchaToken, recaptchaEnabled } from "@/lib/recaptcha";

// Brochure is being revised — the button stays, but the download is off until the new PDF is in place.
const BROCHURE_AVAILABLE = false;

const FIELD_BASE =
  "w-full bg-[#161616] border border-white/10 rounded-lg px-4 py-3.5 sm:py-3 text-[15px] sm:text-[14px] text-white placeholder:text-white/55 focus:outline-none focus:border-white/30 focus:bg-[#1c1c1c] transition-colors";

const SERVICES = [
  "App Development",
  "Website Design",
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "Ecommerce Development",
  "AI Automation",
  "Branding",
  "Other / Not Sure Yet",
];

/* CSS-only entrance (.hero-rise in globals.css): content is never hidden, it only
   slides up slightly, so the LCP text paints without waiting for JavaScript. */
const rise = (delay = 0) => ({ animationDelay: `${0.1 + delay}s` });

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  /* idle → sending → sent | failed. The enquiry is emailed by /contact-mail.php
     (Hostinger PHP). If that fails, the visitor gets a pre-filled WhatsApp
     message and an email link, so the enquiry is never lost. */
  const [status, setStatus] = useState("idle");
  const [honeypot, setHoneypot] = useState("");
  const shownAt = useRef(0);
  useEffect(() => { shownAt.current = Date.now(); }, []);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const summary = () =>
    `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service || "Not specified"}\n\nMessage:\n${form.message || "—"}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || status === "sending") return;
    setStatus("sending");
    try {
      const recaptcha = await getRecaptchaToken("contact");
      const res = await fetch("/contact-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ ...form, website: honeypot, t: String(shownAt.current), page: window.location.pathname, recaptcha }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "send failed");
      track("generate_lead", { lead_type: "contact_form", channel: "form", service: form.service || "not_specified", location: "contact_page_form" });
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <main id="main-content" className="bg-black text-white relative overflow-hidden">

      {/* ── decorative background glow + grid ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-10%", width: "60vw", height: "60vw",
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-16 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 flex items-center min-h-dvh">
        <div className="mx-auto max-w-350 w-full grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* ── LEFT: heading + description + quick actions ── */}
          <div>
            <Breadcrumbs dark items={[{ label: "Contact", href: "/contact" }]} />
            <h1
              className="hero-rise font-bold leading-[1.08] mb-5 sm:mb-6 mt-4"
              style={{ ...rise(0), fontSize: "clamp(34px, 6vw, 64px)" }}
            >
              Have a Project<br />in Mind?
            </h1>

            <p
              style={rise(0.08)}
              className="hero-rise text-white/60 text-[15px] sm:text-[16px] leading-relaxed max-w-md mb-7 sm:mb-9"
            >
              Tell us about your requirements. We&apos;ll review your needs and provide the right
              solution, timeline, and pricing for your business.
            </p>

            {/* Quick contact — high-value for mobile users */}
            <div className="hero-rise flex flex-wrap gap-3" style={rise(0.16)}>
              <a
                href="tel:+919645760023"
                className="group inline-flex items-center gap-2 h-11 px-5 border border-white/15 rounded-full text-[13px] font-medium hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2Z" />
                </svg>
                +91 96457 60023
              </a>
              <a
                href="tel:+918113847950"
                className="group inline-flex items-center gap-2 h-11 px-5 border border-white/15 rounded-full text-[13px] font-medium hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2Z" />
                </svg>
                Sales: +91 81138 47950
              </a>
              <a
                href="https://wa.me/919645760023"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 h-11 px-5 border border-white/15 rounded-full text-[13px] font-medium hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.84.5 3.56 1.36 5.04L2 22l5.25-1.38a9.85 9.85 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7.01A9.84 9.84 0 0 0 12.04 2Zm0 1.67c2.18 0 4.23.85 5.77 2.39a8.15 8.15 0 0 1 2.4 5.79c0 4.52-3.68 8.2-8.2 8.2a8.2 8.2 0 0 1-4.16-1.13l-.3-.17-2.95.77.79-2.87-.19-.3a8.15 8.15 0 0 1-1.25-4.35c0-4.52 3.68-8.33 8.09-8.33Zm-3.6 4.3c-.18 0-.46.07-.66.31-.2.24-.78.76-.78 1.85 0 1.09.8 2.14.91 2.29.11.15 1.55 2.5 3.83 3.4 1.89.75 2.27.6 2.68.56.41-.04 1.33-.55 1.51-1.08.19-.53.19-.99.13-1.08-.06-.1-.24-.16-.5-.29-.27-.13-1.59-.79-1.84-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.13-.62-1.5-.85-2.05-.18-.43-.36-.4-.5-.4Z" />
                </svg>
                Easy to Connect
              </a>
            </div>

            {/* Office address — local SEO signal + visible NAP on the page */}
            <address
              style={rise(0.2)}
              className="hero-rise not-italic text-white/55 text-[13px] leading-relaxed mt-6"
            >
              7th Floor, Phase 1, HiLITE Business Park,<br />
              Ivoniz LLP,<br />
              Kozhikode (Calicut), Kerala 673014
            </address>

            {/* Brochure download — button stays visible; the download is disabled until the updated brochure is ready.
                Set BROCHURE_AVAILABLE to true to re-enable it. */}
            <a
              style={rise(0.22)}
              {...(BROCHURE_AVAILABLE
                ? { href: "/pdf/Ivoniz%20Brochure%202026.pdf", download: "Ivoniz Brochure 2026.pdf" }
                : { "aria-disabled": true, role: "link", title: "Updated brochure coming soon" })}
              className={`hero-rise group mt-6 flex items-center gap-4 bg-white/3 border border-white/10 rounded-xl p-3 max-w-sm transition-colors ${
                BROCHURE_AVAILABLE ? "hover:border-white/25 hover:bg-white/5" : "cursor-default"
              }`}
            >
              <div
                className="shrink-0 w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))" }}
              >
                <Image src="/pdf/pdf-icon.webp" alt="" width={36} height={36} className="w-9 h-9 object-contain" />
              </div>
              <div>
                <p className="font-semibold text-white text-[14px] leading-tight">Download Our Brochure</p>
                {BROCHURE_AVAILABLE ? (
                  <p className="text-white/60 text-[12px] mt-1 flex items-center gap-1.5">
                    PDF · 2.8 MB
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="group-hover:translate-y-0.5 transition-transform" aria-hidden="true">
                      <path d="M12 3v13m0 0-5-5m5 5 5-5M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </p>
                ) : (
                  <p className="text-white/60 text-[12px] mt-1">Updated version coming soon</p>
                )}
              </div>
            </a>
          </div>

          {/* ── RIGHT: form ── */}
          <form
            style={rise(0.1)}
            onSubmit={handleSubmit}
            className="hero-rise w-full bg-white/2 border border-white/8 rounded-2xl p-5 sm:p-7 lg:p-0 lg:bg-transparent lg:border-0"
          >
            <div className="mb-5">
              <label htmlFor="contact-name" className="block text-[13px] font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                required
                type="text"
                autoComplete="name"
                placeholder="Enter full name"
                value={form.name}
                onChange={update("name")}
                className={FIELD_BASE}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-phone" className="block text-[13px] font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={update("phone")}
                  className={FIELD_BASE}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-[13px] font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="Enter e-mail address"
                  value={form.email}
                  onChange={update("email")}
                  className={FIELD_BASE}
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="contact-service" className="block text-[13px] font-semibold mb-2">Service Interested In</label>
              <select
                id="contact-service"
                name="service"
                value={form.service}
                onChange={update("service")}
                className={`${FIELD_BASE} appearance-none cursor-pointer ${form.service ? "" : "text-white/55"}`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23ffffff80' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option value="" disabled>Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="text-white bg-[#161616]">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-7">
              <label htmlFor="contact-message" className="block text-[13px] font-semibold mb-2">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Tell us about project"
                value={form.message}
                onChange={update("message")}
                className={`${FIELD_BASE} resize-y`}
              />
            </div>

            {/* honeypot: hidden from people, filled in by spam bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </div>

            {status === "sent" ? (
              <div role="status" className="rounded-xl border border-white/15 bg-white/4 p-5">
                <p className="text-white text-[15px] font-semibold">Thank you, {form.name.split(" ")[0]}. Your enquiry has been sent.</p>
                <p className="text-white/60 text-[13.5px] mt-1.5">We&apos;ll reply by phone, WhatsApp or email, usually within one working day.</p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-13 sm:h-12 px-7 bg-white text-black text-[14px] font-bold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : <>Send Enquiry <FaArrowRight aria-hidden="true" className="text-[13px]" /></>}
              </button>
            )}

            {/* Required notice when the floating reCAPTCHA badge is hidden (see globals.css) */}
            {recaptchaEnabled() && (
              <p className="mt-4 text-[12px] leading-relaxed text-white/45">
                Protected by reCAPTCHA. Google&apos;s{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Privacy Policy</a> and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Terms of Service</a> apply.
              </p>
            )}

            {status === "failed" && (
              <div role="alert" className="mt-4 rounded-xl border border-white/15 bg-white/4 p-5">
                <p className="text-white text-[14px] font-semibold">Sorry, the form couldn&apos;t send just now.</p>
                <p className="text-white/60 text-[13.5px] mt-1">Your details are ready to send another way, so nothing is lost:</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a href={waLink(`Hi Ivoniz, I have an enquiry.\n\n${summary()}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-white text-black text-[14px] font-semibold">
                    <FaWhatsapp aria-hidden="true" /> Send on WhatsApp
                  </a>
                  <a href={`mailto:info@ivoniz.com?subject=${encodeURIComponent(`New Enquiry from ${form.name}`)}&body=${encodeURIComponent(summary())}`} className="inline-flex items-center justify-center h-11 px-5 rounded-full border border-white/25 text-white text-[14px] font-semibold">
                    Send by email
                  </a>
                </div>
              </div>
            )}
          </form>

        </div>
      </section>

      <Footer />
    </main>
  );
}
