import React from 'react';
import { Project } from '@/types';
import { ProjectPreview } from './ProjectPreview';
import { TechIcon } from './TechIcons';
import { Github, ExternalLink, Check, Sparkles } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  const isResearch = project.category === 'AI / ML';

  return (
    <div className="group rounded-3xl bg-white dark:bg-charcoal-900/80 border border-zinc-200/90 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Visual Interface Preview */}
      <div className="relative">
        <ProjectPreview projectId={project.id} />
        
        {/* Floating Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide bg-charcoal-950/85 backdrop-blur-md text-white border border-white/20 shadow-md">
            {project.category}
          </span>
        </div>

        {project.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide bg-accent-blue/90 backdrop-blur-md text-charcoal-950 shadow-md">
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtitle / Department context */}
          {project.subtitle && (
            <p className="text-xs font-mono text-accent-blue dark:text-accent-blue font-semibold uppercase tracking-wider mb-1.5">
              {project.subtitle}
            </p>
          )}

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-accent-blue transition-colors leading-snug mb-3">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-3 leading-relaxed">
            {project.tagline}
          </p>

          {/* Detailed Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          <div className="mb-6 space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-2">
              Key Technical Features:
            </h4>
            {project.features.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                <Check className="w-3.5 h-3.5 text-accent-blue mt-0.5 shrink-0" />
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Area: Technologies + Action Buttons */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-5">
          {/* Technology Badges */}
          <div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-charcoal-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Working Links / Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 hover:bg-zinc-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 border border-zinc-300/80 dark:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4" />
                <span>{isResearch ? 'Research Code / Repo' : 'Source Code'}</span>
              </a>
            )}

            {isResearch ? (
              <a
                href="#fydp-spotlight"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-accent-violet hover:text-white bg-accent-violet/10 hover:bg-accent-violet border border-accent-violet/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>View FYDP Spotlight</span>
              </a>
            ) : project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-accent-blue hover:text-white bg-accent-blue/10 hover:bg-accent-blue border border-accent-blue/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                aria-label={`View live demo or overview for ${project.title}`}
              >
                <span>Live Project Hub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
}
