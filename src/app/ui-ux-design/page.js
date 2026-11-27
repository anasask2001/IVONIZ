import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";

/* ════════════════════════════════════════════════════════════════
   /ui-ux-design — UI/UX design service page (fills the gap where the menu
   and footer "UI/UX Design" links pointed at a homepage section).
   Data (Ubersuggest, 27 Nov 2026): "ui ux design company" India 590/mo,
   SD 31, CPC $1.54; "ui ux design company dubai" UAE 10/mo → India/Kerala-
   led, UAE mentioned. Autocomplete (India): "ui ux design company in
   kerala", "best ui ux design company in kerala", "ui ux design company in
   calicut", "ui ux design companies in kochi", "ui/ux design services in uae".
   Avoids the course / salary / job searches (not buyers). Figma mention is
   consistent with the site's own homepage copy and chat widget. No "best"
   claim. Proof = real client websites Ivoniz designed (lib/clients.js).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/ui-ux-design";

const page = {
  url: PAGE_URL,
  title: "UI/UX Design Company in Kerala | Ivoniz LLP",
  ogTitle: "UI/UX Design for Websites and Apps",
  description:
    "UI/UX design for websites, apps and dashboards: wireframes, Figma designs and clickable prototypes, by a Kozhikode team that also builds what it designs. Kerala and the Gulf.",
  schemaName: "UI/UX Design for Websites and Apps",
  serviceType: "UI/UX design",
  areaServed: [{ "@type": "State", name: "Kerala" }, { "@type": "Country", name: "India" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [{ label: "UI/UX Design", href: "/ui-ux-design" }],
  label: "UI/UX Design · Kozhikode · Kerala and the Gulf",
  h1: "UI/UX Design for",
  h1Outline: "Websites and Apps",
  intro: (
    <>
      We design the screens people use: websites, mobile apps and dashboards, from user flows and wireframes to finished
      designs and clickable prototypes in Figma. Our team at HiLITE Business Park, Kozhikode, also builds what it
      designs, so the design you approve is the one that ships.
    </>
  ),
  cta: "Discuss a Design Project",
  waMessage: "Hi Ivoniz, I'd like to discuss UI/UX design for my website / app.",
  cards: {
    label: "What We Design",
    heading: "UI/UX design services",
    intro: "Available on its own, or as the first stage of a website or app we build for you.",
    items: [
      { t: "Website UI/UX", d: "Page layouts, navigation and enquiry flows designed so visitors find what they need and contact you.", href: "/website-development" },
      { t: "Mobile app UI/UX", d: "Screens, flows and interactions for Android and iOS apps, designed before a line of code is written.", href: "/mobile-app-development" },
      { t: "Dashboards and portals", d: "Admin panels, customer portals and internal tools where clarity matters more than decoration.", href: "/website-development/web-portal-development" },
      { t: "UX review and redesign", d: "A review of your existing site or app: where people get stuck, what to change first, and redesigned screens." },
      { t: "Clickable prototypes", d: "Tap-through prototypes you can test with staff or customers before paying for development." },
      { t: "Design systems", d: "Colours, type, buttons and components documented, so new screens stay consistent as your product grows." },
    ],
  },
  notes: {
    label: "How We Approach It",
    heading: "Design that works once it's built",
    items: [
      ["Designed and built by one team", "The people designing your screens work next to the developers building them. Fewer surprises between the design and the finished product, and no 'that can't be built' at the end."],
      ["Mobile first", "Most of your users are on phones. We design the mobile layout first, then adapt it for larger screens."],
      ["Built around the action", "Every screen has one main thing the user should do next: enquire, book, buy, approve. Design decisions start from that."],
      ["Readable and usable", "Text sizes, contrast and tap targets chosen so people can actually read and use the screens, including older users and people on small phones."],
      ["English and Arabic layouts", "For Gulf products, right-to-left layouts designed properly, not just mirrored. See Arabic website development."],
      ["You own the files", "Figma files are shared with you and stay yours, whether or not we build the product."],
    ],
    footer: (
      <>
        Practical guidance from our blog: <Link href="/blog/how-to-make-a-website-that-gets-enquiries" className={LINK_DARK}>how to make a website that gets enquiries</Link>.
      </>
    ),
  },
  proof: {
    label: "Designed by Ivoniz",
    heading: "Websites we designed and built",
    intro: "Each of these was designed and developed by our team. Open them on your phone and judge the experience yourself.",
    slugs: ["rivaura-hospital", "nizra-gold-and-diamonds", "posh-palette", "elnyca-solutions", "gaming-qatar", "danthika-dental-zone"],
  },
  process: {
    heading: "How a design project runs",
    aside: (
      <>
        Need it built afterwards? See <Link href="/website-development" className={LINK}>website development</Link> and{" "}
        <Link href="/mobile-app-development" className={LINK}>mobile app development</Link>.
      </>
    ),
    steps: [
      ["Understand the users", "Who uses the product, what they're trying to do, and what's getting in their way today."],
      ["Flows and wireframes", "The screens and steps, in simple black-and-white layouts, agreed before any visual design."],
      ["Visual design", "Finished screens in Figma with your brand, for mobile and desktop."],
      ["Prototype and review", "A clickable prototype you can tap through and share; changes made before development starts."],
      ["Handover or build", "Design files and specs handed over, or our developers build it directly."],
    ],
  },
  form: {
    heading: "Tell us what you want designed",
    text: "A website, an app, a dashboard or a redesign. Share what you have so far, even a sketch, and we'll reply with questions and a written quote.",
    aside: "Office: 7th Floor, HiLITE Business Park, Kozhikode. We work with Gulf clients remotely, in Gulf time.",
    props: {
      idPrefix: "uiux",
      subject: "UI/UX design project",
      leadType: "ui_ux_design",
      location: "ui_ux_design_form",
      question: "What needs designing?",
      messageHint: "What the product is, who uses it, and what exists today (website, app, sketches).",
      types: [
        { id: "website", label: "Website" },
        { id: "app", label: "Mobile app" },
        { id: "dashboard", label: "Dashboard / portal" },
        { id: "redesign", label: "Redesign of existing" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Kozhikode", "Elsewhere in Kerala", "Elsewhere in India", "UAE", "Saudi Arabia", "Qatar", "Other"],
    },
  },
  faqHeading: "UI/UX design: questions",
  faqs: [
    { q: "Do you offer UI/UX design without development?", a: "Yes. We can design and prototype your website, app or dashboard and hand over the Figma files for your own developers, or design it as the first stage of a project we build." },
    { q: "How much does UI/UX design cost?", a: "It depends on the number of screens, how complex the flows are, and whether you need a clickable prototype or a design system. We quote per project after a short call, in rupees or AED." },
    { q: "What's the difference between UI and UX design?", a: "UX is how the product works: the flows, steps and structure that get a user to their goal. UI is how it looks: layout, colour, type and components. We do both together, since one shapes the other." },
    { q: "Can you redesign my existing website or app?", a: "Yes. We start with a review of where users get stuck, then redesign the screens that matter most. If the product is built on a platform we work with, we can also build the redesign." },
    { q: "Will I own the design files?", a: "Yes. The Figma files are shared with you and remain yours, whether or not we develop the product." },
    { q: "Do you offer UI/UX design services in Dubai and the UAE?", a: "Yes, remotely. We design websites, apps and dashboards for UAE businesses with calls in Gulf time and shared Figma files, including right-to-left Arabic layouts. Our team is in Kozhikode, Kerala; we don't have a UAE office." },
    { q: "Do you work with businesses outside Kerala?", a: "Yes. We design for businesses across India and in the UAE, Saudi Arabia and Qatar, working remotely with calls and shared Figma files." },
  ],
  relatedSlugs: ["how-to-make-a-website-that-gets-enquiries", "product-page-checklist", "signs-you-need-a-new-website"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
