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
      { label: "Clients",   href: "/#clients" },
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
    if (open) setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => { document.body.style.overflow = ""; };
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
     there are no standalone /services/* pages on this site. */
  const servicesCols = useMemo(() => [
    {
      title: "Mobile App",
      links: [
        { label: "Flutter Development", href: "/#our-services" },
        { label: "iOS Development",      href: "/#our-services" },
        { label: "Android Development",  href: "/#our-services" },
        { label: "Native Development",   href: "/#our-services" },
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
                <Link href="/" className="inline-flex items-center gap-2 shrink-0 select-none">
                  <Image
                    src="/icons/ivoniz-logo1.png"
                    alt=""
                    width={38}
                    height={38}
                    style={{ objectFit: "contain", filter: "invert(1)" }}
                  />
                  <span
                    className="hidden sm:inline"
                    style={{ fontSize: "19px", fontWeight: 800, letterSpacing: "0.08em", lineHeight: 1, color: "#ffffff" }}
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full shrink-0 text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <CloseIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <>

            {/* ── LOGO ── */}
            <Link href="/" className="inline-flex items-center gap-2 shrink-0 select-none">
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
                  fontSize     : "20px",
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
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className={[
                  "inline-flex h-9.5 w-9.5 items-center justify-center rounded-full transition-colors duration-200",
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
                    "inline-flex h-9.5 w-9.5 items-center justify-center rounded-full transition-colors duration-200",
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

              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="lg:hidden inline-flex items-center h-9 px-4 bg-white text-black text-[12px] font-semibold rounded-full"
                style={{ boxShadow: dark ? "0 2px 12px rgba(255,255,255,0.1)" : "none" }}
              >
                Talk
              </Link>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className={[
                  "lg:hidden inline-flex h-9.5 w-9.5 items-center justify-center rounded-full transition-all duration-200",
                  dark
                    ? "border border-white/18 text-white hover:bg-white/10 hover:border-white/30"
                    : "border border-black/12 text-black hover:bg-black/5",
                ].join(" ")}
              >
                <HamburgerIcon className="h-2.75 w-4.25" />
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
                      {col.title}
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

      {/* ── OVERLAY ── */}
      <div
        className={[
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════ */}
      <aside
        className={[
          "fixed right-0 top-0 z-60 h-full w-[85%] max-w-90 lg:hidden overflow-hidden",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        style={{ background: "#080808" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        inert={!open}
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-end justify-end pointer-events-none select-none overflow-hidden">
          <span
            className="font-black text-white leading-none tracking-[-0.04em]"
            style={{ fontSize: 130, opacity: 0.025, paddingRight: 10, paddingBottom: 20 }}
          >
            IVONIZ
          </span>
        </div>

        <div className="relative flex h-full flex-col z-10">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-white/[0.07]">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center group"
              style={{ width: 110, height: 30 }}>
              <Image
                src="/icons/ivoniz-logo0.png"
                alt="Ivoniz"
                width={110}
                height={30}
                className="w-full h-full object-contain object-left"
              />
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 text-white/50 hover:text-white hover:border-white/25 transition-colors"
            >
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <ul className="space-y-0.75">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "flex items-center justify-between w-full px-4 py-3.5 rounded-xl transition-all duration-150 group/ml",
                        active ? "bg-white" : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span className={[
                        "text-[13px] font-bold tracking-widest uppercase",
                        active ? "text-black" : "text-white/60 group-hover/ml:text-white transition-colors",
                      ].join(" ")}>
                        {item.label}
                      </span>
                      <FiArrowUpRight aria-hidden="true" className={active ? "text-black/55 text-[13px]" : "text-white/55 text-[13px]"} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Footer */}
          <div className="px-4 py-6 border-t border-white/[0.07]">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full h-11.5 bg-white text-black text-[13px] font-bold tracking-[0.05em] uppercase rounded-full mb-4"
            >
              Get in Touch
            </Link>
            <div className="flex items-center gap-4 text-[11.5px] text-white/55">
              <a href="tel:+919645760023" className="hover:text-white/50 transition-colors">+91 96457 60023</a>
              <span className="w-px h-3 bg-white/10 inline-block" />
              <a href="mailto:info@ivoniz.com" className="hover:text-white/50 transition-colors">info@ivoniz.com</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

/* ── Icons ──────────────────────────────────────── */
function HamburgerIcon({ className }) {
  return (
    <svg viewBox="0 0 20 14" fill="none" className={className} aria-hidden="true">
      <path d="M1 1h18M1 7h11M1 13h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

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
