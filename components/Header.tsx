"use client";

import { GraduationCap, LogIn, Menu, UserRound, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

const nav = [
  { href: "/colleges", label: "Colleges" },
  { href: "/predict", label: "Predictions" },
  { href: "/mentors", label: "Mentor" },
  { href: "/guide", label: "Guide" },
  { href: "/premium", label: "Premium", highlight: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 font-black text-ipu-blue">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-ipu-blue to-ipu-sky text-white shadow-md">
            <GraduationCap size={22} />
          </span>
          <span className="leading-tight">
            IPU Counselling
            <span className="block text-xs font-semibold text-ipu-sky">Hub</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                item.highlight
                  ? "bg-gradient-to-r from-ipu-blue to-ipu-sky text-white shadow-sm hover:shadow-md"
                  : "text-slate-700 hover:bg-ipu-mist hover:text-ipu-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://wa.me/917827465966?text=Hi,%20I%20want%20to%20join%20the%20community"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-sm font-bold text-green-600 transition hover:bg-green-100 mr-2"
          >
            <MessageCircle size={16} /> WhatsApp Community
          </a>
          {user ? (
            <>
              <Link href="/dashboard" className="rounded-lg bg-ipu-blue px-4 py-2 text-sm font-bold text-white hover:bg-blue-800 transition">
                Dashboard
              </Link>
              <button onClick={async () => { const { signOut } = await import("firebase/auth"); const { getFirebaseAuth } = await import("@/lib/firebase"); await signOut(getFirebaseAuth()); }} className="rounded-lg border border-blue-100 px-3 py-2 text-sm font-semibold hover:bg-slate-50 transition">
                Sign out
              </button>
            </>
          ) : (
            <Link href="/dashboard" className="flex items-center gap-2 rounded-lg bg-ipu-blue px-4 py-2 text-sm font-bold text-white hover:bg-blue-800 transition">
              <LogIn size={17} /> Login
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
