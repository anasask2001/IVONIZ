import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #26 — /blog/ecommerce-website-no-sales
   Primary: "ecommerce website no sales" (autocomplete: "why am i not getting
   sales on my website", "website not getting sales", "no sales on my
   website"). Volumes not verified. Absorbs the dropped "ecommerce mistakes
   that reduce conversions" topic. Diagnosis by funnel stage; product-page
   detail lives in #27, cart detail in #28 (linked, not repeated). Kerala +
   UAE (COD, delivery fees). No conversion-rate statistics.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "ecommerce-website-no-sales";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "funnel", label: "Find where people stop" },
  { id: "traffic", label: "1. The wrong visitors" },
  { id: "product", label: "2. Product pages don't convince" },
  { id: "trust", label: "3. The store doesn't feel safe" },
  { id: "price", label: "4. Surprise costs" },
  { id: "checkout", label: "5. Checkout is hard" },
  { id: "speed", label: "6. It's slow on mobile" },
  { id: "order", label: "What to fix first" },
];

const FAQS = [
  { q: "Why is my online store getting visitors but no sales?", a: "Usually one of six things: the visitors aren't buyers (wrong ads or searches), product pages don't answer key questions, the store doesn't feel trustworthy, delivery costs or other charges appear late, checkout is hard on mobile, or the site is slow. Your analytics will show at which step people leave." },
  { q: "How do I find out why my ecommerce site isn't converting?", a: "Look at the funnel in Google Analytics: how many visitors view a product, add to cart, start checkout and buy. The biggest drop between two steps points to the problem. Then try buying from your own store on a phone." },
  { q: "Should I offer cash on delivery to get more sales?", a: "In Kerala and the UAE many shoppers prefer it, especially with a store they don't know. It can increase orders, but brings returns and collection costs, so set limits (by area or order value) if needed." },
  { q: "Will more ads fix low sales?", a: "Not if the problem is the store. Sending more paid traffic to a store that doesn't convert costs more for the same result. Fix the store first, then scale ads." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Ecommerce website development", href: "/website-development/ecommerce-website-development", note: "Stores built for mobile checkout and local payments." },
        { label: "Ecommerce SEO", href: "/digital-marketing/seo-services/ecommerce-seo-services", note: "If the problem is the visitors, not the store." },
      ]}
      cta={{
        label: "Store Review",
        title: "Planning a store, or improving one that isn't selling?",
        text: "Let's discuss your requirements and conversion goals. Send us your store and we'll tell you where we think buyers are dropping off, before you spend more on ads.",
        button: "Discuss your store",
        href: "/website-development/ecommerce-website-development#quote",
        message: "Hi Ivoniz, my online store gets visitors but few sales. Can you take a look? Store: ",
      }}
    >
      <p>
        Your analytics show visitors arriving every day, maybe from ads you&apos;re paying for, but orders barely trickle
        in. It&apos;s one of the most frustrating situations in ecommerce, because it feels like the store is
        &ldquo;working&rdquo; and yet it isn&apos;t. The good news: the cause can usually be found, because buyers leave at a
        specific step.
      </p>

      <h2 id="funnel">First, find where people stop</h2>
      <p>Every sale passes through the same steps. Your analytics can show how many people reach each one:</p>
      <ArticleTable
        caption="The steps to a sale, and what a big drop at each one suggests"
        cols={["Step", "A big drop here suggests"]}
        rows={[
          ["Visit the store", "-"],
          ["View a product", "Wrong visitors, or the homepage/category pages don't lead anywhere"],
          ["Add to cart", "Product pages don't convince: price, photos, information, trust"],
          ["Start checkout", "Surprise costs in the cart, or doubts about the store"],
          ["Complete purchase", "Checkout problems: forms, payment options, errors on mobile"],
        ]}
      />
      <p>
        Then do the simplest test of all: buy something from your own store, on your phone, using mobile data. Note every
        moment you hesitate or get stuck.
      </p>

      <h2 id="traffic">1. The visitors aren&apos;t buyers</h2>
      <p>
        If few visitors even look at a product, check where they come from. Ads targeting broad audiences, social posts
        that went viral for the wrong reasons, or searches for information rather than products all bring visitors who were
        never going to buy. Narrow your ads and target product searches.
      </p>

      <h2 id="product">2. Product pages don&apos;t convince</h2>
      <p>
        If people view products but don&apos;t add them to the cart, the product page isn&apos;t answering their questions:
        size, material, fit, what&apos;s included, delivery time. Too few photos and a one-line description are the usual
        culprits. We cover this in detail in our{" "}
        <Link href="/blog/product-page-checklist">product page checklist</Link>.
      </p>

      <h2 id="trust">3. The store doesn&apos;t feel safe to buy from</h2>
      <ul>
        <li>No address, phone or WhatsApp visible.</li>
        <li>No return or refund policy, or one that&apos;s vague.</li>
        <li>No reviews, or reviews that look invented.</li>
        <li>Unfamiliar payment page, or no cash-on-delivery option for first-time buyers.</li>
      </ul>
      <p>
        For UAE stores especially, see <Link href="/blog/trustworthy-website-uae">what makes a website trustworthy to UAE customers</Link>.
      </p>

      <h2 id="price">4. Costs appear too late</h2>
      <p>
        A product at ₹999 or AED 99 that becomes much more at checkout, through delivery charges, COD fees or tax added at
        the end, feels like a trick. Show delivery costs on the product page or cart, state whether prices include tax,
        and set a clear free-delivery threshold if you offer one.
      </p>

      <h2 id="checkout">5. Checkout is hard</h2>
      <Callout title="Common checkout problems">
        <ul>
          <li>Forcing account creation before buying. Offer guest checkout.</li>
          <li>Too many fields, or fields that don&apos;t suit local addresses (no PIN code helper, UAE areas without postcodes).</li>
          <li>Missing the payment options people expect: UPI in India; cards, Apple Pay and pay-later in the UAE; cash on delivery in both.</li>
          <li>Payment errors on mobile, or a 3-D Secure step that fails.</li>
        </ul>
      </Callout>
      <p>
        Why people leave at this stage, and how to bring them back, is covered in{" "}
        <Link href="/blog/cart-abandonment-reasons">why shoppers abandon carts</Link>.
      </p>

      <h2 id="speed">6. It&apos;s slow on mobile</h2>
      <p>
        Most shoppers are on phones, often on mobile data. Large product images, too many apps or plugins, and heavy themes
        make category and product pages slow, and slow stores lose buyers before they see anything. Test with Google&apos;s
        free PageSpeed Insights.
      </p>

      <h2 id="order">What to fix first</h2>
      <ol>
        <li>Buy from your own store on a phone and fix anything that breaks.</li>
        <li>Set up the funnel steps in analytics, so you can see where people stop.</li>
        <li>Fix the step with the biggest drop first.</li>
        <li>Only then increase ad spend.</li>
      </ol>
      <p>
        Still choosing or switching platforms? See{" "}
        <Link href="/blog/best-ecommerce-platform-uae">best ecommerce platform in the UAE</Link>.
      </p>
    </ArticleLayout>
  );
}
