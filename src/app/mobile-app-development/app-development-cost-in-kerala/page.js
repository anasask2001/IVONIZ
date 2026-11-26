import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, waLink, Label, Heading, HeroTitle, Grid, FaqList } from "@/components/site/SiteUI";
import ProjectQuoteForm from "@/components/site/ProjectQuoteForm";
import { APP_PACKAGES, ANDROID_PACKAGES, NATIVE_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /mobile-app-development/app-development-cost-in-kerala — price guide.
   Owns "app development cost in kerala", "mobile app development cost in
   kerala" (Google autocomplete, Nov 2026), "how much does it cost to make an
   app in kerala". Informational with buyer intent: answer first, then a form.
   Numbers come from costs.js: INDICATIVE MARKET RANGES from the SEO briefs,
   labelled as such (not Ivoniz prices). The hub keeps a short cost section
   and links here. Store fees are Apple's / Google's published fees.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/mobile-app-development/app-development-cost-in-kerala";
const TITLE = "App Development Cost in Kerala: 2026 Price Guide | Ivoniz LLP";
const DESCRIPTION =
  "What does a mobile app cost in Kerala? Typical price ranges for MVPs, business, ecommerce and complex apps, Android vs iOS, and yearly running costs.";
const PUBLISHED = "2026-11-26";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { siteName: "Ivoniz LLP", title: "App Development Cost in Kerala (2026)", description: DESCRIPTION, url: PAGE_URL, type: "article", images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Mobile app development cost guide for Kerala" }] },
  twitter: { card: "summary_large_image", title: "App Development Cost in Kerala (2026)", description: DESCRIPTION, images: ["/ivoniz-og-image.webp"] },
  robots: { index: true, follow: true },
};

const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const aed = (n) => `AED ${n.toLocaleString("en-US")}`;
const MVP = APP_PACKAGES[0];
const BIZ = APP_PACKAGES[1];

const DRIVERS = [
  ["Android, iPhone or both", "One cross-platform app (Flutter or React Native) covers both phones from one codebase. Two separate native apps cost close to double."],
  ["Number of user types", "A customer-only app is simpler than one with customers, delivery staff, shop owners and an admin, each with their own screens."],
  ["Payments", "UPI, cards or wallets need a payment gateway, refunds and order records, and careful testing."],
  ["Live features", "Chat, live tracking on a map and instant notifications need more backend work and server cost."],
  ["Admin panel", "Most business apps need a web dashboard to manage users, orders and content. That is a second piece of software."],
  ["Integrations", "Connecting to your website, Tally, a CRM or an ERP adds work, and depends on how good their APIs are."],
];

const RUNNING = [
  ["Maintenance", "Typically 15–20% of the build cost per year: updates for new Android and iOS versions, bug fixes and small changes."],
  ["Servers and backend", "Hosting for the database, APIs and admin panel. Small apps cost little; apps with many users, images or live tracking cost more."],
  ["Apple Developer Program", "US$99 per year, needed to publish on the App Store (Apple's published fee)."],
  ["Google Play developer account", "A one-time US$25 registration fee (Google's published fee)."],
  ["Third-party services", "SMS for login codes, maps, payment gateway fees per transaction, and push notification services, depending on the app."],
];

const FAQS = [
  { q: "How much does it cost to make an app in Kerala?", a: `Typical market ranges in Kerala are ${MVP.inr} for a simple app or MVP, ${BIZ.inr} for a business app with payments and a dashboard, and ${APP_PACKAGES[2].inr} for ecommerce or on-demand apps. Complex apps cost more. These are market ranges, not a quote.` },
  { q: "Is it cheaper to build only an Android app?", a: `Yes, for one platform. An Android MVP is typically ${ANDROID_PACKAGES[0].inr}. But a cross-platform Flutter app can cover Android and iPhone for not much more, which is why most business apps in Kerala are built that way.` },
  { q: "What is an MVP and why start with one?", a: "A minimum viable product is the smallest version of the app that real users can download and use. It costs less, launches sooner, and lets real usage decide what to build next instead of guesses." },
  { q: "How long does it take to build an app?", a: `A simple app or MVP usually takes ${MVP.time}, a business app ${BIZ.time}, and ecommerce or on-demand apps ${APP_PACKAGES[2].time}.` },
  { q: "Does an app cost more for a Dubai or Gulf business?", a: `Quotes for GCC businesses are usually in AED and higher, and Arabic with a right-to-left layout adds work. As a guide, an MVP is typically ${aed(MVP.aedMin)} to ${aed(MVP.aedMax)}.` },
  { q: "Who owns the app after it is built?", a: "You should. Make sure the contract gives you the source code, and that the App Store and Google Play accounts are in your business's name." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "App Development Cost in Kerala: 2026 Price Guide",
      description: DESCRIPTION,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: PAGE_URL,
      image: "https://ivoniz.com/ivoniz-og-image.webp",
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
        { "@type": "ListItem", position: 2, name: "Mobile App Development", item: "https://ivoniz.com/mobile-app-development" },
        { "@type": "ListItem", position: 3, name: "App Cost in Kerala", item: PAGE_URL },
      ],
    },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const TH = "px-5 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase text-white/55";

export default function AppCostKeralaPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO: answer first ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-20 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px]">
          <Breadcrumbs dark items={[{ label: "Mobile App Development", href: "/mobile-app-development" }, { label: "App Cost in Kerala", href: "/mobile-app-development/app-development-cost-in-kerala" }]} />
          <div className="mt-8"><Label>Price Guide · Updated November 2026</Label></div>
          <HeroTitle outline="in Kerala">App Development Cost</HeroTitle>
          <div className="mt-10 p-6 sm:p-8 max-w-[860px]" style={GLASS}>
            <p className="text-[17px] sm:text-[19px] leading-relaxed text-white/85">
              <strong className="text-white font-semibold">Short answer:</strong> in Kerala, a simple app or MVP
              typically costs {MVP.inr}, and a business app with payments and an admin dashboard {BIZ.inr}. Ecommerce
              and delivery apps cost more. The biggest factors are the number of user types, payments and live features.
            </p>
            <p className="mt-4 text-[14px] text-white/55 leading-relaxed">
              These are typical market ranges we use as a guide, not a quote. A fixed price needs your feature list.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICE BY APP TYPE ── */}
      <section className={`relative py-14 sm:py-24 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1100px]">
          <Label>Price by App Type</Label>
          <Heading>What each type of app costs</Heading>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[720px] text-left">
              <caption className="sr-only">Typical mobile app development cost in Kerala by app type</caption>
              <thead>
                <tr className="bg-white/[0.04]">{["App type", "Typical features", "India (INR)", "UAE / GCC (AED)", "Timeline"].map((h) => <th key={h} scope="col" className={TH}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {APP_PACKAGES.map((p) => (
                  <tr key={p.id} className="border-t border-white/8 align-top">
                    <th scope="row" className="px-5 py-4 font-normal text-[15px] text-white/90">{p.label}</th>
                    <td className="px-5 py-4 text-[14px] text-white/60">{p.features}</td>
                    <td className="px-5 py-4 text-[15px] text-white tabular-nums whitespace-nowrap">{p.inr}</td>
                    <td className="px-5 py-4 text-[14.5px] text-white/70 tabular-nums whitespace-nowrap">{p.openEnded ? `${aed(p.aedMin)}+` : `${aed(p.aedMin)} – ${aed(p.aedMax)}`}</td>
                    <td className="px-5 py-4 text-[14px] text-white/60 whitespace-nowrap">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-16 text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(24px,2.4vw,32px)", letterSpacing: "-0.02em" }}>
            One platform or both?
          </h3>
          <p className="mt-3 text-[15.5px] text-white/60 leading-relaxed max-w-[780px]">
            Building separate native apps for Android and iPhone costs close to double. That&apos;s why most business apps
            use a cross-platform framework like Flutter, which shares one codebase. Native apps make sense when an app
            depends on deep device features.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[620px] text-left">
              <caption className="sr-only">Native app cost for one platform versus both</caption>
              <thead>
                <tr className="bg-white/[0.04]">{["Native app", "One platform", "Android + iOS", "Timeline"].map((h) => <th key={h} scope="col" className={TH}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {NATIVE_PACKAGES.map((p) => (
                  <tr key={p.id} className="border-t border-white/8">
                    <th scope="row" className="px-5 py-4 font-normal text-[15px] text-white/90">{p.label}</th>
                    <td className="px-5 py-4 text-[15px] text-white tabular-nums whitespace-nowrap">{p.one}</td>
                    <td className="px-5 py-4 text-[15px] text-white tabular-nums whitespace-nowrap">{p.both}</td>
                    <td className="px-5 py-4 text-[14px] text-white/60 whitespace-nowrap">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[14.5px] text-white/60">
            More detail by platform:{" "}
            <Link href="/mobile-app-development/flutter-app-development" className={LINK}>Flutter</Link>,{" "}
            <Link href="/mobile-app-development/android-app-development" className={LINK}>Android</Link>,{" "}
            <Link href="/mobile-app-development/ios-app-development" className={LINK}>iOS</Link> and{" "}
            <Link href="/mobile-app-development/native-app-development" className={LINK}>native vs cross-platform</Link>.
          </p>
        </div>
      </section>

      {/* ── DRIVERS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-[#f8f8f8] text-black`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Why Prices Differ</Label>
          <Heading dark={false}>What makes an app cost more</Heading>
          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
            {DRIVERS.map(([t, d]) => (
              <div key={t} className="border-t border-black/10 pt-5">
                <h3 className="text-[19px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</h3>
                <p className="mt-2 text-[15px] text-black/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RUNNING COSTS ── */}
      <section className={`relative py-14 sm:py-24 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Label>After Launch</Label>
            <Heading>The running costs nobody mentions</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              An app is not a one-time purchase. Budget for these every year, and ask whether a quote includes any of them.
            </p>
          </div>
          <ul className="grid gap-3 self-start">
            {RUNNING.map(([t, d]) => (
              <li key={t} className="p-5" style={GLASS}>
                <p className="text-[16px] text-white">{t}</p>
                <p className="mt-1 text-[14.5px] text-white/60 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote" className={`relative py-14 sm:py-24 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Get an Exact Price</Label>
            <Heading>Want a price for your app idea?</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              Tell us what the app should do and who will use it. We reply with questions, suggest what to build first,
              and send a fixed written quote.
            </p>
            <div className="mt-8">
              <PillLink href={waLink("Hi Ivoniz, I read your app cost guide and want a price for my app idea.")} external event="whatsapp_click" label="Ask on WhatsApp" location="cost_guide" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
          <ProjectQuoteForm
            idPrefix="acost"
            subject="mobile app"
            leadType="app_quote"
            location="app_cost_guide_form"
            messageHint="What should the app do, who will use it, and does it need payments or live tracking?"
            types={[
              { id: "mvp", label: "Simple app / MVP" },
              { id: "business", label: "Business app" },
              { id: "ecommerce", label: "Shopping or delivery app" },
              { id: "complex", label: "Complex app" },
              { id: "unsure", label: "Not sure yet" },
            ]}
            places={["Kerala", "Elsewhere in India", "UAE", "Saudi Arabia", "Qatar", "Other GCC", "Other"]}
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-24 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>App cost questions</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              See our <Link href="/mobile-app-development" className={LINK}>mobile app development</Link> services.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Get a Price" message="Hi Ivoniz, I read your app cost guide and want a price for my app idea." />
    </main>
  );
}
