"use client";

import { AlertTriangle, CheckCircle2, GraduationCap, Search, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";
import { predictCetByRank, type CetPredictionResult } from "@/lib/cet-prediction";
import type { CetCourseGroup } from "@/lib/cet-cutoff-data";

const COURSE_OPTIONS: { value: CetCourseGroup | "all"; label: string; icon: string }[] = [
  { value: "all", label: "All Courses", icon: "📚" },
  { value: "BBA", label: "BBA", icon: "📘" },
  { value: "BCA", label: "BCA", icon: "💻" },
  { value: "Law", label: "BA-LLB / BBA-LLB", icon: "⚖️" },
  { value: "B.Com", label: "B.Com (Hons)", icon: "💰" },
  { value: "MCA", label: "MCA", icon: "🖥️" },
  { value: "MBA", label: "MBA", icon: "🎓" },
];

const STATUS_STYLES: Record<CetPredictionResult["status"], string> = {
  Safe: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Moderate: "bg-amber-50 text-amber-700 border border-amber-200",
  Reach: "bg-red-50 text-red-700 border border-red-200",
};

const STATUS_ICONS: Record<CetPredictionResult["status"], React.ReactNode> = {
  Safe: <CheckCircle2 size={14} className="inline mr-1" />,
  Moderate: <TrendingUp size={14} className="inline mr-1" />,
  Reach: <AlertTriangle size={14} className="inline mr-1" />,
};

const CONFIDENCE_STYLES: Record<CetPredictionResult["confidence"], string> = {
  High: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-red-100 text-red-700",
};

const COURSE_GROUP_COLORS: Record<string, string> = {
  BBA: "bg-blue-100 text-blue-700",
  BCA: "bg-purple-100 text-purple-700",
  Law: "bg-orange-100 text-orange-700",
  "B.Com": "bg-green-100 text-green-700",
  MCA: "bg-indigo-100 text-indigo-700",
  MBA: "bg-pink-100 text-pink-700",
};

export default function CetPredictPage() {
  const [rank, setRank] = useState("");
  const [courseGroup, setCourseGroup] = useState<CetCourseGroup | "all">("all");
  const [region, setRegion] = useState<"delhi" | "outside_delhi">("delhi");
  const [category, setCategory] = useState<"GEN" | "SC" | "OBC">("GEN");
  const [results, setResults] = useState<CetPredictionResult[] | null>(null);

  function runPrediction() {
    const r = parseInt(rank);
    if (!rank || isNaN(r) || r <= 0) return;
    setResults(predictCetByRank({ rank: r, courseGroup, region, category }));
  }

  const safeList = results?.filter((r) => r.status === "Safe") ?? [];
  const moderateList = results?.filter((r) => r.status === "Moderate") ?? [];
  const reachList = results?.filter((r) => r.status === "Reach").slice(0, 8) ?? [];

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 px-5 py-2 text-sm font-bold text-violet-600">
            <GraduationCap size={16} /> IPU CET Predictor
          </span>
          <h1 className="mt-4 text-4xl font-black text-ipu-ink md:text-5xl">
            IPU CET College Predictor
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Enter your IPU CET rank to find which colleges you can get for BBA, BCA, Law, B.Com, MCA &amp; MBA.
            Based on official <strong>Round 3 (Last Round) cutoffs 2025-26</strong>.
          </p>
        </div>

        {/* Input Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-violet-100 bg-white p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

          <div className="grid gap-6">
            {/* Rank Input */}
            <div className="grid gap-2">
              <label className="text-sm font-bold text-ipu-ink" htmlFor="cet-rank-input">
                Your IPU CET Rank
              </label>
              <input
                id="cet-rank-input"
                type="number"
                value={rank}
                min={1}
                onChange={(e) => setRank(e.target.value)}
                placeholder="e.g. 500"
                className="rounded-xl border border-violet-100 bg-slate-50 px-4 py-4 text-xl font-bold text-ipu-ink placeholder:font-normal placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            {/* Course Selection */}
            <div className="grid gap-2">
              <label className="text-sm font-bold text-ipu-ink">Select Course</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {COURSE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCourseGroup(opt.value)}
                    className={`rounded-xl py-3 px-3 text-sm font-bold border-2 transition-all ${
                      courseGroup === opt.value
                        ? "border-violet-500 bg-violet-500 text-white shadow-md"
                        : "border-violet-100 bg-slate-50 text-ipu-ink hover:border-violet-300"
                    }`}
                  >
                    <span className="mr-1">{opt.icon}</span> {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Region & Category */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-bold text-ipu-ink">Region</label>
                <div className="grid grid-cols-2 gap-2">
                  {([["delhi", "🏙️ Delhi"], ["outside_delhi", "🌏 Outside Delhi"]] as const).map(([val, lbl]) => (
                    <button
                      key={val}
                      onClick={() => setRegion(val)}
                      className={`rounded-xl py-3 px-3 text-sm font-bold border-2 transition-all ${
                        region === val
                          ? "border-violet-500 bg-violet-500 text-white"
                          : "border-violet-100 bg-slate-50 text-ipu-ink hover:border-violet-300"
                      }`}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-bold text-ipu-ink">Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {([["GEN", "General"], ["SC", "SC"], ["OBC", "OBC"]] as const).map(([val, lbl]) => (
                    <button
                      key={val}
                      onClick={() => setCategory(val)}
                      className={`rounded-xl py-3 px-3 text-sm font-bold border-2 transition-all ${
                        category === val
                          ? "border-violet-500 bg-violet-500 text-white"
                          : "border-violet-100 bg-slate-50 text-ipu-ink hover:border-violet-300"
                      }`}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={runPrediction}
              disabled={!rank}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-lg font-black text-white shadow-lg transition-all hover:shadow-xl hover:from-violet-700 hover:to-fuchsia-700 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Search size={20} /> Find My Colleges
            </button>
          </div>
        </div>

        {/* Results */}
        {results !== null && (
          <div className="mt-16 grid gap-10">
            {/* Summary */}
            <div className="flex flex-wrap justify-center gap-6 text-center">
              {[
                { label: "Safe Admits", count: safeList.length, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
                { label: "Moderate Chance", count: moderateList.length, color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
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
                <AlertTriangle size={40} className="mx-auto text-amber-500" />
                <p className="mt-4 text-xl font-bold text-ipu-ink">No results found for your rank &amp; filters.</p>
                <p className="mt-2 text-slate-600">Try a different course, category, or region.</p>
              </div>
            )}

            {safeList.length > 0 && (
              <ResultSection title="✅ Safe Admits" subtitle="Your rank is comfortably within the cutoff range." results={safeList} />
            )}
            {moderateList.length > 0 && (
              <ResultSection title="⚡ Moderate Chance" subtitle="Your rank is in the competitive range." results={moderateList} />
            )}
            {reachList.length > 0 && (
              <ResultSection title="🎯 Reach Colleges" subtitle="Slightly above cutoff — possible with upgrades." results={reachList} />
            )}
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-16 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-8">
          <h3 className="text-lg font-black text-ipu-ink mb-3">📌 How This Works</h3>
          <ul className="grid gap-2 text-sm text-slate-700">
            <li>• Data is based on <strong>official IPU CET Round 3 (Last Round) cutoffs for 2025-26</strong>.</li>
            <li>• Covers <strong>BBA, BCA, BA-LLB, BBA-LLB, B.Com(H), MCA &amp; MBA</strong> courses.</li>
            <li>• Default category is <strong>Delhi General (OPNOHS)</strong>. SC &amp; OBC data is available where published.</li>
            <li>• <strong>Safe</strong> = rank &le; opening rank, <strong>Moderate</strong> = rank within range, <strong>Reach</strong> = rank above closing.</li>
            <li>• Round 3 cutoffs are the most relaxed. Round 1 closing ranks are typically lower.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ResultSection({ title, subtitle, results }: {
  title: string;
  subtitle: string;
  results: CetPredictionResult[];
}) {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-black text-ipu-ink">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {results.map((item, i) => (
          <div
            key={`${item.college}-${item.course}-${item.shift}-${i}`}
            className="rounded-2xl border border-violet-50 bg-white p-5 shadow-sm hover:shadow-md transition-all group"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-black text-ipu-ink text-sm leading-tight truncate" title={item.college}>
                  {item.college}
                </p>
                <div className="mt-1 flex flex-wrap gap-1">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${COURSE_GROUP_COLORS[item.courseGroup] || "bg-slate-100 text-slate-600"}`}>
                    {item.courseGroup}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                    {item.shift}
                  </span>
                </div>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-black ${STATUS_STYLES[item.status]}`}>
                {STATUS_ICONS[item.status]}{item.status}
              </span>
            </div>

            {/* Course */}
            <p className="mt-3 text-sm font-semibold text-slate-700 leading-snug">{item.course}</p>
            {item.remarks && (
              <p className="mt-1 text-xs text-violet-500 font-medium">💡 {item.remarks}</p>
            )}

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

            {/* Confidence */}
            <div className="mt-4 flex items-center justify-between">
              <div className="h-2 flex-1 rounded-full bg-slate-100 mr-3">
                <div
                  className={`h-2 rounded-full transition-all ${
                    item.confidence === "High" ? "bg-emerald-500" : item.confidence === "Medium" ? "bg-amber-400" : "bg-red-400"
                  }`}
                  style={{ width: `${Math.round(item.probability * 100)}%` }}
                />
              </div>
              <span className={`rounded-full px-2 py-0.5 text-xs font-black ${CONFIDENCE_STYLES[item.confidence]}`}>
                {item.confidence} ({Math.round(item.probability * 100)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
