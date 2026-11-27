import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { LOCAL_SEO_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/seo-services/local-seo-dubai
   Semrush UAE list (27 Nov 2026): local seo dubai 480 (KD 9), local seo
   packages dubai 480 (KD 18), local seo services dubai 210 (KD 18), local
   seo agency 110 (KD 6), local seo company in dubai 90, best local seo
   company dubai 40. Intent: Google Maps / map-pack visibility for businesses
   WITH a real UAE location. Distinct from /seo-services-dubai (general
   organic SEO) — both cross-link. Honest: Ivoniz has no UAE office; works
   on the CLIENT's own Google Business Profile remotely. Package names from
   costs.js; prices not fixed → "Price on request" (no invented AED).
   NOT linked from menu/footer (location page rule).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/seo-services/local-seo-dubai";
const SEO = "/digital-marketing/seo-services";

const page = {
  url: PAGE_URL,
  title: "Local SEO Services for Dubai Businesses | Ivoniz LLP",
  ogTitle: "Local SEO Services for Dubai Businesses",
  description:
    "Local SEO for Dubai businesses: Google Business Profile, Google Maps rankings, reviews and UAE listings, with monthly local SEO packages. Remote team in Kerala.",
  schemaName: "Local SEO Services for Dubai Businesses",
  serviceType: "Local search engine optimisation",
  areaServed: [{ "@type": "City", name: "Dubai" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "SEO Services", href: SEO },
    { label: "Local SEO Dubai", href: `${SEO}/local-seo-dubai` },
  ],
  label: "Local SEO · Dubai · Google Maps",
  h1: "Local SEO Services for",
  h1Outline: "Dubai Businesses",
  intro: (
    <>
      When someone in Dubai searches &ldquo;dentist near me&rdquo; or &ldquo;AC repair Al Barsha&rdquo;, Google shows a map
      with three businesses before any website. Local SEO is the work that gets your business into that map. We do it
      remotely from Kozhikode, Kerala, on your own Google Business Profile and website; you need a real UAE address, and
      we don&apos;t have one of our own.
    </>
  ),
  cta: "Get a Local SEO Check",
  waMessage: "Hi Ivoniz, I'd like local SEO for my business in Dubai. Can you check my Google profile?",
  cards: {
    label: "What's Included",
    heading: "Local SEO services in Dubai, piece by piece",
    items: [
      { t: "Google Business Profile", d: "Categories, services, hours, photos, products and posts completed and kept current, with the name exactly as on your trade licence and signboard." },
      { t: "Map pack rankings", d: "Work on the three things Google says drive local results: relevance, distance and prominence, tracked for the searches that bring you customers." },
      { t: "Reviews", d: "A simple system to ask real customers for reviews, plus replies to every review. No bought or staff reviews, which risk suspension." },
      { t: "Area pages that are real", d: "Pages for the Dubai areas you actually serve, with something specific to say about each, not copies with the area name swapped." },
      { t: "UAE listings", d: "Your details made consistent across UAE directories and platforms where your customers look, so Google trusts the information." },
      { t: "English and Arabic", d: "Profile description and key website pages in Arabic where your customers search in Arabic, written or checked by a native speaker." },
    ],
  },
  notes: {
    label: "Dubai Specifics",
    heading: "What's different about local SEO in Dubai",
    items: [
      ["Area names drive searches", "Dubai customers search by community: Business Bay, JLT, Al Quoz, Deira, Dubai Marina. Your profile and pages should name the areas you genuinely serve, and only those."],
      ["Service-area businesses", "If you visit customers (cleaning, maintenance, IT support), your profile can hide your address and list service areas instead. You still need a real address for verification."],
      ["Competitive categories move slowly", "Real estate, clinics and restaurants in central Dubai are crowded. Expect longer timelines there, and start with the searches you can realistically win."],
      ["Virtual offices are risky", "Google's guidelines don't allow profiles at addresses where you don't actually operate. Shared desks and virtual offices often get suspended."],
    ],
    footer: (
      <>
        Need SEO beyond the map, for your whole website? See <Link href={`${SEO}/seo-services-dubai`} className={LINK_DARK}>SEO services for Dubai businesses</Link>.
        Profile not showing at all? Read <Link href="/blog/google-business-profile-not-showing" className={LINK_DARK}>Google Business Profile not showing</Link>.
      </>
    ),
  },
  costs: {
    label: "Packages",
    heading: "Local SEO packages for Dubai",
    intro: "Monthly packages, quoted in AED after a free check of your profile and competitors. Prices depend on your category, number of locations and how competitive your area is.",
    cols: ["Package", "Price", "Best for"],
    rows: LOCAL_SEO_PACKAGES.map((p) => [`${p.label}: ${p.includes}`, p.price || "Quote in AED", p.best]),
    footer: (
      <>
        How long local results take: <Link href="/blog/how-long-does-seo-take" className={LINK}>how long SEO takes</Link>.
      </>
    ),
  },
  process: {
    heading: "How local SEO works with us",
    aside: "Everything runs online: WhatsApp and video calls in Gulf time, with your profile access shared through Google's own manager invite, so you stay the owner.",
    steps: [
      ["Free profile check", "Your Google Business Profile, the map results for your main searches, and your top competitors."],
      ["Fix the foundations", "Profile details, categories, photos, website name/address/phone and the obvious listing errors."],
      ["Monthly work", "Posts, photos, review requests and replies, area pages and listings, done steadily."],
      ["Monthly report", "Calls, direction requests and website visits from your profile, plus map positions for your target searches."],
    ],
  },
  form: {
    label: "Free Local SEO Check",
    heading: "Check your Google Maps visibility",
    text: "Send your business name and the searches you want to show up for. We reply with what's holding your profile back and what we'd fix first.",
    aside: "Our team is in Kozhikode, Kerala. We have no office in the UAE; your profile stays in your name.",
    props: {
      idPrefix: "lsdxb",
      subject: "local SEO check",
      leadType: "local_seo_dubai",
      location: "local_seo_dubai_form",
      question: "What do you need?",
      messageHint: "Your business name, area in Dubai, and the searches you want to show up for.",
      types: [
        { id: "check", label: "Free profile check" },
        { id: "monthly", label: "Monthly local SEO" },
        { id: "setup", label: "New Google profile" },
        { id: "multi", label: "Several locations" },
      ],
      places: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Other UAE"],
    },
  },
  faqHeading: "Local SEO in Dubai: questions",
  faqs: [
    { q: "What is local SEO?", a: "Local SEO is the work that helps your business appear when people nearby search for what you sell: the Google Maps results, the map pack in Google search and local website results. It covers your Google Business Profile, website, listings and reviews." },
    { q: "How much do local SEO packages in Dubai cost?", a: "It depends on your category, number of locations and how competitive your area is. We quote monthly packages in AED after a free check of your profile and competitors, and each proposal lists exactly what's included." },
    { q: "Do I need an office in Dubai for local SEO?", a: "You need a real address where you operate in the UAE to verify a Google Business Profile. If you serve customers at their location, you can hide the address and list service areas instead." },
    { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India. We work on your own profile and website remotely, with calls and WhatsApp in Gulf time." },
    { q: "How long does local SEO take in Dubai?", a: "Fixing and completing a profile can change map visibility within weeks to a few months. Crowded categories in central Dubai take longer. We report monthly on calls, direction requests and map positions." },
    { q: "Can you guarantee a top-3 position on Google Maps?", a: "No. Google decides local rankings, and distance from the searcher is something nobody can change. We commit to the work and report honestly on results." },
  ],
  relatedSlugs: ["google-business-profile-not-showing", "local-seo-kerala-guide", "how-long-does-seo-take"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
