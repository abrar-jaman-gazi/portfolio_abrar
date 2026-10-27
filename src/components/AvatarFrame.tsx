'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

interface AvatarFrameProps {
  className?: string;
}

export function AvatarFrame({ className = '' }: AvatarFrameProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Ambient Glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/20 via-accent-indigo/25 to-accent-violet/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Outer Stylized Border Box */}
      <div className="relative p-1.5 sm:p-2 rounded-3xl bg-gradient-to-b from-zinc-700/60 via-zinc-800/40 to-zinc-900/80 dark:from-zinc-700/50 dark:via-charcoal-800 dark:to-charcoal-900 border border-zinc-300/40 dark:border-white/10 shadow-2xl backdrop-blur-sm">
        
        {/* Decorative corner markers for tech aesthetic */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent-blue/80 rounded-tl pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent-indigo/80 rounded-tr pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent-violet/80 rounded-bl pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent-blue/80 rounded-br pointer-events-none" />

        {/* Portrait Container */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal-850 to-charcoal-950 dark:from-charcoal-900 dark:to-black flex items-center justify-center">
          
          {!imageError ? (
            <Image
              src="/profile.jpg"
              alt="Abrar Jaman Gazi"
              fill
              priority
              sizes="(max-width: 768px) 288px, 320px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Identifiable Professional Image Placeholder */
            <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-charcoal-850 via-charcoal-900 to-black text-center select-none">
              
              {/* Top Subtitle */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-accent-blue">
                <Terminal className="w-3.5 h-3.5 text-accent-blue" />
                <span>abrar_jaman_gazi.dev</span>
              </div>

              {/* Center Portrait Silhouette & Monogram */}
              <div className="flex flex-col items-center my-auto">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-accent-indigo/20 via-accent-blue/20 to-accent-violet/20 border border-white/10 flex items-center justify-center shadow-inner group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-charcoal-900/90 border border-zinc-700/60 flex items-center justify-center shadow-lg">
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
                      AJG
                    </span>
                  </div>
                  {/* Subtle pulsing badge */}
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-accent-blue text-charcoal-950 font-mono text-[10px] font-bold shadow-md">
                    UIU
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-base font-semibold text-zinc-200">Abrar Jaman Gazi</h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">CSE @ UIU • Dhaka</p>
                </div>
              </div>

              {/* Bottom Instructions / Identifier */}
              <div className="w-full pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400 font-mono flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-indigo" />
                <span>Profile Photo Placeholder</span>
              </div>
            </div>
          )}

          {/* Elegant Dark Vignette Gradient Overlay at Bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Badge 1: Live Status */}
      <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-6 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-charcoal-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-700/70 shadow-xl flex items-center gap-2.5 z-10 transition-transform duration-300 hover:scale-105">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-200 leading-tight">Available to Connect</span>
          <span className="text-[9px] text-zinc-500 dark:text-zinc-400 font-mono">Software & AI/ML</span>
        </div>
      </div>

      {/* Floating Badge 2: Key Strength */}
      <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-charcoal-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-700/70 shadow-xl flex items-center gap-2 z-10 hidden sm:flex transition-transform duration-300 hover:scale-105">
        <Code2 className="w-3.5 h-3.5 text-accent-blue" />
        <span className="text-[11px] font-mono text-zinc-800 dark:text-zinc-300 font-medium">Full-Stack + AI</span>
      </div>
    </div>
  );
}
