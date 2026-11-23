import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PAD, OPEN_SANS, Label, HeroTitle, Grid, PetalSketch } from "@/components/site/SiteUI";

/* Shared layout for /privacy and /terms: dark hero in the homepage style,
   then the text on the light #f8f8f8 band. `sections` is an array of
   { h, body } where body is JSX. */
export default function LegalPage({ url, label, title, outline, updated, intro, sections, name, description }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-IN",
        dateModified: updated.iso,
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORG_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
          { "@type": "ListItem", position: 2, name: label, item: url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[320px] sm:w-[400px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label, href: new URL(url).pathname }]} />
          <div className="mt-8"><Label>{label}</Label></div>
          <HeroTitle outline={outline}>{title}</HeroTitle>
          <p className="mt-8 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px]">{intro}</p>
          <p className="mt-6 text-[13px] text-white/55">
            Last updated: <time dateTime={updated.iso}>{updated.label}</time>
          </p>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${PAD} text-black`} style={{ background: "#f8f8f8" }}>
        <div className="mx-auto max-w-[820px]">
          {sections.map((s, i) => (
            <section key={s.h} className={i ? "mt-12" : ""}>
              <h2
                className="text-black"
                style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
              >
                {s.h}
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.8] text-black/70 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-black [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-black/30">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
