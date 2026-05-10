import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { mentors } from "@/lib/sample-data";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return mentors.map((mentor) => ({ id: mentor.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const mentor = mentors.find((item) => item.id === params.id);
  return { title: mentor?.name ?? "Mentor" };
}

export default function MentorDetailPage({ params }: { params: { id: string } }) {
  const mentor = mentors.find((item) => item.id === params.id);
  if (!mentor) notFound();

  return (
    <section className="section">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[360px_1fr]">
        <div className="h-fit overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm">
          <Image src={mentor.photo} alt={mentor.name} width={720} height={720} sizes="(max-width: 1024px) 100vw, 360px" className="h-96 w-full object-cover" />
          <div className="p-5">
            <h1 className="text-3xl font-black">{mentor.name}</h1>
            <p className="mt-1 font-bold text-ipu-blue">{mentor.college} · {mentor.branch} · {mentor.batch}</p>
            <Button href={mentor.bookingUrl} className="mt-5 w-full">Book a Session</Button>
          </div>
        </div>
        <div className="grid gap-5">
          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Full bio</h2>
            <p className="mt-3 leading-7 text-slate-600">{mentor.bio}</p>
            <p className="mt-3 leading-7 text-slate-600">{mentor.journey}</p>
          </section>
          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Tips shared</h2>
            <div className="mt-4 grid gap-3">
              {mentor.tips.map((tip) => <p key={tip} className="rounded-md bg-ipu-mist p-3 font-semibold text-ipu-blue">{tip}</p>)}
            </div>
          </section>
          <section className="flex flex-wrap gap-3 rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <a href={mentor.linkedin} className="inline-flex items-center gap-2 rounded-md border border-blue-100 px-4 py-2 font-bold text-ipu-blue"><Linkedin size={18} /> LinkedIn</a>
            <a href={mentor.instagram} className="inline-flex items-center gap-2 rounded-md border border-blue-100 px-4 py-2 font-bold text-ipu-blue"><Instagram size={18} /> Instagram</a>
          </section>
        </div>
      </div>
    </section>
  );
}
