import React from 'react';
import { Brain, Target, Map, BarChart, Award, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Profile Assessment',
    desc:
      'Analyze your skills, interests, and work style with an adaptive assessment that learns from your inputs.',
  },
  {
    icon: Target,
    title: 'AI Career Matching',
    desc:
      'Get matched to high-fit roles with compatibility scores, strengths, and targeted alternatives.',
  },
  {
    icon: Map,
    title: 'Interactive Roadmaps',
    desc:
      'Step-by-step learning paths with timelines, milestones, and curated resources to guide your growth.',
  },
  {
    icon: BarChart,
    title: 'Real-time Market Insights',
    desc:
      'Live salary ranges, demand trends, and in-demand skills — tailored to your location and experience.',
  },
  {
    icon: Award,
    title: 'Progress & Badges',
    desc:
      'Track achievements, showcase skills, and collect badges as you hit learning and career milestones.',
  },
  {
    icon: Briefcase,
    title: 'Job-Ready Portfolio',
    desc:
      'Project suggestions and an application tracker to help you present your best self to employers.',
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Everything you need to navigate your career</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            From assessment to action — get a clear plan, stay motivated, and adapt in real-time with market data.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/15 text-cyan-300 p-2 ring-1 ring-cyan-400/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
