import { GitCompare, ListChecks, Rows3 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const tools = [
  { href: "/tools/compare", title: "College Comparison", text: "Compare fees, branches, placements, cutoffs, and location.", icon: GitCompare },
  { href: "/tools/choice-simulator", title: "Choice Filling Simulator", text: "Drag college-branch options into your final preference order.", icon: Rows3 },
  { href: "/tools/checklist", title: "Checklist Generator", text: "Create a category-specific reporting document checklist.", icon: ListChecks }
];

export default function ToolsPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Tools</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Counselling tools that save decisions</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.href} className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <tool.icon className="text-ipu-sky" />
              <h2 className="mt-4 text-xl font-black">{tool.title}</h2>
              <p className="mt-2 min-h-14 text-sm leading-6 text-slate-600">{tool.text}</p>
              <Button href={tool.href} className="mt-5 w-full">Open tool</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
