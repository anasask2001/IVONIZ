import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaAndroid, FaCode, FaPencilRuler, FaGooglePlay, FaTabletAlt, FaPlug, FaTools, FaSyncAlt,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { ANDROID_PACKAGES } from "@/components/ecommerce/costs";
import AppQuoteForm from "@/components/app/AppQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /mobile-app-development/android-app-development — owns Android-specific terms (SEO brief, Ubersuggest
   India db, 24 Nov 2026): "android app development company" 1,600/mo SD 42;
   "… india" 320 SD 12 (first realistic win: exact phrase in H1 + first sentence);
   "hire android developer" 590; cost 260; "native android app development
   company" 110 SD 5; Dubai/UAE terms ~970/mo combined (India db — verify on UAE db).
   Title uses "India & Dubai" (Kerala variants showed no volume).
   Breadcrumb: Home › Mobile App Development › Android App Development.
   Does NOT target: iOS, cross-platform (Flutter page), other Indian cities
   (no office), USA/UK/Canada, job/learning terms.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/mobile-app-development/android-app-development";
const TITLE = "Android App Development Company in India & Dubai | Ivoniz LLP";
const DESCRIPTION =
  "Android app development company building fast, secure Kotlin and Flutter apps for Indian and GCC businesses. Google Play launch and support. Get a quote.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Android App Development Services | Hire Android Developers",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Android app screens on smartphones built by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Android App Development Services | Hire Android Developers",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";

const WA = {
  /* WhatsApp-first for Kerala / India SMEs (brief): owner fills in business type and city. */
  sme: "Hi Ivoniz, I want an Android app for my business. Business type: ___ City: ___",
  talk: "Hi Ivoniz, I want to build an Android app for my business. Can I talk to an Android developer?",
  agency: "Hi Ivoniz, we're an agency looking for white-label Android (Kotlin) development support.",
  consult: "Hi Ivoniz, I'm not sure if I need a native Android app or a Flutter app. Can we book a free consultation?",
  gcc: "Hi Ivoniz, I want to build an Android app for my business in Dubai / the UAE. Can we talk in Gulf time?",
  kerala: "Hi Ivoniz, I want an Android app for my business in Kerala. Can I meet your team?",
};

/* Form "need" options (brief) — CTAs link to #quote-<id> to pre-select. */
const NEEDS = [
  { id: "new", label: "New Android app", lead: "android_project" },
  { id: "both", label: "Android + iPhone", lead: "android_project" },
  { id: "update", label: "Update existing app", lead: "android_project" },
  { id: "hire", label: "Hire developer", lead: "android_hire" },
];

const SERVICES = [
  { Icon: FaAndroid, title: "Custom native Android app development", text: <>Native apps built around your business, following Google&apos;s Material Design guidelines. Part of our <Link href="/mobile-app-development/native-app-development" className={LINK}>native app development services</Link>.</> },
  { Icon: FaCode, title: "Kotlin and Jetpack Compose development", text: "Modern, maintainable native Android code." },
  { Icon: FaPencilRuler, title: "Android UI/UX design", text: "App designs and prototypes tested before development." },
  { Icon: FaGooglePlay, title: "Google Play launch", text: "Developer account, store listing, screenshots, policy checks and release." },
  { Icon: FaTabletAlt, title: "Android tablet, Wear OS and TV apps", text: "Apps for larger screens and other Android devices." },
  { Icon: FaPlug, title: "Backend and API integration", text: "Firebase, Node.js, payment gateways (Razorpay, UPI, PayTabs) and third-party services." },
  { Icon: FaTools, title: "Android app maintenance", text: "Updates for new Android versions, bug fixes, performance tuning and new features." },
  { Icon: FaSyncAlt, title: "App modernisation", text: "Rebuild old Java apps in Kotlin, or migrate to Flutter for Android + iOS." },
];

const WHY_ANDROID = [
  ["Reach the largest audience in India.", "Most smartphone users in India use Android, so an Android app reaches the widest customer base."],
  ["Lower cost to launch.", "Google Play has a lower one-time developer fee and a faster review process than the App Store."],
  ["Flexible distribution.", "Publish on Google Play, or distribute privately for staff and field teams."],
  ["Works on budget devices.", "Well-built apps run smoothly on the entry-level phones many customers use."],
  ["Deep device integration.", "Camera, GPS, Bluetooth, NFC, background services and home-screen widgets."],
];

