export default function TeamCard({ member, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="group flex h-full w-full flex-col text-left rounded-lg overflow-hidden border border-hairline-light bg-white hover:border-brass/60 hover:shadow-xl hover:shadow-ink/10 transition-all duration-300"
    >
      <div className="aspect-[4/5] overflow-hidden bg-slate/10 shrink-0">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-ink group-hover:text-brass transition-colors">
          {member.name}
        </h3>
        <p className="citation text-brass mt-1">{member.position}</p>
        <p className="text-slate text-sm leading-relaxed mt-3 line-clamp-3">
          {member.summary}
        </p>
        <span className="mt-4 inline-block text-sm text-slate-light group-hover:text-brass transition-colors mt-auto pt-4">
          View full profile &rarr;
        </span>
      </div>
    </button>
  );
}
