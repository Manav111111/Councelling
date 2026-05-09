import { CalendarCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Mentor } from "@/lib/types";

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm">
      <div className="relative h-56">
        <Image src={mentor.photo} alt={mentor.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-ipu-ink">{mentor.name}</h3>
            <p className="text-sm font-semibold text-ipu-blue">{mentor.college} · {mentor.branch} · {mentor.batch}</p>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 min-h-16 text-sm leading-6 text-slate-600">{mentor.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {mentor.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-ipu-mist px-2 py-1 text-xs font-bold text-ipu-blue">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <a href={mentor.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-ipu-blue px-3 py-2 text-sm font-bold text-white">
            <CalendarCheck size={16} /> Book
          </a>
          <Link href={`/mentors/${mentor.id}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-100 px-3 py-2 text-sm font-bold text-ipu-blue">
            <ExternalLink size={16} /> Profile
          </Link>
        </div>
      </div>
    </article>
  );
}
