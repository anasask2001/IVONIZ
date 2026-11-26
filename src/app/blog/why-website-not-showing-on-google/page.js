import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #10 — /blog/why-website-not-showing-on-google
   Primary: "why is my website not showing on google" + dozens of autocomplete
   variants (…not showing up when I google it, not indexed, Wix/Shopify/
   WordPress/GoDaddy versions). Search volume not verified.
   Distinct from #11 (Google Business Profile / Maps). Technical but written
   for owners. Facts from Google Search Central docs (linked as sources).
   Lead path → technical SEO service page.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "why-website-not-showing-on-google";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "two-problems", label: "Not indexed, or not ranking?" },
  { id: "check", label: "The 2-minute check" },
  { id: "not-indexed", label: "Reasons it isn't indexed" },
  { id: "platforms", label: "Wix, Shopify, WordPress settings" },
  { id: "not-ranking", label: "Indexed but not ranking" },
  { id: "how-long", label: "How long it takes" },
];

const FAQS = [
  { q: "Why is my website not showing on Google?", a: "Either Google hasn't indexed it yet (new site, blocked by a setting, or no links pointing to it), or it's indexed but doesn't rank for the words you're searching. Search site:yourdomain.com to see which. No results means an indexing problem; results means a ranking problem." },
  { q: "How long does it take for a new website to show on Google?", a: "Often a few days to a few weeks for the first pages to be indexed, depending on whether Google can discover the site. Submitting a sitemap in Google Search Console and requesting indexing for the homepage helps. Ranking for competitive searches takes much longer." },
  { q: "Why does my website show when I search its name but not my service?", a: "Searching your business name only proves the site is indexed. Ranking for 'web design company Kozhikode' or 'dentist in Dubai Marina' means competing with every business targeting that phrase; that depends on your page content, local signals and links." },
  { q: "Do I need to pay Google to appear in search results?", a: "No. Organic results are free; Google doesn't accept payment to index or rank a site. Paid ads appear separately, marked as sponsored." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Technical SEO services", href: "/digital-marketing/seo-services/technical-seo-services", note: "Indexing, speed and site errors fixed by our developers." },
        { label: "SEO audit", href: "/digital-marketing/seo-services/seo-audit-services", note: "A review of why your site isn't being found." },
      ]}
      sources={[
        ["Google Search Central: Get your website on Google", "https://developers.google.com/search/docs/fundamentals/get-on-google"],
        ["Google Search Console: URL Inspection tool", "https://support.google.com/webmasters/answer/9012289"],
        ["Google Search Central: Block indexing with noindex", "https://developers.google.com/search/docs/crawling-indexing/block-indexing"],
      ]}
      cta={{
        label: "Search Visibility",
        title: "Still can't find your site on Google?",
        text: "If your business is struggling to show up on Google, we can check whether it's an indexing problem or a ranking problem, and tell you what would actually help.",
        button: "Ask for a check",
        href: "/digital-marketing/seo-services/technical-seo-services#quote",
        message: "Hi Ivoniz, my website isn't showing on Google. Can you check why? My site: ",
      }}
    >
      <p>
        You search for your business on Google and your website isn&apos;t there. Or it shows when you type the exact
        business name, but not when you search for what you actually sell. Both are frustrating, and both have specific
        causes you can check yourself before paying anyone.
      </p>

      <h2 id="two-problems">Two different problems</h2>
      <p>&ldquo;Not showing on Google&rdquo; usually means one of these:</p>
      <ArticleTable
        caption="Indexing vs ranking"
        cols={["Problem", "What it means", "Typical cause"]}
        rows={[
          ["Not indexed", "Google doesn't have your page in its index at all", "New site, a setting blocking Google, no links pointing to the site"],
          ["Indexed but not ranking", "Google knows the page, but shows other sites above it for your search", "Thin content, strong competitors, weak local signals"],
        ]}
      />
      <p>
        If you&apos;re trying to show up on <strong>Google Maps</strong>, that&apos;s a third, separate issue handled by
        your Google Business Profile; see{" "}
        <Link href="/blog/google-business-profile-not-showing">Google Business Profile not showing</Link>.
      </p>

      <h2 id="check">The 2-minute check</h2>
      <p>Type this into Google, using your own domain:</p>
      <Callout>
        <p><code>site:yourbusiness.com</code></p>
      </Callout>
      <ul>
        <li><strong>No results:</strong> Google hasn&apos;t indexed your site. Read the next section.</li>
        <li><strong>Some pages listed:</strong> you&apos;re indexed. If you still don&apos;t appear for your services, it&apos;s a ranking problem; skip to <a href="#not-ranking">indexed but not ranking</a>.</li>
      </ul>
      <p>
        For a precise answer, set up <strong>Google Search Console</strong> (free) and use the URL Inspection tool on your
        homepage. It tells you whether the page is indexed, and if not, why.
      </p>

      <h2 id="not-indexed">Why a site isn&apos;t indexed</h2>
      <h3>The site is new</h3>
      <p>
        Google has to discover a site before indexing it. A brand-new domain with no links pointing to it can take a while.
        Speed it up by adding the site to Search Console, submitting your sitemap (usually <code>yourdomain.com/sitemap.xml</code>),
        and requesting indexing for the homepage.
      </p>
      <h3>A setting is telling Google to stay away</h3>
      <p>
        This is the most common cause we find on sites built in a hurry. During development, developers often switch on
        &ldquo;don&apos;t index&rdquo; so half-built pages don&apos;t appear on Google, then forget to switch it off at launch.
        It shows up as a <code>noindex</code> tag in the page code, or a <code>robots.txt</code> file blocking the whole site.
        Search Console&apos;s URL Inspection will say if this is the problem.
      </p>
      <h3>The site is behind a password or &ldquo;coming soon&rdquo; page</h3>
      <p>Google can&apos;t index what it can&apos;t open. Check the site in a private browser window while logged out.</p>
      <h3>The domain recently changed</h3>
      <p>
        Moving to a new domain without redirects from the old one means starting from zero. Old pages should redirect
        permanently (301) to their new addresses.
      </p>

      <h2 id="platforms">Settings to check on common platforms</h2>
      <ul>
        <li><strong>WordPress:</strong> Settings → Reading → make sure &ldquo;Discourage search engines from indexing this site&rdquo; is <em>unticked</em>.</li>
        <li><strong>Shopify:</strong> remove the storefront password (Online Store → Preferences) once you launch.</li>
        <li><strong>Wix / Squarespace:</strong> check the SEO settings that hide the site or individual pages from search engines, and that the site is published on your own domain.</li>
        <li><strong>Custom-built sites:</strong> ask your developer to confirm there&apos;s no site-wide noindex tag and that robots.txt doesn&apos;t block everything.</li>
      </ul>
      <p>After fixing a setting, request indexing again in Search Console.</p>

      <h2 id="not-ranking">Indexed, but not ranking for your services</h2>
      <p>
        If <code>site:</code> shows your pages but searching &ldquo;interior designer in Kozhikode&rdquo; or &ldquo;IT
        support Dubai&rdquo; doesn&apos;t, Google knows your site but prefers others for that search. Common reasons:
      </p>
      <ul>
        <li><strong>No page about that service.</strong> If &ldquo;kitchen renovation&rdquo; is one line on a services page, a competitor with a whole page on it will usually outrank you.</li>
        <li><strong>The location isn&apos;t clear.</strong> Pages don&apos;t say where you work, and your address isn&apos;t on the site.</li>
        <li><strong>Titles don&apos;t match searches.</strong> Your homepage title is &ldquo;Home&rdquo; or just your brand name.</li>
        <li><strong>The site is slow or broken on mobile</strong>, which hurts both rankings and visitors.</li>
        <li><strong>Competitors have more reputation:</strong> reviews, mentions and links from other relevant sites.</li>
      </ul>
      <p>
        For local services, the Google Business Profile often matters as much as the website. Fixing it is covered in{" "}
        <Link href="/blog/google-business-profile-not-showing">our Google Business Profile guide</Link>.
      </p>

      <h2 id="how-long">How long it takes</h2>
      <p>
        Indexing problems, once fixed, often clear within days to a few weeks. Ranking improvements take longer: months
        rather than weeks for competitive searches. Be careful with anyone who promises first-page rankings by a date;
        nobody controls Google&apos;s results.
      </p>
      <p>
        If you&apos;re getting visitors but still no enquiries, the problem has moved on from Google: see{" "}
        <Link href="/blog/why-website-not-generating-leads">why a website doesn&apos;t generate leads</Link>.
      </p>
    </ArticleLayout>
  );
}
