/*
 * Decorative + explanatory graphics for /custom-website-vs-wordpress.
 * Pure JSX/SVG/CSS (no image files), so they stay sharp, light and
 * have no layout shift. Colour key used across the page:
 *   WordPress → blue  (#2563eb)
 *   Custom    → violet (#7c3aed)
 */

export const WP = "#2563eb";
export const CUSTOM = "#7c3aed";

/* ── HERO: two browser windows facing off ─────────────────────── */
export function HeroVersus() {
  return (
    <div
      role="img"
      aria-label="Custom website development compared with WordPress development"
      className="relative w-full max-w-[560px] mx-auto aspect-[5/4] select-none"
    >
      {/* soft glows */}
      <div className="absolute -left-6 top-10 w-56 h-56 rounded-full blur-3xl opacity-40" style={{ background: WP }} />
      <div className="absolute -right-6 bottom-6 w-56 h-56 rounded-full blur-3xl opacity-40" style={{ background: CUSTOM }} />

      {/* WordPress window */}
      <div className="absolute left-0 top-0 w-[64%] rounded-xl overflow-hidden border border-white/15 bg-[#0f1115] shadow-2xl -rotate-3">
        <WindowBar label="yourbusiness.com/wp-admin" />
        <div className="flex h-[170px] sm:h-[210px]">
          <div className="w-[34%] bg-[#1d2327] p-2.5 space-y-1.5">
            {["Dashboard", "Posts", "Pages", "Plugins", "WooCommerce"].map((t, i) => (
              <div
                key={t}
                className="text-[9px] sm:text-[10px] px-2 py-1 rounded text-white/70 flex items-center justify-between"
                style={i === 3 ? { background: WP, color: "#fff" } : undefined}
              >
                {t}
                {i === 3 && <span className="text-[8px] bg-white text-blue-700 font-semibold rounded px-1">12</span>}
              </div>
            ))}
          </div>
          <div className="flex-1 p-3 space-y-2 bg-[#f6f7f7]">
            <div className="h-2.5 w-2/3 rounded bg-black/15" />
            <div className="grid grid-cols-2 gap-1.5">
              {["SEO", "Forms", "Cache", "Store"].map((p) => (
                <div key={p} className="rounded border border-black/10 bg-white p-1.5">
                  <div className="w-3 h-3 rounded-sm mb-1" style={{ background: WP }} />
                  <div className="text-[8px] sm:text-[9px] font-semibold text-black/60">{p}</div>
                </div>
              ))}
            </div>
            <div className="h-2 w-1/2 rounded bg-black/10" />
          </div>
        </div>
      </div>

      {/* Custom window */}
      <div className="absolute right-0 bottom-0 w-[64%] rounded-xl overflow-hidden border border-white/15 bg-[#0d0b14] shadow-2xl rotate-2">
        <WindowBar label="app/page.jsx" />
        <pre className="h-[170px] sm:h-[210px] m-0 p-3 text-[9px] sm:text-[11px] leading-[1.7] font-mono text-white/70 overflow-hidden">
          <span style={{ color: "#c4b5fd" }}>export default</span> <span style={{ color: "#93c5fd" }}>function</span> Home() {"{"}{"\n"}
          {"  "}<span style={{ color: "#c4b5fd" }}>const</span> data = <span style={{ color: "#93c5fd" }}>useCatalog</span>();{"\n"}
          {"  "}<span style={{ color: "#c4b5fd" }}>return</span> ({"\n"}
          {"    "}<span style={{ color: "#86efac" }}>&lt;Store</span>{"\n"}
          {"      "}items={"{"}data{"}"}{"\n"}
          {"      "}checkout=<span style={{ color: "#fcd34d" }}>&quot;razorpay&quot;</span>{"\n"}
          {"      "}lang=<span style={{ color: "#fcd34d" }}>&quot;en | ar&quot;</span>{"\n"}
          {"    "}<span style={{ color: "#86efac" }}>/&gt;</span>{"\n"}
          {"  "});{"\n"}
          {"}"}
        </pre>
      </div>

      {/* VS badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center font-black text-xl sm:text-2xl shadow-[0_0_0_8px_rgba(255,255,255,0.08)]">
        VS
      </div>

      {/* floating chips */}
      <span className="absolute left-[4%] bottom-[14%] text-[10px] font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: WP }}>
        Launch in weeks
      </span>
      <span className="absolute right-[6%] top-[8%] text-[10px] font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: CUSTOM }}>
        Built for your workflow
      </span>
    </div>
  );
}

function WindowBar({ label }) {
  return (
    <div className="flex items-center gap-1.5 px-3 h-7 bg-white/5 border-b border-white/10">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
      <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
      <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      <span className="ml-2 text-[9px] text-white/55 truncate">{label}</span>
    </div>
  );
}

