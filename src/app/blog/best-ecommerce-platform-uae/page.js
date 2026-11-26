import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   B7 — /blog/best-ecommerce-platform-uae
   Owns: "which ecommerce platform is best in uae" (Google autocomplete,
   Nov 2026; volume unavailable), "best ecommerce platform dubai", "shopify
   vs woocommerce uae".
   Honest: no single "best"; decision by situation. No fee numbers (they
   change and vary by plan). Shopify Payments availability NOT claimed —
   points to Shopify's own country list (sources conflicted, Nov 2026).
   Salla/Zid mentioned only as Saudi-focused, details deferred to B8.
   Feeds L2 and L3.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "best-ecommerce-platform-uae";
export const metadata = postMetadata(SLUG);

const E = "/website-development/ecommerce-website-development";

const TOC = [
  { id: "short-answer", label: "Short answer" },
  { id: "compare", label: "Side-by-side comparison" },
  { id: "shopify", label: "Shopify" },
  { id: "woocommerce", label: "WooCommerce" },
  { id: "custom", label: "Custom build" },
  { id: "others", label: "Other options" },
  { id: "questions", label: "Five questions that decide it" },
];

const FAQS = [
  { q: "Which ecommerce platform is best in the UAE?", a: "There's no single best. Shopify suits most new stores that want to launch quickly without managing hosting. WooCommerce suits businesses that want more control and lower monthly fees. A custom build suits unusual features, B2B pricing or very large catalogues." },
  { q: "Is Shopify available in the UAE?", a: "Yes, UAE businesses use Shopify. Whether Shopify's own payment service (Shopify Payments) is offered depends on your country and changes over time, so check Shopify's supported-countries page. Where it isn't, stores connect a third-party payment gateway." },
  { q: "Can WooCommerce handle Arabic?", a: "Yes. WordPress supports Arabic and right-to-left layouts, and many WooCommerce themes support RTL. A bilingual store also needs a translation setup and Arabic product content written or checked by a native speaker." },
  { q: "Which platform is cheapest to run in Dubai?", a: "WooCommerce often has the lowest fixed monthly cost because there's no plan fee, but you pay for hosting and maintenance. Shopify's monthly plan includes hosting and security. The biggest difference over a year is usually the number of paid apps or plugins, not the platform." },
];

