import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const featured = PROJECTS.filter((project) => project.featured);
  const others = PROJECTS.filter((project) => !project.featured);

  return (
    <div className="space-y-10 py-6 sm:py-10">
      <section className="section-shell">
        <p className="section-kicker">Selected work</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="section-title">Products across AI, web, mobile, blockchain, and systems.</h1>
            <p className="section-copy mt-4">
              I like building things that solve sharp problems, not just interesting ones. This mix ranges from
              healthcare AI and developer tooling to consumer mobile products and Web3 experiments.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] px-5 py-4 text-sm text-white/72">
            <p className="font-semibold text-white">What I optimize for</p>
            <p className="mt-2 leading-7">
              Clear product thinking, dependable engineering, and interfaces that explain themselves.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {others.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
};

interface ProjectCardProps {
  project: typeof PROJECTS[number];
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const hasImages = Boolean(project.images && project.images.length > 0);

  return (
    <>
      <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
        {hasImages && (
          <div className="relative overflow-hidden border-b border-white/10 bg-black/30">
            <img
              src={project.images![currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="h-64 w-full cursor-pointer object-cover transition duration-500 hover:scale-[1.03] sm:h-72"
              onClick={() => setIsImageModalOpen(true)}
            />
            {project.images!.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length)}
                  className="project-image-button left-4"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images!.length)}
                  className="project-image-button right-4"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-md">
                  {project.images!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex ? 'w-8 bg-[var(--accent)]' : 'w-2 bg-white/45'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="flex h-full flex-col gap-5 p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl space-y-3">
              {featured && (
                <span className="hero-chip bg-[var(--accent)]/15 text-[var(--accent)] ring-1 ring-[var(--accent)]/25">
                  Featured build
                </span>
              )}
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
              <p className="text-sm leading-7 text-white/72 sm:text-base">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-pill" title="GitHub repository">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
              )}
              {project.chromeStore && (
                <a
                  href={project.chromeStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-pill"
                  title="Chrome Web Store"
                >
                  <span className="material-symbols-outlined text-[20px]">extension</span>
                </a>
              )}
              {project.link && !featured && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-pill icon-pill-accent"
                  title="Live project"
                >
                  <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                </a>
              )}
            </div>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72"
                >
                  {highlight}
                </div>
              ))}
            </div>
          )}

          {project.impactLine && (
            <div className="rounded-[1.4rem] border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-4 py-4 text-sm font-medium leading-7 text-white/86 sm:text-base">
              {project.impactLine}
            </div>
          )}

          {(project.link || project.caseStudyLink || project.mvpLink) && (
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-primary text-sm">
                  {featured ? 'View project site' : 'Open project'}
                </a>
              )}
              {project.mvpLink && (
                <a href={project.mvpLink} target="_blank" rel="noopener noreferrer" className="cta-secondary text-sm">
                  Try MVP
                </a>
              )}
              {project.caseStudyLink && (
                <a
                  href={project.caseStudyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-secondary text-sm"
                >
                  Read case study
                </a>
              )}
            </div>
          )}

          {project.pressLinks && project.pressLinks.length > 0 && (
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Official coverage</p>
              <div className="mt-4 flex flex-col gap-3">
                {project.pressLinks.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="mini-link">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/74">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {isImageModalOpen && hasImages && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/92 p-4 backdrop-blur-md"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            aria-label="Close image viewer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="relative flex h-full w-full max-w-6xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images![currentImageIndex]}
              alt={`${project.title} screenshot`}
              className="max-h-[88vh] max-w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
