import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaWhatsapp, FaAndroid, FaApple, FaLayerGroup, FaPencilRuler, FaServer, FaTools, FaSyncAlt, FaRobot,
  FaShoppingBag, FaCalendarCheck, FaHeartbeat, FaGraduationCap, FaMotorcycle, FaBriefcase, FaLink,
  FaCheck, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WEBSITE_ID, ORG_ID, organizationSchema } from "@/lib/schema";
import { PillLink, StickyMobileCTA } from "@/components/comparison/Interactive";
import { PAD, OPEN_SANS, GLASS, OUTLINE, waLink, Label, Heading, HeroTitle, Grid, PetalSketch, FaqList } from "@/components/site/SiteUI";
import { APP_PACKAGES } from "@/components/ecommerce/costs";
import AppCostEstimator from "@/components/app/AppCostEstimator";
import AppQuoteForm from "@/components/app/AppQuoteForm";

/* ════════════════════════════════════════════════════════════════
   /mobile-app-development — owns mobile app development and app-company terms
   (SEO brief, 23 Nov 2026, Ubersuggest India db): "mobile app development
   company" 8,100/mo + "… india" 3,600 (SD 27), cost cluster ~3,700/mo,
   ecommerce app company ~2,300/mo (highest CPC), iOS company 1,000.
   UAE terms (SD 8) are kept in the title/GCC block pending a UAE-database check.
   Own service line: breadcrumb is Home › Mobile App Development.
   Does NOT target: web portals, web apps / SaaS, ecommerce websites, other
   Indian cities (no office there), competitor brands.
   Design: homepage language via SiteUI.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/mobile-app-development";
const TITLE = "Mobile App Development Company in India & UAE | Ivoniz LLP";
const DESCRIPTION =
  "Mobile app development company building Android, iOS and Flutter apps for businesses in India and the UAE. See app development costs and get a free estimate.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: "Ivoniz LLP",
    title: "Mobile App Development Company | Android, iOS, Flutter",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Android and iOS mobile app development by Ivoniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company | Android, iOS, Flutter",
    description: DESCRIPTION,
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

/* ── Content data ─────────────────────────────────────────────── */
const LINK = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white";
const LINK_DARK = "text-black underline underline-offset-4 decoration-black/25 hover:decoration-black";

const WA = {
  idea: "Hi Ivoniz, I have an app idea for my business and would like to discuss it.",
  call: "Hi Ivoniz, I'd like to book a call about a mobile app. Best time for me (IST / Gulf time): ",
  gcc: "Hi Ivoniz, I want to build a mobile app for my business in the UAE / GCC. Can we talk in Gulf time?",
  kerala: "Hi Ivoniz, I want to build a mobile app for my business in Kerala. Can I meet your team?",
  ecommerce: "Hi Ivoniz, I want a shopping app for my online store.",
};

const SERVICES = [
  { Icon: FaAndroid, title: "Android app development", text: <>Native Kotlin apps or cross-platform apps published on Google Play. See <Link href="/mobile-app-development/android-app-development" className={LINK}>Android app development</Link>.</> },
  { Icon: FaApple, title: "iOS app development", text: <>Swift or cross-platform apps for iPhone and iPad, published on the App Store. See <Link href="/mobile-app-development/ios-app-development" className={LINK}>iOS app development</Link>.</> },
  { Icon: FaLayerGroup, title: "Cross-platform apps (Flutter / React Native)", text: "One codebase for Android and iOS, so you launch faster and spend less." },
  { Icon: FaPencilRuler, title: "App UI/UX design", text: "Wireframes, prototypes and app designs tested before development." },
  { Icon: FaServer, title: "Backend and API development", text: "Secure Node.js backends, admin panels and integrations." },
  { Icon: FaTools, title: "App maintenance and support", text: "OS updates, bug fixes, performance monitoring and new features." },
  { Icon: FaSyncAlt, title: "App redesign and rebuild", text: "Modernise an old or slow app without losing users." },
  {
    Icon: FaRobot,
    title: "AI features",
    text: <>Smart search, recommendations and chat assistants through our <Link href="/#our-services" className={LINK}>AI integration</Link> services.</>,
  },
];

