import Link from "next/link";
import ArticleLayout, { Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   B5 — /blog/how-to-choose-web-design-company-dubai
   Owns: "how to choose the best website design company in dubai" (Google
   autocomplete, Nov 2026; volume unavailable), "how to choose a web design
   agency uae", "questions to ask a web design company".
   Commercial-investigation intent → feeds L1. Honest: says when a Dubai
   agency is the better choice; no "we're the best" claims.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "how-to-choose-web-design-company-dubai";
export const metadata = postMetadata(SLUG);

const W = "/website-development";

const TOC = [
  { id: "before", label: "Before you contact anyone" },
  { id: "portfolio", label: "Checking the portfolio" },
  { id: "quote", label: "Reading the quote" },
  { id: "contract", label: "The contract" },
  { id: "questions", label: "Questions to ask" },
  { id: "red-flags", label: "Red flags" },
  { id: "remote", label: "Local or remote team" },
];

const FAQS = [
  { q: "How do I choose a web design company in Dubai?", a: "Decide what the site must do first, then shortlist three agencies whose live work is similar to what you need. Ask each for a written scope with pages, features, timeline, support and ownership, compare the same items, and speak to the person who will manage your project." },
  { q: "What questions should I ask a web design agency?", a: "Who will work on my project? Can I see live sites similar to mine? Who writes and translates the content? What happens after launch and what does it cost? Who owns the domain, hosting and code? How many revision rounds are included?" },
  { q: "Should I choose the cheapest web design quote?", a: "Only if it covers the same scope as the others. A low quote often leaves out content, Arabic, SEO setup or support, which come back later as extra charges. Compare written scopes, not totals." },
  { q: "Is a web design company with a Dubai office better?", a: "It is if you want to meet in person and are happy to pay Dubai rates. A remote team can do the same work for less if it has Gulf client experience, takes calls in Gulf time and puts every account in your name." },
  { q: "How long should a business website take to build?", a: "A small business website usually takes a few weeks; a bilingual site or an online store takes longer. The biggest delays usually come from content and approvals, so agree who supplies what, and by when, before you start." },
];

const RELATED = [
  { label: "Website development company for Dubai businesses", href: `${W}/website-development-company-dubai`, note: "Our remote team, our Gulf work and how a project runs in Gulf time." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={RELATED}
      cta={{
        title: "Put us through the same checks",
        text: "Ask for our scope, timeline, live Gulf work and ownership terms in writing. We're a team in Kozhikode, India, working with UAE businesses remotely, in Gulf time.",
        button: "Ask for a scope",
        href: `${W}/website-development-company-dubai#quote`,
        message: "Hi Ivoniz, I'm choosing a web design company for my business in the UAE. Can you send a scope and quote?",
      }}
    >
      <p>
        Dubai has a lot of web design companies, and most of their websites say similar things. The way to tell them
        apart is to look past the sales pages: at their live work, at what their quote actually includes, and at what
        happens after launch. These are the checks we&apos;d run if we were hiring an agency ourselves.
      </p>

      <h2 id="before">Before you contact anyone</h2>
      <h3>1. Write down what the website has to do</h3>
      <p>
        &ldquo;A new website&rdquo; isn&apos;t a brief. Write one paragraph: who visits, what you want them to do (call,
        WhatsApp, book, buy), which pages you need and in which languages. With that, every agency quotes the same thing,
        and you can compare their answers.
      </p>
      <h3>2. Decide the type of site</h3>
      <p>
        A business website, a product catalogue, an online store and a portal are very different projects in cost and
        skills. An agency that builds great brochure sites may never have run a store with delivery zones and VAT. Our{" "}
        <Link href="/blog/website-development-cost-dubai-uae">Dubai website cost guide</Link> explains each type and its
        typical AED range.
      </p>
      <h3>3. Have a budget range in mind</h3>
      <p>
        Sharing a range saves time on both sides. A good agency tells you what&apos;s possible for that budget, and what
        would have to wait for a second phase.
      </p>

      <h2 id="portfolio">Checking the portfolio</h2>
      <h3>4. Open the live sites, not the screenshots</h3>
      <p>
        Screenshots can be mockups that never launched. Ask for links and open them on your phone, since that&apos;s where
        most of your customers will see your site. Check that they load quickly, that the forms and WhatsApp buttons work,
        and that the Arabic version (if there is one) reads properly from right to left.
      </p>
      <h3>5. Look for work like yours</h3>
      <p>
        If you sell online, ask for a store they built. If you need English and Arabic, ask for a bilingual site. Similar
        work matters more than awards or a long client logo strip.
      </p>
      <h3>6. Ask a past client</h3>
      <p>
        Any agency confident in its work can put you in touch with a client. Ask them one question: what happened when
        something went wrong after launch?
      </p>

      <h2 id="quote">Reading the quote</h2>
      <h3>7. Insist on a written scope</h3>
      <p>The quote should list:</p>
      <ul>
        <li>Every page, and the languages each one is in</li>
        <li>Template or custom design, and how many revision rounds</li>
        <li>Who writes, translates and supplies photos</li>
        <li>Each feature and integration, by name</li>
        <li>What support after launch includes, and its cost</li>
        <li>Whether the price is before or after 5% UAE VAT</li>
      </ul>
      <p>
        If two quotes are far apart, put them side by side against this list. The difference is usually something the
        cheaper one leaves out.
      </p>
      <h3>8. Ask about SEO basics, not SEO promises</h3>
      <p>
        A new site should launch with page titles, descriptions, clean URLs, mobile speed, a sitemap and redirects from
        your old pages. That&apos;s part of building it properly. Be careful with anyone who promises first-page rankings:
        nobody controls Google&apos;s results.
      </p>

      <h2 id="contract">The contract</h2>
      <h3>9. Make sure you own everything</h3>
      <p>
        The domain, hosting account, design files and code should be in your company&apos;s name, with the logins
        handed over at launch. This is the single most common problem when businesses try to change agencies.
      </p>
      <h3>10. Agree on payment stages and a timeline</h3>
      <p>
        Staged payments tied to milestones (design approved, site ready for review, launch) protect both sides. Agree on
        who supplies content, and by when, because that&apos;s where most projects slip.
      </p>

      <h2 id="questions">Questions to ask in the first call</h2>
      <Callout title="Six questions that tell you a lot">
        <ul>
          <li>Who exactly will design and build my site, and will I talk to them?</li>
          <li>Can I see three live sites similar to mine?</li>
          <li>How do you handle Arabic: who translates, and who checks the layout?</li>
          <li>What happens if something breaks a month after launch?</li>
          <li>What will this cost me every year after launch?</li>
          <li>When will I get the logins for the domain, hosting and admin?</li>
        </ul>
      </Callout>

      <h2 id="red-flags">Red flags</h2>
      <h3>11. Watch for these</h3>
      <ul>
        <li><strong>Guaranteed rankings or traffic.</strong> No one can guarantee what Google does.</li>
        <li><strong>A price without a scope.</strong> A single number with no page or feature list.</li>
        <li><strong>The domain registered in the agency&apos;s name.</strong> Ask for it to be moved to yours.</li>
        <li><strong>No live links.</strong> Only screenshots or a design gallery.</li>
        <li><strong>Pressure to sign today.</strong> A good offer is still good next week.</li>
      </ul>

      <h2 id="remote">A Dubai office or a remote team?</h2>
      <h3>12. Choose the working model that suits you</h3>
      <p>
        An agency with a Dubai office suits you if you want face-to-face meetings, or your project needs someone on site.
        You pay Dubai rates for that.
      </p>
      <p>
        A remote team, for example one in India, usually costs less and can do the same work, if three things are true:
        it takes calls in Gulf time (India is 1.5 hours ahead of the UAE), it has live Gulf client sites you can open,
        and every account is in your name. Run the same checks above either way.
      </p>
      <p>
        We&apos;re one of those remote teams: we work from Kozhikode, Kerala, and have no office in the UAE. If you want
        to put us through these checks, our{" "}
        <Link href={`${W}/website-development-company-dubai`}>website development page for Dubai businesses</Link> lists
        the Gulf websites we&apos;ve built, with links to each live site.
      </p>
    </ArticleLayout>
  );
}
