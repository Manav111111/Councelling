"use client";

import { Save, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toaster";
import { cutoffs } from "@/lib/sample-data";
import { predictLocally, type PredictionResult } from "@/lib/prediction";
import type { Branch, Category } from "@/lib/types";

const branches: Branch[] = ["CSE", "ECE", "IT", "ME", "Civil", "MBA", "Law", "BBA"];
const categories: Category[] = ["General", "OBC", "SC", "ST", "EWS", "PH"];

export default function PredictPage() {
  const [rank, setRank] = useState(18000);
  const [category, setCategory] = useState<Category>("General");
  const [round, setRound] = useState<1 | 2 | 3>(2);
  const [selectedBranches, setSelectedBranches] = useState<Branch[]>(["CSE", "IT"]);
  const [results, setResults] = useState<PredictionResult[]>([]);
  const { toast } = useToast();

  const chartData = useMemo(() => {
    const top = results.slice(0, 3).map((item) => item.college);
    return [2022, 2023, 2024].map((year) => {
      const row: Record<string, string | number> = { year };
      top.forEach((college) => {
        const found = cutoffs.find((cutoff) => cutoff.year === Math.min(year, 2024) && cutoff.college === college);
        row[college] = found?.closeRank ?? Math.round(rank * (1 + (2025 - year) * 0.08));
      });
      return row;
    });
  }, [rank, results]);

  function toggleBranch(branch: Branch) {
    setSelectedBranches((items) => (items.includes(branch) ? items.filter((item) => item !== branch) : [...items, branch]));
  }

  async function runPrediction() {
    if (!selectedBranches.length) {
      toast("Select at least one preferred branch.");
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_ML_API_URL;
    try {
      if (apiUrl) {
        const response = await fetch(`${apiUrl}/api/predict`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rank, category, branch: selectedBranches, round })
        });
        if (response.ok) {
          const data = await response.json();
          setResults(data.predictions ?? data);
          toast("Prediction generated from ML API.");
          return;
        }
      }
    } catch {
      // Local model keeps the product usable during development.
    }

    setResults(predictLocally({ rank, category, branches: selectedBranches, round }));
    toast("Prediction generated from local cutoff model.");
  }

  return (
    <section className="section">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
        <div className="h-fit rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Rank Predictor</p>
          <h1 className="mt-3 text-3xl font-black text-ipu-ink">Predict likely colleges</h1>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-bold">
              CET rank
              <input type="number" value={rank} onChange={(event) => setRank(Number(event.target.value))} className="rounded-md border border-blue-100 px-3 py-3" />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Category
              <select value={category} onChange={(event) => setCategory(event.target.value as Category)} className="rounded-md border border-blue-100 px-3 py-3">
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <div className="grid gap-2 text-sm font-bold">
              Gender
              <div className="grid grid-cols-2 gap-2">
                {["Male", "Female"].map((item) => (
                  <label key={item} className="rounded-md border border-blue-100 px-3 py-3 font-semibold">
                    <input name="gender" type="radio" defaultChecked={item === "Male"} className="mr-2" /> {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="grid gap-2 text-sm font-bold">
              Preferred branches
              <div className="flex flex-wrap gap-2">
                {branches.map((branch) => (
                  <button key={branch} onClick={() => toggleBranch(branch)} className={`rounded-md px-3 py-2 text-sm font-bold ${selectedBranches.includes(branch) ? "bg-ipu-blue text-white" : "border border-blue-100 bg-white text-ipu-blue"}`}>
                    {branch}
                  </button>
                ))}
              </div>
            </div>
            <label className="grid gap-2 text-sm font-bold">
              Round preference
              <select value={round} onChange={(event) => setRound(Number(event.target.value) as 1 | 2 | 3)} className="rounded-md border border-blue-100 px-3 py-3">
                <option value={1}>Round 1</option>
                <option value={2}>Round 2</option>
                <option value={3}>Round 3</option>
              </select>
            </label>
            <Button onClick={runPrediction} className="w-full"><Sparkles size={18} /> Run prediction</Button>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm">
            <div className="border-b border-blue-100 p-4">
              <h2 className="text-xl font-black">Predicted colleges</h2>
              <p className="text-sm text-slate-600">Confidence is based on distance from historical closing rank and round movement.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-ipu-mist text-ipu-blue">
                  <tr>
                    {["College", "Branch", "Last close rank", "Confidence", "Actions"].map((head) => <th key={head} className="px-4 py-3 font-black">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {(results.length ? results : predictLocally({ rank, category, branches: selectedBranches, round })).map((item) => (
                    <tr key={`${item.college}-${item.branch}`} className="border-t border-blue-50">
                      <td className="px-4 py-3 font-bold">{item.college}</td>
                      <td className="px-4 py-3">{item.branch}</td>
                      <td className="px-4 py-3">{item.lastCloseRank.toLocaleString("en-IN")}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-md px-2 py-1 text-xs font-black ${item.confidence === "High" ? "bg-green-100 text-green-700" : item.confidence === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                          {item.confidence}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <a href={`/colleges/${item.college.toLowerCase()}`} className="rounded-md border border-blue-100 px-3 py-2 font-bold text-ipu-blue">View College</a>
                          <button onClick={() => toast(`${item.college} saved to your dashboard.`)} className="rounded-md bg-ipu-blue px-3 py-2 font-bold text-white"><Save size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black">3-year closing rank trend</h2>
            <div className="mt-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  {results.slice(0, 3).map((item, index) => (
                    <Line key={item.college} type="monotone" dataKey={item.college} stroke={["#003087", "#0E7AFE", "#FF7A59"][index]} strokeWidth={3} />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
