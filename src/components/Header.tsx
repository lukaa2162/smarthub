'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border' :'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <AppLogo size={36} onClick={() => {}} />
          <span className="font-mono font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            Smart<span className="text-primary">Hub</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            className="relative px-6 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-all duration-300 glow-cyan"
          >
            Get SmartHub — $7.99/mo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-5">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="mt-2 px-6 py-3 rounded-lg text-sm font-semibold text-center text-primary-foreground bg-primary glow-cyan"
            onClick={() => setMenuOpen(false)}
          >
            Get SmartHub — $7.99/mo
          </a>
        </div>
      </div>
    </header>
  );
}