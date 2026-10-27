'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { AvatarFrame } from './AvatarFrame';
import { ArrowDown, Github, Linkedin, Mail, FileDown, Sparkles, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-accent-blue/10 via-accent-indigo/15 to-accent-violet/10 rounded-full blur-3xl opacity-50 dark:opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-column on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-violet bg-clip-text text-transparent">
                Abrar Jaman Gazi
              </span>
              .
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-5 leading-snug">
              {PERSONAL_INFO.subheadline}
            </h2>

            {/* Short Introduction Paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-8">
              Computer Science & Engineering student at{' '}
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                United International University (UIU)
              </span>
              , Dhaka. Passionate about architecting full-stack web platforms, engineering production-grade software, and exploring multimodal machine learning and deep learning systems.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-violet hover:opacity-95 shadow-lg shadow-accent-indigo/25 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              >
                <span>Explore My Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="/cv.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200/80 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 border border-zinc-300 dark:border-zinc-700/80 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                title="Download Abrar Jaman Gazi's Curriculum Vitae"
              >
                <FileDown className="w-4 h-4 text-accent-blue" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links with Icons */}
            <div className="flex items-center gap-3 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/80 w-full sm:w-auto">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-2">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-charcoal-800/80 hover:bg-zinc-200 dark:hover:bg-charcoal-700 border border-zinc-200 dark:border-zinc-700/60 transition-all hover:scale-105"
                aria-label="GitHub Profile"
                title="GitHub: github.com/abrar-jaman-gazi"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-accent-blue dark:hover:text-accent-blue bg-zinc-100 dark:bg-charcoal-800/80 hover:bg-zinc-200 dark:hover:bg-charcoal-700 border border-zinc-200 dark:border-zinc-700/60 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
                title="LinkedIn: linkedin.com/in/abrar-jaman-gazi"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-accent-violet dark:hover:text-accent-violet bg-zinc-100 dark:bg-charcoal-800/80 hover:bg-zinc-200 dark:hover:bg-charcoal-700 border border-zinc-200 dark:border-zinc-700/60 transition-all hover:scale-105"
                aria-label="Send Email"
                title={`Email: ${PERSONAL_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Styled Profile Photograph Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AvatarFrame />
          </div>

        </div>

        {/* Subtle Scroll Indicator at the bottom */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-accent-blue transition-colors focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="mb-2 tracking-wider text-[11px] uppercase">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex items-start justify-center p-1 group-hover:border-accent-blue transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-accent-blue animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