const APP_TYPES = [
  { Icon: FaCalendarCheck, title: "Booking and appointment apps", text: "Clinics, salons, services and events." },
  { Icon: FaHeartbeat, title: "Healthcare apps", text: "Patient apps, doctor consultations, reports and reminders." },
  { Icon: FaGraduationCap, title: "Education apps", text: "Student and parent apps, e-learning, attendance and fees." },
  { Icon: FaMotorcycle, title: "Delivery and on-demand apps", text: "Food, grocery, logistics and service booking." },
  { Icon: FaBriefcase, title: "Business and enterprise apps", text: "Field sales, dealer ordering, employee and inspection apps." },
  {
    Icon: FaLink,
    title: "Companion apps for web portals",
    text: <>A mobile app on the same backend as your <Link href="/website-development/web-portal-development" className={LINK}>web portal development</Link> project.</>,
  },
];

/* TODO before launch: confirm Ivoniz's actual stack (brief: "confirm Ivoniz's actual stack"). */
const TECH = [
  ["Cross-platform", "Flutter, React Native", "Most business apps; one codebase, lower cost"],
  ["Native Android", "Kotlin", "Apps needing deep device features"],
  ["Native iOS", "Swift", "Premium iOS experiences"],
  ["Backend", "Node.js, Firebase, MongoDB, PostgreSQL", "APIs, admin panels, real-time data"],
  ["Cloud", "AWS, Google Cloud, Azure", "Hosting, storage, scaling"],
];

const COST_FACTORS = [
  "Android only vs both platforms",
  "Native vs cross-platform",
  "Number of screens and user roles",
  "Payments, maps, chat and real-time features",
  "Admin panel and backend",
  "Third-party integrations",
  "Design complexity",
  "Ongoing maintenance (typically 15–20% of build cost per year)",
];

const PROCESS = [
  { title: "Discovery and planning", text: "Goals, users, core features and a phased roadmap." },
  { title: "UI/UX design", text: "Wireframes and a clickable prototype you can test." },
  { title: "Development", text: "Agile sprints with builds you can try on your phone." },
  { title: "Backend and admin panel", text: "APIs, database and management dashboard." },
  { title: "Testing", text: "Devices, performance, security and user acceptance testing." },
  { title: "App Store and Play Store launch", text: "Store listings, screenshots and submission." },
  { title: "Support and growth", text: "Monitoring, updates and new features." },
];

const FAQS = [
  { q: "How much does mobile app development cost in India?", a: "Most business apps in India cost ₹2 lakh to ₹15 lakh. A simple app or MVP starts around ₹1.5 lakh, while ecommerce, on-demand and enterprise apps cost more." },
  { q: "How much does it cost to develop an app in the UAE?", a: "Business apps for UAE companies typically start around AED 25,000 for an MVP, with full-featured apps ranging from AED 60,000 to 200,000 or more." },
  { q: "How long does it take to develop a mobile app?", a: "A simple app or MVP takes 6 to 10 weeks, a business app 10 to 16 weeks, and complex apps 5 months or more." },
  { q: "Should I build a native app or a cross-platform app?", a: "For most business apps, cross-platform (Flutter or React Native) is the better choice: one codebase for Android and iOS, lower cost and faster launch. Native suits apps needing advanced device features or the highest performance." },
  { q: "Do you develop both Android and iOS apps?", a: "Yes. We build for both, either as one cross-platform app or as separate native apps, and handle Play Store and App Store submission." },
  { q: "Can you build an ecommerce app for my online store?", a: "Yes. We build shopping apps with product catalogues, cart, payments, order tracking and push notifications, connected to your website or WooCommerce store." },
  { q: "Can you build an Arabic app?", a: "Yes. We build bilingual English and Arabic apps with full right-to-left support for UAE and GCC users." },
  { q: "Who owns the app and source code?", a: "You do. After final payment you own the source code, the app store listings and all data." },
  { q: "Do you provide support after launch?", a: "Yes. We offer maintenance plans covering OS updates, bug fixes, monitoring and new features." },
  { q: "Can you take over an app built by another company?", a: "Yes. We review the code, fix issues and continue development, or recommend a rebuild if that's more cost-effective." },
];

