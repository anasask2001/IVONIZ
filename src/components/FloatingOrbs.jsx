"use client";

/*
 * FLOATING ORBS — decorative blurred background layer (About page).
 * Slow ambient float as a pure CSS animation (.about-orb in globals.css).
 * Was GSAP + a scroll-linked parallax; the parallax was barely visible behind
 * 60–70px blurs, and dropping it removes the animation library from the page.
 */
const ORBS = [
  { size: 420, top: "0%",  left: "-6%", color: "rgba(99,102,241,0.16)", blur: 70, x: -16, y: 28 },
  { size: 300, top: "30%", left: "85%", color: "rgba(236,72,153,0.13)", blur: 60, x: 18,  y: -24 },
  { size: 360, top: "62%", left: "-4%", color: "rgba(56,189,248,0.14)", blur: 65, x: -16, y: 28 },
  { size: 260, top: "85%", left: "78%", color: "rgba(168,85,247,0.13)", blur: 55, x: 18,  y: -24 },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
      {ORBS.map((o, i) => (
        <div
          key={i}
          className="about-orb"
          style={{
            position: "absolute",
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            borderRadius: "50%",
            background: o.color,
            filter: `blur(${o.blur}px)`,
            "--ox": `${o.x}px`,
            "--oy": `${o.y}px`,
            animationDuration: `${6 + i}s`,
          }}
        />
      ))}
    </div>
  );
}
