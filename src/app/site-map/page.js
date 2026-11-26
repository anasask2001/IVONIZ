import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { CLIENTS } from "@/lib/clients";
import { PAD, OPEN_SANS, GLASS, Label, Heading, HeroTitle, Grid } from "@/components/site/SiteUI";
import SiteMapFilter from "@/components/site/SiteMapFilter";

/* ════════════════════════════════════════════════════════════════
   /site-map — human-readable map of every page (the XML file for search
   engines stays at /sitemap.xml). Groups follow the URL structure; project
   pages come from lib/clients.js so new clients appear automatically.
   Keep in step with src/app/sitemap.js when pages are added or removed.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/site-map";
const TITLE = "Site Map: Every Page on ivoniz.com | Ivoniz LLP";
const DESCRIPTION =
  "Every page on the Ivoniz LLP website in one place: website, app and software development, SEO and social media services, price guides and projects.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "Site Map | Ivoniz LLP", description: DESCRIPTION, url: PAGE_URL, type: "website", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ivoniz LLP site map" }] },
  twitter: { card: "summary_large_image", title: "Site Map | Ivoniz LLP", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const W = "/website-development";
const M = "/mobile-app-development";
const S = "/software-development";
const D = "/digital-marketing";
const SEO = `${D}/seo-services`;
const SMM = `${D}/social-media-marketing`;

/* Service groups: hub first, then child pages with a one-line purpose. */
const GROUPS = [
  {
    id: "websites",
    title: "Website Development",
    hub: { label: "Website development services", href: W, note: "Business websites, online stores, catalogues and portals for Kerala and the Gulf." },
    pages: [
      { label: "Ecommerce website development", href: `${W}/ecommerce-website-development`, note: "Online stores on Shopify, WooCommerce or custom." },
      { label: "WooCommerce development", href: `${W}/ecommerce-website-development/woocommerce-website-development`, note: "New WooCommerce stores, fixes and speed." },
      { label: "WordPress websites", href: `${W}/wordpress-website-development`, note: "Easy-to-edit business websites." },
      { label: "Static websites", href: `${W}/static-website-development`, note: "Fast, low-maintenance small business sites." },
      { label: "Catalogue websites", href: `${W}/catalogue-website-development`, note: "Product catalogues with WhatsApp enquiries." },
      { label: "Web portals", href: `${W}/web-portal-development`, note: "Logins for customers, dealers, students and staff." },
      { label: "Website development in Calicut", href: `${W}/best-website-development-company-in-calicut`, note: "Our team and Kerala client sites, for Kozhikode businesses." },
      { label: "Website cost in Kerala", href: `${W}/website-development-cost-in-kerala`, note: "Price guide: typical ranges and running costs.", guide: true },
      { label: "Custom website vs WordPress", href: `${W}/custom-website-vs-wordpress`, note: "Comparison of cost, speed and SEO.", guide: true },
    ],
  },
  {
    id: "apps",
    title: "Mobile App Development",
    hub: { label: "Mobile app development", href: M, note: "Android, iOS and Flutter apps, from MVP to launch." },
    pages: [
      { label: "Flutter app development", href: `${M}/flutter-app-development`, note: "One codebase for Android and iPhone." },
      { label: "Android app development", href: `${M}/android-app-development`, note: "Kotlin and Flutter apps on Google Play." },
      { label: "iOS app development", href: `${M}/ios-app-development`, note: "iPhone and iPad apps on the App Store." },
      { label: "Native app development", href: `${M}/native-app-development`, note: "Native vs cross-platform, and when each fits." },
      { label: "App cost in Kerala", href: `${M}/app-development-cost-in-kerala`, note: "Price guide: MVP to complex apps.", guide: true },
    ],
  },
  {
    id: "software",
    title: "Software Development",
    hub: { label: "Custom software development", href: S, note: "Business software built around your workflow." },
    pages: [
      { label: "ERP software", href: `${S}/erp-software-development`, note: "Stock, sales, accounts and branches in one system." },
      { label: "CRM software", href: `${S}/crm-software-development`, note: "Leads and follow-ups, with WhatsApp." },
      { label: "Billing software", href: `${S}/billing-software-development`, note: "GST billing for shops, restaurants and pharmacies." },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    hub: { label: "Digital marketing services", href: D, note: "SEO, ads and social media that bring enquiries." },
    pages: [
      { label: "SEO services", href: SEO, note: "Our SEO hub: packages and free audit.", head: true },
      { label: "Local SEO", href: `${SEO}/local-seo-services`, note: "Google Maps and “near me” searches." },
      { label: "Technical SEO", href: `${SEO}/technical-seo-services`, note: "Speed, indexing and site errors, fixed." },
      { label: "On-page SEO", href: `${SEO}/on-page-seo-services`, note: "Titles, content, headings and schema." },
      { label: "Off-page SEO and link building", href: `${SEO}/off-page-seo-services`, note: "White-hat links and citations." },
      { label: "Ecommerce SEO", href: `${SEO}/ecommerce-seo-services`, note: "Product and category pages that rank." },
      { label: "SEO audit", href: `${SEO}/seo-audit-services`, note: "A manual audit with a fix plan." },
      { label: "SEO for Dubai businesses", href: `${SEO}/seo-services-dubai`, note: "SEO for UAE businesses, delivered remotely." },
      { label: "Social media marketing", href: SMM, note: "Our social media hub.", head: true },
      { label: "Instagram marketing", href: `${SMM}/instagram-marketing-services`, note: "Reels, posts and Instagram ads." },
      { label: "Social media management", href: `${SMM}/social-media-management`, note: "Monthly planning, posting and replies." },
      { label: "Social media advertising", href: `${SMM}/social-media-advertising`, note: "Facebook, Instagram and LinkedIn ads." },
      { label: "Content creation", href: `${SMM}/social-media-content-creation`, note: "Reels, posts, stories and captions." },
    ],
  },
];

const COMPANY = [
  { label: "Home", href: "/" },
  { label: "About Ivoniz", href: "/about" },
  { label: "Founder", href: "/about/founder" },
  { label: "Our work", href: "/works" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];
const LEGAL = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
];

const PAGE_COUNT = GROUPS.reduce((n, g) => n + 1 + g.pages.length, 0) + COMPANY.length + LEGAL.length + CLIENTS.length + 1;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: "Site Map", description: DESCRIPTION, inLanguage: "en", isPartOf: { "@id": WEBSITE_ID }, publisher: { "@id": ORG_ID }, breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` } },
    { "@type": "BreadcrumbList", "@id": `${PAGE_URL}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
      { "@type": "ListItem", position: 2, name: "Site Map", item: PAGE_URL },
    ] },
  ],
};

