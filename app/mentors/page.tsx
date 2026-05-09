"use client";

import { useMemo, useState } from "react";
import { MentorCard } from "@/components/MentorCard";
import { mentors } from "@/lib/sample-data";

export default function MentorsPage() {
  const [college, setCollege] = useState("All");
  const [branch, setBranch] = useState("All");
  const filtered = useMemo(
    () => mentors.filter((mentor) => (college === "All" || mentor.college === college) && (branch === "All" || mentor.branch === branch)),
    [branch, college]
  );

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Mentor Profiles</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">Meet seniors who have done it</h1>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <select value={college} onChange={(event) => setCollege(event.target.value)} className="rounded-md border border-blue-100 px-3 py-3">
              {["All", ...Array.from(new Set(mentors.map((mentor) => mentor.college)))].map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={branch} onChange={(event) => setBranch(event.target.value)} className="rounded-md border border-blue-100 px-3 py-3">
              {["All", "CSE", "IT", "ECE", "Law", "BBA"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}
        </div>
      </div>
    </section>
  );
}
