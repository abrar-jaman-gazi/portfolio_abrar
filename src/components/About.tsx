import React from 'react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  GraduationCap, 
  BrainCircuit, 
  Award, 
  Code, 
  Layers, 
  Cpu, 
  Database, 
  Compass 
} from 'lucide-react';

const INTERESTS = [
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'Designing end-to-end web architectures using modern React ecosystems, Node.js APIs, and responsive design systems.',
  },
  {
    icon: Layers,
    title: 'Building Practical Software',
    description: 'Focusing on clean modular code, intuitive user experiences, and systems that solve tangible campus and community needs.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning & Deep Learning',
    description: 'Investigating neural network architectures, multimodal representations, and explainable models for complex real-world data.',
  },
  {
    icon: Database,
    title: 'Data Mining & Intelligent Systems',
    description: 'Uncovering meaningful patterns, designing data pipelines, and extracting actionable knowledge from structured and unstructured data.',
  },
  {
    icon: Compass,
    title: 'Continuous Technical Growth',
    description: 'Staying curious, exploring emerging developer tooling, and rapidly prototyping ideas from algorithmic design to deployment.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Curious Student, Focused Developer"
          subtitle="A grounded look at my academic journey, core focus areas, and engineering interests."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900/60 border border-zinc-200/90 dark:border-white/10 shadow-sm dark:shadow-xl space-y-4">
              <p>
                I am an undergraduate student pursuing a{' '}
                <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  Bachelor of Science in Computer Science and Engineering (CSE)
                </strong>{' '}
                at{' '}
                <span className="text-accent-blue font-medium">
                  United International University (UIU)
                </span>{' '}
                in Dhaka, Bangladesh.
              </p>
              <p>
                My passion lies at the intersection of practical software engineering and machine learning. In software development, I gravitate toward building responsive, reliable applications—spanning intuitive React frontends to well-structured Node/Express backends and database schemas.
              </p>
              <p>
                In intelligent systems, I have dedicated significant effort to multimodal research through my completed{' '}
                <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  Final Year Development Project II (FYDP II)
                </strong>
                , which tackled multimodal meme veracity and intent classification with faithful explainability.
              </p>
              <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                &gt; Grounded by academic rigor • Driven by practical craftsmanship • Ready to contribute
              </p>
            </div>

            {/* Interest Badges Grid */}
            <div className="pt-2">
              <h3 className="text-xs uppercase font-mono tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                Core Interest Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INTERESTS.slice(0, 4).map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-zinc-50 dark:bg-charcoal-850/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-accent-blue/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="p-2 rounded-xl bg-accent-blue/10 text-accent-blue">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Highlight Card 1: University */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-charcoal-900 dark:to-charcoal-850 border border-zinc-200 dark:border-white/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent-blue font-bold">
                    Institution
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                    United International University
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                    CSE Department • Dhaka, Bangladesh
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2.5 leading-relaxed">
                    Undergraduate coursework emphasizing software engineering, algorithms, database systems, artificial intelligence, and data structures.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Card 2: Completed FYDP II */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-charcoal-900 dark:to-charcoal-850 border border-zinc-200 dark:border-white/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-indigo/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent-indigo font-bold">
                    Completed Capstone
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                    FYDP II in Multimodal AI
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                    Meme Veracity & Intent with Faithful Explanation
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2.5 leading-relaxed">
                    Designed and implemented a multimodal neural model joining visual features and context-aware textual semantics with explainable attention maps.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Card 3: Academic & Project Honors */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-charcoal-900 dark:to-charcoal-850 border border-zinc-200 dark:border-white/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-violet/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent-violet font-bold">
                    Recognition
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                    Project Show 2nd Runner-Up
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                    Summer 2024 (80+ projects) & Merit Scholarship
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2.5 leading-relaxed">
                    Recognized for rigorous technical execution and competitive innovation among university-wide engineering project exhibitions.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
