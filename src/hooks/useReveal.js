import { useEffect, useRef, useState } from "react";

/**
 * Adds a "is-visible" trigger once an element scrolls into view.
 * Respects prefers-reduced-motion by simply rendering visible immediately
 * (the CSS itself also disables animation duration globally).
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
