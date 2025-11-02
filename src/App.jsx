import React from 'react';
import Hero from './components/Hero';
import AssessmentCTA from './components/AssessmentCTA';
import MarketInsights from './components/MarketInsights';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <AssessmentCTA />
      <MarketInsights />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