/* TODO before launch: confirm engagement models and add rates. */
const ENGAGEMENTS = [
  { model: "Fixed-price project", best: "A defined Android app or MVP" },
  { model: "Dedicated Android developer (monthly)", best: "Ongoing product development" },
  { model: "Team extension", best: "Agencies and startups needing Kotlin capacity" },
];

const APPS = [
  "Ecommerce and shopping apps with UPI and COD",
  "Delivery, grocery and on-demand apps",
  "Booking apps for clinics, salons and services",
  "Education apps for schools, colleges and coaching centres",
  "Field-sales, dealer-ordering and inspection apps",
  "Hospital and patient apps",
  <>Companion apps for <Link key="wp" href="/website-development/web-portal-development" className={LINK}>web portal development</Link> projects</>,
];

/* TODO before launch: confirm this matches Ivoniz's real Android setup. */
const TECH = [
  ["Language and UI", "Kotlin with Jetpack Compose for new apps; existing Java and XML-layout apps maintained or migrated step by step."],
  ["Architecture", "MVVM with clear layers for UI, logic and data, so features can be added without breaking others."],
  ["Data and offline", "Room for on-device data and offline use, synced with Firebase or your own Node.js API when the network returns."],
  ["Payments", "Razorpay, UPI intent and COD for India; PayTabs, Telr and Tap for the GCC."],
  ["Performance", "Small app size, fast start-up and smooth scrolling, tested on budget and mid-range phones, not just flagships."],
  ["Quality", "Unit and UI tests on key flows, crash reporting, and test builds shared every sprint."],
];

const PLAY_STEPS = [
  ["Store listing", "App title, short and full description, category and keywords chosen for Google Play search."],
  ["Graphics", "Phone and tablet screenshots, feature graphic and app icon in Google's required sizes."],
  ["Policy and data safety", "Data safety form, permissions and content rating completed accurately, so the app isn't held back."],
  ["Staged release", "Internal and closed testing first, then a staged roll-out to users, so issues are caught early."],
];

const PROCESS = [
  { title: "Discovery", text: "Goals, users, features and MVP scope." },
  { title: "Design and prototype", text: "Clickable prototype before coding." },
  { title: "Development", text: "Sprints with test builds you install on your phone." },
  { title: "Backend and integrations", text: "APIs, admin panel, payments, notifications." },
  { title: "Testing", text: "Multiple devices, Android versions, performance and security." },
  { title: "Google Play launch", text: "Store listing, policy review and release." },
  { title: "Support", text: "Monitoring, updates and new features." },
];

