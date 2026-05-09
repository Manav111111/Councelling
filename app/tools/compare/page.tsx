"use client";

import { Bot, GitCompare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toaster";
import { colleges } from "@/lib/sample-data";

export default function ComparePage() {
  const [selected, setSelected] = useState(["mait", "msit", "usict"]);
  const { toast } = useToast();
  const picked = selected.map((slug) => colleges.find((college) => college.slug === slug)).filter(Boolean);

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">College Comparison</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Compare up to 3 colleges</h1>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <select key={index} value={selected[index] ?? ""} onChange={(event) => setSelected((items) => items.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} className="rounded-md border border-blue-100 px-3 py-3">
              {colleges.map((college) => <option key={college.slug} value={college.slug}>{college.shortName}</option>)}
            </select>
          ))}
        </div>
        <div className="mt-6 overflow-x-auto rounded-lg border border-blue-100 bg-white shadow-sm">
          <table className="w-full min-w-[760px] text-left text-sm">
            <tbody>
              {["name", "averageFees", "topBranches", "placementPercent", "averagePackage", "location"].map((field) => (
                <tr key={field} className="border-t border-blue-50 first:border-t-0">
                  <th className="bg-ipu-mist px-4 py-4 font-black text-ipu-blue">{field}</th>
                  {picked.map((college) => <td key={college!.slug} className="px-4 py-4 font-semibold">{Array.isArray((college as any)[field]) ? (college as any)[field].join(", ") : (college as any)[field]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button onClick={() => toast("AI says: USICT is strongest for placements; MAIT/MSIT balance commute and CS availability well.")} className="mt-6">
          <Bot size={18} /> Which is better for me?
        </Button>
      </div>
    </section>
  );
}
