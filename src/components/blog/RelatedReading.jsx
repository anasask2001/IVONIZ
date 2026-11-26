import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { POSTS } from "@/lib/blog";
import { PAD, OPEN_SANS, Label } from "@/components/site/SiteUI";

/*
 * "Related reading" strip for service pages: links to the 1–3 blog articles
 * that support that service (internal-linking plan, seo/content/
 * blog-strategy-30.md). Pass slugs from lib/blog.js; unknown slugs are
 * skipped, so a removed post never leaves a broken link. Server component.
 */
export default function RelatedReading({ slugs = [], dark = true }) {
  const posts = slugs.map((s) => POSTS.find((p) => p.slug === s)).filter(Boolean);
  if (!posts.length) return null;
  return (
    <section className={`py-12 sm:py-16 ${PAD} ${dark ? "bg-black text-white" : "bg-[#f8f8f8] text-black"}`} aria-labelledby="related-reading">
      <div className="mx-auto max-w-[1400px]">
        <div id="related-reading"><Label dark={dark}>Related Reading</Label></div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l ${dark ? "border-white/10" : "border-black/10"}`}>
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className={`group border-r border-b p-6 flex flex-col transition-colors ${dark ? "border-white/10 hover:bg-white/[0.03]" : "border-black/10 hover:bg-black/[0.03]"}`}
            >
              <h3 className="text-[18px] leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{p.title}</h3>
              <p className={`mt-2 text-[14px] leading-relaxed flex-1 ${dark ? "text-white/55" : "text-black/55"}`}>{p.excerpt}</p>
              <span className={`mt-4 inline-flex items-center gap-1.5 text-[13px] ${dark ? "text-white/65 group-hover:text-white" : "text-black/60 group-hover:text-black"}`}>
                Read <FiArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
