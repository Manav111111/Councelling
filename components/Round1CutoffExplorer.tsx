"use client";

import { useState, useMemo } from "react";
import { 
  Search, 
  MapPin, 
  Sparkles, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Building2, 
  Info,
  SlidersHorizontal,
  GraduationCap,
  ChevronRight,
  ShieldCheck,
  Shield
} from "lucide-react";
import { ROUND1_COLLEGES_DATA, Round1College } from "@/lib/round1-cutoff-data";

export function Round1CutoffExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCollege, setSelectedCollege] = useState<Round1College | null>(null);
  const [userRank, setUserRank] = useState<string>("");
  const [regionFocus, setRegionFocus] = useState<"both" | "delhi" | "outside">("both");
  const [quotaView, setQuotaView] = useState<"general" | "defence" | "compare">("general");

  const rankNumber = userRank ? parseInt(userRank.replace(/\D/g, ""), 10) : null;

  const campusTypes = ["All", "Govt / University Campus", "Top Private Institute", "Reputed Private Institute"];

  const filteredColleges = useMemo(() => {
    return ROUND1_COLLEGES_DATA.filter((college) => {
      const matchesSearch = 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.branches.some((b) => b.branch.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === "All" || college.campusType === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const getAdmissionChance = (cutoffRank: number | undefined) => {
    if (!rankNumber || isNaN(rankNumber) || !cutoffRank) return null;
    if (rankNumber <= cutoffRank) {
      return { status: "Likely Safe", badge: "bg-emerald-500/10 text-emerald-700 border-emerald-300", icon: CheckCircle2 };
    } else if (rankNumber <= cutoffRank * 1.08) {
      return { status: "Borderline", badge: "bg-amber-500/10 text-amber-700 border-amber-300", icon: AlertTriangle };
    } else {
      return { status: "Tough / Reach", badge: "bg-rose-500/10 text-rose-700 border-rose-300", icon: XCircle };
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner explaining simplicity & quotas */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ipu-blue via-blue-900 to-ipu-sky p-6 md:p-10 text-white shadow-xl">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
            <Sparkles size={14} className="text-amber-300" />
            Official Round 1 Cutoffs • General & Defence
          </div>
          <h1 className="text-3xl font-black md:text-5xl tracking-tight leading-tight">
            IPU Round 1 Cutoff Explorer
          </h1>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            The official IPU result PDF has over 20 confusing columns. We stripped away all the clutter so you can view pure **General Category** (OPNOHS / OPNOOS) and **Defence Quota** (OPDFHS / OPDFOS) closing ranks instantly.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-200 border border-emerald-400/30">
              <ShieldCheck size={14} /> 100% Authentic Round 1 Data
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs font-bold text-blue-200 border border-blue-400/30">
              <Building2 size={14} /> All 21 Engineering Institutes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/20 px-3 py-1.5 text-xs font-bold text-amber-200 border border-amber-400/30">
              <Shield size={14} /> Includes Defence Priorities (P-I to P-VIII)
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Toolbar & Rank Checker */}
      <div className="rounded-2xl border border-blue-100 bg-white p-5 md:p-6 shadow-md space-y-5">
        <div className="grid gap-4 md:grid-cols-12 items-center">
          {/* Search Box */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search college e.g. MAIT, USICT, BPIT, CSE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-ipu-blue focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* User Rank Checker */}
          <div className="md:col-span-6 relative">
            <div className="flex items-center rounded-xl border border-blue-200 bg-blue-50/40 p-1.5 pl-3.5">
              <GraduationCap className="text-ipu-blue mr-2 shrink-0" size={18} />
              <input
                type="text"
                placeholder="Enter your JEE Rank (e.g. 125000)"
                value={userRank}
                onChange={(e) => setUserRank(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-slate-800 placeholder-slate-500 focus:outline-none"
              />
              {userRank && (
                <button
                  onClick={() => setUserRank("")}
                  className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-slate-600 shadow-sm hover:bg-slate-100 transition"
                >
                  Clear Rank
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quota Switcher Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl flex-wrap">
            <span className="text-xs font-extrabold px-2 text-slate-600 flex items-center gap-1">
              <Shield size={14} className="text-ipu-blue" /> Quota Category:
            </span>
            <button
              onClick={() => setQuotaView("general")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition ${
                quotaView === "general" ? "bg-ipu-blue text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌟 General Quota
            </button>
            <button
              onClick={() => setQuotaView("defence")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition ${
                quotaView === "defence" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🛡️ Defence Quota
            </button>
            <button
              onClick={() => setQuotaView("compare")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition ${
                quotaView === "compare" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚖️ Compare Both
            </button>
          </div>

          {/* Region Switch */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            <span className="text-xs font-bold px-2 text-slate-500">Region:</span>
            <button
              onClick={() => setRegionFocus("both")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                regionFocus === "both" ? "bg-white text-ipu-blue shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Both Regions
            </button>
            <button
              onClick={() => setRegionFocus("delhi")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                regionFocus === "delhi" ? "bg-white text-ipu-blue shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Delhi Only
            </button>
            <button
              onClick={() => setRegionFocus("outside")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                regionFocus === "outside" ? "bg-white text-ipu-blue shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Outside Delhi
            </button>
          </div>
        </div>

        {/* Campus Type Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <SlidersHorizontal size={13} /> Campus Type:
          </span>
          {campusTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                selectedType === type
                  ? "bg-slate-800 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* College Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-lg font-black text-slate-800">
            Select a College to View {quotaView === "general" ? "General" : quotaView === "defence" ? "Defence Quota" : "General & Defence"} Cutoffs ({filteredColleges.length})
          </h2>
          {rankNumber && (
            <p className="text-xs font-semibold text-ipu-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              ⚡ Checking chances for Rank #{rankNumber.toLocaleString()} ({quotaView === "defence" ? "Defence Quota" : "General Quota"})
            </p>
          )}
        </div>

        {filteredColleges.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500 bg-slate-50/50">
            <Building2 size={40} className="mx-auto mb-3 text-slate-400" />
            <p className="text-base font-bold text-slate-700">No colleges matched your search</p>
            <p className="text-sm mt-1">Try searching for a short code like &quot;MAIT&quot; or &quot;USICT&quot;</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedType("All"); }}
              className="mt-4 rounded-lg bg-ipu-blue px-4 py-2 text-xs font-bold text-white hover:bg-blue-800 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredColleges.map((college) => {
              // Find lowest closing rank for highlight based on active quota
              const lowestDelhiRank = Math.min(
                ...college.branches.map((b) => 
                  quotaView === "defence" && b.delhiDefence ? b.delhiDefence.maxRank : b.delhiGeneral.maxRank
                )
              );

              return (
                <div
                  key={college.id}
                  onClick={() => setSelectedCollege(college)}
                  className="group relative flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-xl hover:border-ipu-blue/40 transition cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="rounded-xl bg-gradient-to-br from-ipu-blue to-ipu-sky px-3 py-1.5 text-sm font-black text-white shadow-sm">
                        {college.code}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                        {college.campusType.split(" ")[0]}
                      </span>
                    </div>

                    <h3 className="font-black text-slate-900 group-hover:text-ipu-blue transition line-clamp-2 text-base">
                      {college.name}
                    </h3>

                    <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <MapPin size={14} className="text-slate-400" /> {college.location}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <p className="text-slate-400 font-medium">Closing Rank ({quotaView === "defence" ? "Defence" : "General"}):</p>
                      <p className="font-extrabold text-slate-800 mt-0.5">
                        #{lowestDelhiRank.toLocaleString()} <span className="text-[10px] font-normal text-slate-500">(Delhi)</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-ipu-blue bg-blue-50 px-2.5 py-1.5 rounded-lg group-hover:bg-ipu-blue group-hover:text-white transition">
                      View Cutoff <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Selected College Cutoff Modal */}
      {selectedCollege && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-ipu-blue via-blue-900 to-ipu-sky p-6 text-white flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-white/20 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                    {selectedCollege.code}
                  </span>
                  <span className="text-xs text-blue-200 font-semibold">• Round 1 Official Results</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black leading-tight">
                  {selectedCollege.name}
                </h2>
                <p className="flex items-center gap-1.5 text-xs text-blue-100">
                  <MapPin size={13} /> {selectedCollege.location} | {selectedCollege.branches.length} Engineering Branches
                </p>
              </div>
              <button
                onClick={() => setSelectedCollege(null)}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quota Toggle Inside Modal */}
            <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Active View:</span>
                <button
                  onClick={() => setQuotaView("general")}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition ${
                    quotaView === "general" ? "bg-ipu-blue text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  🌟 General Quota
                </button>
                <button
                  onClick={() => setQuotaView("defence")}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition ${
                    quotaView === "defence" ? "bg-emerald-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  🛡️ Defence Quota
                </button>
                <button
                  onClick={() => setQuotaView("compare")}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition ${
                    quotaView === "compare" ? "bg-purple-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  ⚖️ Compare Both
                </button>
              </div>

              {rankNumber && (
                <div className="flex items-center gap-2 text-xs font-bold text-ipu-blue bg-white px-3 py-1 rounded-full shadow-sm">
                  <GraduationCap size={15} /> Your Rank: #{rankNumber.toLocaleString()}
                </div>
              )}
            </div>

            {/* Cutoff Table */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                      <th className="py-3.5 px-4">Course / Engineering Branch</th>

                      {/* General Columns */}
                      {(quotaView === "general" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "delhi") && (
                        <th className="py-3.5 px-4 bg-blue-50/50 text-ipu-blue">
                          Delhi General <span className="block text-[10px] font-normal text-slate-500 lowercase">(home state)</span>
                        </th>
                      )}
                      {(quotaView === "general" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "outside") && (
                        <th className="py-3.5 px-4 bg-purple-50/50 text-purple-700">
                          Outside Delhi Gen <span className="block text-[10px] font-normal text-slate-500 lowercase">(all india)</span>
                        </th>
                      )}

                      {/* Defence Columns */}
                      {(quotaView === "defence" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "delhi") && (
                        <th className="py-3.5 px-4 bg-emerald-50/70 text-emerald-800">
                          Delhi Defence <span className="block text-[10px] font-normal text-slate-500 lowercase">(OPDFHS)</span>
                        </th>
                      )}
                      {(quotaView === "defence" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "outside") && (
                        <th className="py-3.5 px-4 bg-amber-50/70 text-amber-800">
                          Outside Delhi Def <span className="block text-[10px] font-normal text-slate-500 lowercase">(OPDFOS)</span>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {selectedCollege.branches.map((branch, i) => {
                      const delhiChance = getAdmissionChance(branch.delhiGeneral.maxRank);
                      const outsideChance = getAdmissionChance(branch.outsideGeneral.maxRank);
                      const delhiDefChance = getAdmissionChance(branch.delhiDefence?.maxRank);
                      const outsideDefChance = getAdmissionChance(branch.outsideDefence?.maxRank);

                      return (
                        <tr key={i} className="hover:bg-slate-50/80 transition">
                          <td className="py-4 px-4 font-extrabold text-slate-800 max-w-xs">
                            {branch.branch}
                          </td>

                          {/* Delhi General */}
                          {(quotaView === "general" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "delhi") && (
                            <td className="py-4 px-4 bg-blue-50/20">
                              <div className="space-y-1">
                                <span className="font-black text-slate-900 text-base">
                                  #{branch.delhiGeneral.maxRank.toLocaleString()}
                                </span>
                                {delhiChance && (
                                  <div className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold border ${delhiChance.badge}`}>
                                    <delhiChance.icon size={11} /> {delhiChance.status}
                                  </div>
                                )}
                              </div>
                            </td>
                          )}

                          {/* Outside Delhi General */}
                          {(quotaView === "general" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "outside") && (
                            <td className="py-4 px-4 bg-purple-50/20">
                              <div className="space-y-1">
                                <span className="font-black text-purple-900 text-base">
                                  #{branch.outsideGeneral.maxRank.toLocaleString()}
                                </span>
                                {outsideChance && (
                                  <div className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold border ${outsideChance.badge}`}>
                                    <outsideChance.icon size={11} /> {outsideChance.status}
                                  </div>
                                )}
                              </div>
                            </td>
                          )}

                          {/* Delhi Defence */}
                          {(quotaView === "defence" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "delhi") && (
                            <td className="py-4 px-4 bg-emerald-50/30">
                              {branch.delhiDefence ? (
                                <div className="space-y-1">
                                  <span className="font-black text-emerald-900 text-base">
                                    #{branch.delhiDefence.maxRank.toLocaleString()}
                                  </span>
                                  {branch.delhiDefence.priority && (
                                    <span className="block text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md w-fit">
                                      🛡️ {branch.delhiDefence.priority}
                                    </span>
                                  )}
                                  {delhiDefChance && quotaView === "defence" && (
                                    <div className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold border ${delhiDefChance.badge}`}>
                                      <delhiDefChance.icon size={11} /> {delhiDefChance.status}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <span className="text-xs text-slate-400 font-semibold italic">No Seat Allotted</span>
                              )}
                            </td>
                          )}

                          {/* Outside Delhi Defence */}
                          {(quotaView === "defence" || quotaView === "compare") && (regionFocus === "both" || regionFocus === "outside") && (
                            <td className="py-4 px-4 bg-amber-50/30">
                              {branch.outsideDefence ? (
                                <div className="space-y-1">
                                  <span className="font-black text-amber-900 text-base">
                                    #{branch.outsideDefence.maxRank.toLocaleString()}
                                  </span>
                                  {branch.outsideDefence.priority && (
                                    <span className="block text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md w-fit">
                                      🛡️ {branch.outsideDefence.priority}
                                    </span>
                                  )}
                                  {outsideDefChance && quotaView === "defence" && (
                                    <div className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold border ${outsideDefChance.badge}`}>
                                      <outsideDefChance.icon size={11} /> {outsideDefChance.status}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <span className="text-xs text-slate-400 font-semibold italic">No Seat Allotted</span>
                              )}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl bg-slate-50 p-3.5 text-xs text-slate-600 flex items-start gap-2 border border-slate-200/60">
                <Info size={16} className="text-ipu-blue shrink-0 mt-0.5" />
                <p>
                  <b>Note on Defence Quota:</b> GGSIPU Defence allotments depend primarily on **Defence Priority** (Priority I to Priority IX) and then JEE Main rank within that priority.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                IPU Counselling Hub • 2026 Season
              </span>
              <button
                onClick={() => setSelectedCollege(null)}
                className="rounded-xl bg-ipu-blue px-5 py-2 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
