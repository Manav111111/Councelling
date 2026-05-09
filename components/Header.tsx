"use client";

import { Bell, GraduationCap, LogIn, Menu, Moon, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/components/AuthProvider";

const nav = [
  { href: "/predict", label: "Predict" },
  { href: "/colleges", label: "Colleges" },
  { href: "/mentors", label: "Mentors" },
  { href: "/guide", label: "Guide" },
  { href: "/tools/compare", label: "Tools" },
  { href: "/blog", label: "Blog" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-black text-ipu-blue">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ipu-blue text-white">
            <GraduationCap size={22} />
          </span>
          <span className="leading-tight">
            IPU Counselling
            <span className="block text-xs font-semibold text-ipu-sky">Hub</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-ipu-mist hover:text-ipu-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <button aria-label="Toggle dark mode" className="rounded-md border border-blue-100 p-2 text-slate-600">
            <Moon size={18} />
          </button>
          <button aria-label="Notifications" className="rounded-md border border-blue-100 p-2 text-slate-600">
            <Bell size={18} />
          </button>
          {user ? (
            <>
              <Link href="/dashboard" className="rounded-md bg-ipu-blue px-4 py-2 text-sm font-bold text-white">
                Dashboard
              </Link>
              <button onClick={() => signOut(auth)} className="rounded-md border border-blue-100 px-3 py-2 text-sm font-semibold">
                Sign out
              </button>
            </>
          ) : (
            <Link href="/dashboard" className="flex items-center gap-2 rounded-md bg-ipu-blue px-4 py-2 text-sm font-bold text-white">
              <LogIn size={17} /> Login
            </Link>
          )}
        </div>
        <button aria-label="Open menu" onClick={() => setOpen((value) => !value)} className="rounded-md border border-blue-100 p-2 md:hidden">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="border-t border-blue-100 bg-white px-4 py-3 md:hidden">
          <div className="grid gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold text-slate-700 hover:bg-ipu-mist">
                {item.label}
              </Link>
            ))}
            <Link href="/dashboard" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-md bg-ipu-blue px-4 py-3 font-bold text-white">
              <UserRound size={18} /> Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
