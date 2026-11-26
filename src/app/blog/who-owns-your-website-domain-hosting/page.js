import Link from "next/link";
import ArticleLayout, { ArticleTable, Callout } from "@/components/blog/ArticleLayout";
import { postMetadata } from "@/lib/blog";

/* ════════════════════════════════════════════════════════════════
   Blog #5 — /blog/who-owns-your-website-domain-hosting
   Primary: "who owns my website domain" + "website developer disappeared",
   "transfer domain from developer", "locked out of my website". Search
   volume not verified; pain point confirmed in owner forums and support
   boards (Nov 2026 research). Kerala + UAE. Practical, not legal advice.
   Facts: ICANN registration-data lookup; registrar transfer locks; auth
   codes. Lead path → website development / takeover.
   ════════════════════════════════════════════════════════════════ */

const SLUG = "who-owns-your-website-domain-hosting";
export const metadata = postMetadata(SLUG);

const TOC = [
  { id: "parts", label: "The five things you should own" },
  { id: "check", label: "Check who owns yours, today" },
  { id: "locked-out", label: "If you're locked out" },
  { id: "handover", label: "Handover checklist for a new site" },
];

const FAQS = [
  { q: "How do I find out who owns my website domain?", a: "Look up the domain on the ICANN registration data lookup (lookup.icann.org) or your registrar's WHOIS tool. Personal details are often hidden for privacy, but you'll see the registrar. Log in to that registrar's account; if you can't, the domain is probably in someone else's account." },
  { q: "My web developer disappeared. How do I get my website back?", a: "Start with the domain, since it's the most important. Contact the registrar shown in the lookup, explain the situation and provide proof that the domain belongs to your business: invoices, emails with the developer, your trade licence or GST registration. Then contact the hosting company the same way, and recover or rebuild the site." },
  { q: "Can my developer legally keep my domain?", a: "Whoever is listed as the registrant is the domain's legal holder, which is why it matters whose name is used. Ownership disputes depend on your agreement and local law; if a developer refuses to hand over a domain you paid for, get legal advice." },
  { q: "What should I get from my developer when the website is finished?", a: "The domain and hosting accounts in your business's name, all admin logins, access to Google Analytics, Search Console and your Google Business Profile, and a recent backup. Change the passwords after handover." },
];

