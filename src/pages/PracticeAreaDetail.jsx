import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { practiceAreas } from "../data/practiceAreas";

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/practice-areas" replace />;

  const related = practiceAreas.filter((a) => a.slug !== area.slug).slice(0, 3);

  return (
    <>
      <section className="bg-ink pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 text-sm text-parchment/60 hover:text-brass-light transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Practice Areas
          </Link>
          <p className="citation text-brass-light mb-3">{area.ref}</p>
          <h1 className="font-display text-4xl sm:text-5xl text-parchment max-w-2xl">
            {area.name}
          </h1>
          <p className="text-parchment/60 mt-5 max-w-xl leading-relaxed">
            {area.summary}
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <Reveal className="lg:col-span-2">
              <h2 className="citation text-brass mb-6">
                Services Within This Practice Area
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {area.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-brass shrink-0 mt-0.5"
                    />
                    <span className="text-ink">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-14 rounded-2xl bg-ink px-8 py-12 sm:px-12 text-center">
                <h3 className="font-display text-2xl sm:text-3xl text-parchment">
                  Have a matter in {area.name.toLowerCase()}?
                </h3>
                <p className="text-parchment/60 mt-3 max-w-md mx-auto">
                  Tell us what you're working on and we'll match you with the
                  right member of our team.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm text-ink font-medium hover:bg-brass-light transition-colors"
                >
                  Schedule Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="citation text-brass mb-6">
                Related Practice Areas
              </h2>
              <div className="flex flex-col gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/practice-areas/${r.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-hairline-light bg-white px-5 py-4 hover:border-brass/60 transition-colors"
                  >
                    <span className="text-sm text-ink group-hover:text-brass transition-colors">
                      {r.name}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-slate-light shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
