'use client';

import React, { useEffect, useRef } from 'react';

const kitItems = [
  {
    id: 'canva',
    title: 'Canva Layout Recipes',
    description:
      'No design files, no subscriptions. Each week you get step-by-step Canva recipes with exact color names — navy, cream, coral — so you can build polished posts in minutes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    accent: 'cyan',
    colSpan: 'md:col-span-1 md:row-span-2',
    preview: ['Navy + Cream', 'Coral + White', 'Forest + Gold'],
    stat: '4 layouts / week',
  },
  {
    id: 'capcut',
    title: 'CapCut Caption Styles',
    description: 'Pre-built caption styles you can apply in seconds. Bold hooks, animated subtitles, and trend-matching text effects — ready to copy.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    accent: 'purple',
    colSpan: 'md:col-span-1',
    stat: '3 styles / week',
  },
  {
    id: 'ai',
    title: 'AI Prompts',
    description: 'Niche-specific AI prompts that write captions, hooks, and scripts. Paste into ChatGPT or any AI tool and get content in your voice.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    accent: 'cyan',
    colSpan: 'md:col-span-1',
    stat: '10+ prompts / week',
  },
  {
    id: 'plan',
    title: 'Weekly Posting Plan',
    description:
      'A full 7-day content calendar tailored to your platform — Instagram, TikTok, or YouTube. Know exactly what to post, when to post, and how to format it.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    accent: 'purple',
    colSpan: 'md:col-span-2',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    stat: 'Full 7-day plan',
  },
];

export default function WhatYouGetSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-up');
            elements.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px neon-line" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg-dense opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob-purple pointer-events-none opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="tag-chip mx-auto mb-6 w-fit">What&#39;s Inside</div>
          <h2 className="section-title font-mono text-foreground mb-4">
            Everything you need,{' '}
            <span className="text-gradient-cyan">delivered weekly.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            One subscription. Four powerful tools. A complete content system that refreshes every week.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
            Array: [canva cs-1 rs-2, capcut cs-1 rs-1, ai cs-1 rs-1, plan cs-2 rs-1]
            Row 1: [col-1: canva rs-2] [col-2: capcut cs-1]
            Row 2: [col-1: ← canva spans] [col-2: ai cs-1]
            Row 3: [col-1+2: plan cs-2]
            Placed 4/4 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Canva — row-span-2 */}
          <div className="reveal-up md:row-span-2 glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 hover:glow-cyan flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                {kitItems?.[0]?.icon}
              </div>
              <span className="text-xs font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                {kitItems?.[0]?.stat}
              </span>
            </div>
            <h3 className="text-xl font-mono font-bold text-foreground mb-3">{kitItems?.[0]?.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{kitItems?.[0]?.description}</p>

            {/* Color swatches preview */}
            <div className="mt-auto space-y-2">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">This week&#39;s palette</p>
              {kitItems?.[0]?.preview?.map((palette, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/20 transition-colors">
                  <div className="flex gap-1.5">
                    {i === 0 && (
                      <>
                        <div className="w-4 h-4 rounded-full" style={{ background: '#1B2A4A' }} />
                        <div className="w-4 h-4 rounded-full" style={{ background: '#F5F0E8' }} />
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <div className="w-4 h-4 rounded-full" style={{ background: '#FF6B6B' }} />
                        <div className="w-4 h-4 rounded-full" style={{ background: '#FFFFFF' }} />
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <div className="w-4 h-4 rounded-full" style={{ background: '#2D5016' }} />
                        <div className="w-4 h-4 rounded-full" style={{ background: '#D4A853' }} />
                      </>
                    )}
                  </div>
                  <span className="text-sm text-foreground/80 font-medium">{palette}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: CapCut */}
          <div className="reveal-up glass-card-purple rounded-2xl p-7 group hover:border-accent/30 transition-all duration-500 hover:glow-purple flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                {kitItems?.[1]?.icon}
              </div>
              <span className="text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                {kitItems?.[1]?.stat}
              </span>
            </div>
            <h3 className="text-lg font-mono font-bold text-foreground mb-2">{kitItems?.[1]?.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{kitItems?.[1]?.description}</p>

            {/* Style tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {['Bold Hook', 'Animated Sub', 'Trend Text']?.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: AI Prompts */}
          <div className="reveal-up glass-card rounded-2xl p-7 group hover:border-primary/30 transition-all duration-500 hover:glow-cyan flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                {kitItems?.[2]?.icon}
              </div>
              <span className="text-xs font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                {kitItems?.[2]?.stat}
              </span>
            </div>
            <h3 className="text-lg font-mono font-bold text-foreground mb-2">{kitItems?.[2]?.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{kitItems?.[2]?.description}</p>

            {/* Prompt preview */}
            <div className="mt-5 p-3 rounded-lg bg-muted/50 border border-border font-mono text-xs text-muted-foreground leading-relaxed">
              <span className="text-primary">&gt;</span> Write a hook for a [niche] reel about [topic] that makes people stop scrolling in the first 3 seconds...
            </div>
          </div>

          {/* Card 4: Weekly Plan — full width */}
          <div className="reveal-up md:col-span-2 glass-card-purple rounded-2xl p-7 group hover:border-accent/30 transition-all duration-500 hover:glow-purple">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    {kitItems?.[3]?.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {kitItems?.[3]?.stat}
                  </span>
                </div>
                <h3 className="text-xl font-mono font-bold text-foreground mb-2">{kitItems?.[3]?.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{kitItems?.[3]?.description}</p>
              </div>

              {/* Platform badges */}
              <div className="flex md:flex-col gap-3 flex-shrink-0">
                {kitItems?.[3]?.platforms?.map((platform) => (
                  <div
                    key={platform}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-muted/50 border border-border hover:border-accent/30 transition-colors cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">{platform}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7-day mini calendar */}
            <div className="mt-6 pt-5 border-t border-border grid grid-cols-7 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']?.map((day, i) => (
                <div key={day} className="flex flex-col items-center gap-1.5">
                  <span className="text-xs text-muted-foreground font-mono">{day}</span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      [0, 2, 4]?.includes(i)
                        ? 'bg-accent/20 border border-accent/40 text-accent' :'bg-muted/30 border border-border text-muted-foreground'
                    }`}
                  >
                    {[0, 2, 4]?.includes(i) ? '✓' : '—'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}