"use client";

import { useRef } from "react";
import useRevealChildren from "./home/useRevealChildren";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { domainOf } from "@/lib/clients";

/*
 * SELECTED WORKS — clean project showcase
 * ─────────────────────────────────────────────────────
 * • Each screenshot sits in a minimal browser frame (dots + the site's
 *   address), so it reads instantly as a live website.
 * • Phones: a swipeable row with the next card peeking (scroll-snap),
 *   instead of four tall stacked cards (~half the scroll length).
 * • Tablet: 2 per row; desktop: all four in one compact row.
 * • Each card opens the project's case-study page.
 */
export default function SelectedWorks({ works }) {
  const sectionRef = useRef(null);

  const items = works.slice(0, 4);

  /* CSS fade-in per card (no GSAP): see useRevealChildren */
  useRevealChildren(sectionRef, [works]);

  return (
    <div
      ref={sectionRef}
      className={[
        // phones: horizontal swipe row, cards snap to the left edge, next card peeks
        "flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 -mx-4 px-4 pb-2",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        // tablet/desktop: 2 × 2 grid
        "sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-5 lg:gap-x-6 sm:gap-y-8 sm:overflow-visible sm:snap-none sm:mx-0 sm:px-0 sm:pb-0",
      ].join(" ")}
    >
      {items.map((work, i) => (
        <Link
          key={work.url}
          href={`/works/${work.slug}`}
          className="reveal group block shrink-0 w-[78%] sm:w-auto snap-start"
          style={{ "--ry": "28px", "--rd": `${(i % 4) * 0.08}s` }}
        >
          {/* screenshot in a minimal browser frame */}
          <div className="rounded-xl overflow-hidden bg-white border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-18px_rgba(0,0,0,0.18)] transition-[box-shadow,transform] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_28px_56px_-24px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3 h-7 px-3 border-b border-black/[0.06] bg-[#fbfbfb]">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-black/[0.14]" />
                <span className="w-1.5 h-1.5 rounded-full bg-black/[0.14]" />
                <span className="w-1.5 h-1.5 rounded-full bg-black/[0.14]" />
              </span>
              <span className="flex-1 truncate text-center text-[10.5px] text-black/55 tracking-wide pr-6">{domainOf(work.url)}</span>
            </div>
            <div className="relative aspect-[16/10] bg-[#f2f2f2]">
              <Image
                src={work.image}
                alt={`${work.title} website designed by Ivoniz`}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* meta */}
          <div className="mt-3 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-[15.5px] sm:text-[16px] font-semibold text-black leading-snug tracking-[-0.01em] truncate">
                {work.title}
              </h3>
              <p className="mt-0.5 text-[13px] text-black/55 truncate">
                {work.category}
                <span className="mx-2 text-black/25" aria-hidden="true">·</span>
                {work.location}
              </p>
            </div>
            <FiArrowUpRight
              aria-hidden="true"
              className="shrink-0 mt-1 text-[17px] text-black/40 transition-[transform,color] duration-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
