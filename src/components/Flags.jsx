/*
 * Square (1:1) country flags as inline SVG, so they render on every OS
 * (Windows doesn't draw emoji flags). Simplified for small sizes (16–24px);
 * the Saudi flag's calligraphy is abstracted to white lines.
 */
const FLAGS = {
  IN: (
    <>
      <rect width="24" height="8" fill="#FF9933" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
      <rect y="16" width="24" height="8" fill="#138808" />
      <circle cx="12" cy="12" r="2.7" fill="none" stroke="#000080" strokeWidth="0.9" />
      <circle cx="12" cy="12" r="0.6" fill="#000080" />
    </>
  ),
  AE: (
    <>
      <rect width="24" height="8" fill="#00732F" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
      <rect y="16" width="24" height="8" fill="#000000" />
      <rect width="7" height="24" fill="#FF0000" />
    </>
  ),
  SA: (
    <>
      <rect width="24" height="24" fill="#006C35" />
      <path d="M5 9.5c1.4-1.6 2.6 1.4 4 0s2.6 1.4 4 0 2.6 1.4 4 0 1.6 1 2 .5" fill="none" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6 12.6h11" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      <path d="M6 16h12.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17.5 14.9l1.6 1.1-1.6 1.1" fill="none" stroke="#FFFFFF" strokeWidth="0.9" />
    </>
  ),
  QA: (
    <>
      <rect width="24" height="24" fill="#8A1538" />
      <path d="M0 0h7l3 1.33-3 1.34 3 1.33-3 1.33 3 1.34-3 1.33 3 1.33-3 1.34 3 1.33-3 1.33 3 1.34-3 1.33 3 1.33-3 1.34 3 1.33-3 1.33 3 1.34L7 24H0z" fill="#FFFFFF" />
    </>
  ),
  OM: (
    <>
      <rect width="24" height="24" fill="#DB161B" />
      <rect x="7" width="17" height="8" fill="#FFFFFF" />
      <rect x="7" y="16" width="17" height="8" fill="#008000" />
      <path d="M2 2.5l3 3M5 2.5l-3 3M3.5 2v4.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
    </>
  ),
  BH: (
    <>
      <rect width="24" height="24" fill="#CE1126" />
      <path d="M0 0h7l3.5 2.4L7 4.8l3.5 2.4L7 9.6l3.5 2.4L7 14.4l3.5 2.4L7 19.2l3.5 2.4L7 24H0z" fill="#FFFFFF" />
    </>
  ),
  KW: (
    <>
      <rect width="24" height="8" fill="#007A3D" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
      <rect y="16" width="24" height="8" fill="#CE1126" />
      <path d="M0 0l8 8v8l-8 8z" fill="#000000" />
    </>
  ),
};

export default function Flag({ code, size = 20, className = "" }) {
  const art = FLAGS[code];
  if (!art) return null;
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 overflow-hidden rounded-[5px] ring-1 ring-black/10 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" preserveAspectRatio="none">{art}</svg>
    </span>
  );
}
