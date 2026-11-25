import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaApple, FaAndroid, FaPencilRuler, FaServer, FaMicrochip, FaExchangeAlt, FaTools, FaCheck,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { NATIVE_PACKAGES } from "@/components/ecommerce/costs";
import AppQuoteForm from "@/components/app/AppQuoteForm";
import PlatformDecisionTool from "@/components/app/PlatformDecisionTool";

/* ════════════════════════════════════════════════════════════════
   /mobile-app-development/native-app-development — owns the generic native terms (SEO brief,
   Ubersuggest India db, 24 Nov 2026): "native app development" 9,900/mo SD 12
   (informational: educate, then convert), buyer terms "native app development
   service" 720 SD 34 and "… company" 320 SD 23, "native vs hybrid app" 260.
   Routes readers to the iOS, Android or Flutter page. No location in title.
   Breadcrumb: Home › Mobile App Development › Native App Development.
   Does NOT target: platform-specific Android / iOS company terms, React Native
   (cross-platform; own page recommended), "cloud native", tools/tutorials.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/mobile-app-development/native-app-development";
const TITLE = "Native App Development Services for iOS & Android | Ivoniz LLP";
const DESCRIPTION =
  "Native app development services for iOS and Android: fast, secure apps in Swift and Kotlin. Compare native vs hybrid and get a free estimate from Ivoniz.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Native App Development Company | iOS & Android",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Native iOS and Android app screens built by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Native App Development Company | iOS & Android",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  consult: "Hi Ivoniz, I need help choosing native or cross-platform for my app. Can we book a free 20-minute platform consultation?",
  talk: "Hi Ivoniz, I'd like to discuss a native iOS / Android app for my business.",
};

const SERVICES = [
  { Icon: FaApple, title: "Native iOS app development", text: <>Swift and SwiftUI apps for iPhone, iPad and Apple Watch. See <Link href="/mobile-app-development/ios-app-development" className={LINK}>iOS app development</Link>.</> },
  { Icon: FaAndroid, title: "Native Android app development", text: <>Kotlin and Jetpack Compose apps for phones, tablets and Wear OS. See <Link href="/mobile-app-development/android-app-development" className={LINK}>Android app development</Link>.</> },
  { Icon: FaPencilRuler, title: "Native app UI/UX design", text: "Designs that follow Apple's Human Interface Guidelines and Google's Material Design." },
  { Icon: FaServer, title: "Backend and API development", text: "Secure APIs, admin panels and cloud hosting shared by both apps." },
  { Icon: FaMicrochip, title: "Hardware and OS integrations", text: "Camera, GPS, Bluetooth, NFC, biometrics, background tasks, widgets, Apple Pay and Google Pay." },
  { Icon: FaExchangeAlt, title: "Cross-platform to native migration", text: "Rebuild a slow hybrid app natively when performance becomes a problem." },
  { Icon: FaTools, title: "Native app maintenance", text: "Updates for every new iOS and Android release, plus monitoring and new features." },
];

const COMPARE = [
  ["Codebase", "Two (one per platform)", "One", "One"],
  ["Performance", "Highest", "High", "Lower"],
  ["User experience", "Best, fully platform-specific", "Very good", "Basic"],
  ["Device features", "Full, immediate access", "Most, via plugins", "Limited"],
  ["Cost", "Highest", "Medium", "Lowest"],
  ["Best for", "Performance-critical, hardware-heavy, premium apps", "Most business apps and MVPs", "Simple content apps"],
];

const WHEN_NATIVE = [
  "Fintech, banking and payment apps that need maximum security",
  "Healthcare apps using HealthKit, Google Fit or connected devices",
  "Apps using Bluetooth, NFC, AR or the camera intensively",
  "Games and apps with complex animations or graphics",
  "Apps where a premium iPhone experience matters (for example, GCC consumer brands)",
  "Large apps expected to scale to many users and features over years",
];

const PROCESS = [
  { title: "Platform strategy", text: "Native, cross-platform or a mix, decided against your goals and budget." },
  { title: "Design", text: "Platform-specific prototypes for iOS and Android." },
  { title: "Native development", text: "Swift and Kotlin sprints, with TestFlight and Android test builds." },
  { title: "Shared backend", text: "One API and admin panel serving both apps." },
  { title: "Testing", text: "Devices, OS versions, performance and security." },
  { title: "Store launch", text: "App Store and Google Play submission." },
  { title: "Support", text: "OS updates, monitoring and new features." },
];

const FAQS = [
  { q: "What is native app development?", a: "Native app development is building a mobile app separately for each platform using its official language: Swift for iOS and Kotlin for Android. The result is the fastest, most reliable app experience on each device." },
  { q: "What is the difference between native and hybrid apps?", a: "Native apps are built separately for iOS and Android and run directly on the device for the best performance. Hybrid apps use one web-based codebase inside an app shell, which is cheaper but slower and more limited." },
  { q: "Is native app development better than cross-platform?", a: "Native is better for performance-critical, hardware-heavy or premium apps. Cross-platform tools like Flutter are better when you need both platforms quickly on a tighter budget." },
  { q: "How much does native app development cost?", a: "A native MVP for one platform typically costs ₹1.5 lakh to ₹4.5 lakh, and both platforms ₹3 lakh to ₹8 lakh, depending on features." },
  { q: "Which languages are used for native apps?", a: "Swift (with SwiftUI) for iPhone and iPad, and Kotlin (with Jetpack Compose) for Android." },
  { q: "Can I start with one platform and add the other later?", a: "Yes. Many businesses launch on Android or iOS first, then build the second app on the same backend once the first is proven." },
  { q: "Is React Native a native app framework?", a: "No. React Native is a cross-platform framework that renders native UI components from one JavaScript codebase. It's closer to Flutter than to fully native Swift or Kotlin development." },
  { q: "Do you maintain native apps after launch?", a: "Yes. We update apps for each new iOS and Android release, fix issues and add features under a support plan." },
];

const FEATURES = ["Hardware (Bluetooth, NFC, camera)", "Payments", "Real-time / chat", "Maps and location", "Health data", "Offline use"];

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Native App Development",
      serviceType: "Native mobile app development",
      provider: { "@id": ORG_ID },
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
        name: "Native app development services",
        itemListElement: [
          "Native iOS app development (Swift, SwiftUI)",
          "Native Android app development (Kotlin, Jetpack Compose)",
          "Hybrid to native app migration",
          "Native app maintenance",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Native App Development Services for iOS & Android",
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
        { "@type": "ListItem", position: 3, name: "Native App Development", item: PAGE_URL },
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
export default function NativeAppDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs
            dark
            items={[
              { label: "Mobile App Development", href: "/mobile-app-development" },
              { label: "Native App Development", href: "/mobile-app-development/native-app-development" },
            ]}
          />
          <div className="mt-8"><Label>Native App Development Company</Label></div>
          <HeroTitle outline="iOS and Android Apps">Native App Development Company for High-Performance</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
              Ivoniz is a native app development company that builds fast, secure apps in Swift for iOS and Kotlin for
              Android. Native apps are written specifically for each platform, so they deliver the best performance,
              the smoothest experience and full access to device features. We help businesses in India, the UAE and
              the GCC decide whether native is right for them, then design, build and launch it.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#quote" solid label="Get a Native App Estimate" location="hero" event="estimate_click" />
              <PillLink href="#compare" label="Not sure? Compare native vs cross-platform" location="hero" event="compare_click" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS NATIVE ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label dark={false}>The Basics</Label>
            <Heading dark={false}>What is native app development?</Heading>
          </div>
          <div className="space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-black/65">
            <p>
              Native app development means building a mobile app in the official language and tools of each platform:
              Swift and SwiftUI for iPhone and iPad, and Kotlin and Jetpack Compose for Android. Because the app talks
              directly to the operating system, it runs faster, looks and behaves the way users expect on that
              platform, and can use every hardware and OS feature as soon as Apple or Google releases it.
            </p>
            <p>
              The trade-off is that iOS and Android are built as two separate apps, which usually costs more than a
              single cross-platform app. That&apos;s why the first question isn&apos;t &ldquo;how&rdquo; but
              &ldquo;whether&rdquo;: for many business apps, a cross-platform app is the smarter choice, and for others,
              only native will do.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-2xl bg-white border border-black/10 p-5">
                <p className="flex items-center gap-2 text-[15px] font-semibold text-black"><FaApple aria-hidden="true" /> iOS: Swift + SwiftUI</p>
                <p className="mt-1.5 text-[14px] text-black/60">iPhone, iPad and Apple Watch, built in Xcode.</p>
              </div>
              <div className="rounded-2xl bg-white border border-black/10 p-5">
                <p className="flex items-center gap-2 text-[15px] font-semibold text-black"><FaAndroid aria-hidden="true" /> Android: Kotlin + Compose</p>
                <p className="mt-1.5 text-[14px] text-black/60">Phones, tablets and Wear OS, built in Android Studio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-20 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-10 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our native app development services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Native app development services for one platform or both, with a shared backend and design system so the
              second app costs less than the first.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-7 flex flex-col min-h-[240px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-8 text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
            <div className="border-r border-b border-white/10 p-7 flex flex-col justify-between min-h-[240px] bg-white/3">
              <p className="text-[15px] text-white/75 leading-relaxed">Planning both platforms? One estimate covers iOS, Android and the shared backend.</p>
              <div className="mt-6"><PillLink href="#quote" solid label="Get an estimate" location="services_tile" event="estimate_click" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NATIVE VS HYBRID VS CROSS-PLATFORM ── */}
      <section id="compare" className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>Native vs hybrid vs cross-platform apps</Heading>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[760px] text-left">
              <caption className="sr-only">Native app development compared with cross-platform and hybrid apps</caption>
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="px-6 py-4 w-[16%]"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black">Native (Swift / Kotlin)</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">Cross-platform (Flutter / React Native)</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">Hybrid (web-view based)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, n, c, h]) => (
                  <tr key={k} className="border-b border-black/8 last:border-0">
                    <th scope="row" className="px-6 py-4 text-[14px] font-semibold text-black/70">{k}</th>
                    <td className="px-6 py-4 text-[15px] text-black">{n}</td>
                    <td className="px-6 py-4 text-[15px] text-black/65">{c}</td>
                    <td className="px-6 py-4 text-[15px] text-black/65">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <p className="text-[16px] text-black/65 leading-relaxed">
              <strong className="font-semibold text-black">Choose native</strong> if your app needs heavy animations,
              real-time features, AR, Bluetooth or other hardware, top security (banking, healthcare), or the best
              possible experience on one platform.
            </p>
            <p className="text-[16px] text-black/65 leading-relaxed">
              <strong className="font-semibold text-black">Choose cross-platform</strong> if you need both platforms
              quickly on a tighter budget. See <Link href="/mobile-app-development/flutter-app-development" className={LINK_DARK}>Flutter app development</Link>.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 border-t border-black/10 pt-10">
            <div>
              <h3 className="text-[20px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>Native vs hybrid app development: the real difference</h3>
              <p className="mt-3 text-[15.5px] text-black/65 leading-relaxed">
                A hybrid app is a website packaged inside an app shell: one web codebase shown through a built-in browser
                view. It is the cheapest way into the app stores, but scrolling, animations and offline use feel
                noticeably slower, and new device features arrive late or not at all. A native app is compiled for the
                phone itself, so every screen, gesture and sensor works the way the platform intends.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>Where cross-platform sits</h3>
              <p className="mt-3 text-[15.5px] text-black/65 leading-relaxed">
                Cross-platform frameworks such as Flutter and React Native are not hybrid apps. They produce real
                compiled apps from one codebase, which is why they sit close to native for most business apps. The gap
                shows mainly in hardware-heavy features, very complex graphics and day-one access to the newest iOS and
                Android APIs, which is where native development still wins.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-black text-white flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="text-[16px] text-white/80 leading-relaxed"><strong className="font-semibold text-white">Still unsure?</strong> Talk it through with a developer who builds both.</p>
            <PillLink href={waLink(WA.consult)} external solid event="consult_click" label="Free 20-minute platform consultation" location="compare" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
        </div>
      </section>

      {/* ── DECISION TOOL ── */}
      <section id="decide" className={`relative py-20 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
          <div>
            <Label>Decide in a Minute</Label>
            <Heading>Native, Flutter or a mix? Answer 4 questions</Heading>
            <p className="mt-6 text-[16px] text-white/60 leading-relaxed">
              Tell us what your app needs and we&apos;ll show which approach fits, why, and where to read more. Send it to
              us and we&apos;ll reply with an estimate for that option.
            </p>
          </div>
          <PlatformDecisionTool />
        </div>
      </section>

      {/* ── WHEN NATIVE IS RIGHT ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>When to Go Native</Label>
            <Heading>When native app development is the right choice</Heading>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {WHEN_NATIVE.map((t) => (
              <li key={t} className="flex gap-4 px-5 py-5" style={GLASS}>
                <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[12px] text-white/60" />
                <span className="text-[15px] text-white/80 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COST ── */}
      <section id="cost" className={`relative py-20 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Native app development cost</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[700px] text-left">
              <caption className="sr-only">Typical native app development cost for one or both platforms, in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["Scope", "One platform (INR)", "Both platforms (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NATIVE_PACKAGES.map((p) => (
                  <tr key={p.id} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 text-[16px] text-white font-normal align-top" style={{ fontFamily: OPEN_SANS }}>{p.label}</th>
                    <td className="px-6 py-5 text-[16px] text-white tabular-nums whitespace-nowrap align-top" style={{ fontFamily: OPEN_SANS }}>{p.one}</td>
                    <td className="px-6 py-5 text-[16px] text-white tabular-nums whitespace-nowrap align-top" style={{ fontFamily: OPEN_SANS }}>{p.both}</td>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 whitespace-nowrap align-top">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-white/55 max-w-[860px] leading-relaxed">
            Indicative ranges. Building both native apps typically costs more than one cross-platform app, but shared
            backend, design and APIs keep the second platform cheaper than the first. UAE and GCC projects are quoted in
            AED.
          </p>
          <div className="mt-8">
            <PillLink href="#quote" solid label="Get Your Native App Estimate" location="pricing" event="estimate_click" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our native app development process</Heading>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-t border-white/12 pt-6">
                <span className="block leading-none mb-5" style={{ ...OUTLINE, WebkitTextStroke: "1px rgba(217,217,217,0.45)", fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(44px,4vw,64px)", letterSpacing: "-0.03em" }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for native app development</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Based at HiLITE Business Park, Kozhikode (Calicut), working with clients across Kerala, India, the UAE and
              the GCC.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote" label="Start Your Native App Project" location="why_ivoniz" event="estimate_click" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Native iOS, native Android and Flutter under one team, so you get honest advice, not a sales push for one approach",
              "Shared backend and design system across both apps to control cost",
              "Test builds on your own phone every sprint",
              "App Store and Google Play launch handled for you",
              "You own the code, store listings and data",
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
      <section className={`py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Native app development FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              More on apps in general: <Link href="/mobile-app-development" className={LINK}>mobile app development</Link>.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-24 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Get an Estimate</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Not sure if your app should be native? <span style={OUTLINE}>Ask us.</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Tell us what your app needs to do. We&apos;ll recommend native, cross-platform or a mix, and send a clear
              estimate for each option.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.consult)} external event="consult_click" label="Book a Free Platform Consultation" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <AppQuoteForm tech="native" leadType="native_project" platformOptions={["iOS", "Android", "Both", "Not sure"]} features={FEATURES} />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Native Estimate" message={WA.talk} />
    </main>
  );
}
