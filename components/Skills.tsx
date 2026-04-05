import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS, SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-10 py-6 sm:py-10">
      <section className="section-shell">
        <p className="section-kicker">Capabilities</p>
        <h1 className="section-title mt-4">Technical range, certifications, and community work.</h1>
        <p className="section-copy mt-4 max-w-3xl">
          I care about depth, but I also care about being useful across the full arc of product work: design sense,
          frontend polish, backend reliability, cloud delivery, and people around the project.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Technical skills</p>
          <div className="mt-5 space-y-4">
            {SKILL_CATEGORIES.map((skill, index) => (
              <details key={skill.name} className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-5 py-4" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                  <span>{skill.name}</span>
                  <span className="material-symbols-outlined text-[var(--accent)]">expand_more</span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-white/70">{skill.items}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Certifications</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30"
                >
                  <span className="material-symbols-outlined text-4xl text-[var(--accent)]">{cert.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Volunteer and achievements</p>
            <div className="mt-5 grid gap-4">
              {ACHIEVEMENTS.map((item) => (
                <div key={`${item.role}-${item.organization}`} className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)]">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.role}
                        {item.organization ? ` @ ${item.organization}` : ''}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/68">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/74">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
