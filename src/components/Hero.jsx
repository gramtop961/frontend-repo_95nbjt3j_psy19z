import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300 mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">AI Career Pathfinder</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight"
          >
            Find your ideal career path with AI-powered precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 md:mt-6 text-slate-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
          >
            Get a personalized roadmap based on your skills, interests, and goals — complete with real-time job market insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href="#assessment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
            >
              <Rocket className="h-5 w-5" />
              Start Free Assessment
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white font-semibold border border-white/15 hover:bg-white/15 transition"
            >
              See Full Roadmap
            </a>
          </motion.div>
          <p className="mt-3 text-sm text-slate-400">No credit card required • Takes 5–7 minutes</p>
        </motion.div>

        {/* Spline 3D Scene */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full h-[360px] md:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-black/30"
        >
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle overlay for readability; ensure it doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
