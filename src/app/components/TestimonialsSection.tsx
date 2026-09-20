'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  id: 1,
  quote:
  "I went from posting twice a month to posting five times a week. The weekly kit takes away all the decision fatigue — I just open it, follow the plan, and post. My engagement went up 180% in 6 weeks.",
  name: 'Jasmine Torres',
  role: 'Lifestyle Creator · Instagram',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e73d53d1-1772641612516.png",
  stars: 5,
  platform: 'Instagram',
  featured: true
},
{
  id: 2,
  quote:
  "The Canva recipes are genius. I don't need to know anything about design — I just follow the color names and layout instructions and my posts look professional every single time.",
  name: 'Marcus Okafor',
  role: 'Fitness Coach · TikTok',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1911a4fa8-1772591269496.png",
  stars: 5,
  platform: 'TikTok',
  featured: false
},
{
  id: 3,
  quote:
  "The AI prompts alone are worth $7.99. I paste them into ChatGPT and get captions that actually sound like me. My YouTube community has grown 40% since I started using SmartHub.",
  name: 'Priya Nair',
  role: 'Finance Creator · YouTube',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12efc4d63-1772909974804.png",
  stars: 5,
  platform: 'YouTube',
  featured: false
}];


const stats = [
{ value: '2,400+', label: 'Active Creators' },
{ value: '4.9★', label: 'Avg. Rating' },
{ value: '180%', label: 'Avg. Engagement Lift' }];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 130);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = testimonials.find((t) => t.featured)!;
  const stacked = testimonials.filter((t) => !t.featured);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px neon-line" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 blob-purple opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="tag-chip mx-auto mb-6 w-fit">Social Proof</div>
          <h2 className="section-title font-mono text-foreground mb-4">
            Trusted by{' '}
            <span className="text-gradient-cyan">2,400+ creators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            From TikTok beginners to YouTube veterans — here&#39;s what SmartHub subscribers are saying.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16 reveal-up">
          {stats.map((stat) =>
          <div key={stat.label} className="text-center p-4 rounded-xl glass-card border border-border">
              <p className="text-2xl font-mono font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </div>
          )}
        </div>

        {/* 12-col testimonial grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: Title block */}
          <div className="lg:col-span-3 reveal-left space-y-6">
            <div>
              <p className="font-mono text-4xl font-bold text-foreground leading-tight">
                Real creators.
                <br />
                <span className="text-gradient-cyan">Real results.</span>
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              No paid endorsements. These are real SmartHub subscribers sharing their experience.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {testimonials.map((t) =>
                <AppImage
                  key={t.id}
                  src={t.avatar}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full border-2 border-background object-cover" />

                )}
              </div>
              <p className="text-xs text-muted-foreground font-medium">Join them today</p>
            </div>
          </div>

          {/* Center: Featured testimonial */}
          <div className="lg:col-span-5 reveal-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group" style={{ minHeight: '420px' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1c844cd96-1772077353352.png"
                alt="Creator filming content in a dark studio with ring light and neon accent lighting behind them"
                width={600}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 absolute inset-0"
                style={{ minHeight: '420px' }} />
              
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: featured.stars }).map((_, i) =>
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00f5ff" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )}
                </div>
                <p className="text-base leading-relaxed italic mb-5 text-white/90">
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <AppImage
                    src={featured.avatar}
                    alt={featured.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full border-2 border-primary/40 object-cover" />
                  
                  <div>
                    <p className="font-mono font-bold text-sm text-white">{featured.name}</p>
                    <p className="text-xs text-white/60">{featured.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stacked cards */}
          <div className="lg:col-span-4 space-y-5 reveal-right">
            {stacked.map((t) =>
            <div
              key={t.id}
              className="glass-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:glow-cyan transition-all duration-500 space-y-4">
              
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) =>
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#00f5ff" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                )}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <AppImage
                    src={t.avatar}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover border border-border" />
                  
                    <div>
                      <p className="text-xs font-mono font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                    {t.platform}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}