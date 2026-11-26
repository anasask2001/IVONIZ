import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaMobileAlt, FaTabletAlt, FaSwift, FaPencilRuler, FaAppStoreIos, FaApple, FaTools, FaSyncAlt,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { IOS_PACKAGES } from "@/components/ecommerce/costs";
import AppQuoteForm from "@/components/app/AppQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /mobile-app-development/ios-app-development — owns iPhone / iPad app terms (SEO brief updated with
   Ubersuggest India db, 24 Nov 2026): "ios app development company" 1,000/mo
   SD 34 (primary), "iphone app development company" 390, "hire ios developer"
   320, "… company india" 260; easy wins "native ios app development company"
   110 SD 5, "ios app development company dubai" 90 SD 6 (hence "India & Dubai"
   in the title, matching the Android page), "hire ios developer in india" 50 SD 9.
   Breadcrumb: Home › Mobile App Development › iOS App Development.
   Does NOT target: Android, cross-platform (Flutter page), generic app terms.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/mobile-app-development/ios-app-development";
const TITLE = "iOS App Development Company in India & Dubai | Ivoniz LLP";
const DESCRIPTION =
  "iOS app development company building fast, secure iPhone and iPad apps in Swift. App Store launch, support and dedicated iOS developers. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "iPhone & iPad App Development Company | Swift Experts",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "iPhone and iPad app screens designed and built by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone & iPad App Development Company | Swift Experts",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  talk: "Hi Ivoniz, I want to build an iPhone app for my business. Can I talk to an iOS developer?",
  consult: "Hi Ivoniz, I'm not sure if I need a native iOS app or a cross-platform app. Can we book a free consultation?",
  agency: "Hi Ivoniz, we're an agency looking for white-label iOS (Swift) development support.",
  gcc: "Hi Ivoniz, I want to build an iPhone app for my business in the UAE / Saudi Arabia / GCC. Can we talk in Gulf time?",
  kerala: "Hi Ivoniz, I want to build an iPhone app for my business in Kerala. Can I meet your team?",
};

/* Form "need" options (brief) — CTAs link to #quote-<id> to pre-select. */
const NEEDS = [
  { id: "new", label: "New iOS app", lead: "ios_project" },
  { id: "both", label: "iPhone + Android", lead: "ios_project" },
  { id: "update", label: "Update existing app", lead: "ios_project" },
  { id: "hire", label: "Hire developer", lead: "ios_hire" },
];

const SERVICES = [
  { Icon: FaMobileAlt, title: "Custom iPhone app development", text: "Native apps built around your business, designed to Apple's Human Interface Guidelines." },
  { Icon: FaTabletAlt, title: "iPad app development", text: "Layouts and features built for larger screens, Apple Pencil and multitasking." },
  { Icon: FaSwift, title: "SwiftUI and Swift development", text: "Modern, maintainable native code." },
  { Icon: FaPencilRuler, title: "iOS UI/UX design", text: "App designs and prototypes that feel at home on iPhone." },
  { Icon: FaAppStoreIos, title: "App Store launch", text: "Developer account setup, App Store listing, screenshots, review guidelines and submission." },
  { Icon: FaApple, title: "Apple ecosystem integration", text: "Apple Pay, Sign in with Apple, push notifications, HealthKit, Apple Watch and widgets." },
  { Icon: FaTools, title: "iOS app maintenance", text: "Updates for each new iOS version, bug fixes and new features." },
  { Icon: FaSyncAlt, title: "App modernisation", text: "Rebuild older Objective-C or slow apps in Swift." },
];

const WHY_NATIVE = [
  ["Best performance.", "Native Swift apps run fastest and use device resources most efficiently."],
  ["Premium experience.", "Apps that look and behave the way iPhone users expect."],
  ["Full access to Apple features.", "Apple Pay, Face ID, HealthKit, widgets and the latest iOS APIs on day one."],
  ["High-value users.", "iPhone users often spend more in apps, which matters for ecommerce, subscriptions and premium services."],
  ["Security.", "Apple's platform security plus secure coding and data storage."],
];

/* TODO before launch: confirm engagement models and add rates. */
const ENGAGEMENTS = [
  { model: "Fixed-price project", best: "A defined iPhone or iPad app" },
  { model: "Dedicated iOS developer (monthly)", best: "Ongoing product development" },
  { model: "Team extension", best: "Agencies and startups needing Swift capacity" },
];

const APPS = [
  <>Ecommerce and shopping apps with Apple Pay, alongside your <Link key="ec" href="/website-development/ecommerce-website-development" className={LINK}>ecommerce website development</Link></>,
  "Booking and membership apps",
  "Healthcare and fitness apps (HealthKit)",
  "Real estate and property apps",
  "Finance and subscription apps",
  "Enterprise and field-team apps",
  <>Companion apps for <Link key="wp" href="/website-development/web-portal-development" className={LINK}>web portal development</Link> projects</>,
];

