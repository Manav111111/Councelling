// Real IPU GGSIPU college data
export type CollegeData = {
  code: string;
  slug: string;
  fullName: string;
  shortName: string;
  alsoKnownAs?: string[];
  university: string;
  type: "government" | "private";
  subtype?: string;
  location: string;
  established: number;
  accreditation: string[];
  nirfRank: string | null;
  fees: {
    annualTuition: number;
    total4yr: number;
    currency: string;
  };
  branches: string[];
  admission: {
    exam: string[];
    minPcmPercent: number;
    quota: string;
    delhiReservationPercent?: number;
    shifts?: string[];
  };
  placements: {
    year: number;
    placementPercent: number;
    avgPackageLpa: number;
    highestPackageLpa: number;
    medianPackageLpa?: number;
    totalCompanies?: number;
    totalStudentsPlaced?: number;
    totalOffers?: number;
    topRecruiters: string[];
    note?: string;
  };
  campus: {
    sizeAcres: number | null;
    hostel: boolean;
    hostelNote?: string;
    metroAccess: boolean;
    nearestMetro?: string;
    distanceFromAirportKm?: number;
  };
  overview?: string;
  specializationNote?: string;
  // For college detail page (gallery + map images)
  image: string;
  gallery: string[];
  mapEmbed: string;
};

const cloudinary = "https://res.cloudinary.com/demo/image/upload";

