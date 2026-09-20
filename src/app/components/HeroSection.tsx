'use client';

import React, { useEffect, useRef } from 'react';

const floatingCards = [
  {
    id: 1,
    label: 'This Week\'s Kit',
    platform: 'Instagram',
    items: ['Navy + Cream layout', 'Reel caption style', '3 AI prompts'],
    accent: 'cyan',
    delay: '0s',
  },
  {
    id: 2,
    label: 'Posting Plan',
    platform: 'TikTok',
    items: ['Mon · Wed · Fri', 'Hook templates', 'Trending audio cues'],
    accent: 'purple',
    delay: '1.5s',
  },
  {
    id: 3,
    label: 'This Week\'s Kit',
    platform: 'YouTube',
    items: ['Thumbnail recipe', 'Hook script opener', '3 AI video prompts'],
    accent: 'green',
    delay: '3s',
  },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      initParticles();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrame);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background grid-bg pt-20">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Atmospheric blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-cyan pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-purple pointer-events-none" aria-hidden="true" />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)',
          animation: 'scan-line 6s linear infinite',
          top: 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="tag-chip w-fit animate-flicker">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              Weekly Content Kit · $7.99/mo
            </div>

            {/* Main headline */}
            <h1 className="hero-title font-mono text-foreground">
              STOP
              <br />
              GUESSING
              <br />
              <span className="text-gradient-cyan glow-text-cyan">WHAT TO</span>
              <br />
              <span className="text-gradient-cyan glow-text-cyan">POST.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-sans">
              SmartHub delivers a fresh content kit every week — Canva layout recipes, CapCut caption styles, AI prompts, and a full posting plan. Customized to your niche and platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://whop.com/smart-hub-5a8a/smart-hub-d6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 glow-cyan animate-pulse-glow"
              >
                Get SmartHub — $7.99/mo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300"
              >
                See What&#39;s Inside
              </a>
            </div>
          </div>

          {/* Right: Floating Kit Cards */}
          <div className="lg:col-span-5 relative flex flex-col gap-5 items-center lg:items-end">
            {floatingCards.map((card, idx) => (
              <div
                key={card.id}
                className={`w-full max-w-sm glass-card rounded-2xl p-6 cyber-border ${
                  idx === 0 ? 'animate-float' : 'animate-float-delayed'
                } ${idx === 0 ? 'lg:translate-x-4' : 'lg:-translate-x-4'}`}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        card.accent === 'cyan' ? 'bg-primary' : card.accent === 'green' ? 'bg-green-400' : 'bg-accent'
                      }`}
                    />
                    <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-widest">
                      {card.label}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      card.accent === 'cyan' ?'bg-primary/10 text-primary border border-primary/20'
                        : card.accent === 'green' ?'bg-green-400/10 text-green-400 border border-green-400/20' :'bg-accent/10 text-accent border border-accent/20'
                    }`}
                  >
                    {card.platform}
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-2.5">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                          card.accent === 'cyan' ? 'bg-primary/10' : card.accent === 'green' ? 'bg-green-400/10' : 'bg-accent/10'
                        }`}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={card.accent === 'cyan' ? '#00f5ff' : card.accent === 'green' ? '#4ade80' : '#8b5cf6'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-sm text-foreground/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-muted-foreground">Week 38 / 52</span>
                    <span className={`text-xs font-semibold ${card.accent === 'cyan' ? 'text-primary' : card.accent === 'green' ? 'text-green-400' : 'text-accent'}`}>Active</span>
                  </div>
                  <div className="h-1 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${card.accent === 'cyan' ? 'bg-primary' : card.accent === 'green' ? 'bg-green-400' : 'bg-accent'}`}
                      style={{ width: '73%' }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative orbit ring */}
            <div
              className="absolute -z-10 w-72 h-72 rounded-full border border-primary/5 pointer-events-none hidden lg:block"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              aria-hidden="true"
            />
            <div
              className="absolute -z-10 w-96 h-96 rounded-full border border-accent/5 pointer-events-none hidden lg:block animate-spin-slow"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--background))' }}
        aria-hidden="true"
      />
    </section>
  );
}