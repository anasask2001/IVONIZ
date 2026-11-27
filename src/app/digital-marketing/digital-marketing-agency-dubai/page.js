import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { DM_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/digital-marketing-agency-dubai  (plan: Dubai DM)
   Target: "digital marketing agency dubai" / "digital marketing company
   dubai" (Semrush UAE list, 27 Nov 2026 — high competition; this page
   aims at the long tail: SMEs, remote agency, WhatsApp-led leads).
   The /digital-marketing hub stays Calicut-focused; this page links up to
   it. Packages from DM_PACKAGES (price null → "Quote in AED").
   No UAE marketing results / case studies claimed. No Dubai office.
   Not in menu/footer.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/digital-marketing-agency-dubai";
const D = "/digital-marketing";

const page = {
  url: PAGE_URL,
  title: "Digital Marketing Agency for Dubai SMEs | Ivoniz LLP",
  ogTitle: "Digital Marketing Agency for Dubai and UAE Businesses",
  description:
    "Digital marketing for Dubai and UAE small businesses: SEO, Google Ads, Meta ads and social media, tracked to calls, WhatsApp chats and leads. Plans in AED.",
  schemaName: "Digital Marketing for Dubai and UAE Businesses",
  serviceType: "Digital marketing",
  areaServed: [{ "@type": "City", name: "Dubai" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Digital Marketing", href: D },
    { label: "Digital Marketing for Dubai", href: `${D}/digital-marketing-agency-dubai` },
  ],
  label: "SEO · Google Ads · Meta Ads · Dubai and the UAE",
  h1: "Digital Marketing Agency",
  h1Outline: "for Dubai Small Businesses",
  intro: (
    <>
      Most Dubai SMEs don&apos;t need a big retainer and a monthly slide deck. They need more calls, more WhatsApp chats
      and a clear answer to &quot;what did we get for the money?&quot;. We run SEO, Google Ads, Meta ads and social media for UAE
      businesses, with every lead tracked. Our team works from Kozhikode, Kerala, in Gulf hours; we have no Dubai office.
    </>
  ),
  cta: "Get a Marketing Plan",
  waMessage: "Hi Ivoniz, I'd like digital marketing for my business in the UAE.",
  cards: {
    label: "Services",
    heading: "Digital marketing services for UAE businesses",
    items: [
      { t: "SEO for Dubai", d: "Pages, Google Business Profile and content aimed at the searches your customers in the UAE actually make.", href: `${D}/seo-services/seo-services-dubai` },
      { t: "Local SEO", d: "Showing up in the map results for your area of Dubai, with reviews, categories and location pages done properly.", href: `${D}/seo-services/local-seo-dubai` },
      { t: "Google Ads", d: "Search and Performance Max campaigns tracked to calls, WhatsApp messages and forms, not just clicks.", href: `${D}/google-ads-management` },
      { t: "Meta ads", d: "Facebook and Instagram campaigns for lead forms, WhatsApp chats and store sales, with creatives that suit the UAE audience.", href: `${D}/social-media-marketing/social-media-advertising` },
      { t: "Social media", d: "Posts, reels and stories in English and Arabic, planned a month ahead and approved by you.", href: `${D}/social-media-marketing` },
      { t: "Landing pages and tracking", d: "Fast pages for each campaign, plus call, WhatsApp and form tracking set up in GA4 so the numbers can be trusted." },
    ],
  },
  notes: {
    label: "How We Work",
    heading: "What working with us looks like",
    items: [
      ["Leads, not likes", "Reports show enquiries by channel: calls, WhatsApp chats and forms. Impressions and followers come second."],
      ["Accounts in your name", "Google Ads, Meta Business Manager, Analytics and Search Console belong to your company. If you leave, you keep everything."],
      ["Ad spend paid directly", "Your budget goes straight to Google or Meta on your card. Our fee is separate and listed in writing."],
      ["English and Arabic", "Ads, posts and landing pages in both languages where your customers need it."],
      ["Monthly plans, no long lock-in", "Plans run month to month after an initial setup period agreed in writing."],
      ["Remote, in Gulf hours", "Calls, WhatsApp and screen-shares in UAE time. We're honest that we're a remote team in Kerala."],
    ],
    footer: (
      <>
        Not sure whether to start with SEO or ads? Read <Link href="/blog/seo-vs-google-ads" className={LINK_DARK}>SEO vs Google Ads</Link>.
      </>
    ),
  },
  costs: {
    label: "Plans",
    heading: "Digital marketing plans",
    intro: "Monthly management fees are quoted in AED after we review your business, market and goals. Ad spend is always separate and paid directly to the platform.",
    cols: ["Plan", "Monthly fee", "Includes"],
    rows: DM_PACKAGES.map((p) => [p.label, p.price || "Quote in AED", p.includes]),
    footer: "Prices exclude VAT where it applies. Every plan comes with a written list of what's included each month.",
  },
  process: {
    heading: "Starting digital marketing with us",
    aside: (
      <>
        Need the website first? See <Link href="/website-development/website-development-company-dubai" className={LINK}>web design for Dubai</Link>.
      </>
    ),
    steps: [
      ["Audit", "Your website, Google profile, ad accounts and competitors reviewed, with what to fix first."],
      ["Plan and tracking", "Channels, budget split and targets agreed; call, WhatsApp and form tracking set up."],
      ["Launch", "Campaigns, SEO fixes and content go live, in English and Arabic where needed."],
      ["Monthly review", "A short report on leads and cost per lead, and what changes next month."],
    ],
  },
  form: {
    heading: "Tell us about your business",
    text: "What you sell, where your customers are, and what you've tried so far. We reply with an audit summary and a suggested plan in AED.",
    aside: "Our team is in Kozhikode, Kerala. No office in Dubai; calls and WhatsApp in Gulf time.",
    props: {
      idPrefix: "dmdxb",
      subject: "digital marketing plan",
      leadType: "digital_marketing_dubai",
      location: "digital_marketing_dubai_form",
      question: "What do you need most?",
      messageHint: "Your website, what you sell, your monthly ad budget if you have one, and what's worked or not.",
      types: [
        { id: "seo", label: "SEO" },
        { id: "google-ads", label: "Google Ads" },
        { id: "meta-ads", label: "Meta ads" },
        { id: "social", label: "Social media" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Dubai", "Abu Dhabi", "Sharjah", "Other UAE", "Saudi Arabia", "Qatar", "Other"],
    },
  },
  faqHeading: "Digital marketing in Dubai: questions",
  faqs: [
    { q: "What does a digital marketing agency in Dubai do?", a: "It brings customers to your business online: search engine optimisation, Google and Meta ads, social media, landing pages and the tracking that shows which of those actually produce enquiries." },
    { q: "How much does a digital marketing agency in Dubai charge?", a: "Agencies usually charge a monthly management fee plus the ad budget you pay to Google or Meta. We quote our monthly fee in AED after reviewing your business; the ad budget is separate and paid directly by you." },
    { q: "Should a small business start with SEO or Google Ads?", a: "Ads bring enquiries within days but stop when you stop paying. SEO takes months but keeps working. Many small businesses start with a small ads budget while SEO builds up." },
    { q: "Do you have an office in Dubai?", a: "No. Our team is in Kozhikode, Kerala, India, and works with UAE businesses remotely, in Gulf hours." },
    { q: "Do you run ads in Arabic?", a: "Yes. We write and run ads, posts and landing pages in English and Arabic, and you approve every ad before it goes live." },
    { q: "Who owns the ad accounts?", a: "You do. Google Ads, Meta Business Manager and Analytics accounts are set up in your company's name, and we're added as users." },
  ],
  relatedSlugs: ["seo-vs-google-ads", "how-to-track-website-leads", "whatsapp-business-uae"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
