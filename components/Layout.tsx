import React, { useEffect, useState } from 'react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: View;
  onNavigate: (view: View) => void;
}

const navItems: { label: string; value: View }[] = [
  { label: 'Home', value: 'home' },
  { label: 'Projects', value: 'projects' },
  { label: 'Experience', value: 'experience' },
  { label: 'Skills', value: 'skills' },
];

const Layout: React.FC<LayoutProps> = ({ children, activeView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeView]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-grid" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface-strong)]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:border-[var(--accent)]/40 hover:bg-white/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)] ring-1 ring-[var(--accent)]/30 transition group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Portfolio</p>
              <p className="text-sm font-semibold text-white">Abhimanyu R B</p>
            </div>
          </button>

          <div className="hidden items-center gap-3 lg:flex">
            <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              {navItems.map((item) => {
                const isActive = activeView === item.value;

                return (
                  <button
                    key={item.value}
                    onClick={() => onNavigate(item.value)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-[var(--accent)] text-slate-950 shadow-[0_12px_30px_rgba(138,255,191,0.35)]'
                        : 'text-[var(--muted)] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <a
              href="https://apogee.abhimanyurb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-white"
            >
              Blog
            </a>
            <a
              href="/abhimanyu_cv.pdf"
              download="Abhimanyu_R_B_CV.pdf"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_18px_30px_rgba(138,255,191,0.25)]"
            >
              Download CV
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--accent)]/40 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-[color:var(--surface)]/95 px-4 py-4 backdrop-blur-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeView === item.value;

                return (
                  <button
                    key={item.value}
                    onClick={() => onNavigate(item.value)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                      isActive
                        ? 'bg-[var(--accent)] text-slate-950'
                        : 'border border-white/10 bg-white/5 text-white/80'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="https://apogee.abhimanyurb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white/80"
                >
                  Blog
                </a>
                <a
                  href="/abhimanyu_cv.pdf"
                  download="Abhimanyu_R_B_CV.pdf"
                  className="rounded-2xl bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Building with intent</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/70">
              AI, healthcare, product engineering, and communities that move people forward.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <a href="https://github.com/Abm32" target="_blank" rel="noopener noreferrer" className="footer-pill">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhimanyurb/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-pill"
            >
              LinkedIn
            </a>
            <a href="https://x.com/AbhimanyuRB2" target="_blank" rel="noopener noreferrer" className="footer-pill">
              X
            </a>
            <a href="mailto:abhimanyurbsa@gmail.com" className="footer-pill">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
