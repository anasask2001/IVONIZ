import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #19 — /blog/whatsapp-business-uae
   Primary: "whatsapp business uae" (volume not verified). Also "whatsapp
   business api uae", "whatsapp button website", "whatsapp catalogue".
   UAE + Kerala. Facts: WhatsApp Business app vs Business Platform (API);
   per-message pricing for template messages since 1 July 2025 (Meta docs,
   rates vary by country) — no rates quoted. Opt-in + approved templates for
   business-initiated messages. Lead path → L1 / AI chatbot article #30.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "whatsapp-business-uae";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "options", label: "The three ways to use WhatsApp" },
  { id: "website", label: "1. A WhatsApp button on your website" },
  { id: "app", label: "2. The WhatsApp Business app" },
  { id: "api", label: "3. The WhatsApp Business Platform (API)" },
  { id: "which", label: "Which one you need" },
  { id: "mistakes", label: "Mistakes that lose enquiries" },
];

const FAQS = [
  { q: "What's the difference between the WhatsApp Business app and the WhatsApp API?", a: "The Business app is free and runs on one phone (with some linked devices); it suits small teams answering chats by hand. The WhatsApp Business Platform (API) connects WhatsApp to software, so several staff, a CRM or a chatbot can handle messages, and you can send approved notifications at scale." },
  { q: "Is the WhatsApp Business API free?", a: "No. Meta charges for template messages businesses send (marketing, utility and authentication), with rates that vary by country and message type. Since July 2025 pricing has been per message. Providers that connect you to the API may charge their own fees too." },
  { q: "Can I send WhatsApp marketing messages to customers in the UAE?", a: "Through the Business Platform, only to people who have agreed to receive messages from you, and only with message templates Meta has approved. Messaging people who haven't opted in risks your number being restricted." },
  { q: "How do I add a WhatsApp button to my website?", a: "Link to https://wa.me/ followed by your full international number without '+' or spaces, optionally with a pre-filled message. Put it in a fixed bar on mobile and next to key buttons on each page." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Websites for Dubai businesses", href: "/website-development/website-development-company-dubai", note: "WhatsApp-first websites with every enquiry tracked." },
        { label: "How to track website leads", href: "/blog/how-to-track-website-leads", note: "Count WhatsApp clicks alongside forms and calls." },
      ]}
      sources={[
        ["WhatsApp Business app", "https://business.whatsapp.com/products/business-app"],
        ["WhatsApp Business Platform", "https://business.whatsapp.com/products/business-platform"],
        ["Meta: Pricing on the WhatsApp Business Platform", "https://developers.facebook.com/docs/whatsapp/pricing"],
      ]}
      cta={{
        label: "WhatsApp Enquiries",
        title: "Want WhatsApp enquiries handled better?",
        text: "Tell us how many WhatsApp enquiries you get and who answers them. We'll suggest whether a better website setup, the Business app or the API fits, and what it would involve.",
        button: "Talk to us",
        href: "/website-development/website-development-company-dubai#quote",
        message: "Hi Ivoniz, I'd like to handle WhatsApp enquiries better for my business.",
      }}
    >
      <p>
        For many businesses in the UAE and Kerala, WhatsApp is where enquiries actually happen. Customers would rather
        message than fill in a form. But WhatsApp can be set up in very different ways, and choosing the wrong one means
        either missed messages or paying for features you don&apos;t need.
      </p>

      <h2 id="options">The three ways businesses use WhatsApp</h2>
      <ArticleTable
        caption="WhatsApp options for businesses"
        cols={["", "Website button", "Business app", "Business Platform (API)"]}
        rows={[
          ["What it is", "A link that opens a chat with you", "Free app for one business number", "WhatsApp connected to software"],
          ["Cost", "Free", "Free", "Meta charges per template message, plus provider fees"],
          ["Who answers", "Whoever has the phone", "You, on the phone or linked devices", "Several staff, a CRM, or a chatbot"],
          ["Good for", "Getting the first message", "Small teams answering by hand", "High volume, notifications, automation"],
        ]}
      />

      <h2 id="website">1. A WhatsApp button on your website</h2>
      <p>
        The simplest and most important step: let website visitors start a chat in one tap. A link to{" "}
        <code>https://wa.me/</code> plus your full international number (UAE numbers start 971, Indian numbers 91, with no
        plus sign or spaces) opens WhatsApp on the visitor&apos;s phone.
      </p>
      <ul>
        <li><strong>Pre-fill the message</strong> so you know what they want and which page they came from.</li>
        <li><strong>Keep it visible on mobile</strong>, in a fixed bar at the bottom of the screen.</li>
        <li><strong>Track clicks</strong> in Google Analytics; see <Link href="/blog/how-to-track-website-leads">how to track website leads</Link>.</li>
      </ul>

      <h2 id="app">2. The WhatsApp Business app</h2>
      <p>The free Business app adds what a personal account lacks:</p>
      <ul>
        <li>A business profile with address, hours, website and description.</li>
        <li>A <strong>catalogue</strong> of products or services customers can browse in the chat.</li>
        <li><strong>Quick replies</strong> for common answers, a <strong>greeting message</strong> and an <strong>away message</strong> outside hours.</li>
        <li><strong>Labels</strong> to sort chats (new enquiry, quoted, paid).</li>
      </ul>
      <p>
        It works well while one or two people handle chats. It gets hard when several staff need to share one number,
        or when chats pile up and nobody knows who replied to whom.
      </p>

      <h2 id="api">3. The WhatsApp Business Platform (API)</h2>
      <p>The Platform connects your WhatsApp number to software. It makes sense when you need:</p>
      <ul>
        <li><strong>A shared inbox</strong> so several staff answer from one number.</li>
        <li><strong>CRM integration</strong>, so every chat is logged against the customer.</li>
        <li><strong>Automatic notifications</strong>: order confirmations, delivery updates, appointment reminders.</li>
        <li><strong>A chatbot</strong> to answer common questions or collect details out of hours; see <Link href="/blog/ai-chatbot-for-business-website">AI chatbots on business websites</Link>.</li>
      </ul>
      <Callout title="Costs and rules to know">
        <ul>
          <li>Meta charges for template messages businesses send (marketing, utility, authentication). Since July 2025 this has been per message, with rates by country; check Meta&apos;s current pricing.</li>
          <li>Business-initiated messages need the customer&apos;s opt-in and a template Meta has approved.</li>
          <li>Most businesses connect through a provider, which may add its own monthly fees.</li>
        </ul>
      </Callout>

      <h2 id="which">Which one you need</h2>
      <ul>
        <li><strong>Every business:</strong> a website WhatsApp button, done well.</li>
        <li><strong>One or two people answering:</strong> the free Business app, with a catalogue and quick replies.</li>
        <li><strong>A team sharing enquiries, or many orders to notify:</strong> the Business Platform, ideally connected to your CRM or store.</li>
      </ul>

      <h2 id="mistakes">Mistakes that lose WhatsApp enquiries</h2>
      <ul>
        <li>A WhatsApp link with a wrong or local-format number that doesn&apos;t open.</li>
        <li>The business number on a phone that&apos;s switched off or left in the office.</li>
        <li>No away message, so after-hours enquiries get silence until morning.</li>
        <li>Broadcasting offers to people who never opted in, which risks the number being restricted.</li>
        <li>No record of chats, so follow-ups are forgotten.</li>
      </ul>
      <p>
        A WhatsApp-first approach also builds trust when the rest of the site does; see{" "}
        <Link href="/blog/trustworthy-website-uae">what makes a website trustworthy to UAE customers</Link>.
      </p>
    </ArticleLayout>
  );
}