const FAQS = [
  { q: "How much does Android app development cost in India?", a: "An Android MVP typically costs ₹1.25 lakh to ₹3 lakh, and a full business app costs ₹3 lakh to ₹8 lakh or more, depending on features and integrations." },
  { q: "How long does it take to build an Android app?", a: "An MVP takes 6 to 9 weeks, and a full business app 9 to 14 weeks, plus Google Play review time." },
  { q: "Do you build native Android apps or Flutter apps?", a: "Both. We build native apps in Kotlin for maximum performance and device access, and Flutter apps when you want Android and iOS from one codebase." },
  { q: "Will you publish my app on Google Play?", a: "Yes. We set up the store listing, screenshots and policy details and handle the release under your own Google Play developer account." },
  { q: "Will my app work on low-cost Android phones?", a: "Yes. We test on a range of budget and mid-range devices and optimise app size and performance for them." },
  { q: "Can you build a Malayalam or Arabic Android app?", a: "Yes. We build multilingual Android apps, including Malayalam and right-to-left Arabic." },
  { q: "Can I hire a dedicated Android developer?", a: "Yes. You can hire Ivoniz Android developers for a fixed project, monthly, or as an extension of your team." },
  { q: "Can you update or fix an existing Android app?", a: "Yes. We review the code, fix issues, update it for the latest Android version and continue development." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Android App Development",
      serviceType: "Android app development",
      provider: { "@id": ORG_ID },
      about: { "@type": "SoftwareApplication", name: "Android", operatingSystem: "Android" },
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
        name: "Android services",
        itemListElement: [
          "Custom Android app development",
          "Kotlin and Jetpack Compose development",
          "Google Play publishing",
          "Android app maintenance",
          "Hire dedicated Android developers",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Android App Development Company in India & Dubai",
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
        { "@type": "ListItem", position: 3, name: "Android App Development", item: PAGE_URL },
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
export default function AndroidAppDevelopmentPage() {
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
              { label: "Android App Development", href: "/mobile-app-development/android-app-development" },
            ]}
          />
          <div className="mt-8"><Label>Android App Development Company</Label></div>
          <HeroTitle outline="Reliable Business Apps">Android App Development Company in India for Fast,</HeroTitle>

          <p className="mt-10 text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
            Ivoniz is an Android app development company in India that builds fast, secure and easy-to-use apps for
            smartphones and tablets. We develop native Android apps in Kotlin and cross-platform apps in Flutter, handle
            Google Play publishing, and support your app after launch. We work with startups, retailers, hospitals,
            schools and growing businesses across Kerala, India and the GCC.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-3 max-w-[1100px]">
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Build an app</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>An Android app for your business</p>
              <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed flex-1">Prototype, development, Google Play launch and support.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-new" solid label="Get an Android App Estimate" location="hero_project" event="estimate_click" />
                <PillLink href={waLink(WA.sme)} external event="whatsapp_click" label="Talk to an Android Developer" location="hero_project" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
            <div className="p-7 sm:p-8 flex flex-col" style={GLASS}>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/60">Grow your team</p>
              <p className="mt-3 text-[24px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, letterSpacing: "-0.02em" }}>Hire Android developers</p>
              <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed flex-1">Dedicated Kotlin developers or team extension for your product or agency.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quote-hire" solid label="Hire Android Developers" location="hero_hire" event="hire_click" />
                <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="Agency? Talk white-label" location="hero_hire" icon={<FaWhatsapp aria-hidden="true" />} />
              </div>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> Test builds on your own phone every sprint</li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> Google Play publishing handled for you</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Office at HiLITE Business Park, Kozhikode</li>
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our native Android app development services</Heading>
            <p className="mt-5 text-white/60 text-[16px] leading-relaxed">
              Android app development services from first design to Google Play release and every Android update after
              it, from a native Android app development company that also builds Flutter and iOS apps.
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
              <strong className="font-semibold text-white">Native Android or Flutter?</strong> If you also need an iPhone
              app, one Flutter codebase may cost less. We&apos;ll tell you honestly in a free consultation.
            </p>
            <PillLink href={waLink(WA.consult)} external solid event="consult_click" label="Free consultation" location="services_native_or_flutter" icon={<FaWhatsapp aria-hidden="true" />} />
          </div>
        </div>
      </section>

      {/* ── WHY ANDROID ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black overflow-hidden`}>
        <Grid dark={false} />
        <PetalSketch dark={false} className="absolute -left-16 -bottom-16 w-[320px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Label dark={false}>Why Android</Label>
            <Heading dark={false}>Why build an Android app?</Heading>
            <div className="mt-8 rounded-2xl bg-black text-white p-6">
              <p className="text-[15px] leading-relaxed text-white/75">
                Need iPhone too? See <Link href="/mobile-app-development/flutter-app-development" className={LINK}>Flutter app development</Link> (one
                codebase) or <Link href="/mobile-app-development/ios-app-development" className={LINK}>iOS app development</Link>.
              </p>
            </div>
          </div>
          <ul className="border-t border-black/10">
            {WHY_ANDROID.map(([b, rest]) => (
              <li key={b} className="flex gap-4 border-b border-black/10 py-5">
                <FaCheck aria-hidden="true" className="shrink-0 mt-1.5 text-[13px] text-black/60" />
                <p className="text-[16px] leading-relaxed text-black/65"><strong className="font-semibold text-black">{b}</strong> {rest}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── KOTLIN TECH ── */}
      <section id="technology" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>Technology</Label>
            <Heading>Kotlin Android app development</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              As a Kotlin Android app development company, we build new apps with Google&apos;s recommended tools, so
              they stay fast on budget phones and easy to update for each Android release.
            </p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3">
            {TECH.map(([t, d]) => (
              <div key={t} className="p-6" style={GLASS}>
                <dt className="text-[17px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{t}</dt>
                <dd className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── HIRE ANDROID DEVELOPERS ── */}
      <section id="hire" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <Label>Hire Developers</Label>
            <Heading>Hire Android developers</Heading>
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Hire an Android app developer in India from Ivoniz for a single project, or add dedicated Kotlin
              developers to your team. Agencies can use us as white-label Android capacity, with test builds and
              progress updates every sprint.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href="#quote-hire" solid label="Hire Android Developers" location="hire_section" event="hire_click" />
              <PillLink href={waLink(WA.agency)} external event="whatsapp_click" label="White-label support for agencies" location="hire_agency" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>
          <div className="overflow-hidden" style={GLASS}>
            <table className="w-full text-left">
              <caption className="sr-only">Ways to hire Android developers from Ivoniz</caption>
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

      {/* ── APPS WE BUILD + GOOGLE PLAY LAUNCH ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Label>Apps We Build</Label>
            <Heading>Android apps we build</Heading>
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
            <Label>Google Play</Label>
            <Heading>Google Play launch, handled</Heading>
            <p className="mt-6 text-[15.5px] text-white/60 leading-relaxed">
              We publish under your own Google Play developer account and prepare everything Google checks before an
              app goes live:
            </p>
            <dl className="mt-6 border-t border-white/10">
              {PLAY_STEPS.map(([t, d]) => (
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
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Android app development cost in India</Heading>
          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Typical Android app development cost in India, in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["App type", "Typical cost (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ANDROID_PACKAGES.map((p) => (
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
            Indicative ranges. Google Play&apos;s one-time developer fee is separate. UAE and GCC projects are quoted in AED.
          </p>
          <div className="mt-8">
            <PillLink href="#quote-new" solid label="Get Your Android App Estimate" location="pricing" event="estimate_click" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px]">
          <Label>How We Work</Label>
          <Heading className="mb-12 sm:mb-16">Our Android development process</Heading>
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

      {/* ── KERALA + DUBAI / UAE ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} overflow-hidden`} style={{ background: "#0a0a0a" }}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={h2Style}>Android app development company in Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Our Android developers work from HiLITE Business Park, Kozhikode (Calicut), and build apps for businesses
              across Kerala, including Kochi, Kollam, Thrissur and Malappuram. Meet us in person for planning, or work
              fully online. Malayalam-language apps are available on request. See the{" "}
              <Link href="/clients" className={LINK}>Kerala businesses we work with</Link>.
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
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink href={waLink(WA.kerala)} external solid event="whatsapp_click" label="WhatsApp our Kerala team" location="kerala_block" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href={organizationSchema.hasMap} external event="directions_click" label="Get directions" location="kerala_block" />
            </div>
          </article>

          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Dubai and UAE</Label>
            <h2 className="text-white" style={h2Style}>Android app development company in Dubai and the UAE</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65 flex-1">
              We build bilingual English–Arabic Android apps with right-to-left layouts, GCC payment gateways (PayTabs,
              Telr, Tap, Mada) and in-region hosting where needed, for businesses in Dubai, Abu Dhabi, Sharjah and across
              the Gulf, including Muscat and Kuwait. We have no office in the Gulf: we work remotely from Kozhikode, with
              quotes in AED and calls in Gulf time.
            </p>
            <div className="mt-8">
              <PillLink href={waLink(WA.gcc)} external solid event="whatsapp_click" label="Talk to us in Gulf time" location="gcc_block" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black`}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why Ivoniz for Android app development</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote-new" label="Start Your Android App Project" location="why_ivoniz" event="estimate_click" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              "Native Android, Flutter, iOS and web portals from one team",
              "Test builds every sprint, so you see progress on your own phone",
              "Apps optimised for budget and mid-range devices common in India",
              "Google Play publishing handled for you",
              "You own the code, Play Store listing and data",
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
      <section className={`py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20">
          <div>
            <Label>FAQ</Label>
            <Heading>Android app development FAQs</Heading>
            <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
              Want Android and iPhone from one codebase? See{" "}
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
              Ready to build <span style={OUTLINE}>your Android app?</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Share your app idea, key features and target users. We&apos;ll recommend native Android or Flutter, outline
              an MVP and send a clear estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href="#quote-hire" label="Hire Android Developers" location="closing" event="hire_click" />
              <PillLink href={waLink(WA.sme)} external event="whatsapp_click" label="WhatsApp" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <AppQuoteForm needs={NEEDS} tech="Android" leadType="android_project" />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Android Estimate" message={WA.sme} />
    </main>
  );
}