const APP_STORE_STEPS = [
  ["Listing", "App name, subtitle, keywords, description and category chosen for App Store search."],
  ["Screenshots and preview", "iPhone and iPad screenshots in every required size, plus an optional app preview video."],
  ["Privacy details", "Apple's privacy “nutrition label” and a privacy policy that match what the app really collects."],
  ["Review guidelines", "We check sign-in, payments, content and permissions against Apple's rules before submitting, to avoid rejections."],
];

const PROCESS = [
  { title: "Discovery", text: "Goals, users, features and App Store strategy." },
  { title: "Design and prototype", text: "Clickable iPhone prototype before coding." },
  { title: "Swift development", text: "Sprints with TestFlight builds on your iPhone." },
  { title: "Backend and integrations", text: "APIs, admin panel, Apple Pay, notifications." },
  { title: "Testing", text: "Devices, iOS versions, performance and security." },
  { title: "App Store submission", text: "Listing, review guidelines and approval." },
  { title: "Support", text: "iOS updates, monitoring and new features." },
];

const FAQS = [
  { q: "How much does iOS app development cost in India?", a: "An iOS MVP typically costs ₹2 lakh to ₹4.5 lakh, and a full business iPhone app costs ₹4.5 lakh to ₹10 lakh or more, depending on features and integrations." },
  { q: "How long does it take to build an iPhone app?", a: "An MVP takes 7 to 10 weeks, and a full business app 10 to 16 weeks, plus App Store review time (usually a few days)." },
  { q: "Do you build native iOS apps or cross-platform apps?", a: "Both. We build native apps in Swift and SwiftUI for the best iPhone experience, and Flutter apps when you need Android and iOS from one codebase." },
  { q: "Will you publish my app on the App Store?", a: "Yes. We prepare the listing, screenshots and privacy details, follow Apple's review guidelines and handle submission and approval." },
  { q: "Do I need an Apple Developer account?", a: "Yes. The app is published under your own Apple Developer account so you own it; we help you set it up." },
  { q: "Can you build iPad and Apple Watch apps too?", a: "Yes. We build iPad-optimised apps and can add Apple Watch apps and home-screen widgets." },
  { q: "Can I hire a dedicated iOS developer?", a: "Yes. You can hire Ivoniz iOS developers for a fixed project, monthly, or as an extension of your team." },
  { q: "Can you build an Arabic iPhone app?", a: "Yes. We build bilingual English and Arabic iOS apps with full right-to-left support for UAE and GCC users." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "iOS App Development",
      serviceType: "iOS app development",
      provider: { "@id": ORG_ID },
      about: { "@type": "Thing", name: "iOS", sameAs: "https://en.wikipedia.org/wiki/IOS" },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Oman" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "iOS services",
        itemListElement: [
          "iPhone app development",
          "iPad app development",
          "Swift and SwiftUI development",
          "App Store submission",
          "Hire dedicated iOS developers",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "iOS App Development Company in India & Dubai",
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
        { "@type": "ListItem", position: 2, name: "Mobile App Development", item: "https://ivoniz.com/mobile-app-development" },
        { "@type": "ListItem", position: 3, name: "iOS App Development", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

const h2Style = { fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(26px,2.8vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em" };

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function IosAppDevelopmentPage() {
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
              { label: "Mobile App Development", href: "/mobile-app-development" },
              { label: "iOS App Development", href: "/mobile-app-development/ios-app-development" },
            ]}
          />
          <div className="mt-8"><Label>iOS App Development Company</Label></div>
          <HeroTitle outline="iPhone and iPad Apps">iOS App Development Company for High-Quality</HeroTitle>

          <p className="mt-10 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
            Ivoniz is an iOS app development company in India that designs and builds fast, secure, polished apps for
            iPhone and iPad. We develop native apps in Swift and SwiftUI, handle App Store submission end to end, and
            support your app after launch. We work with startups and businesses in India, the UAE and across the GCC,
            where iPhone users make up a large share of the market.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-3 max-w-[1100px]">
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Build an app</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>An iPhone or iPad app for your business</p>
              <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed flex-1">Prototype, Swift development, App Store launch and support.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-new" solid label="Get an iOS App Estimate" location="hero_project" event="estimate_click" />
                <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="Talk to an iOS Developer" location="hero_project" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Grow your team</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Hire iOS developers</p>
              <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed flex-1">Dedicated Swift developers or team extension for your product or agency.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-hire" solid label="Hire iOS Developers" location="hero_hire" event="hire_click" />
                <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="Agency? Talk white-label" location="hero_hire" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> Test your app on your own iPhone every sprint (TestFlight)</li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> App Store submission handled for you</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Office at HiLITE Business Park, Kozhikode</li>
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our native iOS app development services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              As an iPhone app development company in India and a native iOS app development company, we cover
              everything from the first design to App Store approval and each new iOS release after it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[240px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-8 text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5" style={GLASS}>
            <p className="text-[16px] text-white/75 leading-relaxed">
              <strong className="font-semibold text-white">Not sure if you need native iOS?</strong> If you also need
              Android, a cross-platform app may cost less. We&apos;ll tell you honestly in a free consultation.
            </p>
            <PillLink href={waLink(WA.consult)} external solid event="consult_click" label="Free consultation" location="services_native_or_flutter" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
        </div>
      </section>

      {/* ── WHY NATIVE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Why Native</Label>
            <Heading dark={false}>Why build a native iOS app?</Heading>
            <div className="mt-8 rounded-2xl bg-black text-white p-6">
              <p className="text-[15px] leading-relaxed text-white/75">
                Need Android too? See <Link href="/mobile-app-development/android-app-development" className={LINK}>Android app development</Link>, or save cost with a cross-platform build: see{" "}
                <Link href="/mobile-app-development/flutter-app-development" className={LINK}>Flutter app development</Link> or our{" "}
                <Link href="/mobile-app-development" className={LINK}>mobile app development</Link> services. Comparing approaches? Read our{" "}
                <Link href="/mobile-app-development/native-app-development" className={LINK}>native app development</Link> guide.
              </p>
            </div>
          </div>
          <ul className="border-t border-black/10">
            {WHY_NATIVE.map(([b, rest]) => (
              <li key={b} className="flex gap-4 border-b border-black/10 py-5">
                <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[13px] text-black/60" />
                <p className="text-[16px] leading-relaxed text-black/65"><strong className="font-semibold text-black">{b}</strong> {rest}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SWIFT / SWIFTUI TECH (brief: technology H2) ──
          TODO before launch: confirm this matches Ivoniz's real iOS setup. */}
      <section id="technology" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Technology</Label>
            <Heading>Swift and SwiftUI app development</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              We write new iPhone and iPad apps in Swift with SwiftUI, Apple&apos;s modern way to build interfaces, and
              use UIKit where an app needs it. The result is native code that is fast today and easy to update for
              each new iOS release.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {[
              ["Interface", "SwiftUI for new screens, with UIKit for complex custom views and older codebases."],
              ["Data and sync", "SwiftData or Core Data on the device, synced with Firebase, CloudKit or your own Node.js API."],
              ["Apple features", "Apple Pay, Sign in with Apple, push notifications, widgets, HealthKit and Apple Watch."],
              ["Quality", "XCTest unit and UI tests on key flows, crash reporting and performance checks on real devices."],
              ["Builds", "Automated builds sent to TestFlight every sprint, so you test on your own iPhone."],
              ["Accessibility", "Dynamic Type, VoiceOver labels and dark mode support, which Apple reviewers and users expect."],
            ].map(([t, d]) => (
              <div key={t} className="p-6" style={GLASS}>
                <dt className="text-[17px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</dt>
                <dd className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── HIRE iOS DEVELOPERS ── */}
      <section id="hire" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Hire Developers</Label>
            <Heading>Hire iOS developers</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Hire iOS developers in India from Ivoniz for a single project, or add a dedicated iPhone app developer
              to your team. Agencies can use us as white-label iOS capacity, with TestFlight builds and progress updates every
              sprint.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href="#quote-hire" solid label="Hire iOS Developers" location="hire_section" event="hire_click" />
              <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="White-label support for agencies" location="hire_agency" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
          <div className="overflow-hidden" style={GLASS}>
            <table className="w-full text-left">
              <caption className="sr-only">Ways to hire iOS developers from Ivoniz</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">Engagement</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">Best for</th>
                </tr>
              </thead>
              <tbody>
                {ENGAGEMENTS.map((e) => (
                  <tr key={e.model} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 text-[16px] text-white font-normal align-top" style={{ fontFamily: OPEN_SANS }}>{e.model}</th>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 leading-relaxed">{e.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── APPS WE BUILD + APP STORE LAUNCH ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Label>Apps We Build</Label>
            <Heading>iOS apps we build</Heading>
            <ul className="mt-8 grid gap-3">
              {APPS.map((t, i) => (
                <li key={i} className="flex gap-4 px-5 py-4" style={GLASS}>
                  <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/60" />
                  <span className="text-[15px] text-white/80 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label>App Store</Label>
            <Heading>App Store launch, handled</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              Getting through Apple&apos;s review is where many first apps stall. We publish under your own Apple
              Developer account and prepare everything Apple checks:
            </p>
            <dl className="mt-6 border-t border-white/10">
              {APP_STORE_STEPS.map(([t, d]) => (
                <div key={t} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 border-b border-white/10 py-5">
                  <dt className="text-[16px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</dt>
                  <dd className="text-[14.5px] text-white/60 leading-relaxed">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── COST ── */}
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">iOS app development cost in India</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Typical iOS app development cost in India, in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["App type", "Typical cost (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {IOS_PACKAGES.map((p) => (
                  <tr key={p.id} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 align-top font-normal">
                      <span className="block text-[16px] text-white" style={{ fontFamily: OPEN_SANS }}>{p.label}</span>
                      <span className="block mt-1 text-[13px] text-white/55">{p.features}</span>
                    </th>
                    <td className="px-6 py-5 text-[17px] text-white tabular-nums whitespace-nowrap align-top" style={{ fontFamily: OPEN_SANS }}>{p.inr}</td>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 whitespace-nowrap align-top">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-white/55 max-w-[820px] leading-relaxed">
            Indicative ranges. Apple&apos;s Developer Program fee is separate. UAE and GCC projects are quoted in AED.
          </p>
          <div className="mt-8">
            <PillLink href="#quote-new" solid label="Get Your iOS App Estimate" location="pricing" event="estimate_click" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>Our iOS development process</Heading>
            </div>
            <p className="text-white/60 text-[15px] max-w-[420px] leading-relaxed">
              Every sprint ends with a TestFlight build, so you try the app on your own iPhone long before launch.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-9 sm:gap-y-12">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-3 sm:mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(36px,4vw,64px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── UAE / GCC + KERALA ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Where We Work</Label>
          <Heading className="max-w-[900px] mb-8 sm:mb-14">iOS app development for the UAE, GCC and Kerala</Heading>
          <div className="grid lg:grid-cols-2 gap-3">
            <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
              <h3 className="text-white" style={h2Style}>Dubai, UAE and GCC</h3>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/65 flex-1">
                We build bilingual English–Arabic iPhone apps with right-to-left layouts, Apple Pay and GCC payment
                gateways, and in-region hosting where required. With iPhone so widely used across the UAE, Saudi Arabia
                and Qatar, many GCC businesses want an iOS app from day one. We have no office in the Gulf: we work
                with UAE, Saudi, Qatar and Oman clients remotely from Kozhikode, with quotes in AED and calls in Gulf
                time.
              </p>
              <div className="mt-8">
                <PillLink href={waLink(WA.gcc)} external solid event="whatsapp_click" label="Talk to us in Gulf time" location="gcc_block" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </article>
            <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
              <h3 className="text-white" style={h2Style}>Kerala</h3>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/65">
                Our team works from HiLITE Business Park, Kozhikode (Calicut), and supports businesses across Kerala,
                including Kochi (Cochin).
              </p>
              {/* NAP: keep identical to the Google Business Profile (source: src/lib/schema.js) */}
              <address className="not-italic mt-6 grid gap-3 text-[14.5px] text-white/75 flex-1">
                <span className="flex gap-3">
                  <FaMapMarkerAlt aria-hidden="true" className="shrink-0 mt-1 text-white/55" />
                  <span>Ivoniz LLP, {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India</span>
                </span>
                <a href="tel:+919645760023" className="flex items-center gap-3 hover:text-white">
                  <FaPhoneAlt aria-hidden="true" className="shrink-0 text-white/55" /> +91 96457 60023
                </a>
              </address>
              <div className="mt-8">
                <PillLink href={waLink(WA.kerala)} external solid event="whatsapp_click" label="WhatsApp our Kerala team" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for iOS app development</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote-new" label="Start Your iOS App Project" location="why_ivoniz" event="estimate_click" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Native iOS, Flutter and web portals from one team, so you get honest platform advice",
              "TestFlight builds every sprint, so you test on your own iPhone",
              "App Store submission handled for you",
              "You own the code, the App Store listing and the data",
              "Long-term support for each new iOS release",
            ].map((t, i) => (
              <li key={t} className="flex items-baseline gap-6 border-b border-white/10 py-6">
                <span className="text-[13px] text-white/55 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] sm:text-[19px] text-white/85 leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 300 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>iOS app development FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Prefer one app for iPhone and Android? See{" "}
              <Link href="/mobile-app-development/flutter-app-development" className={LINK}>Flutter app development</Link>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-16 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        {NEEDS.map((n) => <span key={n.id} id={`quote-${n.id}`} className="absolute top-0" aria-hidden="true" />)}
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Get an Estimate</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Ready to launch <span style={OUTLINE}>your iPhone app?</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Share your app idea, key features and target users. We&apos;ll recommend native iOS or Flutter, outline
              an MVP and send a clear estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href="#quote-hire" label="Hire iOS Developers" location="closing" event="hire_click" />
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <AppQuoteForm needs={NEEDS} tech="iOS" leadType="ios_project" />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="iOS Estimate" message={WA.talk} />
    </main>
  );
}
