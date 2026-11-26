import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { AUTHOR, BLOG_URL, POSTS, postBySlug, formatDate } from "@/lib/blog";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, Grid, FaqList } from "@/components/site/SiteUI";

/*
 * Shared layout for /blog/<slug> articles: dark hero with byline, a light
 * reading column (styles: .article in globals.css) with a sticky contents
 * list on desktop, then the service CTA, FAQ and related reading.
 * Schema: BlogPosting (author = founder Person), BreadcrumbList, FAQPage.
 * Server component; the article body is passed as children.
 */
export default function ArticleLayout({ slug, toc = [], faqs = [], related = [], cta, sources = [], children }) {
  const post = postBySlug(slug);
  const url = `${BLOG_URL}/${slug}`;
  const others = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.published,
        dateModified: post.updated,
        author: { "@type": "Person", "@id": AUTHOR.id, name: AUTHOR.name, url: `https://ivoniz.com${AUTHOR.href}` },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: url,
        image: "https://ivoniz.com/ivoniz-og-image.webp",
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: BLOG_URL },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      ...(faqs.length
        ? [{ "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }]
        : []),
    ],
  };

  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-16 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px]">
          <Breadcrumbs dark items={[{ label: "Blog", href: "/blog" }, { label: post.topic, href: `/blog/${slug}` }]} />
          <div className="mt-8"><Label>{post.topic} · {post.market}</Label></div>
          <h1
            className="m-0 max-w-[980px] text-[#D9D9D9]"
            style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}
          >
            {post.title}
          </h1>
          <p className="mt-6 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[760px]">{post.excerpt}</p>
          <p className="mt-8 text-[14px] text-white/55">
            By{" "}
            <Link href={AUTHOR.href} rel="author" className="text-white/85 underline underline-offset-4 decoration-white/25 hover:decoration-white">{AUTHOR.name}</Link>
            , {AUTHOR.role}
            <span aria-hidden="true"> · </span>
            <br className="sm:hidden" />
            {post.updated !== post.published ? "Updated " : "Published "}
            <time dateTime={post.updated}>{formatDate(post.updated)}</time>
            <span aria-hidden="true"> · </span>
            {post.minutes} min read
          </p>
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <section className={`relative py-12 sm:py-20 ${PAD} bg-white text-black`}>
        <div className="mx-auto max-w-[1100px] grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
          {toc.length > 0 && (
            <nav aria-label="On this page" className="lg:sticky lg:top-28 self-start">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/50">On this page</p>
              <ol className="mt-4 grid gap-2.5 text-[14px] border-l border-black/10 pl-4">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-black/60 hover:text-black leading-snug block">{t.label}</a></li>
                ))}
              </ol>
            </nav>
          )}
          <article className="article min-w-0 max-w-[720px]">
            {children}
            {sources.length > 0 && (
              <div className="mt-12 pt-6 border-t border-black/10">
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-black/50">Sources</p>
                <ul className="mt-3 !list-none !pl-0 grid gap-1.5 text-[14px]">
                  {sources.map(([label, href]) => (
                    <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* ── CTA ── */}
      {cta && (
        <section className={`relative py-14 sm:py-20 ${PAD} bg-black`}>
          <Grid />
          <div className="relative mx-auto max-w-[1100px] p-7 sm:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center" style={GLASS}>
            <div>
              <Label>{cta.label || "Next Step"}</Label>
              <Heading>{cta.title}</Heading>
              <p className="mt-5 text-[16px] text-white/60 leading-relaxed max-w-[640px]">{cta.text}</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href={cta.href} solid label={cta.button} location="blog_cta" />
              <PillLink href={waLink(cta.message)} external event="whatsapp_click" label="WhatsApp us" location="blog_cta" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className={`py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
          <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
            <div>
              <Label>FAQ</Label>
              <Heading>Questions</Heading>
            </div>
            <FaqList items={faqs} />
          </div>
        </section>
      )}

      {/* ── RELATED ── */}
      {(related.length > 0 || others.length > 0) && (
        <section className={`py-14 sm:py-20 ${PAD} bg-[#f8f8f8] text-black`}>
          <div className="mx-auto max-w-[1400px]">
            <Label dark={false}>Related</Label>
            <Heading dark={false}>Read next</Heading>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
              {[...related, ...others.map((p) => ({ label: p.title, href: `/blog/${p.slug}`, note: p.excerpt }))].slice(0, 6).map((r) => (
                <Link key={r.href} href={r.href} className="group border-r border-b border-black/10 p-6 sm:p-8 flex flex-col hover:bg-black/[0.03] transition-colors">
                  <h3 className="text-[19px] leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{r.label}</h3>
                  {r.note && <p className="mt-3 text-[14.5px] text-black/60 leading-relaxed flex-1">{r.note}</p>}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-black/60 group-hover:text-black">Read <FiArrowUpRight aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      {cta && <StickyMobileCTA dark estimateLabel={cta.button} message={cta.message} />}
    </main>
  );
}

/* Price/comparison table for article bodies (light). */
export function ArticleTable({ caption, cols, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>{cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <th scope="row">{r[0]}</th>
              {r.slice(1).map((c, i) => <td key={i}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Highlighted short answer / note box. */
export function Callout({ title, children }) {
  return (
    <div className="callout">
      {title && <p className="callout-title">{title}</p>}
      <div>{children}</div>
    </div>
  );
}
