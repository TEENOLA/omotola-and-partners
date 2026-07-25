import { useReveal } from "../hooks/useReveal";

/**
 * Wraps children in a div that fades/slides up into view on scroll.
 * `delay` accepts a Tailwind-friendly ms value applied via inline style
 * so staggered groups can be built without extra utility classes.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
