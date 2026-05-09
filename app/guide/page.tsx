import { CalendarDays, Download, FileCheck2 } from "lucide-react";
import { importantDates, seatMatrix } from "@/lib/sample-data";
import { Button } from "@/components/ui/Button";

const steps = [
  "Register on IPU CET portal",
  "Pay counselling fee",
  "Fill choice list with branch and college priorities",
  "Round 1 seat allotment",
  "Report to college or choose upgrade",
  "Round 2 and 3, if needed",
  "Stray vacancy round"
];

const checklist = {
  Academic: ["Class 10 marksheet", "Class 12 marksheet", "CET admit card", "Rank proof"],
  "ID proof": ["Aadhaar card", "Photographs", "Candidate signature", "Fee receipt"],
  "Category certificate": ["OBC/SC/ST/EWS/PH certificate", "Delhi region proof", "Medical certificate if applicable"]
};

export default function GuidePage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Counselling Guide</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">A calm timeline for every round</h1>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_390px]">
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step} className="grid grid-cols-[48px_1fr] gap-4 rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-ipu-blue font-black text-white">{index + 1}</span>
                <div>
                  <h2 className="text-lg font-black">{step}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Track notices, save proof, and keep a printed copy wherever the portal gives one.</p>
                </div>
              </div>
            ))}
          </div>
          <aside className="grid h-fit gap-4">
            <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-black"><FileCheck2 className="text-ipu-sky" /> Document checklist</h2>
              {Object.entries(checklist).map(([group, items]) => (
                <div key={group} className="mt-4">
                  <p className="font-black text-ipu-blue">{group}</p>
                  <ul className="mt-2 grid gap-1 text-sm text-slate-600">
                    {items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              ))}
              <Button href="/tools/checklist" className="mt-5 w-full"><Download size={18} /> Download PDF checklist</Button>
            </div>
            <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-black"><CalendarDays className="text-ipu-sky" /> Important dates</h2>
              <div className="mt-4 grid gap-3">
                {importantDates.map((date) => (
                  <div key={date.id} className="rounded-md bg-ipu-mist p-3">
                    <p className="font-black text-ipu-blue">{date.title}</p>
                    <p className="text-sm text-slate-600">{date.date} · {date.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-8 overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm">
          <div className="border-b border-blue-100 p-5"><h2 className="text-2xl font-black">Seat matrix</h2></div>
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-ipu-mist text-ipu-blue">
              <tr>{["College", "Branch", "Category", "Seats"].map((head) => <th key={head} className="px-4 py-3 font-black">{head}</th>)}</tr>
            </thead>
            <tbody>{seatMatrix.map((row) => <tr key={row.id} className="border-t border-blue-50"><td className="px-4 py-3 font-bold">{row.college}</td><td className="px-4 py-3">{row.branch}</td><td className="px-4 py-3">{row.category}</td><td className="px-4 py-3">{row.seats}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
