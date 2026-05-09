import { BellRing, BookOpenCheck, GitCompare, LineChart, ListChecks, MessagesSquare } from "lucide-react";
import { MentorCard } from "@/components/MentorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mentors } from "@/lib/sample-data";

const services = [
  ["Rank Prediction", LineChart],
  ["1-on-1 Mentor Connect", MessagesSquare],
  ["College Comparison Tool", GitCompare],
  ["Counselling Process Walkthrough", BookOpenCheck],
  ["Document Checklist", ListChecks],
  ["Push Notification Alerts", BellRing]
] as const;

export default function AboutPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About & Services" title="Built for students making high-pressure choices" description="Our mission is to turn IPU counselling into a clear, evidence-backed, mentor-supported process." />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map(([title, Icon]) => (
            <div key={title} className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
              <Icon className="text-ipu-sky" />
              <h2 className="mt-4 text-lg font-black">{title}</h2>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SectionHeading title="Team and mentors" />
          <div className="grid gap-5 md:grid-cols-3">
            {mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