const RELATED = [
  { label: "Ecommerce website development for Dubai stores", href: `${E}/ecommerce-website-development-dubai`, note: "We build on all three, so we recommend the one that fits." },
  { label: "Ecommerce website cost in the UAE", href: "/blog/ecommerce-website-cost-uae", note: "Build cost plus every running cost, with a first-year worksheet." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={RELATED}
      sources={[["Shopify: Supported countries for Shopify Payments", "https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries"]]}
      cta={{
        title: "Not sure which platform fits your store?",
        text: "Tell us what you sell and how you want to run the store. We build on Shopify, WooCommerce and custom, and recommend the one that fits, with the monthly costs of each in writing.",
        button: "Ask for a recommendation",
        href: `${E}/ecommerce-website-development-dubai#quote`,
        message: "Hi Ivoniz, I'm choosing an ecommerce platform for my UAE store. Can you recommend one?",
      }}
    >
      <h2 id="short-answer">The short answer</h2>
      <Callout title="It depends on how you'll run the store">
        <ul>
          <li><strong>Shopify</strong> if you want to launch quickly and never think about hosting or updates.</li>
          <li><strong>WooCommerce</strong> if you want control, lower monthly fees, or a store inside a content-heavy WordPress site.</li>
          <li><strong>Custom</strong> if you need features no platform does well: B2B pricing, complex delivery rules, very large catalogues.</li>
        </ul>
      </Callout>
      <p>
        Most comparison articles crown a winner. In practice, the right platform depends on your products, who will run the
        store day to day, and which payment gateway approves your business. We build on all three, so here&apos;s how we
        decide.
      </p>

      <h2 id="compare">Side-by-side comparison</h2>
      <ArticleTable
        caption="General comparison for UAE stores. Fees change; check each provider's current pricing."
        cols={["", "Shopify", "WooCommerce", "Custom"]}
        rows={[
          ["Time to launch", "Fastest", "Medium", "Slowest"],
          ["Hosting and security", "Included", "You (or your developer)", "You (or your developer)"],
          ["Fixed monthly cost", "Plan fee + apps", "Hosting + plugins + maintenance", "Hosting + maintenance"],
          ["Control over features", "Limited to apps and theme", "High", "Complete"],
          ["Arabic / right-to-left", "Supported; theme-dependent", "Supported; theme-dependent", "Built as needed"],
          ["UAE payment gateways", "Via supported gateways/apps", "Via plugins", "Any with an API"],
          ["Who can run it day to day", "Easiest for non-technical staff", "Easy once set up", "Depends on the admin built"],
          ["Moving away later", "Products/customers export; theme doesn't", "Full ownership", "Full ownership"],
        ]}
      />

      <h2 id="shopify">Shopify</h2>
      <p>
        Shopify runs the hosting, security and updates. You pay a monthly plan, plus any paid apps. For a new store with a
        standard catalogue, it&apos;s usually the quickest way to start selling. We built the{" "}
        <Link href="/works/gaming-qatar">Gaming Qatar</Link> store on Shopify.
      </p>
      <p><strong>Watch for:</strong></p>
      <ul>
        <li><strong>Payments.</strong> Shopify&apos;s own payment service is only offered in some countries, and the list changes. Check <a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries" target="_blank" rel="noopener noreferrer">Shopify&apos;s supported countries</a>; otherwise you&apos;ll connect a third-party gateway.</li>
        <li><strong>App costs.</strong> Many features come from paid apps. Ten small monthly fees add up.</li>
        <li><strong>Arabic.</strong> Choose a theme that supports right-to-left from the start.</li>
      </ul>
      <p>More: <Link href={`${E}/shopify-store-development-uae`}>Shopify store development for UAE businesses</Link>.</p>

      <h2 id="woocommerce">WooCommerce</h2>
      <p>
        WooCommerce is a free plugin that turns a WordPress site into a store. You own everything and can change anything,
        and there&apos;s no platform fee. It suits businesses that publish a lot of content, or that want lower monthly
        costs and are happy to pay for maintenance.
      </p>
      <p><strong>Watch for:</strong> hosting quality (cheap hosting makes stores slow), plugin updates and security, which need someone responsible for them.</p>
      <p>More: <Link href={`${E}/woocommerce-website-development`}>WooCommerce development</Link>.</p>

      <h2 id="custom">Custom build</h2>
      <p>
        A store built for your business (for example with Next.js and a separate backend) does exactly what you need and
        nothing else. It costs more and takes longer, so it&apos;s worth it only when the features need it: dealer
        pricing, quotation flows, unusual delivery rules, or integration with your own systems.
      </p>
      <p>Comparing custom and WordPress in general: <Link href="/website-development/custom-website-vs-wordpress">custom website vs WordPress</Link>.</p>

      <h2 id="others">Other options</h2>
      <ul>
        <li><strong>Salla and Zid</strong> are Saudi ecommerce platforms built around the Saudi market. If you sell mainly in Saudi Arabia they&apos;re worth comparing; we&apos;ll cover them in a separate guide.</li>
        <li><strong>Magento (Adobe Commerce)</strong> suits large retailers with big catalogues and a technical team; it&apos;s heavy for most small and medium UAE stores.</li>
        <li><strong>Website builders with a shop</strong> (Wix, Squarespace) work for a few products, but are limiting as you grow.</li>
      </ul>

      <h2 id="questions">Five questions that decide it</h2>
      <ol>
        <li><strong>Who will run the store every day?</strong> Non-technical staff tend to find Shopify easiest.</li>
        <li><strong>Which payment gateway will approve your business?</strong> Apply early; then check which platforms that gateway supports.</li>
        <li><strong>Do you need Arabic?</strong> Then the theme or design must support right-to-left from day one.</li>
        <li><strong>How unusual are your rules?</strong> B2B prices, bundles, delivery slots or quotations push you toward WooCommerce or custom.</li>
        <li><strong>What&apos;s your monthly budget after launch?</strong> Add up plan, hosting, apps and maintenance for each option.</li>
      </ol>
      <p>
        Once you&apos;ve picked, our <Link href="/blog/ecommerce-website-cost-uae">UAE ecommerce cost guide</Link> helps you
        budget the first year.
      </p>
    </ArticleLayout>
  );
}
