import React from 'react';
import { SectionHeader } from './SectionHeader';
import { EDUCATION_DATA, ACHIEVEMENTS } from '@/data/portfolioData';
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  BookOpen, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export function EducationAchievements() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Foundations"
          title="Education & Recognition"
          subtitle="Formal academic study at United International University alongside competitive project awards and merit recognition."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Degree Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900/80 border border-zinc-200/90 dark:border-white/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />

              {/* Institution Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent-blue font-bold">
                    Degree & University
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1 leading-snug">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 mt-1">
                    {EDUCATION_DATA.degree}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                      {EDUCATION_DATA.location}
                    </span>
                    <span>•</span>
                    <span className="text-accent-indigo font-medium">
                      {EDUCATION_DATA.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursework & Focus Areas */}
              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Key Coursework & Competencies</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION_DATA.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300 p-2 rounded-xl bg-zinc-50 dark:bg-charcoal-800/60 border border-zinc-200/60 dark:border-zinc-700/50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Environment */}
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-6 leading-relaxed italic border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                &ldquo;Emphasizing foundational algorithmic thinking, system software development, hands-on lab projects, and supervised AI capstone research.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Achievements & Awards Timeline */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2 px-1">
              <Trophy className="w-4 h-4 text-accent-blue" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
                Recognized Milestones & Honors
              </h3>
            </div>

            {ACHIEVEMENTS.map((item, idx) => {
              const isFirst = idx === 0;

              return (
                <div
                  key={item.id}
                  className={`p-6 rounded-3xl transition-all duration-300 relative overflow-hidden ${
                    isFirst
                      ? 'bg-gradient-to-br from-white to-zinc-50 dark:from-charcoal-900 dark:to-charcoal-850 border-2 border-accent-blue/30 shadow-md'
                      : 'bg-white dark:bg-charcoal-900/70 border border-zinc-200/90 dark:border-white/10 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                        {item.icon === 'award' ? (
                          <Trophy className="w-4 h-4" />
                        ) : item.icon === 'scholarship' ? (
                          <Award className="w-4 h-4" />
                        ) : (
                          <Sparkles className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          {item.organization} • {item.year}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full font-semibold shrink-0 bg-accent-blue/10 text-accent-blue border border-accent-blue/25">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-3 pl-1">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
