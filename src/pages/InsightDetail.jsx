import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import { insights } from "../data/insights";

export default function InsightDetail() {
  const { slug } = useParams();
  const post = insights.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  const related = insights
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const fallbackRelated = insights
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);
  const relatedPosts = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <section className="bg-ink pt-40 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm text-parchment/60 hover:text-brass-light transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Insights
          </Link>
          <p className="citation text-brass-light mb-3">{post.category}</p>
          <h1 className="font-display text-4xl sm:text-5xl text-parchment leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-6 text-sm text-parchment/50">
            <span>By {post.author}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16">
          <Reveal>
            <p className="text-lg text-slate leading-relaxed">{post.excerpt}</p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-10">
            {post.body.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60}>
                <h2 className="font-display text-2xl text-ink mb-3">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-slate leading-relaxed mt-3">
                    {para}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-2xl bg-ink px-8 py-12 sm:px-12 text-center">
            <h3 className="font-display text-2xl text-parchment">
              Have a question about this?
            </h3>
            <p className="text-parchment/60 mt-3 max-w-md mx-auto">
              Speak directly with a member of our team about how this applies to
              your situation.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm text-ink font-medium hover:bg-brass-light transition-colors"
            >
              Schedule Consultation <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment-2 border-t border-hairline-light">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16">
          <p className="citation text-brass mb-6">Continue Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((r) => (
              <Link
                key={r.slug}
                to={`/insights/${r.slug}`}
                className="group block rounded-lg border border-hairline-light bg-white p-6 hover:border-brass/60 transition-colors"
              >
                <span className="citation text-slate-light">{r.category}</span>
                <h3 className="font-display text-base text-ink mt-3 group-hover:text-brass transition-colors leading-snug">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
