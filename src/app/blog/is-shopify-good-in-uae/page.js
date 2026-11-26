import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #20 — /blog/is-shopify-good-in-uae
   Primary: "is shopify good in uae" (autocomplete, UAE: "can we use shopify
   in uae", "is shopify popular in uae", "which payment method is best for
   shopify in uae", "how does shopify work in uae"). Volumes not verified.
   Informational, question-led; the commercial intent belongs to L3 (Shopify
   UAE service page), linked. Shopify Payments availability NOT claimed —
   sources conflicted (Nov 2026); points to Shopify's list. Facts: manual
   payment methods incl. COD; Translate & Adapt app; AED, VAT settings.
   Proof: Gaming Qatar (Shopify, Qatar — labelled as Qatar).
   ════════════════════════════════════════════════════════════════ */

const SLUG = "is-shopify-good-in-uae";
export const metadata = postMetadata(SLUG);

const SHOPIFY_UAE = "/website-development/ecommerce-website-development/shopify-store-development-uae";

const TOC = [
  { id: "short-answer", label: "Short answer" },
  { id: "payments", label: "Payments" },
  { id: "cod", label: "Cash on delivery" },
  { id: "arabic", label: "Arabic" },
  { id: "delivery", label: "Delivery and VAT" },
  { id: "costs", label: "What it costs to run" },
  { id: "verdict", label: "When it's a good fit" },
];

const FAQS = [
  { q: "Can we use Shopify in the UAE?", a: "Yes. UAE businesses run Shopify stores, sell in AED and deliver locally. What varies is payments: check whether Shopify's own payment service is offered for your business's country, and if not, connect a third-party gateway." },
  { q: "Which payment method is best for Shopify in the UAE?", a: "It depends on which providers approve your business and their fees. UAE stores commonly connect card gateways that work with Shopify, plus pay-later options and cash on delivery. Compare fees, settlement times and Shopify compatibility before choosing." },
  { q: "Does Shopify support Arabic?", a: "Shopify supports selling in more than one language, including through its free Translate & Adapt app, and many themes support right-to-left layouts. Check the theme supports RTL before buying it." },
  { q: "Can I offer cash on delivery on Shopify?", a: "Yes. Shopify lets you add manual payment methods, including cash on delivery, alongside online payments." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Shopify store development for UAE businesses", href: SHOPIFY_UAE, note: "Setup, theme, payments, delivery and Arabic, done for you." },
        { label: "Best ecommerce platform in the UAE", href: "/blog/best-ecommerce-platform-uae", note: "Shopify compared with WooCommerce and custom builds." },
      ]}
      sources={[
        ["Shopify: Supported countries for Shopify Payments", "https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries"],
        ["Shopify Help: Manual payment methods", "https://help.shopify.com/en/manual/payments/manual-payments"],
        ["Shopify App Store: Translate & Adapt", "https://apps.shopify.com/translate-and-adapt"],
      ]}
      cta={{
        label: "Shopify in the UAE",
        title: "Planning a Shopify store, or improving one?",
        text: "Let's discuss your products, payments and delivery. We built the Gaming Qatar store on Shopify and can tell you honestly whether Shopify fits your business.",
        button: "Discuss your store",
        href: `${SHOPIFY_UAE}#quote`,
        message: "Hi Ivoniz, I'm considering Shopify for my store in the UAE.",
      }}
    >
      <p>
        Shopify is one of the most common ways to start an online store, but most of what you read about it is written
        for the US or UK. Selling in the UAE raises different questions: which payment options work, whether customers can
        pay cash on delivery, how Arabic works, and how VAT and delivery are handled. Here are straight answers.
      </p>

      <h2 id="short-answer">The short answer</h2>
      <Callout>
        <p>
          Yes, Shopify works well for many UAE stores, especially new ones with a standard catalogue that want to launch
          quickly without managing hosting. The main thing to check early is <strong>payments</strong>; the rest is setup.
        </p>
      </Callout>

      <h2 id="payments">Payments: check this first</h2>
      <p>
        Shopify has its own payment service (Shopify Payments), but it&apos;s only offered in some countries, and the list
        changes. Before planning anything else, check{" "}
        <a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries" target="_blank" rel="noopener noreferrer">Shopify&apos;s supported countries</a>{" "}
        for where your business is registered.
      </p>
      <p>
        If it isn&apos;t available, you connect a <strong>third-party payment gateway</strong> that works with Shopify.
        Gateways approve merchants individually, based on your trade licence and business type, so apply early, before
        the store design is finished. We compare what to look for in{" "}
        <Link href="/blog/payment-gateways-uae">payment gateways for UAE online stores</Link>.
      </p>
      <p>Using a third-party gateway can also affect Shopify&apos;s transaction fees, depending on your plan; check Shopify&apos;s current pricing.</p>

      <h2 id="cod">Cash on delivery</h2>
      <p>
        Many UAE customers prefer to pay on delivery, especially with a store they don&apos;t know yet. Shopify supports
        this as a <strong>manual payment method</strong>. You can offer it alongside card payments, and limit it to certain
        areas or order values through settings or apps if needed.
      </p>

      <h2 id="arabic">Arabic</h2>
      <ul>
        <li>Shopify supports selling in more than one language; the free <strong>Translate &amp; Adapt</strong> app manages translations.</li>
        <li><strong>The theme must support right-to-left layouts.</strong> Not all do; check before buying one.</li>
        <li>Product names, descriptions and policies need Arabic versions written by a native speaker.</li>
      </ul>
      <p>The wider technical picture is in our <Link href="/blog/arabic-english-bilingual-website-guide">Arabic + English website guide</Link>.</p>

      <h2 id="delivery">Delivery and VAT</h2>
      <ul>
        <li><strong>Prices in AED</strong>, with shipping zones and rates set per emirate if your costs differ.</li>
        <li><strong>Couriers:</strong> many UAE couriers offer Shopify apps for labels and tracking; check that yours does before you choose it.</li>
        <li><strong>VAT:</strong> Shopify&apos;s tax settings handle the UAE&apos;s 5% VAT on orders. Confirm the correct setup with your accountant.</li>
      </ul>

      <h2 id="costs">What it costs to run</h2>
      <ArticleTable
        caption="Running costs of a Shopify store"
        cols={["Cost", "Paid to"]}
        rows={[
          ["Monthly Shopify plan", "Shopify"],
          ["Transaction fees (depends on plan and payment setup)", "Shopify"],
          ["Payment processing fees", "Your payment gateway"],
          ["Paid apps (reviews, filters, bundles…)", "App developers"],
          ["Theme (if premium)", "Theme developer, usually one-off"],
          ["Setup, design, help", "Your developer"],
        ]}
      />
      <p>
        App fees are the cost that grows fastest; question each one. For a full first-year budget, see{" "}
        <Link href="/blog/ecommerce-website-cost-uae">ecommerce website cost in the UAE</Link>.
      </p>

      <h2 id="verdict">When Shopify is a good fit in the UAE</h2>
      <ul>
        <li>You want to launch quickly and don&apos;t want to manage hosting or updates.</li>
        <li>Your catalogue is standard: products, variants, collections.</li>
        <li>Non-technical staff will run the store day to day.</li>
        <li>A payment gateway that works with Shopify has approved (or will approve) your business.</li>
      </ul>
      <p>
        If you need unusual pricing rules or B2B accounts, or want lower monthly fees and full control, compare the other
        options in <Link href="/blog/best-ecommerce-platform-uae">our platform guide</Link>. We built the{" "}
        <Link href="/works/gaming-qatar">Gaming Qatar</Link> store on Shopify, for a business in Qatar.
      </p>
    </ArticleLayout>
  );
}
