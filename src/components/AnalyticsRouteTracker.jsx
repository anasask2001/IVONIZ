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

  return null;
}
