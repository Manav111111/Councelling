import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, IndianRupee, TrendingUp, Users, Award, Building2, CheckCircle2, BookOpen } from "lucide-react";
import { collegesData } from "@/lib/college-data";

export function generateStaticParams() {
  return collegesData.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const college = collegesData.find((c) => c.slug === params.slug);
  return { title: college?.fullName ?? "College" };
}

export default function CollegeDetailPage({ params }: { params: { slug: string } }) {
  const college = collegesData.find((c) => c.slug === params.slug);
  if (!college) notFound();

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[440px] overflow-hidden">
        <Image src={college.image} alt={college.fullName} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ipu-ink via-ipu-ink/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 pb-10 text-white">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`rounded-full px-3 py-1.5 text-xs font-black ${college.type === "government" ? "bg-green-500" : "bg-white/20 backdrop-blur-sm"}`}>
              {college.type === "government" ? "🏛️ Government" : "🏫 Private"} · GGSIPU Affiliated
            </span>
            {college.subtype && <span className="rounded-full bg-yellow-500/80 px-3 py-1.5 text-xs font-black">{college.subtype}</span>}
          </div>
          <h1 className="max-w-4xl text-4xl font-black md:text-5xl">{college.fullName}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-blue-100">
            <span className="flex items-center gap-1.5"><MapPin size={14} />{college.location}</span>
            <span>Est. {college.established}</span>
            {college.nirfRank && <span className="flex items-center gap-1.5"><Award size={14} />NIRF {college.nirfRank}</span>}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Quick Stats */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Avg Package", value: `${college.placements.avgPackageLpa} LPA`, icon: TrendingUp, color: "text-green-600" },
            { label: "Highest Package", value: `${college.placements.highestPackageLpa} LPA`, icon: Award, color: "text-ipu-blue" },
            { label: "Placement %", value: `${college.placements.placementPercent}%`, icon: Users, color: "text-purple-600" },
            { label: "Annual Fees", value: `₹${(college.fees.annualTuition / 1000).toFixed(0)}K`, icon: IndianRupee, color: "text-orange-600" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-blue-50 bg-white p-5 shadow-sm text-center">
              <stat.icon size={24} className={`mx-auto mb-2 ${stat.color}`} />
              <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            {/* Overview */}
            <section className="rounded-2xl border border-blue-50 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-2xl font-black"><BookOpen size={22} className="text-ipu-blue" /> Overview</h2>
              <p className="mt-4 leading-7 text-slate-600">{college.overview}</p>
              {college.specializationNote && (
                <div className="mt-4 rounded-xl bg-ipu-mist p-4 text-sm font-medium text-ipu-blue">
                  💡 {college.specializationNote}
                </div>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {college.accreditation.map((a) => (
                  <span key={a} className="rounded-lg bg-ipu-mist px-3 py-1.5 text-sm font-bold text-ipu-blue">{a}</span>
                ))}
              </div>
            </section>

            {/* Branches */}
            <section className="rounded-2xl border border-blue-50 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-2xl font-black"><Building2 size={22} className="text-ipu-blue" /> Branches Offered</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {college.branches.map((b) => (
                  <span key={b} className="rounded-xl border border-blue-100 px-3 py-2 text-sm font-bold text-ipu-ink">{b}</span>
                ))}
              </div>
              {college.admission.shifts && (
                <div className="mt-4 rounded-xl bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-800">
                  <strong>Shift Info:</strong> {college.admission.shifts.join(" · ")}
                </div>
              )}
                     {/* Placements */}
            <section className="rounded-2xl border border-blue-50 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-2xl font-black"><TrendingUp size={22} className="text-green-600" /> Placements {college.placements.year}</h2>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-green-50 p-4 text-center">
                  <p className="text-2xl font-black text-green-700">{college.placements.avgPackageLpa} LPA</p>
                  <p className="text-xs font-semibold text-green-600 mt-1">Average Package</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4 text-center">
                  <p className="text-2xl font-black text-ipu-blue">{college.placements.highestPackageLpa} LPA</p>
                  <p className="text-xs font-semibold text-blue-600 mt-1">Highest Package</p>
                </div>
                <div className="rounded-xl bg-purple-50 p-4 text-center">
                  <p className="text-2xl font-black text-purple-700">{college.placements.placementPercent}%</p>
                  <p className="text-xs font-semibold text-purple-600 mt-1">Placed</p>
                </div>
              </div>
              {college.placements.note && (
                <p className="mt-4 text-sm text-slate-500 italic">{college.placements.note}</p>
              )}
              <div className="mt-5">
                <p className="text-sm font-bold text-slate-700 mb-3">Top Recruiters</p>
                <div className="flex flex-wrap gap-2">
                  {college.placements.topRecruiters.map((r) => (
                    <span key={r} className="rounded-lg bg-ipu-mist px-3 py-1.5 text-xs font-bold text-ipu-blue">{r}</span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="grid h-fit gap-5">
            {/* Admission */}
            <div className="rounded-2xl border border-blue-50 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black mb-4">Admission Info</h2>
              <div className="grid gap-3 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <div><p className="font-bold">Entrance Exam</p><p className="text-slate-600">{college.admission.exam.join(", ")}</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <div><p className="font-bold">Quota</p><p className="text-slate-600">{college.admission.quota}</p></div>
                </div>
                {college.admission.delhiReservationPercent && (
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <div><p className="font-bold">Delhi Reservation</p><p className="text-slate-600">{college.admission.delhiReservationPercent}% seats</p></div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <div><p className="font-bold">Min. PCM %</p><p className="text-slate-600">{college.admission.minPcmPercent}%</p></div>
                </div>
              </div>
            </div>

            {/* Fees */}
            <div className="rounded-2xl border border-blue-50 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black mb-4">Fee Structure</h2>
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-600">Annual Tuition</span>
                  <span className="font-black text-ipu-blue">₹{college.fees.annualTuition.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total (4 Year)</span>
                  <span className="font-black text-ipu-blue">₹{college.fees.total4yr.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Campus */}
            <div className="rounded-2xl border border-blue-50 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black mb-4">Campus</h2>
              <div className="grid gap-2.5 text-sm">
                {college.campus.sizeAcres && (
                  <div className="flex justify-between"><span className="text-slate-600">Campus Size</span><span className="font-bold">{college.campus.sizeAcres} acres</span></div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-600">Hostel</span>
                  <span className={`font-bold ${college.campus.hostel ? "text-green-600" : "text-red-500"}`}>
                    {college.campus.hostel ? `✅ Available${college.campus.hostelNote ? ` (${college.campus.hostelNote})` : ""}` : "❌ Not available"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Metro Access</span>
                  <span className={`font-bold ${college.campus.metroAccess ? "text-green-600" : "text-red-500"}`}>
                    {college.campus.metroAccess ? `✅ ${college.campus.nearestMetro ?? "Yes"}` : "❌ No"}
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <iframe
              title={`${college.fullName} map`}
              src={college.mapEmbed}
              className="h-64 w-full rounded-2xl border border-blue-50"
              loading="lazy"
            />

            {/* CTA */}
            <a
              href="https://wa.me/917827465966?text=Hi, I want guidance for this college."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-green-500 p-4 text-center text-base font-black text-white hover:bg-green-600 transition"
            >
              📱 Get Free Guidance on WhatsApp
            </a>

            <Link
              href="/predict"
              className="block rounded-2xl bg-ipu-blue p-4 text-center text-base font-black text-white hover:bg-blue-800 transition"
            >
              🎯 Check If You Qualify
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
