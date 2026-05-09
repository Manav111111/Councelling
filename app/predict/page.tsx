"use client";

import { AlertTriangle, CheckCircle2, GitCompare, Sparkles, TrendingUp, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { predictByRank, type PredictionResult } from "@/lib/prediction";
import { collegesData, type CollegeData } from "@/lib/college-data";


const STATUS_STYLES: Record<PredictionResult["status"], string> = {
  Safe:     "bg-green-50 text-green-700 border border-green-200",
  Moderate: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  Reach:    "bg-red-50 text-red-700 border border-red-200",
};

const CONFIDENCE_STYLES: Record<PredictionResult["confidence"], string> = {
  High:   "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low:    "bg-red-100 text-red-700",
};

const STATUS_ICONS: Record<PredictionResult["status"], React.ReactNode> = {
  Safe:     <CheckCircle2 size={14} className="inline mr-1" />,
  Moderate: <TrendingUp size={14} className="inline mr-1" />,
  Reach:    <AlertTriangle size={14} className="inline mr-1" />,
};

export default function PredictPage() {
  const [rank, setRank]             = useState<string>("");
  const [region, setRegion]         = useState<"delhi" | "outside">("delhi");
  const [courseType, setCourseType] = useState<"all" | "4yr" | "6yr">("all");
  const [results, setResults]       = useState<PredictionResult[] | null>(null);
  const [compareList, setCompareList] = useState<CollegeData[]>([]);

  function runPrediction() {
    const r = parseInt(rank);
    if (!rank || isNaN(r) || r <= 0) return;
    const res = predictByRank({ rank: r, region, course_type: courseType });
    setResults(res);
  }

  function toggleCompare(collegeName: string) {
    const college = collegesData.find((c) => c.shortName === collegeName || c.code === collegeName);
    if (!college) return;
    setCompareList((prev) =>
      prev.find((c) => c.code === college.code)
        ? prev.filter((c) => c.code !== college.code)
        : prev.length < 3
        ? [...prev, college]
        : prev
    );
  }

  const safeList     = results?.filter((r) => r.status === "Safe")     ?? [];
  const moderateList = results?.filter((r) => r.status === "Moderate") ?? [];
  const reachList    = results?.filter((r) => r.status === "Reach").slice(0, 6) ?? [];


  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-ipu-blue/10 px-4 py-2 text-sm font-bold text-ipu-blue">
            <Sparkles size={16} /> AI Rank Predictor
          </span>
          <h1 className="mt-4 text-4xl font-black text-ipu-ink md:text-5xl">Predict Your IPU College</h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Enter your CET rank and region to see which colleges and branches you are likely to get.
          </p>
        </div>

        {/* Input Card */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-blue-100 bg-white p-8 shadow-lg">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Rank */}
            <div className="sm:col-span-3 grid gap-2">
              <label className="text-sm font-bold text-ipu-ink" htmlFor="rank-input">
                Your CET Rank
              </label>
              <input
                id="rank-input"
                type="number"
                value={rank}
                min={1}
                onChange={(e) => setRank(e.target.value)}
                placeholder="e.g. 45000"
                className="rounded-xl border border-blue-100 bg-slate-50 px-4 py-4 text-xl font-bold text-ipu-ink placeholder:font-normal placeholder:text-slate-400 focus:border-ipu-blue focus:outline-none focus:ring-2 focus:ring-ipu-blue/20"
              />
            </div>

            {/* Region */}
            <div className="sm:col-span-2 grid gap-2">
              <label className="text-sm font-bold text-ipu-ink">Your Region</label>
              <div className="grid grid-cols-2 gap-3">
                {(["delhi", "outside"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`rounded-xl py-3 px-4 text-sm font-bold border-2 transition-all ${
                      region === r
                        ? "border-ipu-blue bg-ipu-blue text-white"
                        : "border-blue-100 bg-slate-50 text-ipu-ink hover:border-ipu-blue"
                    }`}
                  >
                    {r === "delhi" ? "🏙️ Inside Delhi" : "🌏 Outside Delhi"}
                  </button>
                ))}
              </div>
            </div>

            {/* Course Type */}
            <div className="grid gap-2">
              <label className="text-sm font-bold text-ipu-ink">Course Type</label>
              <select
                value={courseType}
                onChange={(e) => setCourseType(e.target.value as "all" | "4yr" | "6yr")}
                className="rounded-xl border border-blue-100 bg-slate-50 px-4 py-3 font-bold text-ipu-ink focus:border-ipu-blue focus:outline-none focus:ring-2 focus:ring-ipu-blue/20"
              >
                <option value="all">All Courses</option>
                <option value="4yr">4-Year (B.Tech)</option>
                <option value="6yr">6-Year (Dual Degree)</option>
              </select>
            </div>

            {/* Submit */}
            <div className="sm:col-span-3">
              <button
                onClick={runPrediction}
                disabled={!rank}
                className="w-full rounded-xl bg-ipu-blue py-4 text-lg font-black text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Sparkles size={20} /> Predict My Colleges
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {results !== null && (
          <div className="mt-16 grid gap-10">
            {/* Summary bar */}
            <div className="flex flex-wrap justify-center gap-6 text-center">
              {[
                { label: "Safe Admits", count: safeList.length, color: "text-green-600", bg: "bg-green-50 border-green-200" },
                { label: "Moderate Chance", count: moderateList.length, color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" },
                { label: "Reach Colleges", count: reachList.length, color: "text-red-600", bg: "bg-red-50 border-red-200" },
              ].map((item) => (
                <div key={item.label} className={`rounded-2xl border ${item.bg} px-8 py-4`}>
                  <p className={`text-3xl font-black ${item.color}`}>{item.count}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>

            {results.length === 0 && (
              <div className="rounded-2xl border border-slate-100 bg-white p-12 text-center shadow-sm">
                <AlertTriangle size={40} className="mx-auto text-yellow-500" />
                <p className="mt-4 text-xl font-bold text-ipu-ink">No results found for your rank & region.</p>
                <p className="mt-2 text-slate-600">Try increasing your rank or switching to Outside Delhi.</p>
              </div>
            )}


            {/* Safe */}
            {safeList.length > 0 && (
              <ResultSection title="✅ Safe Admits" subtitle="Your rank is comfortably within the cutoff." results={safeList} compareList={compareList} onToggleCompare={toggleCompare} />
            )}

            {/* Moderate */}
            {moderateList.length > 0 && (
              <ResultSection title="⚡ Moderate Chance" subtitle="Your rank is in the competitive range — add to your list." results={moderateList} compareList={compareList} onToggleCompare={toggleCompare} />
            )}

            {/* Reach */}
            {reachList.length > 0 && (
              <ResultSection title="🎯 Reach Colleges" subtitle="Slightly above cutoff — possible with upgrades." results={reachList} compareList={compareList} onToggleCompare={toggleCompare} />
            )}
          </div>
        )}

        {/* ===== COMPARE SECTION ===== */}
        <div className="mt-20">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <GitCompare size={22} className="text-ipu-blue" />
                <h2 className="text-3xl font-black text-ipu-ink">College Comparison</h2>
              </div>
              <p className="mt-1 text-sm text-slate-500">Compare up to 3 colleges side by side. Add colleges manually or from prediction results.</p>
            </div>
            {compareList.length < 3 && (
              <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-blue-50 shadow-sm w-full md:w-auto">
                <select
                  className="bg-transparent text-sm font-semibold text-ipu-ink outline-none flex-1 md:w-48"
                  onChange={(e) => {
                    if (e.target.value) {
                      toggleCompare(e.target.value);
                      e.target.value = "";
                    }
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>+ Add College to Compare</option>
                  {collegesData
                    .filter((c) => !compareList.some((comp) => comp.code === c.code))
                    .map((c) => (
                      <option key={c.code} value={c.code}>{c.shortName} - {c.fullName.substring(0, 30)}...</option>
                    ))}
                </select>
              </div>
            )}
          </div>

          {compareList.length > 0 ? (
            <div className="overflow-x-auto rounded-2xl border border-blue-50 bg-white shadow-lg">
              {/* Table logic remains exactly same, only the container structure changed slightly. */}

              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-blue-50 bg-ipu-mist">
                    <th className="px-5 py-4 font-black text-ipu-blue w-40">Criteria</th>
                    {compareList.map((c) => (
                      <th key={c.code} className="px-5 py-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="relative h-16 w-24 rounded-lg overflow-hidden mb-2">
                              <Image src={c.image} alt={c.fullName} fill className="object-cover" />
                            </div>
                            <p className="font-black text-ipu-ink">{c.shortName}</p>
                            <p className="text-xs text-slate-500">{c.type}</p>
                          </div>
                          <button onClick={() => toggleCompare(c.code)} className="rounded-full bg-red-50 p-1 text-red-500 hover:bg-red-100">
                            <X size={14} />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Full Name", render: (c: CollegeData) => <span className="text-xs">{c.fullName}</span> },
                    { label: "Location", render: (c: CollegeData) => c.location.split(",").slice(-2).join(",").trim() },
                    { label: "Established", render: (c: CollegeData) => c.established },
                    { label: "NIRF Rank", render: (c: CollegeData) => c.nirfRank ?? "—" },
                    { label: "Accreditation", render: (c: CollegeData) => (
                      <div className="flex flex-wrap gap-1">
                        {c.accreditation.map((a) => <span key={a} className="rounded bg-ipu-mist px-1.5 py-0.5 text-xs font-bold text-ipu-blue">{a}</span>)}
                      </div>
                    )},
                    { label: "Annual Fees", render: (c: CollegeData) => <span className="font-bold text-orange-600">₹{c.fees.annualTuition.toLocaleString("en-IN")}</span> },
                    { label: "Total Fees (4yr)", render: (c: CollegeData) => <span className="font-bold">₹{c.fees.total4yr.toLocaleString("en-IN")}</span> },
                    { label: "Avg Package", render: (c: CollegeData) => <span className="font-black text-green-600">{c.placements.avgPackageLpa} LPA</span> },
                    { label: "Highest Package", render: (c: CollegeData) => <span className="font-bold">{c.placements.highestPackageLpa} LPA</span> },
                    { label: "Placement %", render: (c: CollegeData) => (
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-slate-100">
                            <div className="h-2 rounded-full bg-ipu-sky" style={{ width: `${c.placements.placementPercent}%` }} />
                          </div>
                          <span className="font-black text-ipu-blue">{c.placements.placementPercent}%</span>
                        </div>
                      </div>
                    )},
                    { label: "Top Recruiters", render: (c: CollegeData) => (
                      <div className="flex flex-wrap gap-1">
                        {c.placements.topRecruiters.slice(0, 3).map((r) => <span key={r} className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">{r}</span>)}
                      </div>
                    )},
                    { label: "Branches", render: (c: CollegeData) => c.branches.slice(0, 4).join(", ") + (c.branches.length > 4 ? "..." : "") },
                    { label: "Hostel", render: (c: CollegeData) => c.campus.hostel ? <span className="text-green-600 font-bold">✅ Yes{c.campus.hostelNote ? ` (${c.campus.hostelNote})` : ""}</span> : <span className="text-red-500 font-bold">❌ No</span> },
                    { label: "Metro Access", render: (c: CollegeData) => c.campus.metroAccess ? <span className="text-green-600 font-bold">✅ {c.campus.nearestMetro ?? "Yes"}</span> : <span className="text-red-500 font-bold">❌ No</span> },
                  ].map((row, i) => (
                    <tr key={row.label} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <td className="px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-500">{row.label}</td>
                      {compareList.map((c) => (
                        <td key={c.code} className="px-5 py-3 text-sm">{row.render(c)}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t-2 border-blue-100 bg-ipu-mist">
                    <td className="px-5 py-4 text-xs font-black uppercase text-slate-500">View Details</td>
                    {compareList.map((c) => (
                      <td key={c.code} className="px-5 py-4">
                        <Link href={`/colleges/${c.slug}`} className="inline-block rounded-lg bg-ipu-blue px-4 py-2 text-xs font-black text-white hover:bg-blue-800 transition">
                          View {c.shortName} →
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-4 text-center p-12 bg-slate-50 rounded-2xl border border-dashed border-blue-100">
              <GitCompare size={32} className="mx-auto text-slate-300 mb-3" />
              <p className="text-slate-500 font-medium">Select a college from the dropdown above to start comparing.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ResultSection({
  title,
  subtitle,
  results,
  compareList,
  onToggleCompare,
}: {
  title: string;
  subtitle: string;
  results: PredictionResult[];
  compareList: CollegeData[];
  onToggleCompare: (name: string) => void;
}) {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-black text-ipu-ink">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {results.map((item, i) => {
          const inCompare = compareList.some((c) => c.shortName === item.college || c.code === item.college);
          return (
            <div
              key={`${item.college}-${item.branch}-${i}`}
              className={`rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-all ${inCompare ? "border-ipu-blue ring-2 ring-ipu-blue/20" : "border-blue-50"}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-black text-ipu-ink text-base leading-tight">{item.college}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.course_type} · {item.region === "delhi" ? "Delhi" : "Outside Delhi"}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-black ${STATUS_STYLES[item.status]}`}>
                  {STATUS_ICONS[item.status]}{item.status}
                </span>
              </div>

              {/* Branch */}
              <p className="mt-3 text-sm font-semibold text-slate-700 leading-snug">{item.branch}</p>

              {/* Rank range */}
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs">
                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Open Rank</span>
                  <span className="font-black text-ipu-ink">{item.openRank.toLocaleString("en-IN")}</span>
                </div>
                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Close Rank</span>
                  <span className="font-black text-ipu-ink">{item.closeRank.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Confidence bar */}
              <div className="mt-4 flex items-center justify-between">
                <div className="h-2 flex-1 rounded-full bg-slate-100 mr-3">
                  <div
                    className={`h-2 rounded-full ${item.confidence === "High" ? "bg-green-500" : item.confidence === "Medium" ? "bg-yellow-400" : "bg-red-400"}`}
                    style={{ width: `${Math.round(item.probability * 100)}%` }}
                  />
                </div>
                <span className={`rounded-full px-2 py-0.5 text-xs font-black ${CONFIDENCE_STYLES[item.confidence]}`}>
                  {item.confidence} ({Math.round(item.probability * 100)}%)
                </span>
              </div>

              {/* Compare button */}
              <button
                onClick={() => onToggleCompare(item.college)}
                disabled={!inCompare && compareList.length >= 3}
                className={`mt-4 w-full rounded-xl py-2 text-xs font-black transition-all ${
                  inCompare
                    ? "bg-ipu-blue text-white"
                    : compareList.length >= 3
                    ? "cursor-not-allowed bg-slate-100 text-slate-400"
                    : "border border-ipu-blue text-ipu-blue hover:bg-ipu-mist"
                }`}
              >
                {inCompare ? "✓ Added to Compare" : "＋ Compare"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

