import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";

/* ════════════════════════════════════════════════════════════════
   L4 — /website-development/arabic-website-development
   Owns: "arabic website development", "arabic website design dubai",
   "bilingual website development uae", "english arabic website", "rtl
   website development". Volumes: data unavailable (not checked; Ubersuggest
   daily limit). GCC buyers need Arabic; this page is the technical owner.
   Honest scope: Ivoniz builds the RTL/bilingual site and its SEO setup; the
   Arabic TEXT is written or checked by a native speaker (client's team or a
   translator), never machine-only. No claim that past client sites are
   Arabic (not verified — checked elnyca.ae / capitalcoreuae.com, no ar).
   Supporting blog: B10 (/blog/arabic-english-bilingual-website-guide).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/arabic-website-development";
const page = {
  url: PAGE_URL,
  title: "Arabic & Bilingual Website Development (English + Arabic) | Ivoniz LLP",
  ogTitle: "Arabic & Bilingual Website Development",
  description:
    "English and Arabic websites for UAE, Saudi and GCC businesses: right-to-left layouts, Arabic fonts, language tags and bilingual SEO, built by our team in Kerala.",
  schemaName: "Arabic and Bilingual Website Development",
  serviceType: "Website development",
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
  ],
  crumbs: [
    { label: "Website Development", href: "/website-development" },
    { label: "Arabic & Bilingual Websites", href: "/website-development/arabic-website-development" },
  ],
  label: "English + Arabic · UAE · Saudi Arabia · GCC",
  h1: "Arabic and Bilingual",
  h1Outline: "Website Development",
  intro: (
    <>
      We build English and Arabic websites for Gulf businesses: right-to-left layouts, Arabic typography, separate
      Arabic URLs and the tags Google uses to show each visitor the right language. Our team is in Kozhikode, Kerala;
      the Arabic text is written or checked by a native speaker, never left to machine translation.
    </>
  ),
  cta: "Get a Quote",
  waMessage: "Hi Ivoniz, I need an English and Arabic website for my business in the Gulf.",
  cards: {
    label: "What Goes Into It",
    heading: "An Arabic version is more than a translation",
    intro: "Each of these is done and tested on every page, in both languages.",
    items: [
      { t: "Right-to-left layout", d: "The whole page mirrors: navigation, columns, icons that point a direction, forms and sliders. Numbers, phone numbers and product codes stay left-to-right inside Arabic text." },
      { t: "Arabic typography", d: "Arabic web fonts chosen for legibility on phones, with sizes and line heights set separately from English, since Arabic script needs more room." },
      { t: "Separate Arabic URLs", d: "Each Arabic page has its own address (for example /ar/…), so Google can index it and people can share it. No language switch that only swaps text in place." },
      { t: "Language tags (hreflang)", d: "Tags that tell Google which page is the English and which the Arabic version, so Arabic searchers land on Arabic pages." },
      { t: "Arabic SEO", d: "Arabic titles, descriptions and headings based on how people actually search in Arabic, which is often different from a direct translation of the English keyword." },
      { t: "Forms, emails and WhatsApp", d: "Arabic form labels and error messages, Arabic confirmation emails, and pre-filled WhatsApp messages in the visitor's language." },
    ],
  },
  notes: {
    label: "Doing It Properly",
    heading: "Where bilingual websites usually go wrong",
    items: [
      ["Machine-translated text", "It reads as foreign to Arabic speakers and can say the wrong thing about your services. We build the site; the Arabic copy comes from your team or a translator you trust, and we check that it fits the layout."],
      ["Only the homepage in Arabic", "If only some pages are translated, Arabic visitors hit English pages halfway through. We plan which pages need Arabic before building, and link the two versions page by page."],
      ["Mirroring that breaks things", "Flipping the layout with one setting misses carousels, icons, maps and tables. Every Arabic page is checked on real phones."],
      ["Slow Arabic fonts", "Some Arabic fonts are large files. We load only the weights the design uses, so the Arabic pages stay as fast as the English ones."],
    ],
    footer: (
      <>
        The technical details, with examples: <Link href="/blog/arabic-english-bilingual-website-guide" className={LINK_DARK}>Arabic + English websites: a practical guide</Link>.
      </>
    ),
  },
  proof: {
    label: "Our Work in the Gulf",
    heading: "Gulf businesses we've built for",
    intro: "Live websites for companies in the UAE, Saudi Arabia and Qatar. Open them and judge the work yourself.",
    slugs: ["elnyca-solutions", "sky-pure-water", "technical-trade-co", "capitalcore", "feraro-international", "gaming-qatar"],
  },
  process: {
    heading: "How a bilingual project runs",
    aside: (
      <>
        Need the site built for a UAE company? See <Link href="/website-development/website-development-company-dubai" className={LINK}>websites for Dubai businesses</Link>.
      </>
    ),
    steps: [
      ["Page and language plan", "Which pages need Arabic, who writes the Arabic text, and how the two versions link, agreed on a call in Gulf time."],
      ["English and Arabic designs", "Both directions designed together, so the Arabic version isn't an afterthought."],
      ["Build and Arabic content", "We build both versions; your translator's text goes in, and we flag anything that doesn't fit."],
      ["Check on real phones, then launch", "Every Arabic page tested on iPhone and Android, language tags validated, both versions submitted to Google."],
    ],
  },
  form: {
    label: "Quote in AED",
    heading: "Tell us about your bilingual site",
    text: "How many pages, which ones need Arabic, and whether you already have Arabic text. We reply with questions and a fixed quote.",
    aside: "Our team is in Kozhikode, Kerala. We have no office in the Gulf; calls and WhatsApp are scheduled in Gulf time.",
    props: {
      idPrefix: "ar",
      subject: "bilingual website",
      leadType: "arabic_website",
      location: "arabic_website_form",
      question: "What do you need?",
      messageHint: "Your business, roughly how many pages, and whether the Arabic text is ready.",
      types: [
        { id: "new", label: "New English + Arabic site" },
        { id: "add", label: "Add Arabic to my site" },
        { id: "store", label: "Bilingual online store" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Dubai", "Abu Dhabi", "Sharjah", "Other UAE", "Saudi Arabia", "Qatar", "Other GCC"],
    },
  },
  faqHeading: "Arabic websites: questions",
  faqs: [
    { q: "Do you write the Arabic content?", a: "No. We build the Arabic version of the site and handle the layout, fonts and SEO setup. The Arabic text should be written or checked by a native speaker, either on your team or a translator you choose. We can recommend checking with a translator before launch." },
    { q: "Can you add Arabic to my existing English website?", a: "Usually, yes. It depends on how the site is built: some platforms support a second language well, others need changes to the templates. We look at your site first and tell you what's involved." },
    { q: "How much more does an Arabic version cost?", a: "It adds real work: a mirrored layout, Arabic fonts, testing every page twice and the language setup for Google. It doesn't usually double the price, but it's a noticeable part of the quote. We quote it as a separate line so you can see it." },
    { q: "Should the Arabic pages have their own URLs?", a: "Yes. Separate addresses (for example /ar/services) let Google index the Arabic pages and show them to Arabic searchers. A button that only swaps the text on the same address is invisible to search engines." },
    { q: "Do you have an office in the UAE?", a: "No. Our team is in Kozhikode, Kerala, India, and works with Gulf clients remotely, with calls and WhatsApp in Gulf time." },
  ],
  stickyLabel: "Get a Quote",
  relatedSlugs: ["arabic-english-bilingual-website-guide","website-for-saudi-arabia-qatar-gcc"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
