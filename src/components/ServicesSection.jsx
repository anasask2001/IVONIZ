"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

/*
 * SERVICES — Notebook-page effect
 * Card 0 (App Development) is visible immediately.
 * Cards 1 and 2 slide up on scroll.
 *
 * Timeline (N+1 units, 1 unit = window.innerHeight):
 *   0→1        Card 0 dwell (user reads App Development)
 *   1→2        Card 1 slides up, card 0 scales back
 *   2→3        Card 2 slides up, card 1 scales back
 *   3→N+1      Buffer
 */
export default function ServicesSection({ services }) {
  const panelRef   = useRef(null);
  const cardRefs   = useRef([]);
  const titleRefs  = useRef([]);
  const descRefs   = useRef([]);
  const itemRefs   = useRef([]);
  const progressRef= useRef(null);

  const setItem = (ci, ii) => (el) => {
    if (!itemRefs.current[ci]) itemRefs.current[ci] = [];
    itemRefs.current[ci][ii] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const N     = services.length;
    const panel = panelRef.current;
    if (!panel) return;

    /* ── initial states ─────────────────────────────────── */
    // Card 0 visible immediately, others below
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        y               : i === 0 ? "0%" : "100%",
        scale           : 1,
        zIndex          : i + 1,
        transformOrigin : "top center",
      });
    });

    // Card 0 content already visible, rest hidden
    titleRefs.current.forEach((el, i) => el && gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 36 }));
    descRefs.current.forEach((el, i)  => el && gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 26 }));
    itemRefs.current.forEach((arr, i) => arr?.forEach(el => el && gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 18 })));

    /* ── timeline ───────────────────────────────────────── */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger      : panel,
        pin          : true,
        anticipatePin: 1,
        start        : "top top",
        end          : () => `+=${(N + 1) * window.innerHeight}`,
        scrub        : 0.7,
        onUpdate(self) {
          if (progressRef.current)
            gsap.set(progressRef.current, { scaleY: self.progress });
        },
      },
    });

    /* t=0→1: card 0 dwell */
    tl.to({}, { duration: 1 }, 0);

    /* t=i→i+1: card i+1 slides up, card i scales back (starting from i=1) */
    for (let i = 1; i < N; i++) {
      const at         = i;
      const cardEl     = cardRefs.current[i];
      const prevCard   = cardRefs.current[i - 1];
      if (!cardEl) continue;

      tl.fromTo(cardEl,
        { y: "100%" },
        { y: "0%", ease: "none", duration: 1 },
        at
      );
      if (prevCard) {
        tl.fromTo(prevCard,
          { scale: 1 },
          { scale: 0.90, ease: "none", duration: 1 },
          at
        );
      }

      /* content cascade for incoming card */
      if (titleRefs.current[i]) {
        tl.fromTo(titleRefs.current[i], { opacity: 0, y: 36 }, { opacity: 1, y: 0, ease: "none", duration: 0.30 }, at + 0.28);
      }
      if (descRefs.current[i]) {
        tl.fromTo(descRefs.current[i],  { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: "none", duration: 0.28 }, at + 0.42);
      }
      (itemRefs.current[i] || []).forEach((el, j) => {
        if (!el) return;
        tl.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, ease: "none", duration: 0.22 }, at + 0.55 + j * 0.07);
      });
    }

    tl.addLabel("end", N + 1);

    return () => { tl.scrollTrigger?.kill(); tl.kill(); };
  }, [services]);

  return (
    <div
      ref={panelRef}
      style={{ height: "100vh", background: "#0a0a0a", overflow: "hidden", position: "relative" }}
    >
      {/* Scroll progress — right rail */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: "2px", background: "rgba(255,255,255,0.05)", zIndex: 30 }}>
        <div ref={progressRef} style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.35)", transformOrigin: "top", transform: "scaleY(0)" }} />
      </div>

      {/* Service cards */}
      {services.map((svc, i) => (
        <div
          key={svc.number}
          ref={(el) => (cardRefs.current[i] = el)}
          className="absolute inset-0 h-full px-4 sm:px-6 lg:px-10 xl:px-16 pt-16 sm:pt-20 lg:pt-28 pb-6 sm:pb-8 lg:pb-10"
          style={{
            background: "#0a0a0a",
            borderTop : i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
            boxShadow : i > 0 ? "0 -8px 60px rgba(0,0,0,1)" : "none",
          }}
        >
          <div className="mx-auto max-w-350 w-full h-full flex flex-col">

            {/* Section label — only on card 0 */}
            {i === 0 && (
              <div className="flex items-end justify-between gap-6 mb-4 sm:mb-6 lg:mb-8 shrink-0">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[10px] text-white" style={{ lineHeight: 1 }}>▶</span>
                    <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/40">Our Services</span>
                  </div>
                  <h2
                    className="text-white leading-tight"
                    style={{
                      fontFamily   : "var(--font-open-sans), 'Open Sans', sans-serif",
                      fontSize     : "clamp(20px, 2.8vw, 38px)",
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
                  View all Services <FaArrowRight className="text-[12px]" />
                </Link>
              </div>
            )}

            <div className="grid lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-4 sm:gap-6 lg:gap-14 flex-1">

              {/* LEFT: numbers — laptop/desktop only */}
              <div className="hidden lg:flex flex-col justify-start pt-1">
                {services.map((s, j) => (
                  <div key={s.number} className="mb-8 flex items-center gap-3" style={{ opacity: j === i ? 1 : 0.18 }}>
                    <span className="text-[16px] font-light tracking-widest" style={{ color: "rgba(255,255,255,0.85)" }}>
                      ({s.number})
                    </span>
                    <span className="hidden lg:block text-[10px] font-semibold tracking-[0.18em] uppercase truncate max-w-35" style={{ color: "rgba(255,255,255,0.22)" }}>
                      {s.title}
                    </span>
                  </div>
                ))}
                <div className="mt-auto hidden lg:block w-28 opacity-[0.12]">
                  <svg viewBox="0 0 170 190" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <h3 className="font-bold text-white leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(30px, 7vw, 80px)" }}>
                    {svc.title}
                  </h3>
                  <Link href={svc.href} className="hidden sm:flex items-center gap-1.5 text-white/40 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors shrink-0 mt-3 group">
                    <span className="group-hover:text-white transition-colors">+</span>&nbsp;KNOW MORE
                  </Link>
                </div>

                <p ref={(el) => (descRefs.current[i] = el)} className="text-white/45 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-xl mb-4 sm:mb-6 lg:mb-10">
                  {svc.description}
                </p>

                <div className="border-t border-white/8" />

                {svc.items.map((item, j) => (
                  <div key={j} ref={setItem(i, j)} className="flex items-center gap-4 py-3 sm:py-4 lg:py-5 border-b border-white/8 cursor-default group/item">
                    <span className="text-white/20 text-[13px] font-medium w-5 shrink-0">{j + 1}.</span>
                    <span className="text-white/75 text-[14px] sm:text-[16px] lg:text-[17px] font-medium group-hover/item:text-white transition-colors duration-200">{item}</span>
                  </div>
                ))}

                <Link href={svc.href} className="sm:hidden inline-flex items-center gap-1.5 mt-8 text-white/40 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">
                  + KNOW MORE
                </Link>
              </div>
            </div>
          </div>{/* end flex-col */}
        </div>
      ))}
    </div>
  );
}
