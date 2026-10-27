'use client';

import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { TechIcon } from './TechIcons';
import { Sparkles, Code2, Cpu } from 'lucide-react';

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'practical' | 'aiml'>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeFilter === 'all') return true;
    return category.type === activeFilter;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-violet/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Toolkit"
          title="Skills & Technologies"
          subtitle="A categorized overview of technologies I build with, spanning practical full-stack development and applied AI/ML research."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50 ${
              activeFilter === 'all'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-charcoal-950 shadow-md'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-charcoal-900 dark:text-zinc-400 dark:hover:bg-charcoal-800'
            }`}
          >
            All Disciplines ({SKILL_CATEGORIES.length} Categories)
          </button>
          
          <button
            onClick={() => setActiveFilter('practical')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50 ${
              activeFilter === 'practical'
                ? 'bg-accent-blue text-charcoal-950 shadow-md shadow-accent-blue/20'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-charcoal-900 dark:text-zinc-400 dark:hover:bg-charcoal-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Practical Development</span>
          </button>

          <button
            onClick={() => setActiveFilter('aiml')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent-violet/50 ${
              activeFilter === 'aiml'
                ? 'bg-accent-violet text-white shadow-md shadow-accent-violet/25'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-charcoal-900 dark:text-zinc-400 dark:hover:bg-charcoal-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI, ML & Data</span>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const isAIML = category.type === 'aiml';

            return (
              <div
                key={idx}
                className={`group relative rounded-3xl p-6 transition-all duration-300 ${
                  isAIML
                    ? 'bg-gradient-to-b from-charcoal-850 to-charcoal-900/90 dark:from-charcoal-900 dark:to-charcoal-850 border-2 border-accent-violet/30 shadow-lg shadow-accent-violet/5'
                    : 'bg-white dark:bg-charcoal-900/70 border border-zinc-200/90 dark:border-white/10 hover:border-accent-blue/40 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-accent-blue transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                  {isAIML ? (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wider bg-accent-violet/20 text-accent-violet border border-accent-violet/30">
                      AI & Research
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-charcoal-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60">
                      Engineering
                    </span>
                  )}
                </div>

                {/* Skills Pill List */}
                <div className="space-y-2.5 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-2xl bg-zinc-50 dark:bg-charcoal-800/60 border border-zinc-200/70 dark:border-white/[0.06] hover:bg-zinc-100 dark:hover:bg-charcoal-800 transition-colors flex items-center justify-between group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-charcoal-900 border border-zinc-200 dark:border-zinc-700/60 shadow-xs flex items-center justify-center">
                          <TechIcon name={skill.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" title="Primary Focus" />
                            )}
                          </div>
                          {skill.description && (
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Integrity Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 px-4 py-2 rounded-full bg-zinc-100 dark:bg-charcoal-900 border border-zinc-200 dark:border-zinc-800">
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
            <span>Categorized by applied experience. Transparent and honest representation without misleading percentage scores.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
