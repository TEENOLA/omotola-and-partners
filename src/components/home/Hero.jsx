import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const headlineWords = ["Legal Solutions", "Built Around", "Your Business."];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const line = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-ink overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-24 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="citation text-brass-light mb-6"
        >
          Omotola &amp; Partners LLP &mdash; Lagos, Nigeria
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-parchment text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl"
        >
          {headlineWords.map((word) => (
            <motion.span key={word} variants={line} className="block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-parchment/70 text-base sm:text-lg leading-relaxed"
        >
          We advise individuals, startups, corporations, investors, and institutions on the legal
          decisions that shape how their business grows &mdash; with the clarity of a firm that has
          seen the outcome before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm text-ink font-medium hover:bg-brass-light transition-colors"
          >
            Schedule Consultation <ArrowRight size={16} />
          </Link>
          <Link
            to="/practice-areas"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-parchment/30 px-7 py-3.5 text-sm text-parchment hover:border-brass-light hover:text-brass-light transition-colors"
          >
            Practice Areas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
