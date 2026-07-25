import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, X } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { practiceAreas } from "../data/practiceAreas";

export default function PracticeAreas() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return practiceAreas;
    return practiceAreas.filter((area) => {
      if (area.name.toLowerCase().includes(q)) return true;
      if (area.summary.toLowerCase().includes(q)) return true;
      return area.services.some((s) => s.toLowerCase().includes(q));
    });
  }, [query]);

  return (
    <>
      <PageHeader
        eyebrow="Practice Areas"
        title="Twenty-one areas of law, one point of contact."
        description="Search by matter type, service, or keyword — every practice area is handled by counsel who work in it every week, not occasionally."
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="relative max-w-lg -mt-24 mb-14">
            <div className="rounded-full border border-hairline-light bg-white shadow-lg shadow-ink/5 flex items-center px-5 py-3.5">
              <Search size={18} className="text-slate-light shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a service, e.g. “trademark” or “lease”"
                aria-label="Search practice areas"
                className="w-full bg-transparent px-3 text-sm text-ink placeholder:text-slate-light focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="text-slate-light hover:text-ink transition-colors shrink-0"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-20">
              <p className="citation text-brass mb-3">No matches</p>
              <p className="text-slate">
                Nothing matched “{query}”. Try a broader term, or{" "}
                <Link
                  to="/contact"
                  className="text-brass hover:text-ink transition-colors underline underline-offset-4"
                >
                  ask us directly
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((area, i) => (
                <Reveal key={area.slug} delay={Math.min(i, 8) * 60}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="group flex flex-col h-full rounded-lg border border-hairline-light bg-white p-7 hover:border-brass/60 hover:shadow-lg hover:shadow-ink/5 transition-all"
                  >
                    <span className="citation text-slate-light">
                      {area.ref}
                    </span>
                    <h2 className="font-display text-lg text-ink mt-4 group-hover:text-brass transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-slate text-sm leading-relaxed mt-3 flex-1">
                      {area.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {area.services.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-xs text-slate-light bg-parchment-2 border border-hairline-light rounded-full px-2.5 py-1"
                        >
                          {s}
                        </span>
                      ))}
                      {area.services.length > 3 && (
                        <span className="text-xs text-brass px-2.5 py-1">
                          +{area.services.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-brass opacity-0 group-hover:opacity-100 transition-opacity">
                      View practice area <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
