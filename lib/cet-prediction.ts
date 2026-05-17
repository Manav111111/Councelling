import { cetCutoffData, type CetCourseGroup, type CetCutoffEntry } from "./cet-cutoff-data";

export type CetPredictionInput = {
  rank: number;
  courseGroup: CetCourseGroup | "all";
  region: "delhi" | "outside_delhi";
  category: "GEN" | "SC" | "OBC";
};

export type CetPredictionResult = {
  college: string;
  course: string;
  courseGroup: CetCourseGroup;
  shift: string;
  region: "delhi" | "outside_delhi";
  category: string;
  openRank: number;
  closeRank: number;
  remarks: string;
  probability: number;
  confidence: "High" | "Medium" | "Low";
  status: "Safe" | "Moderate" | "Reach";
};

export function predictCetByRank(input: CetPredictionInput): CetPredictionResult[] {
  const candidates = cetCutoffData.filter((c) => {
    if (c.region !== input.region) return false;
    if (c.category !== input.category) return false;
    if (input.courseGroup !== "all" && c.courseGroup !== input.courseGroup) return false;
    return true;
  });

  return candidates
    .map((c) => {
      const range = c.closeRank - c.openRank || 1;
      let probability: number;
      if (input.rank <= c.openRank) {
        probability = 0.97;
      } else if (input.rank > c.closeRank) {
        const overshoot = (input.rank - c.closeRank) / c.closeRank;
        probability = Math.max(0.05, 1 - overshoot * 2);
      } else {
        probability = Math.max(0.15, 1 - (input.rank - c.openRank) / range);
      }

      const confidence: CetPredictionResult["confidence"] =
        probability >= 0.7 ? "High" : probability >= 0.4 ? "Medium" : "Low";

      let status: CetPredictionResult["status"];
      if (input.rank <= c.openRank) {
        status = "Safe";
      } else if (input.rank <= c.closeRank) {
        status = "Moderate";
      } else {
        status = "Reach";
      }

      return {
        college: c.college,
        course: c.course,
        courseGroup: c.courseGroup,
        shift: c.shift,
        region: c.region,
        category: c.category,
        openRank: c.openRank,
        closeRank: c.closeRank,
        remarks: c.remarks,
        probability,
        confidence,
        status,
      };
    })
    .filter((r) => r.probability > 0.04)
    .sort((a, b) => b.probability - a.probability);
}

/** Get unique course groups available in the data */
export function getAvailableCourseGroups(): CetCourseGroup[] {
  const set = new Set<CetCourseGroup>();
  for (const c of cetCutoffData) set.add(c.courseGroup);
  return Array.from(set);
}
