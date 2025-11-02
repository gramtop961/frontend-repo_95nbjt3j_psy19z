import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import AssessmentCTA from './components/AssessmentCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <FeatureGrid />
      <AssessmentCTA />
      <Footer />
    </div>
  );
}

export default App;
