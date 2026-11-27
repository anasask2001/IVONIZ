import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   /blog/web-design-trends-2026
   Primary: "web design trends 2026" (Ubersuggest global, 27 Nov 2026:
   1,600/mo; US trend data showed a seasonal year-end spike). Angle: which
   trends help a BUSINESS website in Kerala / the Gulf and which hurt —
   not a design-inspiration gallery. Real examples from ivoniz.com's own
   performance work (hero video loads after the page; animation library
   removed from first load). Facts: INP is a Core Web Vital (web.dev);
   Google AI features in Search (Search Central). No statistics.
   Lead path → /ui-ux-design.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "web-design-trends-2026";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "worth-it", label: "Trends worth following" },
  { id: "careful", label: "Trends to use carefully" },
  { id: "skip", label: "Trends to skip" },
  { id: "summary", label: "Summary table" },
];

const FAQS = [
  { q: "What are the main web design trends for 2026?", a: "For business websites: pages that answer questions clearly for search and AI tools, fast pages that respond instantly to taps, mobile-first layouts with sticky contact buttons, WhatsApp-first contact, real photography over stock and AI images, bold readable type, subtle motion, accessibility, dark mode support, and bilingual layouts for Gulf markets." },
  { q: "Should my business website follow every design trend?", a: "No. Follow the ones that make it easier for customers to understand you and contact you. Trends that slow the site down or make it harder to use, like heavy 3D, scroll-jacking or pop-ups on arrival, usually cost more enquiries than they win." },
  { q: "Do AI tools change how a business website should be designed?", a: "They change how content should be written. Google shows AI-generated summaries for some searches, and people ask AI assistants for recommendations. Clear pages that directly answer real questions, with accurate business details, are easier for both to use." },
  { q: "How often should a business website be redesigned to keep up with trends?", a: "Not on a schedule. Redesign when the site stops doing its job: it's slow, hard to use on mobile, hard to update, or not bringing enquiries. Small improvements in between are usually better value than chasing every trend." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "UI/UX design", href: "/ui-ux-design", note: "Designs for websites and apps, by the team that builds them." },
        { label: "7 signs your business needs a new website", href: "/blog/signs-you-need-a-new-website", note: "When a redesign is actually worth it." },
      ]}
      sources={[
        ["web.dev: Interaction to Next Paint (INP)", "https://web.dev/articles/inp"],
        ["Google Search Central: AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
      ]}
      cta={{
        label: "Design",
        title: "Planning a redesign?",
        text: "Tell us about your current site and what you want it to do better. We'll tell you which changes would actually help your customers, and which are just fashion.",
        button: "Discuss a redesign",
        href: "/ui-ux-design#quote",
        message: "Hi Ivoniz, I'm planning a website redesign and read your 2026 trends article.",
      }}
    >
      <p>
        Every year brings a new list of web design trends, usually written for designers and illustrated with portfolio
        sites that would never work for a clinic, a trading company or a shop. This one is for business owners in Kerala
        and the Gulf: which 2026 trends actually help a business website bring enquiries, which need care, and which to
        skip.
      </p>

      <h2 id="worth-it">Trends worth following</h2>

      <h3>1. Writing for search and AI answers</h3>
      <p>
        Google now shows AI-generated summaries for some searches, and more people ask AI assistants which business to
        choose. Both work better with pages that answer real questions plainly: what you do, where, for whom, at roughly
        what price, and how to contact you. Clear headings, a short FAQ on service pages, and accurate business details
        help more than clever copy. See <Link href="/blog/why-website-not-showing-on-google">why a website doesn&apos;t show on Google</Link> for the basics.
      </p>

      <h3>2. Pages that respond instantly</h3>
      <p>
        Google measures how quickly a page responds when someone taps or clicks (a metric called Interaction to Next
        Paint, part of Core Web Vitals). Heavy scripts make buttons and menus feel sluggish on mid-range phones. In 2026,
        &ldquo;fast&rdquo; means not just loading quickly but staying responsive.
      </p>

      <h3>3. Mobile first, with the contact button always in reach</h3>
      <p>
        Most visitors are on phones. A bar fixed to the bottom of the screen with WhatsApp and call buttons, menus that
        open with a thumb, and forms that use the right phone keyboard make a visible difference. More in{" "}
        <Link href="/blog/how-to-make-a-website-that-gets-enquiries">how to make a website that gets enquiries</Link>.
      </p>

      <h3>4. WhatsApp-first contact</h3>
      <p>
        For Kerala and Gulf customers, WhatsApp often beats a contact form. Pre-filled WhatsApp links that say which page
        the visitor came from are simple and effective. See <Link href="/blog/whatsapp-business-uae">WhatsApp for business enquiries</Link>.
      </p>

      <h3>5. Real photos over stock and AI images</h3>
      <p>
        As AI-generated images become everywhere, real photos of your team, premises and work stand out more. They&apos;re
        also one of the strongest trust signals on a business site.
      </p>

      <h3>6. Bold, readable typography</h3>
      <p>
        Large, simple headlines and generous spacing are in, and they happen to be easier to read on phones. The test: can
        someone understand what you do from the first screen without scrolling?
      </p>

      <h3>7. Accessibility as standard</h3>
      <p>
        Good contrast, readable text sizes, big enough tap targets and proper labels on forms help everyone, including
        older customers and people on small or cracked screens. It&apos;s increasingly expected, not a nice-to-have.
      </p>

      <h3>8. Bilingual and right-to-left layouts for the Gulf</h3>
      <p>
        More Gulf businesses want English and Arabic done properly, with right-to-left layouts rather than a translation
        plugin. See the <Link href="/blog/arabic-english-bilingual-website-guide">Arabic + English website guide</Link>.
      </p>

      <h2 id="careful">Trends to use carefully</h2>
      <h3>Motion and scroll animations</h3>
      <p>
        Subtle movement, like a section fading in or a button responding to a tap, makes a site feel polished. Heavy
        animation libraries, though, can slow the first load. On our own site we load the animation code only when a
        visitor reaches the animated section, instead of with the page.
      </p>
      <h3>Background video</h3>
      <p>
        A short, compressed video can work in a hero section. On ivoniz.com the homepage video starts downloading only
        after the rest of the page has loaded, and is skipped for visitors with data saver on. Without that care,
        background video is one of the quickest ways to make a site slow on mobile data.
      </p>
      <h3>Dark mode</h3>
      <p>
        Supporting the visitor&apos;s dark mode setting is a nice touch, but test it: logos, photos and brand colours
        often look wrong on dark backgrounds if nobody checked.
      </p>
      <h3>AI chatbots</h3>
      <p>
        Useful for repeat questions and after-hours enquiries, frustrating when they invent answers or trap people. See{" "}
        <Link href="/blog/ai-chatbot-for-business-website">AI chatbots on business websites</Link>.
      </p>

      <h2 id="skip">Trends to skip on a business website</h2>
      <ul>
        <li><strong>Heavy 3D scenes</strong> that take seconds to load on a phone.</li>
        <li><strong>Scroll-jacking</strong>, where the page controls how fast you scroll.</li>
        <li><strong>Custom cursors and hover-only effects</strong>: most of your visitors have no cursor.</li>
        <li><strong>Pop-ups the moment the page opens</strong>, before anyone has read anything.</li>
        <li><strong>Experimental navigation</strong> that hides the menu behind something clever. People should find your services without thinking.</li>
      </ul>
      <Callout title="The test for any trend">
        <p>Does it make it easier for a customer to understand what you offer and contact you? If not, it&apos;s decoration, and it probably costs speed.</p>
      </Callout>

      <h2 id="summary">Summary</h2>
      <ArticleTable
        caption="2026 trends for business websites"
        cols={["Trend", "Verdict"]}
        rows={[
          ["Clear answers for search and AI", "Follow"],
          ["Fast, responsive pages", "Follow"],
          ["Mobile-first with sticky contact", "Follow"],
          ["WhatsApp-first contact", "Follow (Kerala and Gulf)"],
          ["Real photography", "Follow"],
          ["Bold, readable type", "Follow"],
          ["Accessibility", "Follow"],
          ["Bilingual / RTL", "Follow, for Gulf audiences"],
          ["Motion, video, dark mode, chatbots", "Use carefully"],
          ["3D, scroll-jacking, custom cursors, instant pop-ups", "Skip"],
        ]}
      />
      <p>
        Thinking about a redesign? Check first whether you need one: <Link href="/blog/signs-you-need-a-new-website">7 signs your business needs a new website</Link>.
      </p>
    </ArticleLayout>
  );
}
