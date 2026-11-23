import Link from "next/link";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientsWall from "@/components/clients/ClientsWall";
import { PillLink } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, waLink, Label, Heading, HeroTitle, Grid, PetalSketch } from "@/components/site/SiteUI";
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

const COUNTRY_OF = (loc) =>
  !loc ? null : /Kerala/.test(loc) ? "India" : loc;
const COUNTRIES = [...new Set(CLIENTS.map((c) => COUNTRY_OF(c.location)).filter(Boolean))];
const INDUSTRIES = INDUSTRY_GROUPS.filter((g) => g.clients.length);

const FACTS = [
  { n: CLIENTS.length, label: "Live client websites" },
  { n: COUNTRIES.length, label: `Countries: ${COUNTRIES.join(", ")}` },
  { n: INDUSTRIES.length, label: "Industries served" },
];

/* Real client video review (public/video/clients-review). */
const REVIEW = {
  name: "Dr. Sanjeev",
  org: "Rivaura Hospital",
  location: "Malappuram",
  url: "https://www.rivaurahospital.com/",
  video: "/video/clients-review/ivoniz-client-review-rivaurahospital-Dr-Sanjeev.mp4",
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

      {/* ── HERO ── */}
      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Clients", href: "/clients" }]} />
          <div className="mt-8"><Label>Our Clients</Label></div>
          <HeroTitle outline="trust Ivoniz">Businesses that</HeroTitle>
          <p className="mt-10 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">
            Retailers, hospitals, exporters and consultants in Kerala and across the Gulf run their business online
            on websites we designed and built. Every client below is a live site. Click any card to visit it.
          </p>

          <dl className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 border-t border-white/10">
            {FACTS.map((f, i) => (
              <div key={f.label} className={`py-6 sm:py-8 ${i ? "sm:pl-8 sm:border-l border-t sm:border-t-0 border-white/10" : ""}`}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(40px,4.4vw,60px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                    {f.n}
                  </span>
                  <span className="mt-3 block text-[13px] text-white/55">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CLIENT WALL ── */}
      <section className={`relative py-16 sm:py-24 ${PAD} bg-black`} aria-labelledby="clients-heading">
        <div className="mx-auto max-w-[1400px]">
          <Label>Client Websites</Label>
          <div className="mb-10 sm:mb-12">
            <Heading><span id="clients-heading">Work our clients use every day</span></Heading>
          </div>
          <ClientsWall clients={CLIENTS} />
        </div>
      </section>

      {/* ── CLIENT VIDEO REVIEW ── */}
      <section className={`relative py-16 sm:py-24 ${PAD} overflow-hidden border-t border-white/10`} style={{ background: "#060606" }} aria-labelledby="review-heading">
        <Grid />
        <div className="relative mx-auto max-w-[1100px] grid md:grid-cols-[minmax(0,340px)_1fr] gap-10 md:gap-16 items-center">
          <div className="mx-auto w-full max-w-[340px] rounded-[28px] border border-white/15 bg-white/4 p-2.5">
            {/* #t=0.5 + preload="metadata": shows a frame as the preview but only
                fetches the video's header until the visitor presses play. */}
            <video
              className="block w-full rounded-[20px] bg-black"
              style={{ aspectRatio: "9/16" }}
              src={`${REVIEW.video}#t=0.5`}
              controls
              playsInline
              preload="metadata"
              aria-label={`Video review from ${REVIEW.name}, ${REVIEW.org}`}
            />
          </div>
          <div>
            <Label>Client Review</Label>
            <Heading><span id="review-heading">Hear it from our clients.</span></Heading>
            <p className="mt-6 text-white/60 text-[16px] sm:text-[17px] leading-relaxed max-w-[520px]">
              {REVIEW.name} of {REVIEW.org}, {REVIEW.location}, talks about working with Ivoniz on the hospital&apos;s
              website.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white text-[15px]">
                {REVIEW.name.replace("Dr. ", "").charAt(0)}
              </span>
              <div>
                <p className="text-white text-[16px]">{REVIEW.name}</p>
                <a href={REVIEW.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/55 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
                  {REVIEW.org} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`py-16 sm:py-24 ${PAD} text-black`} style={{ background: "#f8f8f8" }} aria-labelledby="industries-heading">
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
      <section className={`relative py-20 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
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
