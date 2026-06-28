"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

/*
 * SELECTED WORKS — editorial overlay cards
 * ─────────────────────────────────────────────────────
 * Full-bleed image, numbered tag, title/category revealed
 * over a bottom gradient. GSAP clip-path reveal on scroll +
 * hover zoom/tilt for a more premium, magazine-style feel.
 */
export default function SelectedWorks({ works }) {
  const sectionRef = useRef(null);
  const cardRefs    = useRef([]);
  const imgRefs     = useRef([]);

  const items = works.slice(0, 3);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { clipPath: "inset(0 0 100% 0)", opacity: 0 },
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [works]);

  const handleEnter = (i) => () => {
    gsap.to(imgRefs.current[i], { scale: 1.08, duration: 0.6, ease: "power2.out" });
  };
  const handleLeave = (i) => () => {
    gsap.to(imgRefs.current[i], { scale: 1, duration: 0.6, ease: "power2.out" });
  };

  return (
    <div ref={sectionRef} className="grid sm:grid-cols-3 gap-5">
      {items.map((work, i) => (
        <Link
          key={work.id}
          href={work.href}
          ref={(el) => (cardRefs.current[i] = el)}
          className="group relative block rounded-2xl overflow-hidden bg-black"
          style={{ aspectRatio: "4/5" }}
          onMouseEnter={handleEnter(i)}
          onMouseLeave={handleLeave(i)}
        >
          <Image
            ref={(el) => (imgRefs.current[i] = el)}
            src={work.image}
            alt={work.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
            style={{ willChange: "transform" }}
          />

          {/* bottom gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)" }}
          />

          {/* numbered tag */}
          <span
            className="absolute top-4 left-4 text-[12px] font-bold text-white/70 rounded-full w-8 h-8 flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* category badge */}
          <span
            className="absolute top-4 right-4 text-[11px] font-semibold text-white/80 uppercase tracking-wide px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
          >
            {work.category}
          </span>

          {/* title + year */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-2">
            <div>
              <h3 className="font-bold text-white text-lg leading-tight mb-1">{work.title}</h3>
              <p className="text-[12px] text-white/50">{work.year}</p>
            </div>
            <span
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/10 border border-white/20 group-hover:bg-white group-hover:text-black transition-colors"
            >
              <FiArrowUpRight className="text-[16px]" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
