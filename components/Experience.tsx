import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-10 py-6 sm:py-10">
      <section className="section-shell">
        <p className="section-kicker">Professional journey</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="section-title">A track record across product work, leadership, and execution.</h1>
            <p className="section-copy mt-4 max-w-3xl">
              I&apos;ve moved between hands-on engineering, startup building, technical leadership, and community
              work. That mix shaped how I build: practical, collaborative, and fast without losing care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-[1.5rem] p-4 text-center">
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Roles and initiatives</p>
            </div>
            <div className="glass-panel rounded-[1.5rem] p-4 text-center">
              <p className="text-2xl font-bold text-white">AWS</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Cloud and DevOps</p>
            </div>
            <div className="glass-panel col-span-2 rounded-[1.5rem] p-4 text-center sm:col-span-1">
              <p className="text-2xl font-bold text-white">Builder</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Engineer and founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pl-0 sm:pl-6">
        <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--accent)]/0 via-[var(--accent)]/55 to-[var(--accent)]/0 sm:block" />
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <article key={`${exp.role}-${exp.company}-${exp.date}`} className="relative sm:pl-10">
              <div className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-[var(--accent)]/35 bg-[var(--surface-strong)] sm:flex">
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(138,255,191,0.65)]" />
              </div>
              <div className="glass-panel rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/20 sm:p-7">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{exp.company}</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">{exp.role}</h2>
                  </div>
                  <div className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium text-[var(--accent)]">
                    {exp.date}
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/72 sm:text-base">
                  {exp.description.map((desc) => (
                    <li key={desc} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/74">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
