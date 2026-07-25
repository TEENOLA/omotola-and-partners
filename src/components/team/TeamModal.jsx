import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Mail,
  GraduationCap,
  Scale,
  Award,
  Globe2,
  Heart,
} from "lucide-react";

const LinkedInIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.02 8.24h4.37v2.01h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7.02V23h-4.56v-6.94c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.67V23H8.02V8.24z" />
  </svg>
);

export default function TeamModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${member.name} profile`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 my-8 w-full max-w-3xl rounded-2xl bg-parchment shadow-2xl overflow-hidden"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile"
              className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-parchment hover:bg-brass hover:text-ink transition-colors"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-5">
              <div className="sm:col-span-2 relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-56 sm:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 sm:bg-gradient-to-r sm:from-transparent sm:to-ink/10 to-transparent" />
              </div>

              <div className="sm:col-span-3 p-7 sm:p-9">
                <p className="citation text-brass mb-2">{member.position}</p>
                <h2 className="font-display text-3xl text-ink">
                  {member.name}
                </h2>
                {typeof member.yearsExperience === "number" && (
                  <p className="text-slate text-sm mt-1">
                    {member.yearsExperience} years of experience
                  </p>
                )}

                {member.quote && (
                  <blockquote className="mt-5 border-l-2 border-brass pl-4 font-display italic text-ink/80">
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>
                )}

                <p className="text-slate text-sm leading-relaxed mt-5">
                  {member.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7">
                  {member.practiceAreas?.length > 0 && (
                    <Detail
                      icon={Scale}
                      label="Practice Areas"
                      items={member.practiceAreas}
                    />
                  )}
                  {member.education?.length > 0 && (
                    <Detail
                      icon={GraduationCap}
                      label="Education"
                      items={member.education}
                    />
                  )}
                  {member.memberships?.length > 0 && (
                    <Detail
                      icon={Award}
                      label="Professional Memberships"
                      items={member.memberships}
                    />
                  )}
                  {member.awards?.length > 0 && (
                    <Detail icon={Award} label="Awards" items={member.awards} />
                  )}
                  {member.languages?.length > 0 && (
                    <Detail
                      icon={Globe2}
                      label="Languages"
                      items={member.languages}
                    />
                  )}
                  {member.passions?.length > 0 && (
                    <Detail
                      icon={Heart}
                      label="Areas of Passion"
                      items={member.passions}
                    />
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-hairline-light">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-ink hover:text-brass transition-colors"
                    >
                      <Mail size={16} /> {member.email}
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink hover:text-brass transition-colors"
                    >
                      <LinkedInIcon /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Detail({ icon: Icon, label, items }) {
  return (
    <div>
      <p className="citation text-slate-light flex items-center gap-1.5 mb-2">
        <Icon size={13} /> {label}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-ink leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
