import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";
import { WP_DUBAI_RANGE, CATALOGUE_PACKAGES, WOO_PACKAGES, STORE_TYPES, PORTAL_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   B1 — /blog/website-development-cost-dubai-uae
   Owns: "website development cost in dubai", "website design cost dubai",
   "how much does a website cost in dubai / uae", "website price uae".
   Data: autocomplete shows these searches (Ubersuggest, Nov 2026); volumes
   unavailable. Every AED figure comes from costs.js (INDICATIVE MARKET RANGES,
   labelled as such on the page) so it changes with the service pages.
   Feeds: L1 (website company Dubai), L2 (ecommerce Dubai). Does not compete
   with the Kerala cost guide (INR, Kerala intent).
   ════════════════════════════════════════════════════════════════ */

const SLUG = "website-development-cost-dubai-uae";
export const metadata = postMetadata(SLUG);

const W = "/website-development";
const E = `${W}/ecommerce-website-development`;
const low = (r) => r.split("–")[0].trim();
const high = (r) => r.split("–").pop().trim();

const TOC = [
  { id: "short-answer", label: "Short answer" },
  { id: "by-type", label: "Cost by type of website" },
  { id: "what-changes", label: "What changes the price" },
  { id: "running-costs", label: "Running costs after launch" },
  { id: "compare-quotes", label: "Comparing quotes" },
  { id: "dubai-or-remote", label: "Dubai agency or remote team" },
];

const FAQS = [
  { q: "How much does a website cost in Dubai?", a: `As a guide, a bilingual English and Arabic business website on WordPress typically costs ${WP_DUBAI_RANGE}. A product catalogue site is usually ${low(CATALOGUE_PACKAGES[0].aed)} to ${high(CATALOGUE_PACKAGES[1].aed)}, and an online store starts around ${low(STORE_TYPES[0].aed)}. These are typical market ranges, not a fixed price.` },
  { q: "Why are Dubai website quotes so different from each other?", a: "Agencies quote different things under the same name. One price may be a ready theme with your logo; another may include custom design, Arabic content, SEO setup and a year of support. Ask for a list of pages, features and what happens after launch, then compare like with like." },
  { q: "Do website quotes in the UAE include VAT?", a: "Not always. UAE VAT is 5%, and a VAT-registered agency in the UAE adds it to the invoice. Ask whether the quote is before or after VAT. A company outside the UAE invoices differently, so check with your accountant how that is treated for your business." },
  { q: "Does an Arabic version double the cost?", a: "It doesn't usually double it, but it adds real work: translation by a native writer, a right-to-left layout, Arabic fonts, testing every page in both languages and language tags so Google shows the right version." },
  { q: "What are the yearly costs of a website in the UAE?", a: "Domain renewal, hosting, and maintenance (updates, backups, security and small changes). Online stores also pay payment gateway fees on each sale. Ask for these in writing before you sign, so the first year's real cost is clear." },
  { q: "Is it cheaper to hire a web team outside the UAE?", a: "Often, because their costs are lower. The trade-off is that meetings are online, so check how they handle calls in Gulf time, who your contact is, and that the domain, hosting and code are in your company's name." },
];

const RELATED = [
  { label: "Website development company for Dubai businesses", href: `${W}/website-development-company-dubai`, note: "How we build business websites for UAE companies, remotely from Kerala." },
  { label: "Ecommerce website development in Dubai", href: `${E}/ecommerce-website-development-dubai`, note: "Online stores for UAE businesses: platforms, payments, delivery and Arabic." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={RELATED}
      cta={{
        title: "Want a fixed price in AED?",
        text: "Send your page list, the features you need and a site you like. Our team in Kozhikode replies with questions, then a written quote in AED. We have no office in the UAE; calls are scheduled in Gulf time.",
        button: "Get a quote",
        href: `${W}/website-development-company-dubai#quote`,
        message: "Hi Ivoniz, I read your Dubai website cost guide. Can you quote my website in AED?",
      }}
    >
      <h2 id="short-answer">The short answer</h2>
      <Callout title="Typical market ranges in the UAE, 2026">
        <p>
          A bilingual English and Arabic business website on WordPress typically costs <strong>{WP_DUBAI_RANGE}</strong>.
          A product catalogue site is usually <strong>{low(CATALOGUE_PACKAGES[0].aed)} to {high(CATALOGUE_PACKAGES[1].aed)}</strong>,
          a starter online store <strong>{STORE_TYPES[0].aed}</strong>, and a web portal starts around{" "}
          <strong>{low(PORTAL_PACKAGES[0].aed)}</strong>.
        </p>
        <p className="text-[14.5px] text-black/60">
          These are the ranges we use as a guide on our own service pages, not quotes and not survey data. A real price
          needs your page list and features.
        </p>
      </Callout>
      <p>
        Most of the gap between a cheap and an expensive quote comes from four things: how many pages and languages you
        need, whether the design is custom, who writes the content, and which features (payments, booking, logins) the
        site has to handle. The rest of this guide goes through each one, then the costs that come every year after
        launch.
      </p>

      <h2 id="by-type">Cost by type of website</h2>
      <p>
        Start by deciding what kind of website you need. That choice moves the price more than anything else.
      </p>
      <ArticleTable
        caption="Typical market ranges in AED. Not a quote; the final price depends on scope."
        cols={["Type of website", "Typical cost (AED)", "Suits"]}
        rows={[
          ["Business website, English + Arabic (WordPress)", WP_DUBAI_RANGE, "Service companies, consultants, clinics, trading firms"],
          [`Catalogue site, ${CATALOGUE_PACKAGES[0].label.toLowerCase()}`, CATALOGUE_PACKAGES[0].aed, CATALOGUE_PACKAGES[0].note],
          [`Catalogue site, ${CATALOGUE_PACKAGES[1].label.toLowerCase()}`, CATALOGUE_PACKAGES[1].aed, CATALOGUE_PACKAGES[1].note],
          [`WooCommerce store, ${WOO_PACKAGES[0].label.toLowerCase()}`, WOO_PACKAGES[0].aed, WOO_PACKAGES[0].note],
          [`WooCommerce store, ${WOO_PACKAGES[1].label.toLowerCase()}`, WOO_PACKAGES[1].aed, WOO_PACKAGES[1].note],
          [STORE_TYPES[2].label, STORE_TYPES[2].aed, "Unusual features, high traffic, complex rules"],
          [PORTAL_PACKAGES[0].label, PORTAL_PACKAGES[0].aed, PORTAL_PACKAGES[0].note],
        ]}
      />
      <h3>Business website</h3>
      <p>
        Pages for your services, about, contact and location, with an enquiry form and WhatsApp button. For most UAE
        companies that also means an Arabic version. If your team will post news or offers themselves, a CMS such as
        WordPress is the usual choice; if the content rarely changes, a faster static site can cost less to run. Our{" "}
        <Link href={`${W}/custom-website-vs-wordpress`}>custom website vs WordPress guide</Link> compares the two.
      </p>
      <h3>Catalogue website</h3>
      <p>
        For showrooms, wholesalers and suppliers whose buyers want to browse products and ask for a price, without paying
        online. It costs less than a store because there is no checkout, payment gateway or order management. See{" "}
        <Link href={`${W}/catalogue-website-development`}>catalogue website development</Link>.
      </p>
      <h3>Online store</h3>
      <p>
        Checkout, card and wallet payments, delivery zones, VAT on invoices and order emails, usually in AED and often in
        two languages. Platform choice matters here; we cover it in{" "}
        <Link href={`${E}/ecommerce-website-development-dubai`}>ecommerce website development in Dubai</Link>.
      </p>
      <h3>Web portal</h3>
      <p>
        Logins for customers, dealers or staff, with dashboards and workflows. Portals are priced by user roles and
        integrations, and are often built in phases. See <Link href={`${W}/web-portal-development`}>web portal development</Link>.
      </p>

      <h2 id="what-changes">What changes the price</h2>
      <ul>
        <li><strong>Number of pages.</strong> Each page needs layout, content and testing, on mobile and desktop, in every language.</li>
        <li><strong>Arabic.</strong> A second language isn&apos;t a toggle. It needs translation by a native writer, a right-to-left layout, Arabic fonts and checks on every page.</li>
        <li><strong>Template or custom design.</strong> A ready theme is quicker and cheaper. A custom design takes longer but won&apos;t look like your competitors&apos; sites.</li>
        <li><strong>Content.</strong> If you supply text and photos, the price drops. Copywriting, product photography and translation are often quoted separately.</li>
        <li><strong>Features.</strong> Online payment, booking, logins, filters, calculators and multi-branch locations each add build and test time.</li>
        <li><strong>Integrations.</strong> Connecting a CRM, ERP, courier or payment gateway needs development and testing on both sides.</li>
        <li><strong>Speed of delivery.</strong> A rushed launch date usually costs more, because other work has to move.</li>
      </ul>

      <h2 id="running-costs">Running costs after launch</h2>
      <p>
        The build is a one-time cost. These come every year, and many quotes don&apos;t mention them:
      </p>
      <ul>
        <li><strong>Domain renewal</strong> for your .ae or .com address.</li>
        <li><strong>Hosting.</strong> A small business site needs much less than a store with hundreds of products.</li>
        <li><strong>Maintenance.</strong> Updates, backups, security and small edits. For WooCommerce stores, a typical maintenance plan is {WOO_PACKAGES[3].aed}.</li>
        <li><strong>Payment gateway fees</strong> on each online sale, set by the gateway provider.</li>
        <li><strong>Licences</strong> for paid themes, plugins or Shopify apps, if your site uses them.</li>
      </ul>
      <p>
        Make sure the domain and hosting accounts are registered in your company&apos;s name, not the agency&apos;s. It
        costs nothing extra and saves a lot of trouble if you change agencies later.
      </p>

      <h2 id="compare-quotes">How to compare quotes fairly</h2>
      <p>Before comparing prices, ask every agency for the same things in writing:</p>
      <ol>
        <li>The list of pages, and which languages each one is in.</li>
        <li>Whether design is a template or custom, and how many revision rounds are included.</li>
        <li>Who writes and translates the content.</li>
        <li>Every feature and integration, named.</li>
        <li>What&apos;s included after launch, and the monthly or yearly cost of support.</li>
        <li>Whether the price is before or after 5% UAE VAT.</li>
        <li>Who owns the domain, hosting, design files and code.</li>
      </ol>
      <p>
        Once two quotes cover the same list, the price difference usually makes sense. If it still doesn&apos;t, ask
        what the cheaper one leaves out. Our guide on{" "}
        <Link href="/blog/how-to-choose-web-design-company-dubai">how to choose a web design company in Dubai</Link> goes
        further.
      </p>

      <h2 id="dubai-or-remote">A Dubai agency or a remote team?</h2>
      <p>
        Agencies with a Dubai office let you meet in person, and their prices reflect Dubai costs. Teams outside the UAE,
        including ours in Kozhikode, India, often quote lower because their costs are lower. The trade-off is that
        everything happens online.
      </p>
      <p>If you consider a remote team, check three things:</p>
      <ul>
        <li><strong>Working hours.</strong> Can they take calls in Gulf time? India is 1.5 hours ahead of the UAE, so the working day mostly overlaps.</li>
        <li><strong>Gulf experience.</strong> Ask for live sites they&apos;ve built for UAE, Saudi or Qatar businesses, and open them.</li>
        <li><strong>Ownership.</strong> The domain, hosting and code must be in your company&apos;s name from day one.</li>
      </ul>
      <p>
        We work this way with Gulf clients. You can see the UAE, Saudi and Qatar websites we&apos;ve built on our{" "}
        <Link href={`${W}/website-development-company-dubai`}>website development page for Dubai businesses</Link>.
      </p>
    </ArticleLayout>
  );
}
