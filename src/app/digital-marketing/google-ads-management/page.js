import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";

/* ════════════════════════════════════════════════════════════════
   /digital-marketing/google-ads-management — new service page
   (the hub lists "Google Ads (PPC)" but had no page of its own).
   Targets: google ads management, google ads agency kerala / dubai,
   ppc management (volumes not verified in this batch).
   Management fees not fixed in costs.js → "Quote". Ad spend separate.
   No Google Partner status, ROAS or CPC results claimed.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/digital-marketing/google-ads-management";
const D = "/digital-marketing";

const page = {
  url: PAGE_URL,
  title: "Google Ads Management for Kerala & UAE | Ivoniz LLP",
  ogTitle: "Google Ads Management for Kerala and UAE Businesses",
  description:
    "Google Ads management for businesses in Kerala and the UAE: Search, Performance Max and YouTube campaigns tracked to calls, WhatsApp chats and form leads.",
  schemaName: "Google Ads Management",
  serviceType: "Pay-per-click advertising management",
  areaServed: [{ "@type": "State", name: "Kerala" }, { "@type": "Country", name: "India" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Digital Marketing", href: D },
    { label: "Google Ads Management", href: `${D}/google-ads-management` },
  ],
  label: "Google Ads · PPC · Kerala and the UAE",
  h1: "Google Ads",
  h1Outline: "Management",
  intro: (
    <>
      Google Ads can bring enquiries the same week, or spend your budget on clicks that never call. The difference is
      usually in the setup: keywords, negative keywords, landing pages and tracking. We build and manage Google Ads
      campaigns for businesses in Kerala and the UAE from our team at HiLITE Business Park, Kozhikode.
    </>
  ),
  cta: "Get a Google Ads Review",
  waMessage: "Hi Ivoniz, I'd like help with Google Ads for my business.",
  cards: {
    label: "What We Manage",
    heading: "Google Ads campaigns we run",
    items: [
      { t: "Search campaigns", d: "Ads for the searches that mean someone wants to buy or book now, with tight keyword lists and negative keywords." },
      { t: "Performance Max", d: "Google's automated campaigns, fed with good assets and real conversion data so the automation optimises for leads, not cheap clicks." },
      { t: "Local and call ads", d: "Campaigns that push calls and directions for shops, clinics and service businesses in a set radius." },
      { t: "Shopping ads", d: "Product feeds from your WooCommerce or Shopify store, with products grouped by margin and performance." },
      { t: "YouTube ads", d: "Short video ads for awareness and remarketing, shown to people who already visited your site." },
      { t: "Account rescue", d: "A review of an existing account that's spending without results: wasted keywords, broken tracking and what to fix first." },
    ],
  },
  notes: {
    label: "How We Work",
    heading: "Where Google Ads budgets usually go wrong",
    intro: "These are the problems we check for first in any account.",
    items: [
      ["No conversion tracking", "If calls, WhatsApp clicks and forms aren't tracked, Google can't tell a good click from a bad one. We set tracking up before spending."],
      ["Broad keywords, no negatives", "Ads showing for job searches, free downloads or the wrong city. Negative keyword lists are built and reviewed weekly."],
      ["Sending ads to the homepage", "Each campaign gets a focused landing page with one clear action, which usually lowers the cost per lead."],
      ["Automation without guidance", "Performance Max and smart bidding need good data and limits. We guide them instead of handing over the budget blindly."],
      ["Your account, your data", "The Google Ads account is in your company's name and your budget is billed to your card. Our fee is separate."],
      ["Plain reports", "Leads, cost per lead and what we changed, every month. No vanity metrics."],
    ],
    footer: (
      <>
        Comparing options? Read <Link href="/blog/seo-vs-google-ads" className={LINK_DARK}>SEO vs Google Ads</Link> and{" "}
        <Link href="/blog/how-to-track-website-leads" className={LINK_DARK}>how to track website leads</Link>.
      </>
    ),
  },
  costs: {
    label: "Pricing",
    heading: "How Google Ads management is priced",
    intro: "Two separate costs: the ad budget you pay Google directly, and our monthly management fee. We quote the fee after reviewing your market and goals.",
    cols: ["Cost", "Paid to", "Notes"],
    rows: [
      ["Ad budget", "Google, on your card", "You set it and can change it any time"],
      ["One-time setup", "Ivoniz LLP · Quote", "Account structure, tracking, landing page changes"],
      ["Monthly management", "Ivoniz LLP · Quote in ₹ or AED", "Optimisation, negatives, testing, monthly report"],
    ],
    footer: "Prices exclude GST or VAT where they apply.",
  },
  process: {
    heading: "Starting Google Ads with us",
    aside: (
      <>
        Running ads on Facebook and Instagram too? See <Link href={`${D}/social-media-marketing/social-media-advertising`} className={LINK}>social media advertising</Link>.
      </>
    ),
    steps: [
      ["Review", "Your existing account (if any), website and competitors' ads checked."],
      ["Tracking", "Calls, WhatsApp clicks and forms tracked in Google Ads and GA4."],
      ["Build", "Campaigns, keywords, negatives, ads and landing pages set up."],
      ["Optimise weekly", "Search terms, bids and ads reviewed and adjusted."],
      ["Monthly report", "Leads, cost per lead and the plan for next month."],
    ],
  },
  form: {
    heading: "Tell us about your Google Ads",
    text: "Running ads already, or starting fresh? Share your website and rough monthly budget. We reply with a short review and a quote.",
    aside: "Office: 7th Floor, HiLITE Business Park, Kozhikode. We work with UAE clients remotely, in Gulf time.",
    props: {
      idPrefix: "gads",
      subject: "Google Ads management",
      leadType: "google_ads",
      location: "google_ads_form",
      question: "Where are you now?",
      messageHint: "Your website, what you sell, and your monthly ad budget if you know it.",
      types: [
        { id: "new", label: "Starting fresh" },
        { id: "existing", label: "Running ads, poor results" },
        { id: "shopping", label: "Shopping ads for a store" },
        { id: "unsure", label: "Not sure" },
      ],
      places: ["Kozhikode", "Elsewhere in Kerala", "Elsewhere in India", "Dubai", "Other UAE", "Other GCC"],
    },
  },
  faqHeading: "Google Ads management: questions",
  faqs: [
    { q: "How much should I spend on Google Ads?", a: "It depends on how competitive your keywords are and how many leads you need. We look at your market and suggest a starting budget during the review; you can raise or lower it any time." },
    { q: "How much does Google Ads management cost?", a: "There are two costs: your ad budget, paid directly to Google, and our monthly management fee, quoted in rupees or AED after a review. A one-time setup fee may apply for new accounts." },
    { q: "How soon will Google Ads bring enquiries?", a: "Ads can start showing within a day or two of approval. The first weeks are spent learning which keywords and ads produce real leads, so results usually improve over the first couple of months." },
    { q: "Can you fix an account that isn't working?", a: "Yes. We start with a review of tracking, search terms, keywords, ads and landing pages, then fix the biggest problems first." },
    { q: "Do you manage Google Ads for UAE businesses?", a: "Yes, remotely from Kerala, in English and Arabic, with calls in Gulf time. We don't have a UAE office." },
    { q: "Who owns the Google Ads account?", a: "You do. The account is in your company's name and billed to your card; we're added as managers and can be removed at any time." },
  ],
  relatedSlugs: ["seo-vs-google-ads", "how-to-track-website-leads", "why-website-not-generating-leads"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
