import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #28 — /blog/cart-abandonment-reasons
   Primary: "reasons for cart abandonment" (autocomplete; also "how to
   reduce cart abandonment on shopify", "abandoned cart whatsapp message",
   "cart abandonment woocommerce"). Volumes not verified. NO abandonment-rate
   statistics (none verified for India/UAE). WhatsApp recovery: needs
   consent + approved templates via the Business Platform (Meta rules, see
   #19). Lead path → Shopify UAE / WooCommerce pages.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "cart-abandonment-reasons";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "normal", label: "Some abandonment is normal" },
  { id: "reasons", label: "Why shoppers leave" },
  { id: "prevent", label: "Preventing it" },
  { id: "recover", label: "Winning them back" },
  { id: "whatsapp", label: "Recovery on WhatsApp" },
  { id: "measure", label: "Measuring it" },
];

const FAQS = [
  { q: "What are the main reasons for cart abandonment?", a: "Unexpected costs at checkout (delivery, fees, tax), being forced to create an account, a long or confusing checkout, missing payment options such as cash on delivery or UPI, slow delivery times, doubts about the store, and simply browsing without intending to buy yet." },
  { q: "How do I reduce cart abandonment on Shopify or WooCommerce?", a: "Show delivery costs early, allow guest checkout, keep the checkout short, offer the payment methods your customers expect, make delivery times and return policies clear, and set up abandoned checkout reminders." },
  { q: "Can I send abandoned cart reminders on WhatsApp?", a: "Yes, through the WhatsApp Business Platform, if the customer agreed to receive WhatsApp messages from you and you use a message template approved by Meta. Messaging people without consent risks your number being restricted." },
  { q: "Should I give a discount in abandoned cart messages?", a: "Not by default. A reminder alone often works, and routine discounts teach customers to abandon carts on purpose. Use offers selectively, for example for first-time buyers or high-value carts." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Shopify store development for UAE businesses", href: "/website-development/ecommerce-website-development/shopify-store-development-uae", note: "Checkout, payments and reminders set up properly." },
        { label: "WooCommerce development", href: "/website-development/ecommerce-website-development/woocommerce-website-development", note: "WordPress stores with recovery built in." },
      ]}
      cta={{
        label: "Recover More Orders",
        title: "Losing buyers at checkout?",
        text: "Let's discuss your store and conversion goals. We can look at your checkout, payment options and reminders, and tell you where orders are slipping away.",
        button: "Discuss your checkout",
        href: "/website-development/ecommerce-website-development#quote",
        message: "Hi Ivoniz, too many carts are abandoned on my store. Can you help?",
      }}
    >
      <p>
        A shopper picks a product, adds it to the cart, maybe even starts checkout, and then leaves. Every store sees this,
        and some of it can&apos;t be avoided. But a lot of it comes from fixable reasons, and some of the people who leave
        can be brought back.
      </p>

      <h2 id="normal">Some abandonment is normal</h2>
      <p>
        Many people use the cart as a wishlist, compare prices, or get interrupted. You won&apos;t get every cart back, and
        chasing every one aggressively annoys customers. The goal is to remove the reasons that are your store&apos;s fault,
        and gently remind the people who were genuinely close to buying.
      </p>

      <h2 id="reasons">Why shoppers leave</h2>
      <ArticleTable
        caption="Common reasons, and the fix for each"
        cols={["Reason", "What the shopper thinks", "Fix"]}
        rows={[
          ["Delivery cost appears at the end", "'That's more than I expected'", "Show delivery cost on the product page or cart"],
          ["Forced account creation", "'I just want to buy this'", "Offer guest checkout"],
          ["Long checkout form", "'This is taking too long'", "Ask only for what delivery needs"],
          ["Missing payment option", "'I don't want to pay by card'", "Add COD, UPI, Apple Pay or pay-later as relevant"],
          ["Delivery is too slow or unclear", "'I need it by Friday'", "Show delivery time per area before checkout"],
          ["Doubts about the store", "'Is this legit?'", "Contact details, policies, reviews, familiar payment page"],
          ["Payment fails", "'It didn't work'", "Test payments on mobile; show clear error messages"],
        ]}
      />

      <h2 id="prevent">Preventing it in the first place</h2>
      <ul>
        <li><strong>No surprises:</strong> delivery, COD fees and tax visible before checkout. A free-delivery threshold shown in the cart helps.</li>
        <li><strong>Guest checkout</strong>, with an optional account afterwards.</li>
        <li><strong>Local address fields:</strong> PIN code lookup in India; areas and landmarks in the UAE, where many addresses have no postcode.</li>
        <li><strong>The right payment options:</strong> UPI and COD for Indian shoppers; cards, Apple Pay, pay-later and COD in the UAE. See <Link href="/blog/payment-gateways-uae">payment gateways for UAE stores</Link>.</li>
        <li><strong>Reassurance at checkout:</strong> return policy in one line, WhatsApp help, secure payment logos.</li>
      </ul>
      <p>Many of these start on the product page; see our <Link href="/blog/product-page-checklist">product page checklist</Link>.</p>

      <h2 id="recover">Winning them back</h2>
      <p>
        When a shopper enters their email or phone at checkout and doesn&apos;t finish, you can send a reminder. Shopify has
        built-in abandoned checkout emails, and WooCommerce has plugins for it.
      </p>
      <Callout title="What makes a reminder work">
        <ul>
          <li><strong>Timing:</strong> a first reminder within hours, while they still remember; at most one or two follow-ups.</li>
          <li><strong>Content:</strong> the product, its photo, a one-tap link back to their cart.</li>
          <li><strong>Help, not pressure:</strong> &ldquo;Any questions about sizing or delivery? Reply here.&rdquo;</li>
          <li><strong>Discounts sparingly:</strong> routine discounts teach people to abandon carts on purpose.</li>
        </ul>
      </Callout>

      <h2 id="whatsapp">Recovery on WhatsApp</h2>
      <p>
        For shoppers in Kerala and the Gulf, a WhatsApp reminder often gets more attention than email. Do it properly:
      </p>
      <ul>
        <li>Send through the <strong>WhatsApp Business Platform</strong> (via your store&apos;s app or provider), not by hand from a personal phone.</li>
        <li>Only message shoppers who <strong>agreed to WhatsApp messages</strong>, for example with a checkbox at checkout.</li>
        <li>Use a <strong>message template approved by Meta</strong>; Meta charges per template message.</li>
        <li>Keep it short and helpful, with a link back to the cart.</li>
      </ul>
      <p>
        More on the rules and costs: <Link href="/blog/whatsapp-business-uae">WhatsApp for business enquiries</Link>.
      </p>

      <h2 id="measure">Measuring it</h2>
      <p>
        Track how many carts become checkouts and how many checkouts become orders, in your store&apos;s reports or Google
        Analytics. Change one thing at a time (show delivery cost earlier, add COD) and compare the weeks before and after.
        If visitors aren&apos;t even reaching the cart, the problem is earlier; see{" "}
        <Link href="/blog/ecommerce-website-no-sales">why an online store gets visitors but no sales</Link>.
      </p>
    </ArticleLayout>
  );
}
