"use client";

import { useEffect } from "react";

/*
 * Sets up a GSAP ScrollTrigger animation only when it's needed, instead of on
 * page load. Pinned sections measure and re-measure the layout when created,
 * which was ~2 s of blocked main thread on the homepage (Lighthouse, Nov 2026).
 *
 * - Starts when the element comes within ~10% of a screen of the viewport
 *   (the pin only begins when it reaches the top, a full screen later).
 * - Also starts if the visitor jumps past it (e.g. an anchor link lower down);
 *   then the scroll position is corrected for the pin spacer that gets added
 *   above them, so nothing visibly jumps.
 * - gsap + ScrollTrigger are imported on demand, so they're not in the
 *   page's initial JavaScript at all.
 *
 * setup(gsap, ScrollTrigger) runs once and may return a cleanup function.
 */
export default function useLazyGsap(ref, setup, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cleanup = null;
    let started = false;
    let cancelled = false;

    const start = async () => {
      if (started) return;
      started = true;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);

      const above = el.getBoundingClientRect().bottom < 0;
      const before = document.documentElement.scrollHeight;
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      cleanup = setup(gsap, ScrollTrigger) || null;
      ScrollTrigger.refresh();
      if (above) {
        const diff = document.documentElement.scrollHeight - before;
        if (diff) window.scrollBy(0, diff);
      }
    };

    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) start();
    }, { rootMargin: "10% 0px" });
    const onScroll = () => { if (el.getBoundingClientRect().bottom < 0) start(); };

    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelled = true;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (typeof cleanup === "function") cleanup();
    };
    // setup is defined inline by the caller; re-running is controlled by deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
