"use client";

import { useEffect, useRef } from "react";

/* Words brighten as they scroll into view (and dim again on the way back).
   One IntersectionObserver + CSS colour transitions (.text-reveal in
   globals.css) instead of a framer-motion component per word. */
export default function TextReveal({ primary, secondary, dark = false }) {
  const ref = useRef(null);
  const allWords = `${primary}${secondary}`.split(" ");
  const primCount = primary.trim().split(" ").length;

  // Starting shades are the lowest that still pass WCAG AA contrast (4.5:1) on
  // black / #f8f8f8, so unrevealed words stay readable (Lighthouse color-contrast).
  const dim     = dark ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.58)";
  const dimSec  = dark ? "rgba(255,255,255,0.47)" : "rgba(0,0,0,0.55)";
  const full    = dark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.92)";
  const fullSec = dark ? "rgba(255,255,255,0.82)" : "rgba(0,0,0,0.88)";

  useEffect(() => {
    const words = ref.current?.querySelectorAll("[data-w]");
    if (!words?.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.toggleAttribute("data-on", e.isIntersecting)),
      { rootMargin: "0px 0px -18% 0px" }
    );
    words.forEach((w) => io.observe(w));
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} className="text-reveal font-medium leading-[1.6] tracking-[-0.01em]" style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}>
      {allWords.map((word, i) => {
        const isPrimary = i < primCount;
        return (
          <span
            key={i}
            data-w=""
            className="inline"
            style={{
              "--dim": isPrimary ? dim : dimSec,
              "--full": isPrimary ? full : fullSec,
              transitionDuration: isPrimary ? "450ms" : "550ms",
              transitionDelay: `${(i % 12) * 28}ms`,
            }}
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}
