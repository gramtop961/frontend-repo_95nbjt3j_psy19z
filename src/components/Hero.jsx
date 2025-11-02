import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300 mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">AI Career Pathfinder</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Find your ideal career path with AI-powered precision
          </h1>
          <p className="mt-4 md:mt-6 text-slate-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Get a personalized roadmap based on your skills, interests, and goals — complete with real-time job market insights.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#assessment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
            >
              <Rocket className="h-5 w-5" />
              Start Free Assessment
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white font-semibold border border-white/15 hover:bg-white/15 transition"
            >
              Explore Features
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-400">No credit card required • Takes 5–7 minutes</p>
        </div>

        {/* Spline 3D Scene */}
        <div className="relative w-full h-[360px] md:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle overlay for readability; ensure it doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
