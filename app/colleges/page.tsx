"use client";

import { Filter, MapPin, Search, TrendingUp, IndianRupee, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { collegesData } from "@/lib/college-data";

const allBranches = ["All", "CSE", "IT", "ECE", "EEE", "ME", "AI", "Data Science", "Law", "BBA", "Robotics & Automation"];

export default function CollegesPage() {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("All");
  const [type, setType] = useState<"All" | "government" | "private">("All");

  const filtered = useMemo(
    () =>
      collegesData.filter((c) => {
        const textMatch = `${c.fullName} ${c.shortName} ${c.location}`.toLowerCase().includes(query.toLowerCase());
        const branchMatch = branch === "All" || c.branches.some((b) => b.toLowerCase().includes(branch.toLowerCase()));
        const typeMatch = type === "All" || c.type === type;
        return textMatch && branchMatch && typeMatch;
      }),
    [branch, query, type]
  );

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-ipu-blue/10 px-4 py-2 text-sm font-bold text-ipu-blue">
            <Building2 size={16} /> GGSIPU College Directory
          </span>
          <h1 className="mt-4 text-4xl font-black text-ipu-ink md:text-5xl">Explore IPU Colleges</h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">Real data on fees, placements, branches, and admission for all major GGSIPU colleges.</p>
        </div>

        {/* Filters */}
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm mb-8">
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="relative">
              <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search college name..."
                className="w-full rounded-xl border border-blue-100 bg-slate-50 py-3 pl-10 pr-3 text-sm focus:border-ipu-blue focus:outline-none"
              />
            </label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="rounded-xl border border-blue-100 bg-slate-50 px-3 py-3 text-sm font-medium focus:border-ipu-blue focus:outline-none"
            >
              {allBranches.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "All" | "government" | "private")}
              className="rounded-xl border border-blue-100 bg-slate-50 px-3 py-3 text-sm font-medium focus:border-ipu-blue focus:outline-none"
            >
              <option value="All">All Types</option>
              <option value="government">Government</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Filter size={14} className="text-ipu-blue" />
            <span className="text-sm font-semibold text-ipu-blue">Showing {filtered.length} colleges</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((college) => (
            <Link
              key={college.slug}
              href={`/colleges/${college.slug}`}
              className="group overflow-hidden rounded-2xl border border-blue-50 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={college.image} alt={college.fullName} fill loading="lazy" className="object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-black ${
                  college.type === "government" ? "bg-green-500 text-white" : "bg-white text-ipu-blue"
                }`}>
                  {college.type === "government" ? "🏛️ Government" : "🏫 Private"}
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xl font-black text-white">{college.shortName}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-slate-600 line-clamp-1">{college.fullName}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {college.branches.slice(0, 4).map((b) => (
                    <span key={b} className="rounded-md bg-ipu-mist px-2 py-0.5 text-xs font-bold text-ipu-blue">{b}</span>
                  ))}
                  {college.branches.length > 4 && (
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-500">+{college.branches.length - 4}</span>
                  )}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-xs">
                  <div className="text-center">
                    <p className="font-black text-ipu-blue text-sm">{college.placements.avgPackageLpa} LPA</p>
                    <p className="text-slate-500 mt-0.5">Avg Package</p>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <p className="font-black text-ipu-blue text-sm">{college.placements.placementPercent}%</p>
                    <p className="text-slate-500 mt-0.5">Placed</p>
                  </div>
                  <div className="text-center">
                    <p className="font-black text-ipu-blue text-sm">₹{(college.fees.annualTuition / 1000).toFixed(0)}K</p>
                    <p className="text-slate-500 mt-0.5">Per Year</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={12} />
                  <span className="line-clamp-1">{college.location.split(",").slice(-2).join(",").trim()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
