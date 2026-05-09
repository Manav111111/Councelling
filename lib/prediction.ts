import { derivedCutoffs } from "@/lib/cutoff-data";

export type PredictionInput = {
  rank: number;
  region: "delhi" | "outside";
  course_type?: "4yr" | "6yr" | "all";
};

export type PredictionResult = {
  college: string;
  branch: string;
  region: "delhi" | "outside";
  course_type: "4yr" | "6yr";
  openRank: number;
  closeRank: number;
  probability: number;
  confidence: "High" | "Medium" | "Low";
  status: "Safe" | "Moderate" | "Reach";
};

export function predictByRank(input: PredictionInput): PredictionResult[] {
  const candidates = derivedCutoffs.filter((c) => {
    if (c.region !== input.region) return false;
    if (input.course_type && input.course_type !== "all" && c.course_type !== input.course_type) return false;
    return true;
  });

  return candidates
    .map((c) => {
      // margin = how far the student's rank is below the closing rank
      const margin = c.closeRank - input.rank;
      // probability: 1 if rank < openRank (very safe), tapering to ~0 near closeRank
      const range = c.closeRank - c.openRank || 1;
      let probability: number;
      if (input.rank <= c.openRank) {
        probability = 0.97;
      } else if (input.rank > c.closeRank) {
        probability = Math.max(0.05, 1 - (input.rank - c.closeRank) / c.closeRank);
      } else {
        probability = Math.max(0.15, 1 - (input.rank - c.openRank) / range);
      }

      const confidence: PredictionResult["confidence"] =
        probability >= 0.7 ? "High" : probability >= 0.4 ? "Medium" : "Low";

      let status: PredictionResult["status"];
      if (input.rank <= c.openRank) {
        status = "Safe";
      } else if (input.rank <= c.closeRank) {
        status = "Moderate";
      } else {
        status = "Reach";
      }

      return {
        college: c.college,
        branch: c.branch,
        region: c.region,
        course_type: c.course_type,
        openRank: c.openRank,
        closeRank: c.closeRank,
        probability,
        confidence,
        status,
      };
    })
    .sort((a, b) => b.probability - a.probability);
}
