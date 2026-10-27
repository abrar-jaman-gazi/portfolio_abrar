import React from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  BrainCircuit, 
  Search, 
  Layers, 
  CheckSquare, 
  Sparkles, 
  Github, 
  FileText, 
  Presentation, 
  ExternalLink,
  ShieldCheck,
  Eye,
  ArrowRight
} from 'lucide-react';

export function FydpSpotlight() {
  return (
    <section id="fydp-spotlight" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-accent-violet/10 via-accent-indigo/15 to-accent-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Research Capstone Spotlight Wrapper Card */}
        <div className="relative rounded-3xl p-8 sm:p-10 md:p-12 bg-gradient-to-b from-charcoal-900 via-charcoal-850 to-charcoal-900 border-2 border-accent-violet/30 shadow-2xl overflow-hidden text-white">
          
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Top Academic Tag */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-accent-violet/20 border border-accent-violet/40 text-accent-violet">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-violet font-bold">
                  Final Year Development Project II (FYDP II) Spotlight
                </span>
                <p className="text-[11px] font-mono text-zinc-400">
                  United International University • Dept. of Computer Science & Engineering
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-indigo/20 text-accent-indigo border border-accent-indigo/30 font-semibold">
              Completed Research Capstone
            </span>
          </div>

          {/* Main Title */}
          <div className="relative z-10 pt-8 pb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Context-Wise Multimodal Meme Analysis — Veracity Intent Classification with Faithful Explanation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
              An applied AI research capstone tackling deceptive and harmful internet memes by unifying vision semantics, language nuances, and contextual background into an explainable, dual-objective classification system.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            
            {/* Pillar 1: The Problem */}
            <div className="p-6 rounded-2xl bg-charcoal-950/70 border border-zinc-800/80 hover:border-accent-violet/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                  <Search className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">1. The Problem Addressed</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Memes rarely convey literal truth. Their visual elements, overlaid typography, and implied cultural subtexts interact non-linearly to mask satire, propaganda, or intentional disinformation. Traditional unimodal models (text-only or image-only) fail to detect the emergent deception caused by cross-modal dissonance.
              </p>
            </div>

            {/* Pillar 2: Multimodal Approach */}
            <div className="p-6 rounded-2xl bg-charcoal-950/70 border border-zinc-800/80 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">2. Multimodal Analysis Approach</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The architecture leverages dual-stream encoders to extract spatial vision features alongside optical text and background context embeddings. A cross-modal attention fusion mechanism aligns linguistic cues with image regions, capturing humor mechanics, irony, and factual contradictions.
              </p>
            </div>

            {/* Pillar 3: Veracity & Intent Classification */}
            <div className="p-6 rounded-2xl bg-charcoal-950/70 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">3. Veracity & Intent Classification</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Rather than treating content as merely &quot;toxic&quot; or &quot;benign,&quot; the model uses a disentangled multi-task objective: classifying the author&apos;s communicative intent (humorous, sarcastic, propagandistic, or harmful) simultaneously with empirical veracity (supported fact vs. fabricated falsehood).
              </p>
            </div>

            {/* Pillar 4: Faithful Model Explanation */}
            <div className="p-6 rounded-2xl bg-charcoal-950/70 border border-zinc-800/80 hover:border-accent-indigo/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">4. Faithful Model Explanation</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Recognizing that opaque AI decisions are unusable in moderation and research, the framework incorporates an explainability module. It outputs token-level rationales and visual saliency maps, providing faithful, interpretable evidence for why a meme was classified under a specific veracity or intent category.
              </p>
            </div>

          </div>

          {/* Research Architecture Pipeline Visualization */}
          <div className="relative z-10 p-6 rounded-2xl bg-charcoal-950/90 border border-zinc-800/90 my-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-accent-blue font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multimodal Research Pipeline Overview</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-accent-blue font-bold mb-1">[Step 1] Input Stream</div>
                <div className="text-zinc-400 text-[11px]">Meme Image + Extracted OCR Text + Topic Context</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-accent-violet font-bold mb-1">[Step 2] Dual Encoders</div>
                <div className="text-zinc-400 text-[11px]">Vision Embeddings & Contextual Language Features</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-emerald-400 font-bold mb-1">[Step 3] Cross-Fusion</div>
                <div className="text-zinc-400 text-[11px]">Attention Matrix aligning visual regions with text intent</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-amber-400 font-bold mb-1">[Step 4] Dual Heads + XAI</div>
                <div className="text-zinc-400 text-[11px]">Veracity & Intent Labels with Faithful Visual Rationales</div>
              </div>
            </div>
          </div>

          {/* Action Links & Resources */}
          <div className="relative z-10 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/abrar-jaman-gazi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-accent-violet hover:bg-accent-violet/90 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
              >
                <Github className="w-4 h-4" />
                <span>Research Repository</span>
              </a>

              <a
                href={`mailto:${'abrarjamangazi.study@gmail.com'}?subject=Inquiry%20regarding%20FYDP%20II%20Multimodal%20Meme%20Analysis`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-zinc-200 bg-charcoal-800 hover:bg-charcoal-700 border border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              >
                <FileText className="w-4 h-4 text-accent-blue" />
                <span>Request Manuscript / Slides</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Academic Capstone • UIU CSE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
