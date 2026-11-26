import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #27 — /blog/product-page-checklist
   Primary: "product page best practices" / "product page checklist"
   (volumes not verified). Absorbs "how to improve ecommerce conversion
   rates" at the product-page level. Practical checklist; examples from
   Kerala/UAE product types (jewellery, fashion, electronics). Distinct
   from #26 (store-wide diagnosis). Lead path → ecommerce development.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "product-page-checklist";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "photos", label: "Photos" },
  { id: "title-price", label: "Title and price" },
  { id: "description", label: "Description and details" },
  { id: "delivery", label: "Delivery and returns" },
  { id: "proof", label: "Reviews and questions" },
  { id: "button", label: "The buy button" },
  { id: "seo", label: "Search details" },
  { id: "checklist", label: "Full checklist" },
];

const FAQS = [
  { q: "What should a product page include?", a: "Clear photos from several angles, a descriptive title, the price with tax and delivery made clear, a description that answers buyers' questions, key specifications, delivery time and cost, the return policy, reviews, and a visible add-to-cart or WhatsApp button." },
  { q: "How many product photos should I have?", a: "Enough to answer what a buyer would check in a shop: front, back, close-ups of material or details, the product in use or worn, and scale. For most products that's several photos, not one." },
  { q: "Should I copy the manufacturer's product description?", a: "It's better not to. Many stores use the same text, so it doesn't help you stand out in search, and it rarely answers your customers' actual questions. Write your own, even if it's short." },
  { q: "Should product pages have a WhatsApp button?", a: "For many Kerala and Gulf stores, yes. Some buyers want to ask a question before paying. A WhatsApp button with the product name pre-filled can turn that hesitation into a sale." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Ecommerce website development", href: "/website-development/ecommerce-website-development", note: "Stores with product pages built to sell." },
        { label: "Why your online store gets visitors but no sales", href: "/blog/ecommerce-website-no-sales", note: "Find out where buyers drop off first." },
      ]}
      cta={{
        label: "Better Product Pages",
        title: "Want product pages that sell better?",
        text: "Let's discuss your store and conversion goals. We build and rework product pages around what your buyers actually need to see before they pay.",
        button: "Discuss your store",
        href: "/website-development/ecommerce-website-development#quote",
        message: "Hi Ivoniz, I'd like to improve the product pages on my store.",
      }}
    >
      <p>
        In a shop, a customer can pick the product up, look at the label, ask the staff a question. On a product page,
        all of that has to happen without you. Every unanswered question is a reason to leave. Here&apos;s what a product
        page needs to replace the shop counter.
      </p>

      <h2 id="photos">Photos: the most important part</h2>
      <ul>
        <li><strong>Several angles:</strong> front, back, side, and close-ups of details like stitching, finish or ports.</li>
        <li><strong>Scale:</strong> the product in a hand, on a person, or next to something familiar.</li>
        <li><strong>In use:</strong> clothes worn, furniture in a room, jewellery on.</li>
        <li><strong>True colour:</strong> natural light, no heavy filters. Wrong colours cause returns.</li>
        <li><strong>Fast loading:</strong> compressed images so the page still loads quickly on mobile data.</li>
      </ul>

      <h2 id="title-price">Title and price</h2>
      <ul>
        <li>A title that says what it is: &ldquo;Men&apos;s Linen Shirt, Half Sleeve, Olive Green&rdquo;, not &ldquo;Summer Vibes&rdquo;.</li>
        <li>The price, clear and near the top, with any discount shown honestly.</li>
        <li>Whether tax is included, and whether delivery is extra.</li>
        <li>Stock status, if it&apos;s limited.</li>
      </ul>

      <h2 id="description">Description and details</h2>
      <p>Write for the questions buyers ask, not for search engines:</p>
      <ArticleTable
        caption="What buyers want to know, by product type"
        cols={["Product type", "Questions the page must answer"]}
        rows={[
          ["Clothing", "Fabric, fit, size chart, how it washes, model's size"],
          ["Jewellery", "Metal and purity, weight, stone details, certification, making charges"],
          ["Electronics", "Specifications, compatibility, warranty and who honours it, what's in the box"],
          ["Furniture", "Dimensions, material, assembly, delivery to upper floors"],
          ["Food / cosmetics", "Ingredients, shelf life, origin, usage"],
        ]}
      />
      <p>Use short paragraphs and a specification list, so people can scan for the detail they need.</p>

      <h2 id="delivery">Delivery and returns, on the page</h2>
      <ul>
        <li>Delivery time to the buyer&apos;s area (&ldquo;2–4 days across Kerala&rdquo;, &ldquo;next day in Dubai&rdquo;) and the cost.</li>
        <li>Whether cash on delivery is available.</li>
        <li>The return or exchange policy in one line, linked to the full policy.</li>
      </ul>
      <Callout title="Why this matters">
        <p>
          Delivery cost and time are among the most common reasons people leave at checkout. Answering them on the product
          page stops the surprise later. See <Link href="/blog/cart-abandonment-reasons">why shoppers abandon carts</Link>.
        </p>
      </Callout>

      <h2 id="proof">Reviews and questions</h2>
      <ul>
        <li>Real reviews, ideally with customer photos, shown on the product page.</li>
        <li>An FAQ for questions customers keep asking about that product.</li>
        <li>A WhatsApp button with the product name pre-filled, for questions before buying.</li>
      </ul>

      <h2 id="button">The buy button</h2>
      <ul>
        <li>Visible without scrolling on mobile, or in a bar that stays on screen.</li>
        <li>Clear wording (&ldquo;Add to cart&rdquo;, &ldquo;Buy now&rdquo;), and size or variant selection that&apos;s easy to tap.</li>
        <li>A clear message if a size or colour is out of stock, not a button that silently fails.</li>
      </ul>

      <h2 id="seo">Details that help in search</h2>
      <ul>
        <li>Your own description, not the manufacturer&apos;s copy used by every other store.</li>
        <li>Descriptive image file names and alt text.</li>
        <li>Product structured data (price, availability, reviews), which most good platforms and themes add.</li>
      </ul>
      <p>
        For stores that want more search traffic, see{" "}
        <Link href="/digital-marketing/seo-services/ecommerce-seo-services">ecommerce SEO</Link>.
      </p>

      <h2 id="checklist">Full checklist</h2>
      <ol>
        <li>Several real photos, including details and scale.</li>
        <li>Descriptive title.</li>
        <li>Price with tax and delivery made clear.</li>
        <li>Description that answers buyers&apos; questions.</li>
        <li>Specifications in a scannable list.</li>
        <li>Delivery time, cost and COD availability.</li>
        <li>Return policy in one line, plus a link.</li>
        <li>Reviews and an FAQ.</li>
        <li>WhatsApp button with product name pre-filled.</li>
        <li>Buy button easy to reach on mobile.</li>
        <li>Fast loading on mobile data.</li>
      </ol>
    </ArticleLayout>
  );
}
