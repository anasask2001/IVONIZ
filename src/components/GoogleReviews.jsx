"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Static reviews — no live Google API on static hosting */
const FALLBACK = [
  { author: "Rahul Mehta",   quote: "Ivoniz delivered an outstanding mobile app for our business. The team was professional, creative, and delivered exactly what we envisioned — on time and within budget.", company: "TechCorp India",   rating: 5 },
  { author: "Sarah Johnson", quote: "Working with Ivoniz was a game changer for us. They built a stunning e-commerce website that increased our online sales by 300%. Highly recommended!",                  company: "Arlocks Fashion", rating: 5 },
];

function initials(name) {
  return name?.trim().charAt(0).toUpperCase() || "?";
}

function Stars({ rating, size = 12 }) {
  if (!rating) return null;
  return (
    <div className="flex gap-0.5" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width={size} height={size}
          fill={i < Math.round(rating) ? "#f5b400" : "rgba(0,0,0,0.12)"}>
          <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 14.9 4.4 18.1l1.4-6.3L1 7.5l6.4-.6z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ review, broken, onError, size = 36 }) {
  if (review.photo && !broken) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={review.photo}
        alt={review.author}
        referrerPolicy="no-referrer"
        onError={onError}
        style={{ width: size, height: size }}
        className="rounded-full object-cover shrink-0"
      />
    );
  }
  return (
    <div
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      className="rounded-full bg-black flex items-center justify-center text-white font-bold shrink-0"
    >
      {initials(review.author)}
    </div>
  );
}

/* how many small cards visible at once */
const VISIBLE = 3;

export default function GoogleReviews() {
  const [offset, setOffset] = useState(0);
  const [broken, setBroken] = useState({});
  const [paused, setPaused] = useState(false);

  /* auto-advance the whole strip every 3.5s, paused on hover */
  useEffect(() => {
    if (paused || FALLBACK.length <= VISIBLE) return;
    const id = setInterval(() => setOffset((o) => (o + 1) % FALLBACK.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  const ordered = Array.from({ length: Math.min(VISIBLE, FALLBACK.length) }, (_, i) =>
    FALLBACK[(offset + i) % FALLBACK.length]
  );

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Small auto-rotating cards ── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <AnimatePresence mode="popLayout">
          {ordered.map((r, i) => (
            <motion.div
              key={`${offset}-${i}-${r.author}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-black/8 rounded-xl p-4"
            >
              {r.rating ? <div className="mb-2.5"><Stars rating={r.rating} /></div> : null}

              <p className="text-black/65 text-[13px] leading-relaxed mb-3 line-clamp-4">
                {r.quote}
              </p>

              <div className="flex items-center gap-2.5">
                <Avatar review={r} broken={broken[r.author]} size={32}
                  onError={() => setBroken((p) => ({ ...p, [r.author]: true }))} />
                <div>
                  <p className="font-semibold text-black text-[13px] leading-tight">{r.author}</p>
                  <p className="text-[11px] text-black/40">{r.company || r.time || "Google review"}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* progress dots */}
      {FALLBACK.length > VISIBLE && (
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {FALLBACK.map((_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === offset ? "18px" : "6px",
                background: i === offset ? "#000" : "rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
