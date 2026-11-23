import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import WorksGrid from "@/components/WorksGrid";
import { CLIENTS as WORKS } from "@/lib/clients";
import Breadcrumbs from "@/components/Breadcrumbs";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

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
