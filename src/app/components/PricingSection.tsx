'use client';

import React, { useEffect, useRef } from 'react';

const basicPlan = {
  id: 'basic',
  name: 'Content Kit',
  price: '$7.99',
  period: '/month',
  tagline: 'For Instagram, TikTok & YouTube',
  features: [
    { text: 'Canva layout recipes (color-named steps — no design files needed)', included: true },
    { text: 'CapCut caption styles for your niche', included: true },
    { text: 'AI prompts tailored to your topic', included: true },
    { text: 'Weekly posting plan written for your niche', included: true },
    { text: 'Works on Instagram, TikTok, or YouTube', included: true },
    { text: 'Tell us your niche at checkout — kit is built for you', included: true },
    { text: 'Open Canva or CapCut, follow steps, and publish', included: true },
  ],
};

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 150);
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
    <section id="pricing" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px neon-line" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg-dense opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 blob-cyan opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 blob-purple opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="tag-chip mx-auto mb-6 w-fit">Pricing</div>
          <h2 className="section-title font-mono text-foreground mb-4">
            Less than a coffee.{' '}
            <span className="text-gradient-cyan">Way more value.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Cancel anytime. No contracts. Your weekly kit arrives ready to post — just open Canva or CapCut and follow the steps.
          </p>
        </div>

        {/* Single Plan Card */}
        <div className="reveal-up max-w-lg mx-auto">
          <div className="relative glass-card rounded-2xl p-8 border border-primary/50 glow-cyan transition-all duration-500">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              One Simple Plan
            </div>

            {/* Plan header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono font-bold text-foreground text-xl">{basicPlan?.name}</h3>
                <span className="text-xs text-muted-foreground">{basicPlan?.tagline}</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-mono font-bold text-foreground">{basicPlan?.price}</span>
                <span className="text-muted-foreground text-base mb-1.5">{basicPlan?.period}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-6" />

            {/* Features */}
            <ul className="space-y-3.5 mb-8">
              {basicPlan?.features?.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary/10 border border-primary/20">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground leading-snug">{feat?.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://whop.com/smart-hub-5a8a/smart-hub-d6/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-primary text-primary-foreground hover:opacity-90"
            >
              Get Content Kit — {basicPlan?.price}/mo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>

            <p className="text-center text-xs text-muted-foreground mt-3">Cancel anytime · No contracts</p>
          </div>
        </div>

        {/* Guarantee strip */}
        <div className="reveal-up mt-12 p-6 rounded-2xl glass-card border border-border text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">No risk.</span> If your first week&#39;s kit doesn&#39;t deliver value, reach out and we&#39;ll make it right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}