"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const GA_MEASUREMENT_ID = "G-ZJKMLK68Z3";

export default function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the initial mount — the gtag/fbq init scripts in layout.js
    // already record the first pageview on hard load.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  // Call and WhatsApp leads: one delegated listener covers every tel: and
  // wa.me link on the site (footer, menu, contact, quick rail, chat, service
  // pages), including links added later. Buttons that already send their own
  // "whatsapp_click" via track() are skipped, so nothing is counted twice.
  // Mark "phone_click" and "whatsapp_click" as key events in GA4.
  useEffect(() => {
    const where = (a) => a.closest("footer") ? "footer"
      : a.closest("nav, header") ? "menu"
      : a.closest(".quick-rail") ? "quick_rail"
      : a.closest(".chat-root") ? "chat"
      : "page";
    const onClick = (e) => {
      const wa = e.target.closest?.('a[href*="wa.me/"], a[href*="api.whatsapp.com"]');
      if (wa) {
        if (Date.now() - (window.__waTrackedAt || 0) < 1000) return;
        if (typeof window.gtag === "function") {
          window.gtag("event", "whatsapp_click", { page: window.location.pathname, location: where(wa), lead_type: "whatsapp" });
        }
        if (typeof window.fbq === "function") window.fbq("track", "Contact");
        return;
      }
      const a = e.target.closest?.('a[href^="tel:"]');
      if (!a) return;
      const number = a.getAttribute("href").slice(4);
      const location = where(a);
      if (typeof window.gtag === "function") {
        window.gtag("event", "phone_click", {
          page: window.location.pathname,
          phone_number: number,
          location,
          lead_type: "call",
        });
      }
      if (typeof window.fbq === "function") window.fbq("track", "Contact");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
