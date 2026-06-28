import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import WorksGrid from "@/components/WorksGrid";

export const metadata = {
  title: "Our Works | Ivoniz Pvt Ltd",
  description:
    "A selection of live websites Ivoniz has designed and built for clients across fashion, jewellery, healthcare, trading, and consulting.",
  alternates: { canonical: "https://ivoniz.com/works" },
};

/* Real client projects — linking directly to the live sites */
export const WORKS = [
  {
    title: "Posh Palette",
    category: "Fashion & Accessories",
    location: "Calicut, Kerala",
    url: "https://poshpalette.in/",
    gradient: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)",
  },
  {
    title: "Nizra Gold and Diamonds",
    category: "Jewellery",
    location: "Kerala",
    url: "https://nizragold.com/",
    gradient: "linear-gradient(135deg, #b45309 0%, #422006 100%)",
  },
  {
    title: "Rivaura Hospital",
    category: "Healthcare",
    location: "Malappuram, Kerala",
    url: "https://www.rivaurahospital.com/",
    gradient: "linear-gradient(135deg, #0e7490 0%, #083344 100%)",
  },
  {
    title: "Opiz Global LLP",
    category: "Agro-Food Export & Logistics",
    location: "Calicut, Kerala",
    url: "https://opizglobal.com/",
    gradient: "linear-gradient(135deg, #15803d 0%, #052e16 100%)",
  },
  {
    title: "Feraro International",
    category: "Steel Windows & Doors",
    location: "Manufacturing",
    url: "https://www.ferarointernational.com/",
    gradient: "linear-gradient(135deg, #334155 0%, #0f172a 100%)",
  },
  {
    title: "Sky Pure Water",
    category: "Water Trading",
    location: "UAE",
    url: "https://www.skypurewater.com/",
    gradient: "linear-gradient(135deg, #0284c7 0%, #082f49 100%)",
  },
  {
    title: "Technical Trade Co.",
    category: "Engineering & IT Solutions",
    location: "Saudi Arabia",
    url: "https://techtrade.sa/",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #020617 100%)",
  },
  {
    title: "CapitalCore",
    category: "Business Consulting",
    location: "UAE",
    url: "https://www.capitalcoreuae.com/",
    gradient: "linear-gradient(135deg, #525252 0%, #171717 100%)",
  },
  {
    title: "Arlocks Gents Wear",
    category: "Men's Fashion",
    location: "Kooriyad, Kerala",
    url: "https://arlocksgentswear.com/",
    gradient: "linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%)",
  },
];

export default function WorksPage() {
  return (
    <main className="bg-white text-black">
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-350">
          <h1 className="font-semibold text-3xl sm:text-4xl text-black">
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
          Get in Touch <FaArrowRight className="text-[13px]" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
