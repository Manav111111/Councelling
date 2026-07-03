export interface Round1BranchCutoff {
  branch: string;
  delhiGeneral: {
    minRank: number;
    maxRank: number; // Closing Rank
  };
  outsideGeneral: {
    minRank: number;
    maxRank: number; // Closing Rank
  };
}

export interface Round1College {
  id: string;
  code: string;
  name: string;
  location: string;
  campusType: "Govt / University Campus" | "Top Private Institute" | "Reputed Private Institute";
  branches: Round1BranchCutoff[];
}

export const ROUND1_COLLEGES_DATA: Round1College[] = [
  {
    id: "usict",
    code: "USICT",
    name: "University School of Information & Communication Technology",
    location: "Dwarka Campus, New Delhi",
    campusType: "Govt / University Campus",
    branches: [
      {
        branch: "Computer Science & Engineering (Dual Degree)",
        delhiGeneral: { minRank: 8941, maxRank: 35314 },
        outsideGeneral: { minRank: 5353, maxRank: 28126 },
      },
      {
        branch: "CSE with Artificial Intelligence (Dual Degree)",
        delhiGeneral: { minRank: 14394, maxRank: 34677 },
        outsideGeneral: { minRank: 2379, maxRank: 29804 },
      },
      {
        branch: "CSE with Data Science (Dual Degree)",
        delhiGeneral: { minRank: 9652, maxRank: 38759 },
        outsideGeneral: { minRank: 22133, maxRank: 31750 },
      },
      {
        branch: "Information Technology (Dual Degree)",
        delhiGeneral: { minRank: 37155, maxRank: 49263 },
        outsideGeneral: { minRank: 31936, maxRank: 35556 },
      },
      {
        branch: "Electronics & Communication Engineering (Dual Degree)",
        delhiGeneral: { minRank: 18555, maxRank: 58874 },
        outsideGeneral: { minRank: 22170, maxRank: 41125 },
      },
    ],
  },
  {
    id: "mait",
    code: "MAIT",
    name: "Maharaja Agrasen Institute of Technology",
    location: "Rohini, Delhi",
    campusType: "Top Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering (Shift I)",
        delhiGeneral: { minRank: 105, maxRank: 71153 },
        outsideGeneral: { minRank: 1963, maxRank: 44869 },
      },
      {
        branch: "Computer Science & Engineering (Shift II)",
        delhiGeneral: { minRank: 50803, maxRank: 77007 },
        outsideGeneral: { minRank: 40398, maxRank: 46025 },
      },
      {
        branch: "CSE with Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 14634, maxRank: 78308 },
        outsideGeneral: { minRank: 25924, maxRank: 46521 },
      },
      {
        branch: "Computer Science & Technology",
        delhiGeneral: { minRank: 49870, maxRank: 88679 },
        outsideGeneral: { minRank: 39679, maxRank: 49902 },
      },
      {
        branch: "Information Technology",
        delhiGeneral: { minRank: 76754, maxRank: 107248 },
        outsideGeneral: { minRank: 47120, maxRank: 55554 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 41379, maxRank: 112157 },
        outsideGeneral: { minRank: 45513, maxRank: 55462 },
      },
      {
        branch: "Electronics Engg. - VLSI Design & Technology",
        delhiGeneral: { minRank: 90487, maxRank: 128142 },
        outsideGeneral: { minRank: 53803, maxRank: 61885 },
      },
      {
        branch: "Electrical & Electronics Engineering",
        delhiGeneral: { minRank: 72917, maxRank: 148768 },
        outsideGeneral: { minRank: 58234, maxRank: 63127 },
      },
      {
        branch: "Mechanical Engineering",
        delhiGeneral: { minRank: 69514, maxRank: 177806 },
        outsideGeneral: { minRank: 56297, maxRank: 75744 },
      },
    ],
  },
  {
    id: "msit",
    code: "MSIT",
    name: "Maharaja Surajmal Institute of Technology",
    location: "Janakpuri, Delhi",
    campusType: "Top Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering (Shift I)",
        delhiGeneral: { minRank: 27495, maxRank: 97863 },
        outsideGeneral: { minRank: 11531, maxRank: 56389 },
      },
      {
        branch: "Computer Science & Engineering (Shift II)",
        delhiGeneral: { minRank: 96676, maxRank: 104252 },
        outsideGeneral: { minRank: 47973, maxRank: 57148 },
      },
      {
        branch: "Information Technology (Shift I)",
        delhiGeneral: { minRank: 92146, maxRank: 117886 },
        outsideGeneral: { minRank: 56402, maxRank: 59030 },
      },
      {
        branch: "Information Technology (Shift II)",
        delhiGeneral: { minRank: 99757, maxRank: 121204 },
        outsideGeneral: { minRank: 59076, maxRank: 60760 },
      },
      {
        branch: "Electronics & Communication Engineering (Shift I)",
        delhiGeneral: { minRank: 88817, maxRank: 142949 },
        outsideGeneral: { minRank: 56898, maxRank: 64982 },
      },
      {
        branch: "Electronics & Communication Engineering (Shift II)",
        delhiGeneral: { minRank: 140534, maxRank: 153675 },
        outsideGeneral: { minRank: 65020, maxRank: 66956 },
      },
      {
        branch: "Electrical & Electronics Engineering",
        delhiGeneral: { minRank: 120241, maxRank: 170792 },
        outsideGeneral: { minRank: 67735, maxRank: 69985 },
      },
    ],
  },
  {
    id: "usar",
    code: "USAR",
    name: "University School of Automation & Robotics",
    location: "East Delhi Campus, Surajmal Vihar",
    campusType: "Govt / University Campus",
    branches: [
      {
        branch: "Artificial Intelligence & Machine Learning (AI-ML)",
        delhiGeneral: { minRank: 47455, maxRank: 104457 },
        outsideGeneral: { minRank: 37578, maxRank: 59149 },
      },
      {
        branch: "Artificial Intelligence & Data Science (AI-DS)",
        delhiGeneral: { minRank: 41797, maxRank: 106236 },
        outsideGeneral: { minRank: 47868, maxRank: 62011 },
      },
      {
        branch: "Automation & Robotics (AR)",
        delhiGeneral: { minRank: 66547, maxRank: 145149 },
        outsideGeneral: { minRank: 63190, maxRank: 71779 },
      },
      {
        branch: "Industrial Internet of Things (IIOT)",
        delhiGeneral: { minRank: 81786, maxRank: 155670 },
        outsideGeneral: { minRank: 62206, maxRank: 76904 },
      },
    ],
  },
  {
    id: "bpit",
    code: "BPIT",
    name: "Bhagwan Parshuram Institute of Technology",
    location: "Rohini, Delhi",
    campusType: "Top Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 74137, maxRank: 149559 },
        outsideGeneral: { minRank: 59292, maxRank: 68754 },
      },
      {
        branch: "CSE with Data Science",
        delhiGeneral: { minRank: 64551, maxRank: 162336 },
        outsideGeneral: { minRank: 58439, maxRank: 71609 },
      },
      {
        branch: "Information Technology",
        delhiGeneral: { minRank: 135960, maxRank: 175987 },
        outsideGeneral: { minRank: 69314, maxRank: 75312 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 150150, maxRank: 206010 },
        outsideGeneral: { minRank: 71912, maxRank: 80579 },
      },
      {
        branch: "Electrical & Electronics Engineering",
        delhiGeneral: { minRank: 22998, maxRank: 221863 },
        outsideGeneral: { minRank: 85062, maxRank: 89878 },
      },
    ],
  },
  {
    id: "bvcoe",
    code: "BVCOE",
    name: "Bharati Vidyapeeth's College of Engineering",
    location: "Paschim Vihar, Delhi",
    campusType: "Top Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 63516, maxRank: 135541 },
        outsideGeneral: { minRank: 45134, maxRank: 68215 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 57761, maxRank: 148141 },
        outsideGeneral: { minRank: 61070, maxRank: 70950 },
      },
      {
        branch: "CSE - Artificial Intelligence & Data Science",
        delhiGeneral: { minRank: 102789, maxRank: 150435 },
        outsideGeneral: { minRank: 47773, maxRank: 71073 },
      },
      {
        branch: "Computer Science & Business Systems",
        delhiGeneral: { minRank: 98499, maxRank: 164210 },
        outsideGeneral: { minRank: 67681, maxRank: 72389 },
      },
      {
        branch: "Information Technology",
        delhiGeneral: { minRank: 28056, maxRank: 167447 },
        outsideGeneral: { minRank: 68624, maxRank: 74301 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 128024, maxRank: 200165 },
        outsideGeneral: { minRank: 69282, maxRank: 81088 },
      },
      {
        branch: "Electrical & Electronics Engineering",
        delhiGeneral: { minRank: 149567, maxRank: 213870 },
        outsideGeneral: { minRank: 81499, maxRank: 85806 },
      },
    ],
  },
  {
    id: "vips",
    code: "VIPS",
    name: "Vivekananda Institute of Professional Studies - Technical Campus",
    location: "Pitampura, New Delhi",
    campusType: "Top Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 96550, maxRank: 191479 },
        outsideGeneral: { minRank: 67454, maxRank: 83886 },
      },
      {
        branch: "Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 120208, maxRank: 239181 },
        outsideGeneral: { minRank: 84701, maxRank: 99213 },
      },
      {
        branch: "Artificial Intelligence & Data Science",
        delhiGeneral: { minRank: 112468, maxRank: 229151 },
        outsideGeneral: { minRank: 76437, maxRank: 95560 },
      },
      {
        branch: "CSE (Cyber Security)",
        delhiGeneral: { minRank: 75067, maxRank: 243387 },
        outsideGeneral: { minRank: 93788, maxRank: 103458 },
      },
      {
        branch: "Computer Science & Applied Mathematics",
        delhiGeneral: { minRank: 127929, maxRank: 255599 },
        outsideGeneral: { minRank: 72785, maxRank: 105857 },
      },
      {
        branch: "Industrial Internet of Things",
        delhiGeneral: { minRank: 164779, maxRank: 283386 },
        outsideGeneral: { minRank: 107533, maxRank: 117628 },
      },
      {
        branch: "Electronics Engg. - VLSI Design & Technology",
        delhiGeneral: { minRank: 200780, maxRank: 303269 },
        outsideGeneral: { minRank: 92082, maxRank: 120665 },
      },
    ],
  },
  {
    id: "gtbit",
    code: "GTBIT",
    name: "Guru Teg Bahadur Institute of Technology",
    location: "Rajouri Garden, Delhi",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering (Shift I)",
        delhiGeneral: { minRank: 89214, maxRank: 187053 },
        outsideGeneral: { minRank: 77025, maxRank: 80444 },
      },
      {
        branch: "Computer Science & Engineering (Shift II)",
        delhiGeneral: { minRank: 164292, maxRank: 189261 },
        outsideGeneral: { minRank: 80463, maxRank: 82810 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 166645, maxRank: 191699 },
        outsideGeneral: { minRank: 72974, maxRank: 79275 },
      },
      {
        branch: "CSE - Data Science",
        delhiGeneral: { minRank: 185880, maxRank: 194363 },
        outsideGeneral: { minRank: 76997, maxRank: 84750 },
      },
      {
        branch: "Information Technology (Shift I)",
        delhiGeneral: { minRank: 191028, maxRank: 212890 },
        outsideGeneral: { minRank: 84226, maxRank: 90699 },
      },
      {
        branch: "Information Technology (Shift II)",
        delhiGeneral: { minRank: 213194, maxRank: 216610 },
        outsideGeneral: { minRank: 89316, maxRank: 91670 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 205166, maxRank: 241346 },
        outsideGeneral: { minRank: 85501, maxRank: 94627 },
      },
    ],
  },
  {
    id: "adgitm",
    code: "ADGITM (NIEC)",
    name: "Dr. Akhilesh Das Gupta Institute of Professional Studies",
    location: "Shastri Park, New Delhi",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering (Shift I)",
        delhiGeneral: { minRank: 155139, maxRank: 216923 },
        outsideGeneral: { minRank: 77179, maxRank: 88336 },
      },
      {
        branch: "Computer Science & Engineering (Shift II)",
        delhiGeneral: { minRank: 207684, maxRank: 228427 },
        outsideGeneral: { minRank: 88408, maxRank: 90988 },
      },
      {
        branch: "B.Tech (Computer Science)",
        delhiGeneral: { minRank: 57367, maxRank: 249452 },
        outsideGeneral: { minRank: 79999, maxRank: 95731 },
      },
      {
        branch: "B.Tech (Computer Science) Shift II",
        delhiGeneral: { minRank: 208926, maxRank: 272768 },
        outsideGeneral: { minRank: 100331, maxRank: 106457 },
      },
      {
        branch: "Computer Science & Technology (Shift I)",
        delhiGeneral: { minRank: 190425, maxRank: 251831 },
        outsideGeneral: { minRank: 87707, maxRank: 99118 },
      },
      {
        branch: "Computer Science & Technology (Shift II)",
        delhiGeneral: { minRank: 205682, maxRank: 283732 },
        outsideGeneral: { minRank: 99140, maxRank: 106878 },
      },
      {
        branch: "Artificial Intelligence & Machine Learning (Shift I)",
        delhiGeneral: { minRank: 150969, maxRank: 291851 },
        outsideGeneral: { minRank: 85805, maxRank: 111672 },
      },
      {
        branch: "Artificial Intelligence & Machine Learning (Shift II)",
        delhiGeneral: { minRank: 146528, maxRank: 306653 },
        outsideGeneral: { minRank: 111805, maxRank: 114069 },
      },
      {
        branch: "Artificial Intelligence & Data Science (Shift I)",
        delhiGeneral: { minRank: 111758, maxRank: 296975 },
        outsideGeneral: { minRank: 73740, maxRank: 111099 },
      },
      {
        branch: "Artificial Intelligence & Data Science (Shift II)",
        delhiGeneral: { minRank: 120329, maxRank: 304278 },
        outsideGeneral: { minRank: 93627, maxRank: 113009 },
      },
      {
        branch: "Information Technology (Shift I)",
        delhiGeneral: { minRank: 217504, maxRank: 287409 },
        outsideGeneral: { minRank: 93936, maxRank: 107655 },
      },
      {
        branch: "Information Technology (Shift II)",
        delhiGeneral: { minRank: 261720, maxRank: 303692 },
        outsideGeneral: { minRank: 109231, maxRank: 110926 },
      },
      {
        branch: "Electronics & Communication Engineering (Shift I)",
        delhiGeneral: { minRank: 208032, maxRank: 296950 },
        outsideGeneral: { minRank: 99801, maxRank: 109516 },
      },
      {
        branch: "Electronics & Communication Engineering (Shift II)",
        delhiGeneral: { minRank: 236336, maxRank: 313119 },
        outsideGeneral: { minRank: 111468, maxRank: 117836 },
      },
      {
        branch: "Civil Engineering",
        delhiGeneral: { minRank: 215441, maxRank: 341524 },
        outsideGeneral: { minRank: 90361, maxRank: 129101 },
      },
      {
        branch: "Mechanical Engineering",
        delhiGeneral: { minRank: 145105, maxRank: 321725 },
        outsideGeneral: { minRank: 79710, maxRank: 122628 },
      },
    ],
  },
  {
    id: "gtb4cec",
    code: "GTB4CEC",
    name: "Guru Tegh Bahadur 4th Centenary Engineering College",
    location: "Rajouri Garden, New Delhi",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 78033, maxRank: 238080 },
        outsideGeneral: { minRank: 76630, maxRank: 93052 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 173179, maxRank: 246177 },
        outsideGeneral: { minRank: 73916, maxRank: 94796 },
      },
      {
        branch: "CSE (Data Science)",
        delhiGeneral: { minRank: 218741, maxRank: 263148 },
        outsideGeneral: { minRank: 96754, maxRank: 101157 },
      },
      {
        branch: "Information Technology",
        delhiGeneral: { minRank: 196017, maxRank: 273318 },
        outsideGeneral: { minRank: 93312, maxRank: 108015 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 202954, maxRank: 304554 },
        outsideGeneral: { minRank: 95714, maxRank: 114915 },
      },
    ],
  },
  {
    id: "hmritm",
    code: "HMRITM",
    name: "HMR Institute of Technology & Management",
    location: "Hamidpur, Delhi",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering (Shift I)",
        delhiGeneral: { minRank: 170346, maxRank: 344737 },
        outsideGeneral: { minRank: 88750, maxRank: 129429 },
      },
      {
        branch: "Computer Science & Engineering (Shift II)",
        delhiGeneral: { minRank: 324782, maxRank: 365674 },
        outsideGeneral: { minRank: 129758, maxRank: 131437 },
      },
      {
        branch: "Computer Science & Technology",
        delhiGeneral: { minRank: 304733, maxRank: 384591 },
        outsideGeneral: { minRank: 76043, maxRank: 132611 },
      },
      {
        branch: "CSE (Cyber Security)",
        delhiGeneral: { minRank: 133481, maxRank: 374287 },
        outsideGeneral: { minRank: 120771, maxRank: 128879 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 174625, maxRank: 373039 },
        outsideGeneral: { minRank: 111097, maxRank: 135130 },
      },
      {
        branch: "CSE - Artificial Intelligence",
        delhiGeneral: { minRank: 155925, maxRank: 402191 },
        outsideGeneral: { minRank: 122975, maxRank: 136251 },
      },
      {
        branch: "CSE - Data Science",
        delhiGeneral: { minRank: 309860, maxRank: 403124 },
        outsideGeneral: { minRank: 123020, maxRank: 138471 },
      },
      {
        branch: "Information Technology",
        delhiGeneral: { minRank: 334279, maxRank: 411571 },
        outsideGeneral: { minRank: 124260, maxRank: 142043 },
      },
      {
        branch: "Electrical Engineering",
        delhiGeneral: { minRank: 264319, maxRank: 428807 },
        outsideGeneral: { minRank: 136159, maxRank: 141898 },
      },
      {
        branch: "Mechanical Engineering",
        delhiGeneral: { minRank: 225897, maxRank: 448363 },
        outsideGeneral: { minRank: 146092, maxRank: 148144 },
      },
    ],
  },
  {
    id: "dtc",
    code: "DTC",
    name: "Delhi Technical Campus",
    location: "Greater Noida, UP",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 127461, maxRank: 416383 },
        outsideGeneral: { minRank: 75331, maxRank: 129321 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 172527, maxRank: 418796 },
        outsideGeneral: { minRank: 98637, maxRank: 131158 },
      },
      {
        branch: "Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 210983, maxRank: 417906 },
        outsideGeneral: { minRank: 85105, maxRank: 124443 },
      },
      {
        branch: "CSE - Data Science",
        delhiGeneral: { minRank: 251832, maxRank: 428915 },
        outsideGeneral: { minRank: 91462, maxRank: 135133 },
      },
    ],
  },
  {
    id: "jemtec",
    code: "JEMTEC (JIMS)",
    name: "JIMS Engineering Management Technical Campus",
    location: "Greater Noida, UP",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 138492, maxRank: 471721 },
        outsideGeneral: { minRank: 77154, maxRank: 145308 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 171915, maxRank: 427409 },
        outsideGeneral: { minRank: 101882, maxRank: 139233 },
      },
      {
        branch: "Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 357266, maxRank: 482011 },
        outsideGeneral: { minRank: 142387, maxRank: 148676 },
      },
      {
        branch: "Artificial Intelligence & Data Science",
        delhiGeneral: { minRank: 184970, maxRank: 474949 },
        outsideGeneral: { minRank: 135482, maxRank: 147028 },
      },
    ],
  },
  {
    id: "fimt",
    code: "FIMT",
    name: "Fairfield Institute of Management & Technology",
    location: "Kapashera, New Delhi",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 250084, maxRank: 436577 },
        outsideGeneral: { minRank: 115455, maxRank: 152193 },
      },
      {
        branch: "Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 292592, maxRank: 486595 },
        outsideGeneral: { minRank: 123144, maxRank: 154551 },
      },
      {
        branch: "Information Technology",
        delhiGeneral: { minRank: 288782, maxRank: 508396 },
        outsideGeneral: { minRank: 129140, maxRank: 142148 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 401706, maxRank: 533750 },
        outsideGeneral: { minRank: 157371, maxRank: 157966 },
      },
    ],
  },
  {
    id: "mbs",
    code: "MBS College",
    name: "MBS College of Engineering & Technology",
    location: "Sector-09, Dwarka, Delhi",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 111712, maxRank: 334449 },
        outsideGeneral: { minRank: 100440, maxRank: 142545 },
      },
      {
        branch: "B.Tech (AI & ML)",
        delhiGeneral: { minRank: 215227, maxRank: 359037 },
        outsideGeneral: { minRank: 147734, maxRank: 150327 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 309765, maxRank: 376047 },
        outsideGeneral: { minRank: 125761, maxRank: 134884 },
      },
      {
        branch: "Civil Engineering",
        delhiGeneral: { minRank: 235819, maxRank: 454484 },
        outsideGeneral: { minRank: 158844, maxRank: 164654 },
      },
    ],
  },
  {
    id: "echelon",
    code: "Echelon",
    name: "Echelon Institute of Technology",
    location: "Faridabad, Haryana",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 108522, maxRank: 575397 },
        outsideGeneral: { minRank: 116083, maxRank: 156269 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 245621, maxRank: 535625 },
        outsideGeneral: { minRank: 138680, maxRank: 158229 },
      },
      {
        branch: "Artificial Intelligence & Data Science",
        delhiGeneral: { minRank: 314541, maxRank: 584592 },
        outsideGeneral: { minRank: 118985, maxRank: 151117 },
      },
      {
        branch: "CSE (Cyber Security)",
        delhiGeneral: { minRank: 300656, maxRank: 596893 },
        outsideGeneral: { minRank: 135748, maxRank: 163336 },
      },
      {
        branch: "CSE - Data Science",
        delhiGeneral: { minRank: 263085, maxRank: 600472 },
        outsideGeneral: { minRank: 159143, maxRank: 162257 },
      },
      {
        branch: "B.Tech CSE (IOT) & Blockchain Technology",
        delhiGeneral: { minRank: 237102, maxRank: 621286 },
        outsideGeneral: { minRank: 166563, maxRank: 168536 },
      },
      {
        branch: "Robotics & Artificial Intelligence",
        delhiGeneral: { minRank: 226685, maxRank: 607920 },
        outsideGeneral: { minRank: 162507, maxRank: 168280 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 213462, maxRank: 586023 },
        outsideGeneral: { minRank: 144806, maxRank: 162095 },
      },
      {
        branch: "Civil Engineering",
        delhiGeneral: { minRank: 301716, maxRank: 576616 },
        outsideGeneral: { minRank: 152685, maxRank: 171644 },
      },
      {
        branch: "Mechanical Engineering",
        delhiGeneral: { minRank: 436058, maxRank: 597890 },
        outsideGeneral: { minRank: 156989, maxRank: 172146 },
      },
    ],
  },
  {
    id: "gnit",
    code: "GNIT",
    name: "Greater Noida Institute of Technology",
    location: "Greater Noida, UP",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 189073, maxRank: 435498 },
        outsideGeneral: { minRank: 96705, maxRank: 135258 },
      },
      {
        branch: "Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 189073, maxRank: 456059 },
        outsideGeneral: { minRank: 115305, maxRank: 138190 },
      },
    ],
  },
  {
    id: "dird",
    code: "DIRD",
    name: "Delhi Institute of Sciences & Technology (DIRD)",
    location: "Nangli Poona, Delhi",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 160449, maxRank: 327017 },
        outsideGeneral: { minRank: 78861, maxRank: 111946 },
      },
    ],
  },
  {
    id: "sbit",
    code: "SBIT",
    name: "Shri Balwant Institute of Technology",
    location: "Sonipat, NCR",
    campusType: "Reputed Private Institute",
    branches: [
      {
        branch: "Computer Science & Engineering",
        delhiGeneral: { minRank: 377964, maxRank: 512189 },
        outsideGeneral: { minRank: 131616, maxRank: 148972 },
      },
      {
        branch: "CSE - Artificial Intelligence & Machine Learning",
        delhiGeneral: { minRank: 316564, maxRank: 531976 },
        outsideGeneral: { minRank: 144359, maxRank: 152616 },
      },
      {
        branch: "B.Tech CSE (AI & DS)",
        delhiGeneral: { minRank: 258750, maxRank: 536707 },
        outsideGeneral: { minRank: 119249, maxRank: 153227 },
      },
      {
        branch: "Electronics & Communication Engineering",
        delhiGeneral: { minRank: 387355, maxRank: 518052 },
        outsideGeneral: { minRank: 142185, maxRank: 146008 },
      },
      {
        branch: "Mechanical Engineering",
        delhiGeneral: { minRank: 261471, maxRank: 531352 },
        outsideGeneral: { minRank: 166582, maxRank: 169815 },
      },
    ],
  },
  {
    id: "usct",
    code: "USCT",
    name: "University School of Chemical Technology",
    location: "Dwarka Campus, New Delhi",
    campusType: "Govt / University Campus",
    branches: [
      {
        branch: "Chemical Engineering (Dual Degree)",
        delhiGeneral: { minRank: 61810, maxRank: 224841 },
        outsideGeneral: { minRank: 63048, maxRank: 98274 },
      },
      {
        branch: "Energy Engineering",
        delhiGeneral: { minRank: 65676, maxRank: 219366 },
        outsideGeneral: { minRank: 61898, maxRank: 97171 },
      },
    ],
  },
  {
    id: "usbas",
    code: "USBAS",
    name: "University School of Basic and Applied Sciences",
    location: "Dwarka Campus, New Delhi",
    campusType: "Govt / University Campus",
    branches: [
      {
        branch: "Industrial Chemistry",
        delhiGeneral: { minRank: 175114, maxRank: 311897 },
        outsideGeneral: { minRank: 99919, maxRank: 118472 },
      },
    ],
  },
];
