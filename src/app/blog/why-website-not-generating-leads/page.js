import Link from "next/link";
import ArticleLayout, { Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #1 — /blog/why-website-not-generating-leads
   Primary: "why is my website not generating leads" (Google autocomplete,
   Nov 2026; search volume not verified). Also covers "website traffic but no
   enquiries / no sales" (merged: same intent). Problem-led; Kerala + UAE.
   Lead path: diagnosis → #9 conversion, #16 lead tracking → website review.
   No statistics used (none verified).
   ════════════════════════════════════════════════════════════════ */

const SLUG = "why-website-not-generating-leads";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "first", label: "First: traffic or conversion?" },
  { id: "broken", label: "Check nothing is broken" },
  { id: "message", label: "The offer isn't clear" },
  { id: "pages", label: "Service pages are too thin" },
  { id: "trust", label: "Nothing to trust" },
  { id: "contact", label: "Contacting you is hard" },
  { id: "visitors", label: "Wrong visitors" },
  { id: "replies", label: "Slow replies" },
  { id: "order", label: "What to fix first" },
];

const FAQS = [
  { q: "Why is my website not generating leads?", a: "Usually one of five things: the site isn't getting relevant visitors, something on it is broken (a form, a WhatsApp link), the offer isn't clear within a few seconds, service pages are too thin to convince, or there's nothing that builds trust. Check them in that order." },
  { q: "My website gets traffic but no enquiries. What does that mean?", a: "It usually means a conversion problem, not a traffic problem: visitors arrive but don't find a clear reason, or an easy way, to contact you. Sometimes it means the traffic itself is the wrong kind, for example people searching for jobs or free information." },
  { q: "How many enquiries should a business website get?", a: "There's no honest universal number; it depends on your industry, prices and how many people search for what you sell in your area. Track your own enquiries month by month and judge changes against that." },
  { q: "Will a new website fix the problem?", a: "Not always. If the issue is a broken form, a thin service page or slow replies, fixing those is cheaper than a new site. A redesign makes sense when the site is slow, hard to update, or can't be fixed without rebuilding." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Website development", href: "/website-development", note: "Business websites built to bring enquiries, from our team in Kozhikode." },
        { label: "SEO audit", href: "/digital-marketing/seo-services/seo-audit-services", note: "If the problem is visitors, not conversion." },
      ]}
      cta={{
        label: "Website Review",
        title: "Want a second pair of eyes on your website?",
        text: "If your website isn't bringing enquiries, we can look at it and tell you what's most likely stopping visitors from contacting you, in plain language, before you spend on anything new.",
        button: "Ask for a review",
        href: "/website-development#quote",
        message: "Hi Ivoniz, my website isn't bringing enquiries. Can you take a look? My site: ",
      }}
    >
      <p>
        You paid for a website. It looks decent, it loads, and every so often someone tells you they saw it. But the
        phone doesn&apos;t ring because of it, and WhatsApp messages still come from people who heard about you
        elsewhere. So what&apos;s the website actually doing?
      </p>
      <p>
        This is one of the most common things business owners ask us. The good news: the cause is usually specific and
        fixable, and it&apos;s rarely &ldquo;you need a completely new website.&rdquo; Here&apos;s how to find it, in the
        order we check.
      </p>

      <h2 id="first">First, find out which problem you have</h2>
      <p>A website that doesn&apos;t produce leads has one of two problems, and the fixes are completely different:</p>
      <ul>
        <li><strong>Not enough of the right visitors.</strong> People who might buy aren&apos;t reaching the site.</li>
        <li><strong>Visitors arrive but don&apos;t contact you.</strong> The site isn&apos;t convincing them, or makes contacting you hard.</li>
      </ul>
      <p>
        You can tell which one in ten minutes if you have Google Analytics or Google Search Console set up. Look at how
        many people visited last month and which pages they landed on. If it&apos;s a handful of visits, start with
        visibility (our guide on <Link href="/blog/why-website-not-showing-on-google">why a website doesn&apos;t show on Google</Link> helps).
        If it&apos;s hundreds of visits and almost no enquiries, keep reading: it&apos;s a conversion problem.
      </p>
      <p>
        No analytics at all? That&apos;s the first thing to fix, because without it every decision is a guess.
      </p>

      <h2 id="broken">1. Make sure nothing is broken</h2>
      <p>This sounds too obvious, but it&apos;s the first thing to rule out, and it&apos;s more common than people think:</p>
      <ul>
        <li>Fill in your own contact form. Does the email actually arrive? Check the spam folder too.</li>
        <li>Tap the WhatsApp button on your phone. Does it open a chat with the right number, including the country code?</li>
        <li>Tap the phone number. Does it dial, or is it just text?</li>
        <li>Open the site on a cheap Android phone on mobile data. Does it load in a few seconds, or does it hang?</li>
      </ul>
      <p>
        A form that stopped sending emails after a hosting change, or a WhatsApp link with an old number, can silently
        kill every enquiry for months.
      </p>

      <h2 id="message">2. The offer isn&apos;t clear in the first few seconds</h2>
      <p>
        Visitors decide quickly whether they&apos;re in the right place. If the top of your homepage says &ldquo;Welcome to
        our website&rdquo; or a vague slogan, they have to work out what you do. Many won&apos;t bother.
      </p>
      <p>The first screen should answer three questions without scrolling:</p>
      <ol>
        <li>What do you do? (&ldquo;Steel windows and doors for homes and offices&rdquo;, not &ldquo;Quality you can trust&rdquo;)</li>
        <li>Who and where is it for? (&ldquo;in Kozhikode and Malappuram&rdquo;, &ldquo;for UAE businesses&rdquo;)</li>
        <li>What should I do next? (one clear button: call, WhatsApp, get a quote)</li>
      </ol>

      <h2 id="pages">3. Service pages are too thin</h2>
      <p>
        Many business websites have one &ldquo;Services&rdquo; page with six icons and a sentence each. That works for
        a menu, not for someone deciding whether to spend money with you.
      </p>
      <p>A service page that convinces usually covers:</p>
      <ul>
        <li>What exactly is included, and what isn&apos;t</li>
        <li>Who it&apos;s for, and who it isn&apos;t for</li>
        <li>How the process works, step by step</li>
        <li>A price range or what affects the price</li>
        <li>Real examples of work, with photos</li>
        <li>Answers to the questions people ask on the phone</li>
      </ul>
      <p>
        If your staff answer the same five questions on every call, those answers belong on the page.
      </p>

      <h2 id="trust">4. There&apos;s nothing to trust</h2>
      <p>
        Before contacting a business they don&apos;t know, people look for signs that it&apos;s real and does good
        work. Stock photos and &ldquo;100% customer satisfaction&rdquo; don&apos;t count. What does:
      </p>
      <ul>
        <li>Real photos of your team, premises and work</li>
        <li>A full address, a map and a landline or mobile number</li>
        <li>Named clients or projects, with permission</li>
        <li>Reviews that link to where they were left (Google, for example)</li>
        <li>How long you&apos;ve been operating, only if it&apos;s true and checkable</li>
      </ul>
      <p>
        For Gulf customers, trust signals matter even more; see{" "}
        <Link href="/blog/trustworthy-website-uae">what makes a website trustworthy to UAE customers</Link>.
      </p>

      <h2 id="contact">5. Contacting you takes too much effort</h2>
      <p>
        A contact page with a twelve-field form, at the bottom of the menu, loses people. Most enquiries in Kerala and
        the Gulf start on WhatsApp or a phone call, so make both available on every page, especially on mobile.
      </p>
      <Callout title="A quick test">
        <p>
          Open any page of your site on your phone. Count how many taps it takes to start a WhatsApp chat or a call. If
          it&apos;s more than one, you&apos;re losing enquiries.
        </p>
      </Callout>

      <h2 id="visitors">6. The visitors aren&apos;t buyers</h2>
      <p>
        Sometimes traffic looks healthy but comes from the wrong searches. A blog post that ranks for a general question
        can bring thousands of visitors who will never buy from you. In Search Console, check which search terms bring
        people to the site. If they&apos;re mostly informational (&ldquo;what is&rdquo;, &ldquo;free&rdquo;,
        &ldquo;jobs&rdquo;) and not the services you sell in the places you sell them, the content needs to target buyers
        instead.
      </p>

      <h2 id="replies">7. The enquiries come, but slip away</h2>
      <p>
        One more possibility worth checking honestly: enquiries may be arriving but going unanswered for hours, or landing
        in an inbox nobody checks. A quick reply often matters as much as the website itself. Make sure form emails go
        to someone who responds, and that WhatsApp messages get answered the same day.
      </p>

      <h2 id="order">What to fix first</h2>
      <ol>
        <li><strong>Broken things</strong>: forms, WhatsApp links, phone links, mobile loading. Fix today.</li>
        <li><strong>Measurement</strong>: set up Analytics and Search Console so you can see what changes, including WhatsApp and call clicks. See <Link href="/blog/how-to-track-website-leads">how to track website leads</Link>.</li>
        <li><strong>The first screen</strong> of your homepage and main service pages.</li>
        <li><strong>One strong service page</strong> for your most profitable service.</li>
        <li><strong>Trust signals</strong>: real photos, reviews, projects.</li>
        <li><strong>Visibility</strong>, if visitor numbers are genuinely low.</li>
      </ol>
      <p>
        For the page-by-page detail of steps 3 to 5, see{" "}
        <Link href="/blog/how-to-make-a-website-that-gets-enquiries">how to make a website that turns visitors into enquiries</Link>.
        Work through these before deciding you need a new website. If you do decide to rebuild, our{" "}
        <Link href="/blog/cheap-vs-professional-website">guide to what a website price should include</Link> helps you compare quotes.
      </p>
    </ArticleLayout>
  );
}
