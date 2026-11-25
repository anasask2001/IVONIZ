import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaCode, FaRocket, FaPencilRuler, FaDesktop, FaExchangeAlt, FaPlug, FaTools, FaRobot,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { FLUTTER_PACKAGES } from "@/components/ecommerce/costs";
import AppQuoteForm from "@/components/app/AppQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /mobile-app-development/flutter-app-development — owns every Flutter-specific term (SEO brief,
   23 Nov 2026): Flutter app development company / services, hire Flutter
   developers, Flutter cost, Flutter vs React Native. Volumes still to be
   verified (Ubersuggest run planned); title keeps "India & UAE" pending the
   UAE-database check, as on /mobile-app-development.
   Breadcrumb: Home › Mobile App Development › Flutter App Development.
   Does NOT target: generic "mobile app development company" (that page),
   job/learning terms, cities without an Ivoniz office.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/mobile-app-development/flutter-app-development";
const TITLE = "Flutter App Development Company in India & UAE | Ivoniz LLP";
const DESCRIPTION =
  "Flutter app development company building fast Android and iOS apps from one codebase. Hire Flutter developers in India for UAE and GCC projects. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Flutter App Development Services | Hire Flutter Developers",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Flutter app running on Android and iPhone built by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter App Development Services | Hire Flutter Developers",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  talk: "Hi Ivoniz, I want to build a Flutter app for my business. Can I talk to a Flutter developer?",
  agency: "Hi Ivoniz, we're an agency looking for white-label Flutter development support.",
  consult: "Hi Ivoniz, I'm not sure whether Flutter, React Native or native is right for my app. Can we book a free 20-minute platform consultation?",
  gcc: "Hi Ivoniz, I want to build a Flutter app for my business in the UAE / GCC. Can we talk in Gulf time?",
  kerala: "Hi Ivoniz, I want to build a Flutter app for my business in Kerala. Can I meet your team?",
};

/* Form "need" options (brief) — CTAs link to #quote-<id> to pre-select. */
const NEEDS = [
  { id: "new", label: "New app", lead: "flutter_project" },
  { id: "mvp", label: "MVP", lead: "flutter_project" },
  { id: "migrate", label: "Migrate to Flutter", lead: "flutter_project" },
  { id: "hire", label: "Hire developers", lead: "flutter_hire" },
];

const WHY_FLUTTER = [
  ["One codebase, two platforms.", "Build once for Android and iOS, and often web too."],
  ["Lower cost and faster launch.", "Typically less time and budget than building two native apps."],
  ["Native-like performance.", "Flutter compiles to native code and renders its own UI, so apps feel smooth and responsive."],
  ["Beautiful, consistent UI.", "Pixel-perfect designs that look the same on every device."],
  ["Backed by Google.", "A mature framework used by large brands worldwide, with a big package ecosystem."],
  ["Easier maintenance.", "One codebase means updates and new features ship to both platforms together."],
];

const SERVICES = [
  { Icon: FaCode, title: "Custom Flutter app development", text: "New Android and iOS apps built from scratch around your business." },
  { Icon: FaRocket, title: "Flutter MVP development", text: "Launch a working first version quickly to test your idea with real users." },
  { Icon: FaPencilRuler, title: "Flutter UI/UX design", text: "App designs and prototypes built for Flutter's widget system." },
  { Icon: FaDesktop, title: "Flutter web and desktop apps", text: "Extend your app to the browser, Windows or macOS from the same code." },
  { Icon: FaExchangeAlt, title: "Migration to Flutter", text: "Rebuild an existing native or hybrid app in Flutter to cut maintenance costs." },
  { Icon: FaPlug, title: "Backend and API integration", text: "Firebase, Node.js, REST and GraphQL APIs, payments and third-party services." },
  { Icon: FaTools, title: "Flutter app maintenance", text: "Flutter and OS version upgrades, bug fixes and new features." },
  {
    Icon: FaRobot,
    title: "AI features",
    text: <>Smart search, recommendations and chat assistants through our <Link href="/#our-services" className={LINK}>AI integration</Link> services.</>,
  },
];

/* TODO before launch: confirm engagement models and add rates. */
const ENGAGEMENTS = [
  { model: "Fixed-price project", best: "A defined app or MVP" },
  { model: "Dedicated Flutter developer (monthly)", best: "Ongoing product development" },
  { model: "Team extension", best: "Agencies and startups needing extra Flutter capacity" },
];

