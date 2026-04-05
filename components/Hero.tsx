import React from 'react';
import { ANUKRITI_URLS } from '../constants';
import { View } from '../types';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const quickStats = [
  { value: 'Top 50', label: 'AWS AI Ideas finalist' },
  { value: '4+ yrs', label: 'building products' },
  { value: 'AI x Health', label: 'current focus' },
];

const focusAreas = ['Full-stack systems', 'AI for healthcare', 'DevOps and cloud', 'Community leadership'];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="grid min-h-[calc(100vh-10rem)] items-center gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="hero-chip bg-[var(--accent)]/15 text-[var(--accent)] ring-1 ring-[var(--accent)]/25">
            Global finalist
          </span>
          <span className="hero-chip bg-white/8 text-white/75 ring-1 ring-white/10">
            Builder at the edge of AI and healthcare
          </span>
        </div>

        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Abhimanyu R B</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl xl:text-7xl">
            Building ambitious products that feel useful on day one.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Software engineer, founder, and community builder. I work across AI, healthcare, product engineering,
            and cloud systems with a bias for shipping things that matter in the real world.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button onClick={() => onNavigate('projects')} className="cta-primary">
            Explore projects
          </button>
          <button onClick={() => onNavigate('experience')} className="cta-secondary">
            View experience
          </button>
          <a
            href="https://www.linkedin.com/in/abhimanyurb/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            Let's connect
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {quickStats.map((item) => (
            <div key={item.label} className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Featured achievement</p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Anukriti and the AWS 10,000 AI Ideas Challenge
              </h2>
            </div>
            <a
              href={ANUKRITI_URLS.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--accent)]/35 px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/10"
            >
              Visit Anukriti
            </a>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
            I created Anukriti to predict drug risks before clinical trials, bringing AI and bioinformatics together
            around a problem with real economic and human impact.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={ANUKRITI_URLS.top50FinalistsAnnouncement} target="_blank" rel="noopener noreferrer" className="mini-link">
              AWS Top 50 announcement
            </a>
            <a href={ANUKRITI_URLS.builderProjectArticle} target="_blank" rel="noopener noreferrer" className="mini-link">
              Builder article
            </a>
            <a href={ANUKRITI_URLS.top300Semifinals} target="_blank" rel="noopener noreferrer" className="mini-link">
              Top 300 semifinalists
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="profile-stage mx-auto max-w-[34rem]">
          <div className="profile-ring profile-ring-1" />
          <div className="profile-ring profile-ring-2" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-[18rem]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(138,255,191,0.32),_transparent_60%)] blur-2xl" />
                <div
                  className="float-gentle relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-cover bg-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                  style={{ backgroundImage: 'url("/abhi.jpg")' }}
                  aria-label="Portrait of Abhimanyu R B"
                />
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Current direction</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Engineering products with depth, clarity, and momentum.</h3>
                </div>
                <div className="space-y-3">
                  {focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="material-symbols-outlined text-[var(--accent)]">north_east</span>
                      <p className="text-sm text-white/78 sm:text-base">{area}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Open to</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    Product engineering roles, startup collaborations, speaking, mentorship, and work where technical ambition meets real users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