const ADDRESS = organizationSchema.address;

/* ── JSON-LD ─────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Mobile App Development",
      serviceType: "Mobile app development",
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
        name: "Mobile app development services",
        itemListElement: [
          "Android app development",
          "iOS app development",
          "Flutter and React Native app development",
          "Ecommerce app development",
          "App UI/UX design",
          "App maintenance and support",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Mobile App Development Company in India & UAE",
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
        { "@type": "ListItem", position: 2, name: "Mobile App Development", item: PAGE_URL },
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
export default function MobileAppDevelopmentPage() {
  return (
    <main id="main-content" className="bg-black text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className={`relative pt-28 sm:pt-40 pb-12 sm:pb-24 ${PAD} overflow-hidden`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-10 top-24 w-[340px] sm:w-[440px] hidden md:block" />
        <div className="relative mx-auto max-w-[1400px]">
          <Breadcrumbs dark items={[{ label: "Mobile App Development", href: "/mobile-app-development" }]} />
          <div className="mt-8"><Label>Mobile App Development Company</Label></div>
          <HeroTitle outline="and Cross-Platform Apps">Mobile App Development Company for Android, iOS</HeroTitle>

          <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <p className="text-white/60 text-[16px] sm:text-[18px] leading-relaxed max-w-[780px]">
              Ivoniz is a mobile app development company in India that designs, builds and launches Android, iOS and
              cross-platform apps for startups, retailers, hospitals, schools and growing businesses in India, the UAE
              and the GCC. From your first idea to Play Store and App Store launch, one team handles strategy, UI/UX,
              development, backend and support.
            </p>
            <div className="order-first lg:order-none flex flex-col sm:flex-row lg:flex-col gap-3">
              <PillLink href="#estimate" solid label="Get a Free App Development Estimate" location="hero" event="estimate_click" />
              <PillLink href={waLink(WA.idea)} external event="whatsapp_click" label="Discuss Your App Idea" location="hero" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </div>

          {/* Trust strip — verifiable promises only (no unconfirmed app counts) */}
          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-white/60">
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" className="text-white/55" /> Office at HiLITE Business Park, Kozhikode</li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> See your app as a clickable prototype before development</li>
            <li className="flex items-center gap-2"><FaCheck aria-hidden="true" className="text-white/55" /> You own the source code, store accounts and data</li>
          </ul>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`relative py-14 sm:py-28 ${PAD} scroll-mt-20`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[820px] mb-8 sm:mb-14">
            <Label>Our Services</Label>
            <Heading>Our mobile app development services</Heading>
            <p className="mt-5 text-white/55 text-[16px] leading-relaxed">
              Android and iOS app development, from a first MVP to a full product, with design, backend and support
              under one team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map(({ Icon, title, text }) => (
              <div key={title} className="border-r border-b border-white/10 p-5 sm:p-7 flex flex-col sm:min-h-[240px]">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-auto pt-4 sm:pt-8 text-[19px] text-white leading-snug" style={{ fontFamily: OPEN_SANS, fontWeight: 400, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="mt-2.5 text-[14px] text-white/55 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPS WE BUILD (ecommerce featured: highest CPC cluster) ── */}
      <section id="apps" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px]">
          <Label>Apps We Build</Label>
          <Heading className="mb-8 sm:mb-14">Apps we build</Heading>

          <article className="mb-3 p-6 sm:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-14 items-center bg-white text-black rounded-2xl">
            <div>
              <span className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"><FaShoppingBag aria-hidden="true" /></span>
              <h3 className="mt-6 text-black" style={h2Style}>Ecommerce and shopping apps</h3>
              <p className="mt-4 text-[16px] text-black/65 leading-relaxed">
                As an ecommerce mobile app development company, we build shopping apps with product catalogues, cart,
                payments, order tracking and push notifications, connected to your{" "}
                <Link href="/website-development/ecommerce-website-development" className={LINK_DARK}>ecommerce website development</Link> project or{" "}
                <Link href="/website-development/ecommerce-website-development/woocommerce-website-development" className={LINK_DARK}>WooCommerce store</Link>, so products, stock and
                orders stay in sync.
              </p>
              <p className="mt-4 text-[16px] text-black/65 leading-relaxed">
                <strong className="font-semibold text-black">App or mobile website?</strong> A fast mobile website is the
                best place to win new customers from Google. A shopping app earns its place once you have repeat
                buyers: push notifications, saved carts, one-tap reorders and loyalty offers bring them back more
                often than a browser tab can.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-start">
              <PillLink href={waLink(WA.ecommerce)} external solid dark={false} event="whatsapp_click" label="Plan a shopping app" location="apps_ecommerce" icon={<FaWhatsapp aria-hidden="true" />} />
              <PillLink href="#estimate" dark={false} label="Estimate an ecommerce app" location="apps_ecommerce" event="estimate_click" />
            </div>
          </article>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {APP_TYPES.map(({ Icon, title, text }) => (
              <li key={title} className="p-6 sm:p-7" style={GLASS}>
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/75">
                  <Icon aria-hidden="true" className="text-[15px]" />
                </span>
                <h3 className="mt-5 text-[18px] text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>{title}</h3>
                <p className="mt-2 text-[14.5px] text-white/60 leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section id="technologies" className={`relative py-14 sm:py-28 ${PAD} bg-[#f8f8f8] text-black scroll-mt-20`}>
        <div className="mx-auto max-w-[1100px]">
          <Label dark={false}>Technology</Label>
          <Heading dark={false}>Technologies we use</Heading>
          <p className="mt-5 text-[16px] text-black/65 leading-relaxed max-w-[760px]">
            We use Flutter and React Native for most projects, and use{" "}
            <Link href="/mobile-app-development/native-app-development" className={LINK_DARK}>native app development</Link> for Android and iOS
            when an app needs deep device features. For Flutter projects and dedicated Flutter developers, see{" "}
            <Link href="/mobile-app-development/flutter-app-development" className={LINK_DARK}>Flutter app development</Link>.
          </p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[620px] text-left">
              <caption className="sr-only">Mobile app development technologies and what each is best for</caption>
              <thead>
                <tr className="border-b border-black/10">
                  {["Approach", "Technology", "Best for"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TECH.map(([a, t, b]) => (
                  <tr key={a} className="border-b border-black/8 last:border-0">
                    <th scope="row" className="px-6 py-4 text-[15px] font-semibold text-black">{a}</th>
                    <td className="px-6 py-4 text-[15px] text-black">{t}</td>
                    <td className="px-6 py-4 text-[15px] text-black/65">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-[20px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>When cross-platform is the right choice</h3>
              <p className="mt-3 text-[15.5px] text-black/65 leading-relaxed">
                Flutter and React Native let one team write a single codebase that runs on Android and iOS. For most
                business apps (shopping, booking, healthcare, education and field apps) that means a faster launch,
                one set of features to maintain and a noticeably lower cost than building two native apps. Modern
                cross-platform apps feel native to users, with smooth animations and access to the camera,
                location, payments and push notifications.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] text-black" style={{ fontFamily: OPEN_SANS, fontWeight: 400 }}>When native development pays off</h3>
              <p className="mt-3 text-[15.5px] text-black/65 leading-relaxed">
                Native Kotlin and Swift apps make sense when an app depends on deep device features (Bluetooth
                hardware, advanced camera processing, background tracking or heavy graphics) or when you want the
                most polished experience on one platform. We recommend the approach in discovery, based on your
                features, budget and timeline, and explain the trade-offs before you commit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COST + ESTIMATOR ── */}
      <section id="cost" className={`relative py-14 sm:py-28 ${PAD} bg-black scroll-mt-20`}>
        <Grid />
        <div className="relative mx-auto max-w-[1200px]">
          <Label>Pricing</Label>
          <Heading className="max-w-[760px]">Mobile app development cost in India</Heading>
          <p className="mt-5 text-white/65 text-[16px] sm:text-[17px] leading-relaxed max-w-[760px]">
            Most business apps in India cost between ₹2 lakh and ₹15 lakh, depending on features, platforms and backend
            complexity.
          </p>

          <div className="mt-10 overflow-x-auto" style={GLASS}>
            <table className="w-full min-w-[680px] text-left">
              <caption className="sr-only">Typical mobile app development cost in India by app type, in INR</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {["App type", "Typical features", "Typical cost (INR)", "Timeline"].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/55">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {APP_PACKAGES.map((p) => (
                  <tr key={p.id} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-6 py-5 text-[16px] text-white font-normal align-top" style={{ fontFamily: OPEN_SANS }}>{p.label}</th>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 align-top">{p.features}</td>
                    <td className="px-6 py-5 text-[16px] text-white tabular-nums whitespace-nowrap align-top" style={{ fontFamily: OPEN_SANS }}>{p.inr}</td>
                    <td className="px-6 py-5 text-[14.5px] text-white/60 whitespace-nowrap align-top">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-white/55">Indicative ranges. For UAE and GCC projects we quote in AED.</p>

          <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
            <div>
              <h3 className="text-white" style={h2Style}>What affects app development cost</h3>
              <ul className="mt-6 grid gap-3">
                {COST_FACTORS.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-white/75 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" aria-hidden="true" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div id="estimate" className="scroll-mt-24">
              <p className="mb-5 text-white" style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-0.02em" }}>
                Get your app cost estimate in 5 questions
              </p>
              <AppCostEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12 sm:mb-16">
            <div>
              <Label>How We Work</Label>
              <Heading>Our app development process</Heading>
            </div>
            <p className="text-white/60 text-[15px] max-w-[420px] leading-relaxed">
              Launch an MVP first, then grow it in phases. You see a clickable prototype before development starts.
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

          <div className="mt-14 p-6 sm:p-10 grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-12" style={GLASS}>
            <h3 className="text-white" style={h2Style}>Why we recommend starting with an MVP</h3>
            <div className="space-y-4 text-[15.5px] text-white/65 leading-relaxed">
              <p>
                A minimum viable product is the smallest version of your app that real users can download and use. It
                covers the core journey (for example browse, book and pay) and leaves nice-to-have features for later.
                Launching an MVP first gets your app into the Play Store and App Store sooner, keeps the first budget
                lower and lets real usage, not guesses, decide what to build next.
              </p>
              <p>
                After launch we track how people use the app, fix friction points and add features in planned phases.
                Because the design, backend and admin panel are built to grow, later phases extend the app instead of
                rebuilding it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UAE / GCC + KERALA ── */}
      <section className={`relative py-14 sm:py-28 ${PAD} bg-black overflow-hidden`}>
        <Grid />
        <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-3">
          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>UAE and GCC</Label>
            <h2 className="text-white" style={h2Style}>Mobile app development company in the UAE and GCC</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65 flex-1">
              Businesses in Dubai, Abu Dhabi and across the UAE, Saudi Arabia, Qatar and Oman work with Ivoniz for
              bilingual English–Arabic apps with RTL interfaces, local payment gateways (PayTabs, Telr, Tap, Apple Pay,
              Mada) and in-region cloud hosting where required. We quote in AED, schedule calls in Gulf time and manage
              projects fully online. Whether you are comparing a mobile app development company in Dubai or
              looking for a long-term development partner across the Gulf, you get a fixed estimate in AED and one
              point of contact.
            </p>
            <div className="mt-8">
              <PillLink href={waLink(WA.gcc)} external solid event="whatsapp_click" label="Talk to Our App Team in Gulf Time" location="gcc_block" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
          </article>

          <article className="p-6 sm:p-10 flex flex-col" style={GLASS}>
            <Label>Kerala</Label>
            <h2 className="text-white" style={h2Style}>App development company in Kerala</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/65">
              Our app developers work from HiLITE Business Park, Kozhikode (Calicut), and build apps for businesses
              across Kerala, including Kochi, Thrissur and Malappuram. Meet us in person for discovery workshops, or
              work fully online.
            </p>
            {/* NAP: keep identical to the Google Business Profile (source: src/lib/schema.js) */}
            <address className="not-italic mt-6 grid gap-3 text-[14.5px] text-white/75 flex-1">
              <span className="flex gap-3">
                <FaMapMarkerAlt aria-hidden="true" className="shrink-0 mt-1 text-white/55" />
                <span>Ivoniz LLP, {ADDRESS.streetAddress},<br />{ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}, India</span>
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
        </div>
      </section>

      {/* ── WHY IVONIZ ── */}
      <section className={`relative py-14 sm:py-28 ${PAD}`} style={{ background: "#0a0a0a" }}>
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Label>Why Ivoniz</Label>
            <Heading>Why choose Ivoniz as your app development partner</Heading>
            <div className="mt-8 flex flex-col items-start gap-3">
              <PillLink href="#quote" label="Start Your App Project" location="why_ivoniz" />
              <Link href="/works" className="inline-flex items-center gap-1.5 text-[14px] text-white/60 hover:text-white">
                See our projects <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/10">
            {[
              <>Web, portal and mobile app development under one team, sharing one backend; see our <Link key="wd" href="/website-development" className={LINK}>website development services</Link></>,
              "Cross-platform expertise to launch on Android and iOS faster and for less",
              "Clickable prototype before development, so you see the app before you pay for the build",
              "Phased delivery: launch an MVP first, then grow",
              "You own the source code, store accounts and data",
            ].map((t, i) => (
              <li key={i} className="flex items-baseline gap-6 border-b border-white/10 py-6">
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
            <Heading>Mobile app development FAQs</Heading>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* ── CLOSING CTA + FORM ── */}
      <section id="quote" className={`relative py-16 sm:py-32 ${PAD} overflow-hidden scroll-mt-16`} style={{ background: "#060606" }}>
        <Grid />
        <PetalSketch className="absolute -right-12 -bottom-16 w-[300px] hidden md:block" />
        <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Label>Get an Estimate</Label>
            <h2 style={{ fontFamily: OPEN_SANS, fontWeight: 300, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#D9D9D9" }}>
              Have an app idea? <span style={OUTLINE}>Let&apos;s estimate it together.</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16px] sm:text-[17px] leading-relaxed">
              Share your idea, key features and target users. We&apos;ll suggest the right platform, outline an MVP and
              send a clear cost and timeline estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <PillLink href={waLink(WA.call)} external event="book_call_click" label="Book a Call (IST or Gulf time)" location="closing" icon={<FaWhatsapp aria-hidden="true" />} />
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20">contact us</Link> directly.
            </p>
          </div>
          <AppQuoteForm />
        </div>
      </section>

      <Footer />
      <StickyMobileCTA dark estimateLabel="Free Estimate" message={WA.idea} />
    </main>
  );
}
