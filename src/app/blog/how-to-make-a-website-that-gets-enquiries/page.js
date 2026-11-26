import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #9 — /blog/how-to-make-a-website-that-gets-enquiries
   Primary: "website conversion tips" / "increase website enquiries"
   (volumes not verified). How-to for building/improving pages so visitors
   act. Distinct from #1 (diagnosing why an existing site fails) and #8
   (which pages to have). Practical examples (pre-filled WhatsApp, form
   length, button wording). No conversion-rate statistics (none verified).
   Lead path → website development.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "how-to-make-a-website-that-gets-enquiries";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "one-action", label: "One main action per page" },
  { id: "where", label: "Where the buttons go" },
  { id: "words", label: "What the buttons say" },
  { id: "whatsapp", label: "Make WhatsApp effortless" },
  { id: "forms", label: "Shorter forms" },
  { id: "objections", label: "Answer doubts near the button" },
  { id: "after", label: "What happens after they click" },
  { id: "test", label: "Measure, then change one thing" },
];

const FAQS = [
  { q: "How do I get more enquiries from my website?", a: "Give each page one clear next step, put it where people decide (top of the page, after proof, at the end), make WhatsApp and calls one tap away on mobile, keep forms short, and answer the usual doubts (price, timing, trust) right next to the button." },
  { q: "Should I use a contact form or WhatsApp on my website?", a: "Both, if your customers use WhatsApp, as most in Kerala and the Gulf do. WhatsApp suits quick questions; a short form suits people who want a quote by email or prefer not to message. Track both to see which your customers use." },
  { q: "What should a 'contact us' button say?", a: "Say what the visitor gets: 'Get a price on WhatsApp', 'Book a consultation', 'Check availability'. Specific wording tells people what happens next, which makes them more comfortable clicking." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Website development", href: "/website-development", note: "Websites built around the enquiry, not just the look." },
        { label: "Why your website isn't generating leads", href: "/blog/why-website-not-generating-leads", note: "Diagnose an existing site first." },
      ]}
      cta={{
        label: "Built for Enquiries",
        title: "Want pages that make contacting you easy?",
        text: "We build and rework websites so every page has a clear next step, with WhatsApp, call and form enquiries tracked. Tell us about your site and the enquiries you want more of.",
        button: "Discuss your website",
        href: "/website-development#quote",
        message: "Hi Ivoniz, I want my website to bring more enquiries. Can we talk?",
      }}
    >
      <p>
        A website that brings enquiries isn&apos;t one with a cleverer design. It&apos;s one where, on every page, a visitor
        knows what to do next, can do it in one tap, and feels comfortable doing it. This guide is about building pages
        that way, whether you&apos;re planning a new site or reworking an existing one.
      </p>

      <h2 id="one-action">Give each page one main action</h2>
      <p>
        Decide what you most want a visitor to do on each page, and make that the obvious button. On a service page it
        might be &ldquo;Get a quote on WhatsApp&rdquo;; on a clinic page, &ldquo;Book an appointment&rdquo;. Other options
        (call, email, social links) can be there, but quieter. When five buttons compete, people often choose none.
      </p>

      <h2 id="where">Put the button where people decide</h2>
      <p>People make up their minds at different points on a page, so the main action should appear more than once:</p>
      <ul>
        <li><strong>At the top</strong>, for visitors who already know what they want.</li>
        <li><strong>After your proof</strong> (projects, reviews), when trust is highest.</li>
        <li><strong>At the end</strong>, for people who read everything.</li>
        <li><strong>On mobile, in a bar fixed to the bottom of the screen</strong> with WhatsApp and call, so it&apos;s always one tap away.</li>
      </ul>

      <h2 id="words">Say what happens when they click</h2>
      <ArticleTable
        caption="Vague vs specific button wording"
        cols={["Vague", "Specific"]}
        rows={[
          ["Submit", "Send my enquiry"],
          ["Contact us", "Get a price on WhatsApp"],
          ["Learn more", "See kitchen designs we've built"],
          ["Click here", "Check this week's availability"],
        ]}
      />
      <p>Specific wording sets expectations, and people click more readily when they know what comes next.</p>

      <h2 id="whatsapp">Make WhatsApp effortless</h2>
      <p>
        Most enquiries in Kerala and the Gulf start on WhatsApp. Two details make a big difference:
      </p>
      <ul>
        <li>
          <strong>Pre-fill the message.</strong> A WhatsApp link can open with text already typed, like &ldquo;Hi, I&apos;d like
          a price for a modular kitchen&rdquo;. The visitor just presses send, and you know which page they came from.
        </li>
        <li>
          <strong>Use the full international number</strong> (country code, no zero, no spaces), so the link works for
          customers in India and abroad.
        </li>
      </ul>
      <Callout title="Example link">
        <p><code>https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20a%20price%20for%20a%20modular%20kitchen</code></p>
      </Callout>

      <h2 id="forms">Keep forms short</h2>
      <p>
        Every extra field is a reason to stop. For a first enquiry, name, phone or WhatsApp and a short message are usually
        enough. Ask the detailed questions on the call. If you need a few details to quote, use buttons people can tap
        (&ldquo;1 BHK / 2 BHK / 3 BHK&rdquo;) instead of fields they must type into.
      </p>
      <p>And always test the form yourself after any change to the site; a form that silently stopped sending is more common than you&apos;d think.</p>

      <h2 id="objections">Answer doubts next to the button</h2>
      <p>People hesitate before contacting a business for predictable reasons. Answer them where the button is:</p>
      <ul>
        <li><strong>&ldquo;Will it be expensive?&rdquo;</strong> A price range, or &ldquo;free quote, no obligation&rdquo;.</li>
        <li><strong>&ldquo;Will they pressure me?&rdquo;</strong> &ldquo;We&apos;ll reply with a price; no calls unless you ask.&rdquo;</li>
        <li><strong>&ldquo;Will anyone reply?&rdquo;</strong> &ldquo;We reply within working hours, usually the same day&rdquo; (only if true).</li>
        <li><strong>&ldquo;Are they any good?&rdquo;</strong> A review or a photo of recent work right beside the button.</li>
      </ul>

      <h2 id="after">What happens after they click matters too</h2>
      <ul>
        <li>Show a clear confirmation after a form is sent: what happens next, and when.</li>
        <li>Make sure form emails reach someone who replies, not a forgotten inbox.</li>
        <li>Reply quickly. A slow reply loses enquiries the website worked hard to win.</li>
      </ul>

      <h2 id="test">Measure, then change one thing at a time</h2>
      <p>
        Track WhatsApp clicks, call clicks and form sends in Google Analytics, so you can see which pages produce
        enquiries. Then change one thing (a headline, button wording, a shorter form) and compare a few weeks before and
        after. Changing everything at once makes it impossible to know what worked. The setup is explained in{" "}
        <Link href="/blog/how-to-track-website-leads">how to track website leads</Link>.
      </p>
      <p>
        Still planning the site? Start with <Link href="/blog/what-a-business-website-should-include">what a business website should include</Link>.
        Reworking one that isn&apos;t performing? Start with <Link href="/blog/why-website-not-generating-leads">why a website doesn&apos;t generate leads</Link>.
      </p>
    </ArticleLayout>
  );
}