export const collegesData: CollegeData[] = [
  {
    code: "USICT",
    slug: "usict",
    fullName: "University School of Information, Communication & Technology",
    shortName: "USICT",
    university: "GGSIPU",
    type: "government",
    location: "Sector 16C, Dwarka, New Delhi - 110078",
    established: 1999,
    accreditation: ["NAAC-A", "AICTE", "UGC"],
    nirfRank: "#89 Engineering (2025)",
    fees: { annualTuition: 190000, total4yr: 800000, currency: "INR" },
    branches: ["CSE", "IT", "ECE"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "No management quota (govt institute)",
      delhiReservationPercent: 85,
    },
    placements: {
      year: 2024,
      placementPercent: 80,
      avgPackageLpa: 8.5,
      highestPackageLpa: 41.2,
      medianPackageLpa: 7.2,
      totalCompanies: 70,
      topRecruiters: ["Microsoft", "Adobe", "Amazon", "Cvent", "AB InBev", "TCS Prime", "Deloitte", "Samsung R&D"],
    },
    campus: { sizeAcres: 60, hostel: true, metroAccess: true },
    overview:
      "The premier government university school under GGSIPU, USICT is the most coveted campus school offering B.Tech in CSE, IT, and ECE. Known for highly competitive cutoffs, top-tier placements, and strong campus culture at the Dwarka campus.",
    image: "/usict.webp",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=USICT+GGSIPU+Dwarka&output=embed",
  },
  {
    code: "MAIT",
    slug: "mait",
    fullName: "Maharaja Agrasen Institute of Technology",
    shortName: "MAIT",
    university: "GGSIPU",
    type: "private",
    location: "PSP Area, Plot No. 1, Sector 22, Rohini, New Delhi - 110086",
    established: 1999,
    accreditation: ["NAAC", "AICTE", "NBA"],
    nirfRank: "201-300 Engineering (2024)",
    fees: { annualTuition: 186000, total4yr: 744000, currency: "INR" },
    branches: ["CSE", "IT", "ECE", "EEE", "ME", "AI", "Data Science", "AI-ML"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "10% management quota",
      delhiReservationPercent: 85,
    },
    placements: {
      year: 2024,
      placementPercent: 78,
      avgPackageLpa: 8.0,
      highestPackageLpa: 64,
      medianPackageLpa: 6.0,
      totalOffers: 1075,
      topRecruiters: ["Amazon", "Microsoft", "Google", "ZS Associates", "Deloitte", "TCS", "HCL", "Flipkart", "D.E. Shaw", "Infosys"],
    },
    campus: { sizeAcres: 41, hostel: true, metroAccess: true },
    overview:
      "One of the most popular and well-respected private engineering colleges under GGSIPU. MAIT in Rohini offers a wide range of branches, strong placement record with 1075+ offers, and a large vibrant campus of 41 acres.",
    image: "/mait.jpg",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=MAIT+Rohini+Delhi&output=embed",
  },
  {
    code: "MSIT",
    slug: "msit",
    fullName: "Maharaja Surajmal Institute of Technology",
    shortName: "MSIT",
    university: "GGSIPU",
    type: "private",
    location: "C-4, Janakpuri, New Delhi - 110058",
    established: 2001,
    accreditation: ["NAAC-A", "AICTE", "NBA", "ISO 9001:2015"],
    nirfRank: "101-150 Colleges (2025)",
    fees: { annualTuition: 171600, total4yr: 701000, currency: "INR" },
    branches: ["CSE", "IT", "ECE", "EEE"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "10% management quota",
      shifts: ["Shift I (Morning)", "Shift II (Evening) for CSE & ECE"],
    },
    placements: {
      year: 2025,
      placementPercent: 73,
      avgPackageLpa: 7.0,
      highestPackageLpa: 50,
      totalStudentsPlaced: 439,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe", "Samsung", "Huawei", "ION Trading", "Josh Tech Group", "ZS Associates", "Infosys"],
    },
    campus: { sizeAcres: 8, hostel: false, metroAccess: true, nearestMetro: "Janakpuri West" },
    overview:
      "A top-ranked private engineering college in West Delhi known for its NAAC-A accreditation and strong industry connect. MSIT offers morning and evening shifts for CSE and ECE, giving more students access to quality education.",
    image: "/msit.jpg",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=MSIT+Janakpuri+Delhi&output=embed",
  },
  {
    code: "BPIT",
    slug: "bpit",
    fullName: "Bhagwan Parshuram Institute of Technology",
    shortName: "BPIT",
    university: "GGSIPU",
    type: "private",
    location: "PSP Area, Sector 17, Rohini, New Delhi",
    established: 1996,
    accreditation: ["AICTE", "NBA", "NAAC"],
    nirfRank: null,
    fees: { annualTuition: 170000, total4yr: 780000, currency: "INR" },
    branches: ["CSE", "IT", "ECE", "EEE", "ME"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "10% management quota",
    },
    placements: {
      year: 2024,
      placementPercent: 63,
      avgPackageLpa: 5.5,
      highestPackageLpa: 50,
      medianPackageLpa: 4.5,
      topRecruiters: ["Amazon", "Zomato", "Newgen", "Cognizant", "Accenture", "TCS", "Wipro", "Infosys", "Hitachi"],
    },
    campus: { sizeAcres: null, hostel: false, metroAccess: true },
    overview:
      "One of the oldest private engineering colleges under GGSIPU, established in 1996. BPIT in Rohini offers solid placement outcomes with a highest package of 50 LPA and 80% placement rate across CSE, IT, ECE, and other branches.",
    image: "/bpit.jpg",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=BPIT+Rohini+Delhi&output=embed",
  },
  {
    code: "BVCOE",
    slug: "bvcoe",
    fullName: "Bharati Vidyapeeth's College of Engineering",
    shortName: "BVCOE",
    university: "GGSIPU",
    type: "private",
    location: "A-4, Paschim Vihar, Rohtak Road, New Delhi - 110063",
    established: 1999,
    accreditation: ["AICTE", "NBA", "NAAC-A", "ISO 9001:2015"],
    nirfRank: "201-300 Engineering (2024)",
    fees: { annualTuition: 170000, total4yr: 740000, currency: "INR" },
    branches: ["CSE", "IT", "ECE", "EEE", "Instrumentation & Control"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "10% management quota",
    },
    placements: {
      year: 2024,
      placementPercent: 68,
      avgPackageLpa: 6.0,
      highestPackageLpa: 64,
      medianPackageLpa: 6.5,
      totalStudentsPlaced: 335,
      topRecruiters: ["IBM", "Adobe", "Amazon", "Infosys", "Adani Group", "TCS", "Airtel", "EY", "HSBC", "Cognizant"],
    },
    campus: { sizeAcres: null, hostel: true, hostelNote: "Girls hostel only", metroAccess: true, nearestMetro: "Paschim Vihar East" },
    overview:
      "A NAAC-A accredited private engineering college in Paschim Vihar with impressive placement stats — 85% placement rate and a highest package of 64 LPA. Offers Instrumentation & Control as a unique branch alongside standard engineering programs.",
    image: "/bvcoe.webp",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=BVCOE+Paschim+Vihar+Delhi&output=embed",
  },
  {
    code: "VIPS",
    slug: "vips",
    fullName: "Vivekananda Institute of Professional Studies",
    shortName: "VIPS",
    university: "GGSIPU",
    type: "private",
    location: "AU-14, Pitampura, New Delhi - 110034",
    established: 1999,
    accreditation: ["AICTE", "BCI", "NAAC"],
    nirfRank: null,
    fees: { annualTuition: 170000, total4yr: 720000, currency: "INR" },
    branches: ["CSE", "IT", "Law (BA LLB)", "Law (BBA LLB)", "BBA"],
    admission: {
      exam: ["JEE Main", "IPU CET", "CLAT"],
      minPcmPercent: 55,
      quota: "10% management quota",
    },
    placements: {
      year: 2024,
      placementPercent: 43,
      avgPackageLpa: 4.4,
      highestPackageLpa: 8.0,
      medianPackageLpa: 4.03,
      topRecruiters: ["Wipro", "Oracle", "Infosys", "Amazon", "Deloitte"],
      note: "Engineering placements separate from law/management",
    },
    campus: { sizeAcres: null, hostel: false, metroAccess: true, nearestMetro: "Pitampura" },
    overview:
      "A multi-disciplinary institute in Pitampura offering Engineering, Law, and Management programs under GGSIPU. VIPS is especially popular for its Law programs (BA LLB and BBA LLB) and is well-connected via the metro.",
    image: "/VIPS-Delhi.webp",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=VIPS+Pitampura+Delhi&output=embed",
  },
  {
    code: "GTBIT",
    slug: "gtbit",
    fullName: "Guru Tegh Bahadur Institute of Technology",
    shortName: "GTBIT",
    subtype: "Sikh minority institution",
    university: "GGSIPU",
    type: "private",
    location: "G.B. Pant Hospital Road, Rajouri Garden, New Delhi - 110064",
    established: 1999,
    accreditation: ["AICTE", "NAAC"],
    nirfRank: null,
    fees: { annualTuition: 200000, total4yr: 800000, currency: "INR" },
    branches: ["CSE", "IT", "ECE", "ME", "AI-ML", "Data Science"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "70% Sikh minority quota + 10% management quota",
    },
    placements: {
      year: 2024,
      placementPercent: 58,
      avgPackageLpa: 5.5,
      highestPackageLpa: 45,
      medianPackageLpa: 5.0,
      topRecruiters: ["HSBC", "Infosys", "Amazon", "Paytm", "HCL", "Ericsson", "American Express"],
    },
    campus: { sizeAcres: null, hostel: false, metroAccess: true, nearestMetro: "Rajouri Garden" },
    overview:
      "A Sikh minority institution near Rajouri Garden metro. GTBIT has 70% seats reserved for Sikh minority students, making it unique in the IPU ecosystem. It offers newer branches like AI-ML and Data Science alongside core engineering.",
    image: "/guru tej bahadur.jpg",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=GTBIT+Rajouri+Garden+Delhi&output=embed",
  },
  {
    code: "ADGITM",
    slug: "adgitm",
    fullName: "Dr. Akhilesh Das Gupta Institute of Technology & Management",
    shortName: "ADGITM",
    alsoKnownAs: ["NIEC", "Northern India Engineering College"],
    university: "GGSIPU",
    type: "private",
    location: "FC-26, Shastri Park, New Delhi - 110053",
    established: 2003,
    accreditation: ["AICTE", "BCI", "NBA", "NAAC-A"],
    nirfRank: null,
    fees: { annualTuition: 160000, total4yr: 640000, currency: "INR" },
    branches: ["CSE", "IT", "ECE", "ME", "EEE", "Instrumentation", "AI-ML", "Data Science"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "10% management quota",
    },
    placements: {
      year: 2024,
      placementPercent: 53,
      avgPackageLpa: 4.8,
      highestPackageLpa: 48,
      totalStudentsPlaced: 1500,
      topRecruiters: ["TCS", "Infosys", "Capgemini", "HCL", "Wipro", "IBM"],
    },
    campus: { sizeAcres: 8.08, hostel: true, metroAccess: true },
    overview:
      "Formerly known as Northern India Engineering College (NIEC), ADGITM at Shastri Park offers the most affordable fees among top IPU colleges at ₹1.6L/year. NAAC-A accredited with hostel facilities and a broad range of branches.",
    image: "/adgips.jpg",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=ADGITM+Shastri+Park+Delhi&output=embed",
  },
  {
    code: "HMR",
    slug: "hmr",
    fullName: "HMR Institute of Technology & Management",
    shortName: "HMR",
    university: "GGSIPU",
    type: "private",
    location: "Hamidpur, North West Delhi - 110036",
    established: 2002,
    accreditation: ["AICTE", "NAAC"],
    nirfRank: "Top 200 Engineering (2024)",
    fees: { annualTuition: 149000, total4yr: 560000, currency: "INR" },
    branches: ["CSE", "IT", "ECE", "AI", "Cyber Security"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 60,
      quota: "10% management quota",
    },
    placements: {
      year: 2024,
      placementPercent: 83,
      avgPackageLpa: 5.35,
      highestPackageLpa: 15,
      totalCompanies: 80,
      topRecruiters: ["KPMG", "TCS", "IBM", "Kodnest", "Planet Spark", "McKinley Rice", "Jaro Education", "Medtronic"],
    },
    campus: { sizeAcres: 5, hostel: false, metroAccess: false, distanceFromAirportKm: 35 },
    overview:
      "HMR in North-West Delhi offers the lowest fees (₹1.49L/year) among major IPU colleges and a good 83% placement rate. It uniquely offers Cyber Security as a branch, making it attractive for students interested in information security.",
    image: "/hmr.jpg",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=HMR+Institute+Hamidpur+Delhi&output=embed",
  },
  {
    code: "USAR",
    slug: "usar",
    fullName: "University School of Automation & Robotics",
    shortName: "USAR",
    alsoKnownAs: ["USAR Delhi", "University School of Automation and Robotics"],
    university: "GGSIPU",
    type: "government",
    location: "East Campus, Surajmal Vihar, New Delhi - 110092",
    established: 2019,
    accreditation: ["AICTE", "UGC", "GGSIPU"],
    nirfRank: null,
    fees: { annualTuition: 220000, total4yr: 850000, currency: "INR" },
    branches: ["Robotics & Automation", "Artificial Intelligence", "Data Science", "Internet of Things (IoT)"],
    admission: {
      exam: ["JEE Main", "IPU CET"],
      minPcmPercent: 55,
      quota: "No management quota (government school)",
      delhiReservationPercent: 85,
    },
    placements: {
      year: 2024,
      placementPercent: 48,
      avgPackageLpa: 5.8,
      highestPackageLpa: 12,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Robotics & AI startups"],
      note: "Relatively new school (est. 2019), placement data still maturing.",
    },
    campus: { sizeAcres: null, hostel: true, metroAccess: true, nearestMetro: "Surajmal Vihar (Pink Line)" },
    overview:
      "A niche government school under GGSIPU exclusively focused on Robotics, Automation, AI, Data Science, and IoT — aligned with Industry 4.0 demands. Being newly established (2019), it is still building its placement track record but offers unique specializations not found at other IPU colleges.",
    specializationNote: "Only GGSIPU school exclusively focused on Robotics, Automation, AI and emerging tech.",
    image: "/usar.jpg",
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`,
    ],
    mapEmbed: "https://www.google.com/maps?q=USAR+GGSIPU+Surajmal+Vihar+Delhi&output=embed",
  },
];
