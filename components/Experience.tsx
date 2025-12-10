import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 pt-10">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Professional Experience</h1>
          <p className="text-slate-500 dark:text-zinc-400 text-base font-normal leading-normal">
            A timeline of my professional journey, highlighting key roles, contributions, and skills.
          </p>
        </div>
      </div>

      <div className="relative pl-8 sm:pl-12">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-0 w-0.5 bg-gray-300 dark:bg-primary/30"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[2.1rem] sm:-left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background-light dark:bg-background-dark ring-4 ring-gray-200 dark:ring-primary/30 group-hover:ring-primary/60 transition-all">
                <div className="h-3 w-3 rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
              </div>
              
              <div className="ml-4 sm:ml-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium bg-primary/10 px-2 py-0.5 rounded w-fit">{exp.date}</p>
                </div>
                <p className="text-lg text-slate-700 dark:text-zinc-300 font-medium mb-3">{exp.company}</p>
                
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-zinc-400 mb-4 marker:text-primary">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="rounded-full bg-slate-200 dark:bg-primary/20 px-3 py-1 text-xs font-medium text-slate-700 dark:text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
