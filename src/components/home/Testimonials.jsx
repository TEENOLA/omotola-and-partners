import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import Reveal from "../Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ink-2">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-24 text-center">
        <Reveal>
          <Quote className="mx-auto text-brass" size={32} strokeWidth={1.5} />
        </Reveal>

        <div className="mt-8 min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-xl sm:text-2xl text-parchment leading-relaxed">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <p className="citation text-brass-light mt-6">{testimonials[index].name}</p>
              <p className="text-parchment/50 text-sm mt-1">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="text-parchment/60 hover:text-brass-light transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-brass" : "w-1.5 bg-parchment/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="text-parchment/60 hover:text-brass-light transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
