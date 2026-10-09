import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import WorksGrid from "@/components/WorksGrid";
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
    languages: {
      "en-IN": "https://ivoniz.com/works",
      "x-default": "https://ivoniz.com/works",
    },
  },
  openGraph: {
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

/* Real client projects — linking directly to the live sites */
export const WORKS = [
  {
    title: "Posh Palette",
    category: "Fashion & Accessories",
    location: "Calicut, Kerala",
    url: "https://poshpalette.in/",
    gradient: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)",
    image: "/Portfolios/POSHPALETTE.png",
    type: "semi-dynamic",
  },
  {
    title: "Nizra Gold and Diamonds",
    category: "Jewellery",
    location: "Kerala",
    url: "https://nizragold.com/",
    gradient: "linear-gradient(135deg, #b45309 0%, #422006 100%)",
    image: "/Portfolios/NIZRA_GOLD_AND_DIAMONS.png",
    type: "semi-dynamic",
  },
  {
    title: "Rivaura Hospital",
    category: "Healthcare",
    location: "Malappuram, Kerala",
    url: "https://www.rivaurahospital.com/",
    gradient: "linear-gradient(135deg, #0e7490 0%, #083344 100%)",
    image: "/Portfolios/RIVAURA_HOSPITAL.png",
    type: "semi-dynamic",
  },
  {
    title: "Opiz Global LLP",
    category: "Agro-Food Export & Logistics",
    location: "Calicut, Kerala",
    url: "https://opizglobal.com/",
    gradient: "linear-gradient(135deg, #15803d 0%, #052e16 100%)",
    image: "/Portfolios/OPIZ_GLOBAL.png",
    type: "semi-dynamic",
  },
  {
    title: "Feraro International",
    category: "Steel Windows & Doors",
    location: "Manufacturing",
    url: "https://www.ferarointernational.com/",
    gradient: "linear-gradient(135deg, #334155 0%, #0f172a 100%)",
    image: "/Portfolios/FERARO_INTERNATIONAL.png",
    type: "static",
  },
  {
    title: "Sky Pure Water",
    category: "Water Trading",
    location: "UAE",
    url: "https://www.skypurewater.com/",
    gradient: "linear-gradient(135deg, #0284c7 0%, #082f49 100%)",
    image: "/Portfolios/SKYPUREWATER.png",
    type: "static",
  },
  {
    title: "Technical Trade Co.",
    category: "Engineering & IT Solutions",
    location: "Saudi Arabia",
    url: "https://techtrade.sa/",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #020617 100%)",
    image: "/Portfolios/TECH_TRADE.png",
    type: "semi-dynamic",
  },
  {
    title: "CapitalCore",
    category: "Business Consulting",
    location: "UAE",
    url: "https://www.capitalcoreuae.com/",
    gradient: "linear-gradient(135deg, #525252 0%, #171717 100%)",
    image: "/Portfolios/CAPITAL_CORE_UAE.png",
    type: "static",
  },
  {
    title: "Arlocks Gents Wear",
    category: "Men's Fashion",
    location: "Kooriyad, Kerala",
    url: "https://arlocksgentswear.com/",
    gradient: "linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%)",
    image: "/Portfolios/ARLOCKS_GENTS_WEAR.png",
    type: "semi-dynamic",
  },
  {
    title: "Danthika Dental Zone",
    category: "Healthcare",
    location: "Kondotty, Malappuram, Kerala",
    url: "https://danthikadentalzone.com/",
    gradient: "linear-gradient(135deg, #0891b2 0%, #164e63 100%)",
    image: "/Portfolios/DANTHIKA_DENTAL_ZONE.png",
    type: "semi-dynamic",
  },
  {
    title: "Docview Business Services",
    category: "Business Consulting",
    location: "UAE",
    url: "https://docviewbs.com/",
    gradient: "linear-gradient(135deg, #4338ca 0%, #1e1b4b 100%)",
    image: "/Portfolios/DOCVIEW_BUSINESS_SERVICES.png",
    type: "semi-dynamic",
  },
  {
    title: "Elnyca Solutions General Trading LLC",
    category: "General Trading",
    location: "UAE",
    url: "https://elnyca.ae/",
    gradient: "linear-gradient(135deg, #b91c1c 0%, #450a0a 100%)",
    image: "/Portfolios/ELNYCA_DUBAI.png",
    type: "semi-dynamic",
  },
  {
    title: "Gaming Qatar",
    category: "Gaming & E-Commerce",
    location: "Qatar",
    url: "https://mygamehobbies.qa/",
    gradient: "linear-gradient(135deg, #7e22ce 0%, #2e1065 100%)",
    image: "/Portfolios/MYGAME_HOBBIES_ecommerce.png",
    type: "fully-dynamic",
  },
];

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
          <p className="text-black/50 text-lg max-w-xl mt-6">
            Live websites we&apos;ve designed and built for clients across fashion, jewellery,
            healthcare, trade, and consulting — in Kerala and across the Gulf.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-350">
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
