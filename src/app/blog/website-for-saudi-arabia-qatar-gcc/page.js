import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #22 — /blog/website-for-saudi-arabia-qatar-gcc
   Primary: "website for saudi market" (volume not verified). Also "expand to
   saudi arabia online", "arabic website saudi", "mada payment", "website
   qatar". For businesses (often UAE- or India-based) expanding into the GCC.
   Real data point: Ubersuggest Saudi database showed ~0 English searches for
   "website development company saudi arabia" (Nov 2026) → Arabic matters.
   Facts: Saudi VAT 15%; ZATCA e-invoicing (FATOORA) for VAT-registered
   businesses (official link); Mada is Saudi's national debit network.
   Legal/registration points hedged. Proof: Technical Trade Co. (Saudi) and
   Gaming Qatar. Lead path → Arabic website page (L4).
   ════════════════════════════════════════════════════════════════ */

const SLUG = "website-for-saudi-arabia-qatar-gcc";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "different", label: "The GCC isn't one market" },
  { id: "arabic", label: "Arabic stops being optional" },
  { id: "saudi", label: "Saudi Arabia specifics" },
  { id: "qatar", label: "Qatar and the rest of the GCC" },
  { id: "structure", label: "One site or several?" },
  { id: "checklist", label: "Expansion checklist" },
];

