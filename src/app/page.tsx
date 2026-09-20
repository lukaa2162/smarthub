import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import WhatYouGetSection from '@/app/components/WhatYouGetSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import PricingSection from '@/app/components/PricingSection';
import FAQSection from '@/app/components/FAQSection';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhatYouGetSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}