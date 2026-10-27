'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/10 bg-white dark:bg-charcoal-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Brand and Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-base font-bold text-zinc-900 dark:text-white">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
              CSE Student • United International University (UIU), Dhaka
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-accent-blue dark:hover:text-accent-blue hover:bg-zinc-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-accent-violet dark:hover:text-accent-violet hover:bg-zinc-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Side: Back to Top & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              © {currentYear} Abrar Jaman Gazi
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-charcoal-800/80 hover:bg-zinc-200 dark:hover:bg-charcoal-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              aria-label="Back to top of the page"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