const FAQS = [
  { q: "Do I need an Arabic website to sell in Saudi Arabia?", a: "For most consumer businesses, yes. Many Saudi customers search and buy in Arabic, and English-only sites miss much of that search. Arabic content should be written by native speakers, with a proper right-to-left layout." },
  { q: "What payment methods do Saudi customers use online?", a: "Mada, Saudi Arabia's national debit card network, is widely used, alongside credit cards, Apple Pay and pay-later services. Make sure your payment gateway supports Mada before launching in Saudi Arabia." },
  { q: "Does ZATCA e-invoicing apply to my online store?", a: "ZATCA's e-invoicing (FATOORA) requirements apply to businesses registered for VAT in Saudi Arabia, in phases. If you're VAT-registered there, your invoicing system needs to comply; check ZATCA's official guidance or a Saudi tax adviser." },
  { q: "Should I use one website for the whole GCC or separate sites?", a: "Usually one website with language versions and, where needed, country-specific pricing and delivery pages. Separate country sites make sense mainly when products, prices and legal entities genuinely differ by country." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Arabic & bilingual website development", href: "/website-development/arabic-website-development", note: "English + Arabic sites for GCC markets." },
        { label: "Arabic + English websites: a practical guide", href: "/blog/arabic-english-bilingual-website-guide", note: "The technical side, step by step." },
        { label: "Website development for Qatar", href: "/website-development/website-development-company-qatar", note: "Company websites and stores for Doha and Qatar." },
      ]}
      sources={[["ZATCA: E-Invoicing", "https://zatca.gov.sa/en/E-Invoicing/Pages/default.aspx"]]}
      cta={{
        label: "GCC Expansion",
        title: "Taking your business into Saudi Arabia or Qatar?",
        text: "Let's discuss what your website needs for the new market: Arabic, payments, pricing and delivery pages. We've built sites for businesses in the UAE, Saudi Arabia and Qatar, remotely from Kerala.",
        button: "Discuss your expansion",
        href: "/website-development/arabic-website-development#quote",
        message: "Hi Ivoniz, we're expanding into Saudi Arabia / Qatar and need our website ready.",
      }}
    >
      <p>
        A website that works well in Dubai doesn&apos;t automatically work in Riyadh or Doha. Language, payments, pricing,
        tax and customer expectations change across the border. This guide covers what usually needs to change when a
        business takes its website into Saudi Arabia, Qatar and the wider GCC.
      </p>

      <h2 id="different">The GCC isn&apos;t one market</h2>
      <p>
        The six GCC countries share a lot, but differ in the details that matter online: currencies, VAT rates,
        popular payment methods, delivery networks, and how much people search in English versus Arabic. Plan the website
        for each country you actually sell in, not for &ldquo;the Gulf&rdquo; in general.
      </p>

      <h2 id="arabic">Arabic stops being optional</h2>
      <p>
        In the UAE, many customers are comfortable searching in English. Saudi Arabia is different. When we checked search
        data for Saudi Arabia in November 2026, the English search &ldquo;website development company saudi arabia&rdquo;
        showed almost no measurable volume in Ubersuggest&apos;s database; people search in Arabic instead.
      </p>
      <ul>
        <li>Arabic pages written by native speakers, not machine translation.</li>
        <li>A right-to-left layout tested on real phones.</li>
        <li>Arabic keyword research done separately, not translated from English.</li>
      </ul>
      <p>How to build it properly: <Link href="/blog/arabic-english-bilingual-website-guide">Arabic + English websites guide</Link>.</p>

      <h2 id="saudi">Saudi Arabia specifics</h2>
      <ArticleTable
        caption="What usually changes for Saudi Arabia"
        cols={["Area", "What to plan for"]}
        rows={[
          ["Currency and VAT", "Prices in SAR; Saudi VAT is 15%"],
          ["Payments", "Mada (the national debit network) plus cards, Apple Pay and pay-later; check your gateway supports Mada"],
          ["E-invoicing", "ZATCA e-invoicing (FATOORA) applies to VAT-registered businesses in Saudi Arabia; your invoicing system must comply"],
          ["Language", "Arabic first for most consumer audiences"],
          ["Platforms", "Saudi-built platforms such as Salla and Zid are popular for local stores and worth comparing"],
          ["Legal presence", "Selling locally usually involves registration requirements; get local advice"],
        ]}
      />
      <Callout title="Get local advice on the legal side">
        <p>
          Registration, tax and data protection rules depend on how your business is set up in Saudi Arabia. Check ZATCA&apos;s
          official guidance and speak to a Saudi tax or legal adviser. This article isn&apos;t legal or tax advice.
        </p>
      </Callout>

      <h2 id="qatar">Qatar and the rest of the GCC</h2>
      <ul>
        <li><strong>Currency:</strong> QAR in Qatar, OMR in Oman, BHD in Bahrain, KWD in Kuwait. Show local prices where you sell.</li>
        <li><strong>Payments:</strong> check which local cards and wallets your gateway supports in each country.</li>
        <li><strong>Delivery:</strong> separate shipping zones, rates and delivery times per country, stated clearly before checkout.</li>
        <li><strong>Tax:</strong> VAT rules differ by country; confirm what applies where you&apos;re registered and selling.</li>
      </ul>
      <p>
        We built the <Link href="/works/gaming-qatar">Gaming Qatar</Link> store for a business in Qatar, and the website for{" "}
        <Link href="/works/technical-trade-co">Technical Trade Co.</Link> in Saudi Arabia.
      </p>

      <h2 id="structure">One website or several?</h2>
      <ArticleTable
        caption="Website structure options for multiple GCC countries"
        cols={["Option", "Suits", "Watch for"]}
        rows={[
          ["One site, language versions (/ar/)", "Most businesses", "Country pricing and delivery handled on the same site"],
          ["One site, country sections (/sa/, /qa/)", "Different prices, stock or delivery per country", "More pages to maintain; set language and region tags correctly"],
          ["Separate sites per country", "Separate legal entities, very different catalogues", "Each site builds its Google presence from scratch"],
        ]}
      />

      <h2 id="checklist">Expansion checklist</h2>
      <ol>
        <li>Decide which countries you&apos;re actually selling in first.</li>
        <li>Arabic content written and checked by native speakers.</li>
        <li>Prices in local currency, with VAT shown correctly.</li>
        <li>A payment gateway that supports local cards (Mada for Saudi Arabia).</li>
        <li>Delivery zones, rates and times per country.</li>
        <li>Tax and e-invoicing requirements confirmed with an adviser.</li>
        <li>Local trust signals: address or presence, local phone or WhatsApp, policies per country.</li>
        <li>Fast loading for Gulf visitors.</li>
      </ol>
      <p>
        For UAE-specific trust signals that apply across the GCC, see{" "}
        <Link href="/blog/trustworthy-website-uae">what makes a website trustworthy to UAE customers</Link>.
      </p>
    </ArticleLayout>
  );
}
