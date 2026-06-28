"use client";

import { useState } from "react";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const actions = [
  { href: "tel:+919645760023", label: "Phone", Icon: IoMdCall },
  { href: "https://wa.me/919645760023", label: "WhatsApp", Icon: FaWhatsapp },
];

export default function RightQuickActions() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">
      <button
        onClick={() => setOpen((v) => !v)}
        className="size-9 grid place-items-center bg-black text-white border-b border-white/10"
      >
        <FaChevronRight className={`transition-transform text-[11px] ${open || "rotate-180"}`} />
      </button>

      <div className={`origin-top transition ${open || "scale-y-0 opacity-0 pointer-events-none"}`}>
        {actions.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            className="group relative grid size-9 place-items-center bg-black text-white border-b border-white/10"
            {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
          >
            <Icon className="size-4" />
            <span className="absolute right-full h-full w-24 px-3 flex items-center bg-black text-sm font-medium shadow-lg translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}