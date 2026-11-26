import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";
import { STATIC_PACKAGES, WP_PACKAGES } from "@/components/ecommerce/costs";

/* ════════════════════════════════════════════════════════════════
   Blog #3 — /blog/cheap-vs-professional-website
   Primary: "cheap vs expensive website" (autocomplete; volume not verified).
   Also: "cheap website development risks", "why website quotes vary",
   "website price kerala". Commercial investigation, Kerala/India.
   Does NOT compete with the Kerala cost guide (which owns "website cost in
   kerala"): this article is about what a price includes, and links there for
   numbers. Ranges from costs.js, labelled. Honest: cheap is sometimes right.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "cheap-vs-professional-website";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "same-word", label: "Same word, different product" },
  { id: "difference", label: "Where the money goes" },
  { id: "hidden", label: "Costs that appear later" },
  { id: "when-cheap", label: "When cheap is the right choice" },
  { id: "questions", label: "Questions for any quote" },
];

const FAQS = [
  { q: "Why is one website quote ₹10,000 and another ₹1,00,000?", a: "They're usually quoting different things. The cheaper one is often a ready template with your logo and text dropped in; the expensive one may include custom design, written content, SEO setup, training and a year of support. Ask both for a written list of pages, features and what happens after launch." },
  { q: "Is a cheap website bad for SEO?", a: "Not automatically. Problems come from what cheap builds often skip: proper page titles, a page per service, fast loading on mobile, and correct settings at launch. A small, well-built site can do well; a cheap site with those gaps usually won't." },
  { q: "Is it safe to hire a freelancer for my business website?", a: "It can be, for a small site, if the domain and hosting are registered in your name, you get all the logins, and you know who will fix problems later. Most freelancer horror stories are about access and support, not the design." },
  { q: "How much should a small business website cost in Kerala?", a: `As a guide, typical Kerala market ranges are ${STATIC_PACKAGES[0].inr} for a small static site and ${WP_PACKAGES[0].inr} for a WordPress starter business site. Our Kerala cost guide has the full breakdown.` },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Website development cost in Kerala", href: "/website-development/website-development-cost-in-kerala", note: "Typical price ranges by type of website." },
        { label: "Static website development", href: "/website-development/static-website-development", note: "The most affordable kind of business website, done properly." },
      ]}
      cta={{
        label: "Compare Properly",
        title: "Want a quote you can actually compare?",
        text: "We send a written list of every page, feature and post-launch cost, so you can put it next to any other quote and see the difference. Our team is at HiLITE Business Park, Kozhikode.",
        button: "Get a written quote",
        href: "/website-development/website-development-cost-in-kerala#quote",
        message: "Hi Ivoniz, I'm comparing website quotes. Can you send a written scope and price?",
      }}
    >
      <p>
        Ask five web designers in Kerala for a business website and you can easily get quotes from under ₹10,000 to over
        ₹1,00,000. It&apos;s natural to assume the expensive ones are overcharging, or the cheap ones are cutting corners.
        Usually neither is true: they&apos;re quoting different things under the same word, &ldquo;website.&rdquo;
      </p>
      <p>
        This guide explains what you&apos;re actually paying for, so you can decide what your business needs, which is
        sometimes the cheaper option.
      </p>

      <h2 id="same-word">Same word, different product</h2>
      <ArticleTable
        caption="What a 'website' can mean in a quote"
        cols={["", "Typical low-cost build", "Typical professional build"]}
        rows={[
          ["Design", "Ready-made template, your logo added", "Designed around your business and customers"],
          ["Content", "You send text; it's pasted in", "Pages planned and written to answer customer questions"],
          ["Pages", "Home, about, services, contact", "A page per main service, plus location and trust pages"],
          ["Mobile", "Template's default", "Tested on real phones, fast on mobile data"],
          ["SEO setup", "Often skipped", "Titles, descriptions, sitemap, Search Console, Google Business Profile link"],
          ["Enquiries", "A contact form", "WhatsApp, call and form tracked, so you know what works"],
          ["After launch", "Often nothing agreed", "Support, updates and fixes agreed in writing"],
          ["Ownership", "Sometimes in the developer's name", "Domain, hosting and logins in your name"],
        ]}
      />
      <p>
        Neither column is &ldquo;right&rdquo;. The question is which one your business needs today.
      </p>

      <h2 id="difference">Where the money in a higher quote goes</h2>
      <p>Most of the price difference is time, spent on things you don&apos;t see in a screenshot:</p>
      <ul>
        <li><strong>Planning</strong>: deciding which pages you need and what each should say to win the customer.</li>
        <li><strong>Writing</strong>: turning &ldquo;we do interiors&rdquo; into pages that answer what customers actually ask.</li>
        <li><strong>Testing</strong>: on different phones, slow connections and browsers.</li>
        <li><strong>Setup</strong>: analytics, Search Console, redirects from your old site, the Google profile.</li>
        <li><strong>Support</strong>: someone responsible when something breaks.</li>
      </ul>

      <h2 id="hidden">Costs that appear later with cheap builds</h2>
      <p>The cheap website is sometimes the expensive one over two or three years:</p>
      <ul>
        <li><strong>Redoing it.</strong> If it brings no enquiries, you pay again for a second site within a year or two.</li>
        <li><strong>Lost access.</strong> When the domain or hosting is in the developer&apos;s name and they stop responding, recovering it takes time and sometimes money. See <Link href="/blog/who-owns-your-website-domain-hosting">who owns your website</Link>.</li>
        <li><strong>Every change is a new charge</strong> because there&apos;s no admin panel or support agreement.</li>
        <li><strong>Security problems</strong> on unmaintained WordPress sites with outdated plugins.</li>
      </ul>

      <h2 id="when-cheap">When a cheap website is the right choice</h2>
      <p>Honestly, sometimes it is:</p>
      <ul>
        <li>You&apos;re just starting and mainly need somewhere to send people from Instagram or WhatsApp.</li>
        <li>Customers find you by word of mouth; the site only needs to confirm you&apos;re real.</li>
        <li>You&apos;re testing an idea before committing.</li>
      </ul>
      <p>
        Even then, insist on three things: the domain in your name, the logins handed over, and a fast mobile version. A{" "}
        <Link href="/website-development/static-website-development">simple static website</Link> often gives you that at a
        low price.
      </p>
      <Callout title="Typical Kerala market ranges (guide only)">
        <p>
          Small static site: <strong>{STATIC_PACKAGES[0].inr}</strong> ({STATIC_PACKAGES[0].pages}) ·
          business static site: <strong>{STATIC_PACKAGES[1].inr}</strong> ·
          WordPress starter site: <strong>{WP_PACKAGES[0].inr}</strong>.
        </p>
        <p className="text-[14.5px] text-black/60">
          Full breakdown: <Link href="/website-development/website-development-cost-in-kerala">website development cost in Kerala</Link>.
        </p>
      </Callout>

      <h2 id="questions">Questions to ask any quote, cheap or expensive</h2>
      <ol>
        <li>What exactly are the pages, and who writes the content?</li>
        <li>Is the design a template or made for us?</li>
        <li>Will it be registered in our name: domain, hosting, admin login?</li>
        <li>What&apos;s set up for Google at launch?</li>
        <li>What happens if something breaks after launch, and what does that cost?</li>
        <li>What will we pay every year after the first?</li>
        <li>Can we see three live sites you built, and talk to one of those clients?</li>
      </ol>
      <p>
        Two quotes that answer these the same way are comparable. If they don&apos;t, the price difference is explained by
        the answers.
      </p>
    </ArticleLayout>
  );
}
