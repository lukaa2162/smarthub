import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Footer CTA */}
        <div className="text-center mb-14">
          <p className="tag-chip mx-auto mb-6 w-fit">Start Today</p>
          <h2 className="font-mono font-bold text-foreground mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}>
            Your content system is{' '}
            <span className="text-gradient-cyan">one click away.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto mb-8 leading-relaxed">
            Join thousands of creators who stopped guessing and started posting with confidence.
          </p>
          <a
            href="https://whop.com/smart-hub-5a8a/smart-hub-d6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 glow-cyan"
          >
            Get SmartHub — $7.99/mo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="neon-line mb-10" />

        {/* Footer Row — Pattern 7: Arc Browser Split */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <AppLogo size={28} />
              <span className="font-mono font-bold text-base text-foreground">
                Smart<span className="text-primary">Hub</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Weekly content kits for every creator.</p>
          </div>

          {/* Right: Links */}
          <nav className="flex items-center flex-wrap justify-center sm:justify-end gap-6">
            {[
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Subscribe', href: 'https://whop.com/smart-hub-5a8a/smart-hub-d6/' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] flex items-center"
              >
                {link?.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} SmartHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <span className="opacity-30">·</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}