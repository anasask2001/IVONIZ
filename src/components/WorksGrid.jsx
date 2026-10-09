"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

const FILTERS = [
  { value: "static", label: "Static" },
  { value: "semi-dynamic", label: "Semi Dynamic" },
  { value: "fully-dynamic", label: "Fully Dynamic" },
];

/*
 * WORKS GRID — real client site screenshots with a gradient fallback
 * for entries with no image yet. GSAP entrance stagger + hover lift,
 * consistent with SelectedWorks.
 */
export default function WorksGrid({ works }) {
  const sectionRef = useRef(null);
  const cardRefs   = useRef([]);
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredWorks = useMemo(
    () => (activeFilter ? works.filter((w) => w.type === activeFilter) : works),
    [works, activeFilter]
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: (i % 3) * 0.08,
            scrollTrigger: { trigger: card, start: "top 92%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredWorks]);

  const handleEnter = (i) => () => {
    gsap.to(cardRefs.current[i], { y: -6, duration: 0.35, ease: "power2.out" });
  };
  const handleLeave = (i) => () => {
    gsap.to(cardRefs.current[i], { y: 0, duration: 0.35, ease: "power2.out" });
  };

  return (
    <div>
      {/* Filter by build type */}
      <div className="flex flex-wrap items-center gap-3 mb-8" role="group" aria-label="Filter works by build type">
        {FILTERS.map((f) => {
          const active = activeFilter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveFilter(active ? null : f.value)}
              className={`h-10 px-5 rounded-full text-sm font-semibold tracking-wide transition-colors border ${
                active
                  ? "bg-black text-white border-black"
                  : "bg-white text-black/60 border-black/15 hover:border-black/40 hover:text-black"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredWorks.map((work, i) => (
        <a
          key={work.title}
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${work.title} — visit site (opens in a new tab)`}
          ref={(el) => (cardRefs.current[i] = el)}
          className="group block rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08)" }}
        >
          <div
            className="relative flex flex-col justify-end p-5 overflow-hidden"
            style={{ aspectRatio: "16/10", background: work.gradient }}
          >
            {work.image && (
              <Image
                src={work.image}
                alt={`${work.title} website screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Bottom-up dark gradient so the title/category text stays readable over any screenshot */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.8) 100%)" }}
            />
            <span
              aria-hidden="true"
              className="absolute z-10 top-4 right-4 flex items-center gap-1 text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Visit site <FiArrowUpRight aria-hidden="true" className="text-[13px]" />
            </span>
            <p className="relative z-10 text-white/55 text-[10px] font-semibold tracking-[0.16em] uppercase mb-1.5">
              {work.category}
            </p>
            <h3 className="relative z-10 text-white font-bold leading-tight text-lg">
              {work.title}
            </h3>
            <p className="relative z-10 text-white/60 text-[12px] mt-1">{work.location}</p>
          </div>
        </a>
      ))}
      </div>
    </div>
  );
}
