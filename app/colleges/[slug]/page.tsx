import { notFound } from "next/navigation";
import Image from "next/image";
import { colleges, cutoffs } from "@/lib/sample-data";
import { CutoffChart } from "@/components/CutoffChart";

export function generateStaticParams() {
  return colleges.map((college) => ({ slug: college.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const college = colleges.find((item) => item.slug === params.slug);
  return { title: college?.name ?? "College" };
}

export default function CollegeDetailPage({ params }: { params: { slug: string } }) {
  const college = colleges.find((item) => item.slug === params.slug);
  if (!college) notFound();

  const trend = [2022, 2023, 2024].map((year) => {
    const row: Record<string, number> = { year };
    college.topBranches.forEach((branch, index) => {
      const found = cutoffs.find((cutoff) => cutoff.college === college.shortName && cutoff.branch === branch && cutoff.year === Math.min(year, 2024));
      row[branch] = found?.closeRank ?? 12000 + index * 8000 + (2024 - year) * 1200;
    });
    return row;
  });

  return (
    <section>
      <div className="relative h-[420px] overflow-hidden">
        <Image src={college.image} alt={college.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ipu-ink via-ipu-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 pb-10 text-white">
          <span className="rounded-md bg-white px-3 py-2 text-sm font-black text-ipu-blue">GGSIPU Affiliated</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">{college.name}</h1>
          <p className="mt-3 text-lg text-blue-100">{college.location} · {college.type} · {college.totalSeats} seats</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex flex-wrap gap-2">
          {["Overview", "Branches & Fees", "Cutoff History", "Placements", "Gallery", "Location"].map((tab) => (
            <span key={tab} className="rounded-md bg-ipu-mist px-3 py-2 text-sm font-black text-ipu-blue">{tab}</span>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            <section className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-black">Overview</h2>
              <p className="mt-3 leading-7 text-slate-600">{college.overview}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {college.accreditations.map((item) => <span key={item} className="rounded-md bg-ipu-mist px-3 py-2 text-sm font-bold text-ipu-blue">{item}</span>)}
              </div>
            </section>
            <section className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-black">Cutoff History</h2>
              <div className="mt-4 h-80">
                <CutoffChart data={trend} keys={college.topBranches} />
              </div>
            </section>
            <section className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-black">Gallery</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {college.gallery.map((image) => <Image key={image} src={image} alt={college.name} width={420} height={300} className="h-48 rounded-lg object-cover" />)}
              </div>
            </section>
          </div>
          <aside className="grid h-fit gap-4">
            <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-black">Placements</h2>
              <p className="mt-3 text-3xl font-black text-ipu-blue">{college.averagePackage}</p>
              <p className="text-sm text-slate-600">{college.placementPercent}% placement percentage</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {college.recruiters.map((item) => <span key={item} className="rounded-md bg-ipu-mist px-2 py-1 text-xs font-bold text-ipu-blue">{item}</span>)}
              </div>
            </div>
            <iframe title={`${college.name} location`} src={college.mapEmbed} className="h-72 w-full rounded-lg border border-blue-100" loading="lazy" />
          </aside>
        </div>
      </div>
    </section>
  );
}
