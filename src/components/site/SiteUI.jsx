/*
 * Shared design pieces for the service pages, mirroring the homepage:
 * "▶ LABEL" eyebrows, light Open Sans headings with outlined words, the
 * faint 72px grid, the hand-drawn petal sketch from the Ivoniz mark, and
 * the glass card style from the homepage stats row.
 * Server-safe (no client hooks), so pages can stay server components.
 */

export const PAD = "px-4 sm:px-6 lg:px-10 xl:px-16";
export const OPEN_SANS = "var(--font-open-sans), 'Open Sans', sans-serif";
export const WA_NUMBER = "919645760023";

/* Pre-filled WhatsApp link */
export const waLink = (message) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

/* Glass card style from the homepage stats row */
export const GLASS = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "16px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
};

/* Outlined-text style, as on "develop" in the homepage hero */
export const OUTLINE = {
  WebkitTextStroke: "1.5px rgba(217,217,217,0.45)",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

/* "▶ LABEL" eyebrow */
export function Label({ children, dark = true }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className={`text-[10px] ${dark ? "text-white" : "text-black"}`} style={{ lineHeight: 1 }} aria-hidden="true">▶</span>
      <span className={`text-[11px] font-bold tracking-[0.22em] uppercase ${dark ? "text-white/60" : "text-black/60"}`}>{children}</span>
    </div>
  );
}

/* Light Open Sans section heading */
export function Heading({ children, dark = true, className = "" }) {
  return (
    <h2
      className={`leading-[1.1] ${dark ? "text-white" : "text-black"} ${className}`}
      style={{ fontFamily: OPEN_SANS, fontSize: "clamp(28px, 3.6vw, 48px)", fontWeight: 300, letterSpacing: "-0.03em" }}
    >
      {children}
    </h2>
  );
}

/* Hero H1: large light type, with an optional outlined tail */
export function HeroTitle({ children, outline }) {
  return (
    <h1
      className="m-0 max-w-[1100px]"
      style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(40px, 6.4vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.03em", color: "#D9D9D9" }}
    >
      {children}
      {outline && <> <span style={OUTLINE}>{outline}</span></>}
    </h1>
  );
}

/* Faint 72px grid */
export function Grid({ dark = true }) {
  const c = dark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.035)";
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: `linear-gradient(${c} 1px,transparent 1px),linear-gradient(90deg,${c} 1px,transparent 1px)`, backgroundSize: "72px 72px" }}
      aria-hidden="true"
    />
  );
}

/* Hand-drawn petal sketch from the Ivoniz mark (same paths as the homepage About section) */
export function PetalSketch({ className = "", dark = true }) {
  const stroke = dark ? "white" : "black";
  return (
    <svg viewBox="0 0 240 240" fill="none" className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <g opacity={dark ? 0.16 : 0.1} stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {[0, 90, 180, 270].map((a) => (
          <path key={a} transform={`rotate(${a} 75 80)`} d="M 75,80 C 60,68 50,44 58,30 C 65,20 82,18 92,30 C 100,42 98,62 88,74 C 82,80 78,81 75,80 Z" />
        ))}
      </g>
      <g opacity={dark ? 0.28 : 0.16} stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {[0, 90, 180, 270].map((a) => (
          <path key={a} transform={`rotate(${a} 170 175)`} d="M 170,175 C 155,163 145,139 153,125 C 160,115 177,113 187,125 C 195,137 193,157 183,169 C 177,175 173,176 170,175 Z" />
        ))}
      </g>
    </svg>
  );
}

/* Numbered FAQ list (dark), with the visible text matching FAQPage schema */
export function FaqList({ items }) {
  return (
    <div className="border-t border-white/10">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-white/10 py-6">
          <summary className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3 className="text-[16.5px] sm:text-[18px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{f.q}</h3>
            <span className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 text-[18px] leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 text-[15px] leading-[1.75] text-white/60 pr-12">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
