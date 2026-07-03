import { Round1CutoffExplorer } from "@/components/Round1CutoffExplorer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPU Round 1 Cutoff Explorer (Simplified) | IPU Counselling Hub",
  description: "Explore simplified GGSIPU Round 1 cutoffs for General Category (Delhi & Outside Delhi) across MAIT, MSIT, USICT, BPIT, and all 21 engineering institutes.",
};

export default function DirectRound1CutoffsPage() {
  return (
    <section className="section py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Round1CutoffExplorer />
      </div>
    </section>
  );
}
