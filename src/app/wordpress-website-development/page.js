import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

/* Target keyword: WordPress website development
   PLACEHOLDER — route created, content still to be written.
   Kept out of search (noindex) and the sitemap until the page is filled in. */
export const metadata = {
  title: "WordPress Website Development",
  description: "WordPress Website Development by Ivoniz LLP, Calicut.",
  alternates: { canonical: "https://ivoniz.com/wordpress-website-development" },
  robots: { index: false, follow: true },
};

export default function WordpressWebsiteDevelopmentPage() {
  return (
    <main id="main-content" className="bg-white text-black">
      <section className="bg-black text-white pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs dark items={[
              { label: "Website Development", href: "/website-development" },
              { label: "WordPress Website Development", href: "/wordpress-website-development" },
            ]} />
          <h1 className="font-bold leading-[1.08] mt-6" style={{ fontSize: "clamp(32px,5vw,58px)" }}>
            WordPress Website Development
          </h1>
        </div>
      </section>

      <Footer />
    </main>
  );
}
