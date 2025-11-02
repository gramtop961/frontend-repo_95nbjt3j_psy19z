import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Clock, Link as LinkIcon } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1 · Foundations (Weeks 1–4)',
    points: [
      'Core skills: SQL, Spreadsheets, Data Visualization basics',
      'Statistics refresher: distributions, hypothesis testing',
      'Tooling setup: Python + Pandas or R (optional)',
    ],
    resources: [
      { label: 'Mode SQL Tutorial', href: 'https://mode.com/sql-tutorial/' },
      { label: 'Khan Academy – Stats & Prob', href: 'https://www.khanacademy.org/math/statistics-probability' },
      { label: 'Data to Viz', href: 'https://www.data-to-viz.com/' },
    ],
  },
  {
    title: 'Phase 2 · Practical Projects (Weeks 5–8)',
    points: [
      'Build 2 mini projects: reporting dashboard + A/B test analysis',
      'Version control: GitHub basics and project structure',
      'Storytelling with data: present findings clearly',
    ],
    resources: [
      { label: 'Google Data Studio (Looker Studio)', href: 'https://lookerstudio.google.com/' },
      { label: 'GitHub Guides', href: 'https://guides.github.com/' },
      { label: 'A/B Testing Guide', href: 'https://www.abtasty.com/blog/ab-testing-statistics/' },
    ],
  },
  {
    title: 'Phase 3 · Specialization (Weeks 9–12)',
    points: [
      'Choose a track: Product Analytics, Marketing Analytics, or BI',
      'Deepen one tool: dbt, Tableau/PowerBI, or Python Viz (Altair/Plotly)',
      'Case studies: retention, funnels, and cohorts',
    ],
    resources: [
      { label: 'dbt Learn', href: 'https://docs.getdbt.com/docs/get-started' },
      { label: 'Tableau Public', href: 'https://public.tableau.com/en-us/s/' },
      { label: 'Power BI Docs', href: 'https://learn.microsoft.com/en-us/power-bi/' },
    ],
  },
  {
    title: 'Phase 4 · Job‑Ready (Weeks 13–16)',
    points: [
      'Portfolio: 2–3 polished projects with READMEs',
      'Interview prep: SQL drills + product sense',
      'Applications: targeted outreach and role mapping',
    ],
    resources: [
      { label: 'LeetCode SQL', href: 'https://leetcode.com/problemset/database/' },
      { label: 'Product Analytics Case Studies', href: 'https://www.interpretable.ai/blog/product-analytics-case-study' },
      { label: 'Resume Templates', href: 'https://resumegenius.com/resume-templates' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Your Full Roadmap</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            A step‑by‑step plan from foundations to job‑ready. Customize by focusing on the tools and domain most relevant to your target role.
          </p>
        </motion.div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 space-y-6"
        >
          {phases.map((phase) => (
            <motion.li
              key={phase.title}
              variants={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                <div>
                  <div className="inline-flex items-center gap-2 text-cyan-300">
                    <Clock className="h-4 w-4" />
                    <p className="text-sm font-medium">Timeline</p>
                  </div>
                  <h3 className="mt-1 text-xl font-semibold text-white">{phase.title}</h3>
                  <ul className="mt-3 text-slate-200 space-y-1">
                    {phase.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-80">
                  <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <BookOpen className="h-4 w-4" />
                      <p className="text-sm font-medium">Curated Resources</p>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {phase.resources.map((r) => (
                        <li key={r.href}>
                          <a
                            href={r.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-slate-200 hover:text-white"
                          >
                            <LinkIcon className="h-4 w-4 text-cyan-300" /> {r.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-10 text-center">
          <a
            href="#assessment"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-slate-900 font-semibold hover:bg-cyan-400 transition"
          >
            Personalize this roadmap with your skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