/* ── SCORECARD: paired bar meters ─────────────────────────────── */
const SCORES = [
  { label: "Launch speed", wp: 5, custom: 2 },
  { label: "Upfront affordability", wp: 5, custom: 2 },
  { label: "Ease of editing", wp: 5, custom: 4 },
  { label: "Performance ceiling", wp: 3, custom: 5 },
  { label: "Feature flexibility", wp: 3, custom: 5 },
  { label: "Scalability", wp: 3, custom: 5 },
];

export function Scorecard() {
  return (
    <figure className="rounded-2xl border border-black/8 bg-white p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <figcaption className="text-[13px] font-semibold text-black/70">Our scorecard (out of 5)</figcaption>
        <Legend />
      </div>
      <dl className="space-y-4">
        {SCORES.map((s) => (
          <div key={s.label} className="grid sm:grid-cols-[180px_1fr] gap-x-6 gap-y-1.5 items-center">
            <dt className="text-[14px] text-black/75">{s.label}</dt>
            <dd className="space-y-1.5 m-0">
              <Bar value={s.wp} color={WP} label={`WordPress ${s.wp} of 5`} />
              <Bar value={s.custom} color={CUSTOM} label={`Custom ${s.custom} of 5`} />
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

function Bar({ value, color, label }) {
  return (
    <div className="flex items-center gap-2" aria-label={label}>
      <div className="flex-1 h-2 rounded-full bg-black/6 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value * 20}%`, background: color }} />
      </div>
      <span className="w-4 text-[11px] font-semibold text-black/60 tabular-nums">{value}</span>
    </div>
  );
}

export function Legend({ dark = false }) {
  const txt = dark ? "text-white/70" : "text-black/60";
  return (
    <div className={`flex items-center gap-4 text-[12px] ${txt}`}>
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full" style={{ background: WP }} />WordPress</span>
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full" style={{ background: CUSTOM }} />Custom</span>
    </div>
  );
}

/* ── STACK DIAGRAM: how each one is put together ──────────────── */
export function StackDiagram() {
  const wp = ["Theme + page builder", "Plugins (SEO, forms, store)", "WordPress core (PHP)", "MySQL database", "PHP hosting"];
  const custom = ["React / Next.js front end", "Your features, written for you", "API (Node.js / Laravel)", "Database or headless CMS", "Cloud + CDN / edge"];
  return (
    <figure
      className="grid sm:grid-cols-2 gap-5"
      role="img"
      aria-label="Architecture of a WordPress website compared with a custom website built with React, Next.js and Node.js"
    >
      <Stack title="WordPress" color={WP} layers={wp} />
      <Stack title="Custom website" color={CUSTOM} layers={custom} />
    </figure>
  );
}

function Stack({ title, color, layers }) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white p-5">
      <p className="text-[12px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color }}>{title}</p>
      <div className="space-y-2">
        {layers.map((l, i) => (
          <div
            key={l}
            className="rounded-lg px-4 py-2.5 text-[13px] font-medium"
            style={{
              background: `color-mix(in srgb, ${color} ${18 - i * 3}%, white)`,
              color: "#111",
              marginInline: `${i * 6}px`,
            }}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CORE WEB VITALS: threshold gauges ────────────────────────── */
const VITALS = [
  { key: "LCP", name: "Largest Contentful Paint", good: "≤ 2.5 s", what: "Loading" },
  { key: "INP", name: "Interaction to Next Paint", good: "≤ 200 ms", what: "Responsiveness" },
  { key: "CLS", name: "Cumulative Layout Shift", good: "≤ 0.1", what: "Visual stability" },
];

export function VitalsGauges() {
  return (
    <figure
      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      role="img"
      aria-label="Google Core Web Vitals thresholds for a fast business website: LCP, INP and CLS"
    >
      {VITALS.map((v) => (
        <div key={v.key} className="rounded-2xl border border-black/8 bg-white p-5 text-center">
          <svg viewBox="0 0 120 70" className="w-full max-w-[150px] mx-auto" aria-hidden="true">
            {/* good / needs improvement / poor bands */}
            <path d="M10 60 A50 50 0 0 1 35 16.7" fill="none" stroke="#16a34a" strokeWidth="10" strokeLinecap="round" />
            <path d="M39 14.5 A50 50 0 0 1 81 14.5" fill="none" stroke="#f59e0b" strokeWidth="10" />
            <path d="M85 16.7 A50 50 0 0 1 110 60" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
            {/* needle in the green */}
            <line x1="60" y1="60" x2="30" y2="30" stroke="#111" strokeWidth="3" strokeLinecap="round" />
            <circle cx="60" cy="60" r="5" fill="#111" />
          </svg>
          <p className="mt-2 text-2xl font-black tracking-tight">{v.key}</p>
          <p className="text-[12px] text-black/55">{v.name}</p>
          <p className="mt-3 inline-block text-[12px] font-semibold text-green-700 bg-green-50 rounded-full px-3 py-1">
            {v.what}: good {v.good}
          </p>
        </div>
      ))}
    </figure>
  );
}
