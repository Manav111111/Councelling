import { ArrowRight, BookOpenCheck, GraduationCap, LineChart, MessagesSquare, SearchCheck, CheckCircle2, Youtube, MessageCircle } from "lucide-react";
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
  {
    q: "Why should I take your subscription for counselling?",
    a: "Our premium subscription provides you with complete end-to-end support for IPU admissions. You get Weekly Google Meets with Mentors, instant alerts on important notices, registration and choice filling assistance, a personalized choice filling list tailored to your rank, exclusive community access, and future help and guidance even after you enter college."
  },
  {
    q: "What is IPU counselling?",
    a: "IPU counselling is the online seat allotment process for admission into Guru Gobind Singh Indraprastha University affiliated colleges based on entrance ranks, category, and seat availability. Always verify final rules, schedules, and eligibility through official notices before making decisions."
  },
  {
    q: "How should I arrange my choice list?",
    a: "Place colleges and branches in the exact order you genuinely prefer, not only based on cutoff trends. Start with dream options, then realistic choices, and finally safe backup options."
  },
  {
    q: "Can I upgrade after Round 1?",
    a: "Yes, if you choose the float/upgrade option during counselling, you can participate in later rounds for a better college or branch while keeping your current allotted seat temporarily."
  },
  {
    q: "Which documents are needed for reporting?",
    a: "Common documents include rank card, admit card, Class 10th & 12th marksheets, category certificate (if applicable), ID proof, passport photos, and allotment letter. Official counselling notices provide the final required list."
  },
  {
    q: "How do category certificates affect allotment?",
    a: "Reserved category certificates allow candidates to compete for reserved seats under quotas like OBC, SC, ST, or EWS. Invalid or outdated certificates can cancel reservation benefits during verification."
  },
  {
    q: "Do cutoffs change every year?",
    a: "Yes, cutoffs vary every year depending on factors like number of applicants, exam difficulty, seat intake, and branch demand. Historical cutoffs help estimate trends but do not guarantee admission."
  },
  {
    q: "Should I prefer branch or college?",
    a: "Choose branch if you already have a strong career interest like CSE or AI. Choose a better college if you value campus exposure, placements, and overall opportunities more."
  },
  {
    q: "How does sliding or floating work?",
    a: "Floating allows you to keep your current seat while trying for a higher preference in later rounds. Sliding usually means upgrading to another branch within the same college if seats become available."
  },
  {
    q: "What happens in stray vacancy round?",
    a: "The stray vacancy round fills remaining vacant seats after regular counselling rounds end. Admissions happen quickly, and seat availability is usually limited and highly dynamic."
  },
  {
    q: "Can I save predictions and colleges?",
    a: "Yes, users can save predicted colleges, compare options later, and track cutoff trends for better decision-making during counselling. This feature is useful for building and revising choice lists."
  }
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/predict">Predict My College <ArrowRight size={18} /></Button>
              <Button href="/mentors" variant="secondary">Meet Mentors</Button>
              <a
                href="https://www.youtube.com/@IpuHelp-p4y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md"
              >
                <Youtube size={18} /> YouTube Subscribe
              </a>
              <a
                href="https://chat.whatsapp.com/Lff2bHCTdrSLUbxLjyOxQ2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-green-600 hover:shadow-md"
              >
                <MessageCircle size={18} /> WhatsApp Community
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                ["100+", "students helped"],
                ["10+", "colleges covered"],
                ["15+", "mentors available"]
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
              <Image src="/header.png" alt="IPU campus students" width={900} height={680} className="w-full h-auto object-contain" priority />
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
                Skip the guesswork. Get end-to-end guidance from IPU&apos;s top rankers to secure your dream college.
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
            {faqs.map((faq, index) => (
              <details key={index} className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm group">
                <summary className="cursor-pointer font-bold text-ipu-ink group-open:text-ipu-blue transition-colors">{faq.q}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600 font-medium">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
