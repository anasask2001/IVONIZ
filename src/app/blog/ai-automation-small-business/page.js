import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #29 — /blog/ai-automation-small-business
   Primary: "ai automation for small business" (autocomplete; also "ai
   automation uae", "business automation dubai", "how can ai automate my
   business"). Volumes not verified. Practical, anti-hype: automation first,
   AI where it actually helps, where it fails. No time-saved statistics.
   No AI integration service page exists (suggested page to create — not
   verified) → links CRM / software pages. Kerala + UAE.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "ai-automation-small-business";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "difference", label: "Automation vs AI" },
  { id: "where", label: "Where it saves time" },
  { id: "examples", label: "Examples by business type" },
  { id: "fails", label: "Where AI falls short" },
  { id: "start", label: "How to start" },
  { id: "tools", label: "Tools and cost" },
];

const FAQS = [
  { q: "How can AI help a small business?", a: "Mostly by taking over repetitive work: answering common questions, drafting replies and product descriptions, summarising enquiries, sorting leads, and extracting details from documents. It works best alongside simple automation that moves data between your tools." },
  { q: "What's the difference between automation and AI?", a: "Automation follows fixed rules you set: when a form is submitted, add the lead to a sheet and notify sales. AI handles tasks that need judgement with language or images, like drafting a reply or reading an invoice. Many useful setups combine both." },
  { q: "Is AI automation expensive for a small business?", a: "It doesn't have to be. Many automations run on tools with free or low-cost plans, and AI usage is often charged by volume. Custom setups connected to your own systems cost more to build. Start with one process and measure the time it saves." },
  { q: "Is it safe to use AI with customer data?", a: "Be careful. Check where each tool stores and processes data, avoid putting sensitive personal or financial details into general AI tools, and check the data protection rules that apply in India, the UAE or wherever your customers are." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "CRM software development", href: "/software-development/crm-software-development", note: "Leads, follow-ups and WhatsApp in one place." },
        { label: "Custom software development", href: "/software-development", note: "Business tools built around how you work." },
      ]}
      cta={{
        label: "Automation",
        title: "Spending too much time on repetitive work?",
        text: "Tell us which task eats your team's time. We'll tell you honestly whether automation or AI would help, what it would involve, and what it wouldn't fix.",
        button: "Discuss a process",
        href: "/software-development#quote",
        message: "Hi Ivoniz, I'd like to automate a process in my business. It's: ",
      }}
    >
      <p>
        Most small business owners in Kerala and the UAE have heard that AI will change everything. Few have been told what
        it can actually do for a business with ten staff, a WhatsApp number that never stops and a spreadsheet that holds
        everything together. This article is about that: practical uses, honest limits, and how to start small.
      </p>

      <h2 id="difference">Automation and AI are different things</h2>
      <ArticleTable
        caption="Automation vs AI"
        cols={["", "Automation", "AI"]}
        rows={[
          ["What it does", "Follows fixed rules", "Handles language, images and judgement calls"],
          ["Example", "New website form → add to sheet → WhatsApp alert to sales", "Read the enquiry and draft a reply, or tag it 'urgent'"],
          ["Reliability", "Does exactly the same thing every time", "Usually right, sometimes wrong"],
          ["Needs checking?", "Once, when you set it up", "Regularly, especially for anything customers see"],
        ]}
      />
      <p>Most of the time saved in small businesses comes from plain automation. AI adds value on top, for tasks involving text.</p>

      <h2 id="where">Where it saves the most time</h2>
      <ul>
        <li><strong>Lead handling:</strong> enquiries from the website, WhatsApp and ads collected in one place, assigned and followed up automatically.</li>
        <li><strong>Repeat questions:</strong> prices, timings, locations and order status answered instantly, with a human for everything else.</li>
        <li><strong>Reminders:</strong> appointments, payments due, renewals, sent automatically.</li>
        <li><strong>Data entry:</strong> details copied from forms, emails or invoices into your accounting or CRM.</li>
        <li><strong>Drafting:</strong> first drafts of product descriptions, quotes, social posts and email replies, edited by a person.</li>
        <li><strong>Reporting:</strong> weekly sales or lead summaries generated instead of compiled by hand.</li>
      </ul>

      <h2 id="examples">Examples by business type</h2>
      <ArticleTable
        caption="Practical starting points"
        cols={["Business", "A good first automation"]}
        rows={[
          ["Clinic", "Appointment reminders on WhatsApp and SMS; enquiry form to front-desk sheet"],
          ["Retail or online store", "Order confirmation and delivery updates; low-stock alerts"],
          ["Trading company (UAE)", "Quote requests logged in a CRM with automatic follow-up after a set number of days"],
          ["Real estate or services", "Leads from ads routed to the right salesperson within minutes"],
          ["Any business", "Weekly summary of enquiries by source, sent to the owner"],
        ]}
      />

      <h2 id="fails">Where AI falls short</h2>
      <Callout title="Be realistic">
        <ul>
          <li><strong>It can be confidently wrong.</strong> Anything customers see, especially prices, medical, legal or financial details, needs checking.</li>
          <li><strong>It only knows what you give it.</strong> A chatbot without accurate, up-to-date business information will make things up or give vague answers.</li>
          <li><strong>It doesn&apos;t fix a broken process.</strong> Automating a messy process just makes the mess faster.</li>
          <li><strong>Data needs care.</strong> Know where customer data goes and check the rules that apply to you.</li>
        </ul>
      </Callout>

      <h2 id="start">How to start</h2>
      <ol>
        <li><strong>List the repetitive tasks</strong> your team does every week, and roughly how long each takes.</li>
        <li><strong>Pick one</strong> that&apos;s frequent, rule-based and annoying.</li>
        <li><strong>Automate it simply</strong>, test it for a few weeks, and measure the time saved.</li>
        <li><strong>Add AI only where text or judgement is the bottleneck</strong>, with a person checking the output at first.</li>
        <li><strong>Expand</strong> once the first one works reliably.</li>
      </ol>

      <h2 id="tools">Tools and cost</h2>
      <p>
        No-code tools such as Zapier, Make or n8n (which can be self-hosted) connect common apps (forms, Google Sheets,
        email, CRMs) without custom development, often on free or low-cost plans for small volumes. When processes are
        specific to your business, or need to connect to your own software, a custom setup or a{" "}
        <Link href="/software-development/crm-software-development">CRM built around your workflow</Link> may make more sense.
      </p>
      <p>
        For customer-facing AI specifically, see <Link href="/blog/ai-chatbot-for-business-website">AI chatbots on business websites</Link>,
        and for WhatsApp automation, <Link href="/blog/whatsapp-business-uae">WhatsApp for business enquiries</Link>.
      </p>
    </ArticleLayout>
  );
}
