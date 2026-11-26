import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #11 — /blog/google-business-profile-not-showing
   Primary: "google business profile not showing" + large autocomplete
   cluster (not showing up in search / on maps / not visible to customers /
   after verification / phone number not showing). Search volume not verified.
   Facts from Google Business Profile Help (ranking = relevance, distance,
   prominence; name guidelines; service-area businesses). Kerala + UAE.
   Lead path → local SEO service page.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "google-business-profile-not-showing";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "which", label: "Not showing, or not ranking?" },
  { id: "status", label: "Check the profile's status" },
  { id: "causes", label: "Causes when it doesn't show at all" },
  { id: "ranking", label: "Shows by name, not for your service" },
  { id: "dont", label: "Things that make it worse" },
  { id: "checklist", label: "Checklist" },
];

const FAQS = [
  { q: "Why is my Google Business Profile not showing up?", a: "Most often the profile isn't verified yet, was suspended, has edits under review, or is a duplicate. If it shows when you search your exact business name but not for your service, it's showing but not ranking; that depends on relevance, distance and prominence." },
  { q: "Why is my Google Business Profile not showing after verification?", a: "New and newly verified profiles can take some time to appear everywhere. Check the profile's status in your Google account; if it says it's verified and live, search for your exact business name in Google Maps. If it appears there, it's a ranking issue, not a visibility one." },
  { q: "Why does my business show to me but not to customers?", a: "When you're signed in as the owner, Google shows you your profile in a manager view. Customers searching for a category ('dentist', 'web design company') see the businesses Google ranks highest for that search and their location, which may not include yours yet." },
  { q: "Should I add keywords like 'best' or my city to my business name on Google?", a: "No. Google's guidelines say the name should match your real-world business name. Adding keywords can lead to the profile being suspended." },
  { q: "Can I have a Google Business Profile without a shop address?", a: "Yes, if you serve customers at their location. You can set it up as a service-area business and hide your address, listing the areas you serve instead. You still need a real address for verification." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Local SEO services", href: "/digital-marketing/seo-services/local-seo-services", note: "Google Business Profile, reviews and local rankings." },
      ]}
      sources={[
        ["Google Business Profile Help: How to improve your local ranking", "https://support.google.com/business/answer/7091"],
        ["Google Business Profile Help: Guidelines for representing your business", "https://support.google.com/business/answer/3038177"],
      ]}
      cta={{
        label: "Local Visibility",
        title: "Need help getting found on Google Maps?",
        text: "If customers can't find your business on Google, we can check your profile and website together and tell you what's holding them back.",
        button: "Ask about local SEO",
        href: "/digital-marketing/seo-services/local-seo-services#quote",
        message: "Hi Ivoniz, my Google Business Profile isn't showing. Can you help?",
      }}
    >
      <p>
        You set up your Google Business Profile, maybe even waited for the verification code, and your business still
        doesn&apos;t show on Google Maps when customers search. Or it shows for you, but a customer standing outside
        your shop says they can&apos;t find it. Here&apos;s how to work out what&apos;s going on.
      </p>

      <h2 id="which">First: not showing, or not ranking?</h2>
      <p>Open Google Maps on your phone, signed out or in a private window, and search for your <strong>exact business name</strong>.</p>
      <ArticleTable
        caption="What your result means"
        cols={["Result", "What it means", "Where to look"]}
        rows={[
          ["Your business doesn't appear at all", "The profile isn't live", "Profile status and causes below"],
          ["It appears for your name, not for 'dentist near me' or 'textile shop Kozhikode'", "It's live but not ranking for the category", "Ranking section below"],
        ]}
      />

      <h2 id="status">Check the profile&apos;s status</h2>
      <p>
        Search for your business name on Google while signed in to the account that manages the profile; you&apos;ll see
        the management panel. Look for messages about verification, suspension or edits under review. The status tells you
        most of what you need to know.
      </p>

      <h2 id="causes">Causes when it doesn&apos;t show at all</h2>
      <h3>Not verified yet</h3>
      <p>
        An unverified profile doesn&apos;t appear publicly. Complete verification by whatever method Google offers your
        business (it varies: phone, email, video or postcard).
      </p>
      <h3>Suspended</h3>
      <p>
        Profiles get suspended for breaking Google&apos;s guidelines: keywords stuffed into the business name, an address
        that isn&apos;t a real place of business (a virtual office, for example), or several profiles for one business.
        Fix the cause first, then request reinstatement from the profile.
      </p>
      <h3>Edits under review</h3>
      <p>
        Changing your name, category or address can trigger a review, during which changes may not show. Avoid making
        many big changes at once.
      </p>
      <h3>Duplicate profiles</h3>
      <p>
        If someone created a listing for your business before you (a previous owner, an employee, an old agency), two
        profiles can confuse Google. Search Maps for variations of your name and phone number, then ask Google to merge or
        remove the duplicate.
      </p>
      <h3>It&apos;s new</h3>
      <p>Newly verified profiles can take a little time to appear everywhere. Give it a few days before changing things.</p>

      <h2 id="ranking">It shows by name, but not for your service</h2>
      <p>
        This is the more common situation, and it isn&apos;t a fault: your profile is live, but Google is showing other
        businesses for that search. Google says local results are based mainly on three things:
      </p>
      <ul>
        <li><strong>Relevance:</strong> how well your profile matches the search. Your primary category, services, description and website all feed this.</li>
        <li><strong>Distance:</strong> how far you are from the person searching, or the location in their search. You can&apos;t change this, which is why a shop in Kozhikode rarely shows for someone searching in Kochi.</li>
        <li><strong>Prominence:</strong> how well known you are: reviews and ratings, mentions around the web, and your website&apos;s own standing.</li>
      </ul>
      <p>What you can improve:</p>
      <ul>
        <li><strong>Primary category.</strong> Pick the most specific one that matches your main business (&ldquo;Dental clinic&rdquo;, not &ldquo;Health&rdquo;).</li>
        <li><strong>Complete profile.</strong> Hours, services or products, photos of your premises and work, a description written for customers.</li>
        <li><strong>Reviews.</strong> Ask real customers, steadily, and reply to every review, including critical ones.</li>
        <li><strong>A matching website.</strong> Your name, address and phone number identical on the site and the profile, and a page for each main service.</li>
      </ul>
      <p>
        For Kerala businesses in particular, the same name and address spelt differently across Google, Justdial and your
        website (&ldquo;Calicut&rdquo; vs &ldquo;Kozhikode&rdquo;, different building names) is common. Pick one version
        and use it everywhere.
      </p>

      <h2 id="dont">Things that make it worse</h2>
      <Callout title="Avoid these">
        <ul>
          <li>Adding keywords or locations to your business name (&ldquo;Best Dental Clinic Kozhikode&rdquo;)</li>
          <li>Creating extra profiles for the same business to cover more areas</li>
          <li>Using a virtual office or someone else&apos;s address</li>
          <li>Buying reviews or asking staff and family to post them</li>
        </ul>
        <p>These can get the profile suspended, which is much harder to fix than a low ranking.</p>
      </Callout>

      <h2 id="checklist">Checklist</h2>
      <ol>
        <li>Search your exact name in Google Maps, signed out.</li>
        <li>Check the profile status for verification, suspension or pending edits.</li>
        <li>Search Maps for duplicates of your business.</li>
        <li>Set the most specific primary category.</li>
        <li>Complete hours, services, description and photos.</li>
        <li>Make your name, address and phone identical on the profile and website.</li>
        <li>Start asking customers for reviews, and reply to them.</li>
      </ol>
      <p>
        If your website itself isn&apos;t appearing in search either, see{" "}
        <Link href="/blog/why-website-not-showing-on-google">why your website isn&apos;t showing on Google</Link>.
      </p>
    </ArticleLayout>
  );
}