const COMPARE = [
  ["Codebase", "One (Dart)", "One (JavaScript / TypeScript)", "Two separate apps"],
  ["Performance", "Very high", "High", "Highest"],
  ["UI consistency", "Same on every device", "Uses native components", "Platform-specific"],
  ["Development cost", "Lower", "Lower", "Highest"],
  ["Best for", "Most business apps, design-heavy apps, MVPs", "Teams already using React", <>Apps needing deep device or OS features; see <Link key="ios" href="/mobile-app-development/ios-app-development" className={LINK_DARK}>native iOS app development</Link> and <Link key="android" href="/mobile-app-development/android-app-development" className={LINK_DARK}>native Android app development</Link></>],
];

const APPS = [
  <>Ecommerce and shopping apps, alongside your <Link key="ec" href="/website-development/ecommerce-website-development" className={LINK}>ecommerce website development</Link></>,
  "Booking and appointment apps for clinics, salons and services",
  "Healthcare and fitness apps",
  "Education and e-learning apps",
  "Delivery and on-demand apps",
  "Business, field-sales and dealer apps",
  <>Companion apps for <Link key="wp" href="/website-development/web-portal-development" className={LINK}>web portal development</Link> projects</>,
];

const PROCESS = [
  { title: "Discovery", text: "Goals, users, features and MVP scope." },
  { title: "Design and prototype", text: "Clickable prototype before coding." },
  { title: "Flutter development", text: "Two-week sprints with test builds on your phone." },
  { title: "Backend and integrations", text: "APIs, admin panel, payments." },
  { title: "Testing", text: "Android and iOS devices, performance and security." },
  { title: "Launch", text: "Play Store and App Store submission." },
  { title: "Support", text: "Monitoring, updates and new features." },
];

const [MVP_PKG] = FLUTTER_PACKAGES;

