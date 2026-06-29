import Link from "next/link";

/**
 * Visible breadcrumb trail. Pass the trail after Home, e.g.
 * <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
 * Pairs with the BreadcrumbList JSON-LD already on each page (src/lib/schema.js).
 */
export default function Breadcrumbs({ items, dark = false }) {
  const textColor = dark ? "text-white/60" : "text-black/60";
  const hoverColor = dark ? "hover:text-white" : "hover:text-black";
  const currentColor = dark ? "text-white/80" : "text-black/70";

  return (
    <nav aria-label="Breadcrumb" className={`text-[12px] ${textColor}`}>
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link href="/" className={`${hoverColor} transition-colors`}>
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {isLast ? (
                <span className={`${currentColor} font-medium`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`${hoverColor} transition-colors`}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
