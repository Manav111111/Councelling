import { cutoffs } from "@/lib/sample-data";
import type { Branch, Category } from "@/lib/types";

export type PredictionInput = {
  rank: number;
  category: Category;
  branches: Branch[];
  round: 1 | 2 | 3;
};

export type PredictionResult = {
  college: string;
  branch: Branch;
  lastCloseRank: number;
  probability: number;
  confidence: "High" | "Medium" | "Low";
};

export function predictLocally(input: PredictionInput): PredictionResult[] {
  const selected = cutoffs.filter(
    (cutoff) =>
      cutoff.category === input.category &&
      input.branches.includes(cutoff.branch) &&
      cutoff.round <= input.round
  );

  return selected
    .map((cutoff) => {
      const margin = cutoff.closeRank - input.rank;
      const probability = Math.max(0.12, Math.min(0.96, 0.5 + margin / Math.max(cutoff.closeRank, 1)));
      const confidence: PredictionResult["confidence"] = probability > 0.74 ? "High" : probability > 0.48 ? "Medium" : "Low";
      return {
        college: cutoff.college,
        branch: cutoff.branch,
        lastCloseRank: cutoff.closeRank,
        probability,
        confidence
      };
    })
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 8);
}
