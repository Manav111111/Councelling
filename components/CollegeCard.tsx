import { MapPin, IndianRupee, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { College } from "@/lib/types";

export function CollegeCard({ college }: { college: College }) {
  return (
    <Link href={`/colleges/${college.slug}`} className="group overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
      <div className="relative h-44">
        <Image src={college.image} alt={college.name} fill className="object-cover" />
        <span className="absolute left-3 top-3 rounded-md bg-white/92 px-2 py-1 text-xs font-black text-ipu-blue">
          {college.type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-black text-ipu-ink group-hover:text-ipu-blue">{college.shortName}</h3>
        <p className="mt-1 line-clamp-2 min-h-10 text-sm font-medium text-slate-600">{college.name}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {college.topBranches.map((branch) => (
            <span key={branch} className="rounded-md bg-ipu-mist px-2 py-1 text-xs font-bold text-ipu-blue">
              {branch}
            </span>
          ))}
        </div>
        <div className="mt-4 grid gap-2 text-sm text-slate-600">
          <span className="flex items-center gap-2"><MapPin size={16} /> {college.location}</span>
          <span className="flex items-center gap-2"><IndianRupee size={16} /> {college.averageFees.toLocaleString("en-IN")}/yr avg</span>
          <span className="flex items-center gap-2"><TrendingUp size={16} /> {college.placementPercent}% placements</span>
        </div>
      </div>
    </Link>
  );
}