function PageLink({ p }) {
  return (
    <li data-sitemap-item={`${p.label} ${p.note || ""}`.toLowerCase()} className={p.head ? "pt-4 first:pt-0" : ""}>
      <Link href={p.href} className="group flex items-start justify-between gap-4 py-3 border-b border-white/8 hover:border-white/25 transition-colors">
        <span>
          <span className={`block text-[15.5px] leading-snug ${p.head ? "text-white font-medium" : "text-white/85"} group-hover:text-white`}>
            {p.label}
            {p.guide && <span className="ml-2 align-middle text-[10.5px] font-bold tracking-[0.16em] uppercase text-white/50 border border-white/15 rounded-full px-2 py-0.5">Guide</span>}
          </span>
          {p.note && <span className="block mt-0.5 text-[13.5px] text-white/50 leading-relaxed">{p.note}</span>}
        </span>
        <FiArrowUpRight aria-hidden="true" className="shrink-0 mt-1 text-[15px] text-white/35 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </Link>
    </li>
  );
}

export default function SiteMapPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-10 sm:pb-16 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Site Map", href: "/site-map" }]} />
          <div className="mt-8"><Label>{PAGE_COUNT} pages</Label></div>
          <HeroTitle outline="Map">Site</HeroTitle>
          <div className="mt-8 grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[640px]">
              Every page on ivoniz.com, grouped by service. Find what you need, or type below to filter.
            </p>
            <nav aria-label="Jump to section" className="flex flex-wrap gap-2">
              {[...GROUPS.map((g) => [g.id, g.title]), ["projects", "Projects"], ["company", "Company"]].map(([id, t]) => (
                <a key={id} href={`#${id}`} className="px-4 py-2 rounded-full border border-white/15 text-[13.5px] text-white/75 hover:border-white/50 hover:text-white transition-colors">{t}</a>
              ))}
            </nav>
          </div>
          <div className="mt-8 max-w-[520px]"><SiteMapFilter /></div>
        </div>
      </section>

      {/* ── SERVICE GROUPS ── */}
      <section className={`relative py-12 sm:py-20 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] md:columns-2 gap-5">
          {GROUPS.map((g) => (
            <article key={g.id} id={g.id} data-sitemap-group className="scroll-mt-24 p-6 sm:p-8 mb-4 sm:mb-5 break-inside-avoid" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">{g.title}</p>
              <Link href={g.hub.href} data-sitemap-item={`${g.hub.label} ${g.hub.note} ${g.title}`.toLowerCase()} className="group mt-4 block">
                <span className="flex items-start justify-between gap-4">
                  <span className="text-white text-[22px] sm:text-[26px] leading-tight" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>{g.hub.label}</span>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/75 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </span>
                <span className="mt-2 block text-[14px] text-white/55 leading-relaxed">{g.hub.note}</span>
              </Link>
              <ul className="mt-5 border-t border-white/10">
                {g.pages.map((p) => <PageLink key={p.href} p={p} />)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" data-sitemap-group className={`relative py-12 sm:py-20 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <Label dark={false}>Projects</Label>
              <Heading dark={false}>{CLIENTS.length} client websites</Heading>
            </div>
            <Link href="/works" className="inline-flex items-center gap-2 text-[14px] font-medium text-black/60 hover:text-black">All projects <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
            {CLIENTS.map((c) => (
              <li key={c.slug} data-sitemap-item={`${c.title} ${c.category} ${c.location || ""}`.toLowerCase()}>
                <Link href={`/works/${c.slug}`} className="group flex items-start justify-between gap-3 py-3.5 border-b border-black/10 hover:border-black/30 transition-colors">
                  <span>
                    <span className="block text-[15.5px] text-black/85 group-hover:text-black leading-snug">{c.title}</span>
                    <span className="block mt-0.5 text-[13px] text-black/50">{c.category}{c.location ? ` · ${c.location}` : ""}</span>
                  </span>
                  <FiArrowUpRight aria-hidden="true" className="shrink-0 mt-1 text-black/35 group-hover:text-black" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMPANY + LEGAL ── */}
      <section id="company" className={`relative py-12 sm:py-20 ${PAD} bg-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-[2fr_1fr] gap-4 sm:gap-5 items-start">
          <div data-sitemap-group className="p-6 sm:p-8" style={GLASS}>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">Company</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 border-t border-white/10">
              {COMPANY.map((p) => <PageLink key={p.href} p={p} />)}
            </ul>
          </div>
          <div data-sitemap-group className="p-6 sm:p-8" style={GLASS}>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">Legal</p>
            <ul className="mt-4 border-t border-white/10">
              {LEGAL.map((p) => <PageLink key={p.href} p={p} />)}
            </ul>
            <p className="mt-6 text-[13px] text-white/45 leading-relaxed">
              For search engines: <a href="/sitemap.xml" className="underline underline-offset-4 hover:text-white">sitemap.xml</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
