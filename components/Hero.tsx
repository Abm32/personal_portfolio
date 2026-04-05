import React from 'react';
import { ANUKRITI_URLS } from '../constants';
import { View } from '../types';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-12 py-16 items-center flex-1 justify-center">
      <div className="flex flex-col gap-8 flex-1 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            Abhimanyu R B
          </h1>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-200">
              Global finalist
            </span>
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Top 50 worldwide
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-white/80">
              AI × Healthcare
            </span>
          </div>
          <h2 className="text-slate-800 dark:text-white text-xl sm:text-2xl font-bold leading-snug">
            Builder at the intersection of AI and healthcare
          </h2>
          <p className="text-primary dark:text-primary font-semibold text-base sm:text-lg">
            Created Anukriti — global Top 50 (AWS 10,000 AI Ideas)
          </p>
          <p className="text-slate-600 dark:text-white/65 text-base leading-relaxed max-w-2xl">
            Founder of To ByaaG · Software engineer · Space enthusiast · Entrepreneur
          </p>
        </div>

        <section
          className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent p-6 text-left shadow-lg shadow-primary/5"
          aria-labelledby="featured-achievement-heading"
        >
          <div className="flex items-center gap-2 text-primary mb-3">
            <span className="material-symbols-outlined text-2xl" aria-hidden>emoji_events</span>
            <span className="text-xs font-bold uppercase tracking-widest">Featured achievement</span>
          </div>
          <h3 id="featured-achievement-heading" className="text-slate-900 dark:text-white text-lg sm:text-xl font-bold leading-tight mb-2">
            Global finalist — AWS 10,000 AI Ideas Challenge
          </h3>
          <p className="text-slate-600 dark:text-white/70 text-sm sm:text-base leading-relaxed">
            Selected as a Top 50 global finalist for building Anukriti, an AI-driven solution for predicting drug risks before clinical trials.
          </p>
          <ul className="mt-4 flex flex-col gap-2 border-t border-primary/15 pt-4">
            <li>
              <a
                href={ANUKRITI_URLS.top50FinalistsAnnouncement}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:underline underline-offset-2 inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden>newspaper</span>
                AWS announces Top 50 finalists
              </a>
            </li>
            <li>
              <a
                href={ANUKRITI_URLS.top300Semifinals}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 dark:text-white/65 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base" aria-hidden>open_in_new</span>
                Top 300 semifinalists — judging round
              </a>
            </li>
            <li>
              <a
                href={ANUKRITI_URLS.builderProjectArticle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 dark:text-white/65 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base" aria-hidden>open_in_new</span>
                My Builder article: Anukriti project write-up
              </a>
            </li>
          </ul>
        </section>

        <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
          Recently, I built Anukriti, an AI-based system for predicting drug risks before clinical trials, which was selected among the Top 50 global finalists in the AWS AI Ideas Challenge. I am interested in building impactful products at the intersection of technology and real-world problems.
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <button 
            onClick={() => onNavigate('projects')}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <span className="truncate">View my work</span>
          </button>
          <a
            href={ANUKRITI_URLS.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border-2 border-primary text-primary dark:text-primary bg-transparent hover:bg-primary/10 text-base font-bold leading-normal tracking-[0.015em] transition-colors"
          >
            <span className="truncate">Anukriti site</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhimanyurb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors"
          >
            <span className="truncate">Let&apos;s connect</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
          <a href="https://www.linkedin.com/in/abhimanyurb/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center w-20 group cursor-pointer">
            <div className="rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-primary/10 p-4 transition-colors">
              <span className="material-symbols-outlined text-slate-700 dark:text-white text-2xl group-hover:text-primary">group</span>
            </div>
            <p className="text-slate-600 dark:text-white/70 text-sm font-medium leading-normal group-hover:text-primary transition-colors">LinkedIn</p>
          </a>
          <a href="https://github.com/Abm32" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center w-20 group cursor-pointer">
            <div className="rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-primary/10 p-4 transition-colors">
              <span className="material-symbols-outlined text-slate-700 dark:text-white text-2xl group-hover:text-primary">code</span>
            </div>
            <p className="text-slate-600 dark:text-white/70 text-sm font-medium leading-normal group-hover:text-primary transition-colors">GitHub</p>
          </a>
          <a href="https://x.com/AbhimanyuRB2" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center w-20 group cursor-pointer">
            <div className="rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-primary/10 p-4 transition-colors">
              <span className="material-symbols-outlined text-slate-700 dark:text-white text-2xl group-hover:text-primary">sms</span>
            </div>
            <p className="text-slate-600 dark:text-white/70 text-sm font-medium leading-normal group-hover:text-primary transition-colors">Twitter</p>
          </a>
          <a href="https://apogee.abhimanyurb.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center w-20 group cursor-pointer">
            <div className="rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-primary/10 p-4 transition-colors">
              <span className="material-symbols-outlined text-slate-700 dark:text-white text-2xl group-hover:text-primary">article</span>
            </div>
            <p className="text-slate-600 dark:text-white/70 text-sm font-medium leading-normal group-hover:text-primary transition-colors">Blog</p>
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <div 
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square bg-center bg-no-repeat bg-cover rounded-full border-4 border-slate-200 dark:border-white/10 shadow-2xl"
          style={{ backgroundImage: 'url("/abhi.jpg")' }}
          aria-label="Professional headshot of Abhimanyu R B"
        />
      </div>
    </div>
  );
};

export default Hero;