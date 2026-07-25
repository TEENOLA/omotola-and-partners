import { useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const METRICS = [
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 2000, suffix: "+", label: "Matters Handled" },
  { value: 300, suffix: "+", label: "Corporate Clients" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
  { value: 7, suffix: "", label: "Senior Legal Professionals" },
];

function Counter({ value, suffix, active }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <span className="font-display text-4xl sm:text-5xl text-ink">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustMetrics() {
  const { ref, isVisible } = useReveal({ threshold: 0.4 });

  return (
    <section ref={ref} className="bg-parchment-2 border-y border-hairline-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {METRICS.map((metric, i) => (
            <div key={metric.label} className="text-center md:text-left" style={{ transitionDelay: `${i * 60}ms` }}>
              <Counter value={metric.value} suffix={metric.suffix} active={isVisible} />
              <p className="citation text-slate mt-2">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
