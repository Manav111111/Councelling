import { ArrowRight, CheckCircle2, Video, FileText, LayoutList, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { mentors } from "@/lib/sample-data";

const WHATSAPP_LINK = "https://wa.me/917827465966?text=Hi,%20I%20want%20to%20buy%20the%20premium%20counselling%20batch%20subscription.";

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
              Buy Subscription <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-ipu-ink md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-slate-600">Get everything you need for successful admission in one complete package.</p>
          </div>

          <div className="rounded-3xl border-2 border-ipu-blue bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-black shadow-lg">
              50% OFF (Limited Time)
            </div>

            <div className="mb-8 border-b border-blue-50 pb-8 text-center">
              <h3 className="text-2xl font-black text-ipu-ink">Total Plan</h3>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-4xl font-bold text-slate-400 line-through">₹2000</span>
                <span className="text-6xl font-black text-ipu-blue">₹1000</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-green-600 flex items-center justify-center gap-1">
                <ShieldCheck size={16} /> One-time payment. Valid till admission.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Weekly Google Meet with Mentors",
                "Instant Alert on Important Notices",
                "Registration Assistance",
                "Personalized Choice Filling List",
                "Exclusive Community Access",
                "Future Help & Guidance After College"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-slate-700 font-medium">
                  <CheckCircle2 className="text-ipu-blue shrink-0" size={24} /> {feature}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-ipu-blue px-8 py-5 text-xl font-black text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700"
            >
              Buy Subscription Now <ArrowRight size={24} />
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
      <section className="bg-slate-50 px-4 py-16 md:py-24 border-t border-blue-50">
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
          Don&apos;t leave your college admission to chance. Join the premium counselling batch and let our experts guide you to the best possible college for your rank.
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
