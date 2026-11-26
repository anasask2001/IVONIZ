import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #12 — /blog/local-seo-kerala-guide
   Primary: "local seo kerala" (volume not verified). Absorbs "how Calicut
   businesses get more customers through Google" (merged). Covers the whole
   local picture (profile + website + listings + reviews); #11 owns the
   profile-troubleshooting intent, linked rather than repeated.
   Kerala-specific: Calicut/Kozhikode naming, Malayalam searches, Justdial /
   IndiaMART consistency, Gulf-connected customers. Lead path → local SEO.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "local-seo-kerala-guide";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "what", label: "What local SEO covers" },
  { id: "profile", label: "1. Your Google Business Profile" },
  { id: "website", label: "2. Your website" },
  { id: "listings", label: "3. Consistent listings" },
  { id: "reviews", label: "4. Reviews" },
  { id: "kerala", label: "Kerala-specific details" },
  { id: "plan", label: "A 30-day starting plan" },
];

const FAQS = [
  { q: "What is local SEO?", a: "Local SEO is everything that helps your business appear when people nearby search for what you sell: Google Maps results, the map pack on Google search, and local website results. It combines your Google Business Profile, your website, consistent listings elsewhere and reviews." },
  { q: "How can my Kozhikode business appear on Google Maps?", a: "Create and verify a Google Business Profile with your real address, choose the most specific category, complete every section, add real photos, and collect reviews steadily. Your website should show the same name, address and phone number." },
  { q: "Should I write 'Calicut' or 'Kozhikode' on my website?", a: "Use the official form in your address and mention the other naturally in your content, since customers search both. The important thing is to keep the address itself identical everywhere it appears." },
  { q: "Do I need a separate website page for every town I serve?", a: "Only for places where you genuinely serve customers and have something specific to say: projects there, a branch, local details. Copy-pasted pages that only swap the town name can hurt more than help." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Local SEO services", href: "/digital-marketing/seo-services/local-seo-services", note: "Profile, listings, reviews and local pages, handled for you." },
        { label: "Website development in Calicut", href: "/website-development/best-website-development-company-in-calicut", note: "Our team at HiLITE Business Park, Kozhikode." },
      ]}
      sources={[["Google Business Profile Help: How to improve your local ranking", "https://support.google.com/business/answer/7091"]]}
      cta={{
        label: "Local Visibility",
        title: "Want more local customers finding you on Google?",
        text: "If your business is struggling to show up in local searches in Kerala, we can look at your profile, website and listings together and tell you where the opportunities are.",
        button: "Ask about local SEO",
        href: "/digital-marketing/seo-services/local-seo-services#quote",
        message: "Hi Ivoniz, I'd like more local customers from Google for my business in Kerala.",
      }}
    >
      <p>
        When someone in Kozhikode searches &ldquo;eye hospital near me&rdquo; or someone in Malappuram searches
        &ldquo;furniture shop Manjeri&rdquo;, Google shows a map with three businesses, then a list of websites. Being in
        those results is what local SEO is about. For most Kerala businesses serving their town or district, it&apos;s
        the most valuable kind of SEO there is.
      </p>
      <p>This guide covers the four parts, the details specific to Kerala, and a plan for your first month.</p>

      <h2 id="what">What local SEO covers</h2>
      <ArticleTable
        caption="The four parts of local SEO"
        cols={["Part", "What it is", "What it affects"]}
        rows={[
          ["Google Business Profile", "Your listing on Google Maps and search", "Whether and where you appear in the map results"],
          ["Website", "Pages about your services and location", "Local website results, and how relevant Google thinks you are"],
          ["Listings", "Your details on Justdial, IndiaMART, Facebook, etc.", "Whether your business information is consistent and trustworthy"],
          ["Reviews", "What customers say on Google and elsewhere", "Your prominence, and whether people choose you"],
        ]}
      />
      <p>
        Google says local results are based mainly on <strong>relevance</strong>, <strong>distance</strong> and{" "}
        <strong>prominence</strong>. You can&apos;t move your shop closer to every customer, but you can improve the other two.
      </p>

      <h2 id="profile">1. Your Google Business Profile</h2>
      <ul>
        <li><strong>Verify it</strong> with your real business address.</li>
        <li><strong>Choose the most specific primary category</strong> (&ldquo;Orthopaedic clinic&rdquo; rather than &ldquo;Clinic&rdquo;), and add secondary ones that genuinely apply.</li>
        <li><strong>Complete everything:</strong> hours (including holidays), services or products, description, phone, website, attributes.</li>
        <li><strong>Add real photos</strong> of the shop front (so people recognise it), inside, your team and your work. Keep adding them.</li>
        <li><strong>Post updates</strong> occasionally: offers, new products, events.</li>
        <li><strong>Keep the name exactly as on your signboard.</strong> No added keywords.</li>
      </ul>
      <p>
        If the profile isn&apos;t showing at all, start with{" "}
        <Link href="/blog/google-business-profile-not-showing">Google Business Profile not showing: causes and fixes</Link>.
      </p>

      <h2 id="website">2. Your website</h2>
      <ul>
        <li><strong>Name, address and phone</strong> on every page (usually the footer), matching the profile exactly.</li>
        <li><strong>A page for each main service</strong>, mentioning where you provide it.</li>
        <li><strong>A contact page with a map</strong>, landmarks and directions people actually use (&ldquo;opposite the bus stand&rdquo;).</li>
        <li><strong>Local proof:</strong> projects, clients or photos from the places you serve.</li>
        <li><strong>Fast on mobile</strong>, since most local searches happen on phones, often on the way.</li>
      </ul>
      <p>
        If you serve several towns, a page for each is useful only where you have something real to say about it. A page
        that just swaps &ldquo;Kozhikode&rdquo; for &ldquo;Kannur&rdquo; adds nothing.
      </p>

      <h2 id="listings">3. Consistent listings</h2>
      <p>
        Your business probably already appears on Justdial, IndiaMART, Facebook and other sites, sometimes created by
        someone else. Search for your business name and phone number and check each listing:
      </p>
      <ul>
        <li>Is the name, address and phone number the same as on Google and your website?</li>
        <li>Is the old address or old number still there?</li>
        <li>Are there duplicates?</li>
      </ul>
      <p>Fix the important ones. You don&apos;t need hundreds of listings; you need the ones that exist to be right.</p>

      <h2 id="reviews">4. Reviews</h2>
      <ul>
        <li>Ask happy customers at the right moment: after delivery, after a successful treatment, when they thank you.</li>
        <li>Make it easy: send the direct review link on WhatsApp.</li>
        <li>Reply to every review, including critical ones, calmly and specifically.</li>
        <li>Never buy reviews or have staff and relatives post them; it risks your profile being suspended.</li>
      </ul>

      <h2 id="kerala">Kerala-specific details</h2>
      <Callout title="Things we see often in Kerala">
        <ul>
          <li><strong>Calicut vs Kozhikode, Cochin vs Kochi.</strong> Customers search both. Keep your address in one form everywhere, and mention the other naturally on your website.</li>
          <li><strong>Building and landmark names.</strong> Pick one spelling of your building and stick to it.</li>
          <li><strong>Malayalam searches.</strong> Some customers search in Malayalam. Malayalam headings or a short Malayalam section on key pages can help, if written properly.</li>
          <li><strong>Gulf-connected customers.</strong> Many families search for Kerala services from the Gulf. Show your phone number with +91 and make WhatsApp work internationally.</li>
          <li><strong>WhatsApp-first enquiries.</strong> Put WhatsApp on the profile and every page.</li>
        </ul>
      </Callout>

      <h2 id="plan">A 30-day starting plan</h2>
      <ol>
        <li><strong>Week 1:</strong> verify and complete your Google Business Profile; fix the category and photos.</li>
        <li><strong>Week 2:</strong> make your website&apos;s name, address and phone match exactly; add a map and clear contact page.</li>
        <li><strong>Week 3:</strong> find and fix your Justdial, IndiaMART and Facebook listings.</li>
        <li><strong>Week 4:</strong> start asking for reviews and reply to existing ones. Keep it going every week after.</li>
      </ol>
      <p>
        Local results can improve within weeks once the basics are fixed, though competitive categories take longer; see{" "}
        <Link href="/blog/how-long-does-seo-take">how long SEO takes</Link>. If you&apos;re deciding whether to spend on ads
        instead, read <Link href="/blog/seo-vs-google-ads">SEO or Google Ads first</Link>.
      </p>
      <p>
        Based in Malappuram? See our <Link href="/website-development/website-development-company-in-malappuram">Malappuram page</Link>.
      </p>
    </ArticleLayout>
  );
}
