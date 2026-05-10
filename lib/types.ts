export type Category = "General" | "OBC" | "SC" | "ST" | "EWS" | "PH";
export type Branch =
  | "CSE"
  | "CS"
  | "ECE"
  | "IT"
  | "ME"
  | "Civil"
  | "MBA"
  | "Law"
  | "AIDS"
  | "BBA";

export type College = {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  type: "Government" | "Private";
  image: string;
  logo: string;
  topBranches: Branch[];
  averageFees: number;
  placementPercent: number;
  averagePackage: string;
  totalSeats: number;
  accreditations: string[];
  overview: string;
  recruiters: string[];
  gallery: string[];
  mapEmbed: string;
};

export type Mentor = {
  id: string;
  name: string;
  college: string;
  branch: Branch;
  batch: string;
  photo: string;
  bio: string;
  journey: string;
  tips: string[];
  tags: string[];
  linkedin: string;
  instagram: string;
  bookingUrl: string;
};

export type Cutoff = {
  id: string;
  year: number;
  college: string;
  branch: Branch;
  category: Category;
  round: 1 | 2 | 3;
  openRank: number;
  closeRank: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tag: string;
  thumbnail: string;
  excerpt: string;
  content: string;
};
