import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');

  // Simple scrolling to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Hero onNavigate={setActiveView} />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      default:
        return <Hero onNavigate={setActiveView} />;
    }
  };

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
        {renderView()}
      </div>
    </Layout>
  );
};

export default App;
