'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock, 
  Sparkles,
  Loader2
} from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
    delivered?: boolean;
  }>({
    type: 'idle',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side quick check
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete all fields before sending.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus({
        type: 'success',
        message: data.message,
        delivered: data.delivered,
      });

      // Reset form on success
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'An error occurred while submitting. Please reach out via email directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wide mb-3.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Have an opportunity or an interesting project in mind?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Whether you&apos;re discussing software development roles, ML collaboration, or campus projects, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-charcoal-900/80 border border-zinc-200/90 dark:border-white/10 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-blue" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email Item */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-charcoal-800/60 border border-zinc-200/70 dark:border-zinc-700/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <Mail className="w-3.5 h-3.5 text-accent-blue" />
                    <span>Primary Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-blue hover:text-accent-indigo transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-accent-blue transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-charcoal-800/60 border border-zinc-200/70 dark:border-zinc-700/60 hover:border-accent-blue/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-accent-blue" />
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-accent-blue transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                        /in/abrar-jaman-gazi
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent-blue transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-charcoal-800/60 border border-zinc-200/70 dark:border-zinc-700/60 hover:border-accent-violet/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-200" />
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-accent-violet transition-colors">
                        GitHub
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                        @abrar-jaman-gazi
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent-violet transition-colors" />
                </a>
              </div>

              {/* Response Time Note */}
              <div className="flex items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <Clock className="w-3.5 h-3.5 text-accent-blue" />
                <span>Typically responding within 24–48 hours</span>
              </div>
            </div>

            {/* University & Location Badge */}
            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-charcoal-900/50 border border-zinc-200/80 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1">
              <div className="text-zinc-900 dark:text-zinc-200 font-semibold">
                United International University (UIU)
              </div>
              <div>Madani Avenue, Dhaka 1212, Bangladesh</div>
              <div className="text-[11px] text-accent-blue">Timezone: Asia/Dhaka (GMT+6)</div>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-charcoal-900/80 border border-zinc-200/90 dark:border-white/10 shadow-sm relative">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-accent-blue">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rahman"
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-charcoal-800/70 border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Email Address <span className="text-accent-blue">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-charcoal-800/70 border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Subject <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Internship, or Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-charcoal-800/70 border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Message <span className="text-accent-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share details about your idea, opportunity, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-charcoal-800/70 border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all resize-none"
                  />
                </div>

                {/* Status Feedback Banners */}
                {status.type === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.type === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Message Form Successfully Processed</span>
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-90 pl-6">
                      {status.message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-blue hover:opacity-95 shadow-md shadow-accent-indigo/20 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
