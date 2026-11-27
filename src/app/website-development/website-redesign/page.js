import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";
import { WP_PACKAGES, WP_DUBAI_RANGE } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   /website-development/website-redesign
   Targets: website redesign services, website redesign company kerala /
   dubai (volumes not verified in this batch). Commercial page for the
   blog posts signs-you-need-a-new-website and
   website-redesign-without-losing-rankings. Prices from WP_PACKAGES /
   WP_DUBAI_RANGE (labelled ranges). No ranking guarantees.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/website-redesign";
const W = "/website-development";

const page = {
  url: PAGE_URL,
  title: "Website Redesign Services for Kerala & UAE | Ivoniz LLP",
  ogTitle: "Website Redesign Services for Kerala and UAE Businesses",
  description:
    "Website redesign for Kerala and UAE businesses: a faster, mobile-first site built for enquiries, with redirects planned so you keep your Google rankings.",
  schemaName: "Website Redesign Services",
  serviceType: "Website redesign",
  areaServed: [{ "@type": "State", name: "Kerala" }, { "@type": "Country", name: "India" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Website Development", href: W },
    { label: "Website Redesign", href: `${W}/website-redesign` },
  ],
  label: "Website Redesign · Kerala and the UAE",
  h1: "Website Redesign",
  h1Outline: "Services",
  intro: (
    <>
      Your website looks dated, loads slowly on phones, or simply doesn&apos;t bring enquiries any more. A redesign fixes
      that, but done carelessly it can also wipe out the Google traffic you already have. We redesign websites for
      businesses in Kerala and the UAE with both in mind, from our team at HiLITE Business Park, Kozhikode.
    </>
  ),
  cta: "Get a Redesign Review",
  waMessage: "Hi Ivoniz, I'd like to redesign my website. Current site: ",
  cards: {
    label: "What's Included",
    heading: "What a website redesign covers",
    items: [
      { t: "Review of the current site", d: "What's working, what isn't, which pages bring traffic and enquiries, and what customers struggle with." },
      { t: "New structure and design", d: "Pages and menus reorganised around what customers look for, designed mobile first.", href: "/ui-ux-design" },
      { t: "Content refresh", d: "Text rewritten to be clearer and more specific, with photos, services and contact details brought up to date." },
      { t: "Faster rebuild", d: "A new build that loads quickly on mobile data, on WordPress, a static build or a custom stack." },
      { t: "SEO kept safe", d: "Every old URL mapped and redirected, titles and content carried over, and Search Console checked after launch." },
      { t: "Tracking and enquiries", d: "Call, WhatsApp and form tracking set up so you can see whether the new site performs better." },
    ],
  },
  notes: {
    label: "Signs It's Time",
    heading: "When a redesign makes sense",
    items: [
      ["It's hard to use on a phone", "Text too small, buttons too close, pages that need zooming. Most visitors are on mobile."],
      ["It's slow", "Pages that take several seconds to load lose visitors before they see anything."],
      ["Enquiries have dropped", "Traffic may still arrive but nobody calls, often because the next step isn't clear."],
      ["You can't update it", "Every change needs the original developer, or the admin is too confusing to use."],
      ["It doesn't match the business", "Old services, old photos, or a look that no longer fits the prices you charge."],
      ["Security or platform problems", "Outdated WordPress, abandoned plugins or a theme that can't be updated any more."],
    ],
    footer: (
      <>
        More detail: <Link href="/blog/signs-you-need-a-new-website" className={LINK_DARK}>signs you need a new website</Link>.
      </>
    ),
  },
  proof: {
    label: "Our Work",
    heading: "Websites we've designed and built",
    intro: "Live sites for businesses in Kerala and the Gulf. Open them on your phone and judge them yourself.",
    slugs: ["rivaura-hospital", "nizra-gold-and-diamonds", "posh-palette", "elnyca-solutions", "danthika-dental-zone", "gaming-qatar"],
  },
  costs: {
    label: "Cost",
    heading: "What a website redesign costs",
    intro: "Typical market ranges as a guide, not quotes. A redesign usually costs about the same as a new site of the same size, sometimes less if content can be reused.",
    cols: ["Redesign", "Kerala / India", "UAE"],
    rows: [
      [WP_PACKAGES[0].label, WP_PACKAGES[0].inr, WP_DUBAI_RANGE],
      [WP_PACKAGES[1].label, WP_PACKAGES[1].inr, "Quote in AED"],
      [WP_PACKAGES[2].label, WP_PACKAGES[2].inr, "Quote in AED"],
    ],
    footer: (
      <>
        Full price breakdowns: <Link href={`${W}/website-development-cost-in-kerala`} className={LINK}>website cost in Kerala</Link> and{" "}
        <Link href="/blog/website-development-cost-dubai-uae" className={LINK}>website cost in Dubai</Link>.
      </>
    ),
  },
  process: {
    heading: "How a redesign runs without losing rankings",
    aside: (
      <>
        The technical checklist we follow: <Link href="/blog/website-redesign-without-losing-rankings" className={LINK}>website redesign without losing rankings</Link>.
      </>
    ),
    steps: [
      ["Audit", "Current pages, traffic, rankings, enquiries and problems recorded."],
      ["Plan and URL map", "New structure agreed; every old URL mapped to its new page."],
      ["Design and content", "New designs approved, content rewritten and updated."],
      ["Build on a test link", "The new site built and reviewed before anything changes on the live domain."],
      ["Launch and monitor", "Redirects live, Search Console and traffic watched for the following weeks."],
    ],
  },
  form: {
    heading: "Send us your current website",
    text: "Share the address and what you don't like about it. We reply with a short review, what we'd change, and a fixed quote.",
    aside: "Office: 7th Floor, HiLITE Business Park, Kozhikode. We work with UAE clients remotely, in Gulf time.",
    props: {
      idPrefix: "redesign",
      subject: "website redesign",
      leadType: "website_redesign",
      location: "website_redesign_form",
      question: "What's the main problem?",
      messageHint: "Your current website address and what you'd like to change.",
      types: [
        { id: "outdated", label: "Looks outdated" },
        { id: "slow", label: "Slow / bad on mobile" },
        { id: "leads", label: "No enquiries" },
        { id: "update", label: "Hard to update" },
        { id: "other", label: "Something else" },
      ],
      places: ["Kozhikode", "Elsewhere in Kerala", "Elsewhere in India", "Dubai", "Other UAE", "Other GCC"],
    },
  },
  faqHeading: "Website redesign: questions",
  faqs: [
    { q: "Will a redesign hurt my Google rankings?", a: "It can if URLs change without redirects or content is removed. We map every old URL to a new one, keep the content that ranks, and monitor Search Console after launch. No one can guarantee rankings, but these steps avoid the common losses." },
    { q: "How much does a website redesign cost?", a: `As typical market ranges, a small business site costs ${WP_PACKAGES[0].inr} in Kerala and about ${WP_DUBAI_RANGE} in the UAE. Larger corporate sites cost more. We send a fixed quote after reviewing your current site.` },
    { q: "How long does a redesign take?", a: `A small business site usually takes ${WP_PACKAGES[0].time}, and a corporate site ${WP_PACKAGES[1].time}, depending on how quickly content and feedback come in.` },
    { q: "Can you redesign a site another company built?", a: "Yes. Most redesigns we do are of sites built elsewhere. We'll need access to the domain, hosting and current admin, or at least the domain." },
    { q: "Should I redesign or rebuild from scratch?", a: "If the platform is sound, a redesign of design and content may be enough. If it's outdated, insecure or very slow, a rebuild is often cheaper over time. We'll tell you which after the review." },
    { q: "Do you redesign websites for UAE businesses?", a: "Yes, remotely from Kerala, in English and Arabic, with calls in Gulf time. We don't have a UAE office." },
  ],
  relatedSlugs: ["website-redesign-without-losing-rankings", "signs-you-need-a-new-website", "why-website-not-generating-leads"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
