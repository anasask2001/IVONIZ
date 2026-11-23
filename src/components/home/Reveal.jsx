"use client";

import { useEffect, useRef } from "react";

/* Fade/slide-in when scrolled into view (once). IntersectionObserver + CSS
   (.reveal in globals.css) instead of framer-motion's whileInView.
   y / scale / delay mirror the old motion props. */
export default function Reveal({ children, className = "", style, y = 14, scale = 1, delay = 0, margin = "-60px" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.setAttribute("data-shown", "");
          io.disconnect();
        }
      },
      { rootMargin: `0px 0px ${margin} 0px` }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--ry": `${y}px`, "--rs": scale, "--rd": `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
