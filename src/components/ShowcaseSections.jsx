"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const SLIDES = [
  {
    word : "Design",
    video: "/video/all/ivoniz-pvt-ltd-butterfly.mp4",
    desc : "Intelligent design is the essence of nature;\nthat's our inspiration in crafting tomorrow's tech realm.",
    href : "/services/ui-ux-design",
    vPos : { top: "30%", right: "20vw", transform: "translateY(-50%)" },
  },
  {
    word : "Build",
    video: "/video/all/ivoniz-pvt-ltd-build.mp4",
    desc : "Constantly adopting cutting-edge technology\nfor your enterprise to harness its endless\npossibilities and leave a global imprint.",
    href : "/services/web-development",
    vPos : { top: "40%", right: "54vw", transform: "translateY(-50%)" },
  },
  {
    word : "Market",
    video: "/video/all/ivoniz-pvt-ltd-market.mp4",
    desc : "Experts in solving the WHY, WHERE, and HOW\nof propelling your business to new frontiers.",
    href : "/services/digital-marketing",
    vPos : { top: "38%", right: "22vw", transform: "translateY(-50%)" },
  },
];

const SCROLL_PX = 3000;

export default function ShowcaseSections() {
  const panelRef = useRef(null);
  const vidRef   = useRef([]);
  const charRef  = useRef([]);
  const descRef  = useRef([]);
  const ctaRef   = useRef([]);
  const barRef   = useRef(null);

  const setChar = (si, ci) => el => {
    if (!charRef.current[si]) charRef.current[si] = [];
    charRef.current[si][ci] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panel = panelRef.current;
    if (!panel) return;

    /* guard: only critical refs */
    for (let i = 0; i < 3; i++) {
      if (!vidRef.current[i] || !descRef.current[i]) return;
    }

    const v   = vidRef.current;
    const c   = charRef.current;
    const d   = descRef.current;
    const cta = ctaRef.current;

    /* ── initial states ─────────────────────────────────── */
    gsap.set(v[0], { opacity: 1, scale: 1 });
    gsap.set([v[1], v[2]], { opacity: 0, scale: 0.92 });

    if (c[0]) gsap.set(c[0], { y: 0,  opacity: 1 });
    if (c[1]) gsap.set(c[1], { y: 70, opacity: 0 });
    if (c[2]) gsap.set(c[2], { y: 70, opacity: 0 });

    gsap.set([d[0], cta[0]], { opacity: 1, y: 0 });
    gsap.set([d[1], cta[1]], { opacity: 0, y: 28 });
    gsap.set([d[2], cta[2]], { opacity: 0, y: 28 });

    if (barRef.current) gsap.set(barRef.current, { scaleX: 0 });

    /* ── timeline ───────────────────────────────────────── */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger      : panel,
        pin          : true,
        anticipatePin: 1,
        start        : "top top",
        end          : `+=${SCROLL_PX}`,
        scrub        : 0.8,
        onUpdate(self) {
          if (barRef.current)
            gsap.set(barRef.current, { scaleX: self.progress });
        },
      },
    });

    const cross = (A, B, at) => {
      const cA = c[A] || [];
      const cB = c[B] || [];

      tl.to(v[A], { opacity: 0, scale: 1.08, ease: "none", duration: 0.40 }, at);
      tl.fromTo(v[B], { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, ease: "none", duration: 0.40 }, at);

      if (cA.length) tl.to(cA, { y: -60, opacity: 0, ease: "none", duration: 0.18, stagger: { each: 0.02, from: "end" } }, at);
      if (cB.length) tl.fromTo(cB, { y: 70, opacity: 0 }, { y: 0, opacity: 1, ease: "none", duration: 0.20, stagger: { each: 0.025, from: "start" } }, at + 0.16);

      tl.to([d[A], cta[A]], { opacity: 0, y: -22, ease: "none", duration: 0.22 }, at + 0.04);
      tl.fromTo([d[B], cta[B]], { opacity: 0, y: 26 }, { opacity: 1, y: 0, ease: "none", duration: 0.22 }, at + 0.22);
    };

    cross(0, 1, 0.80);
    cross(1, 2, 2.00);
    tl.addLabel("end", 3.0);

    return () => { tl.scrollTrigger?.kill(); tl.kill(); };
  }, []);

  return (
    <div
      ref={panelRef}
      style={{ height: "100vh", background: "#000", overflow: "hidden", position: "relative" }}
    >
        {/* Videos */}
        {SLIDES.map((slide, i) => (
          <div key={`v${i}`} className="absolute pointer-events-none select-none"
            style={{ ...slide.vPos, width: "clamp(120px,20vw,280px)", zIndex: 1 }}
          >
            <div ref={el => (vidRef.current[i] = el)}>
              <video autoPlay muted loop playsInline
                style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "screen" }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}

        {/* Text blocks — fully centred */}
        {SLIDES.map((slide, i) => (
          <div key={`t${i}`} className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 10, padding: "0 clamp(20px,6vw,80px)" }}
          >
          <div className="flex flex-col items-center text-center w-full max-w-2xl">
            <h2 className="leading-none"
              style={{
                fontFamily   : "var(--font-open-sans), 'Open Sans', sans-serif",
                fontSize     : "clamp(80px,15vw,210px)",
                fontWeight   : 300,
                letterSpacing: "-0.03em",
                color                : "rgba(255,255,255,0.90)",
                marginBottom         : "clamp(16px,2vw,26px)",
                overflow             : "visible",
              }}
            >
              {slide.word.split("").map((ch, j) => (
                <span key={j} ref={setChar(i, j)} style={{ display: "inline-block" }}>{ch}</span>
              ))}
            </h2>

            <p ref={el => (descRef.current[i] = el)}
              style={{
                fontSize    : "clamp(15px,1.25vw,20px)",
                fontWeight  : 400,
                lineHeight  : 1.7,
                color       : "rgba(255,255,255,0.80)",
                maxWidth    : "520px",
                marginBottom: "clamp(24px,3vw,40px)",
                whiteSpace  : "pre-line",
              }}
            >
              {slide.desc}
            </p>

            <Link
              ref={el => (ctaRef.current[i] = el)}
              href={slide.href}
              className="group inline-flex items-center gap-2.5"
              style={{
                color         : "rgba(255,255,255,0.70)",
                fontSize      : "15px",
                fontWeight    : 400,
                textDecoration: "none",
                transition    : "color .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
            >
              Learn more
              <FaArrowRight className="inline-block group-hover:translate-x-1 transition-transform duration-200 text-[12px]" />
            </Link>
          </div>
          </div>
        ))}


    </div>
  );
}
