import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #13 — /blog/seo-vs-google-ads
   Primary: "seo vs google ads" (autocomplete: "...which is better for your
   business", "local seo vs google ads", "which is better ppc or seo").
   Volumes not verified. Kerala + UAE. Only real numbers used: the UAE
   cost-per-click examples from Ubersuggest (Nov 2026, labelled with source
   and date). No Google Ads service page exists (suggested page to create —
   not verified) → links /digital-marketing and SEO pages.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "seo-vs-google-ads";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "difference", label: "The basic difference" },
  { id: "compare", label: "Side by side" },
  { id: "ads-first", label: "When ads should come first" },
  { id: "seo-first", label: "When SEO should come first" },
  { id: "both", label: "Using both" },
  { id: "budget", label: "On a small budget" },
];

const FAQS = [
  { q: "Which is better for a small business, SEO or Google Ads?", a: "Neither is better in general. Google Ads brings enquiries quickly but stops when you stop paying; SEO takes months but keeps bringing visitors without paying per click. Many small businesses start ads for immediate enquiries while building SEO for the long term." },
  { q: "Does Google Ads help SEO?", a: "Not directly: paying for ads doesn't improve your organic rankings. Indirectly, ads show you which search terms bring enquiries, which tells you what your SEO should target." },
  { q: "How much does Google Ads cost per click in Dubai?", a: "It varies a lot by search term. As examples from Ubersuggest's UAE data (November 2026), 'website development company in dubai' showed about $11.91 per click and 'ecommerce website development dubai' about $34.88. Your costs depend on your keywords, competition and ad quality." },
  { q: "Is local SEO better than Google Ads for a local shop?", a: "For businesses that rely on nearby customers, a well-set-up Google Business Profile often brings steady enquiries at no cost per click. Ads can add more visibility, especially in competitive categories or when you're new." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "SEO services", href: "/digital-marketing/seo-services", note: "Technical, on-page, local and ecommerce SEO." },
        { label: "Digital marketing", href: "/digital-marketing", note: "Ads, SEO and social media from one team." },
      ]}
      cta={{
        label: "Where to Spend",
        title: "Not sure where your budget should go?",
        text: "Tell us your business, your area and your monthly budget. We'll suggest whether to start with SEO, ads or both, and what we'd expect each to do, without promising results nobody can guarantee.",
        button: "Ask for advice",
        href: "/digital-marketing#quote",
        message: "Hi Ivoniz, I'm deciding between SEO and Google Ads. Can you advise?",
      }}
    >
      <p>
        With a limited marketing budget, the question comes up quickly: should you pay for Google Ads and get enquiries
        this week, or invest in SEO and wait? Agencies tend to recommend whatever they sell. Here&apos;s how each actually
        works, and how to decide for your business.
      </p>

      <h2 id="difference">The basic difference</h2>
      <p>
        <strong>Google Ads</strong> puts your business at the top of search results, marked &ldquo;Sponsored&rdquo;, and you
        pay each time someone clicks. It starts working as soon as the campaign is approved, and stops as soon as you stop
        paying.
      </p>
      <p>
        <strong>SEO</strong> (search engine optimisation) is work on your website and Google presence so you appear in the
        unpaid results and on Google Maps. There&apos;s no cost per click, but results build over months, and the work
        itself costs time or money.
      </p>

      <h2 id="compare">Side by side</h2>
      <ArticleTable
        caption="Google Ads vs SEO"
        cols={["", "Google Ads", "SEO"]}
        rows={[
          ["Speed", "Days", "Months"],
          ["Cost model", "Pay per click, plus management", "Pay for the work; clicks are free"],
          ["When you stop", "Traffic stops immediately", "Rankings fade slowly, if at all"],
          ["Control", "Choose exact searches, areas, times", "Influence, not control"],
          ["Best for", "Testing, launches, urgent needs, competitive terms", "Long-term enquiries, local visibility, trust"],
          ["Risk", "Spending on clicks that don't convert", "Paying for work that takes long to show"],
        ]}
      />
      <Callout title="Real example of click costs (UAE)">
        <p>
          In Ubersuggest&apos;s UAE data (November 2026), the search &ldquo;website development company in dubai&rdquo;
          showed an estimated cost of about <strong>$11.91 per click</strong>, and &ldquo;ecommerce website development
          dubai&rdquo; about <strong>$34.88</strong>. At those prices, a few dozen clicks a month add up fast, which is
          why competitive industries often invest in SEO alongside ads.
        </p>
      </Callout>

      <h2 id="ads-first">When Google Ads should come first</h2>
      <ul>
        <li><strong>You need enquiries now</strong>: a new business, a new branch, a seasonal offer.</li>
        <li><strong>Your website is new</strong> and won&apos;t rank for months.</li>
        <li><strong>You want to test</strong> which services and search terms actually bring customers before investing in SEO for them.</li>
        <li><strong>High-value services</strong> where one customer covers many clicks.</li>
      </ul>
      <p>
        Ads only work if the page they send people to converts. Sending paid clicks to a homepage with no clear next step
        wastes money; see <Link href="/blog/how-to-make-a-website-that-gets-enquiries">how to make a website that gets enquiries</Link>.
      </p>

      <h2 id="seo-first">When SEO should come first</h2>
      <ul>
        <li><strong>Local businesses</strong> whose customers search nearby: clinics, shops, service providers. A strong Google Business Profile is often the best-value start; see <Link href="/blog/local-seo-kerala-guide">our local SEO guide for Kerala</Link>.</li>
        <li><strong>Click costs in your industry are high</strong>, making ads expensive to sustain.</li>
        <li><strong>You can wait</strong> and want enquiries that don&apos;t depend on a monthly ad budget.</li>
        <li><strong>Your website has basic problems</strong> (not indexed, slow, thin pages) that would waste ad spend anyway.</li>
      </ul>

      <h2 id="both">Using both</h2>
      <p>The two work well together:</p>
      <ul>
        <li>Ads show quickly which search terms produce enquiries, so SEO can target those.</li>
        <li>As SEO starts ranking for some terms, you can reduce ad spend on them.</li>
        <li>Being in both the ads and the organic results for your key search builds trust.</li>
      </ul>

      <h2 id="budget">On a small budget</h2>
      <ol>
        <li>Fix the free basics: Google Business Profile, a clear website, WhatsApp and call buttons, tracking.</li>
        <li>Run a small, tightly targeted ad campaign for your most profitable service in your area.</li>
        <li>Track which clicks become enquiries; see <Link href="/blog/how-to-track-website-leads">how to track website leads</Link>.</li>
        <li>Put SEO effort into the services and searches that ads proved worthwhile.</li>
      </ol>
      <p>
        Whatever you choose, be wary of anyone promising guaranteed rankings or a fixed number of leads. For realistic
        SEO timelines, see <Link href="/blog/how-long-does-seo-take">how long SEO takes</Link>.
      </p>
    </ArticleLayout>
  );
}
