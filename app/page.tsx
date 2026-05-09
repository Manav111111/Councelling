import { ArrowRight, BookOpenCheck, GraduationCap, LineChart, MessagesSquare, SearchCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, mentors } from "@/lib/sample-data";

const features = [
  { title: "Rank Predictor", icon: LineChart, text: "Estimate likely colleges using historical cutoff trends and confidence bands." },
  { title: "Mentor Connect", icon: MessagesSquare, text: "Talk to seniors who have already navigated IPU rounds and reporting." },
  { title: "College Guide", icon: GraduationCap, text: "Compare fees, branches, placements, cutoffs, commute, and campus fit." },
  { title: "Counselling Process", icon: BookOpenCheck, text: "Follow a clean timeline with documents, dates, and seat-matrix clarity." }
];

const faqs = [
  "What is IPU counselling?",
  "How should I arrange my choice list?",
  "Can I upgrade after Round 1?",
  "Which documents are needed for reporting?",
  "How do category certificates affect allotment?",
  "Do cutoffs change every year?",
  "Should I prefer branch or college?",
  "How does sliding or floating work?",
  "What happens in stray vacancy round?",
  "Can I save predictions and colleges?"
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-black text-ipu-blue shadow-sm">
              <SearchCheck size={18} /> GGSIPU admissions made clearer
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-normal text-ipu-ink md:text-7xl">
              Find your college. Own your future.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-650">
              Predict likely IPU colleges, compare campus outcomes, meet seniors, and move through counselling with a plan instead of panic.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/predict">Predict My College <ArrowRight size={18} /></Button>
              <Button href="/mentors" variant="secondary">Meet Mentors</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                ["18K+", "students helped"],
                ["80+", "colleges covered"],
                ["120+", "mentors available"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-ipu-blue md:text-3xl">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-600 md:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-6 rounded-[2rem] bg-ipu-sky/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-white shadow-glow">
              <Image src="https://res.cloudinary.com/demo/image/upload/w_1200,h_900,c_fill,q_auto/f_auto/cld-sample-4.jpg" alt="IPU campus students" width={900} height={680} className="h-[420px] w-full object-cover" priority />
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {["Cutoff trends", "Mentor calls", "Choice list"].map((item) => (
                  <div key={item} className="rounded-lg bg-ipu-mist p-3 text-center text-sm font-black text-ipu-blue">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Everything a counselling decision needs" description="A single-view admissions cockpit for ranks, colleges, dates, mentors, and documents." />
          <div className="grid gap-4 md:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
                <feature.icon className="text-ipu-sky" size={28} />
                <h3 className="mt-4 text-lg font-black">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: PREMIUM BATCH */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-ipu-blue to-blue-800 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                Premium Subscription
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">Our Exclusive Counselling Batch</h2>
              <p className="mt-4 text-lg text-blue-100 leading-relaxed">
                Skip the guesswork. Get end-to-end guidance from IPU's top rankers to secure your dream college.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Registration & Choice Filling",
                  "Complete Documentation",
                  "Mentors From Every College",
                  "Weekly Google Meets With Mentors"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-green-400" size={24} shrink-0 /> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917827465966?text=Hi,%20I%20want%20to%20join%20the%20premium%20counselling%20batch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3.5 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600"
                >
                  Buy / Subscribe Now
                </a>
                <Button href="/premium" variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-none justify-center">
                  View Full Details
                </Button>
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {mentors.slice(0, 4).map((mentor, i) => (
                <div key={mentor.id} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Image src={mentor.photo} alt={mentor.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover border-2 border-white/20" />
                    <div>
                      <p className="font-bold text-sm">{mentor.name}</p>
                      <p className="text-xs text-blue-200">{mentor.college} · {mentor.branch}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-xs font-medium border-t border-white/10 pt-3">
                    <div>
                      <span className="block text-white/50 uppercase text-[10px] tracking-wider mb-0.5">Rank</span>
                      AIR {2500 + i * 1100}
                    </div>
                    <div className="text-right">
                      <span className="block text-white/50 uppercase text-[10px] tracking-wider mb-0.5">Email</span>
                      <span className="block">{mentor.name.toLowerCase().split(' ')[0]}@ipuhub.in</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Stories" title="Students who chose with confidence" />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((story) => (
              <article key={story.name} className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Image src={story.photo} alt={story.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <h3 className="font-black">{story.name}</h3>
                    <p className="text-sm font-semibold text-ipu-blue">{story.college} · {story.batch}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">“{story.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="IPU counselling FAQs" />
          <div className="grid gap-3">
            {faqs.map((question, index) => (
              <details key={question} className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-bold text-ipu-ink">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {index < 3
                    ? "Use official notices for final decisions, then use this hub to compare historical data, mentor advice, and your personal constraints."
                    : "The safest approach is to verify the latest GGSIPU notification, keep documents ready, and avoid ordering choices by guesswork alone."}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
