import type { BlogPost, College, Cutoff, Mentor } from "@/lib/types";

const cloudinary = "https://res.cloudinary.com/demo/image/upload";

export const colleges: College[] = [
  {
    slug: "mait",
    name: "Maharaja Agrasen Institute of Technology",
    shortName: "MAIT",
    location: "Rohini, Delhi",
    type: "Private",
    image: `${cloudinary}/w_1200,h_700,c_fill,q_auto/f_auto/sample.jpg`,
    logo: `${cloudinary}/w_180,h_180,c_fill,q_auto/f_auto/sample.jpg`,
    topBranches: ["CSE", "IT", "ECE"],
    averageFees: 150000,
    placementPercent: 86,
    averagePackage: "7.2 LPA",
    totalSeats: 1320,
    accreditations: ["NAAC A", "AICTE"],
    overview:
      "A sought-after IPU engineering institute in North Delhi, known for strong CS/IT demand, active societies, and reliable campus placements.",
    recruiters: ["Infosys", "TCS", "ZS", "Cognizant", "Amazon"],
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`
    ],
    mapEmbed: "https://www.google.com/maps?q=MAIT%20Rohini&output=embed"
  },
  {
    slug: "msit",
    name: "Maharaja Surajmal Institute of Technology",
    shortName: "MSIT",
    location: "Janakpuri, Delhi",
    type: "Private",
    image: `${cloudinary}/w_1200,h_700,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
    logo: `${cloudinary}/w_180,h_180,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
    topBranches: ["CSE", "IT", "ECE"],
    averageFees: 145000,
    placementPercent: 84,
    averagePackage: "6.8 LPA",
    totalSeats: 960,
    accreditations: ["NBA", "AICTE"],
    overview:
      "A West Delhi favorite with compact commute options, active coding culture, and strong preference among technology aspirants.",
    recruiters: ["Accenture", "Wipro", "Deloitte", "TCS", "IBM"],
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`
    ],
    mapEmbed: "https://www.google.com/maps?q=MSIT%20Janakpuri&output=embed"
  },
  {
    slug: "bpit",
    name: "Bhagwan Parshuram Institute of Technology",
    shortName: "BPIT",
    location: "Rohini, Delhi",
    type: "Private",
    image: `${cloudinary}/w_1200,h_700,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
    logo: `${cloudinary}/w_180,h_180,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
    topBranches: ["CSE", "IT", "ECE"],
    averageFees: 142000,
    placementPercent: 78,
    averagePackage: "5.9 LPA",
    totalSeats: 720,
    accreditations: ["AICTE"],
    overview:
      "A practical engineering choice for students balancing cutoffs, fees, branch availability, and North Delhi location.",
    recruiters: ["Capgemini", "HCL", "Infosys", "Newgen", "TCS"],
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample.jpg`
    ],
    mapEmbed: "https://www.google.com/maps?q=BPIT%20Rohini&output=embed"
  },
  {
    slug: "usict",
    name: "University School of Information, Communication and Technology",
    shortName: "USICT",
    location: "Dwarka, Delhi",
    type: "Government",
    image: `${cloudinary}/w_1200,h_700,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
    logo: `${cloudinary}/w_180,h_180,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
    topBranches: ["CSE", "IT", "ECE"],
    averageFees: 95000,
    placementPercent: 90,
    averagePackage: "9.5 LPA",
    totalSeats: 360,
    accreditations: ["GGSIPU Campus School", "AICTE"],
    overview:
      "The university campus technology school with high preference, strong academic reputation, and competitive closing ranks.",
    recruiters: ["Adobe", "Amazon", "TCS Digital", "Nagarro", "ZS"],
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-3.jpg`
    ],
    mapEmbed: "https://www.google.com/maps?q=USICT%20GGSIPU%20Dwarka&output=embed"
  },
  {
    slug: "vips",
    name: "Vivekananda Institute of Professional Studies",
    shortName: "VIPS",
    location: "Pitampura, Delhi",
    type: "Private",
    image: `${cloudinary}/w_1200,h_700,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
    logo: `${cloudinary}/w_180,h_180,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
    topBranches: ["Law", "BBA", "MBA"],
    averageFees: 138000,
    placementPercent: 76,
    averagePackage: "5.4 LPA",
    totalSeats: 1080,
    accreditations: ["NAAC A++", "BCI"],
    overview:
      "A premium professional studies campus popular for law, management, media, and business programs under GGSIPU.",
    recruiters: ["EY", "KPMG", "HDFC Bank", "Jaro", "Times Group"],
    gallery: [
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-5.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/cld-sample-4.jpg`,
      `${cloudinary}/w_600,h_420,c_fill,q_auto/f_auto/sample.jpg`
    ],
    mapEmbed: "https://www.google.com/maps?q=VIPS%20Pitampura&output=embed"
  },
  {
    slug: "dtu",
    name: "Delhi Technological University",
    shortName: "DTU",
    location: "Shahbad Daulatpur, Delhi",
    type: "Government",
    image: "/DTU.jpg",
    logo: "/DTU.jpg",
    topBranches: ["CSE", "IT", "Software Engineering"],
    averageFees: 236000,
    placementPercent: 88,
    averagePackage: "15.4 LPA",
    totalSeats: 2500,
    accreditations: ["NAAC A+", "AICTE", "UGC"],
    overview: "One of India's top state engineering universities, DTU (formerly Delhi College of Engineering) is highly regarded for strong placements and coding culture.",
    recruiters: ["Microsoft", "Google", "Amazon", "Adobe", "Goldman Sachs"],
    gallery: ["/DTU.jpg"],
    mapEmbed: "https://www.google.com/maps?q=DTU%20Delhi&output=embed"
  }
];

export const mentors: Mentor[] = [
  {
    id: "manav-gupta",
    name: "Manav Gupta",
    college: "ADGIPS",
    branch: "CS",
    batch: "2024",
    photo: "/MANAV.webp",
    bio: "Computer Science mentor from the 2024 batch, helping you make the right choices for your IPU counselling.",
    journey: "Navigated the IPU counselling process to secure a top Computer Science seat.",
    tips: ["Lock ambitious choices first", "Keep commute realistic", "Compare branch demand across rounds"],
    tags: ["Computer Science", "2024 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Manav%20Gupta"
  },
  {
    id: "mohit-aggarwal",
    name: "Mohit Aggarwal",
    college: "ADGIPS", 
    branch: "CS",
    batch: "2024",
    photo: "/mohit.webp",
    bio: "Computer Science mentor from the 2024 batch with expertise in choice filling.",
    journey: "Secured a Computer Science seat by carefully planning the preference list.",
    tips: ["Do not skip campus options", "Track last two years of round movement", "Keep documents ready before allotment"],
    tags: ["Computer Science", "2024 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Mohit%20Aggarwal"
  },
  {
    id: "prashant-kumar",
    name: "Prashant Kumar",
    college: "ADGIPS",
    branch: "CS",
    batch: "2024",
    photo: "/prashant.webp",
    bio: "Computer Science mentor helping you understand branch tradeoffs.",
    journey: "Successfully navigated the cutoff variations to get the desired branch.",
    tips: ["Keep original documents sorted", "Check reporting instructions twice", "Talk to seniors before freezing"],
    tags: ["Computer Science", "2024 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Prashant%20Kumar"
  },
  {
    id: "sambhav-yadav",
    name: "Sambhav Yadav",
    college: "ADGIPS",
    branch: "CS",
    batch: "2024",
    photo: "/sambhav (2).jpg",
    bio: "Expert mentor for Computer Science aspirants.",
    journey: "Used upgrade rounds strategically to land a top college.",
    tips: ["Focus on your core interest", "Understand the sliding round", "Always keep a backup plan"],
    tags: ["Computer Science", "2024 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Sambhav%20Yadav"
  },
  {
    id: "shanu-singh",
    name: "Shanu Singh",
    college: "HMR",
    branch: "AIDS",
    batch: "2024",
    photo: "/shanu.webp",
    bio: "AIDS mentor from HMR 2024 batch helping you with specialized branch choices.",
    journey: "Found her passion in AI and Data Science through the IPU counselling system.",
    tips: ["Research specialized branches early", "Check HMR faculty profiles", "Don't ignore newer specializations"],
    tags: ["AIDS", "HMR", "2024 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Shanu%20Singh"
  },
  {
    id: "manish-gupta",
    name: "Manish Gupta",
    college: "GTBIT",
    branch: "IT",
    batch: "2025",
    photo: "/manish.jpg",
    bio: "IT mentor from GTBIT specializing in choice filling and document verification.",
    journey: "Guided by mentors to secure an IT seat at GTBIT.",
    tips: ["Verify all your category certificates", "Check the official IPU notices daily", "Never miss the choice locking deadline"],
    tags: ["IT", "GTBIT", "2025 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Manish%20Gupta"
  },
  {
    id: "nikhil",
    name: "Nikhil",
    college: "JIMS (JEMTEC)",
    branch: "CSE",
    batch: "2025",
    photo: "/nikhil.webp",
    bio: "CSE mentor from JIMS (JEMTEC) helping you navigate Greater Noida colleges.",
    journey: "Strategically chose JIMS for its growth and CSE focus.",
    tips: ["Focus on location connectivity", "Look at recent placement trends", "Keep your document set ready"],
    tags: ["CSE", "JIMS", "2025 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Nikhil"
  },
  {
    id: "dev-dtu",
    name: "Dev",
    college: "DTU",
    branch: "Civil",
    batch: "2025",
    photo: "/dev.jpg",
    bio: "Civil Engineering mentor from DTU helping you with engineering admissions.",
    journey: "Joined DTU to pursue my passion in Civil Engineering and explore the vibrant campus life.",
    tips: ["Understand the JAC Delhi rounds carefully", "Check internal branch sliding rules", "Look at tech culture and societies in DTU"],
    tags: ["Civil", "DTU", "2025 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Dev"
  },
  {
    id: "kartik-gupta",
    name: "Kartik Gupta",
    college: "MAIT",
    branch: "CSE",
    batch: "2025",
    photo: "/kartik gupta.jpg",
    bio: "CSE mentor from MAIT helping you with choice filling and technical branch selection.",
    journey: "Secured a CSE seat at MAIT through dedicated rank-based choice filling and understanding the counselling rounds.",
    tips: ["Focus on MAIT's vibrant coding culture", "Check recent placement trends for CSE/IT", "Ensure all documents are ready for the reporting round"],
    tags: ["CSE", "MAIT", "2025 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Kartik%20Gupta"
  },
  {
    id: "suraj-mathpal",
    name: "Suraj Mathpal",
    college: "BVCOE",
    branch: "IT",
    batch: "2024",
    photo: "/Suraj Mathpal.jpg",
    bio: "IT mentor from BVCOE with expertise in choice filling and reporting.",
    journey: "Strategically used the upgrade rounds to secure a top IT seat at BVCOE.",
    tips: ["Understand the BVCOE campus culture", "Check IT placement stats carefully", "Always keep your document set ready"],
    tags: ["IT", "BVCOE", "2024 batch"],
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    bookingUrl: "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20book%20a%20session%20with%20Suraj%20Mathpal"
  }
];

export const cutoffs: Cutoff[] = [
  { id: "1", year: 2023, college: "MAIT", branch: "CSE", category: "General", round: 1, openRank: 5500, closeRank: 18200 },
  { id: "2", year: 2024, college: "MAIT", branch: "CSE", category: "General", round: 2, openRank: 6200, closeRank: 20500 },
  { id: "3", year: 2023, college: "MSIT", branch: "IT", category: "General", round: 1, openRank: 7100, closeRank: 22500 },
  { id: "4", year: 2024, college: "MSIT", branch: "IT", category: "General", round: 2, openRank: 7900, closeRank: 24800 },
  { id: "5", year: 2023, college: "BPIT", branch: "ECE", category: "OBC", round: 2, openRank: 24000, closeRank: 54000 },
  { id: "6", year: 2024, college: "BPIT", branch: "ECE", category: "OBC", round: 3, openRank: 26500, closeRank: 59000 },
  { id: "7", year: 2023, college: "USICT", branch: "CSE", category: "General", round: 1, openRank: 900, closeRank: 7800 },
  { id: "8", year: 2024, college: "USICT", branch: "CSE", category: "General", round: 2, openRank: 1100, closeRank: 8500 },
  { id: "9", year: 2023, college: "VIPS", branch: "BBA", category: "General", round: 1, openRank: 4500, closeRank: 21000 },
  { id: "10", year: 2024, college: "VIPS", branch: "BBA", category: "General", round: 2, openRank: 5100, closeRank: 23800 }
];

export const importantDates = [
  { id: "registration", title: "Registration window", date: "2026-06-15", description: "Create CET counselling profile and pay participation fee." },
  { id: "choice", title: "Choice filling closes", date: "2026-06-28", description: "Freeze and print choice list before the deadline." },
  { id: "round1", title: "Round 1 allotment", date: "2026-07-04", description: "Check allotment, pay part academic fee, and choose float/freeze." }
];

export const seatMatrix = [
  { id: "mait-cse-gen", college: "MAIT", branch: "CSE", category: "General", seats: 180 },
  { id: "msit-it-gen", college: "MSIT", branch: "IT", category: "General", seats: 120 },
  { id: "usict-cse-gen", college: "USICT", branch: "CSE", category: "General", seats: 60 },
  { id: "bpit-ece-obc", college: "BPIT", branch: "ECE", category: "OBC", seats: 36 },
  { id: "vips-bba-gen", college: "VIPS", branch: "BBA", category: "General", seats: 180 }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "choice-filling-order",
    title: "How to build a smart IPU choice list",
    author: "IPU Hub Team",
    date: "2026-05-01",
    readTime: "6 min",
    tag: "Branch Guide",
    thumbnail: `${cloudinary}/w_800,h_520,c_fill,q_auto/f_auto/cld-sample.jpg`,
    excerpt: "A rank-aware framework for ordering ambitious, realistic, and backup choices.",
    content:
      "Start with the branch you actually want, then map colleges by cutoff movement, commute, placements, and senior feedback. Do not place a less preferred option above a better option only because last year's closing rank was lower."
  },
  {
    slug: "documents-before-reporting",
    title: "Documents to keep ready before reporting",
    author: "Aashi Mehra",
    date: "2026-04-22",
    readTime: "4 min",
    tag: "Campus Life",
    thumbnail: `${cloudinary}/w_800,h_520,c_fill,q_auto/f_auto/cld-sample-2.jpg`,
    excerpt: "Avoid verification stress with a clean folder of originals, photocopies, and category proofs.",
    content:
      "Keep marksheets, admit cards, rank proof, identity proof, photographs, category certificate, medical certificate, and fee receipt together. Verify the latest official notice before leaving for reporting."
  },
  {
    slug: "placements-vs-branch",
    title: "Placements vs branch: what should matter?",
    author: "Karan Bedi",
    date: "2026-04-10",
    readTime: "7 min",
    tag: "Placement Prep",
    thumbnail: `${cloudinary}/w_800,h_520,c_fill,q_auto/f_auto/cld-sample-3.jpg`,
    excerpt: "A practical way to compare branch fit, college brand, and expected opportunities.",
    content:
      "For technology roles, branch curriculum and coding culture can matter as much as campus brand. Compare average packages, recruiter diversity, commute, attendance expectations, and whether you can build projects comfortably."
  }
];

export const testimonials = [
  {
    name: "Riya Sharma",
    college: "MAIT CSE",
    batch: "2025",
    photo: `${cloudinary}/w_240,h_240,c_fill,g_face,q_auto/f_auto/sample.jpg`,
    quote: "The predictor helped me stop guessing and build a choice list that actually made sense."
  },
  {
    name: "Dev Arora",
    college: "USICT IT",
    batch: "2024",
    photo: `${cloudinary}/w_240,h_240,c_fill,g_face,q_auto/f_auto/sample.jpg`,
    quote: "Mentor calls made the reporting and upgrade decisions much calmer."
  },
  {
    name: "Naina Kapoor",
    college: "VIPS CS",
    batch: "2025",
    photo: `${cloudinary}/w_240,h_240,c_fill,g_face,q_auto/f_auto/sample.jpg`,
    quote: "I understood the entire counselling flow in one evening."
  }
];
