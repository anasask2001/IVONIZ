"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

/*
 * WORKS GRID — gradient + typography cards, no fake screenshots.
 * GSAP entrance stagger + hover lift, consistent with SelectedWorks.
 */
export default function WorksGrid({ works }) {
  const sectionRef = useRef(null);
  const cardRefs   = useRef([]);

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
  }, [works]);

  const handleEnter = (i) => () => {
    gsap.to(cardRefs.current[i], { y: -6, duration: 0.35, ease: "power2.out" });
  };
  const handleLeave = (i) => () => {
    gsap.to(cardRefs.current[i], { y: 0, duration: 0.35, ease: "power2.out" });
  };

  return (
    <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {works.map((work, i) => (
        <a
          key={work.title}
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (cardRefs.current[i] = el)}
          className="group block rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08)" }}
        >
          <div
            className="relative flex flex-col justify-end p-5"
            style={{ aspectRatio: "16/10", background: work.gradient }}
          >
            <span
              className="absolute top-4 right-4 flex items-center gap-1 text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Visit site <FiArrowUpRight className="text-[13px]" />
            </span>
            <p className="text-white/55 text-[10px] font-semibold tracking-[0.16em] uppercase mb-1.5">
              {work.category}
            </p>
            <h3 className="text-white font-bold leading-tight text-lg">
              {work.title}
            </h3>
            <p className="text-white/45 text-[12px] mt-1">{work.location}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
