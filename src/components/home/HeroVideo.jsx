"use client";

import { useEffect, useRef } from "react";

/*
 * Homepage hero background video (~830 KB). Starts downloading only after the
 * page has loaded and the browser is idle, so it doesn't compete with the
 * page's own CSS, JS and fonts on slower phone connections. Until then the
 * hero's dark background shows (same look as the video's dark frames).
 * Skipped entirely for visitors with Data Saver on.
 */
export default function HeroVideo({ src, className = "", style }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (navigator.connection?.saveData) return;
    let idleId, timer;
    const start = () => {
      v.src = src;
      v.play().catch(() => {});
    };
    const whenIdle = () => {
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(start, { timeout: 2500 });
      else timer = setTimeout(start, 800);
    };
    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
    return () => {
      window.removeEventListener("load", whenIdle);
      if (idleId) window.cancelIdleCallback?.(idleId);
      clearTimeout(timer);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={`transition-opacity duration-700 ${className}`}
      style={style}
      onPlaying={(e) => e.currentTarget.setAttribute("data-playing", "")}
    />
  );
}
