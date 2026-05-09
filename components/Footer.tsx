import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-ipu-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ipu-sky/20 text-ipu-sky">
              <GraduationCap size={20} />
            </span>
            <p className="text-xl font-black">IPU Counselling Hub</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-blue-200">
            Rank predictions, mentor clarity, college comparisons, and counselling guidance for GGSIPU aspirants. Made with ❤️ for students.
          </p>
          <p className="mt-4 text-xs text-blue-300">© 2026 IPU Counselling Hub. Not affiliated with GGSIPU officially.</p>
        </div>
        <div>
          <p className="font-bold text-white">Explore</p>
          <div className="mt-4 grid gap-2.5 text-sm text-blue-200">
            <Link href="/predict" className="hover:text-white transition">Rank Predictor</Link>
            <Link href="/colleges" className="hover:text-white transition">College Directory</Link>
            <Link href="/mentors" className="hover:text-white transition">Mentors</Link>
            <Link href="/guide" className="hover:text-white transition">Counselling Guide</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Quick Links</p>
          <div className="mt-4 grid gap-2.5 text-sm text-blue-200">
            <Link href="/premium" className="hover:text-white transition">Premium Batch</Link>
            <a href="https://chat.whatsapp.com/Lff2bHCTdrSLUbxLjyOxQ2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp Community</a>
            <Link href="/about" className="hover:text-white transition">About Us</Link>
            <Link href="/admin" className="hover:text-white transition">Admin Panel</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4">
        <p className="mx-auto max-w-7xl text-center text-xs text-blue-300">
          WhatsApp: +91 7827465966 · <a href="https://chat.whatsapp.com/Lff2bHCTdrSLUbxLjyOxQ2" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Join Community</a> · Data sourced from official GGSIPU notifications and college placement reports.
        </p>
      </div>
    </footer>
  );
}
