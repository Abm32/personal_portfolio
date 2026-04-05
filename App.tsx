import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const renderView = () => {
    switch (activeView) {
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'home':
      default:
        return <Hero onNavigate={setActiveView} />;
    }
  };

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      <div key={activeView} className="page-enter">
        {renderView()}
      </div>
    </Layout>
  );
};

export default App;
