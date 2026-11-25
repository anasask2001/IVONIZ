"use client";
import { useEffect, useRef } from "react";
import { preload } from "react-dom";
import gsap from "gsap";

/*
 * CINEMATIC HERO
 * ─────────────────────────────────────────────────────────
 * • Letterbox bars close in on load (no scroll-out widening: it left a blank band)
 * • Video: slow continuous Ken Burns zoom (breathing, 18s yoyo)
 * • Teal/orange color-grade vignette (classic film grading)
 * • Title: word-by-word clip-path reveal, like title cards
 */

const TITLE_WORDS = ["Design.", "Build.", "Market."];

/* Speed: the hero background was an 841 KB animated WebP and the page's LCP.
   First paint uses an 11 KB still (its first frame, preloaded at high priority);
   the animated version swaps in once the page has loaded and the browser is idle. */
const HERO_STILL = "/about-assets/about-hero-still.webp";
const HERO_ANIMATED = "/about-assets/about-hero.webp";
export default function AboutHero() {
  preload(HERO_STILL, { as: "image", fetchPriority: "high" });
  const sectionRef = useRef(null);
  const videoRef    = useRef(null);
  const topBarRef   = useRef(null);
  const bottomBarRef= useRef(null);
  const wordRefs    = useRef([]);
  const labelRef    = useRef(null);
  const subRef      = useRef(null);

  /* swap in the animated background after load, when idle */
  useEffect(() => {
    let cancelled = false;
    const swap = () => {
      const img = new Image();
      img.onload = () => { if (!cancelled && videoRef.current) videoRef.current.style.backgroundImage = `url('${HERO_ANIMATED}')`; };
      img.src = HERO_ANIMATED;
    };
    const idle = (cb) => ("requestIdleCallback" in window ? window.requestIdleCallback(cb, { timeout: 3000 }) : setTimeout(cb, 1200));
    const start = () => idle(swap);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => { cancelled = true; window.removeEventListener("load", start); };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── opening sequence ── */
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo([topBarRef.current, bottomBarRef.current],
        { height: "14vh" },
        { height: "6vh", duration: 1.3, ease: "power3.inOut" }
      );


      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(el,
          { clipPath: "inset(0 0 100% 0)", y: 24 },
          { clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.85, ease: "power4.out" },
          0.7 + i * 0.22
        );
      });


      /* ── slow Ken Burns breathing zoom — runs forever ── */
      gsap.to(videoRef.current, {
        scale: 1.16,
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* (No scroll-tied letterbox widening: it grew a solid black band at the
         bottom while the hero scrolled out, which read as an empty screen.) */
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden min-h-[86svh] sm:min-h-[90svh] lg:min-h-screen"
    >
      {/* Background GIF — Ken Burns zoom */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div
          ref={videoRef}
          className="w-full h-full"
          style={{
            backgroundImage: `url('${HERO_STILL}')`,
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
            "radial-gradient(ellipse 80% 75% at 50% 45%, transparent 0%, rgba(0,0,0,0.45) 72%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Letterbox bars */}
      <div ref={topBarRef}    className="absolute top-0 left-0 right-0 bg-black" style={{ zIndex: 3, height: "14vh" }} />
      <div ref={bottomBarRef} className="absolute bottom-0 left-0 right-0 bg-black" style={{ zIndex: 3, height: "14vh" }} />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 pt-16 min-h-[86svh] sm:min-h-[90svh] lg:min-h-screen"
        style={{ zIndex: 2 }}
      >
        <p
          ref={labelRef}
          className="hero-rise text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-6"
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

        {/* CSS-only entrance (transform, never hidden): this paragraph is the LCP
            element, and the old GSAP opacity fade held it back until hydration. */}
        <div ref={subRef} className="hero-rise" style={{ animationDelay: "0.9s" }}>
          <p className="text-white/55 text-[16px] sm:text-[18px] leading-relaxed max-w-xl">
            At Ivoniz, we believe great businesses need more than just a website. They need a complete
            digital ecosystem that attracts customers, builds trust, and drives growth.
          </p>
        </div>
      </div>
    </section>
  );
}
