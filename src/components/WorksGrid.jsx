"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useRevealChildren from "./home/useRevealChildren";
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
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredWorks = useMemo(
    () => (activeFilter ? works.filter((w) => w.type === activeFilter) : works),
    [works, activeFilter]
  );

  /* CSS fade-in (no GSAP). The first row is shown straight away so the
     visible cards paint without waiting for JavaScript. */
  useRevealChildren(sectionRef, [filteredWorks]);

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
        <Link
          key={work.title}
          href={`/works/${work.slug}`}
          className={`${i >= 3 ? "reveal " : ""}group block rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-transform duration-300`}
          style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08)", "--ry": "28px", "--rd": `${(i % 3) * 0.08}s` }}
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
                // First row is above the fold (and the LCP image): load it eagerly.
                {...(i < 2 ? { priority: true } : { loading: i < 3 ? "eager" : "lazy" })}
                fetchPriority={i === 0 ? "high" : undefined}
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
              View project <FiArrowUpRight aria-hidden="true" className="text-[13px]" />
            </span>
            <p className="relative z-10 text-white/55 text-[10px] font-semibold tracking-[0.16em] uppercase mb-1.5">
              {work.category}
            </p>
            <h3 className="relative z-10 text-white font-bold leading-tight text-lg">
              {work.title}
            </h3>
            {work.location && <p className="relative z-10 text-white/60 text-[12px] mt-1">{work.location}</p>}
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}
