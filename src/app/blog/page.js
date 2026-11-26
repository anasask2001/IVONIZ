import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { POSTS, BLOG_URL, AUTHOR, formatDate } from "@/lib/blog";
import { PAD, OPEN_SANS, Label, HeroTitle, Grid } from "@/components/site/SiteUI";

/* /blog — article index. Posts come from lib/blog.js (newest first). */

const TITLE = "Blog: Websites, Online Stores and SEO for Kerala & the Gulf | Ivoniz LLP";
const DESCRIPTION =
  "Practical guides on website costs, choosing an agency, online stores and SEO for businesses in Kerala, the UAE and the GCC, from the Ivoniz team in Kozhikode.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "Ivoniz Blog", description: DESCRIPTION, url: BLOG_URL, type: "website", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ivoniz blog" }] },
  twitter: { card: "summary_large_image", title: "Ivoniz Blog", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${BLOG_URL}#blog`,
      url: BLOG_URL,
      name: "Ivoniz Blog",
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORG_ID },
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${BLOG_URL}/${p.slug}`,
        datePublished: p.published,
        dateModified: p.updated,
        author: { "@type": "Person", "@id": AUTHOR.id, name: AUTHOR.name },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: BLOG_URL },
      ],
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-16 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Blog", href: "/blog" }]} />
          <div className="mt-8"><Label>Guides · Kerala and the Gulf</Label></div>
          <HeroTitle outline="and the Gulf">Guides for businesses in Kerala</HeroTitle>
          <p className="mt-8 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
            What websites and online stores cost, how to choose who builds them, and how search works in the markets we
            work in. Written by our team, with prices labelled for what they are.
          </p>
        </div>
      </section>

      <section className={`py-12 sm:py-20 ${PAD} bg-white text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <ul className="border-t border-black/10">
            {POSTS.map((p) => (
              <li key={p.slug} className="border-b border-black/10">
                <Link href={`/blog/${p.slug}`} className="group grid md:grid-cols-[180px_1fr_auto] gap-3 md:gap-10 py-8 sm:py-10 items-start">
                  <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-black/50 pt-1.5">
                    {p.topic} · {p.market}
                  </p>
                  <div>
                    <h2 className="text-black leading-[1.15]" style={{ fontFamily: OPEN_SANS, fontWeight: 400, fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.02em" }}>
                      {p.title}
                    </h2>
                    <p className="mt-3 text-[15.5px] text-black/60 leading-relaxed max-w-[760px]">{p.excerpt}</p>
                    <p className="mt-4 text-[13px] text-black/50">
                      <time dateTime={p.updated}>{formatDate(p.updated)}</time> · {p.minutes} min read
                    </p>
                  </div>
                  <span className="hidden md:inline-flex w-11 h-11 rounded-full border border-black/15 items-center justify-center text-black/60 group-hover:bg-black group-hover:text-white transition-colors" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
