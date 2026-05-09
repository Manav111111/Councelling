import { BarChart3, BellRing, CalendarClock, Database, Newspaper, UsersRound } from "lucide-react";
import { blogPosts, colleges, importantDates, mentors, seatMatrix } from "@/lib/sample-data";

const panels = [
  ["Colleges", colleges.length, Database],
  ["Mentors", mentors.length, UsersRound],
  ["Important dates", importantDates.length, CalendarClock],
  ["Seat matrix rows", seatMatrix.length, BarChart3],
  ["Blog posts", blogPosts.length, Newspaper],
  ["Notifications sent", 14, BellRing]
] as const;

export default function AdminPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Admin Panel</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Manage counselling content</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {panels.map(([title, count, Icon]) => (
            <div key={title} className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <Icon className="text-ipu-sky" />
              <p className="mt-4 text-3xl font-black text-ipu-blue">{count}</p>
              <h2 className="mt-1 font-black">{title}</h2>
              <button className="mt-4 rounded-md border border-blue-100 px-3 py-2 text-sm font-bold text-ipu-blue">Add / Edit / Delete</button>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
          <h2 className="text-2xl font-black">Analytics</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <p className="rounded-md bg-ipu-mist p-4 font-bold text-ipu-blue">Total users: 1,842</p>
            <p className="rounded-md bg-ipu-mist p-4 font-bold text-ipu-blue">Predictions run: 6,219</p>
            <p className="rounded-md bg-ipu-mist p-4 font-bold text-ipu-blue">Popular college: MAIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
