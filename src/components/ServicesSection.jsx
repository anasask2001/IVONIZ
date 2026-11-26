"use client";

import { useRef } from "react";
import useLazyGsap from "./home/useLazyGsap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

/*
 * SERVICES — "notebook page" stack, on every screen size.
 * The panel pins and each service card slides up over the previous one, which
 * scales back. Timeline in viewport-height units:
 *   0 → DWELL            short read of card 0 (was a full dead screen before)
 *   DWELL + (i-1) → +1   card i slides up, card i-1 scales back
 *   … → + HOLD           last card settles before the section unpins
 * Total ≈ DWELL + (N-1) + HOLD screens (5 services → ~4.7 screens, was 6).
 *
 * Phone fixes: panel height is 100svh (h-svh, falling back to 100vh) so the address
 * bar showing/hiding doesn't resize it, ScrollTrigger ignores those mobile
 * resizes, and card content starts below the 68px fixed header.
 */
const DWELL = 0.3;
const HOLD = 0.4;

export default function ServicesSection({ services }) {
  const panelRef    = useRef(null);
  const cardRefs    = useRef([]);
  const titleRefs   = useRef([]);
  const descRefs    = useRef([]);
  const itemRefs    = useRef([]);
  const progressRef = useRef(null);

  const setItem = (ci, ii) => (el) => {
    if (!itemRefs.current[ci]) itemRefs.current[ci] = [];
    itemRefs.current[ci][ii] = el;
  };

  /* Built only when the section is near (see useLazyGsap). */
  useLazyGsap(panelRef, (gsap, ScrollTrigger) => {
    const N = services.length;
    const panel = panelRef.current;
    if (!panel) return;

    ScrollTrigger.config({ ignoreMobileResize: true });
    const ctx = gsap.context(() => {
      /* initial states */
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { y: i === 0 ? "0%" : "100%", scale: 1, zIndex: i + 1, transformOrigin: "top center" });
      });
      titleRefs.current.forEach((el, i) => el && gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 36 }));
      descRefs.current.forEach((el, i)  => el && gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 26 }));
      itemRefs.current.forEach((arr, i) => arr?.forEach((el) => el && gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 18 })));

      const total = DWELL + (N - 1) + HOLD;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          pin: true,
          anticipatePin: 1,
          start: "top top",
          end: () => `+=${total * window.innerHeight}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate(self) {
            if (progressRef.current) gsap.set(progressRef.current, { scaleY: self.progress });
          },
        },
      });

      tl.to({}, { duration: DWELL }, 0);

      for (let i = 1; i < N; i++) {
        const at = DWELL + (i - 1);
        const cardEl = cardRefs.current[i];
        const prevCard = cardRefs.current[i - 1];
        if (!cardEl) continue;

        tl.fromTo(cardEl, { y: "100%" }, { y: "0%", ease: "none", duration: 1 }, at);
        if (prevCard) tl.fromTo(prevCard, { scale: 1 }, { scale: 0.9, ease: "none", duration: 1 }, at);

        if (titleRefs.current[i]) tl.fromTo(titleRefs.current[i], { opacity: 0, y: 36 }, { opacity: 1, y: 0, ease: "none", duration: 0.3 }, at + 0.28);
        if (descRefs.current[i])  tl.fromTo(descRefs.current[i],  { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: "none", duration: 0.28 }, at + 0.42);
        (itemRefs.current[i] || []).forEach((el, j) => {
          if (el) tl.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, ease: "none", duration: 0.22 }, at + 0.55 + j * 0.07);
        });
      }

      tl.to({}, { duration: HOLD }, DWELL + (N - 1));
    }, panel);

    return () => ctx.revert();
  }, [services]);

  return (
    <div ref={panelRef} className="svc-panel relative h-screen supports-[height:100svh]:h-svh bg-[#0a0a0a] overflow-hidden">
      {/* Scroll progress — right rail (desktop) */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: "2px", background: "rgba(255,255,255,0.05)", zIndex: 30 }}>
        <div ref={progressRef} style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.35)", transformOrigin: "top", transform: "scaleY(0)" }} />
      </div>

      {/* Service cards */}
      {services.map((svc, i) => (
        <div
          key={svc.number}
          ref={(el) => (cardRefs.current[i] = el)}
          className={[
            "absolute inset-0 h-full bg-[#0a0a0a]",
            "px-4 sm:px-6 lg:px-10 xl:px-16",
            "pt-20 sm:pt-24 lg:pt-28", // clears the fixed header (68px phones, 76px desktop)
            "pb-6 sm:pb-8 lg:pb-10",
            // before JS runs on desktop, keep cards 1+ below the fold (no flash of the last card)
            i > 0 ? "border-t border-white/[0.08] translate-y-full shadow-[0_-8px_60px_rgba(0,0,0,1)]" : "",
          ].join(" ")}
        >
          <div className="mx-auto max-w-350 w-full h-full flex flex-col">

            {/* Section label — only on card 0 */}
            {i === 0 && (
              <div className="flex items-end justify-between gap-6 mb-5 sm:mb-6 lg:mb-8 shrink-0">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[10px] text-white" style={{ lineHeight: 1 }} aria-hidden="true">▶</span>
                    <span className="text-[12px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.22em] uppercase text-white/60">Our Services</span>
                  </div>
                  <h2
                    className="text-white leading-tight"
                    style={{
                      fontFamily   : "var(--font-open-sans), 'Open Sans', sans-serif",
                      fontSize     : "clamp(24px, calc(0.9vw + 18px), 32px)",
                      fontWeight   : 300,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    What we offer to you
                  </h2>
                </div>
                <Link
                  href="/about"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white text-[13px] font-medium whitespace-nowrap hover:bg-white hover:text-black transition-all duration-300 shrink-0"
                >
                  View all Services <FaArrowRight aria-hidden="true" className="text-[12px]" />
                </Link>
              </div>
            )}

            <div className="grid lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-4 sm:gap-6 lg:gap-14 flex-1">

              {/* LEFT: service list — laptop/desktop only (no numbers).
                  Inactive steps are dimmed to 0.52 (not lower) so their text keeps WCAG AA contrast. */}
              <div className="hidden lg:flex flex-col justify-start pt-1">
                {services.map((s, j) => (
                  <div key={s.number} className="mb-8 flex items-center gap-3 transition-opacity duration-300" style={{ opacity: j === i ? 1 : 0.52 }}>
                    <span className="text-[12px] xl:text-[12.5px] font-semibold tracking-[0.14em] uppercase leading-snug" style={{ color: "rgba(255,255,255,0.9)" }}>
                      {s.title}
                    </span>
                  </div>
                ))}
                <div className="mt-auto hidden lg:block w-28 opacity-[0.12]">
                  <svg viewBox="0 0 170 190" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M18 20 L68 72 L18 124"  stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M56 20 L106 72 L56 124" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M72 66 L122 118 L72 170"  stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M110 66 L160 118 L110 170" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* RIGHT: content */}
              <div>
                <div ref={(el) => (titleRefs.current[i] = el)} className="flex items-start justify-between gap-6 mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="font-bold text-white leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, calc(2.6vw + 18px), 60px)" }}>
                    {svc.title}
                  </h3>
                  <Link href={svc.href} className="hidden sm:flex items-center gap-1.5 text-white/60 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors shrink-0 mt-3 group">
                    <span className="group-hover:text-white transition-colors">+</span>&nbsp;KNOW MORE<span className="sr-only"> about {svc.title}</span>
                  </Link>
                </div>

                <p ref={(el) => (descRefs.current[i] = el)} className="text-white/60 text-[15px] lg:text-[16px] leading-relaxed max-w-xl mb-4 sm:mb-6 lg:mb-10">
                  {svc.description}
                </p>

                <div className="border-t border-white/8" />

                {svc.items.map((item, j) => (
                  <div key={j} ref={setItem(i, j)} className="flex items-center py-3 sm:py-4 lg:py-5 border-b border-white/8 cursor-default group/item">
                    <span className="text-white/75 text-[15px] sm:text-[16px] font-medium group-hover/item:text-white transition-colors duration-200">{item}</span>
                  </div>
                ))}

                <Link href={svc.href} className="sm:hidden inline-flex items-center gap-1.5 min-h-11 mt-2 text-white/70 hover:text-white text-[12px] font-bold tracking-[0.2em] uppercase transition-colors">
                  + KNOW MORE<span className="sr-only"> about {svc.title}</span>
                </Link>
              </div>
            </div>
          </div>{/* end flex-col */}
        </div>
      ))}
    </div>
  );
}
