"use client";

import { useState } from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const actions = [
  { href: "tel:+919645760023", label: "Phone", Icon: IoMdCall },
  { href: "https://wa.me/919645760023", label: "WhatsApp", Icon: FaWhatsapp },
];

/*
 * Right-edge quick contact rail.
 * - Desktop: open by default (unchanged).
 * - Phones/tablets: starts collapsed to a small tab so it never sits on top of
 *   paragraph text; one tap opens it. Done with responsive classes rather than
 *   reading the screen size in JS, so server and client render the same markup.
 * - Hidden entirely on pages that show the mobile bottom bar (globals.css,
 *   html[data-sticky-cta] .quick-rail), which already offers WhatsApp.
 * open: null = default for the screen size, true/false = the visitor chose.
 */
export default function RightQuickActions() {
  const [open, setOpen] = useState(null);

  const toggle = () =>
    setOpen((v) => (v === null ? !window.matchMedia("(min-width: 1024px)").matches : !v));

  const hidden = "scale-y-0 opacity-0 pointer-events-none invisible";
  const panelState =
    open === true ? "" : open === false ? hidden : "max-lg:scale-y-0 max-lg:opacity-0 max-lg:pointer-events-none max-lg:invisible";
  const chevronState = open === true ? "" : open === false ? "rotate-180" : "max-lg:rotate-180";

  return (
    <div className="quick-rail fixed right-0 top-1/2 z-50 -translate-y-1/2">
      <button
        onClick={toggle}
        aria-label="Show or hide quick contact actions"
        aria-expanded={open === null ? undefined : open}
        className="size-11 sm:size-9 grid place-items-center bg-black text-white border-b border-white/10"
      >
        <FaArrowRight aria-hidden="true" className={`transition-transform text-[15px] sm:text-[12px] ${chevronState}`} />
      </button>

      <div className={`origin-top transition ${panelState}`}>
        {actions.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="group relative grid size-11 sm:size-9 place-items-center bg-black text-white border-b border-white/10"
            {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
          >
            <Icon aria-hidden="true" className="size-4" />
            <span className="absolute right-full h-full w-24 px-3 flex items-center bg-black text-sm font-medium shadow-lg translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none whitespace-nowrap" aria-hidden="true">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
