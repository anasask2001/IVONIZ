import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #8 — /blog/what-a-business-website-should-include
   Primary: "what should a business website include" (volume not verified).
   Also: "business website checklist", "pages a small business website
   needs". Planning-stage intent: WHICH pages and WHAT content. Distinct
   from #9 (how pages drive action) and #1 (diagnosis of an existing site).
   Lead path → website development / catalogue.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "what-a-business-website-should-include";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "pages", label: "The pages most businesses need" },
  { id: "home", label: "Homepage" },
  { id: "services", label: "Service or product pages" },
  { id: "about", label: "About" },
  { id: "work", label: "Work, projects, reviews" },
  { id: "contact", label: "Contact and location" },
  { id: "behind", label: "Things visitors don't see" },
  { id: "skip", label: "What you can skip" },
];

const FAQS = [
  { q: "How many pages should a small business website have?", a: "Enough to give each main service its own page, plus home, about, contact and a page showing your work. For many small businesses that's 5 to 10 pages. More pages only help if each has a clear purpose." },
  { q: "What should be on a business homepage?", a: "What you do, who it's for and where, one clear way to contact you, a few signs you're trustworthy (real photos, reviews, clients), and links to your main services. Visitors should understand all of that without scrolling far." },
  { q: "Does my website need a blog?", a: "Not to start. A blog helps when you'll publish useful articles regularly that answer what customers search for. An empty or abandoned blog looks worse than none." },
  { q: "Do I need a privacy policy on my website?", a: "If your site collects personal information through forms or uses analytics, you should have a privacy policy that says what you collect and why. Requirements depend on where you and your customers are, so check the rules that apply to you." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Website development", href: "/website-development", note: "Business websites planned around what your customers need." },
        { label: "Catalogue website development", href: "/website-development/catalogue-website-development", note: "If you sell many products but not online." },
      ]}
      cta={{
        label: "Plan Your Site",
        title: "Planning a new website?",
        text: "Tell us what your business does and how customers buy. We'll suggest the pages you actually need, with a written quote, so you're not paying for pages nobody visits.",
        button: "Plan my website",
        href: "/website-development#quote",
        message: "Hi Ivoniz, I'm planning a business website. Can you help me decide the pages?",
      }}
    >
      <p>
        (Still deciding whether you need a website at all? See{" "}
        <Link href="/blog/do-you-need-a-website-if-you-have-instagram">do you need a website if you have Instagram</Link>.)
        When planning a website, it&apos;s tempting to copy a competitor&apos;s menu: Home, About, Services, Gallery,
        Contact. That&apos;s a starting point, but what goes <em>on</em> those pages decides whether the site brings
        enquiries. This checklist covers the pages most businesses need, what each should contain, and what you can skip.
      </p>

      <h2 id="pages">The pages most businesses need</h2>
      <ArticleTable
        caption="A typical small business website"
        cols={["Page", "Its job", "Needed?"]}
        rows={[
          ["Home", "Explain what you do in seconds; send people to the right page", "Always"],
          ["One page per main service or product line", "Answer a buyer's questions about that service", "Always"],
          ["About", "Show who's behind the business and why to trust you", "Always"],
          ["Work / projects / gallery", "Prove you've done this before", "Almost always"],
          ["Contact (with map)", "Make reaching you effortless", "Always"],
          ["Reviews / testimonials", "Let customers vouch for you", "If you have real ones"],
          ["FAQ", "Answer repeat questions in one place", "Useful"],
          ["Privacy policy", "Say what data forms and analytics collect", "If you collect data"],
          ["Blog", "Answer customer questions, help with search", "Only if you'll keep it going"],
        ]}
      />

      <h2 id="home">Homepage</h2>
      <ul>
        <li>A first line that says what you do and where, in plain words.</li>
        <li>A WhatsApp and call button visible without scrolling, especially on mobile.</li>
        <li>Short sections linking to each main service.</li>
        <li>Real photos: your team, premises, work. Stock images of smiling people in suits don&apos;t build trust.</li>
        <li>A few trust signals: reviews, client names, how long you&apos;ve operated (only if true).</li>
      </ul>

      <h2 id="services">Service or product pages</h2>
      <p>
        These do the most selling, and they&apos;re where most small business sites are weakest. Give each main service
        its own page, with:
      </p>
      <ul>
        <li>What&apos;s included, and what isn&apos;t</li>
        <li>Who it&apos;s for</li>
        <li>How the process works</li>
        <li>A price range or what affects price</li>
        <li>Photos or examples of that specific work</li>
        <li>Answers to the questions customers ask on the phone</li>
        <li>A clear next step</li>
      </ul>
      <p>
        A separate page per service also helps Google show the right page to the right search; a single &ldquo;Our
        Services&rdquo; list rarely ranks for anything.
      </p>
      <p>
        Selling many products without online payment? A{" "}
        <Link href="/website-development/catalogue-website-development">catalogue website</Link> organises them with
        categories, filters and WhatsApp enquiry buttons.
      </p>

      <h2 id="about">About page</h2>
      <p>
        People read About pages to decide whether you&apos;re real and reliable. Include who runs the business, a photo,
        where you&apos;re based, what you&apos;re good at, and something specific about how you work. Skip the mission
        statement full of words like &ldquo;excellence&rdquo; and &ldquo;innovation&rdquo;.
      </p>

      <h2 id="work">Work, projects and reviews</h2>
      <p>
        Show finished work with a line on what you did. Name clients only with permission. Reviews are most believable
        when they&apos;re from real, named people, or link to your Google reviews. Never write your own.
      </p>

      <h2 id="contact">Contact and location</h2>
      <ul>
        <li>Phone number that dials when tapped, and WhatsApp with the country code.</li>
        <li>A short form (name, phone, message) rather than a long one.</li>
        <li>Full address, map and landmarks if you have a premises.</li>
        <li>Opening hours.</li>
        <li>For Gulf customers: your time zone and when you reply.</li>
      </ul>

      <h2 id="behind">Things visitors don&apos;t see (but you need)</h2>
      <Callout title="Behind-the-scenes checklist">
        <ul>
          <li>A unique title and description for every page, for Google.</li>
          <li>Google Analytics and Search Console set up.</li>
          <li>WhatsApp, call and form clicks tracked, so you know what works.</li>
          <li>Fast loading on mobile data.</li>
          <li>HTTPS (the padlock) on every page.</li>
          <li>Domain, hosting and logins in your name; see <Link href="/blog/who-owns-your-website-domain-hosting">who owns your website</Link>.</li>
          <li>A way for you to edit content, if it changes often.</li>
        </ul>
      </Callout>

      <h2 id="skip">What you can skip</h2>
      <ul>
        <li><strong>A slider</strong> of rotating banners on the homepage. Few people wait for slide three.</li>
        <li><strong>A &ldquo;News&rdquo; section</strong> you won&apos;t update.</li>
        <li><strong>Pages for services you rarely sell.</strong> Mention them; don&apos;t give them equal space.</li>
        <li><strong>Pop-ups the moment the page opens.</strong> Let people see the site first.</li>
      </ul>
      <p>
        Once the pages are planned, the next question is how each one gets visitors to act; see{" "}
        <Link href="/blog/how-to-make-a-website-that-gets-enquiries">how to make a website that turns visitors into enquiries</Link>.
      </p>
    </ArticleLayout>
  );
}
