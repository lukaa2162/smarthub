'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const steps = [
{
  num: '01',
  title: 'Choose Your Niche & Platform',
  desc: 'Tell us what you create and where you post — Instagram, TikTok, or YouTube. Your kit is built around your exact niche, not a generic template.',
  accent: 'cyan',
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>

},
{
  num: '02',
  title: 'Receive Your Weekly Kit',
  desc: 'Every week, your full content kit lands in your inbox — Canva recipes, CapCut styles, AI prompts, and a 7-day posting plan. No waiting, no guessing.',
  accent: 'purple',
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>

},
{
  num: '03',
  title: 'Post With Confidence',
  desc: 'Follow your plan, use the recipes and prompts, and publish. No design degree, no creative block — just consistent, professional content every single week.',
  accent: 'cyan',
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>

}];


const galleryImages = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c844cd96-1772077353352.png",
  alt: 'Creator filming content in a bright, minimalist studio with ring light and phone setup'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_18f1ee956-1772152661755.png",
  alt: 'Young woman editing video on laptop in a dark, moody workspace with neon accent lighting'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11220fc01-1772193958009.png",
  alt: 'Content creator planning posts on a digital tablet with scheduling app open, dark background'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a64e8724-1772261763800.png",
  alt: 'Influencer filming a TikTok video in a stylish room with warm lighting, phone on tripod'
}];


export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el, i) => {
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
    <section id="how-it-works" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px neon-line" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-0 w-80 h-80 blob-cyan opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo grid */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages?.map((img, i) =>
              <div
                key={i}
                className={`overflow-hidden rounded-2xl group ${i === 1 ? 'mt-8' : ''} ${i === 3 ? 'mt-8' : ''}`}>
                
                  <AppImage
                  src={img?.src}
                  alt={img?.alt}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                
                </div>
              )}
            </div>
          </div>

          {/* Right: Steps */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="reveal-right">
              <div className="tag-chip mb-6 w-fit">Simple Process</div>
              <h2 className="section-title font-mono text-foreground mb-4">
                From sign-up to{' '}
                <span className="text-gradient-cyan">posting in minutes.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                No complicated setup. No learning curve. Just a system that works from week one.
              </p>
            </div>

            {steps?.map((step, i) =>
            <div
              key={step?.num}
              className="reveal-up flex items-start gap-5 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}>
              
                {/* Number badge */}
                <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-mono font-bold text-sm transition-colors duration-300 ${
                step?.accent === 'cyan' ? 'bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20' : 'bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/20'}`
                }>
                
                  {step?.num}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={step?.accent === 'cyan' ? 'text-primary' : 'text-accent'}>
                      {step?.icon}
                    </span>
                    <h3 className="font-mono font-bold text-foreground text-base">{step?.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step?.desc}</p>
                </div>
              </div>
            )}

            <div className="reveal-up pt-4">
              <a
                href="https://whop.com/smart-hub-5a8a/smart-hub-d6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 glow-cyan">
                
                Start Your First Week
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}