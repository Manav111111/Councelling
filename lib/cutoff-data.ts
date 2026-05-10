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
  // HMR - delhi - Artificial Intelligence and Data Science
  { rank_input: 551506, region: "delhi", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 633949, region: "delhi", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 634449, region: "delhi", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Data Science", admitted: 0 },
  // HMR - delhi - Artificial Intelligence and Machine Learning
  { rank_input: 553390, region: "delhi", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 635097, region: "delhi", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 635597, region: "delhi", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Machine Learning", admitted: 0 },
  // HMR - delhi - Civil Engineering
  { rank_input: 696740, region: "delhi", course_type: "4yr", college: "HMR", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 754790, region: "delhi", course_type: "4yr", college: "HMR", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 755290, region: "delhi", course_type: "4yr", college: "HMR", branch: "Civil Engineering", admitted: 0 },
  // HMR - delhi - Computer Science
  { rank_input: 455302, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science", admitted: 1 },
  { rank_input: 574390, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science", admitted: 1 },
  { rank_input: 574890, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science", admitted: 0 },
  // HMR - delhi - Computer Science and Engineering
  { rank_input: 442974, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 529209, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 529709, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science and Engineering", admitted: 0 },
  // HMR - delhi - Computer Science and Technology
  { rank_input: 530608, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 565498, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 565998, region: "delhi", course_type: "4yr", college: "HMR", branch: "Computer Science and Technology", admitted: 0 },
  // HMR - delhi - Electronics and Communication Engineering
  { rank_input: 582163, region: "delhi", course_type: "4yr", college: "HMR", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 665952, region: "delhi", course_type: "4yr", college: "HMR", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 666452, region: "delhi", course_type: "4yr", college: "HMR", branch: "Electronics and Communication Engineering", admitted: 0 },
  // HMR - delhi - Information Technology
  { rank_input: 550033, region: "delhi", course_type: "4yr", college: "HMR", branch: "Information Technology", admitted: 1 },
  { rank_input: 624048, region: "delhi", course_type: "4yr", college: "HMR", branch: "Information Technology", admitted: 1 },
  { rank_input: 624548, region: "delhi", course_type: "4yr", college: "HMR", branch: "Information Technology", admitted: 0 },
  // HMR - delhi - Mechanical Engineering
  { rank_input: 579298, region: "delhi", course_type: "4yr", college: "HMR", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 735742, region: "delhi", course_type: "4yr", college: "HMR", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 736242, region: "delhi", course_type: "4yr", college: "HMR", branch: "Mechanical Engineering", admitted: 0 },
  // HMR - outside - Artificial Intelligence and Data Science
  { rank_input: 262168, region: "outside", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 271769, region: "outside", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 272269, region: "outside", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Data Science", admitted: 0 },
  // HMR - outside - Artificial Intelligence and Machine Learning
  { rank_input: 249261, region: "outside", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 271021, region: "outside", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 271521, region: "outside", course_type: "4yr", college: "HMR", branch: "Artificial Intelligence and Machine Learning", admitted: 0 },
  // HMR - outside - Civil Engineering
  { rank_input: 286695, region: "outside", course_type: "4yr", college: "HMR", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 294224, region: "outside", course_type: "4yr", college: "HMR", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 294724, region: "outside", course_type: "4yr", college: "HMR", branch: "Civil Engineering", admitted: 0 },
  // HMR - outside - Computer Science
  { rank_input: 238716, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science", admitted: 1 },
  { rank_input: 256893, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science", admitted: 1 },
  { rank_input: 257393, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science", admitted: 0 },
  // HMR - outside - Computer Science and Engineering
  { rank_input: 233233, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 245980, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 246480, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science and Engineering", admitted: 0 },
  // HMR - outside - Computer Science and Technology
  { rank_input: 246507, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 252921, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 253421, region: "outside", course_type: "4yr", college: "HMR", branch: "Computer Science and Technology", admitted: 0 },
  // HMR - outside - Electronics and Communication Engineering
  { rank_input: 267146, region: "outside", course_type: "4yr", college: "HMR", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 280811, region: "outside", course_type: "4yr", college: "HMR", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 281311, region: "outside", course_type: "4yr", college: "HMR", branch: "Electronics and Communication Engineering", admitted: 0 },
  // HMR - outside - Information Technology
  { rank_input: 261503, region: "outside", course_type: "4yr", college: "HMR", branch: "Information Technology", admitted: 1 },
  { rank_input: 269128, region: "outside", course_type: "4yr", college: "HMR", branch: "Information Technology", admitted: 1 },
  { rank_input: 269628, region: "outside", course_type: "4yr", college: "HMR", branch: "Information Technology", admitted: 0 },
  // HMR - outside - Mechanical Engineering
  { rank_input: 282295, region: "outside", course_type: "4yr", college: "HMR", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 283098, region: "outside", course_type: "4yr", college: "HMR", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 283598, region: "outside", course_type: "4yr", college: "HMR", branch: "Mechanical Engineering", admitted: 0 },
  // ADGIPS - delhi - Artificial Intelligence and Data Science
  { rank_input: 351506, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 433949, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 434449, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Data Science", admitted: 0 },
  // ADGIPS - delhi - Artificial Intelligence and Machine Learning
  { rank_input: 353390, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 435097, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 435597, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Machine Learning", admitted: 0 },
  // ADGIPS - delhi - Civil Engineering
  { rank_input: 496740, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 554790, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 555290, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Civil Engineering", admitted: 0 },
  // ADGIPS - delhi - Computer Science
  { rank_input: 255302, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science", admitted: 1 },
  { rank_input: 374390, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science", admitted: 1 },
  { rank_input: 374890, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science", admitted: 0 },
  // ADGIPS - delhi - Computer Science and Engineering
  { rank_input: 242974, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 329209, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 329709, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Engineering", admitted: 0 },
  // ADGIPS - delhi - Computer Science and Technology
  { rank_input: 330608, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 365498, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 365998, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Technology", admitted: 0 },
  // ADGIPS - delhi - Electronics and Communication Engineering
  { rank_input: 382163, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 465952, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 466452, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Electronics and Communication Engineering", admitted: 0 },
  // ADGIPS - delhi - Information Technology
  { rank_input: 350033, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Information Technology", admitted: 1 },
  { rank_input: 424048, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Information Technology", admitted: 1 },
  { rank_input: 424548, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Information Technology", admitted: 0 },
  // ADGIPS - delhi - Mechanical Engineering
  { rank_input: 379298, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 535742, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 536242, region: "delhi", course_type: "4yr", college: "ADGITM", branch: "Mechanical Engineering", admitted: 0 },
  // ADGIPS - outside - Artificial Intelligence and Data Science
  { rank_input: 162168, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 171769, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 172269, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Data Science", admitted: 0 },
  // ADGIPS - outside - Artificial Intelligence and Machine Learning
  { rank_input: 149261, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 171021, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 171521, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Artificial Intelligence and Machine Learning", admitted: 0 },
  // ADGIPS - outside - Civil Engineering
  { rank_input: 186695, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 194224, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Civil Engineering", admitted: 1 },
  { rank_input: 194724, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Civil Engineering", admitted: 0 },
  // ADGIPS - outside - Computer Science
  { rank_input: 138716, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science", admitted: 1 },
  { rank_input: 156893, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science", admitted: 1 },
  { rank_input: 157393, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science", admitted: 0 },
  // ADGIPS - outside - Computer Science and Engineering
  { rank_input: 133233, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 145980, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 146480, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Engineering", admitted: 0 },
  // ADGIPS - outside - Computer Science and Technology
  { rank_input: 146507, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 152921, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Technology", admitted: 1 },
  { rank_input: 153421, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Computer Science and Technology", admitted: 0 },
  // ADGIPS - outside - Electronics and Communication Engineering
  { rank_input: 167146, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 180811, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 181311, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Electronics and Communication Engineering", admitted: 0 },
  // ADGIPS - outside - Information Technology
  { rank_input: 161503, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Information Technology", admitted: 1 },
  { rank_input: 169128, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Information Technology", admitted: 1 },
  { rank_input: 169628, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Information Technology", admitted: 0 },
  // ADGIPS - outside - Mechanical Engineering
  { rank_input: 182295, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 183098, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Mechanical Engineering", admitted: 1 },
  { rank_input: 183598, region: "outside", course_type: "4yr", college: "ADGITM", branch: "Mechanical Engineering", admitted: 0 },
  // USAR - delhi - Artificial Intelligence and Data Science
  { rank_input: 70511, region: "delhi", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 127118, region: "delhi", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 127618, region: "delhi", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Data Science", admitted: 0 },
  // USAR - delhi - Artificial Intelligence and Machine Learning
  { rank_input: 53495, region: "delhi", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 136872, region: "delhi", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 137372, region: "delhi", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Machine Learning", admitted: 0 },
  // USAR - delhi - Automation and Robotics
  { rank_input: 88310, region: "delhi", course_type: "4yr", college: "USAR", branch: "Automation and Robotics", admitted: 1 },
  { rank_input: 251369, region: "delhi", course_type: "4yr", college: "USAR", branch: "Automation and Robotics", admitted: 1 },
  { rank_input: 251869, region: "delhi", course_type: "4yr", college: "USAR", branch: "Automation and Robotics", admitted: 0 },
  // USAR - delhi - Industrial Internet of Things
  { rank_input: 139538, region: "delhi", course_type: "4yr", college: "USAR", branch: "Industrial Internet of Things", admitted: 1 },
  { rank_input: 236406, region: "delhi", course_type: "4yr", college: "USAR", branch: "Industrial Internet of Things", admitted: 1 },
  { rank_input: 236906, region: "delhi", course_type: "4yr", college: "USAR", branch: "Industrial Internet of Things", admitted: 0 },
  // USAR - outside - Artificial Intelligence and Data Science
  { rank_input: 49998, region: "outside", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 81795, region: "outside", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 82295, region: "outside", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Data Science", admitted: 0 },
  // USAR - outside - Artificial Intelligence and Machine Learning
  { rank_input: 55448, region: "outside", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 78138, region: "outside", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 78638, region: "outside", course_type: "4yr", college: "USAR", branch: "Artificial Intelligence and Machine Learning", admitted: 0 },
  // USAR - outside - Automation and Robotics
  { rank_input: 82574, region: "outside", course_type: "4yr", college: "USAR", branch: "Automation and Robotics", admitted: 1 },
  { rank_input: 123294, region: "outside", course_type: "4yr", college: "USAR", branch: "Automation and Robotics", admitted: 1 },
  { rank_input: 123794, region: "outside", course_type: "4yr", college: "USAR", branch: "Automation and Robotics", admitted: 0 },
  // USAR - outside - Industrial Internet of Things
  { rank_input: 84067, region: "outside", course_type: "4yr", college: "USAR", branch: "Industrial Internet of Things", admitted: 1 },
  { rank_input: 159146, region: "outside", course_type: "4yr", college: "USAR", branch: "Industrial Internet of Things", admitted: 1 },
  { rank_input: 159646, region: "outside", course_type: "4yr", college: "USAR", branch: "Industrial Internet of Things", admitted: 0 },
  // BVCOE - delhi - Computer Science and Engineering
  { rank_input: 81514, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 184751, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 185251, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Computer Science and Engineering", admitted: 0 },
  // BVCOE - delhi - CSE AI & ML
  { rank_input: 101096, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 188855, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 189355, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "CSE AI & ML", admitted: 0 },
  // BVCOE - delhi - Electrical and Electronics Engineering
  { rank_input: 233709, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 460258, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 460758, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Electrical and Electronics Engineering", admitted: 0 },
  // BVCOE - delhi - Electronics and Communication Engineering
  { rank_input: 185366, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 328486, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 328986, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Electronics and Communication Engineering", admitted: 0 },
  // BVCOE - delhi - Information Technology
  { rank_input: 178050, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Information Technology", admitted: 1 },
  { rank_input: 210489, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Information Technology", admitted: 1 },
  { rank_input: 210989, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Information Technology", admitted: 0 },
  // BVCOE - delhi - Instrumentation and Control Engineering
  { rank_input: 320281, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Instrumentation and Control Engineering", admitted: 1 },
  { rank_input: 712155, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Instrumentation and Control Engineering", admitted: 1 },
  { rank_input: 712655, region: "delhi", course_type: "4yr", college: "BVCOE", branch: "Instrumentation and Control Engineering", admitted: 0 },
  // BVCOE - outside - Computer Science and Engineering
  { rank_input: 66070, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 98228, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 98728, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Computer Science and Engineering", admitted: 0 },
  // BVCOE - outside - CSE AI & ML
  { rank_input: 67452, region: "outside", course_type: "4yr", college: "BVCOE", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 101855, region: "outside", course_type: "4yr", college: "BVCOE", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 102355, region: "outside", course_type: "4yr", college: "BVCOE", branch: "CSE AI & ML", admitted: 0 },
  // BVCOE - outside - Electrical and Electronics Engineering
  { rank_input: 83873, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 142020, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Electrical and Electronics Engineering", admitted: 1 },
  { rank_input: 142520, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Electrical and Electronics Engineering", admitted: 0 },
  // BVCOE - outside - Information Technology
  { rank_input: 108005, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Information Technology", admitted: 1 },
  { rank_input: 119819, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Information Technology", admitted: 1 },
  { rank_input: 120319, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Information Technology", admitted: 0 },
  // BVCOE - outside - Instrumentation and Control Engineering
  { rank_input: 167190, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Instrumentation and Control Engineering", admitted: 1 },
  { rank_input: 167190, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Instrumentation and Control Engineering", admitted: 1 },
  { rank_input: 167690, region: "outside", course_type: "4yr", college: "BVCOE", branch: "Instrumentation and Control Engineering", admitted: 0 },
  // GTBIT - delhi - Computer Science and Engineering
  { rank_input: 171634, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 272759, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 273259, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Computer Science and Engineering", admitted: 0 },
  // GTBIT - delhi - CSE AI & ML
  { rank_input: 162240, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 259780, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 260280, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "CSE AI & ML", admitted: 0 },
  // GTBIT - delhi - CSE Data Science
  { rank_input: 241390, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "CSE Data Science", admitted: 1 },
  { rank_input: 283939, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "CSE Data Science", admitted: 1 },
  { rank_input: 284439, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "CSE Data Science", admitted: 0 },
  // GTBIT - delhi - Electronics and Communication Engineering
  { rank_input: 266666, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 641917, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Electronics and Communication Engineering", admitted: 1 },
  { rank_input: 642417, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Electronics and Communication Engineering", admitted: 0 },
  // GTBIT - delhi - Information Technology
  { rank_input: 240985, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 462772, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 463272, region: "delhi", course_type: "4yr", college: "GTBIT", branch: "Information Technology", admitted: 0 },
  // GTBIT - outside - Computer Science and Engineering
  { rank_input: 94662, region: "outside", course_type: "4yr", college: "GTBIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 123941, region: "outside", course_type: "4yr", college: "GTBIT", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 124441, region: "outside", course_type: "4yr", college: "GTBIT", branch: "Computer Science and Engineering", admitted: 0 },
  // GTBIT - outside - CSE AI & ML
  { rank_input: 126135, region: "outside", course_type: "4yr", college: "GTBIT", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 126135, region: "outside", course_type: "4yr", college: "GTBIT", branch: "CSE AI & ML", admitted: 1 },
  { rank_input: 126635, region: "outside", course_type: "4yr", college: "GTBIT", branch: "CSE AI & ML", admitted: 0 },
  // GTBIT - outside - CSE Data Science
  { rank_input: 163067, region: "outside", course_type: "4yr", college: "GTBIT", branch: "CSE Data Science", admitted: 1 },
  { rank_input: 163067, region: "outside", course_type: "4yr", college: "GTBIT", branch: "CSE Data Science", admitted: 1 },
  { rank_input: 163567, region: "outside", course_type: "4yr", college: "GTBIT", branch: "CSE Data Science", admitted: 0 },
  // GTBIT - outside - Information Technology
  { rank_input: 128794, region: "outside", course_type: "4yr", college: "GTBIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 216661, region: "outside", course_type: "4yr", college: "GTBIT", branch: "Information Technology", admitted: 1 },
  { rank_input: 217161, region: "outside", course_type: "4yr", college: "GTBIT", branch: "Information Technology", admitted: 0 },
  // VIPS - delhi - Artificial Intelligence and Data Science
  { rank_input: 143903, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 315963, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Artificial Intelligence and Data Science", admitted: 1 },
  { rank_input: 316463, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Artificial Intelligence and Data Science", admitted: 0 },
  // VIPS - delhi - Artificial Intelligence and Machine Learning
  { rank_input: 188484, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 334385, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Artificial Intelligence and Machine Learning", admitted: 1 },
  { rank_input: 334885, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Artificial Intelligence and Machine Learning", admitted: 0 },
  // VIPS - delhi - Computer Science and Applied Mathematics
  { rank_input: 207957, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Computer Science and Applied Mathematics", admitted: 1 },
  { rank_input: 392886, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Computer Science and Applied Mathematics", admitted: 1 },
  { rank_input: 393386, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Computer Science and Applied Mathematics", admitted: 0 },
  // VIPS - delhi - Computer Science and Engineering
  { rank_input: 79209, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 262243, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 262743, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Computer Science and Engineering", admitted: 0 },
  // VIPS - delhi - CSE Cyber Security
  { rank_input: 205377, region: "delhi", course_type: "4yr", college: "VIPS", branch: "CSE Cyber Security", admitted: 1 },
  { rank_input: 309987, region: "delhi", course_type: "4yr", college: "VIPS", branch: "CSE Cyber Security", admitted: 1 },
  { rank_input: 310487, region: "delhi", course_type: "4yr", college: "VIPS", branch: "CSE Cyber Security", admitted: 0 },
  // VIPS - delhi - Electronics Engineering VLSI
  { rank_input: 279186, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Electronics Engineering VLSI", admitted: 1 },
  { rank_input: 777031, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Electronics Engineering VLSI", admitted: 1 },
  { rank_input: 777531, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Electronics Engineering VLSI", admitted: 0 },
  // VIPS - delhi - Industrial Internet of Things
  { rank_input: 279611, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Industrial Internet of Things", admitted: 1 },
  { rank_input: 494191, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Industrial Internet of Things", admitted: 1 },
  { rank_input: 494691, region: "delhi", course_type: "4yr", college: "VIPS", branch: "Industrial Internet of Things", admitted: 0 },
  // VIPS - outside - Computer Science and Applied Mathematics
  { rank_input: 188731, region: "outside", course_type: "4yr", college: "VIPS", branch: "Computer Science and Applied Mathematics", admitted: 1 },
  { rank_input: 207472, region: "outside", course_type: "4yr", college: "VIPS", branch: "Computer Science and Applied Mathematics", admitted: 1 },
  { rank_input: 207972, region: "outside", course_type: "4yr", college: "VIPS", branch: "Computer Science and Applied Mathematics", admitted: 0 },
  // VIPS - outside - Computer Science and Engineering
  { rank_input: 62327, region: "outside", course_type: "4yr", college: "VIPS", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 158572, region: "outside", course_type: "4yr", college: "VIPS", branch: "Computer Science and Engineering", admitted: 1 },
  { rank_input: 159072, region: "outside", course_type: "4yr", college: "VIPS", branch: "Computer Science and Engineering", admitted: 0 },
  // VIPS - outside - Electronics Engineering VLSI
  { rank_input: 141477, region: "outside", course_type: "4yr", college: "VIPS", branch: "Electronics Engineering VLSI", admitted: 1 },
  { rank_input: 262267, region: "outside", course_type: "4yr", college: "VIPS", branch: "Electronics Engineering VLSI", admitted: 1 },
  { rank_input: 262767, region: "outside", course_type: "4yr", college: "VIPS", branch: "Electronics Engineering VLSI", admitted: 0 },
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
