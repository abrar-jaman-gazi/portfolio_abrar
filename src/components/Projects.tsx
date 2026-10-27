'use client';

import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { PROJECTS } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Filter, Layers } from 'lucide-react';

const CATEGORIES = ['All', 'Full-Stack', 'AI / ML', 'IoT / Systems'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          title="Engineered Solutions & Research"
          subtitle="A selection of practical web applications, capstone AI research, and embedded prototypes engineered with focus and care."
        />

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-charcoal-950 shadow-md'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-charcoal-900 dark:text-zinc-400 dark:hover:bg-charcoal-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom GitHub Archive Link */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-zinc-100 dark:bg-charcoal-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              Looking for more repositories, experiments, and code commits?
            </span>
            <a
              href="https://github.com/abrar-jaman-gazi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-accent-blue hover:text-white hover:bg-accent-blue transition-colors border border-accent-blue/30"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Visit GitHub @abrar-jaman-gazi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
