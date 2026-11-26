import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaCheck } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PillLink } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, PetalSketch } from "@/components/site/SiteUI";
import { CLIENTS, TYPE_LABEL, clientBySlug, domainOf } from "@/lib/clients";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";

/* ════════════════════════════════════════════════════════════════
   /works/[slug] — one case-study page per portfolio project, generated
   from src/lib/clients.js. Only verifiable facts: client, industry,
   location, live URL, platform detected on the live site, build type,
   services, plus a review / showcase where one exists. No invented results.
   ════════════════════════════════════════════════════════════════ */

export const dynamicParams = false;

export function generateStaticParams() {
  return CLIENTS.map((c) => ({ slug: c.slug }));
}

const BASE = "https://ivoniz.com";

/* The Ivoniz service page closest to each project. */
function relatedService(c) {
  if (/Healthcare/.test(c.category)) return { href: "/website-development/hospital-website-development", label: "hospital and clinic website development" };
  if (c.type === "static") return { href: "/website-development/static-website-development", label: "static website development" };
  if (/Gaming|Fashion|Men's Fashion/.test(c.category)) return { href: "/website-development/ecommerce-website-development", label: "ecommerce website development" };
  if (/Jewellery|Steel|Engineering|Export/.test(c.category)) return { href: "/website-development/catalogue-website-development", label: "product catalogue website development" };
  return { href: "/website-development", label: "website development" };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = clientBySlug(slug);
  if (!c) return {};
  const url = `${BASE}/works/${c.slug}`;
  /* Title: "<Client> Website | <Industry> | Ivoniz LLP", or shorter when that runs past 60 characters. */
  const full = `${c.title} Website | ${c.category} | Ivoniz LLP`;
  const title = full.length <= 60 ? full : `${c.title} Website | Ivoniz LLP`;
  /* Description: whole sentences only, under 160 characters. */
  const place = c.location ? `, ${c.location === "UAE" ? "the UAE" : c.location}` : "";
  const long = `The ${c.title} website (${c.category}${place}), designed and built by Ivoniz LLP. See the client, platform and services.`;
  const description = long.length <= 158 ? long : `The ${c.title} website, designed and built by Ivoniz LLP. See the client, platform and services.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      siteName: "Ivoniz LLP",
      type: "website",
      title: `${c.title} | Website by Ivoniz`,
      description,
      url,
      images: [{ url: c.image, alt: `${c.title} website designed and built by Ivoniz` }],
    },
    twitter: { card: "summary_large_image", title: `${c.title} | Website by Ivoniz`, description, images: [c.image] },
    robots: { index: true, follow: true },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const c = clientBySlug(slug);
  if (!c) notFound();

  const url = `${BASE}/works/${c.slug}`;
  const type = TYPE_LABEL[c.type];
  const service = relatedService(c);
  const more = [
    ...CLIENTS.filter((x) => x.slug !== c.slug && x.region === c.region),
    ...CLIENTS.filter((x) => x.slug !== c.slug && x.region !== c.region),
  ].slice(0, 3);
  const waMsg = `Hi Ivoniz, I saw the ${c.title} project on your website and would like something similar for my business.`;

  const facts = [
    ["Client", c.title],
    ["Industry", c.category],
    c.location ? ["Location", c.location] : null,
    ["Website", domainOf(c.url)],
    c.tech ? ["Platform", c.tech.join(", ")] : null,
    type ? ["Build type", type.label] : null,
  ].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${c.title} website project`,
        description: c.about,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": `${url}#project` },
        publisher: { "@id": ORG_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: `${BASE}${c.image}`,
      },
      {
        "@type": "WebSite",
        "@id": `${url}#project`,
        name: `${c.title} website`,
        url: c.url,
        image: `${BASE}${c.image}`,
        creator: { "@id": ORG_ID },
        about: {
          "@type": "Organization",
          name: c.title,
          url: c.url,
          description: c.about,
          ...(c.location ? { address: { "@type": "PostalAddress", addressLocality: c.location } } : {}),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
          { "@type": "ListItem", position: 2, name: "Works", item: `${BASE}/works` },
          { "@type": "ListItem", position: 3, name: c.title, item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-32 sm:pt-40 pb-12 sm:pb-16 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Works", href: "/works" }, { label: c.title, href: `/works/${c.slug}` }]} />
          <div className="mt-8"><Label>{c.category}</Label></div>
          <HeroTitle outline="Website">{c.title}</HeroTitle>
          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-[14px] text-white/60">{[c.location, domainOf(c.url)].filter(Boolean).join(" · ")}</p>
              <p className="mt-4 text-white/70 text-[16px] sm:text-[18px] leading-relaxed max-w-[760px]">{c.about}</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href={c.url} external solid label="Visit live website" location="project_hero" event="outbound_click" />
              <PillLink href={waLink(waMsg)} external event="whatsapp_click" label="Build something similar" location="project_hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOT ── */}
      <section className={`relative pb-16 sm:pb-24 ${PAD}`} style={{ background: "#060606" }}>
        <div className="mx-auto max-w-[1400px]">
          <figure className="m-0 rounded-2xl border border-white/10 bg-white/3 p-2.5 sm:p-3">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </span>
              <span className="mx-auto truncate rounded-full bg-white/6 px-4 py-1 text-[12px] text-white/60">{domainOf(c.url)}</span>
            </div>
            <div className="relative overflow-hidden rounded-b-xl" style={{ aspectRatio: "21/10", background: c.gradient }}>
              <Image
                src={c.image}
                alt={`${c.title} website homepage designed and built by Ivoniz`}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1400px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="sr-only">Homepage of the {c.title} website</figcaption>
          </figure>
        </div>
      </section>

      {/* ── DETAILS ── */}
      <section className={`relative py-12 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>The Project</Label>
            <Heading>About {c.title}</Heading>
            <p className="mt-6 text-[16px] sm:text-[17px] text-white/70 leading-relaxed">{c.about}</p>

            <h2 className="mt-12 text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(24px,2.4vw,32px)", letterSpacing: "-0.02em" }}>What we delivered</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {c.services.map((s) => (
                <li key={s} className="flex items-center gap-3 px-5 py-4" style={GLASS}>
                  <FaCheck aria-hidden="true" className="shrink-0 text-[12px] text-white/60" />
                  <span className="text-[15px] text-white/85">{s}</span>
                </li>
              ))}
            </ul>
            {type && (
              <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
                <strong className="font-semibold text-white">{type.label}.</strong> {type.text}
                {c.tech && <> Built on {c.tech.join(" and ")}.</>}
              </p>
            )}
          </div>

          <dl className="overflow-hidden" style={GLASS}>
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[120px_1fr] gap-4 px-6 py-4 border-b border-white/10 last:border-0">
                <dt className="text-[12px] font-bold tracking-[0.16em] uppercase text-white/55 pt-0.5">{k}</dt>
                <dd className="text-[15.5px] text-white">
                  {k === "Website" ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4 decoration-white/30 hover:decoration-white">
                      {v} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CLIENT REVIEW + SHOWCASE (where available) ── */}
      {(c.review || c.showcase) && (
        <section className={`relative py-12 sm:py-24 ${PAD} bg-black`} aria-labelledby="review-heading">
          <Grid />
          <div className="relative mx-auto max-w-[1400px]">
            <Label>Client Review</Label>
            <Heading className="mb-8 sm:mb-14"><span id="review-heading">What {c.title} says</span></Heading>
            <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-6 lg:gap-10 items-start">
              {c.review && (
                <figure className="m-0">
                  <div className="mx-auto w-full max-w-[320px] rounded-[28px] border border-white/15 bg-white/4 p-2.5">
                    <video
                      className="block w-full rounded-[20px] bg-black"
                      style={{ aspectRatio: "9/16" }}
                      src={`${c.review.video}#t=0.5`}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`Video review from ${c.review.name}, ${c.review.org}`}
                    />
                  </div>
                  <figcaption className="mt-5 text-center md:text-left">
                    <span className="block text-white text-[16px]">{c.review.name}</span>
                    <span className="block text-[13px] text-white/55">{c.review.org}</span>
                  </figcaption>
                </figure>
              )}
              {c.showcase && (
                <div className="flex flex-col gap-5">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "1672/941" }}>
                    <Image src={c.showcase.image} alt={c.showcase.alt} fill sizes="(max-width: 768px) 100vw, 900px" className="object-cover" />
                  </div>
                  <div>
                    <PillLink href={c.showcase.instagram} external label={c.showcase.handle} location="project_showcase" event="outbound_click" icon={<FaInstagram aria-hidden="true" />} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className={`relative py-12 sm:py-24 ${PAD}`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] p-6 sm:p-10 grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-center" style={GLASS}>
          <div>
            <h2 className="text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
              Want a website like this for your business?
            </h2>
            <p className="mt-3 text-[15.5px] text-white/65 leading-relaxed">
              See our <Link href={service.href} className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">{service.label}</Link> services,
              or tell us about your project and we&apos;ll send a fixed quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <PillLink href={waLink(waMsg)} external solid event="whatsapp_click" label="Talk to us on WhatsApp" location="project_cta" icon={<FaWhatsapp aria-hidden="true" />} />
            <PillLink href="/contact" label="Start your project" location="project_cta" />
          </div>
        </div>
      </section>

      {/* ── MORE PROJECTS ── */}
      <section className={`relative py-12 sm:py-24 ${PAD} bg-black`} aria-labelledby="more-heading">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <Label>More Work</Label>
              <Heading><span id="more-heading">More projects</span></Heading>
            </div>
            <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
              See all projects <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/works/${m.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl border border-white/10" style={{ aspectRatio: "21/10", background: m.gradient }}>
                    <Image src={m.image} alt={`${m.title} website by Ivoniz`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-4 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/55">{m.category}</p>
                  <p className="mt-1 text-[17px] text-white inline-flex items-center gap-1.5">{m.title} <FiArrowUpRight aria-hidden="true" className="text-white/55" /></p>
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
