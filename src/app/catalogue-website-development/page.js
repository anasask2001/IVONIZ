import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

/* Target keyword: Product catalogue website development
   PLACEHOLDER — route created, content still to be written.
   Kept out of search (noindex) and the sitemap until the page is filled in. */
export const metadata = {
  title: "Product Catalogue Website Development",
  description: "Product Catalogue Website Development by Ivoniz LLP, Calicut.",
  alternates: { canonical: "https://ivoniz.com/catalogue-website-development" },
  robots: { index: false, follow: true },
};

export default function CatalogueWebsiteDevelopmentPage() {
  return (
    <main id="main-content" className="bg-white text-black">
      <section className="bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs dark items={[
              { label: "Website Development", href: "/website-development" },
              { label: "Product Catalogue Website Development", href: "/catalogue-website-development" },
            ]} />
          <h1 className="font-bold leading-[1.08] mt-6" style={{ fontSize: "clamp(32px,5vw,58px)" }}>
            Product Catalogue Website Development
          </h1>
        </div>
      </section>

      <Footer />
    </main>
  );
}
