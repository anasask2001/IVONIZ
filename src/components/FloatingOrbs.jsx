"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * FLOATING ORBS — decorative GSAP background layer
 * ───────────────────────────────────────────────────
 * Each orb has two motions layered together:
 *   1. Continuous ambient float (slow bob, infinite yoyo) — alive even with no scroll
 *   2. Scroll-linked parallax drift (scrub) — different speed per orb for depth
 */
const ORBS = [
  { size: 420, top: "0%",   left: "-6%",  color: "rgba(99,102,241,0.16)",  blur: 70, speed: 0.4 },
  { size: 300, top: "30%",  left: "85%",  color: "rgba(236,72,153,0.13)",  blur: 60, speed: -0.6 },
  { size: 360, top: "62%",  left: "-4%",  color: "rgba(56,189,248,0.14)",  blur: 65, speed: 0.55 },
  { size: 260, top: "85%",  left: "78%",  color: "rgba(168,85,247,0.13)",  blur: 55, speed: -0.45 },
];

export default function FloatingOrbs() {
  const containerRef = useRef(null);
  const orbRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      orbRefs.current.forEach((orb, i) => {
        if (!orb) return;
        const cfg = ORBS[i];

        /* ambient float — independent of scroll, always running */
        gsap.to(orb, {
          y: i % 2 === 0 ? 28 : -24,
          x: i % 2 === 0 ? -16 : 18,
          duration: 6 + i,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        /* scroll-linked parallax drift */
        gsap.to(orb, {
          yPercent: cfg.speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {ORBS.map((o, i) => (
        <div
          key={i}
          ref={(el) => (orbRefs.current[i] = el)}
          style={{
            position: "absolute",
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            borderRadius: "50%",
            background: o.color,
            filter: `blur(${o.blur}px)`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
