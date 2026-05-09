import { initializeApp } from "firebase/app";
import { getFirestore, doc, writeBatch } from "firebase/firestore";
import { blogPosts, colleges, cutoffs, importantDates, mentors, seatMatrix } from "../lib/sample-data";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
});

const db = getFirestore(app);

async function seed() {
  const batch = writeBatch(db);

  colleges.forEach((college) => batch.set(doc(db, "colleges", college.slug), college));
  mentors.forEach((mentor) => batch.set(doc(db, "mentors", mentor.id), mentor));
  cutoffs.forEach((cutoff) => batch.set(doc(db, "cutoffs", cutoff.id), cutoff));
  blogPosts.forEach((post) => batch.set(doc(db, "blogPosts", post.slug), post));
  importantDates.forEach((date) => batch.set(doc(db, "importantDates", date.id), date));
  seatMatrix.forEach((row) => batch.set(doc(db, "seatMatrix", row.id), row));

  await batch.commit();
  console.log("Seeded IPU Counselling Hub sample data.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
