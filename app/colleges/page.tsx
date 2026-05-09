"use client";

import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CollegeCard } from "@/components/CollegeCard";
import { colleges } from "@/lib/sample-data";

export default function CollegesPage() {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(
    () =>
      colleges.filter((college) => {
        const textMatch = `${college.name} ${college.location}`.toLowerCase().includes(query.toLowerCase());
        const branchMatch = branch === "All" || college.topBranches.includes(branch as never);
        const typeMatch = type === "All" || college.type === type;
        return textMatch && branchMatch && typeMatch;
      }),
    [branch, query, type]
  );

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">College Directory</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">Explore IPU colleges</h1>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <label className="relative">
              <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name or location" className="w-full rounded-md border border-blue-100 py-3 pl-10 pr-3" />
            </label>
            <select value={branch} onChange={(event) => setBranch(event.target.value)} className="rounded-md border border-blue-100 px-3 py-3">
              {["All", "CSE", "IT", "ECE", "ME", "Civil", "MBA", "Law", "BBA"].map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={type} onChange={(event) => setType(event.target.value)} className="rounded-md border border-blue-100 px-3 py-3">
              {["All", "Private", "Government"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold text-ipu-blue">
          <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2"><Filter size={16} /> Fees, placement and branch filters ready</span>
          <span className="rounded-md bg-white px-3 py-2">Showing {filtered.length} colleges</span>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((college) => <CollegeCard key={college.slug} college={college} />)}
        </div>
      </div>
    </section>
  );
}
