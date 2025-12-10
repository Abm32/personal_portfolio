import React from 'react';
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
          <h2 className="text-slate-600 dark:text-white/70 text-lg sm:text-xl font-normal leading-normal">
            Founder of To ByaaG | Software Engineer | Space Enthusiast | Entrepreneur
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <button 
            onClick={() => onNavigate('projects')}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <span className="truncate">View My Work</span>
          </button>
          <a
            href="https://www.linkedin.com/in/abhimanyurb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors"
          >
            <span className="truncate">Let's Connect</span>
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