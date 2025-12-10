import React from 'react';
import { SKILL_CATEGORIES, CERTIFICATIONS, ACHIEVEMENTS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 pt-10 pb-20">
      
      {/* Header */}
      <div className="flex flex-col gap-3 px-4">
        <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Skills & Volunteer Work</h1>
        <p className="text-slate-500 dark:text-[#9da4b9] text-base font-normal leading-normal">
          A collection of my technical abilities, certifications, and community contributions.
        </p>
      </div>

      {/* Technical Skills - Accordions */}
      <section>
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4">Technical Skills</h2>
        <div className="flex flex-col px-4 gap-3">
          {SKILL_CATEGORIES.map((skill, index) => (
            <details key={index} className="flex flex-col rounded-xl border border-slate-200 dark:border-[#3b4154] bg-white dark:bg-slate-900/50 px-[15px] py-[7px] group transition-all hover:border-primary/40" open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">{skill.name}</p>
                <div className="text-slate-600 dark:text-white group-open:rotate-180 transition-transform duration-300">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </summary>
              <div className="overflow-hidden transition-all duration-300">
                <p className="text-slate-500 dark:text-[#9da4b9] text-sm font-normal leading-normal pb-3 pt-1 border-t border-slate-100 dark:border-white/5 mt-2">
                  {skill.items}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-[#3b4154] bg-white dark:bg-slate-900/50 p-5 transition-all hover:shadow-lg hover:border-primary/50 dark:hover:border-primary group">
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform origin-left">{cert.icon}</span>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-lg">{cert.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer & Achievements */}
      <section>
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4">Volunteer & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {ACHIEVEMENTS.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-[#3b4154] bg-white dark:bg-slate-900/50 p-6 transition-all hover:shadow-lg hover:border-primary/50 dark:hover:border-primary h-full">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                <h3 className="font-bold text-slate-800 dark:text-white text-lg">{item.role} {item.organization && `@ ${item.organization}`}</h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className={`text-xs font-medium py-1 px-3 rounded-full ${
                      tIndex === 0 
                        ? 'text-primary bg-primary/20' 
                        : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Skills;
