import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";

/* ════════════════════════════════════════════════════════════════
   /software-development/ai-chatbot-whatsapp-automation
   Targets: ai chatbot development dubai / uae, whatsapp automation uae,
   whatsapp chatbot for business (volumes not verified in this batch).
   Supports blog posts ai-chatbot-for-business-website,
   ai-automation-small-business, whatsapp-business-uae.
   No price in costs.js → quote only. No chatbot case study claimed.
   WhatsApp Business Platform: Meta charges for conversations/messages
   separately — stated generally, no rates quoted. Not in menu/footer.
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/software-development/ai-chatbot-whatsapp-automation";
const S = "/software-development";

const page = {
  url: PAGE_URL,
  title: "AI Chatbot & WhatsApp Automation for UAE | Ivoniz LLP",
  ogTitle: "AI Chatbots and WhatsApp Automation for UAE Businesses",
  description:
    "AI chatbots and WhatsApp automation for UAE and Kerala businesses: answer common questions, qualify leads, book appointments and hand over to your team when needed.",
  schemaName: "AI Chatbot and WhatsApp Automation",
  serviceType: "Chatbot development",
  areaServed: [{ "@type": "Country", name: "United Arab Emirates" }, { "@type": "State", name: "Kerala" }, { "@type": "Country", name: "India" }],
  crumbs: [
    { label: "Software Development", href: S },
    { label: "AI Chatbots & WhatsApp", href: `${S}/ai-chatbot-whatsapp-automation` },
  ],
  label: "AI Chatbots · WhatsApp Automation · UAE and Kerala",
  h1: "AI Chatbots and",
  h1Outline: "WhatsApp Automation",
  intro: (
    <>
      Your team answers the same questions every day on WhatsApp: prices, timings, location, &quot;is this available?&quot;.
      A chatbot can answer those instantly, at any hour, collect the details your team needs, and pass the conversation
      to a person when it should. We build chatbots for websites and WhatsApp for businesses in the UAE and Kerala.
    </>
  ),
  cta: "Discuss a Chatbot",
  waMessage: "Hi Ivoniz, I'd like a chatbot / WhatsApp automation for my business.",
  cards: {
    label: "What We Build",
    heading: "Chatbots and automation for real business conversations",
    items: [
      { t: "WhatsApp chatbots", d: "Automated replies on the WhatsApp Business Platform: menus, FAQs, order status and lead questions, with handover to your staff." },
      { t: "Website chatbots", d: "A chat window on your site that answers from your own content and sends qualified enquiries to WhatsApp or email." },
      { t: "Lead qualification", d: "The bot asks what your sales team would ask first (budget, location, timeline) and tags each lead before it reaches them." },
      { t: "Booking and reminders", d: "Appointments booked in chat and reminders sent on WhatsApp, for clinics, salons, service businesses and showrooms." },
      { t: "Order and delivery updates", d: "Order confirmations, shipping updates and payment links sent automatically from your store or system." },
      { t: "CRM and system connections", d: "Conversations and leads saved to your CRM or sheet, so nothing lives only in one person's phone.", href: `${S}/crm-software-development` },
    ],
  },
  notes: {
    label: "How We Approach It",
    heading: "A chatbot people don't hate",
    items: [
      ["Answers from your information", "AI replies are limited to your prices, policies and content, so the bot doesn't make things up about your business."],
      ["Always a way to a human", "Customers can reach a person at any point, and complex questions go straight to your team."],
      ["English and Arabic", "Bots that understand and reply in both languages, plus Malayalam for Kerala businesses where needed."],
      ["Official WhatsApp platform", "Built on Meta's WhatsApp Business Platform, not unofficial tools that risk getting your number banned."],
      ["Start small", "One use case first, usually FAQs or lead capture. Add booking, orders and integrations once it's working."],
      ["Running costs explained", "WhatsApp's own messaging charges and AI usage costs are explained up front, separate from our build fee."],
    ],
    footer: (
      <>
        Background reading: <Link href="/blog/ai-chatbot-for-business-website" className={LINK_DARK}>do you need an AI chatbot on your website?</Link> and{" "}
        <Link href="/blog/whatsapp-business-uae" className={LINK_DARK}>WhatsApp Business for UAE companies</Link>.
      </>
    ),
  },
  costs: {
    label: "Pricing",
    heading: "What a chatbot costs to build and run",
    intro: "We quote each build after understanding the conversations you want to automate. Running costs are separate and depend on how many conversations you have.",
    cols: ["Cost", "Paid to", "Notes"],
    rows: [
      ["Build and setup", "Ivoniz LLP · Quote in ₹ or AED", "Flows, AI setup, integrations, testing"],
      ["WhatsApp messaging", "Meta, or a WhatsApp provider", "Charged per conversation or message, by country and type"],
      ["AI usage", "The AI provider", "Depends on how many messages the AI answers"],
      ["Support and changes", "Ivoniz LLP · Optional monthly plan", "New answers, flow changes, monitoring"],
    ],
    footer: "Meta sets its own WhatsApp pricing and changes it from time to time; we check the current rates for your country during scoping.",
  },
  process: {
    heading: "From first conversation to live bot",
    aside: (
      <>
        Bigger automation needs? See <Link href={S} className={LINK}>custom software development</Link>.
      </>
    ),
    steps: [
      ["Conversation review", "We read through typical chats and pick what to automate first."],
      ["Flows and answers", "The questions, answers and handover rules agreed in writing."],
      ["Build and connect", "Bot built, WhatsApp number or website connected, CRM linked."],
      ["Test with your team", "Your staff test it with real questions before customers see it."],
      ["Launch and improve", "Live, with unanswered questions reviewed and added in the first weeks."],
    ],
  },
  form: {
    heading: "Tell us what you want to automate",
    text: "What do customers ask most, and where (WhatsApp, website, Instagram)? We reply with a suggested first bot and a quote.",
    aside: "Our team is in Kozhikode, Kerala. We work with UAE businesses remotely, in Gulf time; no UAE office.",
    props: {
      idPrefix: "bot",
      subject: "chatbot",
      leadType: "ai_chatbot",
      location: "ai_chatbot_form",
      question: "Where should the bot work?",
      messageHint: "The questions customers ask most, roughly how many chats a day, and the systems you use.",
      types: [
        { id: "whatsapp", label: "WhatsApp" },
        { id: "website", label: "Website" },
        { id: "both", label: "Both" },
        { id: "unsure", label: "Not sure yet" },
      ],
      places: ["Dubai", "Other UAE", "Saudi Arabia", "Qatar", "Kerala", "Elsewhere in India", "Other"],
    },
  },
  faqHeading: "Chatbots and WhatsApp automation: questions",
  faqs: [
    { q: "Can a chatbot reply on my existing WhatsApp number?", a: "Usually yes, by moving the number to the WhatsApp Business Platform (API). The number then works through the platform rather than the regular WhatsApp Business app, so we plan the switch with you before making it." },
    { q: "Will the AI give wrong answers to customers?", a: "We limit the AI to your own information and set rules for what it must not answer. Anything it isn't sure about goes to your team. No chatbot is perfect, so we review conversations in the first weeks and fix gaps." },
    { q: "How much does a WhatsApp chatbot cost?", a: "There's a one-time build fee, which we quote after understanding your use case, plus running costs: WhatsApp's messaging charges set by Meta and, for AI replies, the AI provider's usage fees." },
    { q: "Can the chatbot reply in Arabic?", a: "Yes. We build bots that reply in English and Arabic, and Malayalam where needed." },
    { q: "Can the bot book appointments or take orders?", a: "Yes, if it's connected to your booking system, calendar or store. Simple bookings can also be handled with a calendar we set up." },
    { q: "Do you have an office in the UAE?", a: "No. Our team is in Kozhikode, Kerala, India, and works with UAE businesses remotely, in Gulf time." },
  ],
  relatedSlugs: ["ai-chatbot-for-business-website", "ai-automation-small-business", "whatsapp-business-uae"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
