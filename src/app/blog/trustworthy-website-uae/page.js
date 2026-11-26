import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #18 — /blog/trustworthy-website-uae
   Primary: "trustworthy website uae" / "website trust signals" (volumes not
   verified). UAE buyer psychology: crowded market, scam awareness, checking
   legitimacy before paying. Practical trust signals; legal points hedged
   (no unverified claims about mandatory disclosures). Lead path → L1
   (websites for Dubai businesses).
   ════════════════════════════════════════════════════════════════ */

const SLUG = "trustworthy-website-uae";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "why", label: "Why trust matters more in the UAE" },
  { id: "real", label: "Show you're a real business" },
  { id: "proof", label: "Show proof of your work" },
  { id: "money", label: "Make paying feel safe" },
  { id: "language", label: "Speak to your customers" },
  { id: "erode", label: "What quietly destroys trust" },
  { id: "checklist", label: "Checklist" },
];

const FAQS = [
  { q: "How do I make my business website more trustworthy in the UAE?", a: "Show that you're a real, licensed business with a physical presence: company name and trade licence details, a full address and map, real photos, named clients or projects, genuine reviews, clear prices and policies, and contact options that work, including WhatsApp." },
  { q: "Should I show my trade licence number on my website?", a: "Many UAE businesses show their trade licence details (company name, licence number, issuing authority) in the footer or About page, and buyers often look for them. Check with your licensing authority whether specific disclosures apply to your activity." },
  { q: "Do UAE customers trust websites that aren't in Arabic?", a: "Many UAE customers are comfortable in English. Arabic content helps when your customers are Arabic speakers or you sell to government and local businesses. If you add it, it should be properly written, not machine-translated." },
  { q: "Does an .ae domain make a website more trustworthy?", a: "It signals a UAE connection, which some local customers like. It isn't essential; many established UAE businesses use .com. What matters more is everything else on the site." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Websites for Dubai businesses", href: "/website-development/website-development-company-dubai", note: "Business websites for UAE companies, built remotely from Kerala." },
        { label: "Arabic & bilingual website development", href: "/website-development/arabic-website-development", note: "When your customers need Arabic." },
      ]}
      cta={{
        label: "UAE Credibility",
        title: "Looking to improve how your business looks online in the UAE?",
        text: "Discuss your website and what your customers need to see before they contact you. Our team is in Kozhikode, Kerala, working with UAE businesses in Gulf time.",
        button: "Discuss your website",
        href: "/website-development/website-development-company-dubai#quote",
        message: "Hi Ivoniz, I want my website to build more trust with UAE customers.",
      }}
    >
      <p>
        UAE customers have plenty of choice, and most have seen scam websites, fake shops and companies that vanish after
        taking a deposit. So before they call or pay, they check. A website that looks fine but answers none of their
        silent questions (&ldquo;Is this a real company? Have they done this before? What if something goes
        wrong?&rdquo;) loses them to a competitor who does.
      </p>

      <h2 id="why">Why trust matters more in the UAE</h2>
      <ul>
        <li><strong>A crowded market.</strong> In most sectors a buyer can find several alternatives in minutes.</li>
        <li><strong>Many first-time relationships.</strong> Customers often deal with businesses they&apos;ve never visited.</li>
        <li><strong>High awareness of online fraud.</strong> People look for signs of legitimacy before sharing details or paying.</li>
        <li><strong>B2B scrutiny.</strong> Companies check suppliers carefully, sometimes asking for licences before a first order.</li>
      </ul>

      <h2 id="real">Show that you&apos;re a real business</h2>
      <ul>
        <li><strong>Company legal name and trade licence details</strong> in the footer or About page.</li>
        <li><strong>A full physical address</strong> with a map, and the area or free zone you operate from.</li>
        <li><strong>Real photos</strong> of your office, shop, warehouse, team and vehicles, not stock images.</li>
        <li><strong>A landline or mobile number</strong> that&apos;s answered, plus WhatsApp.</li>
        <li><strong>A named person</strong>: founder, manager or team, with real names and photos.</li>
      </ul>
      <Callout title="Honesty works better than looking bigger">
        <p>
          Claiming offices you don&apos;t have, or inflating client numbers, tends to backfire when a buyer checks. A
          smaller business that&apos;s open about what it is often wins over a vague one.
        </p>
      </Callout>

      <h2 id="proof">Show proof of your work</h2>
      <ul>
        <li><strong>Projects or case studies</strong> with photos and a line on what you did, naming clients with permission.</li>
        <li><strong>Reviews</strong> that link to where they were written, such as your Google profile.</li>
        <li><strong>Certifications and memberships</strong> that are real and checkable.</li>
        <li><strong>How long you&apos;ve operated</strong>, only if true.</li>
      </ul>

      <h2 id="money">Make paying feel safe</h2>
      <ul>
        <li><strong>Clear prices in AED</strong>, and whether they include VAT. If you&apos;re VAT-registered, check with your accountant or the Federal Tax Authority how prices must be shown.</li>
        <li><strong>Written policies:</strong> delivery, returns, refunds and cancellations, in plain language.</li>
        <li><strong>A recognised payment gateway</strong> and the familiar card and Apple Pay logos at checkout. See <Link href="/blog/payment-gateways-uae">payment gateways for UAE online stores</Link>.</li>
        <li><strong>HTTPS</strong> (the padlock) on every page.</li>
        <li><strong>Cash on delivery</strong>, where it suits your products, for customers who won&apos;t pay online to a new store.</li>
      </ul>

      <h2 id="language">Speak to your customers the way they expect</h2>
      <ul>
        <li><strong>English that reads naturally</strong>, without spelling mistakes; errors are a common sign of scam sites.</li>
        <li><strong>Arabic where your customers need it</strong>, written properly; see our <Link href="/blog/arabic-english-bilingual-website-guide">Arabic + English website guide</Link>.</li>
        <li><strong>Working hours in UAE time</strong>, and when you reply.</li>
      </ul>

      <h2 id="erode">What quietly destroys trust</h2>
      <ArticleTable
        caption="Common trust killers"
        cols={["What visitors see", "What they conclude"]}
        rows={[
          ["Stock photos everywhere", "They have nothing real to show"],
          ["Only a contact form, no phone or address", "They're hiding something"],
          ["'© 2019' in the footer, old offers", "Is this business still running?"],
          ["Broken pages or links", "If the website is neglected, the service may be too"],
          ["Reviews with no names or source", "They wrote these themselves"],
          ["Prices that change at checkout", "There will be more surprises later"],
        ]}
      />

      <h2 id="checklist">Checklist</h2>
      <ol>
        <li>Legal name, trade licence details and full address visible.</li>
        <li>Real photos of premises, team and work.</li>
        <li>Phone, WhatsApp and email that all work.</li>
        <li>Projects and reviews you can stand behind.</li>
        <li>Prices in AED with VAT stated clearly, and written policies.</li>
        <li>Secure, familiar payment options.</li>
        <li>Up-to-date content with no broken pages.</li>
      </ol>
      <p>
        Choosing who builds the site? Our guide on{" "}
        <Link href="/blog/how-to-choose-web-design-company-dubai">choosing a web design company in Dubai</Link> applies
        the same checks to agencies.
      </p>
    </ArticleLayout>
  );
}
