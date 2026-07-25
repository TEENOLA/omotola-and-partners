import { Compass, Eye, HeartHandshake, Award } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { coreValues, timeline, memberships } from "../data/about";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        title="Built to last longer than any single matter."
        description="Fifteen years in, we're still measured the same way: whether the advice held up after the client walked out the door."
      />

      {/* Firm Story */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <Reveal className="lg:col-span-2">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate/10">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=900&auto=format&fit=crop"
                  alt="Omotola & Partners office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-3">
              <p className="citation text-brass mb-3">Our Story</p>
              <h2 className="font-display text-3xl text-ink">
                Started with two people and a shared conviction.
              </h2>
              <p className="text-slate mt-5 leading-relaxed">
                Omotola & Partners opened in 2011 with a simple premise:
                Nigerian businesses deserved counsel that understood commercial
                pressure as well as it understood case law. Too often, legal
                advice arrived either overly cautious or disconnected from what
                a business could actually do with it.
              </p>
              <p className="text-slate mt-4 leading-relaxed">
                Fifteen years later, that premise hasn't changed, even as the
                firm has grown to seven lawyers across twenty-one practice
                areas. We still take on fewer matters than we could, so that
                every client gets senior attention rather than a name on a
                letterhead.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className="rounded-lg border border-hairline p-8">
            <Compass size={22} className="text-brass" strokeWidth={1.5} />
            <p className="citation text-brass-light mt-4 mb-2">Mission</p>
            <p className="font-display text-xl text-parchment leading-snug">
              To give every client the legal clarity they need to make a
              business decision with confidence, not just permission.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-lg border border-hairline p-8">
            <Eye size={22} className="text-brass" strokeWidth={1.5} />
            <p className="citation text-brass-light mt-4 mb-2">Vision</p>
            <p className="font-display text-xl text-parchment leading-snug">
              To be the firm Nigerian businesses call first, not the one they
              call after something has already gone wrong.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <Reveal>
            <p className="citation text-brass mb-3">Core Values</p>
            <h2 className="font-display text-3xl text-ink max-w-lg">
              What doesn't change as we grow.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <span className="citation text-slate-light">0{i + 1}</span>
                <h3 className="font-display text-lg text-ink mt-2">
                  {value.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mt-2">
                  {value.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Growth */}
      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20">
          <Reveal>
            <p className="citation text-brass-light mb-3 text-center">
              History
            </p>
            <h2 className="font-display text-3xl text-parchment text-center mb-16">
              A timeline of growth.
            </h2>
          </Reveal>

          <div className="relative pl-8 sm:pl-10 border-l border-hairline">
            {timeline.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 70}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-brass" />
                <span className="citation text-brass-light">{item.year}</span>
                <h3 className="font-display text-lg text-parchment mt-1.5">
                  {item.title}
                </h3>
                <p className="text-parchment/60 text-sm leading-relaxed mt-2 max-w-lg">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact / CSR */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="citation text-brass mb-3">Community Impact</p>
            <h2 className="font-display text-3xl text-ink">
              Pro bono work isn't an afterthought here.
            </h2>
            <p className="text-slate mt-5 leading-relaxed">
              Every associate at the firm carries at least one pro bono matter
              alongside their paid caseload — typically supporting local NGOs
              with registration and governance, or individuals who can't
              otherwise afford representation in family law matters.
            </p>
            <p className="text-slate mt-4 leading-relaxed">
              We also run an annual legal literacy workshop for small business
              owners in Agidingbi, covering contracts, registration, and the
              most common legal mistakes new businesses make.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex items-center gap-4">
            <HeartHandshake
              size={28}
              className="text-brass shrink-0"
              strokeWidth={1.5}
            />
            <p className="citation text-slate">
              Corporate Social Responsibility is reviewed and reported on
              internally each year, alongside the firm's financial performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="bg-parchment-2 border-y border-hairline-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <Reveal>
            <p className="citation text-brass mb-6 flex items-center gap-2">
              <Award size={14} /> Professional Memberships
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {memberships.map((m, i) => (
              <Reveal key={m} delay={i * 40}>
                <span className="text-sm text-slate border border-hairline-light bg-white rounded-full px-4 py-2 inline-block">
                  {m}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 text-center">
          <Reveal>
            <p className="citation text-brass mb-3">Why Clients Trust Us</p>
            <h2 className="font-display text-3xl text-ink">
              Most of our new work comes from clients we've already represented.
            </h2>
            <p className="text-slate mt-5 leading-relaxed">
              Roughly seven in ten new engagements come from repeat clients or
              their direct referrals. We take that as the real measure of the
              firm — not awards, though we've had a few, but whether the people
              we've worked with come back, and send others our way.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
