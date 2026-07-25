import { industries } from "../../data/industries";
import Reveal from "../Reveal";

export default function Industries() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal>
          <p className="citation text-brass mb-3">Sectors</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-xl">Industries we serve.</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {industries.map((industry, i) => (
            <Reveal key={industry} delay={i * 30}>
              <div className="rounded-md border border-hairline-light bg-parchment-2 px-4 py-6 text-center hover:border-brass/50 transition-colors">
                <span className="text-sm text-slate">{industry}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
