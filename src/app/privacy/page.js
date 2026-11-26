import LegalPage from "@/components/site/LegalPage";

/* Describes only what the site really does: GTM + GA4, Meta Pixel, a Google
   Maps embed, a contact form that opens the visitor's email app (mailto),
   WhatsApp links, and a chat assistant that runs in the browser and sends
   nothing to a server. Update this page if any of that changes. */

const PAGE_URL = "https://ivoniz.com/privacy";
const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How Ivoniz LLP collects and uses information on ivoniz.com: enquiries, analytics and advertising cookies, and your choices.";
const UPDATED = { iso: "2026-11-23", label: "23 November 2026" };

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Ivoniz LLP",
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Ivoniz LLP",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ivoniz LLP" }],
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "Who we are",
    body: (
      <p>
        This website is run by Ivoniz LLP, 7th Floor, Phase 1, HiLITE Business Park, Kozhikode, Kerala 673014,
        India. For any privacy question, email <a href="mailto:info@ivoniz.com">info@ivoniz.com</a> or call{" "}
        <a href="tel:+919645760023">+91 96457 60023</a>.
      </p>
    ),
  },
  {
    h: "Information you give us",
    body: (
      <>
        <p>We only receive personal details when you choose to contact us:</p>
        <ul>
          <li>
            <strong>Contact form.</strong> Submitting the form opens your own email app with your message addressed
            to info@ivoniz.com. Nothing is stored on this website; we receive it only if you send the email.
          </li>
          <li>
            <strong>WhatsApp, phone and email.</strong> If you message or call us, we receive your number or
            address and what you send. WhatsApp chats are also covered by WhatsApp&apos;s own privacy policy.
          </li>
          <li>
            <strong>Chat assistant.</strong> The chat assistant on this site answers from a fixed set of replies
            inside your browser. Your chat messages are not sent to or stored by us. If you use voice input, your
            browser&apos;s speech recognition service (for example Google in Chrome) may process the audio.
          </li>
        </ul>
        <p>
          We use these details to reply to your enquiry, prepare quotes and deliver the services you ask for. We do
          not sell your personal information.
        </p>
      </>
    ),
  },
  {
    h: "Analytics and advertising",
    body: (
      <>
        <p>To understand how the site is used and to measure our advertising, we use:</p>
        <ul>
          <li>
            <strong>Google Analytics 4 and Google Tag Manager</strong>, which record pages visited, device and
            browser type, approximate location and actions such as button clicks.
          </li>
          <li>
            <strong>Meta Pixel</strong>, which tells Meta (Facebook and Instagram) that a visit or enquiry came
            from our ads, and may be used to show you our ads later.
          </li>
          <li>
            <strong>Google Maps</strong>, embedded to show our office location; Google may set cookies when the
            map loads.
          </li>
          <li>
            <strong>Google reCAPTCHA</strong>, which checks that contact-form enquiries come from a person and not a
            spam bot. When you send the form, Google receives information about your device and how you used the
            page, under its own privacy policy.
          </li>
        </ul>
        <p>
          These services set cookies or similar identifiers and process the data under their own policies:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google</a> and{" "}
          <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta</a>.
        </p>
      </>
    ),
  },
  {
    h: "Your choices",
    body: (
      <ul>
        <li>Block or delete cookies in your browser settings; the site still works without them.</li>
        <li>
          Opt out of Google Analytics with the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out add-on
          </a>
          .
        </li>
        <li>
          Manage ad personalisation in your{" "}
          <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google</a> and{" "}
          <a href="https://www.facebook.com/adpreferences/" target="_blank" rel="noopener noreferrer">Meta</a>{" "}
          ad settings.
        </li>
        <li>
          Ask us to see, correct or delete the details you have sent us by emailing{" "}
          <a href="mailto:info@ivoniz.com">info@ivoniz.com</a>.
        </li>
      </ul>
    ),
  },
  {
    h: "How long we keep information",
    body: (
      <p>
        We keep enquiry emails and messages for as long as needed to respond, deliver a project and meet our legal
        and accounting obligations, then delete them. Analytics data is kept according to the retention settings
        of Google Analytics.
      </p>
    ),
  },
  {
    h: "Security",
    body: (
      <p>
        The site is served only over HTTPS. We limit access to enquiry details to the team members who need them
        to help you.
      </p>
    ),
  },
  {
    h: "Changes to this policy",
    body: (
      <p>
        If we change how we handle information, we will update this page and the date at the top.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      url={PAGE_URL}
      label="Privacy Policy"
      name={`${TITLE} | Ivoniz LLP`}
      description={DESCRIPTION}
      title="Privacy"
      outline="Policy"
      updated={UPDATED}
      intro="What information ivoniz.com collects, why we use it, and the choices you have."
      sections={sections}
    />
  );
}
