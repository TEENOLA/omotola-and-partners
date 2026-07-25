import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { insights } from "../../data/insights";
import Reveal from "../Reveal";

export default function Insights() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="citation text-brass-light mb-3">Insights</p>
            <h2 className="font-display text-3xl sm:text-4xl text-parchment max-w-xl">
              Reading for people who make the decisions.
            </h2>
          </div>
          <Link
            to="/insights"
            className="citation text-brass-light hover:text-brass transition-colors flex items-center gap-2 shrink-0"
          >
            All Insights <ArrowUpRight size={14} />
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                to={`/insights/${post.slug}`}
                className="group block h-full"
              >
                <div className="flex items-center justify-between citation text-slate-light">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display text-lg text-parchment mt-4 group-hover:text-brass-light transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-parchment/60 text-sm mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
