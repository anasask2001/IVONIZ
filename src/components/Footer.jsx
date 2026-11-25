import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/ivoniz.llp/", Icon: FaInstagram },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61579264607681", Icon: FaFacebook },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/ivoniz-llp/", Icon: FaLinkedin },
];

/* Each link points to a real, relevant page or in-page anchor —
   Web Development items go to their own service pages. */
const SERVICES_COLS = [
  {
    title: "Mobile App",
    href: "/mobile-app-development",
    links: [
      { label: "Flutter Development", href: "/mobile-app-development/flutter-app-development" },
      { label: "iOS Development",     href: "/mobile-app-development/ios-app-development" },
      { label: "Android Development", href: "/mobile-app-development/android-app-development" },
      { label: "Native Development",  href: "/mobile-app-development/native-app-development" },
    ],
  },
  {
    title: "Web Development",
    href: "/website-development",
    links: [
      { label: "E-Commerce Website",  href: "/website-development/ecommerce-website-development" },
      { label: "WooCommerce Website", href: "/website-development/ecommerce-website-development/woocommerce-website-development" },
      { label: "Catalogue Website",   href: "/website-development/catalogue-website-development" },
      { label: "Portal Website",      href: "/website-development/web-portal-development" },
      { label: "WordPress Website",   href: "/website-development/wordpress-website-development" },
      { label: "Static Website",      href: "/website-development/static-website-development" },
      { label: "Websites in Calicut", href: "/website-development/best-website-development-company-in-calicut" },
    ],
  },
  {
    title: "Software",
    href: "/software-development",
    links: [
      { label: "ERP Software",     href: "/software-development/erp-software-development" },
      { label: "CRM Software",     href: "/software-development/crm-software-development" },
      { label: "Billing Software", href: "/software-development/billing-software-development" },
    ],
  },
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    links: [
      { label: "SEO", href: "/digital-marketing/seo-services" },
      { label: "Local SEO", href: "/digital-marketing/seo-services/local-seo-services" },
      { label: "Technical SEO", href: "/digital-marketing/seo-services/technical-seo-services" },
      { label: "On-Page SEO", href: "/digital-marketing/seo-services/on-page-seo-services" },
      { label: "Off-Page SEO", href: "/digital-marketing/seo-services/off-page-seo-services" },
      { label: "Ecommerce SEO", href: "/digital-marketing/seo-services/ecommerce-seo-services" },
      { label: "SEO Audit", href: "/digital-marketing/seo-services/seo-audit-services" },
      { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
      { label: "Instagram Marketing", href: "/digital-marketing/social-media-marketing/instagram-marketing-services" },
      { label: "Social Media Management", href: "/digital-marketing/social-media-marketing/social-media-management" },
      { label: "Social Media Advertising", href: "/digital-marketing/social-media-marketing/social-media-advertising" },
      { label: "Content Creation", href: "/digital-marketing/social-media-marketing/social-media-content-creation" },
      { label: "SEM", href: "/digital-marketing#google-ads" },
    ],
  },
  {
    title: "Branding",
    links: [
      { label: "Logo Designing",     href: "/#our-services" },
      { label: "Brochure Designing", href: "/#our-services" },
    ],
  },
  {
    title: "UI / UX",
    links: [
      { label: "UI/UX Design", href: "/#our-services" },
    ],
  },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Works",    href: "/works" },
  { label: "Clients",  href: "/clients" },
  { label: "Contact",  href: "/contact" },
];

/* hideLocation: hides the office address, map and city names (used on location
   pages for other cities, e.g. Kochi). The address stays in the sitewide schema. */