const FAQS = [
  { q: "What is Flutter app development?", a: "Flutter app development is building mobile apps with Google's Flutter framework, which uses one Dart codebase to create apps for Android, iOS, web and desktop." },
  { q: "How much does Flutter app development cost in India?", a: `A Flutter MVP typically costs ${MVP_PKG.inr.replace(/,00,000/g, " lakh").replace(/,50,000/g, ".5 lakh")}, and full business apps cost ₹3.5 lakh to ₹15 lakh or more, depending on features and integrations.` },
  { q: "Is Flutter cheaper than native app development?", a: "Usually, yes. Because Android and iOS share most of the code, a Flutter app typically needs less development and maintenance effort than two separate native apps." },
  { q: "Is Flutter better than React Native?", a: "Both are strong. Flutter is often preferred for design-heavy apps and consistent UI across devices, while React Native suits teams already working in JavaScript. We recommend based on your app and team." },
  { q: "Are Flutter apps fast?", a: "Yes. Flutter compiles to native ARM code and draws its own interface, so well-built Flutter apps run smoothly on both Android and iOS." },
  { q: "Can I hire a dedicated Flutter developer?", a: "Yes. You can hire Ivoniz Flutter developers for a fixed project, monthly, or as an extension of your team." },
  { q: "Can you convert my existing app to Flutter?", a: "Yes. We assess your current app, then rebuild it in Flutter so you maintain one codebase instead of two." },
  { q: "Can Flutter apps support Arabic?", a: "Yes. Flutter has built-in right-to-left support, and we build bilingual English and Arabic apps for UAE and GCC users." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Flutter App Development",
      serviceType: "Flutter app development",
      provider: { "@id": ORG_ID },
      about: { "@type": "SoftwareApplication", name: "Flutter", applicationCategory: "DeveloperApplication" },
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
        name: "Flutter services",
        itemListElement: [
          "Custom Flutter app development",
          "Flutter MVP development",
          "Migration to Flutter",
          "Hire dedicated Flutter developers",
          "Flutter app maintenance",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Flutter App Development Company in India & UAE",
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
        { "@type": "ListItem", position: 3, name: "Flutter App Development", item: PAGE_URL },
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
export default function FlutterAppDevelopmentPage() {
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
              { label: "Flutter App Development", href: "/mobile-app-development/flutter-app-development" },
            ]}
          />
          <div className="mt-8"><Label>Flutter App Development Company</Label></div>
          <HeroTitle outline="Android and iOS Apps">Flutter App Development Company for Fast, Beautiful</HeroTitle>

          <p className="mt-10 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
            Ivoniz is a Flutter app development company in India that builds high-performance Android and iOS apps from
            a single codebase. With Flutter, you launch on both platforms faster and at lower cost, without giving up a
            smooth, native-quality experience. We work with startups and businesses in India, the UAE and the GCC, from
            MVP to full-scale product.
          </p>

          {/* Two buyer paths: a project vs Flutter developers */}
          <div className="mt-12 grid md:grid-cols-2 gap-3 max-w-[1100px]">
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Build an app</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>A Flutter app or MVP for your business</p>
              <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed flex-1">Prototype, development, backend and store launch, with a clear estimate.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-new" solid label="Get a Flutter App Estimate" location="hero_project" event="estimate_click" />
                <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="Talk to a Flutter Developer" location="hero_project" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Grow your team</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Hire Flutter developers</p>
              <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed flex-1">Dedicated developers or team extension. White-label support for agencies.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-hire" solid label="Hire Flutter Developers" location="hero_hire" event="hire_click" />
                <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="Agency? Talk white-label" location="hero_hire" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FLUTTER ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Why Flutter</Label>
            <Heading dark={false}>Why choose Flutter for your app?</Heading>
            <p className="mt-6 text-[16px] text-black/65 leading-relaxed">
              Flutter is Google&apos;s open-source framework for building apps for Android, iOS, web and desktop from one
              Dart codebase. For most business apps it is the fastest route to a polished app on both phones.
            </p>
          </div>
          <ul className="border-t border-black/10">
            {WHY_FLUTTER.map(([b, rest]) => (
              <li key={b} className="flex gap-4 border-b border-black/10 py-5">
                <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[13px] text-black/60" />
                <p className="text-[16px] leading-relaxed text-black/65"><strong className="font-semibold text-black">{b}</strong> {rest}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-20 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-10 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our Flutter app development services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              As a Flutter mobile app development company, we cover the full product: design, development, backend,
              launch and long-term support.
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
          </div>
        </div>
      </section>

      {/* ── HOW WE BUILD (tech depth for technical buyers) ──
          TODO before launch: confirm these match Ivoniz's real Flutter setup. */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Engineering</Label>
            <Heading>How we build Flutter apps</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              A clean Flutter codebase is what keeps an app cheap to change two years from now. This is how our
              Flutter developers structure projects.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {[
              ["Architecture", "Feature-based folders with a clear split between UI, business logic and data, so new screens don't break old ones."],
              ["State management", "Riverpod or Bloc, chosen per project, for predictable state that is easy to test and debug."],
              ["Backend", "Firebase for fast MVPs; Node.js APIs with MongoDB or PostgreSQL when you need custom logic, reporting or integrations."],
              ["Quality", "Unit and widget tests on core flows, code reviews on every change, and crash reporting from day one."],
              ["Releases", "Automated builds for Android and iOS, test builds on your phone every sprint, and staged store roll-outs."],
              ["Handover", "Documented code in your own repository, with store accounts in your name, so you are never locked in."],
            ].map(([t, d]) => (
              <div key={t} className="p-6" style={GLASS}>
                <dt className="text-[17px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</dt>
                <dd className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── HIRE FLUTTER DEVELOPERS ── */}
      <section id="hire" className={`relative py-20 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Hire Developers</Label>
            <Heading>Hire Flutter developers</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Need Flutter skills on your team? Hire dedicated Flutter developers in India from Ivoniz for your product,
              or as white-label support for your agency. You work directly with the developers, with regular demos and
              clear weekly progress.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href="#quote-hire" solid label="Hire Flutter Developers" location="hire_section" event="hire_click" />
              <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="White-label support for agencies" location="hire_agency" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
          <div className="overflow-hidden" style={GLASS}>
            <table className="w-full text-left">
              <caption className="sr-only">Ways to hire Flutter developers from Ivoniz</caption>
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

      {/* ── FLUTTER VS REACT NATIVE VS NATIVE ── */}
      <section id="compare" className={`relative py-20 sm:py-28 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1200px]">
          <Label dark={false}>Compare</Label>
          <Heading dark={false}>Flutter vs React Native vs native apps</Heading>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[720px] text-left">
              <caption className="sr-only">Flutter compared with React Native and native Kotlin / Swift apps</caption>
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="px-6 py-4 w-[18%]"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black">Flutter</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">React Native</th>
                  <th scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">Native (Kotlin / Swift)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, f, rn, n]) => (
                  <tr key={k} className="border-b border-black/8 last:border-0">
                    <th scope="row" className="px-6 py-4 text-[14px] font-semibold text-black/70">{k}</th>
                    <td className="px-6 py-4 text-[15px] text-black">{f}</td>
                    <td className="px-6 py-4 text-[15px] text-black/65">{rn}</td>
                    <td className="px-6 py-4 text-[15px] text-black/65">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="text-[16px] text-black/65 leading-relaxed max-w-[640px]">
              Not sure which suits you? We&apos;ll recommend honestly after a short call, whether that&apos;s Flutter,
              React Native or <Link href="/mobile-app-development/native-app-development" className={LINK_DARK}>native app development</Link>. See our{" "}
              <Link href="/mobile-app-development" className={LINK_DARK}>mobile app development</Link> services for every option.
            </p>
            <PillLink href={waLink(WA.consult)} external solid dark={false} event="consult_click" label="Free 20-minute platform consultation" location="compare" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
        </div>
      </section>

      {/* ── APPS WE BUILD ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Apps We Build</Label>
            <Heading>Flutter apps we build</Heading>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {APPS.map((t, i) => (
              <li key={i} className="flex gap-4 px-5 py-5" style={GLASS}>
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
          <Heading className="max-w-[760px]">Flutter app development cost in India</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Typical Flutter app development cost in India, in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["App type", "Typical cost (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FLUTTER_PACKAGES.map((p) => (
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
            Indicative ranges. A Flutter app often costs less than building separate native Android and iOS apps, because
            most of the code is shared. UAE and GCC projects are quoted in AED.
          </p>
          <div className="mt-8">
            <PillLink href="#quote-new" solid label="Get Your Flutter App Estimate" location="pricing" event="estimate_click" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our Flutter development process</Heading>
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

      {/* ── UAE / GCC + KERALA ── */}
      <section className={`relative py-20 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Where We Work</Label>
          <Heading className="max-w-[900px] mb-10 sm:mb-14">Flutter app development for the UAE, GCC and Kerala</Heading>
          <div className="grid lg:grid-cols-2 gap-3">
            <article className="p-7 sm:p-10 flex flex-col" style={GLASS}>
              <h3 className="text-white" style={h2Style}>UAE and GCC</h3>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/65 flex-1">
                We build bilingual English–Arabic Flutter apps with right-to-left layouts, GCC payment gateways (PayTabs,
                Telr, Tap, Apple Pay, Mada) and in-region hosting where needed. We quote in AED and meet in Gulf time.
              </p>
              <div className="mt-8">
                <PillLink href={waLink(WA.gcc)} external solid event="whatsapp_click" label="Talk to us in Gulf time" location="gcc_block" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </article>
            <article className="p-7 sm:p-10 flex flex-col" style={GLASS}>
              <h3 className="text-white" style={h2Style}>Kerala</h3>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/65">
                Our Flutter developers work from HiLITE Business Park, Kozhikode (Calicut), and support businesses across
                Kerala, including Kochi and Thrissur.
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
      <section className={`relative py-20 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for Flutter app development</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote-new" label="Start Your Flutter Project" location="why_ivoniz" event="estimate_click" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Flutter apps, web portals and backends from one team",
              "Prototype before development, so you see the app first",
              "MVP-first approach to launch faster and control budget",
              "Clean, documented Dart code you fully own",
              "Long-term support for Flutter and OS upgrades",
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
      <section className={`py-20 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Flutter app development FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              General app questions are answered on our{" "}
              <Link href="/mobile-app-development" className={LINK}>mobile app development</Link> page.
            </p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-24 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        {NEEDS.map((n) => <span key={n.id} id={`quote-${n.id}`} className="absolute top-0" aria-hidden="true" />)}
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Get an Estimate</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Build your app once and <span style={OUTLINE}>launch everywhere with Flutter</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Share your app idea and key features. We&apos;ll confirm whether Flutter is the right fit, outline an MVP
              and send a clear estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href="#quote-hire" label="Hire Flutter Developers" location="closing" event="hire_click" />
              <PillLink href={waLink(WA.talk)} external event="whatsapp_click" label="WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <AppQuoteForm needs={NEEDS} tech="Flutter" leadType="flutter_project" />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Flutter Estimate" message={WA.talk} />
    </main>
  );
}
