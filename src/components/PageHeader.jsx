export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-ink pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {eyebrow && <p className="citation text-brass-light mb-3">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl text-parchment max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="text-parchment/60 mt-5 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
