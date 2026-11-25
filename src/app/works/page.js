import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import WorksGrid from "@/components/WorksGrid";
import { CLIENTS as WORKS } from "@/lib/clients";
import Breadcrumbs from "@/components/Breadcrumbs";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

/* Facts for the intro below, computed from the real project list so they never go stale. */
const COUNT = WORKS.length;
const KERALA = WORKS.filter((w) => w.region === "kerala").length;
const GCC = WORKS.filter((w) => w.region === "gcc").length;
const NEXT = WORKS.filter((w) => (w.tech || []).includes("Next.js")).length;
const LINK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const pageSchema = webPageSchema({
  url: "https://ivoniz.com/works",
  name: "Our Works | Ivoniz LLP",
  description:
    "A selection of live websites Ivoniz has designed and built for clients across fashion, jewellery, healthcare, trading, and consulting.",
});

const pageBreadcrumb = breadcrumbSchema([
  { name: "Works", url: "https://ivoniz.com/works" },
]);

export const metadata = {
  title: "Our Works — Websites We Have Built",
  description:
    "Explore live websites Ivoniz LLP has designed and built for clients across fashion, jewellery, healthcare, trading, and consulting in Kerala and the Gulf.",
  alternates: {
    canonical: "https://ivoniz.com/works",
  },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Our Works | Ivoniz LLP",
    description:
      "A selection of live websites Ivoniz has designed and built for clients across fashion, jewellery, healthcare, trading, and consulting.",
    url: "https://ivoniz.com/works",
    type: "website",
    images: [
      {
        url: "/ivoniz-og-image.webp",
        width: 1734,
        height: 907,
        alt: "Ivoniz LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Works | Ivoniz LLP",
    description: "Live websites Ivoniz has designed and built for clients across Kerala.",
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* Real client projects (src/lib/clients.js) — linking directly to the live sites */
export default function WorksPage() {
  return (
    <main id="main-content" className="bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumb) }} />
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-350">
          <Breadcrumbs items={[{ label: "Works", href: "/works" }]} />
          <h1 className="font-semibold text-3xl sm:text-4xl text-black mt-4">
            Our works
          </h1>
          <p className="text-black/60 text-lg max-w-xl mt-6">
            Live websites we&apos;ve designed and built for clients across fashion, jewellery,
            healthcare, trade, and consulting — in Kerala and across the Gulf.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-350">
          <h2 className="sr-only">Client websites</h2>
          <WorksGrid works={WORKS} />
        </div>
      </section>

      {/* About these projects — real, computed facts + links to the matching services */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-350 grid lg:grid-cols-[340px_1fr] gap-6 lg:gap-16 border-t border-black/10 pt-12 sm:pt-16">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-black leading-tight">About these projects</h2>
          <div className="grid gap-4 text-[16px] text-black/65 leading-relaxed max-w-3xl">
            <p>
              These are {COUNT} live websites our team designed and built: {KERALA} for businesses in Kerala and {GCC} for
              companies in the UAE, Qatar and Saudi Arabia. They range from fast static sites and product catalogues to an
              online store with checkout. {NEXT} of them are built with Next.js and React for speed, and every one is built
              mobile-first.
            </p>
            <p>
              Open any project to see the client&apos;s business, what we built and the technology behind it. If you need
              something similar, see our <Link href="/website-development" className={LINK}>website development</Link>,{" "}
              <Link href="/website-development/ecommerce-website-development" className={LINK}>ecommerce website development</Link>,{" "}
              <Link href="/mobile-app-development" className={LINK}>mobile app development</Link> and{" "}
              <Link href="/digital-marketing/seo-services" className={LINK}>SEO services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-16 bg-black text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want a website like this?</h2>
        <p className="text-white/55 max-w-md mx-auto mb-8">
          Let&apos;s build something that represents your business properly online.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-13 px-8 bg-white text-black text-sm font-bold tracking-wide rounded-full hover:bg-white/90 transition-colors"
        >
          Get in Touch <FaArrowRight aria-hidden="true" className="text-[13px]" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
