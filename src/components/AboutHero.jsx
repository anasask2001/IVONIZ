"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * CINEMATIC HERO
 * ─────────────────────────────────────────────────────────
 * • Letterbox bars close in on load, widen again on scroll-out
 * • Video: slow continuous Ken Burns zoom (breathing, 18s yoyo)
 * • Teal/orange color-grade vignette (classic film grading)
 * • Title: word-by-word clip-path reveal, like title cards
 */

const TITLE_WORDS = ["Design.", "Build.", "Market."];

export default function AboutHero() {
  const sectionRef = useRef(null);
  const videoRef    = useRef(null);
  const topBarRef   = useRef(null);
  const bottomBarRef= useRef(null);
  const wordRefs    = useRef([]);
  const labelRef    = useRef(null);
  const subRef      = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* ── opening sequence ── */
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo([topBarRef.current, bottomBarRef.current],
        { height: "14vh" },
        { height: "6vh", duration: 1.3, ease: "power3.inOut" }
      );

      tl.fromTo(labelRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, 0.5);

      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(el,
          { clipPath: "inset(0 0 100% 0)", y: 24 },
          { clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.85, ease: "power4.out" },
          0.7 + i * 0.22
        );
      });

      tl.fromTo(subRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, "+=0.05");

      /* ── slow Ken Burns breathing zoom — runs forever ── */
      gsap.to(videoRef.current, {
        scale: 1.16,
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ── scroll-tied: letterbox bars widen as the scene exits ── */
      gsap.fromTo([topBarRef.current, bottomBarRef.current],
        { height: "6vh" },
        {
          height: "16vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background GIF — Ken Burns zoom */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div
          ref={videoRef}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/about-assets/about-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        />
      </div>

      {/* Teal/orange cinematic color grade */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(160deg, rgba(13,42,48,0.55) 0%, transparent 45%, rgba(64,32,12,0.45) 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Vignette — dark at edges, focused center */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.93) 100%)",
        }}
      />

      {/* Letterbox bars */}
      <div ref={topBarRef}    className="absolute top-0 left-0 right-0 bg-black" style={{ zIndex: 3, height: "14vh" }} />
      <div ref={bottomBarRef} className="absolute bottom-0 left-0 right-0 bg-black" style={{ zIndex: 3, height: "14vh" }} />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 2, minHeight: "100vh" }}
      >
        <p
          ref={labelRef}
          className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6"
          style={{ opacity: 0 }}
        >
          About Ivoniz
        </p>

        <h1
          className="font-bold leading-[1.04] mb-8 flex flex-col items-center"
          style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
        >
          {TITLE_WORDS.map((w, i) => (
            <span
              key={w}
              ref={(el) => (wordRefs.current[i] = el)}
              style={{ display: "inline-block" }}
            >
              {w}
            </span>
          ))}
        </h1>

        <div ref={subRef} style={{ opacity: 0 }}>
          <p className="text-white/55 text-[16px] sm:text-[18px] leading-relaxed max-w-xl">
            At Ivoniz, we believe great businesses need more than just a website. They need a complete
            digital ecosystem that attracts customers, builds trust, and drives growth.
          </p>
        </div>
      </div>
    </section>
  );
}
