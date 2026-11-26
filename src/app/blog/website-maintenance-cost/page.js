import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";
import { STATIC_SUPPORT, WP_PACKAGES, WOO_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   Blog #6 — /blog/website-maintenance-cost
   Primary: "website maintenance cost" (autocomplete: "how much does it cost
   to maintain a website for a small business", "how much website
   maintenance cost", "website cost per month"). Volumes not verified.
   Ranges ONLY from costs.js (static yearly support, WordPress care, Woo
   maintenance incl. AED) — labelled as market ranges. Kerala + UAE.
   No dedicated maintenance service page exists: links to WordPress / Woo
   pages (suggested page to create: website maintenance — not verified).
   ════════════════════════════════════════════════════════════════ */

const SLUG = "website-maintenance-cost";
export const metadata = postMetadata(SLUG);

const WP_CARE = WP_PACKAGES.find((p) => p.id === "care");
const WOO_CARE = WOO_PACKAGES[3];

const TOC = [
  { id: "short-answer", label: "Short answer" },
  { id: "includes", label: "What maintenance includes" },
  { id: "by-type", label: "Why it depends on the type of site" },
  { id: "skip", label: "What happens if you skip it" },
  { id: "diy", label: "Doing it yourself" },
  { id: "plan", label: "Choosing a plan" },
];

const FAQS = [
  { q: "How much does website maintenance cost in Kerala?", a: `As typical market ranges, yearly support for a static website is ${STATIC_SUPPORT.inr}, WordPress care is ${WP_CARE?.inr}, and WooCommerce store maintenance is ${WOO_CARE.inr}. Domain and hosting are usually paid separately.` },
  { q: "How much does website maintenance cost in the UAE?", a: `For an online store on WooCommerce, typical market ranges are ${WOO_CARE.aed}. Simpler business websites cost less to maintain; quotes depend on how often content changes and how much is included.` },
  { q: "Is website maintenance really necessary?", a: "For WordPress and online stores, yes: software and plugins need regular updates to stay secure and working. Simple static sites need much less, mainly hosting checks, backups and the occasional content change." },
  { q: "What's not included in website maintenance?", a: "Usually new pages, new features and redesigns are quoted separately. Domain renewal and hosting are often billed separately too. Ask for a written list of what the plan covers and how many changes per month." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "WordPress website development", href: "/website-development/wordpress-website-development", note: "Including monthly care plans." },
        { label: "WooCommerce development", href: "/website-development/ecommerce-website-development/woocommerce-website-development", note: "Store builds and maintenance." },
      ]}
      cta={{
        label: "Keep It Running",
        title: "Need someone to look after your website?",
        text: "Tell us what your site runs on and how often it changes. We'll suggest what level of maintenance it actually needs, with a written list of what's included.",
        button: "Ask about maintenance",
        href: "/website-development/wordpress-website-development#quote",
        message: "Hi Ivoniz, I need maintenance for my website. It runs on: ",
      }}
    >
      <p>
        The build price is the number everyone focuses on. Then a few months after launch a plugin breaks, the site
        slows down, or a renewal invoice arrives that nobody mentioned. Maintenance is the part of a website&apos;s cost
        that&apos;s easiest to forget and most expensive to ignore.
      </p>

      <h2 id="short-answer">The short answer</h2>
      <Callout title="Typical market ranges (guide only)">
        <ul>
          <li>Static website: <strong>{STATIC_SUPPORT.inr}</strong> ({STATIC_SUPPORT.note.toLowerCase()})</li>
          <li>WordPress website: <strong>{WP_CARE?.inr}</strong> (updates, backups, security, small changes)</li>
          <li>WooCommerce store: <strong>{WOO_CARE.inr}</strong> · in the UAE <strong>{WOO_CARE.aed}</strong></li>
        </ul>
        <p className="text-[14.5px] text-black/60">Domain and hosting are usually extra. These are the guide ranges from our own service pages, not quotes.</p>
      </Callout>

      <h2 id="includes">What website maintenance usually includes</h2>
      <ArticleTable
        caption="Common items in a maintenance plan"
        cols={["Task", "Why it matters", "How often"]}
        rows={[
          ["Software and plugin updates", "Old versions are the main way WordPress sites get hacked", "Weekly to monthly"],
          ["Backups", "Lets you restore the site after a mistake or attack", "Daily to weekly"],
          ["Security monitoring", "Catches malware and suspicious logins early", "Ongoing"],
          ["Uptime checks", "Someone notices when the site goes down", "Ongoing"],
          ["Small content changes", "Prices, offers, staff, photos stay current", "As needed, often capped per month"],
          ["Form and checkout tests", "Makes sure enquiries and orders still arrive", "Monthly"],
          ["Speed checks", "Sites slow down as content and plugins grow", "Quarterly"],
          ["SSL and renewals tracking", "Avoids expired certificates and lapsed domains", "Yearly"],
        ]}
      />

      <h2 id="by-type">Why the cost depends on the type of site</h2>
      <p>
        <strong>Static websites</strong> (plain pages, no database) have very little that can break or be hacked. They
        mostly need hosting, backups and the occasional text change, which is why yearly support is low.
      </p>
      <p>
        <strong>WordPress sites</strong> run software plus plugins and themes from different developers, all updated
        separately. Updates sometimes conflict, so someone has to apply and check them. More plugins mean more work.
      </p>
      <p>
        <strong>Online stores</strong> handle payments, stock and customer data. A broken checkout costs sales every hour
        it&apos;s down, so they need the most attention.
      </p>

      <h2 id="skip">What happens if you skip it</h2>
      <ul>
        <li><strong>Security problems:</strong> outdated plugins are a common route for spam pages and malware, which can get your site flagged in browsers.</li>
        <li><strong>Silent breakage:</strong> a contact form or payment step stops working after a host or plugin update, and nobody notices for weeks.</li>
        <li><strong>Lost domain:</strong> a renewal email goes to an old address, the domain lapses, and getting it back is hard. See <Link href="/blog/who-owns-your-website-domain-hosting">who owns your website</Link>.</li>
        <li><strong>A bigger bill later:</strong> years of skipped updates often end in a rebuild instead of a routine update.</li>
      </ul>

      <h2 id="diy">Doing it yourself</h2>
      <p>
        If someone in your team is comfortable with it, you can handle a lot: WordPress updates (after a backup),
        content changes and monthly form tests. The risk is updates that conflict and break the site, so always have a
        recent backup and know how to restore it. For stores and business-critical sites, a professional plan is usually
        worth it.
      </p>

      <h2 id="plan">Choosing a maintenance plan</h2>
      <p>Ask any provider for these in writing:</p>
      <ol>
        <li>Exactly which tasks are included, and how often.</li>
        <li>How many content changes per month, and what counts as one.</li>
        <li>How quickly they respond when the site is down.</li>
        <li>Where backups are stored, and whether you can get a copy.</li>
        <li>Whether domain and hosting are included or separate.</li>
        <li>What happens to your site and accounts if you cancel.</li>
      </ol>
      <p>
        Choosing a new website? Running costs are part of the real price; see{" "}
        <Link href="/blog/cheap-vs-professional-website">cheap vs professional website</Link>, and for Gulf businesses, the{" "}
        <Link href="/blog/website-development-cost-dubai-uae">UAE website cost guide</Link>.
      </p>
    </ArticleLayout>
  );
}
