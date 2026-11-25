import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaGoogle, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientsWall from "@/components/clients/ClientsWall";
import { PillLink } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, waLink, Label, Heading, Grid } from "@/components/site/SiteUI";
import { CLIENTS, INDUSTRY_GROUPS } from "@/lib/clients";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";

/* ════════════════════════════════════════════════════════════════
   /clients — the "Clients" menu item. Shows only verified clients
   (live sites from src/lib/clients.js); every number on the page is
   counted from that list, never typed in.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/clients";
const DESCRIPTION =
  "Meet the businesses Ivoniz LLP builds for: retailers, hospitals, exporters and consultants in Kerala, the UAE, Saudi Arabia and Qatar. Visit their live websites.";

const INDUSTRIES = INDUSTRY_GROUPS.filter((g) => g.clients.length);


/* Featured client: video review (public/video/clients-review) + website +
   Instagram showcase (public/clients, WebP made from the supplied PNG). */
const FEATURED = {
  name: "Dr. Affan A Akbar",
  org: "Rivaura Multispeciality Hospital",
  short: "Rivaura Hospital",
  location: "Areekode, Malappuram",
  url: "https://www.rivaurahospital.com/",
  instagram: "https://www.instagram.com/rivaura.hospital/",
  handle: "@rivaura.hospital",
  video: "/video/clients-review/ivoniz-client-review-rivaurahospital-Dr-Sanjeev-Thomas.mp4",
  showcase: "/clients/rivaura-hospital-instagram-showcase.webp",
  work: ["Hospital website", "Instagram content and design"],
};

const WA_MSG ="Hi Ivoniz, I saw your clients page and would like to discuss a project for my business.";

export const metadata = {
  title: { absolute: "Our Clients | Businesses We Build For | Ivoniz LLP" },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Ivoniz LLP",
    title: "Our Clients | Ivoniz LLP",
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Client websites built by Ivoniz LLP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Ivoniz LLP",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Our Clients",
      description: DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#clients` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#clients`,
      name: "Ivoniz LLP clients",
      numberOfItems: CLIENTS.length,
      itemListElement: CLIENTS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Organization", name: c.title, url: c.url },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
        { "@type": "ListItem", position: 2, name: "Clients", item: PAGE_URL },
      ],
    },
  ],
};

export default function ClientsPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── CLIENT REVIEW (top of page): Rivaura Hospital ── */}
      <section className={`relative pt-32 sm:pt-40 pb-12 sm:pb-16 ${PAD} overflow-hidden`} style={{ background: "#060606" }} aria-labelledby="featured-heading">
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Clients", href: "/clients" }]} />
          {/* Page H1, styled as the site's "▶ LABEL" eyebrow. */}
          <h1 className="mt-8 mb-5 flex items-center gap-2.5">
            <span className="text-[10px] text-white" style={{ lineHeight: 1 }} aria-hidden="true">▶</span>
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Our Clients · Client Review</span>
          </h1>
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-8 sm:mb-14">
            <Heading><span id="featured-heading">{FEATURED.short}, {FEATURED.location}</span></Heading>
            <ul className="flex flex-wrap gap-2">
              {FEATURED.work.map((w) => (
                <li key={w} className="px-4 py-2 rounded-full border border-white/15 text-[13px] text-white/75">{w}</li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-6 lg:gap-10 items-start">
            {/* Video review in a phone-style frame. #t=0.5 + preload="metadata" shows a
                frame as the preview but only downloads the video when played. */}
            <figure className="m-0">
              <div className="mx-auto w-full max-w-[320px] rounded-[28px] border border-white/15 bg-white/4 p-2.5">
                <video
                  className="block w-full rounded-[20px] bg-black"
                  style={{ aspectRatio: "9/16" }}
                  src={`${FEATURED.video}#t=0.5`}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`Video review from ${FEATURED.name}, ${FEATURED.org}`}
                />
              </div>
              <figcaption className="mt-5 flex items-center gap-4 justify-center md:justify-start">
                <span aria-hidden="true" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white text-[15px]">A</span>
                <span>
                  <span className="block text-white text-[16px]">{FEATURED.name}</span>
                  <span className="block text-[13px] text-white/55">{FEATURED.org}</span>
                </span>
              </figcaption>
            </figure>

            <div className="flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "1672/941" }}>
                <Image
                  src={FEATURED.showcase}
                  alt="Rivaura Hospital Instagram profile and posts designed by Ivoniz, shown on a phone"
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
              <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-end">
                <p className="text-white/65 text-[16px] sm:text-[17px] leading-relaxed max-w-[620px]">
                  We built the website for {FEATURED.org} and design the content for its Instagram page. In the video,
                  {" "}{FEATURED.name} talks about working with Ivoniz.
                </p>
                <div className="flex flex-wrap gap-3">
                  <PillLink href={FEATURED.url} external solid label="Visit website" location="featured_client" event="outbound_click" />
                  <PillLink href={FEATURED.instagram} external label={FEATURED.handle} location="featured_client" event="outbound_click" icon={<FaInstagram aria-hidden="true" />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT WALL ── */}
      <section className={`relative py-12 sm:py-24 ${PAD} bg-black`} aria-labelledby="clients-heading">
        <div className="mx-auto max-w-[1400px]">
          <Label>Client Websites</Label>
          <div className="mb-10 sm:mb-12">
            <Heading><span id="clients-heading">Work our clients use every day</span></Heading>
          </div>
          <ClientsWall clients={CLIENTS} />
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`py-12 sm:py-24 ${PAD} text-black`} style={{ background: "#f8f8f8" }} aria-labelledby="industries-heading">
        <div className="mx-auto max-w-[1400px]">
          <Label dark={false}>Industries</Label>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20">
            <div>
              <Heading dark={false}><span id="industries-heading">Different industries, one standard</span></Heading>
              <p className="mt-6 text-[16px] leading-relaxed text-black/60 max-w-[460px]">
                A jewellery showroom, a hospital and a trading company need very different websites. We plan each one
                around how that business actually wins customers.
              </p>
            </div>
            <ul className="border-t border-black/10">
              {INDUSTRIES.map((g) => (
                <li key={g.name} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-6 border-b border-black/10">
                  <p className="text-[18px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>
                    {g.name} <span className="text-black/60 text-[14px] tabular-nums">({g.clients.length})</span>
                  </p>
                  <p className="text-[15px] leading-relaxed text-black/60">{g.clients.map((c) => c.title).join(" · ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-end">
          <div>
            <Label>Work With Us</Label>
            <Heading>Your business could be next on this page.</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed max-w-[560px]">
              Tell us what you sell and who you sell to. We&apos;ll suggest the right kind of website and give you
              a fixed quote. See more on our <Link href="/works" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">works page</Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <PillLink href={waLink(WA_MSG)} external solid event="whatsapp_click" label="Talk to Us on WhatsApp" location="clients_cta" icon={<FaWhatsapp aria-hidden="true" />} />
            <PillLink href="/contact" label="Start Your Project" location="clients_cta" />
            <a
              href={organizationSchema.hasMap}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-2 py-2 text-[14px] text-white/60 hover:text-white transition-colors"
            >
              <FaGoogle aria-hidden="true" /> Read client reviews on Google
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
