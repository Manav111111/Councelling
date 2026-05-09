import { ArrowRight, CheckCircle2, Video, FileText, LayoutList, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { mentors } from "@/lib/sample-data";

const WHATSAPP_LINK = "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20join%20the%20premium%20counselling%20batch.";

export default function PremiumCounsellingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ipu-blue px-4 py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-white backdrop-blur-md">
            PREMIUM COUNSELLING BATCH
          </span>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Secure Your Dream IPU College With Expert Guidance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
            Get complete end-to-end support for IPU admissions, from registration to final reporting. Never miss a deadline, and maximize your chances with our expert choice filling algorithms.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600"
            >
              Subscribe Now via WhatsApp <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-black text-ipu-ink md:text-5xl">What We Provide</h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to navigate IPU counselling successfully.</p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: LayoutList, title: "Registration & Choice Filling", desc: "Expertly crafted choice lists tailored to your rank and preferences." },
              { icon: FileText, title: "Complete Documentation", desc: "Step-by-step guidance on all required documents and certificates." },
              { icon: Users, title: "Mentors From Every College", desc: "Direct access to seniors currently studying in top IPU colleges." },
              { icon: Video, title: "Weekly Google Meets", desc: "Live doubt-clearing sessions and strategy discussions every week." },
              { icon: CheckCircle2, title: "Personalized Support", desc: "24/7 WhatsApp chat support for all your quick queries." },
              { icon: Users, title: "Reporting Assistance", desc: "Guidance on the physical reporting process and fee payment." }
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl border border-blue-50 bg-slate-50 p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 inline-flex rounded-lg bg-ipu-blue/10 p-4 text-ipu-blue">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-ipu-ink">{feature.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Mentors Section */}
      <section className="bg-slate-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-black text-ipu-ink md:text-4xl">Meet Your Mentors</h2>
            <p className="mt-4 text-lg text-slate-600">Connect with the top rankers from MAIT, MSIT, USICT, and more.</p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor, i) => (
              <div key={mentor.id} className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:-translate-y-1">
                <div className="aspect-square relative w-full bg-slate-100">
                  <Image 
                    src={mentor.photo} 
                    alt={mentor.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                    <p className="text-lg font-bold text-white">{mentor.name}</p>
                    <p className="text-sm font-medium text-blue-200">{mentor.college} · {mentor.branch}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 grid grid-cols-2 gap-4 border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Rank</p>
                      <p className="font-bold text-ipu-ink">AIR {2500 + i * 1100}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                      <p className="font-bold text-ipu-ink text-sm truncate">{mentor.name.toLowerCase().split(' ')[0]}@ipuhub.in</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {mentor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 text-center">
        <h2 className="text-3xl font-black text-ipu-ink md:text-5xl">Ready to secure your seat?</h2>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Don't leave your college admission to chance. Join the premium counselling batch and let our experts guide you to the best possible college for your rank.
        </p>
        <div className="mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ipu-blue px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-blue-700 hover:shadow-2xl"
          >
            Buy Subscription <ArrowRight size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}