export default function Footer({ hideLocation = false }) {
  return (
    <footer className="bg-white border-t border-black/[0.07] px-4 sm:px-6 lg:px-10 xl:px-16 pt-12 sm:pt-16 pb-8">
      <div className="mx-auto max-w-350">

        {/* ── Brand row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-9 sm:gap-10 mb-10 sm:mb-14 pb-10 sm:pb-14 border-b border-black/6">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-1 mb-5">
              <Image src="/icons/ivoniz-logo1.png" alt=""
                width={44} height={44} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "0.08em", color: "#000", lineHeight: 1 }}>
                IVONIZ
              </span>
            </Link>
            <p className="text-black/60 text-[14px] leading-relaxed mb-4">
              Creating galaxies of possibilities for technological advancement — promoting young talents {hideLocation ? "across Kerala" : "in Calicut and Thrissur"}. Experts in Web Development, App Development, AI Integration, Digital Marketing, and more.
            </p>
            {/* Name, address, phone: same wording and order as the Google Business Profile and src/lib/schema.js */}
            <address className={`${hideLocation ? "" : "hidden sm:block "}not-italic text-[13px] text-black/60 leading-relaxed`}>
              Ivoniz LLP,<br />
              {!hideLocation && (
                <>
                  7th Floor, Phase 1, HiLITE Business Park,<br />
                  Kozhikode, Kerala 673014<br />
                </>
              )}
              <a href="tel:+919645760023" className="hover:text-black">+91 96457 60023</a>
            </address>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-[12px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-3 sm:mb-5">Company</p>
            <ul className="grid grid-cols-2 gap-x-6 sm:block sm:space-y-3">
              {COMPANY.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center min-h-11 sm:min-h-0 sm:block text-[15px] sm:text-[14px] text-black/60 hover:text-black transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          {!hideLocation && (
          <div className="lg:col-span-3">
            <p className="text-[12px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-3 sm:mb-5">Office Address</p>
            <address className="not-italic text-[13px] text-black/60 leading-relaxed">
              Ivoniz LLP,<br />
              7th Floor, Phase 1,<br />
              HiLITE Business Park,<br />
              Kozhikode, Kerala 673014
            </address>
            <a href="https://maps.app.goo.gl/q6C1CnZSwnbcX2R47" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-1 sm:mt-4 min-h-11 sm:min-h-0 text-[14px] sm:text-[12px] text-black/60 hover:text-black transition-colors">
              View on Maps <FaArrowRight aria-hidden="true" className="text-[10px]" />
            </a>
          </div>
          )}

          {/* Connect */}
          <div className={hideLocation ? "lg:col-span-6" : "lg:col-span-3"}>
            <p className="text-[12px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-3 sm:mb-5">Connect</p>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <span className="text-[11px] sm:text-[10px] text-black/55 uppercase tracking-wider block sm:mb-0.5">General</span>
                <a href="mailto:info@ivoniz.com" className="inline-flex items-center min-h-11 sm:min-h-0 text-[15px] sm:text-[13px] text-black/60 hover:text-black transition-colors">info@ivoniz.com</a>
              </li>
              <li>
                <span className="text-[11px] sm:text-[10px] text-black/55 uppercase tracking-wider block sm:mb-0.5">Sales</span>
                <a href="mailto:sales@ivoniz.com" className="inline-flex items-center min-h-11 sm:min-h-0 text-[15px] sm:text-[13px] text-black/60 hover:text-black transition-colors">sales@ivoniz.com</a>
              </li>
              <li>
                <span className="text-[11px] sm:text-[10px] text-black/55 uppercase tracking-wider block sm:mb-0.5">HR</span>
                <a href="mailto:hr@ivoniz.com" className="inline-flex items-center min-h-11 sm:min-h-0 text-[15px] sm:text-[13px] text-black/60 hover:text-black transition-colors">hr@ivoniz.com</a>
              </li>
              <li>
                <span className="text-[11px] sm:text-[10px] text-black/55 uppercase tracking-wider block sm:mb-0.5">WhatsApp</span>
                <a href="https://wa.me/919645760023" target="_blank" rel="noreferrer" className="inline-flex items-center min-h-11 sm:min-h-0 text-[15px] sm:text-[13px] text-black/60 hover:text-black transition-colors">+91 96457 60023</a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-5">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-11 w-11 sm:h-8 sm:w-8 grid place-items-center rounded-full border border-black/10 text-black/60 hover:text-black hover:border-black/25 transition-colors"
                >
                  <Icon className="text-[14px]" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── All Services grid ── */}
        <div className="mb-14">
          <p className="text-[12px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-3 sm:mb-8">Services</p>

          {/* Phones: one tap-to-open group per service area (the full grid is ~30 links) */}
          <div className="sm:hidden border-t border-black/[0.07]">
            {SERVICES_COLS.map(col => (
              <details key={col.title} className="group border-b border-black/[0.07]">
                <summary className="flex items-center justify-between py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[15px] font-medium text-black/80">{col.title}</span>
                  <span className="w-8 h-8 grid place-items-center rounded-full border border-black/10 text-black/55 text-[17px] leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <ul className="pb-3">
                  {col.href && (
                    <li>
                      <Link href={col.href} className="flex items-center min-h-11 text-[15px] font-medium text-black/80 hover:text-black">
                        All {col.title} services
                      </Link>
                    </li>
                  )}
                  {col.links.map(l => (
                    <li key={l.label}>
                      <Link href={l.href} className="flex items-center min-h-11 text-[15px] text-black/60 hover:text-black">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {SERVICES_COLS.map(col => (
              <div key={col.title}>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-black/55 mb-4">
                  {col.href ? <Link href={col.href} className="hover:text-black transition-colors">{col.title}</Link> : col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map(l => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[13px] text-black/60 hover:text-black transition-colors leading-snug block">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* ── Google Maps ── */}
        {!hideLocation && (
        <div className="mb-10 sm:mb-12">
          <p className="text-[12px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-4">Find Us</p>
          <div className="w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden border border-black/[0.07] bg-black/[0.03]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1849838091516!2d75.83147697481216!3d11.247798588931074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b57e1fbe7ef%3A0x6fbdbc4ed078a88!2sIvoniz%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1780247990377!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Ivoniz LLP location"
            />
          </div>
        </div>
        )}

        {/* ── Bottom bar ── */}
        <div className="border-t border-black/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-black/60">
            © {new Date().getFullYear()} Ivoniz LLP. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-black/60">
            <Link href="/privacy" className="py-3 -my-3 hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="py-3 -my-3 hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
