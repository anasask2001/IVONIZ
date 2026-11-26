import Link from "next/link";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { CLIENTS } from "@/lib/clients";

/* ════════════════════════════════════════════════════════════════
   /sitemap — human-readable map of every page (search engines use
   /sitemap.xml). Layout: plain white page, one section per area with a
   heading that links to that area's main page ("Website Development →"),
   a 4-column grid of text links under it, thin rules between sections and
   the section heading pinned while you scroll its links.
   Keep in step with src/lib/sitemapRoutes.js when pages are added or removed.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/sitemap";
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
const SEO = "/digital-marketing/seo-services";
const SMM = "/digital-marketing/social-media-marketing";

/* Each section: heading (links to the area's main page) + optional links. */
const SECTIONS = [
  {
    title: "Website Development",
    href: W,
    links: [
      ["Ecommerce Website Development", `${W}/ecommerce-website-development`],
      ["WooCommerce Development", `${W}/ecommerce-website-development/woocommerce-website-development`],
      ["WordPress Website Development", `${W}/wordpress-website-development`],
      ["Static Website Development", `${W}/static-website-development`],
      ["Catalogue Website Development", `${W}/catalogue-website-development`],
      ["Web Portal Development", `${W}/web-portal-development`],
      ["Website Development in Calicut", `${W}/best-website-development-company-in-calicut`],
    ],
  },
  {
    title: "Mobile App Development",
    href: M,
    links: [
      ["Flutter App Development", `${M}/flutter-app-development`],
      ["Android App Development", `${M}/android-app-development`],
      ["iOS App Development", `${M}/ios-app-development`],
      ["Native App Development", `${M}/native-app-development`],
    ],
  },
  {
    title: "Software Development",
    href: S,
    links: [
      ["ERP Software Development", `${S}/erp-software-development`],
      ["CRM Software Development", `${S}/crm-software-development`],
      ["Billing Software", `${S}/billing-software-development`],
    ],
  },
  { title: "Digital Marketing", href: "/digital-marketing", links: [] },
  {
    title: "SEO Services",
    href: SEO,
    links: [
      ["Local SEO", `${SEO}/local-seo-services`],
      ["Technical SEO", `${SEO}/technical-seo-services`],
      ["On-Page SEO", `${SEO}/on-page-seo-services`],
      ["Off-Page SEO & Link Building", `${SEO}/off-page-seo-services`],
      ["Ecommerce SEO", `${SEO}/ecommerce-seo-services`],
      ["SEO Audit", `${SEO}/seo-audit-services`],
      ["SEO for Dubai Businesses", `${SEO}/seo-services-dubai`],
    ],
  },
  {
    title: "Social Media Marketing",
    href: SMM,
    links: [
      ["Instagram Marketing", `${SMM}/instagram-marketing-services`],
      ["Social Media Management", `${SMM}/social-media-management`],
      ["Social Media Advertising", `${SMM}/social-media-advertising`],
      ["Social Media Content Creation", `${SMM}/social-media-content-creation`],
    ],
  },
  {
    title: "Guides",
    href: `${W}/website-development-cost-in-kerala`,
    links: [
      ["Website Development Cost in Kerala", `${W}/website-development-cost-in-kerala`],
      ["App Development Cost in Kerala", `${M}/app-development-cost-in-kerala`],
      ["Custom Website vs WordPress", `${W}/custom-website-vs-wordpress`],
    ],
  },
  { title: "Works", href: "/works", links: CLIENTS.map((c) => [c.title, `/works/${c.slug}`]) },
  { title: "About Us", href: "/about", links: [["Founder", "/about/founder"]] },
  { title: "Clients", href: "/clients", links: [] },
  { title: "Contact", href: "/contact", links: [] },
  {
    title: "Legal",
    href: "/privacy",
    links: [
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
    ],
  },
];

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

export default function SiteMapPage() {
  return (
    <main id="main-content" className="bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <Breadcrumbs items={[{ label: "Site Map", href: "/sitemap" }]} />
        <h1 className="mt-8 mb-6 sm:mb-10 text-[34px] sm:text-[44px] font-semibold tracking-[-0.02em] leading-tight">Site Map</h1>

        {SECTIONS.map((s, i) => (
          <section key={s.title} className={i ? "border-t border-black/10" : ""}>
            {/* Heading stays pinned under the site header while its links scroll */}
            <h2 className="sticky top-[68px] lg:top-[76px] z-10 bg-white py-6 sm:py-7 m-0">
              <Link href={s.href} className="group inline-flex items-center gap-2 text-[19px] sm:text-[21px] font-semibold tracking-[-0.01em] text-black">
                {s.title}
                <span aria-hidden="true" className="text-[18px] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </h2>
            {s.links.length > 0 && (
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 sm:gap-y-5 pb-10 sm:pb-12 -mt-1">
                {s.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-[14.5px] sm:text-[15px] leading-snug text-black/65 hover:text-black hover:underline underline-offset-4">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="mt-2 pt-8 border-t border-black/10 text-[13px] text-black/50">
          For search engines: <a href="/sitemap.xml" className="underline underline-offset-4 hover:text-black">sitemap.xml</a>
        </p>
      </div>

      <Footer />
    </main>
  );
}
