"use client";

import { GraduationCap, LogIn, Menu, UserRound, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

const nav = [
  { href: "/round1-cutoffs", label: "⚡ Round 1 Cutoffs" },
  { href: "/colleges", label: "Colleges" },
  { href: "/predict", label: "B.Tech Predictor" },
  { href: "/cet-predict", label: "CET Predictor" },
  { href: "/mentors", label: "Mentor" },
  { href: "/guide", label: "Guide" },
  { href: "/premium", label: "Premium", highlight: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-3 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-black text-ipu-blue shrink-0 mr-2">
          <span className="grid h-9 w-9 lg:h-10 lg:w-10 place-items-center rounded-xl bg-gradient-to-br from-ipu-blue to-ipu-sky text-white shadow-md">
            <GraduationCap size={20} />
          </span>
          <span className="leading-tight text-sm lg:text-base">
            IPU Counselling
            <span className="block text-[10px] lg:text-xs font-semibold text-ipu-sky">Hub</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:gap-1.5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-2.5 lg:px-3.5 py-1.5 lg:py-2 text-xs lg:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                item.highlight
                  ? "bg-gradient-to-r from-ipu-blue to-ipu-sky text-white shadow-sm hover:shadow-md"
                  : item.href === "/round1-cutoffs"
                  ? "bg-amber-50 text-amber-900 border border-amber-200/60 hover:bg-amber-100/80 shadow-2xs font-extrabold"
                  : "text-slate-800 hover:bg-blue-50 hover:text-ipu-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex shrink-0">
          <a
            href="https://wa.me/917827465966?text=Hi,%20I%20want%20to%20join%20the%20community"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-green-50 px-2.5 lg:px-3.5 py-1.5 lg:py-2 text-xs lg:text-sm font-extrabold text-green-700 border border-green-200/60 transition hover:bg-green-100 whitespace-nowrap"
          >
            <MessageCircle size={15} /> WhatsApp Community
          </a>
          {user ? (
            <>
              <Link href="/dashboard" className="rounded-lg bg-ipu-blue px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-bold text-white hover:bg-blue-800 transition whitespace-nowrap">
                Dashboard
              </Link>
              <button onClick={async () => { const { signOut } = await import("firebase/auth"); const { getFirebaseAuth } = await import("@/lib/firebase"); await signOut(getFirebaseAuth()); }} className="rounded-lg border border-blue-100 px-2.5 lg:px-3 py-1.5 lg:py-2 text-xs lg:text-sm font-bold hover:bg-slate-50 transition whitespace-nowrap">
                Sign out
              </button>
            </>
          ) : (
            <Link href="/dashboard" className="flex items-center gap-1.5 rounded-lg bg-ipu-blue px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-bold text-white hover:bg-blue-800 transition shadow-sm whitespace-nowrap">
              <LogIn size={16} /> Login
            </Link>
          )}
        </div>
        <button aria-label="Open menu" onClick={() => setOpen((v) => !v)} className="rounded-lg border border-blue-100 p-2 md:hidden">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="border-t border-blue-100 bg-white px-4 py-3 md:hidden shadow-lg">
          <div className="grid gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 font-semibold transition ${
                  item.highlight ? "bg-ipu-blue text-white" : "text-slate-700 hover:bg-ipu-mist"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/dashboard" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-ipu-blue px-4 py-3 font-bold text-white">
              <UserRound size={18} /> Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
