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

  // Phone-call leads: one delegated listener covers every tel: link on the
  // site (footer, menu, contact, quick rail, service pages), including links
  // added later. Mark "phone_click" as a key event in GA4 to count calls.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="tel:"]');
      if (!a) return;
      const number = a.getAttribute("href").slice(4);
      const location = a.closest("footer") ? "footer"
        : a.closest("nav, header") ? "menu"
        : a.closest(".quick-rail") ? "quick_rail"
        : "page";
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
