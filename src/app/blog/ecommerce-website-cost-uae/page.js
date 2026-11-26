import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";
import { STORE_TYPES, WOO_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   B4 — /blog/ecommerce-website-cost-uae
   Owns: "ecommerce website cost in uae / dubai", "how much does an online
   store cost uae", "cost to build ecommerce website dubai".
   Angle (different from B1 and L2's table): FIRST-YEAR total cost — build +
   every running cost — as a budget worksheet. Build ranges from costs.js
   (labelled). Running costs named by WHO sets the price, no invented fees.
   VAT facts from the UAE Federal Tax Authority (5%; mandatory registration
   above AED 375,000 taxable supplies, voluntary from AED 187,500).
   Feeds L2 (ecommerce Dubai) and L3 (Shopify UAE).
   ════════════════════════════════════════════════════════════════ */

const SLUG = "ecommerce-website-cost-uae";
export const metadata = postMetadata(SLUG);

const E = "/website-development/ecommerce-website-development";

const TOC = [
  { id: "short-answer", label: "Short answer" },
  { id: "build", label: "1. Building the store" },
  { id: "monthly", label: "2. Monthly running costs" },
  { id: "per-order", label: "3. Costs on every order" },
  { id: "vat", label: "4. VAT" },
  { id: "worksheet", label: "First-year budget worksheet" },
  { id: "save", label: "Where you can save" },
];

const FAQS = [
  { q: "How much does an ecommerce website cost in the UAE?", a: `As typical market ranges, a starter WooCommerce store costs ${STORE_TYPES[0].aed} to build, an advanced store ${STORE_TYPES[1].aed} and a custom platform ${STORE_TYPES[2].aed}. On top of that come monthly platform or hosting fees, apps, maintenance and payment fees on each order.` },
  { q: "What are the monthly costs of running an online store in Dubai?", a: `Hosting or a platform plan (such as Shopify), paid apps or plugins, and maintenance. For WooCommerce, a typical maintenance plan is ${WOO_PACKAGES[3].aed}. Payment gateway and delivery charges come on each order.` },
  { q: "Do I need to register for VAT to sell online in the UAE?", a: "VAT registration is mandatory when taxable supplies exceed AED 375,000 a year, and voluntary from AED 187,500, according to the UAE Federal Tax Authority. The standard rate is 5%. Check your own position with an accountant or the FTA." },
  { q: "Is Shopify cheaper than WooCommerce in the UAE?", a: "Shopify usually costs less to start and needs no hosting or updates from you, but has a monthly plan and app fees. WooCommerce can cost less each month, but needs hosting and maintenance. Over a year, the difference depends mostly on how many paid apps or plugins you use." },
];

const RELATED = [
  { label: "Ecommerce website development for Dubai stores", href: `${E}/ecommerce-website-development-dubai`, note: "Platforms, payments, delivery and Arabic for UAE online stores." },
  { label: "Shopify store development for UAE businesses", href: `${E}/shopify-store-development-uae`, note: "When Shopify fits, what you pay and to whom." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={RELATED}
      sources={[
        ["UAE Federal Tax Authority: VAT", "https://tax.gov.ae/en/taxes/Vat.aspx"],
      ]}
      cta={{
        title: "Want a first-year cost for your store?",
        text: "Tell us what you sell and roughly how many products. We send a build quote in AED and list every running cost you'd pay, and to whom. Our team is in Kozhikode, Kerala; calls in Gulf time.",
        button: "Get a store quote",
        href: `${E}/ecommerce-website-development-dubai#quote`,
        message: "Hi Ivoniz, I read your UAE ecommerce cost guide. Can you estimate my store's first-year cost?",
      }}
    >
      <h2 id="short-answer">The short answer</h2>
      <Callout title="Building a UAE online store: typical market ranges">
        <p>
          Starter WooCommerce store <strong>{STORE_TYPES[0].aed}</strong> · advanced store <strong>{STORE_TYPES[1].aed}</strong> ·
          custom platform <strong>{STORE_TYPES[2].aed}</strong>.
        </p>
        <p>
          That&apos;s the build. The real first-year cost also includes monthly fees, apps, maintenance, and payment and
          delivery charges on every order, which is where most budgets go wrong.
        </p>
        <p className="text-[14.5px] text-black/60">Ranges are the guide figures from our own service pages, not quotes.</p>
      </Callout>
      <p>
        This guide splits the cost into four parts: building the store, monthly running costs, costs on every order, and
        VAT. At the end there&apos;s a worksheet you can fill in with real quotes.
      </p>

      <h2 id="build">1. Building the store</h2>
      <ArticleTable
        caption="Typical market ranges in AED. Not a quote."
        cols={["Store", "Typical build cost (AED)"]}
        rows={[...STORE_TYPES.map((s) => [s.label, s.aed]), ...WOO_PACKAGES.slice(0, 3).map((w) => [`WooCommerce ${w.label.toLowerCase()} (${w.note})`, w.aed])]}
      />
      <p>What moves a quote within those ranges:</p>
      <ul>
        <li><strong>Number of products and variants.</strong> 50 products with photos ready is a different job from 2,000 imported from a spreadsheet.</li>
        <li><strong>Arabic.</strong> A bilingual store needs a right-to-left layout and Arabic product content. See our <Link href="/blog/arabic-english-bilingual-website-guide">Arabic + English website guide</Link>.</li>
        <li><strong>Custom features.</strong> Bundles, subscriptions, B2B pricing, delivery slots and loyalty points each add build and testing time.</li>
        <li><strong>Integrations.</strong> Connecting an ERP, accounting software or a courier&apos;s system.</li>
        <li><strong>Content.</strong> Product photography and copywriting are often quoted separately.</li>
      </ul>

      <h2 id="monthly">2. Monthly running costs</h2>
      <p>These are paid every month or year, whatever you sell:</p>
      <ArticleTable
        caption="Who sets the price for each running cost."
        cols={["Cost", "Paid to", "Notes"]}
        rows={[
          ["Platform plan", "Shopify (or similar)", "Shopify stores only. WooCommerce has no plan fee."],
          ["Hosting", "Your hosting company", "WooCommerce and custom stores. Needs to handle traffic spikes in sales."],
          ["Domain", "Your domain registrar", ".ae or .com, renewed yearly."],
          ["Paid apps / plugins", "App or plugin developers", "Reviews, filters, bundles, translation. Easily the cost that grows fastest."],
          ["Maintenance", "Your developer", `Updates, backups, security, small changes. WooCommerce: typically ${WOO_PACKAGES[3].aed}.`],
          ["Marketing", "Google, Meta, your agency", "Ads are paid to the platform; management is separate."],
        ]}
      />

      <h2 id="per-order">3. Costs on every order</h2>
      <ul>
        <li><strong>Payment gateway fees.</strong> A percentage and/or fixed fee per card payment, set by the provider (Telr, Network International, PayTabs, Checkout.com, Stripe and others). Ask each for its rates for your business; they differ by volume and business type.</li>
        <li><strong>Buy-now-pay-later fees.</strong> Tabby or Tamara charge the merchant on each order paid that way.</li>
        <li><strong>Delivery.</strong> Courier charges per parcel, by emirate and weight, plus cash-on-delivery collection fees if you accept COD.</li>
        <li><strong>Returns.</strong> Return shipping and restocking, if your policy covers them.</li>
      </ul>
      <p>
        Per-order costs matter most for low-priced products: on a small order, gateway and delivery fees can take a large
        share of the margin. Work them out per order before setting prices.
      </p>

      <h2 id="vat">4. VAT</h2>
      <p>
        The UAE&apos;s standard VAT rate is <strong>5%</strong>. According to the Federal Tax Authority, registration is
        mandatory once taxable supplies exceed <strong>AED 375,000</strong> a year, and voluntary from{" "}
        <strong>AED 187,500</strong>. Once registered, your store needs to show VAT correctly at checkout and on invoices,
        which should be set up during the build, not after.
      </p>
      <p>This isn&apos;t tax advice: confirm your own position with an accountant or the FTA.</p>

      <h2 id="worksheet">First-year budget worksheet</h2>
      <p>Copy this and fill in the real numbers from your quotes:</p>
      <ArticleTable
        caption="Fill in with quotes you receive. Monthly items × 12."
        cols={["Item", "One-time", "Monthly", "Year 1"]}
        rows={[
          ["Store build", "_____", "-", "_____"],
          ["Product photos / copy / translation", "_____", "-", "_____"],
          ["Platform plan or hosting", "-", "_____", "_____"],
          ["Paid apps / plugins", "-", "_____", "_____"],
          ["Maintenance", "-", "_____", "_____"],
          ["Domain", "_____", "-", "_____"],
          ["Gateway + delivery (per order × expected orders)", "-", "_____", "_____"],
          ["Total", "", "", "_____"],
        ]}
      />

      <h2 id="save">Where you can save without regret</h2>
      <ul>
        <li><strong>Launch with fewer products.</strong> Start with your best sellers and add the rest after launch.</li>
        <li><strong>Question every paid app.</strong> Many stores pay monthly for apps they installed once and forgot.</li>
        <li><strong>Supply your own photos and text</strong> if you can do them well.</li>
        <li><strong>Phase features.</strong> Loyalty points and subscriptions can come in a second phase once sales justify them.</li>
      </ul>
      <p>
        Not sure which platform? Our <Link href="/blog/best-ecommerce-platform-uae">guide to choosing an ecommerce platform in the UAE</Link> compares
        them. For all website types, see <Link href="/blog/website-development-cost-dubai-uae">website development cost in Dubai &amp; the UAE</Link>.
      </p>
    </ArticleLayout>
  );
}
