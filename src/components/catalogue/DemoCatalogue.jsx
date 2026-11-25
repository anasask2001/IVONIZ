"use client";

import { useMemo, useState } from "react";
import { FaWhatsapp, FaPlus, FaCheck, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { track } from "@/components/comparison/Interactive";
import { waLink } from "@/components/site/SiteUI";

/*
 * Live demo catalogue for /catalogue-website-development.
 * Visitors try what their own customers would get: category + size filters,
 * "price on request", a multi-product enquiry basket, and WhatsApp ordering.
 * Products are SAMPLE data (clearly labelled); the "send" step previews the
 * WhatsApp message a business would receive instead of messaging anyone.
 * Product "photos" are drawn tile patterns, so no image files are needed.
 */

const PRODUCTS = [
  { sku: "FT-6060-01", name: "Matt Stone Floor Tile", cat: "Floor tiles", size: "60 × 60 cm", finish: "Matt", pattern: "stone" },
  { sku: "FT-8080-04", name: "Glossy Marble Floor Tile", cat: "Floor tiles", size: "80 × 80 cm", finish: "Glossy", pattern: "marble" },
  { sku: "WT-3060-12", name: "Hexagon Wall Tile", cat: "Wall tiles", size: "30 × 60 cm", finish: "Satin", pattern: "hex" },
  { sku: "WT-3060-07", name: "Terrazzo Wall Tile", cat: "Wall tiles", size: "30 × 60 cm", finish: "Matt", pattern: "terrazzo" },
  { sku: "OT-6060-02", name: "Anti-skid Outdoor Tile", cat: "Outdoor", size: "60 × 60 cm", finish: "Rough", pattern: "grip" },
  { sku: "FT-6060-09", name: "Wood-look Plank Tile", cat: "Floor tiles", size: "20 × 120 cm", finish: "Matt", pattern: "wood" },
];
const CATS = ["All", "Floor tiles", "Wall tiles", "Outdoor"];

/* Tile pattern "photo" */
function Swatch({ pattern }) {
  const styles = {
    stone: { background: "radial-gradient(circle at 30% 30%, #d6d3cc, #a8a49b)" },
    marble: { background: "linear-gradient(125deg, #f4f2ee 0%, #e3e0da 40%, #bfb9af 41%, #e8e5df 43%, #f4f2ee 70%, #cfcac2 71%, #f1efea 73%)" },
    hex: {
      backgroundColor: "#cfd8dc",
      backgroundImage: "radial-gradient(circle, transparent 58%, rgba(0,0,0,0.12) 60%, transparent 62%)",
      backgroundSize: "22px 22px",
    },
    terrazzo: {
      backgroundColor: "#ece7e1",
      backgroundImage:
        "radial-gradient(circle at 20% 30%, #c98d6a 3px, transparent 4px), radial-gradient(circle at 70% 60%, #7a8b8f 3px, transparent 4px), radial-gradient(circle at 45% 80%, #2f2f2f 2px, transparent 3px), radial-gradient(circle at 85% 20%, #c9b26a 2px, transparent 3px)",
      backgroundSize: "38px 38px",
    },
    grip: {
      backgroundColor: "#8d8a84",
      backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0 4px, transparent 4px 10px)",
    },
    wood: { background: "repeating-linear-gradient(90deg, #b48a64 0 18px, #a47b56 18px 20px, #bf956e 20px 40px, #9c7350 40px 42px)" },
  };
  return <div className="absolute inset-0" style={styles[pattern]} aria-hidden="true" />;
}

