import { Compass, Building2, MessageSquareText, ShieldCheck, Users, Clock } from "lucide-react";
import Reveal from "../Reveal";

const REASONS = [
  {
    icon: Compass,
    title: "Strategic Legal Advice",
    text: "We advise on where a decision leads, not only whether it is permitted.",
  },
  {
    icon: Building2,
    title: "Business-Oriented Thinking",
    text: "Every recommendation is weighed against what it costs and enables commercially.",
  },
  {
    icon: MessageSquareText,
    title: "Transparent Communication",
    text: "Plain explanations of risk and timeline, from the first call to the final signature.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Representation",
    text: "Discretion is a professional obligation here, not a courtesy.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "Senior counsel remain involved on every matter we take on, at every stage.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    text: "Deadlines are commitments. We build in the buffer so you never have to ask.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal>
          <p className="citation text-brass mb-3">Why Omotola &amp; Partners</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-xl">
            The judgment of a large firm, the attention of a small one.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <Icon size={22} className="text-brass" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-ink mt-4">{title}</h3>
              <p className="text-slate text-sm leading-relaxed mt-2">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
