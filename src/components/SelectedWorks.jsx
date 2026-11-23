"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

/*
 * SELECTED WORKS — simple, editorial project grid
 * ─────────────────────────────────────────────────────
 * Real client sites shown as clean landscape screenshots,
 * with name, industry and location set quietly underneath.
 * Each card opens the live website.
 */
export default function SelectedWorks({ works }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const items = works.slice(0, 4);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: (i % 2) * 0.1,
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [works]);

  return (
    <div ref={sectionRef} className="grid sm:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-10 sm:gap-y-14">
      {items.map((work, i) => (
        <a
          key={work.url}
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (cardRefs.current[i] = el)}
          className="group block"
        ><span className="sr-only">Opens in a new tab: </span>
          {/* screenshot */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white border border-black/8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-500 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
            <Image
              src={work.image}
              alt={`${work.title} website designed by Ivoniz`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          {/* meta */}
          <div className="mt-5 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-black leading-snug">
                {work.title}
              </h3>
              <p className="mt-1 text-[14px] text-black/55">
                {work.category}
                <span className="mx-2 text-black/25" aria-hidden="true">·</span>
                {work.location}
              </p>
            </div>
            <span className="shrink-0 mt-1 w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-black/70 transition-colors duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white">
              <FiArrowUpRight aria-hidden="true" className="text-[16px]" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
