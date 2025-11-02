import React, { useEffect, useState } from 'react';
import { TrendingUp, Globe2, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const CAREERS = [
  'Data analyst',
  'Product manager',
  'UX designer',
  'Software engineer',
  'Cybersecurity analyst',
];

const wikiSummaryUrl = (title) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

const MarketInsights = () => {
  const [role, setRole] = useState(CAREERS[0]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSummary = async (title) => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(wikiSummaryUrl(title));
      if (!res.ok) throw new Error('Failed to fetch insights');
      const data = await res.json();
      setSummary({
        extract: data.extract,
        url: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
        thumbnail: data.thumbnail?.source || '',
      });
    } catch (e) {
      setError('We could not load live insights right now. Please try again later.');
      setSummary(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary(role);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  return (
    <section className="bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold text-white"
            >
              Real‑time Market Insights
            </motion.h2>
            <p className="mt-3 text-slate-300">
              Explore a quick market overview for popular roles. We pull contextual information from the web to help you understand the landscape.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {CAREERS.map((c) => (
                <button
                  key={c}
                  onClick={() => setRole(c)}
                  className={`rounded-full border px-3 py-1 text-sm transition ${
                    role === c
                      ? 'bg-cyan-500 text-slate-900 border-cyan-400'
                      : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-cyan-300">
                <TrendingUp className="h-5 w-5" />
                <p className="text-sm font-medium">Overview</p>
              </div>

              {loading && (
                <p className="mt-3 text-slate-300 animate-pulse">Loading live insights…</p>
              )}
              {error && (
                <p className="mt-3 text-rose-300">{error}</p>
              )}
              {!loading && !error && summary && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 flex gap-4"
                >
                  {summary.thumbnail && (
                    <img
                      src={summary.thumbnail}
                      alt={role}
                      className="w-24 h-24 object-cover rounded-lg border border-white/10"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="text-slate-200 leading-relaxed">{summary.extract}</p>
                    <a
                      href={summary.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
                    >
                      <Globe2 className="h-4 w-4" /> Read more on Wikipedia
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <div className="flex items-center gap-2 text-cyan-300">
                <Info className="h-5 w-5" />
                <p className="text-sm font-medium">Helpful links</p>
              </div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <li>
                  <a
                    className="block rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 p-3 text-slate-200"
                    href="https://www.glassdoor.com/Salaries/index.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Glassdoor – Salary Explorer
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 p-3 text-slate-200"
                    href="https://www.levels.fyi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Levels.fyi – Compensation & Levels
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 p-3 text-slate-200"
                    href="https://trends.google.com/trends/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Trends – Interest Over Time
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 p-3 text-slate-200"
                    href="https://www.linkedin.com/learning/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Learning – Courses
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                These resources can help you validate demand, salary ranges, and skill priorities for your chosen path.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
