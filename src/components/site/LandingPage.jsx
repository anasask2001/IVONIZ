import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { clientBySlug, domainOf } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, FaqList } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";
import RelatedReading from "@/components/blog/RelatedReading";

/*
 * Shared template for the landing pages in the 30-page content plan
 * (strategy, 26 Nov 2026). Same design language as the hand-built pages
 * (SEO Dubai, L1–L3). Every section is optional; pages pass plain data.
 *
 * Honesty rules baked in: proof only from lib/clients.js (real, live sites),
 * prices only passed in from costs.js, schema Service has no address of its
 * own (the Organization in the root layout is the only address).
 *
 * Location pages built with this must NOT be linked from the menu or footer.
 */

const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black";

/* Build Next.js metadata from a page config */
export function landingMetadata({ url, title, ogTitle, description, ogAlt }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { siteName: "Ivoniz LLP", title: ogTitle, description, url, type: "website", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: ogAlt || ogTitle }] },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: ["/ivoniz-og-image.webp"] },
    robots: { index: true, follow: true },
  };
}

function ClientCard({ c }) {
  return (
    <a href={c.url} target="_blank" rel="noopener noreferrer" className="group block">
      <span className="sr-only">Opens in a new tab: </span>
      <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-black/8">
        <Image src={c.image} alt={`${c.title} website built by Ivoniz`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      </div>
      <h3 className="mt-4 text-[18px] font-semibold leading-snug">{c.title}</h3>
      <p className="mt-0.5 text-[13.5px] text-black/55">{c.location} · {domainOf(c.url)}</p>
      <p className="mt-2 text-[14px] text-black/60 leading-relaxed">{c.about}</p>
    </a>
  );
}

export default function LandingPage({ page }) {
  const {
    url, schemaName, serviceType, areaServed = [], crumbs, label, h1, h1Outline, intro,
    cta = "Get a Quote", waMessage, cards, notes, proof, process, costs, extra, form, faqs = [], faqAside, stickyLabel, relatedSlugs = [],
  } = page;
  const clients = (proof?.slugs || []).map(clientBySlug).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: schemaName,
        serviceType,
        provider: { "@id": ORG_ID },
        ...(areaServed.length ? { areaServed } : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: schemaName,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": `${url}#service` },
        publisher: { "@id": ORG_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
          ...crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 2, name: c.label, item: `https://ivoniz.com${c.href}` })),
        ],
      },
      ...(faqs.length ? [{ "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
    ],
  };

  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={crumbs} />
          <div className="mt-8"><Label>{label}</Label></div>
          <HeroTitle outline={h1Outline}>{h1}</HeroTitle>
          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">{intro}</p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label={cta} location="hero" />
              <PillLink href={waLink(waMessage)} external event="whatsapp_click" label="WhatsApp Us" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CARDS ── */}
      {cards && (
        <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[820px] mb-8 sm:mb-12">
              <Label>{cards.label}</Label>
              <Heading>{cards.heading}</Heading>
              {cards.intro && <p className="mt-5 text-white/55 text-[16px] leading-relaxed">{cards.intro}</p>}
            </div>
            <div className={`grid sm:grid-cols-2 ${cards.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"} border-t border-l border-white/10`}>
              {cards.items.map((s) => {
                const inner = (
                  <>
                    <h3 className="text-[20px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{s.t}</h3>
                    <p className="mt-3 text-[14.5px] text-white/60 leading-relaxed flex-1">{s.d}</p>
                    {s.meta && <p className="mt-5 text-[14px] text-white/85 tabular-nums">{s.meta}</p>}
                    {s.href && <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-white/70 group-hover:text-white">Details <FiArrowUpRight aria-hidden="true" /></span>}
                  </>
                );
                const cls = "group border-r border-b border-white/10 p-6 sm:p-8 flex flex-col";
                return s.href
                  ? <Link key={s.t} href={s.href} className={`${cls} hover:bg-white/[0.03] transition-colors`}>{inner}</Link>
                  : <div key={s.t} className={cls}>{inner}</div>;
              })}
            </div>
            {cards.footer && <p className="mt-6 text-[14.5px] text-white/55">{cards.footer}</p>}
          </div>
        </section>
      )}

      {/* ── NOTES (light) ── */}
      {notes && (
        <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
          <div className="mx-auto max-w-[1100px]">
            <Label dark={false}>{notes.label}</Label>
            <Heading dark={false}>{notes.heading}</Heading>
            {notes.intro && <p className="mt-5 text-[16px] text-black/60 leading-relaxed max-w-[760px]">{notes.intro}</p>}
            <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
              {notes.items.map(([t, d]) => (
                <div key={t} className="border-t border-black/10 pt-5">
                  <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                  <p className="mt-2 text-[15px] text-black/60 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            {notes.footer && <p className="mt-10 text-[15.5px] text-black/60 leading-relaxed max-w-[760px]">{notes.footer}</p>}
          </div>
        </section>
      )}

      {/* ── PROOF ── */}
      {clients.length > 0 && (
        <section className={`py-14 sm:py-24 ${PAD} bg-white text-black`}>
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[820px] mb-8 sm:mb-12">
              <Label dark={false}>{proof.label}</Label>
              <Heading dark={false}>{proof.heading}</Heading>
              {proof.intro && <p className="mt-5 text-[16px] text-black/60 leading-relaxed">{proof.intro}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {clients.map((c) => <ClientCard key={c.slug} c={c} />)}
            </div>
            <p className="mt-10 text-[15px] text-black/60">
              {proof.footer || <>Case studies for each project: <Link href="/works" className={LINK_DARK}>see all our work</Link>.</>}
            </p>
          </div>
        </section>
      )}

      {/* ── EXTRA (page-specific block, light text on black) ── */}
      {extra}

      {/* ── COSTS ── */}
      {costs && (
        <section className={`relative py-14 sm:py-24 ${PAD} bg-black`}>
          <Grid />
          <div className="relative mx-auto max-w-[1100px]">
            <Label>{costs.label || "Cost"}</Label>
            <Heading>{costs.heading}</Heading>
            {costs.intro && <p className="mt-5 text-white/60 text-[16px] leading-relaxed max-w-[760px]">{costs.intro}</p>}
            <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[520px] text-left">
                <caption className="sr-only">{costs.heading}</caption>
                <thead>
                  <tr className="bg-white/[0.04]">
                    {costs.cols.map((c) => <th key={c} scope="col" className="px-5 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white/55">{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {costs.rows.map((r) => (
                    <tr key={r[0]} className="border-t border-white/8">
                      <th scope="row" className="px-5 py-4 font-normal text-[15px] text-white/85">{r[0]}</th>
                      {r.slice(1).map((v, i) => <td key={i} className={`px-5 py-4 text-[15px] tabular-nums ${i === 0 ? "text-white whitespace-nowrap" : "text-white/60"}`}>{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {costs.footer && <p className="mt-6 text-[14.5px] text-white/55">{costs.footer}</p>}
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      {process && (
        <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
          <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
            <div>
              <Label>How It Works</Label>
              <Heading>{process.heading}</Heading>
              {process.aside && <p className="mt-6 text-[15px] text-white/60 leading-relaxed">{process.aside}</p>}
            </div>
            <ol className="border-t border-white/10">
              {process.steps.map(([t, d]) => (
                <li key={t} className="border-b border-white/10 py-6 grid sm:grid-cols-[260px_1fr] gap-2 sm:gap-8">
                  <h3 className="text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                  <p className="text-[15px] text-white/60 leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-24 ${PAD} bg-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>{form.label || "Get a Quote"}</Label>
            <Heading>{form.heading}</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">{form.text}</p>
            {form.aside && <div className="mt-8 p-5" style={GLASS}><p className="text-[14.5px] text-white/70 leading-relaxed">{form.aside}</p></div>}
          </div>
          <ProjectQuoteForm {...form.props} />
        </div>
      </section>

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className={`py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
          <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
            <div>
              <Label>FAQ</Label>
              <Heading>{page.faqHeading || "Questions"}</Heading>
              {faqAside && <p className="mt-6 text-[15px] text-white/60 leading-relaxed">{faqAside}</p>}
            </div>
            <FaqList items={faqs} />
          </div>
        </section>
      )}

      <RelatedReading slugs={relatedSlugs} />
      <Footer />
      <StickyMobileCTA dark estimateLabel={stickyLabel || cta} message={waMessage} />
    </main>
  );
}

export { LINK, LINK_DARK };
