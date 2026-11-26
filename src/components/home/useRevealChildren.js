"use client";

import { useEffect } from "react";

/*
 * Fades in every element marked `.reveal` inside `ref` when it scrolls into
 * view (once), using the .reveal / [data-shown] CSS in globals.css. Replaces
 * per-card GSAP ScrollTriggers: no animation library, no layout measuring.
 */
export default function useRevealChildren(ref, deps = []) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = [...root.querySelectorAll(".reveal:not([data-shown])")];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.setAttribute("data-shown", ""); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
