import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/blog/RelatedReading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { CLIENTS, domainOf } from "@/lib/clients";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /website-development/best-website-development-company-in-calicut
   Owner of the Calicut / Kozhikode website-development intent:
   "website development company in calicut", "… in kozhikode",
   "web development company in calicut", "website design company in calicut",
   and the "best … in calicut" searches, answered with a how-to-choose
   checklist rather than a claim. URL kept (indexed, linked from menu).
   Does NOT target Kerala-wide or GCC terms (/website-development owns those).
   Facts only from src/lib/clients.js and the office address. No ratings,
   project counts or testimonials unless the client data holds them.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/best-website-development-company-in-calicut";
const TITLE = "Web Design & Website Development Company in Calicut | Ivoniz LLP";
const DESCRIPTION =
  "Web design and development in Calicut from our team at HiLITE Business Park. Business, catalogue and ecommerce websites, with live client sites to check.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Website Development in Calicut | Ivoniz LLP",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Websites built by Ivoniz in Calicut, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development in Calicut | Ivoniz LLP",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Facts from the client list ───────────────────────────────── */
const KERALA = CLIENTS.filter((c) => c.region === "kerala");
const CALICUT = KERALA.filter((c) => /calicut/i.test(c.location || ""));
const REVIEW = CLIENTS.find((c) => c.review);
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black font-medium underline underline-offset-4 decoration-black/25 hover:decoration-black";

const BUILDS = [
  {
    title: "Business and company websites",
    text: "Services, team, location, enquiry form and WhatsApp button. Built on WordPress if your staff will edit it often, or as a fast static site if it rarely changes.",
    links: [["WordPress websites", "/website-development/wordpress-website-development"], ["Static websites", "/website-development/static-website-development"]],
  },
  {
    title: "Product catalogue websites",
    text: "For showrooms, wholesalers and manufacturers who want buyers to browse products and send an enquiry or WhatsApp order, without online payment.",
    links: [["Catalogue websites", "/website-development/catalogue-website-development"]],
  },
  {
    title: "Online stores",
    text: "Cart, checkout, UPI and card payments, cash on delivery and GST invoices, on Shopify, WooCommerce or a custom build.",
    links: [["Ecommerce websites", "/website-development/ecommerce-website-development"]],
  },
  {
    title: "Portals and booking systems",
    text: "Logins for customers, dealers, students or staff, with dashboards, bookings and records in one place.",
    links: [["Web portals", "/website-development/web-portal-development"]],
  },
];

const CHECKLIST = [
  {
    t: "Open their client websites on your phone",
    d: "Screenshots can be edited. A live site shows how fast it loads on mobile data, whether the menu works, and whether the call and WhatsApp buttons are easy to find.",
    us: <>Every site in our <Link href="/works" className={LINK_DARK}>portfolio</Link> links to the live website.</>,
  },
  {
    t: "Ask who owns the domain, hosting and code",
    d: "Some agencies register the domain in their own name. If you part ways, moving the site becomes hard or expensive.",
    us: "The domain, content and code are yours, and we hand over access at launch.",
  },
  {
    t: "Get a written quote that lists pages and features",
    d: "A single number with no scope leads to arguments later about what was included.",
    us: "Our quote lists the pages, features, timeline and what happens after launch.",
  },
  {
    t: "Ask what happens after launch",
    d: "Websites need updates, backups and small changes. Find out what is covered, who does it and what it costs.",
    us: "Maintenance is offered as a separate plan, so you can choose it or not.",
  },
  {
    t: "Check how enquiries will reach you",
    d: "A website is only useful if leads arrive somewhere you check. Ask whether forms, WhatsApp and calls are set up and tracked.",
    us: "We connect forms and WhatsApp, and set up Google Analytics and Search Console so you can see where enquiries come from.",
  },
  {
    t: "Meet the team in person",
    d: "For a first website, sitting down to go through the design is often faster than long email threads.",
    us: "You can meet us at HiLITE Business Park, Kozhikode.",
  },
];

const PROCESS = [
  { title: "First conversation", text: "At our office, on a video call or on WhatsApp: what the business does, who the customers are, and what the website must do." },
  { title: "Written quote", text: "Pages, features, platform, timeline and price, in writing before any work starts." },
  { title: "Design", text: "Home page and key page designs for your approval, with changes before development." },
  { title: "Build and review", text: "We build on a private link so you can check it on your own phone before launch." },
  { title: "Launch", text: "Domain, SSL, forms, WhatsApp, Google Analytics and Search Console set up, and a handover session." },
];

