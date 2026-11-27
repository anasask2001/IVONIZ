import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #30 — /blog/ai-chatbot-for-business-website
   Primary: "ai chatbot for website" (volume not verified). Also "website
   chatbot for small business", "ai chatbot dubai". Commercial
   investigation; honest about failure modes. Distinguishes rule-based vs
   AI chatbots (does not cite ivoniz.com's own widget as an AI example —
   it is rule-based). Lead path → software development; links #29, #19.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "ai-chatbot-for-business-website";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "types", label: "Two kinds of chatbot" },
  { id: "good-at", label: "What chatbots handle well" },
  { id: "fail", label: "Where they fail" },
  { id: "needs", label: "What a useful chatbot needs" },
  { id: "worth-it", label: "Is it worth it for you?" },
];

const FAQS = [
  { q: "Is an AI chatbot worth it for a small business website?", a: "It can be if you get many repeat questions, enquiries outside working hours, or customers in different time zones. If you get a few enquiries a day and answer them quickly on WhatsApp, a chatbot adds little." },
  { q: "What's the difference between a rule-based chatbot and an AI chatbot?", a: "A rule-based chatbot follows fixed menus or keyword matches and gives set answers. An AI chatbot understands free-typed questions and writes answers, ideally based only on your own business information. AI handles more variety but needs checking and limits." },
  { q: "Can an AI chatbot give wrong answers to customers?", a: "Yes. If it isn't limited to your accurate business information, it can invent prices, policies or details. A good setup answers only from your content, says when it doesn't know, and hands over to a person." },
  { q: "Can a chatbot work on WhatsApp?", a: "Yes, through the WhatsApp Business Platform, which connects WhatsApp to software. Meta's rules and per-message charges for business-initiated template messages apply." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Custom software development", href: "/software-development", note: "Chatbots and automation connected to your systems." },
        { label: "AI and automation for small businesses", href: "/blog/ai-automation-small-business", note: "Where AI saves time, beyond chat." },
        { label: "AI chatbots and WhatsApp automation", href: "/software-development/ai-chatbot-whatsapp-automation", note: "Website and WhatsApp bots we build." },
      ]}
      cta={{
        label: "Chatbots",
        title: "Thinking about a chatbot for your website or WhatsApp?",
        text: "Tell us what customers ask most and when they ask it. We'll tell you whether a chatbot would genuinely help, what kind, and what it should hand over to your team.",
        button: "Discuss a chatbot",
        href: "/software-development#quote",
        message: "Hi Ivoniz, I'm considering a chatbot for my website / WhatsApp.",
      }}
    >
      <p>
        Chatbots are sold as a way to answer every customer instantly, day and night. Some do that well. Others frustrate
        customers with loops of unhelpful replies, or worse, confidently tell them things that aren&apos;t true. Whether
        one helps your business depends on what your customers ask, and how the chatbot is built.
      </p>

      <h2 id="types">Two kinds of chatbot</h2>
      <ArticleTable
        caption="Rule-based vs AI chatbots"
        cols={["", "Rule-based", "AI-based"]}
        rows={[
          ["How it works", "Menus, buttons or keyword matches with set answers", "Understands typed questions and writes answers"],
          ["Handles unexpected questions", "Poorly", "Much better"],
          ["Risk of wrong answers", "Low (it only says what you wrote)", "Real, unless limited to your own information"],
          ["Setup", "Simpler", "Needs good source content and testing"],
          ["Good for", "Narrow, predictable questions", "Varied questions about your products and services"],
        ]}
      />

      <h2 id="good-at">What chatbots handle well</h2>
      <ul>
        <li><strong>Repeat questions:</strong> opening hours, location, delivery areas, prices of standard items, documents needed.</li>
        <li><strong>After-hours enquiries:</strong> collecting name, number and need, so your team can follow up in the morning.</li>
        <li><strong>Different time zones:</strong> customers in the Gulf contacting a Kerala business, or the other way round.</li>
        <li><strong>Simple status checks</strong>, if connected to your order or booking system.</li>
        <li><strong>Routing:</strong> sending sales, support and job enquiries to the right person.</li>
      </ul>

      <h2 id="fail">Where they fail</h2>
      <Callout title="Common chatbot problems">
        <ul>
          <li><strong>Making things up.</strong> An AI chatbot without limits can invent prices, discounts or policies.</li>
          <li><strong>No way out.</strong> Customers stuck in a loop with no option to reach a human.</li>
          <li><strong>Pretending to be human.</strong> Customers feel misled when they realise. Say it&apos;s an assistant.</li>
          <li><strong>Outdated information.</strong> Prices and timings change; the chatbot&apos;s source content must too.</li>
          <li><strong>Sensitive topics.</strong> Medical, legal or financial advice should go to a qualified person.</li>
        </ul>
      </Callout>

      <h2 id="needs">What a useful chatbot needs</h2>
      <ol>
        <li><strong>Accurate source content:</strong> your services, prices, policies and FAQs, written and kept current by you.</li>
        <li><strong>Limits:</strong> it answers only from that content and says &ldquo;I don&apos;t know, let me connect you&rdquo; otherwise.</li>
        <li><strong>A clear handover</strong> to WhatsApp, a call or a form, with the conversation passed along.</li>
        <li><strong>Lead capture:</strong> name, contact and need saved to your CRM or inbox.</li>
        <li><strong>Review:</strong> someone reads conversations regularly to fix wrong or missing answers.</li>
        <li><strong>Privacy:</strong> clarity on where conversations are stored, and no collection of data you don&apos;t need.</li>
      </ol>
      <p>
        On WhatsApp, chatbots run through the Business Platform, with Meta&apos;s rules and charges; see{" "}
        <Link href="/blog/whatsapp-business-uae">WhatsApp for business enquiries</Link>.
      </p>

      <h2 id="worth-it">Is it worth it for your business?</h2>
      <ArticleTable
        caption="A quick way to decide"
        cols={["Your situation", "Chatbot?"]}
        rows={[
          ["A few enquiries a day, answered quickly on WhatsApp", "Probably not yet"],
          ["Many repeat questions taking staff time", "Yes, start rule-based or tightly limited AI"],
          ["Lots of after-hours or cross-time-zone enquiries", "Yes, mainly to capture leads"],
          ["Complex, high-value sales needing a conversation", "Only to collect details and hand over"],
        ]}
      />
      <p>
        A chatbot is one part of automation; the wider picture is in{" "}
        <Link href="/blog/ai-automation-small-business">AI and automation for small businesses</Link>.
      </p>
    </ArticleLayout>
  );
}
