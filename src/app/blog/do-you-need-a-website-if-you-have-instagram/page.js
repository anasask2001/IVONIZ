import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #7 — /blog/do-you-need-a-website-if-you-have-instagram
   Primary: "do i need a website for my business" (autocomplete: "do i
   really need a website for my business", "can you run a business without a
   website", "can you use instagram as a website", "website vs instagram").
   Volumes not verified. Kerala retail angle (Instagram + WhatsApp selling).
   Honest: says when Instagram alone IS enough. Absorbs the parked "WhatsApp
   catalogue vs website" topic. Lead path → static website / Instagram mktg.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "do-you-need-a-website-if-you-have-instagram";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "honest", label: "The honest answer" },
  { id: "compare", label: "What each one does well" },
  { id: "gaps", label: "What Instagram can't do for you" },
  { id: "enough", label: "When Instagram alone is enough" },
  { id: "together", label: "Using both together" },
];

const FAQS = [
  { q: "Do I really need a website if I have Instagram?", a: "Not always. If customers find you through referrals and Instagram, and you sell through DMs and WhatsApp, Instagram can work for a while. A website becomes important when people search Google for what you sell, when buyers need to trust you before paying, or when you want to own your customer channel." },
  { q: "Can I use Instagram as my business website?", a: "You can send people to it, but it isn't a website: it doesn't show up properly in Google searches for your services, you can't control the layout or how products are organised, and your account depends on Instagram's rules." },
  { q: "Is a WhatsApp catalogue enough instead of a website?", a: "For repeat customers who already have your number, a WhatsApp catalogue works well. New customers searching on Google won't find it, so it complements a website rather than replacing it." },
  { q: "What's the cheapest website option for a small Kerala business?", a: "A small static website with your services, photos, location and WhatsApp and call buttons. It's quick to build, cheap to run and loads fast. Our static website page has typical prices." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Static website development", href: "/website-development/static-website-development", note: "A simple, fast website for small businesses." },
        { label: "Instagram marketing services", href: "/digital-marketing/social-media-marketing/instagram-marketing-services", note: "If Instagram is your main channel, make it work harder." },
      ]}
      cta={{
        label: "Simple Start",
        title: "Thinking about a first website?",
        text: "Tell us how customers find you today. If a simple site would help, we'll suggest the smallest one that does the job; if Instagram is enough for now, we'll say so.",
        button: "Ask us",
        href: "/website-development/static-website-development#quote",
        message: "Hi Ivoniz, I sell through Instagram and WhatsApp. Do I need a website?",
      }}
    >
      <p>
        Plenty of Kerala businesses sell well without a website. A boutique posts reels, customers DM, orders close on
        WhatsApp, and payment comes by UPI. So when someone says &ldquo;you need a website&rdquo;, it&apos;s fair to ask:
        why, if this already works?
      </p>

      <h2 id="honest">The honest answer</h2>
      <p>
        You don&apos;t always need one. But Instagram and a website do different jobs, and as a business grows, the
        jobs only a website can do start to matter. The question isn&apos;t &ldquo;website or Instagram&rdquo;, it&apos;s
        whether the customers you&apos;re missing would have found you through a website.
      </p>

      <h2 id="compare">What each one does well</h2>
      <ArticleTable
        caption="Instagram, WhatsApp and a website compared"
        cols={["", "Instagram", "WhatsApp Business", "Website"]}
        rows={[
          ["Getting discovered by new people", "Through reels, hashtags, ads", "No (they need your number)", "Through Google searches"],
          ["Showing up when someone searches 'bridal boutique Kozhikode'", "Rarely", "No", "Yes, if built for it"],
          ["Building trust with a stranger", "Partly (follower count, posts)", "No", "Yes (about, address, reviews, policies)"],
          ["Closing a sale", "Via DM", "Very well", "Enquiry or online checkout"],
          ["Organising many products", "Hard to browse", "Catalogue (basic)", "Categories, filters, search"],
          ["Who controls it", "Instagram", "Meta", "You"],
        ]}
      />

      <h2 id="gaps">What Instagram can&apos;t do for you</h2>
      <h3>Be found by people who don&apos;t know you yet, on Google</h3>
      <p>
        When someone searches Google for &ldquo;steel doors in Malappuram&rdquo; or &ldquo;dental clinic near me&rdquo;,
        they get websites and Google Maps results. An Instagram account rarely appears. If your customers search before
        they buy, you&apos;re invisible to them.
      </p>
      <h3>Convince a cautious buyer</h3>
      <p>
        For bigger purchases (furniture, jewellery, a hospital, a contractor), buyers check whether a business is
        established. A website with your address, real photos, policies and reviews answers questions a profile can&apos;t.
        This matters even more for Gulf customers dealing with a Kerala business from a distance.
      </p>
      <h3>Belong to you</h3>
      <p>
        An Instagram account can be hacked, restricted or lose reach overnight when the algorithm changes. Your website and
        domain are yours, and so is the list of people who enquire through it.
      </p>

      <h2 id="enough">When Instagram alone is enough (for now)</h2>
      <ul>
        <li>Almost all your customers come from referrals and Instagram itself.</li>
        <li>People don&apos;t search Google for what you sell in your area.</li>
        <li>You&apos;re testing a product before investing more.</li>
      </ul>
      <p>
        Even then, a free Google Business Profile is worth setting up: it puts you on Google Maps with your hours and
        phone number. If it isn&apos;t appearing, see <Link href="/blog/google-business-profile-not-showing">why a Google Business Profile doesn&apos;t show</Link>.
      </p>

      <h2 id="together">Using both together</h2>
      <Callout title="How they work best together">
        <ul>
          <li><strong>Instagram</strong> finds new people and keeps followers engaged.</li>
          <li><strong>The website</strong> catches Google searches and convinces cautious buyers.</li>
          <li><strong>WhatsApp</strong> closes the sale, linked from both.</li>
        </ul>
      </Callout>
      <p>
        Put your website link in your Instagram bio, a WhatsApp button on every website page, and your Instagram feed or
        best posts on the website. The first website doesn&apos;t need to be big: a few pages covering what you sell,
        where you are and how to reach you is enough. Our guide on{" "}
        <Link href="/blog/what-a-business-website-should-include">what a business website should include</Link> lists
        the pages worth having.
      </p>
    </ArticleLayout>
  );
}
