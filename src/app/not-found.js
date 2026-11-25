import Link from "next/link";
import Footer from "@/components/Footer";
import { PAD, Label, HeroTitle, Grid, PetalSketch } from "@/components/site/SiteUI";

/* Branded 404 (served by Apache via ErrorDocument 404 /404.html).
   No canonical: an error page shouldn't point search engines at the homepage. */
export const metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist. Explore Ivoniz LLP's services, work and contact details.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/website-development", label: "Website Development" },
  { href: "/website-development/ecommerce-website-development", label: "Ecommerce Websites" },
  { href: "/digital-marketing/best-digital-marketing-company-in-calicut", label: "Digital Marketing" },
  { href: "/works", label: "Our Works" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <section className={`relative pt-32 sm:pt-40 pb-20 sm:pb-28 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[320px] sm:w-[400px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Error 404</Label>
          <HeroTitle outline="Not Found">Page</HeroTitle>
          <p className="mt-8 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[640px]">
            This page may have moved or no longer exists. These links will take you somewhere useful:
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-[14px] text-white/85 hover:bg-white hover:text-black transition-colors"
                >
                  {l.label} <span aria-hidden="true">↗</span>
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
