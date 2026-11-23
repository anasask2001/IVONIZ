"use client";

import { useEffect, useState } from "react";

/* Rotating hero word ("Apps" → "Websites" → …). Same motion as before
   (slide out left, slide in from the right) done with CSS, so the homepage
   hero no longer needs framer-motion. The first word is in the static HTML. */
const WORDS = ["Apps", "Websites", "AI Tools", "Software"];
const STYLE = { fontSize: "clamp(76px, 11.5vw, 175px)", lineHeight: 0.87, letterSpacing: "-0.025em", color: "#D9D9D9" };

export default function HeroRotator() {
  // Running count, so every word after the very first render animates in
  // (including when the list loops back to "Apps").
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let swap;
    const id = setInterval(() => {
      setLeaving(true);
      swap = setTimeout(() => {
        setCount((c) => c + 1);
        setLeaving(false);
      }, 450);
    }, 3400);
    return () => { clearInterval(id); clearTimeout(swap); };
  }, []);

  return (
    <span className="select-none block" style={{ overflow: "hidden", lineHeight: 0.87 }}>
      <span
        key={count}
        className={`font-light block ${count ? "hero-word-in" : ""} ${leaving ? "hero-word-out" : ""}`}
        style={STYLE}
      >
        {WORDS[count % WORDS.length]}
      </span>
    </span>
  );
}
