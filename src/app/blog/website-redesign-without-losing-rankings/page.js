import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #15 — /blog/website-redesign-without-losing-rankings
   Primary: "website redesign seo" / "redesign without losing rankings"
   (volumes not verified). Also "301 redirects", "website migration
   checklist", "rankings dropped after new website". Problem-prevention, all
   markets. Real example: ivoniz.com's own WordPress → Next.js move (old URLs
   301-redirected in .htaccess, spam URLs answered 410) — true, in this repo.
   Facts from Google Search Central (site moves, redirects). Lead path →
   technical SEO + website development.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "website-redesign-without-losing-rankings";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "why", label: "Why redesigns lose rankings" },
  { id: "before", label: "Before: list what you have" },
  { id: "redirects", label: "Redirect every old URL" },
  { id: "launch", label: "Launch day checklist" },
  { id: "after", label: "The weeks after" },
  { id: "example", label: "Our own move" },
];

const FAQS = [
  { q: "Will redesigning my website affect SEO?", a: "It can, in either direction. Rankings usually drop when old page addresses disappear without redirects, when content that ranked is removed or cut down, or when the new site is accidentally blocked from Google. Done carefully, a redesign can improve rankings." },
  { q: "What is a 301 redirect?", a: "A permanent redirect from an old page address to a new one. Visitors and Google following the old link are sent to the new page, and Google treats the new page as the replacement." },
  { q: "How long do rankings take to recover after a redesign?", a: "If redirects are correct, small fluctuations for a few weeks are normal while Google processes the changes. A drop that lasts longer usually points to a specific problem: missing redirects, removed content, or blocked pages." },
  { q: "Should I change my domain name during a redesign?", a: "Only if you need to. A new domain adds a full site move on top of the redesign. If you must, redirect every old URL to its equivalent on the new domain and tell Google using the Change of Address tool in Search Console." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Technical SEO services", href: "/digital-marketing/seo-services/technical-seo-services", note: "Redirect plans and migration checks done by our developers." },
        { label: "7 signs your business needs a new website", href: "/blog/signs-you-need-a-new-website", note: "Decide whether a redesign is needed at all." },
        { label: "Website redesign services", href: "/website-development/website-redesign", note: "Redesigns with every old URL mapped and redirected." },
      ]}
      sources={[
        ["Google Search Central: Site moves with URL changes", "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"],
        ["Google Search Central: Redirects and Google Search", "https://developers.google.com/search/docs/crawling-indexing/301-redirects"],
      ]}
      cta={{
        label: "Safe Redesign",
        title: "Planning a new website?",
        text: "We plan redesigns around your existing rankings: every old page mapped, redirected and checked after launch. Tell us about your current site and what you want to change.",
        button: "Plan the redesign",
        href: "/digital-marketing/seo-services/technical-seo-services#quote",
        message: "Hi Ivoniz, I'm planning a website redesign and don't want to lose my Google rankings.",
      }}
    >
      <p>
        A new website should be an improvement in every way. Yet a common story goes: the new site launches, everyone
        likes it, and a few weeks later enquiries from Google have dropped. Nothing looks broken. What happened is usually
        invisible on the surface: the old pages Google knew have disappeared.
      </p>
      <p>Here&apos;s how to redesign without that happening.</p>

      <h2 id="why">Why redesigns lose rankings</h2>
      <ul>
        <li><strong>Old page addresses vanish.</strong> <code>/services/kitchen-design.html</code> becomes <code>/kitchens</code>. Google and every link pointing to the old address now hit a &ldquo;page not found&rdquo;.</li>
        <li><strong>Content that ranked is removed or shortened</strong> to fit a cleaner design.</li>
        <li><strong>The new site is blocked from Google</strong> by a setting left on from development.</li>
        <li><strong>Page titles and descriptions</strong> are lost or replaced with generic ones.</li>
        <li><strong>The site gets slower</strong>, often from large images or heavy animation.</li>
      </ul>

      <h2 id="before">Before: list what you already have</h2>
      <ol>
        <li>Export every URL from the current site (the sitemap, a crawler, or your CMS).</li>
        <li>In Google Search Console, export the pages that get the most clicks and the searches they rank for.</li>
        <li>Note which pages other websites link to, if you have that data.</li>
        <li>Mark the pages that matter most: they need to keep their content, or an improved version of it.</li>
      </ol>
      <Callout title="Rule of thumb">
        <p>A page that brings visitors from Google should not lose its content in the redesign. Improve it, don&apos;t cut it.</p>
      </Callout>

      <h2 id="redirects">Redirect every old URL</h2>
      <p>
        Make a simple two-column list: old address → new address. Every old page should point to its closest new
        equivalent, not to the homepage. Redirecting everything to the homepage is treated much like a missing page.
      </p>
      <ArticleTable
        caption="Example redirect map"
        cols={["Old URL", "New URL", "Type"]}
        rows={[
          ["/services/kitchen-design.html", "/kitchens", "301 (permanent)"],
          ["/about-us.php", "/about", "301"],
          ["/gallery?cat=3", "/projects/kitchens", "301"],
          ["/old-offer-2022", "(page gone, no equivalent)", "410 or 404"],
        ]}
      />
      <p>
        Use <strong>301 (permanent)</strong> redirects. For pages that are gone for good with no replacement, it&apos;s fine
        to let them return &ldquo;not found&rdquo; (404) or &ldquo;gone&rdquo; (410).
      </p>

      <h2 id="launch">Launch day checklist</h2>
      <ol>
        <li>Remove any &ldquo;noindex&rdquo; setting or password used during development.</li>
        <li>Test a sample of old URLs: each should land on the right new page in one step.</li>
        <li>Check that page titles and descriptions are in place on the main pages.</li>
        <li>Submit the new sitemap in Search Console.</li>
        <li>Test forms, WhatsApp and call buttons, and tracking.</li>
        <li>Check mobile speed with PageSpeed Insights.</li>
      </ol>

      <h2 id="after">The weeks after launch</h2>
      <ul>
        <li>Watch Search Console&apos;s Pages report for spikes in &ldquo;Not found (404)&rdquo; and fix any missed redirects.</li>
        <li>Compare clicks and impressions for your top pages against the weeks before.</li>
        <li>Some movement in the first few weeks is normal. A drop that persists points to a specific cause: find it rather than waiting.</li>
        <li>Keep the redirects in place long-term. Old links on other sites will keep using them.</li>
      </ul>

      <h2 id="example">What we did on our own site</h2>
      <p>
        When we moved ivoniz.com from an old WordPress site to a new Next.js build, we redirected the old WordPress
        addresses to their new equivalents (for example, the old terms page to <code>/terms</code> and old service URLs to
        the matching service hubs), and returned &ldquo;gone&rdquo; (410) for spam pages that had been injected into the
        old site so Google would drop them. It&apos;s the same process described above, applied to ourselves.
      </p>
      <p>
        Not sure whether you need a redesign at all? Start with{" "}
        <Link href="/blog/signs-you-need-a-new-website">7 signs your business needs a new website</Link>.
      </p>
    </ArticleLayout>
  );
}
