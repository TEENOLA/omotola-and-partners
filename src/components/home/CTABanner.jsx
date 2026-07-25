import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";

export default function CTABanner() {
  return (
    <section className="bg-parchment mt-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <Reveal className="rounded-2xl bg-ink px-8 py-16 sm:px-16 sm:py-20 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="citation text-brass-light mb-4">OMP / Consultation</p>
            <h2 className="font-display text-3xl sm:text-4xl text-parchment max-w-2xl mx-auto">
              Need experienced legal representation?
            </h2>
            <p className="text-parchment/60 mt-4 max-w-md mx-auto">
              Book your consultation today and speak directly with a member of
              our senior team.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brass px-8 py-3.5 text-sm text-ink font-medium hover:bg-brass-light transition-colors"
            >
              Book Your Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
