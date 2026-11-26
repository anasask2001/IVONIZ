import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   B10 — /blog/arabic-english-bilingual-website-guide
   Owns: "arabic english website", "bilingual website arabic english",
   "rtl website design", "hreflang arabic", "arabic seo website".
   Technical/informational; feeds L4 (/website-development/arabic-website-
   development). Facts are standard web practice (HTML dir/lang, hreflang
   per Google's documentation, CSS logical properties). Sources linked.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "arabic-english-bilingual-website-guide";
export const metadata = postMetadata(SLUG);

const AR = "/website-development/arabic-website-development";

const TOC = [
  { id: "plan", label: "1. Plan the pages and the text" },
  { id: "urls", label: "2. URLs for each language" },
  { id: "tags", label: "3. Language tags Google reads" },
  { id: "rtl", label: "4. Right-to-left layout" },
  { id: "mixed", label: "5. Numbers, phones and mixed text" },
  { id: "fonts", label: "6. Arabic fonts" },
  { id: "seo", label: "7. Arabic SEO" },
  { id: "checklist", label: "Launch checklist" },
];

const FAQS = [
  { q: "Should an Arabic website use a subfolder or a separate domain?", a: "For most businesses, a subfolder such as example.com/ar/ is simplest: one website, one set of authority, easy to manage. Separate domains or subdomains work too, but take more effort to build up in Google." },
  { q: "What is hreflang and do I need it for Arabic pages?", a: "hreflang is a tag that tells Google which page is the English version and which is the Arabic version of the same content. With it, Google is more likely to show Arabic searchers the Arabic page. Each language version should list itself and the other." },
  { q: "Can I use Google Translate for the Arabic version?", a: "Not for the published text. Machine translation reads as foreign to native speakers and can get service descriptions wrong. Use it for a first draft at most, then have a native speaker write or correct the final text." },
  { q: "Does the whole layout need to flip for Arabic?", a: "Yes. Arabic reads right to left, so navigation, columns, text alignment and direction-specific icons should mirror. Logos, photos, and numbers like phone numbers and prices usually don't flip." },
];

const Code = ({ children }) => <pre><code>{children}</code></pre>;

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[{ label: "Arabic & bilingual website development", href: AR, note: "We build English + Arabic websites for Gulf businesses, remotely from Kerala." }]}
      sources={[
        ["Google Search Central: Localized versions of your pages (hreflang)", "https://developers.google.com/search/docs/specialty/international/localized-versions"],
        ["W3C: Structural markup and right-to-left text in HTML", "https://www.w3.org/International/questions/qa-html-dir"],
        ["MDN: CSS logical properties", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"],
      ]}
      cta={{
        title: "Need an English + Arabic site built?",
        text: "We handle the layout, fonts, URLs, language tags and Arabic SEO setup; your translator supplies the Arabic text. Our team is in Kozhikode, Kerala, working in Gulf time.",
        button: "Get a quote",
        href: `${AR}#quote`,
        message: "Hi Ivoniz, I read your Arabic + English website guide and need a bilingual site.",
      }}
    >
      <p>
        A bilingual English and Arabic website is close to building two sites that share a design. This guide covers what
        has to be right for Arabic visitors and for Google, in the order we deal with it on real projects. It&apos;s
        written for business owners and the developers they hire.
      </p>

      <h2 id="plan">1. Plan the pages and the text first</h2>
      <p>
        Decide which pages need Arabic before any design work. If only the homepage is in Arabic, Arabic visitors hit
        English pages one click later. Usually the essentials are: home, services or products, about, contact, and any page
        you advertise.
      </p>
      <p>
        Then decide who writes the Arabic. Machine translation is fine for understanding a draft, not for publishing.
        Arabic that reads as translated loses trust quickly, so a native speaker should write or correct the final text.
      </p>

      <h2 id="urls">2. Give each language its own URLs</h2>
      <p>
        Every Arabic page needs its own address, so Google can index it and people can share it. A language button that
        swaps text on the same URL is invisible to search engines.
      </p>
      <ArticleTable
        caption="URL structures for a bilingual site."
        cols={["Structure", "Example", "Notes"]}
        rows={[
          ["Subfolder (recommended)", "example.com/ar/services", "One site, simplest to manage and build up in Google"],
          ["Subdomain", "ar.example.com/services", "Works, but treated more like a separate site"],
          ["Separate domain", "example.ae vs example.com", "Most effort; makes sense mainly for different markets, not languages"],
        ]}
      />

      <h2 id="tags">3. Language tags Google reads</h2>
      <p>Set the language and direction on the page itself:</p>
      <Code>{`<html lang="ar" dir="rtl">   <!-- Arabic pages -->
<html lang="en" dir="ltr">   <!-- English pages -->`}</Code>
      <p>
        Then link the two versions with <strong>hreflang</strong>, so Google knows they&apos;re the same content in two
        languages. Each version lists both, including itself:
      </p>
      <Code>{`<link rel="alternate" hreflang="en" href="https://example.com/services" />
<link rel="alternate" hreflang="ar" href="https://example.com/ar/services" />
<link rel="alternate" hreflang="x-default" href="https://example.com/services" />`}</Code>
      <p>
        Translate the page title and meta description too. An Arabic page with an English title in search results looks
        broken.
      </p>

      <h2 id="rtl">4. Right-to-left layout</h2>
      <p>
        With <code>dir=&quot;rtl&quot;</code>, text and inline content flow right to left. The layout around it must
        mirror too: navigation starts on the right, sidebars swap sides, and icons that point a direction (arrows,
        &ldquo;next&rdquo;) flip. Logos, photos and media controls usually stay as they are.
      </p>
      <p>
        The cleanest way to build this is with CSS <strong>logical properties</strong>, which follow the text direction
        automatically, instead of left/right:
      </p>
      <Code>{`/* Instead of margin-left / padding-right: */
.card { margin-inline-start: 16px; padding-inline-end: 24px; text-align: start; }`}</Code>
      <p>
        Then check every component in Arabic: menus, sliders, accordions, forms, tables and maps are where mirroring
        usually breaks.
      </p>

      <h2 id="mixed">5. Numbers, phones and mixed text</h2>
      <p>
        Arabic pages often contain left-to-right pieces: phone numbers, prices, product codes, English brand names.
        Without care, a phone number like +971 50 123 4567 can display in a jumbled order. Wrap these in an element with
        its own direction:
      </p>
      <Code>{`<span dir="ltr">+971 50 123 4567</span>
<bdi>Model X-200</bdi>`}</Code>
      <p>
        Also decide whether to show Western (0–9) or Eastern Arabic (٠–٩) numerals, and keep it consistent across the
        Arabic pages. Many Gulf business sites use Western digits.
      </p>

      <h2 id="fonts">6. Arabic fonts</h2>
      <ul>
        <li>Choose a font designed for Arabic, not a Latin font with Arabic fallback. Free options on Google Fonts include Noto Naskh Arabic, Noto Kufi Arabic, IBM Plex Sans Arabic, Cairo and Tajawal.</li>
        <li>Arabic usually needs a slightly larger size and more line height than English to read comfortably on phones.</li>
        <li>Load only the weights the design uses. Arabic font files can be large, and unused weights slow the Arabic pages down.</li>
      </ul>

      <h2 id="seo">7. Arabic SEO</h2>
      <Callout title="Don't translate your keywords">
        <p>
          People searching in Arabic often use different phrases from a word-for-word translation of the English
          keyword. Research Arabic searches separately, with a native speaker, before writing Arabic titles and headings.
        </p>
      </Callout>
      <ul>
        <li>Arabic title, meta description and headings on each Arabic page.</li>
        <li>Arabic image alt text, form labels and error messages.</li>
        <li>Structured data on Arabic pages marked with <code>inLanguage: &quot;ar&quot;</code>.</li>
        <li>Both language versions in your XML sitemap.</li>
        <li>Your Google Business Profile can include Arabic in the description where your customers search in Arabic.</li>
      </ul>

      <h2 id="checklist">Launch checklist</h2>
      <ol>
        <li>Every planned page exists in both languages, with its own URL.</li>
        <li><code>lang</code> and <code>dir</code> set correctly on every page.</li>
        <li>hreflang links both ways on every pair, plus x-default.</li>
        <li>All components checked in Arabic on a real iPhone and Android phone.</li>
        <li>Phone numbers, prices and codes display in the right order.</li>
        <li>Arabic titles and descriptions written, not machine-translated.</li>
        <li>Forms, emails and WhatsApp messages work in Arabic.</li>
        <li>Arabic pages as fast as the English ones.</li>
        <li>Both versions in the sitemap, submitted in Search Console.</li>
      </ol>
      <p>
        Expanding into Saudi Arabia or Qatar? See{" "}
        <Link href="/blog/website-for-saudi-arabia-qatar-gcc">taking your website into the GCC</Link>. Want this done for you? See{" "}
        <Link href={AR}>Arabic &amp; bilingual website development</Link>.
      </p>
    </ArticleLayout>
  );
}
