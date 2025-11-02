import React, { useState } from 'react';
import { Plus, CheckCircle2 } from 'lucide-react';

const skillSuggestions = [
  'Python',
  'Data Analysis',
  'Project Management',
  'UI Design',
  'JavaScript',
  'Cloud Computing',
  'Sales',
];

const AssessmentCTA = () => {
  const [skills, setSkills] = useState(['Communication', 'Problem Solving']);
  const [input, setInput] = useState('');

  const addSkill = (s) => {
    const value = (s ?? input).trim();
    if (!value) return;
    if (!skills.includes(value)) setSkills((prev) => [...prev, value]);
    setInput('');
  };

  const removeSkill = (s) => setSkills((prev) => prev.filter((x) => x !== s));

  return (
    <section id="assessment" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Try the smart assessment</h2>
            <p className="mt-3 text-slate-300 max-w-xl">
              Start with your current skills and interests. Our engine will map strengths, fill gaps, and generate a personalized career roadmap.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <label className="text-sm font-medium text-slate-200">Add your skills</label>
              <div className="mt-2 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                  placeholder="e.g. Python, Marketing, Leadership"
                  className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  onClick={() => addSkill()}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-slate-900 font-semibold hover:bg-cyan-400 transition"
                >
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/15 px-3 py-1 text-sm"
                  >
                    {s}
                    <button
                      onClick={() => removeSkill(s)}
                      className="rounded-full bg-white/10 px-1.5 py-0.5 text-xs text-slate-300 hover:bg-white/20"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-xs text-slate-400">Suggestions:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skillSuggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => addSkill(s)}
                      className="rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/20 px-3 py-1 text-xs"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-cyan-300">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-sm">Your inputs power a tailored roadmap — no spam, no fluff.</p>
            </div>
          </div>

          {/* Preview panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-cyan-300">Preview</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Your personalized plan snapshot</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-900/70 border border-white/10 p-4">
                <p className="text-xs text-slate-400">Career Match</p>
                <p className="mt-1 text-3xl font-semibold text-white">Product Analyst</p>
                <p className="mt-2 text-sm text-slate-300">Compatibility: <span className="text-cyan-300 font-medium">87%</span></p>
              </div>
              <div className="rounded-xl bg-slate-900/70 border border-white/10 p-4">
                <p className="text-xs text-slate-400">Timeline</p>
                <ul className="mt-1 text-sm text-slate-300 space-y-1">
                  <li>• 3 months: Foundations</li>
                  <li>• 6 months: Projects & portfolio</li>
                  <li>• 12 months: Job-ready</li>
                </ul>
              </div>
              <div className="rounded-xl bg-slate-900/70 border border-white/10 p-4 sm:col-span-2">
                <p className="text-xs text-slate-400">Next Best Steps</p>
                <ul className="mt-1 text-sm text-slate-300 space-y-1">
                  <li>• SQL + A/B Testing practice</li>
                  <li>• Build a case study dashboard</li>
                  <li>• Complete 2 portfolio projects</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-slate-900 font-semibold hover:bg-cyan-400 transition">Generate My Full Roadmap</a>
              <a href="#features" className="inline-flex justify-center rounded-lg bg-white/10 px-5 py-2.5 text-white border border-white/15 hover:bg-white/15 transition">See how it works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentCTA;
