import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/ivoniz.pvt/", Icon: FaInstagram },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61579264607681", Icon: FaFacebook },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/ivoniz-pvt-ltd/", Icon: FaLinkedin },
];

/* Each link points to a real, relevant page or in-page anchor —
   there are no standalone /services/* pages on this site. */
const SERVICES_COLS = [
  {
    title: "Mobile App",
    links: [
      { label: "Flutter Development", href: "/#our-services" },
      { label: "iOS Development",     href: "/#our-services" },
      { label: "Android Development", href: "/#our-services" },
      { label: "Native Development",  href: "/#our-services" },
    ],
  },
  {
    title: "Web Development",
    links: [
      { label: "E-Commerce Website",  href: "/best-website-development-company-in-calicut" },
      { label: "WooCommerce Website", href: "/best-website-development-company-in-calicut" },
      { label: "Catalogue Website",   href: "/best-website-development-company-in-calicut" },
      { label: "Portal Website",      href: "/best-website-development-company-in-calicut" },
      { label: "WordPress Website",   href: "/best-website-development-company-in-calicut" },
      { label: "Static Website",      href: "/best-website-development-company-in-calicut" },
    ],
  },
  {
    title: "Software",
    links: [
      { label: "ERP Software",     href: "/#our-services" },
      { label: "CRM Software",     href: "/#our-services" },
      { label: "Billing Software", href: "/#our-services" },
    ],
  },
  {
    title: "Digital Marketing",
    links: [
      { label: "SEO", href: "/best-digital-marketing-company-in-calicut" },
      { label: "SMM", href: "/best-digital-marketing-company-in-calicut" },
      { label: "SEM", href: "/best-digital-marketing-company-in-calicut" },
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
      { label: "UI/UX Design", href: "/best-website-development-company-in-calicut" },
    ],
  },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Works",    href: "/works" },
  { label: "Clients",  href: "/#clients" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.07] px-4 sm:px-6 lg:px-10 xl:px-16 pt-16 pb-8">
      <div className="mx-auto max-w-350">

        {/* ── Brand row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14 pb-14 border-b border-black/6">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-1 mb-5">
              <Image src="/icons/ivoniz-logo1.png" alt="Ivoniz"
                width={44} height={44} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "0.08em", color: "#000", lineHeight: 1 }}>
                IVONIZ
              </span>
            </Link>
            <p className="text-black/50 text-[14px] leading-relaxed mb-4">
              Creating galaxies of possibilities for technological advancement — promoting young talents in Calicut and Thrissur. Experts in Web Development, App Development, AI Integration, Digital Marketing, and more.
            </p>
            <address className="not-italic text-[13px] text-black/60 leading-relaxed">
              7th Floor, Phase 1, HiLITE Business Park,<br />
              Ivoniz Technologies Private Limited,<br />
              Kozhikode, Kerala 673001
            </address>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-5">Company</p>
            <ul className="space-y-3">
              {COMPANY.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[14px] text-black/55 hover:text-black transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-5">Office Address</p>
            <address className="not-italic text-[13px] text-black/50 leading-relaxed">
              7th Floor, Phase 1,<br />
              HiLITE Business Park,<br />
              Ivoniz Technologies Private Limited,<br />
              Kozhikode, Kerala 673001
            </address>
            <a href="https://maps.app.goo.gl/q6C1CnZSwnbcX2R47" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-[12px] text-black/60 hover:text-black transition-colors">
              View on Maps <FaArrowRight aria-hidden="true" className="text-[10px]" />
            </a>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-5">Connect</p>
            <ul className="space-y-3">
              <li>
                <span className="text-[10px] text-black/55 uppercase tracking-wider block mb-0.5">General</span>
                <a href="mailto:info@ivoniz.com" className="text-[13px] text-black/55 hover:text-black transition-colors">info@ivoniz.com</a>
              </li>
              <li>
                <span className="text-[10px] text-black/55 uppercase tracking-wider block mb-0.5">Sales</span>
                <a href="mailto:sales@ivoniz.com" className="text-[13px] text-black/55 hover:text-black transition-colors">sales@ivoniz.com</a>
              </li>
              <li>
                <span className="text-[10px] text-black/55 uppercase tracking-wider block mb-0.5">HR</span>
                <a href="mailto:hr@ivoniz.com" className="text-[13px] text-black/55 hover:text-black transition-colors">hr@ivoniz.com</a>
              </li>
              <li>
                <span className="text-[10px] text-black/55 uppercase tracking-wider block mb-0.5">WhatsApp</span>
                <a href="https://wa.me/919645760023" target="_blank" rel="noreferrer" className="text-[13px] text-black/55 hover:text-black transition-colors">+91 96457 60023</a>
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
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-8">Services</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {SERVICES_COLS.map(col => (
              <div key={col.title}>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-black/55 mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map(l => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[13px] text-black/50 hover:text-black transition-colors leading-snug block">
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
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55 mb-4">Find Us</p>
          <div className="w-full rounded-2xl overflow-hidden border border-black/[0.07]" style={{ height: "280px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1849838091516!2d75.83147697481216!3d11.247798588931074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b57e1fbe7ef%3A0x6fbdbc4ed078a88!2sIvoniz%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1780247990377!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Ivoniz Technologies Pvt Ltd location"
            />
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-black/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-black/60">
            © {new Date().getFullYear()} Ivoniz Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-black/60">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
