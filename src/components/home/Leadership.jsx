import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ceo } from "../../data/team";
import Reveal from "../Reveal";

export default function Leadership() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate/10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
                alt={ceo.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <p className="citation text-brass mb-3">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink">{ceo.name}</h2>
            <p className="citation text-slate mt-2">{ceo.position}</p>
            <p className="text-slate mt-6 text-base leading-relaxed max-w-lg">{ceo.summary}</p>
            <blockquote className="mt-6 border-l-2 border-brass pl-5 font-display italic text-lg text-ink/80 max-w-lg">
              &ldquo;{ceo.quote}&rdquo;
            </blockquote>
            <Link
              to="/team"
              className="mt-8 inline-flex items-center gap-2 text-sm text-brass hover:text-ink transition-colors citation"
            >
              Meet Our Team <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
