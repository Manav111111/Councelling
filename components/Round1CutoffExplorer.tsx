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
  TrendingDown, 
  Info,
  SlidersHorizontal,
  GraduationCap,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { ROUND1_COLLEGES_DATA, Round1College, Round1BranchCutoff } from "@/lib/round1-cutoff-data";

export function Round1CutoffExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCollege, setSelectedCollege] = useState<Round1College | null>(null);
  const [userRank, setUserRank] = useState<string>("");
  const [regionFocus, setRegionFocus] = useState<"both" | "delhi" | "outside">("both");

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

  const getAdmissionChance = (cutoffRank: number) => {
    if (!rankNumber || isNaN(rankNumber)) return null;
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
      {/* Top Banner explaining simplicity */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ipu-blue via-blue-900 to-ipu-sky p-6 md:p-10 text-white shadow-xl">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
            <Sparkles size={14} className="text-amber-300" />
            Official Round 1 Cutoffs • Simplified
          </div>
          <h1 className="text-3xl font-black md:text-5xl tracking-tight leading-tight">
            IPU Round 1 Cutoff Explorer
          </h1>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            The official IPU result PDF has over 20 confusing columns for reservations (SC, ST, Defence, Kashmiri Migrants, etc.). We stripped away the clutter so you can view pure **General Category (Delhi & Outside Delhi)** closing ranks with a single click.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-200 border border-emerald-400/30">
              <ShieldCheck size={14} /> 100% Authentic Round 1 Data
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs font-bold text-blue-200 border border-blue-400/30">
              <Building2 size={14} /> All 21 Engineering Institutes
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

        {/* Filter Pills & Region Switch */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
              <SlidersHorizontal size={13} /> Filter:
            </span>
            {campusTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  selectedType === type
                    ? "bg-ipu-blue text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            <span className="text-xs font-bold px-2 text-slate-500">View Columns:</span>
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
              Delhi General Only
            </button>
            <button
              onClick={() => setRegionFocus("outside")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                regionFocus === "outside" ? "bg-white text-ipu-blue shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Non-Delhi Only
            </button>
          </div>
        </div>
      </div>

      {/* College Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-slate-800">
            Select a College to View Round 1 Cutoffs ({filteredColleges.length})
          </h2>
          {rankNumber && (
            <p className="text-xs font-semibold text-ipu-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              ⚡ Checking chances for Rank #{rankNumber.toLocaleString()}
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
              // Find lowest closing rank for highlight
              const lowestDelhiRank = Math.min(...college.branches.map((b) => b.delhiGeneral.maxRank));
              const lowestOutsideRank = Math.min(...college.branches.map((b) => b.outsideGeneral.maxRank));

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
                      <p className="text-slate-400 font-medium">Closing Ranks from:</p>
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
          <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100">
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

            {/* User Rank banner inside popup */}
            {rankNumber ? (
              <div className="bg-blue-50/80 border-b border-blue-100 px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-ipu-blue" size={16} />
                  <span>Checking admission chance for <b>JEE Rank #{rankNumber.toLocaleString()}</b></span>
                </div>
                <button
                  onClick={() => setUserRank("")}
                  className="text-ipu-blue hover:underline font-bold"
                >
                  Change Rank
                </button>
              </div>
            ) : (
              <div className="bg-amber-50/60 border-b border-amber-100 px-6 py-2.5 flex items-center justify-between text-xs text-amber-800">
                <span className="flex items-center gap-1.5">
                  <Info size={14} className="text-amber-600" /> Want instant prediction? Enter your JEE Rank in the search toolbar above.
                </span>
              </div>
            )}

            {/* Cutoff Table */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                      <th className="py-3.5 px-4 w-1/2">Course / Engineering Branch</th>
                      {(regionFocus === "both" || regionFocus === "delhi") && (
                        <th className="py-3.5 px-4 bg-blue-50/50 text-ipu-blue">
                          Delhi General <span className="block text-[10px] font-normal text-slate-500 lowercase">(home state)</span>
                        </th>
                      )}
                      {(regionFocus === "both" || regionFocus === "outside") && (
                        <th className="py-3.5 px-4 bg-purple-50/50 text-purple-700">
                          Outside Delhi <span className="block text-[10px] font-normal text-slate-500 lowercase">(all india)</span>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {selectedCollege.branches.map((branch, i) => {
                      const delhiChance = getAdmissionChance(branch.delhiGeneral.maxRank);
                      const outsideChance = getAdmissionChance(branch.outsideGeneral.maxRank);

                      return (
                        <tr key={i} className="hover:bg-slate-50/80 transition">
                          <td className="py-4 px-4 font-extrabold text-slate-800">
                            {branch.branch}
                          </td>

                          {(regionFocus === "both" || regionFocus === "delhi") && (
                            <td className="py-4 px-4 bg-blue-50/20">
                              <div className="space-y-1.5">
                                <div>
                                  <span className="text-xs text-slate-400 font-medium">Cutoff Rank: </span>
                                  <span className="font-black text-slate-900 text-base">
                                    #{branch.delhiGeneral.maxRank.toLocaleString()}
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  Min Rank: #{branch.delhiGeneral.minRank.toLocaleString()}
                                </div>
                                {delhiChance && (
                                  <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold border ${delhiChance.badge}`}>
                                    <delhiChance.icon size={12} /> {delhiChance.status}
                                  </div>
                                )}
                              </div>
                            </td>
                          )}

                          {(regionFocus === "both" || regionFocus === "outside") && (
                            <td className="py-4 px-4 bg-purple-50/20">
                              <div className="space-y-1.5">
                                <div>
                                  <span className="text-xs text-slate-400 font-medium">Cutoff Rank: </span>
                                  <span className="font-black text-purple-900 text-base">
                                    #{branch.outsideGeneral.maxRank.toLocaleString()}
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  Min Rank: #{branch.outsideGeneral.minRank.toLocaleString()}
                                </div>
                                {outsideChance && (
                                  <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold border ${outsideChance.badge}`}>
                                    <outsideChance.icon size={12} /> {outsideChance.status}
                                  </div>
                                )}
                              </div>
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
                  <b>Note:</b> These are official Round 1 cutoffs for General Category (OPNOHS & OPNOOS). If your rank is close to the cutoff, you have a strong likelihood of securing admission in Round 2, Round 3, or Sliding Round.
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
