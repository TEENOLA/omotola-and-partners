import { useState } from "react";
import {
  GraduationCap,
  Users2,
  ArrowRight,
  MapPin,
  Briefcase,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ApplicationForm from "../components/careers/ApplicationForm";
import { whyWorkWithUs, benefits, openPositions } from "../data/careers";

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState("");

  const scrollToApply = (role) => {
    setSelectedRole(role);
    requestAnimationFrame(() => {
      document
        .getElementById("apply")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your practice, not just your caseload."
        description="We hire lawyers who want ownership over their matters early — not a queue of document review that never leads anywhere."
      />

      {/* Why Work With Us */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <Reveal>
            <p className="citation text-brass mb-3">Why Work With Us</p>
            <h2 className="font-display text-3xl text-ink max-w-lg">
              What's different about practicing here.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {whyWorkWithUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <span className="citation text-slate-light">0{i + 1}</span>
                <h3 className="font-display text-lg text-ink mt-2">
                  {item.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mt-2">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate/10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop"
                alt="Team working together"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-3">
            <p className="citation text-brass-light mb-3">Culture</p>
            <h2 className="font-display text-3xl text-parchment">
              Direct, low-ego, and a little demanding.
            </h2>
            <p className="text-parchment/60 mt-5 leading-relaxed max-w-lg">
              Partners give direct feedback because they expect associates to
              want it. Titles matter less in a meeting than whether you've read
              the file. We work hard during matters that need it and protect
              downtime the rest of the time — burnout doesn't produce better
              legal work, just more of it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <Reveal>
            <p className="citation text-brass mb-3">Benefits</p>
            <h2 className="font-display text-3xl text-ink max-w-lg">
              What comes with the role.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={Math.min(i, 8) * 50}>
                <div className="rounded-md border border-hairline-light bg-white px-5 py-4 h-full">
                  <span className="text-sm text-ink">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate & Internship Programmes */}
      <section className="bg-parchment-2 border-y border-hairline-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className="rounded-lg bg-white border border-hairline-light p-8">
            <GraduationCap size={24} className="text-brass" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mt-4">
              Graduate Programme
            </h3>
            <p className="text-slate text-sm leading-relaxed mt-3">
              A structured two-year rotation through corporate, litigation, and
              one specialised practice area of your choosing, with a dedicated
              partner mentor throughout. Open to NYSC corps members and recent
              call-to-bar candidates.
            </p>
            <button
              type="button"
              onClick={() => scrollToApply("Graduate Programme")}
              className="mt-6 inline-flex items-center gap-2 text-sm text-brass hover:text-ink transition-colors citation"
            >
              Apply to the Programme <ArrowRight size={14} />
            </button>
          </Reveal>

          <Reveal
            delay={100}
            className="rounded-lg bg-white border border-hairline-light p-8"
          >
            <Users2 size={24} className="text-brass" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mt-4">
              Internship Programme
            </h3>
            <p className="text-slate text-sm leading-relaxed mt-3">
              An eight-week paid internship for penultimate and final-year law
              students, covering legal research, client memo drafting, and
              shadowing senior counsel on active matters. Runs twice a year.
            </p>
            <button
              type="button"
              onClick={() => scrollToApply("Internship Programme")}
              className="mt-6 inline-flex items-center gap-2 text-sm text-brass hover:text-ink transition-colors citation"
            >
              Apply to the Programme <ArrowRight size={14} />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <Reveal>
            <p className="citation text-brass mb-3">Open Positions</p>
            <h2 className="font-display text-3xl text-ink max-w-lg">
              Currently hiring.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-4">
            {openPositions.map((role, i) => (
              <Reveal key={role.id} delay={i * 60}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-hairline-light bg-white p-6">
                  <div>
                    <h3 className="font-display text-lg text-ink">
                      {role.title}
                    </h3>
                    <p className="text-slate text-sm mt-2 max-w-lg">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-xs text-slate-light">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={13} /> {role.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} /> {role.location}
                      </span>
                      <span>{role.experience}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToApply(role.title)}
                    className="citation shrink-0 rounded-full border border-brass px-5 py-2.5 text-brass hover:bg-brass hover:text-ink transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-parchment-2 border-t border-hairline-light">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20">
          <Reveal>
            <ApplicationForm key={selectedRole} presetRole={selectedRole} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
