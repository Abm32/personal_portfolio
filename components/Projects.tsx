import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex flex-wrap justify-between gap-3 px-0 sm:px-2">
        <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] min-w-72">Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} className={project.featured ? 'md:col-span-2' : undefined} />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <div 
        className={`flex flex-col items-stretch justify-start rounded-xl bg-white dark:bg-[#1c1e27] border border-slate-200 dark:border-transparent transition-all hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 dark:hover:shadow-primary/10 duration-300 overflow-hidden ring-1 ring-transparent ${project.featured ? 'dark:ring-primary/25 border-primary/30 dark:border-primary/40' : ''} ${className ?? ''}`}
      >
        {hasImages && (
          <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <img 
              src={project.images![currentImageIndex]} 
              alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
            />
            {project.images!.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'bg-primary w-6' 
                          : 'bg-white/50 w-1.5 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        <div className="flex w-full grow flex-col items-stretch justify-start gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-2 min-w-0">
              {project.featured && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/15 dark:bg-primary/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                  <span className="material-symbols-outlined text-sm" aria-hidden>star</span>
                  Featured project
                </span>
              )}
              <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">{project.title}</h3>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg h-8 w-8 shrink-0 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white transition-all" title="View Code">
                  <span className="material-symbols-outlined text-lg">code</span>
                </a>
              )}
              {project.chromeStore && (
                <a href={project.chromeStore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg h-8 w-8 shrink-0 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white transition-all" title="Install Extension">
                  <span className="material-symbols-outlined text-lg">extension</span>
                </a>
              )}
              {project.link && !project.featured && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg h-8 w-8 shrink-0 bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all" title="View Project">
                  <span className="material-symbols-outlined text-lg">open_in_new</span>
                </a>
              )}
            </div>
          </div>
          
          <p className={`text-slate-600 dark:text-white/60 text-base font-normal leading-normal ${project.featured || (project.highlights && project.highlights.length > 0) ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Highlights</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-white/70 text-sm marker:text-primary">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {project.impactLine && (
            <p className="text-slate-800 dark:text-white/90 text-base font-medium leading-snug border-l-4 border-primary pl-4 py-1">
              {project.impactLine}
            </p>
          )}

          {(project.link || project.caseStudyLink || project.mvpLink) && (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                >
                  {project.featured ? "Anukriti project site" : "View project"}
                </a>
              )}
              {project.mvpLink && (
                <a
                  href={project.mvpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg h-11 px-5 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white text-sm font-bold transition-colors"
                >
                  Try MVP
                </a>
              )}
              {project.caseStudyLink && (
                <a
                  href={project.caseStudyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg h-11 px-5 border-2 border-primary/40 text-primary hover:bg-primary/10 text-sm font-bold transition-colors"
                >
                  AWS Builder article
                </a>
              )}
            </div>
          )}

          {project.pressLinks && project.pressLinks.length > 0 && (
            <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white/50 mb-3">
                AWS 10,000 AI Ideas — official coverage
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.pressLinks.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline underline-offset-2 inline-flex items-start gap-1.5"
                    >
                      <span className="material-symbols-outlined text-base shrink-0 mt-0.5" aria-hidden>
                        open_in_new
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && hasImages && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={project.images![currentImageIndex]} 
              alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            {project.images!.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-2xl">chevron_left</span>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images!.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-2xl">chevron_right</span>
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-white/50 w-2 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;