export default function DemoCatalogue() {
  const [cat, setCat] = useState("All");
  const [basket, setBasket] = useState([]);
  const [preview, setPreview] = useState(false);

  const shown = useMemo(() => PRODUCTS.filter((p) => cat === "All" || p.cat === cat), [cat]);
  const inBasket = (sku) => basket.includes(sku);
  const toggle = (sku) => {
    setPreview(false);
    setBasket((b) => (b.includes(sku) ? b.filter((x) => x !== sku) : [...b, sku]));
  };
  const items = PRODUCTS.filter((p) => basket.includes(p.sku));
  const message =
    "Hi, I'd like a quote for:\n" + items.map((p) => `• ${p.name} (${p.sku}, ${p.size})`).join("\n") + "\nQuantity: ___ sq ft";

  return (
    <div className="rounded-2xl overflow-hidden border border-black/10 bg-white text-black shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
      {/* fake browser bar */}
      <div className="flex items-center gap-2 px-4 h-10 bg-[#f3f3f3] border-b border-black/8">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[12px] text-black/60 truncate">yourshowroom.com/catalogue</span>
        <span className="ml-auto text-[10px] font-bold tracking-[0.18em] uppercase text-black/60">Demo</span>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px]">
        {/* catalogue */}
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap gap-2 mb-6" role="radiogroup" aria-label="Filter by category">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={cat === c}
                onClick={() => { setCat(c); track("demo_catalogue_filter", { category: c }); }}
                className={`min-h-11 px-4 py-2 rounded-full text-[13px] border transition-colors ${cat === c ? "bg-black text-white border-black" : "border-black/15 text-black/70 hover:border-black/40"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {shown.map((p) => (
              <li key={p.sku} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/8">
                  <Swatch pattern={p.pattern} />
                  <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold">{p.size}</span>
                </div>
                <p className="mt-2.5 text-[14px] font-semibold leading-snug">{p.name}</p>
                <p className="text-[11.5px] text-black/60">{p.sku} · {p.finish}</p>
                <p className="mt-1 text-[12px] text-black/60">Price on request</p>
                <div className="mt-2.5 flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggle(p.sku)}
                    aria-pressed={inBasket(p.sku)}
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-full text-[12px] font-medium border transition-colors ${inBasket(p.sku) ? "bg-black text-white border-black" : "border-black/15 hover:border-black/40"}`}
                  >
                    {inBasket(p.sku) ? <><FaCheck aria-hidden="true" className="text-[10px]" /> Added</> : <><FaPlus aria-hidden="true" className="text-[10px]" /> Enquire</>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setBasket([p.sku]); setPreview(true); track("demo_catalogue_whatsapp", { sku: p.sku }); }}
                    aria-label={`Order ${p.name} on WhatsApp (demo preview)`}
                    className="w-9 h-9 rounded-full bg-[#25d366] text-white flex items-center justify-center"
                  >
                    <FaWhatsapp aria-hidden="true" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* enquiry basket */}
        <aside className="border-t lg:border-t-0 lg:border-l border-black/8 bg-[#fafafa] p-5 sm:p-6 flex flex-col" aria-live="polite">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/60">Enquiry basket</p>
          {items.length === 0 ? (
            <p className="mt-4 text-[13.5px] text-black/60 leading-relaxed">Tap <strong className="text-black/70">Enquire</strong> on a few tiles to build a multi-product quote request.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {items.map((p) => (
                <li key={p.sku} className="flex items-center gap-3 rounded-lg bg-white border border-black/8 p-2">
                  <span className="relative w-9 h-9 rounded-md overflow-hidden shrink-0"><Swatch pattern={p.pattern} /></span>
                  <span className="flex-1 min-w-0 text-[12.5px] leading-tight"><span className="block font-semibold truncate">{p.name}</span><span className="text-black/60">{p.sku}</span></span>
                  <button type="button" onClick={() => toggle(p.sku)} aria-label={`Remove ${p.name}`} className="text-black/60 hover:text-black p-1"><FaTimes aria-hidden="true" className="text-[11px]" /></button>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && !preview && (
            <button
              type="button"
              onClick={() => { setPreview(true); track("demo_catalogue_send", { items: items.length }); }}
              className="mt-4 h-11 rounded-full bg-[#25d366] text-white text-[13.5px] font-semibold inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp aria-hidden="true" /> Send enquiry on WhatsApp
            </button>
          )}

          {preview && items.length > 0 && (
            <div className="mt-4">
              <p className="text-[11px] text-black/60 mb-2">What your sales team receives:</p>
              <div className="rounded-xl bg-[#dcf8c6] p-3 text-[12.5px] leading-relaxed whitespace-pre-line text-black/80 shadow-sm">{message}</div>
            </div>
          )}

          <div className="mt-auto pt-6">
            <a
              href={waLink("Hi Ivoniz, I tried your demo catalogue. I want a product catalogue website like this for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "demo_catalogue" })}
              className="group w-full inline-flex items-center justify-center gap-2 h-11 rounded-full bg-black text-white text-[13.5px] font-medium hover:bg-black/85 transition-colors"
            >
              Get this for my products <FiArrowUpRight aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

