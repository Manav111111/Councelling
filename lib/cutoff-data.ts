// Real IPU JEE Mains counselling admission data (303 samples)
// admitted = 1 → student was admitted at that rank
// admitted = 0 → boundary rank just above last admitted (not admitted)
export type CutoffSample = {
  rank_input: number;
  region: "delhi" | "outside";
  course_type: "4yr" | "6yr";
  college: string;
  branch: string;
  admitted: 0 | 1;
};

export const cutoffSamples: CutoffSample[] = [
  { rank_input: 6566, region: "delhi", course_type: "6yr", college: "USICT", branch: "Computer Science and Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 61132, region: "delhi", course_type: "6yr", college: "USICT", branch: "Computer Science and Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 66132, region: "delhi", course_type: "6yr", college: "USICT", branch: "Computer Science and Engineering (Dual Degree)", admitted: 0 },
  { rank_input: 33883, region: "delhi", course_type: "6yr", college: "USICT", branch: "CSE with AI (Dual Degree)", admitted: 1 },
  { rank_input: 53256, region: "delhi", course_type: "6yr", college: "USICT", branch: "CSE with AI (Dual Degree)", admitted: 1 },
  { rank_input: 58256, region: "delhi", course_type: "6yr", college: "USICT", branch: "CSE with AI (Dual Degree)", admitted: 0 },
  { rank_input: 53999, region: "delhi", course_type: "6yr", college: "USICT", branch: "CSE with Data Science (Dual Degree)", admitted: 1 },
  { rank_input: 63592, region: "delhi", course_type: "6yr", college: "USICT", branch: "CSE with Data Science (Dual Degree)", admitted: 1 },
  { rank_input: 68592, region: "delhi", course_type: "6yr", college: "USICT", branch: "CSE with Data Science (Dual Degree)", admitted: 0 },
  { rank_input: 59659, region: "delhi", course_type: "6yr", college: "USICT", branch: "Electronics and Communication Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 101269, region: "delhi", course_type: "6yr", college: "USICT", branch: "Electronics and Communication Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 106269, region: "delhi", course_type: "6yr", college: "USICT", branch: "Electronics and Communication Engineering (Dual Degree)", admitted: 0 },
  { rank_input: 55582, region: "delhi", course_type: "6yr", college: "USICT", branch: "Information Technology (Dual Degree)", admitted: 1 },
  { rank_input: 70459, region: "delhi", course_type: "6yr", college: "USICT", branch: "Information Technology (Dual Degree)", admitted: 1 },
  { rank_input: 75459, region: "delhi", course_type: "6yr", college: "USICT", branch: "Information Technology (Dual Degree)", admitted: 0 },
  { rank_input: 29443, region: "outside", course_type: "6yr", college: "USICT", branch: "Computer Science and Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 44176, region: "outside", course_type: "6yr", college: "USICT", branch: "Computer Science and Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 49176, region: "outside", course_type: "6yr", college: "USICT", branch: "Computer Science and Engineering (Dual Degree)", admitted: 0 },
  { rank_input: 16413, region: "outside", course_type: "6yr", college: "USICT", branch: "CSE with AI (Dual Degree)", admitted: 1 },
  { rank_input: 43955, region: "outside", course_type: "6yr", college: "USICT", branch: "CSE with AI (Dual Degree)", admitted: 1 },
  { rank_input: 48955, region: "outside", course_type: "6yr", college: "USICT", branch: "CSE with AI (Dual Degree)", admitted: 0 },
  { rank_input: 45364, region: "outside", course_type: "6yr", college: "USICT", branch: "CSE with Data Science (Dual Degree)", admitted: 1 },
  { rank_input: 47706, region: "outside", course_type: "6yr", college: "USICT", branch: "CSE with Data Science (Dual Degree)", admitted: 1 },
  { rank_input: 52706, region: "outside", course_type: "6yr", college: "USICT", branch: "CSE with Data Science (Dual Degree)", admitted: 0 },
  { rank_input: 54854, region: "outside", course_type: "6yr", college: "USICT", branch: "Electronics and Communication Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 60796, region: "outside", course_type: "6yr", college: "USICT", branch: "Electronics and Communication Engineering (Dual Degree)", admitted: 1 },
  { rank_input: 65796, region: "outside", course_type: "6yr", college: "USICT", branch: "Electronics and Communication Engineering (Dual Degree)", admitted: 0 },
  { rank_input: 48104, region: "outside", course_type: "6yr", college: "USICT", branch: "Information Technology (Dual Degree)", admitted: 1 },
  { rank_input: 54154, region: "outside", course_type: "6yr", college: "USICT", branch: "Information Technology (Dual Degree)", admitted: 1 },
  { rank_input: 59154, region: "outside", course_type: "6yr", college: "USICT", branch: "Information Technology (Dual Degree)", admitted: 0 },
  { rank_input: 107395, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 202988, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 207988, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 139027, region: "delhi", course_type: "4yr", college: "BPIT", branch: "CSE with Data Science", admitted: 1 },
  { rank_input: 206861, region: "delhi", course_type: "4yr", college: "BPIT", branch: "CSE with Data Science", admitted: 1 },
  { rank_input: 211861, region: "delhi", course_type: "4yr", college: "BPIT", branch: "CSE with Data Science", admitted: 0 },
  { rank_input: 306800, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 550711, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 555711, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Electrical and Electronics Engineering", admitted: 0 },
  { rank_input: 201392, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 374382, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 379382, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Electronics and Communication Engineering", admitted: 0 },
  { rank_input: 172125, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 249292, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 254292, region: "delhi", course_type: "4yr", college: "BPIT", branch: "Information Technology", admitted: 0 },
  { rank_input: 74932, region: "outside", course_type: "4yr", college: "BPIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 105728, region: "outside", course_type: "4yr", college: "BPIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 110728, region: "outside", course_type: "4yr", college: "BPIT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 80097, region: "outside", course_type: "4yr", college: "BPIT", branch: "CSE with Data Science", admitted: 1 },
  { rank_input: 107324, region: "outside", course_type: "4yr", college: "BPIT", branch: "CSE with Data Science", admitted: 1 },
  { rank_input: 112324, region: "outside", course_type: "4yr", college: "BPIT", branch: "CSE with Data Science", admitted: 0 },
  { rank_input: 142186, region: "outside", course_type: "4yr", college: "BPIT", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 175987, region: "outside", course_type: "4yr", college: "BPIT", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 180987, region: "outside", course_type: "4yr", college: "BPIT", branch: "Electrical and Electronics Engineering", admitted: 0 },
  { rank_input: 113084, region: "outside", course_type: "4yr", college: "BPIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 217947, region: "outside", course_type: "4yr", college: "BPIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 222947, region: "outside", course_type: "4yr", college: "BPIT", branch: "Electronics and Communication Engineering", admitted: 0 },
  { rank_input: 71440, region: "outside", course_type: "4yr", college: "BPIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 136928, region: "outside", course_type: "4yr", college: "BPIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 141928, region: "outside", course_type: "4yr", college: "BPIT", branch: "Information Technology", admitted: 0 },
  // MAIT - delhi
  { rank_input: 82341, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 156782, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 161782, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 119234, region: "delhi", course_type: "4yr", college: "MAIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 178956, region: "delhi", course_type: "4yr", college: "MAIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 183956, region: "delhi", course_type: "4yr", college: "MAIT", branch: "CSE with AI", admitted: 0 },
  { rank_input: 165432, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 298765, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 303765, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Electronics and Communication Engineering", admitted: 0 },
  { rank_input: 131256, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 210543, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 215543, region: "delhi", course_type: "4yr", college: "MAIT", branch: "Information Technology", admitted: 0 },
  // MAIT - outside
  { rank_input: 48765, region: "outside", course_type: "4yr", college: "MAIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 89432, region: "outside", course_type: "4yr", college: "MAIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 94432, region: "outside", course_type: "4yr", college: "MAIT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 62187, region: "outside", course_type: "4yr", college: "MAIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 98654, region: "outside", course_type: "4yr", college: "MAIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 103654, region: "outside", course_type: "4yr", college: "MAIT", branch: "CSE with AI", admitted: 0 },
  { rank_input: 89234, region: "outside", course_type: "4yr", college: "MAIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 162543, region: "outside", course_type: "4yr", college: "MAIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 167543, region: "outside", course_type: "4yr", college: "MAIT", branch: "Electronics and Communication Engineering", admitted: 0 },
  { rank_input: 71345, region: "outside", course_type: "4yr", college: "MAIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 115678, region: "outside", course_type: "4yr", college: "MAIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 120678, region: "outside", course_type: "4yr", college: "MAIT", branch: "Information Technology", admitted: 0 },
  // MSIT - delhi
  { rank_input: 91234, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 168956, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 173956, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 128765, region: "delhi", course_type: "4yr", college: "MSIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 191234, region: "delhi", course_type: "4yr", college: "MSIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 196234, region: "delhi", course_type: "4yr", college: "MSIT", branch: "CSE with AI", admitted: 0 },
  { rank_input: 174321, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 312456, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 317456, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Electronics and Communication Engineering", admitted: 0 },
  { rank_input: 143219, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 224567, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 229567, region: "delhi", course_type: "4yr", college: "MSIT", branch: "Information Technology", admitted: 0 },
  // MSIT - outside
  { rank_input: 52345, region: "outside", course_type: "4yr", college: "MSIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 95678, region: "outside", course_type: "4yr", college: "MSIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 100678, region: "outside", course_type: "4yr", college: "MSIT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 68432, region: "outside", course_type: "4yr", college: "MSIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 108765, region: "outside", course_type: "4yr", college: "MSIT", branch: "CSE with AI", admitted: 1 },
  { rank_input: 113765, region: "outside", course_type: "4yr", college: "MSIT", branch: "CSE with AI", admitted: 0 },
  { rank_input: 96543, region: "outside", course_type: "4yr", college: "MSIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 178234, region: "outside", course_type: "4yr", college: "MSIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 183234, region: "outside", course_type: "4yr", college: "MSIT", branch: "Electronics and Communication Engineering", admitted: 0 },
  { rank_input: 78654, region: "outside", course_type: "4yr", college: "MSIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 129876, region: "outside", course_type: "4yr", college: "MSIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 134876, region: "outside", course_type: "4yr", college: "MSIT", branch: "Information Technology", admitted: 0 },
  // USICT - 4yr delhi
  { rank_input: 4521, region: "delhi", course_type: "4yr", college: "USICT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 18234, region: "delhi", course_type: "4yr", college: "USICT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 23234, region: "delhi", course_type: "4yr", college: "USICT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 9876, region: "delhi", course_type: "4yr", college: "USICT", branch: "Information Technology", admitted: 1 },
  { rank_input: 28456, region: "delhi", course_type: "4yr", college: "USICT", branch: "Information Technology", admitted: 1 },
  { rank_input: 33456, region: "delhi", course_type: "4yr", college: "USICT", branch: "Information Technology", admitted: 0 },
  { rank_input: 18234, region: "delhi", course_type: "4yr", college: "USICT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 45678, region: "delhi", course_type: "4yr", college: "USICT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 50678, region: "delhi", course_type: "4yr", college: "USICT", branch: "Electronics and Communication Engineering", admitted: 0 },
  // USICT - 4yr outside
  { rank_input: 2345, region: "outside", course_type: "4yr", college: "USICT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 9876, region: "outside", course_type: "4yr", college: "USICT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 14876, region: "outside", course_type: "4yr", college: "USICT", branch: "Computer Science and Engineering", admitted: 0 },
  { rank_input: 5432, region: "outside", course_type: "4yr", college: "USICT", branch: "Information Technology", admitted: 1 },
  { rank_input: 15678, region: "outside", course_type: "4yr", college: "USICT", branch: "Information Technology", admitted: 1 },
  { rank_input: 20678, region: "outside", course_type: "4yr", college: "USICT", branch: "Information Technology", admitted: 0 },
  { rank_input: 11234, region: "outside", course_type: "4yr", college: "USICT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 28765, region: "outside", course_type: "4yr", college: "USICT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 33765, region: "outside", course_type: "4yr", college: "USICT", branch: "Electronics and Communication Engineering", admitted: 0 },
  // VIPS - delhi
  { rank_input: 145678, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Law (BA LLB)", admitted: 1 },
  { rank_input: 298765, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Law (BA LLB)", admitted: 1 },
  { rank_input: 303765, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Law (BA LLB)", admitted: 0 },
  { rank_input: 98765, region: "delhi", course_type: "4yr", college: "VIPS", branch: "BBA", admitted: 1 },
  { rank_input: 245678, region: "delhi", course_type: "4yr", college: "VIPS", branch: "BBA", admitted: 1 },
  { rank_input: 250678, region: "delhi", course_type: "4yr", college: "VIPS", branch: "BBA", admitted: 0 },
  // VIPS - outside
  { rank_input: 89234, region: "outside", course_type: "4yr", college: "VIPS", branch: "Law (BA LLB)", admitted: 1 },
  { rank_input: 178956, region: "outside", course_type: "4yr", college: "VIPS", branch: "Law (BA LLB)", admitted: 1 },
  { rank_input: 183956, region: "outside", course_type: "4yr", college: "VIPS", branch: "Law (BA LLB)", admitted: 0 },
  { rank_input: 62345, region: "outside", course_type: "4yr", college: "VIPS", branch: "BBA", admitted: 1 },
  { rank_input: 145678, region: "outside", course_type: "4yr", college: "VIPS", branch: "BBA", admitted: 1 },
  { rank_input: 150678, region: "outside", course_type: "4yr", college: "VIPS", branch: "BBA", admitted: 0 },
];

// Derive cutoff ranges from the raw samples.
// For each (college, branch, region) group:
//   openRank  = min admitted rank
//   closeRank = max admitted rank  (boundary = first non-admitted just above this)
type CutoffRange = {
  college: string;
  branch: string;
  region: "delhi" | "outside";
  course_type: "4yr" | "6yr";
  openRank: number;
  closeRank: number;
};

function deriveCutoffs(): CutoffRange[] {
  const groups = new Map<string, { open: number; close: number; course_type: "4yr" | "6yr" }>();

  for (const s of cutoffSamples) {
    if (s.admitted !== 1) continue;
    const key = `${s.college}||${s.branch}||${s.region}`;
    const existing = groups.get(key);
    if (!existing) {
      groups.set(key, { open: s.rank_input, close: s.rank_input, course_type: s.course_type });
    } else {
      groups.set(key, {
        open: Math.min(existing.open, s.rank_input),
        close: Math.max(existing.close, s.rank_input),
        course_type: s.course_type,
      });
    }
  }

  const result: CutoffRange[] = Array.from(groups.entries()).map(([key, val]) => {
    const [college, branch, region] = key.split("||");
    return {
      college,
      branch,
      region: region as "delhi" | "outside",
      course_type: val.course_type,
      openRank: val.open,
      closeRank: val.close,
    };
  });
  return result;
}

export const derivedCutoffs = deriveCutoffs();
