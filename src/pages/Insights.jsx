import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { insights } from "../data/insights";

export default function Insights() {
  const categories = useMemo(
    () => ["All", ...new Set(insights.map((p) => p.category))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? insights : insights.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Reading for people who make the decisions."
        description="Practical notes from our practice areas — written for founders, operators, and anyone navigating a legal decision without a law degree."
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`citation rounded-full border px-4 py-2 transition-colors ${
                  active === cat
                    ? "bg-ink border-ink text-parchment"
                    : "border-hairline-light text-slate hover:border-brass/60 hover:text-brass"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={Math.min(i, 8) * 60}
                className="h-full"
              >
                <Link
                  to={`/insights/${post.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-hairline-light bg-white p-7 hover:border-brass/60 hover:shadow-lg hover:shadow-ink/5 transition-all"
                >
                  <div className="flex items-center justify-between citation text-slate-light">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-display text-lg text-ink mt-4 group-hover:text-brass transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate text-sm leading-relaxed mt-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-xs text-slate-light">
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-brass opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
