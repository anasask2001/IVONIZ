import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #14 — /blog/how-long-does-seo-take
   Primary: "how long does seo take" (autocomplete: "...to work for a new
   website", "...to show results", "how long does local seo take"). Volumes
   not verified. Absorbs the parked "how long SEO takes in Dubai" topic.
   Honest ranges by type of work, no promises. Google's "Do you need an SEO?"
   page linked as a source (not quoted: the often-cited line couldn't be
   confirmed in the page text, Nov 2026). Lead path → SEO services / Dubai.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "how-long-does-seo-take";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "short-answer", label: "Short answer" },
  { id: "by-work", label: "Timeline by type of work" },
  { id: "factors", label: "What makes it faster or slower" },
  { id: "new-site", label: "For a brand-new website" },
  { id: "progress", label: "How to tell it's working" },
  { id: "warning", label: "Warning signs" },
];

const FAQS = [
  { q: "How long does SEO take to show results?", a: "Technical fixes and Google Business Profile improvements can show effects within weeks. Ranking for competitive searches usually takes several months, and longer in crowded industries. A new website with no history generally takes longer than an established one." },
  { q: "How long does SEO take for a new website?", a: "Getting indexed can take days to weeks. Ranking for less competitive, specific searches (a service plus a town) can come within a few months; broad, competitive searches can take much longer." },
  { q: "How long does local SEO take?", a: "Often faster than general SEO, because you compete with fewer businesses nearby. Fixing and completing your Google Business Profile and getting reviews can change Maps visibility within weeks to a few months." },
  { q: "Why does SEO take so long?", a: "Google has to discover changes, re-evaluate pages, and see signals like reviews and links build up over time. Competitors are improving too. That's why SEO is measured in months, not days." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "SEO services", href: "/digital-marketing/seo-services", note: "Monthly SEO with reports on enquiries, not just rankings." },
        { label: "SEO services for Dubai businesses", href: "/digital-marketing/seo-services/seo-services-dubai", note: "For UAE markets, where some sectors are very crowded." },
      ]}
      sources={[["Google Search Central: Do you need an SEO?", "https://developers.google.com/search/docs/fundamentals/do-i-need-seo"]]}
      cta={{
        label: "Realistic Plan",
        title: "Want an honest timeline for your website?",
        text: "Send your website and the searches you want to be found for. We'll tell you what's realistic, what would come first, and what we'd measure along the way.",
        button: "Ask for a timeline",
        href: "/digital-marketing/seo-services#quote",
        message: "Hi Ivoniz, how long would SEO take for my website? My site: ",
      }}
    >
      <p>
        &ldquo;How long before we see results?&rdquo; is the first question most business owners ask about SEO, and the
        one most often answered vaguely. The honest answer is that it depends on what work is being done and how
        competitive your searches are. Here&apos;s a realistic breakdown, so you can judge whether progress is on track.
      </p>

      <h2 id="short-answer">The short answer</h2>
      <Callout>
        <p>
          <strong>Weeks</strong> for fixes Google can see quickly (indexing problems, your Google Business Profile).{" "}
          <strong>A few months</strong> for specific local searches. <strong>Many months or longer</strong> for broad,
          competitive searches, especially for a new website or a crowded industry.
        </p>
      </Callout>

      <h2 id="by-work">Timeline by type of work</h2>
      <ArticleTable
        caption="Typical timelines (they vary by site and competition)"
        cols={["Work", "When effects usually show", "Notes"]}
        rows={[
          ["Fixing indexing problems", "Days to weeks", "Once Google can crawl the site again"],
          ["Google Business Profile improvements", "Weeks to a few months", "Category, photos, reviews; often the fastest local win"],
          ["Page titles and descriptions", "Weeks", "After Google re-crawls the pages"],
          ["New service pages", "Weeks to months", "Faster for specific searches ('service + town')"],
          ["Reviews and local reputation", "Builds over months", "Steady beats a sudden burst"],
          ["Links and mentions from other sites", "Months", "The slowest, and the most valuable in competitive sectors"],
        ]}
      />

      <h2 id="factors">What makes SEO faster or slower</h2>
      <ul>
        <li><strong>Competition.</strong> &ldquo;Physiotherapy in Kondotty&rdquo; is very different from &ldquo;real estate agency Dubai&rdquo;. Crowded Dubai sectors (real estate, legal, finance) take much longer.</li>
        <li><strong>The site&apos;s history.</strong> An established domain with some reputation moves faster than a brand-new one.</li>
        <li><strong>Starting point.</strong> A site with serious technical problems needs those fixed before anything else counts.</li>
        <li><strong>How specific the searches are.</strong> &ldquo;Service + town&rdquo; searches rank sooner than broad ones.</li>
        <li><strong>Consistency.</strong> SEO done steadily every month beats bursts of activity followed by nothing.</li>
      </ul>

      <h2 id="new-site">For a brand-new website</h2>
      <ol>
        <li><strong>First days to weeks:</strong> set up Search Console, submit the sitemap, request indexing. Check the site is indexed with a <code>site:</code> search.</li>
        <li><strong>First months:</strong> expect to appear for your business name and some specific searches. Your Google Business Profile will likely bring more enquiries than the website at this stage.</li>
        <li><strong>After that:</strong> rankings for broader searches build as content, reviews and links grow.</li>
      </ol>
      <p>
        If your new site isn&apos;t appearing at all after a few weeks, check for indexing problems; see{" "}
        <Link href="/blog/why-website-not-showing-on-google">why a website isn&apos;t showing on Google</Link>.
      </p>
      <p>
        If you need enquiries during these early months, ads can bridge the gap; see{" "}
        <Link href="/blog/seo-vs-google-ads">SEO or Google Ads first</Link>.
      </p>

      <h2 id="progress">How to tell it&apos;s working before rankings move</h2>
      <p>In Google Search Console, look for these, month on month:</p>
      <ul>
        <li><strong>Impressions rising:</strong> Google is showing your pages for more searches, even before clicks follow.</li>
        <li><strong>More search terms</strong> your site appears for, especially ones related to your services.</li>
        <li><strong>Average position improving</strong> for your target searches.</li>
        <li>And the one that matters most: <strong>enquiries from organic search</strong> going up (you need tracking for this; see <Link href="/blog/how-to-track-website-leads">how to track website leads</Link>).</li>
      </ul>

      <h2 id="warning">Warning signs</h2>
      <ul>
        <li>Promises of guaranteed first-page rankings, or rankings by a specific date.</li>
        <li>Reports that show rankings for obscure searches nobody uses, but never enquiries.</li>
        <li>No explanation of what was actually done each month.</li>
        <li>Sudden huge numbers of links from unrelated sites, which can harm you.</li>
      </ul>
      <p>
        Good SEO work is explainable: you should always know what was done, why, and what it&apos;s meant to change.
      </p>
    </ArticleLayout>
  );
}
