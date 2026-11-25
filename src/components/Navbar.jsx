"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  const nav = useMemo(
    () => [
      { label: "Home",      href: "/" },
      { label: "Services",  href: "/#our-services", mega: "services" },
      { label: "Works",     href: "/works" },
      { label: "Clients",   href: "/clients" },
      { label: "About",     href: "/about" },
      { label: "Contact",   href: "/contact" },
    ],
    []
  );

  /* ── 3 nav states:
       'hero'  → hero only: floating glass over video
       'dark'  → post-hero black sections: solid black, attached to bg
       'light' → post-services light sections: solid white             ── */
  const isHome = pathname === "/";
  const [scrollState, setScrollState] = useState("hero");
  /* Only the homepage has the hero/services scroll structure this
     logic depends on — every other route stays a fixed solid theme. */
  const navState = isHome ? scrollState : "dark";
  useEffect(() => {
    if (!isHome) return;
    const fn = () => {
      const services = document.getElementById("our-services");
      const heroEnd  = window.innerHeight * 0.88;
      if (window.scrollY < heroEnd) {
        setScrollState("hero");
      } else if (services && services.getBoundingClientRect().top < 80) {
        setScrollState("light");
      } else {
        setScrollState("dark");
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [isHome]);

  /* ── Call popover ── */
  const [callOpen, setCallOpen] = useState(false);

  /* ── Search bar ── */
  const [searchOpen, setSearchOpen] = useState(false);

  /* ── Mobile drawer ── */
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    /* globals.css hides the quick-contact rail and chat button while the menu is open */
    document.documentElement.toggleAttribute("data-menu-open", open);
    if (open) setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => { document.body.style.overflow = ""; document.documentElement.removeAttribute("data-menu-open"); };
  }, [open]);
  useEffect(() => {
    const fn = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setSearchOpen(false);
      setCallOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* ── Mega menu ── */
  const [activeMega, setActiveMega] = useState(null);
  const megaTimer = useRef(null);
  const openMega   = (key) => { clearTimeout(megaTimer.current); setActiveMega(key); };
  const delayClose = ()    => { megaTimer.current = setTimeout(() => setActiveMega(null), 160); };
  const closeNow   = ()    => { clearTimeout(megaTimer.current); setActiveMega(null); };

  /* Each link points to a real, relevant page or in-page anchor —
     Web Development items go to their own service pages. */
  const servicesCols = useMemo(() => [
    {
      title: "Mobile App",
      href: "/mobile-app-development",
      links: [
        { label: "Flutter Development", href: "/mobile-app-development/flutter-app-development" },
        { label: "iOS Development",      href: "/mobile-app-development/ios-app-development" },
        { label: "Android Development",  href: "/mobile-app-development/android-app-development" },
        { label: "Native Development",   href: "/mobile-app-development/native-app-development" },
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
        { label: "SMM", href: "/digital-marketing#social-media" },
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
        { label: "UI/UX Design", href: "/website-development/best-website-development-company-in-calicut" },
      ],
    },
  ], []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  /* header always stays dark so the white nav text/logo stay visible */
  const dark = true;

  const headerStyle =
    navState === "hero"
      ? {
          /* floating glass over hero video */
          background         : "rgba(0,0,0,0.18)",
          backdropFilter     : "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom       : "1px solid rgba(255,255,255,0.07)",
        }
      : {
          /* solid black — attached to dark/light section bg alike */
          background: "#000",
          borderBottom: "none",
        };

  return (
    <>
      {/* ════════════════════════════════════
          HEADER
      ════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500"
        style={headerStyle}
      >
        <div className="mx-auto max-w-375 px-5 sm:px-8 lg:px-14">
          <div className="flex h-[68px] items-center justify-between lg:h-[76px]">

            {searchOpen ? (
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <Link href="/" className="inline-flex items-center gap-2 shrink-0 select-none min-h-11">
                  <Image
                    src="/icons/ivoniz-logo1.png"
                    alt=""
                    width={38}
                    height={38}
                    style={{ objectFit: "contain", filter: "invert(1)" }}
                  />
                  <span
                    style={{ fontSize: "clamp(15px, 4vw, 19px)", fontWeight: 800, letterSpacing: "0.08em", lineHeight: 1, color: "#ffffff" }}
                  >
                    IVONIZ
                  </span>
                </Link>

                <span className="h-6 w-px bg-white/15 shrink-0" />

                <SearchIcon className="h-5 w-5 text-white/50 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Type to search.."
                  className="flex-1 h-10 bg-transparent outline-none text-[14px] text-white placeholder:text-white/60"
                />

                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="inline-flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full shrink-0 text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <CloseIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <>

            {/* ── LOGO ── */}
            <Link href="/" className="inline-flex items-center gap-2 shrink-0 select-none min-h-11">
              <Image
                src="/icons/ivoniz-logo1.png"
                alt=""
                width={48}
                height={48}
                priority
                style={{
                  objectFit: "contain",
                  filter   : dark ? "invert(1)" : "none",
                  transition: "filter 0.4s ease",
                }}
              />
              <span
                style={{
                  fontSize     : "clamp(16px, 4vw, 20px)",
                  fontWeight   : 800,
                  letterSpacing: "0.08em",
                  lineHeight   : 1,
                  color        : dark ? "#ffffff" : "#000000",
                  transition   : "color 0.4s ease",
                }}
              >
                IVONIZ
              </span>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <nav aria-label="Main navigation" className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
              <ul className="flex items-center">
                {nav.map((item) => {
                  const active = isActive(item.href);
                  const isMega = !!item.mega;
                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => isMega ? openMega(item.mega) : closeNow()}
                      onMouseLeave={() => isMega && delayClose()}
                    >
                      <Link
                        href={item.href}
                        onFocus={() => isMega ? openMega(item.mega) : closeNow()}
                        onKeyDown={(e) => e.key === "Escape" && closeNow()}
                        aria-expanded={isMega ? activeMega === item.mega : undefined}
                        aria-haspopup={isMega ? "true" : undefined}
                        className={[
                          "relative flex items-center gap-1.5 px-4 py-6 text-[11.5px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200",
                          active ? "text-white" : "text-white/65 hover:text-white",
                        ].join(" ")}
                      >
                        {item.label}
                        {isMega && (
                          <ChevronDown
                            className={[
                              "w-2.25 h-2.25 transition-transform duration-200 opacity-60",
                              activeMega === item.mega ? "rotate-180" : "",
                            ].join(" ")}
                          />
                        )}
                        {/* Active indicator */}
                        {active && (
                          <span
                            className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.85)",
                              boxShadow: "0 0 8px rgba(255,255,255,0.4)",
                            }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ── RIGHT ── */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Search */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className={[
                  "inline-flex h-11 w-11 sm:h-9.5 sm:w-9.5 items-center justify-center rounded-full transition-colors duration-200",
                  dark ? "text-white hover:text-white/70" : "text-black hover:text-black/60",
                ].join(" ")}
              >
                <SearchIcon className="h-5 w-5" />
              </button>

              {/* Call */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCallOpen((v) => !v)}
                  aria-label="Call us"
                  aria-expanded={callOpen}
                  aria-haspopup="true"
                  className={[
                    "inline-flex h-11 w-11 sm:h-9.5 sm:w-9.5 items-center justify-center rounded-full transition-colors duration-200",
                    dark ? "text-white hover:text-white/70" : "text-black hover:text-black/60",
                  ].join(" ")}
                >
                  <CallIcon className="h-5 w-5" />
                </button>

                {callOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setCallOpen(false)} />
                    <div className="absolute right-0 top-full mt-3 w-72 rounded-md bg-white p-3.5 shadow-2xl z-50">
                      <p className="text-black text-[14px] font-bold mb-2">Talk to a sales advisor</p>
                      <a
                        href="tel:+919645760023"
                        className="flex items-center gap-1.5 text-[#3b5bff] font-bold text-[14px] mb-3"
                      >
                        <CallIcon className="h-3.5 w-3.5" />
                        +91 96457 60023
                      </a>
                      <a
                        href="/contact"
                        className="flex items-center gap-2.5 rounded-md bg-[#eef1ff] px-3 py-2 hover:bg-[#e4e9ff] transition-colors"
                      >
                        <HeadsetIcon className="h-4 w-4 text-black shrink-0" />
                        <span className="flex-1 text-black text-[12.5px] font-bold">Request a call back</span>
                        <FaArrowRight aria-hidden="true" className="text-black text-[13px] shrink-0" />
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Bookmark */}
              <button
                type="button"
                aria-label="Save"
                className={[
                  "hidden lg:inline-flex h-9.5 w-9.5 items-center justify-center rounded-full transition-colors duration-200",
                  dark ? "text-white hover:text-white/70" : "text-black hover:text-black/60",
                ].join(" ")}
              >
                <BookmarkIcon className="h-5 w-5" />
              </button>

              {/* Menu lines */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className={[
                  "hidden lg:inline-flex h-9.5 w-9.5 items-center justify-center rounded-full transition-colors duration-200",
                  dark ? "text-white hover:text-white/70" : "text-black hover:text-black/60",
                ].join(" ")}
              >
                <LineMenuIcon className="h-5 w-5" />
              </button>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className={[
                  "lg:hidden -mr-2.5 inline-flex h-11 w-11 items-center justify-center transition-opacity duration-200 active:opacity-60",
                  dark ? "text-white hover:opacity-75" : "text-black hover:opacity-70",
                ].join(" ")}
              >
                <MenuToggleIcon open={open} />
              </button>
            </div>

              </>
            )}

          </div>
        </div>

        {/* ── MEGA MENU ── */}
        <div
          className={[
            "hidden lg:block absolute left-0 right-0 top-full overflow-hidden",
            "transition-all duration-200 ease-out origin-top",
            activeMega === "services"
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-90 invisible pointer-events-none",
          ].join(" ")}
          style={{
            background: "rgba(6,6,6,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          onMouseEnter={() => openMega("services")}
          onMouseLeave={delayClose}
          onKeyDown={(e) => e.key === "Escape" && closeNow()}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) closeNow();
          }}
        >
          <div className="mx-auto max-w-375 px-14">
            <div className="py-9 border-t border-white/6 grid grid-cols-[1fr_160px] gap-10 items-start">
              <div className="grid grid-cols-6 gap-8">
                {servicesCols.map((col) => (
                  <div key={col.title}>
                    <p className="mb-3.5 text-[9.5px] font-bold tracking-[0.22em] text-white/55 uppercase">
                      {col.href ? (
                        <Link href={col.href} onClick={closeNow} className="hover:text-white transition-colors duration-150">
                          {col.title}
                        </Link>
                      ) : (
                        col.title
                      )}
                    </p>
                    <ul className="space-y-2.5">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            onClick={closeNow}
                            className="group/ml flex items-center gap-1.5 text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-150"
                          >
                            <span className="w-0 h-px bg-white/60 group-hover/ml:w-3 transition-all duration-200 inline-block shrink-0" />
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 pl-8 border-l border-white/6">
                <p className="text-[12px] text-white/55 leading-relaxed">
                  Not sure which service fits?
                </p>
                <Link
                  href="/contact"
                  onClick={closeNow}
                  className="inline-flex items-center justify-center h-9 px-4 bg-white text-black text-[11.5px] font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Talk to us <FiArrowUpRight aria-hidden="true" className="inline text-[12px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════
          MOBILE MENU — frosted-glass sheet (Apple style)
          • Glass: translucent black + backdrop blur, fills the screen under the header
          • 3D entrance: the sheet tilts forward into place in perspective, rows cascade in
          • Large sentence-case items; current page sits in a soft glass pill
          • SERVICES opens iOS-style grouped cards; each group lists its pages with › chevrons
      ════════════════════════════════════ */}
      <nav
        id="mobile-menu"
        ref={closeBtnRef}
        tabIndex={-1}
        data-open={open ? "" : undefined}
        aria-label="Mobile"
        inert={!open}
        className={[
          "fixed inset-x-0 top-[68px] z-40 lg:hidden outline-none",
          "h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain",
          "origin-top transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
          open
            ? "opacity-100 [transform:perspective(1400px)_rotateX(0deg)_translateY(0)_scale(1)]"
            : "pointer-events-none opacity-0 [transform:perspective(1400px)_rotateX(-9deg)_translateY(-18px)_scale(0.97)]",
        ].join(" ")}
        style={{
          background: "rgba(12,12,14,0.88)",
          backdropFilter: "blur(30px) saturate(160%)",
          WebkitBackdropFilter: "blur(30px) saturate(160%)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <ul className="px-3 pt-4 pb-12 space-y-1">
          {MOBILE_ORDER.map((label) => nav.find((n) => n.label === label)).filter(Boolean).map((item, idx) => {
            const active = isActive(item.href);
            const row = "flex items-center justify-between w-full min-h-[56px] px-4 rounded-2xl text-[22px] font-semibold tracking-[-0.02em] transition-[background-color,color,transform] duration-200 active:scale-[0.985]";
            if (item.mega) {
              return (
                <li key={item.label} className="menu-row" style={{ "--i": idx }}>
                  <details className="group/svc">
                    <summary className={`${row} cursor-pointer list-none [&::-webkit-details-marker]:hidden text-white/80 hover:text-white active:bg-white/[0.06] group-open/svc:text-white`}>
                      {item.label}
                      <ChevronDown className="h-5 w-5 text-white/45 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-open/svc:rotate-180" />
                    </summary>
                    <div className="px-1 pt-1 pb-2 space-y-2">
                      {servicesCols.map((col) => (
                        <details
                          key={col.title}
                          className="group/col rounded-2xl overflow-hidden border border-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_10px_30px_-12px_rgba(0,0,0,0.6)]"
                          style={{ background: "rgba(255,255,255,0.05)" }}
                        >
                          <summary className="flex items-center justify-between min-h-[52px] px-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[16.5px] font-medium text-white/90 active:bg-white/[0.05]">
                            {col.title}
                            <ChevronDown className="h-4 w-4 text-white/40 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-open/col:rotate-180" />
                          </summary>
                          <ul className="border-t border-white/[0.07] divide-y divide-white/[0.06]">
                            {col.href && (
                              <li>
                                <Link href={col.href} onClick={() => setOpen(false)}
                                  className={`flex items-center justify-between min-h-[48px] px-4 text-[15.5px] font-medium active:bg-white/[0.05] ${isActive(col.href) ? "text-white" : "text-white/85"}`}>
                                  All {col.title} services
                                  <ChevronRight className="h-3.5 w-3.5 text-white/30" />
                                </Link>
                              </li>
                            )}
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link href={l.href} onClick={() => setOpen(false)}
                                  aria-current={isActive(l.href) ? "page" : undefined}
                                  className={`flex items-center justify-between min-h-[48px] px-4 text-[15.5px] active:bg-white/[0.05] ${isActive(l.href) ? "text-white" : "text-white/65 hover:text-white"}`}>
                                  <span className="flex items-center gap-2.5">
                                    {isActive(l.href) && <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />}
                                    {l.label}
                                  </span>
                                  <ChevronRight className="h-3.5 w-3.5 text-white/30" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </details>
                </li>
              );
            }
            return (
              <li key={item.label} className="menu-row" style={{ "--i": idx }}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`${row} ${active ? "text-white bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" : "text-white/80 hover:text-white active:bg-white/[0.06]"}`}
                >
                  {item.label === "About" ? "About Us" : item.label}
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

/* Phone menu order (desktop header keeps its own order) */
const MOBILE_ORDER = ["Home", "About", "Services", "Works", "Clients", "Contact"];

/* ── Icons ──────────────────────────────────────── */
function CallIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.5 2.5.8 3.8.9.6 0 1 .5.9 1.1l-.4 3a1 1 0 0 1-1 .8C10.7 21.3 2.7 13.3 2.3 4.3a1 1 0 0 1 .8-1l3-.4c.6-.1 1.1.3 1.1.9.1 1.3.4 2.6.9 3.8.2.3.1.7-.2 1L6.6 10.8z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 4h12v17l-6-4.2L6 21V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineMenuIcon({ className }) {
  return (
    <svg viewBox="0 0 20 14" fill="none" className={className} aria-hidden="true">
      <path d="M1 4h18M1 10h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeadsetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 13v-1a8 8 0 1 1 16 0v1M4 13a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4zm16 0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1zm-1 6v.5a2.5 2.5 0 0 1-2.5 2.5H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Apple-style two-line menu icon: lines glide together and rotate into an ✕ */
function MenuToggleIcon({ open }) {
  const line = "absolute left-0 right-0 h-[1.6px] rounded-full bg-current transition-[top,transform] duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)]";
  return (
    <span className="relative block w-[19px] h-[13px]" aria-hidden="true">
      <span className={`${line} ${open ? "top-[5.7px] rotate-45" : "top-[2px]"}`} />
      <span className={`${line} ${open ? "top-[5.7px] -rotate-45" : "top-[9.4px]"}`} />
    </span>
  );
}

function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
