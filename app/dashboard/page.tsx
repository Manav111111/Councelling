"use client";

import { Bell, CalendarDays, CheckCircle2, GraduationCap, LineChart } from "lucide-react";
import { AuthBox } from "@/components/AuthBox";
import { useAuth } from "@/components/AuthProvider";
import { colleges, importantDates } from "@/lib/sample-data";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <section className="section"><div className="mx-auto h-40 max-w-5xl animate-pulse rounded-lg bg-blue-100" /></section>;
  }

  if (!user) {
    return (
      <section className="section">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Protected Dashboard</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">Save your counselling work in one place</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">Login to store predictions, choice lists, checklist progress, notification preferences, and mentor sessions.</p>
          </div>
          <AuthBox />
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black">Welcome, {user.displayName ?? user.email}</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Saved colleges", colleges.slice(0, 3).map((college) => college.shortName).join(", "), GraduationCap],
            ["Saved predictions", "MAIT CSE, MSIT IT, BPIT ECE", LineChart],
            ["Checklist progress", "8 of 12 documents checked", CheckCircle2]
          ].map(([title, text, Icon]) => (
            <div key={title as string} className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <Icon className="text-ipu-sky" />
              <h2 className="mt-4 text-xl font-black">{title as string}</h2>
              <p className="mt-2 text-sm text-slate-600">{text as string}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-black"><CalendarDays className="text-ipu-sky" /> Upcoming counselling dates</h2>
            <div className="mt-4 grid gap-3">{importantDates.map((date) => <p key={date.id} className="rounded-md bg-ipu-mist p-3 font-semibold text-ipu-blue">{date.date} - {date.title}</p>)}</div>
          </div>
          <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-black"><Bell className="text-ipu-sky" /> Notification preferences</h2>
            <label className="mt-4 flex items-center justify-between rounded-md bg-ipu-mist p-3 font-bold">
              Important counselling alerts
              <input type="checkbox" defaultChecked className="h-5 w-5" />
            </label>
            <p className="mt-4 text-sm text-slate-600">Booked mentor sessions: Aashi Mehra, Saturday 5:00 PM.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
