'use client';

import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-charcoal-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-2xl dark:shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 rounded-lg p-1"
          aria-label="Abrar Jaman Gazi Portfolio - Back to top"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-blue via-accent-indigo to-accent-violet p-0.5 shadow-md group-hover:shadow-glow-sm transition-all duration-300">
            <div className="w-full h-full bg-white dark:bg-charcoal-900 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-black text-sm bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent">
                AG
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-accent-blue transition-colors">
              Abrar Jaman Gazi
            </span>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
              CSE • UIU
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-charcoal-900/70 p-1.5 rounded-full border border-zinc-200/80 dark:border-white/10 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 ${
                  isActive
                    ? 'text-white bg-zinc-900 dark:bg-charcoal-700 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-charcoal-800/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA and Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-charcoal-800/80 hover:bg-zinc-200 dark:hover:bg-charcoal-700 border border-zinc-300/80 dark:border-zinc-700/80 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            title="Download Curriculum Vitae"
          >
            <FileDown className="w-3.5 h-3.5 text-accent-blue" />
            <span>CV</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-accent-indigo to-accent-violet hover:opacity-95 shadow-sm hover:shadow-glow-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-charcoal-800 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-charcoal-950/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-blue/10 text-accent-blue font-semibold border border-accent-blue/20'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-charcoal-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <a
                href="/cv.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-charcoal-900"
              >
                <FileDown className="w-4 h-4 text-accent-blue" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-indigo to-accent-violet shadow-md"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
