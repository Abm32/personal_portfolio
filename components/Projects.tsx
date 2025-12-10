import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex flex-wrap justify-between gap-3 px-0 sm:px-2">
        <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] min-w-72">Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="flex flex-col items-stretch justify-start rounded-xl bg-white dark:bg-[#1c1e27] border border-slate-200 dark:border-transparent transition-all hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 dark:hover:shadow-primary/10 duration-300"
          >
            <div className="flex w-full grow flex-col items-stretch justify-start gap-4 p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg h-8 w-8 shrink-0 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white transition-all" title="View Code">
                      <span className="material-symbols-outlined text-lg">code</span>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg h-8 w-8 shrink-0 bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all" title="View Project">
                      <span className="material-symbols-outlined text-lg">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-white/60 text-base font-normal leading-normal line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;