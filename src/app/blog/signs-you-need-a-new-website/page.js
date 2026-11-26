import Link from "next/link";
import ArticleLayout, { Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #2 — /blog/signs-you-need-a-new-website
   Primary: "signs you need a new website" (volume not verified). Also
   "when to redesign a website", "outdated website", "old website problems".
   Kerala-leaning. Honest angle: for each sign, says when a FIX is enough
   and when a rebuild is justified (avoids pushing redesigns).
   Lead path → website development; links #1, #3, technical SEO.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "signs-you-need-a-new-website";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "mobile", label: "1. It's hard to use on a phone" },
  { id: "slow", label: "2. It's slow" },
  { id: "update", label: "3. You can't update it" },
  { id: "outdated", label: "4. The information is wrong" },
  { id: "nothing", label: "5. It brings no enquiries" },
  { id: "embarrassed", label: "6. You avoid sharing it" },
  { id: "security", label: "7. Security warnings or hacks" },
  { id: "fix-or-rebuild", label: "Fix it or rebuild it?" },
];

const FAQS = [
  { q: "How often should a business website be redesigned?", a: "There's no fixed schedule. Redesign when the site stops doing its job: it's hard to use on mobile, slow, impossible to update, or not bringing enquiries even after fixes. Some sites need it after a few years; well-built ones last longer with regular updates." },
  { q: "Will a new website lose my Google rankings?", a: "It can if old page addresses disappear without redirects, or content that ranked is removed. Done carefully, with each old URL redirected to its new equivalent, a redesign shouldn't lose rankings and often improves them." },
  { q: "Can I update my existing website instead of building a new one?", a: "Often, yes. Broken forms, old content, missing pages and slow images can be fixed on the current site. A rebuild makes sense when the underlying platform is the problem: no mobile version, no admin panel, or outdated software nobody can maintain." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Website development", href: "/website-development", note: "New websites for businesses in Kerala and the Gulf." },
        { label: "Website development cost in Kerala", href: "/website-development/website-development-cost-in-kerala", note: "What a new site typically costs." },
      ]}
      cta={{
        label: "Honest Opinion",
        title: "Not sure whether to fix or rebuild?",
        text: "Send us your website. We'll tell you which problems can be fixed on the current site and whether a rebuild is actually worth it, before you spend anything.",
        button: "Ask for an opinion",
        href: "/website-development#quote",
        message: "Hi Ivoniz, I'm not sure if my website needs fixing or rebuilding. My site: ",
      }}
    >
      <p>
        Most business websites don&apos;t fail suddenly. They age quietly: a phone number changes, a service gets added
        without a page, the design starts to feel like it belongs to a different era. Then one day a customer says
        &ldquo;I couldn&apos;t find your number on the website,&rdquo; and you wonder how long that&apos;s been happening.
      </p>
      <p>
        Here are seven signs it&apos;s time to act, and for each, whether a fix is enough or a new website makes more sense.
        A redesign isn&apos;t always the answer.
      </p>

      <h2 id="mobile">1. It&apos;s hard to use on a phone</h2>
      <p>
        Open your site on your own phone. If you have to pinch and zoom, text is tiny, buttons are too close together or
        the menu doesn&apos;t work, most of your visitors are having the same trouble, because most of them are on phones.
      </p>
      <p><strong>Fix or rebuild?</strong> If the site was never built for mobile, a rebuild is usually cheaper than retrofitting it.</p>

      <h2 id="slow">2. It takes too long to load</h2>
      <p>
        Test it on mobile data, not office Wi-Fi. If you&apos;re waiting and watching a blank screen, visitors leave before
        they see anything. Google&apos;s free PageSpeed Insights tool will show what&apos;s slowing it down.
      </p>
      <p>
        <strong>Fix or rebuild?</strong> Huge images and too many plugins can often be fixed. If the slowness comes from an
        old theme or a cheap shared server, rebuilding may be the better route.
      </p>

      <h2 id="update">3. You can&apos;t update it yourself</h2>
      <p>
        If changing an offer, a price or a staff photo means messaging the developer and waiting a week (and paying each
        time), the site will always be out of date.
      </p>
      <p><strong>Fix or rebuild?</strong> If the site has no admin panel at all, a rebuild with one is worth it for any business that changes content regularly.</p>

      <h2 id="outdated">4. The information is wrong</h2>
      <p>
        Old phone numbers, a previous address, services you no longer offer, a &ldquo;© 2019&rdquo; in the footer.
        Each one makes visitors wonder if you&apos;re still in business, and wrong contact details lose enquiries outright.
      </p>
      <p><strong>Fix or rebuild?</strong> Almost always a fix. Do it this week.</p>

      <h2 id="nothing">5. It brings no enquiries</h2>
      <p>
        If the site gets visitors but nobody contacts you through it, the cause is usually specific: a broken form, an
        unclear offer, thin service pages. Our guide on{" "}
        <Link href="/blog/why-website-not-generating-leads">why a website doesn&apos;t generate leads</Link> walks through
        how to find it.
      </p>
      <p><strong>Fix or rebuild?</strong> Start with fixes. Rebuild only if the problems can&apos;t be solved on the current platform.</p>

      <h2 id="embarrassed">6. You avoid sending people to it</h2>
      <p>
        This one is a gut check. If you&apos;d rather send a customer your Instagram than your website, or you apologise
        for the site when you share it, your customers probably notice the same things you do.
      </p>
      <p><strong>Fix or rebuild?</strong> Depends why. A dated look on a solid site can be refreshed; a site that&apos;s wrong in structure and content needs rebuilding.</p>

      <h2 id="security">7. Security warnings, or it&apos;s been hacked</h2>
      <p>
        A &ldquo;Not secure&rdquo; label in the browser, spam pages appearing in Google under your domain, or a host
        warning about malware are serious. They put off customers and can get the site flagged.
      </p>
      <p>
        <strong>Fix or rebuild?</strong> A missing SSL certificate is a quick fix. Repeated hacks on an old, unmaintained
        WordPress site often mean it&apos;s time to rebuild and put proper maintenance in place; see{" "}
        <Link href="/blog/website-maintenance-cost">what website maintenance includes</Link>.
      </p>

      <h2 id="fix-or-rebuild">Fix it or rebuild it?</h2>
      <Callout title="A simple rule">
        <p>
          If the problems are in the <strong>content</strong> (wrong details, thin pages, unclear message), fix the current site.
          If they&apos;re in the <strong>foundation</strong> (no mobile version, no admin, outdated software, very slow), rebuild.
        </p>
      </Callout>
      <p>If you do rebuild, two things protect you:</p>
      <ul>
        <li>
          <strong>Keep your Google rankings</strong>: every old page address should redirect to its new equivalent. Ask your
          developer how they&apos;ll handle it, and see <Link href="/blog/website-redesign-without-losing-rankings">redesigning without losing rankings</Link>.
        </li>
        <li>
          <strong>Compare quotes properly</strong>: see <Link href="/blog/cheap-vs-professional-website">cheap vs professional website</Link> for what a price should include.
        </li>
      </ul>
    </ArticleLayout>
  );
}
