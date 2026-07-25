export default function ComingSoon({ title }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-parchment pt-20">
      <div className="text-center px-6">
        <p className="citation text-brass mb-3">Under Construction</p>
        <h1 className="font-display text-4xl text-ink">{title}</h1>
        <p className="text-slate mt-4">This page is being built in the next phase of the project.</p>
      </div>
    </section>
  );
}