const FAQS = [
  {
    q: "Where is your office in Calicut?",
    a: "Ivoniz LLP, 7th Floor, Phase 1, HiLITE Business Park, Kozhikode, Kerala 673014. Message us on WhatsApp or call +91 96457 60023 before visiting, so the right person is free to meet you.",
  },
  {
    q: "How much does a website cost in Calicut?",
    a: "It depends on the number of pages, features such as online payment or logins, and who writes the content. A small business website costs much less than an online store or portal. After a short call we send a fixed written quote. Our custom website vs WordPress guide explains what drives the price.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A WordPress business website usually takes 2 to 6 weeks. Custom websites and online stores usually take 6 to 16 weeks. The biggest delay is usually content, so having your photos and text ready speeds things up.",
  },
  {
    q: "Do you work with businesses outside Calicut city?",
    a: "Yes. Our Kerala clients include businesses in Kondotty, Areekode, Kooriyad and Calicut, and we work with clients across Kerala and in the Gulf. Meetings can be in person at our office or by video call.",
  },
  {
    q: "Can you build an online store for my shop?",
    a: "Yes. We build stores on Shopify, WooCommerce or a custom platform, with UPI, cards and cash on delivery. If you want enquiries rather than online payments, a product catalogue website is simpler and cheaper.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Every site launches with the technical basics in place: clean URLs, page titles, a sitemap, fast loading and Search Console. Ranking for competitive searches takes ongoing work beyond launch, which is what our local SEO service covers.",
  },
];

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Website Development in Calicut",
      serviceType: "Website development",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "AdministrativeArea", name: "Malappuram" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Web Design and Website Development Company in Calicut",
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      publisher: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
        { "@type": "ListItem", position: 2, name: "Website Development", item: "https://ivoniz.com/website-development" },
        { "@type": "ListItem", position: 3, name: "Website Development in Calicut", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function CalicutWebsiteDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "Website Development", href: "/website-development" },
              { label: "Website Development in Calicut", href: "/website-development/best-website-development-company-in-calicut" },
            ]}
          />
          <div className="mt-8"><Label>Kozhikode, Kerala</Label></div>
          <HeroTitle outline="in Calicut">Web Design and Website Development Company</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[680px]">
              We design and build websites from our office at HiLITE Business Park, Kozhikode. Calicut businesses can
              meet us in person, see live websites we&apos;ve built for other Kerala businesses, and get a written quote
              before committing to anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PillLink href="#quote" solid label="Get a Website Quote" location="hero" />
              <PillLink
                href={waLink("Hi Ivoniz, I'm in Calicut and need a website for my business.")}
                external
                event="whatsapp_click"
                label="WhatsApp Our Team"
                location="hero"
                icon={<FaWhatsapp aria-hidden="true" />}
              />
            </div>
          </div>

          <ul className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              [`${KERALA.length} Kerala client sites`, "Live, linked below"],
              [`${CALICUT.length} in Calicut city`, CALICUT.map((c) => c.title.replace(/ LLP$/, "")).join(", ")],
              ["Next.js, WordPress, Shopify", "Chosen per project"],
              ["HiLITE Business Park", "7th Floor, Phase 1"],
            ].map(([a, b]) => (
              <li key={a} className="px-5 py-6 text-center" style={GLASS}>
                <p className="text-[15px] sm:text-[16px] font-semibold text-white">{a}</p>
                <p className="text-[13px] text-white/55 mt-1">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── LOCAL WORK ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-14">
            <div className="max-w-[760px]">
              <Label dark={false}>Our Work in Kerala</Label>
              <Heading dark={false}>Websites we&apos;ve built for Calicut and nearby businesses</Heading>
              <p className="mt-5 text-[16px] text-black/60 leading-relaxed">
                Open any of them on your phone. That tells you more about our work than anything we could write here.
              </p>
            </div>
            <Link href="/works" className="inline-flex items-center gap-2 text-[14px] font-medium text-black/60 hover:text-black transition-colors">
              All projects <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {KERALA.map((c) => (
              <article key={c.slug}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <span className="sr-only">Opens in a new tab: </span>
                  <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-black/8 transition-shadow duration-500 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
                    <Image src={c.image} alt={`${c.title} website built by Ivoniz`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[18px] font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-0.5 text-[13.5px] text-black/55 inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt aria-hidden="true" className="text-[11px]" /> {c.location} · {domainOf(c.url)}
                      </p>
                    </div>
                    <FiArrowUpRight aria-hidden="true" className="shrink-0 mt-1 text-[18px] text-black/50 group-hover:text-black" />
                  </div>
                </a>
                <p className="mt-2 text-[14px] text-black/60 leading-relaxed">{c.about}</p>
                <Link href={`/works/${c.slug}`} className="mt-2 inline-block text-[13px] text-black/60 underline underline-offset-4 decoration-black/20 hover:text-black">
                  What we delivered
                </Link>
              </article>
            ))}
          </div>
          {REVIEW && (
            <p className="mt-12 text-[15px] text-black/60">
              Want to hear from a client? Watch {REVIEW.review.name} of {REVIEW.review.org} talk about working with us on our{" "}
              <Link href="/clients" className={LINK_DARK}>clients page</Link>.
            </p>
          )}
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>What We Build</Label>
            <Heading>The right kind of website for what you sell</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              Most Calicut businesses we speak to need one of these four. Which one depends on how your customers buy:
              by calling, by visiting, by messaging or by paying online.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 border-t border-l border-white/10">
            {BUILDS.map((b) => (
              <div key={b.title} className="border-r border-b border-white/10 p-6 sm:p-9">
                <h3 className="text-[21px] sm:text-[23px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{b.title}</h3>
                <p className="mt-3 text-[15px] text-white/60 leading-relaxed">{b.text}</p>
                <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                  {b.links.map(([label, href]) => (
                    <Link key={href} href={href} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
                      {label} <FiArrowUpRight aria-hidden="true" />
                    </Link>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO CHOOSE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-white text-black overflow-hidden`}>
        <div className="relative mx-auto max-w-[1200px]">
          <div className="max-w-[820px]">
            <Label dark={false}>Before You Hire Anyone</Label>
            <Heading dark={false}>How to choose a website development company in Calicut</Heading>
            <p className="mt-5 text-[16px] text-black/60 leading-relaxed">
              Every agency calls itself the best, so that word won&apos;t help you decide. These six checks will, whoever
              you hire. Under each one is how we handle it.
            </p>
          </div>
          <ol className="mt-10 sm:mt-14 grid md:grid-cols-2 gap-x-10 gap-y-9">
            {CHECKLIST.map((c) => (
              <li key={c.t} className="border-t border-black/10 pt-6">
                <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{c.t}</h3>
                <p className="mt-2 text-[15px] text-black/60 leading-relaxed">{c.d}</p>
                <p className="mt-3 text-[14.5px] text-black/80 leading-relaxed"><span className="font-semibold">With Ivoniz: </span>{c.us}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>How It Works</Label>
            <Heading>From first meeting to launch</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              WordPress business sites usually take 2–6 weeks. Custom sites and online stores usually take 6–16 weeks.
            </p>
          </div>
          <ol className="border-t border-white/10">
            {PROCESS.map((s) => (
              <li key={s.title} className="border-b border-white/10 py-6 grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8">
                <h3 className="text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="text-[15px] text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── AFTER LAUNCH: being found locally ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>After Launch</Label>
            <Heading dark={false}>Getting found by customers in Calicut</Heading>
          </div>
          <div className="text-[16px] text-black/60 leading-relaxed space-y-4">
            <p>
              A new website doesn&apos;t rank on its own. For a local business, most enquiries from Google come through
              Google Maps and searches like &ldquo;near me&rdquo;, which depend on your Google Business Profile, reviews
              and local listings as much as the website.
            </p>
            <p>
              If you want help with that after launch, see our{" "}
              <Link href="/digital-marketing/seo-services/local-seo-services" className={LINK_DARK}>local SEO services in Calicut</Link>{" "}
              or the wider <Link href="/digital-marketing" className={LINK_DARK}>digital marketing</Link> services.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Get a Quote</Label>
            <Heading>Tell us about your website</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              Answer a few questions and send them on WhatsApp or email. We&apos;ll come back with questions about scope,
              then a fixed written quote.
            </p>
            <div className="mt-8 p-6 text-[14.5px] text-white/65 leading-relaxed" style={GLASS}>
              <p className="text-white font-medium">Prefer to visit?</p>
              <p className="mt-2">Ivoniz LLP, 7th Floor, Phase 1, HiLITE Business Park, Kozhikode, Kerala 673014</p>
              <p className="mt-3">
                <a href="tel:+919645760023" className={LINK}>+91 96457 60023</a>
                <span className="mx-2 text-white/30" aria-hidden="true">·</span>
                <a href="mailto:info@ivoniz.com" className={LINK}>info@ivoniz.com</a>
              </p>
            </div>
          </div>
          <ProjectQuoteForm
            idPrefix="clt"
            location="calicut_quote_form"
            types={[
              { id: "business", label: "Business website" },
              { id: "catalogue", label: "Product catalogue" },
              { id: "store", label: "Online store" },
              { id: "portal", label: "Portal or booking system" },
              { id: "redesign", label: "Redesign my website" },
            ]}
            places={["Calicut / Kozhikode", "Malappuram", "Elsewhere in Kerala", "Outside Kerala"]}
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Questions from Calicut businesses</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              More on pricing in our{" "}
              <Link href="/website-development/custom-website-vs-wordpress#cost" className={LINK}>custom website vs WordPress</Link> guide.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className={`relative py-16 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[900px] text-center">
          <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.6vw,64px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
            Talk to us before you decide
          </h2>
          <p className="mt-6 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[640px] mx-auto">
            Even if you&apos;re still comparing agencies, a short call will tell you what kind of website you need and
            roughly what it should cost.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <PillLink href="#quote" solid label="Get a Website Quote" location="closing" />
            <PillLink
              href={waLink("Hi Ivoniz, I'm comparing website companies in Calicut. Can we talk about my project?")}
              external
              event="whatsapp_click"
              label="Ask a Question on WhatsApp"
              location="closing"
              icon={<FaWhatsapp aria-hidden="true" />}
            />
          </div>
          <p className="mt-8 text-[14px] text-white/55">
            Outside Calicut? See our <Link href="/website-development" className={LINK}>website development services</Link> for Kerala and the Gulf.
          </p>
        </div>
      </section>

      <RelatedReading slugs={["local-seo-kerala-guide","cheap-vs-professional-website"]} />

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Quote" message="Hi Ivoniz, I'm in Calicut and need a website for my business." />
    </main>
  );
}
