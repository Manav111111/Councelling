import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-ipu-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">IPU Counselling Hub</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
            Rank predictions, mentor clarity, college comparisons, and counselling reminders for GGSIPU aspirants.
          </p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-3 grid gap-2 text-sm text-blue-100">
            <Link href="/predict">Rank Predictor</Link>
            <Link href="/colleges">College Directory</Link>
            <Link href="/mentors">Mentors</Link>
            <Link href="/guide">Counselling Guide</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Tools</p>
          <div className="mt-3 grid gap-2 text-sm text-blue-100">
            <Link href="/tools/compare">Compare Colleges</Link>
            <Link href="/tools/choice-simulator">Choice Simulator</Link>
            <Link href="/tools/checklist">Checklist Generator</Link>
            <Link href="/admin">Admin Panel</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
