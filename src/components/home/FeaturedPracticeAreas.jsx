import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  practiceAreas,
  featuredPracticeAreaSlugs,
} from "../../data/practiceAreas";
import Reveal from "../Reveal";

export default function FeaturedPracticeAreas() {
  const featured = featuredPracticeAreaSlugs.map((slug) =>
    practiceAreas.find((a) => a.slug === slug)
  );

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="citation text-brass-light mb-3">What We Advise On</p>
            <h2 className="font-display text-3xl sm:text-4xl text-parchment max-w-xl">
              Practice areas built around real business decisions.
            </h2>
          </div>
          <Link
            to="/practice-areas"
            className="citation text-brass-light hover:text-brass transition-colors flex items-center gap-2 shrink-0"
          >
            View All Practice Areas <ArrowUpRight size={14} />
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((area, i) => (
            <Reveal key={area.slug} delay={i * 70} className="h-full">
              <Link
                to={`/practice-areas/${area.slug}`}
                className="group flex h-full flex-col rounded-lg border border-hairline p-7 hover:border-brass/60 hover:bg-ink-2 transition-colors"
              >
                <span className="citation text-slate-light">{area.ref}</span>
                <h3 className="font-display text-xl text-parchment mt-4 group-hover:text-brass-light transition-colors">
                  {area.name}
                </h3>
                <p className="text-parchment/60 text-sm leading-relaxed mt-3 flex-1">
                  {area.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-brass-light opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
