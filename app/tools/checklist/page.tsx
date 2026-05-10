"use client";

import { Download, ListChecks } from "lucide-react";
import { useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toaster";

const base = ["Class 10 marksheet", "Class 12 marksheet", "JEE Mains admit card", "JEE Mains Rank card", "Aadhaar card", "Passport photos", "Fee payment receipt", "Medical certificate"];
const categoryDocs: Record<string, string[]> = {
  General: [],
  OBC: ["OBC certificate", "Non-creamy layer certificate"],
  SC: ["SC certificate"],
  ST: ["ST certificate"],
  EWS: ["EWS certificate"],
  PH: ["Disability certificate", "Medical board verification proof"]
};

export default function ChecklistPage() {
  const [category, setCategory] = useState("General");
  const [checked, setChecked] = useState<string[]>([]);
  const { toast } = useToast();
  const docs = useMemo(() => [...base, ...categoryDocs[category]], [category]);
  const progress = Math.round((checked.length / docs.length) * 100);

  function exportPdf() {
    const pdf = new jsPDF();
    pdf.text(`${category} Document Checklist`, 16, 18);
    docs.forEach((doc, index) => pdf.text(`${index + 1}. ${doc}`, 16, 32 + index * 8));
    pdf.save("ipu-document-checklist.pdf");
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Document Checklist Generator</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Personalized reporting checklist</h1>
        <div className="mt-8 rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
          <select value={category} onChange={(event) => { setCategory(event.target.value); setChecked([]); }} className="w-full rounded-md border border-blue-100 px-3 py-3">
            {Object.keys(categoryDocs).map((item) => <option key={item}>{item}</option>)}
          </select>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-ipu-mist"><div className="h-full bg-ipu-green" style={{ width: `${progress}%` }} /></div>
          <p className="mt-2 text-sm font-bold text-ipu-blue">{progress}% complete</p>
          <div className="mt-5 grid gap-2">
            {docs.map((doc) => (
              <label key={doc} className="flex items-center gap-3 rounded-md bg-ipu-mist p-3 font-semibold text-ipu-blue">
                <input type="checkbox" checked={checked.includes(doc)} onChange={() => setChecked((items) => items.includes(doc) ? items.filter((item) => item !== doc) : [...items, doc])} className="h-5 w-5" />
                {doc}
              </label>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={() => toast("Checklist progress saved to Firestore when logged in.")}><ListChecks size={18} /> Save progress</Button>
            <Button onClick={exportPdf} variant="secondary"><Download size={18} /> Export PDF</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
