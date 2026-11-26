import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #21 — /blog/payment-gateways-uae
   Primary: "payment gateway uae" (volume not verified). Also "best payment
   gateway for ecommerce uae", "tabby tamara", "payment gateway dubai".
   Commercial investigation. NO fee figures (they're negotiated and change);
   NO ranking of providers. Names only providers commonly used by UAE stores
   (same list as the ecommerce service pages). Approval requirements stated
   as "commonly asked", not as rules. Lead path → L2 ecommerce Dubai.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "payment-gateways-uae";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "options", label: "The options UAE stores use" },
  { id: "compare", label: "What to compare" },
  { id: "approval", label: "Getting approved" },
  { id: "bnpl", label: "Buy now, pay later" },
  { id: "checkout", label: "Checkout details that matter" },
  { id: "steps", label: "A sensible order of steps" },
];

const FAQS = [
  { q: "Which is the best payment gateway in the UAE?", a: "There isn't one best for everyone. The right gateway approves your business, works with your store platform, offers fees and settlement times that suit your volume, and supports the payment methods your customers use, such as cards, Apple Pay and pay-later." },
  { q: "What documents do UAE payment gateways ask for?", a: "Commonly a valid trade licence, owner ID, a UAE business bank account, and a live website with clear terms, refund, delivery and privacy policies. Requirements differ by provider and business type, so ask each one." },
  { q: "How long does payment gateway approval take in the UAE?", a: "It varies by provider and how complete your documents and website are. Apply early, while the store is being built, so it doesn't delay your launch." },
  { q: "Should I offer Tabby or Tamara on my store?", a: "Pay-later options can make higher-priced items easier to buy. The merchant pays a fee on each pay-later order, so check it fits your margins, and that the provider supports your platform and product category." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Ecommerce website development for Dubai stores", href: "/website-development/ecommerce-website-development/ecommerce-website-development-dubai", note: "Stores built with the gateway you choose." },
        { label: "Ecommerce website cost in the UAE", href: "/blog/ecommerce-website-cost-uae", note: "Where gateway fees fit in your first-year budget." },
      ]}
      cta={{
        label: "Online Store",
        title: "Planning an online store, or improving one?",
        text: "Let's discuss your requirements and conversion goals, including which payment options suit your customers and your platform. Our team works with UAE businesses remotely, in Gulf time.",
        button: "Discuss your store",
        href: "/website-development/ecommerce-website-development/ecommerce-website-development-dubai#quote",
        message: "Hi Ivoniz, I need help choosing and setting up a payment gateway for my UAE store.",
      }}
    >
      <p>
        Choosing a payment gateway is one of the few store decisions that can delay your launch by weeks, because the
        gateway has to approve your business before you can take a single payment. It also decides what customers see at
        checkout and how much of each sale you keep. Here&apos;s what to compare, and in what order to do things.
      </p>

      <h2 id="options">The options UAE stores commonly use</h2>
      <p>Names you&apos;ll come across, grouped by type (this isn&apos;t a ranking or a recommendation of any one):</p>
      <ArticleTable
        caption="Common payment options for UAE online stores"
        cols={["Type", "Examples", "What they do"]}
        rows={[
          ["Card payment gateways", "Telr, Network International, PayTabs, Checkout.com, Stripe, Tap, Amazon Payment Services", "Accept card payments (and often Apple Pay) on your store"],
          ["Pay later (BNPL)", "Tabby, Tamara", "Customers split payments; you're paid upfront, minus a fee"],
          ["Wallets", "Apple Pay, Google Pay", "Usually offered through your card gateway"],
          ["Cash on delivery", "Your courier", "Customer pays the courier; you receive it later"],
        ]}
      />
      <p>Availability, features and platform support change, so confirm the details directly with each provider.</p>

      <h2 id="compare">What to compare</h2>
      <ol>
        <li><strong>Will they approve your business?</strong> Some business types are restricted by some providers.</li>
        <li><strong>Platform support:</strong> a ready plugin or app for Shopify, WooCommerce or your custom store.</li>
        <li><strong>Fees:</strong> percentage per transaction, any fixed fee per transaction, setup and monthly fees, and fees on refunds and international cards. These are often negotiable with volume.</li>
        <li><strong>Settlement time:</strong> how many days until money reaches your bank account. This matters for cash flow.</li>
        <li><strong>Payment methods:</strong> local and international cards, Apple Pay, recurring payments if you need subscriptions.</li>
        <li><strong>Currencies:</strong> AED only, or others if you sell across the GCC.</li>
        <li><strong>Support:</strong> who you call when payments fail on a sale day.</li>
      </ol>

      <h2 id="approval">Getting approved</h2>
      <p>Gateways check your business before approving it. Commonly requested:</p>
      <ul>
        <li>A valid trade licence covering your activity.</li>
        <li>Owner ID documents.</li>
        <li>A business bank account in the UAE.</li>
        <li>A live website with your contact details, prices, and clear <strong>terms, refund, delivery and privacy policies</strong>.</li>
      </ul>
      <Callout title="Don't leave it to the end">
        <p>
          Apply while the store is being built, with the policy pages ready. Waiting until launch week is the most common
          reason stores launch late.
        </p>
      </Callout>

      <h2 id="bnpl">Buy now, pay later</h2>
      <p>
        Tabby and Tamara let customers split a purchase into instalments while you&apos;re paid upfront, minus a merchant
        fee. They can help with higher-priced products. Check the fee against your margins, whether your product category
        is accepted, and whether their checkout integrates cleanly with your platform.
      </p>

      <h2 id="checkout">Checkout details that matter</h2>
      <ul>
        <li><strong>Apple Pay</strong> makes mobile checkout much quicker for iPhone users.</li>
        <li><strong>Card security checks</strong> (3-D Secure) are normal; make sure the step works smoothly on mobile.</li>
        <li><strong>Show the total, VAT and delivery fee before payment</strong>, so nothing surprises the customer.</li>
        <li><strong>Familiar logos</strong> at checkout reassure first-time buyers; see <Link href="/blog/trustworthy-website-uae">what makes a website trustworthy to UAE customers</Link>.</li>
      </ul>

      <h2 id="steps">A sensible order of steps</h2>
      <ol>
        <li>Choose your platform; see <Link href="/blog/best-ecommerce-platform-uae">best ecommerce platform in the UAE</Link> (or, for Shopify, <Link href="/blog/is-shopify-good-in-uae">is Shopify good in the UAE?</Link>).</li>
        <li>Shortlist two or three gateways that support it.</li>
        <li>Prepare documents and publish your policy pages.</li>
        <li>Apply to your first choice; keep a second as backup.</li>
        <li>Test real transactions and refunds before launch.</li>
      </ol>
    </ArticleLayout>
  );
}
