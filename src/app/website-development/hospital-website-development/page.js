import Link from "next/link";
import LandingPage, { landingMetadata, LINK, LINK_DARK } from "@/components/site/LandingPage";

/* ════════════════════════════════════════════════════════════════
   L17 — /website-development/hospital-website-development
   Owns: "hospital website design", "hospital website development kerala",
   "clinic website design", "dental clinic website", "healthcare website
   development". Volumes: data unavailable. Markets: Kerala + GCC.
   Proof: Rivaura Hospital (Malappuram) and Danthika Dental Zone (Kondotty),
   both real, live, in lib/clients.js. No outcome claims (patient numbers,
   bookings) — none verified. Medical-advertising caution kept general; the
   UAE specifics belong in blog B17 (official sources only).
   ════════════════════════════════════════════════════════════════ */

const PAGE_URL = "https://ivoniz.com/website-development/hospital-website-development";
const page = {
  url: PAGE_URL,
  title: "Hospital & Clinic Website Development | Ivoniz LLP",
  ogTitle: "Hospital & Clinic Website Development",
  description:
    "Websites for hospitals, clinics and dental practices in Kerala and the Gulf: doctors, departments, OP timings, click-to-call emergency and WhatsApp booking.",
  schemaName: "Hospital and Clinic Website Development",
  serviceType: "Website development for healthcare providers",
  areaServed: [{ "@type": "State", name: "Kerala" }, { "@type": "Country", name: "India" }, { "@type": "Country", name: "United Arab Emirates" }],
  crumbs: [
    { label: "Website Development", href: "/website-development" },
    { label: "Hospital & Clinic Websites", href: "/website-development/hospital-website-development" },
  ],
  label: "Hospitals · Clinics · Dental · Kerala and the Gulf",
  h1: "Hospital and Clinic",
  h1Outline: "Website Development",
  intro: (
    <>
      Patients visit a hospital website to answer a few urgent questions: which doctor, which day, how to get there,
      and who to call. We build hospital, clinic and dental websites that answer those first, on a phone, in seconds.
      Built by our team in Kozhikode, Kerala.
    </>
  ),
  cta: "Get a Quote",
  waMessage: "Hi Ivoniz, I need a website for our hospital / clinic.",
  cards: {
    label: "What Patients Look For",
    heading: "Built around what patients need first",
    items: [
      { t: "Emergency and contact, always visible", d: "A click-to-call emergency number and casualty details at the top of every page on mobile, not buried in a footer." },
      { t: "Doctors and OP timings", d: "Each doctor with speciality, qualifications and consulting days. Your staff can update timings from an admin panel without calling a developer." },
      { t: "Departments and services", d: "A page per department or treatment, written in plain language patients understand, with the doctors who handle it." },
      { t: "Appointments", d: "Booking by phone, WhatsApp or a simple form that goes to your front desk, depending on how your hospital actually takes appointments." },
      { t: "Location and directions", d: "Map, landmarks, parking and the Google Business Profile set up correctly, so 'hospital near me' searches show the right details." },
      { t: "English and Malayalam (or Arabic)", d: "A second language where your patients need it: Malayalam in Kerala, Arabic for Gulf clinics." },
    ],
  },
  notes: {
    label: "Healthcare Specifics",
    heading: "Things a medical website has to get right",
    items: [
      ["Careful claims", "Medical advertising is regulated in both India and the UAE. We avoid promises like guaranteed results or 'best treatment' claims, and leave medical wording for your doctors to approve."],
      ["Accurate, current information", "Wrong OP timings send patients to a closed clinic. Timings, doctors and phone numbers are kept in one place on the site so they never disagree with each other."],
      ["Speed on weak connections", "Patients often check on mobile data in a hurry. Pages are kept light and tested on slow connections."],
      ["Privacy in forms", "Appointment forms collect only what the front desk needs, and the privacy page says where the data goes."],
    ],
    footer: (
      <>
        Want patients to find you on Google Maps too? See <Link href="/digital-marketing/seo-services/local-seo-services" className={LINK_DARK}>local SEO</Link>.
      </>
    ),
  },
  proof: {
    label: "Healthcare Websites We Built",
    heading: "A hospital and a dental clinic in Malappuram",
    intro: "Both live today. Open them on your phone and check how quickly you can find a doctor or call.",
    slugs: ["rivaura-hospital", "danthika-dental-zone"],
    footer: (
      <>
        Read the <Link href="/works/rivaura-hospital" className={LINK_DARK}>Rivaura Hospital case study</Link>, which includes a video review from the hospital, or <Link href="/works" className={LINK_DARK}>see all our work</Link>.
      </>
    ),
  },
  process: {
    heading: "From doctor list to launch",
    aside: (
      <>
        Prices for Kerala websites: <Link href="/website-development/website-development-cost-in-kerala" className={LINK}>website development cost in Kerala</Link>.
      </>
    ),
    steps: [
      ["Meeting with your admin team", "Departments, doctors, timings, how appointments work today and who will update the site."],
      ["Content collection", "Doctor photos and details, department descriptions and facility photos. We give you a simple template to fill in."],
      ["Design and build", "Mobile first, reviewed on a private link by your management and doctors."],
      ["Launch and training", "Google Business Profile checked, staff shown how to update doctors and timings."],
    ],
  },
  form: {
    heading: "Tell us about your hospital or clinic",
    text: "Your departments, roughly how many doctors, and whether you need appointment booking. We reply with questions and a fixed quote.",
    props: {
      idPrefix: "hosp",
      subject: "healthcare website",
      leadType: "hospital_website",
      location: "hospital_website_form",
      question: "What kind of practice?",
      messageHint: "Number of departments and doctors, how you take appointments, and your current website if any.",
      types: [
        { id: "hospital", label: "Hospital" },
        { id: "clinic", label: "Clinic / polyclinic" },
        { id: "dental", label: "Dental clinic" },
        { id: "other", label: "Lab / pharmacy / other" },
      ],
      places: ["Kozhikode", "Malappuram", "Elsewhere in Kerala", "Elsewhere in India", "UAE", "Other GCC"],
    },
  },
  faqHeading: "Hospital websites: questions",
  faqs: [
    { q: "Can our staff update doctors and OP timings themselves?", a: "Yes. Doctors, timings and notices are edited from an admin panel, so your front office can change them the same day without contacting us." },
    { q: "Can patients book appointments online?", a: "Yes, in the way that suits your hospital: a form that reaches the front desk, a WhatsApp booking button, click-to-call, or a full booking system if you already use hospital software that supports it." },
    { q: "Have you built hospital websites before?", a: "Yes. We built the website for Rivaura Multispeciality Hospital in Areekode, Malappuram, and for Danthika Dental Zone in Kondotty. Both are linked on this page." },
    { q: "How much does a hospital website cost?", a: "It depends on the number of departments and doctors, booking features and languages. We send a fixed quote after a short call. Typical Kerala website price ranges are on our cost guide." },
    { q: "Do you build clinic websites for the UAE?", a: "Yes, remotely from Kozhikode. UAE healthcare advertising has its own rules, so medical wording should be approved by your clinic before it goes live." },
  ],
  relatedSlugs: ["google-business-profile-not-showing","local-seo-kerala-guide"],
};

export const metadata = landingMetadata(page);
export default function Page() {
  return <LandingPage page={page} />;
}
