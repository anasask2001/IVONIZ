import Link from "next/link";
import LegalPage from "@/components/site/LegalPage";

/* Terms for using the website itself. Project work (scope, payments,
   ownership, warranties) is governed by each client's signed proposal or
   agreement, which this page defers to. */

const PAGE_URL = "https://ivoniz.com/terms";
const TITLE = "Terms of Service";
const DESCRIPTION =
  "The terms for using ivoniz.com, the website of Ivoniz LLP, Kozhikode, Kerala: content, quotes, third-party links and liability.";
const UPDATED = { iso: "2026-11-23", label: "23 November 2026" };

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    title: "Terms of Service | Ivoniz LLP",
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Ivoniz LLP",
    images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: "Ivoniz LLP" }],
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "About these terms",
    body: (
      <p>
        ivoniz.com is run by Ivoniz LLP, Kozhikode, Kerala, India. By using this website you agree to these terms.
        If you do not agree, please do not use the site.
      </p>
    ),
  },
  {
    h: "Information on this website",
    body: (
      <p>
        We work to keep the information here accurate and current, but it is general information about our
        services. Price ranges, timelines and feature lists are guides, not offers. Your final price and scope are
        confirmed in a written quote.
      </p>
    ),
  },
  {
    h: "Projects and quotes",
    body: (
      <p>
        Any website, app, software or marketing work we do for you is governed by the proposal or agreement we
        both accept, including its scope, payment schedule, delivery dates and ownership terms. If that agreement
        and these terms differ, the agreement applies.
      </p>
    ),
  },
  {
    h: "Our content",
    body: (
      <p>
        The text, design, graphics, logo and code of this website belong to Ivoniz LLP unless stated otherwise.
        Screenshots of client websites are shown as examples of our work and belong to their owners. You may share
        links to our pages, but please do not copy or republish our content without permission.
      </p>
    ),
  },
  {
    h: "Acceptable use",
    body: (
      <p>
        Please do not misuse the site, for example by trying to break its security, overload it, scrape it in bulk
        or send spam or harmful content through our contact channels.
      </p>
    ),
  },
  {
    h: "Links to other websites",
    body: (
      <p>
        We link to client websites, WhatsApp, Google, social networks and other sites. We are not responsible for
        their content or how they handle your data.
      </p>
    ),
  },
  {
    h: "Liability",
    body: (
      <p>
        The website is provided as it is. To the extent the law allows, Ivoniz LLP is not liable for any loss that
        comes from using, or being unable to use, this website or relying on its general information.
      </p>
    ),
  },
  {
    h: "Privacy",
    body: (
      <p>
        How we handle your information is explained in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    h: "Governing law and contact",
    body: (
      <p>
        These terms are governed by the laws of India, and the courts of Kozhikode, Kerala have jurisdiction.
        Questions? Email <a href="mailto:info@ivoniz.com">info@ivoniz.com</a> or{" "}
        <Link href="/contact">contact us</Link>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      url={PAGE_URL}
      label="Terms of Service"
      name={`${TITLE} | Ivoniz LLP`}
      description={DESCRIPTION}
      title="Terms of"
      outline="Service"
      updated={UPDATED}
      intro="The terms that apply when you use ivoniz.com."
      sections={sections}
    />
  );
}
