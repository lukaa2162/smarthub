'use client';

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'What exactly do I get each week?',
    a: "Every week you receive a complete content kit: Canva layout recipes (with exact color names like navy, cream, and coral — no design files needed), CapCut caption styles, 5–10+ AI prompts for captions and scripts, and a full 7-day posting plan. Everything is tailored to your chosen niche and platform.",
  },
  {
    q: 'Do I need Canva Pro or any paid tools?',
    a: "No. The Canva layout recipes work with Canva's free plan. You don't receive design files — instead you get step-by-step instructions with exact color names and layout descriptions that you build yourself in minutes. No Canva Pro required.",
  },
  {
    q: 'Which platforms does SmartHub support?',
    a: "SmartHub creates content kits for Instagram, TikTok, and YouTube. Basic plan covers one platform of your choice. Pro plan covers all three, so you get a customized kit for each platform every week.",
  },
  {
    q: 'How is the content customized to my niche?',
    a: "When you subscribe, you tell us your niche (fitness, food, finance, fashion, etc.) and your primary platform. Your weekly kit — including the AI prompts, posting plan, and caption styles — is built specifically for that combination. No generic one-size-fits-all content.",
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes, absolutely. SmartHub is a month-to-month subscription with no contracts or commitments. You can cancel anytime from your account settings and you won't be charged again after your current billing period ends.",
  },
  {
    q: 'What if I post on multiple platforms?',
    a: "The Basic plan ($7.99/mo) covers one platform. The Pro plan ($9.99/mo) includes all three platforms — Instagram, TikTok, and YouTube — with a separate customized kit for each. Most multi-platform creators find the Pro plan worth it for the extra $2/month.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
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
    <section id="faq" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px neon-line" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg-dense opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-0 w-80 h-80 blob-purple opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal-up">
          <div className="tag-chip mx-auto mb-6 w-fit">FAQ</div>
          <h2 className="section-title font-mono text-foreground mb-4">
            Got questions?{' '}
            <span className="text-gradient-cyan">We have answers.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know before your first kit arrives.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className="reveal-up glass-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/20"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-mono font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-300">
                  {faq?.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-primary/10 border-primary/30 text-primary rotate-45' :'bg-muted/50 border-border text-muted-foreground'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 border-t border-border pt-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq?.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="reveal-up mt-10 text-center p-6 rounded-2xl glass-card border border-border">
          <p className="text-foreground font-semibold mb-2">Still have questions?</p>
          <p className="text-muted-foreground text-sm mb-4">
            We respond to every message within 24 hours.
          </p>
          <a
            href="https://whop.com/smart-hub-5a8a/smart-hub-d6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Visit SmartHub on Whop
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}