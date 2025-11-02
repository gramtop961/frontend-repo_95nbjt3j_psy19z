import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} AI Career Pathfinder. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white">Features</a>
          <a href="#assessment" className="text-slate-300 hover:text-white">Assessment</a>
          <a href="#" className="text-slate-300 hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
