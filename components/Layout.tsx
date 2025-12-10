import React, { useState } from 'react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: View;
  onNavigate: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; value: View }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'home' }, // Assuming About is part of home for now or separate
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Skills', value: 'skills' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex justify-center">
          <div className="flex w-full max-w-[1200px] items-center justify-between py-3">
            <div 
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                  <path clip-rule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Abhimanyu R B</h2>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
              <nav className="flex items-center gap-9">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onNavigate(item.value)}
                    className={`text-sm font-medium leading-normal transition-colors ${
                      activeView === item.value 
                        ? 'text-primary' 
                        : 'text-slate-600 dark:text-zinc-300 hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              {activeView === 'skills' ? (
                <a 
                  href="/abhimanyu_cv.pdf" 
                  download="Abhimanyu_R_B_CV.pdf"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="truncate">Download CV</span>
                </a>
              ) : (
                <a 
                  href="https://www.linkedin.com/in/abhimanyurb/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="truncate">Let's Connect</span>
                </a>
              )}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-800 dark:text-white p-2"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/10 p-4 shadow-lg">
             <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.value);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left text-sm font-medium leading-normal p-2 ${
                      activeView === item.value 
                        ? 'text-primary' 
                        : 'text-slate-600 dark:text-zinc-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {activeView === 'skills' ? (
                  <a 
                    href="/abhimanyu_cv.pdf" 
                    download="Abhimanyu_R_B_CV.pdf"
                    className="mt-2 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold"
                  >
                    <span>Download CV</span>
                  </a>
                ) : (
                  <a 
                    href="https://www.linkedin.com/in/abhimanyurb/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold"
                  >
                    <span>Let's Connect</span>
                  </a>
                )}
              </nav>
          </div>
        )}
      </header>

      <main className="flex-1 w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex justify-center py-5">
        <div className="w-full max-w-[1200px] flex flex-col flex-1">
          {children}
        </div>
      </main>

      <footer className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex justify-center py-10 border-t border-gray-200 dark:border-white/10">
        <div className="w-full max-w-[1200px] flex flex-col gap-6 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/Abm32" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a href="https://www.linkedin.com/in/abhimanyurb/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">group</span>
            </a>
            <a href="https://x.com/AbhimanyuRB2" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">sms</span>
            </a>
          </div>
          <p className="text-zinc-400 text-sm font-normal leading-normal">© 2024 Abhimanyu R B. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;