import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #16 — /blog/how-to-track-website-leads
   Primary: "track website leads ga4" (volume not verified). Also "whatsapp
   click tracking", "call tracking website", "ga4 key events". Practical,
   all markets. Real example: ivoniz.com's own GA4 events (phone_click,
   whatsapp_click, generate_lead) — true, see AnalyticsRouteTracker.jsx.
   Honest limits stated (a WhatsApp click isn't a sent message). Sources:
   GA4 help on key events. Lead path → digital marketing.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "how-to-track-website-leads";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "why", label: "Why bother" },
  { id: "what", label: "What to track" },
  { id: "setup", label: "Setting it up in GA4" },
  { id: "sources", label: "Knowing where leads came from" },
  { id: "limits", label: "What tracking can't tell you" },
  { id: "report", label: "A simple monthly report" },
];

const FAQS = [
  { q: "How do I track leads from my website?", a: "Send an event to Google Analytics 4 each time someone submits a form, taps a WhatsApp link or taps your phone number, then mark those events as key events. GA4 then shows how many leads each page, campaign and traffic source produced." },
  { q: "Can Google Analytics track WhatsApp clicks?", a: "Yes, it can record a click on a WhatsApp link as an event. It can't see whether the person then actually sent a message, so treat WhatsApp clicks as 'intent to contact' and compare them with the chats you receive." },
  { q: "What are key events in GA4?", a: "Key events are the actions you mark as most important in GA4, such as a form submission or a WhatsApp click. GA4 uses the name 'key events' for what were previously called conversions in Analytics." },
  { q: "How do I know which ads or posts brought a lead?", a: "Add UTM tags to the links you share in ads, Instagram bios and WhatsApp broadcasts. GA4 then shows those visits, and any leads from them, under the campaign names you chose." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Digital marketing", href: "/digital-marketing", note: "Ads, SEO and reporting based on enquiries, not just clicks." },
        { label: "Why your website isn't generating leads", href: "/blog/why-website-not-generating-leads", note: "Once you can see the numbers, find what to fix." },
      ]}
      sources={[["Google Analytics Help: Mark events as key events", "https://support.google.com/analytics/answer/13128484"]]}
      cta={{
        label: "Measure What Matters",
        title: "Want to know which marketing actually brings enquiries?",
        text: "We can set up form, WhatsApp and call tracking on your website and show you, each month, which pages and campaigns produce enquiries.",
        button: "Set up tracking",
        href: "/digital-marketing#quote",
        message: "Hi Ivoniz, I'd like to track which marketing brings enquiries to my website.",
      }}
    >
      <p>
        Ask most business owners how many enquiries their website brought last month and they&apos;ll guess. Ask which
        page, ad or Instagram post they came from and the guess gets vaguer. Without that, every marketing decision
        (spend more on ads, redo the homepage, hire an SEO agency) is made blind.
      </p>
      <p>Tracking leads is mostly a one-time setup. Here&apos;s what to track and how.</p>

      <h2 id="why">Why it&apos;s worth the effort</h2>
      <ul>
        <li>You find out which pages produce enquiries, and which get visits but never convert.</li>
        <li>You can judge ads and SEO by enquiries, not by clicks or &ldquo;rankings&rdquo;.</li>
        <li>You notice immediately when something breaks, like a form that stopped sending.</li>
      </ul>

      <h2 id="what">What to track</h2>
      <ArticleTable
        caption="The enquiry actions most business websites need to track"
        cols={["Action", "What it tells you", "How it's recorded"]}
        rows={[
          ["Form submission", "A real enquiry with details", "An event when the form is successfully sent"],
          ["WhatsApp click", "Someone opened a chat with you", "An event when a wa.me link is tapped"],
          ["Phone click", "Someone tapped to call from their phone", "An event when a tel: link is tapped"],
          ["Email click", "Someone opened an email to you", "An event when a mailto: link is tapped"],
          ["Quote or booking started", "Interest, even if they don't finish", "An event on the first step"],
        ]}
      />
      <Callout title="Our own setup, as an example">
        <p>
          On ivoniz.com, Google Analytics 4 records a <code>phone_click</code> event for phone taps, a{" "}
          <code>whatsapp_click</code> event for WhatsApp taps (with which part of the page it came from, like the menu or
          the footer), and a <code>generate_lead</code> event when a form or quote is sent. That&apos;s enough to see, each
          month, which pages bring enquiries and by which route.
        </p>
      </Callout>

      <h2 id="setup">Setting it up in GA4</h2>
      <ol>
        <li><strong>Install GA4</strong> on every page, if it isn&apos;t already.</li>
        <li>
          <strong>Send an event for each action.</strong> Your developer can add these in the site&apos;s code, or you can
          use Google Tag Manager to fire events on clicks of links starting with <code>tel:</code>,{" "}
          <code>https://wa.me/</code> and <code>mailto:</code>, and on successful form submissions.
        </li>
        <li><strong>Give events clear names</strong>, like <code>whatsapp_click</code>, so reports are readable later.</li>
        <li><strong>Mark them as key events</strong> in GA4 (Admin → Events), so GA4 counts them as your most important actions.</li>
        <li><strong>Test it:</strong> tap each button yourself and check the events appear in GA4&apos;s real-time report.</li>
      </ol>
      <p>
        Track only the <em>successful</em> form send, not the click on the submit button; otherwise failed or empty
        submissions get counted as leads.
      </p>

      <h2 id="sources">Knowing where leads came from</h2>
      <p>
        GA4 automatically separates visits from Google search, Google Maps, social media, other websites and direct
        visits. For links you share yourself, add <strong>UTM tags</strong> so they show up by name:
      </p>
      <Callout>
        <p><code>https://yourbusiness.com/?utm_source=instagram&amp;utm_medium=bio&amp;utm_campaign=profile</code></p>
      </Callout>
      <p>Use them on your Instagram bio, WhatsApp broadcasts, Google Business Profile website link and ads.</p>

      <h2 id="limits">What tracking can&apos;t tell you</h2>
      <ul>
        <li><strong>A WhatsApp click isn&apos;t a sent message.</strong> People open the chat and sometimes don&apos;t send. Compare clicks with the chats you actually receive.</li>
        <li><strong>A phone tap isn&apos;t a completed call</strong>, and calls from people who typed your number manually won&apos;t show at all.</li>
        <li><strong>Lead quality isn&apos;t in the numbers.</strong> Ten enquiries from the wrong customers are worth less than two good ones.</li>
      </ul>
      <p>
        The simplest complement: ask every new customer &ldquo;how did you find us?&rdquo; and note the answer.
      </p>

      <h2 id="report">A simple monthly report</h2>
      <ol>
        <li>Total enquiries by type: forms, WhatsApp, calls.</li>
        <li>Enquiries by source: Google search, Maps, Instagram, ads, direct.</li>
        <li>Top pages by enquiries, and top pages with visits but no enquiries.</li>
        <li>Anything that dropped to zero (often a sign something broke).</li>
      </ol>
      <p>
        With this in place, you can judge marketing by results; see{" "}
        <Link href="/blog/seo-vs-google-ads">SEO or Google Ads first</Link> and{" "}
        <Link href="/blog/how-to-make-a-website-that-gets-enquiries">how to make a website that gets enquiries</Link>.
      </p>
    </ArticleLayout>
  );
}
