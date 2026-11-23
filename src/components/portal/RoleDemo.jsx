"use client";

import { useState } from "react";
import { FaUserShield, FaStore, FaUserTie, FaUserInjured, FaBell, FaFileInvoice, FaBoxes, FaCalendarCheck, FaFlask, FaCheckCircle, FaClock } from "react-icons/fa";
import { track } from "@/components/comparison/Interactive";

/*
 * Role-switching demo dashboard for /web-portal-development.
 * Shows the core idea of a portal: the same system, different data and tools
 * per user role. All figures are SAMPLE data, labelled as a demo.
 */

const ROLES = [
  {
    id: "admin", label: "Admin", Icon: FaUserShield, user: "Operations Admin",
    stats: [["Active users", "1,248"], ["Pending approvals", "7"], ["Open tickets", "12"]],
    list: { title: "Approvals waiting", Icon: FaClock, rows: [["New dealer: Al Noor Trading", "Approve"], ["Credit limit increase: KM Distributors", "Review"], ["Leave request: 3 employees", "Review"]] },
  },
  {
    id: "dealer", label: "Dealer", Icon: FaStore, user: "KM Distributors",
    stats: [["Your price tier", "Gold"], ["Credit available", "₹2,40,000"], ["Orders this month", "18"]],
    list: { title: "Recent orders", Icon: FaBoxes, rows: [["#ORD-2291 · 40 units", "Dispatched"], ["#ORD-2287 · 120 units", "Packed"], ["#ORD-2270 · 15 units", "Delivered"]] },
  },
  {
    id: "employee", label: "Employee", Icon: FaUserTie, user: "Anjali R.",
    stats: [["Leave balance", "9 days"], ["This month", "21 / 22 days"], ["Payslip", "Ready"]],
    list: { title: "Your requests", Icon: FaFileInvoice, rows: [["Leave · 24–25 Nov", "Approved"], ["Travel claim · ₹3,200", "In review"], ["Laptop request", "Approved"]] },
  },
  {
    id: "patient", label: "Patient", Icon: FaUserInjured, user: "Mohammed K.",
    stats: [["Next appointment", "Mon, 10:30"], ["New reports", "2"], ["Prescriptions", "1 active"]],
    list: { title: "Lab reports", Icon: FaFlask, rows: [["Blood panel · 18 Nov", "Ready"], ["Lipid profile · 18 Nov", "Ready"], ["Follow-up booking", "Confirmed"]] },
  },
];

const BADGE = {
  Approve: "bg-black text-white", Review: "bg-amber-100 text-amber-800", Dispatched: "bg-sky-100 text-sky-800",
  Packed: "bg-black/5 text-black/70", Delivered: "bg-emerald-100 text-emerald-800", Approved: "bg-emerald-100 text-emerald-800",
  "In review": "bg-amber-100 text-amber-800", Ready: "bg-emerald-100 text-emerald-800", Confirmed: "bg-emerald-100 text-emerald-800",
};

export default function RoleDemo() {
  const [roleId, setRoleId] = useState("dealer");
  const role = ROLES.find((r) => r.id === roleId);
  const ListIcon = role.list.Icon;

  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/10 bg-white text-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
      role="region"
      aria-label="Custom web portal dashboard with role-based views for admin, dealer, employee and patient users (demo)"
    >
      {/* top bar */}
      <div className="flex items-center gap-2 px-4 h-10 bg-[#f3f3f3] border-b border-black/8">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[12px] text-black/60 truncate">portal.yourcompany.com/dashboard</span>
        <span className="ml-auto text-[10px] font-bold tracking-[0.18em] uppercase text-black/60">Demo</span>
      </div>

      {/* role switcher */}
      <div className="px-4 sm:px-6 pt-5 flex flex-wrap items-center gap-2" role="tablist" aria-label="View the portal as">
        <span className="text-[12px] text-black/60 mr-1">View as:</span>
        {ROLES.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={roleId === id}
            onClick={() => { setRoleId(id); track("portal_demo_role", { role: id }); }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12.5px] border transition-colors ${roleId === id ? "bg-black text-white border-black" : "border-black/15 text-black/70 hover:border-black/40"}`}
          >
            <Icon aria-hidden="true" className="text-[11px]" /> {label}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-6" role="tabpanel">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div>
            <p className="text-[12px] text-black/60">Welcome back</p>
            <p className="text-[17px] font-semibold">{role.user}</p>
          </div>
          <span className="relative w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-black/60">
            <FaBell aria-hidden="true" className="text-[13px]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {role.stats.map(([k, v]) => (
            <div key={k} className="rounded-xl bg-[#f6f6f6] p-3 sm:p-4">
              <p className="text-[10.5px] sm:text-[11.5px] text-black/60 leading-tight">{k}</p>
              <p className="mt-1.5 text-[15px] sm:text-[20px] font-semibold tabular-nums leading-tight">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-black/8">
          <p className="flex items-center gap-2 px-4 py-3 border-b border-black/8 text-[13px] font-semibold">
            <ListIcon aria-hidden="true" className="text-black/60" /> {role.list.title}
          </p>
          <ul>
            {role.list.rows.map(([t, s]) => (
              <li key={t} className="flex items-center justify-between gap-3 px-4 py-3 border-b last:border-b-0 border-black/6 text-[13px]">
                <span className="flex items-center gap-2 min-w-0">
                  {roleId === "patient" ? <FaCalendarCheck aria-hidden="true" className="shrink-0 text-black/60" /> : <FaCheckCircle aria-hidden="true" className="shrink-0 text-black/25" />}
                  <span className="truncate">{t}</span>
                </span>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${BADGE[s] || "bg-black/5"}`}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