export default function Page() {
  return (
    <ArticleLayout
      slug={SLUG}
      toc={TOC}
      faqs={FAQS}
      related={[
        { label: "Website development", href: "/website-development", note: "New sites with every account in your name from day one." },
        { label: "Cheap vs professional website", href: "/blog/cheap-vs-professional-website", note: "What a website price should include." },
      ]}
      sources={[
        ["ICANN: Registration data lookup", "https://lookup.icann.org/"],
        ["ICANN: Transferring your domain name", "https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en"],
      ]}
      cta={{
        label: "Take Back Control",
        title: "Locked out of your own website?",
        text: "We help businesses recover access, move their site to accounts in their own name, and keep it running. Tell us what you can and can't access, and we'll suggest the next step.",
        button: "Talk to us",
        href: "/website-development#quote",
        message: "Hi Ivoniz, I've lost access to my website (domain / hosting). Can you help?",
      }}
    >
      <p>
        It usually comes up at the worst moment. The website is down, or you want to change a phone number, or a new
        agency asks for the logins, and you realise you don&apos;t have them. The developer who built it isn&apos;t
        answering, and the domain renewal email is going to their inbox, not yours.
      </p>
      <p>
        Paying for a website doesn&apos;t automatically make you its registered owner. Ownership depends on whose name and
        account each part is in. Here&apos;s what to check, what to do if you&apos;re locked out, and how to avoid it
        next time.
      </p>

      <h2 id="parts">The five things you should own</h2>
      <ArticleTable
        caption="What makes up 'your website', and why each matters"
        cols={["Part", "What it is", "If someone else controls it"]}
        rows={[
          ["Domain", "Your address, e.g. yourbusiness.com or .in or .ae", "They control your website address and usually your business email. If it lapses, someone else can register it."],
          ["Hosting", "The server where the site's files live", "They can switch the site off, or you lose the files when they stop paying."],
          ["Website admin", "The login to edit pages (WordPress, Shopify, a custom panel)", "Every change needs them."],
          ["Business email", "you@yourbusiness.com", "Usually tied to the domain and hosting; losing those can mean losing email."],
          ["Google accounts", "Analytics, Search Console, Google Business Profile", "You lose your data, your reviews' management and your Maps listing."],
        ]}
      />
      <p>The domain is the most important. You can rebuild a website; getting a domain back can be hard.</p>

      <h2 id="check">Check who owns yours, today</h2>
      <ol>
        <li>
          <strong>Domain:</strong> look it up on <a href="https://lookup.icann.org/" target="_blank" rel="noopener noreferrer">ICANN&apos;s lookup</a> or your
          registrar&apos;s WHOIS tool. Personal details are often hidden for privacy, but you&apos;ll see which registrar
          holds it (GoDaddy, Hostinger, BigRock and so on). Can you log in to that registrar and see the domain in your
          own account? If not, it&apos;s in someone else&apos;s.
        </li>
        <li><strong>Renewal date:</strong> while you&apos;re there, note when the domain expires. Domains that quietly lapse are a common way businesses lose them.</li>
        <li><strong>Hosting:</strong> do you receive the hosting bill? Can you log in to the hosting control panel?</li>
        <li><strong>Website admin:</strong> do you have an administrator login, not just an editor one?</li>
        <li><strong>Google:</strong> in Analytics, Search Console and your Business Profile, are you an owner, not just a user?</li>
      </ol>
      <Callout title="If everything is in your name">
        <p>Change the passwords, turn on two-step login, and store the details somewhere safe that more than one person in the business can reach.</p>
      </Callout>

      <h2 id="locked-out">If you&apos;re locked out</h2>
      <h3>1. Ask the developer, in writing</h3>
      <p>
        Many cases are simple: the developer is busy, not malicious. Send a polite message asking them to transfer the
        domain to your account and share the hosting and admin logins. Keep it in writing (email or WhatsApp); it becomes
        your record if you need it later.
      </p>
      <h3>2. Secure the domain first</h3>
      <p>
        If they don&apos;t respond, contact the registrar&apos;s support. Explain the situation and provide proof that the
        domain belongs to your business: invoices, emails or messages with the developer, your company registration, GST
        or trade licence. Policies differ between registrars, so ask exactly what they need.
      </p>
      <p>
        To move a domain to your own account, you&apos;ll need it unlocked and an <strong>authorisation (EPP) code</strong>.
        Registrars commonly block transfers for a period (often 60 days) after a new registration or a recent transfer, so
        plan for that.
      </p>
      <h3>3. Then the hosting and files</h3>
      <p>
        Contact the hosting company the same way. If you can&apos;t get the files, check whether you have any backup, or
        whether the site can be rebuilt. Rebuilding is sometimes faster than recovering a site from an unresponsive
        developer, and a good moment to fix what wasn&apos;t working.
      </p>
      <h3>4. Watch the expiry date</h3>
      <p>If the domain is close to expiring, renewing it (even through the existing registrar) comes first. A lapsed domain can be registered by anyone.</p>
      <p>If a developer refuses to hand over a domain you paid for, get legal advice; this guide isn&apos;t legal advice.</p>

      <h2 id="handover">Handover checklist for your next website</h2>
      <p>Whoever builds your next site, agree on this before work starts, not at the end:</p>
      <ol>
        <li>Domain registered in the business&apos;s name, in an account the business controls.</li>
        <li>Hosting account in the business&apos;s name, billed to the business.</li>
        <li>An administrator login to the website for the business.</li>
        <li>Business email set up on accounts the business controls.</li>
        <li>Google Analytics, Search Console and Business Profile owned by the business, with the developer added as a user.</li>
        <li>A full backup handed over at launch.</li>
        <li>A short written note of where everything is, with renewal dates.</li>
      </ol>
      <p>
        A developer who resists any of these is a warning sign. It&apos;s one of the questions in our guide on{" "}
        <Link href="/blog/how-to-choose-web-design-company-dubai">choosing a web design company</Link>, and it applies
        just as much in Kerala as in Dubai.
      </p>
    </ArticleLayout>
  );
}
