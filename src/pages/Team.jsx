import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import TeamCard from "../components/team/TeamCard";
import TeamModal from "../components/team/TeamModal";
import { team } from "../data/team";

export default function Team() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Seven lawyers. One standard."
        description="Every matter at Omotola & Partners is led by senior counsel — click a profile to see full background, credentials, and areas of focus."
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={Math.min(i, 8) * 60}>
                <TeamCard member={member} onOpen={setActive} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamModal member={active} onClose={() => setActive(null)} />
    </>
  );
}
